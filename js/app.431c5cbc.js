(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},"13f7":function(t,e,n){"use strict";var i=n("f539"),s=n.n(i);s.a},1891:function(t,e,n){},"1fbc":function(t,e,n){},"23cb":function(t,e,n){"use strict";var i=n("6360"),s=n.n(i);s.a},2607:function(t,e,n){},"297d":function(t,e,n){"use strict";var i=n("85ef"),s=n.n(i);s.a},"53d7":function(t,e,n){"use strict";var i=n("01f7"),s=n.n(i);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"ctn",attrs:{id:"app"}},[n("div",{attrs:{id:"head"}},[n("NavBar")],1),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"dipsyland"}},[n("Dipsyland",{attrs:{id:"home"}})],1),n("PhotoBanner",{attrs:{src:"/img/banners/game.jpg"}}),n("div",{attrs:{id:"about"}}),n("NameCard"),n("PhotoBanner",{attrs:{src:"/img/banners/oscon.jpg"}}),n("Works",{attrs:{id:"works",category:"works"}}),n("PhotoBanner",{attrs:{src:"/img/banners/success.JPG"}}),n("Works",{attrs:{id:"blog",category:"blog"}}),n("Footer")],1)])},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"frame",class:"frame "+(!t.ripple&&"disabled"),on:{click:t.toggle}},[n("div",{ref:"text",staticClass:"text",on:{click:t.toggle}},[t._t("outside"),n("div",{ref:"whole",staticClass:"whole"},[n("div",{class:"content anim "+(!t.isAnimating&&t.isActive?"show":"")},[t._t("inside"),n("div",{staticClass:"close",on:{click:t.hide}},[t._v("x")])],2),n("div",{ref:"rippleContainer",staticClass:"rippleContainer anim"},[n("div",{ref:"realRipple",staticClass:"realRipple anim"})])])],2)])},a=[],c=n("5118"),l={props:{ripple:{default:!0},showByDefault:{default:!1}},data:function(){return{position:{},isActive:!1,isAnimating:!1}},mounted:function(){var t=this.$refs.rippleContainer,e=this.$refs.whole;t.style.display="none",window.addEventListener("keydown",this.onKeyDown),e.style.display="none",this.isActive=this.showByDefault},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)},methods:{onKeyDown:function(t){var e=t.key;"Escape"===e&&this.hide()},toggle:function(t){if(!this.ripple)return!1;var e=t.composedPath().map((function(t){return t.classList})).filter((function(t){return!!t})).map((function(t){return t.contains("prevent-ripple-full-screen")})).reduce((function(t,e){return t||e}),!1);if(e)return!1;var n=t.clientX,i=t.clientY;this.isAnimating||this.isActive||this.show(n,i)},show:function(t,e){var n=this;this.isAnimating=!0,this.$emit("animate");var i=this.$refs.rippleContainer,s=this.$refs.realRipple,o=this.$refs.whole;this.position.x=t,this.position.y=e,o.style.display="",i.style.left=this.position.x+"px",i.style.top=this.position.y+"px",i.style.display="",document.body.style.overflowY="hidden",Object(c["setTimeout"])((function(){n.$nextTick((function(){s.classList.add("show"),i.classList.add("show"),i.style.left="50vw",i.style.top="50vh"}))}),1),Object(c["setTimeout"])((function(){n.$emit("active"),n.isActive=!0,n.isAnimating=!1}),500)},hide:function(){var t=this;this.isAnimating=!0;var e=this.$refs.rippleContainer,n=this.$refs.realRipple,i=this.$refs.whole;n.classList.remove("show"),e.classList.remove("show"),e.style.left=this.position.x+"px",e.style.top=this.position.y+"px",document.body.style.overflowY="",Object(c["setTimeout"])((function(){e.style.display="none",t.isActive=!1,t.isAnimating=!1,i.style.display="none",t.$emit("close")}),500)}},watch:{ripple:function(t){console.log(t),!1===t&&this.hide()},showByDefault:function(t){t&&this.show(0,0)}}},u=l,d=(n("9fb9"),n("2877")),f=Object(d["a"])(u,r,a,!1,null,"337d182c",null),h=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"navbar-fixed"},[n("nav",[n("div",{staticClass:"nav-wrapper"},[n("a",{staticClass:"nav-item title anim",attrs:{href:"#home"}},[t._v("Dipsyland")]),t.windowWidth>600?n("div",{staticStyle:{display:"inherit"}},[n("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("About Me")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#works"}},[t._v("Works")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#blog"}},[t._v("Blog")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("Contact")])]):n("RippleFullScreen",{attrs:{ripple:t.ripple},on:{close:function(e){t.ripple=!0}}},[n("template",{slot:"outside"},[n("a",{staticClass:"nav-item anim",staticStyle:{display:"inherit"}},[t._v("menu")])]),n("template",{slot:"inside"},[n("div",{staticClass:"inner-links"},[n("a",{staticClass:"inner-link",attrs:{href:"#home"},on:{click:function(e){t.ripple=!1}}},[t._v("Home")]),n("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("About Me")]),n("a",{staticClass:"inner-link",attrs:{href:"#works"},on:{click:function(e){t.ripple=!1}}},[t._v("Works")]),n("a",{staticClass:"inner-link",attrs:{href:"#blog"},on:{click:function(e){t.ripple=!1}}},[t._v("Blog")]),n("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("Contact")])])])],2)],1)])])])},v=[],m={components:{RippleFullScreen:h},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize),t.onResize()}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{windowWidth:0,ripple:!0}},methods:{onResize:function(){this.windowWidth=window.innerWidth}}},g=m,w=(n("f5b4"),Object(d["a"])(g,p,v,!1,null,"52238097",null)),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{ref:"background",staticClass:"container"},[n("div",{ref:"sky",staticClass:"background sky"}),n("div",{ref:"cloud",staticClass:"background cloud",style:"margin-left: "+(5*t.x-t.w)+"px; bottom: "+(10*t.y-50)+"px;"}),n("div",{ref:"city",staticClass:"background city",style:"margin-left: "+(40*t.x-t.w)+"px; bottom: "+(50*t.y-50)+"px;"}),n("div",{ref:"grass",staticClass:"background grass",style:"margin-left: "+(80*t.x-t.w)+"px; bottom: "+(100*t.y-50)+"px;"})]),t._m(0)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float"},[n("h1",{staticClass:"title"},[t._v("Dipsyland")]),n("h6",{staticClass:"quote"},[t._v('"Not Lalaland nor Poland"')])])}],C={data:function(){return{x:0,y:0,w:0,h:0}},mounted:function(){window.onmousemove=this.mouseMove;var t=this.$refs.background,e=t.clientWidth,n=t.clientHeight;this.w=e,this.h=n},methods:{mouseMove:function(t){t.screenX;var e=t.screenY,n=this.$refs.background,i=n.clientWidth,s=n.clientHeight;this.y=-e/s/2,this.w=i,this.h=s}}},_=C,x=(n("13f7"),Object(d["a"])(_,k,b,!1,null,"c4b874b4",null)),L=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section photo",style:t.styled})},S=[],A={props:["src"],computed:{styled:function(){return"background-image: url(".concat(this.src,")")}}},O=A,E=(n("604e"),Object(d["a"])(O,$,S,!1,null,null,null)),T=E.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[t._m(0),n("div",{staticClass:"field"},[n("h1",[t._v("Dipsy Wong")]),n("h3",[t._v("Year4 BEng(COMP & MATH), HKUST")]),n("h5",[t._v("A random hacky programmer who loves making anything fun!")]),n("div",{staticClass:"links"},[n("SvgLink",{attrs:{href:"//www.facebook.com/FK.twf/",icon:"facebook",color:"#1877F2"}}),n("SvgLink",{attrs:{href:"//github.com/dipsywong98",icon:"github",color:"#181717"}}),n("SvgLink",{attrs:{href:"//www.linkedin.com/in/dipsywong/",icon:"linkedin",color:"0077B5"}}),n("SvgLink",{attrs:{href:"mailto:ycwongal@connect.ust.hk",icon:"gmail",color:"D14836"}}),n("SvgLink",{attrs:{href:"//www.youtube.com/user/FacebookArmyOffical",icon:"youtube",color:"#FF0000"}})],1)])])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"field"},[n("img",{attrs:{src:"/img/icon.png",width:"204px"}})])}],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{attrs:{href:t.href}},[n("img",{attrs:{width:"24px",height:"24px",src:"/svg/"+t.icon+".svg",alt:t.icon}})])])},P=[],M={props:["href","icon","color"]},R=M,F=Object(d["a"])(R,D,P,!1,null,null,null),N=F.exports,W={components:{SvgLink:N}},I=W,U=(n("297d"),Object(d["a"])(I,j,B,!1,null,"7ae68032",null)),H=U.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"top",staticClass:"card"},[n("div",{staticClass:"container"},[n("div",{staticClass:"my-work"},[n("h1",[t._v("My "+t._s(t.Category))]),n("div",{staticClass:"filter"},[n("div",{staticClass:"label"},[t._v("Filter:")]),n("ChipInput",{attrs:{availables:t.allTags},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),n("div",{staticClass:"works"},[t._l(t.works,(function(e){return n("Work",{key:e.title,attrs:{work:e,category:t.category},on:{tagClick:t.onTagClick}})})),n("div",{staticClass:"placeholder"}),n("div",{staticClass:"placeholder"})],2)])])])},q=[],z=(n("55dd"),n("6762"),n("2fdb"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rect shadow-hover",attrs:{id:encodeURIComponent(t.work.title)}},[n("RippleFullScreen",{attrs:{ripple:t.ripple,showByDefault:t.show},on:{animate:function(e){return t.onRippleAnimate()},active:function(e){return t.onRippleAnimate()},close:function(e){return t.onClose()}}},[n("template",{slot:"outside"},[n("div",{staticClass:"work-ripple-outside"},[n("h4",{staticClass:"title"},[t.work.titleLink?n("a",{staticClass:"title prevent-ripple-full-screen",attrs:{href:t.work.titleLink}},[t._v(t._s(t.work.title))]):n("a",{staticClass:"title"},[t._v(t._s(t.work.title))])]),n("small",{staticClass:"prevent-ripple-full-screen",on:{click:function(e){return t.onTagClick(t.work.time)}}},[n("i",[t._v(t._s(t.work.time))])]),n("p",{staticClass:"brief"},[t._v(t._s(t.work.brief))]),n("div",{staticClass:"tags"},t._l(t.work.tags,(function(e){return n("Tag",{key:e,staticClass:"prevent-ripple-full-screen",attrs:{tag:e},on:{click:function(n){return t.onTagClick(e)}}})})),1)])]),n("template",{slot:"inside"},[n("div",{staticClass:"work-ripple-inside"},[t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):n("div",{staticClass:"markdown"},[n("Markdown",{attrs:{source:t.story}})],1)])])],2),t.work.liveLink?n("div",{staticClass:"live-root"},[n("a",{staticClass:"live",attrs:{href:t.work.liveLink}},[n("div",{staticClass:"triangle"},[t._v(t._s(" "))]),n("div",{staticClass:"gradient"},[t._v(t._s(" "))]),n("div",{staticClass:"text"},[t._v("Live")])])]):t._e()],1)}),Y=[],J=n("acc5");J.twf="#2070e4";var G=J,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag",on:{click:t.onClick}},[t.tag in t.ghcolors?n("div",[n("span",{staticClass:"color",style:"background-color:"+t.ghcolors[t.tag]}),n("span",[t._v(t._s(t.tag))])]):n("div",[t._v(t._s(t.tag))])])},V=[],X={props:["tag"],data:function(){return{ghcolors:G}},methods:{onClick:function(){this.$emit("click")}}},Z=X,tt=(n("8678"),Object(d["a"])(Z,Q,V,!1,null,"f5765820",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-markdown",{ref:"md",attrs:{watches:["source","show","toc","story"],source:t.source}})},it=[],st=(n("ac6a"),n("6b54"),n("ac4d"),n("8a81"),n("456d"),n("c5f6"),n("d4cd")),ot=n.n(st),rt=n("362d"),at=n.n(rt),ct=n("54f6"),lt=n.n(ct),ut=n("7ba6"),dt=n.n(ut),ft=n("e6f9"),ht=n.n(ft),pt=n("ff97"),vt=n.n(pt),mt=n("5121"),gt=n.n(mt),wt=n("cf2b"),yt=n.n(wt),kt=n("4bb9"),bt=n.n(kt),Ct=n("33db"),_t=n.n(Ct),xt=n("be03"),Lt=n.n(xt),$t=n("65ab"),St=n.n($t),At={md:(new ot.a).use(St.a),template:"<div><slot></slot></div>",data:function(){return{sourceData:this.source}},props:{watches:{type:Array,default:function(){return["source","show","toc"]}},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:function(){return{}}},prerender:{type:Function,default:function(t){return t}},postrender:{type:Function,default:function(t){return t}}},computed:{tocLastLevelComputed:function(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render:function(t){var e=this;this.md=(new ot.a).use(St.a).use(lt.a).use(dt.a).use(ht.a).use(vt.a).use(gt.a).use(yt.a).use(bt.a).use(Lt.a,{enabled:this.taskLists}),this.emoji&&this.md.use(at.a),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=function(){return'<table class="'.concat(e.tableClass,'">\n')};var n=this.md.renderer.rules.link_open||function(t,e,n,i,s){return s.renderToken(t,e,n)};this.md.renderer.rules.link_open=function(t,i,s,o,r){return Object.keys(e.anchorAttributes).map((function(n){var s=t[i].attrIndex(n),o=e.anchorAttributes[n];s<0?t[i].attrPush([n,o]):t[i].attrs[s][1]=o})),n(t,i,s,o,r)},this.toc&&this.md.use(_t.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:function(t,n,i){i&&(e.tocId&&document.getElementById(e.tocId)&&(document.getElementById(e.tocId).innerHTML=i),e.$emit("toc-rendered",i))}});var i=this.show?this.md.render(this.prerender(this.sourceData)):"";return i=this.postrender(i),this.$emit("rendered",i),t("div",{domProps:{innerHTML:i}})},beforeMount:function(){var t=this;if(this.$slots.default){this.sourceData="";var e=!0,n=!1,i=void 0;try{for(var s,o=this.$slots.default[Symbol.iterator]();!(e=(s=o.next()).done);e=!0){var r=s.value;this.sourceData+=r.text}}catch(a){n=!0,i=a}finally{try{e||null==o.return||o.return()}finally{if(n)throw i}}}this.$watch("source",(function(){t.sourceData=t.prerender(t.source),t.$forceUpdate()})),this.watches.forEach((function(e){t.$watch(e,(function(){t.$forceUpdate()}))}))}},Ot=function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},Et=Ot,Tt={components:{VueMarkdown:At},props:["source"],mounted:function(){var t=function(t){t.addEventListener("click",(function(){window.getSelection().toString()||Et(t.innerText)}))};this.$refs.md.$el.querySelectorAll("pre").forEach(t),this.$refs.md.$el.querySelectorAll("code").forEach(t),Prism.highlightAll()}},jt=Tt,Bt=(n("23cb"),Object(d["a"])(jt,nt,it,!1,null,null,null)),Dt=Bt.exports,Pt={components:{Tag:et,RippleFullScreen:h,Markdown:Dt},props:["work","category"],mounted:function(){window.location.hash==="#".concat(encodeURIComponent(this.work.title))&&(this.show=!0)},data:function(){return{ghcolors:G,story:"",loading:!1,show:!1}},computed:{ripple:function(){return"story"in this.work}},methods:{onTagClick:function(t){this.$emit("tagClick",t)},onRippleAnimate:function(){var t=this,e="".concat(this.work.title," | ").concat(this.category," - Dipsyland");document.title=e,window.history.pushState("",e,"#".concat(encodeURIComponent(this.work.title))),"story"in this.work&&""===this.story&&(this.loading=!0,"string"===typeof this.work.story?fetch(this.work.story).then((function(t){return t.text()})).then((function(e){return t.story=e})).finally((function(){return t.loading=!1})):fetch("/".concat(this.category,"/").concat(this.work.title,".md")).then((function(t){return t.text()})).then((function(e){return t.story=e})).finally((function(){return t.loading=!1})))},onClose:function(){var t="Dipsyland";document.title=t,window.history.pushState("",t,"/")}}},Mt=Pt,Rt=(n("7321"),Object(d["a"])(Mt,z,Y,!1,null,null,null)),Ft=Rt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-root"},[n("div",{class:"input-field-root "+(t.isShowingAuto&&"auto")+" "+(t.active&&"active")+" shadow-hover"},[t._l(t.chips,(function(e){return n("Tag",{key:e,attrs:{tag:e},on:{click:function(){return t.onChipClick(e)}}})})),n("label",{staticClass:"input-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",domProps:{value:t.input},on:{blur:t.onBlur,focus:function(e){t.active=!0},input:[function(e){e.target.composing||(t.input=e.target.value)},t.onType],keydown:t.onKey}})])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowingAuto,expression:"isShowingAuto"}],staticClass:"autofill-root"},[n("div",{ref:"items",staticClass:"autofill-container"},t._l(t.suggestions,(function(e,i){return n("div",{class:"autofill-item "+(i===t.cursor&&"active"),on:{mousedown:function(t){return t.preventDefault()},click:function(n){return t.trimAndMoveChip(e)}}},[t._v(t._s(e)+" ")])})),0)])])},Wt=[],It=(n("4917"),n("3b2b"),{props:["availables","value"],components:{Tag:et},data:function(){return{input:"",chips:this.value,cursor:0,active:!1}},computed:{suggestions:function(){var t=this;if(""===this.input)return this.availables;var e=new RegExp("^".concat(this.input.toLowerCase()));return this.availables.filter((function(t){return t.toLowerCase().match(e)})).filter((function(e){return!t.chips.includes(e)}))},isShowingAuto:function(){return this.active&&this.suggestions.length>0}},methods:{onType:function(){","===this.input[this.input.length-1]&&this.trimAndMoveChip(this.input)},onChipClick:function(t){while(1){var e=this.chips.indexOf(t);if(-1===e)break;this.chips.splice(e,1)}this.$refs.input.focus()},onKey:function(t){switch(t.keyCode){case 13:this.suggestions.length>this.cursor?this.trimAndMoveChip(this.suggestions[this.cursor]):this.trimAndMoveChip(this.input);break;case 8:""===this.input&&this.chips.pop();break;case 38:this.cursor=(this.cursor-1+this.suggestions.length)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case 40:this.cursor=(this.cursor+1)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break}},onBlur:function(){this.active=!1},trimAndMoveChip:function(t){var e=t.match(/^(.+)[\s,]*$/g)[0];-1===this.chips.indexOf(e)&&this.chips.push(e),this.input="",this.cursor=0,this.$refs.input.focus()}},watch:{chips:function(){this.$emit("input",this.chips)},value:function(t,e){var n=this;e.forEach((function(t){-1===n.chips.indexOf(t)&&n.chips.push(t)}))}}}),Ut=It,Ht=(n("57a6"),Object(d["a"])(Ut,Nt,Wt,!1,null,null,null)),Kt=Ht.exports,qt=(n("96cf"),n("3b8d")),zt=n("651e"),Yt=function(){var t=Object(qt["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="/".concat(e,".yml"),t.t0=e,t.next="works"===t.t0?4:"blog"===t.t0?6:8;break;case 4:return n="https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download",t.abrupt("break",8);case 6:return n="https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download",t.abrupt("break",8);case 8:return t.next=10,fetch(n).then((function(t){return t.text()})).then((function(t){return zt.safeLoad(t,"utf8")}));case 10:return t.abrupt("return",t.sent);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Jt=(n("28a5"),function(){var t=window.location.hash;if(t.length){var e=t.split("#")[1],n=document.getElementById("content"),i=document.getElementById(e);n&&i&&(n.scrollTop=i.getBoundingClientRect().top-n.getBoundingClientRect().top)}}),Gt=Jt,Qt={components:{Work:Ft,ChipInput:Kt},props:["category"],mounted:function(){var t=this;Yt(this.category).then((function(e){return t.allWorks=e})).then((function(){t.$nextTick((function(){Gt()}))}))},computed:{works:function(){var t=this;return 0===this.filters.length?this.allWorks:this.allWorks.filter((function(e){var n=e.tags,i=e.time,s=e.title,o=(n||[]).concat([i,s]);return t.filters.filter((function(t){return o.includes(t)})).length===t.filters.length}))},allTags:function(){return this.allWorks.map((function(t){var e=t.title,n=t.time,i=t.tags;return(i||[]).concat(n,e)})).flat().filter((function(t){return"undefined"!==typeof t})).sort().filter((function(t,e,n){return t&&n.indexOf(t)===e}))},Category:function(){return this.category[0].toUpperCase()+this.category.substring(1)}},data:function(){return{filters:[],allWorks:[]}},methods:{onTagClick:function(t){this.filters.includes(t)||(this.filters.push(t),this.$refs.top.scrollIntoView())}}},Vt=Qt,Xt=(n("b3f1"),Object(d["a"])(Vt,K,q,!1,null,"137ffc44",null)),Zt=Xt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-item"},[t._v("Make with love by Dipsy, Copyright© 2020 All Right Reserved")]),n("div",{staticClass:"footer-item"},[n("a",{attrs:{href:"https://github.com/dipsywong98/dipsywong98.github.io"}},[n("div",[t._v("Last Update: "+t._s(t.lastTime))]),n("div",[t._v(t._s(t.lastMessage))])])])])])},ee=[],ne={mounted:function(){var t=this;fetch("https://api.github.com/repositories/167823230/commits/dev").then((function(t){return t.json()})).then((function(e){t.lastTime=e.commit.author.date+" ",t.lastMessage=e.commit.message}))},data:function(){return{lastMessage:"",lastTime:""}}},ie=ne,se=(n("53d7"),Object(d["a"])(ie,te,ee,!1,null,null,null)),oe=se.exports,re=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sorter-root"},[n("div",{staticClass:"container"},[n("table",[t._m(0),t._l(t.works,(function(e){return n("tr",{staticClass:"sorter-item",on:{mousedown:function(n){return t.onDown(n,e)},mousemove:function(n){return t.onHover(n,e)}}},[n("td",[t._v("m")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"work.title"}],domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"work.time"}],domProps:{value:e.time},on:{input:function(n){n.target.composing||t.$set(e,"time",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.favorite,expression:"work.favorite"}],staticClass:"digit",attrs:{type:"number"},domProps:{value:e.favorite},on:{input:function(n){n.target.composing||t.$set(e,"favorite",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.brief,expression:"work.brief"}],domProps:{value:e.brief},on:{input:function(n){n.target.composing||t.$set(e,"brief",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.titleLink,expression:"work.titleLink"}],domProps:{value:e.titleLink},on:{input:function(n){n.target.composing||t.$set(e,"titleLink",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.liveLink,expression:"work.liveLink"}],domProps:{value:e.liveLink},on:{input:function(n){n.target.composing||t.$set(e,"liveLink",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tags,expression:"work.tags"}],domProps:{value:e.tags},on:{input:function(n){n.target.composing||t.$set(e,"tags",n.target.value)}}})])])}))],2),n("textarea",{domProps:{value:t.yml}})])])},ae=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td"),n("td",[t._v("title")]),n("td",[t._v("time")]),n("td",[t._v("f")]),n("td",[t._v("brief")]),n("td",[t._v("titleLink")]),n("td",[t._v("liveLink")]),n("td",[t._v("tags")])])}],ce=n("651e"),le={props:["category"],data:function(){return{works:[],down:!1,hover:!1,x:0,y:0}},computed:{yml:function(){return Object(ce["safeDump"])(this.works)}},mounted:function(){var t=this;Yt(this.category).then((function(e){return t.works=e})),window.addEventListener("mouseup",this.onUp)},beforeDestroy:function(){window.removeEventListener("mouseup",this.onUp)},methods:{onDown:function(t,e){this.down=e},onUp:function(){this.down&&this.hover&&this.swap(this.works,this.down,this.hover),this.down=!1,this.hover=!1},onHover:function(t,e){this.down&&this.swap(this.works,this.down,e)},swap:function(t,e,n){t.forEach((function(i,s){i===e?t[s]=n:i===n&&(t[s]=e)})),this.works=t.concat([])}}},ue=le,de=(n("658d"),Object(d["a"])(ue,re,ae,!1,null,null,null)),fe=de.exports,he={name:"app",components:{RippleFullScreen:h,NavBar:y,Dipsyland:L,PhotoBanner:T,NameCard:H,Works:Zt,Sorter:fe,Footer:oe},data:function(){return{rx:0}},methods:{handleScroll:function(){this.rx=Math.min(window.scrollY/this.$refs.ctn.clientHeight*110,110)}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},pe=he,ve=(n("5c0b"),Object(d["a"])(pe,s,o,!1,null,null,null)),me=ve.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(me)}}).$mount("#app")},"57a6":function(t,e,n){"use strict";var i=n("1891"),s=n.n(i);s.a},"5bfa":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),s=n.n(i);s.a},"604e":function(t,e,n){"use strict";var i=n("2607"),s=n.n(i);s.a},6360:function(t,e,n){},"658d":function(t,e,n){"use strict";var i=n("6d73"),s=n.n(i);s.a},"6d73":function(t,e,n){},7321:function(t,e,n){"use strict";var i=n("1fbc"),s=n.n(i);s.a},8050:function(t,e,n){},"85ef":function(t,e,n){},8678:function(t,e,n){"use strict";var i=n("abb6"),s=n.n(i);s.a},"9c0c":function(t,e,n){},"9fb9":function(t,e,n){"use strict";var i=n("8050"),s=n.n(i);s.a},abb6:function(t,e,n){},b3f1:function(t,e,n){"use strict";var i=n("fa9d"),s=n.n(i);s.a},f539:function(t,e,n){},f5b4:function(t,e,n){"use strict";var i=n("5bfa"),s=n.n(i);s.a},fa9d:function(t,e,n){}});
//# sourceMappingURL=app.431c5cbc.js.map