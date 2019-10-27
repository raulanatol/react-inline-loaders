import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DotWaveLoader } from '../../src';
import { Center } from '../index.stories';
import { color } from '@storybook/addon-knobs';

storiesOf('DotWaveLoader', module)
  .add('default props', () => <Center><DotWaveLoader color={color('color', '#4092de')}/></Center>)
;
