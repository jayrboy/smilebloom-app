import { HeaderLogo, BookIcon, ToothIcon } from './Icons'

const HeaderSection = ({ showAgeBubble = false, age = null, logoVariant = "default" }) => {
  return (
    <>
      <div className="header-section">
        <div className="header-logo">
          <HeaderLogo variant={logoVariant} />
        </div>
        <h1 className="brand-name">SMILEBLOOM</h1>
      </div>
      
      {showAgeBubble && age && (
        <div className="age-bubble">
          <p className="age-text">
            ปัจจุบัน น้องอายุ : {age.years}ปี...{age.months}เดือน...{age.days}วัน
          </p>
        </div>
      )}
    </>
  )
}

export const DashboardHeader = ({ age = null }) => {
  return (
    <div className="header-block">
      <h1 className="main-title">SMILEBLOOM</h1>
      
      <div className="welcome-section">
        <div className="welcome-text">
          <p className="welcome-line">Welcome!</p>
          <p className="welcome-line">น้อง...และผู้ ปกครอง</p>
        </div>
        
        <div className="header-icons">
          <BookIcon />
          <ToothIcon />
        </div>
      </div>
      
      <p className="thank-you-text">ขอบคุณที่เลือก smilebloom</p>
      
      {age && (
        <div className="age-bubble">
          <p className="age-text">
            ปัจจุบัน น้องอายุ : {age.years}ปี...{age.months}เดือน...{age.days}วัน
          </p>
        </div>
      )}
    </div>
  )
}

export default HeaderSection
