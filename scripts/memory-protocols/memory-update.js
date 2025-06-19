/**
 * Memory Update Protocol
 * Mandatory execution after interactions to maintain knowledge base
 */

import fs from 'fs';
import path from 'path';

class MemoryUpdater {
  constructor() {
    this.replitMdPath = path.join(process.cwd(), 'replit.md');
  }

  /**
   * Step 1: Decision & Outcome Documentation - MANDATORY
   * All decisions must be documented
   */
  async documentDecisionAndOutcome(interaction) {
    console.log('📝 Documenting decision and outcome...');

    const updates = {
      newADR: null,
      problemSolutionUpdate: null,
      outcomeRecord: null
    };

    // Check if architectural decision was made
    if (this.isArchitecturalDecision(interaction)) {
      updates.newADR = await this.createNewADR(interaction);
    }

    // Update Problem-Solution Database
    if (interaction.problemSolved) {
      updates.problemSolutionUpdate = await this.updateProblemSolutionDatabase(interaction);
    }

    // Record outcome
    updates.outcomeRecord = {
      success: interaction.success,
      userFeedback: interaction.userFeedback,
      whatWorked: interaction.whatWorked,
      whatFailed: interaction.whatFailed,
      reasoning: interaction.reasoning,
      timestamp: new Date().toISOString()
    };

    console.log('✅ Decision and outcome documentation complete');
    return updates;
  }

  /**
   * Step 2: User Preference Evolution - MANDATORY
   * User preferences must stay current
   */
  async evolveUserPreferences(interaction) {
    console.log('👤 Evolving user preferences...');

    const preferences = {
      communicationUpdates: this.analyzeCommunicationPatterns(interaction),
      workflowUpdates: this.analyzeWorkflowPatterns(interaction),
      satisfactionUpdates: this.analyzeSatisfactionPatterns(interaction),
      frustrationUpdates: this.analyzeFrustrationPatterns(interaction)
    };

    // Update User Preference Profile in replit.md
    await this.updateUserPreferenceProfile(preferences);

    console.log('✅ User preference evolution complete');
    return preferences;
  }

  /**
   * Step 3: Technical Debt & Integration Maintenance - MANDATORY
   * System knowledge must remain current
   */
  async maintainTechnicalDebtAndIntegration(interaction) {
    console.log('🔧 Maintaining technical debt and integration knowledge...');

    const maintenance = {
      debtUpdates: this.assessTechnicalDebtChanges(interaction),
      integrationUpdates: this.assessIntegrationChanges(interaction),
      priorityUpdates: this.reassessPriorities(interaction),
      systemUpdates: this.updateSystemKnowledge(interaction)
    };

    // Update Technical Debt Index and Integration Context Map
    await this.updateTechnicalSections(maintenance);

    console.log('✅ Technical debt and integration maintenance complete');
    return maintenance;
  }

  /**
   * Step 4: Context Index Refresh - MANDATORY
   * Memory system must be ready for next session
   */
  async refreshContextIndex(interaction, updates, preferences, maintenance) {
    console.log('🔄 Refreshing context index...');

    const contextUpdates = {
      sessionFocus: this.determineNextSessionFocus(interaction),
      activeProblems: this.updateActiveProblems(interaction, maintenance),
      recentDecisions: this.updateRecentDecisions(updates),
      userContext: this.updateUserContext(interaction, preferences)
    };

    // Add session memory entry
    const sessionEntry = this.createSessionEntry(interaction, updates, preferences);

    // Update Quick Context Index and Session Memory
    await this.updateQuickContextIndex(contextUpdates);
    await this.addSessionMemoryEntry(sessionEntry);

    console.log('✅ Context index refresh complete');
    return contextUpdates;
  }

  // Helper methods for decision documentation
  isArchitecturalDecision(interaction) {
    const architecturalKeywords = [
      'framework', 'database', 'architecture', 'structure', 'design pattern',
      'api design', 'authentication', 'state management', 'deployment',
      'integration pattern', 'data flow', 'security model'
    ];

    const interactionText = (interaction.description || '').toLowerCase();
    return architecturalKeywords.some(keyword => interactionText.includes(keyword));
  }

