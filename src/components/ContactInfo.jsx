import { Box, Stack, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { EmailIcon, PhoneIcon } from './Icons'

const ContactInfoContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '100px',
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 40px',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '15px',
    bottom: '20px',
    padding: '0 20px',
    alignItems: 'flex-start',
  },
}))

const ContactInfo = () => {
  return (
    <ContactInfoContainer>
        <Stack direction="row" spacing={1}>
          <EmailIcon />
          <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem' }, color: 'white' }}>
            Suchanathorn@gmail.com
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1}>
          <PhoneIcon />
          <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.9rem' }, color: 'white' }}>
            064-291-9455
          </Typography>
        </Stack>
    </ContactInfoContainer>
  )
}

export default ContactInfo
