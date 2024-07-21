import  { createContext, useState } from 'react'
import { ChildrenProp } from '../Props/props';
import { ProductProps } from '../components/ProductGroup';

export type newProductProps={
  id:any,
  product_id:number
  image:any,
  title:string,
  price:number,
  description:string | null,
  cost:number,
  quantity:number
}
type DataContextProps={

    handleDrawer:()=>void;
    cartDrawer:boolean;
    addCart:(newCart:ProductProps)=>void,
    carts:newProductProps[];
    removeCart:(id:number)=>void;
    added:boolean,
    setAdded:(added:boolean)=>void;
  
    changeQuantity:(id:number,addedQuantity:number)=>void;
}

export const DataContext=createContext<DataContextProps | null>(null)
const DataContextProvider = ({children}:ChildrenProp) => {
    const [cartDrawer, setCartDrawer] = useState<boolean>(false);
    const [carts,setCarts]=useState<ProductProps[]>([])
    const addCart=(newCart:ProductProps)=>{
      const currentId=  carts.find((el)=>(el.product_id ===newCart.product_id))
  if(currentId ){
    changeQuantity(newCart.product_id,1)
  }
  else{ 
   
     setCarts([...carts,newCart])}}
    const handleDrawer=()=>{
        setCartDrawer(!cartDrawer)
    }
    const removeCart=(id:number)=>{
setCarts(carts.filter((cart)=>(cart.product_id != id)))

    }
    const[added,setAdded]=useState(false)
const changeQuantity=(id:number,addedQuantity:number)=>{
  setCarts(
    carts.map(
(el)=>{
    if(el.product_id===id){
const newQuantity= el.quantity + addedQuantity
const newCost=el.price * newQuantity

return {...el,quantity:newQuantity,cost:newCost}
    } else return el
}
))
}

  return (
    <DataContext.Provider value={{handleDrawer,cartDrawer,addCart,carts,removeCart,added,setAdded,changeQuantity}}>{children}</DataContext.Provider>
  )
}

export default DataContextProvider