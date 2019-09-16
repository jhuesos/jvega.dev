import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chip from './Chip';

it('should set the text inside the chip', () => {
  const { container } = render(<Chip label="Hola" />);
  expect(container).toHaveTextContent('Hola');
});
