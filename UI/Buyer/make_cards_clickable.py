#!/usr/bin/env python3
"""
Script to make product cards, creator cards, and storefront cards clickable
"""
import re
import os

# Define file mappings and their target links
file_configs = [
    {
        "file": "stitch_buyer_home_page/home page/home page.html",
        "product_link": "../stitch_buyer_product_detail/buyer_ product detail/buyer_ product detail.html",
        "creator_link": "../stitch_buyer_creator_storefront/buyer_creator storefront.html",
    },
    {
        "file": "stitch_buyer_shop_by_product/buyer shop by products/buyer shop by products.html",
        "product_link": "../../stitch_buyer_product_detail/buyer_ product detail/buyer_ product detail.html",
    },
    {
        "file": "stitch_buyer_shop_by_product/influencer linked shop by products/influencer linked shop by products.html",
        "product_link": "../../stitch_buyer_product_detail/influencer linked product detail/influencer linked product detail.html",
    },
    {
        "file": "stitch_buyer_creator_storefront/buyer_creator storefront.html",
        "product_link": "../stitch_buyer_product_detail/buyer_ product detail/buyer_ product detail.html",
    },
    {
        "file": "stitch_buyer_shop_by_creator/buyer_shop by creator.html",
        "creator_link": "../stitch_buyer_creator_storefront/buyer_creator storefront.html",
    },
    {
        "file": "stitch_buyer_shop_by_storefront/buyer_shop by storefront.html",
        "storefront_link": "../stitch_buyer_seller_storefront/buyer_seller storefront/buyer_seller storefront.html",
    },
]

def wrap_product_card(content, link):
    """Wrap product cards in anchor tags"""
    # Pattern to match product cards (div with specific classes containing image, title, price)
    pattern = r'<div class="(bg-(?:card|surface)-light dark:bg-(?:card|surface)-dark[^"]*rounded-lg[^"]*overflow-hidden[^"]*)">\s*(?:<div class="relative">)?<img[^>]*alt="[^"]*"[^>]*class="w-full h-(?:40|48|56)[^>]*>[^<]*(?:</div>)?\s*<div class="p-4[^"]*">.*?</div>\s*</div>'

    def replacer(match):
        original = match.group(0)
        # Skip if already wrapped in anchor or contains buttons
        if '<a href' in original or 'Add to Cart' in original or 'class="flex-1' in original:
            return original

        # Replace div with anchor
        classes = match.group(1)
        inner_content = original[original.index('>')+1:original.rindex('</div>')]
        return f'<a href="{link}" class="block {classes} hover:shadow-xl transition-shadow">{inner_content}</a>'

    return re.sub(pattern, replacer, content, flags=re.DOTALL)

def update_view_product_buttons(content, link):
    """Update View Product buttons to be links"""
    pattern = r'<button class="([^"]*)"[^>]*>View Product</button>'
    replacement = f'<a href="{link}" class="\\1">View Product</a>'
    return re.sub(pattern, replacement, content)

def update_visit_creator_buttons(content, link):
    """Update Visit Creator Page buttons to be links"""
    pattern = r'<button class="([^"]*)"[^>]*>Visit Creator Page</button>'
    replacement = f'<a href="{link}" class="\\1">Visit Creator Page</a>'
    return re.sub(pattern, replacement, content)

def update_visit_storefront_buttons(content, link):
    """Update Visit Storefront buttons to be links"""
    pattern = r'<button class="([^"]*)"[^>]*>Visit Storefront</button>'
    replacement = f'<a href="{link}" class="\\1">Visit Storefront</a>'
    return re.sub(pattern, replacement, content)

def process_file(file_path, config):
    """Process a single HTML file"""
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return 0

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    changes = 0

    # Apply product card links
    if 'product_link' in config:
        new_content = wrap_product_card(content, config['product_link'])
        new_content = update_view_product_buttons(new_content, config['product_link'])
        if new_content != content:
            changes += content.count('<div class="bg-') - new_content.count('<div class="bg-')
            content = new_content

    # Apply creator card links
    if 'creator_link' in config:
        new_content = update_visit_creator_buttons(content, config['creator_link'])
        if new_content != content:
            changes += 1
            content = new_content

    # Apply storefront card links
    if 'storefront_link' in config:
        new_content = update_visit_storefront_buttons(content, config['storefront_link'])
        if new_content != content:
            changes += 1
            content = new_content

    # Write back if changed
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {file_path}: {changes} changes")
    else:
        print(f"No changes needed for {file_path}")

    return changes

# Main execution
if __name__ == "__main__":
    base_dir = r"D:\Old_Desktop\Projects\inflopick_real\UI\Buyer"
    total_changes = 0

    for config in file_configs:
        file_path = os.path.join(base_dir, config['file'])
        changes = process_file(file_path, config)
        total_changes += changes

    print(f"\nTotal changes made: {total_changes}")
