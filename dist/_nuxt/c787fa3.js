(window.webpackJsonp=window.webpackJsonp||[]).push([[5,21,33,34,56],{523:function(t,e,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("480ec79a",content,!0,{sourceMap:!1})},530:function(t,e,n){"use strict";n(523)},531:function(t,e,n){var o=n(33)(!1);o.push([t.i,'.breadcrumb__list[data-v-3d84ce2a]{display:flex;align-items:center;margin-bottom:var(--px-margin)}@media(max-width: 768px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 40px !important}}@media(max-width: 480px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 25px !important}}@media(max-width: 360px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 15px !important}}.breadcrumb__item[data-v-3d84ce2a]{display:flex;align-items:center}@media(max-width: 480px){.breadcrumb__item[data-v-3d84ce2a]:not(:last-child){display:none}}.breadcrumb__item[data-v-3d84ce2a]:not(:last-child):after{content:">";font-size:18px;font-weight:500;color:var(--color);margin-right:5px;margin-left:5px}.breadcrumb__link[data-v-3d84ce2a]{font-size:18px;font-weight:500;color:var(--color)}',""]),t.exports=o},536:function(t,e,n){"use strict";n.r(e);n(305),n(66);var o={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:function(){return[]}},pxMargin:{type:Number,default:function(){return 0}},color:{type:String,default:function(){return""}}},computed:{cssVars:function(){return{"--px-margin":"".concat(this.pxMargin,"px"),"--color":"#".concat(this.color)}}}},r=(n(530),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("list"),style:t.cssVars},t._l(t.breadcrumbs,(function(n){return e("li",{key:n.id,class:t.b("item")},[e("nuxt-link",{class:t.b("link"),attrs:{to:n.link}},[t._v("\n      "+t._s(n.text[t.$i18n.locale])+"\n    ")])],1)})),0)}),[],!1,null,"3d84ce2a",null);e.default=component.exports},540:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("7db67aca",content,!0,{sourceMap:!1})},554:function(t,e,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("4b4cff69",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(540)},567:function(t,e,n){var o=n(33)(!1);o.push([t.i,'.faq-item[data-v-d00359a6]{max-width:960px;width:100%}.faq-item__box[data-v-d00359a6]{box-shadow:0px 0px 30px rgba(149,149,149,.25);border-radius:20px;background-color:#f0e9e9;padding:40px 45px 40px 50px;transition:1s;cursor:pointer}@media(max-width: 800px){.faq-item__box[data-v-d00359a6]{padding:30px}}@media(max-width: 480px){.faq-item__box[data-v-d00359a6]{padding:20px}}.faq-item__box.open .faq-item__content[data-v-d00359a6]{margin-bottom:40px}@media(max-width: 640px){.faq-item__box.open .faq-item__content[data-v-d00359a6]{margin-bottom:20px}}.faq-item__box.open .faq-item__answer[data-v-d00359a6]{opacity:1;max-height:initial;overflow-y:initial}.faq-item__box.open .faq-item__plus[data-v-d00359a6]::after{transform:translateY(-50%) rotate(0deg)}.faq-item__content[data-v-d00359a6]{display:flex;justify-content:space-between;align-items:center;gap:24px}.faq-item__question[data-v-d00359a6]{font-weight:600;line-height:1.3;max-width:821px}@media(max-width: 640px){.faq-item__question[data-v-d00359a6]{font-size:20px}}@media(max-width: 480px){.faq-item__question[data-v-d00359a6]{font-size:18px}}.faq-item__plus[data-v-d00359a6]{position:relative;height:20px;width:20px}.faq-item__plus[data-v-d00359a6]::after,.faq-item__plus[data-v-d00359a6]::before{content:"";position:absolute;top:50%;right:0;background-color:#000;border-radius:20px;width:20px;height:3px}.faq-item__plus[data-v-d00359a6]::after{transform:translateY(-50%) rotate(90deg)}.faq-item__plus[data-v-d00359a6]::before{transform:translateY(-50%)}.faq-item__answer[data-v-d00359a6]{font-size:20px;line-height:1.3;color:#222;max-width:805px;opacity:0;max-height:0;overflow-y:hidden;transition:all 1s ease-out}@media(max-width: 640px){.faq-item__answer[data-v-d00359a6]{font-size:17px}}@media(max-width: 480px){.faq-item__answer[data-v-d00359a6]{font-size:16px}}',""]),t.exports=o},577:function(t,e,n){"use strict";n.r(e);var o={name:"FaqItem",props:{faq:{type:Object,default:function(){}},open:{type:Boolean,default:function(){return!1}}}},r=(n(566),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("li",{class:t.b("")},[e("div",{class:{"faq-item__box":t.b("box"),open:t.open},on:{click:function(e){return t.$emit("toggleOpen",t.faq.id)}}},[e("div",{class:t.b("content")},[e("div",{class:t.b("question")},[t._v("\n        "+t._s(t.faq.question[t.$i18n.locale])+"\n      ")]),t._v(" "),e("div",{class:t.b("plus")})]),t._v(" "),e("div",{class:t.b("answer")},[t._v("\n      "+t._s(t.faq.answer[t.$i18n.locale])+"\n    ")])])])}),[],!1,null,"d00359a6",null);e.default=component.exports},594:function(t,e,n){"use strict";n(554)},595:function(t,e,n){var o=n(33),r=n(196),d=n(596),c=o(!1),l=r(d);c.push([t.i,".faq[data-v-56233ffe]{background-image:url("+l+");background-repeat:no-repeat;background-position:left}@media(max-width: 1024px){.faq[data-v-56233ffe]{background-image:none}}.faq__title[data-v-56233ffe]{font-size:40px;font-weight:900;line-height:1.25;max-width:350px;margin-bottom:55px}@media(max-width: 800px){.faq__title[data-v-56233ffe]{margin-bottom:30px}}@media(max-width: 640px){.faq__title[data-v-56233ffe]{font-size:30px}}.faq__list[data-v-56233ffe]{display:flex;flex-direction:column;align-items:end;gap:30px}@media(max-width: 800px){.faq__list[data-v-56233ffe]{gap:20px}}",""]),t.exports=c},596:function(t,e,n){t.exports=n.p+"img/coffee.152fe56.png"},640:function(t,e,n){"use strict";n.r(e);n(35);var o={name:"Faq",data:function(){return{faqs:[{id:1,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:2,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:3,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:4,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:5,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1}]}},methods:{toggleOpen:function(t){this.faqs=this.faqs.map((function(e){return t===e.id?e.open=!e.open:e.open=!1,e}))}}},r=(n(594),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("h2",{class:t.b("title")},[t._v("\n    "+t._s(t.$t("faqTitle"))+"\n  ")]),t._v(" "),e("ul",{class:t.b("list")},t._l(t.faqs,(function(n){return e("FaqItem",{key:n.id,attrs:{faq:n,open:n.open},on:{toggleOpen:t.toggleOpen}})})),1)])}),[],!1,null,"56233ffe",null);e.default=component.exports;installComponents(component,{FaqItem:n(577).default})},686:function(t,e,n){var content=n(719);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("2d592b2f",content,!0,{sourceMap:!1})},698:function(t,e,n){"use strict";n.r(e);var o={name:"TabsContent",props:{isActiveTab:{type:String,default:function(){return""}}},methods:{getIsActive:function(t){return this.isActiveTab===t}}},r=n(10),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("first-tab"),expression:"getIsActive('first-tab')"}],class:t.b("item")},[e("Instruction")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("two-tab"),expression:"getIsActive('two-tab')"}],class:t.b("item")},[e("News")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("three-tab"),expression:"getIsActive('three-tab')"}],class:t.b("item")},[e("Faq")],1)])}),[],!1,null,"7bcfcb52",null);e.default=component.exports;installComponents(component,{Instruction:n(699).default,News:n(702).default,Faq:n(640).default})},718:function(t,e,n){"use strict";n(686)},719:function(t,e,n){var o=n(33)(!1);o.push([t.i,".blog-content__inner[data-v-24fe3a56]{padding:40px 0 100px}@media(max-width: 768px){.blog-content__inner[data-v-24fe3a56]{padding:40px 0}}",""]),t.exports=o},740:function(t,e,n){"use strict";n.r(e);n(5),n(22);var o={name:"BlogContent",data:function(){return{breadcrumb:[{id:1,text:{ru:"Главная",en:"Home"},link:"/"},{id:2,text:{ru:"Блог",en:"Blog"},link:"Blog"}],tabs:[{id:1,text:{ru:"Обучение",en:"Learning"},isActive:!0,buttonName:"first-tab"},{id:2,text:{ru:"Новости",en:"News"},isActive:!1,buttonName:"two-tab"},{id:3,text:{ru:"Частые вопросы",en:"FAQ"},isActive:!1,buttonName:"three-tab"}],activeTab:"first-tab"}},methods:{setIsActive:function(t){var e=this;this.activeTab=t,this.tabs.forEach((function(t){return t.buttonName===e.activeTab?t.isActive=!0:t.isActive=!1}))}}},r=(n(718),n(10)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"overlay",class:t.b("")},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Breadcrumb",{attrs:{breadcrumbs:t.breadcrumb,pxMargin:50,color:"222222"}}),t._v(" "),e("Tabs",{attrs:{tab:t.tabs,grid3:!0,pxMargin:70,maxWidth:540},on:{setIsActiveTab:t.setIsActive}}),t._v(" "),e("TabsContent",{attrs:{isActiveTab:t.activeTab}})],1)])])}),[],!1,null,"24fe3a56",null);e.default=component.exports;installComponents(component,{Breadcrumb:n(536).default,Tabs:n(628).default,TabsContent:n(698).default})}}]);