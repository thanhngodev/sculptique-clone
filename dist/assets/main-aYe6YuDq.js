(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&c(e)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const m=[{src:"https://trysculptique.com/cdn/shop/files/LymoPDPImagesArtboard1_8e287aa1-576e-42b1-9a87-ce2fcdaded3a.jpg?v=1760103674",hasNutrition:!0,hasBadge:!0},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard2.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard3copy.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard4.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_1.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard5_2.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard6.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard8.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard9.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard10.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard11.jpg?v=1760103684"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard12.jpg?v=1760103685"},{src:"https://trysculptique.com/cdn/shop/files/LymphDrainageREWAMPEDvisualsArtboard13.jpg?v=1760103685"}],l=".main_product-image-carousel",p=".main_product-image-carousel_thumbs";m.forEach((i,o)=>{const r=`
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
      `,c=`
        <div class="main_product-image-box">
          <img loading="eager" src="${i.src}" />
        </div>
      `;$(l).append(r),$(p).append(c)});$(document).ready(function(){$(l).slick({infinite:!0,loop:!0,speed:320,slidesToShow:1,slidesToScroll:1,prevArrow:'<button type="button" class="slick-prev" style=""><img class="left_arrow" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin_1.png?v=1752126281"></button>',nextArrow:'<button type="button" class="slick-next" style=""><img class="right_arrow" src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/iconamoon_arrow-up-2-thin.png?v=1752126281"></button>'}),$(p).slick({asNavFor:l,focusOnSelect:!0,slidesToShow:4,slidesToScroll:1,prevArrow:"",nextArrow:""})});const g=[{badge:!1,title:"1 Bottle",info:"1 bottle total | Save $27.99",price:"$31.96",compare:"$59.95",perks:[{icon:"https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",text:"Free USA Shipping"}]},{badge:!0,title:"Buy 2 Get 1 Free",info:"3 bottles total | Save $115.93",price:"$63.92",compare:"$179.85",perks:[{icon:"https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",text:"Free USA Shipping"},{icon:"https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",text:"Free Anti-Bloating Protocol E-book"}]},{badge:!1,title:"Buy 3 Get 2 Free",info:"5 bottles total | Save $203.87",price:"$95.88",compare:"$299.75",perks:[{icon:"https://trysculptique.com/cdn/shop/files/delivery-truck_181581.png?v=1749555916",text:"Free USA Shipping"},{icon:"https://trysculptique.com/cdn/shop/files/download_5307610.png?v=1749555943",text:"Free Anti-Bloating Protocol E-book"},{icon:"https://trysculptique.com/cdn/shop/files/Kaching-Bundles-Kaching-Bundles-Kaching-Bundles-gift-card_18054896_300x300_300x300_72117561-797d-4e48-9491-3bc1748ce974.png?v=1749556309",text:"$20 Gift Card"}]}],f=["https://trysculptique.com/cdn/shop/files/layer1_500x.png?v=1752348678","https://trysculptique.com/cdn/shop/files/Grazia-Logo_1_500x.png?v=1752348678","https://trysculptique.com/cdn/shop/files/WH_Logo_500x.png?v=1752348678"];$(document).ready(function(){const i=$(".product-selector_outer");let o="";$.each(g,function(s,e){let n="";$.each(e.perks,function(R,d){n+=`
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
              ${$(".product-selector_badge").first().html()}
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
      `}),i.html(o),$(document).on("click",".product-selector_block",function(){$(".product-selector_block").removeClass("active"),$(this).addClass("active")});const r=$(".logos_wrap");let c="";const t=10;for(let s=0;s<t;s++)$.each(f,function(e,n){c+=`
          <img
            src="${n}"
            alt="logo"
            class="press_logo"
            width="auto"
            height="auto"
          />
        `});r.html(c)});const v=[{icon:"https://trysculptique.com/cdn/shop/files/population_12285628_1_e864791e-7a6d-4f08-9aea-3aeffba37cc7.png?v=1758713413",text:"Join over 93 Thousand who say - it WORKS!"},{icon:"https://trysculptique.com/cdn/shop/files/blood_13858030_1.png?v=1752064910",text:"Restores your body’s natural 24-hour lymphatic cycle"},{icon:"https://trysculptique.com/cdn/shop/files/thigh_1431039_1_a75a1917-7cc8-40dc-923b-d09cece1d6e9.png?v=1758713413",text:"Helps reduce fluid retention and the appearance of puffiness and bloating"},{icon:"https://trysculptique.com/cdn/shop/files/smile_3318262_1_1da99ae9-5c63-4339-af75-d35f89cd1cbc.png?v=1758713414",text:"Helps fall asleep faster, stay asleep longer and wake up energized"},{icon:"https://trysculptique.com/cdn/shop/files/blood_13858030_2_78da9178-9f3f-491e-a5f8-b4d69dd5b9cd.png?v=1758713414",text:"Eliminates joint stiffness, pain, morning creakiness and feel more grounded"},{icon:"https://trysculptique.com/cdn/shop/files/ecology_18588873_1_dad420da-2490-4e30-828a-28b366974307.png?v=1758713413",text:"Boosts energy, mental clarity and emotional balance"}],y=[{avatar:"https://trysculptique.com/cdn/shop/files/AI_Nurse_Holding_TORC_2_efcbd677-7242-4cb2-9f99-ad1e3726b19b.png?v=1752500889",name:"Margaret Ellison",location:"FL",verifiedIcon:"https://cdn.shopify.com/s/files/1/0917/5649/5191/files/Frame_7966.png?v=1752068267",stars:"https://cdn.shopify.com/s/files/1/0917/5649/5191/files/stars-4.5_1.png?v=1752068267",title:"Even my husband noticed... the spark came back.",content:"After years of hiding under coverups, picking apart my body, and feeling disconnected, I finally feel at ease again. I feel less bloated, lighter, like my body is working with me not against me. These past months, I’ve been present. Even my marriage feels renewed, not just in how I look but in how I feel. It’s hard to explain, but once you try it you’ll get it. I’d recommend this to my closest friends without question."}],_=[{title:"Ingredients proven by science",content:`
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
      `}),o.html(r);const c=$(".product_tab-block_out");let t="";$.each(_,function(s,e){t+=`
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
      `}),c.html(t)});const b=[{subtitle:"Reactivate Lymphatic Pumps",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382.png?v=1760698909",title:"Cleavers Extract (100mg)",content:['Restores rhythmic vessel contractions that move lymph through your system. Contains iridoids that "wake up" muscle cells in vessel walls. 2024 study showed enhanced immune cell activity for better waste clearance.',"[Study: Enhanced NK cell activity in immunosuppressed models]"]},{subtitle:"Flush Excess Fluid",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_1.png?v=1760939908",title:"Dandelion Extract (250mg)",content:["Proven gentle diuretic that increases fluid excretion without harsh side effects. Human trial showed statistically significant increase in urination frequency (p<0.05) and excretion ratio (p<0.001).","[Study: First human pilot study on diuretic effects]"]},{subtitle:"Break Down Protein Clogs",image:"https://trysculptique.com/cdn/shop/files/image_2.png?v=1760939909",title:"Bromelain Powder (100mg)",content:['Proteolytic enzyme that clears blockages preventing drainage. Breaks down fibrin proteins creating "sludge" in vessels. 2024 RCT showed significantly greater reductions in swelling than placebo.',"[Study: As effective as prescription NSAIDs for inflammation]"]},{subtitle:"Strengthen Vessel Walls",image:"https://trysculptique.com/cdn/shop/files/image_3.png?v=1760939909",title:"Rutin (100mg)",content:["Reduces vessel permeability so fluid doesn't leak back into tissues. Clinical trials showed average 4.2 cm reduction in limb circumference over 6 months in lymphedema patients.","[Study: Systematic review of 1,643 participants]"]},{subtitle:"Reduce Inflammation",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_2.png?v=1760939909",title:"Burdock Root Powder (200mg)",content:["Breaks the inflammation-congestion cycle. RCT showed significantly decreased inflammatory markers IL-6 and C-reactive protein (p<0.001). Also supports hormonal balance.","[Study: 42-day trial in osteoarthritis patients]"]},{subtitle:"Boost Immune Clearance",image:"https://trysculptique.com/cdn/shop/files/image_4.png?v=1760939909",title:"Echinacea Purpurea Extract (500mg)",content:["Enhances lymphocyte activity for better waste removal. Meta-analysis of 30 trials with 5,600+ participants showed 40% reduction in recurrent infections.","[Study: Increased NK cell cytotoxic activity]"]},{subtitle:"Support Metabolism",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_3.png?v=1760939909",title:"Kelp Extract (30mg)",content:["Provides iodine for thyroid function and healthy metabolic rate. Sluggish thyroid = sluggish lymphatic drainage. Contains fucoxanthin shown to reduce body fat in human trials.","[Study: Dose-dependent increase in TSH levels]"]},{subtitle:"Antioxidant Protection",image:"https://trysculptique.com/cdn/shop/files/Frame_1484580382_4.png?v=1760939910",title:"Lemon Powder (50mg)",content:["Protects vessels from oxidative damage. RCT showed 145% improvement in vascular function (p<0.001). Supports circulation and metabolic health.","[Study: Triple-masked trial in 90 participants]"]}],w=[{image:"https://trysculptique.com/cdn/shop/files/X1.jpg?v=1760943360",title:"You cut out gluten, dairy, sugar. You ate clean for months.",reason:"Your diet only addressed what goes IN. It didn't fix your body's broken ability to drain what's already there."},{image:"https://trysculptique.com/cdn/shop/files/X2.jpg?v=1760943359",title:"You tried viral lymphatic drops from TikTok.",reason:"They’re just pricey water with trace herbs. The “active ingredients” are destroyed by stomach acid, and even if absorbed, only act as a mild diuretic. No vessel repair, no protein breakdown—just expensive urine."},{image:"https://trysculptique.com/cdn/shop/files/X3.jpg?v=1760943359",title:"You got lymphatic massage or bought compression socks.",reason:"Temporary manual movement. Within 24-48 hours, everything backed up again because your vessels still can't pump on their own."}],k=[{rating:5,date:"12/08/2025",author:"Anonymous",verified:!0,content:"Pretty sure I’m seeing improvement in the smoothness of my skin after 30 days. Will continue with confidence it’s working."},{rating:5,date:"12/01/2025",author:"Anonymous",verified:!0,content:"One month and I’ve already seen a difference!"},{rating:5,date:"11/23/2025",author:"Donabeth Houx",verified:!0,content:"I LOVE THEM! My legs have gone from late stage 2 to late one!!! Oh my gosh! It’s a miracle! I no longer have to worry about elephantitus in my future! Thank you so much!!!!!!"},{rating:5,date:"12/01/2025",author:"Dawn Camacho",verified:!0,content:"It took me about 60 days to notice a difference in smoothness. My husband noticed which is why I purchased another round. I'm happy."},{rating:5,date:"12/01/2025",author:"Anonymous",verified:!0,content:"I have noticed a difference on my swelling."}];function q(i){return"★ ".repeat(i).trim()}$(document).ready(function(){const i=$(".product_lymph-ingr-table");let o="";$.each(b,function(e,n){o+=`
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
      `}),i.html(o),$(document).on("click",".product-lymph-ingredient",function(){const e=$(this).find(".product_lymph-ingr-content");e.is(":visible")?e.stop(!0,!0).slideUp(300):e.stop(!0,!0).slideDown(300)});const r=$(".product_why-bloating-grid.bloating-grid-info-3");let c="";$.each(w,function(e,n){c+=`
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
      `}),r.html(c);const t=$(".jdgm-rev-widg__reviews");let s="";$.each(k,function(e,n){s+=`
    <div class="jdgm-rev jdgm-divider-top jdgm--done-setup">
      <div class="jdgm-rev__header">
        <div class="jdgm-row-product"></div>

        <div class="jdgm-row-rating">
          <div class="flex gap-1 text-[#f29b96]">
            ${q(n.rating)}
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
  `}),t.html(s)});const E=[{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_12.40.11.png?v=1752486039",src:"https://cdn.shopify.com/videos/c/o/v/014b7db24d12443791bd22d345637ccc.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.12.02.png?v=1752498744",src:"https://cdn.shopify.com/videos/c/o/v/4eecdc1058f349628e1c50ba81112b54.mov"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.04.png?v=1752497038",src:"https://cdn.shopify.com/videos/c/o/v/2967808b09114feb9616d295fd2f3557.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.34.png?v=1752497063",src:"https://cdn.shopify.com/videos/c/o/v/88efaa94523742bdb8f980d66600cde2.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_16.11.50.png?v=1752498777",src:"https://cdn.shopify.com/videos/c/o/v/a7bce8da322747e08ef1ce7c87317c30.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.43.10.png?v=1752497092",src:"https://cdn.shopify.com/videos/c/o/v/3a117937ae264508b440a6972ebcb6a1.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.44.54.png?v=1752497118",src:"https://cdn.shopify.com/videos/c/o/v/27085ed5be5c4c38ad579f0fdae8aefa.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.46.37.png?v=1752497216",src:"https://cdn.shopify.com/videos/c/o/v/a4ab9e815f3446ea8b84292627ec2a10.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.45.36.png?v=1752497166",src:"https://cdn.shopify.com/videos/c/o/v/68b2aa06fab44d968723e052a14d87d5.mp4"},{poster:"https://trysculptique.com/cdn/shop/files/Screenshot_2025-07-14_at_15.47.12.png?v=1752497252",src:"https://cdn.shopify.com/videos/c/o/v/0ec8de99a9c3459da6c53e18c0eeab3c.mp4"}],S=".product_ugc-container-carousel-outer",A=".product_carousel-prev",x=".product_carousel-next",a=$(S);let u="";$.each(E,function(i,o){u+=`
    <div class="product_ugc-video">
      <img
        src="https://cdn.shopify.com/s/files/1/0917/5649/5191/files/mingcute_play-fill.png?v=1752485519"
        class="product_ugc-play"
      />
      <video playsinline poster="${o.poster}">
        <source src="${o.src}" type="video/mp4" />
      </video>
    </div>
  `});a.html(u);$(document).ready(function(){a.slick({dots:!0,arrows:!1,infinite:!1,loop:!1,speed:320,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2}}]}),$(A).on("click",function(){a.slick("slickPrev")}),$(x).on("click",function(){a.slick("slickNext")}),$(".product_ugc-video").on("click",function(){const i=$(this).find("video").get(0),o=$(this).find(".product_ugc-play");i.paused?(i.play(),o.fadeOut(200)):(i.pause(),o.fadeIn(200))})});const I=[{question:"How is this different from lymphatic drops I saw on TikTok?",answers:["Lymphatic drops have poor bioavailability—liquid ingredients pass through your digestive system too quickly to be properly absorbed. Most contain only milligrams of herbs (symbolic amounts, not therapeutic doses) and act as basic diuretics that pull water from your bloodstream, not from tissue swelling.","Sculptique uses capsules with therapeutic doses (100-500mg per ingredient) that are properly absorbed and work at the cellular level to restore vessel function, break down protein clogs, and strengthen vessel walls—not just make you urinate more."]},{question:"Why didn't my diet changes work?",answers:["Your diet only addressed what goes INTO your system (inflammation from food). It didn't fix your body's broken ability to drain what's already there."]},{question:"How long until I see results?",answers:["Most women notice something within the first week—feeling lighter, less bloated, morning puffiness fading faster. Visible changes happen by weeks 2-3. Transformation becomes undeniable by weeks 4-6. We recommend 90 days for complete results."]},{question:"Is this safe? Any side effects?",answers:["Sculptique contains 100% natural botanical ingredients used safely for centuries. Increased urination in the first few days is normal. Consult your healthcare provider if you take prescription medications."]},{question:"Can I take this with other supplements?",answers:["Yes. Sculptique works well with most supplements. If you take blood thinners, diuretics, or thyroid medication, consult your provider first."]},{question:"How do I use it?",answers:["Take 2 capsules daily with water. Any time of day, with or without food."]},{question:"What if it doesn't work for me?",answers:["You have 60 days to try it risk-free. If you don't feel results, return it for a full refund."]},{question:"Where is this manufactured?",answers:["Manufactured in the USA at an FDA-registered, GMP-certified facility. Every batch is third-party tested."]},{question:"Why isn't this in stores?",answers:["To maintain strict quality control and avoid retail markups that would double the price."]},{question:"Is this vegan/gluten-free?",answers:["Yes. 100% vegan, gluten-free, sugar-free, no artificial ingredients."]}],T=$(".product_faq-container-expand");let h="";$.each(I,function(i,o){let r="";$.each(o.answers,function(c,t){r+=`<p>${t}</p>`}),h+=`
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
  `});T.html(h);$(document).ready(function(){$(".product_faq_container .product_faq-box").on("click",function(){$(this).closest(".product_faq-box").toggleClass("active")})});$(document).ready(function(){$(".product_tab-thumb").on("click",function(){$(this).closest(".product_tab-block").toggleClass("active")})});
