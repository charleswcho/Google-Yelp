(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(18)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(4),o=a.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(2),l=a.n(s),i=a(5),u=a(1);var m=function(e,t){var a=Object(n.useState)(null),c=Object(u.a)(a,2),r=c[0],o=c[1],s=Object(n.useState)([]),l=Object(u.a)(s,2),i=l[0],m=l[1],f=Object(n.useState)([]),p=Object(u.a)(f,2),v=p[0],d=p[1],g=Object(n.useState)(null),b=Object(u.a)(g,2),O=b[0],h=b[1];return Object(n.useEffect)(function(){if(e){var a=new google.maps.Map(e.current,t);o(a)}},[e,t]),Object(n.useEffect)(function(){v.forEach(function(e){return e.setMap(null)});var e=i.map(function(e,t){return new google.maps.Marker({position:e,label:String(t+1),map:r})});d(e)},[i]),Object(n.useEffect)(function(){v.forEach(function(e,t){O===t?e.setAnimation(google.maps.Animation.BOUNCE):e.setAnimation(null)})},[O]),[r,m,h]};var f=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),l=s[0],i=s[1],m={OK:"OK"};return Object(n.useEffect)(function(){r(!1),e&&(i(new google.maps.Geocoder),r(!0))},[e]),[c,function(e){return new Promise(function(t,a){l.geocode({address:e},function(e,n){if(n===m.OK){var c=e[0].geometry.location,r=c.lat,o=c.lng;t({lat:r(),lng:o()})}else a(n)})})}]};var p=function(e){var t=Object(n.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],o=Object(n.useState)(null),s=Object(u.a)(o,2),l=s[0],i=s[1],m={OK:"OK"};return Object(n.useEffect)(function(){r(!1),e&&(i(new google.maps.places.PlacesService(e)),r(!0))},[e]),[c,function(e,t){return new Promise(function(a,n){var c={location:t,radius:"500",query:e};l.textSearch(c,function(e,t){t===m.OK?a(e):n(t)})})}]};var v=function(e,t){var a=Object(n.useState)(e),c=Object(u.a)(a,2),r=c[0],o=c[1];return Object(n.useEffect)(function(){if(t){var e=new google.maps.places.Autocomplete(t.current,{types:["(cities)"]}),a=e.addListener("place_changed",function(){var t=e.getPlace().formatted_address;t&&o(t)});return function(){google.maps.event.clearInstanceListeners(e),google.maps.event.removeListener(a),document.querySelector(".pac-container").remove()}}},[t]),[r,o]};a(13);var d=function(e){var t=e.handleSearch,a=Object(n.useRef)(null),r=Object(n.useState)(""),o=Object(u.a)(r,2),s=o[0],l=o[1],i=v("",a),m=Object(u.a)(i,2),f=m[0],p=m[1],d=Object(n.useState)("location"),g=Object(u.a)(d,2),b=g[0],O=g[1],h=function(e){e.preventDefault(),""!==f?t(s,f):O("Please enter a location")};return c.a.createElement("form",{className:"search",onSubmit:h},c.a.createElement("a",{className:"header",href:"/#"},c.a.createElement("h1",null,"Google Yelp")),c.a.createElement("input",{className:"search-field",type:"text",value:s,placeholder:"tacos, salons, bars",onKeyPress:function(e){13===e.charCode&&h()},onChange:function(e){l(e.target.value)}}),c.a.createElement("input",{className:"search-field",type:"text",ref:a,value:f,placeholder:b,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"search-button",type:"submit"}))};a(14);var g=function(e){for(var t,a,n,r=e.idx,o=e.place,s=e.handleHover,l="",i=o.price_level,u=o.opening_hours,m=o.formatted_address,f=o.photos,p=o.name,v=o.rating,d=o.user_ratings_total,g=0;g<i;g++)l+="$";return u&&(t=u.open_now?"Open now":"Closed"),m&&(a=m.split(",")[0]),f&&(n=f[0].getUrl({maxWidth:250,maxHeight:250})),c.a.createElement("div",{className:"listing",onMouseEnter:function(){s(r)},onMouseLeave:function(){s(null)}},c.a.createElement("div",{className:"main-attr"},c.a.createElement("img",{src:n,alt:"place"}),c.a.createElement("div",{className:"name-price-rating"},c.a.createElement("h3",{className:"desc"},"".concat(r+1,". ")+p),c.a.createElement("div",{className:"desc"},v," Star"," ",c.a.createElement("span",{className:"reviews"},d," reviews")),c.a.createElement("div",{className:"desc"},l))),c.a.createElement("div",{className:"sub-attr"},c.a.createElement("div",{className:"address"},c.a.createElement("div",{className:"street"},a)),c.a.createElement("div",{className:"open ".concat(u.open_now?"":"closed")},t)))};a(15);var b=function(e){var t=e.listings,a=e.handleHover;return c.a.createElement("div",{className:"index"},c.a.createElement("ul",{className:"listings"},t.map(function(e,t){return c.a.createElement(g,{key:t,idx:t,place:e,handleHover:a})})))},O=(a(16),{center:{lat:37.7749,lng:-122.4194},zoom:12.5,scrollwheel:!1,mapTypeControl:!1,zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.LEFT_TOP},scaleControl:!1,streetViewControl:!1});var h=function(){var e=Object(n.useRef)(null),t=m(e,O),a=Object(u.a)(t,3),r=a[0],o=a[1],s=a[2],v=f(r),g=Object(u.a)(v,2),h=g[0],E=g[1],j=p(r),w=Object(u.a)(j,2),N=w[0],S=w[1],y=Object(n.useState)([]),x=Object(u.a)(y,2),C=x[0],_=x[1];Object(n.useEffect)(function(){h&&N&&P("tacos","San Francisco, CA, USA")},[h,N]);var P=function(){var e=Object(i.a)(l.a.mark(function e(t,a){var n,c,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("1. Params",t,a),e.prev=1,e.next=4,E(a);case 4:return n=e.sent,e.next=7,S(t,n);case 7:c=e.sent,console.log("2. Data",c),r.panTo(n),s=c.map(function(e){return e.geometry.location}),_(c),o(s),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}},e,null,[[1,15]])}));return function(t,a){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"App"},c.a.createElement(d,{handleSearch:P}),c.a.createElement("div",{className:"results"},c.a.createElement(b,{listings:C,handleHover:function(e){s(e)}}),c.a.createElement("div",{className:"google-map",ref:e})))};a(17);o.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.e7b013a5.chunk.js.map