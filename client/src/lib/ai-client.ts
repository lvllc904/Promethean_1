// AI client for property valuation and description generation
import { apiRequest } from './queryClient';

interface PropertyData {
  id?: number;
  address: string;
  city: string;
  country: string;
  price?: number;
  beds?: number;
  baths?: number;
  sqft?: number;
  propertyType: string;
  features?: string[];
  yearBuilt?: number;
}

interface ValuationResult {
  estimatedValue: number;
  confidenceScore: number;
  comparableProperties?: Array<{
    address: string;
    price: number;
    similarity: number;
  }>;
  marketTrends?: {
    trending: 'up' | 'down' | 'stable';
    percentChange: number;
    period: string;
  };
}

interface DescriptionResult {
  title: string;
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  seoKeywords: string[];
}

interface LegalAnalysisResult {
  riskScore: number;
  complianceIssues: string[];
  recommendations: string[];
  applicableLaws: string[];
  jurisdictionSpecificNotes: string;
}

// AI Property Valuation
export const getPropertyValuation = async (propertyData: PropertyData): Promise<ValuationResult> => {
  try {
    const response = await apiRequest(
      'POST',
      '/api/ai/valuation',
      propertyData
    );
    return await response.json();
  } catch (error) {
    console.error('AI Valuation Error:', error);
    throw new Error('Failed to get property valuation');
  }
};

// Generate AI Property Description
export const generatePropertyDescription = async (propertyData: PropertyData): Promise<DescriptionResult> => {
  try {
    const response = await apiRequest(
      'POST',
      '/api/ai/description',
      propertyData
    );
    return await response.json();
  } catch (error) {
    console.error('AI Description Error:', error);
    throw new Error('Failed to generate property description');
  }
};

// Get Legal Analysis
export const getLegalAnalysis = async (
  propertyData: PropertyData,
  transactionType: 'sale' | 'rent' | 'lease-option' | 'subject-to'
): Promise<LegalAnalysisResult> => {
  try {
    const response = await apiRequest(
      'POST',
      '/api/ai/legal-analysis',
      {
        ...propertyData,
        transactionType
      }
    );
    return await response.json();
  } catch (error) {
    console.error('AI Legal Analysis Error:', error);
    throw new Error('Failed to get legal analysis');
  }
};

// Generate Smart Contract for Property Transaction
export const generateSmartContract = async (
  propertyData: PropertyData,
  transactionType: 'sale' | 'rent' | 'lease-option' | 'subject-to',
  buyerAddress: string,
  sellerAddress: string
): Promise<string> => {
  try {
    const response = await apiRequest(
      'POST',
      '/api/ai/generate-contract',
      {
        property: propertyData,
        transactionType,
        buyerAddress,
        sellerAddress
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Smart Contract Generation Error:', error);
    throw new Error('Failed to generate smart contract');
  }
};
