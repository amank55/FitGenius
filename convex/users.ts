import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const syncUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) return;

    return await ctx.db.insert("users", args);
  },
});

export const updateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    clerkId: v.string(),
    image: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!existingUser) return;

    return await ctx.db.patch(existingUser._id, args);
  },
});

// Create a user from Clerk
export const createUserFromClerk = mutation({
  args: {
    clerkId: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("=== createUserFromClerk Debug ===");
    console.log("Creating user for Clerk ID:", args.clerkId);

    try {
      // Check if user already exists
      const existingUser = await ctx.db
        .query("users")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
        .first();

      if (existingUser) {
        console.log("User already exists:", existingUser);
        return existingUser._id;
      }

      // Get user info from Clerk
      const clerkUser = await ctx.auth.getUserIdentity();
      console.log("Clerk user:", clerkUser);

      if (!clerkUser) {
        console.log("No Clerk user found");
        return null;
      }

      // Create user in database
      const userId = await ctx.db.insert("users", {
        name: clerkUser.name || "User",
        email: clerkUser.email || "",
        image: clerkUser.pictureUrl || "",
        clerkId: args.clerkId,
      });

      console.log("User created with ID:", userId);
      return userId;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },
});