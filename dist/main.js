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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    box-sizing: border-box;\\r\\n    font-family: sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: rgb(17, 17, 17);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    padding-left: 20vh!important;\\r\\n    padding-right: 20vh!important;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n\\r\\n/* HEADER AREA*/\\r\\n\\r\\n.page-header {\\r\\n    background-color: rgb(17, 17, 17);\\r\\n    padding: 30px 10vh 10px;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n    height: 60px;\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\n.header-right,\\r\\n.header-left {\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.page-title {\\r\\n    font-size: 28px;\\r\\n    color: #BFC6C9;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n\\r\\n/*slider*/\\r\\n\\r\\n.switch {\\r\\n    position: relative;\\r\\n    display: inline-block;\\r\\n    width: 60px;\\r\\n    height: 34px;\\r\\n    transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.switch input {\\r\\n    opacity: 0;\\r\\n    width: 0;\\r\\n    height: 0;\\r\\n}\\r\\n\\r\\n.slider {\\r\\n    position: absolute;\\r\\n    cursor: pointer;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    bottom: 0;\\r\\n    background-color: #04E762;\\r\\n    -webkit-transition: .4s;\\r\\n    transition: .4s;\\r\\n    border-radius: 34px;\\r\\n}\\r\\n\\r\\n.slider:before {\\r\\n    position: absolute;\\r\\n    content: \\\"\\\";\\r\\n    height: 26px;\\r\\n    width: 26px;\\r\\n    left: 4px;\\r\\n    bottom: 4px;\\r\\n    background-color: white;\\r\\n    -webkit-transition: .4s;\\r\\n    transition: .4s;\\r\\n    border-radius: 50%;\\r\\n}\\r\\n\\r\\ninput:checked+.slider {\\r\\n    background-color: #F5B700;\\r\\n}\\r\\n\\r\\ninput:checked+.slider:before {\\r\\n    -webkit-transform: translateX(26px);\\r\\n    -ms-transform: translateX(26px);\\r\\n    transform: translateX(26px);\\r\\n}\\r\\n\\r\\n.header-ctemp {\\r\\n    margin-right: 40px;\\r\\n}\\r\\n\\r\\n.header-ftemp {\\r\\n    margin-left: 40px;\\r\\n}\\r\\n\\r\\n.header-ctemp,\\r\\n.header-ftemp {\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n\\r\\n/* SEARCH AREA */\\r\\n\\r\\n.content-search {\\r\\n    justify-content: center;\\r\\n    padding: 40px 0 0 0;\\r\\n}\\r\\n\\r\\n.searchbar,\\r\\n.searchbar:focus,\\r\\n.searchbtn,\\r\\n.searchbtn:focus {\\r\\n    box-sizing: content-box;\\r\\n    padding: 10px 15px;\\r\\n    font-size: 20px;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.searchbar {\\r\\n    border-top-left-radius: 50px;\\r\\n    border-bottom-left-radius: 50px;\\r\\n    color: #EC6E4C;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n.searchbar::placeholder {\\r\\n    color: rgb(230, 230, 230);\\r\\n}\\r\\n\\r\\n.searchbtn {\\r\\n    border-top-right-radius: 50px;\\r\\n    border-bottom-right-radius: 50px;\\r\\n    background-color: #EC6E4C;\\r\\n    text-transform: uppercase;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.displayarea-currentday {\\r\\n    justify-content: space-between;\\r\\n    align-items: center;\\r\\n}\\r\\n\\r\\n.displayarea-forecast {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n}\\r\\n\\r\\n\\r\\n/* CURRENT DAY AREA */\\r\\n\\r\\n.displayarea-currentday {\\r\\n    margin: 75px 0;\\r\\n}\\r\\n\\r\\n.currentday-weatherimg {\\r\\n    transform: scale(1.8);\\r\\n    margin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.currentday-temp {\\r\\n    font-size: 56px;\\r\\n    font-weight: bold;\\r\\n    margin: 25px;\\r\\n}\\r\\n\\r\\n.currentday-toparea {\\r\\n    justify-content: space-between;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.currentday-bottomarea {\\r\\n    justify-content: space-around;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.currentday-weathertext {\\r\\n    text-align: center;\\r\\n    font-size: 20px;\\r\\n}\\r\\n\\r\\n.currentday-location {\\r\\n    font-size: 32px;\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\n\\r\\n/* WEATHER FORECAST AREA */\\r\\n\\r\\n.forecastday-weather {\\r\\n    width: 150px;\\r\\n    margin-bottom: 50px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-self: center;\\r\\n}\\r\\n\\r\\n.forecastday-weatherimg {\\r\\n    transform: scale(1.5);\\r\\n}\\r\\n\\r\\n.forecastday-weatherdescription {\\r\\n    text-align: center;\\r\\n    margin: 25px 0;\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n.forecastday-maxtemp,\\r\\n.forecastday-mintemp {\\r\\n    margin: 5px 20px;\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n.weatherforecast-text {\\r\\n    text-align: center;\\r\\n    font-size: 32px;\\r\\n    font-weight: 300;\\r\\n    margin-bottom: 45px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-weather-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logo.png */ \"./src/logo.png\");\n/* harmony import */ var _weatherData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherData.js */ \"./src/weatherData.js\");\n/* harmony import */ var _renderWeatherData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderWeatherData.js */ \"./src/renderWeatherData.js\");\n\n\n\n\n(async function() {\n\n    let logoElem = document.querySelector(\"img.logo\");\n    logoElem.src = _logo_png__WEBPACK_IMPORTED_MODULE_1__;\n    let searchBtn = document.querySelector(\"button\");\n    let locationSearchForm = document.querySelector(\"form\");\n    let locationSearchInput = document.querySelector(\"input[type=text]\");\n    locationSearchForm.addEventListener(\"submit\", (e) => e.preventDefault());\n    searchBtn.addEventListener(\"click\", () => {\n        (0,_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_3__.renderWeatherData)(_weatherData_js__WEBPACK_IMPORTED_MODULE_2__.getWeatherData, locationSearchInput.value);\n\n    });\n    let currentTempFormat = 'c';\n    let sliderBtn = document.querySelector('.slider-btn');\n    sliderBtn.addEventListener('change', updateTemperature);\n    (0,_renderWeatherData_js__WEBPACK_IMPORTED_MODULE_3__.renderWeatherData)(_weatherData_js__WEBPACK_IMPORTED_MODULE_2__.getWeatherData, 'Bucharest')\n    updateTemperature();\n\n    function updateTemperature() {\n        let cTempHeaderText = document.querySelector('.header-ctemp');\n        let fTempHeaderText = document.querySelector('.header-ftemp');\n        let TempTextsArr = [...document.querySelectorAll('.temp-text')];\n\n\n        if (sliderBtn.checked === true) {\n            cTempHeaderText.style.color = '#BFC6C9';\n            fTempHeaderText.style.color = '#F5B700';\n            TempTextsArr.forEach(tempText => tempText.style.color = '#F5B700');\n            if (currentTempFormat === 'f') return;\n            if (currentTempFormat === 'c') {\n                TempTextsArr.forEach(tempText => {\n                    let tempTextNum = Number(tempText.textContent);\n                    tempTextNum = (tempTextNum * 9 / 5) + 32;\n                    tempText.textContent = tempTextNum.toFixed(1);\n                    currentTempFormat = 'f';\n                })\n            }\n        } else if (sliderBtn.checked === false) {\n            cTempHeaderText.style.color = '#04E762';\n            fTempHeaderText.style.color = '#BFC6C9';\n            TempTextsArr.forEach(tempText => tempText.style.color = '#04E762');\n            if (currentTempFormat === 'c') return;\n            if (currentTempFormat === 'f') {\n                TempTextsArr.forEach(tempText => {\n                    let tempTextNum = Number(tempText.textContent);\n                    tempTextNum = (tempTextNum - 32) * 5 / 9;\n                    tempText.textContent = tempTextNum.toFixed(1);\n                    currentTempFormat = 'c';\n                })\n            }\n        }\n    }\n})()\n\n//# sourceURL=webpack://top-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/renderWeatherData.js":
/*!**********************************!*\
  !*** ./src/renderWeatherData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderWeatherData\": () => (/* binding */ renderWeatherData)\n/* harmony export */ });\nasync function renderWeatherData(cb, location) {\n  let weatherData = await cb(location);\n  renderCurrentDayWeather(weatherData.processedTodayDataObj);\n  renderWeatherForecast(\n    weatherData.processedSixDayForecastObj.processedSixDayForecastArr\n  );\n}\nlet currentDayMaxTemp = document.querySelector(\".currentday-maxtemp\");\nlet currentDayMinTemp = document.querySelector(\".currentday-mintemp\");\nlet currentDayTemp = document.querySelector(\".currentday-temp\");\nlet currentDayFeelsLike = document.querySelector(\".currentday-feels\");\nlet currentLocation = document.querySelector(\".currentday-location\");\nlet currentWeatherImg = document.querySelector(\".currentday-weatherimg\");\nlet currentWeatherTxt = document.querySelector(\".currentday-weathertext\");\n\nfunction renderCurrentDayWeather(currentDayObj) {\n  currentDayMaxTemp.textContent = currentDayObj.currentMaxTemp;\n  currentDayMinTemp.textContent = currentDayObj.currentMinTemp;\n  currentDayTemp.textContent = currentDayObj.currentTemp;\n  currentDayFeelsLike.textContent = currentDayObj.feelsLikeTemp;\n  currentLocation.textContent = currentDayObj.locationName;\n  currentWeatherImg.src = getWeatherImg(currentDayObj.iconCode);\n  currentWeatherTxt.textContent = currentDayObj.currentWeatherDescription;\n}\n\nfunction renderWeatherForecast(weatherForecastArr) {\n  let forecastDisplayArea = document.querySelector(\".displayarea-forecast\");\n  forecastDisplayArea.textContent = \"\";\n  weatherForecastArr.forEach((weatherForecastDay) => {\n    const forecastDayContainer = document.createElement(\"div\");\n    forecastDayContainer.classList.add(\"forecastday-weather\");\n    const forecastDayWeatherImg = document.createElement(\"img\");\n    forecastDayWeatherImg.classList.add(\"forecastday-weatherimg\");\n    forecastDayContainer.appendChild(forecastDayWeatherImg);\n    const forecastDayWeatherDescription = document.createElement(\"p\");\n    forecastDayWeatherDescription.classList.add(\n      \"forecastday-weatherdescription\"\n    );\n    forecastDayContainer.appendChild(forecastDayWeatherDescription);\n    const forecastDayTempContainer = document.createElement(\"div\");\n    forecastDayTempContainer.classList.add(\"forecastday-temperature\");\n    forecastDayTempContainer.classList.add(\"flex\");\n    forecastDayContainer.appendChild(forecastDayTempContainer);\n    const forecastDayMaxTemp = document.createElement(\"p\");\n    forecastDayMaxTemp.classList.add(\"forecastday-maxtemp\");\n    forecastDayMaxTemp.classList.add(\"temp-text\");\n    forecastDayMaxTemp.style.color = \"#04E762\";\n    forecastDayTempContainer.appendChild(forecastDayMaxTemp);\n    const forecastDayMinTemp = document.createElement(\"p\");\n    forecastDayMinTemp.classList.add(\"forecastday-mintemp\");\n    forecastDayMinTemp.classList.add(\"temp-text\");\n    forecastDayMinTemp.style.color = \"#04E762\";\n    forecastDayTempContainer.appendChild(forecastDayMinTemp);\n    forecastDisplayArea.appendChild(forecastDayContainer);\n\n    forecastDayWeatherImg.src = getWeatherImg(weatherForecastDay.iconCode);\n    forecastDayWeatherDescription.textContent =\n      weatherForecastDay.dayWeatherDescription;\n    forecastDayMaxTemp.textContent = weatherForecastDay.dayMaxTemp;\n    forecastDayMinTemp.textContent = weatherForecastDay.dayMinTemp;\n  });\n}\n\nfunction getWeatherImg(weatherIcon) {\n  let weatherImgUrl = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;\n  return weatherImgUrl;\n}\n\n\n\n\n//# sourceURL=webpack://top-weather-app/./src/renderWeatherData.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeatherData(queryLocation) {\n  let rawTodayWeatherData = await fetch(\n    `http://api.openweathermap.org/data/2.5/weather?q=${queryLocation}&appid=29112d9d44d0009fdd0e9aa6b008cdee`,\n    { type: \"cors\" }\n  );\n  let rawTodayDataObj = await rawTodayWeatherData.json();\n  let processedTodayDataObj = {\n    currentMaxTemp: (rawTodayDataObj.main.temp_max - 273.15).toFixed(1),\n    currentMinTemp: (rawTodayDataObj.main.temp_min - 273.15).toFixed(1),\n    currentTemp: (rawTodayDataObj.main.temp - 273.15).toFixed(1),\n    feelsLikeTemp: (rawTodayDataObj.main.feels_like - 273.15).toFixed(1),\n    locationName: rawTodayDataObj.name,\n    currentWeatherDescription: rawTodayDataObj.weather[0].description,\n    iconCode: rawTodayDataObj.weather[0].icon,\n  };\n\n  let processedSixDayForecastObj = await getForecastWeatherData(\n    Number(rawTodayDataObj.coord.lat),\n    Number(rawTodayDataObj.coord.lon)\n  );\n  return { processedTodayDataObj, processedSixDayForecastObj };\n}\nasync function getForecastWeatherData(currentCityLat, currentCityLon) {\n  let rawForecastWeatherData = await fetch(\n    `https://api.openweathermap.org/data/2.5/onecall?lat=${currentCityLat}&lon=${currentCityLon}&exclude=hourly,minutely&appid=29112d9d44d0009fdd0e9aa6b008cdee`,\n    { type: \"cors\" }\n  );\n  let rawForecastDataObj = await rawForecastWeatherData.json();\n  rawForecastDataObj.daily.shift();\n  rawForecastDataObj.daily.shift();\n  let rawSixDayForecastArr = rawForecastDataObj.daily;\n  let processedSixDayForecastArr = [];\n  rawSixDayForecastArr.forEach((day) => {\n    let forecastDay = {\n      dayMaxTemp: (day.temp.max - 273.15).toFixed(1),\n      dayMinTemp: (day.temp.min - 273.15).toFixed(1),\n      dayWeatherDescription: day.weather[0].description,\n      iconCode: day.weather[0].icon,\n    };\n    processedSixDayForecastArr.push(forecastDay);\n  });\n  console.log(rawForecastDataObj);\n  return { processedSixDayForecastArr };\n}\n\n\n\n\n//# sourceURL=webpack://top-weather-app/./src/weatherData.js?");

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9318b55d6c8f02eed889.png\";\n\n//# sourceURL=webpack://top-weather-app/./src/logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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