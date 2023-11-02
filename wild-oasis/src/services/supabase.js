import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hzvyzbboaffavjlceviu.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6dnl6YmJvYWZmYXZqbGNldml1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzNjU2MzQsImV4cCI6MjAxMzk0MTYzNH0.QrzodSftc_SudFQKb9gGUQYCHp-S9TVQrmTAuCEuw2Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
