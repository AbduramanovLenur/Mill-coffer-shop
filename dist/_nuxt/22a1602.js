(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13],{470:function(t,e,n){var content=n(485);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("b2d1ba92",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n.r(e);var l={name:"ArticleLinkBtn",props:{textLink:{type:String,default:function(){return"Подробнее"}}}},c=(n(484),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("a",{class:t.b(),attrs:{to:"/"}},[e("div",{class:t.b("text")},[t._v("\n    "+t._s(t.textLink)+"\n  ")]),t._v(" "),e("Icon",{attrs:{name:"gold-arrow"}})],1)}),[],!1,null,"9e328036",null);e.default=component.exports;installComponents(component,{Icon:n(171).default})},484:function(t,e,n){"use strict";n(470)},485:function(t,e,n){var l=n(23)(!1);l.push([t.i,".article-link-btn[data-v-9e328036]{display:flex;align-items:center;gap:10px}.article-link-btn__text[data-v-9e328036]{font-size:20px;font-weight:500;line-height:1.2;color:var(--link-color)}",""]),t.exports=l},493:function(t,e,n){var content=n(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(24).default)("cfa88ac2",content,!0,{sourceMap:!1})},543:function(t,e,n){"use strict";n(493)},544:function(t,e,n){var l=n(23)(!1);l.push([t.i,".article-item-small[data-v-ebabcc5e]{display:flex;flex-direction:column;justify-content:center;background-color:#fff;box-shadow:0px 0px 30px rgba(146,146,146,.2);border-radius:20px;max-width:680px;width:100%;padding:60px 120px;cursor:pointer}@media(max-width: 1024px){.article-item-small[data-v-ebabcc5e]{padding:50px 70px}}@media(max-width: 480px){.article-item-small[data-v-ebabcc5e]{padding:35px}}.article-item-small__title[data-v-ebabcc5e]{font-size:25px;line-height:1.3;margin-bottom:40px;max-width:430px;cursor:pointer}@media(max-width: 768px){.article-item-small__title[data-v-ebabcc5e]{font-size:18px}}.article-item-small__text[data-v-ebabcc5e]{font-size:20px;line-height:1.3;max-width:430px;margin-bottom:50px;cursor:pointer}@media(max-width: 768px){.article-item-small__text[data-v-ebabcc5e]{font-size:16px}}@media(hover: hover){.article-item-small[data-v-ebabcc5e]:hover{-webkit-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);-moz-box-shadow:0px 0px 50px 12px rgba(0,0,0,.2);box-shadow:0px 0px 50px 12px rgba(0,0,0,.2)}}",""]),t.exports=l},564:function(t,e,n){"use strict";n.r(e);var l={name:"ArticleItemSmall",props:{articleContent:{type:Object,default:function(){return""}}}},c=(n(543),n(5)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{class:t.b()},[e("h3",{class:t.b("title")},[t._v("\n    "+t._s(t.articleContent.title[t.$i18n.locale])+"\n  ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n    "+t._s(t.articleContent.text[t.$i18n.locale])+"\n  ")]),t._v(" "),e("ArticleLinkBtn")],1)}),[],!1,null,"ebabcc5e",null);e.default=component.exports;installComponents(component,{ArticleLinkBtn:n(481).default})}}]);