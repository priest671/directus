parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"JmN1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../../mixins/interface"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var u={mixins:[t.default],computed:{userInfo:function(){return this.value?"object"===r(this.value)?this.value.first_name?this.value:this.$store.state.users[this.value.id]:this.$store.state.users[this.value]:null},displayValue:function(){return this.$helpers.micromustache.render(this.options.template,this.userInfo)},src:function(){return this.userInfo.avatar?this.userInfo.avatar.data.thumbnails[0].url:null}}};exports.default=u;
(function(){var a=exports.default||module.exports;"function"==typeof a&&(a=a.options),Object.assign(a,{render:function(){var a=this,s=a.$createElement,e=a._self._c||s;return a.userInfo?e("div",["name"!==a.options.display?e("v-avatar",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"avatar"===a.options.display?a.displayValue:null,expression:"options.display === 'avatar' ? displayValue : null"}],staticClass:"display-user",attrs:{size:28,src:a.src,alt:a.displayValue,color:"light-gray"}}):a._e(),a._v(" "),"avatar"!==a.options.display?e("span",{staticClass:"label gray style-3"},[e("div",[a._v(a._s(a.displayValue))])]):a._e()],1):a.newItem?e("div",{staticClass:"gray style-3"},[a._v(" "+a._s(a.$t("interfaces-user-created-you"))+"\n")]):e("div",{staticClass:"gray style-3"},[a._v(" "+a._s(a.$t("interfaces-user-created-unknown"))+"\n")])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-90d7ae",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["JmN1"], "__DirectusExtension__")