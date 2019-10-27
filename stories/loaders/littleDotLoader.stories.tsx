import * as React from 'react';

import { LittleDotLoader } from '../../src';
import { storiesOf } from '@storybook/react';
import { Center } from '../index.stories';
import { color } from '@storybook/addon-knobs';

storiesOf('LittleDotLoader', module)
  .add('default props', () => <Center><LittleDotLoader color={color('color', '#4092de')}/></Center>)
;
