import * as React from 'react';
import { DotLineLoader } from '../DotLineLoader';
import { render } from '@testing-library/react';

describe('DotLineLoader', () => {
  test('should render 8 dots', () => {
    const { container } = render(<DotLineLoader/>);
    expect(container.getElementsByTagName('div')[0].children).toHaveLength(8);
  });

  test('should render 8 red dots', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<DotLineLoader color={color}/>);
    const dots = container.getElementsByTagName('div')[0].children;
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
