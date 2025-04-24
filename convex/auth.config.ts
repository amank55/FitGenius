export default {
    providers: [
      {
        domain: process.env.CLERK_ISSUER_URL || "https://your-app-name.clerk.accounts.dev",
        applicationID: "convex",
      },
    ]
  };