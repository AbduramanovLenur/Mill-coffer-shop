(window.webpackJsonp=window.webpackJsonp||[]).push([[28,29],{488:function(t,e,o){var content=o(520);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("d4652e52",content,!0,{sourceMap:!1})},518:function(t,e,o){var content=o(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(24).default)("71ada1a5",content,!0,{sourceMap:!1})},519:function(t,e,o){"use strict";o(488)},520:function(t,e,o){var n=o(23)(!1);n.push([t.i,'.faq-item[data-v-d00359a6]{max-width:960px;width:100%}.faq-item__box[data-v-d00359a6]{box-shadow:0px 0px 30px rgba(149,149,149,.25);border-radius:20px;background-color:#f0e9e9;padding:40px 45px 40px 50px;transition:1s;cursor:pointer}@media(max-width: 800px){.faq-item__box[data-v-d00359a6]{padding:30px}}@media(max-width: 480px){.faq-item__box[data-v-d00359a6]{padding:20px}}.faq-item__box.open .faq-item__content[data-v-d00359a6]{margin-bottom:40px}@media(max-width: 640px){.faq-item__box.open .faq-item__content[data-v-d00359a6]{margin-bottom:20px}}.faq-item__box.open .faq-item__answer[data-v-d00359a6]{opacity:1;max-height:initial;overflow-y:initial}.faq-item__box.open .faq-item__plus[data-v-d00359a6]::after{transform:translateY(-50%) rotate(0deg)}.faq-item__content[data-v-d00359a6]{display:flex;justify-content:space-between;align-items:center;gap:24px}.faq-item__question[data-v-d00359a6]{font-weight:600;line-height:1.3;max-width:821px}@media(max-width: 640px){.faq-item__question[data-v-d00359a6]{font-size:20px}}@media(max-width: 480px){.faq-item__question[data-v-d00359a6]{font-size:18px}}.faq-item__plus[data-v-d00359a6]{position:relative;height:20px;width:20px}.faq-item__plus[data-v-d00359a6]::after,.faq-item__plus[data-v-d00359a6]::before{content:"";position:absolute;top:50%;right:0;background-color:#000;border-radius:20px;width:20px;height:3px}.faq-item__plus[data-v-d00359a6]::after{transform:translateY(-50%) rotate(90deg)}.faq-item__plus[data-v-d00359a6]::before{transform:translateY(-50%)}.faq-item__answer[data-v-d00359a6]{font-size:20px;line-height:1.3;color:#222;max-width:805px;opacity:0;max-height:0;overflow-y:hidden;transition:all 1s ease-out}@media(max-width: 640px){.faq-item__answer[data-v-d00359a6]{font-size:17px}}@media(max-width: 480px){.faq-item__answer[data-v-d00359a6]{font-size:16px}}',""]),t.exports=n},557:function(t,e,o){"use strict";o.r(e);var n={name:"FaqItem",props:{faq:{type:Object,default:function(){}},open:{type:Boolean,default:function(){return!1}}}},r=(o(519),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("li",{class:t.b("")},[e("div",{class:{"faq-item__box":t.b("box"),open:t.open},on:{click:function(e){return t.$emit("toggleOpen",t.faq.id)}}},[e("div",{class:t.b("content")},[e("div",{class:t.b("question")},[t._v("\n        "+t._s(t.faq.question[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{class:t.b("plus")})]),t._v(" "),e("div",{class:t.b("answer")},[t._v("\n      "+t._s(t.faq.answer[t.$i18n.locale])+"\n    ")])])])}),[],!1,null,"d00359a6",null);e.default=component.exports},571:function(t,e,o){"use strict";o(518)},572:function(t,e,o){var n=o(23),r=o(172),d=o(573),f=n(!1),l=r(d);f.push([t.i,".faq[data-v-56233ffe]{background-image:url("+l+");background-repeat:no-repeat;background-position:left}@media(max-width: 1024px){.faq[data-v-56233ffe]{background-image:none}}.faq__title[data-v-56233ffe]{font-size:40px;font-weight:900;line-height:1.25;max-width:350px;margin-bottom:55px}@media(max-width: 800px){.faq__title[data-v-56233ffe]{margin-bottom:30px}}@media(max-width: 640px){.faq__title[data-v-56233ffe]{font-size:30px}}.faq__list[data-v-56233ffe]{display:flex;flex-direction:column;align-items:end;gap:30px}@media(max-width: 800px){.faq__list[data-v-56233ffe]{gap:20px}}",""]),t.exports=f},573:function(t,e,o){t.exports=o.p+"img/coffee.152fe56.png"},609:function(t,e,o){"use strict";o.r(e);o(28);var n={name:"Faq",data:function(){return{faqs:[{id:1,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:2,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:3,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:4,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:5,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1}]}},methods:{toggleOpen:function(t){this.faqs=this.faqs.map((function(e){return t===e.id?e.open=!e.open:e.open=!1,e}))}}},r=(o(571),o(5)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("h2",{class:t.b("title")},[t._v("\n    "+t._s(t.$t("faqTitle"))+"\n  ")]),t._v(" "),e("ul",{class:t.b("list")},t._l(t.faqs,(function(o){return e("FaqItem",{key:o.id,attrs:{faq:o,open:o.open},on:{toggleOpen:t.toggleOpen}})})),1)])}),[],!1,null,"56233ffe",null);e.default=component.exports;installComponents(component,{FaqItem:o(557).default})}}]);