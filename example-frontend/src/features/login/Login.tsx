// import { useNavigate } from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      onClick={() =>
        loginWithRedirect({
          authorizationParams: {
            audience: 'https://localhost:8080',
          },
        })
      }
    >
      Log In
    </button>
  )
}

export default Login
