(window.webpackJsonp=window.webpackJsonp||[]).push([[45,13,20,21,34],{407:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("2771e27e",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";n.r(e);n(403);var o={name:"Title",props:{fzColor:{type:String,default:function(){return"#000"}},pxMargin:{type:Number,default:function(){return 0}},maxWidth:{type:Number,default:function(){return 0}}},computed:{cssVars:function(){return{"--fz-color":"#".concat(this.fzColor),"--px-margin":"".concat(this.pxMargin,"px"),"--max-width":"".concat(this.maxWidth,"px")}}}},r=(n(409),n(12)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("h2",{class:t.b(),style:t.cssVars},[t._t("default")],2)}),[],!1,null,"1fbc93f5",null);e.default=component.exports},409:function(t,e,n){"use strict";n(407)},410:function(t,e,n){var o=n(22)(!1);o.push([t.i,".title[data-v-1fbc93f5]{font-size:var(--title-fz);font-weight:900;line-height:1.24;color:var(--fz-color);margin-bottom:var(--px-margin);max-width:var(--max-width)}@media(max-width: 960px){.title[data-v-1fbc93f5]{font-size:40px;margin-bottom:50px}}@media(max-width: 600px){.title[data-v-1fbc93f5]{font-size:25px;margin-bottom:30px}}@media(max-width: 540px){.title[data-v-1fbc93f5]{text-align:center}}",""]),t.exports=o},411:function(t,e,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5c05bc66",content,!0,{sourceMap:!1})},413:function(t,e,n){t.exports=n.p+"img/cof.4fd12f1.png"},414:function(t,e,n){"use strict";n(411)},415:function(t,e,n){var o=n(22),r=n(163),c=n(416),l=o(!1),d=r(c);l.push([t.i,".mailing[data-v-57a6c7e0]{position:relative;background-image:url("+d+");background-repeat:no-repeat;background-position:center;background-size:cover}.mailing__inner[data-v-57a6c7e0]{position:relative;z-index:100;padding:40px 0}.mailing__text[data-v-57a6c7e0]{max-width:760px;margin-bottom:60px;line-height:1.3}@media(max-width: 1024px){.mailing__text[data-v-57a6c7e0]{font-size:20px;margin-bottom:40px}}.mailing__form[data-v-57a6c7e0]{position:relative;max-width:1100px}.mailing__input[data-v-57a6c7e0]{background-color:#f3f3f3;border-radius:40px;width:100%;height:80px;border:none;padding:24px 60px;margin-bottom:20px}.mailing__input[data-v-57a6c7e0]::placeholder{color:#c9c9c9}@media(max-width: 800px){.mailing__input[data-v-57a6c7e0]{font-size:20px;height:55px;padding:10px 30px}}.mailing__button[data-v-57a6c7e0]{display:block;position:absolute;top:0;right:0;font-weight:700;color:#fff;line-height:1.2;display:flex;justify-content:center;align-items:center;max-width:260px;width:100%;height:80px;background-color:#f9b300;border-radius:40px;padding:25px;transition:.5s}@media(max-width: 800px){.mailing__button[data-v-57a6c7e0]{font-size:20px;max-width:200px;height:55px}}@media(max-width: 540px){.mailing__button[data-v-57a6c7e0]{font-size:18px;max-width:150px;padding:0}}.mailing__faq[data-v-57a6c7e0]{font-size:16px;font-weight:500;line-height:1.3;color:#5b5b5b;max-width:800px}.mailing__faq-link[data-v-57a6c7e0]{color:#f9b300;font-weight:600;transition:.5s}.mailing__coffee[data-v-57a6c7e0]{position:absolute;top:-80px;right:0;max-width:50%}@media(max-width: 1620px){.mailing__coffee[data-v-57a6c7e0]{top:-10px;max-width:35%}}@media(max-width: 1220px){.mailing__coffee[data-v-57a6c7e0]{top:0;max-width:27%}}@media(max-width: 1024px){.mailing__coffee[data-v-57a6c7e0]{display:none}}@media(hover: hover){.mailing__button[data-v-57a6c7e0]:hover{background-color:var(--hover-color-btn)}.mailing__faq-link[data-v-57a6c7e0]:hover{color:var(--hover-color-btn)}}",""]),t.exports=l},416:function(t,e,n){t.exports=n.p+"img/bg.f351d12.png"},417:function(t,e,n){"use strict";n.r(e);var o={name:"Mailing"},r=(n(414),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{class:t.b()},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Title",{attrs:{maxWidth:800,pxMargin:50}},[t._v("\n        "+t._s(t.$t("subscribeTitle"))+"\n      ")]),t._v(" "),e("p",{class:t.b("text")},[t._v("\n        "+t._s(t.$t("subscribeText"))+"\n      ")]),t._v(" "),e("form",{class:t.b("form")},[e("input",{class:t.b("input"),attrs:{type:"text",placeholder:t.$t("emailPlaceholder")}}),t._v(" "),e("button",{class:t.b("button")},[t._v("\n          "+t._s(t.$t("subscribeBtn"))+"\n        ")]),t._v(" "),e("div",{class:t.b("faq")},[t._v("\n          "+t._s(t.$t("subscribeFaq"))+" "),e("a",{class:t.b("faq-link"),attrs:{href:"#"}},[t._v(" "+t._s(t.$t("subscribeFaqLink"))+" ")])])])],1)]),t._v(" "),e("img",{class:t.b("coffee"),attrs:{src:n(413),alt:"coffee"}})])}),[],!1,null,"57a6c7e0",null);e.default=component.exports;installComponents(component,{Title:n(408).default})},418:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4302a56f",content,!0,{sourceMap:!1})},421:function(t,e,n){var content=n(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("ab04dcf4",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n(418)},425:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.breadcrumb__list[data-v-3d84ce2a]{display:flex;align-items:center;margin-bottom:var(--px-margin)}@media(max-width: 768px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 40px !important}}@media(max-width: 480px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 25px !important}}@media(max-width: 360px){.breadcrumb__list[data-v-3d84ce2a]{--px-margin: 15px !important}}.breadcrumb__item[data-v-3d84ce2a]{display:flex;align-items:center}@media(max-width: 480px){.breadcrumb__item[data-v-3d84ce2a]:not(:last-child){display:none}}.breadcrumb__item[data-v-3d84ce2a]:not(:last-child):after{content:">";font-size:18px;font-weight:500;color:var(--color);margin-right:5px;margin-left:5px}.breadcrumb__link[data-v-3d84ce2a]{font-size:18px;font-weight:500;color:var(--color)}',""]),t.exports=o},427:function(t,e,n){var content=n(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("0ab62391",content,!0,{sourceMap:!1})},431:function(t,e,n){"use strict";n.r(e);n(238),n(403);var o={name:"Breadcrumb",props:{breadcrumbs:{type:Array,default:function(){return[]}},pxMargin:{type:Number,default:function(){return 0}},color:{type:String,default:function(){return""}}},computed:{cssVars:function(){return{"--px-margin":"".concat(this.pxMargin,"px"),"--color":"#".concat(this.color)}}}},r=(n(424),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("list"),style:t.cssVars},t._l(t.breadcrumbs,(function(n){return e("li",{key:n.id,class:t.b("item")},[e("nuxt-link",{class:t.b("link"),attrs:{to:n.link}},[t._v("\n      "+t._s(n.text[t.$i18n.locale])+"\n    ")])],1)})),0)}),[],!1,null,"3d84ce2a",null);e.default=component.exports},433:function(t,e,n){"use strict";n(421)},434:function(t,e,n){var o=n(22)(!1);o.push([t.i,".faq-item[data-v-18e98204]{max-width:960px;width:100%}.faq-item__box[data-v-18e98204]{box-shadow:0px 0px 30px rgba(149,149,149,.25);border-radius:20px;background-color:#f0e9e9;padding:40px 90px 40px 50px}.faq-item__question[data-v-18e98204]{font-weight:600;line-height:1.3;max-width:821px}.faq-item__answer[data-v-18e98204]{font-size:20px;line-height:1.3;color:#222;max-width:805px}",""]),t.exports=o},443:function(t,e,n){"use strict";n.r(e);var o={name:"FaqItem",props:{accordion:{type:Object,default:function(){}}}},r=(n(433),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("li",{class:t.b("")},[e("div",{class:t.b("box")},[e("div",{class:t.b("question")},[t._v("\n      "+t._s(t.accordion.question[t.$i18n.locale])+"\n    ")]),t._v(" "),e("div",{class:t.b("answer")},[t._v("\n      "+t._s(t.accordion.answer[t.$i18n.locale])+"\n    ")])])])}),[],!1,null,"18e98204",null);e.default=component.exports},446:function(t,e,n){"use strict";n(427)},447:function(t,e,n){var o=n(22),r=n(163),c=n(448),l=o(!1),d=r(c);l.push([t.i,".faq[data-v-09042063]{background-image:url("+d+");background-repeat:no-repeat;background-position:left;background-size:contain;height:100vh}.faq__title[data-v-09042063]{font-size:40px;font-weight:900;line-height:1.25;max-width:350px}.faq__list[data-v-09042063]{display:flex;flex-direction:column;align-items:end;gap:30px}",""]),t.exports=l},448:function(t,e,n){t.exports=n.p+"img/coffee.152fe56.png"},457:function(t,e,n){"use strict";n.r(e);var o={name:"Faq",data:function(){return{faq:[{id:1,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:2,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:3,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:4,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1},{id:5,question:{ru:"Чем вы отличаетесь от конкурентов? Почему мне стоит выбрать вас?",en:"How are you different from competitors? Why should I choose you?"},answer:{ru:"Задача организации, в особенности же рамки и место обучения кадров способствует подготовки и реализации систем массового участия. Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития",en:"The task of the organization, in particular the framework and place of training of personnel, contributes to the preparation and implementation of systems of mass participation. Thus, the strengthening and development of the structure contributes to the preparation and implementation of the directions of progressive development"},open:!1}]}}},r=(n(446),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{class:t.b("")},[e("div",{class:t.b("inner")},[e("h2",{class:t.b("title")},[t._v("\n      "+t._s(t.$t("faqTitle"))+"\n    ")]),t._v(" "),e("ul",{class:t.b("list")},t._l(t.faq,(function(t){return e("FaqItem",{key:t.id,attrs:{accordion:t}})})),1)])])}),[],!1,null,"09042063",null);e.default=component.exports;installComponents(component,{FaqItem:n(443).default})},460:function(t,e,n){var content=n(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("b9a168ea",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n.r(e);var o={name:"TabsContent",props:{isActiveTab:{type:String,default:function(){return""}}},methods:{getIsActive:function(t){return this.isActiveTab===t}}},r=n(12),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{class:t.b("")},[e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("first-tab"),expression:"getIsActive('first-tab')"}],class:t.b("item")},[e("div",{class:t.b("box")},[t._v("\n      Text 1\n    ")])]),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("two-tab"),expression:"getIsActive('two-tab')"}],class:t.b("item")},[e("TabNews")],1),t._v(" "),e("li",{directives:[{name:"show",rawName:"v-show",value:t.getIsActive("three-tab"),expression:"getIsActive('three-tab')"}],class:t.b("item")},[e("Faq")],1)])}),[],!1,null,"70b2b27d",null);e.default=component.exports;installComponents(component,{TabNews:n(531).default,Faq:n(457).default})},501:function(t,e,n){"use strict";n(460)},502:function(t,e,n){var o=n(22)(!1);o.push([t.i,".blog-content__inner[data-v-5a8bd1f3]{padding:40px 0 100px}",""]),t.exports=o},537:function(t,e,n){"use strict";n.r(e);n(14),n(36);var o={name:"BlogContent",data:function(){return{breadcrumb:[{id:1,text:{ru:"Главная",en:"Home"},link:"/"},{id:2,text:{ru:"Блог",en:"Blog"},link:"Blog"}],tabs:[{id:1,text:{ru:"Обучение",en:"Learning"},isActive:!1,buttonName:"first-tab"},{id:2,text:{ru:"Новости",en:"News"},isActive:!1,buttonName:"two-tab"},{id:3,text:{ru:"Частые вопросы",en:"FAQ"},isActive:!0,buttonName:"three-tab"}],activeTab:"three-tab"}},methods:{setIsActive:function(t){var e=this;this.activeTab=t,this.tabs.forEach((function(t){return t.buttonName===e.activeTab?t.isActive=!0:t.isActive=!1}))}}},r=(n(501),n(12)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"overlay",class:t.b("")},[e("div",{staticClass:"container"},[e("div",{class:t.b("inner")},[e("Breadcrumb",{attrs:{breadcrumbs:t.breadcrumb,pxMargin:50,color:"222222"}}),t._v(" "),e("Tabs",{attrs:{tab:t.tabs,pxMargin:70,maxWidth:540},on:{setIsActiveTab:t.setIsActive}}),t._v(" "),e("TabsContent",{attrs:{isActiveTab:t.activeTab}})],1)])])}),[],!1,null,"5a8bd1f3",null);e.default=component.exports;installComponents(component,{Breadcrumb:n(431).default,Tabs:n(493).default,TabsContent:n(494).default})},574:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(47),{name:"Blog",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,o=[{url:"https://news-content-6b2d0-default-rtdb.firebaseio.com/newsTab.json",nameSetFunction:"SET_TAB_NEWS"}],0!==n.getters["api/getTabNews"].length){e.next=5;break}return e.next=5,n.dispatch("api/fetch",o[0]);case 5:case"end":return e.stop()}}),e)})))()}}),c=n(12),component=Object(c.a)(r,(function(){var t=this._self._c;return t("main",{staticClass:"main"},[t("BlogContent"),this._v(" "),t("Mailing")],1)}),[],!1,null,"4aebd349",null);e.default=component.exports;installComponents(component,{BlogContent:n(537).default,Mailing:n(417).default})}}]);