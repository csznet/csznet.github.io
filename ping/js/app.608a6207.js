(function(){var e={5142:function(e,t,a){"use strict";var n=a(9242),o=a(3396);const l={id:"app"};function r(e,t,a,n,r,s){const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",l,[(0,o.Wm)(i)])}var s={name:"App"},i=a(89);const u=(0,i.Z)(s,[["render",r]]);var c=u,d=a(7657),p=a(678);const g={class:"home-view"};function h(e,t,a,n,l,r){const s=(0,o.up)("z-ping");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(s)])}var b=a(7139);const f=e=>((0,o.dD)("data-v-6e0903e6"),e=e(),(0,o.Cn)(),e),m={class:"container"},w={class:"bar-container"},v={style:{overflow:"auto"}},k=f((()=>(0,o._)("footer",null,[(0,o.Uk)(" Copyright © "),(0,o._)("a",{target:"_blank",href:"https://www.csz.net"},"CSZnet")],-1)));function W(e,t,a,l,r,s){const i=(0,o.up)("el-input"),u=(0,o.up)("el-col"),c=(0,o.up)("el-button"),d=(0,o.up)("el-row"),p=(0,o.up)("el-table-column"),g=(0,o.up)("Plus"),h=(0,o.up)("el-icon"),f=(0,o.up)("Minus"),W=(0,o.up)("el-table"),y=(0,o.up)("TopRight"),D=(0,o.up)("el-link"),_=(0,o.up)("el-dialog"),S=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",m,[(0,o.Wm)(d,{class:"input-row",gutter:20,type:"flex",justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{xs:24,sm:18,md:12,lg:12,xl:12},{default:(0,o.w5)((()=>[(0,o.Wm)(i,{modelValue:r.input,"onUpdate:modelValue":t[0]||(t[0]=e=>r.input=e),placeholder:"请输入域名或者IP",onKeydown:(0,n.D2)((0,n.iM)(s.connectWebSocket,["ctrl"]),["enter"])},null,8,["modelValue","onKeydown"])])),_:1}),(0,o.Wm)(u,{xs:24,sm:6,md:2,lg:2,xl:2,class:"send-button-col"},{default:(0,o.w5)((()=>[r.buttonDisabled?((0,o.wg)(),(0,o.j4)(c,{key:1,onClick:s.disconnectWebSocket,type:"danger"},{default:(0,o.w5)((()=>[(0,o.Uk)(" Stop ")])),_:1},8,["onClick"])):((0,o.wg)(),(0,o.j4)(c,{key:0,onClick:s.connectWebSocket,disabled:!r.input},{default:(0,o.w5)((()=>[(0,o.Uk)(" Send ")])),_:1},8,["onClick","disabled"]))])),_:1})])),_:1}),(0,o.wy)(((0,o.wg)(),(0,o.j4)(W,{class:"custom-table",data:Object.values(s.groupedData),height:"500",border:"",stripe:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{type:"expand"},{default:(0,o.w5)((e=>[(0,o.Wm)(W,{data:e.row,height:"300",border:""},{default:(0,o.w5)((()=>[(0,o.Wm)(p,{prop:"id",label:"序号",sortable:""}),(0,o.Wm)(p,{prop:"Host",label:"主机",sortable:""}),(0,o.Wm)(p,{prop:"Loss",label:"丢包率",sortable:""}),(0,o.Wm)(p,{prop:"Last",label:"最后一次",sortable:""}),(0,o.Wm)(p,{prop:"Avg",label:"平均",sortable:""}),(0,o.Wm)(p,{prop:"Best",label:"最佳",sortable:""}),(0,o.Wm)(p,{prop:"Wrst",label:"最差",sortable:""}),(0,o.Wm)(p,{prop:"StDev",label:"标准差",sortable:""}),(0,o.Wm)(p,{label:"详情"},{default:(0,o.w5)((e=>[e.row.origData&&e.row.origData.length?((0,o.wg)(),(0,o.j4)(c,{key:0,onClick:t=>s.showDialog(e.row.origData),type:"",size:"small",plain:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(g)])),_:1})])),_:2},1032,["onClick"])):((0,o.wg)(),(0,o.j4)(c,{key:1,size:"small",plain:"",disabled:""},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(f)])),_:1})])),_:1}))])),_:2},1024)])),_:2},1032,["data"])])),_:1}),(0,o.Wm)(p,{label:"Provide"},{default:(0,o.w5)((({row:e})=>[(0,o.Uk)((0,b.zw)(e[0].clientName)+" ",1),(0,o.Wm)(D,{type:"primary",href:e[0].clientUrl,target:"_blank",class:"client-url-link"},{default:(0,o.w5)((()=>[(0,o.Wm)(h,null,{default:(0,o.w5)((()=>[(0,o.Wm)(y)])),_:1})])),_:2},1032,["href"])])),_:1}),(0,o.Wm)(p,{label:"Send",prop:"length",sortable:""},{default:(0,o.w5)((({row:e})=>[(0,o.Uk)((0,b.zw)(e.length),1)])),_:1}),(0,o.Wm)(p,{label:"Loss",prop:"averageLoss",sortable:""},{default:(0,o.w5)((({row:e})=>[(0,o.Uk)((0,b.zw)(s.calculateAverageLoss(e))+"% ",1)])),_:1}),(0,o.Wm)(p,{label:"Best",prop:"minBest",sortable:""},{default:(0,o.w5)((({row:e})=>[(0,o.Uk)((0,b.zw)(s.calculateMinBest(e)),1)])),_:1}),(0,o.Wm)(p,{label:"Wrst",prop:"maxWrst",sortable:""},{default:(0,o.w5)((({row:e})=>[(0,o.Uk)((0,b.zw)(s.calculateMaxWrst(e)),1)])),_:1}),(0,o.Wm)(p,{label:"Host",prop:"frequentHost",sortable:""},{default:(0,o.w5)((({row:e})=>[(0,o.Uk)((0,b.zw)(s.mostFrequentHost(e)),1)])),_:1}),(0,o.Wm)(p,{label:"Char",fixed:"right"},{default:(0,o.w5)((({row:e})=>[(0,o._)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.barChartData(e),((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:(0,b.C_)(["bar",e.color]),style:(0,b.j5)({height:`${e.height}%`})},null,6)))),128))])])),_:1})])),_:1},8,["data"])),[[S,r.loading]]),(0,o.Wm)(_,{modelValue:r.dialogVisible,"onUpdate:modelValue":t[1]||(t[1]=e=>r.dialogVisible=e),width:"50%"},{default:(0,o.w5)((()=>[(0,o._)("pre",v,(0,b.zw)(r.dialogData),1)])),_:1},8,["modelValue"])]),k],64)}a(7658);var y=a(8082),D=a.n(y),_={data(){return{input:"",socket:null,tableData:[],buttonDisabled:!1,activePanels:[],loading:!1,dialogData:null,dialogVisible:!1}},watch:{input(e){const t=e.replace(/[^a-zA-Z0-9.-]/g,"");t!==e&&(this.input=t)}},created(){this.setInputDefaultValue()},computed:{barChartData(){return e=>e.map((t=>{let a={};return t.Loss>0&&100==t.Loss?a={height:100}:a.height=this.getBarHeight(t.Avg/this.calculateAverageAvg(e)),a.color=this.getBarColor(t.Loss),a}))},groupedData(){return this.tableData.reduce(((e,t)=>(e[t.uuid]||(e[t.uuid]=[]),e[t.uuid].push(t),e)),{})},formattedGroupedData(){let e=[];for(const t in this.groupedData){let a=this.groupedData[t];e.push({data:a,length:a.length})}return e}},methods:{showDialog(e){console.log(e),this.dialogData=e,this.dialogVisible=!0},getBarColor(e){return e<20?"bg-green":e<40?"bg-yellow":e<60?"bg-orange":"bg-red"},getBarHeight(e){return 1==e?100:e>1?100*(1-(e-1)):e<1?100*(1-e+1):void 0},setInputDefaultValue(){const e=this.$route.query.t;e&&(this.input=e)},isDomainOrIP(e){const t=/^(?=.{1,255})(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.?)+(?:[A-Za-z]{2,6})$/,a=/^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;return t.test(e)||a.test(e)},onDataReceived(e){let t=this.groupedData.find((t=>t.clientName===e.clientName));t||(t={clientName:e.clientName,clientUrl:e.clientUrl,data:[]},this.groupedData.push(t)),t.data.push(e),this.groupedData=[...this.groupedData]},generateToken(e){const t=D().SHA256(`${e}bbbb`);return t.toString(D().enc.Hex)},async createRequestMessage(e,t){const a=Math.floor(Date.now()/1e3).toString(),n=this.generateToken(a);return{time:a,type:e,content:t,token:n}},async connectWebSocket(){if(this.isDomainOrIP(this.input)&&this.input)if(this.socket&&this.socket.readyState===WebSocket.OPEN){const e=await this.createRequestMessage("ping",this.input);this.socket.send(JSON.stringify(e)),this.buttonDisabled=!0}else this.socket=new WebSocket("wss://wss.csz.net/ws"),this.socket.addEventListener("open",(async()=>{const e=await this.createRequestMessage("ping",this.input);this.socket.send(JSON.stringify(e)),this.buttonDisabled=!0})),this.tableData=[],this.loading=!0,this.socket.addEventListener("message",(e=>{try{const t=JSON.parse(e.data);this.tableData.push(t),this.loading=!1;const a=this.tableData.reduce(((e,t)=>(e[t.uuid]=(e[t.uuid]||0)+1,e)),{}),n=Object.values(a).every((e=>e>=10));n&&this.disconnectWebSocket()}catch(t){console.error("Received invalid JSON:",e.data)}this.loading=!1})),this.socket.addEventListener("error",(()=>{this.$message.error("服务端握手失败"),this.buttonDisabled=!1}));else this.$message.error("请输入域名或者IP")},disconnectWebSocket(){this.socket&&(this.socket.close(),this.socket=null,this.buttonDisabled=!1,this.loading=!1)},mostFrequentHost(e){const t=e.reduce(((e,t)=>(e[t.Host]||(e[t.Host]=0),e[t.Host]++,e)),{});let a=0,n="";for(const o in t)t[o]>a&&(a=t[o],n=o);return n},togglePanel(e){const t=this.activePanels.indexOf(e);-1===t?this.activePanels.push(e):this.activePanels.splice(t,1)},calculateAverageAvg(e){const t=e.reduce(((e,t)=>e+t.Avg),0);return(t/e.length).toFixed(2)},calculateAverageLoss(e){const t=e.reduce(((e,t)=>e+t.Loss),0);return(t/e.length).toFixed(2)},calculateMinBest(e){return Math.min(...e.map((e=>e.Best)))},calculateMaxWrst(e){return Math.max(...e.map((e=>e.Wrst)))}}};const S=(0,i.Z)(_,[["render",W],["__scopeId","data-v-6e0903e6"]]);var O=S,x={components:{ZPing:O},name:"HomeView"};const C=(0,i.Z)(x,[["render",h]]);var j=C;const P=[{path:"/",name:"Home",component:j,meta:{title:"Ping - CSZnet"}}],z=(0,p.p7)({history:(0,p.r5)(),routes:P});var H=z,M=a(65),A=(0,M.MT)({state:{},mutations:{},actions:{},modules:{}}),U=a(9579),L=(a(4415),a(2748));const V=(0,n.ri)(c),B=(0,d.Bg)();V.use(B),V.use(A).use(H).use(U.Z);for(const[Z,N]of Object.entries(L))V.component(Z,N);V.mount("#app"),H.afterEach((e=>{e.meta&&e.meta.title?document.title=e.meta.title:document.title="CSZnet"}))},2480:function(){}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,l){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,i=0;i<n.length;i++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](n[i])}))?n.splice(i--,1):(s=!1,l<r&&(r=l));if(s){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[n,o,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,l,r=n[0],s=n[1],i=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var c=i(a)}for(t&&t(n);u<r.length;u++)l=r[u],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(c)},n=self["webpackChunkzping_web"]=self["webpackChunkzping_web"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(5142)}));n=a.O(n)})();
//# sourceMappingURL=app.608a6207.js.map