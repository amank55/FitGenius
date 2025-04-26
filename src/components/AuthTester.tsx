"use client";

import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useState, useEffect } from "react";

export default function AuthTester() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const [authStatus, setAuthStatus] = useState<string>("Checking authentication...");
  const [convexStatus, setConvexStatus] = useState<string>("Checking Convex connection...");

  // Test Convex connection
  const testConnection = useQuery(api.test.testConnection);

  useEffect(() => {
    if (isUserLoaded) {
      if (user) {
        setAuthStatus(`Authenticated as: ${user.emailAddresses[0]?.emailAddress || user.id}`);
      } else {
        setAuthStatus("Not authenticated");
      }
    }
  }, [isUserLoaded, user]);

  useEffect(() => {
    if (testConnection) {
      if (testConnection.success) {
        setConvexStatus(`Connected to Convex (${testConnection.plansCount} plans found)`);
      } else {
        setConvexStatus(`Convex error: ${testConnection.message}`);
      }
    }
  }, [testConnection]);

  return (
    <div className="p-4 border rounded-lg bg-background/50">
      <h2 className="text-lg font-bold mb-4">Authentication Tester</h2>
      
      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium mb-1">Clerk Authentication:</div>
          <div className={`p-2 rounded ${user ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {authStatus}
          </div>
        </div>
        
        <div>
          <div className="text-sm font-medium mb-1">Convex Connection:</div>
          <div className={`p-2 rounded ${testConnection?.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {convexStatus}
          </div>
        </div>
        
        {user && (
          <div className="text-xs text-muted-foreground">
            User ID: {user.id}
          </div>
        )}
      </div>
    </div>
  );
} 