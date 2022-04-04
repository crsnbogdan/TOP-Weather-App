/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData.js */ \"./src/weatherData.js\");\n/*\nstructure\n    top area:\n         - bar with app name\n         - search bar for location\n    main area:\n        toggle for celsius or fahrenheit temperature\n            weather info for location - displayed horizontally\n                top middle row\n                    location name   - done\n                    temperature - example https://enplace-weather.herokuapp.com/ - done\n                    -  highest and lowest temperature above - done\n                    - temperature larger in the middle  - done\n                    - feels like below - done\n                bottom middle row\n                    forecast for the next 7 days - https://openweathermap.org/forecast16 - done\n                        - get the average for each day and display weather - done\n                        - display the weather forecast in 7 individual panels - done\n                        - display highest and lowest temp for each one - done\n                        \nideas:\n     - use a free API to get a picture of the cityas the background\n        - possible good resource: https://codeburst.io/adding-city-images-to-your-react-app-14c937df2db2\n*/\n\n\nlet searchBtn = document.querySelector('button');\nlet locationSearchForm = document.querySelector('form');\nlet locationSearchInput = document.querySelector('input[type=text]')\nlocationSearchForm.addEventListener('submit', (e) => e.preventDefault());\nsearchBtn.addEventListener('click', () => {\n    renderWeather(locationSearchInput.value);\n});\n\n\nasync function renderWeather(location) {\n    let weatherData = await (0,_weatherData_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(location);\n    renderCurrentDayWeather(weatherData.processedTodayDataObj);\n    renderWeatherForecast(weatherData.processedSevenDayForecastObj);\n}\n\nfunction renderCurrentDayWeather(currentDayObj) {\n    console.log(currentDayObj)\n};\n\nfunction renderWeatherForecast(weatherForecastObj) {\n    console.log(weatherForecastObj)\n};\n\n//# sourceURL=webpack://top-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\n async function getWeatherData(queryLocation) {\r\n     let rawTodayWeatherData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${queryLocation}&appid=29112d9d44d0009fdd0e9aa6b008cdee`, { type: 'cors' });\r\n     let rawTodayDataObj = await rawTodayWeatherData.json();\r\n     let processedTodayDataObj = {\r\n         locationName: rawTodayDataObj.name,\r\n         currentWeatherDescription: rawTodayDataObj.weather[0].description,\r\n         maxTemp: rawTodayDataObj.main.temp_max,\r\n         temp: rawTodayDataObj.main.temp,\r\n         minTemp: rawTodayDataObj.main.temp_min,\r\n         feelsLikeTemp: rawTodayDataObj.main.feels_like,\r\n     }\r\n\r\n     let processedSevenDayForecastObj = await getForecastWeatherData(Number(rawTodayDataObj.coord.lat), Number(rawTodayDataObj.coord.lon))\r\n     return { processedTodayDataObj, processedSevenDayForecastObj };\r\n }\r\n async function getForecastWeatherData(currentCityLat, currentCityLon) {\r\n     let rawForecastWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${currentCityLat}&lon=${currentCityLon}&exclude=hourly,minutely&appid=29112d9d44d0009fdd0e9aa6b008cdee`, { type: 'cors' });\r\n     let rawForecastDataObj = await rawForecastWeatherData.json();\r\n     rawForecastDataObj.daily.shift();\r\n     let rawSevenDayForecastArr = rawForecastDataObj.daily;\r\n     let processedSevenDayForecastArr = [];\r\n     rawSevenDayForecastArr.forEach(day => {\r\n         let currentDay = {\r\n             mintem: day.temp.min,\r\n             maxtemp: day.temp.max,\r\n             weather: day.weather[0].description,\r\n         }\r\n         processedSevenDayForecastArr.push(currentDay);\r\n     });\r\n     return { processedSevenDayForecastArr };\r\n }\r\n\r\n \n\n//# sourceURL=webpack://top-weather-app/./src/weatherData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;