import { cn } from './cn'

/** Decorative placeholder. Give it explicit size classes so swapping in real content never shifts layout. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('rounded-control bg-border motion-safe:animate-pulse', className)}
    />
  )
}
