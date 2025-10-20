const { test, expect } = require('@playwright/test');
const path = require('path');

// Navigation mappings
const navMappings = {
  'Dashboard': 'stitch_influencer_dashboard/dashboard.html',
  'Profile & Verification': 'stitch_infliencer_profile & verification/profile overview/profile overview.html',
  'Portfolio': 'stitch_influencer_portfolio/video library/video library.html',
  'Requests': 'stitch_influencer_requests/requests.html',
  'Shop': 'stitch_influencer_shop/influencer shopping.html',
  'Analytics': 'stitch_influencer_analytics (to be redone)/analytics/analytics.html',
  'Tasks': 'stitch_influencer_tasks/tasks.html',
  'Ratings & Safety': 'stitch_influencer_review/rating and review/rating and review.html',
  'Payouts & Billing': 'stitch_influencer_payout_billing/payout & billing/payout & billing.html',
  'Messages': 'stitch_influencer_message/chat/chat.html',
  'Account Settings': 'stitch_influencer_account_settings/account settings.html'
};

// All HTML files to test
const allFiles = [
  // Depth 1 files
  'stitch_influencer_dashboard/dashboard.html',
  'stitch_influencer_shop/influencer shopping.html',
  'stitch_influencer_account_settings/account settings.html',
  'stitch_influencer_tasks/tasks.html',
  'stitch_influencer_requests/requests.html',
  // Depth 2 files
  'stitch_influencer_shop/untitled_screen/go shop.html',
  'stitch_infliencer_profile & verification/profile overview/profile overview.html',
  'stitch_infliencer_profile & verification/KYC verification/KYC.html',
  'stitch_influencer_review/rating and review/rating and review.html',
  'stitch_influencer_portfolio/add new video/add new video.html',
  'stitch_influencer_portfolio/video library/video library.html',
  'stitch_influencer_portfolio/influencer storefront/influencer storefront.html',
  'stitch_influencer_message/chat/chat.html',
  'stitch_influencer_message/receive promotion request in chat/receive promotion request in chat.html',
  'stitch_influencer_request_detail/pending request/open pending request.html',
  'stitch_influencer_request_detail/approved request/approved request.html',
  'stitch_influencer_request_detail/discount offered request/discount offered request.html',
  'stitch_influencer_request_detail/declined request/declined request.html',
  'stitch_influencer_analytics (to be redone)/analytics/analytics.html',
  'stitch_influencer_payout_billing/payout & billing/payout & billing.html'
];

const basePath = path.resolve(__dirname);

