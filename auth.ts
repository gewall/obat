
import { SupabaseAdapter } from "@auth/supabase-adapter"

import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
 


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter:SupabaseAdapter({
    secret:process.env.SUPABASE_SERVICE_ROLE_KEY as string,
    url:process.env.SUPABASE_URL as string
  }),
  debug:true
})

