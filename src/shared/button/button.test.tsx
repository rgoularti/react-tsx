import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { Button } from '..';

describe('Button', () => {
  it('should render button', () => {
    // Arrange
    const { container } = render(<Button />);

    // Act
    const buttonElement = container.querySelector('.button');

    // Assert
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render button with primary style', () => {
    // Arrange
    const { container } = render(<Button primary />);

    // Act
    const buttonElement = container.querySelector('.is-primary');

    // Assert
    expect(buttonElement).toBeInTheDocument();
  });
});
