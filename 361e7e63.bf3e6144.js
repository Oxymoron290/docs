(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(a),h=r,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||i;return a?n.a.createElement(f,o(o({ref:t},c),{},{components:a})):n.a.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},40:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(7),i=(a(0),a(107)),l={id:"basics",title:"Basics"},o={unversionedId:"concepts/basics",id:"concepts/basics",isDocsHomePage:!1,title:"Basics",description:"phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled.",source:"@site/docs/concepts/basics.md",slug:"/concepts/basics",permalink:"/concepts/basics",editUrl:"https://github.com/phpvms/docs/tree/master/docs/concepts/basics.md",version:"current",sidebar:"docs",previous:{title:"Download",permalink:"/download"},next:{title:"Finances",permalink:"/concepts/finances"}},s=[{value:"Airlines",id:"airlines",children:[]},{value:"Airports",id:"airports",children:[]},{value:"Fares",id:"fares",children:[]},{value:"Subfleets and Aircraft",id:"subfleets-and-aircraft",children:[]},{value:"Flights",id:"flights",children:[{value:"Flight Types",id:"flight-types",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"phpVMS 7 has a few fundamental differences from the old version, on how schedules and flights are handled."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"airlines"},"Airlines"),Object(i.b)("p",null,"One or more airlines needs to be created. Users choose and airline on registration. "),Object(i.b)("hr",null),Object(i.b)("h2",{id:"airports"},"Airports"),Object(i.b)("p",null,"Airports can be added to the system, and optionally selected as hubs. When users register, they select a home hub."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"fares"},"Fares"),Object(i.b)("p",null,'An unlimited number of fares can be added, and then fares are attached to subfleets, therefor, all of these fares are then applied to any aircraft in that subfleet. These include examples of "First Class", "Economy", etc. You can add as many or as few as you want. Fares include:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Capacity - how many seats this fare class holds"),Object(i.b)("li",{parentName:"ul"},"Price - the amount a ticket in this fare class costs"),Object(i.b)("li",{parentName:"ul"},"Cost - the amount it costs for a ticket; this is the amount it costs you to run a single seat")),Object(i.b)("p",null,"In order to facilitate not needing multiple fares of the same type, but with different capacity/costs/price, when a fare it assigned to a subfleet, those properties can be changed on a per-subfleet basis. "),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.expertflyer.com/sessionlessClassList.do"}),"ExpertFlyer has a great list of real-world fare classes")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"subfleets-and-aircraft"},"Subfleets and Aircraft"),Object(i.b)("p",null,'A new feature in phpVMS 7 are subfleets. Subfleets can be thought of as aircraft-groups. Airlines often group aircraft by equipment types; as a real-world example, British Airways has a subfleet for their 767-336ER Rolls-Royce RB211-524H aircraft, of which there are 7, and the aircraft in this subfleet are used for short-haul routes. Fares are aligned for the aircraft in the subfleet; for example, an airline may further divide the 767 short-haul subfleet into one subfleet that has first, business and economy classes (with a name of "767-336ER RR RB211-524H-',Object(i.b)("strong",{parentName:"p"},"FJY"),'") and another 767 subfleet with only first and economy classes (with a name of 767-336ER RR RB211-524H-',Object(i.b)("strong",{parentName:"p"},"FY"),")"),Object(i.b)("p",null,"In phpVMS, you can create as many subfleets as you like, with as many aircraft in those subfleets as you want. At a minimum, one subfleet is required, and there's no restriction on the types of aircraft that can be included. This way, potentially dozens of aircraft don't need to be assigned to the same route."),Object(i.b)("p",null,"These subfleets, can be assigned to routes and ranks, making it easy to apply multiple aircraft to routes, and then allowing more control over what equipment pilots are allowed to fly. An example would be having a route that has 3 subfleets assigned to it, however, if a pilot is only allowed to fly one of those subfleets (because of their rank), when filing a PIREP, only the aircraft from the allowed subfleet will be shown."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Subfleets have a name, type and a fuel type. The name and type are arbitrary, and just convention to your VA. ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.aerotransport.org/php/go.php?query=operator&luck=1&where=70913"}),"Here's an example for Continental Airlines")),Object(i.b)("li",{parentName:"ul"},"Any number of aircraft can be assigned"),Object(i.b)("li",{parentName:"ul"},"Any number of fares can be assigned, and the properties overridden."),Object(i.b)("li",{parentName:"ul"},"Any number of subfleets can be assigned to a flight")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"flights"},"Flights"),Object(i.b)("p",null,'Schedules have been renamed to "flights". A flight consists of:'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"An airline"),Object(i.b)("li",{parentName:"ul"},"Flight type"),Object(i.b)("li",{parentName:"ul"},"Flight number"),Object(i.b)("li",{parentName:"ul"},"Flight Code (optional)"),Object(i.b)("li",{parentName:"ul"},"Flight Leg (optional)"),Object(i.b)("li",{parentName:"ul"},"Departure airport"),Object(i.b)("li",{parentName:"ul"},"Arrival airport"),Object(i.b)("li",{parentName:"ul"},"Any number of subfleets")),Object(i.b)("p",null,"Flight numbers do not need to be unique, however, if a duplicate flight number is found, the creation/edit will fail, and a route code or leg must be provided in order for it to work properly."),Object(i.b)("h3",{id:"flight-types"},"Flight Types"),Object(i.b)("p",null,"Flight types follow the IATA SSIM service code. The ones highlighted in bold are the most common."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A = Additional Cargo/Mail"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"C = Charter \u2013 Passenger only")),Object(i.b)("li",{parentName:"ul"},"E = Special VIP Flight (FAA/Government)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"F = Scheduled \u2013 Cargo and/or Mail")),Object(i.b)("li",{parentName:"ul"},"G = Additional Flights \u2013 Passenger Normal Service"),Object(i.b)("li",{parentName:"ul"},"H = Charter \u2013 Cargo and/or Mail"),Object(i.b)("li",{parentName:"ul"},"I = Ambulance Flight"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"J = Scheduled \u2013 Passenger Normal Service")),Object(i.b)("li",{parentName:"ul"},"K = Training Flights"),Object(i.b)("li",{parentName:"ul"},"M = Mail Service"),Object(i.b)("li",{parentName:"ul"},"O = Charter requiring special handling (e.g. migrants, immigrants)"),Object(i.b)("li",{parentName:"ul"},"P = Positioning Flights \u2013 Non Revenue (ferry/delivery/demo)"),Object(i.b)("li",{parentName:"ul"},"T = Technical Test"),Object(i.b)("li",{parentName:"ul"},"W = Military"),Object(i.b)("li",{parentName:"ul"},"X = Technical Stop")),Object(i.b)("p",null,"More resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://forum.phpvms.net/topic/24329-connecting-flights/"}),"Forum Topic - Connecting Flights")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.quora.com/What-is-the-difference-between-Multi-leg-and-Multi-segment-flights"}),"Quora - Multi-leg and multi-segment flights"))))}b.isMDXComponent=!0}}]);