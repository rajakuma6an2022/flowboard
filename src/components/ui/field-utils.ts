/** Builds aria-describedby so screen readers read the hint or error with the input. */
export function describedBy(
  id: string,
  error?: string,
  hint?: string,
): string | undefined {
  if (error) return `${id}-error`
  if (hint) return `${id}-hint`
  return undefined
}

export const controlClasses =
  'w-full rounded-control border bg-background px-3 text-body text-text-primary placeholder:text-text-secondary ' +
  'disabled:cursor-not-allowed disabled:bg-surface disabled:opacity-60'

export function borderClasses(error?: string): string {
  return error ? 'border-danger' : 'border-border-input'
}
