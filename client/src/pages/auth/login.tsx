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
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { UserCircle2, KeyRound, Mail, User, Loader2 } from "lucide-react";

// Login form schema
const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

// Registration form schema
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
});

// Types for our form values
type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [, navigate] = useLocation();
  const { user, loginMutation, registerMutation } = useAuth();

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

  // Handle login submission
  const onLoginSubmit = (values: LoginFormValues) => {
    loginMutation.mutate(values);
  };

  // Handle registration submission
  const onRegisterSubmit = (values: RegisterFormValues) => {
    registerMutation.mutate(values);
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
        <div className="lg:w-1/2 bg-white p-8 md:p-12">
          <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Sign In</TabsTrigger>
              <TabsTrigger value="register">Create Account</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card className="border-none shadow-none">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Sign In to Your Account</CardTitle>
                  <CardDescription>
                    Enter your credentials to access the platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
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

                  <div className="mt-6">
                    <Separator className="my-4" />
                    <p className="text-center text-sm text-neutral-500">
                      Don't have an account?{" "}
                      <Button 
                        variant="link" 
                        className="p-0" 
                        onClick={() => setActiveTab("register")}
                      >
                        Create one now
                      </Button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card className="border-none shadow-none">
                <CardHeader className="px-0 pt-0">
                  <CardTitle>Create a New Account</CardTitle>
                  <CardDescription>
                    Join DAC Marketplace to access all features
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
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

                  <div className="mt-6">
                    <Separator className="my-4" />
                    <p className="text-center text-sm text-neutral-500">
                      Already have an account?{" "}
                      <Button 
                        variant="link" 
                        className="p-0" 
                        onClick={() => setActiveTab("login")}
                      >
                        Sign in
                      </Button>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}