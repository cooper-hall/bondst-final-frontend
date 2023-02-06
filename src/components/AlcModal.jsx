import {useState} from 'react'

const AlcModal = ({setShowAlcModal, brands}) => {
  console.log(brands)
   return (
    // onClick={() => setShowAlcModal(false)} --possibly add to parent div to allow click out of modal anywhere on screen
        <div className="alc-modal-container" > 
            <div className="alc-modal-content">
                <div className="exit-button" onClick={() => setShowAlcModal(false)}>X</div>
                <h2 className="alc-modal-brand"> How to serve: {brands.name}</h2>
                {/* <form type="submit" className="alc-modal-form" onSubmit={handleSubmit}> */}
                  {/* <input > + classic cocktail </input> <br/>
                  <input > + house cocktail </input><br/>
                  <input > + other drink </input><br/>
                  <input > + straight </input><br/>
                  <submit>Cont.</submit> */}
                {/* </form> */}
            </div>
        </div>
    )
}

export default AlcModal