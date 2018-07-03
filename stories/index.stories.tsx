import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import * as ReactMarkdown from 'react-markdown';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Introduction', module).add('to react-inline-loaders', () => {
  return <ReactMarkdown source={require('../README.md')}/>;
});
