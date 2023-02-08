import ItemsGrid from './ItemsGrid'
import ReceiptItems from './ReceiptItems'
import {useState} from 'react'

const MainPage = ({}) => {

 const [receiptItemsList, setReceiptItemsList] = useState([])
  const [total, setTotal] = useState(0)
  const [currentTicket, setCurrentTicket] = useState([])
  
  const addToTotal = (price) => {
    console.log(price)
    console.log(total)
    setTotal((total) => total + price)
  }

  const updateTicketList= (cocktail) => {
   setReceiptItemsList(prevState=> [...prevState, cocktail])
  }

  return (

    <div className="main-page-container">
      <ReceiptItems receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal}/>  
      <ItemsGrid receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal} addToTotal={addToTotal} updateTicketList={updateTicketList}/>
    </div>
  )
}

export default MainPage