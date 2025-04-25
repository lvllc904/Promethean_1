import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest<T = any>(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<T> {
  try {
    console.log(`API request: ${method} ${url}`, data ? 'with data' : 'no data');
    
    const res = await fetch(url, {
      method,
      headers: data ? { "Content-Type": "application/json" } : {},
      body: data ? JSON.stringify(data) : undefined,
      credentials: "include",
    });

    await throwIfResNotOk(res);
    
    if (method === 'DELETE') {
      return { success: true } as T;
    }
    
    // Handle empty responses gracefully
    const text = await res.text();
    if (!text) {
      console.log(`Empty response received from ${url}`);
      return ([] as unknown) as T;
    }
    
    try {
      return JSON.parse(text) as T;
    } catch (e) {
      console.error(`Failed to parse JSON from ${url}:`, e);
      console.log('Response was:', text);
      return ([] as unknown) as T;
    }
  } catch (error) {
    console.error(`Error in apiRequest to ${url}:`, error);
    throw error;
  }
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    try {
      const res = await fetch(queryKey[0] as string, {
        credentials: "include",
      });

      if (unauthorizedBehavior === "returnNull" && res.status === 401) {
        return null;
      }

      await throwIfResNotOk(res);
      
      // Handle empty responses gracefully
      const text = await res.text();
      if (!text) {
        console.log(`Empty response received from ${queryKey[0]}`);
        return [];
      }
      
      try {
        return JSON.parse(text);
      } catch (e) {
        console.error(`Failed to parse JSON from ${queryKey[0]}:`, e);
        console.log('Response was:', text);
        return [];
      }
    } catch (error) {
      console.error(`Error fetching from ${queryKey[0]}:`, error);
      throw error;
    }
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 60000, // 1 minute instead of Infinity
      retry: 1,
      retryDelay: 1000,
      refetchOnMount: true,
    },
    mutations: {
      retry: 1,
    },
  },
});
