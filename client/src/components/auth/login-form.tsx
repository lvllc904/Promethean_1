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
import { AlertCircle, LogIn, Loader2, Key } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { useLocation } from "wouter";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onSuccess?: () => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const { loginMutation } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [location] = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  
  // Detect if there's an error param in the URL (e.g., from a redirect)
  useEffect(() => {
    const params = new URLSearchParams(location.split('?')[1]);
    const errorParam = params.get('error');
    if (errorParam) {
      setError(decodeURIComponent(errorParam));
    }
  }, [location]);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur", // Validate when field loses focus
  });

  const onSubmit = async (data: LoginFormValues) => {
    setError(null);
    try {
      await loginMutation.mutateAsync(data);
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error.message;
        
        // Handle specific login errors
        if (errorMessage.includes("Invalid username or password")) {
          form.setError("username", { 
            type: "manual", 
            message: "Username or password is incorrect" 
          });
          form.setError("password", { 
            type: "manual", 
            message: "Username or password is incorrect" 
          });
        } else {
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
                    placeholder="Enter your username" 
                    className="pl-9"
                    autoComplete="username"
                    {...field} 
                  />
                </FormControl>
                <div className="absolute left-3 top-3 text-muted-foreground">
                  <LogIn className="h-4 w-4" />
                </div>
              </div>
              <FormMessage className="font-medium text-destructive text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>Password</FormLabel>
                <Button 
                  type="button" 
                  variant="link" 
                  size="sm" 
                  className="h-auto p-0 text-xs"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </div>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-9"
                    autoComplete="current-password"
                    {...field}
                  />
                </FormControl>
                <div className="absolute left-3 top-3 text-muted-foreground">
                  <Key className="h-4 w-4" />
                </div>
              </div>
              <FormMessage className="font-medium text-destructive text-sm" />
              <div className="text-right">
                <Button variant="link" className="p-0 h-auto text-xs" type="button">
                  Forgot password?
                </Button>
              </div>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full mt-6"
          disabled={loginMutation.isPending}
        >
          {loginMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in...
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" /> Sign in
            </>
          )}
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            Don't have an account yet? <a href="#" onClick={(e) => {
              e.preventDefault();
              document.getElementById('register-tab')?.click();
            }} className="text-primary hover:underline">Create account</a>
          </p>
        </div>
      </form>
    </Form>
  );
}