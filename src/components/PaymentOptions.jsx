

const PaymentOptions = ({receiptItemsList, setReceiptItemsList, setTotal}) => {

  // create a click event for each of these!!!
const handlePay = () => {
    //this will be a patch to set the receipt from active to inactive
    setReceiptItemsList([])
    setTotal(0)
    console.log("you have completed the transaction")
  }
const handleVoid = (receiptItem) => {
    setReceiptItemsList([...receiptItemsList.filter((item) => { return item.id !== receiptItem.id })])
    console.log("this item has been voided")
  }
const handleCancel = () => {
    setReceiptItemsList([])
    setTotal(0)
    console.log("transaction cancelled")
  }
  
  return(
    <div className="payment-container">
      <div className="pay-content" onClick={()=>{handlePay()}}>PAY</div>
      <div className="void-content" onClick={()=>{handleVoid()}}>VOID</div>
      <div className="trans-cancel-content" onClick={()=>{handleCancel()}}>TRANS CANCEL</div>
    </div>
  )
}

export default PaymentOptions