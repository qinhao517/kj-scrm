(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-30c6f8a9"],{"0f92":function(t,e,s){var a=s("d88a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=s("499e").default;n("f1fdc7c4",a,!0,{sourceMap:!1,shadowMode:!1})},"1c4c":function(t,e,s){"use strict";var a=s("9b43"),n=s("5ca1"),i=s("4bf8"),r=s("1fa8"),o=s("33a4"),c=s("9def"),u=s("f1ae"),l=s("27ee");n(n.S+n.F*!s("5cc5")((function(t){Array.from(t)})),"Array",{from:function(t){var e,s,n,p,h=i(t),d="function"==typeof this?this:Array,f=arguments.length,y=f>1?arguments[1]:void 0,_=void 0!==y,g=0,m=l(h);if(_&&(y=a(y,f>2?arguments[2]:void 0,2)),void 0==m||d==Array&&o(m))for(e=c(h.length),s=new d(e);e>g;g++)u(s,g,_?y(h[g],g):h[g]);else for(p=m.call(h),s=new d;!(n=p.next()).done;g++)u(s,g,_?r(p,y,[n.value,g],!0):n.value);return s.length=g,s}})},"4bef":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABAElEQVR42s3VIY7CUBAG4LkEliC4xKJ6BA6AognXQBLCAVBYNBK3pim7zP8XBAJHSLhAZVURi+jC2+681xD4R89nZiYjIhojQRlQicYiolFQ8600EqZNAKbSpB0lyqcCBeYccIA5ihDgtO3JLdseTr7Ap9wFRx+g2HTuge8PH+AsjuBiBzZO4MsOHJzAwQ7kTiD3mcLsoX3muQcaV9s1DtnENUfssssR1i+6hRcD3GPFBaeccoEV9z7AUodoP4yxrUMs/wd26EtN0MeuBuBYDOH4LyDPWhYga1WXugpMxBhMnIBGVqD6S34B9nqvTUwaAUnNpZue689/DnuwTDUSuQJ1pL7YQ6lKkQAAAABJRU5ErkJggg=="},"4f7f":function(t,e,s){"use strict";var a=s("c26b"),n=s("b39a"),i="Set";t.exports=s("e0b8")(i,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return a.def(n(this,i),t=0===t?0:t,t)}},a)},"54e0":function(t,e,s){"use strict";var a=s("0f92"),n=s.n(a);n.a},a5c9:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"scroll",staticStyle:{width:"100%",height:"100%",position:"absolute","overflow-y":"auto","padding-bottom":"30px"}},[a("div",[a("div",{staticStyle:{height:"50px","line-height":"50px","background-color":"#FFFFFF"}},[a("label",{staticStyle:{"margin-left":"20px"}},[t._v("\n\t\t\t\t\t"+t._s(t.title)+"：\n\t\t\t\t")]),a("a-button",{staticStyle:{float:"right",margin:"9px 20px 0 0"},attrs:{type:"primary",icon:"rollback"},on:{click:t.rollback}},[t._v("\n\t\t\t\t\t返回列表\n\t\t\t\t")])],1)]),a("div",{staticStyle:{margin:"10px 0px",padding:"10px 20px 0 20px"}},[a("a-input",{staticStyle:{width:"180px"},attrs:{placeholder:"搜索参与者名称",allowClear:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchFans(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("a-select",{staticStyle:{width:"120px","margin-left":"10px"},attrs:{placeholder:"发送状态"},model:{value:t.sendStatus,callback:function(e){t.sendStatus=e},expression:"sendStatus"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("未发放")]),a("a-select-option",{attrs:{value:"1"}},[t._v("已发放")])],1),a("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:t.searchFans}},[t._v("搜索")]),a("a-button",{staticStyle:{"margin-left":"10px"},on:{click:t.reloadParticipants}},[t._v("清空")])],1),a("div",{staticClass:"participants"},[a("div",{staticStyle:{padding:"0 20px 20px"}},[a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.isLoading1}},[a("a-table",{attrs:{columns:t.columns1,dataSource:t.participantsList,pagination:!1,rowClassName:t.rowClassName,rowSelection:t.rowSelection},scopedSlots:t._u([{key:"user",fn:function(e,n){return a("span",{},[n.avatar?a("a-avatar",{staticStyle:{float:"left"},attrs:{shape:"square",size:42,src:n.avatar}}):t._e(),n.avatar?t._e():a("img",{staticStyle:{width:"42px",height:"42px",float:"left"},attrs:{src:s("4bef")}}),a("div",{staticClass:"participant-name"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.name)+"\n\t\t\t\t\t\t\t\t\t\t")])],1)}},{key:"status",fn:function(e,s){return a("span",{},[0==s.status?a("span",[t._v("未完成")]):t._e(),1==s.status?a("span",[t._v("进行中")]):t._e(),2==s.status?a("span",[t._v("已完成")]):t._e()])}},{key:"complete_time",fn:function(e,s){return a("span",{},[2==s.status?a("span",[t._v(t._s(s.complete_time))]):t._e(),2!=s.status?a("span",[t._v("--")]):t._e()])}},{key:"help",fn:function(e,s){return a("span",{},[t._v("\n\t\t\t\t\t\t\t"+t._s(s.help_num)+"/"+t._s(s.friend_amount)),2!=s.status?a("span",[t._v("（还差"+t._s(s.invite_amount-s.help_num)+"人成功）")]):t._e()])}},{key:"first_amount",fn:function(e,s){return a("span",{},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(s.first_amount)+"元（\n\t\t\t\t\t\t\t"),a("a-tooltip",[a("template",{slot:"title"},[t._v("\n                                    余额不足，无法发放\n                                ")]),0==s.first_send_status?a("span",[t._v("未发放")]):t._e()],2),1==s.first_send_status?a("span",[t._v("已发放")]):t._e(),t._v("\n\t\t\t\t\t\t\t）\n\t\t\t\t\t\t\t")],1)}},{key:"send_status",fn:function(e,s){return a("span",{},[a("a-tooltip",[a("template",{slot:"title"},[0==t.is_end&&2==s.status&&1==t.send_type?[t._v("\n                                        余额不足，无法发放\n                                    ")]:t._e(),0==t.is_end&&2==s.status&&2==t.send_type?[t._v("\n                                        等活动结束后，再发放\n                                    ")]:t._e(),0==t.is_end&&0==s.status?[t._v("\n                                        尚在裂变中\n                                    ")]:t._e(),1==t.is_end&&2==s.status?[t._v("\n                                        余额不足，无法发放\n                                    ")]:t._e(),1==t.is_end&&0==s.status?[t._v("\n                                        --\n                                    ")]:t._e()],2),0==s.send_status?a("span",[t._v("未发放")]):t._e()],2),1==s.send_status?a("span",[t._v("已发放")]):t._e()],1)}},{key:"action",fn:function(e,s){return a("span",{},[a("a-button",{staticStyle:{margin:"0 5px 5px 0"},on:{click:function(e){return t.helpRecord(s.id,s.name)}}},[t._v("助力记录")]),a("a-popconfirm",{attrs:{okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.manualRelease(s.id)}}},[a("template",{slot:"title"},[a("div",[t._v("确定发放给该客户吗？")])]),0==s.first_send_status||0==s.send_status&&2==s.status&&(2!=t.send_type||0!=t.is_end)?a("a-button",{staticStyle:{margin:"0 5px 5px 0"}},[t._v("手动发放")]):t._e()],2),a("a-popconfirm",{attrs:{okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.signRelease(s.id)}}},[a("template",{slot:"title"},[a("div",[t._v("确定发放给该客户吗？")])]),0==s.first_send_status||0==s.send_status&&2==s.status&&(2!=t.send_type||0!=t.is_end)?a("a-button",{staticStyle:{margin:"0 5px 5px 0"}},[t._v("标记发放")]):t._e()],2)],1)}}])}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.total2>0&&t.userKeys.length>0,expression:"total2 > 0 && userKeys.length > 0"}],staticStyle:{margin:"20px"}},[a("a-checkbox",{on:{click:t.batchTypeChange},model:{value:t.batchTypeValue,callback:function(e){t.batchTypeValue=e},expression:"batchTypeValue"}}),a("a-select",{staticStyle:{width:"150px",margin:"0 5px"},attrs:{optionFilterProp:"children"},on:{change:t.changeBatchType},model:{value:t.batchType,callback:function(e){t.batchType=e},expression:"batchType"}},[a("a-select-option",{attrs:{value:"0"}},[t._v("选择当前页")]),a("a-select-option",{attrs:{value:"1"}},[t._v("选择所有")])],1),a("a-popconfirm",{attrs:{okText:"确定",cancelText:"取消",disabled:!(this.selectedRowKeys.length>0)},on:{confirm:function(e){return t.bulkChangeLimit(t.selectedRowKeys)}}},[a("template",{slot:"title"},[a("div",[t._v("确定批量手动发放吗？")])]),a("a-button",{attrs:{type:"primary",disabled:!(this.selectedRowKeys.length>0)}},[t._v("批量手动发放\n\t\t\t\t\t\t\t")])],2)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.total2>0,expression:"total2 > 0"},{name:"has",rawName:"v-has",value:"employee-list",expression:"'employee-list'"}],staticClass:"pagination",staticStyle:{width:"100%",position:"absolute",margin:"40px 0px 20px"}},[a("div",{staticStyle:{height:"32px",float:"left","line-height":"32px"}},[t._v("\n\t\t\t\t\t\t\t共\n\t\t\t\t\t\t\t"),a("span",{staticStyle:{color:"blue"}},[t._v(t._s(t.total2))]),t._v("条\n\t\t\t\t\t\t")]),a("div",{staticClass:"pagination",staticStyle:{height:"32px",float:"right"}},[a("a-pagination",{attrs:{total:t.total2,showSizeChanger:"",showQuickJumper:t.quickJumper2,current:t.page2,pageSize:t.pageSize2,pageSizeOptions:["15","30","50","100"]},on:{change:t.changePage2,showSizeChange:t.showSizeChange2}})],1)])],1)],1)])])},n=[],i=s("75fc"),r=(s("4f7f"),s("5df3"),s("1c4c"),s("55dd"),s("6b54"),s("6762"),s("2fdb"),s("ac6a"),s("7f7f"),s("7618")),o=(s("96cf"),s("3b8d")),c=[{title:"参与人",dataIndex:"user",key:"user",width:"200px",scopedSlots:{customRender:"user"}},{title:"任务状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"已拆红包人数/金额（元）",dataIndex:"help",key:"help",scopedSlots:{customRender:"help"}},{title:"参与时间",dataIndex:"join_time",key:"join_time"},{title:"首拆",dataIndex:"first_amount",key:"first_amount",scopedSlots:{customRender:"first_amount"}},{title:"完成时间",dataIndex:"complete_time",key:"complete_time",scopedSlots:{customRender:"complete_time"}},{title:"剩余发放状态",dataIndex:"send_status",key:"send_status",scopedSlots:{customRender:"send_status"}},{title:"操作",dataIndex:"action",key:"action",width:"15%",scopedSlots:{customRender:"action"}}],u={name:"redFissionParticipants",data:function(){return{title:"",columns1:c,name:"",isLoading1:!1,participantsList:[],fid:"",total2:0,page2:1,pageSize2:15,quickJumper2:!1,selectedRowKeys:[],userKeys:[],batchType:"1",batchTypeValue:!1,checkArr:[],sendStatus:[],is_end:0,send_type:1}},methods:{rowClassName:function(t,e){var s="dark-row";return e%2===0&&(s="light-row"),s},rollback:function(){this.$router.go(-1)},searchFans:function(){this.participants(1,15)},prizeStatus:function(t){var e=this;e.$confirm({title:"确定奖品发放吗？",okText:"确定",okType:"primary",cancelText:"取消",onOk:function(){e.prizeStatusDeal(t)}})},prizeStatusDeal:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("fission/prize-status",{uid:localStorage.getItem("uid"),jid:e});case 2:s=t.sent,a=s.data,0!=a.error?(this.isLoading1=!1,this.$message.error(a.error_msg)):(this.selectedRowKeys=[],this.participants(this.page2,this.pageSize2));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),reloadParticipants:function(){this.name="",this.sendStatus=[],this.participants(1,15)},participants:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,s,a,n,i,o,c=this,u=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=u.length>0&&void 0!==u[0]?u[0]:1,s=u.length>1&&void 0!==u[1]?u[1]:this.pageSize2,this.isLoading1=!0,a=-1,a="object"==Object(r["a"])(this.sendStatus)&&0==this.sendStatus.length?-1:this.sendStatus,t.next=7,this.axios.post("red-pack/join-list",{uid:localStorage.getItem("uid"),rid:this.fid,name:this.name,send_status:a,page:e,pageSize:s});case 7:n=t.sent,i=n.data,0!=i.error?(this.isLoading1=!1,this.$message.error(i.error_msg)):(this.isLoading1=!1,this.page2=e,this.pageSize2=s,this.total2=parseInt(i.data.count),this.participantsList=i.data.join,this.is_end=i.data.is_end,this.userKeys=i.data.keys,this.send_type=i.data.send_type,o=this.selectedRowKeys,this.checkArr=[],this.participantsList.map((function(t){0==t.send_status&&2==t.status&&c.checkArr.push(t.key)})),"0"==this.batchType?this.checkArr.length>0?this.batchTypeValue=this.checkArr.every((function(t){return o.includes(t)})):this.batchTypeDisabled=!0:"1"==this.batchType&&(this.userKeys.length>0?this.batchTypeValue=o.sort().toString()==this.userKeys.sort().toString():this.batchTypeDisabled=!0));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changePage2:function(t,e){this.participants(t,this.pageSize2),document.getElementsByClassName("scroll")[0].scrollTo(0,0)},showSizeChange2:function(t,e){this.participants(this.page2,e)},onSelectChange:function(t){this.selectedRowKeys=t,"0"==this.batchType?this.batchTypeValue=this.checkArr.every((function(e){return t.includes(e)})):"1"==this.batchType&&(this.batchTypeValue=t.sort().toString()==this.userKeys.sort().toString())},helpRecord:function(t,e){this.$router.push("/redFission/helpRecord?jid="+t+"&name="+e)},manualRelease:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("red-pack/join-hand-send",{uid:localStorage.getItem("uid"),rid:this.fid,jid:e});case 2:s=t.sent,a=s.data,0!=a.error?this.$message.error(a.error_msg):(0==a.data.success?this.$message.error(a.data.textHtml):this.$message.success(a.data.textHtml),this.selectedRowKeys=[],this.participants());case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),signRelease:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var s,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("red-pack/join-status",{uid:localStorage.getItem("uid"),jid:e});case 2:s=t.sent,a=s.data,0!=a.error?this.$message.error(a.error_msg):(this.$message.success("已成功标记发放"),this.selectedRowKeys=[],this.participants());case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),batchTypeChange:function(){var t=this;this.batchTypeValue?this.selectedRowKeys=[]:"0"==this.batchType?(this.participantsList.map((function(e){0==e.send_status&&2==e.status&&t.selectedRowKeys.push(e.key)})),this.selectedRowKeys=Array.from(new Set(this.selectedRowKeys))):"1"==this.batchType&&(this.selectedRowKeys=this.userKeys)},changeBatchType:function(){var t=this;this.batchTypeDisabled||(this.batchTypeValue?"0"==this.batchType?(this.selectedRowKeys=[],this.participantsList.map((function(e){0==e.send_status&&2==e.status&&t.selectedRowKeys.push(e.key)})),this.selectedRowKeys=Array.from(new Set(this.selectedRowKeys))):"1"==this.batchType&&(this.selectedRowKeys=Object(i["a"])(this.userKeys.valueOf())):"0"==this.batchType?this.batchTypeValue=this.checkArr.every((function(e){return t.selectedRowKeys.includes(e)})):"1"==this.batchType&&(this.batchTypeValue=this.selectedRowKeys.sort().toString()==this.userKeys.sort().toString()))},bulkChangeLimit:function(t){this.manualRelease(t)}},mounted:function(){this.title=decodeURIComponent(this.$route.query.title),this.fid=decodeURIComponent(this.$route.query.fid),this.participants()},beforeRouteEnter:function(t,e,s){"/redFission/helpRecord"!=e.path&&s((function(t){t.title=decodeURIComponent(t.$route.query.title),t.fid=decodeURIComponent(t.$route.query.fid),t.page2=1,t.pageSize2=15,t.name="",t.selectedRowKeys=[],t.userKeys=[],t.batchType="1",t.batchTypeValue=!1,t.participants()})),s()},computed:{rowSelection:function(){var t=this,e=this.selectedRowKeys;return{selectedRowKeys:e,onChange:this.onSelectChange,hideDefaultSelections:!0,getCheckboxProps:function(e){return{props:{disabled:0!=e.first_send_status&&(0!=e.send_status||2!=e.status||2==t.send_type&&0==t.is_end)}}}}}}},l=u,p=(s("54e0"),s("2877")),h=Object(p["a"])(l,a,n,!1,null,"80f0490c",null);e["default"]=h.exports},b39a:function(t,e,s){var a=s("d3f4");t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},c26b:function(t,e,s){"use strict";var a=s("86cc").f,n=s("2aeb"),i=s("dcbc"),r=s("9b43"),o=s("f605"),c=s("4a59"),u=s("01f9"),l=s("d53b"),p=s("7a56"),h=s("9e1e"),d=s("67ab").fastKey,f=s("b39a"),y=h?"_s":"size",_=function(t,e){var s,a=d(e);if("F"!==a)return t._i[a];for(s=t._f;s;s=s.n)if(s.k==e)return s};t.exports={getConstructor:function(t,e,s,u){var l=t((function(t,a){o(t,l,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[y]=0,void 0!=a&&c(a,s,t[u],t)}));return i(l.prototype,{clear:function(){for(var t=f(this,e),s=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete s[a.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var s=f(this,e),a=_(s,t);if(a){var n=a.n,i=a.p;delete s._i[a.i],a.r=!0,i&&(i.n=n),n&&(n.p=i),s._f==a&&(s._f=n),s._l==a&&(s._l=i),s[y]--}return!!a},forEach:function(t){f(this,e);var s,a=r(t,arguments.length>1?arguments[1]:void 0,3);while(s=s?s.n:this._f){a(s.v,s.k,this);while(s&&s.r)s=s.p}},has:function(t){return!!_(f(this,e),t)}}),h&&a(l.prototype,"size",{get:function(){return f(this,e)[y]}}),l},def:function(t,e,s){var a,n,i=_(t,e);return i?i.v=s:(t._l=i={i:n=d(e,!0),k:e,v:s,p:a=t._l,n:void 0,r:!1},t._f||(t._f=i),a&&(a.n=i),t[y]++,"F"!==n&&(t._i[n]=i)),t},getEntry:_,setStrong:function(t,e,s){u(t,e,(function(t,s){this._t=f(t,e),this._k=s,this._l=void 0}),(function(){var t=this,e=t._k,s=t._l;while(s&&s.r)s=s.p;return t._t&&(t._l=s=s?s.n:t._t._f)?l(0,"keys"==e?s.k:"values"==e?s.v:[s.k,s.v]):(t._t=void 0,l(1))}),s?"entries":"values",!s,!0),p(e)}}},d88a:function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,".participants[data-v-80f0490c]{margin:10px 20px;background-color:#fff}[data-v-80f0490c] .ant-tabs-card-content{padding-bottom:0!important}.participant-name[data-v-80f0490c]{float:left;margin-left:10px;line-height:42px;max-width:100px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}[data-v-80f0490c] .ant-table-thead>tr>th:first-child .ant-table-header-column{display:none}",""])},e0b8:function(t,e,s){"use strict";var a=s("7726"),n=s("5ca1"),i=s("2aba"),r=s("dcbc"),o=s("67ab"),c=s("4a59"),u=s("f605"),l=s("d3f4"),p=s("79e5"),h=s("5cc5"),d=s("7f20"),f=s("5dbc");t.exports=function(t,e,s,y,_,g){var m=a[t],v=m,b=_?"set":"add",w=v&&v.prototype,x={},S=function(t){var e=w[t];i(w,t,"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,s){return e.call(this,0===t?0:t,s),this})};if("function"==typeof v&&(g||w.forEach&&!p((function(){(new v).entries().next()})))){var k=new v,R=k[b](g?{}:-0,1)!=k,T=p((function(){k.has(1)})),A=h((function(t){new v(t)})),K=!g&&p((function(){var t=new v,e=5;while(e--)t[b](e,e);return!t.has(-0)}));A||(v=e((function(e,s){u(e,v,t);var a=f(new m,e,v);return void 0!=s&&c(s,_,a[b],a),a})),v.prototype=w,w.constructor=v),(T||K)&&(S("delete"),S("has"),_&&S("get")),(K||R)&&S(b),g&&w.clear&&delete w.clear}else v=y.getConstructor(e,t,_,b),r(v.prototype,s),o.NEED=!0;return d(v,t),x[t]=v,n(n.G+n.W+n.F*(v!=m),x),g||y.setStrong(v,t,_),v}}}]);