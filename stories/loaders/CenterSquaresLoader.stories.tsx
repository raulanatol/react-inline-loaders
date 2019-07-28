import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { CenterSquaresLoader } from '../../src';

storiesOf('CenterSquaresLoader', module)
  .add('default props', () => <CenterSquaresLoader/>)
  .add('red background', () => <CenterSquaresLoader color="#FF0000"/>)
;
