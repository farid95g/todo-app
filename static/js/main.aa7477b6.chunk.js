(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var o=c(1),n=c.n(o),s=c(6),a=c.n(s),i=(c(12),c(5)),l=(c(13),c(7)),d=c(17),j=c(0),r=function(e){var t=e.newTodoText,c=e.setNewTodoText,o=e.todos,n=e.setTodos;return Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{onChange:function(e){c(e.target.value)},value:t,type:"text",className:"todo-input"}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),n([].concat(Object(l.a)(o),[{id:Object(d.a)(),text:t,completed:!1}])),c("")},className:"todo-button",type:"submit",children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{name:"todos",className:"filter-todo",children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"completed",children:"Completed"}),Object(j.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=function(){return Object(j.jsx)("div",{className:"todo-container",children:Object(j.jsx)("ul",{className:"todo-list"})})};var b=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(o.useState)([]),a=Object(i.a)(s,2),l=a[0],d=a[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsxs)("h1",{children:["To Do List ",c]})}),Object(j.jsx)(r,{newTodoText:c,setNewTodoText:n,todos:l,setTodos:d}),Object(j.jsx)(u,{})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,o=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),o(e),n(e),s(e),a(e)}))};a.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.aa7477b6.chunk.js.map