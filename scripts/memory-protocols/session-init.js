/**
 * Session Initialization Protocol
 * Mandatory execution sequence for loading complete context at session start
 */

const fs = require('fs');
const path = require('path');

class SessionInitializer {
  constructor() {
    this.replitMdPath = path.join(process.cwd(), 'replit.md');
    this.context = {};
  }

  /**
   * Step 1: Complete Context Load - MANDATORY
   * Cannot proceed without complete context load
   */
  async loadCompleteContext() {
    try {
      console.log('📚 Loading complete context from replit.md...');
      
      if (!fs.existsSync(this.replitMdPath)) {
        throw new Error('replit.md not found - cannot initialize session without memory system');
      }

      const content = fs.readFileSync(this.replitMdPath, 'utf8');
      
      // Parse Quick Context Index
      this.context.quickContext = this.parseSection(content, '## Quick Context Index');
      this.context.activeProblems = this.extractActiveProblems(this.context.quickContext);
      this.context.recentDecisions = this.extractRecentDecisions(this.context.quickContext);
      this.context.userContext = this.extractUserContext(this.context.quickContext);
      
      // Parse User Preference Profile
      this.context.userPreferences = this.parseSection(content, '## User Preference Profile');
      this.context.communicationStyle = this.parseSection(this.context.userPreferences, '### Communication Style');
      this.context.developmentPatterns = this.parseSection(this.context.userPreferences, '### Development Patterns');
      
      // Parse Architecture Decision Records
      this.context.adrs = this.parseADRs(content);
      
      // Parse Problem-Solution Database
      this.context.problemDatabase = this.parseSection(content, '## Problem-Solution Database');
      
      // Parse Technical Debt Index
      this.context.technicalDebt = this.parseSection(content, '## Technical Debt Index');
      
      // Parse Integration Context Map
      this.context.integrationMap = this.parseSection(content, '## Integration Context Map');
      
      // Parse Session Memory
      this.context.sessionHistory = this.parseSection(content, '## Session Memory');
      
      console.log('✅ Complete context loaded successfully');
      return true;
      
    } catch (error) {
      console.error('❌ CRITICAL: Failed to load complete context:', error.message);
      throw new Error('Session cannot proceed without complete context load');
    }
  }

  /**
   * Step 2: Semantic Request Analysis
   * Analyze user request against documented patterns
   */
  async analyzeRequest(userRequest) {
    console.log('🔍 Analyzing request against documented patterns...');
    
    const analysis = {
      requestType: this.classifyRequestType(userRequest),
      matchedPatterns: this.matchProblemPatterns(userRequest),
      potentialPitfalls: this.identifyPitfalls(userRequest),
      userPreferenceAlignment: this.checkPreferenceAlignment(userRequest),
      relatedADRs: this.findRelatedADRs(userRequest),
      technicalDebtImpact: this.assessTechnicalDebtImpact(userRequest)
    };
    
    console.log('✅ Request analysis complete');
    return analysis;
  }

  /**
   * Step 3: Context Assembly & Briefing
   * Create comprehensive understanding foundation
   */
  async assembleContextBriefing(requestAnalysis) {
    console.log('📋 Assembling comprehensive context briefing...');
    
    const briefing = {
      sessionFocus: this.context.quickContext.currentSessionFocus || 'General development assistance',
      activePriorities: this.context.activeProblems,
      relevantADRs: requestAnalysis.relatedADRs,
      applicablePatterns: requestAnalysis.matchedPatterns,
      userExpectations: {
        analysisDepth: this.context.communicationStyle?.analysisDepth || 'thorough',
        errorTolerance: this.context.communicationStyle?.errorTolerance || 'low',
        responseFormat: this.context.communicationStyle?.responseFormat || 'step-by-step',
        workflowStyle: this.context.developmentPatterns?.workflowStyle || 'comprehensive'
      },
      technicalConstraints: this.extractTechnicalConstraints(),
      knownPitfalls: requestAnalysis.potentialPitfalls,
      missingContext: this.identifyMissingContext(requestAnalysis)
    };
    
    console.log('✅ Context briefing assembled');
    return briefing;
  }

  // Helper methods for parsing and analysis
  parseSection(content, sectionHeader) {
    const regex = new RegExp(`${sectionHeader}([\\s\\S]*?)(?=\\n## |$)`, 'm');
    const match = content.match(regex);
    return match ? match[1].trim() : '';
  }

  parseADRs(content) {
    const adrRegex = /### (ADR-\d+: .+?)\n([\s\S]*?)(?=\n### |$)/g;
    const adrs = [];
    let match;
    
    while ((match = adrRegex.exec(content)) !== null) {
      adrs.push({
        title: match[1],
        content: match[2].trim()
      });
    }
    
    return adrs;
  }

