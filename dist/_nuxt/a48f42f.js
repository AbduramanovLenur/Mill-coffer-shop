(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{540:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("7db67aca",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(540)},567:function(t,e,n){var o=n(33)(!1);o.push([t.i,'.faq-item[data-v-d00359a6]{max-width:960px;width:100%}.faq-item__box[data-v-d00359a6]{box-shadow:0px 0px 30px rgba(149,149,149,.25);border-radius:20px;background-color:#f0e9e9;padding:40px 45px 40px 50px;transition:1s;cursor:pointer}@media(max-width: 800px){.faq-item__box[data-v-d00359a6]{padding:30px}}@media(max-width: 480px){.faq-item__box[data-v-d00359a6]{padding:20px}}.faq-item__box.open .faq-item__content[data-v-d00359a6]{margin-bottom:40px}@media(max-width: 640px){.faq-item__box.open .faq-item__content[data-v-d00359a6]{margin-bottom:20px}}.faq-item__box.open .faq-item__answer[data-v-d00359a6]{opacity:1;max-height:initial;overflow-y:initial}.faq-item__box.open .faq-item__plus[data-v-d00359a6]::after{transform:translateY(-50%) rotate(0deg)}.faq-item__content[data-v-d00359a6]{display:flex;justify-content:space-between;align-items:center;gap:24px}.faq-item__question[data-v-d00359a6]{font-weight:600;line-height:1.3;max-width:821px}@media(max-width: 640px){.faq-item__question[data-v-d00359a6]{font-size:20px}}@media(max-width: 480px){.faq-item__question[data-v-d00359a6]{font-size:18px}}.faq-item__plus[data-v-d00359a6]{position:relative;height:20px;width:20px}.faq-item__plus[data-v-d00359a6]::after,.faq-item__plus[data-v-d00359a6]::before{content:"";position:absolute;top:50%;right:0;background-color:#000;border-radius:20px;width:20px;height:3px}.faq-item__plus[data-v-d00359a6]::after{transform:translateY(-50%) rotate(90deg)}.faq-item__plus[data-v-d00359a6]::before{transform:translateY(-50%)}.faq-item__answer[data-v-d00359a6]{font-size:20px;line-height:1.3;color:#222;max-width:805px;opacity:0;max-height:0;overflow-y:hidden;transition:all 1s ease-out}@media(max-width: 640px){.faq-item__answer[data-v-d00359a6]{font-size:17px}}@media(max-width: 480px){.faq-item__answer[data-v-d00359a6]{font-size:16px}}',""]),t.exports=o},577:function(t,e,n){"use strict";n.r(e);var o={name:"FaqItem",props:{faq:{type:Object,default:function(){}},open:{type:Boolean,default:function(){return!1}}}},d=(n(566),n(10)),component=Object(d.a)(o,(function(){var t=this,e=t._self._c;return e("li",{class:t.b("")},[e("div",{class:{"faq-item__box":t.b("box"),open:t.open},on:{click:function(e){return t.$emit("toggleOpen",t.faq.id)}}},[e("div",{class:t.b("content")},[e("div",{class:t.b("question")},[t._v("\n        "+t._s(t.faq.question[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{class:t.b("plus")})]),t._v(" "),e("div",{class:t.b("answer")},[t._v("\n      "+t._s(t.faq.answer[t.$i18n.locale])+"\n    ")])])])}),[],!1,null,"d00359a6",null);e.default=component.exports}}]);