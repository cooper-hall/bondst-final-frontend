
import LogOut from "./LogOut"


const ReceiptItems = ({receiptItemsList, setReceiptItemsList, setTotal, total, user, setUser}) => {

  const subtractFromTotal = (price) => {
    setTotal((total) => total - price)
  }

  const handleVoid = (receiptItem) => {
    setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id})]) 
    subtractFromTotal(receiptItem.price * receiptItem.quantity)
    console.log("this item has been voided")
  }

 const addQuantity = (item) => {
    setReceiptItemsList(receiptItemsList.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        selectedItem.quantity += 1}
      return selectedItem}))
    setTotal((total) => total + item.price)
  }

  const addOunce = (item) => {
    setReceiptItemsList(receiptItemsList.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        selectedItem.ounces += 2}
      return selectedItem}))
  }
  
 const decreaseQuantity = (item) => {
    setReceiptItemsList(receiptItemsList.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        selectedItem.quantity -= 1}
      return selectedItem}))
    setTotal((total) => total - item.price)
    total - item.price <= 0 ? handleVoid(item) : ''
 }

 const decreaseOunce = (item) => {
    setReceiptItemsList(receiptItemsList.map((selectedItem) => {
      if (selectedItem.id === item.id) {
        selectedItem.ounces -= 2}
      return selectedItem}))
      item.ounces <= 0 ? handleVoid(item) : ''
  }

 const addQuantAndOz = (item) => {
  addQuantity(item)
  addOunce(item)
  console.log(item)
 }

 const subtractQuantAndOz = (item) => {
  decreaseQuantity(item)
  decreaseOunce(item)
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
                <p onClick ={()=> {addQuantAndOz(item)}} className="add-quant"> + </p>
                <p onClick ={()=> {subtractQuantAndOz(item)}} className="sub-quant"> - </p>
                <p>{item.quantity}</p>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p onClick= {() => {handleVoid(item)}} className="void-item"> X </p>
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

