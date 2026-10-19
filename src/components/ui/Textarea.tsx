import type { ComponentProps } from 'react'
import { cn } from './cn'
import { Field } from './Field'
import { borderClasses, controlClasses, describedBy } from './field-utils'

export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'id'> {
  id: string
  label: string
  error?: string
  hint?: string
}

export function Textarea({ id, label, error, hint, className, ...props }: TextareaProps) {
  return (
    <Field id={id} label={label} error={error} hint={hint}>
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, error, hint)}
        className={cn(controlClasses, borderClasses(error), 'min-h-24 py-2', className)}
        {...props}
      />
    </Field>
  )
}
