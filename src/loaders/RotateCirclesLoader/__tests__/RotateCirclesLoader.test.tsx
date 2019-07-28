import * as React from 'react';
import { render } from '@testing-library/react';
import { RotateCirclesLoader } from '../RotateCirclesLoader';

describe('RotateCirclesLoader', () => {
  test('should render two circles', () => {
    const { container } = render(<RotateCirclesLoader/>);
    expect(container.getElementsByTagName('div')[0].children).toHaveLength(2);
  });

  test('should render a red circle and a green circle', () => {
    const color1 = '#FF0000';
    const color2 = '#00FF00';
    const expectedStyle1 = `background-color: ${color1}`;
    const expectedStyle2 = `background-color: ${color2}`;
    const { container } = render(<RotateCirclesLoader color1={color1} color2={color2}/>);
    const circles = container.getElementsByTagName('div')[0].children;
    expect(circles[0]).toHaveStyle(expectedStyle1);
    expect(circles[1]).toHaveStyle(expectedStyle2);
  });
});
