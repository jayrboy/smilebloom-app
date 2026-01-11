import './Home.css'
import { Link } from 'react-router-dom'
import DecorativeElements from './DecorativeElements'
import ContactInfo from './ContactInfo'
import { HomeIcon } from './Icons'

const Home = () => {
  return (
    <div className="home-container">
      <DecorativeElements variant="home" />

      {/* Main content */}
      <div className="home-content">
        <div className="title-section">
          <h2 className="welcome-text">WELCOME TO</h2>
          <div className="smilebloom-container">
            <h1 className="smilebloom-text">SMILEBLOOM</h1>
            <div className="logo-container">
              <HomeIcon />
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

      <ContactInfo />
    </div>
  )
}

export default Home