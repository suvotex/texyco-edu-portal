// Supabase Configuration & Client Initialization
const SUPABASE_URL = 'https://odlwmdofmihjmxonrlfd.supabase.co'; // Tomar project URL
const SUPABASE_ANON_KEY = 'sb_publishable_rIbYxyyFjuZ5J5fwcuFCWw_EuoK7VHh'; // Tomar Publishable key

// Initialize Supabase Client
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log("Supabase Client Initialized Successfully!");