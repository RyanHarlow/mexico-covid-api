(this["webpackJsonpmexico-covid-map"]=this["webpackJsonpmexico-covid-map"]||[]).push([[0],{35:function(e,t,a){e.exports=a(62)},40:function(e,t,a){},41:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(26),i=a.n(o),c=(a(40),a(41),a(27)),l=a(28),s=a(32),p=a(33),u=a(10),m=a(30),d=a.n(m),f={id:"data",type:"fill",paint:{"fill-color":{property:"percentile",stops:[[0,"rgba(255, 0, 0, .07)"],[1,"rgba(255, 0, 0, .14)"],[2,"rgba(255, 0, 0, .21)"],[3,"rgba(255, 0, 0, .28)"],[4,"rgba(255, 0, 0, .35)"],[5,"rgba(255, 0, 0, .42)"],[6,"rgba(255, 0, 0, .49)"],[7,"rgba(255, 0, 0, .56)"],[8,"rgba(255, 0, 0, .63)"]]}}},v=a(14),b=a(64),h=a(65);function g(e,t){var a=e.features,n=Object(h.a)().domain(a.map(t)).range(Object(b.a)(9));return{type:"FeatureCollection",features:a.map((function(e){var a=t(e),r=Object(v.a)({},e.properties,{percentile:n(a)});return Object(v.a)({},e,{properties:r})}))}}var y=function(e){Object(p.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:null,viewport:{latitude:21.595592196250625,longitude:-100,zoom:3.2241780332970342,bearing:0,pitch:0}},e._loadData=function(t){e.setState({data:g(t,(function(e){return e.properties.totalCases}))})},e._onViewportChange=function(t){return e.setState({viewport:t})},e._onClick=function(t){var a=t.features,n=t.srcEvent,r=n.offsetX,o=n.offsetY,i=a&&a.find((function(e){return"data"===e.layer.id}));e.setState({clickedFeature:i,x:r,y:o})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/geojson").then((function(t){var a=t.data;console.log(a),e._loadData(a)}))}},{key:"_renderTooltip",value:function(){var e=this.state,t=e.clickedFeature,a=e.x,n=e.y;return t&&r.a.createElement("div",{className:"tooltip",style:{left:a,top:n,margin:"1em",fontSize:"20px"}},r.a.createElement("div",null,"State: ",t.properties.name),r.a.createElement("div",null,"Number Of Cases: ",t.properties.totalCases))}},{key:"render",value:function(){var e=this.state,t=e.viewport,a=e.data;return r.a.createElement("div",{style:{height:"100%",width:"100%",position:"relative"}},r.a.createElement(u.c,Object.assign({},t,{width:"100vw",height:"100vh",mapStyle:"mapbox://styles/mapbox/light-v9",onViewportChange:this._onViewportChange,mapboxApiAccessToken:"pk.eyJ1Ijoicnlhbmhhcmxvdzk1IiwiYSI6ImNrNTJ1c2NtbDAxdzczZ250eGZ5ZXYyY2gifQ.2EN37mO-Fn8QNmu-FoOFDA",onClick:this._onClick}),r.a.createElement(u.b,{type:"geojson",data:a},r.a.createElement(u.a,f)),this._renderTooltip()))}}]),a}(n.Component);a(61);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};i.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.46fe315d.chunk.js.map