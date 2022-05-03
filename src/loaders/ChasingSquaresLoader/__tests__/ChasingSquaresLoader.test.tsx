import { ChasingSquaresLoader } from '../ChasingSquaresLoader';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('ChasingSquaresLoader', () => {
  it('should render 4 squares', () => {
    render(<ChasingSquaresLoader/>);

    expect(screen.getByRole('status').children).toHaveLength(4);
  });

  it('should render 4 blue squares', () => {
    const color = '#00FF00';
    const expectedStyle = `background-color: ${color}`;

    render(<ChasingSquaresLoader color={color}/>);

    const squares = screen.getByRole('status').children;
    expect(squares[0]).toHaveStyle(expectedStyle);
    expect(squares[1]).toHaveStyle(expectedStyle);
    expect(squares[2]).toHaveStyle(expectedStyle);
    expect(squares[3]).toHaveStyle(expectedStyle);
  });
});
