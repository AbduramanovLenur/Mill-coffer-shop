(window.webpackJsonp=window.webpackJsonp||[]).push([[20,49],{568:function(e,t,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("cac4dd0c",content,!0,{sourceMap:!1})},587:function(e,t,r){var content=r(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(24).default)("291a425a",content,!0,{sourceMap:!1})},600:function(e,t,r){"use strict";r(568)},601:function(e,t,r){var n=r(23)(!1);n.push([e.i,".my-input[data-v-0542b0df]{font-size:20px;line-height:1.15;color:#222;background-color:#fcfcfc;border:1px solid #f6f6f6;border-radius:4px;height:70px;max-width:680px;width:100%;padding:16px 40px}@media(max-width: 768px){.my-input[data-v-0542b0df]{font-size:16px;padding:16px 20px}}.my-input.isError[data-v-0542b0df]{border:1px solid red}.my-input[data-v-0542b0df]::placeholder{color:#c4c4c4}.my-input[data-v-0542b0df]:focus{outline:none}.my-input.isActive[data-v-0542b0df]{margin-bottom:5px}.my-input.isActive[data-v-0542b0df]:focus{outline:red}.my-input__error[data-v-0542b0df]{font-size:16px;color:red;margin-top:10px;transition:.5s}",""]),e.exports=n},608:function(e,t,r){"use strict";r.r(t);r(67);var n={name:"MyInput",props:{input:{type:Object,default:function(){}},value:{type:[String,Number],default:function(){return""}}},methods:{getValidationState:function(e){var t=e.dirty,r=e.validated,n=e.valid;return t||r?void 0===n?null:n:null}}},o=(r(600),r(5)),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("ValidationProvider",{attrs:{name:e.input.key,rules:{required:e.input.required,min:3}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("input",{class:{"my-input":e.b(""),isError:r.errors[0]},attrs:{type:e.input.type,placeholder:e.input.placeholder[e.$i18n.locale],required:e.input.required,name:e.input.key,state:e.getValidationState(r)},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e._v(" "),r.errors[0]?t("div",{class:e.b("error")},[e._v("\n    "+e._s(r.errors[0])+"\n  ")]):e._e()]}}])})}),[],!1,null,"0542b0df",null);t.default=component.exports},617:function(e,t,r){"use strict";r(587)},618:function(e,t,r){var n=r(23)(!1);n.push([e.i,".basket-form[data-v-cbdd20bc]{background-color:#fff;border:1px solid #e4e4e4;box-shadow:0px 0px 35.4254px rgba(163,163,163,.25);border-radius:14px;padding:70px 140px}@media(max-width: 1024px){.basket-form[data-v-cbdd20bc]{padding:60px}}@media(max-width: 768px){.basket-form[data-v-cbdd20bc]{padding:40px 30px}}.basket-form__title[data-v-cbdd20bc]{margin-bottom:50px}@media(max-width: 1024px){.basket-form__title[data-v-cbdd20bc]{margin-bottom:35px}}@media(max-width: 768px){.basket-form__title[data-v-cbdd20bc]{margin-bottom:25px}}.basket-form__wrapper[data-v-cbdd20bc]{--grid-template-columns: 2;display:grid;grid-template-columns:repeat(var(--grid-template-columns), 1fr);gap:15px 20px;margin-bottom:40px}@media(max-width: 768px){.basket-form__wrapper[data-v-cbdd20bc]{--grid-template-columns: 1}}@media(max-width: 480px){.basket-form__wrapper[data-v-cbdd20bc]{margin-bottom:20px}}.basket-form__submit[data-v-cbdd20bc]{font-size:25px;font-weight:600;line-height:1.2;color:#f9b300;display:flex;justify-content:center;align-items:center;max-width:1380px;width:100%;height:70px;padding:20px;background-color:#fff7e1;border:1px solid #f9b300;border-radius:5px}@media(max-width: 768px){.basket-form__submit[data-v-cbdd20bc]{font-size:20px}}@media(max-width: 480px){.basket-form__submit[data-v-cbdd20bc]{font-size:18px}}",""]),e.exports=n},658:function(e,t,r){"use strict";r.r(t);r(18),r(14),r(25),r(6),r(33),r(20),r(34);var n=r(7),o=r(8),d=(r(47),[{id:1,placeholder:{ru:"Имя",en:"Name"},type:"text",required:!0,key:"name"},{id:2,placeholder:{ru:"Страна",en:"Country"},type:"text",required:!0,key:"country"},{id:3,placeholder:{ru:"Фамилия",en:"Surname"},type:"text",required:!0,key:"surname"},{id:4,placeholder:{ru:"Город",en:"City"},type:"text",required:!0,key:"city"},{id:5,placeholder:{ru:"Телефон",en:"Phone"},type:"number",required:!0,key:"phone"},{id:6,placeholder:{ru:"Улица/Дом",en:"Street/House"},type:"text",required:!0,key:"streetHouse"},{id:7,placeholder:{ru:"Email",en:"Email"},type:"email",required:!0,key:"email"},{id:8,placeholder:{ru:"Почтовый индекс",en:"Postcode"},type:"number",required:!0,key:"postcode"},{id:9,placeholder:{ru:"Название компании (необязательно)",en:"Company name (optional)"},type:"text",required:!1,key:"companyName"},{id:10,placeholder:{ru:"Комментарий к заказу (необязательно)",en:"Order comment (optional)"},type:"text",required:!1,key:"orderComment"}]),c=r(11),l=r(315),m=r(157);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={name:"BasketForm",props:{bank:{type:String,default:function(){return""}}},data:function(){return{formPay:{name:"",country:"",surname:"",city:"",phone:"",streetHouse:"",email:"",postcode:"",companyName:"",orderComment:""}}},methods:y(y(y({},Object(c.d)(l.useProductStore,["productPayment","addActiveClassButton"])),Object(c.d)(m.useBasketStore,["deleteAllCart"])),{},{submitForm:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.observer.validate();case 2:t.sent&&(e.productPayment(y(y({},e.formPay),{},{fullPrice:e.total,product:e.product,bank:e.bank})),e.deleteAllCart(),e.addActiveClassButton({clearAll:"clear"}),e.$router.push("/"),e.$toast.success("Покупка оформлена"));case 4:case"end":return t.stop()}}),t)})))()}}),computed:y(y({},Object(c.e)(m.useBasketStore,["total","product"])),{},{inputs:function(){return d}})},v=(r(617),r(5)),component=Object(v.a)(x,(function(){var e=this,t=e._self._c;return t("ValidationObserver",{ref:"observer"},[t("form",{class:e.b(""),on:{submit:function(t){return t.preventDefault(),e.submitForm.apply(null,arguments)}}},[t("h2",{class:e.b("title basket-title")},[e._v("\n      "+e._s(e.$t("deliveryTitle"))+"\n    ")]),e._v(" "),t("div",{class:e.b("wrapper")},e._l(e.inputs,(function(r){return t("MyInput",{key:r.id,attrs:{input:r},model:{value:e.formPay[r.key],callback:function(t){e.$set(e.formPay,r.key,t)},expression:"formPay[item.key]"}})})),1),e._v(" "),t("button",{class:e.b("submit")},[e._v("\n      "+e._s(e.$t("сalculateButton"))+"\n    ")])])])}),[],!1,null,"cbdd20bc",null);t.default=component.exports;installComponents(component,{MyInput:r(608).default})}}]);