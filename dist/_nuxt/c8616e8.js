(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{359:function(t,r,e){"use strict";var n=e(11),o=e(4),c=e(7),f=e(111),l=e(21),d=e(13),m=e(219),x=e(43),h=e(82),v=e(218),N=e(3),I=e(83).f,w=e(37).f,E=e(20).f,_=e(360),y=e(361).trim,z="Number",A=o[z],M=A.prototype,S=o.TypeError,T=c("".slice),F=c("".charCodeAt),V=function(t){var r=v(t,"number");return"bigint"==typeof r?r:O(r)},O=function(t){var r,e,n,o,c,f,l,code,d=v(t,"number");if(h(d))throw S("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=y(d),43===(r=F(d,0))||45===r){if(88===(e=F(d,2))||120===e)return NaN}else if(48===r){switch(F(d,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+d}for(f=(c=T(d,2)).length,l=0;l<f;l++)if((code=F(c,l))<48||code>o)return NaN;return parseInt(c,n)}return+d};if(f(z,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var k,C=function(t){var r=arguments.length<1?0:A(V(t)),e=this;return x(M,e)&&N((function(){_(e)}))?m(Object(r),e,C):r},R=n?I(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),G=0;R.length>G;G++)d(A,k=R[G])&&!d(C,k)&&E(C,k,w(A,k));C.prototype=M,M.constructor=C,l(o,z,C,{constructor:!0})}},360:function(t,r,e){var n=e(7);t.exports=n(1..valueOf)},361:function(t,r,e){var n=e(7),o=e(28),c=e(14),f=e(362),l=n("".replace),d="["+f+"]",m=RegExp("^"+d+d+"*"),x=RegExp(d+d+"*$"),h=function(t){return function(r){var e=c(o(r));return 1&t&&(e=l(e,m,"")),2&t&&(e=l(e,x,"")),e}};t.exports={start:h(1),end:h(2),trim:h(3)}},362:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},363:function(t,r,e){var content=e(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(16).default)("6c181fd3",content,!0,{sourceMap:!1})},364:function(t,r,e){"use strict";e.r(r);e(359);var n={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},o=(e(366),e(8)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"49240cd4",null);r.default=component.exports},366:function(t,r,e){"use strict";e(363)},367:function(t,r,e){var n=e(15)(!1);n.push([t.i,".title[data-v-49240cd4]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-49240cd4]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-49240cd4]{font-size:35px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-49240cd4]{text-align:center}}",""]),t.exports=n}}]);