import type { ReactNode } from 'react'

export interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-card border-border bg-surface flex flex-col items-center gap-2 border border-dashed px-6 py-8 text-center">
      {icon && (
        <div aria-hidden="true" className="text-h1 text-text-secondary">
          {icon}
        </div>
      )}
      <h3 className="text-h2 font-semibold">{title}</h3>
      {description && (
        <p className="text-body text-text-secondary max-w-sm">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
