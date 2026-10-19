import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { Button } from './Button'
import { Dialog } from './Dialog'
import { Input } from './Input'

const meta = {
  title: 'UI/Dialog',
  component: Dialog,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

function CreateTaskExample() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog
        open={open}
        title="Create task"
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save task</Button>
          </>
        }
      >
        <Input id="dialog-title" label="Task title" error="Title is required" />
      </Dialog>
    </>
  )
}

export const CreateTask: Story = {
  args: { open: false, title: 'Create task', onClose: () => {}, children: null },
  render: () => <CreateTaskExample />,
}
