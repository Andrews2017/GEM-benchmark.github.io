webpackHotUpdate_N_E("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar.module.css */ \"./components/navbar.module.css\");\n/* harmony import */ var _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_navbar_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/components/navbar.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n// Module that contains the navigation bar.\n\n\n\n\n\n\n\nvar Navbar = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navbar, _Component);\n\n  var _super = _createSuper(Navbar);\n\n  function Navbar(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navbar);\n\n    _this = _super.call(this, props);\n    _this.addActiveClass = _this.addActiveClass.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.state = {\n      active: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navbar, [{\n    key: \"toggleClass\",\n    value: function toggleClass() {\n      var currentState = this.state.active;\n      this.setState({\n        active: !currentState\n      });\n    }\n  }, {\n    key: \"render\",\n    // export function handleNavbar() {\n    //   //    $(\".nav\").toggleClass(\"mobile-nav\");\n    //   //    $(#mobile-menu).toggleClass(\"is-active\");\n    // }\n    value: function render() {\n      return __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navwrapper,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.gradbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 9\n        }\n      }), __jsx(\"nav\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 9\n        }\n      }, __jsx(\"span\", {\n        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.headingLg + \" \" + _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.accent,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 15\n        }\n      }, \"GEM Benchmark\"))), __jsx(\"div\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.menutoggle,\n        id: \"mobile-menu\",\n        onClick: handleNavbar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }\n      }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__[\"FontAwesomeIcon\"], {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.bar,\n        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__[\"faBars\"],\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 13\n        }\n      })), __jsx(\"ul\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.nav,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }\n      }, __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem + \" \" + _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.pushright,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/tasks/\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 17\n        }\n      }, \"Tasks\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/get_started\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 17\n        }\n      }, \"How To\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 44\n        }\n      }, \"Results\")), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 44\n        }\n      }, \"Paper\")), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/team\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 15\n        }\n      }, __jsx(\"a\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 17\n        }\n      }, \"Team\"))), __jsx(\"li\", {\n        className: _navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.navitem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }\n      }, __jsx(\"a\", {\n        href: \"#\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 44\n        }\n      }, \"Workshop\")))));\n    }\n  }]);\n\n  return Navbar;\n}(react__WEBPACK_IMPORTED_MODULE_6___default.a);\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar); // export function handleNavbar() {\n//   //    $(\".nav\").toggleClass(\"mobile-nav\");\n//   //    $(#mobile-menu).toggleClass(\"is-active\");\n//   }\n//   export default function Nav() {\n//     return (\n//       <div className={styles.navwrapper}>\n//         <div className={styles.gradbar}></div>\n//         <nav className={styles.navbar}>\n//           <span className={utilStyles.headingLg + \" \" + utilStyles.accent}>\n//             <Link href=\"/\">\n//               <a>GEM Benchmark</a>\n//             </Link>\n//           </span>\n//           <div className={styles.menutoggle}\n//             id=\"mobile-menu\"\n//             onClick={handleNavbar}>\n//             <FontAwesomeIcon className={styles.bar} icon={faBars} />\n//           </div>\n//           <ul className={styles.nav}>\n//             <li className={styles.navitem + \" \" + styles.pushright}>\n//               <Link href=\"/tasks/\">\n//                 <a >Tasks</a>\n//               </Link></li>\n//             <li className={styles.navitem}>\n//               <Link href=\"/get_started\">\n//                 <a >How To</a>\n//               </Link></li>\n//             <li className={styles.navitem}><a href=\"#\">Results</a></li>\n//             <li className={styles.navitem}><a href=\"#\">Paper</a></li>\n//             <li className={styles.navitem}>\n//               <Link href=\"/team\">\n//                 <a >Team</a>\n//               </Link></li>\n//             <li className={styles.navitem}><a href=\"#\">Workshop</a></li>\n//           </ul>\n//         </nav>\n//       </div>\n//     )\n//   }\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJwcm9wcyIsImFkZEFjdGl2ZUNsYXNzIiwiYmluZCIsInN0YXRlIiwiYWN0aXZlIiwiY3VycmVudFN0YXRlIiwic2V0U3RhdGUiLCJzdHlsZXMiLCJuYXZ3cmFwcGVyIiwiZ3JhZGJhciIsIm5hdmJhciIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTGciLCJhY2NlbnQiLCJtZW51dG9nZ2xlIiwiaGFuZGxlTmF2YmFyIiwiYmFyIiwiZmFCYXJzIiwibmF2IiwibmF2aXRlbSIsInB1c2hyaWdodCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUlNQSxNOzs7OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQix5R0FBdEI7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFO0FBREcsS0FBYjtBQUhpQjtBQU1sQjs7OztrQ0FDYTtBQUNaLFVBQU1DLFlBQVksR0FBRyxLQUFLRixLQUFMLENBQVdDLE1BQWhDO0FBQ0EsV0FBS0UsUUFBTCxDQUFjO0FBQUVGLGNBQU0sRUFBRSxDQUFDQztBQUFYLE9BQWQ7QUFDRDs7O0FBRUQ7QUFDQTtBQUNBO0FBRUE7NkJBSVM7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBRUUseURBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUssaUJBQVMsRUFBRUQseURBQU0sQ0FBQ0UsT0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLEVBRUU7QUFBSyxpQkFBUyxFQUFFRix5REFBTSxDQUFDRyxNQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBTSxpQkFBUyxFQUFFQywrREFBVSxDQUFDQyxTQUFYLEdBQXVCLEdBQXZCLEdBQTZCRCwrREFBVSxDQUFDRSxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLENBREYsQ0FERixFQU9FO0FBQUssaUJBQVMsRUFBRU4seURBQU0sQ0FBQ08sVUFBdkI7QUFDRSxVQUFFLEVBQUMsYUFETDtBQUVFLGVBQU8sRUFBRUMsWUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBR0UsTUFBQywrRUFBRDtBQUFpQixpQkFBUyxFQUFFUix5REFBTSxDQUFDUyxHQUFuQztBQUF3QyxZQUFJLEVBQUVDLHlFQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FQRixFQVlFO0FBQUksaUJBQVMsRUFBRVYseURBQU0sQ0FBQ1csR0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUksaUJBQVMsRUFBRVgseURBQU0sQ0FBQ1ksT0FBUCxHQUFpQixHQUFqQixHQUF1QloseURBQU0sQ0FBQ2EsU0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixDQURGLENBREYsRUFLRTtBQUFJLGlCQUFTLEVBQUViLHlEQUFNLENBQUNZLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLGNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FERixDQUxGLEVBU0U7QUFBSSxpQkFBUyxFQUFFWix5REFBTSxDQUFDWSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBL0IsQ0FURixFQVVFO0FBQUksaUJBQVMsRUFBRVoseURBQU0sQ0FBQ1ksT0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQS9CLENBVkYsRUFXRTtBQUFJLGlCQUFTLEVBQUVaLHlEQUFNLENBQUNZLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsQ0FERixDQVhGLEVBZUU7QUFBSSxpQkFBUyxFQUFFWix5REFBTSxDQUFDWSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBL0IsQ0FmRixDQVpGLENBRkYsQ0FERjtBQW1DRDs7OztFQXpEa0JFLDRDOztBQTBEcEI7QUFFY3RCLHFFQUFmLEUsQ0FLRTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTW9kdWxlIHRoYXQgY29udGFpbnMgdGhlIG5hdmlnYXRpb24gYmFyLlxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9uYXZiYXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZmFCYXJzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5cblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hZGRBY3RpdmVDbGFzcyA9IHRoaXMuYWRkQWN0aXZlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICB9O1xuICB9XG4gIHRvZ2dsZUNsYXNzKCkge1xuICAgIGNvbnN0IGN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGUuYWN0aXZlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICFjdXJyZW50U3RhdGUgfSk7XG4gIH07XG5cbiAgLy8gZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5hdmJhcigpIHtcbiAgLy8gICAvLyAgICAkKFwiLm5hdlwiKS50b2dnbGVDbGFzcyhcIm1vYmlsZS1uYXZcIik7XG4gIC8vICAgLy8gICAgJCgjbW9iaWxlLW1lbnUpLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuXG4gIC8vIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYWRiYXJ9PjwvZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdMZyArIFwiIFwiICsgdXRpbFN0eWxlcy5hY2NlbnR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGE+R0VNIEJlbmNobWFyazwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV0b2dnbGV9XG4gICAgICAgICAgICBpZD1cIm1vYmlsZS1tZW51XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5hdmJhcn0+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmJhcn0gaWNvbj17ZmFCYXJzfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW0gKyBcIiBcIiArIHN0eWxlcy5wdXNocmlnaHR9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Rhc2tzL1wiPlxuICAgICAgICAgICAgICAgIDxhID5UYXNrczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2V0X3N0YXJ0ZWRcIj5cbiAgICAgICAgICAgICAgICA8YSA+SG93IFRvPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPlJlc3VsdHM8L2E+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPlBhcGVyPC9hPjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhbVwiPlxuICAgICAgICAgICAgICAgIDxhID5UZWFtPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPldvcmtzaG9wPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuXG5cblxuICAvLyBleHBvcnQgZnVuY3Rpb24gaGFuZGxlTmF2YmFyKCkge1xuICAvLyAgIC8vICAgICQoXCIubmF2XCIpLnRvZ2dsZUNsYXNzKFwibW9iaWxlLW5hdlwiKTtcbiAgLy8gICAvLyAgICAkKCNtb2JpbGUtbWVudSkudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG5cbiAgLy8gICB9XG5cblxuXG4gIC8vICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICAvLyAgICAgcmV0dXJuIChcbiAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ3cmFwcGVyfT5cbiAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyYWRiYXJ9PjwvZGl2PlxuICAvLyAgICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cbiAgLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGcgKyBcIiBcIiArIHV0aWxTdHlsZXMuYWNjZW50fT5cbiAgLy8gICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgLy8gICAgICAgICAgICAgICA8YT5HRU0gQmVuY2htYXJrPC9hPlxuICAvLyAgICAgICAgICAgICA8L0xpbms+XG4gIC8vICAgICAgICAgICA8L3NwYW4+XG5cbiAgLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWVudXRvZ2dsZX1cbiAgLy8gICAgICAgICAgICAgaWQ9XCJtb2JpbGUtbWVudVwiXG4gIC8vICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5hdmJhcn0+XG4gIC8vICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuYmFyfSBpY29uPXtmYUJhcnN9IC8+XG4gIC8vICAgICAgICAgICA8L2Rpdj5cbiAgLy8gICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAvLyAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aXRlbSArIFwiIFwiICsgc3R5bGVzLnB1c2hyaWdodH0+XG4gIC8vICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi90YXNrcy9cIj5cbiAgLy8gICAgICAgICAgICAgICAgIDxhID5UYXNrczwvYT5cbiAgLy8gICAgICAgICAgICAgICA8L0xpbms+PC9saT5cbiAgLy8gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAvLyAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZ2V0X3N0YXJ0ZWRcIj5cbiAgLy8gICAgICAgICAgICAgICAgIDxhID5Ib3cgVG88L2E+XG4gIC8vICAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XG4gIC8vICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPlJlc3VsdHM8L2E+PC9saT5cbiAgLy8gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PjxhIGhyZWY9XCIjXCI+UGFwZXI8L2E+PC9saT5cbiAgLy8gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdml0ZW19PlxuICAvLyAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdGVhbVwiPlxuICAvLyAgICAgICAgICAgICAgICAgPGEgPlRlYW08L2E+XG4gIC8vICAgICAgICAgICAgICAgPC9MaW5rPjwvbGk+XG4gIC8vICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpdGVtfT48YSBocmVmPVwiI1wiPldvcmtzaG9wPC9hPjwvbGk+XG4gIC8vICAgICAgICAgICA8L3VsPlxuICAvLyAgICAgICAgIDwvbmF2PlxuICAvLyAgICAgICA8L2Rpdj5cbiAgLy8gICAgIClcbiAgLy8gICB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})