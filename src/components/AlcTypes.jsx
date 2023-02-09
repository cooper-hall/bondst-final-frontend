import {useEffect, useState} from 'react'
import AlcModal from "./AlcModal"


const AlcTypes = ({addToTotal, updateTicketList}) => {

  const [brands, setBrands] = useState([])
  const [currentBottle, setCurrentBottle] = useState([])
  const [showAlcModal, setShowAlcModal] = useState(false)

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:4000/bottles')
      let res = await req.json()
      setBrands(res)
    }
    request()
  }, [])


  const handleClick = (bottle) => {
    console.log(bottle)
    setCurrentBottle(bottle)
    setShowAlcModal(true)
  }

  // const display = (clicked) => {
  //   setBrands(clicked)
  //   setShowAlcModal(true)
  //   }

  return (
    // <div className="alc-type-trying">
      <div className="all-brands-container">
        {
          brands.map((bottle)=> {
            const divcolor = bottle.alcType === "Gin" ? "#9CAFB7" : bottle.alcType === "Whiskey" ? "#F6CA83" : bottle.alcType === "Vodka" ? "#ADB993": "#fff";
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
  // </div>
  )
}

export default AlcTypes