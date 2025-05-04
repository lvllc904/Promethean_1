import { ReactNode, useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { Lock, User } from "lucide-react";

interface DualAuthWrapperProps {
  children: ReactNode;
  title: string;
  description: string;
  walletFeatureDescription?: string;
  authRequiredMessage?: string;
}

export function DualAuthWrapper({
  children,
  title,
  description,
  walletFeatureDescription,
  authRequiredMessage = "You need to sign in to access this feature."
}: DualAuthWrapperProps) {
  const { user, isLoading } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  // If the user is authenticated, render the children
  if (user && !isLoading) {
    return <>{children}</>;
  }

  // If authentication is in progress, show a loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  // If not authenticated and not showing auth form yet, show the prompt
  if (!showAuth) {
    return (
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <User className="h-16 w-16 text-primary mb-4" />
          <h2 className="text-2xl font-bold text-neutral-800 mb-2">{title}</h2>
          <p className="text-neutral-600 mb-6 max-w-md">
            {description}
          </p>
          {walletFeatureDescription && (
            <p className="text-sm text-neutral-500 mb-6 max-w-md">
              {walletFeatureDescription}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => setShowAuth(true)}>
              Sign In or Register
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Show authentication form
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>{authRequiredMessage}</CardTitle>
            <CardDescription>Please sign in or create an account to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginForm onSuccess={() => setShowAuth(false)} />
              </TabsContent>
              <TabsContent value="register">
                <RegisterForm onSuccess={() => setShowAuth(false)} />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" onClick={() => setShowAuth(false)}>
              Cancel
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}