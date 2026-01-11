import { EmailIcon, PhoneIcon } from './Icons'

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-item">
        <EmailIcon />
        <span>Suchanathorn@gmail.com</span>
      </div>
      <div className="contact-item">
        <PhoneIcon />
        <span>064-291-9455</span>
      </div>
    </div>
  )
}

export default ContactInfo
