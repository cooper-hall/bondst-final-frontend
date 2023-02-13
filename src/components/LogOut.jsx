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
      <div className="logout-btn">
      <button onClick={logOut} >Log Out</button>
      </div>
    </div>
  )

}

export default LogOut