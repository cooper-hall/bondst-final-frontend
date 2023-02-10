import ItemsGrid from './ItemsGrid'
import ReceiptItems from './ReceiptItems'
import {useState, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'

const MainPage = ({user, setUser}) => {

  const [receiptItemsList, setReceiptItemsList] = useState([])
  const [total, setTotal] = useState(0)
  const [brands, setBrands] = useState([])
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:4000/bottles')
      let res = await req.json()
      setBrands(res)
    }
    request()
  }, [])

  const addToTotal = (price) => {
    setTotal((total) => total + price)
  }

  const updateTicketList= (drink) => {
   setReceiptItemsList(prevState=> [...prevState, {...drink, bottle_id: drink.id,  ounces: 2, quantity: 1, id: uuidv4()}])
  }

  const updateTicketListCocktail= (drink) => {
   setReceiptItemsList(prevState=> [...prevState, {...drink, bottle_id: 0, ounces: 2, quantity: 1, id: uuidv4()}])
  }

  return (
    <div className="main-page-container">
      <ReceiptItems receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal} user={user} setUser={setUser}/>  
      <ItemsGrid receiptItemsList={receiptItemsList} setReceiptItemsList={setReceiptItemsList} total={total} setTotal={setTotal} addToTotal={addToTotal} updateTicketList={updateTicketList} updateTicketListCocktail={updateTicketListCocktail} brands={brands} setBrands={setBrands} />
    </div>
  )
}

export default MainPage