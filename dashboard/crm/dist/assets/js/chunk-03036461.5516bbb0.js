(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03036461"],{5473:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".content-bd[data-v-b1a9c8dc]{background:#fff;min-height:120px;border:1px solid #e2e2e2;min-width:885px;margin:0 20px}[data-v-b1a9c8dc] .dark-row{background:#fafafa}[data-v-b1a9c8dc] .light-row{background:#fff}.content-msg[data-v-b1a9c8dc]{margin-left:16.6%;width:83%;border:1px solid #ffdda6;background:#fff2db;padding:10px;margin-top:12px;text-align:left;margin-bottom:20px}.power-modal[data-v-b1a9c8dc] .ant-modal-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.power-modal .level-tip-box[data-v-b1a9c8dc]{width:100%;height:74px}.power-modal .level-tip-box .level-tip[data-v-b1a9c8dc]{position:absolute;left:0;bottom:53px;width:100%;padding:5px 12px;background-color:#fff2db}",""])},"879b":function(t,e,a){t.exports=a.p+"assets/img/2.37818e8d.png"},"8a2e":function(t,e,a){t.exports=a.p+"assets/img/3.156b2257.png"},9584:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scroll",staticStyle:{width:"100%","max-height":"100%",position:"absolute","overflow-y":"auto","padding-bottom":"30px"}},[i("div",[i("a-card",{staticStyle:{"margin-bottom":"20px",padding:"10px 20px"}},[i("label",{staticStyle:{"font-size":"16px"}},[t._v("店铺管理")]),i("a-button",{staticStyle:{"font-size":"14px",float:"right"},attrs:{type:"primary",icon:"rollback"},on:{click:t.goAppCenter}},[t._v("返回")])],1),6==t.type?i("a-row",{staticStyle:{padding:"0 20px","margin-bottom":"20px"}},[t._e()],1):i("a-row",{staticStyle:{padding:"0 20px"}},[i("a-col",{staticStyle:{float:"left","margin-left":"10px"}},[i("a-select",{staticStyle:{width:"200px","margin-bottom":"20px"},attrs:{allowClear:"",showSearch:"",optionFilterProp:"children",placeholder:"请选择绑定状态"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[i("a-select-option",{attrs:{value:"1"}},[t._v("已绑定")]),i("a-select-option",{attrs:{value:"2"}},[t._v("未绑定")])],1)],1),i("a-col",{staticStyle:{float:"left","margin-left":"10px"}},[i("a-input",{staticStyle:{width:"200px","margin-right":"15px"},attrs:{allowClear:"",placeholder:"请输入店铺名称"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.find(e)}},model:{value:t.storeName,callback:function(e){t.storeName=e},expression:"storeName"}}),i("a-button",{staticStyle:{"margin-right":"15px"},attrs:{type:"primary"},on:{click:t.find}},[t._v("查找")]),i("a-button",{on:{click:t.clear}},[t._v("清空")])],1),i("a-col",{staticStyle:{float:"right"}},[i("a-button",{staticStyle:{width:"150px","font-size":"14px"},attrs:{type:"primary",icon:"plus"},on:{click:t.addStore}},[t._v("创建店铺\n\t\t\t\t\t")])],1)],1),i("div",{staticClass:"content-bd"},[i("a-spin",{attrs:{tip:"Loading...",size:"large",spinning:t.isLoading}},[i("div",{staticClass:"spin-content"},[i("a-table",{attrs:{columns:6==t.type?t.columnsShak:t.columns,dataSource:t.storeList,pagination:!1,rowClassName:t.rowClassName},scopedSlots:t._u([{key:"action",fn:function(e,a){return i("span",{},[i("a-popconfirm",{attrs:{okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.cancelBind(2,a.key)}}},[i("template",{slot:"title"},[i("div",{staticStyle:{width:"200px"}},[t._v("一旦解绑，已绑定在本系统的存量数据将不再展示，同时，已绑定过的客户也将全部解绑，确定解绑吗？")])]),1==a.is_bind?i("a-button",{staticStyle:{"margin-left":"5px"}},[t._v("解绑\n\t\t\t\t\t\t\t\t\t")]):t._e()],2),i("a-popconfirm",{attrs:{okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.cancelBind(1,a.key)}}},[i("template",{slot:"title"},[i("div",{staticStyle:{width:"200px"}},[t._v("一旦重新绑定后，之前已绑定和断点的数据均会全部展现出来，同时，已绑定过的客户，需要重新手动绑定店铺，确定重新绑定吗？")])]),0==a.is_bind?i("a-button",{staticStyle:{"margin-left":"5px"}},[t._v("绑定\n\t\t\t\t\t\t\t\t\t")]):t._e()],2)],1)}},{key:"action1",fn:function(e,a,s){return i("span",{},[i("a-button",{staticStyle:{"margin-left":"5px"},on:{click:function(e){return t.emPower(a,s)}}},[t._v("手工拉取")])],1)}}])}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total > 0"}],staticStyle:{width:"100%"}},[i("div",{staticStyle:{height:"45px",display:"inline-block",margin:"25px 0 0 7px"}},[t._v("\n\t\t\t\t\t\t\t\t共\n\t\t\t\t\t\t\t\t"),i("span",{staticStyle:{color:"blue"}},[t._v(t._s(t.total))]),t._v("\n\t\t\t\t\t\t\t\t条\n\t\t\t\t\t\t\t")]),i("div",{staticClass:"pagination",staticStyle:{"margin-top":"20px",float:"right"}},[i("a-pagination",{attrs:{total:t.total,showSizeChanger:"",showQuickJumper:t.quickJumper,current:t.page,pageSize:t.pageSize,pageSizeOptions:["15","30","50","100"]},on:{change:t.changePage,showSizeChange:t.showSizeChange}})],1)])],1)])],1)],1),i("a-modal",{attrs:{width:"720px",title:t.title},on:{cancel:t.cancelAddStore},model:{value:t.showStoreVisible,callback:function(e){t.showStoreVisible=e},expression:"showStoreVisible"}},[i("template",{slot:"footer"},[i("a-button",{key:"back",on:{click:t.cancelAddStore}},[t._v("取消")]),i("a-button",{key:"submit",attrs:{type:"primary",loading:t.loading},on:{click:t.handleAddStore}},[t._v("提交\n\t\t\t\t")])],1),i("a-form",[i("a-form-item",{attrs:{label:"店铺类型","label-col":{span:4},"wrapper-col":{span:20}}},[i("a-select",{staticStyle:{width:"300px","margin-bottom":"10px"},attrs:{showSearch:"",allowClear:!1,optionFilterProp:"children",placeholder:"请选择类型",disabled:!0},model:{value:t.storeType,callback:function(e){t.storeType=e},expression:"storeType"}},[i("a-select-option",{attrs:{value:"1"}},[t._v("小猪智慧店铺")]),i("a-select-option",{attrs:{value:"2"}},[t._v("有赞")]),i("a-select-option",{attrs:{value:"3"}},[t._v("淘宝")]),i("a-select-option",{attrs:{value:"4"}},[t._v("天猫")])],1)],1),1==t.storeType?i("div",{staticStyle:{color:"#FF562D","margin-bottom":"10px","margin-left":"16.66%"}},[t._v("\n\t\t\t\t\t绑定后，可获取到该店铺的交易订单和会员信息。方便员工在与客户聊天时，可通过企业微信侧边栏中快速查看到该客户的历史订单记录与会员情况。\n\t\t\t\t")]):t._e(),1==t.storeType?i("a-form-item",{attrs:{label:"店铺标识","label-col":{span:4},"wrapper-col":{span:20}}},[i("a-input",{staticStyle:{width:"300px","margin-right":"15px"},attrs:{allowClear:"",placeholder:"请输入店铺标识"},model:{value:t.token,callback:function(e){t.token=e},expression:"token"}})],1):t._e(),1==t.storeType?i("div",{staticClass:"content-msg"},[i("p",{staticStyle:{"margin-bottom":"2px","line-height":"25px"}},[t._v("\n\t\t\t\t\t\t1，请登录"),i("a",{attrs:{href:t.$store.state.cashierUrl+"/cashier/merchants.php?m=Index&c=login&a=index",target:"_blank"}},[t._v("智慧店铺系统")]),t._v("--商家配置--商家资料--复制标识\n\t\t\t\t\t")]),i("p",{staticStyle:{"margin-bottom":"0px","line-height":"25px"}},[t._v("\n\t\t\t\t\t\t2，将已复制的标识粘贴在应用集成-智慧店铺卡券里，提交即可。（由于系统无法判断您填写的标识是否是正确，故一旦没有按照文档要求填写，则客户无法打开。）\n\t\t\t\t\t")])]):t._e(),1==t.storeType?i("a-form-item",{attrs:{label:"开启行业集成","label-col":{span:4},"wrapper-col":{span:20}}},[i("a-switch",{attrs:{checked:1==t.comeFrom},on:{click:function(e){return t.changeStatus()}}}),t._v("\n\t\t\t\t\t（一旦开启后，在“行业集成”菜单里获取到通用页面，并同步到【内容引擎】）\n\t\t\t\t")],1):t._e(),2==t.storeType?i("div",{staticClass:"content-msg"},[i("p",{staticStyle:{"margin-bottom":"2px","line-height":"25px"}},[t._v("\n\t\t\t\t\t\t1、打通有赞，需先在有赞服务市场购买【日思夜想CRM】应用，"),i("a",{attrs:{href:"https://yingyong.youzan.com/cloud-app-detail/51319",target:"_blank"}},[t._v("前往订购地址")])]),i("p",{staticStyle:{"margin-bottom":"2px","line-height":"25px"}},[t._v("\n\t\t\t\t\t\t2、购买成功后，需要您登录有赞店铺后台--【应用--应用市场】--【我的应用】--【去使用】--跳转到日思夜想SCRM登陆页面--成功登陆后，即绑定成功--进入【第三方店铺--店铺订单】，即可开始拉取订单数据。\n\t\t\t\t\t")]),i("p",{staticStyle:{"margin-bottom":"2px","line-height":"25px"}},[t._v("\n\t\t\t\t\t\t3、首次授权成功后将默认拉取仅90天的订单数据；另外每天产生的有赞订单实时推送到本系统。\n\t\t\t\t\t")]),i("p",{staticStyle:{color:"#FF562D","margin-bottom":"0px","line-height":"25px"}},[t._v("\n\t\t\t\t\t\t目前接入有赞店铺，支持微商城和零售。\n\t\t\t\t\t")])]):t._e(),2==t.storeType?i("div",[i("img",{staticStyle:{width:"235px"},attrs:{src:a("a547")}}),i("img",{staticStyle:{width:"185px",margin:"0 20px"},attrs:{src:a("879b")}}),i("img",{staticStyle:{width:"200px"},attrs:{src:a("8a2e")}})]):t._e(),3==t.storeType||4==t.storeType?i("a-form-item",{attrs:{label:"店铺名称","label-col":{span:4},"wrapper-col":{span:20}}},[i("a-input",{staticStyle:{width:"300px","margin-right":"15px"},attrs:{allowClear:"",placeholder:"请输入店铺名称"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1):t._e(),3==t.storeType||4==t.storeType?i("div",{staticStyle:{"margin-left":"16.7%",color:"#FF562D"}},[t._v("\n\t\t\t\t\t创建好店铺后，进入【店铺订单】导入"),3==t.storeType?i("span",[t._v("淘宝")]):t._e(),4==t.storeType?i("span",[t._v("天猫")]):t._e(),t._v("订单，仅支持csv格式，文件大小20M以内。\n\t\t\t\t")]):t._e()],1)],2),i("a-modal",{staticClass:"power-modal",attrs:{width:"600px",title:"拉取历史订单"},model:{value:t.powerVisible,callback:function(e){t.powerVisible=e},expression:"powerVisible"}},[i("template",{slot:"footer"},[i("div",[i("a-checkbox",{on:{change:t.onCheckbox},model:{value:t.isCheckbox,callback:function(e){t.isCheckbox=e},expression:"isCheckbox"}},[t._v("勾选，代表确定知晓操作带来的影响。")])],1),i("div",[i("a-button",{key:"back",on:{click:t.cancelPower}},[t._v("取消")]),i("a-button",{key:"submit",attrs:{type:"primary",disabled:!t.isCheckbox,loading:t.loading},on:{click:function(e){return t.submitPower()}}},[t._v("确定")])],1)]),i("a-form",[i("a-form-item",{attrs:{label:"拉取日期","label-col":{span:4},"wrapper-col":{span:20}}},[i("a-range-picker",{staticStyle:{width:"320px","margin-right":"5px"},attrs:{"show-time":{defaultValue:[t.moment("00:00","HH:mm"),t.moment("23:59","HH:mm")],format:"HH:mm"},format:"YYYY-MM-DD HH:mm",allowClear:"","disabled-date":t.disabledDate},on:{change:function(e){return t.changeTime(e,"powerTime")}},model:{value:t.powerTime,callback:function(e){t.powerTime=e},expression:"powerTime"}})],1),i("div",{staticStyle:{color:"#FF562D","margin-bottom":"10px","margin-left":"16.66%"}},[t._v("\n\t\t\t\t\t起始时间默认为当前店铺最近的一条订单的日期，若为空则为20210101\n\t\t\t\t")])],1),i("div",{staticClass:"level-tip-box"},[i("div",{staticClass:"level-tip"},[i("div",[t._v("因为抖店官方接口一次只支持最多一万条订单，请根据订单量选择合适的时间段，避免缺失订单数据。支持分批多次拉取。")]),t.itemData.task_status?i("div",{staticStyle:{color:"red"}},[t._v(t._s(t.itemData.task_status.task_msg))]):t._e()])])],2)],1)},s=[],o=(a("96cf"),a("3b8d")),n=a("c1df"),r=a.n(n),l=[{title:"店铺ID",dataIndex:"id",key:"id"},{title:"店铺名称",dataIndex:"storeName",key:"storeName"},{title:"类型",dataIndex:"type",key:"type"},{title:"绑定状态",dataIndex:"status",key:"status"},{title:"绑定时间",dataIndex:"bindTime",key:"bindTime"},{title:"到期时间",dataIndex:"expireTime",key:"expireTime"},{title:"启用门店/闭店",dataIndex:"storeNum",key:"storeNum"},{title:"操作",dataIndex:"action",key:"action",scopedSlots:{customRender:"action"}}],c=[{title:"店铺ID",dataIndex:"shop_id",key:"shop_id"},{title:"店铺名称",dataIndex:"shop_name",key:"shop_name"},{title:"授权状态",dataIndex:"auth_status",key:"auth_status"},{title:"绑定时间",dataIndex:"auth_time",key:"auth_time"},{title:"经营类目",dataIndex:"category_list",key:"category_list"},{title:"操作",dataIndex:"task_status",key:"task_status",scopedSlots:{customRender:"action1"}}],p={data:function(){var t=localStorage.getItem("corpId")?localStorage.getItem("corpId"):"";return{corpId:t,moment:r.a,storeList:[],storeName:"",type:[],status:[],isLoading:!0,columns:l,columnsShak:c,page:1,pageSize:15,total:0,quickJumper:!1,showStoreVisible:!1,title:"创建店铺",loading:!1,storeType:"1",token:"",comeFrom:1,clientId:"",clientSecret:"",code:"",userName:"",powerVisible:!1,isCheckbox:!1,powerTime:null,shop_id:"",itemData:{},itemIdx:""}},methods:{goAppCenter:function(){this.$router.push("/appCenter/list")},getStore:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,o,n,r=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,a=r.length>1&&void 0!==r[1]?r[1]:this.pageSize,this.isLoading=!0,6==this.type?(s={corp_id:this.corpId,page:e,pageSize:a},i="shop-doudian/shop-list"):(s={storeType:this.type,status:this.status,storeName:this.storeName,page:e,pageSize:a,uid:localStorage.getItem("uid")},i="third-store/get-merchants"),t.next=6,this.axios.post(i,s);case 6:o=t.sent,n=o.data,0!=n.error?(this.isLoading=!1,this.$message.error(n.error_msg)):(6==this.type?this.storeList=n.data.result:this.storeList=n.data.info,this.total=parseInt(n.data.count),this.page=e,this.pageSize=a,this.quickJumper=this.total>this.pageSize,this.isLoading=!1);case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),find:function(){this.getStore()},clear:function(){this.status=[],this.storeName="",this.getStore()},addStore:function(){this.title="创建店铺",this.token="",this.storeType=this.type,this.comeFrom=1,this.userName="",this.showStoreVisible=!0},cancelBind:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.axios.post("third-store/cancel-merchants",{id:a,type:e});case 2:i=t.sent,s=i.data,0!=s.error?this.$message.error(s.error_msg):(1==e?this.$message.success("绑定成功"):this.$message.success("解绑成功"),this.getStore(this.page,this.pageSize));case 5:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),changePage:function(t,e){this.getStore(t,this.pageSize),document.getElementsByClassName("scroll")[0].scrollTo(0,0)},showSizeChange:function(t,e){this.getStore(this.page,e)},handleAddStore:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.loading=!0,1!=this.storeType){t.next=8;break}if(""!=this.token){t.next=6;break}return this.$message.warning("请填写店铺标识！"),this.loading=!1,t.abrupt("return",!1);case 6:t.next=19;break;case 8:if(2!=this.storeType){t.next=14;break}return this.loading=!1,this.showStoreVisible=!1,t.abrupt("return",!1);case 14:if(3!=this.storeType&&4!=this.storeType){t.next=19;break}if(""!=this.userName){t.next=19;break}return this.$message.warning("请填写店铺名称！"),this.loading=!1,t.abrupt("return",!1);case 19:return t.next=21,this.axios.post("attachment/application-sign-add",{uid:localStorage.getItem("uid"),sign:this.token,site_type:1,comeFrom:this.comeFrom,source:this.storeType,client_id:this.clientId,client_secret:this.clientSecret,code:this.code,user_name:this.userName});case 21:e=t.sent,a=e.data,0!=a.error?(this.loading=!1,this.$message.error(a.error_msg)):(this.$message.success("添加成功！"),this.loading=!1,this.showStoreVisible=!1,this.getStore());case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),cancelAddStore:function(){this.showStoreVisible=!1},rowClassName:function(t,e){var a="dark-row";return e%2===0&&(a="light-row"),a},changeStatus:function(){this.comeFrom=(this.comeFrom+1)%2},emPower:function(t,e){this.powerVisible=!0,this.shop_id=t.shop_id,this.itemData=t,this.itemIdx=e},onCheckbox:function(t){this.isCheckbox=t.target.checked},cancelPower:function(){this.powerVisible=!1,this.powerTime=null},submitPower:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a,i,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,e.loading=!0,a={corp_id:localStorage.getItem("corpId")?localStorage.getItem("corpId"):"",start_time:e.powerTime&&e.powerTime.length>1?e.powerTime[0].format("YYYY-MM-DD HH:mm"):"",end_time:e.powerTime&&e.powerTime.length>1?e.powerTime[1].format("YYYY-MM-DD HH:mm"):"",shop_id:e.shop_id},i="shop-doudian/pull-order-list",t.next=6,e.axios.post(i,a);case 6:s=t.sent,o=s.data,0!=o.error?(e.loading=!1,e.$message.error(o.error_msg)):(e.loading=!1,e.cancelPower(),e.storeList[e.itemIdx].task_status.task_msg=o.data.task_msg,e.$message.success(o.data.task_msg));case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),disabledDate:function(t){return t&&t>r()().endOf("day")},changeTime:function(t,e){var a=this;"powerTime"==e&&(a.powerTime=t)}},created:function(){this.type=this.$route.query.type,this.getStore()}},d=p,m=(a("f49a"),a("2877")),h=Object(m["a"])(d,i,s,!1,null,"b1a9c8dc",null);e["default"]=h.exports},a547:function(t,e,a){t.exports=a.p+"assets/img/1.2a71d508.png"},b429:function(t,e,a){var i=a("5473");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=a("499e").default;s("13df7259",i,!0,{sourceMap:!1,shadowMode:!1})},f49a:function(t,e,a){"use strict";var i=a("b429"),s=a.n(i);s.a}}]);