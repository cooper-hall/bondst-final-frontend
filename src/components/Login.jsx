import { useState, useRef, useEffect } from 'react'
import {useNavigate, Link } from "react-router-dom"
import Cookies from 'js-cookie'

function Login({user, setUser, form}) {
  
  const navigate = useNavigate()
  const [noUser, setNoUser] = useState("")

  const removeError = () => {
    setTimeout(() => {
      setNoUser("")
    },5000)
  }

  useEffect(()=> {
    const loadUser = async() => {
      let req = await fetch("http://localhost:4000/me", {
        headers:{Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData(form.current)
    let req = await fetch ("http://localhost:4000/employee_login",{
      method: "POST",
      body: formData
      })
    let res = await req.json()
    if (req.ok) {
      console.log ("Res", res)
      Cookies.set('token', res.token)
      setUser(res.user)
      navigate('/mainpage')
    } else {
      console.log("login failed, bruh")
      console.log("")
      setNoUser("Employee Not Found")
      removeError()
    }
  }


  return (
    <div className="Login">
      <h1>BONDST</h1>
      <div className="login-content">
      <form onSubmit={handleSubmit} ref={form} className="login-form">
        <h2>Employee Login:</h2>
        <input placeholder="Enter username..." type='username' name='username'/>
        <br/>
        <input placeholder="Enter password..."type='password' name='password'/>
        <div> {noUser}</div>
        <br/>
        <input type="submit" value="Login"/>
      </form>
      </div>
    </div>

  )
}

export default Login