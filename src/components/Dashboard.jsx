import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DashboardHeader } from './HeaderSection'
import MobileAppBar from '../layout/MobileAppBar'
import { getCurrentUser } from '../utils/localStorage'

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

const calculateAge = (birthday) => {
  if (!birthday) return { years: 0, months: 0, days: 0 }

  const birthDate = new Date(birthday)
  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()
  let months = today.getMonth() - birthDate.getMonth()
  let days = today.getDate() - birthDate.getDate()
  
  if (days < 0) {
    months--
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
    days += lastMonth.getDate()
  }
  
  if (months < 0) {
    years--
    months += 12
  }
  
  return { years, months, days }
}

const Dashboard = () => {
  const [user, setUser] = useState()
  const [age, setAge] = useState()

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
    const calculatedAge = calculateAge(currentUser.birthday)
    setAge(calculatedAge)
  }, [])

  return (
    <DashboardContainer>
      <DottedBorder sx={{ top: 0 }} />
      <DottedBorder sx={{ bottom: 0 }} />

      <DashboardHeader age={age} userName={user?.name} />

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
          Smile fact
        </Typography>
      </ContentBlock>

      <MobileAppBar />
    </DashboardContainer>
  )
}

export default Dashboard
