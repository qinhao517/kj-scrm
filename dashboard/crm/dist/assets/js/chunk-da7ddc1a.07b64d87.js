(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da7ddc1a"],{"386d":function(t,e,a){"use strict";var i=a("cb7c"),n=a("83a1"),s=a("5f1b");a("214f")("search",1,(function(t,e,a,o){return[function(a){var i=t(this),n=void 0==a?void 0:a[e];return void 0!==n?n.call(a,i):new RegExp(a)[e](String(i))},function(t){var e=o(a,t,this);if(e.done)return e.value;var r=i(t),c=String(this),l=r.lastIndex;n(l,0)||(r.lastIndex=0);var p=s(r,c);return n(r.lastIndex,l)||(r.lastIndex=l),null===p?-1:p.index}]}))},"5d8f":function(t,e,a){var i=a("7b849");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("e78a5530",i,!0,{sourceMap:!1,shadowMode:!1})},"7b849":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".time-line-time[data-v-6dae06e2]{display:inline-block;vertical-align:top;margin-left:10px;color:rgba(0,0,0,.5)}.time-line-title[data-v-6dae06e2]{display:inline-block;max-width:80%;text-align:left;white-space:pre-line;word-break:break-word;word-wrap:break-word;margin-left:30px;color:rgba(0,0,0,.8);vertical-align:text-top}.content-msg[data-v-6dae06e2]{min-width:845px;width:calc(100% - 40px);border:1px solid #ffdda6;background:#fff2db;padding:10px;margin:10px 20px;text-align:left}",""])},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},a768:function(t,e,a){"use strict";var i=a("5d8f"),n=a.n(i);n.a},fd76:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%","max-height":"100%",position:"absolute","overflow-y":"auto","padding-bottom":"30px"}},[a("div",[a("div",{staticStyle:{height:"60px","line-height":"60px","background-color":"#FFFFFF","border-bottom":"1px solid #E2E2E2","font-size":"16px",padding:"0px 20px"}},[t._v("\n\t\t\t"+t._s(t.attachment.type)+" 素材 "+t._s(t.attachment.title)+"\n\t\t\t"),a("router-link",{staticStyle:{"font-size":"16px",float:"right"},attrs:{to:"/filingCabinet/list"}},[a("a-button",{attrs:{type:"primary",icon:"rollback"}},[t._v("返回列表")])],1)],1),t._m(0),a("div",{staticClass:"content-bd",staticStyle:{"margin-top":"10px"}},[a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.isLoading}},[a("div",{staticClass:"spin-content"},[a("a-row",{staticStyle:{"margin-bottom":"20px",padding:"0 20px"}},[a("a-col",{attrs:{span:24}},[a("a-card",[a("div",{staticStyle:{padding:"32px 32px 20px 32px"}},[a("a-row",{attrs:{gutter:16}},[a("a-col",{staticStyle:{padding:"0px"},attrs:{span:8}},[a("a-card",{attrs:{bodyStyle:{background:"#F9F9F9",padding:"24px !important"}}},[a("a-statistic",{attrs:{value:t.searchNum,valueStyle:{color:"#3F8600",textAlign:"right"}}},[a("template",{slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t搜索次数\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[t._v("被员工搜索的次数")])]),a("a-icon",{staticStyle:{"margin-left":"5px"},attrs:{type:"question-circle"}})],2)],1)],2)],1)],1),a("a-col",{staticStyle:{padding:"0px"},attrs:{span:8}},[a("a-card",{attrs:{bodyStyle:{background:"#F9F9F9",padding:"24px !important"}}},[a("a-statistic",{staticStyle:{background:"#F9F9F9"},attrs:{value:t.sendNum,valueStyle:{color:"#3F8600",textAlign:"right"}}},[a("template",{slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t发送次数\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[t._v("被员工发送的次数")])]),a("a-icon",{staticStyle:{"margin-left":"5px"},attrs:{type:"question-circle"}})],2)],1)],2)],1)],1),1==t.isRadar?a("a-col",{staticStyle:{padding:"0px"},attrs:{span:8}},[a("a-card",{attrs:{bodyStyle:{background:"#F9F9F9",padding:"24px !important"}}},[a("a-statistic",{staticStyle:{background:"#F9F9F9"},attrs:{value:t.openNum,valueStyle:{color:"#3F8600",textAlign:"right"}}},[a("template",{slot:"title"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t打开次数\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("a-tooltip",{attrs:{placement:"top"}},[a("template",{slot:"title"},[a("span",[t._v("被同一客户打开多次，会重复计算")])]),a("a-icon",{staticStyle:{"margin-left":"5px"},attrs:{type:"question-circle"}})],2)],1)],2)],1)],1):t._e()],1)],1),a("div",{staticStyle:{padding:"32px 32px 20px 32px"}},[a("a-tabs",{attrs:{type:"card","default-active-key":t.attachmentType},on:{change:t.changeType},model:{value:t.attachmentType,callback:function(e){t.attachmentType=e},expression:"attachmentType"}},[a("a-tab-pane",{key:1},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"search"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t搜索详情\n\t\t\t\t\t\t\t\t\t\t\t")],1),a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.attachmentLoading}},[a("div",{staticClass:"spin-content"},[t.attachmentLoading||0!=t.searchList.length?t._e():a("a-empty"),!t.attachmentLoading&&t.searchList.length>0?[a("a-timeline",{staticStyle:{"margin-top":"20px"}},[t._l(t.searchList,(function(e,i){return a("a-timeline-item",{key:i},[a("div",{staticStyle:{"min-height":"40px"}},[a("div",{staticClass:"time-line-time"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.event_time)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"time-line-title"},[t._v(t._s(e.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])})),t.searchNoMore?a("a-timeline-item",{key:"searchNoMore"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t没有更多了\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()],2),t.searchList.length>0&&t.searchList.length<t.pageSize||t.searchNoMore?t._e():a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",loading:t.pending},on:{click:function(e){return t.loadMore(1)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t加载更多\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]:t._e()],2)])],1),a("a-tab-pane",{key:2},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"right-square"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t发送详情\n\t\t\t\t\t\t\t\t\t\t\t")],1),a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.attachmentLoading}},[a("div",{staticClass:"spin-content"},[t.attachmentLoading||0!=t.sendList.length?t._e():a("a-empty"),!t.attachmentLoading&&t.sendList.length>0?[a("a-timeline",{staticStyle:{"margin-top":"20px"}},[t._l(t.sendList,(function(e,i){return a("a-timeline-item",{key:i},[a("div",{staticStyle:{"min-height":"40px"}},[a("div",{staticClass:"time-line-time"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.event_time)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"time-line-title"},[t._v(t._s(e.content)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])})),t.sendNoMore?a("a-timeline-item",{key:"sendNoMore"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t没有更多了\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()],2),t.sendList.length>0&&t.sendList.length<t.pageSize||t.sendNoMore?t._e():a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",loading:t.pending},on:{click:function(e){return t.loadMore(2)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t加载更多\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]:t._e()],2)])],1),1==t.isRadar?a("a-tab-pane",{key:3},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"eye"}}),t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t打开详情\n\t\t\t\t\t\t\t\t\t\t\t")],1),a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.attachmentLoading}},[a("div",{staticClass:"spin-content"},[t.attachmentLoading||0!=t.openList.length?t._e():a("a-empty"),!t.attachmentLoading&&t.openList.length>0?[a("a-timeline",{staticStyle:{"margin-top":"20px"}},[t._l(t.openList,(function(e,i){return a("a-timeline-item",{key:i},[a("div",{staticStyle:{"min-height":"40px"}},[a("span",{staticClass:"time-line-time"},[t._v(t._s(e.event_time)+"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("span",{staticClass:"time-line-title"},[t._v(t._s(e.content))])])])])})),t.openNoMore?a("a-timeline-item",{key:"openNoMore"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t没有更多了\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t")]):t._e()],2),t.openList.length>0&&t.openList.length<t.pageSize||t.openNoMore?t._e():a("a-button",{staticStyle:{"margin-top":"16px"},attrs:{type:"primary",loading:t.pending},on:{click:function(e){return t.loadMore(3)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t加载更多\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t")])]:t._e()],2)])],1):t._e()],1)],1)])],1)],1)],1)])],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content-msg"},[a("p",{staticStyle:{"margin-bottom":"2px"}},[t._v("\n\t\t\t\t目前，仅对通过聊天侧边栏搜索、发送以及打开内容的行为做统计。\n\t\t\t")])])}],s=(a("386d"),a("96cf"),a("3b8d")),o={name:"Info",data:function(){return{isLoading:!0,attachmentLoading:!0,attachmentId:0,attachmentType:1,page:1,pageSize:15,attachment:{type:"",title:""},searchNum:0,sendNum:0,openNum:0,searchList:[],sendList:[],openList:[],searchNoMore:!1,sendNoMore:!1,openNoMore:!1,pending:!1,type:"",isRadar:0,fileType:""}},methods:{getInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("attachment/statistic",{attachment_id:this.attachmentId,type:this.attachmentType,p:this.page,size:this.pageSize});case 2:e=t.sent,a=e.data,0!=a.error?(this.$message.error(a.error_msg),this.isLoading=!1,this.attachmentLoading=!1,this.pending=!1):(this.searchNum=a.data.info.search,this.sendNum=a.data.info.send,this.openNum=a.data.info.open,this.attachment.type=a.data.attachment.type,this.attachment.title=a.data.attachment.title,a.data.search_list.length>0?(this.searchList=this.searchList.concat(a.data.search_list),this.searchNoMore=a.data.search_list.length<this.pageSize):1==this.attachmentType&&(this.searchNoMore=!0),a.data.send_list.length>0?(this.sendList=this.sendList.concat(a.data.send_list),this.sendNoMore=a.data.send_list.length<this.pageSize):2==this.attachmentType&&(this.sendNoMore=!0),a.data.open_list.length>0?(this.openList=this.openList.concat(a.data.open_list),this.openNoMore=a.data.open_list.length<this.pageSize):3==this.attachmentType&&(this.openNoMore=!0),this.isLoading=!1,this.attachmentLoading=!1,this.pending=!1);case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeType:function(){this.attachmentLoading=!0,this.searchList=[],this.sendList=[],this.openList=[],this.pending=!1,this.page=1,this.getInfo()},loadMore:function(t){this.attachmentType=t,this.pending=!0,this.page++,this.getInfo()}},created:function(){this.attachmentId=this.$route.query.id,this.type=this.$route.query.type,this.isRadar=this.$route.query.is_radar,this.fileType=this.$route.query.file_type,"undefined"!=typeof this.attachmentId?this.getInfo():this.$router.back()},destroyed:function(){}},r=o,c=(a("a768"),a("2877")),l=Object(c["a"])(r,i,n,!1,null,"6dae06e2",null);e["default"]=l.exports}}]);