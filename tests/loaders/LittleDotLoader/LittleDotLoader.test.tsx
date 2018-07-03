import { shallow } from 'enzyme';
import { colorEquals } from '../../utils/utils';
import { LittleDotLoader } from '../../../src';
import * as React from 'react';

describe('LittleDotLoader', () => {
  it('should render a pulse and an explosion', () => {
    const wrapper = shallow(<LittleDotLoader/>);
    const pulseAndExplosion = wrapper.find('div > div > div');
    expect(pulseAndExplosion).toHaveLength(2);
  });

  it('should render a red pulse', () => {
    const wrapper = shallow(<LittleDotLoader color="#FF0000"/>);
    const pulse = wrapper.find('div > div > div').at(0);
    expect(colorEquals(pulse.prop('style').background, '#FF0000')).toBeTruthy();
  });

  it('should render a green explosion', () => {
    const wrapper = shallow(<LittleDotLoader color="#00FF00"/>);
    const explosion = wrapper.find('div > div > div').at(1);
    expect(colorEquals(explosion.prop('style').background, '#00FF00')).toBeTruthy();
  });
});
