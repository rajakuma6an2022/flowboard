import { Link, Route, Routes } from 'react-router-dom'
import { Button, EmptyState } from '@/components/ui'

function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-h1 font-semibold">Flowboard</h1>
      <p className="text-text-secondary mt-2">
        Day 1 skeleton: design system, CI and deployment are live. The board arrives on
        Day 3.
      </p>
      <div className="mt-6 flex gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="danger">Danger</Button>
      </div>
    </main>
  )
}

function NotFound() {
  // Visiting any unknown path on the deployed site should show this, not a Vercel 404.
  return (
    <main className="mx-auto max-w-3xl p-8">
      <EmptyState
        title="Page not found"
        description="This route does not exist. If you refreshed a deep link and see this, the SPA rewrite works."
        action={
          <Link to="/" className="text-primary font-medium underline">
            Back to the board
          </Link>
        }
      />
    </main>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
