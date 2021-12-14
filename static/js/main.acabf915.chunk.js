(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{31:function(e,t,n){},51:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(25),s=n.n(r),l=(n(31),n(0)),o=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{class:"container-fluid",children:[Object(l.jsx)("a",{class:"navbar-brand",href:"/",children:"ICS2608"}),Object(l.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(l.jsxs)("div",{class:"navbar-nav",children:[Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact",children:"Home"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/employees",children:"Employees"}),Object(l.jsx)("a",{class:"nav-link",href:"/myfirstreact/add",children:"Add Employee"}),Object(l.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true",children:"Disabled"})]})})]})})})},i=n(15),j=n(2),d=n(5),b=n(26),h=n.n(b).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),u=function(){return h.get("/employees")},m=function(e){return h.post("/employees",e)},O=function(e){return h.put("/employees",e)},p=function(e){return h.get("/employees/".concat(e))},f=function(e){return h.delete("/employees/".concat(e))},x=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(d.a)(r,2),o=s[0],i=s[1],b=Object(c.useState)(""),h=Object(d.a)(b,2),u=h[0],f=h[1],x=Object(j.f)(),v=Object(j.g)().employeeid,y=Object(c.useState)(""),g=Object(d.a)(y,2),N=g[0],k=g[1];return Object(c.useEffect)((function(){v&&p(v).then((function(e){a(e.data.name),i(e.data.location),f(e.data.department)})).catch((function(e){console.error("something went wrong",e)}))})),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h3",{children:"Add Employee"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"name",className:"form-label",children:"Name:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:n,id:"name",placeholder:"Add employee name...",onChange:function(e){a(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"location",className:"form-label",children:"Location:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:o,id:"location",placeholder:"Add employee location...",onChange:function(e){i(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{for:"department",className:"form-label",children:"Department:"}),Object(l.jsx)("input",{type:"text",className:"form-control",value:u,id:"department",placeholder:"Add employee department...",onChange:function(e){f(e.target.value)}})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault(),n&&o&&u?(k(""),v?O({employeeid:v,name:n,location:o,department:u}).then((function(e){console.log("updated employee! Congrats",e.data),x("/employees")})).catch((function(e){console.error("big oof")})):m({name:n,location:o,department:u}).then((function(e){console.log("added new employee! Congrats",e.data),x("/employees")})).catch((function(e){console.error("big oof")}))):(console.error("Oops! Employee cannot be placed. Please fill each entry..."),k("Oops! Employee cannot be placed. Please fill each entry..."))}(e)},children:"Save"}),Object(l.jsx)("p",{id:"error",children:N&&Object(l.jsx)("p",{className:"error",children:N})})]})]})},v=(n(53),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){r()}));var r=function(){u().then((function(e){a(e.data)})).catch(console.log("ahhh sarado"))};return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"List of Employees"}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("table",{className:"table table-hover table-dark table-striped",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:"Location"}),Object(l.jsx)("td",{children:"Department"}),Object(l.jsx)("td",{children:"Action"})]})}),Object(l.jsx)("tbody",{children:n.map((function(e){return Object(l.jsxs)("tr",{className:"table-light",children:[Object(l.jsx)("td",{align:"left",children:e.name}),Object(l.jsx)("td",{align:"left",children:e.location}),Object(l.jsx)("td",{align:"left",children:e.department}),Object(l.jsx)("td",{children:Object(l.jsxs)("div",{className:"d-grid gap-2 d-md-flex",children:[Object(l.jsx)(i.b,{className:"btn btn-primary",to:"/myfirstreact/edit/".concat(e.employeeid),children:"Update"}),Object(l.jsx)("button",{className:"btn btn-danger",onClick:function(){return t=e.employeeid,void(window.confirm("Are you sure you want to delete?")&&f(t).then((function(e){console.log("succesfully deleted employee"),r()})).catch((function(e){console.error("something went wrong",e)})));var t},children:"Delete"})]})})]})}))})]})})]})}),y=(n.p,n(51),function(e){return Object(l.jsxs)("div",{children:[e.children,Object(l.jsxs)("h1",{children:["Hello ",e.name]})]})}),g=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:"this is a children prop"})})},N=n(3),k=n(4),C=n(7),w=n(6),A=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(){var e;return Object(N.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(k.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:this.addCounter,id:"Button",children:Object(l.jsx)("b",{children:"CLICK ME!!!"})}),Object(l.jsxs)("p",{children:["counts = ",this.state.count]})]})}}]),n}(a.a.Component),E=function(){return h.get("/hello")},S=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){E().then((function(e){a(e.data)})).catch((function(e){console.log("ahh something went wrong")}))})),n};var L=function(){return Object(l.jsx)("div",{className:"Home",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("img",{src:"https://www.seekpng.com/png/full/172-1729819_every-spread-of-the-2013-2014-marshall-yearbook.png",className:"App-logo",alt:"logo"}),Object(l.jsxs)("p",{children:["Edit ",Object(l.jsx)("code",{children:"src/App.js"})," and save to reload. --- ginagawa mo carlos"]}),Object(l.jsx)("p",{children:S()}),Object(l.jsx)(y,{name:"Sir Bryan",children:Object(l.jsx)(g,{})}),Object(l.jsxs)(y,{name:"Michael",children:[Object(l.jsx)(A,{}),Object(l.jsx)("p",{children:"Pag di mo pinindot babagsak ka"})]}),Object(l.jsx)(y,{name:"Vennett"}),Object(l.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},D=function(){return Object(l.jsx)("div",{children:Object(l.jsx)("h3",{children:"Page Not found"})})},P=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(i.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact",element:Object(l.jsx)(L,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/employees",element:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/add",element:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{exact:!0,path:"/myfirstreact/edit/:employeeid",element:Object(l.jsx)(x,{})}),Object(l.jsx)(j.a,{exact:!0,path:"*",element:Object(l.jsx)(D,{})})]})})})};var B=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(o,{}),Object(l.jsx)(P,{})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(52);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root")),F()}},[[54,1,2]]]);
//# sourceMappingURL=main.acabf915.chunk.js.map