(this["webpackJsonpgithub-portfolio"]=this["webpackJsonpgithub-portfolio"]||[]).push([[0],{22:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),r=n(17),a=n.n(r),i=(n(22),n(3)),l=n.n(i),j=n(5),o=n(4),u=(n(8),n(6)),d=n.n(u),h=n(0);var b=function(e){var t=e.repos_url,n=Object(c.useState)([]),s=Object(o.a)(n,2),r=s[0],a=s[1],i=function(){var e=Object(j.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get(t);case 2:n=e.sent,c=n.data,a(c),console.log("repo data"+c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){i()}),[t]),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"reposrender",children:[Object(h.jsx)("h1",{className:"text-center",children:"Project"}),r.map((function(e){return Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("p",{children:e.name}),Object(h.jsx)("p",{children:Object(h.jsx)("a",{href:e.html_url,children:"Goto-Link"})})]},e.id)}))]})})};var p=function(){return Object(h.jsx)("div",{className:"hero",children:Object(h.jsx)("h1",{className:"heading",children:"Github PortFolio"})})};var O=function(e){var t=e.user;return Object(h.jsxs)("div",{className:"text-center mt-3 mb-4",children:[Object(h.jsx)("img",{className:"profile-pic",src:t.avatar_url}),Object(h.jsx)("h2",{className:"login",children:t.login}),Object(h.jsx)("div",{className:"userdata",children:Object(h.jsxs)("div",{className:"usertable",children:[Object(h.jsxs)("div",{className:"repos-link ",children:[Object(h.jsx)("span",{children:"html_url"}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:t.html_url,children:"goto link"})})]}),Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("span",{children:"repos_url"}),Object(h.jsx)("span",{children:t.repos_url})]}),Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("span",{children:"name"}),Object(h.jsx)("span",{children:t.name})]}),Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("span",{children:"company"}),Object(h.jsx)("span",{children:t.company})]}),Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("span",{children:"location"}),Object(h.jsx)("span",{children:t.location})]}),Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("span",{children:"email"}),Object(h.jsx)("span",{children:t.email})]}),Object(h.jsxs)("div",{className:"repos-link",children:[Object(h.jsx)("span",{children:"bio"}),Object(h.jsx)("span",{children:t.bio})]})]})})]})};var x=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),a=Object(o.a)(r,2),i=a[0],u=a[1],x=function(){var e=Object(j.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("https://api.github.com/users/".concat(n));case 3:t=e.sent,c=t.data,u(c),console.log(c.user),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert("No user find with this username");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{id:"inputuser",value:n,onChange:function(e){return s(e.target.value)},placeholder:"search Git User"}),Object(h.jsx)("button",{id:"Submit",onClick:x,children:"click me "}),Object(h.jsx)(p,{}),i?Object(h.jsx)(O,{user:i}):console.log("no"),i?Object(h.jsx)(b,{repos_url:i.repos_url}):null]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),m()},8:function(e,t,n){}},[[43,1,2]]]);
//# sourceMappingURL=main.0437dc22.chunk.js.map