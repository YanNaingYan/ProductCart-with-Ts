import React from 'react'
type catagoryProp={
    catagory:string
}
const Catagory:React.FC<catagoryProp> = ({catagory} ) => {
  return <div className="category-btn whitespace-nowrap border border-neutral-600 rounded-lg focus:bg-neutral-600 hover:bg-neutral-300 px-4 py-1">{catagory}</div>
  
}

export default Catagory