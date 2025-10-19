# Page Report: Creator Storefront (Buyer View)

## Page Identification
- **Path**: `UI/Buyer/stitch_buyer_creator_storefront`
- **User Type**: Buyer
- **Page Name**: Creator Storefront - Jane's Style Hub
- **Screenshots**: 2 images (overview + video library view)

---

## Page Overview
This is a creator's storefront page viewed from a buyer's perspective. It showcases an influencer/creator's profile with their curated product recommendations and video content library.

---

## Feature Analysis

### 1. **Header Section**
**Location**: Top navigation bar (sticky)

**Components**:
- **Branding**: "Inflopick" logo (left-aligned)
- **Search Bar**: Center-positioned global search
  - Placeholder: "Search for products, creators, and more..."
  - Material Icons search icon
- **Action Icons** (right-aligned):
  - Notifications (bell icon)
  - Messages/Chat (chat bubble icon)
  - Shopping Cart (cart icon)
  - User Profile (profile photo)
  - Theme Toggle (dark/light mode switch)

**Navigation Tabs** (secondary header):
- Product
- Storefront
- **Creators** (active/highlighted in orange)

---

### 2. **Creator Profile Section**
**Location**: Below header with hero banner overlay

**Components**:
- **Banner Image**: Wide hero image (responsive: 192px mobile, 256px tablet, 320px desktop)
- **Profile Card** (overlays banner):
  - **Profile Photo**: 128px circular image with ring border
  - **Creator Name**: "Jane's Style Hub" with verified badge (blue checkmark)
  - **Bio/Description**: "Your go-to for trendy finds and honest reviews. Helping you find your perfect style effortlessly. ✨"
  - **Social Media Links**:
    - TikTok icon
    - Instagram icon
    - YouTube icon
  - **Action Buttons**:
    - "Follow" (secondary button - outlined)
    - "Chat with Creator" (primary button - orange)

---

### 3. **Tab Navigation**
**Location**: Below profile section

**Tabs Available**:
- **Storefront** (default active tab)
- **Video Library** (secondary tab)

---

### 4. **Storefront Tab Content**

#### 4.1 Featured Products Section
**Display**: Grid layout (1 col mobile, 2 cols tablet, 4 cols desktop)

**Products Shown**: 2 featured products
1. **Urban Runner Sneaker**
   - Image: Red running shoes
   - Discount Badge: "20% OFF" (red)
   - Original Price: $110 (strikethrough)
   - Sale Price: $89 (orange, bold)
   - Rating: 4.7 stars (5-star display)
   - Actions: "Add to Cart" (primary), "View Product" (secondary)

2. **AirSound Pro Earbuds**
   - Image: Wireless headphones
   - Price: $129
   - Rating: 4.9 stars
   - Actions: "Add to Cart", "View Product"

**Product Card Features**:
- Product image (224px height, full width)
- Discount badge (when applicable)
- Product title
- Price display (current + original if on sale)
- Star rating with numerical score
- Dual action buttons

---

#### 4.2 Influencer Picks Section
**Display**: Grid layout (1 col mobile, 2 cols tablet, 4 cols desktop)

**Category Filters** (horizontal scrollable):
- **All** (active - orange)
- Fashion
- Tech
- Beauty
- Home

**Products Shown**: 4 products
1. **Stylish Smartwatch**
   - Discount: 15% OFF
   - Original: $350
   - Sale: $299
   - Rating: 4.2 stars

2. **Minimalist City Backpack**
   - Price: $68
   - Rating: 4.6 stars

3. **Organic Skincare Set**
   - Price: $75
   - Rating: 5.0 stars

4. **Portable Coffee Maker**
   - Discount: 10% OFF
   - Original: $50
   - Sale: $45
   - Rating: 4.8 stars

**Additional Feature**:
- "Show More" button (centered, below product grid)

---

### 5. **Video Library Tab Content**
**Display**: Grid layout (2 cols mobile, 3 cols tablet, 4 cols medium, 5 cols large)

**Video Thumbnails**: 5 videos displayed
- Aspect ratio: 9:16 (vertical/mobile format)
- Overlay: Semi-transparent dark layer on hover
- View Count: Displayed at bottom-left with play icon
  - Video 1: 2.1M views
  - Video 2: 1.8M views
  - Video 3: 3.2M views
  - Video 4: 980K views
  - Video 5: 5.5M views

**Video Sources** (from HTML):
- Product demo videos (sneakers, fashion, headphones, watches, etc.)
- Hosted on Mixkit CDN

---

### 6. **Video Modal/Player**
**Trigger**: Click on any video thumbnail

**Features**:
- **Full-screen Modal**: Black overlay background (80% opacity)
- **Video Player**:
  - Max width: medium (md breakpoint)
  - Height: 80% viewport height
  - Video controls enabled
  - Autoplay on open
