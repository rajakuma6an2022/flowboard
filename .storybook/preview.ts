import type { Preview } from '@storybook/react-vite'
import '../src/index.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    a11y: {
      // 'error' fails automated a11y runs on violations (wired into CI on Day 6).
      test: 'error',
    },
  },
}

export default preview
