import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>ACTIVE</Badge>);
    expect(screen.getByText('ACTIVE')).toBeInTheDocument();
  });

  it('renders dot by default', () => {
    const { container } = render(<Badge tone="active">ACTIVE</Badge>);
    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it('omits dot when dot=false', () => {
    const { container } = render(<Badge dot={false}>ACTIVE</Badge>);
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Badge className="custom">ACTIVE</Badge>);
    expect(container.firstChild).toHaveClass('custom');
  });
});
