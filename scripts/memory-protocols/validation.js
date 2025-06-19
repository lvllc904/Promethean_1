/**
 * Validation Protocol
 * Mandatory execution before major suggestions to ensure quality
 */

import fs from 'fs';
import path from 'path';
import SessionInitializer from './session-init.js';

class SolutionValidator {
  constructor() {
    this.sessionInit = new SessionInitializer();
    this.context = null;
  }

  /**
   * Step 1: Historical Conflict Check - MANDATORY
   * No conflicting or repeated approaches
   */
  async checkHistoricalConflicts(proposedSolution) {
    console.log('🔍 Checking for historical conflicts...');

    if (!this.context) {
      const initResult = await this.sessionInit.initialize();
      this.context = initResult.context;
    }

    const conflicts = {
      repeatedAttempts: this.checkRepeatedAttempts(proposedSolution),
      userPreferenceConflicts: this.checkUserPreferenceConflicts(proposedSolution),
      architecturalConflicts: this.checkArchitecturalConflicts(proposedSolution),
      failurePatternMatches: this.checkFailurePatterns(proposedSolution)
    };

    const hasConflicts = Object.values(conflicts).some(conflict => 
      Array.isArray(conflict) ? conflict.length > 0 : conflict !== null
    );

    console.log('✅ Historical conflict check complete');
    return {
      hasConflicts,
      conflicts
    };
  }

  /**
   * Step 2: Completeness Validation - MANDATORY
   * Solution must be complete and thorough
   */
  async validateCompleteness(proposedSolution) {
    console.log('📋 Validating solution completeness...');

    const completeness = {
      rootCauseAddressed: this.checkRootCauseAddressed(proposedSolution),
      allComponentsConsidered: this.checkAllComponents(proposedSolution),
      cascadeEffectsConsidered: this.checkCascadeEffects(proposedSolution),
      userThoroughnessExpectations: this.checkThoroughnessExpectations(proposedSolution)
    };

    const isComplete = Object.values(completeness).every(check => check.passed);

    console.log('✅ Completeness validation complete');
    return {
      isComplete,
      completeness
    };
  }

  /**
   * Step 3: User Satisfaction Prediction - MANDATORY
   * High probability of user satisfaction
   */
  async predictUserSatisfaction(proposedSolution) {
    console.log('😊 Predicting user satisfaction...');

    const satisfaction = {
      communicationStyleMatch: this.checkCommunicationStyle(proposedSolution),
      complexityAlignment: this.checkComplexityAlignment(proposedSolution),
      responseFormatMatch: this.checkResponseFormat(proposedSolution),
      workflowStyleMatch: this.checkWorkflowStyle(proposedSolution)
    };

    const satisfactionScore = this.calculateSatisfactionScore(satisfaction);

    console.log('✅ User satisfaction prediction complete');
    return {
      satisfactionScore,
      satisfaction,
      highProbability: satisfactionScore >= 0.8
    };
  }

  // Helper methods for conflict checking
  checkRepeatedAttempts(solution) {
    const repeatedAttempts = [];

    // Check ADRs for "Tried/Failed" entries that match current solution
    if (this.context?.adrs) {
      for (const adr of this.context.adrs) {
        const failureMatch = adr.content.match(/- \*\*Tried\/Failed\*\*: (.+)/);
        if (failureMatch && this.isSimilarApproach(failureMatch[1], solution.approach)) {
          repeatedAttempts.push({
            adr: adr.title,
            previousAttempt: failureMatch[1],
            similarity: this.calculateSimilarity(failureMatch[1], solution.approach)
          });
        }
      }
    }

    // Check session history for repeated failures
    if (this.context?.sessionHistory) {
      const failedSessions = this.extractFailedSessions(this.context.sessionHistory);
      for (const session of failedSessions) {
        if (this.isSimilarApproach(session.approach, solution.approach)) {
          repeatedAttempts.push({
            session: session.title,
            previousAttempt: session.approach,
            failure: session.outcome
          });
        }
      }
    }

    return repeatedAttempts;
  }

