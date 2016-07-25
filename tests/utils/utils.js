import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Radium, { StyleRoot } from 'radium';

/* eslint new-cap:off */
export function renderRadiumComponentWithStyleRoot(component) {
  const ComponentToRender = Radium(() =>
    <StyleRoot>
      {component}
    </StyleRoot>
  );
  return TestUtils.renderIntoDocument(<ComponentToRender />);
}
