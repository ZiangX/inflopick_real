const { test, expect } = require('@playwright/test');
const path = require('path');

const BASE_PATH = 'file:///' + path.resolve(__dirname).replace(/\\/g, '/');

test.describe('Buyer UI Navigation Tests', () => {

  test('Home page header navigation works', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Test chat icon
    const chatLink = page.locator('a[href*="chatbox"]').first();
    await expect(chatLink).toBeVisible();

    // Test cart icon
    const cartLink = page.locator('a[href*="cart"]').first();
    await expect(cartLink).toBeVisible();

    // Test notifications icon
    const notificationsLink = page.locator('a[href*="notification"]').first();
    await expect(notificationsLink).toBeVisible();

    // Test profile icon
    const profileLink = page.locator('a[href*="profil"]').first();
    await expect(profileLink).toBeVisible();

    console.log('✅ Home page header navigation links exist');
  });

  test('Home page main navigation tabs work', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Test Product tab
    const productTab = page.locator('a[href*="shop_by_product"]').first();
    await expect(productTab).toBeVisible();

    // Test Storefront tab
    const storefrontTab = page.locator('a[href*="shop_by_storefront"]').first();
    await expect(storefrontTab).toBeVisible();

    // Test Creators tab
    const creatorsTab = page.locator('a[href*="shop_by_creator"]').first();
    await expect(creatorsTab).toBeVisible();

    console.log('✅ Home page main navigation tabs exist');
  });

  test('Home page product cards are clickable', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Test product card links
    const productCards = page.locator('a[href*="product_detail"]');
    const count = await productCards.count();

    expect(count).toBeGreaterThan(0);
    console.log(`✅ Found ${count} clickable product cards on home page`);
  });

  test('Home page creator cards link to creator storefront', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Test creator storefront links
    const creatorLinks = page.locator('a[href*="creator_storefront"]');
    const count = await creatorLinks.count();

    expect(count).toBeGreaterThan(0);
    console.log(`✅ Found ${count} creator storefront links on home page`);
  });

  test('Navigation links actually navigate', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Click cart icon and verify navigation
    await page.locator('a[href*="cart"]').first().click();
    await page.waitForLoadState('networkidle');

    const url = page.url();
    expect(url).toContain('cart');
    console.log('✅ Cart navigation works');

    // Go back to home
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Click Product tab and verify
    await page.locator('a[href*="shop_by_product"]').first().click();
    await page.waitForLoadState('networkidle');

    const url2 = page.url();
    expect(url2).toContain('shop_by_product');
    console.log('✅ Product tab navigation works');
  });

  test('Footer Quick Links work', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_home_page/home page/home page.html`);

    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check footer links
    const homeLink = page.locator('footer a[href*="home page"]').first();
    await expect(homeLink).toBeVisible();

    const profileLink = page.locator('footer a[href*="profil"]').first();
    await expect(profileLink).toBeVisible();

    console.log('✅ Footer Quick Links exist');
  });

  test('Shop by Creator page creator cards work', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_shop_by_creator/buyer_shop by creator.html`);

    // Look for creator links
    const creatorLinks = page.locator('a[href*="creator_storefront"]');
    const count = await creatorLinks.count();

    expect(count).toBeGreaterThan(0);
    console.log(`✅ Found ${count} creator cards on shop by creator page`);
  });

  test('Shop by Storefront page storefront cards work', async ({ page }) => {
    await page.goto(`${BASE_PATH}/stitch_buyer_shop_by_storefront/buyer_shop by storefront.html`);

    // Look for storefront links
    const storefrontLinks = page.locator('a[href*="seller_storefront"]');
    const count = await storefrontLinks.count();

    expect(count).toBeGreaterThan(0);
    console.log(`✅ Found ${count} storefront cards on shop by storefront page`);
  });
});
