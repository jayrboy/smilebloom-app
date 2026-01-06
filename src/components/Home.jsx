import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      {/* Decorative dots - top left */}
      <div className="dots dots-top-left">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* Decorative dots - bottom right */}
      <div className="dots dots-bottom-right">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>

      {/* Curved background shapes */}
      <div className="curve-shape curve-1"></div>
      <div className="curve-shape curve-2"></div>

      {/* Main content */}
      <div className="home-content">
        <div className="title-section">
          <h2 className="welcome-text">WELCOME TO</h2>
          <div className="smilebloom-container">
            <h1 className="smilebloom-text">SMILEBLOOM</h1>
            <div className="logo-container">
              <svg className="logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,20 C30,20 15,35 15,55 C15,70 25,82 50,95 C75,82 85,70 85,55 C85,35 70,20 50,20 Z" fill="#1a4d4d"/>
                <circle cx="50" cy="50" r="18" fill="white"/>
                <circle cx="45" cy="48" r="2.5" fill="#1a4d4d"/>
                <circle cx="55" cy="48" r="2.5" fill="#1a4d4d"/>
                <path d="M42,55 Q50,62 58,55" stroke="#1a4d4d" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <circle cx="50" cy="62" r="3" fill="#1a4d4d"/>
              </svg>
            </div>
          </div>
        </div>

        <p className="description-text">
          เว็บไซต์ที่ช่วยบันทึกการเจริญเติบโตของฟันและสุขภาพฟัน เพื่อคุณแม่และคุณหนู
        </p>

        <Link to="/childname">
          <button className="start-button">START</button>
        </Link>
      </div>

      {/* Contact information */}
      <div className="contact-info">
        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" fill="none"/>
            <polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
          <span>Suchanathorn@gmail.com</span>
        </div>
        <div className="contact-item">
          <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="2" fill="none"/>
          </svg>
          <span>064-291-9455</span>
        </div>
      </div>
    </div>
  )
}

export default Home