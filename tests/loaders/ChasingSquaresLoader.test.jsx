import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import ChasingSquaresLoader from '../../src/loaders/ChasingSquaresLoader';
import { renderRadiumComponentWithStyleRoot, colorEquals } from '../utils/utils';

describe('ChasingSquaresLoader', () => {
  jsdom();

  it('should render 4 squares', () => {
    const output = renderRadiumComponentWithStyleRoot(<ChasingSquaresLoader />);
    const square = TestUtils.scryRenderedDOMComponentsWithClass(output, 'square');
    expect(square.length).to.equal(4);
  });

  it('should render 4 red squares', () => {
    const output = renderRadiumComponentWithStyleRoot(<ChasingSquaresLoader color="#FF0000"/>);
    const square = TestUtils.scryRenderedDOMComponentsWithClass(output, 'square');
    colorEquals(square[0].style.background, '#FF0000');
    colorEquals(square[1].style.background, '#FF0000');
    colorEquals(square[2].style.background, '#FF0000');
    colorEquals(square[3].style.background, '#FF0000');
  });
});
