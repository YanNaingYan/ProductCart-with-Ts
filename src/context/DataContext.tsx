import  { createContext, useState } from 'react'
import { ChildrenProp } from '../Props/props';

type DataContextProps={
 
    handleDrawer:()=>void;
    cartDrawer:boolean
    
}

export const DataContext=createContext<DataContextProps | null>(null)
const DataContextProvider = ({children}:ChildrenProp) => {
    const [cartDrawer, setCartDrawer] = useState<boolean>(false);
    const handleDrawer=()=>{
        setCartDrawer(!cartDrawer)
    }
  return (
    <DataContext.Provider value={{handleDrawer,cartDrawer}}>{children}</DataContext.Provider>
  )
}

export default DataContextProvider