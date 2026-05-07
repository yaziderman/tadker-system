import type { Meta, StoryObj } from '@storybook/react';
import { Icon, type IconName } from './Icon';

const ALL_ICONS: IconName[] = [
  'shield-check', 'file-certificate', 'building-factory', 'clipboard-list',
  'bell', 'user-check', 'alert-triangle', 'chevron-right', 'chevron-left',
  'chevron-down', 'search', 'calendar', 'circle-check', 'lock', 'menu-2',
  'globe', 'logout', 'arrow-right', 'arrow-left', 'check', 'x',
  'info-circle', 'mail', 'phone', 'map-pin',
];

const meta: Meta<typeof Icon> = {
  title: 'Foundations/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: { name: 'shield-check', size: 24 },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, padding: 16, maxWidth: 600 }}>
      {ALL_ICONS.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Icon name={name} size={24} style={{ color: '#0A3161' }} />
          <span style={{ fontSize: 10, color: '#6B7585' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {([16, 20, 24, 32, 40] as const).map((size) => (
        <Icon key={size} name="shield-check" size={size} style={{ color: '#0A3161' }} />
      ))}
    </div>
  ),
};
