import {useState} from 'react'
import AlcTypes from "./AlcTypes"
import Cocktails from "./Cocktails"
import PaymentOptions from "./PaymentOptions"
import LookUpCats from "./LookUpCats"


const ItemsGrid = ({receiptItemsList, setReceiptItemsList, total, setTotal, addToTotal, updateTicketList, brands, setBrands, updateTicketListCocktail}) => {
  
  const categories = ["Gin", "Whiskey", "Vodka"]

  return (
    <div className="items-container">
      <div className="parent-a">
        <div className="tryout">
        {
          categories.map((category)=> {
            const divcolor = category === "Gin" ? "#13203e" : category === "Whiskey" ? "#475971" : category === "Vodka" ? "#2a3c2b": "#fff";
            return(
              <div className="alc-category"
                  style={{backgroundColor: divcolor}}
              >{category}</div>
            )
          })
        }
         </div>
        < AlcTypes updateTicketList={updateTicketList} addToTotal={addToTotal} brands={brands} />
        < LookUpCats updateTicketList={updateTicketList} addToTotal={addToTotal}/>   
        < Cocktails addToTotal={addToTotal}  updateTicketListCocktail={updateTicketListCocktail} total={total}/>
        < PaymentOptions receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} setTotal={setTotal} total={total} brands={brands} setBrands={setBrands}/>
      </div>
    </div>
  )
}

export default ItemsGrid