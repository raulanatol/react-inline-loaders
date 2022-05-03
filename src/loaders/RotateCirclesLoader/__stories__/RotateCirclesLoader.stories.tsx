import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RotateCirclesLoader } from '../RotateCirclesLoader';

export default {
  title: 'RotateCirclesLoader',
  component: RotateCirclesLoader
} as ComponentMeta<typeof RotateCirclesLoader>;

export const Default: ComponentStory<typeof RotateCirclesLoader> = (args) =>
  <RotateCirclesLoader {...args}/>;
