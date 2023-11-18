import { Navigate, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from 'react'

import { routes } from 'constants/routes'
import { LOCAL_STORAGE_TK } from "constants/keys";

const Login = lazy(() => import('./Login'))
const Register = lazy(() => import('./Register'))
const Main = lazy(() => import('./Main'))

const PrivateRoute = () => localStorage.getItem(LOCAL_STORAGE_TK) ? <Outlet /> : <Navigate to={routes.LOGIN} />

const Routes = () => (
  <RouterProvider 
    router={createBrowserRouter([
      {
        path: routes.LOGIN,
        element: <Login />
      },
      {
        path: routes.REGISTER,
        element: <Register />
      },
      {
        path: routes.MAIN,
        element: <PrivateRoute />,
        children: [
          {
            path: routes.MAIN,
            element: <Main />,
          }
        ]
      }
    ])}
  />
)

export default Routes;
