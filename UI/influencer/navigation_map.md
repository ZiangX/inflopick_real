# Influencer Folder - Navigation Reference Map

## File Structure Overview

Total HTML Files: **20**

### Directory Structure by Depth

**Depth 1** (UI/Influencer/[folder]/):
- stitch_influencer_dashboard/dashboard.html
- stitch_influencer_shop/influencer shopping.html
- stitch_influencer_account_settings/account settings.html
- stitch_influencer_tasks/tasks.html
- stitch_influencer_requests/requests.html
- stitch_influencer_review/rating and review/rating and review.html
- stitch_influencer_analytics (to be redone)/analytics/analytics.html
- stitch_influencer_payout_billing/payout & billing/payout & billing.html

**Depth 2** (UI/Influencer/[folder]/[subfolder]/):
- stitch_influencer_shop/untitled_screen/go shop.html
- stitch_infliencer_profile & verification/profile overview/profile overview.html
- stitch_infliencer_profile & verification/KYC verification/KYC.html
- stitch_influencer_portfolio/add new video/add new video.html
- stitch_influencer_portfolio/video library/video library.html
- stitch_influencer_portfolio/influencer storefront/influencer storefront.html
- stitch_influencer_message/chat/chat.html
- stitch_influencer_message/receive promotion request in chat/receive promotion request in chat.html
- stitch_influencer_request_detail/pending request/open pending request.html
- stitch_influencer_request_detail/approved request/approved request.html
- stitch_influencer_request_detail/discount offered request/discount offered request.html
- stitch_influencer_request_detail/declined request/declined request.html

## Common Navigation Elements

### Sidebar Navigation (Found in all files)
The sidebar contains the main navigation with these items:

1. **Dashboard** → `dashboard.html`
2. **Profile & Verification** → `profile overview.html`
3. **Portfolio** → `video library.html` or `influencer storefront.html`
4. **Requests** → `requests.html`
5. **Shop** → `influencer shopping.html`
6. **Analytics** → `analytics.html`
7. **Tasks** → `tasks.html`
8. **Ratings & Safety** → `rating and review.html`
9. **Payouts & Billing** → `payout & billing.html`
10. **Messages** → `chat.html`
11. **Account Settings** → `account settings.html` (bottom of sidebar)

### Header Navigation (in some files like influencer shopping.html)
Some files have a header with additional navigation tabs:
- Product
- Storefront → `influencer storefront.html`
- Creators

### Footer Links (in some files like influencer shopping.html)
Footer contains quick links:
- Home
- Shop
- About Us
- Contact
- Privacy Policy
- Terms of Service
- Return Policy
- FAQ
- Help Center
- Track Order
- Become a Creator
- Open a Store

## File Depth Reference

### Root Level Files (Depth 1)
Base path: `../`

- dashboard.html → `./stitch_influencer_dashboard/dashboard.html`
- influencer shopping.html → `./stitch_influencer_shop/influencer shopping.html`
- account settings.html → `./stitch_influencer_account_settings/account settings.html`
- tasks.html → `./stitch_influencer_tasks/tasks.html`
- requests.html → `./stitch_influencer_requests/requests.html`

### Nested Files (Depth 2)
Base path: `../../`

- go shop.html → `./stitch_influencer_shop/untitled_screen/go shop.html`
- profile overview.html → `./stitch_infliencer_profile & verification/profile overview/profile overview.html`
- KYC.html → `./stitch_infliencer_profile & verification/KYC verification/KYC.html`
- add new video.html → `./stitch_influencer_portfolio/add new video/add new video.html`
- video library.html → `./stitch_influencer_portfolio/video library/video library.html`
- influencer storefront.html → `./stitch_influencer_portfolio/influencer storefront/influencer storefront.html`
- chat.html → `./stitch_influencer_message/chat/chat.html`
- receive promotion request in chat.html → `./stitch_influencer_message/receive promotion request in chat/receive promotion request in chat.html`
- open pending request.html → `./stitch_influencer_request_detail/pending request/open pending request.html`
- approved request.html → `./stitch_influencer_request_detail/approved request/approved request.html`
- discount offered request.html → `./stitch_influencer_request_detail/discount offered request/discount offered request.html`
- declined request.html → `./stitch_influencer_request_detail/declined request/declined request.html`

## Navigation Targets

### Primary Navigation Pages
| Page Name | File Path | Relative from Depth 1 | Relative from Depth 2 |
|-----------|-----------|----------------------|----------------------|
| Dashboard | `stitch_influencer_dashboard/dashboard.html` | `./stitch_influencer_dashboard/dashboard.html` | `../../stitch_influencer_dashboard/dashboard.html` |
| Profile & Verification | `stitch_infliencer_profile & verification/profile overview/profile overview.html` | `./stitch_infliencer_profile & verification/profile overview/profile overview.html` | `../../stitch_infliencer_profile & verification/profile overview/profile overview.html` |
| Portfolio | `stitch_influencer_portfolio/video library/video library.html` | `./stitch_influencer_portfolio/video library/video library.html` | `../../stitch_influencer_portfolio/video library/video library.html` |
| Requests | `stitch_influencer_requests/requests.html` | `./stitch_influencer_requests/requests.html` | `../../stitch_influencer_requests/requests.html` |
| Shop | `stitch_influencer_shop/influencer shopping.html` | `./stitch_influencer_shop/influencer shopping.html` | `../../stitch_influencer_shop/influencer shopping.html` |
| Analytics | `stitch_influencer_analytics (to be redone)/analytics/analytics.html` | `./stitch_influencer_analytics (to be redone)/analytics/analytics.html` | `../../stitch_influencer_analytics (to be redone)/analytics/analytics.html` |
| Tasks | `stitch_influencer_tasks/tasks.html` | `./stitch_influencer_tasks/tasks.html` | `../../stitch_influencer_tasks/tasks.html` |
| Ratings & Safety | `stitch_influencer_review/rating and review/rating and review.html` | `./stitch_influencer_review/rating and review/rating and review.html` | `../../stitch_influencer_review/rating and review/rating and review.html` |
| Payouts & Billing | `stitch_influencer_payout_billing/payout & billing/payout & billing.html` | `./stitch_influencer_payout_billing/payout & billing/payout & billing.html` | `../../stitch_influencer_payout_billing/payout & billing/payout & billing.html` |
| Messages | `stitch_influencer_message/chat/chat.html` | `./stitch_influencer_message/chat/chat.html` | `../../stitch_influencer_message/chat/chat.html` |
| Account Settings | `stitch_influencer_account_settings/account settings.html` | `./stitch_influencer_account_settings/account settings.html` | `../../stitch_influencer_account_settings/account settings.html` |

## Current Navigation Issues

1. **Placeholder Links**: All sidebar navigation links currently use `href="#"` instead of actual file paths
2. **Header Navigation**: Some files have header navigation tabs that also use placeholder links
3. **Footer Links**: Footer links in some files use placeholder `href="#"` links
4. **Inconsistent Depths**: Files at different directory depths will need different relative paths
5. **Special Characters**: Some file names contain spaces and special characters that need proper encoding

## Navigation Fix Strategy

1. **Calculate relative paths** based on file depth
2. **Replace all `href="#"`** with correct relative paths
3. **Ensure consistency** across all navigation elements
4. **Test navigation flow** to verify all links work correctly
5. **Handle special characters** in file paths properly
