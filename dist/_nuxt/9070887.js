(window.webpackJsonp=window.webpackJsonp||[]).push([[8,18],{338:function(t,e,n){"use strict";var r=n(10),d=n(4),c=n(5),f=n(111),o=n(19),l=n(12),x=n(211),m=n(43),v=n(82),_=n(210),h=n(3),w=n(83).f,N=n(37).f,I=n(18).f,y=n(339),E=n(340).trim,z="Number",M=d[z],T=M.prototype,A=d.TypeError,S=c("".slice),k=c("".charCodeAt),C=function(t){var e=_(t,"number");return"bigint"==typeof e?e:F(e)},F=function(t){var e,n,r,d,c,f,o,code,l=_(t,"number");if(v(l))throw A("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=E(l),43===(e=k(l,0))||45===e){if(88===(n=k(l,2))||120===n)return NaN}else if(48===e){switch(k(l,1)){case 66:case 98:r=2,d=49;break;case 79:case 111:r=8,d=55;break;default:return+l}for(f=(c=S(l,2)).length,o=0;o<f;o++)if((code=k(c,o))<48||code>d)return NaN;return parseInt(c,r)}return+l};if(f(z,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var O,V=function(t){var e=arguments.length<1?0:M(C(t)),n=this;return m(T,n)&&h((function(){y(n)}))?x(Object(e),n,V):e},R=r?w(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;R.length>j;j++)l(M,O=R[j])&&!l(V,O)&&I(V,O,N(M,O));V.prototype=T,T.constructor=V,o(d,z,V,{constructor:!0})}},339:function(t,e,n){var r=n(5);t.exports=r(1..valueOf)},340:function(t,e,n){var r=n(5),d=n(25),c=n(13),f=n(341),o=r("".replace),l="["+f+"]",x=RegExp("^"+l+l+"*"),m=RegExp(l+l+"*$"),v=function(t){return function(e){var n=c(d(e));return 1&t&&(n=o(n,x,"")),2&t&&(n=o(n,m,"")),n}};t.exports={start:v(1),end:v(2),trim:v(3)}},341:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},342:function(t,e,n){var content=n(346);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6c181fd3",content,!0,{sourceMap:!1})},343:function(t,e,n){"use strict";n.r(e);n(338);var r={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},d=(n(345),n(17)),component=Object(d.a)(r,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"49240cd4",null);e.default=component.exports},345:function(t,e,n){"use strict";n(342)},346:function(t,e,n){var r=n(26)(!1);r.push([t.i,".title[data-v-49240cd4]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-49240cd4]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-49240cd4]{font-size:35px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-49240cd4]{text-align:center}}",""]),t.exports=r},372:function(t,e,n){var content=n(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("4a82bf7e",content,!0,{sourceMap:!1})},397:function(t,e,n){t.exports=n.p+"img/cup-grains.0618ef5.png"},398:function(t,e,n){"use strict";n(372)},399:function(t,e,n){var r=n(26)(!1);r.push([t.i,"@media(max-width: 1152px){.benefits[data-v-cbdf2e62]{background-color:#fff7e1}}.benefits__inner[data-v-cbdf2e62]{display:flex;align-items:center;gap:85px;padding:58px 0 143px}@media(max-width: 1440px){.benefits__inner[data-v-cbdf2e62]{gap:40px}}@media(max-width: 1152px){.benefits__inner[data-v-cbdf2e62]{flex-direction:column;gap:30px}}@media(max-width: 1024px){.benefits__inner[data-v-cbdf2e62]{padding:45px 0}}@media(max-width: 1152px){.benefits__box[data-v-cbdf2e62]:first-child{order:2}}.benefits__picture[data-v-cbdf2e62]{padding-top:100px}@media(max-width: 1152px){.benefits__picture[data-v-cbdf2e62]{padding-top:20px}}.benefits__list[data-v-cbdf2e62]{display:flex;flex-direction:column;gap:60px}@media(max-width: 1152px){.benefits__list[data-v-cbdf2e62]{display:grid;grid-template-columns:repeat(2, 1fr)}}@media(max-width: 960px){.benefits__list[data-v-cbdf2e62]{display:flex}}@media(max-width: 576px){.benefits__list[data-v-cbdf2e62]{gap:30px}}.benefits__wrapper[data-v-cbdf2e62]{display:flex;gap:50px}@media(max-width: 576px){.benefits__wrapper[data-v-cbdf2e62]{gap:20px}}@media(max-width: 480px){.benefits__wrapper[data-v-cbdf2e62]{flex-direction:column;align-items:center}}.benefits__content[data-v-cbdf2e62]{max-width:455px}.benefits__content-title[data-v-cbdf2e62]{font-size:30px;font-weight:700;line-height:1.2;margin-bottom:20px}@media(max-width: 768px){.benefits__content-title[data-v-cbdf2e62]{font-size:24px}}@media(max-width: 480px){.benefits__content-title[data-v-cbdf2e62]{text-align:center}}.benefits__content-text[data-v-cbdf2e62]{font-weight:500;line-height:1.28}@media(max-width: 768px){.benefits__content-text[data-v-cbdf2e62]{font-size:20px}}@media(max-width: 480px){.benefits__content-text[data-v-cbdf2e62]{text-align:center}}",""]),t.exports=r},417:function(t,e,n){"use strict";n.r(e);var r={name:"Benefits",data:function(){return{benefits:[{id:1,svg:"benefits-1",title:"Всегда свежая обжарка",text:"Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка"},{id:2,svg:"benefits-2",title:"Лучшие цены на продукцию",text:"Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию"},{id:3,svg:"benefits-3",title:"Консультации 24/7",text:"Наши специалисты готовы всегда помочь и подсказать вам с выбором кофе или другой продукции."}]}}},d=(n(398),n(17)),component=Object(d.a)(r,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("div",{class:t.b("box")},[e("div",{class:t.b("picture"),attrs:{"data-aos":"fade-up","data-aos-duration":"1000"}},[e("img",{attrs:{src:n(397),alt:"cup-grains"}})])]),t._v(" "),e("div",{class:t.b("box")},[e("Title",{class:t.b("title"),attrs:{pxMargin:80,maxWidth:585}},[t._v("\n          Почему стоит работать именно с нами?\n        ")]),t._v(" "),e("ul",{class:t.b("list")},t._l(t.benefits,(function(n){return e("li",{key:n.id,class:t.b("item"),attrs:{"data-aos":"flip-up","data-aos-duration":"1000"}},[e("div",{class:t.b("wrapper")},[e("div",{class:t.b("icon")},[e("Icon",{attrs:{name:n.svg}})],1),t._v(" "),e("div",{class:t.b("content")},[e("h3",{class:t.b("content-title")},[t._v("\n                  "+t._s(n.title)+"\n                ")]),t._v(" "),e("div",{class:t.b("content-text")},[t._v("\n                  "+t._s(n.text)+"\n                ")])])])])})),0)],1)])]),t._v(" "),e("div",{class:t.b("bg")})])}),[],!1,null,"cbdf2e62",null);e.default=component.exports;installComponents(component,{Title:n(343).default,Icon:n(209).default})}}]);