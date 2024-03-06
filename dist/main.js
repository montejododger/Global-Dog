/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/navbar */ \"./src/scripts/navbar.js\");\n/* harmony import */ var _scripts_main_mainLeft__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main/mainLeft */ \"./src/scripts/main/mainLeft.js\");\n// IMPORT components to here to load\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_scripts_navbar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n  (0,_scripts_main_mainLeft__WEBPACK_IMPORTED_MODULE_1__.leftMain)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7O0FBRTBDO0FBQ1M7QUFFbkRFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREgsdURBQU0sQ0FBQyxDQUFDO0VBQ1JDLGdFQUFRLENBQUMsQ0FBQztBQUNkLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbC1kb2dzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSU1QT1JUIGNvbXBvbmVudHMgdG8gaGVyZSB0byBsb2FkXG5cbmltcG9ydCB7IG5hdkJhciB9IGZyb20gXCIuL3NjcmlwdHMvbmF2YmFyXCI7XG5pbXBvcnQgeyBsZWZ0TWFpbiB9IGZyb20gXCIuL3NjcmlwdHMvbWFpbi9tYWluTGVmdFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbmF2QmFyKCk7XG4gICAgbGVmdE1haW4oKTtcbn0pO1xuIl0sIm5hbWVzIjpbIm5hdkJhciIsImxlZnRNYWluIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/main/mainLeft.js":
/*!**************************************!*\
  !*** ./src/scripts/main/mainLeft.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   leftMain: function() { return /* binding */ leftMain; }\n/* harmony export */ });\nconst mainLeftContainer = document.querySelector(\".main-left-container\");\nconst leftTitle = () => {\n  const div = document.createElement(`div`);\n  const h3 = document.createElement(`h3`);\n  div.classList.add(`main-left-title-container`);\n  h3.classList.add(`main-left-title`);\n  h3.innerText = `Welcome to Global Dawgs!`;\n  div.append(h3);\n  mainLeftContainer.appendChild(div);\n};\nconst leftMain = () => {\n  leftTitle();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluL21haW5MZWZ0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxpQkFBaUIsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsc0JBQXNCLENBQUM7QUFFeEUsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLEtBQU07RUFDcEIsTUFBTUMsR0FBRyxHQUFHSCxRQUFRLENBQUNJLGFBQWEsQ0FBRSxLQUFJLENBQUM7RUFDekMsTUFBTUMsRUFBRSxHQUFHTCxRQUFRLENBQUNJLGFBQWEsQ0FBRSxJQUFHLENBQUM7RUFHdkNELEdBQUcsQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUUsMkJBQTBCLENBQUM7RUFDOUNGLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUUsaUJBQWdCLENBQUM7RUFDbkNGLEVBQUUsQ0FBQ0csU0FBUyxHQUFJLDBCQUF5QjtFQUd6Q0wsR0FBRyxDQUFDTSxNQUFNLENBQUNKLEVBQUUsQ0FBQztFQUNkTixpQkFBaUIsQ0FBQ1csV0FBVyxDQUFDUCxHQUFHLENBQUM7QUFHdEMsQ0FBQztBQU1NLE1BQU1RLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0VBQzFCVCxTQUFTLENBQUMsQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWwtZG9ncy8uL3NyYy9zY3JpcHRzL21haW4vbWFpbkxlZnQuanM/ZTUwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtYWluTGVmdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1sZWZ0LWNvbnRhaW5lclwiKVxuXG5jb25zdCBsZWZ0VGl0bGUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgZGl2YClcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgzYClcblxuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoYG1haW4tbGVmdC10aXRsZS1jb250YWluZXJgKVxuICAgIGgzLmNsYXNzTGlzdC5hZGQoYG1haW4tbGVmdC10aXRsZWApXG4gICAgaDMuaW5uZXJUZXh0ID0gYFdlbGNvbWUgdG8gR2xvYmFsIERhd2dzIWBcblxuXG4gICAgZGl2LmFwcGVuZChoMylcbiAgICBtYWluTGVmdENvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpXG5cblxufVxuXG5cblxuXG5cbmV4cG9ydCBjb25zdCBsZWZ0TWFpbiA9ICgpID0+IHtcbiAgICBsZWZ0VGl0bGUoKVxufVxuIl0sIm5hbWVzIjpbIm1haW5MZWZ0Q29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGVmdFRpdGxlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImgzIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJsZWZ0TWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/main/mainLeft.js\n");

