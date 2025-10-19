Inflopick User Stories (v1)
Epic: Multi-Role Onboarding & Compliance (FR-1ï¿½FR-8)
Creator KYC Intake

As a creator, I want to submit personal, tax, and payout details so that I can get approved to promote and sell products.
Acceptance Criteria
Collect legal name, DOB, email, phone, preferred language, consent timestamps, and government ID upload.
Creator must link to an existing buyer account or create one during onboarding; linkage is stored and visible to admins.
Bank (EFT) data and specimen cheque captured; card-on-file for samples authorized with a 14-day countdown.
Password, optional referral code, and active platform list recorded; confirmation email sent after approval.
Dashboard shows onboarding status and outstanding document checklist.

Merchant Verification Workflow

As a merchant owner, I want to provide business credentials and billing so that my store can operate on Inflopick.
Acceptance Criteria
Collect business registration documents, tax IDs, permits, and store address; admin can flag missing items.
Stripe subscription for CAD $15 monthly fee validated before storefront activation.
Fund holding rule (7ï¿½14 days post-delivery) configurable and stored per merchant.
Verified status displayed to merchant and admins; audit log records approval decisions.

Merchant Sub-User Management

As a merchant owner, I want to invite team members so that they can help manage the store without sharing my login.
Acceptance Criteria
Up to two additional accounts per merchant with owner/admin/support roles.
Role permissions govern catalog, orders, payouts, and support access.
Invitations sent via email with expiration; acceptance logged with timestamp.
Activity log tracks sub-user actions for compliance.

Buyer Account Setup

As a buyer, I want to create an account with saved addresses so that checkout is faster and more accurate.
Acceptance Criteria
Capture contact info, password, and default shipping address; email verification required.
Manage (add/edit/remove) multiple shipping addresses and preferred payment methods (tokenized via Stripe).
Order history initialized and visible post account creation.
Unlinked buyers access standard storefront and checkout views only; influencer center and commission insights remain hidden until a creator link is established.

Admin Onboarding Queue

As an admin, I want a dashboard of onboarding applications so that compliance reviews are timely.
Acceptance Criteria
Queue lists creators and merchants with status, risk flags, and missing documents.
Admin can approve, reject, or request more info with reason captured.
Actions trigger notifications to applicants and update audit log.
Epic: Storefronts & Catalog Management (FR-9ï¿½FR-15)
Creator Storefront Builder

As a creator, I want to customize my storefront so that my followers trust my recommendations.
Acceptance Criteria
Configure display name, bio, hero image, theme presets, and featured sections.
Curate product list from approved catalog with drag-and-drop ordering.
Preview storefront before publishing; publish updates with change log.

Merchant Storefront Setup

As a merchant, I want to brand my storefront so that buyers recognize and trust my business.
Acceptance Criteria
Upload logo, hero media, and select theme; configure store and return addresses.
Add return/privacy policies or opt into platform defaults.
Highlight best sellers, new products, flash sales, and environmental impact data (optional capture only).

Product Creation & Editing

As a merchant, I want to add or edit products so that my catalog stays accurate.
Acceptance Criteria
Form captures name, description, media, variants, inventory, pricing, dimensions, SKU, materials, and warranty info.
Support draft and active statuses with validation on required fields.
Change history retained per product with timestamps and editor identity.

Shopify URL Import

As a merchant, I want to import products via Shopify URL so that onboarding is faster.
Acceptance Criteria
URL input fetches product data, media, and variant combinations.
Mapping interface allows field confirmation and manual tweaks.
Imported products enter a review queue; admin approval required before going live.

Commission Configuration

As a merchant, I want to set commissions per product so that creators are incentivized appropriately.
Acceptance Criteria
Configure base commission rate, boost-to-top fee, and influencer filter bonus.
Display number of influencers currently promoting the product.
Effective dates tracked; updates notify subscribed creators.
Epic: Affiliate Links & Samples Workflow (FR-16ï¿½FR-22)
Affiliate Link Generator

As a creator, I want to generate trackable links so that I can share products across channels.
Acceptance Criteria
Unique links for product and storefront variants; QR and short link options.
Redirect tracking records click source and timestamp.
Links automatically expire if product is removed or commission terms change drastically.

Link Performance Dashboard

As a creator, I want to monitor link performance so that I can optimize content.
Acceptance Criteria
Display clicks, conversions, sales value, commission earned, and conversion rate.
Time filters (7-day, 30-day, custom) and export to CSV.
Highlight top-performing links and those nearing expiry.

Sample Request & Approval Flow

As a creator, I want to request product samples so that I can create authentic content.
Acceptance Criteria
Request form captures objective, preferred shipping address, and content timeline.
Status progression: pending, approved (free/discount), shipped, delivered, content submitted, expired.
14-day countdown with automatic charge if no content uploaded; notifications at key milestones.
If merchant does not include delivery fee, show a "Delivery fee not included" section in request detail with actions: "Pay delivery fee" and "Cancel sample request".
Affiliate link remains available to the influencer whether the request is accepted or declined.

