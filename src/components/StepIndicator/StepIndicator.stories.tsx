import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from './StepIndicator';

const STEPS = [
  { label: 'Applicant Details',      labelAr: 'بيانات مقدم الطلب' },
  { label: 'Facility Information',   labelAr: 'معلومات المنشأة' },
  { label: 'Required Documents',     labelAr: 'المستندات المطلوبة' },
  { label: 'Review & Submit',        labelAr: 'المراجعة والتقديم' },
];

const meta: Meta<typeof StepIndicator> = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [(Story) => <div style={{ width: 280 }}><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

export const Step1: Story = { args: { steps: STEPS, current: 0 } };
export const Step2: Story = { args: { steps: STEPS, current: 1 } };
export const Step3: Story = { args: { steps: STEPS, current: 2 } };
export const Complete: Story = { args: { steps: STEPS, current: 4 } };
