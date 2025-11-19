import './App.css'
import Dashboard from "./pages/Dashboard"
import { Routes, Route } from "react-router-dom"
import Modal from './pages/Modal'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/modal' element={<Modal />} />
      </Routes>
    </>
  )
}

export default App
