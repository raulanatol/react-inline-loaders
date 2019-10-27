import { addDecorator, addParameters, configure } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  req('./index.stories.tsx');
  req.keys().forEach(filename => {
    if (filename.indexOf('index.stories.tsx') === -1) {
      req(filename);
    }
  });
}

configure(loadStories, module);

addDecorator(withNotes);
addDecorator(withKnobs);

addParameters({
  options: {
    theme: {
      brandTitle: 'React Inline Loaders',
      brandUrl: 'http://natol.es/react-inline-loaders'
    }
  },
  backgrounds: [
    { name: 'white', value: '#FFF', default: true },
    { name: 'black', value: '#000' }
  ]
});
