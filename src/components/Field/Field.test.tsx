import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Field } from './Field';

describe('Field', () => {
  it('renders label and input', () => {
    render(<Field label="National ID" id="nid" />);
    expect(screen.getByLabelText('National ID')).toBeInTheDocument();
  });

  it('shows required marker', () => {
    render(<Field label="Name" id="name" required />);
    expect(screen.getByText('*', { exact: false })).toBeInTheDocument();
  });

  it('shows error message and sets aria-invalid', () => {
    render(<Field label="ID" id="id" error="Invalid format" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Invalid format');
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows help text when no error', () => {
    render(<Field label="Email" id="email" help="Used for notifications." />);
    expect(screen.getByText('Used for notifications.')).toBeInTheDocument();
  });

  it('does not show help when error is present', () => {
    render(<Field label="Email" id="email" help="Help text" error="Error" />);
    expect(screen.queryByText('Help text')).not.toBeInTheDocument();
  });

  it('renders select when options provided', () => {
    render(
      <Field label="Type" id="type" options={[{ value: 'a', label: 'Option A' }]} />
    );
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Option A')).toBeInTheDocument();
  });

  it('renders custom children', () => {
    render(<Field label="Custom"><textarea data-testid="ta" /></Field>);
    expect(screen.getByTestId('ta')).toBeInTheDocument();
  });
});
