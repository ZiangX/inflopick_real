# inflopick_real - Epic Breakdown

**Author:** ziang
**Date:** 2025-10-15
**Project Level:** 4 (Enterprise scale - multiple products/systems)
**Target Scale:** 40+ stories across 9 epics

---

## Epic Overview

Inflopick is a Level 4 enterprise platform connecting three distinct user bases (creators, merchants, buyers) through a multi-sided marketplace with complex workflows. The platform requires sophisticated role management, payments infrastructure, catalog management, order lifecycle, and communication systems.

### Epic Summary

| Epic | Name | Story Count | Priority | Dependencies |
|------|------|-------------|----------|--------------|
| 1 | Multi-Role Onboarding & Compliance | 5 stories | P0 | None |
| 2 | Storefronts & Catalog Management | 5 stories | P0 | Epic 1 |
| 3 | Affiliate Links & Samples Workflow | 5 stories | P1 | Epic 1, 2 |
| 4 | Commerce & Order Lifecycle | 5 stories | P0 | Epic 2 |
| 5 | Payments & Payouts | 4 stories | P0 | Epic 1, 4 |
| 6 | Communications & Support | 4 stories | P1 | Epic 1 |
| 7 | Analytics & Insights | 4 stories | P2 | Epic 3, 4, 5 |
| 8 | Ratings & Reputation | 3 stories | P2 | Epic 4 |
| 9 | Unified Roles & Discovery | 4 stories | P1 | Epic 1, 2 |

**Total Stories:** 39 stories
**Estimated Timeline:** 12 months to MVP+/v1 launch

### Strategic Delivery Phases

**Phase 1 - Foundation (Epics 1, 2, 4, 5):** Core platform infrastructure
- User onboarding for all roles with KYC
- Storefronts and catalog management
- Basic order lifecycle and payments
- ~20 stories, 3-4 months

**Phase 2 - Creator Tools (Epic 3):** Influencer monetization features
- Affiliate link generation and tracking
- Sample request workflow
- Creator Center discovery
- ~5 stories, 1-2 months

**Phase 3 - Engagement & Growth (Epics 6, 7, 8, 9):** Platform scaling
- Support and communications
- Analytics dashboards
- Ratings and reputation
- Discovery and recommendations
- ~14 stories, 3-4 months

---

## Epic 1: Multi-Role Onboarding & Compliance

**Goal:** Enable secure, compliant onboarding for creators, merchants, and buyers with role-based access control and KYC verification.

**Business Value:** Foundation for platform trust, regulatory compliance, and user account security across all roles.

**Success Criteria:**
- Creator KYC approval within 2 business days
- Merchant verification with admin review workflow
- Sub-user management for merchants (up to 2 additional accounts)
- Buyer account creation with address management
- Admin onboarding queue with compliance flags

**Technical Scope:**
- Multi-role authentication and authorization
- KYC/AML integration (Stripe Identity or Persona)
- Document upload and verification workflows
- Role-based permissions system
- Audit logging for compliance

---

### Story 1.1: Creator KYC Intake

**As a** creator
**I want to** submit personal, tax, and payout details
**So that** I can get approved to promote and sell products

**Prerequisites:**
- User authentication system in place
- Document upload capability

**Acceptance Criteria:**
1. System collects legal name, DOB, email, phone, preferred language, consent timestamps, and government ID upload
2. Creator must link to an existing buyer account or create one during onboarding; linkage is stored and visible to admins
3. Bank (EFT) data and specimen cheque captured; card-on-file for samples authorized with a 14-day countdown
4. Password, optional referral code, and active platform list (TikTok, Instagram, Facebook, YouTube, X, Snapchat) recorded
5. Confirmation email sent after approval with next steps
6. Dashboard shows onboarding status and outstanding document checklist
7. Application submitted to admin review queue with completeness indicators

**Technical Notes:**
- Integrate with KYC provider API for ID verification
- Implement file upload with virus scanning
- Store sensitive data encrypted at rest
- Create admin review interface for document verification

**Story Points:** 8

---

### Story 1.2: Merchant Verification Workflow

**As a** merchant owner
**I want to** provide business credentials and billing
**So that** my store can operate on Inflopick

**Prerequisites:**
- Story 1.1 (authentication foundation)
- Payment gateway integration

**Acceptance Criteria:**
1. System collects business registration documents, tax IDs (TPS/TVQ/HST), permits, and store address
2. Admin can flag missing items in review interface
3. Stripe subscription for CAD $15 monthly fee validated before storefront activation
4. Fund holding rule (base 30 days post-delivery, decreasing as return/purchase rates improve) configurable and stored per merchant
5. Verified status displayed to merchant and admins
6. Audit log records all approval decisions with timestamps and admin identity

**Technical Notes:**
- Stripe subscription API integration
- Document review workflow with admin actions
- Configurable holding period logic based on merchant metrics
- Email notifications for status changes

**Story Points:** 8

---

### Story 1.3: Merchant Sub-User Management

**As a** merchant owner
**I want to** invite team members
**So that** they can help manage the store without sharing my login

**Prerequisites:**
- Story 1.2 (merchant accounts established)
- Role-based access control system

**Acceptance Criteria:**
1. System supports up to two additional accounts per merchant with owner/admin/support roles
2. Role permissions govern catalog, orders, payouts, and support access with granular controls
3. Invitations sent via email with 7-day expiration
4. Acceptance logged with timestamp and IP address
5. Activity log tracks sub-user actions (create/edit/delete) for compliance audit trail
6. Owner can revoke access at any time with immediate effect

**Technical Notes:**
- Implement role-based permissions matrix
- Email invitation system with token-based acceptance
- Activity logging for all sub-user actions
- Admin override capability for support escalations

**Story Points:** 5

---

### Story 1.4: Buyer Account Setup

**As a** buyer
**I want to** create an account with saved addresses
**So that** checkout is faster and more accurate

**Prerequisites:**
- User authentication system (Story 1.1 foundation)

