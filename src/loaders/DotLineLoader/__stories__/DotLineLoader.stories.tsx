import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DotLineLoader } from '../DotLineLoader';

export default {
  title: 'DotLineLoader',
  component: DotLineLoader
} as ComponentMeta<typeof DotLineLoader>;

export const Default: ComponentStory<typeof DotLineLoader> = (args) =>
  <DotLineLoader {...args}/>;
