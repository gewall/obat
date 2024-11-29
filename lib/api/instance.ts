import axios from "axios"

export const instance = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API_URL as string}/api/`,
    headers:{
     
        'Content-Type': 'multipart/form-data'
       
    }
})