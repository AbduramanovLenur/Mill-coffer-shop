(window.webpackJsonp=window.webpackJsonp||[]).push([[28,39],{550:function(t,n,o){var content=o(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("0de3a5a8",content,!0,{sourceMap:!1})},556:function(t,n,o){"use strict";o.r(n);o(5),o(68),o(37);var e=[{position:{lat:59.92680900250736,lng:30.324273540882416},label:{text:{ru:"Гороховая 53",en:"Gorokhovaya 53"},color:"white",fontSize:"12px"}},{position:{lat:59.91121850056813,lng:30.31802618505715},label:{text:{ru:"Московский 53",en:"Moscow 53"},color:"white",fontSize:"12px"}},{position:{lat:55.08432094230384,lng:21.893569747683117},label:{text:{ru:"Советск, Гончарова 2а",en:"Sovetsk, Goncharova 2a"},color:"white",fontSize:"12px"}},{position:{lat:54.635424554177156,lng:21.811588057293378},label:{text:{ru:"Черняховск, Пионерская 1",en:"Chernyakhovsk, Pionerskaya 1"},color:"white",fontSize:"12px"}},{position:{lat:54.671046635849926,lng:20.501011120833557},label:{text:{ru:"Ульяны-Громовой 15",en:"Ulyana-Gromova 15"},color:"white",fontSize:"12px"}},{position:{lat:54.72221660392132,lng:20.499351198400152},label:{text:{ru:"Советский проспект 6а",en:"Soviet Avenue 6a"},color:"white",fontSize:"12px"}},{position:{lat:54.7641079227565,lng:20.60857065729696},label:{text:{ru:"Гурьевск, Каштановая 1г",en:"Guryevsk, Chestnut 1g"},color:"white",fontSize:"12px"}},{position:{lat:54.7204304658891,lng:20.51047365729582},label:{text:{ru:"Черняховского 15",en:"Chernyakhovsky 15"},color:"white",fontSize:"12px"}},{position:{lat:54.747761278538654,lng:20.4998423984009},label:{text:{ru:"Панина 2а",en:"Panina 2a"},color:"white",fontSize:"12px"}},{position:{lat:54.71522877037361,lng:20.50329482740869},label:{text:{ru:"Ленинский 8Б",en:"Leninsky 8B"},color:"white",fontSize:"12px"}},{position:{lat:54.71136360454073,lng:20.5842523983999},label:{text:{ru:"Аксакова 133",en:"Aksakov 133"},color:"white",fontSize:"12px"}},{position:{lat:54.73197102643434,lng:20.55058189042249},label:{text:{ru:"Липовая Аллея 2",en:"Linden Alley 2"},color:"white",fontSize:"12px"}}],l={name:"GoogleMap",data:function(){return{center:{lat:54.7065,lng:20.511},infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{content:"",pixelOffset:{width:0,height:-35}}}},mounted:function(){this.geolocate()},methods:{toggleInfoWindow:function(marker,t){this.infoWindowPos=marker.position;var text=marker.label.text[this.$i18n.locale];this.infoOptions.content=text,this.currentMidx==t?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=t)},geolocate:function(){}},computed:{marker:function(){return e.map((function(t){return{position:{lat:t.position.lat,lng:t.position.lng},label:t.label}}))}}},r=(o(566),o(8)),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",{class:t.b()},[n("GmapMap",{class:t.b("overlay"),attrs:{center:t.center,zoom:12}},[n("GMapCluster",{attrs:{zoomOnClick:!0}},[n("GmapInfoWindow",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(n){t.infoWinOpen=!1}}}),t._v(" "),t._l(t.marker,(function(o,e){return n("GmapMarker",{key:"m"+e.toString(),attrs:{position:o.position,clickable:!0},on:{click:function(n){return t.toggleInfoWindow(o,e)}}})}))],2)],1)],1)}),[],!1,null,"9a8791f2",null);n.default=component.exports},566:function(t,n,o){"use strict";o(550)},567:function(t,n,o){var e=o(31)(!1);e.push([t.i,".google-map[data-v-9a8791f2]{overflow:hidden;padding-bottom:31.7%;position:relative;max-width:960px;width:100%;height:0;border-radius:30px}@media(max-width: 1024px){.google-map[data-v-9a8791f2]{padding:30%}}@media(max-width: 480px){.google-map[data-v-9a8791f2]{padding:40%}}.google-map__overlay[data-v-9a8791f2]{left:0;top:0;height:100%;width:100%;position:absolute}",""]),t.exports=e},575:function(t,n,o){var content=o(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(32).default)("8f7de3d6",content,!0,{sourceMap:!1})},614:function(t,n,o){"use strict";o(575)},615:function(t,n,o){var e=o(31)(!1);e.push([t.i,".contact-info[data-v-12bf84b9]{display:flex;justify-content:space-between;gap:60px}@media(max-width: 1024px){.contact-info[data-v-12bf84b9]{flex-direction:column}}@media(max-width: 600px){.contact-info[data-v-12bf84b9]{gap:30px}}.contact-info__address[data-v-12bf84b9]{--grid-template-columns: 1;display:grid;grid-template-columns:repeat(var(--grid-template-columns), 1fr);gap:20px 50px}@media(max-width: 1024px){.contact-info__address[data-v-12bf84b9]{--grid-template-columns: 2;order:2}}@media(max-width: 640px){.contact-info__address[data-v-12bf84b9]{--grid-template-columns: 1}}.contact-info__title[data-v-12bf84b9]{font-size:30px;font-weight:900;line-height:1.23;color:#000;max-width:310px}@media(max-width: 768px){.contact-info__title[data-v-12bf84b9]{font-size:25px}}.contact-info__title.margin--10[data-v-12bf84b9]{--margin-10: 10px;margin-bottom:var(--margin-10)}.contact-info__title.margin--30[data-v-12bf84b9]{--margin-30: 30px;margin-bottom:var(--margin-30)}@media(max-width: 768px){.contact-info__title.margin--30[data-v-12bf84b9]{--margin-30: 10px}}.contact-info__title.margin--40[data-v-12bf84b9]{--margin-40: 40px;margin-bottom:var(--margin-40)}@media(max-width: 768px){.contact-info__title.margin--40[data-v-12bf84b9]{--margin-40: 10px}}.contact-info__list[data-v-12bf84b9]{display:flex;flex-direction:column;gap:10px}.contact-info__link[data-v-12bf84b9]{font-size:20px;line-height:1.3}@media(max-width: 640px){.contact-info__link[data-v-12bf84b9]{font-size:18px}}.contact-info__text[data-v-12bf84b9]{font-size:20px;line-height:1.3}@media(max-width: 640px){.contact-info__text[data-v-12bf84b9]{font-size:18px}}.contact-info__text.address-text[data-v-12bf84b9]{max-width:540px}.contact-info__text.warehouse-text[data-v-12bf84b9]{max-width:430px}",""]),t.exports=e},654:function(t,n,o){"use strict";o.r(n);var e={name:"ContactInfo"},l=(o(614),o(8)),component=Object(l.a)(e,(function(){var t=this,n=t._self._c;return n("div",{class:t.b("")},[n("address",{class:t.b("address")},[n("div",{class:t.b("box")},[n("h2",{class:t.b("title margin--10")},[t._v("\n        "+t._s(t.$t("supportTitle"))+"\n      ")]),t._v(" "),n("ul",{class:t.b("list")},[n("li",{class:t.b("item")},[n("a",{class:t.b("link"),attrs:{href:"tel: +74012375343"}},[t._v("\n            +7 (401) 237 53 43\n          ")])]),t._v(" "),n("li",{class:t.b("item")},[n("a",{class:t.b("link"),attrs:{href:"mailto: Import@kldrefine.com"}},[t._v("\n            Import@kldrefine.com\n          ")])])])]),t._v(" "),n("div",{class:t.b("box")},[n("h2",{class:t.b("title margin--40")},[t._v("\n        "+t._s(t.$t("legalTitle"))+"\n      ")]),t._v(" "),n("div",{class:t.b("text address-text")},[t._v("\n        "+t._s(t.$t("addressText"))+"\n      ")])]),t._v(" "),n("div",{class:t.b("box")},[n("h2",{class:t.b("title margin--30")},[t._v("\n        "+t._s(t.$t("warehouseTitle"))+"\n      ")]),t._v(" "),n("div",{class:t.b("text warehouse-text")},[t._v("\n        "+t._s(t.$t("warehouseText"))+"\n      ")])])]),t._v(" "),n("GoogleMap")],1)}),[],!1,null,"12bf84b9",null);n.default=component.exports;installComponents(component,{GoogleMap:o(556).default})}}]);