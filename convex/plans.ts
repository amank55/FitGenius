import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Add a test plan creation function
export const createTestPlan = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    console.log("=== createTestPlan Debug ===");
    console.log("Creating test plan for user ID:", args.userId);

    const testPlan = {
      userId: args.userId,
      name: "Test Plan",
      workoutPlan: {
        schedule: ["Monday", "Wednesday", "Friday"],
        exercises: [
          {
            day: "Monday",
            routines: [
              {
                name: "Push-ups",
                sets: 3,
                reps: 10
              }
            ]
          }
        ]
      },
      dietPlan: {
        dailyCalories: 2000,
        meals: [
          {
            name: "Breakfast",
            foods: ["Oatmeal", "Banana", "Protein Shake"]
          }
        ]
      },
      isActive: true
    };

    try {
      const planId = await ctx.db.insert("plans", testPlan);
      console.log("Test plan created with ID:", planId);
      return planId;
    } catch (error) {
      console.error("Error creating test plan:", error);
      throw error;
    }
  }
});

export const createPlan = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    workoutPlan: v.object({
      schedule: v.array(v.string()),
      exercises: v.array(
        v.object({
          day: v.string(),
          routines: v.array(
            v.object({
              name: v.string(),
              sets: v.number(),
              reps: v.number(),
            })
          ),
        })
      ),
    }),
    dietPlan: v.object({
      dailyCalories: v.number(),
      meals: v.array(
        v.object({
          name: v.string(),
          foods: v.array(v.string()),
        })
      ),
    }),
    isActive: v.boolean(),
  },
  handler: async (ctx, args) => {
    const activePlans = await ctx.db
      .query("plans")
      .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
      .filter((q) => q.eq(q.field("isActive"), true))
      .collect();

    for (const plan of activePlans) {
      await ctx.db.patch(plan._id, { isActive: false });
    }

    const planId = await ctx.db.insert("plans", args);

    return planId;
  },
});

export const getUserPlans = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    console.log("=== getUserPlans Query Debug ===");
    console.log("Querying plans for user ID:", args.userId);

    try {
      // First, check if the user exists in the users table
      const user = await ctx.db
        .query("users")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.userId))
        .first();

      console.log("Found user:", user);

      // If user doesn't exist in the database, we'll handle that in a separate mutation
      if (!user) {
        console.log("User not found in database");
      }

      // Now query for the user's plans
      const plans = await ctx.db
        .query("plans")
        .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
        .order("desc")
        .collect();

      console.log("Found plans for user:", plans.length);
      console.log("Plans data:", JSON.stringify(plans, null, 2));

      return plans;
    } catch (error) {
      console.error("Error in getUserPlans:", error);
      throw error;
    }
  },
});