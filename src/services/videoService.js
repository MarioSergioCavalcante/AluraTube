import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://jadyvwvbmetyplpzycgn.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphZHl2d3ZibWV0eXBscHp5Y2duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkxNzk4MTMsImV4cCI6MTk4NDc1NTgxM30.C1vSRi2zoXH6veOaLCALF_T4MiEAM2nKfGO6WqtvDNU"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
}