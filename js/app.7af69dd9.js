(function(t){function e(e){for(var i,r,a=e[0],c=e[1],l=e[2],d=0,f=[];d<a.length;d++)r=a[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},s={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f7":function(t,e,n){},"02c4":function(t,e,n){},"0fb9":function(t,e,n){"use strict";n("251b")},1891:function(t,e,n){},"1a84":function(t,e,n){"use strict";n("3c6a")},"1fbc":function(t,e,n){},"23cbe":function(t,e,n){"use strict";n("6360")},"251b":function(t,e,n){},2607:function(t,e,n){},2742:function(t,e,n){"use strict";n("02c4")},"370e":function(t,e,n){},"3c6a":function(t,e,n){},"53d7":function(t,e,n){"use strict";n("01f7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),s=n("2f62"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"ctn",attrs:{id:"app"}},[n("Poptip"),n("div",{attrs:{id:"head"}},[n("NavBar")],1),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"dipsyland"}},[n("Dipsyland",{attrs:{id:"home"}})],1),n("PhotoBanner",{attrs:{src:"/img/banners/game.jpg"}}),n("div",{attrs:{id:"about"}}),n("NameCard"),n("PhotoBanner",{attrs:{src:"/img/banners/oscon.jpg"}}),n("div",{attrs:{id:"works"}}),n("Works",{attrs:{category:"works","default-filters":["featured"]}}),n("PhotoBanner",{attrs:{src:"/img/banners/success.JPG"}}),n("div",{attrs:{id:"blog"}}),n("Works",{attrs:{category:"blog"}}),n("Footer")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"frame",class:"frame "+(!t.ripple&&"disabled"),on:{click:t.toggle}},[n("div",{ref:"text",staticClass:"text",on:{click:t.toggle}},[t._t("outside"),n("div",{ref:"whole",staticClass:"whole"},[n("div",{class:"content anim "+(!t.isAnimating&&t.isActive?"show":"")},[t._t("inside"),n("div",{staticClass:"close",on:{click:t.hide}},[t._v("x")])],2),n("div",{ref:"rippleContainer",staticClass:"rippleContainer anim"},[n("div",{ref:"realRipple",staticClass:"realRipple anim"})])])],2)])},c=[],l=(n("d81d"),n("4de4"),{props:{ripple:{default:!0},showByDefault:{default:!1}},data:function(){return{position:{},isActive:!1,isAnimating:!1}},mounted:function(){var t=this.$refs.rippleContainer,e=this.$refs.whole;t.style.display="none",window.addEventListener("keydown",this.onKeyDown),e.style.display="none",this.isActive=this.showByDefault},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)},methods:{onKeyDown:function(t){var e=t.key;"Escape"===e&&this.hide()},toggle:function(t){if(!this.ripple)return!1;var e=t.composedPath().map((function(t){return t.classList})).filter((function(t){return!!t})).map((function(t){return t.contains("prevent-ripple-full-screen")})).reduce((function(t,e){return t||e}),!1);if(e)return!1;var n=t.clientX,i=t.clientY;this.isAnimating||this.isActive||this.show(n,i)},show:function(t,e){var n=this;this.isAnimating=!0,this.$emit("animate");var i=this.$refs.rippleContainer,s=this.$refs.realRipple,o=this.$refs.whole;this.position.x=t,this.position.y=e,o.style.display="",i.style.left=this.position.x+"px",i.style.top=this.position.y+"px",i.style.display="",document.body.style.overflowY="hidden",setTimeout((function(){n.$nextTick((function(){s.classList.add("show"),i.classList.add("show"),i.style.left="50vw",i.style.top="50vh"}))}),1),setTimeout((function(){n.$emit("active"),n.isActive=!0,n.isAnimating=!1}),500)},hide:function(){var t=this;this.isAnimating=!0;var e=this.$refs.rippleContainer,n=this.$refs.realRipple,i=this.$refs.whole;n.classList.remove("show"),e.classList.remove("show"),e.style.left=this.position.x+"px",e.style.top=this.position.y+"px",document.body.style.overflowY="",setTimeout((function(){e.style.display="none",t.isActive=!1,t.isAnimating=!1,i.style.display="none",t.$emit("close")}),500)}},watch:{ripple:function(t){!1===t&&this.hide()},showByDefault:function(t){t&&this.show(0,0)}}}),u=l,d=(n("982f"),n("2877")),f=Object(d["a"])(u,a,c,!1,null,"48deac9c",null),h=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"navbar-fixed"},[n("nav",[n("div",{staticClass:"nav-wrapper"},[n("a",{staticClass:"nav-item title anim",attrs:{href:"#home"}},[t._v("Dipsyland")]),t.windowWidth>600?n("div",{staticStyle:{display:"inherit"}},[n("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("About Me")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#works"}},[t._v("Works")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#blog"}},[t._v("Blog")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("Contact")])]):n("RippleFullScreen",{attrs:{ripple:t.ripple},on:{close:function(e){t.ripple=!0}}},[n("template",{slot:"outside"},[n("a",{staticClass:"nav-item anim",staticStyle:{display:"inherit"}},[t._v("menu")])]),n("template",{slot:"inside"},[n("div",{staticClass:"inner-links"},[n("a",{staticClass:"inner-link",attrs:{href:"#home"},on:{click:function(e){t.ripple=!1}}},[t._v("Home")]),n("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("About Me")]),n("a",{staticClass:"inner-link",attrs:{href:"#works"},on:{click:function(e){t.ripple=!1}}},[t._v("Works")]),n("a",{staticClass:"inner-link",attrs:{href:"#blog"},on:{click:function(e){t.ripple=!1}}},[t._v("Blog")]),n("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("Contact")])])])],2)],1)])])])},m=[],v={components:{RippleFullScreen:h},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize),t.onResize()}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{windowWidth:0,ripple:!0}},methods:{onResize:function(){this.windowWidth=window.innerWidth}}},g=v,w=(n("2742"),Object(d["a"])(g,p,m,!1,null,"2efc59b8",null)),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{ref:"background",staticClass:"container"},[n("div",{ref:"sky",staticClass:"background sky"}),n("div",{ref:"cloud",staticClass:"background cloud",style:"margin-left: "+(5*t.x-t.w)+"px; bottom: "+(10*t.y-50)+"px;"}),n("div",{ref:"city",staticClass:"background city",style:"margin-left: "+(40*t.x-t.w)+"px; bottom: "+(50*t.y-50)+"px;"}),n("div",{ref:"grass",staticClass:"background grass",style:"margin-left: "+(80*t.x-t.w)+"px; bottom: "+(100*t.y-50)+"px;"})]),t._m(0)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float"},[n("h1",{staticClass:"title"},[t._v("Dipsyland")]),n("h6",{staticClass:"quote"},[t._v('"Not Lalaland nor Poland"')])])}],C={data:function(){return{x:0,y:0,w:0,h:0}},mounted:function(){window.onmousemove=this.mouseMove;var t=this.$refs.background,e=t.clientWidth,n=t.clientHeight;this.w=e,this.h=n},methods:{mouseMove:function(t){t.screenX;var e=t.screenY,n=this.$refs.background,i=n.clientWidth,s=n.clientHeight;this.y=-e/s/2,this.w=i,this.h=s}}},_=C,x=(n("7663"),Object(d["a"])(_,k,b,!1,null,"491addf8",null)),L=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section photo",style:t.styled})},T=[],S={props:["src"],computed:{styled:function(){return"background-image: url(".concat(this.src,")")}}},A=S,E=(n("604e"),Object(d["a"])(A,$,T,!1,null,null,null)),O=E.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"field"},[n("img",{attrs:{src:t.my.icon,width:"204px"}})]),n("div",{staticClass:"field"},[n("h1",[t._v(t._s(t.my.name))]),n("h3",[t._v(t._s(t.my.position))]),n("h5",[t._v(t._s(t.my.tagLine))]),n("div",{staticClass:"links"},t._l(t.my.media,(function(t){return n("SvgLink",{key:t.title,attrs:{href:t.href,icon:t.icon,color:t.color,title:t.title}})})),1)])])},M=[],B=n("1da1"),D=(n("96cf"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Tooltip",{attrs:{title:t.title}},[n("a",{attrs:{href:t.href}},[n("img",{attrs:{width:"32px",height:"32px",src:"/svg/"+t.icon+".svg",alt:t.icon}})])])}),P=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tooltip-root",on:{mouseover:function(e){return t.onMouseIn()},mouseleave:function(e){return t.onMouseOut()}}},[n("div",{staticClass:"title",style:"opacity: "+(t.show&&t.title?1:0)},[t._v(t._s(t.title))]),t._t("default")],2)},N=[],I={props:["title","alwaysShow"],data:function(){return{show:this.alwaysShow||!1}},methods:{onMouseIn:function(){this.title&&(this.show=!0)},onMouseOut:function(){this.show=this.alwaysShow||!1}}},W=I,F=(n("0fb9"),Object(d["a"])(W,R,N,!1,null,null,null)),U=F.exports,H={props:["href","icon","color","title"],components:{Tooltip:U}},q=H,z=Object(d["a"])(q,D,P,!1,null,null,null),K=z.exports,Y=n("e2c1"),Q=n("5530"),G=(n("d3b7"),function(t,e){return fetch(t,Object(Q["a"])(Object(Q["a"])({},e),{},{cache:"no-cache"}))}),J={components:{SvgLink:K},beforeCreate:function(){var t=this;return Object(B["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=Y["default"],e.next=3,G("https://hackmd.io/ux_QXxWNTbetEKqOgRSQSA/download");case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,t.my=e.t0.load.call(e.t0,e.t1);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{my:{media:[]}}}},X=J,V=(n("eb00"),Object(d["a"])(X,j,M,!1,null,"46af7d12",null)),Z=V.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"top",staticClass:"card"},[n("div",{staticClass:"container"},[n("div",{staticClass:"my-work"},[n("h1",[t._v("My "+t._s(t.Category))]),n("div",{staticClass:"description",on:{click:t.onDescriptionClick}},[n("Markdown",{attrs:{source:t.meta?t.meta.description:""}})],1),n("div",{staticClass:"filter"},[n("div",{staticClass:"label"},[t._v("Filter:")]),n("ChipInput",{attrs:{availables:t.allTags},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),n("div",{staticClass:"works"},[t._l(t.works,(function(e){return n("Work",{key:e.title,attrs:{work:e,category:t.category},on:{tagClick:t.onTagClick}})})),n("div",{staticClass:"placeholder"}),n("div",{staticClass:"placeholder"})],2)])])])},et=[],nt=(n("7db0"),n("99af"),n("caad"),n("2532"),n("0481"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rect shadow-hover",attrs:{id:encodeURIComponent(t.work.title)}},[n("RippleFullScreen",{attrs:{ripple:t.ripple,showByDefault:t.show},on:{animate:function(e){return t.onRippleAnimate()},active:function(e){return t.onRippleAnimate()},close:function(e){return t.onClose()}}},[n("template",{slot:"outside"},[n("div",{staticClass:"work-ripple-outside"},[n("h4",{staticClass:"title"},[t.work.titleLink?n("a",{staticClass:"title prevent-ripple-full-screen",attrs:{href:t.work.titleLink}},[t._v(t._s(t.work.title))]):n("a",{staticClass:"title"},[t._v(t._s(t.work.title))])]),n("small",{staticClass:"prevent-ripple-full-screen",on:{click:function(e){return t.onTagClick(t.work.time)}}},[n("i",[t._v(t._s(t.work.time))])]),n("div",{staticClass:"brief"},[n("span",[t._v(t._s((t.work.brief||"")+" "))]),t.showMore?n("a",{staticClass:"title",on:{click:function(e){return t.onMoreClick()}}},[t._v("more")]):t._e()]),n("div",{staticClass:"tags"},t._l(t.work.tags,(function(e){return n("Tag",{key:e,staticClass:"prevent-ripple-full-screen",attrs:{tag:e},on:{click:function(n){return t.onTagClick(e)}}})})),1)])]),n("template",{slot:"inside"},[n("div",{staticClass:"work-ripple-inside"},[t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):n("div",{staticClass:"markdown"},[n("Markdown",{attrs:{source:t.story}})],1)])])],2),t.work.liveLink?n("div",{staticClass:"live-root"},[n("a",{staticClass:"live",attrs:{href:t.work.liveLink}},[n("div",{staticClass:"triangle"},[t._v(t._s(" "))]),n("div",{staticClass:"gradient"},[t._v(t._s(" "))]),n("div",{staticClass:"text"},[t._v("Live")])])]):t._e()],1)}),it=[],st=(n("ac1f"),n("5319"),n("acc5"));st.twf="#2070e4";var ot=st,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"tag",on:{click:t.onClick}},[t._tag in t.ghcolors?n("div",[n("span",{staticClass:"color",style:"background-color:"+t.ghcolors[t._tag]}),n("span",[t._v(t._s(t._tag))])]):n("div",[t._v(t._s(t._tag))])])},at=[],ct={props:["tag"],computed:{_tag:function(){return this.tag||this.$slots.default[0].text}},data:function(){return{ghcolors:ot}},methods:{onClick:function(){this.$emit("click")}}},lt=ct,ut=(n("7f24"),Object(d["a"])(lt,rt,at,!1,null,"42e46ccd",null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-markdown",{ref:"md",staticClass:"markdown",attrs:{watches:["source","show","toc","story"],source:t.source}})},ht=[],pt=(n("25f0"),n("159b"),n("b85c")),mt=(n("a9e3"),n("b64b"),n("d4cd")),vt=n.n(mt),gt=n("362d"),wt=n.n(gt),yt=n("54f6"),kt=n.n(yt),bt=n("7ba6"),Ct=n.n(bt),_t=n("e6f9"),xt=n.n(_t),Lt=n("ff97"),$t=n.n(Lt),Tt=n("5121"),St=n.n(Tt),At=n("cf2b"),Et=n.n(At),Ot=n("4bb9"),jt=n.n(Ot),Mt=n("33db"),Bt=n.n(Mt),Dt=n("be03"),Pt=n.n(Dt),Rt=n("65ab"),Nt=n.n(Rt),It=n("746a"),Wt=n.n(It),Ft={md:(new vt.a).use(Nt.a),template:"<div><slot></slot></div>",data:function(){return{sourceData:this.source}},props:{watches:{type:Array,default:function(){return["source","show","toc"]}},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:function(){return{}}},prerender:{type:Function,default:function(t){return t}},postrender:{type:Function,default:function(t){return t}}},computed:{tocLastLevelComputed:function(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render:function(t){var e=this;this.md=(new vt.a).use(Nt.a).use(kt.a).use(Ct.a).use(xt.a).use($t.a).use(St.a).use(Et.a).use(jt.a).use(Pt.a,{enabled:this.taskLists}).use(Wt.a,"success").use(Wt.a,"info").use(Wt.a,"warning").use(Wt.a,"danger").use(n("746a"),"spoiler",{render:function(t,n){var i=t[n];return"container_spoiler_open"===i.type?"<details><summary>"+e.md.utils.escapeHtml(i.info)+"</summary>\n":"container_spoiler_close"===i.type?"</details>\n":""}}),this.emoji&&this.md.use(wt.a),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=function(){return'<table class="'.concat(e.tableClass,'">\n')};var i=this.md.renderer.rules.link_open||function(t,e,n,i,s){return s.renderToken(t,e,n)};this.md.renderer.rules.link_open=function(t,n,s,o,r){return Object.keys(e.anchorAttributes).map((function(i){var s=t[n].attrIndex(i),o=e.anchorAttributes[i];s<0?t[n].attrPush([i,o]):t[n].attrs[s][1]=o})),i(t,n,s,o,r)},this.toc&&this.md.use(Bt.a,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:function(t,n,i){i&&(e.tocId&&document.getElementById(e.tocId)&&(document.getElementById(e.tocId).innerHTML=i),e.$emit("toc-rendered",i))}});var s=this.show?this.md.render(this.prerender(this.sourceData)):"";return s=this.postrender(s),this.$emit("rendered",s),t("div",{domProps:{innerHTML:s}})},beforeMount:function(){var t=this;if(this.$slots.default){this.sourceData="";var e,n=Object(pt["a"])(this.$slots.default);try{for(n.s();!(e=n.n()).done;){var i=e.value;this.sourceData+=i.text}}catch(s){n.e(s)}finally{n.f()}}this.$watch("source",(function(){t.sourceData=t.prerender(t.source),t.$forceUpdate()})),this.watches.forEach((function(e){t.$watch(e,(function(){t.$forceUpdate()}))}))}},Ut=function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},Ht=Ut,qt={components:{VueMarkdown:Ft},props:["source"],mounted:function(){var t=this,e=function(e){e.addEventListener("click",(function(){window.getSelection().toString()||(Ht(e.innerText),t.$store.commit("popText","copied!"))}))};this.$refs.md.$el.querySelectorAll("pre").forEach(e),this.$refs.md.$el.querySelectorAll("code").forEach(e),Prism.highlightAll()}},zt=qt,Kt=(n("23cbe"),Object(d["a"])(zt,ft,ht,!1,null,null,null)),Yt=Kt.exports,Qt={components:{Tag:dt,RippleFullScreen:h,Markdown:Yt},props:["work","category"],mounted:function(){window.location.hash==="#".concat(encodeURIComponent(this.work.title))&&(this.show=!0)},data:function(){return{ghcolors:ot,story:"",loading:!1,show:!1,ripple:"story"in this.work&&!("more"in this.work)}},computed:{showMore:function(){return"story"in this.work&&"more"in this.work}},methods:{onTagClick:function(t){this.$emit("tagClick",t)},onRippleAnimate:function(){var t=this,e="".concat(this.work.title," | ").concat(this.category," - Dipsyland");document.title=e,window.history.pushState("",e,"#".concat(encodeURIComponent(this.work.title))),"story"in this.work&&(this.loading=!0,"string"===typeof this.work.story?G(this.work.story).then((function(t){return t.text()})).then((function(e){return t.story=e.replace(/^---(\n.*?)*?---/gm,"")})).finally((function(){return t.loading=!1})):G("/".concat(this.category,"/").concat(this.work.title,".md")).then((function(t){return t.text()})).then((function(e){return t.story=e})).finally((function(){return t.loading=!1})))},onClose:function(){var t="Dipsyland";document.title=t,window.history.pushState("",t,"/"),"more"in this.work&&(this.ripple=!1)},onMoreClick:function(){this.ripple=!0}}},Gt=Qt,Jt=(n("7321"),Object(d["a"])(Gt,nt,it,!1,null,null,null)),Xt=Jt.exports,Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-root"},[n("div",{class:"input-field-root "+(t.isShowingAuto&&"auto")+" "+(t.active&&"active")+" shadow-hover"},[t._l(t.chips,(function(e){return n("Tag",{key:e,attrs:{tag:e},on:{click:function(){return t.onChipClick(e)}}})})),n("label",{staticClass:"input-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",domProps:{value:t.input},on:{blur:t.onBlur,focus:function(e){t.active=!0},input:[function(e){e.target.composing||(t.input=e.target.value)},t.onType],keydown:t.onKey}})])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowingAuto,expression:"isShowingAuto"}],staticClass:"autofill-root"},[n("div",{ref:"items",staticClass:"autofill-container"},t._l(t.suggestions,(function(e,i){return n("div",{class:"autofill-item "+(i===t.cursor&&"active"),on:{mousedown:function(t){return t.preventDefault()},click:function(n){return t.trimAndMoveChip(e)}}},[t._v(t._s(e)+" ")])})),0)])])},Zt=[],te=(n("4d63"),n("466d"),{props:["availables","value"],components:{Tag:dt},data:function(){return{input:"",chips:this.value,cursor:0,active:!1}},computed:{suggestions:function(){var t=this;if(""===this.input)return this.availables;var e=new RegExp("^".concat(this.input.toLowerCase()));return this.availables.filter((function(t){return t.toLowerCase().match(e)})).filter((function(e){return!t.chips.includes(e)}))},isShowingAuto:function(){return this.active&&this.suggestions.length>0}},methods:{onType:function(){","===this.input[this.input.length-1]&&this.trimAndMoveChip(this.input)},onChipClick:function(t){while(1){var e=this.chips.indexOf(t);if(-1===e)break;this.chips.splice(e,1)}this.$refs.input.focus()},onKey:function(t){switch(t.key){case"Enter":this.suggestions.length>this.cursor?this.trimAndMoveChip(this.suggestions[this.cursor]):this.trimAndMoveChip(this.input);break;case"Backspace":""===this.input&&this.chips.pop();break;case"ArrowUp":this.cursor=(this.cursor-1+this.suggestions.length)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case"ArrowDown":this.cursor=(this.cursor+1)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case"Escape":this.$refs.input.blur()}},onBlur:function(){this.active=!1},trimAndMoveChip:function(t){var e=t.match(/^(.+)[\s,]*$/g)[0];-1===this.chips.indexOf(e)&&this.chips.push(e),this.input="",this.cursor=0,this.$refs.input.focus()}},watch:{chips:function(){this.$emit("input",this.chips)},value:function(t,e){var n=this;e.forEach((function(t){-1===n.chips.indexOf(t)&&n.chips.push(t)}))}}}),ee=te,ne=(n("57a6"),Object(d["a"])(ee,Vt,Zt,!1,null,null,null)),ie=ne.exports,se=n("e2c1"),oe=function(){var t=Object(B["a"])(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="/".concat(e,".yml"),t.t0=e,t.next="works"===t.t0?4:"blog"===t.t0?6:8;break;case 4:return n="https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download",t.abrupt("break",8);case 6:return n="https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download",t.abrupt("break",8);case 8:return i={method:"GET",cache:"no-cache"},t.next=11,G(n,i).then((function(t){return t.text()})).then((function(t){return se.load(t,"utf8")}));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),re=(n("1276"),function(){var t=window.location.hash;if(t.length){var e=t.split("#")[1],n=document.getElementById("content"),i=document.getElementById(e);n&&i&&(n.scrollTop=i.getBoundingClientRect().top-n.getBoundingClientRect().top)}}),ae=re,ce={components:{Markdown:Yt,Work:Xt,ChipInput:ie,Tag:dt},props:{category:String,defaultFilters:{type:Array,default:function(){return[]}}},mounted:function(){var t=this;oe(this.category).then((function(e){t.allWorks=e.filter((function(t){var e=t.meta;return!e})),t.meta=e.find((function(t){var e=t.meta;return e}))})).then((function(){t.$nextTick((function(){ae()}))}))},computed:{works:function(){var t=this;return 0===this.filters.length?this.allWorks:this.allWorks.filter((function(e){var n=e.tags,i=e.time,s=e.title,o=(n||[]).concat([i,s]).filter((function(t){return t})).map((function(t){return t.toLowerCase()}));return t.filters.filter((function(t){return o.includes(t.toLowerCase())})).length===t.filters.length}))},allTags:function(){return this.allWorks.map((function(t){var e=t.title,n=t.time,i=t.tags;return(i||[]).concat(n,e)})).flat().filter((function(t){return"undefined"!==typeof t})).sort().filter((function(t,e,n){return t&&n.indexOf(t)===e}))},Category:function(){return this.category[0].toUpperCase()+this.category.substring(1)}},data:function(){return{filters:this.defaultFilters,allWorks:[],meta:void 0}},methods:{onTagClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&this.filters.splice(0,this.filters.length),t&&!this.filters.includes(t)&&(this.filters.push(t),this.$refs.top.scrollIntoView())},onDescriptionClick:function(t){if(t.path.map((function(t){return t.tagName})).includes("A")){var e=t.target.innerText;"all"!==e?this.onTagClick(e,!0):this.onTagClick(!1,!0)}}}},le=ce,ue=(n("6ced"),Object(d["a"])(le,tt,et,!1,null,"5739a006",null)),de=ue.exports,fe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-item"},[t._v("Make with love by Dipsy, Copyright© 2021 All Right Reserved")]),n("div",{staticClass:"footer-item"},[n("a",{attrs:{href:"https://github.com/dipsywong98/dipsywong98.github.io"}},[n("div",[t._v("Last Update: "+t._s(t.lastTime))]),n("div",[t._v(t._s(t.lastMessage))])])])])])},he=[],pe={mounted:function(){var t=this;G("https://api.github.com/repositories/167823230/commits/dev").then((function(t){return t.json()})).then((function(e){t.lastTime=e.commit.author.date+" ",t.lastMessage=e.commit.message}))},data:function(){return{lastMessage:"",lastTime:""}}},me=pe,ve=(n("53d7"),Object(d["a"])(me,fe,he,!1,null,null,null)),ge=ve.exports,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sorter-root"},[n("div",{staticClass:"container"},[n("table",[t._m(0),t._l(t.works,(function(e){return n("tr",{staticClass:"sorter-item",on:{mousedown:function(n){return t.onDown(n,e)},mousemove:function(n){return t.onHover(n,e)}}},[n("td",[t._v("m")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"work.title"}],domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"work.time"}],domProps:{value:e.time},on:{input:function(n){n.target.composing||t.$set(e,"time",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.favorite,expression:"work.favorite"}],staticClass:"digit",attrs:{type:"number"},domProps:{value:e.favorite},on:{input:function(n){n.target.composing||t.$set(e,"favorite",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.brief,expression:"work.brief"}],domProps:{value:e.brief},on:{input:function(n){n.target.composing||t.$set(e,"brief",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.titleLink,expression:"work.titleLink"}],domProps:{value:e.titleLink},on:{input:function(n){n.target.composing||t.$set(e,"titleLink",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.liveLink,expression:"work.liveLink"}],domProps:{value:e.liveLink},on:{input:function(n){n.target.composing||t.$set(e,"liveLink",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tags,expression:"work.tags"}],domProps:{value:e.tags},on:{input:function(n){n.target.composing||t.$set(e,"tags",n.target.value)}}})])])}))],2),n("textarea",{domProps:{value:t.yml}})])])},ye=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td"),n("td",[t._v("title")]),n("td",[t._v("time")]),n("td",[t._v("f")]),n("td",[t._v("brief")]),n("td",[t._v("titleLink")]),n("td",[t._v("liveLink")]),n("td",[t._v("tags")])])}],ke={props:["category"],data:function(){return{works:[],down:!1,hover:!1,x:0,y:0}},computed:{yml:function(){return Object(Y["safeDump"])(this.works)}},mounted:function(){var t=this;oe(this.category).then((function(e){return t.works=e})),window.addEventListener("mouseup",this.onUp)},beforeDestroy:function(){window.removeEventListener("mouseup",this.onUp)},methods:{onDown:function(t,e){this.down=e},onUp:function(){this.down&&this.hover&&this.swap(this.works,this.down,this.hover),this.down=!1,this.hover=!1},onHover:function(t,e){this.down&&this.swap(this.works,this.down,e)},swap:function(t,e,n){t.forEach((function(i,s){i===e?t[s]=n:i===n&&(t[s]=e)})),this.works=t.concat([])}}},be=ke,Ce=(n("658d"),Object(d["a"])(be,we,ye,!1,null,null,null)),_e=Ce.exports,xe=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"poptip-root",style:"top:"+t.y+"px; left:"+t.x+"px;"},[n("Tooltip",{attrs:{title:t.title,"always-show":"true"}})],1)},Le=[],$e=n("f7fe"),Te=n.n($e),Se={components:{Tooltip:U},computed:{title:function(){return this.$store.state.popText}},data:function(){return{x:0,y:0}},mounted:function(){var t=this;window.addEventListener("mousemove",Te()((function(e){t.x=e.screenX,t.y=e.screenY-50})))}},Ae=Se,Ee=(n("1a84"),Object(d["a"])(Ae,xe,Le,!1,null,null,null)),Oe=Ee.exports,je={name:"app",components:{Poptip:Oe,RippleFullScreen:h,NavBar:y,Dipsyland:L,PhotoBanner:O,NameCard:Z,Works:de,Sorter:_e,Footer:ge},data:function(){return{rx:0}},methods:{handleScroll:function(){this.rx=Math.min(window.scrollY/this.$refs.ctn.clientHeight*110,110)}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Me=je,Be=(n("5c0b"),Object(d["a"])(Me,o,r,!1,null,null,null)),De=Be.exports,Pe={state:{popText:""},mutations:{popText:function(t,e){t.popText=e,window.setTimeout((function(){t.popText=""}),1e3)}}},Re=Pe;i["a"].config.productionTip=!1,i["a"].use(s["a"]),new i["a"]({render:function(t){return t(De)},store:new s["a"].Store(Re)}).$mount("#app")},"57a6":function(t,e,n){"use strict";n("1891")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"604e":function(t,e,n){"use strict";n("2607")},6360:function(t,e,n){},"658d":function(t,e,n){"use strict";n("6d73")},"6ced":function(t,e,n){"use strict";n("937d")},"6d73":function(t,e,n){},7321:function(t,e,n){"use strict";n("1fbc")},7663:function(t,e,n){"use strict";n("ce9b")},"7f24":function(t,e,n){"use strict";n("d921")},"937d":function(t,e,n){},"982f":function(t,e,n){"use strict";n("370e")},"9c0c":function(t,e,n){},cc73:function(t,e,n){},ce9b:function(t,e,n){},d921:function(t,e,n){},eb00:function(t,e,n){"use strict";n("cc73")}});
//# sourceMappingURL=app.7af69dd9.js.map