(window.webpackJsonp=window.webpackJsonp||[]).push([[7,21,22,39,51,54,61],{523:function(t,e,r){var content=r(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("480ec79a",content,!0,{sourceMap:!1})},524:function(t,e,r){var content=r(533);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("bdc5e8a8",content,!0,{sourceMap:!1})},530:function(t,e,r){"use strict";r(523)},531:function(t,e,r){var n=r(33)(!1);n.push([t.i,'.breadcrumb__list[data-v-3d84ce2a]{display:flex;align-items:center;margin-bottom:var(--px-margin)}@media(max-width: 768px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 40px !important}}@media(max-width: 480px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 25px !important}}@media(max-width: 360px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 15px !important}}.breadcrumb__item[data-v-3d84ce2a]{display:flex;align-items:center}@media(max-width: 480px){.breadcrumb__item[data-v-3d84ce2a]:not(:last-child){display:none}}.breadcrumb__item[data-v-3d84ce2a]:not(:last-child):after{content:">";font-size:18px;font-weight:500;color:var(--color);margin-right:5px;margin-left:5px}.breadcrumb__link[data-v-3d84ce2a]{font-size:18px;font-weight:500;color:var(--color)}',""]),t.exports=n},532:function(t,e,r){"use strict";r(524)},533:function(t,e,r){var n=r(33)(!1);n.push([t.i,".rating[data-v-a7f54a38]{display:flex;max-width:133px}",""]),t.exports=n},536:function(t,e,r){"use strict";r.r(e);r(305),r(66);var n={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:function(){return[]}},pxMargin:{type:Number,default:function(){return 0}},color:{type:String,default:function(){return""}}},computed:{cssVars:function(){return{"--px-margin":"".concat(this.pxMargin,"px"),"--color":"#".concat(this.color)}}}},c=(r(530),r(10)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("list"),style:t.cssVars},t._l(t.breadcrumbs,(function(r){return e("li",{key:r.id,class:t.b("item")},[e("nuxt-link",{class:t.b("link"),attrs:{to:r.link}},[t._v("\n      "+t._s(r.text[t.$i18n.locale])+"\n    ")])],1)})),0)}),[],!1,null,"3d84ce2a",null);e.default=component.exports},537:function(t,e,r){"use strict";r.r(e);r(66);var n={name:"Rating",props:{maxStars:{type:Number,default:function(){return 0}},grade:{type:Number,default:function(){return 0}}}},c=(r(532),r(10)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[t._l(t.grade,(function(r){return e("li",{key:"grade"+r,class:t.b("star")},[e("Icon",{attrs:{name:"star"}})],1)})),t._v(" "),t._l(t.maxStars-t.grade,(function(r){return e("li",{key:"maxStars"+r,class:t.b("empty-star")},[e("Icon",{attrs:{name:"empty-star"}})],1)}))],2)}),[],!1,null,"a7f54a38",null);e.default=component.exports;installComponents(component,{Icon:r(195).default})},541:function(t,e,r){var content=r(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("2862c5b0",content,!0,{sourceMap:!1})},542:function(t,e,r){var content=r(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("787825e2",content,!0,{sourceMap:!1})},543:function(t,e,r){var content=r(573);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("4e5071b2",content,!0,{sourceMap:!1})},568:function(t,e,r){"use strict";r(541)},569:function(t,e,r){var n=r(33)(!1);n.push([t.i,".title-pages[data-v-0f6ba8ce]{font-size:70px;font-weight:900;line-height:1.24;color:#fff;margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 768px){.title-pages[data-v-0f6ba8ce]{font-size:50px;--px-margin: 80px !important}}@media(max-width: 600px){.title-pages[data-v-0f6ba8ce]{--px-margin: 50px !important}}@media(max-width: 480px){.title-pages[data-v-0f6ba8ce]{--px-margin: 30px !important;font-size:30px}}",""]),t.exports=n},570:function(t,e,r){"use strict";r(542)},571:function(t,e,r){var n=r(33)(!1);n.push([t.i,".sort[data-v-708ea94c]{margin-bottom:70px}@media(max-width: 1024px){.sort[data-v-708ea94c]{margin-bottom:30px}}.sort__filter-text[data-v-708ea94c]{font-size:20px;font-weight:500;line-height:1.15;margin-bottom:20px}.sort__select[data-v-708ea94c]{font-size:18px;font-weight:500;line-height:1.16;padding:20px 30px;width:260px;height:60px;background-color:#fff;color:#f9b300;box-shadow:0px 0px 20px rgba(103,103,103,.25);border-radius:5px;border:none}",""]),t.exports=n},572:function(t,e,r){"use strict";r(543)},573:function(t,e,r){var n=r(33)(!1);n.push([t.i,"@media(max-width: 576px){.cart[data-v-5ec23ae5]{display:flex;justify-content:center}}.cart__box[data-v-5ec23ae5]{border:1px solid #e4e4e4;background-color:#fff;box-shadow:0px 0px 30px rgba(149,149,149,.25);border-radius:20px;transition:.5s;max-width:400px;width:100%;padding:30px 40px 50px}@media(max-width: 1536px){.cart__box[data-v-5ec23ae5]{padding:30px 15px 50px}}.cart__content[data-v-5ec23ae5]{display:flex;justify-content:space-between;margin-bottom:35px;gap:10px}@media(max-width: 640px){.cart__content[data-v-5ec23ae5]{margin-bottom:20px}}.cart__rating[data-v-5ec23ae5]{margin-bottom:12px}.cart__statistics[data-v-5ec23ae5]{display:flex;align-items:center;gap:7px}.cart__statistics-number[data-v-5ec23ae5]{font-size:20px;font-weight:700;line-height:1.2;color:#222}.cart__statistics-review[data-v-5ec23ae5]{font-size:14px;font-weight:50;line-height:1.14;color:#5b5b5b}.cart__gram[data-v-5ec23ae5]{font-size:18px;font-weight:500;line-height:1.16;display:flex;justify-content:center;align-items:center;background-color:#fff7e1;border:1px solid #f9b300;border-radius:5px;max-width:132px;width:100%;height:33px;margin-left:auto}.cart__pictures[data-v-5ec23ae5]{display:flex;justify-content:center;align-items:center;margin-bottom:35px}@media(max-width: 640px){.cart__pictures[data-v-5ec23ae5]{margin-bottom:20px}}.cart__title[data-v-5ec23ae5]{font-size:25px;font-weight:900;line-height:1.24;max-width:270px;margin-bottom:30px}@media(max-width: 1024px){.cart__title[data-v-5ec23ae5]{margin-bottom:15px}}@media(max-width: 960px){.cart__title[data-v-5ec23ae5]{text-align:center;margin:0 auto 15px}}@media(max-width: 640px){.cart__title[data-v-5ec23ae5]{font-size:20px;margin-bottom:10px}}.cart__subtitle[data-v-5ec23ae5]{font-size:18px;font-weight:500;line-height:1.16;max-width:210px;margin-bottom:30px}@media(max-width: 1024px){.cart__subtitle[data-v-5ec23ae5]{margin-bottom:20px}}@media(max-width: 960px){.cart__subtitle[data-v-5ec23ae5]{margin:0 auto 20px;text-align:center}}.cart__wrapper[data-v-5ec23ae5]{display:flex;align-items:center;justify-content:space-between;gap:10px}@media(max-width: 960px){.cart__wrapper[data-v-5ec23ae5]{flex-direction:column}}.cart__price[data-v-5ec23ae5]{font-size:35px;font-weight:900;line-height:1.25;color:#222}@media(max-width: 1024px){.cart__price[data-v-5ec23ae5]{font-size:30px}}.cart__button[data-v-5ec23ae5]{font-size:18px;font-weight:700;line-height:1.2;display:flex;justify-content:center;align-items:center;background-color:var(--color-btn);border-radius:5px;max-width:178px;width:100%;height:48px;padding:13px;color:#fff;transition:.5s}.cart__button.isActive[data-v-5ec23ae5]{opacity:.5}@media(hover: hover){.cart__box[data-v-5ec23ae5]:hover{-webkit-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2) !important;-moz-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2) !important;box-shadow:0px 0px 50px 12px rgba(0,0,0,.2) !important}.cart__button[data-v-5ec23ae5]:hover{background-color:var(--hover-color-btn) !important}}",""]),t.exports=n},574:function(t,e,r){"use strict";r.r(e);var n=r(75),c=(r(306),function(t,e,r){var c=Object(n.a)(e);switch(t.target.value){case r[0]:c=Object(n.a)(e);break;case r[1]:c.sort((function(a,b){return a.price-b.price}));break;case r[2]:c.sort((function(a,b){return b.price-a.price}));break;case r[3]:c.sort((function(a,b){return a.rating-b.rating}))}return c}),o={name:"Sort",props:{product:{type:Array,default:function(){return[]}}},data:function(){return{option:[{id:1,text:{ru:"Все",en:"All"},value:"all"},{id:2,text:{ru:"По возрастанию цены",en:"Price Ascending"},value:"lowPrice"},{id:3,text:{ru:"По убыванию цены",en:"Price Descending"},value:"highPrice"},{id:4,text:{ru:"По рейтингу",en:"By rating"},value:"rating"}],sortTexts:["all","lowPrice","highPrice","rating"]}},methods:{sortArray:function(t){this.$emit("sorted",c(t,this.product,this.sortTexts))}}},l=(r(570),r(10)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("div",{class:t.b("filter-text")},[t._v(t._s(t.$t("sortTitle")))]),t._v(" "),e("select",{class:t.b("select"),on:{change:function(e){return t.sortArray(e)}}},t._l(t.option,(function(r){return e("option",{key:r.id,class:t.b("option"),domProps:{value:r.value}},[t._v(" "+t._s(r.text[t.$i18n.locale])+" ")])})),0)])}),[],!1,null,"708ea94c",null);e.default=component.exports},578:function(t,e,r){"use strict";r.r(e);r(66);var n={name:"TitlePages",props:{pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},c=(r(568),r(10)),component=Object(c.a)(n,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(""),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"0f6ba8ce",null);e.default=component.exports},579:function(t,e,r){"use strict";r.r(e);r(21),r(15),r(30),r(5),r(39),r(22),r(40);var n=r(11),c=r(13),o=r(156);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"Cart",props:{cart:{type:Object,default:function(){}}},data:function(){return{unit:{ru:"г.",en:"g."}}},methods:d(d({},Object(c.d)(o.useBasketStore,["addCartToBasket"])),{},{multyFunction:function(element){this.addCartToBasket(element)}})},f=(r(572),r(10)),component=Object(f.a)(x,(function(){var t=this,e=t._self._c;return e("li",{class:t.b(""),attrs:{"data-aos":"flip-left","data-aos-duration":"1000"}},[e("article",{class:t.b("box")},[e("div",{class:t.b("content")},[e("div",{staticClass:"b('info')"},[e("Rating",{class:t.b("rating"),attrs:{grade:t.cart.rating,maxStars:5}}),t._v(" "),e("div",{class:t.b("statistics")},[e("div",{class:t.b("statistics-number")},[t._v("\n            "+t._s(t.cart.rating)+".0\n          ")]),t._v(" "),e("div",{class:t.b("statistics-review")},[t._v("\n            ("+t._s(t.cart.review)+" "+t._s(t.$t("reviewText"))+")\n          ")])])],1),t._v(" "),e("div",{class:t.b("gram")},[t._v("\n        "+t._s(t.cart.gram)+" "+t._s(t.unit[t.$i18n.locale])+"\n      ")])]),t._v(" "),e("div",{class:t.b("pictures")},[e("img",{attrs:{src:t.cart.images,alt:t.cart.alt}})]),t._v(" "),e("h3",{class:t.b("title")},[t._v("\n      "+t._s(t.cart.title[t.$i18n.locale])+"\n    ")]),t._v(" "),e("div",{class:t.b("subtitle")},[t._v("\n      "+t._s(t.cart.subtitle[t.$i18n.locale])+"\n    ")]),t._v(" "),e("div",{class:t.b("wrapper")},[e("div",{class:t.b("price")},[t._v("\n        "+t._s(t.cart.price)+" ₽\n      ")]),t._v(" "),e("button",{class:{cart__button:t.b("button"),"cart-button":"cart-button",isActive:t.cart.isBasketActive},attrs:{disabled:t.cart.isBasketActive},on:{click:function(e){return t.multyFunction(t.cart)}}},[t._v("\n        "+t._s(t.$t("toBasket"))+"\n      ")])])])])}),[],!1,null,"5ec23ae5",null);e.default=component.exports;installComponents(component,{Rating:r(537).default})},625:function(t,e,r){var content=r(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("5fe8020f",content,!0,{sourceMap:!1})},679:function(t,e,r){"use strict";r(625)},680:function(t,e,r){var n=r(33)(!1);n.push([t.i,".health-catalog-cart__link[data-v-6a22bd4c]{display:flex;align-items:center;justify-content:center;gap:20px;background-color:#fff;box-shadow:0px 0px 30px rgba(149,149,149,.25);border-radius:20px;padding:20px;transition:.5s;max-width:540px;width:100%;height:100%}@media(max-width: 768px){.health-catalog-cart__link[data-v-6a22bd4c]{padding:15px}}.health-catalog-cart__picture[data-v-6a22bd4c]{height:100%}.health-catalog-cart__picture img[data-v-6a22bd4c]{height:100%;object-fit:cover}.health-catalog-cart__title[data-v-6a22bd4c]{font-size:25px;font-weight:700;line-height:1.2;max-width:240px}@media(max-width: 1350px){.health-catalog-cart__title[data-v-6a22bd4c]{font-size:20px}}@media(max-width: 768px){.health-catalog-cart__title[data-v-6a22bd4c]{font-size:17px}}@media(hover: hover){.health-catalog-cart__link[data-v-6a22bd4c]:hover{-webkit-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);box-shadow:0px 0px 50px 12px rgba(0,0,0,.2)}}",""]),t.exports=n},713:function(t,e,r){"use strict";r.r(e);var n={name:"HealthCatalogCart",props:{catalog:{type:Object,default:function(){}}}},c=(r(679),r(10)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("li",{class:t.b("")},[e("nuxt-link",{class:t.b("link"),attrs:{to:"Health"}},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:t.catalog.images,alt:t.catalog.alt}})]),t._v(" "),e("div",{class:t.b("title")},[t._v("\n      "+t._s(t.catalog.title[t.$i18n.locale])+"\n    ")])])],1)}),[],!1,null,"6a22bd4c",null);e.default=component.exports},742:function(t,e,r){"use strict";r.r(e);r(21),r(15),r(30),r(5),r(39),r(22),r(40);var n=r(11),c=r(75),o=r(13),l=r(304);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var x={name:"HealthProduct",data:function(){return{breadcrumb:[{id:1,text:{ru:"Главная",en:"Home"},link:"/"},{id:2,text:{ru:"Каталог товаров",en:"Catalog"},link:"Catalog"},{id:3,text:{ru:"Здоровое питание",en:"Healthy eating"},link:"Health"}],productArray:[]}},methods:{sortArray:function(t){this.productArray=Object(c.a)(t)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.e)(l.useProductStore,["healthCatalog","healthProduct"])),mounted:function(){this.productArray=Object(c.a)(this.healthProduct)}},f=x,m=r(10),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"decor--bg",class:t.b("")},[e("div",{staticClass:"overlay"},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner catalog-block--padding")},[e("Breadcrumb",{attrs:{breadcrumbs:t.breadcrumb,pxMargin:90,color:"fff"}}),t._v(" "),e("TitlePages",{attrs:{pxMargin:80,maxWidth:650}},[t._v("\n          "+t._s(t.$t("healthTitle"))+"\n        ")]),t._v(" "),e("ul",{class:t.b("catalog grid-catalog grid-catalog--three")},t._l(t.healthCatalog,(function(t){return e("HealthCatalogCart",{key:t.id,attrs:{catalog:t}})})),1),t._v(" "),e("Sort",{attrs:{product:t.healthProduct},on:{sorted:t.sortArray}}),t._v(" "),e("transition-group",{class:t.b("list grid--four"),attrs:{name:"product",tag:"ul"}},t._l(t.productArray,(function(t){return e("Cart",{key:t.id,attrs:{cart:t}})})),1)],1)])])])}),[],!1,null,"88729ecc",null);e.default=component.exports;installComponents(component,{Breadcrumb:r(536).default,TitlePages:r(578).default,HealthCatalogCart:r(713).default,Sort:r(574).default,Cart:r(579).default})}}]);