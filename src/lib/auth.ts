import {betterAuth} from 'better-auth';
import {drizzleAdapter} from 'better-auth/adapters/drizzle';
import {db} from '../drizzle/db';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    // schema: {

    // },
    // usePlural: true,
  }),
  socialProviders: {
    spotify: {
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    },
  },
});
