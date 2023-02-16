import {useState} from 'react'

const BottlePurchase = ({setShowAlcTypeLookUp, setShowBottlePurchase, updateTicketList, addToTotal, selectedCategory, setSelectedCategory}) => {

    const [selectedOption, setSelectedOption] = useState(null)
    const [price, setPrice] = useState([])

    const updatePrice = (newOption) => {
        
        let bottlePrice = selectedCategory.price
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
            default:
            break
        }
    }
    
    const addBrandToOrder = (bottle) => {
        let updatedBottle = { ...bottle, price: price };
        setSelectedCategory(updatedBottle);
        updateTicketList(updatedBottle);
        addToTotal(price);
        setShowBottlePurchase(false);
        setShowAlcTypeLookUp(false)
        
    };

   return (
        <div className="alc-modal-container" > 
            <div className="alc-modal-content">
                <div className="exit-button" onClick={() => setShowBottlePurchase(false)}>X</div>
                <div className="alc-modal-brand"> How to serve: {selectedCategory.name} ${price}</div>
                    <h4 className={`alc-modal-option ${selectedOption === 'opt1' ? 'selected' : ''}`} onClick={()=> updatePrice('opt1')} style={{backgroundColor: '#bfd7b5'}}> + house cocktail </h4>
                    <h4 className={`alc-modal-option ${selectedOption === 'opt2' ? 'selected' : ''}`} onClick={()=> updatePrice('opt2')} style={{backgroundColor: '#6d6a75'}}> + classic cocktail </h4>
                    <h4 className={`alc-modal-option ${selectedOption === 'opt3' ? 'selected' : ''}`} onClick={()=> updatePrice('opt3')} style={{backgroundColor: '#bfd7ea'}}> + other </h4>
                    <h4 className={`alc-modal-option ${selectedOption === 'opt4' ? 'selected' : ''}`} onClick={()=> updatePrice('opt4')} style={{backgroundColor: '#fff'}}> + straight </h4>
                    <h4 className="alc-modal-option" onClick={()=>{addBrandToOrder(selectedCategory)}}>submit</h4>
            </div>
        </div>
    )
}

export default BottlePurchase