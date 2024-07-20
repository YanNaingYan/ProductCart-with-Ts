import { useEffect, useState } from "react";

import Container from "./Container";

import Catagory from "./Catagory";
import axios from "axios";


const CatagoryGroup = () => {
    const [categories, setCategory] = useState([]);
    const [ready, setReady] = useState(false);
    const fetchCatagory = async () => {
     
        try{
            const res = await axios.get(`${location.origin}/src/mock/catagories.json`);
            const data = res.data;
            setCategory(data);
      setReady(true)
        
        }
   catch(error){
    console.log("error");
   }
      };
    useEffect(() => {
     fetchCatagory();
      }, []);
 
  return  <section className="category-list mb-10 py-3">
<Container>
<p className="font-heading mb-2">Select Categories</p>
    <div className="flex gap-3 select-none ">
   <Catagory catagory="All"/>
   {!ready && (
            <div className="flex gap-3 animate-pulse">
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
              <button className="border border-neutral-200 px-4 py-1 flex items-center">
                <span className="inline-block bg-neutral-200 w-24 h-4" />
              </button>
            </div>
          )}

{ready && categories.map((catagory,index)=>(<Catagory key={index} catagory={catagory}/>))}
    </div>
</Container>
   

</section>;

}

export default CatagoryGroup