import { supabase } from "@/lib/supabse"


export const GET = async() => {
    const {data,error} = await supabase.from("projects").select();

    if(error) return new Response(JSON.stringify({msg:"Error",data}))
 return new Response(JSON.stringify({msg:"Success",data}))
}