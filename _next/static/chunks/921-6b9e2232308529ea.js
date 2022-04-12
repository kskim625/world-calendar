(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[921],{1921:function(e,n,t){"use strict";t.d(n,{Z:function(){return b}});var a=t(5893),r=t(7294),o=t(9008),i=function(){return(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:"Calendars"}),(0,a.jsx)("meta",{name:"description",content:"World Calendar App"}),(0,a.jsx)("meta",{name:"mobile-web-app-capable",content:"yes"}),(0,a.jsx)("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,a.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com"}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Jua&display=swap",rel:"stylesheet"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})},l=t(3695),c=t.n(l),d=function(e){var n=e.lightMode,t=e.setLightMode,r=function(){t(!n)};return n?(0,a.jsxs)("header",{className:c().header,children:["\ud83d\udcc5 World Calendars"," ",(0,a.jsx)("div",{className:c().mode,onClick:r,children:"\ud83c\udf1e"})]}):(0,a.jsxs)("header",{className:c().header,children:["\ud83d\udcc5 World Calendars"," ",(0,a.jsx)("div",{className:c().mode,onClick:r,children:"\ud83c\udf19"})]})},s=t(1664),u=t(6523),f=t.n(u),h=function(e){var n=e.lightMode;return(0,a.jsxs)("div",{className:n?f().navigationBar:f().darkNavigationBar,children:[(0,a.jsx)("button",{className:n?f().button:f().darkButton,children:(0,a.jsx)(s.default,{href:"/korea",children:"KR"})}),(0,a.jsx)("button",{className:n?f().button:f().darkButton,children:(0,a.jsx)(s.default,{href:"/us",children:"US"})}),(0,a.jsx)("button",{className:n?f().button:f().darkButton,children:(0,a.jsx)(s.default,{href:"/canada",children:"CA"})}),(0,a.jsx)("button",{className:n?f().button:f().darkButton,children:(0,a.jsx)(s.default,{href:"/spain",children:"ES"})})]})},p=t(5924),m=t.n(p),y=function(){return(0,a.jsxs)("div",{className:m().dayType,children:[(0,a.jsx)("div",{className:m().dayTypeToday,children:"31"}),"today",(0,a.jsx)("div",{className:m().dayTypeHoliday}),"holidays"]})},_=function(e){var n=e.lightMode,t=e.date,o=e.holidays,i=(0,r.useState)((0,a.jsx)(a.Fragment,{})),l=i[0],c=i[1],d=(0,r.useState)([]),s=d[0],u=d[1],f=(0,r.useState)((0,a.jsx)(a.Fragment,{})),h=f[0],p=f[1],_=(0,r.useState)(null),v=_[0],g=_[1],x=function(){p((0,a.jsx)(a.Fragment,{})),g(null)},j=function(e){g(e);var t=Number(e.target.textContent),r=s.filter((function(e){return e.date.datetime.day===t})),o=n?m().modalContainer:m().darkModalContainer,i=n?m().removeModal:m().darkRemoveModal;p((0,a.jsx)("div",{className:m().modalWrapper,children:(0,a.jsxs)("div",{className:o,children:[r.map((function(e,n){if(e)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:m().holidayDescription,children:"holiday #".concat(n+1)}),(0,a.jsx)("div",{className:m().holidayDescription,children:"Country: ".concat(e.country.name)}),(0,a.jsx)("div",{className:m().holidayDescription,children:"Date: ".concat(e.date.iso)}),(0,a.jsx)("div",{className:m().holidayDescription,children:"Holiday name: ".concat(e.name)}),(0,a.jsx)("div",{className:m().holidayDescription,children:"Holiday type: ".concat(e.type[0])}),(0,a.jsx)("div",{className:m().holidayDescription,children:"description: ".concat(e.description)}),(0,a.jsx)("br",{})]})})),(0,a.jsx)("div",{className:i,onClick:x,children:"Remove Explanation"})]})}))},C=function(e,r){var o=new Date,i=o.getFullYear()===t.getFullYear()&&o.getMonth()===t.getMonth()&&o.getDate()===Number(e),l=function(e){return s.filter((function(n){return n.date.datetime.day===Number(e)})).length>0}(e),c=n?m().calendarContent:m().darkCalendarContent;return i&&l?(0,a.jsx)("div",{className:"".concat(c," ").concat(m().calendarToday," ").concat(m().calendarHoliday),onClick:j,children:e},"calendarEl-".concat(r)):i?(0,a.jsx)("div",{className:"".concat(c," ").concat(m().calendarToday),children:e},"calendarEl-".concat(r)):l?(0,a.jsx)("div",{className:"".concat(c," ").concat(m().calendarHoliday),onClick:j,children:e},"calendarEl-".concat(r)):(0,a.jsx)("div",{className:c,children:e},"calendarEl-".concat(r))},b=function(e){c((0,a.jsx)(a.Fragment,{children:e.map((function(e,t){return function(e,t){var r=n?m().calendarRow:m().darkCalendarRow;return(0,a.jsx)("div",{className:r,children:e.map((function(e,n){return C(e,n)}))},"calendar-".concat(t))}(e,t)}))}))},k=function(e,n,t,a){for(var r=new Date(e,n,1).getDay(),o=1===t?new Array(r).fill(""):[];o.length<7&&t<=a;)o.push(String(t)),t+=1;for(;o.length<7;)o.push("");return o},N=function(){var e=t.getFullYear(),n=t.getMonth();b(function(e,n){var t=new Date(e,n+1,0).getDate(),a=[["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]],r=k(e,n,1,t);a.push(r);for(var o=7-r.filter((function(e){return""===e})).length+1;o<t;)a.push(k(e,n,o,t)),o+=7;return a}(e,n))};return(0,r.useEffect)((function(){u(o.filter((function(e){return e.date.datetime.month===t.getMonth()+1})))}),[]),(0,r.useEffect)((function(){N(),v&&j(v)}),[s,n]),(0,a.jsxs)("div",{className:m().calendarWrapper,children:[o[0]?"".concat(t.getFullYear(),". ").concat(t.getMonth()+1,". ").concat(o[0].country.name," holidays"):"",(0,a.jsx)(y,{}),l,h]})},v=t(7246),g=t.n(v),x=function(){return(0,a.jsxs)("footer",{className:g().footer,children:[(0,a.jsxs)("div",{children:["Implemented with ",(0,a.jsx)("a",{href:"https://nextjs.org/",children:(0,a.jsx)("span",{children:"NEXT.js"})})]}),(0,a.jsx)("div",{children:"More countries are to be updated!"})]})},j=t(7160),C=t.n(j),b=function(e){var n=e.date,t=e.holidays,o=(0,r.useState)(!0),l=o[0],c=o[1],s=function(){document.body.classList.toggle("darkMode")};return(0,r.useEffect)((function(){s()}),[]),(0,r.useEffect)((function(){s()}),[l]),(0,a.jsxs)("div",{className:C().container,children:[(0,a.jsx)(i,{}),(0,a.jsx)(d,{lightMode:l,setLightMode:c}),(0,a.jsx)(h,{lightMode:l}),(0,a.jsx)(_,{lightMode:l,date:n,holidays:t}),(0,a.jsx)(x,{})]})}},1551:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!n||o.length!==n);i=!0);}catch(c){l=!0,r=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},l=t(1003),c=t(880),d=t(9246);var s={};function u(e,n,t,a){if(e&&l.isLocalURL(n)){e.prefetch(n,t,a).catch((function(e){0}));var r=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;s[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=c.useRouter(),o=i.default.useMemo((function(){var n=r(l.resolveHref(a,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?l.resolveHref(a,e.as):o||t}}),[a,e.href,e.as]),f=o.href,h=o.as,p=e.children,m=e.replace,y=e.shallow,_=e.scroll,v=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var g=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,x=r(d.useIntersection({rootMargin:"200px"}),2),j=x[0],C=x[1],b=i.default.useCallback((function(e){j(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,j]);i.default.useEffect((function(){var e=C&&t&&l.isLocalURL(f),n="undefined"!==typeof v?v:a&&a.locale,r=s[f+"%"+h+(n?"%"+n:"")];e&&!r&&u(a,f,h,{locale:n})}),[h,f,C,v,t,a]);var k={ref:b,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,o,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),n[r?"replace":"push"](t,a,{shallow:o,locale:c,scroll:i}))}(e,a,f,h,m,y,_,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(f)&&u(a,f,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof v?v:a&&a.locale,M=a&&a.isLocaleDomain&&l.getDomainLocale(h,N,a&&a.locales,a&&a.domainLocales);k.href=M||l.addBasePath(l.addLocale(h,N,a&&a.defaultLocale))}return i.default.cloneElement(n,k)};n.default=f},9246:function(e,n,t){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,r,o=[],i=!0,l=!1;try{for(t=t.call(e);!(i=(a=t.next()).done)&&(o.push(a.value),!n||o.length!==n);i=!0);}catch(c){l=!0,r=c}finally{try{i||null==t.return||t.return()}finally{if(l)throw r}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,a=e.disabled||!l,s=o.useRef(),u=r(o.useState(!1),2),f=u[0],h=u[1],p=r(o.useState(n?n.current:null),2),m=p[0],y=p[1],_=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),a||f||e&&e.tagName&&(s.current=function(e,n,t){var a=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},a=d.find((function(e){return e.root===t.root&&e.margin===t.margin}));a?n=c.get(a):(n=c.get(t),d.push(t));if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(t),r=a.id,o=a.observer,i=a.elements;return i.set(e,n),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),c.delete(r);var n=d.findIndex((function(e){return e.root===r.root&&e.margin===r.margin}));n>-1&&d.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:t}))}),[a,m,t,f]);return o.useEffect((function(){if(!l&&!f){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),o.useEffect((function(){n&&y(n.current)}),[n]),[_,f]};var o=t(7294),i=t(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,d=[]},5924:function(e){e.exports={calendarWrapper:"Calendar_calendarWrapper__pRK0k",calendarRow:"Calendar_calendarRow__RH7Ht",darkCalendarRow:"Calendar_darkCalendarRow__hbNCu",calendarContent:"Calendar_calendarContent__VHcp3",darkCalendarContent:"Calendar_darkCalendarContent__pFL6G",calendarToday:"Calendar_calendarToday__6qNht",calendarHoliday:"Calendar_calendarHoliday__yQtT_",dayType:"Calendar_dayType__jLHxg",dayTypeToday:"Calendar_dayTypeToday__eWsya",dayTypeHoliday:"Calendar_dayTypeHoliday__9enhQ",modalWrapper:"Calendar_modalWrapper__3y5rX",modalContainer:"Calendar_modalContainer__ikjJa",darkModalContainer:"Calendar_darkModalContainer___TN3L",holidayDescription:"Calendar_holidayDescription__Eb0Iz",removeModal:"Calendar_removeModal__HidJL",darkRemoveModal:"Calendar_darkRemoveModal__ZdgPr"}},7246:function(e){e.exports={footer:"Footer_footer__Tl1eP"}},3695:function(e){e.exports={header:"Header_header__VYZ3G",mode:"Header_mode__VJJQS"}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},6523:function(e){e.exports={navigationBar:"NavigationBar_navigationBar__xW_FE",darkNavigationBar:"NavigationBar_darkNavigationBar__sxcx_",button:"NavigationBar_button__tP8kZ",darkButton:"NavigationBar_darkButton__cPw1Z"}},9008:function(e,n,t){e.exports=t(3121)},1664:function(e,n,t){e.exports=t(1551)}}]);