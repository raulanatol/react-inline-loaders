import { shallow } from 'enzyme';
import { colorEquals } from '../../utils/utils';
import { ChasingSquaresLoader } from '../../../src';
import * as React from 'react';

describe('ChasingSquaresLoader', () => {
  test('should render 4 squares', () => {
    const wrapper = shallow(<ChasingSquaresLoader/>);
    expect(wrapper.find('div > div')).toHaveLength(4);
  });

  test('should render 4 red squares', () => {
    const wrapper = shallow(<ChasingSquaresLoader color="#FF0000"/>);
    const squares = wrapper.find('div');
    expect(colorEquals(squares.at(1).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(2).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(3).prop('style').background, '#FF0000')).toBeTruthy();
    expect(colorEquals(squares.at(4).prop('style').background, '#FF0000')).toBeTruthy();
  });
});