Merchant Sample Decision Center

As a merchant, I want to manage sample requests so that I can control promotional spend.
Acceptance Criteria
See creator profile, past performance metrics, and proposed content timeline.
Approve free, approve with discount, or decline; specify shipping tracking number.
Decisions sync to creator dashboard and trigger email/in-app notifications.
If delivery is included on approval, merchant can pay for shipping (label/payment) as part of acceptance.
For merchant-initiated sample requests (engaging a creator), delivery fee must be included by the merchant.

\*\*Influencer Creator Center Promotion Flow

As an influencer, I want to discover and manage promotions in Creator Center so that I can request samples, get links, and coordinate with merchants without purchasing there.
Acceptance Criteria
Influencer cannot complete onboarding until a buyer account is linked (new or existing).
In Creator Center (Shop), influencers can see commission rate, request samples, and get promotion links; purchasing is disabled in Creator Center.
Standard buyers never see commission data, promotion requests, or sample triggers while in buyer mode.
Merchant chat entry points are available in Creator Center and synced with the unified chat history.

Influencer Refusal/Discount Redirect to Buyer

As an influencer, when my sample request is refused or a discount is offered, I want to switch to my buyer account to complete the purchase so that I can still promote the product.
Acceptance Criteria
When status = Refused, show action "Buy with Customer Account":
If buyer account is linked, redirect to buyer product page with product context.
If not linked, show: "A customer account must be linked to proceed" with link-to-link flow.
When status = Discount Offered, show action "Buy with Discount":
If buyer account is linked, redirect to buyer product page with product context and auto-apply discount.
If not linked, show: "A customer account must be linked to proceed" with link-to-link flow.
Affiliate link for the product remains accessible in Creator Center before/after purchase.
Epic: Commerce & Order Lifecycle (FR-23ï¿½FR-29)
Stripe Checkout Integration

As a buyer, I want to pay with my preferred method so that checkout is convenient.
Acceptance Criteria
Support Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Samsung Pay, and flag BAIeBill as upcoming.
Taxes, duties, shipping, and discounts itemized before confirmation.
Success and failure webhooks update order records instantly.

Order Status Synchronization

As a user, I want consistent order statuses so that everyone understands order progress.
Acceptance Criteria
Status lifecycle from pending through completed mirrored across creator, merchant, buyer, and admin views.
Status changes trigger notifications and are recorded with timestamp and actor.
Admin overrides logged with reason.

Order Detail View

As a buyer, I want to review order details so that charges are transparent.
Acceptance Criteria
Display subtotal, shipping, duties, discounts, tax, and total along with payment method summary.
Show timeline of key events (order placed, payment captured, shipped, delivered).
Provide printable receipt and resend email option.

Shipping SLA & Tracking

As a merchant, I want to manage shipping so that customers receive timely updates.
Acceptance Criteria
Configure carrier, method, tracking link, HS code, and package dimensions per order.
36-hour no-ship alert sent to merchant and flagged for admin escalation.
Supports domestic/international rules and shipping notes visible to buyers.

