/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/HWs/HW1.js":
/*!************************!*\
  !*** ./src/HWs/HW1.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar apples = 15.678;\nvar oranges = 123.965;\nvar bananas = 90.2345;\nvar max = Math.max(apples, oranges, bananas);\n/* harmony default export */ __webpack_exports__[\"default\"] = (max);\n\n//# sourceURL=webpack:///./src/HWs/HW1.js?");

/***/ }),

/***/ "./src/HWs/HW3.js":
/*!************************!*\
  !*** ./src/HWs/HW3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (n) {\n  var k = n[0];\n\n  for (var i = 1; i < n.length - 1; i++) {\n    if (n[i] > k) {\n      k = n[i];\n    } else {\n      continue;\n    }\n  }\n\n  return k;\n});\n\n//# sourceURL=webpack:///./src/HWs/HW3.js?");

/***/ }),

/***/ "./src/HWs/HW4.js":
/*!************************!*\
  !*** ./src/HWs/HW4.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(n); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar students = ['Саша', 'Игорь', 'Лена', 'Ира', 'Алексей', 'Светлана'];\nvar studentsGirl = ['Лена', 'Ира', 'Светлана'];\nvar studentsBoy = ['Саша', 'Игорь', 'Алексей'];\nvar themes = ['Дифференциальные уравнения', 'Теория автоматов', 'Алгоритмы и структуры данных'];\nvar marks = [4, 5, 5, 3, 4, 5];\n\nfunction getPairs() {\n  var result = [];\n\n  for (var i = 0; i < studentsGirl.length; i++) {\n    result = [].concat(_toConsumableArray(result), [[studentsGirl[i], studentsBoy[i]]]);\n  }\n\n  return result;\n}\n\nvar pairs = getPairs();\n/* harmony default export */ __webpack_exports__[\"default\"] = (pairs);\n\n//# sourceURL=webpack:///./src/HWs/HW4.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HWs_HW3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HWs/HW3 */ \"./src/HWs/HW3.js\");\n/* harmony import */ var _HWs_HW1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HWs/HW1 */ \"./src/HWs/HW1.js\");\n/* harmony import */ var _HWs_HW4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HWs/HW4 */ \"./src/HWs/HW4.js\");\n\n\n\nconsole.log(Object(_HWs_HW3__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('1234564897'));\nconsole.log(_HWs_HW1__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconsole.log(_HWs_HW4__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });