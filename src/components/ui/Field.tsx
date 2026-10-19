import type { ReactNode } from 'react'

interface FieldProps {
  id: string
  label: string
  error?: string
  hint?: string
  children: ReactNode
}

/** Shared label + hint + error wrapper. The error is text with an icon, never color alone. */
export function Field({ id, label, error, hint, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-small text-text-primary font-medium">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-small text-text-secondary">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${id}-error`}
          className="text-small text-danger-text flex items-center gap-1"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="size-4 shrink-0"
            fill="currentColor"
          >
            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-.75 3.5h1.5v4h-1.5V5Zm0 5.25h1.5v1.5h-1.5v-1.5Z" />
          </svg>
          {error}
        </p>
      )}
    </div>
  )
}
