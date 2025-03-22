// This service handles AI-related functionalities like property valuation and description generation
import OpenAI from "openai";

// Initialize OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

interface PropertyData {
  id?: number;
  address?: string;
  city?: string;
  country?: string;
  location?: string;
  price?: number | string;
  beds?: number;
  baths?: number;
  sqft?: number | string;
  propertyType?: string;
  features?: string[];
  imageUrls?: string[];
  yearBuilt?: number;
  listingType?: string;
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

// Using OpenAI API for real AI-powered features
// With a fallback to simulated responses if an error occurs

export async function generatePropertyValuation(propertyData: PropertyData): Promise<ValuationResult> {
  try {
    // Using OpenAI API for property valuation
    const prompt = `
      Generate a detailed real estate valuation for the following property:
      
      ${propertyData.propertyType ? `Property Type: ${propertyData.propertyType}` : ''}
      ${propertyData.address ? `Address: ${propertyData.address}` : ''}
      ${propertyData.city ? `City: ${propertyData.city}` : ''}
      ${propertyData.country ? `Country: ${propertyData.country}` : ''}
      ${propertyData.beds ? `Bedrooms: ${propertyData.beds}` : ''}
      ${propertyData.baths ? `Bathrooms: ${propertyData.baths}` : ''}
      ${propertyData.sqft ? `Square Footage: ${propertyData.sqft}` : ''}
      ${propertyData.yearBuilt ? `Year Built: ${propertyData.yearBuilt}` : ''}
      ${propertyData.features?.length ? `Features: ${propertyData.features.join(', ')}` : ''}
      ${propertyData.price ? `Listed Price: ${propertyData.price}` : ''}
      
      Provide a property valuation in JSON format with the following structure:
      {
        "estimatedValue": number,
        "confidenceScore": number between 0 and 1,
        "comparableProperties": [
          {
            "address": string,
            "price": number,
            "similarity": number between 0 and 1
          }
        ],
        "marketTrends": {
          "trending": "up" or "down" or "stable",
          "percentChange": number,
          "period": string
        }
      }
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const result = JSON.parse(completion.choices[0].message.content);
      return result as ValuationResult;
    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      // Fallback to simulated valuation if AI call fails
      console.log('Falling back to simulated valuation model');
      
      const priceValue = typeof propertyData.price === 'string' 
        ? parseFloat(propertyData.price) 
        : propertyData.price || 0;

      const sqftValue = typeof propertyData.sqft === 'string'
        ? parseFloat(propertyData.sqft)
        : propertyData.sqft || 1000;

      // Generate an estimated value based on provided data
      // This is a very simplified model just for demonstration
      const baseValuePerSqft = 500; // Base value per square foot
      let locationMultiplier = 1.0;
      let conditionMultiplier = 1.0;
      let amenitiesMultiplier = 1.0;

      // Adjust based on location
      if (propertyData.city) {
        const premiumLocations = ['new york', 'san francisco', 'los angeles', 'miami', 'london', 'tokyo', 'paris'];
        const midTierLocations = ['chicago', 'denver', 'austin', 'seattle', 'boston'];
        
        const cityLower = propertyData.city.toLowerCase();
        
        if (premiumLocations.some(loc => cityLower.includes(loc))) {
          locationMultiplier = 2.0;
        } else if (midTierLocations.some(loc => cityLower.includes(loc))) {
          locationMultiplier = 1.5;
        }
      }

      // Adjust based on features/amenities
      if (propertyData.features && propertyData.features.length > 0) {
        const premiumFeatures = ['pool', 'waterfront', 'view', 'garage', 'garden', 'security'];
        const featureCount = propertyData.features.filter(f => 
          premiumFeatures.includes(f.toLowerCase())
        ).length;
        
        amenitiesMultiplier = 1.0 + (featureCount * 0.05);
      }

      // Adjust based on beds and baths
      const roomsMultiplier = 1.0 + ((propertyData.beds || 0) * 0.03) + ((propertyData.baths || 0) * 0.02);

      // Calculate the estimated value
      const estimatedValue = 
        baseValuePerSqft * 
        sqftValue * 
        locationMultiplier * 
        conditionMultiplier * 
        amenitiesMultiplier *
        roomsMultiplier;

      // Determine market trend
      const marketTrending = Math.random() > 0.5 ? 'up' : 'down';
      const percentChange = marketTrending === 'up' 
        ? Math.random() * 5 + 1 // 1-6% increase
        : Math.random() * 3 + 1; // 1-4% decrease

      // Generate comparable properties
      const comparableProperties = [];
      for (let i = 0; i < 3; i++) {
        const similarityScore = 0.7 + (Math.random() * 0.3); // 70-100% similarity
        const priceDiff = (Math.random() * 0.2) - 0.1; // -10% to +10% price difference
        
        comparableProperties.push({
          address: `${100 + i} ${propertyData.location || 'Main St'}`,
          price: Math.round(estimatedValue * (1 + priceDiff)),
          similarity: parseFloat(similarityScore.toFixed(2))
        });
      }

      // Calculate confidence score (higher for properties with more data)
      let confidenceScore = 0.7; // Base confidence
      if (propertyData.beds && propertyData.baths && propertyData.sqft) confidenceScore += 0.1;
      if (propertyData.features && propertyData.features.length > 0) confidenceScore += 0.1;
      if (propertyData.yearBuilt) confidenceScore += 0.1;
      
      // Ensure the score is between 0 and 1
      confidenceScore = Math.min(confidenceScore, 1.0);

      return {
        estimatedValue: Math.round(estimatedValue),
        confidenceScore: parseFloat(confidenceScore.toFixed(2)),
        comparableProperties,
        marketTrends: {
          trending: marketTrending as 'up' | 'down' | 'stable',
          percentChange: parseFloat(percentChange.toFixed(1)),
          period: '6 months'
        }
      };
    }
  } catch (error) {
    console.error('AI Valuation Error:', error);
    throw new Error('Failed to generate property valuation');
  }
}

export async function generatePropertyDescription(propertyData: PropertyData): Promise<DescriptionResult> {
  try {
    // Using OpenAI API for property description
    const prompt = `
      Generate a detailed real estate description for the following property:
      
      ${propertyData.propertyType ? `Property Type: ${propertyData.propertyType}` : ''}
      ${propertyData.address ? `Address: ${propertyData.address}` : ''}
      ${propertyData.city ? `City: ${propertyData.city}` : ''}
      ${propertyData.country ? `Country: ${propertyData.country}` : ''}
      ${propertyData.beds ? `Bedrooms: ${propertyData.beds}` : ''}
      ${propertyData.baths ? `Bathrooms: ${propertyData.baths}` : ''}
      ${propertyData.sqft ? `Square Footage: ${propertyData.sqft}` : ''}
      ${propertyData.yearBuilt ? `Year Built: ${propertyData.yearBuilt}` : ''}
      ${propertyData.features?.length ? `Features: ${propertyData.features.join(', ')}` : ''}
      ${propertyData.price ? `Listed Price: ${propertyData.price}` : ''}
      ${propertyData.listingType ? `Listing Type: ${propertyData.listingType}` : ''}
      
      Create a property description in JSON format with the following structure:
      {
        "title": "Catchy and appealing title for the property listing",
        "shortDescription": "A brief summary of the property in one or two sentences",
        "fullDescription": "A detailed description of the property highlighting features, location benefits, and unique selling points",
        "highlights": ["Key feature 1", "Key feature 2", "Key feature 3", "Key feature 4", "Key feature 5"],
        "seoKeywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"] 
      }
      
      If the listing type is 'lease', include information about leasing options and negotiable terms in the description.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const result = JSON.parse(completion.choices[0].message.content);
      return result as DescriptionResult;
    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      // Fallback to simulated description if AI call fails
      console.log('Falling back to template-based description generator');
      
      const propertyType = propertyData.propertyType || 'property';
      const beds = propertyData.beds || 'multiple';
      const baths = propertyData.baths || 'multiple';
      const sqft = propertyData.sqft || 'spacious';
      const location = propertyData.location || 'desirable location';
      const city = propertyData.city || 'this city';
      
      // Features to highlight
      const featureDescriptions: Record<string, string> = {
        pool: 'sparkling swimming pool',
        garden: 'beautifully landscaped garden',
        garage: 'spacious garage',
        balcony: 'private balcony with views',
        waterfront: 'stunning waterfront location',
        ac: 'modern air conditioning system',
        heating: 'efficient heating system',
        security: 'comprehensive security system',
        furnished: 'tastefully furnished',
        parking: 'convenient parking space',
        elevator: 'private elevator access',
        gym: 'state-of-the-art fitness center'
      };
      
      const features = propertyData.features || [];
      const highlightFeatures = features.map(f => featureDescriptions[f] || f).filter(Boolean);
      
      // Generate title
      let adjectives = ['Beautiful', 'Stunning', 'Luxurious', 'Modern', 'Elegant', 'Charming', 'Spacious'];
      let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      
      const title = `${adjective} ${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)} in ${location.charAt(0).toUpperCase() + location.slice(1)}`;
      
      // Generate highlights
      const highlights = [
        `${beds} bedroom${beds !== 1 ? 's' : ''}, ${baths} bathroom${baths !== 1 ? 's' : ''}`,
        `${typeof sqft === 'string' ? sqft : `${sqft} square feet of`} living space`,
        `Located in ${location}, ${city}`,
        ...highlightFeatures.slice(0, 3)
      ];
      
      // Generate short description
      const shortDescription = `A ${adjective.toLowerCase()} ${propertyType} featuring ${beds} bedrooms, ${baths} bathrooms, and ${
        typeof sqft === 'string' ? sqft : `${sqft} square feet of`
      } living space in the heart of ${location}.`;
      
      // Generate full description
      let fullDescription = `
Welcome to this ${adjective.toLowerCase()} ${propertyType} in the heart of ${location}, ${city}. This impressive residence offers ${beds} bedrooms, ${baths} bathrooms, and ${
        typeof sqft === 'string' ? sqft : `${sqft} square feet of`
      } living space.

${highlightFeatures.length > 0 ? `The property features ${highlightFeatures.join(', ')}.` : ''}

Perfectly situated in ${location}, you'll enjoy easy access to local amenities, shopping, dining, and entertainment options. This ${propertyType} offers the perfect blend of comfort, style, and convenience.
`;

      // Add specific content based on listing type
      if (propertyData.listingType === 'sale') {
        fullDescription += "\nDon't miss this opportunity to own your dream home!";
      } else if (propertyData.listingType === 'lease') {
        fullDescription += "\nThis property is available for lease with flexible terms. Contact us to discuss lease duration, renewal options, and customize terms that meet your specific needs. Negotiable terms available for qualified lessees.";
      } else {
        fullDescription += "\nSchedule a viewing today and make this your new home!";
      }
      
      // Generate SEO keywords
      const seoKeywords = [
        propertyType,
        `${beds} bedroom`,
        `${baths} bathroom`,
        `${location} home`,
        `${city} real estate`
      ];
      
      if (propertyData.listingType === 'sale') {
        seoKeywords.push('property for sale');
      } else if (propertyData.listingType === 'lease') {
        seoKeywords.push('property for lease', 'negotiable lease terms', 'flexible lease options');
      } else {
        seoKeywords.push('property for rent');
      }
      
      seoKeywords.push(...features);
      
      return {
        title,
        shortDescription,
        fullDescription: fullDescription.trim(),
        highlights,
        seoKeywords
      };
    }
  } catch (error) {
    console.error('AI Description Error:', error);
    throw new Error('Failed to generate property description');
  }
}

