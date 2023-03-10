import {useState, useEffect} from 'react'
import AdminHeader from '../AdminSide/AdminHeader'
import NewEmployeeModal from '../AdminSide/NewEmployeeModal'

const AdminEmployees = () => {

  const [employees, setEmployees] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:4000/employees")
      let res = await req.json()
      setEmployees(res)
    }
    request()
  }, [])

  const onHandle = () => {
    setShowModal(true)
  }

  return(
     <div className="whole-page">
      <div className="header">
        <AdminHeader />
      </div>
      <div className="employee-container">
        <div className="new-employee" onClick={onHandle}> +new employee </div>
        <div className="employee-list"> 
          {employees.map((employee)=>{
            return(
              <div className="indv-employee">{employee.username}</div>
            )
          })}
        </div>
      </div>
      {showModal && <NewEmployeeModal setShowModal={setShowModal}/>}
    </div>
  )

}
export default AdminEmployees