(()=>{"use strict";const t=class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Deafult Project Title";this.id=Math.random().toString(16).slice(2),this.name=t,this.todo=[]}};function e(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t){return e(1,arguments),t instanceof Date||"object"===n(t)&&"[object Date]"===Object.prototype.toString.call(t)}function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function a(t){e(1,arguments);var n=Object.prototype.toString.call(t);return t instanceof Date||"object"===o(t)&&"[object Date]"===n?new Date(t.getTime()):"number"==typeof t||"[object Number]"===n?new Date(t):("string"!=typeof t&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(e(1,arguments),!r(t)&&"number"!=typeof t)return!1;var n=a(t);return!isNaN(Number(n))}function d(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function s(t,n){e(2,arguments);var r=a(t).getTime(),o=d(n);return new Date(r+o)}function c(t,n){e(2,arguments);var r=d(n);return s(t,-r)}var l=864e5;function u(t){e(1,arguments);var n=1,r=a(t),o=r.getUTCDay(),i=(o<n?7:0)+o-n;return r.setUTCDate(r.getUTCDate()-i),r.setUTCHours(0,0,0,0),r}function m(t){e(1,arguments);var n=a(t),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=u(o),d=new Date(0);d.setUTCFullYear(r,0,4),d.setUTCHours(0,0,0,0);var s=u(d);return n.getTime()>=i.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function h(t){e(1,arguments);var n=m(t),r=new Date(0);r.setUTCFullYear(n,0,4),r.setUTCHours(0,0,0,0);var o=u(r);return o}var f=6048e5,g={};function v(){return g}function y(t,n){var r,o,i,s,c,l,u,m;e(1,arguments);var h=v(),f=d(null!==(r=null!==(o=null!==(i=null!==(s=null==n?void 0:n.weekStartsOn)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==i?i:h.weekStartsOn)&&void 0!==o?o:null===(u=h.locale)||void 0===u||null===(m=u.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==r?r:0);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var g=a(t),y=g.getUTCDay(),p=(y<f?7:0)+y-f;return g.setUTCDate(g.getUTCDate()-p),g.setUTCHours(0,0,0,0),g}function p(t,n){var r,o,i,s,c,l,u,m;e(1,arguments);var h=a(t),f=h.getUTCFullYear(),g=v(),p=d(null!==(r=null!==(o=null!==(i=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(c=n.locale)||void 0===c||null===(l=c.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==i?i:g.firstWeekContainsDate)&&void 0!==o?o:null===(u=g.locale)||void 0===u||null===(m=u.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==r?r:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(f+1,0,p),w.setUTCHours(0,0,0,0);var b=y(w,n),T=new Date(0);T.setUTCFullYear(f,0,p),T.setUTCHours(0,0,0,0);var k=y(T,n);return h.getTime()>=b.getTime()?f+1:h.getTime()>=k.getTime()?f:f-1}function w(t,n){var r,o,a,i,s,c,l,u;e(1,arguments);var m=v(),h=d(null!==(r=null!==(o=null!==(a=null!==(i=null==n?void 0:n.firstWeekContainsDate)&&void 0!==i?i:null==n||null===(s=n.locale)||void 0===s||null===(c=s.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==a?a:m.firstWeekContainsDate)&&void 0!==o?o:null===(l=m.locale)||void 0===l||null===(u=l.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:1),f=p(t,n),g=new Date(0);g.setUTCFullYear(f,0,h),g.setUTCHours(0,0,0,0);var w=y(g,n);return w}var b=6048e5;function T(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}const k=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return T("yy"===e?r%100:r,e.length)},E=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):T(n+1,2)},D=function(t,e){return T(t.getUTCDate(),e.length)},_=function(t,e){return T(t.getUTCHours()%12||12,e.length)},j=function(t,e){return T(t.getUTCHours(),e.length)},M=function(t,e){return T(t.getUTCMinutes(),e.length)},C=function(t,e){return T(t.getUTCSeconds(),e.length)},P=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return T(Math.floor(r*Math.pow(10,n-3)),e.length)};function S(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),a=r%60;if(0===a)return n+String(o);var i=e||"";return n+String(o)+i+T(a,2)}function x(t,e){return t%60==0?(t>0?"-":"+")+T(Math.abs(t)/60,2):I(t,e)}function I(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+T(Math.floor(o/60),2)+n+T(o%60,2)}const N={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return k(t,e)},Y:function(t,e,n,r){var o=p(t,r),a=o>0?o:1-o;return"YY"===e?T(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):T(a,e.length)},R:function(t,e){return T(m(t),e.length)},u:function(t,e){return T(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return T(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return T(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return E(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return T(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,n,r,o){var i=function(t,n){e(1,arguments);var r=a(t),o=y(r,n).getTime()-w(r,n).getTime();return Math.round(o/b)+1}(t,o);return"wo"===n?r.ordinalNumber(i,{unit:"week"}):T(i,n.length)},I:function(t,n,r){var o=function(t){e(1,arguments);var n=a(t),r=u(n).getTime()-h(n).getTime();return Math.round(r/f)+1}(t);return"Io"===n?r.ordinalNumber(o,{unit:"week"}):T(o,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):D(t,e)},D:function(t,n,r){var o=function(t){e(1,arguments);var n=a(t),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=n.getTime(),i=r-o;return Math.floor(i/l)+1}(t);return"Do"===n?r.ordinalNumber(o,{unit:"dayOfYear"}):T(o,n.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return T(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return T(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return T(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return _(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):j(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):T(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):M(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):C(t,e)},S:function(t,e){return P(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return x(o);case"XXXX":case"XX":return I(o);default:return I(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return x(o);case"xxxx":case"xx":return I(o);default:return I(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+S(o,":");default:return"GMT"+I(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+S(o,":");default:return"GMT"+I(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return T(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return T((r._originalDate||t).getTime(),e.length)}};var U=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},B=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},L={p:B,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],a=r[2];if(!a)return U(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(o,e)).replace("{{time}}",B(a,e))}};const W=L;function Y(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var O=["D","DD"],q=["YY","YYYY"];function A(t){return-1!==O.indexOf(t)}function F(t){return-1!==q.indexOf(t)}function H(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var z={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function G(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var Q,R={date:G({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:G({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:G({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},X={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function $(t){return function(e,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var o=t.defaultFormattingWidth||t.defaultWidth,a=null!=n&&n.width?String(n.width):o;r=t.formattingValues[a]||t.formattingValues[o]}else{var i=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;r=t.values[d]||t.values[i]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function J(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;var i,d=a[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?V(s,(function(t){return t.test(d)})):Z(s,(function(t){return t.test(d)}));i=t.valueCallback?t.valueCallback(c):c,i=n.valueCallback?n.valueCallback(i):i;var l=e.slice(d.length);return{value:i,rest:l}}}function Z(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function V(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const K={code:"en-US",formatDistance:function(t,e,n){var r,o=z[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:R,formatRelative:function(t,e,n,r){return X[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:$({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:$({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:$({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:$({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:$({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(Q={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Q.matchPattern);if(!n)return null;var r=n[0],o=t.match(Q.parsePattern);if(!o)return null;var a=Q.valueCallback?Q.valueCallback(o[0]):o[0];a=e.valueCallback?e.valueCallback(a):a;var i=t.slice(r.length);return{value:a,rest:i}}),era:J({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:J({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:J({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:J({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:J({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var tt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,et=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,nt=/^'([^]*?)'?$/,rt=/''/g,ot=/[a-zA-Z]/;function at(t,n,r){var o,s,l,u,m,h,f,g,y,p,w,b,T,k,E,D,_,j;e(2,arguments);var M=String(n),C=v(),P=null!==(o=null!==(s=null==r?void 0:r.locale)&&void 0!==s?s:C.locale)&&void 0!==o?o:K,S=d(null!==(l=null!==(u=null!==(m=null!==(h=null==r?void 0:r.firstWeekContainsDate)&&void 0!==h?h:null==r||null===(f=r.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:C.firstWeekContainsDate)&&void 0!==u?u:null===(y=C.locale)||void 0===y||null===(p=y.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==l?l:1);if(!(S>=1&&S<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var x=d(null!==(w=null!==(b=null!==(T=null!==(k=null==r?void 0:r.weekStartsOn)&&void 0!==k?k:null==r||null===(E=r.locale)||void 0===E||null===(D=E.options)||void 0===D?void 0:D.weekStartsOn)&&void 0!==T?T:C.weekStartsOn)&&void 0!==b?b:null===(_=C.locale)||void 0===_||null===(j=_.options)||void 0===j?void 0:j.weekStartsOn)&&void 0!==w?w:0);if(!(x>=0&&x<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!P.localize)throw new RangeError("locale must contain localize property");if(!P.formatLong)throw new RangeError("locale must contain formatLong property");var I=a(t);if(!i(I))throw new RangeError("Invalid time value");var U=Y(I),B=c(I,U),L={firstWeekContainsDate:S,weekStartsOn:x,locale:P,_originalDate:I},O=M.match(et).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,W[e])(t,P.formatLong):t})).join("").match(tt).map((function(e){if("''"===e)return"'";var o=e[0];if("'"===o)return it(e);var a=N[o];if(a)return null!=r&&r.useAdditionalWeekYearTokens||!F(e)||H(e,n,String(t)),null!=r&&r.useAdditionalDayOfYearTokens||!A(e)||H(e,n,String(t)),a(B,e,P.localize,L);if(o.match(ot))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return e})).join("");return O}function it(t){var e=t.match(nt);return e?e[1].replace(rt,"'"):t}Math.pow(10,8);var dt=36e5;function st(t,n){var r;e(1,arguments);var o=d(null!==(r=null==n?void 0:n.additionalDigits)&&void 0!==r?r:2);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof t&&"[object String]"!==Object.prototype.toString.call(t))return new Date(NaN);var a,i=ht(t);if(i.date){var s=ft(i.date,o);a=gt(s.restDateString,s.year)}if(!a||isNaN(a.getTime()))return new Date(NaN);var c,l=a.getTime(),u=0;if(i.time&&(u=yt(i.time),isNaN(u)))return new Date(NaN);if(!i.timezone){var m=new Date(l+u),h=new Date(0);return h.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),h.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),h}return c=wt(i.timezone),isNaN(c)?new Date(NaN):new Date(l+u+c)}var ct={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},lt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,ut=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,mt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function ht(t){var e,n={},r=t.split(ct.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?e=r[0]:(n.date=r[0],e=r[1],ct.timeZoneDelimiter.test(n.date)&&(n.date=t.split(ct.timeZoneDelimiter)[0],e=t.substr(n.date.length,t.length))),e){var o=ct.timezone.exec(e);o?(n.time=e.replace(o[1],""),n.timezone=o[1]):n.time=e}return n}function ft(t,e){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};var o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:null===a?o:100*a,restDateString:t.slice((r[1]||r[2]).length)}}function gt(t,e){if(null===e)return new Date(NaN);var n=t.match(lt);if(!n)return new Date(NaN);var r=!!n[4],o=vt(n[1]),a=vt(n[2])-1,i=vt(n[3]),d=vt(n[4]),s=vt(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,d,s)?function(t,e,n){var r=new Date(0);r.setUTCFullYear(t,0,4);var o=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}(e,d,s):new Date(NaN);var c=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(bt[e]||(Tt(t)?29:28))}(e,a,i)&&function(t,e){return e>=1&&e<=(Tt(t)?366:365)}(e,o)?(c.setUTCFullYear(e,a,Math.max(o,i)),c):new Date(NaN)}function vt(t){return t?parseInt(t):1}function yt(t){var e=t.match(ut);if(!e)return NaN;var n=pt(e[1]),r=pt(e[2]),o=pt(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,o)?n*dt+6e4*r+1e3*o:NaN}function pt(t){return t&&parseFloat(t.replace(",","."))||0}function wt(t){if("Z"===t)return 0;var e=t.match(mt);if(!e)return 0;var n="+"===e[1]?-1:1,r=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,o)?n*(r*dt+6e4*o):NaN}var bt=[31,null,31,30,31,30,31,31,30,31,30,31];function Tt(t){return t%400==0||t%4==0&&t%100!=0}class kt{static getProjects(){let t;return null===localStorage.getItem("projects")?(t=[{id:"bef36e0e1b027",name:"FIX the World2",todo:[{id:"ca079bdcb9ba2",title:"Rebuild Houses",description:"Atque",dueDate:"2023-03-26",priority:"Priority 2",checklist:!0},{id:"ca069bdcb9ba2",title:"Born children",description:"Gitque",dueDate:"2023-03-28",priority:"Priority 2",checklist:!1},{id:"ca059bdcb9ba2",title:"Melt metal scraps",description:"Botu",dueDate:"2023-04-02",priority:"Priority 2",checklist:!1}]},{id:"bod36e0e1b027",name:"Body maintance",todo:[{id:"cfgg9bdcb9ba2",title:"Brush Teeth",description:"Atque",dueDate:"2023-02-03",priority:"Priority 2",checklist:!0}]}],localStorage.setItem("projects",JSON.stringify(t))):t=JSON.parse(localStorage.getItem("projects")),t}static saveProject(t){const e=kt.getProjects();e.push(t),localStorage.setItem("projects",JSON.stringify(e))}static saveTodo(t,e,n){if(void 0!==n){const r=kt.getProjects();r[t].todo.splice(n,0,e),localStorage.setItem("projects",JSON.stringify(r))}else{const n=kt.getProjects();n[t].todo.push(e),localStorage.setItem("projects",JSON.stringify(n))}}static removeTodo(t,e){const n=kt.getProjects();n[t].todo.splice(e,1),localStorage.setItem("projects",JSON.stringify(n))}}const Et=kt;new class{constructor(){this._tracker=new class{constructor(){this._projects=Et.getProjects()}addTodoToProject(t,e,n){void 0!==n?(this._projects[t].todo.splice(n,0,e),Et.saveTodo(t,e,n)):(this._projects[t].todo.push(e),Et.saveTodo(t,e)),this._render(t)}addProject(t){this._projects.push(t),Et.saveProject(t)}removeTodo(t){let e;this._projects.forEach(((n,r)=>{e=n.todo.findIndex((e=>e.id==t)),-1!==e&&(this._projects[r].todo.splice(e,1),Et.removeTodo(r,e))}))}_displayTodo(t,e){const n=document.getElementById("todo-list"),r=document.createElement("li");let o;!0===t.checklist?(r.classList.add("todo-done"),o='<input class="checkbox" type="checkbox" checked />'):o='<input class="checkbox" type="checkbox" />',r.classList.add("todo-single"),r.setAttribute("data-id",t.id),r.innerHTML=`\n\t\t<div class="col-1">\n\t\t${o}\n\t</div>\n\t<div class="col-2">\n\t\t<div class="todo-title">${t.title}</div>\n\t\t<div class="todo-project-name">${this._projects[e].name}</div>\n\t\t<div class="todo-description">\n\t\t${t.description}\n\t\t</div>\n\t\t<div class="todo-priority todo-priority-1">${t.priority}</div>\n\t</div>\n\t<div class="col-3">\n\t\t<input type="date" disabled="true" value="${t.dueDate}" />\n\t\t<div class="todo-icons-container">\n\t\t\t<i class="material-symbols-outlined todo-icon-edit">edit</i>\n\t\t\t<i class="material-symbols-outlined todo-icon-delete">delete</i>\n\t\t</div>\n\t</div>`,n.appendChild(r)}_createExistingProjectsModal(){const t=document.getElementById("selectProject");this._projects.forEach((e=>{let n=document.createElement("option");n.textContent=e.name,n.setAttribute("value",`${e.name}`),n.setAttribute("data-id",`${e.id}`),t.appendChild(n)}))}_clearExistingProjectsModal(){const t=document.getElementById("selectProject");for(;t.firstChild;)t.removeChild(t.firstChild)}_clearMainTodoList(){const t=document.getElementById("todo-list");for(;t.firstChild;)t.removeChild(t.firstChild)}_createProjectsList(t){this._projects.forEach(((t,e)=>{const n=document.querySelector("#all-projects"),r=document.createElement("li");r.textContent=t.name,r.classList.add("new-project","li-nav"),r.setAttribute("data-id",t.id),r.setAttribute("data-project-Index",e),n.insertAdjacentElement("afterend",r)}));const e=document.getElementById("ul-nav").querySelectorAll("li");e.forEach((t=>t.addEventListener("click",(t=>{e.forEach((t=>t.classList.remove("li-active"))),t.target.classList.add("li-active")}))))}_clearProjectsList(){document.querySelectorAll(".new-project").forEach((t=>{t.remove()}))}_changeTitle(t){document.getElementById("title").textContent=this._projects[t].name}_findProjTodoIndex(t){let e,n,r;return this._projects.forEach(((o,a)=>{e=o.todo.findIndex((e=>e.id==t)),-1!==e&&(n=a,r=e)})),[n,r]}loadTodos(){this._clearMainTodoList(),document.getElementById("title").textContent="All Todos",this._projects.forEach(((t,e)=>t.todo.forEach((t=>this._displayTodo(t,e)))))}_addActive(t){const e=document.getElementById("ul-nav"),n=e.querySelectorAll(".new-project");e.querySelectorAll("li").forEach((t=>t.classList.remove("li-active"))),n.forEach((e=>{e.dataset.projectIndex==t&&e.classList.add("li-active")}))}_render(t){this._clearProjectsList(),this._createProjectsList(t),this._clearMainTodoList(),this._projects[t].todo.forEach((e=>this._displayTodo(e,t))),this._changeTitle(t),this._addActive(t),this._clearExistingProjectsModal(),this._createExistingProjectsModal()}_renderDate(t){this._clearMainTodoList();const n=new Date,r=at(n,"yyyy-MM-dd");if("today"===t)this._projects.forEach(((t,e)=>{t.todo.forEach((t=>{t.dueDate===r&&this._displayTodo(t,e)}))}));else if("week"===t){const t=st(at(function(t,n){e(2,arguments);var r=a(t),o=d(n);return isNaN(o)?new Date(NaN):o?(r.setDate(r.getDate()+o),r):r}(st(r),7),"yyyy-MM-dd"));this._projects.forEach(((r,o)=>{r.todo.forEach((r=>{(function(t,n){e(2,arguments);var r=a(t).getTime(),o=a(n.start).getTime(),i=a(n.end).getTime();if(!(o<=i))throw new RangeError("Invalid interval");return r>=o&&r<=i})(st(r.dueDate),{start:n,end:t})&&this._displayTodo(r,o)}))}))}}},this._loadModal(),this._tracker.loadTodos(),this._tracker._createExistingProjectsModal(),this._tracker._createProjectsList(),this._addListeners()}_addListeners(){document.querySelector("#submit-btn").addEventListener("click",this._newTodo.bind(this)),document.querySelector("#edit-btn").addEventListener("click",this._submitEditTodo.bind(this)),document.getElementById("todo-list").addEventListener("click",this._removeTodo.bind(this)),document.getElementById("todo-list").addEventListener("click",this._editTodo.bind(this)),document.querySelector("#li-all-todo").addEventListener("click",(()=>this._tracker.loadTodos())),document.getElementById("ul-nav").addEventListener("click",this._renderProject.bind(this)),document.getElementById("todo-list").addEventListener("click",this._setTodoDone.bind(this)),document.getElementById("today").addEventListener("click",this._renderTime.bind(this,"today")),document.getElementById("week").addEventListener("click",this._renderTime.bind(this,"week"))}_renderTime(t){this._tracker._renderDate(t)}_renderProject(t){t.target.classList.contains("new-project")&&this._tracker._render(t.target.dataset.projectIndex)}_setTodoDone(t){if(t.target.classList.contains("checkbox")){const e=t.target.closest(".todo-single");e.classList.toggle("todo-done");const[n,r]=this._tracker._findProjTodoIndex(e.dataset.id),o=this._tracker._projects[n].todo[r];o.checklist=!o.checklist,this._tracker.removeTodo(e.dataset.id),this._tracker.addTodoToProject(n,o,r)}}_loadModal(){const t=document.getElementById("submit-btn");document.querySelectorAll("[data-modal-target]").forEach((e=>{e.addEventListener("click",(n=>{const r=document.querySelector(e.dataset.modalTarget);t.style.display="inherit",this._openModal(r),n.stopPropagation()}))})),document.querySelectorAll("[data-close-button]").forEach((t=>{t.addEventListener("click",(()=>{const e=t.closest(".modal");this._closeModal(e)}))})),document.getElementById("overlay").addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((t=>{this._closeModal(t)}))}));const e=document.querySelectorAll('[name="projectOption"]'),n=document.getElementById("projectNameDiv"),r=document.getElementById("selectProjectDiv");e.forEach((t=>{t.addEventListener("change",(function(){"project-name"===this.value?(n.style.display="block",r.style.display="none"):"selectProject"===this.value&&(n.style.display="none",r.style.display="block")}))}))}_openModal(t){null!=t&&(t.classList.add("active"),overlay.classList.add("active"))}_closeModal(t){const e=document.getElementById("submit-btn"),n=document.getElementById("edit-btn");null!=t&&(e.style.display="none",n.style.display="none",this._clearInputs(),t.classList.remove("active"),overlay.classList.remove("active"))}_clearInputs(){const t=document.getElementById("project-name"),e=document.getElementById("todo-title"),n=document.getElementById("description"),r=document.getElementById("dueDate"),o=document.getElementById("priority");t.value="",e.value="",n.value="",r.value="",o.value="Priority 1"}_newTodo(e){e.preventDefault();const n=document.getElementById("projectNameOption"),r=document.getElementById("selectProjectOption"),o=document.getElementById("selectProject"),a=document.getElementById("project-name"),i=document.getElementById("todo-title"),d=document.getElementById("description"),s=document.getElementById("dueDate"),c=document.getElementById("priority"),l=new class{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Default Title",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Default Description",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"2023-02-03",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Priority 1",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];this.id=Math.random().toString(16).slice(2),this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.checklist=o}}(i.value,d.value,s.value,c.value);if(n.checked){const e=new t(a.value);this._tracker.addProject(e),this._tracker.addTodoToProject(this._tracker._projects.length-1,l)}else r.checked&&this._tracker._projects.forEach(((t,e)=>{t.name===o.value&&this._tracker.addTodoToProject(e,l)}));this._closeModal(modal)}_removeTodo(t){if(t.target.classList.contains("todo-icon-delete")){const e=t.target.closest(".todo-single");this._tracker.removeTodo(e.dataset.id),e.remove()}}_editTodo(t){const e=document.getElementById("edit-btn");if(t.target.classList.contains("todo-icon-edit")){e.style.display="inherit",this._openModal(modal);const n=t.target.closest(".todo-single").dataset.id;let r,o,a,i,d;this._tracker._projects.forEach(((t,e)=>{r=t.todo.findIndex((t=>t.id===n)),-1!==r&&(o=this._tracker._projects[e].todo[r],a=this._tracker._projects[e].name,i=e,d=r)})),modal.setAttribute("data-project-index",i),modal.setAttribute("data-todo-index",d),modal.setAttribute("data-todo-id",n);const s=document.getElementById("selectProject"),c=document.getElementById("todo-title"),l=document.getElementById("description"),u=document.getElementById("dueDate"),m=document.getElementById("priority");c.value=o.title,l.value=o.description,u.value=o.dueDate,m.value=o.priority,s.value=a}}_submitEditTodo(e){e.preventDefault();const n=document.getElementById("projectNameOption"),r=document.getElementById("selectProjectOption"),o=document.getElementById("selectProject"),a=document.getElementById("project-name"),i=document.getElementById("todo-title"),d=document.getElementById("description"),s=document.getElementById("dueDate"),c=document.getElementById("priority"),l=modal.dataset.todoId,[u,m]=this._tracker._findProjTodoIndex(l),h=this._tracker._projects[u].todo[m];if(h.title=i.value,h.description=d.value,h.dueDate=s.value,h.priority=c.value,n.checked){this._tracker.removeTodo(l);const e=new t(a.value);this._tracker.addProject(e),this._tracker.addTodoToProject(this._tracker._projects.length-1,h)}else r.checked&&this._tracker._projects.forEach(((t,e)=>{t.name===o.value&&(e===u?(this._tracker.removeTodo(l),this._tracker.addTodoToProject(u,h,m)):(this._tracker.removeTodo(l),this._tracker.addTodoToProject(e,h)))}));this._closeModal(modal)}}})();