/**
 * Problem Analysis Protocol
 * Mandatory execution before suggesting solutions
 */

import fs from 'fs';
import path from 'path';
import SessionInitializer from './session-init.js';

class ProblemAnalyzer {
  constructor() {
    this.sessionInit = new SessionInitializer();
    this.context = null;
  }

  /**
   * Step 1: Historical Pattern Recognition - MANDATORY
   * Must understand historical context before proceeding
   */
  async recognizeHistoricalPatterns(problem) {
    console.log('🔍 Analyzing historical patterns for problem...');
    
    if (!this.context) {
      const initResult = await this.sessionInit.initialize();
      this.context = initResult.context;
    }

    const patterns = {
      similarIssues: this.findSimilarIssues(problem),
      documentedFailures: this.findDocumentedFailures(problem),
      successfulApproaches: this.findSuccessfulApproaches(problem),
      userFeedbackHistory: this.findUserFeedbackHistory(problem)
    };

    console.log('✅ Historical pattern recognition complete');
    return patterns;
  }

  /**
   * Step 2: Constraint & Preference Validation - MANDATORY
   * Must align with user preferences and constraints
   */
  async validateConstraintsAndPreferences(problem, patterns) {
    console.log('⚖️ Validating constraints and preferences...');

    const validation = {
      architecturalLimitations: this.checkArchitecturalLimitations(problem),
      userPreferenceAlignment: this.checkUserPreferences(problem),
      integrationConstraints: this.checkIntegrationConstraints(problem),
      technicalDebtImpact: this.assessTechnicalDebtImpact(problem)
    };

    console.log('✅ Constraint and preference validation complete');
    return validation;
  }

  /**
   * Step 3: Comprehensive Solution Development - MANDATORY
   * Must be comprehensive and context-aware
   */
  async developComprehensiveSolution(problem, patterns, validation) {
    console.log('🔧 Developing comprehensive solution...');

    const solution = {
      rootCauseAnalysis: this.analyzeRootCause(problem, patterns),
      solutionApproach: this.designSolutionApproach(problem, patterns, validation),
      implementationPlan: this.createImplementationPlan(problem, validation),
      riskMitigation: this.identifyRiskMitigation(problem, patterns),
      successMetrics: this.defineSuccessMetrics(problem),
      userAlignmentCheck: this.validateUserAlignment(validation)
    };

    console.log('✅ Comprehensive solution development complete');
    return solution;
  }

  // Helper methods for pattern recognition
  findSimilarIssues(problem) {
    const problemLower = problem.toLowerCase();
    const similar = [];

    // Check Problem-Solution Database
    const problemTypes = ['Performance Issues', 'Authentication & Security', 'Blockchain Integration'];
    
    for (const type of problemTypes) {
      if (this.matchesProblemType(problemLower, type)) {
        similar.push({
          type,
          rootCauses: this.getRootCauses(type),
          solutionApproaches: this.getSolutionApproaches(type),
          userImpact: this.getUserImpact(type)
        });
      }
    }

    return similar;
  }

  findDocumentedFailures(problem) {
    const failures = [];
    
    // Check ADRs for "Tried/Failed" entries
    if (this.context?.adrs) {
      for (const adr of this.context.adrs) {
        const failureMatch = adr.content.match(/- \*\*Tried\/Failed\*\*: (.+)/);
        if (failureMatch && this.isRelatedToProblem(failureMatch[1], problem)) {
          failures.push({
            adr: adr.title,
            failure: failureMatch[1],
            context: this.extractADRContext(adr)
          });
        }
      }
    }

    return failures;
  }

  findSuccessfulApproaches(problem) {
    const successful = [];
    
    // Check ADRs for successful implementations
    if (this.context?.adrs) {
      for (const adr of this.context.adrs) {
        const consequencesMatch = adr.content.match(/- \*\*Consequences\*\*: (.+)/);
        const feedbackMatch = adr.content.match(/- \*\*User Feedback\*\*: (.+)/);
        
        if (consequencesMatch && feedbackMatch && 
            this.isRelatedToProblem(adr.content, problem) &&
            this.isPositiveFeedback(feedbackMatch[1])) {
          successful.push({
            adr: adr.title,
            approach: this.extractADRApproach(adr),
            consequences: consequencesMatch[1],
            userFeedback: feedbackMatch[1]
          });
        }
      }
    }

    return successful;
  }

