# Seller Folder Navigation Reference Map

## File Structure & Depth Analysis

**Total HTML Files**: 22

### Navigation Hierarchy

#### Depth 0 (Root: UI/Seller/)
- `stitch_seller_dashborad/dashborad.html` - Dashboard main page

#### Depth 1 (Direct subdirectories)
- `stitch_seller_chatbox/seller chatbox/seller chatbox.html`
- `stitch_seller_account_management/payout and banking/payout and banking.html`
- `stitch_seller_account_management/user management/user management.html`
- `stitch_seller_account_management/account management/account management.html`
- `stitch_seller_account_management/account management/code.html`
- `stitch_seller_orders/orders/orders.html`
- `stitch_seller_orders/order detail_normal/order detail_normal.html`
- `stitch_seller_orders/ordor detail_refund/ordor detail_refund.html`
- `stitch_seller_marketing/AB testing/AB testing.html`
- `stitch_seller_marketing/promotion request/promotion request.html`
- `stitch_seller_marketing/send promotion request/send promotion request.html`
- `stitch_seller_marketing/influencer detail/influencer detail.html`
- `stitch_seller_marketing/reply promotion request/reply promotion request.html`
- `stitch_seller_marketing/marketing overview/marketing overview.html`
- `stitch_seller_customer/customer order history/customer order history.html`
- `stitch_seller_customer/customer records/customer records.html`
- `stitch_seller_products/add new product/add new product.html`
- `stitch_seller_products/product detail/product detail.html`
- `stitch_seller_products/product overview/product overview.html`
- `stitch_seller_analytics (missing detail pages)/analytics overview/analytics overview.html`
- `stitch_seller_storefront/seller storefront/seller storefront.html`

## Common Navigation Elements

### Sidebar Navigation (Standard across all pages)
```html
<nav>
  Dashboard → dashborad.html
  Orders → orders/orders.html
  Products → product overview/product overview.html
  Marketing → marketing overview/marketing overview.html
  Customer → customer records/customer records.html
  Chat → seller chatbox/seller chatbox.html
  Analytics → analytics overview/analytics overview.html
  Storefront Preview → seller storefront/seller storefront.html
  Accounts Management → account management/account management.html
  Logout → (external/auth)
</nav>
```

### Logo/Brand Link
- Typically links back to Dashboard

### Navigation Targets by Section

#### Dashboard Section
- **File**: `stitch_seller_dashborad/dashborad.html`
- **Depth from root**: 1 level deep

#### Orders Section
- **Main Page**: `stitch_seller_orders/orders/orders.html`
- **Order Detail (Normal)**: `stitch_seller_orders/order detail_normal/order detail_normal.html`
- **Order Detail (Refund)**: `stitch_seller_orders/ordor detail_refund/ordor detail_refund.html`
- **Depth from root**: 2 levels deep

#### Products Section
- **Product Overview**: `stitch_seller_products/product overview/product overview.html`
- **Product Detail**: `stitch_seller_products/product detail/product detail.html`
- **Add New Product**: `stitch_seller_products/add new product/add new product.html`
- **Depth from root**: 2 levels deep

#### Marketing Section
- **Marketing Overview**: `stitch_seller_marketing/marketing overview/marketing overview.html`
- **AB Testing**: `stitch_seller_marketing/AB testing/AB testing.html`
- **Promotion Request**: `stitch_seller_marketing/promotion request/promotion request.html`
- **Send Promotion Request**: `stitch_seller_marketing/send promotion request/send promotion request.html`
- **Reply Promotion Request**: `stitch_seller_marketing/reply promotion request/reply promotion request.html`
- **Influencer Detail**: `stitch_seller_marketing/influencer detail/influencer detail.html`
- **Depth from root**: 2 levels deep

#### Customer Section
- **Customer Records**: `stitch_seller_customer/customer records/customer records.html`
- **Customer Order History**: `stitch_seller_customer/customer order history/customer order history.html`
- **Depth from root**: 2 levels deep

#### Analytics Section
- **Analytics Overview**: `stitch_seller_analytics (missing detail pages)/analytics overview/analytics overview.html`
- **Depth from root**: 2 levels deep

#### Storefront Section
- **Seller Storefront**: `stitch_seller_storefront/seller storefront/seller storefront.html`
- **Depth from root**: 2 levels deep

#### Chat Section
- **Seller Chatbox**: `stitch_seller_chatbox/seller chatbox/seller chatbox.html`
- **Depth from root**: 2 levels deep

#### Account Management Section
- **Account Management**: `stitch_seller_account_management/account management/account management.html`
- **Code**: `stitch_seller_account_management/account management/code.html`
- **User Management**: `stitch_seller_account_management/user management/user management.html`
- **Payout and Banking**: `stitch_seller_account_management/payout and banking/payout and banking.html`
- **Depth from root**: 2 levels deep

## Relative Path Patterns

### From Dashboard (depth 1)
- To Orders: `../stitch_seller_orders/orders/orders.html`
- To Products: `../stitch_seller_products/product overview/product overview.html`
- To Marketing: `../stitch_seller_marketing/marketing overview/marketing overview.html`

### From Orders/Products/Marketing/etc (depth 2)
- To Dashboard: `../../stitch_seller_dashborad/dashborad.html`
- To Another Section: `../../stitch_seller_[section]/[page]/[page].html`

## Special Navigation Patterns

### Card/Button Navigation
- Product cards should link to detail pages
- Order rows should link to order details
- Customer records should link to customer history

### Modal/Dropdown Navigation
- Account settings dropdowns
- Filter dropdowns (non-navigation)
- Action buttons

## Notes
- All navigation links currently use `href="#"` placeholders
- Consistent sidebar navigation across all pages
- Two-level depth structure (category → page)
- Some pages have spaces in folder/file names (needs careful escaping)
