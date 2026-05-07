import type { Meta, StoryObj } from '@storybook/react';
import { ServiceCard } from './ServiceCard';

const meta: Meta<typeof ServiceCard> = {
  title: 'Components/ServiceCard',
  component: ServiceCard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 340 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof ServiceCard>;

export const Default: Story = {
  args: {
    icon: 'file-certificate',
    title: 'Industrial License Renewal',
    titleAr: 'تجديد الترخيص الصناعي',
    description: 'Renew your industrial operating license. Valid for facilities registered under SAIS jurisdiction.',
    days: 5,
    fee: '200 SAR',
  },
};

export const Featured: Story = {
  args: {
    ...Default.args,
    title: 'Priority Processing',
    titleAr: 'معالجة ذات أولوية',
    featured: true,
    fee: 'Free',
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    onClick: () => alert('Navigate to service'),
  },
};

export const Grid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 300px)', gap: 24 }}>
      {[
        { icon: 'file-certificate' as const, title: 'Industrial License Renewal', days: 5, fee: '200 SAR' },
        { icon: 'building-factory' as const, title: 'Facility Inspection Request', days: 10, fee: 'Free', featured: true },
        { icon: 'user-check' as const, title: 'Identity Verification', days: 3, fee: 'Free' },
      ].map((s) => (
        <ServiceCard
          key={s.title}
          {...s}
          description="Access SAIS industrial security services. Required documents: National ID, facility license."
        />
      ))}
    </div>
  ),
  parameters: { layout: 'fullscreen' },
};
