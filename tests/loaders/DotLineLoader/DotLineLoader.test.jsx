import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DotLineLoader from '../../../src/loaders/DotLineLoader/DotLineLoader';
import { colorEquals } from '../../utils/utils';

describe('DotLineLoader', () => {
  it('should render 8 dots', () => {
    const wrapper = shallow(<DotLineLoader />);
    expect(wrapper.find('div > div').length).to.equal(8);
  });

  it('should render 8 red dots', () => {
    const wrapper = shallow(<DotLineLoader color="#FF0000"/>);
    const squares = wrapper.find('div');
    colorEquals(squares.at(1).prop('style').background, '#FF0000');
    colorEquals(squares.at(2).prop('style').background, '#FF0000');
    colorEquals(squares.at(3).prop('style').background, '#FF0000');
    colorEquals(squares.at(4).prop('style').background, '#FF0000');
    colorEquals(squares.at(5).prop('style').background, '#FF0000');
    colorEquals(squares.at(6).prop('style').background, '#FF0000');
    colorEquals(squares.at(7).prop('style').background, '#FF0000');
    colorEquals(squares.at(8).prop('style').background, '#FF0000');
  });
});
