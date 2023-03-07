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
    element: (
      <RequireApiKeyRoute>
        <SideBarRoute />
      </RequireApiKeyRoute>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: RoutePaths.Setting,
        element: <SettingPage />,
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
