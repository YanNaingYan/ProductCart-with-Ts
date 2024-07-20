import axios from "axios";

export const catagoryApi=axios.create({
    baseURL:`http://localhost:3000`,
    headers:{
        "Content-Type":"application/json"
    }
})