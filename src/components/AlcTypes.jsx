import {useEffect, useState} from 'react'
import AlcModal from "./AlcModal"


const AlcTypes = ({addToTotal, updateTicketList, brands}) => {

  const [currentBottle, setCurrentBottle] = useState([])
  const [showAlcModal, setShowAlcModal] = useState(false)

  const handleClick = (bottle) => {
    if (bottle.quantity === 0 || bottle.quantity === 1 && bottle.ounces <=4){
    } 
    else {
    console.log(bottle)
    setCurrentBottle(bottle)
    setShowAlcModal(true) }
  }

  return (
      <div className="all-brands-container">
        {
          brands.map((bottle)=> {     
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
      divcolor = "#5B5B5B";
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
      divcolor = "#5B5B5B";
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
      //if divcolor = "#5B5B5B05" then disable onhover
      break; 
    case bottle.alcType === "Vodka":
      divcolor = "#415d43";
      break;
    default:
      divcolor = "#fff";
                  }
            return (
              <div className="all-brands" 
              onClick={()=> {handleClick(bottle)}}
              style={{backgroundColor: divcolor}}
              >
                {bottle.name} 
              </div>
            )
          })
        }
        {showAlcModal && <AlcModal setShowAlcModal={setShowAlcModal} brands={brands} addToTotal={addToTotal} updateTicketList={updateTicketList} currentBottle={currentBottle} setCurrentBottle={setCurrentBottle}/> }
      </div>
  )
}

export default AlcTypes