// database.js
const { createClient } = require('@supabase/supabase-js');

// Reemplaza esto con tus credenciales reales de Supabase
const supabaseUrl = 'https://ogimflvvadwkmjeclwla.supabase.co/rest/v1/';
const supabaseKey = 'sb_publishable_ybHcKAIvxQKwcdpI_zqj_Q_mPQ99kBq';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;