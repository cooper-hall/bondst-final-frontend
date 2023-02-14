import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'

const LogOut = ({user, setUser}) => {

  const navigate= useNavigate()
  
  const logOut = () => {
    Cookies.remove('token')
    setUser(null)
    navigate('/')
  }
  return(
    <div className="logout">
      <div className="logout-div">
        <img className="logout-logo" src="https://cdn.discordapp.com/attachments/1075090123001184257/1075091898487804025/bondst-low-resolution-logo-color-on-transparent-background.png"/>
        <button className="logout-btn" onClick={logOut} >Log Out</button>
      </div>
    </div>
  )

}

export default LogOut