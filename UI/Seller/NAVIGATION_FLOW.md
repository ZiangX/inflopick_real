# Seller Navigation Flow Documentation

## Navigation Architecture

### Primary Navigation Structure

The Seller Hub uses a **sidebar navigation pattern** with 9 main sections:

```
┌─────────────────────────────────────┐
│  Inflopick - Seller Hub (Logo)      │  → Dashboard
├─────────────────────────────────────┤
│  📊 Dashboard                        │
│  📋 Orders                           │
│  📦 Products                         │
│  📢 Marketing                        │
│  👥 Customer                         │
│  💬 Chat                             │
│  📈 Analytics                        │
│  🏪 Storefront Preview               │
│  ⚙️  Accounts Management             │
├─────────────────────────────────────┤
│  🚪 Logout                           │
└─────────────────────────────────────┘
```

## Navigation Matrix

| From \ To | Dashboard | Orders | Products | Marketing | Customer | Chat | Analytics | Storefront | Accounts |
|-----------|-----------|--------|----------|-----------|----------|------|-----------|------------|----------|
| **Dashboard** (depth-1) | # | ../orders/orders.html | ../products/product overview/*.html | ../marketing/marketing overview/*.html | ../customer/customer records/*.html | ../chatbox/seller chatbox/*.html | ../analytics/*/analytics overview/*.html | ../storefront/seller storefront/*.html | ../account_management/account management/*.html |
| **Any Page** (depth-2) | ../../dashborad/*.html | ../../orders/orders/*.html | ../../products/product overview/*.html | ../../marketing/marketing overview/*.html | ../../customer/customer records/*.html | ../../chatbox/seller chatbox/*.html | ../../analytics/*/analytics overview/*.html | ../../storefront/seller storefront/*.html | ../../account_management/account management/*.html |

## Section Details

### 1. Dashboard (Home)
- **Main Page**: `stitch_seller_dashborad/dashborad.html`
- **Purpose**: Overview of store performance, quick actions, recent orders
- **Key Features**:
  - Sales metrics cards
  - Quick action buttons
  - Recent orders table
  - Recent visitors list

### 2. Orders
- **Overview**: `stitch_seller_orders/orders/orders.html`
- **Order Details (Normal)**: `stitch_seller_orders/order detail_normal/order detail_normal.html`
- **Order Details (Refund)**: `stitch_seller_orders/ordor detail_refund/ordor detail_refund.html`
- **Purpose**: Manage all customer orders, view order details, process refunds
- **Navigation Flow**:
  ```
  Orders Overview → Click Order ID → Order Detail Page
  ```

### 3. Products
- **Overview**: `stitch_seller_products/product overview/product overview.html`
- **Product Detail**: `stitch_seller_products/product detail/product detail.html`
- **Add New Product**: `stitch_seller_products/add new product/add new product.html` (modal)
- **Purpose**: Manage product catalog, add new products, edit product details
- **Navigation Flow**:
  ```
  Product Overview → Click Product Card → Product Detail
  Product Overview → Add Product Button → Add Product Modal
  ```

### 4. Marketing
- **Overview**: `stitch_seller_marketing/marketing overview/marketing overview.html`
- **A/B Testing**: `stitch_seller_marketing/AB testing/AB testing.html`
- **Promotion Requests**: `stitch_seller_marketing/promotion request/promotion request.html`
- **Send Promotion Request**: `stitch_seller_marketing/send promotion request/send promotion request.html`
- **Reply Promotion Request**: `stitch_seller_marketing/reply promotion request/reply promotion request.html`
- **Influencer Detail**: `stitch_seller_marketing/influencer detail/influencer detail.html`
- **Purpose**: Manage marketing campaigns, influencer collaborations, A/B tests
- **Navigation Flow**:
  ```
  Marketing Overview → AB Testing → Create Test
  Marketing Overview → Promotion Requests → Influencer Detail
  ```

### 5. Customer
- **Customer Records**: `stitch_seller_customer/customer records/customer records.html`
- **Customer Order History**: `stitch_seller_customer/customer order history/customer order history.html`
- **Purpose**: View customer information, order history, customer insights
- **Navigation Flow**:
  ```
  Customer Records → Click Customer → Customer Order History
  ```

### 6. Chat
- **Chatbox**: `stitch_seller_chatbox/seller chatbox/seller chatbox.html`
- **Purpose**: Communicate with customers, handle inquiries
- **Features**:
  - Real-time messaging
  - Conversation history
  - Quick replies

### 7. Analytics
- **Overview**: `stitch_seller_analytics (missing detail pages)/analytics overview/analytics overview.html`
- **Purpose**: View sales analytics, performance metrics, trends
- **Features**:
  - Sales charts
  - Traffic analytics
  - Conversion metrics

### 8. Storefront Preview
- **Preview**: `stitch_seller_storefront/seller storefront/seller storefront.html`
- **Purpose**: Preview how storefront appears to buyers
- **Features**:
  - Live preview
  - Product showcase
  - Branding display

### 9. Accounts Management
- **Account Settings**: `stitch_seller_account_management/account management/account management.html`
- **Code Settings**: `stitch_seller_account_management/account management/code.html`
- **User Management**: `stitch_seller_account_management/user management/user management.html`
- **Payout & Banking**: `stitch_seller_account_management/payout and banking/payout and banking.html`
- **Purpose**: Manage account settings, banking info, user permissions
- **Navigation Flow**:
  ```
  Account Management → User Management
  Account Management → Payout & Banking
  ```

## Relative Path Patterns

### From Dashboard (Depth-1)
```html
<!-- Dashboard is one level deep from UI/Seller -->
<a href="../stitch_seller_[section]/[page]/[page].html">
```

### From All Other Pages (Depth-2)
```html
<!-- All other pages are two levels deep -->
<a href="../../stitch_seller_[section]/[page]/[page].html">
```

### Logo/Brand Always Returns to Dashboard
```html
<!-- From depth-1 (Dashboard) -->
<a href="dashborad.html">

<!-- From depth-2 (All other pages) -->
<a href="../../stitch_seller_dashborad/dashborad.html">
```

## Active State Management

The active navigation item is indicated by:
- **Background**: `bg-primary` or `bg-blue-100 dark:bg-blue-900/30`
- **Text Color**: `text-white` or `text-primary`
- **Styling**: Distinct from hover states

### Example Active States:
```html
<!-- Active (Dashboard page) -->
<a class="... text-white bg-primary rounded-lg" href="#">
  <span class="material-icons">dashboard</span>
  <span>Dashboard</span>
</a>

<!-- Inactive -->
<a class="... text-subtext-light dark:text-subtext-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="...">
  <span class="material-icons">receipt_long</span>
  <span>Orders</span>
</a>
```

## User Journey Examples

### Scenario 1: Seller checks new orders
```
Dashboard → Orders (sidebar) → View Order List → Click Order #12345 → Order Detail
```

### Scenario 2: Seller updates product
```
Dashboard → Products (sidebar) → Product Overview → Click Product Card → Product Detail → Edit
```

### Scenario 3: Seller creates marketing campaign
```
Dashboard → Marketing (sidebar) → Marketing Overview → AB Testing → Create New Test
```

### Scenario 4: Seller checks payout status
```
Dashboard → Accounts Management (sidebar) → Payout & Banking → View Transaction History
```

## Accessibility Notes

- All navigation links use semantic `<a>` tags
- Icon + text labels for better understanding
- Hover states for visual feedback
- Active states clearly indicate current location
- Keyboard navigation supported through standard HTML navigation

## Mobile Considerations

While this documentation focuses on desktop navigation, the structure supports responsive design:
- Sidebar can collapse on mobile
- Material Icons provide compact visual cues
- Touch-friendly spacing and sizing
- Consistent navigation across all screen sizes

## Notes
- All folder names and file names include spaces - paths handle this via URL encoding
- Dashboard folder has typo: "dashborad" instead of "dashboard" (preserved for consistency)
- Analytics folder has annotation "(missing detail pages)" in folder name
- All pages maintain consistent sidebar navigation for easy orientation
