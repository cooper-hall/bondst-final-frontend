import {useState} from 'react'

const Quantities = ({currentBottle}) => {
  
  const [price, setPrice] = useState([])

  const quantities = [0,1,2,3,4,5,6,7,8,9]
  const handleClick = () => {
    console.log("quantity clicked")
  }

  return(
    <div className="quantity-container">
      {
        quantities.map((quantity)=>{
          return(
            <div className="quantity-content" onClick={()=>{handleClick()}}>{quantity}</div>
          )
        })
      }
    </div>
  )
}

export default Quantities