import * as React from 'react';
import { LittleDotLoader } from '../LittleDotLoader';
import { render, screen } from '@testing-library/react';

describe('LittleDotLoader', () => {
  it('should render a pulse and an explosion', () => {
    render(<LittleDotLoader/>);

    expect(screen.getByRole('status').children).toHaveLength(2);
  });

  it('should render a red pulse', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;

    render(<LittleDotLoader color={color}/>);

    expect(screen.getByRole('status').children[0]).toHaveStyle(expectedStyle);
  });

  it('should render a green explosion', () => {
    const color = '#00FF00';
    const expectedStyle = `background-color: ${color}`;

    render(<LittleDotLoader color={color}/>);

    expect(screen.getByRole('status').children[1]).toHaveStyle(expectedStyle);
  });
});
