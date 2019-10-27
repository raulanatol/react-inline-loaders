import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DotLineLoader } from '../../src';
import { Center } from '../index.stories';
import { color } from '@storybook/addon-knobs';

storiesOf('DotLineLoader', module)
  .add('default props', () => <Center><DotLineLoader color={color('color', '#4092de')}/></Center>)
;
