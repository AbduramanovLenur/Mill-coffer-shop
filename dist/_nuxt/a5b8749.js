(window.webpackJsonp=window.webpackJsonp||[]).push([[77,14,15,16,17,21,24,25,45,47,50,54,62],{565:function(t,e,n){var content=n(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("42e4be42",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n.r(e);n(48);var o={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},r=(n(567),n(3)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"1fbc93f5",null);e.default=component.exports},567:function(t,e,n){"use strict";n(565)},568:function(t,e,n){var o=n(15)(!1);o.push([t.i,".title[data-v-1fbc93f5]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-1fbc93f5]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-1fbc93f5]{font-size:25px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-1fbc93f5]{text-align:center}}",""]),t.exports=o},572:function(t,e,n){var content=n(577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("370de4b0",content,!0,{sourceMap:!1})},575:function(t,e,n){t.exports=n.p+"img/cof.4fd12f1.png"},576:function(t,e,n){"use strict";n(572)},577:function(t,e,n){var o=n(15),r=n(200),c=n(578),l=o(!1),d=r(c);l.push([t.i,".mailing[data-v-57f78e90]{position:relative;background-image:url("+d+");background-repeat:no-repeat;background-position:center;background-size:cover}.mailing__inner[data-v-57f78e90]{position:relative;z-index:100;padding:40px 0}.mailing__text[data-v-57f78e90]{max-width:760px;margin-bottom:60px;line-height:1.3}@media(max-width: 1024px){.mailing__text[data-v-57f78e90]{font-size:20px;margin-bottom:40px}}@media(max-width: 540px){.mailing__text[data-v-57f78e90]{text-align:center}}.mailing__form[data-v-57f78e90]{position:relative;max-width:1100px}.mailing__input[data-v-57f78e90]{background-color:#f3f3f3;border-radius:40px;width:100%;height:80px;border:none;padding:24px 60px;margin-bottom:20px}.mailing__input[data-v-57f78e90]::placeholder{color:#c9c9c9}@media(max-width: 800px){.mailing__input[data-v-57f78e90]{font-size:20px;height:55px;padding:10px 30px}}.mailing__button[data-v-57f78e90]{display:block;position:absolute;top:0;right:0;font-weight:700;color:#fff;line-height:1.2;display:flex;justify-content:center;align-items:center;max-width:260px;width:100%;height:80px;background-color:#f9b300;border-radius:40px;padding:25px;transition:.5s}@media(max-width: 800px){.mailing__button[data-v-57f78e90]{font-size:20px;max-width:200px;height:55px}}@media(max-width: 540px){.mailing__button[data-v-57f78e90]{font-size:18px;max-width:150px;padding:0}}.mailing__faq[data-v-57f78e90]{font-size:16px;font-weight:500;line-height:1.3;color:#5b5b5b;max-width:800px}.mailing__faq-link[data-v-57f78e90]{color:#f9b300;font-weight:600;transition:.5s}@media(max-width: 540px){.mailing__faq[data-v-57f78e90]{text-align:center}}.mailing__coffee[data-v-57f78e90]{position:absolute;top:-80px;right:0;max-width:50%}@media(max-width: 1620px){.mailing__coffee[data-v-57f78e90]{top:-10px;max-width:35%}}@media(max-width: 1220px){.mailing__coffee[data-v-57f78e90]{top:0;max-width:27%}}@media(max-width: 1024px){.mailing__coffee[data-v-57f78e90]{display:none}}@media(hover: hover){.mailing__button[data-v-57f78e90]:hover{background-color:var(--hover-color-btn)}.mailing__faq-link[data-v-57f78e90]:hover{color:var(--hover-color-btn)}}",""]),t.exports=l},578:function(t,e,n){t.exports=n.p+"img/bg.f351d12.png"},579:function(t,e,n){"use strict";n.r(e);var o={name:"Mailing"},r=(n(576),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{attrs:{maxWidth:800,pxMargin:50}},[t._v("\n        "+t._s(t.$t("subscribeTitle"))+"\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("subscribeText"))+"\n      ")]),t._v(" "),e("form",{class:t.b("form")},[e("input",{class:t.b("input"),attrs:{type:"text",placeholder:t.$t("emailPlaceholder")}}),t._v(" "),e("button",{class:t.b("button")},[t._v("\n          "+t._s(t.$t("subscribeBtn"))+"\n        ")]),t._v(" "),e("div",{class:t.b("faq")},[t._v("\n          "+t._s(t.$t("subscribeFaq"))+" "),e("a",{class:t.b("faq-link"),attrs:{href:"#"}},[t._v(" "+t._s(t.$t("subscribeFaqLink"))+" ")])])])],1)]),t._v(" "),e("img",{class:t.b("coffee"),attrs:{src:n(575),alt:"coffee"}})])}),[],!1,null,"57f78e90",null);e.default=component.exports;installComponents(component,{Title:n(566).default})},591:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7cc7d50a",content,!0,{sourceMap:!1})},597:function(t,e,n){"use strict";n.r(e);var o={name:"ArticleLinkBtn",props:{textLink:{type:String,default:function(){return"Подробнее"}}}},r=(n(608),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("a",{class:t.b(),attrs:{to:"/"}},[e("div",{class:t.b("text")},[t._v("\n    "+t._s(t.textLink)+"\n  ")]),t._v(" "),e("Icon",{attrs:{name:"gold-arrow"}})],1)}),[],!1,null,"9e328036",null);e.default=component.exports;installComponents(component,{Icon:n(118).default})},608:function(t,e,n){"use strict";n(591)},609:function(t,e,n){var o=n(15)(!1);o.push([t.i,".article-link-btn[data-v-9e328036]{display:flex;align-items:center;gap:10px}.article-link-btn__text[data-v-9e328036]{font-size:20px;font-weight:500;line-height:1.2;color:var(--link-color)}",""]),t.exports=o},617:function(t,e,n){var content=n(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("748380df",content,!0,{sourceMap:!1})},618:function(t,e,n){var content=n(675);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("a7c95e5a",content,!0,{sourceMap:!1})},619:function(t,e,n){var content=n(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("239ca93a",content,!0,{sourceMap:!1})},658:function(t,e,n){t.exports=n.p+"img/cup-grains.2e02a36.png"},659:function(t,e,n){var content=n(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("4c42373c",content,!0,{sourceMap:!1})},660:function(t,e,n){var content=n(717);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("39f1e68e",content,!0,{sourceMap:!1})},661:function(t,e,n){var map={"./catalog-1.png":662,"./catalog-2.png":663,"./catalog-3.png":664,"./catalog-4.png":665};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=661},662:function(t,e,n){t.exports=n.p+"img/catalog-1.02c5a90.png"},663:function(t,e,n){t.exports=n.p+"img/catalog-2.faddc48.png"},664:function(t,e,n){t.exports=n.p+"img/catalog-3.9fdb4d1.png"},665:function(t,e,n){t.exports=n.p+"img/catalog-4.62c8bb7.png"},666:function(t,e,n){"use strict";n(617)},667:function(t,e,n){var o=n(15)(!1);o.push([t.i,".catalog-item[data-v-35ef846a]{display:flex;justify-content:center;align-items:center}.catalog-item__card[data-v-35ef846a]{height:540px;max-width:400px;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#fff;box-shadow:0px 0px 30px rgba(146,146,146,.2);border-radius:20px;padding:65px 36px;cursor:pointer;transition:.5s}@media(max-width: 1200px){.catalog-item__card[data-v-35ef846a]{height:450px;padding:45px 20px}}@media(max-width: 1024px){.catalog-item__card[data-v-35ef846a]{height:540px}}.catalog-item__wrapper[data-v-35ef846a]{display:flex;flex-direction:column;align-items:center}.catalog-item__image[data-v-35ef846a]{width:253px;height:275px;object-fit:contain;margin-bottom:30px}.catalog-item__text[data-v-35ef846a]{font-size:20px;font-weight:700;line-height:1.2;max-width:355px;text-align:center;cursor:pointer}.catalog-item__link[data-v-35ef846a]{display:none;align-items:center;justify-content:center;font-weight:700;line-height:1.2;background-color:var(--color-btn);border-radius:5px;max-width:330px;width:100%;height:60px;color:#fff;cursor:pointer;transition:.5s}@media(max-width: 1024px){.catalog-item__link[data-v-35ef846a]{display:flex;margin-top:50px}}@media(hover: hover){.catalog-item__card[data-v-35ef846a]:hover{-webkit-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);box-shadow:0px 0px 50px 12px rgba(0,0,0,.2)}.catalog-item__card:hover .catalog-item__link[data-v-35ef846a]{display:flex}.catalog-item__card:hover .catalog-item__wrapper[data-v-35ef846a]{margin-top:-135px;margin-bottom:50px}.catalog-item__link[data-v-35ef846a]:hover{background-color:var(--hover-color-btn)}}",""]),t.exports=o},668:function(t,e,n){var content=n(719);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("124904e7",content,!0,{sourceMap:!1})},670:function(t,e,n){var content=n(725);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("60a676fa",content,!0,{sourceMap:!1})},671:function(t,e,n){var content=n(727);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2e4de5d8",content,!0,{sourceMap:!1})},672:function(t,e,n){var content=n(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6f899067",content,!0,{sourceMap:!1})},673:function(t,e,n){t.exports=n.p+"img/article.8ed1a02.jpg"},674:function(t,e,n){"use strict";n(618)},675:function(t,e,n){var o=n(15)(!1);o.push([t.i,".article-item-big[data-v-1b4399b0]{display:flex;background-color:#fff;box-shadow:0px 0px 30px rgba(146,146,146,.2);border-radius:20px;max-width:960px;cursor:pointer}@media(max-width: 480px){.article-item-big[data-v-1b4399b0]{width:100%}}.article-item-big__picture[data-v-1b4399b0]{cursor:pointer}.article-item-big__picture img[data-v-1b4399b0]{border-top-left-radius:20px;border-bottom-left-radius:20px;cursor:pointer;object-fit:cover;height:100%}@media(max-width: 480px){.article-item-big__picture[data-v-1b4399b0]{display:none}}.article-item-big__content[data-v-1b4399b0]{max-width:460px;padding:30px 84px;cursor:pointer}@media(max-width: 768px){.article-item-big__content[data-v-1b4399b0]{padding:30px 50px}}@media(max-width: 480px){.article-item-big__content[data-v-1b4399b0]{max-width:100%;padding:30px}}.article-item-big__title[data-v-1b4399b0]{font-size:25px;font-weight:700;line-height:1.3;margin-bottom:30px;cursor:pointer;max-width:460px}@media(max-width: 960px){.article-item-big__title[data-v-1b4399b0]{font-size:20px}}@media(max-width: 768px){.article-item-big__title[data-v-1b4399b0]{font-size:18px}}.article-item-big__text[data-v-1b4399b0]{font-size:20px;margin-bottom:30px;cursor:pointer;max-width:460px}@media(max-width: 960px){.article-item-big__text[data-v-1b4399b0]{font-size:18px}}@media(max-width: 768px){.article-item-big__text[data-v-1b4399b0]{font-size:16px}}@media(hover: hover){.article-item-big[data-v-1b4399b0]:hover{-webkit-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);box-shadow:0px 0px 50px 12px rgba(0,0,0,.2)}}",""]),t.exports=o},676:function(t,e,n){"use strict";n(619)},677:function(t,e,n){var o=n(15)(!1);o.push([t.i,".article-item-small[data-v-ebabcc5e]{display:flex;flex-direction:column;justify-content:center;background-color:#fff;box-shadow:0px 0px 30px rgba(146,146,146,.2);border-radius:20px;max-width:680px;width:100%;padding:60px 120px;cursor:pointer}@media(max-width: 1024px){.article-item-small[data-v-ebabcc5e]{padding:50px 70px}}@media(max-width: 480px){.article-item-small[data-v-ebabcc5e]{padding:35px}}.article-item-small__title[data-v-ebabcc5e]{font-size:25px;line-height:1.3;margin-bottom:40px;max-width:430px;cursor:pointer}@media(max-width: 768px){.article-item-small__title[data-v-ebabcc5e]{font-size:18px}}.article-item-small__text[data-v-ebabcc5e]{font-size:20px;line-height:1.3;max-width:430px;margin-bottom:50px;cursor:pointer}@media(max-width: 768px){.article-item-small__text[data-v-ebabcc5e]{font-size:16px}}@media(hover: hover){.article-item-small[data-v-ebabcc5e]:hover{-webkit-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);box-shadow:0px 0px 50px 12px rgba(0,0,0,.2)}}",""]),t.exports=o},696:function(t,e,n){"use strict";n.r(e);n(325);var o={name:"CatalogItem",props:{cart:{type:Object,default:function(){}}}},r=(n(666),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("li",{class:t.b(""),attrs:{"data-aos":"flip-left","data-aos-duration":"1000"}},[e("article",{class:t.b("card")},[e("div",{class:t.b("wrapper")},[e("img",{class:t.b("image"),attrs:{src:n(661)("./"+t.cart.img),alt:t.cart.alt,height:"275",width:"255"}}),t._v(" "),e("div",{class:t.b("text")},[t._v("\n        "+t._s(t.cart.title[t.$i18n.locale])+"\n      ")])]),t._v(" "),e("nuxt-link",{class:t.b("link"),attrs:{to:t.cart.link}},[t._v("\n      "+t._s(t.$t("buyBtn"))+"\n    ")])],1)])}),[],!1,null,"35ef846a",null);e.default=component.exports},697:function(t,e,n){"use strict";n.r(e);var o={name:"ArticleItemBig",props:{articleContent:{type:Object,default:function(){}}}},r=(n(674),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.b()},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:n(673),alt:"picture"}})]),t._v(" "),e("div",{class:t.b("content")},[e("h3",{class:t.b("title")},[t._v("\n      "+t._s(t.articleContent.title[t.$i18n.locale])+"\n    ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n      "+t._s(t.articleContent.text[t.$i18n.locale])+"\n    ")]),t._v(" "),e("ArticleLinkBtn")],1)])}),[],!1,null,"1b4399b0",null);e.default=component.exports;installComponents(component,{ArticleLinkBtn:n(597).default})},698:function(t,e,n){"use strict";n.r(e);var o={name:"ArticleItemSmall",props:{articleContent:{type:Object,default:function(){return""}}}},r=(n(676),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.b()},[e("h3",{class:t.b("title")},[t._v("\n    "+t._s(t.articleContent.title[t.$i18n.locale])+"\n  ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n    "+t._s(t.articleContent.text[t.$i18n.locale])+"\n  ")]),t._v(" "),e("ArticleLinkBtn")],1)}),[],!1,null,"ebabcc5e",null);e.default=component.exports;installComponents(component,{ArticleLinkBtn:n(597).default})},714:function(t,e,n){"use strict";n(659)},715:function(t,e,n){var o=n(15)(!1);o.push([t.i,".intro[data-v-02ce0801]{position:relative}.intro__inner[data-v-02ce0801]{position:relative;padding:120px 0 138px}@media(max-width: 1024px){.intro__inner[data-v-02ce0801]{padding:70px 0}}@media(max-width: 864px){.intro__inner[data-v-02ce0801]{display:flex;flex-direction:column;align-items:center;padding:50px 0}}.intro__content[data-v-02ce0801]{max-width:57%}@media(max-width: 864px){.intro__content[data-v-02ce0801]{display:flex;flex-direction:column;align-items:center;max-width:100%}}.intro__title[data-v-02ce0801]{font-size:80px;font-weight:900;line-height:1.25;max-width:960px;margin-bottom:60px}@media(max-width: 1200px){.intro__title[data-v-02ce0801]{font-size:40px}}@media(max-width: 864px){.intro__title[data-v-02ce0801]{margin-bottom:30px}}@media(max-width: 480px){.intro__title[data-v-02ce0801]{font-size:30px;text-align:center}}[data-v-02ce0801] .intro__text{font-weight:500;line-height:1.28;max-width:658px;margin-bottom:90px}[data-v-02ce0801] .intro__text span{font-weight:700}@media(max-width: 1200px){[data-v-02ce0801] .intro__text{max-width:490px}}@media(max-width: 864px){[data-v-02ce0801] .intro__text{margin-bottom:30px;text-align:center}}@media(max-width: 480px){[data-v-02ce0801] .intro__text{font-size:20px}}.intro__picture[data-v-02ce0801]{display:none;max-width:500px;width:100%}@media(max-width: 864px){.intro__picture[data-v-02ce0801]{display:block}}.intro__catalog[data-v-02ce0801]{font-size:30px;font-weight:700;line-height:1.2;color:#fff;display:flex;justify-content:center;align-items:center;background-color:#f9b300;border-radius:5px;max-width:400px;width:100%;height:80px;padding:20px;transition:.5s}@media(max-width: 480px){.intro__catalog[data-v-02ce0801]{font-size:25px}}.intro__cup-grains[data-v-02ce0801]{position:absolute;top:60px;right:100px;width:100%;height:auto;max-width:53.25%}@media(max-width: 1440px){.intro__cup-grains[data-v-02ce0801]{right:0}}@media(max-width: 1200px){.intro__cup-grains[data-v-02ce0801]{top:70px}}@media(max-width: 864px){.intro__cup-grains[data-v-02ce0801]{display:none}}@media(hover: hover){.intro__catalog[data-v-02ce0801]:hover{background-color:var(--hover-color-btn)}}",""]),t.exports=o},716:function(t,e,n){"use strict";n(660)},717:function(t,e,n){var o=n(15)(!1);o.push([t.i,".catalog__inner[data-v-4cb1aef9]{padding:138px 0 30px}@media(max-width: 1024px){.catalog__inner[data-v-4cb1aef9]{padding:30px 0}}.catalog__list[data-v-4cb1aef9]{display:grid;grid-template-columns:repeat(4, 1fr);gap:30px}@media(max-width: 1024px){.catalog__list[data-v-4cb1aef9]{grid-template-columns:repeat(2, 1fr)}}@media(max-width: 576px){.catalog__list[data-v-4cb1aef9]{grid-template-columns:1fr}}",""]),t.exports=o},718:function(t,e,n){"use strict";n(668)},719:function(t,e,n){var o=n(15)(!1);o.push([t.i,".product__inner[data-v-5c5a22b0]{padding:60px 0 58px}@media(max-width: 576px){.product__inner[data-v-5c5a22b0]{padding:35px 0}}.product__title[data-v-5c5a22b0]{margin-left:auto;text-align:right}@media(max-width: 576px){.product__title[data-v-5c5a22b0]{--max-width: 100%;text-align:center}}.product__text[data-v-5c5a22b0]{max-width:1110px;margin-left:auto;margin-bottom:47px;text-align:right}@media(max-width: 576px){.product__text[data-v-5c5a22b0]{text-align:center;font-size:20px}}@media(max-width: 480px){.product__text[data-v-5c5a22b0]{margin-bottom:20px}}.product__slider[data-v-5c5a22b0]{margin-bottom:58px}.product__all[data-v-5c5a22b0]{display:block;font-size:20px;font-weight:500;line-height:1.2;max-width:150px;margin-left:auto;margin-right:10%;text-decoration:underline}",""]),t.exports=o},723:function(t,e,n){t.exports=n.p+"img/cup-grains.0618ef5.png"},724:function(t,e,n){"use strict";n(670)},725:function(t,e,n){var o=n(15)(!1);o.push([t.i,"@media(max-width: 1152px){.benefits[data-v-e7a6c22a]{background-color:#fff7e1}}.benefits__inner[data-v-e7a6c22a]{display:flex;align-items:center;gap:85px;padding:58px 0 143px}@media(max-width: 1440px){.benefits__inner[data-v-e7a6c22a]{gap:40px}}@media(max-width: 1152px){.benefits__inner[data-v-e7a6c22a]{flex-direction:column;gap:30px}}@media(max-width: 1024px){.benefits__inner[data-v-e7a6c22a]{padding:45px 0}}@media(max-width: 1152px){.benefits__box[data-v-e7a6c22a]:first-child{order:2}}.benefits__picture[data-v-e7a6c22a]{padding-top:100px}@media(max-width: 1152px){.benefits__picture[data-v-e7a6c22a]{padding-top:20px}}.benefits__list[data-v-e7a6c22a]{display:flex;flex-direction:column;gap:60px}@media(max-width: 1152px){.benefits__list[data-v-e7a6c22a]{display:grid;grid-template-columns:repeat(2, 1fr)}}@media(max-width: 960px){.benefits__list[data-v-e7a6c22a]{display:flex}}@media(max-width: 576px){.benefits__list[data-v-e7a6c22a]{gap:30px}}.benefits__wrapper[data-v-e7a6c22a]{display:flex;gap:50px}@media(max-width: 576px){.benefits__wrapper[data-v-e7a6c22a]{gap:20px}}@media(max-width: 480px){.benefits__wrapper[data-v-e7a6c22a]{flex-direction:column;align-items:center}}.benefits__content[data-v-e7a6c22a]{max-width:455px}.benefits__content-title[data-v-e7a6c22a]{font-size:30px;font-weight:700;line-height:1.2;margin-bottom:20px}@media(max-width: 768px){.benefits__content-title[data-v-e7a6c22a]{font-size:24px}}@media(max-width: 480px){.benefits__content-title[data-v-e7a6c22a]{text-align:center}}.benefits__content-text[data-v-e7a6c22a]{font-weight:500;line-height:1.28}@media(max-width: 768px){.benefits__content-text[data-v-e7a6c22a]{font-size:20px}}@media(max-width: 480px){.benefits__content-text[data-v-e7a6c22a]{text-align:center}}",""]),t.exports=o},726:function(t,e,n){"use strict";n(671)},727:function(t,e,n){var o=n(15),r=n(200),c=n(728),l=o(!1),d=r(c);l.push([t.i,"@media(max-width: 1152px){.roasting[data-v-a87febcc]{background-image:url("+d+");background-repeat:no-repeat;background-position:center;background-size:cover}}.roasting__inner[data-v-a87febcc]{padding:143px 0 153px}@media(max-width: 864px){.roasting__inner[data-v-a87febcc]{padding:70px 0}}.roasting__text[data-v-a87febcc]{color:#fff;max-width:1246px;margin-bottom:100px}@media(max-width: 768px){.roasting__text[data-v-a87febcc]{font-size:20px;margin-bottom:50px}}.roasting__link[data-v-a87febcc]{display:flex;justify-content:center;align-items:center;border-radius:5px;color:#fff;background-color:var(--color-btn);max-width:400px;width:100%;height:80px;padding:22px;transition:.5s}@media(hover: hover){.roasting__link[data-v-a87febcc]:hover{background-color:var(--hover-color-btn)}}",""]),t.exports=l},728:function(t,e,n){t.exports=n.p+"img/roasting-bg.e9a0dd7.png"},729:function(t,e,n){"use strict";n(672)},730:function(t,e,n){var o=n(15),r=n(200),c=n(731),l=o(!1),d=r(c);l.push([t.i,".article-list[data-v-0d57fc76]{background-image:url("+d+");background-repeat:no-repeat;background-position:center;background-size:cover}.article-list__inner[data-v-0d57fc76]{padding:36px 0 43px}.article-list__top[data-v-0d57fc76]{display:flex;justify-content:space-between;align-items:center;margin-bottom:60px;gap:50px}@media(max-width: 540px){.article-list__top[data-v-0d57fc76]{flex-direction:column;gap:0}}.article-list__read[data-v-0d57fc76]{line-height:1.28;text-decoration:underline;cursor:pointer}.article-list__wrapper[data-v-0d57fc76]{display:flex;justify-content:center;flex-wrap:wrap;gap:20px}",""]),t.exports=l},731:function(t,e,n){t.exports=n.p+"img/bg.c33a2b9.png"},743:function(t,e,n){var content=n(781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("286cc998",content,!0,{sourceMap:!1})},759:function(t,e,n){"use strict";n.r(e);var o={name:"Intro"},r=(n(714),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("div",{class:t.b("content")},[e("h1",{class:t.b("title")},[t._v("\n          "+t._s(t.$t("freshlyTitle"))+"\n        ")]),t._v(" "),e("p",{class:t.b("text"),domProps:{innerHTML:t._s(t.$t("roastedText"))}}),t._v(" "),e("div",{class:t.b("picture")},[e("img",{attrs:{src:n(658),alt:"cup-grains"}})]),t._v(" "),e("nuxt-link",{class:t.b("catalog"),attrs:{to:"/Coffee"}},[t._v("\n          "+t._s(t.$t("catalogBtn"))+"\n        ")])],1),t._v(" "),e("img",{class:t.b("cup-grains"),attrs:{src:n(658),alt:"cup-grains"}})])])])}),[],!1,null,"02ce0801",null);e.default=component.exports},760:function(t,e,n){"use strict";n.r(e);var o={name:"Catalog",data:function(){return{products:[{id:1,title:{ru:"Свежеобжаренный кофе",en:"Freshly roasted coffee"},img:"catalog-1.png",alt:"catalog",link:"Coffee"},{id:2,title:{ru:"Чай и кофейные напитки",en:"Tea and coffee drinks"},img:"catalog-2.png",alt:"catalog",link:"Tea"},{id:3,title:{ru:"Продукция для вендинга",en:"Products for vending"},img:"catalog-3.png",alt:"catalog",link:"Vending"},{id:4,title:{ru:"Здоровое питание",en:"Healthy food"},img:"catalog-4.png",alt:"catalog",link:"Health"}]}}},r=(n(716),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{class:t.b("title"),attrs:{pxMargin:83,maxWidth:670}},[t._v("\n        "+t._s(t.$t("catalogTitle"))+"\n      ")]),t._v(" "),e("ul",{class:t.b("list")},t._l(t.products,(function(t){return e("CatalogItem",{key:t.id,attrs:{cart:t}})})),1)],1)])])}),[],!1,null,"4cb1aef9",null);e.default=component.exports;installComponents(component,{Title:n(566).default,CatalogItem:n(696).default})},761:function(t,e,n){"use strict";n.r(e);var o={name:"Product"},r=(n(718),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{class:t.b("title"),attrs:{pxMargin:50,maxWidth:460}},[t._v("\n        "+t._s(t.$t("saleTitle"))+"\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("saleText"))+"\n      ")]),t._v(" "),e("ProductSlider",{class:t.b("slider")}),t._v(" "),e("nuxt-link",{class:t.b("all"),attrs:{to:"/Coffee"}},[t._v("\n        "+t._s(t.$t("saleBtn"))+"\n      ")])],1)])])}),[],!1,null,"5c5a22b0",null);e.default=component.exports;installComponents(component,{Title:n(566).default,ProductSlider:n(762).default})},764:function(t,e,n){"use strict";n.r(e);var o={name:"Benefits",data:function(){return{benefits:[{id:1,svg:"benefits-1",title:{ru:"Всегда свежая обжарка",en:"Always fresh roasted"},text:{ru:"Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка.",en:"Selection of the degree of roasting for each type of coffee. Always fresh roasted."}},{id:2,svg:"benefits-2",title:{ru:"Лучшие цены на продукцию",en:"The best prices for products"},text:{ru:"Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию.",en:"Due to the large volumes of production, we give the best prices for our products."}},{id:3,svg:"benefits-3",title:{ru:"Консультации 24/7",en:"Consultations 24/7"},text:{ru:"Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции.",en:"Our specialists are always ready to help and advise you with the choice of coffee or other products."}}]}}},r=(n(724),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture"),attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:n(723),alt:"cup-grains"}})])]),t._v(" "),e("div",{class:t.b("box")},[e("Title",{class:t.b("title"),attrs:{pxMargin:80,maxWidth:585}},[t._v("\n          "+t._s(t.$t("working"))+"\n        ")]),t._v(" "),e("ul",{class:t.b("list")},t._l(t.benefits,(function(n){return e("li",{key:n.id,class:t.b("item"),attrs:{"data-aos":"flip-up","data-aos-duration":"1000"}},[e("div",{class:t.b("wrapper")},[e("div",{class:t.b("icon")},[e("Icon",{attrs:{name:n.svg}})],1),t._v(" "),e("div",{class:t.b("content")},[e("h3",{class:t.b("content-title")},[t._v("\n                  "+t._s(n.title[t.$i18n.locale])+"\n                ")]),t._v(" "),e("div",{class:t.b("content-text")},[t._v("\n                  "+t._s(n.text[t.$i18n.locale])+"\n                ")])])])])})),0)],1)])]),t._v(" "),e("div",{class:t.b("bg")})])}),[],!1,null,"e7a6c22a",null);e.default=component.exports;installComponents(component,{Title:n(566).default,Icon:n(118).default})},765:function(t,e,n){"use strict";n.r(e);var o={name:"Roasting"},r=(n(726),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{class:t.b("title"),attrs:{pxMargin:100,maxWidth:740,fzColor:"fff"}},[t._v("\n        "+t._s(t.$t("roastingTitle"))+"\n      ")]),t._v(" "),e("p",{class:t.b("text"),domProps:{innerHTML:t._s(t.$t("roastingText"))}}),t._v(" "),e("nuxt-link",{class:t.b("link"),attrs:{to:"/Blog"}},[t._v("\n        "+t._s(t.$t("goCatalogBtn"))+"\n      ")])],1)])])}),[],!1,null,"a87febcc",null);e.default=component.exports;installComponents(component,{Title:n(566).default})},766:function(t,e,n){"use strict";n.r(e);n(19),n(14),n(25),n(6),n(30),n(21),n(31);var o=n(8),r=n(9),c=n(324);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"ArticleList",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.e)(c.useProductStore,["article"]))},x=d,f=(n(729),n(3)),component=Object(f.a)(x,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("div",{class:t.b("top")},[e("Title",{attrs:{maxWidth:450}},[t._v("\n          "+t._s(t.$t("companyNews"))+"\n        ")]),t._v(" "),e("nuxt-link",{class:t.b("read"),attrs:{to:"/Blog"}},[t._v("\n          "+t._s(t.$t("readAll"))+"\n        ")])],1),t._v(" "),e("div",{class:t.b("wrapper")},[e("ArticleItemBig",{attrs:{articleContent:t.article.news1,"data-aos":"flip-left","data-aos-duration":"1000"}}),t._v(" "),e("ArticleItemSmall",{attrs:{articleContent:t.article.news2,"data-aos":"flip-left","data-aos-duration":"1000"}}),t._v(" "),e("ArticleItemSmall",{attrs:{articleContent:t.article.news2,"data-aos":"flip-left","data-aos-duration":"1000"}}),t._v(" "),e("ArticleItemBig",{attrs:{articleContent:t.article.news1,"data-aos":"flip-left","data-aos-duration":"1000"}})],1)])])])}),[],!1,null,"0d57fc76",null);e.default=component.exports;installComponents(component,{Title:n(566).default,ArticleItemBig:n(697).default,ArticleItemSmall:n(698).default})},780:function(t,e,n){"use strict";n(743)},781:function(t,e,n){var o=n(15),r=n(200),c=n(782),l=o(!1),d=r(c);l.push([t.i,".background-group{background-image:url("+d+");background-repeat:no-repeat;background-position:center;background-size:cover}@media(max-width: 1152px){.background-group{background-image:none}}",""]),t.exports=l},782:function(t,e,n){t.exports=n.p+"img/background.c1274ec.png"},809:function(t,e,n){"use strict";n.r(e);var o=n(7),r=(n(46),n(19),n(324)),c={name:"IndexPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$pinia,o=Object(r.useProductStore)(n),c=[{url:"https://mill-cart-promotion-default-rtdb.firebaseio.com/promo.json",name:"promo"},{url:"https://news-content-6b2d0-default-rtdb.firebaseio.com/news.json",name:"article"}],0!==o.promo.length){e.next=6;break}return e.next=6,o.fetchData(c[0]);case 6:if(0!==Object.keys(o.article).length){e.next=9;break}return e.next=9,o.fetchData(c[1]);case 9:case"end":return e.stop()}}),e)})))()}},l=(n(780),n(3)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"main main-bg"},[e("Intro"),t._v(" "),e("Catalog"),t._v(" "),e("Product"),t._v(" "),e("div",{staticClass:"background-group"},[e("Benefits"),t._v(" "),e("Roasting")],1),t._v(" "),e("ArticleList"),t._v(" "),e("Mailing")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Intro:n(759).default,Catalog:n(760).default,Product:n(761).default,Benefits:n(764).default,Roasting:n(765).default,ArticleList:n(766).default,Mailing:n(579).default})}}]);