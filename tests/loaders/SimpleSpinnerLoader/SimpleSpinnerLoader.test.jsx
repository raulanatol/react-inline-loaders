import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SimpleSpinnerLoader from '../../../src/loaders/SimpleSpinnerLoader/SimpleSpinnerLoader';
import { colorEquals } from '../../utils/utils';

describe('SimpleSpinnerLoader', () => {
  it('should render a spinner', () => {
    const wrapper = shallow(<SimpleSpinnerLoader />);
    const spinner = wrapper.find('div > div');
    expect(spinner.length).to.equal(1);
  });

  it('should render a red spinner', () => {
    const wrapper = shallow(<SimpleSpinnerLoader color="#FF0000"/>);
    const spinner = wrapper.find('div > div');
    colorEquals(spinner.at(0).prop('style').background, 'transparent');
    colorEquals(spinner.at(0).prop('style').borderLeftColor, '#FF0000');
  });

  it('should render a black spinner with white background', () => {
    const wrapper = shallow(<SimpleSpinnerLoader color="#000" backgroundColor="#FFF"/>);
    const spinner = wrapper.find('div > div');
    colorEquals(spinner.at(0).prop('style').background, '#FFF');
    colorEquals(spinner.at(0).prop('style').borderLeftColor, '#000');
  });
});
