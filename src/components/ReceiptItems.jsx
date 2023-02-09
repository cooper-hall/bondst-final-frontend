import {useState} from 'react'
import LogOut from "./LogOut"


const ReceiptItems = ({receiptItemsList, setReceiptItemsList, setTotal, total, user, setUser}) => {

  const subtractFromTotal = (price) => {
    setTotal((total) => total - price)
  }

  const handleVoid = (receiptItem) => {
    setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id})]) 
    subtractFromTotal(receiptItem.price) 
    console.log("this item has been voided")
  }

  const addQuantity = (receiptItem) => {
    //  setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id === receiptItem.id})])
     console.log(receiptItem)
    //first need to select an item
    // grab that items price
    // then multiply that by the clicked quantity 
    // setTotal((total)=> total )
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
                <p onClick ={()=> {addQuantity(item)}}> + </p>
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