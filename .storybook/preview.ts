import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'page',
      values: [
        { name: 'page', value: '#F5F6F8' },
        { name: 'white', value: '#FFFFFF' },
        { name: 'navy', value: '#0A3161' },
      ],
    },
    layout: 'centered',
  },
};

export default preview;
