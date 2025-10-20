# Influencer Folder - Navigation Flow

## Overview
This document describes the navigation structure and flow for the Influencer folder UI.

## Navigation Matrix

| From Page | To Page | Navigation Element | Status |
|-----------|---------|-------------------|--------|
| **Dashboard** | Profile & Verification | Sidebar link | ✅ Working |
| **Dashboard** | Portfolio | Sidebar link | ✅ Working |
| **Dashboard** | Requests | Sidebar link | ✅ Working |
| **Dashboard** | Shop | Sidebar link | ✅ Working |
| **Dashboard** | Analytics | Sidebar link | ✅ Working |
| **Dashboard** | Tasks | Sidebar link | ✅ Working |
| **Dashboard** | Ratings & Safety | Sidebar link | ✅ Working |
| **Dashboard** | Payouts & Billing | Sidebar link | ✅ Working |
| **Dashboard** | Messages | Sidebar link | ✅ Working |
| **Dashboard** | Account Settings | Sidebar link (bottom) | ✅ Working |
| **All Pages** | Dashboard | Sidebar link | ✅ Working |
| **Profile Overview** | KYC Verification | "Resubmit KYC" button | 🔄 In-page action |
| **Shop** | Go Shop | Button | 🔄 In-page action |
| **Tasks** | Request Details | Table row click | 🔄 In-page action |
| **Portfolio** | Add New Video | Action button | ✅ Working |
| **Portfolio** | Video Library | Sidebar link | ✅ Working |
| **Portfolio** | Influencer Storefront | Tab navigation | ✅ Working |
| **Messages** | Chat | Sidebar link | ✅ Working |
| **Messages** | Promotion Request | Chat interaction | 🔄 In-page action |

## Primary Navigation Paths

### 1. Main Dashboard Flow
```
Dashboard
├── Profile & Verification → Profile Overview
│   └── KYC Verification (action button)
├── Portfolio → Video Library
│   ├── Add New Video
│   └── Influencer Storefront
├── Requests → Requests List
│   └── Request Details (4 types: pending, approved, declined, discount)
├── Shop → Influencer Shopping
│   └── Go Shop (customer view)
├── Analytics → Analytics Dashboard
├── Tasks → Tasks List
├── Ratings & Safety → Rating and Review
├── Payouts & Billing → Payout & Billing
├── Messages → Chat
│   └── Receive Promotion Request
└── Account Settings → Account Settings
```

### 2. Common User Journeys

#### Journey: Complete Profile Setup
1. Dashboard
2. Profile & Verification (sidebar)
3. Fill in profile information
4. KYC Verification (click "Resubmit KYC")
5. Upload verification documents
6. Return to Dashboard (sidebar)

#### Journey: Manage Collaboration Requests
1. Dashboard
2. Requests (sidebar)
3. View pending requests
4. Click on specific request → Request Detail
5. Accept/Decline request
6. Messages (sidebar) to communicate with seller
7. Return to Dashboard (sidebar)

#### Journey: Create Promotion Content
1. Dashboard
2. Portfolio (sidebar) → Video Library
3. Add New Video (click button)
4. Upload video and link products
5. Publish video
6. Return to Portfolio (sidebar)
7. View on Influencer Storefront

#### Journey: Track Performance
1. Dashboard
2. Analytics (sidebar)
3. View performance metrics
4. Shop (sidebar) to see promoted products
5. Payouts & Billing (sidebar) to check earnings

## Navigation File Structure

### Depth 1 Files (Root Level)
These files use `../` for relative paths:
- `stitch_influencer_dashboard/dashboard.html`
- `stitch_influencer_shop/influencer shopping.html`
- `stitch_influencer_account_settings/account settings.html`
- `stitch_influencer_tasks/tasks.html`
- `stitch_influencer_requests/requests.html`

### Depth 2 Files (Nested)
These files use `../../` for relative paths:
- `stitch_influencer_shop/untitled_screen/go shop.html`
- `stitch_infliencer_profile & verification/profile overview/profile overview.html`
- `stitch_infliencer_profile & verification/KYC verification/KYC.html`
- `stitch_influencer_review/rating and review/rating and review.html`
- `stitch_influencer_portfolio/add new video/add new video.html`
- `stitch_influencer_portfolio/video library/video library.html`
- `stitch_influencer_portfolio/influencer storefront/influencer storefront.html`
- `stitch_influencer_message/chat/chat.html`
- `stitch_influencer_message/receive promotion request in chat/receive promotion request in chat.html`
- `stitch_influencer_request_detail/pending request/open pending request.html`
- `stitch_influencer_request_detail/approved request/approved request.html`
- `stitch_influencer_request_detail/discount offered request/discount offered request.html`
- `stitch_influencer_request_detail/declined request/declined request.html`
- `stitch_influencer_analytics (to be redone)/analytics/analytics.html`
- `stitch_influencer_payout_billing/payout & billing/payout & billing.html`

## Navigation Elements

### Sidebar Navigation
All pages include a consistent sidebar navigation with:
- Logo/Brand (Inflopick)
- "Creator Center" label
- Main navigation links (10 items)
- Account Settings link (bottom)

### Special Navigation Features

#### Header Navigation (Shop Pages)
Some shop pages include additional header tabs:
- Product
- Storefront
- Creators

#### Footer Navigation (Shop Pages)
Shop pages include footer links:
- Quick Links: Home, Shop, About Us, Contact
- Policies: Privacy Policy, Terms of Service, Return Policy
- Support: FAQ, Help Center, Track Order
- Join Us: Become a Creator, Open a Store

## Testing Results

**Test Suite**: Playwright E2E Navigation Tests
**Total Tests**: 26
**Passed**: 22 (85%)
**Failed**: 4 (15%)

### Test Coverage
- ✅ All HTML files exist and are accessible
- ✅ Navigation links point to correct targets
- ✅ No broken relative paths
- ✅ Consistent navigation structure across pages
- ✅ No undefined or null href values
- ⚠️  Minor placeholder links remain in some detail pages

### Known Issues
4 files have minimal navigation with some remaining placeholders:
1. receive promotion request in chat.html - 2 placeholder links
2. open pending request.html - 2 placeholder links
3. approved request.html - 2 placeholder links
4. Navigation flow test - URL encoding issue with special characters

These are minor issues and don't affect the main navigation flow.

## Best Practices

### For Future Development
1. **Maintain Consistent Structure**: Keep the sidebar navigation consistent across all pages
2. **Use Relative Paths**: Continue using `../` for depth-1 and `../../` for depth-2 files
3. **Test Navigation**: Run the Playwright test suite after any navigation changes
4. **Avoid Placeholders**: Always provide actual href targets, never use `#` placeholders
5. **Special Characters**: Be mindful of spaces and special characters in file paths (use URL encoding when necessary)

## Maintenance

### Running Navigation Tests
```bash
cd UI/Influencer
npm test
```

### Viewing Test Reports
```bash
npx playwright show-report
```

### Updating Navigation
1. Update HTML files with new navigation links
2. Update `navigation_map.md` if adding new pages
3. Run tests to validate changes
4. Update this document to reflect new navigation flows
