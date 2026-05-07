import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Apply</Button>);
    expect(screen.getByRole('button', { name: 'Apply' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Apply</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('does not fire onClick when disabled', async () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Apply</Button>);
    // pointer-events:none on disabled; skip the CSS pointer-events guard
    await userEvent.setup({ pointerEventsCheck: 0 }).click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('renders iconLeft slot', () => {
    render(<Button iconLeft={<span data-testid="icon" />}>Apply</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders iconRight slot', () => {
    render(<Button iconRight={<span data-testid="icon" />}>Apply</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('forwards native button attributes', () => {
    render(<Button type="submit" aria-label="submit form">Apply</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('type', 'submit');
    expect(btn).toHaveAttribute('aria-label', 'submit form');
  });
});
