import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const DotsContainer = styled(Box)(({ position }) => ({
  position: 'absolute',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '8px',
  zIndex: 1,
  ...(position === 'top-left' && {
    top: '30px',
    left: '30px',
  }),
  ...(position === 'top-right' && {
    top: '30px',
    right: '30px',
  }),
  ...(position === 'bottom-right' && {
    bottom: '30px',
    right: '30px',
  }),
}))

const Dot = styled(Box)({
  width: '6px',
  height: '6px',
  backgroundColor: 'white',
  borderRadius: '50%',
  opacity: 0.6,
})

const CurveShape = styled(Box)({
  position: 'absolute',
  borderRadius: '50%',
  backgroundColor: '#a8e6cf',
  opacity: 0.3,
  zIndex: 0,
})

const DecorativeElements = ({ variant = "default" }) => {
  const renderDots = (position, count = 15) => {
    return (
      <DotsContainer position={position}>
        {Array.from({ length: count }).map((_, i) => (
          <Dot key={i} />
        ))}
      </DotsContainer>
    )
  }

  if (variant === "home") {
    return (
      <>
        {renderDots("top-left", 15)}
        {renderDots("bottom-right", 15)}
        <CurveShape sx={{ 
          width: { xs: '400px', md: '600px' },
          height: { xs: '400px', md: '600px' },
          top: '-200px',
          right: '-150px',
          transform: 'rotate(-20deg)'
        }} />
        <CurveShape sx={{ 
          width: { xs: '300px', md: '400px' },
          height: { xs: '300px', md: '400px' },
          bottom: '-100px',
          left: '-100px',
          transform: 'rotate(15deg)'
        }} />
      </>
    )
  }

  if (variant === "form") {
    return (
      <>
        {renderDots("top-right", 20)}
        {renderDots("bottom-right", 20)}
        <CurveShape sx={{ 
          width: { xs: '400px', md: '600px' },
          height: { xs: '400px', md: '600px' },
          top: '-200px',
          left: '-150px',
          transform: 'rotate(20deg)'
        }} />
        <CurveShape sx={{ 
          width: { xs: '350px', md: '500px' },
          height: { xs: '350px', md: '500px' },
          bottom: '-150px',
          right: '-100px',
          transform: 'rotate(-15deg)'
        }} />
      </>
    )
  }

  return null
}

export default DecorativeElements
