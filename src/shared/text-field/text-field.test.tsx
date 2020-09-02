import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import React from 'react';

import { TextField } from './text-field';

describe('TextField', () => {
  it('should render text field with label', () => {
    // Arrange
    const { getByRole } = render(<TextField id="test" labelText="Test label" />);

    // Act
    const inputElement = getByRole('textbox', { name: /Test label/i });

    // Assert
    expect(inputElement).toBeInTheDocument();
  });
});
