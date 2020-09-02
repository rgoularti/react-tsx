import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { App } from '..';

describe('App', () => {
  it('should render app', () => {
    // Arrange
    const { getByRole } = render(<App />);

    // Act
    const inputElement = getByRole('textbox', { name: /Enter your name:/i });
    const buttonElement = getByRole('button', { name: /Submit/i });

    // Assert
    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
