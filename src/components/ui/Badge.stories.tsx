import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'

const meta = {
  title: 'UI/Badge',
  component: Badge,
  args: { children: 'Feature' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = { args: { variant: 'neutral' } }
export const Info: Story = { args: { variant: 'info' } }
export const Success: Story = { args: { variant: 'success', children: 'Done' } }
export const Warning: Story = { args: { variant: 'warning', children: 'Due soon' } }
export const Danger: Story = { args: { variant: 'danger', children: 'Overdue' } }
