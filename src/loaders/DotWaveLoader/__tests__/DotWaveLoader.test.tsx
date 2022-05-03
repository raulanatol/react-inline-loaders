import { render, screen } from '@testing-library/react';
import React from 'react';
import { DotWaveLoader } from '../DotWaveLoader';

describe('DotWaveLoader', () => {
  it('should render 5 dots', () => {
    render(<DotWaveLoader/>);

    expect(screen.getByRole('status').children).toHaveLength(5);
  });

  it('should render 5 red dots', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;

    render(<DotWaveLoader color={color}/>);

    const dots = screen.getByRole('status').children;
    expect(dots[0]).toHaveStyle(expectedStyle);
    expect(dots[1]).toHaveStyle(expectedStyle);
    expect(dots[2]).toHaveStyle(expectedStyle);
    expect(dots[3]).toHaveStyle(expectedStyle);
    expect(dots[4]).toHaveStyle(expectedStyle);
  });

  it('should render 5 green dots', () => {
    const color = '#00FF00';
    const expectedStyle = `background-color: ${color}`;

    render(<DotWaveLoader color={color}/>);

    const dots = screen.getByRole('status').children;
    expect(dots[0]).toHaveStyle(expectedStyle);
    expect(dots[1]).toHaveStyle(expectedStyle);
    expect(dots[2]).toHaveStyle(expectedStyle);
    expect(dots[3]).toHaveStyle(expectedStyle);
    expect(dots[4]).toHaveStyle(expectedStyle);
  });
});
