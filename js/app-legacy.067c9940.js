(function(){"use strict";var t={1096:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),s=n(629),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"ctn",attrs:{id:"app"}},[n("Poptip"),n("div",{attrs:{id:"head"}},[n("NavBar")],1),n("div",{attrs:{id:"content"}},[n("div",{attrs:{id:"dipsyland"}},[n("Dipsyland",{attrs:{id:"home"}})],1),n("PhotoBanner",{attrs:{src:"/img/banners/game.jpg"}}),n("div",{attrs:{id:"about"}}),n("NameCard"),n("PhotoBanner",{attrs:{src:"/img/banners/oscon.jpg"}}),n("div",{attrs:{id:"works"}}),n("Works",{attrs:{category:"works","default-filters":["featured"]}}),n("PhotoBanner",{attrs:{src:"/img/banners/success.JPG"}}),n("div",{attrs:{id:"blog"}}),n("Works",{attrs:{category:"blog"}}),n("Footer")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"frame",class:"frame "+(!t.ripple&&"disabled"),on:{click:t.toggle}},[n("div",{ref:"text",staticClass:"text",on:{click:t.toggle}},[t._t("outside"),n("div",{ref:"whole",staticClass:"whole"},[n("div",{class:"content anim "+(!t.isAnimating&&t.isActive?"show":"")},[t._t("inside"),n("div",{staticClass:"close",on:{click:t.hide}},[t._v("x")])],2),n("div",{ref:"rippleContainer",staticClass:"rippleContainer anim"},[n("div",{ref:"realRipple",staticClass:"realRipple anim"})])])],2)])},l=[],c=(n(1539),n(1249),n(7327),{props:{ripple:{default:!0},showByDefault:{default:!1}},data:function(){return{position:{},isActive:!1,isAnimating:!1}},mounted:function(){var t=this.$refs.rippleContainer,e=this.$refs.whole;t.style.display="none",window.addEventListener("keydown",this.onKeyDown),e.style.display="none",this.isActive=this.showByDefault},beforeDestroy:function(){window.removeEventListener("keydown",this.onKeyDown)},methods:{onKeyDown:function(t){var e=t.key;"Escape"===e&&this.hide()},toggle:function(t){if(!this.ripple)return!1;var e=t.composedPath().map((function(t){return t.classList})).filter((function(t){return!!t})).map((function(t){return t.contains("prevent-ripple-full-screen")})).reduce((function(t,e){return t||e}),!1);if(e)return!1;var n=t.clientX,i=t.clientY;this.isAnimating||this.isActive||this.show(n,i)},show:function(t,e){var n=this;this.isAnimating=!0,this.$emit("animate");var i=this.$refs.rippleContainer,s=this.$refs.realRipple,o=this.$refs.whole;this.position.x=t,this.position.y=e,o.style.display="",i.style.left=this.position.x+"px",i.style.top=this.position.y+"px",i.style.display="",document.body.style.overflowY="hidden",setTimeout((function(){n.$nextTick((function(){s.classList.add("show"),i.classList.add("show"),i.style.left="50vw",i.style.top="50vh"}))}),1),setTimeout((function(){n.$emit("active"),n.isActive=!0,n.isAnimating=!1}),500)},hide:function(){var t=this;this.isAnimating=!0;var e=this.$refs.rippleContainer,n=this.$refs.realRipple,i=this.$refs.whole;n.classList.remove("show"),e.classList.remove("show"),e.style.left=this.position.x+"px",e.style.top=this.position.y+"px",document.body.style.overflowY="",setTimeout((function(){e.style.display="none",t.isActive=!1,t.isAnimating=!1,i.style.display="none",t.$emit("close")}),500)}},watch:{ripple:function(t){!1===t&&this.hide()},showByDefault:function(t){t&&this.show(0,0)}}}),u=c,h=n(1001),d=(0,h.Z)(u,a,l,!1,null,"eeb288fc",null),p=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"navbar-fixed"},[n("nav",[n("div",{staticClass:"nav-wrapper"},[n("a",{staticClass:"nav-item title anim",attrs:{href:"#home"}},[t._v("Dipsyland")]),t.windowWidth>600?n("div",{staticStyle:{display:"inherit"}},[n("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("About Me")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#works"}},[t._v("Works")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#blog"}},[t._v("Blog")]),n("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("Contact")])]):n("RippleFullScreen",{attrs:{ripple:t.ripple},on:{close:function(e){t.ripple=!0}}},[n("template",{slot:"outside"},[n("a",{staticClass:"nav-item anim",staticStyle:{display:"inherit"}},[t._v("menu")])]),n("template",{slot:"inside"},[n("div",{staticClass:"inner-links"},[n("a",{staticClass:"inner-link",attrs:{href:"#home"},on:{click:function(e){t.ripple=!1}}},[t._v("Home")]),n("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("About Me")]),n("a",{staticClass:"inner-link",attrs:{href:"#works"},on:{click:function(e){t.ripple=!1}}},[t._v("Works")]),n("a",{staticClass:"inner-link",attrs:{href:"#blog"},on:{click:function(e){t.ripple=!1}}},[t._v("Blog")]),n("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("Contact")])])])],2)],1)])])])},v=[],m={components:{RippleFullScreen:p},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize),t.onResize()}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{windowWidth:0,ripple:!0}},methods:{onResize:function(){this.windowWidth=window.innerWidth}}},g=m,w=(0,h.Z)(g,f,v,!1,null,"97cb6f90",null),y=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{ref:"background",staticClass:"container"},[n("div",{ref:"sky",staticClass:"background sky"}),n("div",{ref:"cloud",staticClass:"background cloud",style:"margin-left: "+(5*t.x-t.w)+"px; bottom: "+(10*t.y-50)+"px;"}),n("div",{ref:"city",staticClass:"background city",style:"margin-left: "+(40*t.x-t.w)+"px; bottom: "+(50*t.y-50)+"px;"}),n("div",{ref:"grass",staticClass:"background grass",style:"margin-left: "+(80*t.x-t.w)+"px; bottom: "+(100*t.y-50)+"px;"})]),t._m(0)])},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"float"},[n("h1",{staticClass:"title"},[t._v("Dipsyland")]),n("h6",{staticClass:"quote"},[t._v('"Not Lalaland nor Poland"')])])}],_={data:function(){return{x:0,y:0,w:0,h:0}},mounted:function(){window.onmousemove=this.mouseMove;var t=this.$refs.background,e=t.clientWidth,n=t.clientHeight;this.w=e,this.h=n},methods:{mouseMove:function(t){var e=t.screenY,n=this.$refs.background,i=n.clientWidth,s=n.clientHeight;this.y=-e/s/2,this.w=i,this.h=s}}},b=_,x=(0,h.Z)(b,k,C,!1,null,"5cf2134e",null),L=x.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section photo",style:t.styled})},T=[],S={props:["src"],computed:{styled:function(){return"background-image: url(".concat(this.src,")")}}},A=S,E=(0,h.Z)(A,$,T,!1,null,null,null),M=E.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"field"},[n("img",{attrs:{src:t.my.icon,width:"204px"}})]),n("div",{staticClass:"field"},[n("h1",[t._v(t._s(t.my.name))]),n("h3",[t._v(t._s(t.my.position))]),n("h5",[t._v(t._s(t.my.tagLine))]),n("div",{staticClass:"links"},t._l(t.my.media,(function(t){return n("SvgLink",{key:t.title,attrs:{href:t.href,icon:t.icon,color:t.color,title:t.title}})})),1)])])},P=[],R=n(6198),D=(n(5666),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Tooltip",{attrs:{title:t.title}},[n("a",{attrs:{href:t.href}},[n("img",{attrs:{width:"32px",height:"32px",src:"/svg/"+t.icon+".svg",alt:t.icon}})])])}),Z=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tooltip-root",on:{mouseover:function(e){return t.onMouseIn()},mouseleave:function(e){return t.onMouseOut()}}},[n("div",{staticClass:"title",style:"opacity: "+(t.show&&t.title?1:0)},[t._v(t._s(t.title))]),t._t("default")],2)},N=[],I={props:["title","alwaysShow"],data:function(){return{show:this.alwaysShow||!1}},methods:{onMouseIn:function(){this.title&&(this.show=!0)},onMouseOut:function(){this.show=this.alwaysShow||!1}}},W=I,F=(0,h.Z)(W,O,N,!1,null,null,null),j=F.exports,U={props:["href","icon","color","title"],components:{Tooltip:j}},H=U,q=(0,h.Z)(H,D,Z,!1,null,null,null),z=q.exports,K=n(1272),Y=n(3019),Q=function(t,e){return fetch(t,(0,Y.Z)((0,Y.Z)({},e),{},{cache:"no-cache"}))},G={components:{SvgLink:z},beforeCreate:function(){var t=this;return(0,R.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=K.ZP,e.next=3,Q("https://hackmd.io/ux_QXxWNTbetEKqOgRSQSA/download");case 3:return e.next=5,e.sent.text();case 5:e.t1=e.sent,t.my=e.t0.load.call(e.t0,e.t1);case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{my:{media:[]}}}},X=G,J=(0,h.Z)(X,B,P,!1,null,"7c2a255a",null),V=J.exports,tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"top",staticClass:"card"},[n("div",{staticClass:"container"},[n("div",{staticClass:"my-work"},[n("h1",[t._v("My "+t._s(t.Category))]),n("div",{staticClass:"description",on:{click:t.onDescriptionClick}},[n("Markdown",{attrs:{source:t.meta?t.meta.description:""}})],1),n("div",{staticClass:"filter"},[n("div",{staticClass:"label"},[t._v("Filter:")]),n("ChipInput",{attrs:{availables:t.allTags},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),n("div",{staticClass:"works"},[t._l(t.works,(function(e){return n("Work",{key:e.title,attrs:{work:e,category:t.category},on:{tagClick:t.onTagClick}})})),n("div",{staticClass:"placeholder"}),n("div",{staticClass:"placeholder"})],2)])])])},et=[],nt=(n(9826),n(4747),n(2222),n(6699),n(2023),n(2707),n(4944),n(3792),n(4916),n(5306),n(561),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rect shadow-hover",attrs:{id:encodeURIComponent(t.work.title)}},[n("RippleFullScreen",{attrs:{ripple:t.ripple,showByDefault:t.show},on:{animate:function(e){return t.onRippleAnimate()},active:function(e){return t.onRippleAnimate()},close:function(e){return t.onClose()}}},[n("template",{slot:"outside"},[n("div",{staticClass:"work-ripple-outside"},[n("h4",{staticClass:"title"},[t.work.titleLink?n("a",{staticClass:"title prevent-ripple-full-screen",attrs:{href:t.work.titleLink}},[t._v(t._s(t.work.title))]):n("a",{staticClass:"title"},[t._v(t._s(t.work.title))])]),n("small",{staticClass:"prevent-ripple-full-screen",on:{click:function(e){return t.onTagClick(t.work.time)}}},[n("i",[t._v(t._s(t.work.time))])]),n("div",{staticClass:"brief"},[n("span",[t._v(t._s((t.work.brief||"")+" "))]),t.showMore?n("a",{staticClass:"title",on:{click:function(e){return t.onMoreClick()}}},[t._v("more")]):t._e()]),n("div",{staticClass:"tags"},t._l(t.work.tags,(function(e){return n("Tag",{key:e,staticClass:"prevent-ripple-full-screen",attrs:{tag:e},on:{click:function(n){return t.onTagClick(e)}}})})),1)])]),n("template",{slot:"inside"},[n("div",{staticClass:"work-ripple-inside"},[t.loading?n("div",{staticClass:"loading"},[t._v("Loading...")]):n("div",{staticClass:"markdown"},[n("Markdown",{attrs:{source:t.story}})],1)])])],2),t.work.liveLink?n("div",{staticClass:"live-root"},[n("a",{staticClass:"live",attrs:{href:t.work.liveLink}},[n("div",{staticClass:"triangle"},[t._v(t._s(" "))]),n("div",{staticClass:"gradient"},[t._v(t._s(" "))]),n("div",{staticClass:"text"},[t._v("Live")])])]):t._e()],1)}),it=[],st=n(1056);st.twf="#2070e4";var ot=st,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"tag",attrs:{title:t.title},on:{click:t.onClick}},[n("div",{staticClass:"flex"},[t._tag in t.ghcolors?n("div",[n("span",{staticClass:"color",style:"background-color:"+t.ghcolors[t._tag]})]):t._e(),n("div",[t._v(t._s(t._tag))]),t.removable?n("div",{staticClass:"cross"},[n("img",{attrs:{width:"8px",height:"8px",src:"/homepage2/svg/cross.svg",alt:"cross"}})]):t._e()])])},at=[],lt={props:["tag","removable"],computed:{_tag:function(){return this.tag||this.$slots.default[0].text},title:function(){return this.removable?"Toggle to remove this filter":"Toggle to add this filter"}},data:function(){return{ghcolors:ot}},methods:{onClick:function(){this.$emit("click")}}},ct=lt,ut=(0,h.Z)(ct,rt,at,!1,null,"42c5b7c8",null),ht=ut.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("vue-markdown",{ref:"md",staticClass:"markdown",attrs:{watches:["source","show","toc","story"],source:t.source}})},pt=[],ft=(n(9714),n(7965)),vt=(n(9653),n(7941),n(9980)),mt=n.n(vt),gt=n(6635),wt=n.n(gt),yt=n(700),kt=n.n(yt),Ct=n(7003),_t=n.n(Ct),bt=n(2384),xt=n.n(bt),Lt=n(645),$t=n.n(Lt),Tt=n(9411),St=n.n(Tt),At=n(4266),Et=n.n(At),Mt=n(4574),Bt=n.n(Mt),Pt=n(81),Rt=n(4651),Dt=n.n(Rt),Zt=n(1135),Ot=n.n(Zt),Nt=n(591),It=n.n(Nt),Wt={md:(new(mt())).use(Ot()),template:"<div><slot></slot></div>",data:function(){return{sourceData:this.source}},props:{watches:{type:Array,default:function(){return["source","show","toc"]}},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:function(){return{}}},prerender:{type:Function,default:function(t){return t}},postrender:{type:Function,default:function(t){return t}}},computed:{tocLastLevelComputed:function(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render:function(t){var e=this;this.md=(new(mt())).use(Ot()).use(kt()).use(_t()).use(xt()).use($t()).use(St()).use(Et()).use(Bt()).use(Dt(),{enabled:this.taskLists}).use(It(),"success").use(It(),"info").use(It(),"warning").use(It(),"danger").use(n(591),"spoiler",{render:function(t,n){var i=t[n];return"container_spoiler_open"===i.type?"<details><summary>"+e.md.utils.escapeHtml(i.info)+"</summary>\n":"container_spoiler_close"===i.type?"</details>\n":""}}),this.emoji&&this.md.use(wt()),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=function(){return'<table class="'.concat(e.tableClass,'">\n')};var i=this.md.renderer.rules.link_open||function(t,e,n,i,s){return s.renderToken(t,e,n)};this.md.renderer.rules.link_open=function(t,n,s,o,r){return Object.keys(e.anchorAttributes).forEach((function(i){var s=t[n].attrIndex(i),o=e.anchorAttributes[i];s<0?t[n].attrPush([i,o]):t[n].attrs[s][1]=o})),i(t,n,s,o,r)},this.toc&&this.md.use(Pt.Z,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:function(t,n,i){i&&(e.tocId&&document.getElementById(e.tocId)&&(document.getElementById(e.tocId).innerHTML=i),e.$emit("toc-rendered",i))}});var s=this.show?this.md.render(this.prerender(this.sourceData)):"";return s=this.postrender(s),this.$emit("rendered",s),t("div",{domProps:{innerHTML:s}})},beforeMount:function(){var t=this;if(this.$slots.default){this.sourceData="";var e,n=(0,ft.Z)(this.$slots.default);try{for(n.s();!(e=n.n()).done;){var i=e.value;this.sourceData+=i.text}}catch(s){n.e(s)}finally{n.f()}}this.$watch("source",(function(){t.sourceData=t.prerender(t.source),t.$forceUpdate()})),this.watches.forEach((function(e){t.$watch(e,(function(){t.$forceUpdate()}))}))}},Ft=function(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)},jt=Ft,Ut={components:{VueMarkdown:Wt},props:["source"],mounted:function(){var t=this,e=function(e){e.addEventListener("click",(function(){window.getSelection().toString()||(jt(e.innerText),t.$store.commit("popText","copied!"))}))};this.$refs.md.$el.querySelectorAll("pre").forEach(e),this.$refs.md.$el.querySelectorAll("code").forEach(e),window.Prism.highlightAll()}},Ht=Ut,qt=(0,h.Z)(Ht,dt,pt,!1,null,null,null),zt=qt.exports,Kt={components:{Tag:ht,RippleFullScreen:p,Markdown:zt},props:["work","category"],mounted:function(){window.location.hash==="#".concat(encodeURIComponent(this.work.title))&&(this.show=!0)},data:function(){return{ghcolors:ot,story:"",loading:!1,show:!1,ripple:"story"in this.work&&!("more"in this.work)}},computed:{showMore:function(){return"story"in this.work&&"more"in this.work}},methods:{onTagClick:function(t){this.$emit("tagClick",t)},onRippleAnimate:function(){var t=this,e="".concat(this.work.title," | ").concat(this.category," - Dipsyland");document.title=e,window.history.pushState("",e,"#".concat(encodeURIComponent(this.work.title))),"story"in this.work&&(this.loading=!0,"string"===typeof this.work.story?Q(this.work.story).then((function(t){return t.text()})).then((function(e){return t.story=e.replace(/^---(\n.*?)*?---/gm,"")})).finally((function(){return t.loading=!1})):Q("./".concat(this.category,"/").concat(this.work.title,".md")).then((function(t){return t.text()})).then((function(e){return t.story=e})).finally((function(){return t.loading=!1})))},onClose:function(){var t="Dipsyland";document.title=t,window.history.pushState("",t,"#"),"more"in this.work&&(this.ripple=!1)},onMoreClick:function(){this.ripple=!0}}},Yt=Kt,Qt=(0,h.Z)(Yt,nt,it,!1,null,null,null),Gt=Qt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-root"},[n("div",{class:"input-field-root "+(t.isShowingAuto&&"auto")+" "+(t.active&&"active")+" shadow-hover"},[t._l(t.value,(function(e){return n("Tag",{key:e,attrs:{tag:e,removable:!0},on:{click:function(){return t.onChipClick(e)}}})})),n("label",{staticClass:"input-field"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",domProps:{value:t.input},on:{blur:t.onBlur,focus:function(e){t.active=!0},input:[function(e){e.target.composing||(t.input=e.target.value)},t.onType],keydown:t.onKey}})])],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowingAuto,expression:"isShowingAuto"}],staticClass:"autofill-root"},[n("div",{ref:"items",staticClass:"autofill-container"},t._l(t.suggestions,(function(e,i){return n("div",{key:e,class:"autofill-item "+(i===t.cursor&&"active"),on:{mousedown:function(t){return t.preventDefault()},click:function(n){return t.trimAndMoveChip(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])},Jt=[],Vt=(n(4603),n(388),n(8386),n(4723),{props:["availables","value"],components:{Tag:ht},data:function(){var t;return{input:"",cursor:0,active:!1,chips:null!==(t=this.value)&&void 0!==t?t:[]}},computed:{suggestions:function(){var t=this;if(""===this.input)return this.availables;var e=new RegExp("^".concat(this.input.toLowerCase()));return this.availables.filter((function(t){return t.toLowerCase().match(e)})).filter((function(e){return!t.chips.includes(e)}))},isShowingAuto:function(){return this.active&&this.suggestions.length>0}},methods:{onType:function(){","===this.input[this.input.length-1]&&this.trimAndMoveChip(this.input)},onChipClick:function(t){while(1){var e=this.chips.indexOf(t);if(-1===e)break;this.chips.splice(e,1)}this.$refs.input.focus()},onKey:function(t){switch(t.key){case"Enter":this.suggestions.length>this.cursor?this.trimAndMoveChip(this.suggestions[this.cursor]):this.trimAndMoveChip(this.input);break;case"Backspace":""===this.input&&this.chips.pop();break;case"ArrowUp":this.cursor=(this.cursor-1+this.suggestions.length)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case"ArrowDown":this.cursor=(this.cursor+1)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case"Escape":this.$refs.input.blur()}},onBlur:function(){this.active=!1},trimAndMoveChip:function(t){var e=t.match(/^(.+)[\s,]*$/g)[0];-1===this.chips.indexOf(e)&&this.chips.push(e),this.input="",this.cursor=0,this.$refs.input.focus()}},watch:{chips:function(t){this.$emit("value",t)},value:function(t){console.log(t),this.chips=t}}}),te=Vt,ee=(0,h.Z)(te,Xt,Jt,!1,null,null,null),ne=ee.exports,ie=n(3320),se=function(){var t=(0,R.Z)(regeneratorRuntime.mark((function t(e){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n="/".concat(e,".yml"),t.t0=e,t.next="works"===t.t0?4:"blog"===t.t0?6:8;break;case 4:return n="https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download",t.abrupt("break",8);case 6:return n="https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download",t.abrupt("break",8);case 8:return i={method:"GET",cache:"no-cache"},t.next=11,Q(n,i).then((function(t){return t.text()})).then((function(t){return ie.load(t,"utf8")}));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),oe=(n(3123),function(){var t=window.location.hash;if(t.length){var e=t.split("#")[1],n=document.getElementById("content"),i=document.getElementById(e);n&&i&&(n.scrollTop=i.getBoundingClientRect().top-n.getBoundingClientRect().top)}}),re=oe,ae={components:{Markdown:zt,Work:Gt,ChipInput:ne,Tag:ht},props:{category:String,defaultFilters:{type:Array,default:function(){return[]}}},mounted:function(){var t=this;se(this.category).then((function(e){t.allWorks=e.filter((function(t){var e=t.meta;return!e})),t.meta=e.find((function(t){var e=t.meta;return e})),t.allWorks.forEach((function(e){var n=e.title;encodeURIComponent(n)===t.hash&&(t.filters=[n])}))})).then((function(){t.$nextTick((function(){re()}))}))},computed:{works:function(){var t=this;return 0===this.filters.length?this.allWorks:this.allWorks.filter((function(e){var n=e.tags,i=e.time,s=e.title,o=(n||[]).concat([i,s]).filter((function(t){return t})).map((function(t){return t.toLowerCase()}));return t.filters.filter((function(t){return o.includes(t.toLowerCase())})).length===t.filters.length}))},allTags:function(){return this.allWorks.map((function(t){var e=t.title,n=t.time,i=t.tags;return(i||[]).concat(n,e)})).flat().filter((function(t){return"undefined"!==typeof t})).sort().filter((function(t,e,n){return t&&n.indexOf(t)===e}))},Category:function(){return this.category[0].toUpperCase()+this.category.substring(1)},hash:function(){return window.location.hash.replace("#","")}},data:function(){return{filters:this.defaultFilters,allWorks:[],meta:void 0}},methods:{onTagClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e&&this.filters.splice(0,this.filters.length),t&&!this.filters.includes(t)&&(this.filters.push(t),this.$refs.top.scrollIntoView())},onDescriptionClick:function(t){if(t.path.map((function(t){return t.tagName})).includes("A")){var e=t.target.innerText;"all"!==e?this.onTagClick(e,!0):this.onTagClick(!1,!0)}}}},le=ae,ce=(0,h.Z)(le,tt,et,!1,null,"05c0656d",null),ue=ce.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer"},[n("div",{staticClass:"footer-item"},[t._v("Make with love by Dipsy, Copyright© 2021 All Right Reserved")]),n("div",{staticClass:"footer-item"},[n("a",{attrs:{href:"https://github.com/dipsywong98/dipsywong98.github.io"}},[n("div",[t._v("Last Update: "+t._s(t.lastTime))]),n("div",[t._v(t._s(t.lastMessage))])])])])])},de=[],pe={mounted:function(){var t=this;Q("https://api.github.com/repositories/167823230/commits/dev").then((function(t){return t.json()})).then((function(e){t.lastTime=e.commit.author.date+" ",t.lastMessage=e.commit.message}))},data:function(){return{lastMessage:"",lastTime:""}}},fe=pe,ve=(0,h.Z)(fe,he,de,!1,null,null,null),me=ve.exports,ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sorter-root"},[n("div",{staticClass:"container"},[n("table",[t._m(0),t._l(t.works,(function(e){return n("tr",{staticClass:"sorter-item",on:{mousedown:function(n){return t.onDown(n,e)},mousemove:function(n){return t.onHover(n,e)}}},[n("td",[t._v("m")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"work.title"}],domProps:{value:e.title},on:{input:function(n){n.target.composing||t.$set(e,"title",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"work.time"}],domProps:{value:e.time},on:{input:function(n){n.target.composing||t.$set(e,"time",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.favorite,expression:"work.favorite"}],staticClass:"digit",attrs:{type:"number"},domProps:{value:e.favorite},on:{input:function(n){n.target.composing||t.$set(e,"favorite",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.brief,expression:"work.brief"}],domProps:{value:e.brief},on:{input:function(n){n.target.composing||t.$set(e,"brief",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.titleLink,expression:"work.titleLink"}],domProps:{value:e.titleLink},on:{input:function(n){n.target.composing||t.$set(e,"titleLink",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.liveLink,expression:"work.liveLink"}],domProps:{value:e.liveLink},on:{input:function(n){n.target.composing||t.$set(e,"liveLink",n.target.value)}}})]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.tags,expression:"work.tags"}],domProps:{value:e.tags},on:{input:function(n){n.target.composing||t.$set(e,"tags",n.target.value)}}})])])}))],2),n("textarea",{domProps:{value:t.yml}})])])},we=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td"),n("td",[t._v("title")]),n("td",[t._v("time")]),n("td",[t._v("f")]),n("td",[t._v("brief")]),n("td",[t._v("titleLink")]),n("td",[t._v("liveLink")]),n("td",[t._v("tags")])])}],ye={props:["category"],data:function(){return{works:[],down:!1,hover:!1,x:0,y:0}},computed:{yml:function(){return(0,K.PC)(this.works)}},mounted:function(){var t=this;se(this.category).then((function(e){return t.works=e})),window.addEventListener("mouseup",this.onUp)},beforeDestroy:function(){window.removeEventListener("mouseup",this.onUp)},methods:{onDown:function(t,e){this.down=e},onUp:function(){this.down&&this.hover&&this.swap(this.works,this.down,this.hover),this.down=!1,this.hover=!1},onHover:function(t,e){this.down&&this.swap(this.works,this.down,e)},swap:function(t,e,n){t.forEach((function(i,s){i===e?t[s]=n:i===n&&(t[s]=e)})),this.works=t.concat([])}}},ke=ye,Ce=(0,h.Z)(ke,ge,we,!1,null,null,null),_e=Ce.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"poptip-root",style:"top:"+t.y+"px; left:"+t.x+"px;"},[n("Tooltip",{attrs:{title:t.title,"always-show":"true"}})],1)},xe=[],Le=n(1296),$e=n.n(Le),Te={components:{Tooltip:j},computed:{title:function(){return this.$store.state.popText}},data:function(){return{x:0,y:0}},mounted:function(){var t=this;window.addEventListener("mousemove",$e()((function(e){t.x=e.screenX,t.y=e.screenY-50})))}},Se=Te,Ae=(0,h.Z)(Se,be,xe,!1,null,null,null),Ee=Ae.exports,Me={name:"app",components:{Poptip:Ee,RippleFullScreen:p,NavBar:y,Dipsyland:L,PhotoBanner:M,NameCard:V,Works:ue,Sorter:_e,Footer:me},data:function(){return{rx:0}},methods:{handleScroll:function(){this.rx=Math.min(window.scrollY/this.$refs.ctn.clientHeight*110,110)}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},Be=Me,Pe=(0,h.Z)(Be,o,r,!1,null,null,null),Re=Pe.exports,De={state:{popText:""},mutations:{popText:function(t,e){t.popText=e,window.setTimeout((function(){t.popText=""}),1e3)}}},Ze=De;i.Z.config.productionTip=!1,i.Z.use(s.ZP),new i.Z({render:function(t){return t(Re)},store:new s.ZP.Store(Ze)}).$mount("#app")}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,s,o){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],s=t[u][1],o=t[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[l])}))?i.splice(l--,1):(a=!1,o<r&&(r=o));if(a){t.splice(u--,1);var c=s();void 0!==c&&(e=c)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,s,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,o,r=i[0],a=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var u=l(n)}for(e&&e(i);c<r.length;c++)o=r[c],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(u)},i=self["webpackChunkdipsyland"]=self["webpackChunkdipsyland"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(1096)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.067c9940.js.map