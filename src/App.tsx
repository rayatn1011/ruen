import { RouterProvider } from 'react-router-dom'
import { router } from './features/router'

const App = () => {
  return <RouterProvider router={router} />
}

export { App }
