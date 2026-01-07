const PRODUCT_FAQ_CONTAINER_EXPAND_DATA = [
  {
    question: "How is this different from lymphatic drops I saw on TikTok?",
    answers: [
      "Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.",
      "Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more.",
    ],
  },
  {
    question: "Why didn't my diet changes work?",
    answers: [
      "Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there.",
    ],
  },
  {
    question: "How long until I see results?",
    answers: [
      "Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. We recommend 90 days for complete results.",
    ],
  },
  {
    question: "Is this safe? Any side effects?",
    answers: [
      "Sculptique contains 100% natural botanical ingredients used safely for centuries. Increased urination in the first few days is normal. Consult your healthcare provider if you take prescription medications.",
    ],
  },
  {
    question: "Can I take this with other supplements?",
    answers: [
      "Yes. Sculptique works well with most supplements. If you take blood thinners, diuretics, or thyroid medication, consult your provider first.",
    ],
  },
  {
    question: "How do I use it?",
    answers: [
      "Take 2 capsules daily with water. Any time of day, with or without food.",
    ],
  },
  {
    question: "What if it doesn't work for me?",
    answers: [
      "You have 60 days to try it risk-free. If you don't feel results, return it for a full refund.",
    ],
  },
  {
    question: "Where is this manufactured?",
    answers: [
      "Manufactured in the USA at an FDA-registered, GMP-certified facility. Every batch is third-party tested.",
    ],
  },
  {
    question: "Why isn't this in stores?",
    answers: [
      "To maintain strict quality control and avoid retail markups that would double the price.",
    ],
  },
  {
    question: "Is this vegan/gluten-free?",
    answers: [
      "Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients.",
    ],
  },
];

const $PRODUCT_FAQ_CONTAINER_EXPAND = $(".product_faq-container-expand");
let productFaqContainerExpandHtml = "";

$.each(PRODUCT_FAQ_CONTAINER_EXPAND_DATA, function (_, item) {
  let answersHtml = "";

  $.each(item.answers, function (_, answer) {
    answersHtml += `<p>${answer}</p>`;
  });

  productFaqContainerExpandHtml += `
    <div class="product_faq-box">
      <div class="product_faq-thumb">
        <div>
          <p>${item.question}</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </div>
      </div>

      <div class="product_faq-content">
        ${answersHtml}
      </div>
    </div>
  `;
});

$PRODUCT_FAQ_CONTAINER_EXPAND.html(productFaqContainerExpandHtml);

$(document).ready(function () {
  $(".product_faq_container .product_faq-box").on("click", function () {
    const $block = $(this).closest(".product_faq-box");
    $block.toggleClass("active");
  });
});
