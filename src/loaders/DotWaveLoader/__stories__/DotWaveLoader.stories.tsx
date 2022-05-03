import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DotWaveLoader } from '../DotWaveLoader';

export default {
  title: 'DotWaveLoader',
  component: DotWaveLoader
} as ComponentMeta<typeof DotWaveLoader>;

export const Default: ComponentStory<typeof DotWaveLoader> = (args) =>
  <DotWaveLoader {...args}/>;
