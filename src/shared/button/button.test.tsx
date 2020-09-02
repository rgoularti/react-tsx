import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '..';

describe('Button', () => {
  it('should render button', () => {
    // Arrange
    const { container } = render(<Button />);

    // Act
    const buttonElement: HTMLButtonElement = container.querySelector('.button');

    // Assert
    expect(buttonElement.className).toEqual('button');
  });

  it('should render button with primary style', () => {
    // Arrange
    const { container } = render(<Button primary />);

    // Act
    const buttonElement: HTMLButtonElement = container.querySelector('.is-primary');

    // Assert
    expect(buttonElement.className).toEqual('button is-primary');
  });
});
