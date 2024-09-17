import Login from '../../features/login/Login'
import Home from '../../features/home/Home'
import { Navigate, RouteObject } from 'react-router-dom'
import Authenticated from './Authenticated'
const Routes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />,
  },
  {
    errorElement: <Navigate to={'/home'} />,
    element: <Authenticated />,
    children: [
      {
        path: '/home',
        index: true,
        element: <Home />,
      },
    ],
  },
]

export default Routes
