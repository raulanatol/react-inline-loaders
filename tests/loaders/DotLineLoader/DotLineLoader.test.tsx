import * as React from 'react';
import { shallow } from 'enzyme';
import { colorEquals } from '../../utils/utils';
import { DotLineLoader } from '../../../src';

describe('DotLineLoader', () => {
  test('should render 8 dots', () => {
    const wrapper = shallow(<DotLineLoader/>);
    expect(wrapper.find('div > div')).toHaveLength(8);
  });

  test('should render 8 red dots', () => {
    const wrapper = shallow(<DotLineLoader color="#FF0000"/>);
    const squares = wrapper.find('div');
    expect(colorEquals(squares.at(1).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(2).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(3).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(4).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(5).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(6).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(7).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(8).prop('style').background, '#FF0000')).toBeTruthy();
  });
});
