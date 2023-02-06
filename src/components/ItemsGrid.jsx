import AlcTypes from "./AlcTypes"
import Cocktails from "./Cocktails"
import PaymentOptions from "./PaymentOptions"
import Quantities from "./Quantities"


const ItemsGrid = ({receiptItemsList, setReceiptItemsList, selectedItem, setSelectedItem, total, setTotal, addToTotal}) => {

  const categories = ["Gin", "Whiskey", "Vodka"]

  const grandTotal = () => {
    let total = 0
    receiptItemList.map(item => total+= item.price)
        setTotal(total)
    }


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
        < AlcTypes />
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
      < Cocktails receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} selectedItem={selectedItem} setSelectedItem={setSelectedItem} addToTotal={addToTotal}/>
      < PaymentOptions receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} setTotal={setTotal}/>
      <div className="quantity-bar">QUANTITY</div>
      < Quantities />
    </div>
  )
}

export default ItemsGrid