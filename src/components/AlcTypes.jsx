import {useEffect, useState} from 'react'
import AlcModal from "./AlcModal"


const AlcTypes = () => {

  const [brands, setBrands] = useState([])
  const [showAlcModal, setShowAlcModal] = useState(false)

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:3000/brands')
      let res = await req.json()
      setBrands(res)
    }
    request()
  }, [])


  const handleClick = (brand) => {
    console.log(brand)
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
          brands.map((brand)=> {
            const divcolor = brand.type === "Gin" ? "#9CAFB7" : brand.type === "Whiskey" ? "#F6CA83" : brand.type === "Vodka" ? "#ADB993": "#fff";
            return (
              <div className="all-brands" 
              onClick={()=> {handleClick(brand)}}
              style={{backgroundColor: divcolor}}
              >
                {brand.name} 
              </div>
            )
          })
        }
        {showAlcModal && <AlcModal setShowAlcModal={setShowAlcModal} brands={brands} /> }
      </div>
  // </div>
  )
}

export default AlcTypes