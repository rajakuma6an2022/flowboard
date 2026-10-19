import type { ReactNode } from 'react'
import { cn } from './cn'

export type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger'

const variants: Record<BadgeVariant, string> = {
  neutral: 'bg-surface text-text-secondary border-border',
  info: 'bg-primary-subtle text-primary-hover border-primary-subtle',
  success: 'bg-success-subtle text-success-text border-success-subtle',
  warning: 'bg-warning-subtle text-warning-text border-warning-subtle',
  danger: 'bg-danger-subtle text-danger-text border-danger-subtle',
}

/** Status is always conveyed by text, so color is never the only signal. */
export function Badge({
  variant = 'neutral',
  children,
}: {
  variant?: BadgeVariant
  children: ReactNode
}) {
  return (
    <span
      className={cn(
        'text-small inline-flex items-center rounded-full border px-2 py-0.5 font-medium',
        variants[variant],
      )}
    >
      {children}
    </span>
  )
}
