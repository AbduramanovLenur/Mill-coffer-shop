(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{335:function(t,e,r){var content=r(342);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("deda238c",content,!0,{sourceMap:!1})},336:function(t,e,r){"use strict";r.r(e);r(337);var n={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return""}},maxWidth:{type:Number,default:function(){return""}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},o=(r(341),r(17)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"0c4c3884",null);e.default=component.exports},337:function(t,e,r){"use strict";var n=r(9),o=r(4),c=r(5),f=r(111),l=r(19),d=r(12),m=r(211),x=r(43),v=r(82),h=r(210),N=r(3),I=r(83).f,_=r(37).f,w=r(18).f,E=r(338),y=r(339).trim,A="Number",T=o[A],M=T.prototype,z=o.TypeError,S=c("".slice),C=c("".charCodeAt),F=function(t){var e=h(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,r,n,o,c,f,l,code,d=h(t,"number");if(v(d))throw z("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=y(d),43===(e=C(d,0))||45===e){if(88===(r=C(d,2))||120===r)return NaN}else if(48===e){switch(C(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=S(d,2)).length,l=0;l<f;l++)if((code=C(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(f(A,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var V,k=function(t){var e=arguments.length<1?0:T(F(t)),r=this;return x(M,r)&&N((function(){E(r)}))?m(Object(e),r,k):e},L=n?I(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;L.length>R;R++)d(T,V=L[R])&&!d(k,V)&&w(k,V,_(T,V));k.prototype=M,M.constructor=k,l(o,A,k,{constructor:!0})}},338:function(t,e,r){var n=r(5);t.exports=n(1..valueOf)},339:function(t,e,r){var n=r(5),o=r(25),c=r(13),f=r(340),l=n("".replace),d="["+f+"]",m=RegExp("^"+d+d+"*"),x=RegExp(d+d+"*$"),v=function(t){return function(e){var r=c(o(e));return 1&t&&(r=l(r,m,"")),2&t&&(r=l(r,x,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},340:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},341:function(t,e,r){"use strict";r(335)},342:function(t,e,r){var n=r(26)(!1);n.push([t.i,".title[data-v-0c4c3884]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-0c4c3884]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-0c4c3884]{font-size:35px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-0c4c3884]{text-align:center}}",""]),t.exports=n},372:function(t,e,r){"use strict";r.r(e);var n={name:"ArticleList",computed:{article:function(){return this.$store.getters["article-api/getArticleContent"]}}},o=r(17),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{attrs:{pxMargin:60,maxWidth:450}},[t._v("\n        Новости компании\n      ")]),t._v(" "),e("div",{class:t.b("wrapper")})],1)])])}),[],!1,null,"2bf5cff6",null);e.default=component.exports;installComponents(component,{Title:r(336).default})}}]);