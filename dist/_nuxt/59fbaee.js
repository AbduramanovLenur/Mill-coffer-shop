(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{486:function(t,e,d){var content=d(512);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,d(24).default)("962fe43c",content,!0,{sourceMap:!1})},511:function(t,e,d){"use strict";d(486)},512:function(t,e,d){var n=d(23)(!1);n.push([t.i,".tabs[data-v-5b054410]{display:grid;gap:20px;margin-bottom:var(--px-margin)}.tabs.grid2[data-v-5b054410]{--grid-template-columns: 2;grid-template-columns:repeat(var(--grid-template-columns), 1fr)}@media(max-width: 600px){.tabs.grid2[data-v-5b054410]{--grid-template-columns: 1;--px-margin: 30px !important}}@media(max-width: 600px){.tabs.grid2 .tabs__button[data-v-5b054410]{font-size:18px;padding:15px 10px}}.tabs.grid--3[data-v-5b054410]{--grid-template-columns: 3;grid-template-columns:repeat(var(--grid-template-columns), 1fr)}@media(max-width: 800px){.tabs.grid--3[data-v-5b054410]{--grid-template-columns: 4;--px-margin: 50px !important}}@media(max-width: 480px){.tabs.grid--3[data-v-5b054410]{--px-margin: 40px !important}}@media(max-width: 800px){.tabs.grid--3 .tabs__item[data-v-5b054410]:nth-child(1){grid-column:1/5}.tabs.grid--3 .tabs__item[data-v-5b054410]:nth-child(2){grid-column:1/3}.tabs.grid--3 .tabs__item[data-v-5b054410]:nth-child(3){grid-column:3/5}}@media(max-width: 800px){.tabs.grid--3 .tabs__button[data-v-5b054410]{max-width:initial}}@media(max-width: 540px){.tabs.grid--3 .tabs__button[data-v-5b054410]{font-size:18px;padding:15px 10px}}@media(max-width: 384px){.tabs.grid--3 .tabs__button[data-v-5b054410]{font-size:15px;padding:15px 7px}}.tabs.grid--5[data-v-5b054410]{--grid-template-columns: 5;grid-template-columns:repeat(var(--grid-template-columns), 1fr)}@media(max-width: 1024px){.tabs.grid--5[data-v-5b054410]{--grid-template-columns: 4}}@media(max-width: 768px){.tabs.grid--5[data-v-5b054410]{--grid-template-columns: 3}}@media(max-width: 540px){.tabs.grid--5 .tabs__button[data-v-5b054410]{font-size:18px}}@media(max-width: 384px){.tabs.grid--5 .tabs__button[data-v-5b054410]{font-size:15px}}.tabs__button[data-v-5b054410]{font-weight:600;line-height:1.2;text-align:center;color:#f9b300;display:flex;justify-content:center;align-items:center;max-width:var(--maxWidth);width:100%;padding:15px;background-color:#f6f6f6;border:1px solid #c9c9c9;border-radius:5px;cursor:pointer}.tabs__button.isActive[data-v-5b054410]{background-color:#fff7e1}",""]),t.exports=n},552:function(t,e,d){"use strict";d.r(e);d(68);var n={name:"Tabs",props:{tab:{type:Array,default:function(){return[]}},grid2:{type:Boolean,default:function(){return!1}},grid3:{type:Boolean,default:function(){return!1}},grid5:{type:Boolean,default:function(){return!1}},maxWidth:{type:Number,default:function(){return 0}},pxMargin:{type:Number,default:function(){return 0}}},methods:{setIsActiveTab:function(t){this.$emit("setIsActiveTab",t)}},computed:{cssVars:function(){return{"--px-margin":"".concat(this.pxMargin,"px"),"--maxWidth":"".concat(this.maxWidth,"px")}}}},r=(d(511),d(5)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("ul",{class:{tabs:t.b(""),"grid--3":t.grid3,"grid--5":t.grid5,grid2:t.grid2},style:t.cssVars},t._l(t.tab,(function(d){return e("li",{key:d.id,class:t.b("item")},[e("div",{class:{tabs__button:t.b("button"),isActive:d.isActive},on:{click:function(e){return t.setIsActiveTab(d.buttonName)}}},[t._v("\n      "+t._s(d.text[t.$i18n.locale])+"\n    ")])])})),0)}),[],!1,null,"5b054410",null);e.default=component.exports}}]);