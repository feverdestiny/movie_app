(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-notice-bar/uni-notice-bar"],{"01cb":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},3583:function(t,e,n){"use strict";var i=n("997c"),o=n.n(i);o.a},4052:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return n.e("components/base-icon/index").then(n.bind(null,"c446"))},o={name:"UniNoticeBar",components:{uniIcon:i},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:[String,Number],default:100},color:{type:String,default:"#de8c17"},single:{type:[String,Boolean],default:!1},scrollable:{type:[String,Boolean],default:!1},showIcon:{type:[String,Boolean],default:!1},showGetMore:{type:[String,Boolean],default:!1},showClose:{type:[String,Boolean],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,show:!0,animation:""}},watch:{text:function(t,e){var n=this;this.$nextTick(function(){setTimeout(n.setAnimation,200)})}},onReady:function(){this.setAnimation()},methods:{clickMore:function(){this.$emit("getmore")},onClick:function(e){var n=e.touches?e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX:e.detail.clientX;t.upx2px(48)+12>n&&"true"===String(this.showClose)&&(this.show=!1,this.$emit("close")),this.$emit("click")},setAnimation:function(){var e=this;!1!==this.scrollable&&"false"!==this.scrollable&&t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t){e.animation="notice ".concat(t[0].width/e.speed,"s linear infinite both")})}}};e.default=o}).call(this,n("6e42")["default"])},"997c":function(t,e,n){},bf8c:function(t,e,n){"use strict";n.r(e);var i=n("01cb"),o=n("d5e7");for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);n("3583");var a=n("2877"),u=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},d5e7:function(t,e,n){"use strict";n.r(e);var i=n("4052"),o=n.n(i);for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-notice-bar/uni-notice-bar-create-component',
    {
        'components/uni-notice-bar/uni-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("bf8c"))
        })
    },
    [['components/uni-notice-bar/uni-notice-bar-create-component']]
]);