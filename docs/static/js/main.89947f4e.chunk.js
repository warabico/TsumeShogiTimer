(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,n){},58:function(e,t,n){},72:function(e,t,n){e.exports=n(80)},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(49),l=n.n(c),s=(n(56),n(58),n(17)),u=n(11),i=n(22),o=n(69),m=n.n(o),d=n(103),f=function(e){var t=r.a.useState(new Audio(e.url)),n=Object(u.a)(t,1)[0];return{play:function(){n.pause(),n.currentTime=0,n.play()},load:function(){n.load()}}},E=function(){return{download:function(e){var t=new Uint8Array([239,187,191]),n=new Blob([t,e.data.join("\r\n")],{type:"text/csv"}),a=document.createElement("a"),r=window.URL.createObjectURL(n);a.href=r,a.setAttribute("download",e.filename),document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(r),document.body.removeChild(a)}}},v=n(53),p=function(e){var t=Object(v.useTimer)({expiryTimestamp:new Date,autoStart:!1,onExpire:function(){return e.callbackOnExpire()}}),n=t.seconds,a=t.minutes,r=(t.hours,t.days,t.isRunning),c=(t.start,t.pause),l=t.resume,s=t.restart;return{seconds:n,minutes:a,isRunning:r,startQuiz:function(){var t=new Date;t.setSeconds(t.getSeconds()+e.seconds),s(t)},answerQuiz:function(){c()},pauseQuiz:function(){c()},resumeQuiz:function(){l()}}},h=n(67),w=n.n(h),b=n(68),g=n.n(b),S=function(e){var t=function(t){return e.show?("00"+t).slice(-2):"--"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{fontSize:e.fontSize,color:e.active?"white":"gray"}},r.a.createElement("span",null,t(e.minutes)),":",r.a.createElement("span",null,t(e.seconds))))},y=function(e){var t=r.a.useState(!1),n=Object(u.a)(t,2),a=n[0],c=n[1],l=r.a.useState(Math.floor(e.seconds/60)),s=Object(u.a)(l,2),o=s[0],m=s[1],f=r.a.useState(e.seconds%60),E=Object(u.a)(f,2),v=E[0],h=E[1],b=p({seconds:v,callbackOnExpire:function(){return k()}}),y=r.a.useRef(null),O=function(){b.isRunning?b.startQuiz():(c(!0),m(Math.floor(e.seconds/60)),h(e.seconds%60),b.startQuiz(),e.callbackOnStart(),y.current.focus())},k=function(){x(),e.callbackOnTimeUp({minutes:o,seconds:v,result:2})},x=function(){e.continueQuiz?setTimeout(function(){return O()},10):c(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{container:!0,spacing:2,width:"90%"},r.a.createElement(i.a,{xs:10,xsOffset:1},r.a.createElement(i.a,{container:!0,spacing:2,width:"100%"},r.a.createElement(i.a,{xs:6},r.a.createElement(d.a,{fullWidth:!0,size:"large",variant:a?"outlined":"contained",startIcon:r.a.createElement(w.a,null),onClick:a?function(){}:function(){return O()}},"START")),r.a.createElement(i.a,{xs:6},r.a.createElement(d.a,{fullWidth:!0,size:"large",variant:a?"contained":"outlined",startIcon:r.a.createElement(g.a,null),onClick:function(){a&&(b.answerQuiz(),x(),e.callbackOnAnswer({minutes:o-b.minutes,seconds:v-b.seconds,result:1}))},ref:y},"ANSWER")),r.a.createElement(i.a,{xs:12},r.a.createElement(S,{show:a,active:a,minutes:b.minutes,seconds:b.seconds,fontSize:"48px"}))))))},O=n(113),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,null,function(){if(!e.show)return e.active?r.a.createElement("div",{style:{color:"white",fontSize:"16px"}},"-"):r.a.createElement("div",{style:{color:"gray",fontSize:"16px"}},"-");if(e.active)switch(e.result.result){case 1:return r.a.createElement("div",{style:{color:"white",fontSize:"16px"}},"OK");case 2:return r.a.createElement("div",{style:{color:"red",fontSize:"16px"}},"NG");case 0:default:return r.a.createElement("div",{style:{color:"white",fontSize:"16px"}},"-")}else switch(e.result.result){case 1:return r.a.createElement("div",{style:{color:"gray",fontSize:"16px"}},"OK");case 2:return r.a.createElement("div",{style:{color:"gray",fontSize:"16px"}},"NG");case 0:default:return r.a.createElement("div",{style:{color:"gray",fontSize:"16px"}},"-")}}(),r.a.createElement(S,{show:e.show,active:e.active,minutes:e.result.minutes,seconds:e.result.seconds,fontSize:"16px"})))},x=n(106),z=n(107),T=n(108),j=n(109),R=n(105),A=n(110),L=n(111),C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{sx:{maxHeight:240},style:{width:"90%",fontSize:"16px"},component:R.a},r.a.createElement(A.a,{"aria-label":"simple table",size:"small",stickyHeader:!0},r.a.createElement(L.a,null,r.a.createElement(z.a,null,r.a.createElement(T.a,{align:"center"},"Problem"),r.a.createElement(T.a,{align:"center"},"Time"),r.a.createElement(T.a,{align:"center"},"Result"),r.a.createElement(T.a,{align:"center"},"Debug"))),r.a.createElement(x.a,null,e.resultList.map(function(e,t){return r.a.createElement(z.a,{key:t},r.a.createElement(T.a,{align:"center"},"#"+("000"+(t+1)).slice(-3)),r.a.createElement(T.a,{align:"center"},("00"+e.minutes).slice(-2)+":"+("00"+e.seconds).slice(-2)),r.a.createElement(T.a,{align:"center"},0===e.result?"-":1===e.result?"OK":"NG"),r.a.createElement(T.a,{align:"center"},r.a.createElement(d.a,{variant:"outlined",onClick:function(){return console.log(t)}},"DEBUG")))})))))},F=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),n=(t[0],t[1]),a=r.a.useState(0),c=Object(u.a)(a,2),l=c[0],o=c[1],v=r.a.useState({active:!1,result:{minutes:0,seconds:0,result:0}}),p=Object(u.a)(v,2),h=p[0],w=p[1],b=r.a.useState({active:!1,result:{minutes:0,seconds:0,result:0}}),g=Object(u.a)(b,2),S=g[0],O=g[1],x=r.a.useState({active:!1,result:{minutes:0,seconds:0,result:0}}),z=Object(u.a)(x,2),T=z[0],j=z[1],R=r.a.useState({active:!1,result:{minutes:0,seconds:0,result:0}}),A=Object(u.a)(R,2),L=A[0],F=A[1],Q=r.a.useState([]),U=Object(u.a)(Q,2),N=U[0],D=U[1],G=f({url:"/TsumeShogiTimer/audio/sound_ok.mp3"}),I=f({url:"/TsumeShogiTimer/audio/sound_ng.mp3"}),B=E(),K=function(e){switch(l){case 0:F(function(e){return{active:!1,result:e.result}}),w({active:!0,result:e});break;case 1:w(function(e){return{active:!1,result:e.result}}),O({active:!0,result:e});break;case 2:O(function(e){return{active:!1,result:e.result}}),j({active:!0,result:e});break;case 3:j(function(e){return{active:!1,result:e.result}}),F({active:!0,result:e})}o((l+1)%4),D(function(t){return[].concat(Object(s.a)(t),[e])})};return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{style:{width:"90%"}}),r.a.createElement(y,{seconds:30,continueQuiz:l<3,callbackOnStart:function(){F(function(e){return{active:!1,result:e.result}}),n(!0),G.load(),I.load()},callbackOnTimeUp:function(e){switch(I.load(),l){case 0:F(function(e){return{active:!1,result:e.result}}),w({active:!0,result:e});break;case 1:w(function(e){return{active:!1,result:e.result}}),O({active:!0,result:e});break;case 2:O(function(e){return{active:!1,result:e.result}}),j({active:!0,result:e});break;case 3:j(function(e){return{active:!1,result:e.result}}),F({active:!0,result:e})}I.play(),K(e),n(!1)},callbackOnAnswer:function(e){switch(G.load(),l){case 0:F(function(e){return{active:!1,result:e.result}}),w(function(e){return{active:!0,result:e.result}});break;case 1:w(function(e){return{active:!1,result:e.result}}),O(function(e){return{active:!0,result:e.result}});break;case 2:O(function(e){return{active:!1,result:e.result}}),j(function(e){return{active:!0,result:e.result}});break;case 3:j(function(e){return{active:!1,result:e.result}}),F(function(e){return{active:!0,result:e.result}})}G.play(),K(e),n(!1)}}),r.a.createElement("hr",{style:{width:"90%"}}),r.a.createElement(i.a,{container:!0,spacing:2},r.a.createElement(i.a,{xs:6},r.a.createElement(k,{show:!0,active:T.active,result:T.result})),r.a.createElement(i.a,{xs:6},r.a.createElement(k,{show:!0,active:h.active,result:h.result})),r.a.createElement(i.a,{xs:6},r.a.createElement(k,{show:!0,active:L.active,result:L.result})),r.a.createElement(i.a,{xs:6},r.a.createElement(k,{show:!0,active:S.active,result:S.result}))),r.a.createElement("hr",{style:{width:"90%"}}),r.a.createElement(C,{resultList:N}),r.a.createElement("hr",{style:{width:"90%"}}),r.a.createElement(d.a,{variant:"contained",startIcon:r.a.createElement(m.a,null),onClick:function(){return function(){var e=[];e.push(["Problem","Time","Result"]);for(var t=0;t<N.length;t++){var n="#"+("000"+(t+1)).slice(-3),a=("00"+N[t].minutes).slice(-2)+":"+("00"+N[t].seconds).slice(-2),r=0===N[t].result?"-":1===N[t].result?"OK":"NG";e.push([n,a,r])}B.download({data:e,filename:"sample.csv"})}()}},"DOWNLOAD RESULT"),r.a.createElement("hr",{style:{width:"90%"}}))};var Q=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(F,null)))},U=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,102)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),U()}},[[72,3,2]]]);
//# sourceMappingURL=main.89947f4e.chunk.js.map