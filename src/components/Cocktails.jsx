import {useEffect, useState} from 'react'

const Cocktails = ({addToTotal, total, updateTicketListCocktail}) => {
  
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
    console.log(cocktail)
    updateTicketListCocktail(cocktail)
    addToTotal(cocktail.price)
    console.log(total)
 }

  return (
  
      <div className="all-cocktails-container">
        {
          cocktails.map((cocktail)=> {
            const divcolor = cocktail.drinkType === "Classic" ? "#6D6A75" : cocktail.drinkType === "Special" ? "#bfd7b5" : cocktail.drinkType === "Other" ? "#BFD7EA": "#fff";
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