import { supabase } from "@/lib/supabse";;
import { NextRequest } from "next/server";

export const GET =async(request:NextRequest,  { params }: { params: Promise<{ slug: string }> })=> {
    const {slug} = await params;
    console.log(slug,"POST");
    
    const {data,error} = await supabase.from("projects").select().eq("slug",slug).limit(1).single();
    if(error) new Response(JSON.stringify({msg:"Error",error}))
   return new Response(JSON.stringify({msg:"Success",data}))


}