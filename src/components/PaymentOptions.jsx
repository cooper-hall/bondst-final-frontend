

const PaymentOptions = ({receiptItemsList, setReceiptItemsList, setTotal, total}) => {

  const clearTicket=()=>{
    setTotal(0)
  }

  const clearTotal=()=>{
    setReceiptItemsList([])
  }


const handlePay = async() => {
    let req = await fetch('http://localhost:4000/ticket', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'sum': total,
        'items': receiptItemsList
      })
    })
    let res = await req.json()
    if (req.ok){
      clearTicket()
      clearTotal()
    }  
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
      <div className="trans-cancel-content" onClick={()=>{handleCancel()}}>CANCEL</div>
    </div>
  )
}

export default PaymentOptions