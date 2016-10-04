import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import DotWaveLoader from '../../../src/loaders/DotWaveLoader/DotWaveLoader';
import { colorEquals } from '../../utils/utils';

describe('DotWaveLoader', () => {
  it('should render 5 dots', () => {
    const wrapper = shallow(<DotWaveLoader />);
    const dots = wrapper.find('div > div > div');
    expect(dots.length).to.equal(5);
  });

  it('should render 5 red dots', () => {
    const wrapper = shallow(<DotWaveLoader color="#FF0000"/>);
    const dots = wrapper.find('div > div > div');
    colorEquals(dots.at(0).prop('style').background, '#FF0000');
    colorEquals(dots.at(1).prop('style').background, 'rgb(255, 0, 0)');
    colorEquals(dots.at(2).prop('style').background, 'rgb(255, 0, 0)');
    colorEquals(dots.at(3).prop('style').background, 'rgb(255, 0, 0)');
    colorEquals(dots.at(4).prop('style').background, 'rgb(255, 0, 0)');
  });

  it('should render 5 green dots', () => {
    const wrapper = shallow(<DotWaveLoader color="#00FF00"/>);
    const dots = wrapper.find('div > div > div');
    colorEquals(dots.at(0).prop('style').background, '#00FF00');
    colorEquals(dots.at(1).prop('style').background, 'rgb(0, 255, 0)');
    colorEquals(dots.at(2).prop('style').background, 'rgb(0, 255, 0)');
    colorEquals(dots.at(3).prop('style').background, 'rgb(0, 255, 0)');
    colorEquals(dots.at(4).prop('style').background, 'rgb(0, 255, 0)');
  });
});
