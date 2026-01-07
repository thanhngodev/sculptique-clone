const PRODUCTS_SELECTOR_OUTER = [
  {
    badge: false,
    title: "1 Bottle",
    info: "1 bottle total | Save $27.99",
    price: "$31.96",
    compare: "$59.95",
    perks: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
    ],
  },
  {
    badge: true,
    title: "Buy 2 Get 1 Free",
    info: "3 bottles total | Save $115.93",
    price: "$63.92",
    compare: "$179.85",
    perks: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        text: "Free Anti-Bloating Protocol E-book",
      },
    ],
  },
  {
    badge: false,
    title: "Buy 3 Get 2 Free",
    info: "5 bottles total | Save $203.87",
    price: "$95.88",
    compare: "$299.75",
    perks: [
      {
        icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
        text: "Free USA Shipping",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",
        text: "Free Anti-Bloating Protocol E-book",
      },
      {
        icon: "https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309",
        text: "$20 Gift Card",
      },
    ],
  },
];

const PRESS_LOGOS = [
  "https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678",
  "https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678",
];

$(document).ready(function () {
  const $productSelectorOuter = $(".product-selector_outer");
  let productSelectorOuterHtml = "";

  $.each(PRODUCTS_SELECTOR_OUTER, function (index, item) {
    let perksHtml = "";

    $.each(item.perks, function (_, perk) {
      perksHtml += `
          <div class="product-selector_perk_line 111">
            <div>
              <img src="${perk.icon}" />
            </div>
            <div>
              <p>
                <span class="kaching-bundles__free-gift__text">
                  ${perk.text}
                </span>
              </p>
            </div>
          </div>
        `;
    });

    productSelectorOuterHtml += `
        <div class="product-selector_block ${index === 1 ? "active" : ""}">
          ${
            item.badge
              ? `
            <div class="product-selector_badge">
              ${$(".product-selector_badge").first().html()}
            </div>
          `
              : ""
          }

          <div class="product-selector_head">
            <div>
              <div class="product-selector_bubble">
                <div class="product-selector_bubble_inn"></div>
              </div>
            </div>
            <div>
              <p class="product-selector_title">${item.title}</p>
              <p class="product-selector_info">${item.info}</p>
            </div>
            <div>
              <p class="product-selector_price">${item.price}</p>
              <s class="product-selector_compare">${item.compare}</s>
            </div>
          </div>

          <div class="product-selector_perks">
            ${perksHtml}
          </div>
        </div>
      `;
  });

  $productSelectorOuter.html(productSelectorOuterHtml);

  $(document).on("click", ".product-selector_block", function () {
    $(".product-selector_block").removeClass("active");
    $(this).addClass("active");
  });

  const $logosWrap = $(".logos_wrap");
  let logosWrapHtml = "";

  const repeatTimes = 10;

  for (let i = 0; i < repeatTimes; i++) {
    $.each(PRESS_LOGOS, function (_, src) {
      logosWrapHtml += `
          <img
            src="${src}"
            alt="logo"
            class="press_logo"
            width="auto"
            height="auto"
          />
        `;
    });
  }

  $logosWrap.html(logosWrapHtml);
});
