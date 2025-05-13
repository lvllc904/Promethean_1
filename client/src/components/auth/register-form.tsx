import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AlertCircle, Loader2, CheckCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .regex(/^[a-zA-Z0-9_-]+$/, {
      message: "Username can only contain letters, numbers, underscores, and hyphens",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .optional(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

interface RegisterFormProps {
  onSuccess?: () => void;
}

export function RegisterForm({ onSuccess }: RegisterFormProps) {
  const { registerMutation } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [location] = useLocation();
  const [usernameAvailable, setUsernameAvailable] = useState<boolean | null>(null);
  const [checkingUsername, setCheckingUsername] = useState(false);
  
  // Detect if there's an error param in the URL (e.g., from a redirect)
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const errorParam = params.get('error');
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, [location]);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange", // Enable validation as user types
  });
  
  // Username availability check with debounce
  useEffect(() => {
    const username = form.watch("username");
    if (!username || username.length < 3) {
      setUsernameAvailable(null);
      return;
    }
    
    // Reset state when user is typing
    setUsernameAvailable(null);
    
    // Use a debounce to avoid making too many requests
    const timeoutId = setTimeout(async () => {
      if (form.getFieldState("username").invalid) {
        return; // Don't check if the username format is invalid
      }
      
      setCheckingUsername(true);
      try {
        // Use a HEAD request to check if username exists without transferring data
        const response = await fetch(`/api/auth/check-username?username=${encodeURIComponent(username)}`, {
          method: 'HEAD',
        });
        setUsernameAvailable(response.status === 404); // 404 means username doesn't exist (available)
      } catch (error) {
        console.error("Error checking username availability:", error);
      } finally {
        setCheckingUsername(false);
      }
    }, 500); // 500ms debounce
    
    return () => clearTimeout(timeoutId);
  }, [form.watch("username")]);

  const onSubmit = async (data: RegisterFormValues) => {
    setError(null);
    
    // Don't send confirmPassword to the API
    const { confirmPassword, ...registerData } = data;
    
    try {
      await registerMutation.mutateAsync(registerData);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        
        // Handle specific field errors from the server
        if (errorMessage.includes("Username already exists")) {
          form.setError("username", { 
            type: "manual", 
            message: "This username is already taken. Please try another one." 
          });
        } else if (errorMessage.includes("Email already exists")) {
          form.setError("email", { 
            type: "manual", 
            message: "This email is already registered. Try logging in instead." 
          });
        } else {
          // General error not tied to specific field
          setError(errorMessage);
        }
      } else {
        setError("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input 
                    placeholder="Choose a username" 
                    className={cn(
                      "pr-10",
                      usernameAvailable === true && "border-green-500 focus-visible:ring-green-500",
                      usernameAvailable === false && "border-red-500 focus-visible:ring-red-500"
                    )} 
                    {...field} 
                  />
                </FormControl>
                {checkingUsername && (
                  <Loader2 className="h-4 w-4 absolute right-3 top-3 animate-spin text-muted-foreground" />
                )}
                {usernameAvailable === true && (
                  <CheckCircle className="h-4 w-4 absolute right-3 top-3 text-green-500" />
                )}
                {usernameAvailable === false && (
                  <AlertCircle className="h-4 w-4 absolute right-3 top-3 text-red-500" />
                )}
              </div>
              <FormMessage />
              {usernameAvailable === true && (
                <p className="text-xs text-green-600 mt-1">Username is available!</p>
              )}
              {usernameAvailable === false && (
                <p className="text-xs text-red-600 mt-1">Username is already taken, please try another one.</p>
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Choose a password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full mt-6"
          disabled={registerMutation.isPending || checkingUsername}
          variant={usernameAvailable === false ? "destructive" : "default"}
        >
          {registerMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating Account...
            </>
          ) : (
            <>
              {usernameAvailable === false ? (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" /> Username unavailable
                </>
              ) : (
                "Create Account"
              )}
            </>
          )}
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Already have an account? <a href="#" onClick={(e) => {
              e.preventDefault();
              document.getElementById('login-tab')?.click();
            }} className="text-primary hover:underline">Sign in</a>
          </p>
        </div>
      </form>
    </Form>
  );
}