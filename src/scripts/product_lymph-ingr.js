const LYMPH_INGREDIENTS = [
  {
    subtitle: "Reactivate Lymphatic Pumps",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",
    title: "Cleavers Extract (100mg)",
    content: [
      'Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',
      "[Study: Enhanced NK cell activity in immunosuppressed models]",
    ],
  },
  {
    subtitle: "Flush Excess Fluid",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",
    title: "Dandelion Extract (250mg)",
    content: [
      "Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).",
      "[Study: First human pilot study on diuretic effects]",
    ],
  },
  {
    subtitle: "Break Down Protein Clogs",
    image: "https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",
    title: "Bromelain Powder (100mg)",
    content: [
      'Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',
      "[Study: As effective as prescription NSAIDs for inflammation]",
    ],
  },
  {
    subtitle: "Strengthen Vessel Walls",
    image: "https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",
    title: "Rutin (100mg)",
    content: [
      "Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.",
      "[Study: Systematic review of 1,643 participants]",
    ],
  },
  {
    subtitle: "Reduce Inflammation",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",
    title: "Burdock Root Powder (200mg)",
    content: [
      "Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.",
      "[Study: 42-day trial in osteoarthritis patients]",
    ],
  },
  {
    subtitle: "Boost Immune Clearance",
    image: "https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",
    title: "Echinacea Purpurea Extract (500mg)",
    content: [
      "Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.",
      "[Study: Increased NK cell cytotoxic activity]",
    ],
  },
  {
    subtitle: "Support Metabolism",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",
    title: "Kelp Extract (30mg)",
    content: [
      "Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.",
      "[Study: Dose-dependent increase in TSH levels]",
    ],
  },
  {
    subtitle: "Antioxidant Protection",
    image:
      "https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",
    title: "Lemon Powder (50mg)",
    content: [
      "Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.",
      "[Study: Triple-masked trial in 90 participants]",
    ],
  },
];

const PRODUCT_WHY_BLOATING_GRID = [
  {
    image: "https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",
    title: "You cut out gluten, dairy, sugar. You ate clean for months.",
    reason:
      "Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there.",
  },
  {
    image: "https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",
    title: "You tried viral lymphatic drops from TikTok.",
    reason:
      "They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine.",
  },
  {
    image: "https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",
    title: "You got lymphatic massage or bought compression socks.",
    reason:
      "Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own.",
  },
];

const JDGM_REVIEWS = [
  {
    rating: 5,
    date: "12/08/2025",
    author: "Anonymous",
    verified: true,
    content:
      "Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working.",
  },
  {
    rating: 5,
    date: "12/01/2025",
    author: "Anonymous",
    verified: true,
    content: "One month and I’ve already seen a difference!",
  },
  {
    rating: 5,
    date: "11/23/2025",
    author: "Donabeth Houx",
    verified: true,
    content:
      "I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!",
  },
  {
    rating: 5,
    date: "12/01/2025",
    author: "Dawn Camacho",
    verified: true,
    content:
      "It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy.",
  },
  {
    rating: 5,
    date: "12/01/2025",
    author: "Anonymous",
    verified: true,
    content: "I have noticed a difference on my swelling.",
  },
];

function renderStars(count) {
  return "★ ".repeat(count).trim();
}

$(document).ready(function () {
  const $productLymphTable = $(".product_lymph-ingr-table");
  let productLymphTableHtml = "";

  $.each(LYMPH_INGREDIENTS, function (_, item) {
    productLymphTableHtml += `
        <div class="product-lymph-ingredient">
          <p class="product_lymph-ingr-subtitle">
            <span>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
            </span>
            <span>${item.subtitle}</span>
          </p>

          <img
            class="Desktop_only product_lymph-main-img"
            loading="lazy"
            src="${item.image}"
          />

          <div class="product_lymph-ingr-thumb">
            <div class="Mobile_only">
              <img
                class="product_lymph-main-img"
                loading="lazy"
                src="${item.image}"
              />
            </div>
            <div>
              <h5>${item.title}</h5>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
            </div>
          </div>

          <div class="product_lymph-ingr-content">
            <p>${item.content[0]}</p>
            <p>${item.content[1]}</p>
          </div>
        </div>
      `;
  });

  $productLymphTable.html(productLymphTableHtml);

  $(document).on("click", ".product-lymph-ingredient", function () {
    const $content = $(this).find(".product_lymph-ingr-content");

    if ($content.is(":visible")) {
      $content.stop(true, true).slideUp(300);
    } else {
      $content.stop(true, true).slideDown(300);
    }
  });

  const $productWhyBloatingGrid = $(
    ".product_why-bloating-grid.bloating-grid-info-3"
  );
  let productWhyBloatingGridHtml = "";

  $.each(PRODUCT_WHY_BLOATING_GRID, function (_, item) {
    productWhyBloatingGridHtml += `
        <div class="product_why-nothing-cell">
          <div>
            <img src="${item.image}" />
          </div>

          <div class="product_why-nothing-cell-inn">
            <h4>${item.title}</h4>

            <div class="product_why-nothing-pink">
              <p class="product_why-nothing-subtitle">
                <span>Why it failed</span>
                <span>
                  <img
                    loading="lazy"
                    src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Vector_6.png?v=1760696853"
                  />
                </span>
              </p>

              <p class="product_why-nothing-text">
                ${item.reason}
              </p>
            </div>
          </div>
        </div>
      `;
  });

  $productWhyBloatingGrid.html(productWhyBloatingGridHtml);

  const $jdgmReviews = $(".jdgm-rev-widg__reviews");
  let jdgmReviewsHtml = "";

  $.each(JDGM_REVIEWS, function (_, item) {
    jdgmReviewsHtml += `
    <div class="jdgm-rev jdgm-divider-top jdgm--done-setup">
      <div class="jdgm-rev__header">
        <div class="jdgm-row-product"></div>

        <div class="jdgm-row-rating">
          <div class="flex gap-1 text-[#f29b96]">
            ${renderStars(item.rating)}
          </div>
          <span class="jdgm-rev__timestamp">${item.date}</span>
        </div>

        <div class="jdgm-row-profile">
          <div class="jdgm-rev__icon h-[30px] w-[30px]">
            <img src="./assets/images/user-check.png" />
          </div>
          <span class="jdgm-rev__author-wrapper">
            <span class="jdgm-rev__author">${item.author}</span>
            ${
              item.verified
                ? `
              <span class="jdgm-rev__buyer-badge-wrapper">
                <span class="jdgm-rev__buyer-badge"></span>
              </span>`
                : ""
            }
          </span>
        </div>

        <div class="jdgm-row-extra">
          <span class="jdgm-rev__location"></span>
        </div>

        <div class="jdgm-rev__br"></div>
      </div>

      <div class="jdgm-rev__content">
        <b class="jdgm-rev__title"></b>
        <div class="jdgm-rev__body">
          <p>${item.content}</p>
        </div>
        <div class="jdgm-rev__custom-form"></div>
        <div class="jdgm-rev__transparency-badge-wrapper"></div>
      </div>
    </div>
  `;
  });

  $jdgmReviews.html(jdgmReviewsHtml);
});
