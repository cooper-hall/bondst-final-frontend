import {useState, useEffect} from 'react'
import AdminHeader from '../AdminSide/AdminHeader'

const AdminEmployees = () => {
  return(
     <div className="whole-page">
      <div className="header">
        <AdminHeader />
      </div>
      <div>Employees</div>
    </div>
  )

}
export default AdminEmployees