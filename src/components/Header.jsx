import { Link, useLocation } from 'react-router-dom'
import './header.css'

export default function Header() {
  const location = useLocation()

  const links = [
    { label: 'Home', to: '/home' },
    { label: 'Tournaments', to: '/tracker' },
    { label: 'Stats', to: '/profile' },
  ]

  return (
    <header className='app-header'>
      <div className='header-brand'>
        <Link to='/home' className='brand-link'>Poneglyph</Link>
      </div>
      <nav className='header-nav'>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`header-link ${location.pathname === link.to ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}
