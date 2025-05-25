import {createAuthClient} from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: "http://127.0.0.1:3000",
});

export const signIn = async () => {
  await authClient.signIn.social({
    provider: 'spotify',
  }, {
    onRequest: (ctx) => {
      console.log("request:");
      console.log(ctx);
    },
    onSuccess: async () => {
      console.log("success:");
    },
    onError: (ctx) => {
      console.log(ctx)
      alert(`Something went wrong: ${ctx.error.message}`);
    },
  }

  );
};
