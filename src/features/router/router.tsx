import { createBrowserRouter } from 'react-router-dom'
import { RequireApiKeyRoute } from './require-api-key-route'
import { NotFoundPage } from '../../pages/not-found-page'
import { HomePage } from '../../pages/home-page'
import { FillInApiKeyPage } from '../../pages/fill-in-api-key-page'

enum RoutePaths {
  Home = '/',
  FillInApiKey = '/fill-in-api-key',
  NotFound = '*',
}

const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: (
      <RequireApiKeyRoute>
        <HomePage />
      </RequireApiKeyRoute>
    ),
  },
  {
    path: RoutePaths.FillInApiKey,
    element: <FillInApiKeyPage />,
  },
  {
    path: RoutePaths.NotFound,
    element: <NotFoundPage />,
  },
])

export { router, RoutePaths }
