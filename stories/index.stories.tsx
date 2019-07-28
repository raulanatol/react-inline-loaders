import * as React from 'react';

import { storiesOf } from '@storybook/react';
import ReactMarkdown from 'react-markdown';

const readmeMD = require('../README.md').default;
storiesOf('Introduction', module).add('to react-inline-loaders', () => <ReactMarkdown source={readmeMD}/>);
