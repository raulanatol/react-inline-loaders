import React from 'react';
import { expect } from 'chai';
import jsdom from 'mocha-jsdom';
import TestUtils from 'react-addons-test-utils';
import SimpleSpinnerLoader from '../../src/loaders/SimpleSpinnerLoader';
import { renderRadiumComponentWithStyleRoot, colorEquals } from '../utils/utils';

describe('SimpleSpinnerLoader', () => {
  jsdom();

  it('should render a spinner', () => {
    const output = renderRadiumComponentWithStyleRoot(<SimpleSpinnerLoader />);
    const spinner = TestUtils.scryRenderedDOMComponentsWithClass(output, 'spinner');
    expect(spinner.length).to.equal(1);
  });

  it('should render a red spinner', () => {
    const output = renderRadiumComponentWithStyleRoot(<SimpleSpinnerLoader color="#FF0000"/>);
    const spinner = TestUtils.scryRenderedDOMComponentsWithClass(output, 'spinner');
    expect(spinner[0].style.background).to.equal('transparent');
    colorEquals(spinner[0].style.borderLeftColor, '#FF0000');
  });

  it('should render a black spinner with white background', () => {
    const output = renderRadiumComponentWithStyleRoot(<SimpleSpinnerLoader color="#000" backgroundColor="#FFF"/>);
    const spinner = TestUtils.scryRenderedDOMComponentsWithClass(output, 'spinner');
    colorEquals(spinner[0].style.background, '#FFF');
    colorEquals(spinner[0].style.borderLeftColor, '#000');
  });
});
