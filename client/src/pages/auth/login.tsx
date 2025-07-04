import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserCircle2, KeyRound, Mail, User, Loader2, ChevronLeft } from "lucide-react";

// Login form schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Types for our form values
type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [, navigate] = useLocation();
  const { user, loginMutation } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Login form setup
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // Handle login submission
  const onLoginSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Hero Section */}
        <div className="lg:w-1/2 bg-gradient-to-br from-primary to-primary-700 p-12 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Welcome to DAC Marketplace</h1>
          <p className="text-lg mb-8">
            Join our community of property investors, real estate professionals, and blockchain enthusiasts.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-white/20 p-2 mt-1">
                <UserCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Universal Governance Rights</h3>
                <p className="text-sm text-white/80">
                  Every member gets voting rights on platform decisions
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-white/20 p-2 mt-1">
                <KeyRound className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Secure Property Transactions</h3>
                <p className="text-sm text-white/80">
                  Buy, sell, and tokenize real estate with blockchain security
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-white/20 p-2 mt-1">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Marketplace Opportunities</h3>
                <p className="text-sm text-white/80">
                  Access the gig marketplace, escrow services, and community rewards
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 bg-white p-8 md:p-12 flex flex-col h-full">
          <Button 
            variant="ghost" 
            size="sm" 
            className="self-start mb-6 flex items-center gap-1"
            onClick={() => navigate("/auth")}
          >
            <ChevronLeft className="h-4 w-4" />
            Back to options
          </Button>
          
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Sign In to Your Account</h2>
            <p className="text-muted-foreground mb-6">Enter your credentials to access the platform</p>
            
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                <FormField
                  control={loginForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                          <Input className="pl-10" placeholder="Enter your username" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={loginForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                          <Input className="pl-10" type="password" placeholder="••••••••" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Don't have an account?{" "}
              <Button 
                variant="link" 
                className="p-0 h-auto" 
                onClick={() => navigate("/auth/register")}
              >
                Create one now
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}