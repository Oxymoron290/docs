(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,a,n){"use strict";n.d(a,"a",(function(){return p})),n.d(a,"b",(function(){return m}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function s(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?s(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),c=function(e){var a=r.a.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},p=function(e){var a=c(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),b=t,m=p["".concat(s,".").concat(b)]||p[b]||u[b]||i;return n?r.a.createElement(m,o(o({ref:a},d),{},{components:n})):r.a.createElement(m,o({ref:a},d))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,s[1]=o;for(var d=2;d<i;d++)s[d]=n[d];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},173:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/admin-awards-98a29b5a4476a3d09d6896080d9f3a12.png"},50:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return s})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return c}));var t=n(2),r=n(7),i=(n(0),n(108)),s={id:"awards",title:"Awards"},o={unversionedId:"developers/awards",id:"developers/awards",isDocsHomePage:!1,title:"Awards",description:"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an Award plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same Award class for multiple awards.",source:"@site/docs/developers/awards.md",slug:"/developers/awards",permalink:"/developers/awards",editUrl:"https://github.com/phpvms/docs/tree/master/docs/developers/awards.md",version:"current",sidebar:"docs",previous:{title:"Addons",permalink:"/developers/addons"},next:{title:"Overview",permalink:"/api/overview"}},l=[{value:"Adding an Award",id:"adding-an-award",children:[]},{value:"Award Plugin Structure",id:"award-plugin-structure",children:[{value:"Award Class",id:"award-class",children:[]}]}],d={rightToc:l};function c(e){var a=e.components,s=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},d,s,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Awards have been improved from the previous version. Awards are created in the admin panel, but are associated with an ",Object(i.b)("inlineCode",{parentName:"p"},"Award")," plugin. This class allows you to check any conditions to see if the award should be given. These award classes can also be passed a parameter (a number, string or JSON string), so you can use the same ",Object(i.b)("inlineCode",{parentName:"p"},"Award")," class for multiple awards."),Object(i.b)("p",null,"All of the awards are run and scanned on the ",Object(i.b)("inlineCode",{parentName:"p"},"UserStatsChanged")," event, so when a PIREP is accepted, or other properties for the user are changed (e.g, the number of flights, flight hours, etc). The user being scanned is passed in as the ",Object(i.b)("inlineCode",{parentName:"p"},"$user")," property."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"adding-an-award"},"Adding an Award"),Object(i.b)("p",null,"An award consists of two parts:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"An award plugin"),Object(i.b)("li",{parentName:"ol"},"The award link")),Object(i.b)("p",null,"The award link is created in the admin panel, linking an award to a plugin. The plugin allows for advanced, reusable plugins and can be as complex or as simple as you like. To create an award from a plugin, view the awards page:"),Object(i.b)("p",null,Object(i.b)("img",{src:n(173).default})),Object(i.b)("hr",null),Object(i.b)("h2",{id:"award-plugin-structure"},"Award Plugin Structure"),Object(i.b)("p",null,"The award class needs to be placed in either the main Awards directory, or in a module, which can then be distributed as a full package."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"modules/Awards")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"modules/{YOUR_MODULE}/Awards"))),Object(i.b)("h3",{id:"award-class"},"Award Class"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(t.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(t.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(t.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(t.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"modules/Awards/PilotFlightAwards.php")," is a fully-commented example"))),Object(i.b)("p",null,"The Award class basically looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"<?php\n\nnamespace Modules\\Awards;\n\nuse App\\Contracts\\Award;\n\n/**\n * The Award needs to extend the AwardInterface class. It's abstract\n * so if check() isn't implemented, it'll throw an error\n */\nclass MyAward extends Award\n{\n    // The name of this award that shows in the Award class dropdown\n    public $name = 'My Award';\n    \n    // If this award is selected in the dropdown, this description is shown\n    // to the user to tell them what the parameter is\n    public $param_description = 'Describe what the parameter is';\n    \n    /**\n     * This method needs to be implemented\n     * @param null $parameter Optional parameters that are passed in from the UI\n     */\n    public function check($parameter = null): bool\n    {        \n        if(!$parameter) {\n            // Set $parameter to some good default\n        }\n        \n        // Return true if the award should be awarded\n        return true;\n    }\n}\n")),Object(i.b)("h4",{id:"parameter-passed"},"Parameter passed"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"$parameter")," is the value that is set in the Award row in the admin panel. It's optional, so it might be good for you to set a default if it's null. An example could be the number of flights, so you can use the same ",Object(i.b)("inlineCode",{parentName:"p"},"Award")," class for different types of awards."),Object(i.b)("h4",{id:"accessing-information"},"Accessing information"),Object(i.b)("p",null,"Your Award class, in the ",Object(i.b)("inlineCode",{parentName:"p"},"check($parameter)")," function, has access the class property called ",Object(i.b)("inlineCode",{parentName:"p"},"$this->user"),". For example, if you want to see the user's flights, or if you wanted to have an award for a low landing rate:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-php"}),"// ...\n// In the Award row in the admin, $landing_rate might be set to 100\n// This check will get called when a PIREP is accepted, so you can \n// have access to the user's last PIREP\npublic function check($landing_rate = null): bool\n{\n    // Have the default landing rate if it hasn't been set in the admin\n    // It's best to make sure you set a default value if you're using it\n    if(!$landing_rate) {\n        $landing_rate = 200;\n    }\n    \n    if($this->user->last_pirep->landing_rate <= (int) $landing_rate) {\n        return true;\n    }\n    \n    return false;\n}\n// ...\n")))}c.isMDXComponent=!0}}]);