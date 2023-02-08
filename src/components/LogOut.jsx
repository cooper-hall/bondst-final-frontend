import Cookies from 'js-cookie'

const LogOut = ({setUser}) => {

  const logOut = () => {
    Cookies.remove('token')
    setUser(null)
  }

}

export default LogOut