import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { RotateCirclesLoader } from '../RotateCirclesLoader';

describe('RotateCirclesLoader', () => {
  it('should render two circles', () => {
    render(<RotateCirclesLoader/>);

    expect(screen.getByRole('status').children).toHaveLength(2);
  });

  it('should render a red circle and a green circle', () => {
    const color1 = '#FF0000';
    const color2 = '#00FF00';
    const expectedStyle1 = `background-color: ${color1}`;
    const expectedStyle2 = `background-color: ${color2}`;
    render(<RotateCirclesLoader color1={color1} color2={color2}/>);

    const loader = screen.getByRole('status');
    expect(loader.children[0]).toHaveStyle(expectedStyle1);
    expect(loader.children[1]).toHaveStyle(expectedStyle2);
  });
});
