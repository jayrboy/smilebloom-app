import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ChildName from './components/ChildName'
import Birthday from './components/Birthday'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/childname" element={<ChildName />} />
      <Route path="/birthday" element={<Birthday />} />
    </Routes>
  )
}

export default App
