import { Link, useNavigate } from "react-router-dom"


const AdminHeader = () => {
  const navigate = useNavigate()
  
  const logOut = () => {
    // Cookies.remove('token')
    // setUser(null)
    navigate('/')
  }

   return (
        <div className="header">
            <div className="logo-title">
                <Link to="/admin" id="logo">
                    <img src="https://cdn.discordapp.com/attachments/1075090123001184257/1075091898487804025/bondst-low-resolution-logo-color-on-transparent-background.png" alt="Our Sick ASS LOGO" className="logo-image"/>
                </Link>
            </div>
            <div>            
            </div>
            {/* {checkLogin.loggedIn ?  */}
                <div className="link-container">
                    <Link to="/inventory" className="link-text" id="profile-btn">Inventory</Link>
                    <Link to="/employees" className="link-text" id="profile-btn">Employees</Link>
                    <Link to="/trends" className="link-text" id="profile-btn">Trends</Link>
                    <div className="link-text" id="logout-btn"onClick={logOut}>Logout</div>
                </div> 
            {/* } */}
            
        </div>
    )
}

export default AdminHeader