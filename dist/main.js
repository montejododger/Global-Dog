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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/navbar */ \"./src/scripts/navbar.js\");\n// IMPORT components to here to load\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  (0,_scripts_navbar__WEBPACK_IMPORTED_MODULE_0__.navBar)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFMEM7QUFHMUNDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoREYsdURBQU0sQ0FBQyxDQUFDO0FBQ1osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsLWRvZ3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJTVBPUlQgY29tcG9uZW50cyB0byBoZXJlIHRvIGxvYWRcblxuaW1wb3J0IHsgbmF2QmFyIH0gZnJvbSBcIi4vc2NyaXB0cy9uYXZiYXJcIjtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgbmF2QmFyKClcbn0pO1xuIl0sIm5hbWVzIjpbIm5hdkJhciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/navbar.js":
/*!*******************************!*\
  !*** ./src/scripts/navbar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navBar: function() { return /* binding */ navBar; }\n/* harmony export */ });\nconst navBarLeft = document.querySelector(\".navbar-left\");\nconst navBarRight = document.querySelector(\".navbar-right\");\nconst navTitle = () => {\n  const h3 = document.createElement(\"h3\");\n  h3.classList.add(\"navbar-title\");\n  h3.innerText = `Global Dawgs`;\n  navBarLeft.append(h3);\n};\nconst createNavLink = (url, iconClass) => {\n  const a = document.createElement(\"a\");\n  const i = document.createElement(\"i\");\n  i.classList.add(\"fab\", iconClass);\n  a.href = url;\n  a.target = \"_blank\";\n  a.classList.add(\"nav-links\");\n  a.append(i);\n  navBarRight.append(a);\n};\nconst socialLinks = [{\n  url: \"https://www.linkedin.com/in/matthewbmontejo/\",\n  iconClass: \"fa-linkedin\"\n}, {\n  url: \"https://github.com/montejododger\",\n  iconClass: \"fa-github-square\"\n}];\nconst navBar = () => {\n  navTitle();\n  socialLinks.forEach(link => createNavLink(link.url, link.iconClass));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9uYXZiYXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsY0FBYyxDQUFDO0FBQ3pELE1BQU1DLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBRTNELE1BQU1FLFFBQVEsR0FBR0EsQ0FBQSxLQUFNO0VBQ25CLE1BQU1DLEVBQUUsR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBRXZDRCxFQUFFLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztFQUNoQ0gsRUFBRSxDQUFDSSxTQUFTLEdBQUksY0FBYTtFQUU3QlQsVUFBVSxDQUFDVSxNQUFNLENBQUNMLEVBQUUsQ0FBQztBQUN6QixDQUFDO0FBRUQsTUFBTU0sYUFBYSxHQUFHQSxDQUFDQyxHQUFHLEVBQUVDLFNBQVMsS0FBSztFQUN0QyxNQUFNQyxDQUFDLEdBQUdiLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyQyxNQUFNUyxDQUFDLEdBQUdkLFFBQVEsQ0FBQ0ssYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUVyQ1MsQ0FBQyxDQUFDUixTQUFTLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVLLFNBQVMsQ0FBQztFQUVqQ0MsQ0FBQyxDQUFDRSxJQUFJLEdBQUdKLEdBQUc7RUFDWkUsQ0FBQyxDQUFDRyxNQUFNLEdBQUcsUUFBUTtFQUNuQkgsQ0FBQyxDQUFDUCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxXQUFXLENBQUM7RUFFNUJNLENBQUMsQ0FBQ0osTUFBTSxDQUFDSyxDQUFDLENBQUM7RUFDWFosV0FBVyxDQUFDTyxNQUFNLENBQUNJLENBQUMsQ0FBQztBQUN6QixDQUFDO0FBRUQsTUFBTUksV0FBVyxHQUFHLENBQ2hCO0VBQ0lOLEdBQUcsRUFBRSw4Q0FBOEM7RUFDbkRDLFNBQVMsRUFBRTtBQUNmLENBQUMsRUFDRDtFQUNJRCxHQUFHLEVBQUUsa0NBQWtDO0VBQ3ZDQyxTQUFTLEVBQUU7QUFDZixDQUFDLENBQ0o7QUFFTSxNQUFNTSxNQUFNLEdBQUdBLENBQUEsS0FBTTtFQUN4QmYsUUFBUSxDQUFDLENBQUM7RUFDVmMsV0FBVyxDQUFDRSxPQUFPLENBQUVDLElBQUksSUFBS1YsYUFBYSxDQUFDVSxJQUFJLENBQUNULEdBQUcsRUFBRVMsSUFBSSxDQUFDUixTQUFTLENBQUMsQ0FBQztBQUMxRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvYmFsLWRvZ3MvLi9zcmMvc2NyaXB0cy9uYXZiYXIuanM/MzU3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuYXZCYXJMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItbGVmdFwiKTtcbmNvbnN0IG5hdkJhclJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItcmlnaHRcIik7XG5cbmNvbnN0IG5hdlRpdGxlID0gKCkgPT4ge1xuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXG4gICAgaDMuY2xhc3NMaXN0LmFkZChcIm5hdmJhci10aXRsZVwiKTtcbiAgICBoMy5pbm5lclRleHQgPSBgR2xvYmFsIERhd2dzYFxuXG4gICAgbmF2QmFyTGVmdC5hcHBlbmQoaDMpO1xufTtcblxuY29uc3QgY3JlYXRlTmF2TGluayA9ICh1cmwsIGljb25DbGFzcykgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG5cbiAgICBpLmNsYXNzTGlzdC5hZGQoXCJmYWJcIiwgaWNvbkNsYXNzKTtcblxuICAgIGEuaHJlZiA9IHVybDtcbiAgICBhLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgYS5jbGFzc0xpc3QuYWRkKFwibmF2LWxpbmtzXCIpO1xuXG4gICAgYS5hcHBlbmQoaSk7XG4gICAgbmF2QmFyUmlnaHQuYXBwZW5kKGEpO1xufTtcblxuY29uc3Qgc29jaWFsTGlua3MgPSBbXG4gICAge1xuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL21hdHRoZXdibW9udGVqby9cIixcbiAgICAgICAgaWNvbkNsYXNzOiBcImZhLWxpbmtlZGluXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vbW9udGVqb2RvZGdlclwiLFxuICAgICAgICBpY29uQ2xhc3M6IFwiZmEtZ2l0aHViLXNxdWFyZVwiLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbmF2QmFyID0gKCkgPT4ge1xuICAgIG5hdlRpdGxlKCk7XG4gICAgc29jaWFsTGlua3MuZm9yRWFjaCgobGluaykgPT4gY3JlYXRlTmF2TGluayhsaW5rLnVybCwgbGluay5pY29uQ2xhc3MpKTtcbn07XG4iXSwibmFtZXMiOlsibmF2QmFyTGVmdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5hdkJhclJpZ2h0IiwibmF2VGl0bGUiLCJoMyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lclRleHQiLCJhcHBlbmQiLCJjcmVhdGVOYXZMaW5rIiwidXJsIiwiaWNvbkNsYXNzIiwiYSIsImkiLCJocmVmIiwidGFyZ2V0Iiwic29jaWFsTGlua3MiLCJuYXZCYXIiLCJmb3JFYWNoIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/navbar.js\n");

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