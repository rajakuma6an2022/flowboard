import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'UI/Input',
  component: Input,
  args: { id: 'title', label: 'Task title', placeholder: 'e.g. Write the ADR' },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Filled: Story = { args: { defaultValue: 'Fix drag handle focus ring' } }
export const WithHint: Story = { args: { hint: 'Keep it under 80 characters.' } }
export const ErrorState: Story = { args: { error: 'Title is required' } }
export const Disabled: Story = { args: { disabled: true, defaultValue: 'Locked' } }
