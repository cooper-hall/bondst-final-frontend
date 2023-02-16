//i can have only one modal, but for each map, it needs to be for the selected alcType 
//first i need to be able to select an individual category? (maybe give an id?)
// then once im able to do that, i need to open the modal
// once the modal is open, the bottles that have an AlcType matching with the category, need to map through those
// and display them in individual divs
// on each of those divs, there should be an onClick that opens the alcModal
// onSubmit of that, the selected option should be added to the receipt list and close out all the modals

import {useState, useEffect} from 'react'
import BottlePurchase from "./BottlePurchase"


const AlcTypeLookUp = ({selectedCategory, setSelectedCategory, addToTotal, updateTicketList, setShowAlcTypeLookUp}) => {

  const [typeBottles, setTypeBottles] = useState([])
  const [showBottlePurchase, setShowBottlePurchase] = useState(false)

  useEffect(() => {
    const request = async () => {
      let req = await fetch(`http://localhost:4000/bottles/${selectedCategory}`)
      let res = await req.json()
      setTypeBottles(res)
    }
    request()
  }, [])

  const handleClick = (bottle) => {
    if ( bottle.quantity === 0 || bottle.quantity === 1 && bottle.ounces <=4){
    }
    else {
    setSelectedCategory(bottle)
    setShowBottlePurchase(true)
    console.log(selectedCategory) }
  }

  return(

    <div className="alc-lookup-container">
      <div className="alc-lookup-content">
        <div className="lookup-cont">
          <div className="exit-button" onClick={()=> setShowAlcTypeLookUp(false)}>X</div>
          <div className="lookup-list">
          {
            typeBottles.map((bottle)=> {
              let divcolor;
            switch (true) {
    case bottle.quantity === 3 && bottle.alcType === "Gin":
      divcolor = "#df9a93";
      break;
    case bottle.quantity === 2 && bottle.alcType === "Gin":
      divcolor = "#EA6D5F";
      break;
    case bottle.quantity === 1 && bottle.alcType === "Gin":
      divcolor = "#DD1C1A";
      break;
    case bottle.quantity === 0 && bottle.alcType === "Gin":
      divcolor = "#5B5B5B09";
      break; 
    case bottle.alcType === "Gin":
      divcolor = "#31519b";
      break;
    case bottle.quantity === 3 && bottle.alcType === "Whiskey":
      divcolor = "#df9a93";
      break;
    case bottle.quantity === 2 && bottle.alcType === "Whiskey":
      divcolor = "#EA6D5F";
      break;
    case bottle.quantity === 1 && bottle.alcType === "Whiskey":
      divcolor = "#DD1C1A";
      break;
    case bottle.quantity === 0 && bottle.alcType === "Whiskey":
      divcolor = "#5B5B5B09";
      break; 
    case bottle.alcType === "Whiskey":
      divcolor = "#778da9";
      break;
    case bottle.quantity === 3 && bottle.alcType === "Vodka":
      divcolor = "#df9a93";
      break;
    case bottle.quantity === 2 && bottle.alcType === "Vodka":
      divcolor = "#EA6D5F";
      break;
    case bottle.quantity === 1 && bottle.alcType === "Vodka":
      divcolor = "#DD1C1A";
      break;
     case bottle.quantity === 0 && bottle.alcType === "Vodka":
      divcolor = "#5B5B5B09";
      break; 
    case bottle.alcType === "Vodka":
      divcolor = "#415d43";
      break;
    case bottle.quantity === 3 && bottle.alcType === "Tequila":
      divcolor = "#df9a93";
      break;
    case bottle.quantity === 2 && bottle.alcType === "Tequila":
      divcolor = "#EA6D5F";
      break;
    case bottle.quantity === 1 && bottle.alcType === "Tequila":
      divcolor = "#DD1C1A";
      break;
    case bottle.quantity === 0 && bottle.alcType === "Tequila":
      divcolor = "#5B5B5B09";
      break; 
    case bottle.alcType === "Tequila":
      divcolor = "#83afa4";
      break;
    default:
      divcolor = "#fff";
                  }
              return(
                <div className={`lookup-items ${divcolor === "#5B5B5B09" ? "disabled-hover": ""}`}
                onClick={()=>handleClick(bottle)}
                style={{backgroundColor: divcolor}}
                >{bottle.name}</div>
              )
            })
          }
          </div>
        </div>
      </div>
      {showBottlePurchase && <BottlePurchase setShowBottlePurchase={setShowBottlePurchase} addToTotal={addToTotal} updateTicketList={updateTicketList} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} setShowAlcTypeLookUp={setShowAlcTypeLookUp}/> }
    </div>

  )
}

export default AlcTypeLookUp