  findUserFeedbackHistory(problem) {
    const feedback = [];
    
    // Extract user feedback from session memory and ADRs
    if (this.context?.sessionHistory) {
      const sessionEntries = this.context.sessionHistory.split('###').slice(1);
      
      for (const entry of sessionEntries) {
        const satisfactionMatch = entry.match(/- \*\*User Satisfaction\*\*: (.+)/);
        if (satisfactionMatch && this.isRelatedToProblem(entry, problem)) {
          feedback.push({
            session: this.extractSessionTitle(entry),
            satisfaction: satisfactionMatch[1],
            context: this.extractSessionContext(entry)
          });
        }
      }
    }

    return feedback;
  }

  // Helper methods for constraint validation
  checkArchitecturalLimitations(problem) {
    const limitations = [];
    
    // Check against established architecture
    const architecture = {
      frontend: 'React 18 with TypeScript',
      backend: 'Express.js with Node.js',
      database: 'PostgreSQL with Drizzle ORM',
      stateManagement: 'React Query',
      authentication: 'Session-based',
      blockchain: 'Polygon zkEVM'
    };

    // Validate problem doesn't conflict with architectural decisions
    if (problem.toLowerCase().includes('redux') && architecture.stateManagement === 'React Query') {
      limitations.push('ADR-001: React Query already chosen over Redux for state management');
    }

    if (problem.toLowerCase().includes('jwt') && architecture.authentication === 'Session-based') {
      limitations.push('ADR-003: Session-based auth already chosen over JWT');
    }

    return limitations;
  }

  checkUserPreferences(problem) {
    const preferences = {
      analysisDepth: 'thorough',
      errorTolerance: 'low',
      technicalLanguage: 'simple',
      responseFormat: 'step-by-step',
      workflowStyle: 'comprehensive',
      dataPhilosophy: 'authentic',
      codeArchitecture: 'modular'
    };

    const alignment = {
      needsComprehensiveSolution: preferences.workflowStyle === 'comprehensive',
      requiresSimpleLanguage: preferences.technicalLanguage === 'simple',
      expectsLowErrorTolerance: preferences.errorTolerance === 'low',
      requiresAuthenticData: preferences.dataPhilosophy === 'authentic',
      needsModularArchitecture: preferences.codeArchitecture === 'modular'
    };

    return alignment;
  }

  checkIntegrationConstraints(problem) {
    const constraints = [];
    
    // Check Technical Debt Index for integration conflicts
    const criticalIssues = [
      'Missing Blockchain Deployment Config',
      'Incomplete Payment Integration',
      'Admin Panel Performance'
    ];

    for (const issue of criticalIssues) {
      if (this.isRelatedToProblem(issue, problem)) {
        constraints.push({
          issue,
          impact: 'High',
          requiresResolution: true
        });
      }
    }

    return constraints;
  }

  assessTechnicalDebtImpact(problem) {
    const impacts = [];
    
    // Check if problem relates to existing technical debt
    const debtCategories = [
      'Critical Issues',
      'Integration Conflicts', 
      'Performance Issues',
      'Code Quality',
      'Documentation Gaps'
    ];

    for (const category of debtCategories) {
      if (this.isRelatedToProblem(category, problem)) {
        impacts.push({
          category,
          priority: this.getDebtPriority(category),
          resolution: this.getDebtResolution(category)
        });
      }
    }

    return impacts;
  }

  // Helper methods for solution development
  analyzeRootCause(problem, patterns) {
    const rootCauses = [];
    
    // Analyze based on similar issues
    for (const similar of patterns.similarIssues) {
      rootCauses.push(...similar.rootCauses);
    }

    // Add problem-specific root cause analysis
    if (problem.toLowerCase().includes('performance')) {
      rootCauses.push('Inefficient rendering', 'Unoptimized queries', 'Large data sets');
    }

    if (problem.toLowerCase().includes('auth')) {
      rootCauses.push('Session configuration', 'Security vulnerabilities', 'User experience issues');
    }

    return [...new Set(rootCauses)]; // Remove duplicates
  }

