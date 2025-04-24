import autocannon from 'autocannon';
import { writeFileSync } from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:5000';
const RESULTS_DIR = path.join(process.cwd(), 'tests/load/results');

interface EndpointConfig {
  name: string;
  url: string;
  method: 'GET' | 'POST';
  headers?: Record<string, string>;
  body?: any;
}

// Define the endpoints to test
const endpoints: EndpointConfig[] = [
  {
    name: 'home',
    url: `${BASE_URL}/`,
    method: 'GET',
  },
  {
    name: 'properties_list',
    url: `${BASE_URL}/api/properties`,
    method: 'GET',
  },
  {
    name: 'featured_properties',
    url: `${BASE_URL}/api/properties/featured`,
    method: 'GET',
  },
  {
    name: 'scheduler_status',
    url: `${BASE_URL}/api/admin/scheduler/status`,
    method: 'GET',
  }
];

// Load test configuration
const loadTestConfig = {
  connections: 100,  // number of concurrent connections
  duration: 10,      // duration of the test in seconds
  pipelining: 1,     // default 1 (no pipelining)
  timeout: 5,        // timeout for each request in seconds
};

async function runLoadTest() {
  console.log('Starting load tests...');
  
  for (const endpoint of endpoints) {
    console.log(`Testing endpoint: ${endpoint.name} (${endpoint.method} ${endpoint.url})`);
    
    const instance = autocannon({
      url: endpoint.url,
      method: endpoint.method,
      headers: endpoint.headers,
      body: endpoint.body ? JSON.stringify(endpoint.body) : undefined,
      ...loadTestConfig,
    });

    // Log progress to console
    autocannon.track(instance, { renderProgressBar: true });
    
    // Wait for test to complete and get results
    const results = await instance;
    
    // Log results
    console.log(`\nResults for ${endpoint.name}:`);
    console.log(`Requests/sec: ${results.requests.average}`);
    console.log(`Latency: ${results.latency.average} ms (avg), ${results.latency.p99} ms (p99)`);
    console.log(`Throughput: ${(results.throughput.average / 1024 / 1024).toFixed(2)} MB/s`);
    console.log(`Status codes: ${JSON.stringify(results.statusCodeStats)}`);
    
    // Save detailed results
    try {
      writeFileSync(
        `${RESULTS_DIR}/${endpoint.name}_${new Date().toISOString().replace(/:/g, '-')}.json`,
        JSON.stringify(results, null, 2)
      );
    } catch (err) {
      console.error('Failed to save results:', err);
    }
    
    console.log('-------------------------------------------');
  }
  
  console.log('Load tests completed!');
}

// Create results directory if it doesn't exist
try {
  const { mkdirSync } = require('fs');
  mkdirSync(RESULTS_DIR, { recursive: true });
} catch (err) {
  console.error('Failed to create results directory:', err);
}

// Run the load tests
runLoadTest().catch(err => {
  console.error('Error running load tests:', err);
  process.exit(1);
});