import { ReactNode, useState } from "react";
import { useWallet } from "@/components/wallet/wallet-provider";
import { useAuth } from "@/hooks/use-auth";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/auth/login-form";
import { RegisterForm } from "@/components/auth/register-form";
import { Button } from "@/components/ui/button";
import { Lock, UserCircle, Wallet } from "lucide-react";

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
  walletFeatureDescription = "Connect your wallet for expanded blockchain features, or use traditional authentication for basic access.",
  authRequiredMessage = "Authentication Required"
}: DualAuthWrapperProps) {
  const { isConnected, connect } = useWallet();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("login");

  // If authenticated via wallet or traditional login, show children
  if (isConnected || user) {
    return <>{children}</>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-stretch">
        {/* Left column: Authentication form */}
        <div className="w-full md:w-1/2 max-w-md">
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>{authRequiredMessage}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <Button
                  variant="outline"
                  className="flex items-center gap-2 flex-1"
                  onClick={connect}
                >
                  <Wallet className="h-4 w-4" />
                  Connect Wallet
                </Button>
                <div className="relative flex-1">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">or</span>
                  </div>
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Create Account</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <LoginForm />
                </TabsContent>
                <TabsContent value="register">
                  <RegisterForm />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Hero section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center">
          <div className="rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50 p-8 shadow-lg">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-900">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="mb-3 text-2xl font-bold">{title}</h2>
            <p className="mb-6 text-lg text-neutral-600">
              {walletFeatureDescription}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-primary-100 p-1">
                  <UserCircle className="h-4 w-4 text-primary-900" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Standard Authentication</p>
                  <p className="text-neutral-600">Create an account with just username and password for basic access.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-2 mt-1 rounded-full bg-primary-100 p-1">
                  <Wallet className="h-4 w-4 text-primary-900" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">Web3 Wallet Connection</p>
                  <p className="text-neutral-600">Connect your Ethereum wallet for advanced blockchain features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}