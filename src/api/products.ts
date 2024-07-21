import axios from "axios";

export const productApi=axios.create({
    baseURL:`${location.origin}/src/mock/products.json`,
    headers:{
        "Content-Type":"application/json"
    }
})