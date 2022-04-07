(()=>{"use strict";var r={426:(r,e,n)=>{n.d(e,{Z:()=>i});var t=n(81),o=n.n(t),a=n(645),c=n.n(a)()(o());c.push([r.id,'* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: rgb(17, 17, 17);\r\n    color: white;\r\n}\r\n\r\n.container {\r\n    padding-left: 20vh!important;\r\n    padding-right: 20vh!important;\r\n}\r\n\r\n.flex {\r\n    display: flex;\r\n}\r\n\r\n\r\n/* HEADER AREA*/\r\n\r\n.page-header {\r\n    background-color: rgb(17, 17, 17);\r\n    padding: 30px 10vh 10px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.logo {\r\n    height: 60px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.header-right,\r\n.header-left {\r\n    align-items: center;\r\n}\r\n\r\n.page-title {\r\n    font-size: 28px;\r\n    color: #BFC6C9;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n/*slider*/\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 60px;\r\n    height: 34px;\r\n    transform: scale(1.5);\r\n}\r\n\r\n.switch input {\r\n    opacity: 0;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #04E762;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n    border-radius: 34px;\r\n}\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: "";\r\n    height: 26px;\r\n    width: 26px;\r\n    left: 4px;\r\n    bottom: 4px;\r\n    background-color: white;\r\n    -webkit-transition: .4s;\r\n    transition: .4s;\r\n    border-radius: 50%;\r\n}\r\n\r\ninput:checked+.slider {\r\n    background-color: #F5B700;\r\n}\r\n\r\ninput:checked+.slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    -ms-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n}\r\n\r\n.header-ctemp {\r\n    margin-right: 40px;\r\n}\r\n\r\n.header-ftemp {\r\n    margin-left: 40px;\r\n}\r\n\r\n.header-ctemp,\r\n.header-ftemp {\r\n    font-size: 24px;\r\n}\r\n\r\n\r\n/* SEARCH AREA */\r\n\r\n.content-search {\r\n    justify-content: center;\r\n    padding: 40px 0 0 0;\r\n}\r\n\r\n.searchbar,\r\n.searchbar:focus,\r\n.searchbtn,\r\n.searchbtn:focus {\r\n    box-sizing: content-box;\r\n    padding: 10px 15px;\r\n    font-size: 20px;\r\n    border: none;\r\n    outline: none;\r\n}\r\n\r\n.searchbar {\r\n    border-top-left-radius: 50px;\r\n    border-bottom-left-radius: 50px;\r\n    color: #EC6E4C;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.searchbar::placeholder {\r\n    color: rgb(230, 230, 230);\r\n}\r\n\r\n.searchbtn {\r\n    border-top-right-radius: 50px;\r\n    border-bottom-right-radius: 50px;\r\n    background-color: #EC6E4C;\r\n    text-transform: uppercase;\r\n    color: white;\r\n}\r\n\r\n.displayarea-currentday {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.displayarea-forecast {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n}\r\n\r\n\r\n/* CURRENT DAY AREA */\r\n\r\n.displayarea-currentday {\r\n    margin: 75px 0;\r\n}\r\n\r\n.currentday-weatherimg {\r\n    transform: scale(1.8);\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.currentday-temp {\r\n    font-size: 56px;\r\n    font-weight: bold;\r\n    margin: 25px;\r\n}\r\n\r\n.currentday-toparea {\r\n    justify-content: space-between;\r\n    font-size: 20px;\r\n}\r\n\r\n.currentday-bottomarea {\r\n    justify-content: space-around;\r\n    font-size: 20px;\r\n}\r\n\r\n.currentday-weathertext {\r\n    text-align: center;\r\n    font-size: 20px;\r\n}\r\n\r\n.currentday-location {\r\n    font-size: 32px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n/* WEATHER FORECAST AREA */\r\n\r\n.forecastday-weather {\r\n    width: 150px;\r\n    margin-bottom: 50px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-self: center;\r\n}\r\n\r\n.forecastday-weatherimg {\r\n    transform: scale(1.5);\r\n}\r\n\r\n.forecastday-weatherdescription {\r\n    text-align: center;\r\n    margin: 25px 0;\r\n    font-size: 24px;\r\n}\r\n\r\n.forecastday-maxtemp,\r\n.forecastday-mintemp {\r\n    margin: 5px 20px;\r\n    font-size: 24px;\r\n}\r\n\r\n.weatherforecast-text {\r\n    text-align: center;\r\n    font-size: 32px;\r\n    font-weight: 300;\r\n    margin-bottom: 45px;\r\n}',""]);const i=c},645:r=>{r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var n="",t=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),t&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=r(e),t&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(r,n,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var c={};if(t)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<r.length;d++){var p=[].concat(r[d]);t&&c[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var e=[];function n(r){for(var n=-1,t=0;t<e.length;t++)if(e[t].identifier===r){n=t;break}return n}function t(r,t){for(var a={},c=[],i=0;i<r.length;i++){var s=r[i],d=t.base?s[0]+t.base:s[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=n(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=o(m,t);t.byIndex=i,e.splice(i,0,{identifier:l,updater:f,references:1})}c.push(l)}return c}function o(r,e){var n=e.domAPI(e);return n.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;n.update(r=e)}else n.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var c=0;c<a.length;c++){var i=n(a[c]);e[i].references--}for(var s=t(r,o),d=0;d<a.length;d++){var p=n(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:r=>{var e={};r.exports=function(r,n){var t=function(r){if(void 0===e[r]){var n=document.querySelector(r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(r){n=null}e[r]=n}return e[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(n)}},216:r=>{r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,n)=>{r.exports=function(r){var e=n.nc;e&&r.setAttribute("nonce",e)}},795:r=>{r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(n){!function(r,e,n){var t="";n.supports&&(t+="@supports (".concat(n.supports,") {")),n.media&&(t+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(t+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),t+=n.css,o&&(t+="}"),n.media&&(t+="}"),n.supports&&(t+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,r,e.options)}(e,r,n)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},572:(r,e,n)=>{r.exports=n.p+"9318b55d6c8f02eed889.png"}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return r[t](a,a.exports,n),a.exports}n.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return n.d(e,{a:e}),e},n.d=(r,e)=>{for(var t in e)n.o(e,t)&&!n.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:e[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),n.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r;n.g.importScripts&&(r=n.g.location+"");var e=n.g.document;if(!r&&e&&(e.currentScript&&(r=e.currentScript.src),!r)){var t=e.getElementsByTagName("script");t.length&&(r=t[t.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=r})(),(()=>{var r=n(379),e=n.n(r),t=n(795),o=n.n(t),a=n(569),c=n.n(a),i=n(565),s=n.n(i),d=n(216),p=n.n(d),l=n(589),u=n.n(l),m=n(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=c().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=n(572);async function y(r){let e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${r}&appid=29112d9d44d0009fdd0e9aa6b008cdee`,{type:"cors"}),n=await e.json();return{processedTodayDataObj:{currentMaxTemp:(n.main.temp_max-273.15).toFixed(1),currentMinTemp:(n.main.temp_min-273.15).toFixed(1),currentTemp:(n.main.temp-273.15).toFixed(1),feelsLikeTemp:(n.main.feels_like-273.15).toFixed(1),locationName:n.name,currentWeatherDescription:n.weather[0].description,iconCode:n.weather[0].icon},processedSixDayForecastObj:await async function(r,e){let n=await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r}&lon=${e}&exclude=hourly,minutely&appid=29112d9d44d0009fdd0e9aa6b008cdee`,{type:"cors"}),t=await n.json();t.daily.shift(),t.daily.shift();let o=t.daily,a=[];return o.forEach((r=>{let e={dayMaxTemp:(r.temp.max-273.15).toFixed(1),dayMinTemp:(r.temp.min-273.15).toFixed(1),dayWeatherDescription:r.weather[0].description,iconCode:r.weather[0].icon};a.push(e)})),console.log(t),{processedSixDayForecastArr:a}}(Number(n.coord.lat),Number(n.coord.lon))}}async function x(r,e){let n=await r(e);var t;t=n.processedTodayDataObj,g.textContent=t.currentMaxTemp,b.textContent=t.currentMinTemp,v.textContent=t.currentTemp,w.textContent=t.feelsLikeTemp,C.textContent=t.locationName,E.src=T(t.iconCode),S.textContent=t.currentWeatherDescription,function(r){let e=document.querySelector(".displayarea-forecast");e.textContent="",r.forEach((r=>{const n=document.createElement("div");n.classList.add("forecastday-weather");const t=document.createElement("img");t.classList.add("forecastday-weatherimg"),n.appendChild(t);const o=document.createElement("p");o.classList.add("forecastday-weatherdescription"),n.appendChild(o);const a=document.createElement("div");a.classList.add("forecastday-temperature"),a.classList.add("flex"),n.appendChild(a);const c=document.createElement("p");c.classList.add("forecastday-maxtemp"),c.classList.add("temp-text"),c.style.color="#04E762",a.appendChild(c);const i=document.createElement("p");i.classList.add("forecastday-mintemp"),i.classList.add("temp-text"),i.style.color="#04E762",a.appendChild(i),e.appendChild(n),t.src=T(r.iconCode),o.textContent=r.dayWeatherDescription,c.textContent=r.dayMaxTemp,i.textContent=r.dayMinTemp}))}(n.processedSixDayForecastObj.processedSixDayForecastArr)}let g=document.querySelector(".currentday-maxtemp"),b=document.querySelector(".currentday-mintemp"),v=document.querySelector(".currentday-temp"),w=document.querySelector(".currentday-feels"),C=document.querySelector(".currentday-location"),E=document.querySelector(".currentday-weatherimg"),S=document.querySelector(".currentday-weathertext");function T(r){return`http://openweathermap.org/img/wn/${r}@2x.png`}(async function(){document.querySelector("img.logo").src=h;let r=document.querySelector("button"),e=document.querySelector("form"),n=document.querySelector("input[type=text]");e.addEventListener("submit",(r=>r.preventDefault())),r.addEventListener("click",(()=>{x(y,n.value)}));let t="c",o=document.querySelector(".slider-btn");function a(){let r=document.querySelector(".header-ctemp"),e=document.querySelector(".header-ftemp"),n=[...document.querySelectorAll(".temp-text")];if(!0===o.checked){if(r.style.color="#BFC6C9",e.style.color="#F5B700",n.forEach((r=>r.style.color="#F5B700")),"f"===t)return;"c"===t&&n.forEach((r=>{let e=Number(r.textContent);e=9*e/5+32,r.textContent=e.toFixed(1),t="f"}))}else if(!1===o.checked){if(r.style.color="#04E762",e.style.color="#BFC6C9",n.forEach((r=>r.style.color="#04E762")),"c"===t)return;"f"===t&&n.forEach((r=>{let e=Number(r.textContent);e=5*(e-32)/9,r.textContent=e.toFixed(1),t="c"}))}}o.addEventListener("change",a),x(y,"Bucharest"),a()}).catch((r=>console.log(r)))()})()})();