  checkUserPreferenceConflicts(solution) {
    const conflicts = [];

    // Check communication style preferences
    if (this.context?.communicationStyle) {
      if (this.context.communicationStyle.includes('simple, everyday language') && 
          this.hasTechnicalJargon(solution.description)) {
        conflicts.push('Solution uses technical jargon but user prefers simple language');
      }

      if (this.context.communicationStyle.includes('comprehensive solutions') && 
          this.isIncompleteApproach(solution.approach)) {
        conflicts.push('Solution is incomplete but user expects comprehensive approach');
      }
    }

    // Check development pattern preferences
    if (this.context?.developmentPatterns) {
      if (this.context.developmentPatterns.includes('authentic data') && 
          this.usesMockData(solution.implementation)) {
        conflicts.push('Solution uses mock data but user prefers authentic data');
      }

      if (this.context.developmentPatterns.includes('modular architecture') && 
          !this.isModularApproach(solution.architecture)) {
        conflicts.push('Solution lacks modular structure expected by user');
      }
    }

    return conflicts;
  }

  checkArchitecturalConflicts(solution) {
    const conflicts = [];

    // Check against established ADRs
    if (this.context?.adrs) {
      for (const adr of this.context.adrs) {
        const decision = this.extractADRDecision(adr);
        if (this.conflictsWithDecision(solution, decision)) {
          conflicts.push({
            adr: adr.title,
            decision: decision,
            conflict: this.describeConflict(solution, decision)
          });
        }
      }
    }

    return conflicts;
  }

  checkFailurePatterns(solution) {
    const patterns = [];

    // Check Problem-Solution Database for known failure patterns
    const knownFailures = [
      'incomplete solutions',
      'repeated mistakes',
      'technical complexity',
      'missing error handling',
      'insufficient testing'
    ];

    for (const failurePattern of knownFailures) {
      if (this.matchesFailurePattern(solution, failurePattern)) {
        patterns.push({
          pattern: failurePattern,
          risk: 'High',
          recommendation: this.getFailureAvoidanceRecommendation(failurePattern)
        });
      }
    }

    return patterns;
  }

  // Helper methods for completeness validation
  checkRootCauseAddressed(solution) {
    const rootCauseKeywords = ['root cause', 'underlying issue', 'fundamental problem'];
    const hasRootCauseAnalysis = rootCauseKeywords.some(keyword => 
      solution.description?.toLowerCase().includes(keyword)
    );

    return {
      passed: hasRootCauseAnalysis,
      details: hasRootCauseAnalysis ? 'Root cause analysis included' : 'Missing root cause analysis'
    };
  }

  checkAllComponents(solution) {
    const requiredComponents = [
      'frontend changes',
      'backend changes', 
      'database updates',
      'testing approach',
      'deployment considerations'
    ];

    const coveredComponents = requiredComponents.filter(component => 
      this.mentionsComponent(solution, component)
    );

    return {
      passed: coveredComponents.length >= 3, // At least 3 components should be considered
      details: `Covered ${coveredComponents.length}/${requiredComponents.length} components: ${coveredComponents.join(', ')}`
    };
  }

  checkCascadeEffects(solution) {
    const cascadeIndicators = [
      'impact on',
      'affects',
      'related systems',
      'dependencies',
      'side effects'
    ];

    const hasCascadeConsideration = cascadeIndicators.some(indicator =>
      solution.description?.toLowerCase().includes(indicator)
    );

    return {
      passed: hasCascadeConsideration,
      details: hasCascadeConsideration ? 'Cascade effects considered' : 'Missing cascade effect analysis'
    };
  }

  checkThoroughnessExpectations(solution) {
    const thoroughnessIndicators = [
      'comprehensive',
      'detailed analysis',
      'step-by-step',
      'complete implementation',
      'thorough testing'
    ];

    const thoroughnessScore = thoroughnessIndicators.reduce((score, indicator) => {
      return solution.description?.toLowerCase().includes(indicator) ? score + 1 : score;
    }, 0);

    return {
      passed: thoroughnessScore >= 2, // At least 2 thoroughness indicators
      details: `Thoroughness score: ${thoroughnessScore}/${thoroughnessIndicators.length}`
    };
  }

