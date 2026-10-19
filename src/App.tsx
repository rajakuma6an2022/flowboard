import { Link, Route, Routes } from 'react-router-dom'

function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-h1 font-semibold">Flowboard</h1>
      <p className="text-text-secondary mt-2">
        Day 1 skeleton: tokens, CI and deployment are live.
      </p>
    </main>
  )
}

function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-h1 font-semibold">Page not found</h1>
      <Link to="/" className="text-primary font-medium underline">
        Back to the board
      </Link>
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
