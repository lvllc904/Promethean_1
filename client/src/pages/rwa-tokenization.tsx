import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Building2, DollarSign, FileText, TrendingUp, Wallet, Shield } from "lucide-react";

interface AssetTokenizationForm {
  assetType: string;
  description: string;
  valuation: string;
  requestedTokens: string;
  custodianInfo: {
    name: string;
    license: string;
    address: string;
  };
  documentation: {
    title: string;
    description: string;
  };
}

interface PortfolioAsset {
  assetId: string;
  tokenContract: string;
  assetType: string;
  holdings: string;
  currentValue: string;
  purchaseValue: string;
  dividendsReceived: string;
}

export default function RWATokenizationPage() {
  const [activeTab, setActiveTab] = useState("tokenize");
  const [tokenizationForm, setTokenizationForm] = useState<AssetTokenizationForm>({
    assetType: "",
    description: "",
    valuation: "",
    requestedTokens: "",
    custodianInfo: {
      name: "",
      license: "",
      address: ""
    },
    documentation: {
      title: "",
      description: ""
    }
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch supported asset types
  const { data: assetTypes } = useQuery({
    queryKey: ["/api/rwa/asset-types"],
  });

  // Fetch user portfolio
  const { data: portfolio } = useQuery({
    queryKey: ["/api/rwa/portfolio"],
  });

  // Create tokenization proposal mutation
  const createProposal = useMutation({
    mutationFn: (data: AssetTokenizationForm) => 
      apiRequest("/api/rwa/tokenize", "POST", data),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Tokenization proposal submitted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/rwa/portfolio"] });
      // Reset form
      setTokenizationForm({
        assetType: "",
        description: "",
        valuation: "",
        requestedTokens: "",
        custodianInfo: { name: "", license: "", address: "" },
        documentation: { title: "", description: "" }
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit proposal",
        variant: "destructive",
      });
    },
  });

  // Calculate fees mutation
  const calculateFees = useMutation({
    mutationFn: (data: { assetValue: string; tokenAmount: string }) =>
      apiRequest("/api/rwa/calculate-fees", "POST", data),
  });

  const handleSubmitProposal = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!tokenizationForm.assetType || !tokenizationForm.valuation || !tokenizationForm.requestedTokens) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    createProposal.mutate(tokenizationForm);
  };

  const handleCalculateFees = async () => {
    if (tokenizationForm.valuation && tokenizationForm.requestedTokens) {
      calculateFees.mutate({
        assetValue: tokenizationForm.valuation,
        tokenAmount: tokenizationForm.requestedTokens
      });
    }
  };

  const formatCurrency = (value: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(parseFloat(value));
  };

  const formatPercentage = (value: string) => {
    const num = parseFloat(value);
    return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Real World Asset Tokenization</h1>
        <p className="text-muted-foreground mt-2">
          Transform physical assets into digital tokens for enhanced liquidity and accessibility
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tokenize">Tokenize Asset</TabsTrigger>
          <TabsTrigger value="portfolio">My Portfolio</TabsTrigger>
          <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
        </TabsList>

        <TabsContent value="tokenize" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Asset Tokenization
              </CardTitle>
              <CardDescription>
                Submit your real world asset for tokenization and fractionalized ownership
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitProposal} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="assetType">Asset Type *</Label>
                    <Select
                      value={tokenizationForm.assetType}
                      onValueChange={(value) =>
                        setTokenizationForm(prev => ({ ...prev, assetType: value }))
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select asset type" />
                      </SelectTrigger>
                      <SelectContent>
                        {assetTypes?.assetTypes?.map((type: string) => (
                          <SelectItem key={type} value={type}>
                            {type.replace('_', ' ').toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="valuation">Asset Valuation (USD) *</Label>
                    <Input
                      id="valuation"
                      type="number"
                      placeholder="1000000"
                      value={tokenizationForm.valuation}
                      onChange={(e) =>
                        setTokenizationForm(prev => ({ ...prev, valuation: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tokens">Requested Tokens *</Label>
                    <Input
                      id="tokens"
                      type="number"
                      placeholder="1000000"
                      value={tokenizationForm.requestedTokens}
                      onChange={(e) =>
                        setTokenizationForm(prev => ({ ...prev, requestedTokens: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Estimated Fees</Label>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleCalculateFees}
                      disabled={!tokenizationForm.valuation || !tokenizationForm.requestedTokens}
                    >
                      <DollarSign className="h-4 w-4 mr-2" />
                      Calculate Fees
                    </Button>
                    {calculateFees.data && (
                      <div className="text-sm text-muted-foreground">
                        Total: {formatCurrency(calculateFees.data.total)}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Asset Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Detailed description of the asset including location, condition, and other relevant details..."
                    value={tokenizationForm.description}
                    onChange={(e) =>
                      setTokenizationForm(prev => ({ ...prev, description: e.target.value }))
                    }
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="custodianName">Custodian Name</Label>
                    <Input
                      id="custodianName"
                      placeholder="Custodian Company LLC"
                      value={tokenizationForm.custodianInfo.name}
                      onChange={(e) =>
                        setTokenizationForm(prev => ({
                          ...prev,
                          custodianInfo: { ...prev.custodianInfo, name: e.target.value }
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custodianLicense">License Number</Label>
                    <Input
                      id="custodianLicense"
                      placeholder="CUS-12345"
                      value={tokenizationForm.custodianInfo.license}
                      onChange={(e) =>
                        setTokenizationForm(prev => ({
                          ...prev,
                          custodianInfo: { ...prev.custodianInfo, license: e.target.value }
                        }))
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="custodianAddress">Custodian Address</Label>
                    <Input
                      id="custodianAddress"
                      placeholder="0x..."
                      value={tokenizationForm.custodianInfo.address}
                      onChange={(e) =>
                        setTokenizationForm(prev => ({
                          ...prev,
                          custodianInfo: { ...prev.custodianInfo, address: e.target.value }
                        }))
                      }
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={createProposal.isPending}
                >
                  {createProposal.isPending ? "Submitting..." : "Submit Tokenization Proposal"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          {portfolio && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Value</p>
                        <p className="text-2xl font-bold">{formatCurrency(portfolio.totalValue)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Assets</p>
                        <p className="text-2xl font-bold">{portfolio.totalAssets}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-orange-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Total Return</p>
                        <p className="text-2xl font-bold text-green-600">
                          {formatPercentage(portfolio.performance.totalReturn)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-muted-foreground">Dividends</p>
                        <p className="text-2xl font-bold">{formatCurrency(portfolio.dividendsReceived)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Asset Holdings</CardTitle>
                  <CardDescription>Your tokenized real world asset portfolio</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolio.assets?.map((asset: PortfolioAsset) => (
                      <div key={asset.assetId} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="font-semibold">{asset.assetId}</h3>
                            <Badge variant="secondary">{asset.assetType.replace('_', ' ')}</Badge>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-8 text-right">
                          <div>
                            <p className="text-sm text-muted-foreground">Holdings</p>
                            <p className="font-semibold">{asset.holdings} tokens</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Current Value</p>
                            <p className="font-semibold">{formatCurrency(asset.currentValue)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Purchase Value</p>
                            <p className="font-semibold">{formatCurrency(asset.purchaseValue)}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Dividends</p>
                            <p className="font-semibold text-green-600">{formatCurrency(asset.dividendsReceived)}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>

        <TabsContent value="marketplace" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                RWA Marketplace
              </CardTitle>
              <CardDescription>
                Browse and trade tokenized real world assets
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Marketplace Coming Soon</h3>
                <p className="text-muted-foreground">
                  The RWA marketplace will allow trading of tokenized assets with full compliance and custody verification.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}