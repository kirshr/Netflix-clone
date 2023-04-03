import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Netflix from './pages/netflix/Netflix'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/" element={<Netflix/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
