import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { ChasingSquaresLoader } from '../../src';
import { Center } from '../index.stories';
import { color } from '@storybook/addon-knobs';

storiesOf('ChasingSquaresLoader', module)
  .add('default props', () => <Center><ChasingSquaresLoader color={color('color', '#4092de')}/></Center>)
;