/***/ }),

/***/ "./src/scripts/navbar.js":
/*!*******************************!*\
  !*** ./src/scripts/navbar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navBar: function() { return /* binding */ navBar; }\n/* harmony export */ });\nconst navBarLeft = document.querySelector(`.navbar-left`);\nconst navBarRight = document.querySelector(`.navbar-right`);\nconst socialLinks = [{\n  url: `https://www.linkedin.com/in/matthewbmontejo/`,\n  iconClass: `fa-linkedin`\n}, {\n  url: `https://github.com/montejododger`,\n  iconClass: `fa-github-square`\n}];\nconst createNavTitle = () => {\n  const h3 = document.createElement(\"h3\");\n  h3.classList.add(`navbar-title`);\n  h3.innerText = `Global Dawgs`;\n  navBarLeft.appendChild(h3);\n};\nconst createNavLink = (url, iconClass) => {\n  const a = document.createElement(`a`);\n  const i = document.createElement(`i`);\n  i.classList.add(`fab`, iconClass);\n  a.href = url;\n  a.target = `_blank`;\n  a.classList.add(`nav-links`);\n  a.appendChild(i);\n  navBarRight.appendChild(a);\n};\nconst navBar = () => {\n  createNavTitle();\n  socialLinks.forEach(link => createNavLink(link.url, link.iconClass));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9uYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUUsY0FBYSxDQUFDO0FBQ3pELE1BQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUUsZUFBYyxDQUFDO0FBRTNELE1BQU1FLFdBQVcsR0FBRyxDQUNoQjtFQUNJQyxHQUFHLEVBQUcsOENBQTZDO0VBQ25EQyxTQUFTLEVBQUc7QUFDaEIsQ0FBQyxFQUNEO0VBQ0lELEdBQUcsRUFBRyxrQ0FBaUM7RUFDdkNDLFNBQVMsRUFBRztBQUNoQixDQUFDLENBQ0o7QUFFRCxNQUFNQyxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUN6QixNQUFNQyxFQUFFLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBYSxDQUFDLElBQUksQ0FBQztFQUV2Q0QsRUFBRSxDQUFDRSxTQUFTLENBQUNDLEdBQUcsQ0FBRSxjQUFhLENBQUM7RUFDaENILEVBQUUsQ0FBQ0ksU0FBUyxHQUFJLGNBQWE7RUFFN0JaLFVBQVUsQ0FBQ2EsV0FBVyxDQUFDTCxFQUFFLENBQUM7QUFDOUIsQ0FBQztBQUVELE1BQU1NLGFBQWEsR0FBR0EsQ0FBQ1QsR0FBRyxFQUFFQyxTQUFTLEtBQUs7RUFDdEMsTUFBTVMsQ0FBQyxHQUFHZCxRQUFRLENBQUNRLGFBQWEsQ0FBRSxHQUFFLENBQUM7RUFDckMsTUFBTU8sQ0FBQyxHQUFHZixRQUFRLENBQUNRLGFBQWEsQ0FBRSxHQUFFLENBQUM7RUFFckNPLENBQUMsQ0FBQ04sU0FBUyxDQUFDQyxHQUFHLENBQUUsS0FBSSxFQUFFTCxTQUFTLENBQUM7RUFFakNTLENBQUMsQ0FBQ0UsSUFBSSxHQUFHWixHQUFHO0VBQ1pVLENBQUMsQ0FBQ0csTUFBTSxHQUFJLFFBQU87RUFDbkJILENBQUMsQ0FBQ0wsU0FBUyxDQUFDQyxHQUFHLENBQUUsV0FBVSxDQUFDO0VBRTVCSSxDQUFDLENBQUNGLFdBQVcsQ0FBQ0csQ0FBQyxDQUFDO0VBQ2hCYixXQUFXLENBQUNVLFdBQVcsQ0FBQ0UsQ0FBQyxDQUFDO0FBQzlCLENBQUM7QUFFTSxNQUFNSSxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUN4QlosY0FBYyxDQUFDLENBQUM7RUFDaEJILFdBQVcsQ0FBQ2dCLE9BQU8sQ0FBRUMsSUFBSSxJQUFLUCxhQUFhLENBQUNPLElBQUksQ0FBQ2hCLEdBQUcsRUFBRWdCLElBQUksQ0FBQ2YsU0FBUyxDQUFDLENBQUM7QUFDMUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dsb2JhbC1kb2dzLy4vc3JjL3NjcmlwdHMvbmF2YmFyLmpzPzM1NzMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2QmFyTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5uYXZiYXItbGVmdGApO1xuY29uc3QgbmF2QmFyUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubmF2YmFyLXJpZ2h0YCk7XG5cbmNvbnN0IHNvY2lhbExpbmtzID0gW1xuICAgIHtcbiAgICAgICAgdXJsOiBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hdHRoZXdibW9udGVqby9gLFxuICAgICAgICBpY29uQ2xhc3M6IGBmYS1saW5rZWRpbmAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogYGh0dHBzOi8vZ2l0aHViLmNvbS9tb250ZWpvZG9kZ2VyYCxcbiAgICAgICAgaWNvbkNsYXNzOiBgZmEtZ2l0aHViLXNxdWFyZWAsXG4gICAgfSxcbl07XG5cbmNvbnN0IGNyZWF0ZU5hdlRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gICAgaDMuY2xhc3NMaXN0LmFkZChgbmF2YmFyLXRpdGxlYCk7XG4gICAgaDMuaW5uZXJUZXh0ID0gYEdsb2JhbCBEYXdnc2A7XG5cbiAgICBuYXZCYXJMZWZ0LmFwcGVuZENoaWxkKGgzKTtcbn07XG5cbmNvbnN0IGNyZWF0ZU5hdkxpbmsgPSAodXJsLCBpY29uQ2xhc3MpID0+IHtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYWApO1xuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBpYCk7XG5cbiAgICBpLmNsYXNzTGlzdC5hZGQoYGZhYmAsIGljb25DbGFzcyk7XG5cbiAgICBhLmhyZWYgPSB1cmw7XG4gICAgYS50YXJnZXQgPSBgX2JsYW5rYDtcbiAgICBhLmNsYXNzTGlzdC5hZGQoYG5hdi1saW5rc2ApO1xuXG4gICAgYS5hcHBlbmRDaGlsZChpKTtcbiAgICBuYXZCYXJSaWdodC5hcHBlbmRDaGlsZChhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBuYXZCYXIgPSAoKSA9PiB7XG4gICAgY3JlYXRlTmF2VGl0bGUoKTtcbiAgICBzb2NpYWxMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiBjcmVhdGVOYXZMaW5rKGxpbmsudXJsLCBsaW5rLmljb25DbGFzcykpO1xufTtcbiJdLCJuYW1lcyI6WyJuYXZCYXJMZWZ0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2QmFyUmlnaHQiLCJzb2NpYWxMaW5rcyIsInVybCIsImljb25DbGFzcyIsImNyZWF0ZU5hdlRpdGxlIiwiaDMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVOYXZMaW5rIiwiYSIsImkiLCJocmVmIiwidGFyZ2V0IiwibmF2QmFyIiwiZm9yRWFjaCIsImxpbmsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/navbar.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG9iYWwtZG9ncy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;