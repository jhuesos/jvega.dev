import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Disclaimer } from './Disclaimer';

describe('Disclaimer', () => {
  it('should render children content', () => {
    const { container } = render(
      <Disclaimer>
        <p>Test message</p>
      </Disclaimer>,
    );
    expect(container).toHaveTextContent('Test message');
  });

  it('should render the exclamation mark', () => {
    const { container } = render(
      <Disclaimer>
        <p>Content</p>
      </Disclaimer>,
    );
    expect(container).toHaveTextContent('!');
  });
});
