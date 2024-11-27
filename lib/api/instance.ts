import axios from "axios"

export const instance = axios.create({
    baseURL:"https://itch.io/api/1/key/",
    headers:{
        Authorization:"Bearer "+process.env.ITCHIO_API_KEY
    }
})