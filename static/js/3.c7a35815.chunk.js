(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{231:function(t,e,s){t.exports={title:"StatsPage_title__1nvV2",statsBlock:"StatsPage_statsBlock__4nZ3i",row:"StatsPage_row__1nFcH",header:"StatsPage_header__1dwcF",date:"StatsPage_date__2S-t1"}},233:function(t,e,s){"use strict";s.r(e);var a=s(8),c=s(37),n=s(231),i=s.n(n),r=s(0),j=function(t){var e=t.size,s=t.date,a=t.time,c=t.trueAttempts,n=t.falseAttempts,j=t.allAttempts;return Object(r.jsxs)("div",{className:i.a.row,children:[Object(r.jsx)("span",{className:i.a.date,children:s}),Object(r.jsx)("span",{children:e}),Object(r.jsx)("span",{children:a}),Object(r.jsx)("span",{children:c}),Object(r.jsx)("span",{children:n}),Object(r.jsx)("span",{children:j})]})},l=s(41),d=s(10);e.default=Object(a.b)((function(t){return{finishedGames:Object(c.b)(t),isAuth:Object(l.a)(t)}}))((function(t){var e=t.finishedGames;if(!t.isAuth)return Object(r.jsx)(d.a,{to:"/login"});var s=function(t){return t<10?"0"+t:t},a=e.map((function(t,e){var a=t.id,c=t.date,n=t.size,i=t.minutes,l=t.seconds,d=t.trueAttempts,p=t.falseAttempts;return Object(r.jsx)(j,{date:c,size:n,time:"".concat(s(i),":").concat(s(l)),trueAttempts:d,falseAttempts:p,allAttempts:d+p},a||e)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:i.a.title,children:"Game statistic"}),Object(r.jsxs)("div",{className:i.a.statsBlock,children:[Object(r.jsxs)("div",{className:i.a.header,children:[Object(r.jsx)("span",{children:"Date"}),Object(r.jsx)("span",{children:"Field size"}),Object(r.jsx)("span",{children:"Time"}),Object(r.jsx)("span",{children:"Right attempts"}),Object(r.jsx)("span",{children:"Wrong attempts"}),Object(r.jsx)("span",{children:"All attempts"})]}),a]})]})}))}}]);
//# sourceMappingURL=3.c7a35815.chunk.js.map