import { useContext } from "react"
import Header from "./components/Header"
import { DataContext } from "./context/DataContext"
import CartDrawer from "./components/CartDrawer"
import CatagoryGroup from "./components/CatagoryGroup"
import Spacer from "./components/Spacer"
import ProductGroup from "./components/ProductGroup"





function App() {
  const context= useContext(DataContext)
if(!context){
    return null
}
const {cartDrawer}=context

  return (
    <div className="flex flex-col min-h-screen" >
      <Header/>
      <Spacer/>
      <CatagoryGroup/>
      <ProductGroup/>
      {cartDrawer && <CartDrawer/>}
    </div>
  )
}

export default App
