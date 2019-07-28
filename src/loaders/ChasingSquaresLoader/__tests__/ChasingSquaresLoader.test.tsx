import * as React from 'react';
import { ChasingSquaresLoader } from '../ChasingSquaresLoader';
import { render } from '@testing-library/react';

describe('ChasingSquaresLoader', () => {
  test('should render 4 squares', () => {
    const { container } = render(<ChasingSquaresLoader/>);
    expect(container.getElementsByTagName('div')[0].children).toHaveLength(4);
  });

  test('should render 4 blue squares', () => {
    const color = '#00FF00';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<ChasingSquaresLoader color={color}/>);
    const squares = container.getElementsByTagName('div')[0].children;
    expect(squares[0]).toHaveStyle(expectedStyle);
    expect(squares[1]).toHaveStyle(expectedStyle);
    expect(squares[2]).toHaveStyle(expectedStyle);
    expect(squares[3]).toHaveStyle(expectedStyle);
  });
});
