import type { Meta, StoryObj } from '@storybook/react';
import { Field } from './Field';

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 360 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: { label: 'National ID', id: 'nid', placeholder: '1xxxxxxxxx', required: true },
};

export const WithArabicLabel: Story = {
  args: {
    label: 'National ID',
    labelAr: 'رقم الهوية الوطنية',
    id: 'nid-ar',
    placeholder: '1xxxxxxxxx',
    required: true,
  },
};

export const WithHelp: Story = {
  args: {
    label: 'Email Address',
    id: 'email',
    type: 'email',
    help: 'Used for application status notifications.',
    helpAr: 'يُستخدم لإشعارات حالة الطلب.',
  },
};

export const WithError: Story = {
  args: {
    label: 'National ID',
    id: 'nid-err',
    error: 'The National ID format is invalid. Use 10 digits beginning with 1 or 2.',
    errorAr: 'رقم الهوية غير صحيح.',
    value: 'abc',
  },
};

export const Select: Story = {
  args: {
    label: 'Service Category',
    id: 'cat',
    options: [
      { value: 'licensing', label: 'Industrial Licensing' },
      { value: 'inspection', label: 'Facility Inspection' },
      { value: 'identity', label: 'Identity Verification' },
    ],
  },
};

export const Disabled: Story = {
  args: { label: 'Application Reference', id: 'ref', value: 'SAIS-2026-0041', disabled: true },
};
