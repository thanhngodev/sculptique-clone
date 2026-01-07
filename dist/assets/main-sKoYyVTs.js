(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&a(e)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m=[{src:"https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",hasNutrition:!0,hasBadge:!0},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685"}],l=".main_product-image-carousel",p=".main_product-image-carousel_thumbs";m.forEach((i,o)=>{const r=`
        <div class="main_product-image-box">
          <img loading="eager" src="${i.src}" />

          ${i.hasNutrition?`
            <div class="main_product-nutrition-info">
              <span>
                <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/leaves_1247958_1.png?v=1752126615" />
              </span>
              <span>Nutritional Information</span>
            </div>
          `:""}

          ${i.hasBadge?`
            <img
              class="main-producT_bf_badge"
              src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/nysale.png?v=1766822224"
            />
          `:""}
        </div>
      `,a=`
        <div class="main_product-image-box">
          <img loading="eager" src="${i.src}" />
        </div>
      `;$(l).append(r),$(p).append(a)});$(document).ready(function(){$(l).slick({infinite:!0,loop:!0,speed:320,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev" style=""><img class="left_arrow" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"></button>',nextArrow:'<button type="button" class="slick-next" style=""><img class="right_arrow" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"></button>'}),$(p).slick({asNavFor:l,focusOnSelect:!0,slidesToShow:4,slidesToScroll:1,prevArrow:"",nextArrow:""})});const g=[{badge:!1,title:"1 Bottle",info:"1 bottle total | Save $27.99",price:"$31.96",compare:"$59.95",perks:[{icon:"https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",text:"Free USA Shipping"}]},{badge:!0,title:"Buy 2 Get 1 Free",info:"3 bottles total | Save $115.93",price:"$63.92",compare:"$179.85",perks:[{icon:"https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",text:"Free USA Shipping"},{icon:"https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",text:"Free Anti-Bloating Protocol E-book"}]},{badge:!1,title:"Buy 3 Get 2 Free",info:"5 bottles total | Save $203.87",price:"$95.88",compare:"$299.75",perks:[{icon:"https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",text:"Free USA Shipping"},{icon:"https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",text:"Free Anti-Bloating Protocol E-book"},{icon:"https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309",text:"$20 Gift Card"}]}],f=["https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678","https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678","https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678"];$(document).ready(function(){const i=$(".product-selector_outer");let o="";$.each(g,function(s,e){let n="";$.each(e.perks,function(I,d){n+=`
          <div class="product-selector_perk_line 111">
            <div>
              <img src="${d.icon}" />
            </div>
            <div>
              <p>
                <span class="kaching-bundles__free-gift__text">
                  ${d.text}
                </span>
              </p>
            </div>
          </div>
        `}),o+=`
        <div class="product-selector_block ${s===1?"active":""}">
          ${e.badge?`
            <div class="product-selector_badge">
                <svg width="77" height="37" viewBox="0 0 77 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="38.5" cy="18.5" rx="38.5" ry="18.5" fill="#E70C0C"></ellipse>
                    <path d="M57.3 6.74468C57.3 7.71526 57.6793 8.64609 58.3544 9.33239C59.0295 10.0187 59.9452 10.4043 60.9 10.4043C59.9452 10.4043 59.0295 10.7898 58.3544 11.4761C57.6793 12.1624 57.3 13.0933 57.3 14.0638C57.3 13.0933 56.9207 12.1624 56.2456 11.4761C55.5705 10.7898 54.6548 10.4043 53.7 10.4043C54.6548 10.4043 55.5705 10.0187 56.2456 9.33239C56.9207 8.64609 57.3 7.71526 57.3 6.74468Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.264 19.224L68.9 16L68.536 19.224L67.132 18.132L68.172 19.536L65 19.9L68.224 20.264L67.08 21.72L68.536 20.628L68.9 23.8L69.264 20.628L70.72 21.72L69.576 20.264L72.8 19.9L69.628 19.536L70.668 18.132L69.264 19.224Z" fill="white"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.264 11.224L11.9 8L11.536 11.224L10.132 10.132L11.172 11.536L8 11.9L11.224 12.264L10.08 13.72L11.536 12.628L11.9 15.8L12.264 12.628L13.72 13.72L12.576 12.264L15.8 11.9L12.628 11.536L13.668 10.132L12.264 11.224Z" fill="white"></path>
                    <path d="M12.5328 20V13H14.1728L17.0528 17.29V13H18.6628V20H17.0228L14.1378 15.65V20H12.5328ZM22.486 20.15C21.926 20.15 21.4343 20.0383 21.011 19.815C20.5877 19.5883 20.2577 19.2733 20.021 18.87C19.7843 18.4633 19.666 17.9883 19.666 17.445C19.666 17.0517 19.7343 16.69 19.871 16.36C20.011 16.03 20.2043 15.745 20.451 15.505C20.701 15.265 20.9943 15.08 21.331 14.95C21.671 14.8167 22.0443 14.75 22.451 14.75C22.8977 14.75 23.296 14.83 23.646 14.99C23.996 15.1467 24.2843 15.3667 24.511 15.65C24.741 15.93 24.8993 16.2617 24.986 16.645C25.0727 17.025 25.076 17.4383 24.996 17.885H21.166C21.1693 18.085 21.2293 18.26 21.346 18.41C21.4627 18.56 21.6227 18.6783 21.826 18.765C22.0293 18.8483 22.266 18.89 22.536 18.89C22.836 18.89 23.121 18.8517 23.391 18.775C23.661 18.695 23.9193 18.5733 24.166 18.41L24.681 19.52C24.5243 19.64 24.321 19.7483 24.071 19.845C23.8243 19.9383 23.561 20.0117 23.281 20.065C23.0043 20.1217 22.7393 20.15 22.486 20.15ZM21.266 16.78H23.436C23.4293 16.5233 23.3343 16.3183 23.151 16.165C22.9677 16.0117 22.7193 15.935 22.406 15.935C22.0893 15.935 21.826 16.0117 21.616 16.165C21.4093 16.3183 21.2927 16.5233 21.266 16.78ZM26.7847 20L25.2597 14.9H26.8447L27.6697 18.115L28.6197 14.9H30.1297L31.0447 18.115L31.8597 14.9H33.3847L31.8597 20H30.2297L29.3447 16.905L28.4147 20H26.7847ZM37.9756 20V17.075L35.5206 13H37.3856L38.8406 15.485L40.2806 13H42.0956L39.6406 17.09V20H37.9756ZM44.3907 20.15C43.8307 20.15 43.339 20.0383 42.9157 19.815C42.4924 19.5883 42.1624 19.2733 41.9257 18.87C41.689 18.4633 41.5707 17.9883 41.5707 17.445C41.5707 17.0517 41.639 16.69 41.7757 16.36C41.9157 16.03 42.109 15.745 42.3557 15.505C42.6057 15.265 42.899 15.08 43.2357 14.95C43.5757 14.8167 43.949 14.75 44.3557 14.75C44.8024 14.75 45.2007 14.83 45.5507 14.99C45.9007 15.1467 46.189 15.3667 46.4157 15.65C46.6457 15.93 46.804 16.2617 46.8907 16.645C46.9774 17.025 46.9807 17.4383 46.9007 17.885H43.0707C43.074 18.085 43.134 18.26 43.2507 18.41C43.3674 18.56 43.5274 18.6783 43.7307 18.765C43.934 18.8483 44.1707 18.89 44.4407 18.89C44.7407 18.89 45.0257 18.8517 45.2957 18.775C45.5657 18.695 45.824 18.5733 46.0707 18.41L46.5857 19.52C46.429 19.64 46.2257 19.7483 45.9757 19.845C45.729 19.9383 45.4657 20.0117 45.1857 20.065C44.909 20.1217 44.644 20.15 44.3907 20.15ZM43.1707 16.78H45.3407C45.334 16.5233 45.239 16.3183 45.0557 16.165C44.8724 16.0117 44.624 15.935 44.3107 15.935C43.994 15.935 43.7307 16.0117 43.5207 16.165C43.314 16.3183 43.1974 16.5233 43.1707 16.78ZM49.2482 20.15C48.9082 20.15 48.6032 20.085 48.3332 19.955C48.0632 19.8217 47.8499 19.6333 47.6932 19.39C47.5365 19.1433 47.4582 18.8483 47.4582 18.505C47.4582 18.2117 47.5299 17.9517 47.6732 17.725C47.8199 17.4983 48.0399 17.3117 48.3332 17.165C48.6265 17.0183 48.9949 16.92 49.4382 16.87C49.8849 16.8167 50.4065 16.8167 51.0032 16.87L51.0182 17.89C50.7015 17.8333 50.4149 17.805 50.1582 17.805C49.9049 17.8017 49.6882 17.8233 49.5082 17.87C49.3315 17.9133 49.1949 17.9817 49.0982 18.075C49.0015 18.1683 48.9532 18.2833 48.9532 18.42C48.9532 18.5967 49.0199 18.7317 49.1532 18.825C49.2899 18.9183 49.4715 18.965 49.6982 18.965C49.8949 18.965 50.0715 18.93 50.2282 18.86C50.3882 18.79 50.5149 18.6883 50.6082 18.555C50.7049 18.4183 50.7532 18.2517 50.7532 18.055V16.89C50.7532 16.7067 50.7149 16.545 50.6382 16.405C50.5615 16.265 50.4399 16.1567 50.2732 16.08C50.1099 16 49.8915 15.96 49.6182 15.96C49.3549 15.96 49.0932 16 48.8332 16.08C48.5732 16.1567 48.3399 16.2733 48.1332 16.43L47.7132 15.305C48.0432 15.0983 48.3965 14.9467 48.7732 14.85C49.1499 14.75 49.5199 14.7 49.8832 14.7C50.3632 14.7 50.7849 14.7767 51.1482 14.93C51.5149 15.0833 51.8015 15.32 52.0082 15.64C52.2149 15.96 52.3182 16.37 52.3182 16.87V20H50.9032V19.46C50.7399 19.68 50.5149 19.85 50.2282 19.97C49.9415 20.09 49.6149 20.15 49.2482 20.15ZM53.514 20V14.9H55.154V15.495C55.3073 15.2317 55.5107 15.04 55.764 14.92C56.0173 14.8 56.2923 14.74 56.589 14.74C56.7023 14.74 56.804 14.7467 56.894 14.76C56.984 14.7733 57.0723 14.7883 57.159 14.805L56.964 16.49C56.8507 16.45 56.7307 16.4183 56.604 16.395C56.4773 16.3683 56.3507 16.355 56.224 16.355C55.914 16.355 55.6573 16.445 55.454 16.625C55.254 16.8017 55.154 17.0617 55.154 17.405V20H53.514ZM59.7626 20.14C59.2892 20.14 58.8559 20.0817 58.4626 19.965C58.0726 19.8483 57.7359 19.6833 57.4526 19.47L57.9626 18.345C58.2392 18.5217 58.5359 18.6617 58.8526 18.765C59.1692 18.865 59.4692 18.915 59.7526 18.915C60.0126 18.915 60.2109 18.88 60.3476 18.81C60.4842 18.7367 60.5526 18.6317 60.5526 18.495C60.5526 18.375 60.4892 18.2867 60.3626 18.23C60.2392 18.1733 59.9959 18.1117 59.6326 18.045C58.9459 17.9283 58.4426 17.7367 58.1226 17.47C57.8059 17.2 57.6476 16.8317 57.6476 16.365C57.6476 16.0317 57.7392 15.74 57.9226 15.49C58.1059 15.24 58.3592 15.0467 58.6826 14.91C59.0092 14.77 59.3842 14.7 59.8076 14.7C60.2209 14.7 60.6109 14.755 60.9776 14.865C61.3476 14.975 61.6642 15.1283 61.9276 15.325L61.4326 16.45C61.2959 16.3467 61.1376 16.255 60.9576 16.175C60.7809 16.095 60.5976 16.0333 60.4076 15.99C60.2176 15.9467 60.0326 15.925 59.8526 15.925C59.6292 15.925 59.4476 15.96 59.3076 16.03C59.1709 16.0967 59.1026 16.19 59.1026 16.31C59.1026 16.4333 59.1626 16.525 59.2826 16.585C59.4026 16.645 59.6426 16.7133 60.0026 16.79C60.7292 16.9367 61.2442 17.135 61.5476 17.385C61.8509 17.6317 62.0026 17.9783 62.0026 18.425C62.0026 18.7717 61.9076 19.0733 61.7176 19.33C61.5309 19.5867 61.2692 19.7867 60.9326 19.93C60.5992 20.07 60.2092 20.14 59.7626 20.14ZM29.8536 30.15C29.3236 30.15 28.8086 30.0717 28.3086 29.915C27.8086 29.7583 27.3853 29.5317 27.0386 29.235L27.8186 27.995C27.9653 28.1517 28.1519 28.2867 28.3786 28.4C28.6053 28.5133 28.8469 28.6017 29.1036 28.665C29.3636 28.725 29.6153 28.755 29.8586 28.755C30.2019 28.755 30.4803 28.6983 30.6936 28.585C30.9103 28.4683 31.0186 28.3 31.0186 28.08C31.0186 27.9 30.9403 27.7483 30.7836 27.625C30.6303 27.5017 30.3419 27.3833 29.9186 27.27L29.3186 27.1C28.5986 26.9 28.0803 26.6267 27.7636 26.28C27.4469 25.9333 27.2886 25.5167 27.2886 25.03C27.2886 24.7167 27.3553 24.4283 27.4886 24.165C27.6219 23.8983 27.8086 23.6683 28.0486 23.475C28.2886 23.2783 28.5703 23.1267 28.8936 23.02C29.2203 22.91 29.5753 22.855 29.9586 22.855C30.4886 22.855 30.9803 22.9333 31.4336 23.09C31.8903 23.2433 32.2569 23.4533 32.5336 23.72L31.7236 24.92C31.5969 24.7867 31.4403 24.67 31.2536 24.57C31.0669 24.47 30.8636 24.3917 30.6436 24.335C30.4236 24.2783 30.2019 24.25 29.9786 24.25C29.7586 24.25 29.5669 24.2783 29.4036 24.335C29.2403 24.3917 29.1119 24.4733 29.0186 24.58C28.9286 24.6833 28.8836 24.8067 28.8836 24.95C28.8836 25.0667 28.9169 25.165 28.9836 25.245C29.0536 25.3217 29.1686 25.395 29.3286 25.465C29.4919 25.535 29.7119 25.6117 29.9886 25.695L30.5986 25.875C31.3153 26.085 31.8336 26.3483 32.1536 26.665C32.4736 26.9817 32.6336 27.3933 32.6336 27.9C32.6336 28.3433 32.5203 28.735 32.2936 29.075C32.0669 29.4117 31.7453 29.675 31.3286 29.865C30.9153 30.055 30.4236 30.15 29.8536 30.15ZM34.9853 30.15C34.6453 30.15 34.3403 30.085 34.0703 29.955C33.8003 29.8217 33.587 29.6333 33.4303 29.39C33.2736 29.1433 33.1953 28.8483 33.1953 28.505C33.1953 28.2117 33.267 27.9517 33.4103 27.725C33.557 27.4983 33.777 27.3117 34.0703 27.165C34.3636 27.0183 34.732 26.92 35.1753 26.87C35.622 26.8167 36.1436 26.8167 36.7403 26.87L36.7553 27.89C36.4386 27.8333 36.152 27.805 35.8953 27.805C35.642 27.8017 35.4253 27.8233 35.2453 27.87C35.0686 27.9133 34.932 27.9817 34.8353 28.075C34.7386 28.1683 34.6903 28.2833 34.6903 28.42C34.6903 28.5967 34.757 28.7317 34.8903 28.825C35.027 28.9183 35.2086 28.965 35.4353 28.965C35.632 28.965 35.8086 28.93 35.9653 28.86C36.1253 28.79 36.252 28.6883 36.3453 28.555C36.442 28.4183 36.4903 28.2517 36.4903 28.055V26.89C36.4903 26.7067 36.452 26.545 36.3753 26.405C36.2986 26.265 36.177 26.1567 36.0103 26.08C35.847 26 35.6286 25.96 35.3553 25.96C35.092 25.96 34.8303 26 34.5703 26.08C34.3103 26.1567 34.077 26.2733 33.8703 26.43L33.4503 25.305C33.7803 25.0983 34.1336 24.9467 34.5103 24.85C34.887 24.75 35.257 24.7 35.6203 24.7C36.1003 24.7 36.522 24.7767 36.8853 24.93C37.252 25.0833 37.5386 25.32 37.7453 25.64C37.952 25.96 38.0553 26.37 38.0553 26.87V30H36.6403V29.46C36.477 29.68 36.252 29.85 35.9653 29.97C35.6786 30.09 35.352 30.15 34.9853 30.15ZM39.2511 30V22.8H40.8911V30H39.2511ZM44.5739 30.15C44.0139 30.15 43.5222 30.0383 43.0989 29.815C42.6756 29.5883 42.3456 29.2733 42.1089 28.87C41.8722 28.4633 41.7539 27.9883 41.7539 27.445C41.7539 27.0517 41.8222 26.69 41.9589 26.36C42.0989 26.03 42.2922 25.745 42.5389 25.505C42.7889 25.265 43.0822 25.08 43.4189 24.95C43.7589 24.8167 44.1322 24.75 44.5389 24.75C44.9856 24.75 45.3839 24.83 45.7339 24.99C46.0839 25.1467 46.3722 25.3667 46.5989 25.65C46.8289 25.93 46.9872 26.2617 47.0739 26.645C47.1606 27.025 47.1639 27.4383 47.0839 27.885H43.2539C43.2572 28.085 43.3172 28.26 43.4339 28.41C43.5506 28.56 43.7106 28.6783 43.9139 28.765C44.1172 28.8483 44.3539 28.89 44.6239 28.89C44.9239 28.89 45.2089 28.8517 45.4789 28.775C45.7489 28.695 46.0072 28.5733 46.2539 28.41L46.7689 29.52C46.6122 29.64 46.4089 29.7483 46.1589 29.845C45.9122 29.9383 45.6489 30.0117 45.3689 30.065C45.0922 30.1217 44.8272 30.15 44.5739 30.15ZM43.3539 26.78H45.5239C45.5172 26.5233 45.4222 26.3183 45.2389 26.165C45.0556 26.0117 44.8072 25.935 44.4939 25.935C44.1772 25.935 43.9139 26.0117 43.7039 26.165C43.4972 26.3183 43.3806 26.5233 43.3539 26.78Z" fill="white"></path>
                </svg>
            </div>
          `:""}

          <div class="product-selector_head">
            <div>
              <div class="product-selector_bubble">
                <div class="product-selector_bubble_inn"></div>
              </div>
            </div>
            <div>
              <p class="product-selector_title">${e.title}</p>
              <p class="product-selector_info">${e.info}</p>
            </div>
            <div>
              <p class="product-selector_price">${e.price}</p>
              <s class="product-selector_compare">${e.compare}</s>
            </div>
          </div>

          <div class="product-selector_perks">
            ${n}
          </div>
        </div>
      `}),i.html(o),$(document).on("click",".product-selector_block",function(){$(".product-selector_block").removeClass("active"),$(this).addClass("active")});const r=$(".logos_wrap");let a="";const t=10;for(let s=0;s<t;s++)$.each(f,function(e,n){a+=`
          <img
            src="${n}"
            alt="logo"
            class="press_logo"
            width="auto"
            height="auto"
          />
        `});r.html(a)});const v=[{icon:"https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",text:"Join over 93 Thousand who say - it WORKS!"},{icon:"https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",text:"Restores your body’s natural 24-hour lymphatic cycle"},{icon:"https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",text:"Helps reduce fluid retention and the appearance of puffiness and bloating"},{icon:"https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",text:"Helps fall asleep faster, stay asleep longer and wake up energized"},{icon:"https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",text:"Eliminates joint stiffness, pain, morning creakiness and feel more grounded"},{icon:"https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",text:"Boosts energy, mental clarity and emotional balance"}],y=[{avatar:"https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889",name:"Margaret Ellison",location:"FL",verifiedIcon:"https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267",stars:"https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267",title:"Even my husband noticed... the spark came back.",content:"After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this to my closest friends without question."}],C=[{title:"Ingredients proven by science",content:`
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
      `},{title:"How does it actually work?",content:`
        <p>
          Sculptique works by improving blood flow and supporting lymphatic drainage
          to reduce fluid buildup that causes puffiness, inflammation, and water retention.
          It also reduces inflammation and boosts collagen production to help skin become firmer and smoother.
        </p>
      `},{title:"Shipping and returns",content:`
        <p>
          All of Sculptique orders get FREE shipping straight from our USA warehouse.
          Orders are usually shipped out within 1–2 working days.
        </p>
        <p>
          We also offer a 60-day money back guarantee if you are unsatisfied with our product.
        </p>
      `}];$(document).ready(function(){const i=$(".main_product-features");v.forEach(s=>{const e=`
        <div class="main_product-feature-line">
          <div>
            <img loading="lazy" src="${s.icon}" />
          </div>
          <div>
            <p>${s.text}</p>
          </div>
        </div>
      `;i.append(e)});const o=$(".main_product-review");let r="";$.each(y,function(s,e){r+=`
        <div class="main_product-review-meta">
          <div>
            <img loading="lazy" src="${e.avatar}" />
          </div>
          <div>
            <p>
              ${e.name} | ${e.location}
              <span><img src="${e.verifiedIcon}" /></span>
            </p>
            <img
              class="main_product-review-stars"
              src="${e.stars}"
            />
          </div>
        </div>

        <div class="main_product-review-content">
          <p><strong>${e.title}</strong></p>
          <p>${e.content}</p>
        </div>
      `}),o.html(r);const a=$(".product_tab-block_out");let t="";$.each(C,function(s,e){t+=`
        <div class="product_tab-block">
          <div class="product_tab-thumb">
            <p>${e.title}</p>
            <span>
              <img
                src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Button_To_Expand_1_8a6027c0-281a-4c6b-8881-60673c7255ec.png?v=1758716844"
              />
            </span>
          </div>
          <div class="product_tab-content">
            ${e.content}
          </div>
        </div>
      `}),a.html(t)});const _=[{subtitle:"Reactivate Lymphatic Pumps",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",title:"Cleavers Extract (100mg)",content:['Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',"[Study: Enhanced NK cell activity in immunosuppressed models]"]},{subtitle:"Flush Excess Fluid",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",title:"Dandelion Extract (250mg)",content:["Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).","[Study: First human pilot study on diuretic effects]"]},{subtitle:"Break Down Protein Clogs",image:"https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",title:"Bromelain Powder (100mg)",content:['Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',"[Study: As effective as prescription NSAIDs for inflammation]"]},{subtitle:"Strengthen Vessel Walls",image:"https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",title:"Rutin (100mg)",content:["Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.","[Study: Systematic review of 1,643 participants]"]},{subtitle:"Reduce Inflammation",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",title:"Burdock Root Powder (200mg)",content:["Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.","[Study: 42-day trial in osteoarthritis patients]"]},{subtitle:"Boost Immune Clearance",image:"https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",title:"Echinacea Purpurea Extract (500mg)",content:["Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.","[Study: Increased NK cell cytotoxic activity]"]},{subtitle:"Support Metabolism",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",title:"Kelp Extract (30mg)",content:["Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.","[Study: Dose-dependent increase in TSH levels]"]},{subtitle:"Antioxidant Protection",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",title:"Lemon Powder (50mg)",content:["Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.","[Study: Triple-masked trial in 90 participants]"]}],b=[{image:"https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",title:"You cut out gluten, dairy, sugar. You ate clean for months.",reason:"Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there."},{image:"https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",title:"You tried viral lymphatic drops from TikTok.",reason:"They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine."},{image:"https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",title:"You got lymphatic massage or bought compression socks.",reason:"Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own."}],w=[{rating:5,date:"12/08/2025",author:"Anonymous",verified:!0,content:"Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working."},{rating:5,date:"12/01/2025",author:"Anonymous",verified:!0,content:"One month and I’ve already seen a difference!"},{rating:5,date:"11/23/2025",author:"Donabeth Houx",verified:!0,content:"I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!"},{rating:5,date:"12/01/2025",author:"Dawn Camacho",verified:!0,content:"It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy."},{rating:5,date:"12/01/2025",author:"Anonymous",verified:!0,content:"I have noticed a difference on my swelling."}];function k(i){return"★ ".repeat(i).trim()}$(document).ready(function(){const i=$(".product_lymph-ingr-table");let o="";$.each(_,function(e,n){o+=`
        <div class="product-lymph-ingredient">
          <p class="product_lymph-ingr-subtitle">
            <span>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/check-mark_17013456_2.png?v=1760698419" />
            </span>
            <span>${n.subtitle}</span>
          </p>

          <img
            class="Desktop_only product_lymph-main-img"
            loading="lazy"
            src="${n.image}"
          />

          <div class="product_lymph-ingr-thumb">
            <div class="Mobile_only">
              <img
                class="product_lymph-main-img"
                loading="lazy"
                src="${n.image}"
              />
            </div>
            <div>
              <h5>${n.title}</h5>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/weui_arrow-outlined.png?v=1760698626" />
            </div>
          </div>

          <div class="product_lymph-ingr-content">
            <p>${n.content[0]}</p>
            <p>${n.content[1]}</p>
          </div>
        </div>
      `}),i.html(o),$(document).on("click",".product-lymph-ingredient",function(){const e=$(this).find(".product_lymph-ingr-content");e.is(":visible")?e.stop(!0,!0).slideUp(300):e.stop(!0,!0).slideDown(300)});const r=$(".product_why-bloating-grid.bloating-grid-info-3");let a="";$.each(b,function(e,n){a+=`
        <div class="product_why-nothing-cell">
          <div>
            <img src="${n.image}" />
          </div>

          <div class="product_why-nothing-cell-inn">
            <h4>${n.title}</h4>

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
                ${n.reason}
              </p>
            </div>
          </div>
        </div>
      `}),r.html(a);const t=$(".jdgm-rev-widg__reviews");let s="";$.each(w,function(e,n){s+=`
    <div class="jdgm-rev jdgm-divider-top jdgm--done-setup">
      <div class="jdgm-rev__header">
        <div class="jdgm-row-product"></div>

        <div class="jdgm-row-rating">
          <div class="flex gap-1 text-[#f29b96]">
            ${k(n.rating)}
          </div>
          <span class="jdgm-rev__timestamp">${n.date}</span>
        </div>

        <div class="jdgm-row-profile">
          <div class="jdgm-rev__icon h-[30px] w-[30px]">
            <img src="/assets/images/user-check.png" />
          </div>
          <span class="jdgm-rev__author-wrapper">
            <span class="jdgm-rev__author">${n.author}</span>
            ${n.verified?`
              <span class="jdgm-rev__buyer-badge-wrapper">
                <span class="jdgm-rev__buyer-badge"></span>
              </span>`:""}
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
          <p>${n.content}</p>
        </div>
        <div class="jdgm-rev__custom-form"></div>
        <div class="jdgm-rev__transparency-badge-wrapper"></div>
      </div>
    </div>
  `}),t.html(s)});const L=[{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",src:"https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",src:"https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",src:"https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",src:"https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",src:"https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",src:"https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",src:"https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",src:"https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",src:"https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",src:"https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4"}],q=".product_ugc-container-carousel-outer",E=".product_carousel-prev",x=".product_carousel-next",c=$(q);let u="";$.each(L,function(i,o){u+=`
    <div class="product_ugc-video">
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
        class="product_ugc-play"
      />
      <video playsinline poster="${o.poster}">
        <source src="${o.src}" type="video/mp4" />
      </video>
    </div>
  `});c.html(u);$(document).ready(function(){c.slick({dots:!0,arrows:!1,infinite:!1,loop:!1,speed:320,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(E).on("click",function(){c.slick("slickPrev")}),$(x).on("click",function(){c.slick("slickNext")}),$(".product_ugc-video").on("click",function(){const i=$(this).find("video").get(0),o=$(this).find(".product_ugc-play");i.paused?(i.play(),o.fadeOut(200)):(i.pause(),o.fadeIn(200))})});const S=[{question:"How is this different from lymphatic drops I saw on TikTok?",answers:["Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.","Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more."]},{question:"Why didn't my diet changes work?",answers:["Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there."]},{question:"How long until I see results?",answers:["Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. We recommend 90 days for complete results."]},{question:"Is this safe? Any side effects?",answers:["Sculptique contains 100% natural botanical ingredients used safely for centuries. Increased urination in the first few days is normal. Consult your healthcare provider if you take prescription medications."]},{question:"Can I take this with other supplements?",answers:["Yes. Sculptique works well with most supplements. If you take blood thinners, diuretics, or thyroid medication, consult your provider first."]},{question:"How do I use it?",answers:["Take 2 capsules daily with water. Any time of day, with or without food."]},{question:"What if it doesn't work for me?",answers:["You have 60 days to try it risk-free. If you don't feel results, return it for a full refund."]},{question:"Where is this manufactured?",answers:["Manufactured in the USA at an FDA-registered, GMP-certified facility. Every batch is third-party tested."]},{question:"Why isn't this in stores?",answers:["To maintain strict quality control and avoid retail markups that would double the price."]},{question:"Is this vegan/gluten-free?",answers:["Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients."]}],A=$(".product_faq-container-expand");let h="";$.each(S,function(i,o){let r="";$.each(o.answers,function(a,t){r+=`<p>${t}</p>`}),h+=`
    <div class="product_faq-box">
      <div class="product_faq-thumb">
        <div>
          <p>${o.question}</p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
          </svg>
        </div>
      </div>

      <div class="product_faq-content">
        ${r}
      </div>
    </div>
  `});A.html(h);$(document).ready(function(){$(".product_faq_container .product_faq-box").on("click",function(){$(this).closest(".product_faq-box").toggleClass("active")})});$(document).ready(function(){$(".product_tab-thumb").on("click",function(){$(this).closest(".product_tab-block").toggleClass("active")})});
