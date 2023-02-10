import {useState} from 'react'
import AlcTypes from "./AlcTypes"
import Cocktails from "./Cocktails"
import PaymentOptions from "./PaymentOptions"


const ItemsGrid = ({receiptItemsList, setReceiptItemsList, total, setTotal, addToTotal, updateTicketList, brands, setBrands, updateTicketListCocktail}) => {

  
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
        < AlcTypes updateTicketList={updateTicketList} addToTotal={addToTotal} brands={brands} setBrands={setBrands}/>
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
      < Cocktails addToTotal={addToTotal}  updateTicketListCocktail={updateTicketListCocktail} total={total}/>
      < PaymentOptions receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} setTotal={setTotal} total={total} brands={brands} setBrands={setBrands}/>
    </div>
  )
}

export default ItemsGrid