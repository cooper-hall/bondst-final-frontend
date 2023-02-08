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
  
  const addCocktailToOrder = (cocktail) => {
    updateTicketList(cocktail)
    addToTotal(cocktail.price)
 }

  const createNewItem = async() => {
    let req = await fetch('http://localhost:4000/create_receipt_item', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: price,
        ounces: ounces,
        name: name,
        ticket_id: ticket_id
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