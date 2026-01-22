import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import MobileAppBar from './MobileAppBar'
import { colors, fonts } from '../theme/tokens'

const DashboardContainer = styled(Box)({
  position: 'relative',
  width: '100%',
  minHeight: '100vh',
  backgroundColor: colors.mintBackground,
  fontFamily: fonts.system,
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
  backgroundImage: `radial-gradient(circle, ${colors.pinkLight} 2px, transparent 2px)`,
  backgroundSize: '12px 3px',
  backgroundRepeat: 'repeat-x',
  zIndex: 10,
})

export const DashboardContentBlock = styled(Box)({
  backgroundColor: colors.tealDark,
  borderRadius: '25px',
  padding: '25px 20px',
  margin: '20px',
  marginBottom: '100px', // space for bottom app bar
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

export const DashboardSectionTitle = ({ children }) => (
  <Typography
    sx={{
      fontSize: { xs: '1.1rem', md: '1.3rem' },
      color: 'white',
      margin: '0 0 20px 0',
      fontFamily: fonts.comic,
      fontWeight: 400,
    }}
  >
    {children}
  </Typography>
)

const DashboardLayout = ({ header = null, children }) => {
  return (
    <DashboardContainer>
      <DottedBorder sx={{ top: 0 }} />
      <DottedBorder sx={{ bottom: 0 }} />

      {header}

      {children}

      <MobileAppBar />
    </DashboardContainer>
  )
}

export default DashboardLayout