**Acceptance Criteria:**
1. System captures contact info (name, email, phone), password, and default shipping address
2. Email verification required before first purchase
3. Users can add/edit/remove multiple shipping addresses with labels (home, work, etc.)
4. Payment methods tokenized via Stripe and stored for one-click checkout
5. Order history initialized and visible post account creation
6. Unlinked buyers access standard storefront and checkout views only; influencer center and commission insights remain hidden until a creator link is established

**Technical Notes:**
- Stripe tokenization for payment methods
- Address validation API integration
- Order history database schema
- Role separation logic for buyer vs creator views

**Story Points:** 5

---

### Story 1.5: Admin Onboarding Queue

**As an** admin
**I want** a dashboard of onboarding applications
**So that** compliance reviews are timely

**Prerequisites:**
- Stories 1.1, 1.2 (creator and merchant workflows)

**Acceptance Criteria:**
1. Queue lists creators and merchants with status (pending, approved, rejected), risk flags, and missing documents
2. Admin can approve, reject, or request more info with reason captured in audit log
3. Actions trigger email/in-app notifications to applicants with status updates
4. Risk flags auto-generated based on document quality, duplicate detection, and compliance checks
5. SLA timers visible (target: 2 business days for creator KYC)
6. Bulk actions available for common decisions (e.g., approve multiple complete applications)

**Technical Notes:**
- Admin dashboard with filtering and search
- Notification system integration
- Risk scoring algorithm
- Audit trail with immutable logging

**Story Points:** 8

---

## Epic 2: Storefronts & Catalog Management

**Goal:** Enable creators and merchants to build branded storefronts and manage product catalogs with manual creation and Shopify URL import.

**Business Value:** Core platform offering - storefronts drive discovery, catalog quality determines conversion.

**Success Criteria:**
- Creator storefront customization with product curation
- Merchant storefront branding with policies and sections
- Product catalog with manual creation and Shopify import
- Commission configuration per product
- Draft/active product status management

**Technical Scope:**
- Storefront builder with theme system
- Product catalog database with variants and attributes
- Shopify URL import integration (AI-assisted extraction)
- Commission rules engine
- Media storage and CDN integration

---

### Story 2.1: Creator Storefront Builder

**As a** creator
**I want to** customize my storefront
**So that** my followers trust my recommendations

**Prerequisites:**
- Story 1.1 (creator accounts)
- Product catalog exists (Story 2.3)

**Acceptance Criteria:**
1. Creator can configure display name, bio (max 500 chars), hero image, and select from theme presets
2. Featured sections customizable: portfolio content, top products, categories
3. Curate product list from approved catalog with drag-and-drop ordering (max 100 products)
4. Preview storefront before publishing with mobile/desktop views
5. Publish updates with change log visible to admin
6. Public URL format: inflopick.com/creator/[username]

**Technical Notes:**
- Theme system with customizable variables
- Drag-and-drop UI component
- Preview rendering engine
- URL slug generation and validation

**Story Points:** 8

---

### Story 2.2: Merchant Storefront Setup

**As a** merchant
**I want to** brand my storefront
**So that** buyers recognize and trust my business

**Prerequisites:**
- Story 1.2 (merchant accounts)

**Acceptance Criteria:**
1. Merchant can upload logo, hero media (images/video), and select theme
2. Configure store address and return address (can be different)
3. Add return policy and privacy policy or opt into platform defaults
4. Highlight sections: best sellers (auto-populated by sales), new products (last 30 days), flash sales (scheduled), environmental impact data (optional capture only)
5. Store settings include business hours, contact info, social links
6. Public URL format: inflopick.com/store/[store-name]

**Technical Notes:**
- Media upload with compression and CDN storage
- Policy templates with customization
- Auto-population logic for best sellers
- Flash sale scheduling system

**Story Points:** 8

---

### Story 2.3: Product Creation & Editing

**As a** merchant
**I want to** add or edit products
**So that** my catalog stays accurate

**Prerequisites:**
- Story 2.2 (merchant storefronts)

**Acceptance Criteria:**
1. Form captures: name, description, media (images/videos, max 10), variants, inventory, pricing, dimensions, SKU, materials, color, size, made-in country, warranty info
2. Support draft and active statuses with validation on required fields (name, price, inventory, at least 1 image)
3. Variant system: create linked attributes (e.g., size/color combinations) with individual pricing and inventory
4. Change history retained per product with timestamps and editor identity (owner or sub-user)
5. Environmental impact metadata optional (unverified points system)
6. Bulk edit capability for price updates across variants

**Technical Notes:**
- Product database schema with variant support
- Image optimization pipeline
- Inventory tracking system
- Audit trail for product changes

**Story Points:** 13

---

### Story 2.4: Shopify URL Import

**As a** merchant
**I want to** import products via Shopify URL
**So that** onboarding is faster

**Prerequisites:**
- Story 2.3 (product creation infrastructure)

**Acceptance Criteria:**
1. URL input fetches product data using web scraping or Shopify API (if store allows)
2. AI-assisted extraction: product name, description, media URLs, variant combinations, pricing, attributes, inventory, dimensions, weight
3. Mapping interface allows field confirmation and manual tweaks before import
4. Imported products enter draft status with admin review queue flag
5. Admin approval required before products go live on platform
6. Import job tracking with status (queued, processing, completed, failed) and error logs
7. Provenance tracked: source URL, import date, importer identity

**Technical Notes:**
- Web scraping service with rate limiting
- AI extraction model (GPT-4 Vision for product images, structured extraction for text)
- Import queue worker system
- Human-in-the-loop review interface for admins

**Story Points:** 13

---

### Story 2.5: Commission Configuration

**As a** merchant
**I want to** set commissions per product
**So that** creators are incentivized appropriately

**Prerequisites:**
- Story 2.3 (product catalog)
- Story 1.1 (creator accounts)

**Acceptance Criteria:**
1. Configure base commission rate per product (default 8%, range 5-20%)
2. Boost-to-top fee option: pay extra commission for featured placement on creator storefronts
3. Influencer filter bonus: extra commission for specific creators (manual selection or tier-based)
4. Display number of influencers currently promoting the product (updated real-time)
5. Effective dates tracked for commission changes; updates notify subscribed creators via email
6. Commission preview calculator: estimate cost per sale based on price and commission settings

