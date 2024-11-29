
import { supabase } from '@/lib/supabse';
import { Project } from '@/lib/types/project.type';
import { NextRequest } from 'next/server'

export const POST = async(request:NextRequest)=> {
    const body = await request.json() as Project;

 
    
    
    const {error} = await supabase.from('projects').insert(body)
    console.log(error);

    if(error)
        return new Response(JSON.stringify({msg:"Error",error:error}));
    
    return new Response(JSON.stringify({msg:"Success"}));
    
}