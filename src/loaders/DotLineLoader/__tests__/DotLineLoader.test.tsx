import * as React from 'react';
import { DotLineLoader } from '../DotLineLoader';
import { render, screen } from '@testing-library/react';

describe('DotLineLoader', () => {
  it('should render 8 dots', () => {
    render(<DotLineLoader/>);
    expect(screen.getByRole('status').children).toHaveLength(8);
  });

  it('should render 8 red dots', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;

    render(<DotLineLoader color={color}/>);

    const dots = screen.getByRole('status').children;
    expect(dots[0]).toHaveStyle(expectedStyle);
    expect(dots[1]).toHaveStyle(expectedStyle);
    expect(dots[2]).toHaveStyle(expectedStyle);
    expect(dots[3]).toHaveStyle(expectedStyle);
    expect(dots[4]).toHaveStyle(expectedStyle);
    expect(dots[5]).toHaveStyle(expectedStyle);
    expect(dots[6]).toHaveStyle(expectedStyle);
    expect(dots[7]).toHaveStyle(expectedStyle);
  });
});
