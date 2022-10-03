import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'anmlcafe',
    apiKey: process.env.API_VERCEL_KEY || process.env.API_KEY,
});
