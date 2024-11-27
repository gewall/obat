import { instance } from "./instance"


export const GetAllProjects = async() => {
    try {
        const res = await instance.get("/my-games")        
        return{
            props: {
                data: res.data
            }
        }
    } catch (error) {
        return{
            props: {
                error
            }
        }
    }
}