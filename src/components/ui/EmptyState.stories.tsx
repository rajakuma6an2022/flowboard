import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { EmptyState } from './EmptyState'

const meta = { title: 'UI/EmptyState', component: EmptyState } satisfies Meta<
  typeof EmptyState
>

export default meta
type Story = StoryObj<typeof meta>

export const NoFilterResults: Story = {
  args: {
    icon: '🔍',
    title: 'No tasks match your filters',
    description: 'Try a different search term or label.',
    action: <Button variant="secondary">Clear filters</Button>,
  },
}

export const EmptyColumn: Story = {
  args: { title: 'No tasks here yet', action: <Button size="sm">Add task</Button> },
}
