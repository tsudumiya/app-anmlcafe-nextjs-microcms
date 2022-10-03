import { createClient } from 'microcms-js-sdk';

export const client = createClient({
    serviceDomain: 'anmlcafe',
    apiKey: process.env.API_KEY,
});
