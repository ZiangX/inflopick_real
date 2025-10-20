# PowerShell script to fix navigation in remaining files

$files = @(
    "stitch_seller_orders\order detail_normal\order detail_normal.html",
    "stitch_seller_orders\ordor detail_refund\ordor detail_refund.html",
    "stitch_seller_marketing\AB testing\AB testing.html",
    "stitch_seller_marketing\promotion request\promotion request.html",
    "stitch_seller_marketing\send promotion request\send promotion request.html",
    "stitch_seller_marketing\influencer detail\influencer detail.html",
    "stitch_seller_marketing\reply promotion request\reply promotion request.html",
    "stitch_seller_customer\customer order history\customer order history.html",
    "stitch_seller_products\add new product\add new product.html",
    "stitch_seller_products\product detail\product detail.html"
)

$navLinks = @{
    "Dashboard" = "../../stitch_seller_dashborad/dashborad.html"
    "Orders" = "../../stitch_seller_orders/orders/orders.html"
    "Products" = "../../stitch_seller_products/product overview/product overview.html"
    "Marketing" = "../../stitch_seller_marketing/marketing overview/marketing overview.html"
    "Customer" = "../../stitch_seller_customer/customer records/customer records.html"
    "Chat" = "../../stitch_seller_chatbox/seller chatbox/seller chatbox.html"
    "Analytics" = "../../stitch_seller_analytics (missing detail pages)/analytics overview/analytics overview.html"
    "Storefront" = "../../stitch_seller_storefront/seller storefront/seller storefront.html"
    "Accounts" = "../../stitch_seller_account_management/account management/account management.html"
}

Write-Host "Navigation links configured. Ready to process files."