  designSolutionApproach(problem, patterns, validation) {
    const approach = {
      strategy: this.selectStrategy(problem, patterns),
      implementation: this.selectImplementation(problem, validation),
      testing: this.selectTesting(problem),
      deployment: this.selectDeployment(problem)
    };

    return approach;
  }

  createImplementationPlan(problem, validation) {
    const plan = {
      phases: this.createImplementationPhases(problem),
      timeline: this.estimateTimeline(problem),
      resources: this.identifyResources(problem),
      dependencies: this.identifyDependencies(problem, validation)
    };

    return plan;
  }

  identifyRiskMitigation(problem, patterns) {
    const risks = [];
    
    // Learn from documented failures
    for (const failure of patterns.documentedFailures) {
      risks.push({
        risk: `Similar to ${failure.adr}`,
        mitigation: `Avoid: ${failure.failure}`,
        prevention: this.createPreventionStrategy(failure)
      });
    }

    return risks;
  }

  defineSuccessMetrics(problem) {
    const metrics = [];
    
    if (problem.toLowerCase().includes('performance')) {
      metrics.push('Load time reduction', 'Memory usage optimization', 'User satisfaction scores');
    }

    if (problem.toLowerCase().includes('auth')) {
      metrics.push('Security audit passing', 'User login success rate', 'Session stability');
    }

    return metrics;
  }

  validateUserAlignment(validation) {
    const alignment = {
      comprehensiveSolution: validation.userPreferenceAlignment.needsComprehensiveSolution,
      simpleLanguage: validation.userPreferenceAlignment.requiresSimpleLanguage,
      authenticData: validation.userPreferenceAlignment.requiresAuthenticData,
      lowErrorTolerance: validation.userPreferenceAlignment.expectsLowErrorTolerance
    };

    return alignment;
  }

  // Utility methods
  matchesProblemType(problemText, type) {
    const typePatterns = {
      'Performance Issues': /performance|slow|lag|speed|optimize/i,
      'Authentication & Security': /auth|login|security|session|password/i,
      'Blockchain Integration': /blockchain|smart contract|web3|wallet|token/i
    };

    return typePatterns[type]?.test(problemText) || false;
  }

  getRootCauses(type) {
    const rootCauses = {
      'Performance Issues': ['Missing memoization', 'Inefficient queries', 'Large data sets'],
      'Authentication & Security': ['Session configuration', 'CSRF protection', 'Weak passwords'],
      'Blockchain Integration': ['Network configuration', 'Gas optimization', 'Contract upgrades']
    };

    return rootCauses[type] || [];
  }

  getSolutionApproaches(type) {
    const approaches = {
      'Performance Issues': ['React Query optimization', 'Database indexing', 'Virtual scrolling'],
      'Authentication & Security': ['Express-session security', 'MFA implementation', 'Rate limiting'],
      'Blockchain Integration': ['Multi-network deployment', 'Proxy patterns', 'Thorough testing']
    };

    return approaches[type] || [];
  }

  getUserImpact(type) {
    const impacts = {
      'Performance Issues': 'High - directly affects user experience',
      'Authentication & Security': 'Critical - affects platform trust',
      'Blockchain Integration': 'High - affects core functionality'
    };

    return impacts[type] || 'Medium';
  }

  isRelatedToProblem(text, problem) {
    const problemWords = problem.toLowerCase().split(/\s+/).filter(word => word.length > 3);
    const textLower = text.toLowerCase();
    
    return problemWords.some(word => textLower.includes(word));
  }

  isPositiveFeedback(feedback) {
    const positiveWords = ['positive', 'satisfied', 'approved', 'excited', 'happy', 'good'];
    const feedbackLower = feedback.toLowerCase();
    
    return positiveWords.some(word => feedbackLower.includes(word));
  }

  extractADRContext(adr) {
    const contextMatch = adr.content.match(/- \*\*Context\*\*: (.+)/);
    return contextMatch ? contextMatch[1] : '';
  }

  extractADRApproach(adr) {
    const implementationMatch = adr.content.match(/- \*\*Implementation\*\*: (.+)/);
    return implementationMatch ? implementationMatch[1] : '';
  }

  extractSessionTitle(entry) {
    const titleMatch = entry.match(/^(.+?) -/);
    return titleMatch ? titleMatch[1].trim() : 'Unknown Session';
  }

