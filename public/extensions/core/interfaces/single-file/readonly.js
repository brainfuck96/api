parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"QdEO":[function(require,module,exports) {
module.exports={props:{name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},newItem:{type:Boolean,default:!1},relationship:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null}}};
},{}],"+Pup":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../mixins/interface"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}exports.default={mixins:[r.default],data:function(){return{error:null}},methods:{handleImageError:function(e){this.error=e}}};
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"readonly-single-file no-wrap"},[e.value&&e.value.storage&&e.value.storage.full_url&&!e.error?a("img",{attrs:{src:e.value.storage.full_url},on:{error:e.handleImageError}}):e.error?a("i",{staticClass:"material-icons"},[e._v("broken_image")]):a("span",[e._v("--")])])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-f4f0db",functional:void 0});})();
},{"../../../mixins/interface":"QdEO"}]},{},["+Pup"], "__DirectusExtension__")