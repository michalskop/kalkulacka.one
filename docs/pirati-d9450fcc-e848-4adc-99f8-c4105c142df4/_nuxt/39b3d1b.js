(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{369:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(40).default)("f29c8872",content,!0,{sourceMap:!1})},385:function(t,e,n){"use strict";n(369)},386:function(t,e,n){var r=n(39)((function(i){return i[1]}));r.push([t.i,".page[data-v-2422a34e]{min-height:calc(100vh - 58px)}",""]),r.locals={},t.exports=r},414:function(t,e,n){"use strict";n.r(e);n(77),n(44);var r=n(8),o=(n(12),n(35),n(43),n(42),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("questions").fetch();case 3:return r=e.sent,e.abrupt("return",{questions:r});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"🏴‍☠️ Piráti EP 2023 - důležité otázky",meta:[{hid:"extra",name:"Důležité otázky",description:"🏴‍☠️ Piráti EP 2023 - důležité otázky"}]}},computed:{answered:function(){var t=this,e={};return this.questions.forEach((function(n){var a=t.$store.getters.getAnswer(n.id);1==Math.abs(a)?e[n.id]=!0:e[n.id]=!1})),e},weights:function(){return this.$store.getters.getWeights},zeroAnswers:function(){return 0==Object.keys(this.$store.getters.getAnswers)}},methods:{answer:function(t){var a=this.$store.getters.getAnswer(t);return 1==a?"Ano":-1==a?"Ne":""},next:function(){this.$store.commit("storeWeights",this.weights)}},components:{Analytics:n(242).default}}),c=(n(385),n(17)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("div",{staticClass:"container"},[e("h4",{staticClass:"p-2"},[t._v("\n      Vyberte otázky, které jsou pro vás zásadní:\n    ")]),t._v(" "),t.zeroAnswers?t._e():e("div",[e("div",{staticClass:"d-grid p-2"},[e("NuxtLink",{staticClass:"btn btn-secondary",attrs:{to:"/results/"},nativeOn:{click:function(e){return t.next.apply(null,arguments)}}},[t._v(">> Přeskočit >>")])],1),t._v(" "),t._l(t.questions,(function(n){return e("div",{key:n.id,staticClass:"list-group"},[t.answered[n.id]?e("div",{staticClass:"list-group-item list-group-item-action m-1"},[e("label",{staticClass:"checkbox inline"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.weights[n.id],expression:"weights[question.id]"}],staticClass:"custom-control-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.weights[n.id])?t._i(t.weights[n.id],null)>-1:t.weights[n.id]},on:{change:function(e){var r=t.weights[n.id],o=e.target,c=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.weights,n.id,r.concat([null])):l>-1&&t.$set(t.weights,n.id,r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.weights,n.id,c)}}}),t._v("\n              "+t._s(n.question)+" "),e("small",[t._v("("+t._s(t.answer(n.id))+")")])])]):t._e()])}))],2),t._v(" "),t.zeroAnswers?e("div",[e("div",{staticClass:"alert alert-warning",attrs:{role:"alert"}},[t._v("\n        Nejsou odpovězené žádné otázky:"),e("br"),t._v(" "),e("NuxtLink",{attrs:{to:"/question/1/"}},[t._v("Spustit Kalkulačku od začátku")])],1)]):t._e(),t._v(" "),e("div",{staticClass:"d-grid p-2"},[e("NuxtLink",{staticClass:"btn btn-primary",attrs:{to:"/results/"},nativeOn:{click:function(e){return t.next.apply(null,arguments)}}},[t._v(">> Dále >>")])],1)]),t._v(" "),e("Analytics")],1)}),[],!1,null,"2422a34e",null);e.default=component.exports;installComponents(component,{Analytics:n(242).default})}}]);