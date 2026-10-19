import type { Meta, StoryObj } from '@storybook/react-vite'
import { Select } from './Select'

const meta = {
  title: 'UI/Select',
  component: Select,
  args: {
    id: 'label',
    label: 'Label',
    options: [
      { value: 'feature', label: 'Feature' },
      { value: 'bug', label: 'Bug' },
      { value: 'design', label: 'Design' },
      { value: 'chore', label: 'Chore' },
    ],
  },
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Selected: Story = { args: { defaultValue: 'bug' } }
export const ErrorState: Story = { args: { error: 'Choose a label' } }
