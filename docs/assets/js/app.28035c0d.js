(function(t){function e(e){for(var r,o,l=e[0],i=e[1],u=e[2],c=0,k=[];c<l.length;c++)o=l[c],s[o]&&k.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(k.length)k.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==s[i]&&(r=!1)}r&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},s={app:0},n=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),s=a.n(r);s.a},"08ea":function(t,e,a){"use strict";var r=a("e233"),s=a.n(r);s.a},1529:function(t,e,a){},2057:function(t,e,a){"use strict";var r=a("7d9e"),s=a.n(r);s.a},"24d9":function(t,e,a){"use strict";var r=a("700c"),s=a.n(r);s.a},2683:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("a026"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("router-view")],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("a",{attrs:{href:""}},[t._v("Derek's Galactic Translator")])])}],o={name:"app"},l=o,i=(a("034f"),a("2877")),u=Object(i["a"])(l,s,n,!1,null,null,null),p=u.exports,c=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"translator"},[a("p",[a("router-link",{attrs:{to:"/"}},[t._v("Translator")]),a("br"),a("router-link",{attrs:{to:"yodaspeak"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"dothrakispeak"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"piratespeak"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"shakespearespeak"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"vulcanspeak"}},[t._v("Vulcan Speak")]),a("br"),a("router-link",{attrs:{to:"yodaspeak"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"/speaker/yoda"}},[t._v("Yoda")]),a("br"),a("router-link",{attrs:{to:"/speaker/pirate"}},[t._v("Pirate")]),a("br"),a("router-link",{attrs:{to:"/speaker/dothraki"}},[t._v("Dothraki")]),a("br"),a("router-link",{attrs:{to:"/speaker/shakespeare"}},[t._v("Shakespeare")]),a("br"),a("router-link",{attrs:{to:"/speaker/vulcan"}},[t._v("Vulcan")]),a("br")],1)])},v=[],h=a("bc3a"),d=a.n(h),f={name:"translator",data(){return{selected:null,options:[{id:"dothrakispeak"},{id:"piratespeak"},{id:"shakespearespeak"},{id:"vulcanspeak"},{id:"yodaspeak"}]}},methods:{translate:function(){console.log("May The Force Be With You"),d.a.get("https://api.funtranslations.com/translate/yoda.json",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},m=f,_=(a("da6a"),Object(i["a"])(m,k,v,!1,null,"38ffb4b8",null)),b=_.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yodaspeak"},[a("p",[a("router-link",{attrs:{to:"translator"}},[t._v("Derek's Translator")]),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"dothrakispeak"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"piratespeak"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"shakespearespeak"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"vulcanspeak"}},[t._v("Vulcan Speak")]),a("br"),a("router-link",{attrs:{to:"'/speaker/yoda'"}},[t._v("Speak")]),a("br")],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Yodaspeak "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},y=[],g={name:"Yodaspeak",data(){return{translated:"",text:"",translation:"yoda",results:null,errors:[]}},methods:{translate:function(){console.log("May The Force Be With You"),d.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},S=g,T=(a("08ea"),Object(i["a"])(S,x,y,!1,null,"1fe25e4f",null)),j=T.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dothrakispeak"},[a("p",[a("router-link",{attrs:{to:"translator"}},[t._v("Translator")]),a("br"),a("router-link",{attrs:{to:"yodaspeak"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"piratespeak"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"shakespearespeak"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"vulcanspeak"}},[t._v("Vulcan Speak")]),a("br")],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Dothraki"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},P=[],D={name:"Dothrakispeak",data(){return{translated:"",text:"",translation:"dothraki",results:null,errors:[]}},methods:{translate:function(){console.log("Have you seen my horse?"),d.a.get("https://api.funtranslations.com/translate/dothraki.json",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},O=D,Y=(a("e52f"),Object(i["a"])(O,w,P,!1,null,"54306456",null)),$=Y.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"piratespeak"},[a("p",[a("router-link",{attrs:{to:"translator"}},[t._v("Translator")]),a("br"),a("router-link",{attrs:{to:"yodaspeak"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"dothrakispeak"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"shakespearespeak"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"vulcanspeak"}},[t._v("Vulcan Speak")]),a("br")],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Pirate Speak "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},E=[],C={name:"Piratespeak",data(){return{translated:"",text:"",translation:"pirate",results:null,errors:[]}},methods:{translate:function(){console.log("Why is the rum gone?"),d.a.get("https://api.funtranslations.com/translate/pirate.json",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},M=C,N=(a("89e9"),Object(i["a"])(M,V,E,!1,null,"27427d42",null)),W=N.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shakespearespeak"},[a("p",[a("router-link",{attrs:{to:"translator"}},[t._v("Translator")]),a("br"),a("router-link",{attrs:{to:"yodaspeak"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"dothrakispeak"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"piratespeak"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"vulcanspeak"}},[t._v("Vulcan Speak")]),a("br")],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Shakespeare English"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},F=[],A={name:"Shakespearespeak",data(){return{translated:"",text:"",translation:"shakespeare",results:null,errors:[]}},methods:{translate:function(){console.log("O excellent!"),d.a.get("https://api.funtranslations.com/translate/shakespeare.json",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},J=A,L=(a("6095"),Object(i["a"])(J,B,F,!1,null,"6be607b4",null)),G=L.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vulcanspeak"},[a("p",[a("router-link",{attrs:{to:"translator"}},[t._v("Translator")]),a("br"),a("router-link",{attrs:{to:"yodaspeak"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"dothrakispeak"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"piratespeak"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"shakespearespeak"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Vulcan Speak")]),a("br")],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Vulcan"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},q=[],z={name:"Vulcanspeak",data(){return{translated:"",text:"",translation:"vulcan",results:null,errors:[]}},methods:{translate:function(){console.log("Live long and prosper"),d.a.get("https://api.funtranslations.com/translate/vulcan.json",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},I=z,K=(a("24d9"),Object(i["a"])(I,H,q,!1,null,"553d661c",null)),Q=K.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"speaker"},[a("h2",[t._v("Let's talk like "+t._s(t.translation))]),a("p",[a("router-link",{attrs:{to:"translator"}},[t._v("Translator")]),a("br"),a("router-link",{attrs:{to:"/"}},[t._v("Yoda Speak")]),a("br"),a("router-link",{attrs:{to:"dothrakispeak"}},[t._v("Dothraki Speak")]),a("br"),a("router-link",{attrs:{to:"piratespeak"}},[t._v("Pirate Speak")]),a("br"),a("router-link",{attrs:{to:"shakespearespeak"}},[t._v("Shakespeare Speak")]),a("br"),a("router-link",{attrs:{to:"vulcanspeak"}},[t._v("Vulcan Speak")]),a("br")],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("\n      Type your text below to convert to "+t._s(t.translation)+"\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e(),a("figure",[a("img",{attrs:{src:"./assets/"+t.translation+".jpg",alt:t.translation,srcset:""}})])])},U=[],X={name:"speaker",props:["translator"],data(){return{translated:"",text:"",results:null,errors:[],translation:null,images:{yoda:"yoda.jpg"}}},created:function(){this.translation=this.$route.params.translator},methods:{translate:function(){console.log("May The Force Be With You"),d.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},Z=X,tt=(a("2057"),Object(i["a"])(Z,R,U,!1,null,"3675a3ec",null)),et=tt.exports;r["a"].use(c["a"]);var at=new c["a"]({routes:[{path:"/",name:"Translator",component:b},{path:"/yodaspeak",name:"YodaSpeak",component:j},{path:"/dothrakispeak",name:"DothrakiSpeak",component:$},{path:"/piratespeak",name:"PirateSpeak",component:W},{path:"/shakespearespeak",name:"ShakespeareSpeak",component:G},{path:"/vulcanspeak",name:"VulcanSpeak",component:Q},{path:"/speaker/:translator",component:et,props:!0}]});r["a"].config.productionTip=!1,new r["a"]({el:"#app",router:at,template:"<App/>",components:{App:p}})},6095:function(t,e,a){"use strict";var r=a("2683"),s=a.n(r);s.a},"64a9":function(t,e,a){},"700c":function(t,e,a){},"7d9e":function(t,e,a){},8522:function(t,e,a){},"867f":function(t,e,a){},"89e9":function(t,e,a){"use strict";var r=a("1529"),s=a.n(r);s.a},da6a:function(t,e,a){"use strict";var r=a("867f"),s=a.n(r);s.a},e233:function(t,e,a){},e52f:function(t,e,a){"use strict";var r=a("8522"),s=a.n(r);s.a}});
//# sourceMappingURL=app.28035c0d.js.map