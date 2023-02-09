import ItemsGrid from './ItemsGrid'
import ReceiptItems from './ReceiptItems'
import {useState} from 'react'

const MainPage = ({user, setUser}) => {

  const [receiptItemsList, setReceiptItemsList] = useState([])
  const [total, setTotal] = useState(0)
  
  
  const addToTotal = (price) => {
    console.log(price)
    console.log(total)
    setTotal((total) => total + price)
  }

  const updateTicketList= (drink) => {
   setReceiptItemsList(prevState=> [...prevState, drink])
  }

  return (

    <div className="main-page-container">
      <ReceiptItems receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal} user={user} setUser={setUser}/>  
      <ItemsGrid receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal} addToTotal={addToTotal} updateTicketList={updateTicketList}/>
    </div>
  )
}

export default MainPage