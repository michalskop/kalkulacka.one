(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6],{355:function(t,l,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("503abdca",content,!0,{sourceMap:!1})},362:function(t,l,n){"use strict";n(355)},363:function(t,l,n){var e=n(39)((function(i){return i[1]}));e.push([t.i,".page[data-v-76105288]{max-width:666px;min-height:calc(100vh - 58px)}.calc-inner[data-v-76105288]{cursor:pointer}",""]),e.locals={},t.exports=e},371:function(t,l,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("a484cd00",content,!0,{sourceMap:!1})},377:function(t,l,n){"use strict";n.r(l);n(24),n(41),n(12),n(43),n(243);var e={data:function(){var t=[];return void 0!==window.localStorage.calcs&&(t=JSON.parse(window.localStorage.calcs).filter((function(element){return console.log("element.calc",element.calc),"cz_psp_2021_2050"==element.calc}))),{calcs:t}},computed:{noCalc:function(){var t=!1;return 0==this.calcs.length&&(t=!0),t}},methods:{removeCalc:function(i){this.calcs.splice(i,1),this.saveLocalStorage(this.calcs)},loadCalc:function(i){this.$store.commit("storeAnswers",this.calcs[i].answers),this.$store.commit("storeWeights",this.calcs[i].weights),this.$router.push({path:"/results"})},saveLocalStorage:function(){window.localStorage.calcs=JSON.stringify(this.calcs)},localDate:function(s){Date.parse(s);var t=new Date(s);return[t.toLocaleDateString("cs-CZ"),t.toLocaleTimeString("cs-CZ")]},scrollToTop:function(){window.scrollTo(0,0)}},mounted:function(){this.scrollToTop()}},o=(n(362),n(17)),component=Object(o.a)(e,(function(){var t=this,l=t._self._c;return l("div",[t.noCalc?l("div",{staticClass:"alert alert-warning"},[t._v("\n    Není uložena žádná vyplnění volební kalkulačka.\n    "),l("br"),t._v(" "),l("NuxtLink",{attrs:{to:"/question/1/"}},[l("strong",[t._v("Spustit Volební kalkulačku")])])],1):t._e(),t._v(" "),t._l(t.calcs,(function(n,e){return l("div",{key:e,staticClass:"list-group"},[l("div",{staticClass:"list-group-item list-group-item-action flex-column align-items-start active mt-4"},[l("small",[l("button",{staticClass:"btn-close bg-danger",attrs:{type:"button","aria-label":"Close"},on:{click:function(l){return t.removeCalc(e)}}}),t._v(" "),l("span",{staticClass:"text-muted"},[t._v("Smazat")])]),t._v(" "),l("div",{staticClass:"text-white calc-inner",on:{click:function(l){return t.loadCalc(e)}}},[l("div",{staticClass:"d-flex w-100 justify-content-between"},[l("h5",{staticClass:"mb-1"},[t._v(t._s(n.name))])]),t._v(" "),l("p",{staticClass:"mb-1"},[t._v("\n          "+t._s(t.localDate(n.date)[0])+" \n          "),l("small",[t._v(t._s(t.localDate(n.date)[1]))])])])])])}))],2)}),[],!1,null,"76105288",null);l.default=component.exports},389:function(t,l,n){"use strict";n(371)},390:function(t,l,n){var e=n(39)((function(i){return i[1]}));e.push([t.i,".page[data-v-63629f4d]{max-width:666px;min-height:calc(100vh - 58px)}",""]),e.locals={},t.exports=e},416:function(t,l,n){"use strict";n.r(l);var e={head:function(){return{title:"🏴‍☠️ Piráti EP 2024 - moje vyplněné volební kalkulačky",meta:[{hid:"me",name:"Moje vyplněné volební kalkulačky",description:"🏴‍☠️ Piráti EP 2024 - moje vyplněné volební kalkulačky"}]}},components:{Analytics:n(126).default}},o=(n(389),n(17)),component=Object(o.a)(e,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"container page"},[t._m(0),t._v(" "),l("p",{staticClass:"alert alert-info"},[t._v("\n    ⓘ Info: Tyto výsledky kalkulaček jsou uložené pouze v prohlížeči, nikam se neposílají.\n  ")]),t._v(" "),l("StoredCalcs"),t._v(" "),l("Analytics")],1)}),[function(){var t=this,l=t._self._c;return l("h2",{staticClass:"pt-2"},[l("span",[t._v("Moje uložené vyplněné kalkulačky")]),t._v(" "),l("small",[l("small",[l("sup",{staticClass:"badge rounded-pill bg-secondary"},[t._v("Experimentální")])])])])}],!1,null,"63629f4d",null);l.default=component.exports;installComponents(component,{StoredCalcs:n(377).default,Analytics:n(126).default})}}]);