  // Helper methods for satisfaction prediction
  checkCommunicationStyle(solution) {
    const userExpectsSimpleLanguage = this.context?.communicationStyle?.includes('simple, everyday language');
    const solutionUsesSimpleLanguage = !this.hasTechnicalJargon(solution.description);

    return {
      match: !userExpectsSimpleLanguage || solutionUsesSimpleLanguage,
      details: userExpectsSimpleLanguage ? 
        (solutionUsesSimpleLanguage ? 'Uses appropriate simple language' : 'Contains technical jargon') :
        'Technical language acceptable'
    };
  }

  checkComplexityAlignment(solution) {
    const userErrorTolerance = this.context?.communicationStyle?.includes('low') ? 'low' : 'medium';
    const solutionComplexity = this.assessSolutionComplexity(solution);

    const aligned = (userErrorTolerance === 'low' && solutionComplexity === 'simple') ||
                   (userErrorTolerance === 'medium' && ['simple', 'moderate'].includes(solutionComplexity));

    return {
      match: aligned,
      details: `User tolerance: ${userErrorTolerance}, Solution complexity: ${solutionComplexity}`
    };
  }

  checkResponseFormat(solution) {
    const userExpectsStepByStep = this.context?.communicationStyle?.includes('step-by-step');
    const solutionHasSteps = this.hasStepByStepFormat(solution.description);

    return {
      match: !userExpectsStepByStep || solutionHasSteps,
      details: userExpectsStepByStep ?
        (solutionHasSteps ? 'Includes step-by-step format' : 'Missing step-by-step format') :
        'Format flexibility acceptable'
    };
  }

  checkWorkflowStyle(solution) {
    const userExpectsComprehensive = this.context?.developmentPatterns?.includes('comprehensive');
    const solutionIsComprehensive = this.isComprehensiveSolution(solution);

    return {
      match: !userExpectsComprehensive || solutionIsComprehensive,
      details: userExpectsComprehensive ?
        (solutionIsComprehensive ? 'Comprehensive solution provided' : 'Solution lacks comprehensiveness') :
        'Comprehensive approach not required'
    };
  }

  calculateSatisfactionScore(satisfaction) {
    const weights = {
      communicationStyleMatch: 0.3,
      complexityAlignment: 0.25,
      responseFormatMatch: 0.2,
      workflowStyleMatch: 0.25
    };

    let score = 0;
    for (const [aspect, weight] of Object.entries(weights)) {
      if (satisfaction[aspect]?.match) {
        score += weight;
      }
    }

    return score;
  }

  // Utility methods
  isSimilarApproach(approach1, approach2) {
    if (!approach1 || !approach2) return false;
    
    const words1 = approach1.toLowerCase().split(/\s+/);
    const words2 = approach2.toLowerCase().split(/\s+/);
    
    const commonWords = words1.filter(word => 
      word.length > 3 && words2.includes(word)
    );
    
    return commonWords.length >= 2; // At least 2 common significant words
  }

