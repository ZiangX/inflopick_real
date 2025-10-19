#!/usr/bin/env python3
"""
Script to link product, creator, and storefront cards to their detail pages
"""

import re
import os

def wrap_product_cards_with_links(html_content, target_url):
    """Wrap product card divs with anchor tags"""
    # Pattern to match product card div that starts with bg-surface-light or bg-card-light
    # and contains product information
    pattern = r'(<div class="(?:bg-surface-light dark:bg-surface-dark|bg-card-light dark:bg-card-dark) rounded-lg[^>]*>(?:(?!<div class="(?:bg-surface-light dark:bg-surface-dark|bg-card-light dark:bg-card-dark) rounded-lg).)*?</div>\s*</div>)'

    # Check if already wrapped
    if f'<a href="{target_url}"' in html_content:
        print(f"  - Already contains links to {target_url}")
        return html_content, 0

    # Find all product cards
    matches = re.finditer(pattern, html_content, re.DOTALL)
    count = 0

    for match in matches:
        card_html = match.group(1)
        # Skip if this card is already wrapped in an anchor tag
        start_pos = match.start()
        # Check if there's an <a> tag before this div
        before_context = html_content[max(0, start_pos-100):start_pos]
        if '<a href="' in before_context and '</a>' not in before_context:
            continue

        # Wrap the card with anchor tag
        wrapped = f'<a href="{target_url}" class="block">\n{card_html}\n</a>'
        html_content = html_content.replace(card_html, wrapped, 1)
        count += 1

    return html_content, count

def wrap_creator_cards_with_links(html_content, target_url):
    """Convert 'Visit Creator Page' buttons to links"""
    # Find and update Visit Creator Page buttons
    pattern = r'<button class="([^"]*?)">Visit Creator Page</button>'
    replacement = f'<a href="{target_url}" class="\\1">Visit Creator Page</a>'

    html_content, count = re.subn(pattern, replacement, html_content)
    return html_content, count

def wrap_storefront_cards_with_links(html_content, target_url):
    """Convert 'Visit Storefront' buttons to links"""
    # Find and update Visit Storefront buttons
    pattern = r'<button class="([^"]*?)">Visit Storefront</button>'
    replacement = f'<a href="{target_url}" class="\\1">Visit Storefront</a>'

    html_content, count = re.subn(pattern, replacement, html_content)
    return html_content, count

def process_file(file_path, link_type, target_url):
    """Process a single file"""
    print(f"\nProcessing: {file_path}")

    if not os.path.exists(file_path):
        print(f"  ERROR: File not found!")
        return 0

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    count = 0

    if link_type == 'product':
        content, count = wrap_product_cards_with_links(content, target_url)
    elif link_type == 'creator':
        content, count = wrap_creator_cards_with_links(content, target_url)
    elif link_type == 'storefront':
        content, count = wrap_storefront_cards_with_links(content, target_url)

    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"  SUCCESS: Linked {count} cards")
    else:
        print(f"  No changes made")

    return count

def main():
    base_path = r"D:\Old_Desktop\Projects\inflopick_real\UI\Buyer"

    # Track results
    results = {
        'product_cards': 0,
        'creator_cards': 0,
        'storefront_cards': 0
    }

    print("=" * 80)
    print("PHASE 1: Linking Product Cards")
    print("=" * 80)

    product_files = [
        (os.path.join(base_path, r"stitch_buyer_shop_by_product\buyer shop by products\buyer shop by products.html"),
         r"../../stitch_buyer_product_detail/buyer_ product detail/buyer_ product detail.html"),

        (os.path.join(base_path, r"stitch_buyer_shop_by_product\influencer linked shop by products\influencer linked shop by products.html"),
         r"../../stitch_buyer_product_detail/influencer linked product detail/influencer linked product detail.html"),

        (os.path.join(base_path, r"stitch_buyer_creator_storefront\buyer_creator storefront.html"),
         r"../stitch_buyer_product_detail/buyer_ product detail/buyer_ product detail.html"),
    ]

    for file_path, target in product_files:
        results['product_cards'] += process_file(file_path, 'product', target)

    print("\n" + "=" * 80)
    print("PHASE 2: Linking Creator Cards")
    print("=" * 80)

    creator_file = os.path.join(base_path, r"stitch_buyer_shop_by_creator\buyer_shop by creator.html")
    target = r"../stitch_buyer_creator_storefront/buyer_creator storefront.html"
    results['creator_cards'] = process_file(creator_file, 'creator', target)

    print("\n" + "=" * 80)
    print("PHASE 3: Linking Storefront Cards")
    print("=" * 80)

    storefront_file = os.path.join(base_path, r"stitch_buyer_shop_by_storefront\buyer_shop by storefront.html")
    target = r"../stitch_buyer_seller_storefront/buyer_seller storefront/buyer_seller storefront.html"
    results['storefront_cards'] = process_file(storefront_file, 'storefront', target)

    print("\n" + "=" * 80)
    print("SUMMARY")
    print("=" * 80)
    print(f"Product cards linked: {results['product_cards']}")
    print(f"Creator cards linked: {results['creator_cards']}")
    print(f"Storefront cards linked: {results['storefront_cards']}")
    print(f"Total cards linked: {sum(results.values())}")
    print("=" * 80)

if __name__ == "__main__":
    main()
