import './Dashboard.css'
import { Link, useLocation } from 'react-router-dom'

const Favorites = () => {
  const location = useLocation()

  return (
    <div className="dashboard-container">
      {/* Dotted border top */}
      <div className="dotted-border dotted-border-top"></div>
      
      {/* Dotted border bottom */}
      <div className="dotted-border dotted-border-bottom"></div>

      {/* Header Section */}
      <div className="header-block">
        <h1 className="main-title">SMILEBLOOM</h1>
        
        <div className="welcome-section">
          <div className="welcome-text">
            <p className="welcome-line">Welcome!</p>
            <p className="welcome-line">น้อง...และผู้ ปกครอง</p>
          </div>
          
          <div className="header-icons">
            <svg className="book-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="2" fill="none"/>
              <path d="M8 7h.01M8 11h.01M8 15h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 7h.01M12 11h.01M12 15h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <path d="M10 4.5C10 4.5 10.5 5 12 5c1.5 0 2-0.5 2-0.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
            
            <svg className="tooth-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C10 2 8 4 8 6c0 2 1 3 2 4 1 1 2 2 2 4 0 2-1 4-2 4s-2-2-2-4" stroke="#1a4d4d" strokeWidth="2" fill="none" opacity="0.7"/>
              <path d="M12 2c2 0 4 2 4 4 0 2-1 3-2 4-1 1-2 2-2 4 0 2 1 4 2 4s2-2 2-4" stroke="#1a4d4d" strokeWidth="2" fill="none" opacity="0.7"/>
              <path d="M12 1.5C12 1.5 10.5 0 8.5 0c-1.5 0-2 1-2 1.5" stroke="#1a4d4d" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round"/>
              <path d="M12 1.5C12 1.5 13.5 0 15.5 0c1.5 0 2 1 2 1.5" stroke="#1a4d4d" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        
        <p className="thank-you-text">ขอบคุณที่เลือก smilebloom</p>
      </div>

      {/* Main Content Area */}
      <div className="content-block">
        <h2 className="content-title">Favorites</h2>
        {/* Content area - can be filled later */}
      </div>

      {/* Navigation Bar */}
      <div className="nav-bar">
        <Link to="/dashboard" className={`nav-button ${location.pathname === '/dashboard' ? 'nav-button-active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill={location.pathname === '/dashboard' ? 'white' : 'none'} stroke="white" strokeWidth="2"/>
            <polyline points="9 22 9 12 15 12 15 22" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </Link>
        
        <Link to="/daily" className={`nav-button ${location.pathname === '/daily' ? 'nav-button-active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="white" strokeWidth="2" fill="none"/>
            <path d="M8 7h.01M8 11h.01M8 15h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12 7h.01M12 11h.01M12 15h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 4.5C10 4.5 10.5 5 12 5c1.5 0 2-0.5 2-0.5" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        </Link>
        
        <Link to="/favorites" className={`nav-button ${location.pathname === '/favorites' ? 'nav-button-active' : ''}`}>
          <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
        </Link>
      </div>
    </div>
  )
}
export default Favorites