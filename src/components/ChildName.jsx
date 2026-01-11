import './ChildName.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DecorativeElements from './DecorativeElements'
import HeaderSection from './HeaderSection'
import ContactInfo from './ContactInfo'

const ChildName = () => {
  const [childName, setChildName] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (childName.trim()) {
      navigate('/birthday')
    }
  }

  return (
    <div className="childname-container">
      <DecorativeElements variant="form" />
      <HeaderSection />

      {/* Main content */}
      <div className="childname-content">
        <form onSubmit={handleSubmit} className="childname-form">
          <h2 className="instruction-text">Enter Your child name</h2>
          <p className="instruction-text-thai">กรุณากรอกชื่อลูกของคุณ</p>
          
          <input
            type="text"
            className="name-input"
            placeholder=""
            value={childName}
            onChange={(e) => setChildName(e.target.value)}
            required
          />
          
          <button type="submit" className="next-button">Next</button>
        </form>
      </div>

      <ContactInfo />
    </div>
  )
}

export default ChildName