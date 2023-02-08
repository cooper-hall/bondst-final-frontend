import { useState, useRef } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import MainPage from './components/MainPage'

function App() {

  const [user, setUser] = useState(null) //might need to put this in the app.jsx to send to mainpage as well
  const form = useRef()

  return (

    <div className="main-page-container">
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} form={form}/>} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
