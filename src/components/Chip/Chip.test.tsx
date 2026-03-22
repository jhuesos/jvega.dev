import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Chip } from './Chip';

describe('Chip', () => {
  it('should render the label text', () => {
    const { container } = render(<Chip label="Hola" />);
    expect(container).toHaveTextContent('Hola');
  });

  it('should render as a span element', () => {
    const { container } = render(<Chip label="React" />);
    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent('React');
  });
});
