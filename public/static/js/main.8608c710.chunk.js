(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){"use strict";c.r(t);var n=c(6),s=c.n(n),a=c(45),i=c.n(a),r=(c(64),c(14)),l=c(3);var j=function(e){var t=e.cityName,c=e.setCityName,n=e.setShowForecast;return Object(l.jsxs)("div",{className:" input-field col s12 m9 l10",children:[Object(l.jsx)("input",{id:"cityInput",type:"text",className:"validate",value:t,onChange:function(e){c(e.target.value),n(!1)}}),Object(l.jsx)("label",{htmlFor:"cityInput",children:"Enter a city"})]})};var o,h=function(e){var t=e.setShowForecast;return Object(l.jsx)("div",{className:"btn-wrapper col s12 m3 l2",children:Object(l.jsxs)("button",{className:"btn waves-effect waves-light",type:"submit",name:"action",onClick:function(){t(!0)},children:["Submit",Object(l.jsx)("i",{className:"material-icons right",children:"cloud"})]})})},d=c(51),b=(c(66),c(75)),m=c(77),O=c(74),x=c(46),u=c(76),p=c(78),N=c(49),w=c(50),v=c(29),y=Object(u.a)(o||(o=Object(x.a)(["\n  query CityWeatherQuery($cityName: String!) {\n    CityWeather(name: $cityName) {\n      name\n      main {\n        temp\n        humidity\n        feels_like\n        pressure\n      }\n      weather {\n        main\n        icon\n        description\n      }\n      wind {\n        speed\n      }\n    }\n  }\n"]))),f=function(e){var t=e.cityName,c=(e.setShowForecast,Object(p.a)(y,{variables:{cityName:t}})),n=c.loading,s=c.error,a=c.data;if(n)return Object(l.jsx)("h3",{children:"Loading..."});if(s)return console.log(s),Object(l.jsxs)("h3",{children:["Error...! ",s]});if(null!==a.CityWeather.name){var i=a.CityWeather.main,r=a.CityWeather.weather[0],j=a.CityWeather.wind,o=(new Date).toLocaleDateString("en-GB",{weekday:"long",year:"numeric",month:"short",day:"numeric"});return Object(l.jsxs)("div",{className:"forecast-container ".concat(i.temp>16?"warm":"cold"),children:[Object(l.jsxs)("div",{className:"degree-wrapper",children:[Object(l.jsx)("time",{className:"current-time",children:o}),Object(l.jsxs)("h4",{children:[Object(l.jsx)("img",{className:"weather-icon",src:"https://openweathermap.org/img/wn/".concat(r.icon,"@2x.png"),alt:"weather-icon"}),r.main]}),Object(l.jsx)("span",{children:r.description}),Object(l.jsx)("h2",{children:a.CityWeather.name}),Object(l.jsxs)("h1",{children:[" ",Math.floor(i.temp),"\xb0"]})]}),Object(l.jsxs)("div",{className:"details-wrapper",children:[Object(l.jsxs)("div",{className:"detail-box",children:[Object(l.jsx)(N.a,{className:"detail-icon"}),Object(l.jsx)("p",{children:"humidity"}),Object(l.jsxs)("h4",{children:[i.humidity," %"]})]}),Object(l.jsxs)("div",{className:"detail-box",children:[Object(l.jsx)(w.a,{className:"detail-icon"}),Object(l.jsx)("p",{children:"Feels like"}),Object(l.jsxs)("h4",{children:[Math.floor(i.feels_like)," ","\xb0"]})]}),Object(l.jsxs)("div",{className:"detail-box",children:[Object(l.jsx)(v.d,{className:"detail-icon"}),Object(l.jsx)("p",{children:"Wind"}),Object(l.jsxs)("h4",{children:[j.speed," m/s"]})]}),Object(l.jsxs)("div",{className:"detail-box",children:[Object(l.jsx)(v.c,{className:"detail-icon"}),Object(l.jsx)("p",{children:"Pressure"}),Object(l.jsxs)("h4",{children:[i.pressure," hPa"]})]})]})]})}return Object(l.jsx)("h3",{children:"city not found"})},g=function(){return Object(l.jsxs)("section",{className:"footer-container row",children:[Object(l.jsx)("div",{className:"col l6 s12",children:Object(l.jsx)("ul",{children:Object(l.jsxs)("li",{children:["\xa9"," Copyright 2022 - brkzmn"]})})}),Object(l.jsx)("div",{className:"col l6 s12",children:Object(l.jsxs)("ul",{className:"contact-wrapper",children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://www.linkedin.com/in/burak-%C3%B6zmen/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(v.b,{})})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"https://github.com/brkzmn",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(v.a,{})})})]})})]})},C=new b.a({uri:"/graphql",cache:new m.a});var k=function(){var e=Object(n.useState)(void 0),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(r.a)(a,2),o=i[0],b=i[1];return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(O.a,{client:C,children:[Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("h1",{className:"logo-title",children:"HackYourTemperature-GraphQL"}),Object(l.jsx)(d.a,{className:"logo-icon"})]}),Object(l.jsxs)("div",{className:"weather-container",children:[Object(l.jsxs)("div",{className:"row input-container ".concat(o?"up":"down"),children:[Object(l.jsx)(j,{cityName:c,setCityName:s,setShowForecast:b}),Object(l.jsx)(h,{setShowForecast:b})]}),o&&Object(l.jsx)(f,{cityName:c,setShowForecast:b})]}),Object(l.jsx)(g,{})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(k,{})})),S()}},[[67,1,2]]]);
//# sourceMappingURL=main.8608c710.chunk.js.map