import { useNavigate } from 'react-router-dom'
import { RoutePaths } from '../features/router'

function NotFoundPage() {
  const navigate = useNavigate()
  return (
    <div className="h-screen w-screen bg-stone-100 p-16">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mb-8">Page not found.</p>
        <button
          className="rounded bg-teal-600 px-4 py-2 text-teal-50 transition hover:bg-teal-700 active:bg-teal-800"
          type="button"
          onClick={() => navigate(RoutePaths.Home)}
        >
          Back to home
        </button>
      </div>
    </div>
  )
}

export { NotFoundPage }
