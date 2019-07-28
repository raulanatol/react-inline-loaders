import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { ChasingSquaresLoader } from '../../src';

storiesOf('ChasingSquaresLoader', module)
  .add('default props', () => <ChasingSquaresLoader/>)
  .add('red background', () => <ChasingSquaresLoader color="#FF0000"/>)
;
