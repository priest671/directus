(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28337510"],{"5d28":function(t,e,n){},bc51:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(t){t.preventDefault()}}},[n("label",{staticClass:"style-3",attrs:{for:"title"}},[t._v(t._s(t.$t("layouts-cards-title")))]),n("v-select",{attrs:{id:"title",value:t.viewOptions.title||this.primaryKeyField,options:t.titleFieldOptions},on:{input:function(e){return t.setOption("title","__none__"===e?null:e)}}}),n("label",{staticClass:"style-3",attrs:{for:"subtitle"}},[t._v("\n    "+t._s(t.$t("layouts-cards-subtitle"))+"\n  ")]),n("v-select",{attrs:{id:"subtitle",value:t.viewOptions.subtitle||"__none__",options:t.fieldOptions},on:{input:function(e){return t.setOption("subtitle","__none__"===e?null:e)}}}),n("label",{staticClass:"style-3",attrs:{for:"src"}},[t._v(t._s(t.$t("layouts-cards-src")))]),n("v-select",{attrs:{id:"src",value:t.viewOptions.src||"__none__",options:t.fileOptions},on:{input:function(e){return t.setOption("src","__none__"===e?null:e)}}}),n("label",{staticClass:"style-3",attrs:{for:"content"}},[t._v("\n    "+t._s(t.$t("layouts-cards-content"))+"\n  ")]),n("v-select",{attrs:{id:"content",value:t.viewOptions.content||"__none__",options:t.fieldOptions},on:{input:function(e){return t.setOption("content","__none__"===e?null:e)}}}),n("label",{staticClass:"style-3",attrs:{for:"icon"}},[t._v("Fallback Icon")]),n("v-input",{attrs:{value:t.viewOptions.icon||"photo"},on:{input:function(e){return t.setOption("icon",e)}}})],1)},o=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("c3ff"),l=n.n(r);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var c={mixins:[l.a],computed:{titleFieldOptions:function(){return u({},_.mapValues(this.fields,function(t){return t.name}))},fieldOptions:function(){return u({__none__:"(".concat(this.$t("dont_show"),")")},_.mapValues(this.fields,function(t){return t.name}))},fileOptions:function(){var t=_.filter(this.fields,function(t){return"file"===t.type.toLowerCase()}),e=_.keyBy(t,"field"),n=u({__none__:"(".concat(this.$t("dont_show"),")")},_.mapValues(e,function(t){return t.name}));if("data"in this.fields){var i=this.fields.data;"alias"===i.type.toLowerCase()&&"directus_files"===i.collection&&(n.data=this.$t("file"))}return n}},methods:{setOption:function(t,e){this.$emit("options",u({},this.viewOptions,Object(s["a"])({},t,e)))}}},p=c,f=(n("e168"),n("2877")),d=Object(f["a"])(p,i,o,!1,null,"57a76366",null);e["default"]=d.exports},c3ff:function(t,e){t.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:()=>[]},viewOptions:{type:Object,default:()=>({})},viewQuery:{type:Object,default:()=>({})},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:()=>[]},link:{type:String,default:null},sortField:{type:String,default:null},collection:{type:String,default:null}}}},e168:function(t,e,n){"use strict";var i=n("5d28"),o=n.n(i);o.a}}]);
//# sourceMappingURL=chunk-28337510.5dcde092.js.map