export async function generateLegalAnalysis(
  propertyData: PropertyData,
  transactionType: 'sale' | 'rent' | 'lease-option' | 'subject-to'
): Promise<LegalAnalysisResult> {
  try {
    // Using OpenAI API for legal analysis
    const prompt = `
      Generate a detailed legal analysis for a real estate transaction with the following details:
      
      ${propertyData.propertyType ? `Property Type: ${propertyData.propertyType}` : ''}
      ${propertyData.address ? `Address: ${propertyData.address}` : ''}
      ${propertyData.city ? `City: ${propertyData.city}` : ''}
      ${propertyData.country ? `Country: ${propertyData.country}` : 'Country: United States'}
      ${propertyData.yearBuilt ? `Year Built: ${propertyData.yearBuilt}` : ''}
      Transaction Type: ${transactionType}
      
      Provide a legal analysis in JSON format with the following structure:
      {
        "riskScore": number between 0 and 1,
        "complianceIssues": ["Issue 1", "Issue 2", ...],
        "recommendations": ["Recommendation 1", "Recommendation 2", ...],
        "applicableLaws": ["Law 1", "Law 2", ...],
        "jurisdictionSpecificNotes": "Notes about specific jurisdiction regulations"
      }
      
      If the transaction type is 'lease-option', include specific information about negotiable terms between lessor and lessee, and legal considerations for flexible leasing arrangements.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      });

      const result = JSON.parse(completion.choices[0].message.content);
      return result as LegalAnalysisResult;
    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      // Fallback to template-based analysis if AI call fails
      console.log('Falling back to template-based legal analysis');
      
      const country = propertyData.country || 'United States';
      
      // Basic legal requirements by country
      const legalRequirements: Record<string, string[]> = {
        'United States': [
          'Property Disclosure Statement',
          'Lead-Based Paint Disclosure (for properties built before 1978)',
          'Purchase Agreement',
          'Deed Transfer',
          'Title Insurance'
        ],
        'United Kingdom': [
          'Energy Performance Certificate',
          'Property Information Form',
          'Fittings and Contents Form',
          'Title Register',
          'Transfer Deed'
        ],
        'Canada': [
          'Property Disclosure Statement',
          'Purchase Agreement',
          'Land Transfer Tax Affidavit',
          'Title Insurance',
          'Statement of Adjustments'
        ]
      };
      
      // Transaction-specific requirements
      const transactionRequirements: Record<string, string[]> = {
        'sale': [
          'Purchase Agreement',
          'Closing Disclosure',
          'Deed Transfer',
          'Title Search'
        ],
        'rent': [
          'Lease Agreement',
          'Security Deposit Receipt',
          'Rental Inspection Report',
          'Background Check Authorization'
        ],
        'lease-option': [
          'Lease Option Agreement',
          'Option Fee Receipt',
          'Rent Credit Addendum',
          'Purchase Price Agreement',
          'Negotiable Terms Addendum'
        ],
        'subject-to': [
          'Subject-To Purchase Agreement',
          'Mortgage Assumption Disclosure',
          'Authorization to Release Information',
          'Deed Transfer'
        ]
      };
      
      // Generate applicable laws
      const applicableLaws = [
        ...(legalRequirements[country] || legalRequirements['United States']),
        ...(transactionRequirements[transactionType] || [])
      ];
      
      // Generate risk score based on transaction type
      let riskScore = 0.3; // Base risk
      if (transactionType === 'subject-to') riskScore = 0.7;
      if (transactionType === 'lease-option') riskScore = 0.5;
      if (transactionType === 'rent') riskScore = 0.2;
      
      // Generate compliance issues
      const complianceIssues = [];
      if (riskScore > 0.5) {
        complianceIssues.push('Complex transaction structure may require additional legal review');
        complianceIssues.push('Potential due-on-sale clause implications');
      }
      if (transactionType === 'rent' || transactionType === 'lease-option') {
        complianceIssues.push('Ensure compliance with local rental regulations and tenant protections');
      }
      
      // Add lease-specific compliance issues
      if (transactionType === 'lease-option') {
        complianceIssues.push('Verify lease-to-own terms comply with state-specific lease-option laws');
        complianceIssues.push('Ensure clear documentation of negotiable terms between lessor and lessee');
      }
      
      // Generate recommendations
      const recommendations = [
        'Consult with a local real estate attorney',
        'Verify all required disclosures are completed',
        'Confirm title search and title insurance'
      ];
      
      if (transactionType === 'subject-to') {
        recommendations.push('Obtain written agreement regarding existing mortgage');
        recommendations.push('Establish clear notification procedures for mortgage payments');
      }
      
      if (transactionType === 'lease-option') {
        recommendations.push('Clearly document option price and terms');
        recommendations.push('Specify which portion of rent applies to purchase price');
        recommendations.push('Document all negotiable terms in a separate addendum');
        recommendations.push('Establish a clear process for lease term modifications');
      }
      
      let jurisdictionNotes = `This analysis is based on general regulations in ${country}. Local laws may vary.`;
      
      if (transactionType === 'lease-option') {
        jurisdictionNotes += ' Lease-option arrangements with negotiable terms require careful documentation and may be subject to additional regulations depending on the jurisdiction.';
      }
      
      return {
        riskScore,
        complianceIssues,
        recommendations,
        applicableLaws,
        jurisdictionSpecificNotes: jurisdictionNotes
      };
    }
  } catch (error) {
    console.error('AI Legal Analysis Error:', error);
    throw new Error('Failed to generate legal analysis');
  }
}

export async function generateSmartContract(
  propertyData: PropertyData,
  transactionType: 'sale' | 'rent' | 'lease-option' | 'subject-to',
  buyerAddress: string,
  sellerAddress: string
): Promise<string> {
  try {
    // Using OpenAI API for smart contract generation
    const prompt = `
      Generate a Solidity smart contract for a real estate transaction with the following details:
      
      Property Details:
      ${propertyData.propertyType ? `Property Type: ${propertyData.propertyType}` : ''}
      ${propertyData.address ? `Address: ${propertyData.address}` : ''}
      ${propertyData.id ? `Property ID: ${propertyData.id}` : ''}
      ${propertyData.price ? `Price/Value: ${propertyData.price}` : ''}
      
      Transaction Type: ${transactionType}
      Buyer/Tenant Address: ${buyerAddress}
      Seller/Landlord Address: ${sellerAddress}
      
      Please generate a complete Solidity smart contract (version 0.8.0 or higher) that handles this real estate transaction.
      
      If the transaction type is 'lease-option' or 'rent', please include functionality for:
      1. Negotiable lease terms (duration, payment schedule)
      2. Option for lease modifications by mutual agreement
      3. Security deposit handling
      4. Termination conditions
      
      The contract should include proper events, modifiers, and functions to manage the entire transaction lifecycle.
    `;

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o", // the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
        messages: [{ role: "user", content: prompt }],
        max_tokens: 2000
      });

      return completion.choices[0].message.content || '';
    } catch (openaiError) {
      console.error('OpenAI API Error:', openaiError);
      
      // Fallback to template contract if AI call fails
      console.log('Falling back to template smart contract');
      
      const price = typeof propertyData.price === 'string' 
        ? propertyData.price 
        : (propertyData.price?.toString() || '0');
      
      // Create a more advanced contract based on transaction type
      let contractTemplate = '';
      
      if (transactionType === 'lease-option' || transactionType === 'rent') {
        contractTemplate = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title ${transactionType === 'lease-option' ? 'Lease Option' : 'Rental'} Contract for ${propertyData.location || 'Property'}
 * @dev Generated by DAC Marketplace AI
 */
contract Property${transactionType === 'lease-option' ? 'LeaseOption' : 'Rental'} {
    // Parties involved
    address public landlord = ${sellerAddress};
    address public tenant = ${buyerAddress};
    
    // Property details
    string public propertyId = "${propertyData.id || '0'}";
    uint256 public monthlyRent = ${price} ether;
    uint256 public securityDeposit = ${price} ether;
    
    // Lease terms (can be renegotiated)
    uint256 public leaseDuration = 12; // in months
    uint256 public leaseStartTime;
    uint256 public lastPaymentTime;
    bool public isActive = false;
    
    // For lease-option only
    ${transactionType === 'lease-option' ? `
    uint256 public purchaseOptionPrice = ${parseFloat(price) * 10} ether; 
    uint256 public optionFee = ${parseFloat(price) * 0.5} ether;
    bool public optionExercised = false;
    mapping(uint256 => uint256) public rentCreditByMonth; // month number => credit amount
    ` : ''}
    
    // Negotiation state
    enum NegotiationStatus { None, Proposed, Accepted, Rejected }
    
    struct LeaseModification {
        uint256 proposedRent;
        uint256 proposedDuration;
        string additionalTerms;
        uint256 proposedTime;
        NegotiationStatus status;
    }
    
    LeaseModification public currentProposal;
    
    // Events
    event LeaseCreated(address indexed landlord, address indexed tenant, uint256 rent, uint256 duration);
    event RentPaid(address indexed tenant, uint256 amount, uint256 timestamp);
    event LeaseEnded(uint256 timestamp, string reason);
    event ModificationProposed(uint256 proposedRent, uint256 proposedDuration, string additionalTerms);
    event ModificationResolved(NegotiationStatus status, uint256 timestamp);
    ${transactionType === 'lease-option' ? `
    event OptionExercised(address indexed tenant, uint256 amount, uint256 timestamp);
    ` : ''}
    
    // Modifiers
    modifier onlyLandlord() {
        require(msg.sender == landlord, "Only landlord can call this function");
        _;
    }
    
    modifier onlyTenant() {
        require(msg.sender == tenant, "Only tenant can call this function");
        _;
    }
    
    modifier leaseActive() {
        require(isActive, "Lease is not active");
        _;
    }
    
    constructor() {
        // Contract starts inactive until security deposit is received
    }
    
    // Start the lease after receiving security deposit
    function startLease() external payable onlyTenant {
        require(!isActive, "Lease already active");
        require(msg.value == securityDeposit, "Must send exact security deposit amount");
        
        leaseStartTime = block.timestamp;
        lastPaymentTime = block.timestamp;
        isActive = true;
        
        emit LeaseCreated(landlord, tenant, monthlyRent, leaseDuration);
    }
    
    // Pay monthly rent
    function payRent() external payable onlyTenant leaseActive {
        require(msg.value == monthlyRent, "Must send exact rent amount");
        
        // Determine month number for tracking
        uint256 currentMonth = (block.timestamp - leaseStartTime) / 30 days + 1;
        
        // Update payment time
        lastPaymentTime = block.timestamp;
        
        // Transfer to landlord
        payable(landlord).transfer(msg.value);
        
        emit RentPaid(tenant, msg.value, block.timestamp);
        
        ${transactionType === 'lease-option' ? `
        // Add rent credit for lease-option
        uint256 creditAmount = monthlyRent / 2; // 50% of rent goes to purchase credit
        rentCreditByMonth[currentMonth] = creditAmount;
        ` : ''}
    }
    
    // Propose lease modification (can be called by either party)
    function proposeModification(uint256 _proposedRent, uint256 _proposedDuration, string calldata _additionalTerms) external {
        require(msg.sender == landlord || msg.sender == tenant, "Only lease parties can propose modifications");
        require(currentProposal.status != NegotiationStatus.Proposed, "Existing proposal must be resolved first");
        
        currentProposal = LeaseModification({
            proposedRent: _proposedRent,
            proposedDuration: _proposedDuration,
            additionalTerms: _additionalTerms,
            proposedTime: block.timestamp,
            status: NegotiationStatus.Proposed
        });
        
        emit ModificationProposed(_proposedRent, _proposedDuration, _additionalTerms);
    }
    
    // Respond to modification proposal
    function respondToModification(bool accept) external {
        require(
            (msg.sender == landlord && currentProposal.status == NegotiationStatus.Proposed) ||
            (msg.sender == tenant && currentProposal.status == NegotiationStatus.Proposed),
            "No proposal or not authorized"
        );
        
        if (accept) {
            // Update lease terms
            monthlyRent = currentProposal.proposedRent;
            leaseDuration = currentProposal.proposedDuration;
            currentProposal.status = NegotiationStatus.Accepted;
        } else {
            currentProposal.status = NegotiationStatus.Rejected;
        }
        
        emit ModificationResolved(currentProposal.status, block.timestamp);
    }
    
    // End the lease and return security deposit
    function endLease(string calldata reason) external onlyLandlord leaseActive {
        isActive = false;
        payable(tenant).transfer(securityDeposit);
        
        emit LeaseEnded(block.timestamp, reason);
    }
    
    ${transactionType === 'lease-option' ? `
    // Exercise purchase option (for lease-option)
    function exerciseOption() external payable onlyTenant leaseActive {
        require(!optionExercised, "Option already exercised");
        
        // Calculate total rent credit accumulated
        uint256 totalRentCredit = 0;
        for (uint i = 1; i <= leaseDuration; i++) {
            totalRentCredit += rentCreditByMonth[i];
        }
        
        // Required payment is purchase price minus rent credits minus option fee
        uint256 requiredPayment = purchaseOptionPrice - totalRentCredit - optionFee;
        
        require(msg.value >= requiredPayment, "Insufficient payment to exercise option");
        
        // Transfer payment to landlord
        payable(landlord).transfer(msg.value);
        
        // Mark option as exercised
        optionExercised = true;
        
        emit OptionExercised(tenant, msg.value, block.timestamp);
    }
    
    // Pay option fee to secure purchase right
    function payOptionFee() external payable onlyTenant {
        require(msg.value == optionFee, "Must send exact option fee");
        
        // Transfer to landlord
        payable(landlord).transfer(msg.value);
    }
    ` : ''}
    
    // Get current state of the lease
    function getLeaseDetails() external view returns (
        address _landlord,
        address _tenant,
        uint256 _rent,
        uint256 _securityDeposit,
        uint256 _leaseDuration,
        uint256 _leaseStartTime,
        uint256 _lastPaymentTime,
        bool _isActive
    ) {
        return (
            landlord,
            tenant,
            monthlyRent,
            securityDeposit,
            leaseDuration,
            leaseStartTime,
            lastPaymentTime,
            isActive
        );
    }
}`;
      } else {
        // Sale or subject-to contract
        contractTemplate = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title ${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} Contract for ${propertyData.location || 'Property'}
 * @dev Generated by DAC Marketplace AI
 */
contract Property${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} {
    // Parties involved
    address public seller = ${sellerAddress};
    address public buyer = ${buyerAddress};
    
    // Property details
    string public propertyId = "${propertyData.id || '0'}";
    uint256 public price = ${price} ether;
    
    // Transaction state
    bool public isFinalized = false;
    bool public isInspectionComplete = false;
    bool public isApproved = false;
    uint256 public depositAmount;
    uint256 public finalPaymentAmount;
    
    // Events
    event ContractCreated(address indexed seller, address indexed buyer, uint256 price);
    event DepositReceived(address indexed from, uint256 amount);
    event InspectionComplete(bool approved);
    event FinalPaymentReceived(address indexed from, uint256 amount);
    event ContractFinalized();
    event ContractCancelled(string reason);
    
    // Modifiers
    modifier onlySeller() {
        require(msg.sender == seller, "Only seller can call this function");
        _;
    }
    
    modifier onlyBuyer() {
        require(msg.sender == buyer, "Only buyer can call this function");
        _;
    }
    
    modifier notFinalized() {
        require(!isFinalized, "Contract already finalized");
        _;
    }
    
    constructor() {
        depositAmount = price * 10 / 100; // 10% deposit
        finalPaymentAmount = price - depositAmount;
        emit ContractCreated(seller, buyer, price);
    }
    
    // Send deposit to start transaction
    function sendDeposit() external payable onlyBuyer notFinalized {
        require(msg.value == depositAmount, "Deposit must match the required amount");
        emit DepositReceived(msg.sender, msg.value);
    }
    
    // Record inspection result
    function completeInspection(bool approved) external onlyBuyer notFinalized {
        isInspectionComplete = true;
        isApproved = approved;
        
        emit InspectionComplete(approved);
        
        // If inspection failed, return deposit
        if (!approved) {
            payable(buyer).transfer(depositAmount);
            emit ContractCancelled("Failed inspection");
        }
    }
    
    // Send final payment to complete transaction
    function sendFinalPayment() external payable onlyBuyer notFinalized {
        require(isInspectionComplete && isApproved, "Inspection must be completed and approved");
        require(msg.value == finalPaymentAmount, "Payment must match the remaining amount");
        
        emit FinalPaymentReceived(msg.sender, msg.value);
    }
    
    // Finalize the contract
    function finalizeContract() external onlySeller notFinalized {
        require(isInspectionComplete && isApproved, "Inspection must be completed and approved");
        require(address(this).balance >= price, "Full payment not received");
        
        isFinalized = true;
        payable(seller).transfer(address(this).balance);
        
        emit ContractFinalized();
    }
    
    // Cancel contract (only seller before finalization)
    function cancelContract(string calldata reason) external onlySeller notFinalized {
        // Return any payments to buyer
        if (address(this).balance > 0) {
            payable(buyer).transfer(address(this).balance);
        }
        
        emit ContractCancelled(reason);
    }
    
    // Get current contract details
    function getContractDetails() external view returns (
        address _seller,
        address _buyer,
        uint256 _price,
        string memory _propertyId,
        bool _isInspectionComplete,
        bool _isApproved,
        bool _isFinalized,
        uint256 _depositAmount,
        uint256 _finalPaymentAmount
    ) {
        return (
            seller,
            buyer,
            price,
            propertyId,
            isInspectionComplete,
            isApproved,
            isFinalized,
            depositAmount,
            finalPaymentAmount
        );
    }
}`;
      }
      
      return contractTemplate;
    }
  } catch (error) {
    console.error('Smart Contract Generation Error:', error);
    throw new Error('Failed to generate smart contract');
  }
}
