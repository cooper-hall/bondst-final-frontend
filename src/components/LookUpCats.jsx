import {useState, useEffect} from 'react'
import AlcTypeLookUp from './AlcTypeLookUp'

const LookUpCats = ({addToTotal, updateTicketList}) => {
  const [showAlcTypeLookUp, setShowAlcTypeLookUp] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState([])

  const categories = ["Gin", "Whiskey", "Vodka", "Tequila"]


  const handleClick = (type) => {
    console.log("ive been clicked")
    setShowAlcTypeLookUp(true)
    setSelectedCategory(type)
    console.log(selectedCategory)
  }



  return (
    <div className="tryout">
        {
          categories.map((category)=> {
            const divcolor = category === "Gin" ? "#13203e" : category === "Whiskey" ? "#475971" : category === "Vodka" ? "#2a3c2b":  category === "Tequila" ? "#58897d" : "#fff";
            return(
              <div className="alc-category"
                  style={{backgroundColor: divcolor, cursor: "pointer"}}
                  onClick={()=> handleClick(category)}
              >{category} Lookup: </div>
            )
          })
        }
        {showAlcTypeLookUp && <AlcTypeLookUp selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} addToTotal={addToTotal} updateTicketList={updateTicketList} setShowAlcTypeLookUp={setShowAlcTypeLookUp}/> }
    </div>
  )
}

export default LookUpCats