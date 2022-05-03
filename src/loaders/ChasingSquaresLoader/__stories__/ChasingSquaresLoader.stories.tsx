import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChasingSquaresLoader } from '../ChasingSquaresLoader';

export default {
  title: 'ChasingSquaresLoader',
  component: ChasingSquaresLoader
} as ComponentMeta<typeof ChasingSquaresLoader>;

export const Default: ComponentStory<typeof ChasingSquaresLoader> = (args) =>
  <ChasingSquaresLoader {...args}/>;
