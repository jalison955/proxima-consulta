import { customSessionClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { auth } from "./auth";

export const authClient = createAuthClient({
  plugins: [customSessionClient<typeof auth>()],
});

/* The base URL of the server (optional if you're using the same domain) 
export const authClient = createAuthClient(
    baseURL: "http://localhost:3000"
);*/
