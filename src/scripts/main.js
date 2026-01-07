$(document).ready(function () {
  $(".product_tab-thumb").on("click", function () {
    const $block = $(this).closest(".product_tab-block");
    $block.toggleClass("active");
  });
});
