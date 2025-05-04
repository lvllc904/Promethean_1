import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { UiLabel } from "@shared/schema";

type UiLabelContextType = {
  getLabel: (key: string, defaultValue: string, context?: string) => string;
  isLoading: boolean;
  error: Error | null;
};

const UiLabelContext = createContext<UiLabelContextType | null>(null);

/**
 * Provides a context for using UI labels throughout the application
 * Fetches and caches UI labels from the server
 */
export function UiLabelProvider({ children }: { children: ReactNode }) {
  // Cache for labels to avoid refetching the same labels
  const [labelCache, setLabelCache] = useState<Record<string, string>>({});
  
  // Function to get a label by key and context
  const fetchLabel = async (key: string, context: string = "Global"): Promise<string | null> => {
    try {
      const response = await fetch(`/api/ui-labels?key=${encodeURIComponent(key)}&context=${encodeURIComponent(context)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch label");
      }
      const data = await response.json();
      return data.value;
    } catch (error) {
      console.error("Error fetching UI label:", error);
      return null;
    }
  };
  
  // Fetch admin UI labels for initial cache population
  const {
    isLoading,
    error,
  } = useQuery<UiLabel[]>({
    queryKey: ['/api/admin/ui-labels'],
    queryFn: async () => {
      try {
        const response = await fetch('/api/admin/ui-labels');
        if (!response.ok) {
          throw new Error("Failed to fetch all UI labels");
        }
        return await response.json();
      } catch (error) {
        console.error("Error fetching UI labels:", error);
        return [];
      }
    },
    enabled: true,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
  
  // Function to get a label, checking cache first
  const getLabel = async (key: string, defaultValue: string, context: string = "Global"): Promise<string> => {
    const cacheKey = `${context}:${key}`;
    
    // Check cache first
    if (labelCache[cacheKey] !== undefined) {
      return labelCache[cacheKey] || defaultValue;
    }
    
    // Fetch from server if not in cache
    const customValue = await fetchLabel(key, context);
    
    // Update the cache
    setLabelCache(prev => ({
      ...prev,
      [cacheKey]: customValue
    }));
    
    // Return the custom value or fall back to default
    return customValue || defaultValue;
  };
  
  // Sync, memoized version of getLabel for components
  const getLabelSync = (key: string, defaultValue: string, context: string = "Global"): string => {
    const cacheKey = `${context}:${key}`;
    const cachedValue = labelCache[cacheKey];
    
    // If not in cache, trigger async fetch and return default for now
    if (cachedValue === undefined) {
      // Schedule fetch to populate cache for next render
      getLabel(key, defaultValue, context).catch(console.error);
      return defaultValue;
    }
    
    // Return the cached value or default
    return cachedValue || defaultValue;
  };
  
  return (
    <UiLabelContext.Provider
      value={{
        getLabel: getLabelSync,
        isLoading,
        error,
      }}
    >
      {children}
    </UiLabelContext.Provider>
  );
}

/**
 * Hook to access UI labels throughout the application
 * @returns {Object} The UI label context with getLabel function
 */
export function useUiLabel() {
  const context = useContext(UiLabelContext);
  if (!context) {
    throw new Error("useUiLabel must be used within a UiLabelProvider");
  }
  return context;
}