import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PanelControl from './pages/PanelControl'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/Login'
let router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/panel',
    element: <PanelControl />
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
