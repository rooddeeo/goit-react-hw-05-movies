"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[346],{913:function(r,e,t){t.d(e,{V:function(){return o},X:function(){return u}});var n=t(861),a=t(757),s=t.n(a),c=t(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="api_key=7d82ceb0ab1c027a8051fbbd2993d1d0",u=function(){var r=(0,n.Z)(s().mark((function r(e){var t,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("".concat(e,"?").concat(i));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(s().mark((function r(e){var t,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,c.Z)("search/movie?query=".concat(e,"&").concat(i));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},693:function(r,e,t){t.d(e,{Z:function(){return i}});var n="ErrorBackEnd_overlay__CkC+R",a="ErrorBackEnd_titleError__4mbQ0",s="ErrorBackEnd_titleErrorRed__rM2Bw",c=t(184),i=function(r){var e=r.errorBackEnd;return(0,c.jsx)("div",{className:n,children:(0,c.jsxs)("h1",{className:a,children:["Ups! Error: ",(0,c.jsx)("span",{className:s,children:e})]})})}},346:function(r,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(913),u=t(693),o=t(883),l=t(791),p=t(689),h={list:"ReviewsPage_list__IK83Q",listItem:"ReviewsPage_listItem__d7Gc+",listParagraphAuthor:"ReviewsPage_listParagraphAuthor__qHqtU",listParagraphContent:"ReviewsPage_listParagraphContent__mc+E2"},d=t(184),f=function(){var r=(0,l.useState)([]),e=(0,a.Z)(r,2),t=e[0],s=e[1],f=(0,p.UO)().movieId,v=(0,l.useState)(!1),m=(0,a.Z)(v,2),_=m[0],x=m[1],k=(0,l.useState)(""),w=(0,a.Z)(k,2),g=w[0],E=w[1];return(0,l.useEffect)((function(){if(f){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,x(!0),r.next=4,(0,i.X)("movie/".concat(f,"/reviews"));case 4:e=r.sent,s(e),x(!1),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),E(r.t0.message);case 12:return r.prev=12,x(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}}),[f]),(0,d.jsx)("div",{className:h.container,children:(0,d.jsxs)("ul",{className:h.list,children:[g&&(0,d.jsx)(u.Z,{errorBackEnd:g}),_&&(0,d.jsx)(o.Z,{}),t.results&&t.results.length>0?t.results.map((function(r){return(0,d.jsxs)("li",{className:h.listItem,children:[(0,d.jsxs)("p",{className:h.listParagraphAuthor,children:["Author: ",r.author]}),(0,d.jsx)("p",{className:h.listParagraphContent,children:r.content})]},r.id)})):(0,d.jsx)("p",{className:h.paragraph,children:"We don`t have any reviews for this movie."})]})})}}}]);
//# sourceMappingURL=346.7d62759a.chunk.js.map