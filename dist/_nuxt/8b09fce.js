(window.webpackJsonp=window.webpackJsonp||[]).push([[30,17,24],{362:function(t,e,n){"use strict";var o=n(10),r=n(4),d=n(5),l=n(111),f=n(21),c=n(13),m=n(220),x=n(43),h=n(82),v=n(219),_=n(3),w=n(83).f,N=n(37).f,I=n(20).f,y=n(363),k=n(364).trim,z="Number",E=r[z],M=E.prototype,T=r.TypeError,C=d("".slice),A=d("".charCodeAt),S=function(t){var e=v(t,"number");return"bigint"==typeof e?e:O(e)},O=function(t){var e,n,o,r,d,l,f,code,c=v(t,"number");if(h(c))throw T("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=k(c),43===(e=A(c,0))||45===e){if(88===(n=A(c,2))||120===n)return NaN}else if(48===e){switch(A(c,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+c}for(l=(d=C(c,2)).length,f=0;f<l;f++)if((code=A(d,f))<48||code>r)return NaN;return parseInt(d,o)}return+c};if(l(z,!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var F,V=function(t){var e=arguments.length<1?0:E(S(t)),n=this;return x(M,n)&&_((function(){y(n)}))?m(Object(e),n,V):e},j=o?w(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;j.length>R;R++)c(E,F=j[R])&&!c(V,F)&&I(V,F,N(E,F));V.prototype=M,M.constructor=V,f(r,z,V,{constructor:!0})}},363:function(t,e,n){var o=n(5);t.exports=o(1..valueOf)},364:function(t,e,n){var o=n(5),r=n(27),d=n(14),l=n(365),f=o("".replace),c="["+l+"]",m=RegExp("^"+c+c+"*"),x=RegExp(c+c+"*$"),h=function(t){return function(e){var n=d(r(e));return 1&t&&(n=f(n,m,"")),2&t&&(n=f(n,x,"")),n}};t.exports={start:h(1),end:h(2),trim:h(3)}},365:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},366:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2771e27e",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n.r(e);n(362);var o={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},r=(n(368),n(8)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"1fbc93f5",null);e.default=component.exports},368:function(t,e,n){"use strict";n(366)},369:function(t,e,n){var o=n(15)(!1);o.push([t.i,".title[data-v-1fbc93f5]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-1fbc93f5]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-1fbc93f5]{font-size:25px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-1fbc93f5]{text-align:center}}",""]),t.exports=o},370:function(t,e,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3f0be311",content,!0,{sourceMap:!1})},372:function(t,e,n){t.exports=n.p+"img/cof.4fd12f1.png"},373:function(t,e,n){"use strict";n(370)},374:function(t,e,n){var o=n(15),r=n(137),d=n(375),l=o(!1),f=r(d);l.push([t.i,".mailing[data-v-d4807aee]{position:relative;background-image:url("+f+");background-repeat:no-repeat;background-position:center;background-size:cover}.mailing__inner[data-v-d4807aee]{position:relative;z-index:100;padding:40px 0}.mailing__text[data-v-d4807aee]{max-width:760px;margin-bottom:60px;line-height:1.3}@media(max-width: 1024px){.mailing__text[data-v-d4807aee]{font-size:20px;margin-bottom:40px}}.mailing__form[data-v-d4807aee]{position:relative;max-width:1100px}.mailing__input[data-v-d4807aee]{background-color:#f3f3f3;border-radius:40px;width:100%;height:80px;border:none;padding:24px 60px;margin-bottom:20px}.mailing__input[data-v-d4807aee]::placeholder{color:#c9c9c9}@media(max-width: 800px){.mailing__input[data-v-d4807aee]{font-size:20px;height:55px;padding:10px 30px}}.mailing__button[data-v-d4807aee]{display:block;position:absolute;top:0;right:0;font-weight:700;color:#fff;line-height:1.2;display:flex;justify-content:center;align-items:center;max-width:260px;width:100%;height:80px;background-color:#f9b300;border-radius:40px;padding:25px;transition:.5s}@media(max-width: 800px){.mailing__button[data-v-d4807aee]{font-size:20px;max-width:200px;height:55px}}@media(max-width: 540px){.mailing__button[data-v-d4807aee]{font-size:18px;max-width:150px;padding:0}}.mailing__faq[data-v-d4807aee]{font-size:16px;font-weight:500;line-height:1.3;color:#5b5b5b;max-width:800px}.mailing__faq-link[data-v-d4807aee]{color:#f9b300;font-weight:600;transition:.5s}.mailing__coffee[data-v-d4807aee]{position:absolute;top:-80px;right:0;max-width:50%}@media(max-width: 1620px){.mailing__coffee[data-v-d4807aee]{top:-10px;max-width:35%}}@media(max-width: 1220px){.mailing__coffee[data-v-d4807aee]{top:0;max-width:27%}}@media(max-width: 1024px){.mailing__coffee[data-v-d4807aee]{display:none}}@media(hover: hover){.mailing__button[data-v-d4807aee]:hover{background-color:var(--hover-color-btn)}.mailing__faq-link[data-v-d4807aee]:hover{color:var(--hover-color-btn)}}",""]),t.exports=l},375:function(t,e,n){t.exports=n.p+"img/bg.f351d12.png"},377:function(t,e,n){"use strict";n.r(e);var o={name:"Mailing"},r=(n(373),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner"),attrs:{"data-aos":"fade-right","data-aos-duration":"1000"}},[e("Title",{attrs:{maxWidth:800,pxMargin:50}},[t._v("\n        Подписка на новости и рассылку\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе новых поставок, скидок и эксклюзивных предложений.\n      ")]),t._v(" "),e("form",{class:t.b("form")},[e("input",{class:t.b("input"),attrs:{type:"text",placeholder:"Ваш email"}}),t._v(" "),e("button",{class:t.b("button")},[t._v("\n          Подписаться\n        ")]),t._v(" "),e("div",{class:t.b("faq")},[t._v("\n          Нажимая на кнопку “Подписаться”, вы принимаете правила "),e("a",{class:t.b("faq-link"),attrs:{href:"#"}},[t._v(" пользовательского соглашения ")])])])],1)]),t._v(" "),e("img",{class:t.b("coffee"),attrs:{src:n(372),alt:"coffee","data-aos":"fade-left","data-aos-duration":"1000"}})])}),[],!1,null,"d4807aee",null);e.default=component.exports;installComponents(component,{Title:n(367).default})},491:function(t,e,n){"use strict";n.r(e);var o={name:"Contact"},r=n(8),component=Object(r.a)(o,(function(){var t=this._self._c;return t("main",{staticClass:"main"},[t("Mailing")],1)}),[],!1,null,"256f7dd0",null);e.default=component.exports;installComponents(component,{Mailing:n(377).default})}}]);