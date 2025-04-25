import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/hooks/use-auth";
import { useWallet } from "@/components/wallet/wallet-provider";
import { Separator } from "@/components/ui/separator";
import { Wallet, LogIn, UserPlus, Loader2 } from "lucide-react";

export function AuthOptions() {
  const [, navigate] = useLocation();
  const { user } = useAuth();
  const { isConnecting, connect, address } = useWallet();
  const [activeTab, setActiveTab] = useState<string>("options");

  // If user is already logged in, redirect to home
  if (user) {
    navigate("/");
    return null;
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Authentication Options</CardTitle>
        <CardDescription>
          Choose how you want to access the platform
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-1">
            <TabsTrigger value="options">Sign In Options</TabsTrigger>
          </TabsList>

          <TabsContent value="options" className="space-y-4 py-4">
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="lg"
                className="w-full justify-start space-x-3 h-14 text-left"
                onClick={() => navigate("/auth/login")}
              >
                <LogIn className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">Traditional Login</span>
                  <span className="text-xs text-muted-foreground">Sign in with username and password</span>
                </div>
              </Button>

              <Button 
                variant="outline" 
                size="lg"
                className="w-full justify-start space-x-3 h-14 text-left"
                onClick={() => navigate("/auth/register")}
              >
                <UserPlus className="h-5 w-5" />
                <div className="flex flex-col items-start">
                  <span className="font-medium">Create Account</span>
                  <span className="text-xs text-muted-foreground">Sign up with email to get started</span>
                </div>
              </Button>

              <Separator className="my-4" />

              <Button 
                variant="default" 
                size="lg"
                className="w-full justify-start space-x-3 h-14 text-left"
                onClick={connect}
                disabled={isConnecting || !!address}
              >
                {isConnecting ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Wallet className="h-5 w-5" />
                )}
                <div className="flex flex-col items-start">
                  <span className="font-medium">Connect Wallet</span>
                  <span className="text-xs text-muted-foreground">Sign in with your Web3 wallet</span>
                </div>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}