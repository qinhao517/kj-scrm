(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-group-edit"],{"3a70":function(t,e,i){"use strict";i.r(e);var a=i("8381"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"474b":function(t,e,i){"use strict";var a=i("7007"),n=i.n(a);n.a},"6af6":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var a={uniNavBar:i("f31d").default,uniPopup:i("1c89").default,uniIcons:i("2ba4").default,pickRegions:i("0cc2").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isReady?i("v-uni-view",{staticClass:"box"},[i("uni-nav-bar",{attrs:{"left-icon":"back",title:"修改群画像"},on:{clickLeft:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-button",{staticClass:"custom-tabs-button",attrs:{slot:"right",type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}},slot:"right"},[t._v("提交")])],1),i("uni-popup",{ref:"visible",attrs:{type:"center","mask-click":!1}},[i("v-uni-view",{staticClass:"uni-tip"},[i("v-uni-text",{staticClass:"uni-tip-title"},[t._v("保存本次编辑?")]),i("v-uni-view",{staticClass:"uni-tip-group-button"},[i("v-uni-text",{staticClass:"uni-tip-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.unSave.apply(void 0,arguments)}}},[t._v("不保存")]),i("v-uni-text",{staticClass:"uni-tip-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)],1),i("v-uni-view",{staticClass:"custom-tabs-content content_head"},[i("v-uni-view",{staticClass:"custom-tabs-list"},[i("v-uni-view",{staticStyle:{padding:"0px 0 0.8rem"}},[t._l(t.list,(function(e,a){return[i("v-uni-view",{staticClass:"list"},[i("v-uni-text",{staticClass:"list-title"},[t._v(t._s(e.title))]),2!=e.type&&3!=e.type&&7!=e.type&&4!=e.type&&8!=e.type&&"phone"!=e.key&&"company"!=e.key?i("v-uni-input",{staticClass:"list-content",attrs:{placeholder:"请输入"+e.title},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}}):t._e(),"phone"==e.key?t._l(t.phone,(function(a,n){return i("div",{staticClass:"phone-line"},[i("v-uni-input",{staticClass:"list-content2",attrs:{placeholder:"请输入手机号",value:a},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.changeSpecialInput(i,e.key,n)}}}),n!=t.phone.length-1?i("uni-icons",{staticStyle:{"font-size":"0.907rem  /* 17/18.75 */"},attrs:{type:"close",color:"#c5c5c5"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deletePhone(n)}}}):t._e()],1)})):t._e(),"company"==e.key?[i("v-uni-input",{staticClass:"list-content",attrs:{placeholder:"请输入公司"},model:{value:e.value,callback:function(i){t.$set(e,"value",i)},expression:"item.value"}})]:t._e(),8==e.type?i("v-uni-view",{staticClass:"list-content"},[t._l(e.value,(function(e,n){return i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{staticClass:"img2",attrs:{src:t.commonUrl+e.url},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(a,n)}}}),i("uni-icons",{staticStyle:{position:"absolute",right:"0",top:"0.267rem  /* 5/18.75 */"},attrs:{type:"close",size:"20",color:"#1890FF"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImg(a,n)}}})],1)})),i("v-uni-view",{staticClass:"uni-hello-addfile demo",staticStyle:{cursor:"pointer",float:"left"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage(a)}}},[i("v-uni-text",{staticStyle:{margin:"0.533rem 0",display:"inline-block","font-size":"1.493rem  /* 28/18.75 */"}},[t._v("+")]),i("v-uni-view",{staticStyle:{"margin-top":"0.267rem  /* 5/18.75 */"}},[t._v("上传")])],1)],2):t._e(),i("v-uni-picker",{staticClass:"list-content",attrs:{value:e.optionValIndex,range:e.optionVal2},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeOneSelect(e,a)}}},[2==e.type?i("v-uni-view",[-1==e.optionValIndex?i("v-uni-view",{staticClass:"choose-status placeholder-style"},[t._v("请选择"+t._s(e.title))]):t._e(),-2==e.optionValIndex?i("v-uni-view",{staticClass:"choose-status"},[t._v(t._s(e.value))]):i("v-uni-view",{staticClass:"choose-status"},[t._v(t._s(e.optionVal2[e.optionValIndex]))]),i("uni-icons",{staticStyle:{float:"right",color:"#C5C5C5","font-size":"0.8rem  /* 15/18.75 */"},attrs:{type:"arrowright",size:"20"}})],1):t._e()],1),3==e.type?i("v-uni-view",{staticClass:"list-content"},[e.hasOption.length>0?t._l(e.hasOption,(function(e,n){return i("v-uni-view",{staticClass:"choose-status2"},[t._v(t._s(e)),i("uni-icons",{staticStyle:{float:"right",color:"#007AFF"},attrs:{type:"closeempty",size:"20"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteTag(n,a)}}})],1)})):t._e(),i("v-uni-picker",{attrs:{range:e.optionVal2},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSelect(e,a)}}},[0==e.hasOption.length?[i("v-uni-view",{staticClass:"choose-status placeholder-style"},[t._v("请选择"+t._s(e.title))])]:t._e(),i("uni-icons",{staticStyle:{float:"right",color:"#C5C5C5","font-size":"0.8rem  /* 15/18.75 */"},attrs:{type:"arrowright",size:"20"}})],2)],2):t._e(),i("pick-regions",{staticClass:"list-content",attrs:{"default-regions":e.defaultRegions,index:a},on:{getRegions:function(e){arguments[0]=e=t.$handleEvent(e),t.changeArea.apply(void 0,arguments)}}},[7==e.type?i("v-uni-view",[""==e.regionsName?i("v-uni-view",{staticClass:"choose-status placeholder-style"},[t._v("请选择"+t._s(e.title))]):t._e(),""!=e.regionsName?i("v-uni-view",{staticClass:"choose-status"},[t._v(t._s(e.regionsName))]):t._e(),i("uni-icons",{staticStyle:{float:"right",color:"#C5C5C5","font-size":"0.8rem  /* 15/18.75 */"},attrs:{type:"arrowright",size:"20"}})],1):t._e()],1),i("v-uni-picker",{staticClass:"list-content",attrs:{mode:"date",value:e.date,start:e.startDate,end:e.endDate},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindDateChange(e,a)}}},[4==e.type?i("v-uni-view",[""!=e.date?i("v-uni-view",[t._v(t._s(e.date))]):t._e(),""==e.date?i("v-uni-view",{staticClass:"placeholder-style"},[t._v("请选择"+t._s(e.title))]):t._e()],1):t._e()],1)],2)]}))],2)],1),1==t.is_show_copyright?i("Footer"):t._e()],1),t.previewShow?i("v-uni-view",{staticClass:"uni-margin-wrap preview-box"},[i("v-uni-swiper",{staticClass:"swiper swiper-box",attrs:{"current-item-id":t.previewIndex}},t._l(t.imgList,(function(e,a){return i("v-uni-swiper-item",{key:a,attrs:{"item-id":String(a)}},[i("v-uni-view",{staticClass:"swiper-item",on:{touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove.apply(void 0,arguments)},touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart.apply(void 0,arguments)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd.apply(void 0,arguments)},click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePreview.apply(void 0,arguments)}}},[i("img",{staticClass:"img-info",attrs:{src:t.commonUrl+e.url,width:"75%"}})])],1)})),1)],1):t._e()],1):t._e()},o=[]},7007:function(t,e,i){var a=i("e040");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a5d0bd70",a,!0,{sourceMap:!1,shadowMode:!1})},8381:function(t,e,i){"use strict";var a=i("ee27");i("99af"),i("c975"),i("a15b"),i("d81d"),i("a434"),i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n=a(i("c964")),o=a(i("0cc2")),s=a(i("2c4b"));function l(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),a=a>9?a:"0"+a,n=n>9?n:"0"+n,"".concat(i,"-").concat(a,"-").concat(n)}var r={name:"edit",inject:["initPage","getParameter","getCopyright"],components:{pickRegions:o.default,Footer:s.default},data:function(){return{isReady:!1,field_list:[],list:[],commonUrl:this.$store.state.commonUrl,previewShow:!1,imgList:[],previewIndex:0,des:0,imageSrc:"",phone:[],company:[],is_show_copyright:localStorage.getItem("is_show_copyright")}},onLoad:function(){var t=this;uni.setNavigationBarTitle({title:"修改群画像"}),this.is_show_copyright=localStorage.getItem("is_show_copyright"),this.$store.dispatch("setWx",(function(){t.initPage(t.getData())}))},methods:{getData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,uni.showLoading({title:"加载中...",duration:2e3}),e.next=4,t.axios.post("wap-custom-detail/chat-detail",{uid:localStorage.getItem("uid"),corp_id:localStorage.getItem("corpid"),chat_id:t.getParameter("chat_id")?t.getParameter("chat_id"):t.$store.state.chatId});case 4:if(a=e.sent,n=a.data,0!=n.error)uni.hideLoading(),uni.showToast({title:n.error_msg,image:"/static/fail.png",duration:2e3});else{for(uni.hideLoading(),i.isReady=!0,i.list=n.data.fieldList,t.list.map((function(t){2==t.type||3==t.type?(t.optionVal2=t.optionVal.split(","),2==t.type&&(""==t.value?t.optionValIndex=-1:-1==t.optionVal2.indexOf(t.value)?t.optionValIndex=-2:t.optionValIndex=t.optionVal2.indexOf(t.value)),3==t.type&&(""!=t.value?t.hasOption=t.value.split(","):t.hasOption=[])):7==t.type?""==t.value?(t.regions=[{name:""},{name:""}],t.defaultRegions=[],t.regionsName=""):(t.regions=[{name:""},{name:""}],t.defaultRegions=t.value.split("-"),t.regions[0].name=t.defaultRegions[0],t.regions[1].name=t.defaultRegions[1],t.regionsName=t.regions.map((function(t){return t.name})).join("-")):4==t.type&&(t.date=t.value,t.startDate=l("start"),t.endDate=l("end"))})),o=0;o<i.list.length;o++)"phone"===i.list[o].key&&(i.phone=i.list[o].value.split(","));0==i.phone.length&&(i.phone=[""])}case 7:case"end":return e.stop()}}),e)})))()},touchMove:function(t){t.changedTouches[0].pageX,t.changedTouches[0].pageY},touchStart:function(t){this.touchStartX=t.changedTouches[0].pageX,this.touchStartY=t.changedTouches[0].pageY},touchEnd:function(t){var e=t.changedTouches[0].pageY;Math.abs(e)-Math.abs(this.touchStartY)>100&&(this.previewShow=!1)},closePreview:function(){this.previewShow=!1},deletePhone:function(t){this.phone.splice(t,1),this.$forceUpdate()},changeSpecialInput:function(t,e,i){if("phone"==e){this.phone[i]=t.target.value;var a=/[^+|-|\d]/;this.phone.length<5&&!a.test(t.target.value)&&t.target.value.length>=5&&t.target.value.length<=32&&this.phone.length-1==i&&(this.phone.push(""),this.$forceUpdate())}else"company"==e&&(this.company=t.target.value)},preview:function(t,e){this.imgList=this.list[t].value,this.previewIndex=String(e),this.previewShow=!0},deleteImg:function(t,e){this.list[t].value.splice(e,1)},previewImageSrc:function(){var t={url:this.imageSrc};this.imgList=[],this.imgList.push(t),this.previewIndex="0",this.previewShow=!0},deleteImageSrc:function(){this.imageSrc=""},chooseImage:function(t){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(i){if(i.tempFiles[0].size>2097152)return uni.showToast({title:"文件大小超过2M",image:"/static/fail.png",duration:2e3}),!1;uni.showLoading({title:"正在上传...",duration:2e5});var a=i.tempFilePaths[0];uni.uploadFile({url:e.$store.state.commonUrl+"/api/sub-user/upload-image",filePath:a,fileType:"image",name:"fileInfo",formData:{uid:localStorage.getItem("uid")},header:{Authorization:"Bearer "+localStorage.getItem("token")},success:function(i){uni.hideLoading(),0==JSON.parse(i.data).error?(uni.showToast({title:"上传成功",icon:"success",duration:2e3}),-1==t?e.imageSrc=JSON.parse(i.data).data.local_path:e.list[t].value.push({uid:(new Date).getTime(),url:JSON.parse(i.data).data.local_path,status:"done",name:"1.png"})):uni.showToast({title:JSON.parse(i.data).error_msg,image:"/static/fail.png",duration:2e3})},fail:function(t){uni.hideLoading(),uni.showModal({content:t.errMsg,showCancel:!1})}})},fail:function(t){console.log("chooseImage fail",t)}})},changeOneSelect:function(t,e){this.list[e].optionValIndex=t.detail.value,this.$forceUpdate()},changeSelect:function(t,e){-1==this.list[e].hasOption.indexOf(this.list[e].optionVal2[t.detail.value])?this.list[e].hasOption.push(this.list[e].optionVal2[t.detail.value]):uni.showToast({title:"选项不可重复",image:"/static/fail.png",duration:2e3}),this.$forceUpdate()},deleteTag:function(t,e){this.list[e].hasOption.splice(t,1),this.$forceUpdate()},changeArea:function(t,e){this.list[e].regions=t,this.list[e].regionsName=t.map((function(t){return t.name})).join("-"),this.$forceUpdate()},bindDateChange:function(t,e){this.list[e].date=t.detail.value,this.$forceUpdate()},submit:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function e(){var i,a,n,o,s,l,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=[],t.list.map((function(e){if(2==e.type)-1==e.optionValIndex?i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:""}):-2==e.optionValIndex?i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:e.value}):i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:e.optionVal2[e.optionValIndex]});else if(3==e.type)i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:e.hasOption.join(",")});else if(7==e.type)i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:e.regionsName});else if(4==e.type)i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:e.date});else if("phone"==e.key){for(var a=t.phone.length-1;a>=0;a--)""==t.phone[a]&&t.phone.splice(a,1);i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:t.phone.join()})}else i.push({fieldid:e.fieldid,key:e.key,type:e.type,value:e.value})})),a=/[^+|-|\d]/,n=/^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/,o=i.length-1;case 5:if(!(o>=0)){e.next=28;break}if("phone"!=i[o].key){e.next=21;break}s=i[o].value.split(","),l=0;case 9:if(!(l<s.length)){e.next=20;break}if(""!=s[l]){e.next=14;break}s.splice(l,1),e.next=17;break;case 14:if(!a.test(s[l])){e.next=17;break}return uni.showToast({title:"手机号格式不正确！",image:"/static/fail.png",duration:2e3}),e.abrupt("return",!1);case 17:l++,e.next=9;break;case 20:i[o].value=s.join();case 21:if(6!=i[o].type){e.next=25;break}if(n.test(i[o].value)||""==i[o].value){e.next=25;break}return uni.showToast({title:"邮箱格式不正确！",image:"/static/fail.png",duration:2e3}),e.abrupt("return",!1);case 25:o--,e.next=5;break;case 28:return e.next=30,t.axios.post("work-chat/chat-field-update",{chatid:null!=t.getParameter("chat_id")?t.getParameter("chat_id"):t.$store.state.chatId,user_id:t.getParameter("user_id")||localStorage.getItem("user_id"),fieldData:i,corp_id:localStorage.getItem("corpid")});case 30:r=e.sent,c=r.data,0!=c.error?uni.showToast({title:c.error_msg,image:"/static/fail.png",duration:2e3}):history.back();case 33:case"end":return e.stop()}}),e)})))()},back:function(){this.$refs["visible"].open()},unSave:function(){this.$refs["visible"].close(),history.back()}}};e.default=r},9532:function(t,e,i){"use strict";i.r(e);var a=i("6af6"),n=i("3a70");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("474b");var s,l=i("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"3d1b0a1d",null,!1,a["a"],s);e["default"]=r.exports},e040:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".box[data-v-3d1b0a1d]{background:#f6f6f6;position:fixed;top:0;bottom:0}[data-v-3d1b0a1d] .uni-navbar--border{border:0}.custom-tabs-button[data-v-3d1b0a1d]{width:70px;line-height:30px;font-size:.693rem}.custom-tabs-content[data-v-3d1b0a1d]{background:#fff;padding:0 .8rem;box-sizing:border-box;position:fixed;left:0;right:0;top:2.667rem /* 50/18.75 */;bottom:0;overflow:auto}.list[data-v-3d1b0a1d]{line-height:.747rem;padding-top:.8rem;text-align:left;overflow:hidden}.list[data-v-3d1b0a1d]:nth-child(3n){border-bottom:1px solid #f5f5f5;padding-bottom:.8rem}.list-title[data-v-3d1b0a1d]{color:#adaeb6;font-size:.693rem;display:inline-block;vertical-align:top;width:2.88rem;margin-right:1.547rem}.list-content[data-v-3d1b0a1d]{color:#007aff;font-size:.693rem;display:inline-block;width:calc(100% - 4.427rem);float:right}.list-content2[data-v-3d1b0a1d]{color:#007aff;font-size:.693rem;display:inline-block;width:calc(100% - .907rem)}.phone-line[data-v-3d1b0a1d]{border-bottom:1px dashed #f5f5f5;float:right;width:calc(100% - 4.427rem);padding-bottom:3px;margin-bottom:3px}.phone-line[data-v-3d1b0a1d]:last-child{margin-bottom:0}.choose-status[data-v-3d1b0a1d]{float:left;font-size:.693rem;line-height:15.4629px}.choose-status2[data-v-3d1b0a1d]{float:left;border:1px solid #007aff;padding:.16rem ;border-radius:.16rem ;margin:0 .16rem .16rem 0}.placeholder-style[data-v-3d1b0a1d]{color:#c5c5c5}[data-v-3d1b0a1d] .uni-input-placeholder{color:#c5c5c5}.uni-input[data-v-3d1b0a1d]{height:28px;line-height:28px;font-size:15px;text-align:left;border:1px solid #ccc;border-radius:4px;padding:0 8px;margin:15px 0}\n\n/* 提示窗口 */.uni-tip[data-v-3d1b0a1d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\npadding:15px;width:75%;background-color:#fff;border-radius:4px;left:12.5%;position:absolute;top:50%;box-sizing:border-box;margin-top:-50px}[data-v-3d1b0a1d] .uni-popup__wrapper-box{width:100%;height:100%}.uni-tip-title[data-v-3d1b0a1d]{margin-bottom:10px;text-align:center;font-weight:700;font-size:16px;color:#333}.uni-tip-content[data-v-3d1b0a1d]{font-size:14px;color:#666}.uni-tip-group-button[data-v-3d1b0a1d]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-top:20px}.uni-tip-button[data-v-3d1b0a1d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-size:14px;color:#3b4144}.img[data-v-3d1b0a1d]{width:3.627rem;height:3.627rem;border-radius:.267rem;margin:0 .48rem .4rem 0;position:relative;float:left}.img2[data-v-3d1b0a1d]{max-width:3.627rem;max-height:3.627rem;border-radius:.267rem}.demo[data-v-3d1b0a1d]{width:3.627rem;height:3.627rem;text-align:center;font-size:.747rem ;border:1px solid #ccc;\n\t/*padding: 0.267rem 0px;*/border-radius:4px}.preview-box[data-v-3d1b0a1d]{top:0;right:0;bottom:0;left:0;position:fixed;z-index:9999999;background-color:#000}.swiper-box[data-v-3d1b0a1d]{height:100%}.swiper-item[data-v-3d1b0a1d]{height:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.img-info[data-v-3d1b0a1d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:25% 0}",""]),t.exports=e}}]);