import {useState} from 'react'
import LogOut from "./LogOut"


const ReceiptItems = ({receiptItemsList, setReceiptItemsList, setTotal, total, user, setUser}) => {

  const handleVoid = (receiptItem) => {
    // let selectedItem = ([...receiptItemsList.filter()])
    setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id })])
    // setTotal([...receiptItemsList.filter((item)=> {return item.price !== receiptItem.price})])
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
              <li className="receipt-items-listitem">
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