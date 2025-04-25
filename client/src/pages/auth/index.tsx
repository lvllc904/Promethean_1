import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { AuthOptions } from "@/components/auth/auth-options";
import { BuildingIcon, ShieldCheck } from "lucide-react";

export default function AuthPage() {
  const [, navigate] = useLocation();
  const { user } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary to-primary-foreground text-white md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
        <div className="max-w-md mx-auto space-y-8">
          <div className="flex items-center space-x-2">
            <BuildingIcon className="h-8 w-8" />
            <h1 className="text-3xl font-bold">DAC Marketplace</h1>
          </div>
          
          <h2 className="text-4xl font-extrabold tracking-tight">
            Your gateway to blockchain-powered real estate
          </h2>
          
          <p className="text-lg opacity-90">
            Join our community and access all platform features through both traditional and blockchain authentication methods.
          </p>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-white/20 p-2 mt-1">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Universal Access</h3>
                <p className="opacity-90">
                  No wallet required - you can use traditional login for all platform features
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="rounded-full bg-white/20 p-2 mt-1">
                <BuildingIcon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Decentralized Governance</h3>
                <p className="opacity-90">
                  Every member receives governance tokens and voting rights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Auth Options Section */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center bg-background">
        <AuthOptions />
      </div>
    </div>
  );
}