import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Outlet } from 'react-router-dom'
import { fetchToken } from '../store/AuthenticationSlice'
import store, { IRootState } from '../store/Store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { api } from './Axios'

function Authenticated() {
  const { isAuthenticated, user } = useAuth0()
  const authStatus = useSelector((state: IRootState) => state.auth.status)
  const token = useSelector((state: IRootState) => state.auth.token)
  if (isAuthenticated && user) {
    if (authStatus === 'idle') {
      store.dispatch(fetchToken())
    }
  }

  useEffect(() => {
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }, [token])

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export default Authenticated
