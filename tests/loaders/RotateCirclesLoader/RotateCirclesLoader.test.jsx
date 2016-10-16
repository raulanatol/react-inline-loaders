import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import RotateCirclesLoader from '../../../src/loaders/RotateCirclesLoader/RotateCirclesLoader';
import { colorEquals } from '../../utils/utils';

describe('RotateCirclesLoader', () => {
  it('should render two circles', () => {
    const wrapper = shallow(<RotateCirclesLoader />);
    const pulseAndExplosion = wrapper.find('div > div');
    expect(pulseAndExplosion.length).to.equal(2);
  });

  it('should render a red circle and a green circle', () => {
    const wrapper = shallow(<RotateCirclesLoader color1="#F00" color2="#0F0"/>);
    const circle1 = wrapper.find('div > div').at(0);
    colorEquals(circle1.prop('style').backgroundColor, '#F00');
    const circle2 = wrapper.find('div > div').at(1);
    colorEquals(circle2.prop('style').backgroundColor, '#0F0');
  });
});
