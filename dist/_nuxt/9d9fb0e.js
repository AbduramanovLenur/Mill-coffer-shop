(window.webpackJsonp=window.webpackJsonp||[]).push([[19,35,36],{426:function(t,e,n){var content=n(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4e2aa311",content,!0,{sourceMap:!1})},437:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2bbe6cd4",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";n(426)},445:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.text--mb-40[data-v-27d89b9c]{margin-bottom:40px}.text--mb-85[data-v-27d89b9c]{margin-bottom:85px}.tabs-news-content__box[data-v-27d89b9c]{display:flex;box-shadow:0px 0px 30px rgba(146,146,146,.2);border-radius:20px}.tabs-news-content__picture img[data-v-27d89b9c]{border-radius:20px 0px 0px 20px;height:100%;object-fit:cover}.tabs-news-content__wrapper[data-v-27d89b9c]{padding:40px 140px 50px 70px;width:100%}.tabs-news-content__title[data-v-27d89b9c]{font-size:25px;font-weight:700;line-height:1.3;margin-bottom:60px;max-width:800px}.tabs-news-content__text[data-v-27d89b9c]{font-size:20px;line-height:1.3;max-width:830px}.tabs-news-content__inner[data-v-27d89b9c]{display:flex;justify-content:space-between}.tabs-news-content__author[data-v-27d89b9c]{font-size:20px;font-weight:700;line-height:1.3}.tabs-news-content__button[data-v-27d89b9c]{position:relative;display:flex;align-items:center;gap:10px}.tabs-news-content__button[data-v-27d89b9c]::after{content:"";position:absolute;bottom:0;left:50%;width:0%;height:2px;background:var(--hover-color-btn);transition:.4s ease-out}.tabs-news-content__more[data-v-27d89b9c]{font-size:20px;color:#f9b300}@media(hover: hover){.tabs-news-content__button[data-v-27d89b9c]:hover::after{left:0;width:100%}}',""]),t.exports=o},456:function(t,e,n){"use strict";n.r(e);var o={name:"TabsNewsContent",props:{news:{type:Object,default:function(){}}}},c=(n(444),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("li",{class:t.b(""),attrs:{"data-aos":"fade-left","data-aos-duration":"1000"}},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:t.news.images,alt:t.news.alt}})]),t._v(" "),e("div",{class:t.b("wrapper")},[e("h2",{class:t.b("title")},[t._v("\n        "+t._s(t.news.title[t.$i18n.locale])+"\n      ")]),t._v(" "),e("p",{class:t.b("text text--mb-40")},[t._v("\n        "+t._s(t.news.text1[t.$i18n.locale])+"\n      ")]),t._v(" "),e("p",{class:t.b("text text--mb-85")},[t._v("\n        "+t._s(t.news.text2[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{class:t.b("inner")},[e("div",{class:t.b("author")},[t._v("\n          "+t._s(t.$t("author"))+" "+t._s(t.news.author[t.$i18n.locale])+"\n        ")]),t._v(" "),e("nuxt-link",{class:t.b("button"),attrs:{to:"/"}},[e("div",{class:t.b("more")},[t._v("\n            "+t._s(t.$t("moreText"))+"\n          ")]),t._v(" "),e("Icon",{attrs:{name:"arrow-gold"}})],1)],1)])])])}),[],!1,null,"27d89b9c",null);e.default=component.exports;installComponents(component,{Icon:n(162).default})},462:function(t,e,n){t.exports=n.p+"img/empty.02532b0.png"},463:function(t,e,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("ba030280",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(437)},465:function(t,e,n){var o=n(22)(!1);o.push([t.i,".tabs-news[data-v-5f1132e8]{display:flex;flex-direction:column;gap:50px}",""]),t.exports=o},495:function(t,e,n){"use strict";n.r(e);var o={name:"TabsNews",computed:{tabNews:function(){return this.$store.getters["api/getTabNews"]}}},c=(n(464),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},t._l(t.tabNews,(function(t){return e("TabsNewsContent",{key:t.id,attrs:{news:t}})})),1)}),[],!1,null,"5f1132e8",null);e.default=component.exports;installComponents(component,{TabsNewsContent:n(456).default})},505:function(t,e,n){"use strict";n(463)},506:function(t,e,n){var o=n(22)(!1);o.push([t.i,".content-news__box[data-v-37b8ead3]{display:flex;flex-direction:column;align-items:center;padding:50px 0}.content-news__picture[data-v-37b8ead3]{max-width:500px;width:100%;margin-bottom:70px}.content-news__picture img[data-v-37b8ead3]{width:100%}.content-news__text[data-v-37b8ead3]{font-size:45px}",""]),t.exports=o},538:function(t,e,n){"use strict";n.r(e);var o={name:"ContentNews",props:{isActiveTab:{type:String,default:function(){return""}}},methods:{getIsActive:function(t){return this.isActiveTab===t}}},c=(n(505),n(12)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("first-tag-tab"),expression:"getIsActive('first-tag-tab')"}],class:t.b("item")},[e("TabsNews")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("two-tag-tab"),expression:"getIsActive('two-tag-tab')"}],class:t.b("item")},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:n(462),alt:"picture"}})]),t._v(" "),e("div",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("emptyNews"))+"\n      ")])])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("three-tag-tab"),expression:"getIsActive('three-tag-tab')"}],class:t.b("item")},[e("TabsNews")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("four-tag-tab"),expression:"getIsActive('four-tag-tab')"}],class:t.b("item")},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:n(462),alt:"picture"}})]),t._v(" "),e("div",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("emptyNews"))+"\n      ")])])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("five-tag-tab"),expression:"getIsActive('five-tag-tab')"}],class:t.b("item")},[e("TabsNews")],1)])}),[],!1,null,"37b8ead3",null);e.default=component.exports;installComponents(component,{TabsNews:n(495).default})}}]);