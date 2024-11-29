import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const secret=process.env.SUPABASE_SERVICE_ROLE_KEY as string
const url=process.env.SUPABASE_URL as string

export const supabase = createClient(url, secret);