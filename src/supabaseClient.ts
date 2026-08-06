import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://udpimhxaspgybyxrzsvg.supabase.co"
const supabaseKey = "sb_publishable_HA2NrCw3metHfJSRW0QUWQ_74YtCVlE"

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
)