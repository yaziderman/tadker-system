import type { Meta, StoryObj } from '@storybook/react';
import { TopNav } from './TopNav';

const meta: Meta<typeof TopNav> = {
  title: 'Components/TopNav',
  component: TopNav,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const LoggedOut: Story = {
  args: { active: 'services', lang: 'en' },
};

export const LoggedIn: Story = {
  args: {
    active: 'services',
    lang: 'en',
    user: { name: 'Mohammed Al-Rashidi', idMasked: '1•••••4321' },
  },
};

export const Arabic: Story = {
  args: { active: 'services', lang: 'ar' },
  parameters: { backgrounds: { default: 'navy' } },
};

export const ActiveHome: Story = {
  args: { active: 'home', lang: 'en' },
};
