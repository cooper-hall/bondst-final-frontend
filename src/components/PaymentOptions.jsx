import {useState} from 'react'
import CancelOrderModal from "./CancelOrderModal"
import ConfirmPay from "./ConfirmPay"


const PaymentOptions = ({receiptItemsList, setReceiptItemsList, setTotal, total}) => {

  const [showCancelOrderModal, setShowCancelOrderModal] = useState(false)
  const [showConfirmPay, setShowConfirmPay] = useState(false)

  const clearTicket=()=>{
    setTotal(0)
  }

  const clearTotal=()=>{
    setReceiptItemsList([])
  }

  const removeModal=() =>{
    setTimeout(()=> {
      setShowConfirmPay(false)
    }, 2000)
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
      setShowConfirmPay(true)
      removeModal()
    }  
    console.log("you have completed the transaction")
  }

const cancelModal = () => {
   setShowCancelOrderModal(true)
  }

  return(
    <div className="payment-container">
      <div className="pay-content" onClick={()=>{handlePay()}}>PAY</div>
      <div className="trans-cancel-content" onClick={()=>{cancelModal()}}>CANCEL</div>
      {showCancelOrderModal && <CancelOrderModal  setReceiptItemsList={setReceiptItemsList} setTotal={setTotal} setShowCancelOrderModal={setShowCancelOrderModal}/> }
      {showConfirmPay && <ConfirmPay/>}
    </div>
  )
}

export default PaymentOptions