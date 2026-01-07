const PRODUCT_IMAGES = [
  {
    src: "https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",
    hasNutrition: true,
    hasBadge: true,
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685",
  },
  {
    src: "https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685",
  },
];

const main_product_img = ".main_product-image-carousel";
const main_product_img_thumbs = ".main_product-image-carousel_thumbs";

PRODUCT_IMAGES.forEach((item, index) => {
  // Main image
  const mainItem = `
        <div class="main_product-image-box">
          <img loading="eager" src="${item.src}" />

          ${
            item.hasNutrition
              ? `
            <div class="main_product-nutrition-info">
              <span>
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1.png?v=1752126615" />
              </span>
              <span>Nutritional Information</span>
            </div>
          `
              : ""
          }

          ${
            item.hasBadge
              ? `
            <img
              class="main-producT_bf_badge"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
            />
          `
              : ""
          }
        </div>
      `;

  // Thumb image
  const thumbItem = `
        <div class="main_product-image-box">
          <img loading="eager" src="${item.src}" />
        </div>
      `;

  $(main_product_img).append(mainItem);
  $(main_product_img_thumbs).append(thumbItem);
});

$(document).ready(function () {
  $(main_product_img).slick({
    infinite: true,
    loop: true,
    speed: 320,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button type="button" class="slick-prev" style=""><img class="left_arrow" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"></button>`,
    nextArrow: `<button type="button" class="slick-next" style=""><img class="right_arrow" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"></button>`,
  });

  $(main_product_img_thumbs).slick({
    asNavFor: main_product_img,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ``,
    nextArrow: ``,
  });
});
