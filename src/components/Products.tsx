import React, { useContext, useEffect, useRef, useState } from 'react'
import { ProductProps } from './ProductGroup'
import { DataContext } from '../context/DataContext'
export type ratingProps={
    rate: number | null;
  count: number | null;
}
export type ProductGroupProps={
    key:number
   products:ProductProps[]
 

}
const Products:React.FC<{product:ProductProps}> = ({ product: {
    id,
    title,
    price,
    image,
    rating: { rate, count },
    description,
    
  }}) => {
    const context=useContext(DataContext)
    if(!context){
        return null
    }
    const {addCart,added,setAdded}=context

    const handleAddToCart = () => {
   
            const newCart={
                product_id: id,
                price,
                image,
                title,
                quantity: 1,
                cost: price,
               id:0,
                description:'',
                category:'',
                rating:{
                    rate:0,
                    count:0
                }
                
              
            }
            addCart(newCart)
            setAdded(!added)
        
        
          };


 

  return <div className="product-card group">
    <img
      className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 ms-5 -mb-16"
      src={image}

    />

    <div className="product-card-body border border-neutral-600 p-5">
      <p className="product-card-title font-heading text-xl line-clamp-1 font-bold mt-14 mb-2">
        {title}
      </p>
      <p className="product-card-description text-neutral-500 text-sm mb-4 line-clamp-3">
        {description}
      </p>
      <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
        <div className="rating-stars flex gap-1">
         
        </div>
        <p className="rating-text">
          ({rate} / {count})
        </p>
      </div>
      <p className="product-card-price font-heading font-bold text-xl mb-3">
        $ <span className="price">{price}</span>
      </p>
      <button
  
          onClick={handleAddToCart}
          className= "duration-100 active:scale-90 border disabled:pointer-events-none select-none border-neutral-600 block w-full h-12 font-heading"
        >
      Add to Cart
        </button>
    </div>
  </div>
  
}

export default Products