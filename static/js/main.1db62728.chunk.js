(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"id":1,"name":"employee-directory","repo_url":"https://github.com/takolad/employee-directory","deploy_url":"https://takolad.github.io/employee-directory/","img":"https://raw.githubusercontent.com/takolad/employee-directory/main/assets/images/img-default.png","type":"solo","description":"This app is a React based employee directory that allows employees or managers to view non-sensitive data about other employees. The Directory is populated by data from the Random User Generator API."},{"id":2,"name":"budget-tracker","repo_url":"https://github.com/takolad/budget-tracker","deploy_url":"https://budget-citadel-90310.herokuapp.com/","img":"https://raw.githubusercontent.com/takolad/budget-tracker/main/public/assets/images/site-img.png","type":"solo","description":"A budget tracker with online/offline functionality, transactions can be entered offline and populate the total once returning online."},{"id":3,"name":"wandering-adventure","repo_url":"https://github.com/madison-vega/wandering-adventure","deploy_url":"","img":"https://via.placeholder.com/500x500.png?text=Image+Coming+Soon","type":"group","description":""},{"id":4,"name":"weather_dashboard","repo_url":"https://github.com/takolad/weather_dashboard","deploy_url":"https://takolad.github.io/weather_dashboard/","img":"https://raw.githubusercontent.com/takolad/weather_dashboard/main/assets/images/screen1.png","type":"solo","description":"This is a weather outlook page for the purpose of planning a trip. The site utilizes the third-party API, OpenWeather, to access and display weather information in a web based dashboard."},{"id":5,"name":"note-taker","repo_url":"https://github.com/takolad/note-taker","deploy_url":"https://whispering-wave.herokuapp.com/","img":"https://raw.githubusercontent.com/takolad/note-taker/main/public/assets/images/img-note_taker.png","type":"solo","description":"A note taking application using Express.js for the back end, saves and retrieves note data from a JSON file. The application is deployed to Heroku."},{"id":6,"name":"tech-blog","repo_url":"https://github.com/takolad/tech-blog","deploy_url":"https://lit-castle-83748.herokuapp.com/","img":"https://raw.githubusercontent.com/takolad/tech-blog/main/assets/images/site-img.png","type":"solo","description":"A CMS-style blog site for developers to blog posts and comment on other developers\' posts. The app will follow the MVC paradigm in structure using Handlebars.js for templating, Sequelize as ORM, and express-session for authentication."}]')},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(15),i=a.n(o),s=(a(21),a(22),a(2)),c=a(7),l=(a(23),a(0));var d=function(e){var t=Object(s.f)().pathname.split("/")[1];return console.log(t),Object(l.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top",children:[Object(l.jsx)("span",{className:"navbar-brand ms-3",children:"John Hinojosa's Portfolio"}),Object(l.jsx)("a",{className:"navbar-brand",href:"/home",children:Object(l.jsx)("span",{className:"home"===t?"nav-link navbar-text active":"nav-link navbar-text",children:"Home"})}),Object(l.jsx)(c.b,{className:"navbar-brand",to:"/portfolio",children:Object(l.jsx)("span",{className:"portfolio"===t?"nav-link navbar-text active":"nav-link navbar-text",children:"Portfolio"})}),Object(l.jsx)(c.b,{className:"navbar-brand",to:"/contact",children:Object(l.jsx)("span",{className:"contact"===t?"nav-link navbar-text active":"nav-link navbar-text",children:"Contact"})}),Object(l.jsx)("a",{className:"navbar-brand ms-auto",href:"https://github.com/takolad",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{className:"navText",children:"GitHub Profile"})}),Object(l.jsx)("a",{className:"navbar-brand",href:"https://www.linkedin.com/in/john-hinojosa/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("span",{className:"navText",children:"LinkedIn Profile"})})]})};a(33);var h=function(){return Object(l.jsx)("footer",{className:"fixed-bottom footer",children:Object(l.jsxs)("span",{children:["\xa9 Copyright ",(new Date).getFullYear()," John Hinojosa"]})})};function p(e){var t=e.fluid,a=e.children;return Object(l.jsx)("div",{className:"container".concat(t?"-fluid":""),children:a})}function b(e){var t=e.fluid,a=e.children;return Object(l.jsx)("div",{className:"row".concat(t?"-fluid":""),children:a})}function j(e){var t=e.size,a=e.children;return Object(l.jsx)("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" "),children:a})}a(34);var m=function(e){var t=e.props,a=t.name+" screenshot",n="/portfolio/".concat(t.id);return Object(l.jsxs)("div",{className:"project-container",children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)(c.b,{to:n,data:t,children:Object(l.jsx)("img",{alt:a,src:t.img})})]})},u=a(10);var g=function(){return Object(l.jsx)(p,{fluid:!0,children:u.length?Object(l.jsx)(b,{children:u.map((function(e){return Object(l.jsx)(j,{size:"md-6 sm-12",children:Object(l.jsx)(m,{props:e},e.id)})}))}):Object(l.jsx)("h3",{children:"No Projects Found \ud83d\ude14"})})};a(35);var f=function(e){var t=e.content;return Object(l.jsxs)("div",{className:"card text-center",children:[Object(l.jsx)("div",{className:"card-header",children:Object(l.jsx)("h2",{children:t.heading})}),Object(l.jsx)("div",{className:"card-body",children:t.body})]})};var x=function(){return Object(l.jsxs)(p,{children:[Object(l.jsx)(f,{content:{heading:"Greetings!",body:"My name is John Hinojosa and I'm a full-stack developer living in San Antonio, please have a look at my portfolio!"}}),Object(l.jsx)(b,{children:Object(l.jsx)(c.b,{to:"/portfolio",children:"View Portfolio"})})]})},v=a.p+"static/media/self-img.d9792653.jpg";a(36);var O=function(){return Object(l.jsxs)("div",{className:"contact-card row",children:[Object(l.jsx)(j,{size:"sm-4 12",children:Object(l.jsx)("img",{className:"self-img",src:v,alt:"John Hinojosa, handsome, rad, full-stack developer"})}),Object(l.jsx)(j,{size:"sm-8",children:Object(l.jsxs)("span",{className:"contact-info",children:["Thank you for your time, feel free to contact me by:",Object(l.jsxs)("h4",{children:["Email: ",Object(l.jsx)("a",{href:"mailto:hinojohn@ymail.com",children:"hinojohn@ymail.com"}),Object(l.jsx)("br",{}),"Google Voice: ",Object(l.jsx)("a",{href:"tel:737-231-0139",children:"737-231-0139"})]})]})})]})};var y=function(){return Object(l.jsx)(p,{children:Object(l.jsx)(O,{})})};var k=function(){var e=u,t=Object(s.f)(),a=e.filter((function(e){return e.id===parseInt(t.pathname.slice(-1))})),n=a[0].name+" screenshot";return Object(l.jsx)(p,{children:Object(l.jsx)(b,{children:Object(l.jsxs)(j,{size:"12",children:[Object(l.jsx)("h3",{children:a[0].name}),Object(l.jsx)("div",{className:"project-body",children:Object(l.jsx)("img",{alt:n,src:a[0].img})}),Object(l.jsxs)("div",{className:"project-links",children:[a[0].deploy_url?Object(l.jsx)("a",{href:a[0].deploy_url,target:"_blank",rel:"noreferrer",children:"Deployed Site"}):"No deployed link yet available",Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:a[0].repo_url,target:"_blank",rel:"noreferrer",children:"Repository Link"})]})]})})})};var w=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(d,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{exact:!0,path:"/home",component:x}),Object(l.jsx)(s.a,{exact:!0,path:"/portfolio",component:g}),Object(l.jsx)(s.a,{exact:!0,path:"/portfolio/:id",component:k}),Object(l.jsx)(s.a,{exact:!0,path:"/contact",component:y}),Object(l.jsx)(s.a,{path:"*",component:x})]}),Object(l.jsx)(h,{})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(w,{})}),document.getElementById("root")),N()}},[[37,1,2]]]);
//# sourceMappingURL=main.1db62728.chunk.js.map