**Technical Notes:**
- Commission rules engine with effective dating
- Creator notification system for commission changes
- Influencer count tracking (affiliate link generation triggers increment)
- Commission calculator with preview UI

**Story Points:** 8

---

## Epic 3: Affiliate Links & Samples Workflow

**Goal:** Enable creators to generate trackable affiliate links, request product samples, and manage promotion workflows within Creator Center.

**Business Value:** Core creator monetization feature - drives creator engagement and content generation.

**Success Criteria:**
- Unique affiliate link generation with tracking
- Sample request and approval workflow with states
- Creator Center discovery without purchasing
- Link performance dashboard with conversion metrics
- Merchant sample decision center

**Technical Scope:**
- Link generation and redirect tracking system
- Sample workflow state machine
- Creator Center UI separate from buyer UI
- Analytics pipeline for link clicks and conversions
- Merchant notification and decision interface

---

### Story 3.1: Affiliate Link Generator

**As a** creator
**I want to** generate trackable links
**So that** I can share products across channels

**Prerequisites:**
- Story 2.3 (product catalog)
- Story 1.1 (creator accounts)

**Acceptance Criteria:**
1. Generate unique affiliate links for products and storefronts with format: inflopick.com/r/[creator-id]/[product-id]
2. QR code generation option for offline promotion (events, print media)
3. Short link option for social media (inflopick.com/r/[short-code])
4. Redirect tracking records click source (referrer header), timestamp, device type, and geolocation
5. Links automatically expire if product is removed or commission terms change drastically (>50% reduction)
6. Bulk link generation for multiple products with CSV export

**Technical Notes:**
- Link generation service with UUID collision prevention
- QR code generation library
- URL shortening service with analytics
- Redirect service with UTM parameter capture
- Expiration job scheduler

**Story Points:** 8

---

### Story 3.2: Link Performance Dashboard

**As a** creator
**I want to** monitor link performance
**So that** I can optimize content

**Prerequisites:**
- Story 3.1 (affiliate links)
- Analytics events pipeline

**Acceptance Criteria:**
1. Display per-link metrics: clicks, conversions (purchases), sales value, commission earned, conversion rate
2. Time filters: 7-day, 30-day, 90-day, custom date range
3. Export to CSV with selected filters and date range
4. Highlight top-performing links (sorted by conversion rate or revenue)
5. Flag links nearing expiry (product about to be removed or commission change pending)
6. Comparison view: compare 2-3 links side-by-side for A/B testing insights

**Technical Notes:**
- Analytics data warehouse for aggregations
- Real-time dashboard with cached metrics (5-min refresh)
- CSV export service
- Expiry prediction logic based on merchant signals

**Story Points:** 8

---

### Story 3.3: Sample Request & Approval Flow

**As a** creator
**I want to** request product samples
**So that** I can create authentic content

**Prerequisites:**
- Story 2.3 (product catalog)
- Story 1.1 (creator accounts with card-on-file)

**Acceptance Criteria:**
1. Request form captures: objective (review, tutorial, comparison), preferred shipping address, content timeline (days to upload)
2. Status progression: pending → approved (free/discount) → shipped → delivered → content submitted → expired
3. 14-day countdown starts at delivery; automatic card charge if no content uploaded
4. Notifications at key milestones: request submitted, merchant decision, shipped, delivered, 7-day reminder, charged
5. If merchant does not include delivery fee, show "Delivery fee not included" section in request detail with actions: "Pay delivery fee" (creator pays) and "Cancel sample request"
6. Affiliate link for product remains available to influencer whether request is accepted or declined
7. Content upload interface: link to published content (URL) or file upload with notes

**Technical Notes:**
- Sample workflow state machine with transition rules
- Countdown scheduler with card charge integration (Stripe)
- Multi-channel notifications (email, in-app, SMS optional)
- Content submission tracking

**Story Points:** 13

---

### Story 3.4: Merchant Sample Decision Center

**As a** merchant
**I want to** manage sample requests
**So that** I can control promotional spend

**Prerequisites:**
- Story 3.3 (sample request flow)
- Story 7.1 (creator insights for merchant view)

