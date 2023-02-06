import {useState} from 'react'


const ReceiptItems = ({receiptItemsList, setReceiptItemsList, selectedItem, setSelectedItem, setTotal, total}) => {


  const clearTicket=()=>{
    setTotal(0)
  }

  const clearTotal=()=>{
    setReceiptItemsList()
  }

  // const handleVoid = (receiptItem) => {
  //   // let selectedItem = ([...receiptItemsList.filter()])
  //   setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id })])
  //   setTotal([...receiptItemsList.filter((item)=> {return item.price !== receiptItem.price})])
  //   console.log("this item has been voided")
  // }
    
  const createNewTicket = async() => {
    let req = await fetch('http://localhost:4000/ticket', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'sum': total,
        'active': 1,
        'receipt_items': receiptItemsList
      })
    })
    let res = await req.json()
    if (req.ok){
      console.log("new ticket created")
      clearTicket()
      clearTotal()
    }
  }

    return(
      <div className="parent-receipt-item-container">
        <div className="new-ticket" onClick= {createNewTicket}>New Ticket</div>
      <div className="receipt-item-container">
      {/* <ul className="receipt-item-list" >
        {
          receiptItemsList.map((item)=> {
            return(
              <>
              <li className="receipt-items-listitem">
                <p>quantity</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p onClick= {() => {handleVoid(item)}}> X </p>
              </li> 
              <br/></>
            )
          })
        }
      </ul> */}
      </div>
      <div className="bill-total-div">Bill Total $ {total} </div>
    </div>
  )
  
}

export default ReceiptItems