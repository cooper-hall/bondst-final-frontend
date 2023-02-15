//i can have only one modal, but for each map, it needs to be for the selected alcType 
//first i need to be able to select an individual category? (maybe give an id?)
// then once im able to do that, i need to open the modal
// once the modal is open, the bottles that have an AlcType matching with the category, need to map through those
// and display them in individual divs
// on each of those divs, there should be an onClick that opens the alcModal
// onSubmit of that, the selected option should be added to the receipt list and close out all the modals

import {useState, useEffect} from 'react'
import AlcModal from "./AlcModal"


const AlcTypeLookUp = ({selectedCategory}) => {

  const [typeBottles, setTypeBottles] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch(`http://localhost:4000/bottles/${selectedCategory}`)
      let res = await req.json()
      setTypeBottles(res)
    }
    request()
  }, [])

  return(

    <div className="alc-lookup-container">
      <div className="alc-lookup-content">
        <div className="lookup-cont">
          <div className="exit-button" onClick={() => setShowAlcModal(false)}>X</div>
          <div className="lookup-list">
          {
            typeBottles.map((bottle)=> {
              return(
                <div className="lookup-items">{bottle.name}</div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AlcTypeLookUp