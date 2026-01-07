const UGC_CONTAINER_VIDEOS = [
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",
    src: "https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",
    src: "https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",
    src: "https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",
    src: "https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",
    src: "https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",
    src: "https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",
    src: "https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",
    src: "https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",
    src: "https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4",
  },
  {
    poster:
      "https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",
    src: "https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4",
  },
];

const productCarouselOuterClass = ".product_ugc-container-carousel-outer";
const productCarouselPrevClass = ".product_carousel-prev";
const productCarouselNextClass = ".product_carousel-next";

const $UGC_CONTAINER = $(productCarouselOuterClass);
let ugcHtml = "";

$.each(UGC_CONTAINER_VIDEOS, function (_, item) {
  ugcHtml += `
    <div class="product_ugc-video">
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
        class="product_ugc-play"
      />
      <video playsinline poster="${item.poster}">
        <source src="${item.src}" type="video/mp4" />
      </video>
    </div>
  `;
});

$UGC_CONTAINER.html(ugcHtml);

$(document).ready(function () {
  $UGC_CONTAINER.slick({
    dots: true,
    arrows: false,
    infinite: false,
    loop: false,
    speed: 320,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });

  $(productCarouselPrevClass).on("click", function () {
    $UGC_CONTAINER.slick("slickPrev");
  });

  $(productCarouselNextClass).on("click", function () {
    $UGC_CONTAINER.slick("slickNext");
  });

  $(".product_ugc-video").on("click", function () {
    const video = $(this).find("video").get(0);
    const $playIcon = $(this).find(".product_ugc-play");

    if (video.paused) {
      video.play();
      $playIcon.fadeOut(200);
    } else {
      video.pause();
      $playIcon.fadeIn(200);
    }
  });
});