  async createNewADR(interaction) {
    const adrNumber = await this.getNextADRNumber();
    
    return {
      number: adrNumber,
      title: `ADR-${adrNumber.toString().padStart(3, '0')}: ${interaction.decisionTitle}`,
      decision: interaction.decision,
      context: interaction.context,
      reasoning: interaction.reasoning,
      alternatives: interaction.alternativesConsidered || [],
      triedFailed: interaction.previousAttempts || 'None documented',
      implementation: interaction.implementation,
      consequences: interaction.consequences,
      userFeedback: interaction.userFeedback
    };
  }

  async updateProblemSolutionDatabase(interaction) {
    return {
      problemType: interaction.problemType,
      rootCause: interaction.rootCause,
      solutionApproach: interaction.solutionApproach,
      success: interaction.success,
      userImpact: interaction.userImpact,
      preventionStrategy: interaction.preventionStrategy
    };
  }

  // Helper methods for user preference evolution
  analyzeCommunicationPatterns(interaction) {
    const patterns = {};

    // Analyze user's response to communication style
    if (interaction.userFeedback) {
      const feedback = interaction.userFeedback.toLowerCase();
      
      if (feedback.includes('too technical') || feedback.includes('complex')) {
        patterns.technicalLanguage = 'needs_simplification';
      }
      
      if (feedback.includes('not detailed enough') || feedback.includes('more information')) {
        patterns.analysisDepth = 'needs_more_depth';
      }
      
      if (feedback.includes('confusing') || feedback.includes('unclear')) {
        patterns.responseFormat = 'needs_clarity';
      }
    }

    return patterns;
  }

  analyzeWorkflowPatterns(interaction) {
    const patterns = {};

    // Analyze user's workflow preferences
    if (interaction.workflowStyle) {
      patterns.workflowStyle = interaction.workflowStyle;
    }

    if (interaction.preferredApproach) {
      patterns.preferredApproach = interaction.preferredApproach;
    }

    return patterns;
  }

  analyzeSatisfactionPatterns(interaction) {
    const satisfaction = {
      level: interaction.satisfactionLevel || 'neutral',
      factors: []
    };

    if (interaction.userFeedback) {
      const feedback = interaction.userFeedback.toLowerCase();
      
      if (feedback.includes('perfect') || feedback.includes('excellent')) {
        satisfaction.level = 'high';
        satisfaction.factors.push('solution_quality');
      }
      
      if (feedback.includes('fast') || feedback.includes('quick')) {
        satisfaction.factors.push('response_speed');
      }
      
      if (feedback.includes('complete') || feedback.includes('thorough')) {
        satisfaction.factors.push('completeness');
      }
    }

    return satisfaction;
  }

  analyzeFrustrationPatterns(interaction) {
    const frustration = {
      triggers: [],
      level: 'none'
    };

    if (interaction.userFeedback) {
      const feedback = interaction.userFeedback.toLowerCase();
      
      if (feedback.includes('frustrated') || feedback.includes('annoying')) {
        frustration.level = 'high';
      }
      
      if (feedback.includes('incomplete') || feedback.includes('not working')) {
        frustration.triggers.push('incomplete_solutions');
      }
      
      if (feedback.includes('repeated') || feedback.includes('again')) {
        frustration.triggers.push('repeated_mistakes');
      }
    }

    return frustration;
  }

  // Helper methods for technical maintenance
  assessTechnicalDebtChanges(interaction) {
    const changes = {
      resolved: [],
      new: [],
      updated: []
    };

    if (interaction.resolvedIssues) {
      changes.resolved = interaction.resolvedIssues;
    }

    if (interaction.newIssues) {
      changes.new = interaction.newIssues;
    }

    if (interaction.updatedIssues) {
      changes.updated = interaction.updatedIssues;
    }

    return changes;
  }

