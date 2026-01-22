import { Link } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import DecorativeElements from '../layout/DecorativeElements'
import ContactInfo from '../components/ContactInfo'
import { HomeIcon } from '../components/Icons'

const HomeContainer = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100%',
  height: '100%',
  backgroundColor: '#1a4d4d',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'system-ui, -apple-system, sans-serif',
})

const HomeContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  padding: '0 20px',
})

const TitleSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
})

const SmilebloomContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '10px',
  },
}))

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    width: '60px',
    height: '60px',
  },
  '@media (max-width: 768px)': {
    '& svg': {
      width: '50px',
      height: '50px',
    },
  },
  '@media (max-width: 480px)': {
    '& svg': {
      width: '40px',
      height: '40px',
    },
  },
})

const StartButton = styled(Button)({
  backgroundColor: '#f5f5dc',
  color: '#1a4d4d',
  borderRadius: '12px',
  padding: '18px 60px',
  fontSize: '1.2rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginTop: '20px',
  '&:hover': {
    backgroundColor: '#f5f5dc',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '@media (max-width: 768px)': {
    padding: '15px 50px',
    fontSize: '1rem',
  },
})

const Home = () => {
  const content = 'เว็บไซต์ที่ช่วยบันทึกการเจริญเติบโตของฟันและสุขภาพฟัน เพื่อคุณแม่และคุณหนู'
  return (
    <HomeContainer>
      <DecorativeElements variant="home" />

      <HomeContent>
        <TitleSection>
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              margin: 0,
            }}
          >
            WELCOME TO
          </Typography>
          <SmilebloomContainer>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                margin: 0,
              }}
            >
              SMILEBLOOM
            </Typography>
            <LogoContainer>
              <HomeIcon />
            </LogoContainer>
          </SmilebloomContainer>
        </TitleSection>

        <Typography
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            color: 'white',
            maxWidth: '500px',
            lineHeight: 1.6,
            margin: '10px 0',
            padding: { xs: '0 20px', md: 0 },
          }}
        >
          {content}
        </Typography>

        <Link to="/form" style={{ textDecoration: 'none' }}>
          <StartButton>START</StartButton>
        </Link>
      </HomeContent>

      <ContactInfo />
    </HomeContainer>
  )
}

export default Home
