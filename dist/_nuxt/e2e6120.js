(window.webpackJsonp=window.webpackJsonp||[]).push([[1,14],{363:function(t,e,r){var content=r(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("6c181fd3",content,!0,{sourceMap:!1})},364:function(t,e,r){"use strict";r.r(e);r(359);var n={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},o=(r(366),r(8)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"49240cd4",null);e.default=component.exports},366:function(t,e,r){"use strict";r(363)},367:function(t,e,r){var n=r(15)(!1);n.push([t.i,".title[data-v-49240cd4]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-49240cd4]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-49240cd4]{font-size:35px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-49240cd4]{text-align:center}}",""]),t.exports=n},368:function(t,e,r){var content=r(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("23e24ba8",content,!0,{sourceMap:!1})},369:function(t,e,r){var content=r(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2f743068",content,!0,{sourceMap:!1})},370:function(t,e,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("56f8ccec",content,!0,{sourceMap:!1})},374:function(t,e,r){var content=r(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("3ea23860",content,!0,{sourceMap:!1})},377:function(t,e,r){"use strict";r(368)},378:function(t,e,r){var n=r(15)(!1);n.push([t.i,".rating[data-v-7db2f56a]{display:flex;max-width:133px}",""]),t.exports=n},379:function(t,e,r){"use strict";r(369)},380:function(t,e,r){var n=r(15)(!1);n.push([t.i,".grains[data-v-58678a3a]{display:flex;max-width:130px;gap:7px}",""]),t.exports=n},381:function(t,e,r){"use strict";r(370)},382:function(t,e,r){var n=r(15)(!1);n.push([t.i,".scale[data-v-577d0da5]{display:flex;max-width:130px;gap:3px}.scale__circle-orange[data-v-577d0da5],.scale__circle-gray[data-v-577d0da5]{height:10px;width:10px;border-radius:50%}.scale__circle-orange[data-v-577d0da5]{background-color:#f9b300}.scale__circle-gray[data-v-577d0da5]{background-color:#f0f0f0}",""]),t.exports=n},383:function(t,e,r){"use strict";r.r(e);r(359);var n={name:"Rating",props:{maxStars:{type:Number,default:function(){return 0}},grade:{type:Number,default:function(){return 0}}}},o=(r(377),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[t._l(t.grade,(function(r){return e("li",{key:r,class:t.b("star")},[e("Icon",{attrs:{name:"star"}})],1)})),t._v(" "),t._l(t.maxStars-t.grade,(function(r){return e("li",{key:r,class:t.b("empty-star")},[e("Icon",{attrs:{name:"empty-star"}})],1)}))],2)}),[],!1,null,"7db2f56a",null);e.default=component.exports;installComponents(component,{Icon:r(135).default})},384:function(t,e,r){"use strict";r.r(e);r(359);var n={name:"Grains",props:{grains:{type:Number,default:function(){return 0}}}},o=(r(379),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},t._l(t.grains,(function(r){return e("li",{key:r,class:t.b("item")},[e("Icon",{attrs:{name:"grain"}})],1)})),0)}),[],!1,null,"58678a3a",null);e.default=component.exports;installComponents(component,{Icon:r(135).default})},385:function(t,e,r){"use strict";r.r(e);r(359);var n={name:"Scale",props:{scale:{type:Number,default:function(){return 0}},maxScale:{type:Number,default:function(){return 0}}}},o=(r(381),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[t._l(t.scale,(function(r){return e("li",{key:r,class:t.b("item")},[e("div",{class:t.b("circle-orange")})])})),t._v(" "),t._l(t.maxScale-t.scale,(function(r){return e("li",{key:r,class:t.b("item")},[e("div",{class:t.b("circle-gray")})])}))],2)}),[],!1,null,"577d0da5",null);e.default=component.exports},389:function(t,e,r){var content=r(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("5f11dcf8",content,!0,{sourceMap:!1})},390:function(t,e,r){t.exports=r.p+"img/promo-images.047074c.png"},391:function(t,e,r){"use strict";r(374)},392:function(t,e,r){var n=r(15)(!1);n.push([t.i,".product-cart[data-v-09b18506]{position:relative;background-color:#fff;box-shadow:0px 0px 20px rgba(146,146,146,.25);border-radius:20px;max-width:400px;padding:20px 35px 50px}@media(max-width: 1200px){.product-cart[data-v-09b18506]{padding:25px}}@media(max-width: 480px){.product-cart[data-v-09b18506]{padding:15px 20px}}.product-cart__gram[data-v-09b18506]{font-size:18px;font-weight:500;line-height:1.16;display:flex;justify-content:center;align-items:center;background-color:#fff7e1;border:1px solid #f9b300;border-radius:5px;max-width:132px;width:100%;height:33px;margin-left:auto}.product-cart__product-title[data-v-09b18506]{font-size:18px;font-weight:700;line-height:1.16;color:#f9b300;margin-bottom:20px}.product-cart__box[data-v-09b18506]{display:flex;gap:20px;margin-bottom:35px}.product-cart__statistics[data-v-09b18506]{display:flex;align-items:center;gap:7px;margin-bottom:28px}.product-cart__statistics-number[data-v-09b18506]{font-size:20px;font-weight:700;line-height:1.2}.product-cart__statistics-review[data-v-09b18506]{font-size:14px;font-weight:500;line-height:1.14;color:#5b5b5b}.product-cart__grains[data-v-09b18506]{margin-bottom:30px}.product-cart__title-static[data-v-09b18506]{font-size:18px;font-weight:500;line-height:1.16;max-width:100px;margin-bottom:10px;color:#222}.product-cart__sourness[data-v-09b18506]{margin-bottom:15px}.product-cart__bitterness[data-v-09b18506]{margin-bottom:15px}.product-cart__title[data-v-09b18506]{font-size:25px;line-height:1.24;margin-bottom:10px;max-width:230px;color:#222}.product-cart__subtitle[data-v-09b18506]{font-size:18px;font-weight:500;line-height:1.16;max-width:270px;margin-bottom:8px}.product-cart__wrapper[data-v-09b18506]{display:flex;justify-content:space-between;align-items:flex-end;gap:20px}@media(max-width: 384px){.product-cart__wrapper[data-v-09b18506]{align-items:center}}@media(max-width: 384px){.product-cart__prices[data-v-09b18506]{display:flex;align-items:center;gap:30px}}.product-cart__oldprice[data-v-09b18506]{font-size:25px;font-weight:500;line-height:1.16;color:#c6c6c6;text-decoration:line-through}@media(max-width: 480px){.product-cart__oldprice[data-v-09b18506]{font-size:20px}}.product-cart__price[data-v-09b18506]{font-size:35px;line-height:1.25;font-weight:900;color:#222}@media(max-width: 480px){.product-cart__price[data-v-09b18506]{font-size:30px}}.product-cart__button[data-v-09b18506]{font-size:18px;font-weight:700;line-height:1.2;display:flex;justify-content:center;align-items:center;background-color:var(--color-btn);border-radius:5px;max-width:178px;width:100%;height:48px;padding:13px;color:#fff;transition:.5s}.product-cart__product-images[data-v-09b18506]{position:absolute;top:-40px;left:10px}@media(hover: hover){.product-cart__button[data-v-09b18506]:hover{background-color:var(--hover-color-btn)}}",""]),t.exports=n},402:function(t,e,r){"use strict";r.r(e);var n={name:"ProductCart",props:{cart:{type:Object,default:function(){}}}},o=(r(391),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("div",{class:t.b("gram")},[t._v("\n    "+t._s(t.cart.gram)+" г.\n  ")]),t._v(" "),e("h3",{class:t.b("product-title")},[t._v("\n    Скидки\n  ")]),t._v(" "),e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:t.cart.images,alt:t.cart.alt}})]),t._v(" "),e("div",{class:t.b("info")},[e("Rating",{class:t.b("rating"),attrs:{grade:t.cart.stars,maxStars:5}}),t._v(" "),e("div",{class:t.b("statistics")},[e("div",{class:t.b("statistics-number")},[t._v("\n          "+t._s(t.cart.rating)+".0\n        ")]),t._v(" "),e("div",{class:t.b("statistics-review")},[t._v("\n          ("+t._s(t.cart.review)+" отзыва)\n        ")])]),t._v(" "),e("Grains",{class:t.b("grains"),attrs:{grains:t.cart.grains}}),t._v(" "),e("h4",{class:t.b("title-static")},[t._v("\n        Кислинка\n      ")]),t._v(" "),e("Scale",{class:t.b("sourness"),attrs:{scale:t.cart.sourness,maxScale:10}}),t._v(" "),e("h4",{class:t.b("title-static")},[t._v("\n        Горчинка\n      ")]),t._v(" "),e("Scale",{class:t.b("bitterness"),attrs:{scale:t.cart.peppercorn,maxScale:10}}),t._v(" "),e("h4",{class:t.b("title-static")},[t._v("\n        Насыщенность\n      ")]),t._v(" "),e("Scale",{class:t.b("saturation"),attrs:{scale:t.cart.peppercorn,maxScale:10}})],1)]),t._v(" "),e("h3",{class:t.b("title")},[t._v("\n    "+t._s(t.cart.title)+"\n  ")]),t._v(" "),e("div",{class:t.b("subtitle")},[t._v("\n    "+t._s(t.cart.subtitle)+"\n  ")]),t._v(" "),e("div",{class:t.b("wrapper")},[e("div",{class:t.b("prices")},[e("div",{class:t.b("oldprice")},[t._v("\n        "+t._s(t.cart.oldPrice)+" ₽\n      ")]),t._v(" "),e("div",{class:t.b("price")},[t._v("\n        "+t._s(t.cart.price)+" ₽\n      ")])]),t._v(" "),e("button",{class:t.b("button")},[t._v("\n      В корзину\n    ")])]),t._v(" "),e("img",{class:t.b("product-images"),attrs:{src:r(390),alt:"images"}})])}),[],!1,null,"09b18506",null);e.default=component.exports;installComponents(component,{Rating:r(383).default,Grains:r(384).default,Scale:r(385).default})},414:function(t,e,r){"use strict";r(389)},415:function(t,e,r){var n=r(15),o=r(136),c=r(416),d=r(417),l=n(!1),x=o(c),f=o(d);l.push([t.i,".slider-product[data-v-696d1412]{position:relative}.product-swiper.swiper[data-v-696d1412]{width:calc(100% + 20px);margin:-10px;padding:10px}.product-slider[data-v-696d1412]{--slideWidth: 400px;--slideGap: 25px;--slideAmount: 3;width:100%;max-width:calc(var(--slideWidth)*var(--slideAmount) + var(--slideGap)*(var(--slideAmount) - 1));margin:0 auto}@media(max-width: 1152px){.product-slider[data-v-696d1412]{--slideAmount: 2}}@media(max-width: 864px){.product-slider[data-v-696d1412]{--slideAmount: 1}}.product-wrapper[data-v-696d1412]{padding:40px 0;max-width:1240px}.product-slide[data-v-696d1412]{max-width:400px}.product-pagination[data-v-696d1412]{display:none;bottom:-10px}@media(max-width: 1440px){.product-pagination[data-v-696d1412]{display:block}}.product-button-prev[data-v-696d1412],.product-button-next[data-v-696d1412]{--width: 70px;--heigth: 70px;width:var(--width);height:var(--heigth);background-position:center;background-repeat:no-repeat;background-size:cover}.product-button-prev[data-v-696d1412]::after,.product-button-next[data-v-696d1412]::after{display:none}@media(max-width: 1536px){.product-button-prev[data-v-696d1412],.product-button-next[data-v-696d1412]{--width: 50px;--heigth: 50px}}@media(max-width: 1440px){.product-button-prev[data-v-696d1412],.product-button-next[data-v-696d1412]{display:none}}.product-button-prev[data-v-696d1412]{background-image:url("+x+")}.product-button-next[data-v-696d1412]{background-image:url("+f+")}[data-v-696d1412] .swiper-pagination-bullet{width:15px;height:15px;background-color:aqua}[data-v-696d1412] .swiper-pagination-bullet-active{background:red;width:15px;height:15px}",""]),t.exports=l},416:function(t,e,r){t.exports=r.p+"img/prev.1c30ca8.png"},417:function(t,e,r){t.exports=r.p+"img/next.389bb0a.png"},432:function(t,e,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("2faeb395",content,!0,{sourceMap:!1})},437:function(t,e,r){"use strict";r.r(e);var n=r(10),o=(r(44),r(1)),c=r(433),d=r.n(c),l=(r(434),{name:"ProductSlider",computed:{promo:function(){return this.$store.getters["promo-api/getPromo"]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:new d.a(t.$refs.swiper,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:3,spaceBetween:25,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{1152:{slidesPerView:3},864:{slidesPerView:2},320:{slidesPerView:1}}});case 3:case"end":return e.stop()}}),e)})))()},setup:function(){return{prev:Object(o.b)(null),next:Object(o.b)(null)}}}),x=(r(414),r(8)),component=Object(x.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"slider-product"},[e("div",{staticClass:"product-slider"},[e("div",{ref:"swiper",staticClass:"swiper product-swiper"},[e("div",{staticClass:"swiper-wrapper product-wrapper"},t._l(t.promo,(function(t){return e("div",{key:t.id,staticClass:"swiper-slide product-slide"},[e("ProductCart",{attrs:{cart:t}})],1)})),0)]),t._v(" "),e("div",{staticClass:"swiper-pagination product-pagination"})]),t._v(" "),e("div",{ref:"prev",staticClass:"swiper-button-next product-button-next"}),t._v(" "),e("div",{ref:"next",staticClass:"swiper-button-prev product-button-prev"})])}),[],!1,null,"696d1412",null);e.default=component.exports;installComponents(component,{ProductCart:r(402).default})},445:function(t,e,r){"use strict";r(432)},446:function(t,e,r){var n=r(15)(!1);n.push([t.i,".product__inner[data-v-79cab3af]{padding:60px 0 58px}@media(max-width: 576px){.product__inner[data-v-79cab3af]{padding:35px 0}}.product__title[data-v-79cab3af]{margin-left:auto}@media(max-width: 576px){.product__title[data-v-79cab3af]{--max-width: 100%;text-align:center}}.product__text[data-v-79cab3af]{max-width:1110px;margin-left:auto;margin-bottom:47px}@media(max-width: 576px){.product__text[data-v-79cab3af]{text-align:center;font-size:20px}}@media(max-width: 480px){.product__text[data-v-79cab3af]{margin-bottom:20px}}.product__slider[data-v-79cab3af]{margin-bottom:58px}.product__all[data-v-79cab3af]{display:block;font-size:20px;font-weight:500;line-height:1.2;max-width:150px;margin-left:auto;margin-right:10%;text-decoration:underline}",""]),t.exports=n},448:function(t,e,r){"use strict";r.r(e);var n={name:"Product"},o=(r(445),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{class:t.b("title"),attrs:{pxMargin:50,maxWidth:460}},[t._v("\n        Товары со скидкой\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        Наша компания предлагает покупать товар со скидкой не только в дни распродаж\n        или в течение действия ограниченных предложений, но и пользоваться скидками постоянно!\n      ")]),t._v(" "),e("ProductSlider",{class:t.b("slider")}),t._v(" "),e("nuxt-link",{class:t.b("all"),attrs:{to:"/"}},[t._v("\n        Смотреть все\n      ")])],1)])])}),[],!1,null,"79cab3af",null);e.default=component.exports;installComponents(component,{Title:r(364).default,ProductSlider:r(437).default})}}]);