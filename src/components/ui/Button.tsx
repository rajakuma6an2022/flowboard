import type { ComponentProps } from 'react'
import { cn } from './cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  secondary:
    'border border-border-input bg-background text-text-primary hover:bg-surface',
  ghost: 'bg-transparent text-text-primary hover:bg-surface',
  danger: 'bg-danger text-white hover:bg-danger-hover',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-small',
  md: 'h-10 px-4 text-body',
}

export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'rounded-control inline-flex items-center justify-center gap-2 font-medium transition-colors',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
