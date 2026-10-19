import type { Meta, StoryObj } from '@storybook/react-vite'
import { Toast } from './Toast'

const meta = {
  title: 'UI/Toast',
  component: Toast,
  args: { children: 'Card moved to In Progress', variant: 'success' },
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = { args: { onDismiss: () => {} } }
export const ErrorWithRetry: Story = {
  args: {
    variant: 'error',
    children: 'Could not move card. It was put back.',
    action: { label: 'Retry', onClick: () => {} },
    onDismiss: () => {},
  },
}
