import { useState, useEffect } from 'react'
import { Box, Typography, TextField, Button, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DashboardHeader } from './HeaderSection'
import MobileAppBar from '../layout/MobileAppBar'
import { getCurrentUser } from '../utils/localStorage'
import tooths from '../assets/tooths.png'

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

// Tooth positions (percentage-based for responsiveness)
// Format: { id, name, top, left, width, height }
// ฟันมี 32 ซี่ (16 บน 16 ล่าง)
const TOOTH_POSITIONS = [
  // Upper jaw (top row) - from left to right (Right to Left, patient's perspective)
  { id: 'U1', name: 'ฟันกรามบนขวาซี่ที่ 3 (ฟันคุดบนขวา)', top: '39.5%', left: '5%', width: '13%', height: '8%' },
  { id: 'U2', name: 'ฟันกรามบนขวาซี่ที่ 2', top: '33%', left: '6%', width: '13%', height: '6.5%' },
  { id: 'U3', name: 'ฟันกรามบนขวาซี่ที่ 1', top: '25.8%', left: '8%', width: '11.5%', height: '7.5%' },
  { id: 'U4', name: 'ฟันกรามน้อยบนขวาซี่ที่ 2', top: '19%', left: '10.5%', width: '11.5%', height: '7.5%' },
  { id: 'U5', name: 'ฟันกรามน้อยบนขวาซี่ที่ 1', top: '13%', left: '14%', width: '12%', height: '7%' },
  { id: 'U6', name: 'ฟันเขี้ยวบนขวา', top: '7%', left: '20%', width: '12%', height: '8%' },
  { id: 'U7', name: 'ฟันตัดบนขวาซี่ที่ 2', top: '4%', left: '29%', width: '11%', height: '8%' },
  { id: 'U8', name: 'ฟันตัดบนขวาซี่ที่ 1', top: '1%', left: '39%', width: '12%', height: '10%' },
  { id: 'U9', name: 'ฟันตัดบนซ้ายซี่ที่ 1', top: '1%', left: '50%', width: '12%', height: '10%' },
  { id: 'U10', name: 'ฟันตัดบนซ้ายซี่ที่ 2', top: '3%', left: '62%', width: '10.5%', height: '9%' },
  { id: 'U11', name: 'ฟันเขี้ยวบนซ้าย', top: '7.5%', left: '70%', width: '11%', height: '8%' },
  { id: 'U12', name: 'ฟันกรามน้อยบนซ้ายซี่ที่ 1', top: '13%', left: '75.5%', width: '12%', height: '7.5%' },
  { id: 'U13', name: 'ฟันกรามน้อยบนซ้ายซี่ที่ 2', top: '20%', left: '80%', width: '11%', height: '7%' },
  { id: 'U14', name: 'ฟันกรามบนซ้ายซี่ที่ 1', top: '27%', left: '82%', width: '12%', height: '8%' },
  { id: 'U15', name: 'ฟันกรามบนซ้ายซี่ที่ 2', top: '34%', left: '83%', width: '12.5%', height: '8%' },
  { id: 'U16', name: 'ฟันกรามบนซ้ายซี่ที่ 3 (ฟันคุดบนซ้าย)', top: '41%', left: '83%', width: '13%', height: '7%' },
  // Lower jaw (bottom row) - from left to right (Left to Right, patient's perspective)
  { id: 'L1', name: 'ฟันกรามล่างซ้ายซี่ที่ 3 (ฟันคุดล่างซ้าย)', top: '63%', left: '1%', width: '7%', height: '12%' },
  { id: 'L2', name: 'ฟันกรามล่างซ้ายซี่ที่ 2', top: '64%', left: '7%', width: '7%', height: '12%' },
  { id: 'L3', name: 'ฟันกรามล่างซ้ายซี่ที่ 1', top: '65%', left: '13%', width: '7%', height: '10%' },
  { id: 'L4', name: 'ฟันกรามน้อยล่างซ้ายซี่ที่ 2', top: '67%', left: '19%', width: '7%', height: '10%' },
  { id: 'L5', name: 'ฟันกรามน้อยล่างซ้ายซี่ที่ 1', top: '68%', left: '24%', width: '7%', height: '9%' },
  { id: 'L6', name: 'ฟันเขี้ยวล่างซ้าย', top: '69%', left: '30%', width: '6%', height: '8%' },
  { id: 'L7', name: 'ฟันตัดล่างซ้ายซี่ที่ 2', top: '70%', left: '36%', width: '5%', height: '7%' },
  { id: 'L8', name: 'ฟันตัดล่างซ้ายซี่ที่ 1', top: '71%', left: '41%', width: '5%', height: '7%' },
  { id: 'L9', name: 'ฟันตัดล่างขวาซี่ที่ 1', top: '71%', left: '48%', width: '5%', height: '7%' },
  { id: 'L10', name: 'ฟันตัดล่างขวาซี่ที่ 2', top: '70%', left: '53%', width: '5%', height: '7%' },
  { id: 'L11', name: 'ฟันเขี้ยวล่างขวา', top: '69%', left: '58%', width: '6%', height: '8%' },
  { id: 'L12', name: 'ฟันกรามน้อยล่างขวาซี่ที่ 1', top: '68%', left: '64%', width: '7%', height: '9%' },
  { id: 'L13', name: 'ฟันกรามน้อยล่างขวาซี่ที่ 2', top: '67%', left: '69%', width: '7%', height: '10%' },
  { id: 'L14', name: 'ฟันกรามล่างขวาซี่ที่ 1', top: '65%', left: '75%', width: '7%', height: '10%' },
  { id: 'L15', name: 'ฟันกรามล่างขวาซี่ที่ 2', top: '64%', left: '82%', width: '7%', height: '12%' },
  { id: 'L16', name: 'ฟันกรามล่างขวาซี่ที่ 3 (ฟันคุดล่างขวา)', top: '63%', left: '88%', width: '7%', height: '12%' },
]

