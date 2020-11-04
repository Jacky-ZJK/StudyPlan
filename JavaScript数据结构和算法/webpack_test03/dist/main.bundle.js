(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/common/js/common.js":
/*!*********************************!*\
  !*** ./src/common/js/common.js ***!
  \*********************************/
/*! exports provided: add */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\nfunction add(a, b) {\n  return a + b;\n}\n\n//# sourceURL=webpack:///./src/common/js/common.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _common_js_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/js/common */ \"./src/common/js/common.js\");\n\nvar res = Object(_common_js_common__WEBPACK_IMPORTED_MODULE_0__[\"add\"])(1, 2);\n\nvar mul = function mul(a, b) {\n  return a * b;\n};\n\nvar ret = mul(1, 2);\nconsole.log(res);\nconsole.log(ret);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

},[["./src/main.js","runtime~main"]]]);