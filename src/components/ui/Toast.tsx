import type { ReactNode } from 'react'
import { Button } from './Button'
import { cn } from './cn'

export interface ToastProps {
  variant: 'success' | 'error'
  children: ReactNode
  action?: { label: string; onClick: () => void }
  onDismiss?: () => void
}

/**
 * Success uses role="status" (polite), errors use role="alert" (assertive).
 * The icon + text mean the meaning never depends on color alone.
 */
export function Toast({ variant, children, action, onDismiss }: ToastProps) {
  const isError = variant === 'error'
  return (
    <div
      role={isError ? 'alert' : 'status'}
      className={cn(
        'rounded-card bg-background shadow-raised flex items-center gap-3 border px-4 py-3',
        isError ? 'border-danger' : 'border-success',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'font-semibold',
          isError ? 'text-danger-text' : 'text-success-text',
        )}
      >
        {isError ? '!' : '✓'}
      </span>
      <p className="text-body flex-1">{children}</p>
      {action && (
        <Button variant="ghost" size="sm" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
      {onDismiss && (
        <Button
          variant="ghost"
          size="sm"
          aria-label="Dismiss notification"
          onClick={onDismiss}
        >
          <span aria-hidden="true">✕</span>
        </Button>
      )}
    </div>
  )
}
