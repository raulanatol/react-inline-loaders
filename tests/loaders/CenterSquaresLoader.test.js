import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import CenterSquaresLoader from '../../src/loaders/CenterSquaresLoader';
import { renderRadiumComponentWithStyleRoot } from '../utils/utils';

describe('CenterSquaresLoader', () => {
  jsdom();

  it('should render 4 squares', () => {
    const output = renderRadiumComponentWithStyleRoot(<CenterSquaresLoader />);
    const square = TestUtils.scryRenderedDOMComponentsWithClass(output, 'square');
    expect(square.length).to.equal(4);
  });

  it('should render 4 red squares', () => {
    const output = renderRadiumComponentWithStyleRoot(<CenterSquaresLoader color="#FF0000"/>);
    const square = TestUtils.scryRenderedDOMComponentsWithClass(output, 'square');
    expect(square[0].style.background).to.equal('rgb(255, 0, 0)');
    expect(square[1].style.background).to.equal('rgb(255, 0, 0)');
    expect(square[2].style.background).to.equal('rgb(255, 0, 0)');
    expect(square[3].style.background).to.equal('rgb(255, 0, 0)');
  });
});
