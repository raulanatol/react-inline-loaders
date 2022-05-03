import React from 'react';
import { SimpleSpinnerLoader } from '../SimpleSpinnerLoader';
import { render, screen } from '@testing-library/react';

describe('SimpleSpinnerLoader', () => {
  it('should render a spinner', () => {
    render(<SimpleSpinnerLoader/>);
  });

  it('should render a red spinner', () => {
    render(<SimpleSpinnerLoader color="#FF0000"/>);

    const base = screen.getByRole('status');
    expect(base).toHaveStyle('background-color: transparent');
    expect(base.firstChild).toHaveStyle('background-color: transparent');
    expect(base.firstChild).toHaveStyle('border-right-color: transparent');
    expect(base.firstChild).toHaveStyle('border-bottom-color: #FF0000');
  });

  it('should render a black spinner with white background', () => {
    render(<SimpleSpinnerLoader color="#000" backgroundColor="#FFF"/>);

    const spinner = screen.getByRole('status').firstChild;
    expect(spinner).toHaveStyle('background-color: #FFF');
    expect(spinner).toHaveStyle('border-bottom-color: #000');
  });
});
