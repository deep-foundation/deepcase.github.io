webpackHotUpdate_N_E("pages/guild",{

/***/ "./imports/guild/deep-guild/typist-effect.tsx":
/*!****************************************************!*\
  !*** ./imports/guild/deep-guild/typist-effect.tsx ***!
  \****************************************************/
/*! exports provided: TypistEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TypistEffect\", function() { return TypistEffect; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/guild/deep-guild/typist-effect.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar TypeWriterEffect = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! react-typewriter-effect */ \"./node_modules/react-typewriter-effect/dist/index.js\", 7)).then(function (m) {\n    return m[\"default\"];\n  });\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-typewriter-effect */ \"./node_modules/react-typewriter-effect/dist/index.js\")];\n    },\n    modules: [\"../imports/guild/deep-guild/typist-effect.tsx -> \" + 'react-typewriter-effect']\n  }\n});\n_c2 = TypeWriterEffect;\nvar TypistEffect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c3 = _s(function (_ref) {\n  _s();\n\n  var text = _ref.text,\n      _ref$textAlign = _ref.textAlign,\n      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign;\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(TypeWriterEffect, {\n    textStyle: {\n      fontFamily: 'Zen Kaku Gothic Antique',\n      color: '#3F3D56',\n      fontWeight: 500,\n      fontSize: '1.5em',\n      textAlign: textAlign\n    },\n    cursorColor: \"#3F3D56\",\n    hideCursorAfterText: true,\n    text: t(text)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 11\n  }, _this);\n}, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c4 = TypistEffect;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"TypeWriterEffect$dynamic\");\n$RefreshReg$(_c2, \"TypeWriterEffect\");\n$RefreshReg$(_c3, \"TypistEffect$React.memo\");\n$RefreshReg$(_c4, \"TypistEffect\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9ndWlsZC9kZWVwLWd1aWxkL3R5cGlzdC1lZmZlY3QudHN4PzRiM2MiXSwibmFtZXMiOlsiVHlwZVdyaXRlckVmZmVjdCIsImR5bmFtaWMiLCJ0aGVuIiwibSIsInNzciIsIlR5cGlzdEVmZmVjdCIsIlJlYWN0IiwibWVtbyIsInRleHQiLCJ0ZXh0QWxpZ24iLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJmb250RmFtaWx5IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGdCQUFxQixHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwwS0FBa0NDLElBQWxDLENBQXVDLFVBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLFdBQUw7QUFBQSxHQUF4QyxDQUFOO0FBQUEsQ0FBRCxFQUErRDtBQUFFQyxLQUFHLEVBQUUsS0FBUDtBQUFBO0FBQUE7QUFBQSxrQ0FBakQscUZBQWlEO0FBQUE7QUFBQSxvRUFBakQseUJBQWlEO0FBQUE7QUFBQSxDQUEvRCxDQUFyQztNQUFNSixnQjtBQUdDLElBQU1LLFlBQVksZ0JBQUdDLDRDQUFLLENBQUNDLElBQU4sVUFBVyxnQkFNakM7QUFBQTs7QUFBQSxNQUxKQyxJQUtJLFFBTEpBLElBS0k7QUFBQSw0QkFKSkMsU0FJSTtBQUFBLE1BSkpBLFNBSUksK0JBSlEsTUFJUjs7QUFBQSx3QkFDVUMsb0VBQWMsRUFEeEI7QUFBQSxNQUNJQyxDQURKLG1CQUNJQSxDQURKOztBQUdKLHNCQUFRLHFFQUFDLGdCQUFEO0FBQ04sYUFBUyxFQUFFO0FBQ1RDLGdCQUFVLEVBQUUseUJBREg7QUFFVEMsV0FBSyxFQUFFLFNBRkU7QUFHVEMsZ0JBQVUsRUFBRSxHQUhIO0FBSVRDLGNBQVEsRUFBRSxPQUpEO0FBS1ROLGVBQVMsRUFBRUE7QUFMRixLQURMO0FBUU4sZUFBVyxFQUFDLFNBUk47QUFTTix1QkFBbUIsRUFBRSxJQVRmO0FBVU4sUUFBSSxFQUFFRSxDQUFDLENBQUNILElBQUQ7QUFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFZRCxDQXJCMkI7QUFBQSxVQU9aRSw0REFQWTtBQUFBLEdBQXJCO01BQU1MLFkiLCJmaWxlIjoiLi9pbXBvcnRzL2d1aWxkL2RlZXAtZ3VpbGQvdHlwaXN0LWVmZmVjdC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcblxuY29uc3QgVHlwZVdyaXRlckVmZmVjdDogYW55ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LXR5cGV3cml0ZXItZWZmZWN0JykudGhlbihtID0+IG0uZGVmYXVsdCksIHsgc3NyOiBmYWxzZSB9KTtcblxuXG5leHBvcnQgY29uc3QgVHlwaXN0RWZmZWN0ID0gUmVhY3QubWVtbygoe1xuICB0ZXh0LFxuICB0ZXh0QWxpZ24gPSAnbGVmdCcsXG59OntcbiAgdGV4dDogc3RyaW5nO1xuICB0ZXh0QWxpZ24/OiBhbnk7XG59KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICByZXR1cm4gKDxUeXBlV3JpdGVyRWZmZWN0XG4gICAgdGV4dFN0eWxlPXt7XG4gICAgICBmb250RmFtaWx5OiAnWmVuIEtha3UgR290aGljIEFudGlxdWUnLFxuICAgICAgY29sb3I6ICcjM0YzRDU2JyxcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGZvbnRTaXplOiAnMS41ZW0nLFxuICAgICAgdGV4dEFsaWduOiB0ZXh0QWxpZ24sXG4gICAgfX1cbiAgICBjdXJzb3JDb2xvcj1cIiMzRjNENTZcIlxuICAgIGhpZGVDdXJzb3JBZnRlclRleHQ9e3RydWV9XG4gICAgdGV4dD17dCh0ZXh0KX1cbiAgLz4pXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/guild/deep-guild/typist-effect.tsx\n");

/***/ })

})