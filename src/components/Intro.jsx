import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const IntroContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '20px',
  fontFamily: 'system-ui, -apple-system, sans-serif',
})

const Title = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#1a4d4d',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  marginBottom: '10px',
  '@media (max-width: 768px)': {
    fontSize: '2rem',
  },
})

const Subtitle = styled(Typography)({
  fontSize: '1.1rem',
  color: '#666',
  textAlign: 'center',
  fontStyle: 'italic',
  marginBottom: '20px',
  '@media (max-width: 768px)': {
    fontSize: '1rem',
  },
})

const Section = styled(Box)({
  marginBottom: '20px',
})

const SectionTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 600,
  color: '#1a4d4d',
  marginBottom: '12px',
  '@media (max-width: 768px)': {
    fontSize: '1.3rem',
  },
})

const SectionText = styled(Typography)({
  fontSize: '1rem',
  color: '#333',
  lineHeight: 1.8,
  whiteSpace: 'pre-line',
  '@media (max-width: 768px)': {
    fontSize: '0.9rem',
  },
})

const CloseButton = styled(Button)({
  backgroundColor: '#1a4d4d',
  color: 'white',
  borderRadius: '12px',
  padding: '12px 40px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  marginTop: '20px',
  alignSelf: 'center',
  '&:hover': {
    backgroundColor: '#2d6d6d',
  },
})

const Intro = ({ onClose }) => {
  const whatWeGotText = `บันทึกการขึ้นของฟัน "BabyBite"
สำหรับเด็กที่ยังฟันน้ำนมขึ้นไม่ครบจะเป็นหน้าจอบันทึกการขึ้นของฟันน้ำนม เช่น วันที่ขึ้น เวลาที่ขึ้น ความรู้สึกอื่นๆ ที่อยากบันทึก

วันนัดหมอฟัน "DentistDay"
บันทึกวันนัดหมอฟัน รวมถึงคำแนะนำต่างๆ ของหมอฟันได้ในโหมดนี้ ไม่ว่าจะเป็นประวัติการรักษา ชื่อทันตแพทย์ที่ถูกใจ หรือคลินิกที่ไปประจำ

ข้อมูลเกี่ยวกับช่องปาก "SmileFacts"
โรคเกี่ยวกับช่องปาก ฟัน หรือการขึ้นตามสถิติวัยว่าฟันซี่ไหนขึ้นเมื่อไหร่ เป็นต้น`

  const storyText = `SMILEBLOOM คือ เว็บไซต์ที่ถูกสร้างมาเพื่ออำนวยความสะดวกให้แก่ผู้ปกครองที่มีลูกเล็ก ในวัยที่ฟันยังเจริญเติบโต โดยปกติแล้วเมื่อผู้ปกครองพาลูกไปหาทันตแพทย์ แต่เราเล็งเห็นว่าการใช้กระดาษทำให้สิ้นเปลือง รวมถึงความสะดวกในการจดบันทึกในยุคปัจจุบันนี้ก็ยากมากขึ้น จึงเลือกทำเป็นเว็บไซต์ที่ครอบคลุมทุกเรื่องเกี่ยวกับสุขภาพฟันและช่องปาก เพื่อให้ตอบโจทย์ยุคสมัยที่เปลี่ยนไปมากที่สุด`

  return (
    <IntroContainer>
      <Title>SMILEBLOOM</Title>
      <Subtitle>A BRIGHT SMILE BEGINS WITH HEALTHY TEETH</Subtitle>
      
      <Section>
        <SectionTitle>WHAT WE GOT ?</SectionTitle>
        <SectionText>{whatWeGotText}</SectionText>
      </Section>
      
      <Section>
        <SectionTitle>STORY OF SMILEBLOOM</SectionTitle>
        <SectionText>{storyText}</SectionText>
      </Section>
      
      <CloseButton onClick={onClose} variant="contained">
        เข้าสู่เว็บไซต์
      </CloseButton>
    </IntroContainer>
  )
}

export default Intro