const ClickableTooth = styled(Box)(({ isSelected, hasData }) => {
  // ถ้ามีข้อมูล ให้แสดงเป็นสีขาว solid
  if (hasData) {
    return {
      position: 'absolute',
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      border: '2px solid rgba(255, 255, 255, 1)',
      borderRadius: '30%',
      transition: 'box-shadow 0.2s, background-color 0.2s, border 0.2s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        border: '2px solid rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 16px 0 rgba(26, 77, 77, 0.12), 0 2px 8px 0 rgba(168, 230, 207, 0.25)',
        zIndex: 50,
      },
      '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        boxShadow: '0 2px 8px 0 rgba(26, 77, 77, 0.10), 0 1px 4px 0 rgba(168, 230, 207, 0.18)',
      },
    }
  }
  // ถ้าถูกเลือก (แต่ยังไม่มีข้อมูล)
  if (isSelected) {
    return {
      position: 'absolute',
      cursor: 'pointer',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      border: '2px solid rgba(255, 255, 255, 1)',
      borderRadius: '30%',
      transition: 'box-shadow 0.2s, background-color 0.2s, border 0.2s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        border: '2px solid rgba(255, 255, 255, 1)',
        boxShadow: '0 4px 16px 0 rgba(26, 77, 77, 0.12), 0 2px 8px 0 rgba(168, 230, 207, 0.25)',
        zIndex: 50,
      },
      '&:active': {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        boxShadow: '0 2px 8px 0 rgba(26, 77, 77, 0.10), 0 1px 4px 0 rgba(168, 230, 207, 0.18)',
      },
    }
  }
  // ยังไม่มีข้อมูลและไม่ได้เลือก
  return {
    position: 'absolute',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
    borderRadius: '30%',
    transition: 'box-shadow 0.2s, background-color 0.2s, border 0.2s',
    '&:hover': {
      backgroundColor: 'rgba(168, 230, 207, 0.3)',
      border: '2px solid rgba(168, 230, 207, 0.6)',
      boxShadow: '0 4px 16px 0 rgba(26, 77, 77, 0.12), 0 2px 8px 0 rgba(168, 230, 207, 0.25)',
      zIndex: 50,
    },
    '&:active': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      boxShadow: '0 2px 8px 0 rgba(26, 77, 77, 0.10), 0 1px 4px 0 rgba(168, 230, 207, 0.18)',
    },
  }
})

const SpeechBubble = styled(Paper)(({ position }) => ({
  position: 'absolute',
  backgroundColor: '#a8e6cf',
  padding: '15px 20px',
  borderRadius: '15px',
  minWidth: '200px',
  maxWidth: '250px',
  zIndex: 100,
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    right: position === 'left' ? '30px' : 'auto',
    left: position === 'right' ? '30px' : 'auto',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #a8e6cf',
  },
  '@media (max-width: 768px)': {
    minWidth: '180px',
    maxWidth: '220px',
    padding: '12px 16px',
  },
}))

const StyledTextField = styled(TextField)({
  width: '100%',
  marginBottom: '12px',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '8px',
    fontSize: '0.9rem',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
      boxShadow: '0 0 0 2px rgba(26, 77, 77, 0.2)',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#1a4d4d',
    fontSize: '0.85rem',
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  },
  '& .MuiInputBase-input': {
    color: '#1a4d4d',
    fontSize: '0.9rem',
    fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
    padding: '8px 12px',
  },
})

