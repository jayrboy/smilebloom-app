import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button, TextField, Stack } from '@mui/material'
import { styled } from '@mui/material/styles'
import DecorativeElements from './DecorativeElements'
import HeaderSection from './HeaderSection'
import ContactInfo from './ContactInfo'

const ChildNameContainer = styled(Box)({
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
  fontFamily: 'system-ui, -apple-system, sans-serif',
})

const ChildNameContent = styled(Box)({
  position: 'relative',
  zIndex: 2,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 20px',
})

const ChildNameForm = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  width: '100%',
  maxWidth: '500px',
})

const NameInput = styled(TextField)({
  width: '100%',
  maxWidth: '400px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f5f5dc',
    borderRadius: '20px',
    padding: '20px 25px',
    fontSize: '1.1rem',
    color: '#1a4d4d',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
      boxShadow: '0 0 0 3px rgba(168, 230, 207, 0.3)',
    },
    '& input': {
      color: '#1a4d4d',
      padding: 0,
      '&::placeholder': {
        color: '#999',
        opacity: 1,
      },
    },
  },
  '@media (max-width: 768px)': {
    '& .MuiOutlinedInput-root': {
      padding: '18px 20px',
      fontSize: '1rem',
    },
  },
  '@media (max-width: 480px)': {
    '& .MuiOutlinedInput-root': {
      padding: '15px 18px',
      fontSize: '0.95rem',
    },
  },
})

const NextButton = styled(Button)({
  background: '#f5f5dc',
  color: '#1a4d4d',
  borderRadius: '12px',
  padding: '15px 50px',
  fontSize: '1.1rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginTop: '10px',
  '&:hover': {
    background: '#f5f5dc',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  '@media (max-width: 768px)': {
    padding: '12px 40px',
    fontSize: '1rem',
  },
})

const ChildName = () => {
  const [childName, setChildName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (childName.trim()) {
      navigate('/birthday')
    }
  }

  return (
    <ChildNameContainer>
      <DecorativeElements variant="form" />
      <HeaderSection />

      <ChildNameContent>
        <ChildNameForm component="form" onSubmit={handleSubmit} spacing={2}>
          <Typography
            sx={{
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              fontWeight: 400,
              color: 'white',
              textAlign: 'center',
              margin: 0,
            }}
          >
            Enter Your child name
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
              fontWeight: 400,
              color: 'white',
              textAlign: 'center',
              margin: '-10px 0 0 0',
            }}
          >
            กรุณากรอกชื่อลูกของคุณ
          </Typography>
          
          <NameInput
            type="text"
            placeholder=""
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            required
          />
          
          <NextButton type="submit">Next</NextButton>
        </ChildNameForm>
      </ChildNameContent>

      <ContactInfo />
    </ChildNameContainer>
  )
}

export default ChildName
