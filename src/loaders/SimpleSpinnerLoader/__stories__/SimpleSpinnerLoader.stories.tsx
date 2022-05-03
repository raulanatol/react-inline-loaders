import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SimpleSpinnerLoader } from '../SimpleSpinnerLoader';

export default {
  title: 'SimpleSpinnerLoader',
  component: SimpleSpinnerLoader
} as ComponentMeta<typeof SimpleSpinnerLoader>;

export const Default: ComponentStory<typeof SimpleSpinnerLoader> = (args) =>
  <SimpleSpinnerLoader {...args}/>;
