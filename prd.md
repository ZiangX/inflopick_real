Inflopick Product Requirements Document (PRD)
Product: Inflopick Commerce Hub
Version: v1 (MVP-plus)
Author: Mary (Business Analyst)
Date: 2025-09-30
Source Inputs: project-brief.md (MVP/v1), buyer.md, creator.md, merchant.md
1. Product Overview
1.1 Vision & Value Proposition
Inflopick is a Canada-first commerce hub connecting creators, merchants, and buyers through creator-led storefronts and affiliate product links. Creators monetize their influence, merchants expand local reach, and buyers get trusted, curated products.
1.2 Strategic Goals (Year 1)
500 onboarded Canadian creators with active storefronts.
300 onboarded merchants with live catalogs and affiliate offers.
5,000 completed orders and 25% repeat buyer rate within six months.
KYC-compliant onboarding within two business days.
Reach take-rate profitability on GMV within 12 months.
1.3 Success Metrics
GMV per creator per month; buyer conversion rate; AOV; payout timeliness.
NPS (creators, merchants); support response < 24h for all roles.
1.4 Target Users & Primary Jobs-to-be-done
Creators: Build storefronts, share affiliate links, request samples, track performance, receive payouts.
Merchants: Publish catalog, manage commissions, fulfill orders, engage creators, track sales, manage payouts/fees.
Standard Buyers: Discover, purchase, review, and get support. No influencer-only data is shown in buyer mode.
Influencers (Creator Center): Discover products to promote, view commissions, request samples, generate affiliate links, and chat with merchants. Purchasing is disabled in Creator Center; influencers buy only via their normal buyer account.
Platform Admins: Oversee onboarding, catalog quality, orders, payouts, and compliance.
2. Scope Summary (v1 / MVP-plus)
2.1 In Scope
Multi-role onboarding with KYC.
Creator storefronts, affiliate link generation, per-link analytics.
Merchant storefronts with manual + URL import and commission controls.
Buyer purchase flow via Stripe Checkout and order lifecycle management.
Samples workflow between creators and merchants.
Messaging baseline (email + in-app audit trail placeholder).
Sales/earnings dashboards for creators and merchants.
Notifications for order states and samples milestones (email + basic in-app feed).
Buyer discovery via seller/influencer storefronts and platform search.
Influencer discovery in Creator Center (Shop) without purchasing.
2.2 Out of Scope (v1)
Certified views remuneration; deep fraud/returns automation; deep social API ingestion; eco-impact surfacing; NexShip/NexPay integrations; full omnichannel support center.
2.3 Release Criteria
Stripe Checkout + Connect (sandbox + production tested); order status sync across roles; Shopify URL import with review queue; responsive storefront templates; support audit log.
3. User Journeys & Experience Goals
3.1 Creator Journey Highlights
Apply and pass KYC including payout and card-on-file for samples.
Configure storefront, bio, and connect socials.
Curate products, create affiliate links, publish content.
Track link performance, commissions, samples, payouts.

Experience goals: fast onboarding (<15 min), transparent commission tracking, timely notifications.
3.2 Merchant Journey Highlights
Business verification, payouts, invite sub-users.
Storefront branding, catalog import/creation, set commissions.
Manage orders, shipping, and support.
Analyze sales, returns, and influencer engagement.

Experience goals: efficient catalog, visibility into influencer activity, proactive alerts.
3.3 Buyer Journey Highlights
Discover via storefronts and platform search/recommendations.
Add to cart, checkout via Stripe, receive status updates.
Review orders and leave feedback.
If the user has an influencer profile, show a "Go to influencer center" button to switch to Creator Center.