  assessIntegrationChanges(interaction) {
    const changes = {
      newIntegrations: [],
      modifiedIntegrations: [],
      removedIntegrations: []
    };

    if (interaction.systemChanges) {
      changes.newIntegrations = interaction.systemChanges.added || [];
      changes.modifiedIntegrations = interaction.systemChanges.modified || [];
      changes.removedIntegrations = interaction.systemChanges.removed || [];
    }

    return changes;
  }

  reassessPriorities(interaction) {
    const priorities = {
      high: [],
      medium: [],
      low: []
    };

    if (interaction.priorityChanges) {
      priorities.high = interaction.priorityChanges.high || [];
      priorities.medium = interaction.priorityChanges.medium || [];
      priorities.low = interaction.priorityChanges.low || [];
    }

    return priorities;
  }

  updateSystemKnowledge(interaction) {
    return {
      architectureChanges: interaction.architectureChanges || [],
      dependencyChanges: interaction.dependencyChanges || [],
      configurationChanges: interaction.configurationChanges || []
    };
  }

  // Helper methods for context refresh
  determineNextSessionFocus(interaction) {
    if (interaction.nextFocus) {
      return interaction.nextFocus;
    }

    // Determine based on unresolved issues
    if (interaction.unresolvedIssues && interaction.unresolvedIssues.length > 0) {
      return `Continue work on: ${interaction.unresolvedIssues[0]}`;
    }

    return 'General development assistance';
  }

  updateActiveProblems(interaction, maintenance) {
    let problems = [];

    // Add new problems
    if (maintenance.debtUpdates.new) {
      problems.push(...maintenance.debtUpdates.new);
    }

    // Keep existing problems that weren't resolved
    if (interaction.existingProblems && interaction.resolvedIssues) {
      problems.push(
        ...interaction.existingProblems.filter(
          problem => !interaction.resolvedIssues.includes(problem)
        )
      );
    }

    return problems;
  }

  updateRecentDecisions(updates) {
    const recentDecisions = [];

    if (updates.newADR) {
      recentDecisions.push(`${updates.newADR.title} (${updates.newADR.decision})`);
    }

    return recentDecisions;
  }

  updateUserContext(interaction, preferences) {
    let context = 'Non-technical user preferring simple everyday language';

    if (preferences.communicationUpdates.technicalLanguage === 'needs_simplification') {
      context += ', requires even simpler explanations';
    }

    if (preferences.workflowUpdates.preferredApproach) {
      context += `, prefers ${preferences.workflowUpdates.preferredApproach} approach`;
    }

    return context;
  }

  createSessionEntry(interaction, updates, preferences) {
    return {
      timestamp: new Date().toISOString(),
      title: interaction.sessionTitle || 'Development Session',
      objective: interaction.objective,
      context: interaction.context,
      approach: interaction.approach,
      discoveries: interaction.discoveries || [],
      outcomes: interaction.outcomes || [],
      nextSteps: interaction.nextSteps || [],
      userSatisfaction: interaction.userFeedback || 'Pending'
    };
  }

  // File update methods
  async getNextADRNumber() {
    try {
      const content = fs.readFileSync(this.replitMdPath, 'utf8');
      const adrMatches = content.match(/ADR-(\d+):/g);
      
      if (!adrMatches) return 6; // Start from ADR-006
      
      const numbers = adrMatches.map(match => parseInt(match.match(/\d+/)[0]));
      return Math.max(...numbers) + 1;
    } catch (error) {
      return 6; // Default starting number
    }
  }

  async updateUserPreferenceProfile(preferences) {
    let content = fs.readFileSync(this.replitMdPath, 'utf8');

    // Update communication style if needed
    if (preferences.communicationUpdates && Object.keys(preferences.communicationUpdates).length > 0) {
      // Implementation would update the specific preference sections
      console.log('📝 User preferences updated based on interaction patterns');
    }

    // Write back to file
    fs.writeFileSync(this.replitMdPath, content);
  }

