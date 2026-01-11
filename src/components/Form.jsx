import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Box, 
  Typography, 
  Button, 
  TextField, 
  Stack, 
  Paper,
  Container,
  FormControl,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import DecorativeElements from '../layout/DecorativeElements'
import { HeaderSection } from './HeaderSection'
import ContactInfo from './ContactInfo'

const FormContainer = styled(Box)({
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

const FormContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  flex: 0.8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  overflowY: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}))

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  width: '100%',
  maxWidth: '600px',
  backgroundColor: 'transparent',
  boxShadow: 'none',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}))

const FormStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down('xs')]: {
    gap: theme.spacing(2.5),
  },
}))

const SectionBox = styled(Box)({
  width: '100%',
  marginBottom: 0,
})

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#f5f5dc',
    borderRadius: '20px',
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
      padding: theme.spacing(2.5, 3),
      '&::placeholder': {
        color: '#999',
        opacity: 1,
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: '#1a4d4d',
    backgroundColor: '#f5f5dc',
    padding: '0 4px',
    borderRadius: '8px',
    left: '10px',
    top: '2px',
    zIndex: 1,
    '&.Mui-focused': {
      color: '#1a4d4d',
      backgroundColor: '#f5f5dc',
      padding: '0 4px',
    },
    '&.MuiInputLabel-shrink': {
      color: '#1a4d4d',
      backgroundColor: '#f5f5dc',
      padding: '0 4px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiOutlinedInput-root': {
      fontSize: '1rem',
      '& input': {
        padding: theme.spacing(2, 2.5),
      },
    },
  },
  [theme.breakpoints.down('xs')]: {
    '& .MuiOutlinedInput-root': {
      fontSize: '0.95rem',
      '& input': {
        padding: theme.spacing(1.5, 2),
      },
    },
  },
}))

const SubmitButton = styled(Button)(({ theme }) => ({
  background: '#f5f5dc',
  color: '#1a4d4d',
  borderRadius: '12px',
  padding: theme.spacing(1.875, 5),
  fontSize: '1.1rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  width: '100%',
  maxWidth: '400px',
  '&:hover': {
    background: '#f5f5dc',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 4),
    fontSize: '1rem',
  },
}))

const Form = () => {
  const navigate = useNavigate()
  const formRef = useRef(null)
  
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
  })

  const [errors, setErrors] = useState({
    name: false,
    birthday: false,
  })

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: false }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      birthday: !formData.birthday,
    }
    setErrors(newErrors)
    return !newErrors.name && !newErrors.birthday
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      const payload = {
        name: formData.name.trim(),
        birthday: formData.birthday,
        createdAt: new Date().toISOString(),
      }

      // save in local storage
      localStorage.setItem('users', JSON.stringify(payload))
      
      navigate('/dashboard')
    }
  }

  return (
    <FormContainer>
      <DecorativeElements variant="form" />
      <HeaderSection />

      <FormContent maxWidth="md">
        <FormPaper elevation={0}>
          <Box
            component="form"
            ref={formRef}
            onSubmit={handleSubmit}
            noValidate
            sx={{ width: '100%' }}
          >
            <FormStack>
              {/* Name Section */}
              <SectionBox>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                    fontWeight: 400,
                    color: 'white',
                    textAlign: 'center',
                    marginBottom: 4,
                  }}
                >
                  Enter Your child name
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
                    fontWeight: 400,
                    color: 'white',
                    textAlign: 'left',
                    marginBottom: 2,
                  }}
                >
                  กรุณากรอกชื่อลูกของคุณ
                </Typography>
                
                <FormControl fullWidth error={errors.name} sx={{ marginBottom: 1 }}>
                  <StyledTextField
                    type="text"
                    label="Child Name"
                    placeholder="Enter child's name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    error={errors.name}
                    helperText={errors.name ? 'Please enter child name' : ''}
                    FormHelperTextProps={{
                      sx: { 
                        color: errors.name ? '#ff6b6b' : 'rgba(255, 255, 255, 0.7)',
                        marginTop: 1,
                      }
                    }}
                  />
                </FormControl>
              </SectionBox>

              {/* Birthday Section */}
              <SectionBox>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
                    fontWeight: 400,
                    color: 'white',
                    textAlign: 'left',
                    marginBottom: 2,
                  }}
                >
                  กรุณากรอก วัน/เดือน/ปี เกิดลูกของคุณ
                </Typography>
                
                <FormControl fullWidth error={errors.birthday} sx={{ marginBottom: 1 }}>
                  <StyledTextField
                    type="date"
                    label="Birthday"
                    value={formData.birthday}
                    onChange={(e) => handleChange('birthday', e.target.value)}
                    required
                    error={errors.birthday}
                    helperText={errors.birthday ? 'Please select birthday' : ''}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    FormHelperTextProps={{
                      sx: { 
                        color: errors.birthday ? '#ff6b6b' : 'rgba(255, 255, 255, 0.7)',
                        marginTop: 1,
                      }
                    }}
                  />
                </FormControl>
              </SectionBox>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  width: '100%',
                  marginTop: { xs: 4, sm: 5, md: 6 },
                  paddingTop: { xs: 2, sm: 3 },
                }}
              >
                <SubmitButton type="submit" variant="contained">
                  Next
                </SubmitButton>
              </Box>
            </FormStack>
          </Box>
        </FormPaper>
      </FormContent>

      <ContactInfo />
    </FormContainer>
  )
}

export default Form
