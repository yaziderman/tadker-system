import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Active: Story   = { args: { tone: 'active',   children: 'ACTIVE' } };
export const Review: Story   = { args: { tone: 'review',   children: 'UNDER REVIEW' } };
export const Expired: Story  = { args: { tone: 'expired',  children: 'EXPIRED' } };
export const Rejected: Story = { args: { tone: 'rejected', children: 'REJECTED' } };
export const New: Story      = { args: { tone: 'new',      children: 'NEW' } };

export const AllTones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Badge tone="active">ACTIVE</Badge>
      <Badge tone="review">UNDER REVIEW</Badge>
      <Badge tone="expired">EXPIRED</Badge>
      <Badge tone="rejected">REJECTED</Badge>
      <Badge tone="new">NEW</Badge>
    </div>
  ),
};

export const NoDot: Story = {
  args: { tone: 'active', dot: false, children: 'ACTIVE' },
};
