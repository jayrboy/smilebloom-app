import './Dashboard.css'
import { DashboardHeader } from './HeaderSection'
import MobileAppBar from '../layout/MobileAppBar'

const Dashboard = () => {
  // Calculate age (example: 6 years, 6 months, 27 days)
  const age = {
    years: 6,
    months: 6,
    days: 27
  }

  return (
    <div className="dashboard-container">
      {/* Dotted border top */}
      <div className="dotted-border dotted-border-top"></div>
      
      {/* Dotted border bottom */}
      <div className="dotted-border dotted-border-bottom"></div>

      <DashboardHeader age={age} />

      {/* Main Content Area */}
      <div className="content-block">
        <h2 className="content-title">Smile fact</h2>
        {/* Content area - can be filled later */}
      </div>

      <MobileAppBar />
    </div>
  )
}

export default Dashboard