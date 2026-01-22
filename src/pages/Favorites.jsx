import { useMemo, useState, useEffect } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { DashboardHeader } from '../components/HeaderSection'
import DashboardLayout, {
  DashboardContentBlock,
  DashboardSectionTitle,
} from '../layout/DashboardLayout'
import { getCurrentUser } from '../utils/localStorage'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { GiTooth } from 'react-icons/gi'

const FavoritesList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginTop: '20px',
})

const FavoriteCard = styled(Box)({
  backgroundColor: '#f5f5dc',
  borderRadius: '15px',
  padding: '15px 20px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  '@media (max-width: 480px)': {
    padding: '12px 15px',
    gap: '12px',
  },
})

const IconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '40px',
  width: '40px',
  height: '40px',
  '@media (max-width: 480px)': {
    minWidth: '35px',
    width: '35px',
    height: '35px',
  },
})

const CardContent = styled(Box)({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
})

const CardTitle = styled(Typography)({
  fontSize: '1rem',
  color: '#1a4d4d',
  fontWeight: 600,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  '@media (max-width: 480px)': {
    fontSize: '0.9rem',
  },
})

const CardSubtitle = styled(Typography)({
  fontSize: '0.85rem',
  color: '#1a4d4d',
  opacity: 0.7,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  '@media (max-width: 480px)': {
    fontSize: '0.75rem',
  },
})

const EmptyState = styled(Box)({
  textAlign: 'center',
  padding: '40px 20px',
  color: 'white',
})

const EmptyStateText = styled(Typography)({
  fontSize: '1rem',
  color: 'white',
  opacity: 0.8,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  marginTop: '10px',
})

const AppointmentCard = styled(Box)({
  backgroundColor: '#1a4d4d',
  borderRadius: '20px',
  padding: '20px',
  marginTop: '15px',
  textAlign: 'center',
  '@media (max-width: 480px)': {
    padding: '15px',
  },
})

const AppointmentTitle = styled(Typography)({
  fontSize: '1.1rem',
  color: 'white',
  fontWeight: 400,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  marginBottom: '10px',
  '@media (max-width: 480px)': {
    fontSize: '1rem',
  },
})

const AppointmentSubtitle = styled(Typography)({
  fontSize: '0.95rem',
  color: 'white',
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  marginBottom: '8px',
  '@media (max-width: 480px)': {
    fontSize: '0.85rem',
  },
})

const AppointmentDays = styled(Typography)({
  fontSize: '1.3rem',
  color: 'white',
  fontWeight: 600,
  fontFamily: "'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive",
  marginTop: '10px',
  '@media (max-width: 480px)': {
    fontSize: '1.1rem',
  },
})

