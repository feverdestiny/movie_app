(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/index"],{"1a31":function(t,e,n){},"3adc":function(t,e,n){"use strict";n.r(e);var i=n("fe66"),o=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=o.a},"4d21":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},"67ed":function(t,e,n){"use strict";var i=n("1a31"),o=n.n(i);o.a},"734f":function(t,e,n){"use strict";(function(t){n("6bb2"),n("921b");i(n("66fd"));var e=i(n("eb64"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},eb64:function(t,e,n){"use strict";n.r(e);var i=n("4d21"),o=n("3adc");for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);n("67ed");var r=n("2877"),a=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},fe66:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a")),s=a(n("692e")),r=a(n("8961"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t,e,n,i,o,s,r){try{var a=t[s](r),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(i,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var s=t.apply(e,n);function r(t){c(s,i,o,r,a,"next",t)}function a(t){c(s,i,o,r,a,"throw",t)}r(void 0)})}}var f=function(){return n.e("components/base-icon/index").then(n.bind(null,"c446"))},l={mixins:[r.default],components:{BaseIcon:f},data:function(){return{historyList:[],isHistory:!0,list:[],flng:!0,timer:null}},onLoad:function(){this.amapPlugin=s.default.mapInit(),this.historyList=t.getStorageSync("search:history")},methods:{listTap:function(t){t=JSON.parse(JSON.stringify(t)),this.history?this.setClick(t):(this.isHistory=!0,s.default.setHistory(t),this.setClick(t))},setClick:function(e){t.redirectTo({url:"/pages/movie/player?id=".concat(e.vod_id)})},clearSearch:function(){var e=this;t.showModal({title:"提示",content:"是否清理全部搜索历史？该操作不可逆。",success:function(t){t.confirm&&(e.historyList=s.default.removeHistory())}})},getInputtips:function(){var t=u(o.default.mark(function t(e){var n;return o.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this,t.next=3,this.$http.post("movie/dyController/getSearch",{name:e});case 3:n=t.sent,n.data&&n.data.success?(console.log(i(n.data," at pages/search/index.vue:104")),this.historyList=n.data.result):console.log(i("请求错误"," at pages/search/index.vue:107"));case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},onNavigationBarSearchInputChanged:function(e){var n=e.text;if(!n)return this.isHistory=!0,this.historyList=[],void(this.historyList=t.getStorageSync("search:history"));this.isHistory=!1,this.getInputtips(n)},onNavigationBarSearchInputConfirmed:function(e){var n=e.text;if(!n)return this.isHistory=!0,this.historyList=[],this.historyList=t.getStorageSync("search:history"),void t.showModal({title:"提示",content:"请输入内容。",success:function(t){t.confirm}});t.showModal({title:"提示",content:'您输入的内容为"'.concat(n,'",如果点击确定,将记录到历史搜索,并返回.如果取消不做操作'),success:function(e){e.confirm&&(s.default.setHistory(n),t.navigateBack())}})},onNavigationBarButtonTap:function(){var e=this;t.showModal({title:"提示",content:"点击确定，修改输入框的内容为abc",success:function(t){if(t.confirm){var n=e.$mp.page.$getAppWebview();n.setTitleNViewSearchInputText("abc")}}})}};e.default=l}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["734f","common/runtime","common/vendor"]]]);