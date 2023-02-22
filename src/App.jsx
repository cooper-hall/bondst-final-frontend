import { useState, useRef } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import MainPage from './components/MainPage'


function App() {

  const [user, setUser] = useState(null) 
  const form = useRef()

  return (

    <div className="main-page-container">
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} form={form}/>} />
        {/* <Route path="/admin" element={<Admin/>} */}
        <Route path="/mainpage" element={<MainPage user={user} setUser={setUser}/>} />
      </Routes>
    </div>
  )
}

export default App
