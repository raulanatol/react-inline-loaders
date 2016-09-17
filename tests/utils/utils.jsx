import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Radium, { StyleRoot } from 'radium';
import { assert } from 'chai';

const color = require('onecolor');

/* eslint-disable new-cap, import/prefer-extraneous-dependencies, import/prefer-default-export */
export function renderRadiumComponentWithStyleRoot(component) {
  const ComponentToRender = Radium(() =>
    <StyleRoot>
      {component}
    </StyleRoot>
  );
  return TestUtils.renderIntoDocument(<ComponentToRender />);
}

export function colorEquals(actual, expected) {
  const actualColor = color(actual);
  const expectedColor = color(expected);
  assert(actualColor.equals(expectedColor),
    'expected #{act} to be the same color as #{exp}',
    'expected #{act} to be a different color than #{exp}',
    actualColor.hex(),
    expectedColor.hex()
  );
}
