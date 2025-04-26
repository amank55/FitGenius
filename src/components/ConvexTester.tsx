"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import { useState } from "react";

export default function ConvexTester() {
  const testConnection = useQuery(api.test.testConnection);
  const testWrite = useMutation(api.test.testWrite);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleTestConnection = async () => {
    setIsLoading(true);
    try {
      const result = await testWrite({ testValue: "test" });
      setResult(result);
    } catch (error) {
      setResult({ success: false, message: error instanceof Error ? error.message : "Unknown error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg bg-background/50">
      <h2 className="text-lg font-bold mb-4">Convex Database Tester</h2>
      
      <div className="mb-4">
        <div className="text-sm font-medium mb-2">Connection Status:</div>
        <div className={`p-2 rounded ${testConnection?.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          {testConnection ? (
            testConnection.success ? 
              `Connected (${testConnection.plansCount} plans found)` : 
              `Error: ${testConnection.message}`
          ) : (
            "Checking connection..."
          )}
        </div>
      </div>
      
      <Button 
        onClick={handleTestConnection}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? "Testing..." : "Test Database Write"}
      </Button>
      
      {result && (
        <div className={`mt-4 p-3 rounded ${result.success ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
          <div className="font-medium">Test Result:</div>
          <div className="text-sm">{result.message}</div>
          {result.id && <div className="text-xs mt-1">ID: {result.id}</div>}
        </div>
      )}
    </div>
  );
} 