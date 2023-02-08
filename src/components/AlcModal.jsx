import {useState} from 'react'

const AlcModal = ({setShowAlcModal, brands, updateTicketList, addToTotal, currentBottle}) => {

    const addBrandToOrder = (bottle) => {
        // updateTicketList(cocktail)
        // addToTotal(cocktail.price)
        console.log(bottle)
    }

    // const updatePrice = (currentBottle) => {
    //     if id === opt1 then currentBottle.price + 13;
    //     else
    //         id === opt2 then currentBottle.price + 9;
    //     else 
    //         id === opt3 then currentBottle.price + 5;
    //     else
    //         id === opt4 then currentBottle.price + 0
    // }
    


   return (
    // onClick={() => setShowAlcModal(false)} --possibly add to parent div to allow click out of modal anywhere on screen
        <div className="alc-modal-container" > 
            <div className="alc-modal-content">
                <div className="exit-button" onClick={() => setShowAlcModal(false)}>X</div>
                <div className="alc-modal-brand"> How to serve: {currentBottle.name} ${currentBottle.price}</div>
                    <h4 className="alc-modal-option"> + house cocktail </h4>
                    <h4 className="alc-modal-option"> + classic cocktail </h4>
                    <h4 className="alc-modal-option"> + other drink </h4>
                    <h4 className="alc-modal-option"> + straight </h4>
                    <h4 className="alc-modal-option" onClick={()=>{addBrandToOrder(currentBottle)}}>submit</h4>


                    {/* if house cocktail is selected, add $13 dollars to the currentBottle price
                        else classic cocktail is selected, add $9 dollars to the currentBottle price
                        else other drink is selected, add $5 dollars to the currentBottle price
                        else straight is selected, add $0 dollars to the currentBottle price
                        */}

            </div>
        </div>
    )
}

export default AlcModal