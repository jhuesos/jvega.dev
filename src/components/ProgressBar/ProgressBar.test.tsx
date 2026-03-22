import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('should render with the correct aria attributes', () => {
    const { container } = render(<ProgressBar percentage={75} />);
    const bar = container.querySelector('[role="progressbar"]');
    expect(bar).toBeInTheDocument();
    expect(bar).toHaveAttribute('aria-valuenow', '75');
    expect(bar).toHaveAttribute('aria-valuemin', '0');
    expect(bar).toHaveAttribute('aria-valuemax', '100');
  });

  it('should set the --progress CSS custom property', () => {
    const { container } = render(<ProgressBar percentage={50} />);
    const bar = container.querySelector('[role="progressbar"]');
    expect(bar).toHaveStyle('--progress: 50%');
  });
});
