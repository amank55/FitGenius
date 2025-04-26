import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Simple test query to verify database connection
export const testConnection = query({
  args: {},
  handler: async (ctx) => {
    console.log("=== Test Connection Debug ===");
    try {
      // Try to query the database
      const plans = await ctx.db.query("plans").collect();
      console.log("Successfully connected to database");
      console.log("Total plans in database:", plans.length);
      return { success: true, message: "Database connection successful", plansCount: plans.length };
    } catch (error) {
      console.error("Database connection error:", error);
      return { success: false, message: error instanceof Error ? error.message : "Unknown error" };
    }
  },
});

// Simple test mutation to verify database write access
export const testWrite = mutation({
  args: { testValue: v.string() },
  handler: async (ctx, args) => {
    console.log("=== Test Write Debug ===");
    try {
      // Try to write to the database
      const result = await ctx.db.insert("plans", {
        userId: "test-user",
        name: "Test Plan",
        workoutPlan: {
          schedule: ["Monday"],
          exercises: [
            {
              day: "Monday",
              routines: [
                {
                  name: "Test Exercise",
                  sets: 1,
                  reps: 1
                }
              ]
            }
          ]
        },
        dietPlan: {
          dailyCalories: 2000,
          meals: [
            {
              name: "Test Meal",
              foods: ["Test Food"]
            }
          ]
        },
        isActive: true
      });
      console.log("Successfully wrote to database");
      return { success: true, message: "Database write successful", id: result };
    } catch (error) {
      console.error("Database write error:", error);
      return { success: false, message: error instanceof Error ? error.message : "Unknown error" };
    }
  },
}); 