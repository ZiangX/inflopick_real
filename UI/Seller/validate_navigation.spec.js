// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

const BASE_PATH = path.join(__dirname);

// Helper function to get file URL
function getFileUrl(relativePath) {
  return `file:///${path.join(BASE_PATH, relativePath).replace(/\\/g, '/')}`;
}

// Test suite for Seller folder navigation
test.describe('Seller Navigation Tests', () => {

  test('Dashboard - Header navigation works', async ({ page }) => {
    await page.goto(getFileUrl('stitch_seller_dashborad/dashborad.html'));

    // Test all sidebar nav links exist and have correct hrefs
    const ordersLink = page.locator('nav a:has-text("Orders")');
    await expect(ordersLink).toHaveAttribute('href', '../stitch_seller_orders/orders/orders.html');

    const productsLink = page.locator('nav a:has-text("Products")');
    await expect(productsLink).toHaveAttribute('href', '../stitch_seller_products/product overview/product overview.html');

    const marketingLink = page.locator('nav a:has-text("Marketing")');
    await expect(marketingLink).toHaveAttribute('href', '../stitch_seller_marketing/marketing overview/marketing overview.html');
  });

  test('Orders - Main navigation tabs work', async ({ page }) => {
    await page.goto(getFileUrl('stitch_seller_orders/orders/orders.html'));

    // Logo should link to dashboard
    const logoLink = page.locator('aside a').first();
    await expect(logoLink).toHaveAttribute('href', '../../stitch_seller_dashborad/dashborad.html');

    // Dashboard nav link
    const dashboardLink = page.locator('nav a:has-text("Dashboard")');
    await expect(dashboardLink).toHaveAttribute('href', '../../stitch_seller_dashborad/dashborad.html');

    // Products nav link
    const productsLink = page.locator('nav a:has-text("Products")');
    await expect(productsLink).toHaveAttribute('href', '../../stitch_seller_products/product overview/product overview.html');
  });

  test('Products - Navigation consistency', async ({ page }) => {
    await page.goto(getFileUrl('stitch_seller_products/product overview/product overview.html'));

    // Test dashboard link
    const dashboardLink = page.locator('nav a:has-text("Dashboard")');
    await expect(dashboardLink).toHaveAttribute('href', '../../stitch_seller_dashborad/dashborad.html');

    // Test orders link
    const ordersLink = page.locator('nav a:has-text("Orders")');
    await expect(ordersLink).toHaveAttribute('href', '../../stitch_seller_orders/orders/orders.html');

    // Test marketing link
    const marketingLink = page.locator('nav a:has-text("Marketing")');
    await expect(marketingLink).toHaveAttribute('href', '../../stitch_seller_marketing/marketing overview/marketing overview.html');
  });

  test('Marketing - All nav links functional', async ({ page }) => {
    await page.goto(getFileUrl('stitch_seller_marketing/marketing overview/marketing overview.html'));

    // Check all major navigation items
    const dashboardLink = page.locator('nav a:has-text("Dashboard")');
    await expect(dashboardLink).toHaveAttribute('href', '../../stitch_seller_dashborad/dashborad.html');

    const chatLink = page.locator('nav a:has-text("Chat")');
    await expect(chatLink).toHaveAttribute('href', '../../stitch_seller_chatbox/seller chatbox/seller chatbox.html');

    const analyticsLink = page.locator('nav a:has-text("Analytics")');
    await expect(analyticsLink).toHaveAttribute('href', /analytics overview\/analytics overview\.html$/);
  });

  test('Customer - Navigation paths correct', async ({ page }) => {
    await page.goto(getFileUrl('stitch_seller_customer/customer records/customer records.html'));

    const dashboardLink = page.locator('nav a:has-text("Dashboard")');
    await expect(dashboardLink).toHaveAttribute('href', '../../stitch_seller_dashborad/dashborad.html');

    const storefrontLink = page.locator('nav a:has-text("Storefront Preview")');
    await expect(storefrontLink).toHaveAttribute('href', '../../stitch_seller_storefront/seller storefront/seller storefront.html');
  });

  test('Account Management - Nested navigation', async ({ page }) => {
    await page.goto(getFileUrl('stitch_seller_account_management/account management/account management.html'));

    // Logo link to dashboard
    const logoArea = page.locator('aside').first();
    await expect(logoArea.locator('a').first()).toHaveAttribute('href', '../../stitch_seller_dashborad/dashborad.html');

    // Check navigation links
    const ordersLink = page.locator('nav a:has-text("Orders")');
    await expect(ordersLink).toHaveAttribute('href', '../../stitch_seller_orders/orders/orders.html');
  });

  test('Navigation flow: Dashboard → Orders → Products', async ({ page }) => {
    // Start at dashboard
    await page.goto(getFileUrl('stitch_seller_dashborad/dashborad.html'));

    // Click Orders
    await page.click('nav a:has-text("Orders")');
    await expect(page).toHaveURL(/orders\.html$/);

    // Click Products from Orders page
    await page.click('nav a:has-text("Products")');
    await expect(page).toHaveURL(/product.*overview\.html$/);

    // Click Dashboard to go back
    await page.click('nav a:has-text("Dashboard")');
    await expect(page).toHaveURL(/dashborad\.html$/);
  });

  test('No broken navigation links', async ({ page }) => {
    const pages = [
      'stitch_seller_dashborad/dashborad.html',
      'stitch_seller_orders/orders/orders.html',
      'stitch_seller_products/product overview/product overview.html',
      'stitch_seller_marketing/marketing overview/marketing overview.html',
      'stitch_seller_customer/customer records/customer records.html',
    ];

    for (const pagePath of pages) {
      await page.goto(getFileUrl(pagePath));

      // Check no href="#" in navigation (except logout)
      const navLinks = await page.locator('nav a[href="#"]').all();
      const nonLogoutLinks = [];

      for (const link of navLinks) {
        const text = await link.textContent();
        if (!text.includes('Logout')) {
          nonLogoutLinks.push(text);
        }
      }

      expect(nonLogoutLinks.length).toBe(0);
    }
  });
});
