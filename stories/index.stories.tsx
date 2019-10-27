import React, { FC } from 'react';

import { storiesOf } from '@storybook/react';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const Center: FC = ({ children }) => <Container>{children}</Container>;

const readmeMD = require('../README.md').default;
storiesOf('Introduction', module).add('to react-inline-loaders', () => <ReactMarkdown source={readmeMD}/>);
