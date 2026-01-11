import { 
  HiHome, 
  HiBookOpen, 
  HiOutlineHome,
  HiOutlineBookOpen,
} from 'react-icons/hi'
import { MdOutlineAlternateEmail, MdOutlinePhone } from "react-icons/md";
import { 
  GiTooth
} from 'react-icons/gi'
import { 
  AiFillHeart,
  AiOutlineHeart
} from 'react-icons/ai'

// Custom Logo Components (keeping SVG for custom design)
export const HomeIcon = ({ className = "logo", fill = "#1a4d4d" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,20 C30,20 15,35 15,55 C15,70 25,82 50,95 C75,82 85,70 85,55 C85,35 70,20 50,20 Z" fill={fill}/>
    <circle cx="50" cy="50" r="18" fill="white"/>
    <circle cx="45" cy="48" r="2.5" fill={fill}/>
    <circle cx="55" cy="48" r="2.5" fill={fill}/>
    <path d="M42,55 Q50,62 58,55" stroke={fill} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="62" r="3" fill={fill}/>
  </svg>
)

export const HeaderLogo = ({ className = "logo", fill = "#a8e6cf", variant = "default" }) => {
  if (variant === "birthday") {
    return (
      <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,20 C30,20 15,35 15,55 C15,70 25,82 50,95 C75,82 85,70 85,55 C85,35 70,20 50,20 Z" fill={fill}/>
        <circle cx="50" cy="50" r="15" fill="white"/>
        <path d="M45,50 L50,45 L55,50 M50,45 L50,55" stroke="#1a4d4d" strokeWidth="2" fill="none"/>
        <circle cx="50" cy="60" r="2" fill="#1a4d4d"/>
      </svg>
    )
  }
  
  return (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50,20 C30,20 15,35 15,55 C15,70 25,82 50,95 C75,82 85,70 85,55 C85,35 70,20 50,20 Z" fill={fill}/>
      <circle cx="50" cy="50" r="15" fill="white"/>
      <circle cx="45" cy="48" r="3" fill={fill}/>
      <circle cx="55" cy="48" r="3" fill={fill}/>
      <path d="M45,55 Q50,60 55,55" stroke={fill} strokeWidth="2" fill="none"/>
    </svg>
  )
}

// React Icons Components
export const BookIcon = ({ className = "book-icon" }) => (
  <HiBookOpen className={className} style={{ color: 'white', strokeWidth: 2 }} />
)

export const ToothIcon = ({ className = "tooth-icon" }) => (
  <GiTooth className={className} style={{ color: '#1a4d4d', opacity: 0.7 }} />
)

export const HomeNavIcon = ({ isActive = false, className = "nav-icon" }) => {
  const Icon = isActive ? HiHome : HiOutlineHome
  return (
    <Icon 
      className={className} 
      style={{ 
        color: isActive ? 'white' : '#6B9B9B',
        transition: 'color 0.3s ease'
      }} 
    />
  )
}

export const DailyNavIcon = ({ isActive = false, className = "nav-icon" }) => {
  const Icon = isActive ? HiBookOpen : HiOutlineBookOpen
  return (
    <Icon 
      className={className} 
      style={{ 
        color: isActive ? 'white' : '#6B9B9B',
        transition: 'color 0.3s ease'
      }} 
    />
  )
}

export const FavoritesNavIcon = ({ isActive = false, className = "nav-icon" }) => {
  const Icon = isActive ? AiFillHeart : AiOutlineHeart
  return (
    <Icon 
      className={className} 
      style={{ 
        color: isActive ? 'white' : '#6B9B9B',
        transition: 'color 0.3s ease'
      }} 
    />
  )
}

export const EmailIcon = ({ className = "contact-icon" }) => (
  <MdOutlineAlternateEmail className={className} style={{ color: 'white' }} />
)

export const PhoneIcon = ({ className = "contact-icon" }) => (
  <MdOutlinePhone className={className} style={{ color: 'white' }} />
)