- **Close Button**: Top-right (X icon)
- **Engagement Actions** (right sidebar):
  - Like/Favorite: 102k
  - Comments: 1,234
  - Share button
- **Keyboard Shortcut**: ESC key to close modal
- **Click Outside**: Click away to close

---

### 7. **Footer Section**
**Layout**: 5-column grid (responsive collapse on mobile)

**Column 1-2: Branding**
- "Inflopick" logo
- Tagline: "Your Creator-Driven Marketplace."
- Language selector: "🇬🇧 EN/FR"

**Column 3: Quick Links**
- Home
- Discover
- Cart
- Orders
- Profile
- Wishlist
- Notifications

**Column 4: Policies**
- Terms of Service
- Privacy Policy
- Refund & Return Policy
- Shipping Policy
- CCPA & Consent Notice
- Cookie Preferences

**Column 5: Support**
- Contact Us
- FAQ
- Help Center
- Support Tickets
- **CTA Buttons**:
  - "Become a Creator" (orange primary button)
  - "Open a Store" (gray secondary button)

**Footer Bottom**:
- Copyright: "© 2025 Inflopick Inc. All rights reserved. Reg. No. 123456789. Payments processed via Stripe."
- Social Media Icons: Twitter, GitHub, Instagram

---

## Technical Features

### Design System
- **Framework**: Tailwind CSS with custom configuration
- **Typography**: Inter font family
- **Icon System**: Google Material Icons + Material Symbols Outlined
- **Color Scheme**:
  - Primary: Orange (#F97316)
  - Background Light: White (#FFFFFF)
  - Background Dark: Dark gray (#121212)
  - Theme: Light/Dark mode toggle support

### Interactivity
- **JavaScript Framework**: Alpine.js (v2)
- **State Management**: Alpine.js reactive data
  - Tab switching (Storefront/Video Library)
  - Modal open/close state
- **Theme Persistence**: Dark mode toggle with class-based switching

### Responsive Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: 1024px+ (lg)

---

## User Journey & Interactions

### Primary Actions
1. **Follow Creator**: Subscribe to creator's updates
2. **Chat with Creator**: Direct messaging functionality
3. **Add to Cart**: Add products to shopping cart
4. **View Product**: Navigate to detailed product page
5. **Watch Videos**: View creator's video content
6. **Engage with Content**: Like, comment, share videos

### Navigation Paths
- Header search → Global product/creator search
- Product tabs → Filter content by category
- Video library → Browse creator's video content
- Footer CTAs → Creator onboarding or store setup

---

## Content Categorization

### Product Categories Represented
- **Fashion**: Sneakers, watches, backpacks
- **Tech**: Earbuds, smartwatches, coffee makers
- **Beauty**: Skincare sets
- **Home**: Coffee makers (Home/Lifestyle)

### Content Types
1. **Product Listings**: E-commerce product cards
2. **Video Content**: Short-form vertical videos (TikTok/Instagram Reels style)
3. **Creator Profile**: Influencer branding and social proof

---

## Business Features

### Monetization Elements
- **Commission Model**: Creator earns from product recommendations
- **Direct Chat**: Potential for paid consultations or partnerships
- **Video Engagement**: Drives product discovery and sales

### Trust Signals
- Verified badge on creator profile
- Social media integration (proof of following)
- Star ratings and review counts
- View counts on videos (social proof)
- Stripe payment processing mention

### Marketing Features
- Discount badges (percentage off)
- Sale pricing with strikethrough original prices
- "Featured Products" section for prioritized items
- Category filtering for targeted browsing

---

## Unclear/Missing Information

### Data Points Requiring Clarification
1. **Product Count**: How many total products does creator have? (Only showing 6 products total)
2. **Video Count**: Total videos in library? (Only showing 5)
3. **Follower Count**: Creator's follower/subscriber count not displayed
4. **Creator Verification**: Criteria for verified badge?
5. **Commission Structure**: How creators earn from sales (not visible to buyers)
6. **Chat Feature**: Real-time messaging vs ticketing system?
7. **Affiliate Links**: Are products from external stores or Inflopick inventory?
8. **Video Upload**: Can creators upload directly or only embed?

### Functional Assumptions
- Products link to detailed product pages (not shown in this view)
- Cart functionality exists (icon present but cart page not shown)
- User authentication required (profile photo suggests logged-in state)
- Mobile app equivalents may exist (mobile-first video format)

---

## Page Purpose & User Type Summary

**Page Name**: Creator Storefront (Buyer View)

**Primary User**: **Buyer/Consumer** browsing a creator's curated shop

**Secondary User**: Potential creator/merchant (via footer CTAs)

**Key Purpose**:
- Enable buyers to discover products through trusted creator recommendations
- Facilitate creator-driven commerce by combining social content (videos) with product listings
- Build trust through creator branding, social proof, and engaging content

**Business Model**: Creator-driven marketplace connecting influencers with their audience for product discovery and sales
