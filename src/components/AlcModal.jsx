import {useState} from 'react'

const AlcModal = ({setShowAlcModal, updateTicketList, addToTotal, currentBottle, setCurrentBottle}) => {

    const [selectedOption, setSelectedOption] = useState(null)
    const [price, setPrice] = useState([])

    const updatePrice = (newOption) => {
        
        let bottlePrice = currentBottle.price
        switch(newOption) {
            case 'opt1':
                setPrice(bottlePrice + 13)
                break;
            case 'opt2':
                setPrice(bottlePrice + 9)
                break;
            case 'opt3':
                setPrice(bottlePrice + 5)
                break;
            case 'opt4':
                setPrice(bottlePrice + 0)
                break;
            case 'opt5':
                setPrice(bottlePrice = 0)
                break;
            default:
            break
        }
    }
    
    const addBrandToOrder = (bottle) => {
        let updatedBottle = { ...bottle, price: price };
        setCurrentBottle(updatedBottle);
        updateTicketList(updatedBottle);
        addToTotal(price);
        setShowAlcModal(false);
        
    };

   return (
        <div className="alc-modal-container" > 
            <div className="alc-modal-content">
                <div style={{width:"100%", height: "100%"}}>
                    <div className="exit-button" onClick={() => setShowAlcModal(false)}>X</div>
                    <div className="alc-modal-brand"> How to serve: {currentBottle.name} ${price}</div>
                    <div className="modal-options-div">
                        <h4 className={`alc-modal-option ${selectedOption === 'opt1' ? 'selected' : ''}`} onClick={()=> updatePrice('opt1')} style={{backgroundColor: '#bfd7b5'}}> + house cocktail </h4>
                        <h4 className={`alc-modal-option ${selectedOption === 'opt2' ? 'selected' : ''}`} onClick={()=> updatePrice('opt2')} style={{backgroundColor: '#6d6a75'}}> + classic cocktail </h4>
                        <h4 className={`alc-modal-option ${selectedOption === 'opt3' ? 'selected' : ''}`} onClick={()=> updatePrice('opt3')} style={{backgroundColor: '#bfd7ea'}}> + other </h4>
                        <h4 className={`alc-modal-option ${selectedOption === 'opt4' ? 'selected' : ''}`} onClick={()=> updatePrice('opt4')} style={{backgroundColor: '#fff'}}> + straight </h4>
                        <h4 className={`alc-modal-option ${selectedOption === 'opt5' ? 'selected' : ''}`} onClick={()=> updatePrice('opt5')} style={{backgroundColor: '#e6e6fa'}}> + freebie </h4>
                        <h2 className="alc-modal-option" onClick={()=>{addBrandToOrder(currentBottle)}}>submit</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlcModal