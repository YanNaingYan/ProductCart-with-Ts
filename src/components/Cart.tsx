import React, { useContext, useRef } from "react";
import { DataContext } from "../context/DataContext";

type cartProp={
  cart:{
    image:any, title:string, price:number, cost:number, quantity:number  ,product_id:number
  }
}
const Cart:React.FC<cartProp>  = ({ cart: { product_id, image, title, price, cost, quantity } }) => {

    const context= useContext(DataContext)
    if(!context){
        return null
    }
    const {removeCart,added,setAdded,changeQuantity}=context
    const handleRemove=()=>{
        setAdded(!added)
   removeCart(product_id)

    }
  return (
    <div className="cart-item group">
      <div className="w-full mb-5">
        <img
          className="h-16 -mb-8 ms-3 cart-item-img relative z-10"
          src={image}
        />
        <div className="border bg-white border-neutral-600 p-3 relative">
          <button  onClick={handleRemove} className="cart-item-del bg-red-100 text-red-600 p-1 duration-200 absolute pointer-events-none top-3 -right-3 opacity-0 group-hover:opacity-100 group-hover:right-3 group-hover:pointer-events-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 pointer-events-none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
          <p className="cart-item-title font-heading line-clamp-1 font-bold mt-7 mb-3">
            {title}
          </p>
          <div className="flex justify-between">
            <p className="text-neutral-500">
              $ <span className="cart-item-price hidden">{price}</span>
              <span className="cart-item-cost">{cost}</span>
            </p>
            <div className="flex">
              <button onClick={()=>{quantity>0 &&changeQuantity(product_id,-1)}} className="bg-neutral-300 duration-100 active:scale-90 cart-item-quantity-decrement p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  />
                </svg>
              </button>
              <p className="cart-item-quantity w-8 text-end bg-neutral-100 pe-1">
                {quantity}
              </p>
              <button onClick={()=>{changeQuantity(product_id,1)}} className="bg-neutral-300 duration-100 active:scale-90 cart-item-quantity-increment p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
