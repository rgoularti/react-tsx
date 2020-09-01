import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { App } from '..';

describe('App', () => {
  it('should render name input', () => {
    // Arrange
    const { container } = render(<App />);

    // Act
    const inputElement = container.querySelector('#name');

    // Assert
    expect(inputElement).toBeInTheDocument();
  });
});