  extractActiveProblems(quickContext) {
    const problemsMatch = quickContext.match(/- \*\*Active Problems\*\*:\s*([\s\S]*?)(?=- \*\*|$)/);
    if (!problemsMatch) return [];
    
    return problemsMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.trim().substring(1).trim());
  }

  extractRecentDecisions(quickContext) {
    const decisionsMatch = quickContext.match(/- \*\*Recent Decisions\*\*:\s*([\s\S]*?)(?=- \*\*|$)/);
    if (!decisionsMatch) return [];
    
    return decisionsMatch[1]
      .split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.trim().substring(1).trim());
  }

  extractUserContext(quickContext) {
    const contextMatch = quickContext.match(/- \*\*User Context\*\*:\s*(.+)/);
    return contextMatch ? contextMatch[1].trim() : '';
  }

  classifyRequestType(request) {
    const patterns = {
      'implementation': /implement|create|build|add|develop/i,
      'debugging': /fix|error|issue|problem|bug|broken/i,
      'optimization': /optimize|improve|performance|faster|better/i,
      'integration': /integrate|connect|api|service|external/i,
      'documentation': /document|explain|how|why|what/i
    };
    
    for (const [type, pattern] of Object.entries(patterns)) {
      if (pattern.test(request)) return type;
    }
    
    return 'general';
  }

  matchProblemPatterns(request) {
    // Match against Problem-Solution Database patterns
    const patterns = [];
    
    if (/performance|slow|lag|speed/i.test(request)) {
      patterns.push('Performance Issues');
    }
    
    if (/auth|login|security|session/i.test(request)) {
      patterns.push('Authentication & Security');
    }
    
    if (/blockchain|smart contract|web3|wallet/i.test(request)) {
      patterns.push('Blockchain Integration');
    }
    
    return patterns;
  }

  identifyPitfalls(request) {
    // Based on documented failed attempts and user frustration triggers
    const pitfalls = [];
    
    if (this.context.communicationStyle?.includes('technical complexity')) {
      pitfalls.push('Avoid technical jargon - use simple language');
    }
    
    if (this.context.communicationStyle?.includes('incomplete solutions')) {
      pitfalls.push('Provide complete, working solution');
    }
    
    return pitfalls;
  }

  checkPreferenceAlignment(request) {
    return {
      needsComprehensiveSolution: this.context.developmentPatterns?.includes('comprehensive'),
      requiresAuthenticData: this.context.developmentPatterns?.includes('authentic data'),
      expectsSimpleLanguage: this.context.communicationStyle?.includes('simple, everyday language')
    };
  }

  findRelatedADRs(request) {
    return this.context.adrs.filter(adr => {
      const adrText = (adr.title + ' ' + adr.content).toLowerCase();
      const requestWords = request.toLowerCase().split(/\s+/);
      
      return requestWords.some(word => 
        word.length > 3 && adrText.includes(word)
      );
    });
  }

  assessTechnicalDebtImpact(request) {
    const criticalIssues = this.context.technicalDebt.match(/### Critical Issues([\s\S]*?)(?=### |$)/);
    if (!criticalIssues) return [];
    
    return criticalIssues[1]
      .split('\n')
      .filter(line => line.trim().startsWith('1.') || line.trim().startsWith('2.') || line.trim().startsWith('3.'))
      .map(line => line.trim());
  }

  extractTechnicalConstraints() {
    return {
      framework: 'React 18 with TypeScript',
      backend: 'Express.js with Node.js',
      database: 'PostgreSQL with Drizzle ORM',
      stateManagement: 'React Query (@tanstack/react-query)',
      authentication: 'Session-based with express-session',
      blockchain: 'Polygon zkEVM deployment target'
    };
  }

  identifyMissingContext(analysis) {
    const missing = [];
    
    if (!this.context.quickContext.includes('Current Session Focus')) {
      missing.push('Session focus needs to be defined');
    }
    
    if (analysis.matchedPatterns.length === 0) {
      missing.push('Request pattern not in documented database');
    }
    
    return missing;
  }

  /**
   * Execute complete initialization protocol
   */
  async initialize(userRequest = '') {
    console.log('🚀 Starting Session Initialization Protocol...');
    
    try {
      // Step 1: MANDATORY - Complete Context Load
      await this.loadCompleteContext();
      
      // Step 2: Semantic Request Analysis (if request provided)
      let requestAnalysis = null;
      if (userRequest) {
        requestAnalysis = await this.analyzeRequest(userRequest);
      }
      
      // Step 3: Context Assembly & Briefing
      const contextBriefing = await this.assembleContextBriefing(requestAnalysis || {});
      
      console.log('✅ Session Initialization Protocol completed successfully');
      
      return {
        context: this.context,
        analysis: requestAnalysis,
        briefing: contextBriefing,
        ready: true
      };
      
    } catch (error) {
      console.error('❌ Session Initialization Protocol failed:', error.message);
      throw error;
    }
  }
}

module.exports = SessionInitializer;

// Export for direct usage
if (require.main === module) {
  const initializer = new SessionInitializer();
  const userRequest = process.argv[2] || '';
  
  initializer.initialize(userRequest)
    .then(result => {
      console.log('\n📊 Initialization Result:');
      console.log('- Context loaded:', !!result.context);
      console.log('- Request analyzed:', !!result.analysis);
      console.log('- Briefing prepared:', !!result.briefing);
      console.log('- Ready for informed response:', result.ready);
    })
    .catch(error => {
      console.error('\n❌ Initialization failed:', error.message);
      process.exit(1);
    });
}