(this["webpackJsonpez-sens"]=this["webpackJsonpez-sens"]||[]).push([[0],{103:function(e,a,t){e.exports=t(324)},108:function(e,a,t){},109:function(e,a,t){},22:function(e,a,t){e.exports={From:"Item_From__13q0M",To:"Item_To__q_hhG",SensDpiFrom:"Item_SensDpiFrom__1rc8b",ConvertedValue:"Item_ConvertedValue__2rMnb",WaitingLeft:"Item_WaitingLeft__bQZLW",WaitingRight:"Item_WaitingRight__YRgcQ"}},324:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(8),i=t.n(c),r=(t(108),t(109),t(95)),o=t.n(r),s=t(23),m=t(59),u=t(22),d=t.n(u),v=t(352),b=t(54),E=t.n(b),g=t(55),f=function(){var e=[{value:1,label:"Valorant"},{value:2,label:"CS:GO"},{value:3,label:"Overwatch"}],a=Object(l.useState)("game"),t=Object(s.a)(a,2),c=t[0],i=t[1],r=Object(l.useState)("game"),o=Object(s.a)(r,2),u=o[0],b=o[1],f=Object(l.useState)("1"),h=Object(s.a)(f,2),_=h[0],p=h[1],O=Object(l.useState)("800"),S=Object(s.a)(O,2),w=S[0],y=S[1],C=Object(l.useState)(1),j=Object(s.a)(C,2),W=j[0],I=j[1],T=Object(l.useState)(!0),V=Object(s.a)(T,2),x=V[0],D=V[1],G=n.a.useCallback((function(){return D(!x)}));Object(l.useEffect)((function(){console.log(c.value+""+u.value),console.log(w),console.log(_),N(),console.log(W)}));var N=function(){"Valorant"==c.label&&("Valorant"==u.label&&I(1*_),"CS:GO"==u.label&&I(3.18*_),"Overwatch"==u.label&&I(10.61*_)),"CS:GO"==c.label&&("CS:GO"==u.label&&I(1*_),"Valorant"==u.label&&I(_/3.18),"Overwatch"==u.label&&I(3.33*_)),"Overwatch"==c.label&&("Overwatch"==u.label&&I(1*_),"Valorant"==u.label&&I(_/10.61),"CS:GO"==u.label&&I(_/3.33))};return n.a.createElement("div",null,n.a.createElement("div",{className:d.a.From},"Select Game (from): ",c.label,n.a.createElement(m.a,{onChange:function(e){i(e),x&&"game"!==u&&G()},options:e})),n.a.createElement("div",{className:d.a.To},"Select Game (to): ",u.label,n.a.createElement(m.a,{onChange:function(e){b(e),x&&"game"!==c&&G()},options:e})),n.a.createElement("div",{className:d.a.WaitingLeft},n.a.createElement(E.a,{size:10,color:"gray",loading:x})),n.a.createElement("div",null,n.a.createElement("div",{className:d.a.WaitingRight},n.a.createElement(E.a,{size:10,color:"gray",loading:x})),n.a.createElement("div",{className:d.a.SensDpiFrom},n.a.createElement("div",null,c.label," Sensitivity & DPI:"),n.a.createElement("div",null,n.a.createElement(v.a,{id:"standard-basic",label:"Sensitivity",onChange:function(e){p(e.target.value)},defaultValue:_})),n.a.createElement("div",null,n.a.createElement(v.a,{id:"standard-basic",label:"DPI",defaultValue:w,onChange:function(e){y(e.target.value)}})))),n.a.createElement("div",{className:d.a.ConvertedValue},x?n.a.createElement(g.Wave,{iterations:"1",text:"Waiting..."}):x?void 0:n.a.createElement(g.Wave,{iterations:"1",text:W.toFixed(3)})))},h=t(56),_=t.n(h),p=t(27),O=t.n(p),S=t(99);var w=function(){return n.a.createElement("div",null,n.a.createElement("div",{className:_.a.Title},n.a.createElement("div",null,"Ez-Sens")),n.a.createElement(O.a,{className:_.a.Text},n.a.createElement(O.a.Delay,{ms:1e3}),n.a.createElement("span",null,"made with react. "),n.a.createElement(O.a.Delay,{ms:500}),n.a.createElement(O.a.Backspace,{count:17,delay:400}),n.a.createElement(O.a.Delay,{ms:500}),n.a.createElement("span",null," ","by slippa. ",n.a.createElement(S.a,null)," ")))};var y=function(){return n.a.createElement("div",null,n.a.createElement(w,null),n.a.createElement("div",{className:o.a.Items},n.a.createElement(f,null)))},C=t(98),j=t(97),W=t.n(j),I=function(){return n.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},n.a.createElement(W.a,{params:{particles:{number:{value:20},size:{value:2},color:{value:"#080808"},line_linked:{enable:!1}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}}}))};var T=function(){return n.a.createElement(C.a,null,n.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},n.a.createElement(I,null),n.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}},n.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,a,t){e.exports={Title:"TitleHead_Title__15cq1",fadein:"TitleHead_fadein__28QVG",Text:"TitleHead_Text__28D1Y"}},95:function(e,a,t){e.exports={Items:"Calculator_Items__2t8EY",fadein:"Calculator_fadein__-Wjl6"}}},[[103,1,2]]]);
//# sourceMappingURL=main.a17c1370.chunk.js.map