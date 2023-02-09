import {useEffect, useState} from 'react'


const Cocktails = ({receiptItemsList, setReceiptItemsList, addToTotal, updateTicketList}) => {
  

  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:4000/cocktails')
      let res = await req.json()
      setCocktails(res)
    }
    request()
  }, [])

  const leDrink = {
    ticket_id : self.ticket_id,
    name: self.name,
    price: self.price,
  }
  
  const addCocktailToOrder = (cocktail) => {
    console.log(cocktail)
    updateTicketList(cocktail)
    addToTotal(cocktail.price)
    // createNewItem(leDrink)
 }

  const createNewItem = async() => {
    let req = await fetch('http://localhost:4000/create_receipt_item', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        // 'ticket_id': ticket_id,
        // 'name': name,
        // 'price': price
        // quantity: quantity,
      })
    })
    let res = await req.json()
    if (req.ok){
      console.log("new receipt-item created") 
  } else{
    console.log("did not work")
  }

}


  return (
  
      <div className="all-cocktails-container">
        {
          cocktails.map((cocktail)=> {
            const divcolor = cocktail.drinkType === "Classic" ? "#cccccc" : cocktail.drinkType === "Special" ? "#8F00FF" : cocktail.drinkType === "Other" ? "#ffff00": "#fff";
            return (
              <div className="all-cocktails" 
                  onClick={()=> {createNewItem && addCocktailToOrder(cocktail)}}
                  style={{backgroundColor: divcolor}}
              >
                {cocktail.name} 
              </div>
            )
          })
        }
      </div>
   
  )
}

export default Cocktails