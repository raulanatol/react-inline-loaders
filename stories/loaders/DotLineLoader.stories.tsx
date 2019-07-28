import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DotLineLoader } from '../../src';

storiesOf('DotLineLoader', module)
  .add('default props', () => <DotLineLoader/>)
  .add('red background', () => <DotLineLoader color="#FF0000"/>)
;
