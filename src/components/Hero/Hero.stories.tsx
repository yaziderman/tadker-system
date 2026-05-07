import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Button } from '../Button';
import { Icon } from '../Icon';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Industrial Security Portal',
    titleAr: 'بوابة الأمن الصناعي',
    subtitle: 'Access licensing, identity, facility, and security services for industrial operators across the Kingdom.',
    subtitleAr: 'الوصول إلى خدمات الترخيص والهوية والمنشآت والأمن للمشغلين الصناعيين في المملكة.',
    badge: 'SAIS Citizen Portal',
    size: 'md',
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    actions: (
      <>
        <Button size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
          Browse Services
        </Button>
        <Button variant="secondary" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
          Learn More
        </Button>
      </>
    ),
  },
};

export const Small: Story = {
  args: { title: 'Industrial License Renewal', titleAr: 'تجديد الترخيص الصناعي', size: 'sm' },
};

export const Large: Story = {
  args: { ...WithActions.args, size: 'lg' },
};
