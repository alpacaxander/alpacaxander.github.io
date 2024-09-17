import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  const navigate = useNavigate()

  if (!isAuthenticated) {
    loginWithRedirect({
      authorizationParams: {
        audience: 'https://localhost:8080',
      },
    })
  } else {
    navigate('/home')
  }

  return <div></div>
}

export default Login
