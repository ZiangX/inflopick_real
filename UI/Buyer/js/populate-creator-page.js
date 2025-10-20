// Dynamic Creator Storefront Population Script
(function() {
  'use strict';

  // Get creator ID from URL parameter
  function getCreatorIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('creator');
  }

  // Populate creator profile section
  function populateCreatorProfile(creator) {
    // Update banner image
    const bannerDiv = document.querySelector('.w-full.h-48, .w-full.h-64');
    if (bannerDiv && creator.bannerImage) {
      bannerDiv.style.backgroundImage = `url('${creator.bannerImage}')`;
    }

    // Update profile image
    const profileImg = document.querySelector('img[alt="Creator profile photo"]');
    if (profileImg && creator.profileImage) {
      profileImg.src = creator.profileImage;
      profileImg.alt = `${creator.fullName} profile photo`;
    }

    // Update creator name
    const nameHeading = document.querySelector('h1.text-2xl');
    if (nameHeading) {
      nameHeading.textContent = creator.name;
    }

    // Update bio/description
    const bioText = document.querySelector('p.text-subtext-light.max-w-lg');
    if (bioText) {
      bioText.textContent = creator.bio;
    }

    // Update verified badge visibility (already present, just ensure it's shown)
    const verifiedBadge = document.querySelector('.material-symbols-outlined.text-blue-500');
    if (verifiedBadge && !creator.verified) {
      verifiedBadge.style.display = 'none';
    }
  }

  // Generate product card HTML
  function generateProductCard(product) {
    const discountBadge = product.discount > 0
      ? `<div class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">${product.discount}% OFF</div>`
      : '';

    const originalPriceHTML = product.originalPrice
      ? `<p class="text-sm text-subtext-light dark:text-subtext-dark line-through">$${product.originalPrice}</p>`
      : '';

    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<span class="material-icons text-sm">star</span>';
    }
    if (hasHalfStar) {
      starsHTML += '<span class="material-icons text-sm">star_half</span>';
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<span class="material-icons text-sm">star_border</span>';
    }

    return `
      <div class="bg-card-light dark:bg-card-dark rounded-lg shadow-sm overflow-hidden group">
        <div class="relative">
          <img alt="${product.name}" class="w-full h-56 object-cover" src="${product.image}"/>
          ${discountBadge}
        </div>
        <div class="p-4">
          <h3 class="font-semibold text-text-light dark:text-text-dark">${product.name}</h3>
          <div class="flex items-center mt-1">
            <p class="text-lg font-bold text-primary mr-2">$${product.price}</p>
            ${originalPriceHTML}
          </div>
          <div class="flex items-center mt-2">
            <div class="flex text-yellow-400">
              ${starsHTML}
            </div>
            <span class="text-xs text-subtext-light dark:text-subtext-dark ml-1">(${product.rating})</span>
          </div>
          <div class="mt-4 flex space-x-2">
            <button class="flex-1 px-4 py-2 text-sm font-semibold bg-primary text-white rounded-lg hover:bg-orange-600">Add to Cart</button>
            <button class="flex-1 px-4 py-2 text-sm font-semibold border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">View Product</button>
          </div>
        </div>
      </div>
    `;
  }

  // Populate featured products
  function populateFeaturedProducts(creator) {
    const productGrids = document.querySelectorAll('.grid.grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4');

    if (productGrids.length > 0 && creator.featuredProducts && creator.featuredProducts.length > 0) {
      const firstGrid = productGrids[0]; // Featured Products section

      // Clear existing products
      firstGrid.innerHTML = '';

      // Add new products
      creator.featuredProducts.forEach(product => {
        firstGrid.innerHTML += generateProductCard(product);
      });
    }
  }

  // Main initialization function
  function initializeCreatorPage() {
    const creatorId = getCreatorIdFromUrl();

    if (!creatorId) {
      console.log('No creator ID provided in URL, showing default content');
      return;
    }

    const creator = getInfluencer(creatorId);

    if (!creator) {
      console.error(`Creator with ID "${creatorId}" not found`);
      return;
    }

    console.log(`Loading creator profile: ${creator.name}`);

    // Populate all sections
    populateCreatorProfile(creator);
    populateFeaturedProducts(creator);

    // Update page title
    document.title = `${creator.name} - Inflopick`;
  }

  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCreatorPage);
  } else {
    initializeCreatorPage();
  }
})();
