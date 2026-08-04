import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://uegaxiedavaljizukihs.supabase.co";
const supabaseKey = "sb_publishable_SWv-oYhWFhejas7yTctEAQ_uFktT5c1";

export const supabase = createClient(supabaseUrl, supabaseKey);