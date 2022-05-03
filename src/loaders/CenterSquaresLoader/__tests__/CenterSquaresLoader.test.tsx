import React from 'react';
import { render, screen } from '@testing-library/react';
import { CenterSquaresLoader } from '../CenterSquaresLoader';

describe('CenterSquaresLoader', () => {
  it('should render 4 squares', () => {
    render(<CenterSquaresLoader/>);

    expect(screen.getByRole('status').children).toHaveLength(4);
  });

  it('should render 4 red squares', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;
    render(<CenterSquaresLoader color={color}/>);

    const squares = screen.getByRole('status');
    expect(squares.children[0]).toHaveStyle(expectedStyle);
    expect(squares.children[1]).toHaveStyle(expectedStyle);
    expect(squares.children[2]).toHaveStyle(expectedStyle);
    expect(squares.children[3]).toHaveStyle(expectedStyle);
  });
});
