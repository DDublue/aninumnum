import {createAuthClient} from 'better-auth/react';
import { redirect } from 'next/navigation';

export const authClient = createAuthClient({
  baseURL: "http://127.0.0.1:3000",
});

// export const signIn = async () => {
//   await authClient.signIn.social({
//     provider: 'spotify',
//     callbackURL: '/'
//   }, {
//     onRequest: (ctx) => {
//       console.log(ctx);
//     },
//     onSuccess: async () => {
//       // redirect('/');
//     },
//     onError: (ctx) => {
//       console.log(ctx)
//       alert(ctx.response.text);
//     },
//   }

//   );
// };
