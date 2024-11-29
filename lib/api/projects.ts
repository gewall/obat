import { z } from "zod";
import { Project } from "../types/project.type";
import { instance } from "./instance"
import { projectSchema } from "@/app/(admin)/dashboard/projects/_lib/scheme";

const uploadAllImages = async (images:any) => {
    const uploadedImages = await Promise.all(
        Array.from(images).map(async (image) => {
            const upload_images = await instance.post("/project/upload", { image });
            return upload_images.data.fullPath; // Ambil fullPath dari respon
        })
    );
    return uploadedImages; // Hasilnya adalah array dari semua fullPath
};


export const AddProjectAPI = async(data: z.infer<typeof projectSchema>) => {
    try {
        console.log(data,"API");
        const cover = data.cover_url;
        const images = data.images;
   
     
        const upload_cover = await instance.post("/project/upload",{image: cover});

        if(!upload_cover) return;
        
        const _cover_url = upload_cover.data.fullPath

        const uploadedPaths = (await uploadAllImages(images)).join(",");
        
        // data.cover_url = _cover_url
        // data.images = uploadedPaths

        const _data = {
            ...data, cover_url: _cover_url,images:uploadedPaths
        }
        console.log(_data);
        
        const res = await instance.post("/project/add",JSON.stringify(_data));
        return res;
    } catch (error) {
        throw new Error("Add Project Fail"+error);
    }
}


export const GetAllProjects = async() => {
    try {
        const res = await instance.get("/project")        
        return res.data;
    } catch (error) {
         throw new Error("Add Project Fail"+error);
    }
}