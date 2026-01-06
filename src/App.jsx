import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ChildName from './components/ChildName'
import Birthday from './components/Birthday'
import Dashboard from './components/Dashboard'
import Daily from './components/Daily'
import Favorites from './components/Favorites'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/childname" element={<ChildName />} />
      <Route path="/birthday" element={<Birthday />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/daily" element={<Daily />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  )
}

export default App
