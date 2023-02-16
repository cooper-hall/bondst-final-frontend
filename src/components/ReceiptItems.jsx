
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
              <div className="receipt-items-listitem">
                <div className="group1">
                  <p onClick ={()=> {addQuantAndOz(item)}} className="add-quant"> + </p>
                  <p style={{fontSize:"1.5em"}}>{item.quantity}</p>
                  <p onClick ={()=> {subtractQuantAndOz(item)}} className="sub-quant"> - </p>
                </div>
                <div className="group2">            
                  <p style={{fontSize:"1.5em", textAlign: "center"}}>{item.name}</p>
                </div>
                <div className="group3">
                  <p style={{fontSize:"1.1em"}}>$ {item.price}</p>
                </div>  
                <div className="group1">
                  <p onClick= {() => {handleVoid(item)}}  className="void-item" style={{fontSize:"1.4em"}}> X </p> 
                </div>   
              </div> 
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

