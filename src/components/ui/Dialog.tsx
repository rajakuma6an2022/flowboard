import { useEffect, useId, useRef } from 'react'
import type { ReactNode } from 'react'
import { Button } from './Button'

export interface DialogProps {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  footer?: ReactNode
}

/**
 * Wraps the native <dialog>. showModal() gives us a focus trap, an inert background,
 * Escape-to-close and the backdrop. The browser also returns focus to the element that
 * opened it (verify this manually in your target browsers).
 */
export function Dialog({ open, title, onClose, children, footer }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      // 'close' fires for Escape and for dialog.close(), so state stays in sync.
      onClose={onClose}
      onClick={(e) => {
        // Clicking the backdrop targets the <dialog> itself.
        if (e.target === ref.current) onClose()
      }}
      className="rounded-panel border-border bg-background shadow-raised backdrop:bg-text-primary/40 m-auto w-full max-w-130 border p-0"
    >
      <div className="border-border flex items-center justify-between border-b px-6 py-4">
        <h2 id={titleId} className="text-h2 font-semibold">
          {title}
        </h2>
        <Button variant="ghost" size="sm" aria-label="Close dialog" onClick={onClose}>
          <span aria-hidden="true">✕</span>
        </Button>
      </div>
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="border-border flex justify-end gap-2 border-t px-6 py-4">
          {footer}
        </div>
      )}
    </dialog>
  )
}
