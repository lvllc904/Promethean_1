import { useState, useEffect } from "react";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserCircle2, KeyRound, Mail, User, Loader2, ChevronLeft } from "lucide-react";

// Registration form schema
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
});

// Types for our form values
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const [, navigate] = useLocation();
  const { user, registerMutation } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Registration form setup
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      name: "",
    },
  });

  // Handle registration submission
  const onRegisterSubmit = (values: RegisterFormValues) => {
    registerMutation.mutate(values);
  };

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden">
        {/* Hero Section */}
        <div className="lg:w-1/2 bg-gradient-to-br from-primary to-primary-700 p-12 text-white flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-6">Join DAC Marketplace</h1>
          <p className="text-lg mb-8">
            Create an account to access all platform features including marketplace, property listings, and governance.
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
            <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
            <p className="text-muted-foreground mb-6">Enter your details to join DAC Marketplace</p>
            
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                <FormField
                  control={registerForm.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                          <Input className="pl-10" placeholder="Choose a username" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                          <Input className="pl-10" type="email" placeholder="your@email.com" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name (Optional)</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <UserCircle2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                          <Input className="pl-10" placeholder="Your full name" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-500" />
                          <Input className="pl-10" type="password" placeholder="Create a secure password" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Alert className="mt-4 bg-blue-50">
                  <AlertDescription className="text-xs text-blue-700">
                    By creating an account, you will receive a governance token giving you voting rights on platform decisions.
                  </AlertDescription>
                </Alert>
                <Button 
                  type="submit" 
                  className="w-full mt-2" 
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </Form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Button 
                variant="link" 
                className="p-0 h-auto" 
                onClick={() => navigate("/auth/login")}
              >
                Sign in
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}