\*\*Buyer Portal Enhancements`n - As a buyer, I want a clean order experience so that I can manage purchases without influencer overlays.

Acceptance Criteria
Portal shows standard order data (history, statuses, support actions) without influencer-specific overlays.
Buyers can still share order details; promotion management remains in Creator Center.
Support actions (contact merchant, initiate refund) remain identical to standard buyers.
Standard buyers continue to access the same portal layout without commission highlights or promotion history.
Epic: Payments & Payouts (FR-30ï¿½FR-34)
Payout Scheduling

As a creator, I want to choose payout frequency so that it matches my cash flow needs.
Acceptance Criteria
Options for daily, weekly, and monthly payouts respecting 30-day hold.
Upcoming payout schedule with estimated amounts provided.
Changes require confirmation and record timestamp.
Minimum withdrawal amount for influencers is CAD $50; a per-withdrawal fee applies and is shown before confirmation.

Merchant Payout Dashboard

As a merchant, I want visibility into funds so that I can reconcile payments.
Acceptance Criteria
Show subscription charges, platform fees, payouts (past and upcoming), and hold statuses.
Export payout statements to CSV.
Alerts for failed payouts or expiring banking info.
Base holding period is 30 days post-delivery and dynamically decreases as return/purchase rates improve; show current policy and next review date.

Commission Ledger

As an admin, I want a commission ledger so that finance can audit payouts.
Acceptance Criteria
Per-order commission calculation including discount codes and boost fees.
Ledger supports filters by date, creator, merchant, and product.
Manual adjustments require reason entry and appear in audit log.

Payout Override Controls

As an admin, I want to release funds early in exceptional cases so that we can resolve escalations.
Acceptance Criteria
Override workflow includes justification, approval checkbox, and timestamp.
Affected parties notified; ledger reflects override with reference ID.
Epic: Communications & Support (FR-35ï¿½FR-39)
Unified Support Inbox

As a user, I want to submit support tickets so that issues are tracked and resolved.
Acceptance Criteria
Email intake creates in-app ticket assigned to relevant merchant or admin.
Ticket status (open, pending, resolved) visible to all stakeholders with history.
Attachments and internal notes supported.

Alert Center

As a creator or merchant, I want proactive alerts so that I can respond quickly to issues.
Acceptance Criteria
Dashboard cards for shipping delays, refund requests, sample deadlines, and payout issues.
Users can configure notification channels (email, in-app).
Alerts link to the originating record for quick action.

Buyer Issue Categorization

As a buyer, I want structured issue reporting so that merchants can resolve problems efficiently.
Acceptance Criteria
Categories include damaged item, non-delivery, wrong item, and other with free text.
Evidence upload and preferred resolution required.
SLA timers visible to merchant and buyer; escalation flag at expiry.

Synced Influencer Chats

As a linked influencer, I want a single conversation history with merchants so that context is never lost.
Acceptance Criteria
Chat initiated from buyer or influencer mode appears in the same thread with role indicators.
Merchant view clearly labels influencer identity and linked storefront.
Real-time sync across web and mobile clients with read receipts.
Epic: Analytics & Insights (FR-40ï¿½FR-43)
Creator Insights Dashboard

As a creator, I want performance analytics so that I can plan future content.
Acceptance Criteria
Metrics for revenue, conversion rate, AOV, best sellers, and sample conversions.
Time filters and comparison to previous period.
Export to CSV and share snapshot with collaborators.

Merchant Insights Dashboard

As a merchant, I want store analytics so that I can optimize operations.
Acceptance Criteria
KPIs for sales volume, returns, conversion, influencer engagement counts, and sample stats.
Alerts for spikes/drops surfaced with suggested investigations.
Segment data by product category and influencer.

Admin Health Monitor

As an admin, I want platform-level KPIs so that I can manage risk and growth.
Acceptance Criteria
Compliance alerts, returns spikes, payout delays, and sample backlog visualizations.
Drill-down links to affected users and orders.
Export of dashboard data with applied filters.

Reporting Exports

As any role, I want data exports so that I can analyze offline.
Acceptance Criteria
CSV exports respect role permissions and selected filters.
Export requests queued and delivered via download center and email link.
Audit log records who exported what and when.
Epic: Ratings & Reputation (FR-44ï¿½FR-46)
Buyer Reviews

As a buyer, I want to rate purchases so that the community benefits from my feedback.
Acceptance Criteria
Ratings and comments allowed for products, stores, and creators tied to completed orders.
Edit/delete permitted within 48 hours; abuse reporting available.
Moderation queue with status updates to reviewer when actioned.

Creator Quality Score

As an admin, I want to manage creator quality scores so that platform trust remains high.
Acceptance Criteria
Score calculation rules based on fulfillment, complaint rate, and policy adherence.
Admin overrides require reason and appear in history.
Score visible to merchants and buyers where applicable.

Merchant Review Display

As a buyer, I want to see merchant reputation so that I can decide confidently.
Acceptance Criteria
Aggregate rating, review highlights, and filter by rating available on storefront.
Merchants can publicly respond to reviews with timestamped replies.
Display badges for verified merchants and policy adherence.
Epic: Unified Roles & Discovery (FR-47ï¿½FR-51)
\*\*Role Switcher`n - As a creator/influencer, I want clear switching between buyer and Creator Center so that I always act in the correct context.

Acceptance Criteria
In buyer UI, show a visible "Go to influencer center" button when the user has an influencer profile.
In Creator Center, show a visible shortcut to switch to normal buyer account.
Standard buyers without an influencer profile never see the role switch controls.
Switching preserves state per mode and clearly indicates active role. Influencer-only features are not visible in buyer mode.

Influencer Directory

As a buyer, I want to browse influencer storefronts so that I can follow new voices.
Acceptance Criteria
Directory searchable by category, popularity, language, and verification status.
Entries show brief bio, top products, and follow/share actions.
Supports pagination and bookmarking.

Platform Search

As any user, I want a unified search so that I can find products and storefronts quickly.
Acceptance Criteria
Results include products, merchant storefronts, and influencer storefronts with scoped filters.
Influencer-linked results display commission info for eligible users.
Recently searched terms and personalized suggestions retained per account.

Recommendation Engine

As a buyer, I want personalized recommendations so that discovery feels curated.
Acceptance Criteria
Recommendations informed by influencer activity, buyer behavior, and trending products.
Provide ï¿½Because you follow Xï¿½ or ï¿½Promoted by Xï¿½ explainers.
Allow dismissal or feedback to refine future suggestions.
