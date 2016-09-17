import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import LittleDotLoader from '../../src/loaders/LittleDotLoader';
import { renderRadiumComponentWithStyleRoot } from '../utils/utils';

describe('LittleDotLoader', () => {
  jsdom();

  it('should render a pulse', () => {
    const output = renderRadiumComponentWithStyleRoot(<LittleDotLoader />);
    const pulse = TestUtils.scryRenderedDOMComponentsWithClass(output, 'pulse');
    expect(pulse.length).to.equal(1);
  });

  it('should render an explosion', () => {
    const output = renderRadiumComponentWithStyleRoot(<LittleDotLoader />);
    const explosion = TestUtils.scryRenderedDOMComponentsWithClass(output, 'explosion');
    expect(explosion.length).to.equal(1);
  });
});
