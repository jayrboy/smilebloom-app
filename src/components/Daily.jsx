import './Dashboard.css'
import { DashboardHeader } from './HeaderSection'
import MobileAppBar from '../layout/MobileAppBar'

const Daily = () => {
  return (
    <div className="dashboard-container">
      {/* Dotted border top */}
      <div className="dotted-border dotted-border-top"></div>
      
      {/* Dotted border bottom */}
      <div className="dotted-border dotted-border-bottom"></div>

      <DashboardHeader />

      {/* Main Content Area */}
      <div className="content-block">
        <h2 className="content-title">Daily Diary</h2>
        {/* Content area - can be filled later */}
      </div>

      <MobileAppBar />
    </div>
  )
}
export default Daily