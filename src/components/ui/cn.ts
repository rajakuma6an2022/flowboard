/** Tiny class-name joiner. Skips falsy values so conditionals stay readable. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
