import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { CenterSquaresLoader, ChasingSquaresLoader, DotLineLoader } from '../../src';

storiesOf('DotLineLoader', module)
  .add('default props', () => <DotLineLoader/>);
