import React from 'react'
import './App.css'
import { useAuth0 } from '@auth0/auth0-react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Routes from './Routes'

function App() {
  const { isLoading } = useAuth0()
  if (isLoading) {
    return <div>Loading ...</div>
  }

  const router = createBrowserRouter(Routes)

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
