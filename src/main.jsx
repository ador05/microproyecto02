import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import ProfileView from './pages/ProfileView'
import Games from './pages/Games'
import Clubs from './pages/Clubs'
const router = createBrowserRouter([
  {
    path: '/homepage',
    element: <HomePage />,
    errorElement: <div><h1>404 Page Not Found</h1></div>,
  },
  {
    path: '/',
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
  {
    path: '/juegos',
    element: <Games />,

  },
  {
    path: '/clubes',
    element: <Clubs />,

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
