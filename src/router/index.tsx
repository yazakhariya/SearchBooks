import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { GlobalStyle } from 'src/theme/global/global.style'
import router from './routes'

const RoutesProvider = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={createBrowserRouter(router)}></RouterProvider>
    </>
  )
}

export default RoutesProvider
