import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import DotWaveLoader from '../../src/loaders/DotWaveLoader';
import { renderRadiumComponentWithStyleRoot } from '../utils/utils';

describe('DotWaveLoader', () => {
  jsdom();

  it('should render 5 dots', () => {
    const output = renderRadiumComponentWithStyleRoot(<DotWaveLoader />);
    const dots = TestUtils.scryRenderedDOMComponentsWithClass(output, 'dot');
    expect(dots.length).to.equal(5);
  });

  it('should render 5 red dots', () => {
    const output = renderRadiumComponentWithStyleRoot(<DotWaveLoader color="#FF0000"/>);
    const dots = TestUtils.scryRenderedDOMComponentsWithClass(output, 'dot');
    expect(dots[0].style.background).to.equal('rgb(255, 0, 0)');
    expect(dots[1].style.background).to.equal('rgb(255, 0, 0)');
    expect(dots[2].style.background).to.equal('rgb(255, 0, 0)');
    expect(dots[3].style.background).to.equal('rgb(255, 0, 0)');
    expect(dots[4].style.background).to.equal('rgb(255, 0, 0)');
  });

  it('should render 5 green dots', () => {
    const output = renderRadiumComponentWithStyleRoot(<DotWaveLoader color="#00FF00"/>);
    const dots = TestUtils.scryRenderedDOMComponentsWithClass(output, 'dot');
    expect(dots[0].style.background).to.equal('rgb(0, 255, 0)');
    expect(dots[1].style.background).to.equal('rgb(0, 255, 0)');
    expect(dots[2].style.background).to.equal('rgb(0, 255, 0)');
    expect(dots[3].style.background).to.equal('rgb(0, 255, 0)');
    expect(dots[4].style.background).to.equal('rgb(0, 255, 0)');
  });
});
