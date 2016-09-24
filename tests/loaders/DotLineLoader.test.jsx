import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import DotLineLoader from '../../src/loaders/DotLineLoader';
import { renderRadiumComponentWithStyleRoot, colorEquals } from '../utils/utils';

describe('DotLineLoader', () => {
  jsdom();

  it('should render 8 dots', () => {
    const output = renderRadiumComponentWithStyleRoot(<DotLineLoader />);
    const dots = TestUtils.scryRenderedDOMComponentsWithClass(output, 'dot');
    expect(dots.length).to.equal(8);
  });

  it('should render 8 red dots', () => {
    const output = renderRadiumComponentWithStyleRoot(<DotLineLoader color="#FF0000"/>);
    const dots = TestUtils.scryRenderedDOMComponentsWithClass(output, 'dot');
    colorEquals(dots[0].style.background, '#FF0000');
    colorEquals(dots[1].style.background, '#FF0000');
    colorEquals(dots[2].style.background, '#FF0000');
    colorEquals(dots[3].style.background, '#FF0000');
    colorEquals(dots[4].style.background, '#FF0000');
    colorEquals(dots[5].style.background, '#FF0000');
    colorEquals(dots[6].style.background, '#FF0000');
    colorEquals(dots[7].style.background, '#FF0000');
  });
});
