(this.webpackJsonpdealers=this.webpackJsonpdealers||[]).push([[0],{38:function(e,t,s){},39:function(e,t,s){},57:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),i=s(33),r=s(2),c=s(32),o=s.n(c),l=(s(38),s(39),s(5)),u=s(6),d=s(8),h=s(7),p=s(12),j=s.n(p),b=s.p+"static/media/logo.9e90c648.png",m=(s(57),s(11)),f=s(19),O=s(13),v=s(0);function y(e){var t=e.showMenu,s=e.toggleMenu;return t?Object(v.jsx)("div",{className:"menu-overlay",onClick:s}):""}function g(e){var t=e.menu;return t&&t.length?Object(v.jsx)("div",{className:"sub-menu",children:t.map((function(e){var t=e.title,s=e.url,a=e.id;return Object(v.jsx)("div",{children:Object(v.jsx)("a",{href:s,children:t})},a)}))}):""}function x(e){var t=e.showMenu,s=e.menu;return t?Object(v.jsx)("nav",{children:s.map((function(e){var t=e.title,s=e.url,a=e.id,n=e.children;return Object(v.jsxs)("div",{children:[Object(v.jsx)("a",{href:s,children:t}),Object(v.jsx)(g,{menu:n})]},a)}))}):""}var w=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={name:"",description:"",isLoaded:!1,showMenu:!1,menu:null},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this,t="https://nichesnowboards.com/wp-json";j.a.get("".concat(t,"/nichesnowboards/v1/menu/")).then((function(t){e.setState({menu:t.data.reduce(e.buildMenu,[])})})).catch((function(e){return console.log(e)})),j.a.get("".concat(t,"/")).then((function(t){return e.setState({name:t.data.name,description:t.data.description,isLoaded:!0})})).catch((function(e){return console.log(e)})),this.toggleMenu=this.toggleMenu.bind(this)}},{key:"buildMenu",value:function(e,t){if("0"===t.menu_item_parent)e.push({id:t.ID,title:t.title,url:t.url,children:[]});else{var s=e.find((function(e){return e.id===Number(t.menu_item_parent)}));s&&s.children.push({id:t.ID,title:t.title,url:t.url})}return e}},{key:"toggleMenu",value:function(){console.log(this.state.showMenu),this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){return Object(v.jsxs)("header",{children:[Object(v.jsxs)("div",{className:"topbar",children:[Object(v.jsx)("span",{children:this.state.description}),Object(v.jsxs)("div",{className:"social",children:[Object(v.jsx)("a",{className:"icon",href:"https://www.facebook.com/nichesnowboards",target:"_blank",rel:"noreferrer",children:Object(v.jsx)(m.a,{icon:f.a})}),Object(v.jsx)("a",{className:"icon",href:"https://www.instagram.com/nichesnowboards/",target:"_blank",rel:"noreferrer",children:Object(v.jsx)(m.a,{icon:f.b})}),Object(v.jsx)("a",{className:"icon",href:"https://vimeo.com/nichesnowboards",target:"_blank",rel:"noreferrer",children:Object(v.jsx)(m.a,{icon:f.c})})]})]}),Object(v.jsxs)("div",{className:"menubar",children:[Object(v.jsx)("button",{className:"menu-toggle",onClick:this.toggleMenu,children:Object(v.jsx)(m.a,{icon:O.c})}),Object(v.jsx)("div",{className:"logo",children:Object(v.jsx)("a",{href:"https://nichesnowboards.com/",children:Object(v.jsx)("img",{src:b,alt:"Logo"})})})]}),Object(v.jsx)(x,{showMenu:this.state.showMenu,menu:this.state.menu}),Object(v.jsx)(y,{showMenu:this.state.showMenu,toggleMenu:this.toggleMenu})]})}}]),s}(a.Component),k=w,M=(s(63),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(u.a)(s,[{key:"render",value:function(){return Object(v.jsxs)("footer",{children:[Object(v.jsxs)("div",{className:"links",children:[Object(v.jsx)("a",{href:"https://nichesnowboards.com/warranty-returns/",children:"Warranty & Returns"}),Object(v.jsx)("a",{href:"https://nichesnowboards.com/privacy-policy/",children:"Privacy Policy"})]}),Object(v.jsx)("div",{className:"copyright",children:Object(v.jsxs)("p",{children:["\xa9 Niche Snowboards ",(new Date).getFullYear()]})})]})}}]),s}(a.Component)),D=M,N=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],R=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={imgUrl:"",author:"",created:{}},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this,t=this.props.post,s=t.featured_media,a=t.author,n=t.date,i=j.a.get("https://nichesnowboards.com/wp-json/wp/v2/media/".concat(s)),r=j.a.get("https://nichesnowboards.com/wp-json/wp/v2/users/".concat(a)),c=new Date(n);Promise.all([i,r]).then((function(t){console.log(c),e.setState({imgUrl:t[0].data.media_details.sizes.full.source_url,author:t[1].data.name,isLoaded:!0,created:{day:c.getDate(),month:N[c.getMonth()]}})}))}},{key:"render",value:function(){var e=this.props.post,t=e.title,s=e.excerpt,a=this.state,n=a.author,i=a.imgUrl,r=a.created;return Object(v.jsxs)("div",{className:"post",children:[Object(v.jsxs)("div",{className:"created",children:[Object(v.jsx)("span",{className:"day",children:r.day}),Object(v.jsx)("span",{className:"month",children:r.month})]}),Object(v.jsx)("img",{src:i,alt:t.rendered}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)("h2",{dangerouslySetInnerHTML:{__html:t.rendered}}),Object(v.jsx)("div",{className:"meta",children:Object(v.jsxs)("p",{children:["by ",n]})}),Object(v.jsx)("div",{dangerouslySetInnerHTML:{__html:s.rendered}})]})]})}}]),s}(a.Component),L=R,S=(s(64),function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(l.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={posts:[]},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat("https://nichesnowboards.com/wp-json","/wp/v2/posts/")).then((function(t){return e.setState({posts:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return Object(v.jsx)("div",{className:"posts",children:e.map((function(e){return Object(v.jsx)(L,{post:e},e.id)}))})}}]),s}(a.Component)),T=S,C=s(22),_=s(4),F=(s(65),[10,50,100,2e3]),U=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={showRadiusOpt:!1,userRadius:e.userRadius},a.showOptions=a.showOptions.bind(Object(_.a)(a)),a.selectOption=a.selectOption.bind(Object(_.a)(a)),a.updateRadius=e.updateRadius,a}return Object(u.a)(s,[{key:"componentDidUpdate",value:function(e){this.props.userRadius!==e.userRadius&&this.setState({userRadius:this.props.userRadius})}},{key:"showOptions",value:function(){this.setState({showRadiusOpt:!this.state.showRadiusOpt})}},{key:"selectOption",value:function(e){this.updateRadius(e),this.showOptions(),this.setState({userRadius:e})}},{key:"render",value:function(){var e=this;return this.state.showRadiusOpt?Object(v.jsx)("div",{className:"select-list",children:F.map((function(t,s){return Object(v.jsx)("span",{onClick:e.selectOption.bind(e,t),children:t},s)}))}):Object(v.jsx)("div",{className:"select-toggle",children:Object(v.jsxs)("button",{className:"inline-link",onClick:this.showOptions,children:[this.state.userRadius," ",Object(v.jsx)(m.a,{icon:O.a})]})})}}]),s}(a.Component),I=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={userLocation:e.userLocation,userRadius:e.userRadius,showForm:!0,search:e.search},a.showSearchForm=a.showSearchForm.bind(Object(_.a)(a)),a.setValue=a.setValue.bind(Object(_.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(_.a)(a)),a.useMyLocation=a.useMyLocation.bind(Object(_.a)(a)),a.getUserLocation=a.getUserLocation.bind(Object(_.a)(a)),a.getDistance=e.onUpdate,a.updateRadius=e.updateRadius,a}return Object(u.a)(s,[{key:"componentDidUpdate",value:function(e){this.props.userRadius!==e.userRadius&&this.setState({userRadius:this.props.userRadius})}},{key:"showSearchForm",value:function(){this.setState({showForm:!this.state.showForm})}},{key:"showRadiusOpt",value:function(){}},{key:"setValue",value:function(e){this.setState({search:e.target.value})}},{key:"handleSubmit",value:function(e){this.showSearchForm(),this.getDistance(e)}},{key:"useMyLocation",value:function(){this.setState({search:""}),this.showSearchForm(),this.state.userLocation||this.getUserLocation()}},{key:"getUserLocation",value:function(){var e=this;"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(t){var s={lat:t.coords.latitude,lng:t.coords.longitude};e.setState({userLocation:s},e.getDistance.bind(null,s))}),(function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.userRadius,s=e.showForm,a=e.search;if(!s){var n="my location";return a&&(n=a),Object(v.jsxs)("div",{className:"search-results",children:[Object(v.jsxs)("div",{className:"content",children:["Showing results within",Object(v.jsx)(U,{userRadius:t,updateRadius:this.updateRadius}),"mi of ",n]}),Object(v.jsx)("button",{onClick:this.showSearchForm,className:"link",children:"Change Location"})]})}return Object(v.jsxs)("div",{className:"search",children:[Object(v.jsxs)("form",{className:"input-group",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{placeholder:"Enter City, State or Zipcode",name:"search",value:a,onChange:this.setValue}),Object(v.jsx)("button",{type:"submit",className:"button",children:"Search"})]}),Object(v.jsx)("button",{onClick:this.useMyLocation,className:"link",children:"Use My Location"})]})}}]),s}(a.Component),A={10:15,50:9,100:8,200:7,500:6,2e3:3},P=[{featureType:"all",elementType:"geometry.fill",stylers:[{weight:"2.00"}]},{featureType:"all",elementType:"geometry.stroke",stylers:[{color:"#9c9c9c"}]},{featureType:"all",elementType:"labels.text",stylers:[{visibility:"on"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road",elementType:"geometry.fill",stylers:[{color:"#eeeeee"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#7b7b7b"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#c8d7d4"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#070707"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#ffffff"}]}],Z=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).google=e.google,a.selectDealer=e.selectDealer,a.createMarker=a.createMarker.bind(Object(_.a)(a)),a.updateZoom=a.updateZoom.bind(Object(_.a)(a)),a.updateCenter=a.updateCenter.bind(Object(_.a)(a)),a.showLocation=a.showLocation.bind(Object(_.a)(a)),a.state={location:e.location,markers:e.markers,radius:e.userRadius,selected:e.selected},a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.map=new this.google.maps.Map(document.getElementById("map"),{center:this.state.location,zoom:A[this.state.radius],styles:P}),this.setState({markers:this.state.markers.map(this.createMarker)})}},{key:"componentDidUpdate",value:function(e){this.props.location.lat===e.location.lat&&this.props.location.lng===e.location.lng||this.setState({location:this.props.location},this.updateCenter),this.props.markers.length!==e.markers.length&&(this.state.markers.forEach((function(e){return e.setMap(null)})),this.setState({markers:this.props.markers.map(this.createMarker)})),this.props.userRadius!==e.userRadius&&this.setState({radius:this.props.userRadius},this.updateZoom),this.props.selected!==e.selected&&this.setState({selected:this.props.selected},this.showLocation)}},{key:"updateCenter",value:function(e){this.map.setCenter(e||this.state.location)}},{key:"updateZoom",value:function(e){this.map.setZoom(e||A[this.state.radius])}},{key:"showLocation",value:function(){var e=this,t=this.props.markers.find((function(t){return Number(t.id)===Number(e.state.selected)}));this.updateCenter({lat:Number(t.lat),lng:Number(t.lng)})}},{key:"createMarker",value:function(e,t){var s=e.lat,a=e.lng,n=e.id,i=new this.google.maps.Marker({position:{lat:Number(s),lng:Number(a)},icon:"/dealers/map_pin.png",map:this.map});return i.addListener("click",this.selectDealer.bind(null,{id:n,i:t})),i}},{key:"render",value:function(){return Object(v.jsx)("div",{id:"map"})}}]),s}(a.Component);function V(e){var t=e.dealer;return t.phone?Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"icon",children:Object(v.jsx)(m.a,{icon:O.f})})," ",Object(v.jsx)("a",{href:"tel:"+t.phone,className:"inline-link",children:t.phone})]}):""}function E(e){var t=e.dealer;return t.website?Object(v.jsx)("div",{className:"actions",children:Object(v.jsx)("a",{href:t.website,target:"_blank",rel:"noreferrer",className:"button",children:"Website"})}):""}var J=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={dealer:e.dealer},a}return Object(u.a)(s,[{key:"mapLink",value:function(e){var t=[e.street,e.city,e.state,e.postal_code].join(",");return"http://maps.google.com/?q=".concat(t)}},{key:"render",value:function(){var e=this.state.dealer;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:e.title}),Object(v.jsxs)("p",{children:[Object(v.jsx)("span",{className:"icon",children:Object(v.jsx)(m.a,{icon:O.e})}),Object(v.jsxs)("a",{href:this.mapLink(e),target:"niche_ext",children:[e.street,", ",e.city,", ",e.state," ",e.postal_code," ",Object(v.jsx)("span",{children:Object(v.jsx)(m.a,{icon:O.d})})]})]}),Object(v.jsx)(V,{dealer:e}),Object(v.jsx)(E,{dealer:e}),Object(v.jsx)("div",{className:"caret",children:Object(v.jsx)(m.a,{icon:O.b})})]})}}]),s}(a.Component),q=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(l.a)(this,s),(a=t.call(this,e)).state={dealers:[],filteredDealers:[],isLoaded:!1,search:"",location:{lat:41.850033,lng:-87.6500523},userLocation:null,userRadius:2e3,selectedDealer:null},a.searchDealers=a.searchDealers.bind(Object(_.a)(a)),a.initMap=a.initMap.bind(Object(_.a)(a)),a.filterDealers=a.filterDealers.bind(Object(_.a)(a)),a.dealerLocations=a.dealerLocations.bind(Object(_.a)(a)),a.updateRadius=a.updateRadius.bind(Object(_.a)(a)),a.selectDealer=a.selectDealer.bind(Object(_.a)(a)),a.itemsRef=[],a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat("https://nichesnowboards.com/wp-json","/nichesnowboards/v1/dealers/")).then((function(t){e.setState({dealers:t.data},e.filterDealers)})).catch((function(e){return console.log(e)})),window.initMap=this.initMap,function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)}("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyAItV-8HqS4WWMYd1txR8ppL06U_U2oZRU","&callback=initMap&v=weekly"))}},{key:"componentDidUpdate",value:function(){this.state.filteredDealers.length&&(this.itemsRef.current=this.itemsRef.slice(0,this.state.filteredDealers.length))}},{key:"initMap",value:function(){this.google=window.google}},{key:"searchDealers",value:function(e){var t=this;if(e&&e.target){var s=new FormData(e.target);(new this.google.maps.Geocoder).geocode({address:s.get("search")},(function(e){var s=e.map((function(e){var t=e.formatted_address,s=e.geometry;return{search:t,location:{lat:s.location.lat(),lng:s.location.lng()}}}));t.setState(s[0],t.filterDealers)})),e.preventDefault()}else this.setState({search:"",location:e,userRadius:50},this.filterDealers)}},{key:"updateRadius",value:function(e){this.setState({userRadius:e},this.filterDealers)}},{key:"filterDealers",value:function(e){var t=this.state,s=t.dealers,a=t.userRadius;s.length&&this.setState({filteredDealers:s.map(this.dealerLocations).sort(this.dealerDistance).filter((function(e){return e.distance<1.6*a})),isLoaded:!0})}},{key:"selectDealer",value:function(e){this.setState({selectedDealer:e.id,userRadius:10}),this.itemsRef[e.i].scrollIntoView()}},{key:"dealerClass",value:function(e){var t="dealer";return e===this.state.selectedDealer&&(t+=" selected"),t}},{key:"dealerLocations",value:function(e){var t=this.state,s=t.userLocation,a=t.location;return a||(a=s),Object(C.a)(Object(C.a)({},e),{},{distance:this.getDistanceFromLatLonInKm(Number(e.lat),Number(e.lng),a.lat,a.lng)})}},{key:"dealerDistance",value:function(e,t){return Number(e.distance)<Number(t.distance)?-1:Number(e.distance)>Number(t.distance)?1:0}},{key:"getDistanceFromLatLonInKm",value:function(e,t,s,a){var n=this.deg2rad(s-e),i=this.deg2rad(a-t),r=Math.sin(n/2)*Math.sin(n/2)+Math.cos(this.deg2rad(e))*Math.cos(this.deg2rad(s))*Math.sin(i/2)*Math.sin(i/2);return 6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}},{key:"deg2rad",value:function(e){return e*(Math.PI/180)}},{key:"render",value:function(){var e=this,t=this.state,s=t.search,a=t.userLocation,n=t.location,i=t.userRadius,r=t.filteredDealers;return t.isLoaded?Object(v.jsxs)("div",{className:"dealers",children:[Object(v.jsx)(Z,{google:this.google,location:n||a,markers:r,userRadius:i,selected:this.state.selectedDealer,selectDealer:this.selectDealer}),Object(v.jsxs)("div",{className:"list",children:[Object(v.jsx)("h1",{children:"Find a Dealer"}),Object(v.jsx)(I,{search:s,userRadius:i,onUpdate:this.searchDealers,updateRadius:this.updateRadius}),r.map((function(t,s){return Object(v.jsx)("div",{className:e.dealerClass(t.id),ref:function(t){return e.itemsRef[s]=t},onClick:e.selectDealer.bind(e,{id:t.id,i:s}),children:Object(v.jsx)(J,{dealer:t})},t.id)}))]})]}):Object(v.jsx)("div",{className:"loading",children:"Loading..."})}}]),s}(a.Component),W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),i(e),r(e)}))};o.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsxs)(i.a,{children:[Object(v.jsx)(k,{}),Object(v.jsx)("div",{className:"app",children:Object(v.jsxs)(r.c,{children:[Object(v.jsx)(r.a,{path:"/posts",element:Object(v.jsx)(T,{})}),Object(v.jsx)(r.a,{path:"/dealers",element:Object(v.jsx)(q,{})}),Object(v.jsx)(r.a,{path:"/",element:Object(v.jsx)(T,{})})]})}),Object(v.jsx)(D,{})]})}),document.getElementById("root")),W()}},[[66,1,2]]]);
//# sourceMappingURL=main.2550326b.chunk.js.map