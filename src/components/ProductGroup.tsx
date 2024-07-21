import  React, { useEffect, useState } from 'react'
import Container from './Container'
import ProductLoader from './ProductLoader';
import { productApi } from '../api/products';
import Products, { ProductGroupProps, ratingProps } from './Products';


export type ProductProps={
    id: number;
    product_id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    cost: number;
    quantity: number;
    category: string;
    rating: ratingProps;
}
const ProductGroup:React.FC = () => {
   const[ready,setReady]=useState(false)
   const [products,setProducts]=useState([])
   const fetchProduct=async()=>{
const res = await productApi.get("")
setProducts(res.data)

setReady(true)
   }
  useEffect(()=>{
    fetchProduct()
  },[])
    return <section className="product-list mb-10">
        <Container>
          <div
            id="productList"
            className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
       >
  {!ready && <>
    <ProductLoader/> 
    <ProductLoader />
    <ProductLoader />
    <ProductLoader />
    <ProductLoader />
    <ProductLoader />
  </>
            }
            {ready && products.map((product:ProductProps)=>(<Products key={product.id} product={product} />))}
          </div>
        </Container>
      </section>
    
  };

export default ProductGroup