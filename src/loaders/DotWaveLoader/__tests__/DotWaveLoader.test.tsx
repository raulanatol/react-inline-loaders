import * as React from 'react';
import { render } from '@testing-library/react';
import { DotWaveLoader } from '../DotWaveLoader';

describe('DotWaveLoader', () => {
  test('should render 5 dots', () => {
    const { container } = render(<DotWaveLoader/>);
    expect(container.getElementsByTagName('div')[0].children[0].children).toHaveLength(5);
  });

  test('should render 5 red dots', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<DotWaveLoader color={color}/>);
    const dots = container.getElementsByTagName('div')[0].children[0].children;
    expect(dots[0]).toHaveStyle(expectedStyle);
    expect(dots[1]).toHaveStyle(expectedStyle);
    expect(dots[2]).toHaveStyle(expectedStyle);
    expect(dots[3]).toHaveStyle(expectedStyle);
    expect(dots[4]).toHaveStyle(expectedStyle);
  });

  test('should render 5 green dots', () => {
    const color = '#00FF00';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<DotWaveLoader color={color}/>);
    const dots = container.getElementsByTagName('div')[0].children[0].children;
    expect(dots[0]).toHaveStyle(expectedStyle);
    expect(dots[1]).toHaveStyle(expectedStyle);
    expect(dots[2]).toHaveStyle(expectedStyle);
    expect(dots[3]).toHaveStyle(expectedStyle);
    expect(dots[4]).toHaveStyle(expectedStyle);
  });
});
