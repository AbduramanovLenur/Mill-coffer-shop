(window.webpackJsonp=window.webpackJsonp||[]).push([[76,47,62],{525:function(t,e,n){var content=n(528);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("42e4be42",content,!0,{sourceMap:!1})},526:function(t,e,n){"use strict";n.r(e);n(67);var o={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},r=(n(527),n(8)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"1fbc93f5",null);e.default=component.exports},527:function(t,e,n){"use strict";n(525)},528:function(t,e,n){var o=n(31)(!1);o.push([t.i,".title[data-v-1fbc93f5]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-1fbc93f5]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-1fbc93f5]{font-size:25px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-1fbc93f5]{text-align:center}}",""]),t.exports=o},532:function(t,e,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("370de4b0",content,!0,{sourceMap:!1})},535:function(t,e,n){t.exports=n.p+"img/cof.4fd12f1.png"},536:function(t,e,n){"use strict";n(532)},537:function(t,e,n){var o=n(31),r=n(196),l=n(538),d=o(!1),f=r(l);d.push([t.i,".mailing[data-v-57f78e90]{position:relative;background-image:url("+f+");background-repeat:no-repeat;background-position:center;background-size:cover}.mailing__inner[data-v-57f78e90]{position:relative;z-index:100;padding:40px 0}.mailing__text[data-v-57f78e90]{max-width:760px;margin-bottom:60px;line-height:1.3}@media(max-width: 1024px){.mailing__text[data-v-57f78e90]{font-size:20px;margin-bottom:40px}}@media(max-width: 540px){.mailing__text[data-v-57f78e90]{text-align:center}}.mailing__form[data-v-57f78e90]{position:relative;max-width:1100px}.mailing__input[data-v-57f78e90]{background-color:#f3f3f3;border-radius:40px;width:100%;height:80px;border:none;padding:24px 60px;margin-bottom:20px}.mailing__input[data-v-57f78e90]::placeholder{color:#c9c9c9}@media(max-width: 800px){.mailing__input[data-v-57f78e90]{font-size:20px;height:55px;padding:10px 30px}}.mailing__button[data-v-57f78e90]{display:block;position:absolute;top:0;right:0;font-weight:700;color:#fff;line-height:1.2;display:flex;justify-content:center;align-items:center;max-width:260px;width:100%;height:80px;background-color:#f9b300;border-radius:40px;padding:25px;transition:.5s}@media(max-width: 800px){.mailing__button[data-v-57f78e90]{font-size:20px;max-width:200px;height:55px}}@media(max-width: 540px){.mailing__button[data-v-57f78e90]{font-size:18px;max-width:150px;padding:0}}.mailing__faq[data-v-57f78e90]{font-size:16px;font-weight:500;line-height:1.3;color:#5b5b5b;max-width:800px}.mailing__faq-link[data-v-57f78e90]{color:#f9b300;font-weight:600;transition:.5s}@media(max-width: 540px){.mailing__faq[data-v-57f78e90]{text-align:center}}.mailing__coffee[data-v-57f78e90]{position:absolute;top:-80px;right:0;max-width:50%}@media(max-width: 1620px){.mailing__coffee[data-v-57f78e90]{top:-10px;max-width:35%}}@media(max-width: 1220px){.mailing__coffee[data-v-57f78e90]{top:0;max-width:27%}}@media(max-width: 1024px){.mailing__coffee[data-v-57f78e90]{display:none}}@media(hover: hover){.mailing__button[data-v-57f78e90]:hover{background-color:var(--hover-color-btn)}.mailing__faq-link[data-v-57f78e90]:hover{color:var(--hover-color-btn)}}",""]),t.exports=d},538:function(t,e,n){t.exports=n.p+"img/bg.f351d12.png"},539:function(t,e,n){"use strict";n.r(e);var o={name:"Mailing"},r=(n(536),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{attrs:{maxWidth:800,pxMargin:50}},[t._v("\n        "+t._s(t.$t("subscribeTitle"))+"\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("subscribeText"))+"\n      ")]),t._v(" "),e("form",{class:t.b("form")},[e("input",{class:t.b("input"),attrs:{type:"text",placeholder:t.$t("emailPlaceholder")}}),t._v(" "),e("button",{class:t.b("button")},[t._v("\n          "+t._s(t.$t("subscribeBtn"))+"\n        ")]),t._v(" "),e("div",{class:t.b("faq")},[t._v("\n          "+t._s(t.$t("subscribeFaq"))+" "),e("a",{class:t.b("faq-link"),attrs:{href:"#"}},[t._v(" "+t._s(t.$t("subscribeFaqLink"))+" ")])])])],1)]),t._v(" "),e("img",{class:t.b("coffee"),attrs:{src:n(535),alt:"coffee"}})])}),[],!1,null,"57f78e90",null);e.default=component.exports;installComponents(component,{Title:n(526).default})},772:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(50),n(306)),l={name:"Vending",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$pinia,o=Object(r.useProductStore)(n),l=[{url:"https://health-eat-top-default-rtdb.firebaseio.com/vending-top.json",name:"vendingCatalog"},{url:"https://health-eat-top-default-rtdb.firebaseio.com/vending-bottom.json",name:"vendingProduct"}],0!==o.vendingCatalog.length){e.next=6;break}return e.next=6,o.fetchData(l[0]);case 6:if(0!==o.vendingProduct.length){e.next=9;break}return e.next=9,o.fetchData(l[1]);case 9:case"end":return e.stop()}}),e)})))()}},d=n(8),component=Object(d.a)(l,(function(){var t=this._self._c;return t("main",{staticClass:"main"},[t("VendingProduct"),this._v(" "),t("Mailing")],1)}),[],!1,null,"7323e6fe",null);e.default=component.exports;installComponents(component,{VendingProduct:n(759).default,Mailing:n(539).default})}}]);