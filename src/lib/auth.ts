import {betterAuth} from 'better-auth';
import {drizzleAdapter} from 'better-auth/adapters/drizzle';
import {db} from '../drizzle/db';
import { nextCookies } from 'better-auth/next-js';
import { account, session, user, verification } from '@/drizzle/schema';

export const auth = betterAuth({
  advanced: {
    // useSecureCookies: true, // this will only work on https
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: {
      user,
      session,
      account,
      verification,
    },
  }),
  plugins: [
    nextCookies() // must be the last plugin in this array
  ],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // in seconds
    }
  },
  socialProviders: {
    spotify: { 
      clientId: process.env.SPOTIFY_CLIENT_ID as string, 
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
    },
  },
});