Experience goals: trust-building, frictionless checkout, clear role switching when applicable.
3.4 Admin Journey Highlights
Review/approve onboarding.
Monitor platform health (orders, payouts, compliance alerts).
Intervene in support, fraud, or policy exceptions.
3.5 Influencer (Creator Center) Journey
Discover products to promote in Creator Center (Shop); view commission terms.
Request samples or generate affiliate links; purchasing is disabled in Creator Center.
If a sample is Refused or a Discount is offered by the merchant, use "Switch to Buyer" to complete the purchase; product context and discount (if any) are carried over.
If no buyer account is linked, show: "A customer account must be linked to proceed" with link-to-link flow.
Use merchant chat from Creator Center; conversations remain unified and identify the influencer.
4. Functional Requirements
4.1 Account Onboarding & Compliance
FR-1 Creator onboarding collects personal info, consent timestamps, and KYC documents. FR-2 Creators link or create a buyer account; set password, referral code (optional), active platform list. FR-3 Creators upload bank account info (EFT) and card on file for samples (14-day countdown). FR-4 Merchant onboarding supports business verification (docs, tax IDs, permits), verified status by admin. FR-5 Merchants register banking, CAD $15/month subscription via credit card, and fund holding rules (base 30 days post-delivery, dynamically decreasing as return/purchase rates improve). FR-6 Merchant sub-user management: up to two additional accounts with role-based permissions and audit logs. FR-7 Buyer accounts capture contact info and saved addresses. FR-8 Admin onboarding queue with document completeness and risk flags.
4.2 Storefronts & Catalog Management
FR-9 Creator storefront customization (display name, bio, hero, theme) and curated products. FR-10 Creator storefront shows portfolio content, link stats, featured products. FR-11 Merchant storefront branding, policies, best sellers, new products, flash sales, environmental metadata (capture only). FR-12 Product catalog supports manual creation and Shopify URL import; map name/desc/media/variants/attributes/inventory/pricing/shipping specs. FR-13 Product status (draft/active), scheduling flash sales/discount campaigns. FR-14 Commission settings per product: base rate, boost-to-top fee, influencer filter bonus; influencer count promoting. FR-15 Environmental impact metadata optional storage.
4.3 Affiliate Links & Samples Workflow (Creator Center)
FR-16 Creators generate trackable affiliate links; auto-expire when product removed. FR-17 Portfolio dashboard shows per-link metrics (clicks, conversions, sales value, commissions). FR-18 Sample workflow states: request, pending approval, approved (free/discount), shipping initiated, delivered, content uploaded deadline, expired/charged. FR-19 Merchants receive sample requests and decide approve/discount/decline; notifications trigger. FR-20 System enforces card charge at day 14 if no content/return; additional 14-day hold before adjustments. FR-21 Influencer promotion workflows operate exclusively in Creator Center (commission visibility, link creation, sample requests, merchant chat). Purchasing is disabled in Creator Center. FR-22 When sample status = Refused, show action "Buy with Customer Account": if buyer account linked, redirect to buyer product page with product context; if not linked, show message that a customer account must be linked to proceed (with link-to-link flow). FR-23 When sample status = Discount Offered, show action "Buy with Discount": if buyer account linked, redirect to buyer product page with product context and auto-apply discount; if not linked, show link-required message. FR-23a When merchant does not include delivery fee, the request detail shows a "Delivery fee not included" section with actions: "Pay delivery fee" and "Cancel sample request"; affiliate link remains available whether accepted or declined. FR-23b When merchant accepts a sample with delivery included, the merchant must be able to pay for shipping (label/payment) as part of acceptance. FR-23c When a merchant engages a creator and sends a sample (merchant-initiated request), delivery fee must be included by the merchant (they are requesting the creator’s service).
4.4 Orders, Checkout, and Fulfillment (Buyer)
FR-24 Buyer checkout uses Stripe Checkout supporting Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Samsung Pay, and BAIeBill (incoming flag). FR-25 Order statuses (pending, paid, shipped, delivered, completed, cancelled, refund requested, returned, refunded, partially refunded, payment failed) sync across roles. FR-26 Orders capture breakdown (subtotal, discounts, taxes, duties, shipping) and timestamps (creation, payment, fulfillment). FR-27 Shipping management supports carrier tracking (Canada Post, UPS, DHL, FedEx, Intelcom) with link storage and 36-hour ship alert. FR-28 Merchant configures shipping methods (normal, express, domestic, international) and HS codes. FR-29 Refund handling allows partial/full refunds with audit trail and communication log. FR-30 Buyer portal shows standard order history, statuses, and support actions; influencer promotion data is visible only in Creator Center.
4.5 Payments & Payouts
FR-31 Stripe Connect manages merchant and creator payouts with configurable frequency (daily/weekly/monthly). FR-32 Creators have payout dashboard with hold periods (30 days) and upcoming payments. FR-32a Influencer withdrawals enforce a minimum of CAD $50 per withdrawal; a per-withdrawal fee applies (configurable) and is displayed prior to confirmation. FR-33 Merchants view payout schedules, subscription charges, and fee breakdowns. FR-33a Merchant holding period defaults to 30 days post-delivery and decreases as the merchant’s return/purchase rate improves; current policy and next review date are visible in the payout dashboard. FR-34 Platform calculates commissions/fees per order, accounting for discount codes and boosts. FR-35 Admins can override payout holds in exceptional cases with logging.
4.6 Communication & Support
FR-36 Email-based support with in-app ticket viewable by involved roles. FR-37 Creator and merchant dashboards surface critical alerts (shipping delays, refund requests, sample deadlines). FR-38 Buyer issue types (damaged, non-delivery, wrong item) trigger merchant response flows. FR-39 Support actions include refund/replace, coupon issuance, and shipping payer. FR-39a Chats between influencers and merchants identify the influencer and remain synchronized across buyer/influencer contexts.
4.7 Analytics & Insights
FR-40 Creator insights (revenue, conversion rate, AOV, best sellers) with filters. FR-41 Merchant insights (sales, returns, conversion, influencer engagement counts, samples stats). FR-42 Admin dashboards (compliance alerts, returns spikes, platform KPIs). FR-43 CSV export for merchants and creators.
4.8 Ratings & Reputation
FR-44 Buyers rate products, stores, and creators with comments. FR-45 Creators receive quality scores (trust & safety) with admin moderation. FR-46 Merchant storefronts show aggregated ratings and review highlights.
4.9 Role Switching & Access
FR-47 In buyer UI, show a visible "Go to influencer center" button for users with influencer profiles; in Creator Center, show a shortcut to switch to normal buyer account. FR-48 Merchant sub-users see only assigned permissions; multiple stores per account deferred. FR-49 Admins can impersonate users for support with audit logging.
4.10 Discovery & Navigation
FR-50 Platform search surfaces products, merchant storefronts, and influencer storefronts with filters (buyer mode shows no influencer commission overlays). FR-51 Buyers can browse a directory of influencer storefronts and receive personalized product recommendations informed by influencer activity and buyer behavior. FR-52 Influencers discover products to promote within Creator Center (Shop); this discovery flow excludes purchasing.
5. Non-Functional Requirements (NFRs)
Security & Compliance: KYC/AML, TLS 1.2+, PII encryption; Stripe tokens for payments.
Performance: Storefront loads < 2s; dashboard queries < 4s.
Availability: Target 99.5% uptime for commerce flows.
Scalability: Support 5,000 concurrent buyers during peak campaigns.
Accessibility: WCAG 2.1 AA.
Localization: English at launch; French copy backlog.
Data Retention: Store transactions/payout logs for 7 years (Canada).
6. Integrations & Dependencies
Stripe Checkout & Connect; Shopify URL import; email/SMS provider (TBD); carrier tracking links; analytics (Segment/Mixpanel TBD); KYC provider (Persona/Stripe Identity TBD).
7. Data & Analytics Requirements
Track per-link events (click, add-to-cart, purchase, commission earned).
Onboarding funnel stats; sample workflow statuses and deadlines; support ticket lifecycle; nightly exports.
8. Risks & Mitigations
Scope creep; compliance delays; catalog quality; shipping SLAs; support tooling limitations.
9. Open Decisions
Hosted vs embedded checkout (assume hosted for MVP pending confirmation).
Payout fee structure details (fixed vs percentage + minimum) pending finance.
Notification provider selection and messaging strategy timeline.
Analytics stack selection.
Localization roadmap beyond English.

