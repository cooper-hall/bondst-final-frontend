import {useState} from 'react'
import LogOut from "./LogOut"


const ReceiptItems = ({receiptItemsList, setReceiptItemsList, setTotal, total, user, setUser}) => {

  const [quantity, setQuantity] = useState(1)

  const subtractFromTotal = (price) => {
    setTotal((total) => total - price)
  }

  const handleVoid = (receiptItem) => {
    setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id})]) 
    subtractFromTotal(receiptItem.price)
    // decreaseQuantity(receiptItem)
    // setQuantity(1)
    // if receiptItem is Voided then subract all of it's quantities and
    console.log("this item has been voided")
  }

  const addQuantity = (item) => {
    // setQuantity(quantity + 1)
    setTotal((total) => total + item.price)
    console.log(total)
  }
  
  const decreaseQuantity = (item) => {
    // setQuantity(quantity - 1)
    total - item.price > 0 ? setTotal((total) => total - item.price) : handleVoid(item)
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
                <p onClick ={()=> {addQuantity(item)}} > + </p>
                <p onClick ={()=> {decreaseQuantity(item)}} > - </p>
                <p> {quantity} </p>
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