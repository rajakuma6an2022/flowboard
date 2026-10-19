import type { ComponentProps } from 'react'
import { cn } from './cn'
import { Field } from './Field'
import { borderClasses, controlClasses, describedBy } from './field-utils'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps extends Omit<ComponentProps<'select'>, 'id'> {
  id: string
  label: string
  options: SelectOption[]
  error?: string
  hint?: string
}

/** Native <select>: keyboard, mobile pickers and screen readers work with no extra code. */
export function Select({
  id,
  label,
  options,
  error,
  hint,
  className,
  ...props
}: SelectProps) {
  return (
    <Field id={id} label={label} error={error} hint={hint}>
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClasses, borderClasses(error), 'h-10', className)}
        {...props}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  )
}
