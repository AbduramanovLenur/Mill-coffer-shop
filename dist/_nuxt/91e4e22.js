(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{502:function(t,e,r){var content=r(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("6f4637b6",content,!0,{sourceMap:!1})},535:function(t,e,r){"use strict";r(502)},536:function(t,e,r){var n=r(31)(!1);n.push([t.i,".my-input[data-v-0542b0df]{font-size:20px;line-height:1.15;color:#222;background-color:#fcfcfc;border:1px solid #f6f6f6;border-radius:4px;height:70px;max-width:680px;width:100%;padding:16px 40px}@media(max-width: 768px){.my-input[data-v-0542b0df]{font-size:16px;padding:16px 20px}}.my-input.isError[data-v-0542b0df]{border:1px solid red}.my-input[data-v-0542b0df]::placeholder{color:#c4c4c4}.my-input[data-v-0542b0df]:focus{outline:none}.my-input.isActive[data-v-0542b0df]{margin-bottom:5px}.my-input.isActive[data-v-0542b0df]:focus{outline:red}.my-input__error[data-v-0542b0df]{font-size:16px;color:red;margin-top:10px;transition:.5s}",""]),t.exports=n},580:function(t,e,r){"use strict";r.r(e);r(61);var n={name:"MyInput",props:{input:{type:Object,default:function(){}},value:{type:[String,Number],default:function(){return""}}},methods:{getValidationState:function(t){var e=t.dirty,r=t.validated,n=t.valid;return e||r?void 0===n?null:n:null}}},o=(r(535),r(6)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("ValidationProvider",{attrs:{name:t.input.key,rules:{required:t.input.required,min:3}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("input",{class:{"my-input":t.b(""),isError:r.errors[0]},attrs:{type:t.input.type,placeholder:t.input.placeholder[t.$i18n.locale],required:t.input.required,name:t.input.key,state:t.getValidationState(r)},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}),t._v(" "),r.errors[0]?e("div",{class:t.b("error")},[t._v("\n    "+t._s(r.errors[0])+"\n  ")]):t._e()]}}])})}),[],!1,null,"0542b0df",null);e.default=component.exports}}]);