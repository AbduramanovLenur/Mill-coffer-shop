(window.webpackJsonp=window.webpackJsonp||[]).push([[48,59],{466:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("2771e27e",content,!0,{sourceMap:!1})},467:function(t,e,n){"use strict";n.r(e);n(61);var r={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},o=(n(471),n(6)),component=Object(o.a)(r,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"1fbc93f5",null);e.default=component.exports},471:function(t,e,n){"use strict";n(466)},472:function(t,e,n){var r=n(31)(!1);r.push([t.i,".title[data-v-1fbc93f5]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-1fbc93f5]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-1fbc93f5]{font-size:25px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-1fbc93f5]{text-align:center}}",""]),t.exports=r},561:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(32).default)("84ca3e9e",content,!0,{sourceMap:!1})},610:function(t,e,n){"use strict";n(561)},611:function(t,e,n){var r=n(31)(!1);r.push([t.i,".product__inner[data-v-69775194]{padding:60px 0 58px}@media(max-width: 576px){.product__inner[data-v-69775194]{padding:35px 0}}.product__title[data-v-69775194]{margin-left:auto;text-align:right}@media(max-width: 576px){.product__title[data-v-69775194]{--max-width: 100%;text-align:center}}.product__text[data-v-69775194]{max-width:1110px;margin-left:auto;margin-bottom:47px;text-align:right}@media(max-width: 576px){.product__text[data-v-69775194]{text-align:center;font-size:20px}}@media(max-width: 480px){.product__text[data-v-69775194]{margin-bottom:20px}}.product__slider[data-v-69775194]{margin-bottom:58px}.product__all[data-v-69775194]{display:block;font-size:20px;font-weight:500;line-height:1.2;max-width:150px;margin-left:auto;margin-right:10%;text-decoration:underline}",""]),t.exports=r},650:function(t,e,n){"use strict";n.r(e);var r={name:"Product"},o=(n(610),n(6)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{class:t.b("title"),attrs:{pxMargin:50,maxWidth:460}},[t._v("\n        "+t._s(t.$t("saleTitle"))+"\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("saleText"))+"\n      ")]),t._v(" "),e("ProductSlider",{class:t.b("slider")}),t._v(" "),e("nuxt-link",{class:t.b("all"),attrs:{to:"/"}},[t._v("\n        "+t._s(t.$t("saleBtn"))+"\n      ")])],1)])])}),[],!1,null,"69775194",null);e.default=component.exports;installComponents(component,{Title:n(467).default,ProductSlider:n(651).default})}}]);