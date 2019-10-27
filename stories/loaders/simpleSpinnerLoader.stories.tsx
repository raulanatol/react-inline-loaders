import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { SimpleSpinnerLoader } from '../../src';
import { color } from '@storybook/addon-knobs';
import { Center } from '../index.stories';

storiesOf('SimpleSpinnerLoader', module)
  .add('default props', () => <Center><SimpleSpinnerLoader color={color('color', '#4092de')} backgroundColor={color('backgroundColor', 'transparent')}/></Center>)
;
