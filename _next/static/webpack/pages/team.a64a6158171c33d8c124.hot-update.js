webpackHotUpdate_N_E("pages/team",{

/***/ "./pages/team.js":
/*!***********************!*\
  !*** ./pages/team.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ \"./components/layout.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team.module.css */ \"./pages/team.module.css\");\n/* harmony import */ var _team_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_team_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\nvar _jsxFileName = \"/usr/local/google/home/gehrmann/Documents/GEM-benchmark.github.io/web/pages/team.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // import Contact from \"../components/contact\";\n\n\n\n\n // import { faDribble } from '@fortawesome/free-solid-svg-icons'\n\n\n\nfunction ContactList(props) {\n  var _this = this;\n\n  console.log(\"asdf\");\n  console.log(props);\n  return __jsx(\"section\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cards,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, props.contacts.map(function (c, idx) {\n    return __jsx(Contact, {\n      key: idx,\n      name: c.name,\n      position: c.position,\n      organization: c.organization,\n      website: c.website,\n      twitter: c.twitter,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 71\n      }\n    });\n  }));\n}\n\n_c = ContactList;\n\nfunction Contact(props) {\n  // Optional Website link.\n  var website_tag = \"\";\n\n  if (props.website != undefined) {\n    website_tag = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: props.website,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faDribbble\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 28\n      }\n    })));\n  } // Optional Twitter tag.\n\n\n  var twitter_tag = \"\";\n\n  if (props.twitter != undefined) {\n    var twitter_href = \"https://twitter.com/\" + props.twitter;\n    twitter_tag = __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: twitter_href,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }\n    }, __jsx(\"a\", {\n      target: \"_blank\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }\n    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__[\"FontAwesomeIcon\"], {\n      icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_6__[\"faTwitter\"],\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 28\n      }\n    })));\n  }\n\n  return __jsx(\"article\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.card,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }\n  }, __jsx(\"h3\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.name,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, props.name), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, props.position), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }\n  }, props.organization), website_tag, \" \", twitter_tag);\n}\n\n_c2 = Contact;\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var teamData = _ref.teamData;\n  console.log(teamData);\n  return __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    home: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, \"GEM Team\")), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.headingXl,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Team\"), __jsx(\"p\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, \"GEM is a community-driven effort with the goal to improve how progress in natural language generation is measured. It would not be possible without a large group of collaborators to take on challenging tasks. This page acts as a directory of our amazing contributors:\"), __jsx(\"div\", {\n    className: _team_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.centered,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }, __jsx(ContactList, {\n    contacts: teamData.teamMembers,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 11\n    }\n  }))));\n}\n_c3 = Home;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"ContactList\");\n$RefreshReg$(_c2, \"Contact\");\n$RefreshReg$(_c3, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGVhbS5qcz82MzI5Il0sIm5hbWVzIjpbIkNvbnRhY3RMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY2FyZHMiLCJjb250YWN0cyIsIm1hcCIsImMiLCJpZHgiLCJuYW1lIiwicG9zaXRpb24iLCJvcmdhbml6YXRpb24iLCJ3ZWJzaXRlIiwidHdpdHRlciIsIkNvbnRhY3QiLCJ3ZWJzaXRlX3RhZyIsInVuZGVmaW5lZCIsImZhRHJpYmJibGUiLCJ0d2l0dGVyX3RhZyIsInR3aXR0ZXJfaHJlZiIsImZhVHdpdHRlciIsImNhcmQiLCJ0aXRsZSIsIkhvbWUiLCJ0ZWFtRGF0YSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nWGwiLCJkZXNjcmlwdGlvbiIsImNlbnRlcmVkIiwidGVhbU1lbWJlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQzFCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FDRTtBQUFTLGFBQVMsRUFBRUcsdURBQU0sQ0FBQ0MsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ0osS0FBSyxDQUFDSyxRQUFOLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsQ0FBRCxFQUFJQyxHQUFKO0FBQUEsV0FBWSxNQUFDLE9BQUQ7QUFDaEUsU0FBRyxFQUFFQSxHQUQyRDtBQUVoRSxVQUFJLEVBQUVELENBQUMsQ0FBQ0UsSUFGd0Q7QUFFbEQsY0FBUSxFQUFFRixDQUFDLENBQUNHLFFBRnNDO0FBR2hFLGtCQUFZLEVBQUVILENBQUMsQ0FBQ0ksWUFIZ0Q7QUFHbEMsYUFBTyxFQUFFSixDQUFDLENBQUNLLE9BSHVCO0FBSWhFLGFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxXQUFEO0FBQWEsWUFBUSxFQUFFSixRQUFRLENBQUNLLFdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVZGLENBSkYsQ0FERjtBQXFCRDtNQXZCdUJOLEkiLCJmaWxlIjoiLi9wYWdlcy90ZWFtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcbi8vIGltcG9ydCBDb250YWN0IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90ZWFtLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldFRlYW1EYXRhIH0gZnJvbSBcIi4uL2xpYi90ZWFtXCI7XG5pbXBvcnQgeyBmYURyaWJiYmxlLCBmYVR3aXR0ZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuLy8gaW1wb3J0IHsgZmFEcmliYmxlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5mdW5jdGlvbiBDb250YWN0TGlzdChwcm9wcykge1xuICBjb25zb2xlLmxvZyhcImFzZGZcIik7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+e3Byb3BzLmNvbnRhY3RzLm1hcCgoYywgaWR4KSA9PiA8Q29udGFjdFxuICAgICAga2V5PXtpZHh9XG4gICAgICBuYW1lPXtjLm5hbWV9IHBvc2l0aW9uPXtjLnBvc2l0aW9ufVxuICAgICAgb3JnYW5pemF0aW9uPXtjLm9yZ2FuaXphdGlvbn0gd2Vic2l0ZT17Yy53ZWJzaXRlfVxuICAgICAgdHdpdHRlcj17Yy50d2l0dGVyfS8+KX08L3NlY3Rpb24+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvbnRhY3QocHJvcHMpIHtcbiAgLy8gT3B0aW9uYWwgV2Vic2l0ZSBsaW5rLlxuICB2YXIgd2Vic2l0ZV90YWcgPSBcIlwiO1xuICBpZiAocHJvcHMud2Vic2l0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICB3ZWJzaXRlX3RhZyA9IChcbiAgICAgIDxMaW5rIGhyZWY9e3Byb3BzLndlYnNpdGV9PlxuICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRHJpYmJibGV9IC8+PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICAvLyBPcHRpb25hbCBUd2l0dGVyIHRhZy5cbiAgdmFyIHR3aXR0ZXJfdGFnID0gXCJcIjtcbiAgaWYgKHByb3BzLnR3aXR0ZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHR3aXR0ZXJfaHJlZiA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9cIiArIHByb3BzLnR3aXR0ZXJcbiAgICB0d2l0dGVyX3RhZyA9IChcbiAgICAgIDxMaW5rIGhyZWY9e3R3aXR0ZXJfaHJlZn0+XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPjxGb250QXdlc29tZUljb24gaWNvbj17ZmFUd2l0dGVyfSAvPjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57cHJvcHMubmFtZX08L2gzPlxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9wcy5wb3NpdGlvbn08L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e3Byb3BzLm9yZ2FuaXphdGlvbn08L3A+XG4gICAgICB7d2Vic2l0ZV90YWd9IHt0d2l0dGVyX3RhZ31cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0ZWFtRGF0YSB9KSB7XG4gIGNvbnNvbGUubG9nKHRlYW1EYXRhKVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R0VNIFRlYW08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0+XG4gICAgICAgICAgVGVhbVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIEdFTSBpcyBhIGNvbW11bml0eS1kcml2ZW4gZWZmb3J0IHdpdGggdGhlIGdvYWwgdG8gaW1wcm92ZSBob3cgcHJvZ3Jlc3MgaW5cbiAgICAgICAgICBuYXR1cmFsIGxhbmd1YWdlIGdlbmVyYXRpb24gaXMgbWVhc3VyZWQuIEl0IHdvdWxkIG5vdCBiZSBwb3NzaWJsZSB3aXRob3V0XG4gICAgICAgICAgYSBsYXJnZSBncm91cCBvZiBjb2xsYWJvcmF0b3JzIHRvIHRha2Ugb24gY2hhbGxlbmdpbmcgdGFza3MuIFRoaXMgcGFnZVxuICAgICAgICAgIGFjdHMgYXMgYSBkaXJlY3Rvcnkgb2Ygb3VyIGFtYXppbmcgY29udHJpYnV0b3JzOlxuICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcmVkfT5cbiAgICAgICAgICA8Q29udGFjdExpc3QgY29udGFjdHM9e3RlYW1EYXRhLnRlYW1NZW1iZXJzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB0ZWFtRGF0YSA9IGF3YWl0IGdldFRlYW1EYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHRlYW1EYXRhLFxuICAgIH0sXG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/team.js\n");

/***/ })

})