import AlcTypes from "./AlcTypes"
import Cocktails from "./Cocktails"
import PaymentOptions from "./PaymentOptions"
import Quantities from "./Quantities"


const ItemsGrid = ({receiptItemsList, setReceiptItemsList, total, setTotal, addToTotal, updateTicketList}) => {

  const categories = ["Gin", "Whiskey", "Vodka"]

  return (
    <div className="items-container">
      <div className="tryout">
        {
          categories.map((category)=> {
            const divcolor = category === "Gin" ? "#67a9c5" : category === "Whiskey" ? "#da9930" : category === "Vodka" ? "#aed063": "#fff";
            return(
              <div className="alc-category"
                  style={{backgroundColor: divcolor}}
              >{category}</div>
            )
          })
        }
        </div>
        < AlcTypes updateTicketList={updateTicketList} addToTotal={addToTotal}/>
        <div className="tryout">
        {
          categories.map((category)=> {
            const divcolor = category === "Gin" ? "#67a9c5" : category === "Whiskey" ? "#da9930" : category === "Vodka" ? "#aed063": "#fff";
            return(
              <div className="alc-category"
                  style={{backgroundColor: divcolor}}
              >{category} Lookup:</div>
            )
          })
        }
      </div>
      < Cocktails receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} addToTotal={addToTotal} updateTicketList={updateTicketList}/>
      < PaymentOptions receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} setTotal={setTotal} total={total}/>
      <div className="quantity-bar">QUANTITY</div>
      < Quantities />
    </div>
  )
}

export default ItemsGrid