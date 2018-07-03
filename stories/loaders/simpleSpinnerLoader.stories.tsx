import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { CenterSquaresLoader, ChasingSquaresLoader, DotLineLoader, DotWaveLoader, LittleDotLoader, RotateCirclesLoader, SimpleSpinnerLoader } from '../../src';

storiesOf('SimpleSpinnerLoader', module)
  .add('default props', () => <SimpleSpinnerLoader/>);
