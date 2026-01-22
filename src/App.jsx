import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/Form'
import Dashboard from './pages/Dashboard'
import Daily from './pages/Daily'
import Favorites from './pages/Favorites'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default App