test.describe('Influencer Folder Navigation Validation', () => {

  test('should have all expected HTML files', async () => {
    const fs = require('fs');
    allFiles.forEach(file => {
      const filePath = path.join(basePath, file);
      expect(fs.existsSync(filePath), `File should exist: ${file}`).toBeTruthy();
    });
  });

  allFiles.forEach(file => {
    test(`Navigation links in ${path.basename(file)}`, async ({ page }) => {
      const filePath = `file:///${path.join(basePath, file).replace(/\\/g, '/')}`;

      await page.goto(filePath);

      // Check that sidebar navigation links exist and are not placeholders
      for (const [linkText, targetPath] of Object.entries(navMappings)) {
        // Find the link by text content
        const link = page.locator(`a:has-text("${linkText}")`).first();

        // Check if link exists
        const count = await link.count();
        if (count > 0) {
          const href = await link.getAttribute('href');

          // Verify it's not a placeholder
          expect(href, `${linkText} should not be a placeholder (#)`).not.toBe('#');

          // Verify it contains the expected target path
          if (href && href !== '#') {
            expect(href, `${linkText} should contain correct path`).toContain(targetPath.replace(/\\/g, '/'));
          }
        }
      }
    });
  });

  test('Navigation flow: Dashboard → Profile → Tasks → Dashboard', async ({ page }) => {
    const dashboardPath = `file:///${path.join(basePath, 'stitch_influencer_dashboard/dashboard.html').replace(/\\/g, '/')}`;

    // Start at dashboard
    await page.goto(dashboardPath);
    await expect(page).toHaveURL(dashboardPath);

    // Click Profile & Verification
    const profileLink = page.locator('a:has-text("Profile & Verification")').first();
    if (await profileLink.count() > 0) {
      await profileLink.click();
      await page.waitForLoadState('load');

      // Should be on profile page
      expect(page.url()).toContain('profile overview.html');

      // Click Tasks
      const tasksLink = page.locator('a:has-text("Tasks")').first();
      if (await tasksLink.count() > 0) {
        await tasksLink.click();
        await page.waitForLoadState('load');

        // Should be on tasks page
        expect(page.url()).toContain('tasks.html');

        // Click Dashboard to return
        const dashLink = page.locator('a:has-text("Dashboard")').first();
        if (await dashLink.count() > 0) {
          await dashLink.click();
          await page.waitForLoadState('load');

          // Should be back on dashboard
          expect(page.url()).toContain('dashboard.html');
        }
      }
    }
  });

  test('No broken navigation links', async ({ page }) => {
    const fs = require('fs');

    for (const file of allFiles) {
      const filePath = `file:///${path.join(basePath, file).replace(/\\/g, '/')}`;
      await page.goto(filePath);

      // Get all sidebar navigation links
      const links = await page.locator('nav a, aside a').all();

      for (const link of links) {
        const href = await link.getAttribute('href');

        if (href && href !== '#' && !href.startsWith('http') && !href.startsWith('javascript:')) {
          // Resolve relative path
          const currentDir = path.dirname(path.join(basePath, file));
          const targetPath = path.resolve(currentDir, href);

          // Check if target file exists
          const exists = fs.existsSync(targetPath);
          expect(exists, `Link target should exist: ${href} (from ${file})`).toBeTruthy();
        }
      }
    }
  });

  test('Navigation consistency across all pages', async ({ page }) => {
    const navigationTexts = [];

    // Collect navigation items from first file
    const firstFile = `file:///${path.join(basePath, allFiles[0]).replace(/\\/g, '/')}`;
    await page.goto(firstFile);
    const firstNavLinks = await page.locator('nav a, aside nav a').allTextContents();

    // Check that other pages have similar navigation structure
    for (const file of allFiles.slice(1, 5)) { // Check a sample of 4 more files
      const filePath = `file:///${path.join(basePath, file).replace(/\\/g, '/')}`;
      await page.goto(filePath);

      const navLinks = await page.locator('nav a, aside nav a').allTextContents();

      // Should have navigation items
      expect(navLinks.length, `${file} should have navigation links`).toBeGreaterThan(5);
    }
  });

  test('All sidebar links use correct relative paths based on depth', async ({ page }) => {
    const fs = require('fs');

    for (const file of allFiles) {
      const content = fs.readFileSync(path.join(basePath, file), 'utf8');

      // Determine file depth
      const depth = file.split('/').length - 1;
      const expectedPrefix = depth === 1 ? '../' : '../../';

      // Check that navigation links use correct prefix
      const navLinkMatches = content.match(/href="[^"]*stitch_influencer[^"]*"/g) || [];

      navLinkMatches.forEach(match => {
        const href = match.match(/href="([^"]*)"/)[1];
        if (!href.startsWith('http')) {
          expect(href, `${file} should use correct relative path prefix`).toContain(expectedPrefix);
        }
      });
    }
  });

  test('No undefined or null href values', async ({ page }) => {
    for (const file of allFiles.slice(0, 10)) { // Test first 10 files
      const filePath = `file:///${path.join(basePath, file).replace(/\\/g, '/')}`;
      await page.goto(filePath);

      // Check all navigation links
      const links = await page.locator('nav a, aside a').all();

      for (const link of links) {
        const href = await link.getAttribute('href');
        const text = await link.textContent();

        // Verify href is not undefined, null, or contains these strings
        if (text && text.trim().length > 0) {
          expect(href, `Link "${text.trim()}" should not have undefined href`).toBeDefined();
          expect(href, `Link "${text.trim()}" should not contain "undefined"`).not.toContain('undefined');
          expect(href, `Link "${text.trim()}" should not contain "null"`).not.toContain('null');
        }
      }
    }
  });
});
