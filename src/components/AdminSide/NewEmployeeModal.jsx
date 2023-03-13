import {useEffect, useState} from 'react'

const NewEmployeeModal = ({setShowModal}) => {

  const [lastName, setLastName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
 
    const newEmployee = {
            first_name: firstName,
            last_name: lastName,
            user_name: user_name,
            email: email,
            password: password,
            address: address,
            phone_number: phone
        }
    
    const postEmployee = async () => {
            let req = await fetch('http://localhost:3000/employees', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newEmployee),
            })
        }
        postEmployee()
        setShowModal(false)
    }

  return (
    <div className="alc-lookup-container">
      <div className="alc-lookup-content">
        <div className="">
            <h2>New Employee:</h2>
            <form onSubmit={(e) => { handleSubmit(e) }}>
               <input className="" onChange={(e) => { setFirstName(e.target.value) }} type="text" placeholder="FIRST NAME" /><br />
               <input className="" onChange={(e) => { setLastName(e.target.value) }} type="text" placeholder="LAST NAME" /><br />
               <input className="" onChange={(e) => { setUserName(e.target.value) }} type="text" placeholder="USERNAME" /><br />
               <input className="" onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="EMAIL" /><br />
               <input className="" onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="PASSWORD" /><br />
               <input className="" onChange={(e) => { setPhone(e.target.value) }} type="tel" placeholder="tel: 000-000-0000" /><br />
               <input className="" onChange={(e) => { setAddress(e.target.value) }} type="text" placeholder='Address' /><br />
               <input className="" type="submit" />
            </form>
        </div>
      </div>
    </div>
  )

}
export default NewEmployeeModal