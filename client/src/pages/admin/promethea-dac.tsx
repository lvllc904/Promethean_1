import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useAuth } from '@/hooks/use-auth';
import { Loader2, Shield, Cpu, Globe, Database, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from './components/AdminLayout';
import { PageHeader } from '@/components/ui/page-header';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface PrometheaHealth {
  network: string;
  initialized: boolean;
  contracts: {
    core: boolean;
    token: boolean;
  };
  addresses: {
    prometheaCore?: string;
    prometheaToken?: string;
    prometheaIdentity?: string;
    prometheaCommunication?: string;
  };
  beaconAddress?: string;
  ethicalCode?: {
    hash: string;
    ipfsHash: string;
    version: string;
  };
  totalSupply?: string;
  error?: string;
}

interface TokenInfo {
  success: boolean;
  token: {
    name: string;
    symbol: string;
    totalSupply: string;
    network: {
      network: string;
      chainId: number;
      name: string;
      rpcUrl: string;
      explorerUrl: string;
      beaconAddress: string;
    };
  };
}

interface EthicalCode {
  success: boolean;
  ethicalCode: {
    hash: string;
    ipfsHash: string;
    version: string;
  };
}

export default function PrometheaDACPage() {
  const { user, isLoading } = useAuth();
  const queryClient = useQueryClient();

  // Health check query
  const { data: healthData, isLoading: healthLoading, error: healthError, refetch: refetchHealth } = useQuery({
    queryKey: ['/api/promethea/health'],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  // Token info query
  const { data: tokenData, isLoading: tokenLoading } = useQuery({
    queryKey: ['/api/promethea/token-info'],
    enabled: healthData?.initialized === true,
  });

  // Ethical code query
  const { data: ethicalCodeData, isLoading: ethicalCodeLoading } = useQuery({
    queryKey: ['/api/promethea/ethical-code'],
    enabled: healthData?.initialized === true,
  });

  // Network info query
  const { data: networkData, isLoading: networkLoading } = useQuery({
    queryKey: ['/api/promethea/network'],
    enabled: healthData?.initialized === true,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const isAdmin = true; // Temporary override for testing

  if (!isAdmin) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground mt-2">
          You do not have permission to access this page.
        </p>
      </div>
    );
  }

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle className="h-5 w-5 text-green-600" />
    ) : (
      <XCircle className="h-5 w-5 text-red-600" />
    );
  };

  const getStatusBadge = (status: boolean, label: string) => {
    return (
      <Badge variant={status ? "default" : "destructive"} className="ml-2">
        {status ? "Active" : "Inactive"}
      </Badge>
    );
  };

  return (
    <>
      <Helmet>
        <title>Promethea DAC - Lyonides Ventures & Holdings Admin</title>
      </Helmet>
      
      <AdminLayout>
        <div className="space-y-6">
          <PageHeader
            title="Promethea DAC"
            description="Decentralized Autonomous Collective blockchain infrastructure and ethical AI governance"
            icon={<Shield className="h-6 w-6" />}
          />
          
          <Separator />
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="contracts">Contracts</TabsTrigger>
              <TabsTrigger value="governance">Governance</TabsTrigger>
              <TabsTrigger value="identity">Identity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* System Status */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Database className="h-5 w-5 mr-2" />
                      System Status
                    </CardTitle>
                    <CardDescription>
                      Overall health of Promethea DAC infrastructure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {healthLoading ? (
                      <div className="flex items-center justify-center py-4">
                        <Loader2 className="h-6 w-6 animate-spin" />
                      </div>
                    ) : healthError ? (
                      <div className="flex items-center text-red-600">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        Connection Error
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Initialized</span>
                          {getStatusIcon(healthData?.initialized)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Core Contract</span>
                          {getStatusIcon(healthData?.contracts?.core)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Token Contract</span>
                          {getStatusIcon(healthData?.contracts?.token)}
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Network</span>
                          <Badge variant="outline">{healthData?.network}</Badge>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Token Information */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Cpu className="h-5 w-5 mr-2" />
                      PROM Token
                    </CardTitle>
                    <CardDescription>
                      Promethea governance token information
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {tokenLoading ? (
                      <div className="flex items-center justify-center py-4">
                        <Loader2 className="h-6 w-6 animate-spin" />
                      </div>
                    ) : tokenData?.success ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Name</span>
                          <span className="text-sm font-medium">{tokenData.token.name}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Symbol</span>
                          <Badge variant="secondary">{tokenData.token.symbol}</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Total Supply</span>
                          <span className="text-sm font-medium">
                            {parseFloat(tokenData.token.totalSupply).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Network</span>
                          <span className="text-sm font-medium">{tokenData.token.network.name}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center text-orange-600">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        Not Available
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Ethical Code */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Ethical Code
                    </CardTitle>
                    <CardDescription>
                      Immutable AI ethical principles
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {ethicalCodeLoading ? (
                      <div className="flex items-center justify-center py-4">
                        <Loader2 className="h-6 w-6 animate-spin" />
                      </div>
                    ) : ethicalCodeData?.success ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Version</span>
                          <Badge variant="default">v{ethicalCodeData.ethicalCode.version}</Badge>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <span className="text-sm">Hash</span>
                          <span className="text-xs font-mono bg-gray-100 p-1 rounded">
                            {ethicalCodeData.ethicalCode.hash.slice(0, 20)}...
                          </span>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <span className="text-sm">IPFS</span>
                          <span className="text-xs font-mono bg-gray-100 p-1 rounded">
                            {ethicalCodeData.ethicalCode.ipfsHash}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center text-orange-600">
                        <AlertCircle className="h-5 w-5 mr-2" />
                        Not Available
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Beacon Address */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Beacon Address
                  </CardTitle>
                  <CardDescription>
                    Entry point for Depth OS instances to connect to Promethea DAC
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {healthData?.beaconAddress ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-mono text-sm">{healthData.beaconAddress}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => navigator.clipboard.writeText(healthData.beaconAddress)}
                        >
                          Copy
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This address serves as the immutable entry point for all Depth OS instances to discover and connect to the Promethea DAC infrastructure.
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-center text-orange-600">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Beacon address not available. Promethea DAC may not be deployed.
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                  <CardDescription>
                    Management and monitoring actions for Promethea DAC
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      onClick={() => refetchHealth()}
                      disabled={healthLoading}
                    >
                      {healthLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : null}
                      Refresh Status
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => queryClient.invalidateQueries()}
                    >
                      Refresh All Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="contracts" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Contract Addresses</CardTitle>
                  <CardDescription>
                    Deployed Promethea DAC smart contracts on the blockchain
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {healthData?.addresses ? (
                    <div className="space-y-4">
                      {Object.entries(healthData.addresses).map(([name, address]) => (
                        <div key={name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <span className="font-medium capitalize">{name.replace(/([A-Z])/g, ' $1').trim()}</span>
                            {name === 'prometheaCore' && (
                              <Badge variant="default" className="ml-2">Beacon</Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="font-mono text-sm">{address}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => navigator.clipboard.writeText(address)}
                            >
                              Copy
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      No contract addresses available
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="governance" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Governance Parameters</CardTitle>
                  <CardDescription>
                    Current governance settings for the Promethea DAC
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Voting Period</span>
                        <span className="text-sm font-medium">7 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Quorum Threshold</span>
                        <span className="text-sm font-medium">51%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Min Tokens to Propose</span>
                        <span className="text-sm font-medium">1,000 PROM</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Consensus Duration</span>
                        <span className="text-sm font-medium">24 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Min Consensus Participants</span>
                        <span className="text-sm font-medium">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Ethical Validators Required</span>
                        <span className="text-sm font-medium">5</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="identity" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Identity System</CardTitle>
                  <CardDescription>
                    Decentralized identity and reputation management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Verification Fee</span>
                        <span className="text-sm font-medium">0.01 ETH</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Verification Time Limit</span>
                        <span className="text-sm font-medium">7 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Initial Reputation</span>
                        <span className="text-sm font-medium">100</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Max Reputation</span>
                        <span className="text-sm font-medium">1,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Message Validation Window</span>
                        <span className="text-sm font-medium">1 hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Storage</span>
                        <span className="text-sm font-medium">IPFS</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </AdminLayout>
    </>
  );
}