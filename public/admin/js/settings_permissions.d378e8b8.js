(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings_permissions"],{"11cf":function(t,e,s){},"1e70":function(t,e,s){},5881:function(t,e,s){},"805b":function(t,e,s){},"81c8":function(t,e,s){"use strict";var i=s("805b"),n=s.n(i);n.a},9131:function(t,e,s){"use strict";var i=s("11cf"),n=s.n(i);n.a},"9fe0":function(t,e,s){},ab06:function(t,e,s){"use strict";var i=s("9fe0"),n=s.n(i);n.a},b68e:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.error?s("div",[s("v-header",{attrs:{"icon-link":"/"+t.currentProjectKey+"/settings/roles",settings:""}}),t.error?s("v-error",{attrs:{icon:"error_outline",color:"warning",title:t.$t("server_trouble"),body:t.$t("server_trouble_copy")}}):t._e()],1):s("div",{staticClass:"settings-permissions"},[s("v-header",{attrs:{breadcrumb:t.breadcrumb,"icon-link":"/"+t.currentProjectKey+"/settings/roles",settings:""}},[s("template",{slot:"buttons"},[t.isNew||t.isSystem?t._e():s("v-header-button",{attrs:{loading:t.removing,label:t.$t("delete"),icon:"delete_outline","icon-color":"white","background-color":"danger","hover-color":"danger-dark"},on:{click:function(e){t.confirmRemove=!0}}}),s("v-header-button",{attrs:{disabled:!t.editing,loading:t.saving,label:t.$t("save"),icon:"check","background-color":"button-primary-background-color","icon-color":"button-primary-text-color"},on:{click:t.save}})],1)],2),s("label",{staticClass:"type-label"},[t._v(t._s(t.$t("permissions")))]),t.isAdmin?s("v-notice",{staticClass:"admin-note",attrs:{color:"warning"}},[t._v(" "+t._s(t.$t("permissions_admin"))+" ")]):s("v-permissions",{attrs:{loading:!(t.permissions&&t.statuses),permissions:t.permissions,statuses:t.statuses,fields:t.permissionFields},on:{input:t.setPermission}}),t.fields&&t.role?s("v-form",{attrs:{fields:t.fields,values:Object.assign({},t.role,t.roleEdits),"primary-key":t.role.id,collection:"directus_roles"},on:{"stage-value":t.stageValue}}):t._e(),t.confirmRemove?s("portal",{attrs:{to:"modal"}},[s("v-confirm",{attrs:{color:"danger",message:t.$t("delete_role_are_you_sure",{name:t.role.name}),"confirm-text":t.$t("delete"),loading:t.removing},on:{cancel:function(e){t.confirmRemove=!1},confirm:t.remove}})],1):t._e(),s("v-info-sidebar",{attrs:{wide:""}},[s("span",{staticClass:"type-note"},[t._v("No settings")])])],1)},n=[],o=(s("a4d3"),s("99af"),s("4de4"),s("4160"),s("d81d"),s("b0c0"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("3ca3"),s("159b"),s("ddb0"),s("3835")),a=s("2909"),r=s("ade3"),l=s("1b32"),c=s.n(l),u=s("d722"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.loading?s("div",{staticClass:"v-permissions interface loading"},[s("v-spinner",{attrs:{color:"--blue-grey-300","background-color":"--blue-grey-200"}})],1):s("div",{staticClass:"interface"},[s("div",{staticClass:"v-permissions"},[s("v-permissions-header",{on:{"toggle-all":t.toggleAll}}),s("div",{staticClass:"body"},[0===Object.keys(t.rows).length?s("v-notice",{staticClass:"no-collections-message",attrs:{color:"gray"}},[t._v(" "+t._s(t.$t("permissions_no_collections"))+" ")]):t._e(),t._l(t.rows,(function(e,i){return s("v-permissions-row",{key:i,attrs:{permission:e,"permission-name":i,statuses:(t.statuses[i]||{}).mapping,fields:t.fields[i]},on:{input:function(e){return t.$emit("input",e)}}})})),t.showDirectus?t._l(t.directusRows,(function(e,i){return s("v-permissions-row",{key:i,attrs:{permission:e,"permission-name":i,statuses:(t.statuses[i]||{}).mapping,fields:t.fields[i],system:""},on:{input:function(e){return t.$emit("input",e)}}})})):t._e()],2)],1),s("v-switch",{attrs:{label:t.$t("show_directus_collections")},model:{value:t.showDirectus,callback:function(e){t.showDirectus=e},expression:"showDirectus"}})],1)},m=[],p=(s("2ca0"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"cell type-table-head"},[t._v(t._s(t.$tc("collection",2)))]),s("div",{staticClass:"cell type-table-head"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("create"),expression:"$t('create')"}],staticClass:"cell",attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-all","create")}}},[s("v-icon",{attrs:{name:"add_circle"}})],1)]),s("div",{staticClass:"cell type-table-head"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("read"),expression:"$t('read')"}],staticClass:"cell",attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-all","read")}}},[s("v-icon",{attrs:{name:"visibility"}})],1)]),s("div",{staticClass:"cell type-table-head"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("update"),expression:"$t('update')"}],staticClass:"cell",attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-all","update")}}},[s("v-icon",{attrs:{name:"edit"}})],1)]),s("div",{staticClass:"cell type-table-head"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("delete"),expression:"$t('delete')"}],staticClass:"cell",attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-all","delete")}}},[s("v-icon",{attrs:{name:"delete"}})],1)]),s("div",{staticClass:"cell type-table-head"},[s("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("comment"),expression:"$t('comment')"}],staticClass:"cell",attrs:{type:"button"},on:{click:function(e){return t.$emit("toggle-all","comment")}}},[s("v-icon",{attrs:{name:"comment"}})],1)]),s("div",{staticClass:"cell type-table-head"},[t._v(t._s(t.$tc("field",2)))]),s("div",{staticClass:"cell type-table-head"},[t._v(t._s(t.$t("statuses")))])])])}),v=[],f=(s("d6b1"),s("2877")),h={},b=Object(f["a"])(h,p,v,!1,null,"59c49af0",null),g=b.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"v-permissions-row",class:{"system-row":t.system}},[t.statuses?s("div",{staticClass:"row"},[s("div",{staticClass:"cell collection-title"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.permissionName,expression:"permissionName"}],staticClass:"name",class:{system:t.system}},[t._v(" "+t._s(t.$helpers.formatTitle(t.system?t.permissionName.substring(9):t.permissionName))+" ")]),s("span",{staticClass:"set-all"},[s("button",{staticClass:"on",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setAll(!0)}}},[s("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("turn_all_on"),expression:"$t('turn_all_on')"}],staticClass:"icon",attrs:{name:"done",small:"",color:"--success"}})],1),s("button",{staticClass:"off",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setAll(!1)}}},[s("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("turn_all_off"),expression:"$t('turn_all_off')"}],staticClass:"icon",attrs:{name:"block",small:"",color:"--danger"}})],1)])]),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.getCombinedVal("create"),options:["none","full"]},on:{input:function(e){return t.setAllStatuses("create",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.getCombinedVal("read"),options:t.permissionOptions},on:{input:function(e){return t.setAllStatuses("read",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.getCombinedVal("update"),options:t.permissionOptions},on:{input:function(e){return t.setAllStatuses("update",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.getCombinedVal("delete"),options:t.permissionOptions},on:{input:function(e){return t.setAllStatuses("delete",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.getCombinedVal("comment"),options:["none","create","update","full"]},on:{input:function(e){return t.setAllStatuses("comment",e)}}})],1),s("div",{staticClass:"cell"},[s("button",{class:{limited:t.fieldState},on:{click:function(e){t.active=!t.active}}},[t._v(" "+t._s(t.fieldState?t.$t("mixed"):t.$t("all"))+" ")])]),s("div",{staticClass:"cell"},[s("button",{staticClass:"mixed",on:{click:function(e){t.active=!t.active}}},[t._v("Expand")])])]):s("div",{staticClass:"row"},[s("div",{staticClass:"cell collection-title"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.permissionName,expression:"permissionName"}],staticClass:"name",class:{system:t.system}},[t._v(" "+t._s(t.$helpers.formatTitle(t.system?t.permissionName.substring(9):t.permissionName))+" ")]),s("span",{staticClass:"set-all"},[s("button",{staticClass:"on",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setAll(!0)}}},[s("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("turn_all_on"),expression:"$t('turn_all_on')"}],staticClass:"icon",attrs:{name:"done",small:"",color:"--success"}})],1),s("button",{staticClass:"off",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setAll(!1)}}},[s("v-icon",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.$t("turn_all_off"),expression:"$t('turn_all_off')"}],staticClass:"icon",attrs:{name:"block",small:"",color:"--danger"}})],1)])]),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission.create,options:["none","full"]},on:{input:function(e){return t.emitValue("create",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission.read,options:t.permissionOptions},on:{input:function(e){return t.emitValue("read",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission.update,options:t.permissionOptions},on:{input:function(e){return t.emitValue("update",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission.delete,options:t.permissionOptions},on:{input:function(e){return t.emitValue("delete",e)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission.comment,options:["none","read","create","update","full"]},on:{input:function(e){return t.emitValue("comment",e)}}})],1),s("div",{staticClass:"cell"},[s("button",{class:{limited:t.fieldState},on:{click:function(e){t.fieldsSelect={collection:t.permissionName}}}},[t._v(" "+t._s(t.fieldState?t.$t("limited"):t.$t("all"))+" ")])]),t._m(0)]),t.active?[s("div",{staticClass:"sub row"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:"System Option",expression:"'System Option'"}],staticClass:"cell"},[t._v(" "+t._s(t.$t("permission_states.on_create"))+" ")]),s("div",{staticClass:"cell block"},[s("v-icon",{attrs:{name:"block"}})],1),s("div",{staticClass:"cell block"},[s("v-icon",{attrs:{name:"block"}})],1),s("div",{staticClass:"cell block"},[s("v-icon",{attrs:{name:"block"}})],1),s("div",{staticClass:"cell block"},[s("v-icon",{attrs:{name:"block"}})],1),s("div",{staticClass:"cell block"},[s("v-icon",{attrs:{name:"block"}})],1),s("div",{staticClass:"cell"},[s("button",{class:{limited:t.getFieldSettingsPerStatus("$create")},on:{click:function(e){t.fieldsSelect={collection:t.permissionName,status:"$create"}}}},[t._v(" "+t._s(t.getFieldSettingsPerStatus("$create")?t.$t("limited"):t.$t("all"))+" ")])]),t.statuses?s("div",{staticClass:"cell"},[s("button",{class:{limited:0!==(t.permission.$create.status_blacklist||[]).length},on:{click:function(e){t.statusSelect={collection:t.permissionName,status:"$create"}}}},[t._v(" "+t._s(0===(t.permission.$create.status_blacklist||[]).length?t.$t("all"):t.$t("limited"))+" ")])]):s("div",{staticClass:"cell"},[s("span",{staticClass:"mixed"},[t._v("--")])])])]:t._e(),t.statuses&&t.active?t._l(t.statuses,(function(e,i){return s("div",{key:t.permissionName+"-"+i,staticClass:"sub row"},[s("div",{staticClass:"cell"},[s("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:i,expression:"status"}]},[t._v(t._s(e.name))])]),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission[i].create,options:["none","full"]},on:{input:function(e){return t.emitValue("create",e,i)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission[i].read,options:t.permissionOptions},on:{input:function(e){return t.emitValue("read",e,i)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission[i].update,options:t.permissionOptions},on:{input:function(e){return t.emitValue("update",e,i)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission[i].delete,options:t.permissionOptions},on:{input:function(e){return t.emitValue("delete",e,i)}}})],1),s("div",{staticClass:"cell"},[s("v-permissions-toggle",{attrs:{value:t.permission[i].comment,options:["none","create","update","full"]},on:{input:function(e){return t.emitValue("comment",e,i)}}})],1),s("div",{staticClass:"cell"},[s("button",{class:{limited:t.getFieldSettingsPerStatus(i)},on:{click:function(e){t.fieldsSelect={collection:t.permissionName,status:i}}}},[t._v(" "+t._s(t.getFieldSettingsPerStatus(i)?t.$t("limited"):t.$t("all"))+" ")])]),s("div",{staticClass:"cell"},[s("button",{class:{limited:0!==(t.permission[i].status_blacklist||[]).length},on:{click:function(e){t.statusSelect={collection:t.permissionName,status:i}}}},[t._v(" "+t._s(0===(t.permission[i].status_blacklist||[]).length?t.$t("all"):t.$t("limited"))+" ")])])])})):t._e(),s("button",{staticClass:"collapse",on:{click:function(e){t.active=!t.active}}},[s("v-icon",{attrs:{name:t.active?"unfold_less":"unfold_more"}})],1),t.fieldsSelect?s("portal",{attrs:{to:"modal"}},[s("v-modal",{attrs:{title:t.$t("select_fields"),buttons:{confirm:{text:t.$t("confirm")}},"action-required":""},on:{confirm:function(e){t.fieldsSelect=null}}},[s("form",{staticClass:"modal-content",on:{submit:function(t){t.preventDefault()}}},[s("fieldset",[s("legend",{staticClass:"type-label"},[t._v(t._s(t.$t("readable_fields")))]),t._l(t.fieldsWithoutPK,(function(e,i){return s("v-checkbox",{key:t.permissionName+"-read-"+i,attrs:{id:t.permissionName+"-read-"+i,inputValue:!t.blacklist.read.includes(i),label:t.$helpers.formatTitle(i),value:i},on:{change:function(e){return t.toggleField(i)}}})}))],2),s("fieldset",[s("legend",{staticClass:"type-label"},[t._v(t._s(t.$t("writable_fields")))]),t._l(t.fields,(function(e,i){return s("v-checkbox",{key:t.permissionName+"-write-"+i,attrs:{id:t.permissionName+"-write-"+i,inputValue:!t.blacklist.write.includes(i),label:t.$helpers.formatTitle(i),value:i},on:{change:function(e){return t.toggleField(i,!0)}}})}))],2)])])],1):t._e(),t.statusSelect&&t.statuses?s("portal",{attrs:{to:"modal"}},[s("v-modal",{attrs:{title:t.$t("select_statuses"),buttons:{confirm:{text:t.$t("confirm")}},"action-required":""},on:{confirm:function(e){t.statusSelect=null}}},[s("form",{staticClass:"modal-content",on:{submit:function(t){t.preventDefault()}}},[s("fieldset",[s("legend",{staticClass:"type-label"},[t._v(t._s(t.$t("allowed_status_options")))]),t._l(t.statuses,(function(e,i){return s("v-checkbox",{key:"status-"+i,attrs:{id:"status-"+i,inputValue:!(t.permission[t.statusSelect.status].status_blacklist||[]).includes(i),label:e.name,value:i},on:{change:function(e){return t.toggleStatus(i)}}})}))],2)])])],1):t._e()],2)},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cell"},[s("span",{staticClass:"mixed"},[t._v("--")])])}],k=(s("caad"),s("2532"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-popover",{attrs:{placement:"left-start",offset:"5"}},[s("button",{staticClass:"box",class:[{none:null===t.value},t.value]},["none"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"close",size:14}}):"mine"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"person",size:14}}):"role"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"group",size:14}}):"full"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"check",size:14}}):"read"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"remove_red_eye",size:14}}):"create"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"add",size:14}}):"update"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"edit",size:14}}):"always"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"announcement",size:14}}):"indeterminate"===t.value?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"remove",size:14}}):t._e()],1),s("template",{slot:"popover"},[s("div",{staticClass:"popover-content"},t._l(t.options,(function(e){return s("button",{directives:[{name:"close-popover",rawName:"v-close-popover"}],key:e,on:{click:function(s){return t.$emit("input",e)}}},[s("div",{staticClass:"box",class:e},["none"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"close",size:14}}):"mine"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"person",size:14}}):"role"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"group",size:14}}):"full"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"check",size:14}}):"read"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"remove_red_eye",size:14}}):"create"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"add",small:""}}):"update"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"edit",size:14}}):"always"===e?s("v-icon",{staticClass:"icon",attrs:{color:"--page-background-color",name:"announcement",size:14}}):t._e()],1),"none"===e?[t._v(" "+t._s(t.$t("permission_states.none"))+" ")]:t._e(),"mine"===e?[t._v(" "+t._s(t.$t("permission_states.mine"))+" ")]:t._e(),"role"===e?[t._v(" "+t._s(t.$t("permission_states.role"))+" ")]:t._e(),"full"===e?[t._v(" "+t._s(t.$t("permission_states.full"))+" ")]:t._e(),"read"===e?[t._v(" "+t._s(t.$t("permission_states.read"))+" ")]:t._e(),"create"===e?[t._v(" "+t._s(t.$t("permission_states.create"))+" ")]:t._e(),"update"===e?[t._v(" "+t._s(t.$t("permission_states.update"))+" ")]:t._e(),"always"===e?[t._v(" "+t._s(t.$t("permission_states.always"))+" ")]:t._e()],2)})),0)])],2)}),C=[],w={name:"PermissionToggle",props:{options:{type:Array,default:function(){return[]}},value:{type:String,default:"none"}}},O=w,j=(s("cc34"),Object(f["a"])(O,k,C,!1,null,"1ef68b2d",null)),P=j.exports,E=s("2ef0"),S={name:"VPermissionsRow",components:{VPermissionsToggle:P},props:{permission:{type:Object,required:!0},statuses:{type:Object,default:null},permissionName:{type:String,required:!0},fields:{type:Object,default:function(){return{}}},system:{type:Boolean,default:!1}},data:function(){return{active:!1,fieldsSelect:!1,statusSelect:!1}},computed:{primaryKeyFieldName:function(){return Object(E["find"])(this.fields,{primary_key:!0}).field},fieldsWithoutPK:function(){var t=Object.assign({},this.fields);return delete t[this.primaryKeyFieldName],t},collapsable:function(){return null!=this.statuses},blacklist:function(){if(this.fieldsSelect&&this.permission){var t=this.fieldsSelect.status,e=t?this.permission[t]:this.permission;return{read:e.read_field_blacklist||[],write:e.write_field_blacklist||[]}}},fieldState:function(){if(!this.permission)return this.$t("all");if(this.statuses){var t=!0;return Object(E["forEach"])(this.permission,(function(e){(e.read_field_blacklist.length>0||e.write_field_blacklist.length>0)&&(t=!1)})),!t}var e=this.permission.read_field_blacklist||[],s=this.permission.write_field_blacklist||[];return 0!==e.length||0!==s.length},userCreatedField:function(){return Object(E["find"])(this.fields,(function(t){return t.type&&"owner"===t.type.toLowerCase()}))},permissionOptions:function(){return this.userCreatedField||this.permissionName.startsWith("directus_")?["none","mine","role","full"]:["none","full"]}},methods:{setAll:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s=e?{create:"full",read:"full",update:"full",delete:"full",comment:"full",explain:"none",read_field_blacklist:[],write_field_blacklist:[],status_blacklist:[]}:{create:"none",read:"none",update:"none",delete:"none",comment:"none",explain:"none",read_field_blacklist:[],write_field_blacklist:[],status_blacklist:[]};if(this.statuses){var i=[];return Object.keys(this.statuses).forEach((function(e){Object.keys(s).forEach((function(n){i.push({collection:t.permissionName,permission:n,value:s[n],status:e})}))})),this.$emit("input",i)}return this.$emit("input",Object.keys(s).map((function(e){return{collection:t.permissionName,permission:e,value:s[e]}})))},emitValue:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$emit("input",{collection:this.permissionName,permission:t,value:e,status:s})},getCombinedVal:function(t){if(!this.statuses)return null;var e=this.permission[Object.keys(this.statuses)[0]][t];return Object(E["forEach"])(this.permission,(function(s,i){"$create"!==i&&s[t]!==e&&(e="indeterminate")})),e},getFieldSettingsPerStatus:function(t){var e=this.permission[t].read_field_blacklist,s=this.permission[t].write_field_blacklist;return 0!==e.length||0!==s.length},setAllStatuses:function(t,e){var s=this;Object.keys(this.statuses).forEach((function(i){s.emitValue(t,e,i)}))},toggleField:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=this.fieldsSelect.status,i=e?this.blacklist.write:this.blacklist.read,n=e?"write_field_blacklist":"read_field_blacklist";return i.includes(t)?this.emitValue(n,i.filter((function(e){return e!==t})),s):this.emitValue(n,[].concat(Object(a["a"])(i),[t]),s)},toggleStatus:function(t){if(this.statuses){var e=this.statusSelect.status,s=this.permission[e].status_blacklist;return console.log([].concat(Object(a["a"])(s),[t]),e),s.includes(t)?this.emitValue("status_blacklist",s.filter((function(e){return e!==t})),e):this.emitValue("status_blacklist",[].concat(Object(a["a"])(s),[t]),e)}}}},N=S,x=(s("ab06"),Object(f["a"])(N,$,y,!1,null,"7a96fab8",null)),V=x.exports,F={name:"VPermissions",components:{VPermissionsHeader:g,VPermissionsRow:V},props:{permissions:{type:Object,default:function(){return{}}},statuses:{type:Object,default:function(){return{}}},fields:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1}},data:function(){return{showDirectus:!1}},computed:{directusRows:function(){var t=Object(E["pickBy"])(this.permissions,(function(t,e){return e.startsWith("directus_")}));return _(t).toPairs().sortBy(0).fromPairs().value()},rows:function(){var t=Object(E["pickBy"])(this.permissions,(function(t,e){return!1===e.startsWith("directus_")}));return _(t).toPairs().sortBy(0).fromPairs().value()}},methods:{toggleAll:function(t){var e=this,s=[],i=!0;Object(E["forEach"])(this.permissions,(function(s,n){n.startsWith("directus_")||(e.statuses[n]?Object(E["forEach"])(s,(function(e){"full"===e[t]&&(i=!1)})):"full"===s[t]&&(i=!1))})),Object.keys(this.permissions).forEach((function(n){if(!n.startsWith("directus_"))return e.statuses[n]?Object.keys(e.statuses[n].mapping).forEach((function(e){s.push({collection:n,status:e,permission:t,value:i?"full":"none"})})):void s.push({collection:n,permission:t,value:i?"full":"none"})})),this.$emit("input",s)}}},A=F,z=(s("9131"),Object(f["a"])(A,d,m,!1,null,"02ac7b55",null)),D=z.exports,K=s("37b6"),R=s("2f62");function B(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?B(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):B(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var W={name:"SettingsPermissions",metaInfo:function(){if(this.role)return{title:"".concat(this.$t("settings")," | ").concat(this.$helpers.formatTitle(this.role.name)," ").concat(this.$t("permissions"))}},components:{VPermissions:D},data:function(){return{role:null,error:null,saving:!1,roleEdits:{},confirmRemove:!1,removing:!1,fields:{},permissionsLoading:!1,savedPermissions:{},permissionEdits:{},permissionFields:{},statuses:null}},computed:T({},Object(R["e"])(["currentProjectKey"]),{isNew:function(){return"+"===this.$route.params.id},isSystem:function(){return!!this.role&&(1===this.role.id||2===this.role.id)},isAdmin:function(){return 1==this.$route.params.id},collections:function(){return this.$store.state.collections},breadcrumb:function(){return this.role?this.isNew?[{name:this.$t("settings"),path:"/".concat(this.currentProjectKey,"/settings"),color:"warning"},{name:this.$t("roles"),path:"/".concat(this.currentProjectKey,"/settings/roles")},{name:this.$t("creating_role"),path:"/".concat(this.currentProjectKey,"/settings/roles/+")}]:[{name:this.$t("settings"),path:"/".concat(this.currentProjectKey,"/settings")},{name:this.$t("roles"),path:"/".concat(this.currentProjectKey,"/settings/roles")},{name:this.$helpers.formatTitle(this.role.name),path:"/".concat(this.currentProjectKey,"/settings/roles/").concat(this.role.id)}]:null},editing:function(){return Object.keys(this.roleEdits).length>0||Object.keys(this.permissionEdits).length>0},permissions:function(){var t=this;if(!this.statuses)return null;if(!this.collections)return null;var e={};return Object.keys(this.collections).forEach((function(s){var i=Object.assign({},K["b"]);if(i.collection=s,null==t.statuses[s])return e[s]=i,e[s].$create=i,t.savedPermissions[s]&&(e[s]=T({},e[s],{},t.savedPermissions[s])),void(t.permissionEdits[s]&&(e[s]=T({},e[s],{},t.permissionEdits[s])));var n=Object.keys(t.statuses[s].mapping),o=[].concat(Object(a["a"])(n),["$create"]);o.forEach((function(n){e[s]||(e[s]={},e[s].$create=i),e[s][n]=T({},i,{status:n}),t.savedPermissions[s]&&t.savedPermissions[s][n]&&(e[s][n]=T({},e[s][n],{},t.savedPermissions[s][n])),t.permissionEdits[s]&&t.permissionEdits[s][n]&&(e[s][n]=T({},e[s][n],{},t.permissionEdits[s][n]))}))})),e}}),beforeRouteEnter:function(t,e,s){var i=t.params.id,n="+"===i;if(n)return u["a"].getFields("directus_roles").then((function(t){return t.data})).then((function(t){s((function(e){var s=Object(E["keyBy"])(t.map((function(t){return T({},t,{name:c()(t.field)})})),"field");e.$data.fields=s,e.$data.role=Object(E["mapValues"])(s,(function(t){return t.default_value}))}))})).catch((function(t){s((function(e){e.$data.error=t}))}));var a={fields:"*.*.*"};return Promise.all([u["a"].getRole(+i,a),u["a"].getFields("directus_roles")]).then((function(t){var e=Object(o["a"])(t,2),s=e[0],i=e[1];return{role:s.data,fields:Object(E["keyBy"])(i.data.map((function(t){return T({},t,{name:c()(t.field)})})),"field")}})).then((function(t){var e=t.role,i=t.fields;s((function(t){t.$data.role=e,t.$data.fields=i}))})).catch((function(t){s((function(e){e.$data.error=t}))}))},watch:{$route:function(){this.loadPermissions()}},created:function(){this.loadPermissions()},methods:{stageValue:function(t){var e=t.field,s=t.value;this.roleEdits=T({},this.roleEdits,Object(r["a"])({},e,s))},save:function(){var t=this;this.saving=!0;var e=this.$helpers.shortid.generate();this.$store.dispatch("loadingStart",{id:e}),this.saveRole().then(this.savePermissions).then((function(){t.$store.dispatch("loadingFinished",e),t.saving=!1,t.$router.push("/".concat(t.currentProjectKey,"/settings/roles")),t.$store.dispatch("getCurrentUser")})).catch((function(s){t.$store.dispatch("loadingFinished",e),t.$events.emit("error",{notify:t.$t("something_went_wrong_body"),error:s})}))},saveRole:function(){return 0===Object.keys(this.roleEdits).length?Promise.resolve():this.isNew?this.$api.createRole(this.roleEdits):this.$api.updateRole(this.role.id,this.roleEdits)},savePermissions:function(){var t=this;if(0===Object.keys(this.permissionEdits).length)return Promise.resolve();var e=[],s=[];return Object.keys(this.permissionEdits).forEach((function(i){if(t.statuses[i])Object.keys(t.permissionEdits[i]).forEach((function(n){var o=t.savedPermissions[i]&&t.savedPermissions[i][n]&&t.savedPermissions[i][n].id||null;o?s.push(T({id:o},t.permissionEdits[i][n])):e.push(T({collection:i,status:n,role:t.role.id},t.permissionEdits[i][n]))}));else{if(t.permissionEdits[i].$create){var n=t.savedPermissions[i]&&t.savedPermissions[i].$create&&t.savedPermissions[i].$create.id||null;if(n?s.push(T({id:n},t.permissionEdits[i].$create)):e.push(T({collection:i,status:"$create",role:t.role.id},t.permissionEdits[i].$create)),t.$delete(t.permissionEdits[i],"$create"),0===Object.keys(t.permissionEdits[i]))return}var o=t.savedPermissions[i]&&t.savedPermissions[i].id||null;o?s.push(T({id:o},t.permissionEdits[i])):e.push(T({collection:i,role:t.role.id},t.permissionEdits[i]))}})),Promise.all([e.length>0?this.$api.createPermissions(e):Promise.resolve(),s.length>0?this.$api.updatePermissions(s):Promise.resolve()])},remove:function(){var t=this;if(!this.isSystem){this.removing=!0;var e=this.$helpers.shortid.generate();return this.$store.dispatch("loadingStart",{id:e}),this.$api.deleteRole(this.role.id).then((function(){t.$store.dispatch("loadingFinished",e),t.removing=!1,t.$router.push("/".concat(t.currentProjectKey,"/settings/roles"))})).catch((function(s){t.$store.dispatch("loadingFinished",e),t.$events.emit("error",{notify:t.$t("something_went_wrong_body"),error:s})}))}},loadPermissions:function(){var t=this;if(!this.isNew){this.permissionsLoading=!0;var e=this.$helpers.shortid.generate();return this.$store.dispatch("loadingStart",{id:e}),Promise.all([this.$api.getAllFields(),this.$api.getPermissions({"filter[role][eq]":this.$route.params.id,limit:-1})]).then((function(t){var e=Object(o["a"])(t,2),s=e[0],i=e[1];return{fields:s.data,permissions:i.data}})).then((function(s){var i=s.fields,n=s.permissions;t.$store.dispatch("loadingFinished",e);var o={};n.forEach((function(t){null==t.status?o[t.collection]=T({},t):(o[t.collection]||(o[t.collection]={}),o[t.collection][t.status]=T({},t))})),t.permissionsLoading=!1,t.savedPermissions=o,t.statuses=Object(E["keyBy"])(i.filter((function(t){return t.type&&"status"===t.type.toLowerCase()})).map((function(t){return{mapping:t.options.status_mapping,collection:t.collection}})),"collection"),t.permissionFields=Object(E["mapValues"])(Object(E["groupBy"])(i,"collection"),(function(t){return Object(E["keyBy"])(t,"field")}))})).catch((function(s){t.$store.dispatch("loadingFinished",e),t.$events.emit("error",{notify:t.$t("something_went_wrong_body"),error:s})}))}},setPermission:function(t){var e=this;return Array.isArray(t)?t.forEach((function(t){return e.stagePermission(t)})):this.stagePermission(t)},stagePermission:function(t){var e=t.collection,s=t.permission,i=t.value,n=t.status,o=void 0===n?null:n;return null===o?this.$set(this.permissionEdits,e,T({},this.permissionEdits[e]||{},Object(r["a"])({},s,i))):(null==this.permissionEdits[e]&&this.$set(this.permissionEdits,e,{}),this.$set(this.permissionEdits,e,T({},this.permissionEdits[e]||{},Object(r["a"])({},o,T({},this.permissionEdits[e][o]||{},Object(r["a"])({},s,i))))))}}},q=W,L=(s("81c8"),Object(f["a"])(q,i,n,!1,null,"bb57a082",null));e["default"]=L.exports},cc34:function(t,e,s){"use strict";var i=s("1e70"),n=s.n(i);n.a},d6b1:function(t,e,s){"use strict";var i=s("5881"),n=s.n(i);n.a}}]);
//# sourceMappingURL=settings_permissions.d378e8b8.js.map