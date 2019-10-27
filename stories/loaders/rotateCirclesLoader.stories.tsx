import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { RotateCirclesLoader } from '../../src';
import { Center } from '../index.stories';
import { color } from '@storybook/addon-knobs';

storiesOf('RotateCirclesLoader', module)
  .add('default props', () => <Center><RotateCirclesLoader color1={color('color1', '#4092de')} color2={color('color2', '#66d53f')}/></Center>)
;
