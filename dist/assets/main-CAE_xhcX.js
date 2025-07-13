(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const d of u)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function l(u){const d={};return u.integrity&&(d.integrity=u.integrity),u.referrerPolicy&&(d.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?d.credentials="include":u.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(u){if(u.ep)return;u.ep=!0;const d=l(u);fetch(u.href,d)}})();function I0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function dp(r){if(Object.prototype.hasOwnProperty.call(r,"__esModule"))return r;var i=r.default;if(typeof i=="function"){var l=function s(){var u=!1;try{u=this instanceof s}catch{}return u?Reflect.construct(i,arguments,this.constructor):i.apply(this,arguments)};l.prototype=i.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(r).forEach(function(s){var u=Object.getOwnPropertyDescriptor(r,s);Object.defineProperty(l,s,u.get?u:{enumerable:!0,get:function(){return r[s]}})}),l}var Au={exports:{}},ul={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function fp(){if(l0)return ul;l0=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function l(s,u,d){var f=null;if(d!==void 0&&(f=""+d),u.key!==void 0&&(f=""+u.key),"key"in u){d={};for(var v in u)v!=="key"&&(d[v]=u[v])}else d=u;return u=d.ref,{$$typeof:r,type:s,key:f,ref:u!==void 0?u:null,props:d}}return ul.Fragment=i,ul.jsx=l,ul.jsxs=l,ul}var r0;function hp(){return r0||(r0=1,Au.exports=fp()),Au.exports}var h=hp(),zu={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function mp(){if(s0)return re;s0=1;var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),f=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function S(j){return j===null||typeof j!="object"?null:(j=w&&j[w]||j["@@iterator"],typeof j=="function"?j:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,U={};function D(j,Y,X){this.props=j,this.context=Y,this.refs=U,this.updater=X||k}D.prototype.isReactComponent={},D.prototype.setState=function(j,Y){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,Y,"setState")},D.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function A(){}A.prototype=D.prototype;function q(j,Y,X){this.props=j,this.context=Y,this.refs=U,this.updater=X||k}var G=q.prototype=new A;G.constructor=q,_(G,D.prototype),G.isPureReactComponent=!0;var Q=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},ae=Object.prototype.hasOwnProperty;function V(j,Y,X,Z,F,ge){return X=ge.ref,{$$typeof:r,type:j,key:Y,ref:X!==void 0?X:null,props:ge}}function fe(j,Y){return V(j.type,Y,void 0,void 0,void 0,j.props)}function me(j){return typeof j=="object"&&j!==null&&j.$$typeof===r}function Ke(j){var Y={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(X){return Y[X]})}var at=/\/+/g;function Be(j,Y){return typeof j=="object"&&j!==null&&j.key!=null?Ke(""+j.key):Y.toString(36)}function qa(){}function Ha(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(qa,qa):(j.status="pending",j.then(function(Y){j.status==="pending"&&(j.status="fulfilled",j.value=Y)},function(Y){j.status==="pending"&&(j.status="rejected",j.reason=Y)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function Je(j,Y,X,Z,F){var ge=typeof j;(ge==="undefined"||ge==="boolean")&&(j=null);var ne=!1;if(j===null)ne=!0;else switch(ge){case"bigint":case"string":case"number":ne=!0;break;case"object":switch(j.$$typeof){case r:case i:ne=!0;break;case b:return ne=j._init,Je(ne(j._payload),Y,X,Z,F)}}if(ne)return F=F(j),ne=Z===""?"."+Be(j,0):Z,Q(F)?(X="",ne!=null&&(X=ne.replace(at,"$&/")+"/"),Je(F,Y,X,"",function(oa){return oa})):F!=null&&(me(F)&&(F=fe(F,X+(F.key==null||j&&j.key===F.key?"":(""+F.key).replace(at,"$&/")+"/")+ne)),Y.push(F)),1;ne=0;var ut=Z===""?".":Z+":";if(Q(j))for(var Te=0;Te<j.length;Te++)Z=j[Te],ge=ut+Be(Z,Te),ne+=Je(Z,Y,X,ge,F);else if(Te=S(j),typeof Te=="function")for(j=Te.call(j),Te=0;!(Z=j.next()).done;)Z=Z.value,ge=ut+Be(Z,Te++),ne+=Je(Z,Y,X,ge,F);else if(ge==="object"){if(typeof j.then=="function")return Je(Ha(j),Y,X,Z,F);throw Y=String(j),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ne}function B(j,Y,X){if(j==null)return j;var Z=[],F=0;return Je(j,Z,"","",function(ge){return Y.call(X,ge,F++)}),Z}function K(j){if(j._status===-1){var Y=j._result;Y=Y(),Y.then(function(X){(j._status===0||j._status===-1)&&(j._status=1,j._result=X)},function(X){(j._status===0||j._status===-1)&&(j._status=2,j._result=X)}),j._status===-1&&(j._status=0,j._result=Y)}if(j._status===1)return j._result.default;throw j._result}var ee=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function Se(){}return re.Children={map:B,forEach:function(j,Y,X){B(j,function(){Y.apply(this,arguments)},X)},count:function(j){var Y=0;return B(j,function(){Y++}),Y},toArray:function(j){return B(j,function(Y){return Y})||[]},only:function(j){if(!me(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},re.Component=D,re.Fragment=l,re.Profiler=u,re.PureComponent=q,re.StrictMode=s,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,re.__COMPILER_RUNTIME={__proto__:null,c:function(j){return $.H.useMemoCache(j)}},re.cache=function(j){return function(){return j.apply(null,arguments)}},re.cloneElement=function(j,Y,X){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var Z=_({},j.props),F=j.key,ge=void 0;if(Y!=null)for(ne in Y.ref!==void 0&&(ge=void 0),Y.key!==void 0&&(F=""+Y.key),Y)!ae.call(Y,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Y.ref===void 0||(Z[ne]=Y[ne]);var ne=arguments.length-2;if(ne===1)Z.children=X;else if(1<ne){for(var ut=Array(ne),Te=0;Te<ne;Te++)ut[Te]=arguments[Te+2];Z.children=ut}return V(j.type,F,void 0,void 0,ge,Z)},re.createContext=function(j){return j={$$typeof:f,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:d,_context:j},j},re.createElement=function(j,Y,X){var Z,F={},ge=null;if(Y!=null)for(Z in Y.key!==void 0&&(ge=""+Y.key),Y)ae.call(Y,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(F[Z]=Y[Z]);var ne=arguments.length-2;if(ne===1)F.children=X;else if(1<ne){for(var ut=Array(ne),Te=0;Te<ne;Te++)ut[Te]=arguments[Te+2];F.children=ut}if(j&&j.defaultProps)for(Z in ne=j.defaultProps,ne)F[Z]===void 0&&(F[Z]=ne[Z]);return V(j,ge,void 0,void 0,null,F)},re.createRef=function(){return{current:null}},re.forwardRef=function(j){return{$$typeof:v,render:j}},re.isValidElement=me,re.lazy=function(j){return{$$typeof:b,_payload:{_status:-1,_result:j},_init:K}},re.memo=function(j,Y){return{$$typeof:p,type:j,compare:Y===void 0?null:Y}},re.startTransition=function(j){var Y=$.T,X={};$.T=X;try{var Z=j(),F=$.S;F!==null&&F(X,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(Se,ee)}catch(ge){ee(ge)}finally{$.T=Y}},re.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},re.use=function(j){return $.H.use(j)},re.useActionState=function(j,Y,X){return $.H.useActionState(j,Y,X)},re.useCallback=function(j,Y){return $.H.useCallback(j,Y)},re.useContext=function(j){return $.H.useContext(j)},re.useDebugValue=function(){},re.useDeferredValue=function(j,Y){return $.H.useDeferredValue(j,Y)},re.useEffect=function(j,Y,X){var Z=$.H;if(typeof X=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Z.useEffect(j,Y)},re.useId=function(){return $.H.useId()},re.useImperativeHandle=function(j,Y,X){return $.H.useImperativeHandle(j,Y,X)},re.useInsertionEffect=function(j,Y){return $.H.useInsertionEffect(j,Y)},re.useLayoutEffect=function(j,Y){return $.H.useLayoutEffect(j,Y)},re.useMemo=function(j,Y){return $.H.useMemo(j,Y)},re.useOptimistic=function(j,Y){return $.H.useOptimistic(j,Y)},re.useReducer=function(j,Y,X){return $.H.useReducer(j,Y,X)},re.useRef=function(j){return $.H.useRef(j)},re.useState=function(j){return $.H.useState(j)},re.useSyncExternalStore=function(j,Y,X){return $.H.useSyncExternalStore(j,Y,X)},re.useTransition=function(){return $.H.useTransition()},re.version="19.1.0",re}var o0;function tc(){return o0||(o0=1,zu.exports=mp()),zu.exports}var O=tc();const Ua=I0(O);var Nu={exports:{}},cl={},Ou={exports:{}},Ru={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u0;function gp(){return u0||(u0=1,function(r){function i(B,K){var ee=B.length;B.push(K);e:for(;0<ee;){var Se=ee-1>>>1,j=B[Se];if(0<u(j,K))B[Se]=K,B[ee]=j,ee=Se;else break e}}function l(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var K=B[0],ee=B.pop();if(ee!==K){B[0]=ee;e:for(var Se=0,j=B.length,Y=j>>>1;Se<Y;){var X=2*(Se+1)-1,Z=B[X],F=X+1,ge=B[F];if(0>u(Z,ee))F<j&&0>u(ge,Z)?(B[Se]=ge,B[F]=ee,Se=F):(B[Se]=Z,B[X]=ee,Se=X);else if(F<j&&0>u(ge,ee))B[Se]=ge,B[F]=ee,Se=F;else break e}}return K}function u(B,K){var ee=B.sortIndex-K.sortIndex;return ee!==0?ee:B.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,v=f.now();r.unstable_now=function(){return f.now()-v}}var m=[],p=[],b=1,w=null,S=3,k=!1,_=!1,U=!1,D=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;function Q(B){for(var K=l(p);K!==null;){if(K.callback===null)s(p);else if(K.startTime<=B)s(p),K.sortIndex=K.expirationTime,i(m,K);else break;K=l(p)}}function $(B){if(U=!1,Q(B),!_)if(l(m)!==null)_=!0,ae||(ae=!0,Be());else{var K=l(p);K!==null&&Je($,K.startTime-B)}}var ae=!1,V=-1,fe=5,me=-1;function Ke(){return D?!0:!(r.unstable_now()-me<fe)}function at(){if(D=!1,ae){var B=r.unstable_now();me=B;var K=!0;try{e:{_=!1,U&&(U=!1,q(V),V=-1),k=!0;var ee=S;try{t:{for(Q(B),w=l(m);w!==null&&!(w.expirationTime>B&&Ke());){var Se=w.callback;if(typeof Se=="function"){w.callback=null,S=w.priorityLevel;var j=Se(w.expirationTime<=B);if(B=r.unstable_now(),typeof j=="function"){w.callback=j,Q(B),K=!0;break t}w===l(m)&&s(m),Q(B)}else s(m);w=l(m)}if(w!==null)K=!0;else{var Y=l(p);Y!==null&&Je($,Y.startTime-B),K=!1}}break e}finally{w=null,S=ee,k=!1}K=void 0}}finally{K?Be():ae=!1}}}var Be;if(typeof G=="function")Be=function(){G(at)};else if(typeof MessageChannel<"u"){var qa=new MessageChannel,Ha=qa.port2;qa.port1.onmessage=at,Be=function(){Ha.postMessage(null)}}else Be=function(){A(at,0)};function Je(B,K){V=A(function(){B(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):fe=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(B){switch(S){case 1:case 2:case 3:var K=3;break;default:K=S}var ee=S;S=K;try{return B()}finally{S=ee}},r.unstable_requestPaint=function(){D=!0},r.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=S;S=B;try{return K()}finally{S=ee}},r.unstable_scheduleCallback=function(B,K,ee){var Se=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?Se+ee:Se):ee=Se,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ee+j,B={id:b++,callback:K,priorityLevel:B,startTime:ee,expirationTime:j,sortIndex:-1},ee>Se?(B.sortIndex=ee,i(p,B),l(m)===null&&B===l(p)&&(U?(q(V),V=-1):U=!0,Je($,ee-Se))):(B.sortIndex=j,i(m,B),_||k||(_=!0,ae||(ae=!0,Be()))),B},r.unstable_shouldYield=Ke,r.unstable_wrapCallback=function(B){var K=S;return function(){var ee=S;S=K;try{return B.apply(this,arguments)}finally{S=ee}}}}(Ru)),Ru}var c0;function pp(){return c0||(c0=1,Ou.exports=gp()),Ou.exports}var Cu={exports:{}},Ie={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function vp(){if(d0)return Ie;d0=1;var r=tc();function i(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)p+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(i(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},u=Symbol.for("react.portal");function d(m,p,b){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:m,containerInfo:p,implementation:b}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ie.createPortal=function(m,p){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return d(m,p,null,b)},Ie.flushSync=function(m){var p=f.T,b=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=b,s.d.f()}},Ie.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Ie.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Ie.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var b=p.as,w=v(b,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,k=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;b==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:k}):b==="script"&&s.d.X(m,{crossOrigin:w,integrity:S,fetchPriority:k,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ie.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var b=v(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Ie.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var b=p.as,w=v(b,p.crossOrigin);s.d.L(m,b,{crossOrigin:w,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ie.preloadModule=function(m,p){if(typeof m=="string")if(p){var b=v(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:b,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Ie.requestFormReset=function(m){s.d.r(m)},Ie.unstable_batchedUpdates=function(m,p){return m(p)},Ie.useFormState=function(m,p,b){return f.H.useFormState(m,p,b)},Ie.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ie.version="19.1.0",Ie}var f0;function yp(){if(f0)return Cu.exports;f0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Cu.exports=vp(),Cu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function bp(){if(h0)return cl;h0=1;var r=pp(),i=tc(),l=yp();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(d(e)!==e)throw Error(s(188))}function m(e){var t=e.alternate;if(!t){if(t=d(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,n=t;;){var o=a.return;if(o===null)break;var c=o.alternate;if(c===null){if(n=o.return,n!==null){a=n;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===a)return v(o),e;if(c===n)return v(o),t;c=c.sibling}throw Error(s(188))}if(a.return!==n.return)a=o,n=c;else{for(var g=!1,y=o.child;y;){if(y===a){g=!0,a=o,n=c;break}if(y===n){g=!0,n=o,a=c;break}y=y.sibling}if(!g){for(y=c.child;y;){if(y===a){g=!0,a=c,n=o;break}if(y===n){g=!0,n=c,a=o;break}y=y.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==n)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),q=Symbol.for("react.consumer"),G=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),me=Symbol.for("react.activity"),Ke=Symbol.for("react.memo_cache_sentinel"),at=Symbol.iterator;function Be(e){return e===null||typeof e!="object"?null:(e=at&&e[at]||e["@@iterator"],typeof e=="function"?e:null)}var qa=Symbol.for("react.client.reference");function Ha(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===qa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case D:return"Profiler";case U:return"StrictMode";case $:return"Suspense";case ae:return"SuspenseList";case me:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case G:return(e.displayName||"Context")+".Provider";case q:return(e._context.displayName||"Context")+".Consumer";case Q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case V:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case fe:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}var Je=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},Se=[],j=-1;function Y(e){return{current:e}}function X(e){0>j||(e.current=Se[j],Se[j]=null,j--)}function Z(e,t){j++,Se[j]=e.current,e.current=t}var F=Y(null),ge=Y(null),ne=Y(null),ut=Y(null);function Te(e,t){switch(Z(ne,t),Z(ge,e),Z(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Ch(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Ch(t),e=Dh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(F),Z(F,e)}function oa(){X(F),X(ge),X(ne)}function fs(e){e.memoizedState!==null&&Z(ut,e);var t=F.current,a=Dh(t,e.type);t!==a&&(Z(ge,e),Z(F,a))}function Rl(e){ge.current===e&&(X(F),X(ge)),ut.current===e&&(X(ut),il._currentValue=ee)}var hs=Object.prototype.hasOwnProperty,ms=r.unstable_scheduleCallback,gs=r.unstable_cancelCallback,$m=r.unstable_shouldYield,Vm=r.unstable_requestPaint,Ct=r.unstable_now,Zm=r.unstable_getCurrentPriorityLevel,fc=r.unstable_ImmediatePriority,hc=r.unstable_UserBlockingPriority,Cl=r.unstable_NormalPriority,Km=r.unstable_LowPriority,mc=r.unstable_IdlePriority,Xm=r.log,Qm=r.unstable_setDisableYieldValue,fi=null,ct=null;function ua(e){if(typeof Xm=="function"&&Qm(e),ct&&typeof ct.setStrictMode=="function")try{ct.setStrictMode(fi,e)}catch{}}var dt=Math.clz32?Math.clz32:Fm,Pm=Math.log,Jm=Math.LN2;function Fm(e){return e>>>=0,e===0?32:31-(Pm(e)/Jm|0)|0}var Dl=256,Ml=4194304;function La(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ul(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var o=0,c=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var y=n&134217727;return y!==0?(n=y&~c,n!==0?o=La(n):(g&=y,g!==0?o=La(g):a||(a=y&~e,a!==0&&(o=La(a))))):(y=n&~c,y!==0?o=La(y):g!==0?o=La(g):a||(a=n&~e,a!==0&&(o=La(a)))),o===0?0:t!==0&&t!==o&&(t&c)===0&&(c=o&-o,a=t&-t,c>=a||c===32&&(a&4194048)!==0)?t:o}function hi(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gc(){var e=Dl;return Dl<<=1,(Dl&4194048)===0&&(Dl=256),e}function pc(){var e=Ml;return Ml<<=1,(Ml&62914560)===0&&(Ml=4194304),e}function ps(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function mi(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Im(e,t,a,n,o,c){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var y=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(a=g&~a;0<a;){var M=31-dt(a),L=1<<M;y[M]=0,x[M]=-1;var R=N[M];if(R!==null)for(N[M]=null,M=0;M<R.length;M++){var C=R[M];C!==null&&(C.lane&=-536870913)}a&=~L}n!==0&&vc(e,n,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(g&~t))}function vc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-dt(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&4194090}function yc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-dt(a),o=1<<n;o&t|e[n]&t&&(e[n]|=t),a&=~o}}function vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ys(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bc(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Ih(e.type))}function e1(e,t){var a=K.p;try{return K.p=e,t()}finally{K.p=a}}var ca=Math.random().toString(36).slice(2),Fe="__reactFiber$"+ca,nt="__reactProps$"+ca,dn="__reactContainer$"+ca,bs="__reactEvents$"+ca,t1="__reactListeners$"+ca,a1="__reactHandles$"+ca,xc="__reactResources$"+ca,gi="__reactMarker$"+ca;function xs(e){delete e[Fe],delete e[nt],delete e[bs],delete e[t1],delete e[a1]}function fn(e){var t=e[Fe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[dn]||a[Fe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=qh(e);e!==null;){if(a=e[Fe])return a;e=qh(e)}return t}e=a,a=e.parentNode}return null}function hn(e){if(e=e[Fe]||e[dn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function pi(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function mn(e){var t=e[xc];return t||(t=e[xc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Le(e){e[gi]=!0}var wc=new Set,_c={};function Ga(e,t){gn(e,t),gn(e+"Capture",t)}function gn(e,t){for(_c[e]=t,e=0;e<t.length;e++)wc.add(t[e])}var n1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Sc={},jc={};function i1(e){return hs.call(jc,e)?!0:hs.call(Sc,e)?!1:n1.test(e)?jc[e]=!0:(Sc[e]=!0,!1)}function Bl(e,t,a){if(i1(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function ql(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Gt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}var ws,Ec;function pn(e){if(ws===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ws=t&&t[1]||"",Ec=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ws+e+Ec}var _s=!1;function Ss(e,t){if(!e||_s)return"";_s=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var L=function(){throw Error()};if(Object.defineProperty(L.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(L,[])}catch(C){var R=C}Reflect.construct(e,[],L)}else{try{L.call()}catch(C){R=C}e.call(L.prototype)}}else{try{throw Error()}catch(C){R=C}(L=e())&&typeof L.catch=="function"&&L.catch(function(){})}}catch(C){if(C&&R&&typeof C.stack=="string")return[C.stack,R.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=n.DetermineComponentFrameRoot(),g=c[0],y=c[1];if(g&&y){var x=g.split(`
`),N=y.split(`
`);for(o=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;o<N.length&&!N[o].includes("DetermineComponentFrameRoot");)o++;if(n===x.length||o===N.length)for(n=x.length-1,o=N.length-1;1<=n&&0<=o&&x[n]!==N[o];)o--;for(;1<=n&&0<=o;n--,o--)if(x[n]!==N[o]){if(n!==1||o!==1)do if(n--,o--,0>o||x[n]!==N[o]){var M=`
`+x[n].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=n&&0<=o);break}}}finally{_s=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?pn(a):""}function l1(e){switch(e.tag){case 26:case 27:case 5:return pn(e.type);case 16:return pn("Lazy");case 13:return pn("Suspense");case 19:return pn("SuspenseList");case 0:case 15:return Ss(e.type,!1);case 11:return Ss(e.type.render,!1);case 1:return Ss(e.type,!0);case 31:return pn("Activity");default:return""}}function kc(e){try{var t="";do t+=l1(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Tc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r1(e){var t=Tc(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var o=a.get,c=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(g){n=""+g,c.call(this,g)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(g){n=""+g},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hl(e){e._valueTracker||(e._valueTracker=r1(e))}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Tc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var s1=/[\n"\\]/g;function xt(e){return e.replace(s1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function js(e,t,a,n,o,c,g,y){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),t!=null?g==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),t!=null?Es(e,g,bt(t)):a!=null?Es(e,g,bt(a)):n!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.name=""+bt(y):e.removeAttribute("name")}function zc(e,t,a,n,o,c,g,y){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),t!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||t!=null))return;a=a!=null?""+bt(a):"",t=t!=null?""+bt(t):a,y||t===e.value||(e.value=t),e.defaultValue=t}n=n??o,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=y?e.checked:!!n,e.defaultChecked=!!n,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g)}function Es(e,t,a){t==="number"&&Ll(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function vn(e,t,a,n){if(e=e.options,t){t={};for(var o=0;o<a.length;o++)t["$"+a[o]]=!0;for(a=0;a<e.length;a++)o=t.hasOwnProperty("$"+e[a].value),e[a].selected!==o&&(e[a].selected=o),o&&n&&(e[a].defaultSelected=!0)}else{for(a=""+bt(a),t=null,o=0;o<e.length;o++){if(e[o].value===a){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Nc(e,t,a){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bt(a):""}function Oc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(s(92));if(Je(n)){if(1<n.length)throw Error(s(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=bt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n)}function yn(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var o1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||o1.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Cc(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var o in t)n=t[o],t.hasOwnProperty(o)&&a[o]!==n&&Rc(e,o,n)}else for(var c in t)t.hasOwnProperty(c)&&Rc(e,c,t[c])}function ks(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var u1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Gl(e){return c1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ts=null;function As(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bn=null,xn=null;function Dc(e){var t=hn(e);if(t&&(e=t.stateNode)){var a=e[nt]||null;e:switch(e=t.stateNode,t.type){case"input":if(js(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var o=n[nt]||null;if(!o)throw Error(s(90));js(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ac(n)}break e;case"textarea":Nc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&vn(e,!!a.multiple,t,!1)}}}var zs=!1;function Mc(e,t,a){if(zs)return e(t,a);zs=!0;try{var n=e(t);return n}finally{if(zs=!1,(bn!==null||xn!==null)&&(kr(),bn&&(t=bn,e=xn,xn=bn=null,Dc(t),e)))for(t=0;t<e.length;t++)Dc(e[t])}}function vi(e,t){var a=e.stateNode;if(a===null)return null;var n=a[nt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ns=!1;if(Yt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Ns=!1}var da=null,Os=null,Yl=null;function Uc(){if(Yl)return Yl;var e,t=Os,a=t.length,n,o="value"in da?da.value:da.textContent,c=o.length;for(e=0;e<a&&t[e]===o[e];e++);var g=a-e;for(n=1;n<=g&&t[a-n]===o[c-n];n++);return Yl=o.slice(e,1<n?1-n:void 0)}function $l(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vl(){return!0}function Bc(){return!1}function it(e){function t(a,n,o,c,g){this._reactName=a,this._targetInst=o,this.type=n,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(a=e[y],this[y]=a?a(c):c[y]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Vl:Bc,this.isPropagationStopped=Bc,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Vl)},persist:function(){},isPersistent:Vl}),t}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=it(Ya),bi=b({},Ya,{view:0,detail:0}),d1=it(bi),Rs,Cs,xi,Kl=b({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(Rs=e.screenX-xi.screenX,Cs=e.screenY-xi.screenY):Cs=Rs=0,xi=e),Rs)},movementY:function(e){return"movementY"in e?e.movementY:Cs}}),qc=it(Kl),f1=b({},Kl,{dataTransfer:0}),h1=it(f1),m1=b({},bi,{relatedTarget:0}),Ds=it(m1),g1=b({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),p1=it(g1),v1=b({},Ya,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),y1=it(v1),b1=b({},Ya,{data:0}),Hc=it(b1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_1[e])?!!t[e]:!1}function Ms(){return S1}var j1=b({},bi,{key:function(e){if(e.key){var t=x1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?w1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),E1=it(j1),k1=b({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lc=it(k1),T1=b({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),A1=it(T1),z1=b({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=it(z1),O1=b({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),R1=it(O1),C1=b({},Ya,{newState:0,oldState:0}),D1=it(C1),M1=[9,13,27,32],Us=Yt&&"CompositionEvent"in window,wi=null;Yt&&"documentMode"in document&&(wi=document.documentMode);var U1=Yt&&"TextEvent"in window&&!wi,Gc=Yt&&(!Us||wi&&8<wi&&11>=wi),Yc=" ",$c=!1;function Vc(e,t){switch(e){case"keyup":return M1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function B1(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:($c=!0,Yc);case"textInput":return e=t.data,e===Yc&&$c?null:e;default:return null}}function q1(e,t){if(wn)return e==="compositionend"||!Us&&Vc(e,t)?(e=Uc(),Yl=Os=da=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gc&&t.locale!=="ko"?null:t.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H1[e.type]:t==="textarea"}function Xc(e,t,a,n){bn?xn?xn.push(n):xn=[n]:bn=n,t=Rr(t,"onChange"),0<t.length&&(a=new Zl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var _i=null,Si=null;function L1(e){Ah(e,0)}function Xl(e){var t=pi(e);if(Ac(t))return e}function Qc(e,t){if(e==="change")return t}var Pc=!1;if(Yt){var Bs;if(Yt){var qs="oninput"in document;if(!qs){var Jc=document.createElement("div");Jc.setAttribute("oninput","return;"),qs=typeof Jc.oninput=="function"}Bs=qs}else Bs=!1;Pc=Bs&&(!document.documentMode||9<document.documentMode)}function Fc(){_i&&(_i.detachEvent("onpropertychange",Wc),Si=_i=null)}function Wc(e){if(e.propertyName==="value"&&Xl(Si)){var t=[];Xc(t,Si,e,As(e)),Mc(L1,t)}}function G1(e,t,a){e==="focusin"?(Fc(),_i=t,Si=a,_i.attachEvent("onpropertychange",Wc)):e==="focusout"&&Fc()}function Y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xl(Si)}function $1(e,t){if(e==="click")return Xl(t)}function V1(e,t){if(e==="input"||e==="change")return Xl(t)}function Z1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Z1;function ji(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var o=a[n];if(!hs.call(t,o)||!ft(e[o],t[o]))return!1}return!0}function Ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ed(e,t){var a=Ic(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ic(a)}}function td(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?td(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ad(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ll(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ll(e.document)}return t}function Hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var K1=Yt&&"documentMode"in document&&11>=document.documentMode,_n=null,Ls=null,Ei=null,Gs=!1;function nd(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gs||_n==null||_n!==Ll(n)||(n=_n,"selectionStart"in n&&Hs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ei&&ji(Ei,n)||(Ei=n,n=Rr(Ls,"onSelect"),0<n.length&&(t=new Zl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=_n)))}function $a(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Sn={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Ys={},id={};Yt&&(id=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Va(e){if(Ys[e])return Ys[e];if(!Sn[e])return e;var t=Sn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in id)return Ys[e]=t[a];return e}var ld=Va("animationend"),rd=Va("animationiteration"),sd=Va("animationstart"),X1=Va("transitionrun"),Q1=Va("transitionstart"),P1=Va("transitioncancel"),od=Va("transitionend"),ud=new Map,$s="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$s.push("scrollEnd");function At(e,t){ud.set(e,t),Ga(t,[e])}var cd=new WeakMap;function wt(e,t){if(typeof e=="object"&&e!==null){var a=cd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:kc(t)},cd.set(e,t),t)}return{value:e,source:t,stack:kc(t)}}var _t=[],jn=0,Vs=0;function Ql(){for(var e=jn,t=Vs=jn=0;t<e;){var a=_t[t];_t[t++]=null;var n=_t[t];_t[t++]=null;var o=_t[t];_t[t++]=null;var c=_t[t];if(_t[t++]=null,n!==null&&o!==null){var g=n.pending;g===null?o.next=o:(o.next=g.next,g.next=o),n.pending=o}c!==0&&dd(a,o,c)}}function Pl(e,t,a,n){_t[jn++]=e,_t[jn++]=t,_t[jn++]=a,_t[jn++]=n,Vs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Zs(e,t,a,n){return Pl(e,t,a,n),Jl(e)}function En(e,t){return Pl(e,null,null,t),Jl(e)}function dd(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var o=!1,c=e.return;c!==null;)c.childLanes|=a,n=c.alternate,n!==null&&(n.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&t!==null&&(o=31-dt(a),e=c.hiddenUpdates,n=e[o],n===null?e[o]=[t]:n.push(t),t.lane=a|536870912),c):null}function Jl(e){if(50<Ji)throw Ji=0,Wo=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var kn={};function J1(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,a,n){return new J1(e,t,a,n)}function Ks(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $t(e,t){var a=e.alternate;return a===null?(a=ht(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fd(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Fl(e,t,a,n,o,c){var g=0;if(n=e,typeof e=="function")Ks(e)&&(g=1);else if(typeof e=="string")g=Wg(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case me:return e=ht(31,a,t,o),e.elementType=me,e.lanes=c,e;case _:return Za(a.children,o,c,t);case U:g=8,o|=24;break;case D:return e=ht(12,a,t,o|2),e.elementType=D,e.lanes=c,e;case $:return e=ht(13,a,t,o),e.elementType=$,e.lanes=c,e;case ae:return e=ht(19,a,t,o),e.elementType=ae,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:case G:g=10;break e;case q:g=9;break e;case Q:g=11;break e;case V:g=14;break e;case fe:g=16,n=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),n=null}return t=ht(g,a,t,o),t.elementType=e,t.type=n,t.lanes=c,t}function Za(e,t,a,n){return e=ht(7,e,n,t),e.lanes=a,e}function Xs(e,t,a){return e=ht(6,e,null,t),e.lanes=a,e}function Qs(e,t,a){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Tn=[],An=0,Wl=null,Il=0,St=[],jt=0,Ka=null,Vt=1,Zt="";function Xa(e,t){Tn[An++]=Il,Tn[An++]=Wl,Wl=e,Il=t}function hd(e,t,a){St[jt++]=Vt,St[jt++]=Zt,St[jt++]=Ka,Ka=e;var n=Vt;e=Zt;var o=32-dt(n)-1;n&=~(1<<o),a+=1;var c=32-dt(t)+o;if(30<c){var g=o-o%5;c=(n&(1<<g)-1).toString(32),n>>=g,o-=g,Vt=1<<32-dt(t)+o|a<<o|n,Zt=c+e}else Vt=1<<c|a<<o|n,Zt=e}function Ps(e){e.return!==null&&(Xa(e,1),hd(e,1,0))}function Js(e){for(;e===Wl;)Wl=Tn[--An],Tn[An]=null,Il=Tn[--An],Tn[An]=null;for(;e===Ka;)Ka=St[--jt],St[jt]=null,Zt=St[--jt],St[jt]=null,Vt=St[--jt],St[jt]=null}var tt=null,Oe=null,ve=!1,Qa=null,Dt=!1,Fs=Error(s(519));function Pa(e){var t=Error(s(418,""));throw Ai(wt(t,e)),Fs}function md(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Fe]=e,t[nt]=n,a){case"dialog":ce("cancel",t),ce("close",t);break;case"iframe":case"object":case"embed":ce("load",t);break;case"video":case"audio":for(a=0;a<Wi.length;a++)ce(Wi[a],t);break;case"source":ce("error",t);break;case"img":case"image":case"link":ce("error",t),ce("load",t);break;case"details":ce("toggle",t);break;case"input":ce("invalid",t),zc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0),Hl(t);break;case"select":ce("invalid",t);break;case"textarea":ce("invalid",t),Oc(t,n.value,n.defaultValue,n.children),Hl(t)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Rh(t.textContent,a)?(n.popover!=null&&(ce("beforetoggle",t),ce("toggle",t)),n.onScroll!=null&&ce("scroll",t),n.onScrollEnd!=null&&ce("scrollend",t),n.onClick!=null&&(t.onclick=Cr),t=!0):t=!1,t||Pa(e)}function gd(e){for(tt=e.return;tt;)switch(tt.tag){case 5:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:tt=tt.return}}function ki(e){if(e!==tt)return!1;if(!ve)return gd(e),ve=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||mu(e.type,e.memoizedProps)),a=!a),a&&Oe&&Pa(e),gd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Oe=Nt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,Ta(e.type)?(e=yu,yu=null,Oe=e):Oe=t):Oe=tt?Nt(e.stateNode.nextSibling):null;return!0}function Ti(){Oe=tt=null,ve=!1}function pd(){var e=Qa;return e!==null&&(st===null?st=e:st.push.apply(st,e),Qa=null),e}function Ai(e){Qa===null?Qa=[e]:Qa.push(e)}var Ws=Y(null),Ja=null,Kt=null;function fa(e,t,a){Z(Ws,t._currentValue),t._currentValue=a}function Xt(e){e._currentValue=Ws.current,X(Ws)}function Is(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function eo(e,t,a,n){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var g=o.child;c=c.firstContext;e:for(;c!==null;){var y=c;c=o;for(var x=0;x<t.length;x++)if(y.context===t[x]){c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),Is(c.return,a,e),n||(g=null);break e}c=y.next}}else if(o.tag===18){if(g=o.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),Is(g,a,e),g=null}else g=o.child;if(g!==null)g.return=o;else for(g=o;g!==null;){if(g===e){g=null;break}if(o=g.sibling,o!==null){o.return=g.return,g=o;break}g=g.return}o=g}}function zi(e,t,a,n){e=null;for(var o=t,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var g=o.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var y=o.type;ft(o.pendingProps.value,g.value)||(e!==null?e.push(y):e=[y])}}else if(o===ut.current){if(g=o.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(il):e=[il])}o=o.return}e!==null&&eo(t,e,a,n),t.flags|=262144}function er(e){for(e=e.firstContext;e!==null;){if(!ft(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fa(e){Ja=e,Kt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function We(e){return vd(Ja,e)}function tr(e,t){return Ja===null&&Fa(e),vd(e,t)}function vd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Kt===null){if(e===null)throw Error(s(308));Kt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Kt=Kt.next=t;return a}var F1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},W1=r.unstable_scheduleCallback,I1=r.unstable_NormalPriority,qe={$$typeof:G,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new F1,data:new Map,refCount:0}}function Ni(e){e.refCount--,e.refCount===0&&W1(I1,function(){e.controller.abort()})}var Oi=null,ao=0,zn=0,Nn=null;function eg(e,t){if(Oi===null){var a=Oi=[];ao=0,zn=lu(),Nn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ao++,t.then(yd,yd),t}function yd(){if(--ao===0&&Oi!==null){Nn!==null&&(Nn.status="fulfilled");var e=Oi;Oi=null,zn=0,Nn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function tg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(o){a.push(o)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var o=0;o<a.length;o++)(0,a[o])(t)},function(o){for(n.status="rejected",n.reason=o,o=0;o<a.length;o++)(0,a[o])(void 0)}),n}var bd=B.S;B.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&eg(e,t),bd!==null&&bd(e,t)};var Wa=Y(null);function no(){var e=Wa.current;return e!==null?e:Ee.pooledCache}function ar(e,t){t===null?Z(Wa,Wa.current):Z(Wa,t.pool)}function xd(){var e=no();return e===null?null:{parent:qe._currentValue,pool:e}}var Ri=Error(s(460)),wd=Error(s(474)),nr=Error(s(542)),io={then:function(){}};function _d(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ir(){}function Sd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ir,ir),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ed(e),e;default:if(typeof t.status=="string")t.then(ir,ir);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var o=t;o.status="fulfilled",o.value=n}},function(n){if(t.status==="pending"){var o=t;o.status="rejected",o.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ed(e),e}throw Ci=t,Ri}}var Ci=null;function jd(){if(Ci===null)throw Error(s(459));var e=Ci;return Ci=null,e}function Ed(e){if(e===Ri||e===nr)throw Error(s(483))}var ha=!1;function lo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ro(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ye&2)!==0){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,t=Jl(e),dd(e,null,a),t}return Pl(e,n,t,a),Jl(e)}function Di(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,yc(e,a)}}function so(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var o=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?o=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?o=c=t:c=c.next=t}else o=c=t;a={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var oo=!1;function Mi(){if(oo){var e=Nn;if(e!==null)throw e}}function Ui(e,t,a,n){oo=!1;var o=e.updateQueue;ha=!1;var c=o.firstBaseUpdate,g=o.lastBaseUpdate,y=o.shared.pending;if(y!==null){o.shared.pending=null;var x=y,N=x.next;x.next=null,g===null?c=N:g.next=N,g=x;var M=e.alternate;M!==null&&(M=M.updateQueue,y=M.lastBaseUpdate,y!==g&&(y===null?M.firstBaseUpdate=N:y.next=N,M.lastBaseUpdate=x))}if(c!==null){var L=o.baseState;g=0,M=N=x=null,y=c;do{var R=y.lane&-536870913,C=R!==y.lane;if(C?(he&R)===R:(n&R)===R){R!==0&&R===zn&&(oo=!0),M!==null&&(M=M.next={lane:0,tag:y.tag,payload:y.payload,callback:null,next:null});e:{var te=e,W=y;R=t;var _e=a;switch(W.tag){case 1:if(te=W.payload,typeof te=="function"){L=te.call(_e,L,R);break e}L=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=W.payload,R=typeof te=="function"?te.call(_e,L,R):te,R==null)break e;L=b({},L,R);break e;case 2:ha=!0}}R=y.callback,R!==null&&(e.flags|=64,C&&(e.flags|=8192),C=o.callbacks,C===null?o.callbacks=[R]:C.push(R))}else C={lane:R,tag:y.tag,payload:y.payload,callback:y.callback,next:null},M===null?(N=M=C,x=L):M=M.next=C,g|=R;if(y=y.next,y===null){if(y=o.shared.pending,y===null)break;C=y,y=C.next,C.next=null,o.lastBaseUpdate=C,o.shared.pending=null}}while(!0);M===null&&(x=L),o.baseState=x,o.firstBaseUpdate=N,o.lastBaseUpdate=M,c===null&&(o.shared.lanes=0),Sa|=g,e.lanes=g,e.memoizedState=L}}function kd(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Td(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kd(a[e],t)}var On=Y(null),lr=Y(0);function Ad(e,t){e=ea,Z(lr,e),Z(On,t),ea=e|t.baseLanes}function uo(){Z(lr,ea),Z(On,On.current)}function co(){ea=lr.current,X(On),X(lr)}var pa=0,se=null,xe=null,Me=null,rr=!1,Rn=!1,Ia=!1,sr=0,Bi=0,Cn=null,ag=0;function Ce(){throw Error(s(321))}function fo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ft(e[a],t[a]))return!1;return!0}function ho(e,t,a,n,o,c){return pa=c,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?ff:hf,Ia=!1,c=a(n,o),Ia=!1,Rn&&(c=Nd(t,a,n,o)),zd(e),c}function zd(e){B.H=hr;var t=xe!==null&&xe.next!==null;if(pa=0,Me=xe=se=null,rr=!1,Bi=0,Cn=null,t)throw Error(s(300));e===null||Ge||(e=e.dependencies,e!==null&&er(e)&&(Ge=!0))}function Nd(e,t,a,n){se=e;var o=0;do{if(Rn&&(Cn=null),Bi=0,Rn=!1,25<=o)throw Error(s(301));if(o+=1,Me=xe=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}B.H=ug,c=t(a,n)}while(Rn);return c}function ng(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?qi(t):t,e=e.useState()[0],(xe!==null?xe.memoizedState:null)!==e&&(se.flags|=1024),t}function mo(){var e=sr!==0;return sr=0,e}function go(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function po(e){if(rr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}rr=!1}pa=0,Me=xe=se=null,Rn=!1,Bi=sr=0,Cn=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?se.memoizedState=Me=e:Me=Me.next=e,Me}function Ue(){if(xe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=xe.next;var t=Me===null?se.memoizedState:Me.next;if(t!==null)Me=t,xe=e;else{if(e===null)throw se.alternate===null?Error(s(467)):Error(s(310));xe=e,e={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Me===null?se.memoizedState=Me=e:Me=Me.next=e}return Me}function vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qi(e){var t=Bi;return Bi+=1,Cn===null&&(Cn=[]),e=Sd(Cn,e,t),t=se,(Me===null?t.memoizedState:Me.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?ff:hf),e}function or(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return qi(e);if(e.$$typeof===G)return We(e)}throw Error(s(438,String(e)))}function yo(e){var t=null,a=se.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=se.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(o){return o.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=vo(),se.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ke;return t.index++,a}function Qt(e,t){return typeof t=="function"?t(e):t}function ur(e){var t=Ue();return bo(t,xe,e)}function bo(e,t,a){var n=e.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=a;var o=e.baseQueue,c=n.pending;if(c!==null){if(o!==null){var g=o.next;o.next=c.next,c.next=g}t.baseQueue=o=c,n.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{t=o.next;var y=g=null,x=null,N=t,M=!1;do{var L=N.lane&-536870913;if(L!==N.lane?(he&L)===L:(pa&L)===L){var R=N.revertLane;if(R===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),L===zn&&(M=!0);else if((pa&R)===R){N=N.next,R===zn&&(M=!0);continue}else L={lane:0,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(y=x=L,g=c):x=x.next=L,se.lanes|=R,Sa|=R;L=N.action,Ia&&a(c,L),c=N.hasEagerState?N.eagerState:a(c,L)}else R={lane:L,revertLane:N.revertLane,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(y=x=R,g=c):x=x.next=R,se.lanes|=L,Sa|=L;N=N.next}while(N!==null&&N!==t);if(x===null?g=c:x.next=y,!ft(c,e.memoizedState)&&(Ge=!0,M&&(a=Nn,a!==null)))throw a;e.memoizedState=c,e.baseState=g,e.baseQueue=x,n.lastRenderedState=c}return o===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function xo(e){var t=Ue(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var n=a.dispatch,o=a.pending,c=t.memoizedState;if(o!==null){a.pending=null;var g=o=o.next;do c=e(c,g.action),g=g.next;while(g!==o);ft(c,t.memoizedState)||(Ge=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),a.lastRenderedState=c}return[c,n]}function Od(e,t,a){var n=se,o=Ue(),c=ve;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=t();var g=!ft((xe||o).memoizedState,a);g&&(o.memoizedState=a,Ge=!0),o=o.queue;var y=Dd.bind(null,n,o,e);if(Hi(2048,8,y,[e]),o.getSnapshot!==t||g||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Dn(9,cr(),Cd.bind(null,n,o,a,t),null),Ee===null)throw Error(s(349));c||(pa&124)!==0||Rd(n,t,a)}return a}function Rd(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=se.updateQueue,t===null?(t=vo(),se.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Cd(e,t,a,n){t.value=a,t.getSnapshot=n,Md(t)&&Ud(e)}function Dd(e,t,a){return a(function(){Md(t)&&Ud(e)})}function Md(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ft(e,a)}catch{return!0}}function Ud(e){var t=En(e,2);t!==null&&yt(t,e,2)}function wo(e){var t=lt();if(typeof e=="function"){var a=e;if(e=a(),Ia){ua(!0);try{a()}finally{ua(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},t}function Bd(e,t,a,n){return e.baseState=a,bo(e,xe,typeof n=="function"?n:Qt)}function ig(e,t,a,n,o){if(fr(e))throw Error(s(485));if(e=t.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};B.T!==null?a(!0):c.isTransition=!1,n(c),a=t.pending,a===null?(c.next=t.pending=c,qd(t,c)):(c.next=a.next,t.pending=a.next=c)}}function qd(e,t){var a=t.action,n=t.payload,o=e.state;if(t.isTransition){var c=B.T,g={};B.T=g;try{var y=a(o,n),x=B.S;x!==null&&x(g,y),Hd(e,t,y)}catch(N){_o(e,t,N)}finally{B.T=c}}else try{c=a(o,n),Hd(e,t,c)}catch(N){_o(e,t,N)}}function Hd(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Ld(e,t,n)},function(n){return _o(e,t,n)}):Ld(e,t,a)}function Ld(e,t,a){t.status="fulfilled",t.value=a,Gd(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,qd(e,a)))}function _o(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Gd(t),t=t.next;while(t!==n)}e.action=null}function Gd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Yd(e,t){return t}function $d(e,t){if(ve){var a=Ee.formState;if(a!==null){e:{var n=se;if(ve){if(Oe){t:{for(var o=Oe,c=Dt;o.nodeType!==8;){if(!c){o=null;break t}if(o=Nt(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){Oe=Nt(o.nextSibling),n=o.data==="F!";break e}}Pa(n)}n=!1}n&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yd,lastRenderedState:t},a.queue=n,a=uf.bind(null,se,n),n.dispatch=a,n=wo(!1),c=To.bind(null,se,!1,n.queue),n=lt(),o={state:t,dispatch:null,action:e,pending:null},n.queue=o,a=ig.bind(null,se,o,c,a),o.dispatch=a,n.memoizedState=e,[t,a,!1]}function Vd(e){var t=Ue();return Zd(t,xe,e)}function Zd(e,t,a){if(t=bo(e,t,Yd)[0],e=ur(Qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=qi(t)}catch(g){throw g===Ri?nr:g}else n=t;t=Ue();var o=t.queue,c=o.dispatch;return a!==t.memoizedState&&(se.flags|=2048,Dn(9,cr(),lg.bind(null,o,a),null)),[n,c,e]}function lg(e,t){e.action=t}function Kd(e){var t=Ue(),a=xe;if(a!==null)return Zd(t,a,e);Ue(),t=t.memoizedState,a=Ue();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function Dn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=se.updateQueue,t===null&&(t=vo(),se.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function cr(){return{destroy:void 0,resource:void 0}}function Xd(){return Ue().memoizedState}function dr(e,t,a,n){var o=lt();n=n===void 0?null:n,se.flags|=e,o.memoizedState=Dn(1|t,cr(),a,n)}function Hi(e,t,a,n){var o=Ue();n=n===void 0?null:n;var c=o.memoizedState.inst;xe!==null&&n!==null&&fo(n,xe.memoizedState.deps)?o.memoizedState=Dn(t,c,a,n):(se.flags|=e,o.memoizedState=Dn(1|t,c,a,n))}function Qd(e,t){dr(8390656,8,e,t)}function Pd(e,t){Hi(2048,8,e,t)}function Jd(e,t){return Hi(4,2,e,t)}function Fd(e,t){return Hi(4,4,e,t)}function Wd(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Id(e,t,a){a=a!=null?a.concat([e]):null,Hi(4,4,Wd.bind(null,t,e),a)}function So(){}function ef(e,t){var a=Ue();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&fo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function tf(e,t){var a=Ue();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&fo(t,n[1]))return n[0];if(n=e(),Ia){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[n,t],n}function jo(e,t,a){return a===void 0||(pa&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=lh(),se.lanes|=e,Sa|=e,a)}function af(e,t,a,n){return ft(a,t)?a:On.current!==null?(e=jo(e,a,n),ft(e,t)||(Ge=!0),e):(pa&42)===0?(Ge=!0,e.memoizedState=a):(e=lh(),se.lanes|=e,Sa|=e,t)}function nf(e,t,a,n,o){var c=K.p;K.p=c!==0&&8>c?c:8;var g=B.T,y={};B.T=y,To(e,!1,t,a);try{var x=o(),N=B.S;if(N!==null&&N(y,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var M=tg(x,n);Li(e,t,M,vt(e))}else Li(e,t,n,vt(e))}catch(L){Li(e,t,{then:function(){},status:"rejected",reason:L},vt())}finally{K.p=c,B.T=g}}function rg(){}function Eo(e,t,a,n){if(e.tag!==5)throw Error(s(476));var o=lf(e).queue;nf(e,o,t,ee,a===null?rg:function(){return rf(e),a(n)})}function lf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:ee},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rf(e){var t=lf(e).next.queue;Li(e,t,{},vt())}function ko(){return We(il)}function sf(){return Ue().memoizedState}function of(){return Ue().memoizedState}function sg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=vt();e=ma(a);var n=ga(t,e,a);n!==null&&(yt(n,t,a),Di(n,t,a)),t={cache:to()},e.payload=t;return}t=t.return}}function og(e,t,a){var n=vt();a={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},fr(e)?cf(t,a):(a=Zs(e,t,a,n),a!==null&&(yt(a,e,n),df(a,t,n)))}function uf(e,t,a){var n=vt();Li(e,t,a,n)}function Li(e,t,a,n){var o={lane:n,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(fr(e))cf(t,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var g=t.lastRenderedState,y=c(g,a);if(o.hasEagerState=!0,o.eagerState=y,ft(y,g))return Pl(e,t,o,0),Ee===null&&Ql(),!1}catch{}finally{}if(a=Zs(e,t,o,n),a!==null)return yt(a,e,n),df(a,t,n),!0}return!1}function To(e,t,a,n){if(n={lane:2,revertLane:lu(),action:n,hasEagerState:!1,eagerState:null,next:null},fr(e)){if(t)throw Error(s(479))}else t=Zs(e,a,n,2),t!==null&&yt(t,e,2)}function fr(e){var t=e.alternate;return e===se||t!==null&&t===se}function cf(e,t){Rn=rr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function df(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,yc(e,a)}}var hr={readContext:We,use:or,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useLayoutEffect:Ce,useInsertionEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useSyncExternalStore:Ce,useId:Ce,useHostTransitionStatus:Ce,useFormState:Ce,useActionState:Ce,useOptimistic:Ce,useMemoCache:Ce,useCacheRefresh:Ce},ff={readContext:We,use:or,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:We,useEffect:Qd,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,dr(4194308,4,Wd.bind(null,t,e),a)},useLayoutEffect:function(e,t){return dr(4194308,4,e,t)},useInsertionEffect:function(e,t){dr(4,2,e,t)},useMemo:function(e,t){var a=lt();t=t===void 0?null:t;var n=e();if(Ia){ua(!0);try{e()}finally{ua(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=lt();if(a!==void 0){var o=a(t);if(Ia){ua(!0);try{a(t)}finally{ua(!1)}}}else o=t;return n.memoizedState=n.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},n.queue=e,e=e.dispatch=og.bind(null,se,e),[n.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=wo(e);var t=e.queue,a=uf.bind(null,se,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:So,useDeferredValue:function(e,t){var a=lt();return jo(a,e,t)},useTransition:function(){var e=wo(!1);return e=nf.bind(null,se,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=se,o=lt();if(ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),Ee===null)throw Error(s(349));(he&124)!==0||Rd(n,t,a)}o.memoizedState=a;var c={value:a,getSnapshot:t};return o.queue=c,Qd(Dd.bind(null,n,c,e),[e]),n.flags|=2048,Dn(9,cr(),Cd.bind(null,n,c,a,t),null),a},useId:function(){var e=lt(),t=Ee.identifierPrefix;if(ve){var a=Zt,n=Vt;a=(n&~(1<<32-dt(n)-1)).toString(32)+a,t="«"+t+"R"+a,a=sr++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=ag++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:ko,useFormState:$d,useActionState:$d,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=To.bind(null,se,!0,a),a.dispatch=t,[e,t]},useMemoCache:yo,useCacheRefresh:function(){return lt().memoizedState=sg.bind(null,se)}},hf={readContext:We,use:or,useCallback:ef,useContext:We,useEffect:Pd,useImperativeHandle:Id,useInsertionEffect:Jd,useLayoutEffect:Fd,useMemo:tf,useReducer:ur,useRef:Xd,useState:function(){return ur(Qt)},useDebugValue:So,useDeferredValue:function(e,t){var a=Ue();return af(a,xe.memoizedState,e,t)},useTransition:function(){var e=ur(Qt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:qi(e),t]},useSyncExternalStore:Od,useId:sf,useHostTransitionStatus:ko,useFormState:Vd,useActionState:Vd,useOptimistic:function(e,t){var a=Ue();return Bd(a,xe,e,t)},useMemoCache:yo,useCacheRefresh:of},ug={readContext:We,use:or,useCallback:ef,useContext:We,useEffect:Pd,useImperativeHandle:Id,useInsertionEffect:Jd,useLayoutEffect:Fd,useMemo:tf,useReducer:xo,useRef:Xd,useState:function(){return xo(Qt)},useDebugValue:So,useDeferredValue:function(e,t){var a=Ue();return xe===null?jo(a,e,t):af(a,xe.memoizedState,e,t)},useTransition:function(){var e=xo(Qt)[0],t=Ue().memoizedState;return[typeof e=="boolean"?e:qi(e),t]},useSyncExternalStore:Od,useId:sf,useHostTransitionStatus:ko,useFormState:Kd,useActionState:Kd,useOptimistic:function(e,t){var a=Ue();return xe!==null?Bd(a,xe,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:yo,useCacheRefresh:of},Mn=null,Gi=0;function mr(e){var t=Gi;return Gi+=1,Mn===null&&(Mn=[]),Sd(Mn,e,t)}function Yi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function gr(e,t){throw t.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function mf(e){var t=e._init;return t(e._payload)}function gf(e){function t(T,E){if(e){var z=T.deletions;z===null?(T.deletions=[E],T.flags|=16):z.push(E)}}function a(T,E){if(!e)return null;for(;E!==null;)t(T,E),E=E.sibling;return null}function n(T){for(var E=new Map;T!==null;)T.key!==null?E.set(T.key,T):E.set(T.index,T),T=T.sibling;return E}function o(T,E){return T=$t(T,E),T.index=0,T.sibling=null,T}function c(T,E,z){return T.index=z,e?(z=T.alternate,z!==null?(z=z.index,z<E?(T.flags|=67108866,E):z):(T.flags|=67108866,E)):(T.flags|=1048576,E)}function g(T){return e&&T.alternate===null&&(T.flags|=67108866),T}function y(T,E,z,H){return E===null||E.tag!==6?(E=Xs(z,T.mode,H),E.return=T,E):(E=o(E,z),E.return=T,E)}function x(T,E,z,H){var P=z.type;return P===_?M(T,E,z.props.children,H,z.key):E!==null&&(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fe&&mf(P)===E.type)?(E=o(E,z.props),Yi(E,z),E.return=T,E):(E=Fl(z.type,z.key,z.props,null,T.mode,H),Yi(E,z),E.return=T,E)}function N(T,E,z,H){return E===null||E.tag!==4||E.stateNode.containerInfo!==z.containerInfo||E.stateNode.implementation!==z.implementation?(E=Qs(z,T.mode,H),E.return=T,E):(E=o(E,z.children||[]),E.return=T,E)}function M(T,E,z,H,P){return E===null||E.tag!==7?(E=Za(z,T.mode,H,P),E.return=T,E):(E=o(E,z),E.return=T,E)}function L(T,E,z){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=Xs(""+E,T.mode,z),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case S:return z=Fl(E.type,E.key,E.props,null,T.mode,z),Yi(z,E),z.return=T,z;case k:return E=Qs(E,T.mode,z),E.return=T,E;case fe:var H=E._init;return E=H(E._payload),L(T,E,z)}if(Je(E)||Be(E))return E=Za(E,T.mode,z,null),E.return=T,E;if(typeof E.then=="function")return L(T,mr(E),z);if(E.$$typeof===G)return L(T,tr(T,E),z);gr(T,E)}return null}function R(T,E,z,H){var P=E!==null?E.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return P!==null?null:y(T,E,""+z,H);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case S:return z.key===P?x(T,E,z,H):null;case k:return z.key===P?N(T,E,z,H):null;case fe:return P=z._init,z=P(z._payload),R(T,E,z,H)}if(Je(z)||Be(z))return P!==null?null:M(T,E,z,H,null);if(typeof z.then=="function")return R(T,E,mr(z),H);if(z.$$typeof===G)return R(T,E,tr(T,z),H);gr(T,z)}return null}function C(T,E,z,H,P){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return T=T.get(z)||null,y(E,T,""+H,P);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return T=T.get(H.key===null?z:H.key)||null,x(E,T,H,P);case k:return T=T.get(H.key===null?z:H.key)||null,N(E,T,H,P);case fe:var oe=H._init;return H=oe(H._payload),C(T,E,z,H,P)}if(Je(H)||Be(H))return T=T.get(z)||null,M(E,T,H,P,null);if(typeof H.then=="function")return C(T,E,z,mr(H),P);if(H.$$typeof===G)return C(T,E,z,tr(E,H),P);gr(E,H)}return null}function te(T,E,z,H){for(var P=null,oe=null,J=E,I=E=0,$e=null;J!==null&&I<z.length;I++){J.index>I?($e=J,J=null):$e=J.sibling;var pe=R(T,J,z[I],H);if(pe===null){J===null&&(J=$e);break}e&&J&&pe.alternate===null&&t(T,J),E=c(pe,E,I),oe===null?P=pe:oe.sibling=pe,oe=pe,J=$e}if(I===z.length)return a(T,J),ve&&Xa(T,I),P;if(J===null){for(;I<z.length;I++)J=L(T,z[I],H),J!==null&&(E=c(J,E,I),oe===null?P=J:oe.sibling=J,oe=J);return ve&&Xa(T,I),P}for(J=n(J);I<z.length;I++)$e=C(J,T,I,z[I],H),$e!==null&&(e&&$e.alternate!==null&&J.delete($e.key===null?I:$e.key),E=c($e,E,I),oe===null?P=$e:oe.sibling=$e,oe=$e);return e&&J.forEach(function(Ra){return t(T,Ra)}),ve&&Xa(T,I),P}function W(T,E,z,H){if(z==null)throw Error(s(151));for(var P=null,oe=null,J=E,I=E=0,$e=null,pe=z.next();J!==null&&!pe.done;I++,pe=z.next()){J.index>I?($e=J,J=null):$e=J.sibling;var Ra=R(T,J,pe.value,H);if(Ra===null){J===null&&(J=$e);break}e&&J&&Ra.alternate===null&&t(T,J),E=c(Ra,E,I),oe===null?P=Ra:oe.sibling=Ra,oe=Ra,J=$e}if(pe.done)return a(T,J),ve&&Xa(T,I),P;if(J===null){for(;!pe.done;I++,pe=z.next())pe=L(T,pe.value,H),pe!==null&&(E=c(pe,E,I),oe===null?P=pe:oe.sibling=pe,oe=pe);return ve&&Xa(T,I),P}for(J=n(J);!pe.done;I++,pe=z.next())pe=C(J,T,I,pe.value,H),pe!==null&&(e&&pe.alternate!==null&&J.delete(pe.key===null?I:pe.key),E=c(pe,E,I),oe===null?P=pe:oe.sibling=pe,oe=pe);return e&&J.forEach(function(cp){return t(T,cp)}),ve&&Xa(T,I),P}function _e(T,E,z,H){if(typeof z=="object"&&z!==null&&z.type===_&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case S:e:{for(var P=z.key;E!==null;){if(E.key===P){if(P=z.type,P===_){if(E.tag===7){a(T,E.sibling),H=o(E,z.props.children),H.return=T,T=H;break e}}else if(E.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===fe&&mf(P)===E.type){a(T,E.sibling),H=o(E,z.props),Yi(H,z),H.return=T,T=H;break e}a(T,E);break}else t(T,E);E=E.sibling}z.type===_?(H=Za(z.props.children,T.mode,H,z.key),H.return=T,T=H):(H=Fl(z.type,z.key,z.props,null,T.mode,H),Yi(H,z),H.return=T,T=H)}return g(T);case k:e:{for(P=z.key;E!==null;){if(E.key===P)if(E.tag===4&&E.stateNode.containerInfo===z.containerInfo&&E.stateNode.implementation===z.implementation){a(T,E.sibling),H=o(E,z.children||[]),H.return=T,T=H;break e}else{a(T,E);break}else t(T,E);E=E.sibling}H=Qs(z,T.mode,H),H.return=T,T=H}return g(T);case fe:return P=z._init,z=P(z._payload),_e(T,E,z,H)}if(Je(z))return te(T,E,z,H);if(Be(z)){if(P=Be(z),typeof P!="function")throw Error(s(150));return z=P.call(z),W(T,E,z,H)}if(typeof z.then=="function")return _e(T,E,mr(z),H);if(z.$$typeof===G)return _e(T,E,tr(T,z),H);gr(T,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,E!==null&&E.tag===6?(a(T,E.sibling),H=o(E,z),H.return=T,T=H):(a(T,E),H=Xs(z,T.mode,H),H.return=T,T=H),g(T)):a(T,E)}return function(T,E,z,H){try{Gi=0;var P=_e(T,E,z,H);return Mn=null,P}catch(J){if(J===Ri||J===nr)throw J;var oe=ht(29,J,null,T.mode);return oe.lanes=H,oe.return=T,oe}finally{}}}var Un=gf(!0),pf=gf(!1),Et=Y(null),Mt=null;function va(e){var t=e.alternate;Z(He,He.current&1),Z(Et,e),Mt===null&&(t===null||On.current!==null||t.memoizedState!==null)&&(Mt=e)}function vf(e){if(e.tag===22){if(Z(He,He.current),Z(Et,e),Mt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(Mt=e)}}else ya()}function ya(){Z(He,He.current),Z(Et,Et.current)}function Pt(e){X(Et),Mt===e&&(Mt=null),X(He)}var He=Y(0);function pr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||vu(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ao(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var zo={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=vt(),o=ma(n);o.payload=t,a!=null&&(o.callback=a),t=ga(e,o,n),t!==null&&(yt(t,e,n),Di(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=vt(),o=ma(n);o.tag=1,o.payload=t,a!=null&&(o.callback=a),t=ga(e,o,n),t!==null&&(yt(t,e,n),Di(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=vt(),n=ma(a);n.tag=2,t!=null&&(n.callback=t),t=ga(e,n,a),t!==null&&(yt(t,e,a),Di(t,e,a))}};function yf(e,t,a,n,o,c,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,c,g):t.prototype&&t.prototype.isPureReactComponent?!ji(a,n)||!ji(o,c):!0}function bf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&zo.enqueueReplaceState(t,t.state,null)}function en(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var o in e)a[o]===void 0&&(a[o]=e[o])}return a}var vr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function xf(e){vr(e)}function wf(e){console.error(e)}function _f(e){vr(e)}function yr(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Sf(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function No(e,t,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){yr(e,t)},a}function jf(e){return e=ma(e),e.tag=3,e}function Ef(e,t,a,n){var o=a.type.getDerivedStateFromError;if(typeof o=="function"){var c=n.value;e.payload=function(){return o(c)},e.callback=function(){Sf(t,a,n)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Sf(t,a,n),typeof o!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var y=n.stack;this.componentDidCatch(n.value,{componentStack:y!==null?y:""})})}function cg(e,t,a,n,o){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&zi(t,a,o,!0),a=Et.current,a!==null){switch(a.tag){case 13:return Mt===null?eu():a.alternate===null&&Re===0&&(Re=3),a.flags&=-257,a.flags|=65536,a.lanes=o,n===io?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),au(e,n,o)),!1;case 22:return a.flags|=65536,n===io?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),au(e,n,o)),!1}throw Error(s(435,a.tag))}return au(e,n,o),eu(),!1}if(ve)return t=Et.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=o,n!==Fs&&(e=Error(s(422),{cause:n}),Ai(wt(e,a)))):(n!==Fs&&(t=Error(s(423),{cause:n}),Ai(wt(t,a))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,n=wt(n,a),o=No(e.stateNode,n,o),so(e,o),Re!==4&&(Re=2)),!1;var c=Error(s(520),{cause:n});if(c=wt(c,a),Pi===null?Pi=[c]:Pi.push(c),Re!==4&&(Re=2),t===null)return!0;n=wt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=o&-o,a.lanes|=e,e=No(a.stateNode,n,e),so(a,e),!1;case 1:if(t=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ja===null||!ja.has(c))))return a.flags|=65536,o&=-o,a.lanes|=o,o=jf(o),Ef(o,e,a,n),so(a,o),!1}a=a.return}while(a!==null);return!1}var kf=Error(s(461)),Ge=!1;function Xe(e,t,a,n){t.child=e===null?pf(t,null,a,n):Un(t,e.child,a,n)}function Tf(e,t,a,n,o){a=a.render;var c=t.ref;if("ref"in n){var g={};for(var y in n)y!=="ref"&&(g[y]=n[y])}else g=n;return Fa(t),n=ho(e,t,a,g,c,o),y=mo(),e!==null&&!Ge?(go(e,t,o),Jt(e,t,o)):(ve&&y&&Ps(t),t.flags|=1,Xe(e,t,n,o),t.child)}function Af(e,t,a,n,o){if(e===null){var c=a.type;return typeof c=="function"&&!Ks(c)&&c.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=c,zf(e,t,c,n,o)):(e=Fl(a.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!qo(e,o)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:ji,a(g,n)&&e.ref===t.ref)return Jt(e,t,o)}return t.flags|=1,e=$t(c,n),e.ref=t.ref,e.return=t,t.child=e}function zf(e,t,a,n,o){if(e!==null){var c=e.memoizedProps;if(ji(c,n)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=n=c,qo(e,o))(e.flags&131072)!==0&&(Ge=!0);else return t.lanes=e.lanes,Jt(e,t,o)}return Oo(e,t,a,n,o)}function Nf(e,t,a){var n=t.pendingProps,o=n.children,c=e!==null?e.memoizedState:null;if(n.mode==="hidden"){if((t.flags&128)!==0){if(n=c!==null?c.baseLanes|a:a,e!==null){for(o=t.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;t.childLanes=c&~n}else t.childLanes=0,t.child=null;return Of(e,t,n,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ar(t,c!==null?c.cachePool:null),c!==null?Ad(t,c):uo(),vf(t);else return t.lanes=t.childLanes=536870912,Of(e,t,c!==null?c.baseLanes|a:a,a)}else c!==null?(ar(t,c.cachePool),Ad(t,c),ya(),t.memoizedState=null):(e!==null&&ar(t,null),uo(),ya());return Xe(e,t,o,a),t.child}function Of(e,t,a,n){var o=no();return o=o===null?null:{parent:qe._currentValue,pool:o},t.memoizedState={baseLanes:a,cachePool:o},e!==null&&ar(t,null),uo(),vf(t),e!==null&&zi(e,t,n,!0),null}function br(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Oo(e,t,a,n,o){return Fa(t),a=ho(e,t,a,n,void 0,o),n=mo(),e!==null&&!Ge?(go(e,t,o),Jt(e,t,o)):(ve&&n&&Ps(t),t.flags|=1,Xe(e,t,a,o),t.child)}function Rf(e,t,a,n,o,c){return Fa(t),t.updateQueue=null,a=Nd(t,n,a,o),zd(e),n=mo(),e!==null&&!Ge?(go(e,t,c),Jt(e,t,c)):(ve&&n&&Ps(t),t.flags|=1,Xe(e,t,a,c),t.child)}function Cf(e,t,a,n,o){if(Fa(t),t.stateNode===null){var c=kn,g=a.contextType;typeof g=="object"&&g!==null&&(c=We(g)),c=new a(n,c),t.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=zo,t.stateNode=c,c._reactInternals=t,c=t.stateNode,c.props=n,c.state=t.memoizedState,c.refs={},lo(t),g=a.contextType,c.context=typeof g=="object"&&g!==null?We(g):kn,c.state=t.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Ao(t,a,g,n),c.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&zo.enqueueReplaceState(c,c.state,null),Ui(t,n,c,o),Mi(),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){c=t.stateNode;var y=t.memoizedProps,x=en(a,y);c.props=x;var N=c.context,M=a.contextType;g=kn,typeof M=="object"&&M!==null&&(g=We(M));var L=a.getDerivedStateFromProps;M=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function",y=t.pendingProps!==y,M||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(y||N!==g)&&bf(t,c,n,g),ha=!1;var R=t.memoizedState;c.state=R,Ui(t,n,c,o),Mi(),N=t.memoizedState,y||R!==N||ha?(typeof L=="function"&&(Ao(t,a,L,n),N=t.memoizedState),(x=ha||yf(t,a,x,n,R,N,g))?(M||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=N),c.props=n,c.state=N,c.context=g,n=x):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,ro(e,t),g=t.memoizedProps,M=en(a,g),c.props=M,L=t.pendingProps,R=c.context,N=a.contextType,x=kn,typeof N=="object"&&N!==null&&(x=We(N)),y=a.getDerivedStateFromProps,(N=typeof y=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==L||R!==x)&&bf(t,c,n,x),ha=!1,R=t.memoizedState,c.state=R,Ui(t,n,c,o),Mi();var C=t.memoizedState;g!==L||R!==C||ha||e!==null&&e.dependencies!==null&&er(e.dependencies)?(typeof y=="function"&&(Ao(t,a,y,n),C=t.memoizedState),(M=ha||yf(t,a,M,n,R,C,x)||e!==null&&e.dependencies!==null&&er(e.dependencies))?(N||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,C,x),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,C,x)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=C),c.props=n,c.state=C,c.context=x,n=M):(typeof c.componentDidUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&R===e.memoizedState||(t.flags|=1024),n=!1)}return c=n,br(e,t),n=(t.flags&128)!==0,c||n?(c=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:c.render(),t.flags|=1,e!==null&&n?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,a,o)):Xe(e,t,a,o),t.memoizedState=c.state,e=t.child):e=Jt(e,t,o),e}function Df(e,t,a,n){return Ti(),t.flags|=256,Xe(e,t,a,n),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Co(e){return{baseLanes:e,cachePool:xd()}}function Do(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=kt),e}function Mf(e,t,a){var n=t.pendingProps,o=!1,c=(t.flags&128)!==0,g;if((g=c)||(g=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),g&&(o=!0,t.flags&=-129),g=(t.flags&32)!==0,t.flags&=-33,e===null){if(ve){if(o?va(t):ya(),ve){var y=Oe,x;if(x=y){e:{for(x=y,y=Dt;x.nodeType!==8;){if(!y){y=null;break e}if(x=Nt(x.nextSibling),x===null){y=null;break e}}y=x}y!==null?(t.memoizedState={dehydrated:y,treeContext:Ka!==null?{id:Vt,overflow:Zt}:null,retryLane:536870912,hydrationErrors:null},x=ht(18,null,null,0),x.stateNode=y,x.return=t,t.child=x,tt=t,Oe=null,x=!0):x=!1}x||Pa(t)}if(y=t.memoizedState,y!==null&&(y=y.dehydrated,y!==null))return vu(y)?t.lanes=32:t.lanes=536870912,null;Pt(t)}return y=n.children,n=n.fallback,o?(ya(),o=t.mode,y=xr({mode:"hidden",children:y},o),n=Za(n,o,a,null),y.return=t,n.return=t,y.sibling=n,t.child=y,o=t.child,o.memoizedState=Co(a),o.childLanes=Do(e,g,a),t.memoizedState=Ro,n):(va(t),Mo(t,y))}if(x=e.memoizedState,x!==null&&(y=x.dehydrated,y!==null)){if(c)t.flags&256?(va(t),t.flags&=-257,t=Uo(e,t,a)):t.memoizedState!==null?(ya(),t.child=e.child,t.flags|=128,t=null):(ya(),o=n.fallback,y=t.mode,n=xr({mode:"visible",children:n.children},y),o=Za(o,y,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,Un(t,e.child,null,a),n=t.child,n.memoizedState=Co(a),n.childLanes=Do(e,g,a),t.memoizedState=Ro,t=o);else if(va(t),vu(y)){if(g=y.nextSibling&&y.nextSibling.dataset,g)var N=g.dgst;g=N,n=Error(s(419)),n.stack="",n.digest=g,Ai({value:n,source:null,stack:null}),t=Uo(e,t,a)}else if(Ge||zi(e,t,a,!1),g=(a&e.childLanes)!==0,Ge||g){if(g=Ee,g!==null&&(n=a&-a,n=(n&42)!==0?1:vs(n),n=(n&(g.suspendedLanes|a))!==0?0:n,n!==0&&n!==x.retryLane))throw x.retryLane=n,En(e,n),yt(g,e,n),kf;y.data==="$?"||eu(),t=Uo(e,t,a)}else y.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=x.treeContext,Oe=Nt(y.nextSibling),tt=t,ve=!0,Qa=null,Dt=!1,e!==null&&(St[jt++]=Vt,St[jt++]=Zt,St[jt++]=Ka,Vt=e.id,Zt=e.overflow,Ka=t),t=Mo(t,n.children),t.flags|=4096);return t}return o?(ya(),o=n.fallback,y=t.mode,x=e.child,N=x.sibling,n=$t(x,{mode:"hidden",children:n.children}),n.subtreeFlags=x.subtreeFlags&65011712,N!==null?o=$t(N,o):(o=Za(o,y,a,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,y=e.child.memoizedState,y===null?y=Co(a):(x=y.cachePool,x!==null?(N=qe._currentValue,x=x.parent!==N?{parent:N,pool:N}:x):x=xd(),y={baseLanes:y.baseLanes|a,cachePool:x}),o.memoizedState=y,o.childLanes=Do(e,g,a),t.memoizedState=Ro,n):(va(t),a=e.child,e=a.sibling,a=$t(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(g=t.deletions,g===null?(t.deletions=[e],t.flags|=16):g.push(e)),t.child=a,t.memoizedState=null,a)}function Mo(e,t){return t=xr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xr(e,t){return e=ht(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Uo(e,t,a){return Un(t,e.child,null,a),e=Mo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uf(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Is(e.return,t,a)}function Bo(e,t,a,n,o){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:o}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=a,c.tailMode=o)}function Bf(e,t,a){var n=t.pendingProps,o=n.revealOrder,c=n.tail;if(Xe(e,t,n.children,a),n=He.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uf(e,a,t);else if(e.tag===19)Uf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}switch(Z(He,n),o){case"forwards":for(a=t.child,o=null;a!==null;)e=a.alternate,e!==null&&pr(e)===null&&(o=a),a=a.sibling;a=o,a===null?(o=t.child,t.child=null):(o=a.sibling,a.sibling=null),Bo(t,!1,o,a,c);break;case"backwards":for(a=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&pr(e)===null){t.child=o;break}e=o.sibling,o.sibling=a,a=o,o=e}Bo(t,!0,a,null,c);break;case"together":Bo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Sa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(zi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=$t(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=$t(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&er(e)))}function dg(e,t,a){switch(t.tag){case 3:Te(t,t.stateNode.containerInfo),fa(t,qe,e.memoizedState.cache),Ti();break;case 27:case 5:fs(t);break;case 4:Te(t,t.stateNode.containerInfo);break;case 10:fa(t,t.type,t.memoizedProps.value);break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(va(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Mf(e,t,a):(va(t),e=Jt(e,t,a),e!==null?e.sibling:null);va(t);break;case 19:var o=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(zi(e,t,a,!1),n=(a&t.childLanes)!==0),o){if(n)return Bf(e,t,a);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(He,He.current),n)break;return null;case 22:case 23:return t.lanes=0,Nf(e,t,a);case 24:fa(t,qe,e.memoizedState.cache)}return Jt(e,t,a)}function qf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ge=!0;else{if(!qo(e,a)&&(t.flags&128)===0)return Ge=!1,dg(e,t,a);Ge=(e.flags&131072)!==0}else Ge=!1,ve&&(t.flags&1048576)!==0&&hd(t,Il,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var n=t.elementType,o=n._init;if(n=o(n._payload),t.type=n,typeof n=="function")Ks(n)?(e=en(n,e),t.tag=1,t=Cf(null,t,n,e,a)):(t.tag=0,t=Oo(null,t,n,e,a));else{if(n!=null){if(o=n.$$typeof,o===Q){t.tag=11,t=Tf(null,t,n,e,a);break e}else if(o===V){t.tag=14,t=Af(null,t,n,e,a);break e}}throw t=Ha(n)||n,Error(s(306,t,""))}}return t;case 0:return Oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,o=en(n,t.pendingProps),Cf(e,t,n,o,a);case 3:e:{if(Te(t,t.stateNode.containerInfo),e===null)throw Error(s(387));n=t.pendingProps;var c=t.memoizedState;o=c.element,ro(e,t),Ui(t,n,null,a);var g=t.memoizedState;if(n=g.cache,fa(t,qe,n),n!==c.cache&&eo(t,[qe],a,!0),Mi(),n=g.element,c.isDehydrated)if(c={element:n,isDehydrated:!1,cache:g.cache},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){t=Df(e,t,n,a);break e}else if(n!==o){o=wt(Error(s(424)),t),Ai(o),t=Df(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Nt(e.firstChild),tt=t,ve=!0,Qa=null,Dt=!0,a=pf(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ti(),n===o){t=Jt(e,t,a);break e}Xe(e,t,n,a)}t=t.child}return t;case 26:return br(e,t),e===null?(a=Yh(t.type,null,t.pendingProps,null))?t.memoizedState=a:ve||(a=t.type,e=t.pendingProps,n=Dr(ne.current).createElement(a),n[Fe]=t,n[nt]=e,Pe(n,a,e),Le(n),t.stateNode=n):t.memoizedState=Yh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return fs(t),e===null&&ve&&(n=t.stateNode=Hh(t.type,t.pendingProps,ne.current),tt=t,Dt=!0,o=Oe,Ta(t.type)?(yu=o,Oe=Nt(n.firstChild)):Oe=o),Xe(e,t,t.pendingProps.children,a),br(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ve&&((o=n=Oe)&&(n=Hg(n,t.type,t.pendingProps,Dt),n!==null?(t.stateNode=n,tt=t,Oe=Nt(n.firstChild),Dt=!1,o=!0):o=!1),o||Pa(t)),fs(t),o=t.type,c=t.pendingProps,g=e!==null?e.memoizedProps:null,n=c.children,mu(o,c)?n=null:g!==null&&mu(o,g)&&(t.flags|=32),t.memoizedState!==null&&(o=ho(e,t,ng,null,null,a),il._currentValue=o),br(e,t),Xe(e,t,n,a),t.child;case 6:return e===null&&ve&&((e=a=Oe)&&(a=Lg(a,t.pendingProps,Dt),a!==null?(t.stateNode=a,tt=t,Oe=null,e=!0):e=!1),e||Pa(t)),null;case 13:return Mf(e,t,a);case 4:return Te(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Un(t,null,n,a):Xe(e,t,n,a),t.child;case 11:return Tf(e,t,t.type,t.pendingProps,a);case 7:return Xe(e,t,t.pendingProps,a),t.child;case 8:return Xe(e,t,t.pendingProps.children,a),t.child;case 12:return Xe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,fa(t,t.type,n.value),Xe(e,t,n.children,a),t.child;case 9:return o=t.type._context,n=t.pendingProps.children,Fa(t),o=We(o),n=n(o),t.flags|=1,Xe(e,t,n,a),t.child;case 14:return Af(e,t,t.type,t.pendingProps,a);case 15:return zf(e,t,t.type,t.pendingProps,a);case 19:return Bf(e,t,a);case 31:return n=t.pendingProps,a=t.mode,n={mode:n.mode,children:n.children},e===null?(a=xr(n,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=$t(e.child,n),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Nf(e,t,a);case 24:return Fa(t),n=We(qe),e===null?(o=no(),o===null&&(o=Ee,c=to(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=a),o=c),t.memoizedState={parent:n,cache:o},lo(t),fa(t,qe,o)):((e.lanes&a)!==0&&(ro(e,t),Ui(t,null,null,a),Mi()),o=e.memoizedState,c=t.memoizedState,o.parent!==n?(o={parent:n,cache:n},t.memoizedState=o,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=o),fa(t,qe,n)):(n=c.cache,fa(t,qe,n),n!==o.cache&&eo(t,[qe],a,!0))),Xe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ft(e){e.flags|=4}function Hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Xh(t)){if(t=Et.current,t!==null&&((he&4194048)===he?Mt!==null:(he&62914560)!==he&&(he&536870912)===0||t!==Mt))throw Ci=io,wd;e.flags|=8192}}function wr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?pc():536870912,e.lanes|=t,Ln|=t)}function $i(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags&65011712,n|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)a|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function fg(e,t,a){var n=t.pendingProps;switch(Js(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Xt(qe),oa(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ki(t)?Ft(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pd())),ze(t),null;case 26:return a=t.memoizedState,e===null?(Ft(t),a!==null?(ze(t),Hf(t,a)):(ze(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Ft(t),ze(t),Hf(t,a)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==n&&Ft(t),ze(t),t.flags&=-16777217),null;case 27:Rl(t),a=ne.current;var o=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return ze(t),null}e=F.current,ki(t)?md(t):(e=Hh(o,n,a),t.stateNode=e,Ft(t))}return ze(t),null;case 5:if(Rl(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return ze(t),null}if(e=F.current,ki(t))md(t);else{switch(o=Dr(ne.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?e.multiple=!0:n.size&&(e.size=n.size);break;default:e=typeof n.is=="string"?o.createElement(a,{is:n.is}):o.createElement(a)}}e[Fe]=t,e[nt]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)e.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(Pe(e,a,n),a){case"button":case"input":case"select":case"textarea":e=!!n.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Ft(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ft(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(s(166));if(e=ne.current,ki(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,o=tt,o!==null)switch(o.tag){case 27:case 5:n=o.memoizedProps}e[Fe]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Rh(e.nodeValue,a)),e||Pa(t)}else e=Dr(e).createTextNode(n),e[Fe]=t,t.stateNode=e}return ze(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=ki(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(s(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(s(317));o[Fe]=t}else Ti(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),o=!1}else o=pd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return t.flags&256?(Pt(t),t):(Pt(t),null)}if(Pt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=n!==null,e=e!==null&&e.memoizedState!==null,a){n=t.child,o=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(o=n.alternate.memoizedState.cachePool.pool);var c=null;n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(c=n.memoizedState.cachePool.pool),c!==o&&(n.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),wr(t,t.updateQueue),ze(t),null;case 4:return oa(),e===null&&uu(t.stateNode.containerInfo),ze(t),null;case 10:return Xt(t.type),ze(t),null;case 19:if(X(He),o=t.memoizedState,o===null)return ze(t),null;if(n=(t.flags&128)!==0,c=o.rendering,c===null)if(n)$i(o,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=pr(e),c!==null){for(t.flags|=128,$i(o,!1),e=c.updateQueue,t.updateQueue=e,wr(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fd(a,e),a=a.sibling;return Z(He,He.current&1|2),t.child}e=e.sibling}o.tail!==null&&Ct()>jr&&(t.flags|=128,n=!0,$i(o,!1),t.lanes=4194304)}else{if(!n)if(e=pr(c),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,wr(t,e),$i(o,!0),o.tail===null&&o.tailMode==="hidden"&&!c.alternate&&!ve)return ze(t),null}else 2*Ct()-o.renderingStartTime>jr&&a!==536870912&&(t.flags|=128,n=!0,$i(o,!1),t.lanes=4194304);o.isBackwards?(c.sibling=t.child,t.child=c):(e=o.last,e!==null?e.sibling=c:t.child=c,o.last=c)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ct(),t.sibling=null,e=He.current,Z(He,n?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Pt(t),co(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&wr(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&X(Wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Xt(qe),ze(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function hg(e,t){switch(Js(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xt(qe),oa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Rl(t),null;case 13:if(Pt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Ti()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return X(He),null;case 4:return oa(),null;case 10:return Xt(t.type),null;case 22:case 23:return Pt(t),co(),e!==null&&X(Wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Xt(qe),null;case 25:return null;default:return null}}function Lf(e,t){switch(Js(t),t.tag){case 3:Xt(qe),oa();break;case 26:case 27:case 5:Rl(t);break;case 4:oa();break;case 13:Pt(t);break;case 19:X(He);break;case 10:Xt(t.type);break;case 22:case 23:Pt(t),co(),e!==null&&X(Wa);break;case 24:Xt(qe)}}function Vi(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var o=n.next;a=o;do{if((a.tag&e)===e){n=void 0;var c=a.create,g=a.inst;n=c(),g.destroy=n}a=a.next}while(a!==o)}}catch(y){je(t,t.return,y)}}function ba(e,t,a){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var c=o.next;n=c;do{if((n.tag&e)===e){var g=n.inst,y=g.destroy;if(y!==void 0){g.destroy=void 0,o=t;var x=a,N=y;try{N()}catch(M){je(o,x,M)}}}n=n.next}while(n!==c)}}catch(M){je(t,t.return,M)}}function Gf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Td(t,a)}catch(n){je(e,e.return,n)}}}function Yf(e,t,a){a.props=en(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){je(e,t,n)}}function Zi(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(o){je(e,t,o)}}function Ut(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(o){je(e,t,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(o){je(e,t,o)}else a.current=null}function $f(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(o){je(e,e.return,o)}}function Ho(e,t,a){try{var n=e.stateNode;Dg(n,e.type,a,t),n[nt]=t}catch(o){je(e,e.return,o)}}function Vf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ta(e.type)||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ta(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Cr));else if(n!==4&&(n===27&&Ta(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Go(e,t,a),e=e.sibling;e!==null;)Go(e,t,a),e=e.sibling}function _r(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&Ta(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_r(e,t,a),e=e.sibling;e!==null;)_r(e,t,a),e=e.sibling}function Zf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);Pe(t,n,a),t[Fe]=e,t[nt]=a}catch(c){je(e,e.return,c)}}var Wt=!1,De=!1,Yo=!1,Kf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function mg(e,t){if(e=e.containerInfo,fu=Lr,e=ad(e),Hs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var o=n.anchorOffset,c=n.focusNode;n=n.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var g=0,y=-1,x=-1,N=0,M=0,L=e,R=null;t:for(;;){for(var C;L!==a||o!==0&&L.nodeType!==3||(y=g+o),L!==c||n!==0&&L.nodeType!==3||(x=g+n),L.nodeType===3&&(g+=L.nodeValue.length),(C=L.firstChild)!==null;)R=L,L=C;for(;;){if(L===e)break t;if(R===a&&++N===o&&(y=g),R===c&&++M===n&&(x=g),(C=L.nextSibling)!==null)break;L=R,R=L.parentNode}L=C}a=y===-1||x===-1?null:{start:y,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(hu={focusedElem:e,selectionRange:a},Lr=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,c=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=t,o=c.memoizedProps,c=c.memoizedState,n=a.stateNode;try{var te=en(a.type,o,a.elementType===a.type);e=n.getSnapshotBeforeUpdate(te,c),n.__reactInternalSnapshotBeforeUpdate=e}catch(W){je(a,a.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)pu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function Xf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:xa(e,a),n&4&&Vi(5,a);break;case 1:if(xa(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(g){je(a,a.return,g)}else{var o=en(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(g){je(a,a.return,g)}}n&64&&Gf(a),n&512&&Zi(a,a.return);break;case 3:if(xa(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Td(e,t)}catch(g){je(a,a.return,g)}}break;case 27:t===null&&n&4&&Zf(a);case 26:case 5:xa(e,a),t===null&&n&4&&$f(a),n&512&&Zi(a,a.return);break;case 12:xa(e,a);break;case 13:xa(e,a),n&4&&Jf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Sg.bind(null,a),Gg(e,a))));break;case 22:if(n=a.memoizedState!==null||Wt,!n){t=t!==null&&t.memoizedState!==null||De,o=Wt;var c=De;Wt=n,(De=t)&&!c?wa(e,a,(a.subtreeFlags&8772)!==0):xa(e,a),Wt=o,De=c}break;case 30:break;default:xa(e,a)}}function Qf(e){var t=e.alternate;t!==null&&(e.alternate=null,Qf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xs(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,rt=!1;function It(e,t,a){for(a=a.child;a!==null;)Pf(e,t,a),a=a.sibling}function Pf(e,t,a){if(ct&&typeof ct.onCommitFiberUnmount=="function")try{ct.onCommitFiberUnmount(fi,a)}catch{}switch(a.tag){case 26:De||Ut(a,t),It(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:De||Ut(a,t);var n=Ae,o=rt;Ta(a.type)&&(Ae=a.stateNode,rt=!1),It(e,t,a),el(a.stateNode),Ae=n,rt=o;break;case 5:De||Ut(a,t);case 6:if(n=Ae,o=rt,Ae=null,It(e,t,a),Ae=n,rt=o,Ae!==null)if(rt)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(c){je(a,t,c)}else try{Ae.removeChild(a.stateNode)}catch(c){je(a,t,c)}break;case 18:Ae!==null&&(rt?(e=Ae,Bh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ol(e)):Bh(Ae,a.stateNode));break;case 4:n=Ae,o=rt,Ae=a.stateNode.containerInfo,rt=!0,It(e,t,a),Ae=n,rt=o;break;case 0:case 11:case 14:case 15:De||ba(2,a,t),De||ba(4,a,t),It(e,t,a);break;case 1:De||(Ut(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Yf(a,t,n)),It(e,t,a);break;case 21:It(e,t,a);break;case 22:De=(n=De)||a.memoizedState!==null,It(e,t,a),De=n;break;default:It(e,t,a)}}function Jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ol(e)}catch(a){je(t,t.return,a)}}function gg(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Kf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Kf),t;default:throw Error(s(435,e.tag))}}function $o(e,t){var a=gg(e);t.forEach(function(n){var o=jg.bind(null,e,n);a.has(n)||(a.add(n),n.then(o,o))})}function mt(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var o=a[n],c=e,g=t,y=g;e:for(;y!==null;){switch(y.tag){case 27:if(Ta(y.type)){Ae=y.stateNode,rt=!1;break e}break;case 5:Ae=y.stateNode,rt=!1;break e;case 3:case 4:Ae=y.stateNode.containerInfo,rt=!0;break e}y=y.return}if(Ae===null)throw Error(s(160));Pf(c,g,o),Ae=null,rt=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ff(t,e),t=t.sibling}var zt=null;function Ff(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),gt(e),n&4&&(ba(3,e,e.return),Vi(3,e),ba(5,e,e.return));break;case 1:mt(t,e),gt(e),n&512&&(De||a===null||Ut(a,a.return)),n&64&&Wt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var o=zt;if(mt(t,e),gt(e),n&512&&(De||a===null||Ut(a,a.return)),n&4){var c=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,o=o.ownerDocument||o;t:switch(n){case"title":c=o.getElementsByTagName("title")[0],(!c||c[gi]||c[Fe]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(n),o.head.insertBefore(c,o.querySelector("head > title"))),Pe(c,n,a),c[Fe]=e,Le(c),n=c;break e;case"link":var g=Zh("link","href",o).get(n+(a.href||""));if(g){for(var y=0;y<g.length;y++)if(c=g[y],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(y,1);break t}}c=o.createElement(n),Pe(c,n,a),o.head.appendChild(c);break;case"meta":if(g=Zh("meta","content",o).get(n+(a.content||""))){for(y=0;y<g.length;y++)if(c=g[y],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(y,1);break t}}c=o.createElement(n),Pe(c,n,a),o.head.appendChild(c);break;default:throw Error(s(468,n))}c[Fe]=e,Le(c),n=c}e.stateNode=n}else Kh(o,e.type,e.stateNode);else e.stateNode=Vh(o,n,e.memoizedProps);else c!==n?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,n===null?Kh(o,e.type,e.stateNode):Vh(o,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Ho(e,e.memoizedProps,a.memoizedProps)}break;case 27:mt(t,e),gt(e),n&512&&(De||a===null||Ut(a,a.return)),a!==null&&n&4&&Ho(e,e.memoizedProps,a.memoizedProps);break;case 5:if(mt(t,e),gt(e),n&512&&(De||a===null||Ut(a,a.return)),e.flags&32){o=e.stateNode;try{yn(o,"")}catch(C){je(e,e.return,C)}}n&4&&e.stateNode!=null&&(o=e.memoizedProps,Ho(e,o,a!==null?a.memoizedProps:o)),n&1024&&(Yo=!0);break;case 6:if(mt(t,e),gt(e),n&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(C){je(e,e.return,C)}}break;case 3:if(Br=null,o=zt,zt=Mr(t.containerInfo),mt(t,e),zt=o,gt(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{ol(t.containerInfo)}catch(C){je(e,e.return,C)}Yo&&(Yo=!1,Wf(e));break;case 4:n=zt,zt=Mr(e.stateNode.containerInfo),mt(t,e),gt(e),zt=n;break;case 12:mt(t,e),gt(e);break;case 13:mt(t,e),gt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Po=Ct()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$o(e,n)));break;case 22:o=e.memoizedState!==null;var x=a!==null&&a.memoizedState!==null,N=Wt,M=De;if(Wt=N||o,De=M||x,mt(t,e),De=M,Wt=N,gt(e),n&8192)e:for(t=e.stateNode,t._visibility=o?t._visibility&-2:t._visibility|1,o&&(a===null||x||Wt||De||tn(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){x=a=t;try{if(c=x.stateNode,o)g=c.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{y=x.stateNode;var L=x.memoizedProps.style,R=L!=null&&L.hasOwnProperty("display")?L.display:null;y.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch(C){je(x,x.return,C)}}}else if(t.tag===6){if(a===null){x=t;try{x.stateNode.nodeValue=o?"":x.memoizedProps}catch(C){je(x,x.return,C)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,$o(e,a))));break;case 19:mt(t,e),gt(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,$o(e,n)));break;case 30:break;case 21:break;default:mt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Vf(n)){a=n;break}n=n.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var o=a.stateNode,c=Lo(e);_r(e,c,o);break;case 5:var g=a.stateNode;a.flags&32&&(yn(g,""),a.flags&=-33);var y=Lo(e);_r(e,y,g);break;case 3:case 4:var x=a.stateNode.containerInfo,N=Lo(e);Go(e,N,x);break;default:throw Error(s(161))}}catch(M){je(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Xf(e,t.alternate,t),t=t.sibling}function tn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ba(4,t,t.return),tn(t);break;case 1:Ut(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yf(t,t.return,a),tn(t);break;case 27:el(t.stateNode);case 26:case 5:Ut(t,t.return),tn(t);break;case 22:t.memoizedState===null&&tn(t);break;case 30:tn(t);break;default:tn(t)}e=e.sibling}}function wa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,o=e,c=t,g=c.flags;switch(c.tag){case 0:case 11:case 15:wa(o,c,a),Vi(4,c);break;case 1:if(wa(o,c,a),n=c,o=n.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(N){je(n,n.return,N)}if(n=c,o=n.updateQueue,o!==null){var y=n.stateNode;try{var x=o.shared.hiddenCallbacks;if(x!==null)for(o.shared.hiddenCallbacks=null,o=0;o<x.length;o++)kd(x[o],y)}catch(N){je(n,n.return,N)}}a&&g&64&&Gf(c),Zi(c,c.return);break;case 27:Zf(c);case 26:case 5:wa(o,c,a),a&&n===null&&g&4&&$f(c),Zi(c,c.return);break;case 12:wa(o,c,a);break;case 13:wa(o,c,a),a&&g&4&&Jf(o,c);break;case 22:c.memoizedState===null&&wa(o,c,a),Zi(c,c.return);break;case 30:break;default:wa(o,c,a)}t=t.sibling}}function Vo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ni(a))}function Zo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ni(e))}function Bt(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)If(e,t,a,n),t=t.sibling}function If(e,t,a,n){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Bt(e,t,a,n),o&2048&&Vi(9,t);break;case 1:Bt(e,t,a,n);break;case 3:Bt(e,t,a,n),o&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ni(e)));break;case 12:if(o&2048){Bt(e,t,a,n),e=t.stateNode;try{var c=t.memoizedProps,g=c.id,y=c.onPostCommit;typeof y=="function"&&y(g,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(x){je(t,t.return,x)}}else Bt(e,t,a,n);break;case 13:Bt(e,t,a,n);break;case 23:break;case 22:c=t.stateNode,g=t.alternate,t.memoizedState!==null?c._visibility&2?Bt(e,t,a,n):Ki(e,t):c._visibility&2?Bt(e,t,a,n):(c._visibility|=2,Bn(e,t,a,n,(t.subtreeFlags&10256)!==0)),o&2048&&Vo(g,t);break;case 24:Bt(e,t,a,n),o&2048&&Zo(t.alternate,t);break;default:Bt(e,t,a,n)}}function Bn(e,t,a,n,o){for(o=o&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var c=e,g=t,y=a,x=n,N=g.flags;switch(g.tag){case 0:case 11:case 15:Bn(c,g,y,x,o),Vi(8,g);break;case 23:break;case 22:var M=g.stateNode;g.memoizedState!==null?M._visibility&2?Bn(c,g,y,x,o):Ki(c,g):(M._visibility|=2,Bn(c,g,y,x,o)),o&&N&2048&&Vo(g.alternate,g);break;case 24:Bn(c,g,y,x,o),o&&N&2048&&Zo(g.alternate,g);break;default:Bn(c,g,y,x,o)}t=t.sibling}}function Ki(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,o=n.flags;switch(n.tag){case 22:Ki(a,n),o&2048&&Vo(n.alternate,n);break;case 24:Ki(a,n),o&2048&&Zo(n.alternate,n);break;default:Ki(a,n)}t=t.sibling}}var Xi=8192;function qn(e){if(e.subtreeFlags&Xi)for(e=e.child;e!==null;)eh(e),e=e.sibling}function eh(e){switch(e.tag){case 26:qn(e),e.flags&Xi&&e.memoizedState!==null&&ep(zt,e.memoizedState,e.memoizedProps);break;case 5:qn(e);break;case 3:case 4:var t=zt;zt=Mr(e.stateNode.containerInfo),qn(e),zt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Xi,Xi=16777216,qn(e),Xi=t):qn(e));break;default:qn(e)}}function th(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Qi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ye=n,nh(n,e)}th(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ah(e),e=e.sibling}function ah(e){switch(e.tag){case 0:case 11:case 15:Qi(e),e.flags&2048&&ba(9,e,e.return);break;case 3:Qi(e);break;case 12:Qi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Sr(e)):Qi(e);break;default:Qi(e)}}function Sr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Ye=n,nh(n,e)}th(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ba(8,t,t.return),Sr(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Sr(t));break;default:Sr(t)}e=e.sibling}}function nh(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:ba(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Ni(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ye=n;else e:for(a=e;Ye!==null;){n=Ye;var o=n.sibling,c=n.return;if(Qf(n),n===a){Ye=null;break e}if(o!==null){o.return=c,Ye=o;break e}Ye=c}}}var pg={getCacheForType:function(e){var t=We(qe),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},vg=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,ue=null,he=0,be=0,pt=null,_a=!1,Hn=!1,Ko=!1,ea=0,Re=0,Sa=0,an=0,Xo=0,kt=0,Ln=0,Pi=null,st=null,Qo=!1,Po=0,jr=1/0,Er=null,ja=null,Qe=0,Ea=null,Gn=null,Yn=0,Jo=0,Fo=null,ih=null,Ji=0,Wo=null;function vt(){if((ye&2)!==0&&he!==0)return he&-he;if(B.T!==null){var e=zn;return e!==0?e:lu()}return bc()}function lh(){kt===0&&(kt=(he&536870912)===0||ve?gc():536870912);var e=Et.current;return e!==null&&(e.flags|=32),kt}function yt(e,t,a){(e===Ee&&(be===2||be===9)||e.cancelPendingCommit!==null)&&($n(e,0),ka(e,he,kt,!1)),mi(e,a),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(an|=a),Re===4&&ka(e,he,kt,!1)),qt(e))}function rh(e,t,a){if((ye&6)!==0)throw Error(s(327));var n=!a&&(t&124)===0&&(t&e.expiredLanes)===0||hi(e,t),o=n?xg(e,t):tu(e,t,!0),c=n;do{if(o===0){Hn&&!n&&ka(e,t,0,!1);break}else{if(a=e.current.alternate,c&&!yg(a)){o=tu(e,t,!1),c=!1;continue}if(o===2){if(c=t,e.errorRecoveryDisabledLanes&c)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){t=g;e:{var y=e;o=Pi;var x=y.current.memoizedState.isDehydrated;if(x&&($n(y,g).flags|=256),g=tu(y,g,!1),g!==2){if(Ko&&!x){y.errorRecoveryDisabledLanes|=c,an|=c,o=4;break e}c=st,st=o,c!==null&&(st===null?st=c:st.push.apply(st,c))}o=g}if(c=!1,o!==2)continue}}if(o===1){$n(e,0),ka(e,t,0,!0);break}e:{switch(n=e,c=o,c){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ka(n,t,kt,!_a);break e;case 2:st=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(o=Po+300-Ct(),10<o)){if(ka(n,t,kt,!_a),Ul(n,0,!0)!==0)break e;n.timeoutHandle=Mh(sh.bind(null,n,a,st,Er,Qo,t,kt,an,Ln,_a,c,2,-0,0),o);break e}sh(n,a,st,Er,Qo,t,kt,an,Ln,_a,c,0,-0,0)}}break}while(!0);qt(e)}function sh(e,t,a,n,o,c,g,y,x,N,M,L,R,C){if(e.timeoutHandle=-1,L=t.subtreeFlags,(L&8192||(L&16785408)===16785408)&&(nl={stylesheets:null,count:0,unsuspend:Ig},eh(t),L=tp(),L!==null)){e.cancelPendingCommit=L(mh.bind(null,e,t,c,a,n,o,g,y,x,M,1,R,C)),ka(e,c,g,!N);return}mh(e,t,c,a,n,o,g,y,x)}function yg(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var o=a[n],c=o.getSnapshot;o=o.value;try{if(!ft(c(),o))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ka(e,t,a,n){t&=~Xo,t&=~an,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var o=t;0<o;){var c=31-dt(o),g=1<<c;n[c]=-1,o&=~g}a!==0&&vc(e,a,t)}function kr(){return(ye&6)===0?(Fi(0),!1):!0}function Io(){if(ue!==null){if(be===0)var e=ue.return;else e=ue,Kt=Ja=null,po(e),Mn=null,Gi=0,e=ue;for(;e!==null;)Lf(e.alternate,e),e=e.return;ue=null}}function $n(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ug(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Io(),Ee=e,ue=a=$t(e.current,null),he=t,be=0,pt=null,_a=!1,Hn=hi(e,t),Ko=!1,Ln=kt=Xo=an=Sa=Re=0,st=Pi=null,Qo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var o=31-dt(n),c=1<<o;t|=e[o],n&=~c}return ea=t,Ql(),a}function oh(e,t){se=null,B.H=hr,t===Ri||t===nr?(t=jd(),be=3):t===wd?(t=jd(),be=4):be=t===kf?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,pt=t,ue===null&&(Re=1,yr(e,wt(t,e.current)))}function uh(){var e=B.H;return B.H=hr,e===null?hr:e}function ch(){var e=B.A;return B.A=pg,e}function eu(){Re=4,_a||(he&4194048)!==he&&Et.current!==null||(Hn=!0),(Sa&134217727)===0&&(an&134217727)===0||Ee===null||ka(Ee,he,kt,!1)}function tu(e,t,a){var n=ye;ye|=2;var o=uh(),c=ch();(Ee!==e||he!==t)&&(Er=null,$n(e,t)),t=!1;var g=Re;e:do try{if(be!==0&&ue!==null){var y=ue,x=pt;switch(be){case 8:Io(),g=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(t=!0);var N=be;if(be=0,pt=null,Vn(e,y,x,N),a&&Hn){g=0;break e}break;default:N=be,be=0,pt=null,Vn(e,y,x,N)}}bg(),g=Re;break}catch(M){oh(e,M)}while(!0);return t&&e.shellSuspendCounter++,Kt=Ja=null,ye=n,B.H=o,B.A=c,ue===null&&(Ee=null,he=0,Ql()),g}function bg(){for(;ue!==null;)dh(ue)}function xg(e,t){var a=ye;ye|=2;var n=uh(),o=ch();Ee!==e||he!==t?(Er=null,jr=Ct()+500,$n(e,t)):Hn=hi(e,t);e:do try{if(be!==0&&ue!==null){t=ue;var c=pt;t:switch(be){case 1:be=0,pt=null,Vn(e,t,c,1);break;case 2:case 9:if(_d(c)){be=0,pt=null,fh(t);break}t=function(){be!==2&&be!==9||Ee!==e||(be=7),qt(e)},c.then(t,t);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:_d(c)?(be=0,pt=null,fh(t)):(be=0,pt=null,Vn(e,t,c,7));break;case 5:var g=null;switch(ue.tag){case 26:g=ue.memoizedState;case 5:case 27:var y=ue;if(!g||Xh(g)){be=0,pt=null;var x=y.sibling;if(x!==null)ue=x;else{var N=y.return;N!==null?(ue=N,Tr(N)):ue=null}break t}}be=0,pt=null,Vn(e,t,c,5);break;case 6:be=0,pt=null,Vn(e,t,c,6);break;case 8:Io(),Re=6;break e;default:throw Error(s(462))}}wg();break}catch(M){oh(e,M)}while(!0);return Kt=Ja=null,B.H=n,B.A=o,ye=a,ue!==null?0:(Ee=null,he=0,Ql(),Re)}function wg(){for(;ue!==null&&!$m();)dh(ue)}function dh(e){var t=qf(e.alternate,e,ea);e.memoizedProps=e.pendingProps,t===null?Tr(e):ue=t}function fh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Rf(a,t,t.pendingProps,t.type,void 0,he);break;case 11:t=Rf(a,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:po(t);default:Lf(a,t),t=ue=fd(t,ea),t=qf(a,t,ea)}e.memoizedProps=e.pendingProps,t===null?Tr(e):ue=t}function Vn(e,t,a,n){Kt=Ja=null,po(t),Mn=null,Gi=0;var o=t.return;try{if(cg(e,o,t,a,he)){Re=1,yr(e,wt(a,e.current)),ue=null;return}}catch(c){if(o!==null)throw ue=o,c;Re=1,yr(e,wt(a,e.current)),ue=null;return}t.flags&32768?(ve||n===1?e=!0:Hn||(he&536870912)!==0?e=!1:(_a=e=!0,(n===2||n===9||n===3||n===6)&&(n=Et.current,n!==null&&n.tag===13&&(n.flags|=16384))),hh(t,e)):Tr(t)}function Tr(e){var t=e;do{if((t.flags&32768)!==0){hh(t,_a);return}e=t.return;var a=fg(t.alternate,t,ea);if(a!==null){ue=a;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Re===0&&(Re=5)}function hh(e,t){do{var a=hg(e.alternate,e);if(a!==null){a.flags&=32767,ue=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=a}while(e!==null);Re=6,ue=null}function mh(e,t,a,n,o,c,g,y,x){e.cancelPendingCommit=null;do Ar();while(Qe!==0);if((ye&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(c=t.lanes|t.childLanes,c|=Vs,Im(e,a,c,g,y,x),e===Ee&&(ue=Ee=null,he=0),Gn=t,Ea=e,Yn=a,Jo=c,Fo=o,ih=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Eg(Cl,function(){return bh(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null,o=K.p,K.p=2,g=ye,ye|=4;try{mg(e,t,a)}finally{ye=g,K.p=o,B.T=n}}Qe=1,gh(),ph(),vh()}}function gh(){if(Qe===1){Qe=0;var e=Ea,t=Gn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var n=K.p;K.p=2;var o=ye;ye|=4;try{Ff(t,e);var c=hu,g=ad(e.containerInfo),y=c.focusedElem,x=c.selectionRange;if(g!==y&&y&&y.ownerDocument&&td(y.ownerDocument.documentElement,y)){if(x!==null&&Hs(y)){var N=x.start,M=x.end;if(M===void 0&&(M=N),"selectionStart"in y)y.selectionStart=N,y.selectionEnd=Math.min(M,y.value.length);else{var L=y.ownerDocument||document,R=L&&L.defaultView||window;if(R.getSelection){var C=R.getSelection(),te=y.textContent.length,W=Math.min(x.start,te),_e=x.end===void 0?W:Math.min(x.end,te);!C.extend&&W>_e&&(g=_e,_e=W,W=g);var T=ed(y,W),E=ed(y,_e);if(T&&E&&(C.rangeCount!==1||C.anchorNode!==T.node||C.anchorOffset!==T.offset||C.focusNode!==E.node||C.focusOffset!==E.offset)){var z=L.createRange();z.setStart(T.node,T.offset),C.removeAllRanges(),W>_e?(C.addRange(z),C.extend(E.node,E.offset)):(z.setEnd(E.node,E.offset),C.addRange(z))}}}}for(L=[],C=y;C=C.parentNode;)C.nodeType===1&&L.push({element:C,left:C.scrollLeft,top:C.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<L.length;y++){var H=L[y];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}Lr=!!fu,hu=fu=null}finally{ye=o,K.p=n,B.T=a}}e.current=t,Qe=2}}function ph(){if(Qe===2){Qe=0;var e=Ea,t=Gn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var n=K.p;K.p=2;var o=ye;ye|=4;try{Xf(e,t.alternate,t)}finally{ye=o,K.p=n,B.T=a}}Qe=3}}function vh(){if(Qe===4||Qe===3){Qe=0,Vm();var e=Ea,t=Gn,a=Yn,n=ih;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,Gn=Ea=null,yh(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(ja=null),ys(a),t=t.stateNode,ct&&typeof ct.onCommitFiberRoot=="function")try{ct.onCommitFiberRoot(fi,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=B.T,o=K.p,K.p=2,B.T=null;try{for(var c=e.onRecoverableError,g=0;g<n.length;g++){var y=n[g];c(y.value,{componentStack:y.stack})}}finally{B.T=t,K.p=o}}(Yn&3)!==0&&Ar(),qt(e),o=e.pendingLanes,(a&4194090)!==0&&(o&42)!==0?e===Wo?Ji++:(Ji=0,Wo=e):Ji=0,Fi(0)}}function yh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ni(t)))}function Ar(e){return gh(),ph(),vh(),bh()}function bh(){if(Qe!==5)return!1;var e=Ea,t=Jo;Jo=0;var a=ys(Yn),n=B.T,o=K.p;try{K.p=32>a?32:a,B.T=null,a=Fo,Fo=null;var c=Ea,g=Yn;if(Qe=0,Gn=Ea=null,Yn=0,(ye&6)!==0)throw Error(s(331));var y=ye;if(ye|=4,ah(c.current),If(c,c.current,g,a),ye=y,Fi(0,!1),ct&&typeof ct.onPostCommitFiberRoot=="function")try{ct.onPostCommitFiberRoot(fi,c)}catch{}return!0}finally{K.p=o,B.T=n,yh(e,t)}}function xh(e,t,a){t=wt(a,t),t=No(e.stateNode,t,2),e=ga(e,t,2),e!==null&&(mi(e,2),qt(e))}function je(e,t,a){if(e.tag===3)xh(e,e,a);else for(;t!==null;){if(t.tag===3){xh(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ja===null||!ja.has(n))){e=wt(a,e),a=jf(2),n=ga(t,a,2),n!==null&&(Ef(a,n,t,e),mi(n,2),qt(n));break}}t=t.return}}function au(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new vg;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(a)||(Ko=!0,o.add(a),e=_g.bind(null,e,t,a),t.then(e,e))}function _g(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ee===e&&(he&a)===a&&(Re===4||Re===3&&(he&62914560)===he&&300>Ct()-Po?(ye&2)===0&&$n(e,0):Xo|=a,Ln===he&&(Ln=0)),qt(e)}function wh(e,t){t===0&&(t=pc()),e=En(e,t),e!==null&&(mi(e,t),qt(e))}function Sg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),wh(e,a)}function jg(e,t){var a=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(a=o.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(t),wh(e,a)}function Eg(e,t){return ms(e,t)}var zr=null,Zn=null,nu=!1,Nr=!1,iu=!1,nn=0;function qt(e){e!==Zn&&e.next===null&&(Zn===null?zr=Zn=e:Zn=Zn.next=e),Nr=!0,nu||(nu=!0,Tg())}function Fi(e,t){if(!iu&&Nr){iu=!0;do for(var a=!1,n=zr;n!==null;){if(e!==0){var o=n.pendingLanes;if(o===0)var c=0;else{var g=n.suspendedLanes,y=n.pingedLanes;c=(1<<31-dt(42|e)+1)-1,c&=o&~(g&~y),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Eh(n,c))}else c=he,c=Ul(n,n===Ee?c:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(c&3)===0||hi(n,c)||(a=!0,Eh(n,c));n=n.next}while(a);iu=!1}}function kg(){_h()}function _h(){Nr=nu=!1;var e=0;nn!==0&&(Mg()&&(e=nn),nn=0);for(var t=Ct(),a=null,n=zr;n!==null;){var o=n.next,c=Sh(n,t);c===0?(n.next=null,a===null?zr=o:a.next=o,o===null&&(Zn=a)):(a=n,(e!==0||(c&3)!==0)&&(Nr=!0)),n=o}Fi(e)}function Sh(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var g=31-dt(c),y=1<<g,x=o[g];x===-1?((y&a)===0||(y&n)!==0)&&(o[g]=Wm(y,t)):x<=t&&(e.expiredLanes|=y),c&=~y}if(t=Ee,a=he,a=Ul(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(be===2||be===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&gs(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||hi(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&gs(n),ys(a)){case 2:case 8:a=hc;break;case 32:a=Cl;break;case 268435456:a=mc;break;default:a=Cl}return n=jh.bind(null,e),a=ms(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&gs(n),e.callbackPriority=2,e.callbackNode=null,2}function jh(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ar()&&e.callbackNode!==a)return null;var n=he;return n=Ul(e,e===Ee?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(rh(e,n,t),Sh(e,Ct()),e.callbackNode!=null&&e.callbackNode===a?jh.bind(null,e):null)}function Eh(e,t){if(Ar())return null;rh(e,t,!0)}function Tg(){Bg(function(){(ye&6)!==0?ms(fc,kg):_h()})}function lu(){return nn===0&&(nn=gc()),nn}function kh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Gl(""+e)}function Th(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Ag(e,t,a,n,o){if(t==="submit"&&a&&a.stateNode===o){var c=kh((o[nt]||null).action),g=n.submitter;g&&(t=(t=g[nt]||null)?kh(t.formAction):g.getAttribute("formAction"),t!==null&&(c=t,g=null));var y=new Zl("action","action",null,n,o);e.push({event:y,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(nn!==0){var x=g?Th(o,g):new FormData(o);Eo(a,{pending:!0,data:x,method:o.method,action:c},null,x)}}else typeof c=="function"&&(y.preventDefault(),x=g?Th(o,g):new FormData(o),Eo(a,{pending:!0,data:x,method:o.method,action:c},c,x))},currentTarget:o}]})}}for(var ru=0;ru<$s.length;ru++){var su=$s[ru],zg=su.toLowerCase(),Ng=su[0].toUpperCase()+su.slice(1);At(zg,"on"+Ng)}At(ld,"onAnimationEnd"),At(rd,"onAnimationIteration"),At(sd,"onAnimationStart"),At("dblclick","onDoubleClick"),At("focusin","onFocus"),At("focusout","onBlur"),At(X1,"onTransitionRun"),At(Q1,"onTransitionStart"),At(P1,"onTransitionCancel"),At(od,"onTransitionEnd"),gn("onMouseEnter",["mouseout","mouseover"]),gn("onMouseLeave",["mouseout","mouseover"]),gn("onPointerEnter",["pointerout","pointerover"]),gn("onPointerLeave",["pointerout","pointerover"]),Ga("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ga("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ga("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ga("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ga("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Og=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wi));function Ah(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],o=n.event;n=n.listeners;e:{var c=void 0;if(t)for(var g=n.length-1;0<=g;g--){var y=n[g],x=y.instance,N=y.currentTarget;if(y=y.listener,x!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=N;try{c(o)}catch(M){vr(M)}o.currentTarget=null,c=x}else for(g=0;g<n.length;g++){if(y=n[g],x=y.instance,N=y.currentTarget,y=y.listener,x!==c&&o.isPropagationStopped())break e;c=y,o.currentTarget=N;try{c(o)}catch(M){vr(M)}o.currentTarget=null,c=x}}}}function ce(e,t){var a=t[bs];a===void 0&&(a=t[bs]=new Set);var n=e+"__bubble";a.has(n)||(zh(t,e,2,!1),a.add(n))}function ou(e,t,a){var n=0;t&&(n|=4),zh(a,e,n,t)}var Or="_reactListening"+Math.random().toString(36).slice(2);function uu(e){if(!e[Or]){e[Or]=!0,wc.forEach(function(a){a!=="selectionchange"&&(Og.has(a)||ou(a,!1,e),ou(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Or]||(t[Or]=!0,ou("selectionchange",!1,t))}}function zh(e,t,a,n){switch(Ih(t)){case 2:var o=ip;break;case 8:o=lp;break;default:o=Su}a=o.bind(null,t,a,e),o=void 0,!Ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,a,{capture:!0,passive:o}):e.addEventListener(t,a,!0):o!==void 0?e.addEventListener(t,a,{passive:o}):e.addEventListener(t,a,!1)}function cu(e,t,a,n,o){var c=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var g=n.tag;if(g===3||g===4){var y=n.stateNode.containerInfo;if(y===o)break;if(g===4)for(g=n.return;g!==null;){var x=g.tag;if((x===3||x===4)&&g.stateNode.containerInfo===o)return;g=g.return}for(;y!==null;){if(g=fn(y),g===null)return;if(x=g.tag,x===5||x===6||x===26||x===27){n=c=g;continue e}y=y.parentNode}}n=n.return}Mc(function(){var N=c,M=As(a),L=[];e:{var R=ud.get(e);if(R!==void 0){var C=Zl,te=e;switch(e){case"keypress":if($l(a)===0)break e;case"keydown":case"keyup":C=E1;break;case"focusin":te="focus",C=Ds;break;case"focusout":te="blur",C=Ds;break;case"beforeblur":case"afterblur":C=Ds;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=qc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=h1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=A1;break;case ld:case rd:case sd:C=p1;break;case od:C=N1;break;case"scroll":case"scrollend":C=d1;break;case"wheel":C=R1;break;case"copy":case"cut":case"paste":C=y1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Lc;break;case"toggle":case"beforetoggle":C=D1}var W=(t&4)!==0,_e=!W&&(e==="scroll"||e==="scrollend"),T=W?R!==null?R+"Capture":null:R;W=[];for(var E=N,z;E!==null;){var H=E;if(z=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||z===null||T===null||(H=vi(E,T),H!=null&&W.push(Ii(E,H,z))),_e)break;E=E.return}0<W.length&&(R=new C(R,te,null,a,M),L.push({event:R,listeners:W}))}}if((t&7)===0){e:{if(R=e==="mouseover"||e==="pointerover",C=e==="mouseout"||e==="pointerout",R&&a!==Ts&&(te=a.relatedTarget||a.fromElement)&&(fn(te)||te[dn]))break e;if((C||R)&&(R=M.window===M?M:(R=M.ownerDocument)?R.defaultView||R.parentWindow:window,C?(te=a.relatedTarget||a.toElement,C=N,te=te?fn(te):null,te!==null&&(_e=d(te),W=te.tag,te!==_e||W!==5&&W!==27&&W!==6)&&(te=null)):(C=null,te=N),C!==te)){if(W=qc,H="onMouseLeave",T="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(W=Lc,H="onPointerLeave",T="onPointerEnter",E="pointer"),_e=C==null?R:pi(C),z=te==null?R:pi(te),R=new W(H,E+"leave",C,a,M),R.target=_e,R.relatedTarget=z,H=null,fn(M)===N&&(W=new W(T,E+"enter",te,a,M),W.target=z,W.relatedTarget=_e,H=W),_e=H,C&&te)t:{for(W=C,T=te,E=0,z=W;z;z=Kn(z))E++;for(z=0,H=T;H;H=Kn(H))z++;for(;0<E-z;)W=Kn(W),E--;for(;0<z-E;)T=Kn(T),z--;for(;E--;){if(W===T||T!==null&&W===T.alternate)break t;W=Kn(W),T=Kn(T)}W=null}else W=null;C!==null&&Nh(L,R,C,W,!1),te!==null&&_e!==null&&Nh(L,_e,te,W,!0)}}e:{if(R=N?pi(N):window,C=R.nodeName&&R.nodeName.toLowerCase(),C==="select"||C==="input"&&R.type==="file")var P=Qc;else if(Kc(R))if(Pc)P=V1;else{P=Y1;var oe=G1}else C=R.nodeName,!C||C.toLowerCase()!=="input"||R.type!=="checkbox"&&R.type!=="radio"?N&&ks(N.elementType)&&(P=Qc):P=$1;if(P&&(P=P(e,N))){Xc(L,P,a,M);break e}oe&&oe(e,R,N),e==="focusout"&&N&&R.type==="number"&&N.memoizedProps.value!=null&&Es(R,"number",R.value)}switch(oe=N?pi(N):window,e){case"focusin":(Kc(oe)||oe.contentEditable==="true")&&(_n=oe,Ls=N,Ei=null);break;case"focusout":Ei=Ls=_n=null;break;case"mousedown":Gs=!0;break;case"contextmenu":case"mouseup":case"dragend":Gs=!1,nd(L,a,M);break;case"selectionchange":if(K1)break;case"keydown":case"keyup":nd(L,a,M)}var J;if(Us)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else wn?Vc(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(Gc&&a.locale!=="ko"&&(wn||I!=="onCompositionStart"?I==="onCompositionEnd"&&wn&&(J=Uc()):(da=M,Os="value"in da?da.value:da.textContent,wn=!0)),oe=Rr(N,I),0<oe.length&&(I=new Hc(I,e,null,a,M),L.push({event:I,listeners:oe}),J?I.data=J:(J=Zc(a),J!==null&&(I.data=J)))),(J=U1?B1(e,a):q1(e,a))&&(I=Rr(N,"onBeforeInput"),0<I.length&&(oe=new Hc("onBeforeInput","beforeinput",null,a,M),L.push({event:oe,listeners:I}),oe.data=J)),Ag(L,e,N,a,M)}Ah(L,t)})}function Ii(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Rr(e,t){for(var a=t+"Capture",n=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=vi(e,a),o!=null&&n.unshift(Ii(e,o,c)),o=vi(e,t),o!=null&&n.push(Ii(e,o,c))),e.tag===3)return n;e=e.return}return[]}function Kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nh(e,t,a,n,o){for(var c=t._reactName,g=[];a!==null&&a!==n;){var y=a,x=y.alternate,N=y.stateNode;if(y=y.tag,x!==null&&x===n)break;y!==5&&y!==26&&y!==27||N===null||(x=N,o?(N=vi(a,c),N!=null&&g.unshift(Ii(a,N,x))):o||(N=vi(a,c),N!=null&&g.push(Ii(a,N,x)))),a=a.return}g.length!==0&&e.push({event:t,listeners:g})}var Rg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function Oh(e){return(typeof e=="string"?e:""+e).replace(Rg,`
`).replace(Cg,"")}function Rh(e,t){return t=Oh(t),Oh(e)===t}function Cr(){}function we(e,t,a,n,o,c){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||yn(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&yn(e,""+n);break;case"className":ql(e,"class",n);break;case"tabIndex":ql(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":ql(e,a,n);break;case"style":Cc(e,n,c);break;case"data":if(t!=="object"){ql(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Gl(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(t!=="input"&&we(e,t,"name",o.name,o,null),we(e,t,"formEncType",o.formEncType,o,null),we(e,t,"formMethod",o.formMethod,o,null),we(e,t,"formTarget",o.formTarget,o,null)):(we(e,t,"encType",o.encType,o,null),we(e,t,"method",o.method,o,null),we(e,t,"target",o.target,o,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Gl(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Cr);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Gl(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ce("beforetoggle",e),ce("toggle",e),Bl(e,"popover",n);break;case"xlinkActuate":Gt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Gt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Gt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Gt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Gt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Gt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Gt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Bl(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=u1.get(a)||a,Bl(e,a,n))}}function du(e,t,a,n,o,c){switch(a){case"style":Cc(e,n,c);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(a=n.__html,a!=null){if(o.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof n=="string"?yn(e,n):(typeof n=="number"||typeof n=="bigint")&&yn(e,""+n);break;case"onScroll":n!=null&&ce("scroll",e);break;case"onScrollEnd":n!=null&&ce("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Cr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!_c.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(o=a.endsWith("Capture"),t=a.slice(2,o?a.length-7:void 0),c=e[nt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(t,c,o),typeof n=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,o);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Bl(e,a,n)}}}function Pe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ce("error",e),ce("load",e);var n=!1,o=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":n=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:we(e,t,c,g,a,null)}}o&&we(e,t,"srcSet",a.srcSet,a,null),n&&we(e,t,"src",a.src,a,null);return;case"input":ce("invalid",e);var y=c=g=o=null,x=null,N=null;for(n in a)if(a.hasOwnProperty(n)){var M=a[n];if(M!=null)switch(n){case"name":o=M;break;case"type":g=M;break;case"checked":x=M;break;case"defaultChecked":N=M;break;case"value":c=M;break;case"defaultValue":y=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(s(137,t));break;default:we(e,t,n,M,a,null)}}zc(e,c,y,x,N,g,o,!1),Hl(e);return;case"select":ce("invalid",e),n=g=c=null;for(o in a)if(a.hasOwnProperty(o)&&(y=a[o],y!=null))switch(o){case"value":c=y;break;case"defaultValue":g=y;break;case"multiple":n=y;default:we(e,t,o,y,a,null)}t=c,a=g,e.multiple=!!n,t!=null?vn(e,!!n,t,!1):a!=null&&vn(e,!!n,a,!0);return;case"textarea":ce("invalid",e),c=o=n=null;for(g in a)if(a.hasOwnProperty(g)&&(y=a[g],y!=null))switch(g){case"value":n=y;break;case"defaultValue":o=y;break;case"children":c=y;break;case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(91));break;default:we(e,t,g,y,a,null)}Oc(e,n,o,c),Hl(e);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:we(e,t,x,n,a,null)}return;case"dialog":ce("beforetoggle",e),ce("toggle",e),ce("cancel",e),ce("close",e);break;case"iframe":case"object":ce("load",e);break;case"video":case"audio":for(n=0;n<Wi.length;n++)ce(Wi[n],e);break;case"image":ce("error",e),ce("load",e);break;case"details":ce("toggle",e);break;case"embed":case"source":case"link":ce("error",e),ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(n=a[N],n!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:we(e,t,N,n,a,null)}return;default:if(ks(t)){for(M in a)a.hasOwnProperty(M)&&(n=a[M],n!==void 0&&du(e,t,M,n,a,void 0));return}}for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!=null&&we(e,t,y,n,a,null))}function Dg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,g=null,y=null,x=null,N=null,M=null;for(C in a){var L=a[C];if(a.hasOwnProperty(C)&&L!=null)switch(C){case"checked":break;case"value":break;case"defaultValue":x=L;default:n.hasOwnProperty(C)||we(e,t,C,null,n,L)}}for(var R in n){var C=n[R];if(L=a[R],n.hasOwnProperty(R)&&(C!=null||L!=null))switch(R){case"type":c=C;break;case"name":o=C;break;case"checked":N=C;break;case"defaultChecked":M=C;break;case"value":g=C;break;case"defaultValue":y=C;break;case"children":case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(137,t));break;default:C!==L&&we(e,t,R,C,n,L)}}js(e,g,y,x,N,M,c,o);return;case"select":C=g=y=R=null;for(c in a)if(x=a[c],a.hasOwnProperty(c)&&x!=null)switch(c){case"value":break;case"multiple":C=x;default:n.hasOwnProperty(c)||we(e,t,c,null,n,x)}for(o in n)if(c=n[o],x=a[o],n.hasOwnProperty(o)&&(c!=null||x!=null))switch(o){case"value":R=c;break;case"defaultValue":y=c;break;case"multiple":g=c;default:c!==x&&we(e,t,o,c,n,x)}t=y,a=g,n=C,R!=null?vn(e,!!a,R,!1):!!n!=!!a&&(t!=null?vn(e,!!a,t,!0):vn(e,!!a,a?[]:"",!1));return;case"textarea":C=R=null;for(y in a)if(o=a[y],a.hasOwnProperty(y)&&o!=null&&!n.hasOwnProperty(y))switch(y){case"value":break;case"children":break;default:we(e,t,y,null,n,o)}for(g in n)if(o=n[g],c=a[g],n.hasOwnProperty(g)&&(o!=null||c!=null))switch(g){case"value":R=o;break;case"defaultValue":C=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(s(91));break;default:o!==c&&we(e,t,g,o,n,c)}Nc(e,R,C);return;case"option":for(var te in a)if(R=a[te],a.hasOwnProperty(te)&&R!=null&&!n.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:we(e,t,te,null,n,R)}for(x in n)if(R=n[x],C=a[x],n.hasOwnProperty(x)&&R!==C&&(R!=null||C!=null))switch(x){case"selected":e.selected=R&&typeof R!="function"&&typeof R!="symbol";break;default:we(e,t,x,R,n,C)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in a)R=a[W],a.hasOwnProperty(W)&&R!=null&&!n.hasOwnProperty(W)&&we(e,t,W,null,n,R);for(N in n)if(R=n[N],C=a[N],n.hasOwnProperty(N)&&R!==C&&(R!=null||C!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(137,t));break;default:we(e,t,N,R,n,C)}return;default:if(ks(t)){for(var _e in a)R=a[_e],a.hasOwnProperty(_e)&&R!==void 0&&!n.hasOwnProperty(_e)&&du(e,t,_e,void 0,n,R);for(M in n)R=n[M],C=a[M],!n.hasOwnProperty(M)||R===C||R===void 0&&C===void 0||du(e,t,M,R,n,C);return}}for(var T in a)R=a[T],a.hasOwnProperty(T)&&R!=null&&!n.hasOwnProperty(T)&&we(e,t,T,null,n,R);for(L in n)R=n[L],C=a[L],!n.hasOwnProperty(L)||R===C||R==null&&C==null||we(e,t,L,R,n,C)}var fu=null,hu=null;function Dr(e){return e.nodeType===9?e:e.ownerDocument}function Ch(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function mu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var gu=null;function Mg(){var e=window.event;return e&&e.type==="popstate"?e===gu?!1:(gu=e,!0):(gu=null,!1)}var Mh=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(e){return Uh.resolve(null).then(e).catch(qg)}:Mh;function qg(e){setTimeout(function(){throw e})}function Ta(e){return e==="head"}function Bh(e,t){var a=t,n=0,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(0<n&&8>n){a=n;var g=e.ownerDocument;if(a&1&&el(g.documentElement),a&2&&el(g.body),a&4)for(a=g.head,el(a),g=a.firstChild;g;){var y=g.nextSibling,x=g.nodeName;g[gi]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=y}}if(o===0){e.removeChild(c),ol(t);return}o--}else a==="$"||a==="$?"||a==="$!"?o++:n=a.charCodeAt(0)-48;else n=0;a=c}while(a);ol(t)}function pu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":pu(a),xs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Hg(e,t,a,n){for(;e.nodeType===1;){var o=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[gi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function Lg(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Nt(e.nextSibling),e===null))return null;return e}function vu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Gg(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var yu=null;function qh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function Hh(e,t,a){switch(t=Dr(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function el(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xs(e)}var Tt=new Map,Lh=new Set;function Mr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=K.d;K.d={f:Yg,r:$g,D:Vg,C:Zg,L:Kg,m:Xg,X:Pg,S:Qg,M:Jg};function Yg(){var e=ta.f(),t=kr();return e||t}function $g(e){var t=hn(e);t!==null&&t.tag===5&&t.type==="form"?rf(t):ta.r(e)}var Xn=typeof document>"u"?null:document;function Gh(e,t,a){var n=Xn;if(n&&typeof t=="string"&&t){var o=xt(t);o='link[rel="'+e+'"][href="'+o+'"]',typeof a=="string"&&(o+='[crossorigin="'+a+'"]'),Lh.has(o)||(Lh.add(o),e={rel:e,crossOrigin:a,href:t},n.querySelector(o)===null&&(t=n.createElement("link"),Pe(t,"link",e),Le(t),n.head.appendChild(t)))}}function Vg(e){ta.D(e),Gh("dns-prefetch",e,null)}function Zg(e,t){ta.C(e,t),Gh("preconnect",e,t)}function Kg(e,t,a){ta.L(e,t,a);var n=Xn;if(n&&e&&t){var o='link[rel="preload"][as="'+xt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(o+='[imagesrcset="'+xt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(o+='[imagesizes="'+xt(a.imageSizes)+'"]')):o+='[href="'+xt(e)+'"]';var c=o;switch(t){case"style":c=Qn(e);break;case"script":c=Pn(e)}Tt.has(c)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Tt.set(c,e),n.querySelector(o)!==null||t==="style"&&n.querySelector(tl(c))||t==="script"&&n.querySelector(al(c))||(t=n.createElement("link"),Pe(t,"link",e),Le(t),n.head.appendChild(t)))}}function Xg(e,t){ta.m(e,t);var a=Xn;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",o='link[rel="modulepreload"][as="'+xt(n)+'"][href="'+xt(e)+'"]',c=o;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Pn(e)}if(!Tt.has(c)&&(e=b({rel:"modulepreload",href:e},t),Tt.set(c,e),a.querySelector(o)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(al(c)))return}n=a.createElement("link"),Pe(n,"link",e),Le(n),a.head.appendChild(n)}}}function Qg(e,t,a){ta.S(e,t,a);var n=Xn;if(n&&e){var o=mn(n).hoistableStyles,c=Qn(e);t=t||"default";var g=o.get(c);if(!g){var y={loading:0,preload:null};if(g=n.querySelector(tl(c)))y.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Tt.get(c))&&bu(e,a);var x=g=n.createElement("link");Le(x),Pe(x,"link",e),x._p=new Promise(function(N,M){x.onload=N,x.onerror=M}),x.addEventListener("load",function(){y.loading|=1}),x.addEventListener("error",function(){y.loading|=2}),y.loading|=4,Ur(g,t,n)}g={type:"stylesheet",instance:g,count:1,state:y},o.set(c,g)}}}function Pg(e,t){ta.X(e,t);var a=Xn;if(a&&e){var n=mn(a).hoistableScripts,o=Pn(e),c=n.get(o);c||(c=a.querySelector(al(o)),c||(e=b({src:e,async:!0},t),(t=Tt.get(o))&&xu(e,t),c=a.createElement("script"),Le(c),Pe(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(o,c))}}function Jg(e,t){ta.M(e,t);var a=Xn;if(a&&e){var n=mn(a).hoistableScripts,o=Pn(e),c=n.get(o);c||(c=a.querySelector(al(o)),c||(e=b({src:e,async:!0,type:"module"},t),(t=Tt.get(o))&&xu(e,t),c=a.createElement("script"),Le(c),Pe(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},n.set(o,c))}}function Yh(e,t,a,n){var o=(o=ne.current)?Mr(o):null;if(!o)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Qn(a.href),a=mn(o).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Qn(a.href);var c=mn(o).hoistableStyles,g=c.get(e);if(g||(o=o.ownerDocument||o,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,g),(c=o.querySelector(tl(e)))&&!c._p&&(g.instance=c,g.state.loading=5),Tt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Tt.set(e,a),c||Fg(o,e,a,g.state))),t&&n===null)throw Error(s(528,""));return g}if(t&&n!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Pn(a),a=mn(o).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Qn(e){return'href="'+xt(e)+'"'}function tl(e){return'link[rel="stylesheet"]['+e+"]"}function $h(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Fg(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Pe(t,"link",a),Le(t),e.head.appendChild(t))}function Pn(e){return'[src="'+xt(e)+'"]'}function al(e){return"script[async]"+e}function Vh(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+xt(a.href)+'"]');if(n)return t.instance=n,Le(n),n;var o=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Le(n),Pe(n,"style",o),Ur(n,a.precedence,e),t.instance=n;case"stylesheet":o=Qn(a.href);var c=e.querySelector(tl(o));if(c)return t.state.loading|=4,t.instance=c,Le(c),c;n=$h(a),(o=Tt.get(o))&&bu(n,o),c=(e.ownerDocument||e).createElement("link"),Le(c);var g=c;return g._p=new Promise(function(y,x){g.onload=y,g.onerror=x}),Pe(c,"link",n),t.state.loading|=4,Ur(c,a.precedence,e),t.instance=c;case"script":return c=Pn(a.src),(o=e.querySelector(al(c)))?(t.instance=o,Le(o),o):(n=a,(o=Tt.get(c))&&(n=b({},a),xu(n,o)),e=e.ownerDocument||e,o=e.createElement("script"),Le(o),Pe(o,"link",n),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Ur(n,a.precedence,e));return t.instance}function Ur(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=n.length?n[n.length-1]:null,c=o,g=0;g<n.length;g++){var y=n[g];if(y.dataset.precedence===t)c=y;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function bu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function xu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Br=null;function Zh(e,t,a){if(Br===null){var n=new Map,o=Br=new Map;o.set(a,n)}else o=Br,n=o.get(a),n||(n=new Map,o.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),o=0;o<a.length;o++){var c=a[o];if(!(c[gi]||c[Fe]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(t)||"";g=e+g;var y=n.get(g);y?y.push(c):n.set(g,[c])}}return n}function Kh(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Wg(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Xh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var nl=null;function Ig(){}function ep(e,t,a){if(nl===null)throw Error(s(475));var n=nl;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var o=Qn(a.href),c=e.querySelector(tl(o));if(c){e=c._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(n.count++,n=qr.bind(n),e.then(n,n)),t.state.loading|=4,t.instance=c,Le(c);return}c=e.ownerDocument||e,a=$h(a),(o=Tt.get(o))&&bu(a,o),c=c.createElement("link"),Le(c);var g=c;g._p=new Promise(function(y,x){g.onload=y,g.onerror=x}),Pe(c,"link",a),t.instance=c}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(n.count++,t=qr.bind(n),e.addEventListener("load",t),e.addEventListener("error",t))}}function tp(){if(nl===null)throw Error(s(475));var e=nl;return e.stylesheets&&e.count===0&&wu(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&wu(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function qr(){if(this.count--,this.count===0){if(this.stylesheets)wu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hr=null;function wu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hr=new Map,t.forEach(ap,e),Hr=null,qr.call(e))}function ap(e,t){if(!(t.state.loading&4)){var a=Hr.get(e);if(a)var n=a.get(null);else{a=new Map,Hr.set(e,a);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var g=o[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),n=g)}n&&a.set(null,n)}o=t.instance,g=o.getAttribute("data-precedence"),c=a.get(g)||n,c===n&&a.set(null,o),a.set(g,o),this.count++,n=qr.bind(this),o.addEventListener("load",n),o.addEventListener("error",n),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),t.state.loading|=4}}var il={$$typeof:G,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function np(e,t,a,n,o,c,g,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ps(0),this.hiddenUpdates=ps(null),this.identifierPrefix=n,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function Qh(e,t,a,n,o,c,g,y,x,N,M,L){return e=new np(e,t,a,g,y,x,N,L),t=1,c===!0&&(t|=24),c=ht(3,null,null,t),e.current=c,c.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,c.memoizedState={element:n,isDehydrated:a,cache:t},lo(c),e}function Ph(e){return e?(e=kn,e):kn}function Jh(e,t,a,n,o,c){o=Ph(o),n.context===null?n.context=o:n.pendingContext=o,n=ma(t),n.payload={element:a},c=c===void 0?null:c,c!==null&&(n.callback=c),a=ga(e,n,t),a!==null&&(yt(a,e,t),Di(a,e,t))}function Fh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function _u(e,t){Fh(e,t),(e=e.alternate)&&Fh(e,t)}function Wh(e){if(e.tag===13){var t=En(e,67108864);t!==null&&yt(t,e,67108864),_u(e,67108864)}}var Lr=!0;function ip(e,t,a,n){var o=B.T;B.T=null;var c=K.p;try{K.p=2,Su(e,t,a,n)}finally{K.p=c,B.T=o}}function lp(e,t,a,n){var o=B.T;B.T=null;var c=K.p;try{K.p=8,Su(e,t,a,n)}finally{K.p=c,B.T=o}}function Su(e,t,a,n){if(Lr){var o=ju(n);if(o===null)cu(e,t,n,Gr,a),e0(e,n);else if(sp(o,e,t,a,n))n.stopPropagation();else if(e0(e,n),t&4&&-1<rp.indexOf(e)){for(;o!==null;){var c=hn(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=La(c.pendingLanes);if(g!==0){var y=c;for(y.pendingLanes|=2,y.entangledLanes|=2;g;){var x=1<<31-dt(g);y.entanglements[1]|=x,g&=~x}qt(c),(ye&6)===0&&(jr=Ct()+500,Fi(0))}}break;case 13:y=En(c,2),y!==null&&yt(y,c,2),kr(),_u(c,2)}if(c=ju(n),c===null&&cu(e,t,n,Gr,a),c===o)break;o=c}o!==null&&n.stopPropagation()}else cu(e,t,n,null,a)}}function ju(e){return e=As(e),Eu(e)}var Gr=null;function Eu(e){if(Gr=null,e=fn(e),e!==null){var t=d(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=f(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Gr=e,null}function Ih(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zm()){case fc:return 2;case hc:return 8;case Cl:case Km:return 32;case mc:return 268435456;default:return 32}default:return 32}}var ku=!1,Aa=null,za=null,Na=null,ll=new Map,rl=new Map,Oa=[],rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function e0(e,t){switch(e){case"focusin":case"focusout":Aa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Na=null;break;case"pointerover":case"pointerout":ll.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(t.pointerId)}}function sl(e,t,a,n,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:c,targetContainers:[o]},t!==null&&(t=hn(t),t!==null&&Wh(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function sp(e,t,a,n,o){switch(t){case"focusin":return Aa=sl(Aa,e,t,a,n,o),!0;case"dragenter":return za=sl(za,e,t,a,n,o),!0;case"mouseover":return Na=sl(Na,e,t,a,n,o),!0;case"pointerover":var c=o.pointerId;return ll.set(c,sl(ll.get(c)||null,e,t,a,n,o)),!0;case"gotpointercapture":return c=o.pointerId,rl.set(c,sl(rl.get(c)||null,e,t,a,n,o)),!0}return!1}function t0(e){var t=fn(e.target);if(t!==null){var a=d(t);if(a!==null){if(t=a.tag,t===13){if(t=f(a),t!==null){e.blockedOn=t,e1(e.priority,function(){if(a.tag===13){var n=vt();n=vs(n);var o=En(a,n);o!==null&&yt(o,a,n),_u(a,n)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=ju(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ts=n,a.target.dispatchEvent(n),Ts=null}else return t=hn(a),t!==null&&Wh(t),e.blockedOn=a,!1;t.shift()}return!0}function a0(e,t,a){Yr(e)&&a.delete(t)}function op(){ku=!1,Aa!==null&&Yr(Aa)&&(Aa=null),za!==null&&Yr(za)&&(za=null),Na!==null&&Yr(Na)&&(Na=null),ll.forEach(a0),rl.forEach(a0)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,ku||(ku=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,op)))}var Vr=null;function n0(e){Vr!==e&&(Vr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Vr===e&&(Vr=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],o=e[t+2];if(typeof n!="function"){if(Eu(n||a)===null)continue;break}var c=hn(a);c!==null&&(e.splice(t,3),t-=3,Eo(c,{pending:!0,data:o,method:a.method,action:n},n,o))}}))}function ol(e){function t(x){return $r(x,e)}Aa!==null&&$r(Aa,e),za!==null&&$r(za,e),Na!==null&&$r(Na,e),ll.forEach(t),rl.forEach(t);for(var a=0;a<Oa.length;a++){var n=Oa[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<Oa.length&&(a=Oa[0],a.blockedOn===null);)t0(a),a.blockedOn===null&&Oa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var o=a[n],c=a[n+1],g=o[nt]||null;if(typeof c=="function")g||n0(a);else if(g){var y=null;if(c&&c.hasAttribute("formAction")){if(o=c,g=c[nt]||null)y=g.formAction;else if(Eu(o)!==null)continue}else y=g.action;typeof y=="function"?a[n+1]=y:(a.splice(n,3),n-=3),n0(a)}}}function Tu(e){this._internalRoot=e}Zr.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,n=vt();Jh(a,n,e,t,null,null)},Zr.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jh(e.current,2,null,e,null,null),kr(),t[dn]=null}};function Zr(e){this._internalRoot=e}Zr.prototype.unstable_scheduleHydration=function(e){if(e){var t=bc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Oa.length&&t!==0&&t<Oa[a].priority;a++);Oa.splice(a,0,e),a===0&&t0(e)}};var i0=i.version;if(i0!=="19.1.0")throw Error(s(527,i0,"19.1.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var up={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kr.isDisabled&&Kr.supportsFiber)try{fi=Kr.inject(up),ct=Kr}catch{}}return cl.createRoot=function(e,t){if(!u(e))throw Error(s(299));var a=!1,n="",o=xf,c=wf,g=_f,y=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(g=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(y=t.unstable_transitionCallbacks)),t=Qh(e,1,!1,null,null,a,n,o,c,g,y,null),e[dn]=t.current,uu(e),new Tu(t)},cl.hydrateRoot=function(e,t,a){if(!u(e))throw Error(s(299));var n=!1,o="",c=xf,g=wf,y=_f,x=null,N=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(o=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(y=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(x=a.unstable_transitionCallbacks),a.formState!==void 0&&(N=a.formState)),t=Qh(e,1,!0,t,a??null,n,o,c,g,y,x,N),t.context=Ph(null),a=t.current,n=vt(),n=vs(n),o=ma(n),o.callback=null,ga(a,o,n),a=n,t.current.lanes=a,mi(t,a),qt(t),e[dn]=t.current,uu(e),new Zr(t)},cl.version="19.1.0",cl}var m0;function xp(){if(m0)return Nu.exports;m0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(i){console.error(i)}}return r(),Nu.exports=bp(),Nu.exports}var wp=xp(),dl={},g0;function _p(){if(g0)return dl;g0=1,Object.defineProperty(dl,"__esModule",{value:!0}),dl.parse=f,dl.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,i=/^[\u0021-\u003A\u003C-\u007E]*$/,l=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,u=Object.prototype.toString,d=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function f(S,k){const _=new d,U=S.length;if(U<2)return _;const D=k?.decode||b;let A=0;do{const q=S.indexOf("=",A);if(q===-1)break;const G=S.indexOf(";",A),Q=G===-1?U:G;if(q>Q){A=S.lastIndexOf(";",q-1)+1;continue}const $=v(S,A,q),ae=m(S,q,$),V=S.slice($,ae);if(_[V]===void 0){let fe=v(S,q+1,Q),me=m(S,Q,fe);const Ke=D(S.slice(fe,me));_[V]=Ke}A=Q+1}while(A<U);return _}function v(S,k,_){do{const U=S.charCodeAt(k);if(U!==32&&U!==9)return k}while(++k<_);return _}function m(S,k,_){for(;k>_;){const U=S.charCodeAt(--k);if(U!==32&&U!==9)return k+1}return _}function p(S,k,_){const U=_?.encode||encodeURIComponent;if(!r.test(S))throw new TypeError(`argument name is invalid: ${S}`);const D=U(k);if(!i.test(D))throw new TypeError(`argument val is invalid: ${k}`);let A=S+"="+D;if(!_)return A;if(_.maxAge!==void 0){if(!Number.isInteger(_.maxAge))throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);A+="; Max-Age="+_.maxAge}if(_.domain){if(!l.test(_.domain))throw new TypeError(`option domain is invalid: ${_.domain}`);A+="; Domain="+_.domain}if(_.path){if(!s.test(_.path))throw new TypeError(`option path is invalid: ${_.path}`);A+="; Path="+_.path}if(_.expires){if(!w(_.expires)||!Number.isFinite(_.expires.valueOf()))throw new TypeError(`option expires is invalid: ${_.expires}`);A+="; Expires="+_.expires.toUTCString()}if(_.httpOnly&&(A+="; HttpOnly"),_.secure&&(A+="; Secure"),_.partitioned&&(A+="; Partitioned"),_.priority)switch(typeof _.priority=="string"?_.priority.toLowerCase():void 0){case"low":A+="; Priority=Low";break;case"medium":A+="; Priority=Medium";break;case"high":A+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${_.priority}`)}if(_.sameSite)switch(typeof _.sameSite=="string"?_.sameSite.toLowerCase():_.sameSite){case!0:case"strict":A+="; SameSite=Strict";break;case"lax":A+="; SameSite=Lax";break;case"none":A+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${_.sameSite}`)}return A}function b(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function w(S){return u.call(S)==="[object Date]"}return dl}_p();var p0="popstate";function Sp(r={}){function i(s,u){let{pathname:d,search:f,hash:v}=s.location;return Yu("",{pathname:d,search:f,hash:v},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function l(s,u){return typeof u=="string"?u:jl(u)}return Ep(i,l,null,r)}function Ne(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}function Ht(r,i){if(!r){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function jp(){return Math.random().toString(36).substring(2,10)}function v0(r,i){return{usr:r.state,key:r.key,idx:i}}function Yu(r,i,l=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof i=="string"?oi(i):i,state:l,key:i&&i.key||s||jp()}}function jl({pathname:r="/",search:i="",hash:l=""}){return i&&i!=="?"&&(r+=i.charAt(0)==="?"?i:"?"+i),l&&l!=="#"&&(r+=l.charAt(0)==="#"?l:"#"+l),r}function oi(r){let i={};if(r){let l=r.indexOf("#");l>=0&&(i.hash=r.substring(l),r=r.substring(0,l));let s=r.indexOf("?");s>=0&&(i.search=r.substring(s),r=r.substring(0,s)),r&&(i.pathname=r)}return i}function Ep(r,i,l,s={}){let{window:u=document.defaultView,v5Compat:d=!1}=s,f=u.history,v="POP",m=null,p=b();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function b(){return(f.state||{idx:null}).idx}function w(){v="POP";let D=b(),A=D==null?null:D-p;p=D,m&&m({action:v,location:U.location,delta:A})}function S(D,A){v="PUSH";let q=Yu(U.location,D,A);p=b()+1;let G=v0(q,p),Q=U.createHref(q);try{f.pushState(G,"",Q)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;u.location.assign(Q)}d&&m&&m({action:v,location:U.location,delta:1})}function k(D,A){v="REPLACE";let q=Yu(U.location,D,A);p=b();let G=v0(q,p),Q=U.createHref(q);f.replaceState(G,"",Q),d&&m&&m({action:v,location:U.location,delta:0})}function _(D){return kp(D)}let U={get action(){return v},get location(){return r(u,f)},listen(D){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(p0,w),m=D,()=>{u.removeEventListener(p0,w),m=null}},createHref(D){return i(u,D)},createURL:_,encodeLocation(D){let A=_(D);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:S,replace:k,go(D){return f.go(D)}};return U}function kp(r,i=!1){let l="http://localhost";typeof window<"u"&&(l=window.location.origin!=="null"?window.location.origin:window.location.href),Ne(l,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:jl(r);return s=s.replace(/ $/,"%20"),!i&&s.startsWith("//")&&(s=l+s),new URL(s,l)}function em(r,i,l="/"){return Tp(r,i,l,!1)}function Tp(r,i,l,s){let u=typeof i=="string"?oi(i):i,d=la(u.pathname||"/",l);if(d==null)return null;let f=tm(r);Ap(f);let v=null;for(let m=0;v==null&&m<f.length;++m){let p=Hp(d);v=Bp(f[m],p,s)}return v}function tm(r,i=[],l=[],s=""){let u=(d,f,v)=>{let m={relativePath:v===void 0?d.path||"":v,caseSensitive:d.caseSensitive===!0,childrenIndex:f,route:d};m.relativePath.startsWith("/")&&(Ne(m.relativePath.startsWith(s),`Absolute route path "${m.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(s.length));let p=ia([s,m.relativePath]),b=l.concat(m);d.children&&d.children.length>0&&(Ne(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),tm(d.children,i,b,p)),!(d.path==null&&!d.index)&&i.push({path:p,score:Mp(p,d.index),routesMeta:b})};return r.forEach((d,f)=>{if(d.path===""||!d.path?.includes("?"))u(d,f);else for(let v of am(d.path))u(d,f,v)}),i}function am(r){let i=r.split("/");if(i.length===0)return[];let[l,...s]=i,u=l.endsWith("?"),d=l.replace(/\?$/,"");if(s.length===0)return u?[d,""]:[d];let f=am(s.join("/")),v=[];return v.push(...f.map(m=>m===""?d:[d,m].join("/"))),u&&v.push(...f),v.map(m=>r.startsWith("/")&&m===""?"/":m)}function Ap(r){r.sort((i,l)=>i.score!==l.score?l.score-i.score:Up(i.routesMeta.map(s=>s.childrenIndex),l.routesMeta.map(s=>s.childrenIndex)))}var zp=/^:[\w-]+$/,Np=3,Op=2,Rp=1,Cp=10,Dp=-2,y0=r=>r==="*";function Mp(r,i){let l=r.split("/"),s=l.length;return l.some(y0)&&(s+=Dp),i&&(s+=Op),l.filter(u=>!y0(u)).reduce((u,d)=>u+(zp.test(d)?Np:d===""?Rp:Cp),s)}function Up(r,i){return r.length===i.length&&r.slice(0,-1).every((s,u)=>s===i[u])?r[r.length-1]-i[i.length-1]:0}function Bp(r,i,l=!1){let{routesMeta:s}=r,u={},d="/",f=[];for(let v=0;v<s.length;++v){let m=s[v],p=v===s.length-1,b=d==="/"?i:i.slice(d.length)||"/",w=as({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},b),S=m.route;if(!w&&p&&l&&!s[s.length-1].route.index&&(w=as({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},b)),!w)return null;Object.assign(u,w.params),f.push({params:u,pathname:ia([d,w.pathname]),pathnameBase:$p(ia([d,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(d=ia([d,w.pathnameBase]))}return f}function as(r,i){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[l,s]=qp(r.path,r.caseSensitive,r.end),u=i.match(l);if(!u)return null;let d=u[0],f=d.replace(/(.)\/+$/,"$1"),v=u.slice(1);return{params:s.reduce((p,{paramName:b,isOptional:w},S)=>{if(b==="*"){let _=v[S]||"";f=d.slice(0,d.length-_.length).replace(/(.)\/+$/,"$1")}const k=v[S];return w&&!k?p[b]=void 0:p[b]=(k||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:f,pattern:r}}function qp(r,i=!1,l=!0){Ht(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],u="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,v,m)=>(s.push({paramName:v,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),u+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?u+="\\/*$":r!==""&&r!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),s]}function Hp(r){try{return r.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Ht(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),r}}function la(r,i){if(i==="/")return r;if(!r.toLowerCase().startsWith(i.toLowerCase()))return null;let l=i.endsWith("/")?i.length-1:i.length,s=r.charAt(l);return s&&s!=="/"?null:r.slice(l)||"/"}function Lp(r,i="/"){let{pathname:l,search:s="",hash:u=""}=typeof r=="string"?oi(r):r;return{pathname:l?l.startsWith("/")?l:Gp(l,i):i,search:Vp(s),hash:Zp(u)}}function Gp(r,i){let l=i.replace(/\/+$/,"").split("/");return r.split("/").forEach(u=>{u===".."?l.length>1&&l.pop():u!=="."&&l.push(u)}),l.length>1?l.join("/"):"/"}function Du(r,i,l,s){return`Cannot include a '${r}' character in a manually specified \`to.${i}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Yp(r){return r.filter((i,l)=>l===0||i.route.path&&i.route.path.length>0)}function nm(r){let i=Yp(r);return i.map((l,s)=>s===i.length-1?l.pathname:l.pathnameBase)}function im(r,i,l,s=!1){let u;typeof r=="string"?u=oi(r):(u={...r},Ne(!u.pathname||!u.pathname.includes("?"),Du("?","pathname","search",u)),Ne(!u.pathname||!u.pathname.includes("#"),Du("#","pathname","hash",u)),Ne(!u.search||!u.search.includes("#"),Du("#","search","hash",u)));let d=r===""||u.pathname==="",f=d?"/":u.pathname,v;if(f==null)v=l;else{let w=i.length-1;if(!s&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),w-=1;u.pathname=S.join("/")}v=w>=0?i[w]:"/"}let m=Lp(u,v),p=f&&f!=="/"&&f.endsWith("/"),b=(d||f===".")&&l.endsWith("/");return!m.pathname.endsWith("/")&&(p||b)&&(m.pathname+="/"),m}var ia=r=>r.join("/").replace(/\/\/+/g,"/"),$p=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Vp=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zp=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Kp(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var lm=["POST","PUT","PATCH","DELETE"];new Set(lm);var Xp=["GET",...lm];new Set(Xp);var ui=O.createContext(null);ui.displayName="DataRouter";var ss=O.createContext(null);ss.displayName="DataRouterState";var rm=O.createContext({isTransitioning:!1});rm.displayName="ViewTransition";var Qp=O.createContext(new Map);Qp.displayName="Fetchers";var Pp=O.createContext(null);Pp.displayName="Await";var Lt=O.createContext(null);Lt.displayName="Navigation";var Tl=O.createContext(null);Tl.displayName="Location";var sa=O.createContext({outlet:null,matches:[],isDataRoute:!1});sa.displayName="Route";var ac=O.createContext(null);ac.displayName="RouteError";function Jp(r,{relative:i}={}){Ne(Al(),"useHref() may be used only in the context of a <Router> component.");let{basename:l,navigator:s}=O.useContext(Lt),{hash:u,pathname:d,search:f}=zl(r,{relative:i}),v=d;return l!=="/"&&(v=d==="/"?l:ia([l,d])),s.createHref({pathname:v,search:f,hash:u})}function Al(){return O.useContext(Tl)!=null}function un(){return Ne(Al(),"useLocation() may be used only in the context of a <Router> component."),O.useContext(Tl).location}var sm="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function om(r){O.useContext(Lt).static||O.useLayoutEffect(r)}function Fp(){let{isDataRoute:r}=O.useContext(sa);return r?cv():Wp()}function Wp(){Ne(Al(),"useNavigate() may be used only in the context of a <Router> component.");let r=O.useContext(ui),{basename:i,navigator:l}=O.useContext(Lt),{matches:s}=O.useContext(sa),{pathname:u}=un(),d=JSON.stringify(nm(s)),f=O.useRef(!1);return om(()=>{f.current=!0}),O.useCallback((m,p={})=>{if(Ht(f.current,sm),!f.current)return;if(typeof m=="number"){l.go(m);return}let b=im(m,JSON.parse(d),u,p.relative==="path");r==null&&i!=="/"&&(b.pathname=b.pathname==="/"?i:ia([i,b.pathname])),(p.replace?l.replace:l.push)(b,p.state,p)},[i,l,d,u,r])}O.createContext(null);function zl(r,{relative:i}={}){let{matches:l}=O.useContext(sa),{pathname:s}=un(),u=JSON.stringify(nm(l));return O.useMemo(()=>im(r,JSON.parse(u),s,i==="path"),[r,u,s,i])}function Ip(r,i){return um(r,i)}function um(r,i,l,s){Ne(Al(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=O.useContext(Lt),{matches:d}=O.useContext(sa),f=d[d.length-1],v=f?f.params:{},m=f?f.pathname:"/",p=f?f.pathnameBase:"/",b=f&&f.route;{let A=b&&b.path||"";cm(m,!b||A.endsWith("*")||A.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${A}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${A}"> to <Route path="${A==="/"?"*":`${A}/*`}">.`)}let w=un(),S;if(i){let A=typeof i=="string"?oi(i):i;Ne(p==="/"||A.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${A.pathname}" was given in the \`location\` prop.`),S=A}else S=w;let k=S.pathname||"/",_=k;if(p!=="/"){let A=p.replace(/^\//,"").split("/");_="/"+k.replace(/^\//,"").split("/").slice(A.length).join("/")}let U=em(r,{pathname:_});Ht(b||U!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Ht(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let D=iv(U&&U.map(A=>Object.assign({},A,{params:Object.assign({},v,A.params),pathname:ia([p,u.encodeLocation?u.encodeLocation(A.pathname).pathname:A.pathname]),pathnameBase:A.pathnameBase==="/"?p:ia([p,u.encodeLocation?u.encodeLocation(A.pathnameBase).pathname:A.pathnameBase])})),d,l,s);return i&&D?O.createElement(Tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},D):D}function ev(){let r=uv(),i=Kp(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),l=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:s},d={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=O.createElement(O.Fragment,null,O.createElement("p",null,"💿 Hey developer 👋"),O.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",O.createElement("code",{style:d},"ErrorBoundary")," or"," ",O.createElement("code",{style:d},"errorElement")," prop on your route.")),O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},i),l?O.createElement("pre",{style:u},l):null,f)}var tv=O.createElement(ev,null),av=class extends O.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,i){return i.location!==r.location||i.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:i.error,location:i.location,revalidation:r.revalidation||i.revalidation}}componentDidCatch(r,i){console.error("React Router caught the following error during render",r,i)}render(){return this.state.error!==void 0?O.createElement(sa.Provider,{value:this.props.routeContext},O.createElement(ac.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function nv({routeContext:r,match:i,children:l}){let s=O.useContext(ui);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),O.createElement(sa.Provider,{value:r},l)}function iv(r,i=[],l=null,s=null){if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(i.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let u=r,d=l?.errors;if(d!=null){let m=u.findIndex(p=>p.route.id&&d?.[p.route.id]!==void 0);Ne(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),u=u.slice(0,Math.min(u.length,m+1))}let f=!1,v=-1;if(l)for(let m=0;m<u.length;m++){let p=u[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(v=m),p.route.id){let{loaderData:b,errors:w}=l,S=p.route.loader&&!b.hasOwnProperty(p.route.id)&&(!w||w[p.route.id]===void 0);if(p.route.lazy||S){f=!0,v>=0?u=u.slice(0,v+1):u=[u[0]];break}}}return u.reduceRight((m,p,b)=>{let w,S=!1,k=null,_=null;l&&(w=d&&p.route.id?d[p.route.id]:void 0,k=p.route.errorElement||tv,f&&(v<0&&b===0?(cm("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,_=null):v===b&&(S=!0,_=p.route.hydrateFallbackElement||null)));let U=i.concat(u.slice(0,b+1)),D=()=>{let A;return w?A=k:S?A=_:p.route.Component?A=O.createElement(p.route.Component,null):p.route.element?A=p.route.element:A=m,O.createElement(nv,{match:p,routeContext:{outlet:m,matches:U,isDataRoute:l!=null},children:A})};return l&&(p.route.ErrorBoundary||p.route.errorElement||b===0)?O.createElement(av,{location:l.location,revalidation:l.revalidation,component:k,error:w,children:D(),routeContext:{outlet:null,matches:U,isDataRoute:!0}}):D()},null)}function nc(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lv(r){let i=O.useContext(ui);return Ne(i,nc(r)),i}function rv(r){let i=O.useContext(ss);return Ne(i,nc(r)),i}function sv(r){let i=O.useContext(sa);return Ne(i,nc(r)),i}function ic(r){let i=sv(r),l=i.matches[i.matches.length-1];return Ne(l.route.id,`${r} can only be used on routes that contain a unique "id"`),l.route.id}function ov(){return ic("useRouteId")}function uv(){let r=O.useContext(ac),i=rv("useRouteError"),l=ic("useRouteError");return r!==void 0?r:i.errors?.[l]}function cv(){let{router:r}=lv("useNavigate"),i=ic("useNavigate"),l=O.useRef(!1);return om(()=>{l.current=!0}),O.useCallback(async(u,d={})=>{Ht(l.current,sm),l.current&&(typeof u=="number"?r.navigate(u):await r.navigate(u,{fromRouteId:i,...d}))},[r,i])}var b0={};function cm(r,i,l){!i&&!b0[r]&&(b0[r]=!0,Ht(!1,l))}O.memo(dv);function dv({routes:r,future:i,state:l}){return um(r,void 0,l,i)}function gl(r){Ne(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fv({basename:r="/",children:i=null,location:l,navigationType:s="POP",navigator:u,static:d=!1}){Ne(!Al(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=r.replace(/^\/*/,"/"),v=O.useMemo(()=>({basename:f,navigator:u,static:d,future:{}}),[f,u,d]);typeof l=="string"&&(l=oi(l));let{pathname:m="/",search:p="",hash:b="",state:w=null,key:S="default"}=l,k=O.useMemo(()=>{let _=la(m,f);return _==null?null:{location:{pathname:_,search:p,hash:b,state:w,key:S},navigationType:s}},[f,m,p,b,w,S,s]);return Ht(k!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${b}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:O.createElement(Lt.Provider,{value:v},O.createElement(Tl.Provider,{children:i,value:k}))}function hv({children:r,location:i}){return Ip($u(r),i)}function $u(r,i=[]){let l=[];return O.Children.forEach(r,(s,u)=>{if(!O.isValidElement(s))return;let d=[...i,u];if(s.type===O.Fragment){l.push.apply(l,$u(s.props.children,d));return}Ne(s.type===gl,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ne(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||d.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=$u(s.props.children,d)),l.push(f)}),l}var es="get",ts="application/x-www-form-urlencoded";function os(r){return r!=null&&typeof r.tagName=="string"}function mv(r){return os(r)&&r.tagName.toLowerCase()==="button"}function gv(r){return os(r)&&r.tagName.toLowerCase()==="form"}function pv(r){return os(r)&&r.tagName.toLowerCase()==="input"}function vv(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function yv(r,i){return r.button===0&&(!i||i==="_self")&&!vv(r)}var Xr=null;function bv(){if(Xr===null)try{new FormData(document.createElement("form"),0),Xr=!1}catch{Xr=!0}return Xr}var xv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Mu(r){return r!=null&&!xv.has(r)?(Ht(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ts}"`),null):r}function wv(r,i){let l,s,u,d,f;if(gv(r)){let v=r.getAttribute("action");s=v?la(v,i):null,l=r.getAttribute("method")||es,u=Mu(r.getAttribute("enctype"))||ts,d=new FormData(r)}else if(mv(r)||pv(r)&&(r.type==="submit"||r.type==="image")){let v=r.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||v.getAttribute("action");if(s=m?la(m,i):null,l=r.getAttribute("formmethod")||v.getAttribute("method")||es,u=Mu(r.getAttribute("formenctype"))||Mu(v.getAttribute("enctype"))||ts,d=new FormData(v,r),!bv()){let{name:p,type:b,value:w}=r;if(b==="image"){let S=p?`${p}.`:"";d.append(`${S}x`,"0"),d.append(`${S}y`,"0")}else p&&d.append(p,w)}}else{if(os(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');l=es,s=null,u=ts,f=r}return d&&u==="text/plain"&&(f=d,d=void 0),{action:s,method:l.toLowerCase(),encType:u,formData:d,body:f}}function lc(r,i){if(r===!1||r===null||typeof r>"u")throw new Error(i)}async function _v(r,i){if(r.id in i)return i[r.id];try{let l=await import(r.module);return i[r.id]=l,l}catch(l){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(l),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function jv(r,i,l){let s=await Promise.all(r.map(async u=>{let d=i.routes[u.route.id];if(d){let f=await _v(d,l);return f.links?f.links():[]}return[]}));return Av(s.flat(1).filter(Sv).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function x0(r,i,l,s,u,d){let f=(m,p)=>l[p]?m.route.id!==l[p].route.id:!0,v=(m,p)=>l[p].pathname!==m.pathname||l[p].route.path?.endsWith("*")&&l[p].params["*"]!==m.params["*"];return d==="assets"?i.filter((m,p)=>f(m,p)||v(m,p)):d==="data"?i.filter((m,p)=>{let b=s.routes[m.route.id];if(!b||!b.hasLoader)return!1;if(f(m,p)||v(m,p))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:l[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Ev(r,i,{includeHydrateFallback:l}={}){return kv(r.map(s=>{let u=i.routes[s.route.id];if(!u)return[];let d=[u.module];return u.clientActionModule&&(d=d.concat(u.clientActionModule)),u.clientLoaderModule&&(d=d.concat(u.clientLoaderModule)),l&&u.hydrateFallbackModule&&(d=d.concat(u.hydrateFallbackModule)),u.imports&&(d=d.concat(u.imports)),d}).flat(1))}function kv(r){return[...new Set(r)]}function Tv(r){let i={},l=Object.keys(r).sort();for(let s of l)i[s]=r[s];return i}function Av(r,i){let l=new Set;return new Set(i),r.reduce((s,u)=>{let d=JSON.stringify(Tv(u));return l.has(d)||(l.add(d),s.push({key:d,link:u})),s},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var zv=new Set([100,101,204,205]);function Nv(r,i){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return l.pathname==="/"?l.pathname="_root.data":i&&la(l.pathname,i)==="/"?l.pathname=`${i.replace(/\/$/,"")}/_root.data`:l.pathname=`${l.pathname.replace(/\/$/,"")}.data`,l}function dm(){let r=O.useContext(ui);return lc(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Ov(){let r=O.useContext(ss);return lc(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var rc=O.createContext(void 0);rc.displayName="FrameworkContext";function fm(){let r=O.useContext(rc);return lc(r,"You must render this element inside a <HydratedRouter> element"),r}function Rv(r,i){let l=O.useContext(rc),[s,u]=O.useState(!1),[d,f]=O.useState(!1),{onFocus:v,onBlur:m,onMouseEnter:p,onMouseLeave:b,onTouchStart:w}=i,S=O.useRef(null);O.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let U=A=>{A.forEach(q=>{f(q.isIntersecting)})},D=new IntersectionObserver(U,{threshold:.5});return S.current&&D.observe(S.current),()=>{D.disconnect()}}},[r]),O.useEffect(()=>{if(s){let U=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(U)}}},[s]);let k=()=>{u(!0)},_=()=>{u(!1),f(!1)};return l?r!=="intent"?[d,S,{}]:[d,S,{onFocus:fl(v,k),onBlur:fl(m,_),onMouseEnter:fl(p,k),onMouseLeave:fl(b,_),onTouchStart:fl(w,k)}]:[!1,S,{}]}function fl(r,i){return l=>{r&&r(l),l.defaultPrevented||i(l)}}function Cv({page:r,...i}){let{router:l}=dm(),s=O.useMemo(()=>em(l.routes,r,l.basename),[l.routes,r,l.basename]);return s?O.createElement(Mv,{page:r,matches:s,...i}):null}function Dv(r){let{manifest:i,routeModules:l}=fm(),[s,u]=O.useState([]);return O.useEffect(()=>{let d=!1;return jv(r,i,l).then(f=>{d||u(f)}),()=>{d=!0}},[r,i,l]),s}function Mv({page:r,matches:i,...l}){let s=un(),{manifest:u,routeModules:d}=fm(),{basename:f}=dm(),{loaderData:v,matches:m}=Ov(),p=O.useMemo(()=>x0(r,i,m,u,s,"data"),[r,i,m,u,s]),b=O.useMemo(()=>x0(r,i,m,u,s,"assets"),[r,i,m,u,s]),w=O.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let _=new Set,U=!1;if(i.forEach(A=>{let q=u.routes[A.route.id];!q||!q.hasLoader||(!p.some(G=>G.route.id===A.route.id)&&A.route.id in v&&d[A.route.id]?.shouldRevalidate||q.hasClientLoader?U=!0:_.add(A.route.id))}),_.size===0)return[];let D=Nv(r,f);return U&&_.size>0&&D.searchParams.set("_routes",i.filter(A=>_.has(A.route.id)).map(A=>A.route.id).join(",")),[D.pathname+D.search]},[f,v,s,u,p,i,r,d]),S=O.useMemo(()=>Ev(b,u),[b,u]),k=Dv(b);return O.createElement(O.Fragment,null,w.map(_=>O.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...l})),S.map(_=>O.createElement("link",{key:_,rel:"modulepreload",href:_,...l})),k.map(({key:_,link:U})=>O.createElement("link",{key:_,...U})))}function Uv(...r){return i=>{r.forEach(l=>{typeof l=="function"?l(i):l!=null&&(l.current=i)})}}var hm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hm&&(window.__reactRouterVersion="7.6.3")}catch{}function Bv({basename:r,children:i,window:l}){let s=O.useRef();s.current==null&&(s.current=Sp({window:l,v5Compat:!0}));let u=s.current,[d,f]=O.useState({action:u.action,location:u.location}),v=O.useCallback(m=>{O.startTransition(()=>f(m))},[f]);return O.useLayoutEffect(()=>u.listen(v),[u,v]),O.createElement(fv,{basename:r,children:i,location:d.location,navigationType:d.action,navigator:u})}var mm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,on=O.forwardRef(function({onClick:i,discover:l="render",prefetch:s="none",relative:u,reloadDocument:d,replace:f,state:v,target:m,to:p,preventScrollReset:b,viewTransition:w,...S},k){let{basename:_}=O.useContext(Lt),U=typeof p=="string"&&mm.test(p),D,A=!1;if(typeof p=="string"&&U&&(D=p,hm))try{let me=new URL(window.location.href),Ke=p.startsWith("//")?new URL(me.protocol+p):new URL(p),at=la(Ke.pathname,_);Ke.origin===me.origin&&at!=null?p=at+Ke.search+Ke.hash:A=!0}catch{Ht(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let q=Jp(p,{relative:u}),[G,Q,$]=Rv(s,S),ae=Gv(p,{replace:f,state:v,target:m,preventScrollReset:b,relative:u,viewTransition:w});function V(me){i&&i(me),me.defaultPrevented||ae(me)}let fe=O.createElement("a",{...S,...$,href:D||q,onClick:A||d?i:V,ref:Uv(k,Q),target:m,"data-discover":!U&&l==="render"?"true":void 0});return G&&!U?O.createElement(O.Fragment,null,fe,O.createElement(Cv,{page:q})):fe});on.displayName="Link";var qv=O.forwardRef(function({"aria-current":i="page",caseSensitive:l=!1,className:s="",end:u=!1,style:d,to:f,viewTransition:v,children:m,...p},b){let w=zl(f,{relative:p.relative}),S=un(),k=O.useContext(ss),{navigator:_,basename:U}=O.useContext(Lt),D=k!=null&&Kv(w)&&v===!0,A=_.encodeLocation?_.encodeLocation(w).pathname:w.pathname,q=S.pathname,G=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;l||(q=q.toLowerCase(),G=G?G.toLowerCase():null,A=A.toLowerCase()),G&&U&&(G=la(G,U)||G);const Q=A!=="/"&&A.endsWith("/")?A.length-1:A.length;let $=q===A||!u&&q.startsWith(A)&&q.charAt(Q)==="/",ae=G!=null&&(G===A||!u&&G.startsWith(A)&&G.charAt(A.length)==="/"),V={isActive:$,isPending:ae,isTransitioning:D},fe=$?i:void 0,me;typeof s=="function"?me=s(V):me=[s,$?"active":null,ae?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let Ke=typeof d=="function"?d(V):d;return O.createElement(on,{...p,"aria-current":fe,className:me,ref:b,style:Ke,to:f,viewTransition:v},typeof m=="function"?m(V):m)});qv.displayName="NavLink";var Hv=O.forwardRef(({discover:r="render",fetcherKey:i,navigate:l,reloadDocument:s,replace:u,state:d,method:f=es,action:v,onSubmit:m,relative:p,preventScrollReset:b,viewTransition:w,...S},k)=>{let _=Vv(),U=Zv(v,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",A=typeof v=="string"&&mm.test(v),q=G=>{if(m&&m(G),G.defaultPrevented)return;G.preventDefault();let Q=G.nativeEvent.submitter,$=Q?.getAttribute("formmethod")||f;_(Q||G.currentTarget,{fetcherKey:i,method:$,navigate:l,replace:u,state:d,relative:p,preventScrollReset:b,viewTransition:w})};return O.createElement("form",{ref:k,method:D,action:U,onSubmit:s?m:q,...S,"data-discover":!A&&r==="render"?"true":void 0})});Hv.displayName="Form";function Lv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gm(r){let i=O.useContext(ui);return Ne(i,Lv(r)),i}function Gv(r,{target:i,replace:l,state:s,preventScrollReset:u,relative:d,viewTransition:f}={}){let v=Fp(),m=un(),p=zl(r,{relative:d});return O.useCallback(b=>{if(yv(b,i)){b.preventDefault();let w=l!==void 0?l:jl(m)===jl(p);v(r,{replace:w,state:s,preventScrollReset:u,relative:d,viewTransition:f})}},[m,v,p,l,s,i,r,u,d,f])}var Yv=0,$v=()=>`__${String(++Yv)}__`;function Vv(){let{router:r}=gm("useSubmit"),{basename:i}=O.useContext(Lt),l=ov();return O.useCallback(async(s,u={})=>{let{action:d,method:f,encType:v,formData:m,body:p}=wv(s,i);if(u.navigate===!1){let b=u.fetcherKey||$v();await r.fetch(b,l,u.action||d,{preventScrollReset:u.preventScrollReset,formData:m,body:p,formMethod:u.method||f,formEncType:u.encType||v,flushSync:u.flushSync})}else await r.navigate(u.action||d,{preventScrollReset:u.preventScrollReset,formData:m,body:p,formMethod:u.method||f,formEncType:u.encType||v,replace:u.replace,state:u.state,fromRouteId:l,flushSync:u.flushSync,viewTransition:u.viewTransition})},[r,i,l])}function Zv(r,{relative:i}={}){let{basename:l}=O.useContext(Lt),s=O.useContext(sa);Ne(s,"useFormAction must be used inside a RouteContext");let[u]=s.matches.slice(-1),d={...zl(r||".",{relative:i})},f=un();if(r==null){d.search=f.search;let v=new URLSearchParams(d.search),m=v.getAll("index");if(m.some(b=>b==="")){v.delete("index"),m.filter(w=>w).forEach(w=>v.append("index",w));let b=v.toString();d.search=b?`?${b}`:""}}return(!r||r===".")&&u.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),l!=="/"&&(d.pathname=d.pathname==="/"?l:ia([l,d.pathname])),jl(d)}function Kv(r,i={}){let l=O.useContext(rm);Ne(l!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=gm("useViewTransitionState"),u=zl(r,{relative:i.relative});if(!l.isTransitioning)return!1;let d=la(l.currentLocation.pathname,s)||l.currentLocation.pathname,f=la(l.nextLocation.pathname,s)||l.nextLocation.pathname;return as(u.pathname,f)!=null||as(u.pathname,d)!=null}[...zv];const pm=O.createContext(),Xv=({children:r})=>{const[i,l]=O.useState("tr"),[s]=O.useState({welcome:"Hoş Geldiniz",games:"Oyunlar",profile:"Profil",home:"Ana Sayfa",math:"Matematik",geography:"Coğrafya",health:"Sağlık",loading:"Yükleniyor...",play:"Oyna",start:"Başla"}),u=d=>s[d]||d;return h.jsx(pm.Provider,{value:{t:u,locale:i,setLocale:l},children:r})},vm=O.createContext(),Qv=()=>{const r=O.useContext(vm);if(!r)throw new Error("useTheme must be used within a ThemeProvider");return r},Pv=({children:r})=>{const[i,l]=O.useState(!1);O.useEffect(()=>{const d=localStorage.getItem("naz-theme");l(d?d==="dark":!1)},[]),O.useEffect(()=>{localStorage.setItem("naz-theme",i?"dark":"light"),i?(document.documentElement.classList.add("dark-mode"),document.documentElement.classList.remove("light-mode")):(document.documentElement.classList.add("light-mode"),document.documentElement.classList.remove("dark-mode"))},[i]);const u={isDarkMode:i,toggleTheme:()=>{l(d=>!d)},theme:i?"dark":"light"};return h.jsx(vm.Provider,{value:u,children:r})};var ym={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},w0=Ua.createContext&&Ua.createContext(ym),Jv=["attr","size","title"];function Fv(r,i){if(r==null)return{};var l=Wv(r,i),s,u;if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);for(u=0;u<d.length;u++)s=d[u],!(i.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(r,s)&&(l[s]=r[s])}return l}function Wv(r,i){if(r==null)return{};var l={};for(var s in r)if(Object.prototype.hasOwnProperty.call(r,s)){if(i.indexOf(s)>=0)continue;l[s]=r[s]}return l}function ns(){return ns=Object.assign?Object.assign.bind():function(r){for(var i=1;i<arguments.length;i++){var l=arguments[i];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(r[s]=l[s])}return r},ns.apply(this,arguments)}function _0(r,i){var l=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);i&&(s=s.filter(function(u){return Object.getOwnPropertyDescriptor(r,u).enumerable})),l.push.apply(l,s)}return l}function is(r){for(var i=1;i<arguments.length;i++){var l=arguments[i]!=null?arguments[i]:{};i%2?_0(Object(l),!0).forEach(function(s){Iv(r,s,l[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(l)):_0(Object(l)).forEach(function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(l,s))})}return r}function Iv(r,i,l){return i=ey(i),i in r?Object.defineProperty(r,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[i]=l,r}function ey(r){var i=ty(r,"string");return typeof i=="symbol"?i:i+""}function ty(r,i){if(typeof r!="object"||!r)return r;var l=r[Symbol.toPrimitive];if(l!==void 0){var s=l.call(r,i);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(r)}function bm(r){return r&&r.map((i,l)=>Ua.createElement(i.tag,is({key:l},i.attr),bm(i.child)))}function le(r){return i=>Ua.createElement(ay,ns({attr:is({},r.attr)},i),bm(r.child))}function ay(r){var i=l=>{var{attr:s,size:u,title:d}=r,f=Fv(r,Jv),v=u||l.size||"1em",m;return l.className&&(m=l.className),r.className&&(m=(m?m+" ":"")+r.className),Ua.createElement("svg",ns({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,s,f,{className:m,style:is(is({color:r.color||l.color},l.style),r.style),height:v,width:v,xmlns:"http://www.w3.org/2000/svg"}),d&&Ua.createElement("title",null,d),r.children)};return w0!==void 0?Ua.createElement(w0.Consumer,null,l=>i(l)):i(ym)}function xm(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z"},child:[]},{tag:"path",attr:{d:"M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z"},child:[]},{tag:"path",attr:{d:"M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z"},child:[]}]})(r)}function ny(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z"},child:[]}]})(r)}function iy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z"},child:[]}]})(r)}function ly(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z",clipRule:"evenodd"},child:[]}]})(r)}function us(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"},child:[]}]})(r)}function ry(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z"},child:[]}]})(r)}function El(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM8.547 4.505a8.25 8.25 0 1 0 11.672 8.214l-.46-.46a2.252 2.252 0 0 1-.422-.586l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 0 1-1.384-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.279-2.132Z",clipRule:"evenodd"},child:[]}]})(r)}function ra(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"},child:[]}]})(r)}function sy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"},child:[]},{tag:"path",attr:{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"},child:[]}]})(r)}function S0(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z",clipRule:"evenodd"},child:[]}]})(r)}function oy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",clipRule:"evenodd"},child:[]}]})(r)}function li(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z",clipRule:"evenodd"},child:[]}]})(r)}function uy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",clipRule:"evenodd"},child:[]}]})(r)}function cy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"},child:[]}]})(r)}function dy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z"},child:[]}]})(r)}function yl(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z",clipRule:"evenodd"},child:[]}]})(r)}function Vu(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z"},child:[]},{tag:"path",attr:{d:"M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z"},child:[]}]})(r)}function fy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"},child:[]}]})(r)}function ci(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z",clipRule:"evenodd"},child:[]}]})(r)}function hy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"},child:[]}]})(r)}function my(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z",clipRule:"evenodd"},child:[]}]})(r)}function wm(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"},child:[]}]})(r)}function cs(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z",clipRule:"evenodd"},child:[]}]})(r)}function gy(r){return le({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"},child:[]}]})(r)}const py=()=>{const{t:r}=O.useContext(pm),{isDarkMode:i,toggleTheme:l}=Qv();return h.jsxs("nav",{className:"navbar",children:[h.jsxs("div",{className:"navbar-brand",children:[h.jsx("img",{src:"/icon-set/icon-192x192.png",alt:"NAZ Logo",className:"navbar-logo"}),h.jsx("h1",{className:"app-title",children:"Eğitim Krallığı"})]}),h.jsxs("div",{className:"navbar-links",children:[h.jsxs(on,{to:"/",className:"nav-link",children:[h.jsx(sy,{className:"nav-icon"}),h.jsx("span",{children:"Ana Sayfa"})]}),h.jsxs(on,{to:"/games",className:"nav-link",children:[h.jsx(dy,{className:"nav-icon"}),h.jsx("span",{children:"Oyunlar"})]}),h.jsxs(on,{to:"/music",className:"nav-link",children:[h.jsx(li,{className:"nav-icon"}),h.jsx("span",{children:"Şarkı Dinle"})]}),h.jsxs(on,{to:"/profile",className:"nav-link",children:[h.jsx(wm,{className:"nav-icon"}),h.jsx("span",{children:"Profil"})]})]}),h.jsx("button",{className:"theme-toggle",onClick:l,children:i?h.jsx(hy,{className:"theme-icon"}):h.jsx(oy,{className:"theme-icon"})})]})};function vy(r){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M350.85 129c25.97 4.67 47.27 18.67 63.92 42 14.65 20.67 24.64 46.67 29.96 78 4.67 28.67 4.32 57.33-1 86-7.99 47.33-23.97 87-47.94 119-28.64 38.67-64.59 58-107.87 58-10.66 0-22.3-3.33-34.96-10-8.66-5.33-18.31-8-28.97-8s-20.3 2.67-28.97 8c-12.66 6.67-24.3 10-34.96 10-43.28 0-79.23-19.33-107.87-58-23.97-32-39.95-71.67-47.94-119-5.32-28.67-5.67-57.33-1-86 5.32-31.33 15.31-57.33 29.96-78 16.65-23.33 37.95-37.33 63.92-42 15.98-2.67 37.95-.33 65.92 7 23.97 6.67 44.28 14.67 60.93 24 16.65-9.33 36.96-17.33 60.93-24 27.98-7.33 49.96-9.67 65.94-7zm-54.94-41c-9.32 8.67-21.65 15-36.96 19-10.66 3.33-22.3 5-34.96 5l-14.98-1c-1.33-9.33-1.33-20 0-32 2.67-24 10.32-42.33 22.97-55 9.32-8.67 21.65-15 36.96-19 10.66-3.33 22.3-5 34.96-5l14.98 1 1 15c0 12.67-1.67 24.33-4.99 35-3.99 15.33-10.31 27.67-18.98 37z"},child:[]}]})(r)}function yy(r){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z"},child:[]}]})(r)}function pl(r){return le({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M528 448H112c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm64-320c-26.5 0-48 21.5-48 48 0 7.1 1.6 13.7 4.4 19.8L476 239.2c-15.4 9.2-35.3 4-44.2-11.6L350.3 85C361 76.2 368 63 368 48c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 15 7 28.2 17.7 37l-81.5 142.6c-8.9 15.6-28.9 20.8-44.2 11.6l-72.3-43.4c2.7-6 4.4-12.7 4.4-19.8 0-26.5-21.5-48-48-48S0 149.5 0 176s21.5 48 48 48c2.6 0 5.2-.4 7.7-.8L128 416h384l72.3-192.8c2.5.4 5.1.8 7.7.8 26.5 0 48-21.5 48-48s-21.5-48-48-48z"},child:[]}]})(r)}function bl(r){return le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(r)}function by(r){return le({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"},child:[]}]})(r)}function Zu(r){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(r)}function xy(r){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"},child:[]}]})(r)}function j0(r){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(r)}function wy(r){return le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"},child:[]}]})(r)}function _y(r){return le({attr:{viewBox:"0 0 288 512"},child:[{tag:"path",attr:{d:"M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"},child:[]}]})(r)}function Sy(r){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function _m(r){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(r)}function jy(r){return le({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(r)}function Ey(r){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"},child:[]}]})(r)}function ky(r){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M128,256A128,128,0,1,0,256,384,128,128,0,0,0,128,256Zm379-54.86L400.07,18.29a37.26,37.26,0,0,0-64.14,0L229,201.14C214.76,225.52,232.58,256,261.09,256H474.91C503.42,256,521.24,225.52,507,201.14ZM480,288H320a32,32,0,0,0-32,32V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V320A32,32,0,0,0,480,288Z"},child:[]}]})(r)}function Ty(r){return le({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M416,192a95.42,95.42,0,0,1-30.94,70.21A95.8,95.8,0,0,1,352,448H160a96,96,0,0,1,0-192h88.91A95.3,95.3,0,0,1,224,192H96A96,96,0,0,0,0,288V416a96,96,0,0,0,96,96H416a96,96,0,0,0,96-96V288A96,96,0,0,0,416,192Zm-96,64a64,64,0,1,0-64-64A64,64,0,0,0,320,256ZM208,96a48,48,0,1,0-48-48A48,48,0,0,0,208,96ZM384,64a32,32,0,1,0-32-32A32,32,0,0,0,384,64ZM160,288a64,64,0,0,0,0,128H352a64,64,0,0,0,0-128Z"},child:[]}]})(r)}function Ku(r){return le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(r)}function E0(r){return le({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(r)}const Ay=()=>h.jsxs("div",{className:"home-page",children:[h.jsxs("div",{className:"naz-header",children:[h.jsxs("div",{className:"sparkle-container",children:[h.jsx(yl,{className:"sparkle sparkle-1"}),h.jsx(yl,{className:"sparkle sparkle-2"}),h.jsx(yl,{className:"sparkle sparkle-3"})]}),h.jsx("div",{className:"naz-logo",children:h.jsxs("div",{className:"logo-container",children:[h.jsx("img",{src:"/icon-set/icon-192x192.png",alt:"NAZ Eğitim Krallığı Logo",className:"logo-image"}),h.jsxs("div",{className:"logo-text",children:[h.jsx(pl,{className:"crown-icon"}),"NAZ",h.jsx(pl,{className:"crown-icon"})]})]})}),h.jsxs("h1",{className:"naz-title",children:[h.jsx(bl,{className:"title-gem"}),"NAZ Eğitim Krallığı",h.jsx(bl,{className:"title-gem"})]}),h.jsx("p",{className:"naz-subtitle",children:"7-9 yaş prensesleri için büyülü öğrenme macerası! ✨"}),h.jsxs("div",{className:"welcome-stats",children:[h.jsxs("div",{className:"stat-bubble",children:[h.jsx(ci,{className:"stat-icon"}),h.jsx("span",{className:"stat-text",children:"12 Büyülü Oyun"})]}),h.jsxs("div",{className:"stat-bubble",children:[h.jsx(ra,{className:"stat-icon"}),h.jsx("span",{className:"stat-text",children:"Eğlenceli Öğrenme"})]}),h.jsxs("div",{className:"stat-bubble",children:[h.jsx(pl,{className:"stat-icon"}),h.jsx("span",{className:"stat-text",children:"Kişisel Gelişim"})]})]}),h.jsxs(on,{to:"/games",className:"start-adventure-btn",children:[h.jsx(_m,{className:"play-icon"}),h.jsx("span",{children:"Maceraya Başla!"}),h.jsx("div",{className:"btn-shimmer"})]})]}),h.jsxs("div",{className:"naz-features",children:[h.jsxs("div",{className:"feature-card math-feature",children:[h.jsx("div",{className:"feature-icon",children:h.jsx(yy,{size:40})}),h.jsx("div",{className:"feature-emoji",children:"👸"}),h.jsx("h3",{children:"Matematik Prensesleri"}),h.jsx("p",{children:"Sayılarla büyülü maceralar yaşa! Prenseslerle toplama, çıkarma ve geometri öğren."}),h.jsxs("div",{className:"feature-preview",children:[h.jsx("span",{className:"preview-tag",children:"Prenses Matematik"}),h.jsx("span",{className:"preview-tag",children:"Kelebek Bahçesi"}),h.jsx("span",{className:"preview-tag",children:"Şekil Prensesi"})]})]}),h.jsxs("div",{className:"feature-card geography-feature",children:[h.jsx("div",{className:"feature-icon",children:h.jsx(El,{size:40})}),h.jsx("div",{className:"feature-emoji",children:"🌸"}),h.jsx("h3",{children:"Dünya Gezginleri"}),h.jsx("p",{children:"Dünyayı keşfet ve yeni yerler öğren! Türkiye'den başla, tüm dünyayı gez."}),h.jsxs("div",{className:"feature-preview",children:[h.jsx("span",{className:"preview-tag",children:"Türkiye Macerası"}),h.jsx("span",{className:"preview-tag",children:"Dünya Gezgini"}),h.jsx("span",{className:"preview-tag",children:"Başkent Kraliçesi"})]})]}),h.jsxs("div",{className:"feature-card health-feature",children:[h.jsx("div",{className:"feature-icon",children:h.jsx(vy,{size:40})}),h.jsx("div",{className:"feature-emoji",children:"🧚‍♀️"}),h.jsx("h3",{children:"Sağlık Perileri"}),h.jsx("p",{children:"Sağlıklı yaşamı öğren ve güçlü ol! Beslenme, temizlik ve spor ile parlak ol."}),h.jsxs("div",{className:"feature-preview",children:[h.jsx("span",{className:"preview-tag",children:"Beslenme Perisi"}),h.jsx("span",{className:"preview-tag",children:"Temizlik Prensesi"}),h.jsx("span",{className:"preview-tag",children:"Dans Kraliçesi"})]})]}),h.jsxs("div",{className:"feature-card english-feature",children:[h.jsx("div",{className:"feature-icon",children:h.jsx(El,{size:40})}),h.jsx("div",{className:"feature-emoji",children:"🇬🇧"}),h.jsx("h3",{children:"İngilizce Macerası"}),h.jsx("p",{children:"Basit İngilizce kelimelerle dünyaya açıl! Renkler, sayılar ve günlük kelimeler."}),h.jsxs("div",{className:"feature-preview",children:[h.jsx("span",{className:"preview-tag",children:"Renkler ve Sayılar"}),h.jsx("span",{className:"preview-tag",children:"Basit Kelimeler"}),h.jsx("span",{className:"preview-tag",children:"Selam ve Vedalar"})]})]})]}),h.jsxs("div",{className:"motivation-section glass-pink",children:[h.jsxs("h2",{className:"motivation-title",children:[h.jsx(Zu,{className:"heart-icon"}),"Sen Çok Özelsin!"]}),h.jsx("p",{className:"motivation-text",children:"Her oyun oynayışında daha akıllı, daha güçlü ve daha özgüvenli oluyorsun! Öğrenmenin ne kadar eğlenceli olduğunu keşfet ve kendi krallığını yarat! 💖"}),h.jsxs("div",{className:"achievement-preview",children:[h.jsxs("div",{className:"achievement-badge",children:[h.jsx(pl,{className:"badge-icon"}),h.jsx("span",{children:"Öğrenme Kraliçesi"})]}),h.jsxs("div",{className:"achievement-badge",children:[h.jsx(Ku,{className:"badge-icon"}),h.jsx("span",{children:"Yıldız Koleksiyoncusu"})]}),h.jsxs("div",{className:"achievement-badge",children:[h.jsx(bl,{className:"badge-icon"}),h.jsx("span",{children:"Bilgi Hazinesi"})]})]})]}),h.jsx("style",{children:`
        .home-page {
          position: relative;
          overflow: hidden;
        }

        .sparkle-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          color: #FFD700;
          animation: sparkleFloat 3s ease-in-out infinite;
        }

        .sparkle-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
          font-size: 1.5rem;
        }

        .sparkle-2 {
          top: 60%;
          right: 15%;
          animation-delay: 1s;
          font-size: 1.2rem;
        }

        .sparkle-3 {
          top: 80%;
          left: 20%;
          animation-delay: 2s;
          font-size: 1.3rem;
        }

        .logo-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .logo-image {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          box-shadow: 0 4px 20px rgba(255, 105, 180, 0.3);
          animation: bounce 2s ease-in-out infinite;
        }

        .logo-text {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.5rem;
          font-weight: 800;
          color: #FF1493;
        }

        .crown-icon {
          color: #FFD700;
          margin: 0 0.5rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .title-gem {
          color: #FFD700;
          margin: 0 1rem;
          animation: sparkle 2s ease-in-out infinite;
        }

        .welcome-stats {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin: 2rem 0;
          flex-wrap: wrap;
        }

        .stat-bubble {
          background: var(--glass-white);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 25px;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: var(--shadow-card);
          transition: transform 0.3s ease;
        }

        .stat-bubble:hover {
          transform: translateY(-3px) scale(1.05);
        }

        .stat-icon {
          color: #8B5CF6;
          font-size: 1.2rem;
        }

        .stat-text {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        .start-adventure-btn {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: #8B5CF6;
          color: white;
          padding: 1.5rem 3rem;
          border-radius: 30px;
          text-decoration: none;
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 2rem;
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .start-adventure-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 35px rgba(255, 105, 180, 0.6);
        }

        .play-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .btn-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.3);
          transition: left 0.6s;
        }

        .start-adventure-btn:hover .btn-shimmer {
          left: 100%;
        }

        .feature-card {
          position: relative;
          min-height: 350px;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.5rem 2rem;
          transition: all 0.4s ease;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
        }

        .feature-icon {
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .math-feature .feature-icon {
          color: #06B6D4;
        }

        .geography-feature .feature-icon {
          color: #10B981;
        }

        .health-feature .feature-icon {
          color: #F59E0B;
        }

        .english-feature .feature-icon {
          color: #EC4899;
        }

        .feature-emoji {
          font-size: 3rem;
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .feature-card h3 {
          margin-bottom: 1rem;
          font-size: 1.8rem;
        }

        .feature-card p {
          text-align: center;
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .feature-preview {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          width: 100%;
        }

        .preview-tag {
          background: rgba(255, 255, 255, 0.6);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          text-align: center;
          color: var(--text-primary);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(5px);
        }

        .motivation-section {
          margin-top: 4rem;
          padding: 3rem 2rem;
          border-radius: 25px;
          text-align: center;
        }

        .motivation-title {
          font-size: 2rem;
          font-weight: 800;
          color: #FF1493;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .heart-icon {
          color: #EC4899;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        .motivation-text {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .achievement-preview {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .achievement-badge {
          background: var(--glass-white);
          padding: 1rem 1.5rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .achievement-badge:hover {
          transform: scale(1.05);
        }

        .badge-icon {
          color: #FFD700;
          font-size: 1.2rem;
        }

        .achievement-badge span {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
        }

        @keyframes sparkleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @media (max-width: 768px) {
          .welcome-stats {
            flex-direction: column;
            align-items: center;
          }

          .stat-bubble {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }

          .start-adventure-btn {
            padding: 1.2rem 2rem;
            font-size: 1.1rem;
          }

          .achievement-preview {
            flex-direction: column;
            align-items: center;
          }

          .achievement-badge {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }
      `})]}),zy=({gameId:r,onComplete:i})=>{const[l,s]=O.useState(0),[u,d]=O.useState(0),[f,v]=O.useState(null),[m,p]=O.useState(!1),[b,w]=O.useState(3),k={10:{title:"Colors & Numbers 🌈",levels:[{question:"What color is this? 🔴",options:["Red","Blue","Green","Yellow"],correct:0,audio:"red"},{question:"What color is this? 🔵",options:["Red","Blue","Green","Yellow"],correct:1,audio:"blue"},{question:"How many apples? 🍎🍎🍎",options:["One","Two","Three","Four"],correct:2,audio:"three"},{question:"What color is this? 🟡",options:["Red","Blue","Green","Yellow"],correct:3,audio:"yellow"},{question:"How many cats? 🐱🐱",options:["One","Two","Three","Four"],correct:1,audio:"two"}]},11:{title:"Simple Words 🐱",levels:[{question:"What is this? 🐱",options:["Dog","Cat","Bird","Fish"],correct:1,audio:"cat"},{question:"What is this? 🐕",options:["Dog","Cat","Bird","Fish"],correct:0,audio:"dog"},{question:"What is this? ⚽",options:["Book","Ball","Car","House"],correct:1,audio:"ball"},{question:"What is this? 🏠",options:["Book","Ball","Car","House"],correct:3,audio:"house"},{question:"What is this? 🚗",options:["Book","Ball","Car","House"],correct:2,audio:"car"}]}}[r],_=k?.levels[l],U=A=>{if("speechSynthesis"in window){const q=new SpeechSynthesisUtterance(A);q.lang="en-US",q.rate=.8,speechSynthesis.speak(q)}},D=A=>{v(A),p(!0),A===_.correct?(d(u+1),setTimeout(()=>{l<k.levels.length-1?(s(l+1),v(null),p(!1)):i(u+1,k.levels.length)},1500)):(w(b-1),setTimeout(()=>{b>1?(v(null),p(!1)):i(u,k.levels.length)},1500))};return k?h.jsxs("div",{className:"english-game",children:[h.jsxs("div",{className:"game-header",children:[h.jsx("h2",{className:"game-title",children:k.title}),h.jsxs("div",{className:"game-stats",children:[h.jsx("div",{className:"hearts",children:Array.from({length:3},(A,q)=>h.jsx(ra,{className:`heart ${q<b?"active":"inactive"}`},q))}),h.jsxs("div",{className:"score",children:[h.jsx(ci,{className:"star-icon"}),h.jsxs("span",{children:[u,"/",k.levels.length]})]})]})]}),h.jsxs("div",{className:"question-container",children:[h.jsx("div",{className:"progress-bar",children:h.jsx("div",{className:"progress-fill",style:{width:`${(l+1)/k.levels.length*100}%`}})}),h.jsxs("div",{className:"question-card",children:[h.jsx("h3",{className:"question",children:_.question}),h.jsxs("button",{className:"audio-btn",onClick:()=>U(_.options[_.correct]),children:[h.jsx(Vu,{className:"speaker-icon"}),h.jsx("span",{children:"Listen"})]}),h.jsx("div",{className:"answers-grid",children:_.options.map((A,q)=>h.jsxs("button",{className:`answer-btn ${f===q?q===_.correct?"correct":"wrong":""} ${m&&q===_.correct?"highlight":""}`,onClick:()=>!m&&D(q),disabled:m,children:[A,m&&q===_.correct&&h.jsx(us,{className:"result-icon correct-icon"}),m&&f===q&&q!==_.correct&&h.jsx(cs,{className:"result-icon wrong-icon"})]},q))})]})]}),h.jsx("style",{children:`
        .english-game {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .game-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hearts {
          display: flex;
          gap: 0.3rem;
        }

        .heart {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .heart.active {
          color: #EC4899;
        }

        .heart.inactive {
          color: #D1D5DB;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-light);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .star-icon {
          color: #F59E0B;
          font-size: 1.2rem;
        }

        .score span {
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-container {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid var(--glass-border);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #E5E7EB;
          border-radius: 4px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #EC4899;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .question-card {
          text-align: center;
        }

        .question {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .audio-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #06B6D4;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0 auto 2rem;
        }

        .audio-btn:hover {
          background: #0891B2;
          transform: scale(1.05);
        }

        .speaker-icon {
          font-size: 1.2rem;
        }

        .answers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .answer-btn {
          background: var(--glass-white);
          border: 2px solid var(--glass-border);
          border-radius: 15px;
          padding: 1.5rem 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .answer-btn:hover:not(:disabled) {
          background: var(--glass-purple);
          transform: translateY(-2px);
          border-color: var(--naz-primary);
        }

        .answer-btn.correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10B981;
          color: #059669;
        }

        .answer-btn.wrong {
          background: rgba(239, 68, 68, 0.2);
          border-color: #EF4444;
          color: #DC2626;
        }

        .answer-btn.highlight {
          background: rgba(16, 185, 129, 0.3);
          border-color: #10B981;
          animation: pulse 1s ease-in-out;
        }

        .result-icon {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
        }

        .correct-icon {
          color: #10B981;
        }

        .wrong-icon {
          color: #EF4444;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 480px) {
          .english-game {
            padding: 1rem;
          }

          .game-header {
            flex-direction: column;
            text-align: center;
          }

          .answers-grid {
            grid-template-columns: 1fr;
          }

          .question {
            font-size: 1.2rem;
          }
        }
      `})]}):h.jsx("div",{children:"Game not found"})},Ny=({gameId:r,onComplete:i})=>{const[l,s]=O.useState(0),[u,d]=O.useState(0),[f,v]=O.useState(null),[m,p]=O.useState(!1),[b,w]=O.useState(3),k={1:{title:"Prenses Matematik 👸",levels:[{question:"Prenses Anna'nın 3 gülü var. 2 gül daha aldı. Toplam kaç gülü oldu?",options:["4","5","6","7"],correct:1,visual:"🌹🌹🌹 + 🌹🌹 = ?"},{question:"Sarayda 4 kelebek vardı. 3 kelebek daha geldi. Toplam kaç kelebek?",options:["6","7","8","9"],correct:1,visual:"🦋🦋🦋🦋 + 🦋🦋🦋 = ?"},{question:"Prenses'in 5 taşı var. 4 taş daha buldu. Toplam kaç taş?",options:["8","9","10","11"],correct:1,visual:"💎💎💎💎💎 + 💎💎💎💎 = ?"},{question:"Bahçede 2 çiçek vardı. 6 çiçek daha açtı. Toplam kaç çiçek?",options:["7","8","9","10"],correct:1,visual:"🌸🌸 + 🌸🌸🌸🌸🌸🌸 = ?"},{question:"Prenses'in 7 süsü var. 3 süs daha aldı. Toplam kaç süs?",options:["9","10","11","12"],correct:1,visual:"👑👑👑👑👑👑👑 + 👑👑👑 = ?"}]},2:{title:"Kelebek Bahçesi 🦋",levels:[{question:"Bahçede 7 kelebek vardı. 3 kelebek uçtu. Kaç kelebek kaldı?",options:["3","4","5","6"],correct:1,visual:"🦋🦋🦋🦋🦋🦋🦋 - 🦋🦋🦋 = ?"},{question:"Çiçekte 9 arı vardı. 4 arı gitti. Kaç arı kaldı?",options:["4","5","6","7"],correct:1,visual:"🐝🐝🐝🐝🐝🐝🐝🐝🐝 - 🐝🐝🐝🐝 = ?"},{question:"Ağaçta 8 kuş vardı. 5 kuş uçtu. Kaç kuş kaldı?",options:["2","3","4","5"],correct:1,visual:"🐦🐦🐦🐦🐦🐦🐦🐦 - 🐦🐦🐦🐦🐦 = ?"},{question:"Gölette 6 balık vardı. 2 balık yüzüp gitti. Kaç balık kaldı?",options:["3","4","5","6"],correct:1,visual:"🐠🐠🐠🐠🐠🐠 - 🐠🐠 = ?"},{question:"Sepette 10 meyve vardı. 3 meyve yendi. Kaç meyve kaldı?",options:["6","7","8","9"],correct:1,visual:"🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎 - 🍎🍎🍎 = ?"}]},3:{title:"Şekil Prensesi 💎",levels:[{question:"Bu hangi şekil?",options:["Kare","Üçgen","Daire","Dikdörtgen"],correct:0,visual:"⬜"},{question:"Bu hangi şekil?",options:["Kare","Üçgen","Daire","Dikdörtgen"],correct:2,visual:"🔵"},{question:"Bu hangi şekil?",options:["Kare","Üçgen","Daire","Dikdörtgen"],correct:1,visual:"🔺"},{question:"Karenin kaç köşesi vardır?",options:["2","3","4","5"],correct:2,visual:"⬜"},{question:"Üçgenin kaç kenarı vardır?",options:["2","3","4","5"],correct:1,visual:"🔺"}]}}[r],_=k?.levels[l],U=D=>{v(D),p(!0),D===_.correct?(d(u+1),setTimeout(()=>{l<k.levels.length-1?(s(l+1),v(null),p(!1)):i(u+1,k.levels.length)},1500)):(w(b-1),setTimeout(()=>{b>1?(v(null),p(!1)):i(u,k.levels.length)},1500))};return k?h.jsxs("div",{className:"math-game",children:[h.jsxs("div",{className:"game-header",children:[h.jsx("h2",{className:"game-title",children:k.title}),h.jsxs("div",{className:"game-stats",children:[h.jsx("div",{className:"hearts",children:Array.from({length:3},(D,A)=>h.jsx(ra,{className:`heart ${A<b?"active":"inactive"}`},A))}),h.jsxs("div",{className:"score",children:[h.jsx(ci,{className:"star-icon"}),h.jsxs("span",{children:[u,"/",k.levels.length]})]})]})]}),h.jsxs("div",{className:"question-container",children:[h.jsx("div",{className:"progress-bar",children:h.jsx("div",{className:"progress-fill",style:{width:`${(l+1)/k.levels.length*100}%`}})}),h.jsxs("div",{className:"question-card",children:[h.jsx("div",{className:"visual-area",children:h.jsx("div",{className:"visual-display",children:_.visual})}),h.jsx("h3",{className:"question",children:_.question}),h.jsx("div",{className:"answers-grid",children:_.options.map((D,A)=>h.jsxs("button",{className:`answer-btn ${f===A?A===_.correct?"correct":"wrong":""} ${m&&A===_.correct?"highlight":""}`,onClick:()=>!m&&U(A),disabled:m,children:[D,m&&A===_.correct&&h.jsx(us,{className:"result-icon correct-icon"}),m&&f===A&&A!==_.correct&&h.jsx(cs,{className:"result-icon wrong-icon"})]},A))})]})]}),h.jsx("style",{children:`
        .math-game {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .game-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hearts {
          display: flex;
          gap: 0.3rem;
        }

        .heart {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .heart.active {
          color: #EC4899;
        }

        .heart.inactive {
          color: #D1D5DB;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-light);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .star-icon {
          color: #F59E0B;
          font-size: 1.2rem;
        }

        .score span {
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-container {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid var(--glass-border);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #E5E7EB;
          border-radius: 4px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #8B5CF6;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .question-card {
          text-align: center;
        }

        .visual-area {
          margin-bottom: 2rem;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 15px;
          border: 1px solid var(--glass-border);
        }

        .visual-display {
          font-size: 2.5rem;
          line-height: 1.5;
          color: var(--text-primary);
        }

        .question {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .answers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .answer-btn {
          background: var(--glass-white);
          border: 2px solid var(--glass-border);
          border-radius: 15px;
          padding: 1.5rem 1rem;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .answer-btn:hover:not(:disabled) {
          background: var(--glass-purple);
          transform: translateY(-2px);
          border-color: var(--naz-primary);
        }

        .answer-btn.correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10B981;
          color: #059669;
        }

        .answer-btn.wrong {
          background: rgba(239, 68, 68, 0.2);
          border-color: #EF4444;
          color: #DC2626;
        }

        .answer-btn.highlight {
          background: rgba(16, 185, 129, 0.3);
          border-color: #10B981;
          animation: pulse 1s ease-in-out;
        }

        .result-icon {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
        }

        .correct-icon {
          color: #10B981;
        }

        .wrong-icon {
          color: #EF4444;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (max-width: 480px) {
          .math-game {
            padding: 1rem;
          }

          .game-header {
            flex-direction: column;
            text-align: center;
          }

          .answers-grid {
            grid-template-columns: 1fr;
          }

          .question {
            font-size: 1.1rem;
          }

          .visual-display {
            font-size: 2rem;
          }
        }
      `})]}):h.jsx("div",{children:"Game not found"})},Oy=({gameId:r,onComplete:i})=>{const[l,s]=O.useState(0),[u,d]=O.useState(0),[f,v]=O.useState(null),[m,p]=O.useState(!1),[b,w]=O.useState(3),k={4:{title:"Türkiye Macerası 🏰",levels:[{question:"Türkiye'nin başkenti hangi şehirdir?",options:["İstanbul","Ankara","İzmir","Antalya"],correct:1,visual:"🇹🇷",info:"Ankara 1923'te Türkiye'nin başkenti olmuştur!"},{question:"Hangi şehir Boğaz'a sahiptir?",options:["Ankara","İzmir","İstanbul","Bursa"],correct:2,visual:"🌉",info:"İstanbul, Avrupa ve Asya'yı birleştiren köprüleriyle ünlüdür!"},{question:"Hangi şehir Ege Denizi kıyısındadır?",options:["İzmir","Kayseri","Sivas","Erzurum"],correct:0,visual:"🏖️",info:"İzmir, Ege Denizi'nin en güzel şehirlerinden biridir!"},{question:"Pamukkale hangi şehirdedir?",options:["Antalya","Muğla","Denizli","Aydın"],correct:2,visual:"♨️",info:"Denizli'nin Pamukkale'si beyaz travertenleriyle ünlüdür!"},{question:"Kapadokya hangi şehirde bulunur?",options:["Nevşehir","Kırşehir","Niğde","Hepsi"],correct:3,visual:"🎈",info:"Kapadokya birden fazla şehirde yer alan büyülü bir bölgedir!"}]},5:{title:"Dünya Gezgini 🌸",levels:[{question:"En büyük kıta hangisidir?",options:["Afrika","Asya","Avrupa","Amerika"],correct:1,visual:"🌏",info:"Asya, dünyanın en büyük kıtasıdır!"},{question:"Hangi hayvan Afrika'da yaşar?",options:["Penguen","Aslan","Kutup Ayısı","Panda"],correct:1,visual:"🦁",info:"Aslanlar Afrika savanalarının kralıdır!"},{question:"Eiffel Kulesi hangi şehirdedir?",options:["Londra","Berlin","Paris","Roma"],correct:2,visual:"🗼",info:"Paris'teki Eiffel Kulesi Fransa'nın simgesidir!"},{question:"Penguen hangi kıtada yaşar?",options:["Afrika","Asya","Antarktika","Avrupa"],correct:2,visual:"🐧",info:"Penguenler soğuk Antarktika'da yaşar!"},{question:"En büyük okyanus hangisidir?",options:["Atlantik","Pasifik","Hint","Arktik"],correct:1,visual:"🌊",info:"Pasifik Okyanusu dünyanın en büyük okyanusudur!"}]},6:{title:"Başkent Kraliçesi 👑",levels:[{question:"Fransa'nın başkenti nedir?",options:["Lyon","Paris","Nice","Marsilya"],correct:1,visual:"🇫🇷",info:"Paris, aşk şehri olarak da bilinir!"},{question:"İtalya'nın başkenti nedir?",options:["Milano","Venedik","Roma","Napoli"],correct:2,visual:"🇮🇹",info:"Roma, antik tarihiyle ünlü ebedi şehirdir!"},{question:"Japonya'nın başkenti nedir?",options:["Osaka","Tokyo","Kyoto","Hiroshima"],correct:1,visual:"🇯🇵",info:"Tokyo, dünyanın en kalabalık şehirlerinden biridir!"},{question:"İngiltere'nin başkenti nedir?",options:["Manchester","Liverpool","Londra","Birmingham"],correct:2,visual:"🇬🇧",info:"Londra, Big Ben'iyle ünlü tarihi bir şehirdir!"},{question:"Almanya'nın başkenti nedir?",options:["Hamburg","Münih","Berlin","Köln"],correct:2,visual:"🇩🇪",info:"Berlin, Almanya'nın modern başkentidir!"}]}}[r],_=k?.levels[l],U=D=>{v(D),p(!0),D===_.correct?(d(u+1),setTimeout(()=>{l<k.levels.length-1?(s(l+1),v(null),p(!1)):i(u+1,k.levels.length)},2e3)):(w(b-1),setTimeout(()=>{b>1?(v(null),p(!1)):i(u,k.levels.length)},2e3))};return k?h.jsxs("div",{className:"geography-game",children:[h.jsxs("div",{className:"game-header",children:[h.jsx("h2",{className:"game-title",children:k.title}),h.jsxs("div",{className:"game-stats",children:[h.jsx("div",{className:"hearts",children:Array.from({length:3},(D,A)=>h.jsx(ra,{className:`heart ${A<b?"active":"inactive"}`},A))}),h.jsxs("div",{className:"score",children:[h.jsx(ci,{className:"star-icon"}),h.jsxs("span",{children:[u,"/",k.levels.length]})]})]})]}),h.jsxs("div",{className:"question-container",children:[h.jsx("div",{className:"progress-bar",children:h.jsx("div",{className:"progress-fill",style:{width:`${(l+1)/k.levels.length*100}%`}})}),h.jsxs("div",{className:"question-card",children:[h.jsxs("div",{className:"visual-area",children:[h.jsx("div",{className:"visual-display",children:_.visual}),h.jsx(El,{className:"globe-icon"})]}),h.jsx("h3",{className:"question",children:_.question}),h.jsx("div",{className:"answers-grid",children:_.options.map((D,A)=>h.jsxs("button",{className:`answer-btn ${f===A?A===_.correct?"correct":"wrong":""} ${m&&A===_.correct?"highlight":""}`,onClick:()=>!m&&U(A),disabled:m,children:[D,m&&A===_.correct&&h.jsx(us,{className:"result-icon correct-icon"}),m&&f===A&&A!==_.correct&&h.jsx(cs,{className:"result-icon wrong-icon"})]},A))}),m&&f===_.correct&&h.jsx("div",{className:"info-panel",children:h.jsxs("div",{className:"info-content",children:[h.jsx("span",{className:"info-emoji",children:"💡"}),h.jsx("p",{children:_.info})]})})]})]}),h.jsx("style",{children:`
        .geography-game {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .game-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hearts {
          display: flex;
          gap: 0.3rem;
        }

        .heart {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .heart.active {
          color: #EC4899;
        }

        .heart.inactive {
          color: #D1D5DB;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-light);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .star-icon {
          color: #F59E0B;
          font-size: 1.2rem;
        }

        .score span {
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-container {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid var(--glass-border);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #E5E7EB;
          border-radius: 4px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #10B981;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .question-card {
          text-align: center;
        }

        .visual-area {
          margin-bottom: 2rem;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 15px;
          border: 1px solid var(--glass-border);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .visual-display {
          font-size: 3rem;
          line-height: 1;
        }

        .globe-icon {
          font-size: 2rem;
          color: #10B981;
          animation: rotate 10s linear infinite;
        }

        .question {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .answers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .answer-btn {
          background: var(--glass-white);
          border: 2px solid var(--glass-border);
          border-radius: 15px;
          padding: 1.5rem 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .answer-btn:hover:not(:disabled) {
          background: var(--glass-blue);
          transform: translateY(-2px);
          border-color: #10B981;
        }

        .answer-btn.correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10B981;
          color: #059669;
        }

        .answer-btn.wrong {
          background: rgba(239, 68, 68, 0.2);
          border-color: #EF4444;
          color: #DC2626;
        }

        .answer-btn.highlight {
          background: rgba(16, 185, 129, 0.3);
          border-color: #10B981;
          animation: pulse 1s ease-in-out;
        }

        .result-icon {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
        }

        .correct-icon {
          color: #10B981;
        }

        .wrong-icon {
          color: #EF4444;
        }

        .info-panel {
          margin-top: 2rem;
          padding: 1.5rem;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 15px;
          border: 1px solid #10B981;
          animation: slideIn 0.5s ease-out;
        }

        .info-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-align: left;
        }

        .info-emoji {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .info-content p {
          margin: 0;
          font-size: 1rem;
          color: #059669;
          font-weight: 600;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .geography-game {
            padding: 1rem;
          }

          .game-header {
            flex-direction: column;
            text-align: center;
          }

          .answers-grid {
            grid-template-columns: 1fr;
          }

          .question {
            font-size: 1.1rem;
          }

          .visual-display {
            font-size: 2.5rem;
          }

          .globe-icon {
            font-size: 1.5rem;
          }

          .info-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]}):h.jsx("div",{children:"Game not found"})},Ry=({gameId:r,onComplete:i})=>{const[l,s]=O.useState(0),[u,d]=O.useState(0),[f,v]=O.useState(null),[m,p]=O.useState(!1),[b,w]=O.useState(3),k={7:{title:"Beslenme Perisi 🧚‍♀️",levels:[{question:"Hangi besin grubu güçlü kemikler için önemlidir?",options:["Şeker","Süt Ürünleri","Cips","Gazoz"],correct:1,visual:"🥛",tip:"Süt, peynir ve yoğurt kalsiyum açısından zengindir!"},{question:"Hangi besin vitamin deposudur?",options:["Çikolata","Meyve","Şeker","Fast Food"],correct:1,visual:"🍎",tip:"Meyveler vitamin ve mineral bakımından çok zengindir!"},{question:"Gün içinde kaç bardak su içmeliyiz?",options:["1-2 bardak","3-4 bardak","6-8 bardak","10+ bardak"],correct:2,visual:"💧",tip:"Su vücudumuzun en önemli ihtiyacıdır!"},{question:"Kahvaltı neden önemlidir?",options:["Zayıflatır","Enerji verir","Acıktırır","Uyku getirir"],correct:1,visual:"🍳",tip:"Kahvaltı güne enerjik başlamamızı sağlar!"},{question:"Hangi besin grubunu daha az tüketmeliyiz?",options:["Sebze","Meyve","Şekerli gıdalar","Süt"],correct:2,visual:"🍭",tip:"Şekerli gıdalar sınırlı miktarda tüketilmelidir!"}]},8:{title:"Temizlik Prensesi ✨",levels:[{question:"El yıkama hangi durumlarda yapılmalıdır?",options:["Sadece kirlenince","Yemek öncesi/sonrası","Hiç","Ayda bir"],correct:1,visual:"🧼",tip:"Eller günde birçok kez yıkanmalıdır!"},{question:"Dişler günde kaç kez fırçalanmalıdır?",options:["1 kez","2 kez","3 kez","Hiç"],correct:1,visual:"🦷",tip:"Sabah ve akşam diş fırçalamak önemlidir!"},{question:"Hangi durum hastalık bulaştırabilir?",options:["El sıkışmak","Kirli elinle yemek","Gülümsemek","Oyun oynamak"],correct:1,visual:"🦠",tip:"Kirli eller mikroplara ev sahipliği yapar!"},{question:"Banyo ne sıklıkla yapılmalıdır?",options:["Ayda bir","Haftada bir","Her gün","Yılda bir"],correct:2,visual:"🛁",tip:"Düzenli banyo yapmak sağlık için çok önemlidir!"},{question:"Hangi davranış sağlıklıdır?",options:["Burnunu kazmak","Mendil kullanmak","Yere tükürmek","Kirli giysi giymek"],correct:1,visual:"🤧",tip:"Mendil kullanmak hem kendi hem de başkalarının sağlığını korur!"}]},9:{title:"Dans Kraliçesi 💃",levels:[{question:"Spor neden önemlidir?",options:["Yorar","Güçlendirir","Hastalandırır","Zaman kaybıdır"],correct:1,visual:"💪",tip:"Spor kasları güçlendirir ve kalbi sağlıklı tutar!"},{question:"Hangi aktivite en eğlencelidir?",options:["TV izlemek","Oyun oynamak","Dans etmek","Uyumak"],correct:2,visual:"💃",tip:"Dans hem eğlenceli hem de harika bir egzersizdir!"},{question:"Günde kaç saat uyumalıyız?",options:["4-5 saat","6-7 saat","9-10 saat","12+ saat"],correct:2,visual:"😴",tip:"Yeterli uyku büyüme ve gelişim için çok önemlidir!"},{question:"Hangi aktivite kardio egzersizi sayılır?",options:["Kitap okumak","Koşmak","TV izlemek","Yemek yemek"],correct:1,visual:"🏃‍♀️",tip:"Koşmak kalp sağlığı için mükemmel bir egzersizdir!"},{question:"Egzersiz sonrası ne yapmalıyız?",options:["Hemen yatmak","Su içmek","Fast food yemek","Hiçbir şey"],correct:1,visual:"💦",tip:"Egzersiz sonrası su içmek çok önemlidir!"}]}}[r],_=k?.levels[l],U=D=>{v(D),p(!0),D===_.correct?(d(u+1),setTimeout(()=>{l<k.levels.length-1?(s(l+1),v(null),p(!1)):i(u+1,k.levels.length)},2500)):(w(b-1),setTimeout(()=>{b>1?(v(null),p(!1)):i(u,k.levels.length)},2500))};return k?h.jsxs("div",{className:"health-game",children:[h.jsxs("div",{className:"game-header",children:[h.jsx("h2",{className:"game-title",children:k.title}),h.jsxs("div",{className:"game-stats",children:[h.jsx("div",{className:"hearts",children:Array.from({length:3},(D,A)=>h.jsx(ra,{className:`heart ${A<b?"active":"inactive"}`},A))}),h.jsxs("div",{className:"score",children:[h.jsx(ci,{className:"star-icon"}),h.jsxs("span",{children:[u,"/",k.levels.length]})]})]})]}),h.jsxs("div",{className:"question-container",children:[h.jsx("div",{className:"progress-bar",children:h.jsx("div",{className:"progress-fill",style:{width:`${(l+1)/k.levels.length*100}%`}})}),h.jsxs("div",{className:"question-card",children:[h.jsxs("div",{className:"visual-area",children:[h.jsx("div",{className:"visual-display",children:_.visual}),h.jsx(yl,{className:"sparkle-icon"})]}),h.jsx("h3",{className:"question",children:_.question}),h.jsx("div",{className:"answers-grid",children:_.options.map((D,A)=>h.jsxs("button",{className:`answer-btn ${f===A?A===_.correct?"correct":"wrong":""} ${m&&A===_.correct?"highlight":""}`,onClick:()=>!m&&U(A),disabled:m,children:[D,m&&A===_.correct&&h.jsx(us,{className:"result-icon correct-icon"}),m&&f===A&&A!==_.correct&&h.jsx(cs,{className:"result-icon wrong-icon"})]},A))}),m&&f===_.correct&&h.jsx("div",{className:"tip-panel",children:h.jsxs("div",{className:"tip-content",children:[h.jsx("span",{className:"tip-emoji",children:"🌟"}),h.jsxs("div",{className:"tip-text",children:[h.jsx("h4",{children:"Harika! Sağlık İpucu:"}),h.jsx("p",{children:_.tip})]})]})})]})]}),h.jsx("style",{children:`
        .health-game {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 20px;
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
        }

        .game-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .game-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .game-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hearts {
          display: flex;
          gap: 0.3rem;
        }

        .heart {
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .heart.active {
          color: #EC4899;
        }

        .heart.inactive {
          color: #D1D5DB;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-light);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .star-icon {
          color: #F59E0B;
          font-size: 1.2rem;
        }

        .score span {
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-container {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 2rem;
          border: 1px solid var(--glass-border);
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #E5E7EB;
          border-radius: 4px;
          margin-bottom: 2rem;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: #F59E0B;
          border-radius: 4px;
          transition: width 0.5s ease;
        }

        .question-card {
          text-align: center;
        }

        .visual-area {
          margin-bottom: 2rem;
          padding: 2rem;
          background: var(--glass-white);
          border-radius: 15px;
          border: 1px solid var(--glass-border);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .visual-display {
          font-size: 3rem;
          line-height: 1;
        }

        .sparkle-icon {
          font-size: 2rem;
          color: #F59E0B;
          animation: sparkle 2s ease-in-out infinite;
        }

        .question {
          font-size: 1.3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 1.5;
        }

        .answers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .answer-btn {
          background: var(--glass-white);
          border: 2px solid var(--glass-border);
          border-radius: 15px;
          padding: 1.5rem 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          min-height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .answer-btn:hover:not(:disabled) {
          background: rgba(245, 158, 11, 0.1);
          transform: translateY(-2px);
          border-color: #F59E0B;
        }

        .answer-btn.correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10B981;
          color: #059669;
        }

        .answer-btn.wrong {
          background: rgba(239, 68, 68, 0.2);
          border-color: #EF4444;
          color: #DC2626;
        }

        .answer-btn.highlight {
          background: rgba(16, 185, 129, 0.3);
          border-color: #10B981;
          animation: pulse 1s ease-in-out;
        }

        .result-icon {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          font-size: 1.5rem;
        }

        .correct-icon {
          color: #10B981;
        }

        .wrong-icon {
          color: #EF4444;
        }

        .tip-panel {
          margin-top: 2rem;
          padding: 2rem;
          background: rgba(245, 158, 11, 0.1);
          border-radius: 15px;
          border: 1px solid #F59E0B;
          animation: slideIn 0.5s ease-out;
        }

        .tip-content {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
        }

        .tip-emoji {
          font-size: 2.5rem;
          flex-shrink: 0;
          animation: bounce 1s ease-in-out infinite;
        }

        .tip-text h4 {
          margin: 0 0 0.5rem 0;
          font-size: 1.1rem;
          color: #D97706;
          font-weight: 700;
        }

        .tip-text p {
          margin: 0;
          font-size: 1rem;
          color: #92400E;
          font-weight: 500;
          line-height: 1.4;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
          60% { transform: translateY(-2px); }
        }

        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .health-game {
            padding: 1rem;
          }

          .game-header {
            flex-direction: column;
            text-align: center;
          }

          .answers-grid {
            grid-template-columns: 1fr;
          }

          .question {
            font-size: 1.1rem;
          }

          .visual-display {
            font-size: 2.5rem;
          }

          .sparkle-icon {
            font-size: 1.5rem;
          }

          .tip-content {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }

          .tip-text {
            text-align: center;
          }
        }
      `})]}):h.jsx("div",{children:"Game not found"})},Cy=({game:r,isOpen:i,onClose:l})=>{const[s,u]=O.useState(!1),[d,f]=O.useState(null);if(!i||!r)return null;const v=(p,b)=>{f({score:p,totalQuestions:b}),u(!0),setTimeout(()=>{l(),u(!1),f(null)},3e3)},m=()=>{l(),u(!1),f(null)};return h.jsx("div",{className:"game-modal-overlay",onClick:m,children:h.jsxs("div",{className:"game-modal",onClick:p=>p.stopPropagation(),children:[h.jsx("button",{className:"modal-close-btn",onClick:m,children:h.jsx(gy,{})}),s?h.jsx("div",{className:"game-complete-screen",children:h.jsxs("div",{className:"completion-celebration",children:[h.jsx("div",{className:"celebration-emoji",children:"🎉"}),h.jsx("h2",{children:"Tebrikler!"}),h.jsx("p",{children:"Oyunu tamamladın!"}),h.jsxs("div",{className:"final-score",children:[h.jsxs("span",{className:"score-text",children:[d.score,"/",d.totalQuestions," Doğru"]}),h.jsx("div",{className:"stars",children:Array.from({length:3},(p,b)=>h.jsx("span",{className:`star ${b<Math.ceil(d.score/d.totalQuestions*3)?"filled":"empty"}`,children:"⭐"},b))})]})]})}):h.jsxs("div",{className:"game-content",children:[r.theme==="english"&&h.jsx(zy,{gameId:r.id,onComplete:v}),r.theme==="math"&&h.jsx(Ny,{gameId:r.id,onComplete:v}),r.theme==="geography"&&h.jsx(Oy,{gameId:r.id,onComplete:v}),r.theme==="health"&&h.jsx(Ry,{gameId:r.id,onComplete:v})]}),h.jsx("style",{children:`
          .game-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
          }

          .game-modal {
            background: var(--glass-white);
            backdrop-filter: blur(20px);
            border: 1px solid var(--glass-border);
            border-radius: 25px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          }

          .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--glass-light);
            border: 1px solid var(--glass-border);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-secondary);
            font-size: 1.2rem;
            transition: all 0.3s ease;
            z-index: 10;
          }

          .modal-close-btn:hover {
            background: var(--naz-danger);
            color: white;
            transform: scale(1.1);
          }

          .game-content {
            padding: 1rem;
          }

          .game-placeholder {
            text-align: center;
            padding: 3rem 2rem;
            min-height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .game-placeholder h3 {
            font-size: 2rem;
            color: var(--naz-primary);
            margin-bottom: 1rem;
          }

          .game-placeholder p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
          }

          .game-preview {
            background: var(--glass-light);
            border-radius: 20px;
            padding: 2rem;
            border: 1px solid var(--glass-border);
            max-width: 400px;
          }

          .game-preview .game-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }

          .game-complete-screen {
            padding: 3rem 2rem;
            text-align: center;
            min-height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .completion-celebration {
            background: var(--glass-light);
            border-radius: 25px;
            padding: 3rem 2rem;
            border: 1px solid var(--glass-border);
            max-width: 400px;
          }

          .celebration-emoji {
            font-size: 4rem;
            margin-bottom: 1rem;
            animation: bounce 1s ease-in-out infinite;
          }

          .completion-celebration h2 {
            font-size: 2.5rem;
            color: var(--naz-primary);
            margin-bottom: 1rem;
          }

          .completion-celebration p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
          }

          .final-score {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }

          .score-text {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--naz-accent);
          }

          .stars {
            display: flex;
            gap: 0.5rem;
          }

          .star {
            font-size: 2rem;
            transition: all 0.3s ease;
          }

          .star.filled {
            filter: drop-shadow(0 0 8px #FFD700);
            animation: sparkle 1s ease-in-out infinite;
          }

          .star.empty {
            opacity: 0.3;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          @keyframes sparkle {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(180deg); }
          }

          @media (max-width: 768px) {
            .game-modal {
              width: 95%;
              margin: 1rem;
              max-height: 95vh;
            }

            .game-placeholder,
            .game-complete-screen {
              padding: 2rem 1rem;
            }

            .completion-celebration {
              padding: 2rem 1rem;
            }
          }
        `})]})})},Dy=()=>{const[r,i]=O.useState("all"),[l,s]=O.useState([1,4,7,10]),[u,d]=O.useState(null),[f,v]=O.useState(!1),m=[{id:1,theme:"math",title:"Prenses Matematik",subtitle:"Büyülü Sayılar Ülkesi",level:1,icon:h.jsx(jy,{size:32}),difficulty:"Kolay",description:"Prenses Anna ile büyülü sayılar ülkesinde toplama macerası! Renkli çiçeklerle sayıları topla ve krallığı kurtar! 🌸",duration:"5-10 dk",stars:0,maxStars:3,isUnlocked:!0,emoji:"👸",color:"#8B5CF6"},{id:2,theme:"math",title:"Kelebek Bahçesi",subtitle:"Çıkarma Sanatı",level:2,icon:h.jsx(Sy,{size:32}),difficulty:"Kolay",description:"Kelebeklerin dans ettiği bahçede çıkarma işlemleri! Her doğru cevapla yeni kelebek kanatları kazan! 🦋",duration:"5-10 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"🦋",color:"#06B6D4"},{id:3,theme:"math",title:"Şekil Prensesi",subtitle:"Geometrik Krallık",level:3,icon:h.jsx(ky,{size:32}),difficulty:"Orta",description:"Şekil prensesi ile geometrik krallığı keşfet! Kare sarayı, yuvarlak gölet ve üçgen dağları tanı! ✨",duration:"10-15 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"💎",color:"#EC4899"},{id:4,theme:"geography",title:"Türkiye Macerası",subtitle:"Güzel Vatanımız",level:1,icon:h.jsx(wy,{size:32}),difficulty:"Kolay",description:"Ela ve köpeği Pamuk ile Türkiye'nin güzel şehirlerini keşfet! Her şehirde yeni arkadaşlar ve lezzetler seni bekliyor! 🏰",duration:"10-15 dk",stars:0,maxStars:3,isUnlocked:!0,emoji:"🏰",color:"#10B981"},{id:5,theme:"geography",title:"Dünya Gezgini",subtitle:"Büyülü Kıtalar",level:2,icon:h.jsx(by,{size:32}),difficulty:"Orta",description:"Peri Lila ile dünya turuna çık! Her kıtada farklı kültürler, renkli kıyafetler ve yemekler keşfet! 🌸",duration:"15-20 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"🌸",color:"#06B6D4"},{id:6,theme:"geography",title:"Başkent Kraliçesi",subtitle:"Şehirlerin Tacı",level:3,icon:h.jsx(_y,{size:32}),difficulty:"Zor",description:"Kraliçe Sofia ile dünyanın başkentlerini keşfet! Her doğru cevapta taç taşı kazan ve başkent uzmanı ol! 👑",duration:"15-20 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"👑",color:"#8B5CF6"},{id:7,theme:"health",title:"Beslenme Perisi",subtitle:"Gökkuşağı Tabağı",level:1,icon:h.jsx(Ey,{size:32}),difficulty:"Kolay",description:"Beslenme perisi Zeynep ile gökkuşağı tabağını hazırla! Renkli meyve ve sebzelerle sağlıklı ol! 🌈",duration:"5-10 dk",stars:0,maxStars:3,isUnlocked:!0,emoji:"🧚‍♀️",color:"#F59E0B"},{id:8,theme:"health",title:"Temizlik Prensesi",subtitle:"Parlak Krallık",level:2,icon:h.jsx(Ty,{size:32}),difficulty:"Kolay",description:"Prenses Nur ile temizlik krallığında parıl parıl macera! El yıkama büyüsünü öğren ve mikropları yok et! ✨",duration:"5-10 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"✨",color:"#10B981"},{id:9,theme:"health",title:"Dans Kraliçesi",subtitle:"Hareket Sarayı",level:3,icon:h.jsx(xy,{size:32}),difficulty:"Orta",description:"Dans kraliçesi Ayşe ile hareket sarayında eğlenceli egzersizler! Müzikle dans et ve güçlü ol! 💃",duration:"10-15 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"💃",color:"#EC4899"},{id:10,theme:"english",title:"Renkler ve Sayılar",subtitle:"Colors & Numbers",level:1,icon:h.jsx(S0,{size:32}),difficulty:"Kolay",description:"İngilizce renkleri ve sayıları öğren! Basit kelimelerle İngilizce dünyasına giriş yap! 🌈",duration:"5-10 dk",stars:0,maxStars:3,isUnlocked:!0,emoji:"🌈",color:"#8B5CF6"},{id:11,theme:"english",title:"Basit Kelimeler",subtitle:"Simple Words",level:2,icon:h.jsx(ly,{size:32}),difficulty:"Kolay",description:"Cat, Dog, Ball gibi basit İngilizce kelimeleri öğren ve eğlenceli oyunlarla pratik yap! 🐱",duration:"10-15 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"🐱",color:"#06B6D4"},{id:12,theme:"english",title:"Selam ve Vedalar",subtitle:"Hello & Goodbye",level:3,icon:h.jsx(Zu,{size:32}),difficulty:"Orta",description:"Hello, Goodbye, Please, Thank you gibi nezaket kelimelerini öğren! 👋",duration:"10-15 dk",stars:0,maxStars:3,isUnlocked:!1,emoji:"👋",color:"#10B981"}],p=[{id:"all",name:"Tüm Oyunlar",icon:h.jsx(yl,{size:20}),color:"#8B5CF6",emoji:"✨"},{id:"math",name:"Matematik",icon:h.jsx(xm,{size:20}),color:"#06B6D4",emoji:"🧮"},{id:"geography",name:"Coğrafya",icon:h.jsx(El,{size:20}),color:"#10B981",emoji:"🌍"},{id:"health",name:"Sağlık",icon:h.jsx(ra,{size:20}),color:"#F59E0B",emoji:"🍎"},{id:"english",name:"İngilizce",icon:h.jsx(S0,{size:20}),color:"#EC4899",emoji:"🇬🇧"}],[b,w]=O.useState(m),[S,k]=O.useState({totalStars:0,completedGames:0,perfectGames:0});O.useEffect(()=>{w(r==="all"?m:m.filter(q=>q.theme===r))},[r]);const _=q=>{switch(q){case"Kolay":return"#98FB98";case"Orta":return"#FFE4B5";case"Zor":return"#FFB6C1";default:return"#E6E6FA"}},U=(q,G)=>Array.from({length:G},(Q,$)=>h.jsx(Ku,{className:`star ${$<q?"filled":"empty"}`,size:16},$)),D=q=>{q.isUnlocked&&(d(q),v(!0))},A=()=>{v(!1),d(null)};return h.jsxs("div",{className:"games-page",children:[h.jsx("div",{className:"page-header",children:h.jsxs("div",{className:"header-content glass-pink",children:[h.jsxs("div",{className:"header-left",children:[h.jsx("div",{className:"page-logo",children:h.jsx("img",{src:"/icon-set/icon-512x512.png",alt:"Oyun Dünyası",className:"page-logo-image"})}),h.jsxs("h1",{className:"page-title",children:[h.jsx(bl,{className:"title-gem"}),"Oyun Dünyası",h.jsx(bl,{className:"title-gem"})]}),h.jsx("p",{className:"page-subtitle",children:"Öğrenmenin en eğlenceli hali seni bekliyor! ✨"})]}),h.jsxs("div",{className:"achievement-preview",children:[h.jsxs("div",{className:"achievement-item",children:[h.jsx(E0,{className:"achievement-icon"}),h.jsxs("div",{className:"achievement-text",children:[h.jsx("span",{className:"achievement-number",children:S.completedGames}),h.jsx("span",{className:"achievement-label",children:"Tamamlanan"})]})]}),h.jsxs("div",{className:"achievement-item",children:[h.jsx(Ku,{className:"achievement-icon star-icon"}),h.jsxs("div",{className:"achievement-text",children:[h.jsx("span",{className:"achievement-number",children:S.totalStars}),h.jsx("span",{className:"achievement-label",children:"Toplam Yıldız"})]})]})]})]})}),h.jsxs("div",{className:"category-filter",children:[h.jsxs("h3",{className:"filter-title",children:[h.jsx(Zu,{className:"filter-heart"}),"Hangi konuyu öğrenmek istiyorsun?"]}),h.jsx("div",{className:"category-buttons",children:p.map(q=>h.jsxs("button",{className:`category-btn ${r===q.id?"active":""}`,onClick:()=>i(q.id),style:{"--category-color":q.color},children:[h.jsx("span",{className:"category-emoji",children:q.emoji}),h.jsx("span",{className:"category-icon",children:q.icon}),h.jsx("span",{className:"category-name",children:q.name}),h.jsx("div",{className:"category-shine"})]},q.id))})]}),h.jsx("div",{className:"games-grid",children:b.map(q=>h.jsxs("div",{className:`game-card ${q.theme} ${q.isUnlocked?"":"locked"}`,onClick:()=>D(q),children:[h.jsxs("div",{className:"card-header",children:[h.jsxs("div",{className:"game-level",children:[h.jsxs("span",{className:"level-text",children:["Seviye ",q.level]}),q.isUnlocked?h.jsx(pl,{className:"level-crown"}):h.jsx(j0,{className:"level-lock"})]}),h.jsx("div",{className:"game-emoji",children:q.emoji})]}),h.jsxs("div",{className:"card-content",children:[h.jsx("div",{className:"game-icon",style:{color:q.color},children:q.icon}),h.jsx("h3",{className:"game-title",children:q.title}),h.jsx("h4",{className:"game-subtitle",children:q.subtitle}),h.jsx("p",{className:"game-description",children:q.description})]}),h.jsxs("div",{className:"card-meta",children:[h.jsxs("div",{className:"game-info",children:[h.jsxs("div",{className:"info-item",children:[h.jsx("span",{className:"info-label",children:"Süre:"}),h.jsx("span",{className:"info-value",children:q.duration})]}),h.jsxs("div",{className:"info-item",children:[h.jsx("span",{className:"info-label",children:"Zorluk:"}),h.jsx("span",{className:"difficulty-badge",style:{backgroundColor:_(q.difficulty)},children:q.difficulty})]})]}),h.jsxs("div",{className:"game-progress",children:[h.jsx("div",{className:"stars-container",children:U(q.stars,q.maxStars)}),h.jsxs("span",{className:"progress-text",children:[q.stars,"/",q.maxStars," Yıldız"]})]})]}),h.jsx("div",{className:"card-footer",children:q.isUnlocked?h.jsxs("button",{className:"play-button",children:[h.jsx(_m,{className:"play-icon"}),h.jsx("span",{children:"Oyna"}),h.jsx("div",{className:"play-shimmer"})]}):h.jsxs("div",{className:"locked-message",children:[h.jsx(j0,{className:"lock-icon"}),h.jsx("span",{children:"Önceki oyunu tamamla"})]})}),h.jsx("div",{className:"card-overlay"}),!q.isUnlocked&&h.jsx("div",{className:"lock-overlay"})]},q.id))}),h.jsxs("div",{className:"progress-summary glass",children:[h.jsxs("h3",{className:"summary-title",children:[h.jsx(E0,{className:"summary-icon"}),"İlerleme Özeti"]}),h.jsxs("div",{className:"progress-stats",children:[h.jsxs("div",{className:"stat-circle",children:[h.jsx("div",{className:"circle-progress",style:{"--progress":"33%"},children:h.jsx("span",{className:"circle-text",children:"4/12"})}),h.jsx("span",{className:"circle-label",children:"Oyun Açık"})]}),h.jsxs("div",{className:"stat-circle",children:[h.jsx("div",{className:"circle-progress",style:{"--progress":"0%"},children:h.jsx("span",{className:"circle-text",children:"0/12"})}),h.jsx("span",{className:"circle-label",children:"Tamamlandı"})]}),h.jsxs("div",{className:"stat-circle",children:[h.jsx("div",{className:"circle-progress",style:{"--progress":"0%"},children:h.jsx("span",{className:"circle-text",children:"0/36"})}),h.jsx("span",{className:"circle-label",children:"Toplam Yıldız"})]})]})]}),h.jsx("style",{children:`
        .games-page {
          padding: 2rem 0;
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 3rem;
        }

        .header-content {
          padding: 2.5rem;
          border-radius: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .page-logo {
          margin-bottom: 1rem;
          text-align: center;
        }

        .page-logo-image {
          width: 60px;
          height: 60px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
          animation: bounce 2s ease-in-out infinite;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #FF1493;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .title-gem {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .page-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .achievement-preview {
          display: flex;
          gap: 2rem;
        }

        .achievement-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: var(--glass-white);
          padding: 1rem 1.5rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
        }

        .achievement-icon {
          font-size: 1.5rem;
          color: #FFD700;
        }

        .star-icon {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .achievement-text {
          display: flex;
          flex-direction: column;
        }

        .achievement-number {
          font-size: 1.5rem;
          font-weight: 800;
          color: #FF1493;
        }

        .achievement-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .category-filter {
          margin-bottom: 3rem;
          text-align: center;
        }

        .filter-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #FF69B4;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .filter-heart {
          color: #FF1493;
          animation: heartBeat 1.5s ease-in-out infinite;
        }

        .category-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .category-btn {
          background: var(--glass-white);
          backdrop-filter: blur(10px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 1rem 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
        }

        .category-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.3);
        }

        .category-btn.active {
          background: var(--category-color);
          color: white;
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
        }

        .category-emoji {
          font-size: 1.2rem;
        }

        .category-icon {
          font-size: 1rem;
        }

        .category-name {
          font-size: 1rem;
        }

        .category-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.3);
          transition: left 0.5s;
        }

        .category-btn:hover .category-shine {
          left: 100%;
        }

        .games-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .game-card {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 25px;
          padding: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          flex-direction: column;
        }

        .game-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-hover);
        }

        .game-card.math {
          background: rgba(255, 182, 193, 0.15);
        }

        .game-card.geography {
          background: rgba(152, 251, 152, 0.15);
        }

        .game-card.health {
          background: rgba(255, 228, 181, 0.15);
        }

        .game-card.english {
          background: rgba(236, 72, 153, 0.15);
        }

        .game-card.locked {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .game-card.locked:hover {
          transform: none;
          box-shadow: var(--shadow-card);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .game-level {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--glass-purple);
          padding: 0.5rem 1rem;
          border-radius: 15px;
          backdrop-filter: blur(8px);
          border: 1px solid var(--glass-border);
        }

        .level-text {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .level-crown {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .level-lock {
          color: #888;
        }

        .game-emoji {
          font-size: 2rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .card-content {
          text-align: center;
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .game-icon {
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .game-card:hover .game-icon {
          transform: scale(1.1);
        }

        .game-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #FF1493;
          margin-bottom: 0.5rem;
        }

        .game-subtitle {
          font-size: 1rem;
          font-weight: 600;
          color: #9966CC;
          margin-bottom: 1rem;
        }

        .game-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .card-meta {
          margin-bottom: 1.5rem;
        }

        .game-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .info-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .info-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .difficulty-badge {
          padding: 0.3rem 0.8rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #333;
          text-align: center;
        }

        .game-progress {
          text-align: center;
        }

        .stars-container {
          display: flex;
          justify-content: center;
          gap: 0.3rem;
          margin-bottom: 0.5rem;
        }

        .star {
          transition: all 0.3s ease;
        }

        .star.filled {
          color: #FFD700;
          animation: sparkle 2s ease-in-out infinite;
        }

        .star.empty {
          color: #DDD;
        }

        .progress-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .card-footer {
          margin-top: auto;
        }

        .play-button {
          width: 100%;
          background: #8B5CF6;
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 20px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .play-button:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 25px rgba(255, 105, 180, 0.4);
        }

        .play-icon {
          animation: bounce 2s ease-in-out infinite;
        }

        .play-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: rgba(255,255,255,0.2);
          transition: left 0.6s;
        }

        .play-button:hover .play-shimmer {
          left: 100%;
        }

        .locked-message {
          width: 100%;
          background: #888;
          color: white;
          padding: 1rem;
          border-radius: 20px;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-weight: 500;
        }

        .lock-icon {
          color: #BBB;
        }

        .card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .game-card:hover .card-overlay {
          opacity: 1;
        }

        .lock-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
        }

        .progress-summary {
          padding: 2.5rem;
          border-radius: 25px;
          text-align: center;
          margin-top: 3rem;
        }

        .summary-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FF69B4;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .summary-icon {
          color: #FFD700;
        }

        .progress-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }

        .stat-circle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .circle-progress {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: conic-gradient(#FF69B4 var(--progress), #E6E6FA var(--progress));
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .circle-progress::before {
          content: '';
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: white;
        }

        .circle-text {
          position: relative;
          z-index: 2;
          font-size: 1.2rem;
          font-weight: 800;
          color: #FF1493;
        }

        .circle-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        /* Animasyonlar */
        @keyframes sparkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
          }

          .achievement-preview {
            flex-direction: column;
            gap: 1rem;
          }

          .page-title {
            font-size: 2rem;
            flex-direction: column;
          }

          .category-buttons {
            gap: 0.5rem;
          }

          .category-btn {
            padding: 0.8rem 1.5rem;
            font-size: 0.9rem;
          }

          .games-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .progress-stats {
            gap: 2rem;
          }
        }
      }
      }

        @media (max-width: 480px) {
          .games-page {
            padding: 1rem 0;
          }

          .header-content {
            padding: 2rem 1.5rem;
          }

          .game-card {
            padding: 1.5rem;
            min-height: 350px;
          }

          .category-buttons {
            flex-direction: column;
            align-items: center;
          }

          .category-btn {
            width: 100%;
            max-width: 250px;
          }

          .progress-stats {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        /* Tablet */
        @media (min-width: 769px) and (max-width: 1024px) {
          .games-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}),h.jsx(Cy,{game:u,isOpen:f,onClose:A})]})},My=()=>{const[r,i]=O.useState(0),[l,s]=O.useState(!1),[u,d]=O.useState(0),[f,v]=O.useState(0),[m,p]=O.useState(.7),[b,w]=O.useState(!1),[S,k]=O.useState(!0),_=O.useRef(null),U=[{id:1,title:"Naz'ımız Var",artist:"NAZ Eğitim Krallığı",src:"/naz.mp3",cover:"/icon-set/icon-512x512.png",color:"#EC4899",lyrics:["Naz, Naz, Nazımız var,","Koşar oynar, gülen yüzü var!","Oyuncakları elinde,","Sevgi saçar çevresine!","","Zıplar, koşar, dans eder,","Minik ayaklar yere vurur!","Naz'ın şarkısı burada,","Mutlulukla hep yaşar!","","Naz bizim, Naz bizim,","Şarkımızla hep gülecek!","Oyun oyna, kahkaha at,","Mutluluğun sonsuza dek!","","Renkli oyunlar, taze sevinç,","Naz'ın dünyası huzur içinde!","Sevgi dolu, aydınlık yüreği,","Naz'ımız bizim güneşimiz"]},{id:2,title:"Pembe Bulutlar",artist:"NAZ Eğitim Krallığı",src:"/naz2.mp3",cover:"/icon-set/icon-512x512.png",color:"#8B5CF6",lyrics:["Pembe bulutlar, mavi gökyüzü,","Naz'ın saçlarında rüzgar uçuyor!","Elinde ışıklar, ayağında çiçekler,","Koşar gibi dans eder, güler gibi!","","Kuşlar cıvıldar, kelebekler uçar,","Naz'ın dünyası bir rüya gibi!","Elimi tutarsan, birlikte uçarız,","Yıldızlara kadar, hiç durmadan!","","Uçan bulutlar, parlayan yıldızlar,","Naz'ın şarkısı hepimize ışık saçar!","Mutluluk bizimle, sevgimiz sonsuza,","Bugün, yarın, her zaman, sonsuza!","","Oyuncak ayı, sarı ay,","Naz'ın odasında hikayeler anlatır!","Ellerimiz birleşir, ışıklar yanar,","Her gün bir macera, her gün bir hediye!","","Uçan bulutlar, parlayan yıldızlar,","Naz'ın şarkısı hepimize ışık saçar!","Mutluluk bizimle, sevgimiz sonsuza,","Bugün, yarın, her zaman, sonsuza!"]},{id:3,title:"Doğum Günü Coşkusu",artist:"NAZ Eğitim Krallığı",src:"/naz3.mp3",cover:"/icon-set/icon-512x512.png",color:"#06B6D4",lyrics:["Bugün doğum günü, pasta dilimlendi!","Arkadaşlar burada, oyunlar başladı!","Ejderhalar uçar, Vikingler gemilerde,","Naz'ımız da onlarla birlikte coşar!","","Jimnastik salonunda takla atıyor,","Denge çubuğunda bir balerin gibi!",'Elleriyle "Hiccup"u taklit ediyor,',"Narin ayaklarıyla zıplıyor, uçuyor!","","Oyuncak ejderhalar odanda sıralı,","Annesiyle geçen günler huzurlu!",'Arkadaşlar "Sürpriz!" diye bağırır,',"Doğum günü şarkısı hepimiz bir ağızdan!","","Armağanlar, öpücükler, gülüşler içinde,","Naz'ımız büyüyor, yıldızlar gibi parlıyor!"]}],D=U[r];O.useEffect(()=>{const V=_.current;if(!V)return;const fe=()=>d(V.currentTime),me=()=>v(V.duration);return V.addEventListener("timeupdate",fe),V.addEventListener("loadedmetadata",me),V.addEventListener("ended",q),()=>{V.removeEventListener("timeupdate",fe),V.removeEventListener("loadedmetadata",me),V.removeEventListener("ended",q)}},[r]),O.useEffect(()=>{_.current&&(_.current.volume=b?0:m)},[m,b]);const A=()=>{const V=_.current;V&&(l?V.pause():V.play(),s(!l))},q=()=>{i(V=>(V+1)%U.length),s(!1)},G=()=>{i(V=>(V-1+U.length)%U.length),s(!1)},Q=V=>{const fe=_.current;if(!fe)return;const me=V.currentTarget.getBoundingClientRect(),Ke=V.clientX-me.left,at=me.width,Be=Ke/at*f;fe.currentTime=Be,d(Be)},$=V=>{if(!V||isNaN(V))return"0:00";const fe=Math.floor(V/60),me=Math.floor(V%60);return`${fe}:${me.toString().padStart(2,"0")}`},ae=()=>{w(!b)};return h.jsxs("div",{className:"music-page",children:[h.jsxs("div",{className:"music-header",children:[h.jsx(li,{className:"music-header-icon"}),h.jsx("h1",{className:"page-title",children:"Şarkı Dinle"}),h.jsx("p",{className:"page-subtitle",children:"NAZ'ın özel şarkıları ile müziğin büyülü dünyasında yolculuk! 🎵"})]}),h.jsxs("div",{className:"music-container",children:[h.jsxs("div",{className:"music-player",children:[h.jsxs("div",{className:"album-art",style:{backgroundColor:D.color},children:[h.jsx("img",{src:D.cover,alt:D.title,className:"cover-image"}),h.jsxs("div",{className:"art-overlay",children:[h.jsx(li,{className:"floating-note note-1"}),h.jsx(li,{className:"floating-note note-2"}),h.jsx(li,{className:"floating-note note-3"})]})]}),h.jsxs("div",{className:"song-info",children:[h.jsx("h2",{className:"song-title",children:D.title}),h.jsx("p",{className:"song-artist",children:D.artist})]}),h.jsxs("div",{className:"progress-section",children:[h.jsxs("div",{className:"time-display",children:[h.jsx("span",{className:"current-time",children:$(u)}),h.jsx("span",{className:"duration",children:$(f)})]}),h.jsxs("div",{className:"progress-bar",onClick:Q,children:[h.jsx("div",{className:"progress-fill",style:{width:`${f?u/f*100:0}%`}}),h.jsx("div",{className:"progress-thumb",style:{left:`${f?u/f*100:0}%`}})]})]}),h.jsxs("div",{className:"controls",children:[h.jsx("button",{className:"control-btn secondary",onClick:G,children:h.jsx(ny,{})}),h.jsx("button",{className:"control-btn primary",onClick:A,children:l?h.jsx(uy,{}):h.jsx(cy,{})}),h.jsx("button",{className:"control-btn secondary",onClick:q,children:h.jsx(ry,{})})]}),h.jsxs("div",{className:"volume-control",children:[h.jsx("button",{className:"volume-btn",onClick:ae,children:b?h.jsx(fy,{}):h.jsx(Vu,{})}),h.jsx("input",{type:"range",min:"0",max:"1",step:"0.1",value:b?0:m,onChange:V=>p(parseFloat(V.target.value)),className:"volume-slider"})]}),h.jsx("audio",{ref:_,src:D.src,onError:()=>console.log("Audio file not found, using placeholder")})]}),h.jsxs("div",{className:"playlist",children:[h.jsxs("h3",{className:"playlist-title",children:[h.jsx(Vu,{className:"playlist-icon"}),"Şarkı Listesi"]}),h.jsx("div",{className:"playlist-items",children:U.map((V,fe)=>h.jsxs("div",{className:`playlist-item ${fe===r?"active":""}`,onClick:()=>{i(fe),s(!1)},children:[h.jsx("div",{className:"playlist-cover",style:{backgroundColor:V.color},children:h.jsx(li,{className:"playlist-note"})}),h.jsxs("div",{className:"playlist-info",children:[h.jsx("h4",{className:"playlist-song-title",children:V.title}),h.jsx("p",{className:"playlist-artist",children:V.artist})]}),fe===r&&l&&h.jsxs("div",{className:"playing-indicator",children:[h.jsx("div",{className:"bar bar1"}),h.jsx("div",{className:"bar bar2"}),h.jsx("div",{className:"bar bar3"})]})]},V.id))})]})]}),S&&h.jsxs("div",{className:"lyrics-section",children:[h.jsxs("div",{className:"lyrics-header",children:[h.jsx(ra,{className:"lyrics-icon"}),h.jsx("h3",{children:"Şarkı Sözleri"}),h.jsx("button",{className:"toggle-lyrics",onClick:()=>k(!S),children:"Gizle"})]}),h.jsx("div",{className:"lyrics-content",children:D.lyrics.map((V,fe)=>h.jsx("p",{className:`lyrics-line ${V===""?"empty":""}`,children:V||" "},fe))})]}),!S&&h.jsxs("button",{className:"show-lyrics-btn",onClick:()=>k(!0),children:[h.jsx(ra,{className:"btn-icon"}),"Şarkı Sözlerini Göster"]}),h.jsx("style",{children:`
        .music-page {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          min-height: 100vh;
        }

        .music-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .music-header-icon {
          font-size: 3rem;
          color: var(--naz-primary);
          margin-bottom: 1rem;
          animation: bounce 2s ease-in-out infinite;
        }

        .page-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .page-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 0;
        }

        .music-container {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .music-player {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 25px;
          padding: 2.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }

        .album-art {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .cover-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }

        .art-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-note {
          position: absolute;
          color: rgba(255, 255, 255, 0.3);
          font-size: 2rem;
          animation: float 3s ease-in-out infinite;
        }

        .note-1 {
          top: 20%;
          left: 20%;
          animation-delay: 0s;
        }

        .note-2 {
          top: 60%;
          right: 25%;
          animation-delay: 1s;
        }

        .note-3 {
          bottom: 30%;
          left: 30%;
          animation-delay: 2s;
        }

        .song-info {
          text-align: center;
          margin-bottom: 2rem;
        }

        .song-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .song-artist {
          font-size: 1rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .progress-section {
          margin-bottom: 2rem;
        }

        .time-display {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .progress-bar {
          position: relative;
          height: 6px;
          background: var(--glass-border);
          border-radius: 3px;
          cursor: pointer;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--naz-primary);
          border-radius: 3px;
          transition: width 0.1s ease;
        }

        .progress-thumb {
          position: absolute;
          top: 50%;
          width: 16px;
          height: 16px;
          background: var(--naz-primary);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: left 0.1s ease;
        }

        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .control-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 1.5rem;
        }

        .control-btn.primary {
          width: 60px;
          height: 60px;
          background: var(--naz-primary);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }

        .control-btn.secondary {
          width: 45px;
          height: 45px;
          background: var(--glass-light);
          color: var(--text-secondary);
          border: 1px solid var(--glass-border);
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .volume-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 1.2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .volume-btn:hover {
          color: var(--naz-primary);
        }

        .volume-slider {
          flex: 1;
          height: 4px;
          background: var(--glass-border);
          border-radius: 2px;
          outline: none;
          cursor: pointer;
        }

        .volume-slider::-webkit-slider-thumb {
          appearance: none;
          width: 14px;
          height: 14px;
          background: var(--naz-primary);
          border-radius: 50%;
          cursor: pointer;
        }

        .playlist {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .playlist-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .playlist-icon {
          color: var(--naz-secondary);
        }

        .playlist-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .playlist-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .playlist-item:hover {
          background: var(--glass-purple);
        }

        .playlist-item.active {
          background: var(--glass-blue);
          border: 1px solid var(--naz-secondary);
        }

        .playlist-cover {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .playlist-note {
          color: white;
          font-size: 1.2rem;
        }

        .playlist-info {
          flex: 1;
          min-width: 0;
        }

        .playlist-song-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0 0 0.2rem 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .playlist-artist {
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin: 0;
        }

        .playing-indicator {
          display: flex;
          align-items: end;
          gap: 2px;
          height: 16px;
        }

        .bar {
          width: 3px;
          background: var(--naz-primary);
          border-radius: 1px;
          animation: wave 1s ease-in-out infinite;
        }

        .bar1 { animation-delay: 0s; }
        .bar2 { animation-delay: 0.3s; }
        .bar3 { animation-delay: 0.6s; }

        .lyrics-section {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .lyrics-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .lyrics-icon {
          color: var(--naz-pink);
          font-size: 1.5rem;
        }

        .lyrics-header h3 {
          flex: 1;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin: 0;
        }

        .toggle-lyrics {
          background: var(--glass-light);
          border: 1px solid var(--glass-border);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .toggle-lyrics:hover {
          background: var(--glass-purple);
          color: var(--text-primary);
        }

        .lyrics-content {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 1rem;
        }

        .lyrics-line {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
          margin: 0 0 0.5rem 0;
          padding: 0.3rem 0;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        .lyrics-line.empty {
          height: 1rem;
        }

        .lyrics-line:hover {
          background: var(--glass-purple);
          padding-left: 1rem;
        }

        .show-lyrics-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--naz-pink);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          margin: 2rem auto;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
        }

        .show-lyrics-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(236, 72, 153, 0.4);
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }

        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }

        @media (max-width: 768px) {
          .music-container {
            grid-template-columns: 1fr;
          }

          .music-player {
            padding: 2rem 1.5rem;
          }

          .album-art {
            width: 150px;
            height: 150px;
          }

          .page-title {
            font-size: 2rem;
          }

          .controls {
            gap: 0.5rem;
          }

          .control-btn.primary {
            width: 50px;
            height: 50px;
          }

          .control-btn.secondary {
            width: 40px;
            height: 40px;
          }
        }
      `})]})},Uy=()=>h.jsxs("div",{className:"profile-page",children:[h.jsxs("div",{className:"profile-header",children:[h.jsx(wm,{className:"profile-header-icon"}),h.jsx("h2",{children:"Profil"})]}),h.jsxs("div",{className:"profile-info",children:[h.jsxs("div",{className:"avatar",children:[h.jsx("img",{src:"/icon-set/icon-192x192.png",alt:"Profil",className:"avatar-image"}),h.jsx("div",{className:"avatar-text",children:"NAZ"})]}),h.jsxs("div",{className:"stats",children:[h.jsxs("div",{className:"stat-item",children:[h.jsx(my,{className:"stat-icon trophy"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("span",{children:"Tamamlanan Oyunlar"}),h.jsx("strong",{children:"0/9"})]})]}),h.jsxs("div",{className:"stat-item",children:[h.jsx(ci,{className:"stat-icon star"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("span",{children:"Toplam Yıldız"}),h.jsx("strong",{children:"0"})]})]})]})]}),h.jsxs("div",{className:"progress-section",children:[h.jsxs("div",{className:"progress-header",children:[h.jsx(iy,{className:"progress-header-icon"}),h.jsx("h3",{children:"İlerleme"})]}),h.jsxs("div",{className:"progress-bars",children:[h.jsxs("div",{className:"progress-bar math",children:[h.jsxs("div",{className:"progress-info",children:[h.jsx(xm,{className:"progress-icon"}),h.jsx("span",{children:"Matematik"}),h.jsx("span",{className:"progress-percent",children:"30%"})]}),h.jsx("div",{className:"progress-track",children:h.jsx("div",{className:"progress-fill",style:{width:"30%"}})})]}),h.jsxs("div",{className:"progress-bar geography",children:[h.jsxs("div",{className:"progress-info",children:[h.jsx(El,{className:"progress-icon"}),h.jsx("span",{children:"Coğrafya"}),h.jsx("span",{className:"progress-percent",children:"10%"})]}),h.jsx("div",{className:"progress-track",children:h.jsx("div",{className:"progress-fill",style:{width:"10%"}})})]}),h.jsxs("div",{className:"progress-bar health",children:[h.jsxs("div",{className:"progress-info",children:[h.jsx(ra,{className:"progress-icon"}),h.jsx("span",{children:"Sağlık"}),h.jsx("span",{className:"progress-percent",children:"5%"})]}),h.jsx("div",{className:"progress-track",children:h.jsx("div",{className:"progress-fill",style:{width:"5%"}})})]})]})]}),h.jsx("style",{children:`
        .profile-page {
          padding: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .profile-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          text-align: center;
          justify-content: center;
        }

        .profile-header-icon {
          font-size: 2rem;
          color: #8B5CF6;
        }

        .profile-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2D3748;
          margin: 0;
        }

        .profile-info {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .avatar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .avatar-image {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .avatar-text {
          font-size: 1.5rem;
          font-weight: 800;
          color: #8B5CF6;
        }

        .stats {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .stat-item {
          background: var(--glass-light);
          padding: 1.5rem;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 1rem;
          border: 1px solid var(--glass-border);
        }

        .stat-icon {
          font-size: 1.8rem;
        }

        .stat-icon.trophy {
          color: #F59E0B;
        }

        .stat-icon.star {
          color: #EAB308;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-content span {
          font-size: 0.9rem;
          color: #6B7280;
          margin-bottom: 0.5rem;
        }

        .stat-content strong {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1F2937;
        }

        .progress-section {
          background: var(--glass-white);
          backdrop-filter: blur(15px);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .progress-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          justify-content: center;
        }

        .progress-header-icon {
          font-size: 1.8rem;
          color: #06B6D4;
        }

        .progress-header h3 {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2D3748;
          margin: 0;
        }

        .progress-bars {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .progress-bar {
          background: var(--glass-light);
          border-radius: 15px;
          padding: 1.5rem;
          border: 1px solid var(--glass-border);
        }

        .progress-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .progress-icon {
          font-size: 1.3rem;
        }

        .progress-bar.math .progress-icon {
          color: #06B6D4;
        }

        .progress-bar.geography .progress-icon {
          color: #10B981;
        }

        .progress-bar.health .progress-icon {
          color: #F59E0B;
        }

        .progress-info span:first-of-type {
          flex: 1;
          font-weight: 600;
          color: #374151;
        }

        .progress-percent {
          font-weight: 700;
          color: #6B7280;
        }

        .progress-track {
          height: 10px;
          background: #E5E7EB;
          border-radius: 5px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 5px;
          transition: width 0.8s ease;
        }

        .progress-bar.math .progress-fill {
          background: #06B6D4;
        }

        .progress-bar.geography .progress-fill {
          background: #10B981;
        }

        .progress-bar.health .progress-fill {
          background: #F59E0B;
        }

        @media (max-width: 768px) {
          .profile-info {
            flex-direction: column;
            text-align: center;
          }

          .stats {
            grid-template-columns: 1fr;
            width: 100%;
          }

          .progress-info {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }
      `})]});function By(){return h.jsx(Pv,{children:h.jsx(Xv,{children:h.jsxs("div",{className:"App",children:[h.jsx(py,{}),h.jsx("div",{className:"container page",children:h.jsxs(hv,{children:[h.jsx(gl,{path:"/",element:h.jsx(Ay,{})}),h.jsx(gl,{path:"/games",element:h.jsx(Dy,{})}),h.jsx(gl,{path:"/music",element:h.jsx(My,{})}),h.jsx(gl,{path:"/profile",element:h.jsx(Uy,{})})]})}),h.jsxs("div",{className:"bg-decorations",children:[h.jsx("div",{className:"floating-heart floating-heart-1",children:"💖"}),h.jsx("div",{className:"floating-heart floating-heart-2",children:"✨"}),h.jsx("div",{className:"floating-heart floating-heart-3",children:"🌟"}),h.jsx("div",{className:"floating-heart floating-heart-4",children:"💫"}),h.jsx("div",{className:"floating-heart floating-heart-5",children:"🎀"}),h.jsx("div",{className:"floating-heart floating-heart-6",children:"🦄"})]}),h.jsx("style",{children:`
          .App {
            min-height: 100vh;
            position: relative;
            overflow-x: hidden;
          }

          .page {
            position: relative;
            z-index: 2;
            padding-top: 2rem;
            padding-bottom: 4rem;
          }

          .bg-decorations {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            overflow: hidden;
          }

          .floating-heart {
            position: absolute;
            font-size: 2rem;
            opacity: 0.1;
            animation: floatAround 20s ease-in-out infinite;
          }

          .floating-heart-1 {
            top: 10%;
            left: 5%;
            animation-delay: 0s;
            animation-duration: 25s;
          }

          .floating-heart-2 {
            top: 20%;
            right: 10%;
            animation-delay: 3s;
            animation-duration: 30s;
          }

          .floating-heart-3 {
            top: 50%;
            left: 8%;
            animation-delay: 6s;
            animation-duration: 22s;
          }

          .floating-heart-4 {
            top: 70%;
            right: 15%;
            animation-delay: 9s;
            animation-duration: 28s;
          }

          .floating-heart-5 {
            top: 30%;
            left: 50%;
            animation-delay: 12s;
            animation-duration: 24s;
          }

          .floating-heart-6 {
            top: 80%;
            left: 20%;
            animation-delay: 15s;
            animation-duration: 26s;
          }

          @keyframes floatAround {
            0%, 100% {
              transform: translateX(0px) translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateX(30px) translateY(-20px) rotate(90deg);
            }
            50% {
              transform: translateX(-20px) translateY(-40px) rotate(180deg);
            }
            75% {
              transform: translateX(-30px) translateY(-10px) rotate(270deg);
            }
          }

          /* Responsive adjustments */
          @media (max-width: 768px) {
            .page {
              padding-top: 1rem;
              padding-bottom: 2rem;
            }

            .floating-heart {
              font-size: 1.2rem;
              opacity: 0.06;
            }
          }

          /* Dark mode support */
          @media (prefers-color-scheme: dark) {
            .floating-heart {
              opacity: 0.05;
            }
          }

          /* Reduce motion for accessibility */
          @media (prefers-reduced-motion: reduce) {
            .floating-heart {
              animation: none;
            }
          }
        `})]})})})}const qy="modulepreload",Hy=function(r){return"/"+r},k0={},Nl=function(i,l,s){let u=Promise.resolve();if(l&&l.length>0){let p=function(b){return Promise.all(b.map(w=>Promise.resolve(w).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};var f=p;document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),m=v?.nonce||v?.getAttribute("nonce");u=p(l.map(b=>{if(b=Hy(b),b in k0)return;k0[b]=!0;const w=b.endsWith(".css"),S=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${b}"]${S}`))return;const k=document.createElement("link");if(k.rel=w?"stylesheet":qy,w||(k.as="script"),k.crossOrigin="",k.href=b,m&&k.setAttribute("nonce",m),document.head.appendChild(k),w)return new Promise((_,U)=>{k.addEventListener("load",_),k.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${b}`)))})}))}function d(v){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=v,window.dispatchEvent(m),!m.defaultPrevented)throw v}return u.then(v=>{for(const m of v||[])m.status==="rejected"&&d(m.reason);return i().catch(d)})},Ly=r=>{let i;return r?i=r:typeof fetch>"u"?i=(...l)=>Nl(async()=>{const{default:s}=await Promise.resolve().then(()=>di);return{default:s}},[]).then(({default:s})=>s(...l)):i=fetch,(...l)=>i(...l)};class sc extends Error{constructor(i,l="FunctionsError",s){super(i),this.name=l,this.context=s}}class Gy extends sc{constructor(i){super("Failed to send a request to the Edge Function","FunctionsFetchError",i)}}class T0 extends sc{constructor(i){super("Relay Error invoking the Edge Function","FunctionsRelayError",i)}}class A0 extends sc{constructor(i){super("Edge Function returned a non-2xx status code","FunctionsHttpError",i)}}var Xu;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(Xu||(Xu={}));var Yy=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};class $y{constructor(i,{headers:l={},customFetch:s,region:u=Xu.Any}={}){this.url=i,this.headers=l,this.region=u,this.fetch=Ly(s)}setAuth(i){this.headers.Authorization=`Bearer ${i}`}invoke(i,l={}){var s;return Yy(this,void 0,void 0,function*(){try{const{headers:u,method:d,body:f}=l;let v={},{region:m}=l;m||(m=this.region);const p=new URL(`${this.url}/${i}`);m&&m!=="any"&&(v["x-region"]=m,p.searchParams.set("forceFunctionRegion",m));let b;f&&(u&&!Object.prototype.hasOwnProperty.call(u,"Content-Type")||!u)&&(typeof Blob<"u"&&f instanceof Blob||f instanceof ArrayBuffer?(v["Content-Type"]="application/octet-stream",b=f):typeof f=="string"?(v["Content-Type"]="text/plain",b=f):typeof FormData<"u"&&f instanceof FormData?b=f:(v["Content-Type"]="application/json",b=JSON.stringify(f)));const w=yield this.fetch(p.toString(),{method:d||"POST",headers:Object.assign(Object.assign(Object.assign({},v),this.headers),u),body:b}).catch(U=>{throw new Gy(U)}),S=w.headers.get("x-relay-error");if(S&&S==="true")throw new T0(w);if(!w.ok)throw new A0(w);let k=((s=w.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim(),_;return k==="application/json"?_=yield w.json():k==="application/octet-stream"?_=yield w.blob():k==="text/event-stream"?_=w:k==="multipart/form-data"?_=yield w.formData():_=yield w.text(),{data:_,error:null,response:w}}catch(u){return{data:null,error:u,response:u instanceof A0||u instanceof T0?u.context:void 0}}})}}var Ve={},Jn={},Fn={},Wn={},In={},ei={},Vy=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},si=Vy();const Zy=si.fetch,Sm=si.fetch.bind(si),jm=si.Headers,Ky=si.Request,Xy=si.Response,di=Object.freeze(Object.defineProperty({__proto__:null,Headers:jm,Request:Ky,Response:Xy,default:Sm,fetch:Zy},Symbol.toStringTag,{value:"Module"})),Qy=dp(di);var Qr={},z0;function Em(){if(z0)return Qr;z0=1,Object.defineProperty(Qr,"__esModule",{value:!0});class r extends Error{constructor(l){super(l.message),this.name="PostgrestError",this.details=l.details,this.hint=l.hint,this.code=l.code}}return Qr.default=r,Qr}var N0;function km(){if(N0)return ei;N0=1;var r=ei&&ei.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(ei,"__esModule",{value:!0});const i=r(Qy),l=r(Em());class s{constructor(d){this.shouldThrowOnError=!1,this.method=d.method,this.url=d.url,this.headers=d.headers,this.schema=d.schema,this.body=d.body,this.shouldThrowOnError=d.shouldThrowOnError,this.signal=d.signal,this.isMaybeSingle=d.isMaybeSingle,d.fetch?this.fetch=d.fetch:typeof fetch>"u"?this.fetch=i.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(d,f){return this.headers=Object.assign({},this.headers),this.headers[d]=f,this}then(d,f){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const v=this.fetch;let m=v(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async p=>{var b,w,S;let k=null,_=null,U=null,D=p.status,A=p.statusText;if(p.ok){if(this.method!=="HEAD"){const $=await p.text();$===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?_=$:_=JSON.parse($))}const G=(b=this.headers.Prefer)===null||b===void 0?void 0:b.match(/count=(exact|planned|estimated)/),Q=(w=p.headers.get("content-range"))===null||w===void 0?void 0:w.split("/");G&&Q&&Q.length>1&&(U=parseInt(Q[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(_)&&(_.length>1?(k={code:"PGRST116",details:`Results contain ${_.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},_=null,U=null,D=406,A="Not Acceptable"):_.length===1?_=_[0]:_=null)}else{const G=await p.text();try{k=JSON.parse(G),Array.isArray(k)&&p.status===404&&(_=[],k=null,D=200,A="OK")}catch{p.status===404&&G===""?(D=204,A="No Content"):k={message:G}}if(k&&this.isMaybeSingle&&(!((S=k?.details)===null||S===void 0)&&S.includes("0 rows"))&&(k=null,D=200,A="OK"),k&&this.shouldThrowOnError)throw new l.default(k)}return{error:k,data:_,count:U,status:D,statusText:A}});return this.shouldThrowOnError||(m=m.catch(p=>{var b,w,S;return{error:{message:`${(b=p?.name)!==null&&b!==void 0?b:"FetchError"}: ${p?.message}`,details:`${(w=p?.stack)!==null&&w!==void 0?w:""}`,hint:"",code:`${(S=p?.code)!==null&&S!==void 0?S:""}`},data:null,count:null,status:0,statusText:""}})),m.then(d,f)}returns(){return this}overrideTypes(){return this}}return ei.default=s,ei}var O0;function Tm(){if(O0)return In;O0=1;var r=In&&In.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(In,"__esModule",{value:!0});const i=r(km());class l extends i.default{select(u){let d=!1;const f=(u??"*").split("").map(v=>/\s/.test(v)&&!d?"":(v==='"'&&(d=!d),v)).join("");return this.url.searchParams.set("select",f),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(u,{ascending:d=!0,nullsFirst:f,foreignTable:v,referencedTable:m=v}={}){const p=m?`${m}.order`:"order",b=this.url.searchParams.get(p);return this.url.searchParams.set(p,`${b?`${b},`:""}${u}.${d?"asc":"desc"}${f===void 0?"":f?".nullsfirst":".nullslast"}`),this}limit(u,{foreignTable:d,referencedTable:f=d}={}){const v=typeof f>"u"?"limit":`${f}.limit`;return this.url.searchParams.set(v,`${u}`),this}range(u,d,{foreignTable:f,referencedTable:v=f}={}){const m=typeof v>"u"?"offset":`${v}.offset`,p=typeof v>"u"?"limit":`${v}.limit`;return this.url.searchParams.set(m,`${u}`),this.url.searchParams.set(p,`${d-u+1}`),this}abortSignal(u){return this.signal=u,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:u=!1,verbose:d=!1,settings:f=!1,buffers:v=!1,wal:m=!1,format:p="text"}={}){var b;const w=[u?"analyze":null,d?"verbose":null,f?"settings":null,v?"buffers":null,m?"wal":null].filter(Boolean).join("|"),S=(b=this.headers.Accept)!==null&&b!==void 0?b:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${p}; for="${S}"; options=${w};`,p==="json"?this:this}rollback(){var u;return((u=this.headers.Prefer)!==null&&u!==void 0?u:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}}return In.default=l,In}var R0;function oc(){if(R0)return Wn;R0=1;var r=Wn&&Wn.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Wn,"__esModule",{value:!0});const i=r(Tm());class l extends i.default{eq(u,d){return this.url.searchParams.append(u,`eq.${d}`),this}neq(u,d){return this.url.searchParams.append(u,`neq.${d}`),this}gt(u,d){return this.url.searchParams.append(u,`gt.${d}`),this}gte(u,d){return this.url.searchParams.append(u,`gte.${d}`),this}lt(u,d){return this.url.searchParams.append(u,`lt.${d}`),this}lte(u,d){return this.url.searchParams.append(u,`lte.${d}`),this}like(u,d){return this.url.searchParams.append(u,`like.${d}`),this}likeAllOf(u,d){return this.url.searchParams.append(u,`like(all).{${d.join(",")}}`),this}likeAnyOf(u,d){return this.url.searchParams.append(u,`like(any).{${d.join(",")}}`),this}ilike(u,d){return this.url.searchParams.append(u,`ilike.${d}`),this}ilikeAllOf(u,d){return this.url.searchParams.append(u,`ilike(all).{${d.join(",")}}`),this}ilikeAnyOf(u,d){return this.url.searchParams.append(u,`ilike(any).{${d.join(",")}}`),this}is(u,d){return this.url.searchParams.append(u,`is.${d}`),this}in(u,d){const f=Array.from(new Set(d)).map(v=>typeof v=="string"&&new RegExp("[,()]").test(v)?`"${v}"`:`${v}`).join(",");return this.url.searchParams.append(u,`in.(${f})`),this}contains(u,d){return typeof d=="string"?this.url.searchParams.append(u,`cs.${d}`):Array.isArray(d)?this.url.searchParams.append(u,`cs.{${d.join(",")}}`):this.url.searchParams.append(u,`cs.${JSON.stringify(d)}`),this}containedBy(u,d){return typeof d=="string"?this.url.searchParams.append(u,`cd.${d}`):Array.isArray(d)?this.url.searchParams.append(u,`cd.{${d.join(",")}}`):this.url.searchParams.append(u,`cd.${JSON.stringify(d)}`),this}rangeGt(u,d){return this.url.searchParams.append(u,`sr.${d}`),this}rangeGte(u,d){return this.url.searchParams.append(u,`nxl.${d}`),this}rangeLt(u,d){return this.url.searchParams.append(u,`sl.${d}`),this}rangeLte(u,d){return this.url.searchParams.append(u,`nxr.${d}`),this}rangeAdjacent(u,d){return this.url.searchParams.append(u,`adj.${d}`),this}overlaps(u,d){return typeof d=="string"?this.url.searchParams.append(u,`ov.${d}`):this.url.searchParams.append(u,`ov.{${d.join(",")}}`),this}textSearch(u,d,{config:f,type:v}={}){let m="";v==="plain"?m="pl":v==="phrase"?m="ph":v==="websearch"&&(m="w");const p=f===void 0?"":`(${f})`;return this.url.searchParams.append(u,`${m}fts${p}.${d}`),this}match(u){return Object.entries(u).forEach(([d,f])=>{this.url.searchParams.append(d,`eq.${f}`)}),this}not(u,d,f){return this.url.searchParams.append(u,`not.${d}.${f}`),this}or(u,{foreignTable:d,referencedTable:f=d}={}){const v=f?`${f}.or`:"or";return this.url.searchParams.append(v,`(${u})`),this}filter(u,d,f){return this.url.searchParams.append(u,`${d}.${f}`),this}}return Wn.default=l,Wn}var C0;function Am(){if(C0)return Fn;C0=1;var r=Fn&&Fn.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Fn,"__esModule",{value:!0});const i=r(oc());class l{constructor(u,{headers:d={},schema:f,fetch:v}){this.url=u,this.headers=d,this.schema=f,this.fetch=v}select(u,{head:d=!1,count:f}={}){const v=d?"HEAD":"GET";let m=!1;const p=(u??"*").split("").map(b=>/\s/.test(b)&&!m?"":(b==='"'&&(m=!m),b)).join("");return this.url.searchParams.set("select",p),f&&(this.headers.Prefer=`count=${f}`),new i.default({method:v,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(u,{count:d,defaultToNull:f=!0}={}){const v="POST",m=[];if(this.headers.Prefer&&m.push(this.headers.Prefer),d&&m.push(`count=${d}`),f||m.push("missing=default"),this.headers.Prefer=m.join(","),Array.isArray(u)){const p=u.reduce((b,w)=>b.concat(Object.keys(w)),[]);if(p.length>0){const b=[...new Set(p)].map(w=>`"${w}"`);this.url.searchParams.set("columns",b.join(","))}}return new i.default({method:v,url:this.url,headers:this.headers,schema:this.schema,body:u,fetch:this.fetch,allowEmpty:!1})}upsert(u,{onConflict:d,ignoreDuplicates:f=!1,count:v,defaultToNull:m=!0}={}){const p="POST",b=[`resolution=${f?"ignore":"merge"}-duplicates`];if(d!==void 0&&this.url.searchParams.set("on_conflict",d),this.headers.Prefer&&b.push(this.headers.Prefer),v&&b.push(`count=${v}`),m||b.push("missing=default"),this.headers.Prefer=b.join(","),Array.isArray(u)){const w=u.reduce((S,k)=>S.concat(Object.keys(k)),[]);if(w.length>0){const S=[...new Set(w)].map(k=>`"${k}"`);this.url.searchParams.set("columns",S.join(","))}}return new i.default({method:p,url:this.url,headers:this.headers,schema:this.schema,body:u,fetch:this.fetch,allowEmpty:!1})}update(u,{count:d}={}){const f="PATCH",v=[];return this.headers.Prefer&&v.push(this.headers.Prefer),d&&v.push(`count=${d}`),this.headers.Prefer=v.join(","),new i.default({method:f,url:this.url,headers:this.headers,schema:this.schema,body:u,fetch:this.fetch,allowEmpty:!1})}delete({count:u}={}){const d="DELETE",f=[];return u&&f.push(`count=${u}`),this.headers.Prefer&&f.unshift(this.headers.Prefer),this.headers.Prefer=f.join(","),new i.default({method:d,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}}return Fn.default=l,Fn}var hl={},ml={},D0;function Py(){return D0||(D0=1,Object.defineProperty(ml,"__esModule",{value:!0}),ml.version=void 0,ml.version="0.0.0-automated"),ml}var M0;function Jy(){if(M0)return hl;M0=1,Object.defineProperty(hl,"__esModule",{value:!0}),hl.DEFAULT_HEADERS=void 0;const r=Py();return hl.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${r.version}`},hl}var U0;function Fy(){if(U0)return Jn;U0=1;var r=Jn&&Jn.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(Jn,"__esModule",{value:!0});const i=r(Am()),l=r(oc()),s=Jy();class u{constructor(f,{headers:v={},schema:m,fetch:p}={}){this.url=f,this.headers=Object.assign(Object.assign({},s.DEFAULT_HEADERS),v),this.schemaName=m,this.fetch=p}from(f){const v=new URL(`${this.url}/${f}`);return new i.default(v,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(f){return new u(this.url,{headers:this.headers,schema:f,fetch:this.fetch})}rpc(f,v={},{head:m=!1,get:p=!1,count:b}={}){let w;const S=new URL(`${this.url}/rpc/${f}`);let k;m||p?(w=m?"HEAD":"GET",Object.entries(v).filter(([U,D])=>D!==void 0).map(([U,D])=>[U,Array.isArray(D)?`{${D.join(",")}}`:`${D}`]).forEach(([U,D])=>{S.searchParams.append(U,D)})):(w="POST",k=v);const _=Object.assign({},this.headers);return b&&(_.Prefer=`count=${b}`),new l.default({method:w,url:S,headers:_,schema:this.schemaName,body:k,fetch:this.fetch,allowEmpty:!1})}}return Jn.default=u,Jn}var B0;function Wy(){if(B0)return Ve;B0=1;var r=Ve&&Ve.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(Ve,"__esModule",{value:!0}),Ve.PostgrestError=Ve.PostgrestBuilder=Ve.PostgrestTransformBuilder=Ve.PostgrestFilterBuilder=Ve.PostgrestQueryBuilder=Ve.PostgrestClient=void 0;const i=r(Fy());Ve.PostgrestClient=i.default;const l=r(Am());Ve.PostgrestQueryBuilder=l.default;const s=r(oc());Ve.PostgrestFilterBuilder=s.default;const u=r(Tm());Ve.PostgrestTransformBuilder=u.default;const d=r(km());Ve.PostgrestBuilder=d.default;const f=r(Em());return Ve.PostgrestError=f.default,Ve.default={PostgrestClient:i.default,PostgrestQueryBuilder:l.default,PostgrestFilterBuilder:s.default,PostgrestTransformBuilder:u.default,PostgrestBuilder:d.default,PostgrestError:f.default},Ve}var Iy=Wy();const e2=I0(Iy),{PostgrestClient:t2,PostgrestQueryBuilder:Kb,PostgrestFilterBuilder:Xb,PostgrestTransformBuilder:Qb,PostgrestBuilder:Pb,PostgrestError:Jb}=e2;function a2(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const n2=a2(),i2="2.11.15",l2=`realtime-js/${i2}`,r2="1.0.0",zm=1e4,s2=1e3;var xl;(function(r){r[r.connecting=0]="connecting",r[r.open=1]="open",r[r.closing=2]="closing",r[r.closed=3]="closed"})(xl||(xl={}));var et;(function(r){r.closed="closed",r.errored="errored",r.joined="joined",r.joining="joining",r.leaving="leaving"})(et||(et={}));var Rt;(function(r){r.close="phx_close",r.error="phx_error",r.join="phx_join",r.reply="phx_reply",r.leave="phx_leave",r.access_token="access_token"})(Rt||(Rt={}));var Qu;(function(r){r.websocket="websocket"})(Qu||(Qu={}));var sn;(function(r){r.Connecting="connecting",r.Open="open",r.Closing="closing",r.Closed="closed"})(sn||(sn={}));class o2{constructor(){this.HEADER_LENGTH=1}decode(i,l){return i.constructor===ArrayBuffer?l(this._binaryDecode(i)):l(typeof i=="string"?JSON.parse(i):{})}_binaryDecode(i){const l=new DataView(i),s=new TextDecoder;return this._decodeBroadcast(i,l,s)}_decodeBroadcast(i,l,s){const u=l.getUint8(1),d=l.getUint8(2);let f=this.HEADER_LENGTH+2;const v=s.decode(i.slice(f,f+u));f=f+u;const m=s.decode(i.slice(f,f+d));f=f+d;const p=JSON.parse(s.decode(i.slice(f,i.byteLength)));return{ref:null,topic:v,event:m,payload:p}}}class Nm{constructor(i,l){this.callback=i,this.timerCalc=l,this.timer=void 0,this.tries=0,this.callback=i,this.timerCalc=l}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ke;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(ke||(ke={}));const q0=(r,i,l={})=>{var s;const u=(s=l.skipTypes)!==null&&s!==void 0?s:[];return Object.keys(i).reduce((d,f)=>(d[f]=u2(f,r,i,u),d),{})},u2=(r,i,l,s)=>{const u=i.find(v=>v.name===r),d=u?.type,f=l[r];return d&&!s.includes(d)?Om(d,f):Pu(f)},Om=(r,i)=>{if(r.charAt(0)==="_"){const l=r.slice(1,r.length);return h2(i,l)}switch(r){case ke.bool:return c2(i);case ke.float4:case ke.float8:case ke.int2:case ke.int4:case ke.int8:case ke.numeric:case ke.oid:return d2(i);case ke.json:case ke.jsonb:return f2(i);case ke.timestamp:return m2(i);case ke.abstime:case ke.date:case ke.daterange:case ke.int4range:case ke.int8range:case ke.money:case ke.reltime:case ke.text:case ke.time:case ke.timestamptz:case ke.timetz:case ke.tsrange:case ke.tstzrange:return Pu(i);default:return Pu(i)}},Pu=r=>r,c2=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},d2=r=>{if(typeof r=="string"){const i=parseFloat(r);if(!Number.isNaN(i))return i}return r},f2=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch(i){return console.log(`JSON parse error: ${i}`),r}return r},h2=(r,i)=>{if(typeof r!="string")return r;const l=r.length-1,s=r[l];if(r[0]==="{"&&s==="}"){let d;const f=r.slice(1,l);try{d=JSON.parse("["+f+"]")}catch{d=f?f.split(","):[]}return d.map(v=>Om(i,v))}return r},m2=r=>typeof r=="string"?r.replace(" ","T"):r,Rm=r=>{let i=r;return i=i.replace(/^ws/i,"http"),i=i.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),i.replace(/\/+$/,"")};class Uu{constructor(i,l,s={},u=zm){this.channel=i,this.event=l,this.payload=s,this.timeout=u,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(i){this.timeout=i,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(i){this.payload=Object.assign(Object.assign({},this.payload),i)}receive(i,l){var s;return this._hasReceived(i)&&l((s=this.receivedResp)===null||s===void 0?void 0:s.response),this.recHooks.push({status:i,callback:l}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const i=l=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=l,this._matchReceive(l)};this.channel._on(this.refEvent,{},i),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(i,l){this.refEvent&&this.channel._trigger(this.refEvent,{status:i,response:l})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:i,response:l}){this.recHooks.filter(s=>s.status===i).forEach(s=>s.callback(l))}_hasReceived(i){return this.receivedResp&&this.receivedResp.status===i}}var H0;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(H0||(H0={}));class wl{constructor(i,l){this.channel=i,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const s=l?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(s.state,{},u=>{const{onJoin:d,onLeave:f,onSync:v}=this.caller;this.joinRef=this.channel._joinRef(),this.state=wl.syncState(this.state,u,d,f),this.pendingDiffs.forEach(m=>{this.state=wl.syncDiff(this.state,m,d,f)}),this.pendingDiffs=[],v()}),this.channel._on(s.diff,{},u=>{const{onJoin:d,onLeave:f,onSync:v}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(u):(this.state=wl.syncDiff(this.state,u,d,f),v())}),this.onJoin((u,d,f)=>{this.channel._trigger("presence",{event:"join",key:u,currentPresences:d,newPresences:f})}),this.onLeave((u,d,f)=>{this.channel._trigger("presence",{event:"leave",key:u,currentPresences:d,leftPresences:f})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(i,l,s,u){const d=this.cloneDeep(i),f=this.transformState(l),v={},m={};return this.map(d,(p,b)=>{f[p]||(m[p]=b)}),this.map(f,(p,b)=>{const w=d[p];if(w){const S=b.map(D=>D.presence_ref),k=w.map(D=>D.presence_ref),_=b.filter(D=>k.indexOf(D.presence_ref)<0),U=w.filter(D=>S.indexOf(D.presence_ref)<0);_.length>0&&(v[p]=_),U.length>0&&(m[p]=U)}else v[p]=b}),this.syncDiff(d,{joins:v,leaves:m},s,u)}static syncDiff(i,l,s,u){const{joins:d,leaves:f}={joins:this.transformState(l.joins),leaves:this.transformState(l.leaves)};return s||(s=()=>{}),u||(u=()=>{}),this.map(d,(v,m)=>{var p;const b=(p=i[v])!==null&&p!==void 0?p:[];if(i[v]=this.cloneDeep(m),b.length>0){const w=i[v].map(k=>k.presence_ref),S=b.filter(k=>w.indexOf(k.presence_ref)<0);i[v].unshift(...S)}s(v,b,m)}),this.map(f,(v,m)=>{let p=i[v];if(!p)return;const b=m.map(w=>w.presence_ref);p=p.filter(w=>b.indexOf(w.presence_ref)<0),i[v]=p,u(v,p,m),p.length===0&&delete i[v]}),i}static map(i,l){return Object.getOwnPropertyNames(i).map(s=>l(s,i[s]))}static transformState(i){return i=this.cloneDeep(i),Object.getOwnPropertyNames(i).reduce((l,s)=>{const u=i[s];return"metas"in u?l[s]=u.metas.map(d=>(d.presence_ref=d.phx_ref,delete d.phx_ref,delete d.phx_ref_prev,d)):l[s]=u,l},{})}static cloneDeep(i){return JSON.parse(JSON.stringify(i))}onJoin(i){this.caller.onJoin=i}onLeave(i){this.caller.onLeave=i}onSync(i){this.caller.onSync=i}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var L0;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(L0||(L0={}));var G0;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(G0||(G0={}));var na;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(na||(na={}));class uc{constructor(i,l={config:{}},s){this.topic=i,this.params=l,this.socket=s,this.bindings={},this.state=et.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=i.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},l.config),this.timeout=this.socket.timeout,this.joinPush=new Uu(this,Rt.join,this.params,this.timeout),this.rejoinTimer=new Nm(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=et.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(u=>u.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=et.closed,this.socket._remove(this)}),this._onError(u=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,u),this.state=et.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=et.errored,this.rejoinTimer.scheduleTimeout())}),this._on(Rt.reply,{},(u,d)=>{this._trigger(this._replyEventName(d),u)}),this.presence=new wl(this),this.broadcastEndpointURL=Rm(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(i,l=this.timeout){var s,u;if(this.socket.isConnected()||this.socket.connect(),this.state==et.closed){const{config:{broadcast:d,presence:f,private:v}}=this.params;this._onError(b=>i?.(na.CHANNEL_ERROR,b)),this._onClose(()=>i?.(na.CLOSED));const m={},p={broadcast:d,presence:f,postgres_changes:(u=(s=this.bindings.postgres_changes)===null||s===void 0?void 0:s.map(b=>b.filter))!==null&&u!==void 0?u:[],private:v};this.socket.accessTokenValue&&(m.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:p},m)),this.joinedOnce=!0,this._rejoin(l),this.joinPush.receive("ok",async({postgres_changes:b})=>{var w;if(this.socket.setAuth(),b===void 0){i?.(na.SUBSCRIBED);return}else{const S=this.bindings.postgres_changes,k=(w=S?.length)!==null&&w!==void 0?w:0,_=[];for(let U=0;U<k;U++){const D=S[U],{filter:{event:A,schema:q,table:G,filter:Q}}=D,$=b&&b[U];if($&&$.event===A&&$.schema===q&&$.table===G&&$.filter===Q)_.push(Object.assign(Object.assign({},D),{id:$.id}));else{this.unsubscribe(),this.state=et.errored,i?.(na.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=_,i&&i(na.SUBSCRIBED);return}}).receive("error",b=>{this.state=et.errored,i?.(na.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(b).join(", ")||"error")))}).receive("timeout",()=>{i?.(na.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(i,l={}){return await this.send({type:"presence",event:"track",payload:i},l.timeout||this.timeout)}async untrack(i={}){return await this.send({type:"presence",event:"untrack"},i)}on(i,l,s){return this._on(i,l,s)}async send(i,l={}){var s,u;if(!this._canPush()&&i.type==="broadcast"){const{event:d,payload:f}=i,m={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:d,payload:f,private:this.private}]})};try{const p=await this._fetchWithTimeout(this.broadcastEndpointURL,m,(s=l.timeout)!==null&&s!==void 0?s:this.timeout);return await((u=p.body)===null||u===void 0?void 0:u.cancel()),p.ok?"ok":"error"}catch(p){return p.name==="AbortError"?"timed out":"error"}}else return new Promise(d=>{var f,v,m;const p=this._push(i.type,i,l.timeout||this.timeout);i.type==="broadcast"&&!(!((m=(v=(f=this.params)===null||f===void 0?void 0:f.config)===null||v===void 0?void 0:v.broadcast)===null||m===void 0)&&m.ack)&&d("ok"),p.receive("ok",()=>d("ok")),p.receive("error",()=>d("error")),p.receive("timeout",()=>d("timed out"))})}updateJoinPayload(i){this.joinPush.updatePayload(i)}unsubscribe(i=this.timeout){this.state=et.leaving;const l=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(Rt.close,"leave",this._joinRef())};this.joinPush.destroy();let s=null;return new Promise(u=>{s=new Uu(this,Rt.leave,{},i),s.receive("ok",()=>{l(),u("ok")}).receive("timeout",()=>{l(),u("timed out")}).receive("error",()=>{u("error")}),s.send(),this._canPush()||s.trigger("ok",{})}).finally(()=>{s?.destroy()})}teardown(){this.pushBuffer.forEach(i=>i.destroy()),this.rejoinTimer&&clearTimeout(this.rejoinTimer.timer),this.joinPush.destroy()}async _fetchWithTimeout(i,l,s){const u=new AbortController,d=setTimeout(()=>u.abort(),s),f=await this.socket.fetch(i,Object.assign(Object.assign({},l),{signal:u.signal}));return clearTimeout(d),f}_push(i,l,s=this.timeout){if(!this.joinedOnce)throw`tried to push '${i}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let u=new Uu(this,i,l,s);return this._canPush()?u.send():(u.startTimeout(),this.pushBuffer.push(u)),u}_onMessage(i,l,s){return l}_isMember(i){return this.topic===i}_joinRef(){return this.joinPush.ref}_trigger(i,l,s){var u,d;const f=i.toLocaleLowerCase(),{close:v,error:m,leave:p,join:b}=Rt;if(s&&[v,m,p,b].indexOf(f)>=0&&s!==this._joinRef())return;let S=this._onMessage(f,l,s);if(l&&!S)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(f)?(u=this.bindings.postgres_changes)===null||u===void 0||u.filter(k=>{var _,U,D;return((_=k.filter)===null||_===void 0?void 0:_.event)==="*"||((D=(U=k.filter)===null||U===void 0?void 0:U.event)===null||D===void 0?void 0:D.toLocaleLowerCase())===f}).map(k=>k.callback(S,s)):(d=this.bindings[f])===null||d===void 0||d.filter(k=>{var _,U,D,A,q,G;if(["broadcast","presence","postgres_changes"].includes(f))if("id"in k){const Q=k.id,$=(_=k.filter)===null||_===void 0?void 0:_.event;return Q&&((U=l.ids)===null||U===void 0?void 0:U.includes(Q))&&($==="*"||$?.toLocaleLowerCase()===((D=l.data)===null||D===void 0?void 0:D.type.toLocaleLowerCase()))}else{const Q=(q=(A=k?.filter)===null||A===void 0?void 0:A.event)===null||q===void 0?void 0:q.toLocaleLowerCase();return Q==="*"||Q===((G=l?.event)===null||G===void 0?void 0:G.toLocaleLowerCase())}else return k.type.toLocaleLowerCase()===f}).map(k=>{if(typeof S=="object"&&"ids"in S){const _=S.data,{schema:U,table:D,commit_timestamp:A,type:q,errors:G}=_;S=Object.assign(Object.assign({},{schema:U,table:D,commit_timestamp:A,eventType:q,new:{},old:{},errors:G}),this._getPayloadRecords(_))}k.callback(S,s)})}_isClosed(){return this.state===et.closed}_isJoined(){return this.state===et.joined}_isJoining(){return this.state===et.joining}_isLeaving(){return this.state===et.leaving}_replyEventName(i){return`chan_reply_${i}`}_on(i,l,s){const u=i.toLocaleLowerCase(),d={type:u,filter:l,callback:s};return this.bindings[u]?this.bindings[u].push(d):this.bindings[u]=[d],this}_off(i,l){const s=i.toLocaleLowerCase();return this.bindings[s]=this.bindings[s].filter(u=>{var d;return!(((d=u.type)===null||d===void 0?void 0:d.toLocaleLowerCase())===s&&uc.isEqual(u.filter,l))}),this}static isEqual(i,l){if(Object.keys(i).length!==Object.keys(l).length)return!1;for(const s in i)if(i[s]!==l[s])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(i){this._on(Rt.close,{},i)}_onError(i){this._on(Rt.error,{},l=>i(l))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(i=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=et.joining,this.joinPush.resend(i))}_getPayloadRecords(i){const l={new:{},old:{}};return(i.type==="INSERT"||i.type==="UPDATE")&&(l.new=q0(i.columns,i.record)),(i.type==="UPDATE"||i.type==="DELETE")&&(l.old=q0(i.columns,i.old_record)),l}}const Y0=()=>{},g2=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class p2{constructor(i,l){var s;this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=zm,this.heartbeatIntervalMs=25e3,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=Y0,this.ref=0,this.logger=Y0,this.conn=null,this.sendBuffer=[],this.serializer=new o2,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=d=>{let f;return d?f=d:typeof fetch>"u"?f=(...v)=>Nl(async()=>{const{default:m}=await Promise.resolve().then(()=>di);return{default:m}},void 0).then(({default:m})=>m(...v)):f=fetch,(...v)=>f(...v)},this.endPoint=`${i}/${Qu.websocket}`,this.httpEndpoint=Rm(i),l?.transport?this.transport=l.transport:this.transport=null,l?.params&&(this.params=l.params),l?.timeout&&(this.timeout=l.timeout),l?.logger&&(this.logger=l.logger),(l?.logLevel||l?.log_level)&&(this.logLevel=l.logLevel||l.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),l?.heartbeatIntervalMs&&(this.heartbeatIntervalMs=l.heartbeatIntervalMs);const u=(s=l?.params)===null||s===void 0?void 0:s.apikey;if(u&&(this.accessTokenValue=u,this.apiKey=u),this.reconnectAfterMs=l?.reconnectAfterMs?l.reconnectAfterMs:d=>[1e3,2e3,5e3,1e4][d-1]||1e4,this.encode=l?.encode?l.encode:(d,f)=>f(JSON.stringify(d)),this.decode=l?.decode?l.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new Nm(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(l?.fetch),l?.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=l?.worker||!1,this.workerUrl=l?.workerUrl}this.accessToken=l?.accessToken||null}connect(){if(!this.conn){if(this.transport||(this.transport=n2),!this.transport)throw new Error("No transport provided");this.conn=new this.transport(this.endpointURL()),this.setupConnection()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:r2}))}disconnect(i,l){this.conn&&(this.conn.onclose=function(){},i?this.conn.close(i,l??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset(),this.channels.forEach(s=>s.teardown()))}getChannels(){return this.channels}async removeChannel(i){const l=await i.unsubscribe();return this.channels.length===0&&this.disconnect(),l}async removeAllChannels(){const i=await Promise.all(this.channels.map(l=>l.unsubscribe()));return this.channels=[],this.disconnect(),i}log(i,l,s){this.logger(i,l,s)}connectionState(){switch(this.conn&&this.conn.readyState){case xl.connecting:return sn.Connecting;case xl.open:return sn.Open;case xl.closing:return sn.Closing;default:return sn.Closed}}isConnected(){return this.connectionState()===sn.Open}channel(i,l={config:{}}){const s=`realtime:${i}`,u=this.getChannels().find(d=>d.topic===s);if(u)return u;{const d=new uc(`realtime:${i}`,l,this);return this.channels.push(d),d}}push(i){const{topic:l,event:s,payload:u,ref:d}=i,f=()=>{this.encode(i,v=>{var m;(m=this.conn)===null||m===void 0||m.send(v)})};this.log("push",`${l} ${s} (${d})`,u),this.isConnected()?f():this.sendBuffer.push(f)}async setAuth(i=null){let l=i||this.accessToken&&await this.accessToken()||this.accessTokenValue;this.accessTokenValue!=l&&(this.accessTokenValue=l,this.channels.forEach(s=>{const u={access_token:l,version:l2};l&&s.updateJoinPayload(u),s.joinedOnce&&s._isJoined()&&s._push(Rt.access_token,{access_token:l})}))}async sendHeartbeat(){var i;if(!this.isConnected()){this.heartbeatCallback("disconnected");return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.heartbeatCallback("timeout"),(i=this.conn)===null||i===void 0||i.close(s2,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatCallback("sent"),await this.setAuth()}onHeartbeat(i){this.heartbeatCallback=i}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(i=>i()),this.sendBuffer=[])}_makeRef(){let i=this.ref+1;return i===this.ref?this.ref=0:this.ref=i,this.ref.toString()}_leaveOpenTopic(i){let l=this.channels.find(s=>s.topic===i&&(s._isJoined()||s._isJoining()));l&&(this.log("transport",`leaving duplicate topic "${i}"`),l.unsubscribe())}_remove(i){this.channels=this.channels.filter(l=>l.topic!==i.topic)}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=i=>this._onConnError(i),this.conn.onmessage=i=>this._onConnMessage(i),this.conn.onclose=i=>this._onConnClose(i))}_onConnMessage(i){this.decode(i.data,l=>{let{topic:s,event:u,payload:d,ref:f}=l;s==="phoenix"&&u==="phx_reply"&&this.heartbeatCallback(l.payload.status=="ok"?"ok":"error"),f&&f===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${d.status||""} ${s} ${u} ${f&&"("+f+")"||""}`,d),Array.from(this.channels).filter(v=>v._isMember(s)).forEach(v=>v._trigger(u,d,f)),this.stateChangeCallbacks.message.forEach(v=>v(l))})}_onConnOpen(){this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this.stateChangeCallbacks.open.forEach(i=>i())}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const i=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(i),this.workerRef.onerror=l=>{this.log("worker","worker error",l.message),this.workerRef.terminate()},this.workerRef.onmessage=l=>{l.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(i){this.log("transport","close",i),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(l=>l(i))}_onConnError(i){this.log("transport",`${i}`),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(l=>l(i))}_triggerChanError(){this.channels.forEach(i=>i._trigger(Rt.error))}_appendParams(i,l){if(Object.keys(l).length===0)return i;const s=i.match(/\?/)?"&":"?",u=new URLSearchParams(l);return`${i}${s}${u}`}_workerObjectUrl(i){let l;if(i)l=i;else{const s=new Blob([g2],{type:"application/javascript"});l=URL.createObjectURL(s)}return l}}class cc extends Error{constructor(i){super(i),this.__isStorageError=!0,this.name="StorageError"}}function Ze(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}class v2 extends cc{constructor(i,l){super(i),this.name="StorageApiError",this.status=l}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class Ju extends cc{constructor(i,l){super(i),this.name="StorageUnknownError",this.originalError=l}}var y2=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};const Cm=r=>{let i;return r?i=r:typeof fetch>"u"?i=(...l)=>Nl(async()=>{const{default:s}=await Promise.resolve().then(()=>di);return{default:s}},void 0).then(({default:s})=>s(...l)):i=fetch,(...l)=>i(...l)},b2=()=>y2(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Nl(()=>Promise.resolve().then(()=>di),void 0)).Response:Response}),Fu=r=>{if(Array.isArray(r))return r.map(l=>Fu(l));if(typeof r=="function"||r!==Object(r))return r;const i={};return Object.entries(r).forEach(([l,s])=>{const u=l.replace(/([-_][a-z])/gi,d=>d.toUpperCase().replace(/[-_]/g,""));i[u]=Fu(s)}),i};var cn=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};const Bu=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),x2=(r,i,l)=>cn(void 0,void 0,void 0,function*(){const s=yield b2();r instanceof s&&!l?.noResolveJson?r.json().then(u=>{i(new v2(Bu(u),r.status||500))}).catch(u=>{i(new Ju(Bu(u),u))}):i(new Ju(Bu(r),r))}),w2=(r,i,l,s)=>{const u={method:r,headers:i?.headers||{}};return r==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json"},i?.headers),s&&(u.body=JSON.stringify(s)),Object.assign(Object.assign({},u),l))};function Ol(r,i,l,s,u,d){return cn(this,void 0,void 0,function*(){return new Promise((f,v)=>{r(l,w2(i,s,u,d)).then(m=>{if(!m.ok)throw m;return s?.noResolveJson?m:m.json()}).then(m=>f(m)).catch(m=>x2(m,v,s))})})}function ls(r,i,l,s){return cn(this,void 0,void 0,function*(){return Ol(r,"GET",i,l,s)})}function Da(r,i,l,s,u){return cn(this,void 0,void 0,function*(){return Ol(r,"POST",i,s,u,l)})}function _2(r,i,l,s,u){return cn(this,void 0,void 0,function*(){return Ol(r,"PUT",i,s,u,l)})}function S2(r,i,l,s){return cn(this,void 0,void 0,function*(){return Ol(r,"HEAD",i,Object.assign(Object.assign({},l),{noResolveJson:!0}),s)})}function Dm(r,i,l,s,u){return cn(this,void 0,void 0,function*(){return Ol(r,"DELETE",i,s,u,l)})}var ot=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};const j2={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},$0={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class E2{constructor(i,l={},s,u){this.url=i,this.headers=l,this.bucketId=s,this.fetch=Cm(u)}uploadOrUpdate(i,l,s,u){return ot(this,void 0,void 0,function*(){try{let d;const f=Object.assign(Object.assign({},$0),u);let v=Object.assign(Object.assign({},this.headers),i==="POST"&&{"x-upsert":String(f.upsert)});const m=f.metadata;typeof Blob<"u"&&s instanceof Blob?(d=new FormData,d.append("cacheControl",f.cacheControl),m&&d.append("metadata",this.encodeMetadata(m)),d.append("",s)):typeof FormData<"u"&&s instanceof FormData?(d=s,d.append("cacheControl",f.cacheControl),m&&d.append("metadata",this.encodeMetadata(m))):(d=s,v["cache-control"]=`max-age=${f.cacheControl}`,v["content-type"]=f.contentType,m&&(v["x-metadata"]=this.toBase64(this.encodeMetadata(m)))),u?.headers&&(v=Object.assign(Object.assign({},v),u.headers));const p=this._removeEmptyFolders(l),b=this._getFinalPath(p),w=yield this.fetch(`${this.url}/object/${b}`,Object.assign({method:i,body:d,headers:v},f?.duplex?{duplex:f.duplex}:{})),S=yield w.json();return w.ok?{data:{path:p,id:S.Id,fullPath:S.Key},error:null}:{data:null,error:S}}catch(d){if(Ze(d))return{data:null,error:d};throw d}})}upload(i,l,s){return ot(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",i,l,s)})}uploadToSignedUrl(i,l,s,u){return ot(this,void 0,void 0,function*(){const d=this._removeEmptyFolders(i),f=this._getFinalPath(d),v=new URL(this.url+`/object/upload/sign/${f}`);v.searchParams.set("token",l);try{let m;const p=Object.assign({upsert:$0.upsert},u),b=Object.assign(Object.assign({},this.headers),{"x-upsert":String(p.upsert)});typeof Blob<"u"&&s instanceof Blob?(m=new FormData,m.append("cacheControl",p.cacheControl),m.append("",s)):typeof FormData<"u"&&s instanceof FormData?(m=s,m.append("cacheControl",p.cacheControl)):(m=s,b["cache-control"]=`max-age=${p.cacheControl}`,b["content-type"]=p.contentType);const w=yield this.fetch(v.toString(),{method:"PUT",body:m,headers:b}),S=yield w.json();return w.ok?{data:{path:d,fullPath:S.Key},error:null}:{data:null,error:S}}catch(m){if(Ze(m))return{data:null,error:m};throw m}})}createSignedUploadUrl(i,l){return ot(this,void 0,void 0,function*(){try{let s=this._getFinalPath(i);const u=Object.assign({},this.headers);l?.upsert&&(u["x-upsert"]="true");const d=yield Da(this.fetch,`${this.url}/object/upload/sign/${s}`,{},{headers:u}),f=new URL(this.url+d.url),v=f.searchParams.get("token");if(!v)throw new cc("No token returned by API");return{data:{signedUrl:f.toString(),path:i,token:v},error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}update(i,l,s){return ot(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",i,l,s)})}move(i,l,s){return ot(this,void 0,void 0,function*(){try{return{data:yield Da(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:i,destinationKey:l,destinationBucket:s?.destinationBucket},{headers:this.headers}),error:null}}catch(u){if(Ze(u))return{data:null,error:u};throw u}})}copy(i,l,s){return ot(this,void 0,void 0,function*(){try{return{data:{path:(yield Da(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:i,destinationKey:l,destinationBucket:s?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(u){if(Ze(u))return{data:null,error:u};throw u}})}createSignedUrl(i,l,s){return ot(this,void 0,void 0,function*(){try{let u=this._getFinalPath(i),d=yield Da(this.fetch,`${this.url}/object/sign/${u}`,Object.assign({expiresIn:l},s?.transform?{transform:s.transform}:{}),{headers:this.headers});const f=s?.download?`&download=${s.download===!0?"":s.download}`:"";return d={signedUrl:encodeURI(`${this.url}${d.signedURL}${f}`)},{data:d,error:null}}catch(u){if(Ze(u))return{data:null,error:u};throw u}})}createSignedUrls(i,l,s){return ot(this,void 0,void 0,function*(){try{const u=yield Da(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:l,paths:i},{headers:this.headers}),d=s?.download?`&download=${s.download===!0?"":s.download}`:"";return{data:u.map(f=>Object.assign(Object.assign({},f),{signedUrl:f.signedURL?encodeURI(`${this.url}${f.signedURL}${d}`):null})),error:null}}catch(u){if(Ze(u))return{data:null,error:u};throw u}})}download(i,l){return ot(this,void 0,void 0,function*(){const u=typeof l?.transform<"u"?"render/image/authenticated":"object",d=this.transformOptsToQueryString(l?.transform||{}),f=d?`?${d}`:"";try{const v=this._getFinalPath(i);return{data:yield(yield ls(this.fetch,`${this.url}/${u}/${v}${f}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(v){if(Ze(v))return{data:null,error:v};throw v}})}info(i){return ot(this,void 0,void 0,function*(){const l=this._getFinalPath(i);try{const s=yield ls(this.fetch,`${this.url}/object/info/${l}`,{headers:this.headers});return{data:Fu(s),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}exists(i){return ot(this,void 0,void 0,function*(){const l=this._getFinalPath(i);try{return yield S2(this.fetch,`${this.url}/object/${l}`,{headers:this.headers}),{data:!0,error:null}}catch(s){if(Ze(s)&&s instanceof Ju){const u=s.originalError;if([400,404].includes(u?.status))return{data:!1,error:s}}throw s}})}getPublicUrl(i,l){const s=this._getFinalPath(i),u=[],d=l?.download?`download=${l.download===!0?"":l.download}`:"";d!==""&&u.push(d);const v=typeof l?.transform<"u"?"render/image":"object",m=this.transformOptsToQueryString(l?.transform||{});m!==""&&u.push(m);let p=u.join("&");return p!==""&&(p=`?${p}`),{data:{publicUrl:encodeURI(`${this.url}/${v}/public/${s}${p}`)}}}remove(i){return ot(this,void 0,void 0,function*(){try{return{data:yield Dm(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:i},{headers:this.headers}),error:null}}catch(l){if(Ze(l))return{data:null,error:l};throw l}})}list(i,l,s){return ot(this,void 0,void 0,function*(){try{const u=Object.assign(Object.assign(Object.assign({},j2),l),{prefix:i||""});return{data:yield Da(this.fetch,`${this.url}/object/list/${this.bucketId}`,u,{headers:this.headers},s),error:null}}catch(u){if(Ze(u))return{data:null,error:u};throw u}})}encodeMetadata(i){return JSON.stringify(i)}toBase64(i){return typeof Buffer<"u"?Buffer.from(i).toString("base64"):btoa(i)}_getFinalPath(i){return`${this.bucketId}/${i}`}_removeEmptyFolders(i){return i.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(i){const l=[];return i.width&&l.push(`width=${i.width}`),i.height&&l.push(`height=${i.height}`),i.resize&&l.push(`resize=${i.resize}`),i.format&&l.push(`format=${i.format}`),i.quality&&l.push(`quality=${i.quality}`),l.join("&")}}const k2="2.7.1",T2={"X-Client-Info":`storage-js/${k2}`};var ti=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};class A2{constructor(i,l={},s){this.url=i,this.headers=Object.assign(Object.assign({},T2),l),this.fetch=Cm(s)}listBuckets(){return ti(this,void 0,void 0,function*(){try{return{data:yield ls(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(i){if(Ze(i))return{data:null,error:i};throw i}})}getBucket(i){return ti(this,void 0,void 0,function*(){try{return{data:yield ls(this.fetch,`${this.url}/bucket/${i}`,{headers:this.headers}),error:null}}catch(l){if(Ze(l))return{data:null,error:l};throw l}})}createBucket(i,l={public:!1}){return ti(this,void 0,void 0,function*(){try{return{data:yield Da(this.fetch,`${this.url}/bucket`,{id:i,name:i,public:l.public,file_size_limit:l.fileSizeLimit,allowed_mime_types:l.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}updateBucket(i,l){return ti(this,void 0,void 0,function*(){try{return{data:yield _2(this.fetch,`${this.url}/bucket/${i}`,{id:i,name:i,public:l.public,file_size_limit:l.fileSizeLimit,allowed_mime_types:l.allowedMimeTypes},{headers:this.headers}),error:null}}catch(s){if(Ze(s))return{data:null,error:s};throw s}})}emptyBucket(i){return ti(this,void 0,void 0,function*(){try{return{data:yield Da(this.fetch,`${this.url}/bucket/${i}/empty`,{},{headers:this.headers}),error:null}}catch(l){if(Ze(l))return{data:null,error:l};throw l}})}deleteBucket(i){return ti(this,void 0,void 0,function*(){try{return{data:yield Dm(this.fetch,`${this.url}/bucket/${i}`,{},{headers:this.headers}),error:null}}catch(l){if(Ze(l))return{data:null,error:l};throw l}})}}class z2 extends A2{constructor(i,l={},s){super(i,l,s)}from(i){return new E2(this.url,this.headers,i,this.fetch)}}const N2="2.50.5";let vl="";typeof Deno<"u"?vl="deno":typeof document<"u"?vl="web":typeof navigator<"u"&&navigator.product==="ReactNative"?vl="react-native":vl="node";const O2={"X-Client-Info":`supabase-js-${vl}/${N2}`},R2={headers:O2},C2={schema:"public"},D2={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},M2={};var U2=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};const B2=r=>{let i;return r?i=r:typeof fetch>"u"?i=Sm:i=fetch,(...l)=>i(...l)},q2=()=>typeof Headers>"u"?jm:Headers,H2=(r,i,l)=>{const s=B2(l),u=q2();return(d,f)=>U2(void 0,void 0,void 0,function*(){var v;const m=(v=yield i())!==null&&v!==void 0?v:r;let p=new u(f?.headers);return p.has("apikey")||p.set("apikey",r),p.has("Authorization")||p.set("Authorization",`Bearer ${m}`),s(d,Object.assign(Object.assign({},f),{headers:p}))})};var L2=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};function G2(r){return r.endsWith("/")?r:r+"/"}function Y2(r,i){var l,s;const{db:u,auth:d,realtime:f,global:v}=r,{db:m,auth:p,realtime:b,global:w}=i,S={db:Object.assign(Object.assign({},m),u),auth:Object.assign(Object.assign({},p),d),realtime:Object.assign(Object.assign({},b),f),global:Object.assign(Object.assign(Object.assign({},w),v),{headers:Object.assign(Object.assign({},(l=w?.headers)!==null&&l!==void 0?l:{}),(s=v?.headers)!==null&&s!==void 0?s:{})}),accessToken:()=>L2(this,void 0,void 0,function*(){return""})};return r.accessToken?S.accessToken=r.accessToken:delete S.accessToken,S}const Mm="2.70.0",ri=30*1e3,Wu=3,qu=Wu*ri,$2="http://localhost:9999",V2="supabase.auth.token",Z2={"X-Client-Info":`gotrue-js/${Mm}`},Iu="X-Supabase-Api-Version",Um={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},K2=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,X2=6e5;class dc extends Error{constructor(i,l,s){super(i),this.__isAuthError=!0,this.name="AuthError",this.status=l,this.code=s}}function ie(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class Q2 extends dc{constructor(i,l,s){super(i,l,s),this.name="AuthApiError",this.status=l,this.code=s}}function P2(r){return ie(r)&&r.name==="AuthApiError"}class Bm extends dc{constructor(i,l){super(i),this.name="AuthUnknownError",this.originalError=l}}class Ba extends dc{constructor(i,l,s,u){super(i,s,u),this.name=l,this.status=s}}class Ca extends Ba{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function J2(r){return ie(r)&&r.name==="AuthSessionMissingError"}class Pr extends Ba{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Jr extends Ba{constructor(i){super(i,"AuthInvalidCredentialsError",400,void 0)}}class Fr extends Ba{constructor(i,l=null){super(i,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=l}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function F2(r){return ie(r)&&r.name==="AuthImplicitGrantRedirectError"}class V0 extends Ba{constructor(i,l=null){super(i,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=l}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class ec extends Ba{constructor(i,l){super(i,"AuthRetryableFetchError",l,void 0)}}function Hu(r){return ie(r)&&r.name==="AuthRetryableFetchError"}class Z0 extends Ba{constructor(i,l,s){super(i,"AuthWeakPasswordError",l,"weak_password"),this.reasons=s}}class _l extends Ba{constructor(i){super(i,"AuthInvalidJwtError",400,"invalid_jwt")}}const rs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),K0=` 	
\r=`.split(""),W2=(()=>{const r=new Array(128);for(let i=0;i<r.length;i+=1)r[i]=-1;for(let i=0;i<K0.length;i+=1)r[K0[i].charCodeAt(0)]=-2;for(let i=0;i<rs.length;i+=1)r[rs[i].charCodeAt(0)]=i;return r})();function X0(r,i,l){if(r!==null)for(i.queue=i.queue<<8|r,i.queuedBits+=8;i.queuedBits>=6;){const s=i.queue>>i.queuedBits-6&63;l(rs[s]),i.queuedBits-=6}else if(i.queuedBits>0)for(i.queue=i.queue<<6-i.queuedBits,i.queuedBits=6;i.queuedBits>=6;){const s=i.queue>>i.queuedBits-6&63;l(rs[s]),i.queuedBits-=6}}function qm(r,i,l){const s=W2[r];if(s>-1)for(i.queue=i.queue<<6|s,i.queuedBits+=6;i.queuedBits>=8;)l(i.queue>>i.queuedBits-8&255),i.queuedBits-=8;else{if(s===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function Q0(r){const i=[],l=f=>{i.push(String.fromCodePoint(f))},s={utf8seq:0,codepoint:0},u={queue:0,queuedBits:0},d=f=>{tb(f,s,l)};for(let f=0;f<r.length;f+=1)qm(r.charCodeAt(f),u,d);return i.join("")}function I2(r,i){if(r<=127){i(r);return}else if(r<=2047){i(192|r>>6),i(128|r&63);return}else if(r<=65535){i(224|r>>12),i(128|r>>6&63),i(128|r&63);return}else if(r<=1114111){i(240|r>>18),i(128|r>>12&63),i(128|r>>6&63),i(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function eb(r,i){for(let l=0;l<r.length;l+=1){let s=r.charCodeAt(l);if(s>55295&&s<=56319){const u=(s-55296)*1024&65535;s=(r.charCodeAt(l+1)-56320&65535|u)+65536,l+=1}I2(s,i)}}function tb(r,i,l){if(i.utf8seq===0){if(r<=127){l(r);return}for(let s=1;s<6;s+=1)if((r>>7-s&1)===0){i.utf8seq=s;break}if(i.utf8seq===2)i.codepoint=r&31;else if(i.utf8seq===3)i.codepoint=r&15;else if(i.utf8seq===4)i.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");i.utf8seq-=1}else if(i.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");i.codepoint=i.codepoint<<6|r&63,i.utf8seq-=1,i.utf8seq===0&&l(i.codepoint)}}function ab(r){const i=[],l={queue:0,queuedBits:0},s=u=>{i.push(u)};for(let u=0;u<r.length;u+=1)qm(r.charCodeAt(u),l,s);return new Uint8Array(i)}function nb(r){const i=[];return eb(r,l=>i.push(l)),new Uint8Array(i)}function ib(r){const i=[],l={queue:0,queuedBits:0},s=u=>{i.push(u)};return r.forEach(u=>X0(u,l,s)),X0(null,l,s),i.join("")}function lb(r){return Math.round(Date.now()/1e3)+r}function rb(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){const i=Math.random()*16|0;return(r=="x"?i:i&3|8).toString(16)})}const Ot=()=>typeof window<"u"&&typeof document<"u",ln={tested:!1,writable:!1},Sl=()=>{if(!Ot())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ln.tested)return ln.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),ln.tested=!0,ln.writable=!0}catch{ln.tested=!0,ln.writable=!1}return ln.writable};function sb(r){const i={},l=new URL(r);if(l.hash&&l.hash[0]==="#")try{new URLSearchParams(l.hash.substring(1)).forEach((u,d)=>{i[d]=u})}catch{}return l.searchParams.forEach((s,u)=>{i[u]=s}),i}const Hm=r=>{let i;return r?i=r:typeof fetch>"u"?i=(...l)=>Nl(async()=>{const{default:s}=await Promise.resolve().then(()=>di);return{default:s}},void 0).then(({default:s})=>s(...l)):i=fetch,(...l)=>i(...l)},ob=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",Lm=async(r,i,l)=>{await r.setItem(i,JSON.stringify(l))},Wr=async(r,i)=>{const l=await r.getItem(i);if(!l)return null;try{return JSON.parse(l)}catch{return l}},Ir=async(r,i)=>{await r.removeItem(i)};class ds{constructor(){this.promise=new ds.promiseConstructor((i,l)=>{this.resolve=i,this.reject=l})}}ds.promiseConstructor=Promise;function Lu(r){const i=r.split(".");if(i.length!==3)throw new _l("Invalid JWT structure");for(let s=0;s<i.length;s++)if(!K2.test(i[s]))throw new _l("JWT not in base64url format");return{header:JSON.parse(Q0(i[0])),payload:JSON.parse(Q0(i[1])),signature:ab(i[2]),raw:{header:i[0],payload:i[1]}}}async function ub(r){return await new Promise(i=>{setTimeout(()=>i(null),r)})}function cb(r,i){return new Promise((s,u)=>{(async()=>{for(let d=0;d<1/0;d++)try{const f=await r(d);if(!i(d,null,f)){s(f);return}}catch(f){if(!i(d,f)){u(f);return}}})()})}function db(r){return("0"+r.toString(16)).substr(-2)}function fb(){const i=new Uint32Array(56);if(typeof crypto>"u"){const l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",s=l.length;let u="";for(let d=0;d<56;d++)u+=l.charAt(Math.floor(Math.random()*s));return u}return crypto.getRandomValues(i),Array.from(i,db).join("")}async function hb(r){const l=new TextEncoder().encode(r),s=await crypto.subtle.digest("SHA-256",l),u=new Uint8Array(s);return Array.from(u).map(d=>String.fromCharCode(d)).join("")}async function mb(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const l=await hb(r);return btoa(l).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ai(r,i,l=!1){const s=fb();let u=s;l&&(u+="/PASSWORD_RECOVERY"),await Lm(r,`${i}-code-verifier`,u);const d=await mb(s);return[d,s===d?"plain":"s256"]}const gb=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function pb(r){const i=r.headers.get(Iu);if(!i||!i.match(gb))return null;try{return new Date(`${i}T00:00:00.0Z`)}catch{return null}}function vb(r){if(!r)throw new Error("Missing exp claim");const i=Math.floor(Date.now()/1e3);if(r<=i)throw new Error("JWT has expired")}function yb(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const bb=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ni(r){if(!bb.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}var xb=function(r,i){var l={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&i.indexOf(s)<0&&(l[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)i.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(l[s[u]]=r[s[u]]);return l};const rn=r=>r.msg||r.message||r.error_description||r.error||JSON.stringify(r),wb=[502,503,504];async function P0(r){var i;if(!ob(r))throw new ec(rn(r),0);if(wb.includes(r.status))throw new ec(rn(r),r.status);let l;try{l=await r.json()}catch(d){throw new Bm(rn(d),d)}let s;const u=pb(r);if(u&&u.getTime()>=Um["2024-01-01"].timestamp&&typeof l=="object"&&l&&typeof l.code=="string"?s=l.code:typeof l=="object"&&l&&typeof l.error_code=="string"&&(s=l.error_code),s){if(s==="weak_password")throw new Z0(rn(l),r.status,((i=l.weak_password)===null||i===void 0?void 0:i.reasons)||[]);if(s==="session_not_found")throw new Ca}else if(typeof l=="object"&&l&&typeof l.weak_password=="object"&&l.weak_password&&Array.isArray(l.weak_password.reasons)&&l.weak_password.reasons.length&&l.weak_password.reasons.reduce((d,f)=>d&&typeof f=="string",!0))throw new Z0(rn(l),r.status,l.weak_password.reasons);throw new Q2(rn(l),r.status||500,s)}const _b=(r,i,l,s)=>{const u={method:r,headers:i?.headers||{}};return r==="GET"?u:(u.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},i?.headers),u.body=JSON.stringify(s),Object.assign(Object.assign({},u),l))};async function de(r,i,l,s){var u;const d=Object.assign({},s?.headers);d[Iu]||(d[Iu]=Um["2024-01-01"].name),s?.jwt&&(d.Authorization=`Bearer ${s.jwt}`);const f=(u=s?.query)!==null&&u!==void 0?u:{};s?.redirectTo&&(f.redirect_to=s.redirectTo);const v=Object.keys(f).length?"?"+new URLSearchParams(f).toString():"",m=await Sb(r,i,l+v,{headers:d,noResolveJson:s?.noResolveJson},{},s?.body);return s?.xform?s?.xform(m):{data:Object.assign({},m),error:null}}async function Sb(r,i,l,s,u,d){const f=_b(i,s,u,d);let v;try{v=await r(l,Object.assign({},f))}catch(m){throw console.error(m),new ec(rn(m),0)}if(v.ok||await P0(v),s?.noResolveJson)return v;try{return await v.json()}catch(m){await P0(m)}}function aa(r){var i;let l=null;Tb(r)&&(l=Object.assign({},r),r.expires_at||(l.expires_at=lb(r.expires_in)));const s=(i=r.user)!==null&&i!==void 0?i:r;return{data:{session:l,user:s},error:null}}function J0(r){const i=aa(r);return!i.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((l,s)=>l&&typeof s=="string",!0)&&(i.data.weak_password=r.weak_password),i}function Ma(r){var i;return{data:{user:(i=r.user)!==null&&i!==void 0?i:r},error:null}}function jb(r){return{data:r,error:null}}function Eb(r){const{action_link:i,email_otp:l,hashed_token:s,redirect_to:u,verification_type:d}=r,f=xb(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),v={action_link:i,email_otp:l,hashed_token:s,redirect_to:u,verification_type:d},m=Object.assign({},f);return{data:{properties:v,user:m},error:null}}function kb(r){return r}function Tb(r){return r.access_token&&r.refresh_token&&r.expires_in}const Gu=["global","local","others"];var Ab=function(r,i){var l={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&i.indexOf(s)<0&&(l[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,s=Object.getOwnPropertySymbols(r);u<s.length;u++)i.indexOf(s[u])<0&&Object.prototype.propertyIsEnumerable.call(r,s[u])&&(l[s[u]]=r[s[u]]);return l};class zb{constructor({url:i="",headers:l={},fetch:s}){this.url=i,this.headers=l,this.fetch=Hm(s),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(i,l=Gu[0]){if(Gu.indexOf(l)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Gu.join(", ")}`);try{return await de(this.fetch,"POST",`${this.url}/logout?scope=${l}`,{headers:this.headers,jwt:i,noResolveJson:!0}),{data:null,error:null}}catch(s){if(ie(s))return{data:null,error:s};throw s}}async inviteUserByEmail(i,l={}){try{return await de(this.fetch,"POST",`${this.url}/invite`,{body:{email:i,data:l.data},headers:this.headers,redirectTo:l.redirectTo,xform:Ma})}catch(s){if(ie(s))return{data:{user:null},error:s};throw s}}async generateLink(i){try{const{options:l}=i,s=Ab(i,["options"]),u=Object.assign(Object.assign({},s),l);return"newEmail"in s&&(u.new_email=s?.newEmail,delete u.newEmail),await de(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:u,headers:this.headers,xform:Eb,redirectTo:l?.redirectTo})}catch(l){if(ie(l))return{data:{properties:null,user:null},error:l};throw l}}async createUser(i){try{return await de(this.fetch,"POST",`${this.url}/admin/users`,{body:i,headers:this.headers,xform:Ma})}catch(l){if(ie(l))return{data:{user:null},error:l};throw l}}async listUsers(i){var l,s,u,d,f,v,m;try{const p={nextPage:null,lastPage:0,total:0},b=await de(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(s=(l=i?.page)===null||l===void 0?void 0:l.toString())!==null&&s!==void 0?s:"",per_page:(d=(u=i?.perPage)===null||u===void 0?void 0:u.toString())!==null&&d!==void 0?d:""},xform:kb});if(b.error)throw b.error;const w=await b.json(),S=(f=b.headers.get("x-total-count"))!==null&&f!==void 0?f:0,k=(m=(v=b.headers.get("link"))===null||v===void 0?void 0:v.split(","))!==null&&m!==void 0?m:[];return k.length>0&&(k.forEach(_=>{const U=parseInt(_.split(";")[0].split("=")[1].substring(0,1)),D=JSON.parse(_.split(";")[1].split("=")[1]);p[`${D}Page`]=U}),p.total=parseInt(S)),{data:Object.assign(Object.assign({},w),p),error:null}}catch(p){if(ie(p))return{data:{users:[]},error:p};throw p}}async getUserById(i){ni(i);try{return await de(this.fetch,"GET",`${this.url}/admin/users/${i}`,{headers:this.headers,xform:Ma})}catch(l){if(ie(l))return{data:{user:null},error:l};throw l}}async updateUserById(i,l){ni(i);try{return await de(this.fetch,"PUT",`${this.url}/admin/users/${i}`,{body:l,headers:this.headers,xform:Ma})}catch(s){if(ie(s))return{data:{user:null},error:s};throw s}}async deleteUser(i,l=!1){ni(i);try{return await de(this.fetch,"DELETE",`${this.url}/admin/users/${i}`,{headers:this.headers,body:{should_soft_delete:l},xform:Ma})}catch(s){if(ie(s))return{data:{user:null},error:s};throw s}}async _listFactors(i){ni(i.userId);try{const{data:l,error:s}=await de(this.fetch,"GET",`${this.url}/admin/users/${i.userId}/factors`,{headers:this.headers,xform:u=>({data:{factors:u},error:null})});return{data:l,error:s}}catch(l){if(ie(l))return{data:null,error:l};throw l}}async _deleteFactor(i){ni(i.userId),ni(i.id);try{return{data:await de(this.fetch,"DELETE",`${this.url}/admin/users/${i.userId}/factors/${i.id}`,{headers:this.headers}),error:null}}catch(l){if(ie(l))return{data:null,error:l};throw l}}}const Nb={getItem:r=>Sl()?globalThis.localStorage.getItem(r):null,setItem:(r,i)=>{Sl()&&globalThis.localStorage.setItem(r,i)},removeItem:r=>{Sl()&&globalThis.localStorage.removeItem(r)}};function F0(r={}){return{getItem:i=>r[i]||null,setItem:(i,l)=>{r[i]=l},removeItem:i=>{delete r[i]}}}function Ob(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const ii={debug:!!(globalThis&&Sl()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class Gm extends Error{constructor(i){super(i),this.isAcquireTimeout=!0}}class Rb extends Gm{}async function Cb(r,i,l){ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",r,i);const s=new globalThis.AbortController;return i>0&&setTimeout(()=>{s.abort(),ii.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",r)},i),await Promise.resolve().then(()=>globalThis.navigator.locks.request(r,i===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:s.signal},async u=>{if(u){ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",r,u.name);try{return await l()}finally{ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",r,u.name)}}else{if(i===0)throw ii.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",r),new Rb(`Acquiring an exclusive Navigator LockManager lock "${r}" immediately failed`);if(ii.debug)try{const d=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(d,null,"  "))}catch(d){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",d)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await l()}}))}Ob();const Db={url:$2,storageKey:V2,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Z2,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function W0(r,i,l){return await l()}class kl{constructor(i){var l,s;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=kl.nextInstanceID,kl.nextInstanceID+=1,this.instanceID>0&&Ot()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const u=Object.assign(Object.assign({},Db),i);if(this.logDebugMessages=!!u.debug,typeof u.debug=="function"&&(this.logger=u.debug),this.persistSession=u.persistSession,this.storageKey=u.storageKey,this.autoRefreshToken=u.autoRefreshToken,this.admin=new zb({url:u.url,headers:u.headers,fetch:u.fetch}),this.url=u.url,this.headers=u.headers,this.fetch=Hm(u.fetch),this.lock=u.lock||W0,this.detectSessionInUrl=u.detectSessionInUrl,this.flowType=u.flowType,this.hasCustomAuthorizationHeader=u.hasCustomAuthorizationHeader,u.lock?this.lock=u.lock:Ot()&&(!((l=globalThis?.navigator)===null||l===void 0)&&l.locks)?this.lock=Cb:this.lock=W0,this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?u.storage?this.storage=u.storage:Sl()?this.storage=Nb:(this.memoryStorage={},this.storage=F0(this.memoryStorage)):(this.memoryStorage={},this.storage=F0(this.memoryStorage)),Ot()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d),await this._notifyAllSubscribers(d.data.event,d.data.session,!1)})}this.initialize()}_debug(...i){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${Mm}) ${new Date().toISOString()}`,...i),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var i;try{const l=sb(window.location.href);let s="none";if(this._isImplicitGrantCallback(l)?s="implicit":await this._isPKCECallback(l)&&(s="pkce"),Ot()&&this.detectSessionInUrl&&s!=="none"){const{data:u,error:d}=await this._getSessionFromURL(l,s);if(d){if(this._debug("#_initialize()","error detecting session from URL",d),F2(d)){const m=(i=d.details)===null||i===void 0?void 0:i.code;if(m==="identity_already_exists"||m==="identity_not_found"||m==="single_identity_not_deletable")return{error:d}}return await this._removeSession(),{error:d}}const{session:f,redirectType:v}=u;return this._debug("#_initialize()","detected session in URL",f,"redirect type",v),await this._saveSession(f),setTimeout(async()=>{v==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",f):await this._notifyAllSubscribers("SIGNED_IN",f)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(l){return ie(l)?{error:l}:{error:new Bm("Unexpected error during initialization",l)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(i){var l,s,u;try{const d=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(s=(l=i?.options)===null||l===void 0?void 0:l.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:(u=i?.options)===null||u===void 0?void 0:u.captchaToken}},xform:aa}),{data:f,error:v}=d;if(v||!f)return{data:{user:null,session:null},error:v};const m=f.session,p=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",m)),{data:{user:p,session:m},error:null}}catch(d){if(ie(d))return{data:{user:null,session:null},error:d};throw d}}async signUp(i){var l,s,u;try{let d;if("email"in i){const{email:b,password:w,options:S}=i;let k=null,_=null;this.flowType==="pkce"&&([k,_]=await ai(this.storage,this.storageKey)),d=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:S?.emailRedirectTo,body:{email:b,password:w,data:(l=S?.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:S?.captchaToken},code_challenge:k,code_challenge_method:_},xform:aa})}else if("phone"in i){const{phone:b,password:w,options:S}=i;d=await de(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:b,password:w,data:(s=S?.data)!==null&&s!==void 0?s:{},channel:(u=S?.channel)!==null&&u!==void 0?u:"sms",gotrue_meta_security:{captcha_token:S?.captchaToken}},xform:aa})}else throw new Jr("You must provide either an email or phone number and a password");const{data:f,error:v}=d;if(v||!f)return{data:{user:null,session:null},error:v};const m=f.session,p=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",m)),{data:{user:p,session:m},error:null}}catch(d){if(ie(d))return{data:{user:null,session:null},error:d};throw d}}async signInWithPassword(i){try{let l;if("email"in i){const{email:d,password:f,options:v}=i;l=await de(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:d,password:f,gotrue_meta_security:{captcha_token:v?.captchaToken}},xform:J0})}else if("phone"in i){const{phone:d,password:f,options:v}=i;l=await de(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:d,password:f,gotrue_meta_security:{captcha_token:v?.captchaToken}},xform:J0})}else throw new Jr("You must provide either an email or phone number and a password");const{data:s,error:u}=l;return u?{data:{user:null,session:null},error:u}:!s||!s.session||!s.user?{data:{user:null,session:null},error:new Pr}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign({user:s.user,session:s.session},s.weak_password?{weakPassword:s.weak_password}:null),error:u})}catch(l){if(ie(l))return{data:{user:null,session:null},error:l};throw l}}async signInWithOAuth(i){var l,s,u,d;return await this._handleProviderSignIn(i.provider,{redirectTo:(l=i.options)===null||l===void 0?void 0:l.redirectTo,scopes:(s=i.options)===null||s===void 0?void 0:s.scopes,queryParams:(u=i.options)===null||u===void 0?void 0:u.queryParams,skipBrowserRedirect:(d=i.options)===null||d===void 0?void 0:d.skipBrowserRedirect})}async exchangeCodeForSession(i){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(i))}async signInWithWeb3(i){const{chain:l}=i;if(l==="solana")return await this.signInWithSolana(i);throw new Error(`@supabase/auth-js: Unsupported chain "${l}"`)}async signInWithSolana(i){var l,s,u,d,f,v,m,p,b,w,S,k;let _,U;if("message"in i)_=i.message,U=i.signature;else{const{chain:D,wallet:A,statement:q,options:G}=i;let Q;if(Ot())if(typeof A=="object")Q=A;else{const ae=window;if("solana"in ae&&typeof ae.solana=="object"&&("signIn"in ae.solana&&typeof ae.solana.signIn=="function"||"signMessage"in ae.solana&&typeof ae.solana.signMessage=="function"))Q=ae.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof A!="object"||!G?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");Q=A}const $=new URL((l=G?.url)!==null&&l!==void 0?l:window.location.href);if("signIn"in Q&&Q.signIn){const ae=await Q.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},G?.signInWithSolana),{version:"1",domain:$.host,uri:$.href}),q?{statement:q}:null));let V;if(Array.isArray(ae)&&ae[0]&&typeof ae[0]=="object")V=ae[0];else if(ae&&typeof ae=="object"&&"signedMessage"in ae&&"signature"in ae)V=ae;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in V&&"signature"in V&&(typeof V.signedMessage=="string"||V.signedMessage instanceof Uint8Array)&&V.signature instanceof Uint8Array)_=typeof V.signedMessage=="string"?V.signedMessage:new TextDecoder().decode(V.signedMessage),U=V.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in Q)||typeof Q.signMessage!="function"||!("publicKey"in Q)||typeof Q!="object"||!Q.publicKey||!("toBase58"in Q.publicKey)||typeof Q.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");_=[`${$.host} wants you to sign in with your Solana account:`,Q.publicKey.toBase58(),...q?["",q,""]:[""],"Version: 1",`URI: ${$.href}`,`Issued At: ${(u=(s=G?.signInWithSolana)===null||s===void 0?void 0:s.issuedAt)!==null&&u!==void 0?u:new Date().toISOString()}`,...!((d=G?.signInWithSolana)===null||d===void 0)&&d.notBefore?[`Not Before: ${G.signInWithSolana.notBefore}`]:[],...!((f=G?.signInWithSolana)===null||f===void 0)&&f.expirationTime?[`Expiration Time: ${G.signInWithSolana.expirationTime}`]:[],...!((v=G?.signInWithSolana)===null||v===void 0)&&v.chainId?[`Chain ID: ${G.signInWithSolana.chainId}`]:[],...!((m=G?.signInWithSolana)===null||m===void 0)&&m.nonce?[`Nonce: ${G.signInWithSolana.nonce}`]:[],...!((p=G?.signInWithSolana)===null||p===void 0)&&p.requestId?[`Request ID: ${G.signInWithSolana.requestId}`]:[],...!((w=(b=G?.signInWithSolana)===null||b===void 0?void 0:b.resources)===null||w===void 0)&&w.length?["Resources",...G.signInWithSolana.resources.map(V=>`- ${V}`)]:[]].join(`
`);const ae=await Q.signMessage(new TextEncoder().encode(_),"utf8");if(!ae||!(ae instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");U=ae}}try{const{data:D,error:A}=await de(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:_,signature:ib(U)},!((S=i.options)===null||S===void 0)&&S.captchaToken?{gotrue_meta_security:{captcha_token:(k=i.options)===null||k===void 0?void 0:k.captchaToken}}:null),xform:aa});if(A)throw A;return!D||!D.session||!D.user?{data:{user:null,session:null},error:new Pr}:(D.session&&(await this._saveSession(D.session),await this._notifyAllSubscribers("SIGNED_IN",D.session)),{data:Object.assign({},D),error:A})}catch(D){if(ie(D))return{data:{user:null,session:null},error:D};throw D}}async _exchangeCodeForSession(i){const l=await Wr(this.storage,`${this.storageKey}-code-verifier`),[s,u]=(l??"").split("/");try{const{data:d,error:f}=await de(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:i,code_verifier:s},xform:aa});if(await Ir(this.storage,`${this.storageKey}-code-verifier`),f)throw f;return!d||!d.session||!d.user?{data:{user:null,session:null,redirectType:null},error:new Pr}:(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",d.session)),{data:Object.assign(Object.assign({},d),{redirectType:u??null}),error:f})}catch(d){if(ie(d))return{data:{user:null,session:null,redirectType:null},error:d};throw d}}async signInWithIdToken(i){try{const{options:l,provider:s,token:u,access_token:d,nonce:f}=i,v=await de(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:s,id_token:u,access_token:d,nonce:f,gotrue_meta_security:{captcha_token:l?.captchaToken}},xform:aa}),{data:m,error:p}=v;return p?{data:{user:null,session:null},error:p}:!m||!m.session||!m.user?{data:{user:null,session:null},error:new Pr}:(m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),{data:m,error:p})}catch(l){if(ie(l))return{data:{user:null,session:null},error:l};throw l}}async signInWithOtp(i){var l,s,u,d,f;try{if("email"in i){const{email:v,options:m}=i;let p=null,b=null;this.flowType==="pkce"&&([p,b]=await ai(this.storage,this.storageKey));const{error:w}=await de(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:v,data:(l=m?.data)!==null&&l!==void 0?l:{},create_user:(s=m?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:m?.captchaToken},code_challenge:p,code_challenge_method:b},redirectTo:m?.emailRedirectTo});return{data:{user:null,session:null},error:w}}if("phone"in i){const{phone:v,options:m}=i,{data:p,error:b}=await de(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:v,data:(u=m?.data)!==null&&u!==void 0?u:{},create_user:(d=m?.shouldCreateUser)!==null&&d!==void 0?d:!0,gotrue_meta_security:{captcha_token:m?.captchaToken},channel:(f=m?.channel)!==null&&f!==void 0?f:"sms"}});return{data:{user:null,session:null,messageId:p?.message_id},error:b}}throw new Jr("You must provide either an email or phone number.")}catch(v){if(ie(v))return{data:{user:null,session:null},error:v};throw v}}async verifyOtp(i){var l,s;try{let u,d;"options"in i&&(u=(l=i.options)===null||l===void 0?void 0:l.redirectTo,d=(s=i.options)===null||s===void 0?void 0:s.captchaToken);const{data:f,error:v}=await de(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},i),{gotrue_meta_security:{captcha_token:d}}),redirectTo:u,xform:aa});if(v)throw v;if(!f)throw new Error("An error occurred on token verification.");const m=f.session,p=f.user;return m?.access_token&&(await this._saveSession(m),await this._notifyAllSubscribers(i.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",m)),{data:{user:p,session:m},error:null}}catch(u){if(ie(u))return{data:{user:null,session:null},error:u};throw u}}async signInWithSSO(i){var l,s,u;try{let d=null,f=null;return this.flowType==="pkce"&&([d,f]=await ai(this.storage,this.storageKey)),await de(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in i?{provider_id:i.providerId}:null),"domain"in i?{domain:i.domain}:null),{redirect_to:(s=(l=i.options)===null||l===void 0?void 0:l.redirectTo)!==null&&s!==void 0?s:void 0}),!((u=i?.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:i.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:d,code_challenge_method:f}),headers:this.headers,xform:jb})}catch(d){if(ie(d))return{data:null,error:d};throw d}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async i=>{const{data:{session:l},error:s}=i;if(s)throw s;if(!l)throw new Ca;const{error:u}=await de(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:l.access_token});return{data:{user:null,session:null},error:u}})}catch(i){if(ie(i))return{data:{user:null,session:null},error:i};throw i}}async resend(i){try{const l=`${this.url}/resend`;if("email"in i){const{email:s,type:u,options:d}=i,{error:f}=await de(this.fetch,"POST",l,{headers:this.headers,body:{email:s,type:u,gotrue_meta_security:{captcha_token:d?.captchaToken}},redirectTo:d?.emailRedirectTo});return{data:{user:null,session:null},error:f}}else if("phone"in i){const{phone:s,type:u,options:d}=i,{data:f,error:v}=await de(this.fetch,"POST",l,{headers:this.headers,body:{phone:s,type:u,gotrue_meta_security:{captcha_token:d?.captchaToken}}});return{data:{user:null,session:null,messageId:f?.message_id},error:v}}throw new Jr("You must provide either an email or phone number and a type")}catch(l){if(ie(l))return{data:{user:null,session:null},error:l};throw l}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async l=>l))}async _acquireLock(i,l){this._debug("#_acquireLock","begin",i);try{if(this.lockAcquired){const s=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),u=(async()=>(await s,await l()))();return this.pendingInLock.push((async()=>{try{await u}catch{}})()),u}return await this.lock(`lock:${this.storageKey}`,i,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const s=l();for(this.pendingInLock.push((async()=>{try{await s}catch{}})()),await s;this.pendingInLock.length;){const u=[...this.pendingInLock];await Promise.all(u),this.pendingInLock.splice(0,u.length)}return await s}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(i){this._debug("#_useSession","begin");try{const l=await this.__loadSession();return await i(l)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let i=null;const l=await Wr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",l),l!==null&&(this._isValidSession(l)?i=l:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!i)return{data:{session:null},error:null};const s=i.expires_at?i.expires_at*1e3-Date.now()<qu:!1;if(this._debug("#__loadSession()",`session has${s?"":" not"} expired`,"expires_at",i.expires_at),!s){if(this.storage.isServer){let f=this.suppressGetSessionWarning;i=new Proxy(i,{get:(m,p,b)=>(!f&&p==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),f=!0,this.suppressGetSessionWarning=!0),Reflect.get(m,p,b))})}return{data:{session:i},error:null}}const{session:u,error:d}=await this._callRefreshToken(i.refresh_token);return d?{data:{session:null},error:d}:{data:{session:u},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(i){return i?await this._getUser(i):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(i){try{return i?await de(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:i,xform:Ma}):await this._useSession(async l=>{var s,u,d;const{data:f,error:v}=l;if(v)throw v;return!(!((s=f.session)===null||s===void 0)&&s.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Ca}:await de(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(d=(u=f.session)===null||u===void 0?void 0:u.access_token)!==null&&d!==void 0?d:void 0,xform:Ma})})}catch(l){if(ie(l))return J2(l)&&(await this._removeSession(),await Ir(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:l};throw l}}async updateUser(i,l={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(i,l))}async _updateUser(i,l={}){try{return await this._useSession(async s=>{const{data:u,error:d}=s;if(d)throw d;if(!u.session)throw new Ca;const f=u.session;let v=null,m=null;this.flowType==="pkce"&&i.email!=null&&([v,m]=await ai(this.storage,this.storageKey));const{data:p,error:b}=await de(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:l?.emailRedirectTo,body:Object.assign(Object.assign({},i),{code_challenge:v,code_challenge_method:m}),jwt:f.access_token,xform:Ma});if(b)throw b;return f.user=p.user,await this._saveSession(f),await this._notifyAllSubscribers("USER_UPDATED",f),{data:{user:f.user},error:null}})}catch(s){if(ie(s))return{data:{user:null},error:s};throw s}}async setSession(i){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(i))}async _setSession(i){try{if(!i.access_token||!i.refresh_token)throw new Ca;const l=Date.now()/1e3;let s=l,u=!0,d=null;const{payload:f}=Lu(i.access_token);if(f.exp&&(s=f.exp,u=s<=l),u){const{session:v,error:m}=await this._callRefreshToken(i.refresh_token);if(m)return{data:{user:null,session:null},error:m};if(!v)return{data:{user:null,session:null},error:null};d=v}else{const{data:v,error:m}=await this._getUser(i.access_token);if(m)throw m;d={access_token:i.access_token,refresh_token:i.refresh_token,user:v.user,token_type:"bearer",expires_in:s-l,expires_at:s},await this._saveSession(d),await this._notifyAllSubscribers("SIGNED_IN",d)}return{data:{user:d.user,session:d},error:null}}catch(l){if(ie(l))return{data:{session:null,user:null},error:l};throw l}}async refreshSession(i){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(i))}async _refreshSession(i){try{return await this._useSession(async l=>{var s;if(!i){const{data:f,error:v}=l;if(v)throw v;i=(s=f.session)!==null&&s!==void 0?s:void 0}if(!i?.refresh_token)throw new Ca;const{session:u,error:d}=await this._callRefreshToken(i.refresh_token);return d?{data:{user:null,session:null},error:d}:u?{data:{user:u.user,session:u},error:null}:{data:{user:null,session:null},error:null}})}catch(l){if(ie(l))return{data:{user:null,session:null},error:l};throw l}}async _getSessionFromURL(i,l){try{if(!Ot())throw new Fr("No browser detected.");if(i.error||i.error_description||i.error_code)throw new Fr(i.error_description||"Error in URL with unspecified error_description",{error:i.error||"unspecified_error",code:i.error_code||"unspecified_code"});switch(l){case"implicit":if(this.flowType==="pkce")throw new V0("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Fr("Not a valid implicit grant flow url.");break;default:}if(l==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!i.code)throw new V0("No code detected.");const{data:q,error:G}=await this._exchangeCodeForSession(i.code);if(G)throw G;const Q=new URL(window.location.href);return Q.searchParams.delete("code"),window.history.replaceState(window.history.state,"",Q.toString()),{data:{session:q.session,redirectType:null},error:null}}const{provider_token:s,provider_refresh_token:u,access_token:d,refresh_token:f,expires_in:v,expires_at:m,token_type:p}=i;if(!d||!v||!f||!p)throw new Fr("No session defined in URL");const b=Math.round(Date.now()/1e3),w=parseInt(v);let S=b+w;m&&(S=parseInt(m));const k=S-b;k*1e3<=ri&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${k}s, should have been closer to ${w}s`);const _=S-w;b-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,S,b):b-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,S,b);const{data:U,error:D}=await this._getUser(d);if(D)throw D;const A={provider_token:s,provider_refresh_token:u,access_token:d,expires_in:w,expires_at:S,refresh_token:f,token_type:p,user:U.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:A,redirectType:i.type},error:null}}catch(s){if(ie(s))return{data:{session:null,redirectType:null},error:s};throw s}}_isImplicitGrantCallback(i){return!!(i.access_token||i.error_description)}async _isPKCECallback(i){const l=await Wr(this.storage,`${this.storageKey}-code-verifier`);return!!(i.code&&l)}async signOut(i={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(i))}async _signOut({scope:i}={scope:"global"}){return await this._useSession(async l=>{var s;const{data:u,error:d}=l;if(d)return{error:d};const f=(s=u.session)===null||s===void 0?void 0:s.access_token;if(f){const{error:v}=await this.admin.signOut(f,i);if(v&&!(P2(v)&&(v.status===404||v.status===401||v.status===403)))return{error:v}}return i!=="others"&&(await this._removeSession(),await Ir(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(i){const l=rb(),s={id:l,callback:i,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",l),this.stateChangeEmitters.delete(l)}};return this._debug("#onAuthStateChange()","registered callback with id",l),this.stateChangeEmitters.set(l,s),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(l)})))(),{data:{subscription:s}}}async _emitInitialSession(i){return await this._useSession(async l=>{var s,u;try{const{data:{session:d},error:f}=l;if(f)throw f;await((s=this.stateChangeEmitters.get(i))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",d)),this._debug("INITIAL_SESSION","callback id",i,"session",d)}catch(d){await((u=this.stateChangeEmitters.get(i))===null||u===void 0?void 0:u.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",i,"error",d),console.error(d)}})}async resetPasswordForEmail(i,l={}){let s=null,u=null;this.flowType==="pkce"&&([s,u]=await ai(this.storage,this.storageKey,!0));try{return await de(this.fetch,"POST",`${this.url}/recover`,{body:{email:i,code_challenge:s,code_challenge_method:u,gotrue_meta_security:{captcha_token:l.captchaToken}},headers:this.headers,redirectTo:l.redirectTo})}catch(d){if(ie(d))return{data:null,error:d};throw d}}async getUserIdentities(){var i;try{const{data:l,error:s}=await this.getUser();if(s)throw s;return{data:{identities:(i=l.user.identities)!==null&&i!==void 0?i:[]},error:null}}catch(l){if(ie(l))return{data:null,error:l};throw l}}async linkIdentity(i){var l;try{const{data:s,error:u}=await this._useSession(async d=>{var f,v,m,p,b;const{data:w,error:S}=d;if(S)throw S;const k=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,i.provider,{redirectTo:(f=i.options)===null||f===void 0?void 0:f.redirectTo,scopes:(v=i.options)===null||v===void 0?void 0:v.scopes,queryParams:(m=i.options)===null||m===void 0?void 0:m.queryParams,skipBrowserRedirect:!0});return await de(this.fetch,"GET",k,{headers:this.headers,jwt:(b=(p=w.session)===null||p===void 0?void 0:p.access_token)!==null&&b!==void 0?b:void 0})});if(u)throw u;return Ot()&&!(!((l=i.options)===null||l===void 0)&&l.skipBrowserRedirect)&&window.location.assign(s?.url),{data:{provider:i.provider,url:s?.url},error:null}}catch(s){if(ie(s))return{data:{provider:i.provider,url:null},error:s};throw s}}async unlinkIdentity(i){try{return await this._useSession(async l=>{var s,u;const{data:d,error:f}=l;if(f)throw f;return await de(this.fetch,"DELETE",`${this.url}/user/identities/${i.identity_id}`,{headers:this.headers,jwt:(u=(s=d.session)===null||s===void 0?void 0:s.access_token)!==null&&u!==void 0?u:void 0})})}catch(l){if(ie(l))return{data:null,error:l};throw l}}async _refreshAccessToken(i){const l=`#_refreshAccessToken(${i.substring(0,5)}...)`;this._debug(l,"begin");try{const s=Date.now();return await cb(async u=>(u>0&&await ub(200*Math.pow(2,u-1)),this._debug(l,"refreshing attempt",u),await de(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:i},headers:this.headers,xform:aa})),(u,d)=>{const f=200*Math.pow(2,u);return d&&Hu(d)&&Date.now()+f-s<ri})}catch(s){if(this._debug(l,"error",s),ie(s))return{data:{session:null,user:null},error:s};throw s}finally{this._debug(l,"end")}}_isValidSession(i){return typeof i=="object"&&i!==null&&"access_token"in i&&"refresh_token"in i&&"expires_at"in i}async _handleProviderSignIn(i,l){const s=await this._getUrlForProvider(`${this.url}/authorize`,i,{redirectTo:l.redirectTo,scopes:l.scopes,queryParams:l.queryParams});return this._debug("#_handleProviderSignIn()","provider",i,"options",l,"url",s),Ot()&&!l.skipBrowserRedirect&&window.location.assign(s),{data:{provider:i,url:s},error:null}}async _recoverAndRefresh(){var i;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const s=await Wr(this.storage,this.storageKey);if(this._debug(l,"session from storage",s),!this._isValidSession(s)){this._debug(l,"session is not valid"),s!==null&&await this._removeSession();return}const u=((i=s.expires_at)!==null&&i!==void 0?i:1/0)*1e3-Date.now()<qu;if(this._debug(l,`session has${u?"":" not"} expired with margin of ${qu}s`),u){if(this.autoRefreshToken&&s.refresh_token){const{error:d}=await this._callRefreshToken(s.refresh_token);d&&(console.error(d),Hu(d)||(this._debug(l,"refresh failed with a non-retryable error, removing the session",d),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(l,"error",s),console.error(s);return}finally{this._debug(l,"end")}}async _callRefreshToken(i){var l,s;if(!i)throw new Ca;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const u=`#_callRefreshToken(${i.substring(0,5)}...)`;this._debug(u,"begin");try{this.refreshingDeferred=new ds;const{data:d,error:f}=await this._refreshAccessToken(i);if(f)throw f;if(!d.session)throw new Ca;await this._saveSession(d.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const v={session:d.session,error:null};return this.refreshingDeferred.resolve(v),v}catch(d){if(this._debug(u,"error",d),ie(d)){const f={session:null,error:d};return Hu(d)||await this._removeSession(),(l=this.refreshingDeferred)===null||l===void 0||l.resolve(f),f}throw(s=this.refreshingDeferred)===null||s===void 0||s.reject(d),d}finally{this.refreshingDeferred=null,this._debug(u,"end")}}async _notifyAllSubscribers(i,l,s=!0){const u=`#_notifyAllSubscribers(${i})`;this._debug(u,"begin",l,`broadcast = ${s}`);try{this.broadcastChannel&&s&&this.broadcastChannel.postMessage({event:i,session:l});const d=[],f=Array.from(this.stateChangeEmitters.values()).map(async v=>{try{await v.callback(i,l)}catch(m){d.push(m)}});if(await Promise.all(f),d.length>0){for(let v=0;v<d.length;v+=1)console.error(d[v]);throw d[0]}}finally{this._debug(u,"end")}}async _saveSession(i){this._debug("#_saveSession()",i),this.suppressGetSessionWarning=!0,await Lm(this.storage,this.storageKey,i)}async _removeSession(){this._debug("#_removeSession()"),await Ir(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const i=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{i&&Ot()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",i)}catch(l){console.error("removing visibilitychange callback failed",l)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const i=setInterval(()=>this._autoRefreshTokenTick(),ri);this.autoRefreshTicker=i,i&&typeof i=="object"&&typeof i.unref=="function"?i.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(i),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const i=this.autoRefreshTicker;this.autoRefreshTicker=null,i&&clearInterval(i)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const i=Date.now();try{return await this._useSession(async l=>{const{data:{session:s}}=l;if(!s||!s.refresh_token||!s.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const u=Math.floor((s.expires_at*1e3-i)/ri);this._debug("#_autoRefreshTokenTick()",`access token expires in ${u} ticks, a tick lasts ${ri}ms, refresh threshold is ${Wu} ticks`),u<=Wu&&await this._callRefreshToken(s.refresh_token)})}catch(l){console.error("Auto refresh tick failed with error. This is likely a transient error.",l)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(i){if(i.isAcquireTimeout||i instanceof Gm)this._debug("auto refresh token tick lock not available");else throw i}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Ot()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(i){console.error("_handleVisibilityChange",i)}}async _onVisibilityChanged(i){const l=`#_onVisibilityChanged(${i})`;this._debug(l,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),i||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(l,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(i,l,s){const u=[`provider=${encodeURIComponent(l)}`];if(s?.redirectTo&&u.push(`redirect_to=${encodeURIComponent(s.redirectTo)}`),s?.scopes&&u.push(`scopes=${encodeURIComponent(s.scopes)}`),this.flowType==="pkce"){const[d,f]=await ai(this.storage,this.storageKey),v=new URLSearchParams({code_challenge:`${encodeURIComponent(d)}`,code_challenge_method:`${encodeURIComponent(f)}`});u.push(v.toString())}if(s?.queryParams){const d=new URLSearchParams(s.queryParams);u.push(d.toString())}return s?.skipBrowserRedirect&&u.push(`skip_http_redirect=${s.skipBrowserRedirect}`),`${i}?${u.join("&")}`}async _unenroll(i){try{return await this._useSession(async l=>{var s;const{data:u,error:d}=l;return d?{data:null,error:d}:await de(this.fetch,"DELETE",`${this.url}/factors/${i.factorId}`,{headers:this.headers,jwt:(s=u?.session)===null||s===void 0?void 0:s.access_token})})}catch(l){if(ie(l))return{data:null,error:l};throw l}}async _enroll(i){try{return await this._useSession(async l=>{var s,u;const{data:d,error:f}=l;if(f)return{data:null,error:f};const v=Object.assign({friendly_name:i.friendlyName,factor_type:i.factorType},i.factorType==="phone"?{phone:i.phone}:{issuer:i.issuer}),{data:m,error:p}=await de(this.fetch,"POST",`${this.url}/factors`,{body:v,headers:this.headers,jwt:(s=d?.session)===null||s===void 0?void 0:s.access_token});return p?{data:null,error:p}:(i.factorType==="totp"&&(!((u=m?.totp)===null||u===void 0)&&u.qr_code)&&(m.totp.qr_code=`data:image/svg+xml;utf-8,${m.totp.qr_code}`),{data:m,error:null})})}catch(l){if(ie(l))return{data:null,error:l};throw l}}async _verify(i){return this._acquireLock(-1,async()=>{try{return await this._useSession(async l=>{var s;const{data:u,error:d}=l;if(d)return{data:null,error:d};const{data:f,error:v}=await de(this.fetch,"POST",`${this.url}/factors/${i.factorId}/verify`,{body:{code:i.code,challenge_id:i.challengeId},headers:this.headers,jwt:(s=u?.session)===null||s===void 0?void 0:s.access_token});return v?{data:null,error:v}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+f.expires_in},f)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",f),{data:f,error:v})})}catch(l){if(ie(l))return{data:null,error:l};throw l}})}async _challenge(i){return this._acquireLock(-1,async()=>{try{return await this._useSession(async l=>{var s;const{data:u,error:d}=l;return d?{data:null,error:d}:await de(this.fetch,"POST",`${this.url}/factors/${i.factorId}/challenge`,{body:{channel:i.channel},headers:this.headers,jwt:(s=u?.session)===null||s===void 0?void 0:s.access_token})})}catch(l){if(ie(l))return{data:null,error:l};throw l}})}async _challengeAndVerify(i){const{data:l,error:s}=await this._challenge({factorId:i.factorId});return s?{data:null,error:s}:await this._verify({factorId:i.factorId,challengeId:l.id,code:i.code})}async _listFactors(){const{data:{user:i},error:l}=await this.getUser();if(l)return{data:null,error:l};const s=i?.factors||[],u=s.filter(f=>f.factor_type==="totp"&&f.status==="verified"),d=s.filter(f=>f.factor_type==="phone"&&f.status==="verified");return{data:{all:s,totp:u,phone:d},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async i=>{var l,s;const{data:{session:u},error:d}=i;if(d)return{data:null,error:d};if(!u)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:f}=Lu(u.access_token);let v=null;f.aal&&(v=f.aal);let m=v;((s=(l=u.user.factors)===null||l===void 0?void 0:l.filter(w=>w.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(m="aal2");const b=f.amr||[];return{data:{currentLevel:v,nextLevel:m,currentAuthenticationMethods:b},error:null}}))}async fetchJwk(i,l={keys:[]}){let s=l.keys.find(f=>f.kid===i);if(s||(s=this.jwks.keys.find(f=>f.kid===i),s&&this.jwks_cached_at+X2>Date.now()))return s;const{data:u,error:d}=await de(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(d)throw d;if(!u.keys||u.keys.length===0)throw new _l("JWKS is empty");if(this.jwks=u,this.jwks_cached_at=Date.now(),s=u.keys.find(f=>f.kid===i),!s)throw new _l("No matching signing key found in JWKS");return s}async getClaims(i,l={keys:[]}){try{let s=i;if(!s){const{data:k,error:_}=await this.getSession();if(_||!k.session)return{data:null,error:_};s=k.session.access_token}const{header:u,payload:d,signature:f,raw:{header:v,payload:m}}=Lu(s);if(vb(d.exp),!u.kid||u.alg==="HS256"||!("crypto"in globalThis&&"subtle"in globalThis.crypto)){const{error:k}=await this.getUser(s);if(k)throw k;return{data:{claims:d,header:u,signature:f},error:null}}const p=yb(u.alg),b=await this.fetchJwk(u.kid,l),w=await crypto.subtle.importKey("jwk",b,p,!0,["verify"]);if(!await crypto.subtle.verify(p,w,f,nb(`${v}.${m}`)))throw new _l("Invalid JWT signature");return{data:{claims:d,header:u,signature:f},error:null}}catch(s){if(ie(s))return{data:null,error:s};throw s}}}kl.nextInstanceID=0;const Mb=kl;class Ub extends Mb{constructor(i){super(i)}}var Bb=function(r,i,l,s){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function v(b){try{p(s.next(b))}catch(w){f(w)}}function m(b){try{p(s.throw(b))}catch(w){f(w)}}function p(b){b.done?d(b.value):u(b.value).then(v,m)}p((s=s.apply(r,i||[])).next())})};class qb{constructor(i,l,s){var u,d,f;if(this.supabaseUrl=i,this.supabaseKey=l,!i)throw new Error("supabaseUrl is required.");if(!l)throw new Error("supabaseKey is required.");const v=G2(i),m=new URL(v);this.realtimeUrl=new URL("realtime/v1",m),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",m),this.storageUrl=new URL("storage/v1",m),this.functionsUrl=new URL("functions/v1",m);const p=`sb-${m.hostname.split(".")[0]}-auth-token`,b={db:C2,realtime:M2,auth:Object.assign(Object.assign({},D2),{storageKey:p}),global:R2},w=Y2(s??{},b);this.storageKey=(u=w.auth.storageKey)!==null&&u!==void 0?u:"",this.headers=(d=w.global.headers)!==null&&d!==void 0?d:{},w.accessToken?(this.accessToken=w.accessToken,this.auth=new Proxy({},{get:(S,k)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(k)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((f=w.auth)!==null&&f!==void 0?f:{},this.headers,w.global.fetch),this.fetch=H2(l,this._getAccessToken.bind(this),w.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},w.realtime)),this.rest=new t2(new URL("rest/v1",m).href,{headers:this.headers,schema:w.db.schema,fetch:this.fetch}),w.accessToken||this._listenForAuthEvents()}get functions(){return new $y(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}get storage(){return new z2(this.storageUrl.href,this.headers,this.fetch)}from(i){return this.rest.from(i)}schema(i){return this.rest.schema(i)}rpc(i,l={},s={}){return this.rest.rpc(i,l,s)}channel(i,l={config:{}}){return this.realtime.channel(i,l)}getChannels(){return this.realtime.getChannels()}removeChannel(i){return this.realtime.removeChannel(i)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var i,l;return Bb(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:s}=yield this.auth.getSession();return(l=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&l!==void 0?l:null})}_initSupabaseAuthClient({autoRefreshToken:i,persistSession:l,detectSessionInUrl:s,storage:u,storageKey:d,flowType:f,lock:v,debug:m},p,b){const w={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Ub({url:this.authUrl.href,headers:Object.assign(Object.assign({},w),p),storageKey:d,autoRefreshToken:i,persistSession:l,detectSessionInUrl:s,storage:u,flowType:f,lock:v,debug:m,fetch:b,hasCustomAuthorizationHeader:"Authorization"in this.headers})}_initRealtimeClient(i){return new p2(this.realtimeUrl.href,Object.assign(Object.assign({},i),{params:Object.assign({apikey:this.supabaseKey},i?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((l,s)=>{this._handleTokenChanged(l,"CLIENT",s?.access_token)})}_handleTokenChanged(i,l,s){(i==="TOKEN_REFRESHED"||i==="SIGNED_IN")&&this.changedAccessToken!==s?this.changedAccessToken=s:i==="SIGNED_OUT"&&(this.realtime.setAuth(),l=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const Hb=(r,i,l)=>new qb(r,i,l),Lb="https://yaexnrgsevmpgqssufgn.supabase.co",Gb="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZXhucmdzZXZtcGdxc3N1ZmduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNjU2MzgsImV4cCI6MjA2Nzg0MTYzOH0.JbIAs3iGav3gT7lw1cEetRRRDQ8jLf1KcHU8RMvGD70",Ym=Hb(Lb,Gb),Yb=O.createContext(Ym),$b=({children:r})=>h.jsx(Yb.Provider,{value:Ym,children:r}),Vb=document.getElementById("root"),Zb=wp.createRoot(Vb);Zb.render(h.jsx(Ua.StrictMode,{children:h.jsx(Bv,{children:h.jsx($b,{children:h.jsx(By,{})})})}));
