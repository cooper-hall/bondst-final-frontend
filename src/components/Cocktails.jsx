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

//   const createNewItem = async() => {
//     let req = await fetch('http://localhost:4000/create_receipt_item', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({
//         // 'price': self.price,
//         // 'ounces': self.ounces,
//         // 'name': self.name,
//         // 'ticket_id': self.ticket_id
//       })
//     })
//     let res = await req.json()
//     if (req.ok){
//       console.log("new receipt-item created") 
//   } else{
//     console.log("did not work")
//   }

// }


  return (
  
      <div className="all-cocktails-container">
        {
          cocktails.map((cocktail)=> {
            const divcolor = cocktail.type === "Classic" ? "#cccccc" : cocktail.type === "Special" ? "#8F00FF" : cocktail.type === "Other" ? "#ffff00": "#fff";
            return (
              <div className="all-cocktails" 
                  onClick={()=> {addCocktailToOrder(cocktail)}}
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