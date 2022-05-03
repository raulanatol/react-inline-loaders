import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LittleDotLoader } from '../LittleDotLoader';

export default {
  title: 'LittleDotLoader',
  component: LittleDotLoader
} as ComponentMeta<typeof LittleDotLoader>;

export const Default: ComponentStory<typeof LittleDotLoader> = (args) =>
  <LittleDotLoader {...args}/>;
