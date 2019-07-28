import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { DotWaveLoader } from '../../src';

storiesOf('DotWaveLoader', module)
  .add('default props', () => <DotWaveLoader/>)
  .add('red background', () => <DotWaveLoader color="#FF0000"/>)
;
