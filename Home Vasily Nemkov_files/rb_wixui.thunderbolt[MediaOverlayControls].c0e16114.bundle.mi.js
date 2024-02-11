!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define("rb_wixui.thunderbolt[MediaOverlayControls]",["react"],t):"object"==typeof exports?exports["rb_wixui.thunderbolt[MediaOverlayControls]"]=t(require("react")):e["rb_wixui.thunderbolt[MediaOverlayControls]"]=t(e.React)}("undefined"!=typeof self?self:this,(function(e){return function(){var t={5329:function(t){"use strict";t.exports=e},448:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";a.r(o),a.d(o,{components:function(){return D}});var e=a(448),t=a.n(e),r=a(5329);const n=new RegExp("<%= compId %>","g"),l=(e,t)=>e.replace(n,t);function i(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=i(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var s=function(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a};const c=e=>Object.entries(e).reduce(((e,[t,r])=>(t.includes("data-")&&(e[t]=r),e)),{});const u=13,d=27;function p(e){return t=>{t.keyCode===e&&(t.preventDefault(),t.stopPropagation(),t.currentTarget.click())}}const b=p(32),f=p(u),v=e=>{f(e),b(e)},y=(p(d),(...e)=>e.map((e=>e?`wixui-${e}`:"")).join(" ")),m={root:"linkElement"},g=(e,a)=>{const{href:o,role:n,target:l,rel:i,className:s="",children:u,linkPopupId:d,anchorDataId:p,anchorCompId:y,tabIndex:g,dataTestId:C=m.root,title:h,onClick:x,onDoubleClick:k,onMouseEnter:M,onMouseLeave:E,onFocusCapture:O,onBlurCapture:j,"aria-live":w,"aria-disabled":S,"aria-label":_,"aria-labelledby":I,"aria-pressed":P,"aria-expanded":D,"aria-describedby":L,"aria-haspopup":N}=e,$=void 0!==e.activateByKey?e.activateByKey:(e=>e?"SpaceOrEnter":"Space")(d);let R;switch($){case"Enter":R=f;break;case"Space":R=b;break;case"SpaceOrEnter":R=v;break;default:R=void 0}return void 0!==o?r.createElement("a",t()({},c(e),{"data-testid":C,"data-popupid":d,"data-anchor":p,"data-anchor-comp-id":y,href:o||void 0,target:l,role:d?"button":n,rel:i,className:s,onKeyDown:R,"aria-live":w,"aria-disabled":S,"aria-label":_,"aria-labelledby":I,"aria-pressed":P,"aria-expanded":D,"aria-haspopup":N,"aria-describedby":L,title:h,onClick:x,onMouseEnter:M,onMouseLeave:E,onDoubleClick:k,onFocusCapture:O,onBlurCapture:j,ref:a,tabIndex:d?0:g}),u):r.createElement("div",t()({},c(e),{"data-testid":C,className:s,tabIndex:g,"aria-label":_,"aria-labelledby":I,"aria-haspopup":N,"aria-disabled":S,title:h,role:n,onClick:x,onDoubleClick:k,onMouseEnter:M,onMouseLeave:E,ref:a}),u)};var C=r.forwardRef(g);var h={root:"vector-image"},x="u9k3ts",k="WQ4fSJ",M="aizuI7",E="TcoJIb",O="elfY4_",j="R8rhQA";var w=e=>{const{id:a,svgContent:o,shouldScaleStroke:n,withShadow:i,withStroke:u,link:d,ariaLabel:p,ariaExpanded:b,ariaAttributes:f,className:v="",customClassNames:m=[],containerClass:g="",onClick:w,onDblClick:S,onMouseEnter:_,onMouseLeave:I,hasPlatformClickHandler:P,onKeyDown:D,toggle:L,reportBiOnClick:N,tag:$="div"}=e,R=P||w,B=!(!(T=d)||0===Object.keys(T).length&&T.constructor===Object);var T;const A=s(M,{[E]:!n,[O]:i,[j]:u,[k]:R},v),K=r.useRef(null);r.useEffect((()=>{let e;const t=K.current;return L&&(e=()=>L(!1),null==t||t.addEventListener("click",e)),()=>{e&&(null==t||t.removeEventListener("click",e))}}),[K,L]);const W=r.useMemo((()=>{if(!o)return o;const e=((e,t)=>{const r={},a=e.replace(/\sid="([^"<]+)"/g,((e,a)=>{const o=a.endsWith(t)?a:`${a}_${t}`;return r[a]=o,` id="${o}"`}));return Object.keys(r).reduce(((e,a)=>e.replace(new RegExp(`(${a})(?!_${t})`,"g"),r[a])),a)})(o,a),t=null!=f&&f.label?((e,t)=>{let r=e;const a=/aria-label="[^"]*"/;return r=e.match(a)?e.replace(a,`aria-label="${t}"`):e.replace(/(<svg[^>]*)>/,`$1 aria-label="${t}">`),r})(e,null==f?void 0:f.label):e;return l(t,a)}),[a,o,null==f?void 0:f.label]),q=r.createElement("div",{"data-testid":"svgRoot-"+a,className:A,dangerouslySetInnerHTML:{__html:W}}),F=(({reportBiOnClick:e,onClick:t})=>(0,r.useCallback)((r=>{e?.(r),t?.(r)}),[e,t]))({onClick:w,reportBiOnClick:N});return r.createElement($,t()({id:a},c(e),((e={})=>{const t=e.tabIndex??e.tabindex??void 0;return void 0!==t?{tabIndex:Number(t)}:{}})(e.a11y),{className:s(g,v,y(h.root,...m)),onClick:R||B?F:void 0,onDoubleClick:S,onMouseEnter:_,onMouseLeave:I,onKeyDown:D,ref:K,"aria-expanded":b}),B?r.createElement(C,t()({className:x,"aria-label":p},d),q):q)};var S=e=>r.createElement(w,t()({},e,{tag:"div"})),_="Xh82G7";const I=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase()));var P;const D={MediaOverlayControls:{component:e=>{let{id:a,vectorImageProps:o,shouldRender:n,reducedMotion:i=!1}=e;return((e,t)=>{e&&e.svgContent&&(e.svgContent=l(e.svgContent,t))})(o,a),r.createElement("div",{id:a},(n||i)&&r.createElement(S,t()({id:"play-"+a,className:_},o)))},controller:(P=e=>{let{stateValues:t,mapperProps:r}=e;const{reducedMotion:a}=t;return{...r,reducedMotion:a}},{useComponentProps:(e,t,r)=>{const a=(e=>({...e,updateStyles:t=>{const r=Object.entries(t).reduce(((e,t)=>{let[r,a]=t;return{...e,[(o=r,o.startsWith("--")?r:I(r))]:void 0===a?null:a};var o}),{});e.updateStyles(r)}}))(r);return P({mapperProps:e,stateValues:t,controllerUtils:a})}})}}}(),o}()}));
//# sourceMappingURL=https://static.parastorage.com/services/editor-elements-library/dist/thunderbolt/rb_wixui.thunderbolt[MediaOverlayControls].c0e16114.bundle.min.js.map