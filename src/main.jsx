import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ProfileView from './pages/ProfileView'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <div><h1>404 Page Not Found</h1></div>,
  },
  {
    path: '/iniciarsesion',
    element: <LogIn />,
  },
  {
    path: '/registrarse',
    element: <SignUp />,
  },
  {
    path: '/perfil',
    element: <ProfileView />,

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
