(window.webpackJsonp=window.webpackJsonp||[]).push([[12,18],{359:function(t,e,n){"use strict";var o=n(11),r=n(4),d=n(7),c=n(111),l=n(21),f=n(13),x=n(219),m=n(43),h=n(82),v=n(218),_=n(3),w=n(83).f,N=n(37).f,I=n(20).f,y=n(360),k=n(361).trim,z="Number",E=r[z],M=E.prototype,T=r.TypeError,A=d("".slice),S=d("".charCodeAt),C=function(t){var e=v(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,o,r,d,c,l,code,f=v(t,"number");if(h(f))throw T("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=k(f),43===(e=S(f,0))||45===e){if(88===(n=S(f,2))||120===n)return NaN}else if(48===e){switch(S(f,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+f}for(c=(d=A(f,2)).length,l=0;l<c;l++)if((code=S(d,l))<48||code>r)return NaN;return parseInt(d,o)}return+f};if(c(z,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var O,V=function(t){var e=arguments.length<1?0:E(C(t)),n=this;return m(M,n)&&_((function(){y(n)}))?x(Object(e),n,V):e},j=o?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;j.length>R;R++)f(E,O=j[R])&&!f(V,O)&&I(V,O,N(E,O));V.prototype=M,M.constructor=V,l(r,z,V,{constructor:!0})}},360:function(t,e,n){var o=n(7);t.exports=o(1..valueOf)},361:function(t,e,n){var o=n(7),r=n(28),d=n(14),c=n(362),l=o("".replace),f="["+c+"]",x=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var n=d(r(e));return 1&t&&(n=l(n,x,"")),2&t&&(n=l(n,m,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},362:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},363:function(t,e,n){var content=n(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("6c181fd3",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n.r(e);n(359);var o={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},r=(n(366),n(8)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"49240cd4",null);e.default=component.exports},366:function(t,e,n){"use strict";n(363)},367:function(t,e,n){var o=n(15)(!1);o.push([t.i,".title[data-v-49240cd4]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-49240cd4]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-49240cd4]{font-size:35px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-49240cd4]{text-align:center}}",""]),t.exports=o},401:function(t,e,n){var content=n(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0af79776",content,!0,{sourceMap:!1})},427:function(t,e,n){t.exports=n.p+"img/cof.4fd12f1.png"},428:function(t,e,n){"use strict";n(401)},429:function(t,e,n){var o=n(15),r=n(136),d=n(430),c=o(!1),l=r(d);c.push([t.i,".mailing[data-v-4c4adbae]{position:relative;background-image:url("+l+");background-repeat:no-repeat;background-position:center;background-size:cover}.mailing__inner[data-v-4c4adbae]{position:relative;z-index:100;padding:40px 0}.mailing__text[data-v-4c4adbae]{max-width:760px;margin-bottom:60px;line-height:1.3}@media(max-width: 1024px){.mailing__text[data-v-4c4adbae]{font-size:20px;margin-bottom:40px}}.mailing__form[data-v-4c4adbae]{position:relative;max-width:1100px}.mailing__input[data-v-4c4adbae]{background-color:#f3f3f3;border-radius:40px;width:100%;height:80px;border:none;padding:24px 60px;margin-bottom:20px}.mailing__input[data-v-4c4adbae]::placeholder{color:#c9c9c9}@media(max-width: 800px){.mailing__input[data-v-4c4adbae]{font-size:20px;height:55px;padding:10px 30px}}.mailing__button[data-v-4c4adbae]{display:block;position:absolute;top:0;right:0;font-weight:700;color:#fff;line-height:1.2;display:flex;justify-content:center;align-items:center;max-width:260px;width:100%;height:80px;background-color:#f9b300;border-radius:40px;padding:25px;transition:.5s}@media(max-width: 800px){.mailing__button[data-v-4c4adbae]{font-size:20px;max-width:200px;height:55px}}@media(max-width: 540px){.mailing__button[data-v-4c4adbae]{font-size:18px;max-width:150px;padding:0}}.mailing__faq[data-v-4c4adbae]{font-size:16px;font-weight:500;line-height:1.3;color:#5b5b5b;max-width:800px}.mailing__faq-link[data-v-4c4adbae]{color:#f9b300;font-weight:600;transition:.5s}.mailing__coffee[data-v-4c4adbae]{position:absolute;top:-80px;right:0;max-width:50%}@media(max-width: 1620px){.mailing__coffee[data-v-4c4adbae]{top:-10px;max-width:35%}}@media(max-width: 1220px){.mailing__coffee[data-v-4c4adbae]{top:0;max-width:27%}}@media(max-width: 1024px){.mailing__coffee[data-v-4c4adbae]{display:none}}@media(hover: hover){.mailing__button[data-v-4c4adbae]:hover{background-color:var(--hover-color-btn)}.mailing__faq-link[data-v-4c4adbae]:hover{color:var(--hover-color-btn)}}",""]),t.exports=c},430:function(t,e,n){t.exports=n.p+"img/bg.f351d12.png"},441:function(t,e,n){"use strict";n.r(e);var o={name:"Mailing"},r=(n(428),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b(),attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner"),attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[e("Title",{attrs:{maxWidth:800,pxMargin:50}},[t._v("\n        Подписка на новости и рассылку\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.\n      ")]),t._v(" "),e("form",{class:t.b("form")},[e("input",{class:t.b("input"),attrs:{type:"text",placeholder:"Ваш email"}}),t._v(" "),e("button",{class:t.b("button")},[t._v("\n          Подписаться\n        ")]),t._v(" "),e("div",{class:t.b("faq")},[t._v("\n          Нажимая на кнопку “Подписаться”, вы принимаете правила "),e("a",{class:t.b("faq-link"),attrs:{href:"#"}},[t._v(" пользовательского соглашения ")])])])],1)]),t._v(" "),e("img",{class:t.b("coffee"),attrs:{src:n(427),alt:"coffee","data-aos":"fade-left","data-aos-duration":"1000"}})])}),[],!1,null,"4c4adbae",null);e.default=component.exports;installComponents(component,{Title:n(364).default})}}]);