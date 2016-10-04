import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import LittleDotLoader from '../../../src/loaders/LittleDotLoader/LittleDotLoader';
import { colorEquals } from '../../utils/utils';

describe('LittleDotLoader', () => {
  it('should render a pulse and an explosion', () => {
    const wrapper = shallow(<LittleDotLoader />);
    const pulseAndExplosion = wrapper.find('div > div > div');
    expect(pulseAndExplosion.length).to.equal(2);
  });

  it('should render a red pulse', () => {
    const wrapper = shallow(<LittleDotLoader color="#FF0000"/>);
    const pulse = wrapper.find('div > div > div').at(0);
    colorEquals(pulse.prop('style').background, '#FF0000');
  });

  it('should render a green explosion', () => {
    const wrapper = shallow(<LittleDotLoader color="#00FF00"/>);
    const explosion = wrapper.find('div > div > div').at(1);
    colorEquals(explosion.prop('style').background, '#00FF00');
  });
});
