import {useState} from 'react'
import LogOut from "./LogOut"


const ReceiptItems = ({receiptItemsList, setReceiptItemsList, setTotal, total, user, setUser}) => {

  const subtractFromTotal = (receiptItem) => {
    
  }

  const handleVoid = (receiptItem) => {
    setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id })])  
    console.log("this item has been voided")
  }

    return(
      <div className="parent-receipt-item-container">
        < LogOut user={user} setUser={setUser}/>
      <div className="receipt-item-container">
      <ul className="receipt-item-list" >
        {
          receiptItemsList && receiptItemsList.map((item)=> {
            return(
              <>
              <li className="receipt-items-listitem" key={item.toString()} value={item.toString()}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p onClick= {() => {handleVoid(item)}}> X </p>
              </li> 
              <br/></>
            )
          })
        }
      </ul>
      </div>
      <div className="bill-total-div">Bill Total $ {total} </div>
    </div>
  )
  
}

export default ReceiptItems