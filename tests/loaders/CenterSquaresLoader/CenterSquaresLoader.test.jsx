import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CenterSquaresLoader from '../../../src/loaders/CenterSquaresLoader/CenterSquaresLoader';
import { colorEquals } from '../../utils/utils';

describe('CenterSquaresLoader', () => {
  it('should render 4 squares', () => {
    const wrapper = shallow(<CenterSquaresLoader />);
    expect(wrapper.find('div > div').length).to.equal(4);
  });

  it('should render 4 red squares', () => {
    const wrapper = shallow(<CenterSquaresLoader color="#FF0000"/>);
    const squares = wrapper.find('div');
    colorEquals(squares.at(1).prop('style').background, '#FF0000');
    colorEquals(squares.at(2).prop('style').background, '#FF0000');
    colorEquals(squares.at(3).prop('style').background, '#FF0000');
    colorEquals(squares.at(4).prop('style').background, '#FF0000');
  });
});
