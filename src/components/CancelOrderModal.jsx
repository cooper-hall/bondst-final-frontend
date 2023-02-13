
const CancelOrderModal = ({setReceiptItemsList, setTotal, setShowCancelOrderModal}) =>{

  const handleCancel = () => {
    setReceiptItemsList([])
    setTotal(0)
    setShowCancelOrderModal(false)
    console.log("transaction cancelled")
  }

  const deny = () => {
    setShowCancelOrderModal(false)
  }


  return(
    <div className="cancel-order-container">
      <div className="cancel-order-content">
        <h1 className="cancel-header">Cancel Order?</h1>
        <div className="cancel-opts">
          <h3 className="confirm-cancel" onClick={handleCancel}>Yes</h3>
          <h3 className="deny-cancel"onClick={deny}>No</h3>
        </div>
      </div>
    </div>
  )
}

export default CancelOrderModal