(function(t){function e(e){for(var r,o,l=e[0],i=e[1],u=e[2],p=0,h=[];p<l.length;p++)o=l[p],n[o]&&h.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);c&&c(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,l=1;l<a.length;l++){var i=a[l];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"0ea8":function(t,e,a){"use strict";var r=a("d3f2"),n=a.n(r);n.a},"0fb8":function(t,e,a){},"1aa8":function(t,e,a){},"43dd":function(t,e,a){"use strict";var r=a("1aa8"),n=a.n(r);n.a},"4e2e":function(t,e,a){"use strict";var r=a("0fb8"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("a026"),n=a("9f7b"),s=a.n(n),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("nav-bar")],1),t._m(0),a("router-view"),a("div",[a("b-container",{staticClass:"mb-5"},[a("b-row",[a("b-col",[a("b-img",{attrs:{thumbnail:"",fluid:"",src:"./images/derek_galactica.png",alt:"Background image of a galaxy with portrait images of Khal Drogo, Jack Sparrow, Yoda, Shakespeare and Spock carousel in the middle"}})],1)],1)],1)],1)],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[a("a",{attrs:{href:""}},[t._v("Derek's Galactic Translator")])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[a("b-navbar-brand",{attrs:{to:"/"}},[t._v("Home")]),a("b-navbar-brand",{attrs:{to:"/aboutme"}},[t._v("About Me")]),a("b-navbar-brand",{attrs:{to:"/aboutproject"}},[t._v("About Project")])],1)},u=[],c={name:"NavBar",data(){return{}}},p=c,h=a("2877"),v=Object(h["a"])(p,i,u,!1,null,null,null),d=v.exports,m=a("0284"),f=a.n(m),b={name:"app",components:{"nav-bar":d}},_=b,k=(a("034f"),Object(h["a"])(_,o,l,!1,null,null,null)),g=k.exports,y=a("8c4f"),x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"translator"},[a("p",[a("router-link",{attrs:{to:"/speaker/yoda"}},[t._v("Yoda")]),a("br"),a("router-link",{attrs:{to:"/speaker/pirate"}},[t._v("Pirate")]),a("br"),a("router-link",{attrs:{to:"/speaker/dothraki"}},[t._v("Dothraki")]),a("br"),a("router-link",{attrs:{to:"/speaker/shakespeare"}},[t._v("Shakespeare")]),a("br"),a("router-link",{attrs:{to:"/speaker/vulcan"}},[t._v("Vulcan")]),a("br")],1)])},w=[],j=a("bc3a"),S=a.n(j),T={name:"translator",data(){return{selected:null,options:[{id:"dothrakispeak"},{id:"piratespeak"},{id:"shakespearespeak"},{id:"vulcanspeak"},{id:"yodaspeak"}]}},methods:{translate:function(){S.a.get("https://api.funtranslations.com/translate/",{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}};r["a"].use(f.a,{id:"UA-129082739-2",checkDuplicateScript:!0});var P=T,O=(a("0ea8"),Object(h["a"])(P,x,w,!1,null,"4119b520",null)),$=O.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yodaspeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Yodaspeak\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},C=[],A={name:"Yodaspeak",data(){return{translated:"",text:"",translation:"yoda",results:null,errors:[]}},methods:{translate:function(){console.log("May The Force Be With You"),S.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},E=A,B=Object(h["a"])(E,D,C,!1,null,"0ffc5feb",null),M=B.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dothrakispeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Dothraki\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},J=[],N={name:"Dothrakispeak",data(){return{translated:"",text:"",translation:"dothraki",results:null,errors:[]}},methods:{translate:function(){console.log("Have you seen my horse?"),S.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},V=N,G=Object(h["a"])(V,I,J,!1,null,"68de91b2",null),Y=G.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"piratespeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Pirate Speak\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},W=[],L={name:"Piratespeak",data(){return{translated:"",text:"",translation:"pirate",results:null,errors:[]}},methods:{translate:function(){console.log("Why is the rum gone?"),S.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},F=L,H=Object(h["a"])(F,U,W,!1,null,"6e73d562",null),z=H.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shakespearespeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("Type your text below to convert to Shakespeare\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},K=[],R={name:"Shakespearespeak",data(){return{translated:"",text:"",translation:"shakespeare",results:null,errors:[]}},methods:{translate:function(){console.log("To be or not to be!"),S.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},Q=R,X=Object(h["a"])(Q,q,K,!1,null,"a48202e8",null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vulcanspeak"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("\n      Type your text below to convert to Vulcan\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{attrs:{type:"submit"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},et=[],at={name:"Vulcanspeak",data(){return{translated:"",text:"",translation:"vulcan",results:null,errors:[]}},methods:{translate:function(){console.log("Live long and prosper"),S.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)})}}},rt=at,nt=Object(h["a"])(rt,tt,et,!1,null,"520bb85e",null),st=nt.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"speaker"},[a("h2",[t._v("Let's talk like "+t._s(t.translation))]),a("form",{on:{submit:function(e){return e.preventDefault(),t.translate(e)}}},[a("p",[t._v("\n      Type your text below to convert to "+t._s(t.translation)+"\n      "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",onClick:"_gaq.push(['_trackEvent','Button Clicked', Click', Translate');"}},[t._v("Translate")])])]),t.results&&t.results.contents?a("div",[a("p",[t._v(t._s(t.results.contents.translated))])]):t._e()])},lt=[],it={name:"speaker",props:["translator"],data(){return{translated:"",text:"",results:null,errors:[],translation:null}},created:function(){this.translation=this.$route.params.translator},methods:{translate:function(){console.log("Who am I speaking with?"),S.a.get(`https://api.funtranslations.com/translate/${this.translation}.json`,{params:{text:this.text}}).then(t=>{this.results=t.data,console.log(this.results)}).catch(t=>{this.errors.push(t)}),ga("send",{hitType:"event",eventCategory:"button",eventAction:"click"})}}};r["a"].use(f.a,{id:"UA-129082739-2",checkDuplicateScript:!0});var ut=it,ct=(a("a39a"),Object(h["a"])(ut,ot,lt,!1,null,"99cd40ce",null)),pt=ct.exports,ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},vt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("About Me")]),a("p",[t._v("I'm a currently a senior business analyst at Boeing and am looking to enter into a web development role.\n    I have worked at Boeing for over 6 years and always visualized becoming part of the tech industry growing in my hometown of Seattle.")]),a("p",[t._v("I recently completed a web development certificate program at Seattle University and learned many front-end technologies and skills such as HTML, CSS, JavaScript, Bootstrap and Vue.js among others."),a("br")]),a("p",[t._v("My prior work experience allows me to understand office dynamics while still effectively working in teams to complete projects on time and increasing the efficiency of standard processes.")]),a("br"),a("p",[a("a",{attrs:{href:"https://derekbenak.com/",target:"_blank"}},[t._v("My Portfolio")])]),a("p",[a("a",{attrs:{href:"https://github.com/DerekJB1987",target:"_blank"}},[t._v("My Github Account")])])])}],dt={name:"about-me"},mt=dt,ft=(a("4e2e"),Object(h["a"])(mt,ht,vt,!1,null,"5d72aaf4",null)),bt=ft.exports,_t=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},kt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("About Derek's Galactic Translator")]),a("br"),a("p",[t._v("Derek's Galactic Translator is a capstone project for the "),a("a",{attrs:{href:"https://ncs.seattleu.edu/programs-courses/web-development/",target:"_blank"}},[t._v("Seattle University Web Development Certificate Program")]),t._v(".")]),a("p",[t._v("I decided to use "),a("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue.js")]),t._v(" since it is the JavaScript framework that is taught to all students in the program and helps practice learning how to code in JavaScript.")]),a("p"),a("p",[t._v("My project uses BootStrap 4 and Boostrap-vue to aid in styling and CSS as well as practice my Bootstrap skills that was taught briefly earlier in the program.")]),a("p",[t._v("This project uses the "),a("a",{attrs:{href:"https://funtranslations.com/#",target:"_blank"}},[t._v("Fun Translations API")]),t._v(" to send a text input by the user to the third party API site and return a JSON translation for the user to view.")]),a("p",[t._v("To analyze my project for user accessibility, I checked it with "),a("a",{attrs:{href:"https://wave.webaim.org/",target:"_blank"}},[t._v("WAVE")]),t._v(" by using their URL Dinolytics feature.")]),a("p",[t._v("Fun Translations API is public and imposes a ratelimit of 60 calls per day with a distribution of 5 per hour")]),a("p",[t._v("The Github repo for the code to my project is located on my "),a("a",{attrs:{href:"https://github.com/DerekJB1987/wats4030-capstone",target:"_blank"}},[t._v("Github account")])])])}],gt={name:"about-project"},yt=gt,xt=(a("43dd"),Object(h["a"])(yt,_t,kt,!1,null,"30d6f968",null)),wt=xt.exports;r["a"].use(y["a"]);var jt=new y["a"]({routes:[{path:"/",name:"Translator",component:$},{path:"/yodaspeak",name:"YodaSpeak",component:M},{path:"/dothrakispeak",name:"DothrakiSpeak",component:Y},{path:"/piratespeak",name:"PirateSpeak",component:z},{path:"/shakespearespeak",name:"ShakespeareSpeak",component:Z},{path:"/vulcanspeak",name:"VulcanSpeak",component:st},{path:"/speaker/:translator",component:pt,props:!0},{path:"/aboutme",name:"AboutMe",component:bt},{path:"/aboutproject",name:"AboutProject",component:wt},{path:"navbar",name:"NavBar",component:d}]});r["a"].use(s.a),new r["a"]({el:"#app",router:jt,template:"<App/>",components:{App:g}})},"64a9":function(t,e,a){},a39a:function(t,e,a){"use strict";var r=a("b6e5"),n=a.n(r);n.a},b6e5:function(t,e,a){},d3f2:function(t,e,a){}});
//# sourceMappingURL=app.fbf7d1cb.js.map