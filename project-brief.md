### Inflopick Project Brief (MVP/v1)

#### Product vision
Inflopick is a Canadian commerce hub connecting creators, merchants, and buyers. Creators monetize via creator storefronts and affiliate links; merchants gain visibility and sales; buyers discover influencer‑vouched products. Early positioning emphasizes local commerce and sustainability (eco‑impact UX deferred post‑MVP).

#### Primary users and jobs‑to‑be‑done
- **Creators**: build a profile and storefront, select products, generate links, request samples, publish content with links, earn commissions, track performance, manage payouts.
- **Merchants**: onboard store, create/manage products (manual + URL import), set commissions and access filters, fulfill orders, communicate with customers, track sales, manage payouts and fees.
- **Buyers**: discover products via creators and merchant storefronts, purchase, review items/stores/influencers, get support.
- **Platform admins**: manage users, products, orders, commissions, payouts, reporting, and analytics.

---

### MVP scope (with integrations)

#### Creator (influencer)
- Account & compliance
  - Personal info: first/last name, DOB, email, phone, language, consent acceptance timestamps.
  - Security & access: password, referral code, link to customer account.
  - Payout info: specimen cheque, bank transfer info; fund holding time: 30 days.
  - Card on file for sample discounts (charge countdown: 14 days).
- Profile & presence
  - Creator profile: display name, short bio, verified status, photo ID picture, address.
  - Active platforms list (links): TikTok, Instagram, Facebook, YouTube, X, Snapchat.
  - Content categories taxonomy (full list retained).
- Storefront & links
  - Create complete creator storefront; choose products from platform catalog.
  - Generate product affiliate links; videos contain redirecting links to product/storefront.
  - Portfolio items: per‑link metrics (clicks, sales), link lifecycle (expires if item removed).
- Samples workflow
  - Request sample → waiting → sending free sample/discount sample → shipping status → delivered → 14‑day countdown; platform charges (item or discount) after 14 days and holds another 14 days for upload; decline/cancel paths.
- Insights
  - Sell data: total revenue, conversion rate, trends, best sellers, average order cost; filters: weekly, monthly, quarterly, yearly, month‑to‑month.
- Ratings
  - Quality score (trust & safety) and comments.
- Switching
  - Switch to customer account.

#### Merchant (seller)
- Seller account & billing
  - Sub‑users (max 2): roles owner/admin/support; granular permissions.
  - Banking info; monthly fee CAD $15 via credit card.
  - Fund holding time: 7–14 days post‑delivery (depends on refund rate).
  - Verification: verified flag; business registration paper; tax number (TPS/TVQ/HST); permit.
- Storefront
  - Store ID, theme, store/return address, refund/privacy policies (can use platform default), best sellers, discount items, new products, flash sale scheduling.
- Products
  - Product ID, status (draft/active), name/description, media (images/videos), variants/linked attributes, brand, SKU (opt), inventory, category, price, weight, item & package dimensions, material/color/size (linked variant model), made‑in, warranty, environmental impact (unverified/points), commission, “list on top” (fee + commission), influencer count promoting, influencer filter (extra commission).
- Customers & orders
  - Customer basics, order history, addresses.
  - Orders: IDs, quantities, discounts (public, codes, influencer codes).
- Payments
  - Payment methods: Visa, Mastercard, Amex, PayPal, Apple Pay, Google Pay, Samsung Pay, BAIeBill (incoming).
  - Breakdown (total, subtotal, taxes, duty, shipping, discounts) + payment and creation timestamps.
- Notifications & statuses
  - Order notifications: email, in‑app (incoming), SMS.
  - Statuses: pending, paid, shipped, delivered, completed (after return period), cancelled, refund requested, returned, refunded, partially refunded, payment failed.
- Shipping
  - Package specs, HS code finder, carrier tracking links, ship alert if not shipped within 36h; carriers: Poste Canada, UPS, DHL, FedEx, Intelcom, BAIeShip (incoming); methods: normal/express/domestic/international.
- Customer service & marketing
  - Chat: add chat, customer chatbox; reports (item damaged, non‑delivery delay, slow replies, long ship delay, wrong item); actions (refund/replace with/without return; shipping fee who pays; give coupon).
  - Marketing: influencer list/profile links, request to promote, send sample, report button, sample request alerts, free/discount/refuse (buy yourself).
- Data & insights
  - Sales amount (tax & delivery included), alerts (returns spikes, sales spikes/drops, conversion drop, shipping time spikes), stats (customers by continent, products sold, returns, influencer count, samples sent free/discount), trends with filters, breakdown (total/subtotal, excl. delivery fee and platform commission).
- Switching
  - Switch to influencer and customer account.

