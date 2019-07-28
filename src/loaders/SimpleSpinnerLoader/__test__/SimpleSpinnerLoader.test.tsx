import * as React from 'react';
import { SimpleSpinnerLoader } from '../SimpleSpinnerLoader';
import { render } from '@testing-library/react';

describe('SimpleSpinnerLoader', () => {
  test('should render a spinner', () => {
    const { container } = render(<SimpleSpinnerLoader/>);
    expect(container.getElementsByTagName('div')[0].children).toHaveLength(1);
  });

  test('should render a red spinner', () => {
    const { container } = render(<SimpleSpinnerLoader color="#FF0000"/>);
    const base = container.getElementsByTagName('div')[0];
    expect(base).toHaveStyle('background-color: transparent');
    expect(base.children[0]).toHaveStyle('background-color: transparent');
    expect(base.children[0]).toHaveStyle('border-right-color: transparent');
    expect(base.children[0]).toHaveStyle('border-bottom-color: #FF0000');
  });

  test('should render a black spinner with white background', () => {
    const { container } = render(<SimpleSpinnerLoader color="#000" backgroundColor="#FFF"/>);
    const spinner = container.getElementsByTagName('div')[0].children[0];
    expect(spinner).toHaveStyle('background-color: #FFF');
    expect(spinner).toHaveStyle('border-bottom-color: #000');
  });
});
