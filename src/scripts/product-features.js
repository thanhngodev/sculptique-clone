const PRODUCT_FEATURES = [
  {
    icon: "https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",
    text: "Join over 93 Thousand who say - it WORKS!",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",
    text: "Restores your body’s natural 24-hour lymphatic cycle",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",
    text: "Helps reduce fluid retention and the appearance of puffiness and bloating",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",
    text: "Helps fall asleep faster, stay asleep longer and wake up energized",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",
    text: "Eliminates joint stiffness, pain, morning creakiness and feel more grounded",
  },
  {
    icon: "https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",
    text: "Boosts energy, mental clarity and emotional balance",
  },
];

const PRODUCT_PACKAGES = {
  sub: [
    {
      id: "52243434013015",
      index: 1,
      title: "1 Bottle",
      info: "1 bottle total | Save $27.99",
      price: "$31.96",
      compare: "$59.95",
      checkoutUrl: "https://pay.trysculptique.com/checkout2?products=761:1",
      perks: [
        {
          icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
          text: "Free USA Shipping",
        },
      ],
    },
    {
      id: "52243434045783",
      index: 2,
      badge: true,
      title: "Buy 2 Get 1 Free",
      info: "3 bottles total | Save $115.93",
      price: "$63.92",
      compare: "$179.85",
      checkoutUrl: "https://pay.trysculptique.com/checkout2?products=763:1",
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
  ],

  otp: [
    {
      id: "52279858725207",
      index: 1,
      title: "1 Bottle",
      info: "1 bottle total | Save $20.00",
      price: "$39.95",
      compare: "$59.95",
      checkoutUrl: "https://pay.trysculptique.com/checkout2?products=755:1",
      perks: [
        {
          icon: "https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",
          text: "Free USA Shipping",
        },
      ],
    },
  ],
};

const REVIEWS = [
  {
    avatar:
      "https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889",
    name: "Margaret Ellison",
    location: "FL",
    verifiedIcon:
      "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267",
    stars:
      "https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267",
    title: "Even my husband noticed... the spark came back.",
    content:
      "After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this to my closest friends without question.",
  },
];

const PRODUCT_TABS = [
  {
    title: "Ingredients proven by science",
    content: `
        <p><strong>Sculptique Ingredients:</strong></p>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Echinacea purpurea Extract</strong> – Known for its anti-inflammatory properties, it may support skin health.</li>
          <li><strong>Dandelion Extract</strong> – Traditionally used as a diuretic, it may help reduce water retention.</li>
          <li><strong>Burdock Powder</strong> – Contains antioxidants that may promote skin clarity.</li>
          <li><strong>Cleavers Extract</strong> – Believed to support lymphatic drainage and detoxification.</li>
          <li><strong>Rutin</strong> – A flavonoid that may strengthen blood vessels and improve circulation.</li>
          <li><strong>Bromelain Powder</strong> – An enzyme from pineapple that may reduce inflammation and support tissue repair.</li>
          <li><strong>Lemon Powder</strong> – Rich in vitamin C, it may aid in collagen production and skin rejuvenation.</li>
          <li><strong>Kelp Extract</strong> – A source of iodine and minerals that may support skin metabolism.</li>
        </ul>
        <p>These natural ingredients work together to reduce puffiness, bloating, fluid retention.</p>
      `,
  },
  {
    title: "How does it actually work?",
    content: `
        <p>
          Sculptique works by improving blood flow and supporting lymphatic drainage
          to reduce fluid buildup that causes puffiness, inflammation, and water retention.
          It also reduces inflammation and boosts collagen production to help skin become firmer and smoother.
        </p>
      `,
  },
  {
    title: "Shipping and returns",
    content: `
        <p>
          All of Sculptique orders get FREE shipping straight from our USA warehouse.
          Orders are usually shipped out within 1–2 working days.
        </p>
        <p>
          We also offer a 60-day money back guarantee if you are unsatisfied with our product.
        </p>
      `,
  },
];

$(document).ready(function () {
  const $features = $(".main_product-features");

  PRODUCT_FEATURES.forEach((item) => {
    const featureItem = `
        <div class="main_product-feature-line">
          <div>
            <img loading="lazy" src="${item.icon}" />
          </div>
          <div>
            <p>${item.text}</p>
          </div>
        </div>
      `;

    $features.append(featureItem);
  });

  const $productReview = $(".main_product-review");
  let productReviewHtml = "";

  $.each(REVIEWS, function (_, r) {
    productReviewHtml += `
        <div class="main_product-review-meta">
          <div>
            <img loading="lazy" src="${r.avatar}" />
          </div>
          <div>
            <p>
              ${r.name} | ${r.location}
              <span><img src="${r.verifiedIcon}" /></span>
            </p>
            <img
              class="main_product-review-stars"
              src="${r.stars}"
            />
          </div>
        </div>

        <div class="main_product-review-content">
          <p><strong>${r.title}</strong></p>
          <p>${r.content}</p>
        </div>
      `;
  });

  $productReview.html(productReviewHtml);

  const $productTabs = $(".product_tab-block_out");
  let productTabsHtml = "";

  $.each(PRODUCT_TABS, function (_, tab) {
    productTabsHtml += `
        <div class="product_tab-block">
          <div class="product_tab-thumb">
            <p>${tab.title}</p>
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
              />
            </span>
          </div>
          <div class="product_tab-content">
            ${tab.content}
          </div>
        </div>
      `;
  });

  $productTabs.html(productTabsHtml);
});
