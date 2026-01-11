import { Link, useLocation } from 'react-router-dom'
import { HomeNavIcon, DailyNavIcon, FavoritesNavIcon } from '../components/Icons'

const MobileAppBar = () => {
  const location = useLocation()

  return (
    <div className="nav-bar">
      <Link to="/dashboard" className={`nav-button ${location.pathname === '/dashboard' ? 'nav-button-active' : ''}`}>
        <HomeNavIcon isActive={location.pathname === '/dashboard'} />
      </Link>
      
      <Link to="/daily" className={`nav-button ${location.pathname === '/daily' ? 'nav-button-active' : ''}`}>
        <DailyNavIcon isActive={location.pathname === '/daily'} />
      </Link>
      
      <Link to="/favorites" className={`nav-button ${location.pathname === '/favorites' ? 'nav-button-active' : ''}`}>
        <FavoritesNavIcon isActive={location.pathname === '/favorites'} />
      </Link>
    </div>
  )
}

export default MobileAppBar
