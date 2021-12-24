webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar scale = function scale(n) {\n  return \"scaleY(\".concat(n, \")\");\n};\n\nvar trans = function trans() {\n  return \"transitionY(\".concat(3, \"rem)\");\n};\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '100%',\n      zIndex: 1\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 136 ? true : false);\n    }, 10);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n; // useScroll(({ xy: [, y] }) => api.start({ width: (y / height) * 100 + '%' }), { target: window })\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n    className: classes.root,\n    style: {\n      transformOrigin: 'top',\n      background: n.to({\n        range: [0, 0.35, 0.50, 0.65, 1],\n        output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 1)']\n      }),\n      transform: n.to({\n        range: [0, 0.5, 1],\n        //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n        output: [1, 0.8, 0.5] //[1, 0.97, 0.95, 0.93, 0.90, 0.87, 0.85, 0.87, 0.90],\n\n      }).to(scale).to(trans)\n    } // scrollTop={scroll}\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 67,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"rlToER9aSqQFF11PrP3wGvP107w=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInNjYWxlIiwibiIsInRyYW5zIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsInBhZGRpbmciLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiekluZGV4IiwiYm94Q29udGFpbmVyIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImJ1dHRvbnMiLCJtYXJnaW5SaWdodCIsIlVwcGVyTWVudSIsInNjcm9sbENvbnRhaW5lciIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsInNjcm9sbGVkIiwic2V0U2Nyb2xsIiwidXNlRWZmZWN0IiwiaWQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJjbGVhckludGVydmFsIiwidXNlU3ByaW5nIiwidHJhbnNmb3JtT3JpZ2luIiwiYmFja2dyb3VuZCIsInRvIiwicmFuZ2UiLCJvdXRwdXQiLCJ0cmFuc2Zvcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxDQUFEO0FBQUEsMEJBQWlCQSxDQUFqQjtBQUFBLENBQWQ7O0FBQ0EsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSwrQkFBcUIsQ0FBckI7QUFBQSxDQUFkOztBQUVBLElBQU1DLFNBQVMsR0FBR0Msb0VBQVUsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsU0FBSztBQUNyQ0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRSxRQURMO0FBRUpDLFdBQUssRUFBRSxNQUZIO0FBR0pDLHFCQUFlLEVBQUUsV0FIYjtBQUcwQjtBQUM5QkMsWUFBTSxFQUFFLHNCQUpKO0FBS0pDLGNBQVEsRUFBRSxPQUxOO0FB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QTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBRVEsT0FBTyxDQUFDSixPQUF4QjtBQUFBLG9DQUNFLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFLHFFQUFDLHdEQUFEO0FBQVEscUJBQU8sRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQUdFLHFFQUFDLDREQUFEO0FBQVksdUJBQVMsRUFBRSxHQUF2QjtBQUE0QixrQkFBSSxFQUFDLHNDQUFqQztBQUFBLHFDQUF3RSxxRUFBQyxnRUFBRDtBQUFRLHFCQUFLLEVBQUU7QUFBQ1osdUJBQUssRUFBRTtBQUFSO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZJO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUjtBQTZCRCxDQTVDTTs7R0FBTWMsUztVQUNLbkIsUyxFQVdGK0Isc0Q7OztLQVpIWixTIiwiZmlsZSI6Ii4vaW1wb3J0cy91cHBlci1tZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGEsIHVzZVNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tIFwicmVhY3QtdXNlLWdlc3R1cmVcIjtcblxuY29uc3Qgc2NhbGUgPSAobikgPT4gYHNjYWxlWSgke259KWA7XG5jb25zdCB0cmFucyA9ICgpID0+IGB0cmFuc2l0aW9uWSgkezN9cmVtKWA7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDMwJywgLy9kYXJrZW4oY29yZVRoZW1lPy5wYWxldHRlPy5iYWNrZ3JvdW5kPy5kZWZhdWx0LCAwLjMpLFxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjQwJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG4gIGJveENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgICcmID4gOm50aC1jaGlsZCgtbisyKSc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnMS41cmVtJyxcbiAgICB9XG4gIH0sXG59KSlcblxuZXhwb3J0IGNvbnN0IFVwcGVyTWVudSA9ICh7c2Nyb2xsQ29udGFpbmVyfTp7c2Nyb2xsQ29udGFpbmVyOiBhbnl9KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW3Njcm9sbGVkLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRTY3JvbGwoc2Nyb2xsQ29udGFpbmVyPy5jdXJyZW50Py5zY3JvbGxUb3AgPiAxMzYgPyB0cnVlIDogZmFsc2UpO1xuICAgIH0sIDEwKVxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHsgbiB9ID0gdXNlU3ByaW5nKHsgbjogc2Nyb2xsZWQgPT09IHRydWUgPyAxIDogMCB9KTtcbiAgLy8gdXNlU2Nyb2xsKCh7IHh5OiBbLCB5XSB9KSA9PiBhcGkuc3RhcnQoeyB3aWR0aDogKHkgLyBoZWlnaHQpICogMTAwICsgJyUnIH0pLCB7IHRhcmdldDogd2luZG93IH0pXG5cbiAgcmV0dXJuICg8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICBzdHlsZT17e1xuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBuLnRvKHsgcmFuZ2U6IFswLCAwLjM1LCAwLjUwLCAwLjY1LCAxXSwgb3V0cHV0OiBbJ3JnYmEoMCwgMCwgMCwgMC4xOSknLCAncmdiYSgwLCAwLCAwLCAwLjM3KScsICdyZ2JhKDAsIDAsIDAsIDAuNTgpJywgJ3JnYmEoMCwgMCwgMCwgMC43OSknLCAncmdiYSgwLCAwLCAwLCAxKSddIH0pLFxuICAgICAgICB0cmFuc2Zvcm06IG5cbiAgICAgICAgICAgICAgICAgICAgLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICByYW5nZTogWzAsIDAuNSwgMV0sIC8vWzEsIDAuOTcsIDAuOTUsIDAuOTMsIDAuOTAsIDAuODcsIDAuODUsIDAuODcsIDAuOTBdLFxuICAgICAgICAgICAgICAgICAgICAgIG91dHB1dDogWzEsIDAuOCwgMC41XSAvL1sxLCAwLjk3LCAwLjk1LCAwLjkzLCAwLjkwLCAwLjg3LCAwLjg1LCAwLjg3LCAwLjkwXSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRvKHNjYWxlKVxuICAgICAgICAgICAgICAgICAgICAudG8odHJhbnMpLFxuICAgICAgICBcbiAgICAgIH19IFxuICAgICAgLy8gc2Nyb2xsVG9wPXtzY3JvbGx9XG4gICAgPlxuICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgaXRlbSB4cz17MTJ9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezh9IHhsPXs2fT5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hDb250YWluZXJ9PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+RGVlcC5Gb3VuZGF0aW9uPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uc30+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+RG9jczwvQnV0dG9uPlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPlRhbGsgdG8gdXM8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29tcG9uZW50PXsnYSd9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGVlcGNhc2UvZGVlcGNhc2VcIj48R2l0SHViIHN0eWxlPXt7Y29sb3I6ICcjZmZmJ319Lz48L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9HcmlkPlxuICAgIDwvYS5kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})