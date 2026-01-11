import { Link, useLocation } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HomeNavIcon, DailyNavIcon, FavoritesNavIcon } from '../components/Icons'

const NavBar = styled(Box)({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#E8F5E9',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: '15px 0',
  paddingBottom: 'calc(15px + env(safe-area-inset-bottom))',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 100,
})

const NavButton = styled(IconButton)(({ isActive }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: { xs: '55px', md: '60px' },
  height: { xs: '55px', md: '60px' },
  borderRadius: '15px',
  backgroundColor: isActive ? '#1a4d4d' : '#E8F5E9',
  border: 'none',
  transition: 'transform 0.2s',
  textDecoration: 'none',
  '&:active': {
    transform: 'scale(0.95)',
  },
  '& svg': {
    width: { xs: '24px', md: '28px' },
    height: { xs: '24px', md: '28px' },
  },
}))

const MobileAppBar = () => {
  const location = useLocation()

  return (
    <NavBar>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <NavButton isActive={location.pathname === '/dashboard'}>
          <HomeNavIcon isActive={location.pathname === '/dashboard'} />
        </NavButton>
      </Link>
      
      <Link to="/daily" style={{ textDecoration: 'none' }}>
        <NavButton isActive={location.pathname === '/daily'}>
          <DailyNavIcon isActive={location.pathname === '/daily'} />
        </NavButton>
      </Link>
      
      <Link to="/favorites" style={{ textDecoration: 'none' }}>
        <NavButton isActive={location.pathname === '/favorites'}>
          <FavoritesNavIcon isActive={location.pathname === '/favorites'} />
        </NavButton>
      </Link>
    </NavBar>
  )
}

export default MobileAppBar
