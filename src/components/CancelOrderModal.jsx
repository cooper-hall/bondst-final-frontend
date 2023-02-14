import {useState} from 'react'

const CancelOrderModal = ({setReceiptItemsList, setTotal, setShowCancelOrderModal}) =>{

  const [completed, setCompleted] = useState("")

  const removeModal = () => {
    setTimeout(() => {
      setCompleted("")
      setShowCancelOrderModal(false)
    }, 2000)
  }

  const handleCancel = () => {
    setReceiptItemsList([])
    setTotal(0)
    setCompleted("Transaction Cancelled")
    // setShowCancelOrderModal(false)
    removeModal()
    console.log("transaction cancelled")
  }

  const deny = () => {
    setShowCancelOrderModal(false)
  }


  return(
    <div className="cancel-order-container">
      <div className="cancel-order-content">
        <h1 className="cancel-header">Cancel Order?</h1>
        <h2 style={{color: 'black', textAlign: 'center' }}>{completed}</h2>
        <div className="cancel-opts">
          <h3 className="confirm-cancel" onClick={handleCancel}>Yes</h3>
          <h3 className="deny-cancel"onClick={deny}>No</h3>
        </div>
      </div>
    </div>
  )
}

export default CancelOrderModal