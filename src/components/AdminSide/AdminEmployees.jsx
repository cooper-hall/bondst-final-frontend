import {useState, useEffect} from 'react'
import AdminHeader from '../AdminSide/AdminHeader'

const AdminEmployees = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:4000/employees")
      let res = await req.json()
      setEmployees(res)
    }
    request()
  }, [])


  return(
     <div className="whole-page">
      <div className="header">
        <AdminHeader />
      </div>
      <div className="employee-container">
        <div className="new-employee"> +new employee</div>
        <div className="employee-list"> 
          {employees.map((employee)=>{
            return(
              <div className="indv-employee">{employee.username}</div>
            )
          })}
        </div>
      </div>
    </div>
  )

}
export default AdminEmployees