import * as React from 'react';
import { LittleDotLoader } from '../LittleDotLoader';
import { render } from '@testing-library/react';

describe('LittleDotLoader', () => {
  test('should render a pulse and an explosion', () => {
    const { container } = render(<LittleDotLoader/>);
    expect(container.getElementsByTagName('div')[0].children[0].children).toHaveLength(2);
  });

  test('should render a red pulse', () => {
    const color = '#FF0000';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<LittleDotLoader color={color}/>);
    expect(container.getElementsByTagName('div')[0].children[0].children[0]).toHaveStyle(expectedStyle);
  });

  test('should render a green explosion', () => {
    const color = '#00FF00';
    const expectedStyle = `background-color: ${color}`;
    const { container } = render(<LittleDotLoader color={color}/>);
    expect(container.getElementsByTagName('div')[0].children[0].children[1]).toHaveStyle(expectedStyle);
  });
});
