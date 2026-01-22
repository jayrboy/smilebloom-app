import { useMemo } from 'react'
import { DashboardHeader } from '../components/HeaderSection'
import { getCurrentUser } from '../utils/localStorage'
import DashboardLayout, {
  DashboardContentBlock,
  DashboardSectionTitle,
} from '../layout/DashboardLayout'

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
  const user = useMemo(() => getCurrentUser(), [])
  const age = useMemo(() => calculateAge(user?.birthday), [user?.birthday])

  return (
    <DashboardLayout header={<DashboardHeader age={age} userName={user?.name} />}>
      <DashboardContentBlock>
        <DashboardSectionTitle>Smile fact</DashboardSectionTitle>
      </DashboardContentBlock>
    </DashboardLayout>
  )
}

export default Dashboard
