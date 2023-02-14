import { useState, useEffect } from 'react'
import {useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

function Login({user, setUser}) {
  
  const navigate = useNavigate()
  const [noUser, setNoUser] = useState("")
  const [currentPic, setCurrentPic] = useState(0)
  const images = ['https://bondstrestaurant.com/wp-content/uploads/2015/09/home-thum4.jpg', 'https://bondstrestaurant.com/wp-content/uploads/2015/09/home-thum3.jpg', 'https://bondstrestaurant.com/wp-content/uploads/2015/09/home-thum1.jpg', 'https://bondstrestaurant.com/wp-content/uploads/2015/09/home-thum2.jpg',]
  
  const styles = {
    backgroundImage: `url(${images[currentPic]})`,
    backgroundSize: 'cover'
  }

  const removeError = () => {
    setTimeout(() => {
      setNoUser("")
    },5000)
  }

  useEffect(()=> {
    const intervalPic = setInterval(() => {
      setCurrentPic ((currentPic + 1) % images.length)
    }, 8000)
    return () => clearInterval(intervalPic)
  }, [currentPic, images.length])


  useEffect(()=> {
    const loadUser = async() => {
      let req = await fetch('http://localhost:4000/which_employee', {
        headers:{Authorization: Cookies.get('token')}
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token')) loadUser()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // let formData = new FormData(form.current)
    let req = await fetch("http://localhost:4000/employee_login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value
      })
      })
    let res = await req.json()
    if (req.ok) {
      console.log ("Res", res)
      Cookies.set('token', res.token)
      setUser(res.user)
      console.log(res.employee.username)
      navigate('/mainpage')
    } else {
      console.log("login failed, bruh")
      setNoUser("Employee Not Found")
      removeError()
    }
  }


  return (
    <div className="Login">
        <div className="login-container">
          <div style={styles} className="login-content">
            <form onSubmit={handleSubmit} className="login-form">
              <div className="logo-holder">
                <img src="https://cdn.discordapp.com/attachments/1075090123001184257/1075091898487804025/bondst-low-resolution-logo-color-on-transparent-background.png" alt="bondst logo" className="bondst-logo"/>
              </div>
              <div className="form-holder">
                <h2 className="login-header">Employee Login:</h2>
                <input placeholder="Username..." type='text' name='username' className="login-inputs"/>
                <br/>
                <input placeholder="Password..." type='password' name='password' className="login-inputs"/>
                <div> {noUser}</div>
                <br/>
                <input type="submit" value="Login" className="login-btn"/>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Login

