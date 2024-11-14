(function(){"use strict";var t={1096:function(t,e,s){var i=s(144),o=s(629),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"ctn",attrs:{id:"app"}},[s("Poptip"),s("div",{attrs:{id:"head"}},[s("NavBar")],1),s("div",{attrs:{id:"content"}},[s("div",{attrs:{id:"dipsyland"}},[s("Dipsyland",{attrs:{id:"home"}})],1),s("PhotoBanner",{attrs:{src:"/img/banners/game.jpg"}}),s("div",{attrs:{id:"about"}}),s("NameCard"),s("PhotoBanner",{attrs:{src:"/img/banners/oscon.jpg"}}),s("div",{attrs:{id:"works"}}),s("Works",{attrs:{category:"works","default-filters":["featured"]}}),s("PhotoBanner",{attrs:{src:"/img/banners/success.JPG"}}),s("div",{attrs:{id:"blog"}}),s("Works",{attrs:{category:"blog"}}),s("Footer")],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"frame",class:"frame "+(!t.ripple&&"disabled"),on:{click:t.toggle}},[s("div",{ref:"text",staticClass:"text",on:{click:t.toggle}},[t._t("outside"),s("div",{ref:"whole",staticClass:"whole"},[s("div",{class:"content anim "+(!t.isAnimating&&t.isActive?"show":"")},[t._t("inside"),s("div",{staticClass:"close",on:{click:t.hide}},[t._v("x")])],2),s("div",{ref:"rippleContainer",staticClass:"rippleContainer anim"},[s("div",{ref:"realRipple",staticClass:"realRipple anim"})])])],2)])},l=[],c={props:{ripple:{default:!0},showByDefault:{default:!1}},data(){return{position:{},isActive:!1,isAnimating:!1}},mounted(){const t=this.$refs.rippleContainer,e=this.$refs.whole;t.style.display="none",window.addEventListener("keydown",this.onKeyDown),e.style.display="none",this.isActive=this.showByDefault},beforeDestroy(){window.removeEventListener("keydown",this.onKeyDown)},methods:{onKeyDown({key:t}){"Escape"===t&&this.hide()},toggle(t){if(!this.ripple)return!1;const e=t.composedPath().map((t=>t.classList)).filter((t=>!!t)).map((t=>t.contains("prevent-ripple-full-screen"))).reduce(((t,e)=>t||e),!1);if(e)return!1;const{clientX:s,clientY:i}=t;this.isAnimating||this.isActive||this.show(s,i)},show(t,e){this.isAnimating=!0,this.$emit("animate");const s=this.$refs.rippleContainer,i=this.$refs.realRipple,o=this.$refs.whole;this.position.x=t,this.position.y=e,o.style.display="",s.style.left=this.position.x+"px",s.style.top=this.position.y+"px",s.style.display="",document.body.style.overflowY="hidden",setTimeout((()=>{this.$nextTick((()=>{i.classList.add("show"),s.classList.add("show"),s.style.left="50vw",s.style.top="50vh"}))}),1),setTimeout((()=>{this.$emit("active"),this.isActive=!0,this.isAnimating=!1}),500)},hide(){this.isAnimating=!0;const t=this.$refs.rippleContainer,e=this.$refs.realRipple,s=this.$refs.whole;e.classList.remove("show"),t.classList.remove("show"),t.style.left=this.position.x+"px",t.style.top=this.position.y+"px",document.body.style.overflowY="",setTimeout((()=>{t.style.display="none",this.isActive=!1,this.isAnimating=!1,s.style.display="none",this.$emit("close")}),500)}},watch:{ripple(t){!1===t&&this.hide()},showByDefault(t){t&&this.show(0,0)}}},u=c,h=s(1001),d=(0,h.Z)(u,a,l,!1,null,"eeb288fc",null),p=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"navbar-fixed"},[s("nav",[s("div",{staticClass:"nav-wrapper"},[s("a",{staticClass:"nav-item title anim",attrs:{href:"#home"}},[t._v("Dipsyland")]),t.windowWidth>600?s("div",{staticStyle:{display:"inherit"}},[s("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("About Me")]),s("a",{staticClass:"nav-item anim",attrs:{href:"#works"}},[t._v("Works")]),s("a",{staticClass:"nav-item anim",attrs:{href:"#blog"}},[t._v("Blog")]),s("a",{staticClass:"nav-item anim",attrs:{href:"#about"}},[t._v("Contact")])]):s("RippleFullScreen",{attrs:{ripple:t.ripple},on:{close:function(e){t.ripple=!0}}},[s("template",{slot:"outside"},[s("a",{staticClass:"nav-item anim",staticStyle:{display:"inherit"}},[t._v("menu")])]),s("template",{slot:"inside"},[s("div",{staticClass:"inner-links"},[s("a",{staticClass:"inner-link",attrs:{href:"#home"},on:{click:function(e){t.ripple=!1}}},[t._v("Home")]),s("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("About Me")]),s("a",{staticClass:"inner-link",attrs:{href:"#works"},on:{click:function(e){t.ripple=!1}}},[t._v("Works")]),s("a",{staticClass:"inner-link",attrs:{href:"#blog"},on:{click:function(e){t.ripple=!1}}},[t._v("Blog")]),s("a",{staticClass:"inner-link",attrs:{href:"#about"},on:{click:function(e){t.ripple=!1}}},[t._v("Contact")])])])],2)],1)])])])},f=[],v={components:{RippleFullScreen:p},mounted(){this.$nextTick((()=>{window.addEventListener("resize",this.onResize),this.onResize()}))},beforeDestroy(){window.removeEventListener("resize",this.onResize)},data(){return{windowWidth:0,ripple:!0}},methods:{onResize(){this.windowWidth=window.innerWidth}}},g=v,w=(0,h.Z)(g,m,f,!1,null,"97cb6f90",null),y=w.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"root"},[s("div",{ref:"background",staticClass:"container"},[s("div",{ref:"sky",staticClass:"background sky"}),s("div",{ref:"cloud",staticClass:"background cloud",style:"margin-left: "+(5*t.x-t.w)+"px; bottom: "+(10*t.y-50)+"px;"}),s("div",{ref:"city",staticClass:"background city",style:"margin-left: "+(40*t.x-t.w)+"px; bottom: "+(50*t.y-50)+"px;"}),s("div",{ref:"grass",staticClass:"background grass",style:"margin-left: "+(80*t.x-t.w)+"px; bottom: "+(100*t.y-50)+"px;"})]),t._m(0)])},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"float"},[s("h1",{staticClass:"title"},[t._v("Dipsyland")]),s("h6",{staticClass:"quote"},[t._v('"Not Lalaland nor Poland"')])])}],_={data(){return{x:0,y:0,w:0,h:0}},mounted(){window.onmousemove=this.mouseMove;const{clientWidth:t,clientHeight:e}=this.$refs.background;this.w=t,this.h=e},methods:{mouseMove(t){const{screenY:e}=t,{clientWidth:s,clientHeight:i}=this.$refs.background;this.y=-e/i/2,this.w=s,this.h=i}}},b=_,x=(0,h.Z)(b,k,C,!1,null,"5cf2134e",null),$=x.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section photo",style:t.styled})},T=[],S={props:["src"],computed:{styled(){return`background-image: url(${this.src})`}}},A=S,E=(0,h.Z)(A,L,T,!1,null,null,null),M=E.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"field"},[s("img",{attrs:{src:t.my.icon,width:"204px"}})]),s("div",{staticClass:"field"},[s("h1",[t._v(t._s(t.my.name))]),s("h3",[t._v(t._s(t.my.position))]),s("h5",[t._v(t._s(t.my.tagLine))]),s("div",{staticClass:"links"},t._l(t.my.media,(function(t){return s("SvgLink",{key:t.title,attrs:{href:t.href,icon:t.icon,color:t.color,title:t.title}})})),1)])])},P=[],D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Tooltip",{attrs:{title:t.title}},[s("a",{attrs:{href:t.href}},[s("img",{attrs:{width:"32px",height:"32px",src:"/svg/"+t.icon+".svg",alt:t.icon}})])])},R=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tooltip-root",on:{mouseover:function(e){return t.onMouseIn()},mouseleave:function(e){return t.onMouseOut()}}},[s("div",{staticClass:"title",style:"opacity: "+(t.show&&t.title?1:0)},[t._v(t._s(t.title))]),t._t("default")],2)},Z=[],N={props:["title","alwaysShow"],data(){return{show:this.alwaysShow||!1}},methods:{onMouseIn(){this.title&&(this.show=!0)},onMouseOut(){this.show=this.alwaysShow||!1}}},I=N,W=(0,h.Z)(I,O,Z,!1,null,null,null),F=W.exports,j={props:["href","icon","color","title"],components:{Tooltip:F}},U=j,H=(0,h.Z)(U,D,R,!1,null,null,null),q=H.exports,z=s(1272);const K=(t,e)=>fetch(t,{...e,cache:"no-cache"});var Y={components:{SvgLink:q},async beforeCreate(){this.my=z.ZP.load(await(await K("https://hackmd.io/ux_QXxWNTbetEKqOgRSQSA/download")).text())},data(){return{my:{media:[]}}}},Q=Y,G=(0,h.Z)(Q,B,P,!1,null,"7c2a255a",null),X=G.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"top",staticClass:"card"},[s("div",{staticClass:"container"},[s("div",{staticClass:"my-work"},[s("h1",[t._v("My "+t._s(t.Category))]),s("div",{staticClass:"description",on:{click:t.onDescriptionClick}},[s("Markdown",{attrs:{source:t.meta?t.meta.description:""}})],1),s("div",{staticClass:"filter"},[s("div",{staticClass:"label"},[t._v("Filter:")]),s("ChipInput",{attrs:{availables:t.allTags},model:{value:t.filters,callback:function(e){t.filters=e},expression:"filters"}})],1),s("div",{staticClass:"works"},[t._l(t.works,(function(e){return s("Work",{key:e.title,attrs:{work:e,category:t.category},on:{tagClick:t.onTagClick}})})),s("div",{staticClass:"placeholder"}),s("div",{staticClass:"placeholder"})],2)])])])},V=[],tt=(s(6699),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rect shadow-hover",attrs:{id:encodeURIComponent(t.work.title)}},[s("RippleFullScreen",{attrs:{ripple:t.ripple,showByDefault:t.show},on:{animate:function(e){return t.onRippleAnimate()},active:function(e){return t.onRippleAnimate()},close:function(e){return t.onClose()}}},[s("template",{slot:"outside"},[s("div",{staticClass:"work-ripple-outside"},[s("h4",{staticClass:"title"},[t.work.titleLink?s("a",{staticClass:"title prevent-ripple-full-screen",attrs:{href:t.work.titleLink}},[t._v(t._s(t.work.title))]):s("a",{staticClass:"title"},[t._v(t._s(t.work.title))])]),s("small",{staticClass:"prevent-ripple-full-screen",on:{click:function(e){return t.onTagClick(t.work.time)}}},[s("i",[t._v(t._s(t.work.time))])]),s("div",{staticClass:"brief"},[s("span",[t._v(t._s((t.work.brief||"")+" "))]),t.showMore?s("a",{staticClass:"title",on:{click:function(e){return t.onMoreClick()}}},[t._v("more")]):t._e()]),s("div",{staticClass:"tags"},t._l(t.work.tags,(function(e){return s("Tag",{key:e,staticClass:"prevent-ripple-full-screen",attrs:{tag:e},on:{click:function(s){return t.onTagClick(e)}}})})),1)])]),s("template",{slot:"inside"},[s("div",{staticClass:"work-ripple-inside"},[t.loading?s("div",{staticClass:"loading"},[t._v("Loading...")]):s("div",{staticClass:"markdown"},[s("Markdown",{attrs:{source:t.story}})],1)])])],2),t.work.liveLink?s("div",{staticClass:"live-root"},[s("a",{staticClass:"live",attrs:{href:t.work.liveLink}},[s("div",{staticClass:"triangle"},[t._v(t._s(" "))]),s("div",{staticClass:"gradient"},[t._v(t._s(" "))]),s("div",{staticClass:"text"},[t._v("Live")])])]):t._e()],1)}),et=[],st=s(1056);st.twf="#2070e4";var it=st,ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"tag",attrs:{title:t.title},on:{click:t.onClick}},[s("div",{staticClass:"flex"},[t._tag in t.ghcolors?s("div",[s("span",{staticClass:"color",style:"background-color:"+t.ghcolors[t._tag]})]):t._e(),s("div",[t._v(t._s(t._tag))]),t.removable?s("div",{staticClass:"cross"},[s("img",{attrs:{width:"8px",height:"8px",src:"/homepage2/svg/cross.svg",alt:"cross"}})]):t._e()])])},nt=[],rt={props:["tag","removable"],computed:{_tag(){return this.tag||this.$slots.default[0].text},title(){return this.removable?"Toggle to remove this filter":"Toggle to add this filter"}},data(){return{ghcolors:it}},methods:{onClick(){this.$emit("click")}}},at=rt,lt=(0,h.Z)(at,ot,nt,!1,null,"42c5b7c8",null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("vue-markdown",{ref:"md",staticClass:"markdown",attrs:{watches:["source","show","toc","story"],source:t.source}})},ht=[],dt=s(9980),pt=s.n(dt),mt=s(6635),ft=s.n(mt),vt=s(700),gt=s.n(vt),wt=s(7003),yt=s.n(wt),kt=s(2384),Ct=s.n(kt),_t=s(645),bt=s.n(_t),xt=s(9411),$t=s.n(xt),Lt=s(4266),Tt=s.n(Lt),St=s(4574),At=s.n(St),Et=s(81),Mt=s(4651),Bt=s.n(Mt),Pt=s(1135),Dt=s.n(Pt),Rt=s(591),Ot=s.n(Rt),Zt={md:(new(pt())).use(Dt()),template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:t=>t},postrender:{type:Function,default:t=>t}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(t){this.md=(new(pt())).use(Dt()).use(gt()).use(yt()).use(Ct()).use(bt()).use($t()).use(Tt()).use(At()).use(Bt(),{enabled:this.taskLists}).use(Ot(),"success").use(Ot(),"info").use(Ot(),"warning").use(Ot(),"danger").use(s(591),"spoiler",{render:(t,e)=>{const s=t[e];return"container_spoiler_open"===s.type?"<details><summary>"+this.md.utils.escapeHtml(s.info)+"</summary>\n":"container_spoiler_close"===s.type?"</details>\n":""}}),this.emoji&&this.md.use(ft()),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=()=>`<table class="${this.tableClass}">\n`;const e=this.md.renderer.rules.link_open||function(t,e,s,i,o){return o.renderToken(t,e,s)};this.md.renderer.rules.link_open=(t,s,i,o,n)=>(Object.keys(this.anchorAttributes).forEach((e=>{const i=t[s].attrIndex(e),o=this.anchorAttributes[e];i<0?t[s].attrPush([e,o]):t[s].attrs[i][1]=o})),e(t,s,i,o,n)),this.toc&&this.md.use(Et.Z,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(t,e,s)=>{s&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=s),this.$emit("toc-rendered",s))}});let i=this.show?this.md.render(this.prerender(this.sourceData)):"";return i=this.postrender(i),this.$emit("rendered",i),t("div",{domProps:{innerHTML:i}})},beforeMount(){if(this.$slots.default){this.sourceData="";for(const t of this.$slots.default)this.sourceData+=t.text}this.$watch("source",(()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()})),this.watches.forEach((t=>{this.$watch(t,(()=>{this.$forceUpdate()}))}))}};const Nt=t=>{const e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)};var It=Nt,Wt={components:{VueMarkdown:Zt},props:["source"],mounted(){const t=t=>{t.addEventListener("click",(()=>{window.getSelection().toString()||(It(t.innerText),this.$store.commit("popText","copied!"))}))};this.$refs.md.$el.querySelectorAll("pre").forEach(t),this.$refs.md.$el.querySelectorAll("code").forEach(t),window.Prism.highlightAll()}},Ft=Wt,jt=(0,h.Z)(Ft,ut,ht,!1,null,null,null),Ut=jt.exports,Ht={components:{Tag:ct,RippleFullScreen:p,Markdown:Ut},props:["work","category"],mounted(){window.location.hash===`#${encodeURIComponent(this.work.title)}`&&(this.show=!0)},data(){return{ghcolors:it,story:"",loading:!1,show:!1,ripple:"story"in this.work&&!("more"in this.work)}},computed:{showMore(){return"story"in this.work&&"more"in this.work}},methods:{onTagClick(t){this.$emit("tagClick",t)},onRippleAnimate(){const t=`${this.work.title} | ${this.category} - Dipsyland`;document.title=t,window.history.pushState("",t,`#${encodeURIComponent(this.work.title)}`),"story"in this.work&&(this.loading=!0,"string"===typeof this.work.story?K(this.work.story).then((t=>t.text())).then((t=>this.story=t.replace(/^---(\n.*?)*?---/gm,""))).finally((()=>this.loading=!1)):K(`./${this.category}/${this.work.title}.md`).then((t=>t.text())).then((t=>this.story=t)).finally((()=>this.loading=!1)))},onClose(){const t="Dipsyland";document.title=t,window.history.pushState("",t,"#"),"more"in this.work&&(this.ripple=!1)},onMoreClick(){this.ripple=!0}}},qt=Ht,zt=(0,h.Z)(qt,tt,et,!1,null,null,null),Kt=zt.exports,Yt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-root"},[s("div",{class:"input-field-root "+(t.isShowingAuto&&"auto")+" "+(t.active&&"active")+" shadow-hover"},[t._l(t.value,(function(e){return s("Tag",{key:e,attrs:{tag:e,removable:!0},on:{click:function(){return t.onChipClick(e)}}})})),s("label",{staticClass:"input-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],ref:"input",domProps:{value:t.input},on:{blur:t.onBlur,focus:function(e){t.active=!0},input:[function(e){e.target.composing||(t.input=e.target.value)},t.onType],keydown:t.onKey}})])],2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowingAuto,expression:"isShowingAuto"}],staticClass:"autofill-root"},[s("div",{ref:"items",staticClass:"autofill-container"},t._l(t.suggestions,(function(e,i){return s("div",{key:e,class:"autofill-item "+(i===t.cursor&&"active"),on:{mousedown:function(t){return t.preventDefault()},click:function(s){return t.trimAndMoveChip(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])},Qt=[],Gt={props:["availables","value"],components:{Tag:ct},data(){return{input:"",cursor:0,active:!1,chips:this.value??[]}},computed:{suggestions(){if(""===this.input)return this.availables;{const t=new RegExp(`^${this.input.toLowerCase()}`);return this.availables.filter((e=>e.toLowerCase().match(t))).filter((t=>!this.chips.includes(t)))}},isShowingAuto(){return this.active&&this.suggestions.length>0}},methods:{onType(){","===this.input[this.input.length-1]&&this.trimAndMoveChip(this.input)},onChipClick(t){while(1){const e=this.chips.indexOf(t);if(-1===e)break;this.chips.splice(e,1)}this.$refs.input.focus()},onKey(t){switch(t.key){case"Enter":this.suggestions.length>this.cursor?this.trimAndMoveChip(this.suggestions[this.cursor]):this.trimAndMoveChip(this.input);break;case"Backspace":""===this.input&&this.chips.pop();break;case"ArrowUp":this.cursor=(this.cursor-1+this.suggestions.length)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case"ArrowDown":this.cursor=(this.cursor+1)%this.suggestions.length,this.$refs.items.scrollTop=this.$refs.items.children[Math.max(0,this.cursor-3)].offsetTop,t.preventDefault();break;case"Escape":this.$refs.input.blur()}},onBlur(){this.active=!1},trimAndMoveChip(t){const e=t.match(/^(.+)[\s,]*$/g)[0];-1===this.chips.indexOf(e)&&this.chips.push(e),this.input="",this.cursor=0,this.$refs.input.focus()}},watch:{chips(t){this.$emit("value",t)},value(t){console.log(t),this.chips=t}}},Xt=Gt,Jt=(0,h.Z)(Xt,Yt,Qt,!1,null,null,null),Vt=Jt.exports;const te=s(3320);var ee=async t=>{let e=`/${t}.yml`;switch(t){case"works":e="https://hackmd.io/Nyb5TGn9T72GIu-IHeJdZQ/download";break;case"blog":e="https://hackmd.io/sRaU_QDUQymyE43tRbgmig/download";break}const s={method:"GET",cache:"no-cache"};return await K(e,s).then((t=>t.text())).then((t=>te.load(t,"utf8")))};const se=()=>{const t=window.location.hash;if(t.length){const e=t.split("#")[1],s=document.getElementById("content"),i=document.getElementById(e);s&&i&&(s.scrollTop=i.getBoundingClientRect().top-s.getBoundingClientRect().top)}};var ie=se,oe={components:{Markdown:Ut,Work:Kt,ChipInput:Vt,Tag:ct},props:{category:String,defaultFilters:{type:Array,default:()=>[]}},mounted(){ee(this.category).then((t=>{this.allWorks=t.filter((({meta:t})=>!t)),this.meta=t.find((({meta:t})=>t)),this.allWorks.forEach((({title:t})=>{encodeURIComponent(t)===this.hash&&(this.filters=[t])}))})).then((()=>{this.$nextTick((()=>{ie()}))}))},computed:{works(){return 0===this.filters.length?this.allWorks:this.allWorks.filter((({tags:t,time:e,title:s})=>{const i=(t||[]).concat([e,s]).filter((t=>t)).map((t=>t.toLowerCase()));return this.filters.filter((t=>i.includes(t.toLowerCase()))).length===this.filters.length}))},allTags(){return this.allWorks.map((({title:t,time:e,tags:s})=>(s||[]).concat(e,t))).flat().filter((t=>"undefined"!==typeof t)).sort().filter(((t,e,s)=>t&&s.indexOf(t)===e))},Category(){return this.category[0].toUpperCase()+this.category.substring(1)},hash(){return window.location.hash.replace("#","")}},data(){return{filters:this.defaultFilters,allWorks:[],meta:void 0}},methods:{onTagClick(t,e=!1){e&&this.filters.splice(0,this.filters.length),t&&!this.filters.includes(t)&&(this.filters.push(t),this.$refs.top.scrollIntoView())},onDescriptionClick(t){if(t.path.map((t=>t.tagName)).includes("A")){const e=t.target.innerText;"all"!==e?this.onTagClick(e,!0):this.onTagClick(!1,!0)}}}},ne=oe,re=(0,h.Z)(ne,J,V,!1,null,"05c0656d",null),ae=re.exports,le=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"footer"},[s("div",{staticClass:"footer-item"},[t._v("Make with love by Dipsy, Copyright© 2021 All Right Reserved")]),s("div",{staticClass:"footer-item"},[s("a",{attrs:{href:"https://github.com/dipsywong98/dipsywong98.github.io"}},[s("div",[t._v("Last Update: "+t._s(t.lastTime))]),s("div",[t._v(t._s(t.lastMessage))])])])])])},ce=[],ue={mounted(){K("https://api.github.com/repositories/167823230/commits/dev").then((t=>t.json())).then((t=>{this.lastTime=t.commit.author.date+" ",this.lastMessage=t.commit.message}))},data(){return{lastMessage:"",lastTime:""}}},he=ue,de=(0,h.Z)(he,le,ce,!1,null,null,null),pe=de.exports,me=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sorter-root"},[s("div",{staticClass:"container"},[s("table",[t._m(0),t._l(t.works,(function(e){return s("tr",{staticClass:"sorter-item",on:{mousedown:function(s){return t.onDown(s,e)},mousemove:function(s){return t.onHover(s,e)}}},[s("td",[t._v("m")]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"work.title"}],domProps:{value:e.title},on:{input:function(s){s.target.composing||t.$set(e,"title",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.time,expression:"work.time"}],domProps:{value:e.time},on:{input:function(s){s.target.composing||t.$set(e,"time",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.favorite,expression:"work.favorite"}],staticClass:"digit",attrs:{type:"number"},domProps:{value:e.favorite},on:{input:function(s){s.target.composing||t.$set(e,"favorite",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.brief,expression:"work.brief"}],domProps:{value:e.brief},on:{input:function(s){s.target.composing||t.$set(e,"brief",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.titleLink,expression:"work.titleLink"}],domProps:{value:e.titleLink},on:{input:function(s){s.target.composing||t.$set(e,"titleLink",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.liveLink,expression:"work.liveLink"}],domProps:{value:e.liveLink},on:{input:function(s){s.target.composing||t.$set(e,"liveLink",s.target.value)}}})]),s("td",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tags,expression:"work.tags"}],domProps:{value:e.tags},on:{input:function(s){s.target.composing||t.$set(e,"tags",s.target.value)}}})])])}))],2),s("textarea",{domProps:{value:t.yml}})])])},fe=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("td"),s("td",[t._v("title")]),s("td",[t._v("time")]),s("td",[t._v("f")]),s("td",[t._v("brief")]),s("td",[t._v("titleLink")]),s("td",[t._v("liveLink")]),s("td",[t._v("tags")])])}],ve={props:["category"],data(){return{works:[],down:!1,hover:!1,x:0,y:0}},computed:{yml(){return(0,z.PC)(this.works)}},mounted(){ee(this.category).then((t=>this.works=t)),window.addEventListener("mouseup",this.onUp)},beforeDestroy(){window.removeEventListener("mouseup",this.onUp)},methods:{onDown(t,e){this.down=e},onUp(){this.down&&this.hover&&this.swap(this.works,this.down,this.hover),this.down=!1,this.hover=!1},onHover(t,e){this.down&&this.swap(this.works,this.down,e)},swap(t,e,s){t.forEach(((i,o)=>{i===e?t[o]=s:i===s&&(t[o]=e)})),this.works=t.concat([])}}},ge=ve,we=(0,h.Z)(ge,me,fe,!1,null,null,null),ye=we.exports,ke=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"poptip-root",style:"top:"+t.y+"px; left:"+t.x+"px;"},[s("Tooltip",{attrs:{title:t.title,"always-show":"true"}})],1)},Ce=[],_e=s(1296),be=s.n(_e),xe={components:{Tooltip:F},computed:{title(){return this.$store.state.popText}},data(){return{x:0,y:0}},mounted(){window.addEventListener("mousemove",be()((t=>{this.x=t.screenX,this.y=t.screenY-50})))}},$e=xe,Le=(0,h.Z)($e,ke,Ce,!1,null,null,null),Te=Le.exports,Se={name:"app",components:{Poptip:Te,RippleFullScreen:p,NavBar:y,Dipsyland:$,PhotoBanner:M,NameCard:X,Works:ae,Sorter:ye,Footer:pe},data(){return{rx:0}},methods:{handleScroll(){this.rx=Math.min(window.scrollY/this.$refs.ctn.clientHeight*110,110)}},created(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)}},Ae=Se,Ee=(0,h.Z)(Ae,n,r,!1,null,null,null),Me=Ee.exports;const Be={state:{popText:""},mutations:{popText(t,e){t.popText=e,window.setTimeout((()=>{t.popText=""}),1e3)}}};var Pe=Be;i.Z.config.productionTip=!1,i.Z.use(o.ZP),new i.Z({render:t=>t(Me),store:new o.ZP.Store(Pe)}).$mount("#app")}},e={};function s(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return t[i].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,i,o,n){if(!i){var r=1/0;for(u=0;u<t.length;u++){i=t[u][0],o=t[u][1],n=t[u][2];for(var a=!0,l=0;l<i.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](i[l])}))?i.splice(l--,1):(a=!1,n<r&&(r=n));if(a){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[i,o,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,n,r=i[0],a=i[1],l=i[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in a)s.o(a,o)&&(s.m[o]=a[o]);if(l)var u=l(s)}for(e&&e(i);c<r.length;c++)n=r[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},i=self["webpackChunkdipsyland"]=self["webpackChunkdipsyland"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(1096)}));i=s.O(i)})();
//# sourceMappingURL=app.4baebbdb.js.map