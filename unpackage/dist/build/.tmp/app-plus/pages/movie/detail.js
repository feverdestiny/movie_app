(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/movie/detail"],{"1b59":function(t,n,e){"use strict";e.r(n);var o=e("4c0f"),i=e("d358");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("a26b");var u=e("2877"),r=Object(u["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=r.exports},"4c0f":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.setImg(t.vodInfo)),o=t.setImg(t.vodInfo);t.$mp.data=Object.assign({},{$root:{m0:e,m1:o}})},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},5052:function(t,n,e){},7664:function(t,n,e){"use strict";(function(t){e("6bb2"),e("921b");o(e("66fd"));var n=o(e("1b59"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"99b1":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("a34a")),a=u(e("8961"));function u(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,o,i,a,u){try{var r=t[a](u),s=r.value}catch(c){return void e(c)}r.done?n(s):Promise.resolve(s).then(o,i)}function s(t){return function(){var n=this,e=arguments;return new Promise(function(o,i){var a=t.apply(n,e);function u(t){r(a,o,i,u,s,"next",t)}function s(t){r(a,o,i,u,s,"throw",t)}u(void 0)})}}var c=function(){return e.e("components/uni-notice-bar/uni-notice-bar").then(e.bind(null,"bf8c"))},d={mixins:[a.default],components:{uniNoticeBar:c},data:function(){return{vodInfo:{},vodList:[]}},onLoad:function(n){console.log(t(n.id," at pages/movie/detail.vue:76")),this.getVodInfo(n.id)},computed:{urlList:function(){var t=this.vodList.filter(function(t){return t.active});return t[0]||{}}},methods:{getVodInfo:function(){var n=s(i.default.mark(function n(e){var a;return i.default.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,this.$http.post("movie/dyController/getVodInfo",{id:e});case 2:a=n.sent,a.data&&a.data.success?(this.vodInfo=a.data.result[0],o.setNavigationBarTitle({title:this.vodInfo.vod_name}),this.vodList=this.setVodList(this.vodInfo),console.log(t(this.vodList," at pages/movie/detail.vue:96"))):console.log(t("请求错误"," at pages/movie/detail.vue:98"));case 4:case"end":return n.stop()}},n,this)}));function e(t){return n.apply(this,arguments)}return e}(),setActive:function(t){this.vodList=this.vodList.map(function(n){return n.active=!1,t.addres==n.addres&&(n.active=!0),n})},toPlayer:function(){o.navigateTo({url:"/pages/movie/player"})}}};n.default=d}).call(this,e("0de9")["default"],e("6e42")["default"])},a26b:function(t,n,e){"use strict";var o=e("5052"),i=e.n(o);i.a},d358:function(t,n,e){"use strict";e.r(n);var o=e("99b1"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a}},[["7664","common/runtime","common/vendor"]]]);