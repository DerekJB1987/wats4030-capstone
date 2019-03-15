(function(t){function e(e){for(var n,o,l=e[0],i=e[1],u=e[2],p=0,d=[];p<l.length;p++)o=l[p],r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);c&&c(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0679":function(t,e,a){},"0bcb":function(t,e,a){},"0d03":function(t,e,a){},"0fb8":function(t,e,a){},"34cf":function(t,e,a){},4391:function(t,e,a){"use strict";var n=a("91bc"),r=a.n(n);r.a},4850:function(t,e,a){"use strict";var n=a("0679"),r=a.n(n);r.a},"4e2e":function(t,e,a){"use strict";var n=a("0fb8"),r=a.n(n);r.a},"517d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("a026"),r=a("0284"),s=a.n(r),o=a("9f7b"),l=a.n(o),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("nav-bar")],1),t._m(0),a("router-view")],1)},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("a",{attrs:{href:""}},[t._v("Derek's Galactic Translator")])])}],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"info"}},[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("Home")]),a("b-navbar-brand",{attrs:{to:"/aboutme"}},[t._v("About Me")]),a("b-navbar-brand",{attrs:{to:"/aboutproject"}},[t._v("About Project")])],1)},p=[],d={name:"NavBar",data(){return{}}},v=d,m=a("2877"),f=Object(m["a"])(v,c,p,!1,null,null,null),h=f.exports,b={name:"app",components:{"nav-bar":h}},_=b,x=(a("034f"),Object(m["a"])(_,i,u,!1,null,null,null)),k=x.exports,g=a("8c4f"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"translator"},[a("p",[a("router-link",{attrs:{to:"/speaker/yoda"}},[t._v("Yoda")]),a("br"),a("router-link",{attrs:{to:"/speaker/pirate"}},[t._v("Pirate")]),a("br"),a("router-link",{attrs:{to:"/speaker/dothraki"}},[t._v("Dothraki")]),a("br"),a("router-link",{attrs:{to:"/speaker/shakespeare"}},[t._v("Shakespeare")]),a("br"),a("router-link",{attrs:{to:"/speaker/vulcan"}},[t._v("Vulcan")]),a("br")],1)])},w=[],j=a("bc3a"),T=a.n(j),P={name:"translator",data(){return{selected:null,options:[{id:"dothrakispeak"},{id:"piratespeak"},{id:"shakespearespeak"},{id:"vulcanspeak"},{id:"yodaspeak"}]}},methods:{translate:function(){T.a.get("https://api.funtranslations.com/translate/",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},S=P,$=(a("8705"),Object(m["a"])(S,y,w,!1,null,"65decee0",null)),O=$.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yodaspeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Yodaspeak\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},A=[],M={name:"Yodaspeak",data(){return{translated:"",text:"",translation:"yoda",results:null,errors:[]}},methods:{translate:function(){console.log("May The Force Be With You"),T.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},C=M,D=(a("4850"),Object(m["a"])(C,E,A,!1,null,"02cebc8a",null)),I=D.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dothrakispeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Dothraki\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},B=[],V={name:"Dothrakispeak",data(){return{translated:"",text:"",translation:"dothraki",results:null,errors:[]}},methods:{translate:function(){console.log("Have you seen my horse?"),T.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},J=V,Y=(a("4391"),Object(m["a"])(J,N,B,!1,null,"a6fd1578",null)),H=Y.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"piratespeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Pirate Speak\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},F=[],W={name:"Piratespeak",data(){return{translated:"",text:"",translation:"pirate",results:null,errors:[]}},methods:{translate:function(){console.log("Why is the rum gone?"),T.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},G=W,U=(a("e365"),Object(m["a"])(G,L,F,!1,null,"6407e28b",null)),z=U.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shakespearespeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Shakespeare\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},K=[],Q={name:"Shakespearespeak",data(){return{translated:"",text:"",translation:"shakespeare",results:null,errors:[]}},methods:{translate:function(){console.log("To be or not to be!"),T.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},R=Q,X=(a("eba2"),Object(m["a"])(R,q,K,!1,null,"2a4de6d5",null)),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vulcanspeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("\n      Type your text below to convert to Vulcan\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},et=[],at={name:"Vulcanspeak",data(){return{translated:"",text:"",translation:"vulcan",results:null,errors:[]}},methods:{translate:function(){console.log("Live long and prosper"),T.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},nt=at,rt=(a("7761"),Object(m["a"])(nt,tt,et,!1,null,"018ef95f",null)),st=rt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"speaker"},[a("h2",[t._v("Let's talk like "+t._s(t.translation))]),a("p"),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("\n      Type your text below to convert to "+t._s(t.translation)+"\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},lt=[];a("9ddc");var it={name:"speaker",props:["translator"],data(){return{translated:"",text:"",results:null,errors:[],translation:null,images:{yoda:"yoda.jpg"}}},created:function(){this.translation=this.$route.params.translator},methods:{translate:function(){console.log("Who am I speaking with?"),T.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},ut=it,ct=(a("ec1e"),Object(m["a"])(ut,ot,lt,!1,null,"5a30fdf2",null)),pt=ct.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("About Me")]),a("p",[t._v("I'm a currently a senior business analyst at Boeing and am looking to enter into a web development role.\n    I have worked at Boeing for over 6 years and always visualized becoming part of the tech industry growing in my hometown of Seattle.")]),a("p",[t._v("I recently completed a web development certificate program at Seattle University and learned many front-end technologies and skills such as HTML, CSS, JavaScript, Bootstrap and Vue.js among others."),a("br")]),a("p",[t._v("My prior work experience allows me to understand office dynamics while still effectively working in teams to complete projects on time and increasing the efficiency of standard processes.")]),a("br"),a("p",[a("a",{attrs:{href:"https://derekbenak.com/",target:"_blank"}},[t._v("My Portfolio")])]),a("p",[a("a",{attrs:{href:"https://github.com/DerekJB1987",target:"_blank"}},[t._v("My Github Account")])])])}],mt={name:"about-me"},ft=mt,ht=(a("4e2e"),Object(m["a"])(ft,dt,vt,!1,null,"5d72aaf4",null)),bt=ht.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("About Project")]),a("p",[t._v("\nThis project is intended to be a featured item in my wed development portfolio.\nI used Vue.js to create a webapp that incorporates HTML, CSS and JavaScript to import data from a third party API.\nThis API is attributed to Fun Translations located at "),a("a",{attrs:{href:"https://funtranslations.com/#"}},[t._v("Fun Translations API")])])])}],kt={name:"about-project"},gt=kt,yt=(a("bf8f"),Object(m["a"])(gt,_t,xt,!1,null,"067ec58b",null)),wt=yt.exports;n["a"].use(g["a"]);var jt=new g["a"]({routes:[{path:"/",name:"Translator",component:O},{path:"/yodaspeak",name:"YodaSpeak",component:I},{path:"/dothrakispeak",name:"DothrakiSpeak",component:H},{path:"/piratespeak",name:"PirateSpeak",component:z},{path:"/shakespearespeak",name:"ShakespeareSpeak",component:Z},{path:"/vulcanspeak",name:"VulcanSpeak",component:st},{path:"/speaker/:translator",component:pt,props:!0},{path:"/aboutme",name:"AboutMe",component:bt},{path:"/aboutproject",name:"AboutProject",component:wt},{path:"navbar",name:"NavBar",component:h}]});n["a"].use(l.a),n["a"].use(s.a,{id:"UA-1234-5"}),new n["a"]({el:"#app",router:jt,template:"<App/>",components:{App:k}})},"64a9":function(t,e,a){},7761:function(t,e,a){"use strict";var n=a("34cf"),r=a.n(n);r.a},8705:function(t,e,a){"use strict";var n=a("0bcb"),r=a.n(n);r.a},"91bc":function(t,e,a){},bf8f:function(t,e,a){"use strict";var n=a("d413"),r=a.n(n);r.a},d413:function(t,e,a){},e365:function(t,e,a){"use strict";var n=a("517d"),r=a.n(n);r.a},eba2:function(t,e,a){"use strict";var n=a("0d03"),r=a.n(n);r.a},ec1e:function(t,e,a){"use strict";var n=a("edb3"),r=a.n(n);r.a},edb3:function(t,e,a){}});
//# sourceMappingURL=app.f6c9eb4f.js.map