import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from './Badge'
import { Card } from './Card'

const meta = {
  title: 'UI/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
  args: {
    children: (
      <div className="flex flex-col gap-2">
        <h3 className="font-medium">Add keyboard sensor</h3>
        <p className="text-text-secondary">Support Space, arrows and Escape.</p>
        <Badge variant="info">Feature</Badge>
      </div>
    ),
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Selected: Story = { args: { selected: true } }
export const Dragging: Story = { args: { dragging: true } }
