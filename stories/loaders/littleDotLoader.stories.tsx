import * as React from 'react';

import { LittleDotLoader } from '../../src';
import { storiesOf } from '@storybook/react';

storiesOf('LittleDotLoader', module)
  .add('default props', () => <LittleDotLoader/>)
  .add('red color', () => <LittleDotLoader color="#FF0000"/>)
;
