import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';

describe('End-to-End Workflow Tests', () => {
  let browser: Browser;
  let page: Page;
  const baseUrl = 'http://localhost:5000';

  beforeAll(async () => {
    // Launch browser for E2E testing
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should load the home page', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('h1');
    
    const title = await page.$eval('h1', (el) => el.textContent);
    expect(title).toBeTruthy();
  });

  it('should navigate to properties page and show listings', async () => {
    await page.goto(`${baseUrl}/properties`);
    
    // Wait for property cards to load
    await page.waitForSelector('[data-testid="property-card"]', { timeout: 5000 });
    
    // Check if property cards are visible
    const propertyCards = await page.$$('[data-testid="property-card"]');
    expect(propertyCards.length).toBeGreaterThan(0);
  });

  it('should show detailed view when clicking on a property', async () => {
    await page.goto(`${baseUrl}/properties`);
    
    // Wait for property cards to load
    await page.waitForSelector('[data-testid="property-card"]', { timeout: 5000 });
    
    // Click on the first property card
    await page.click('[data-testid="property-card"]');
    
    // Wait for the property details page to load
    await page.waitForSelector('[data-testid="property-details"]', { timeout: 5000 });
    
    // Verify property details are shown
    const propertyTitle = await page.$eval('[data-testid="property-title"]', (el) => el.textContent);
    expect(propertyTitle).toBeTruthy();
  });

  it('should navigate to admin dashboard', async () => {
    // This test assumes you're already logged in as an admin
    await page.goto(`${baseUrl}/admin`);
    
    // Wait for the admin dashboard to load
    await page.waitForSelector('[data-testid="admin-dashboard"]', { timeout: 5000 });
    
    // Check if the admin title is visible
    const adminTitle = await page.$eval('h1', (el) => el.textContent);
    expect(adminTitle).toContain('Admin Dashboard');
  });

  describe('Admin Scheduler Panel', () => {
    beforeAll(async () => {
      // Navigate to admin page
      await page.goto(`${baseUrl}/admin`);
      await page.waitForSelector('[data-testid="admin-dashboard"]', { timeout: 5000 });
    });

    it('should display scheduler tab and controls', async () => {
      // Click on the scheduler tab
      await page.click('[data-value="scheduler"]');
      
      // Wait for scheduler settings to load
      await page.waitForSelector('[data-testid="scheduler-settings"]', { timeout: 5000 });
      
      // Check that scheduler controls are visible
      const title = await page.$eval('[data-testid="scheduler-title"]', (el) => el.textContent);
      expect(title).toContain('AI Review Analysis Scheduler');
      
      // Check for status indicator
      const statusElement = await page.$('[data-testid="scheduler-status"]');
      expect(statusElement).not.toBeNull();
      
      // Check for interval control
      const intervalInput = await page.$('input[type="number"]');
      expect(intervalInput).not.toBeNull();
    });

    it('should update scheduler interval', async () => {
      // Click on the scheduler tab if not already there
      await page.click('[data-value="scheduler"]');
      
      // Wait for scheduler settings to load
      await page.waitForSelector('[data-testid="scheduler-settings"]', { timeout: 5000 });
      
      // Clear the existing interval value and enter a new one
      await page.focus('input[type="number"]');
      await page.keyboard.press('Control+A');
      await page.keyboard.press('Backspace');
      await page.keyboard.type('30');
      
      // Click the update button
      await page.click('button:has-text("Update")');
      
      // Wait for success notification
      await page.waitForSelector('[role="alert"]', { timeout: 5000 });
      
      // Check if update was successful
      const notification = await page.$eval('[role="alert"]', (el) => el.textContent);
      expect(notification).toContain('success');
    });
  });

  describe('User Authentication', () => {
    it('should show login page', async () => {
      await page.goto(`${baseUrl}/login`);
      
      // Check if login form is visible
      await page.waitForSelector('form', { timeout: 5000 });
      
      const emailInput = await page.$('input[type="email"]');
      const passwordInput = await page.$('input[type="password"]');
      const loginButton = await page.$('button[type="submit"]');
      
      expect(emailInput).not.toBeNull();
      expect(passwordInput).not.toBeNull();
      expect(loginButton).not.toBeNull();
    });
  });
});