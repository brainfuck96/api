parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"z+Co":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],r=!0,n=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(i.push(o.value),!t||i.length!==t);r=!0);}catch(e){n=!0,s=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},i=require("../../../mixins/interface"),r=n(i);function n(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}exports.default={name:"interface-many-to-one",mixins:[r.default],data:function(){return{loading:!1,error:null,items:[],count:null,showListing:!1,selectionSaving:!1,newSelected:null,viewOptionsOverride:{},viewTypeOverride:null,viewQueryOverride:{},filtersOverride:[]}},computed:{relationshipSetup:function(){if(!this.relationship)return!1;var e=this.relationship,t=e.field_a,i=e.field_b,r=e.collection_a,n=e.collection_b;return t&&i&&r&&n||!1},valuePK:function(){return this.$lodash.isObject(this.value)?this.value[this.relatedKey]:this.value},render:function(){return this.$helpers.micromustache.compile(this.options.template)},selectOptions:function(){var e=this;return 0===this.items.length?{}:this.$lodash.mapValues(this.$lodash.keyBy(this.items,this.relatedKey),function(t){return e.render(t)})},currentCollection:function(){return!1===this.relationshipSetup?null:this.fields[this.name].collection},relatedSide:function(){if(!1===this.relationshipSetup)return null;var e=this.relationship,t=e.collection_a;e.collection_b;return t===this.currentCollection?"b":"a"},relatedCollection:function(){return!1===this.relationshipSetup?null:this.relationship["collection_"+this.relatedSide]},relatedKey:function(){return!1===this.relationshipSetup?null:this.relationship["field_"+this.relatedSide]},preferences:function(){return"string"==typeof this.options.preferences?JSON.parse(this.options.preferences):this.options.preferences},filters:function(){return!1===this.relationshipSetup?null:[].concat(s(this.preferences&&this.preferences.filters||[]),s(this.filtersOverride))},viewOptions:function(){if(!1===this.relationshipSetup)return null;var e=this.preferences&&this.preferences.viewOptions||{};return t({},e,this.viewOptionsOverride)},viewType:function(){return!1===this.relationshipSetup?null:this.viewTypeOverride?this.viewTypeOverride:this.preferences&&this.preferences.viewType||"tabular"},viewQuery:function(){if(!1===this.relationshipSetup)return null;var e=this.preferences&&this.preferences.viewQuery||{};return t({},e,this.viewQueryOverride)}},created:function(){this.relationshipSetup&&this.fetchItems()},watch:{relationship:function(){this.relationshipSetup&&this.fetchItems()}},methods:{fetchItems:function(){var t=this;if(null!=this.relationship){var i=this.relatedCollection;this.loading=!0;return Promise.all([this.$api.getItems(i,{fields:"*.*",meta:"total_count",limit:10}),this.value?this.$api.getItem(i,this.valuePK):null]).then(function(i){var r=e(i,2),n=r[0],o=n.meta,l=n.data,u=r[1];t.items=u?[].concat(s(l),[u.data]):l,t.loading=!1,t.count=o.total_count}).catch(function(e){console.error(e),t.error=e,t.loading=!1})}},populateDropdown:function(){var e=this,t=!1;this.selectionSaving=!0,this.items.forEach(function(i){i[e.relatedKey]===e.newSelected&&(t=!0)}),!1===t?this.$api.getItem(this.relatedCollection,this.newSelected).then(function(e){return e.data}).then(function(t){e.$emit("input",e.newSelected),e.items=[].concat(s(e.items),[t]),e.selectionSaving=!1,e.showListing=!1}).catch(function(t){console.error(t),e.$events.emit("error",{notify:e.$t("something_went_wrong_body"),error:t})}):(this.$emit("input",this.newSelected),this.selectionSaving=!1,this.showListing=!1)},dismissModal:function(){this.showListing=!1,this.selectionSaving=!1,this.newSelected=null},setViewOptions:function(e){this.viewOptionsOverride=t({},this.viewOptionsOverride,e)},setViewQuery:function(e){this.viewQueryOverride=t({},this.viewQueryOverride,e)}}};
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"interface-many-to-one"},[!1===e.relationshipSetup?i("div",{staticClass:"notice"},[i("p",[i("i",{staticClass:"material-icons"},[e._v("warning")]),e._v(" "+e._s(e.$t("interfaces-many-to-many-relationship_not_setup")))])]):[i("v-select",{class:{disabled:e.count>10},attrs:{name:e.name,id:e.name,placeholder:e.options.placeholder,options:e.selectOptions,value:e.valuePK,icon:e.options.icon},on:{input:function(t){e.$emit("input",t)}}},[e.count>10?i("button",{attrs:{type:"button"},on:{click:function(t){e.showListing=!0}}},[e.showListing?i("portal",{attrs:{to:"modal"}},[i("v-modal",{attrs:{title:e.$t("select_existing"),buttons:{save:{text:"save",color:"accent",loading:e.selectionSaving,disabled:null===e.newSelected}}},on:{close:e.dismissModal,save:e.populateDropdown}},[i("v-item-listing",{attrs:{collection:e.relatedCollection,selection:[e.newSelected||e.valuePK],filters:e.filters,"view-query":e.viewQuery,"view-type":e.viewType,"view-options":e.viewOptions},on:{options:e.setViewOptions,query:e.setViewQuery,select:function(t){e.newSelected=t[t.length-1]}}})],1)],1):e._e()],1):e._e()])]],2)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-7b0c4c",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["z+Co"], "__DirectusExtension__")