import { useState } from 'react'
import './App.css'
import ItemsGrid from './components/ItemsGrid'
import ReceiptItems from './components/ReceiptItems'


function App() {
  
  const [receiptItemsList, setReceiptItemsList] = useState([])
  const [total, setTotal] = useState(0)
  const [currentTicket, setCurrentTicket] = useState([])
  
  const addToTotal = (price) => {
    console.log(price)
    console.log(total)
    setTotal(total + price)
  }

  const updateTicketList= (cocktail) => {
    setReceiptItemsList(prevState=> [...prevState, cocktail])
  }

  return (

    <div className="main-page-container">
      <ReceiptItems receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal}/>  
      <ItemsGrid receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal} addToTotal={addToTotal}/>
    </div>
  )
}

export default App
