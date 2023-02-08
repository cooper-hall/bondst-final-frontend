const AlcModal = ({setShowAlcModal, updateTicketList, addToTotal, currentBottle, setCurrentBottle}) => {

    const addBrandToOrder = (bottle) => {
        updateTicketList(bottle)
        addToTotal(bottle.price)
        setShowAlcModal(false)
    }

    const updatePrice = () => {
        // let price = currentBottle.price + 0
    //     // let option
    //     //     id === "opt1" ? price = currentBottle.price + 13 :
    //     //     id === "opt2" ? price = currentBottle.price + 9 :
    //     //     id === "opt3" ? price = currentBottle.price + 5 :
    //     //     id === "opt4" ? price = currentBottle.price :
    //     // console.log(price)
    //     // console.log(currentBottle)
       
    //     // console.log(setCurrentBottle.price)
    //     switch(value){
    //         case opt1:
    //             return price = currentBottle.price + 13
    //         case opt2:
    //             return price = currentBottle.price + 9
    //         case opt3: 
    //             return price = currentBottle.price + 5
    //         case opt4:
    //             return price = currentBottle.price
    //         default:
    //             return currentBottle.price
    //     }
        // currentBottle.price = price 
        // setCurrentBottle(currentBottle)
    }


   return (
        <div className="alc-modal-container" > 
            <div className="alc-modal-content">
                <div className="exit-button" onClick={() => setShowAlcModal(false)}>X</div>
                <div className="alc-modal-brand"> How to serve: {currentBottle.name} ${currentBottle.price}</div>
                    <h4 id="opt1" className="alc-modal-option" onClick={updatePrice()}> + house cocktail </h4>
                    <h4 id="opt2" className="alc-modal-option" onClick={updatePrice()}> + classic cocktail </h4>
                    <h4 id="opt3" className="alc-modal-option" onClick={updatePrice()}> + other drink </h4>
                    <h4 id="opt4" className="alc-modal-option" onClick={updatePrice()}> + straight </h4>
                    <h4 className="alc-modal-option" onClick={()=>{addBrandToOrder(currentBottle)}}>submit</h4>
            </div>
        </div>
    )
}

export default AlcModal