  calculateSimilarity(text1, text2) {
    if (!text1 || !text2) return 0;
    
    const words1 = new Set(text1.toLowerCase().split(/\s+/));
    const words2 = new Set(text2.toLowerCase().split(/\s+/));
    
    const intersection = new Set([...words1].filter(word => words2.has(word)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size; // Jaccard similarity
  }

  extractFailedSessions(sessionHistory) {
    const sessions = [];
    const sessionEntries = sessionHistory.split('###').slice(1);
    
    for (const entry of sessionEntries) {
      const satisfactionMatch = entry.match(/- \*\*User Satisfaction\*\*: (.+)/);
      if (satisfactionMatch && this.isNegativeFeedback(satisfactionMatch[1])) {
        sessions.push({
          title: this.extractSessionTitle(entry),
          approach: this.extractSessionApproach(entry),
          outcome: satisfactionMatch[1]
        });
      }
    }
    
    return sessions;
  }

  hasTechnicalJargon(text) {
    if (!text) return false;
    
    const technicalTerms = [
      'api', 'database', 'framework', 'middleware', 'orm', 'query',
      'authentication', 'authorization', 'jwt', 'session', 'crud',
      'typescript', 'javascript', 'react', 'express', 'drizzle'
    ];
    
    const textLower = text.toLowerCase();
    return technicalTerms.some(term => textLower.includes(term));
  }

  isIncompleteApproach(approach) {
    if (!approach) return true;
    
    const completenessIndicators = [
      'complete', 'comprehensive', 'full', 'entire', 'thorough'
    ];
    
    return !completenessIndicators.some(indicator => 
      approach.toLowerCase().includes(indicator)
    );
  }

  usesMockData(implementation) {
    if (!implementation) return false;
    
    const mockDataIndicators = [
      'mock', 'placeholder', 'fake', 'dummy', 'sample', 'test data'
    ];
    
    const implLower = implementation.toLowerCase();
    return mockDataIndicators.some(indicator => implLower.includes(indicator));
  }

  isModularApproach(architecture) {
    if (!architecture) return false;
    
    const modularIndicators = [
      'modular', 'component', 'service', 'module', 'separation of concerns'
    ];
    
    const archLower = architecture.toLowerCase();
    return modularIndicators.some(indicator => archLower.includes(indicator));
  }

  extractADRDecision(adr) {
    const decisionMatch = adr.content.match(/- \*\*Decision\*\*: (.+)/);
    return decisionMatch ? decisionMatch[1] : '';
  }

  conflictsWithDecision(solution, decision) {
    if (!decision || !solution.approach) return false;
    
    // Check for direct conflicts with established architectural decisions
    const decisionLower = decision.toLowerCase();
    const solutionLower = solution.approach.toLowerCase();
    
    // Example conflicts
    if (decisionLower.includes('react query') && solutionLower.includes('redux')) {
      return true;
    }
    
    if (decisionLower.includes('session-based') && solutionLower.includes('jwt')) {
      return true;
    }
    
    return false;
  }

  describeConflict(solution, decision) {
    return `Solution approach conflicts with established decision: ${decision}`;
  }

  matchesFailurePattern(solution, pattern) {
    const solutionText = (solution.description + ' ' + solution.approach).toLowerCase();
    
    const patternChecks = {
      'incomplete solutions': () => this.isIncompleteApproach(solution.approach),
      'repeated mistakes': () => false, // Checked separately in historical conflicts
      'technical complexity': () => this.hasTechnicalJargon(solution.description),
      'missing error handling': () => !solutionText.includes('error') && !solutionText.includes('exception'),
      'insufficient testing': () => !solutionText.includes('test') && !solutionText.includes('validation')
    };
    
    return patternChecks[pattern] ? patternChecks[pattern]() : false;
  }

  getFailureAvoidanceRecommendation(pattern) {
    const recommendations = {
      'incomplete solutions': 'Ensure all components and dependencies are addressed',
      'technical complexity': 'Use simple, everyday language in explanations',
      'missing error handling': 'Include comprehensive error handling and validation',
      'insufficient testing': 'Add testing strategy and validation steps'
    };
    
    return recommendations[pattern] || 'Review and improve solution approach';
  }

  mentionsComponent(solution, component) {
    const solutionText = (solution.description + ' ' + solution.implementation).toLowerCase();
    const componentKeywords = {
      'frontend changes': ['frontend', 'client', 'react', 'ui', 'component'],
      'backend changes': ['backend', 'server', 'api', 'express', 'route'],
      'database updates': ['database', 'db', 'schema', 'migration', 'drizzle'],
      'testing approach': ['test', 'testing', 'validation', 'verify'],
      'deployment considerations': ['deploy', 'deployment', 'production', 'build']
    };
    
    const keywords = componentKeywords[component] || [];
    return keywords.some(keyword => solutionText.includes(keyword));
  }

  assessSolutionComplexity(solution) {
    const complexityFactors = [
      'multiple services',
      'complex integration',
      'advanced patterns',
      'microservices',
      'distributed system'
    ];
    
    const solutionText = (solution.description + ' ' + solution.approach).toLowerCase();
    const complexityScore = complexityFactors.reduce((score, factor) => {
      return solutionText.includes(factor) ? score + 1 : score;
    }, 0);
    
    if (complexityScore >= 3) return 'complex';
    if (complexityScore >= 1) return 'moderate';
    return 'simple';
  }

  hasStepByStepFormat(text) {
    if (!text) return false;
    
    const stepIndicators = [
      'step 1', 'step 2', 'first,', 'second,', 'then,', 'next,', 'finally,'
    ];
    
    const textLower = text.toLowerCase();
    return stepIndicators.some(indicator => textLower.includes(indicator));
  }

  isComprehensiveSolution(solution) {
    const comprehensivenessFactors = [
      'complete implementation',
      'all components',
      'full solution',
      'comprehensive approach',
      'end-to-end'
    ];
    
    const solutionText = (solution.description + ' ' + solution.approach).toLowerCase();
    return comprehensivenessFactors.some(factor => solutionText.includes(factor));
  }

  isNegativeFeedback(feedback) {
    const negativeIndicators = [
      'frustrated', 'disappointed', 'not working', 'failed', 'incomplete',
      'confusing', 'unclear', 'too complex', 'annoying'
    ];
    
    const feedbackLower = feedback.toLowerCase();
    return negativeIndicators.some(indicator => feedbackLower.includes(indicator));
  }

  extractSessionTitle(entry) {
    const titleMatch = entry.match(/^(.+?) -/);
    return titleMatch ? titleMatch[1].trim() : 'Unknown Session';
  }

  extractSessionApproach(entry) {
    const approachMatch = entry.match(/- \*\*Approach\*\*: (.+)/);
    return approachMatch ? approachMatch[1] : '';
  }

  /**
   * Execute complete validation protocol
   */
  async validate(proposedSolution) {
    console.log('🚀 Starting Solution Validation Protocol...');

    try {
      // Step 1: MANDATORY - Historical Conflict Check
      const conflictCheck = await this.checkHistoricalConflicts(proposedSolution);

      // Step 2: MANDATORY - Completeness Validation
      const completenessCheck = await this.validateCompleteness(proposedSolution);

      // Step 3: MANDATORY - User Satisfaction Prediction
      const satisfactionCheck = await this.predictUserSatisfaction(proposedSolution);

      // Overall validation result
      const isValid = !conflictCheck.hasConflicts && 
                     completenessCheck.isComplete && 
                     satisfactionCheck.highProbability;

      console.log('✅ Solution Validation Protocol completed successfully');

      return {
        isValid,
        conflictCheck,
        completenessCheck,
        satisfactionCheck,
        ready: isValid
      };

    } catch (error) {
      console.error('❌ Solution Validation Protocol failed:', error.message);
      throw error;
    }
  }
}

export default SolutionValidator;

// Direct execution capability
if (import.meta.url === `file://${process.argv[1]}`) {
  const validator = new SolutionValidator();
  
  // Example solution for testing
  const proposedSolution = {
    description: 'Comprehensive solution using React Query for performance optimization with step-by-step implementation',
    approach: 'Complete implementation with modular architecture and thorough testing',
    implementation: 'Full end-to-end solution with error handling and validation',
    architecture: 'Modular component-based architecture with separation of concerns'
  };

  validator.validate(proposedSolution)
    .then(result => {
      console.log('\n📊 Validation Result:');
      console.log('- No historical conflicts:', !result.conflictCheck.hasConflicts);
      console.log('- Solution complete:', result.completenessCheck.isComplete);
      console.log('- High satisfaction probability:', result.satisfactionCheck.highProbability);
      console.log('- Overall validation passed:', result.isValid);
      console.log('- Ready for implementation:', result.ready);
    })
    .catch(error => {
      console.error('\n❌ Validation failed:', error.message);
      process.exit(1);
    });
}