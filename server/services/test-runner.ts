import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';

export interface TestResult {
  success: boolean;
  output: string;
  duration: number;
}

export class TestRunnerService {
  private baseDir: string;

  constructor() {
    this.baseDir = process.cwd();
  }

  /**
   * Run unit tests
   */
  async runUnitTests(): Promise<TestResult> {
    return this.runCommand('npx', ['vitest', 'run', 'tests/unit', '--reporter=json']);
  }

  /**
   * Run integration tests
   */
  async runIntegrationTests(): Promise<TestResult> {
    return this.runCommand('npx', ['vitest', 'run', 'tests/integration', '--reporter=json']);
  }

  /**
   * Run load tests
   */
  async runLoadTests(): Promise<TestResult> {
    return this.runCommand('tsx', ['tests/load/run.ts']);
  }

  /**
   * Run E2E tests
   */
  async runE2ETests(): Promise<TestResult> {
    return this.runCommand('npx', ['vitest', 'run', '--config', 'vitest.e2e.config.ts', '--reporter=json']);
  }

  /**
   * Helper method to run a command and capture its output
   */
  private runCommand(command: string, args: string[]): Promise<TestResult> {
    return new Promise((resolve) => {
      const startTime = Date.now();
      let output = '';
      let error = '';

      const process = spawn(command, args, {
        cwd: this.baseDir,
        env: { ...process.env, NODE_ENV: 'test' }
      });

      process.stdout.on('data', (data) => {
        output += data.toString();
      });

      process.stderr.on('data', (data) => {
        error += data.toString();
      });

      process.on('close', (code) => {
        const duration = Date.now() - startTime;
        const success = code === 0;

        resolve({
          success,
          output: success ? output : `${error}\n${output}`,
          duration
        });
      });
    });
  }

  /**
   * Save test results to file for future reference
   */
  async saveResults(testType: string, results: TestResult): Promise<string> {
    const resultsDir = path.join(this.baseDir, 'tests', 'results');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(resultsDir)) {
      fs.mkdirSync(resultsDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/:/g, '-');
    const filename = `${testType}_${timestamp}.json`;
    const filePath = path.join(resultsDir, filename);
    
    fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
    
    return filePath;
  }
}

// Singleton instance
export const testRunner = new TestRunnerService();