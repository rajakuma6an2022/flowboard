import type { ComponentProps } from 'react'
import { cn } from './cn'

export interface CardProps extends ComponentProps<'div'> {
  selected?: boolean
  dragging?: boolean
}

export function Card({ selected, dragging, className, ...props }: CardProps) {
  return (
    <div
      data-selected={selected ? 'true' : undefined}
      data-dragging={dragging ? 'true' : undefined}
      className={cn(
        'rounded-card bg-background shadow-card border p-3 transition-shadow',
        'hover:shadow-raised',
        selected ? 'border-primary ring-primary ring-2' : 'border-border',
        dragging && 'border-primary shadow-raised rotate-1',
        className,
      )}
      {...props}
    />
  )
}