**Acceptance Criteria:**
1. Sample request inbox shows: creator profile, follower count, past performance metrics (if available), proposed content timeline
2. Decision options: approve free, approve with discount (specify %), decline with optional message
3. Decisions sync to creator dashboard and trigger email/in-app notifications within 1 hour
4. If delivery is included on approval, merchant can pay for shipping label/payment as part of acceptance workflow
5. For merchant-initiated sample requests (engaging a creator proactively), delivery fee must be included by merchant (they are requesting the creator's service)
6. Sample tracking: see all sent samples with status, content submission status, and ROI metrics (sales generated from creator after sample)
7. Bulk actions: approve/decline multiple requests with templated responses

**Technical Notes:**
- Sample decision queue with filtering (pending, approved, declined)
- Shipping label generation integration (carrier APIs or third-party service)
- Notification dispatch system
- ROI tracking: link sample to affiliate link performance post-delivery

**Story Points:** 13

---

### Story 3.5: Influencer Creator Center Promotion Flow

**As an** influencer
**I want to** discover and manage promotions in Creator Center
**So that** I can request samples, get links, and coordinate with merchants without purchasing there

**Prerequisites:**
- Story 1.1 (creator accounts with buyer linkage requirement)
- Story 2.3 (product catalog)
- Story 3.1 (affiliate links)

**Acceptance Criteria:**
1. Influencer cannot complete onboarding until a buyer account is linked (new or existing)
2. In Creator Center (Shop section), influencers can see: commission rate, request sample button, get promotion link button; purchasing is disabled (no "Add to Cart")
3. Standard buyers never see commission data, promotion requests, or sample triggers while in buyer mode
4. Merchant chat entry points available in Creator Center with role indicator (shows as influencer, not buyer)
5. When sample request status = Refused, show action "Buy with Customer Account": if buyer account linked → redirect to buyer product page with product context; if not linked → show "A customer account must be linked to proceed" with link-to-link flow
6. When sample request status = Discount Offered, show action "Buy with Discount": if buyer account linked → redirect to buyer product page with product context and auto-apply discount; if not linked → show link-required message
7. Affiliate link for product remains accessible in Creator Center before/after purchase decision

**Technical Notes:**
- Separate Creator Center UI routing (different navbar, no cart icon)
- Role-based rendering logic (hide purchasing features)
- Product context passing between Creator Center and buyer mode
- Discount auto-application logic for sample offers
- Account linkage enforcement at onboarding

**Story Points:** 13

---

## Epic 4: Commerce & Order Lifecycle

**Goal:** Enable buyers to purchase products via Stripe Checkout with comprehensive order lifecycle management across all roles.

**Business Value:** Core revenue driver - order completion and fulfillment directly impact GMV and customer satisfaction.

**Success Criteria:**
- Stripe Checkout integration with multiple payment methods
- Order status synchronization across all roles
- Shipping SLA management with carrier tracking
- Buyer portal with standard order experience
- Refund and return handling workflows

**Technical Scope:**
- Payment gateway integration (Stripe Checkout)
- Order management system with status transitions
- Shipping carrier integrations (Canada Post, UPS, DHL, FedEx, Intelcom)
- Notification system for order events
- Return and refund processing

---

### Story 4.1: Stripe Checkout Integration

**As a** buyer
**I want to** pay with my preferred method
**So that** checkout is convenient

**Prerequisites:**
- Story 1.4 (buyer accounts)
- Story 2.3 (product catalog with pricing)

**Acceptance Criteria:**
1. Support payment methods: Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Samsung Pay; flag BAIeBill as upcoming
2. Checkout shows itemized breakdown: subtotal, shipping (calculated by address), duties (if international), taxes (GST/HST/PST/QST by province), discounts (promo codes, influencer codes), total
3. Stripe Checkout hosted session with redirect back to order confirmation page
4. Success webhook updates order record instantly: order status → paid, payment timestamp, Stripe charge ID
5. Failure webhook triggers retry prompt or alternate payment method selection
6. Guest checkout option (email required, account created post-purchase)

**Technical Notes:**
- Stripe Checkout API integration with webhook handlers
- Tax calculation API (TaxJar or Stripe Tax)
- Shipping rate API (carrier APIs or flat-rate configuration)
- Discount code validation and application logic
- Order confirmation email template

**Story Points:** 13

---

### Story 4.2: Order Status Synchronization

**As a** user (any role)
**I want** consistent order statuses
**So that** everyone understands order progress

**Prerequisites:**
- Story 4.1 (order creation)

**Acceptance Criteria:**
1. Status lifecycle: pending → paid → shipped → delivered → completed (after 14-day return period), with alternate paths: cancelled, refund requested, returned, refunded, partially refunded, payment failed
2. Status changes trigger notifications (email + in-app) to buyer, merchant, and creator (if affiliate link used)
3. Status transitions recorded with timestamp and actor (system, merchant, buyer, admin)
4. Admin override capability with reason captured in audit log
5. Status mirrored across: buyer order history, merchant order dashboard, creator affiliate performance, admin order monitor
6. Real-time sync with < 1-minute delay across all views

**Technical Notes:**
- Order state machine with transition validation
- Event-driven status updates (webhooks, internal events)
- Multi-role notification dispatch
- Audit trail with immutable logging
- Admin override interface with reason dropdown

**Story Points:** 8

---

### Story 4.3: Order Detail View (Buyer Portal)

**As a** buyer
**I want to** review order details
**So that** charges are transparent

**Prerequisites:**
- Story 4.1 (orders created)

**Acceptance Criteria:**
1. Display order breakdown: subtotal, shipping, duties, discounts (with code/influencer name if applicable), tax, total
2. Show payment method summary (last 4 digits, card brand)
3. Timeline of key events with timestamps: order placed, payment captured, shipped (with tracking link), delivered, completed
4. Provide printable receipt option (PDF generation)
5. Resend order confirmation email option
6. Standard buyers see no influencer-specific overlays (commission data, promotion details)
7. Contact merchant button and initiate return/refund button available based on order status

**Technical Notes:**
- Order detail rendering with role-based filtering
- PDF receipt generation service
- Email resend functionality
- Timeline visualization component

**Story Points:** 5

---

### Story 4.4: Shipping SLA & Tracking

**As a** merchant
**I want to** manage shipping
**So that** customers receive timely updates

**Prerequisites:**
- Story 4.1 (orders)
- Carrier integrations

**Acceptance Criteria:**
1. Configure per-order: carrier (Canada Post, UPS, DHL, FedEx, Intelcom), method (standard, express, domestic, international), tracking number, HS code (for international), package dimensions
2. 36-hour no-ship alert: if order status = paid for >36 hours without shipping → send alert to merchant and flag for admin escalation
3. Tracking link stored and visible to buyer in order detail (format: carrier.com/track/[number])
4. Shipping notes field (optional): special instructions visible to buyer
5. Carrier webhook integration (where available) to auto-update delivery status
6. Bulk shipping label generation for multiple orders (CSV upload or multi-select)

**Technical Notes:**
- Carrier API integrations for tracking and label generation
- SLA monitoring job scheduler with escalation logic
- Webhook handlers for carrier delivery updates
- Bulk operations UI with label printing

**Story Points:** 13

---

### Story 4.5: Buyer Portal Enhancements

**As a** buyer
**I want** a clean order experience
**So that** I can manage purchases without influencer overlays

**Prerequisites:**
- Story 4.3 (order detail view)

**Acceptance Criteria:**
1. Portal shows standard order data: history (all orders with status), order details, support actions (contact merchant, initiate refund/return)
2. Buyers with linked influencer accounts see no influencer-specific overlays in buyer mode (commission highlights, promotion history hidden)
3. Support actions available based on order status: contact merchant (always), request refund (if < 14 days since delivery), initiate return (if < 14 days and merchant accepts returns)
4. Standard buyers (no influencer account) access identical portal layout without any creator-specific UI elements
5. Order search and filtering: by status, date range, merchant name, product name

**Technical Notes:**
- Role-based UI rendering (buyer context only)
- Order filtering and search backend
- Support action routing based on order status and merchant policies
- Unified buyer experience regardless of influencer linkage

**Story Points:** 5

---

## Epic 5: Payments & Payouts

**Goal:** Manage platform payments via Stripe and configure creator/merchant payouts with holding periods and fee structures.

**Business Value:** Critical for trust and cash flow - timely payouts drive creator and merchant satisfaction and retention.

**Success Criteria:**
- Stripe Connect for merchant and creator payouts
- Configurable payout frequency for creators
- Merchant payout dashboard with fee breakdowns
- Commission ledger for finance auditing
- Admin payout override controls

**Technical Scope:**
- Stripe Connect integration (Standard accounts)
- Payout scheduling system
- Commission calculation engine
- Fee management (subscription, platform, withdrawal)
- Audit trail for financial transactions

---

### Story 5.1: Payout Scheduling (Creators)

**As a** creator
**I want to** choose payout frequency
**So that** it matches my cash flow needs

**Prerequisites:**
- Story 1.1 (creator accounts with bank info)
- Story 4.1 (orders generating commissions)

**Acceptance Criteria:**
1. Payout frequency options: daily, weekly (every Friday), monthly (1st of month); respects 30-day hold period from order completion
2. Upcoming payout schedule displayed with estimated amounts based on pending commissions
3. Frequency changes require confirmation and record timestamp; new frequency applies to next eligible payout
4. Minimum withdrawal amount: CAD $50; if balance < $50, payout delayed until threshold met
5. Per-withdrawal fee applies (configurable: e.g., $2 flat or 1% min $1); fee shown before confirmation
6. Payout history: date, amount, fee, net amount, status (pending, completed, failed), Stripe transfer ID

**Technical Notes:**
- Payout scheduler with frequency logic and 30-day hold enforcement
- Balance calculation service with real-time commission aggregation
- Stripe Connect payout API integration
- Fee configuration system (admin-adjustable)
- Payout history database with reconciliation

**Story Points:** 8

---

### Story 5.2: Merchant Payout Dashboard

**As a** merchant
**I want** visibility into funds
**So that** I can reconcile payments

**Prerequisites:**
- Story 1.2 (merchant accounts with bank info)
- Story 4.1 (orders generating revenue)

**Acceptance Criteria:**
1. Dashboard shows: subscription charges (CAD $15/month), platform commission (8% baseline), payouts (past and upcoming with estimated amounts), hold statuses (days remaining per order)
2. Export payout statements to CSV with filters (date range, status)
3. Alerts for: failed payouts (bank info issue), expiring banking info (e.g., card expiration), unusual hold extensions
4. Base holding period: 30 days post-delivery, dynamically decreases as return/purchase rates improve (algorithm: if return rate < 5% and purchase volume > 20 orders, reduce hold to 14 days; show current policy and next review date)
5. Payout breakdown per transaction: gross revenue, platform commission, net payout, taxes withheld (if applicable)

**Technical Notes:**
- Payout dashboard with real-time balance updates
- CSV export service with flexible filters
- Alert system with configurable thresholds
- Hold period adjustment algorithm with merchant metrics tracking
- Payout reconciliation with Stripe transfers

**Story Points:** 8

---

### Story 5.3: Commission Ledger (Admin)

**As an** admin
**I want** a commission ledger
**So that** finance can audit payouts

**Prerequisites:**
- Story 4.1 (orders)
- Story 5.1, 5.2 (payouts)

**Acceptance Criteria:**
1. Per-order commission calculation: product price × commission rate, adjusted for discount codes and boost fees
2. Ledger supports filters: date range, creator (username/email), merchant (store name), product (SKU/name), order status
3. Manual adjustments require: reason entry (dropdown: error correction, goodwill, policy exception), approval checkbox, admin identity, timestamp
4. Adjustments appear in audit log and trigger notifications to affected parties (creator, merchant)
5. Export ledger to CSV with applied filters and calculated totals
6. Reconciliation view: compare ledger totals to Stripe Connect transfer totals (flag discrepancies)

**Technical Notes:**
- Commission calculation service with complex rule support
- Ledger database with full transaction history
- Admin adjustment interface with approval workflow
- CSV export with aggregation calculations
- Reconciliation job comparing ledger to Stripe data

**Story Points:** 8

---

### Story 5.4: Payout Override Controls (Admin)

**As an** admin
**I want to** release funds early in exceptional cases
**So that** we can resolve escalations

**Prerequisites:**
- Story 5.1, 5.2 (payout systems)

**Acceptance Criteria:**
1. Override workflow: select payout (creator or merchant), enter justification (free text + category dropdown: emergency, error, policy change, legal), approval checkbox with "I understand the risk" confirmation
2. Timestamp recorded with admin identity (email, name)
3. Affected parties notified via email within 15 minutes: "Your payout has been expedited by admin for [reason]"
4. Ledger reflects override with reference ID and link to admin action log
5. Override audit trail: searchable by admin, date, reason category, affected party
6. Override limits: max CAD $10,000 per override, max 5 overrides per admin per month (configurable)

**Technical Notes:**
- Admin override interface with multi-step confirmation
- Payout API with early release capability
- Notification dispatch with templated messages
- Audit trail with detailed logging
- Override limit enforcement with admin role checks

**Story Points:** 5

---

## Epic 6: Communications & Support

**Goal:** Enable multi-channel support (email, in-app) with structured issue reporting and merchant/buyer communication workflows.

**Business Value:** Customer satisfaction and dispute resolution - impacts retention and platform reputation.

**Success Criteria:**
- Unified support inbox for tickets
- Alert center for proactive notifications
- Buyer issue categorization with resolution workflows
- Synced influencer/merchant chat across contexts

**Technical Scope:**
- Support ticketing system
- Multi-channel notification service (email, in-app, SMS optional)
- Chat system with role awareness
- Alert generation and delivery

---

### Story 6.1: Unified Support Inbox

**As a** user (any role)
**I want to** submit support tickets
**So that** issues are tracked and resolved

**Prerequisites:**
- Story 1.1, 1.2, 1.4 (all account types)

**Acceptance Criteria:**
1. Email intake: support@inflopick.com creates in-app ticket assigned to relevant merchant (if order-related) or platform admin
2. Ticket status: open, pending (waiting on user response), resolved; visible to all stakeholders with role-based permissions
3. Ticket history: all messages, attachments (images, PDFs), internal notes (admin/merchant only), status changes with timestamps
4. Attachments supported: images (damage evidence), PDFs (receipts), max 5 files per ticket, 10MB total
5. Internal notes: visible only to merchant and admin for case coordination
6. Auto-response: immediate confirmation email with ticket ID and expected response time (24h SLA)

**Technical Notes:**
- Email parsing service to create tickets
- Ticket database with role-based access control
- File upload with virus scanning and storage
- Auto-responder email template
- SLA tracking with escalation alerts

**Story Points:** 8

---

### Story 6.2: Alert Center

**As a** creator or merchant
**I want** proactive alerts
**So that** I can respond quickly to issues

**Prerequisites:**
- Story 4.1 (orders), Story 3.3 (samples)

**Acceptance Criteria:**
1. Dashboard cards for: shipping delays (>36h without ship), refund requests (new), sample deadlines (7-day reminder, 1-day urgent), payout issues (failed transfer)
2. Users can configure notification channels per alert type: email (always on), in-app (default on), SMS (opt-in, premium feature)
3. Alerts link directly to originating record for quick action (e.g., refund request alert → order detail page)
4. Alert history: view past 30 days with dismiss/archive actions
5. Alert frequency settings: real-time, daily digest (8am local time), weekly summary (Monday 8am)

**Technical Notes:**
- Alert generation service with rule engine
- Multi-channel notification dispatch
- User notification preferences database
- Deep linking from alerts to specific records
- Alert aggregation for digest mode

**Story Points:** 8

---

### Story 6.3: Buyer Issue Categorization

**As a** buyer
**I want** structured issue reporting
**So that** merchants can resolve problems efficiently

**Prerequisites:**
- Story 4.1 (orders)

**Acceptance Criteria:**
1. Issue categories: damaged item, non-delivery (expected delivery passed), wrong item (received different product), slow merchant reply, other (free text)
2. Evidence upload required for damaged/wrong item: photos mandatory (min 2, max 5)
3. Preferred resolution: refund (full/partial), replacement, discount coupon, contact merchant directly
4. SLA timers visible to merchant and buyer: 24h for initial merchant response, 72h for resolution; escalation flag to admin at expiry
5. Merchant response options: approve resolution, counter-offer (e.g., partial refund instead of full), request more info, escalate to admin
6. Issue resolution tracking: in-app status updates, email notifications at each step

**Technical Notes:**
- Issue categorization form with conditional fields
- Evidence upload with image validation
- SLA timer service with escalation logic
- Merchant response workflow with counter-offers
- Resolution tracking with audit trail

**Story Points:** 8

---

### Story 6.4: Synced Influencer Chats

**As a** linked influencer
**I want** a single conversation history with merchants
**So that** context is never lost

**Prerequisites:**
- Story 1.1 (creator/buyer linkage)
- Story 3.5 (Creator Center)

**Acceptance Criteria:**
1. Chat initiated from buyer mode or influencer mode appears in the same thread with role indicators ("You as Buyer", "You as Influencer")
2. Merchant view clearly labels influencer identity (display name, username) and linked storefront URL
3. Real-time sync across web and mobile clients with read receipts (single checkmark = sent, double = read)
4. Chat history persists across role switches: influencer can see buyer messages, buyer can see influencer messages in same conversation
5. Message types supported: text (max 2000 chars), images (max 5 per message), links (auto-preview), product cards (clickable to product page)
6. Typing indicators show current role: "Merchant is typing...", "Buyer [name] is typing...", "Influencer [name] is typing..."

**Technical Notes:**
- Chat service with unified conversation database
- Role indicator metadata per message
- Real-time sync via WebSockets or Server-Sent Events
- Read receipt tracking
- Message type support (text, media, rich cards)

**Story Points:** 13

---

## Epic 7: Analytics & Insights

**Goal:** Provide role-specific dashboards with performance metrics, trends, and export capabilities.

**Business Value:** Data-driven decision making - insights drive creator content strategy, merchant operations optimization, and platform health monitoring.

**Success Criteria:**
- Creator insights dashboard with revenue and conversion metrics
- Merchant insights dashboard with sales and influencer engagement
- Admin health monitor with compliance and platform KPIs
- CSV export functionality for all roles

**Technical Scope:**
- Analytics data warehouse with aggregations
- Dashboard rendering with charts and visualizations
- Export service with role-based permissions
- Real-time metrics with caching

---

### Story 7.1: Creator Insights Dashboard

**As a** creator
**I want** performance analytics
**So that** I can plan future content

**Prerequisites:**
- Story 3.1, 3.2 (affiliate links and tracking)
- Story 4.1 (orders)

**Acceptance Criteria:**
1. Metrics displayed: total revenue (sum of commissions earned), conversion rate (orders / link clicks × 100), AOV (average order value from affiliate links), best sellers (top 5 products by revenue), sample conversion rate (samples received / content uploaded with sales generated)
2. Time filters: last 7 days, last 30 days, last 90 days, custom date range, comparison to previous period (e.g., this month vs last month)
3. Charts: revenue trend line (daily/weekly/monthly), conversion funnel (clicks → views → cart → purchase), product performance bar chart
4. Export to CSV: all metrics with selected filters, includes raw data and calculated metrics
5. Share snapshot: generate shareable link (read-only, expires in 7 days) for collaborators or portfolio

**Technical Notes:**
- Analytics aggregation service with pre-calculated metrics (updated hourly)
- Chart rendering library (Chart.js or D3.js)
- CSV export with query optimization
- Shareable snapshot generation with expiration tokens

**Story Points:** 8

---

### Story 7.2: Merchant Insights Dashboard

**As a** merchant
**I want** store analytics
**So that** I can optimize operations

**Prerequisites:**
- Story 4.1 (orders)
- Story 3.4 (samples)

**Acceptance Criteria:**
1. KPIs: sales volume (total revenue, order count), returns (return count, return rate %), conversion rate (orders / product views × 100), influencer engagement (count of influencers promoting, sample requests pending/approved/declined), sample stats (samples sent free/discount, content completion rate)
2. Alerts for spikes/drops: sales spike (>50% increase week-over-week), sales drop (>30% decrease), conversion drop (>20% decrease), shipping time spike (>50% increase in avg ship time)
3. Suggested investigations: alert links to potential causes (e.g., "Check for product stock issues" if conversion drops)
4. Segment data by: product category, influencer (compare performance by different creators), time period
5. Export to CSV: sales report, returns report, influencer performance report

**Technical Notes:**
- KPI calculation service with anomaly detection algorithms
- Alert generation based on statistical thresholds
- Segmentation query engine
- CSV export with multiple report templates

**Story Points:** 8

---

### Story 7.3: Admin Health Monitor

**As an** admin
**I want** platform-level KPIs
**So that** I can manage risk and growth

**Prerequisites:**
- All prior epics (platform-wide data)

**Acceptance Criteria:**
1. Compliance alerts: KYC approval backlog (>2 days), payout failures (bank errors), merchant verification delays, creator content upload overdue (sample countdown < 2 days)
2. Returns spikes: flag merchant with return rate >15% in 30-day period, suggest investigation
3. Platform KPIs: GMV (gross merchandise value), active creators (posted content last 30 days), active merchants (sales last 30 days), total orders, average commission rate, payout backlog ($ amount pending)
4. Drill-down links: click KPI → affected users/orders list (e.g., "Payout backlog" → list of pending payouts)
5. Export dashboard data: CSV with applied filters, includes user details and aggregated metrics

**Technical Notes:**
- Platform-wide aggregation service with multi-tenant queries
- Anomaly detection for spikes/drops
- Drill-down query generation with role filters
- CSV export with admin-level data access

**Story Points:** 8

---

### Story 7.4: Reporting Exports

**As any** role
**I want** data exports
**So that** I can analyze offline

**Prerequisites:**
- Story 7.1, 7.2, 7.3 (dashboards)

**Acceptance Criteria:**
1. CSV exports respect role permissions: creators see only their data, merchants see their store data, admins see platform-wide data
2. Selected filters applied to export: date range, status, product/category, influencer
3. Export requests queued for large datasets (>10,000 rows); delivered via download center (in-app) and email link (expires in 7 days)
4. Audit log records: who exported what, when, and which filters applied (compliance tracking)
5. Export formats: CSV (default), Excel (.xlsx) for merchants/admins
6. Scheduled exports: option to set up recurring exports (e.g., monthly sales report every 1st of month)

**Technical Notes:**
- Export queue worker system for async processing
- Role-based query filtering
- Email delivery service with expiring download links
- Audit logging for all export requests
- Scheduled export cron jobs

**Story Points:** 5

---

## Epic 8: Ratings & Reputation

**Goal:** Enable buyers to rate products, stores, and creators; provide quality scoring and review moderation.

**Business Value:** Trust and social proof - ratings drive purchasing decisions and platform credibility.

**Success Criteria:**
- Buyer reviews for products, stores, and creators
- Creator quality score with admin moderation
- Merchant review display with aggregated ratings
- Abuse reporting and moderation workflows

**Technical Scope:**
- Review submission and storage
- Rating aggregation and display
- Quality score calculation algorithm
- Moderation queue and abuse detection

---

### Story 8.1: Buyer Reviews

**As a** buyer
**I want to** rate purchases
**So that** the community benefits from my feedback

**Prerequisites:**
- Story 4.1 (orders)

**Acceptance Criteria:**
1. Ratings allowed for: products (1-5 stars + comment), stores (1-5 stars + comment), creators (1-5 stars + comment); tied to completed orders only (order status = completed after 14-day return period)
2. Edit/delete permitted within 48 hours of submission; after 48h, contact support to modify
3. Abuse reporting available: flag review as spam, offensive, fake (requires reason selection)
4. Moderation queue: flagged reviews appear for admin review with status (pending, approved, removed)
5. Review display: verified purchase badge, buyer display name (not full name), review date, helpful votes (upvote/downvote by other buyers)
6. Review response: merchants can publicly respond to store reviews, creators can respond to creator reviews (one response per review, timestamped)

**Technical Notes:**
- Review database with order linkage verification
- Edit/delete time window enforcement
- Abuse flagging workflow with moderation queue
- Helpful vote aggregation
- Public response system with notification to reviewer

**Story Points:** 8

---

### Story 8.2: Creator Quality Score

**As an** admin
**I want to** manage creator quality scores
**So that** platform trust remains high

**Prerequisites:**
- Story 3.3 (sample workflow)
- Story 8.1 (creator reviews)

**Acceptance Criteria:**
1. Score calculation rules: content fulfillment rate (samples delivered → content uploaded / total samples × 100), complaint rate (buyer complaints / total affiliate orders × 100), policy adherence (warnings, violations from admin actions), average creator rating (from buyer reviews)
2. Score displayed to: merchants (when reviewing sample requests), buyers (on creator storefront, if score > 3.5 stars), admins (full detail view)
3. Admin overrides: manually adjust score with reason (dropdown: error correction, policy change, exceptional case), appears in score history with timestamp and admin identity
4. Score thresholds: < 3.0 stars triggers warning email to creator, < 2.5 stars triggers account review, < 2.0 stars triggers suspension (admin approval required)
5. Score history: track changes over time with reasons (algorithm update, admin override, new reviews)

**Technical Notes:**
- Quality score calculation service with weighted algorithm
- Score display logic with visibility rules
- Admin override interface with approval workflow
- Score threshold monitoring with automated actions
- Score history database with audit trail

**Story Points:** 8

---

### Story 8.3: Merchant Review Display

**As a** buyer
**I want to** see merchant reputation
**So that** I can decide confidently

**Prerequisites:**
- Story 8.1 (reviews)

**Acceptance Criteria:**
1. Aggregate rating displayed on merchant storefront: overall stars (average of all store reviews), review count, rating distribution (5-star: X%, 4-star: X%, etc.)
2. Review highlights: top positive review (most helpful votes), top critical review (most helpful votes with < 3 stars)
3. Filter by rating: show only 5-star reviews, 4-star, etc.; sort by most recent, most helpful, highest/lowest rating
4. Merchant public responses timestamped and displayed below reviews
5. Verified purchase badge on all reviews (only buyers with completed orders can review)
6. Badges: "Verified Merchant" (completed KYC), "Fast Shipper" (avg ship time < 24h), "Low Returns" (< 5% return rate)

**Technical Notes:**
- Review aggregation service with real-time updates
- Sorting and filtering query optimization
- Badge calculation based on merchant metrics
- Merchant response display with threading
- Verified purchase enforcement

**Story Points:** 5

---

## Epic 9: Unified Roles & Discovery

**Goal:** Enable seamless role switching between buyer and Creator Center; provide influencer directory and platform-wide search.

**Business Value:** Improved user experience and discovery - reduces friction for multi-role users and drives engagement.

**Success Criteria:**
- Clear role switcher UI for buyer ↔ Creator Center
- Influencer directory searchable by category and popularity
- Platform search for products, merchant storefronts, influencer storefronts
- Personalized recommendations for buyers

**Technical Scope:**
- Role switching UI with state preservation
- Directory and search indexing (Elasticsearch or Algolia)
- Recommendation engine with collaborative filtering
- Deep linking and SEO optimization

---

### Story 9.1: Role Switcher

**As a** creator/influencer
**I want** clear switching between buyer and Creator Center
**So that** I always act in the correct context

**Prerequisites:**
- Story 1.1 (creator/buyer linkage)
- Story 3.5 (Creator Center)

**Acceptance Criteria:**
1. In buyer UI: visible "Go to influencer center" button in top nav when user has influencer profile linked
2. In Creator Center: visible "Go to Shopping" button (switches to normal buyer account view)
3. Standard buyers without influencer profile never see role switch controls
4. Switching preserves state per mode: buyer cart persists, Creator Center selected products persist
5. Active role clearly indicated: buyer mode shows cart icon, Creator Center shows commission/link icons
6. Influencer-only features not visible in buyer mode: commission rates, affiliate link generation, sample request buttons

**Technical Notes:**
- Role detection logic based on account linkage
- State persistence per context (separate sessions/cookies)
- UI rendering with role-based component visibility
- Deep linking support (redirect to correct mode based on URL)

**Story Points:** 5

---

### Story 9.2: Influencer Directory

**As a** buyer
**I want to** browse influencer storefronts
**So that** I can follow new voices

**Prerequisites:**
- Story 2.1 (creator storefronts)

**Acceptance Criteria:**
1. Directory searchable by: category (same as product categories), popularity (follower count, affiliate sales volume), language (English, French), verification status (verified creators only)
2. Directory entries show: display name, profile photo, brief bio (first 100 chars), top 3 products (by sales), follow/share actions (share link to storefront)
3. Pagination: 20 creators per page, infinite scroll option
4. Bookmark feature: save favorite creators for quick access (in buyer account)
5. Sort options: most popular (sales volume), newest creators (join date), trending (sales growth last 30 days)

**Technical Notes:**
- Creator directory index with search filters
- Popularity calculation based on sales and engagement
- Pagination and infinite scroll implementation
- Bookmark storage in buyer profile
- Trending algorithm (time-weighted sales growth)

**Story Points:** 8

---

### Story 9.3: Platform Search

**As any** user
**I want** a unified search
**So that** I can find products and storefronts quickly

**Prerequisites:**
- Story 2.1, 2.2, 2.3 (storefronts and products)

**Acceptance Criteria:**
1. Search results include: products (name, description, tags), merchant storefronts (store name, bio), influencer storefronts (display name, bio)
2. Scoped filters: product category, price range, merchant location (Canada-wide or by province), creator category
3. Influencer-linked results: if buyer clicked from influencer link or storefront, show commission info and "Promoted by [creator]" tag (only for eligible users, not standard buyers)
4. Recently searched terms: saved per account (last 10 searches) with quick re-search
5. Personalized suggestions: autocomplete based on buyer behavior (past searches, purchases, browsing history)
6. Search analytics: track top searches, zero-result searches (for product gap analysis)

**Technical Notes:**
- Search index with Elasticsearch or Algolia
- Multi-entity search with result ranking
- Filter query builder with facets
- Search history storage per user
- Autocomplete service with personalization
- Analytics pipeline for search data

**Story Points:** 13

---

### Story 9.4: Recommendation Engine

**As a** buyer
**I want** personalized recommendations
**So that** discovery feels curated

**Prerequisites:**
- Story 4.1 (order history)
- Story 3.1 (affiliate link tracking)

**Acceptance Criteria:**
1. Recommendations informed by: influencer activity (creators buyer follows), buyer behavior (browsing history, purchases, wishlists), trending products (platform-wide sales velocity)
2. Explainers provided: "Because you follow [Creator X]", "Promoted by [Creator Y]", "Popular in [Category]", "Similar to [Product Z]"
3. Recommendation sections: homepage carousel (4-6 products), product detail page "You might also like" (3-4 products), email digest (weekly, opt-in)
4. Dismiss/feedback actions: "Not interested" (hides similar recommendations), "Tell us why" (dropdown: already own, not my style, too expensive)
5. Feedback refines future suggestions: collaborative filtering based on dismiss patterns and purchases
6. Recommendation diversity: avoid showing only one creator's products, balance popular vs niche

**Technical Notes:**
- Recommendation engine with collaborative filtering (user-based and item-based)
- Real-time recommendation API with caching
- Explainer text generation based on recommendation source
- Feedback collection and model retraining
- Diversity algorithm to balance recommendations

**Story Points:** 13

---

## Summary

**Total Stories:** 39 stories across 9 epics
**Estimated Effort:** 320+ story points (assuming 8-point average, high variance for complex stories)
**Timeline:** 12 months to MVP+/v1 with parallel workstreams

### Next Steps

1. **Phase 3: Solutioning** - Run `solution-architecture` workflow with Architect
2. **UX Specification** - Run `ux-spec` workflow for 4 role interfaces (Creator, Merchant, Buyer, Admin)
3. **Story Refinement** - Detailed acceptance criteria and technical breakdown per story
4. **Phase 4: Implementation** - Begin story-by-story development starting with Epic 1

---

_Epic breakdown generated from user-stories.md on 2025-10-15_
_Template: bmad/bmm/workflows/2-plan/prd/epics-template.md_
