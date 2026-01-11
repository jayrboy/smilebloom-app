import { useState } from 'react'
import { Box, Typography, Stack, Dialog, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { HeaderLogo, BookIcon, ToothIcon } from './Icons'
import Intro from './Intro'

const HeaderSectionContainer = styled(Box)({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '30px 40px',
  width: '100%',
  boxSizing: 'border-box',
  '@media (max-width: 768px)': {
    padding: '20px',
  },
})

const HeaderLogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    width: '50px',
    height: '50px',
  },
  '@media (max-width: 768px)': {
    '& svg': {
      width: '40px',
      height: '40px',
    },
  },
  '@media (max-width: 480px)': {
    '& svg': {
      width: '35px',
      height: '35px',
    },
  },
})

const BrandName = styled(Typography)({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '2rem',
  fontWeight: 700,
  color: 'white',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  margin: 0,
  '@media (max-width: 768px)': {
    fontSize: '1.5rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '1.2rem',
    letterSpacing: '2px',
  },
})

const AgeBubble = styled(Box)({
  position: 'relative',
  backgroundColor: '#a8e6cf',
  borderRadius: '20px',
  padding: '15px 20px',
  width: 'fit-content',
  maxWidth: '100%',
  zIndex: 2,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    right: '30px',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #a8e6cf',
  },
  '@media (max-width: 480px)': {
    padding: '12px 15px',
  },
})

export const HeaderSection = ({ showAgeBubble = false, age = null, logoVariant = "default" }) => {
  return (
    <>
      <HeaderSectionContainer>
        <HeaderLogoContainer>
          <HeaderLogo variant={logoVariant} />
        </HeaderLogoContainer>
        <BrandName>SMILEBLOOM</BrandName>
      </HeaderSectionContainer>
      
      {showAgeBubble && age && (
        <AgeBubble>
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', md: '0.95rem' },
              color: 'white',
              margin: 0,
              fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
              fontWeight: 400,
              whiteSpace: { xs: 'normal', md: 'nowrap' },
            }}
          >
            ปัจจุบัน น้องอายุ : {age.years}ปี...{age.months}เดือน...{age.days}วัน
          </Typography>
        </AgeBubble>
      )}
    </>
  )
}

const DashboardHeaderContainer = styled(Box)({
  position: 'relative',
  backgroundColor: '#1a4d4d',
  padding: '30px 20px 50px 20px',
  marginBottom: '20px',
  zIndex: 1,
  borderRadius: '0 0 30px 30px',
  '@media (max-width: 480px)': {
    padding: '25px 15px 45px 15px',
    borderRadius: '0 0 25px 25px',
  },
})

const WelcomeSection = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '15px',
})

const WelcomeText = styled(Box)({
  flex: 1,
})

const WelcomeLine = styled(Typography)({
  fontSize: '1.2rem',
  color: 'white',
  margin: '5px 0',
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  fontWeight: 400,
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
  '@media (max-width: 480px)': {
    fontSize: '0.9rem',
  },
})

const HeaderIcons = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  alignItems: 'center',
  '@media (max-width: 768px)': {
    gap: '10px',
  },
})

export const DashboardHeader = ({ age = null }) => {
  const [openIntro, setOpenIntro] = useState(false)

  const handleOpenIntro = () => {
    setOpenIntro(true)
  }

  const handleCloseIntro = () => {
    setOpenIntro(false)
  }

  return (
    <>
      <DashboardHeaderContainer>
        <Typography
          sx={{
            fontSize: { xs: '1.3rem', sm: '1.5rem', md: '2rem' },
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            margin: '0 0 20px 0',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          SMILEBLOOM
        </Typography>
        
        <WelcomeSection>
          <WelcomeText>
            <WelcomeLine>Welcome!</WelcomeLine>
            <WelcomeLine>น้อง...และผู้ ปกครอง</WelcomeLine>
          </WelcomeText>
          
          <HeaderIcons direction="row" spacing={1.5}>
            <IconButton
              onClick={handleOpenIntro}
              sx={{
                padding: '8px',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '& svg': { 
                  width: { xs: '30px', md: '35px' }, 
                  height: { xs: '30px', md: '35px' } 
                }
              }}
            >
              <BookIcon />
            </IconButton>
            <IconButton
              onClick={handleOpenIntro}
              sx={{
                padding: '8px',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
                '& svg': { 
                  width: { xs: '35px', md: '40px' }, 
                  height: { xs: '35px', md: '40px' } 
                }
              }}
            >
              <ToothIcon />
            </IconButton>
          </HeaderIcons>
        </WelcomeSection>
      
      <Box sx={{ position: 'relative', zIndex: 2, marginTop: '10px' }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          justifyContent: 'space-between',
          gap: { xs: '10px', md: '15px' },
        }}>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', md: '1rem' },
              color: 'white',
              margin: 0,
              fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
              fontWeight: 400,
              flex: { xs: '1 1 auto', md: '0 1 auto' },
            }}
          >
            ขอบคุณที่เลือก smilebloom
          </Typography>
          
          {age && (
            <AgeBubble sx={{ 
              margin: 0,
              alignSelf: { xs: 'flex-end', md: 'flex-end' },
            }}>
              <Typography
                sx={{
                  fontSize: { xs: '0.85rem', md: '0.95rem' },
                  color: 'white',
                  margin: 0,
                  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                  fontWeight: 400,
                  whiteSpace: { xs: 'normal', md: 'nowrap' },
                }}
              >
                ปัจจุบัน น้องอายุ : {age.years}ปี...{age.months}เดือน...{age.days}วัน
              </Typography>
            </AgeBubble>
          )}
        </Box>
      </Box>
    </DashboardHeaderContainer>

    <Dialog
      open={openIntro}
      onClose={handleCloseIntro}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          padding: '30px',
          backgroundColor: '#f5f5f5',
        }
      }}
    >
      <Intro onClose={handleCloseIntro} />
    </Dialog>
    </>
  )
}
