import * as React from 'react';
import { render } from '@testing-library/react';
import { CenterSquaresLoader } from '../CenterSquaresLoader';

describe('CenterSquaresLoader', () => {
  test('should render 4 squares', () => {
    const { container } = render(<CenterSquaresLoader/>);
    expect(container.getElementsByTagName('div')[0].children).toHaveLength(4);
  });

  test('should render 4 red squares', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<CenterSquaresLoader color={color}/>);
    const squares = container.getElementsByTagName('div')[0].children;
    expect(squares[0]).toHaveStyle(expectedStyle);
    expect(squares[1]).toHaveStyle(expectedStyle);
    expect(squares[2]).toHaveStyle(expectedStyle);
    expect(squares[3]).toHaveStyle(expectedStyle);
  });
});
