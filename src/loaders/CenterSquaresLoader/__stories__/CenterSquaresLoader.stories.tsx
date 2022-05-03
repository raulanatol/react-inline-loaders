import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CenterSquaresLoader } from '../CenterSquaresLoader';

export default {
  title: 'CenterSquaresLoader',
  component: CenterSquaresLoader
} as ComponentMeta<typeof CenterSquaresLoader>;

export const Default: ComponentStory<typeof CenterSquaresLoader> = (args) =>
  <CenterSquaresLoader {...args}/>;
