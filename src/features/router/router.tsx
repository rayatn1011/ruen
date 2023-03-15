import { createBrowserRouter } from 'react-router-dom'
import { RequireApiKeyRoute } from './require-api-key-route'
import { NotFoundPage } from '../../pages/not-found-page'
import { HomePage } from '../../pages/home-page'
import { FillInApiKeyPage } from '../../pages/fill-in-api-key-page'
import { SettingPage } from '../../pages/setting-page'
import { SideBarRoute } from './sidebar-route'

enum RoutePaths {
  Home = '/',
  FillInApiKey = '/fill-in-api-key',
  Setting = '/setting',
  NotFound = '*',
}

const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: <SideBarRoute />,
    children: [
      {
        index: true,
        element: (
          <RequireApiKeyRoute>
            <HomePage />
          </RequireApiKeyRoute>
        ),
      },
      {
        path: RoutePaths.Setting,
        element: (
          <RequireApiKeyRoute>
            <SettingPage />
          </RequireApiKeyRoute>
        ),
      },
    ],
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
