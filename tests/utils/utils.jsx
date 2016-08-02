import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Radium, { StyleRoot } from 'radium';

/* eslint-disable new-cap, import/prefer-extraneous-dependencies, import/prefer-default-export */
export function renderRadiumComponentWithStyleRoot(component) {
  const ComponentToRender = Radium(() =>
    <StyleRoot>
      {component}
    </StyleRoot>
  );
  return TestUtils.renderIntoDocument(<ComponentToRender />);
}
