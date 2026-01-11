import './Birthday.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DecorativeElements from './DecorativeElements'
import HeaderSection from './HeaderSection'
import ContactInfo from './ContactInfo'

const Birthday = () => {
  const [birthday, setBirthday] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (birthday) {
      // Navigate to next page or save data
      console.log('Birthday:', birthday)
    }
  }

  return (
    <div className="birthday-container">
      <DecorativeElements variant="form" />
      <HeaderSection logoVariant="birthday" />

      {/* Main content */}
      <div className="birthday-content">
        <form onSubmit={handleSubmit} className="birthday-form">
          <p className="instruction-text-thai">กรุณากรอกวันเดือนปีเกิดลูกของคุณ</p>
          
          <input
            type="date"
            className="date-input"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
          
          <Link to="/dashboard">
            <button type="submit" className="next-button">Next</button>
          </Link>
        </form>
      </div>

      <ContactInfo />
    </div>
  )
}

export default Birthday