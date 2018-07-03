import { shallow } from 'enzyme';
import { colorEquals } from '../../utils/utils';
import { RotateCirclesLoader } from '../../../src';
import * as React from 'react';

describe('RotateCirclesLoader', () => {
  it('should render two circles', () => {
    const wrapper = shallow(<RotateCirclesLoader/>);
    const pulseAndExplosion = wrapper.find('div > div');
    expect(pulseAndExplosion).toHaveLength(2);
  });

  it('should render a red circle and a green circle', () => {
    const wrapper = shallow(<RotateCirclesLoader color1="#F00" color2="#0F0"/>);
    const circle1 = wrapper.find('div > div').at(0);
    expect(colorEquals(circle1.prop('style').backgroundColor, '#F00')).toBeTruthy();
    const circle2 = wrapper.find('div > div').at(1);
    expect(colorEquals(circle2.prop('style').backgroundColor, '#0F0')).toBeTruthy();
  });
});
