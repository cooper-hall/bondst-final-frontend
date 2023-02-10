
const PaymentOptions = ({receiptItemsList, setReceiptItemsList, setTotal, total, bottle, brands, setBrands}) => {

  const clearTicket=()=>{
    setTotal(0)
  }

  const clearTotal=()=>{
    setReceiptItemsList([])
  }

const updateBottle = async(receiptItem) => {
  if (receiptItem.bottle_id > 0) {
  let req = await fetch (`http://localhost:4000/update_bottle/${receiptItem.bottle_id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      ounces: receiptItem.ounces
    })
  })
 let res = await req.json()
}}

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
      receiptItemsList.map(async (receiptItem) => {
        await updateBottle(receiptItem)
      })

    }  
    console.log("you have completed the transaction")
  }

const handleCancel = () => {
    setReceiptItemsList([])
    setTotal(0)
    console.log("transaction cancelled")
  }
  
  return(
    <div className="payment-container">
      <div className="pay-content" onClick={()=>{handlePay()}}>PAY</div>
      <div className="trans-cancel-content" onClick={()=>{handleCancel()}}>CANCEL</div>
    </div>
  )
}

export default PaymentOptions