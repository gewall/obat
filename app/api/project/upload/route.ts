
import { supabase } from '@/lib/supabse';
import { randomUUID } from 'crypto';
import { NextRequest } from 'next/server'



export const config = {
    api: {
        bodyParser: false,
    },
};


export const POST = async(request:NextRequest)=> {
    const body = await request.formData();
    const file = body.get("image") as File;
    
    const filePath = randomUUID()
    const { data, error } = await supabase.storage.from("projects").upload(`${filePath}`,file,{
        cacheControl: '3600',
        upsert: false
        
        })
        console.log(data,error);
        
    if(error)
        return new Response(JSON.stringify({msg:`Upload Error:`,error}));
        
    
    return new Response(JSON.stringify({msg:"Upload Success",...data}));
    
}