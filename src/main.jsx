import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Profile />
    {/*<Login />*/}
    {/*<Home />*/}
  </StrictMode>,
)
