"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[591],{913:function(r,e,t){t.d(e,{V:function(){return o},X:function(){return u}});var a=t(861),n=t(757),c=t.n(n),s=t(340);s.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="api_key=7d82ceb0ab1c027a8051fbbd2993d1d0",u=function(){var r=(0,a.Z)(c().mark((function r(e){var t,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.Z)("".concat(e,"?").concat(i));case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)(c().mark((function r(e){var t,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,s.Z)("search/movie?query=".concat(e,"&").concat(i));case 2:return t=r.sent,a=t.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},693:function(r,e,t){t.d(e,{Z:function(){return i}});var a="ErrorBackEnd_overlay__CkC+R",n="ErrorBackEnd_titleError__4mbQ0",c="ErrorBackEnd_titleErrorRed__rM2Bw",s=t(184),i=function(r){var e=r.errorBackEnd;return(0,s.jsx)("div",{className:a,children:(0,s.jsxs)("h1",{className:n,children:["Ups! Error: ",(0,s.jsx)("span",{className:c,children:e})]})})}},591:function(r,e,t){t.r(e),t.d(e,{default:function(){return g}});var a=t(861),n=t(439),c=t(757),s=t.n(c),i=t(913),u=t(693),o=t(883),p=t(791),l=t(689),d="CastPage_container__rbsf6",f="CastPage_castCardList__Kba-C",m="CastPage_castListItem__UTJnv",h="CastPage_castItemImg__DR9Is",_="CastPage_castItemParagraph__2oFmF",v="CastPage_castParagraphActor__GvqHt",x=t(184),g=function(){var r=(0,p.useState)({}),e=(0,n.Z)(r,2),t=e[0],c=e[1],g=(0,l.UO)().movieId,k=(0,p.useState)(""),b=(0,n.Z)(k,2),j=b[0],w=b[1],C=(0,p.useState)(!1),E=(0,n.Z)(C,2),Z=E[0],N=E[1];(0,p.useEffect)((function(){var r=function(){var r=(0,a.Z)(s().mark((function r(){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,N(!0),r.next=4,(0,i.X)("movie/".concat(g,"/credits"));case 4:e=r.sent,c(e),N(!1),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),w(r.t0.message);case 12:return r.prev=12,N(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[g]);var P=t.cast?t.cast.map((function(r){return(0,x.jsx)("li",{className:m,children:(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("img",{className:h,src:r.profile_path?"https://image.tmdb.org/t/p/w500/".concat(r.profile_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:150,alt:r.name}),(0,x.jsxs)("div",{className:_,children:[(0,x.jsx)("p",{className:v,children:r.name}),(0,x.jsx)("p",{children:r.character})]})]})},r.id)})):[];return(0,x.jsxs)(x.Fragment,{children:[j&&(0,x.jsx)(u.Z,{errorBackEnd:j}),Z&&(0,x.jsx)(o.Z,{}),!j&&!Z&&(0,x.jsx)("div",{className:d,children:(0,x.jsx)("ul",{className:f,children:P})})]})}}}]);
//# sourceMappingURL=591.029da5c9.chunk.js.map