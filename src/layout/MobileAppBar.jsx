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
  padding: '12px 20px',
  paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
  boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
  borderTop: '1px solid rgba(26, 77, 77, 0.1)',
})

const NavButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})(({ isActive, theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  backgroundColor: isActive ? '#1a4d4d' : 'transparent',
  border: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  textDecoration: 'none',
  position: 'relative',
  '&:hover': {
    backgroundColor: isActive ? '#1a4d4d' : 'rgba(26, 77, 77, 0.08)',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(0) scale(0.95)',
  },
  '& svg': {
    width: '28px',
    height: '28px',
    transition: 'all 0.3s ease',
  },
  [theme.breakpoints.up('md')]: {
    width: '70px',
    height: '70px',
    '& svg': {
      width: '32px',
      height: '32px',
    },
  },
  ...(isActive && {
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '4px',
      height: '4px',
      borderRadius: '50%',
      backgroundColor: '#1a4d4d',
    },
  }),
}))

const MobileAppBar = () => {
  const location = useLocation()

  return (
    <NavBar>
      <Link to="/dashboard" style={{ textDecoration: 'none' }}>
        <NavButton 
          isActive={location.pathname === '/dashboard'}
          aria-label="Home"
        >
          <HomeNavIcon isActive={location.pathname === '/dashboard'} />
        </NavButton>
      </Link>
      
      <Link to="/daily" style={{ textDecoration: 'none' }}>
        <NavButton 
          isActive={location.pathname === '/daily'}
          aria-label="Daily"
        >
          <DailyNavIcon isActive={location.pathname === '/daily'} />
        </NavButton>
      </Link>
      
      <Link to="/favorites" style={{ textDecoration: 'none' }}>
        <NavButton 
          isActive={location.pathname === '/favorites'}
          aria-label="Favorites"
        >
          <FavoritesNavIcon isActive={location.pathname === '/favorites'} />
        </NavButton>
      </Link>
    </NavBar>
  )
}

export default MobileAppBar
