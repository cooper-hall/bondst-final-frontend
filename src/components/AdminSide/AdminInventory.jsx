import {useState, useEffect} from 'react'
import AdminHeader from '../AdminSide/AdminHeader'


const AdminInventory = () => {

   const [bottles, setBottles] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("http://localhost:4000/bottles")
      let res = await req.json()
      setBottles(res)
    }
    request()
  }, [])

  return (
    <div className="inv-parent-container">
      <div className="header">
        <AdminHeader />
      </div>
      <div className="inventory-container">
        <div className="inv-top-container">
          <div className="search">Search</div>
          <div className="type-drop"> Type dropdown</div>
          <div className="add-btl"> +add new bottle</div>
        </div>
        <div className="inv-bottles-list">
          {bottles.map((bottle)=> {
             let divcolor;
            switch (true) {
    case bottle.alcType === "Gin":
      divcolor = "#31519b";
      break;
    case bottle.alcType === "Whiskey":
      divcolor = "#778da9";
      break;
    case bottle.alcType === "Vodka":
      divcolor = "#415d43";
      break;
    case bottle.alcType === "Tequila":
      divcolor = "#83afa4";
      break;
    default:
      divcolor = "#fff";}
            return(
              <div className="inv-btl" style={{backgroundColor: divcolor}}> {bottle.name} : ({bottle.quantity})</div>
            )
          }
          )}
          
        </div>
      </div>
      
    </div>
  )

}
export default AdminInventory