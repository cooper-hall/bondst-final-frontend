import {useState, useEffect} from 'react'
import AdminHeader from '../AdminSide/AdminHeader'

const AdminMain = () => {

  const [bottles, setBottles] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:4000/bottles")
      let res = await req.json()
      setBottles(res)
    }
    request()
  }, [])


return(
  <div className="whole-page">
    <div className="header">
      <AdminHeader />
    </div>
  <div className="admin-mp-container">
    <div className="admin-mp-container">
      <div className="restock-container">
        <h2>Restock List:</h2>
        {bottles.filter(bottle => bottle.quantity < 4).map(filteredBottle => {
             let divcolor;
            switch (true) {
    case filteredBottle.quantity === 3 :
      divcolor = "#df9a93";
      break;
    case filteredBottle.quantity === 2 :
      divcolor = "#EA6D5F";
      break;
    case filteredBottle.quantity === 1 :
      divcolor = "#DD1C1A";
      break;
    case filteredBottle.quantity === 0 :
      divcolor = "#5B5B5B09";
      break; 
    case filteredBottle.alcType === "Gin":
      divcolor = "#31519b";
      break;
    case filteredBottle.alcType === "Whiskey":
      divcolor = "#778da9";
      break;
    case filteredBottle.alcType === "Vodka":
      divcolor = "#415d43";
      break;
    case filteredBottle.alcType === "Tequila":
      divcolor = "#83afa4";
      break;
    default:
      divcolor = "#fff";}
          return(
          <>
            {/* <h2 className="restock-header"> Restock List </h2> */}
              <div className="restock-items" style={{backgroundColor: divcolor}}>
                <div clan>{filteredBottle.name}</div> <br/>
                <div>Q: {filteredBottle.quantity}</div>
                <div>{filteredBottle.alcType}</div>
              </div>
          </>
          )
        })}
      </div>
    </div>
  </div>
  </div>
)
}
export default AdminMain