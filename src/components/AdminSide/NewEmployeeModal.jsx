import {useEffect, useState} from 'react'

const NewEmployeeModal = ({setShowModal}) => {

  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [admin, setAdmin] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
 
    const newEmployee = {
            username: userName,
            password: password,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            address: address,
            admin: admin
        }
    
    const postEmployee = async () => {
            let req = await fetch('http://localhost:4000/new_employee', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee),
            })
            let res = await req.json()
        }
        postEmployee()
        setShowModal(false)
    }

  return (
    <div className="alc-lookup-container">
      <div className="alc-lookup-content">
        <div className="new-employee-container">
            <h3 className="exit-button" onClick={()=> setShowModal(false)}>X</h3>
            <h2 className="" >New Employee:</h2>
            <form className="employee-form" onSubmit={(e) => { handleSubmit(e) }}>
               <input className="employee-input" onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder="FIRST NAME" />
               <input className="employee-input" onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="LAST NAME" />             
               <input className="employee-input" onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="USERNAME" />
               <input className="employee-input" onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="EMAIL" />
               <input className="employee-input" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="PASSWORD" />
               <input className="employee-input" onChange={(e) => { setPhone(e.target.value) }} type="tel" placeholder="tel: 000-000-0000" />
               <input className="employee-input" onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder='Address' />
               <div> Admin?
               <select className="employee-input" value={admin} onChange={e => setAdmin(e.target.value)}>
                  <option value="True">True</option>
                  <option value="False">False</option>
               </select>
               </div>
               <input className="" type="submit" />
            </form>
        </div>
      </div>
    </div>
  )

}
export default NewEmployeeModal