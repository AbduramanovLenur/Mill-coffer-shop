(window.webpackJsonp=window.webpackJsonp||[]).push([[30,53],{573:function(t,e,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("bdc5e8a8",content,!0,{sourceMap:!1})},580:function(t,e,n){"use strict";n(573)},581:function(t,e,n){var r=n(15)(!1);r.push([t.i,".rating[data-v-a7f54a38]{display:flex;max-width:133px}",""]),t.exports=r},582:function(t,e,n){"use strict";n.r(e);n(48);var r={name:"Rating",props:{maxStars:{type:Number,default:function(){return 0}},grade:{type:Number,default:function(){return 0}}}},c=(n(580),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[t._l(t.grade,(function(n){return e("li",{key:"grade"+n,class:t.b("star")},[e("Icon",{attrs:{name:"star"}})],1)})),t._v(" "),t._l(t.maxStars-t.grade,(function(n){return e("li",{key:"maxStars"+n,class:t.b("empty-star")},[e("Icon",{attrs:{name:"empty-star"}})],1)}))],2)}),[],!1,null,"a7f54a38",null);e.default=component.exports;installComponents(component,{Icon:n(118).default})},745:function(t,e,n){var content=n(791);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("8a9da356",content,!0,{sourceMap:!1})},790:function(t,e,n){"use strict";n(745)},791:function(t,e,n){var r=n(15)(!1);r.push([t.i,".content-cart[data-v-f7e07c06]{display:flex;justify-content:space-between;margin-bottom:35px;gap:10px}@media(max-width: 640px){.content-cart[data-v-f7e07c06]{margin-bottom:20px}}.content-cart__rating[data-v-f7e07c06]{margin-bottom:12px}.content-cart__statistics[data-v-f7e07c06]{display:flex;align-items:center;gap:7px}.content-cart__statistics-number[data-v-f7e07c06]{font-size:20px;font-weight:700;line-height:1.2;color:#222}.content-cart__statistics-review[data-v-f7e07c06]{font-size:14px;font-weight:50;line-height:1.14;color:#5b5b5b}.content-cart__gram[data-v-f7e07c06]{font-size:18px;font-weight:500;line-height:1.16;display:flex;justify-content:center;align-items:center;background-color:#fff7e1;border:1px solid #f9b300;border-radius:5px;max-width:132px;width:100%;height:33px;margin-left:auto}",""]),t.exports=r},813:function(t,e,n){"use strict";n.r(e);var r={name:"ContentCart",props:{content:{type:Object,default:function(){}},unit:{type:String,default:function(){return""}}}},c=(n(790),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("div",{staticClass:"b('info')"},[e("Rating",{class:t.b("rating"),attrs:{grade:t.content.rating,maxStars:5}}),t._v(" "),e("div",{class:t.b("statistics")},[e("div",{class:t.b("statistics-number")},[t._v("\n        "+t._s(t.content.rating)+".0\n      ")]),t._v(" "),e("div",{class:t.b("statistics-review")},[t._v("\n        ("+t._s(t.content.review)+" "+t._s(t.$t("reviewText"))+")\n      ")])])],1),t._v(" "),e("div",{class:t.b("gram")},[t._v("\n    "+t._s(t.content.gram)+" "+t._s(t.unit[t.$i18n.locale])+"\n  ")])])}),[],!1,null,"f7e07c06",null);e.default=component.exports;installComponents(component,{Rating:n(582).default})}}]);