(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81da055c"],{3991:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.userInfo?a("div",{on:{click:function(t){return t.stopPropagation(),e.$router.push("/users/"+e.userInfo.id)}}},["name"!==e.options.display?a("v-avatar",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"avatar"===e.options.display?e.displayValue:null,expression:"options.display === 'avatar' ? displayValue : null"}],staticClass:"display-user",attrs:{size:28,src:e.src,alt:e.displayValue,color:"light-gray"}}):e._e(),"avatar"!==e.options.display?a("span",{staticClass:"label"},[a("div",[e._v(e._s(e.displayValue))])]):e._e()],1):e._e()},n=[],s=a("7618"),u=a("8db2"),i=a.n(u),r={mixins:[i.a],computed:{userInfo:function(){return this.value?"object"===Object(s["a"])(this.value)?this.value:this.$store.state.users[this.value]:null},displayValue:function(){return this.$helpers.micromustache.render(this.options.template,this.userInfo)},src:function(){return this.userInfo.avatar?this.userInfo.avatar.data.thumbnails[0].url:null}}},o=r,p=(a("4505"),a("2877")),c=Object(p["a"])(o,l,n,!1,null,"2847c698",null);t["default"]=c.exports},4505:function(e,t,a){"use strict";var l=a("c20e"),n=a.n(l);n.a},"8db2":function(e,t){e.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}}},c20e:function(e,t,a){}}]);
//# sourceMappingURL=chunk-81da055c.d5fed7b9.js.map