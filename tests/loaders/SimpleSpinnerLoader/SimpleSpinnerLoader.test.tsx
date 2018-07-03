import * as React from 'react';
import { shallow } from 'enzyme';
import { colorEquals } from '../../utils/utils';
import { SimpleSpinnerLoader } from '../../../src';

describe('SimpleSpinnerLoader', () => {
  test('should render a spinner', () => {
    const wrapper = shallow(<SimpleSpinnerLoader/>);
    const spinner = wrapper.find('div > div');
    expect(spinner).toHaveLength(1);
  });

  test('should render a red spinner', () => {
    const wrapper = shallow(<SimpleSpinnerLoader color="#FF0000"/>);
    const spinner = wrapper.find('div > div');
    expect(colorEquals(spinner.at(0).prop('style').background, 'transparent')).toBeTruthy();
    expect(colorEquals(spinner.at(0).prop('style').borderLeftColor, '#FF0000')).toBeTruthy();
  });

  test('should render a black spinner with white background', () => {
    const wrapper = shallow(<SimpleSpinnerLoader color="#000" backgroundColor="#FFF"/>);
    const spinner = wrapper.find('div > div');
    expect(colorEquals(spinner.at(0).prop('style').background, '#FFF')).toBeTruthy();
    expect(colorEquals(spinner.at(0).prop('style').borderLeftColor, '#000')).toBeTruthy();
  });
});
