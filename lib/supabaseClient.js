import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mfuzohxfprveooqdckxq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdXpvaHhmcHJ2ZW9vcWRja3hxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NDA3NTIsImV4cCI6MjA1NDAxNjc1Mn0.pITM5ms2ro9zDrIs7OKixjzeP18-oaOEYlStHLIXYWo";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
