import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../stories', true, /.stories.tsx$/);

setOptions({
  name: 'React Inline Loaders',
  url: 'http://natol.es/react-inline-loaders'
});

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
