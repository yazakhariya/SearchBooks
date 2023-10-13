import { RouteObject } from 'react-router-dom'
import NotFound from 'src/pages/NotFound/NotFound'
import Main from 'src/pages/SearchPage/Main'

const router: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

export default router