  extractSessionContext(entry) {
    const contextMatch = entry.match(/- \*\*Context\*\*: (.+)/);
    return contextMatch ? contextMatch[1] : '';
  }

  getDebtPriority(category) {
    const priorities = {
      'Critical Issues': 'High',
      'Integration Conflicts': 'Medium',
      'Performance Issues': 'High',
      'Code Quality': 'Medium',
      'Documentation Gaps': 'Low'
    };

    return priorities[category] || 'Medium';
  }

  getDebtResolution(category) {
    const resolutions = {
      'Critical Issues': 'Immediate attention required',
      'Integration Conflicts': 'Coordinate with affected systems',
      'Performance Issues': 'Optimize and measure',
      'Code Quality': 'Refactor incrementally',
      'Documentation Gaps': 'Document as you go'
    };

    return resolutions[category] || 'Address when possible';
  }

  selectStrategy(problem, patterns) {
    // Select strategy based on successful patterns
    if (patterns.successfulApproaches.length > 0) {
      return `Build on successful approach: ${patterns.successfulApproaches[0].approach}`;
    }

    return 'Implement comprehensive solution with full context awareness';
  }

  selectImplementation(problem, validation) {
    const implementation = [];

    if (validation.userPreferenceAlignment.needsComprehensiveSolution) {
      implementation.push('Complete solution delivery');
    }

    if (validation.userPreferenceAlignment.requiresAuthenticData) {
      implementation.push('Use only authentic data sources');
    }

    if (validation.userPreferenceAlignment.needsModularArchitecture) {
      implementation.push('Maintain modular structure');
    }

    return implementation;
  }

  selectTesting(problem) {
    return ['Functional testing through actual usage', 'Integration testing', 'Performance validation'];
  }

  selectDeployment(problem) {
    return ['Replit workflow deployment', 'Hot reload development', 'Production readiness check'];
  }

  createImplementationPhases(problem) {
    return [
      'Analysis and planning',
      'Core implementation',
      'Integration and testing',
      'Deployment and validation'
    ];
  }

  estimateTimeline(problem) {
    const complexity = problem.toLowerCase().includes('complex') ? 'High' : 'Medium';
    return complexity === 'High' ? 'Extended session (up to 1 hour)' : 'Standard session (30 minutes)';
  }

  identifyResources(problem) {
    return ['Existing codebase', 'Documentation', 'API references', 'User preferences'];
  }

  identifyDependencies(problem, validation) {
    const dependencies = [];

    for (const constraint of validation.integrationConstraints) {
      if (constraint.requiresResolution) {
        dependencies.push(constraint.issue);
      }
    }

    return dependencies;
  }

  createPreventionStrategy(failure) {
    return `Implement validation and testing to prevent: ${failure.failure}`;
  }

  /**
   * Execute complete problem analysis protocol
   */
  async analyze(problem) {
    console.log('🚀 Starting Problem Analysis Protocol...');

    try {
      // Step 1: MANDATORY - Historical Pattern Recognition
      const patterns = await this.recognizeHistoricalPatterns(problem);

      // Step 2: MANDATORY - Constraint & Preference Validation
      const validation = await this.validateConstraintsAndPreferences(problem, patterns);

      // Step 3: MANDATORY - Comprehensive Solution Development
      const solution = await this.developComprehensiveSolution(problem, patterns, validation);

      console.log('✅ Problem Analysis Protocol completed successfully');

      return {
        patterns,
        validation,
        solution,
        ready: true
      };

    } catch (error) {
      console.error('❌ Problem Analysis Protocol failed:', error.message);
      throw error;
    }
  }
}

export default ProblemAnalyzer;

// Direct execution capability
if (import.meta.url === `file://${process.argv[1]}`) {
  const analyzer = new ProblemAnalyzer();
  const problem = process.argv[2] || 'performance optimization';

  analyzer.analyze(problem)
    .then(result => {
      console.log('\n📊 Analysis Result:');
      console.log('- Patterns recognized:', result.patterns.similarIssues.length);
      console.log('- Constraints validated:', !!result.validation);
      console.log('- Solution developed:', !!result.solution);
      console.log('- Ready for implementation:', result.ready);
    })
    .catch(error => {
      console.error('\n❌ Analysis failed:', error.message);
      process.exit(1);
    });
}