#### Buyer (customer)
- Account & payments
  - Personal info: first/last name, DOB, email, phone, language, consent acceptance time.
  - Addresses & billing; payment methods as above (including BAIeBill incoming).
- Discovery & engagement
  - Access seller store; follow store activity; notifications (discount/new/flash sale).
  - Product access; add to cart; wishlist; influencer entry; rate influencer; weekly best‑seller recommendations.
- Cart & checkout
  - Checkout with discount code support; wishlist and remove item; price change reminder.
- Orders, support, and reviews
  - Order detail fields mirroring merchant; statuses identical.
  - Contact seller; customer service chat; reports (item damaged, non‑delivery delay, slow reply, long shipping delay, wrong item); actions (refund/replacement/platform assistance) with AI assistance or real person.
  - Reviews: item, store, influencer.
- Data & recommendations
  - Most visited category, purchase history, recommendation monitoring; weekly recommended product email/notification.

#### Platform admin
- Manage users, products, orders, commissions, payouts, reports, analytics and event logs; operational dashboards for order health and dispute funnel.

---

### Integrations (MVP)
- Social/UGC
  - Link‑based sharing with UTM attribution; capture click → view → order funnel. Deep API ingestion/hashtag detection deferred.
- Catalog import (AI‑assisted)
  - URL‑based product import (start with Shopify product page); extract title, description, media, price, variants, options, SKU, weight, dimensions. Human‑in‑the‑loop review before commit; track provenance.
- Payments & payouts
  - Checkout: Stripe Checkout for card wallets; PayPal supported if feasible; BAIeBill flagged as incoming.
  - Payouts: Stripe Connect Standard, KYC per role; creators choose payout frequency (fees fixed/variable TBD).
- Messaging
  - In‑app chat MVP or fallback via email notifications if chat service is not yet provisioned; retain chat audit trail.

Open integration items: define checkout location (on‑platform vs merchant site), finalize payout fee schedule, confirm initial import targets beyond Shopify, confirm chat provider.

---

### Monetization & commissions (MVP rules)
- Commission on sales: 8% baseline. Per your rule, commission proceeds are attributed either to the creator or the platform per product/order configuration. Influencer access filters and dynamic commissions can be layered post‑MVP.
- Subscriptions: merchants CAD $15/month; influencer Lite/Pro pricing acknowledged (implementation timing TBD).

---

### Data model (key entities)
- User, CreatorProfile, MerchantProfile, Storefront, Product, Variant, MediaAsset, InventoryItem, CommissionRule, ReferralLink, VideoAsset, Order, OrderItem, Payment, Shipment, Payout, Subscription, Discount, ChatThread, ChatMessage, Review, Notification, AnalyticsEvent, ImportJob.

---

### Analytics & KPIs (MVP)
- North‑star candidates: GMV via creator links; active creators and active merchants.
- Supporting: link click‑through rate, product view → add‑to‑cart → order conversion, order success rate, average fulfillment time, refund rate, sample‑to‑content completion rate.
- Instrumentation: client/server events for link_click, product_view, add_to_cart, checkout_started, order_placed, order_paid, order_fulfilled.

---

### Non‑functional requirements (MVP)
- Canada launch; CAD currency; privacy baseline; essential KYC.
- Availability targets suitable for promo spikes; basic anti‑fraud and audit logging.
- Accessibility baseline; localization scaffolding (EN now, FR later).

---

### Open decisions and assumptions
- Checkout location: TBD (pick one for MVP to reduce complexity).
- Payout fees: fixed vs variable TBD; creators choose payout frequency.
- Certified views and non‑sponsored payouts: out of scope for MVP.
- Eco‑impact scoring surfaced to users: out of scope for MVP.

---

### Out of scope (MVP)
- Non‑sponsored view remuneration and certified view formula.
- Advanced fraud management and returns automation.
- Deep social API ingestion and hashtag scanning.
- Full multi‑platform AI catalog migration.
- NexShip/NexPay services.

---

### Launch checklist (MVP)
- User onboarding (creator/merchant/buyer) with KYC where required.
- Storefronts (creator and merchant) live with product catalog and affiliate links.
- URL import (Shopify) with review workflow.
- Stripe Checkout + Stripe Connect live; payouts configurable by creator.
- Order lifecycle: create → pay → ship → deliver → complete; statuses mirrored across roles.
- Basic chat or email‑based support with audit trail.
- Dashboards for sales/earnings and minimal analytics events.

---

### Classification
Scope, as specified, exceeds a classic MVP and aligns with a pragmatic v1 (MVP‑plus). The above keeps integrations narrowly targeted (link attribution, Shopify URL import, Stripe) to ship faster while preserving core value loops for creators, merchants, and buyers.



