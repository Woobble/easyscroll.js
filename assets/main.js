(()=>{"use strict";var t={309:(t,e,n)=>{function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.d(e,{Z:()=>m});var c="pscroll-html",r=".".concat("pscroll_section"),s="pscroll_active",a="pscroll_hide",l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.tags=e.tags||[],this.fallBackSection=e.fallBack||0;var n=e.initialize||!0;this.initialized=!1,this.sections=[],this.callbacks=[],this.sectionTags=new Map,this.waiting=!1,n&&this.initialize()}var e,n;return e=t,(n=[{key:"destroy",value:function(){var t;this.initialized&&(this.tags=null,this.fallBackSection=null,this.sectionTags=null,this.sections=null,this.callbacks=null,this.waiting=null,document.removeEventListener("wheel",this.wheelEvent),document.removeEventListener("touchmove",this.moveTouch),document.removeEventListener("touchstart",this.startTouch),g(t=d("html")[0],c)&&p(t,c))}},{key:"initialize",value:function(){if(!this.initialized){this.initialized=!0,function(t,e,n,i){var o;if(g(o=d("html")[0],c)||v(o,c),function(t,e){var n=0;d(r,e).forEach((function(e){t.sections.push(e);var i=t.tags[n]||"undef".concat(h++);t.sectionTags.set(i,n),n++})),t.sections}(t,(function(){return d("#page_container")})),t.sections.forEach((function(t){v(t,a)})),t.sections.length>0){var s=f();t.activeSection=t.sectionTags.get(s)||t.fallBackSection}}(this),e=this,document.addEventListener("wheel",e.wheelEvent=function(t){t.deltaY<0?e.goUp():t.deltaY>0&&e.goDown()},!1),function(t){document.addEventListener("touchstart",t.startTouch=function(t){e=t.touches[0].clientX,n=t.touches[0].clientY},!1),document.addEventListener("touchmove",t.moveTouch=function(i){if(null!==e&&null!==n){var o=i.touches[0].clientX,c=i.touches[0].clientY,r=e-o,s=n-c;Math.abs(r)<Math.abs(s)&&(s>0?t.goDown():t.goUp()),e=null,n=null}},!1);var e=null,n=null}(e);var t=f();t&&this.goToTag(t)}var e}},{key:"goUp",value:function(){if(!this.waiting&&this.currentSectionId-1>=0){var t=this.currentSectionId-1;this.activeSection=t,u(this.getTagForIndex(t))}}},{key:"goDown",value:function(){if(!this.waiting&&this.currentSectionId+1<this.sections.length){var t=this.currentSectionId+1;this.activeSection=t,u(this.getTagForIndex(t))}}},{key:"goTo",value:function(t){this.currentSectionId+1<this.sections.length&&this.currentSectionId-1>=0&&(this.activeSection=t)}},{key:"goToTag",value:function(t){if(t){var e=this.sectionTags.get(t);e&&(this.goTo(e),u(t))}}},{key:"afterScroll",value:function(t){"function"==typeof t&&this.callbacks.push(t)}},{key:"getTagForIndex",value:function(t){var e=null;return t>=0&&this.sectionTags.forEach((function(n,i){t===n&&(e=i)})),e}},{key:"activeSection",set:function(t){var e,n;t!==this.currentSectionId&&((n=(e=this).sections[e.currentSectionId])&&(e.waiting=!0,p(n,s),setTimeout((function(){e.waiting=!1,v(n,a)}),800)),this.currentSectionId=t,function(e,n){var i=e.sections[t];if(!i)return window.console.warn("Cannot find section. Getting back to fallback"),n(e.sections[e.fallBackSection]),void(e.currentSectionId=e.fallBackSection);n(i)}(this,(function(t){t&&(g(t,s)||(v(t,s),p(t,a)))})),this.callbacks.forEach((function(e){return e(t)})))},get:function(){return this.sections[this.currentSectionId]}}])&&o(e.prototype,n),t}();function u(t){window.location.href="#".concat(t)}function f(){return window.location.hash.replace("#","")}var h=1;function d(t,e){return(e=arguments>1?e:document)?e.querySelectorAll(t):null}function g(t,e){return!!t&&(t.classList?t.classList.contains(e):RegExp("(^| )".concat(e,"( |$)"),"gi").test(t.className))}function v(t,e){t&&t.classList&&t.classList.add(e)}function p(t,e){t&&t.classList&&t.classList.remove(e)}l.fn=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"undefined"==typeof document||"undefined"==typeof window?(console.exception("document and window has to be defined"),null):new l(t)};const m=l.fn},293:(t,e,n)=>{var i,o,c=n(309);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=n.hmd(t),i="undefined"!=typeof window?window:void 0,o=function(){return c.Z},"function"==typeof define&&n.amdO?define("pagescroll",[],(function(){return o()})):"object"===r(t)&&"object"===r(t.exports)?t.exports=i.document?o():function(t){if(!t.document)throw new Error("pagescroll.js requires a window with a document");return o()}:window.pagescroll=o()},127:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});const i=n.p+"main.css"}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={id:i,loaded:!1,exports:{}};return t[i](o,o.exports,n),o.loaded=!0,o.exports}n.amdO={},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var i=e.getElementsByTagName("script");i.length&&(t=i[i.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n(309),n(293),n(127)})();