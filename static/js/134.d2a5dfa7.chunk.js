"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{67:function(e,r,t){t.d(r,{Df:function(){return i},Pg:function(){return o},lP:function(){return f},tx:function(){return p},zv:function(){return l}});var n=t(861),a=t(757),c=t.n(a),s=t(243),u="https://api.themoviedb.org/3/";s.Z.defaults.params={api_key:"b9ef7946a51322c370f5716b1574be31"};var i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"trending/all/day"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"movie/").concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(u,"search/movie?query=").concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},734:function(e,r,t){t(791);var n=t(689),a=t(87),c=t(184);r.Z=function(e){var r=e.movies,t=(0,n.TH)();return(0,c.jsx)("ul",{className:"trending-list",children:r&&r.map((function(e){var r=e.id,n=e.poster_path,s=e.title,u=e.name;return(0,c.jsx)("li",{className:"trending-item",children:(0,c.jsxs)(a.rU,{state:{from:t},className:"trending-link",to:"/movies/".concat(r),children:[(0,c.jsx)("img",{className:"trending-item-img",width:300,src:n?"https://image.tmdb.org/t/p/w500/".concat(n):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:"Card to ".concat(s)}),(0,c.jsx)("h2",{className:"trending-item-title",children:s||u})]})},r)}))})}},134:function(e,r,t){t.r(r);var n=t(861),a=t(439),c=t(757),s=t.n(c),u=t(791),i=t(87),o=t(596),l=(t(462),t(430)),p=t(734),f=t(67),m=t(184);r.default=function(){var e=(0,i.lr)(),r=(0,a.Z)(e,2),t=r[0],c=r[1],h=(0,u.useState)({}),v=(0,a.Z)(h,2),d=v[0],x=v[1],g=(0,u.useState)(!1),b=(0,a.Z)(g,2),w=b[0],y=b[1],Z=(0,u.useState)(null),k=(0,a.Z)(Z,2),j=k[0],N=k[1],S=t.get("query");(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,S){e.next=3;break}return e.abrupt("return");case 3:return y(!0),e.next=6,(0,f.lP)(S);case 6:r=e.sent,x(r.results),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),N(o.Am.error("Sorry, something went wrong. Try again!",{theme:"colored"}));case 13:return e.prev=13,y(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[S]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault();var r=e.currentTarget.elements.searchMovieByName.value;c({query:r}),e.currentTarget.reset()},children:[(0,m.jsxs)("label",{className:"search-form-lable",children:[(0,m.jsx)("p",{className:"search-form-text",children:"Search movie by name"}),(0,m.jsx)("input",{className:"search-form-input",type:"text",name:"searchMovieByName"})]}),(0,m.jsx)("button",{className:"search-form-submit",children:"Search"})]}),w&&(0,m.jsx)(l.rj,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"grid-loading",radius:"12.5",wrapperStyle:{},wrapperClass:"",visible:!0}),j&&(0,m.jsx)(o.Ix,{}),d.length>0&&(0,m.jsx)(p.Z,{movies:d})]})}}}]);
//# sourceMappingURL=134.d2a5dfa7.chunk.js.map