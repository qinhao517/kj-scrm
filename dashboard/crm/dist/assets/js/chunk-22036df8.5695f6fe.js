(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22036df8"],{"0ecf":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".custom-team[data-v-3095c98e]{width:100%;height:100%}.ant-layout-header[data-v-3095c98e]{background:#fff;border-bottom:1px solid #e2e2e2;height:50px;min-width:885px;width:100%;line-height:50px;padding:0 20px;font-size:16px;text-align:left}.ant-layout-content[data-v-3095c98e]{margin:20px;min-width:885px}.tabBtn[data-v-3095c98e]{margin:0;margin-right:2px;padding:10px 16px;line-height:38px;background:#fafafa;border:1px solid #e8e8e8;border-bottom:0;border-radius:4px 4px 0 0;cursor:pointer}.activeBtn[data-v-3095c98e]{color:#1890ff;background:#fff}.content-msg[data-v-3095c98e]{border:1px solid #ffdda6;background:#fff2db;padding:10px;margin-top:12px}.content-hd[data-v-3095c98e]{margin-top:20px}.content-bd[data-v-3095c98e],.content-hd[data-v-3095c98e]{width:100%;min-width:885px}.content-bd[data-v-3095c98e]{background:#fff;min-height:120px;text-align:center}",""])},"1ad7":function(t,e,a){"use strict";var i=a("ddb5"),n=a.n(i);n.a},ddb5:function(t,e,a){var i=a("0ecf");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("499e").default;n("1fb2cf0c",i,!0,{sourceMap:!1,shadowMode:!1})},f146:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"custom-team"},[a("a-layout",{staticStyle:{position:"relative",height:"100%",overflow:"hidden"}},[a("a-layout",{staticClass:"scroll",staticStyle:{position:"absolute",left:"0",top:"0",bottom:"0",right:"0","overflow-x":"hidden","overflow-y":"auto"}},[a("a-layout-header",[t._v("导购团队")]),a("a-layout-content",[a("div",{staticStyle:{padding:"15px 20px",background:"#FFF"}},[a("div",{staticClass:"content-msg"},[a("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("\n\t\t\t\t\t\t\t1、导购团队需要手工创建，主要可以用来团队统计销售数据，并且可以关联不同的销售提成模板。\n\t\t\t\t\t\t")]),a("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("\n\t\t\t\t\t\t\t2、可以是根据不同的分销渠道或者不同区域去创建，也可以根据不同的销售员等级去创建，但只有导购团队可以关联导购。\n\t\t\t\t\t\t")]),a("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("\n\t\t\t\t\t\t\t3、每个导购团队可以设置管理员，但非必要，如果成为管理员，可以自动根据这个团队的整体销售业绩得出管理提成。\n\t\t\t\t\t\t")]),a("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("\n\t\t\t\t\t\t\t4、修改销售模板，会立刻生效，影响一次结算的提成数据。\n\t\t\t\t\t\t")]),a("p",{staticStyle:{"margin-bottom":"0px"}},[t._v("\n\t\t\t\t\t\t\t5、管理团队也是手工创建，下面只能关联导购团队，或低级别的管理团队。\n\t\t\t\t\t\t")])]),a("div",{ref:"tabParent",staticStyle:{"margin-top":"20px"}},[a("span",{directives:[{name:"has",rawName:"v-has",value:"customSet-grade",expression:"'customSet-grade'"}],staticClass:"tabBtn",class:{activeBtn:1==t.tabKey},on:{click:function(e){return t.changeTab(1)}}},[t._v("导购团队")]),a("span",{directives:[{name:"has",rawName:"v-has",value:"customSet-rfm",expression:"'customSet-rfm'"}],staticClass:"tabBtn",class:{activeBtn:2==t.tabKey},on:{click:function(e){return t.changeTab(2)}}},[t._v("管理团队")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.tabKey,expression:"tabKey == 1"},{name:"has",rawName:"v-has",value:"customSet-grade",expression:"'customSet-grade'"}]},[a("div",{staticClass:"content-hd"}),a("div",{staticClass:"content-bd"},[a("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.isLoading}},[a("a-table",{attrs:{columns:t.columns,dataSource:t.customList,pagination:!1},scopedSlots:t._u([{key:"status",fn:function(e){return a("div",{},[0==e?a("span",{staticStyle:{color:"red"}},[t._v("不可用")]):t._e(),1==e?a("span",[t._v("正常")]):t._e()])}},{key:"guide_name",fn:function(e,i){return a("div",{},[0==e.length?a("span",[t._v("无")]):1==e.length?a("span",[t._v(t._s(e[0].guide_name))]):a("span",[t._v("更多导购")]),a("a-icon",{staticStyle:{"margin-left":"5px",cursor:"pointer"},attrs:{type:"form"},on:{click:function(e){return t.setGuide("list",i)}}})],1)}},{key:"guide_num",fn:function(e){return a("div",{},[a("a",{attrs:{href:""}},[t._v(t._s(e))])])}},{key:"handle",fn:function(e,i){return a("div",{staticStyle:{cursor:"pointer"}},[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("设置上级团队")]),a("span",{staticStyle:{"margin-right":"5px"}},[t._v("移除导购")]),1==i.status?a("span",{staticStyle:{"margin-right":"5px"}},[t._v("修改销售模板")]):a("span",{staticStyle:{"margin-right":"5px",color:"red"}},[t._v("设置销售模板")]),a("span",{staticStyle:{"margin-right":"5px"}},[t._v("删除")])])}}])}),a("div",{staticStyle:{padding:"0 15px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticClass:"pagination",staticStyle:{margin:"20px 0px",overflow:"hidden"}},[a("div",{staticClass:"pagination",staticStyle:{display:"inline-block",height:"32px",float:"right"}},[a("a-pagination",{attrs:{total:t.total,showSizeChanger:"",showQuickJumper:t.quickJumper,current:t.page,pageSize:t.pageSize,pageSizeOptions:["15","30","50","100"]},on:{change:t.changePage,showSizeChange:t.showSizeChange}})],1)])])],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:2==t.tabKey,expression:"tabKey == 2"},{name:"has",rawName:"v-has",value:"customSet-rfm",expression:"'customSet-rfm'"}]},[a("div",{staticClass:"content-hd"}),a("div",{staticClass:"content-bd"})])])])],1)],1)],1)},n=[],s=(a("96cf"),a("3b8d")),o=[{title:"分组id",dataIndex:"group_id",key:"group_id"},{title:"分组名称",dataIndex:"group_name",key:"group_name",ellipsis:!0},{title:"状态",dataIndex:"status",key:"status",scopedSlots:{customRender:"status"}},{title:"导购管理员",dataIndex:"guide_name",key:"guide_name",scopedSlots:{customRender:"guide_name"}},{title:"导购总数",dataIndex:"guide_num",key:"guide_num",scopedSlots:{customRender:"guide_num"}},{title:"创建时间",dataIndex:"creat_time",key:"creat_time"},{title:"操作",width:"320px",scopedSlots:{customRender:"handle"}}],r={name:"guideTeam",components:{},data:function(){return{tabKey:1,isLoading:!1,columns:o,customList:[{key:1,group_id:"34",group_name:"各地经销商",status:"0",guide_name:[{guide_name:"程三"}],guide_num:"4,123",creat_time:"2021-3-9"},{key:2,group_id:"33",group_name:"江苏销售",status:"1",guide_name:[{guide_name:"王四"},{guide_name:"程三"}],guide_num:"4,123",creat_time:"2021-3-9"}],page:1,pageSize:15,total:1,quickJumper:!1}},methods:{changeTab:function(t){this.tabKey=t},setGuide:function(){},getCustomList:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a,i,n,s,o,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,a=r.length>1&&void 0!==r[1]?r[1]:this.pageSize,this.isLoading=!0,i=this,n={corp_id:localStorage.getItem("corpId")?localStorage.getItem("corpId"):"",page:e,page_size:a},1==i.timeType?(n.start_time=i.fansAddTime.ds_date,n.end_time=i.fansAddTime.de_date,i.dayDate=[moment(i.fansAddTime.ds_date),moment(this.fansAddTime.de_date)]):2==i.timeType?(n.start_time=i.fansAddTime.ws_date,n.end_time=i.fansAddTime.we_date):3==i.timeType&&(n.start_time=i.fansAddTime.ms_date,n.end_time=i.fansAddTime.me_date),console.log(n),i.isLoading=!1,t.abrupt("return");case 11:s=t.sent,o=s.data,0!=o.error?(i.isLoading=!1,i.$message.error(o.error_msg)):(i.isLoading=!1,this.customList=o.data.result,this.total=parseInt(o.data.count),this.page=e,this.pageSize=a,this.quickJumper=this.total>this.pageSize);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changePage:function(t,e){this.getCustomList(t,e),this.$nextTick((function(){document.getElementsByClassName("scroll")[0].scrollTo(0,40)}))},showSizeChange:function(t,e){this.getCustomList(1,e)}},mounted:function(){this.$store.dispatch("getCorp",(function(t){}))}},d=r,c=(a("1ad7"),a("2877")),u=Object(c["a"])(d,i,n,!1,null,"3095c98e",null);e["default"]=u.exports}}]);