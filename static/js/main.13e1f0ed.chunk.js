(this.webpackJsonpdealers=this.webpackJsonpdealers||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(26),r=a(2),i=a(25),o=a.n(i),l=(a(31),a(32),a(5)),d=a(6),u=a(8),h=a(7),j=a.p+"static/media/logo.9e90c648.png",b=(a(33),a(1)),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{children:Object(b.jsx)("img",{src:j,alt:"Logo"})})}}]),a}(s.Component),p=m,O=a(10),v=a.n(O),f=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={imgUrl:"",author:"",created:{}},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.post,a=t.featured_media,s=t.author,n=t.date,c=v.a.get("https://nichesnowboards.com/wp-json/wp/v2/media/".concat(a)),r=v.a.get("https://nichesnowboards.com/wp-json/wp/v2/users/".concat(s)),i=new Date(n);Promise.all([c,r]).then((function(t){console.log(i),e.setState({imgUrl:t[0].data.media_details.sizes.full.source_url,author:t[1].data.name,isLoaded:!0,created:{day:i.getDate(),month:f[i.getMonth()]}})}))}},{key:"render",value:function(){var e=this.props.post,t=e.title,a=e.excerpt,s=this.state,n=s.author,c=s.imgUrl,r=s.created;return Object(b.jsxs)("div",{className:"post",children:[Object(b.jsxs)("div",{className:"created",children:[Object(b.jsx)("span",{className:"day",children:r.day}),Object(b.jsx)("span",{className:"month",children:r.month})]}),Object(b.jsx)("img",{src:c,alt:t.rendered}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h2",{dangerouslySetInnerHTML:{__html:t.rendered}}),Object(b.jsx)("div",{className:"meta",children:Object(b.jsxs)("p",{children:["by ",n]})}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:a.rendered}})]})]})}}]),a}(s.Component),y=g,x=(a(53),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={posts:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://nichesnowboards.com/wp-json","/wp/v2/posts/")).then((function(t){return e.setState({posts:t.data,isLoaded:!0})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.posts;return Object(b.jsx)("div",{className:"posts",children:e.map((function(e){return Object(b.jsx)(y,{post:e},e.id)}))})}}]),a}(s.Component)),w=x,L=a(16),k=a(9),D=(a(54),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={userLocation:e.userLocation,userRadius:e.userRadius,showForm:!1,search:""},s.showSearchForm=s.showSearchForm.bind(Object(k.a)(s)),s.setValue=s.setValue.bind(Object(k.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(k.a)(s)),s.useMyLocation=s.useMyLocation.bind(Object(k.a)(s)),s.getDistance=e.onUpdate,s}return Object(d.a)(a,[{key:"showSearchForm",value:function(){this.setState({showForm:!this.state.showForm})}},{key:"setValue",value:function(e){this.setState({search:e.target.value})}},{key:"handleSubmit",value:function(e){this.showSearchForm(),console.log("submit"),this.getDistance(e)}},{key:"useMyLocation",value:function(){console.log("use my location"),this.getDistance(this.state.userLocation),this.setState({search:""}),this.showSearchForm()}},{key:"render",value:function(){var e=this.state,t=e.userLocation,a=e.userRadius,s=e.showForm,n=e.search;if(t&&!s){var c="my location";return n&&(c=n),Object(b.jsxs)("div",{className:"search-results",children:[Object(b.jsxs)("p",{children:["Showing results within ",a," mi of ",c]}),Object(b.jsx)("button",{onClick:this.showSearchForm,className:"link",children:"Change Location"})]})}return Object(b.jsxs)("div",{className:"search",children:[Object(b.jsxs)("form",{className:"input-group",onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{placeholder:"Enter City, State or Zipcode",name:"search",value:n,onChange:this.setValue}),Object(b.jsx)("button",{type:"submit",className:"button",children:"Search"})]}),Object(b.jsx)("button",{onClick:this.useMyLocation,className:"link",children:"Use My Location"})]})}}]),a}(s.Component)),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).map=e.map,s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){new this.map(document.getElementById("map"),{center:{lat:-34.397,lng:150.644},zoom:8})}},{key:"render",value:function(){return Object(b.jsx)("div",{id:"map"})}}]),a}(s.Component);function M(e){var t=e.dealer;return t.website?Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.title}),Object(b.jsxs)("p",{children:[t.street,", ",t.city,", ",t.state," ",t.postal_code]}),Object(b.jsx)("p",{children:t.phone}),Object(b.jsx)("div",{className:"actions",children:Object(b.jsx)("a",{href:t.website,target:"_blank",rel:"noreferrer",className:"button",children:"Website"})})]}):Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t.title}),Object(b.jsxs)("p",{children:[t.street,", ",t.city,", ",t.state," ",t.postal_code]}),Object(b.jsx)("p",{children:t.phone})]})}var N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={dealers:[],filteredDealers:[],isLoaded:!1,search:"",userLocation:{},userRadius:500},s.searchDealers=s.searchDealers.bind(Object(k.a)(s)),s.initMap=s.initMap.bind(Object(k.a)(s)),s.filterDealers=s.filterDealers.bind(Object(k.a)(s)),s.dealerLocations=s.dealerLocations.bind(Object(k.a)(s)),s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("".concat("https://nichesnowboards.com/wp-json","/dealerlocator/v1/dealers/")).then((function(t){e.setState({dealers:t.data,isLoaded:!1}),e.getUserLocation((function(t){e.filterDealers()}))})).catch((function(e){return console.log(e)})),window.initMap=this.initMap,function(e){var t=document.createElement("script");t.src=e,t.async=!0,document.body.appendChild(t)}("https://maps.googleapis.com/maps/api/js?key=".concat("AIzaSyBqv3DuV0eHjDCdOS48ltt62fYjfv55_YQ","&callback=initMap&v=weekly"))}},{key:"initMap",value:function(){this.geocoder=window.google.maps.Geocoder,this.map=window.google.maps.Map}},{key:"geocoder",value:function(){}},{key:"map",value:function(){}},{key:"searchDealers",value:function(e){if(e.target){var t=new FormData(e.target);this.setState({search:t.get("search")}),(new this.geocoder).geocode({address:t.get("search")},(function(e){console.log(e)})),this.filterDealers(t.get("search")),e.preventDefault()}else this.setState({search:""}),this.filterDealers(this.userLocation)}},{key:"getUserLocation",value:function(e){var t=this;"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(a){t.setState({userLocation:{lat:a.coords.latitude,lng:a.coords.longitude}}),t.setState({isLoaded:!0}),e()})):this.setState({isLoaded:!0})}},{key:"filterDealers",value:function(e){var t=this.state,a=t.dealers,s=t.userRadius,n=t.search;console.log("filterDealers:search string",n);var c=a.map(this.dealerLocations.bind(this,e)).sort(this.dealerDistance).filter((function(e){return e.distance<1.6*s}));this.setState({filteredDealers:c})}},{key:"dealerLocations",value:function(e,t){var a=this.state.userLocation;return e&&(a=""),Object(L.a)(Object(L.a)({},t),{},{distance:this.getDistanceFromLatLonInKm(Number(t.lat),Number(t.lng),a.lat,a.lng)})}},{key:"dealerDistance",value:function(e,t){return Number(e.distance)<Number(t.distance)?-1:Number(e.distance)>Number(t.distance)?1:0}},{key:"getDistanceFromLatLonInKm",value:function(e,t,a,s){var n=this.deg2rad(a-e),c=this.deg2rad(s-t),r=Math.sin(n/2)*Math.sin(n/2)+Math.cos(this.deg2rad(e))*Math.cos(this.deg2rad(a))*Math.sin(c/2)*Math.sin(c/2);return 6371*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))}},{key:"deg2rad",value:function(e){return e*(Math.PI/180)}},{key:"render",value:function(){var e=this.state,t=e.userLocation,a=e.userRadius,s=e.filteredDealers;return e.isLoaded?Object(b.jsxs)("div",{className:"dealers",children:[Object(b.jsx)(S,{map:this.map}),Object(b.jsxs)("div",{className:"list",children:[Object(b.jsx)("h1",{children:"Find A Dealer"}),Object(b.jsx)(D,{userLocation:t,userRadius:a,onUpdate:this.searchDealers}),s.map((function(e){return Object(b.jsx)("div",{className:"dealer",children:Object(b.jsx)(M,{dealer:e})},e.id)}))]})]}):Object(b.jsx)("div",{className:"loading",children:"Loading..."})}}]),a}(s.Component),F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};o.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsxs)(c.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{path:"/posts",element:Object(b.jsx)(w,{})}),Object(b.jsx)(r.a,{path:"/dealers",element:Object(b.jsx)(N,{})}),Object(b.jsx)(r.a,{path:"/",element:Object(b.jsx)(w,{})})]})})]})}),document.getElementById("root")),F()}},[[55,1,2]]]);
//# sourceMappingURL=main.13e1f0ed.chunk.js.map