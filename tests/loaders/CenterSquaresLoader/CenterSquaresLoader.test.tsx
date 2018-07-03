import * as React from 'react';

import { shallow } from 'enzyme';
import { colorEquals } from '../../utils/utils';
import { CenterSquaresLoader } from '../../../src';

describe('CenterSquaresLoader', () => {
  test('should render 4 squares', () => {
    const wrapper = shallow(<CenterSquaresLoader/>);
    expect(wrapper.find('div > div')).toHaveLength(4);
  });

  test('should render 4 red squares', () => {
    const wrapper = shallow(<CenterSquaresLoader color="#FF0000"/>);
    const squares = wrapper.find('div');
    expect(colorEquals(squares.at(1).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(2).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(3).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(4).prop('style').background, '#FF0000')).toBeTruthy();
  });
});
