import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Icon } from '../Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story     = { args: { children: 'Apply for License', variant: 'primary' } };
export const Secondary: Story   = { args: { children: 'View Details', variant: 'secondary' } };
export const Gold: Story        = { args: { children: 'Login · NafaZ', variant: 'gold' } };
export const Destructive: Story = { args: { children: 'Cancel Application', variant: 'destructive' } };
export const Ghost: Story       = { args: { children: 'Learn More', variant: 'ghost' } };
export const Disabled: Story    = { args: { children: 'Unavailable', disabled: true } };

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button iconLeft={<Icon name="lock" size={16} />}>Login · NafaZ</Button>
      <Button variant="secondary" iconRight={<Icon name="chevron-right" size={16} />}>View Details</Button>
      <Button variant="gold" size="sm" iconLeft={<Icon name="logout" size={14} />}>Logout</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="gold">Gold</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  ),
};