const SaveButton = styled(Button)({
  backgroundColor: '#1a4d4d',
  color: 'white',
  borderRadius: '8px',
  padding: '8px 24px',
  fontSize: '0.9rem',
  fontWeight: 600,
  textTransform: 'none',
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  marginTop: '8px',
  '&:hover': {
    backgroundColor: '#2d6d6d',
  },
})

const Daily = () => {
  const [user, setUser] = useState(null)
  const [selectedTooth, setSelectedTooth] = useState(null)
  const [toothData, setToothData] = useState({})
  const [formData, setFormData] = useState({
    toothNumber: '',
    eruptionDate: '',
    notes: '',
  })

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
    // Load saved tooth data from localStorage
    const savedData = localStorage.getItem('toothData')
    if (savedData) {
      try {
        setToothData(JSON.parse(savedData))
      } catch (e) {
        console.error('Error loading tooth data:', e)
      }
    }
  }, [])

  const handleToothClick = (tooth, event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const containerRect = event.currentTarget.closest('[data-tooth-container]')?.getBoundingClientRect()
    
    setSelectedTooth({
      ...tooth,
      clickX: rect.left + rect.width / 2,
      clickY: rect.top + rect.height / 2,
      containerRect,
    })
    
    // Load existing data for this tooth if available
    const existingData = toothData[tooth.id] || {}
    setFormData({
      toothNumber: existingData.toothNumber || tooth.id,
      eruptionDate: existingData.eruptionDate || '',
      notes: existingData.notes || '',
    })
  }

  const handleCloseBubble = () => {
    setSelectedTooth(null)
  }

  const handleSave = () => {
    if (selectedTooth) {
      const newToothData = {
        ...toothData,
        [selectedTooth.id]: {
          ...formData,
          updatedAt: new Date().toISOString(),
        },
      }
      setToothData(newToothData)
      localStorage.setItem('toothData', JSON.stringify(newToothData))
      handleCloseBubble()
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }))
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
          Daily Diary
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          <Box
            data-tooth-container
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '600px',
              display: 'inline-block',
            }}
          >
            <Box
              component="img"
              src={tooths}
              alt="Tooth diagram"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: '10px',
                objectFit: 'contain',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'block',
                pointerEvents: 'none',
              }}
            />
            {TOOTH_POSITIONS.map((tooth) => {
              // ตรวจสอบว่าฟันซี่นี้มีข้อมูลใน localStorage หรือไม่
              const toothInfo = toothData[tooth.id]
              const hasData = toothInfo && (
                toothInfo.eruptionDate || 
                toothInfo.notes
              )
              
              return (
                <ClickableTooth
                  key={tooth.id}
                  isSelected={selectedTooth?.id === tooth.id}
                  hasData={hasData}
                  onClick={(e) => handleToothClick(tooth, e)}
                  sx={{
                    top: tooth.top,
                    left: tooth.left,
                    width: tooth.width,
                    height: tooth.height,
                  }}
                  title={tooth.name}
                />
              )
            })}
            
            {selectedTooth && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  zIndex: 110,
                  transform: 'translate(-50%, -50%)',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  pointerEvents: 'none', // Prevents blocking background except for bubble
                }}
              >
                <SpeechBubble
                  position="center"
                  sx={{
                    position: 'relative',
                    pointerEvents: 'auto', // Allow interactions inside bubble
                    '@media (max-width: 768px)': {
                      minWidth: '180px',
                      maxWidth: '220px',
                      padding: '12px 16px',
                    },
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      color: '#1a4d4d',
                      marginBottom: '12px',
                      fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
                      fontWeight: 600,
                      textAlign: 'center',
                    }}
                  >
                    {selectedTooth.name}
                  </Typography>

                  <StyledTextField
                    label="ฟันซี่ที่"
                    value={formData.toothNumber}
                    onChange={(e) => handleInputChange('toothNumber', e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />

                  <StyledTextField
                    label="ขึ้นวันที่"
                    type="date"
                    value={formData.eruptionDate}
                    onChange={(e) => handleInputChange('eruptionDate', e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <StyledTextField
                    label="หมายเหตุ"
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    variant="outlined"
                    size="small"
                    fullWidth
                    multiline
                    rows={2}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                    <SaveButton onClick={handleSave} variant="contained" size="small">
                      บันทึก
                    </SaveButton>
                  </Box>
                </SpeechBubble>
              </Box>
            )}
          </Box>
        </Box>
      </ContentBlock>

      <MobileAppBar />
    </DashboardContainer>
  )
}

export default Daily
