import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://kehwwmedwxfsewwpwgyt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaHd3bWVkd3hmc2V3d3B3Z3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NTU4NDksImV4cCI6MjAxODAzMTg0OX0.KWrsNRn9PeJEJyGI91OOtRBJ90i66vCrZioxifdCT0A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
