import {useState} from 'react'

const AlcModal = ({setShowAlcModal, updateTicketList, addToTotal, currentBottle, setCurrentBottle}) => {

    const [selectedOption, setSelectedOption] = useState(null)
    const [price, setPrice] = useState(currentBottle.price)

    const updatePrice = (newOption) => {
        if (newOption === 'opt1') {
          setPrice(currentBottle.price + 13);
        } else if (newOption === 'opt2') {
          setPrice(currentBottle.price + 9);
        } else if (newOption === 'opt3') {
          setPrice(currentBottle.price + 5);
        } else if (newOption === 'opt4') {
          setPrice(currentBottle.price);
        }
        setSelectedOption(newOption);
    };

     const addBrandToOrder = (bottle) => {
        updateTicketList(bottle)
        addToTotal(price)
        setShowAlcModal(false)
    }

   return (
        <div className="alc-modal-container" > 
            <div className="alc-modal-content">
                <div className="exit-button" onClick={() => setShowAlcModal(false)}>X</div>
                <div className="alc-modal-brand"> How to serve: {currentBottle.name} ${price}</div>
                    <h4 id="opt1" className={`alc-modal-option ${selectedOption === 'opt1' ? 'selected' : ''}`} onClick={()=> updatePrice('opt1')}> + house cocktail </h4>
                    <h4 id="opt2" className={`alc-modal-option ${selectedOption === 'opt2' ? 'selected' : ''}`} onClick={()=> updatePrice('opt2')}> + classic cocktail </h4>
                    <h4 id="opt3" className={`alc-modal-option ${selectedOption === 'opt3' ? 'selected' : ''}`} onClick={()=> updatePrice('opt3')}> + other drink </h4>
                    <h4 id="opt4" className={`alc-modal-option ${selectedOption === 'opt4' ? 'selected' : ''}`} onClick={()=> updatePrice('opt4')}> + straight </h4>
                    <h4 className="alc-modal-option" onClick={()=>{addBrandToOrder(currentBottle)}}>submit</h4>
            </div>
        </div>
    )
}

export default AlcModal