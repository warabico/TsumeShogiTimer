(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,n){e.exports=n(70)},59:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(40),i=n.n(o),c=(n(59),n(61),n(41)),l=n(17),u=n(10),s=n(89),f=n(91),h=n(94),d=n(45),m=function(e){var t=Object(d.useTimer)({expiryTimestamp:new Date,autoStart:!1,onExpire:function(){return A()}}),n=t.seconds,r=t.minutes,o=(t.hours,t.days,t.isRunning),i=(t.start,t.pause),c=(t.resume,t.restart),l=a.a.useRef(null),s=a.a.useState(!1),m=Object(u.a)(s,2),p=m[0],v=m[1],g=a.a.useState(!1),y=Object(u.a)(g,2),E=y[0],w=y[1],b=a.a.useState(0),x=Object(u.a)(b,2),k=x[0],O=x[1],L=a.a.useState(!1),S=Object(u.a)(L,2),j=S[0],N=S[1],_=a.a.useRef(),T=a.a.useRef(),G=a.a.useRef();if(_.current=p,T.current=e.enabled,G.current=e.running,!0===e.running){if(!0===e.enabled&&!1===p){var C=new Date;C.setSeconds(C.getSeconds()+e.seconds),c(C),v(!0),N(!0),l.current.focus()}!1===E&&(O(3),w(!0))}else 3===k&&O(0),1==o&&(i(),v(!1)),!0===E&&w(!1);var F=function(){_&&(i(),v(!1),O(1),e.callbackOK(e.seconds-(60*r+n)))},A=function(){v(!1),O(2),e.callbackNG()};return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,a.a.createElement("input",{type:"text",style:{height:0,background:"#1a2f52",border:"none"},onKeyDown:function(e){console.log("fire"),"Escape"===e.key&&j&&(T&&G&&_&&(console.log("a"),F()),N(!1))},ref:l}),e.enabled&&e.running?a.a.createElement(h.a,{sx:{width:"100%"}},a.a.createElement("div",{style:{color:2===k?"red":"white"}},0===k?"-":3===k?"-":1===k?"OK":"NG"),a.a.createElement("div",{style:{fontSize:"100px"}},a.a.createElement("span",null,("00"+r).slice(-2)),":",a.a.createElement("span",null,("00"+n).slice(-2))),a.a.createElement("div",{style:{fontSize:"40px",color:"gray"}},a.a.createElement("span",null,("00"+(Math.floor(e.seconds/60)-r)).slice(-2)),":",a.a.createElement("span",null,("00"+(e.seconds-n)).slice(-2))),a.a.createElement(f.a,{variant:"outlined",onClick:function(){return F()},sx:{width:"100%"}},"NEXT")):a.a.createElement(h.a,{sx:{width:"100%"}},a.a.createElement("div",{style:{color:2===k?"red":"white"}},0===k?"-":3===k?"-":1===k?"OK":"NG"),3===k?a.a.createElement("div",{style:{fontSize:"100px",color:"gray"}},a.a.createElement("span",null,("00"+Math.floor(e.seconds/60)).slice(-2)),":",a.a.createElement("span",null,("00"+e.seconds%60).slice(-2))):a.a.createElement("div",{style:{fontSize:"100px",color:"gray"}},a.a.createElement("span",null,("00"+r).slice(-2)),":",a.a.createElement("span",null,("00"+n).slice(-2))),3===k?a.a.createElement("div",{style:{fontSize:"40px"}},a.a.createElement("span",null,"00"),":",a.a.createElement("span",null,"00")):a.a.createElement("div",{style:{fontSize:"40px"}},a.a.createElement("span",null,("00"+(Math.floor(e.seconds/60)-r)).slice(-2)),":",a.a.createElement("span",null,("00"+(e.seconds-n)).slice(-2))),a.a.createElement(f.a,{disabled:!0,variant:"outlined",onClick:function(){return F()},sx:{width:"100%"}},"-"))))},p=n(95),v=n(93),g=n(96),y=n(97),E=n(98),w=n(99),b=n(100),x=function(e){var t={color:"black"},n={color:"red",fontWeight:"bold"};return a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{style:{width:"50%"},component:v.a},a.a.createElement(g.a,{"aria-label":"simple table"},a.a.createElement(y.a,null,a.a.createElement(E.a,null,a.a.createElement(w.a,{align:"center"},"#"),a.a.createElement(w.a,{align:"center"},"Time"),a.a.createElement(w.a,{align:"center"},"Answer"),a.a.createElement(w.a,{align:"center"},"Change Answer"))),a.a.createElement(b.a,null,e.secondsList.map(function(r,o){return a.a.createElement(E.a,{key:o,sx:{"&:last-child td, &:last-child th":{border:0}}},a.a.createElement(w.a,{align:"center",component:"th",sx:e.answerList[o]?t:n},"#"+("000"+(o+1)).slice(-3)),a.a.createElement(w.a,{align:"center",sx:e.answerList[o]?t:n},("00"+Math.floor(r/60)).slice(-2)+":"+("00"+r).slice(-2)),a.a.createElement(w.a,{align:"center",sx:e.answerList[o]?t:n},e.answerList[o]?"OK":"NG"),a.a.createElement(w.a,{align:"center"},a.a.createElement(f.a,{variant:"outlined",onClick:function(){return e.callbackChangeAnswer(o)}},"Change")))})))))};function k(){k=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(_){l=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new S(a||[]);return r(i,"_invoke",{value:b(e,n,c)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var f={};function h(){}function d(){}function m(){}var p={};l(p,o,function(){return this});var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&n.call(g,o)&&(p=g);var y=m.prototype=h.prototype=Object.create(p);function E(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){u.value=e,i(u)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function b(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=s(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=m,r(y,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:d,configurable:!0}),d.displayName=l(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(w.prototype),l(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new w(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},E(y),l(y,c,"Generator"),l(y,o,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var O=n(63),L=function(){var e=a.a.useState(new Audio("/TsumeShogiTimer/audio/sound_ok.mp3")),t=Object(u.a)(e,1)[0],n=a.a.useState(new Audio("/TsumeShogiTimer/audio/sound_ng.mp3")),r=Object(u.a)(n,1)[0],o=a.a.useState(0),i=Object(u.a)(o,2),h=i[0],d=i[1],p=a.a.useState(!1),v=Object(u.a)(p,2),g=v[0],y=v[1],E=a.a.useState(30),w=Object(u.a)(E,2),b=w[0],L=(w[1],a.a.useState([])),S=Object(u.a)(L,2),j=S[0],N=S[1],_=a.a.useState([]),T=Object(u.a)(_,2),G=T[0],C=T[1],F=function(e){t.play(),R(),K(e,!0)},A=function(){r.play(),R(),K(b,!1)},R=function(){h<3?d(h+1):(d(0),y(!1))},K=function(e,t){N(function(t){return[].concat(Object(l.a)(t),[e])}),C(function(e){return[].concat(Object(l.a)(e),[t])})},P=function(){var e=Object(c.a)(k().mark(function e(){var t,n,r,a,o,i,c,l,u;return k().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for((t=new O.Workbook).addWorksheet("result"),(n=t.getWorksheet("result")).columns=[{header:"#",key:"id"},{header:"time",key:"time"},{header:"answer",key:"answer"}],r=0;r<j.length;r++)n.addRow({id:("000"+(r+1)).slice(-3),time:("00"+Math.floor(j[r]/60)).slice(-2)+":"+("00"+j[r]).slice(-2),answer:G[r]?"OK":"NG"});return e.next=7,t.xlsx.writeBuffer();case 7:a=e.sent,o=new Date,i="tsumeshogi_"+o.getFullYear()+("00"+(o.getMonth()+1)).slice(-2)+("00"+(o.getDay()+1)).slice(-2)+"_"+("00"+o.getHours()).slice(-2)+("00"+o.getMinutes()).slice(-2)+".xlsx",c=new Blob([a],{type:"application/octet-binary"}),l=window.URL.createObjectURL(c),(u=document.createElement("a")).href=l,u.download=i,u.click(),u.remove();case 17:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",{style:{width:"90%"}}),a.a.createElement(s.a,{direction:{xs:"column",sm:"column",md:"row"},spacing:{xs:1,sm:2,md:4}},a.a.createElement(f.a,{variant:"contained",onClick:function(){return function(){if(!1===g)d(0),y(!0);else{for(var e=h;e<4;e++)K(b,!1);d(0),y(!1)}}()},size:"large"},g?"STOP":"START"),a.a.createElement(f.a,{disabled:g,variant:"contained",onClick:function(){return N([]),void C([])},size:"large"},"Reset"),a.a.createElement(f.a,{disabled:g,variant:"contained",onClick:function(){return P()},size:"large"},"Download Excel")),a.a.createElement(s.a,{direction:{xs:"column",sm:"column",md:"row"},spacing:{xs:1,sm:2,md:4}},a.a.createElement(m,{running:g,enabled:0===h,seconds:b,callbackOK:F,callbackNG:A}),a.a.createElement(m,{running:g,enabled:1===h,seconds:b,callbackOK:F,callbackNG:A}),a.a.createElement(m,{running:g,enabled:2===h,seconds:b,callbackOK:F,callbackNG:A}),a.a.createElement(m,{running:g,enabled:3===h,seconds:b,callbackOK:F,callbackNG:A})),a.a.createElement("hr",{style:{width:"90%"}}),a.a.createElement(x,{secondsList:j,answerList:G,callbackChangeAnswer:function(e){C(function(t){return t.map(function(t,n){return n===e?!t:t})})}}))};var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(L,null)))},j=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,90)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null))),j()}},[[50,3,2]]]);
//# sourceMappingURL=main.b3acc86d.chunk.js.map