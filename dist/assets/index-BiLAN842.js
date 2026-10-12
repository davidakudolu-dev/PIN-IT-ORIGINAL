var Nb=Object.defineProperty;var Sb=(o,a,r)=>a in o?Nb(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r;var yn=(o,a,r)=>Sb(o,typeof a!="symbol"?a+"":a,r);(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const u of f)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function r(f){const u={};return f.integrity&&(u.integrity=f.integrity),f.referrerPolicy&&(u.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?u.credentials="include":f.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(f){if(f.ep)return;f.ep=!0;const u=r(f);fetch(f.href,u)}})();var e1={exports:{}},Uu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q2;function Ab(){if(Q2)return Uu;Q2=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function r(l,f,u){var m=null;if(u!==void 0&&(m=""+u),f.key!==void 0&&(m=""+f.key),"key"in f){u={};for(var p in f)p!=="key"&&(u[p]=f[p])}else u=f;return f=u.ref,{$$typeof:o,type:l,key:m,ref:f!==void 0?f:null,props:u}}return Uu.Fragment=a,Uu.jsx=r,Uu.jsxs=r,Uu}var K2;function _b(){return K2||(K2=1,e1.exports=Ab()),e1.exports}var q=_b(),t1={exports:{}},Lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J2;function Cb(){if(J2)return Lt;J2=1;var o=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),m=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),L=Symbol.for("react.view_transition"),w=Symbol.iterator;function F(_){return _===null||typeof _!="object"?null:(_=w&&_[w]||_["@@iterator"],typeof _=="function"?_:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,j={};function ne(_,I,$){this.props=_,this.context=I,this.refs=j,this.updater=$||U}ne.prototype.isReactComponent={},ne.prototype.setState=function(_,I){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,I,"setState")},ne.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function te(){}te.prototype=ne.prototype;function W(_,I,$){this.props=_,this.context=I,this.refs=j,this.updater=$||U}var pe=W.prototype=new te;pe.constructor=W,k(pe,ne.prototype),pe.isPureReactComponent=!0;var ke=Array.isArray;function ye(){}var oe={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function ve(_,I,$){var ae=$.ref;return{$$typeof:o,type:_,key:I,ref:ae!==void 0?ae:null,props:$}}function E(_,I){return ve(_.type,I,_.props)}function B(_){return typeof _=="object"&&_!==null&&_.$$typeof===o}function X(_){var I={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function($){return I[$]})}var Q=/\/+/g;function le(_,I){return typeof _=="object"&&_!==null&&_.key!=null?X(""+_.key):I.toString(36)}function ee(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(ye,ye):(_.status="pending",_.then(function(I){_.status==="pending"&&(_.status="fulfilled",_.value=I)},function(I){_.status==="pending"&&(_.status="rejected",_.reason=I)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function ue(_,I,$,ae,we){var Se=typeof _;(Se==="undefined"||Se==="boolean")&&(_=null);var Oe=!1;if(_===null)Oe=!0;else switch(Se){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(_.$$typeof){case o:case a:Oe=!0;break;case x:return Oe=_._init,ue(Oe(_._payload),I,$,ae,we)}}if(Oe)return we=we(_),Oe=ae===""?"."+le(_,0):ae,ke(we)?($="",Oe!=null&&($=Oe.replace(Q,"$&/")+"/"),ue(we,I,$,"",function(Qe){return Qe})):we!=null&&(B(we)&&(we=E(we,$+(we.key==null||_&&_.key===we.key?"":(""+we.key).replace(Q,"$&/")+"/")+Oe)),I.push(we)),1;Oe=0;var Ee=ae===""?".":ae+":";if(ke(_))for(var qe=0;qe<_.length;qe++)ae=_[qe],Se=Ee+le(ae,qe),Oe+=ue(ae,I,$,Se,we);else if(qe=F(_),typeof qe=="function")for(_=qe.call(_),qe=0;!(ae=_.next()).done;)ae=ae.value,Se=Ee+le(ae,qe++),Oe+=ue(ae,I,$,Se,we);else if(Se==="object"){if(typeof _.then=="function")return ue(ee(_),I,$,ae,we);throw I=String(_),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function re(_,I,$){if(_==null)return _;var ae=[],we=0;return ue(_,ae,"","",function(Se){return I.call($,Se,we++)}),ae}function Ce(_){if(_._status===-1){var I=_._result,$=I();$.then(function(ae){(_._status===0||_._status===-1)&&(_._status=1,_._result=ae,$.status===void 0&&($.status="fulfilled",$.value=ae))},function(ae){(_._status===0||_._status===-1)&&(_._status=2,_._result=ae,$.status===void 0&&($.status="rejected",$.reason=ae))}),_._status===-1&&(_._status=0,_._result=$)}if(_._status===1)return _._result.default;throw _._result}var ze=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function Be(_){var I=oe.T,$={};$.types=I!==null?I.types:null,oe.T=$;try{var ae=_(),we=oe.S;we!==null&&we($,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(ye,ze)}catch(Se){ze(Se)}finally{I!==null&&$.types!==null&&(I.types=$.types),oe.T=I}}function R(_){var I=oe.T;if(I!==null){var $=I.types;$===null?I.types=[_]:$.indexOf(_)===-1&&$.push(_)}else Be(R.bind(null,_))}var Z={map:re,forEach:function(_,I,$){re(_,function(){I.apply(this,arguments)},$)},count:function(_){var I=0;return re(_,function(){I++}),I},toArray:function(_){return re(_,function(I){return I})||[]},only:function(_){if(!B(_))throw Error("React.Children.only expected to receive a single React element child.");return _}};return Lt.Activity=A,Lt.Children=Z,Lt.Component=ne,Lt.Fragment=r,Lt.Profiler=f,Lt.PureComponent=W,Lt.StrictMode=l,Lt.Suspense=g,Lt.ViewTransition=L,Lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=oe,Lt.__COMPILER_RUNTIME={__proto__:null,c:function(_){return oe.H.useMemoCache(_)}},Lt.addTransitionType=R,Lt.cache=function(_){return function(){return _.apply(null,arguments)}},Lt.cacheSignal=function(){return null},Lt.cloneElement=function(_,I,$){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var ae=k({},_.props),we=_.key;if(I!=null)for(Se in I.key!==void 0&&(we=""+I.key),I)!K.call(I,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&I.ref===void 0||(ae[Se]=I[Se]);var Se=arguments.length-2;if(Se===1)ae.children=$;else if(1<Se){for(var Oe=Array(Se),Ee=0;Ee<Se;Ee++)Oe[Ee]=arguments[Ee+2];ae.children=Oe}return ve(_.type,we,ae)},Lt.createContext=function(_){return _={$$typeof:m,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:u,_context:_},_},Lt.createElement=function(_,I,$){var ae,we={},Se=null;if(I!=null)for(ae in I.key!==void 0&&(Se=""+I.key),I)K.call(I,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(we[ae]=I[ae]);var Oe=arguments.length-2;if(Oe===1)we.children=$;else if(1<Oe){for(var Ee=Array(Oe),qe=0;qe<Oe;qe++)Ee[qe]=arguments[qe+2];we.children=Ee}if(_&&_.defaultProps)for(ae in Oe=_.defaultProps,Oe)we[ae]===void 0&&(we[ae]=Oe[ae]);return ve(_,Se,we)},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(_){return{$$typeof:p,render:_}},Lt.isValidElement=B,Lt.lazy=function(_){return{$$typeof:x,_payload:{_status:-1,_result:_},_init:Ce}},Lt.memo=function(_,I){return{$$typeof:b,type:_,compare:I===void 0?null:I}},Lt.startTransition=Be,Lt.unstable_useCacheRefresh=function(){return oe.H.useCacheRefresh()},Lt.use=function(_){return oe.H.use(_)},Lt.useActionState=function(_,I,$){return oe.H.useActionState(_,I,$)},Lt.useCallback=function(_,I){return oe.H.useCallback(_,I)},Lt.useContext=function(_){return oe.H.useContext(_)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(_,I){return oe.H.useDeferredValue(_,I)},Lt.useEffect=function(_,I){return oe.H.useEffect(_,I)},Lt.useEffectEvent=function(_){return oe.H.useEffectEvent(_)},Lt.useId=function(){return oe.H.useId()},Lt.useImperativeHandle=function(_,I,$){return oe.H.useImperativeHandle(_,I,$)},Lt.useInsertionEffect=function(_,I){return oe.H.useInsertionEffect(_,I)},Lt.useLayoutEffect=function(_,I){return oe.H.useLayoutEffect(_,I)},Lt.useMemo=function(_,I){return oe.H.useMemo(_,I)},Lt.useOptimistic=function(_,I){return oe.H.useOptimistic(_,I)},Lt.useReducer=function(_,I,$){return oe.H.useReducer(_,I,$)},Lt.useRef=function(_){return oe.H.useRef(_)},Lt.useState=function(_){return oe.H.useState(_)},Lt.useSyncExternalStore=function(_,I,$){return oe.H.useSyncExternalStore(_,I,$)},Lt.useTransition=function(){return oe.H.useTransition()},Lt.version="19.3.0",Lt}var W2;function G1(){return W2||(W2=1,t1.exports=Cb()),t1.exports}var et=G1(),n1={exports:{}},Fu={},i1={exports:{}},a1={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $2;function Tb(){return $2||($2=1,(function(o){function a(ee,ue){var re=ee.length;ee.push(ue);e:for(;0<re;){var Ce=re-1>>>1,ze=ee[Ce];if(0<f(ze,ue))ee[Ce]=ue,ee[re]=ze,re=Ce;else break e}}function r(ee){return ee.length===0?null:ee[0]}function l(ee){if(ee.length===0)return null;var ue=ee[0],re=ee.pop();if(re!==ue){ee[0]=re;e:for(var Ce=0,ze=ee.length,Be=ze>>>1;Ce<Be;){var R=2*(Ce+1)-1,Z=ee[R],_=R+1,I=ee[_];if(0>f(Z,re))_<ze&&0>f(I,Z)?(ee[Ce]=I,ee[_]=re,Ce=_):(ee[Ce]=Z,ee[R]=re,Ce=R);else if(_<ze&&0>f(I,re))ee[Ce]=I,ee[_]=re,Ce=_;else break e}}return ue}function f(ee,ue){var re=ee.sortIndex-ue.sortIndex;return re!==0?re:ee.id-ue.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var m=Date,p=m.now();o.unstable_now=function(){return m.now()-p}}var g=[],b=[],x=1,A=null,L=3,w=!1,F=!1,U=!1,k=!1,j=typeof setTimeout=="function"?setTimeout:null,ne=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function W(ee){for(var ue=r(b);ue!==null;){if(ue.callback===null)l(b);else if(ue.startTime<=ee)l(b),ue.sortIndex=ue.expirationTime,a(g,ue);else break;ue=r(b)}}function pe(ee){if(U=!1,W(ee),!F)if(r(g)!==null)F=!0,ke||(ke=!0,B());else{var ue=r(b);ue!==null&&le(pe,ue.startTime-ee)}}var ke=!1,ye=-1,oe=5,K=-1;function ve(){return k?!0:!(o.unstable_now()-K<oe)}function E(){if(k=!1,ke){var ee=o.unstable_now();K=ee;var ue=!0;try{e:{F=!1,U&&(U=!1,ne(ye),ye=-1),w=!0;var re=L;try{t:{for(W(ee),A=r(g);A!==null&&!(A.expirationTime>ee&&ve());){var Ce=A.callback;if(typeof Ce=="function"){A.callback=null,L=A.priorityLevel;var ze=Ce(A.expirationTime<=ee);if(ee=o.unstable_now(),typeof ze=="function"){A.callback=ze,W(ee),ue=!0;break t}A===r(g)&&l(g),W(ee)}else l(g);A=r(g)}if(A!==null)ue=!0;else{var Be=r(b);Be!==null&&le(pe,Be.startTime-ee),ue=!1}}break e}finally{A=null,L=re,w=!1}ue=void 0}}finally{ue?B():ke=!1}}}var B;if(typeof te=="function")B=function(){te(E)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,Q=X.port2;X.port1.onmessage=E,B=function(){Q.postMessage(null)}}else B=function(){j(E,0)};function le(ee,ue){ye=j(function(){ee(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ee){ee.callback=null},o.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<ee?Math.floor(1e3/ee):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_next=function(ee){switch(L){case 1:case 2:case 3:var ue=3;break;default:ue=L}var re=L;L=ue;try{return ee()}finally{L=re}},o.unstable_requestPaint=function(){k=!0},o.unstable_runWithPriority=function(ee,ue){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var re=L;L=ee;try{return ue()}finally{L=re}},o.unstable_scheduleCallback=function(ee,ue,re){var Ce=o.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?Ce+re:Ce):re=Ce,ee){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=re+ze,ee={id:x++,callback:ue,priorityLevel:ee,startTime:re,expirationTime:ze,sortIndex:-1},re>Ce?(ee.sortIndex=re,a(b,ee),r(g)===null&&ee===r(b)&&(U?(ne(ye),ye=-1):U=!0,le(pe,re-Ce))):(ee.sortIndex=ze,a(g,ee),F||w||(F=!0,ke||(ke=!0,B()))),ee},o.unstable_shouldYield=ve,o.unstable_wrapCallback=function(ee){var ue=L;return function(){var re=L;L=ue;try{return ee.apply(this,arguments)}finally{L=re}}}})(a1)),a1}var e5;function Eb(){return e5||(e5=1,i1.exports=Tb()),i1.exports}var r1={exports:{}},na={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t5;function Lb(){if(t5)return na;t5=1;var o=G1();function a(x){var A="https://react.dev/errors/"+x;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var L=2;L<arguments.length;L++)A+="&args[]="+encodeURIComponent(arguments[L])}return"Minified React error #"+x+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var l={d:{f:r,r:function(){throw Error(a(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},f=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),m=Symbol.for("react.optimistic_key");function p(x,A,L){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:w==null?null:w===m?m:""+w,children:x,containerInfo:A,implementation:L}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function b(x,A){if(x==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return na.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,na.browser=function(x){return{$$typeof:u,_reason:x}},na.createPortal=function(x,A){var L=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(a(299));return p(x,A,null,L)},na.flushSync=function(x){var A=g.T,L=l.p;try{if(g.T=null,l.p=2,x)return x()}finally{g.T=A,l.p=L,l.d.f()}},na.preconnect=function(x,A){typeof x=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,l.d.C(x,A))},na.prefetchDNS=function(x){typeof x=="string"&&l.d.D(x)},na.preinit=function(x,A){if(typeof x=="string"&&A&&typeof A.as=="string"){var L=A.as,w=b(L,A.crossOrigin),F=typeof A.integrity=="string"?A.integrity:void 0,U=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;L==="style"?l.d.S(x,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:w,integrity:F,fetchPriority:U}):L==="script"&&l.d.X(x,{crossOrigin:w,integrity:F,fetchPriority:U,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},na.preinitModule=function(x,A){if(typeof x=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var L=b(A.as,A.crossOrigin);l.d.M(x,{crossOrigin:L,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0})}}else A==null&&l.d.M(x)},na.preload=function(x,A){if(typeof x=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var L=A.as,w=b(L,A.crossOrigin);l.d.L(x,L,{crossOrigin:w,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},na.preloadModule=function(x,A){if(typeof x=="string")if(A){var L=b(A.as,A.crossOrigin);l.d.m(x,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:L,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0})}else l.d.m(x)},na.requestFormReset=function(x){l.d.r(x)},na.unstable_batchedUpdates=function(x,A){return x(A)},na.useFormState=function(x,A,L){return g.H.useFormState(x,A,L)},na.useFormStatus=function(){return g.H.useHostTransitionStatus()},na.version="19.3.0",na}var n5;function Ob(){if(n5)return r1.exports;n5=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),r1.exports=Lb(),r1.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i5;function Db(){if(i5)return Fu;i5=1;var o=Eb(),a=G1(),r=Ob();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var t=e,n=t;n&&!n.alternate;)t=n,(t.flags&4098)!==0&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(l(188))}function b(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var d=s.alternate;if(d===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===d.child){for(d=s.child;d;){if(d===n)return g(s),e;if(d===i)return g(s),t;d=d.sibling}throw Error(l(188))}if(n.return!==i.return)n=s,i=d;else{for(var N=!1,O=s.child;O;){if(O===n){N=!0,n=s,i=d;break}if(O===i){N=!0,i=s,n=d;break}O=O.sibling}if(!N){for(O=d.child;O;){if(O===n){N=!0,n=d,i=s;break}if(O===i){N=!0,i=d,n=s;break}O=O.sibling}if(!N)throw Error(l(189))}}if(n.alternate!==i)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function x(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=x(e),t!==null)return t;e=e.sibling}return null}function A(e,t,n,i,s,d){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,i,s,d)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&A(e.child,t,n,i,s,d))return!0;e=e.sibling}return!1}function L(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function w(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function F(e){var t=[null,null],n=L(e);return n===null||U(t,e,n.child,{foundSelf:!1}),t}function U(e,t,n,i){for(;n!==null;){if(n===t)i.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(i.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&U(e,t,n.child,i))return!0;n=n.sibling}return!1}function k(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(l(559))}}var j=null,ne=null;function te(e,t,n){return e===n?!0:e===t?(j=e,!0):!1}function W(e,t,n){return e===n?(ne=e,!1):e===t?(ne!==null&&(j=e),!0):!1}function pe(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function ke(e,t,n){for(var i=0,s=e;s;s=n(s))i++;s=0;for(var d=t;d;d=n(d))s++;for(;0<i-s;)e=n(e),i--;for(;0<s-i;)t=n(t),s--;for(;i--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}var ye=Object.assign,oe=Symbol.for("react.element"),K=Symbol.for("react.transitional.element"),ve=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),Q=Symbol.for("react.consumer"),le=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),Be=Symbol.for("react.activity"),R=Symbol.for("react.legacy_hidden"),Z=Symbol.for("react.memo_cache_sentinel"),_=Symbol.for("react.view_transition"),I=Symbol.for("react.recoverable"),$=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function Se(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case X:return"Profiler";case B:return"StrictMode";case ue:return"Suspense";case re:return"SuspenseList";case Be:return"Activity";case _:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case ve:return"Portal";case le:return e.displayName||"Context";case Q:return(e._context.displayName||"Context")+".Consumer";case ee:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:Se(e.type)||"Memo";case ze:t=e._payload,e=e._init;try{return Se(e(t))}catch{}}return null}var Oe=Array.isArray,Ee=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,qe=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Qe={pending:!1,data:null,method:null,action:null},dt=[],V=-1;function Xe(e){return{current:e}}function pt(e){0>V||(e.current=dt[V],dt[V]=null,V--)}function Me(e,t){V++,dt[V]=e.current,e.current=t}var xe=Xe(null),Ve=Xe(null),Ie=Xe(null),Ke=Xe(null);function at(e,t){switch(Me(Ie,t),Me(Ve,e),Me(xe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?a2(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=a2(t),e=r2(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}pt(xe),Me(xe,e)}function At(){pt(xe),pt(Ve),pt(Ie)}function Bt(e){var t=e.memoizedState;t!==null&&(Pc._currentValue=t.memoizedState,Me(Ke,e)),t=xe.current;var n=r2(t,e.type);t!==n&&(Me(Ve,e),Me(xe,n))}function wt(e){Ve.current===e&&(pt(xe),pt(Ve)),Ke.current===e&&(pt(Ke),Pc._currentValue=Qe)}var Pt,Ut;function $e(e){if(Pt===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pt=t&&t[1]||"",Ut=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pt+e+Ut}var Nt=!1;function ht(e,t){if(!e||Nt)return"";Nt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var Ue=function(){throw Error()};if(Object.defineProperty(Ue.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ue,[])}catch(Je){var de=Je}Reflect.construct(e,[],Ue)}else{try{Ue.call()}catch(Je){de=Je}Ue=!1;try{var _e=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ue=!0,new e}finally{Ue&&(_e!==void 0?Object.defineProperty(e.prototype,"props",_e):delete e.prototype.props)}}}else{try{throw Error()}catch(Je){de=Je}(Ue=e())&&typeof Ue.catch=="function"&&Ue.catch(function(){})}}catch(Je){if(Je&&de&&typeof Je.stack=="string")return[Je.stack,de.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=i.DetermineComponentFrameRoot(),N=d[0],O=d[1];if(N&&O){var J=N.split(`
`),me=O.split(`
`);for(s=i=0;i<J.length&&!J[i].includes("DetermineComponentFrameRoot");)i++;for(;s<me.length&&!me[s].includes("DetermineComponentFrameRoot");)s++;if(i===J.length||s===me.length)for(i=J.length-1,s=me.length-1;1<=i&&0<=s&&J[i]!==me[s];)s--;for(;1<=i&&0<=s;i--,s--)if(J[i]!==me[s]){if(i!==1||s!==1)do if(i--,s--,0>s||J[i]!==me[s]){var Le=`
`+J[i].replace(" at new "," at ");return e.displayName&&Le.includes("<anonymous>")&&(Le=Le.replace("<anonymous>",e.displayName)),Le}while(1<=i&&0<=s);break}}}finally{Nt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?$e(n):""}function Vn(e,t){switch(e.tag){case 26:case 27:case 5:return $e(e.type);case 16:return $e("Lazy");case 13:return e.child!==t&&t!==null?$e("Suspense Fallback"):$e("Suspense");case 19:return $e("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return $e("Activity");case 30:return $e("ViewTransition");default:return""}}function Qt(e){try{var t="",n=null;do t+=Vn(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Rt=Object.prototype.hasOwnProperty,jt=o.unstable_scheduleCallback,wn=o.unstable_cancelCallback,bt=o.unstable_shouldYield,Nn=o.unstable_requestPaint,ft=o.unstable_now,Ot=o.unstable_getCurrentPriorityLevel,Cn=o.unstable_ImmediatePriority,Ft=o.unstable_UserBlockingPriority,yt=o.unstable_NormalPriority,en=o.unstable_LowPriority,lo=o.unstable_IdlePriority,Di=o.log,kr=o.unstable_setDisableYieldValue,ia=null,lt=null;function ki(e){if(typeof Di=="function"&&kr(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(ia,e)}catch{}}var Gn=Math.clz32?Math.clz32:qn,Aa=Math.log,_a=Math.LN2;function qn(e){return e>>>=0,e===0?32:31-(Aa(e)/_a|0)|0}var Yn=256,Wn=262144,sr=4194304;function aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ra(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,d=e.suspendedLanes,N=e.pingedLanes;e=e.warmLanes;var O=i&134217727;return O!==0?(i=O&~d,i!==0?s=aa(i):(N&=O,N!==0?s=aa(N):n||(n=O&~e,n!==0&&(s=aa(n))))):(O=i&~d,O!==0?s=aa(O):N!==0?s=aa(N):n||(n=i&~e,n!==0&&(s=aa(n)))),s===0?0:t!==0&&t!==s&&(t&d)===0&&(d=s&-s,n=t&-t,d>=n||d===32&&(n&4194048)!==0)?t:s}function oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ca(e,t){(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Gn(n),s=1<<i;t|=e[i],n&=~s}return t}function Ha(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function va(){var e=sr;return sr<<=1,(sr&62914560)===0&&(sr=4194304),e}function Mr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bo(e,t,n,i,s,d){var N=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var O=e.entanglements,J=e.expirationTimes,me=e.hiddenUpdates;for(n=N&~n;0<n;){var Le=31-Gn(n),Ue=1<<Le;O[Le]=0,J[Le]=-1;var de=me[Le];if(de!==null)for(me[Le]=null,Le=0;Le<de.length;Le++){var _e=de[Le];_e!==null&&(_e.lane&=-536870913)}n&=~Ue}i!==0&&Po(e,i,0),d!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=d&~(N&~t))}function Po(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Gn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Uo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Gn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Fo(e,t){var n=t&-t;return n=(n&42)!==0?1:fs(n),(n&(e.suspendedLanes|t))!==0?0:n}function fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qo(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ds(){var e=qe.p;return e!==0?e:(e=window.event,e===void 0?32:I2(e.type))}function hs(e,t){var n=qe.p;try{return qe.p=e,t()}finally{qe.p=n}}var $n=Math.random().toString(36).slice(2),Xn="__reactFiber$"+$n,Ai="__reactProps$"+$n,cr="__reactContainer$"+$n,ps="__reactEvents$"+$n,Ys="__reactListeners$"+$n,Xs="__reactHandles$"+$n,Va="__reactResources$"+$n,ur="__reactMarker$"+$n,xl="__reactLoad$"+$n;function zn(e){delete e[Xn],delete e[Ai],delete e[Ys],delete e[Xs]}function fr(e){var t;if(t=e[Xn])return t;for(var n=e.parentNode;n;){if(t=n[cr]||n[Xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=N2(e);e!==null;){if(n=e[Xn])return n;e=N2(e)}return t}e=n,n=e.parentNode}return null}function Vi(e){if(e=e[Xn]||e[cr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function dr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function hr(e){var t=e[Va];return t||(t=e[Va]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[ur]=!0}function Io(e){e[xl]=void 0}var pr=new Set,gi={};function gr(e,t){so(e,t),so(e+"Capture",t)}function so(e,t){for(gi[e]=t,e=0;e<t.length;e++)pr.add(t[e])}var eu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zs={},Ga={};function Qs(e){return Rt.call(Ga,e)?!0:Rt.call(Zs,e)?!1:eu.test(e)?Ga[e]=!0:(Zs[e]=!0,!1)}var Ht=!1;function Ho(){var e=Ht;return Ht=!1,e}function co(e,t,n){if(Qs(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,n)}}function wl(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,n)}}function Ya(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,i)}}function Gi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ks(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,d=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(N){n=""+N,d.call(this,N)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(N){n=""+N},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mr(e){if(!e._valueTracker){var t=Rr(e)?"checked":"value";e._valueTracker=Ks(e,t,""+e[t])}}function Js(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Rr(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}var Vo=/[\n"\\]/g;function gt(e){return e.replace(Vo,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gs(e,t,n,i,s,d,N,O){e.name="",N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.type=N:e.removeAttribute("type"),t!=null?N==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Gi(t)):e.value!==""+Gi(t)&&(e.value=""+Gi(t)):N!=="submit"&&N!=="reset"||e.removeAttribute("value"),t!=null?N==="number"&&e.value==t?ms(e,Gi(e.value)):ms(e,Gi(t)):n!=null?ms(e,Gi(n)):i!=null&&e.removeAttribute("value"),s==null&&d!=null&&(e.defaultChecked=!!d),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),O!=null&&typeof O!="function"&&typeof O!="symbol"&&typeof O!="boolean"?e.name=""+Gi(O):e.removeAttribute("name")}function Ws(e,t,n,i,s,d,N,O){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),t!=null||n!=null){if(!(d!=="submit"&&d!=="reset"||t!=null)){mr(e);return}n=n!=null?""+Gi(n):"",t=t!=null?""+Gi(t):n,O||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=O?e.checked:!!i,e.defaultChecked=!!i,N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"&&(e.name=N),mr(e)}function ms(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function uo(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Gi(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function $s(e,t,n){if(t!=null&&(t=""+Gi(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Gi(n):""}function vr(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(l(92));if(Oe(i)){if(1<i.length)throw Error(l(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Gi(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),mr(e)}function sa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var tu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ec(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||tu.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Go(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="",Ht=!0);for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&(ec(e,s,i),Ht=!0)}else for(var d in t)t.hasOwnProperty(d)&&ec(e,d,t[d])}function Yo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var br=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jr(e){return nu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ta(){}var Xo=null;function yr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Ea=null;function Nl(e){var t=Vi(e);if(t&&(e=t.stateNode)){var n=e[Ai]||null;e:switch(e=t.stateNode,t.type){case"input":if(gs(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[Ai]||null;if(!s)throw Error(l(90));gs(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Js(i)}break e;case"textarea":$s(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&uo(e,!!n.multiple,t,!1)}}}var fo=!1;function Sl(e,t,n){if(fo)return e(t,n);fo=!0;try{var i=e(t);return i}finally{if(fo=!1,(xr!==null||Ea!==null)&&(Lf(),xr&&(t=xr,e=Ea,Ea=xr=null,Nl(t),e)))for(t=0;t<e.length;t++)Nl(e[t])}}function wr(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ai]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var La=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xa=!1;if(La)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Xa=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Xa=!1}var Za=null,Al=null,Zo=null;function ho(){if(Zo)return Zo;var e,t=Al,n=t.length,i,s="value"in Za?Za.value:Za.textContent,d=s.length;for(e=0;e<n&&t[e]===s[e];e++);var N=n-e;for(i=1;i<=N&&t[n-i]===s[d-i];i++);return Zo=s.slice(e,1<i?1-i:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function v(){return!0}function C(){return!1}function H(e){function t(n,i,s,d,N){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=d,this.target=N,this.currentTarget=null;for(var O in e)e.hasOwnProperty(O)&&(n=e[O],this[O]=n?n(d):d[O]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?v:C,this.isPropagationStopped=C,this}return ye(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=v)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=v)},persist:function(){},isPersistent:v}),t}var ie={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},he=H(ie),Re=ye({},ie,{view:0,detail:0}),He=H(Re),rt,it,xt,_t=ye({},Re,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(rt=e.screenX-xt.screenX,it=e.screenY-xt.screenY):it=rt=0,xt=e),rt)},movementY:function(e){return"movementY"in e?e.movementY:it}}),Vt=H(_t),ei=ye({},_t,{dataTransfer:0}),un=H(ei),ln=ye({},Re,{relatedTarget:0}),fn=H(ln),Bn=ye({},ie,{animationName:0,elapsedTime:0,pseudoElement:0}),Pn=H(Bn),Mi=ye({},ie,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),zr=H(Mi),vs=ye({},ie,{data:0}),po=H(vs),Ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},go={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jo={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _l(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jo[e])?!!t[e]:!1}function mo(){return _l}var Ri=ye({},Re,{key:function(e){if(e.key){var t=Ko[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?go[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wo=H(Ri),$o=ye({},_t,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=H($o),Nr=ye({},ie,{submitter:0}),Yi=H(Nr),tc=ye({},Re,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),Tl=H(tc),nc=ye({},ie,{propertyName:0,elapsedTime:0,pseudoElement:0}),Oa=H(nc),el=ye({},_t,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bs=H(el),El=ye({},ie,{newState:0,oldState:0,source:0}),tl=H(El),ys=[9,13,27,32],_i=La&&"CompositionEvent"in window,mi=null;La&&"documentMode"in document&&(mi=document.documentMode);var Ll=La&&"TextEvent"in window&&!mi,Br=La&&(!_i||mi&&8<mi&&11>=mi),Pr=" ",nl=!1;function vo(e,t){switch(e){case"keyup":return ys.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zn(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var bo=!1;function Sr(e,t){switch(e){case"compositionend":return Zn(t);case"keypress":return t.which!==32?null:(nl=!0,Pr);case"textInput":return e=t.data,e===Pr&&nl?null:e;default:return null}}function Qa(e,t){if(bo)return e==="compositionend"||!_i&&vo(e,t)?(e=ho(),Zo=Al=Za=null,bo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Br&&t.locale!=="ko"?null:t.data;default:return null}}var il={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ol(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!il[e.type]:t==="textarea"}function Dl(e,t,n,i){xr?Ea?Ea.push(i):Ea=[i]:xr=i,t=jf(t,"onChange"),0<t.length&&(n=new he("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Ar=null,Ka=null;function al(e){W0(e,0)}function Ja(e){var t=dr(e);if(Js(t))return e}function _r(e,t){if(e==="change")return t}var Ur=!1;if(La){var yo;if(La){var vi="oninput"in document;if(!vi){var Wa=document.createElement("div");Wa.setAttribute("oninput","return;"),vi=typeof Wa.oninput=="function"}yo=vi}else yo=!1;Ur=yo&&(!document.documentMode||9<document.documentMode)}function dn(){Ar&&(Ar.detachEvent("onpropertychange",hn),Ka=Ar=null)}function hn(e){if(e.propertyName==="value"&&Ja(Ka)){var t=[];Dl(t,Ka,e,yr(e)),Sl(al,t)}}function Qn(e,t,n){e==="focusin"?(dn(),Ar=t,Ka=n,Ar.attachEvent("onpropertychange",hn)):e==="focusout"&&dn()}function li(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ja(Ka)}function Fr(e,t){if(e==="click")return Ja(t)}function xs(e,t){if(e==="input"||e==="change")return Ja(t)}function kl(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ji=typeof Object.is=="function"?Object.is:kl;function Ml(e,t){if(ji(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Rt.call(t,s)||!ji(e[s],t[s]))return!1}return!0}function ic(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function iu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var n=iu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=iu(n)}}function Rl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ru(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ic(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ic(e.document)}return t}function ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Qu=La&&"documentMode"in document&&11>=document.documentMode,rl=null,rc=null,jl=null,oc=!1;function ou(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oc||rl==null||rl!==ic(i)||(i=rl,"selectionStart"in i&&ac(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),jl&&Ml(jl,i)||(jl=i,i=jf(rc,"onSelect"),0<i.length&&(t=new he("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=rl)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ir={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionrun:qr("Transition","TransitionRun"),transitionstart:qr("Transition","TransitionStart"),transitioncancel:qr("Transition","TransitionCancel"),transitionend:qr("Transition","TransitionEnd")},Xi={},ya={};La&&(ya=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Cr(e){if(Xi[e])return Xi[e];if(!Ir[e])return e;var t=Ir[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ya)return Xi[e]=t[n];return e}var ws=Cr("animationend"),lu=Cr("animationiteration"),Ns=Cr("animationstart"),lc=Cr("transitionrun"),su=Cr("transitionstart"),Ku=Cr("transitioncancel"),sc=Cr("transitionend"),cc=new Map,zl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zl.push("scrollEnd");function xa(e,t){cc.set(e,t),gr(t,[e])}var Nd=0;function Hr(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=to.identifierPrefix;var n=Nd++;return e="_"+e+"t_"+n.toString(32)+"_",t.autoName=e}function cu(e){if(e==null||typeof e=="string")return e;var t=null,n=Ec;if(n!==null)for(var i=0;i<n.length;i++){var s=e[n[i]];if(s!=null){if(s==="none")return"none";t=t==null?s:t+(" "+s)}}return t??e.default}function Vr(e,t){return e=cu(e),t=cu(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Da=[],Bl=0,uu=0;function Pl(){for(var e=Bl,t=uu=Bl=0;t<e;){var n=Da[t];Da[t++]=null;var i=Da[t];Da[t++]=null;var s=Da[t];Da[t++]=null;var d=Da[t];if(Da[t++]=null,i!==null&&s!==null){var N=i.pending;N===null?s.next=s:(s.next=N.next,N.next=s),i.pending=s}d!==0&&Ju(n,s,d)}}function Ul(e,t,n,i){Da[Bl++]=e,Da[Bl++]=t,Da[Bl++]=n,Da[Bl++]=i,uu|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ol(e,t,n,i){return Ul(e,t,n,i),Ss(e)}function ll(e,t){return Ul(e,null,null,t),Ss(e)}function Ju(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,d=e.return;d!==null;)d.childLanes|=n,i=d.alternate,i!==null&&(i.childLanes|=n),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(s=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,s&&t!==null&&(s=31-Gn(n),e=d.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),d):null}function Ss(e){if(50<Tu)throw Tu=0,Ef=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Fl={};function Sd(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ca(e,t,n,i){return new Sd(e,t,n,i)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,t){var n=e.alternate;return n===null?(n=ca(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ka(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ma(e,t,n,i,s,d){var N=0;if(i=e,typeof i=="function")fu(i)&&(N=1);else if(typeof i=="string")N=cb(e,n,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(i){case Be:return e=ca(31,n,t,s),e.elementType=Be,e.lanes=d,e;case E:return sl(n.children,s,d,t);case B:N=8,s|=24;break;case X:return e=ca(12,n,t,s|2),e.elementType=X,e.lanes=d,e;case ue:return e=ca(13,n,t,s),e.elementType=ue,e.lanes=d,e;case re:return e=ca(19,n,t,s),e.elementType=re,e.lanes=d,e;case R:case _:return e=s|32,e=ca(30,n,t,e),e.elementType=_,e.lanes=d,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case le:N=10;break e;case Q:N=9;break e;case ee:N=11;break e;case Ce:N=14;break e;case ze:N=16,i=null;break e}N=29,n=Error(l(130,e===null?"null":typeof e,"")),i=null}return t=ca(N,n,t,s),t.elementType=e,t.type=i,t.lanes=d,t}function sl(e,t,n,i){return e=ca(7,e,i,t),e.lanes=n,e}function fc(e,t,n){return e=ca(6,e,null,t),e.lanes=n,e}function Gr(e){var t=ca(18,null,null,0);return t.stateNode=e,t}function ua(e,t,n){return t=ca(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wu=new WeakMap;function Ra(e,t){if(typeof e=="object"&&e!==null){var n=Wu.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Qt(t)},Wu.set(e,t),t)}return{value:e,source:t,stack:Qt(t)}}var cl=[],ul=0,As=null,ql=0,ja=[],Zi=0,$a=null,fa=1,za="";function Yr(e,t){cl[ul++]=ql,cl[ul++]=As,As=e,ql=t}function du(e,t,n){ja[Zi++]=fa,ja[Zi++]=za,ja[Zi++]=$a,$a=e;var i=fa;e=za;var s=32-Gn(i)-1;i&=~(1<<s),n+=1;var d=32-Gn(t)+s;if(30<d){var N=s-s%5;d=(i&(1<<N)-1).toString(32),i>>=N,s-=N,fa=1<<32-Gn(t)+s|n<<s|i,za=d+e}else fa=1<<d|n<<s|i,za=e}function dc(e){e.return!==null&&(Yr(e,1),du(e,1,0))}function hu(e){for(;e===As;)As=cl[--ul],cl[ul]=null,ql=cl[--ul],cl[ul]=null;for(;e===$a;)$a=ja[--Zi],ja[Zi]=null,za=ja[--Zi],ja[Zi]=null,fa=ja[--Zi],ja[Zi]=null}function $u(e,t){ja[Zi++]=fa,ja[Zi++]=za,ja[Zi++]=$a,fa=t.id,za=t.overflow,$a=e}var bi=null,Sn=null,qt=!1,Xr=null,Qi=!1,pu=Error(l(519));function xo(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw T(Ra(t,e)),pu}function gu(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Xn]=e,t[Ai]=i,n){case"dialog":Zt("cancel",t),Zt("close",t);break;case"iframe":case"object":case"embed":Zt("load",t);break;case"video":case"audio":for(n=0;n<Lu.length;n++)Zt(Lu[n],t);break;case"source":Zt("error",t);break;case"img":case"image":case"link":Zt("error",t),Zt("load",t);break;case"details":Zt("toggle",t);break;case"input":Zt("invalid",t),Ws(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Zt("invalid",t);break;case"textarea":Zt("invalid",t),vr(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||n2(t.textContent,n)?(i.popover!=null&&(Zt("beforetoggle",t),Zt("toggle",t)),i.onScroll!=null&&Zt("scroll",t),i.onScrollEnd!=null&&Zt("scrollend",t),i.onClick!=null&&(t.onclick=Ta),t=!0):t=!1,t||xo(e,!0)}function c(e){for(bi=e.return;bi;)switch(bi.tag){case 5:case 31:case 13:Qi=!1;return;case 27:case 3:Qi=!0;return;default:bi=bi.return}}function h(e){if(e!==bi)return!1;if(!qt)return c(e),qt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rh(e.type,e.memoizedProps)),n=!n),n&&Sn&&xo(e),c(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Sn=w2(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Sn=w2(e)}else t===27?(t=Sn,ts(e.type)?(e=Hh,Hh=null,Sn=e):Sn=t):Sn=bi?Lr(e.stateNode.nextSibling):null;return!0}function y(){Sn=bi=null,qt=!1}function S(){var e=Xr;return e!==null&&(Fa===null?Fa=e:Fa.push.apply(Fa,e),Xr=null),e}function T(e){Xr===null?Xr=[e]:Xr.push(e)}var D=Xe(null),M=null,z=null;function P(e,t,n){Me(D,t._currentValue),t._currentValue=n}function G(e){e._currentValue=D.current,pt(D)}function ce(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Te(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var d=s.dependencies;if(d!==null){var N=s.child;d=d.firstContext;e:for(;d!==null;){var O=d;d=s;for(var J=0;J<t.length;J++)if(O.context===t[J]){d.lanes|=n,O=d.alternate,O!==null&&(O.lanes|=n),ce(d.return,n,e),i||(N=null);break e}d=O.next}}else if(s.tag===18){if(N=s.return,N===null)throw Error(l(341));N.lanes|=n,d=N.alternate,d!==null&&(d.lanes|=n),ce(N,n,e),N=null}else s.tag===13&&s.memoizedState!==null&&s.memoizedState.dehydrated===null?(s.lanes|=n,N=s.alternate,N!==null&&(N.lanes|=n),ce(s.return,n,e),N=s.child,N=N!==null?N.sibling:null):N=s.child;if(N!==null)N.return=s;else for(N=s;N!==null;){if(N===e){N=null;break}if(s=N.sibling,s!==null){s.return=N.return,N=s;break}N=N.return}s=N}}function Y(e,t,n,i){e=null;for(var s=t,d=!1;s!==null;){if(!d){if((s.flags&524288)!==0)d=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var N=s.alternate;if(N===null)throw Error(l(387));if(N=N.memoizedProps,N!==null){var O=s.type;ji(s.pendingProps.value,N.value)||(e!==null?e.push(O):e=[O])}}else if(s===Ke.current){if(N=s.alternate,N===null)throw Error(l(387));N.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(Pc):e=[Pc])}s=s.return}return e!==null&&Te(t,e,n,i),t.flags|=262144,e!==null}function fe(e){for(e=e.firstContext;e!==null;){if(!ji(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function be(e){M=e,z=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function De(e){return je(M,e)}function Ae(e,t){return M===null&&be(e),je(e,t)}function je(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},z===null){if(e===null)throw Error(l(308));z=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else z=z.next=t;return n}var Fe=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Ye=o.unstable_scheduleCallback,Ge=o.unstable_NormalPriority,We={$$typeof:le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tt(){return{controller:new Fe,data:new Map,refCount:0}}function Ct(e){e.refCount--,e.refCount===0&&Ye(Ge,function(){e.controller.abort()})}function st(e,t){if((e.pendingLanes&4194048)!==0){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var i=t[e];n.indexOf(i)===-1&&n.push(i)}}}var It=null;function si(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var Tt=null,ot=0,Ze=0,An=null;function Dt(e,t){if(Tt===null){var n=Tt=[];ot=0,Ze=_h(),An={status:"pending",value:void 0,then:function(i){n.push(i)}}}return ot++,t.then(Gt,Gt),t}function Gt(){if(--ot===0&&(It=null,Tt!==null)){An!==null&&(An.status="fulfilled");var e=Tt;Tt=null,Ze=0,An=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Tn(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var yi=Ee.S;Ee.S=function(e,t){if(D0=ft(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dt(e,t),It!==null)for(var n=kc;n!==null;)st(n,It),n=n.next;if(n=e.types,n!==null){for(var i=kc;i!==null;)st(i,n),i=i.next;if(Ze!==0){i=It,i===null&&(i=It=[]);for(var s=0;s<n.length;s++){var d=n[s];i.indexOf(d)===-1&&i.push(d)}}}yi!==null&&yi(e,t)};var Kn=Xe(null);function Dn(){var e=Kn.current;return e!==null?e:Ln.pooledCache}function ci(e,t){t===null?Me(Kn,Kn.current):Me(Kn,t.pool)}function Bi(){var e=Dn();return e===null?null:{parent:We._currentValue,pool:e}}var kn=Error(l(460)),Yt=Error(l(474)),Wt=Error(l(542)),En={then:function(){}};function nn(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xi(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ta,Ta),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sn(e),e===void 0&&!("reason"in t)?Error(l(600)):e;default:if(typeof t.status=="string")t.then(Ta,Ta);else{if(e=Ln,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,sn(e),e}throw pn=t,kn}}function Ci(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(pn=n,kn):n}}var pn=null;function Ki(){if(pn===null)throw Error(l(459));var e=pn;return pn=null,e}function sn(e){if(e===kn||e===Wt)throw Error(l(483))}var Mn=null,Ti=0;function wi(e){var t=Ti;return Ti+=1,Mn===null&&(Mn=[]),xi(Mn,e,t)}function ti(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Pi(e,t){throw t.$$typeof===oe?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ji(e){function t(ge,se){if(e){var Ne=ge.deletions;Ne===null?(ge.deletions=[se],ge.flags|=16):Ne.push(se)}}function n(ge,se){if(!e)return null;for(;se!==null;)t(ge,se),se=se.sibling;return null}function i(ge){for(var se=new Map;ge!==null;)ge.key===null?se.set(ge.index,ge):se.set(ge.key,ge),ge=ge.sibling;return se}function s(ge,se){return ge=zi(ge,se),ge.index=0,ge.sibling=null,ge}function d(ge,se,Ne){return ge.index=Ne,e?(Ne=ge.alternate,Ne!==null?(Ne=Ne.index,Ne<se?(ge.flags|=2,se):Ne):(ge.flags|=134217730,se)):(ge.flags|=1048576,se)}function N(ge){return e&&ge.alternate===null&&(ge.flags|=134217730),ge}function O(ge,se,Ne,Pe){return se===null||se.tag!==6?(se=fc(Ne,ge.mode,Pe),se.return=ge,se):(se=s(se,Ne),se.return=ge,se)}function J(ge,se,Ne,Pe){var nt=Ne.type;return nt===E?(ge=Le(ge,se,Ne.props.children,Pe,Ne.key),ti(ge,Ne),ge):se!==null&&(se.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ze&&Ci(nt)===se.type)?(se=s(se,Ne.props),ti(se,Ne),se.return=ge,se):(se=Ma(Ne.type,Ne.key,Ne.props,null,ge.mode,Pe),ti(se,Ne),se.return=ge,se)}function me(ge,se,Ne,Pe){return se===null||se.tag!==4||se.stateNode.containerInfo!==Ne.containerInfo||se.stateNode.implementation!==Ne.implementation?(se=ua(Ne,ge.mode,Pe),se.return=ge,se):(se=s(se,Ne.children||[]),se.return=ge,se)}function Le(ge,se,Ne,Pe,nt){return se===null||se.tag!==7?(se=sl(Ne,ge.mode,Pe,nt),se.return=ge,se):(se=s(se,Ne),se.return=ge,se)}function Ue(ge,se,Ne){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return se=fc(""+se,ge.mode,Ne),se.return=ge,se;if(typeof se=="object"&&se!==null){switch(se.$$typeof){case K:return Ne=Ma(se.type,se.key,se.props,null,ge.mode,Ne),ti(Ne,se),Ne.return=ge,Ne;case ve:return se=ua(se,ge.mode,Ne),se.return=ge,se;case ze:return se=Ci(se),Ue(ge,se,Ne)}if(Oe(se)||ae(se))return se=sl(se,ge.mode,Ne,null),se.return=ge,se;if(typeof se.then=="function")return Ue(ge,wi(se),Ne);if(se.$$typeof===le)return Ue(ge,Ae(ge,se),Ne);Pi(ge,se)}return null}function de(ge,se,Ne,Pe){var nt=se!==null?se.key:null;if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number"||typeof Ne=="bigint")return nt!==null?null:O(ge,se,""+Ne,Pe);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case K:return Ne.key===nt?J(ge,se,Ne,Pe):null;case ve:return Ne.key===nt?me(ge,se,Ne,Pe):null;case ze:return Ne=Ci(Ne),de(ge,se,Ne,Pe)}if(Oe(Ne)||ae(Ne))return nt!==null?null:Le(ge,se,Ne,Pe,null);if(typeof Ne.then=="function")return de(ge,se,wi(Ne),Pe);if(Ne.$$typeof===le)return de(ge,se,Ae(ge,Ne),Pe);Pi(ge,Ne)}return null}function _e(ge,se,Ne,Pe,nt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number"||typeof Pe=="bigint")return ge=ge.get(Ne)||null,O(se,ge,""+Pe,nt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case K:return ge=ge.get(Pe.key===null?Ne:Pe.key)||null,J(se,ge,Pe,nt);case ve:return ge=ge.get(Pe.key===null?Ne:Pe.key)||null,me(se,ge,Pe,nt);case ze:return Pe=Ci(Pe),_e(ge,se,Ne,Pe,nt)}if(Oe(Pe)||ae(Pe))return ge=ge.get(Ne)||null,Le(se,ge,Pe,nt,null);if(typeof Pe.then=="function")return _e(ge,se,Ne,wi(Pe),nt);if(Pe.$$typeof===le)return _e(ge,se,Ne,Ae(se,Pe),nt);Pi(se,Pe)}return null}function Je(ge,se,Ne,Pe){for(var nt=null,Jt=null,vt=se,St=se=0,Si=null;vt!==null&&St<Ne.length;St++){vt.index>St?(Si=vt,vt=null):Si=vt.sibling;var $t=de(ge,vt,Ne[St],Pe);if($t===null){vt===null&&(vt=Si);break}e&&vt&&$t.alternate===null&&t(ge,vt),se=d($t,se,St),Jt===null?nt=$t:Jt.sibling=$t,Jt=$t,vt=Si}if(St===Ne.length)return n(ge,vt),qt&&Yr(ge,St),nt;if(vt===null){for(;St<Ne.length;St++)vt=Ue(ge,Ne[St],Pe),vt!==null&&(se=d(vt,se,St),Jt===null?nt=vt:Jt.sibling=vt,Jt=vt);return qt&&Yr(ge,St),nt}for(vt=i(vt);St<Ne.length;St++)Si=_e(vt,ge,St,Ne[St],Pe),Si!==null&&(e&&($t=Si.alternate,$t!==null&&vt.delete($t.key===null?St:$t.key)),se=d(Si,se,St),Jt===null?nt=Si:Jt.sibling=Si,Jt=Si);return e&&vt.forEach(function(os){return t(ge,os)}),qt&&Yr(ge,St),nt}function ct(ge,se,Ne,Pe){if(Ne==null)throw Error(l(151));for(var nt=null,Jt=null,vt=se,St=se=0,Si=null,$t=Ne.next();vt!==null&&!$t.done;St++,$t=Ne.next()){vt.index>St?(Si=vt,vt=null):Si=vt.sibling;var os=de(ge,vt,$t.value,Pe);if(os===null){vt===null&&(vt=Si);break}e&&vt&&os.alternate===null&&t(ge,vt),se=d(os,se,St),Jt===null?nt=os:Jt.sibling=os,Jt=os,vt=Si}if($t.done)return n(ge,vt),qt&&Yr(ge,St),nt;if(vt===null){for(;!$t.done;St++,$t=Ne.next())$t=Ue(ge,$t.value,Pe),$t!==null&&(se=d($t,se,St),Jt===null?nt=$t:Jt.sibling=$t,Jt=$t);return qt&&Yr(ge,St),nt}for(vt=i(vt);!$t.done;St++,$t=Ne.next())$t=_e(vt,ge,St,$t.value,Pe),$t!==null&&(e&&(Si=$t.alternate,Si!==null&&vt.delete(Si.key===null?St:Si.key)),se=d($t,se,St),Jt===null?nt=$t:Jt.sibling=$t,Jt=$t);return e&&vt.forEach(function(wb){return t(ge,wb)}),qt&&Yr(ge,St),nt}function zt(ge,se,Ne,Pe){if(typeof Ne=="object"&&Ne!==null&&Ne.type===E&&Ne.key===null&&Ne.props.ref===void 0&&(Ne=Ne.props.children),typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case K:e:{for(var nt=Ne.key;se!==null;){if(se.key===nt){if(nt=Ne.type,nt===E){if(se.tag===7){n(ge,se.sibling),Pe=s(se,Ne.props.children),ti(Pe,Ne),Pe.return=ge,ge=Pe;break e}}else if(se.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ze&&Ci(nt)===se.type){n(ge,se.sibling),Pe=s(se,Ne.props),ti(Pe,Ne),Pe.return=ge,ge=Pe;break e}n(ge,se);break}else t(ge,se);se=se.sibling}Ne.type===E?(Pe=sl(Ne.props.children,ge.mode,Pe,Ne.key),ti(Pe,Ne),Pe.return=ge,ge=Pe):(Pe=Ma(Ne.type,Ne.key,Ne.props,null,ge.mode,Pe),ti(Pe,Ne),Pe.return=ge,ge=Pe)}return N(ge);case ve:e:{for(nt=Ne.key;se!==null;){if(se.key===nt)if(se.tag===4&&se.stateNode.containerInfo===Ne.containerInfo&&se.stateNode.implementation===Ne.implementation){n(ge,se.sibling),Pe=s(se,Ne.children||[]),Pe.return=ge,ge=Pe;break e}else{n(ge,se);break}else t(ge,se);se=se.sibling}Pe=ua(Ne,ge.mode,Pe),Pe.return=ge,ge=Pe}return N(ge);case ze:return Ne=Ci(Ne),zt(ge,se,Ne,Pe)}if(Oe(Ne))return Je(ge,se,Ne,Pe);if(ae(Ne)){if(nt=ae(Ne),typeof nt!="function")throw Error(l(150));return Ne=nt.call(Ne),ct(ge,se,Ne,Pe)}if(typeof Ne.then=="function")return zt(ge,se,wi(Ne),Pe);if(Ne.$$typeof===le)return zt(ge,se,Ae(ge,Ne),Pe);Pi(ge,Ne)}return typeof Ne=="string"&&Ne!==""||typeof Ne=="number"||typeof Ne=="bigint"?(Ne=""+Ne,se!==null&&se.tag===6?(n(ge,se.sibling),Pe=s(se,Ne),Pe.return=ge,ge=Pe):(n(ge,se),Pe=fc(Ne,ge.mode,Pe),Pe.return=ge,ge=Pe),N(ge)):n(ge,se)}return function(ge,se,Ne,Pe){try{Ti=0;var nt=zt(ge,se,Ne,Pe);return Mn=null,nt}catch(vt){if(vt===kn||vt===Wt)throw vt;var Jt=ca(29,vt,null,ge.mode);return Jt.lanes=Pe,Jt.return=ge,Jt}finally{}}}var ui=Ji(!0),gn=Ji(!1),ni=!1;function wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zr(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ui(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(rn&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=Ss(e),Ju(e,null,n),t}return Ul(e,i,t,n),Ss(e)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Uo(e,n)}}function _s(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,d=null;if(n=n.firstBaseUpdate,n!==null){do{var N={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};d===null?s=d=N:d=d.next=N,n=n.next}while(n!==null);d===null?s=d=t:d=d.next=t}else s=d=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:d,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Il=!1;function Qr(){if(Il){var e=An;if(e!==null)throw e}}function Cs(e,t,n,i){Il=!1;var s=e.updateQueue;ni=!1;var d=s.firstBaseUpdate,N=s.lastBaseUpdate,O=s.shared.pending;if(O!==null){s.shared.pending=null;var J=O,me=J.next;J.next=null,N===null?d=me:N.next=me,N=J;var Le=e.alternate;Le!==null&&(Le=Le.updateQueue,O=Le.lastBaseUpdate,O!==N&&(O===null?Le.firstBaseUpdate=me:O.next=me,Le.lastBaseUpdate=J))}if(d!==null){var Ue=s.baseState;N=0,Le=me=J=null,O=d;do{var de=O.lane&-536870913,_e=de!==O.lane;if(_e?(Kt&de)===de:(i&de)===de){de!==0&&de===Ze&&(Il=!0),Le!==null&&(Le=Le.next={lane:0,tag:O.tag,payload:O.payload,callback:null,next:null});e:{var Je=e,ct=O;de=t;var zt=n;switch(ct.tag){case 1:if(Je=ct.payload,typeof Je=="function"){Ue=Je.call(zt,Ue,de);break e}Ue=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=ct.payload,de=typeof Je=="function"?Je.call(zt,Ue,de):Je,de==null)break e;Ue=ye({},Ue,de);break e;case 2:ni=!0}}de=O.callback,de!==null&&(e.flags|=64,_e&&(e.flags|=8192),_e=s.callbacks,_e===null?s.callbacks=[de]:_e.push(de))}else _e={lane:de,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Le===null?(me=Le=_e,J=Ue):Le=Le.next=_e,N|=de;if(O=O.next,O===null){if(O=s.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,s.lastBaseUpdate=_e,s.shared.pending=null}}while(!0);Le===null&&(J=Ue),s.baseState=J,s.firstBaseUpdate=me,s.lastBaseUpdate=Le,d===null&&(s.shared.lanes=0),Jl|=N,e.lanes=N,e.memoizedState=Ue}}function ef(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function hc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ef(n[e],t)}var Wi=Xe(null),pc=Xe(0);function tf(e,t){e=ml,Me(pc,e),Me(Wi,t),ml=e|t.baseLanes}function mu(){Me(pc,ml),Me(Wi,Wi.current)}function gc(){ml=pc.current,pt(Wi),pt(pc)}var ii=Xe(null),Ei=null;function Kr(e){var t=e.alternate;Me(Li,Li.current&1),Me(ii,e),Ei===null&&(t===null||Wi.current!==null||t.memoizedState!==null)&&(Ei=e)}function Hl(e){Me(Li,Li.current),Me(ii,e),Ei===null&&(Ei=e)}function mc(e){e.tag===22?(Me(Li,Li.current),Me(ii,e),Ei===null&&(Ei=e)):Ba()}function Ba(){Me(Li,Li.current),Me(ii,ii.current)}function da(e){pt(ii),Ei===e&&(Ei=null),pt(Li)}var Li=Xe(0);function No(e,t){Me(ii,ii.current),Me(Li,t)}function vc(e){pt(Li),pt(ii),Ei===e&&(Ei=null)}function Vl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qh(n)||Ih(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fi=0,kt=null,an=null,ai=null,Ts=!1,er=!1,fl=!1,Es=0,Ls=0,dl=null,Ad=0;function _n(){throw Error(l(321))}function Os(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ji(e[n],t[n]))return!1;return!0}function Gl(e,t,n,i,s,d){return Fi=d,kt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ee.H=e===null||e.memoizedState===null?Mp:Rp,fl=!1,d=n(i,s),fl=!1,er&&(d=Jr(t,n,i,s)),Tr(e),d}function Tr(e){Ee.H=sf;var t=an!==null&&an.next!==null;if(Fi=0,ai=an=kt=null,Ts=!1,Ls=0,dl=null,t)throw Error(l(300));e===null||Ni||(e=e.dependencies,e!==null&&fe(e)&&(Ni=!0))}function Jr(e,t,n,i){kt=e;var s=0;do{if(er&&(dl=null),Ls=0,er=!1,25<=s)throw Error(l(301));if(s+=1,ai=an=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}Ee.H=Km,d=t(n,i)}while(er);return d}function So(){var e=Ee.H,t=e.useState()[0];return t=typeof t.then=="function"?vu(t):t,e=e.useState()[0],(an!==null?an.memoizedState:null)!==e&&(kt.flags|=1024),t}function Yl(){var e=Es!==0;return Es=0,e}function Ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function bc(e){if(Ts){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ts=!1}Fi=0,ai=an=kt=null,er=!1,Ls=Es=0,dl=null}function $i(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ai===null?kt.memoizedState=ai=e:ai=ai.next=e,ai}function Un(){if(an===null){var e=kt.alternate;e=e!==null?e.memoizedState:null}else e=an.next;var t=ai===null?kt.memoizedState:ai.next;if(t!==null)ai=t,an=e;else{if(e===null)throw kt.alternate===null?Error(l(467)):Error(l(310));an=e,e={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},ai===null?kt.memoizedState=ai=e:ai=ai.next=e}return ai}function Xl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vu(e){var t=Ls;return Ls+=1,dl===null&&(dl=[]),e=xi(dl,e,t),t=kt,(ai===null?t.memoizedState:ai.next)===null&&(t=t.alternate,Ee.H=t===null||t.memoizedState===null?Mp:Rp),e}function nf(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return vu(e);if(e.$$typeof===I)return;if(e.$$typeof===le)return De(e)}throw Error(l(438,String(e)))}function _d(e){var t=null,n=kt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=kt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Xl(),kt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Z;return t.index++,n}function hl(e,t){return typeof t=="function"?t(e):t}function af(e){var t=Un();return Cd(t,an,e)}function Cd(e,t,n){var i=e.queue;if(i===null)throw Error(l(311));i.lastRenderedReducer=n;var s=e.baseQueue,d=i.pending;if(d!==null){if(s!==null){var N=s.next;s.next=d.next,d.next=N}t.baseQueue=s=d,i.pending=null}if(d=e.baseState,s===null)e.memoizedState=d;else{t=s.next;var O=N=null,J=null,me=t,Le=!1;do{var Ue=me.lane&-536870913;if(Ue!==me.lane?(Kt&Ue)===Ue:(Fi&Ue)===Ue){var de=me.revertLane;if(de===0)J!==null&&(J=J.next={lane:0,revertLane:0,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),Ue===Ze&&(Le=!0);else if((Fi&de)===de){me=me.next,de===Ze&&(Le=!0);continue}else Ue={lane:0,revertLane:me.revertLane,gesture:null,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},J===null?(O=J=Ue,N=d):J=J.next=Ue,kt.lanes|=de,Jl|=de;Ue=me.action,fl&&n(d,Ue),d=me.hasEagerState?me.eagerState:n(d,Ue)}else de={lane:Ue,revertLane:me.revertLane,gesture:me.gesture,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null},J===null?(O=J=de,N=d):J=J.next=de,kt.lanes|=Ue,Jl|=Ue;me=me.next}while(me!==null&&me!==t);if(J===null?N=d:J.next=O,!ji(d,e.memoizedState)&&(Ni=!0,Le&&(n=An,n!==null)))throw n;e.memoizedState=d,e.baseState=N,e.baseQueue=J,i.lastRenderedState=d}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Td(e){var t=Un(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,d=t.memoizedState;if(s!==null){n.pending=null;var N=s=s.next;do d=e(d,N.action),N=N.next;while(N!==s);ji(d,t.memoizedState)||(Ni=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),n.lastRenderedState=d}return[d,i]}function $1(e,t,n){var i=kt,s=Un(),d=qt;if(d){if(n===void 0)throw Error(l(407));n=n()}else n=t();var N=!ji((an||s).memoizedState,n);if(N&&(s.memoizedState=n,Ni=!0),s=s.queue,Od(np.bind(null,i,s,e),[e]),e=s.getSnapshot!==t||N||ai!==null&&(ai.memoizedState.tag&1)!==0,yc(e?9:8,{destroy:void 0},tp.bind(null,i,s,n,t),null),e){if(i.flags|=2048,Ln===null)throw Error(l(349));d||(Fi&127)!==0||ep(i,t,n)}return n}function ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=kt.updateQueue,t===null?(t=Xl(),kt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function tp(e,t,n,i){t.value=n,t.getSnapshot=i,ip(t)&&ap(e)}function np(e,t,n){return n(function(){ip(t)&&ap(e)})}function ip(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ji(e,n)}catch{return!0}}function ap(e){var t=ll(e,2);t!==null&&qa(t,e,2)}function Ed(e){var t=$i();if(typeof e=="function"){var n=e;if(e=n(),fl){ki(!0);try{n()}finally{ki(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:e},t}function rp(e,t,n,i){return e.baseState=n,Cd(e,an,typeof i=="function"?i:hl)}function Vm(e,t,n,i,s){if(lf(e))throw Error(l(485));if(e=t.action,e!==null){var d={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(N){d.listeners.push(N)}};Ee.T!==null?n(!0):d.isTransition=!1,i(d),n=t.pending,n===null?(d.next=t.pending=d,op(t,d)):(d.next=n.next,t.pending=n.next=d)}}function op(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var d=Ee.T,N={};N.types=d!==null?d.types:null,Ee.T=N;try{var O=n(s,i),J=Ee.S;J!==null&&J(N,O),lp(e,t,O)}catch(me){Ld(e,t,me)}finally{d!==null&&N.types!==null&&(d.types=N.types),Ee.T=d}}else try{d=n(s,i),lp(e,t,d)}catch(me){Ld(e,t,me)}}function lp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){sp(e,t,i)},function(i){return Ld(e,t,i)}):sp(e,t,n)}function sp(e,t,n){t.status="fulfilled",t.value=n,cp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,op(e,n)))}function Ld(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,cp(t),t=t.next;while(t!==i)}e.action=null}function cp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function up(e,t){return t}function fp(e,t){if(qt){var n=Ln.formState;if(n!==null){e:{var i=kt;if(qt){if(Sn){t:{for(var s=Sn,d=Qi;s.nodeType!==8;){if(!d){s=null;break t}if(s=Lr(s.nextSibling),s===null){s=null;break t}}d=s.data,s=d==="F!"||d==="F"?s:null}if(s){Sn=Lr(s.nextSibling),i=s.data==="F!";break e}}xo(i)}i=!1}i&&(t=n[0])}}return n=$i(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:up,lastRenderedState:t},n.queue=i,n=Op.bind(null,kt,i),i.dispatch=n,i=Ed(!1),d=jd.bind(null,kt,!1,i.queue),i=$i(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=Vm.bind(null,kt,s,d,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function dp(e){var t=Un();return hp(t,an,e)}function hp(e,t,n){if(t=Cd(e,t,up)[0],e=af(hl)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=vu(t)}catch(N){throw N===kn?Wt:N}else i=t;t=Un();var s=t.queue,d=s.dispatch;return n!==t.memoizedState&&(kt.flags|=2048,yc(9,{destroy:void 0},Gm.bind(null,s,n),null)),[i,d,e]}function Gm(e,t){e.action=t}function pp(e){var t=Un(),n=an;if(n!==null)return hp(t,n,e);Un(),t=t.memoizedState,n=Un();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function yc(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=kt.updateQueue,t===null&&(t=Xl(),kt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function gp(){return Un().memoizedState}function rf(e,t,n,i){var s=$i();kt.flags|=e,s.memoizedState=yc(1|t,{destroy:void 0},n,i===void 0?null:i)}function of(e,t,n,i){var s=Un();i=i===void 0?null:i;var d=s.memoizedState.inst;an!==null&&i!==null&&Os(i,an.memoizedState.deps)?s.memoizedState=yc(t,d,n,i):(kt.flags|=e,s.memoizedState=yc(1|t,d,n,i))}function mp(e,t){rf(8390656,8,e,t)}function Od(e,t){of(2048,8,e,t)}function Ym(e){kt.flags|=4;var t=kt.updateQueue;if(t===null)t=Xl(),kt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function vp(e){var t=Un().memoizedState;return Ym({ref:t,nextImpl:e}),function(){if((rn&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function bp(e,t){return of(4,2,e,t)}function yp(e,t){return of(4,4,e,t)}function xp(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wp(e,t,n){n=n!=null?n.concat([e]):null,of(4,4,xp.bind(null,t,e),n)}function Dd(){}function Np(e,t){var n=Un();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Os(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sp(e,t){var n=Un();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Os(t,i[1]))return i[0];if(i=e(),fl){ki(!0);try{e()}finally{ki(!1)}}return n.memoizedState=[i,t],i}function kd(e,t,n){return n===void 0||(Fi&1073741824)!==0&&(Kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=M0(),kt.lanes|=e,Jl|=e,n)}function Ap(e,t,n,i){return ji(n,t)?n:Wi.current!==null?(e=kd(e,n,i),ji(e,t)||(Ni=!0),e):(Fi&106)===0||(Fi&1073741824)!==0&&(Kt&261930)===0?(Ni=!0,e.memoizedState=n):(e=M0(),kt.lanes|=e,Jl|=e,t)}function _p(e,t,n,i,s){var d=qe.p;qe.p=d!==0&&8>d?d:8;var N=Ee.T,O={};O.types=N!==null?N.types:null,Ee.T=O,jd(e,!1,t,n);try{var J=s(),me=Ee.S;if(me!==null&&me(O,J),J!==null&&typeof J=="object"&&typeof J.then=="function"){var Le=Tn(J,i);bu(e,t,Le,ar(e))}else bu(e,t,i,ar(e))}catch(Ue){bu(e,t,{then:function(){},status:"rejected",reason:Ue},ar())}finally{qe.p=d,N!==null&&O.types!==null&&(N.types=O.types),Ee.T=N}}function Xm(){}function Md(e,t,n,i){if(e.tag!==5)throw Error(l(476));var s=Cp(e).queue;_p(e,s,t,Qe,n===null?Xm:function(){return Tp(e),n(i)})}function Cp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Qe,baseState:Qe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:Qe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Tp(e){var t=Cp(e);t.next===null&&(t=e.alternate.memoizedState),bu(e,t.next.queue,{},ar())}function Rd(){return De(Pc)}function Ep(){return Un().memoizedState}function Lp(){return Un().memoizedState}function Zm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ar();e=Ui(n);var i=Rn(t,e,n);i!==null&&(qa(i,t,n),wo(i,t,n)),t={cache:tt()},e.payload=t;return}t=t.return}}function Qm(e,t,n){var i=ar();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},lf(e)?Dp(t,n):(n=ol(e,t,n,i),n!==null&&(qa(n,e,i),kp(n,t,i)))}function Op(e,t,n){var i=ar();bu(e,t,n,i)}function bu(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(lf(e))Dp(t,s);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var N=t.lastRenderedState,O=d(N,n);if(s.hasEagerState=!0,s.eagerState=O,ji(O,N))return Ul(e,t,s,0),Ln===null&&Pl(),!1}catch{}finally{}if(n=ol(e,t,s,i),n!==null)return qa(n,e,i),kp(n,t,i),!0}return!1}function jd(e,t,n,i){if(i={lane:2,revertLane:_h(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},lf(e)){if(t)throw Error(l(479))}else t=ol(e,n,i,2),t!==null&&qa(t,e,2)}function lf(e){var t=e.alternate;return e===kt||t!==null&&t===kt}function Dp(e,t){er=Ts=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function kp(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Uo(e,n)}}var sf={readContext:De,use:nf,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useLayoutEffect:_n,useInsertionEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useSyncExternalStore:_n,useId:_n,useHostTransitionStatus:_n,useFormState:_n,useActionState:_n,useOptimistic:_n,useMemoCache:_n,useCacheRefresh:_n,useEffectEvent:_n},Mp={readContext:De,use:nf,useCallback:function(e,t){return $i().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:mp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,rf(4194308,4,xp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return rf(4194308,4,e,t)},useInsertionEffect:function(e,t){rf(4,2,e,t)},useMemo:function(e,t){var n=$i();t=t===void 0?null:t;var i=e();if(fl){ki(!0);try{e()}finally{ki(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=$i();if(n!==void 0){var s=n(t);if(fl){ki(!0);try{n(t)}finally{ki(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=Qm.bind(null,kt,e),[i.memoizedState,e]},useRef:function(e){var t=$i();return e={current:e},t.memoizedState=e},useState:function(e){e=Ed(e);var t=e.queue,n=Op.bind(null,kt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Dd,useDeferredValue:function(e,t){var n=$i();return kd(n,e,t)},useTransition:function(){var e=Ed(!1);return e=_p.bind(null,kt,e.queue,!0,!1),$i().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=kt,s=$i();if(qt){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ln===null)throw Error(l(349));(Kt&127)!==0||ep(i,t,n)}s.memoizedState=n;var d={value:n,getSnapshot:t};return s.queue=d,mp(np.bind(null,i,d,e),[e]),i.flags|=2048,yc(9,{destroy:void 0},tp.bind(null,i,d,n,t),null),n},useId:function(){var e=$i(),t=Ln.identifierPrefix;if(qt){var n=za,i=fa;n=(i&~(1<<32-Gn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Es++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Ad++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Rd,useFormState:fp,useActionState:fp,useOptimistic:function(e){var t=$i();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=jd.bind(null,kt,!0,n),n.dispatch=t,[e,t]},useMemoCache:_d,useCacheRefresh:function(){return $i().memoizedState=Zm.bind(null,kt)},useEffectEvent:function(e){var t=$i(),n={impl:e};return t.memoizedState=n,function(){if((rn&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},Rp={readContext:De,use:nf,useCallback:Np,useContext:De,useEffect:Od,useImperativeHandle:wp,useInsertionEffect:bp,useLayoutEffect:yp,useMemo:Sp,useReducer:af,useRef:gp,useState:function(){return af(hl)},useDebugValue:Dd,useDeferredValue:function(e,t){var n=Un();return Ap(n,an.memoizedState,e,t)},useTransition:function(){var e=af(hl)[0],t=Un().memoizedState;return[typeof e=="boolean"?e:vu(e),t]},useSyncExternalStore:$1,useId:Ep,useHostTransitionStatus:Rd,useFormState:dp,useActionState:dp,useOptimistic:function(e,t){var n=Un();return rp(n,an,e,t)},useMemoCache:_d,useCacheRefresh:Lp,useEffectEvent:vp},Km={readContext:De,use:nf,useCallback:Np,useContext:De,useEffect:Od,useImperativeHandle:wp,useInsertionEffect:bp,useLayoutEffect:yp,useMemo:Sp,useReducer:Td,useRef:gp,useState:function(){return Td(hl)},useDebugValue:Dd,useDeferredValue:function(e,t){var n=Un();return an===null?kd(n,e,t):Ap(n,an.memoizedState,e,t)},useTransition:function(){var e=Td(hl)[0],t=Un().memoizedState;return[typeof e=="boolean"?e:vu(e),t]},useSyncExternalStore:$1,useId:Ep,useHostTransitionStatus:Rd,useFormState:pp,useActionState:pp,useOptimistic:function(e,t){var n=Un();return an!==null?rp(n,an,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:_d,useCacheRefresh:Lp,useEffectEvent:vp};function zd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:ye({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=ar(),s=Ui(i);s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(qa(t,e,i),wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=ar(),s=Ui(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Rn(e,s,i),t!==null&&(qa(t,e,i),wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ar(),i=Ui(n);i.tag=2,t!=null&&(i.callback=t),t=Rn(e,i,n),t!==null&&(qa(t,e,n),wo(t,e,n))}};function jp(e,t,n,i,s,d,N){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,d,N):t.prototype&&t.prototype.isPureReactComponent?!Ml(n,i)||!Ml(s,d):!0}function zp(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Bd.enqueueReplaceState(t,t.state,null)}function ks(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=ye({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function Bp(e){uc(e)}function Pp(e){console.error(e)}function Up(e){uc(e)}function cf(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Fp(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function Pd(e,t,n){return n=Ui(n),n.tag=3,n.payload={element:null},n.callback=function(){cf(e,t)},n}function qp(e){return e=Ui(e),e.tag=3,e}function Ip(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var d=i.value;e.payload=function(){return s(d)},e.callback=function(){Fp(t,n,i)}}var N=n.stateNode;N!==null&&typeof N.componentDidCatch=="function"&&(e.callback=function(){Fp(t,n,i),typeof s!="function"&&(Wl===null?Wl=new Set([this]):Wl.add(this));var O=i.stack;this.componentDidCatch(i.value,{componentStack:O!==null?O:""})})}function Jm(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Y(t,n,s,!0),n=ii.current,n!==null){switch(n.tag){case 31:case 13:case 19:return Ei===null?Of():n.alternate===null&&ri===0&&(ri=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===En?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Nh(e,i,s)),!1;case 22:return n.flags|=65536,i===En?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Nh(e,i,s)),!1}throw Error(l(435,n.tag))}return Nh(e,i,s),Of(),!1}if(qt)return t=ii.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==pu&&(e=Error(l(422),{cause:i}),T(Ra(e,n)))):(i!==pu&&(t=Error(l(423),{cause:i}),T(Ra(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=Ra(i,n),s=Pd(e.stateNode,i,s),_s(e,s),ri!==4&&(ri=2)),!1;var d=Error(l(520),{cause:i});if(d=Ra(d,n),Cu===null?Cu=[d]:Cu.push(d),ri!==4&&(ri=2),t===null)return!0;i=Ra(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=Pd(n.stateNode,i,e),_s(n,e),!1;case 1:if(t=n.type,d=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Wl===null||!Wl.has(d))))return n.flags|=65536,s&=-s,n.lanes|=s,s=qp(s),Ip(s,e,n,i),_s(n,s),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Ud=Error(l(461)),Ni=!1;function Oi(e,t,n,i){t.child=e===null?gn(t,null,n,i):ui(t,e.child,n,i)}function Hp(e,t,n,i,s){n=n.render;var d=t.ref;if("ref"in i){var N={};for(var O in i)O!=="ref"&&(N[O]=i[O])}else N=i;return be(t),i=Gl(e,t,n,N,d,s),O=Yl(),e!==null&&!Ni?(Ds(e,t,s),pl(e,t,s)):(qt&&O&&dc(t),t.flags|=1,Oi(e,t,i,s),t.child)}function Vp(e,t,n,i,s){if(e===null){var d=n.type;return typeof d=="function"&&!fu(d)&&d.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=d,Gp(e,t,d,i,s)):(e=Ma(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,!Xd(e,s)){var N=d.memoizedProps;if(n=n.compare,n=n!==null?n:Ml,n(N,i)&&e.ref===t.ref)return pl(e,t,s)}return t.flags|=1,e=zi(d,i),e.ref=t.ref,e.return=t,t.child=e}function Gp(e,t,n,i,s){if(e!==null){var d=e.memoizedProps;if(Ml(d,i)&&e.ref===t.ref)if(Ni=!1,t.pendingProps=i=d,Xd(e,s))(e.flags&131072)!==0&&(Ni=!0);else return t.lanes=e.lanes,pl(e,t,s)}return Fd(e,t,n,i,s)}function Yp(e,t,n,i){var s=i.children,d=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(d=d!==null?d.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~d}else i=0,t.child=null;return Xp(e,t,d,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,d!==null?d.cachePool:null),d!==null?tf(t,d):mu(),mc(t);else return i=t.lanes=536870912,Xp(e,t,d!==null?d.baseLanes|n:n,n,i)}else d!==null?(ci(t,d.cachePool),tf(t,d),Ba(),t.memoizedState=null):(e!==null&&ci(t,null),mu(),Ba());return Oi(e,t,s,n),t.child}function yu(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Xp(e,t,n,i,s){var d=Dn();return d=d===null?null:{parent:We._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&ci(t,null),mu(),mc(t),e!==null&&Y(e,t,i,!0),t.childLanes=s,null}function uf(e,t){return t=ff({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Zp(e,t,n){return ui(t,e.child,null,n),e=uf(t,t.pendingProps),e.flags|=2,da(t),t.memoizedState=null,e}function Wm(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(qt){if(i.mode==="hidden")return e=uf(t,i),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},yu(null,e);if(Hl(t),(e=Sn)?(e=x2(e,Qi),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$a!==null?{id:fa,overflow:za}:null,retryLane:536870912,hydrationErrors:null},n=Gr(e),n.return=t,t.child=n,bi=t,Sn=null)):e=null,e===null)throw xo(t);return t.lanes=536870912,null}return uf(t,i)}var d=e.memoizedState;if(d!==null){var N=d.dehydrated;if(Hl(t),s)if(t.flags&256)t.flags&=-257,t=Zp(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Ni||Y(e,t,n,!1),s=(n&e.childLanes)!==0,Ni||s){if(Wi.current===null){if(i=Ln,i!==null&&(N=Fo(i,n),N!==0&&N!==d.retryLane))throw d.retryLane=N,ll(e,N),qa(i,e,N),Ud;Of()}t=Zp(e,t,n)}else e=d.treeContext,Sn=Lr(N.nextSibling),bi=t,qt=!0,Xr=null,Qi=!1,e!==null&&$u(t,e),t=uf(t,i),t.flags|=134221824;return t}return e=zi(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function xc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Fd(e,t,n,i,s){return be(t),n=Gl(e,t,n,i,void 0,s),i=Yl(),e!==null&&!Ni?(Ds(e,t,s),pl(e,t,s)):(qt&&i&&dc(t),t.flags|=1,Oi(e,t,n,s),t.child)}function Qp(e,t,n,i,s,d){return be(t),t.updateQueue=null,n=Jr(t,i,n,s),Tr(e),i=Yl(),e!==null&&!Ni?(Ds(e,t,d),pl(e,t,d)):(qt&&i&&dc(t),t.flags|=1,Oi(e,t,n,d),t.child)}function Kp(e,t,n,i,s){if(be(t),t.stateNode===null){var d=Fl,N=n.contextType;typeof N=="object"&&N!==null&&(d=De(N)),d=new n(i,d),t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Bd,t.stateNode=d,d._reactInternals=t,d=t.stateNode,d.props=i,d.state=t.memoizedState,d.refs={},wa(t),N=n.contextType,d.context=typeof N=="object"&&N!==null?De(N):Fl,d.state=t.memoizedState,N=n.getDerivedStateFromProps,typeof N=="function"&&(zd(t,n,N,i),d.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(N=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),N!==d.state&&Bd.enqueueReplaceState(d,d.state,null),Cs(t,i,d,s),Qr(),d.state=t.memoizedState),typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){d=t.stateNode;var O=t.memoizedProps,J=ks(n,O);d.props=J;var me=d.context,Le=n.contextType;N=Fl,typeof Le=="object"&&Le!==null&&(N=De(Le));var Ue=n.getDerivedStateFromProps;Le=typeof Ue=="function"||typeof d.getSnapshotBeforeUpdate=="function",O=t.pendingProps!==O,Le||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(O||me!==N)&&zp(t,d,i,N),ni=!1;var de=t.memoizedState;d.state=de,Cs(t,i,d,s),Qr(),me=t.memoizedState,O||de!==me||ni?(typeof Ue=="function"&&(zd(t,n,Ue,i),me=t.memoizedState),(J=ni||jp(t,n,J,i,de,me,N))?(Le||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=me),d.props=i,d.state=me,d.context=N,i=J):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{d=t.stateNode,Zr(e,t),N=t.memoizedProps,Le=ks(n,N),d.props=Le,Ue=t.pendingProps,de=d.context,me=n.contextType,J=Fl,typeof me=="object"&&me!==null&&(J=De(me)),O=n.getDerivedStateFromProps,(me=typeof O=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N!==Ue||de!==J)&&zp(t,d,i,J),ni=!1,de=t.memoizedState,d.state=de,Cs(t,i,d,s),Qr();var _e=t.memoizedState;N!==Ue||de!==_e||ni||e!==null&&e.dependencies!==null&&fe(e.dependencies)?(typeof O=="function"&&(zd(t,n,O,i),_e=t.memoizedState),(Le=ni||jp(t,n,Le,i,de,_e,J)||e!==null&&e.dependencies!==null&&fe(e.dependencies))?(me||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(i,_e,J),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(i,_e,J)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||N===e.memoizedProps&&de===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||N===e.memoizedProps&&de===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=_e),d.props=i,d.state=_e,d.context=J,i=Le):(typeof d.componentDidUpdate!="function"||N===e.memoizedProps&&de===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||N===e.memoizedProps&&de===e.memoizedState||(t.flags|=1024),i=!1)}return d=i,xc(e,t),i=(t.flags&128)!==0,d||i?(d=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:d.render(),t.flags|=1,e!==null&&i?(t.child=ui(t,e.child,null,s),t.child=ui(t,null,n,s)):Oi(e,t,n,s),t.memoizedState=d.state,e=t.child):e=pl(e,t,s),e}function Jp(e,t,n,i){return y(),t.flags|=256,Oi(e,t,n,i),t.child}var qd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Id(e){return{baseLanes:e,cachePool:Bi()}}function Hd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ir),e}function Wp(e,t,n){var i=t.pendingProps,s=!1,d=(t.flags&128)!==0,N;if((N=d)||(N=e!==null&&e.memoizedState===null?!1:(Li.current&2)!==0),N&&(s=!0,t.flags&=-129),N=(t.flags&32)!==0,t.flags&=-33,e===null){if(qt){if(s?Kr(t):Ba(),(e=Sn)?(e=x2(e,Qi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$a!==null?{id:fa,overflow:za}:null,retryLane:536870912,hydrationErrors:null},n=Gr(e),n.return=t,t.child=n,bi=t,Sn=null)):e=null,e===null)throw xo(t);return Ih(e)?t.lanes=32:t.lanes=536870912,null}return d=i.children,i=i.fallback,s?(Ba(),s=t.mode,d=ff({mode:"hidden",children:d},s),i=sl(i,s,n,null),d.return=t,i.return=t,d.sibling=i,t.child=d,i=t.child,i.memoizedState=Id(n),i.childLanes=Hd(e,N,n),t.memoizedState=qd,yu(null,i)):(Kr(t),Vd(t,d))}var O=e.memoizedState;if(O!==null){var J=O.dehydrated;if(J!==null)return $m(e,t,d,N,i,J,O,n)}return s?(Ba(),s=i.fallback,d=t.mode,O=e.child,J=O.sibling,i=zi(O,{mode:"hidden",children:i.children}),i.subtreeFlags=O.subtreeFlags&1206910976,J!==null?s=zi(J,s):(s=sl(s,d,n,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,yu(null,i),i=t.child,s=e.child.memoizedState,s===null?s=Id(n):(d=s.cachePool,d!==null?(O=We._currentValue,d=d.parent!==O?{parent:O,pool:O}:d):d=Bi(),s={baseLanes:s.baseLanes|n,cachePool:d}),i.memoizedState=s,i.childLanes=Hd(e,N,n),t.memoizedState=qd,yu(e.child,i)):(Kr(t),n=e.child,e=n.sibling,n=zi(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(N=t.deletions,N===null?(t.deletions=[e],t.flags|=16):N.push(e)),t.child=n,t.memoizedState=null,n)}function Vd(e,t){return t=ff({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ff(e,t){return e=ca(22,e,null,t),e.lanes=0,e}function df(e,t,n){return ui(t,e.child,null,n),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function $m(e,t,n,i,s,d,N,O){if(n)return t.flags&256?(Kr(t),t.flags&=-257,df(e,t,O)):t.memoizedState!==null?(Ba(),t.child=e.child,t.flags|=128,null):(Ba(),d=s.fallback,N=t.mode,s=ff({mode:"visible",children:s.children},N),d=sl(d,N,O,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,ui(t,e.child,null,O),s=t.child,s.memoizedState=Id(O),s.childLanes=Hd(e,i,O),t.memoizedState=qd,yu(null,s));if(Kr(t),Ih(d)){if(i=d.nextSibling&&d.nextSibling.dataset,i)var J=i.dgst;return i=J,i!==""&&(s=Error(l(419)),s.stack="",s.digest=i,T({value:s,source:null,stack:null})),df(e,t,O)}if(Ni||Y(e,t,O,!1),i=(O&e.childLanes)!==0,Ni||i){if(Wi.current!==null)return df(e,t,O);if(i=Ln,i!==null&&(s=Fo(i,O),s!==0&&s!==N.retryLane))throw N.retryLane=s,ll(e,s),qa(i,e,s),Ud;return qh(d)||Of(),df(e,t,O)}return qh(d)?(t.flags|=192,t.child=e.child,null):(e=N.treeContext,Sn=Lr(d.nextSibling),bi=t,qt=!0,Xr=null,Qi=!1,e!==null&&$u(t,e),t=Vd(t,s.children),t.flags|=134221824,t)}function $p(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),ce(e.return,t,n)}function e0(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Vl(n)===null&&(t=e),e=e.sibling}return t}function hf(e,t,n,i,s,d){var N=e.memoizedState;N===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:d}:(N.isBackwards=t,N.rendering=null,N.renderingStartTime=0,N.last=i,N.tail=n,N.tailMode=s,N.treeForkCount=d)}function Gd(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Yd(e,t,n){var i=t.pendingProps,s=i.revealOrder,d=i.tail;i=i.children;var N=Li.current;if(t.flags&128)return No(t,N),null;var O=(N&2)!==0;if(O?(N=N&1|2,t.flags|=128):N&=1,No(t,N),s==="backwards"&&e!==null?(Gd(e),Oi(e,t,i,n),Gd(e)):Oi(e,t,i,n),i=qt?ql:0,!O&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$p(e,n,t);else if(e.tag===19)$p(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"backwards":n=e0(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null,Gd(t)),hf(t,!0,s,null,d,i);break;case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Vl(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}hf(t,!0,n,null,d,i);break;case"together":hf(t,!1,null,null,void 0,i);break;case"independent":t.memoizedState=null;break;default:n=e0(t.child),n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),hf(t,!1,s,n,d,i)}return t.child}function t0(e,t,n){var i=t.pendingProps;return P(t,t.type,i.value),Oi(e,t,i.children,n),t.child}function pl(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Y(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=zi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=zi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&fe(e)))}function ev(e,t,n){switch(t.tag){case 3:at(t,t.stateNode.containerInfo),P(t,We,e.memoizedState.cache),y();break;case 27:case 5:Bt(t);break;case 4:at(t,t.stateNode.containerInfo);break;case 10:P(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hl(t),null;break;case 13:var i=t.memoizedState;if(i!==null){if(i.dehydrated!==null)return Kr(t),t.flags|=128,null;i=Y(e,t,n,!1);var s=t.child.childLanes;return i||(n&s)!==0?Wp(e,t,n):(Kr(t),e=pl(e,t,n),e!==null?e.sibling:null)}Kr(t);break;case 19:if(t.flags&128)return Yd(e,t,n);if(s=(e.flags&128)!==0,i=(n&t.childLanes)!==0,i||(Y(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return Yd(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),No(t,Li.current),i)break;return null;case 22:return t.lanes=0,Yp(e,t,n,t.pendingProps);case 24:P(t,We,e.memoizedState.cache)}return pl(e,t,n)}function n0(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ni=!0;else{if(!Xd(e,n)&&(t.flags&128)===0)return Ni=!1,ev(e,t,n);Ni=(e.flags&131072)!==0}else Ni=!1,qt&&(t.flags&1048576)!==0&&du(t,ql,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=Ci(t.elementType),t.type=e,typeof e=="function")fu(e)?(i=ks(e,i),t.tag=1,t=Kp(null,t,e,i,n)):(t.tag=0,t=Fd(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===ee){t.tag=11,t=Hp(null,t,e,i,n);break e}else if(s===Ce){t.tag=14,t=Vp(null,t,e,i,n);break e}else if(s===le){t.tag=10,t.type=e,t=t0(null,t,n);break e}}throw t=Se(e)||e,Error(l(306,t,""))}}return t;case 0:return Fd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=ks(i,t.pendingProps),Kp(e,t,i,s,n);case 3:e:{if(at(t,t.stateNode.containerInfo),e===null)throw Error(l(387));i=t.pendingProps;var d=t.memoizedState;s=d.element,Zr(e,t),Cs(t,i,null,n);var N=t.memoizedState;if(i=N.cache,P(t,We,i),i!==d.cache&&Te(t,[We],n,!0),Qr(),i=N.element,d.isDehydrated)if(d={element:i,isDehydrated:!1,cache:N.cache},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){t=Jp(e,t,i,n);break e}else if(i!==s){s=Ra(Error(l(424)),t),T(s),t=Jp(e,t,i,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Sn=Lr(e.firstChild),bi=t,qt=!0,Xr=null,Qi=!0,n=gn(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(y(),i===s){t=pl(e,t,n);break e}Oi(e,t,i,n)}t=t.child}return t;case 26:return xc(e,t),e===null?(n=T2(t.type,null,t.pendingProps,null))?t.memoizedState=n:qt||(t.stateNode=o2(t.type,t.pendingProps,Ie.current,t)):t.memoizedState=T2(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Bt(t),e===null&&qt&&(i=t.stateNode=S2(t.type,t.pendingProps,Ie.current),bi=t,Qi=!0,s=Sn,ts(t.type)?(Hh=s,Sn=Lr(i.firstChild)):Sn=s),Oi(e,t,t.pendingProps.children,n),xc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&qt&&((s=i=Sn)&&(i=Zv(i,t.type,t.pendingProps,Qi),i!==null?(t.stateNode=i,bi=t,Sn=Lr(i.firstChild),Qi=!1,s=!0):s=!1),s||xo(t)),Bt(t),s=t.type,d=t.pendingProps,N=e!==null?e.memoizedProps:null,i=d.children,Rh(s,d)?i=null:N!==null&&Rh(s,N)&&(t.flags|=32),t.memoizedState!==null&&(s=Gl(e,t,So,null,null,n),Pc._currentValue=s),xc(e,t),Oi(e,t,i,n),t.child;case 6:return e===null&&qt&&((e=n=Sn)&&(n=Qv(n,t.pendingProps,Qi),n!==null?(t.stateNode=n,bi=t,Sn=null,e=!0):e=!1),e||xo(t)),null;case 13:return Wp(e,t,n);case 4:return at(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=ui(t,null,i,n):Oi(e,t,i,n),t.child;case 11:return Hp(e,t,t.type,t.pendingProps,n);case 7:return i=t.pendingProps,xc(e,t),Oi(e,t,i,n),t.child;case 8:return Oi(e,t,t.pendingProps.children,n),t.child;case 12:return Oi(e,t,t.pendingProps.children,n),t.child;case 10:return t0(e,t,n);case 9:return s=t.type._context,i=t.pendingProps.children,be(t),s=De(s),i=i(s),t.flags|=1,Oi(e,t,i,n),t.child;case 14:return Vp(e,t,t.type,t.pendingProps,n);case 15:return Gp(e,t,t.type,t.pendingProps,n);case 19:return Yd(e,t,n);case 31:return Wm(e,t,n);case 22:return Yp(e,t,n,t.pendingProps);case 24:return be(t),i=De(We),e===null?(s=Dn(),s===null&&(s=Ln,d=tt(),s.pooledCache=d,d.refCount++,d!==null&&(s.pooledCacheLanes|=n),s=d),t.memoizedState={parent:i,cache:s},wa(t),P(t,We,s)):((e.lanes&n)!==0&&(Zr(e,t),Cs(t,null,null,n),Qr()),s=e.memoizedState,d=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),P(t,We,i)):(i=d.cache,P(t,We,i),i!==s.cache&&Te(t,[We],n,!0))),Oi(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),i=t.pendingProps,i.name!=null&&i.name!=="auto"?t.flags|=e===null?18882560:18874368:qt&&dc(t),e!==null&&e.memoizedProps.name!==i.name?t.flags|=4194816:xc(e,t),Oi(e,t,i.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function gl(e){e.flags|=4}function Zd(e,t,n,i,s){var d;if((d=(e.mode&32)!==0)&&(d=n===null?D2(t,i):D2(t,i)&&(i.src!==n.src||i.srcSet!==n.srcSet)),d){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(B0())e.flags|=8192;else throw pn=En,Yt}else e.flags&=-16777217}function i0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!k2(t))if(B0())e.flags|=8192;else throw pn=En,Yt}function pf(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?va():536870912,e.lanes|=t,_c|=t)}function xu(e,t){if(!qt)switch(e.tailMode){case"visible":break;case"collapsed":for(var n=e.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function jn(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&1206910976,i|=s.flags&1206910976,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function tv(e,t,n){var i=t.pendingProps;switch(hu(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(t),null;case 1:return jn(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),G(We),At(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(h(t)?gl(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,S())),jn(t),null;case 26:var s=t.type,d=t.memoizedState;return e===null?(gl(t),d!==null?(jn(t),i0(t,d)):(jn(t),Zd(t,s,null,i,n))):d?d!==e.memoizedState?(gl(t),jn(t),i0(t,d)):(jn(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&gl(t),jn(t),Zd(t,s,e,i,n)),null;case 27:if(wt(t),n=Ie.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gl(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return jn(t),t.subtreeFlags&=-33554433,null}e=xe.current,h(t)?gu(t):(e=S2(s,i,n),t.stateNode=e,gl(t))}return jn(t),t.subtreeFlags&=-33554433,null;case 5:if(wt(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&gl(t);else{if(!i){if(t.stateNode===null)throw Error(l(166));return jn(t),t.subtreeFlags&=-33554433,null}if(d=xe.current,h(t))gu(t);else{var N=Du(Ie.current);switch(d){case 1:d=N.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:d=N.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":d=N.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":d=N.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":d=N.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof i.is=="string"?N.createElement("select",{is:i.is}):N.createElement("select"),i.multiple?d.multiple=!0:i.size&&(d.size=i.size);break;default:d=typeof i.is=="string"?N.createElement(s,{is:i.is}):N.createElement(s)}}d[Xn]=t,d[Ai]=i;e:for(N=t.child;N!==null;){if(N.tag===5||N.tag===6)d.appendChild(N.stateNode);else if(N.tag!==4&&N.tag!==27&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===t)break e;for(;N.sibling===null;){if(N.return===null||N.return===t)break e;N=N.return}N.sibling.return=N.return,N=N.sibling}t.stateNode=d;e:switch(ta(d,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&gl(t)}}return jn(t),t.subtreeFlags&=-33554433,Zd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&gl(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(l(166));if(e=Ie.current,h(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=bi,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[Xn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||n2(e.nodeValue,n)),e||xo(t,!0)}else e=Du(e).createTextNode(i),e[Xn]=t,t.stateNode=e}return jn(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=h(t),n!==null){if(e===null){if(!i)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Xn]=t}else y(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;jn(t),e=!1}else n=S(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(da(t),t):(da(t),null);if((t.flags&128)!==0)throw Error(l(558))}return jn(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=h(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Xn]=t}else y(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;jn(t),s=!1}else s=S(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(da(t),t):(da(t),null)}return da(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),d=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(d=i.memoizedState.cachePool.pool),d!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pf(t,t.updateQueue),jn(t),null);case 4:return At(),e===null&&Lh(t.stateNode.containerInfo),t.flags|=67108864,jn(t),null;case 10:return G(t.type),jn(t),null;case 19:if(vc(t),i=t.memoizedState,i===null)return jn(t),null;if(s=(t.flags&128)!==0,d=i.rendering,d===null)if(s)xu(i,!1);else{if(ri!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Vl(e),d!==null){for(t.flags|=128,xu(i,!1),e=d.updateQueue,t.updateQueue=e,pf(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ka(n,e),n=n.sibling;return No(t,Li.current&1|2),qt&&Yr(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&ft()>Cf&&(t.flags|=128,s=!0,xu(i,!1),t.lanes=4194304)}else{if(!s)if(e=Vl(d),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,pf(t,e),xu(i,!0),i.tail===null&&i.tailMode!=="collapsed"&&i.tailMode!=="visible"&&!d.alternate&&!qt)return jn(t),null}else 2*ft()-i.renderingStartTime>Cf&&n!==536870912&&(t.flags|=128,s=!0,xu(i,!1),t.lanes=4194304);i.isBackwards?(d.sibling=t.child,t.child=d):(e=i.last,e!==null?e.sibling=d:t.child=d,i.last=d)}if(i.tail!==null){e=i.tail;e:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break e}n=n.sibling}n=!0}return i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ft(),e.sibling=null,d=Li.current,d=s?d&1|2:d&1,i.tailMode==="visible"||i.tailMode==="collapsed"||!n||qt?No(t,d):(n=d,Me(ii,t),Me(Li,n),Ei===null&&(Ei=t)),qt&&Yr(t,i.treeForkCount),e}return jn(t),null;case 22:case 23:return da(t),gc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(jn(t),t.subtreeFlags&6&&(t.flags|=8192)):jn(t),n=t.updateQueue,n!==null&&pf(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&pt(Kn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),G(We),jn(t),null;case 25:return null;case 30:return t.flags|=33554432,jn(t),null}throw Error(l(156,t.tag))}function nv(e,t){switch(hu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return G(We),At(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return wt(t),null;case 31:if(t.memoizedState!==null){if(da(t),t.alternate===null)throw Error(l(340));y()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(da(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));y()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return vc(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return At(),null;case 10:return G(t.type),null;case 22:case 23:return da(t),gc(),e!==null&&pt(Kn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return G(We),null;case 25:return null;default:return null}}function a0(e,t){switch(hu(t),t.tag){case 3:G(We),At();break;case 26:case 27:case 5:wt(t);break;case 4:At();break;case 31:t.memoizedState!==null&&da(t);break;case 13:da(t);break;case 19:vc(t);break;case 10:G(t.type);break;case 22:case 23:da(t),gc(),e!==null&&pt(Kn);break;case 24:G(We)}}function wu(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var d=n.create,N=n.inst;i=d(),N.destroy=i}n=n.next}while(n!==s)}}catch(O){vn(t,t.return,O)}}function Zl(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var d=s.next;i=d;do{if((i.tag&e)===e){var N=i.inst,O=N.destroy;if(O!==void 0){N.destroy=void 0,s=t;var J=n,me=O;try{me()}catch(Le){vn(s,J,Le)}}}i=i.next}while(i!==d)}}catch(Le){vn(t,t.return,Le)}}function r0(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{hc(t,n)}catch(i){vn(e,e.return,i)}}}function o0(e,t,n){n.props=ks(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){vn(e,t,i)}}function Ao(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:var s=e.stateNode,d=Hr(e.memoizedProps,s);(s.ref===null||s.ref.name!==d)&&(s.ref=h2(d)),i=s.ref;break;case 7:if(e.stateNode===null){var N=new rr(e);A(e.child,!1,Yv,N,void 0,void 0),e.stateNode=N}i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(O){vn(e,t,O)}}function ea(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){vn(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){vn(e,t,s)}else n.current=null}function gf(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)y2(e.stateNode,t[n])}function l0(e){for(var t=e.return;t!==null&&(Kd(t)&&y2(e.stateNode,t.stateNode),!Qd(t));)t=t.return}function Nu(e){for(var t=e.return;t!==null&&(Kd(t)&&Xv(e.stateNode,t.stateNode),!Qd(t));)t=t.return}function Qd(e){return e.tag===5||e.tag===3||e.tag===27}function Kd(e){return e&&e.tag===7&&e.stateNode!==null}function Jd(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){vn(e,e.return,s)}}function Wd(e,t,n){try{var i=e.stateNode;Ev(i,e.type,n,t),i[Ai]=t}catch(s){vn(e,e.return,s)}}function s0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function $d(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||s0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function eh(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(s,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(s),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ta)),gf(e,i),Ht=!0;else if(s!==4&&(s===27&&(gf(e,i),i=null,ts(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(eh(e,t,n,i),e=e.sibling;e!==null;)eh(e,t,n,i),e=e.sibling}function mf(e,t,n,i){var s=e.tag;if(s===5||s===6)s=e.stateNode,t?n.insertBefore(s,t):n.appendChild(s),gf(e,i),Ht=!0;else if(s!==4&&(s===27&&(gf(e,i),i=null,ts(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(mf(e,t,n,i),e=e.sibling;e!==null;)mf(e,t,n,i),e=e.sibling}function c0(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);ta(t,i,n),t[Xn]=e,t[Ai]=n}catch(d){vn(e,e.return,d)}}var vf=!1,tr=null;function u0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(vf=!0)}var _o=null;function f0(){var e=_o;return _o=null,e}var Pa=0;function wc(e,t,n,i,s){return Pa=0,d0(e.child,t,n,i,s)}function d0(e,t,n,i,s){for(var d=!1;e!==null;){if(e.tag===5){var N=e.stateNode;if(i!==null){var O=Bh(N);i.push(O),O.view&&(d=!0)}else d||Bh(N).view&&(d=!0);vf=!0,f2(N,Pa===0?t:t+"_"+Pa,n),Pa++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&s||d0(e.child,t,n,i,s)&&(d=!0));e=e.sibling}return d}function Co(e,t){for(;e!==null;)e.tag===5?d2(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Co(e.child,t)),e=e.sibling}function bf(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(bf(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(l(544));var n=t.name;t=Vr(t.default,t.share),t!=="none"&&(wc(e,n,t,null,!1)||Co(e.child,!1))}e=e.sibling}}function th(e,t){if(e.tag===30){var n=e.stateNode,i=e.memoizedProps,s=Hr(i,n),d=Vr(i.default,n.paired?i.share:i.enter);d!=="none"?wc(e,s,d,null,!1)?(bf(e),n.paired||t||Lc(e,i.onEnter)):Co(e.child,!1):bf(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)th(e,t),e=e.sibling;else bf(e)}function nh(e){if(tr!==null&&tr.size!==0){var t=tr;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.memoizedProps,i=n.name;if(i!=null&&i!=="auto"){var s=t.get(i);if(s!==void 0){var d=Vr(n.default,n.share);if(d!=="none"&&(wc(e,i,d,null,!1)?(d=e.stateNode,s.paired=d,d.paired=s,Lc(e,n.onShare)):Co(e.child,!1)),t.delete(i),t.size===0)break}}}nh(e)}e=e.sibling}}}function ih(e){if(e.tag===30){var t=e.memoizedProps,n=Hr(t,e.stateNode),i=tr!==null?tr.get(n):void 0,s=Vr(t.default,i!==void 0?t.share:t.exit);s!=="none"&&(wc(e,n,s,null,!1)?i!==void 0?(s=e.stateNode,i.paired=s,s.paired=i,tr.delete(n),Lc(e,t.onShare)):Lc(e,t.onExit):Co(e.child,!1)),tr!==null&&nh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ih(e),e=e.sibling;else tr!==null&&nh(e)}function h0(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Hr(t,e.stateNode);t=Vr(t.default,t.update),e.flags&=-5,t!=="none"&&wc(e,n,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&h0(e);e=e.sibling}}function ah(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,Co(e.child,!1))}ah(e)}e=e.sibling}}function yf(e){if(e.tag===30)e.stateNode.paired=null,Co(e.child,!1),ah(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)yf(e),e=e.sibling;else ah(e)}function p0(e){for(e=e.child;e!==null;)e.tag===30?Co(e.child,!1):(e.subtreeFlags&33554432)!==0&&p0(e),e=e.sibling}function rh(e,t,n,i,s,d,N){for(var O=!1;t!==null;){if(t.tag===5){var J=t.stateNode;if(d!==null&&Pa<d.length){var me=d[Pa],Le=Bh(J);(me.view||Le.view)&&(O=!0);var Ue;if(Ue=(e.flags&4)===0)if(Le.clip)Ue=!0;else{Ue=me.rect;var de=Le.rect;Ue=Ue.y!==de.y||Ue.x!==de.x||Ue.height!==de.height||Ue.width!==de.width}Ue&&(e.flags|=4),Le.abs?Le=!me.abs:(me=me.rect,Le=Le.rect,Le=me.height!==Le.height||me.width!==Le.width),Le&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&f2(J,Pa===0?n:n+"_"+Pa,s),O&&(e.flags&4)!==0||(_o===null&&(_o=[]),_o.push(J,Pa===0?i:i+"_"+Pa,t.memoizedProps)),Pa++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&N?e.flags|=t.flags&32:rh(e,t.child,n,i,s,d,N)&&(O=!0));t=t.sibling}return O}function g0(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,i=e.stateNode,s=Hr(n,i),d=Vr(n.default,n.update),N;N=e.memoizedState,e.memoizedState=null,i=e;var O=e.child;Pa=0,s=rh(i,O,s,s,d,N,!1),(e.flags&4)!==0&&s&&Lc(e,n.onUpdate)}else(e.subtreeFlags&33554432)!==0&&g0(e);e=e.sibling}}var qi=!1,cn=!1,To=!1,oh=!1,m0=typeof WeakSet=="function"?WeakSet:Set,Ii=null,Eo=!1,Su=!1,xf=!1,lh=!1;function iv(e,t,n){if(e=e.containerInfo,kh=Uc,e=ru(e),ac(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var d=s.anchorOffset,N=s.focusNode;s=s.focusOffset;try{i.nodeType,N.nodeType}catch{i=null;break e}var O=0,J=-1,me=-1,Le=0,Ue=0,de=e,_e=null;t:for(;;){for(var Je;de!==i||d!==0&&de.nodeType!==3||(J=O+d),de!==N||s!==0&&de.nodeType!==3||(me=O+s),de.nodeType===3&&(O+=de.nodeValue.length),(Je=de.firstChild)!==null;)_e=de,de=Je;for(;;){if(de===e)break t;if(_e===i&&++Le===d&&(J=O),_e===N&&++Ue===s&&(me=O),(Je=de.nextSibling)!==null)break;de=_e,_e=de.parentNode}de=Je}i=J===-1||me===-1?null:{start:J,end:me}}else i=null}i=i||{start:0,end:0}}else i=null;for(Mh={focusedElem:e,selectionRange:i},Uc=!1,n=(n&335544064)===n,Ii=t,t=n?9270:1024;Ii!==null;){if(e=Ii,n&&(i=e.deletions,i!==null))for(d=0;d<i.length;d++)n&&ih(i[d]);if(e.alternate===null&&(e.flags&2)!==0)n&&u0(e),wf(n);else{if(e.tag===22){if(i=e.alternate,e.memoizedState!==null){i!==null&&i.memoizedState===null&&n&&ih(i),wf(n);continue}else if(i!==null&&i.memoizedState!==null){n&&u0(e),wf(n);continue}}i=e.child,(e.subtreeFlags&t)!==0&&i!==null?(i.return=e,Ii=i):(n&&h0(e),wf(n))}}tr=null}function wf(e){for(;Ii!==null;){var t=Ii,n=e,i=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((s&1024)!==0&&i!==null){n=void 0,s=i.memoizedProps,i=i.memoizedState;var d=t.stateNode;try{var N=ks(t.type,s);n=d.getSnapshotBeforeUpdate(N,i),d.__reactInternalSnapshotBeforeUpdate=n}catch(O){vn(t,t.return,O)}}break;case 3:if((s&1024)!==0){if(i=t.stateNode.containerInfo,n=i.nodeType,n===9)Fh(i);else if(n===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Fh(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&i!==null&&(n=Hr(i.memoizedProps,i.stateNode),s=t.memoizedProps,s=Vr(s.default,s.update),s!=="none"&&wc(i,n,s,i.memoizedState=[],!0));break;default:if((s&1024)!==0)throw Error(l(163))}if(i=t.sibling,i!==null){i.return=t.return,Ii=i;break}Ii=t.return}}function v0(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Lo(e,n),i&4&&wu(5,n);break;case 1:if(Lo(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(N){vn(n,n.return,N)}else{var s=ks(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(N){vn(n,n.return,N)}}i&64&&r0(n),i&512&&Ao(n,n.return);break;case 3:if(Lo(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{hc(e,t)}catch(N){vn(n,n.return,N)}}break;case 27:t===null&&i&4&&c0(n);case 26:case 5:Lo(e,n),t===null&&i&4&&Jd(n),i&512&&Ao(n,n.return);break;case 12:Lo(e,n);break;case 31:Lo(e,n),i&4&&w0(e,n);break;case 13:Lo(e,n),i&4&&N0(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=gv.bind(null,n),Kv(e,n))));break;case 22:if(i=n.memoizedState!==null||qi,!i){var d=t!==null&&t.memoizedState!==null||cn;t=qi,s=cn,qi=i,(cn=d)&&!s?(i=2,(n.subtreeFlags&8772)!==0&&(i|=1),eo(e,n,i)):Lo(e,n),qi=t,cn=s}break;case 30:Lo(e,n),i&512&&Ao(n,n.return);break;case 7:i&512&&Ao(n,n.return);default:Lo(e,n)}}function sh(e,t){for(e=e.child;e!==null;)b0(e,t),e=e.sibling}function b0(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;if(t){var i=n.style;typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"}else{var s=e.stateNode,d=e.memoizedProps.style,N=d!=null&&d.hasOwnProperty("display")?d.display:null;s.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(J){vn(e,e.return,J)}ch(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Ht=!0}catch(J){vn(e,e.return,J)}break;case 18:try{var O=e.stateNode;t?u2(O,!0):u2(e.stateNode,!1)}catch(J){vn(e,e.return,J)}break;case 22:case 23:e.memoizedState===null&&sh(e,t);break;default:sh(e,t)}}function ch(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var n=e,i=t;switch(n.tag){case 4:b0(n,i);break e;case 22:n.memoizedState===null&&ch(n,i);break e;default:ch(n,i)}}e=e.sibling}}function y0(e){var t=e.alternate;t!==null&&(e.alternate=null,y0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zn(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var In=null,Ua=!1;function Wr(e,t,n){for(n=n.child;n!==null;)x0(e,t,n),n=n.sibling}function x0(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(ia,n)}catch{}switch(n.tag){case 26:cn||ea(n,t),Wr(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!cn&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:cn||ea(n,t),Nu(n);var i=In,s=Ua;ts(n.type)&&(In=n.stateNode,Ua=!1),Wr(e,t,n),A2(n.stateNode,n.type,n.memoizedProps),In=i,Ua=s;break;case 5:cn||ea(n,t),Nu(n);case 6:if(n.tag===6&&Nu(n),i=In,s=Ua,In=null,Wr(e,t,n),In=i,Ua=s,In!==null)if(Ua)try{(In.nodeType===9?In.body:In.nodeName==="HTML"?In.ownerDocument.body:In).removeChild(n.stateNode),Ht=!0}catch(d){vn(n,t,d)}else try{In.removeChild(n.stateNode),Ht=!0}catch(d){vn(n,t,d)}break;case 18:In!==null&&(Ua?(e=In,c2(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fc(e)):c2(In,n.stateNode));break;case 4:i=In,s=Ua,In=n.stateNode.containerInfo,Ua=!0,Wr(e,t,n),In=i,Ua=s;break;case 0:case 11:case 14:case 15:Zl(2,n,t),cn||Zl(4,n,t),Wr(e,t,n);break;case 1:cn||(ea(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&o0(n,t,i)),Wr(e,t,n);break;case 21:Wr(e,t,n);break;case 22:cn=(i=cn)||n.memoizedState!==null,Wr(e,t,n),cn=i;break;case 30:ea(n,t),Wr(e,t,n);break;case 7:cn||ea(n,t),Wr(e,t,n);break;default:Wr(e,t,n)}}function w0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fc(e)}catch(n){vn(t,t.return,n)}}}function N0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fc(e)}catch(n){vn(t,t.return,n)}}function av(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new m0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new m0),t;default:throw Error(l(435,e.tag))}}function Nf(e,t){var n=av(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=mv.bind(null,e,i);i.then(s,s)}})}function Na(e,t,n){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var d=i[s],N=e,O=t,J=O;e:for(;J!==null;){switch(J.tag){case 27:if(ts(J.type)){In=J.stateNode,Ua=!1;break e}break;case 5:In=J.stateNode,Ua=!1;break e;case 3:case 4:In=J.stateNode.containerInfo,Ua=!0;break e}J=J.return}if(In===null)throw Error(l(160));x0(N,O,d),In=null,Ua=!1,N=d.alternate,N!==null&&(N.return=null),d.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)S0(t,e,n),t=t.sibling}var $r=null;function S0(e,t,n){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(s&4&&(i=e.updateQueue,i=i!==null?i.events:null,i!==null))for(var d=0;d<i.length;d++){var N=i[d];N.ref.impl=N.nextImpl}Na(t,e,n),Sa(e),s&4&&(Zl(3,e,e.return),wu(3,e),Zl(5,e,e.return));break;case 1:Na(t,e,n),Sa(e),s&512&&(cn||i===null||ea(i,i.return)),s&64&&qi&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?t:n.concat(t))));break;case 26:if(d=$r,Na(t,e,n),Sa(e),s&512&&(cn||i===null||ea(i,i.return)),s&4)if(s=i!==null?i.memoizedState:null,n=e.memoizedState,i===null)if(n===null)if(e.stateNode===null)if(qi)e.stateNode=o2(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,n=e.memoizedProps,s=d.ownerDocument||d;t:switch(t){case"title":i=s.getElementsByTagName("title")[0],(!i||i[ur]||i[Xn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(t),s.head.insertBefore(i,s.querySelector("head > title"))),ta(i,t,n),i[Xn]=e,tn(i),t=i;break e;case"link":if(d=O2("link","href",s).get(t+(n.href||""))){for(N=0;N<d.length;N++)if(i=d[N],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(N,1);break t}}i=s.createElement(t),ta(i,t,n),s.head.appendChild(i);break;case"meta":if(d=O2("meta","content",s).get(t+(n.content||""))){for(N=0;N<d.length;N++)if(i=d[N],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(N,1);break t}}i=s.createElement(t),ta(i,t,n),s.head.appendChild(i);break;default:throw Error(l(468,t))}i[Xn]=e,tn(i),t=i}e.stateNode=t}else qi||Xh(d,e.type,e.stateNode);else e.stateNode=L2(d,n,e.memoizedProps);else s!==n?(s===null?(t=i.stateNode,t===null||cn||t.parentNode.removeChild(t)):s.count--,n===null?qi||Xh(d,e.type,e.stateNode):L2(d,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Wd(e,e.memoizedProps,i.memoizedProps);break;case 27:Na(t,e,n),Sa(e),s&512&&(cn||i===null||ea(i,i.return)),i!==null&&s&4&&Wd(e,e.memoizedProps,i.memoizedProps);break;case 5:if(d=To,To=!1,Na(t,e,n),To=d,Sa(e),s&512&&(cn||i===null||ea(i,i.return)),e.flags&32){t=e.stateNode;try{sa(t,""),Ht=!0}catch(Le){vn(e,e.return,Le)}}s&4&&e.stateNode!=null&&(t=e.memoizedProps,Wd(e,t,i!==null?i.memoizedProps:t)),s&1024&&(oh=!0);break;case 6:if(Na(t,e,n),Sa(e),s&4){if(e.stateNode===null)throw Error(l(162));t=e.memoizedProps,n=e.stateNode;try{n.nodeValue=t,Ht=!0}catch(Le){vn(e,e.return,Le)}}break;case 3:if(Ht=!1,Bf=null,d=$r,$r=ku(t.containerInfo),Na(t,e,n),$r=d,Sa(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Fc(t.containerInfo)}catch(Le){vn(e,e.return,Le)}oh&&(oh=!1,A0(e)),Ht=!1;break;case 4:s=To,To=qi,i=Ho(),d=$r,$r=ku(e.stateNode.containerInfo),Na(t,e,n),Sa(e),$r=d,Ht&&Su&&(xf=!0),Ht=i,To=s;break;case 12:Na(t,e,n),Sa(e);break;case 31:Na(t,e,n),Sa(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Nf(e,t)));break;case 13:Na(t,e,n),Sa(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(_f=ft()),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Nf(e,t)));break;case 22:d=e.memoizedState!==null,N=i!==null&&i.memoizedState!==null;var O=qi,J=cn,me=To;qi=O||d,To=me||d,cn=J||N,Na(t,e,n),cn=J,To=me,qi=O,Sa(e),s&8192&&(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,!d||i===null||N||qi||cn||(t=N||cn,n=qi,i=cn,qi=d||qi,cn=t,Ql(e,2),qi=n,cn=i),!d&&To||sh(e,d)),s&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,Nf(e,n))));break;case 19:Na(t,e,n),Sa(e),s&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,Nf(e,t)));break;case 30:s&512&&(cn||i===null||ea(i,i.return)),s=Ho(),d=Su,N=(n&335544064)===n,O=e.memoizedProps,Su=N&&Vr(O.default,O.update)!=="none",Na(t,e,n),Sa(e),N&&i!==null&&Ht&&(e.flags|=4),Su=d,Ht=s;break;case 21:break;case 7:s&512&&(cn||i===null||ea(i,i.return)),i&&i.stateNode!==null&&(i.stateNode._fragmentFiber=e);default:Na(t,e,n),Sa(e)}}function Sa(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(s0(i)){n=i;break}i=i.return}i=null;for(var s=e.return;s!==null;){if(Kd(s)){var d=s.stateNode;i===null?i=[d]:i.push(d)}if(Qd(s))break;s=s.return}var N=i;if(n==null)throw Error(l(160));switch(n.tag){case 27:var O=n.stateNode,J=$d(e);mf(e,J,O,N);break;case 5:var me=n.stateNode;n.flags&32&&(sa(me,""),n.flags&=-33);var Le=$d(e);mf(e,Le,me,N);break;case 3:case 4:var Ue=n.stateNode.containerInfo,de=$d(e);eh(e,de,Ue,N);break;default:throw Error(l(161))}}catch(_e){vn(e,e.return,_e)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function A0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;A0(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Uc=!0,t.reset(),Uc=!1),e=e.sibling}}function Nc(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)_0(t,e),t=t.sibling;else g0(t)}function _0(e,t){var n=e.alternate;if(n===null)th(e,!1);else switch(e.tag){case 3:if(lh=Eo=!1,f0(),Nc(t,e),!Eo&&!xf){if(e=_o,e!==null)for(var i=0;i<e.length;i+=3){n=e[i];var s=e[i+1];d2(n,e[i+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+s+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),lh=!0}_o=null;break;case 5:Nc(t,e);break;case 4:i=Eo,Eo=!1,Nc(t,e),Eo&&(xf=!0),Eo=i;break;case 22:e.memoizedState===null&&(n.memoizedState!==null?th(e,!1):Nc(t,e));break;case 30:i=Eo,s=f0(),Eo=!1,Nc(t,e),Eo&&(e.flags|=4);var d=e.memoizedProps,N=e.stateNode;t=Hr(d,N),N=Hr(n.memoizedProps,N);var O=Vr(d.default,d.update);O==="none"?t=!1:(d=n.memoizedState,n.memoizedState=null,n=e.child,Pa=0,t=rh(e,n,t,N,O,d,!0),Pa!==(d===null?0:d.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Lc(e,e.memoizedProps.onUpdate),_o=s):s!==null&&(s.push.apply(s,_o),_o=s),Eo=(e.flags&32)!==0?!0:i;break;default:Nc(t,e)}}function Lo(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)v0(e,t.alternate,t),t=t.sibling}function Ql(e,t){for(e=e.child;e!==null;){var n=e,i=t;switch(n.tag){case 0:case 11:case 14:case 15:Zl(4,n,n.return),Ql(n,i);break;case 1:ea(n,n.return);var s=n.stateNode;typeof s.componentWillUnmount=="function"&&o0(n,n.return,s),Ql(n,i);break;case 27:(i&2)!==0&&A2(n.stateNode,n.type,n.memoizedProps);case 5:ea(n,n.return),n.tag!==5&&n.tag!==27||Nu(n),Ql(n,i);break;case 6:Nu(n);break;case 26:ea(n,n.return),s=n.stateNode,n.memoizedState!==null||s===null||cn||s.parentNode.removeChild(s),Ql(n,i);break;case 22:n.memoizedState===null&&Ql(n,i);break;case 30:ea(n,n.return),Ql(n,i);break;case 7:ea(n,n.return);default:Ql(n,i)}e=e.sibling}}function eo(e,t,n){for(n=(t.subtreeFlags&8772)!==0?n:n&-2,t=t.child;t!==null;){var i=t.alternate,s=e,d=t,N=d.flags,O=(n&1)!==0;switch(d.tag){case 0:case 11:case 15:eo(s,d,n),wu(4,d);break;case 1:if(eo(s,d,n),i=d,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(Le){vn(i,i.return,Le)}if(i=d,s=i.updateQueue,s!==null){var J=i.stateNode;try{var me=s.shared.hiddenCallbacks;if(me!==null)for(s.shared.hiddenCallbacks=null,s=0;s<me.length;s++)ef(me[s],J)}catch(Le){vn(i,i.return,Le)}}O&&N&64&&r0(d),Ao(d,d.return);break;case 27:(n&2)!==0&&c0(d);case 5:d.tag!==5&&d.tag!==27||l0(d),eo(s,d,n),O&&i===null&&N&4&&Jd(d),Ao(d,d.return);break;case 6:l0(d);break;case 26:J=d.stateNode,d.memoizedState!==null||J===null||qi||Xh(ku(J.ownerDocument),d.type,J),eo(s,d,n),O&&i===null&&N&4&&Jd(d),Ao(d,d.return);break;case 12:eo(s,d,n);break;case 31:eo(s,d,n),O&&N&4&&w0(s,d);break;case 13:eo(s,d,n),O&&N&4&&N0(s,d);break;case 22:d.memoizedState===null&&eo(s,d,n),Ao(d,d.return);break;case 30:eo(s,d,n),Ao(d,d.return);break;case 7:Ao(d,d.return);default:eo(s,d,n)}t=t.sibling}}function uh(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ct(n))}function fh(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ct(e))}function Er(e,t,n,i){var s=(n&335544064)===n;if(t.subtreeFlags&(s?10262:10256))for(t=t.child;t!==null;)C0(e,t,n,i),t=t.sibling;else s&&p0(t)}function C0(e,t,n,i){var s=(n&335544064)===n;s&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&yf(t);var d=t.flags;switch(t.tag){case 0:case 11:case 15:Er(e,t,n,i),d&2048&&wu(9,t);break;case 1:Er(e,t,n,i);break;case 3:Er(e,t,n,i),s&&lh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),d&2048&&(d=null,t.alternate!==null&&(d=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==d&&(t.refCount++,d!=null&&Ct(d)));break;case 12:if(d&2048){Er(e,t,n,i),d=t.stateNode;try{var N=t.memoizedProps,O=N.id,J=N.onPostCommit;typeof J=="function"&&J(O,t.alternate===null?"mount":"update",d.passiveEffectDuration,-0)}catch(me){vn(t,t.return,me)}}else Er(e,t,n,i);break;case 31:Er(e,t,n,i);break;case 13:Er(e,t,n,i);break;case 23:break;case 22:N=t.stateNode,O=t.alternate,t.memoizedState!==null?(s&&O!==null&&O.memoizedState===null&&yf(O),N._visibility&2?Er(e,t,n,i):Au(e,t)):(s&&O!==null&&O.memoizedState!==null&&yf(t),N._visibility&2?Er(e,t,n,i):(N._visibility|=2,Sc(e,t,n,i,(t.subtreeFlags&10256)!==0||!1))),d&2048&&uh(O,t);break;case 24:Er(e,t,n,i),d&2048&&fh(t.alternate,t);break;case 30:s&&(d=t.alternate,d!==null&&(Co(d.child,!0),Co(t.child,!0))),Er(e,t,n,i);break;default:Er(e,t,n,i)}}function Sc(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var d=e,N=t,O=n,J=i,me=N.flags;switch(N.tag){case 0:case 11:case 15:Sc(d,N,O,J,s),wu(8,N);break;case 23:break;case 22:var Le=N.stateNode;N.memoizedState!==null?Le._visibility&2?Sc(d,N,O,J,s):Au(d,N):(Le._visibility|=2,Sc(d,N,O,J,s)),s&&me&2048&&uh(N.alternate,N);break;case 24:Sc(d,N,O,J,s),s&&me&2048&&fh(N.alternate,N);break;default:Sc(d,N,O,J,s)}t=t.sibling}}function Au(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:Au(n,i),s&2048&&uh(i.alternate,i);break;case 24:Au(n,i),s&2048&&fh(i.alternate,i);break;default:Au(n,i)}t=t.sibling}}var Ms=8192;function Rs(e,t,n){if(e.subtreeFlags&Ms)for(e=e.child;e!==null;)T0(e,t,n),e=e.sibling}function T0(e,t,n){switch(e.tag){case 26:Rs(e,t,n),e.flags&Ms&&(e.memoizedState!==null?ub(n,$r,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&R2(n,e)));break;case 5:Rs(e,t,n),e.flags&Ms&&(e=e.stateNode,(t&335544128)===t&&R2(n,e));break;case 3:case 4:var i=$r;$r=ku(e.stateNode.containerInfo),Rs(e,t,n),$r=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ms,Ms=16777216,Rs(e,t,n),Ms=i):Rs(e,t,n));break;case 30:if((e.flags&Ms)!==0&&(i=e.memoizedProps.name,i!=null&&i!=="auto")){var s=e.stateNode;s.paired=null,tr===null&&(tr=new Map),tr.set(i,s)}Rs(e,t,n);break;default:Rs(e,t,n)}}function E0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function _u(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ii=i,O0(i,e)}E0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)L0(e),e=e.sibling}function L0(e){switch(e.tag){case 0:case 11:case 15:_u(e),e.flags&2048&&Zl(9,e,e.return);break;case 3:_u(e);break;case 12:_u(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Sf(e)):_u(e);break;default:_u(e)}}function Sf(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];Ii=i,O0(i,e)}E0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zl(8,t,t.return),Sf(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Sf(t));break;default:Sf(t)}e=e.sibling}}function O0(e,t){for(;Ii!==null;){var n=Ii;switch(n.tag){case 0:case 11:case 15:Zl(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ct(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ii=i;else e:for(n=e;Ii!==null;){i=Ii;var s=i.sibling,d=i.return;if(y0(i),i===n){Ii=null;break e}if(s!==null){s.return=d,Ii=s;break e}Ii=d}}}var rv={getCacheForType:function(e){var t=De(We),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return De(We).controller.signal}},ov=typeof WeakMap=="function"?WeakMap:Map,rn=0,Ln=null,Xt=null,Kt=0,mn=0,nr=null,Kl=!1,Ac=!1,dh=!1,ml=0,ri=0,Jl=0,js=0,Af=0,ir=0,_c=0,Cu=null,Fa=null,hh=!1,_f=0,D0=0,Cf=1/0,Tf=null,Wl=null,Jn=0,to=null,zs=null,Oo=0,ph=0,gh=null,k0=null,Cc=null,Tc=null,Ec=null,Tu=0,Ef=null;function ar(){return(rn&2)!==0&&Kt!==0?Kt&-Kt:Ee.T!==null?_h():ds()}function M0(){if(ir===0)if((Kt&536870912)===0||qt){var e=Wn;Wn<<=1,(Wn&3932160)===0&&(Wn=262144),ir=e}else ir=536870912;return e=ii.current,e!==null&&(e.flags|=32),ir}function Lc(e,t){if(t!=null){var n=e.stateNode,i=n.ref;i===null&&(i=n.ref=h2(Hr(e.memoizedProps,n))),Tc===null&&(Tc=[]),Tc.push(t.bind(null,i))}}function qa(e,t,n){(e===Ln&&(mn===2||mn===9)||e.cancelPendingCommit!==null)&&(Oc(e,0),$l(e,Kt,ir,!1)),la(e,n),((rn&2)===0||e!==Ln)&&(e===Ln&&((rn&2)===0&&(js|=n),ri===4&&$l(e,Kt,ir,!1)),Do(e))}function R0(e,t,n){if((rn&6)!==0)throw Error(l(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||oa(e,t),s=i?cv(e,t):vh(e,t,!0),d=i;do{if(s===0){Ac&&!i&&$l(e,t,0,!1);break}else{if(n=e.current.alternate,d&&!lv(n)){s=vh(e,t,!1),d=!1;continue}if(s===2){if(d=t,e.errorRecoveryDisabledLanes&d)var N=0;else N=e.pendingLanes&-536870913,N=N!==0?N:N&536870912?536870912:0;if(N!==0){t=N;e:{var O=e;s=Cu;var J=O.current.memoizedState.isDehydrated;if(J&&(Oc(O,N).flags|=256),N=vh(O,N,!1),N!==2&&N!==6){if(dh&&!J){O.errorRecoveryDisabledLanes|=d,js|=d,s=4;break e}d=Fa,Fa=s,d!==null&&(Fa===null?Fa=d:Fa.push.apply(Fa,d))}s=N}if(d=!1,s!==2)continue}}if(s===1){Oc(e,0),$l(e,t,0,!0);break}e:{switch(i=e,d=s,d){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:$l(i,t,ir,!Kl);break e;case 2:Fa=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(s=_f+300-ft(),10<s)){if($l(i,t,ir,!Kl),ra(i,0,!0)!==0)break e;Oo=t,i.timeoutHandle=zh(j0.bind(null,i,n,Fa,Tf,hh,t,ir,js,_c,Kl,d,"Throttled",-0,0),s);break e}j0(i,n,Fa,Tf,hh,t,ir,js,_c,Kl,d,null,-0,0)}}break}while(!0);Do(e)}function j0(e,t,n,i,s,d,N,O,J,me,Le,Ue,de,_e){e.timeoutHandle=-1;var Je=t.subtreeFlags,ct=(d&335544064)===d;if(Ue=null,(ct||Je&8192||(Je&16785408)===16785408)&&(Ue={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ta},tr=null,T0(t,d,Ue),ct&&(Je=Ue,ct=e.containerInfo,ct=(ct.nodeType===9?ct:ct.ownerDocument).__reactViewTransition,ct!=null&&(Je.count++,Je.waitingForViewTransition=!0,Je=ju.bind(Je),ct.finished.then(Je,Je))),Je=(d&62914560)===d?_f-ft():(d&4194048)===d?D0-ft():0,Je=fb(Ue,Je),Je!==null)){Oo=d,e.cancelPendingCommit=Je(H0.bind(null,e,t,d,n,i,s,N,O,J,me,Le,Ue,null,de,_e)),$l(e,d,N,!me);return}H0(e,t,d,n,i,s,N,O,J,me,Le,Ue)}function lv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],d=s.getSnapshot;s=s.value;try{if(!ji(d(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $l(e,t,n,i){t=Ca(e,t),t&=~Af,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var d=31-Gn(s),N=1<<d;i[d]=-1,s&=~N}n!==0&&Po(e,n,t)}function Lf(){return(rn&6)===0?(Eu(0),!1):!0}function mh(){if(Xt!==null){if(mn===0)var e=Xt.return;else e=Xt,z=M=null,bc(e),Mn=null,Ti=0,e=Xt;for(;e!==null;)a0(e.alternate,e),e=e.return;Xt=null}}function Oc(e,t){var n=e.timeoutHandle;return n!==-1&&(e.timeoutHandle=-1,Dv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Oo=0,mh(),Ln=e,Xt=n=zi(e.current,null),Kt=t,mn=0,nr=null,Kl=!1,Ac=oa(e,t),dh=!1,_c=ir=Af=js=Jl=ri=0,Fa=Cu=null,hh=!1,ml=Ca(e,t),Pl(),n}function z0(e,t){kt=null,Ee.H=sf,t===kn||t===Wt?(t=Ki(),mn=3):t===Yt?(t=Ki(),mn=4):mn=t===Ud?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nr=t,Xt===null&&(ri=1,cf(e,Ra(t,e.current)))}function B0(){var e=ii.current;return e===null?!0:(Kt&4194048)===Kt?Ei===null:(Kt&62914560)===Kt||(Kt&536870912)!==0?e===Ei:!1}function P0(){var e=Ee.H;return Ee.H=sf,e===null?sf:e}function U0(){var e=Ee.A;return Ee.A=rv,e}function Of(){ri=4,Kl||(Kt&4194048)!==Kt&&ii.current!==null||(Ac=!0),(Jl&134217727)===0&&(js&134217727)===0||Ln===null||$l(Ln,Kt,ir,!1)}function vh(e,t,n){var i=rn;rn|=2;var s=P0(),d=U0();(Ln!==e||Kt!==t)&&(Tf=null,Oc(e,t)),t=!1;var N=ri;e:do try{if(mn!==0&&Xt!==null){var O=Xt,J=nr;switch(mn){case 8:mh(),N=6;break e;case 3:case 2:case 9:case 6:ii.current===null&&(t=!0);var me=mn;if(mn=0,nr=null,Dc(e,O,J,me),n&&Ac){N=0;break e}break;default:me=mn,mn=0,nr=null,Dc(e,O,J,me)}}sv(),N=ri;break}catch(Le){z0(e,Le)}while(!0);return t&&e.shellSuspendCounter++,z=M=null,rn=i,Ee.H=s,Ee.A=d,Xt===null&&(Ln=null,Kt=0,Pl()),N}function sv(){for(;Xt!==null;)F0(Xt)}function cv(e,t){var n=rn;rn|=2;var i=P0(),s=U0();Ln!==e||Kt!==t?(Tf=null,Cf=ft()+500,Oc(e,t)):Ac=oa(e,t);e:do try{if(mn!==0&&Xt!==null){t=Xt;var d=nr;t:switch(mn){case 1:mn=0,nr=null,Dc(e,t,d,1);break;case 2:case 9:if(nn(d)){mn=0,nr=null,q0(t);break}t=function(){mn!==2&&mn!==9||Ln!==e||(mn=7),Do(e)},d.then(t,t);break e;case 3:mn=7;break e;case 4:mn=5;break e;case 7:nn(d)?(mn=0,nr=null,q0(t)):(mn=0,nr=null,Dc(e,t,d,7));break;case 5:var N=null;switch(Xt.tag){case 26:N=Xt.memoizedState;case 5:case 27:var O=Xt;if(N?k2(N):O.stateNode.complete){mn=0,nr=null;var J=O.sibling;if(J!==null)Xt=J;else{var me=O.return;me!==null?(Xt=me,Df(me)):Xt=null}break t}}mn=0,nr=null,Dc(e,t,d,5);break;case 6:mn=0,nr=null,Dc(e,t,d,6);break;case 8:mh(),ri=6;break e;default:throw Error(l(462))}}uv();break}catch(Le){z0(e,Le)}while(!0);return z=M=null,Ee.H=i,Ee.A=s,rn=n,Xt!==null?0:(Ln=null,Kt=0,Pl(),ri)}function uv(){for(;Xt!==null&&!bt();)F0(Xt)}function F0(e){var t=n0(e.alternate,e,ml);e.memoizedProps=e.pendingProps,t===null?Df(e):Xt=t}function q0(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qp(n,t,t.pendingProps,t.type,void 0,Kt);break;case 11:t=Qp(n,t,t.pendingProps,t.type.render,t.ref,Kt);break;case 5:bc(t);var i=t;i===bi&&(qt?(c(i),i.tag===5&&i.stateNode!=null&&(Sn=i.stateNode)):(c(i),qt=!0));default:a0(n,t),t=Xt=ka(t,ml),t=n0(n,t,ml)}e.memoizedProps=e.pendingProps,t===null?Df(e):Xt=t}function Dc(e,t,n,i){z=M=null,bc(t),Mn=null,Ti=0;var s=t.return;try{if(Jm(e,s,t,n,Kt)){ri=1,cf(e,Ra(n,e.current)),Xt=null;return}}catch(d){if(s!==null)throw Xt=s,d;ri=1,cf(e,Ra(n,e.current)),Xt=null;return}t.flags&32768?(qt||i===1?e=!0:Ac||(Kt&536870912)!==0?e=!1:(Kl=e=!0,(i===2||i===9||i===3||i===6)&&(i=ii.current,i!==null&&i.tag===13&&(i.flags|=16384))),I0(t,e)):Df(t)}function Df(e){var t=e;do{if((t.flags&32768)!==0){I0(t,Kl);return}e=t.return;var n=tv(t.alternate,t,ml);if(n!==null){Xt=n;return}if(t=t.sibling,t!==null){Xt=t;return}Xt=t=e}while(t!==null);ri===0&&(ri=5)}function I0(e,t){do{var n=nv(e.alternate,e);if(n!==null){n.flags&=32767,Xt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xt=e;return}Xt=e=n}while(e!==null);ri=6,Xt=null}function H0(e,t,n,i,s,d,N,O,J,me,Le,Ue){e.cancelPendingCommit=null;do kf();while(Jn!==0);if((rn&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));e===Ln&&(Xt=Ln=null,Kt=0),zs=t,to=e,Oo=n,gh=s,k0=i,fv(e,t,n,N,O,J,Ue)}}function fv(e,t,n,i,s,d,N){var O=t.lanes|t.childLanes;if(ph=O,O|=uu,Bo(e,n,O,i,s,d),Tc=null,(n&335544064)===n?(Ec=si(e),i=10262):(Ec=null,i=10256),(t.subtreeFlags&i)!==0||(t.flags&i)!==0?(e.callbackNode=null,e.callbackPriority=0,vv(yt,function(){return wh(),null})):(e.callbackNode=null,e.callbackPriority=0),vf=!1,i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Ee.T,Ee.T=null,s=qe.p,qe.p=2,d=rn,rn|=4;try{iv(e,t,n)}finally{rn=d,qe.p=s,Ee.T=i}}Jn=1,vf?Cc=Bv(N,e.containerInfo,Ec,bh,yh,hv,xh,wh,dv):(bh(),yh(),xh())}function dv(e){if(Jn!==0){var t=to.onRecoverableError;t(e,{componentStack:null})}}function hv(){Jn===3&&(Jn=0,_0(zs,to),Jn=4)}function bh(){if(Jn===1){Jn=0;var e=to,t=zs,n=Oo,i=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||i){i=Ee.T,Ee.T=null;var s=qe.p;qe.p=2;var d=rn;rn|=4;try{Su=xf=!1,S0(t,e,n),n=Mh;var N=ru(e.containerInfo),O=n.focusedElem,J=n.selectionRange;if(N!==O&&O&&O.ownerDocument&&Rl(O.ownerDocument.documentElement,O)){if(J!==null&&ac(O)){var me=J.start,Le=J.end;if(Le===void 0&&(Le=me),"selectionStart"in O)O.selectionStart=me,O.selectionEnd=Math.min(Le,O.value.length);else{var Ue=O.ownerDocument||document,de=Ue&&Ue.defaultView||window;if(de.getSelection){var _e=de.getSelection(),Je=O.textContent.length,ct=Math.min(J.start,Je),zt=J.end===void 0?ct:Math.min(J.end,Je);!_e.extend&&ct>zt&&(N=zt,zt=ct,ct=N);var ge=au(O,ct),se=au(O,zt);if(ge&&se&&(_e.rangeCount!==1||_e.anchorNode!==ge.node||_e.anchorOffset!==ge.offset||_e.focusNode!==se.node||_e.focusOffset!==se.offset)){var Ne=Ue.createRange();Ne.setStart(ge.node,ge.offset),_e.removeAllRanges(),ct>zt?(_e.addRange(Ne),_e.extend(se.node,se.offset)):(Ne.setEnd(se.node,se.offset),_e.addRange(Ne))}}}}for(Ue=[],_e=O;_e=_e.parentNode;)_e.nodeType===1&&Ue.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof O.focus=="function"&&O.focus(),O=0;O<Ue.length;O++){var Pe=Ue[O];Pe.element.scrollLeft=Pe.left,Pe.element.scrollTop=Pe.top}}Uc=!!kh,Mh=kh=null}finally{rn=d,qe.p=s,Ee.T=i}}e.current=t,Jn=2}}function yh(){if(Jn===2){Jn=0;var e=to,t=zs,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Ee.T,Ee.T=null;var i=qe.p;qe.p=2;var s=rn;rn|=4;try{v0(e,t.alternate,t)}finally{rn=s,qe.p=i,Ee.T=n}}Jn=3}}function xh(){if(Jn===4||Jn===3){Jn=0;var e=Cc;Cc=null,Nn();var t=to,n=zs,i=Oo,s=k0,d=(i&335544064)===i?10262:10256;if((n.subtreeFlags&d)!==0||(n.flags&d)!==0?Jn=5:(Jn=0,zs=to=null,V0(t,t.pendingLanes)),d=t.pendingLanes,d===0&&(Wl=null),qo(i),n=n.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(ia,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=Ee.T,d=qe.p,qe.p=2,Ee.T=null;try{for(var N=t.onRecoverableError,O=0;O<s.length;O++){var J=s[O];N(J.value,{componentStack:J.stack})}}finally{Ee.T=n,qe.p=d}}if(s=Tc,N=Ec,Ec=null,s!==null&&(Tc=null,N===null&&(N=[]),e!==null))for(J=0;J<s.length;J++)n=(0,s[J])(N),n!==void 0&&e.finished.finally(n);(Oo&3)!==0&&kf(),Do(t),d=t.pendingLanes,(i&261930)!==0&&(d&42)!==0?t===Ef?Tu++:(Tu=0,Ef=t):(Tu=0,Ef=null),Eu(0)}}function V0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ct(t)))}function kf(){return Cc!==null&&(Cc.skipTransition(),Cc=null),bh(),yh(),xh(),wh()}function wh(){if(Jn!==5)return!1;var e=to,t=ph;ph=0;var n=qo(Oo),i=Ee.T,s=qe.p;try{qe.p=32>n?32:n,Ee.T=null,n=gh,gh=null;var d=to,N=Oo;if(Jn=0,zs=to=null,Oo=0,(rn&6)!==0)throw Error(l(331));var O=rn;if(rn|=4,L0(d.current),C0(d,d.current,N,n),rn=O,Eu(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(ia,d)}catch{}return!0}finally{qe.p=s,Ee.T=i,V0(e,t)}}function G0(e,t,n){t=Ra(n,t),t=Pd(e.stateNode,t,2),e=Rn(e,t,2),e!==null&&(la(e,2),Do(e))}function vn(e,t,n){if(e.tag===3)G0(e,e,n);else for(;t!==null;){if(t.tag===3){G0(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wl===null||!Wl.has(i))){e=Ra(n,e),n=qp(2),i=Rn(t,n,2),i!==null&&(Ip(n,i,t,e),la(i,2),Do(i));break}}t=t.return}}function Nh(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new ov;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(dh=!0,s.add(n),e=pv.bind(null,e,t,n),t.then(e,e))}function pv(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ln===e&&(Kt&n)===n&&((ri===4||ri===3&&(Kt&62914560)===Kt&&300>ft()-_f)&&(rn&2)===0?Oc(e,0):Af|=n,_c===Kt&&(_c=0)),Do(e)}function Y0(e,t){t===0&&(t=va()),e=ll(e,t),e!==null&&(la(e,t),Do(e))}function gv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Y0(e,n)}function mv(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(l(314))}i!==null&&i.delete(t),Y0(e,n)}function vv(e,t){return jt(e,t)}var kc=null,Mc=null,Sh=!1,Mf=!1,Ah=!1,es=0;function Do(e){e!==Mc&&e.next===null&&(Mc===null?kc=Mc=e:Mc=Mc.next=e),Mf=!0,Sh||(Sh=!0,yv())}function Eu(e,t){if(!Ah&&Mf){Ah=!0;do for(var n=!1,i=kc;i!==null;){if(e!==0){var s=i.pendingLanes;if(s===0)var d=0;else{var N=i.suspendedLanes,O=i.pingedLanes;d=(1<<31-Gn(42|e)+1)-1,d&=s&~(N&~O),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(n=!0,K0(i,d))}else d=Kt,d=ra(i,i===Ln?d:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(d&3)===0||oa(i,d)||(n=!0,K0(i,d));i=i.next}while(n);Ah=!1}}function bv(){X0()}function X0(){Mf=Sh=!1;var e=0;es!==0&&Ov()&&(e=es);for(var t=ft(),n=null,i=kc;i!==null;){var s=i.next,d=Z0(i,t);d===0?(i.next=null,n===null?kc=s:n.next=s,s===null&&(Mc=n)):(n=i,(e!==0||(d&3)!==0)&&(Mf=!0)),i=s}Jn!==0&&Jn!==5||Eu(e),es!==0&&(es=0)}function Z0(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var N=31-Gn(d),O=1<<N,J=s[N];J===-1?((O&n)===0||(O&i)!==0)&&(s[N]=Ha(O,t)):J<=t&&(e.expiredLanes|=O),d&=~O}if(t=Ln,n=Kt,n=ra(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(mn===2||mn===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&wn(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||oa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&wn(i),qo(n)){case 2:case 8:n=Ft;break;case 32:n=yt;break;case 268435456:n=lo;break;default:n=yt}return i=Q0.bind(null,e),n=jt(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&wn(i),e.callbackPriority=2,e.callbackNode=null,2}function Q0(e,t){if(Jn!==0&&Jn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(kf()&&e.callbackNode!==n)return null;var i=Kt;return i=ra(e,e===Ln?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(R0(e,i,t),Z0(e,ft()),e.callbackNode!=null&&e.callbackNode===n?Q0.bind(null,e):null)}function K0(e,t){if(kf())return null;R0(e,t,!0)}function yv(){kv(function(){(rn&6)!==0?jt(Cn,bv):X0()})}function _h(){if(es===0){var e=Ze;e===0&&(e=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),es=e}return es}function J0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:jr(e)}function xv(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var d=J0((s[Ai]||null).action),N=i.submitter;N&&(t=(t=N[Ai]||null)?J0(t.formAction):N.getAttribute("formAction"),t!==null&&(d=t,N=null));var O=new he("action","action",null,i,s);e.push({event:O,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(es!==0){var J=new FormData(s,N);Md(n,{pending:!0,data:J,method:s.method,action:d},null,J)}}else typeof d=="function"&&(O.preventDefault(),J=new FormData(s,N),Md(n,{pending:!0,data:J,method:s.method,action:d},d,J))},currentTarget:s}]})}}for(var Ch=0;Ch<zl.length;Ch++){var Th=zl[Ch],wv=Th.toLowerCase(),Nv=Th[0].toUpperCase()+Th.slice(1);xa(wv,"on"+Nv)}xa(ws,"onAnimationEnd"),xa(lu,"onAnimationIteration"),xa(Ns,"onAnimationStart"),xa("dblclick","onDoubleClick"),xa("focusin","onFocus"),xa("focusout","onBlur"),xa(lc,"onTransitionRun"),xa(su,"onTransitionStart"),xa(Ku,"onTransitionCancel"),xa(sc,"onTransitionEnd"),so("onMouseEnter",["mouseout","mouseover"]),so("onMouseLeave",["mouseout","mouseover"]),so("onPointerEnter",["pointerout","pointerover"]),so("onPointerLeave",["pointerout","pointerover"]),gr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gr("onBeforeInput",["compositionend","keypress","textInput","paste"]),gr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lu));function W0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;e:{var d=void 0;if(t)for(var N=i.length-1;0<=N;N--){var O=i[N],J=O.instance,me=O.currentTarget;if(O=O.listener,J!==d&&s.isPropagationStopped())break e;d=O,s.currentTarget=me;try{d(s)}catch(Le){uc(Le)}s.currentTarget=null,d=J}else for(N=0;N<i.length;N++){if(O=i[N],J=O.instance,me=O.currentTarget,O=O.listener,J!==d&&s.isPropagationStopped())break e;d=O,s.currentTarget=me;try{d(s)}catch(Le){uc(Le)}s.currentTarget=null,d=J}}}}function Zt(e,t){var n=t[ps];n===void 0&&(n=t[ps]=new Set);var i=e+"__bubble";n.has(i)||($0(t,e,2,!1),n.add(i))}function Eh(e,t,n){var i=0;t&&(i|=4),$0(n,e,i,t)}var Rf="_reactListening"+Math.random().toString(36).slice(2);function Lh(e){if(!e[Rf]){e[Rf]=!0,pr.forEach(function(n){n!=="selectionchange"&&(Sv.has(n)||Eh(n,!1,e),Eh(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rf]||(t[Rf]=!0,Eh("selectionchange",!1,t))}}function $0(e,t,n,i){switch(I2(t)){case 2:var s=gb;break;case 8:s=mb;break;default:s=Qh}n=s.bind(null,t,n,e),s=void 0,!Xa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Oh(e,t,n,i,s){var d=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var N=i.tag;if(N===3||N===4){var O=i.stateNode.containerInfo;if(O===s)break;if(N===4)for(N=i.return;N!==null;){var J=N.tag;if((J===3||J===4)&&N.stateNode.containerInfo===s)return;N=N.return}for(;O!==null;){if(N=fr(O),N===null)return;if(J=N.tag,J===5||J===6||J===26||J===27){i=d=N;continue e}O=O.parentNode}}i=i.return}Sl(function(){var me=d,Le=yr(n),Ue=[];e:{var de=cc.get(e);if(de!==void 0){var _e=he,Je=e;switch(e){case"keypress":if(Qo(n)===0)break e;case"keydown":case"keyup":_e=Wo;break;case"focusin":Je="focus",_e=fn;break;case"focusout":Je="blur",_e=fn;break;case"beforeblur":case"afterblur":_e=fn;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=Vt;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=un;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=Tl;break;case ws:case lu:case Ns:_e=Pn;break;case sc:_e=Oa;break;case"scroll":case"scrollend":_e=He;break;case"wheel":_e=bs;break;case"copy":case"cut":case"paste":_e=zr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=Cl;break;case"submit":_e=Yi;break;case"toggle":case"beforetoggle":_e=tl}var ct=(t&4)!==0,zt=!ct&&(e==="scroll"||e==="scrollend"),ge=ct?de!==null?de+"Capture":null:de;ct=[];for(var se=me,Ne;se!==null;){var Pe=se;if(Ne=Pe.stateNode,Pe=Pe.tag,Pe!==5&&Pe!==26&&Pe!==27||Ne===null||ge===null||(Pe=wr(se,ge),Pe!=null&&ct.push(Ou(se,Pe,Ne))),zt)break;se=se.return}0<ct.length&&(de=new _e(de,Je,null,n,Le),Ue.push({event:de,listeners:ct}))}}if((t&7)===0){e:{if(_e=e==="mouseover"||e==="pointerover",de=e==="mouseout"||e==="pointerout",_e&&n!==Xo&&(Je=n.relatedTarget||n.fromElement)&&(fr(Je)||Je[cr]))break e;(de||_e)&&(Je=Le.window===Le?Le:(_e=Le.ownerDocument)?_e.defaultView||_e.parentWindow:window,de?(_e=n.relatedTarget||n.toElement,de=me,_e=_e?fr(_e):null,_e!==null&&(zt=u(_e),ct=_e.tag,_e!==zt||ct!==5&&ct!==27&&ct!==6)&&(_e=null)):(de=null,_e=me),de!==_e&&(ct=Vt,Pe="onMouseLeave",ge="onMouseEnter",se="mouse",(e==="pointerout"||e==="pointerover")&&(ct=Cl,Pe="onPointerLeave",ge="onPointerEnter",se="pointer"),zt=de==null?Je:dr(de),Ne=_e==null?Je:dr(_e),Je=new ct(Pe,se+"leave",de,n,Le),Je.target=zt,Je.relatedTarget=Ne,Pe=null,fr(Le)===me&&(ct=new ct(ge,se+"enter",_e,n,Le),ct.target=Ne,ct.relatedTarget=zt,Pe=ct),zt=Pe,ct=de&&_e?ke(de,_e,Av):null,de!==null&&e2(Ue,Je,de,ct,!1),_e!==null&&zt!==null&&e2(Ue,zt,_e,ct,!0)))}e:{if(de=me?dr(me):window,_e=de.nodeName&&de.nodeName.toLowerCase(),_e==="select"||_e==="input"&&de.type==="file")var nt=_r;else if(Ol(de))if(Ur)nt=xs;else{nt=li;var Jt=Qn}else _e=de.nodeName,!_e||_e.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?me&&Yo(me.elementType)&&(nt=_r):nt=Fr;if(nt&&(nt=nt(e,me))){Dl(Ue,nt,n,Le);break e}Jt&&Jt(e,de,me)}switch(Jt=me?dr(me):window,e){case"focusin":(Ol(Jt)||Jt.contentEditable==="true")&&(rl=Jt,rc=me,jl=null);break;case"focusout":jl=rc=rl=null;break;case"mousedown":oc=!0;break;case"contextmenu":case"mouseup":case"dragend":oc=!1,ou(Ue,n,Le);break;case"selectionchange":if(Qu)break;case"keydown":case"keyup":ou(Ue,n,Le)}var vt;if(_i)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else bo?vo(e,n)&&(St="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(St="onCompositionStart");St&&(Br&&n.locale!=="ko"&&(bo||St!=="onCompositionStart"?St==="onCompositionEnd"&&bo&&(vt=ho()):(Za=Le,Al="value"in Za?Za.value:Za.textContent,bo=!0)),Jt=jf(me,St),0<Jt.length&&(St=new po(St,e,null,n,Le),Ue.push({event:St,listeners:Jt}),vt?St.data=vt:(vt=Zn(n),vt!==null&&(St.data=vt)))),(vt=Ll?Sr(e,n):Qa(e,n))&&(St=jf(me,"onBeforeInput"),0<St.length&&(Jt=new po("onBeforeInput","beforeinput",null,n,Le),Ue.push({event:Jt,listeners:St}),Jt.data=vt)),xv(Ue,e,me,n,Le)}W0(Ue,t)})}function Ou(e,t,n){return{instance:e,listener:t,currentTarget:n}}function jf(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,d=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||d===null||(s=wr(e,n),s!=null&&i.unshift(Ou(e,s,d)),s=wr(e,t),s!=null&&i.push(Ou(e,s,d))),e.tag===3)return i;e=e.return}return[]}function Av(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function e2(e,t,n,i,s){for(var d=t._reactName,N=[];n!==null&&n!==i;){var O=n,J=O.alternate,me=O.stateNode;if(O=O.tag,J!==null&&J===i)break;O!==5&&O!==26&&O!==27||me===null||(J=me,s?(me=wr(n,d),me!=null&&N.unshift(Ou(n,me,J))):s||(me=wr(n,d),me!=null&&N.push(Ou(n,me,J)))),n=n.return}N.length!==0&&e.push({event:t,listeners:N})}var _v=/\r\n?/g,Cv=/\u0000|\uFFFD/g;function t2(e){return(typeof e=="string"?e:""+e).replace(_v,`
`).replace(Cv,"")}function n2(e,t){return t=t2(t),t2(e)===t}function bn(e,t,n,i,s,d){switch(n){case"children":if(typeof i=="string")t==="body"||t==="textarea"&&i===""||sa(e,i);else if(typeof i=="number"||typeof i=="bigint")t!=="body"&&sa(e,""+i);else return;break;case"className":wl(e,"class",i);break;case"tabIndex":wl(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":wl(e,n,i);break;case"style":Go(e,i,d);return;case"data":if(t!=="object"){wl(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(n==="formAction"?(t!=="input"&&bn(e,t,"name",s.name,s,null),bn(e,t,"formEncType",s.formEncType,s,null),bn(e,t,"formMethod",s.formMethod,s,null),bn(e,t,"formTarget",s.formTarget,s,null)):(bn(e,t,"encType",s.encType,s,null),bn(e,t,"method",s.method,s,null),bn(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=jr(i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ta);return;case"onScroll":i!=null&&Zt("scroll",e);return;case"onScrollEnd":i!=null&&Zt("scrollend",e);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));(d!=null?d.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=jr(i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Zt("beforetoggle",e),Zt("toggle",e),co(e,"popover",i);break;case"xlinkActuate":Ya(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ya(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ya(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ya(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ya(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ya(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":co(e,"is",i);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=br.get(n)||n,co(e,n,i);else return}Ht=!0}function Dh(e,t,n,i,s,d){switch(n){case"style":Go(e,i,d);return;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(l(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error(l(60));(d!=null?d.__html:void 0)!==n&&(e.innerHTML=n)}}break;case"children":if(typeof i=="string")sa(e,i);else if(typeof i=="number"||typeof i=="bigint")sa(e,""+i);else return;break;case"onScroll":i!=null&&Zt("scroll",e);return;case"onScrollEnd":i!=null&&Zt("scrollend",e);return;case"onClick":i!=null&&(e.onclick=Ta);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!gi.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),d=n.slice(2,s?n.length-7:void 0),t=e[Ai]||null,t=t!=null?t[n]:null,typeof t=="function"&&e.removeEventListener(d,t,s),typeof i=="function")){typeof t!="function"&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(d,i,s);break e}Ht=!0,n in e?e[n]=i:i===!0?e.setAttribute(n,""):co(e,n,i)}return}Ht=!0}function ta(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Zt("error",e),Zt("load",e);var i=!1,s=!1,d;for(d in n)if(n.hasOwnProperty(d)){var N=n[d];if(N!=null)switch(d){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:bn(e,t,d,N,n,null)}}s&&bn(e,t,"srcSet",n.srcSet,n,null),i&&bn(e,t,"src",n.src,n,null);return;case"input":Zt("invalid",e);var O=d=N=s=null,J=null,me=null;for(i in n)if(n.hasOwnProperty(i)){var Le=n[i];if(Le!=null)switch(i){case"name":s=Le;break;case"type":N=Le;break;case"checked":J=Le;break;case"defaultChecked":me=Le;break;case"value":d=Le;break;case"defaultValue":O=Le;break;case"children":case"dangerouslySetInnerHTML":if(Le!=null)throw Error(l(137,t));break;default:bn(e,t,i,Le,n,null)}}Ws(e,d,O,J,me,N,s,!1);return;case"select":Zt("invalid",e),i=N=d=null;for(s in n)if(n.hasOwnProperty(s)&&(O=n[s],O!=null))switch(s){case"value":d=O;break;case"defaultValue":N=O;break;case"multiple":i=O;default:bn(e,t,s,O,n,null)}t=d,n=N,e.multiple=!!i,t!=null?uo(e,!!i,t,!1):n!=null&&uo(e,!!i,n,!0);return;case"textarea":Zt("invalid",e),d=s=i=null;for(N in n)if(n.hasOwnProperty(N)&&(O=n[N],O!=null))switch(N){case"value":i=O;break;case"defaultValue":s=O;break;case"children":d=O;break;case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(91));break;default:bn(e,t,N,O,n,null)}vr(e,i,s,d);return;case"option":for(J in n)if(n.hasOwnProperty(J)&&(i=n[J],i!=null))switch(J){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:bn(e,t,J,i,n,null)}return;case"dialog":Zt("beforetoggle",e),Zt("toggle",e),Zt("cancel",e),Zt("close",e);break;case"iframe":case"object":Zt("load",e);break;case"video":case"audio":for(i=0;i<Lu.length;i++)Zt(Lu[i],e);break;case"image":Zt("error",e),Zt("load",e);break;case"details":Zt("toggle",e);break;case"embed":case"source":case"link":Zt("error",e),Zt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(me in n)if(n.hasOwnProperty(me)&&(i=n[me],i!=null))switch(me){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:bn(e,t,me,i,n,null)}return;default:if(Yo(t)){for(Le in n)n.hasOwnProperty(Le)&&(i=n[Le],i!==void 0&&Dh(e,t,Le,i,n,void 0));return}}for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!=null&&bn(e,t,O,i,n,null))}var Tv={};function Ev(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,d=null,N=null,O=null,J=null,me=null,Le=null;for(_e in n){var Ue=n[_e];if(n.hasOwnProperty(_e)&&Ue!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":J=Ue;default:i.hasOwnProperty(_e)||bn(e,t,_e,null,i,Ue)}}for(var de in i){var _e=i[de];if(Ue=n[de],i.hasOwnProperty(de)&&(_e!=null||Ue!=null))switch(de){case"type":_e!==Ue&&(Ht=!0),d=_e;break;case"name":_e!==Ue&&(Ht=!0),s=_e;break;case"checked":_e!==Ue&&(Ht=!0),me=_e;break;case"defaultChecked":_e!==Ue&&(Ht=!0),Le=_e;break;case"value":_e!==Ue&&(Ht=!0),N=_e;break;case"defaultValue":_e!==Ue&&(Ht=!0),O=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(l(137,t));break;default:_e!==Ue&&bn(e,t,de,_e,i,Ue)}}gs(e,N,O,J,me,Le,d,s);return;case"select":_e=N=O=de=null;for(d in n)if(J=n[d],n.hasOwnProperty(d)&&J!=null)switch(d){case"value":break;case"multiple":_e=J;default:i.hasOwnProperty(d)||bn(e,t,d,null,i,J)}for(s in i)if(d=i[s],J=n[s],i.hasOwnProperty(s)&&(d!=null||J!=null))switch(s){case"value":d!==J&&(Ht=!0),de=d;break;case"defaultValue":d!==J&&(Ht=!0),O=d;break;case"multiple":d!==J&&(Ht=!0),N=d;default:d!==J&&bn(e,t,s,d,i,J)}t=O,n=N,i=_e,de!=null?uo(e,!!n,de,!1):!!i!=!!n&&(t!=null?uo(e,!!n,t,!0):uo(e,!!n,n?[]:"",!1));return;case"textarea":_e=de=null;for(O in n)if(s=n[O],n.hasOwnProperty(O)&&s!=null&&!i.hasOwnProperty(O))switch(O){case"value":break;case"children":break;default:bn(e,t,O,null,i,s)}for(N in i)if(s=i[N],d=n[N],i.hasOwnProperty(N)&&(s!=null||d!=null))switch(N){case"value":s!==d&&(Ht=!0),de=s;break;case"defaultValue":s!==d&&(Ht=!0),_e=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(l(91));break;default:s!==d&&bn(e,t,N,s,i,d)}$s(e,de,_e);return;case"option":for(var Je in n)if(de=n[Je],n.hasOwnProperty(Je)&&de!=null&&!i.hasOwnProperty(Je))switch(Je){case"selected":e.selected=!1;break;default:bn(e,t,Je,null,i,de)}for(J in i)if(de=i[J],_e=n[J],i.hasOwnProperty(J)&&de!==_e&&(de!=null||_e!=null))switch(J){case"selected":de!==_e&&(Ht=!0),e.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:bn(e,t,J,de,i,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in n)de=n[ct],n.hasOwnProperty(ct)&&de!=null&&!i.hasOwnProperty(ct)&&bn(e,t,ct,null,i,de);for(me in i)if(de=i[me],_e=n[me],i.hasOwnProperty(me)&&de!==_e&&(de!=null||_e!=null))switch(me){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(l(137,t));break;default:bn(e,t,me,de,i,_e)}return;default:if(Yo(t)){for(var zt in n)de=n[zt],n.hasOwnProperty(zt)&&de!==void 0&&!i.hasOwnProperty(zt)&&Dh(e,t,zt,void 0,i,de);for(Le in i)de=i[Le],_e=n[Le],!i.hasOwnProperty(Le)||de===_e||de===void 0&&_e===void 0||Dh(e,t,Le,de,i,_e);return}}for(var ge in n)de=n[ge],n.hasOwnProperty(ge)&&de!=null&&!i.hasOwnProperty(ge)&&bn(e,t,ge,null,i,de);for(Ue in i)de=i[Ue],_e=n[Ue],!i.hasOwnProperty(Ue)||de===_e||de==null&&_e==null||bn(e,t,Ue,de,i,_e)}function i2(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],d=s.transferSize,N=s.initiatorType,O=s.duration;if(d&&O&&i2(N)){for(N=0,O=s.responseEnd,i+=1;i<n.length;i++){var J=n[i],me=J.startTime;if(me>O)break;var Le=J.transferSize,Ue=J.initiatorType;Le&&i2(Ue)&&(J=J.responseEnd,N+=Le*(J<O?1:(O-me)/(J-me)))}if(--i,t+=8*(d+N)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var kh=null,Mh=null;function Du(e){return e.nodeType===9?e:e.ownerDocument}function a2(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function r2(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function o2(e,t,n,i){return n=Du(n).createElement(e),n[Xn]=i,n[Ai]=t,ta(n,e,t),tn(n),n}function Rh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var jh=null;function Ov(){var e=window.event;return e&&e.type==="popstate"?e===jh?!1:(jh=e,!0):(jh=null,!1)}var zh=typeof setTimeout=="function"?setTimeout:void 0,Dv=typeof clearTimeout=="function"?clearTimeout:void 0,l2=typeof Promise=="function"?Promise:void 0,s2=typeof requestAnimationFrame=="function"?requestAnimationFrame:zh,kv=typeof queueMicrotask=="function"?queueMicrotask:typeof l2<"u"?function(e){return l2.resolve(null).then(e).catch(Mv)}:zh;function Mv(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function c2(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fc(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Vh(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Vh(n);for(var d=n.firstChild;d;){var N=d.nextSibling,O=d.nodeName;d[ur]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&d.rel.toLowerCase()==="stylesheet"||n.removeChild(d),d=N}}else n==="body"&&Vh(e.ownerDocument.body);n=s}while(n);Fc(t)}function u2(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function f2(e,t,n){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display==="inline"){if(t=e.getClientRects(),t.length===1)var i=1;else for(var s=i=0;s<t.length;s++){var d=t[s];0<d.width&&0<d.height&&i++}i===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+n.paddingTop,e.marginBottom="-"+n.paddingBottom)}}function d2(e,t){e=e.style,t=t.style;var n=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(n=t.display,e.display=n==null||typeof n=="boolean"?"":n,n=t.margin,n!=null?e.margin=n:(n=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=n==null||typeof n=="boolean"?"":n,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Rv(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function Bh(e){var t=e.getBoundingClientRect(),n=getComputedStyle(e);return Rv(t,n,e)}function jv(e){return e.documentElement.clientHeight}function zv(e){this.addEventListener("load",e),this.addEventListener("error",e)}function Bv(e,t,n,i,s,d,N,O,J){var me=t.nodeType===9?t:t.ownerDocument;try{var Le=me.startViewTransition({update:function(){var de=me.defaultView,_e=de.navigation&&de.navigation.transition,Je=me.fonts.status;i();var ct=[];if(Je==="loaded"&&(jv(me),me.fonts.status==="loading"&&ct.push(me.fonts.ready)),Je=ct.length,e!==null)for(var zt=e.suspenseyImages,ge=0,se=0;se<zt.length;se++){var Ne=zt[se];if(!Ne.complete){var Pe=Ne.getBoundingClientRect();if(0<Pe.bottom&&0<Pe.right&&Pe.top<de.innerHeight&&Pe.left<de.innerWidth){if(ge+=M2(Ne),ge>Pf){ct.length=Je;break}Ne=new Promise(zv.bind(Ne)),ct.push(Ne)}}}if(0<ct.length)return de=Promise.race([Promise.all(ct),new Promise(function(nt){return setTimeout(nt,500)})]).then(s,s),(_e?Promise.allSettled([_e.finished,de]):de).then(d,d);if(s(),_e)return _e.finished.then(d,d);d()},types:n});me.__reactViewTransition=Le;var Ue=[];return Le.ready.then(function(){for(var de=me.documentElement.getAnimations({subtree:!0}),_e=0;_e<de.length;_e++){var Je=de[_e],ct=Je.effect,zt=ct.pseudoElement;if(zt!=null&&zt.startsWith("::view-transition")){Ue.push(Je),Je=ct.getKeyframes();for(var ge=zt=void 0,se=!0,Ne=0;Ne<Je.length;Ne++){var Pe=Je[Ne],nt=Pe.width;if(zt===void 0)zt=nt;else if(zt!==nt){se=!1;break}if(nt=Pe.height,ge===void 0)ge=nt;else if(ge!==nt){se=!1;break}delete Pe.width,delete Pe.height,Pe.transform==="none"&&delete Pe.transform}se&&zt!==void 0&&ge!==void 0&&(ct.setKeyframes(Je),se=getComputedStyle(ct.target,ct.pseudoElement),se.width!==zt||se.height!==ge)&&(se=Je[0],se.width=zt,se.height=ge,se=Je[Je.length-1],se.width=zt,se.height=ge,ct.setKeyframes(Je))}}N()},function(de){me.__reactViewTransition===Le&&(me.__reactViewTransition=null);try{if(typeof de=="object"&&de!==null)switch(de.name){case"InvalidStateError":(de.message==="View transition was skipped because document visibility state is hidden."||de.message==="Skipping view transition because document visibility state has become hidden."||de.message==="Skipping view transition because viewport size changed."||de.message==="Transition was aborted because of invalid state")&&(de=null)}de!==null&&J(de)}finally{i(),s(),N()}}),Le.finished.finally(function(){for(var de=0;de<Ue.length;de++)Ue[de].cancel();me.__reactViewTransition===Le&&(me.__reactViewTransition=null),O()}),Le}catch{return i(),s(),N(),null}}function Bs(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Bs.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:ye({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Bs.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),i=[],s=0;s<n.length;s++){var d=n[s].effect;d!==null&&d.target===e&&d.pseudoElement===t&&i.push(n[s])}return i},Bs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function h2(e){return{name:e,group:new Bs("group",e),imagePair:new Bs("image-pair",e),old:new Bs("old",e),new:new Bs("new",e)}}function rr(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}rr.prototype.addEventListener=function(e,t,n){var i=null,s=null;if(!(n!=null&&typeof n!="boolean"&&(i=n.signal||null,i!==null&&i.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var d=this._eventListeners;if(g2(d,e,t,n)===-1){var N=this,O=t;n!=null&&typeof n!="boolean"&&n.once===!0&&(O=function(J){N.removeEventListener(e,t,n),typeof t=="function"?t.call(this,J):t.handleEvent(J)}),i!==null&&(s=N.removeEventListener.bind(N,e,t,n),i.addEventListener("abort",s,{once:!0}),s=i.removeEventListener.bind(i,"abort",s)),i=Rc(n),d.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:O,cleanup:s}),A(this._fragmentFiber.child,!1,Pv,e,O,i)}this._eventListeners=d}};function Pv(e,t,n,i){return k(e).addEventListener(t,n,i),!1}rr.prototype.removeEventListener=function(e,t,n){var i=this._eventListeners;if(i!==null&&(t=g2(i,e,t,n),t!==-1)){var s=i[t];n=s.attachedListener;var d=s.cleanup;s=Rc(s.optionsOrUseCapture),A(this._fragmentFiber.child,!1,Uv,e,n,s),i.splice(t,1),d!==null&&d()}};function Uv(e,t,n,i){return k(e).removeEventListener(t,n,i),!1}function Rc(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function p2(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function g2(e,t,n,i){if(e.length===0)return-1;i=p2(i);for(var s=0;s<e.length;s++){var d=e[s];if(d.type===t&&d.listener===n&&p2(d.optionsOrUseCapture)===i)return s}return-1}rr.prototype.dispatchEvent=function(e){var t=L(this._fragmentFiber);if(t===null)return!0;t=k(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var i=t.nodeType===9?t.createComment(""):document.createTextNode("");if(n)for(var s=0;s<n.length;s++){var d=n[s];i.addEventListener(d.type,d.attachedListener,Rc(d.optionsOrUseCapture))}if(t.appendChild(i),e=i.dispatchEvent(e),n)for(s=0;s<n.length;s++)d=n[s],i.removeEventListener(d.type,d.attachedListener,Rc(d.optionsOrUseCapture));return t.removeChild(i),e}return t.dispatchEvent(e)},rr.prototype.focus=function(e){A(this._fragmentFiber.child,!0,m2,e,void 0,void 0)};function m2(e,t){return e.tag===6?!1:(e=k(e),Jv(e,t))}rr.prototype.focusLast=function(e){var t=[];A(this._fragmentFiber.child,!0,Ph,t,void 0,void 0);for(var n=t.length-1;0<=n&&!m2(t[n],e);n--);};function Ph(e,t){return t.push(e),!1}rr.prototype.blur=function(){var e=L(this._fragmentFiber);e!==null&&(e=k(e),e=Du(e).activeElement,e!==null&&A(this._fragmentFiber.child,!1,Fv,e,void 0,void 0))};function Fv(e,t){return e.tag===6?!1:(e=k(e),e===t||e.contains(t)?(t.blur(),!0):!1)}rr.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),A(this._fragmentFiber.child,!1,qv,e,void 0,void 0)};function qv(e,t){return e.tag===6||(e=k(e),t.observe(e)),!1}rr.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),A(this._fragmentFiber.child,!1,Iv,e,void 0,void 0);for(var n=t=0;n<no.length;n++){var i=no[n];i.fragmentInstance===this&&i.observer===e?e.unobserve(i.instance):no[t++]=i}no.length=t}};function Iv(e,t){return e.tag===6||(e=k(e),t.unobserve(e)),!1}var no=[],Uh=!1;function Hv(e,t,n){no.push({fragmentInstance:e,observer:t,instance:n}),Uh||(Uh=!0,Wv(function(){Uh=!1;var i=no;no=[];for(var s=0;s<i.length;s++){var d=i[s];d.observer.unobserve(d.instance)}}))}rr.prototype.getClientRects=function(){var e=[];return A(this._fragmentFiber.child,!1,Vv,e,void 0,void 0),e};function Vv(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=k(e),t.push.apply(t,e.getClientRects());return!1}rr.prototype.getRootNode=function(e){var t=L(this._fragmentFiber);return t===null?this:k(t).getRootNode(e)},rr.prototype.compareDocumentPosition=function(e){var t=L(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];A(this._fragmentFiber.child,!1,Ph,n,void 0,void 0);var i=k(t);if(n.length===0){if(n=i,w(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(n=t)}t=this._fragmentFiber;var s=i=n.compareDocumentPosition(e);return n===e?s=Node.DOCUMENT_POSITION_CONTAINS:i&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=F(t)[1],n===null?s=Node.DOCUMENT_POSITION_PRECEDING:(e=k(n).compareDocumentPosition(e),s=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),s|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=k(n[0]),s=k(n[n.length-1]);var d=w(this._fragmentFiber)?t.parentElement:i;if(d==null)return Node.DOCUMENT_POSITION_DISCONNECTED;i=d.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,d=d.compareDocumentPosition(s)&Node.DOCUMENT_POSITION_CONTAINED_BY;var N=t.compareDocumentPosition(e),O=s.compareDocumentPosition(e),J=N&Node.DOCUMENT_POSITION_CONTAINED_BY||O&Node.DOCUMENT_POSITION_CONTAINED_BY;return O=i&&d&&N&Node.DOCUMENT_POSITION_FOLLOWING&&O&Node.DOCUMENT_POSITION_PRECEDING,t=i&&t===e||d&&s===e||J||O?Node.DOCUMENT_POSITION_CONTAINED_BY:!i&&t===e||!d&&s===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:N,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Gv(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Gv(e,t,n,i,s){var d=fr(s);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!d)e:{for(;d!==null;){if(d.tag===7&&(d===t||d.alternate===t)){n=!0;break e}d=d.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(d===null)return d=s.ownerDocument,s===d||s===d.documentElement||s===d.body;e:{for(d=t,t=L(t);d!==null;){if(!(d.tag!==5&&d.tag!==3&&d.tag!==27||d!==t&&d.alternate!==t)){d=!0;break e}d=d.return}d=!1}return d}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!d)&&!(t=d===n)&&(t=ke(n,d,pe),t===null?t=!1:(A(t,!0,te,d,n),d=j,j=null,t=d!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!d)&&!(t=d===i)&&(t=ke(i,d,pe),t===null?t=!1:(A(t,!0,W,d,i),d=j,ne=j=null,t=d!==null)),t):!1}function v2(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}rr.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(l(566));var t=[];A(this._fragmentFiber.child,!1,Ph,t,void 0,void 0);var n=e!==!1;if(t.length===0){var i=F(this._fragmentFiber);if(i=n?i[1]||i[0]||L(this._fragmentFiber):i[0]||i[1],i===null)return;if(i.tag===6){e=k(i),v2(e,n);return}if(i=k(i),i.nodeType!==9){if(i.nodeType===11){n="host"in i?i.host:null,n!==null&&n.scrollIntoView(e);return}i.scrollIntoView(e)}}for(i=n?t.length-1:0;i!==(n?-1:t.length);){var s=t[i];s.tag===6?(s=k(s),v2(s,n)):k(s).scrollIntoView(e),i+=n?-1:1}};function Yv(e,t){return e=k(e),b2(e,t),!1}function b2(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function y2(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.addEventListener(s.type,s.attachedListener,Rc(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(d){for(var N=0,O=0;O<no.length;O++){var J=no[O];(J.fragmentInstance!==t||J.observer!==d||J.instance!==e)&&(no[N++]=J)}no.length=N,d.observe(e)}),b2(e,t))}function Xv(e,t){var n=t._eventListeners;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];e.removeEventListener(s.type,s.attachedListener,Rc(s.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(d){typeof d.rootMargin=="string"?Hv(t,d,e):d.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Fh(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Fh(n),zn(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Zv(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ur])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var d=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Lr(e.nextSibling),e===null)break}return null}function Qv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Lr(e.nextSibling),e===null))return null;return e}function x2(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Lr(e.nextSibling),e===null))return null;return e}function qh(e){return e.data==="$?"||e.data==="$~"}function Ih(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Kv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Lr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Hh=null;function w2(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Lr(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function N2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Jv(e,t){function n(){i=!0}if(e.ownerDocument.activeElement===e)return!0;var i=!1;try{e.ownerDocument.addEventListener("focus",n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",n,!0)}return i}function Wv(e){s2(function(){s2(function(t){return e(t)})})}function S2(e,t,n){switch(t=Du(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function A2(e,t,n){for(var i in n){var s=n[i];n.hasOwnProperty(i)&&s!=null&&bn(e,t,i,null,Tv,s)}n.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Ta&&(e.onclick=null),zn(e)}function Vh(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zn(e)}var Or=new Map,_2=new Set;function ku(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var vl=qe.d;qe.d={f:$v,r:eb,D:tb,C:nb,L:ib,m:ab,X:ob,S:rb,M:lb};function $v(){var e=vl.f(),t=Lf();return e||t}function eb(e){var t=Vi(e);t!==null&&t.tag===5&&t.type==="form"?Tp(t):vl.r(e)}var jc=typeof document>"u"?null:document;function C2(e,t,n){var i=jc;if(i&&typeof t=="string"&&t){var s=gt(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),_2.has(s)||(_2.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),ta(t,"link",e),tn(t),i.head.appendChild(t)))}}function tb(e){vl.D(e),C2("dns-prefetch",e,null)}function nb(e,t){vl.C(e,t),C2("preconnect",e,t)}function ib(e,t,n){vl.L(e,t,n);var i=jc;if(i&&e&&t){var s='link[rel="preload"][as="'+gt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+gt(n.imageSizes)+'"]')):s+='[href="'+gt(e)+'"]';var d=s;switch(t){case"style":d=zc(e);break;case"script":d=Bc(e)}if(!(Or.has(d)||(e=ye({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Or.set(d,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Mu(d))||t==="script"&&i.querySelector(Ru(d))))){var N=i.createElement("link");ta(N,"link",e),t==="style"&&(N[xl]=!0,N.onload=N.onerror=function(){Io(N)}),tn(N),i.head.appendChild(N)}}}function ab(e,t){vl.m(e,t);var n=jc;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+gt(i)+'"][href="'+gt(e)+'"]',d=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Bc(e)}if(!Or.has(d)&&(e=ye({rel:"modulepreload",href:e},t),Or.set(d,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ru(d)))return}i=n.createElement("link"),ta(i,"link",e),tn(i),n.head.appendChild(i)}}}function rb(e,t,n){vl.S(e,t,n);var i=jc;if(i&&e){var s=hr(i).hoistableStyles,d=zc(e);t=t||"default";var N=s.get(d);if(!N){var O={loading:0,preload:null};if(N=i.querySelector(Mu(d)))O.loading=5;else{e=ye({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Or.get(d))&&Gh(e,n);var J=N=i.createElement("link");tn(J),ta(J,"link",e),J._p=new Promise(function(me,Le){J.onload=me,J.onerror=Le}),J.addEventListener("load",function(){O.loading|=1}),J.addEventListener("error",function(){O.loading|=2}),O.loading|=4,zf(N,t,i)}N={type:"stylesheet",instance:N,count:1,state:O},s.set(d,N)}}}function ob(e,t){vl.X(e,t);var n=jc;if(n&&e){var i=hr(n).hoistableScripts,s=Bc(e),d=i.get(s);d||(d=n.querySelector(Ru(s)),d||(e=ye({src:e,async:!0},t),(t=Or.get(s))&&Yh(e,t),d=n.createElement("script"),tn(d),ta(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(s,d))}}function lb(e,t){vl.M(e,t);var n=jc;if(n&&e){var i=hr(n).hoistableScripts,s=Bc(e),d=i.get(s);d||(d=n.querySelector(Ru(s)),d||(e=ye({src:e,async:!0,type:"module"},t),(t=Or.get(s))&&Yh(e,t),d=n.createElement("script"),tn(d),ta(d,"link",e),n.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},i.set(s,d))}}function T2(e,t,n,i){var s=(s=Ie.current)?ku(s):null;if(!s)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=zc(n.href),t=hr(s).hoistableStyles,i=t.get(n),i||(i={type:"style",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zc(n.href);var d=hr(s).hoistableStyles,N=d.get(e);if(N||(s=s.ownerDocument||s,N={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,N),(d=s.querySelector(Mu(e)))?d._p||(N.instance=d,N.state.loading=5):(d=Or.get(e),d||(d={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Or.set(e,d)),sb(s,e,d,N.state))),t&&i===null)throw Error(l(528,""));return N}if(t&&i!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(n=Bc(n),t=hr(s).hoistableScripts,i=t.get(n),i||(i={type:"script",instance:null,count:0,state:null},t.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function zc(e){return'href="'+gt(e)+'"'}function Mu(e){return'link[rel="stylesheet"]['+e+"]"}function E2(e){return ye({},e,{"data-precedence":e.precedence,precedence:null})}function sb(e,t,n,i){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[xl]!==!0){i.loading=1;return}}else t=e.createElement("link"),t[xl]=!0,t.onload=t.onerror=Io.bind(null,t),ta(t,"link",n),tn(t),e.head.appendChild(t);i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2})}function Bc(e){return'[src="'+gt(e)+'"]'}function Ru(e){return"script[async]"+e}function L2(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var s=ye({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),ta(i,"style",s),zf(i,n.precedence,e),t.instance=i;case"stylesheet":s=zc(n.href);var d=e.querySelector(Mu(s));if(d)return t.state.loading|=4,t.instance=d,tn(d),d;i=E2(n),(s=Or.get(s))&&Gh(i,s),d=(e.ownerDocument||e).createElement("link"),tn(d);var N=d;return N._p=new Promise(function(O,J){N.onload=O,N.onerror=J}),ta(d,"link",i),t.state.loading|=4,zf(d,n.precedence,e),t.instance=d;case"script":return d=Bc(n.src),(s=e.querySelector(Ru(d)))?(t.instance=s,tn(s),s):(i=n,(s=Or.get(d))&&(i=ye({},n),Yh(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),tn(s),ta(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,zf(i,n.precedence,e));return t.instance}function zf(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,d=s,N=0;N<i.length;N++){var O=i[N];if(O.dataset.precedence===t)d=O;else if(d!==s)break}d?d.parentNode.insertBefore(e,d.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Yh(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Bf=null;function O2(e,t,n){if(Bf===null){var i=new Map,s=Bf=new Map;s.set(n,i)}else s=Bf,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var d=n[s];if(!(d[ur]||d[Xn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var N=d.getAttribute(t)||"";N=e+N;var O=i.get(N);O?O.push(d):i.set(N,[d])}}return i}function Xh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function cb(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function D2(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function k2(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function M2(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function R2(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=M2(t),e.suspenseyImages.push(t)),e=db.bind(e),t.decode().then(e,e))}function ub(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zc(i.href),d=t.querySelector(Mu(s));if(d){t=d._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=ju.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=d,tn(d);return}d=t.ownerDocument||t,i=E2(i),(s=Or.get(s))&&Gh(i,s),d=d.createElement("link"),tn(d);var N=d;N._p=new Promise(function(O,J){N.onload=O,N.onerror=J}),ta(d,"link",i),n.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ju.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Pf=0;function fb(e,t){return e.stylesheets&&e.count===0&&Ff(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&Ff(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+t);0<e.imgBytes&&Pf===0&&(Pf=62500*Lv());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ff(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Pf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function j2(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ff(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function ju(){this.count--,j2(this)}function db(){this.imgCount--,j2(this)}var Uf=null;function Ff(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Uf=new Map,t.forEach(hb,e),Uf=null,ju.call(e))}function hb(e,t){if(!(t.state.loading&4)){var n=Uf.get(e);if(n)var i=n.get(null);else{n=new Map,Uf.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<s.length;d++){var N=s[d];(N.nodeName==="LINK"||N.getAttribute("media")!=="not all")&&(n.set(N.dataset.precedence,N),i=N)}i&&n.set(null,i)}s=t.instance,N=s.getAttribute("data-precedence"),d=n.get(N)||i,d===i&&n.set(null,s),n.set(N,s),this.count++,i=ju.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),d?d.parentNode.insertBefore(s,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var Pc={$$typeof:le,Provider:null,Consumer:null,_currentValue:Qe,_currentValue2:Qe,_threadCount:0};function pb(e,t,n,i,s,d,N,O,J){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.hiddenUpdates=Mr(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=d,this.onRecoverableError=N,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=J,this.transitionTypes=null,this.incompleteTransitions=new Map}function z2(e,t,n,i,s,d,N,O,J,me,Le,Ue){return e=new pb(e,t,n,N,J,me,Le,Ue,O),t=1,d===!0&&(t|=24),d=ca(3,null,null,t),e.current=d,d.stateNode=e,t=tt(),t.refCount++,e.pooledCache=t,t.refCount++,d.memoizedState={element:i,isDehydrated:n,cache:t},wa(d),e}function B2(e){return e?(e=Fl,e):Fl}function P2(e,t,n,i,s,d){s=B2(s),i.context===null?i.context=s:i.pendingContext=s,i=Ui(t),i.payload={element:n},d=d===void 0?null:d,d!==null&&(i.callback=d),n=Rn(e,i,t),n!==null&&(qa(n,e,t),wo(n,e,t))}function U2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Zh(e,t){U2(e,t),(e=e.alternate)&&U2(e,t)}function F2(e){if(e.tag===13||e.tag===31){var t=ll(e,67108864);t!==null&&qa(t,e,67108864),Zh(e,67108864)}}function q2(e){if(e.tag===13||e.tag===31){var t=ar();t=fs(t);var n=ll(e,t);n!==null&&qa(n,e,t),Zh(e,t)}}var Uc=!0;function gb(e,t,n,i){var s=Ee.T;Ee.T=null;var d=qe.p;try{qe.p=2,Qh(e,t,n,i)}finally{qe.p=d,Ee.T=s}}function mb(e,t,n,i){var s=Ee.T;Ee.T=null;var d=qe.p;try{qe.p=8,Qh(e,t,n,i)}finally{qe.p=d,Ee.T=s}}function Qh(e,t,n,i){if(Uc){var s=Kh(i);if(s===null)Oh(e,t,i,qf,n),H2(e,i);else if(bb(s,e,t,n,i))i.stopPropagation();else if(H2(e,i),t&4&&-1<vb.indexOf(e)){for(;s!==null;){var d=Vi(s);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var N=aa(d.pendingLanes);if(N!==0){var O=d;for(O.pendingLanes|=2,O.entangledLanes|=2;N;){var J=1<<31-Gn(N);O.entanglements[1]|=J,N&=~J}Do(d),(rn&6)===0&&(Cf=ft()+500,Eu(0))}}break;case 31:case 13:O=ll(d,2),O!==null&&qa(O,d,2),Lf(),Zh(d,2)}if(d=Kh(i),d===null&&Oh(e,t,i,qf,n),d===s)break;s=d}s!==null&&i.stopPropagation()}else Oh(e,t,i,null,n)}}function Kh(e){return e=yr(e),Jh(e)}var qf=null;function Jh(e){if(qf=null,e=fr(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===31){if(e=p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qf=e,null}function I2(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case Cn:return 2;case Ft:return 8;case yt:case en:return 32;case lo:return 268435456;default:return 32}default:return 32}}var Wh=!1,ns=null,is=null,as=null,zu=new Map,Bu=new Map,rs=[],vb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function H2(e,t){switch(e){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":zu.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bu.delete(t.pointerId)}}function Pu(e,t,n,i,s,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:d,targetContainers:[s]},t!==null&&(t=Vi(t),t!==null&&F2(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function bb(e,t,n,i,s){switch(t){case"focusin":return ns=Pu(ns,e,t,n,i,s),!0;case"dragenter":return is=Pu(is,e,t,n,i,s),!0;case"mouseover":return as=Pu(as,e,t,n,i,s),!0;case"pointerover":var d=s.pointerId;return zu.set(d,Pu(zu.get(d)||null,e,t,n,i,s)),!0;case"gotpointercapture":return d=s.pointerId,Bu.set(d,Pu(Bu.get(d)||null,e,t,n,i,s)),!0}return!1}function V2(e){var t=fr(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,hs(e.priority,function(){q2(n)});return}}else if(t===31){if(t=p(n),t!==null){e.blockedOn=t,hs(e.priority,function(){q2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function If(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kh(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Xo=i,n.target.dispatchEvent(i),Xo=null}else return t=Vi(n),t!==null&&F2(t),e.blockedOn=n,!1;t.shift()}return!0}function G2(e,t,n){If(e)&&n.delete(t)}function yb(){Wh=!1,ns!==null&&If(ns)&&(ns=null),is!==null&&If(is)&&(is=null),as!==null&&If(as)&&(as=null),zu.forEach(G2),Bu.forEach(G2)}function Hf(e,t){e.blockedOn===t&&(e.blockedOn=null,Wh||(Wh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,yb)))}var Vf=null;function Y2(e){Vf!==e&&(Vf=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vf===e&&(Vf=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Jh(i||n)===null)continue;break}var d=Vi(n);d!==null&&(e.splice(t,3),t-=3,Md(d,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fc(e){function t(J){return Hf(J,e)}ns!==null&&Hf(ns,e),is!==null&&Hf(is,e),as!==null&&Hf(as,e),zu.forEach(t),Bu.forEach(t);for(var n=0;n<rs.length;n++){var i=rs[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<rs.length&&(n=rs[0],n.blockedOn===null);)V2(n),n.blockedOn===null&&rs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],d=n[i+1],N=s[Ai]||null;if(typeof d=="function")N||Y2(n);else if(N){var O=null;if(d&&d.hasAttribute("formAction")){if(s=d,N=d[Ai]||null)O=N.formAction;else if(Jh(s)!==null)continue}else O=N.action;typeof O=="function"?n[i+1]=O:(n.splice(i,3),i-=3),Y2(n)}}}function X2(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(N){return s=N})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function $h(e){this._internalRoot=e}Gf.prototype.render=$h.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,i=ar();P2(n,i,e,t,null,null)},Gf.prototype.unmount=$h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;P2(e.current,2,null,e,null,null),Lf(),t[cr]=null}};function Gf(e){this._internalRoot=e}Gf.prototype.unstable_scheduleHydration=function(e){if(e){var t=ds();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rs.length&&t!==0&&t<rs[n].priority;n++);rs.splice(n,0,e),n===0&&V2(e)}};var Z2=a.version;if(Z2!=="19.3.0")throw Error(l(527,Z2,"19.3.0"));qe.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=b(t),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var xb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Ee,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yf.isDisabled&&Yf.supportsFiber)try{ia=Yf.inject(xb),lt=Yf}catch{}}return Fu.createRoot=function(e,t){if(!f(e))throw Error(l(299));var n=!1,i="",s=Bp,d=Pp,N=Up;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(d=t.onCaughtError),t.onRecoverableError!==void 0&&(N=t.onRecoverableError)),t=z2(e,1,!1,null,null,n,i,null,s,d,N,X2),e[cr]=t.current,Lh(e),new $h(t)},Fu.hydrateRoot=function(e,t,n){if(!f(e))throw Error(l(299));var i=!1,s="",d=Bp,N=Pp,O=Up,J=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(d=n.onUncaughtError),n.onCaughtError!==void 0&&(N=n.onCaughtError),n.onRecoverableError!==void 0&&(O=n.onRecoverableError),n.formState!==void 0&&(J=n.formState)),t=z2(e,1,!0,t,n??null,i,s,J,d,N,O,X2),t.context=B2(null),n=t.current,i=ar(),i=fs(i),s=Ui(i),s.callback=null,Rn(n,s,i),n=i,t.current.lanes=n,la(t,n),Do(t),e[cr]=t.current,Lh(e),new Gf(t)},Fu.version="19.3.0",Fu}var a5;function kb(){if(a5)return n1.exports;a5=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(a){console.error(a)}}return o(),n1.exports=Db(),n1.exports}var Mb=kb();const Rb="modulepreload",jb=function(o,a){return new URL(o,a).href},r5={},o1=function(a,r,l){let f=Promise.resolve();if(r&&r.length>0){let m=function(x){return Promise.all(x.map(A=>Promise.resolve(A).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};const p=document.getElementsByTagName("link"),g=document.querySelector("meta[property=csp-nonce]"),b=(g==null?void 0:g.nonce)||(g==null?void 0:g.getAttribute("nonce"));f=m(r.map(x=>{if(x=jb(x,l),x in r5)return;r5[x]=!0;const A=x.endsWith(".css"),L=A?'[rel="stylesheet"]':"";if(!!l)for(let U=p.length-1;U>=0;U--){const k=p[U];if(k.href===x&&(!A||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${x}"]${L}`))return;const F=document.createElement("link");if(F.rel=A?"stylesheet":Rb,A||(F.as="script"),F.crossOrigin="",F.href=x,b&&F.setAttribute("nonce",b),document.head.appendChild(F),A)return new Promise((U,k)=>{F.addEventListener("load",U),F.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${x}`)))})}))}function u(m){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=m,window.dispatchEvent(p),!p.defaultPrevented)throw m}return f.then(m=>{for(const p of m||[])p.status==="rejected"&&u(p.reason);return a().catch(u)})};function xn(o){"@babel/helpers - typeof";return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},xn(o)}var ao=Uint8Array,lr=Uint16Array,Y1=Int32Array,X1=new ao([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Z1=new ao([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),o5=new ao([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ig=function(o,a){for(var r=new lr(31),l=0;l<31;++l)r[l]=a+=1<<o[l-1];for(var f=new Y1(r[30]),l=1;l<30;++l)for(var u=r[l];u<r[l+1];++u)f[u]=u-r[l]<<5|l;return{b:r,r:f}},Hg=Ig(X1,2),zb=Hg.b,D1=Hg.r;zb[28]=258,D1[258]=28;var Bb=Ig(Z1,0),l5=Bb.r,k1=new lr(32768);for(var Fn=0;Fn<32768;++Fn){var ls=(Fn&43690)>>1|(Fn&21845)<<1;ls=(ls&52428)>>2|(ls&13107)<<2,ls=(ls&61680)>>4|(ls&3855)<<4,k1[Fn]=((ls&65280)>>8|(ls&255)<<8)>>1}var Vu=(function(o,a,r){for(var l=o.length,f=0,u=new lr(a);f<l;++f)o[f]&&++u[o[f]-1];var m=new lr(a);for(f=1;f<a;++f)m[f]=m[f-1]+u[f-1]<<1;var p;if(r){p=new lr(1<<a);var g=15-a;for(f=0;f<l;++f)if(o[f])for(var b=f<<4|o[f],x=a-o[f],A=m[o[f]-1]++<<x,L=A|(1<<x)-1;A<=L;++A)p[k1[A]>>g]=b}else for(p=new lr(l),f=0;f<l;++f)o[f]&&(p[f]=k1[m[o[f]-1]++]>>15-o[f]);return p}),qs=new ao(288);for(var Fn=0;Fn<144;++Fn)qs[Fn]=8;for(var Fn=144;Fn<256;++Fn)qs[Fn]=9;for(var Fn=256;Fn<280;++Fn)qs[Fn]=7;for(var Fn=280;Fn<288;++Fn)qs[Fn]=8;var ud=new ao(32);for(var Fn=0;Fn<32;++Fn)ud[Fn]=5;var Pb=Vu(qs,9,0),Ub=Vu(ud,5,0),Vg=function(o){return(o+7)/8|0},Fb=function(o,a,r){return(r==null||r>o.length)&&(r=o.length),new ao(o.subarray(a,r))},bl=function(o,a,r){r<<=a&7;var l=a/8|0;o[l]|=r,o[l+1]|=r>>8},qu=function(o,a,r){r<<=a&7;var l=a/8|0;o[l]|=r,o[l+1]|=r>>8,o[l+2]|=r>>16},l1=function(o,a){for(var r=[],l=0;l<o.length;++l)o[l]&&r.push({s:l,f:o[l]});var f=r.length,u=r.slice();if(!f)return{t:Yg,l:0};if(f==1){var m=new ao(r[0].s+1);return m[r[0].s]=1,{t:m,l:1}}r.sort(function(pe,ke){return pe.f-ke.f}),r.push({s:-1,f:25001});var p=r[0],g=r[1],b=0,x=1,A=2;for(r[0]={s:-1,f:p.f+g.f,l:p,r:g};x!=f-1;)p=r[r[b].f<r[A].f?b++:A++],g=r[b!=x&&r[b].f<r[A].f?b++:A++],r[x++]={s:-1,f:p.f+g.f,l:p,r:g};for(var L=u[0].s,l=1;l<f;++l)u[l].s>L&&(L=u[l].s);var w=new lr(L+1),F=M1(r[x-1],w,0);if(F>a){var l=0,U=0,k=F-a,j=1<<k;for(u.sort(function(ke,ye){return w[ye.s]-w[ke.s]||ke.f-ye.f});l<f;++l){var ne=u[l].s;if(w[ne]>a)U+=j-(1<<F-w[ne]),w[ne]=a;else break}for(U>>=k;U>0;){var te=u[l].s;w[te]<a?U-=1<<a-w[te]++-1:++l}for(;l>=0&&U;--l){var W=u[l].s;w[W]==a&&(--w[W],++U)}F=a}return{t:new ao(w),l:F}},M1=function(o,a,r){return o.s==-1?Math.max(M1(o.l,a,r+1),M1(o.r,a,r+1)):a[o.s]=r},s5=function(o){for(var a=o.length;a&&!o[--a];);for(var r=new lr(++a),l=0,f=o[0],u=1,m=function(g){r[l++]=g},p=1;p<=a;++p)if(o[p]==f&&p!=a)++u;else{if(!f&&u>2){for(;u>138;u-=138)m(32754);u>2&&(m(u>10?u-11<<5|28690:u-3<<5|12305),u=0)}else if(u>3){for(m(f),--u;u>6;u-=6)m(8304);u>2&&(m(u-3<<5|8208),u=0)}for(;u--;)m(f);u=1,f=o[p]}return{c:r.subarray(0,l),n:a}},Iu=function(o,a){for(var r=0,l=0;l<a.length;++l)r+=o[l]*a[l];return r},Gg=function(o,a,r){var l=r.length,f=Vg(a+2);o[f]=l&255,o[f+1]=l>>8,o[f+2]=o[f]^255,o[f+3]=o[f+1]^255;for(var u=0;u<l;++u)o[f+u+4]=r[u];return(f+4+l)*8},c5=function(o,a,r,l,f,u,m,p,g,b,x){bl(a,x++,r),++f[256];for(var A=l1(f,15),L=A.t,w=A.l,F=l1(u,15),U=F.t,k=F.l,j=s5(L),ne=j.c,te=j.n,W=s5(U),pe=W.c,ke=W.n,ye=new lr(19),oe=0;oe<ne.length;++oe)++ye[ne[oe]&31];for(var oe=0;oe<pe.length;++oe)++ye[pe[oe]&31];for(var K=l1(ye,7),ve=K.t,E=K.l,B=19;B>4&&!ve[o5[B-1]];--B);var X=b+5<<3,Q=Iu(f,qs)+Iu(u,ud)+m,le=Iu(f,L)+Iu(u,U)+m+14+3*B+Iu(ye,ve)+2*ye[16]+3*ye[17]+7*ye[18];if(g>=0&&X<=Q&&X<=le)return Gg(a,x,o.subarray(g,g+b));var ee,ue,re,Ce;if(bl(a,x,1+(le<Q)),x+=2,le<Q){ee=Vu(L,w,0),ue=L,re=Vu(U,k,0),Ce=U;var ze=Vu(ve,E,0);bl(a,x,te-257),bl(a,x+5,ke-1),bl(a,x+10,B-4),x+=14;for(var oe=0;oe<B;++oe)bl(a,x+3*oe,ve[o5[oe]]);x+=3*B;for(var Be=[ne,pe],R=0;R<2;++R)for(var Z=Be[R],oe=0;oe<Z.length;++oe){var _=Z[oe]&31;bl(a,x,ze[_]),x+=ve[_],_>15&&(bl(a,x,Z[oe]>>5&127),x+=Z[oe]>>12)}}else ee=Pb,ue=qs,re=Ub,Ce=ud;for(var oe=0;oe<p;++oe){var I=l[oe];if(I>255){var _=I>>18&31;qu(a,x,ee[_+257]),x+=ue[_+257],_>7&&(bl(a,x,I>>23&31),x+=X1[_]);var $=I&31;qu(a,x,re[$]),x+=Ce[$],$>3&&(qu(a,x,I>>5&8191),x+=Z1[$])}else qu(a,x,ee[I]),x+=ue[I]}return qu(a,x,ee[256]),x+ue[256]},qb=new Y1([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Yg=new ao(0),Ib=function(o,a,r,l,f,u){var m=u.z||o.length,p=new ao(l+m+5*(1+Math.ceil(m/7e3))+f),g=p.subarray(l,p.length-f),b=u.l,x=(u.r||0)&7;if(a){x&&(g[0]=u.r>>3);for(var A=qb[a-1],L=A>>13,w=A&8191,F=(1<<r)-1,U=u.p||new lr(32768),k=u.h||new lr(F+1),j=Math.ceil(r/3),ne=2*j,te=function(dt){return(o[dt]^o[dt+1]<<j^o[dt+2]<<ne)&F},W=new Y1(25e3),pe=new lr(288),ke=new lr(32),ye=0,oe=0,K=u.i||0,ve=0,E=u.w||0,B=0;K+2<m;++K){var X=te(K),Q=K&32767,le=k[X];if(U[Q]=le,k[X]=Q,E<=K){var ee=m-K;if((ye>7e3||ve>24576)&&(ee>423||!b)){x=c5(o,g,0,W,pe,ke,oe,ve,B,K-B,x),ve=ye=oe=0,B=K;for(var ue=0;ue<286;++ue)pe[ue]=0;for(var ue=0;ue<30;++ue)ke[ue]=0}var re=2,Ce=0,ze=w,Be=Q-le&32767;if(ee>2&&X==te(K-Be))for(var R=Math.min(L,ee)-1,Z=Math.min(32767,K),_=Math.min(258,ee);Be<=Z&&--ze&&Q!=le;){if(o[K+re]==o[K+re-Be]){for(var I=0;I<_&&o[K+I]==o[K+I-Be];++I);if(I>re){if(re=I,Ce=Be,I>R)break;for(var $=Math.min(Be,I-2),ae=0,ue=0;ue<$;++ue){var we=K-Be+ue&32767,Se=U[we],Oe=we-Se&32767;Oe>ae&&(ae=Oe,le=we)}}}Q=le,le=U[Q],Be+=Q-le&32767}if(Ce){W[ve++]=268435456|D1[re]<<18|l5[Ce];var Ee=D1[re]&31,qe=l5[Ce]&31;oe+=X1[Ee]+Z1[qe],++pe[257+Ee],++ke[qe],E=K+re,++ye}else W[ve++]=o[K],++pe[o[K]]}}for(K=Math.max(K,E);K<m;++K)W[ve++]=o[K],++pe[o[K]];x=c5(o,g,b,W,pe,ke,oe,ve,B,K-B,x),b||(u.r=x&7|g[x/8|0]<<3,x-=7,u.h=k,u.p=U,u.i=K,u.w=E)}else{for(var K=u.w||0;K<m+b;K+=65535){var Qe=K+65535;Qe>=m&&(g[x/8|0]=b,Qe=m),x=Gg(g,x+1,o.subarray(K,Qe))}u.i=m}return Fb(p,0,l+Vg(x)+f)},Xg=function(){var o=1,a=0;return{p:function(r){for(var l=o,f=a,u=r.length|0,m=0;m!=u;){for(var p=Math.min(m+2655,u);m<p;++m)f+=l+=r[m];l=(l&65535)+15*(l>>16),f=(f&65535)+15*(f>>16)}o=l,a=f},d:function(){return o%=65521,a%=65521,(o&255)<<24|(o&65280)<<8|(a&255)<<8|a>>8}}},Hb=function(o,a,r,l,f){if(!f&&(f={l:1},a.dictionary)){var u=a.dictionary.subarray(-32768),m=new ao(u.length+o.length);m.set(u),m.set(o,u.length),o=m,f.w=u.length}return Ib(o,a.level==null?6:a.level,a.mem==null?f.l?Math.ceil(Math.max(8,Math.min(13,Math.log(o.length)))*1.5):20:12+a.mem,r,l,f)},Zg=function(o,a,r){for(;r;++a)o[a]=r,r>>>=8},Vb=function(o,a){var r=a.level,l=r==0?0:r<6?1:r==9?3:2;if(o[0]=120,o[1]=l<<6|(a.dictionary&&32),o[1]|=31-(o[0]<<8|o[1])%31,a.dictionary){var f=Xg();f.p(a.dictionary),Zg(o,2,f.d())}};function R1(o,a){a||(a={});var r=Xg();r.p(o);var l=Hb(o,a,a.dictionary?6:2,4);return Vb(l,a),Zg(l,l.length-4,r.d()),l}var Gb=typeof TextDecoder<"u"&&new TextDecoder,Yb=0;try{Gb.decode(Yg,{stream:!0}),Yb=1}catch{}function Xb(o){if(Array.isArray(o))return o}function Zb(o,a){var r=o==null?null:typeof Symbol<"u"&&o[Symbol.iterator]||o["@@iterator"];if(r!=null){var l,f,u,m,p=[],g=!0,b=!1;try{if(u=(r=r.call(o)).next,a!==0)for(;!(g=(l=u.call(r)).done)&&(p.push(l.value),p.length!==a);g=!0);}catch(x){b=!0,f=x}finally{try{if(!g&&r.return!=null&&(m=r.return(),Object(m)!==m))return}finally{if(b)throw f}}return p}}function u5(o,a){(a==null||a>o.length)&&(a=o.length);for(var r=0,l=Array(a);r<a;r++)l[r]=o[r];return l}function Qb(o,a){if(o){if(typeof o=="string")return u5(o,a);var r={}.toString.call(o).slice(8,-1);return r==="Object"&&o.constructor&&(r=o.constructor.name),r==="Map"||r==="Set"?Array.from(o):r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u5(o,a):void 0}}function Kb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f5(o,a){return Xb(o)||Zb(o,a)||Qb(o,a)||Kb()}function d5(o,a="utf8"){return new TextDecoder(a).decode(o)}const Jb=new TextEncoder;function Wb(o){return Jb.encode(o)}const $b=1024*8,ey=(()=>{const o=new Uint8Array(4),a=new Uint32Array(o.buffer);return!((a[0]=1)&o[0])})(),s1={int8:globalThis.Int8Array,uint8:globalThis.Uint8Array,int16:globalThis.Int16Array,uint16:globalThis.Uint16Array,int32:globalThis.Int32Array,uint32:globalThis.Uint32Array,uint64:globalThis.BigUint64Array,int64:globalThis.BigInt64Array,float32:globalThis.Float32Array,float64:globalThis.Float64Array};class Q1{constructor(a=$b,r={}){yn(this,"buffer");yn(this,"byteLength");yn(this,"byteOffset");yn(this,"length");yn(this,"offset");yn(this,"lastWrittenByte");yn(this,"littleEndian");yn(this,"_data");yn(this,"_mark");yn(this,"_marks");let l=!1;typeof a=="number"?a=new ArrayBuffer(a):(l=!0,this.lastWrittenByte=a.byteLength);const f=r.offset?r.offset>>>0:0,u=a.byteLength-f;let m=f;(ArrayBuffer.isView(a)||a instanceof Q1)&&(a.byteLength!==a.buffer.byteLength&&(m=a.byteOffset+f),a=a.buffer),l?this.lastWrittenByte=u:this.lastWrittenByte=0,this.buffer=a,this.length=u,this.byteLength=u,this.byteOffset=m,this.offset=0,this.littleEndian=!0,this._data=new DataView(this.buffer,m,u),this._mark=0,this._marks=[]}available(a=1){return this.offset+a<=this.length}isLittleEndian(){return this.littleEndian}setLittleEndian(){return this.littleEndian=!0,this}isBigEndian(){return!this.littleEndian}setBigEndian(){return this.littleEndian=!1,this}skip(a=1){return this.offset+=a,this}back(a=1){return this.offset-=a,this}seek(a){return this.offset=a,this}mark(){return this._mark=this.offset,this}reset(){return this.offset=this._mark,this}pushMark(){return this._marks.push(this.offset),this}popMark(){const a=this._marks.pop();if(a===void 0)throw new Error("Mark stack empty");return this.seek(a),this}rewind(){return this.offset=0,this}ensureAvailable(a=1){if(!this.available(a)){const l=(this.offset+a)*2,f=new Uint8Array(l);f.set(new Uint8Array(this.buffer)),this.buffer=f.buffer,this.length=l,this.byteLength=l,this._data=new DataView(this.buffer)}return this}readBoolean(){return this.readUint8()!==0}readInt8(){return this._data.getInt8(this.offset++)}readUint8(){return this._data.getUint8(this.offset++)}readByte(){return this.readUint8()}readBytes(a=1){return this.readArray(a,"uint8")}readArray(a,r){const l=s1[r].BYTES_PER_ELEMENT*a,f=this.byteOffset+this.offset,u=this.buffer.slice(f,f+l);if(this.littleEndian===ey&&r!=="uint8"&&r!=="int8"){const p=new Uint8Array(this.buffer.slice(f,f+l));p.reverse();const g=new s1[r](p.buffer);return this.offset+=l,g.reverse(),g}const m=new s1[r](u);return this.offset+=l,m}readInt16(){const a=this._data.getInt16(this.offset,this.littleEndian);return this.offset+=2,a}readUint16(){const a=this._data.getUint16(this.offset,this.littleEndian);return this.offset+=2,a}readInt32(){const a=this._data.getInt32(this.offset,this.littleEndian);return this.offset+=4,a}readUint32(){const a=this._data.getUint32(this.offset,this.littleEndian);return this.offset+=4,a}readFloat32(){const a=this._data.getFloat32(this.offset,this.littleEndian);return this.offset+=4,a}readFloat64(){const a=this._data.getFloat64(this.offset,this.littleEndian);return this.offset+=8,a}readBigInt64(){const a=this._data.getBigInt64(this.offset,this.littleEndian);return this.offset+=8,a}readBigUint64(){const a=this._data.getBigUint64(this.offset,this.littleEndian);return this.offset+=8,a}readChar(){return String.fromCharCode(this.readInt8())}readChars(a=1){let r="";for(let l=0;l<a;l++)r+=this.readChar();return r}readUtf8(a=1){return d5(this.readBytes(a))}decodeText(a=1,r="utf8"){return d5(this.readBytes(a),r)}writeBoolean(a){return this.writeUint8(a?255:0),this}writeInt8(a){return this.ensureAvailable(1),this._data.setInt8(this.offset++,a),this._updateLastWrittenByte(),this}writeUint8(a){return this.ensureAvailable(1),this._data.setUint8(this.offset++,a),this._updateLastWrittenByte(),this}writeByte(a){return this.writeUint8(a)}writeBytes(a){this.ensureAvailable(a.length);for(let r=0;r<a.length;r++)this._data.setUint8(this.offset++,a[r]);return this._updateLastWrittenByte(),this}writeInt16(a){return this.ensureAvailable(2),this._data.setInt16(this.offset,a,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeUint16(a){return this.ensureAvailable(2),this._data.setUint16(this.offset,a,this.littleEndian),this.offset+=2,this._updateLastWrittenByte(),this}writeInt32(a){return this.ensureAvailable(4),this._data.setInt32(this.offset,a,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeUint32(a){return this.ensureAvailable(4),this._data.setUint32(this.offset,a,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat32(a){return this.ensureAvailable(4),this._data.setFloat32(this.offset,a,this.littleEndian),this.offset+=4,this._updateLastWrittenByte(),this}writeFloat64(a){return this.ensureAvailable(8),this._data.setFloat64(this.offset,a,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigInt64(a){return this.ensureAvailable(8),this._data.setBigInt64(this.offset,a,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeBigUint64(a){return this.ensureAvailable(8),this._data.setBigUint64(this.offset,a,this.littleEndian),this.offset+=8,this._updateLastWrittenByte(),this}writeChar(a){return this.writeUint8(a.charCodeAt(0))}writeChars(a){for(let r=0;r<a.length;r++)this.writeUint8(a.charCodeAt(r));return this}writeUtf8(a){return this.writeBytes(Wb(a))}toArray(){return new Uint8Array(this.buffer,this.byteOffset,this.lastWrittenByte)}getWrittenByteLength(){return this.lastWrittenByte-this.byteOffset}_updateLastWrittenByte(){this.offset>this.lastWrittenByte&&(this.lastWrittenByte=this.offset)}}function $c(o){let a=o.length;for(;--a>=0;)o[a]=0}const ty=3,ny=258,Qg=29,iy=256,ay=iy+1+Qg,Kg=30,ry=512,oy=new Array((ay+2)*2);$c(oy);const ly=new Array(Kg*2);$c(ly);const sy=new Array(ry);$c(sy);const cy=new Array(ny-ty+1);$c(cy);const uy=new Array(Qg);$c(uy);const fy=new Array(Kg);$c(fy);const dy=(o,a,r,l)=>{let f=o&65535|0,u=o>>>16&65535|0,m=0;for(;r!==0;){m=r>2e3?2e3:r,r-=m;do f=f+a[l++]|0,u=u+f|0;while(--m);f%=65521,u%=65521}return f|u<<16|0};var j1=dy;const hy=()=>{let o,a=[];for(var r=0;r<256;r++){o=r;for(var l=0;l<8;l++)o=o&1?3988292384^o>>>1:o>>>1;a[r]=o}return a},py=new Uint32Array(hy()),gy=(o,a,r,l)=>{const f=py,u=l+r;o^=-1;for(let m=l;m<u;m++)o=o>>>8^f[(o^a[m])&255];return o^-1};var ko=gy,z1={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Jg={Z_NO_FLUSH:0,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_DEFLATED:8};const my=(o,a)=>Object.prototype.hasOwnProperty.call(o,a);var vy=function(o){const a=Array.prototype.slice.call(arguments,1);for(;a.length;){const r=a.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const l in r)my(r,l)&&(o[l]=r[l])}}return o},by=o=>{let a=0;for(let l=0,f=o.length;l<f;l++)a+=o[l].length;const r=new Uint8Array(a);for(let l=0,f=0,u=o.length;l<u;l++){let m=o[l];r.set(m,f),f+=m.length}return r},Wg={assign:vy,flattenChunks:by};let $g=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{$g=!1}const Yu=new Uint8Array(256);for(let o=0;o<256;o++)Yu[o]=o>=252?6:o>=248?5:o>=240?4:o>=224?3:o>=192?2:1;Yu[254]=Yu[255]=1;var yy=o=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(o);let a,r,l,f,u,m=o.length,p=0;for(f=0;f<m;f++)r=o.charCodeAt(f),(r&64512)===55296&&f+1<m&&(l=o.charCodeAt(f+1),(l&64512)===56320&&(r=65536+(r-55296<<10)+(l-56320),f++)),p+=r<128?1:r<2048?2:r<65536?3:4;for(a=new Uint8Array(p),u=0,f=0;u<p;f++)r=o.charCodeAt(f),(r&64512)===55296&&f+1<m&&(l=o.charCodeAt(f+1),(l&64512)===56320&&(r=65536+(r-55296<<10)+(l-56320),f++)),r<128?a[u++]=r:r<2048?(a[u++]=192|r>>>6,a[u++]=128|r&63):r<65536?(a[u++]=224|r>>>12,a[u++]=128|r>>>6&63,a[u++]=128|r&63):(a[u++]=240|r>>>18,a[u++]=128|r>>>12&63,a[u++]=128|r>>>6&63,a[u++]=128|r&63);return a};const xy=(o,a)=>{if(a<65534&&o.subarray&&$g)return String.fromCharCode.apply(null,o.length===a?o:o.subarray(0,a));let r="";for(let l=0;l<a;l++)r+=String.fromCharCode(o[l]);return r};var wy=(o,a)=>{const r=a||o.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(o.subarray(0,a));let l,f;const u=new Array(r*2);for(f=0,l=0;l<r;){let m=o[l++];if(m<128){u[f++]=m;continue}let p=Yu[m];if(p>4){u[f++]=65533,l+=p-1;continue}for(m&=p===2?31:p===3?15:7;p>1&&l<r;)m=m<<6|o[l++]&63,p--;if(p>1){u[f++]=65533;continue}m<65536?u[f++]=m:(m-=65536,u[f++]=55296|m>>10&1023,u[f++]=56320|m&1023)}return xy(u,f)},Ny=(o,a)=>{a=a||o.length,a>o.length&&(a=o.length);let r=a-1;for(;r>=0&&(o[r]&192)===128;)r--;return r<0||r===0?a:r+Yu[o[r]]>a?r:a},B1={string2buf:yy,buf2string:wy,utf8border:Ny};function Sy(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Ay=Sy;const Xf=16209,_y=16191;var Cy=function(a,r){let l,f,u,m,p,g,b,x,A,L,w,F,U,k,j,ne,te,W,pe,ke,ye,oe,K,ve;const E=a.state;l=a.next_in,K=a.input,f=l+(a.avail_in-5),u=a.next_out,ve=a.output,m=u-(r-a.avail_out),p=u+(a.avail_out-257),g=E.dmax,b=E.wsize,x=E.whave,A=E.wnext,L=E.window,w=E.hold,F=E.bits,U=E.lencode,k=E.distcode,j=(1<<E.lenbits)-1,ne=(1<<E.distbits)-1;e:do{F<15&&(w+=K[l++]<<F,F+=8,w+=K[l++]<<F,F+=8),te=U[w&j];t:for(;;){if(W=te>>>24,w>>>=W,F-=W,W=te>>>16&255,W===0)ve[u++]=te&65535;else if(W&16){pe=te&65535,W&=15,W&&(F<W&&(w+=K[l++]<<F,F+=8),pe+=w&(1<<W)-1,w>>>=W,F-=W),F<15&&(w+=K[l++]<<F,F+=8,w+=K[l++]<<F,F+=8),te=k[w&ne];n:for(;;){if(W=te>>>24,w>>>=W,F-=W,W=te>>>16&255,W&16){if(ke=te&65535,W&=15,F<W&&(w+=K[l++]<<F,F+=8,F<W&&(w+=K[l++]<<F,F+=8)),ke+=w&(1<<W)-1,ke>g){a.msg="invalid distance too far back",E.mode=Xf;break e}if(w>>>=W,F-=W,W=u-m,ke>W){if(W=ke-W,W>x&&E.sane){a.msg="invalid distance too far back",E.mode=Xf;break e}if(ye=0,oe=L,A===0){if(ye+=b-W,W<pe){pe-=W;do ve[u++]=L[ye++];while(--W);ye=u-ke,oe=ve}}else if(A<W){if(ye+=b+A-W,W-=A,W<pe){pe-=W;do ve[u++]=L[ye++];while(--W);if(ye=0,A<pe){W=A,pe-=W;do ve[u++]=L[ye++];while(--W);ye=u-ke,oe=ve}}}else if(ye+=A-W,W<pe){pe-=W;do ve[u++]=L[ye++];while(--W);ye=u-ke,oe=ve}for(;pe>2;)ve[u++]=oe[ye++],ve[u++]=oe[ye++],ve[u++]=oe[ye++],pe-=3;pe&&(ve[u++]=oe[ye++],pe>1&&(ve[u++]=oe[ye++]))}else{ye=u-ke;do ve[u++]=ve[ye++],ve[u++]=ve[ye++],ve[u++]=ve[ye++],pe-=3;while(pe>2);pe&&(ve[u++]=ve[ye++],pe>1&&(ve[u++]=ve[ye++]))}}else if((W&64)===0){te=k[(te&65535)+(w&(1<<W)-1)];continue n}else{a.msg="invalid distance code",E.mode=Xf;break e}break}}else if((W&64)===0){te=U[(te&65535)+(w&(1<<W)-1)];continue t}else if(W&32){E.mode=_y;break e}else{a.msg="invalid literal/length code",E.mode=Xf;break e}break}}while(l<f&&u<p);pe=F>>3,l-=pe,F-=pe<<3,w&=(1<<F)-1,a.next_in=l,a.next_out=u,a.avail_in=l<f?5+(f-l):5-(l-f),a.avail_out=u<p?257+(p-u):257-(u-p),E.hold=w,E.bits=F};const qc=15,h5=852,p5=592,g5=0,c1=1,m5=2,Ty=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Ey=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),Ly=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Oy=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Dy=(o,a,r,l,f,u,m,p)=>{const g=p.bits;let b=0,x=0,A=0,L=0,w=0,F=0,U=0,k=0,j=0,ne=0,te,W,pe,ke,ye,oe=null,K;const ve=new Uint16Array(qc+1),E=new Uint16Array(qc+1);let B=null,X,Q,le;for(b=0;b<=qc;b++)ve[b]=0;for(x=0;x<l;x++)ve[a[r+x]]++;for(w=g,L=qc;L>=1&&ve[L]===0;L--);if(w>L&&(w=L),L===0)return f[u++]=1<<24|64<<16|0,f[u++]=1<<24|64<<16|0,p.bits=1,0;for(A=1;A<L&&ve[A]===0;A++);for(w<A&&(w=A),k=1,b=1;b<=qc;b++)if(k<<=1,k-=ve[b],k<0)return-1;if(k>0&&(o===g5||L!==1))return-1;for(E[1]=0,b=1;b<qc;b++)E[b+1]=E[b]+ve[b];for(x=0;x<l;x++)a[r+x]!==0&&(m[E[a[r+x]]++]=x);if(o===g5?(oe=B=m,K=20):o===c1?(oe=Ty,B=Ey,K=257):(oe=Ly,B=Oy,K=0),ne=0,x=0,b=A,ye=u,F=w,U=0,pe=-1,j=1<<w,ke=j-1,o===c1&&j>h5||o===m5&&j>p5)return 1;for(;;){X=b-U,m[x]+1<K?(Q=0,le=m[x]):m[x]>=K?(Q=B[m[x]-K],le=oe[m[x]-K]):(Q=96,le=0),te=1<<b-U,W=1<<F,A=W;do W-=te,f[ye+(ne>>U)+W]=X<<24|Q<<16|le|0;while(W!==0);for(te=1<<b-1;ne&te;)te>>=1;if(te!==0?(ne&=te-1,ne+=te):ne=0,x++,--ve[b]===0){if(b===L)break;b=a[r+m[x]]}if(b>w&&(ne&ke)!==pe){for(U===0&&(U=w),ye+=A,F=b-U,k=1<<F;F+U<L&&(k-=ve[F+U],!(k<=0));)F++,k<<=1;if(j+=1<<F,o===c1&&j>h5||o===m5&&j>p5)return 1;pe=ne&ke,f[pe]=w<<24|F<<16|ye-u|0}}return ne!==0&&(f[ye+ne]=b-U<<24|64<<16|0),p.bits=w,0};var Gu=Dy;const ky=0,em=1,tm=2,{Z_FINISH:v5,Z_BLOCK:My,Z_TREES:Zf,Z_OK:Is,Z_STREAM_END:Ry,Z_NEED_DICT:jy,Z_STREAM_ERROR:Dr,Z_DATA_ERROR:nm,Z_MEM_ERROR:im,Z_BUF_ERROR:zy,Z_DEFLATED:b5}=Jg,bd=16180,y5=16181,x5=16182,w5=16183,N5=16184,S5=16185,A5=16186,_5=16187,C5=16188,T5=16189,fd=16190,yl=16191,u1=16192,E5=16193,f1=16194,L5=16195,O5=16196,D5=16197,k5=16198,Qf=16199,Kf=16200,M5=16201,R5=16202,j5=16203,z5=16204,B5=16205,d1=16206,P5=16207,U5=16208,Hn=16209,am=16210,rm=16211,By=852,Py=592,Uy=15,Fy=Uy,F5=o=>(o>>>24&255)+(o>>>8&65280)+((o&65280)<<8)+((o&255)<<24);function qy(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Vs=o=>{if(!o)return 1;const a=o.state;return!a||a.strm!==o||a.mode<bd||a.mode>rm?1:0},om=o=>{if(Vs(o))return Dr;const a=o.state;return o.total_in=o.total_out=a.total=0,o.msg="",a.wrap&&(o.adler=a.wrap&1),a.mode=bd,a.last=0,a.havedict=0,a.flags=-1,a.dmax=32768,a.head=null,a.hold=0,a.bits=0,a.lencode=a.lendyn=new Int32Array(By),a.distcode=a.distdyn=new Int32Array(Py),a.sane=1,a.back=-1,Is},lm=o=>{if(Vs(o))return Dr;const a=o.state;return a.wsize=0,a.whave=0,a.wnext=0,om(o)},sm=(o,a)=>{let r;if(Vs(o))return Dr;const l=o.state;return a<0?(r=0,a=-a):(r=(a>>4)+5,a<48&&(a&=15)),a&&(a<8||a>15)?Dr:(l.window!==null&&l.wbits!==a&&(l.window=null),l.wrap=r,l.wbits=a,lm(o))},cm=(o,a)=>{if(!o)return Dr;const r=new qy;o.state=r,r.strm=o,r.window=null,r.mode=bd;const l=sm(o,a);return l!==Is&&(o.state=null),l},Iy=o=>cm(o,Fy);let q5=!0,h1,p1;const Hy=o=>{if(q5){h1=new Int32Array(512),p1=new Int32Array(32);let a=0;for(;a<144;)o.lens[a++]=8;for(;a<256;)o.lens[a++]=9;for(;a<280;)o.lens[a++]=7;for(;a<288;)o.lens[a++]=8;for(Gu(em,o.lens,0,288,h1,0,o.work,{bits:9}),a=0;a<32;)o.lens[a++]=5;Gu(tm,o.lens,0,32,p1,0,o.work,{bits:5}),q5=!1}o.lencode=h1,o.lenbits=9,o.distcode=p1,o.distbits=5},um=(o,a,r,l)=>{let f;const u=o.state;return u.window===null&&(u.window=new Uint8Array(1<<u.wbits)),u.wsize===0&&(u.wsize=1<<u.wbits,u.wnext=0,u.whave=0),l>=u.wsize?(u.window.set(a.subarray(r-u.wsize,r),0),u.wnext=0,u.whave=u.wsize):(f=u.wsize-u.wnext,f>l&&(f=l),u.window.set(a.subarray(r-l,r-l+f),u.wnext),l-=f,l?(u.window.set(a.subarray(r-l,r),0),u.wnext=l,u.whave=u.wsize):(u.wnext+=f,u.wnext===u.wsize&&(u.wnext=0),u.whave<u.wsize&&(u.whave+=f))),0},Vy=(o,a)=>{let r,l,f,u,m,p,g,b,x,A,L,w,F,U,k=0,j,ne,te,W,pe,ke,ye,oe;const K=new Uint8Array(4);let ve,E;const B=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Vs(o)||!o.output||!o.input&&o.avail_in!==0)return Dr;r=o.state,r.mode===yl&&(r.mode=u1),m=o.next_out,f=o.output,g=o.avail_out,u=o.next_in,l=o.input,p=o.avail_in,b=r.hold,x=r.bits,A=p,L=g,oe=Is;e:for(;;)switch(r.mode){case bd:if(r.wrap===0){r.mode=u1;break}for(;x<16;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(r.wrap&2&&b===35615){r.wbits===0&&(r.wbits=15),r.check=0,K[0]=b&255,K[1]=b>>>8&255,r.check=ko(r.check,K,2,0),b=0,x=0,r.mode=y5;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((b&255)<<8)+(b>>8))%31){o.msg="incorrect header check",r.mode=Hn;break}if((b&15)!==b5){o.msg="unknown compression method",r.mode=Hn;break}if(b>>>=4,x-=4,ye=(b&15)+8,r.wbits===0&&(r.wbits=ye),ye>15||ye>r.wbits){o.msg="invalid window size",r.mode=Hn;break}r.dmax=1<<r.wbits,r.flags=0,o.adler=r.check=1,r.mode=b&512?T5:yl,b=0,x=0;break;case y5:for(;x<16;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(r.flags=b,(r.flags&255)!==b5){o.msg="unknown compression method",r.mode=Hn;break}if(r.flags&57344){o.msg="unknown header flags set",r.mode=Hn;break}r.head&&(r.head.text=b>>8&1),r.flags&512&&r.wrap&4&&(K[0]=b&255,K[1]=b>>>8&255,r.check=ko(r.check,K,2,0)),b=0,x=0,r.mode=x5;case x5:for(;x<32;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}r.head&&(r.head.time=b),r.flags&512&&r.wrap&4&&(K[0]=b&255,K[1]=b>>>8&255,K[2]=b>>>16&255,K[3]=b>>>24&255,r.check=ko(r.check,K,4,0)),b=0,x=0,r.mode=w5;case w5:for(;x<16;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}r.head&&(r.head.xflags=b&255,r.head.os=b>>8),r.flags&512&&r.wrap&4&&(K[0]=b&255,K[1]=b>>>8&255,r.check=ko(r.check,K,2,0)),b=0,x=0,r.mode=N5;case N5:if(r.flags&1024){for(;x<16;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}r.length=b,r.head&&(r.head.extra_len=b),r.flags&512&&r.wrap&4&&(K[0]=b&255,K[1]=b>>>8&255,r.check=ko(r.check,K,2,0)),b=0,x=0}else r.head&&(r.head.extra=null);r.mode=S5;case S5:if(r.flags&1024&&(w=r.length,w>p&&(w=p),w&&(r.head&&(ye=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(l.subarray(u,u+w),ye)),r.flags&512&&r.wrap&4&&(r.check=ko(r.check,l,w,u)),p-=w,u+=w,r.length-=w),r.length))break e;r.length=0,r.mode=A5;case A5:if(r.flags&2048){if(p===0)break e;w=0;do ye=l[u+w++],r.head&&ye&&r.length<65536&&(r.head.name+=String.fromCharCode(ye));while(ye&&w<p);if(r.flags&512&&r.wrap&4&&(r.check=ko(r.check,l,w,u)),p-=w,u+=w,ye)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=_5;case _5:if(r.flags&4096){if(p===0)break e;w=0;do ye=l[u+w++],r.head&&ye&&r.length<65536&&(r.head.comment+=String.fromCharCode(ye));while(ye&&w<p);if(r.flags&512&&r.wrap&4&&(r.check=ko(r.check,l,w,u)),p-=w,u+=w,ye)break e}else r.head&&(r.head.comment=null);r.mode=C5;case C5:if(r.flags&512){for(;x<16;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(r.wrap&4&&b!==(r.check&65535)){o.msg="header crc mismatch",r.mode=Hn;break}b=0,x=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),o.adler=r.check=0,r.mode=yl;break;case T5:for(;x<32;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}o.adler=r.check=F5(b),b=0,x=0,r.mode=fd;case fd:if(r.havedict===0)return o.next_out=m,o.avail_out=g,o.next_in=u,o.avail_in=p,r.hold=b,r.bits=x,jy;o.adler=r.check=1,r.mode=yl;case yl:if(a===My||a===Zf)break e;case u1:if(r.last){b>>>=x&7,x-=x&7,r.mode=d1;break}for(;x<3;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}switch(r.last=b&1,b>>>=1,x-=1,b&3){case 0:r.mode=E5;break;case 1:if(Hy(r),r.mode=Qf,a===Zf){b>>>=2,x-=2;break e}break;case 2:r.mode=O5;break;case 3:o.msg="invalid block type",r.mode=Hn}b>>>=2,x-=2;break;case E5:for(b>>>=x&7,x-=x&7;x<32;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if((b&65535)!==(b>>>16^65535)){o.msg="invalid stored block lengths",r.mode=Hn;break}if(r.length=b&65535,b=0,x=0,r.mode=f1,a===Zf)break e;case f1:r.mode=L5;case L5:if(w=r.length,w){if(w>p&&(w=p),w>g&&(w=g),w===0)break e;f.set(l.subarray(u,u+w),m),p-=w,u+=w,g-=w,m+=w,r.length-=w;break}r.mode=yl;break;case O5:for(;x<14;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(r.nlen=(b&31)+257,b>>>=5,x-=5,r.ndist=(b&31)+1,b>>>=5,x-=5,r.ncode=(b&15)+4,b>>>=4,x-=4,r.nlen>286||r.ndist>30){o.msg="too many length or distance symbols",r.mode=Hn;break}r.have=0,r.mode=D5;case D5:for(;r.have<r.ncode;){for(;x<3;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}r.lens[B[r.have++]]=b&7,b>>>=3,x-=3}for(;r.have<19;)r.lens[B[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,ve={bits:r.lenbits},oe=Gu(ky,r.lens,0,19,r.lencode,0,r.work,ve),r.lenbits=ve.bits,oe){o.msg="invalid code lengths set",r.mode=Hn;break}r.have=0,r.mode=k5;case k5:for(;r.have<r.nlen+r.ndist;){for(;k=r.lencode[b&(1<<r.lenbits)-1],j=k>>>24,ne=k>>>16&255,te=k&65535,!(j<=x);){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(te<16)b>>>=j,x-=j,r.lens[r.have++]=te;else{if(te===16){for(E=j+2;x<E;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(b>>>=j,x-=j,r.have===0){o.msg="invalid bit length repeat",r.mode=Hn;break}ye=r.lens[r.have-1],w=3+(b&3),b>>>=2,x-=2}else if(te===17){for(E=j+3;x<E;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}b>>>=j,x-=j,ye=0,w=3+(b&7),b>>>=3,x-=3}else{for(E=j+7;x<E;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}b>>>=j,x-=j,ye=0,w=11+(b&127),b>>>=7,x-=7}if(r.have+w>r.nlen+r.ndist){o.msg="invalid bit length repeat",r.mode=Hn;break}for(;w--;)r.lens[r.have++]=ye}}if(r.mode===Hn)break;if(r.lens[256]===0){o.msg="invalid code -- missing end-of-block",r.mode=Hn;break}if(r.lenbits=9,ve={bits:r.lenbits},oe=Gu(em,r.lens,0,r.nlen,r.lencode,0,r.work,ve),r.lenbits=ve.bits,oe){o.msg="invalid literal/lengths set",r.mode=Hn;break}if(r.distbits=6,r.distcode=r.distdyn,ve={bits:r.distbits},oe=Gu(tm,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,ve),r.distbits=ve.bits,oe){o.msg="invalid distances set",r.mode=Hn;break}if(r.mode=Qf,a===Zf)break e;case Qf:r.mode=Kf;case Kf:if(p>=6&&g>=258){o.next_out=m,o.avail_out=g,o.next_in=u,o.avail_in=p,r.hold=b,r.bits=x,Cy(o,L),m=o.next_out,f=o.output,g=o.avail_out,u=o.next_in,l=o.input,p=o.avail_in,b=r.hold,x=r.bits,r.mode===yl&&(r.back=-1);break}for(r.back=0;k=r.lencode[b&(1<<r.lenbits)-1],j=k>>>24,ne=k>>>16&255,te=k&65535,!(j<=x);){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(ne&&(ne&240)===0){for(W=j,pe=ne,ke=te;k=r.lencode[ke+((b&(1<<W+pe)-1)>>W)],j=k>>>24,ne=k>>>16&255,te=k&65535,!(W+j<=x);){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}b>>>=W,x-=W,r.back+=W}if(b>>>=j,x-=j,r.back+=j,r.length=te,ne===0){r.mode=B5;break}if(ne&32){r.back=-1,r.mode=yl;break}if(ne&64){o.msg="invalid literal/length code",r.mode=Hn;break}r.extra=ne&15,r.mode=M5;case M5:if(r.extra){for(E=r.extra;x<E;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}r.length+=b&(1<<r.extra)-1,b>>>=r.extra,x-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=R5;case R5:for(;k=r.distcode[b&(1<<r.distbits)-1],j=k>>>24,ne=k>>>16&255,te=k&65535,!(j<=x);){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if((ne&240)===0){for(W=j,pe=ne,ke=te;k=r.distcode[ke+((b&(1<<W+pe)-1)>>W)],j=k>>>24,ne=k>>>16&255,te=k&65535,!(W+j<=x);){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}b>>>=W,x-=W,r.back+=W}if(b>>>=j,x-=j,r.back+=j,ne&64){o.msg="invalid distance code",r.mode=Hn;break}r.offset=te,r.extra=ne&15,r.mode=j5;case j5:if(r.extra){for(E=r.extra;x<E;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}r.offset+=b&(1<<r.extra)-1,b>>>=r.extra,x-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){o.msg="invalid distance too far back",r.mode=Hn;break}r.mode=z5;case z5:if(g===0)break e;if(w=L-g,r.offset>w){if(w=r.offset-w,w>r.whave&&r.sane){o.msg="invalid distance too far back",r.mode=Hn;break}w>r.wnext?(w-=r.wnext,F=r.wsize-w):F=r.wnext-w,w>r.length&&(w=r.length),U=r.window}else U=f,F=m-r.offset,w=r.length;w>g&&(w=g),g-=w,r.length-=w;do f[m++]=U[F++];while(--w);r.length===0&&(r.mode=Kf);break;case B5:if(g===0)break e;f[m++]=r.length,g--,r.mode=Kf;break;case d1:if(r.wrap){for(;x<32;){if(p===0)break e;p--,b|=l[u++]<<x,x+=8}if(L-=g,o.total_out+=L,r.total+=L,r.wrap&4&&L&&(o.adler=r.check=r.flags?ko(r.check,f,L,m-L):j1(r.check,f,L,m-L)),L=g,r.wrap&4&&(r.flags?b:F5(b))!==r.check){o.msg="incorrect data check",r.mode=Hn;break}b=0,x=0}r.mode=P5;case P5:if(r.wrap&&r.flags){for(;x<32;){if(p===0)break e;p--,b+=l[u++]<<x,x+=8}if(r.wrap&4&&b!==(r.total&4294967295)){o.msg="incorrect length check",r.mode=Hn;break}b=0,x=0}r.mode=U5;case U5:oe=Ry;break e;case Hn:oe=nm;break e;case am:return im;case rm:default:return Dr}return o.next_out=m,o.avail_out=g,o.next_in=u,o.avail_in=p,r.hold=b,r.bits=x,(r.wsize||L!==o.avail_out&&r.mode<Hn&&(r.mode<d1||a!==v5))&&um(o,o.output,o.next_out,L-o.avail_out),A-=o.avail_in,L-=o.avail_out,o.total_in+=A,o.total_out+=L,r.total+=L,r.wrap&4&&L&&(o.adler=r.check=r.flags?ko(r.check,f,L,o.next_out-L):j1(r.check,f,L,o.next_out-L)),o.data_type=r.bits+(r.last?64:0)+(r.mode===yl?128:0)+(r.mode===Qf||r.mode===f1?256:0),(A===0&&L===0||a===v5)&&oe===Is&&(oe=zy),oe},Gy=o=>{if(Vs(o))return Dr;let a=o.state;return a.window&&(a.window=null),o.state=null,Is},Yy=(o,a)=>{if(Vs(o))return Dr;const r=o.state;return(r.wrap&2)===0?Dr:(r.head=a,a.done=!1,Is)},Xy=(o,a)=>{const r=a.length;let l,f,u;return Vs(o)||(l=o.state,l.wrap!==0&&l.mode!==fd)?Dr:l.mode===fd&&(f=1,f=j1(f,a,r,0),f!==l.check)?nm:(u=um(o,a,r,r),u?(l.mode=am,im):(l.havedict=1,Is))};var Zy=lm,Qy=sm,Ky=om,Jy=Iy,Wy=cm,$y=Vy,e3=Gy,t3=Yy,n3=Xy,i3="pako inflate (from Nodeca project)",Ro={inflateReset:Zy,inflateReset2:Qy,inflateResetKeep:Ky,inflateInit:Jy,inflateInit2:Wy,inflate:$y,inflateEnd:e3,inflateGetHeader:t3,inflateSetDictionary:n3,inflateInfo:i3};function a3(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var r3=a3;const fm=Object.prototype.toString,{Z_NO_FLUSH:o3,Z_FINISH:I5,Z_OK:Zc,Z_STREAM_END:g1,Z_NEED_DICT:m1,Z_STREAM_ERROR:l3,Z_DATA_ERROR:H5,Z_MEM_ERROR:s3,Z_BUF_ERROR:V5}=Jg,c3={chunkSize:1024*64,windowBits:15,to:""};function Zu(o){this.options=Wg.assign({},c3,o||{});const a=this.options;a.raw&&a.windowBits>=0&&a.windowBits<16&&(a.windowBits=-a.windowBits,a.windowBits===0&&(a.windowBits=-15)),a.windowBits>=0&&a.windowBits<16&&!(o&&o.windowBits)&&(a.windowBits+=32),a.windowBits>15&&a.windowBits<48&&(a.windowBits&15)===0&&(a.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Ay,this.strm.avail_out=0;let r=Ro.inflateInit2(this.strm,a.windowBits);if(r!==Zc)throw new Error(z1[r]);if(this.header=new r3,Ro.inflateGetHeader(this.strm,this.header),a.dictionary&&(typeof a.dictionary=="string"?a.dictionary=B1.string2buf(a.dictionary):fm.call(a.dictionary)==="[object ArrayBuffer]"&&(a.dictionary=new Uint8Array(a.dictionary)),a.raw&&(r=Ro.inflateSetDictionary(this.strm,a.dictionary),r!==Zc)))throw new Error(z1[r])}Zu.prototype.push=function(o,a){const r=this.strm,l=this.options.chunkSize,f=this.options.dictionary;let u,m,p;if(this.ended)return!1;for(a===~~a?m=a:m=a===!0?I5:o3,fm.call(o)==="[object ArrayBuffer]"?r.input=new Uint8Array(o):r.input=o,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(l),r.next_out=0,r.avail_out=l),u=Ro.inflate(r,m),u===m1&&f&&(u=Ro.inflateSetDictionary(r,f),u===Zc?u=Ro.inflate(r,m):u===H5&&(u=m1));r.avail_in>0&&u===g1&&r.state.wrap&2&&r.state.flags!==0&&r.input[r.next_in]!==0;)Ro.inflateReset(r),u=Ro.inflate(r,m);switch(u){case l3:case H5:case m1:case s3:return this.onEnd(u),this.ended=!0,!1}if(p=r.avail_out,r.next_out&&(r.avail_out===0||u===g1||m>0))if(this.options.to==="string"){let g=B1.utf8border(r.output,r.next_out),b=r.next_out-g,x=B1.buf2string(r.output,g);r.next_out=b,r.avail_out=l-b,b&&r.output.set(r.output.subarray(g,g+b),0),this.onData(x)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out)),r.avail_out=0,r.next_out=0;if(!((u===Zc||u===V5)&&p===0)){if(u===g1)return u=Ro.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,!0;if(r.avail_in===0){if(m===I5)return u=Ro.inflateEnd(this.strm),this.onEnd(u===Zc?V5:u),this.ended=!0,!1;break}}}return!0};Zu.prototype.onData=function(o){this.chunks.push(o)};Zu.prototype.onEnd=function(o){o===Zc&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Wg.flattenChunks(this.chunks)),this.chunks=[],this.err=o,this.msg=this.strm.msg};function u3(o,a){const r=new Zu(a);if(r.push(o,!0),r.err)throw r.msg||z1[r.err];return r.result}var f3=Zu,d3=u3,h3={Inflate:f3,inflate:d3};const{Inflate:p3,inflate:g3}=h3;var G5=p3,m3=g3;const dm=[];for(let o=0;o<256;o++){let a=o;for(let r=0;r<8;r++)a&1?a=3988292384^a>>>1:a=a>>>1;dm[o]=a}const Y5=4294967295;function v3(o,a,r){let l=o;for(let f=0;f<r;f++)l=dm[(l^a[f])&255]^l>>>8;return l}function b3(o,a){return(v3(Y5,o,a)^Y5)>>>0}function X5(o,a,r){const l=o.readUint32(),f=b3(new Uint8Array(o.buffer,o.byteOffset+o.offset-a-4,a),a);if(f!==l)throw new Error(`CRC mismatch for chunk ${r}. Expected ${l}, found ${f}`)}function hm(o,a,r){for(let l=0;l<r;l++)a[l]=o[l]}function pm(o,a,r,l){let f=0;for(;f<l;f++)a[f]=o[f];for(;f<r;f++)a[f]=o[f]+a[f-l]&255}function gm(o,a,r,l){let f=0;if(r.length===0)for(;f<l;f++)a[f]=o[f];else for(;f<l;f++)a[f]=o[f]+r[f]&255}function mm(o,a,r,l,f){let u=0;if(r.length===0){for(;u<f;u++)a[u]=o[u];for(;u<l;u++)a[u]=o[u]+(a[u-f]>>1)&255}else{for(;u<f;u++)a[u]=o[u]+(r[u]>>1)&255;for(;u<l;u++)a[u]=o[u]+(a[u-f]+r[u]>>1)&255}}function vm(o,a,r,l,f){let u=0;if(r.length===0){for(;u<f;u++)a[u]=o[u];for(;u<l;u++)a[u]=o[u]+a[u-f]&255}else{for(;u<f;u++)a[u]=o[u]+r[u]&255;for(;u<l;u++)a[u]=o[u]+y3(a[u-f],r[u],r[u-f])&255}}function y3(o,a,r){const l=o+a-r,f=Math.abs(l-o),u=Math.abs(l-a),m=Math.abs(l-r);return f<=u&&f<=m?o:u<=m?a:r}function x3(o,a,r,l,f,u){switch(o){case 0:hm(a,r,f);break;case 1:pm(a,r,f,u);break;case 2:gm(a,r,l,f);break;case 3:mm(a,r,l,f,u);break;case 4:vm(a,r,l,f,u);break;default:throw new Error(`Unsupported filter: ${o}`)}}const w3=new Uint16Array([255]),N3=new Uint8Array(w3.buffer),S3=N3[0]===255;function A3(o){const{data:a,width:r,height:l,channels:f,depth:u}=o,m=[{x:0,y:0,xStep:8,yStep:8},{x:4,y:0,xStep:8,yStep:8},{x:0,y:4,xStep:4,yStep:8},{x:2,y:0,xStep:4,yStep:4},{x:0,y:2,xStep:2,yStep:4},{x:1,y:0,xStep:2,yStep:2},{x:0,y:1,xStep:1,yStep:2}],p=Math.ceil(u/8)*f,g=new Uint8Array(l*r*p);let b=0;for(let x=0;x<7;x++){const A=m[x],L=Math.ceil((r-A.x)/A.xStep),w=Math.ceil((l-A.y)/A.yStep);if(L<=0||w<=0)continue;const F=L*p,U=new Uint8Array(F);for(let k=0;k<w;k++){const j=a[b++],ne=a.subarray(b,b+F);b+=F;const te=new Uint8Array(F);x3(j,ne,te,U,F,p),U.set(te);for(let W=0;W<L;W++){const pe=A.x+W*A.xStep,ke=A.y+k*A.yStep;if(!(pe>=r||ke>=l))for(let ye=0;ye<p;ye++)g[(ke*r+pe)*p+ye]=te[W*p+ye]}}}if(u===16){const x=new Uint16Array(g.buffer);if(S3)for(let A=0;A<x.length;A++)x[A]=_3(x[A]);return x}else return g}function _3(o){return(o&255)<<8|o>>8&255}const C3=new Uint16Array([255]),T3=new Uint8Array(C3.buffer),E3=T3[0]===255,L3=new Uint8Array(0);function Z5(o){const{data:a,width:r,height:l,channels:f,depth:u}=o,m=Math.ceil(u/8)*f,p=Math.ceil(u/8*f*r),g=new Uint8Array(l*p);let b=L3,x=0,A,L;for(let w=0;w<l;w++){switch(A=a.subarray(x+1,x+1+p),L=g.subarray(w*p,(w+1)*p),a[x]){case 0:hm(A,L,p);break;case 1:pm(A,L,p,m);break;case 2:gm(A,L,b,p);break;case 3:mm(A,L,b,p,m);break;case 4:vm(A,L,b,p,m);break;default:throw new Error(`Unsupported filter: ${a[x]}`)}b=L,x+=p+1}if(u===16){const w=new Uint16Array(g.buffer);if(E3)for(let F=0;F<w.length;F++)w[F]=O3(w[F]);return w}else return g}function O3(o){return(o&255)<<8|o>>8&255}const ad=Uint8Array.of(137,80,78,71,13,10,26,10);function Q5(o){if(!D3(o.readBytes(ad.length)))throw new Error("wrong PNG signature")}function D3(o){if(o.length<ad.length)return!1;for(let a=0;a<ad.length;a++)if(o[a]!==ad[a])return!1;return!0}const k3="tEXt",M3=0,bm=new TextDecoder("latin1");function R3(o){if(z3(o),o.length===0||o.length>79)throw new Error("keyword length must be between 1 and 79")}const j3=/^[\u0000-\u00FF]*$/;function z3(o){if(!j3.test(o))throw new Error("invalid latin1 text")}function B3(o,a,r){const l=ym(a);o[l]=P3(a,r-l.length-1)}function ym(o){for(o.mark();o.readByte()!==M3;);const a=o.offset;o.reset();const r=bm.decode(o.readBytes(a-o.offset-1));return o.skip(1),R3(r),r}function P3(o,a){return bm.decode(o.readBytes(a))}const or={UNKNOWN:-1,GREYSCALE:0,TRUECOLOUR:2,INDEXED_COLOUR:3,GREYSCALE_ALPHA:4,TRUECOLOUR_ALPHA:6},v1={UNKNOWN:-1,DEFLATE:0},K5={UNKNOWN:-1,ADAPTIVE:0},b1={UNKNOWN:-1,NO_INTERLACE:0,ADAM7:1},Jf={NONE:0,BACKGROUND:1,PREVIOUS:2},y1={SOURCE:0,OVER:1};class U3 extends Q1{constructor(r,l={}){super(r);yn(this,"_checkCrc");yn(this,"_inflator");yn(this,"_png");yn(this,"_apng");yn(this,"_end");yn(this,"_hasPalette");yn(this,"_palette");yn(this,"_hasTransparency");yn(this,"_transparency");yn(this,"_compressionMethod");yn(this,"_filterMethod");yn(this,"_interlaceMethod");yn(this,"_colorType");yn(this,"_isAnimated");yn(this,"_numberOfFrames");yn(this,"_numberOfPlays");yn(this,"_frames");yn(this,"_writingDataChunks");const{checkCrc:f=!1}=l;this._checkCrc=f,this._inflator=new G5,this._png={width:-1,height:-1,channels:-1,data:new Uint8Array(0),depth:1,text:{}},this._apng={width:-1,height:-1,channels:-1,depth:1,numberOfFrames:1,numberOfPlays:0,text:{},frames:[]},this._end=!1,this._hasPalette=!1,this._palette=[],this._hasTransparency=!1,this._transparency=new Uint16Array(0),this._compressionMethod=v1.UNKNOWN,this._filterMethod=K5.UNKNOWN,this._interlaceMethod=b1.UNKNOWN,this._colorType=or.UNKNOWN,this._isAnimated=!1,this._numberOfFrames=1,this._numberOfPlays=0,this._frames=[],this._writingDataChunks=!1,this.setBigEndian()}decode(){for(Q5(this);!this._end;){const r=this.readUint32(),l=this.readChars(4);this.decodeChunk(r,l)}return this.decodeImage(),this._png}decodeApng(){for(Q5(this);!this._end;){const r=this.readUint32(),l=this.readChars(4);this.decodeApngChunk(r,l)}return this.decodeApngImage(),this._apng}decodeChunk(r,l){const f=this.offset;switch(l){case"IHDR":this.decodeIHDR();break;case"PLTE":this.decodePLTE(r);break;case"IDAT":this.decodeIDAT(r);break;case"IEND":this._end=!0;break;case"tRNS":this.decodetRNS(r);break;case"iCCP":this.decodeiCCP(r);break;case k3:B3(this._png.text,this,r);break;case"pHYs":this.decodepHYs();break;default:this.skip(r);break}if(this.offset-f!==r)throw new Error(`Length mismatch while decoding chunk ${l}`);this._checkCrc?X5(this,r+4,l):this.skip(4)}decodeApngChunk(r,l){const f=this.offset;switch(l!=="fdAT"&&l!=="IDAT"&&this._writingDataChunks&&this.pushDataToFrame(),l){case"acTL":this.decodeACTL();break;case"fcTL":this.decodeFCTL();break;case"fdAT":this.decodeFDAT(r);break;default:this.decodeChunk(r,l),this.offset=f+r;break}if(this.offset-f!==r)throw new Error(`Length mismatch while decoding chunk ${l}`);this._checkCrc?X5(this,r+4,l):this.skip(4)}decodeIHDR(){const r=this._png;r.width=this.readUint32(),r.height=this.readUint32(),r.depth=F3(this.readUint8());const l=this.readUint8();this._colorType=l;let f;switch(l){case or.GREYSCALE:f=1;break;case or.TRUECOLOUR:f=3;break;case or.INDEXED_COLOUR:f=1;break;case or.GREYSCALE_ALPHA:f=2;break;case or.TRUECOLOUR_ALPHA:f=4;break;case or.UNKNOWN:default:throw new Error(`Unknown color type: ${l}`)}if(this._png.channels=f,this._compressionMethod=this.readUint8(),this._compressionMethod!==v1.DEFLATE)throw new Error(`Unsupported compression method: ${this._compressionMethod}`);this._filterMethod=this.readUint8(),this._interlaceMethod=this.readUint8()}decodeACTL(){this._numberOfFrames=this.readUint32(),this._numberOfPlays=this.readUint32(),this._isAnimated=!0}decodeFCTL(){const r={sequenceNumber:this.readUint32(),width:this.readUint32(),height:this.readUint32(),xOffset:this.readUint32(),yOffset:this.readUint32(),delayNumber:this.readUint16(),delayDenominator:this.readUint16(),disposeOp:this.readUint8(),blendOp:this.readUint8(),data:new Uint8Array(0)};this._frames.push(r)}decodePLTE(r){if(r%3!==0)throw new RangeError(`PLTE field length must be a multiple of 3. Got ${r}`);const l=r/3;this._hasPalette=!0;const f=[];this._palette=f;for(let u=0;u<l;u++)f.push([this.readUint8(),this.readUint8(),this.readUint8()])}decodeIDAT(r){this._writingDataChunks=!0;const l=r,f=this.offset+this.byteOffset;if(this._inflator.push(new Uint8Array(this.buffer,f,l)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodeFDAT(r){this._writingDataChunks=!0;let l=r,f=this.offset+this.byteOffset;if(f+=4,l-=4,this._inflator.push(new Uint8Array(this.buffer,f,l)),this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);this.skip(r)}decodetRNS(r){switch(this._colorType){case or.GREYSCALE:case or.TRUECOLOUR:{if(r%2!==0)throw new RangeError(`tRNS chunk length must be a multiple of 2. Got ${r}`);if(r/2>this._png.width*this._png.height)throw new Error(`tRNS chunk contains more alpha values than there are pixels (${r/2} vs ${this._png.width*this._png.height})`);this._hasTransparency=!0,this._transparency=new Uint16Array(r/2);for(let l=0;l<r/2;l++)this._transparency[l]=this.readUint16();break}case or.INDEXED_COLOUR:{if(r>this._palette.length)throw new Error(`tRNS chunk contains more alpha values than there are palette colors (${r} vs ${this._palette.length})`);let l=0;for(;l<r;l++){const f=this.readByte();this._palette[l].push(f)}for(;l<this._palette.length;l++)this._palette[l].push(255);break}case or.UNKNOWN:case or.GREYSCALE_ALPHA:case or.TRUECOLOUR_ALPHA:default:throw new Error(`tRNS chunk is not supported for color type ${this._colorType}`)}}decodeiCCP(r){const l=ym(this),f=this.readUint8();if(f!==v1.DEFLATE)throw new Error(`Unsupported iCCP compression method: ${f}`);const u=this.readBytes(r-l.length-2);this._png.iccEmbeddedProfile={name:l,profile:m3(u)}}decodepHYs(){const r=this.readUint32(),l=this.readUint32(),f=this.readByte();this._png.resolution={x:r,y:l,unit:f}}decodeApngImage(){this._apng.width=this._png.width,this._apng.height=this._png.height,this._apng.channels=this._png.channels,this._apng.depth=this._png.depth,this._apng.numberOfFrames=this._numberOfFrames,this._apng.numberOfPlays=this._numberOfPlays,this._apng.text=this._png.text,this._apng.resolution=this._png.resolution;for(let r=0;r<this._numberOfFrames;r++){const l={sequenceNumber:this._frames[r].sequenceNumber,delayNumber:this._frames[r].delayNumber,delayDenominator:this._frames[r].delayDenominator,data:this._apng.depth===8?new Uint8Array(this._apng.width*this._apng.height*this._apng.channels):new Uint16Array(this._apng.width*this._apng.height*this._apng.channels)},f=this._frames.at(r);if(f){if(f.data=Z5({data:f.data,width:f.width,height:f.height,channels:this._apng.channels,depth:this._apng.depth}),this._hasPalette&&(this._apng.palette=this._palette),this._hasTransparency&&(this._apng.transparency=this._transparency),r===0||f.xOffset===0&&f.yOffset===0&&f.width===this._png.width&&f.height===this._png.height)l.data=f.data;else{const u=this._apng.frames.at(r-1);this.disposeFrame(f,u,l),this.addFrameDataToCanvas(l,f)}this._apng.frames.push(l)}}return this._apng}disposeFrame(r,l,f){switch(r.disposeOp){case Jf.NONE:break;case Jf.BACKGROUND:for(let u=0;u<this._png.height;u++)for(let m=0;m<this._png.width;m++){const p=(u*r.width+m)*this._png.channels;for(let g=0;g<this._png.channels;g++)f.data[p+g]=0}break;case Jf.PREVIOUS:f.data.set(l.data);break;default:throw new Error("Unknown disposeOp")}}addFrameDataToCanvas(r,l){const f=1<<this._png.depth,u=(m,p)=>{const g=((m+l.yOffset)*this._png.width+l.xOffset+p)*this._png.channels,b=(m*l.width+p)*this._png.channels;return{index:g,frameIndex:b}};switch(l.blendOp){case y1.SOURCE:for(let m=0;m<l.height;m++)for(let p=0;p<l.width;p++){const{index:g,frameIndex:b}=u(m,p);for(let x=0;x<this._png.channels;x++)r.data[g+x]=l.data[b+x]}break;case y1.OVER:for(let m=0;m<l.height;m++)for(let p=0;p<l.width;p++){const{index:g,frameIndex:b}=u(m,p);for(let x=0;x<this._png.channels;x++){const A=l.data[b+this._png.channels-1]/f,L=x%(this._png.channels-1)===0?1:l.data[b+x],w=Math.floor(A*L+(1-A)*r.data[g+x]);r.data[g+x]+=w}}break;default:throw new Error("Unknown blendOp")}}decodeImage(){var l;if(this._inflator.err)throw new Error(`Error while decompressing the data: ${this._inflator.err}`);const r=this._isAnimated?((l=this._frames)==null?void 0:l.at(0)).data:this._inflator.result;if(this._filterMethod!==K5.ADAPTIVE)throw new Error(`Filter method ${this._filterMethod} not supported`);if(this._interlaceMethod===b1.NO_INTERLACE)this._png.data=Z5({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else if(this._interlaceMethod===b1.ADAM7)this._png.data=A3({data:r,width:this._png.width,height:this._png.height,channels:this._png.channels,depth:this._png.depth});else throw new Error(`Interlace method ${this._interlaceMethod} not supported`);this._hasPalette&&(this._png.palette=this._palette),this._hasTransparency&&(this._png.transparency=this._transparency)}pushDataToFrame(){const r=this._inflator.result,l=this._frames.at(-1);l?l.data=r:this._frames.push({sequenceNumber:0,width:this._png.width,height:this._png.height,xOffset:0,yOffset:0,delayNumber:0,delayDenominator:0,disposeOp:Jf.NONE,blendOp:y1.SOURCE,data:r}),this._inflator=new G5,this._writingDataChunks=!1}}function F3(o){if(o!==1&&o!==2&&o!==4&&o!==8&&o!==16)throw new Error(`invalid bit depth: ${o}`);return o}var J5;(function(o){o[o.UNKNOWN=0]="UNKNOWN",o[o.METRE=1]="METRE"})(J5||(J5={}));function q3(o,a){return new U3(o,a).decode()}var Et=(function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this})();function x1(){Et.console&&typeof Et.console.log=="function"&&Et.console.log.apply(Et.console,arguments)}var On={log:x1,warn:function(o){Et.console&&(typeof Et.console.warn=="function"?Et.console.warn.apply(Et.console,arguments):x1.call(null,arguments))},error:function(o){Et.console&&(typeof Et.console.error=="function"?Et.console.error.apply(Et.console,arguments):x1(o))}};function w1(o,a,r){var l=new XMLHttpRequest;l.open("GET",o),l.responseType="blob",l.onload=function(){Ps(l.response,a,r)},l.onerror=function(){On.error("could not download file")},l.send()}function W5(o){var a=new XMLHttpRequest;a.open("HEAD",o,!1);try{a.send()}catch{}return a.status>=200&&a.status<=299}function Wf(o){try{o.dispatchEvent(new MouseEvent("click"))}catch{var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),o.dispatchEvent(a)}}var Ps=Et.saveAs||((typeof window>"u"?"undefined":xn(window))!=="object"||window!==Et?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(o,a,r){var l=Et.URL||Et.webkitURL,f=document.createElement("a");a=a||o.name||"download",f.download=a,f.rel="noopener",typeof o=="string"?(f.href=o,f.origin!==location.origin?W5(f.href)?w1(o,a,r):Wf(f,f.target="_blank"):Wf(f)):(f.href=l.createObjectURL(o),setTimeout(function(){l.revokeObjectURL(f.href)},4e4),setTimeout(function(){Wf(f)},0))}:"msSaveOrOpenBlob"in navigator?function(o,a,r){if(a=a||o.name||"download",typeof o=="string")if(W5(o))w1(o,a,r);else{var l=document.createElement("a");l.href=o,l.target="_blank",setTimeout(function(){Wf(l)})}else navigator.msSaveOrOpenBlob((function(f,u){return u===void 0?u={autoBom:!1}:xn(u)!=="object"&&(On.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\uFEFF",f],{type:f.type}):f})(o,r),a)}:function(o,a,r,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),typeof o=="string")return w1(o,a,r);var f=o.type==="application/octet-stream",u=/constructor/i.test(Et.HTMLElement)||Et.safari,m=/CriOS\/[\d]+/.test(navigator.userAgent);if((m||f&&u)&&(typeof FileReader>"u"?"undefined":xn(FileReader))==="object"){var p=new FileReader;p.onloadend=function(){var x=p.result;x=m?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=x:location=x,l=null},p.readAsDataURL(o)}else{var g=Et.URL||Et.webkitURL,b=g.createObjectURL(o);l?l.location=b:location.href=b,l=null,setTimeout(function(){g.revokeObjectURL(b)},4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function xm(o){var a;o=o||"",this.ok=!1,o.charAt(0)=="#"&&(o=o.substr(1,6)),o={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[o=(o=o.replace(/ /g,"")).toLowerCase()]||o;for(var r=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(p){return[parseInt(p[1]),parseInt(p[2]),parseInt(p[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(p){return[parseInt(p[1],16),parseInt(p[2],16),parseInt(p[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(p){return[parseInt(p[1]+p[1],16),parseInt(p[2]+p[2],16),parseInt(p[3]+p[3],16)]}}],l=0;l<r.length;l++){var f=r[l].re,u=r[l].process,m=f.exec(o);m&&(a=u(m),this.r=a[0],this.g=a[1],this.b=a[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var p=this.r.toString(16),g=this.g.toString(16),b=this.b.toString(16);return p.length==1&&(p="0"+p),g.length==1&&(g="0"+g),b.length==1&&(b="0"+b),"#"+p+g+b}}var rd=Et.atob.bind(Et),$5=Et.btoa.bind(Et);/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function N1(o,a){var r=o[0],l=o[1],f=o[2],u=o[3];r=ha(r,l,f,u,a[0],7,-680876936),u=ha(u,r,l,f,a[1],12,-389564586),f=ha(f,u,r,l,a[2],17,606105819),l=ha(l,f,u,r,a[3],22,-1044525330),r=ha(r,l,f,u,a[4],7,-176418897),u=ha(u,r,l,f,a[5],12,1200080426),f=ha(f,u,r,l,a[6],17,-1473231341),l=ha(l,f,u,r,a[7],22,-45705983),r=ha(r,l,f,u,a[8],7,1770035416),u=ha(u,r,l,f,a[9],12,-1958414417),f=ha(f,u,r,l,a[10],17,-42063),l=ha(l,f,u,r,a[11],22,-1990404162),r=ha(r,l,f,u,a[12],7,1804603682),u=ha(u,r,l,f,a[13],12,-40341101),f=ha(f,u,r,l,a[14],17,-1502002290),r=pa(r,l=ha(l,f,u,r,a[15],22,1236535329),f,u,a[1],5,-165796510),u=pa(u,r,l,f,a[6],9,-1069501632),f=pa(f,u,r,l,a[11],14,643717713),l=pa(l,f,u,r,a[0],20,-373897302),r=pa(r,l,f,u,a[5],5,-701558691),u=pa(u,r,l,f,a[10],9,38016083),f=pa(f,u,r,l,a[15],14,-660478335),l=pa(l,f,u,r,a[4],20,-405537848),r=pa(r,l,f,u,a[9],5,568446438),u=pa(u,r,l,f,a[14],9,-1019803690),f=pa(f,u,r,l,a[3],14,-187363961),l=pa(l,f,u,r,a[8],20,1163531501),r=pa(r,l,f,u,a[13],5,-1444681467),u=pa(u,r,l,f,a[2],9,-51403784),f=pa(f,u,r,l,a[7],14,1735328473),r=ga(r,l=pa(l,f,u,r,a[12],20,-1926607734),f,u,a[5],4,-378558),u=ga(u,r,l,f,a[8],11,-2022574463),f=ga(f,u,r,l,a[11],16,1839030562),l=ga(l,f,u,r,a[14],23,-35309556),r=ga(r,l,f,u,a[1],4,-1530992060),u=ga(u,r,l,f,a[4],11,1272893353),f=ga(f,u,r,l,a[7],16,-155497632),l=ga(l,f,u,r,a[10],23,-1094730640),r=ga(r,l,f,u,a[13],4,681279174),u=ga(u,r,l,f,a[0],11,-358537222),f=ga(f,u,r,l,a[3],16,-722521979),l=ga(l,f,u,r,a[6],23,76029189),r=ga(r,l,f,u,a[9],4,-640364487),u=ga(u,r,l,f,a[12],11,-421815835),f=ga(f,u,r,l,a[15],16,530742520),r=ma(r,l=ga(l,f,u,r,a[2],23,-995338651),f,u,a[0],6,-198630844),u=ma(u,r,l,f,a[7],10,1126891415),f=ma(f,u,r,l,a[14],15,-1416354905),l=ma(l,f,u,r,a[5],21,-57434055),r=ma(r,l,f,u,a[12],6,1700485571),u=ma(u,r,l,f,a[3],10,-1894986606),f=ma(f,u,r,l,a[10],15,-1051523),l=ma(l,f,u,r,a[1],21,-2054922799),r=ma(r,l,f,u,a[8],6,1873313359),u=ma(u,r,l,f,a[15],10,-30611744),f=ma(f,u,r,l,a[6],15,-1560198380),l=ma(l,f,u,r,a[13],21,1309151649),r=ma(r,l,f,u,a[4],6,-145523070),u=ma(u,r,l,f,a[11],10,-1120210379),f=ma(f,u,r,l,a[2],15,718787259),l=ma(l,f,u,r,a[9],21,-343485551),o[0]=cs(r,o[0]),o[1]=cs(l,o[1]),o[2]=cs(f,o[2]),o[3]=cs(u,o[3])}function yd(o,a,r,l,f,u){return a=cs(cs(a,o),cs(l,u)),cs(a<<f|a>>>32-f,r)}function ha(o,a,r,l,f,u,m){return yd(a&r|~a&l,o,a,f,u,m)}function pa(o,a,r,l,f,u,m){return yd(a&l|r&~l,o,a,f,u,m)}function ga(o,a,r,l,f,u,m){return yd(a^r^l,o,a,f,u,m)}function ma(o,a,r,l,f,u,m){return yd(r^(a|~l),o,a,f,u,m)}function wm(o){var a,r=o.length,l=[1732584193,-271733879,-1732584194,271733878];for(a=64;a<=o.length;a+=64)N1(l,I3(o.substring(a-64,a)));o=o.substring(a-64);var f=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(a=0;a<o.length;a++)f[a>>2]|=o.charCodeAt(a)<<(a%4<<3);if(f[a>>2]|=128<<(a%4<<3),a>55)for(N1(l,f),a=0;a<16;a++)f[a]=0;return f[14]=8*r,N1(l,f),l}function I3(o){var a,r=[];for(a=0;a<64;a+=4)r[a>>2]=o.charCodeAt(a)+(o.charCodeAt(a+1)<<8)+(o.charCodeAt(a+2)<<16)+(o.charCodeAt(a+3)<<24);return r}var eg="0123456789abcdef".split("");function H3(o){for(var a="",r=0;r<4;r++)a+=eg[o>>8*r+4&15]+eg[o>>8*r&15];return a}function V3(o){return String.fromCharCode(255&o,(65280&o)>>8,(16711680&o)>>16,(4278190080&o)>>24)}function P1(o){return wm(o).map(V3).join("")}var G3=(function(o){for(var a=0;a<o.length;a++)o[a]=H3(o[a]);return o.join("")})(wm("hello"))!="5d41402abc4b2a76b9719d911017c592";function cs(o,a){if(G3){var r=(65535&o)+(65535&a);return(o>>16)+(a>>16)+(r>>16)<<16|65535&r}return o+a&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function U1(o,a){var r,l,f,u;if(o!==r){for(var m=(f=o,u=1+(256/o.length|0),new Array(u+1).join(f)),p=[],g=0;g<256;g++)p[g]=g;var b=0;for(g=0;g<256;g++){var x=p[g];b=(b+x+m.charCodeAt(g))%256,p[g]=p[b],p[b]=x}r=o,l=p}else p=l;var A=a.length,L=0,w=0,F="";for(g=0;g<A;g++)w=(w+(x=p[L=(L+1)%256]))%256,p[L]=p[w],p[w]=x,m=p[(p[L]+p[w])%256],F+=String.fromCharCode(a.charCodeAt(g)^m);return F}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var tg={print:4,modify:8,copy:16,"annot-forms":32};function Vc(o,a,r,l){this.v=1,this.r=2;var f=192;o.forEach(function(p){if(tg.perm!==void 0)throw new Error("Invalid permission: "+p);f+=tg[p]}),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var u=(a+this.padding).substr(0,32),m=(r+this.padding).substr(0,32);this.O=this.processOwnerPassword(u,m),this.P=-(1+(255^f)),this.encryptionKey=P1(u+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(l)).substr(0,5),this.U=U1(this.encryptionKey,this.padding)}function Gc(o){if(/[^\u0000-\u00ff]/.test(o))throw new Error("Invalid PDF Name Object: "+o+", Only accept ASCII characters.");for(var a="",r=o.length,l=0;l<r;l++){var f=o.charCodeAt(l);a+=f<33||f===35||f===37||f===40||f===41||f===47||f===60||f===62||f===91||f===93||f===123||f===125||f>126?"#"+("0"+f.toString(16)).slice(-2):o[l]}return a}function ng(o){if(xn(o)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var a={};this.subscribe=function(r,l,f){if(f=f||!1,typeof r!="string"||typeof l!="function"||typeof f!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");a.hasOwnProperty(r)||(a[r]={});var u=Math.random().toString(35);return a[r][u]=[l,!!f],u},this.unsubscribe=function(r){for(var l in a)if(a[l][r])return delete a[l][r],Object.keys(a[l]).length===0&&delete a[l],!0;return!1},this.publish=function(r){if(a.hasOwnProperty(r)){var l=Array.prototype.slice.call(arguments,1),f=[];for(var u in a[r]){var m=a[r][u];try{m[0].apply(o,l)}catch(p){Et.console&&On.error("jsPDF PubSub Error",p.message,p)}m[1]&&f.push(u)}f.length&&f.forEach(this.unsubscribe)}},this.getTopics=function(){return a}}function dd(o){if(!(this instanceof dd))return new dd(o);var a="opacity,stroke-opacity".split(",");for(var r in o)o.hasOwnProperty(r)&&a.indexOf(r)>=0&&(this[r]=o[r]);this.id="",this.objectNumber=-1}function Nm(o,a){this.gState=o,this.matrix=a,this.id="",this.objectNumber=-1}function Us(o,a,r,l,f){if(!(this instanceof Us))return new Us(o,a,r,l,f);this.type=o==="axial"?2:3,this.coords=a,this.colors=r,Nm.call(this,l,f)}function Xc(o,a,r,l,f){if(!(this instanceof Xc))return new Xc(o,a,r,l,f);this.boundingBox=o,this.xStep=a,this.yStep=r,this.stream="",this.cloneIndex=0,Nm.call(this,l,f)}function mt(o){var a,r=typeof arguments[0]=="string"?arguments[0]:"p",l=arguments[1],f=arguments[2],u=arguments[3],m=[],p=1,g=16,b="S",x=null;xn(o=o||{})==="object"&&(r=o.orientation,l=o.unit||l,f=o.format||f,u=o.compress||o.compressPdf||u,(x=o.encryption||null)!==null&&(x.userPassword=x.userPassword||"",x.ownerPassword=x.ownerPassword||"",x.userPermissions=x.userPermissions||[]),p=typeof o.userUnit=="number"?Math.abs(o.userUnit):1,o.precision!==void 0&&(a=o.precision),o.floatPrecision!==void 0&&(g=o.floatPrecision),b=o.defaultPathOperation||"S"),m=o.filters||(u===!0?["FlateEncode"]:m),l=l||"mm",r=(""+(r||"P")).toLowerCase();var A=o.putOnlyUsedFonts||!1,L={},w={internal:{},__private__:{}};w.__private__.PubSub=ng;var F="1.3",U=w.__private__.getPdfVersion=function(){return F};w.__private__.setPdfVersion=function(v){F=v};var k={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};w.__private__.getPageFormats=function(){return k};var j=w.__private__.getPageFormat=function(v){return k[v]};f=f||"a4";var ne="compat",te="advanced",W=ne;function pe(){this.saveGraphicsState(),V(new lt(Nt,0,0,-Nt,0,ho()*Nt).toString()+" cm"),this.setFontSize(this.getFontSize()/Nt),b="n",W=te}function ke(){this.restoreGraphicsState(),b="S",W=ne}var ye=w.__private__.combineFontStyleAndFontWeight=function(v,C){if(v=="bold"&&C=="normal"||v=="bold"&&C==400||v=="normal"&&C=="italic"||v=="bold"&&C=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return C&&(v=C==400||C==="normal"?v==="italic"?"italic":"normal":C!=700&&C!=="bold"||v!=="normal"?(C==700?"bold":C)+""+v:"bold"),v};w.advancedAPI=function(v){var C=W===ne;return C&&pe.call(this),typeof v!="function"||(v(this),C&&ke.call(this)),this},w.compatAPI=function(v){var C=W===te;return C&&ke.call(this),typeof v!="function"||(v(this),C&&pe.call(this)),this},w.isAdvancedAPI=function(){return W===te};var oe,K=function(v){if(W!==te)throw new Error(v+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},ve=w.roundToPrecision=w.__private__.roundToPrecision=function(v,C){var H=a||C;if(isNaN(v)||isNaN(H))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return v.toFixed(H).replace(/0+$/,"")};oe=w.hpf=w.__private__.hpf=typeof g=="number"?function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.hpf");return ve(v,g)}:g==="smart"?function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.hpf");return ve(v,v>-1&&v<1?16:5)}:function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.hpf");return ve(v,16)};var E=w.f2=w.__private__.f2=function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.f2");return ve(v,2)},B=w.__private__.f3=function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.f3");return ve(v,3)},X=w.scale=w.__private__.scale=function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.scale");return W===ne?v*Nt:W===te?v:void 0},Q=function(v){return X((function(C){return W===ne?ho()-C:W===te?C:void 0})(v))};w.__private__.setPrecision=w.setPrecision=function(v){typeof parseInt(v,10)=="number"&&(a=parseInt(v,10))};var le,ee="00000000000000000000000000000000",ue=w.__private__.getFileId=function(){return ee},re=w.__private__.setFileId=function(v){return ee=v!==void 0&&/^[a-fA-F0-9]{32}$/.test(v)?v.toUpperCase():ee.split("").map(function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))}).join(""),x!==null&&(gi=new Vc(x.userPermissions,x.userPassword,x.ownerPassword,ee)),ee};w.setFileId=function(v){return re(v),this},w.getFileId=function(){return ue()};var Ce=w.__private__.convertDateToPDFDate=function(v){var C=v.getTimezoneOffset(),H=C<0?"+":"-",ie=Math.floor(Math.abs(C/60)),he=Math.abs(C%60),Re=[H,_(ie),"'",_(he),"'"].join("");return["D:",v.getFullYear(),_(v.getMonth()+1),_(v.getDate()),_(v.getHours()),_(v.getMinutes()),_(v.getSeconds()),Re].join("")},ze=w.__private__.convertPDFDateToDate=function(v){var C=parseInt(v.substr(2,4),10),H=parseInt(v.substr(6,2),10)-1,ie=parseInt(v.substr(8,2),10),he=parseInt(v.substr(10,2),10),Re=parseInt(v.substr(12,2),10),He=parseInt(v.substr(14,2),10);return new Date(C,H,ie,he,Re,He,0)},Be=w.__private__.setCreationDate=function(v){var C;if(v===void 0&&(v=new Date),v instanceof Date)C=Ce(v);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(v))throw new Error("Invalid argument passed to jsPDF.setCreationDate");C=v}return le=C},R=w.__private__.getCreationDate=function(v){var C=le;return v==="jsDate"&&(C=ze(le)),C};w.setCreationDate=function(v){return Be(v),this},w.getCreationDate=function(v){return R(v)};var Z,_=w.__private__.padd2=function(v){return("0"+parseInt(v)).slice(-2)},I=w.__private__.padd2Hex=function(v){return("00"+(v=v.toString())).substr(v.length)},$=0,ae=[],we=[],Se=0,Oe=[],Ee=[],qe=!1,Qe=we;w.__private__.setCustomOutputDestination=function(v){qe=!0,Qe=v};var dt=function(v){qe||(Qe=v)};w.__private__.resetCustomOutputDestination=function(){qe=!1,Qe=we};var V=w.__private__.out=function(v){return v=v.toString(),Se+=v.length+1,Qe.push(v),Qe},Xe=w.__private__.write=function(v){return V(arguments.length===1?v.toString():Array.prototype.join.call(arguments," "))},pt=w.__private__.getArrayBuffer=function(v){for(var C=v.length,H=new ArrayBuffer(C),ie=new Uint8Array(H);C--;)ie[C]=v.charCodeAt(C);return H},Me=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];w.__private__.getStandardFonts=function(){return Me};var xe=o.fontSize||16;w.__private__.setFontSize=w.setFontSize=function(v){return xe=W===te?v/Nt:v,this};var Ve,Ie=w.__private__.getFontSize=w.getFontSize=function(){return W===ne?xe:xe*Nt},Ke=o.R2L||!1;w.__private__.setR2L=w.setR2L=function(v){return Ke=v,this},w.__private__.getR2L=w.getR2L=function(){return Ke};var at,At=w.__private__.setZoomMode=function(v){if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(v))Ve=v;else if(isNaN(v)){if([void 0,null,"fullwidth","fullheight","fullpage","original"].indexOf(v)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+v+'" is not recognized.');Ve=v}else Ve=parseInt(v,10)};w.__private__.getZoomMode=function(){return Ve};var Bt,wt=w.__private__.setPageMode=function(v){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(v)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+v+'" is not recognized.');at=v};w.__private__.getPageMode=function(){return at};var Pt=w.__private__.setLayoutMode=function(v){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(v)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+v+'" is not recognized.');Bt=v};w.__private__.getLayoutMode=function(){return Bt},w.__private__.setDisplayMode=w.setDisplayMode=function(v,C,H){return At(v),Pt(C),wt(H),this};var Ut={title:"",subject:"",author:"",keywords:"",creator:""};w.__private__.getDocumentProperty=function(v){if(Object.keys(Ut).indexOf(v)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return Ut[v]},w.__private__.getDocumentProperties=function(){return Ut},w.__private__.setDocumentProperties=w.setProperties=w.setDocumentProperties=function(v){for(var C in Ut)Ut.hasOwnProperty(C)&&v[C]&&(Ut[C]=v[C]);return this},w.__private__.setDocumentProperty=function(v,C){if(Object.keys(Ut).indexOf(v)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return Ut[v]=C};var $e,Nt,ht,Vn,Qt,Rt={},jt={},wn=[],bt={},Nn={},ft={},Ot={},Cn=null,Ft=0,yt=[],en=new ng(w),lo=o.hotfixes||[],Di={},kr={},ia=[],lt=function v(C,H,ie,he,Re,He){if(!(this instanceof v))return new v(C,H,ie,he,Re,He);isNaN(C)&&(C=1),isNaN(H)&&(H=0),isNaN(ie)&&(ie=0),isNaN(he)&&(he=1),isNaN(Re)&&(Re=0),isNaN(He)&&(He=0),this._matrix=[C,H,ie,he,Re,He]};Object.defineProperty(lt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(v){this._matrix[0]=v}}),Object.defineProperty(lt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(v){this._matrix[1]=v}}),Object.defineProperty(lt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(v){this._matrix[2]=v}}),Object.defineProperty(lt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(v){this._matrix[3]=v}}),Object.defineProperty(lt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(v){this._matrix[4]=v}}),Object.defineProperty(lt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(v){this._matrix[5]=v}}),Object.defineProperty(lt.prototype,"a",{get:function(){return this._matrix[0]},set:function(v){this._matrix[0]=v}}),Object.defineProperty(lt.prototype,"b",{get:function(){return this._matrix[1]},set:function(v){this._matrix[1]=v}}),Object.defineProperty(lt.prototype,"c",{get:function(){return this._matrix[2]},set:function(v){this._matrix[2]=v}}),Object.defineProperty(lt.prototype,"d",{get:function(){return this._matrix[3]},set:function(v){this._matrix[3]=v}}),Object.defineProperty(lt.prototype,"e",{get:function(){return this._matrix[4]},set:function(v){this._matrix[4]=v}}),Object.defineProperty(lt.prototype,"f",{get:function(){return this._matrix[5]},set:function(v){this._matrix[5]=v}}),Object.defineProperty(lt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(lt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(lt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(lt.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),lt.prototype.join=function(v){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(oe).join(v)},lt.prototype.multiply=function(v){var C=v.sx*this.sx+v.shy*this.shx,H=v.sx*this.shy+v.shy*this.sy,ie=v.shx*this.sx+v.sy*this.shx,he=v.shx*this.shy+v.sy*this.sy,Re=v.tx*this.sx+v.ty*this.shx+this.tx,He=v.tx*this.shy+v.ty*this.sy+this.ty;return new lt(C,H,ie,he,Re,He)},lt.prototype.decompose=function(){var v=this.sx,C=this.shy,H=this.shx,ie=this.sy,he=this.tx,Re=this.ty,He=Math.sqrt(v*v+C*C),rt=(v/=He)*H+(C/=He)*ie;H-=v*rt,ie-=C*rt;var it=Math.sqrt(H*H+ie*ie);return rt/=it,v*(ie/=it)<C*(H/=it)&&(v=-v,C=-C,rt=-rt,He=-He),{scale:new lt(He,0,0,it,0,0),translate:new lt(1,0,0,1,he,Re),rotate:new lt(v,C,-C,v,0,0),skew:new lt(1,0,rt,1,0,0)}},lt.prototype.toString=function(v){return this.join(" ")},lt.prototype.inversed=function(){var v=this.sx,C=this.shy,H=this.shx,ie=this.sy,he=this.tx,Re=this.ty,He=1/(v*ie-C*H),rt=ie*He,it=-C*He,xt=-H*He,_t=v*He;return new lt(rt,it,xt,_t,-rt*he-xt*Re,-it*he-_t*Re)},lt.prototype.applyToPoint=function(v){var C=v.x*this.sx+v.y*this.shx+this.tx,H=v.x*this.shy+v.y*this.sy+this.ty;return new Ea(C,H)},lt.prototype.applyToRectangle=function(v){var C=this.applyToPoint(v),H=this.applyToPoint(new Ea(v.x+v.w,v.y+v.h));return new Nl(C.x,C.y,H.x-C.x,H.y-C.y)},lt.prototype.clone=function(){var v=this.sx,C=this.shy,H=this.shx,ie=this.sy,he=this.tx,Re=this.ty;return new lt(v,C,H,ie,he,Re)},w.Matrix=lt;var ki=w.matrixMult=function(v,C){return C.multiply(v)},Gn=new lt(1,0,0,1,0,0);w.unitMatrix=w.identityMatrix=Gn;var Aa=function(v,C){if(!Nn[v]){var H=(C instanceof Us?"Sh":"P")+(Object.keys(bt).length+1).toString(10);C.id=H,Nn[v]=H,bt[H]=C,en.publish("addPattern",C)}};w.ShadingPattern=Us,w.TilingPattern=Xc,w.addShadingPattern=function(v,C){return K("addShadingPattern()"),Aa(v,C),this},w.beginTilingPattern=function(v){K("beginTilingPattern()"),Sl(v.boundingBox[0],v.boundingBox[1],v.boundingBox[2]-v.boundingBox[0],v.boundingBox[3]-v.boundingBox[1],v.matrix)},w.endTilingPattern=function(v,C){K("endTilingPattern()"),C.stream=Ee[Z].join(`
`),Aa(v,C),en.publish("endTilingPattern",C),ia.pop().restore()};var _a,qn=w.__private__.newObject=function(){var v=Yn();return Wn(v,!0),v},Yn=w.__private__.newObjectDeferred=function(){return $++,ae[$]=function(){return Se},$},Wn=function(v,C){return C=typeof C=="boolean"&&C,ae[v]=Se,C&&V(v+" 0 obj"),v},sr=w.__private__.newAdditionalObject=function(){var v={objId:Yn(),content:""};return Oe.push(v),v},aa=Yn(),ra=Yn(),oa=w.__private__.decodeColorString=function(v){var C=v.split(" ");if(C.length!==2||C[1]!=="g"&&C[1]!=="G")C.length!==5||C[4]!=="k"&&C[4]!=="K"||(C=[(1-C[0])*(1-C[3]),(1-C[1])*(1-C[3]),(1-C[2])*(1-C[3]),"r"]);else{var H=parseFloat(C[0]);C=[H,H,H,"r"]}for(var ie="#",he=0;he<3;he++)ie+=("0"+Math.floor(255*parseFloat(C[he])).toString(16)).slice(-2);return ie},Ca=w.__private__.encodeColorString=function(v){var C;typeof v=="string"&&(v={ch1:v});var H=v.ch1,ie=v.ch2,he=v.ch3,Re=v.ch4,He=v.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof H=="string"&&H.charAt(0)!=="#"){var rt=new xm(H);if(rt.ok)H=rt.toHex();else if(!/^\d*\.?\d*$/.test(H))throw new Error('Invalid color "'+H+'" passed to jsPDF.encodeColorString.')}if(typeof H=="string"&&/^#[0-9A-Fa-f]{3}$/.test(H)&&(H="#"+H[1]+H[1]+H[2]+H[2]+H[3]+H[3]),typeof H=="string"&&/^#[0-9A-Fa-f]{6}$/.test(H)){var it=parseInt(H.substr(1),16);H=it>>16&255,ie=it>>8&255,he=255&it}if(ie===void 0||Re===void 0&&H===ie&&ie===he)C=typeof H=="string"?H+" "+He[0]:v.precision===2?E(H/255)+" "+He[0]:B(H/255)+" "+He[0];else if(Re===void 0||xn(Re)==="object"){if(Re&&!isNaN(Re.a)&&Re.a===0)return["1.","1.","1.",He[1]].join(" ");C=typeof H=="string"?[H,ie,he,He[1]].join(" "):v.precision===2?[E(H/255),E(ie/255),E(he/255),He[1]].join(" "):[B(H/255),B(ie/255),B(he/255),He[1]].join(" ")}else C=typeof H=="string"?[H,ie,he,Re,He[2]].join(" "):v.precision===2?[E(H),E(ie),E(he),E(Re),He[2]].join(" "):[B(H),B(ie),B(he),B(Re),He[2]].join(" ");return C},Ha=w.__private__.getFilters=function(){return m},va=w.__private__.putStream=function(v){var C=(v=v||{}).data||"",H=v.filters||Ha(),ie=v.alreadyAppliedFilters||[],he=v.addLength1||!1,Re=C.length,He=v.objectId,rt=function(fn){return fn};if(x!==null&&He===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");x!==null&&(rt=gi.encryptor(He,0));var it={};H===!0&&(H=["FlateEncode"]);var xt=v.additionalKeyValues||[],_t=(it=mt.API.processDataByFilters!==void 0?mt.API.processDataByFilters(C,H):{data:C,reverseChain:[]}).reverseChain+(Array.isArray(ie)?ie.join(" "):ie.toString());if(it.data.length!==0&&(xt.push({key:"Length",value:it.data.length}),he===!0&&xt.push({key:"Length1",value:Re})),_t.length!=0)if(_t.split("/").length-1==1)xt.push({key:"Filter",value:_t});else{xt.push({key:"Filter",value:"["+_t+"]"});for(var Vt=0;Vt<xt.length;Vt+=1)if(xt[Vt].key==="DecodeParms"){for(var ei=[],un=0;un<it.reverseChain.split("/").length-1;un+=1)ei.push("null");ei.push(xt[Vt].value),xt[Vt].value="["+ei.join(" ")+"]"}}V("<<");for(var ln=0;ln<xt.length;ln++)V("/"+xt[ln].key+" "+xt[ln].value);V(">>"),it.data.length!==0&&(V("stream"),V(rt(it.data)),V("endstream"))},Mr=w.__private__.putPage=function(v){var C=v.number,H=v.data,ie=v.objId,he=v.contentsObjId;Wn(ie,!0),V("<</Type /Page"),V("/Parent "+v.rootDictionaryObjId+" 0 R"),V("/Resources "+v.resourceDictionaryObjId+" 0 R"),V("/MediaBox ["+parseFloat(oe(v.mediaBox.bottomLeftX))+" "+parseFloat(oe(v.mediaBox.bottomLeftY))+" "+oe(v.mediaBox.topRightX)+" "+oe(v.mediaBox.topRightY)+"]"),v.cropBox!==null&&V("/CropBox ["+oe(v.cropBox.bottomLeftX)+" "+oe(v.cropBox.bottomLeftY)+" "+oe(v.cropBox.topRightX)+" "+oe(v.cropBox.topRightY)+"]"),v.bleedBox!==null&&V("/BleedBox ["+oe(v.bleedBox.bottomLeftX)+" "+oe(v.bleedBox.bottomLeftY)+" "+oe(v.bleedBox.topRightX)+" "+oe(v.bleedBox.topRightY)+"]"),v.trimBox!==null&&V("/TrimBox ["+oe(v.trimBox.bottomLeftX)+" "+oe(v.trimBox.bottomLeftY)+" "+oe(v.trimBox.topRightX)+" "+oe(v.trimBox.topRightY)+"]"),v.artBox!==null&&V("/ArtBox ["+oe(v.artBox.bottomLeftX)+" "+oe(v.artBox.bottomLeftY)+" "+oe(v.artBox.topRightX)+" "+oe(v.artBox.topRightY)+"]"),typeof v.userUnit=="number"&&v.userUnit!==1&&V("/UserUnit "+v.userUnit),en.publish("putPage",{objId:ie,pageContext:yt[C],pageNumber:C,page:H}),V("/Contents "+he+" 0 R"),V(">>"),V("endobj");var Re=H.join(`
`);return W===te&&(Re+=`
Q`),Wn(he,!0),va({data:Re,filters:Ha(),objectId:he}),V("endobj"),ie},la=w.__private__.putPages=function(){var v,C,H=[];for(v=1;v<=Ft;v++)yt[v].objId=Yn(),yt[v].contentsObjId=Yn();for(v=1;v<=Ft;v++)H.push(Mr({number:v,data:Ee[v],objId:yt[v].objId,contentsObjId:yt[v].contentsObjId,mediaBox:yt[v].mediaBox,cropBox:yt[v].cropBox,bleedBox:yt[v].bleedBox,trimBox:yt[v].trimBox,artBox:yt[v].artBox,userUnit:yt[v].userUnit,rootDictionaryObjId:aa,resourceDictionaryObjId:ra}));Wn(aa,!0),V("<</Type /Pages");var ie="/Kids [";for(C=0;C<Ft;C++)ie+=H[C]+" 0 R ";V(ie+"]"),V("/Count "+Ft),V(">>"),V("endobj"),en.publish("postPutPages")},Bo=function(v){en.publish("putFont",{font:v,out:V,newObject:qn,putStream:va}),v.isAlreadyPutted!==!0&&(v.objectNumber=qn(),V("<<"),V("/Type /Font"),V("/BaseFont /"+Gc(v.postScriptName)),V("/Subtype /Type1"),typeof v.encoding=="string"&&V("/Encoding /"+v.encoding),V("/FirstChar 32"),V("/LastChar 255"),V(">>"),V("endobj"))},Po=function(v){v.objectNumber=qn();var C=[];C.push({key:"Type",value:"/XObject"}),C.push({key:"Subtype",value:"/Form"}),C.push({key:"BBox",value:"["+[oe(v.x),oe(v.y),oe(v.x+v.width),oe(v.y+v.height)].join(" ")+"]"}),C.push({key:"Matrix",value:"["+v.matrix.toString()+"]"});var H=v.pages[1].join(`
`);va({data:H,additionalKeyValues:C,objectId:v.objectNumber}),V("endobj")},Uo=function(v,C){C||(C=21);var H=qn(),ie=(function(He,rt){var it,xt=[],_t=1/(rt-1);for(it=0;it<1;it+=_t)xt.push(it);if(xt.push(1),He[0].offset!=0){var Vt={offset:0,color:He[0].color};He.unshift(Vt)}if(He[He.length-1].offset!=1){var ei={offset:1,color:He[He.length-1].color};He.push(ei)}for(var un="",ln=0,fn=0;fn<xt.length;fn++){for(it=xt[fn];it>He[ln+1].offset;)ln++;var Bn=He[ln].offset,Pn=(it-Bn)/(He[ln+1].offset-Bn),Mi=He[ln].color,zr=He[ln+1].color;un+=I(Math.round((1-Pn)*Mi[0]+Pn*zr[0]).toString(16))+I(Math.round((1-Pn)*Mi[1]+Pn*zr[1]).toString(16))+I(Math.round((1-Pn)*Mi[2]+Pn*zr[2]).toString(16))}return un.trim()})(v.colors,C),he=[];he.push({key:"FunctionType",value:"0"}),he.push({key:"Domain",value:"[0.0 1.0]"}),he.push({key:"Size",value:"["+C+"]"}),he.push({key:"BitsPerSample",value:"8"}),he.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),he.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),va({data:ie,additionalKeyValues:he,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:H}),V("endobj"),v.objectNumber=qn(),V("<< /ShadingType "+v.type),V("/ColorSpace /DeviceRGB");var Re="/Coords ["+oe(parseFloat(v.coords[0]))+" "+oe(parseFloat(v.coords[1]))+" ";v.type===2?Re+=oe(parseFloat(v.coords[2]))+" "+oe(parseFloat(v.coords[3])):Re+=oe(parseFloat(v.coords[2]))+" "+oe(parseFloat(v.coords[3]))+" "+oe(parseFloat(v.coords[4]))+" "+oe(parseFloat(v.coords[5])),V(Re+="]"),v.matrix&&V("/Matrix ["+v.matrix.toString()+"]"),V("/Function "+H+" 0 R"),V("/Extend [true true]"),V(">>"),V("endobj")},Fo=function(v,C){var H=Yn(),ie=qn();C.push({resourcesOid:H,objectOid:ie}),v.objectNumber=ie;var he=[];he.push({key:"Type",value:"/Pattern"}),he.push({key:"PatternType",value:"1"}),he.push({key:"PaintType",value:"1"}),he.push({key:"TilingType",value:"1"}),he.push({key:"BBox",value:"["+v.boundingBox.map(oe).join(" ")+"]"}),he.push({key:"XStep",value:oe(v.xStep)}),he.push({key:"YStep",value:oe(v.yStep)}),he.push({key:"Resources",value:H+" 0 R"}),v.matrix&&he.push({key:"Matrix",value:"["+v.matrix.toString()+"]"}),va({data:v.stream,additionalKeyValues:he,objectId:v.objectNumber}),V("endobj")},fs=function(v){for(var C in v.objectNumber=qn(),V("<<"),v)switch(C){case"opacity":V("/ca "+E(v[C]));break;case"stroke-opacity":V("/CA "+E(v[C]))}V(">>"),V("endobj")},qo=function(v){Wn(v.resourcesOid,!0),V("<<"),V("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),(function(){for(var C in V("/Font <<"),Rt)Rt.hasOwnProperty(C)&&(A===!1||A===!0&&L.hasOwnProperty(C))&&V("/"+C+" "+Rt[C].objectNumber+" 0 R");V(">>")})(),(function(){if(Object.keys(bt).length>0){for(var C in V("/Shading <<"),bt)bt.hasOwnProperty(C)&&bt[C]instanceof Us&&bt[C].objectNumber>=0&&V("/"+C+" "+bt[C].objectNumber+" 0 R");en.publish("putShadingPatternDict"),V(">>")}})(),(function(C){if(Object.keys(bt).length>0){for(var H in V("/Pattern <<"),bt)bt.hasOwnProperty(H)&&bt[H]instanceof w.TilingPattern&&bt[H].objectNumber>=0&&bt[H].objectNumber<C&&V("/"+H+" "+bt[H].objectNumber+" 0 R");en.publish("putTilingPatternDict"),V(">>")}})(v.objectOid),(function(){if(Object.keys(ft).length>0){var C;for(C in V("/ExtGState <<"),ft)ft.hasOwnProperty(C)&&ft[C].objectNumber>=0&&V("/"+C+" "+ft[C].objectNumber+" 0 R");en.publish("putGStateDict"),V(">>")}})(),(function(){for(var C in V("/XObject <<"),Di)Di.hasOwnProperty(C)&&Di[C].objectNumber>=0&&V("/"+C+" "+Di[C].objectNumber+" 0 R");en.publish("putXobjectDict"),V(">>")})(),V(">>"),V("endobj")},ds=function(v){jt[v.fontName]=jt[v.fontName]||{},jt[v.fontName][v.fontStyle]=v.id},hs=function(v,C,H,ie,he){var Re={id:"F"+(Object.keys(Rt).length+1).toString(10),postScriptName:v,fontName:C,fontStyle:H,encoding:ie,isStandardFont:he||!1,metadata:{}};return en.publish("addFont",{font:Re,instance:this}),Rt[Re.id]=Re,ds(Re),Re.id},$n=w.__private__.pdfEscape=w.pdfEscape=function(v,C){return(function(H,ie){var he,Re,He,rt,it,xt,_t,Vt,ei;if(He=(ie=ie||{}).sourceEncoding||"Unicode",it=ie.outputEncoding,(ie.autoencode||it)&&Rt[$e].metadata&&Rt[$e].metadata[He]&&Rt[$e].metadata[He].encoding&&(rt=Rt[$e].metadata[He].encoding,!it&&Rt[$e].encoding&&(it=Rt[$e].encoding),!it&&rt.codePages&&(it=rt.codePages[0]),typeof it=="string"&&(it=rt[it]),it)){for(_t=!1,xt=[],he=0,Re=H.length;he<Re;he++)(Vt=it[H.charCodeAt(he)])?xt.push(String.fromCharCode(Vt)):xt.push(H[he]),xt[he].charCodeAt(0)>>8&&(_t=!0);H=xt.join("")}for(he=H.length;_t===void 0&&he!==0;)H.charCodeAt(he-1)>>8&&(_t=!0),he--;if(!_t)return H;for(xt=ie.noBOM?[]:[254,255],he=0,Re=H.length;he<Re;he++){if((ei=(Vt=H.charCodeAt(he))>>8)>>8)throw new Error("Character at position "+he+" of string '"+H+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");xt.push(ei),xt.push(Vt-(ei<<8))}return String.fromCharCode.apply(void 0,xt)})(v,C).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Xn=w.__private__.beginPage=function(v){Ee[++Ft]=[],yt[Ft]={objId:0,contentsObjId:0,userUnit:Number(p),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(v[0]),topRightY:Number(v[1])}},ps(Ft),dt(Ee[Z])},Ai=function(v,C){var H,ie,he;switch(r=C||r,typeof v=="string"&&(H=j(v.toLowerCase()),Array.isArray(H)&&(ie=H[0],he=H[1])),Array.isArray(v)&&(ie=v[0]*Nt,he=v[1]*Nt),isNaN(ie)&&(ie=f[0],he=f[1]),(ie>14400||he>14400)&&(On.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),ie=Math.min(14400,ie),he=Math.min(14400,he)),f=[ie,he],r.substr(0,1)){case"l":he>ie&&(f=[he,ie]);break;case"p":ie>he&&(f=[he,ie])}Xn(f),Ws(gt),V(Go),Xo!==0&&V(Xo+" J"),yr!==0&&V(yr+" j"),en.publish("addPage",{pageNumber:Ft})},cr=function(v){v>0&&v<=Ft&&(Ee.splice(v,1),yt.splice(v,1),Ft--,Z>Ft&&(Z=Ft),this.setPage(Z))},ps=function(v){v>0&&v<=Ft&&(Z=v)},Ys=w.__private__.getNumberOfPages=w.getNumberOfPages=function(){return Ee.length-1},Xs=function(v,C,H){var ie,he=void 0;return H=H||{},v=v!==void 0?v:Rt[$e].fontName,C=C!==void 0?C:Rt[$e].fontStyle,ie=v.toLowerCase(),jt[ie]!==void 0&&jt[ie][C]!==void 0?he=jt[ie][C]:jt[v]!==void 0&&jt[v][C]!==void 0?he=jt[v][C]:H.disableWarning===!1&&On.warn("Unable to look up font label for font '"+v+"', '"+C+"'. Refer to getFontList() for available fonts."),he||H.noFallback||(he=jt.times[C])==null&&(he=jt.times.normal),he},Va=w.__private__.putInfo=function(){var v=qn(),C=function(ie){return ie};for(var H in x!==null&&(C=gi.encryptor(v,0)),V("<<"),V("/Producer ("+$n(C("jsPDF "+mt.version))+")"),Ut)Ut.hasOwnProperty(H)&&Ut[H]&&V("/"+H.substr(0,1).toUpperCase()+H.substr(1)+" ("+$n(C(Ut[H]))+")");V("/CreationDate ("+$n(C(le))+")"),V(">>"),V("endobj")},ur=w.__private__.putCatalog=function(v){var C=(v=v||{}).rootDictionaryObjId||aa;switch(qn(),V("<<"),V("/Type /Catalog"),V("/Pages "+C+" 0 R"),Ve||(Ve="fullwidth"),Ve){case"fullwidth":V("/OpenAction [3 0 R /FitH null]");break;case"fullheight":V("/OpenAction [3 0 R /FitV null]");break;case"fullpage":V("/OpenAction [3 0 R /Fit]");break;case"original":V("/OpenAction [3 0 R /XYZ null null 1]");break;default:var H=""+Ve;H.substr(H.length-1)==="%"&&(Ve=parseInt(Ve)/100),typeof Ve=="number"&&V("/OpenAction [3 0 R /XYZ null null "+E(Ve)+"]")}switch(Bt||(Bt="continuous"),Bt){case"continuous":V("/PageLayout /OneColumn");break;case"single":V("/PageLayout /SinglePage");break;case"two":case"twoleft":V("/PageLayout /TwoColumnLeft");break;case"tworight":V("/PageLayout /TwoColumnRight")}at&&V("/PageMode /"+at),en.publish("putCatalog"),V(">>"),V("endobj")},xl=w.__private__.putTrailer=function(){V("trailer"),V("<<"),V("/Size "+($+1)),V("/Root "+$+" 0 R"),V("/Info "+($-1)+" 0 R"),x!==null&&V("/Encrypt "+gi.oid+" 0 R"),V("/ID [ <"+ee+"> <"+ee+"> ]"),V(">>")},zn=w.__private__.putHeader=function(){V("%PDF-"+F),V("%ºß¬à")},fr=w.__private__.putXRef=function(){var v="0000000000";V("xref"),V("0 "+($+1)),V("0000000000 65535 f ");for(var C=1;C<=$;C++)typeof ae[C]=="function"?V((v+ae[C]()).slice(-10)+" 00000 n "):ae[C]!==void 0?V((v+ae[C]).slice(-10)+" 00000 n "):V("0000000000 00000 n ")},Vi=w.__private__.buildDocument=function(){var v;$=0,Se=0,we=[],ae=[],Oe=[],aa=Yn(),ra=Yn(),dt(we),en.publish("buildDocument"),zn(),la(),(function(){en.publish("putAdditionalObjects");for(var H=0;H<Oe.length;H++){var ie=Oe[H];Wn(ie.objId,!0),V(ie.content),V("endobj")}en.publish("postPutAdditionalObjects")})(),v=[],(function(){for(var H in Rt)Rt.hasOwnProperty(H)&&(A===!1||A===!0&&L.hasOwnProperty(H))&&Bo(Rt[H])})(),(function(){var H;for(H in ft)ft.hasOwnProperty(H)&&fs(ft[H])})(),(function(){for(var H in Di)Di.hasOwnProperty(H)&&Po(Di[H])})(),(function(H){var ie;for(ie in bt)bt.hasOwnProperty(ie)&&(bt[ie]instanceof Us?Uo(bt[ie]):bt[ie]instanceof Xc&&Fo(bt[ie],H))})(v),en.publish("putResources"),v.forEach(qo),qo({resourcesOid:ra,objectOid:Number.MAX_SAFE_INTEGER}),en.publish("postPutResources"),x!==null&&(gi.oid=qn(),V("<<"),V("/Filter /Standard"),V("/V "+gi.v),V("/R "+gi.r),V("/U <"+gi.toHexString(gi.U)+">"),V("/O <"+gi.toHexString(gi.O)+">"),V("/P "+gi.P),V(">>"),V("endobj")),Va(),ur();var C=Se;return fr(),xl(),V("startxref"),V(""+C),V("%%EOF"),dt(Ee[Z]),we.join(`
`)},dr=w.__private__.getBlob=function(v){return new Blob([pt(v)],{type:"application/pdf"})},hr=function(v){for(;v.firstChild;)v.removeChild(v.firstChild)},tn=function(v){var C,H=v.document,ie=H.documentElement,he=H.head,Re=H.body;return he||(he=H.createElement("head"),ie.appendChild(he)),Re||(Re=H.createElement("body"),ie.appendChild(Re)),hr(he),hr(Re),(C=H.createElement("style")).appendChild(H.createTextNode("html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}")),he.appendChild(C),{document:H,body:Re}},Io=w.output=w.__private__.output=(_a=function(v,C){switch(typeof(C=C||{})=="string"?C={filename:C}:C.filename=C.filename||"generated.pdf",v){case void 0:return Vi();case"save":w.save(C.filename);break;case"arraybuffer":return pt(Vi());case"blob":return dr(Vi());case"bloburi":case"bloburl":if(Et.URL!==void 0&&typeof Et.URL.createObjectURL=="function")return Et.URL&&Et.URL.createObjectURL(dr(Vi()))||void 0;On.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var H="",ie=Vi();try{H=$5(ie)}catch{H=$5(unescape(encodeURIComponent(ie)))}return"data:application/pdf;filename="+encodeURIComponent(C.filename)+";base64,"+H;case"pdfobjectnewwindow":if(Object.prototype.toString.call(Et)==="[object Window]"){var he="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",Re=!C.pdfObjectUrl;Re||(he=C.pdfObjectUrl);var He=Et.open();if(He!==null){var rt=tn(He),it=rt.document.createElement("script"),xt=this;it.src=he,Re&&(it.integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==",it.crossOrigin="anonymous"),it.onload=function(){He.PDFObject.embed(xt.output("dataurlstring"),C)},rt.body.appendChild(it)}return He}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(Et)==="[object Window]"){var _t=C.pdfJsUrl||"examples/PDF.js/web/viewer.html",Vt=Et.open();if(Vt!==null){var ei=tn(Vt),un=ei.document.createElement("iframe"),ln=_t.indexOf("?")===-1?"?":"&";xt=this,un.id="pdfViewer",un.width="500px",un.height="400px",un.src=_t+ln+"file=&downloadName="+encodeURIComponent(C.filename),un.onload=function(){Vt.document.title=C.filename,un.contentWindow.PDFViewerApplication.open(xt.output("bloburl"))},ei.body.appendChild(un)}return Vt}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(Et)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var fn=Et.open();if(fn!==null){var Bn=tn(fn),Pn=Bn.document.createElement("iframe");Pn.src=this.output("datauristring",C),Bn.body.appendChild(Pn),fn.document.title=C.filename}if(fn||typeof safari>"u")return fn;break;case"datauri":case"dataurl":return Et.document.location.href=this.output("datauristring",C);default:return null}},_a.foo=function(){try{return _a.apply(this,arguments)}catch(H){var v=H.stack||"";~v.indexOf(" at ")&&(v=v.split(" at ")[1]);var C="Error in function "+v.split(`
`)[0].split("<")[0]+": "+H.message;if(!Et.console)throw new Error(C);Et.console.error(C,H),Et.alert&&alert(C)}},_a.foo.bar=_a,_a.foo),pr=function(v){return Array.isArray(lo)===!0&&lo.indexOf(v)>-1};switch(l){case"pt":Nt=1;break;case"mm":Nt=72/25.4;break;case"cm":Nt=72/2.54;break;case"in":Nt=72;break;case"px":Nt=pr("px_scaling")==1?.75:96/72;break;case"pc":case"em":Nt=12;break;case"ex":Nt=6;break;default:if(typeof l!="number")throw new Error("Invalid unit: "+l);Nt=l}var gi=null;Be(),re();var gr=w.__private__.getPageInfo=w.getPageInfo=function(v){if(isNaN(v)||v%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:yt[v].objId,pageNumber:v,pageContext:yt[v]}},so=w.__private__.getPageInfoByObjId=function(v){if(isNaN(v)||v%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var C in yt)if(yt[C].objId===v)break;return gr(C)},eu=w.__private__.getCurrentPageInfo=w.getCurrentPageInfo=function(){return{objId:yt[Z].objId,pageNumber:Z,pageContext:yt[Z]}};w.addPage=function(){return Ai.apply(this,arguments),this},w.setPage=function(){return ps.apply(this,arguments),dt.call(this,Ee[Z]),this},w.insertPage=function(v){return this.addPage(),this.movePage(Z,v),this},w.movePage=function(v,C){var H,ie;if(v>C){H=Ee[v],ie=yt[v];for(var he=v;he>C;he--)Ee[he]=Ee[he-1],yt[he]=yt[he-1];Ee[C]=H,yt[C]=ie,this.setPage(C)}else if(v<C){H=Ee[v],ie=yt[v];for(var Re=v;Re<C;Re++)Ee[Re]=Ee[Re+1],yt[Re]=yt[Re+1];Ee[C]=H,yt[C]=ie,this.setPage(C)}return this},w.deletePage=function(){return cr.apply(this,arguments),this},w.__private__.text=w.text=function(v,C,H,ie,he){var Re,He,rt,it,xt,_t,Vt,ei,un,ln=(ie=ie||{}).scope||this;if(typeof v=="number"&&typeof C=="number"&&(typeof H=="string"||Array.isArray(H))){var fn=H;H=C,C=v,v=fn}if(arguments[3]instanceof lt==0?(rt=arguments[4],it=arguments[5],xn(Vt=arguments[3])==="object"&&Vt!==null||(typeof rt=="string"&&(it=rt,rt=null),typeof Vt=="string"&&(it=Vt,Vt=null),typeof Vt=="number"&&(rt=Vt,Vt=null),ie={flags:Vt,angle:rt,align:it})):(K("The transform parameter of text() with a Matrix value"),un=he),isNaN(C)||isNaN(H)||v==null)throw new Error("Invalid arguments passed to jsPDF.text");if(v.length===0)return ln;var Bn,Pn="",Mi=typeof ie.lineHeightFactor=="number"?ie.lineHeightFactor:Vo,zr=ln.internal.scaleFactor;function vs(dn){return dn=dn.split("	").join(Array(ie.TabLen||9).join(" ")),$n(dn,Vt)}function po(dn){for(var hn,Qn=dn.concat(),li=[],Fr=Qn.length;Fr--;)typeof(hn=Qn.shift())=="string"?li.push(hn):Array.isArray(dn)&&(hn.length===1||hn[1]===void 0&&hn[2]===void 0)?li.push(hn[0]):li.push([hn[0],hn[1],hn[2]]);return li}function Ko(dn,hn){var Qn;if(typeof dn=="string")Qn=hn(dn)[0];else if(Array.isArray(dn)){for(var li,Fr,xs=dn.concat(),kl=[],ji=xs.length;ji--;)typeof(li=xs.shift())=="string"?kl.push(hn(li)[0]):Array.isArray(li)&&typeof li[0]=="string"&&(Fr=hn(li[0],li[1],li[2]),kl.push([Fr[0],Fr[1],Fr[2]]));Qn=kl}return Qn}var go=!1,Jo=!0;if(typeof v=="string")go=!0;else if(Array.isArray(v)){var _l=v.concat();He=[];for(var mo,Ri=_l.length;Ri--;)(typeof(mo=_l.shift())!="string"||Array.isArray(mo)&&typeof mo[0]!="string")&&(Jo=!1);go=Jo}if(go===!1)throw new Error('Type of text must be string or Array. "'+v+'" is not recognized.');typeof v=="string"&&(v=v.match(/[\r?\n]/)?v.split(/\r\n|\r|\n/g):[v]);var Wo=xe/ln.internal.scaleFactor,$o=Wo*(Mi-1);switch(ie.baseline){case"bottom":H-=$o;break;case"top":H+=Wo-$o;break;case"hanging":H+=Wo-2*$o;break;case"middle":H+=Wo/2-$o}if((_t=ie.maxWidth||0)>0&&(typeof v=="string"?v=ln.splitTextToSize(v,_t):Object.prototype.toString.call(v)==="[object Array]"&&(v=v.reduce(function(dn,hn){return dn.concat(ln.splitTextToSize(hn,_t))},[]))),Re={text:v,x:C,y:H,options:ie,mutex:{pdfEscape:$n,activeFontKey:$e,fonts:Rt,activeFontSize:xe}},en.publish("preProcessText",Re),v=Re.text,rt=(ie=Re.options).angle,un instanceof lt==0&&rt&&typeof rt=="number"){rt*=Math.PI/180,ie.rotationDirection===0&&(rt=-rt),W===te&&(rt=-rt);var Cl=Math.cos(rt),Nr=Math.sin(rt);un=new lt(Cl,Nr,-Nr,Cl,0,0)}else rt&&rt instanceof lt&&(un=rt);W!==te||un||(un=Gn),(xt=ie.charSpace||jr)!==void 0&&(Pn+=oe(X(xt))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(ei=ie.horizontalScale)!==void 0&&(Pn+=oe(100*ei)+` Tz
`),ie.lang;var Yi=-1,tc=ie.renderingMode!==void 0?ie.renderingMode:ie.stroke,Tl=ln.internal.getCurrentPageInfo().pageContext;switch(tc){case 0:case!1:case"fill":Yi=0;break;case 1:case!0:case"stroke":Yi=1;break;case 2:case"fillThenStroke":Yi=2;break;case 3:case"invisible":Yi=3;break;case 4:case"fillAndAddForClipping":Yi=4;break;case 5:case"strokeAndAddPathForClipping":Yi=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":Yi=6;break;case 7:case"addToPathForClipping":Yi=7}var nc=Tl.usedRenderingMode!==void 0?Tl.usedRenderingMode:-1;Yi!==-1?Pn+=Yi+` Tr
`:nc!==-1&&(Pn+=`0 Tr
`),Yi!==-1&&(Tl.usedRenderingMode=Yi),it=ie.align||"left";var Oa,el=xe*Mi,bs=ln.internal.pageSize.getWidth(),El=Rt[$e];xt=ie.charSpace||jr,_t=ie.maxWidth||0,Vt=Object.assign({autoencode:!0,noBOM:!0},ie.flags);var tl=[],ys=function(dn){return ln.getStringUnitWidth(dn,{font:El,charSpace:xt,fontSize:xe,doKerning:!1})*xe/zr};if(Object.prototype.toString.call(v)==="[object Array]"){var _i;He=po(v),it!=="left"&&(Oa=He.map(ys));var mi,Ll=0;if(it==="right"){C-=Oa[0],v=[],Ri=He.length;for(var Br=0;Br<Ri;Br++)Br===0?(mi=vr(C),_i=sa(H)):(mi=X(Ll-Oa[Br]),_i=-el),v.push([He[Br],mi,_i]),Ll=Oa[Br]}else if(it==="center"){C-=Oa[0]/2,v=[],Ri=He.length;for(var Pr=0;Pr<Ri;Pr++)Pr===0?(mi=vr(C),_i=sa(H)):(mi=X((Ll-Oa[Pr])/2),_i=-el),v.push([He[Pr],mi,_i]),Ll=Oa[Pr]}else if(it==="left"){v=[],Ri=He.length;for(var nl=0;nl<Ri;nl++)v.push(He[nl])}else if(it==="justify"&&El.encoding==="Identity-H"){v=[],Ri=He.length,_t=_t!==0?_t:bs;for(var vo=0,Zn=0;Zn<Ri;Zn++)if(_i=Zn===0?sa(H):-el,mi=Zn===0?vr(C):vo,Zn<Ri-1){var bo=X((_t-Oa[Zn])/(He[Zn].split(" ").length-1)),Sr=He[Zn].split(" ");v.push([Sr[0]+" ",mi,_i]),vo=0;for(var Qa=1;Qa<Sr.length;Qa++){var il=(ys(Sr[Qa-1]+" "+Sr[Qa])-ys(Sr[Qa]))*zr+bo;Qa==Sr.length-1?v.push([Sr[Qa],il,0]):v.push([Sr[Qa]+" ",il,0]),vo-=il}}else v.push([He[Zn],mi,_i]);v.push(["",vo,0])}else{if(it!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(v=[],Ri=He.length,_t=_t!==0?_t:bs,Zn=0;Zn<Ri;Zn++){_i=Zn===0?sa(H):-el,mi=Zn===0?vr(C):0;var Ol=He[Zn].split(" ").length-1,Dl=Ol>0?(_t-Oa[Zn])/Ol:0;Zn<Ri-1?tl.push(oe(X(Dl))):tl.push(0),v.push([He[Zn],mi,_i])}}}(typeof ie.R2L=="boolean"?ie.R2L:Ke)===!0&&(v=Ko(v,function(dn,hn,Qn){return[dn.split("").reverse().join(""),hn,Qn]})),Re={text:v,x:C,y:H,options:ie,mutex:{pdfEscape:$n,activeFontKey:$e,fonts:Rt,activeFontSize:xe}},en.publish("postProcessText",Re),v=Re.text,Bn=Re.mutex.isHex||!1;var Ar=Rt[$e].encoding;Ar!=="WinAnsiEncoding"&&Ar!=="StandardEncoding"||(v=Ko(v,function(dn,hn,Qn){return[vs(dn),hn,Qn]})),He=po(v),v=[];for(var Ka,al,Ja,_r=Array.isArray(He[0])?1:0,Ur="",yo=function(dn,hn,Qn){var li="";return Qn instanceof lt?(Qn=typeof ie.angle=="number"?ki(Qn,new lt(1,0,0,1,dn,hn)):ki(new lt(1,0,0,1,dn,hn),Qn),W===te&&(Qn=ki(new lt(1,0,0,-1,0,0),Qn)),li=Qn.join(" ")+` Tm
`):li=oe(dn)+" "+oe(hn)+` Td
`,li},vi=0;vi<He.length;vi++){switch(Ur="",_r){case 1:Ja=(Bn?"<":"(")+He[vi][0]+(Bn?">":")"),Ka=parseFloat(He[vi][1]),al=parseFloat(He[vi][2]);break;case 0:Ja=(Bn?"<":"(")+He[vi]+(Bn?">":")"),Ka=vr(C),al=sa(H)}tl!==void 0&&tl[vi]!==void 0&&(Ur=tl[vi]+` Tw
`),vi===0?v.push(Ur+yo(Ka,al,un)+Ja):_r===0?v.push(Ur+Ja):_r===1&&v.push(Ur+yo(Ka,al,un)+Ja)}v=_r===0?v.join(` Tj
T* `):v.join(` Tj
`),v+=` Tj
`;var Wa=`BT
/`;return Wa+=$e+" "+xe+` Tf
`,Wa+=oe(xe*Mi)+` TL
`,Wa+=br+`
`,Wa+=Pn,Wa+=v,V(Wa+="ET"),L[$e]=!0,ln};var Zs=w.__private__.clip=w.clip=function(v){return V(v==="evenodd"?"W*":"W"),this};w.clipEvenOdd=function(){return Zs("evenodd")},w.__private__.discardPath=w.discardPath=function(){return V("n"),this};var Ga=w.__private__.isValidStyle=function(v){var C=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(v)!==-1&&(C=!0),C};w.__private__.setDefaultPathOperation=w.setDefaultPathOperation=function(v){return Ga(v)&&(b=v),this};var Qs=w.__private__.getStyle=w.getStyle=function(v){var C=b;switch(v){case"D":case"S":C="S";break;case"F":C="f";break;case"FD":case"DF":C="B";break;case"f":case"f*":case"B":case"B*":C=v}return C},Ht=w.close=function(){return V("h"),this};w.stroke=function(){return V("S"),this},w.fill=function(v){return Ho("f",v),this},w.fillEvenOdd=function(v){return Ho("f*",v),this},w.fillStroke=function(v){return Ho("B",v),this},w.fillStrokeEvenOdd=function(v){return Ho("B*",v),this};var Ho=function(v,C){xn(C)==="object"?Ya(C,v):V(v)},co=function(v){v===null||W===te&&v===void 0||(v=Qs(v),V(v))};function wl(v,C,H,ie,he){var Re=new Xc(C||this.boundingBox,H||this.xStep,ie||this.yStep,this.gState,he||this.matrix);Re.stream=this.stream;var He=v+"$$"+this.cloneIndex+++"$$";return Aa(He,Re),Re}var Ya=function(v,C){var H=Nn[v.key],ie=bt[H];if(ie instanceof Us)V("q"),V(Gi(C)),ie.gState&&w.setGState(ie.gState),V(v.matrix.toString()+" cm"),V("/"+H+" sh"),V("Q");else if(ie instanceof Xc){var he=new lt(1,0,0,-1,0,ho());v.matrix&&(he=he.multiply(v.matrix||Gn),H=wl.call(ie,v.key,v.boundingBox,v.xStep,v.yStep,he).id),V("q"),V("/Pattern cs"),V("/"+H+" scn"),ie.gState&&w.setGState(ie.gState),V(C),V("Q")}},Gi=function(v){switch(v){case"f":case"F":case"n":return"W n";case"f*":return"W* n";case"B":case"S":return"W S";case"B*":return"W* S"}},Rr=w.moveTo=function(v,C){return V(oe(X(v))+" "+oe(Q(C))+" m"),this},Ks=w.lineTo=function(v,C){return V(oe(X(v))+" "+oe(Q(C))+" l"),this},mr=w.curveTo=function(v,C,H,ie,he,Re){return V([oe(X(v)),oe(Q(C)),oe(X(H)),oe(Q(ie)),oe(X(he)),oe(Q(Re)),"c"].join(" ")),this};w.__private__.line=w.line=function(v,C,H,ie,he){if(isNaN(v)||isNaN(C)||isNaN(H)||isNaN(ie)||!Ga(he))throw new Error("Invalid arguments passed to jsPDF.line");return W===ne?this.lines([[H-v,ie-C]],v,C,[1,1],he||"S"):this.lines([[H-v,ie-C]],v,C,[1,1]).stroke()},w.__private__.lines=w.lines=function(v,C,H,ie,he,Re){var He,rt,it,xt,_t,Vt,ei,un,ln,fn,Bn,Pn;if(typeof v=="number"&&(Pn=H,H=C,C=v,v=Pn),ie=ie||[1,1],Re=Re||!1,isNaN(C)||isNaN(H)||!Array.isArray(v)||!Array.isArray(ie)||!Ga(he)||typeof Re!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(Rr(C,H),He=ie[0],rt=ie[1],xt=v.length,fn=C,Bn=H,it=0;it<xt;it++)(_t=v[it]).length===2?(fn=_t[0]*He+fn,Bn=_t[1]*rt+Bn,Ks(fn,Bn)):(Vt=_t[0]*He+fn,ei=_t[1]*rt+Bn,un=_t[2]*He+fn,ln=_t[3]*rt+Bn,fn=_t[4]*He+fn,Bn=_t[5]*rt+Bn,mr(Vt,ei,un,ln,fn,Bn));return Re&&Ht(),co(he),this},w.path=function(v){for(var C=0;C<v.length;C++){var H=v[C],ie=H.c;switch(H.op){case"m":Rr(ie[0],ie[1]);break;case"l":Ks(ie[0],ie[1]);break;case"c":mr.apply(this,ie);break;case"h":Ht()}}return this},w.__private__.rect=w.rect=function(v,C,H,ie,he){if(isNaN(v)||isNaN(C)||isNaN(H)||isNaN(ie)||!Ga(he))throw new Error("Invalid arguments passed to jsPDF.rect");return W===ne&&(ie=-ie),V([oe(X(v)),oe(Q(C)),oe(X(H)),oe(X(ie)),"re"].join(" ")),co(he),this},w.__private__.triangle=w.triangle=function(v,C,H,ie,he,Re,He){if(isNaN(v)||isNaN(C)||isNaN(H)||isNaN(ie)||isNaN(he)||isNaN(Re)||!Ga(He))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[H-v,ie-C],[he-H,Re-ie],[v-he,C-Re]],v,C,[1,1],He,!0),this},w.__private__.roundedRect=w.roundedRect=function(v,C,H,ie,he,Re,He){if(isNaN(v)||isNaN(C)||isNaN(H)||isNaN(ie)||isNaN(he)||isNaN(Re)||!Ga(He))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var rt=4/3*(Math.SQRT2-1);return he=Math.min(he,.5*H),Re=Math.min(Re,.5*ie),this.lines([[H-2*he,0],[he*rt,0,he,Re-Re*rt,he,Re],[0,ie-2*Re],[0,Re*rt,-he*rt,Re,-he,Re],[2*he-H,0],[-he*rt,0,-he,-Re*rt,-he,-Re],[0,2*Re-ie],[0,-Re*rt,he*rt,-Re,he,-Re]],v+he,C,[1,1],He,!0),this},w.__private__.ellipse=w.ellipse=function(v,C,H,ie,he){if(isNaN(v)||isNaN(C)||isNaN(H)||isNaN(ie)||!Ga(he))throw new Error("Invalid arguments passed to jsPDF.ellipse");var Re=4/3*(Math.SQRT2-1)*H,He=4/3*(Math.SQRT2-1)*ie;return Rr(v+H,C),mr(v+H,C-He,v+Re,C-ie,v,C-ie),mr(v-Re,C-ie,v-H,C-He,v-H,C),mr(v-H,C+He,v-Re,C+ie,v,C+ie),mr(v+Re,C+ie,v+H,C+He,v+H,C),co(he),this},w.__private__.circle=w.circle=function(v,C,H,ie){if(isNaN(v)||isNaN(C)||isNaN(H)||!Ga(ie))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(v,C,H,H,ie)},w.setFont=function(v,C,H){return H&&(C=ye(C,H)),$e=Xs(v,C,{disableWarning:!1}),this};var Js=w.__private__.getFont=w.getFont=function(){return Rt[Xs.apply(w,arguments)]};w.__private__.getFontList=w.getFontList=function(){var v,C,H={};for(v in jt)if(jt.hasOwnProperty(v))for(C in H[v]=[],jt[v])jt[v].hasOwnProperty(C)&&H[v].push(C);return H},w.addFont=function(v,C,H,ie,he){var Re=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&Re.indexOf(arguments[3])!==-1?he=arguments[3]:arguments[3]&&Re.indexOf(arguments[3])==-1&&(H=ye(H,ie)),hs.call(this,v,C,H,he=he||"Identity-H")};var Vo,gt=o.lineWidth||.200025,gs=w.__private__.getLineWidth=w.getLineWidth=function(){return gt},Ws=w.__private__.setLineWidth=w.setLineWidth=function(v){return gt=v,V(oe(X(v))+" w"),this};w.__private__.setLineDash=mt.API.setLineDash=mt.API.setLineDashPattern=function(v,C){if(v=v||[],C=C||0,isNaN(C)||!Array.isArray(v))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return v=v.map(function(H){return oe(X(H))}).join(" "),C=oe(X(C)),V("["+v+"] "+C+" d"),this};var ms=w.__private__.getLineHeight=w.getLineHeight=function(){return xe*Vo};w.__private__.getLineHeight=w.getLineHeight=function(){return xe*Vo};var uo=w.__private__.setLineHeightFactor=w.setLineHeightFactor=function(v){return typeof(v=v||1.15)=="number"&&(Vo=v),this},$s=w.__private__.getLineHeightFactor=w.getLineHeightFactor=function(){return Vo};uo(o.lineHeight);var vr=w.__private__.getHorizontalCoordinate=function(v){return X(v)},sa=w.__private__.getVerticalCoordinate=function(v){return W===te?v:yt[Z].mediaBox.topRightY-yt[Z].mediaBox.bottomLeftY-X(v)},tu=w.__private__.getHorizontalCoordinateString=w.getHorizontalCoordinateString=function(v){return oe(vr(v))},ec=w.__private__.getVerticalCoordinateString=w.getVerticalCoordinateString=function(v){return oe(sa(v))},Go=o.strokeColor||"0 G";w.__private__.getStrokeColor=w.getDrawColor=function(){return oa(Go)},w.__private__.setStrokeColor=w.setDrawColor=function(v,C,H,ie){return Go=Ca({ch1:v,ch2:C,ch3:H,ch4:ie,pdfColorType:"draw",precision:2}),V(Go),this};var Yo=o.fillColor||"0 g";w.__private__.getFillColor=w.getFillColor=function(){return oa(Yo)},w.__private__.setFillColor=w.setFillColor=function(v,C,H,ie){return Yo=Ca({ch1:v,ch2:C,ch3:H,ch4:ie,pdfColorType:"fill",precision:2}),V(Yo),this};var br=o.textColor||"0 g",nu=w.__private__.getTextColor=w.getTextColor=function(){return oa(br)};w.__private__.setTextColor=w.setTextColor=function(v,C,H,ie){return br=Ca({ch1:v,ch2:C,ch3:H,ch4:ie,pdfColorType:"text",precision:3}),this};var jr=o.charSpace,Ta=w.__private__.getCharSpace=w.getCharSpace=function(){return parseFloat(jr||0)};w.__private__.setCharSpace=w.setCharSpace=function(v){if(isNaN(v))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return jr=v,this};var Xo=0;w.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},w.__private__.setLineCap=w.setLineCap=function(v){var C=w.CapJoinStyles[v];if(C===void 0)throw new Error("Line cap style of '"+v+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Xo=C,V(C+" J"),this};var yr=0;w.__private__.setLineJoin=w.setLineJoin=function(v){var C=w.CapJoinStyles[v];if(C===void 0)throw new Error("Line join style of '"+v+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return yr=C,V(C+" j"),this},w.__private__.setLineMiterLimit=w.__private__.setMiterLimit=w.setLineMiterLimit=w.setMiterLimit=function(v){if(v=v||0,isNaN(v))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return V(oe(X(v))+" M"),this},w.GState=dd,w.setGState=function(v){(v=typeof v=="string"?ft[Ot[v]]:xr(null,v)).equals(Cn)||(V("/"+v.id+" gs"),Cn=v)};var xr=function(v,C){if(!v||!Ot[v]){var H=!1;for(var ie in ft)if(ft.hasOwnProperty(ie)&&ft[ie].equals(C)){H=!0;break}if(H)C=ft[ie];else{var he="GS"+(Object.keys(ft).length+1).toString(10);ft[he]=C,C.id=he}return v&&(Ot[v]=C.id),en.publish("addGState",C),C}};w.addGState=function(v,C){return xr(v,C),this},w.saveGraphicsState=function(){return V("q"),wn.push({key:$e,size:xe,color:br}),this},w.restoreGraphicsState=function(){V("Q");var v=wn.pop();return $e=v.key,xe=v.size,br=v.color,Cn=null,this},w.setCurrentTransformationMatrix=function(v){return V(v.toString()+" cm"),this},w.comment=function(v){return V("#"+v),this};var Ea=function(v,C){var H=v||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return H},set:function(Re){isNaN(Re)||(H=parseFloat(Re))}});var ie=C||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return ie},set:function(Re){isNaN(Re)||(ie=parseFloat(Re))}});var he="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return he},set:function(Re){he=Re.toString()}}),this},Nl=function(v,C,H,ie){Ea.call(this,v,C),this.type="rect";var he=H||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return he},set:function(He){isNaN(He)||(he=parseFloat(He))}});var Re=ie||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return Re},set:function(He){isNaN(He)||(Re=parseFloat(He))}}),this},fo=function(){this.page=Ft,this.currentPage=Z,this.pages=Ee.slice(0),this.pagesContext=yt.slice(0),this.x=ht,this.y=Vn,this.matrix=Qt,this.width=La(Z),this.height=ba(Z),this.outputDestination=Qe,this.id="",this.objectNumber=-1};fo.prototype.restore=function(){Ft=this.page,Z=this.currentPage,yt=this.pagesContext,Ee=this.pages,ht=this.x,Vn=this.y,Qt=this.matrix,Xa(Z,this.width),Za(Z,this.height),Qe=this.outputDestination};var Sl=function(v,C,H,ie,he){ia.push(new fo),Ft=Z=0,Ee=[],ht=v,Vn=C,Qt=he,Xn([H,ie])};for(var wr in w.beginFormObject=function(v,C,H,ie,he){return Sl(v,C,H,ie,he),this},w.endFormObject=function(v){return(function(C){if(kr[C])ia.pop().restore();else{var H=new fo,ie="Xo"+(Object.keys(Di).length+1).toString(10);H.id=ie,kr[C]=ie,Di[ie]=H,en.publish("addFormObject",H),ia.pop().restore()}})(v),this},w.doFormObject=function(v,C){var H=Di[kr[v]];return V("q"),V(C.toString()+" cm"),V("/"+H.id+" Do"),V("Q"),this},w.getFormObject=function(v){var C=Di[kr[v]];return{x:C.x,y:C.y,width:C.width,height:C.height,matrix:C.matrix}},w.save=function(v,C){return v=v||"generated.pdf",(C=C||{}).returnPromise=C.returnPromise||!1,C.returnPromise===!1?(Ps(dr(Vi()),v),typeof Ps.unload=="function"&&Et.setTimeout&&setTimeout(Ps.unload,911),this):new Promise(function(H,ie){try{var he=Ps(dr(Vi()),v);typeof Ps.unload=="function"&&Et.setTimeout&&setTimeout(Ps.unload,911),H(he)}catch(Re){ie(Re.message)}})},mt.API)mt.API.hasOwnProperty(wr)&&(wr==="events"&&mt.API.events.length?(function(v,C){var H,ie,he;for(he=C.length-1;he!==-1;he--)H=C[he][0],ie=C[he][1],v.subscribe.apply(v,[H].concat(typeof ie=="function"?[ie]:ie))})(en,mt.API.events):w[wr]=mt.API[wr]);function La(v){return yt[v].mediaBox.topRightX-yt[v].mediaBox.bottomLeftX}function Xa(v,C){yt[v].mediaBox.topRightX=C+yt[v].mediaBox.bottomLeftX}function ba(v){return yt[v].mediaBox.topRightY-yt[v].mediaBox.bottomLeftY}function Za(v,C){yt[v].mediaBox.topRightY=C+yt[v].mediaBox.bottomLeftY}var Al=w.getPageWidth=function(v){return La(v=v||Z)/Nt},Zo=w.setPageWidth=function(v,C){Xa(v,C*Nt)},ho=w.getPageHeight=function(v){return ba(v=v||Z)/Nt},Qo=w.setPageHeight=function(v,C){Za(v,C*Nt)};return w.internal={pdfEscape:$n,getStyle:Qs,getFont:Js,getFontSize:Ie,getCharSpace:Ta,getTextColor:nu,getLineHeight:ms,getLineHeightFactor:$s,getLineWidth:gs,write:Xe,getHorizontalCoordinate:vr,getVerticalCoordinate:sa,getCoordinateString:tu,getVerticalCoordinateString:ec,collections:{},newObject:qn,newAdditionalObject:sr,newObjectDeferred:Yn,newObjectDeferredBegin:Wn,getFilters:Ha,putStream:va,events:en,scaleFactor:Nt,pageSize:{getWidth:function(){return Al(Z)},setWidth:function(v){Zo(Z,v)},getHeight:function(){return ho(Z)},setHeight:function(v){Qo(Z,v)}},encryptionOptions:x,encryption:gi,getEncryptor:function(v){return x!==null?gi.encryptor(v,0):function(C){return C}},output:Io,getNumberOfPages:Ys,get pages(){return Ee},out:V,f2:E,f3:B,getPageInfo:gr,getPageInfoByObjId:so,getCurrentPageInfo:eu,getPDFVersion:U,Point:Ea,Rectangle:Nl,Matrix:lt,hasHotfix:pr},Object.defineProperty(w.internal.pageSize,"width",{get:function(){return Al(Z)},set:function(v){Zo(Z,v)},enumerable:!0,configurable:!0}),Object.defineProperty(w.internal.pageSize,"height",{get:function(){return ho(Z)},set:function(v){Qo(Z,v)},enumerable:!0,configurable:!0}),(function(v){for(var C=0,H=Me.length;C<H;C++){var ie=hs.call(this,v[C][0],v[C][1],v[C][2],Me[C][3],!0);A===!1&&(L[ie]=!0);var he=v[C][0].split("-");ds({id:ie,fontName:he[0],fontStyle:he[1]||""})}en.publish("addFonts",{fonts:Rt,dictionary:jt})}).call(w,Me),$e="F1",Ai(f,r),en.publish("initialized"),w}Vc.prototype.lsbFirstWord=function(o){return String.fromCharCode(255&o,o>>8&255,o>>16&255,o>>24&255)},Vc.prototype.toHexString=function(o){return o.split("").map(function(a){return("0"+(255&a.charCodeAt(0)).toString(16)).slice(-2)}).join("")},Vc.prototype.hexToBytes=function(o){for(var a=[],r=0;r<o.length;r+=2)a.push(String.fromCharCode(parseInt(o.substr(r,2),16)));return a.join("")},Vc.prototype.processOwnerPassword=function(o,a){return U1(P1(a).substr(0,5),o)},Vc.prototype.encryptor=function(o,a){var r=P1(this.encryptionKey+String.fromCharCode(255&o,o>>8&255,o>>16&255,255&a,a>>8&255)).substr(0,10);return function(l){return U1(r,l)}},dd.prototype.equals=function(o){var a,r="id,objectNumber,equals";if(!o||xn(o)!==xn(this))return!1;var l=0;for(a in this)if(!(r.indexOf(a)>=0)){if(this.hasOwnProperty(a)&&!o.hasOwnProperty(a)||this[a]!==o[a])return!1;l++}for(a in o)o.hasOwnProperty(a)&&r.indexOf(a)<0&&l--;return l===0},mt.API={events:[]},mt.version="4.2.1";var oi=mt.API,K1=1,Gs=function(o){return o.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Ic=function(o){return o.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},Hs=function(o){return o.toString().replace(/#/g,"#23").replace(/[\s\n\r()<>[\]{}\/%]/g,function(a){var r=a.charCodeAt(0).toString(16).toUpperCase();return"#"+(r.length===1?"0"+r:r)})},Mt=function(o){return o.toFixed(2)},ss=function(o){return o.toFixed(5)};oi.__acroform__={};var Ia=function(o,a){o.prototype=Object.create(a.prototype),o.prototype.constructor=o},ig=function(o){return o*K1},Mo=function(o){var a=new Am,r=ut.internal.getHeight(o)||0,l=ut.internal.getWidth(o)||0;return a.BBox=[0,0,Number(Mt(l)),Number(Mt(r))],a},Y3=oi.__acroform__.setBit=function(o,a){if(o=o||0,a=a||0,isNaN(o)||isNaN(a))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return o|1<<a},X3=oi.__acroform__.clearBit=function(o,a){if(o=o||0,a=a||0,isNaN(o)||isNaN(a))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return o&~(1<<a)},Z3=oi.__acroform__.getBit=function(o,a){if(isNaN(o)||isNaN(a))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return o&1<<a?1:0},di=oi.__acroform__.getBitForPdf=function(o,a){if(isNaN(o)||isNaN(a))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return Z3(o,a-1)},hi=oi.__acroform__.setBitForPdf=function(o,a){if(isNaN(o)||isNaN(a))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return Y3(o,a-1)},pi=oi.__acroform__.clearBitForPdf=function(o,a){if(isNaN(o)||isNaN(a))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return X3(o,a-1)},Q3=oi.__acroform__.calculateCoordinates=function(o,a){var r=a.internal.getHorizontalCoordinate,l=a.internal.getVerticalCoordinate,f=o[0],u=o[1],m=o[2],p=o[3],g={};return g.lowerLeft_X=r(f)||0,g.lowerLeft_Y=l(u+p)||0,g.upperRight_X=r(f+m)||0,g.upperRight_Y=l(u)||0,[Number(Mt(g.lowerLeft_X)),Number(Mt(g.lowerLeft_Y)),Number(Mt(g.upperRight_X)),Number(Mt(g.upperRight_Y))]},K3=function(o){if(o.appearanceStreamContent)return o.appearanceStreamContent;if(o.V||o.DV){var a=[],r=o._V||o.DV,l=F1(o,r),f=o.scope.internal.getFont(o.fontName,o.fontStyle).id;a.push("/Tx BMC"),a.push("q"),a.push("BT"),a.push(o.scope.__private__.encodeColorString(o.color)),a.push("/"+f+" "+Mt(l.fontSize)+" Tf"),a.push("1 0 0 1 0 0 Tm"),a.push(l.text),a.push("ET"),a.push("Q"),a.push("EMC");var u=Mo(o);return u.scope=o.scope,u.stream=a.join(`
`),u}},F1=function(o,a){var r=o.fontSize===0?o.maxFontSize:o.fontSize,l={text:"",fontSize:""},f=(a=(a=a.substr(0,1)=="("?a.substr(1):a).substr(a.length-1)==")"?a.substr(0,a.length-1):a).split(" ");f=o.multiline?f.map(function(E){return E.split(`
`)}):f.map(function(E){return[E]});var u=r,m=ut.internal.getHeight(o)||0;m=m<0?-m:m;var p=ut.internal.getWidth(o)||0;p=p<0?-p:p;var g=function(E,B,X){if(E+1<f.length){var Q=B+" "+f[E+1][0];return $f(Q,o,X).width<=p-4}return!1};u++;e:for(;u>0;){a="",u--;var b,x,A=$f("3",o,u).height,L=o.multiline?m-u:(m-A)/2,w=L+=2,F=0,U=0,k=0;if(u<=0){a=`(...) Tj
`,a+="% Width of Text: "+$f(a,o,u=12).width+", FieldWidth:"+p+`
`;break}for(var j="",ne=0,te=0;te<f.length;te++)if(f.hasOwnProperty(te)){var W=!1;if(f[te].length!==1&&k!==f[te].length-1){if((A+2)*(ne+2)+2>m)continue e;j+=f[te][k],W=!0,U=te,te--}else{j=(j+=f[te][k]+" ").substr(j.length-1)==" "?j.substr(0,j.length-1):j;var pe=parseInt(te),ke=g(pe,j,u),ye=te>=f.length-1;if(ke&&!ye){j+=" ",k=0;continue}if(ke||ye){if(ye)U=pe;else if(o.multiline&&(A+2)*(ne+2)+2>m)continue e}else{if(!o.multiline||(A+2)*(ne+2)+2>m)continue e;U=pe}}for(var oe="",K=F;K<=U;K++){var ve=f[K];if(o.multiline){if(K===U){oe+=ve[k]+" ",k=(k+1)%ve.length;continue}if(K===F){oe+=ve[ve.length-1]+" ";continue}}oe+=ve[0]+" "}switch(oe=oe.substr(oe.length-1)==" "?oe.substr(0,oe.length-1):oe,x=$f(oe,o,u).width,o.textAlign){case"right":b=p-x-2;break;case"center":b=(p-x)/2;break;default:b=2}a+=Mt(b)+" "+Mt(w)+` Td
`,a+="("+Gs(oe)+`) Tj
`,a+=-Mt(b)+` 0 Td
`,w=-(u+2),x=0,F=W?U:U+1,ne++,j=""}break}return l.text=a,l.fontSize=u,l},$f=function(o,a,r){var l=a.scope.internal.getFont(a.fontName,a.fontStyle),f=a.scope.getStringUnitWidth(o,{font:l,fontSize:parseFloat(r),charSpace:0})*parseFloat(r);return{height:a.scope.getStringUnitWidth("3",{font:l,fontSize:parseFloat(r),charSpace:0})*parseFloat(r)*1.5,width:f}},J3={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},W3=function(o,a){var r={type:"reference",object:o};a.internal.getPageInfo(o.page).pageContext.annotations.find(function(l){return l.type===r.type&&l.object===r.object})===void 0&&a.internal.getPageInfo(o.page).pageContext.annotations.push(r)},$3=function(o,a){if(a.scope=o,o.internal!==void 0&&(o.internal.acroformPlugin===void 0||o.internal.acroformPlugin.isInitialized===!1)){if(ro.FieldNum=0,o.internal.acroformPlugin=JSON.parse(JSON.stringify(J3)),o.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");K1=o.internal.scaleFactor,o.internal.acroformPlugin.acroFormDictionaryRoot=new _m,o.internal.acroformPlugin.acroFormDictionaryRoot.scope=o,o.internal.acroformPlugin.acroFormDictionaryRoot._eventID=o.internal.events.subscribe("postPutResources",function(){(function(r){r.internal.events.unsubscribe(r.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete r.internal.acroformPlugin.acroFormDictionaryRoot._eventID,r.internal.acroformPlugin.printedOut=!0})(o)}),o.internal.events.subscribe("buildDocument",function(){(function(r){r.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var l=r.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var f in l)if(l.hasOwnProperty(f)){var u=l[f];u.objId=void 0,u.hasAnnotation&&W3(u,r)}})(o)}),o.internal.events.subscribe("putCatalog",function(){(function(r){if(r.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");r.internal.write("/AcroForm "+r.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(o)}),o.internal.events.subscribe("postPutPages",function(r){(function(l,f){var u=!l;for(var m in l||(f.internal.newObjectDeferredBegin(f.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),f.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),l=l||f.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(l.hasOwnProperty(m)){var p=l[m],g=[],b=p.Rect;if(p.Rect&&(p.Rect=Q3(p.Rect,f)),f.internal.newObjectDeferredBegin(p.objId,!0),p.DA=ut.createDefaultAppearanceStream(p),xn(p)==="object"&&typeof p.getKeyValueListForStream=="function"&&(g=p.getKeyValueListForStream()),p.Rect=b,p.hasAppearanceStream&&!p.appearanceStreamContent){var x=K3(p);g.push({key:"AP",value:"<</N "+x+">>"}),f.internal.acroformPlugin.xForms.push(x)}if(p.appearanceStreamContent){var A="";for(var L in p.appearanceStreamContent)if(p.appearanceStreamContent.hasOwnProperty(L)){var w=p.appearanceStreamContent[L];if(A+="/"+L+" ",A+="<<",Object.keys(w).length>=1||Array.isArray(w)){for(var m in w)if(w.hasOwnProperty(m)){var F=w[m];typeof F=="function"&&(F=F.call(f,p)),A+="/"+m+" "+F+" ",f.internal.acroformPlugin.xForms.indexOf(F)>=0||f.internal.acroformPlugin.xForms.push(F)}}else typeof(F=w)=="function"&&(F=F.call(f,p)),A+="/"+m+" "+F,f.internal.acroformPlugin.xForms.indexOf(F)>=0||f.internal.acroformPlugin.xForms.push(F);A+=">>"}g.push({key:"AP",value:`<<
`+A+">>"})}f.internal.putStream({additionalKeyValues:g,objectId:p.objId}),f.internal.out("endobj")}u&&(function(U,k){for(var j in U)if(U.hasOwnProperty(j)){var ne=j,te=U[j];k.internal.newObjectDeferredBegin(te.objId,!0),xn(te)==="object"&&typeof te.putStream=="function"&&te.putStream(),delete U[ne]}})(f.internal.acroformPlugin.xForms,f)})(r,o)}),o.internal.acroformPlugin.isInitialized=!0}},Sm=oi.__acroform__.arrayToPdfArray=function(o,a,r){var l=function(m){return m};if(Array.isArray(o)){for(var f="[",u=0;u<o.length;u++)switch(u!==0&&(f+=" "),xn(o[u])){case"boolean":case"number":case"object":f+=o[u].toString();break;case"string":o[u].substr(0,1)==="/"?f+="/"+Hs(o[u].substr(1)):(a!==void 0&&r&&(l=r.internal.getEncryptor(a)),f+="("+Gs(l(o[u].toString()))+")")}return f+"]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},S1=function(o,a,r){var l=function(f){return f};return a!==void 0&&r&&(l=r.internal.getEncryptor(a)),(o=o||"").toString(),"("+Gs(l(o))+")"},jo=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(o){this._objId=o}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};jo.prototype.toString=function(){return this.objId+" 0 R"},jo.prototype.putStream=function(){var o=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:o,objectId:this.objId}),this.scope.internal.out("endobj")},jo.prototype.getKeyValueListForStream=function(){var o=[],a=Object.getOwnPropertyNames(this).filter(function(u){return u!="content"&&u!="appearanceStreamContent"&&u!="scope"&&u!="objId"&&u.substring(0,1)!="_"});for(var r in a)if(Object.getOwnPropertyDescriptor(this,a[r]).configurable===!1){var l=a[r],f=this[l];f&&(Array.isArray(f)?o.push({key:l,value:Sm(f,this.objId,this.scope)}):f instanceof jo?(f.scope=this.scope,o.push({key:l,value:f.objId+" 0 R"})):typeof f!="function"&&o.push({key:l,value:f}))}return o};var Am=function(){jo.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var o,a=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return a},set:function(r){a=r}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(r){o=r.trim()},get:function(){return o||null}})};Ia(Am,jo);var _m=function(){jo.call(this);var o,a=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return a.length>0?a:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return a}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(o){var r=function(l){return l};return this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),"("+Gs(r(o))+")"}},set:function(r){o=r}})};Ia(_m,jo);var ro=function o(){jo.call(this);var a=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return a},set:function(j){if(isNaN(j))throw new Error('Invalid value "'+j+'" for attribute F supplied.');a=j}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!di(a,3)},set:function(j){j?this.F=hi(a,3):this.F=pi(a,3)}});var r=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return r},set:function(j){if(isNaN(j))throw new Error('Invalid value "'+j+'" for attribute Ff supplied.');r=j}});var l=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(l.length!==0)return l},set:function(j){l=j!==void 0?j:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[0])?0:l[0]},set:function(j){l[0]=j}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[1])?0:l[1]},set:function(j){l[1]=j}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[2])?0:l[2]},set:function(j){l[2]=j}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[3])?0:l[3]},set:function(j){l[3]=j}});var f="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return f},set:function(j){switch(j){case"/Btn":case"/Tx":case"/Ch":case"/Sig":f=j;break;default:throw new Error('Invalid value "'+j+'" for attribute FT supplied.')}}});var u=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!u||u.length<1){if(this instanceof hd)return;u="FieldObject"+o.FieldNum++}var j=function(ne){return ne};return this.scope&&(j=this.scope.internal.getEncryptor(this.objId)),"("+Gs(j(u))+")"},set:function(j){u=j.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return u},set:function(j){u=j}});var m="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return m},set:function(j){m=j}});var p="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return p},set:function(j){p=j}});var g=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return g},set:function(j){g=j}});var b=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return b===void 0?50/K1:b},set:function(j){b=j}});var x="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return x},set:function(j){x=j}});var A="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!A||this instanceof hd||this instanceof Fs))return S1(A,this.objId,this.scope)},set:function(j){j=j.toString(),A=j}});var L=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(L)return this instanceof Hi==0?S1(L,this.objId,this.scope):L},set:function(j){j=j.toString(),L=this instanceof Hi==0?j.substr(0,1)==="("?Ic(j.substr(1,j.length-2)):Ic(j):j}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof Hi==1?Ic(L.substr(1,L.length-1)):L},set:function(j){j=j.toString(),L=this instanceof Hi==1?"/"+Hs(j):j}});var w=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(w)return w},set:function(j){this.V=j}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(w)return this instanceof Hi==0?S1(w,this.objId,this.scope):w},set:function(j){j=j.toString(),w=this instanceof Hi==0?j.substr(0,1)==="("?Ic(j.substr(1,j.length-2)):Ic(j):j}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof Hi==1?Ic(w.substr(1,w.length-1)):w},set:function(j){j=j.toString(),w=this instanceof Hi==1?"/"+Hs(j):j}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var F,U=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return U},set:function(j){j=!!j,U=j}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(F)return F},set:function(j){F=j}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,1)},set:function(j){j?this.Ff=hi(this.Ff,1):this.Ff=pi(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,2)},set:function(j){j?this.Ff=hi(this.Ff,2):this.Ff=pi(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,3)},set:function(j){j?this.Ff=hi(this.Ff,3):this.Ff=pi(this.Ff,3)}});var k=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(k!==null)return k},set:function(j){if([0,1,2].indexOf(j)===-1)throw new Error('Invalid value "'+j+'" for attribute Q supplied.');k=j}}),Object.defineProperty(this,"textAlign",{get:function(){var j;switch(k){case 0:default:j="left";break;case 1:j="center";break;case 2:j="right"}return j},configurable:!0,enumerable:!0,set:function(j){switch(j){case"right":case 2:k=2;break;case"center":case 1:k=1;break;default:k=0}}})};Ia(ro,jo);var Qc=function(){ro.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var o=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return o},set:function(r){o=r}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return o},set:function(r){o=r}});var a=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return Sm(a,this.objId,this.scope)},set:function(r){var l,f;f=[],typeof(l=r)=="string"&&(f=(function(u,m,p){p||(p=1);for(var g,b=[];g=m.exec(u);)b.push(g[p]);return b})(l,/\((.*?)\)/g)),a=f}}),this.getOptions=function(){return a},this.setOptions=function(r){a=r,this.sort&&a.sort()},this.addOption=function(r){r=(r=r||"").toString(),a.push(r),this.sort&&a.sort()},this.removeOption=function(r,l){for(l=l||!1,r=(r=r||"").toString();a.indexOf(r)!==-1&&(a.splice(a.indexOf(r),1),l!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,18)},set:function(r){r?this.Ff=hi(this.Ff,18):this.Ff=pi(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,19)},set:function(r){this.combo===!0&&(r?this.Ff=hi(this.Ff,19):this.Ff=pi(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,20)},set:function(r){r?(this.Ff=hi(this.Ff,20),a.sort()):this.Ff=pi(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,22)},set:function(r){r?this.Ff=hi(this.Ff,22):this.Ff=pi(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,23)},set:function(r){r?this.Ff=hi(this.Ff,23):this.Ff=pi(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,27)},set:function(r){r?this.Ff=hi(this.Ff,27):this.Ff=pi(this.Ff,27)}}),this.hasAppearanceStream=!1};Ia(Qc,ro);var Kc=function(){Qc.call(this),this.fontName="helvetica",this.combo=!1};Ia(Kc,Qc);var Jc=function(){Kc.call(this),this.combo=!0};Ia(Jc,Kc);var od=function(){Jc.call(this),this.edit=!0};Ia(od,Jc);var Hi=function(){ro.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,15)},set:function(r){r?this.Ff=hi(this.Ff,15):this.Ff=pi(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,16)},set:function(r){r?this.Ff=hi(this.Ff,16):this.Ff=pi(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,17)},set:function(r){r?this.Ff=hi(this.Ff,17):this.Ff=pi(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,26)},set:function(r){r?this.Ff=hi(this.Ff,26):this.Ff=pi(this.Ff,26)}});var o,a={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var r=function(u){return u};if(this.scope&&(r=this.scope.internal.getEncryptor(this.objId)),Object.keys(a).length!==0){var l,f=[];for(l in f.push("<<"),a)f.push("/"+l+" ("+Gs(r(a[l]))+")");return f.push(">>"),f.join(`
`)}},set:function(r){xn(r)==="object"&&(a=r)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return a.CA||""},set:function(r){typeof r=="string"&&(a.CA=r)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return o},set:function(r){var l=r==null?"":r.toString();l.substr(0,1)==="/"&&(l=l.substr(1)),o="/"+Hs(l)}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return o.substr(1,o.length-1)},set:function(r){o="/"+Hs(r)}})};Ia(Hi,ro);var ld=function(){Hi.call(this),this.pushButton=!0};Ia(ld,Hi);var Wc=function(){Hi.call(this),this.radio=!0,this.pushButton=!1;var o=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return o},set:function(a){o=a!==void 0?a:[]}})};Ia(Wc,Hi);var hd=function(){var o,a;ro.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return o},set:function(f){o=f}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return a},set:function(f){a=f}});var r,l={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var f=function(p){return p};this.scope&&(f=this.scope.internal.getEncryptor(this.objId));var u,m=[];for(u in m.push("<<"),l)m.push("/"+u+" ("+Gs(f(l[u]))+")");return m.push(">>"),m.join(`
`)},set:function(f){xn(f)==="object"&&(l=f)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return l.CA||""},set:function(f){typeof f=="string"&&(l.CA=f)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return r},set:function(f){var u=f==null?"":f.toString();u.substr(0,1)==="/"&&(u=u.substr(1)),r="/"+Hs(u)}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return r.substr(1,r.length-1)},set:function(f){var u=f==null?"":f.toString();u.substr(0,1)==="/"&&(u=u.substr(1)),r="/"+Hs(u)}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=ut.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};Ia(hd,ro),Wc.prototype.setAppearance=function(o){if(!("createAppearanceStream"in o)||!("getCA"in o))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var a in this.Kids)if(this.Kids.hasOwnProperty(a)){var r=this.Kids[a];r.appearanceStreamContent=o.createAppearanceStream(r.optionName),r.caption=o.getCA()}},Wc.prototype.createOption=function(o){var a=new hd;return a.Parent=this,a.optionName=o,this.Kids.push(a),e4.call(this.scope,a),a};var sd=function(){Hi.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=ut.CheckBox.createAppearanceStream()};Ia(sd,Hi);var Fs=function(){ro.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,13)},set:function(a){a?this.Ff=hi(this.Ff,13):this.Ff=pi(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,21)},set:function(a){a?this.Ff=hi(this.Ff,21):this.Ff=pi(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,23)},set:function(a){a?this.Ff=hi(this.Ff,23):this.Ff=pi(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,24)},set:function(a){a?this.Ff=hi(this.Ff,24):this.Ff=pi(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,25)},set:function(a){a?this.Ff=hi(this.Ff,25):this.Ff=pi(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,26)},set:function(a){a?this.Ff=hi(this.Ff,26):this.Ff=pi(this.Ff,26)}});var o=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return o},set:function(a){o=a}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return o},set:function(a){Number.isInteger(a)&&(o=a)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};Ia(Fs,ro);var cd=function(){Fs.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!di(this.Ff,14)},set:function(o){o?this.Ff=hi(this.Ff,14):this.Ff=pi(this.Ff,14)}}),this.password=!0};Ia(cd,Fs);var ut={CheckBox:{createAppearanceStream:function(){return{N:{On:ut.CheckBox.YesNormal},D:{On:ut.CheckBox.YesPushDown,Off:ut.CheckBox.OffPushDown}}},YesPushDown:function(o){var a=Mo(o);a.scope=o.scope;var r=[],l=o.scope.internal.getFont(o.fontName,o.fontStyle).id,f=o.scope.__private__.encodeColorString(o.color),u=F1(o,o.caption);return r.push("0.749023 g"),r.push("0 0 "+Mt(ut.internal.getWidth(o))+" "+Mt(ut.internal.getHeight(o))+" re"),r.push("f"),r.push("BMC"),r.push("q"),r.push("0 0 1 rg"),r.push("/"+l+" "+Mt(u.fontSize)+" Tf "+f),r.push("BT"),r.push(u.text),r.push("ET"),r.push("Q"),r.push("EMC"),a.stream=r.join(`
`),a},YesNormal:function(o){var a=Mo(o);a.scope=o.scope;var r=o.scope.internal.getFont(o.fontName,o.fontStyle).id,l=o.scope.__private__.encodeColorString(o.color),f=[],u=ut.internal.getHeight(o),m=ut.internal.getWidth(o),p=F1(o,o.caption);return f.push("1 g"),f.push("0 0 "+Mt(m)+" "+Mt(u)+" re"),f.push("f"),f.push("q"),f.push("0 0 1 rg"),f.push("0 0 "+Mt(m-1)+" "+Mt(u-1)+" re"),f.push("W"),f.push("n"),f.push("0 g"),f.push("BT"),f.push("/"+r+" "+Mt(p.fontSize)+" Tf "+l),f.push(p.text),f.push("ET"),f.push("Q"),a.stream=f.join(`
`),a},OffPushDown:function(o){var a=Mo(o);a.scope=o.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+Mt(ut.internal.getWidth(o))+" "+Mt(ut.internal.getHeight(o))+" re"),r.push("f"),a.stream=r.join(`
`),a}},RadioButton:{Circle:{createAppearanceStream:function(o){var a={D:{Off:ut.RadioButton.Circle.OffPushDown},N:{}};return a.N[o]=ut.RadioButton.Circle.YesNormal,a.D[o]=ut.RadioButton.Circle.YesPushDown,a},getCA:function(){return"l"},YesNormal:function(o){var a=Mo(o);a.scope=o.scope;var r=[],l=ut.internal.getWidth(o)<=ut.internal.getHeight(o)?ut.internal.getWidth(o)/4:ut.internal.getHeight(o)/4;l=Number((.9*l).toFixed(5));var f=ut.internal.Bezier_C,u=Number((l*f).toFixed(5));return r.push("q"),r.push("1 0 0 1 "+ss(ut.internal.getWidth(o)/2)+" "+ss(ut.internal.getHeight(o)/2)+" cm"),r.push(l+" 0 m"),r.push(l+" "+u+" "+u+" "+l+" 0 "+l+" c"),r.push("-"+u+" "+l+" -"+l+" "+u+" -"+l+" 0 c"),r.push("-"+l+" -"+u+" -"+u+" -"+l+" 0 -"+l+" c"),r.push(u+" -"+l+" "+l+" -"+u+" "+l+" 0 c"),r.push("f"),r.push("Q"),a.stream=r.join(`
`),a},YesPushDown:function(o){var a=Mo(o);a.scope=o.scope;var r=[],l=ut.internal.getWidth(o)<=ut.internal.getHeight(o)?ut.internal.getWidth(o)/4:ut.internal.getHeight(o)/4;l=Number((.9*l).toFixed(5));var f=Number((2*l).toFixed(5)),u=Number((f*ut.internal.Bezier_C).toFixed(5)),m=Number((l*ut.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+ss(ut.internal.getWidth(o)/2)+" "+ss(ut.internal.getHeight(o)/2)+" cm"),r.push(f+" 0 m"),r.push(f+" "+u+" "+u+" "+f+" 0 "+f+" c"),r.push("-"+u+" "+f+" -"+f+" "+u+" -"+f+" 0 c"),r.push("-"+f+" -"+u+" -"+u+" -"+f+" 0 -"+f+" c"),r.push(u+" -"+f+" "+f+" -"+u+" "+f+" 0 c"),r.push("f"),r.push("Q"),r.push("0 g"),r.push("q"),r.push("1 0 0 1 "+ss(ut.internal.getWidth(o)/2)+" "+ss(ut.internal.getHeight(o)/2)+" cm"),r.push(l+" 0 m"),r.push(l+" "+m+" "+m+" "+l+" 0 "+l+" c"),r.push("-"+m+" "+l+" -"+l+" "+m+" -"+l+" 0 c"),r.push("-"+l+" -"+m+" -"+m+" -"+l+" 0 -"+l+" c"),r.push(m+" -"+l+" "+l+" -"+m+" "+l+" 0 c"),r.push("f"),r.push("Q"),a.stream=r.join(`
`),a},OffPushDown:function(o){var a=Mo(o);a.scope=o.scope;var r=[],l=ut.internal.getWidth(o)<=ut.internal.getHeight(o)?ut.internal.getWidth(o)/4:ut.internal.getHeight(o)/4;l=Number((.9*l).toFixed(5));var f=Number((2*l).toFixed(5)),u=Number((f*ut.internal.Bezier_C).toFixed(5));return r.push("0.749023 g"),r.push("q"),r.push("1 0 0 1 "+ss(ut.internal.getWidth(o)/2)+" "+ss(ut.internal.getHeight(o)/2)+" cm"),r.push(f+" 0 m"),r.push(f+" "+u+" "+u+" "+f+" 0 "+f+" c"),r.push("-"+u+" "+f+" -"+f+" "+u+" -"+f+" 0 c"),r.push("-"+f+" -"+u+" -"+u+" -"+f+" 0 -"+f+" c"),r.push(u+" -"+f+" "+f+" -"+u+" "+f+" 0 c"),r.push("f"),r.push("Q"),a.stream=r.join(`
`),a}},Cross:{createAppearanceStream:function(o){var a={D:{Off:ut.RadioButton.Cross.OffPushDown},N:{}};return a.N[o]=ut.RadioButton.Cross.YesNormal,a.D[o]=ut.RadioButton.Cross.YesPushDown,a},getCA:function(){return"8"},YesNormal:function(o){var a=Mo(o);a.scope=o.scope;var r=[],l=ut.internal.calculateCross(o);return r.push("q"),r.push("1 1 "+Mt(ut.internal.getWidth(o)-2)+" "+Mt(ut.internal.getHeight(o)-2)+" re"),r.push("W"),r.push("n"),r.push(Mt(l.x1.x)+" "+Mt(l.x1.y)+" m"),r.push(Mt(l.x2.x)+" "+Mt(l.x2.y)+" l"),r.push(Mt(l.x4.x)+" "+Mt(l.x4.y)+" m"),r.push(Mt(l.x3.x)+" "+Mt(l.x3.y)+" l"),r.push("s"),r.push("Q"),a.stream=r.join(`
`),a},YesPushDown:function(o){var a=Mo(o);a.scope=o.scope;var r=ut.internal.calculateCross(o),l=[];return l.push("0.749023 g"),l.push("0 0 "+Mt(ut.internal.getWidth(o))+" "+Mt(ut.internal.getHeight(o))+" re"),l.push("f"),l.push("q"),l.push("1 1 "+Mt(ut.internal.getWidth(o)-2)+" "+Mt(ut.internal.getHeight(o)-2)+" re"),l.push("W"),l.push("n"),l.push(Mt(r.x1.x)+" "+Mt(r.x1.y)+" m"),l.push(Mt(r.x2.x)+" "+Mt(r.x2.y)+" l"),l.push(Mt(r.x4.x)+" "+Mt(r.x4.y)+" m"),l.push(Mt(r.x3.x)+" "+Mt(r.x3.y)+" l"),l.push("s"),l.push("Q"),a.stream=l.join(`
`),a},OffPushDown:function(o){var a=Mo(o);a.scope=o.scope;var r=[];return r.push("0.749023 g"),r.push("0 0 "+Mt(ut.internal.getWidth(o))+" "+Mt(ut.internal.getHeight(o))+" re"),r.push("f"),a.stream=r.join(`
`),a}}},createDefaultAppearanceStream:function(o){var a=o.scope.internal.getFont(o.fontName,o.fontStyle).id,r=o.scope.__private__.encodeColorString(o.color);return"/"+a+" "+o.fontSize+" Tf "+r}};ut.internal={Bezier_C:.551915024494,calculateCross:function(o){var a=ut.internal.getWidth(o),r=ut.internal.getHeight(o),l=Math.min(a,r);return{x1:{x:(a-l)/2,y:(r-l)/2+l},x2:{x:(a-l)/2+l,y:(r-l)/2},x3:{x:(a-l)/2,y:(r-l)/2},x4:{x:(a-l)/2+l,y:(r-l)/2+l}}}},ut.internal.getWidth=function(o){var a=0;return xn(o)==="object"&&(a=ig(o.Rect[2])),a},ut.internal.getHeight=function(o){var a=0;return xn(o)==="object"&&(a=ig(o.Rect[3])),a};var e4=oi.addField=function(o){if($3(this,o),!(o instanceof ro))throw new Error("Invalid argument passed to jsPDF.addField.");var a;return(a=o).scope.internal.acroformPlugin.printedOut&&(a.scope.internal.acroformPlugin.printedOut=!1,a.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),a.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(a),o.page=o.scope.internal.getCurrentPageInfo().pageNumber,this};oi.AcroFormChoiceField=Qc,oi.AcroFormListBox=Kc,oi.AcroFormComboBox=Jc,oi.AcroFormEditBox=od,oi.AcroFormButton=Hi,oi.AcroFormPushButton=ld,oi.AcroFormRadioButton=Wc,oi.AcroFormCheckBox=sd,oi.AcroFormTextField=Fs,oi.AcroFormPasswordField=cd,oi.AcroFormAppearance=ut,oi.AcroForm={ChoiceField:Qc,ListBox:Kc,ComboBox:Jc,EditBox:od,Button:Hi,PushButton:ld,RadioButton:Wc,CheckBox:sd,TextField:Fs,PasswordField:cd,Appearance:ut},mt.AcroForm={ChoiceField:Qc,ListBox:Kc,ComboBox:Jc,EditBox:od,Button:Hi,PushButton:ld,RadioButton:Wc,CheckBox:sd,TextField:Fs,PasswordField:cd,Appearance:ut};mt.AcroForm;function Cm(o){return o.reduce(function(a,r,l){return a[r]=l,a},{})}(function(o){var a="addImage_";o.__addimage__={};var r="UNKNOWN",l={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},f=o.__addimage__.getImageFileTypeByImageData=function(E,B){var X,Q,le,ee,ue,re=r;if((B=B||r)==="RGBA"||E.data!==void 0&&E.data instanceof Uint8ClampedArray&&"height"in E&&"width"in E)return"RGBA";if(ke(E))for(ue in l)for(le=l[ue],X=0;X<le.length;X+=1){for(ee=!0,Q=0;Q<le[X].length;Q+=1)if(le[X][Q]!==void 0&&le[X][Q]!==E[Q]){ee=!1;break}if(ee===!0){re=ue;break}}else for(ue in l)for(le=l[ue],X=0;X<le.length;X+=1){for(ee=!0,Q=0;Q<le[X].length;Q+=1)if(le[X][Q]!==void 0&&le[X][Q]!==E.charCodeAt(Q)){ee=!1;break}if(ee===!0){re=ue;break}}return re===r&&B!==r&&(re=B),re},u=function E(B){for(var X=this.internal.write,Q=this.internal.putStream,le=(0,this.internal.getFilters)();le.indexOf("FlateEncode")!==-1;)le.splice(le.indexOf("FlateEncode"),1);B.objectId=this.internal.newObject();var ee=[];if(ee.push({key:"Type",value:"/XObject"}),ee.push({key:"Subtype",value:"/Image"}),ee.push({key:"Width",value:B.width}),ee.push({key:"Height",value:B.height}),B.colorSpace===j.INDEXED?ee.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(B.palette.length/3-1)+" "+("sMask"in B&&B.sMask!==void 0?B.objectId+2:B.objectId+1)+" 0 R]"}):(ee.push({key:"ColorSpace",value:"/"+B.colorSpace}),B.colorSpace===j.DEVICE_CMYK&&ee.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),ee.push({key:"BitsPerComponent",value:B.bitsPerComponent}),"decodeParameters"in B&&B.decodeParameters!==void 0&&ee.push({key:"DecodeParms",value:"<<"+B.decodeParameters+">>"}),"transparency"in B&&Array.isArray(B.transparency)&&B.transparency.length>0){for(var ue="",re=0,Ce=B.transparency.length;re<Ce;re++)ue+=B.transparency[re]+" "+B.transparency[re]+" ";ee.push({key:"Mask",value:"["+ue+"]"})}B.sMask!==void 0&&ee.push({key:"SMask",value:B.objectId+1+" 0 R"});var ze=B.filter!==void 0?["/"+B.filter]:void 0;if(Q({data:B.data,additionalKeyValues:ee,alreadyAppliedFilters:ze,objectId:B.objectId}),X("endobj"),"sMask"in B&&B.sMask!==void 0){var Be,R=(Be=B.sMaskBitsPerComponent)!==null&&Be!==void 0?Be:B.bitsPerComponent,Z={width:B.width,height:B.height,colorSpace:"DeviceGray",bitsPerComponent:R,data:B.sMask};"filter"in B&&(Z.decodeParameters="/Predictor ".concat(B.predictor," /Colors 1 /BitsPerComponent ").concat(R," /Columns ").concat(B.width),Z.filter=B.filter),E.call(this,Z)}if(B.colorSpace===j.INDEXED){var _=this.internal.newObject();Q({data:oe(new Uint8Array(B.palette)),objectId:_}),X("endobj")}},m=function(){var E=this.internal.collections[a+"images"];for(var B in E)u.call(this,E[B])},p=function(){var E,B=this.internal.collections[a+"images"],X=this.internal.write;for(var Q in B)X("/I"+(E=B[Q]).index,E.objectId,"0","R")},g=function(){this.internal.collections[a+"images"]||(this.internal.collections[a+"images"]={},this.internal.events.subscribe("putResources",m),this.internal.events.subscribe("putXobjectDict",p))},b=function(){var E=this.internal.collections[a+"images"];return g.call(this),E},x=function(){return Object.keys(this.internal.collections[a+"images"]).length},A=function(E){return typeof o["process"+E.toUpperCase()]=="function"},L=function(E){return xn(E)==="object"&&E.nodeType===1},w=function(E,B){if(E.nodeName==="IMG"&&E.hasAttribute("src")){var X=""+E.getAttribute("src");if(X.indexOf("data:image/")===0)return rd(unescape(X).split("base64,").pop());var Q=o.loadFile(X,!0);if(Q!==void 0)return Q}if(E.nodeName==="CANVAS"){if(E.width===0||E.height===0)throw new Error("Given canvas must have data. Canvas width: "+E.width+", height: "+E.height);var le;switch(B){case"PNG":le="image/png";break;case"WEBP":le="image/webp";break;default:le="image/jpeg"}return rd(E.toDataURL(le,1).split("base64,").pop())}},F=function(E){var B=this.internal.collections[a+"images"];if(B){for(var X in B)if(E===B[X].alias)return B[X]}},U=function(E,B,X){return E||B||(E=-96,B=-96),E<0&&(E=-1*X.width*72/E/this.internal.scaleFactor),B<0&&(B=-1*X.height*72/B/this.internal.scaleFactor),E===0&&(E=B*X.width/X.height),B===0&&(B=E*X.height/X.width),[E,B]},k=function(E,B,X,Q,le,ee){var ue=U.call(this,X,Q,le),re=this.internal.getCoordinateString,Ce=this.internal.getVerticalCoordinateString,ze=b.call(this);if(X=ue[0],Q=ue[1],ze[le.index]=le,ee){ee*=Math.PI/180;var Be=Math.cos(ee),R=Math.sin(ee),Z=function(I){return I.toFixed(4)},_=[Z(Be),Z(R),Z(-1*R),Z(Be),0,0,"cm"]}this.internal.write("q"),ee?(this.internal.write([1,"0","0",1,re(E),Ce(B+Q),"cm"].join(" ")),this.internal.write(_.join(" ")),this.internal.write([re(X),"0","0",re(Q),"0","0","cm"].join(" "))):this.internal.write([re(X),"0","0",re(Q),re(E),Ce(B+Q),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+le.index+" Do"),this.internal.write("Q")},j=o.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};o.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var ne=o.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},te=o.__addimage__.sHashCode=function(E){var B,X,Q=0;if(typeof E=="string")for(X=E.length,B=0;B<X;B++)Q=(Q<<5)-Q+E.charCodeAt(B),Q|=0;else if(ke(E))for(X=E.byteLength/2,B=0;B<X;B++)Q=(Q<<5)-Q+E[B],Q|=0;return Q},W=o.__addimage__.validateStringAsBase64=function(E){(E=E||"").toString().trim();var B=!0;return E.length===0&&(B=!1),E.length%4!=0&&(B=!1),/^[A-Za-z0-9+/]+$/.test(E.substr(0,E.length-2))===!1&&(B=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(E.substr(-2))===!1&&(B=!1),B},pe=o.__addimage__.extractImageFromDataUrl=function(E){if(E==null||!(E=E.trim()).startsWith("data:"))return null;var B=E.indexOf(",");return B<0?null:E.substring(0,B).trim().endsWith("base64")?E.substring(B+1):null};o.__addimage__.isArrayBuffer=function(E){return E instanceof ArrayBuffer};var ke=o.__addimage__.isArrayBufferView=function(E){return E instanceof Int8Array||E instanceof Uint8Array||E instanceof Uint8ClampedArray||E instanceof Int16Array||E instanceof Uint16Array||E instanceof Int32Array||E instanceof Uint32Array||E instanceof Float32Array||E instanceof Float64Array},ye=o.__addimage__.binaryStringToUint8Array=function(E){for(var B=E.length,X=new Uint8Array(B),Q=0;Q<B;Q++)X[Q]=E.charCodeAt(Q);return X},oe=o.__addimage__.arrayBufferToBinaryString=function(E){for(var B="",X=ke(E)?E:new Uint8Array(E),Q=0;Q<X.length;Q+=8192)B+=String.fromCharCode.apply(null,X.subarray(Q,Q+8192));return B};o.addImage=function(){var E,B,X,Q,le,ee,ue,re,Ce;if(typeof arguments[1]=="number"?(B=r,X=arguments[1],Q=arguments[2],le=arguments[3],ee=arguments[4],ue=arguments[5],re=arguments[6],Ce=arguments[7]):(B=arguments[1],X=arguments[2],Q=arguments[3],le=arguments[4],ee=arguments[5],ue=arguments[6],re=arguments[7],Ce=arguments[8]),xn(E=arguments[0])==="object"&&!L(E)&&"imageData"in E){var ze=E;E=ze.imageData,B=ze.format||B||r,X=ze.x||X||0,Q=ze.y||Q||0,le=ze.w||ze.width||le,ee=ze.h||ze.height||ee,ue=ze.alias||ue,re=ze.compression||re,Ce=ze.rotation||ze.angle||Ce}var Be=this.internal.getFilters();if(re===void 0&&Be.indexOf("FlateEncode")!==-1&&(re="SLOW"),isNaN(X)||isNaN(Q))throw new Error("Invalid coordinates passed to jsPDF.addImage");g.call(this);var R=K.call(this,E,B,ue,re);return k.call(this,X,Q,le,ee,R,Ce),this};var K=function(E,B,X,Q){var le,ee,ue;if(typeof E=="string"&&f(E)===r){E=unescape(E);var re=ve(E,!1);(re!==""||(re=o.loadFile(E,!0))!==void 0)&&(E=re)}if(L(E)&&(E=w(E,B)),B=f(E,B),!A(B))throw new Error("addImage does not support files of type '"+B+"', please ensure that a plugin for '"+B+"' support is added.");if(((ue=X)==null||ue.length===0)&&(X=(function(Ce){return typeof Ce=="string"||ke(Ce)?te(Ce):ke(Ce.data)?te(Ce.data):null})(E)),(le=F.call(this,X))||(E instanceof Uint8Array||B==="RGBA"||(ee=E,E=ye(E)),le=this["process"+B.toUpperCase()](E,x.call(this),X,(function(Ce){return Ce&&typeof Ce=="string"&&(Ce=Ce.toUpperCase()),Ce in o.image_compression?Ce:ne.NONE})(Q),ee)),!le)throw new Error("An unknown error occurred whilst processing the image.");return le},ve=o.__addimage__.convertBase64ToBinaryString=function(E,B){B=typeof B!="boolean"||B;var X,Q="";if(typeof E=="string"){var le;X=(le=pe(E))!==null&&le!==void 0?le:E;try{Q=rd(X)}catch(ee){if(B)throw W(X)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+ee.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return Q};o.getImageProperties=function(E){var B,X,Q="";if(L(E)&&(E=w(E)),typeof E=="string"&&f(E)===r&&((Q=ve(E,!1))===""&&(Q=o.loadFile(E)||""),E=Q),X=f(E),!A(X))throw new Error("addImage does not support files of type '"+X+"', please ensure that a plugin for '"+X+"' support is added.");if(E instanceof Uint8Array||(E=ye(E)),!(B=this["process"+X.toUpperCase()](E)))throw new Error("An unknown error occurred whilst processing the image");return B.fileType=X,B}})(mt.API),(function(o){var a=function(r){if(r!==void 0&&r!="")return!0};mt.API.events.push(["addPage",function(r){this.internal.getPageInfo(r.pageNumber).pageContext.annotations=[]}]),o.events.push(["putPage",function(r){for(var l,f,u,m=this.internal.getCoordinateString,p=this.internal.getVerticalCoordinateString,g=this.internal.getPageInfoByObjId(r.objId),b=r.pageContext.annotations,x=!1,A=0;A<b.length&&!x;A++)switch((l=b[A]).type){case"link":(a(l.options.url)||a(l.options.pageNumber))&&(x=!0);break;case"reference":case"text":case"freetext":x=!0}if(x!=0){this.internal.write("/Annots [");for(var L=0;L<b.length;L++){l=b[L];var w=this.internal.pdfEscape,F=this.internal.getEncryptor(r.objId);switch(l.type){case"reference":this.internal.write(" "+l.object.objId+" 0 R ");break;case"text":var U=this.internal.newAdditionalObject(),k=this.internal.newAdditionalObject(),j=this.internal.getEncryptor(U.objId),ne=l.title||"Note";u="<</Type /Annot /Subtype /Text "+(f="/Rect ["+m(l.bounds.x)+" "+p(l.bounds.y+l.bounds.h)+" "+m(l.bounds.x+l.bounds.w)+" "+p(l.bounds.y)+"] ")+"/Contents ("+w(j(l.contents))+")",u+=" /Popup "+k.objId+" 0 R",u+=" /P "+g.objId+" 0 R",u+=" /T ("+w(j(ne))+") >>",U.content=u;var te=U.objId+" 0 R";u="<</Type /Annot /Subtype /Popup "+(f="/Rect ["+m(l.bounds.x+30)+" "+p(l.bounds.y+l.bounds.h)+" "+m(l.bounds.x+l.bounds.w+30)+" "+p(l.bounds.y)+"] ")+" /Parent "+te,l.open&&(u+=" /Open true"),u+=" >>",k.content=u,this.internal.write(U.objId,"0 R",k.objId,"0 R");break;case"freetext":f="/Rect ["+m(l.bounds.x)+" "+p(l.bounds.y)+" "+m(l.bounds.x+l.bounds.w)+" "+p(l.bounds.y+l.bounds.h)+"] ";var W="font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+(l.color||"#000000");u="<</Type /Annot /Subtype /FreeText "+f+"/Contents ("+w(F(l.contents))+")",u+=" /DS("+w(F(W))+")",u+=" /Border [0 0 0]",u+=" >>",this.internal.write(u);break;case"link":if(l.options.name){var pe=this.annotations._nameMap[l.options.name];l.options.pageNumber=pe.page,l.options.top=pe.y}else l.options.top||(l.options.top=0);if(f="/Rect ["+l.finalBounds.x+" "+l.finalBounds.y+" "+l.finalBounds.w+" "+l.finalBounds.h+"] ",u="",l.options.url)u="<</Type /Annot /Subtype /Link "+f+"/Border [0 0 0] /A <</S /URI /URI ("+w(F(l.options.url))+") >>";else if(l.options.pageNumber)switch(u="<</Type /Annot /Subtype /Link "+f+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(l.options.pageNumber).objId+" 0 R",l.options.magFactor=l.options.magFactor||"XYZ",l.options.magFactor){case"Fit":u+=" /Fit]";break;case"FitH":u+=" /FitH "+l.options.top+"]";break;case"FitV":l.options.left=l.options.left||0,u+=" /FitV "+l.options.left+"]";break;default:var ke=p(l.options.top);l.options.left=l.options.left||0,l.options.zoom===void 0&&(l.options.zoom=0),u+=" /XYZ "+l.options.left+" "+ke+" "+l.options.zoom+"]"}u!=""&&(u+=" >>",this.internal.write(u))}}this.internal.write("]")}}]),o.createAnnotation=function(r){var l=this.internal.getCurrentPageInfo();switch(r.type){case"link":this.link(r.bounds.x,r.bounds.y,r.bounds.w,r.bounds.h,r);break;case"text":case"freetext":l.pageContext.annotations.push(r)}},o.link=function(r,l,f,u,m){var p=this.internal.getCurrentPageInfo(),g=this.internal.getCoordinateString,b=this.internal.getVerticalCoordinateString;p.pageContext.annotations.push({finalBounds:{x:g(r),y:b(l),w:g(r+f),h:b(l+u)},options:m,type:"link"})},o.textWithLink=function(r,l,f,u){var m,p,g=this.getTextWidth(r),b=this.internal.getLineHeight()/this.internal.scaleFactor;if(u.maxWidth!==void 0){p=u.maxWidth;var x=this.splitTextToSize(r,p).length;m=Math.ceil(b*x)}else p=g,m=b;return this.text(r,l,f,u),f+=.2*b,u.align==="center"&&(l-=g/2),u.align==="right"&&(l-=g),this.link(l,f-b,p,m,u),g},o.getTextWidth=function(r){var l=this.internal.getFontSize();return this.getStringUnitWidth(r)*l/this.internal.scaleFactor}})(mt.API),(function(o){var a={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},r={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},l={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},f=[1570,1571,1573,1575];o.__arabicParser__={};var u=o.__arabicParser__.isInArabicSubstitutionA=function(U){return a[U.charCodeAt(0)]!==void 0},m=o.__arabicParser__.isArabicLetter=function(U){return typeof U=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(U)},p=o.__arabicParser__.isArabicEndLetter=function(U){return m(U)&&u(U)&&a[U.charCodeAt(0)].length<=2},g=o.__arabicParser__.isArabicAlfLetter=function(U){return m(U)&&f.indexOf(U.charCodeAt(0))>=0};o.__arabicParser__.arabicLetterHasIsolatedForm=function(U){return m(U)&&u(U)&&a[U.charCodeAt(0)].length>=1};var b=o.__arabicParser__.arabicLetterHasFinalForm=function(U){return m(U)&&u(U)&&a[U.charCodeAt(0)].length>=2};o.__arabicParser__.arabicLetterHasInitialForm=function(U){return m(U)&&u(U)&&a[U.charCodeAt(0)].length>=3};var x=o.__arabicParser__.arabicLetterHasMedialForm=function(U){return m(U)&&u(U)&&a[U.charCodeAt(0)].length==4},A=o.__arabicParser__.resolveLigatures=function(U){var k=0,j=r,ne="",te=0;for(k=0;k<U.length;k+=1)j[U.charCodeAt(k)]!==void 0?(te++,typeof(j=j[U.charCodeAt(k)])=="number"&&(ne+=String.fromCharCode(j),j=r,te=0),k===U.length-1&&(j=r,ne+=U.charAt(k-(te-1)),k-=te-1,te=0)):(j=r,ne+=U.charAt(k-te),k-=te,te=0);return ne};o.__arabicParser__.isArabicDiacritic=function(U){return U!==void 0&&l[U.charCodeAt(0)]!==void 0};var L=o.__arabicParser__.getCorrectForm=function(U,k,j){return m(U)?u(U)===!1?-1:!b(U)||!m(k)&&!m(j)||!m(j)&&p(k)||p(U)&&!m(k)||p(U)&&g(k)||p(U)&&p(k)?0:x(U)&&m(k)&&!p(k)&&m(j)&&b(j)?3:p(U)||!m(j)?1:2:-1},w=function(U){var k=0,j=0,ne=0,te="",W="",pe="",ke=(U=U||"").split("\\s+"),ye=[];for(k=0;k<ke.length;k+=1){for(ye.push(""),j=0;j<ke[k].length;j+=1)te=ke[k][j],W=ke[k][j-1],pe=ke[k][j+1],m(te)?(ne=L(te,W,pe),ye[k]+=ne!==-1?String.fromCharCode(a[te.charCodeAt(0)][ne]):te):ye[k]+=te;ye[k]=A(ye[k])}return ye.join(" ")},F=o.__arabicParser__.processArabic=o.processArabic=function(){var U,k=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,j=[];if(Array.isArray(k)){var ne=0;for(j=[],ne=0;ne<k.length;ne+=1)Array.isArray(k[ne])?j.push([w(k[ne][0]),k[ne][1],k[ne][2]]):j.push([w(k[ne])]);U=j}else U=w(k);return typeof arguments[0]=="string"?U:(arguments[0].text=U,arguments[0])};o.events.push(["preProcessText",F])})(mt.API),mt.API.autoPrint=function(o){var a;return(o=o||{}).variant=o.variant||"non-conform",o.variant==="javascript"?this.addJS("print({});"):(this.internal.events.subscribe("postPutResources",function(){a=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){this.internal.out("/OpenAction "+a+" 0 R")})),this},(function(o){var a=function(){var r=void 0;Object.defineProperty(this,"pdf",{get:function(){return r},set:function(p){r=p}});var l=150;Object.defineProperty(this,"width",{get:function(){return l},set:function(p){l=isNaN(p)||Number.isInteger(p)===!1||p<0?150:p,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=l+1)}});var f=300;Object.defineProperty(this,"height",{get:function(){return f},set:function(p){f=isNaN(p)||Number.isInteger(p)===!1||p<0?300:p,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=f+1)}});var u=[];Object.defineProperty(this,"childNodes",{get:function(){return u},set:function(p){u=p}});var m={};Object.defineProperty(this,"style",{get:function(){return m},set:function(p){m=p}}),Object.defineProperty(this,"parentNode",{})};a.prototype.getContext=function(r,l){var f;if((r=r||"2d")!=="2d")return null;for(f in l)this.pdf.context2d.hasOwnProperty(f)&&(this.pdf.context2d[f]=l[f]);return this.pdf.context2d._canvas=this,this.pdf.context2d},a.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},o.events.push(["initialized",function(){this.canvas=new a,this.canvas.pdf=this}])})(mt.API),(function(o){var a={left:0,top:0,bottom:0,right:0},r=!1,l=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},a),this.internal.__cell__.margins.width=this.getPageWidth(),f.call(this))},f=function(){this.internal.__cell__.lastCell=new u,this.internal.__cell__.pages=1},u=function(){var g=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return g},set:function(U){g=U}});var b=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return b},set:function(U){b=U}});var x=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return x},set:function(U){x=U}});var A=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return A},set:function(U){A=U}});var L=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return L},set:function(U){L=U}});var w=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return w},set:function(U){w=U}});var F=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return F},set:function(U){F=U}}),this};u.prototype.clone=function(){return new u(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},u.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},o.setHeaderFunction=function(g){return l.call(this),this.internal.__cell__.headerFunction=typeof g=="function"?g:void 0,this},o.getTextDimensions=function(g,b){l.call(this);var x=(b=b||{}).fontSize||this.getFontSize(),A=b.font||this.getFont(),L=b.scaleFactor||this.internal.scaleFactor,w=0,F=0,U=0,k=this;if(!Array.isArray(g)&&typeof g!="string"){if(typeof g!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");g=String(g)}var j=b.maxWidth;j>0?typeof g=="string"?g=this.splitTextToSize(g,j):Object.prototype.toString.call(g)==="[object Array]"&&(g=g.reduce(function(te,W){return te.concat(k.splitTextToSize(W,j))},[])):g=Array.isArray(g)?g:[g];for(var ne=0;ne<g.length;ne++)w<(U=this.getStringUnitWidth(g[ne],{font:A})*x)&&(w=U);return w!==0&&(F=g.length),{w:w/=L,h:Math.max((F*x*this.getLineHeightFactor()-x*(this.getLineHeightFactor()-1))/L,0)}},o.cellAddPage=function(){l.call(this),this.addPage();var g=this.internal.__cell__.margins||a;return this.internal.__cell__.lastCell=new u(g.left,g.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var m=o.cell=function(){var g;g=arguments[0]instanceof u?arguments[0]:new u(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]),l.call(this);var b=this.internal.__cell__.lastCell,x=this.internal.__cell__.padding,A=this.internal.__cell__.margins||a,L=this.internal.__cell__.tableHeaderRow,w=this.internal.__cell__.printHeaders;return b.lineNumber!==void 0&&(b.lineNumber===g.lineNumber?(g.x=(b.x||0)+(b.width||0),g.y=b.y||0):b.y+b.height+g.height+A.bottom>this.getPageHeight()?(this.cellAddPage(),g.y=A.top,w&&L&&(this.printHeaderRow(g.lineNumber,!0),g.y+=L[0].height)):g.y=b.y+b.height||g.y),g.text[0]!==void 0&&(this.rect(g.x,g.y,g.width,g.height,r===!0?"FD":void 0),g.align==="right"?this.text(g.text,g.x+g.width-x,g.y+x,{align:"right",baseline:"top"}):g.align==="center"?this.text(g.text,g.x+g.width/2,g.y+x,{align:"center",baseline:"top",maxWidth:g.width-x-x}):this.text(g.text,g.x+x,g.y+x,{align:"left",baseline:"top",maxWidth:g.width-x-x})),this.internal.__cell__.lastCell=g,this};o.table=function(g,b,x,A,L){if(l.call(this),!x)throw new Error("No data for PDF table.");var w,F,U,k,j=[],ne=[],te=[],W={},pe={},ke=[],ye=[],oe=(L=L||{}).autoSize||!1,K=L.printHeaders!==!1,ve=L.css&&L.css["font-size"]!==void 0?16*L.css["font-size"]:L.fontSize||12,E=L.margins||Object.assign({width:this.getPageWidth()},a),B=typeof L.padding=="number"?L.padding:3,X=L.headerBackgroundColor||"#c8c8c8",Q=L.headerTextColor||"#000";if(f.call(this),this.internal.__cell__.printHeaders=K,this.internal.__cell__.margins=E,this.internal.__cell__.table_font_size=ve,this.internal.__cell__.padding=B,this.internal.__cell__.headerBackgroundColor=X,this.internal.__cell__.headerTextColor=Q,this.setFontSize(ve),A==null)ne=j=Object.keys(x[0]),te=j.map(function(){return"left"});else if(Array.isArray(A)&&xn(A[0])==="object")for(j=A.map(function(ze){return ze.name}),ne=A.map(function(ze){return ze.prompt||ze.name||""}),te=A.map(function(ze){return ze.align||"left"}),w=0;w<A.length;w+=1)pe[A[w].name]=.7499990551181103*A[w].width;else Array.isArray(A)&&typeof A[0]=="string"&&(ne=j=A,te=j.map(function(){return"left"}));if(oe||Array.isArray(A)&&typeof A[0]=="string")for(w=0;w<j.length;w+=1){for(W[k=j[w]]=x.map(function(ze){return ze[k]}),this.setFont(void 0,"bold"),ke.push(this.getTextDimensions(ne[w],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),F=W[k],this.setFont(void 0,"normal"),U=0;U<F.length;U+=1)ke.push(this.getTextDimensions(F[U],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);pe[k]=Math.max.apply(null,ke)+B+B,ke=[]}if(K){var le={};for(w=0;w<j.length;w+=1)le[j[w]]={},le[j[w]].text=ne[w],le[j[w]].align=te[w];var ee=p.call(this,le,pe);ye=j.map(function(ze){return new u(g,b,pe[ze],ee,le[ze].text,void 0,le[ze].align)}),this.setTableHeaderRow(ye),this.printHeaderRow(1,!1)}var ue=A.reduce(function(ze,Be){return ze[Be.name]=Be.align,ze},{});for(w=0;w<x.length;w+=1){"rowStart"in L&&L.rowStart instanceof Function&&L.rowStart({row:w,data:x[w]},this);var re=p.call(this,x[w],pe);for(U=0;U<j.length;U+=1){var Ce=x[w][j[U]];"cellStart"in L&&L.cellStart instanceof Function&&L.cellStart({row:w,col:U,data:Ce},this),m.call(this,new u(g,b,pe[j[U]],re,Ce,w+2,ue[j[U]]))}}return this.internal.__cell__.table_x=g,this.internal.__cell__.table_y=b,this};var p=function(g,b){var x=this.internal.__cell__.padding,A=this.internal.__cell__.table_font_size,L=this.internal.scaleFactor;return Object.keys(g).map(function(w){var F=g[w];return this.splitTextToSize(F.hasOwnProperty("text")?F.text:F,b[w]-x-x)},this).map(function(w){return this.getLineHeightFactor()*w.length*A/L+x+x},this).reduce(function(w,F){return Math.max(w,F)},0)};o.setTableHeaderRow=function(g){l.call(this),this.internal.__cell__.tableHeaderRow=g},o.printHeaderRow=function(g,b){if(l.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var x;if(r=!0,typeof this.internal.__cell__.headerFunction=="function"){var A=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new u(A[0],A[1],A[2],A[3],void 0,-1)}this.setFont(void 0,"bold");for(var L=[],w=0;w<this.internal.__cell__.tableHeaderRow.length;w+=1){x=this.internal.__cell__.tableHeaderRow[w].clone(),b&&(x.y=this.internal.__cell__.margins.top||0,L.push(x)),x.lineNumber=g;var F=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),m.call(this,x),this.setTextColor(F)}L.length>0&&this.setTableHeaderRow(L),this.setFont(void 0,"normal"),r=!1}})(mt.API);var Tm={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},Em=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],q1=Cm(Em),Lm=[100,200,300,400,500,600,700,800,900],t4=Cm(Lm);function A1(o){var a=o.family.replace(/"|'/g,"").toLowerCase(),r=(function(u){return Tm[u=u||"normal"]?u:"normal"})(o.style),l=(function(u){return u?typeof u=="number"?u>=100&&u<=900&&u%100==0?u:400:/^\d00$/.test(u)?parseInt(u):u==="bold"?700:400:400})(o.weight),f=(function(u){return typeof q1[u=u||"normal"]=="number"?u:"normal"})(o.stretch);return{family:a,style:r,weight:l,stretch:f,src:o.src||[],ref:o.ref||{name:a,style:[f,r,l].join(" ")}}}function ag(o,a,r,l){var f;for(f=r;f>=0&&f<a.length;f+=l)if(o[a[f]])return o[a[f]];for(f=r;f>=0&&f<a.length;f-=l)if(o[a[f]])return o[a[f]]}var n4={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},rg={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function og(o){return[o.stretch,o.style,o.weight,o.family].join(" ")}function lg(o){return o.trimLeft()}function i4(o,a){for(var r=0;r<o.length;){if(o.charAt(r)===a)return[o.substring(0,r),o.substring(r+1)];r+=1}return null}function a4(o){var a=o.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return a===null?null:[a[0],o.substring(a[0].length)]}var Hc,ed,sg,cg,ug,_1=["times"];function fg(o,a,r,l,f){var u=4,m=hg;switch(f){case mt.API.image_compression.FAST:u=1,m=dg;break;case mt.API.image_compression.MEDIUM:u=6,m=pg;break;case mt.API.image_compression.SLOW:u=9,m=gg}o=(function(g,b,x,A){for(var L,w=g.length/b,F=new Uint8Array(g.length+w),U=[r4,dg,hg,pg,gg],k=0;k<w;k+=1){var j=k*b,ne=g.subarray(j,j+b);if(A)F.set(A(ne,x,L),j+k);else{for(var te=U.length,W=[],pe=0;pe<te;pe+=1)W[pe]=U[pe](ne,x,L);var ke=l4(W.concat());F.set(W[ke],j+k)}L=ne}return F})(o,a,Math.ceil(r*l/8),m);var p=R1(o,{level:u});return mt.API.__addimage__.arrayBufferToBinaryString(p)}function r4(o){var a=Array.apply([],o);return a.unshift(0),a}function dg(o,a){var r=o.length,l=[];l[0]=1;for(var f=0;f<r;f+=1){var u=o[f-a]||0;l[f+1]=o[f]-u+256&255}return l}function hg(o,a,r){var l=o.length,f=[];f[0]=2;for(var u=0;u<l;u+=1){var m=r&&r[u]||0;f[u+1]=o[u]-m+256&255}return f}function pg(o,a,r){var l=o.length,f=[];f[0]=3;for(var u=0;u<l;u+=1){var m=o[u-a]||0,p=r&&r[u]||0;f[u+1]=o[u]+256-(m+p>>>1)&255}return f}function gg(o,a,r){var l=o.length,f=[];f[0]=4;for(var u=0;u<l;u+=1){var m=o4(o[u-a]||0,r&&r[u]||0,r&&r[u-a]||0);f[u+1]=o[u]-m+256&255}return f}function o4(o,a,r){if(o===a&&a===r)return o;var l=Math.abs(a-r),f=Math.abs(o-r),u=Math.abs(o+a-r-r);return l<=f&&l<=u?o:f<=u?a:r}function l4(o){var a=o.map(function(r){return r.reduce(function(l,f){return l+Math.abs(f)},0)});return a.indexOf(Math.min.apply(null,a))}function C1(o,a,r){var l=a*r,f=Math.floor(l/8),u=16-(l-8*f+r),m=(1<<r)-1;return Om(o,f)>>u&m}function mg(o,a,r,l){var f=r*l,u=Math.floor(f/8),m=16-(f-8*u+l),p=(1<<l)-1,g=(a&p)<<m;(function(b,x,A){if(x+1<b.byteLength)b.setUint16(x,A,!1);else{var L=A>>8&255;b.setUint8(x,L)}})(o,u,Om(o,u)&~(p<<m)&65535|g)}function Om(o,a){return a+1<o.byteLength?o.getUint16(a,!1):o.getUint8(a)<<8}function s4(o){var a=0;if(o[a++]!==71||o[a++]!==73||o[a++]!==70||o[a++]!==56||(o[a++]+1&253)!=56||o[a++]!==97)throw new Error("Invalid GIF 87a/89a header.");var r=o[a++]|o[a++]<<8,l=o[a++]|o[a++]<<8,f=o[a++],u=f>>7,m=1<<1+(7&f);o[a++],o[a++];var p=null,g=null;u&&(p=a,g=m,a+=3*m);var b=!0,x=[],A=0,L=null,w=0,F=null;for(this.width=r,this.height=l;b&&a<o.length;)switch(o[a++]){case 33:switch(o[a++]){case 255:if(o[a]!==11||o[a+1]==78&&o[a+2]==69&&o[a+3]==84&&o[a+4]==83&&o[a+5]==67&&o[a+6]==65&&o[a+7]==80&&o[a+8]==69&&o[a+9]==50&&o[a+10]==46&&o[a+11]==48&&o[a+12]==3&&o[a+13]==1&&o[a+16]==0)a+=14,F=o[a++]|o[a++]<<8,a++;else for(a+=12;;){if(!((E=o[a++])>=0))throw Error("Invalid block size");if(E===0)break;a+=E}break;case 249:if(o[a++]!==4||o[a+4]!==0)throw new Error("Invalid graphics extension block.");var U=o[a++];A=o[a++]|o[a++]<<8,L=o[a++],1&U||(L=null),w=U>>2&7,a++;break;case 254:for(;;){if(!((E=o[a++])>=0))throw Error("Invalid block size");if(E===0)break;a+=E}break;default:throw new Error("Unknown graphic control label: 0x"+o[a-1].toString(16))}break;case 44:var k=o[a++]|o[a++]<<8,j=o[a++]|o[a++]<<8,ne=o[a++]|o[a++]<<8,te=o[a++]|o[a++]<<8,W=o[a++],pe=W>>6&1,ke=1<<1+(7&W),ye=p,oe=g,K=!1;W>>7&&(K=!0,ye=a,oe=ke,a+=3*ke);var ve=a;for(a++;;){var E;if(!((E=o[a++])>=0))throw Error("Invalid block size");if(E===0)break;a+=E}x.push({x:k,y:j,width:ne,height:te,has_local_palette:K,palette_offset:ye,palette_size:oe,data_offset:ve,data_length:a-ve,transparent_index:L,interlaced:!!pe,delay:A,disposal:w});break;case 59:b=!1;break;default:throw new Error("Unknown gif block: 0x"+o[a-1].toString(16))}this.numFrames=function(){return x.length},this.loopCount=function(){return F},this.frameInfo=function(B){if(B<0||B>=x.length)throw new Error("Frame index out of range.");return x[B]},this.decodeAndBlitFrameBGRA=function(B,X){var Q=this.frameInfo(B),le=Q.width*Q.height;if(le>536870912)throw new Error("Image dimensions exceed 512MB, which is too large.");var ee=new Uint8Array(le);vg(o,Q.data_offset,ee,le);var ue=Q.palette_offset,re=Q.transparent_index;re===null&&(re=256);var Ce=Q.width,ze=r-Ce,Be=Ce,R=4*(Q.y*r+Q.x),Z=4*((Q.y+Q.height)*r+Q.x),_=R,I=4*ze;Q.interlaced===!0&&(I+=4*r*7);for(var $=8,ae=0,we=ee.length;ae<we;++ae){var Se=ee[ae];if(Be===0&&(Be=Ce,(_+=I)>=Z&&(I=4*ze+4*r*($-1),_=R+(Ce+ze)*($<<1),$>>=1)),Se===re)_+=4;else{var Oe=o[ue+3*Se],Ee=o[ue+3*Se+1],qe=o[ue+3*Se+2];X[_++]=qe,X[_++]=Ee,X[_++]=Oe,X[_++]=255}--Be}},this.decodeAndBlitFrameRGBA=function(B,X){var Q=this.frameInfo(B),le=Q.width*Q.height;if(le>536870912)throw new Error("Image dimensions exceed 512MB, which is too large.");var ee=new Uint8Array(le);vg(o,Q.data_offset,ee,le);var ue=Q.palette_offset,re=Q.transparent_index;re===null&&(re=256);var Ce=Q.width,ze=r-Ce,Be=Ce,R=4*(Q.y*r+Q.x),Z=4*((Q.y+Q.height)*r+Q.x),_=R,I=4*ze;Q.interlaced===!0&&(I+=4*r*7);for(var $=8,ae=0,we=ee.length;ae<we;++ae){var Se=ee[ae];if(Be===0&&(Be=Ce,(_+=I)>=Z&&(I=4*ze+4*r*($-1),_=R+(Ce+ze)*($<<1),$>>=1)),Se===re)_+=4;else{var Oe=o[ue+3*Se],Ee=o[ue+3*Se+1],qe=o[ue+3*Se+2];X[_++]=Oe,X[_++]=Ee,X[_++]=qe,X[_++]=255}--Be}}}function vg(o,a,r,l){for(var f=o[a++],u=1<<f,m=u+1,p=m+1,g=f+1,b=(1<<g)-1,x=0,A=0,L=0,w=o[a++],F=new Int32Array(4096),U=null;;){for(;x<16&&w!==0;)A|=o[a++]<<x,x+=8,w===1?w=o[a++]:--w;if(x<g)break;var k=A&b;if(A>>=g,x-=g,k!==u){if(k===m)break;for(var j=k<p?k:U,ne=0,te=j;te>u;)te=F[te]>>8,++ne;var W=te;if(L+ne+(j!==k?1:0)>l)return void On.log("Warning, gif stream longer than expected.");r[L++]=W;var pe=L+=ne;for(j!==k&&(r[L++]=W),te=j;ne--;)te=F[te],r[--pe]=255&te,te>>=8;U!==null&&p<4096&&(F[p++]=U<<8|W,p>=b+1&&g<12&&(++g,b=b<<1|1)),U=k}else p=m+1,b=(1<<(g=f+1))-1,U=null}return L!==l&&On.log("Warning, gif stream shorter than expected."),r}/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function T1(o){var a,r,l,f,u,m=Math.floor,p=new Array(64),g=new Array(64),b=new Array(64),x=new Array(64),A=new Array(65535),L=new Array(65535),w=new Array(64),F=new Array(64),U=[],k=0,j=7,ne=new Array(64),te=new Array(64),W=new Array(64),pe=new Array(256),ke=new Array(2048),ye=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],oe=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],K=[0,1,2,3,4,5,6,7,8,9,10,11],ve=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],E=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],B=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],le=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function ee(R,Z){for(var _=0,I=0,$=new Array,ae=1;ae<=16;ae++){for(var we=1;we<=R[ae];we++)$[Z[I]]=[],$[Z[I]][0]=_,$[Z[I]][1]=ae,I++,_++;_*=2}return $}function ue(R){for(var Z=R[0],_=R[1]-1;_>=0;)Z&1<<_&&(k|=1<<j),_--,--j<0&&(k==255?(re(255),re(0)):re(k),j=7,k=0)}function re(R){U.push(R)}function Ce(R){re(R>>8&255),re(255&R)}function ze(R,Z,_,I,$){for(var ae,we=$[0],Se=$[240],Oe=(function(xe,Ve){var Ie,Ke,at,At,Bt,wt,Pt,Ut,$e,Nt,ht=0;for($e=0;$e<8;++$e){Ie=xe[ht],Ke=xe[ht+1],at=xe[ht+2],At=xe[ht+3],Bt=xe[ht+4],wt=xe[ht+5],Pt=xe[ht+6];var Vn=Ie+(Ut=xe[ht+7]),Qt=Ie-Ut,Rt=Ke+Pt,jt=Ke-Pt,wn=at+wt,bt=at-wt,Nn=At+Bt,ft=At-Bt,Ot=Vn+Nn,Cn=Vn-Nn,Ft=Rt+wn,yt=Rt-wn;xe[ht]=Ot+Ft,xe[ht+4]=Ot-Ft;var en=.707106781*(yt+Cn);xe[ht+2]=Cn+en,xe[ht+6]=Cn-en;var lo=.382683433*((Ot=ft+bt)-(yt=jt+Qt)),Di=.5411961*Ot+lo,kr=1.306562965*yt+lo,ia=.707106781*(Ft=bt+jt),lt=Qt+ia,ki=Qt-ia;xe[ht+5]=ki+Di,xe[ht+3]=ki-Di,xe[ht+1]=lt+kr,xe[ht+7]=lt-kr,ht+=8}for(ht=0,$e=0;$e<8;++$e){Ie=xe[ht],Ke=xe[ht+8],at=xe[ht+16],At=xe[ht+24],Bt=xe[ht+32],wt=xe[ht+40],Pt=xe[ht+48];var Gn=Ie+(Ut=xe[ht+56]),Aa=Ie-Ut,_a=Ke+Pt,qn=Ke-Pt,Yn=at+wt,Wn=at-wt,sr=At+Bt,aa=At-Bt,ra=Gn+sr,oa=Gn-sr,Ca=_a+Yn,Ha=_a-Yn;xe[ht]=ra+Ca,xe[ht+32]=ra-Ca;var va=.707106781*(Ha+oa);xe[ht+16]=oa+va,xe[ht+48]=oa-va;var Mr=.382683433*((ra=aa+Wn)-(Ha=qn+Aa)),la=.5411961*ra+Mr,Bo=1.306562965*Ha+Mr,Po=.707106781*(Ca=Wn+qn),Uo=Aa+Po,Fo=Aa-Po;xe[ht+40]=Fo+la,xe[ht+24]=Fo-la,xe[ht+8]=Uo+Bo,xe[ht+56]=Uo-Bo,ht++}for($e=0;$e<64;++$e)Nt=xe[$e]*Ve[$e],w[$e]=Nt>0?Nt+.5|0:Nt-.5|0;return w})(R,Z),Ee=0;Ee<64;++Ee)F[ye[Ee]]=Oe[Ee];var qe=F[0]-_;_=F[0],qe==0?ue(I[0]):(ue(I[L[ae=32767+qe]]),ue(A[ae]));for(var Qe=63;Qe>0&&F[Qe]==0;)Qe--;if(Qe==0)return ue(we),_;for(var dt,V=1;V<=Qe;){for(var Xe=V;F[V]==0&&V<=Qe;)++V;var pt=V-Xe;if(pt>=16){dt=pt>>4;for(var Me=1;Me<=dt;++Me)ue(Se);pt&=15}ae=32767+F[V],ue($[(pt<<4)+L[ae]]),ue(A[ae]),V++}return Qe!=63&&ue(we),_}function Be(R){R=Math.min(Math.max(R,1),100),u!=R&&((function(Z){for(var _=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],I=0;I<64;I++){var $=m((_[I]*Z+50)/100);$=Math.min(Math.max($,1),255),p[ye[I]]=$}for(var ae=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],we=0;we<64;we++){var Se=m((ae[we]*Z+50)/100);Se=Math.min(Math.max(Se,1),255),g[ye[we]]=Se}for(var Oe=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Ee=0,qe=0;qe<8;qe++)for(var Qe=0;Qe<8;Qe++)b[Ee]=1/(p[ye[Ee]]*Oe[qe]*Oe[Qe]*8),x[Ee]=1/(g[ye[Ee]]*Oe[qe]*Oe[Qe]*8),Ee++})(R<50?Math.floor(5e3/R):Math.floor(200-2*R)),u=R)}this.encode=function(R,Z){Z&&Be(Z),U=new Array,k=0,j=7,Ce(65496),Ce(65504),Ce(16),re(74),re(70),re(73),re(70),re(0),re(1),re(1),re(0),Ce(1),Ce(1),re(0),re(0),(function(){Ce(65499),Ce(132),re(0);for(var Ke=0;Ke<64;Ke++)re(p[Ke]);re(1);for(var at=0;at<64;at++)re(g[at])})(),(function(Ke,at){Ce(65472),Ce(17),re(8),Ce(at),Ce(Ke),re(3),re(1),re(17),re(0),re(2),re(17),re(1),re(3),re(17),re(1)})(R.width,R.height),(function(){Ce(65476),Ce(418),re(0);for(var Ke=0;Ke<16;Ke++)re(oe[Ke+1]);for(var at=0;at<=11;at++)re(K[at]);re(16);for(var At=0;At<16;At++)re(ve[At+1]);for(var Bt=0;Bt<=161;Bt++)re(E[Bt]);re(1);for(var wt=0;wt<16;wt++)re(B[wt+1]);for(var Pt=0;Pt<=11;Pt++)re(X[Pt]);re(17);for(var Ut=0;Ut<16;Ut++)re(Q[Ut+1]);for(var $e=0;$e<=161;$e++)re(le[$e])})(),Ce(65498),Ce(12),re(3),re(1),re(0),re(2),re(17),re(3),re(17),re(0),re(63),re(0);var _=0,I=0,$=0;k=0,j=7,this.encode.displayName="_encode_";for(var ae,we,Se,Oe,Ee,qe,Qe,dt,V,Xe=R.data,pt=R.width,Me=R.height,xe=4*pt,Ve=0;Ve<Me;){for(ae=0;ae<xe;){for(Ee=xe*Ve+ae,Qe=-1,dt=0,V=0;V<64;V++)qe=Ee+(dt=V>>3)*xe+(Qe=4*(7&V)),Ve+dt>=Me&&(qe-=xe*(Ve+1+dt-Me)),ae+Qe>=xe&&(qe-=ae+Qe-xe+4),we=Xe[qe++],Se=Xe[qe++],Oe=Xe[qe++],ne[V]=(ke[we]+ke[Se+256|0]+ke[Oe+512|0]>>16)-128,te[V]=(ke[we+768|0]+ke[Se+1024|0]+ke[Oe+1280|0]>>16)-128,W[V]=(ke[we+1280|0]+ke[Se+1536|0]+ke[Oe+1792|0]>>16)-128;_=ze(ne,b,_,a,l),I=ze(te,x,I,r,f),$=ze(W,x,$,r,f),ae+=32}Ve+=8}if(j>=0){var Ie=[];Ie[1]=j+1,Ie[0]=(1<<j+1)-1,ue(Ie)}return Ce(65497),new Uint8Array(U)},o=o||50,(function(){for(var R=String.fromCharCode,Z=0;Z<256;Z++)pe[Z]=R(Z)})(),a=ee(oe,K),r=ee(B,X),l=ee(ve,E),f=ee(Q,le),(function(){for(var R=1,Z=2,_=1;_<=15;_++){for(var I=R;I<Z;I++)L[32767+I]=_,A[32767+I]=[],A[32767+I][1]=_,A[32767+I][0]=I;for(var $=-(Z-1);$<=-R;$++)L[32767+$]=_,A[32767+$]=[],A[32767+$][1]=_,A[32767+$][0]=Z-1+$;R<<=1,Z<<=1}})(),(function(){for(var R=0;R<256;R++)ke[R]=19595*R,ke[R+256|0]=38470*R,ke[R+512|0]=7471*R+32768,ke[R+768|0]=-11059*R,ke[R+1024|0]=-21709*R,ke[R+1280|0]=32768*R+8421375,ke[R+1536|0]=-27439*R,ke[R+1792|0]=-5329*R})(),Be(o)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function io(o,a){if(this.pos=0,this.buffer=o,this.datav=new DataView(o.buffer),this.is_with_alpha=!!a,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function bg(o){function a(K){if(!K)throw Error("assert :P")}function r(K,ve,E){for(var B=0;4>B;B++)if(K[ve+B]!=E.charCodeAt(B))return!0;return!1}function l(K,ve,E,B,X){for(var Q=0;Q<X;Q++)K[ve+Q]=E[B+Q]}function f(K,ve,E,B){for(var X=0;X<B;X++)K[ve+X]=E}function u(K){return new Int32Array(K)}function m(K,ve){for(var E=[],B=0;B<K;B++)E.push(new ve);return E}function p(K,ve){var E=[];return(function B(X,Q,le){for(var ee=le[Q],ue=0;ue<ee&&(X.push(le.length>Q+1?[]:new ve),!(le.length<Q+1));ue++)B(X[ue],Q+1,le)})(E,0,K),E}var g=function(){var K=this;function ve(c,h){for(var y=1<<h-1>>>0;c&y;)y>>>=1;return y?(c&y-1)+y:c}function E(c,h,y,S,T){a(!(S%y));do c[h+(S-=y)]=T;while(0<S)}function B(c,h,y,S,T){if(a(2328>=T),512>=T)var D=u(512);else if((D=u(T))==null)return 0;return(function(M,z,P,G,ce,Te){var Y,fe,be=z,De=1<<P,Ae=u(16),je=u(16);for(a(ce!=0),a(G!=null),a(M!=null),a(0<P),fe=0;fe<ce;++fe){if(15<G[fe])return 0;++Ae[G[fe]]}if(Ae[0]==ce)return 0;for(je[1]=0,Y=1;15>Y;++Y){if(Ae[Y]>1<<Y)return 0;je[Y+1]=je[Y]+Ae[Y]}for(fe=0;fe<ce;++fe)Y=G[fe],0<G[fe]&&(Te[je[Y]++]=fe);if(je[15]==1)return(G=new X).g=0,G.value=Te[0],E(M,be,1,De,G),De;var Fe,Ye=-1,Ge=De-1,We=0,tt=1,Ct=1,st=1<<P;for(fe=0,Y=1,ce=2;Y<=P;++Y,ce<<=1){if(tt+=Ct<<=1,0>(Ct-=Ae[Y]))return 0;for(;0<Ae[Y];--Ae[Y])(G=new X).g=Y,G.value=Te[fe++],E(M,be+We,ce,st,G),We=ve(We,Y)}for(Y=P+1,ce=2;15>=Y;++Y,ce<<=1){if(tt+=Ct<<=1,0>(Ct-=Ae[Y]))return 0;for(;0<Ae[Y];--Ae[Y]){if(G=new X,(We&Ge)!=Ye){for(be+=st,Fe=1<<(Ye=Y)-P;15>Ye&&!(0>=(Fe-=Ae[Ye]));)++Ye,Fe<<=1;De+=st=1<<(Fe=Ye-P),M[z+(Ye=We&Ge)].g=Fe+P,M[z+Ye].value=be-z-Ye}G.g=Y-P,G.value=Te[fe++],E(M,be+(We>>P),ce,st,G),We=ve(We,Y)}}return tt!=2*je[15]-1?0:De})(c,h,y,S,T,D)}function X(){this.value=this.g=0}function Q(){this.value=this.g=0}function le(){this.G=m(5,X),this.H=u(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=m(El,Q)}function ee(c,h,y,S){a(c!=null),a(h!=null),a(2147483648>S),c.Ca=254,c.I=0,c.b=-8,c.Ka=0,c.oa=h,c.pa=y,c.Jd=h,c.Yc=y+S,c.Zc=4<=S?y+S-4+1:y,we(c)}function ue(c,h){for(var y=0;0<h--;)y|=Oe(c,128)<<h;return y}function re(c,h){var y=ue(c,h);return Se(c)?-y:y}function Ce(c,h,y,S){var T,D=0;for(a(c!=null),a(h!=null),a(4294967288>S),c.Sb=S,c.Ra=0,c.u=0,c.h=0,4<S&&(S=4),T=0;T<S;++T)D+=h[y+T]<<8*T;c.Ra=D,c.bb=S,c.oa=h,c.pa=y}function ze(c){for(;8<=c.u&&c.bb<c.Sb;)c.Ra>>>=8,c.Ra+=c.oa[c.pa+c.bb]<<_i-8>>>0,++c.bb,c.u-=8;I(c)&&(c.h=1,c.u=0)}function Be(c,h){if(a(0<=h),!c.h&&h<=ys){var y=_(c)&tl[h];return c.u+=h,ze(c),y}return c.h=1,c.u=0}function R(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function Z(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function _(c){return c.Ra>>>(c.u&_i-1)>>>0}function I(c){return a(c.bb<=c.Sb),c.h||c.bb==c.Sb&&c.u>_i}function $(c,h){c.u=h,c.h=I(c)}function ae(c){c.u>=mi&&(a(c.u>=mi),ze(c))}function we(c){a(c!=null&&c.oa!=null),c.pa<c.Zc?(c.I=(c.oa[c.pa++]|c.I<<8)>>>0,c.b+=8):(a(c!=null&&c.oa!=null),c.pa<c.Yc?(c.b+=8,c.I=c.oa[c.pa++]|c.I<<8):c.Ka?c.b=0:(c.I<<=8,c.b+=8,c.Ka=1))}function Se(c){return ue(c,1)}function Oe(c,h){var y=c.Ca;0>c.b&&we(c);var S=c.b,T=y*h>>>8,D=(c.I>>>S>T)+0;for(D?(y-=T,c.I-=T+1<<S>>>0):y=T+1,S=y,T=0;256<=S;)T+=8,S>>=8;return S=7^T+Ll[S],c.b-=S,c.Ca=(y<<S)-1,D}function Ee(c,h,y){c[h+0]=y>>24&255,c[h+1]=y>>16&255,c[h+2]=y>>8&255,c[h+3]=255&y}function qe(c,h){return c[h+0]|c[h+1]<<8}function Qe(c,h){return qe(c,h)|c[h+2]<<16}function dt(c,h){return qe(c,h)|qe(c,h+2)<<16}function V(c,h){var y=1<<h;return a(c!=null),a(0<h),c.X=u(y),c.X==null?0:(c.Mb=32-h,c.Xa=h,1)}function Xe(c,h){a(c!=null),a(h!=null),a(c.Xa==h.Xa),l(h.X,0,c.X,0,1<<h.Xa)}function pt(){this.X=[],this.Xa=this.Mb=0}function Me(c,h,y,S){a(y!=null),a(S!=null);var T=y[0],D=S[0];return T==0&&(T=(c*D+h/2)/h),D==0&&(D=(h*T+c/2)/c),0>=T||0>=D?0:(y[0]=T,S[0]=D,1)}function xe(c,h){return c+(1<<h)-1>>>h}function Ve(c,h){return((4278255360&c)+(4278255360&h)>>>0&4278255360)+((16711935&c)+(16711935&h)>>>0&16711935)>>>0}function Ie(c,h){K[h]=function(y,S,T,D,M,z,P){var G;for(G=0;G<M;++G){var ce=K[c](z[P+G-1],T,D+G);z[P+G]=Ve(y[S+G],ce)}}}function Ke(){this.ud=this.hd=this.jd=0}function at(c,h){return((4278124286&(c^h))>>>1)+(c&h)>>>0}function At(c){return 0<=c&&256>c?c:0>c?0:255<c?255:void 0}function Bt(c,h){return At(c+(c-h+.5>>1))}function wt(c,h,y){return Math.abs(h-y)-Math.abs(c-y)}function Pt(c,h,y,S,T,D,M){for(S=D[M-1],y=0;y<T;++y)D[M+y]=S=Ve(c[h+y],S)}function Ut(c,h,y,S,T){var D;for(D=0;D<y;++D){var M=c[h+D],z=M>>8&255,P=16711935&(P=(P=16711935&M)+((z<<16)+z));S[T+D]=(4278255360&M)+P>>>0}}function $e(c,h){h.jd=255&c,h.hd=c>>8&255,h.ud=c>>16&255}function Nt(c,h,y,S,T,D){var M;for(M=0;M<S;++M){var z=h[y+M],P=z>>>8,G=z,ce=255&(ce=(ce=z>>>16)+((c.jd<<24>>24)*(P<<24>>24)>>>5));G=255&(G=(G+=(c.hd<<24>>24)*(P<<24>>24)>>>5)+((c.ud<<24>>24)*(ce<<24>>24)>>>5)),T[D+M]=(4278255360&z)+(ce<<16)+G}}function ht(c,h,y,S,T){K[h]=function(D,M,z,P,G,ce,Te,Y,fe){for(P=Te;P<Y;++P)for(Te=0;Te<fe;++Te)G[ce++]=T(z[S(D[M++])])},K[c]=function(D,M,z,P,G,ce,Te){var Y=8>>D.b,fe=D.Ea,be=D.K[0],De=D.w;if(8>Y)for(D=(1<<D.b)-1,De=(1<<Y)-1;M<z;++M){var Ae,je=0;for(Ae=0;Ae<fe;++Ae)Ae&D||(je=S(P[G++])),ce[Te++]=T(be[je&De]),je>>=Y}else K["VP8LMapColor"+y](P,G,be,De,ce,Te,M,z,fe)}}function Vn(c,h,y,S,T){for(y=h+y;h<y;){var D=c[h++];S[T++]=D>>16&255,S[T++]=D>>8&255,S[T++]=255&D}}function Qt(c,h,y,S,T){for(y=h+y;h<y;){var D=c[h++];S[T++]=D>>16&255,S[T++]=D>>8&255,S[T++]=255&D,S[T++]=D>>24&255}}function Rt(c,h,y,S,T){for(y=h+y;h<y;){var D=(M=c[h++])>>16&240|M>>12&15,M=240&M|M>>28&15;S[T++]=D,S[T++]=M}}function jt(c,h,y,S,T){for(y=h+y;h<y;){var D=(M=c[h++])>>16&248|M>>13&7,M=M>>5&224|M>>3&31;S[T++]=D,S[T++]=M}}function wn(c,h,y,S,T){for(y=h+y;h<y;){var D=c[h++];S[T++]=255&D,S[T++]=D>>8&255,S[T++]=D>>16&255}}function bt(c,h,y,S,T,D){if(D==0)for(y=h+y;h<y;)Ee(S,((D=c[h++])[0]>>24|D[1]>>8&65280|D[2]<<8&16711680|D[3]<<24)>>>0),T+=32;else l(S,T,c,h,y)}function Nn(c,h){K[h][0]=K[c+"0"],K[h][1]=K[c+"1"],K[h][2]=K[c+"2"],K[h][3]=K[c+"3"],K[h][4]=K[c+"4"],K[h][5]=K[c+"5"],K[h][6]=K[c+"6"],K[h][7]=K[c+"7"],K[h][8]=K[c+"8"],K[h][9]=K[c+"9"],K[h][10]=K[c+"10"],K[h][11]=K[c+"11"],K[h][12]=K[c+"12"],K[h][13]=K[c+"13"],K[h][14]=K[c+"0"],K[h][15]=K[c+"0"]}function ft(c){return c==sc||c==cc||c==zl||c==xa}function Ot(){this.eb=[],this.size=this.A=this.fb=0}function Cn(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Ft(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Ot,this.f.kb=new Cn,this.sd=null}function yt(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function en(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function lo(c){return alert("todo:WebPSamplerProcessPlane"),c.T}function Di(c,h){var y=c.T,S=h.ba.f.RGBA,T=S.eb,D=S.fb+c.ka*S.A,M=ua[h.ba.S],z=c.y,P=c.O,G=c.f,ce=c.N,Te=c.ea,Y=c.W,fe=h.cc,be=h.dc,De=h.Mc,Ae=h.Nc,je=c.ka,Fe=c.ka+c.T,Ye=c.U,Ge=Ye+1>>1;for(je==0?M(z,P,null,null,G,ce,Te,Y,G,ce,Te,Y,T,D,null,null,Ye):(M(h.ec,h.fc,z,P,fe,be,De,Ae,G,ce,Te,Y,T,D-S.A,T,D,Ye),++y);je+2<Fe;je+=2)fe=G,be=ce,De=Te,Ae=Y,ce+=c.Rc,Y+=c.Rc,D+=2*S.A,M(z,(P+=2*c.fa)-c.fa,z,P,fe,be,De,Ae,G,ce,Te,Y,T,D-S.A,T,D,Ye);return P+=c.fa,c.j+Fe<c.o?(l(h.ec,h.fc,z,P,Ye),l(h.cc,h.dc,G,ce,Ge),l(h.Mc,h.Nc,Te,Y,Ge),y--):1&Fe||M(z,P,null,null,G,ce,Te,Y,G,ce,Te,Y,T,D+S.A,null,null,Ye),y}function kr(c,h,y){var S=c.F,T=[c.J];if(S!=null){var D=c.U,M=h.ba.S,z=M==lc||M==zl;h=h.ba.f.RGBA;var P=[0],G=c.ka;P[0]=c.T,c.Kb&&(G==0?--P[0]:(--G,T[0]-=c.width),c.j+c.ka+c.T==c.o&&(P[0]=c.o-c.j-G));var ce=h.eb;G=h.fb+G*h.A,c=ac(S,T[0],c.width,D,P,ce,G+(z?0:3),h.A),a(y==P),c&&ft(M)&&Rl(ce,G,z,D,P,h.A)}return 0}function ia(c){var h=c.ma,y=h.ba.S,S=11>y,T=y==ws||y==Ns||y==lc||y==su||y==12||ft(y);if(h.memory=null,h.Ib=null,h.Jb=null,h.Nd=null,!Oa(h.Oa,c,T?11:12))return 0;if(T&&ft(y)&&zr(),c.da)alert("todo:use_scaling");else{if(S){if(h.Ib=lo,c.Kb){if(y=c.U+1>>1,h.memory=u(c.U+2*y),h.memory==null)return 0;h.ec=h.memory,h.fc=0,h.cc=h.ec,h.dc=h.fc+c.U,h.Mc=h.cc,h.Nc=h.dc+y,h.Ib=Di,zr()}}else alert("todo:EmitYUV");T&&(h.Jb=kr,S&&Pn())}if(S&&!du){for(c=0;256>c;++c)dc[c]=89858*(c-128)+$a>>Zi,bi[c]=-22014*(c-128)+$a,$u[c]=-45773*(c-128),hu[c]=113618*(c-128)+$a>>Zi;for(c=fa;c<za;++c)h=76283*(c-16)+$a>>Zi,Sn[c-fa]=Va(h,255),qt[c-fa]=Va(h+8>>4,15);du=1}return 1}function lt(c){var h=c.ma,y=c.U,S=c.T;return a(!(1&c.ka)),0>=y||0>=S?0:(y=h.Ib(c,h),h.Jb!=null&&h.Jb(c,h,y),h.Dc+=y,1)}function ki(c){c.ma.memory=null}function Gn(c,h,y,S){return Be(c,8)!=47?0:(h[0]=Be(c,14)+1,y[0]=Be(c,14)+1,S[0]=Be(c,1),Be(c,3)!=0?0:!c.h)}function Aa(c,h){if(4>c)return c+1;var y=c-2>>1;return(2+(1&c)<<y)+Be(h,y)+1}function _a(c,h){return 120<h?h-120:1<=(y=((y=Da[h-1])>>4)*c+(8-(15&y)))?y:1;var y}function qn(c,h,y){var S=_(y),T=c[h+=255&S].g-8;return 0<T&&($(y,y.u+8),S=_(y),h+=c[h].value,h+=S&(1<<T)-1),$(y,y.u+c[h].g),c[h].value}function Yn(c,h,y){return y.g+=c.g,y.value+=c.value<<h>>>0,a(8>=y.g),c.g}function Wn(c,h,y){var S=c.xc;return a((h=S==0?0:c.vc[c.md*(y>>S)+(h>>S)])<c.Wb),c.Ya[h]}function sr(c,h,y,S){var T=c.ab,D=c.c*h,M=c.C;h=M+h;var z=y,P=S;for(S=c.Ta,y=c.Ua;0<T--;){var G=c.gc[T],ce=M,Te=h,Y=z,fe=P,be=(P=S,z=y,G.Ea);switch(a(ce<Te),a(Te<=G.nc),G.hc){case 2:nl(Y,fe,(Te-ce)*be,P,z);break;case 0:var De=ce,Ae=Te,je=P,Fe=z,Ye=(st=G).Ea;De==0&&(Br(Y,fe,null,null,1,je,Fe),Pt(Y,fe+1,0,0,Ye-1,je,Fe+1),fe+=Ye,Fe+=Ye,++De);for(var Ge=1<<st.b,We=Ge-1,tt=xe(Ye,st.b),Ct=st.K,st=st.w+(De>>st.b)*tt;De<Ae;){var It=Ct,si=st,Tt=1;for(Pr(Y,fe,je,Fe-Ye,1,je,Fe);Tt<Ye;){var ot=(Tt&~We)+Ge;ot>Ye&&(ot=Ye),(0,Qa[It[si++]>>8&15])(Y,fe+ +Tt,je,Fe+Tt-Ye,ot-Tt,je,Fe+Tt),Tt=ot}fe+=Ye,Fe+=Ye,++De&We||(st+=tt)}Te!=G.nc&&l(P,z-be,P,z+(Te-ce-1)*be,be);break;case 1:for(be=Y,Ae=fe,Ye=(Y=G.Ea)-(Fe=Y&~(je=(fe=1<<G.b)-1)),De=xe(Y,G.b),Ge=G.K,G=G.w+(ce>>G.b)*De;ce<Te;){for(We=Ge,tt=G,Ct=new Ke,st=Ae+Fe,It=Ae+Y;Ae<st;)$e(We[tt++],Ct),il(Ct,be,Ae,fe,P,z),Ae+=fe,z+=fe;Ae<It&&($e(We[tt++],Ct),il(Ct,be,Ae,Ye,P,z),Ae+=Ye,z+=Ye),++ce&je||(G+=De)}break;case 3:if(Y==P&&fe==z&&0<G.b){for(Ae=P,Y=be=z+(Te-ce)*be-(Fe=(Te-ce)*xe(G.Ea,G.b)),fe=P,je=z,De=[],Fe=(Ye=Fe)-1;0<=Fe;--Fe)De[Fe]=fe[je+Fe];for(Fe=Ye-1;0<=Fe;--Fe)Ae[Y+Fe]=De[Fe];vo(G,ce,Te,P,be,P,z)}else vo(G,ce,Te,Y,fe,P,z)}z=S,P=y}P!=y&&l(S,y,z,P,D)}function aa(c,h){var y=c.V,S=c.Ba+c.c*c.C,T=h-c.C;if(a(h<=c.l.o),a(16>=T),0<T){var D=c.l,M=c.Ta,z=c.Ua,P=D.width;if(sr(c,T,y,S),T=z=[z],a((y=c.C)<(S=h)),a(D.v<D.va),S>D.o&&(S=D.o),y<D.j){var G=D.j-y;y=D.j,T[0]+=G*P}if(y>=S?y=0:(T[0]+=4*D.v,D.ka=y-D.j,D.U=D.va-D.v,D.T=S-y,y=1),y){if(z=z[0],11>(y=c.ca).S){var ce=y.f.RGBA,Te=(S=y.S,T=D.U,D=D.T,G=ce.eb,ce.A),Y=D;for(ce=ce.fb+c.Ma*ce.A;0<Y--;){var fe=M,be=z,De=T,Ae=G,je=ce;switch(S){case Cr:Ol(fe,be,De,Ae,je);break;case ws:Dl(fe,be,De,Ae,je);break;case sc:Dl(fe,be,De,Ae,je),Rl(Ae,je,0,De,1,0);break;case lu:al(fe,be,De,Ae,je);break;case Ns:bt(fe,be,De,Ae,je,1);break;case cc:bt(fe,be,De,Ae,je,1),Rl(Ae,je,0,De,1,0);break;case lc:bt(fe,be,De,Ae,je,0);break;case zl:bt(fe,be,De,Ae,je,0),Rl(Ae,je,1,De,1,0);break;case su:Ar(fe,be,De,Ae,je);break;case xa:Ar(fe,be,De,Ae,je),ru(Ae,je,De,1,0);break;case Ku:Ka(fe,be,De,Ae,je);break;default:a(0)}z+=P,ce+=Te}c.Ma+=D}else alert("todo:EmitRescaledRowsYUVA");a(c.Ma<=y.height)}}c.C=h,a(c.C<=c.i)}function ra(c){var h;if(0<c.ua)return 0;for(h=0;h<c.Wb;++h){var y=c.Ya[h].G,S=c.Ya[h].H;if(0<y[1][S[1]+0].g||0<y[2][S[2]+0].g||0<y[3][S[3]+0].g)return 0}return 1}function oa(c,h,y,S,T,D){if(c.Z!=0){var M=c.qd,z=c.rd;for(a(Gr[c.Z]!=null);h<y;++h)Gr[c.Z](M,z,S,T,S,T,D),M=S,z=T,T+=D;c.qd=M,c.rd=z}}function Ca(c,h){var y=c.l.ma,S=y.Z==0||y.Z==1?c.l.j:c.C;if(S=c.C<S?S:c.C,a(h<=c.l.o),h>S){var T=c.l.width,D=y.ca,M=y.tb+T*S,z=c.V,P=c.Ba+c.c*S,G=c.gc;a(c.ab==1),a(G[0].hc==3),bo(G[0],S,h,z,P,D,M),oa(y,S,h,D,M,T)}c.C=c.Ma=h}function Ha(c,h,y,S,T,D,M){var z=c.$/S,P=c.$%S,G=c.m,ce=c.s,Te=y+c.$,Y=Te;T=y+S*T;var fe=y+S*D,be=280+ce.ua,De=c.Pb?z:16777216,Ae=0<ce.ua?ce.Wa:null,je=ce.wc,Fe=Te<fe?Wn(ce,P,z):null;a(c.C<D),a(fe<=T);var Ye=!1;e:for(;;){for(;Ye||Te<fe;){var Ge=0;if(z>=De){var We=Te-y;a((De=c).Pb),De.wd=De.m,De.xd=We,0<De.s.ua&&Xe(De.s.Wa,De.s.vb),De=z+uu}if(P&je||(Fe=Wn(ce,P,z)),a(Fe!=null),Fe.Qb&&(h[Te]=Fe.qb,Ye=!0),!Ye)if(ae(G),Fe.jc){Ge=G,We=h;var tt=Te,Ct=Fe.pd[_(Ge)&El-1];a(Fe.jc),256>Ct.g?($(Ge,Ge.u+Ct.g),We[tt]=Ct.value,Ge=0):($(Ge,Ge.u+Ct.g-256),a(256<=Ct.value),Ge=Ct.value),Ge==0&&(Ye=!0)}else Ge=qn(Fe.G[0],Fe.H[0],G);if(G.h)break;if(Ye||256>Ge){if(!Ye)if(Fe.nd)h[Te]=(Fe.qb|Ge<<8)>>>0;else{if(ae(G),Ye=qn(Fe.G[1],Fe.H[1],G),ae(G),We=qn(Fe.G[2],Fe.H[2],G),tt=qn(Fe.G[3],Fe.H[3],G),G.h)break;h[Te]=(tt<<24|Ye<<16|Ge<<8|We)>>>0}if(Ye=!1,++Te,++P>=S&&(P=0,++z,M!=null&&z<=D&&!(z%16)&&M(c,z),Ae!=null))for(;Y<Te;)Ge=h[Y++],Ae.X[(506832829*Ge&4294967295)>>>Ae.Mb]=Ge}else if(280>Ge){if(Ge=Aa(Ge-256,G),We=qn(Fe.G[4],Fe.H[4],G),ae(G),We=_a(S,We=Aa(We,G)),G.h)break;if(Te-y<We||T-Te<Ge)break e;for(tt=0;tt<Ge;++tt)h[Te+tt]=h[Te+tt-We];for(Te+=Ge,P+=Ge;P>=S;)P-=S,++z,M!=null&&z<=D&&!(z%16)&&M(c,z);if(a(Te<=T),P&je&&(Fe=Wn(ce,P,z)),Ae!=null)for(;Y<Te;)Ge=h[Y++],Ae.X[(506832829*Ge&4294967295)>>>Ae.Mb]=Ge}else{if(!(Ge<be))break e;for(Ye=Ge-280,a(Ae!=null);Y<Te;)Ge=h[Y++],Ae.X[(506832829*Ge&4294967295)>>>Ae.Mb]=Ge;Ge=Te,a(!(Ye>>>(We=Ae).Xa)),h[Ge]=We.X[Ye],Ye=!0}Ye||a(G.h==I(G))}if(c.Pb&&G.h&&Te<T)a(c.m.h),c.a=5,c.m=c.wd,c.$=c.xd,0<c.s.ua&&Xe(c.s.vb,c.s.Wa);else{if(G.h)break e;M!=null&&M(c,z>D?D:z),c.a=0,c.$=Te-y}return 1}return c.a=3,0}function va(c){a(c!=null),c.vc=null,c.yc=null,c.Ya=null;var h=c.Wa;h!=null&&(h.X=null),c.vb=null,a(c!=null)}function Mr(){var c=new rt;return c==null?null:(c.a=0,c.xb=fc,Nn("Predictor","VP8LPredictors"),Nn("Predictor","VP8LPredictors_C"),Nn("PredictorAdd","VP8LPredictorsAdd"),Nn("PredictorAdd","VP8LPredictorsAdd_C"),nl=Ut,il=Nt,Ol=Vn,Dl=Qt,Ar=Rt,Ka=jt,al=wn,K.VP8LMapColor32b=Zn,K.VP8LMapColor8b=Sr,c)}function la(c,h,y,S,T){var D=1,M=[c],z=[h],P=S.m,G=S.s,ce=null,Te=0;e:for(;;){if(y)for(;D&&Be(P,1);){var Y=M,fe=z,be=S,De=1,Ae=be.m,je=be.gc[be.ab],Fe=Be(Ae,2);if(be.Oc&1<<Fe)D=0;else{switch(be.Oc|=1<<Fe,je.hc=Fe,je.Ea=Y[0],je.nc=fe[0],je.K=[null],++be.ab,a(4>=be.ab),Fe){case 0:case 1:je.b=Be(Ae,3)+2,De=la(xe(je.Ea,je.b),xe(je.nc,je.b),0,be,je.K),je.K=je.K[0];break;case 3:var Ye,Ge=Be(Ae,8)+1,We=16<Ge?0:4<Ge?1:2<Ge?2:3;if(Y[0]=xe(je.Ea,We),je.b=We,Ye=De=la(Ge,1,0,be,je.K)){var tt,Ct=Ge,st=je,It=1<<(8>>st.b),si=u(It);if(si==null)Ye=0;else{var Tt=st.K[0],ot=st.w;for(si[0]=st.K[0][0],tt=1;tt<1*Ct;++tt)si[tt]=Ve(Tt[ot+tt],si[tt-1]);for(;tt<4*It;++tt)si[tt]=0;st.K[0]=null,st.K[0]=si,Ye=1}}De=Ye;break;case 2:break;default:a(0)}D=De}}if(M=M[0],z=z[0],D&&Be(P,1)&&!(D=1<=(Te=Be(P,4))&&11>=Te)){S.a=3;break e}var Ze;if(Ze=D)t:{var An,Dt,Gt,Tn=S,yi=M,Kn=z,Dn=Te,ci=y,Bi=Tn.m,kn=Tn.s,Yt=[null],Wt=1,En=0,nn=Bl[Dn];n:for(;;){if(ci&&Be(Bi,1)){var xi=Be(Bi,3)+2,Ci=xe(yi,xi),pn=xe(Kn,xi),Ki=Ci*pn;if(!la(Ci,pn,0,Tn,Yt))break n;for(Yt=Yt[0],kn.xc=xi,An=0;An<Ki;++An){var sn=Yt[An]>>8&65535;Yt[An]=sn,sn>=Wt&&(Wt=sn+1)}}if(Bi.h)break n;for(Dt=0;5>Dt;++Dt){var Mn=cu[Dt];!Dt&&0<Dn&&(Mn+=1<<Dn),En<Mn&&(En=Mn)}var Ti=m(Wt*nn,X),wi=Wt,ti=m(wi,le);if(ti==null)var Pi=null;else a(65536>=wi),Pi=ti;var Ji=u(En);if(Pi==null||Ji==null||Ti==null){Tn.a=1;break n}var ui=Ti;for(An=Gt=0;An<Wt;++An){var gn=Pi[An],ni=gn.G,wa=gn.H,Zr=0,Ui=1,Rn=0;for(Dt=0;5>Dt;++Dt){Mn=cu[Dt],ni[Dt]=ui,wa[Dt]=Gt,!Dt&&0<Dn&&(Mn+=1<<Dn);a:{var wo,_s=Mn,Il=Tn,Qr=Ji,Cs=ui,ef=Gt,hc=0,Wi=Il.m,pc=Be(Wi,1);if(f(Qr,0,0,_s),pc){var tf=Be(Wi,1)+1,mu=Be(Wi,1),gc=Be(Wi,mu==0?1:8);Qr[gc]=1,tf==2&&(Qr[gc=Be(Wi,8)]=1);var ii=1}else{var Ei=u(19),Kr=Be(Wi,4)+4;if(19<Kr){Il.a=3;var Hl=0;break a}for(wo=0;wo<Kr;++wo)Ei[uc[wo]]=Be(Wi,3);var mc=void 0,Ba=void 0,da=Il,Li=Ei,No=_s,vc=Qr,Vl=0,Fi=da.m,kt=8,an=m(128,X);i:for(;B(an,0,7,Li,19);){if(Be(Fi,1)){var ai=2+2*Be(Fi,3);if((mc=2+Be(Fi,ai))>No)break i}else mc=No;for(Ba=0;Ba<No&&mc--;){ae(Fi);var Ts=an[0+(127&_(Fi))];$(Fi,Fi.u+Ts.g);var er=Ts.value;if(16>er)vc[Ba++]=er,er!=0&&(kt=er);else{var fl=er==16,Es=er-16,Ls=Hr[Es],dl=Be(Fi,Nd[Es])+Ls;if(Ba+dl>No)break i;for(var Ad=fl?kt:0;0<dl--;)vc[Ba++]=Ad}}Vl=1;break i}Vl||(da.a=3),ii=Vl}(ii=ii&&!Wi.h)&&(hc=B(Cs,ef,8,Qr,_s)),ii&&hc!=0?Hl=hc:(Il.a=3,Hl=0)}if(Hl==0)break n;if(Ui&&Vr[Dt]==1&&(Ui=ui[Gt].g==0),Zr+=ui[Gt].g,Gt+=Hl,3>=Dt){var _n,Os=Ji[0];for(_n=1;_n<Mn;++_n)Ji[_n]>Os&&(Os=Ji[_n]);Rn+=Os}}if(gn.nd=Ui,gn.Qb=0,Ui&&(gn.qb=(ni[3][wa[3]+0].value<<24|ni[1][wa[1]+0].value<<16|ni[2][wa[2]+0].value)>>>0,Zr==0&&256>ni[0][wa[0]+0].value&&(gn.Qb=1,gn.qb+=ni[0][wa[0]+0].value<<8)),gn.jc=!gn.Qb&&6>Rn,gn.jc){var Gl,Tr=gn;for(Gl=0;Gl<El;++Gl){var Jr=Gl,So=Tr.pd[Jr],Yl=Tr.G[0][Tr.H[0]+Jr];256<=Yl.value?(So.g=Yl.g+256,So.value=Yl.value):(So.g=0,So.value=0,Jr>>=Yn(Yl,8,So),Jr>>=Yn(Tr.G[1][Tr.H[1]+Jr],16,So),Jr>>=Yn(Tr.G[2][Tr.H[2]+Jr],0,So),Yn(Tr.G[3][Tr.H[3]+Jr],24,So))}}}kn.vc=Yt,kn.Wb=Wt,kn.Ya=Pi,kn.yc=Ti,Ze=1;break t}Ze=0}if(!(D=Ze)){S.a=3;break e}if(0<Te){if(G.ua=1<<Te,!V(G.Wa,Te)){S.a=1,D=0;break e}}else G.ua=0;var Ds=S,bc=M,$i=z,Un=Ds.s,Xl=Un.xc;if(Ds.c=bc,Ds.i=$i,Un.md=xe(bc,Xl),Un.wc=Xl==0?-1:(1<<Xl)-1,y){S.xb=sl;break e}if((ce=u(M*z))==null){S.a=1,D=0;break e}D=(D=Ha(S,ce,0,M,z,z,null))&&!P.h;break e}return D?(T!=null?T[0]=ce:(a(ce==null),a(y)),S.$=0,y||va(G)):va(G),D}function Bo(c,h){var y=c.c*c.i,S=y+h+16*h;return a(c.c<=h),c.V=u(S),c.V==null?(c.Ta=null,c.Ua=0,c.a=1,0):(c.Ta=c.V,c.Ua=c.Ba+y+h,1)}function Po(c,h){var y=c.C,S=h-y,T=c.V,D=c.Ba+c.c*y;for(a(h<=c.l.o);0<S;){var M=16<S?16:S,z=c.l.ma,P=c.l.width,G=P*M,ce=z.ca,Te=z.tb+P*y,Y=c.Ta,fe=c.Ua;sr(c,M,T,D),Qu(Y,fe,ce,Te,G),oa(z,y,y+M,ce,Te,P),S-=M,T+=M*c.c,y+=M}a(y==h),c.C=c.Ma=h}function Uo(){this.ub=this.yd=this.td=this.Rb=0}function Fo(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function fs(){this.Fb=this.Bb=this.Cb=0,this.Zb=u(4),this.Lb=u(4)}function qo(){this.Yb=(function(){var c=[];return(function h(y,S,T){for(var D=T[S],M=0;M<D&&(y.push(T.length>S+1?[]:0),!(T.length<S+1));M++)h(y[M],S+1,T)})(c,0,[3,11]),c})()}function ds(){this.jb=u(3),this.Wc=p([4,8],qo),this.Xc=p([4,17],qo)}function hs(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new u(4),this.od=new u(4)}function $n(){this.ld=this.La=this.dd=this.tc=0}function Xn(){this.Na=this.la=0}function Ai(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function cr(){this.ad=u(384),this.Za=0,this.Ob=u(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function ps(){this.uc=this.M=this.Nb=0,this.wa=Array(new $n),this.Y=0,this.ya=Array(new cr),this.aa=0,this.l=new ur}function Ys(){this.y=u(16),this.f=u(8),this.ea=u(8)}function Xs(){this.cb=this.a=0,this.sc="",this.m=new R,this.Od=new Uo,this.Kc=new Fo,this.ed=new hs,this.Qa=new fs,this.Ic=this.$c=this.Aa=0,this.D=new ps,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=m(8,R),this.ia=0,this.pb=m(4,Ai),this.Pa=new ds,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Ys),this.Hd=0,this.rb=Array(new Xn),this.sb=0,this.wa=Array(new $n),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new cr),this.L=this.aa=0,this.gd=p([4,2],$n),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Va(c,h){return 0>c?0:c>h?h:c}function ur(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function xl(){var c=new Xs;return c!=null&&(c.a=0,c.sc="OK",c.cb=0,c.Xb=0,ol||(ol=dr)),c}function zn(c,h,y){return c.a==0&&(c.a=h,c.sc=y,c.cb=0),0}function fr(c,h,y){return 3<=y&&c[h+0]==157&&c[h+1]==1&&c[h+2]==42}function Vi(c,h){if(c==null)return 0;if(c.a=0,c.sc="OK",h==null)return zn(c,2,"null VP8Io passed to VP8GetHeaders()");var y=h.data,S=h.w,T=h.ha;if(4>T)return zn(c,7,"Truncated header.");var D=y[S+0]|y[S+1]<<8|y[S+2]<<16,M=c.Od;if(M.Rb=!(1&D),M.td=D>>1&7,M.yd=D>>4&1,M.ub=D>>5,3<M.td)return zn(c,3,"Incorrect keyframe parameters.");if(!M.yd)return zn(c,4,"Frame not displayable.");S+=3,T-=3;var z=c.Kc;if(M.Rb){if(7>T)return zn(c,7,"cannot parse picture header");if(!fr(y,S,T))return zn(c,3,"Bad code word");z.c=16383&(y[S+4]<<8|y[S+3]),z.Td=y[S+4]>>6,z.i=16383&(y[S+6]<<8|y[S+5]),z.Ud=y[S+6]>>6,S+=7,T-=7,c.za=z.c+15>>4,c.Ub=z.i+15>>4,h.width=z.c,h.height=z.i,h.Da=0,h.j=0,h.v=0,h.va=h.width,h.o=h.height,h.da=0,h.ib=h.width,h.hb=h.height,h.U=h.width,h.T=h.height,f((D=c.Pa).jb,0,255,D.jb.length),a((D=c.Qa)!=null),D.Cb=0,D.Bb=0,D.Fb=1,f(D.Zb,0,0,D.Zb.length),f(D.Lb,0,0,D.Lb)}if(M.ub>T)return zn(c,7,"bad partition length");ee(D=c.m,y,S,M.ub),S+=M.ub,T-=M.ub,M.Rb&&(z.Ld=Se(D),z.Kd=Se(D)),z=c.Qa;var P,G=c.Pa;if(a(D!=null),a(z!=null),z.Cb=Se(D),z.Cb){if(z.Bb=Se(D),Se(D)){for(z.Fb=Se(D),P=0;4>P;++P)z.Zb[P]=Se(D)?re(D,7):0;for(P=0;4>P;++P)z.Lb[P]=Se(D)?re(D,6):0}if(z.Bb)for(P=0;3>P;++P)G.jb[P]=Se(D)?ue(D,8):255}else z.Bb=0;if(D.Ka)return zn(c,3,"cannot parse segment header");if((z=c.ed).zd=Se(D),z.Tb=ue(D,6),z.wb=ue(D,3),z.Pc=Se(D),z.Pc&&Se(D)){for(G=0;4>G;++G)Se(D)&&(z.vd[G]=re(D,6));for(G=0;4>G;++G)Se(D)&&(z.od[G]=re(D,6))}if(c.L=z.Tb==0?0:z.zd?1:2,D.Ka)return zn(c,3,"cannot parse filter header");var ce=T;if(T=P=S,S=P+ce,z=ce,c.Xb=(1<<ue(c.m,2))-1,ce<3*(G=c.Xb))y=7;else{for(P+=3*G,z-=3*G,ce=0;ce<G;++ce){var Te=y[T+0]|y[T+1]<<8|y[T+2]<<16;Te>z&&(Te=z),ee(c.Jc[+ce],y,P,Te),P+=Te,z-=Te,T+=3}ee(c.Jc[+G],y,P,z),y=P<S?0:5}if(y!=0)return zn(c,y,"cannot parse partitions");for(y=ue(P=c.m,7),T=Se(P)?re(P,4):0,S=Se(P)?re(P,4):0,z=Se(P)?re(P,4):0,G=Se(P)?re(P,4):0,P=Se(P)?re(P,4):0,ce=c.Qa,Te=0;4>Te;++Te){if(ce.Cb){var Y=ce.Zb[Te];ce.Fb||(Y+=y)}else{if(0<Te){c.pb[Te]=c.pb[0];continue}Y=y}var fe=c.pb[Te];fe.Sc[0]=Pl[Va(Y+T,127)],fe.Sc[1]=Ul[Va(Y+0,127)],fe.Eb[0]=2*Pl[Va(Y+S,127)],fe.Eb[1]=101581*Ul[Va(Y+z,127)]>>16,8>fe.Eb[1]&&(fe.Eb[1]=8),fe.Qc[0]=Pl[Va(Y+G,117)],fe.Qc[1]=Ul[Va(Y+P,127)],fe.lc=Y+P}if(!M.Rb)return zn(c,4,"Not a key frame.");for(Se(D),M=c.Pa,y=0;4>y;++y){for(T=0;8>T;++T)for(S=0;3>S;++S)for(z=0;11>z;++z)G=Oe(D,ca[y][T][S][z])?ue(D,8):Fl[y][T][S][z],M.Wc[y][T].Yb[S][z]=G;for(T=0;17>T;++T)M.Xc[y][T]=M.Wc[y][fu[T]]}return c.kc=Se(D),c.kc&&(c.Bd=ue(D,8)),c.cb=1}function dr(c,h,y,S,T,D,M){var z=h[T].Yb[y];for(y=0;16>T;++T){if(!Oe(c,z[y+0]))return T;for(;!Oe(c,z[y+1]);)if(z=h[++T].Yb[0],y=0,T==16)return 16;var P=h[T+1].Yb;if(Oe(c,z[y+2])){var G=c,ce=0;if(Oe(G,(Y=z)[(Te=y)+3]))if(Oe(G,Y[Te+6])){for(z=0,Te=2*(ce=Oe(G,Y[Te+8]))+(Y=Oe(G,Y[Te+9+ce])),ce=0,Y=ll[Te];Y[z];++z)ce+=ce+Oe(G,Y[z]);ce+=3+(8<<Te)}else Oe(G,Y[Te+7])?(ce=7+2*Oe(G,165),ce+=Oe(G,145)):ce=5+Oe(G,159);else ce=Oe(G,Y[Te+4])?3+Oe(G,Y[Te+5]):2;z=P[2]}else ce=1,z=P[1];P=M+Ju[T],0>(G=c).b&&we(G);var Te,Y=G.b,fe=(Te=G.Ca>>1)-(G.I>>Y)>>31;--G.b,G.Ca+=fe,G.Ca|=1,G.I-=(Te+1&fe)<<Y,D[P]=((ce^fe)-fe)*S[(0<T)+0]}return 16}function hr(c){var h=c.rb[c.sb-1];h.la=0,h.Na=0,f(c.zc,0,0,c.zc.length),c.ja=0}function tn(c,h,y,S,T){T=c[h+y+32*S]+(T>>3),c[h+y+32*S]=-256&T?0>T?0:255:T}function Io(c,h,y,S,T,D){tn(c,h,0,y,S+T),tn(c,h,1,y,S+D),tn(c,h,2,y,S-D),tn(c,h,3,y,S-T)}function pr(c){return(20091*c>>16)+c}function gi(c,h,y,S){var T,D=0,M=u(16);for(T=0;4>T;++T){var z=c[h+0]+c[h+8],P=c[h+0]-c[h+8],G=(35468*c[h+4]>>16)-pr(c[h+12]),ce=pr(c[h+4])+(35468*c[h+12]>>16);M[D+0]=z+ce,M[D+1]=P+G,M[D+2]=P-G,M[D+3]=z-ce,D+=4,h++}for(T=D=0;4>T;++T)z=(c=M[D+0]+4)+M[D+8],P=c-M[D+8],G=(35468*M[D+4]>>16)-pr(M[D+12]),tn(y,S,0,0,z+(ce=pr(M[D+4])+(35468*M[D+12]>>16))),tn(y,S,1,0,P+G),tn(y,S,2,0,P-G),tn(y,S,3,0,z-ce),D++,S+=32}function gr(c,h,y,S){var T=c[h+0]+4,D=35468*c[h+4]>>16,M=pr(c[h+4]),z=35468*c[h+1]>>16;Io(y,S,0,T+M,c=pr(c[h+1]),z),Io(y,S,1,T+D,c,z),Io(y,S,2,T-D,c,z),Io(y,S,3,T-M,c,z)}function so(c,h,y,S,T){gi(c,h,y,S),T&&gi(c,h+16,y,S+4)}function eu(c,h,y,S){_r(c,h+0,y,S,1),_r(c,h+32,y,S+128,1)}function Zs(c,h,y,S){var T;for(c=c[h+0]+4,T=0;4>T;++T)for(h=0;4>h;++h)tn(y,S,h,T,c)}function Ga(c,h,y,S){c[h+0]&&vi(c,h+0,y,S),c[h+16]&&vi(c,h+16,y,S+4),c[h+32]&&vi(c,h+32,y,S+128),c[h+48]&&vi(c,h+48,y,S+128+4)}function Qs(c,h,y,S){var T,D=u(16);for(T=0;4>T;++T){var M=c[h+0+T]+c[h+12+T],z=c[h+4+T]+c[h+8+T],P=c[h+4+T]-c[h+8+T],G=c[h+0+T]-c[h+12+T];D[0+T]=M+z,D[8+T]=M-z,D[4+T]=G+P,D[12+T]=G-P}for(T=0;4>T;++T)M=(c=D[0+4*T]+3)+D[3+4*T],z=D[1+4*T]+D[2+4*T],P=D[1+4*T]-D[2+4*T],G=c-D[3+4*T],y[S+0]=M+z>>3,y[S+16]=G+P>>3,y[S+32]=M-z>>3,y[S+48]=G-P>>3,S+=64}function Ht(c,h,y){var S,T=h-32,D=Xi,M=255-c[T-1];for(S=0;S<y;++S){var z,P=D,G=M+c[h-1];for(z=0;z<y;++z)c[h+z]=P[G+c[T+z]];h+=32}}function Ho(c,h){Ht(c,h,4)}function co(c,h){Ht(c,h,8)}function wl(c,h){Ht(c,h,16)}function Ya(c,h){var y;for(y=0;16>y;++y)l(c,h+32*y,c,h-32,16)}function Gi(c,h){var y;for(y=16;0<y;--y)f(c,h,c[h-1],16),h+=32}function Rr(c,h,y){var S;for(S=0;16>S;++S)f(h,y+32*S,c,16)}function Ks(c,h){var y,S=16;for(y=0;16>y;++y)S+=c[h-1+32*y]+c[h+y-32];Rr(S>>5,c,h)}function mr(c,h){var y,S=8;for(y=0;16>y;++y)S+=c[h-1+32*y];Rr(S>>4,c,h)}function Js(c,h){var y,S=8;for(y=0;16>y;++y)S+=c[h+y-32];Rr(S>>4,c,h)}function Vo(c,h){Rr(128,c,h)}function gt(c,h,y){return c+2*h+y+2>>2}function gs(c,h){var y,S=h-32;for(S=new Uint8Array([gt(c[S-1],c[S+0],c[S+1]),gt(c[S+0],c[S+1],c[S+2]),gt(c[S+1],c[S+2],c[S+3]),gt(c[S+2],c[S+3],c[S+4])]),y=0;4>y;++y)l(c,h+32*y,S,0,S.length)}function Ws(c,h){var y=c[h-1],S=c[h-1+32],T=c[h-1+64],D=c[h-1+96];Ee(c,h+0,16843009*gt(c[h-1-32],y,S)),Ee(c,h+32,16843009*gt(y,S,T)),Ee(c,h+64,16843009*gt(S,T,D)),Ee(c,h+96,16843009*gt(T,D,D))}function ms(c,h){var y,S=4;for(y=0;4>y;++y)S+=c[h+y-32]+c[h-1+32*y];for(S>>=3,y=0;4>y;++y)f(c,h+32*y,S,4)}function uo(c,h){var y=c[h-1+0],S=c[h-1+32],T=c[h-1+64],D=c[h-1-32],M=c[h+0-32],z=c[h+1-32],P=c[h+2-32],G=c[h+3-32];c[h+0+96]=gt(S,T,c[h-1+96]),c[h+1+96]=c[h+0+64]=gt(y,S,T),c[h+2+96]=c[h+1+64]=c[h+0+32]=gt(D,y,S),c[h+3+96]=c[h+2+64]=c[h+1+32]=c[h+0+0]=gt(M,D,y),c[h+3+64]=c[h+2+32]=c[h+1+0]=gt(z,M,D),c[h+3+32]=c[h+2+0]=gt(P,z,M),c[h+3+0]=gt(G,P,z)}function $s(c,h){var y=c[h+1-32],S=c[h+2-32],T=c[h+3-32],D=c[h+4-32],M=c[h+5-32],z=c[h+6-32],P=c[h+7-32];c[h+0+0]=gt(c[h+0-32],y,S),c[h+1+0]=c[h+0+32]=gt(y,S,T),c[h+2+0]=c[h+1+32]=c[h+0+64]=gt(S,T,D),c[h+3+0]=c[h+2+32]=c[h+1+64]=c[h+0+96]=gt(T,D,M),c[h+3+32]=c[h+2+64]=c[h+1+96]=gt(D,M,z),c[h+3+64]=c[h+2+96]=gt(M,z,P),c[h+3+96]=gt(z,P,P)}function vr(c,h){var y=c[h-1+0],S=c[h-1+32],T=c[h-1+64],D=c[h-1-32],M=c[h+0-32],z=c[h+1-32],P=c[h+2-32],G=c[h+3-32];c[h+0+0]=c[h+1+64]=D+M+1>>1,c[h+1+0]=c[h+2+64]=M+z+1>>1,c[h+2+0]=c[h+3+64]=z+P+1>>1,c[h+3+0]=P+G+1>>1,c[h+0+96]=gt(T,S,y),c[h+0+64]=gt(S,y,D),c[h+0+32]=c[h+1+96]=gt(y,D,M),c[h+1+32]=c[h+2+96]=gt(D,M,z),c[h+2+32]=c[h+3+96]=gt(M,z,P),c[h+3+32]=gt(z,P,G)}function sa(c,h){var y=c[h+0-32],S=c[h+1-32],T=c[h+2-32],D=c[h+3-32],M=c[h+4-32],z=c[h+5-32],P=c[h+6-32],G=c[h+7-32];c[h+0+0]=y+S+1>>1,c[h+1+0]=c[h+0+64]=S+T+1>>1,c[h+2+0]=c[h+1+64]=T+D+1>>1,c[h+3+0]=c[h+2+64]=D+M+1>>1,c[h+0+32]=gt(y,S,T),c[h+1+32]=c[h+0+96]=gt(S,T,D),c[h+2+32]=c[h+1+96]=gt(T,D,M),c[h+3+32]=c[h+2+96]=gt(D,M,z),c[h+3+64]=gt(M,z,P),c[h+3+96]=gt(z,P,G)}function tu(c,h){var y=c[h-1+0],S=c[h-1+32],T=c[h-1+64],D=c[h-1+96];c[h+0+0]=y+S+1>>1,c[h+2+0]=c[h+0+32]=S+T+1>>1,c[h+2+32]=c[h+0+64]=T+D+1>>1,c[h+1+0]=gt(y,S,T),c[h+3+0]=c[h+1+32]=gt(S,T,D),c[h+3+32]=c[h+1+64]=gt(T,D,D),c[h+3+64]=c[h+2+64]=c[h+0+96]=c[h+1+96]=c[h+2+96]=c[h+3+96]=D}function ec(c,h){var y=c[h-1+0],S=c[h-1+32],T=c[h-1+64],D=c[h-1+96],M=c[h-1-32],z=c[h+0-32],P=c[h+1-32],G=c[h+2-32];c[h+0+0]=c[h+2+32]=y+M+1>>1,c[h+0+32]=c[h+2+64]=S+y+1>>1,c[h+0+64]=c[h+2+96]=T+S+1>>1,c[h+0+96]=D+T+1>>1,c[h+3+0]=gt(z,P,G),c[h+2+0]=gt(M,z,P),c[h+1+0]=c[h+3+32]=gt(y,M,z),c[h+1+32]=c[h+3+64]=gt(S,y,M),c[h+1+64]=c[h+3+96]=gt(T,S,y),c[h+1+96]=gt(D,T,S)}function Go(c,h){var y;for(y=0;8>y;++y)l(c,h+32*y,c,h-32,8)}function Yo(c,h){var y;for(y=0;8>y;++y)f(c,h,c[h-1],8),h+=32}function br(c,h,y){var S;for(S=0;8>S;++S)f(h,y+32*S,c,8)}function nu(c,h){var y,S=8;for(y=0;8>y;++y)S+=c[h+y-32]+c[h-1+32*y];br(S>>4,c,h)}function jr(c,h){var y,S=4;for(y=0;8>y;++y)S+=c[h+y-32];br(S>>3,c,h)}function Ta(c,h){var y,S=4;for(y=0;8>y;++y)S+=c[h-1+32*y];br(S>>3,c,h)}function Xo(c,h){br(128,c,h)}function yr(c,h,y){var S=c[h-y],T=c[h+0],D=3*(T-S)+qr[1020+c[h-2*y]-c[h+y]],M=Ir[112+(D+4>>3)];c[h-y]=Xi[255+S+Ir[112+(D+3>>3)]],c[h+0]=Xi[255+T-M]}function xr(c,h,y,S){var T=c[h+0],D=c[h+y];return ya[255+c[h-2*y]-c[h-y]]>S||ya[255+D-T]>S}function Ea(c,h,y,S){return 4*ya[255+c[h-y]-c[h+0]]+ya[255+c[h-2*y]-c[h+y]]<=S}function Nl(c,h,y,S,T){var D=c[h-3*y],M=c[h-2*y],z=c[h-y],P=c[h+0],G=c[h+y],ce=c[h+2*y],Te=c[h+3*y];return 4*ya[255+z-P]+ya[255+M-G]>S?0:ya[255+c[h-4*y]-D]<=T&&ya[255+D-M]<=T&&ya[255+M-z]<=T&&ya[255+Te-ce]<=T&&ya[255+ce-G]<=T&&ya[255+G-P]<=T}function fo(c,h,y,S){var T=2*S+1;for(S=0;16>S;++S)Ea(c,h+S,y,T)&&yr(c,h+S,y)}function Sl(c,h,y,S){var T=2*S+1;for(S=0;16>S;++S)Ea(c,h+S*y,1,T)&&yr(c,h+S*y,1)}function wr(c,h,y,S){var T;for(T=3;0<T;--T)fo(c,h+=4*y,y,S)}function La(c,h,y,S){var T;for(T=3;0<T;--T)Sl(c,h+=4,y,S)}function Xa(c,h,y,S,T,D,M,z){for(D=2*D+1;0<T--;){if(Nl(c,h,y,D,M))if(xr(c,h,y,z))yr(c,h,y);else{var P=c,G=h,ce=y,Te=P[G-2*ce],Y=P[G-ce],fe=P[G+0],be=P[G+ce],De=P[G+2*ce],Ae=27*(Fe=qr[1020+3*(fe-Y)+qr[1020+Te-be]])+63>>7,je=18*Fe+63>>7,Fe=9*Fe+63>>7;P[G-3*ce]=Xi[255+P[G-3*ce]+Fe],P[G-2*ce]=Xi[255+Te+je],P[G-ce]=Xi[255+Y+Ae],P[G+0]=Xi[255+fe-Ae],P[G+ce]=Xi[255+be-je],P[G+2*ce]=Xi[255+De-Fe]}h+=S}}function ba(c,h,y,S,T,D,M,z){for(D=2*D+1;0<T--;){if(Nl(c,h,y,D,M))if(xr(c,h,y,z))yr(c,h,y);else{var P=c,G=h,ce=y,Te=P[G-ce],Y=P[G+0],fe=P[G+ce],be=Ir[112+(4+(De=3*(Y-Te))>>3)],De=Ir[112+(De+3>>3)],Ae=be+1>>1;P[G-2*ce]=Xi[255+P[G-2*ce]+Ae],P[G-ce]=Xi[255+Te+De],P[G+0]=Xi[255+Y-be],P[G+ce]=Xi[255+fe-Ae]}h+=S}}function Za(c,h,y,S,T,D){Xa(c,h,y,1,16,S,T,D)}function Al(c,h,y,S,T,D){Xa(c,h,1,y,16,S,T,D)}function Zo(c,h,y,S,T,D){var M;for(M=3;0<M;--M)ba(c,h+=4*y,y,1,16,S,T,D)}function ho(c,h,y,S,T,D){var M;for(M=3;0<M;--M)ba(c,h+=4,1,y,16,S,T,D)}function Qo(c,h,y,S,T,D,M,z){Xa(c,h,T,1,8,D,M,z),Xa(y,S,T,1,8,D,M,z)}function v(c,h,y,S,T,D,M,z){Xa(c,h,1,T,8,D,M,z),Xa(y,S,1,T,8,D,M,z)}function C(c,h,y,S,T,D,M,z){ba(c,h+4*T,T,1,8,D,M,z),ba(y,S+4*T,T,1,8,D,M,z)}function H(c,h,y,S,T,D,M,z){ba(c,h+4,1,T,8,D,M,z),ba(y,S+4,1,T,8,D,M,z)}function ie(){this.ba=new Ft,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new en,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function he(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Re(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function He(){this.ua=0,this.Wa=new pt,this.vb=new pt,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new le,this.yc=new X}function rt(){this.xb=this.a=0,this.l=new ur,this.ca=new Ft,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new Z,this.Pb=0,this.wd=new Z,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new He,this.ab=0,this.gc=m(4,Re),this.Oc=0}function it(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new ur,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function xt(c,h,y,S,T,D,M){for(c=c==null?0:c[h+0],h=0;h<M;++h)T[D+h]=c+y[S+h]&255,c=T[D+h]}function _t(c,h,y,S,T,D,M){var z;if(c==null)xt(null,null,y,S,T,D,M);else for(z=0;z<M;++z)T[D+z]=c[h+z]+y[S+z]&255}function Vt(c,h,y,S,T,D,M){if(c==null)xt(null,null,y,S,T,D,M);else{var z,P=c[h+0],G=P,ce=P;for(z=0;z<M;++z)G=ce+(P=c[h+z])-G,ce=y[S+z]+(-256&G?0>G?0:255:G)&255,G=P,T[D+z]=ce}}function ei(c,h,y,S){var T=h.width,D=h.o;if(a(c!=null&&h!=null),0>y||0>=S||y+S>D)return null;if(!c.Cc){if(c.ga==null){var M;if(c.ga=new it,(M=c.ga==null)||(M=h.width*h.o,a(c.Gb.length==0),c.Gb=u(M),c.Uc=0,c.Gb==null?M=0:(c.mb=c.Gb,c.nb=c.Uc,c.rc=null,M=1),M=!M),!M){M=c.ga;var z=c.Fa,P=c.P,G=c.qc,ce=c.mb,Te=c.nb,Y=P+1,fe=G-1,be=M.l;if(a(z!=null&&ce!=null&&h!=null),Gr[0]=null,Gr[1]=xt,Gr[2]=_t,Gr[3]=Vt,M.ca=ce,M.tb=Te,M.c=h.width,M.i=h.height,a(0<M.c&&0<M.i),1>=G)h=0;else if(M.$a=3&z[P+0],M.Z=z[P+0]>>2&3,M.Lc=z[P+0]>>4&3,P=z[P+0]>>6&3,0>M.$a||1<M.$a||4<=M.Z||1<M.Lc||P)h=0;else if(be.put=lt,be.ac=ia,be.bc=ki,be.ma=M,be.width=h.width,be.height=h.height,be.Da=h.Da,be.v=h.v,be.va=h.va,be.j=h.j,be.o=h.o,M.$a)e:{a(M.$a==1),h=Mr();t:for(;;){if(h==null){h=0;break e}if(a(M!=null),M.mc=h,h.c=M.c,h.i=M.i,h.l=M.l,h.l.ma=M,h.l.width=M.c,h.l.height=M.i,h.a=0,Ce(h.m,z,Y,fe),!la(M.c,M.i,1,h,null)||(h.ab==1&&h.gc[0].hc==3&&ra(h.s)?(M.ic=1,z=h.c*h.i,h.Ta=null,h.Ua=0,h.V=u(z),h.Ba=0,h.V==null?(h.a=1,h=0):h=1):(M.ic=0,h=Bo(h,M.c)),!h))break t;h=1;break e}M.mc=null,h=0}else h=fe>=M.c*M.i;M=!h}if(M)return null;c.ga.Lc!=1?c.Ga=0:S=D-y}a(c.ga!=null),a(y+S<=D);e:{if(h=(z=c.ga).c,D=z.l.o,z.$a==0){if(Y=c.rc,fe=c.Vc,be=c.Fa,P=c.P+1+y*h,G=c.mb,ce=c.nb+y*h,a(P<=c.P+c.qc),z.Z!=0)for(a(Gr[z.Z]!=null),M=0;M<S;++M)Gr[z.Z](Y,fe,be,P,G,ce,h),Y=G,fe=ce,ce+=h,P+=h;else for(M=0;M<S;++M)l(G,ce,be,P,h),Y=G,fe=ce,ce+=h,P+=h;c.rc=Y,c.Vc=fe}else{if(a(z.mc!=null),h=y+S,a((M=z.mc)!=null),a(h<=M.i),M.C>=h)h=1;else if(z.ic||Pn(),z.ic){z=M.V,Y=M.Ba,fe=M.c;var De=M.i,Ae=(be=1,P=M.$/fe,G=M.$%fe,ce=M.m,Te=M.s,M.$),je=fe*De,Fe=fe*h,Ye=Te.wc,Ge=Ae<Fe?Wn(Te,G,P):null;a(Ae<=je),a(h<=De),a(ra(Te));t:for(;;){for(;!ce.h&&Ae<Fe;){if(G&Ye||(Ge=Wn(Te,G,P)),a(Ge!=null),ae(ce),256>(De=qn(Ge.G[0],Ge.H[0],ce)))z[Y+Ae]=De,++Ae,++G>=fe&&(G=0,++P<=h&&!(P%16)&&Ca(M,P));else{if(!(280>De)){be=0;break t}De=Aa(De-256,ce);var We,tt=qn(Ge.G[4],Ge.H[4],ce);if(ae(ce),!(Ae>=(tt=_a(fe,tt=Aa(tt,ce)))&&je-Ae>=De)){be=0;break t}for(We=0;We<De;++We)z[Y+Ae+We]=z[Y+Ae+We-tt];for(Ae+=De,G+=De;G>=fe;)G-=fe,++P<=h&&!(P%16)&&Ca(M,P);Ae<Fe&&G&Ye&&(Ge=Wn(Te,G,P))}a(ce.h==I(ce))}Ca(M,P>h?h:P);break t}!be||ce.h&&Ae<je?(be=0,M.a=ce.h?5:3):M.$=Ae,h=be}else h=Ha(M,M.V,M.Ba,M.c,M.i,h,Po);if(!h){S=0;break e}}y+S>=D&&(c.Cc=1),S=1}if(!S)return null;if(c.Cc&&((S=c.ga)!=null&&(S.mc=null),c.ga=null,0<c.Ga))return alert("todo:WebPDequantizeLevels"),null}return c.nb+y*T}function un(c,h,y,S,T,D){for(;0<T--;){var M,z=c,P=h+(y?1:0),G=c,ce=h+(y?0:3);for(M=0;M<S;++M){var Te=G[ce+4*M];Te!=255&&(Te*=32897,z[P+4*M+0]=z[P+4*M+0]*Te>>23,z[P+4*M+1]=z[P+4*M+1]*Te>>23,z[P+4*M+2]=z[P+4*M+2]*Te>>23)}h+=D}}function ln(c,h,y,S,T){for(;0<S--;){var D;for(D=0;D<y;++D){var M=c[h+2*D+0],z=15&(G=c[h+2*D+1]),P=4369*z,G=(240&G|G>>4)*P>>16;c[h+2*D+0]=(240&M|M>>4)*P>>16&240|(15&M|M<<4)*P>>16>>4&15,c[h+2*D+1]=240&G|z}h+=T}}function fn(c,h,y,S,T,D,M,z){var P,G,ce=255;for(G=0;G<T;++G){for(P=0;P<S;++P){var Te=c[h+P];D[M+4*P]=Te,ce&=Te}h+=y,M+=z}return ce!=255}function Bn(c,h,y,S,T){var D;for(D=0;D<T;++D)y[S+D]=c[h+D]>>8}function Pn(){Rl=un,ru=ln,ac=fn,Qu=Bn}function Mi(c,h,y){K[c]=function(S,T,D,M,z,P,G,ce,Te,Y,fe,be,De,Ae,je,Fe,Ye){var Ge,We=Ye-1>>1,tt=z[P+0]|G[ce+0]<<16,Ct=Te[Y+0]|fe[be+0]<<16;a(S!=null);var st=3*tt+Ct+131074>>2;for(h(S[T+0],255&st,st>>16,De,Ae),D!=null&&(st=3*Ct+tt+131074>>2,h(D[M+0],255&st,st>>16,je,Fe)),Ge=1;Ge<=We;++Ge){var It=z[P+Ge]|G[ce+Ge]<<16,si=Te[Y+Ge]|fe[be+Ge]<<16,Tt=tt+It+Ct+si+524296,ot=Tt+2*(It+Ct)>>3;st=ot+tt>>1,tt=(Tt=Tt+2*(tt+si)>>3)+It>>1,h(S[T+2*Ge-1],255&st,st>>16,De,Ae+(2*Ge-1)*y),h(S[T+2*Ge-0],255&tt,tt>>16,De,Ae+(2*Ge-0)*y),D!=null&&(st=Tt+Ct>>1,tt=ot+si>>1,h(D[M+2*Ge-1],255&st,st>>16,je,Fe+(2*Ge-1)*y),h(D[M+2*Ge+0],255&tt,tt>>16,je,Fe+(2*Ge+0)*y)),tt=It,Ct=si}1&Ye||(st=3*tt+Ct+131074>>2,h(S[T+Ye-1],255&st,st>>16,De,Ae+(Ye-1)*y),D!=null&&(st=3*Ct+tt+131074>>2,h(D[M+Ye-1],255&st,st>>16,je,Fe+(Ye-1)*y)))}}function zr(){ua[Cr]=Wu,ua[ws]=cl,ua[lu]=Ra,ua[Ns]=ul,ua[lc]=As,ua[su]=ql,ua[Ku]=ja,ua[sc]=cl,ua[cc]=ul,ua[zl]=As,ua[xa]=ql}function vs(c){return c&-16384?0>c?0:255:c>>Yr}function po(c,h){return vs((19077*c>>8)+(26149*h>>8)-14234)}function Ko(c,h,y){return vs((19077*c>>8)-(6419*h>>8)-(13320*y>>8)+8708)}function go(c,h){return vs((19077*c>>8)+(33050*h>>8)-17685)}function Jo(c,h,y,S,T){S[T+0]=po(c,y),S[T+1]=Ko(c,h,y),S[T+2]=go(c,h)}function _l(c,h,y,S,T){S[T+0]=go(c,h),S[T+1]=Ko(c,h,y),S[T+2]=po(c,y)}function mo(c,h,y,S,T){var D=Ko(c,h,y);h=D<<3&224|go(c,h)>>3,S[T+0]=248&po(c,y)|D>>5,S[T+1]=h}function Ri(c,h,y,S,T){var D=240&go(c,h)|15;S[T+0]=240&po(c,y)|Ko(c,h,y)>>4,S[T+1]=D}function Wo(c,h,y,S,T){S[T+0]=255,Jo(c,h,y,S,T+1)}function $o(c,h,y,S,T){_l(c,h,y,S,T),S[T+3]=255}function Cl(c,h,y,S,T){Jo(c,h,y,S,T),S[T+3]=255}function Nr(c,h,y){K[c]=function(S,T,D,M,z,P,G,ce,Te){for(var Y=ce+(-2&Te)*y;ce!=Y;)h(S[T+0],D[M+0],z[P+0],G,ce),h(S[T+1],D[M+0],z[P+0],G,ce+y),T+=2,++M,++P,ce+=2*y;1&Te&&h(S[T+0],D[M+0],z[P+0],G,ce)}}function Yi(c,h,y){return y==0?c==0?h==0?6:5:h==0?4:0:y}function tc(c,h,y,S,T){switch(c>>>30){case 3:_r(h,y,S,T,0);break;case 2:Ur(h,y,S,T);break;case 1:vi(h,y,S,T)}}function Tl(c,h){var y,S,T=h.M,D=h.Nb,M=c.oc,z=c.pc+40,P=c.oc,G=c.pc+584,ce=c.oc,Te=c.pc+600;for(y=0;16>y;++y)M[z+32*y-1]=129;for(y=0;8>y;++y)P[G+32*y-1]=129,ce[Te+32*y-1]=129;for(0<T?M[z-1-32]=P[G-1-32]=ce[Te-1-32]=129:(f(M,z-32-1,127,21),f(P,G-32-1,127,9),f(ce,Te-32-1,127,9)),S=0;S<c.za;++S){var Y=h.ya[h.aa+S];if(0<S){for(y=-1;16>y;++y)l(M,z+32*y-4,M,z+32*y+12,4);for(y=-1;8>y;++y)l(P,G+32*y-4,P,G+32*y+4,4),l(ce,Te+32*y-4,ce,Te+32*y+4,4)}var fe=c.Gd,be=c.Hd+S,De=Y.ad,Ae=Y.Hc;if(0<T&&(l(M,z-32,fe[be].y,0,16),l(P,G-32,fe[be].f,0,8),l(ce,Te-32,fe[be].ea,0,8)),Y.Za){var je=M,Fe=z-32+16;for(0<T&&(S>=c.za-1?f(je,Fe,fe[be].y[15],4):l(je,Fe,fe[be+1].y,0,4)),y=0;4>y;y++)je[Fe+128+y]=je[Fe+256+y]=je[Fe+384+y]=je[Fe+0+y];for(y=0;16>y;++y,Ae<<=2)je=M,Fe=z+Xr[y],ka[Y.Ob[y]](je,Fe),tc(Ae,De,16*+y,je,Fe)}else if(je=Yi(S,T,Y.Ob[0]),zi[je](M,z),Ae!=0)for(y=0;16>y;++y,Ae<<=2)tc(Ae,De,16*+y,M,z+Xr[y]);for(y=Y.Gc,je=Yi(S,T,Y.Dd),Ma[je](P,G),Ma[je](ce,Te),Ae=De,je=P,Fe=G,255&(Y=0|y)&&(170&Y?yo(Ae,256,je,Fe):Wa(Ae,256,je,Fe)),Y=ce,Ae=Te,255&(y>>=8)&&(170&y?yo(De,320,Y,Ae):Wa(De,320,Y,Ae)),T<c.Ub-1&&(l(fe[be].y,0,M,z+480,16),l(fe[be].f,0,P,G+224,8),l(fe[be].ea,0,ce,Te+224,8)),y=8*D*c.B,fe=c.sa,be=c.ta+16*S+16*D*c.R,De=c.qa,Y=c.ra+8*S+y,Ae=c.Ha,je=c.Ia+8*S+y,y=0;16>y;++y)l(fe,be+y*c.R,M,z+32*y,16);for(y=0;8>y;++y)l(De,Y+y*c.B,P,G+32*y,8),l(Ae,je+y*c.B,ce,Te+32*y,8)}}function nc(c,h,y,S,T,D,M,z,P){var G=[0],ce=[0],Te=0,Y=P!=null?P.kd:0,fe=P??new he;if(c==null||12>y)return 7;fe.data=c,fe.w=h,fe.ha=y,h=[h],y=[y],fe.gb=[fe.gb];e:{var be=h,De=y,Ae=fe.gb;if(a(c!=null),a(De!=null),a(Ae!=null),Ae[0]=0,12<=De[0]&&!r(c,be[0],"RIFF")){if(r(c,be[0]+8,"WEBP")){Ae=3;break e}var je=dt(c,be[0]+4);if(12>je||4294967286<je){Ae=3;break e}if(Y&&je>De[0]-8){Ae=7;break e}Ae[0]=je,be[0]+=12,De[0]-=12}Ae=0}if(Ae!=0)return Ae;for(je=0<fe.gb[0],y=y[0];;){e:{var Fe=c;De=h,Ae=y;var Ye=G,Ge=ce,We=be=[0];if((st=Te=[Te])[0]=0,8>Ae[0])Ae=7;else{if(!r(Fe,De[0],"VP8X")){if(dt(Fe,De[0]+4)!=10){Ae=3;break e}if(18>Ae[0]){Ae=7;break e}var tt=dt(Fe,De[0]+8),Ct=1+Qe(Fe,De[0]+12);if(2147483648<=Ct*(Fe=1+Qe(Fe,De[0]+15))){Ae=3;break e}We!=null&&(We[0]=tt),Ye!=null&&(Ye[0]=Ct),Ge!=null&&(Ge[0]=Fe),De[0]+=18,Ae[0]-=18,st[0]=1}Ae=0}}if(Te=Te[0],be=be[0],Ae!=0)return Ae;if(De=!!(2&be),!je&&Te)return 3;if(D!=null&&(D[0]=!!(16&be)),M!=null&&(M[0]=De),z!=null&&(z[0]=0),M=G[0],be=ce[0],Te&&De&&P==null){Ae=0;break}if(4>y){Ae=7;break}if(je&&Te||!je&&!Te&&!r(c,h[0],"ALPH")){y=[y],fe.na=[fe.na],fe.P=[fe.P],fe.Sa=[fe.Sa];e:{tt=c,Ae=h,je=y;var st=fe.gb;Ye=fe.na,Ge=fe.P,We=fe.Sa,Ct=22,a(tt!=null),a(je!=null),Fe=Ae[0];var It=je[0];for(a(Ye!=null),a(We!=null),Ye[0]=null,Ge[0]=null,We[0]=0;;){if(Ae[0]=Fe,je[0]=It,8>It){Ae=7;break e}var si=dt(tt,Fe+4);if(4294967286<si){Ae=3;break e}var Tt=8+si+1&-2;if(Ct+=Tt,0<st&&Ct>st){Ae=3;break e}if(!r(tt,Fe,"VP8 ")||!r(tt,Fe,"VP8L")){Ae=0;break e}if(It[0]<Tt){Ae=7;break e}r(tt,Fe,"ALPH")||(Ye[0]=tt,Ge[0]=Fe+8,We[0]=si),Fe+=Tt,It-=Tt}}if(y=y[0],fe.na=fe.na[0],fe.P=fe.P[0],fe.Sa=fe.Sa[0],Ae!=0)break}y=[y],fe.Ja=[fe.Ja],fe.xa=[fe.xa];e:if(st=c,Ae=h,je=y,Ye=fe.gb[0],Ge=fe.Ja,We=fe.xa,tt=Ae[0],Fe=!r(st,tt,"VP8 "),Ct=!r(st,tt,"VP8L"),a(st!=null),a(je!=null),a(Ge!=null),a(We!=null),8>je[0])Ae=7;else{if(Fe||Ct){if(st=dt(st,tt+4),12<=Ye&&st>Ye-12){Ae=3;break e}if(Y&&st>je[0]-8){Ae=7;break e}Ge[0]=st,Ae[0]+=8,je[0]-=8,We[0]=Ct}else We[0]=5<=je[0]&&st[tt+0]==47&&!(st[tt+4]>>5),Ge[0]=je[0];Ae=0}if(y=y[0],fe.Ja=fe.Ja[0],fe.xa=fe.xa[0],h=h[0],Ae!=0)break;if(4294967286<fe.Ja)return 3;if(z==null||De||(z[0]=fe.xa?2:1),M=[M],be=[be],fe.xa){if(5>y){Ae=7;break}z=M,Y=be,De=D,c==null||5>y?c=0:5<=y&&c[h+0]==47&&!(c[h+4]>>5)?(je=[0],st=[0],Ye=[0],Ce(Ge=new Z,c,h,y),Gn(Ge,je,st,Ye)?(z!=null&&(z[0]=je[0]),Y!=null&&(Y[0]=st[0]),De!=null&&(De[0]=Ye[0]),c=1):c=0):c=0}else{if(10>y){Ae=7;break}z=be,c==null||10>y||!fr(c,h+3,y-3)?c=0:(Y=c[h+0]|c[h+1]<<8|c[h+2]<<16,De=16383&(c[h+7]<<8|c[h+6]),c=16383&(c[h+9]<<8|c[h+8]),1&Y||3<(Y>>1&7)||!(Y>>4&1)||Y>>5>=fe.Ja||!De||!c?c=0:(M&&(M[0]=De),z&&(z[0]=c),c=1))}if(!c||(M=M[0],be=be[0],Te&&(G[0]!=M||ce[0]!=be)))return 3;P!=null&&(P[0]=fe,P.offset=h-P.w,a(4294967286>h-P.w),a(P.offset==P.ha-y));break}return Ae==0||Ae==7&&Te&&P==null?(D!=null&&(D[0]|=fe.na!=null&&0<fe.na.length),S!=null&&(S[0]=M),T!=null&&(T[0]=be),0):Ae}function Oa(c,h,y){var S=h.width,T=h.height,D=0,M=0,z=S,P=T;if(h.Da=c!=null&&0<c.Da,h.Da&&(z=c.cd,P=c.bd,D=c.v,M=c.j,11>y||(D&=-2,M&=-2),0>D||0>M||0>=z||0>=P||D+z>S||M+P>T))return 0;if(h.v=D,h.j=M,h.va=D+z,h.o=M+P,h.U=z,h.T=P,h.da=c!=null&&0<c.da,h.da){if(!Me(z,P,y=[c.ib],D=[c.hb]))return 0;h.ib=y[0],h.hb=D[0]}return h.ob=c!=null&&c.ob,h.Kb=c==null||!c.Sd,h.da&&(h.ob=h.ib<3*S/4&&h.hb<3*T/4,h.Kb=0),1}function el(c){if(c==null)return 2;if(11>c.S){var h=c.f.RGBA;h.fb+=(c.height-1)*h.A,h.A=-h.A}else h=c.f.kb,c=c.height,h.O+=(c-1)*h.fa,h.fa=-h.fa,h.N+=(c-1>>1)*h.Ab,h.Ab=-h.Ab,h.W+=(c-1>>1)*h.Db,h.Db=-h.Db,h.F!=null&&(h.J+=(c-1)*h.lb,h.lb=-h.lb);return 0}function bs(c,h,y,S){if(S==null||0>=c||0>=h)return 2;if(y!=null){if(y.Da){var T=y.cd,D=y.bd,M=-2&y.v,z=-2&y.j;if(0>M||0>z||0>=T||0>=D||M+T>c||z+D>h)return 2;c=T,h=D}if(y.da){if(!Me(c,h,T=[y.ib],D=[y.hb]))return 2;c=T[0],h=D[0]}}S.width=c,S.height=h;e:{var P=S.width,G=S.height;if(c=S.S,0>=P||0>=G||!(c>=Cr&&13>c))c=2;else{if(0>=S.Rd&&S.sd==null){M=D=T=h=0;var ce=(z=P*gu[c])*G;if(11>c||(D=(G+1)/2*(h=(P+1)/2),c==12&&(M=(T=P)*G)),(G=u(ce+2*D+M))==null){c=1;break e}S.sd=G,11>c?((P=S.f.RGBA).eb=G,P.fb=0,P.A=z,P.size=ce):((P=S.f.kb).y=G,P.O=0,P.fa=z,P.Fd=ce,P.f=G,P.N=0+ce,P.Ab=h,P.Cd=D,P.ea=G,P.W=0+ce+D,P.Db=h,P.Ed=D,c==12&&(P.F=G,P.J=0+ce+2*D),P.Tc=M,P.lb=T)}if(h=1,T=S.S,D=S.width,M=S.height,T>=Cr&&13>T)if(11>T)c=S.f.RGBA,h&=(z=Math.abs(c.A))*(M-1)+D<=c.size,h&=z>=D*gu[T],h&=c.eb!=null;else{c=S.f.kb,z=(D+1)/2,ce=(M+1)/2,P=Math.abs(c.fa),G=Math.abs(c.Ab);var Te=Math.abs(c.Db),Y=Math.abs(c.lb),fe=Y*(M-1)+D;h&=P*(M-1)+D<=c.Fd,h&=G*(ce-1)+z<=c.Cd,h=(h&=Te*(ce-1)+z<=c.Ed)&P>=D&G>=z&Te>=z,h&=c.y!=null,h&=c.f!=null,h&=c.ea!=null,T==12&&(h&=Y>=D,h&=fe<=c.Tc,h&=c.F!=null)}else h=0;c=h?0:2}}return c!=0||y!=null&&y.fd&&(c=el(S)),c}var El=64,tl=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],ys=24,_i=32,mi=8,Ll=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Ie("Predictor0","PredictorAdd0"),K.Predictor0=function(){return 4278190080},K.Predictor1=function(c){return c},K.Predictor2=function(c,h,y){return h[y+0]},K.Predictor3=function(c,h,y){return h[y+1]},K.Predictor4=function(c,h,y){return h[y-1]},K.Predictor5=function(c,h,y){return at(at(c,h[y+1]),h[y+0])},K.Predictor6=function(c,h,y){return at(c,h[y-1])},K.Predictor7=function(c,h,y){return at(c,h[y+0])},K.Predictor8=function(c,h,y){return at(h[y-1],h[y+0])},K.Predictor9=function(c,h,y){return at(h[y+0],h[y+1])},K.Predictor10=function(c,h,y){return at(at(c,h[y-1]),at(h[y+0],h[y+1]))},K.Predictor11=function(c,h,y){var S=h[y+0];return 0>=wt(S>>24&255,c>>24&255,(h=h[y-1])>>24&255)+wt(S>>16&255,c>>16&255,h>>16&255)+wt(S>>8&255,c>>8&255,h>>8&255)+wt(255&S,255&c,255&h)?S:c},K.Predictor12=function(c,h,y){var S=h[y+0];return(At((c>>24&255)+(S>>24&255)-((h=h[y-1])>>24&255))<<24|At((c>>16&255)+(S>>16&255)-(h>>16&255))<<16|At((c>>8&255)+(S>>8&255)-(h>>8&255))<<8|At((255&c)+(255&S)-(255&h)))>>>0},K.Predictor13=function(c,h,y){var S=h[y-1];return(Bt((c=at(c,h[y+0]))>>24&255,S>>24&255)<<24|Bt(c>>16&255,S>>16&255)<<16|Bt(c>>8&255,S>>8&255)<<8|Bt(255&c,255&S))>>>0};var Br=K.PredictorAdd0;K.PredictorAdd1=Pt,Ie("Predictor2","PredictorAdd2"),Ie("Predictor3","PredictorAdd3"),Ie("Predictor4","PredictorAdd4"),Ie("Predictor5","PredictorAdd5"),Ie("Predictor6","PredictorAdd6"),Ie("Predictor7","PredictorAdd7"),Ie("Predictor8","PredictorAdd8"),Ie("Predictor9","PredictorAdd9"),Ie("Predictor10","PredictorAdd10"),Ie("Predictor11","PredictorAdd11"),Ie("Predictor12","PredictorAdd12"),Ie("Predictor13","PredictorAdd13");var Pr=K.PredictorAdd2;ht("ColorIndexInverseTransform","MapARGB","32b",function(c){return c>>8&255},function(c){return c}),ht("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",function(c){return c},function(c){return c>>8&255});var nl,vo=K.ColorIndexInverseTransform,Zn=K.MapARGB,bo=K.VP8LColorIndexInverseTransformAlpha,Sr=K.MapAlpha,Qa=K.VP8LPredictorsAdd=[];Qa.length=16,(K.VP8LPredictors=[]).length=16,(K.VP8LPredictorsAdd_C=[]).length=16,(K.VP8LPredictors_C=[]).length=16;var il,Ol,Dl,Ar,Ka,al,Ja,_r,Ur,yo,vi,Wa,dn,hn,Qn,li,Fr,xs,kl,ji,Ml,ic,iu,au,Rl,ru,ac,Qu,rl=u(511),rc=u(2041),jl=u(225),oc=u(767),ou=0,qr=rc,Ir=jl,Xi=oc,ya=rl,Cr=0,ws=1,lu=2,Ns=3,lc=4,su=5,Ku=6,sc=7,cc=8,zl=9,xa=10,Nd=[2,3,7],Hr=[3,3,11],cu=[280,256,256,256,40],Vr=[0,1,1,1,0],uc=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],Da=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Bl=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],uu=8,Pl=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],Ul=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],ol=null,ll=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],Ju=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],Ss=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],Fl=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],Sd=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],ca=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],fu=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],zi=[],ka=[],Ma=[],sl=1,fc=2,Gr=[],ua=[];Mi("UpsampleRgbLinePair",Jo,3),Mi("UpsampleBgrLinePair",_l,3),Mi("UpsampleRgbaLinePair",Cl,4),Mi("UpsampleBgraLinePair",$o,4),Mi("UpsampleArgbLinePair",Wo,4),Mi("UpsampleRgba4444LinePair",Ri,2),Mi("UpsampleRgb565LinePair",mo,2);var Wu=K.UpsampleRgbLinePair,Ra=K.UpsampleBgrLinePair,cl=K.UpsampleRgbaLinePair,ul=K.UpsampleBgraLinePair,As=K.UpsampleArgbLinePair,ql=K.UpsampleRgba4444LinePair,ja=K.UpsampleRgb565LinePair,Zi=16,$a=1<<Zi-1,fa=-227,za=482,Yr=6,du=0,dc=u(256),hu=u(256),$u=u(256),bi=u(256),Sn=u(za-fa),qt=u(za-fa);Nr("YuvToRgbRow",Jo,3),Nr("YuvToBgrRow",_l,3),Nr("YuvToRgbaRow",Cl,4),Nr("YuvToBgraRow",$o,4),Nr("YuvToArgbRow",Wo,4),Nr("YuvToRgba4444Row",Ri,2),Nr("YuvToRgb565Row",mo,2);var Xr=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],Qi=[0,2,8],pu=[8,7,6,4,4,2,2,2,1,1,1,1],xo=1;this.WebPDecodeRGBA=function(c,h,y,S,T){var D=ws,M=new ie,z=new Ft;M.ba=z,z.S=D,z.width=[z.width],z.height=[z.height];var P=z.width,G=z.height,ce=new yt;if(ce==null||c==null)var Te=2;else a(ce!=null),Te=nc(c,h,y,ce.width,ce.height,ce.Pd,ce.Qd,ce.format,null);if(Te!=0?P=0:(P!=null&&(P[0]=ce.width[0]),G!=null&&(G[0]=ce.height[0]),P=1),P){z.width=z.width[0],z.height=z.height[0],S!=null&&(S[0]=z.width),T!=null&&(T[0]=z.height);e:{if(S=new ur,(T=new he).data=c,T.w=h,T.ha=y,T.kd=1,h=[0],a(T!=null),((c=nc(T.data,T.w,T.ha,null,null,null,h,null,T))==0||c==7)&&h[0]&&(c=4),(h=c)==0){if(a(M!=null),S.data=T.data,S.w=T.w+T.offset,S.ha=T.ha-T.offset,S.put=lt,S.ac=ia,S.bc=ki,S.ma=M,T.xa){if((c=Mr())==null){M=1;break e}if((function(Y,fe){var be=[0],De=[0],Ae=[0];t:for(;;){if(Y==null)return 0;if(fe==null)return Y.a=2,0;if(Y.l=fe,Y.a=0,Ce(Y.m,fe.data,fe.w,fe.ha),!Gn(Y.m,be,De,Ae)){Y.a=3;break t}if(Y.xb=fc,fe.width=be[0],fe.height=De[0],!la(be[0],De[0],1,Y,null))break t;return 1}return a(Y.a!=0),0})(c,S)){if(S=(h=bs(S.width,S.height,M.Oa,M.ba))==0){t:{S=c;n:for(;;){if(S==null){S=0;break t}if(a(S.s.yc!=null),a(S.s.Ya!=null),a(0<S.s.Wb),a((y=S.l)!=null),a((T=y.ma)!=null),S.xb!=0){if(S.ca=T.ba,S.tb=T.tb,a(S.ca!=null),!Oa(T.Oa,y,Ns)){S.a=2;break n}if(!Bo(S,y.width)||y.da)break n;if((y.da||ft(S.ca.S))&&Pn(),11>S.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),S.ca.f.kb.F!=null&&Pn()),S.Pb&&0<S.s.ua&&S.s.vb.X==null&&!V(S.s.vb,S.s.Wa.Xa)){S.a=1;break n}S.xb=0}if(!Ha(S,S.V,S.Ba,S.c,S.i,y.o,aa))break n;T.Dc=S.Ma,S=1;break t}a(S.a!=0),S=0}S=!S}S&&(h=c.a)}else h=c.a}else{if((c=new xl)==null){M=1;break e}if(c.Fa=T.na,c.P=T.P,c.qc=T.Sa,Vi(c,S)){if((h=bs(S.width,S.height,M.Oa,M.ba))==0){if(c.Aa=0,y=M.Oa,a((T=c)!=null),y!=null){if(0<(P=0>(P=y.Md)?0:100<P?255:255*P/100)){for(G=ce=0;4>G;++G)12>(Te=T.pb[G]).lc&&(Te.ia=P*pu[0>Te.lc?0:Te.lc]>>3),ce|=Te.ia;ce&&(alert("todo:VP8InitRandom"),T.ia=1)}T.Ga=y.Id,100<T.Ga?T.Ga=100:0>T.Ga&&(T.Ga=0)}(function(Y,fe){if(Y==null)return 0;if(fe==null)return zn(Y,2,"NULL VP8Io parameter in VP8Decode().");if(!Y.cb&&!Vi(Y,fe))return 0;if(a(Y.cb),fe.ac==null||fe.ac(fe)){fe.ob&&(Y.L=0);var be=Qi[Y.L];if(Y.L==2?(Y.yb=0,Y.zb=0):(Y.yb=fe.v-be>>4,Y.zb=fe.j-be>>4,0>Y.yb&&(Y.yb=0),0>Y.zb&&(Y.zb=0)),Y.Va=fe.o+15+be>>4,Y.Hb=fe.va+15+be>>4,Y.Hb>Y.za&&(Y.Hb=Y.za),Y.Va>Y.Ub&&(Y.Va=Y.Ub),0<Y.L){var De=Y.ed;for(be=0;4>be;++be){var Ae;if(Y.Qa.Cb){var je=Y.Qa.Lb[be];Y.Qa.Fb||(je+=De.Tb)}else je=De.Tb;for(Ae=0;1>=Ae;++Ae){var Fe=Y.gd[be][Ae],Ye=je;if(De.Pc&&(Ye+=De.vd[0],Ae&&(Ye+=De.od[0])),0<(Ye=0>Ye?0:63<Ye?63:Ye)){var Ge=Ye;0<De.wb&&(Ge=4<De.wb?Ge>>2:Ge>>1)>9-De.wb&&(Ge=9-De.wb),1>Ge&&(Ge=1),Fe.dd=Ge,Fe.tc=2*Ye+Ge,Fe.ld=40<=Ye?2:15<=Ye?1:0}else Fe.tc=0;Fe.La=Ae}}}be=0}else zn(Y,6,"Frame setup failed"),be=Y.a;if(be=be==0){if(be){Y.$c=0,0<Y.Aa||(Y.Ic=xo);t:{be=Y.Ic,De=4*(Ge=Y.za);var We=32*Ge,tt=Ge+1,Ct=0<Y.L?Ge*(0<Y.Aa?2:1):0,st=(Y.Aa==2?2:1)*Ge;if((Fe=De+832+(Ae=3*(16*be+Qi[Y.L])/2*We)+(je=Y.Fa!=null&&0<Y.Fa.length?Y.Kc.c*Y.Kc.i:0))!=Fe)be=0;else{if(Fe>Y.Vb){if(Y.Vb=0,Y.Ec=u(Fe),Y.Fc=0,Y.Ec==null){be=zn(Y,1,"no memory during frame initialization.");break t}Y.Vb=Fe}Fe=Y.Ec,Ye=Y.Fc,Y.Ac=Fe,Y.Bc=Ye,Ye+=De,Y.Gd=m(We,Ys),Y.Hd=0,Y.rb=m(tt+1,Xn),Y.sb=1,Y.wa=Ct?m(Ct,$n):null,Y.Y=0,Y.D.Nb=0,Y.D.wa=Y.wa,Y.D.Y=Y.Y,0<Y.Aa&&(Y.D.Y+=Ge),a(!0),Y.oc=Fe,Y.pc=Ye,Ye+=832,Y.ya=m(st,cr),Y.aa=0,Y.D.ya=Y.ya,Y.D.aa=Y.aa,Y.Aa==2&&(Y.D.aa+=Ge),Y.R=16*Ge,Y.B=8*Ge,Ge=(We=Qi[Y.L])*Y.R,We=We/2*Y.B,Y.sa=Fe,Y.ta=Ye+Ge,Y.qa=Y.sa,Y.ra=Y.ta+16*be*Y.R+We,Y.Ha=Y.qa,Y.Ia=Y.ra+8*be*Y.B+We,Y.$c=0,Ye+=Ae,Y.mb=je?Fe:null,Y.nb=je?Ye:null,a(Ye+je<=Y.Fc+Y.Vb),hr(Y),f(Y.Ac,Y.Bc,0,De),be=1}}if(be){if(fe.ka=0,fe.y=Y.sa,fe.O=Y.ta,fe.f=Y.qa,fe.N=Y.ra,fe.ea=Y.Ha,fe.Vd=Y.Ia,fe.fa=Y.R,fe.Rc=Y.B,fe.F=null,fe.J=0,!ou){for(be=-255;255>=be;++be)rl[255+be]=0>be?-be:be;for(be=-1020;1020>=be;++be)rc[1020+be]=-128>be?-128:127<be?127:be;for(be=-112;112>=be;++be)jl[112+be]=-16>be?-16:15<be?15:be;for(be=-255;510>=be;++be)oc[255+be]=0>be?0:255<be?255:be;ou=1}Ja=Qs,_r=so,yo=eu,vi=Zs,Wa=Ga,Ur=gr,dn=Za,hn=Al,Qn=Qo,li=v,Fr=Zo,xs=ho,kl=C,ji=H,Ml=fo,ic=Sl,iu=wr,au=La,ka[0]=ms,ka[1]=Ho,ka[2]=gs,ka[3]=Ws,ka[4]=uo,ka[5]=vr,ka[6]=$s,ka[7]=sa,ka[8]=ec,ka[9]=tu,zi[0]=Ks,zi[1]=wl,zi[2]=Ya,zi[3]=Gi,zi[4]=mr,zi[5]=Js,zi[6]=Vo,Ma[0]=nu,Ma[1]=co,Ma[2]=Go,Ma[3]=Yo,Ma[4]=Ta,Ma[5]=jr,Ma[6]=Xo,be=1}else be=0}be&&(be=(function(It,si){for(It.M=0;It.M<It.Va;++It.M){var Tt,ot=It.Jc[It.M&It.Xb],Ze=It.m,An=It;for(Tt=0;Tt<An.za;++Tt){var Dt=Ze,Gt=An,Tn=Gt.Ac,yi=Gt.Bc+4*Tt,Kn=Gt.zc,Dn=Gt.ya[Gt.aa+Tt];if(Gt.Qa.Bb?Dn.$b=Oe(Dt,Gt.Pa.jb[0])?2+Oe(Dt,Gt.Pa.jb[2]):Oe(Dt,Gt.Pa.jb[1]):Dn.$b=0,Gt.kc&&(Dn.Ad=Oe(Dt,Gt.Bd)),Dn.Za=!Oe(Dt,145)+0,Dn.Za){var ci=Dn.Ob,Bi=0;for(Gt=0;4>Gt;++Gt){var kn,Yt=Kn[0+Gt];for(kn=0;4>kn;++kn){Yt=Sd[Tn[yi+kn]][Yt];for(var Wt=Ss[Oe(Dt,Yt[0])];0<Wt;)Wt=Ss[2*Wt+Oe(Dt,Yt[Wt])];Yt=-Wt,Tn[yi+kn]=Yt}l(ci,Bi,Tn,yi,4),Bi+=4,Kn[0+Gt]=Yt}}else Yt=Oe(Dt,156)?Oe(Dt,128)?1:3:Oe(Dt,163)?2:0,Dn.Ob[0]=Yt,f(Tn,yi,Yt,4),f(Kn,0,Yt,4);Dn.Dd=Oe(Dt,142)?Oe(Dt,114)?Oe(Dt,183)?1:3:2:0}if(An.m.Ka)return zn(It,7,"Premature end-of-partition0 encountered.");for(;It.ja<It.za;++It.ja){if(An=ot,Dt=(Ze=It).rb[Ze.sb-1],Tn=Ze.rb[Ze.sb+Ze.ja],Tt=Ze.ya[Ze.aa+Ze.ja],yi=Ze.kc?Tt.Ad:0)Dt.la=Tn.la=0,Tt.Za||(Dt.Na=Tn.Na=0),Tt.Hc=0,Tt.Gc=0,Tt.ia=0;else{var En,nn;if(Dt=Tn,Tn=An,yi=Ze.Pa.Xc,Kn=Ze.ya[Ze.aa+Ze.ja],Dn=Ze.pb[Kn.$b],Gt=Kn.ad,ci=0,Bi=Ze.rb[Ze.sb-1],Yt=kn=0,f(Gt,ci,0,384),Kn.Za)var xi=0,Ci=yi[3];else{Wt=u(16);var pn=Dt.Na+Bi.Na;if(pn=ol(Tn,yi[1],pn,Dn.Eb,0,Wt,0),Dt.Na=Bi.Na=(0<pn)+0,1<pn)Ja(Wt,0,Gt,ci);else{var Ki=Wt[0]+3>>3;for(Wt=0;256>Wt;Wt+=16)Gt[ci+Wt]=Ki}xi=1,Ci=yi[0]}var sn=15&Dt.la,Mn=15&Bi.la;for(Wt=0;4>Wt;++Wt){var Ti=1&Mn;for(Ki=nn=0;4>Ki;++Ki)sn=sn>>1|(Ti=(pn=ol(Tn,Ci,pn=Ti+(1&sn),Dn.Sc,xi,Gt,ci))>xi)<<7,nn=nn<<2|(3<pn?3:1<pn?2:Gt[ci+0]!=0),ci+=16;sn>>=4,Mn=Mn>>1|Ti<<7,kn=(kn<<8|nn)>>>0}for(Ci=sn,xi=Mn>>4,En=0;4>En;En+=2){for(nn=0,sn=Dt.la>>4+En,Mn=Bi.la>>4+En,Wt=0;2>Wt;++Wt){for(Ti=1&Mn,Ki=0;2>Ki;++Ki)pn=Ti+(1&sn),sn=sn>>1|(Ti=0<(pn=ol(Tn,yi[2],pn,Dn.Qc,0,Gt,ci)))<<3,nn=nn<<2|(3<pn?3:1<pn?2:Gt[ci+0]!=0),ci+=16;sn>>=2,Mn=Mn>>1|Ti<<5}Yt|=nn<<4*En,Ci|=sn<<4<<En,xi|=(240&Mn)<<En}Dt.la=Ci,Bi.la=xi,Kn.Hc=kn,Kn.Gc=Yt,Kn.ia=43690&Yt?0:Dn.ia,yi=!(kn|Yt)}if(0<Ze.L&&(Ze.wa[Ze.Y+Ze.ja]=Ze.gd[Tt.$b][Tt.Za],Ze.wa[Ze.Y+Ze.ja].La|=!yi),An.Ka)return zn(It,7,"Premature end-of-file encountered.")}if(hr(It),Ze=si,An=1,Tt=(ot=It).D,Dt=0<ot.L&&ot.M>=ot.zb&&ot.M<=ot.Va,ot.Aa==0)t:{if(Tt.M=ot.M,Tt.uc=Dt,Tl(ot,Tt),An=1,Tt=(nn=ot.D).Nb,Dt=(Yt=Qi[ot.L])*ot.R,Tn=Yt/2*ot.B,Wt=16*Tt*ot.R,Ki=8*Tt*ot.B,yi=ot.sa,Kn=ot.ta-Dt+Wt,Dn=ot.qa,Gt=ot.ra-Tn+Ki,ci=ot.Ha,Bi=ot.Ia-Tn+Ki,Mn=(sn=nn.M)==0,kn=sn>=ot.Va-1,ot.Aa==2&&Tl(ot,nn),nn.uc)for(Ti=(pn=ot).D.M,a(pn.D.uc),nn=pn.yb;nn<pn.Hb;++nn){xi=nn,Ci=Ti;var wi=(ti=(Rn=pn).D).Nb;En=Rn.R;var ti=ti.wa[ti.Y+xi],Pi=Rn.sa,Ji=Rn.ta+16*wi*En+16*xi,ui=ti.dd,gn=ti.tc;if(gn!=0)if(a(3<=gn),Rn.L==1)0<xi&&ic(Pi,Ji,En,gn+4),ti.La&&au(Pi,Ji,En,gn),0<Ci&&Ml(Pi,Ji,En,gn+4),ti.La&&iu(Pi,Ji,En,gn);else{var ni=Rn.B,wa=Rn.qa,Zr=Rn.ra+8*wi*ni+8*xi,Ui=Rn.Ha,Rn=Rn.Ia+8*wi*ni+8*xi;wi=ti.ld,0<xi&&(hn(Pi,Ji,En,gn+4,ui,wi),li(wa,Zr,Ui,Rn,ni,gn+4,ui,wi)),ti.La&&(xs(Pi,Ji,En,gn,ui,wi),ji(wa,Zr,Ui,Rn,ni,gn,ui,wi)),0<Ci&&(dn(Pi,Ji,En,gn+4,ui,wi),Qn(wa,Zr,Ui,Rn,ni,gn+4,ui,wi)),ti.La&&(Fr(Pi,Ji,En,gn,ui,wi),kl(wa,Zr,Ui,Rn,ni,gn,ui,wi))}}if(ot.ia&&alert("todo:DitherRow"),Ze.put!=null){if(nn=16*sn,sn=16*(sn+1),Mn?(Ze.y=ot.sa,Ze.O=ot.ta+Wt,Ze.f=ot.qa,Ze.N=ot.ra+Ki,Ze.ea=ot.Ha,Ze.W=ot.Ia+Ki):(nn-=Yt,Ze.y=yi,Ze.O=Kn,Ze.f=Dn,Ze.N=Gt,Ze.ea=ci,Ze.W=Bi),kn||(sn-=Yt),sn>Ze.o&&(sn=Ze.o),Ze.F=null,Ze.J=null,ot.Fa!=null&&0<ot.Fa.length&&nn<sn&&(Ze.J=ei(ot,Ze,nn,sn-nn),Ze.F=ot.mb,Ze.F==null&&Ze.F.length==0)){An=zn(ot,3,"Could not decode alpha data.");break t}nn<Ze.j&&(Yt=Ze.j-nn,nn=Ze.j,a(!(1&Yt)),Ze.O+=ot.R*Yt,Ze.N+=ot.B*(Yt>>1),Ze.W+=ot.B*(Yt>>1),Ze.F!=null&&(Ze.J+=Ze.width*Yt)),nn<sn&&(Ze.O+=Ze.v,Ze.N+=Ze.v>>1,Ze.W+=Ze.v>>1,Ze.F!=null&&(Ze.J+=Ze.v),Ze.ka=nn-Ze.j,Ze.U=Ze.va-Ze.v,Ze.T=sn-nn,An=Ze.put(Ze))}Tt+1!=ot.Ic||kn||(l(ot.sa,ot.ta-Dt,yi,Kn+16*ot.R,Dt),l(ot.qa,ot.ra-Tn,Dn,Gt+8*ot.B,Tn),l(ot.Ha,ot.Ia-Tn,ci,Bi+8*ot.B,Tn))}if(!An)return zn(It,6,"Output aborted.")}return 1})(Y,fe)),fe.bc!=null&&fe.bc(fe),be&=1}return be?(Y.cb=0,be):0})(c,S)||(h=c.a)}}else h=c.a}h==0&&M.Oa!=null&&M.Oa.fd&&(h=el(M.ba))}M=h}D=M!=0?null:11>D?z.f.RGBA.eb:z.f.kb.y}else D=null;return D};var gu=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function b(K,ve){for(var E="",B=0;B<4;B++)E+=String.fromCharCode(K[ve++]);return E}function x(K,ve){return K[ve+0]|K[ve+1]<<8}function A(K,ve){return(K[ve+0]|K[ve+1]<<8|K[ve+2]<<16)>>>0}function L(K,ve){return(K[ve+0]|K[ve+1]<<8|K[ve+2]<<16|K[ve+3]<<24)>>>0}new g;var w=[0],F=[0],U=[],k=new g,j=o,ne=(function(K,ve){var E={},B=0,X=!1,Q=0,le=0;if(E.frames=[],!(function(R,Z){for(var _=0;_<4;_++)if(R[Z+_]!="RIFF".charCodeAt(_))return!0;return!1})(K,ve)){for(L(K,ve+=4),ve+=8;ve<K.length;){var ee=b(K,ve),ue=L(K,ve+=4);ve+=4;var re=ue+(1&ue);switch(ee){case"VP8 ":case"VP8L":E.frames[B]===void 0&&(E.frames[B]={}),(Be=E.frames[B]).src_off=X?le:ve-8,Be.src_size=Q+ue+8,B++,X&&(X=!1,Q=0,le=0);break;case"VP8X":(Be=E.header={}).feature_flags=K[ve];var Ce=ve+4;Be.canvas_width=1+A(K,Ce),Ce+=3,Be.canvas_height=1+A(K,Ce),Ce+=3;break;case"ALPH":X=!0,Q=re+8,le=ve-8;break;case"ANIM":(Be=E.header).bgcolor=L(K,ve),Ce=ve+4,Be.loop_count=x(K,Ce),Ce+=2;break;case"ANMF":var ze,Be;(Be=E.frames[B]={}).offset_x=2*A(K,ve),ve+=3,Be.offset_y=2*A(K,ve),ve+=3,Be.width=1+A(K,ve),ve+=3,Be.height=1+A(K,ve),ve+=3,Be.duration=A(K,ve),ve+=3,ze=K[ve++],Be.dispose=1&ze,Be.blend=ze>>1&1}ee!="ANMF"&&(ve+=re)}return E}})(j,0);ne.response=j,ne.rgbaoutput=!0,ne.dataurl=!1;var te=ne.header?ne.header:null,W=ne.frames?ne.frames:null;if(te){te.loop_counter=te.loop_count,w=[te.canvas_height],F=[te.canvas_width];for(var pe=0;pe<W.length&&W[pe].blend!=0;pe++);}var ke=W[0],ye=k.WebPDecodeRGBA(j,ke.src_off,ke.src_size,F,w);ke.rgba=ye,ke.imgwidth=F[0],ke.imgheight=w[0];for(var oe=0;oe<F[0]*w[0]*4;oe++)U[oe]=ye[oe];return this.width=F,this.height=w,this.data=U,this}/** ====================================================================
 * @license
 * jsPDF XMP metadata plugin
 * Copyright (c) 2016 Jussi Utunen, u-jussi@suomi24.fi
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 */function c4(){var o,a=this.internal.__metadata__.metadata,r=unescape(encodeURIComponent(a));o=this.internal.__metadata__.rawXml?r:'<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceUri+'"><jspdf:metadata>'+r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")+"</jspdf:metadata></rdf:Description></rdf:RDF></x:xmpmeta>",this.internal.__metadata__.metadataObjectNumber=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+o.length+" >>"),this.internal.write("stream"),this.internal.write(o),this.internal.write("endstream"),this.internal.write("endobj")}function u4(){this.internal.__metadata__.metadataObjectNumber&&this.internal.write("/Metadata "+this.internal.__metadata__.metadataObjectNumber+" 0 R")}(function(o){var a,r,l,f,u,m,p,g,b,x=function(R){return R=R||{},this.isStrokeTransparent=R.isStrokeTransparent||!1,this.strokeOpacity=R.strokeOpacity||1,this.strokeStyle=R.strokeStyle||"#000000",this.fillStyle=R.fillStyle||"#000000",this.isFillTransparent=R.isFillTransparent||!1,this.fillOpacity=R.fillOpacity||1,this.font=R.font||"10px sans-serif",this.textBaseline=R.textBaseline||"alphabetic",this.textAlign=R.textAlign||"left",this.lineWidth=R.lineWidth||1,this.lineJoin=R.lineJoin||"miter",this.lineCap=R.lineCap||"butt",this.path=R.path||[],this.transform=R.transform!==void 0?R.transform.clone():new g,this.globalCompositeOperation=R.globalCompositeOperation||"normal",this.globalAlpha=R.globalAlpha||1,this.clip_path=R.clip_path||[],this.currentPoint=R.currentPoint||new m,this.miterLimit=R.miterLimit||10,this.lastPoint=R.lastPoint||new m,this.lineDashOffset=R.lineDashOffset||0,this.lineDash=R.lineDash||[],this.margin=R.margin||[0,0,0,0],this.prevPageLastElemOffset=R.prevPageLastElemOffset||0,this.ignoreClearRect=typeof R.ignoreClearRect!="boolean"||R.ignoreClearRect,this};o.events.push(["initialized",function(){this.context2d=new A(this),a=this.internal.f2,r=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString,f=this.internal.getHorizontalCoordinate,u=this.internal.getVerticalCoordinate,m=this.internal.Point,p=this.internal.Rectangle,g=this.internal.Matrix,b=new x}]);var A=function(R){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var Z=R;Object.defineProperty(this,"pdf",{get:function(){return Z}});var _=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return _},set:function(V){_=!!V}});var I=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return I},set:function(V){I=!!V}});var $=0;Object.defineProperty(this,"posX",{get:function(){return $},set:function(V){isNaN(V)||($=V)}});var ae=0;Object.defineProperty(this,"posY",{get:function(){return ae},set:function(V){isNaN(V)||(ae=V)}}),Object.defineProperty(this,"margin",{get:function(){return b.margin},set:function(V){var Xe;typeof V=="number"?Xe=[V,V,V,V]:((Xe=new Array(4))[0]=V[0],Xe[1]=V.length>=2?V[1]:Xe[0],Xe[2]=V.length>=3?V[2]:Xe[0],Xe[3]=V.length>=4?V[3]:Xe[1]),b.margin=Xe}});var we=!1;Object.defineProperty(this,"autoPaging",{get:function(){return we},set:function(V){we=V}});var Se=0;Object.defineProperty(this,"lastBreak",{get:function(){return Se},set:function(V){Se=V}});var Oe=[];Object.defineProperty(this,"pageBreaks",{get:function(){return Oe},set:function(V){Oe=V}}),Object.defineProperty(this,"ctx",{get:function(){return b},set:function(V){V instanceof x&&(b=V)}}),Object.defineProperty(this,"path",{get:function(){return b.path},set:function(V){b.path=V}});var Ee=[];Object.defineProperty(this,"ctxStack",{get:function(){return Ee},set:function(V){Ee=V}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(V){var Xe;Xe=L(V),this.ctx.fillStyle=Xe.style,this.ctx.isFillTransparent=Xe.a===0,this.ctx.fillOpacity=Xe.a,this.pdf.setFillColor(Xe.r,Xe.g,Xe.b,{a:Xe.a}),this.pdf.setTextColor(Xe.r,Xe.g,Xe.b,{a:Xe.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(V){var Xe=L(V);this.ctx.strokeStyle=Xe.style,this.ctx.isStrokeTransparent=Xe.a===0,this.ctx.strokeOpacity=Xe.a,Xe.a===0?this.pdf.setDrawColor(255,255,255):(Xe.a,this.pdf.setDrawColor(Xe.r,Xe.g,Xe.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(V){["butt","round","square"].indexOf(V)!==-1&&(this.ctx.lineCap=V,this.pdf.setLineCap(V))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(V){isNaN(V)||(this.ctx.lineWidth=V,this.pdf.setLineWidth(V))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(V){["bevel","round","miter"].indexOf(V)!==-1&&(this.ctx.lineJoin=V,this.pdf.setLineJoin(V))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(V){isNaN(V)||(this.ctx.miterLimit=V,this.pdf.setMiterLimit(V))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(V){this.ctx.textBaseline=V}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(V){["right","end","center","left","start"].indexOf(V)!==-1&&(this.ctx.textAlign=V)}});var qe=null,Qe=null,dt=null;Object.defineProperty(this,"fontFaces",{get:function(){return dt},set:function(V){qe=null,Qe=null,dt=V}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(V){var Xe;if(this.ctx.font=V,(Xe=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z0-9]+?)\s*$/i.exec(V))!==null){var pt=Xe[1];Xe[2];var Me=Xe[3],xe=Xe[4];Xe[5];var Ve=Xe[6],Ie=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(xe)[2];xe=Math.floor(Ie==="px"?parseFloat(xe)*this.pdf.internal.scaleFactor:Ie==="em"?parseFloat(xe)*this.pdf.getFontSize():parseFloat(xe)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(xe);var Ke=(function(ht){var Vn,Qt,Rt=[],jt=ht.trim();if(jt==="")return _1;if(jt in rg)return[rg[jt]];for(;jt!=="";){switch(Qt=null,Vn=(jt=lg(jt)).charAt(0)){case'"':case"'":Qt=i4(jt.substring(1),Vn);break;default:Qt=a4(jt)}if(Qt===null||(Rt.push(Qt[0]),(jt=lg(Qt[1]))!==""&&jt.charAt(0)!==","))return _1;jt=jt.replace(/^,/,"")}return Rt})(Ve);if(this.fontFaces){var at=(function(ht,Vn){var Qt=ht.getFontList(),Rt=JSON.stringify(Qt);if(qe===null||Qe!==Rt){var jt=(function(wn){var bt=[];return Object.keys(wn).forEach(function(Nn){wn[Nn].forEach(function(ft){var Ot=null;switch(ft){case"bold":Ot={family:Nn,weight:"bold"};break;case"italic":Ot={family:Nn,style:"italic"};break;case"bolditalic":Ot={family:Nn,weight:"bold",style:"italic"};break;case"":case"normal":Ot={family:Nn}}Ot!==null&&(Ot.ref={name:Nn,style:ft},bt.push(Ot))})}),bt})(Qt);qe=(function(wn){for(var bt={},Nn=0;Nn<wn.length;++Nn){var ft=A1(wn[Nn]),Ot=ft.family,Cn=ft.stretch,Ft=ft.style,yt=ft.weight;bt[Ot]=bt[Ot]||{},bt[Ot][Cn]=bt[Ot][Cn]||{},bt[Ot][Cn][Ft]=bt[Ot][Cn][Ft]||{},bt[Ot][Cn][Ft][yt]=ft}return bt})(jt.concat(Vn)),Qe=Rt}return qe})(this.pdf,this.fontFaces),At=Ke.map(function(ht){return{family:ht,stretch:"normal",weight:Me,style:pt}}),Bt=(function(ht,Vn,Qt){for(var Rt=(Qt=Qt||{}).defaultFontFamily||"times",jt=Object.assign({},n4,Qt.genericFontFamilies||{}),wn=null,bt=null,Nn=0;Nn<Vn.length;++Nn)if(jt[(wn=A1(Vn[Nn])).family]&&(wn.family=jt[wn.family]),ht.hasOwnProperty(wn.family)){bt=ht[wn.family];break}if(!(bt=bt||ht[Rt]))throw new Error("Could not find a font-family for the rule '"+og(wn)+"' and default family '"+Rt+"'.");if(bt=(function(ft,Ot){if(Ot[ft])return Ot[ft];var Cn=q1[ft],Ft=Cn<=q1.normal?-1:1,yt=ag(Ot,Em,Cn,Ft);if(!yt)throw new Error("Could not find a matching font-stretch value for "+ft);return yt})(wn.stretch,bt),bt=(function(ft,Ot){if(Ot[ft])return Ot[ft];for(var Cn=Tm[ft],Ft=0;Ft<Cn.length;++Ft)if(Ot[Cn[Ft]])return Ot[Cn[Ft]];throw new Error("Could not find a matching font-style for "+ft)})(wn.style,bt),!(bt=(function(ft,Ot){if(Ot[ft])return Ot[ft];if(ft===400&&Ot[500])return Ot[500];if(ft===500&&Ot[400])return Ot[400];var Cn=t4[ft],Ft=ag(Ot,Lm,Cn,ft<400?-1:1);if(!Ft)throw new Error("Could not find a matching font-weight for value "+ft);return Ft})(wn.weight,bt)))throw new Error("Failed to resolve a font for the rule '"+og(wn)+"'.");return bt})(at,At);this.pdf.setFont(Bt.ref.name,Bt.ref.style)}else{var wt="";(Me==="bold"||parseInt(Me,10)>=700||pt==="bold")&&(wt="bold"),pt==="italic"&&(wt+="italic"),wt.length===0&&(wt="normal");for(var Pt="",Ut={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},$e=0;$e<Ke.length;$e++){if(this.pdf.internal.getFont(Ke[$e],wt,{noFallback:!0,disableWarning:!0})!==void 0){Pt=Ke[$e];break}if(wt==="bolditalic"&&this.pdf.internal.getFont(Ke[$e],"bold",{noFallback:!0,disableWarning:!0})!==void 0)Pt=Ke[$e],wt="bold";else if(this.pdf.internal.getFont(Ke[$e],"normal",{noFallback:!0,disableWarning:!0})!==void 0){Pt=Ke[$e],wt="normal";break}}if(Pt===""){for(var Nt=0;Nt<Ke.length;Nt++)if(Ut[Ke[Nt]]){Pt=Ut[Ke[Nt]];break}}Pt=Pt===""?"Times":Pt,this.pdf.setFont(Pt,wt)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(V){this.ctx.globalCompositeOperation=V}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(V){this.ctx.globalAlpha=V}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(V){this.ctx.lineDashOffset=V,Be.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(V){this.ctx.lineDash=V,Be.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(V){this.ctx.ignoreClearRect=!!V}})};A.prototype.setLineDash=function(R){this.lineDash=R},A.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},A.prototype.fill=function(){W.call(this,"fill",!1)},A.prototype.stroke=function(){W.call(this,"stroke",!1)},A.prototype.beginPath=function(){this.path=[{type:"begin"}]},A.prototype.moveTo=function(R,Z){if(isNaN(R)||isNaN(Z))throw On.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var _=this.ctx.transform.applyToPoint(new m(R,Z));this.path.push({type:"mt",x:_.x,y:_.y}),this.ctx.lastPoint=new m(R,Z)},A.prototype.closePath=function(){var R=new m(0,0),Z=0;for(Z=this.path.length-1;Z!==-1;Z--)if(this.path[Z].type==="begin"&&xn(this.path[Z+1])==="object"&&typeof this.path[Z+1].x=="number"){R=new m(this.path[Z+1].x,this.path[Z+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new m(R.x,R.y)},A.prototype.lineTo=function(R,Z){if(isNaN(R)||isNaN(Z))throw On.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var _=this.ctx.transform.applyToPoint(new m(R,Z));this.path.push({type:"lt",x:_.x,y:_.y}),this.ctx.lastPoint=new m(_.x,_.y)},A.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),W.call(this,null,!0)},A.prototype.quadraticCurveTo=function(R,Z,_,I){if(isNaN(_)||isNaN(I)||isNaN(R)||isNaN(Z))throw On.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var $=this.ctx.transform.applyToPoint(new m(_,I)),ae=this.ctx.transform.applyToPoint(new m(R,Z));this.path.push({type:"qct",x1:ae.x,y1:ae.y,x:$.x,y:$.y}),this.ctx.lastPoint=new m($.x,$.y)},A.prototype.bezierCurveTo=function(R,Z,_,I,$,ae){if(isNaN($)||isNaN(ae)||isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I))throw On.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var we=this.ctx.transform.applyToPoint(new m($,ae)),Se=this.ctx.transform.applyToPoint(new m(R,Z)),Oe=this.ctx.transform.applyToPoint(new m(_,I));this.path.push({type:"bct",x1:Se.x,y1:Se.y,x2:Oe.x,y2:Oe.y,x:we.x,y:we.y}),this.ctx.lastPoint=new m(we.x,we.y)},A.prototype.arc=function(R,Z,_,I,$,ae){if(isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I)||isNaN($))throw On.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ae=!!ae,!this.ctx.transform.isIdentity){var we=this.ctx.transform.applyToPoint(new m(R,Z));R=we.x,Z=we.y;var Se=this.ctx.transform.applyToPoint(new m(0,_)),Oe=this.ctx.transform.applyToPoint(new m(0,0));_=Math.sqrt(Math.pow(Se.x-Oe.x,2)+Math.pow(Se.y-Oe.y,2))}Math.abs($-I)>=2*Math.PI&&(I=0,$=2*Math.PI),this.path.push({type:"arc",x:R,y:Z,radius:_,startAngle:I,endAngle:$,counterclockwise:ae})},A.prototype.arcTo=function(R,Z,_,I,$){throw new Error("arcTo not implemented.")},A.prototype.rect=function(R,Z,_,I){if(isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I))throw On.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(R,Z),this.lineTo(R+_,Z),this.lineTo(R+_,Z+I),this.lineTo(R,Z+I),this.lineTo(R,Z),this.lineTo(R+_,Z),this.lineTo(R,Z)},A.prototype.fillRect=function(R,Z,_,I){if(isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I))throw On.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!w.call(this)){var $={};this.lineCap!=="butt"&&($.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&($.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(R,Z,_,I),this.fill(),$.hasOwnProperty("lineCap")&&(this.lineCap=$.lineCap),$.hasOwnProperty("lineJoin")&&(this.lineJoin=$.lineJoin)}},A.prototype.strokeRect=function(R,Z,_,I){if(isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I))throw On.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");F.call(this)||(this.beginPath(),this.rect(R,Z,_,I),this.stroke())},A.prototype.clearRect=function(R,Z,_,I){if(isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I))throw On.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(R,Z,_,I))},A.prototype.save=function(R){R=typeof R!="boolean"||R;for(var Z=this.pdf.internal.getCurrentPageInfo().pageNumber,_=0;_<this.pdf.internal.getNumberOfPages();_++)this.pdf.setPage(_+1),this.pdf.internal.out("q");if(this.pdf.setPage(Z),R){this.ctx.fontSize=this.pdf.internal.getFontSize();var I=new x(this.ctx);this.ctxStack.push(this.ctx),this.ctx=I}},A.prototype.restore=function(R){R=typeof R!="boolean"||R;for(var Z=this.pdf.internal.getCurrentPageInfo().pageNumber,_=0;_<this.pdf.internal.getNumberOfPages();_++)this.pdf.setPage(_+1),this.pdf.internal.out("Q");this.pdf.setPage(Z),R&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},A.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var L=function(R){var Z,_,I,$;if(R.isCanvasGradient===!0&&(R=R.getColor()),!R)return{r:0,g:0,b:0,a:0,style:R};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(R))Z=0,_=0,I=0,$=0;else{var ae=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(R);if(ae!==null)Z=parseInt(ae[1]),_=parseInt(ae[2]),I=parseInt(ae[3]),$=1;else if((ae=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(R))!==null)Z=parseInt(ae[1]),_=parseInt(ae[2]),I=parseInt(ae[3]),$=parseFloat(ae[4]);else{if($=1,typeof R=="string"&&R.charAt(0)!=="#"){var we=new xm(R);R=we.ok?we.toHex():"#000000"}R.length===4?(Z=R.substring(1,2),Z+=Z,_=R.substring(2,3),_+=_,I=R.substring(3,4),I+=I):(Z=R.substring(1,3),_=R.substring(3,5),I=R.substring(5,7)),Z=parseInt(Z,16),_=parseInt(_,16),I=parseInt(I,16)}}return{r:Z,g:_,b:I,a:$,style:R}},w=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},F=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};A.prototype.fillText=function(R,Z,_,I){if(isNaN(Z)||isNaN(_)||typeof R!="string")throw On.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(I=isNaN(I)?void 0:I,!w.call(this)){var $=re(this.ctx.transform.rotation),ae=this.ctx.transform.scaleX;B.call(this,{text:R,x:Z,y:_,scale:ae,angle:$,align:this.textAlign,maxWidth:I})}},A.prototype.strokeText=function(R,Z,_,I){if(isNaN(Z)||isNaN(_)||typeof R!="string")throw On.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!F.call(this)){I=isNaN(I)?void 0:I;var $=re(this.ctx.transform.rotation),ae=this.ctx.transform.scaleX;B.call(this,{text:R,x:Z,y:_,scale:ae,renderingMode:"stroke",angle:$,align:this.textAlign,maxWidth:I})}},A.prototype.measureText=function(R){if(typeof R!="string")throw On.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var Z=this.pdf,_=this.pdf.internal.scaleFactor,I=Z.internal.getFontSize(),$=Z.getStringUnitWidth(R)*I/Z.internal.scaleFactor;return new function(ae){var we=(ae=ae||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return we}}),this}({width:$*=Math.round(96*_/72*1e4)/1e4})},A.prototype.scale=function(R,Z){if(isNaN(R)||isNaN(Z))throw On.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var _=new g(R,0,0,Z,0,0);this.ctx.transform=this.ctx.transform.multiply(_)},A.prototype.rotate=function(R){if(isNaN(R))throw On.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var Z=new g(Math.cos(R),Math.sin(R),-Math.sin(R),Math.cos(R),0,0);this.ctx.transform=this.ctx.transform.multiply(Z)},A.prototype.translate=function(R,Z){if(isNaN(R)||isNaN(Z))throw On.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var _=new g(1,0,0,1,R,Z);this.ctx.transform=this.ctx.transform.multiply(_)},A.prototype.transform=function(R,Z,_,I,$,ae){if(isNaN(R)||isNaN(Z)||isNaN(_)||isNaN(I)||isNaN($)||isNaN(ae))throw On.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var we=new g(R,Z,_,I,$,ae);this.ctx.transform=this.ctx.transform.multiply(we)},A.prototype.setTransform=function(R,Z,_,I,$,ae){R=isNaN(R)?1:R,Z=isNaN(Z)?0:Z,_=isNaN(_)?0:_,I=isNaN(I)?1:I,$=isNaN($)?0:$,ae=isNaN(ae)?0:ae,this.ctx.transform=new g(R,Z,_,I,$,ae)};var U=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};A.prototype.drawImage=function(R,Z,_,I,$,ae,we,Se,Oe){var Ee=this.pdf.getImageProperties(R),qe=1,Qe=1,dt=1,V=1;I!==void 0&&Se!==void 0&&(dt=Se/I,V=Oe/$,qe=Ee.width/I*Se/I,Qe=Ee.height/$*Oe/$),ae===void 0&&(ae=Z,we=_,Z=0,_=0),I!==void 0&&Se===void 0&&(Se=I,Oe=$),I===void 0&&Se===void 0&&(Se=Ee.width,Oe=Ee.height);var Xe=this.ctx.transform.decompose(),pt=re(Xe.rotate.shx),Me=new g,xe=(Me=(Me=(Me=Me.multiply(Xe.translate)).multiply(Xe.skew)).multiply(Xe.scale)).applyToRectangle(new p(ae-Z*dt,we-_*V,I*qe,$*Qe));if(this.autoPaging){for(var Ve,Ie=k.call(this,xe),Ke=[],at=0;at<Ie.length;at+=1)Ke.indexOf(Ie[at])===-1&&Ke.push(Ie[at]);te(Ke);for(var At=Ke[0],Bt=Ke[Ke.length-1],wt=At;wt<Bt+1;wt++){this.pdf.setPage(wt);var Pt=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Ut=wt===1?this.posY+this.margin[0]:this.margin[0],$e=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Nt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],ht=wt===1?0:$e+(wt-2)*Nt;if(this.ctx.clip_path.length!==0){var Vn=this.path;Ve=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=ne(Ve,this.posX+this.margin[3],-ht+Ut+this.ctx.prevPageLastElemOffset),pe.call(this,"fill",!0),this.path=Vn}var Qt=JSON.parse(JSON.stringify(xe));Qt=ne([Qt],this.posX+this.margin[3],-ht+Ut+this.ctx.prevPageLastElemOffset)[0];var Rt=(wt>At||wt<Bt)&&U.call(this);Rt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Pt,Nt,null).clip().discardPath()),this.pdf.addImage(R,"JPEG",Qt.x,Qt.y,Qt.w,Qt.h,null,null,pt),Rt&&this.pdf.restoreGraphicsState()}}else this.pdf.addImage(R,"JPEG",xe.x,xe.y,xe.w,xe.h,null,null,pt)};var k=function(R,Z,_){var I=[];Z=Z||this.pdf.internal.pageSize.width,_=_||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var $=this.posY+this.ctx.prevPageLastElemOffset;switch(R.type){default:case"mt":case"lt":I.push(Math.floor((R.y+$)/_)+1);break;case"arc":I.push(Math.floor((R.y+$-R.radius)/_)+1),I.push(Math.floor((R.y+$+R.radius)/_)+1);break;case"qct":var ae=Ce(this.ctx.lastPoint.x,this.ctx.lastPoint.y,R.x1,R.y1,R.x,R.y);I.push(Math.floor((ae.y+$)/_)+1),I.push(Math.floor((ae.y+ae.h+$)/_)+1);break;case"bct":var we=ze(this.ctx.lastPoint.x,this.ctx.lastPoint.y,R.x1,R.y1,R.x2,R.y2,R.x,R.y);I.push(Math.floor((we.y+$)/_)+1),I.push(Math.floor((we.y+we.h+$)/_)+1);break;case"rect":I.push(Math.floor((R.y+$)/_)+1),I.push(Math.floor((R.y+R.h+$)/_)+1)}for(var Se=0;Se<I.length;Se+=1)for(;this.pdf.internal.getNumberOfPages()<I[Se];)j.call(this);return I},j=function(){var R=this.fillStyle,Z=this.strokeStyle,_=this.font,I=this.lineCap,$=this.lineWidth,ae=this.lineJoin;this.pdf.addPage(),this.fillStyle=R,this.strokeStyle=Z,this.font=_,this.lineCap=I,this.lineWidth=$,this.lineJoin=ae},ne=function(R,Z,_){for(var I=0;I<R.length;I++)switch(R[I].type){case"bct":R[I].x2+=Z,R[I].y2+=_;case"qct":R[I].x1+=Z,R[I].y1+=_;default:R[I].x+=Z,R[I].y+=_}return R},te=function(R){return R.sort(function(Z,_){return Z-_})},W=function(R,Z){var _=this.fillStyle,I=this.strokeStyle,$=this.lineCap,ae=this.lineWidth,we=Math.abs(ae*this.ctx.transform.scaleX),Se=this.lineJoin;if(this.autoPaging){for(var Oe,Ee,qe=JSON.parse(JSON.stringify(this.path)),Qe=JSON.parse(JSON.stringify(this.path)),dt=[],V=0;V<Qe.length;V++)if(Qe[V].x!==void 0)for(var Xe=k.call(this,Qe[V]),pt=0;pt<Xe.length;pt+=1)dt.indexOf(Xe[pt])===-1&&dt.push(Xe[pt]);for(var Me=0;Me<dt.length;Me++)for(;this.pdf.internal.getNumberOfPages()<dt[Me];)j.call(this);te(dt);for(var xe=dt[0],Ve=dt[dt.length-1],Ie=xe;Ie<Ve+1;Ie++){this.pdf.setPage(Ie),this.fillStyle=_,this.strokeStyle=I,this.lineCap=$,this.lineWidth=we,this.lineJoin=Se;var Ke=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],at=Ie===1?this.posY+this.margin[0]:this.margin[0],At=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Bt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],wt=Ie===1?0:At+(Ie-2)*Bt;if(this.ctx.clip_path.length!==0){var Pt=this.path;Oe=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=ne(Oe,this.posX+this.margin[3],-wt+at+this.ctx.prevPageLastElemOffset),pe.call(this,R,!0),this.path=Pt}if(Ee=JSON.parse(JSON.stringify(qe)),this.path=ne(Ee,this.posX+this.margin[3],-wt+at+this.ctx.prevPageLastElemOffset),Z===!1||Ie===0){var Ut=(Ie>xe||Ie<Ve)&&U.call(this);Ut&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Ke,Bt,null).clip().discardPath()),pe.call(this,R,Z),Ut&&this.pdf.restoreGraphicsState()}this.lineWidth=ae}this.path=qe}else this.lineWidth=we,pe.call(this,R,Z),this.lineWidth=ae},pe=function(R,Z){if((R!=="stroke"||Z||!F.call(this))&&(R==="stroke"||Z||!w.call(this))){for(var _,I,$=[],ae=this.path,we=0;we<ae.length;we++){var Se=ae[we];switch(Se.type){case"begin":$.push({begin:!0});break;case"close":$.push({close:!0});break;case"mt":$.push({start:Se,deltas:[],abs:[]});break;case"lt":var Oe=$.length;if(ae[we-1]&&!isNaN(ae[we-1].x)&&(_=[Se.x-ae[we-1].x,Se.y-ae[we-1].y],Oe>0)){for(;Oe>=0;Oe--)if($[Oe-1].close!==!0&&$[Oe-1].begin!==!0){$[Oe-1].deltas.push(_),$[Oe-1].abs.push(Se);break}}break;case"bct":_=[Se.x1-ae[we-1].x,Se.y1-ae[we-1].y,Se.x2-ae[we-1].x,Se.y2-ae[we-1].y,Se.x-ae[we-1].x,Se.y-ae[we-1].y],$[$.length-1].deltas.push(_);break;case"qct":var Ee=ae[we-1].x+2/3*(Se.x1-ae[we-1].x),qe=ae[we-1].y+2/3*(Se.y1-ae[we-1].y),Qe=Se.x+2/3*(Se.x1-Se.x),dt=Se.y+2/3*(Se.y1-Se.y),V=Se.x,Xe=Se.y;_=[Ee-ae[we-1].x,qe-ae[we-1].y,Qe-ae[we-1].x,dt-ae[we-1].y,V-ae[we-1].x,Xe-ae[we-1].y],$[$.length-1].deltas.push(_);break;case"arc":$.push({deltas:[],abs:[],arc:!0}),Array.isArray($[$.length-1].abs)&&$[$.length-1].abs.push(Se)}}I=Z?null:R==="stroke"?"stroke":"fill";for(var pt=!1,Me=0;Me<$.length;Me++)if($[Me].arc)for(var xe=$[Me].abs,Ve=0;Ve<xe.length;Ve++){var Ie=xe[Ve];Ie.type==="arc"?oe.call(this,Ie.x,Ie.y,Ie.radius,Ie.startAngle,Ie.endAngle,Ie.counterclockwise,void 0,Z,!pt):X.call(this,Ie.x,Ie.y),pt=!0}else if($[Me].close===!0)this.pdf.internal.out("h"),pt=!1;else if($[Me].begin!==!0){var Ke=$[Me].start.x,at=$[Me].start.y;Q.call(this,$[Me].deltas,Ke,at),pt=!0}I&&K.call(this,I),Z&&ve.call(this)}},ke=function(R){var Z=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,_=Z*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return R-_;case"top":return R+Z-_;case"hanging":return R+Z-2*_;case"middle":return R+Z/2-_;default:return R}},ye=function(R){return R+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};A.prototype.createLinearGradient=function(){var R=function(){};return R.colorStops=[],R.addColorStop=function(Z,_){this.colorStops.push([Z,_])},R.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},R.isCanvasGradient=!0,R},A.prototype.createPattern=function(){return this.createLinearGradient()},A.prototype.createRadialGradient=function(){return this.createLinearGradient()};var oe=function(R,Z,_,I,$,ae,we,Se,Oe){for(var Ee=ee.call(this,_,I,$,ae),qe=0;qe<Ee.length;qe++){var Qe=Ee[qe];qe===0&&(Oe?E.call(this,Qe.x1+R,Qe.y1+Z):X.call(this,Qe.x1+R,Qe.y1+Z)),le.call(this,R,Z,Qe.x2,Qe.y2,Qe.x3,Qe.y3,Qe.x4,Qe.y4)}Se?ve.call(this):K.call(this,we)},K=function(R){switch(R){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},ve=function(){this.pdf.clip(),this.pdf.discardPath()},E=function(R,Z){this.pdf.internal.out(r(R)+" "+l(Z)+" m")},B=function(R){var Z;switch(R.align){case"right":case"end":Z="right";break;case"center":Z="center";break;default:Z="left"}var _,I,$,ae=this.pdf.getTextDimensions(R.text),we=ke.call(this,R.y),Se=ye.call(this,we)-ae.h,Oe=this.ctx.transform.applyToPoint(new m(R.x,we));if(this.autoPaging){var Ee=this.ctx.transform.decompose(),qe=new g;qe=(qe=(qe=qe.multiply(Ee.translate)).multiply(Ee.skew)).multiply(Ee.scale);for(var Qe=this.ctx.transform.applyToRectangle(new p(R.x,we,ae.w,ae.h)),dt=qe.applyToRectangle(new p(R.x,Se,ae.w,ae.h)),V=k.call(this,dt),Xe=[],pt=0;pt<V.length;pt+=1)Xe.indexOf(V[pt])===-1&&Xe.push(V[pt]);te(Xe);for(var Me=Xe[0],xe=Xe[Xe.length-1],Ve=Me;Ve<xe+1;Ve++){this.pdf.setPage(Ve);var Ie=Ve===1?this.posY+this.margin[0]:this.margin[0],Ke=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],at=this.pdf.internal.pageSize.height-this.margin[2],At=at-this.margin[0],Bt=this.pdf.internal.pageSize.width-this.margin[1],wt=Bt-this.margin[3],Pt=Ve===1?0:Ke+(Ve-2)*At;if(this.ctx.clip_path.length!==0){var Ut=this.path;_=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=ne(_,this.posX+this.margin[3],-1*Pt+Ie),pe.call(this,"fill",!0),this.path=Ut}var $e=ne([JSON.parse(JSON.stringify(dt))],this.posX+this.margin[3],-Pt+Ie+this.ctx.prevPageLastElemOffset)[0];R.scale>=.01&&(I=this.pdf.internal.getFontSize(),this.pdf.setFontSize(I*R.scale),$=this.lineWidth,this.lineWidth=$*R.scale);var Nt=this.autoPaging!=="text";if(Nt||$e.y+$e.h<=at){if(Nt||$e.y>=Ie&&$e.x<=Bt){var ht=Nt?R.text:this.pdf.splitTextToSize(R.text,R.maxWidth||Bt-$e.x)[0],Vn=ne([JSON.parse(JSON.stringify(Qe))],this.posX+this.margin[3],-Pt+Ie+this.ctx.prevPageLastElemOffset)[0],Qt=Nt&&(Ve>Me||Ve<xe)&&U.call(this);Qt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],wt,At,null).clip().discardPath()),this.pdf.text(ht,Vn.x,Vn.y,{angle:R.angle,align:Z,renderingMode:R.renderingMode}),Qt&&this.pdf.restoreGraphicsState()}}else $e.y<at&&(this.ctx.prevPageLastElemOffset+=at-$e.y);R.scale>=.01&&(this.pdf.setFontSize(I),this.lineWidth=$)}}else R.scale>=.01&&(I=this.pdf.internal.getFontSize(),this.pdf.setFontSize(I*R.scale),$=this.lineWidth,this.lineWidth=$*R.scale),this.pdf.text(R.text,Oe.x+this.posX,Oe.y+this.posY,{angle:R.angle,align:Z,renderingMode:R.renderingMode,maxWidth:R.maxWidth}),R.scale>=.01&&(this.pdf.setFontSize(I),this.lineWidth=$)},X=function(R,Z,_,I){_=_||0,I=I||0,this.pdf.internal.out(r(R+_)+" "+l(Z+I)+" l")},Q=function(R,Z,_){return this.pdf.lines(R,Z,_,null,null)},le=function(R,Z,_,I,$,ae,we,Se){this.pdf.internal.out([a(f(_+R)),a(u(I+Z)),a(f($+R)),a(u(ae+Z)),a(f(we+R)),a(u(Se+Z)),"c"].join(" "))},ee=function(R,Z,_,I){for(var $=2*Math.PI,ae=Math.PI/2;Z>_;)Z-=$;var we=Math.abs(_-Z);we<$&&I&&(we=$-we);for(var Se=[],Oe=I?-1:1,Ee=Z;we>1e-5;){var qe=Ee+Oe*Math.min(we,ae);Se.push(ue.call(this,R,Ee,qe)),we-=Math.abs(qe-Ee),Ee=qe}return Se},ue=function(R,Z,_){var I=(_-Z)/2,$=R*Math.cos(I),ae=R*Math.sin(I),we=$,Se=-ae,Oe=we*we+Se*Se,Ee=Oe+we*$+Se*ae,qe=4/3*(Math.sqrt(2*Oe*Ee)-Ee)/(we*ae-Se*$),Qe=we-qe*Se,dt=Se+qe*we,V=Qe,Xe=-dt,pt=I+Z,Me=Math.cos(pt),xe=Math.sin(pt);return{x1:R*Math.cos(Z),y1:R*Math.sin(Z),x2:Qe*Me-dt*xe,y2:Qe*xe+dt*Me,x3:V*Me-Xe*xe,y3:V*xe+Xe*Me,x4:R*Math.cos(_),y4:R*Math.sin(_)}},re=function(R){return 180*R/Math.PI},Ce=function(R,Z,_,I,$,ae){var we=R+.5*(_-R),Se=Z+.5*(I-Z),Oe=$+.5*(_-$),Ee=ae+.5*(I-ae),qe=Math.min(R,$,we,Oe),Qe=Math.max(R,$,we,Oe),dt=Math.min(Z,ae,Se,Ee),V=Math.max(Z,ae,Se,Ee);return new p(qe,dt,Qe-qe,V-dt)},ze=function(R,Z,_,I,$,ae,we,Se){var Oe,Ee,qe,Qe,dt,V,Xe,pt,Me,xe,Ve,Ie,Ke,at,At=_-R,Bt=I-Z,wt=$-_,Pt=ae-I,Ut=we-$,$e=Se-ae;for(Ee=0;Ee<41;Ee++)Me=(Xe=(qe=R+(Oe=Ee/40)*At)+Oe*((dt=_+Oe*wt)-qe))+Oe*(dt+Oe*($+Oe*Ut-dt)-Xe),xe=(pt=(Qe=Z+Oe*Bt)+Oe*((V=I+Oe*Pt)-Qe))+Oe*(V+Oe*(ae+Oe*$e-V)-pt),Ee==0?(Ve=Me,Ie=xe,Ke=Me,at=xe):(Ve=Math.min(Ve,Me),Ie=Math.min(Ie,xe),Ke=Math.max(Ke,Me),at=Math.max(at,xe));return new p(Math.round(Ve),Math.round(Ie),Math.round(Ke-Ve),Math.round(at-Ie))},Be=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var R,Z,_=(R=this.ctx.lineDash,Z=this.ctx.lineDashOffset,JSON.stringify({lineDash:R,lineDashOffset:Z}));this.prevLineDash!==_&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=_)}}})(mt.API),(function(o){var a=function(m){var p,g,b,x,A,L,w,F,U,k;for(g=[],b=0,x=(m+=p="\0\0\0\0".slice(m.length%4||4)).length;x>b;b+=4)(A=(m.charCodeAt(b)<<24)+(m.charCodeAt(b+1)<<16)+(m.charCodeAt(b+2)<<8)+m.charCodeAt(b+3))!==0?(L=(A=((A=((A=((A=(A-(k=A%85))/85)-(U=A%85))/85)-(F=A%85))/85)-(w=A%85))/85)%85,g.push(L+33,w+33,F+33,U+33,k+33)):g.push(122);return(function(j,ne){for(var te=ne;te>0;te--)j.pop()})(g,p.length),String.fromCharCode.apply(String,g)+"~>"},r=function(m){var p,g,b,x,A,L=String,w="length",F=255,U="charCodeAt",k="slice",j="replace";for(m[k](-2),m=m[k](0,-2)[j](/\s/g,"")[j]("z","!!!!!"),b=[],x=0,A=(m+=p="uuuuu"[k](m[w]%5||5))[w];A>x;x+=5)g=52200625*(m[U](x)-33)+614125*(m[U](x+1)-33)+7225*(m[U](x+2)-33)+85*(m[U](x+3)-33)+(m[U](x+4)-33),b.push(F&g>>24,F&g>>16,F&g>>8,F&g);return(function(ne,te){for(var W=te;W>0;W--)ne.pop()})(b,p[w]),L.fromCharCode.apply(L,b)},l=function(m){return m.split("").map(function(p){return("0"+p.charCodeAt().toString(16)).slice(-2)}).join("")+">"},f=function(m){var p=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((m=m.replace(/\s/g,"")).indexOf(">")!==-1&&(m=m.substr(0,m.indexOf(">"))),m.length%2&&(m+="0"),p.test(m)===!1)return"";for(var g="",b=0;b<m.length;b+=2)g+=String.fromCharCode("0x"+(m[b]+m[b+1]));return g},u=function(m){for(var p=new Uint8Array(m.length),g=m.length;g--;)p[g]=m.charCodeAt(g);return(p=R1(p)).reduce(function(b,x){return b+String.fromCharCode(x)},"")};o.processDataByFilters=function(m,p){var g=0,b=m||"",x=[];for(typeof(p=p||[])=="string"&&(p=[p]),g=0;g<p.length;g+=1)switch(p[g]){case"ASCII85Decode":case"/ASCII85Decode":b=r(b),x.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":b=a(b),x.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":b=f(b),x.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":b=l(b),x.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":b=u(b),x.push("/FlateDecode");break;default:throw new Error('The filter: "'+p[g]+'" is not implemented')}return{data:b,reverseChain:x.reverse().join(" ")}}})(mt.API),(function(o){o.loadFile=function(a,r,l){return(function(f,u,m){u=u!==!1,m=typeof m=="function"?m:function(){};var p=void 0;try{p=(function(g,b,x){var A=new XMLHttpRequest,L=0,w=function(F){var U=F.length,k=[],j=String.fromCharCode;for(L=0;L<U;L+=1)k.push(j(255&F.charCodeAt(L)));return k.join("")};if(A.open("GET",g,!b),A.overrideMimeType("text/plain; charset=x-user-defined"),b===!1&&(A.onload=function(){A.status===200?x(w(this.responseText)):x(void 0)}),A.send(null),b&&A.status===200)return w(A.responseText)})(f,u,m)}catch{}return p})(a,r,l)},o.allowFsRead=void 0,o.loadImageFile=o.loadFile})(mt.API),(function(o){function a(){return(Et.html2canvas?Promise.resolve(Et.html2canvas):o1(()=>import("./html2canvas.esm-QH1iLAAe.js"),[],import.meta.url)).catch(function(p){return Promise.reject(new Error("Could not load html2canvas: "+p))}).then(function(p){return p.default?p.default:p})}function r(){return(Et.DOMPurify?Promise.resolve(Et.DOMPurify):o1(()=>import("./purify.es-DBIK8olT.js"),[],import.meta.url)).catch(function(p){return Promise.reject(new Error("Could not load dompurify: "+p))}).then(function(p){return p.default?p.default:p})}var l=function(p){var g=xn(p);return g==="undefined"?"undefined":g==="string"||p instanceof String?"string":g==="number"||p instanceof Number?"number":g==="function"||p instanceof Function?"function":p&&p.constructor===Array?"array":p&&p.nodeType===1?"element":g==="object"?"object":"unknown"},f=function(p,g){var b=document.createElement(p);for(var x in g.className&&(b.className=g.className),g.innerHTML&&g.dompurify&&(b.innerHTML=g.dompurify.sanitize(g.innerHTML)),g.style)b.style[x]=g.style[x];return b},u=function p(g,b){for(var x=g.nodeType===3?document.createTextNode(g.nodeValue):g.cloneNode(!1),A=g.firstChild;A;A=A.nextSibling)b!==!0&&A.nodeType===1&&A.nodeName==="SCRIPT"||x.appendChild(p(A,b));return g.nodeType===1&&(g.nodeName==="CANVAS"?(x.width=g.width,x.height=g.height,x.getContext("2d").drawImage(g,0,0)):g.nodeName!=="TEXTAREA"&&g.nodeName!=="SELECT"||(x.value=g.value),x.addEventListener("load",function(){x.scrollTop=g.scrollTop,x.scrollLeft=g.scrollLeft},!0)),x},m=function p(g){var b=Object.assign(p.convert(Promise.resolve()),JSON.parse(JSON.stringify(p.template))),x=p.convert(Promise.resolve(),b);return(x=x.setProgress(1,p,1,[p])).set(g)};(m.prototype=Object.create(Promise.prototype)).constructor=m,m.convert=function(p,g){return p.__proto__=g||m.prototype,p},m.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},m.prototype.from=function(p,g){return this.then(function(){switch(g=g||(function(b){switch(l(b)){case"string":return"string";case"element":return b.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}})(p),g){case"string":return this.then(r).then(function(b){return this.set({src:f("div",{innerHTML:p,dompurify:b})})});case"element":return this.set({src:p});case"canvas":return this.set({canvas:p});case"img":return this.set({img:p});default:return this.error("Unknown source type.")}})},m.prototype.to=function(p){switch(p){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},m.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then(function(){var p={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},g=u(this.prop.src,this.opt.html2canvas.javascriptEnabled);g.tagName==="BODY"&&(p.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=f("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=f("div",{className:"html2pdf__container",style:p}),this.prop.container.appendChild(g),this.prop.container.firstChild.appendChild(f("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"})},m.prototype.toCanvas=function(){var p=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(p).then(a).then(function(g){var b=Object.assign({},this.opt.html2canvas);return delete b.onrendered,g(this.prop.container,b)}).then(function(g){(this.opt.html2canvas.onrendered||function(){})(g),this.prop.canvas=g,document.body.removeChild(this.prop.overlay)})},m.prototype.toContext2d=function(){var p=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(p).then(a).then(function(g){var b=this.opt.jsPDF,x=this.opt.fontFaces,A=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,L=Object.assign({async:!0,allowTaint:!0,scale:A,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete L.onrendered,b.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,b.context2d.posX=this.opt.x,b.context2d.posY=this.opt.y,b.context2d.margin=this.opt.margin,b.context2d.fontFaces=x,x)for(var w=0;w<x.length;++w){var F=x[w],U=F.src.find(function(k){return k.format==="truetype"});U&&b.addFont(U.url,F.ref.name,F.ref.style)}return L.windowHeight=L.windowHeight||0,L.windowHeight=L.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):L.windowHeight,b.context2d.save(!0),g(this.prop.container,L)}).then(function(g){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(g),this.prop.canvas=g,document.body.removeChild(this.prop.overlay)})},m.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then(function(){var p=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=p})},m.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then(function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF})},m.prototype.output=function(p,g,b){return(b=b||"pdf").toLowerCase()==="img"||b.toLowerCase()==="image"?this.outputImg(p,g):this.outputPdf(p,g)},m.prototype.outputPdf=function(p,g){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){return this.prop.pdf.output(p,g)})},m.prototype.outputImg=function(p){return this.thenList([function(){return this.prop.img||this.toImg()}]).then(function(){switch(p){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+p+'" is not supported.'}})},m.prototype.save=function(p){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(p?{filename:p}:null).then(function(){this.prop.pdf.save(this.opt.filename)})},m.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then(function(){this.prop.callback(this.prop.pdf)})},m.prototype.set=function(p){if(l(p)!=="object")return this;var g=Object.keys(p||{}).map(function(b){if(b in m.template.prop)return function(){this.prop[b]=p[b]};switch(b){case"margin":return this.setMargin.bind(this,p.margin);case"jsPDF":return function(){return this.opt.jsPDF=p.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,p.pageSize);default:return function(){this.opt[b]=p[b]}}},this);return this.then(function(){return this.thenList(g)})},m.prototype.get=function(p,g){return this.then(function(){var b=p in m.template.prop?this.prop[p]:this.opt[p];return g?g(b):b})},m.prototype.setMargin=function(p){return this.then(function(){switch(l(p)){case"number":p=[p,p,p,p];case"array":if(p.length===2&&(p=[p[0],p[1],p[0],p[1]]),p.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=p}).then(this.setPageSize)},m.prototype.setPageSize=function(p){function g(b,x){return Math.floor(b*x/72*96)}return this.then(function(){(p=p||mt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(p.inner={width:p.width-this.opt.margin[1]-this.opt.margin[3],height:p.height-this.opt.margin[0]-this.opt.margin[2]},p.inner.px={width:g(p.inner.width,p.k),height:g(p.inner.height,p.k)},p.inner.ratio=p.inner.height/p.inner.width),this.prop.pageSize=p})},m.prototype.setProgress=function(p,g,b,x){return p!=null&&(this.progress.val=p),g!=null&&(this.progress.state=g),b!=null&&(this.progress.n=b),x!=null&&(this.progress.stack=x),this.progress.ratio=this.progress.val/this.progress.state,this},m.prototype.updateProgress=function(p,g,b,x){return this.setProgress(p?this.progress.val+p:null,g||null,b?this.progress.n+b:null,x?this.progress.stack.concat(x):null)},m.prototype.then=function(p,g){var b=this;return this.thenCore(p,g,function(x,A){return b.updateProgress(null,null,1,[x]),Promise.prototype.then.call(this,function(L){return b.updateProgress(null,x),L}).then(x,A).then(function(L){return b.updateProgress(1),L})})},m.prototype.thenCore=function(p,g,b){b=b||Promise.prototype.then;var x=this;p&&(p=p.bind(x)),g&&(g=g.bind(x));var A=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?x:m.convert(Object.assign({},x),Promise.prototype),L=b.call(A,p,g);return m.convert(L,x.__proto__)},m.prototype.thenExternal=function(p,g){return Promise.prototype.then.call(this,p,g)},m.prototype.thenList=function(p){var g=this;return p.forEach(function(b){g=g.thenCore(b)}),g},m.prototype.catch=function(p){p&&(p=p.bind(this));var g=Promise.prototype.catch.call(this,p);return m.convert(g,this)},m.prototype.catchExternal=function(p){return Promise.prototype.catch.call(this,p)},m.prototype.error=function(p){return this.then(function(){throw new Error(p)})},m.prototype.using=m.prototype.set,m.prototype.saveAs=m.prototype.save,m.prototype.export=m.prototype.output,m.prototype.run=m.prototype.then,mt.getPageSize=function(p,g,b){if(xn(p)==="object"){var x=p;p=x.orientation,g=x.unit||g,b=x.format||b}g=g||"mm",b=b||"a4",p=(""+(p||"P")).toLowerCase();var A,L=(""+b).toLowerCase(),w={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(g){case"pt":A=1;break;case"mm":A=72/25.4;break;case"cm":A=72/2.54;break;case"in":A=72;break;case"px":A=.75;break;case"pc":case"em":A=12;break;case"ex":A=6;break;default:throw"Invalid unit: "+g}var F,U=0,k=0;if(w.hasOwnProperty(L))U=w[L][1]/A,k=w[L][0]/A;else try{U=b[1],k=b[0]}catch{throw new Error("Invalid format: "+b)}if(p==="p"||p==="portrait")p="p",k>U&&(F=k,k=U,U=F);else{if(p!=="l"&&p!=="landscape")throw"Invalid orientation: "+p;p="l",U>k&&(F=k,k=U,U=F)}return{width:k,height:U,unit:g,k:A,orientation:p}},o.html=function(p,g){(g=g||{}).callback=g.callback||function(){},g.html2canvas=g.html2canvas||{},g.html2canvas.canvas=g.html2canvas.canvas||this.canvas,g.jsPDF=g.jsPDF||this,g.fontFaces=g.fontFaces?g.fontFaces.map(A1):null;var b=new m(g);return g.worker?b:b.from(p).doCallback()}})(mt.API),mt.API.addJS=function(o){var a,r,l=(function(f){for(var u="",m=0;m<f.length;m++){var p=f[m];if(p==="("||p===")"){for(var g=0,b=m-1;b>=0&&f[b]==="\\";b--)g++;u+=g%2==0?"\\"+p:p}else u+=p}return u})(o);return this.internal.events.subscribe("postPutResources",function(){a=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(a+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),r=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+l+")"),this.internal.out(">>"),this.internal.out("endobj")}),this.internal.events.subscribe("putCatalog",function(){a!==void 0&&r!==void 0&&this.internal.out("/Names <</JavaScript "+a+" 0 R>>")}),this},(function(o){var a;o.events.push(["postPutResources",function(){var r=this,l=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var f=r.outline.render().split(/\r\n/),u=0;u<f.length;u++){var m=f[u],p=l.exec(m);if(p!=null){var g=p[1];r.internal.newObjectDeferredBegin(g,!1)}r.internal.write(m)}if(this.outline.createNamedDestinations){var b=this.internal.pages.length,x=[];for(u=0;u<b;u++){var A=r.internal.newObject();x.push(A);var L=r.internal.getPageInfo(u+1);r.internal.write("<< /D["+L.objId+" 0 R /XYZ null null null]>> endobj")}var w=r.internal.newObject();for(r.internal.write("<< /Names [ "),u=0;u<x.length;u++)r.internal.write("(page_"+(u+1)+")"+x[u]+" 0 R");r.internal.write(" ] >>","endobj"),a=r.internal.newObject(),r.internal.write("<< /Dests "+w+" 0 R"),r.internal.write(">>","endobj")}}]),o.events.push(["putCatalog",function(){var r=this;r.outline.root.children.length>0&&(r.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&r.internal.write("/Names "+a+" 0 R"))}]),o.events.push(["initialized",function(){var r=this;r.outline={createNamedDestinations:!1,root:{children:[]}},r.outline.add=function(l,f,u){var m={title:f,options:u,children:[]};return l==null&&(l=this.root),l.children.push(m),m},r.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=r,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},r.outline.genIds_r=function(l){l.id=r.internal.newObjectDeferred();for(var f=0;f<l.children.length;f++)this.genIds_r(l.children[f])},r.outline.renderRoot=function(l){this.objStart(l),this.line("/Type /Outlines"),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1]))),this.line("/Count "+this.count_r({count:0},l)),this.objEnd()},r.outline.renderItems=function(l){for(var f=this.ctx.pdf.internal.getVerticalCoordinateString,u=0;u<l.children.length;u++){var m=l.children[u];this.objStart(m),this.line("/Title "+this.makeString(m.title)),this.line("/Parent "+this.makeRef(l)),u>0&&this.line("/Prev "+this.makeRef(l.children[u-1])),u<l.children.length-1&&this.line("/Next "+this.makeRef(l.children[u+1])),m.children.length>0&&(this.line("/First "+this.makeRef(m.children[0])),this.line("/Last "+this.makeRef(m.children[m.children.length-1])));var p=this.count=this.count_r({count:0},m);if(p>0&&this.line("/Count "+p),m.options&&m.options.pageNumber){var g=r.internal.getPageInfo(m.options.pageNumber);this.line("/Dest ["+g.objId+" 0 R /XYZ 0 "+f(0)+" 0]")}this.objEnd()}for(var b=0;b<l.children.length;b++)this.renderItems(l.children[b])},r.outline.line=function(l){this.ctx.val+=l+`\r
`},r.outline.makeRef=function(l){return l.id+" 0 R"},r.outline.makeString=function(l){return"("+r.internal.pdfEscape(l)+")"},r.outline.objStart=function(l){this.ctx.val+=`\r
`+l.id+` 0 obj\r
<<\r
`},r.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},r.outline.count_r=function(l,f){for(var u=0;u<f.children.length;u++)l.count++,this.count_r(l,f.children[u]);return l.count}}])})(mt.API),(function(o){var a=[192,193,194,195,196,197,198,199];o.processJPEG=function(r,l,f,u,m,p){var g,b=this.decode.DCT_DECODE,x=null;if(typeof r=="string"||this.__addimage__.isArrayBuffer(r)||this.__addimage__.isArrayBufferView(r)){switch(r=m||r,r=this.__addimage__.isArrayBuffer(r)?new Uint8Array(r):r,g=(function(A){for(var L,w=256*A.charCodeAt(4)+A.charCodeAt(5),F=A.length,U={width:0,height:0,numcomponents:1},k=4;k<F;k+=2){if(k+=w,a.indexOf(A.charCodeAt(k+1))!==-1){L=256*A.charCodeAt(k+5)+A.charCodeAt(k+6),U={width:256*A.charCodeAt(k+7)+A.charCodeAt(k+8),height:L,numcomponents:A.charCodeAt(k+9)};break}w=256*A.charCodeAt(k+2)+A.charCodeAt(k+3)}return U})(r=this.__addimage__.isArrayBufferView(r)?this.__addimage__.arrayBufferToBinaryString(r):r),g.numcomponents){case 1:p=this.color_spaces.DEVICE_GRAY;break;case 4:p=this.color_spaces.DEVICE_CMYK;break;case 3:p=this.color_spaces.DEVICE_RGB}x={data:r,width:g.width,height:g.height,colorSpace:p,bitsPerComponent:8,filter:b,index:l,alias:f}}return x}})(mt.API),mt.API.processPNG=function(o,a,r,l){if(this.__addimage__.isArrayBuffer(o)&&(o=new Uint8Array(o)),this.__addimage__.isArrayBufferView(o)){var f,u=q3(o,{checkCrc:!0}),m=u.width,p=u.height,g=u.channels,b=u.palette,x=u.depth;f=b&&g===1?(function(oe){for(var K=oe.width,ve=oe.height,E=oe.data,B=oe.palette,X=oe.depth,Q=!1,le=[],ee=[],ue=void 0,re=!1,Ce=0,ze=0;ze<B.length;ze++){var Be=f5(B[ze],4),R=Be[0],Z=Be[1],_=Be[2],I=Be[3];le.push(R,Z,_),I!=null&&(I===0?(Ce++,ee.length<1&&ee.push(ze)):I<255&&(re=!0))}if(re||Ce>1){Q=!0,ee=void 0;var $=K*ve;ue=new Uint8Array($);for(var ae=new DataView(E.buffer),we=0;we<$;we++){var Se=C1(ae,we,X),Oe=f5(B[Se],4)[3];ue[we]=Oe}}else Ce===0&&(ee=void 0);return{colorSpace:"Indexed",colorsPerPixel:1,sMaskBitsPerComponent:Q?8:void 0,colorBytes:E,alphaBytes:ue,needSMask:Q,palette:le,mask:ee}})(u):g===2||g===4?(function(oe){for(var K=oe.data,ve=oe.width,E=oe.height,B=oe.channels,X=oe.depth,Q=B===2?"DeviceGray":"DeviceRGB",le=B-1,ee=ve*E,ue=le,re=ee*ue,Ce=1*ee,ze=Math.ceil(re*X/8),Be=Math.ceil(Ce*X/8),R=new Uint8Array(ze),Z=new Uint8Array(Be),_=new DataView(K.buffer),I=new DataView(R.buffer),$=new DataView(Z.buffer),ae=!1,we=0;we<ee;we++){for(var Se=we*B,Oe=0;Oe<ue;Oe++)mg(I,C1(_,Se+Oe,X),we*ue+Oe,X);var Ee=C1(_,Se+ue,X);Ee<(1<<X)-1&&(ae=!0),mg($,Ee,1*we,X)}return{colorSpace:Q,colorsPerPixel:le,sMaskBitsPerComponent:ae?X:void 0,colorBytes:R,alphaBytes:Z,needSMask:ae}})(u):(function(oe){var K=oe.data,ve=oe.channels===1?"DeviceGray":"DeviceRGB";return{colorSpace:ve,colorsPerPixel:ve==="DeviceGray"?1:3,colorBytes:K instanceof Uint16Array?(function(E){for(var B=E.length,X=new Uint8Array(2*B),Q=new DataView(X.buffer,X.byteOffset,X.byteLength),le=0;le<B;le++)Q.setUint16(2*le,E[le],!1);return X})(K):K,needSMask:!1}})(u);var A,L,w,F=f,U=F.colorSpace,k=F.colorsPerPixel,j=F.sMaskBitsPerComponent,ne=F.colorBytes,te=F.alphaBytes,W=F.needSMask,pe=F.palette,ke=F.mask,ye=null;return l!==mt.API.image_compression.NONE&&typeof R1=="function"?(ye=(function(oe){var K;switch(oe){case mt.API.image_compression.FAST:K=11;break;case mt.API.image_compression.MEDIUM:K=13;break;case mt.API.image_compression.SLOW:K=14;break;default:K=12}return K})(l),A=this.decode.FLATE_DECODE,L="/Predictor ".concat(ye," /Colors ").concat(k," /BitsPerComponent ").concat(x," /Columns ").concat(m),o=fg(ne,Math.ceil(m*k*x/8),k,x,l),W&&(w=fg(te,Math.ceil(m*j/8),1,j,l))):(A=void 0,L=void 0,o=ne,W&&(w=te)),(this.__addimage__.isArrayBuffer(o)||this.__addimage__.isArrayBufferView(o))&&(o=this.__addimage__.arrayBufferToBinaryString(o)),(w&&this.__addimage__.isArrayBuffer(w)||this.__addimage__.isArrayBufferView(w))&&(w=this.__addimage__.arrayBufferToBinaryString(w)),{alias:r,data:o,index:a,filter:A,decodeParameters:L,transparency:ke,palette:pe,sMask:w,predictor:ye,width:m,height:p,bitsPerComponent:x,sMaskBitsPerComponent:j,colorSpace:U}}},(function(o){o.processGIF89A=function(a,r,l,f){var u=new s4(a),m=u.width,p=u.height,g=[];u.decodeAndBlitFrameRGBA(0,g);var b={data:g,width:m,height:p},x=new T1(100).encode(b,100);return o.processJPEG.call(this,x,r,l,f)},o.processGIF87A=o.processGIF89A})(mt.API),io.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var o=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(o);for(var a=0;a<o;a++){var r=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),f=this.datav.getUint8(this.pos++,!0),u=this.datav.getUint8(this.pos++,!0);this.palette[a]={red:f,green:l,blue:r,quad:u}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},io.prototype.parseBGR=function(){this.pos=this.offset;var o="bit"+this.bitPP,a=this.width*this.height*4;if(a>536870912)throw new Error("Image dimensions exceed 512MB, which is too large.");this.data=new Uint8Array(a);try{this[o]()}catch(r){On.log("bit decode error:"+r)}},io.prototype.bit1=function(){var o,a=Math.ceil(this.width/8),r=a%4;for(o=this.height-1;o>=0;o--){for(var l=this.bottom_up?o:this.height-1-o,f=0;f<a;f++)for(var u=this.datav.getUint8(this.pos++,!0),m=l*this.width*4+8*f*4,p=0;p<8&&8*f+p<this.width;p++){var g=this.palette[u>>7-p&1];this.data[m+4*p]=g.blue,this.data[m+4*p+1]=g.green,this.data[m+4*p+2]=g.red,this.data[m+4*p+3]=255}r!==0&&(this.pos+=4-r)}},io.prototype.bit4=function(){for(var o=Math.ceil(this.width/2),a=o%4,r=this.height-1;r>=0;r--){for(var l=this.bottom_up?r:this.height-1-r,f=0;f<o;f++){var u=this.datav.getUint8(this.pos++,!0),m=l*this.width*4+2*f*4,p=u>>4,g=15&u,b=this.palette[p];if(this.data[m]=b.blue,this.data[m+1]=b.green,this.data[m+2]=b.red,this.data[m+3]=255,2*f+1>=this.width)break;b=this.palette[g],this.data[m+4]=b.blue,this.data[m+4+1]=b.green,this.data[m+4+2]=b.red,this.data[m+4+3]=255}a!==0&&(this.pos+=4-a)}},io.prototype.bit8=function(){for(var o=this.width%4,a=this.height-1;a>=0;a--){for(var r=this.bottom_up?a:this.height-1-a,l=0;l<this.width;l++){var f=this.datav.getUint8(this.pos++,!0),u=r*this.width*4+4*l;if(f<this.palette.length){var m=this.palette[f];this.data[u]=m.red,this.data[u+1]=m.green,this.data[u+2]=m.blue,this.data[u+3]=255}else this.data[u]=255,this.data[u+1]=255,this.data[u+2]=255,this.data[u+3]=255}o!==0&&(this.pos+=4-o)}},io.prototype.bit15=function(){for(var o=this.width%3,a=parseInt("11111",2),r=this.height-1;r>=0;r--){for(var l=this.bottom_up?r:this.height-1-r,f=0;f<this.width;f++){var u=this.datav.getUint16(this.pos,!0);this.pos+=2;var m=(u&a)/a*255|0,p=(u>>5&a)/a*255|0,g=(u>>10&a)/a*255|0,b=u>>15?255:0,x=l*this.width*4+4*f;this.data[x]=g,this.data[x+1]=p,this.data[x+2]=m,this.data[x+3]=b}this.pos+=o}},io.prototype.bit16=function(){for(var o=this.width%3,a=parseInt("11111",2),r=parseInt("111111",2),l=this.height-1;l>=0;l--){for(var f=this.bottom_up?l:this.height-1-l,u=0;u<this.width;u++){var m=this.datav.getUint16(this.pos,!0);this.pos+=2;var p=(m&a)/a*255|0,g=(m>>5&r)/r*255|0,b=(m>>11)/a*255|0,x=f*this.width*4+4*u;this.data[x]=b,this.data[x+1]=g,this.data[x+2]=p,this.data[x+3]=255}this.pos+=o}},io.prototype.bit24=function(){for(var o=this.height-1;o>=0;o--){for(var a=this.bottom_up?o:this.height-1-o,r=0;r<this.width;r++){var l=this.datav.getUint8(this.pos++,!0),f=this.datav.getUint8(this.pos++,!0),u=this.datav.getUint8(this.pos++,!0),m=a*this.width*4+4*r;this.data[m]=u,this.data[m+1]=f,this.data[m+2]=l,this.data[m+3]=255}this.pos+=this.width%4}},io.prototype.bit32=function(){for(var o=this.height-1;o>=0;o--)for(var a=this.bottom_up?o:this.height-1-o,r=0;r<this.width;r++){var l=this.datav.getUint8(this.pos++,!0),f=this.datav.getUint8(this.pos++,!0),u=this.datav.getUint8(this.pos++,!0),m=this.datav.getUint8(this.pos++,!0),p=a*this.width*4+4*r;this.data[p]=u,this.data[p+1]=f,this.data[p+2]=l,this.data[p+3]=m}},io.prototype.getData=function(){return this.data},(function(o){o.processBMP=function(a,r,l,f){var u=new io(a,!1),m=u.width,p=u.height,g={data:u.getData(),width:m,height:p},b=new T1(100).encode(g,100);return o.processJPEG.call(this,b,r,l,f)}})(mt.API),bg.prototype.getData=function(){return this.data},(function(o){o.processWEBP=function(a,r,l,f){var u=new bg(a),m=u.width,p=u.height,g={data:u.getData(),width:m,height:p},b=new T1(100).encode(g,100);return o.processJPEG.call(this,b,r,l,f)}})(mt.API),mt.API.processRGBA=function(o,a,r){for(var l=o.data,f=l.length,u=new Uint8Array(f/4*3),m=new Uint8Array(f/4),p=0,g=0,b=0;b<f;b+=4){var x=l[b],A=l[b+1],L=l[b+2],w=l[b+3];u[p++]=x,u[p++]=A,u[p++]=L,m[g++]=w}var F=this.__addimage__.arrayBufferToBinaryString(u);return{alpha:this.__addimage__.arrayBufferToBinaryString(m),data:F,index:a,alias:r,colorSpace:"DeviceRGB",bitsPerComponent:8,width:o.width,height:o.height}},mt.API.setLanguage=function(o){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[o]!==void 0&&(this.internal.languageSettings.languageCode=o,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")}),this.internal.languageSettings.isSubscribed=!0)),this},Hc=mt.API,ed=Hc.getCharWidthsArray=function(o,a){var r,l,f=(a=a||{}).font||this.internal.getFont(),u=a.fontSize||this.internal.getFontSize(),m=a.charSpace||this.internal.getCharSpace(),p=a.widths?a.widths:f.metadata.Unicode.widths,g=p.fof?p.fof:1,b=a.kerning?a.kerning:f.metadata.Unicode.kerning,x=b.fof?b.fof:1,A=a.doKerning!==!1,L=0,w=o.length,F=0,U=p[0]||g,k=[];for(r=0;r<w;r++)l=o.charCodeAt(r),typeof f.metadata.widthOfString=="function"?k.push((f.metadata.widthOfGlyph(f.metadata.characterToGlyph(l))+m*(1e3/u)||0)/1e3):(L=A&&xn(b[l])==="object"&&!isNaN(parseInt(b[l][F],10))?b[l][F]/x:0,k.push((p[l]||U)/g+L)),F=l;return k},sg=Hc.getStringUnitWidth=function(o,a){var r=(a=a||{}).fontSize||this.internal.getFontSize(),l=a.font||this.internal.getFont(),f=a.charSpace||this.internal.getCharSpace();return Hc.processArabic&&(o=Hc.processArabic(o)),typeof l.metadata.widthOfString=="function"?l.metadata.widthOfString(o,r,f)/r:ed.apply(this,arguments).reduce(function(u,m){return u+m},0)},cg=function(o,a,r,l){for(var f=[],u=0,m=o.length,p=0;u!==m&&p+a[u]<r;)p+=a[u],u++;f.push(o.slice(0,u));var g=u;for(p=0;u!==m;)p+a[u]>l&&(f.push(o.slice(g,u)),p=0,g=u),p+=a[u],u++;return g!==u&&f.push(o.slice(g,u)),f},ug=function(o,a,r){r||(r={});var l,f,u,m,p,g,b,x=[],A=[x],L=r.textIndent||0,w=0,F=0,U=o.split(" "),k=ed.apply(this,[" ",r])[0];if(g=r.lineIndent===-1?U[0].length+2:r.lineIndent||0){var j=Array(g).join(" "),ne=[];U.map(function(W){(W=W.split(/\s*\n/)).length>1?ne=ne.concat(W.map(function(pe,ke){return(ke&&pe.length?`
`:"")+pe})):ne.push(W[0])}),U=ne,g=sg.apply(this,[j,r])}for(u=0,m=U.length;u<m;u++){var te=0;if(l=U[u],g&&l[0]==`
`&&(l=l.substr(1),te=1),L+w+(F=(f=ed.apply(this,[l,r])).reduce(function(W,pe){return W+pe},0))>a||te){if(F>a){for(p=cg.apply(this,[l,f,a-(L+w),a]),x.push(p.shift()),x=[p.pop()];p.length;)A.push([p.shift()]);F=f.slice(l.length-(x[0]?x[0].length:0)).reduce(function(W,pe){return W+pe},0)}else x=[l];A.push(x),L=F+g,w=k}else x.push(l),L+=w+F,w=k}return b=g?function(W,pe){return(pe?j:"")+W.join(" ")}:function(W){return W.join(" ")},A.map(b)},Hc.splitTextToSize=function(o,a,r){var l,f=(r=r||{}).fontSize||this.internal.getFontSize(),u=(function(x){if(x.widths&&x.kerning)return{widths:x.widths,kerning:x.kerning};var A=this.internal.getFont(x.fontName,x.fontStyle),L="Unicode";return A.metadata[L]?{widths:A.metadata[L].widths||{0:1},kerning:A.metadata[L].kerning||{}}:{font:A.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,r);l=Array.isArray(o)?o:String(o).split(/\r?\n/);var m=1*this.internal.scaleFactor*a/f;u.textIndent=r.textIndent?1*r.textIndent*this.internal.scaleFactor/f:0,u.lineIndent=r.lineIndent;var p,g,b=[];for(p=0,g=l.length;p<g;p++)b=b.concat(ug.apply(this,[l[p],m,u]));return b},(function(o){o.__fontmetrics__=o.__fontmetrics__||{};for(var a="0123456789abcdef",r="klmnopqrstuvwxyz",l={},f={},u=0;u<16;u++)l[r[u]]=a[u],f[a[u]]=r[u];var m=function(L){return"0x"+parseInt(L,10).toString(16)},p=o.__fontmetrics__.compress=function(L){var w,F,U,k,j=["{"];for(var ne in L){if(w=L[ne],isNaN(parseInt(ne,10))?F="'"+ne+"'":(ne=parseInt(ne,10),F=(F=m(ne).slice(2)).slice(0,-1)+f[F.slice(-1)]),typeof w=="number")w<0?(U=m(w).slice(3),k="-"):(U=m(w).slice(2),k=""),U=k+U.slice(0,-1)+f[U.slice(-1)];else{if(xn(w)!=="object")throw new Error("Don't know what to do with value type "+xn(w)+".");U=p(w)}j.push(F+U)}return j.push("}"),j.join("")},g=o.__fontmetrics__.uncompress=function(L){if(typeof L!="string")throw new Error("Invalid argument passed to uncompress.");for(var w,F,U,k,j={},ne=1,te=j,W=[],pe="",ke="",ye=L.length-1,oe=1;oe<ye;oe+=1)(k=L[oe])=="'"?w?(U=w.join(""),w=void 0):w=[]:w?w.push(k):k=="{"?(W.push([te,U]),te={},U=void 0):k=="}"?((F=W.pop())[0][F[1]]=te,U=void 0,te=F[0]):k=="-"?ne=-1:U===void 0?l.hasOwnProperty(k)?(pe+=l[k],U=parseInt(pe,16)*ne,ne=1,pe=""):pe+=k:l.hasOwnProperty(k)?(ke+=l[k],te[U]=parseInt(ke,16)*ne,ne=1,U=void 0,ke=""):ke+=k;return j},b={codePages:["WinAnsiEncoding"],WinAnsiEncoding:g("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},x={Unicode:{Courier:b,"Courier-Bold":b,"Courier-BoldOblique":b,"Courier-Oblique":b,Helvetica:b,"Helvetica-Bold":b,"Helvetica-BoldOblique":b,"Helvetica-Oblique":b,"Times-Roman":b,"Times-Bold":b,"Times-BoldItalic":b,"Times-Italic":b}},A={Unicode:{"Courier-Oblique":g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":g("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":g("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":g("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:g("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:g("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":g("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:g("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":g("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":g("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":g("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};o.events.push(["addFont",function(L){var w=L.font,F=A.Unicode[w.postScriptName];F&&(w.metadata.Unicode={},w.metadata.Unicode.widths=F.widths,w.metadata.Unicode.kerning=F.kerning);var U=x.Unicode[w.postScriptName];U&&(w.metadata.Unicode.encoding=U,w.encoding=U.codePages[0])}])})(mt.API),(function(o){var a=function(r){for(var l=r.length,f=new Uint8Array(l),u=0;u<l;u++)f[u]=r.charCodeAt(u);return f};o.API.events.push(["addFont",function(r){var l=void 0,f=r.font,u=r.instance;if(!f.isStandardFont){if(u===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+f.postScriptName+"').");if(typeof(l=u.existsFileInVFS(f.postScriptName)===!1?u.loadFile(f.postScriptName):u.getFileFromVFS(f.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+f.postScriptName+"').");(function(m,p){p=/^\x00\x01\x00\x00/.test(p)?a(p):a(rd(p)),m.metadata=o.API.TTFFont.open(p),m.metadata.Unicode=m.metadata.Unicode||{encoding:{},kerning:{},widths:[]},m.metadata.glyIdsUsed=[0]})(f,l)}}])})(mt),mt.API.addSvgAsImage=function(o,a,r,l,f,u,m,p){if(isNaN(a)||isNaN(r))throw On.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(l)||isNaN(f))throw On.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var g=document.createElement("canvas");g.width=l,g.height=f;var b=g.getContext("2d");b.fillStyle="#fff",b.fillRect(0,0,g.width,g.height);var x={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},A=this;return(Et.canvg?Promise.resolve(Et.canvg):o1(()=>import("./index.es-B_qp8_1j.js"),[],import.meta.url)).catch(function(L){return Promise.reject(new Error("Could not load canvg: "+L))}).then(function(L){return L.default?L.default:L}).then(function(L){return L.fromString(b,o,x)},function(){return Promise.reject(new Error("Could not load canvg."))}).then(function(L){return L.render(x)}).then(function(){A.addImage(g.toDataURL("image/jpeg",1),a,r,l,f,m,p)})},mt.API.putTotalPages=function(o){var a,r=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(a=new RegExp(o,"g"),r=this.internal.getNumberOfPages()):(a=new RegExp(this.pdfEscape16(o,this.internal.getFont()),"g"),r=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var l=1;l<=this.internal.getNumberOfPages();l++)for(var f=0;f<this.internal.pages[l].length;f++)this.internal.pages[l][f]=this.internal.pages[l][f].replace(a,r);return this},mt.API.viewerPreferences=function(o,a){var r;o=o||{},a=a||!1;var l,f,u,m={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},p=Object.keys(m),g=[],b=0,x=0,A=0;function L(F,U){var k,j=!1;for(k=0;k<F.length;k+=1)F[k]===U&&(j=!0);return j}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(m)),this.internal.viewerpreferences.isSubscribed=!1),r=this.internal.viewerpreferences.configuration,o==="reset"||a===!0){var w=p.length;for(A=0;A<w;A+=1)r[p[A]].value=r[p[A]].defaultValue,r[p[A]].explicitSet=!1}if(xn(o)==="object"){for(f in o)if(u=o[f],L(p,f)&&u!==void 0){if(r[f].type==="boolean"&&typeof u=="boolean")r[f].value=u;else if(r[f].type==="name"&&L(r[f].valueSet,u))r[f].value=u;else if(r[f].type==="integer"&&Number.isInteger(u))r[f].value=u;else if(r[f].type==="array"){for(b=0;b<u.length;b+=1)if(l=!0,u[b].length===1&&typeof u[b][0]=="number")g.push(String(u[b]-1));else if(u[b].length>1){for(x=0;x<u[b].length;x+=1)typeof u[b][x]!="number"&&(l=!1);l===!0&&g.push([u[b][0]-1,u[b][1]-1].join(" "))}r[f].value="["+g.join(" ")+"]"}else r[f].value=r[f].defaultValue;r[f].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",function(){var F,U=[];for(F in r)r[F].explicitSet===!0&&(r[F].type==="name"?U.push("/"+F+" /"+r[F].value):U.push("/"+F+" "+r[F].value));U.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+U.join(`
`)+`
>>`)}),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=r,this},mt.API.addMetadata=function(o,a){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:o,namespaceUri:a??"http://jspdf.default.namespaceuri/",rawXml:typeof a=="boolean"&&a},this.internal.events.subscribe("putCatalog",u4),this.internal.events.subscribe("postPutResources",c4)),this},(function(o){var a=o.API,r=a.pdfEscape16=function(u,m){for(var p,g=m.metadata.Unicode.widths,b=["","0","00","000","0000"],x=[""],A=0,L=u.length;A<L;++A){if(p=m.metadata.characterToGlyph(u.charCodeAt(A)),m.metadata.glyIdsUsed.push(p),m.metadata.toUnicode[p]=u.charCodeAt(A),g.indexOf(p)==-1&&(g.push(p),g.push([parseInt(m.metadata.widthOfGlyph(p),10)])),p=="0")return x.join("");p=p.toString(16),x.push(b[4-p.length],p)}return x.join("")},l=function(u){var m,p,g,b,x,A,L;for(x=`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,g=[],A=0,L=(p=Object.keys(u).sort(function(w,F){return w-F})).length;A<L;A++)m=p[A],g.length>=100&&(x+=`
`+g.length+` beginbfchar
`+g.join(`
`)+`
endbfchar`,g=[]),u[m]!==void 0&&u[m]!==null&&typeof u[m].toString=="function"&&(b=("0000"+u[m].toString(16)).slice(-4),m=("0000"+(+m).toString(16)).slice(-4),g.push("<"+m+"><"+b+">"));return g.length&&(x+=`
`+g.length+` beginbfchar
`+g.join(`
`)+`
endbfchar
`),x+`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};a.events.push(["putFont",function(u){(function(m){var p=m.font,g=m.out,b=m.newObject,x=m.putStream;if(p.metadata instanceof o.API.TTFFont&&p.encoding==="Identity-H"){for(var A=p.metadata.Unicode.widths,L=p.metadata.subset.encode(p.metadata.glyIdsUsed,1),w="",F=0;F<L.length;F++)w+=String.fromCharCode(L[F]);var U=b();x({data:w,addLength1:!0,objectId:U}),g("endobj");var k=b();x({data:l(p.metadata.toUnicode),addLength1:!0,objectId:k}),g("endobj");var j=b();g("<<"),g("/Type /FontDescriptor"),g("/FontName /"+Gc(p.fontName)),g("/FontFile2 "+U+" 0 R"),g("/FontBBox "+o.API.PDFObject.convert(p.metadata.bbox)),g("/Flags "+p.metadata.flags),g("/StemV "+p.metadata.stemV),g("/ItalicAngle "+p.metadata.italicAngle),g("/Ascent "+p.metadata.ascender),g("/Descent "+p.metadata.decender),g("/CapHeight "+p.metadata.capHeight),g(">>"),g("endobj");var ne=b();g("<<"),g("/Type /Font"),g("/BaseFont /"+Gc(p.fontName)),g("/FontDescriptor "+j+" 0 R"),g("/W "+o.API.PDFObject.convert(A)),g("/CIDToGIDMap /Identity"),g("/DW 1000"),g("/Subtype /CIDFontType2"),g("/CIDSystemInfo"),g("<<"),g("/Supplement 0"),g("/Registry (Adobe)"),g("/Ordering ("+p.encoding+")"),g(">>"),g(">>"),g("endobj"),p.objectNumber=b(),g("<<"),g("/Type /Font"),g("/Subtype /Type0"),g("/ToUnicode "+k+" 0 R"),g("/BaseFont /"+Gc(p.fontName)),g("/Encoding /"+p.encoding),g("/DescendantFonts ["+ne+" 0 R]"),g(">>"),g("endobj"),p.isAlreadyPutted=!0}})(u)}]),a.events.push(["putFont",function(u){(function(m){var p=m.font,g=m.out,b=m.newObject,x=m.putStream;if(p.metadata instanceof o.API.TTFFont&&p.encoding==="WinAnsiEncoding"){for(var A=p.metadata.rawData,L="",w=0;w<A.length;w++)L+=String.fromCharCode(A[w]);var F=b();x({data:L,addLength1:!0,objectId:F}),g("endobj");var U=b();x({data:l(p.metadata.toUnicode),addLength1:!0,objectId:U}),g("endobj");var k=b();g("<<"),g("/Descent "+p.metadata.decender),g("/CapHeight "+p.metadata.capHeight),g("/StemV "+p.metadata.stemV),g("/Type /FontDescriptor"),g("/FontFile2 "+F+" 0 R"),g("/Flags 96"),g("/FontBBox "+o.API.PDFObject.convert(p.metadata.bbox)),g("/FontName /"+Gc(p.fontName)),g("/ItalicAngle "+p.metadata.italicAngle),g("/Ascent "+p.metadata.ascender),g(">>"),g("endobj"),p.objectNumber=b();for(var j=0;j<p.metadata.hmtx.widths.length;j++)p.metadata.hmtx.widths[j]=parseInt(p.metadata.hmtx.widths[j]*(1e3/p.metadata.head.unitsPerEm));g("<</Subtype/TrueType/Type/Font/ToUnicode "+U+" 0 R/BaseFont/"+Gc(p.fontName)+"/FontDescriptor "+k+" 0 R/Encoding/"+p.encoding+" /FirstChar 29 /LastChar 255 /Widths "+o.API.PDFObject.convert(p.metadata.hmtx.widths)+">>"),g("endobj"),p.isAlreadyPutted=!0}})(u)}]);var f=function(u){var m,p=u.text||"",g=u.x,b=u.y,x=u.options||{},A=u.mutex||{},L=A.pdfEscape,w=A.activeFontKey,F=A.fonts,U=w,k="",j=0,ne="",te=F[U].encoding;if(F[U].encoding!=="Identity-H")return{text:p,x:g,y:b,options:x,mutex:A};for(ne=p,U=w,Array.isArray(p)&&(ne=p[0]),j=0;j<ne.length;j+=1)F[U].metadata.hasOwnProperty("cmap")&&(m=F[U].metadata.cmap.unicode.codeMap[ne[j].charCodeAt(0)]),m||ne[j].charCodeAt(0)<256&&F[U].metadata.hasOwnProperty("Unicode")?k+=ne[j]:k+="";var W="";return parseInt(U.slice(1))<14||te==="WinAnsiEncoding"?W=L(k,U).split("").map(function(pe){return pe.charCodeAt(0).toString(16)}).join(""):te==="Identity-H"&&(W=r(k,F[U])),A.isHex=!0,{text:W,x:g,y:b,options:x,mutex:A}};a.events.push(["postProcessText",function(u){var m=u.text||"",p=[],g={text:m,x:u.x,y:u.y,options:u.options,mutex:u.mutex};if(Array.isArray(m)){var b=0;for(b=0;b<m.length;b+=1)Array.isArray(m[b])&&m[b].length===3?p.push([f(Object.assign({},g,{text:m[b][0]})).text,m[b][1],m[b][2]]):p.push(f(Object.assign({},g,{text:m[b]})).text);u.text=p}else u.text=f(Object.assign({},g,{text:m})).text}])})(mt),(function(o){var a=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};o.existsFileInVFS=function(r){return a.call(this),this.internal.vFS[r]!==void 0},o.addFileToVFS=function(r,l){return a.call(this),this.internal.vFS[r]=l,this},o.getFileFromVFS=function(r){return a.call(this),this.internal.vFS[r]!==void 0?this.internal.vFS[r]:null}})(mt.API),(function(o){o.__bidiEngine__=o.prototype.__bidiEngine__=function(l){var f,u,m,p,g,b,x,A=a,L=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],w=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],F={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},U={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},k=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],j=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),ne=!1,te=0;this.__bidiEngine__={};var W=function(E){var B=E.charCodeAt(),X=B>>8,Q=U[X];return Q!==void 0?A[256*Q+(255&B)]:X===252||X===253?"AL":j.test(X)?"L":X===8?"R":"N"},pe=function(E){for(var B,X=0;X<E.length;X++){if((B=W(E.charAt(X)))==="L")return!1;if(B==="R")return!0}return!1},ke=function(E,B,X,Q){var le,ee,ue,re,Ce=B[Q];switch(Ce){case"L":case"R":case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":ne=!1;break;case"N":case"AN":break;case"EN":ne&&(Ce="AN");break;case"AL":ne=!0,Ce="R";break;case"WS":case"BN":Ce="N";break;case"CS":Q<1||Q+1>=B.length||(le=X[Q-1])!=="EN"&&le!=="AN"||(ee=B[Q+1])!=="EN"&&ee!=="AN"?Ce="N":ne&&(ee="AN"),Ce=ee===le?ee:"N";break;case"ES":Ce=(le=Q>0?X[Q-1]:"B")==="EN"&&Q+1<B.length&&B[Q+1]==="EN"?"EN":"N";break;case"ET":if(Q>0&&X[Q-1]==="EN"){Ce="EN";break}if(ne){Ce="N";break}for(ue=Q+1,re=B.length;ue<re&&B[ue]==="ET";)ue++;Ce=ue<re&&B[ue]==="EN"?"EN":"N";break;case"NSM":if(m&&!p){for(re=B.length,ue=Q+1;ue<re&&B[ue]==="NSM";)ue++;if(ue<re){var ze=E[Q],Be=ze>=1425&&ze<=2303||ze===64286;if(le=B[ue],Be&&(le==="R"||le==="AL")){Ce="R";break}}}Ce=Q<1||(le=B[Q-1])==="B"?"N":X[Q-1];break;case"B":ne=!1,f=!0,Ce=te;break;case"S":u=!0,Ce="N"}return Ce},ye=function(E,B,X){var Q=E.split("");return X&&oe(Q,X,{hiLevel:te}),Q.reverse(),B&&B.reverse(),Q.join("")},oe=function(E,B,X){var Q,le,ee,ue,re,Ce=-1,ze=E.length,Be=0,R=[],Z=te?w:L,_=[];for(ne=!1,f=!1,u=!1,le=0;le<ze;le++)_[le]=W(E[le]);for(ee=0;ee<ze;ee++){if(re=Be,R[ee]=ke(E,_,R,ee),Q=240&(Be=Z[re][F[R[ee]]]),Be&=15,B[ee]=ue=Z[Be][5],Q>0)if(Q===16){for(le=Ce;le<ee;le++)B[le]=1;Ce=-1}else Ce=-1;if(Z[Be][6])Ce===-1&&(Ce=ee);else if(Ce>-1){for(le=Ce;le<ee;le++)B[le]=ue;Ce=-1}_[ee]==="B"&&(B[ee]=0),X.hiLevel|=ue}u&&(function(I,$,ae){for(var we=0;we<ae;we++)if(I[we]==="S"){$[we]=te;for(var Se=we-1;Se>=0&&I[Se]==="WS";Se--)$[Se]=te}})(_,B,ze)},K=function(E,B,X,Q,le){if(!(le.hiLevel<E)){if(E===1&&te===1&&!f)return B.reverse(),void(X&&X.reverse());for(var ee,ue,re,Ce,ze=B.length,Be=0;Be<ze;){if(Q[Be]>=E){for(re=Be+1;re<ze&&Q[re]>=E;)re++;for(Ce=Be,ue=re-1;Ce<ue;Ce++,ue--)ee=B[Ce],B[Ce]=B[ue],B[ue]=ee,X&&(ee=X[Ce],X[Ce]=X[ue],X[ue]=ee);Be=re}Be++}}},ve=function(E,B,X){var Q=E.split(""),le={hiLevel:te};return X||(X=[]),oe(Q,X,le),(function(ee,ue,re){if(re.hiLevel!==0&&x)for(var Ce,ze=0;ze<ee.length;ze++)ue[ze]===1&&(Ce=k.indexOf(ee[ze]))>=0&&(ee[ze]=k[Ce+1])})(Q,X,le),K(2,Q,B,X,le),K(1,Q,B,X,le),Q.join("")};return this.__bidiEngine__.doBidiReorder=function(E,B,X){if((function(le,ee){if(ee)for(var ue=0;ue<le.length;ue++)ee[ue]=ue;p===void 0&&(p=pe(le)),b===void 0&&(b=pe(le))})(E,B),m||!g||b)if(m&&g&&p^b)te=p?1:0,E=ye(E,B,X);else if(!m&&g&&b)te=p?1:0,E=ve(E,B,X),E=ye(E,B);else if(!m||p||g||b){if(m&&!g&&p^b)E=ye(E,B),p?(te=0,E=ve(E,B,X)):(te=1,E=ve(E,B,X),E=ye(E,B));else if(m&&p&&!g&&b)te=1,E=ve(E,B,X),E=ye(E,B);else if(!m&&!g&&p^b){var Q=x;p?(te=1,E=ve(E,B,X),te=0,x=!1,E=ve(E,B,X),x=Q):(te=0,E=ve(E,B,X),E=ye(E,B),te=1,x=!1,E=ve(E,B,X),x=Q,E=ye(E,B))}}else te=0,E=ve(E,B,X);else te=p?1:0,E=ve(E,B,X);return E},this.__bidiEngine__.setOptions=function(E){E&&(m=E.isInputVisual,g=E.isOutputVisual,p=E.isInputRtl,b=E.isOutputRtl,x=E.isSymmetricSwapping)},this.__bidiEngine__.setOptions(l),this.__bidiEngine__};var a=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],r=new o.__bidiEngine__({isInputVisual:!0});o.API.events.push(["postProcessText",function(l){var f=l.text;l.x,l.y;var u=l.options||{};l.mutex,u.lang;var m=[];if(u.isInputVisual=typeof u.isInputVisual!="boolean"||u.isInputVisual,r.setOptions(u),Object.prototype.toString.call(f)==="[object Array]"){var p=0;for(m=[],p=0;p<f.length;p+=1)Object.prototype.toString.call(f[p])==="[object Array]"?m.push([r.doBidiReorder(f[p][0]),f[p][1],f[p][2]]):m.push([r.doBidiReorder(f[p])]);l.text=m}else l.text=r.doBidiReorder(f);r.setOptions({isInputVisual:!0})}])})(mt),mt.API.TTFFont=(function(){function o(a){var r;if(this.rawData=a,r=this.contents=new us(a),this.contents.pos=4,r.readString(4)==="ttcf")throw new Error("TTCF not supported.");r.pos=0,this.parse(),this.subset=new _4(this),this.registerTTF()}return o.open=function(a){return new o(a)},o.prototype.parse=function(){return this.directory=new f4(this.contents),this.head=new h4(this),this.name=new b4(this),this.cmap=new Dm(this),this.toUnicode={},this.hhea=new p4(this),this.maxp=new y4(this),this.hmtx=new x4(this),this.post=new m4(this),this.os2=new g4(this),this.loca=new A4(this),this.glyf=new w4(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},o.prototype.registerTTF=function(){var a,r,l,f,u;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var m,p,g,b;for(b=[],m=0,p=(g=this.bbox).length;m<p;m++)a=g[m],b.push(Math.round(a*this.scaleFactor));return b}).call(this),this.stemV=0,this.post.exists?(l=255&(f=this.post.italic_angle),32768&(r=f>>16)&&(r=-(1+(65535^r))),this.italicAngle=+(r+"."+l)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(u=this.familyClass)===1||u===2||u===3||u===4||u===5||u===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},o.prototype.characterToGlyph=function(a){var r;return((r=this.cmap.unicode)!=null?r.codeMap[a]:void 0)||0},o.prototype.widthOfGlyph=function(a){var r;return r=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(a).advance*r},o.prototype.widthOfString=function(a,r,l){var f,u,m,p;for(m=0,u=0,p=(a=""+a).length;0<=p?u<p:u>p;u=0<=p?++u:--u)f=a.charCodeAt(u),m+=this.widthOfGlyph(this.characterToGlyph(f))+l*(1e3/r)||0;return m*(r/1e3)},o.prototype.lineHeight=function(a,r){var l;return r==null&&(r=!1),l=r?this.lineGap:0,(this.ascender+l-this.decender)/1e3*a},o})();var oo,us=(function(){function o(a){this.data=a??[],this.pos=0,this.length=this.data.length}return o.prototype.readByte=function(){return this.data[this.pos++]},o.prototype.writeByte=function(a){return this.data[this.pos++]=a},o.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},o.prototype.writeUInt32=function(a){return this.writeByte(a>>>24&255),this.writeByte(a>>16&255),this.writeByte(a>>8&255),this.writeByte(255&a)},o.prototype.readInt32=function(){var a;return(a=this.readUInt32())>=2147483648?a-4294967296:a},o.prototype.writeInt32=function(a){return a<0&&(a+=4294967296),this.writeUInt32(a)},o.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},o.prototype.writeUInt16=function(a){return this.writeByte(a>>8&255),this.writeByte(255&a)},o.prototype.readInt16=function(){var a;return(a=this.readUInt16())>=32768?a-65536:a},o.prototype.writeInt16=function(a){return a<0&&(a+=65536),this.writeUInt16(a)},o.prototype.readString=function(a){var r,l;for(l=[],r=0;0<=a?r<a:r>a;r=0<=a?++r:--r)l[r]=String.fromCharCode(this.readByte());return l.join("")},o.prototype.writeString=function(a){var r,l,f;for(f=[],r=0,l=a.length;0<=l?r<l:r>l;r=0<=l?++r:--r)f.push(this.writeByte(a.charCodeAt(r)));return f},o.prototype.readShort=function(){return this.readInt16()},o.prototype.writeShort=function(a){return this.writeInt16(a)},o.prototype.readLongLong=function(){var a,r,l,f,u,m,p,g;return a=this.readByte(),r=this.readByte(),l=this.readByte(),f=this.readByte(),u=this.readByte(),m=this.readByte(),p=this.readByte(),g=this.readByte(),128&a?-1*(72057594037927940*(255^a)+281474976710656*(255^r)+1099511627776*(255^l)+4294967296*(255^f)+16777216*(255^u)+65536*(255^m)+256*(255^p)+(255^g)+1):72057594037927940*a+281474976710656*r+1099511627776*l+4294967296*f+16777216*u+65536*m+256*p+g},o.prototype.writeLongLong=function(a){var r,l;return r=Math.floor(a/4294967296),l=4294967295&a,this.writeByte(r>>24&255),this.writeByte(r>>16&255),this.writeByte(r>>8&255),this.writeByte(255&r),this.writeByte(l>>24&255),this.writeByte(l>>16&255),this.writeByte(l>>8&255),this.writeByte(255&l)},o.prototype.readInt=function(){return this.readInt32()},o.prototype.writeInt=function(a){return this.writeInt32(a)},o.prototype.read=function(a){var r,l;for(r=[],l=0;0<=a?l<a:l>a;l=0<=a?++l:--l)r.push(this.readByte());return r},o.prototype.write=function(a){var r,l,f,u;for(u=[],l=0,f=a.length;l<f;l++)r=a[l],u.push(this.writeByte(r));return u},o})(),f4=(function(){var o;function a(r){var l,f,u;for(this.scalarType=r.readInt(),this.tableCount=r.readShort(),this.searchRange=r.readShort(),this.entrySelector=r.readShort(),this.rangeShift=r.readShort(),this.tables={},f=0,u=this.tableCount;0<=u?f<u:f>u;f=0<=u?++f:--f)l={tag:r.readString(4),checksum:r.readInt(),offset:r.readInt(),length:r.readInt()},this.tables[l.tag]=l}return a.prototype.encode=function(r){var l,f,u,m,p,g,b,x,A,L,w,F,U;for(U in w=Object.keys(r).length,g=Math.log(2),A=16*Math.floor(Math.log(w)/g),m=Math.floor(A/g),x=16*w-A,(f=new us).writeInt(this.scalarType),f.writeShort(w),f.writeShort(A),f.writeShort(m),f.writeShort(x),u=16*w,b=f.pos+u,p=null,F=[],r)for(L=r[U],f.writeString(U),f.writeInt(o(L)),f.writeInt(b),f.writeInt(L.length),F=F.concat(L),U==="head"&&(p=b),b+=L.length;b%4;)F.push(0),b++;return f.write(F),l=2981146554-o(f.data),f.pos=p+8,f.writeUInt32(l),f.data},o=function(r){var l,f,u,m;for(r=km.call(r);r.length%4;)r.push(0);for(u=new us(r),f=0,l=0,m=r.length;l<m;l=l+=4)f+=u.readUInt32();return 4294967295&f},a})(),d4={}.hasOwnProperty,zo=function(o,a){for(var r in a)d4.call(a,r)&&(o[r]=a[r]);function l(){this.constructor=o}return l.prototype=a.prototype,o.prototype=new l,o.__super__=a.prototype,o};oo=(function(){function o(a){var r;this.file=a,r=this.file.directory.tables[this.tag],this.exists=!!r,r&&(this.offset=r.offset,this.length=r.length,this.parse(this.file.contents))}return o.prototype.parse=function(){},o.prototype.encode=function(){},o.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},o})();var h4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="head",o.prototype.parse=function(a){return a.pos=this.offset,this.version=a.readInt(),this.revision=a.readInt(),this.checkSumAdjustment=a.readInt(),this.magicNumber=a.readInt(),this.flags=a.readShort(),this.unitsPerEm=a.readShort(),this.created=a.readLongLong(),this.modified=a.readLongLong(),this.xMin=a.readShort(),this.yMin=a.readShort(),this.xMax=a.readShort(),this.yMax=a.readShort(),this.macStyle=a.readShort(),this.lowestRecPPEM=a.readShort(),this.fontDirectionHint=a.readShort(),this.indexToLocFormat=a.readShort(),this.glyphDataFormat=a.readShort()},o.prototype.encode=function(a){var r;return(r=new us).writeInt(this.version),r.writeInt(this.revision),r.writeInt(this.checkSumAdjustment),r.writeInt(this.magicNumber),r.writeShort(this.flags),r.writeShort(this.unitsPerEm),r.writeLongLong(this.created),r.writeLongLong(this.modified),r.writeShort(this.xMin),r.writeShort(this.yMin),r.writeShort(this.xMax),r.writeShort(this.yMax),r.writeShort(this.macStyle),r.writeShort(this.lowestRecPPEM),r.writeShort(this.fontDirectionHint),r.writeShort(a),r.writeShort(this.glyphDataFormat),r.data},o})(),yg=(function(){function o(a,r){var l,f,u,m,p,g,b,x,A,L,w,F,U,k,j,ne,te;switch(this.platformID=a.readUInt16(),this.encodingID=a.readShort(),this.offset=r+a.readInt(),A=a.pos,a.pos=this.offset,this.format=a.readUInt16(),this.length=a.readUInt16(),this.language=a.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(g=0;g<256;++g)this.codeMap[g]=a.readByte();break;case 4:for(w=a.readUInt16(),L=w/2,a.pos+=6,u=(function(){var W,pe;for(pe=[],g=W=0;0<=L?W<L:W>L;g=0<=L?++W:--W)pe.push(a.readUInt16());return pe})(),a.pos+=2,U=(function(){var W,pe;for(pe=[],g=W=0;0<=L?W<L:W>L;g=0<=L?++W:--W)pe.push(a.readUInt16());return pe})(),b=(function(){var W,pe;for(pe=[],g=W=0;0<=L?W<L:W>L;g=0<=L?++W:--W)pe.push(a.readUInt16());return pe})(),x=(function(){var W,pe;for(pe=[],g=W=0;0<=L?W<L:W>L;g=0<=L?++W:--W)pe.push(a.readUInt16());return pe})(),f=(this.length-a.pos+this.offset)/2,p=(function(){var W,pe;for(pe=[],g=W=0;0<=f?W<f:W>f;g=0<=f?++W:--W)pe.push(a.readUInt16());return pe})(),g=j=0,te=u.length;j<te;g=++j)for(k=u[g],l=ne=F=U[g];F<=k?ne<=k:ne>=k;l=F<=k?++ne:--ne)x[g]===0?m=l+b[g]:(m=p[x[g]/2+(l-F)-(L-g)]||0)!==0&&(m+=b[g]),this.codeMap[l]=65535&m}a.pos=A}return o.encode=function(a,r){var l,f,u,m,p,g,b,x,A,L,w,F,U,k,j,ne,te,W,pe,ke,ye,oe,K,ve,E,B,X,Q,le,ee,ue,re,Ce,ze,Be,R,Z,_,I,$,ae,we,Se,Oe,Ee,qe;switch(Q=new us,m=Object.keys(a).sort(function(Qe,dt){return Qe-dt}),r){case"macroman":for(U=0,k=(function(){var Qe=[];for(F=0;F<256;++F)Qe.push(0);return Qe})(),ne={0:0},u={},le=0,Ce=m.length;le<Ce;le++)ne[Se=a[f=m[le]]]==null&&(ne[Se]=++U),u[f]={old:a[f],new:ne[a[f]]},k[f]=ne[a[f]];return Q.writeUInt16(1),Q.writeUInt16(0),Q.writeUInt32(12),Q.writeUInt16(0),Q.writeUInt16(262),Q.writeUInt16(0),Q.write(k),{charMap:u,subtable:Q.data,maxGlyphID:U+1};case"unicode":for(B=[],A=[],te=0,ne={},l={},j=b=null,ee=0,ze=m.length;ee<ze;ee++)ne[pe=a[f=m[ee]]]==null&&(ne[pe]=++te),l[f]={old:pe,new:ne[pe]},p=ne[pe]-f,j!=null&&p===b||(j&&A.push(j),B.push(f),b=p),j=f;for(j&&A.push(j),A.push(65535),B.push(65535),ve=2*(K=B.length),oe=2*Math.pow(Math.log(K)/Math.LN2,2),L=Math.log(oe/2)/Math.LN2,ye=2*K-oe,g=[],ke=[],w=[],F=ue=0,Be=B.length;ue<Be;F=++ue){if(E=B[F],x=A[F],E===65535){g.push(0),ke.push(0);break}if(E-(X=l[E].new)>=32768)for(g.push(0),ke.push(2*(w.length+K-F)),f=re=E;E<=x?re<=x:re>=x;f=E<=x?++re:--re)w.push(l[f].new);else g.push(X-E),ke.push(0)}for(Q.writeUInt16(3),Q.writeUInt16(1),Q.writeUInt32(12),Q.writeUInt16(4),Q.writeUInt16(16+8*K+2*w.length),Q.writeUInt16(0),Q.writeUInt16(ve),Q.writeUInt16(oe),Q.writeUInt16(L),Q.writeUInt16(ye),ae=0,R=A.length;ae<R;ae++)f=A[ae],Q.writeUInt16(f);for(Q.writeUInt16(0),we=0,Z=B.length;we<Z;we++)f=B[we],Q.writeUInt16(f);for(Oe=0,_=g.length;Oe<_;Oe++)p=g[Oe],Q.writeUInt16(p);for(Ee=0,I=ke.length;Ee<I;Ee++)W=ke[Ee],Q.writeUInt16(W);for(qe=0,$=w.length;qe<$;qe++)U=w[qe],Q.writeUInt16(U);return{charMap:l,subtable:Q.data,maxGlyphID:te+1}}},o})(),Dm=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="cmap",o.prototype.parse=function(a){var r,l,f;for(a.pos=this.offset,this.version=a.readUInt16(),f=a.readUInt16(),this.tables=[],this.unicode=null,l=0;0<=f?l<f:l>f;l=0<=f?++l:--l)r=new yg(a,this.offset),this.tables.push(r),r.isUnicode&&this.unicode==null&&(this.unicode=r);return!0},o.encode=function(a,r){var l,f;return r==null&&(r="macroman"),l=yg.encode(a,r),(f=new us).writeUInt16(0),f.writeUInt16(1),l.table=f.data.concat(l.subtable),l},o})(),p4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="hhea",o.prototype.parse=function(a){return a.pos=this.offset,this.version=a.readInt(),this.ascender=a.readShort(),this.decender=a.readShort(),this.lineGap=a.readShort(),this.advanceWidthMax=a.readShort(),this.minLeftSideBearing=a.readShort(),this.minRightSideBearing=a.readShort(),this.xMaxExtent=a.readShort(),this.caretSlopeRise=a.readShort(),this.caretSlopeRun=a.readShort(),this.caretOffset=a.readShort(),a.pos+=8,this.metricDataFormat=a.readShort(),this.numberOfMetrics=a.readUInt16()},o})(),g4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="OS/2",o.prototype.parse=function(a){if(a.pos=this.offset,this.version=a.readUInt16(),this.averageCharWidth=a.readShort(),this.weightClass=a.readUInt16(),this.widthClass=a.readUInt16(),this.type=a.readShort(),this.ySubscriptXSize=a.readShort(),this.ySubscriptYSize=a.readShort(),this.ySubscriptXOffset=a.readShort(),this.ySubscriptYOffset=a.readShort(),this.ySuperscriptXSize=a.readShort(),this.ySuperscriptYSize=a.readShort(),this.ySuperscriptXOffset=a.readShort(),this.ySuperscriptYOffset=a.readShort(),this.yStrikeoutSize=a.readShort(),this.yStrikeoutPosition=a.readShort(),this.familyClass=a.readShort(),this.panose=(function(){var r,l;for(l=[],r=0;r<10;++r)l.push(a.readByte());return l})(),this.charRange=(function(){var r,l;for(l=[],r=0;r<4;++r)l.push(a.readInt());return l})(),this.vendorID=a.readString(4),this.selection=a.readShort(),this.firstCharIndex=a.readShort(),this.lastCharIndex=a.readShort(),this.version>0&&(this.ascent=a.readShort(),this.descent=a.readShort(),this.lineGap=a.readShort(),this.winAscent=a.readShort(),this.winDescent=a.readShort(),this.codePageRange=(function(){var r,l;for(l=[],r=0;r<2;r=++r)l.push(a.readInt());return l})(),this.version>1))return this.xHeight=a.readShort(),this.capHeight=a.readShort(),this.defaultChar=a.readShort(),this.breakChar=a.readShort(),this.maxContext=a.readShort()},o})(),m4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="post",o.prototype.parse=function(a){var r,l,f;switch(a.pos=this.offset,this.format=a.readInt(),this.italicAngle=a.readInt(),this.underlinePosition=a.readShort(),this.underlineThickness=a.readShort(),this.isFixedPitch=a.readInt(),this.minMemType42=a.readInt(),this.maxMemType42=a.readInt(),this.minMemType1=a.readInt(),this.maxMemType1=a.readInt(),this.format){case 65536:case 196608:break;case 131072:var u;for(l=a.readUInt16(),this.glyphNameIndex=[],u=0;0<=l?u<l:u>l;u=0<=l?++u:--u)this.glyphNameIndex.push(a.readUInt16());for(this.names=[],f=[];a.pos<this.offset+this.length;)r=a.readByte(),f.push(this.names.push(a.readString(r)));return f;case 151552:return l=a.readUInt16(),this.offsets=a.read(l);case 262144:return this.map=(function(){var m,p,g;for(g=[],u=m=0,p=this.file.maxp.numGlyphs;0<=p?m<p:m>p;u=0<=p?++m:--m)g.push(a.readUInt32());return g}).call(this)}},o})(),v4=function(o,a){this.raw=o,this.length=o.length,this.platformID=a.platformID,this.encodingID=a.encodingID,this.languageID=a.languageID},b4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="name",o.prototype.parse=function(a){var r,l,f,u,m,p,g,b,x,A,L;for(a.pos=this.offset,a.readShort(),r=a.readShort(),p=a.readShort(),l=[],u=0;0<=r?u<r:u>r;u=0<=r?++u:--u)l.push({platformID:a.readShort(),encodingID:a.readShort(),languageID:a.readShort(),nameID:a.readShort(),length:a.readShort(),offset:this.offset+p+a.readShort()});for(g={},u=x=0,A=l.length;x<A;u=++x)f=l[u],a.pos=f.offset,b=a.readString(f.length),m=new v4(b,f),g[L=f.nameID]==null&&(g[L]=[]),g[f.nameID].push(m);this.strings=g,this.copyright=g[0],this.fontFamily=g[1],this.fontSubfamily=g[2],this.uniqueSubfamily=g[3],this.fontName=g[4],this.version=g[5];try{this.postscriptName=g[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=g[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=g[7],this.manufacturer=g[8],this.designer=g[9],this.description=g[10],this.vendorUrl=g[11],this.designerUrl=g[12],this.license=g[13],this.licenseUrl=g[14],this.preferredFamily=g[15],this.preferredSubfamily=g[17],this.compatibleFull=g[18],this.sampleText=g[19]},o})(),y4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="maxp",o.prototype.parse=function(a){return a.pos=this.offset,this.version=a.readInt(),this.numGlyphs=a.readUInt16(),this.maxPoints=a.readUInt16(),this.maxContours=a.readUInt16(),this.maxCompositePoints=a.readUInt16(),this.maxComponentContours=a.readUInt16(),this.maxZones=a.readUInt16(),this.maxTwilightPoints=a.readUInt16(),this.maxStorage=a.readUInt16(),this.maxFunctionDefs=a.readUInt16(),this.maxInstructionDefs=a.readUInt16(),this.maxStackElements=a.readUInt16(),this.maxSizeOfInstructions=a.readUInt16(),this.maxComponentElements=a.readUInt16(),this.maxComponentDepth=a.readUInt16()},o})(),x4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="hmtx",o.prototype.parse=function(a){var r,l,f,u,m,p,g;for(a.pos=this.offset,this.metrics=[],r=0,p=this.file.hhea.numberOfMetrics;0<=p?r<p:r>p;r=0<=p?++r:--r)this.metrics.push({advance:a.readUInt16(),lsb:a.readInt16()});for(f=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=(function(){var b,x;for(x=[],r=b=0;0<=f?b<f:b>f;r=0<=f?++b:--b)x.push(a.readInt16());return x})(),this.widths=(function(){var b,x,A,L;for(L=[],b=0,x=(A=this.metrics).length;b<x;b++)u=A[b],L.push(u.advance);return L}).call(this),l=this.widths[this.widths.length-1],g=[],r=m=0;0<=f?m<f:m>f;r=0<=f?++m:--m)g.push(this.widths.push(l));return g},o.prototype.forGlyph=function(a){return a in this.metrics?this.metrics[a]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[a-this.metrics.length]}},o})(),km=[].slice,w4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="glyf",o.prototype.parse=function(){return this.cache={}},o.prototype.glyphFor=function(a){var r,l,f,u,m,p,g,b,x,A;return a in this.cache?this.cache[a]:(u=this.file.loca,r=this.file.contents,l=u.indexOf(a),(f=u.lengthOf(a))===0?this.cache[a]=null:(r.pos=this.offset+l,m=(p=new us(r.read(f))).readShort(),b=p.readShort(),A=p.readShort(),g=p.readShort(),x=p.readShort(),this.cache[a]=m===-1?new S4(p,b,A,g,x):new N4(p,m,b,A,g,x),this.cache[a]))},o.prototype.encode=function(a,r,l){var f,u,m,p,g;for(m=[],u=[],p=0,g=r.length;p<g;p++)f=a[r[p]],u.push(m.length),f&&(m=m.concat(f.encode(l)));return u.push(m.length),{table:m,offsets:u}},o})(),N4=(function(){function o(a,r,l,f,u,m){this.raw=a,this.numberOfContours=r,this.xMin=l,this.yMin=f,this.xMax=u,this.yMax=m,this.compound=!1}return o.prototype.encode=function(){return this.raw.data},o})(),S4=(function(){function o(a,r,l,f,u){var m,p;for(this.raw=a,this.xMin=r,this.yMin=l,this.xMax=f,this.yMax=u,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],m=this.raw;p=m.readShort(),this.glyphOffsets.push(m.pos),this.glyphIDs.push(m.readUInt16()),32&p;)m.pos+=1&p?4:2,128&p?m.pos+=8:64&p?m.pos+=4:8&p&&(m.pos+=2)}return o.prototype.encode=function(){var a,r,l;for(r=new us(km.call(this.raw.data)),a=0,l=this.glyphIDs.length;a<l;++a)r.pos=this.glyphOffsets[a];return r.data},o})(),A4=(function(){function o(){return o.__super__.constructor.apply(this,arguments)}return zo(o,oo),o.prototype.tag="loca",o.prototype.parse=function(a){var r,l;return a.pos=this.offset,r=this.file.head.indexToLocFormat,this.offsets=r===0?(function(){var f,u;for(u=[],l=0,f=this.length;l<f;l+=2)u.push(2*a.readUInt16());return u}).call(this):(function(){var f,u;for(u=[],l=0,f=this.length;l<f;l+=4)u.push(a.readUInt32());return u}).call(this)},o.prototype.indexOf=function(a){return this.offsets[a]},o.prototype.lengthOf=function(a){return this.offsets[a+1]-this.offsets[a]},o.prototype.encode=function(a,r){for(var l=new Uint32Array(this.offsets.length),f=0,u=0,m=0;m<l.length;++m)if(l[m]=f,u<r.length&&r[u]==m){++u,l[m]=f;var p=this.offsets[m],g=this.offsets[m+1]-p;g>0&&(f+=g)}for(var b=new Array(4*l.length),x=0;x<l.length;++x)b[4*x+3]=255&l[x],b[4*x+2]=(65280&l[x])>>8,b[4*x+1]=(16711680&l[x])>>16,b[4*x]=(4278190080&l[x])>>24;return b},o})(),_4=(function(){function o(a){this.font=a,this.subset={},this.unicodes={},this.next=33}return o.prototype.generateCmap=function(){var a,r,l,f,u;for(r in f=this.font.cmap.tables[0].codeMap,a={},u=this.subset)l=u[r],a[r]=f[l];return a},o.prototype.glyphsFor=function(a){var r,l,f,u,m,p,g;for(f={},m=0,p=a.length;m<p;m++)f[u=a[m]]=this.font.glyf.glyphFor(u);for(u in r=[],f)(l=f[u])!=null&&l.compound&&r.push.apply(r,l.glyphIDs);if(r.length>0)for(u in g=this.glyphsFor(r))l=g[u],f[u]=l;return f},o.prototype.encode=function(a,r){var l,f,u,m,p,g,b,x,A,L,w,F,U,k,j;for(f in l=Dm.encode(this.generateCmap(),"unicode"),m=this.glyphsFor(a),w={0:0},j=l.charMap)w[(g=j[f]).old]=g.new;for(F in L=l.maxGlyphID,m)F in w||(w[F]=L++);return x=(function(ne){var te,W;for(te in W={},ne)W[ne[te]]=te;return W})(w),A=Object.keys(x).sort(function(ne,te){return ne-te}),U=(function(){var ne,te,W;for(W=[],ne=0,te=A.length;ne<te;ne++)p=A[ne],W.push(x[p]);return W})(),u=this.font.glyf.encode(m,U,w),b=this.font.loca.encode(u.offsets,U),k={cmap:this.font.cmap.raw(),glyf:u.table,loca:b,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(r)},this.font.os2.exists&&(k["OS/2"]=this.font.os2.raw()),this.font.directory.encode(k)},o})();mt.API.PDFObject=(function(){var o;function a(){}return o=function(r,l){return(Array(l+1).join("0")+r).slice(-l)},a.convert=function(r){var l,f,u,m;if(Array.isArray(r))return"["+(function(){var p,g,b;for(b=[],p=0,g=r.length;p<g;p++)l=r[p],b.push(a.convert(l));return b})().join(" ")+"]";if(typeof r=="string")return"/"+r;if(r!=null&&r.isString)return"("+r+")";if(r instanceof Date)return"(D:"+o(r.getUTCFullYear(),4)+o(r.getUTCMonth(),2)+o(r.getUTCDate(),2)+o(r.getUTCHours(),2)+o(r.getUTCMinutes(),2)+o(r.getUTCSeconds(),2)+"Z)";if({}.toString.call(r)==="[object Object]"){for(f in u=["<<"],r)m=r[f],u.push("/"+f+" "+a.convert(m));return u.push(">>"),u.join(`
`)}return""+r},a})();const pd="pinboard-notes-data-v5";function xg(o){var u;const a=new Set,r=m=>{if(!m||typeof m.id!="string"||!m.id||a.has(m.id)||typeof m.title!="string"||typeof m.content!="string"||!Array.isArray(m.children))throw new Error("Invalid saved note tree");a.add(m.id),m.children.forEach(r)};if(!o||!o.tree||o.tree.id!=="root")throw new Error("Invalid saved root");if(r(o.tree),o.trash!==void 0&&!Array.isArray(o.trash))throw new Error("Invalid saved recycle bin");const l=new Set;for(const m of o.trash||[]){if(!m||typeof m.id!="string"||l.has(m.id)||typeof m.parentId!="string"||typeof m.deletedAt!="number")throw new Error("Invalid saved recycle bin entry");l.add(m.id),r(m.node)}if(o.theme!==void 0&&o.theme!=="dark"&&o.theme!=="light")throw new Error("Invalid saved theme");if(o.bubbleSettings!==void 0&&(!o.bubbleSettings||typeof o.bubbleSettings!="object"))throw new Error("Invalid saved bubble settings");const f={transparency:[.2,1],bubblePopSize:[48,96],expansionWidth:[300,720],expansionHeight:[260,650],cropTop:[0,200],cropBottom:[0,200],cropHeight:[100,400]};for(const[m,[p,g]]of Object.entries(f)){const b=(u=o.bubbleSettings)==null?void 0:u[m];if(b!==void 0&&(typeof b!="number"||!Number.isFinite(b)||b<p||b>g))throw new Error("Invalid saved bubble setting")}return o}async function C4(){let o=null;try{o=window.localStorage.getItem(pd)}catch{}if(o!==null)return xg(JSON.parse(o));const a=window.storage;if(a&&typeof a.get=="function"){const r=await a.get(pd,!1);if(r!=null&&r.value)return xg(JSON.parse(r.value))}return null}let td=null,nd=null;function T4(o){const a=JSON.stringify(o);let r=!1;try{window.localStorage.setItem(pd,a),r=!0}catch(f){console.error("localStorage save failed:",f)}const l=window.storage;return!l||typeof l.set!="function"?Promise.resolve(r):(td=a,nd||(nd=(async()=>{let f=!1;for(;td!==null;){const u=td;td=null;try{await l.set(pd,u,!1),f=!0}catch(m){f=!1,console.warn("window.storage.set failed:",m)}}return f})().finally(()=>{nd=null})),r?Promise.resolve(!0):nd)}const E1=()=>Math.random().toString(36).slice(2,9)+Date.now().toString(36);function L1(){return{id:"root",title:"Home",content:"",archived:!1,pinned:!1,pinnedAt:null,order:0,children:[],createdAt:Date.now(),updatedAt:Date.now()}}function Hu(o){return JSON.parse(JSON.stringify(o))}function fi(o,a){if(o.id===a)return o;for(const r of o.children||[]){const l=fi(r,a);if(l)return l}return null}function I1(o,a){for(const r of o.children||[]){if(r.id===a)return o;const l=I1(r,a);if(l)return l}return null}function Mm(o,a,r=[]){const l=[...r,o.id];if(o.id===a)return l;for(const f of o.children||[]){const u=Mm(f,a,l);if(u)return u}return null}function Rm(o,a){o.children&&(o.children=o.children.filter(r=>r.id!==a),o.children.forEach(r=>Rm(r,a)))}function Xu(o){if(!o)return"";const a=document.createElement("div");return a.innerHTML=o,a.querySelectorAll("br").forEach(r=>r.replaceWith(`
`)),a.querySelectorAll("p, div, h1, h2, h3, h4, h5, h6, li, blockquote").forEach(r=>{r.prepend(`
`),r.append(`
`)}),(a.textContent||"").replace(/\n{3,}/g,`

`).trim()}function E4(o){const a=document.createElement("div");return a.textContent=o,a.innerHTML}function O1(o,a,r=!0){const l=r?"note-chip-pinned":"",f=document.createElement("div");return f.className=`note-chip ${l}`,f.setAttribute("contenteditable","false"),f.setAttribute("data-note-id",o),f.innerHTML=`<span class="note-chip-pin"></span><span class="note-chip-label">${E4(a||"Untitled")}</span>`,f.outerHTML}function wg(o,a){if(!o)return!1;const r=document.createElement("div");return r.innerHTML=o,Array.from(r.querySelectorAll(".note-chip")).some(l=>l.getAttribute("data-note-id")===a)}function Ng(o,a){if(!o||!a)return;o.querySelectorAll(".note-chip").forEach(l=>{const f=l.getAttribute("data-note-id"),u=f?fi(a,f):null,m=l.querySelector(".note-chip-label");m&&(m.textContent=u&&u.title||"Untitled"),l.classList.toggle("note-chip-pinned",!!(u&&u.pinned)),l.classList.toggle("note-chip-missing",!u)})}function jm(o){const a=(o||[]).filter(f=>!f.archived),r=a.filter(f=>f.pinned).sort((f,u)=>{const m=f.pinnedAt||f.updatedAt||0,p=u.pinnedAt||u.updatedAt||0;return p!==m?p-m:(f.order??0)-(u.order??0)}),l=a.filter(f=>!f.pinned).sort((f,u)=>(f.order??0)-(u.order??0));return{pinned:r,normal:l}}function L4(o,a,r,l){if(!o.children)return;const{pinned:f,normal:u}=jm(o.children),m=l?[...f]:[...u],p=m.findIndex(x=>x.id===a),g=m.findIndex(x=>x.id===r);if(p===-1||g===-1||p===g)return;const[b]=m.splice(p,1);if(m.splice(g,0,b),l){const x=Date.now();m.forEach((A,L)=>{A.pinnedAt=x-L*1e3})}else m.forEach((x,A)=>{x.order=A})}function O4(o,a,r=42){const l=o.toLowerCase().indexOf(a.toLowerCase());if(l===-1)return o.slice(0,90);const f=Math.max(0,l-r),u=Math.min(o.length,l+a.length+r);let m=o.slice(f,u).trim();return f>0&&(m="…"+m),u<o.length&&(m=m+"…"),m}function zm(o,a,r,l){const f=a.toLowerCase(),u=[...r,o.id];if(o.id!=="root"){const m=o.title||"",p=Xu(o.content),g=m.toLowerCase().includes(f),b=p.toLowerCase().includes(f);(g||b)&&l.push({id:o.id,title:m||"Untitled",path:u,archived:o.archived,pinned:o.pinned,matchType:g?"title":"content",snippet:b?O4(p,a):""})}(o.children||[]).forEach(m=>zm(m,a,u,l))}function D4(o,a){return a.slice(1,-1).map(r=>{const l=fi(o,r);return l&&l.title||"Untitled"})}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),M4=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,r,l)=>l?l.toUpperCase():r.toLowerCase()),Sg=o=>{const a=M4(o);return a.charAt(0).toUpperCase()+a.slice(1)},Bm=(...o)=>o.filter((a,r,l)=>!!a&&a.trim()!==""&&l.indexOf(a)===r).join(" ").trim(),R4=o=>{for(const a in o)if(a.startsWith("aria-")||a==="role"||a==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var j4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=et.forwardRef(({color:o="currentColor",size:a=24,strokeWidth:r=2,absoluteStrokeWidth:l,className:f="",children:u,iconNode:m,...p},g)=>et.createElement("svg",{ref:g,...j4,width:a,height:a,stroke:o,strokeWidth:l?Number(r)*24/Number(a):r,className:Bm("lucide",f),...!u&&!R4(p)&&{"aria-hidden":"true"},...p},[...m.map(([b,x])=>et.createElement(b,x)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=(o,a)=>{const r=et.forwardRef(({className:l,...f},u)=>et.createElement(z4,{ref:u,iconNode:a,className:Bm(`lucide-${k4(Sg(o))}`,`lucide-${o}`,l),...f}));return r.displayName=Sg(o),r};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]],P4=on("archive-restore",B4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],gd=on("archive",U4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],q4=on("bold",F4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],H4=on("book-open",I4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],G4=on("check",V4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Pm=on("chevron-left",Y4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],Z4=on("code",X4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],J1=on("copy",Q4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]],J4=on("crop",K4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],md=on("download",W4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Um=on("external-link",$4);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]],xd=on("file-code",ex);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Fm=on("file-text",tx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],ix=on("grip-vertical",nx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],rx=on("image",ax);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],lx=on("italic",ox);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],cx=on("layout-grid",sx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]],fx=on("list-ordered",ux);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],hx=on("list",dx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],gx=on("minimize-2",px);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],vx=on("moon",mx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],W1=on("pin",bx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],xx=on("plus",yx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],qm=on("rotate-ccw",wx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Im=on("search",Nx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ax=on("settings",Sx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Hm=on("sparkles",_x);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],Tx=on("sun",Cx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],vd=on("trash-2",Ex);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],Ox=on("underline",Lx);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],wd=on("x",Dx),kx=({mode:o,currentNode:a,stack:r,theme:l,trashAreaNode:f,onSetMode:u,onBack:m,onToggleTheme:p,onOpenSearch:g,onTitleChange:b,onOpenTrashForArea:x,onOpenCodeExport:A})=>o==="write"?null:q.jsxs("div",{className:"pb-topbar",children:[q.jsxs("div",{className:"pb-topbar-icons",children:[q.jsx("div",{className:"pb-topbar-icons-left",children:o==="archive"||o==="trash"?q.jsx("button",{className:"icon-btn",onClick:()=>u("board"),title:"Close view",children:q.jsx(wd,{size:18})}):r.length>1?q.jsx("button",{className:"icon-btn",onClick:m,title:"Back",children:q.jsx(Pm,{size:20})}):q.jsx("div",{style:{width:40}})}),q.jsxs("div",{className:"pb-topbar-icons-right",children:[q.jsx("button",{className:"icon-btn code-pdf-btn",onClick:A,title:"Download Project Code as PDF",children:q.jsx(xd,{size:18})}),q.jsx("button",{className:"icon-btn",onClick:p,title:l==="dark"?"Switch to light theme":"Switch to dark theme",children:l==="dark"?q.jsx(Tx,{size:17}):q.jsx(vx,{size:17})}),q.jsx("button",{className:"icon-btn",onClick:g,title:"Search notes",children:q.jsx(Im,{size:17})}),o==="board"&&q.jsxs(q.Fragment,{children:[q.jsx("button",{className:"icon-btn",onClick:x,title:"Recycle bin for this page",children:q.jsx(vd,{size:17})}),q.jsx("button",{className:"icon-btn",onClick:()=>u("archive"),title:"Archive for this page",children:q.jsx(gd,{size:17})})]})]})]}),q.jsx("div",{className:"pb-title-row",children:q.jsx("input",{className:"pb-title-input",value:o==="archive"?"Archive":o==="trash"?`Recycle Bin — ${f?f.title||"Untitled":"Home"}`:a.title,placeholder:"Untitled Note",disabled:a.id==="root"||o==="archive"||o==="trash",onChange:L=>b(L.target.value)})})]}),Ag=({node:o,isPinnedSection:a,onOpen:r,onLongPress:l,onDragStartItem:f,onDragOverItem:u,onDragEndItem:m})=>{const p=et.useRef(null),g=et.useRef(!1),[b,x]=et.useState(!1),A=et.useRef({x:0,y:0}),L=et.useRef(!1);et.useEffect(()=>()=>clearTimeout(p.current),[]);const w=(o.children||[]).filter(pe=>!pe.archived).length,F=Xu(o.content).slice(0,90),U=pe=>{pe.button===0&&(k(),A.current={x:pe.clientX,y:pe.clientY},g.current=!1,p.current=setTimeout(()=>{g.current=!0,l(o.id)},450))},k=()=>{p.current&&clearTimeout(p.current)},j=pe=>{if(g.current){g.current=!1;return}r(o.id)},ne=pe=>{k(),g.current=!0,x(!0),pe.dataTransfer.effectAllowed="move",pe.dataTransfer.setData("text/plain",o.id),f(o.id,a)},te=pe=>{pe.preventDefault(),pe.dataTransfer.dropEffect="move",u(o.id,a)},W=()=>{x(!1),m()};return q.jsxs("div",{draggable:!0,onDragStart:ne,onDragOver:te,onDragEnd:W,className:`note-card ${o.pinned?"pinned-glow":""} ${b?"dragging":""}`,"data-note-id":o.id,"data-pinned-section":a,onPointerDown:U,onPointerMove:pe=>{(Math.abs(pe.clientX-A.current.x)>8||Math.abs(pe.clientY-A.current.y)>8)&&k()},onPointerUp:k,onPointerLeave:k,onPointerCancel:k,onClick:j,children:[q.jsx("div",{className:"card-drag-handle",title:"Hold and drag to reorder note",onPointerDown:pe=>{pe.button===0&&(pe.stopPropagation(),pe.preventDefault(),k(),L.current=!0,g.current=!0,x(!0),pe.currentTarget.setPointerCapture(pe.pointerId),f(o.id,a))},onPointerMove:pe=>{var ye;if(!L.current)return;pe.stopPropagation();const ke=(ye=document.elementFromPoint(pe.clientX,pe.clientY))==null?void 0:ye.closest(".note-card");ke!=null&&ke.dataset.noteId&&u(ke.dataset.noteId,ke.dataset.pinnedSection==="true")},onPointerUp:pe=>{pe.stopPropagation(),L.current&&(L.current=!1,W())},onPointerCancel:()=>{L.current=!1,W()},onClick:pe=>{pe.stopPropagation(),g.current=!1},children:q.jsx(ix,{size:14})}),q.jsx("span",{className:`pin-emoji ${o.pinned?"pin-emoji-active":""}`,children:"📌"}),w>0&&q.jsx("div",{className:"count-badge",children:w}),q.jsx("div",{className:"card-pill",children:o.pinned?"PINNED NOTE":"NOTE"}),q.jsx("div",{className:"card-title",children:o.title||"Untitled"}),q.jsx("div",{className:"card-divider"}),q.jsx("div",{className:"card-body",children:F||"No written notes yet."})]})},Mx=({currentNode:o,onOpenNote:a,onLongPressNote:r,onAddChild:l,onUpdateTree:f})=>{const[u,m]=et.useState(null),[p,g]=et.useState(!1),b=et.useRef(null),{pinned:x,normal:A}=jm(o.children||[]),L=x.length+A.length,w=(k,j)=>{m(k),g(j),b.current=k},F=(k,j)=>{!u||u===k||p===j&&b.current!==k&&(b.current=k,f(ne=>{const te=fi(ne,o.id);te&&L4(te,u,k,j)}))},U=()=>{m(null),b.current=null};return q.jsxs(q.Fragment,{children:[q.jsx("div",{className:"board-scroll",children:q.jsx("div",{className:"board-inner",children:L===0?q.jsxs("div",{className:"board-empty",children:[q.jsx("div",{className:"empty-icon-circle",children:q.jsx(Fm,{size:28})}),q.jsx("p",{children:"No notes here yet"}),q.jsx("span",{className:"empty-sub",children:"Tap the floating + button to create a new note"})]}):q.jsxs(q.Fragment,{children:[x.length>0&&q.jsxs("div",{className:"section-block",children:[q.jsxs("div",{className:"section-header",children:[q.jsx(W1,{size:14,className:"pin-hdr-icon"}),q.jsxs("span",{children:["PINNED (",x.length,")"]}),q.jsx("div",{className:"section-hdr-line"})]}),q.jsx("div",{className:"cards-grid",children:x.map(k=>q.jsx(Ag,{node:k,isPinnedSection:!0,onOpen:a,onLongPress:r,onDragStartItem:w,onDragOverItem:F,onDragEndItem:U},k.id))})]}),A.length>0&&q.jsxs("div",{className:"section-block",children:[x.length>0&&q.jsxs("div",{className:"section-header",children:[q.jsxs("span",{children:["OTHER NOTES (",A.length,")"]}),q.jsx("div",{className:"section-hdr-line"})]}),q.jsx("div",{className:"cards-grid",children:A.map(k=>q.jsx(Ag,{node:k,isPinnedSection:!1,onOpen:a,onLongPress:r,onDragStartItem:w,onDragOverItem:F,onDragEndItem:U},k.id))})]})]})})}),q.jsx("button",{className:"fab-add",onClick:l,title:"Create Pin + (Add New Note)",children:q.jsx(xx,{size:24})})]})},Rx=({currentNode:o,tree:a,stack:r,onBack:l,onSetModeBoard:f,onTitleChange:u,onContentChange:m,onInsertNestedNote:p,onPopOutBubble:g,onNavigateToNote:b,onLongPressNote:x,onShowToast:A,onOpenCodeExport:L,onDownloadCurrentNotePdf:w})=>{const[F,U]=et.useState(!1),k=et.useRef(null),j=et.useRef(null),ne=et.useRef(null),te=et.useRef(!1),W=et.useRef(null);et.useEffect(()=>{k.current&&o&&((W.current!==o.id||k.current.innerHTML!==(o.content||""))&&(k.current.innerHTML=o.content||""),W.current=o.id,Ng(k.current,a))},[o.id,o.content]),et.useEffect(()=>()=>clearTimeout(ne.current),[]),et.useEffect(()=>{k.current&&a&&Ng(k.current,a)},[a]);const pe=et.useCallback(()=>{var ze;const X=j.current;if(!X)return;const Q=window.getSelection();if(!Q||Q.rangeCount===0)return;const le=Q.getRangeAt(0).cloneRange();le.collapse(!0);let ee=le.getClientRects()[0];if(!ee){const Be=document.createElement("span");Be.appendChild(document.createTextNode("​")),le.insertNode(Be),ee=Be.getBoundingClientRect(),(ze=Be.parentNode)==null||ze.removeChild(Be)}if(!ee||ee.top===0&&ee.bottom===0)return;const ue=96,re=84,Ce=window.innerHeight-ue;ee.bottom>Ce?X.scrollTop+=ee.bottom-Ce+24:ee.top<re&&(X.scrollTop-=re-ee.top+24)},[]),ke=()=>{if(!k.current)return;const X=k.current.innerHTML;m(X),requestAnimationFrame(pe)},ye=(X,Q=null)=>{k.current&&k.current.focus(),document.execCommand(X,!1,Q),ke()},oe=X=>{var ee,ue;const Q=(ue=(ee=X.target).closest)==null?void 0:ue.call(ee,".note-chip");if(!Q)return;const le=Q.getAttribute("data-note-id");le&&(te.current=!1,ne.current=setTimeout(()=>{te.current=!0,x(le)},450))},K=()=>{ne.current&&clearTimeout(ne.current)},ve=X=>{var le,ee;const Q=(ee=(le=X.target).closest)==null?void 0:ee.call(le,".note-chip");if(Q){if(X.preventDefault(),X.stopPropagation(),te.current){te.current=!1;return}const ue=Q.getAttribute("data-note-id");if(ue){if(!fi(a,ue)){A("This nested note was moved or deleted");return}b(ue)}}},E=X=>{if(!k.current||k.current.contains(X.target))return;k.current.focus();const Q=document.createRange();Q.selectNodeContents(k.current),Q.collapse(!1);const le=window.getSelection();le==null||le.removeAllRanges(),le==null||le.addRange(Q)},B=()=>{let X=null;try{X=window.prompt("Paste image URL (e.g. https://... or data:image...)")}catch{X=null}X&&ye("insertImage",X)};return q.jsxs("div",{className:"write-scroll",ref:j,onClick:E,children:[r.length>1&&q.jsx("button",{className:"icon-btn write-float-back",onClick:X=>{X.stopPropagation(),l()},title:"Back to parent note page",children:q.jsx(Pm,{size:20})}),q.jsx("button",{className:"icon-btn write-float-code",onClick:X=>{X.stopPropagation(),L()},title:"Download Project Codebase as PDF",children:q.jsx(xd,{size:18})}),q.jsx("button",{className:"icon-btn write-float-pdf",onClick:X=>{X.stopPropagation(),w()},title:"Download this Note as PDF",children:q.jsx(md,{size:18})}),q.jsx("button",{className:"icon-btn write-float-grid",onClick:X=>{X.stopPropagation(),f()},title:"View grid of nested notes inside this page",children:q.jsx(cx,{size:18})}),q.jsxs("div",{className:`write-page ${F?"glow-focus":""}`,children:[q.jsx("input",{className:"write-title-input",value:o.title,placeholder:"Untitled Note",disabled:o.id==="root",onChange:X=>u(X.target.value),onClick:X=>X.stopPropagation()}),q.jsx("div",{ref:k,className:"write-content",contentEditable:!0,suppressContentEditableWarning:!0,onInput:ke,onClick:ve,onPointerDown:oe,onPointerUp:K,onPointerLeave:K,onPointerCancel:K,onFocus:()=>U(!0),onBlur:()=>U(!1)})]}),q.jsxs("div",{className:"write-toolbar",onClick:X=>X.stopPropagation(),onMouseDown:X=>X.preventDefault(),children:[q.jsx("button",{className:"tb-btn",onClick:()=>ye("formatBlock","H1"),children:q.jsx("span",{style:{fontWeight:800,fontSize:13},children:"H1"})}),q.jsx("button",{className:"tb-btn",onClick:()=>ye("formatBlock","H2"),children:q.jsx("span",{style:{fontWeight:700,fontSize:13},children:"H2"})}),q.jsx("div",{className:"tb-sep"}),q.jsx("button",{className:"tb-btn",onClick:()=>ye("bold"),title:"Bold",children:q.jsx(q4,{size:16})}),q.jsx("button",{className:"tb-btn",onClick:()=>ye("italic"),title:"Italic",children:q.jsx(lx,{size:16})}),q.jsx("button",{className:"tb-btn",onClick:()=>ye("underline"),title:"Underline",children:q.jsx(Ox,{size:16})}),q.jsx("div",{className:"tb-sep"}),q.jsx("button",{className:"tb-btn",onClick:()=>ye("insertUnorderedList"),title:"Bullet List",children:q.jsx(hx,{size:16})}),q.jsx("button",{className:"tb-btn",onClick:()=>ye("insertOrderedList"),title:"Numbered List",children:q.jsx(fx,{size:16})}),q.jsx("div",{className:"tb-sep"}),q.jsx("button",{className:"tb-btn",onClick:B,title:"Insert Image",children:q.jsx(rx,{size:16})}),q.jsx("div",{className:"tb-sep"}),q.jsx("button",{className:"tb-btn accent-pin",onClick:p,title:"Insert a nested pinned note chip here",children:q.jsx(W1,{size:16})}),q.jsxs("button",{className:"tb-btn unique-bubble-pop",onClick:g,title:"Pop out this note into an editable floating bubble pin!",children:[q.jsx(Hm,{size:16,className:"sparkle-spin"}),q.jsx("span",{className:"bubble-pop-text",children:"Bubble Pin"})]})]})]})},H1={transparency:.92,bubblePopSize:64,expansionWidth:460,expansionHeight:420,cropEnabled:!1,cropTop:0,cropBottom:0,cropHeight:250},jx=({floatingNode:o,settings:a,onUpdateSettings:r,onUpdateNodeContent:l,onCopyNote:f,onShowToast:u,onClose:m})=>{const[p,g]=et.useState(!1),[b,x]=et.useState(!1),[A,L]=et.useState({x:window.innerWidth-90,y:window.innerHeight-200}),[w,F]=et.useState(null),U=et.useRef(null),k=et.useRef(o);k.current=o;const j=et.useRef({dragging:!1,moved:!1,startX:0,startY:0,origX:0,origY:0,panel:!1}),ne=et.useRef(null),te=et.useRef(null),W=et.useRef(null);if(et.useEffect(()=>{var E;g(!1),x(!1),(E=te.current)==null||E.close(),te.current=null,W.current=null},[o==null?void 0:o.id]),et.useEffect(()=>{const E=()=>{var X;L(Q=>({x:Math.max(8,Math.min(Q.x,window.innerWidth-a.bubblePopSize-8)),y:Math.max(8,Math.min(Q.y,window.innerHeight-a.bubblePopSize-8))}));const B=(X=U.current)==null?void 0:X.getBoundingClientRect();B&&F(Q=>Q&&{x:Math.max(8,Math.min(Q.x,window.innerWidth-B.width-8)),y:Math.max(8,Math.min(Q.y,window.innerHeight-B.height-8))})};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[a.bubblePopSize,a.expansionWidth,a.expansionHeight,p,b]),et.useEffect(()=>()=>{if(te.current)try{te.current.close()}catch{}},[]),et.useEffect(()=>{if(p&&ne.current&&o&&ne.current.innerHTML!==(o.content||"")&&(ne.current.innerHTML=o.content||""),o&&te.current&&W.current){const E=te.current.document.querySelector("h2");E&&(E.textContent=o.title||"Untitled"),W.current.innerHTML!==(o.content||"")&&(W.current.innerHTML=o.content||"")}},[p,o]),et.useEffect(()=>{var E;a.cropEnabled&&((E=ne.current)!=null&&E.parentElement)&&(ne.current.parentElement.scrollTop=a.cropTop)},[a.cropEnabled,a.cropTop,p,o==null?void 0:o.id]),!o)return null;const pe=E=>{var Q,le,ee;const B=E.currentTarget.classList.contains("float-panel-header");if(B&&E.target.closest("input, button"))return;const X=(Q=U.current)==null?void 0:Q.getBoundingClientRect();j.current={dragging:!0,moved:!1,startX:E.clientX,startY:E.clientY,origX:B&&X?X.left:A.x,origY:B&&X?X.top:A.y,panel:B},(ee=(le=E.currentTarget).setPointerCapture)==null||ee.call(le,E.pointerId)},ke=E=>{var ze;const B=j.current;if(!B.dragging)return;const X=E.clientX-B.startX,Q=E.clientY-B.startY;(Math.abs(X)>5||Math.abs(Q)>5)&&(B.moved=!0);const le=(ze=U.current)==null?void 0:ze.getBoundingClientRect(),ee=B.panel&&le?le.width:a.bubblePopSize,ue=B.panel&&le?le.height:a.bubblePopSize,re=Math.max(8,Math.min(B.origX+X,window.innerWidth-ee-8)),Ce=Math.max(8,Math.min(B.origY+Q,window.innerHeight-ue-8));(B.panel?F:L)({x:re,y:Ce})},ye=()=>{const E=j.current.moved;j.current.dragging=!1,!E&&!j.current.panel&&g(!0)},oe=E=>{o&&l(o.id,E.target.value,o.content)},K=()=>{ne.current&&o&&l(o.id,o.title,ne.current.innerHTML)},ve=async()=>{var E;if(o){if(!("documentPictureInPicture"in window)){u("Pop-out window requires desktop Chrome/Edge — using floating bubble pin!");return}try{const B=await window.documentPictureInPicture.requestWindow({width:Math.min(a.expansionWidth,480),height:Math.min(a.expansionHeight,520)});(E=te.current)==null||E.close(),te.current=B;const X=B.document.createElement("style");X.textContent=`
        body { margin:0; padding:18px; font-family:-apple-system,BlinkMacSystemFont,Inter,sans-serif; background: #171F45; color: #EDEFF7; }
        h2 { font-size:17px; font-weight:800; margin:0 0 12px 0; color: #FFC966; }
        .pip-body { font-size:14px; line-height:1.6; max-height:360px; overflow-y:auto; outline: none; }
        .pip-body img { max-width:100%; border-radius:8px; }
        .pip-btn { margin-top:14px; padding:8px 16px; border-radius:10px; border:none; background:#3A5FE0; color:#fff; font-weight:600; cursor:pointer; }
      `,B.document.head.appendChild(X);const Q=B.document.createElement("h2");Q.textContent=o.title||"Untitled";const le=B.document.createElement("div");le.className="pip-body",le.innerHTML=o.content||"",le.contentEditable="true",W.current=le,le.oninput=()=>{const ue=k.current;ue&&l(ue.id,ue.title,le.innerHTML)};const ee=B.document.createElement("button");ee.className="pip-btn",ee.textContent="Copy content",ee.onclick=()=>{var Ce;const ue=k.current;if(!ue)return;const re=`${ue.title||"Untitled"}

${Xu(ue.content)}`;(Ce=B.navigator.clipboard)==null||Ce.writeText(re)},B.document.body.appendChild(Q),B.document.body.appendChild(le),B.document.body.appendChild(ee),B.addEventListener("pagehide",()=>{te.current=null,W.current=null}),g(!1)}catch{u("Couldn't open pop-out window")}}};return q.jsxs(q.Fragment,{children:[!p&&q.jsxs("div",{className:"float-bubble-unique",style:{left:A.x,top:A.y,width:a.bubblePopSize,height:a.bubblePopSize,opacity:a.transparency},onPointerDown:pe,onPointerMove:ke,onPointerUp:ye,onPointerCancel:()=>{j.current.dragging=!1},children:[q.jsx("div",{className:"bubble-glow-ring"}),q.jsx("span",{className:"float-bubble-pin-icon",children:"📌"}),q.jsx("span",{className:"float-bubble-title-text",children:(o.title||"Untitled").slice(0,10)})]}),p&&q.jsxs("div",{className:"float-panel-editable",ref:U,style:{opacity:a.transparency,width:`min(90vw, ${a.expansionWidth}px)`,height:`min(85dvh, ${a.expansionHeight}px)`,maxWidth:`min(94vw, ${a.expansionWidth}px)`,maxHeight:`min(85dvh, ${a.expansionHeight}px)`,...w?{left:w.x,top:w.y,right:"auto",bottom:"auto"}:{}},children:[q.jsxs("div",{className:"float-panel-header",onPointerDown:pe,onPointerMove:ke,onPointerUp:()=>{j.current.dragging=!1},onPointerCancel:()=>{j.current.dragging=!1},children:[q.jsx("input",{className:"float-panel-title-input",value:o.title,placeholder:"Untitled note...",onChange:oe}),q.jsxs("div",{className:"float-panel-actions",children:[q.jsx("button",{className:`icon-btn mini ${a.cropEnabled?"active-accent":""}`,onClick:()=>r({cropEnabled:!a.cropEnabled}),title:"Toggle Viewport Crop",children:q.jsx(J4,{size:15})}),q.jsx("button",{className:`icon-btn mini ${b?"active-accent":""}`,onClick:()=>x(!b),title:"Bubble Settings",children:q.jsx(Ax,{size:15})}),q.jsx("button",{className:"icon-btn mini",onClick:()=>f(o),title:"Copy Note",children:q.jsx(J1,{size:15})}),q.jsx("button",{className:"icon-btn mini",onClick:ve,title:"Open desktop Picture-in-Picture window",children:q.jsx(Um,{size:15})}),q.jsx("button",{className:"icon-btn mini",onClick:()=>{g(!1),x(!1)},title:"Minimize to Bubble",children:q.jsx(gx,{size:15})}),q.jsx("button",{className:"icon-btn mini",onClick:m,title:"Close Bubble",children:q.jsx(wd,{size:15})})]})]}),b&&q.jsxs("div",{className:"bubble-settings-tray",children:[q.jsxs("div",{className:"tray-title",children:[q.jsx("span",{children:"Bubble Pin Customizer"}),q.jsxs("button",{className:"reset-btn",onClick:()=>r(H1),children:[q.jsx(qm,{size:12})," Reset"]})]}),q.jsxs("div",{className:"setting-group",children:[q.jsxs("label",{children:["Transparency (",Math.round(a.transparency*100),"%)"]}),q.jsx("input",{type:"range",min:"0.2",max:"1.0",step:"0.05",value:a.transparency,onChange:E=>r({transparency:parseFloat(E.target.value)})})]}),q.jsxs("div",{className:"setting-group",children:[q.jsxs("label",{children:["Bubble Pop Size (",a.bubblePopSize,"px)"]}),q.jsx("div",{className:"preset-pills",children:[48,64,80,96].map(E=>q.jsx("button",{className:`preset-pill ${a.bubblePopSize===E?"selected":""}`,onClick:()=>r({bubblePopSize:E}),children:E===48?"S":E===64?"M":E===80?"L":"XL"},E))})]}),q.jsxs("div",{className:"setting-group",children:[q.jsxs("label",{children:["Expansion Size (",a.expansionWidth,"x",a.expansionHeight,"px)"]}),q.jsxs("div",{className:"setting-dual",children:[q.jsxs("div",{children:[q.jsx("span",{children:"Width"}),q.jsx("input",{type:"range",min:"300",max:"720",step:"20",value:a.expansionWidth,onChange:E=>r({expansionWidth:parseInt(E.target.value)})})]}),q.jsxs("div",{children:[q.jsx("span",{children:"Height"}),q.jsx("input",{type:"range",min:"260",max:"650",step:"20",value:a.expansionHeight,onChange:E=>r({expansionHeight:parseInt(E.target.value)})})]})]})]}),q.jsxs("div",{className:"setting-group",children:[q.jsxs("div",{className:"flex-between",children:[q.jsx("label",{children:"Enable Crop Masking"}),q.jsx("input",{type:"checkbox",checked:a.cropEnabled,onChange:E=>r({cropEnabled:E.target.checked})})]}),a.cropEnabled&&q.jsxs("div",{className:"setting-dual",children:[q.jsxs("div",{children:[q.jsxs("span",{children:["Top Offset (",a.cropTop,"px)"]}),q.jsx("input",{type:"range",min:"0",max:"200",value:a.cropTop,onChange:E=>r({cropTop:parseInt(E.target.value)})})]}),q.jsxs("div",{children:[q.jsxs("span",{children:["Visible Height (",a.cropHeight,"px)"]}),q.jsx("input",{type:"range",min:"100",max:"400",value:a.cropHeight,onChange:E=>r({cropHeight:parseInt(E.target.value)})})]})]})]})]}),q.jsx("div",{className:`float-panel-scroll-container ${a.cropEnabled?"cropped-mask":""}`,style:a.cropEnabled?{height:`${a.cropHeight}px`,maxHeight:`${a.cropHeight}px`,flex:"0 1 auto"}:{},children:q.jsx("div",{ref:ne,className:"float-panel-body-editable",contentEditable:!0,suppressContentEditableWarning:!0,onInput:K,placeholder:"Start writing inside floating bubble..."})})]})]})},zx=({longPressNode:o,onClose:a,onTogglePin:r,onCopyNote:l,onDownloadPdf:f,onArchive:u,onDelete:m,onOpenCodeExport:p})=>o?q.jsx("div",{className:"sheet-backdrop",onClick:a,children:q.jsxs("div",{className:"sheet",onClick:g=>g.stopPropagation(),children:[q.jsx("div",{className:"sheet-title",children:o.title||"Untitled Note"}),q.jsxs("button",{className:`sheet-item ${o.pinned?"active-pin":""}`,onClick:()=>r(o.id),children:[q.jsx(W1,{size:16}),o.pinned?"Unpin note (Return to normal position)":"Pin note (Move to top by time pinned)"]}),q.jsxs("button",{className:"sheet-item",onClick:()=>l(o),children:[q.jsx(J1,{size:16})," Copy content"]}),q.jsxs("button",{className:"sheet-item",onClick:()=>f(o),children:[q.jsx(md,{size:16})," Download Note as PDF"]}),p&&q.jsxs("button",{className:"sheet-item",onClick:()=>{a(),p()},children:[q.jsx(xd,{size:16})," Download Project Code as PDF"]}),q.jsxs("button",{className:"sheet-item",onClick:()=>u(o.id),children:[q.jsx(gd,{size:16})," Archive note"]}),q.jsxs("button",{className:"sheet-item danger",onClick:()=>m(o.id),children:[q.jsx(vd,{size:16})," Delete to Recycle Bin"]}),q.jsx("button",{className:"sheet-cancel",onClick:a,children:"Cancel"})]})}):null,Bx=({tree:o,isOpen:a,onClose:r,onSelectResult:l})=>{const[f,u]=et.useState(""),m=et.useRef(null);et.useEffect(()=>{if(a){const g=setTimeout(()=>{var b;return(b=m.current)==null?void 0:b.focus()},50);return()=>clearTimeout(g)}else u("")},[a]);const p=et.useMemo(()=>{const g=f.trim();if(!g||!o)return[];const b=[];return zm(o,g,[],b),b.slice(0,60)},[f,o]);return a?q.jsx("div",{className:"search-backdrop",onClick:r,children:q.jsxs("div",{className:"search-panel",onClick:g=>g.stopPropagation(),children:[q.jsxs("div",{className:"search-input-row",children:[q.jsx(Im,{size:18}),q.jsx("input",{ref:m,className:"search-input",placeholder:"Search all notes...",value:f,onChange:g=>u(g.target.value),onKeyDown:g=>{g.key==="Escape"&&r(),g.key==="Enter"&&p.length>0&&l(p[0],f.trim())}}),q.jsx("button",{className:"search-close-btn",onClick:r,children:q.jsx(wd,{size:16})})]}),q.jsx("div",{className:"search-results",children:f.trim()===""?q.jsx("div",{className:"search-empty",children:"Type any word to find notes instantly"}):p.length===0?q.jsxs("div",{className:"search-empty",children:["No notes match “",f.trim(),"”"]}):p.map(g=>{const b=D4(o,g.path),x=b.length?`Home / ${b.join(" / ")}`:"Home",A=f.trim();let L=g.title;const w=g.title.toLowerCase().indexOf(A.toLowerCase());return g.matchType==="title"&&w!==-1&&(L=q.jsxs(q.Fragment,{children:[g.title.slice(0,w),q.jsx("mark",{className:"result-hit",children:g.title.slice(w,w+A.length)}),g.title.slice(w+A.length)]})),q.jsxs("button",{className:"search-result-item",onClick:()=>l(g,A),children:[q.jsxs("div",{className:"search-result-head",children:[q.jsx("div",{className:"search-result-title",children:L}),g.pinned&&q.jsx("span",{className:"search-result-tag",children:"PINNED"}),g.archived&&q.jsx("span",{className:"search-result-tag",children:"ARCHIVED"})]}),g.snippet&&q.jsx("div",{className:"search-result-snippet",children:(()=>{const F=g.snippet.toLowerCase().indexOf(A.toLowerCase());return F<0?g.snippet:q.jsxs(q.Fragment,{children:[g.snippet.slice(0,F),q.jsx("mark",{className:"result-hit",children:g.snippet.slice(F,F+A.length)}),g.snippet.slice(F+A.length)]})})()}),q.jsx("div",{className:"search-result-path",children:x})]},g.id)})})]})}):null},Px=({mode:o,currentNode:a,tree:r,trash:l,trashAreaId:f,onRestoreArchived:u,onRestoreTrash:m,onPermanentDelete:p,onDeleteNote:g})=>{if(o==="archive"){const x=(a.children||[]).filter(A=>A.archived);return q.jsx("div",{className:"board-scroll",children:q.jsx("div",{className:"board-inner",children:x.length===0?q.jsx("div",{className:"board-empty",children:q.jsx("p",{children:"No archived notes in this page"})}):x.map(A=>{const L=(A.children||[]).filter(w=>!w.archived).length;return q.jsxs("div",{className:"archive-row",children:[q.jsxs("div",{className:"archive-row-title",children:[A.title||"Untitled Note",q.jsxs("span",{children:[L," nested note",L===1?"":"s"," inside"]})]}),q.jsx("button",{className:"archive-mini-btn",onClick:()=>u(A.id),title:"Restore to active page",children:q.jsx(P4,{size:16})}),q.jsx("button",{className:"archive-mini-btn danger",onClick:()=>g(A.id),title:"Move to Recycle Bin",children:q.jsx(vd,{size:16})})]},A.id)})})})}const b=l.filter(x=>x.parentId===f||f==="root"&&!fi(r,x.parentId));return q.jsx("div",{className:"board-scroll",children:q.jsx("div",{className:"board-inner",children:b.length===0?q.jsx("div",{className:"board-empty",children:q.jsx("p",{children:"Recycle bin is empty for this note area"})}):b.map(x=>q.jsxs("div",{className:"archive-row",children:[q.jsxs("div",{className:"archive-row-title",children:[x.node.title||"Untitled Note",x.node.pinned&&q.jsx("span",{className:"pinned-tag",children:"PINNED NOTE"}),q.jsxs("span",{children:["Deleted ",new Date(x.deletedAt).toLocaleDateString(),x.node.children&&x.node.children.length>0?` · ${x.node.children.length} nested note${x.node.children.length===1?"":"s"} inside will restore too`:""]})]}),q.jsx("button",{className:"archive-mini-btn",onClick:()=>m(x.id),title:"Restore to original parent page",children:q.jsx(qm,{size:16})}),q.jsx("button",{className:"archive-mini-btn danger",onClick:()=>p(x.id),title:"Delete forever",children:q.jsx(vd,{size:16})})]},x.id))})})},_g=`import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { jsPDF } from 'jspdf';
import { NoteNode, TrashEntry, BubbleSettings, ViewMode, ThemeMode } from './types';
import { loadAppData, saveAppData } from './utils/storage';
import {
  createRootNode,
  cloneTree,
  findNode,
  findParentNode,
  findPathIds,
  deleteNodeById,
  makeChipHtml,
  contentHasChip,
  generateUid,
  stripHtml,
} from './utils/tree';
import { TopBar } from './components/TopBar';
import { BoardView } from './components/BoardView';
import { EditorView } from './components/EditorView';
import { BubblePin, DEFAULT_BUBBLE_SETTINGS } from './components/BubblePin';
import { ActionSheet } from './components/ActionSheet';
import { SearchModal } from './components/SearchModal';
import { ArchiveTrashView } from './components/ArchiveTrashView';
import { CodeExportModal } from './components/CodeExportModal';

export default function App() {
  const [tree, setTree] = useState<NoteNode | null>(null);
  const [trash, setTrash] = useState<TrashEntry[]>([]);
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [bubbleSettings, setBubbleSettings] = useState<BubbleSettings>(DEFAULT_BUBBLE_SETTINGS);
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [saveError, setSaveError] = useState(false);

  const [stack, setStack] = useState<string[]>(['root']);
  const [mode, setMode] = useState<ViewMode>('board');

  const [longPressId, setLongPressId] = useState<string | null>(null);
  const [floatingId, setFloatingId] = useState<string | null>(null);

  const [toast, setToast] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [codeExportOpen, setCodeExportOpen] = useState(false);
  const [trashAreaId, setTrashAreaId] = useState<string>('root');

  const toastTimeout = useRef<any>(null);

  // Load initial app data
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await loadAppData();
        if (cancelled) return;
        if (data) {
          setTree(data.tree || createRootNode());
          setTrash(data.trash || []);
          setTheme(data.theme || 'dark');
          if (data.bubbleSettings) {
            setBubbleSettings({ ...DEFAULT_BUBBLE_SETTINGS, ...data.bubbleSettings });
          }
        } else {
          setTree(createRootNode());
        }
      } catch (err) {
        if (!cancelled) setLoadError(true);
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // Sync theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Save changes to storage
  useLayoutEffect(() => {
    if (!loaded || !tree || loadError) return;
    // localStorage is written synchronously before the optional remote save.
    void saveAppData({ tree, trash, theme, bubbleSettings }).then((saved) => {
      setSaveError(!saved);
    });
  }, [tree, trash, theme, bubbleSettings, loaded, loadError]);

  useEffect(() => {
    return () => clearTimeout(toastTimeout.current);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToast(null), 1800);
  }, []);

  const updateTree = useCallback((mutator: (tree: NoteNode) => void) => {
    setTree((prev) => {
      if (!prev) return createRootNode();
      const next = cloneTree(prev);
      mutator(next);
      return next;
    });
  }, []);

  const currentId = stack[stack.length - 1] || 'root';
  const currentNode = tree ? findNode(tree, currentId) || tree : null;
  const longPressNode = tree && longPressId ? findNode(tree, longPressId) : null;
  const floatingNode = tree && floatingId ? findNode(tree, floatingId) : null;
  const trashAreaNode = tree ? findNode(tree, trashAreaId) : null;

  // Add new note
  const handleAddChild = () => {
    const newId = generateUid();
    updateTree((t) => {
      const parent = findNode(t, currentId) || t;
      if (!parent.children) parent.children = [];
      parent.children.push({
        id: newId,
        title: 'Untitled Note',
        content: '',
        archived: false,
        pinned: false,
        pinnedAt: null,
        order: parent.children.length,
        children: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
    });
    showToast('New note created');
  };

  // Insert a nested pinned note chip into the editor writing page
  const handleInsertNestedNote = () => {
    const newId = generateUid();
    const title = 'Untitled Note';
    updateTree((t) => {
      const parent = findNode(t, currentId) || t;
      if (!parent.children) parent.children = [];
      parent.children.push({
        id: newId,
        title,
        content: '',
        archived: false,
        pinned: false,
        pinnedAt: null,
        order: parent.children.length,
        children: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      parent.content = (parent.content || '') + makeChipHtml(newId, title, false) + '<br>';
      parent.updatedAt = Date.now();
    });
    showToast('Nested note inserted');
  };

  const handleOpenNote = (id: string) => {
    const path = tree && findPathIds(tree, id);
    if (!path) return;
    setMode('write');
    setStack(path);
  };

  const handleBack = () => {
    if (stack.length <= 1) return;
    const next = stack.slice(0, -1);
    setStack(next);
    if (next[next.length - 1] === 'root') setMode('board');
  };

  // Toggle Pin Note with hierarchy of importance timestamp
  const handleTogglePin = (id: string) => {
    const nowPinned = !tree || !findNode(tree, id)?.pinned;
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.pinned = !node.pinned;
        node.pinnedAt = node.pinned ? Date.now() : null;
      }
    });
    setLongPressId(null);
    showToast(nowPinned ? 'Pinned to top of page' : 'Unpinned — returned to normal list');
  };

  // Copy note content
  const handleCopyNote = async (node: NoteNode) => {
    const text = \`\${node.title || 'Untitled Note'}\\n\\n\${stripHtml(node.content)}\`;
    let success = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        success = true;
      }
    } catch (e) {
      success = false;
    }
    if (!success) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      try {
        success = document.execCommand('copy');
      } catch (e) {
        success = false;
      }
      document.body.removeChild(ta);
    }
    showToast(success ? 'Copied note content' : 'Could not copy note');
    setLongPressId(null);
  };

  // Download Note PDF helper
  const handleDownloadPdf = async (node: NoteNode) => {
    showToast('Generating PDF...');
    try {
      const doc = new jsPDF({ unit: 'pt', format: 'a4' });
      const marginX = 48;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const maxWidth = pageWidth - marginX * 2;
      let y = 60;

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(20);
      const titleLines = doc.splitTextToSize(node.title || 'Untitled Note', maxWidth);
      titleLines.forEach((line: string) => {
        if (y > pageHeight - 50) { doc.addPage(); y = 60; }
        doc.text(line, marginX, y);
        y += 24;
      });
      y += 16;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      const bodyText = stripHtml(node.content) || ' ';
      const bodyLines = doc.splitTextToSize(bodyText, maxWidth);
      const lineHeight = 18;

      bodyLines.forEach((line: string) => {
        if (y > pageHeight - 50) {
          doc.addPage();
          y = 60;
        }
        doc.text(line, marginX, y);
        y += lineHeight;
      });

      const fileName = (node.title || 'note').replace(/[^a-z0-9\\-_ ]/gi, '').trim() || 'note';
      doc.save(\`\${fileName}.pdf\`);
      showToast('PDF downloaded');
    } catch (e) {
      showToast('Could not generate PDF');
    }
    setLongPressId(null);
  };

  // Move note to Recycle Bin (Trash)
  const handleDeleteNote = (id: string) => {
    if (!tree) return;
    const nextTree = cloneTree(tree);
    const parent = findParentNode(nextTree, id);
    const nodeToDelete = findNode(nextTree, id);
    if (!nodeToDelete) return;

    deleteNodeById(nextTree, id);
    setTree(nextTree);

    setTrash((prev) => [
      {
        id: generateUid(),
        node: cloneTree(nodeToDelete),
        parentId: parent ? parent.id : 'root',
        deletedAt: Date.now(),
      },
      ...prev,
    ]);

    setLongPressId(null);
    showToast('Moved note to Recycle Bin');
  };

  // Restore Note from Recycle Bin to original parent page
  const handleRestoreFromTrash = (trashId: string) => {
    const entry = trash.find((t) => t.id === trashId);
    if (!entry || !tree) return;

    const nextTree = cloneTree(tree);
    let parent = findNode(nextTree, entry.parentId);
    if (!parent) parent = nextTree;

    const restoredNode = cloneTree(entry.node);
    if (!parent.children) parent.children = [];
    parent.children.push(restoredNode);

    // Re-embed chip placeholder into parent note writing content if missing
    if (!contentHasChip(parent.content, restoredNode.id)) {
      parent.content = (parent.content || '') + makeChipHtml(restoredNode.id, restoredNode.title, restoredNode.pinned) + '<br>';
    }

    setTree(nextTree);
    setTrash((prev) => prev.filter((t) => t.id !== trashId));

    // When parent page is clicked/navigated to, lands on parent writing page containing the restored note chip
    showToast(restoredNode.pinned ? 'Restored pinned note to parent page' : 'Restored note to parent page');
  };

  const handlePermanentDelete = (trashId: string) => {
    setTrash((prev) => prev.filter((t) => t.id !== trashId));
    showToast('Permanently deleted');
  };

  // Archive Note
  const handleArchiveNote = (id: string) => {
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.archived = true;
      }
    });
    setLongPressId(null);
    showToast('Archived note');
  };

  // Restore Archived Note
  const handleRestoreArchived = (id: string) => {
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.archived = false;
        const parent = findParentNode(t, id);
        if (parent && !contentHasChip(parent.content, id)) {
          parent.content = (parent.content || '') + makeChipHtml(id, node.title, node.pinned) + '<br>';
        }
      }
    });
    showToast('Restored note to parent page');
  };

  // Title / Content updates
  const handleTitleChange = (newTitle: string) => {
    updateTree((t) => {
      const node = findNode(t, currentId);
      if (node) {
        node.title = newTitle;
        node.updatedAt = Date.now();
      }
    });
  };

  const handleContentChange = (newHtml: string) => {
    updateTree((t) => {
      const node = findNode(t, currentId);
      if (node) {
        node.content = newHtml;
        node.updatedAt = Date.now();
      }
    });
  };

  const handleUpdateNodeContentDirect = (id: string, title: string, content: string) => {
    updateTree((t) => {
      const node = findNode(t, id);
      if (node) {
        node.title = title;
        node.content = content;
        node.updatedAt = Date.now();
      }
    });
  };

  // Search result selection - builds path stack to parent writing page
  const handleSelectSearchResult = (result: any) => {
    setStack(result.path);
    setMode('write');
    setSearchOpen(false);
  };

  if (loadError) {
    return <div className="pb-shell pb-loading"><span>Saved notes could not be read. Your stored data has been left unchanged. Back it up before repairing the storage record, then reload.</span></div>;
  }

  if (!loaded || !tree || !currentNode) {
    return (
      <div className="pb-shell pb-loading">
        <span>Loading Pinboard Notes...</span>
      </div>
    );
  }

  return (
    <div className="pb-shell">
      {/* Top Header */}
      <TopBar
        mode={mode}
        currentNode={currentNode}
        stack={stack}
        theme={theme}
        trashAreaNode={trashAreaNode}
        onSetMode={setMode}
        onBack={handleBack}
        onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onOpenSearch={() => setSearchOpen(true)}
        onTitleChange={handleTitleChange}
        onOpenTrashForArea={() => {
          setTrashAreaId(currentId);
          setMode('trash');
        }}
        onOpenCodeExport={() => setCodeExportOpen(true)}
      />

      {/* Main Board View */}
      {mode === 'board' && (
        <BoardView
          currentNode={currentNode}
          onOpenNote={handleOpenNote}
          onLongPressNote={setLongPressId}
          onAddChild={handleAddChild}
          onUpdateTree={updateTree}
        />
      )}

      {/* Main Editor View */}
      {mode === 'write' && (
        <EditorView
          currentNode={currentNode}
          tree={tree}
          stack={stack}
          onBack={handleBack}
          onSetModeBoard={() => setMode('board')}
          onTitleChange={handleTitleChange}
          onContentChange={handleContentChange}
          onInsertNestedNote={handleInsertNestedNote}
          onPopOutBubble={() => setFloatingId(currentId)}
          onNavigateToNote={handleOpenNote}
          onLongPressNote={setLongPressId}
          onShowToast={showToast}
          onOpenCodeExport={() => setCodeExportOpen(true)}
          onDownloadCurrentNotePdf={() => currentNode && handleDownloadPdf(currentNode)}
        />
      )}

      {/* Archive & Recycle Bin Views */}
      {(mode === 'archive' || mode === 'trash') && (
        <ArchiveTrashView
          mode={mode}
          currentNode={currentNode}
          tree={tree}
          trash={trash}
          trashAreaId={trashAreaId}
          onRestoreArchived={handleRestoreArchived}
          onRestoreTrash={handleRestoreFromTrash}
          onPermanentDelete={handlePermanentDelete}
          onDeleteNote={handleDeleteNote}
        />
      )}

      {/* Editable Floating Bubble Pin */}
      <BubblePin
        floatingNode={floatingNode}
        settings={bubbleSettings}
        onUpdateSettings={(newSettings) =>
          setBubbleSettings((prev) => ({ ...prev, ...newSettings }))
        }
        onUpdateNodeContent={handleUpdateNodeContentDirect}
        onCopyNote={handleCopyNote}
        onShowToast={showToast}
        onClose={() => setFloatingId(null)}
      />

      {/* Long-Press Action Sheet */}
      <ActionSheet
        longPressNode={longPressNode}
        onClose={() => setLongPressId(null)}
        onTogglePin={handleTogglePin}
        onCopyNote={handleCopyNote}
        onDownloadPdf={handleDownloadPdf}
        onArchive={handleArchiveNote}
        onDelete={handleDeleteNote}
        onOpenCodeExport={() => setCodeExportOpen(true)}
      />

      {/* Global Search Modal */}
      <SearchModal
        tree={tree}
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectResult={handleSelectSearchResult}
      />

      {/* Codebase PDF & Source Export Modal */}
      <CodeExportModal
        isOpen={codeExportOpen}
        onClose={() => setCodeExportOpen(false)}
        onShowToast={showToast}
      />

      {/* Notification Toast */}
      {(saveError || toast) && <div className="toast">{saveError ? 'Could not save notes. Keep this page open and free browser storage.' : toast}</div>}
    </div>
  );
}
`,Cg=`import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`,Tg=`export interface NoteNode {
  id: string;
  title: string;
  content: string;
  archived: boolean;
  pinned: boolean;
  pinnedAt?: number | null; // Timestamp when note was pinned (for hierarchy ordering)
  order?: number;           // Manual sorting index within its parent container
  children: NoteNode[];
  createdAt?: number;
  updatedAt?: number;
}

export interface TrashEntry {
  id: string;
  node: NoteNode;
  parentId: string;
  deletedAt: number;
}

export interface BubbleSettings {
  transparency: number;     // 0.2 to 1.0 (opacity)
  bubblePopSize: number;    // Diameter in px (48 to 96)
  expansionWidth: number;   // In px (320 to 720) or percentage
  expansionHeight: number;  // In px or vh (280 to 600)
  cropEnabled: boolean;     // Whether viewport cropping is active
  cropTop: number;          // Crop inset top in px
  cropBottom: number;       // Crop inset bottom in px
  cropHeight: number;       // Cropped visible window height
}

export type ViewMode = 'board' | 'write' | 'archive' | 'trash';
export type ThemeMode = 'dark' | 'light';

export interface SearchResult {
  id: string;
  title: string;
  path: string[];
  archived: boolean;
  pinned: boolean;
  matchType: 'title' | 'content';
  snippet: string;
}
`,Eg=`/// <reference types="vite/client" />

declare module '*?raw' {
  const content: string;
  export default content;
}
`,Lg=`@import "tailwindcss";

/* The original font families, served locally for reliable static hosting. */
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url('../public/fonts/Inter-variable.ttf') format('truetype');
}
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 200 800;
  font-display: swap;
  src: url('../public/fonts/PlusJakartaSans-variable.ttf') format('truetype');
}

* {
  box-sizing: border-box;
}

/* Theme variables */
:root {
  --bg1: #0A1024;
  --bg2: #131B3B;
  --bg3: #1B2657;
  --dot: rgba(255, 255, 255, 0.05);
  --text: #EDEFF7;
  --text-dim: #A9B0CE;
  --text-faint: #6B759C;
  --placeholder: #545E86;
  --card-bg: rgba(255, 255, 255, 0.045);
  --card-bg-hover: rgba(255, 255, 255, 0.075);
  --card-border: rgba(255, 255, 255, 0.09);
  --icon-bg: rgba(255, 255, 255, 0.05);
  --icon-border: rgba(255, 255, 255, 0.09);
  --icon-bg-hover: rgba(255, 255, 255, 0.12);
  --accent1: #3A5FE0;
  --accent2: #1E3FA0;
  --accent-shadow: rgba(46, 79, 224, 0.45);
  --pill-bg: rgba(58, 95, 224, 0.16);
  --pill-border: rgba(94, 127, 255, 0.35);
  --pill-text: #9CB0FF;
  --divider: rgba(255, 255, 255, 0.09);
  --sheet-bg: #171F45;
  --sheet-border: rgba(255, 255, 255, 0.12);
  --danger: #FF8B8B;
  --danger-bg: rgba(224, 58, 58, 0.16);
  --pin-glow: rgba(255, 196, 84, 0.35);
  --pin-border: rgba(255, 201, 102, 0.55);
  --pin-active: #FFC966;
  --toast-bg: rgba(23, 31, 69, 0.95);
  --toolbar-bg: rgba(19, 27, 59, 0.92);
  --caret: #7C9BFF;
  --glow-color: rgba(108, 140, 255, 0.18);
  --badge-ring: #131B3B;
  --highlight-bg: #FFC966;
  --highlight-text: #1A1024;
}

[data-theme="light"] {
  --bg1: #F3EAD9;
  --bg2: #F6EFE1;
  --bg3: #EFE1C8;
  --dot: rgba(32, 36, 28, 0.045);
  --text: #20241C;
  --text-dim: #5B5748;
  --text-faint: #9A9280;
  --placeholder: #BDB39C;
  --card-bg: rgba(255, 255, 255, 0.76);
  --card-bg-hover: rgba(255, 255, 255, 0.96);
  --card-border: rgba(32, 36, 28, 0.09);
  --icon-bg: rgba(32, 36, 28, 0.05);
  --icon-border: rgba(32, 36, 28, 0.09);
  --icon-bg-hover: rgba(32, 36, 28, 0.12);
  --accent1: #E8823D;
  --accent2: #C9631F;
  --accent-shadow: rgba(232, 130, 61, 0.40);
  --pill-bg: rgba(76, 91, 62, 0.12);
  --pill-border: rgba(76, 91, 62, 0.35);
  --pill-text: #4C5B3E;
  --divider: rgba(32, 36, 28, 0.08);
  --sheet-bg: #FBF5EA;
  --sheet-border: rgba(32, 36, 28, 0.12);
  --danger: #C0392B;
  --danger-bg: rgba(192, 57, 43, 0.10);
  --pin-glow: rgba(232, 130, 61, 0.35);
  --pin-border: rgba(232, 130, 61, 0.55);
  --pin-active: #C9631F;
  --toast-bg: rgba(32, 36, 28, 0.92);
  --toolbar-bg: rgba(246, 239, 225, 0.94);
  --caret: #C9631F;
  --glow-color: rgba(232, 130, 61, 0.18);
  --badge-ring: #F6EFE1;
  --highlight-bg: #E8823D;
  --highlight-text: #FBF5EA;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background: var(--bg1);
  color: var(--text);
}

.pb-shell {
  height: 100vh;
  height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 1px 1px, var(--dot) 1px, transparent 1px),
    linear-gradient(160deg, var(--bg1) 0%, var(--bg2) 45%, var(--bg3) 100%);
  background-size: 7px 7px, 100% 100%;
  transition: background 0.4s ease, color 0.4s ease;
}

.pb-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-faint);
  font-weight: 600;
}

/* Header & TopBar */
.pb-topbar {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px 12px 18px;
  flex-shrink: 0;
  position: relative;
  z-index: 5;
}

.pb-topbar-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.pb-topbar-icons-left,
.pb-topbar-icons-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.icon-btn {
  width: 40px;
  height: 40px;
  border-radius: 13px;
  border: 1px solid var(--icon-border);
  background: var(--icon-bg);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-dim);
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.icon-btn:hover {
  background: var(--icon-bg-hover);
  color: var(--text);
}

.icon-btn.mini {
  width: 32px;
  height: 32px;
  border-radius: 9px;
}

.icon-btn.active-accent {
  background: var(--pill-bg);
  border-color: var(--pill-border);
  color: var(--pill-text);
}

.pb-title-row {
  display: flex;
}

.pb-title-input {
  flex: 1;
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 22px;
  border: none;
  background: transparent;
  outline: none;
  color: var(--text);
}

/* Board View & Sections */
.board-scroll {
  flex: 1;
  overflow-y: auto;
  position: relative;
  z-index: 2;
}

.board-inner {
  max-width: 640px;
  margin: 0 auto;
  padding: 8px 18px 90px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.board-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-top: 100px;
  color: var(--text-faint);
  text-align: center;
}

.empty-icon-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dim);
}

.board-empty p {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  color: var(--text);
}

.empty-sub {
  font-size: 13px;
  color: var(--text-faint);
}

/* Section headers for hierarchy of importance */
.section-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  color: var(--pin-active);
}

.pin-hdr-icon {
  color: var(--pin-active);
}

.section-hdr-line {
  flex: 1;
  height: 1px;
  background: var(--divider);
}

.cards-grid {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

/* Note Cards with Hold to Reorder */
.note-card {
  position: relative;
  border-radius: 20px;
  padding: 20px 20px 18px 20px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  cursor: pointer;
  user-select: none;
  transition: transform 0.18s ease, background 0.18s ease, box-shadow 0.25s ease;
}

.note-card:hover {
  background: var(--card-bg-hover);
}

.note-card:active {
  transform: scale(0.985);
}

.note-card.dragging {
  opacity: 0.5;
  transform: scale(0.96);
}

.note-card.pinned-glow {
  border-color: var(--pin-border);
  box-shadow: 0 0 0 1px var(--pin-border), 0 0 24px var(--pin-glow), 0 8px 24px rgba(0,0,0,0.12);
}

.card-drag-handle {
  position: absolute;
  top: 16px;
  right: 16px;
  color: var(--text-faint);
  opacity: 0.4;
  cursor: grab;
  padding: 4px;
}

.card-drag-handle:hover {
  opacity: 0.9;
  color: var(--text);
}

.pin-emoji {
  position: absolute;
  top: 16px;
  left: 16px;
  font-size: 13px;
  opacity: 0.3;
  transform: rotate(-15deg);
  transition: all 0.2s ease;
}

.pin-emoji-active {
  opacity: 1;
  filter: drop-shadow(0 0 6px var(--pin-glow));
}

.card-pill {
  display: inline-block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--pill-text);
  background: var(--pill-bg);
  border: 1px solid var(--pill-border);
  border-radius: 20px;
  padding: 3px 9px;
  margin: 0 0 10px 22px;
}

.card-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 20px;
  color: var(--text);
  margin-bottom: 10px;
}

.card-divider {
  height: 1px;
  background: var(--divider);
  margin-bottom: 10px;
}

.card-body {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text-dim);
}

.count-badge {
  position: absolute;
  top: -8px;
  right: 42px;
  min-width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(160deg, var(--accent1), var(--accent2));
  color: #fff;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--badge-ring);
  box-shadow: 0 4px 10px rgba(0,0,0,0.25);
}

/* Floating Action Button (Create Pin +) */
.fab-add {
  position: fixed;
  right: calc(20px + env(safe-area-inset-right, 0px));
  bottom: calc(24px + env(safe-area-inset-bottom, 0px));
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(160deg, var(--accent1), var(--accent2));
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 26px var(--accent-shadow);
  z-index: 8;
  transition: transform 0.18s ease, filter 0.18s ease;
}

.fab-add:hover {
  filter: brightness(1.1);
  transform: scale(1.04);
}

.fab-add:active {
  transform: scale(0.94);
}

/* Writer / Editor View */
.write-scroll {
  flex: 1;
  overflow-y: auto;
  position: relative;
  z-index: 2;
  cursor: text;
}

.write-page {
  max-width: 650px;
  margin: 0 auto;
  padding: 66px 22px 160px 22px;
  border-radius: 18px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.write-page.glow-focus {
  box-shadow: 0 0 0 1px var(--glow-color), 0 0 40px var(--glow-color);
}

.write-float-back {
  position: fixed;
  top: calc(14px + env(safe-area-inset-top, 0px));
  left: 14px;
  z-index: 10;
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.18);
}

.write-float-grid {
  position: fixed;
  top: calc(14px + env(safe-area-inset-top, 0px));
  right: 14px;
  z-index: 10;
  backdrop-filter: blur(10px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.18);
}

.write-title-input {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 24px;
  color: var(--text);
  margin-bottom: 14px;
  flex-shrink: 0;
}

.write-title-input::placeholder {
  color: var(--placeholder);
}

.write-content {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  line-height: 1.7;
  flex: 1;
  min-height: 320px;
  outline: none;
  color: var(--text);
  caret-color: var(--caret);
}

.write-content:empty:before {
  content: 'Start typing note...';
  color: var(--placeholder);
}

.write-content h1 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 26px;
  font-weight: 800;
  margin: 0.5em 0 0.3em;
  color: var(--text);
}

.write-content h2 {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  margin: 0.5em 0 0.3em;
  color: var(--text);
}

.write-content ul, .write-content ol {
  padding-left: 1.3em;
}

.write-content img {
  max-width: 100%;
  border-radius: 12px;
  margin: 10px 0;
}

/* Embedded Pinned Note Chips inside Editor */
.write-content .note-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  max-width: 100%;
  margin: 10px 0;
  padding: 8px 14px;
  border-radius: 14px;
  background: var(--pill-bg);
  border: 1px solid var(--pill-border);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
}

.write-content .note-chip:hover {
  background: var(--icon-bg-hover);
}

.write-content .note-chip.note-chip-pinned {
  border-color: var(--pin-border);
  box-shadow: 0 0 0 1px var(--pin-border), 0 0 18px var(--pin-glow);
}

.write-content .note-chip.note-chip-missing {
  opacity: 0.5;
}

.write-content .note-chip-pin::before {
  content: "•";
  font-size: 13px;
  color: var(--text-faint);
}

.write-content .note-chip.note-chip-pinned .note-chip-pin::before {
  content: "📌";
  filter: drop-shadow(0 0 6px var(--pin-glow));
}

.write-content .note-chip-label {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--pill-text);
}

/* Toolbar & Unique Bubble Pop Button */
.write-toolbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: safe center;
  gap: 4px;
  padding: 10px 14px calc(10px + env(safe-area-inset-bottom, 0px)) 14px;
  background: var(--toolbar-bg);
  backdrop-filter: blur(14px);
  border-top: 1px solid var(--divider);
  z-index: 6;
  overflow-x: auto;
}

.tb-btn {
  width: 38px;
  height: 38px;
  border-radius: 11px;
  border: none;
  background: var(--icon-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-dim);
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.tb-btn:hover {
  background: var(--icon-bg-hover);
  color: var(--text);
}

.tb-btn.accent-pin {
  background: linear-gradient(160deg, var(--accent1), var(--accent2));
  color: #fff;
  box-shadow: 0 4px 12px var(--accent-shadow);
}

/* Standout Unique Bubble Pop Button */
.tb-btn.unique-bubble-pop {
  width: auto;
  padding: 0 14px;
  height: 38px;
  border-radius: 20px;
  border: 1px solid var(--pin-border);
  background: linear-gradient(135deg, var(--pin-active) 0%, var(--accent1) 100%);
  color: #1A1024;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 0 16px var(--pin-glow), 0 4px 12px rgba(0,0,0,0.25);
  cursor: pointer;
  animation: floatPulse 3s ease-in-out infinite;
}

.tb-btn.unique-bubble-pop:hover {
  filter: brightness(1.1);
  transform: scale(1.03);
}

@keyframes floatPulse {
  0%, 100% { box-shadow: 0 0 14px var(--pin-glow), 0 4px 12px rgba(0,0,0,0.25); }
  50% { box-shadow: 0 0 24px var(--pin-glow), 0 6px 18px rgba(0,0,0,0.3); }
}

.sparkle-spin {
  animation: spinSlow 6s linear infinite;
}

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.tb-sep {
  width: 1px;
  height: 24px;
  background: var(--divider);
  margin: 0 4px;
  flex-shrink: 0;
}

/* Floating Bubble Pin (Unique Design) */
.float-bubble-unique {
  position: fixed;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--pin-active) 0%, var(--accent1) 100%);
  box-shadow: 0 0 24px var(--pin-glow), 0 10px 26px var(--accent-shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #1A1024;
  z-index: 50;
  cursor: grab;
  touch-action: none;
  user-select: none;
  padding: 4px;
  text-align: center;
  transition: opacity 0.2s ease, transform 0.15s ease;
}

.float-bubble-unique:active {
  cursor: grabbing;
  transform: scale(0.95);
}

.bubble-glow-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  border: 2px dashed var(--pin-border);
  opacity: 0.6;
  animation: spinSlow 12s linear infinite;
}

.float-bubble-pin-icon {
  font-size: 16px;
}

.float-bubble-title-text {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 9px;
  font-weight: 800;
  margin-top: 2px;
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Floating Editable Panel & Settings Customizer */
.float-panel-editable {
  position: fixed;
  right: 18px;
  bottom: 24px;
  width: 90vw;
  background: var(--sheet-bg);
  border: 1px solid var(--sheet-border);
  border-radius: 22px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  z-index: 50;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  backdrop-filter: blur(16px);
  transition: opacity 0.2s ease;
}

.float-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--divider);
  flex-shrink: 0;
}

.float-panel-title-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: var(--text);
  min-width: 0;
}

.float-panel-actions {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Settings Tray inside Floating Panel */
.bubble-settings-tray {
  background: var(--card-bg);
  border-bottom: 1px solid var(--divider);
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 12.5px;
}

.tray-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  color: var(--pin-active);
}

.reset-btn {
  border: none;
  background: transparent;
  color: var(--text-dim);
  font-size: 11px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.setting-group label {
  font-weight: 600;
  color: var(--text-dim);
}

.setting-dual {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.setting-dual span {
  font-size: 11px;
  color: var(--text-faint);
}

input[type="range"] {
  width: 100%;
  accent-color: var(--accent1);
}

.preset-pills {
  display: flex;
  gap: 8px;
}

.preset-pill {
  flex: 1;
  padding: 4px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--icon-bg);
  color: var(--text);
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
}

.preset-pill.selected {
  background: var(--pill-bg);
  border-color: var(--pill-border);
  color: var(--pill-text);
}

.float-panel-scroll-container {
  flex: 1;
  overflow-y: auto;
  padding: 14px 16px;
}

.float-panel-scroll-container.cropped-mask {
  overflow: hidden;
  border: 1px dashed var(--pin-border);
  border-radius: 12px;
  margin: 8px;
}

.float-panel-body-editable {
  outline: none;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text);
  min-height: 180px;
}

/* Action Sheet */
.sheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 7, 20, 0.45);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 30;
}

.sheet {
  width: 100%;
  max-width: 500px;
  background: var(--sheet-bg);
  border: 1px solid var(--sheet-border);
  border-radius: 22px 22px 0 0;
  padding: 10px 12px calc(16px + env(safe-area-inset-bottom, 0px)) 12px;
  box-shadow: 0 -10px 40px rgba(0,0,0,0.35);
}

.sheet-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  font-size: 15px;
  color: var(--text);
  text-align: center;
  padding: 12px 8px;
  border-bottom: 1px solid var(--divider);
  margin-bottom: 6px;
}

.sheet-item {
  width: 100%;
  padding: 13px 12px;
  border-radius: 12px;
  border: none;
  background: transparent;
  color: var(--text);
  font-weight: 600;
  font-size: 14.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background 0.15s ease;
}

.sheet-item:hover {
  background: var(--icon-bg);
}

.sheet-item.active-pin {
  color: var(--pin-active);
}

.sheet-item.danger {
  color: var(--danger);
}

.sheet-item.danger:hover {
  background: var(--danger-bg);
}

.sheet-cancel {
  width: 100%;
  padding: 13px;
  border-radius: 12px;
  border: none;
  background: var(--icon-bg);
  color: var(--text-dim);
  font-weight: 600;
  font-size: 14.5px;
  cursor: pointer;
  margin-top: 6px;
}

/* Search Modal */
.search-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(4, 7, 20, 0.45);
  backdrop-filter: blur(3px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 35;
  padding-top: max(16px, env(safe-area-inset-top, 0px));
}

.search-panel {
  width: 100%;
  max-width: 560px;
  max-height: min(78vh, 640px);
  margin: 0 14px;
  background: var(--sheet-bg);
  border: 1px solid var(--sheet-border);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.35);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.search-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--divider);
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  font-size: 15.5px;
  color: var(--text);
}

.search-close-btn {
  width: 32px;
  height: 32px;
  border-radius: 9px;
  border: none;
  background: var(--icon-bg);
  color: var(--text-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.search-results {
  overflow-y: auto;
  padding: 8px 10px 14px 10px;
}

.search-empty {
  padding: 40px 20px;
  text-align: center;
  color: var(--text-faint);
  font-size: 14px;
}

.search-result-item {
  width: 100%;
  text-align: left;
  padding: 12px;
  border-radius: 12px;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-bottom: 2px;
}

.search-result-item:hover {
  background: var(--icon-bg);
}

.search-result-head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.search-result-title {
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-weight: 700;
  font-size: 14.5px;
  color: var(--text);
  flex: 1;
}

.search-result-tag {
  font-size: 9.5px;
  font-weight: 800;
  color: var(--pill-text);
  background: var(--pill-bg);
  border: 1px solid var(--pill-border);
  border-radius: 20px;
  padding: 2px 7px;
}

.search-result-snippet {
  font-size: 12.5px;
  color: var(--text-dim);
  line-height: 1.5;
}

.search-result-path {
  font-size: 11px;
  color: var(--text-faint);
  margin-top: 4px;
}

mark.result-hit, mark.search-hit {
  background: var(--highlight-bg);
  color: var(--highlight-text);
  border-radius: 3px;
  padding: 0 3px;
}

/* Archive / Trash rows */
.archive-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 16px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
}

.archive-row-title {
  flex: 1;
  font-weight: 600;
  font-size: 14.5px;
  color: var(--text);
}

.archive-row-title span {
  display: block;
  font-size: 11.5px;
  color: var(--text-faint);
  font-weight: 400;
  margin-top: 2px;
}

.pinned-tag {
  display: inline-block;
  margin-left: 6px;
  font-size: 9.5px;
  font-weight: 800;
  color: var(--pin-active);
  background: rgba(255,196,84,0.15);
  border: 1px solid var(--pin-border);
  border-radius: 10px;
  padding: 1px 6px;
}

.archive-mini-btn {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: none;
  background: var(--icon-bg);
  color: var(--text-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.archive-mini-btn:hover {
  background: var(--icon-bg-hover);
  color: var(--text);
}

.archive-mini-btn.danger:hover {
  background: var(--danger-bg);
  color: var(--danger);
}

/* Toast */
.toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--toast-bg);
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 30px;
  border: 1px solid var(--divider);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  z-index: 60;
}

/* Code Export Modal & Code PDF Features */
.code-pdf-btn {
  color: var(--accent1);
  position: relative;
}

.code-pdf-btn:hover {
  background: var(--pill-bg);
  color: var(--accent1);
}

.write-float-code {
  position: fixed;
  top: 18px;
  right: 68px;
  z-index: 20;
}

.write-float-pdf {
  position: fixed;
  top: 18px;
  right: 118px;
  z-index: 20;
}

.code-export-modal {
  width: 92vw;
  max-width: 980px;
  height: 85vh;
  max-height: 780px;
  background: var(--sheet-bg);
  border: 1px solid var(--sheet-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.05);
  animation: modalSlideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.code-export-header {
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--divider);
  background: rgba(0, 0, 0, 0.08);
}

.code-export-header-title {
  display: flex;
  align-items: center;
  gap: 14px;
}

.code-badge-icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--pill-bg);
  border: 1px solid var(--pill-border);
  color: var(--accent1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.code-export-header-title h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.01em;
}

.code-export-header-title p {
  margin: 2px 0 0;
  font-size: 12px;
  color: var(--text-dim);
}

.code-export-header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.export-zip-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 12px;
  border: 1px solid var(--pill-border);
  background: var(--pill-bg);
  color: var(--accent1);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.export-zip-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.12);
  background: var(--card-bg-hover);
}

.export-pdf-main-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, var(--accent1), var(--accent2));
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px var(--accent-shadow);
  transition: all 0.18s ease;
}

.export-pdf-main-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 22px var(--accent-shadow);
  filter: brightness(1.08);
}

.export-pdf-main-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.code-export-body {
  flex: 1;
  display: flex;
  min-height: 0;
}

.code-file-list {
  width: 320px;
  border-right: 1px solid var(--divider);
  overflow-y: auto;
  padding: 10px;
  background: rgba(0, 0, 0, 0.04);
}

.code-list-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-faint);
  padding: 8px 12px 6px;
}

.code-file-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  margin-bottom: 4px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: transparent;
  cursor: pointer;
  text-align: left;
  transition: all 0.15s ease;
}

.code-file-item:hover {
  background: var(--card-bg-hover);
  border-color: var(--card-border);
}

.code-file-item.active {
  background: var(--pill-bg);
  border-color: var(--pill-border);
}

.file-item-left {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.file-icon {
  color: var(--text-faint);
  flex-shrink: 0;
}

.code-file-item.active .file-icon {
  color: var(--accent1);
}

.file-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.file-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-path {
  font-size: 10.5px;
  color: var(--text-faint);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.file-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3px;
  flex-shrink: 0;
  margin-left: 8px;
}

.file-badge {
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  padding: 1px 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-dim);
}

.code-file-item.active .file-badge {
  background: var(--pill-border);
  color: var(--text);
}

.file-lines {
  font-size: 10px;
  color: var(--text-faint);
}

.code-preview-pane {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: rgba(0, 0, 0, 0.12);
}

.code-pane-toolbar {
  padding: 10px 18px;
  border-bottom: 1px solid var(--divider);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: rgba(0, 0, 0, 0.04);
}

.pane-file-details {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.pane-filename {
  font-family: monospace;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--text);
}

.pane-desc {
  font-size: 11px;
  color: var(--text-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pane-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.pane-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}

.pane-btn:hover {
  background: var(--card-bg-hover);
  border-color: var(--divider);
}

.code-viewer-content {
  flex: 1;
  margin: 0;
  padding: 14px 18px;
  overflow: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11.5px;
  line-height: 1.6;
  color: var(--text);
  background: transparent;
  user-select: text;
}

.code-line {
  display: flex;
}

.code-line:hover {
  background: rgba(255, 255, 255, 0.03);
}

.code-line-number {
  display: inline-block;
  width: 44px;
  text-align: right;
  padding-right: 16px;
  color: var(--text-faint);
  opacity: 0.6;
  user-select: none;
  flex-shrink: 0;
}

.code-line-text {
  flex: 1;
  white-space: pre-wrap;
  word-break: break-all;
}

.code-export-footer {
  padding: 12px 22px;
  border-top: 1px solid var(--divider);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.08);
}

.pdf-info-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--text-dim);
}

.direct-pdf-link {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 600;
  color: var(--accent1);
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 8px;
  background: var(--pill-bg);
  border: 1px solid var(--pill-border);
  transition: all 0.15s ease;
}

.direct-pdf-link:hover {
  filter: brightness(1.15);
  text-decoration: underline;
}

@media (max-width: 768px) {
  .code-export-modal {
    width: 96vw;
    height: 92vh;
  }
  .code-export-body {
    flex-direction: column;
  }
  .code-file-list {
    width: 100%;
    height: 180px;
    border-right: none;
    border-bottom: 1px solid var(--divider);
  }
}


/* Constrain the existing controls at small viewports; retain their styling. */
.card-drag-handle { touch-action: none; }
.card-title, .card-body, .archive-row-title, .note-chip-label,
.write-content, .float-panel-body-editable { overflow-wrap: anywhere; }
.archive-row-title, .search-input { min-width: 0; }
.float-panel-header { cursor: grab; touch-action: none; }
.float-panel-header input, .float-panel-header button { touch-action: auto; }
.float-panel-scroll-container { min-height: 0; }
.bubble-settings-tray { min-height: 0; max-height: 65%; overflow-y: auto; }
.float-panel-body-editable img { max-width: 100%; }
.sheet { max-height: 95dvh; overflow-y: auto; }

@media (max-width: 768px) {
  .code-export-header { flex-wrap: wrap; gap: 12px; padding: 14px 16px; flex-shrink: 0; }
  .code-export-header-title { min-width: 0; }
  .code-badge-icon { flex-shrink: 0; }
  .code-export-header-actions { flex-wrap: wrap; gap: 8px; }
  .code-export-footer { flex-wrap: wrap; gap: 10px; padding: 10px 14px; flex-shrink: 0; }
  .code-export-footer .footer-right { flex-wrap: wrap; }
  .code-file-list { flex-shrink: 0; height: min(180px, 20dvh); }
  .code-pane-toolbar { flex-wrap: wrap; gap: 8px; padding: 10px 12px; }
  .code-export-modal { height: 92dvh; }
}
@media (max-width: 480px) {
  .float-panel-header { flex-wrap: wrap; gap: 8px; padding: 10px 12px; }
  .float-panel-title-input { flex-basis: 100%; }
  .float-panel-actions { width: 100%; justify-content: flex-end; }
}
`,Og=`// Keep the original key and record shape. A bad record must never be replaced
// with an empty tree just because parsing or validation failed.
export const STORAGE_KEY = 'pinboard-notes-data-v5';

function validateData(data: any): any {
  const ids = new Set<string>();
  const validateNode = (node: any) => {
    if (!node || typeof node.id !== 'string' || !node.id || ids.has(node.id) ||
        typeof node.title !== 'string' || typeof node.content !== 'string' ||
        !Array.isArray(node.children)) throw new Error('Invalid saved note tree');
    ids.add(node.id);
    node.children.forEach(validateNode);
  };
  if (!data || !data.tree || data.tree.id !== 'root') throw new Error('Invalid saved root');
  validateNode(data.tree);
  if (data.trash !== undefined && !Array.isArray(data.trash)) throw new Error('Invalid saved recycle bin');
  const trashIds = new Set<string>();
  for (const entry of data.trash || []) {
    if (!entry || typeof entry.id !== 'string' || trashIds.has(entry.id) ||
        typeof entry.parentId !== 'string' || typeof entry.deletedAt !== 'number') {
      throw new Error('Invalid saved recycle bin entry');
    }
    trashIds.add(entry.id);
    validateNode(entry.node);
  }
  if (data.theme !== undefined && data.theme !== 'dark' && data.theme !== 'light') throw new Error('Invalid saved theme');
  if (data.bubbleSettings !== undefined && (!data.bubbleSettings || typeof data.bubbleSettings !== 'object')) {
    throw new Error('Invalid saved bubble settings');
  }
  const limits: Record<string, [number, number]> = {
    transparency: [0.2, 1], bubblePopSize: [48, 96], expansionWidth: [300, 720],
    expansionHeight: [260, 650], cropTop: [0, 200], cropBottom: [0, 200], cropHeight: [100, 400],
  };
  for (const [key, [min, max]] of Object.entries(limits)) {
    const value = data.bubbleSettings?.[key];
    if (value !== undefined && (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max)) {
      throw new Error('Invalid saved bubble setting');
    }
  }
  return data;
}

export async function loadAppData(): Promise<any | null> {
  // The synchronous browser copy contains the most recent edits even if the
  // optional asynchronous host storage was still writing when a page closed.
  let local: string | null = null;
  try { local = window.localStorage.getItem(STORAGE_KEY); }
  catch { /* Try the original host storage if browser storage is unavailable. */ }
  if (local !== null) return validateData(JSON.parse(local));

  const storage = (window as any).storage;
  if (storage && typeof storage.get === 'function') {
    const result = await storage.get(STORAGE_KEY, false);
    if (result?.value) return validateData(JSON.parse(result.value));
  }
  return null;
}

let pendingRemote: string | null = null;
let remoteWrite: Promise<boolean> | null = null;

export function saveAppData(data: any): Promise<boolean> {
  const serialized = JSON.stringify(data);
  let localSaved = false;
  try {
    window.localStorage.setItem(STORAGE_KEY, serialized);
    localSaved = true;
  } catch (error) {
    console.error('localStorage save failed:', error);
  }

  const storage = (window as any).storage;
  if (!storage || typeof storage.set !== 'function') return Promise.resolve(localSaved);
  // Serialize host writes and coalesce pending edits so old writes cannot
  // finish after new ones and overwrite the latest record.
  pendingRemote = serialized;
  if (!remoteWrite) {
    remoteWrite = (async () => {
      let saved = false;
      while (pendingRemote !== null) {
        const next = pendingRemote;
        pendingRemote = null;
        try { await storage.set(STORAGE_KEY, next, false); saved = true; }
        catch (error) { saved = false; console.warn('window.storage.set failed:', error); }
      }
      return saved;
    })().finally(() => { remoteWrite = null; });
  }
  return localSaved ? Promise.resolve(true) : remoteWrite;
}
`,Dg=`import { NoteNode, SearchResult } from '../types';

export const generateUid = () =>
  Math.random().toString(36).slice(2, 9) + Date.now().toString(36);

export function createRootNode(): NoteNode {
  return {
    id: 'root',
    title: 'Home',
    content: '',
    archived: false,
    pinned: false,
    pinnedAt: null,
    order: 0,
    children: [],
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
}

export function cloneTree(node: NoteNode): NoteNode {
  return JSON.parse(JSON.stringify(node));
}

export function findNode(node: NoteNode, id: string): NoteNode | null {
  if (node.id === id) return node;
  for (const child of node.children || []) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
}

export function findParentNode(node: NoteNode, id: string): NoteNode | null {
  for (const child of node.children || []) {
    if (child.id === id) return node;
    const found = findParentNode(child, id);
    if (found) return found;
  }
  return null;
}

export function findPathIds(node: NoteNode, targetId: string, path: string[] = []): string[] | null {
  const currentPath = [...path, node.id];
  if (node.id === targetId) return currentPath;
  for (const child of node.children || []) {
    const found = findPathIds(child, targetId, currentPath);
    if (found) return found;
  }
  return null;
}

export function deleteNodeById(node: NoteNode, id: string): void {
  if (!node.children) return;
  node.children = node.children.filter((c) => c.id !== id);
  node.children.forEach((c) => deleteNodeById(c, id));
}

export function stripHtml(html: string): string {
  if (!html) return '';
  const div = document.createElement('div');
  div.innerHTML = html;
  div.querySelectorAll('br').forEach((br) => br.replaceWith('\\n'));
  div.querySelectorAll('p, div, h1, h2, h3, h4, h5, h6, li, blockquote').forEach((block) => {
    block.prepend('\\n');
    block.append('\\n');
  });
  return (div.textContent || '').replace(/\\n{3,}/g, '\\n\\n').trim();
}

export function escapeHtml(str: string): string {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function makeChipHtml(id: string, title: string, pinned: boolean = true): string {
  const pinnedClass = pinned ? 'note-chip-pinned' : '';
  const chip = document.createElement('div');
  chip.className = \`note-chip \${pinnedClass}\`;
  chip.setAttribute('contenteditable', 'false');
  chip.setAttribute('data-note-id', id);
  chip.innerHTML = \`<span class="note-chip-pin"></span><span class="note-chip-label">\${escapeHtml(title || 'Untitled')}</span>\`;
  return chip.outerHTML;
}

export function contentHasChip(html: string, id: string): boolean {
  if (!html) return false;
  const div = document.createElement('div');
  div.innerHTML = html;
  return Array.from(div.querySelectorAll('.note-chip')).some((chip) => chip.getAttribute('data-note-id') === id);
}

export function refreshChipTitles(container: HTMLElement | null, tree: NoteNode | null): void {
  if (!container || !tree) return;
  const chips = container.querySelectorAll('.note-chip');
  chips.forEach((chip) => {
    const id = chip.getAttribute('data-note-id');
    const node = id ? findNode(tree, id) : null;
    const label = chip.querySelector('.note-chip-label');
    if (label) label.textContent = node ? node.title || 'Untitled' : 'Untitled';
    chip.classList.toggle('note-chip-pinned', !!(node && node.pinned));
    chip.classList.toggle('note-chip-missing', !node);
  });
}

// Sorts children into Pinned (sorted by pinnedAt descending) and Normal (sorted by order)
export function getSortedChildren(children: NoteNode[]): { pinned: NoteNode[]; normal: NoteNode[] } {
  const activeChildren = (children || []).filter((c) => !c.archived);

  // Pinned section: higher pinnedAt (more recently pinned) comes FIRST
  const pinned = activeChildren
    .filter((c) => c.pinned)
    .sort((a, b) => {
      const aTime = a.pinnedAt || a.updatedAt || 0;
      const bTime = b.pinnedAt || b.updatedAt || 0;
      if (bTime !== aTime) return bTime - aTime;
      return (a.order ?? 0) - (b.order ?? 0);
    });

  // Normal section: ordered by \`order\` property
  const normal = activeChildren
    .filter((c) => !c.pinned)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return { pinned, normal };
}

// Reorders items when dragged
export function reorderNodeChildren(
  parent: NoteNode,
  sourceId: string,
  targetId: string,
  isPinnedList: boolean
): void {
  if (!parent.children) return;

  const { pinned, normal } = getSortedChildren(parent.children);
  const list = isPinnedList ? [...pinned] : [...normal];

  const sourceIndex = list.findIndex((c) => c.id === sourceId);
  const targetIndex = list.findIndex((c) => c.id === targetId);

  if (sourceIndex === -1 || targetIndex === -1 || sourceIndex === targetIndex) return;

  const [movedItem] = list.splice(sourceIndex, 1);
  list.splice(targetIndex, 0, movedItem);

  if (isPinnedList) {
    // Re-assign pinnedAt timestamps so the new visual sequence is preserved
    const now = Date.now();
    list.forEach((item, index) => {
      // Top items get higher timestamps so pinnedAt descending retains the order
      item.pinnedAt = now - index * 1000;
    });
  } else {
    // Re-assign normal order indices
    list.forEach((item, index) => {
      item.order = index;
    });
  }
}

function buildSnippet(text: string, query: string, radius = 42): string {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, 90);
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = '…' + snippet;
  if (end < text.length) snippet = snippet + '…';
  return snippet;
}

export function collectSearchResults(
  node: NoteNode,
  query: string,
  path: string[],
  out: SearchResult[]
): void {
  const q = query.toLowerCase();
  const nextPath = [...path, node.id];
  if (node.id !== 'root') {
    const title = node.title || '';
    const plain = stripHtml(node.content);
    const titleMatch = title.toLowerCase().includes(q);
    const contentMatch = plain.toLowerCase().includes(q);
    if (titleMatch || contentMatch) {
      out.push({
        id: node.id,
        title: title || 'Untitled',
        path: nextPath,
        archived: node.archived,
        pinned: node.pinned,
        matchType: titleMatch ? 'title' : 'content',
        snippet: contentMatch ? buildSnippet(plain, query) : '',
      });
    }
  }
  (node.children || []).forEach((c) => collectSearchResults(c, query, nextPath, out));
}

export function highlightFirstMatch(root: HTMLElement, query: string): HTMLElement | null {
  if (!root || !query) return null;
  const q = query.toLowerCase();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue || '';
    const idx = text.toLowerCase().indexOf(q);
    if (idx !== -1) {
      try {
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, idx + query.length);
        const mark = document.createElement('mark');
        mark.className = 'search-hit';
        range.surroundContents(mark);
        return mark;
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}

export function pathTitles(tree: NoteNode, path: string[]): string[] {
  return path
    .slice(1, -1)
    .map((id) => {
      const n = findNode(tree, id);
      return n ? n.title || 'Untitled' : 'Untitled';
    });
}
`,kg=`import { jsPDF } from 'jspdf';

import appTsx from '../App.tsx?raw';
import mainTsx from '../main.tsx?raw';
import typesTs from '../types.ts?raw';
import viteEnvDTs from '../vite-env.d.ts?raw';
import indexCss from '../index.css?raw';
import storageTs from './storage.ts?raw';
import treeTs from './tree.ts?raw';
import codeExportTs from './codeExport.ts?raw';
import topBarTsx from '../components/TopBar.tsx?raw';
import boardViewTsx from '../components/BoardView.tsx?raw';
import noteCardTsx from '../components/NoteCard.tsx?raw';
import editorViewTsx from '../components/EditorView.tsx?raw';
import bubblePinTsx from '../components/BubblePin.tsx?raw';
import actionSheetTsx from '../components/ActionSheet.tsx?raw';
import searchModalTsx from '../components/SearchModal.tsx?raw';
import archiveTrashViewTsx from '../components/ArchiveTrashView.tsx?raw';
import codeExportModalTsx from '../components/CodeExportModal.tsx?raw';

export interface SourceFile {
  path: string;
  category: string;
  description: string;
  content: string;
  lines: number;
}

export const CODEBASE_FILES: SourceFile[] = [
  {
    path: 'src/App.tsx',
    category: 'Core',
    description: 'Main application logic, state orchestration, route handling, and PDF export trigger',
    content: appTsx,
    lines: appTsx.split('\\n').length,
  },
  {
    path: 'src/types.ts',
    category: 'Types',
    description: 'TypeScript interfaces for NoteNode, TrashEntry, BubbleSettings, and ViewMode',
    content: typesTs,
    lines: typesTs.split('\\n').length,
  },
  {
    path: 'src/components/BubblePin.tsx',
    category: 'UI',
    description: 'Editable floating bubble pin with customizable opacity, pop size, and viewport cropping',
    content: bubblePinTsx,
    lines: bubblePinTsx.split('\\n').length,
  },
  {
    path: 'src/components/BoardView.tsx',
    category: 'UI',
    description: 'Interactive board view separating pinned importance hierarchy and unpinned notes',
    content: boardViewTsx,
    lines: boardViewTsx.split('\\n').length,
  },
  {
    path: 'src/components/NoteCard.tsx',
    category: 'UI',
    description: 'Draggable note card with hold-to-reorder, pin indicators, and long-press menu',
    content: noteCardTsx,
    lines: noteCardTsx.split('\\n').length,
  },
  {
    path: 'src/components/EditorView.tsx',
    category: 'UI',
    description: 'Writing mode with rich text formatting, nested note chips, and standout bubble pop button',
    content: editorViewTsx,
    lines: editorViewTsx.split('\\n').length,
  },
  {
    path: 'src/components/TopBar.tsx',
    category: 'UI',
    description: 'Header with breadcrumb navigation, search, theme toggler, and code export trigger',
    content: topBarTsx,
    lines: topBarTsx.split('\\n').length,
  },
  {
    path: 'src/components/ActionSheet.tsx',
    category: 'UI',
    description: 'Context menu for pin/unpin, clipboard copy, PDF export, archive, and deletion',
    content: actionSheetTsx,
    lines: actionSheetTsx.split('\\n').length,
  },
  {
    path: 'src/components/ArchiveTrashView.tsx',
    category: 'UI',
    description: 'Recycle bin and archive manager with restoration to parent writing pages',
    content: archiveTrashViewTsx,
    lines: archiveTrashViewTsx.split('\\n').length,
  },
  {
    path: 'src/components/SearchModal.tsx',
    category: 'UI',
    description: 'Instant full-text search across titles and contents with highlighted snippets',
    content: searchModalTsx,
    lines: searchModalTsx.split('\\n').length,
  },
  {
    path: 'src/components/CodeExportModal.tsx',
    category: 'UI',
    description: 'In-app codebase explorer, file inspector, and downloadable PDF modal',
    content: codeExportModalTsx,
    lines: codeExportModalTsx.split('\\n').length,
  },
  {
    path: 'src/utils/tree.ts',
    category: 'Utils',
    description: 'Recursive tree algorithms, chronological pinned sorting, chips, and node cloning',
    content: treeTs,
    lines: treeTs.split('\\n').length,
  },
  {
    path: 'src/utils/storage.ts',
    category: 'Utils',
    description: 'Local storage persistence manager for state durability across sessions',
    content: storageTs,
    lines: storageTs.split('\\n').length,
  },
  {
    path: 'src/utils/codeExport.ts',
    category: 'Utils',
    description: 'Client-side code bundle and in-browser PDF generator engine',
    content: codeExportTs,
    lines: codeExportTs.split('\\n').length,
  },
  {
    path: 'src/main.tsx',
    category: 'Entry',
    description: 'Vite React application entry point and DOM root renderer',
    content: mainTsx,
    lines: mainTsx.split('\\n').length,
  },
  {
    path: 'src/vite-env.d.ts',
    category: 'Types',
    description: 'Vite client environment and module declarations for raw text assets',
    content: viteEnvDTs,
    lines: viteEnvDTs.split('\\n').length,
  },
  {
    path: 'src/index.css',
    category: 'Styles',
    description: 'Complete CSS variables, dual dark/light themes, animations, and modal styles',
    content: indexCss,
    lines: indexCss.split('\\n').length,
  },
];

export const CORE_FEATURES_LIST = [
  {
    id: 'F01',
    title: 'Hierarchical Tree Architecture & Path Navigation',
    desc: 'Recursive note trees with deep paths, immutable mutations, and automated localStorage persistence.',
  },
  {
    id: 'F02',
    title: 'Hierarchy of Importance: Pinning & Chronological Ordering',
    desc: 'Pinned notes elevate to the top in descending order of pinnedAt timestamp. Unpinning restores previous position.',
  },
  {
    id: 'F03',
    title: 'Hold & Arrange Notes\\' Order (Manual Drag & Drop)',
    desc: 'Hold-and-drag interaction with grip handles, drop indicators, and persistent sequential order storage.',
  },
  {
    id: 'F04',
    title: 'Editable Floating Bubble Pin & Customizable Viewport',
    desc: 'Detached floating note with live two-way sync, opacity slider (20%-100%), pop size (48-96px), and viewport cropping.',
  },
  {
    id: 'F05',
    title: 'Unique Standout Bubble Pop Button',
    desc: 'Distinct vibrant gradient, ambient halo glow, spinning sparkle icon, and dedicated tooltip.',
  },
  {
    id: 'F06',
    title: 'Recycle Bin & Pinned Note Restoration Flow',
    desc: 'Deleted notes retain parent lineage. Restoring re-embeds note chips and navigates to the parent writing page.',
  },
  {
    id: 'F07',
    title: 'Archive System with Instant Restoration',
    desc: 'Soft archival hides completed items from active boards while keeping hierarchy intact for one-click unarchiving.',
  },
  {
    id: 'F08',
    title: 'Instant Global Full-Text Search',
    desc: 'Recursively searches titles and rich text with highlighted query snippets and deep stack breadcrumb navigation.',
  },
  {
    id: 'F09',
    title: 'Dual PDF Export Engines (Note & Full Codebase)',
    desc: 'Note-level PDF generation and complete 90+ page unabridged codebase PDF with line numbers and specifications.',
  },
  {
    id: 'F10',
    title: 'Design System & Responsive Dual Themes',
    desc: 'Midnight Dark and Warm Parchment Light modes with semantic CSS variable tokens.',
  },
];

export function generateClientCodePdf(): void {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 36;
  const marginTop = 48;
  const marginBottom = 40;
  const contentWidth = pageWidth - marginX * 2;

  // Cover Page
  doc.setFillColor(30, 58, 138);
  doc.rect(0, 0, pageWidth, 16, 'F');
  doc.setFillColor(59, 130, 246);
  doc.rect(0, 16, pageWidth, 4, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(30);
  doc.setTextColor(30, 58, 138);
  doc.text('Pinboard Notes', marginX, 86);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.setTextColor(71, 85, 105);
  doc.text('Complete Architectural Specification & Unabridged Source Code', marginX, 108);

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(1.5);
  doc.line(marginX, 124, pageWidth - marginX, 124);

  // Render Features
  let curY = 150;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(30, 58, 138);
  doc.text('Feature Specifications & Modules', marginX, curY);
  curY += 20;

  CORE_FEATURES_LIST.forEach((feat) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(30, 58, 138);
    doc.text(\`[\${feat.id}] \${feat.title}\`, marginX + 8, curY);
    curY += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const splitDesc = doc.splitTextToSize(feat.desc, contentWidth - 16);
    doc.text(splitDesc, marginX + 16, curY);
    curY += splitDesc.length * 10 + 6;
  });

  drawFooter(doc, marginX, contentWidth, pageHeight);

  // Render Files
  CODEBASE_FILES.forEach((file) => {
    doc.addPage();
    let y = marginTop;

    doc.setFillColor(30, 58, 138);
    doc.roundedRect(marginX, y, contentWidth, 28, 4, 4, 'F');

    doc.setFont('courier', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(file.path, marginX + 12, y + 18);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(219, 234, 254);
    doc.text(\`\${file.category} • \${file.lines} Lines\`, marginX + contentWidth - 120, y + 18);

    y += 36;

    const lines = file.content.split('\\n');
    doc.setFont('courier', 'normal');
    doc.setFontSize(7.2);
    const lineHeight = 10.5;

    for (let i = 0; i < lines.length; i++) {
      if (y + lineHeight > pageHeight - marginBottom) {
        drawFooter(doc, marginX, contentWidth, pageHeight);
        doc.addPage();
        y = marginTop;

        doc.setFillColor(241, 245, 249);
        doc.roundedRect(marginX, y, contentWidth, 18, 3, 3, 'F');
        doc.setFont('courier', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(71, 85, 105);
        doc.text(\`\${file.path} (continued)\`, marginX + 8, y + 12);
        y += 26;
      }

      const rawLine = lines[i];
      const lineNumStr = String(i + 1).padStart(4, ' ') + ' | ';

      if (i % 2 === 0) {
        doc.setFillColor(252, 253, 255);
        doc.rect(marginX, y - 7.5, contentWidth, lineHeight, 'F');
      }

      doc.setFont('courier', 'bold');
      doc.setTextColor(148, 163, 184);
      doc.text(lineNumStr, marginX + 4, y);

      doc.setFont('courier', 'normal');
      doc.setTextColor(30, 41, 59);
      const wrapped = doc.splitTextToSize(rawLine || ' ', contentWidth - 52);
      doc.text(wrapped[0], marginX + 44, y);
      y += lineHeight;
      for (const continuation of wrapped.slice(1)) {
        if (y + lineHeight > pageHeight - marginBottom) {
          drawFooter(doc, marginX, contentWidth, pageHeight);
          doc.addPage();
          y = marginTop;
        }
        doc.setFont('courier', 'normal');
        doc.setFontSize(7.2);
        doc.setTextColor(30, 41, 59);
        doc.text(continuation, marginX + 44, y);
        y += lineHeight;
      }
    }

    drawFooter(doc, marginX, contentWidth, pageHeight);
  });

  doc.save('Pinboard_Notes_Codebase.pdf');
}

function drawFooter(doc: jsPDF, marginX: number, contentWidth: number, pageHeight: number) {
  const pageNum = (doc.internal as any).getCurrentPageInfo().pageNumber;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text('Pinboard Notes — Complete Codebase & Feature Specification', marginX, pageHeight - 18);
  doc.text(\`Page \${pageNum}\`, marginX + contentWidth - 36, pageHeight - 18);
}
`,Mg=`import React from 'react';
import { ChevronLeft, X, Sun, Moon, Search, Trash2, Archive, FileCode } from 'lucide-react';
import { NoteNode, ViewMode, ThemeMode } from '../types';

interface TopBarProps {
  mode: ViewMode;
  currentNode: NoteNode;
  stack: string[];
  theme: ThemeMode;
  trashAreaNode: NoteNode | null;
  onSetMode: (mode: ViewMode) => void;
  onBack: () => void;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onTitleChange: (newTitle: string) => void;
  onOpenTrashForArea: () => void;
  onOpenCodeExport: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  mode,
  currentNode,
  stack,
  theme,
  trashAreaNode,
  onSetMode,
  onBack,
  onToggleTheme,
  onOpenSearch,
  onTitleChange,
  onOpenTrashForArea,
  onOpenCodeExport,
}) => {
  if (mode === 'write') return null; // Writing mode uses floating controls

  return (
    <div className="pb-topbar">
      <div className="pb-topbar-icons">
        <div className="pb-topbar-icons-left">
          {mode === 'archive' || mode === 'trash' ? (
            <button className="icon-btn" onClick={() => onSetMode('board')} title="Close view">
              <X size={18} />
            </button>
          ) : stack.length > 1 ? (
            <button className="icon-btn" onClick={onBack} title="Back">
              <ChevronLeft size={20} />
            </button>
          ) : (
            <div style={{ width: 40 }} />
          )}
        </div>

        <div className="pb-topbar-icons-right">
          <button
            className="icon-btn code-pdf-btn"
            onClick={onOpenCodeExport}
            title="Download Project Code as PDF"
          >
            <FileCode size={18} />
          </button>

          <button
            className="icon-btn"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <button className="icon-btn" onClick={onOpenSearch} title="Search notes">
            <Search size={17} />
          </button>

          {mode === 'board' && (
            <>
              <button
                className="icon-btn"
                onClick={onOpenTrashForArea}
                title="Recycle bin for this page"
              >
                <Trash2 size={17} />
              </button>
              <button
                className="icon-btn"
                onClick={() => onSetMode('archive')}
                title="Archive for this page"
              >
                <Archive size={17} />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="pb-title-row">
        <input
          className="pb-title-input"
          value={
            mode === 'archive'
              ? 'Archive'
              : mode === 'trash'
              ? \`Recycle Bin — \${trashAreaNode ? trashAreaNode.title || 'Untitled' : 'Home'}\`
              : currentNode.title
          }
          placeholder="Untitled Note"
          disabled={currentNode.id === 'root' || mode === 'archive' || mode === 'trash'}
          onChange={(e) => onTitleChange(e.target.value)}
        />
      </div>
    </div>
  );
};
`,Rg=`import React, { useState, useRef } from 'react';
import { Plus, Pin, FileText } from 'lucide-react';
import { NoteNode } from '../types';
import { NoteCard } from './NoteCard';
import { getSortedChildren, reorderNodeChildren, findNode } from '../utils/tree';

interface BoardViewProps {
  currentNode: NoteNode;
  onOpenNote: (id: string) => void;
  onLongPressNote: (id: string) => void;
  onAddChild: () => void;
  onUpdateTree: (mutator: (tree: NoteNode) => void) => void;
}

export const BoardView: React.FC<BoardViewProps> = ({
  currentNode,
  onOpenNote,
  onLongPressNote,
  onAddChild,
  onUpdateTree,
}) => {
  const [dragSourceId, setDragSourceId] = useState<string | null>(null);
  const [dragSourceIsPinned, setDragSourceIsPinned] = useState<boolean>(false);
  const lastDragTarget = useRef<string | null>(null);

  const { pinned, normal } = getSortedChildren(currentNode.children || []);
  const totalNotes = pinned.length + normal.length;

  const handleDragStartItem = (id: string, isPinned: boolean) => {
    setDragSourceId(id);
    setDragSourceIsPinned(isPinned);
    lastDragTarget.current = id;
  };

  const handleDragOverItem = (targetId: string, isPinned: boolean) => {
    if (!dragSourceId || dragSourceId === targetId) return;
    if (dragSourceIsPinned !== isPinned) return; // Prevent cross-section drag confusion
    if (lastDragTarget.current === targetId) return;
    lastDragTarget.current = targetId;

    onUpdateTree((tree) => {
      const activeParent = findNode(tree, currentNode.id);
      if (!activeParent) return;
      // Reorder in place
      reorderNodeChildren(activeParent, dragSourceId, targetId, isPinned);
    });
  };

  const handleDragEndItem = () => {
    setDragSourceId(null);
    lastDragTarget.current = null;
  };

  return (
    <>
      <div className="board-scroll">
        <div className="board-inner">
          {totalNotes === 0 ? (
            <div className="board-empty">
              <div className="empty-icon-circle">
                <FileText size={28} />
              </div>
              <p>No notes here yet</p>
              <span className="empty-sub">Tap the floating + button to create a new note</span>
            </div>
          ) : (
            <>
              {/* Pinned Section - Takes Priority at the Top */}
              {pinned.length > 0 && (
                <div className="section-block">
                  <div className="section-header">
                    <Pin size={14} className="pin-hdr-icon" />
                    <span>PINNED ({pinned.length})</span>
                    <div className="section-hdr-line" />
                  </div>
                  <div className="cards-grid">
                    {pinned.map((child) => (
                      <NoteCard
                        key={child.id}
                        node={child}
                        isPinnedSection={true}
                        onOpen={onOpenNote}
                        onLongPress={onLongPressNote}
                        onDragStartItem={handleDragStartItem}
                        onDragOverItem={handleDragOverItem}
                        onDragEndItem={handleDragEndItem}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Normal Notes Section */}
              {normal.length > 0 && (
                <div className="section-block">
                  {pinned.length > 0 && (
                    <div className="section-header">
                      <span>OTHER NOTES ({normal.length})</span>
                      <div className="section-hdr-line" />
                    </div>
                  )}
                  <div className="cards-grid">
                    {normal.map((child) => (
                      <NoteCard
                        key={child.id}
                        node={child}
                        isPinnedSection={false}
                        onOpen={onOpenNote}
                        onLongPress={onLongPressNote}
                        onDragStartItem={handleDragStartItem}
                        onDragOverItem={handleDragOverItem}
                        onDragEndItem={handleDragEndItem}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <button className="fab-add" onClick={onAddChild} title="Create Pin + (Add New Note)">
        <Plus size={24} />
      </button>
    </>
  );
};
`,jg=`import React, { useRef, useState, useEffect } from 'react';
import { GripVertical, Pin } from 'lucide-react';
import { NoteNode } from '../types';
import { stripHtml } from '../utils/tree';

interface NoteCardProps {
  node: NoteNode;
  isPinnedSection: boolean;
  onOpen: (id: string) => void;
  onLongPress: (id: string) => void;
  onDragStartItem: (id: string, isPinned: boolean) => void;
  onDragOverItem: (id: string, isPinned: boolean) => void;
  onDragEndItem: () => void;
}

export const NoteCard: React.FC<NoteCardProps> = ({
  node,
  isPinnedSection,
  onOpen,
  onLongPress,
  onDragStartItem,
  onDragOverItem,
  onDragEndItem,
}) => {
  const pressTimer = useRef<any>(null);
  const longFired = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const pressStart = useRef({ x: 0, y: 0 });
  const pointerDrag = useRef(false);

  useEffect(() => () => clearTimeout(pressTimer.current), []);

  const childCount = (node.children || []).filter((c) => !c.archived).length;
  const excerpt = stripHtml(node.content).slice(0, 90);

  const startTimer = (e: React.PointerEvent) => {
    if (e.button !== 0) return;
    clearTimer();
    pressStart.current = { x: e.clientX, y: e.clientY };
    longFired.current = false;
    pressTimer.current = setTimeout(() => {
      longFired.current = true;
      onLongPress(node.id);
    }, 450);
  };

  const clearTimer = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (longFired.current) {
      longFired.current = false;
      return;
    }
    onOpen(node.id);
  };

  const handleDragStart = (e: React.DragEvent) => {
    clearTimer();
    longFired.current = true;
    setIsDragging(true);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', node.id);
    onDragStartItem(node.id, isPinnedSection);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    onDragOverItem(node.id, isPinnedSection);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    onDragEndItem();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      className={\`note-card \${node.pinned ? 'pinned-glow' : ''} \${isDragging ? 'dragging' : ''}\`}
      data-note-id={node.id}
      data-pinned-section={isPinnedSection}
      onPointerDown={startTimer}
      onPointerMove={(e) => {
        if (Math.abs(e.clientX - pressStart.current.x) > 8 || Math.abs(e.clientY - pressStart.current.y) > 8) clearTimer();
      }}
      onPointerUp={clearTimer}
      onPointerLeave={clearTimer}
      onPointerCancel={clearTimer}
      onClick={handleClick}
    >
      <div className="card-drag-handle" title="Hold and drag to reorder note"
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          e.stopPropagation();
          e.preventDefault();
          clearTimer();
          pointerDrag.current = true;
          longFired.current = true;
          setIsDragging(true);
          e.currentTarget.setPointerCapture(e.pointerId);
          onDragStartItem(node.id, isPinnedSection);
        }}
        onPointerMove={(e) => {
          if (!pointerDrag.current) return;
          e.stopPropagation();
          const target = document.elementFromPoint(e.clientX, e.clientY)?.closest<HTMLElement>('.note-card');
          if (target?.dataset.noteId) onDragOverItem(target.dataset.noteId, target.dataset.pinnedSection === 'true');
        }}
        onPointerUp={(e) => {
          e.stopPropagation();
          if (pointerDrag.current) { pointerDrag.current = false; handleDragEnd(); }
        }}
        onPointerCancel={() => { pointerDrag.current = false; handleDragEnd(); }}
        onClick={(e) => { e.stopPropagation(); longFired.current = false; }}
      >
        <GripVertical size={14} />
      </div>

      <span className={\`pin-emoji \${node.pinned ? 'pin-emoji-active' : ''}\`}>
        📌
      </span>

      {childCount > 0 && <div className="count-badge">{childCount}</div>}

      <div className="card-pill">
        {node.pinned ? 'PINNED NOTE' : 'NOTE'}
      </div>

      <div className="card-title">{node.title || 'Untitled'}</div>
      <div className="card-divider" />
      <div className="card-body">{excerpt || 'No written notes yet.'}</div>
    </div>
  );
};
`,zg=`import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  ChevronLeft,
  LayoutGrid,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Image as ImageIcon,
  Pin,
  Sparkles,
  Download,
  FileCode,
} from 'lucide-react';
import { NoteNode } from '../types';
import { makeChipHtml, refreshChipTitles, findNode } from '../utils/tree';

interface EditorViewProps {
  currentNode: NoteNode;
  tree: NoteNode;
  stack: string[];
  onBack: () => void;
  onSetModeBoard: () => void;
  onTitleChange: (newTitle: string) => void;
  onContentChange: (newHtml: string) => void;
  onInsertNestedNote: () => void;
  onPopOutBubble: () => void;
  onNavigateToNote: (id: string) => void;
  onLongPressNote: (id: string) => void;
  onShowToast: (msg: string) => void;
  onOpenCodeExport: () => void;
  onDownloadCurrentNotePdf: () => void;
}

export const EditorView: React.FC<EditorViewProps> = ({
  currentNode,
  tree,
  stack,
  onBack,
  onSetModeBoard,
  onTitleChange,
  onContentChange,
  onInsertNestedNote,
  onPopOutBubble,
  onNavigateToNote,
  onLongPressNote,
  onShowToast,
  onOpenCodeExport,
  onDownloadCurrentNotePdf,
}) => {
  const [editorFocused, setEditorFocused] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const writeScrollRef = useRef<HTMLDivElement>(null);

  const chipPressTimer = useRef<any>(null);
  const chipLongFired = useRef(false);
  const displayedNoteId = useRef<string | null>(null);

  // Sync content into DOM editor element when current note changes
  useEffect(() => {
    if (editorRef.current && currentNode) {
      if (displayedNoteId.current !== currentNode.id || editorRef.current.innerHTML !== (currentNode.content || '')) {
        editorRef.current.innerHTML = currentNode.content || '';
      }
      displayedNoteId.current = currentNode.id;
      refreshChipTitles(editorRef.current, tree);
    }
  }, [currentNode.id, currentNode.content]);

  useEffect(() => () => clearTimeout(chipPressTimer.current), []);

  // Keep chip titles and pin states in sync with tree updates
  useEffect(() => {
    if (editorRef.current && tree) {
      refreshChipTitles(editorRef.current, tree);
    }
  }, [tree]);

  const scrollCaretIntoView = useCallback(() => {
    const scroller = writeScrollRef.current;
    if (!scroller) return;
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0).cloneRange();
    range.collapse(true);
    let rect = range.getClientRects()[0];
    if (!rect) {
      const marker = document.createElement('span');
      marker.appendChild(document.createTextNode('\\u200b'));
      range.insertNode(marker);
      rect = marker.getBoundingClientRect();
      marker.parentNode?.removeChild(marker);
    }
    if (!rect || (rect.top === 0 && rect.bottom === 0)) return;

    const toolbarBuffer = 96;
    const topBuffer = 84;
    const viewportBottom = window.innerHeight - toolbarBuffer;
    if (rect.bottom > viewportBottom) {
      scroller.scrollTop += rect.bottom - viewportBottom + 24;
    } else if (rect.top < topBuffer) {
      scroller.scrollTop -= topBuffer - rect.top + 24;
    }
  }, []);

  const handleEditorInput = () => {
    if (!editorRef.current) return;
    const html = editorRef.current.innerHTML;
    onContentChange(html);
    requestAnimationFrame(scrollCaretIntoView);
  };

  const exec = (cmd: string, value: string | null = null) => {
    if (editorRef.current) editorRef.current.focus();
    document.execCommand(cmd, false, value as any);
    handleEditorInput();
  };

  const handleChipPointerDown = (e: React.PointerEvent) => {
    const chip = (e.target as HTMLElement).closest?.('.note-chip');
    if (!chip) return;
    const id = chip.getAttribute('data-note-id');
    if (!id) return;

    chipLongFired.current = false;
    chipPressTimer.current = setTimeout(() => {
      chipLongFired.current = true;
      onLongPressNote(id);
    }, 450);
  };

  const handleChipPointerClear = () => {
    if (chipPressTimer.current) clearTimeout(chipPressTimer.current);
  };

  const handleEditorClick = (e: React.MouseEvent) => {
    const chip = (e.target as HTMLElement).closest?.('.note-chip');
    if (chip) {
      e.preventDefault();
      e.stopPropagation();
      if (chipLongFired.current) {
        chipLongFired.current = false;
        return;
      }
      const id = chip.getAttribute('data-note-id');
      if (id) {
        if (!findNode(tree, id)) {
          onShowToast('This nested note was moved or deleted');
          return;
        }
        onNavigateToNote(id);
      }
    }
  };

  const focusEditorAnywhere = (e: React.MouseEvent) => {
    if (!editorRef.current) return;
    if (editorRef.current.contains(e.target as Node)) return;
    editorRef.current.focus();
    const range = document.createRange();
    range.selectNodeContents(editorRef.current);
    range.collapse(false);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  };

  const handleImportImage = () => {
    let url: string | null = null;
    try {
      url = window.prompt('Paste image URL (e.g. https://... or data:image...)');
    } catch (e) {
      url = null;
    }
    if (url) exec('insertImage', url);
  };

  return (
    <div className="write-scroll" ref={writeScrollRef} onClick={focusEditorAnywhere}>
      {stack.length > 1 && (
        <button
          className="icon-btn write-float-back"
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          title="Back to parent note page"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Floating Header Actions in Writing Mode */}
      <button
        className="icon-btn write-float-code"
        onClick={(e) => {
          e.stopPropagation();
          onOpenCodeExport();
        }}
        title="Download Project Codebase as PDF"
      >
        <FileCode size={18} />
      </button>

      <button
        className="icon-btn write-float-pdf"
        onClick={(e) => {
          e.stopPropagation();
          onDownloadCurrentNotePdf();
        }}
        title="Download this Note as PDF"
      >
        <Download size={18} />
      </button>

      <button
        className="icon-btn write-float-grid"
        onClick={(e) => {
          e.stopPropagation();
          onSetModeBoard();
        }}
        title="View grid of nested notes inside this page"
      >
        <LayoutGrid size={18} />
      </button>

      <div className={\`write-page \${editorFocused ? 'glow-focus' : ''}\`}>
        <input
          className="write-title-input"
          value={currentNode.title}
          placeholder="Untitled Note"
          disabled={currentNode.id === 'root'}
          onChange={(e) => onTitleChange(e.target.value)}
          onClick={(e) => e.stopPropagation()}
        />

        <div
          ref={editorRef}
          className="write-content"
          contentEditable
          suppressContentEditableWarning
          onInput={handleEditorInput}
          onClick={handleEditorClick}
          onPointerDown={handleChipPointerDown}
          onPointerUp={handleChipPointerClear}
          onPointerLeave={handleChipPointerClear}
          onPointerCancel={handleChipPointerClear}
          onFocus={() => setEditorFocused(true)}
          onBlur={() => setEditorFocused(false)}
        />
      </div>

      {/* Floating Formatting Toolbar with Unique Bubble Pop Button */}
      <div className="write-toolbar" onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.preventDefault()}>
        <button className="tb-btn" onClick={() => exec('formatBlock', 'H1')}>
          <span style={{ fontWeight: 800, fontSize: 13 }}>H1</span>
        </button>
        <button className="tb-btn" onClick={() => exec('formatBlock', 'H2')}>
          <span style={{ fontWeight: 700, fontSize: 13 }}>H2</span>
        </button>

        <div className="tb-sep" />

        <button className="tb-btn" onClick={() => exec('bold')} title="Bold">
          <Bold size={16} />
        </button>
        <button className="tb-btn" onClick={() => exec('italic')} title="Italic">
          <Italic size={16} />
        </button>
        <button className="tb-btn" onClick={() => exec('underline')} title="Underline">
          <Underline size={16} />
        </button>

        <div className="tb-sep" />

        <button className="tb-btn" onClick={() => exec('insertUnorderedList')} title="Bullet List">
          <List size={16} />
        </button>
        <button className="tb-btn" onClick={() => exec('insertOrderedList')} title="Numbered List">
          <ListOrdered size={16} />
        </button>

        <div className="tb-sep" />

        <button className="tb-btn" onClick={handleImportImage} title="Insert Image">
          <ImageIcon size={16} />
        </button>

        <div className="tb-sep" />

        {/* Pin + Button */}
        <button
          className="tb-btn accent-pin"
          onClick={onInsertNestedNote}
          title="Insert a nested pinned note chip here"
        >
          <Pin size={16} />
        </button>

        {/* Unique Standout Bubble Pop Button */}
        <button
          className="tb-btn unique-bubble-pop"
          onClick={onPopOutBubble}
          title="Pop out this note into an editable floating bubble pin!"
        >
          <Sparkles size={16} className="sparkle-spin" />
          <span className="bubble-pop-text">Bubble Pin</span>
        </button>
      </div>
    </div>
  );
};
`,Bg=`import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Copy,
  ExternalLink,
  Minimize2,
  Settings,
  Crop,
  Check,
  RotateCcw,
} from 'lucide-react';
import { NoteNode, BubbleSettings } from '../types';
import { stripHtml } from '../utils/tree';

interface BubblePinProps {
  floatingNode: NoteNode | null;
  settings: BubbleSettings;
  onUpdateSettings: (newSettings: Partial<BubbleSettings>) => void;
  onUpdateNodeContent: (id: string, title: string, content: string) => void;
  onCopyNote: (node: NoteNode) => void;
  onShowToast: (msg: string) => void;
  onClose: () => void;
}

export const DEFAULT_BUBBLE_SETTINGS: BubbleSettings = {
  transparency: 0.92,
  bubblePopSize: 64,
  expansionWidth: 460,
  expansionHeight: 420,
  cropEnabled: false,
  cropTop: 0,
  cropBottom: 0,
  cropHeight: 250,
};

export const BubblePin: React.FC<BubblePinProps> = ({
  floatingNode,
  settings,
  onUpdateSettings,
  onUpdateNodeContent,
  onCopyNote,
  onShowToast,
  onClose,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [pos, setPos] = useState({ x: window.innerWidth - 90, y: window.innerHeight - 200 });
  const [panelPos, setPanelPos] = useState<{ x: number; y: number } | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const latestNode = useRef(floatingNode);
  latestNode.current = floatingNode;

  const bubbleDrag = useRef({
    dragging: false,
    moved: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
    panel: false,
  });

  const editorRef = useRef<HTMLDivElement>(null);
  const pipWindowRef = useRef<any>(null);
  const pipBodyRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setExpanded(false);
    setShowSettings(false);
    pipWindowRef.current?.close();
    pipWindowRef.current = null;
    pipBodyRef.current = null;
  }, [floatingNode?.id]);

  useEffect(() => {
    const clamp = () => {
      setPos((p) => ({
        x: Math.max(8, Math.min(p.x, window.innerWidth - settings.bubblePopSize - 8)),
        y: Math.max(8, Math.min(p.y, window.innerHeight - settings.bubblePopSize - 8)),
      }));
      const rect = panelRef.current?.getBoundingClientRect();
      if (rect) setPanelPos((p) => p && ({
        x: Math.max(8, Math.min(p.x, window.innerWidth - rect.width - 8)),
        y: Math.max(8, Math.min(p.y, window.innerHeight - rect.height - 8)),
      }));
    };
    clamp();
    window.addEventListener('resize', clamp);
    return () => window.removeEventListener('resize', clamp);
  }, [settings.bubblePopSize, settings.expansionWidth, settings.expansionHeight, expanded, showSettings]);

  useEffect(() => {
    return () => {
      if (pipWindowRef.current) {
        try {
          pipWindowRef.current.close();
        } catch (e) {}
      }
    };
  }, []);

  // Sync content when floating node changes or opens
  useEffect(() => {
    if (expanded && editorRef.current && floatingNode) {
      if (editorRef.current.innerHTML !== (floatingNode.content || '')) {
        editorRef.current.innerHTML = floatingNode.content || '';
      }
    }
    if (floatingNode && pipWindowRef.current && pipBodyRef.current) {
      const h = pipWindowRef.current.document.querySelector('h2');
      if (h) h.textContent = floatingNode.title || 'Untitled';
      if (pipBodyRef.current.innerHTML !== (floatingNode.content || '')) pipBodyRef.current.innerHTML = floatingNode.content || '';
    }
  }, [expanded, floatingNode]);

  useEffect(() => {
    if (settings.cropEnabled && editorRef.current?.parentElement) {
      editorRef.current.parentElement.scrollTop = settings.cropTop;
    }
  }, [settings.cropEnabled, settings.cropTop, expanded, floatingNode?.id]);

  if (!floatingNode) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    const panel = e.currentTarget.classList.contains('float-panel-header');
    if (panel && (e.target as HTMLElement).closest('input, button')) return;
    const rect = panelRef.current?.getBoundingClientRect();
    bubbleDrag.current = {
      dragging: true,
      moved: false,
      startX: e.clientX,
      startY: e.clientY,
      origX: panel && rect ? rect.left : pos.x,
      origY: panel && rect ? rect.top : pos.y,
      panel,
    };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const d = bubbleDrag.current;
    if (!d.dragging) return;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) d.moved = true;

    const rect = panelRef.current?.getBoundingClientRect();
    const width = d.panel && rect ? rect.width : settings.bubblePopSize;
    const height = d.panel && rect ? rect.height : settings.bubblePopSize;
    const nextX = Math.max(8, Math.min(d.origX + dx, window.innerWidth - width - 8));
    const nextY = Math.max(8, Math.min(d.origY + dy, window.innerHeight - height - 8));
    (d.panel ? setPanelPos : setPos)({ x: nextX, y: nextY });
  };

  const handlePointerUp = () => {
    const wasMoved = bubbleDrag.current.moved;
    bubbleDrag.current.dragging = false;
    if (!wasMoved && !bubbleDrag.current.panel) {
      setExpanded(true);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (floatingNode) {
      onUpdateNodeContent(floatingNode.id, e.target.value, floatingNode.content);
    }
  };

  const handleEditorInput = () => {
    if (editorRef.current && floatingNode) {
      onUpdateNodeContent(floatingNode.id, floatingNode.title, editorRef.current.innerHTML);
    }
  };

  const handlePopOut = async () => {
    if (!floatingNode) return;
    if (!('documentPictureInPicture' in window)) {
      onShowToast("Pop-out window requires desktop Chrome/Edge — using floating bubble pin!");
      return;
    }
    try {
      const pipWindow = await (window as any).documentPictureInPicture.requestWindow({
        width: Math.min(settings.expansionWidth, 480),
        height: Math.min(settings.expansionHeight, 520),
      });
      pipWindowRef.current?.close();
      pipWindowRef.current = pipWindow;

      const style = pipWindow.document.createElement('style');
      style.textContent = \`
        body { margin:0; padding:18px; font-family:-apple-system,BlinkMacSystemFont,Inter,sans-serif; background: #171F45; color: #EDEFF7; }
        h2 { font-size:17px; font-weight:800; margin:0 0 12px 0; color: #FFC966; }
        .pip-body { font-size:14px; line-height:1.6; max-height:360px; overflow-y:auto; outline: none; }
        .pip-body img { max-width:100%; border-radius:8px; }
        .pip-btn { margin-top:14px; padding:8px 16px; border-radius:10px; border:none; background:#3A5FE0; color:#fff; font-weight:600; cursor:pointer; }
      \`;
      pipWindow.document.head.appendChild(style);

      const h = pipWindow.document.createElement('h2');
      h.textContent = floatingNode.title || 'Untitled';

      const body = pipWindow.document.createElement('div');
      body.className = 'pip-body';
      body.innerHTML = floatingNode.content || '';
      body.contentEditable = 'true';
      pipBodyRef.current = body;

      body.oninput = () => {
        const node = latestNode.current;
        if (node) onUpdateNodeContent(node.id, node.title, body.innerHTML);
      };

      const btn = pipWindow.document.createElement('button');
      btn.className = 'pip-btn';
      btn.textContent = 'Copy content';
      btn.onclick = () => {
        const node = latestNode.current;
        if (!node) return;
        const text = \`\${node.title || 'Untitled'}\\n\\n\${stripHtml(node.content)}\`;
        pipWindow.navigator.clipboard?.writeText(text);
      };

      pipWindow.document.body.appendChild(h);
      pipWindow.document.body.appendChild(body);
      pipWindow.document.body.appendChild(btn);

      pipWindow.addEventListener('pagehide', () => {
        pipWindowRef.current = null;
        pipBodyRef.current = null;
      });

      setExpanded(false);
    } catch (e) {
      onShowToast("Couldn't open pop-out window");
    }
  };

  return (
    <>
      {/* 1. Unexpanded Floating Bubble */}
      {!expanded && (
        <div
          className="float-bubble-unique"
          style={{
            left: pos.x,
            top: pos.y,
            width: settings.bubblePopSize,
            height: settings.bubblePopSize,
            opacity: settings.transparency,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { bubbleDrag.current.dragging = false; }}
        >
          <div className="bubble-glow-ring" />
          <span className="float-bubble-pin-icon">📌</span>
          <span className="float-bubble-title-text">
            {(floatingNode.title || 'Untitled').slice(0, 10)}
          </span>
        </div>
      )}

      {/* 2. Expanded Floating Editable Panel */}
      {expanded && (
        <div
          className="float-panel-editable"
          ref={panelRef}
          style={{
            opacity: settings.transparency,
            width: \`min(90vw, \${settings.expansionWidth}px)\`,
            height: \`min(85dvh, \${settings.expansionHeight}px)\`,
            maxWidth: \`min(94vw, \${settings.expansionWidth}px)\`,
            maxHeight: \`min(85dvh, \${settings.expansionHeight}px)\`,
            ...(panelPos ? { left: panelPos.x, top: panelPos.y, right: 'auto', bottom: 'auto' } : {}),
          }}
        >
          {/* Header */}
          <div className="float-panel-header"
            onPointerDown={handlePointerDown} onPointerMove={handlePointerMove}
            onPointerUp={() => { bubbleDrag.current.dragging = false; }}
            onPointerCancel={() => { bubbleDrag.current.dragging = false; }}
          >
            <input
              className="float-panel-title-input"
              value={floatingNode.title}
              placeholder="Untitled note..."
              onChange={handleTitleChange}
            />
            <div className="float-panel-actions">
              <button
                className={\`icon-btn mini \${settings.cropEnabled ? 'active-accent' : ''}\`}
                onClick={() => onUpdateSettings({ cropEnabled: !settings.cropEnabled })}
                title="Toggle Viewport Crop"
              >
                <Crop size={15} />
              </button>
              <button
                className={\`icon-btn mini \${showSettings ? 'active-accent' : ''}\`}
                onClick={() => setShowSettings(!showSettings)}
                title="Bubble Settings"
              >
                <Settings size={15} />
              </button>
              <button
                className="icon-btn mini"
                onClick={() => onCopyNote(floatingNode)}
                title="Copy Note"
              >
                <Copy size={15} />
              </button>
              <button
                className="icon-btn mini"
                onClick={handlePopOut}
                title="Open desktop Picture-in-Picture window"
              >
                <ExternalLink size={15} />
              </button>
              <button
                className="icon-btn mini"
                onClick={() => {
                  setExpanded(false);
                  setShowSettings(false);
                }}
                title="Minimize to Bubble"
              >
                <Minimize2 size={15} />
              </button>
              <button className="icon-btn mini" onClick={onClose} title="Close Bubble">
                <X size={15} />
              </button>
            </div>
          </div>

          {/* Settings Sub-Panel */}
          {showSettings && (
            <div className="bubble-settings-tray">
              <div className="tray-title">
                <span>Bubble Pin Customizer</span>
                <button
                  className="reset-btn"
                  onClick={() => onUpdateSettings(DEFAULT_BUBBLE_SETTINGS)}
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>

              <div className="setting-group">
                <label>Transparency ({Math.round(settings.transparency * 100)}%)</label>
                <input
                  type="range"
                  min="0.2"
                  max="1.0"
                  step="0.05"
                  value={settings.transparency}
                  onChange={(e) => onUpdateSettings({ transparency: parseFloat(e.target.value) })}
                />
              </div>

              <div className="setting-group">
                <label>Bubble Pop Size ({settings.bubblePopSize}px)</label>
                <div className="preset-pills">
                  {[48, 64, 80, 96].map((sz) => (
                    <button
                      key={sz}
                      className={\`preset-pill \${settings.bubblePopSize === sz ? 'selected' : ''}\`}
                      onClick={() => onUpdateSettings({ bubblePopSize: sz })}
                    >
                      {sz === 48 ? 'S' : sz === 64 ? 'M' : sz === 80 ? 'L' : 'XL'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="setting-group">
                <label>Expansion Size ({settings.expansionWidth}x{settings.expansionHeight}px)</label>
                <div className="setting-dual">
                  <div>
                    <span>Width</span>
                    <input
                      type="range"
                      min="300"
                      max="720"
                      step="20"
                      value={settings.expansionWidth}
                      onChange={(e) => onUpdateSettings({ expansionWidth: parseInt(e.target.value) })}
                    />
                  </div>
                  <div>
                    <span>Height</span>
                    <input
                      type="range"
                      min="260"
                      max="650"
                      step="20"
                      value={settings.expansionHeight}
                      onChange={(e) => onUpdateSettings({ expansionHeight: parseInt(e.target.value) })}
                    />
                  </div>
                </div>
              </div>

              <div className="setting-group">
                <div className="flex-between">
                  <label>Enable Crop Masking</label>
                  <input
                    type="checkbox"
                    checked={settings.cropEnabled}
                    onChange={(e) => onUpdateSettings({ cropEnabled: e.target.checked })}
                  />
                </div>
                {settings.cropEnabled && (
                  <div className="setting-dual">
                    <div>
                      <span>Top Offset ({settings.cropTop}px)</span>
                      <input
                        type="range"
                        min="0"
                        max="200"
                        value={settings.cropTop}
                        onChange={(e) => onUpdateSettings({ cropTop: parseInt(e.target.value) })}
                      />
                    </div>
                    <div>
                      <span>Visible Height ({settings.cropHeight}px)</span>
                      <input
                        type="range"
                        min="100"
                        max="400"
                        value={settings.cropHeight}
                        onChange={(e) => onUpdateSettings({ cropHeight: parseInt(e.target.value) })}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Editable Content Area with Optional Crop Masking */}
          <div
            className={\`float-panel-scroll-container \${settings.cropEnabled ? 'cropped-mask' : ''}\`}
            style={
              settings.cropEnabled
                ? {
                    height: \`\${settings.cropHeight}px\`,
                    maxHeight: \`\${settings.cropHeight}px\`,
                    flex: '0 1 auto',
                  }
                : {}
            }
          >
            <div
              ref={editorRef}
              className="float-panel-body-editable"
              contentEditable
              suppressContentEditableWarning
              onInput={handleEditorInput}
              placeholder="Start writing inside floating bubble..."
            />
          </div>
        </div>
      )}
    </>
  );
};
`,Pg=`import React from 'react';
import { Pin, Copy, Download, Archive, Trash2, FileCode } from 'lucide-react';
import { NoteNode } from '../types';

interface ActionSheetProps {
  longPressNode: NoteNode | null;
  onClose: () => void;
  onTogglePin: (id: string) => void;
  onCopyNote: (node: NoteNode) => void;
  onDownloadPdf: (node: NoteNode) => void;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
  onOpenCodeExport?: () => void;
}

export const ActionSheet: React.FC<ActionSheetProps> = ({
  longPressNode,
  onClose,
  onTogglePin,
  onCopyNote,
  onDownloadPdf,
  onArchive,
  onDelete,
  onOpenCodeExport,
}) => {
  if (!longPressNode) return null;

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-title">{longPressNode.title || 'Untitled Note'}</div>

        <button
          className={\`sheet-item \${longPressNode.pinned ? 'active-pin' : ''}\`}
          onClick={() => onTogglePin(longPressNode.id)}
        >
          <Pin size={16} />
          {longPressNode.pinned ? 'Unpin note (Return to normal position)' : 'Pin note (Move to top by time pinned)'}
        </button>

        <button className="sheet-item" onClick={() => onCopyNote(longPressNode)}>
          <Copy size={16} /> Copy content
        </button>

        <button className="sheet-item" onClick={() => onDownloadPdf(longPressNode)}>
          <Download size={16} /> Download Note as PDF
        </button>

        {onOpenCodeExport && (
          <button
            className="sheet-item"
            onClick={() => {
              onClose();
              onOpenCodeExport();
            }}
          >
            <FileCode size={16} /> Download Project Code as PDF
          </button>
        )}

        <button className="sheet-item" onClick={() => onArchive(longPressNode.id)}>
          <Archive size={16} /> Archive note
        </button>

        <button className="sheet-item danger" onClick={() => onDelete(longPressNode.id)}>
          <Trash2 size={16} /> Delete to Recycle Bin
        </button>

        <button className="sheet-cancel" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
`,Ug=`import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { NoteNode, SearchResult } from '../types';
import { collectSearchResults, pathTitles } from '../utils/tree';

interface SearchModalProps {
  tree: NoteNode;
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (result: SearchResult, query: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  tree,
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    const q = searchQuery.trim();
    if (!q || !tree) return [];
    const out: SearchResult[] = [];
    collectSearchResults(tree, q, [], out);
    return out.slice(0, 60);
  }, [searchQuery, tree]);

  if (!isOpen) return null;

  return (
    <div className="search-backdrop" onClick={onClose}>
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-row">
          <Search size={18} />
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search all notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') onClose();
              if (e.key === 'Enter' && searchResults.length > 0) {
                onSelectResult(searchResults[0], searchQuery.trim());
              }
            }}
          />
          <button className="search-close-btn" onClick={onClose}>
            <X size={16} />
          </button>
        </div>

        <div className="search-results">
          {searchQuery.trim() === '' ? (
            <div className="search-empty">Type any word to find notes instantly</div>
          ) : searchResults.length === 0 ? (
            <div className="search-empty">No notes match “{searchQuery.trim()}”</div>
          ) : (
            searchResults.map((r) => {
              const crumbs = pathTitles(tree, r.path);
              const crumbText = crumbs.length ? \`Home / \${crumbs.join(' / ')}\` : 'Home';
              const q = searchQuery.trim();

              let titleNode: React.ReactNode = r.title;
              const qIdx = r.title.toLowerCase().indexOf(q.toLowerCase());
              if (r.matchType === 'title' && qIdx !== -1) {
                titleNode = (
                  <>
                    {r.title.slice(0, qIdx)}
                    <mark className="result-hit">{r.title.slice(qIdx, qIdx + q.length)}</mark>
                    {r.title.slice(qIdx + q.length)}
                  </>
                );
              }

              return (
                <button
                  key={r.id}
                  className="search-result-item"
                  onClick={() => onSelectResult(r, q)}
                >
                  <div className="search-result-head">
                    <div className="search-result-title">{titleNode}</div>
                    {r.pinned && <span className="search-result-tag">PINNED</span>}
                    {r.archived && <span className="search-result-tag">ARCHIVED</span>}
                  </div>
                  {r.snippet && <div className="search-result-snippet">{
                    (() => {
                      const index = r.snippet.toLowerCase().indexOf(q.toLowerCase());
                      return index < 0 ? r.snippet : <>{r.snippet.slice(0, index)}<mark className="result-hit">{r.snippet.slice(index, index + q.length)}</mark>{r.snippet.slice(index + q.length)}</>;
                    })()
                  }</div>}
                  <div className="search-result-path">{crumbText}</div>
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
`,Fg=`import React from 'react';
import { ArchiveRestore, RotateCcw, Trash2 } from 'lucide-react';
import { NoteNode, TrashEntry } from '../types';
import { findNode } from '../utils/tree';

interface ArchiveTrashViewProps {
  mode: 'archive' | 'trash';
  currentNode: NoteNode;
  tree: NoteNode;
  trash: TrashEntry[];
  trashAreaId: string;
  onRestoreArchived: (id: string) => void;
  onRestoreTrash: (trashId: string) => void;
  onPermanentDelete: (trashId: string) => void;
  onDeleteNote: (id: string) => void;
}

export const ArchiveTrashView: React.FC<ArchiveTrashViewProps> = ({
  mode,
  currentNode,
  tree,
  trash,
  trashAreaId,
  onRestoreArchived,
  onRestoreTrash,
  onPermanentDelete,
  onDeleteNote,
}) => {
  if (mode === 'archive') {
    const archivedChildren = (currentNode.children || []).filter((c) => c.archived);

    return (
      <div className="board-scroll">
        <div className="board-inner">
          {archivedChildren.length === 0 ? (
            <div className="board-empty">
              <p>No archived notes in this page</p>
            </div>
          ) : (
            archivedChildren.map((child) => {
              const innerCount = (child.children || []).filter((c) => !c.archived).length;
              return (
                <div className="archive-row" key={child.id}>
                  <div className="archive-row-title">
                    {child.title || 'Untitled Note'}
                    <span>
                      {innerCount} nested note{innerCount === 1 ? '' : 's'} inside
                    </span>
                  </div>
                  <button
                    className="archive-mini-btn"
                    onClick={() => onRestoreArchived(child.id)}
                    title="Restore to active page"
                  >
                    <ArchiveRestore size={16} />
                  </button>
                  <button
                    className="archive-mini-btn danger"
                    onClick={() => onDeleteNote(child.id)}
                    title="Move to Recycle Bin"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    );
  }

  // Trash Mode
  const areaTrash = trash.filter((t) => t.parentId === trashAreaId || (trashAreaId === 'root' && !findNode(tree, t.parentId)));

  return (
    <div className="board-scroll">
      <div className="board-inner">
        {areaTrash.length === 0 ? (
          <div className="board-empty">
            <p>Recycle bin is empty for this note area</p>
          </div>
        ) : (
          areaTrash.map((entry) => (
            <div className="archive-row" key={entry.id}>
              <div className="archive-row-title">
                {entry.node.title || 'Untitled Note'}
                {entry.node.pinned && <span className="pinned-tag">PINNED NOTE</span>}
                <span>
                  Deleted {new Date(entry.deletedAt).toLocaleDateString()}
                  {entry.node.children && entry.node.children.length > 0
                    ? \` · \${entry.node.children.length} nested note\${
                        entry.node.children.length === 1 ? '' : 's'
                      } inside will restore too\`
                    : ''}
                </span>
              </div>
              <button
                className="archive-mini-btn"
                onClick={() => onRestoreTrash(entry.id)}
                title="Restore to original parent page"
              >
                <RotateCcw size={16} />
              </button>
              <button
                className="archive-mini-btn danger"
                onClick={() => onPermanentDelete(entry.id)}
                title="Delete forever"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
`,qg=`import React, { useState } from 'react';
import {
  FileCode,
  Download,
  Copy,
  Check,
  X,
  FileText,
  ExternalLink,
  Sparkles,
  BookOpen,
  Code,
  Archive,
} from 'lucide-react';
import {
  CODEBASE_FILES,
  CORE_FEATURES_LIST,
  SourceFile,
  generateClientCodePdf,
} from '../utils/codeExport';

interface CodeExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const CodeExportModal: React.FC<CodeExportModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = useState<'files' | 'features'>('files');
  const [selectedFile, setSelectedFile] = useState<SourceFile>(CODEBASE_FILES[0]);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const totalLines = CODEBASE_FILES.reduce((acc, f) => acc + f.lines, 0);

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    onShowToast('Downloading comprehensive Codebase PDF...');
    try {
      const link = document.createElement('a');
      link.href = \`\${import.meta.env.BASE_URL}Pinboard_Notes_Codebase.pdf\`;
      link.download = 'Pinboard_Notes_Codebase.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onShowToast('Download started: Pinboard_Notes_Codebase.pdf');
    } catch (err) {
      try {
        generateClientCodePdf();
        onShowToast('PDF generated and downloaded successfully!');
      } catch (clientErr) {
        onShowToast('Could not download PDF');
      }
    } finally {
      setTimeout(() => setIsGenerating(false), 900);
    }
  };

  const handleDownloadZip = () => {
    onShowToast('Downloading Pinboard_Notes_Complete.zip...');
    try {
      const link = document.createElement('a');
      link.href = \`\${import.meta.env.BASE_URL}Pinboard_Notes_Complete.zip\`;
      link.download = 'Pinboard_Notes_Complete.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onShowToast('Download started: Pinboard_Notes_Complete.zip');
    } catch (err) {
      onShowToast('Could not download zip');
    }
  };

  const handleCopyCode = async (file: SourceFile) => {
    try {
      await navigator.clipboard.writeText(file.content);
      setCopiedPath(file.path);
      onShowToast(\`Copied \${file.path} to clipboard\`);
      setTimeout(() => setCopiedPath(null), 2000);
    } catch (e) {
      onShowToast('Failed to copy to clipboard');
    }
  };

  const handleDownloadSingleFile = (file: SourceFile) => {
    const blob = new Blob([file.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.path.split('/').pop() || 'code.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onShowToast(\`Downloaded \${file.path}\`);
  };

  return (
    <div className="sheet-backdrop" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="code-export-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="code-export-header">
          <div className="code-export-header-title">
            <div className="code-badge-icon">
              <FileCode size={20} />
            </div>
            <div>
              <h3>Complete Codebase & Architectural Specification</h3>
              <p>
                10 Core Feature Modules • {CODEBASE_FILES.length} Files • {totalLines.toLocaleString()} Lines of Code
              </p>
            </div>
          </div>

          <div className="code-export-header-actions">
            <button
              className="export-zip-btn"
              onClick={handleDownloadZip}
              title="Download entire project repository as a ZIP archive (includes PDF + all source files)"
            >
              <Archive size={16} />
              <span>Download ZIP</span>
            </button>

            <button
              className="export-pdf-main-btn"
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              title="Download the full architectural specification & unabridged codebase PDF"
            >
              <Download size={16} />
              <span>{isGenerating ? 'Preparing PDF...' : 'Download PDF'}</span>
            </button>

            <button className="icon-btn" onClick={onClose} title="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid var(--divider)', padding: '0 16px', background: 'rgba(0,0,0,0.03)' }}>
          <button
            onClick={() => setActiveTab('files')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 18px',
              border: 'none',
              background: 'transparent',
              color: activeTab === 'files' ? 'var(--accent1)' : 'var(--text-dim)',
              borderBottom: activeTab === 'files' ? '2px solid var(--accent1)' : '2px solid transparent',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            <Code size={15} />
            <span>Source Code Files ({CODEBASE_FILES.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('features')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 18px',
              border: 'none',
              background: 'transparent',
              color: activeTab === 'features' ? 'var(--accent1)' : 'var(--text-dim)',
              borderBottom: activeTab === 'features' ? '2px solid var(--accent1)' : '2px solid transparent',
              fontWeight: 600,
              fontSize: 13,
              cursor: 'pointer',
            }}
          >
            <BookOpen size={15} />
            <span>Feature Specifications ({CORE_FEATURES_LIST.length})</span>
          </button>
        </div>

        {/* Tab 1: Source Files */}
        {activeTab === 'files' && (
          <div className="code-export-body">
            {/* File sidebar list */}
            <div className="code-file-list">
              <div className="code-list-title">Repository Files</div>
              {CODEBASE_FILES.map((file) => {
                const isSelected = selectedFile.path === file.path;
                return (
                  <button
                    key={file.path}
                    className={\`code-file-item \${isSelected ? 'active' : ''}\`}
                    onClick={() => setSelectedFile(file)}
                  >
                    <div className="file-item-left">
                      <FileText size={15} className="file-icon" />
                      <div className="file-info">
                        <span className="file-name">{file.path.split('/').pop()}</span>
                        <span className="file-path">{file.path}</span>
                      </div>
                    </div>
                    <div className="file-meta">
                      <span className="file-badge">{file.category}</span>
                      <span className="file-lines">{file.lines}L</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Code viewer */}
            <div className="code-preview-pane">
              <div className="code-pane-toolbar">
                <div className="pane-file-details">
                  <span className="pane-filename">{selectedFile.path}</span>
                  <span className="pane-desc">{selectedFile.description}</span>
                </div>
                <div className="pane-actions">
                  <button
                    className="pane-btn"
                    onClick={() => handleCopyCode(selectedFile)}
                    title="Copy file source code"
                  >
                    {copiedPath === selectedFile.path ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedPath === selectedFile.path ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    className="pane-btn"
                    onClick={() => handleDownloadSingleFile(selectedFile)}
                    title="Download this file"
                  >
                    <Download size={14} />
                    <span>Download File</span>
                  </button>
                </div>
              </div>

              <pre className="code-viewer-content">
                <code>
                  {selectedFile.content.split('\\n').map((line, idx) => (
                    <div key={idx} className="code-line">
                      <span className="code-line-number">{idx + 1}</span>
                      <span className="code-line-text">{line || ' '}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        )}

        {/* Tab 2: Feature Specifications */}
        {activeTab === 'features' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px 32px' }}>
            <div style={{ maxWidth: 860, margin: '0 auto' }}>
              <div style={{ marginBottom: 20 }}>
                <h4 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>
                  Architectural & Functional Blueprint (10 Modules)
                </h4>
                <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-dim)' }}>
                  Every feature engineered to specification, including tree mutations, drag-reorder physics, floating bubble parameters, and Recycle Bin landing flows.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
                {CORE_FEATURES_LIST.map((feat) => (
                  <div
                    key={feat.id}
                    style={{
                      background: 'var(--card-bg)',
                      border: '1px solid var(--card-border)',
                      borderRadius: 14,
                      padding: '16px 20px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <span
                        style={{
                          background: 'var(--pill-bg)',
                          border: '1px solid var(--pill-border)',
                          color: 'var(--accent1)',
                          fontSize: 11,
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: 6,
                        }}
                      >
                        {feat.id}
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                        {feat.title}
                      </span>
                    </div>
                    <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6, color: 'var(--text-dim)' }}>
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div className="code-export-footer">
          <div className="footer-left">
            <span className="pdf-info-pill">
              <Sparkles size={13} />
              Includes complete PDF document, 10 feature blueprints, and full source code
            </span>
          </div>
          <div className="footer-right" style={{ display: 'flex', gap: 10 }}>
            <a
              href={\`\${import.meta.env.BASE_URL}Pinboard_Notes_Complete.zip\`}
              download="Pinboard_Notes_Complete.zip"
              className="direct-pdf-link"
              title="Download entire codebase and PDF bundled as a ZIP file"
            >
              Direct ZIP Link <Archive size={13} />
            </a>
            <a
              href={\`\${import.meta.env.BASE_URL}Pinboard_Notes_Codebase.pdf\`}
              download="Pinboard_Notes_Codebase.pdf"
              className="direct-pdf-link"
              title="Direct link to static codebase PDF file"
            >
              Direct PDF <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
`,Yc=[{path:"src/App.tsx",category:"Core",description:"Main application logic, state orchestration, route handling, and PDF export trigger",content:_g,lines:_g.split(`
`).length},{path:"src/types.ts",category:"Types",description:"TypeScript interfaces for NoteNode, TrashEntry, BubbleSettings, and ViewMode",content:Tg,lines:Tg.split(`
`).length},{path:"src/components/BubblePin.tsx",category:"UI",description:"Editable floating bubble pin with customizable opacity, pop size, and viewport cropping",content:Bg,lines:Bg.split(`
`).length},{path:"src/components/BoardView.tsx",category:"UI",description:"Interactive board view separating pinned importance hierarchy and unpinned notes",content:Rg,lines:Rg.split(`
`).length},{path:"src/components/NoteCard.tsx",category:"UI",description:"Draggable note card with hold-to-reorder, pin indicators, and long-press menu",content:jg,lines:jg.split(`
`).length},{path:"src/components/EditorView.tsx",category:"UI",description:"Writing mode with rich text formatting, nested note chips, and standout bubble pop button",content:zg,lines:zg.split(`
`).length},{path:"src/components/TopBar.tsx",category:"UI",description:"Header with breadcrumb navigation, search, theme toggler, and code export trigger",content:Mg,lines:Mg.split(`
`).length},{path:"src/components/ActionSheet.tsx",category:"UI",description:"Context menu for pin/unpin, clipboard copy, PDF export, archive, and deletion",content:Pg,lines:Pg.split(`
`).length},{path:"src/components/ArchiveTrashView.tsx",category:"UI",description:"Recycle bin and archive manager with restoration to parent writing pages",content:Fg,lines:Fg.split(`
`).length},{path:"src/components/SearchModal.tsx",category:"UI",description:"Instant full-text search across titles and contents with highlighted snippets",content:Ug,lines:Ug.split(`
`).length},{path:"src/components/CodeExportModal.tsx",category:"UI",description:"In-app codebase explorer, file inspector, and downloadable PDF modal",content:qg,lines:qg.split(`
`).length},{path:"src/utils/tree.ts",category:"Utils",description:"Recursive tree algorithms, chronological pinned sorting, chips, and node cloning",content:Dg,lines:Dg.split(`
`).length},{path:"src/utils/storage.ts",category:"Utils",description:"Local storage persistence manager for state durability across sessions",content:Og,lines:Og.split(`
`).length},{path:"src/utils/codeExport.ts",category:"Utils",description:"Client-side code bundle and in-browser PDF generator engine",content:kg,lines:kg.split(`
`).length},{path:"src/main.tsx",category:"Entry",description:"Vite React application entry point and DOM root renderer",content:Cg,lines:Cg.split(`
`).length},{path:"src/vite-env.d.ts",category:"Types",description:"Vite client environment and module declarations for raw text assets",content:Eg,lines:Eg.split(`
`).length},{path:"src/index.css",category:"Styles",description:"Complete CSS variables, dual dark/light themes, animations, and modal styles",content:Lg,lines:Lg.split(`
`).length}],V1=[{id:"F01",title:"Hierarchical Tree Architecture & Path Navigation",desc:"Recursive note trees with deep paths, immutable mutations, and automated localStorage persistence."},{id:"F02",title:"Hierarchy of Importance: Pinning & Chronological Ordering",desc:"Pinned notes elevate to the top in descending order of pinnedAt timestamp. Unpinning restores previous position."},{id:"F03",title:"Hold & Arrange Notes' Order (Manual Drag & Drop)",desc:"Hold-and-drag interaction with grip handles, drop indicators, and persistent sequential order storage."},{id:"F04",title:"Editable Floating Bubble Pin & Customizable Viewport",desc:"Detached floating note with live two-way sync, opacity slider (20%-100%), pop size (48-96px), and viewport cropping."},{id:"F05",title:"Unique Standout Bubble Pop Button",desc:"Distinct vibrant gradient, ambient halo glow, spinning sparkle icon, and dedicated tooltip."},{id:"F06",title:"Recycle Bin & Pinned Note Restoration Flow",desc:"Deleted notes retain parent lineage. Restoring re-embeds note chips and navigates to the parent writing page."},{id:"F07",title:"Archive System with Instant Restoration",desc:"Soft archival hides completed items from active boards while keeping hierarchy intact for one-click unarchiving."},{id:"F08",title:"Instant Global Full-Text Search",desc:"Recursively searches titles and rich text with highlighted query snippets and deep stack breadcrumb navigation."},{id:"F09",title:"Dual PDF Export Engines (Note & Full Codebase)",desc:"Note-level PDF generation and complete 90+ page unabridged codebase PDF with line numbers and specifications."},{id:"F10",title:"Design System & Responsive Dual Themes",desc:"Midnight Dark and Warm Parchment Light modes with semantic CSS variable tokens."}];function Ux(){const o=new mt({unit:"pt",format:"a4",orientation:"portrait"}),a=o.internal.pageSize.getWidth(),r=o.internal.pageSize.getHeight(),l=36,f=48,u=40,m=a-l*2;o.setFillColor(30,58,138),o.rect(0,0,a,16,"F"),o.setFillColor(59,130,246),o.rect(0,16,a,4,"F"),o.setFont("helvetica","bold"),o.setFontSize(30),o.setTextColor(30,58,138),o.text("Pinboard Notes",l,86),o.setFont("helvetica","normal"),o.setFontSize(13),o.setTextColor(71,85,105),o.text("Complete Architectural Specification & Unabridged Source Code",l,108),o.setDrawColor(203,213,225),o.setLineWidth(1.5),o.line(l,124,a-l,124);let p=150;o.setFont("helvetica","bold"),o.setFontSize(12),o.setTextColor(30,58,138),o.text("Feature Specifications & Modules",l,p),p+=20,V1.forEach(g=>{o.setFont("helvetica","bold"),o.setFontSize(9),o.setTextColor(30,58,138),o.text(`[${g.id}] ${g.title}`,l+8,p),p+=12,o.setFont("helvetica","normal"),o.setFontSize(8),o.setTextColor(71,85,105);const b=o.splitTextToSize(g.desc,m-16);o.text(b,l+16,p),p+=b.length*10+6}),id(o,l,m,r),Yc.forEach(g=>{o.addPage();let b=f;o.setFillColor(30,58,138),o.roundedRect(l,b,m,28,4,4,"F"),o.setFont("courier","bold"),o.setFontSize(10.5),o.setTextColor(255,255,255),o.text(g.path,l+12,b+18),o.setFont("helvetica","normal"),o.setFontSize(8.5),o.setTextColor(219,234,254),o.text(`${g.category} • ${g.lines} Lines`,l+m-120,b+18),b+=36;const x=g.content.split(`
`);o.setFont("courier","normal"),o.setFontSize(7.2);const A=10.5;for(let L=0;L<x.length;L++){b+A>r-u&&(id(o,l,m,r),o.addPage(),b=f,o.setFillColor(241,245,249),o.roundedRect(l,b,m,18,3,3,"F"),o.setFont("courier","bold"),o.setFontSize(8),o.setTextColor(71,85,105),o.text(`${g.path} (continued)`,l+8,b+12),b+=26);const w=x[L],F=String(L+1).padStart(4," ")+" | ";L%2===0&&(o.setFillColor(252,253,255),o.rect(l,b-7.5,m,A,"F")),o.setFont("courier","bold"),o.setTextColor(148,163,184),o.text(F,l+4,b),o.setFont("courier","normal"),o.setTextColor(30,41,59);const U=o.splitTextToSize(w||" ",m-52);o.text(U[0],l+44,b),b+=A;for(const k of U.slice(1))b+A>r-u&&(id(o,l,m,r),o.addPage(),b=f),o.setFont("courier","normal"),o.setFontSize(7.2),o.setTextColor(30,41,59),o.text(k,l+44,b),b+=A}id(o,l,m,r)}),o.save("Pinboard_Notes_Codebase.pdf")}function id(o,a,r,l){const f=o.internal.getCurrentPageInfo().pageNumber;o.setFont("helvetica","normal"),o.setFontSize(7.5),o.setTextColor(148,163,184),o.text("Pinboard Notes — Complete Codebase & Feature Specification",a,l-18),o.text(`Page ${f}`,a+r-36,l-18)}const Fx=({isOpen:o,onClose:a,onShowToast:r})=>{const[l,f]=et.useState("files"),[u,m]=et.useState(Yc[0]),[p,g]=et.useState(null),[b,x]=et.useState(!1);if(!o)return null;const A=Yc.reduce((k,j)=>k+j.lines,0),L=async()=>{x(!0),r("Downloading comprehensive Codebase PDF...");try{const k=document.createElement("a");k.href="./Pinboard_Notes_Codebase.pdf",k.download="Pinboard_Notes_Codebase.pdf",document.body.appendChild(k),k.click(),document.body.removeChild(k),r("Download started: Pinboard_Notes_Codebase.pdf")}catch{try{Ux(),r("PDF generated and downloaded successfully!")}catch{r("Could not download PDF")}}finally{setTimeout(()=>x(!1),900)}},w=()=>{r("Downloading Pinboard_Notes_Complete.zip...");try{const k=document.createElement("a");k.href="./Pinboard_Notes_Complete.zip",k.download="Pinboard_Notes_Complete.zip",document.body.appendChild(k),k.click(),document.body.removeChild(k),r("Download started: Pinboard_Notes_Complete.zip")}catch{r("Could not download zip")}},F=async k=>{try{await navigator.clipboard.writeText(k.content),g(k.path),r(`Copied ${k.path} to clipboard`),setTimeout(()=>g(null),2e3)}catch{r("Failed to copy to clipboard")}},U=k=>{const j=new Blob([k.content],{type:"text/plain;charset=utf-8"}),ne=URL.createObjectURL(j),te=document.createElement("a");te.href=ne,te.download=k.path.split("/").pop()||"code.txt",document.body.appendChild(te),te.click(),document.body.removeChild(te),URL.revokeObjectURL(ne),r(`Downloaded ${k.path}`)};return q.jsx("div",{className:"sheet-backdrop",onClick:a,style:{zIndex:1100},children:q.jsxs("div",{className:"code-export-modal",onClick:k=>k.stopPropagation(),role:"dialog","aria-modal":"true",children:[q.jsxs("div",{className:"code-export-header",children:[q.jsxs("div",{className:"code-export-header-title",children:[q.jsx("div",{className:"code-badge-icon",children:q.jsx(xd,{size:20})}),q.jsxs("div",{children:[q.jsx("h3",{children:"Complete Codebase & Architectural Specification"}),q.jsxs("p",{children:["10 Core Feature Modules • ",Yc.length," Files • ",A.toLocaleString()," Lines of Code"]})]})]}),q.jsxs("div",{className:"code-export-header-actions",children:[q.jsxs("button",{className:"export-zip-btn",onClick:w,title:"Download entire project repository as a ZIP archive (includes PDF + all source files)",children:[q.jsx(gd,{size:16}),q.jsx("span",{children:"Download ZIP"})]}),q.jsxs("button",{className:"export-pdf-main-btn",onClick:L,disabled:b,title:"Download the full architectural specification & unabridged codebase PDF",children:[q.jsx(md,{size:16}),q.jsx("span",{children:b?"Preparing PDF...":"Download PDF"})]}),q.jsx("button",{className:"icon-btn",onClick:a,title:"Close modal",children:q.jsx(wd,{size:18})})]})]}),q.jsxs("div",{style:{display:"flex",borderBottom:"1px solid var(--divider)",padding:"0 16px",background:"rgba(0,0,0,0.03)"},children:[q.jsxs("button",{onClick:()=>f("files"),style:{display:"flex",alignItems:"center",gap:8,padding:"12px 18px",border:"none",background:"transparent",color:l==="files"?"var(--accent1)":"var(--text-dim)",borderBottom:l==="files"?"2px solid var(--accent1)":"2px solid transparent",fontWeight:600,fontSize:13,cursor:"pointer"},children:[q.jsx(Z4,{size:15}),q.jsxs("span",{children:["Source Code Files (",Yc.length,")"]})]}),q.jsxs("button",{onClick:()=>f("features"),style:{display:"flex",alignItems:"center",gap:8,padding:"12px 18px",border:"none",background:"transparent",color:l==="features"?"var(--accent1)":"var(--text-dim)",borderBottom:l==="features"?"2px solid var(--accent1)":"2px solid transparent",fontWeight:600,fontSize:13,cursor:"pointer"},children:[q.jsx(H4,{size:15}),q.jsxs("span",{children:["Feature Specifications (",V1.length,")"]})]})]}),l==="files"&&q.jsxs("div",{className:"code-export-body",children:[q.jsxs("div",{className:"code-file-list",children:[q.jsx("div",{className:"code-list-title",children:"Repository Files"}),Yc.map(k=>{const j=u.path===k.path;return q.jsxs("button",{className:`code-file-item ${j?"active":""}`,onClick:()=>m(k),children:[q.jsxs("div",{className:"file-item-left",children:[q.jsx(Fm,{size:15,className:"file-icon"}),q.jsxs("div",{className:"file-info",children:[q.jsx("span",{className:"file-name",children:k.path.split("/").pop()}),q.jsx("span",{className:"file-path",children:k.path})]})]}),q.jsxs("div",{className:"file-meta",children:[q.jsx("span",{className:"file-badge",children:k.category}),q.jsxs("span",{className:"file-lines",children:[k.lines,"L"]})]})]},k.path)})]}),q.jsxs("div",{className:"code-preview-pane",children:[q.jsxs("div",{className:"code-pane-toolbar",children:[q.jsxs("div",{className:"pane-file-details",children:[q.jsx("span",{className:"pane-filename",children:u.path}),q.jsx("span",{className:"pane-desc",children:u.description})]}),q.jsxs("div",{className:"pane-actions",children:[q.jsxs("button",{className:"pane-btn",onClick:()=>F(u),title:"Copy file source code",children:[p===u.path?q.jsx(G4,{size:14}):q.jsx(J1,{size:14}),q.jsx("span",{children:p===u.path?"Copied":"Copy"})]}),q.jsxs("button",{className:"pane-btn",onClick:()=>U(u),title:"Download this file",children:[q.jsx(md,{size:14}),q.jsx("span",{children:"Download File"})]})]})]}),q.jsx("pre",{className:"code-viewer-content",children:q.jsx("code",{children:u.content.split(`
`).map((k,j)=>q.jsxs("div",{className:"code-line",children:[q.jsx("span",{className:"code-line-number",children:j+1}),q.jsx("span",{className:"code-line-text",children:k||" "})]},j))})})]})]}),l==="features"&&q.jsx("div",{style:{flex:1,overflowY:"auto",padding:"24px 32px"},children:q.jsxs("div",{style:{maxWidth:860,margin:"0 auto"},children:[q.jsxs("div",{style:{marginBottom:20},children:[q.jsx("h4",{style:{margin:0,fontSize:16,fontWeight:700,color:"var(--text)"},children:"Architectural & Functional Blueprint (10 Modules)"}),q.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"var(--text-dim)"},children:"Every feature engineered to specification, including tree mutations, drag-reorder physics, floating bubble parameters, and Recycle Bin landing flows."})]}),q.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:16},children:V1.map(k=>q.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--card-border)",borderRadius:14,padding:"16px 20px"},children:[q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[q.jsx("span",{style:{background:"var(--pill-bg)",border:"1px solid var(--pill-border)",color:"var(--accent1)",fontSize:11,fontWeight:800,padding:"2px 8px",borderRadius:6},children:k.id}),q.jsx("span",{style:{fontSize:14,fontWeight:700,color:"var(--text)"},children:k.title})]}),q.jsx("p",{style:{margin:0,fontSize:12.5,lineHeight:1.6,color:"var(--text-dim)"},children:k.desc})]},k.id))})]})}),q.jsxs("div",{className:"code-export-footer",children:[q.jsx("div",{className:"footer-left",children:q.jsxs("span",{className:"pdf-info-pill",children:[q.jsx(Hm,{size:13}),"Includes complete PDF document, 10 feature blueprints, and full source code"]})}),q.jsxs("div",{className:"footer-right",style:{display:"flex",gap:10},children:[q.jsxs("a",{href:"./Pinboard_Notes_Complete.zip",download:"Pinboard_Notes_Complete.zip",className:"direct-pdf-link",title:"Download entire codebase and PDF bundled as a ZIP file",children:["Direct ZIP Link ",q.jsx(gd,{size:13})]}),q.jsxs("a",{href:"./Pinboard_Notes_Codebase.pdf",download:"Pinboard_Notes_Codebase.pdf",className:"direct-pdf-link",title:"Direct link to static codebase PDF file",children:["Direct PDF ",q.jsx(Um,{size:13})]})]})]})]})})};function qx(){const[o,a]=et.useState(null),[r,l]=et.useState([]),[f,u]=et.useState("dark"),[m,p]=et.useState(H1),[g,b]=et.useState(!1),[x,A]=et.useState(!1),[L,w]=et.useState(!1),[F,U]=et.useState(["root"]),[k,j]=et.useState("board"),[ne,te]=et.useState(null),[W,pe]=et.useState(null),[ke,ye]=et.useState(null),[oe,K]=et.useState(!1),[ve,E]=et.useState(!1),[B,X]=et.useState("root"),Q=et.useRef(null);et.useEffect(()=>{let Me=!1;return(async()=>{try{const xe=await C4();if(Me)return;xe?(a(xe.tree||L1()),l(xe.trash||[]),u(xe.theme||"dark"),xe.bubbleSettings&&p({...H1,...xe.bubbleSettings})):a(L1())}catch{Me||A(!0)}finally{Me||b(!0)}})(),()=>{Me=!0}},[]),et.useEffect(()=>{document.documentElement.setAttribute("data-theme",f)},[f]),et.useLayoutEffect(()=>{!g||!o||x||T4({tree:o,trash:r,theme:f,bubbleSettings:m}).then(Me=>{w(!Me)})},[o,r,f,m,g,x]),et.useEffect(()=>()=>clearTimeout(Q.current),[]);const le=et.useCallback(Me=>{ye(Me),clearTimeout(Q.current),Q.current=setTimeout(()=>ye(null),1800)},[]),ee=et.useCallback(Me=>{a(xe=>{if(!xe)return L1();const Ve=Hu(xe);return Me(Ve),Ve})},[]),ue=F[F.length-1]||"root",re=o?fi(o,ue)||o:null,Ce=o&&ne?fi(o,ne):null,ze=o&&W?fi(o,W):null,Be=o?fi(o,B):null,R=()=>{const Me=E1();ee(xe=>{const Ve=fi(xe,ue)||xe;Ve.children||(Ve.children=[]),Ve.children.push({id:Me,title:"Untitled Note",content:"",archived:!1,pinned:!1,pinnedAt:null,order:Ve.children.length,children:[],createdAt:Date.now(),updatedAt:Date.now()})}),le("New note created")},Z=()=>{const Me=E1(),xe="Untitled Note";ee(Ve=>{const Ie=fi(Ve,ue)||Ve;Ie.children||(Ie.children=[]),Ie.children.push({id:Me,title:xe,content:"",archived:!1,pinned:!1,pinnedAt:null,order:Ie.children.length,children:[],createdAt:Date.now(),updatedAt:Date.now()}),Ie.content=(Ie.content||"")+O1(Me,xe,!1)+"<br>",Ie.updatedAt=Date.now()}),le("Nested note inserted")},_=Me=>{const xe=o&&Mm(o,Me);xe&&(j("write"),U(xe))},I=()=>{if(F.length<=1)return;const Me=F.slice(0,-1);U(Me),Me[Me.length-1]==="root"&&j("board")},$=Me=>{var Ve;const xe=!o||!((Ve=fi(o,Me))!=null&&Ve.pinned);ee(Ie=>{const Ke=fi(Ie,Me);Ke&&(Ke.pinned=!Ke.pinned,Ke.pinnedAt=Ke.pinned?Date.now():null)}),te(null),le(xe?"Pinned to top of page":"Unpinned — returned to normal list")},ae=async Me=>{const xe=`${Me.title||"Untitled Note"}

${Xu(Me.content)}`;let Ve=!1;try{navigator.clipboard&&navigator.clipboard.writeText&&(await navigator.clipboard.writeText(xe),Ve=!0)}catch{Ve=!1}if(!Ve){const Ie=document.createElement("textarea");Ie.value=xe,Ie.style.position="fixed",Ie.style.opacity="0",document.body.appendChild(Ie),Ie.focus(),Ie.select();try{Ve=document.execCommand("copy")}catch{Ve=!1}document.body.removeChild(Ie)}le(Ve?"Copied note content":"Could not copy note"),te(null)},we=async Me=>{le("Generating PDF...");try{const xe=new mt({unit:"pt",format:"a4"}),Ve=48,Ie=xe.internal.pageSize.getWidth(),Ke=xe.internal.pageSize.getHeight(),at=Ie-Ve*2;let At=60;xe.setFont("helvetica","bold"),xe.setFontSize(20),xe.splitTextToSize(Me.title||"Untitled Note",at).forEach(Nt=>{At>Ke-50&&(xe.addPage(),At=60),xe.text(Nt,Ve,At),At+=24}),At+=16,xe.setFont("helvetica","normal"),xe.setFontSize(12);const wt=Xu(Me.content)||" ",Pt=xe.splitTextToSize(wt,at),Ut=18;Pt.forEach(Nt=>{At>Ke-50&&(xe.addPage(),At=60),xe.text(Nt,Ve,At),At+=Ut});const $e=(Me.title||"note").replace(/[^a-z0-9\-_ ]/gi,"").trim()||"note";xe.save(`${$e}.pdf`),le("PDF downloaded")}catch{le("Could not generate PDF")}te(null)},Se=Me=>{if(!o)return;const xe=Hu(o),Ve=I1(xe,Me),Ie=fi(xe,Me);Ie&&(Rm(xe,Me),a(xe),l(Ke=>[{id:E1(),node:Hu(Ie),parentId:Ve?Ve.id:"root",deletedAt:Date.now()},...Ke]),te(null),le("Moved note to Recycle Bin"))},Oe=Me=>{const xe=r.find(at=>at.id===Me);if(!xe||!o)return;const Ve=Hu(o);let Ie=fi(Ve,xe.parentId);Ie||(Ie=Ve);const Ke=Hu(xe.node);Ie.children||(Ie.children=[]),Ie.children.push(Ke),wg(Ie.content,Ke.id)||(Ie.content=(Ie.content||"")+O1(Ke.id,Ke.title,Ke.pinned)+"<br>"),a(Ve),l(at=>at.filter(At=>At.id!==Me)),le(Ke.pinned?"Restored pinned note to parent page":"Restored note to parent page")},Ee=Me=>{l(xe=>xe.filter(Ve=>Ve.id!==Me)),le("Permanently deleted")},qe=Me=>{ee(xe=>{const Ve=fi(xe,Me);Ve&&(Ve.archived=!0)}),te(null),le("Archived note")},Qe=Me=>{ee(xe=>{const Ve=fi(xe,Me);if(Ve){Ve.archived=!1;const Ie=I1(xe,Me);Ie&&!wg(Ie.content,Me)&&(Ie.content=(Ie.content||"")+O1(Me,Ve.title,Ve.pinned)+"<br>")}}),le("Restored note to parent page")},dt=Me=>{ee(xe=>{const Ve=fi(xe,ue);Ve&&(Ve.title=Me,Ve.updatedAt=Date.now())})},V=Me=>{ee(xe=>{const Ve=fi(xe,ue);Ve&&(Ve.content=Me,Ve.updatedAt=Date.now())})},Xe=(Me,xe,Ve)=>{ee(Ie=>{const Ke=fi(Ie,Me);Ke&&(Ke.title=xe,Ke.content=Ve,Ke.updatedAt=Date.now())})},pt=Me=>{U(Me.path),j("write"),K(!1)};return x?q.jsx("div",{className:"pb-shell pb-loading",children:q.jsx("span",{children:"Saved notes could not be read. Your stored data has been left unchanged. Back it up before repairing the storage record, then reload."})}):!g||!o||!re?q.jsx("div",{className:"pb-shell pb-loading",children:q.jsx("span",{children:"Loading Pinboard Notes..."})}):q.jsxs("div",{className:"pb-shell",children:[q.jsx(kx,{mode:k,currentNode:re,stack:F,theme:f,trashAreaNode:Be,onSetMode:j,onBack:I,onToggleTheme:()=>u(f==="dark"?"light":"dark"),onOpenSearch:()=>K(!0),onTitleChange:dt,onOpenTrashForArea:()=>{X(ue),j("trash")},onOpenCodeExport:()=>E(!0)}),k==="board"&&q.jsx(Mx,{currentNode:re,onOpenNote:_,onLongPressNote:te,onAddChild:R,onUpdateTree:ee}),k==="write"&&q.jsx(Rx,{currentNode:re,tree:o,stack:F,onBack:I,onSetModeBoard:()=>j("board"),onTitleChange:dt,onContentChange:V,onInsertNestedNote:Z,onPopOutBubble:()=>pe(ue),onNavigateToNote:_,onLongPressNote:te,onShowToast:le,onOpenCodeExport:()=>E(!0),onDownloadCurrentNotePdf:()=>re&&we(re)}),(k==="archive"||k==="trash")&&q.jsx(Px,{mode:k,currentNode:re,tree:o,trash:r,trashAreaId:B,onRestoreArchived:Qe,onRestoreTrash:Oe,onPermanentDelete:Ee,onDeleteNote:Se}),q.jsx(jx,{floatingNode:ze,settings:m,onUpdateSettings:Me=>p(xe=>({...xe,...Me})),onUpdateNodeContent:Xe,onCopyNote:ae,onShowToast:le,onClose:()=>pe(null)}),q.jsx(zx,{longPressNode:Ce,onClose:()=>te(null),onTogglePin:$,onCopyNote:ae,onDownloadPdf:we,onArchive:qe,onDelete:Se,onOpenCodeExport:()=>E(!0)}),q.jsx(Bx,{tree:o,isOpen:oe,onClose:()=>K(!1),onSelectResult:pt}),q.jsx(Fx,{isOpen:ve,onClose:()=>E(!1),onShowToast:le}),(L||ke)&&q.jsx("div",{className:"toast",children:L?"Could not save notes. Keep this page open and free browser storage.":ke})]})}Mb.createRoot(document.getElementById("root")).render(q.jsx(et.StrictMode,{children:q.jsx(qx,{})}));export{xn as _};
