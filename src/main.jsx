import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import Login from './pages/login'
import Profile from './pages/profile'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>

  </StrictMode>,
)
