(window.webpackJsonp=window.webpackJsonp||[]).push([[42,25,49,50,51],{469:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("00e4a7b8",content,!0,{sourceMap:!1})},475:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("27766ced",content,!0,{sourceMap:!1})},476:function(t,e,n){var content=n(499);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("2bbe6cd4",content,!0,{sourceMap:!1})},482:function(t,e,n){"use strict";n(469)},483:function(t,e,n){var d=n(23)(!1);d.push([t.i,'.tabs-news-content__box[data-v-120c641d]{display:flex;box-shadow:0px 0px 30px rgba(146,146,146,.2);border-radius:20px}@media(max-width: 640px){.tabs-news-content__box[data-v-120c641d]{flex-direction:column}}.tabs-news-content__picture img[data-v-120c641d]{border-radius:20px 0px 0px 20px;height:100%;object-fit:cover}@media(max-width: 640px){.tabs-news-content__picture img[data-v-120c641d]{width:100%;height:280px;border-radius:20px 20px 0px 0px}}.tabs-news-content__wrapper[data-v-120c641d]{padding:40px 140px 50px 70px;width:100%}@media(max-width: 800px){.tabs-news-content__wrapper[data-v-120c641d]{padding:40px}}@media(max-width: 480px){.tabs-news-content__wrapper[data-v-120c641d]{padding:30px}}.tabs-news-content__title[data-v-120c641d]{font-size:25px;font-weight:700;line-height:1.3;margin-bottom:60px;max-width:800px}@media(max-width: 800px){.tabs-news-content__title[data-v-120c641d]{font-size:20px;margin-bottom:30px}}.tabs-news-content__text[data-v-120c641d]{font-size:20px;line-height:1.3;max-width:830px}@media(max-width: 800px){.tabs-news-content__text[data-v-120c641d]{font-size:18px}}.tabs-news-content__text.text--mb-40[data-v-120c641d]{margin-bottom:30px}@media(max-width: 480px){.tabs-news-content__text.text--mb-40[data-v-120c641d]{margin-bottom:20px}}.tabs-news-content__text.text--mb-85[data-v-120c641d]{margin-bottom:85px}@media(max-width: 800px){.tabs-news-content__text.text--mb-85[data-v-120c641d]{margin-bottom:40px}}@media(max-width: 480px){.tabs-news-content__text.text--mb-85[data-v-120c641d]{margin-bottom:30px}}.tabs-news-content__inner[data-v-120c641d]{display:flex;justify-content:space-between;gap:15px}@media(max-width: 480px){.tabs-news-content__inner[data-v-120c641d]{flex-direction:column}}.tabs-news-content__author[data-v-120c641d]{font-size:20px;font-weight:700;line-height:1.3}@media(max-width: 800px){.tabs-news-content__author[data-v-120c641d]{font-size:18px}}.tabs-news-content__button[data-v-120c641d]{position:relative;display:flex;align-items:center;gap:10px}.tabs-news-content__button[data-v-120c641d]::after{content:"";position:absolute;bottom:0;left:50%;width:0%;height:2px;background:var(--hover-color-btn);transition:.4s ease-out}.tabs-news-content__more[data-v-120c641d]{font-size:20px;color:#f9b300}@media(max-width: 800px){.tabs-news-content__more[data-v-120c641d]{font-size:18px}}@media(hover: hover){.tabs-news-content__button[data-v-120c641d]:hover::after{left:0;width:100%}}',""]),t.exports=d},486:function(t,e,n){t.exports=n.p+"img/empty.02532b0.png"},487:function(t,e,n){var content=n(517);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("7493934a",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n.r(e);n(68);var d={name:"Tabs",props:{tab:{type:Array,default:function(){return[]}},grid2:{type:Boolean,default:function(){return!1}},grid3:{type:Boolean,default:function(){return!1}},grid5:{type:Boolean,default:function(){return!1}},maxWidth:{type:Number,default:function(){return 0}},pxMargin:{type:Number,default:function(){return 0}}},methods:{setIsActiveTab:function(t){this.$emit("setIsActiveTab",t)}},computed:{cssVars:function(){return{"--px-margin":"".concat(this.pxMargin,"px"),"--maxWidth":"".concat(this.maxWidth,"px")}}}},o=(n(496),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("ul",{class:{tabs:t.b(""),"grid--3":t.grid3,"grid--5":t.grid5,grid2:t.grid2},style:t.cssVars},t._l(t.tab,(function(n){return e("li",{key:n.id,class:t.b("item")},[e("div",{class:{tabs__button:t.b("button"),isActive:n.isActive},on:{click:function(e){return t.setIsActiveTab(n.buttonName)}}},[t._v("\n      "+t._s(n.text[t.$i18n.locale])+"\n    ")])])})),0)}),[],!1,null,"40fb47de",null);e.default=component.exports},495:function(t,e,n){"use strict";n.r(e);var d={name:"TabsNewsContent",props:{news:{type:Object,default:function(){}}}},o=(n(482),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("li",{class:t.b(""),attrs:{"data-aos":"fade-left","data-aos-duration":"1000"}},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:t.news.images,alt:t.news.alt}})]),t._v(" "),e("div",{class:t.b("wrapper")},[e("h2",{class:t.b("title")},[t._v("\n        "+t._s(t.news.title[t.$i18n.locale])+"\n      ")]),t._v(" "),e("p",{class:t.b("text text--mb-40")},[t._v("\n        "+t._s(t.news.text1[t.$i18n.locale])+"\n      ")]),t._v(" "),e("p",{class:t.b("text text--mb-85")},[t._v("\n        "+t._s(t.news.text2[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{class:t.b("inner")},[e("div",{class:t.b("author")},[t._v("\n          "+t._s(t.$t("author"))+" "+t._s(t.news.author[t.$i18n.locale])+"\n        ")]),t._v(" "),e("nuxt-link",{class:t.b("button"),attrs:{to:"/"}},[e("div",{class:t.b("more")},[t._v("\n            "+t._s(t.$t("moreText"))+"\n          ")]),t._v(" "),e("Icon",{attrs:{name:"arrow-gold"}})],1)],1)])])])}),[],!1,null,"120c641d",null);e.default=component.exports;installComponents(component,{Icon:n(171).default})},496:function(t,e,n){"use strict";n(475)},497:function(t,e,n){var d=n(23)(!1);d.push([t.i,".tabs[data-v-40fb47de]{display:grid;gap:20px;margin-bottom:var(--px-margin)}.tabs.grid2[data-v-40fb47de]{grid-template-columns:repeat(2, 1fr)}.tabs.grid--3[data-v-40fb47de]{grid-template-columns:repeat(3, 1fr)}@media(max-width: 800px){.tabs.grid--3[data-v-40fb47de]{grid-template-columns:repeat(4, 1fr);--px-margin: 50px !important}}@media(max-width: 480px){.tabs.grid--3[data-v-40fb47de]{--px-margin: 40px !important}}@media(max-width: 800px){.tabs.grid--3 .tabs__item[data-v-40fb47de]:nth-child(1){grid-column:1/5}.tabs.grid--3 .tabs__item[data-v-40fb47de]:nth-child(2){grid-column:1/3}.tabs.grid--3 .tabs__item[data-v-40fb47de]:nth-child(3){grid-column:3/5}}@media(max-width: 800px){.tabs.grid--3 .tabs__button[data-v-40fb47de]{max-width:initial}}@media(max-width: 540px){.tabs.grid--3 .tabs__button[data-v-40fb47de]{font-size:18px;padding:15px 10px}}@media(max-width: 384px){.tabs.grid--3 .tabs__button[data-v-40fb47de]{font-size:15px;padding:15px 7px}}.tabs.grid--5[data-v-40fb47de]{grid-template-columns:repeat(5, 1fr)}@media(max-width: 1024px){.tabs.grid--5[data-v-40fb47de]{grid-template-columns:repeat(4, 1fr)}}@media(max-width: 768px){.tabs.grid--5[data-v-40fb47de]{grid-template-columns:repeat(3, 1fr)}}@media(max-width: 540px){.tabs.grid--5 .tabs__button[data-v-40fb47de]{font-size:18px}}@media(max-width: 384px){.tabs.grid--5 .tabs__button[data-v-40fb47de]{font-size:15px}}.tabs__button[data-v-40fb47de]{font-weight:600;line-height:1.2;text-align:center;color:#f9b300;display:flex;justify-content:center;align-items:center;max-width:var(--maxWidth);width:100%;padding:15px;background-color:#f6f6f6;border:1px solid #c9c9c9;border-radius:5px;cursor:pointer}.tabs__button.isActive[data-v-40fb47de]{background-color:#fff7e1}",""]),t.exports=d},498:function(t,e,n){"use strict";n(476)},499:function(t,e,n){var d=n(23)(!1);d.push([t.i,".tabs-news[data-v-5f1132e8]{display:flex;flex-direction:column;gap:50px}",""]),t.exports=d},509:function(t,e,n){"use strict";n.r(e);var d={name:"TabsNews",computed:{tabNews:function(){return this.$store.getters["api/getTabNews"]}}},o=(n(498),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},t._l(t.tabNews,(function(t){return e("TabsNewsContent",{key:t.id,attrs:{news:t}})})),1)}),[],!1,null,"5f1132e8",null);e.default=component.exports;installComponents(component,{TabsNewsContent:n(495).default})},515:function(t,e,n){var content=n(570);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("7f958b56",content,!0,{sourceMap:!1})},516:function(t,e,n){"use strict";n(487)},517:function(t,e,n){var d=n(23)(!1);d.push([t.i,".content-news__box[data-v-7dce61bb]{display:flex;flex-direction:column;align-items:center;padding:50px 0}@media(max-width: 480px){.content-news__box[data-v-7dce61bb]{padding:20px 0}}.content-news__picture[data-v-7dce61bb]{max-width:500px;width:100%;margin-bottom:70px}.content-news__picture img[data-v-7dce61bb]{width:100%}@media(max-width: 480px){.content-news__picture[data-v-7dce61bb]{margin-bottom:40px}}.content-news__text[data-v-7dce61bb]{font-size:45px}@media(max-width: 480px){.content-news__text[data-v-7dce61bb]{font-size:30px}}",""]),t.exports=d},556:function(t,e,n){"use strict";n.r(e);var d={name:"ContentNews",props:{isActiveTab:{type:String,default:function(){return""}}},methods:{getIsActive:function(t){return this.isActiveTab===t}}},o=(n(516),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("first-tag-tab"),expression:"getIsActive('first-tag-tab')"}],class:t.b("item")},[e("TabsNews")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("two-tag-tab"),expression:"getIsActive('two-tag-tab')"}],class:t.b("item")},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:n(486),alt:"picture"}})]),t._v(" "),e("div",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("emptyNews"))+"\n      ")])])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("three-tag-tab"),expression:"getIsActive('three-tag-tab')"}],class:t.b("item")},[e("TabsNews")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("four-tag-tab"),expression:"getIsActive('four-tag-tab')"}],class:t.b("item")},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture")},[e("img",{attrs:{src:n(486),alt:"picture"}})]),t._v(" "),e("div",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("emptyNews"))+"\n      ")])])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("five-tag-tab"),expression:"getIsActive('five-tag-tab')"}],class:t.b("item")},[e("TabsNews")],1)])}),[],!1,null,"7dce61bb",null);e.default=component.exports;installComponents(component,{TabsNews:n(509).default})},569:function(t,e,n){"use strict";n(515)},570:function(t,e,n){var d=n(23)(!1);d.push([t.i,".news__wrapper[data-v-e06ac100]{display:flex;justify-content:space-between;align-items:center;gap:111px;margin-bottom:60px}@media(max-width: 864px){.news__wrapper[data-v-e06ac100]{gap:50px}}@media(max-width: 640px){.news__wrapper[data-v-e06ac100]{flex-direction:column;gap:25px;margin-bottom:40px}}.news__title[data-v-e06ac100]{font-size:40px;line-height:1.2;font-weight:900}@media(max-width: 1024px){.news__title[data-v-e06ac100]{font-size:30px}}@media(max-width: 480px){.news__title[data-v-e06ac100]{font-size:25px}}.news__list[data-v-e06ac100]{width:100%}",""]),t.exports=d},608:function(t,e,n){"use strict";n.r(e);n(7),n(37);var d={name:"News",data:function(){return{tabs:[{id:1,text:{ru:"Тег №1",en:"Tag #1"},isActive:!0,buttonName:"first-tag-tab"},{id:2,text:{ru:"Тег №2",en:"Tag #2"},isActive:!1,buttonName:"two-tag-tab"},{id:3,text:{ru:"Тег №3",en:"Tag #3"},isActive:!1,buttonName:"three-tag-tab"},{id:4,text:{ru:"Тег №4",en:"Tag #4"},isActive:!1,buttonName:"four-tag-tab"},{id:5,text:{ru:"Тег №5",en:"Tag #5"},isActive:!1,buttonName:"five-tag-tab"}],activeTab:"first-tag-tab"}},methods:{setIsActive:function(t){var e=this;this.activeTab=t,this.tabs.forEach((function(t){return t.buttonName===e.activeTab?t.isActive=!0:t.isActive=!1}))}}},o=(n(569),n(5)),component=Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("div",{class:t.b("wrapper")},[e("h2",{class:t.b("title")},[t._v("\n      "+t._s(t.$t("tabNewsTitle"))+"\n    ")]),t._v(" "),e("Tabs",{class:t.b("list"),attrs:{grid5:!0,tab:t.tabs,maxWidth:260},on:{setIsActiveTab:t.setIsActive}})],1),t._v(" "),e("ContentNews",{attrs:{isActiveTab:t.activeTab}})],1)}),[],!1,null,"e06ac100",null);e.default=component.exports;installComponents(component,{Tabs:n(494).default,ContentNews:n(556).default})}}]);