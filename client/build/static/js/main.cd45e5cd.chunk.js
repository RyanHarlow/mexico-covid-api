(this["webpackJsonpmexico-covid-map"]=this["webpackJsonpmexico-covid-map"]||[]).push([[0],{36:function(e,t,a){e.exports=a(64)},41:function(e,t,a){},42:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),l=a(29),o=a.n(l),i=(a(41),a(42),a(30)),c=a(31),s=a(33),u=a(34),p=a(12),m=a(9),d=a.n(m),b={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,"rgba(255, 255, 0, .5)"],[1,"rgba(255, 223, 0, .5)"],[2,"rgba(255, 191, 0, .5)"],[3,"rgba(255, 159, 0, .5)"],[4,"rgba(255, 128, 0, .5)"],[5,"rgba(255, 96, 0, .5)"],[6,"rgba(255, 64, 0, .5)"],[7,"rgba(255, 32, 0, .5)"],[8,"rgba(255, 0, 0, .5)"]]}}},f=a(17),h=a(66),v=a(67);function g(e,t){var a=e.features,n=Object(v.a)().domain(a.map(t)).range(Object(h.a)(9));return{type:"FeatureCollection",features:a.map((function(e){var a=t(e),r=Object(f.a)({},e.properties,{percentile:n(a)});return Object(f.a)({},e,{properties:r})}))}}var E=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:null,viewport:{latitude:21.595592196250625,longitude:-100,zoom:3.2241780332970342,bearing:0,pitch:0}},e._loadData=function(t){e.setState({data:g(t,(function(e){return e.properties.totalCases}))})},e._onViewportChange=function(t){return e.setState({viewport:t})},e._onClick=function(t){var a=t.features,n=t.srcEvent,r=n.offsetX,l=n.offsetY,o=a&&a.find((function(e){return"data"===e.layer.id}));e.setState({clickedFeature:o,x:r,y:l})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/geojson").then((function(t){var a=t.data;console.log(a),e._loadData(a)}))}},{key:"_renderTooltip",value:function(){var e=this.state,t=e.clickedFeature;e.x,e.y;return t&&r.a.createElement("div",{className:"tooltip",style:{position:"absolute",top:"10px",left:"10px",margin:".5em",fontSize:"20px",backgroundColor:"white",display:"inline-block",padding:"1rem",border:"1px solid black",borderRadius:"1em",zIndex:1e3}},r.a.createElement("div",null,"State: ",t.properties.name),r.a.createElement("div",null,"Number Of Cases: ",t.properties.totalCases),r.a.createElement("div",null,"Number Of Deaths: ",t.properties.totalDeaths))}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.data;return console.log(JSON.stringify(this.state.clickedFeature)),r.a.createElement("div",{style:{height:"100%",width:"100%",position:"relative"}},r.a.createElement(p.c,Object.assign({},t,{width:"100vw",height:"80vh",mapStyle:"mapbox://styles/mapbox/dark-v9",onViewportChange:this._onViewportChange,mapboxApiAccessToken:"pk.eyJ1Ijoicnlhbmhhcmxvdzk1IiwiYSI6ImNrNTJ1c2NtbDAxdzczZ250eGZ5ZXYyY2gifQ.2EN37mO-Fn8QNmu-FoOFDA",onClick:this._onClick}),r.a.createElement(p.b,{type:"geojson",data:a},r.a.createElement(p.a,b))),this._renderTooltip())}}]),a}(n.Component),y=(a(62),a(63),a(16));var k=function(e){var t=Object(n.useState)(null),a=Object(y.a)(t,2),l=a[0],o=a[1],i=Object(n.useState)(null),c=Object(y.a)(i,2),s=c[0],u=c[1];return Object(n.useEffect)((function(){d.a.get("/api/total").then((function(e){o(e.data.totalDeaths),u(e.data.totalCases)}))}),[]),r.a.createElement("nav",{className:"navbar is-black",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container",style:{display:"flex",flexDirection:"column"}},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"https://bulma.io",style:{margin:0,padding:0}},r.a.createElement("h3",{style:{color:"white",fontSize:"20px"},class:"title is-3"},r.a.createElement("strong",null,"Coronavirus Tracker Mexico")))),r.a.createElement("div",{style:{margin:0,padding:0}},r.a.createElement("p",null,"Total Deaths: ",l),r.a.createElement("p",null,"Total Cases: ",s))))};var w=function(e){return r.a.createElement("footer",{style:{backgroundColor:"black"},class:"footer is-black has-text-white"},r.a.createElement("div",{class:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",{style:{color:"white"}},"COV MX")," by Ryan Harlow. The website and source code is licensed ",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),"."),r.a.createElement("p",null,"API documentation can be found ",r.a.createElement("a",{href:"https://github.com/RyanHarlow/mexico-covid-api"},"Here")),r.a.createElement("p",null,"Data obtained from the ",r.a.createElement("a",{href:"https://www.gob.mx/salud"},"Secretaria de Salud"))))};var x=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(E,null),r.a.createElement(w,null))};o.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.cd45e5cd.chunk.js.map