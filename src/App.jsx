import { useState, useRef } from 'react'
import { Routes, Route} from "react-router-dom"
import './App.css'
import Login from './components/Login'
import MainPage from './components/MainPage'
import AdminMain from './components/AdminSide/AdminMain'
import AdminInventory from './components/AdminSide/AdminInventory'
import AdminEmployees from './components/AdminSide/AdminEmployees'
import CompanyTrends from './components/AdminSide/CompanyTrends'


function App() {

  const [user, setUser] = useState(null) 
  const form = useRef()

  return (

    <div className="main-page-container">
      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} form={form}/>} />
        <Route path="/mainpage" element={<MainPage user={user} setUser={setUser}/>} />
        <Route path="/admin" element={<AdminMain/>} />
          
          <Route path="/inventory" element={<AdminInventory/>} />
          <Route path="/employees" element={<AdminEmployees/>} />
          <Route path="/trends" element={<CompanyTrends/>} />
      </Routes>
   </div>
  )
}

export default App
