import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from './Skeleton'

const meta = { title: 'UI/Skeleton', component: Skeleton } satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const CardPlaceholder: Story = { args: { className: 'h-28 w-72 rounded-card' } }
export const InputPlaceholder: Story = { args: { className: 'h-10 w-72' } }
export const AvatarPlaceholder: Story = { args: { className: 'size-8 rounded-full' } }
