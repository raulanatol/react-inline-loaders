import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { CenterSquaresLoader } from '../../src';
import { color } from '@storybook/addon-knobs';
import { Center } from '../index.stories';

storiesOf('CenterSquaresLoader', module)
  .add('default props', () => <Center><CenterSquaresLoader color={color('color', '#4092de')}/></Center>)
;
