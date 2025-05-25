import {betterAuth} from 'better-auth';
import {drizzleAdapter} from 'better-auth/adapters/drizzle';
import {db} from '../drizzle/db';
import { nextCookies } from 'better-auth/next-js';
import { account, session, user, verification } from '@/drizzle/schema';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  socialProviders: {
    spotify: { 
      clientId: process.env.SPOTIFY_CLIENT_ID as string, 
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    },
  },
  plugins: [
    nextCookies(),
  ],
});
