import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  args: { id: 'description', label: 'Description' },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ErrorState: Story = { args: { error: 'Description is too long' } }