const Favorites = () => {
  const user = useMemo(() => getCurrentUser(), [])
  const [favorites, setFavorites] = useState([])
  const [nextAppointment, setNextAppointment] = useState(null)

  useEffect(() => {
    const loadData = () => {
      // Load favorites from localStorage
      const savedFavorites = localStorage.getItem('favorites')
      if (savedFavorites) {
        try {
          const parsed = JSON.parse(savedFavorites)
          setFavorites(Array.isArray(parsed) ? parsed : [])
        } catch (e) {
          console.error('Error loading favorites:', e)
          setFavorites([])
        }
      } else {
        // Initialize with sample data if no favorites exist
        const sampleFavorites = [
          {
            id: '1',
            type: 'location',
            name: 'คลินิกทันตกรรม',
            address: '123 ถนนสุขุมวิท กรุงเทพฯ',
          },
          {
            id: '2',
            type: 'dentist',
            name: 'ทพ.สมชาย ใจดี',
            clinic: 'คลินิกทันตกรรม',
          },
        ]
        setFavorites(sampleFavorites)
        localStorage.setItem('favorites', JSON.stringify(sampleFavorites))
      }

      // Load tooth data and find next appointments
      const savedToothData = localStorage.getItem('toothData')
      if (savedToothData) {
        try {
          const toothData = JSON.parse(savedToothData)
          const appointments = []

          // Extract appointment dates from tooth data
          Object.keys(toothData).forEach((toothId) => {
            const tooth = toothData[toothId]
            // Check for nextAppointmentDate field
            if (tooth.nextAppointmentDate) {
              appointments.push({
                date: tooth.nextAppointmentDate,
                toothId: toothId,
                toothName: tooth.toothNumber || toothId,
                notes: tooth.notes || '',
              })
            }
            // Also check eruptionDate + 6 months as potential next appointment
            else if (tooth.eruptionDate) {
              const eruptionDate = new Date(tooth.eruptionDate)
              const nextApptDate = new Date(eruptionDate)
              nextApptDate.setMonth(nextApptDate.getMonth() + 6)
              appointments.push({
                date: nextApptDate.toISOString().split('T')[0],
                toothId: toothId,
                toothName: tooth.toothNumber || toothId,
                notes: tooth.notes || '',
                isCalculated: true,
              })
            }
          })

          // Find all future appointments
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          const futureAppointments = appointments
            .map((apt) => ({
              ...apt,
              dateObj: new Date(apt.date),
            }))
            .filter((apt) => apt.dateObj >= today)
            .sort((a, b) => a.dateObj - b.dateObj)
            .map((apt) => {
              const daysDiff = Math.ceil((apt.dateObj - today) / (1000 * 60 * 60 * 24))
              return {
                ...apt,
                daysLeft: daysDiff,
              }
            })

          if (futureAppointments.length > 0) {
            // เก็บเฉพาะนัดที่ใกล้ที่สุด (รายการแรก)
            setNextAppointment(futureAppointments[0])
          } else {
            setNextAppointment(null)
          }
        } catch (e) {
          console.error('Error loading tooth data:', e)
          setNextAppointment(null)
        }
      } else {
        setNextAppointment(null)
      }
    }

    loadData()
  }, [])

  const _handleRemoveFavorite = (id) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== id)
    setFavorites(updatedFavorites)
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  const getIcon = (type) => {
    switch (type) {
      case 'location':
        return <HiLocationMarker style={{ color: '#1a4d4d', fontSize: '24px' }} />
      case 'dentist':
        return <GiTooth style={{ color: '#1a4d4d', fontSize: '24px' }} />
      default:
        return <AiFillHeart style={{ color: '#1a4d4d', fontSize: '24px' }} />
    }
  }

  return (
    <DashboardLayout header={<DashboardHeader userName={user?.name} />}>
      <DashboardContentBlock sx={{ marginBottom: { xs: '90px', sm: '100px', md: '100px' } }}>
        <DashboardSectionTitle>Favorites</DashboardSectionTitle>

        {favorites.length > 0 ? (
          <FavoritesList>
            {favorites.map((favorite) => (
              <FavoriteCard key={favorite.id}>
                <IconContainer>{getIcon(favorite.type)}</IconContainer>
                <CardContent>
                  <CardTitle>{favorite.name}</CardTitle>
                  {favorite.address && <CardSubtitle>{favorite.address}</CardSubtitle>}
                  {favorite.clinic && <CardSubtitle>{favorite.clinic}</CardSubtitle>}
                </CardContent>
                {/* <IconButton
                  onClick={() => handleRemoveFavorite(favorite.id)}
                  sx={{
                    color: '#1a4d4d',
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: 'rgba(26, 77, 77, 0.1)',
                    },
                  }}
                >
                  <AiFillHeart style={{ fontSize: '20px' }} />
                </IconButton> */}
              </FavoriteCard>
            ))}
          </FavoritesList>
        ) : (
          <EmptyState>
            <AiOutlineHeart style={{ fontSize: '48px', color: 'white', opacity: 0.5 }} />
            <EmptyStateText>
              ยังไม่มีรายการโปรด
              <br />
              เพิ่มรายการโปรดเพื่อดูที่นี่
            </EmptyStateText>
          </EmptyState>
        )}
      </DashboardContentBlock>

      {/* รายการนัดครั้งถัดไปจากข้อมูลฟัน ที่อยู่ใน localStorage: toothData */}
      {nextAppointment && (
        <DashboardContentBlock>
          <AppointmentCard>
            <AppointmentTitle>Dentist day</AppointmentTitle>
            <AppointmentSubtitle>นัดครั้งต่อไป :</AppointmentSubtitle>
            {nextAppointment.daysLeft > 0 ? (
              <AppointmentSubtitle>ใกล้เวลานัดแล้ว! อีก {nextAppointment.daysLeft} วัน</AppointmentSubtitle>
            ) : (
              <AppointmentSubtitle>วันนี้เป็นวันนัด!</AppointmentSubtitle>
            )}
            {nextAppointment.toothName && <AppointmentDays>ฟันซี่: {nextAppointment.toothName}</AppointmentDays>}
            <AppointmentSubtitle sx={{ marginTop: '10px', opacity: 0.9 }}>
              {new Date(nextAppointment.date).toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </AppointmentSubtitle>
            {nextAppointment.notes && (
              <AppointmentSubtitle sx={{ marginTop: '8px', opacity: 0.8, fontSize: '0.85rem' }}>
                หมายเหตุ: {nextAppointment.notes}
              </AppointmentSubtitle>
            )}
          </AppointmentCard>
        </DashboardContentBlock>
      )}
    </DashboardLayout>
  )
}

export default Favorites