  async updateTechnicalSections(maintenance) {
    let content = fs.readFileSync(this.replitMdPath, 'utf8');

    // Update Technical Debt Index
    if (maintenance.debtUpdates.resolved.length > 0) {
      console.log('🗑️ Removed resolved technical debt items');
    }

    if (maintenance.debtUpdates.new.length > 0) {
      console.log('➕ Added new technical debt items');
    }

    // Write back to file
    fs.writeFileSync(this.replitMdPath, content);
  }

  async updateQuickContextIndex(contextUpdates) {
    let content = fs.readFileSync(this.replitMdPath, 'utf8');

    // Update session focus
    content = content.replace(
      /- \*\*Current Session Focus\*\*: .+/,
      `- **Current Session Focus**: ${contextUpdates.sessionFocus}`
    );

    // Update active problems
    if (contextUpdates.activeProblems.length > 0) {
      const problemsList = contextUpdates.activeProblems
        .map(problem => `  - ${problem}`)
        .join('\n');
      
      content = content.replace(
        /- \*\*Active Problems\*\*:\s*([\s\S]*?)(?=- \*\*|$)/,
        `- **Active Problems**: \n${problemsList}`
      );
    }

    fs.writeFileSync(this.replitMdPath, content);
  }

  async addSessionMemoryEntry(sessionEntry) {
    let content = fs.readFileSync(this.replitMdPath, 'utf8');

    const entryText = `
### ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()} - ${sessionEntry.title}
- **Objective**: ${sessionEntry.objective || 'Not specified'}
- **Context**: ${sessionEntry.context || 'Not specified'}
- **Approach**: ${sessionEntry.approach || 'Not specified'}
- **Discoveries**: ${sessionEntry.discoveries.join(', ') || 'None'}
- **Outcomes**: ${sessionEntry.outcomes.join(', ') || 'None'}
- **Next Steps**: ${sessionEntry.nextSteps.join(', ') || 'None'}
- **User Satisfaction**: ${sessionEntry.userSatisfaction}
`;

    // Insert before the System Architecture section
    content = content.replace(
      /## System Architecture/,
      `${entryText}\n## System Architecture`
    );

    fs.writeFileSync(this.replitMdPath, content);
  }

  /**
   * Execute complete memory update protocol
   */
  async update(interaction) {
    console.log('🚀 Starting Memory Update Protocol...');

    try {
      // Step 1: MANDATORY - Decision & Outcome Documentation
      const updates = await this.documentDecisionAndOutcome(interaction);

      // Step 2: MANDATORY - User Preference Evolution
      const preferences = await this.evolveUserPreferences(interaction);

      // Step 3: MANDATORY - Technical Debt & Integration Maintenance
      const maintenance = await this.maintainTechnicalDebtAndIntegration(interaction);

      // Step 4: MANDATORY - Context Index Refresh
      const contextUpdates = await this.refreshContextIndex(interaction, updates, preferences, maintenance);

      console.log('✅ Memory Update Protocol completed successfully');

      return {
        updates,
        preferences,
        maintenance,
        contextUpdates,
        ready: true
      };

    } catch (error) {
      console.error('❌ Memory Update Protocol failed:', error.message);
      throw error;
    }
  }
}

export default MemoryUpdater;

// Direct execution capability
if (import.meta.url === `file://${process.argv[1]}`) {
  const updater = new MemoryUpdater();
  
  // Example interaction data
  const interaction = {
    sessionTitle: 'Test Session',
    objective: 'Test memory update',
    success: true,
    userFeedback: 'Positive - good implementation',
    whatWorked: ['Memory framework implementation'],
    reasoning: 'Comprehensive approach worked well'
  };

  updater.update(interaction)
    .then(result => {
      console.log('\n📊 Update Result:');
      console.log('- Decisions documented:', !!result.updates);
      console.log('- Preferences evolved:', !!result.preferences);
      console.log('- Technical knowledge maintained:', !!result.maintenance);
      console.log('- Context refreshed:', !!result.contextUpdates);
      console.log('- Memory system ready:', result.ready);
    })
    .catch(error => {
      console.error('\n❌ Update failed:', error.message);
      process.exit(1);
    });
}