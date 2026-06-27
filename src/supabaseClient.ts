//src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xrxcqraupwyetbwnsynj.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhyeGNxcmF1cHd5ZXRid25zeW5qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI1MTU0NzUsImV4cCI6MjA5ODA5MTQ3NX0.YQGE-3wyepSnC5qApLPF7dq6B5lxLEybGbK5PLmFt0w"
export const supabase = createClient(supabaseUrl, supabaseKey)
