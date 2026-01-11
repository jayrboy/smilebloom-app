import { useState, useEffect } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DashboardHeader } from './HeaderSection'
import MobileAppBar from '../layout/MobileAppBar'
import { getCurrentUser } from '../utils/localStorage'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { GiTooth } from 'react-icons/gi'

const DashboardContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#E8F5E9',
  fontFamily: 'system-ui, -apple-system, sans-serif',
  padding: 0,
  margin: 0,
  overflowX: 'hidden',
  overflowY: 'auto',
})

const DottedBorder = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  height: '3px',
  backgroundImage: 'radial-gradient(circle, #FFCDD2 2px, transparent 2px)',
  backgroundSize: '12px 3px',
  backgroundRepeat: 'repeat-x',
  zIndex: 10,
})

const ContentBlock = styled(Box)({
  backgroundColor: '#1a4d4d',
  borderRadius: '25px',
  padding: '25px 20px',
  margin: '20px',
  marginBottom: '100px',
  minHeight: '300px',
  '@media (max-width: 768px)': {
    margin: '15px',
    marginBottom: '90px',
    minHeight: '250px',
  },
  '@media (max-width: 480px)': {
    margin: '10px',
    marginBottom: '90px',
    padding: '20px 15px',
  },
})

const FavoritesList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
})

const FavoriteCard = styled(Box)({
  backgroundColor: '#f5f5dc',
  borderRadius: '15px',
  padding: '15px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '@media (max-width: 480px)': {
    padding: '12px 15px',
    gap: '12px',
  },
})

const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '40px',
  width: '40px',
  height: '40px',
  '@media (max-width: 480px)': {
    minWidth: '35px',
    width: '35px',
    height: '35px',
  },
})

const CardContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
})

const CardTitle = styled(Typography)({
  fontSize: '1rem',
  color: '#1a4d4d',
  fontWeight: 600,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  '@media (max-width: 480px)': {
    fontSize: '0.9rem',
  },
})

const CardSubtitle = styled(Typography)({
  fontSize: '0.85rem',
  color: '#1a4d4d',
  opacity: 0.7,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  '@media (max-width: 480px)': {
    fontSize: '0.75rem',
  },
})

const EmptyState = styled(Box)({
  textAlign: 'center',
  padding: '40px 20px',
  color: 'white',
})

const EmptyStateText = styled(Typography)({
  fontSize: '1rem',
  color: 'white',
  opacity: 0.8,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  marginTop: '10px',
})

const Favorites = () => {
  const [user, setUser] = useState(null)
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const loadData = () => {
      const currentUser = getCurrentUser()
      if (currentUser) {
        setUser(currentUser)
      }
      
      // Load favorites from localStorage
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        try {
          const parsed = JSON.parse(savedFavorites)
          setFavorites(Array.isArray(parsed) ? parsed : [])
        } catch (e) {
          console.error('Error loading favorites:', e)
          setFavorites([])
        }
      } else {
        // Initialize with sample data if no favorites exist
        const sampleFavorites = [
          {
            id: '1',
            type: 'location',
            name: 'คลินิกทันตกรรม',
            address: '123 ถนนสุขุมวิท กรุงเทพฯ',
          },
          {
            id: '2',
            type: 'dentist',
            name: 'ทพ.สมชาย ใจดี',
            clinic: 'คลินิกทันตกรรม',
          },
        ]
        setFavorites(sampleFavorites)
        localStorage.setItem('favorites', JSON.stringify(sampleFavorites))
      }
    }
    
    loadData()
  }, [])

  const handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const getIcon = (type) => {
    switch (type) {
      case 'location':
        return <HiLocationMarker style={{ color: '#1a4d4d', fontSize: '24px' }} />
      case 'dentist':
        return <GiTooth style={{ color: '#1a4d4d', fontSize: '24px' }} />
      default:
        return <AiFillHeart style={{ color: '#1a4d4d', fontSize: '24px' }} />
    }
  }

  return (
    <DashboardContainer>
      <DottedBorder sx={{ top: 0 }} />
      <DottedBorder sx={{ bottom: 0 }} />

      <DashboardHeader userName={user?.name} />

      <ContentBlock>
        <Typography
          sx={{
            fontSize: { xs: '1.1rem', md: '1.3rem' },
            color: 'white',
            margin: '0 0 20px 0',
            fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
            fontWeight: 400,
          }}
        >
          Favorites
        </Typography>

        {favorites.length > 0 ? (
          <FavoritesList>
            {favorites.map((favorite) => (
              <FavoriteCard key={favorite.id}>
                <IconContainer>
                  {getIcon(favorite.type)}
                </IconContainer>
                <CardContent>
                  <CardTitle>{favorite.name}</CardTitle>
                  {favorite.address && (
                    <CardSubtitle>{favorite.address}</CardSubtitle>
                  )}
                  {favorite.clinic && (
                    <CardSubtitle>{favorite.clinic}</CardSubtitle>
                  )}
                </CardContent>
                {/* <IconButton
                  onClick={() => handleRemoveFavorite(favorite.id)}
                  sx={{
                    color: '#1a4d4d',
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 77, 77, 0.1)',
                    },
                  }}
                >
                  <AiFillHeart style={{ fontSize: '20px' }} />
                </IconButton> */}
              </FavoriteCard>
            ))}
          </FavoritesList>
        ) : (
          <EmptyState>
            <AiOutlineHeart style={{ fontSize: '48px', color: 'white', opacity: 0.5 }} />
            <EmptyStateText>
              ยังไม่มีรายการโปรด
              <br />
              เพิ่มรายการโปรดเพื่อดูที่นี่
            </EmptyStateText>
          </EmptyState>
        )}
      </ContentBlock>

      <MobileAppBar />
    </DashboardContainer>
  )
}

export default Favorites
