import Login from '../../features/login/Login'
import Home from '../../features/home/Home'
import { Navigate, RouteObject } from 'react-router-dom'
import Authenticated from './Authenticated'
import GroupPage from '../../features/group/GroupPage'
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
      {
        path: '/groups/:groupId',
        element: <GroupPage />,
      },
    ],
  },
]

export default Routes
