webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '100%',\n      zIndex: 1\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\n\nvar trans = function trans(x, y) {\n  return \"translate3d(\".concat(x / 2, \"px,\").concat(y / 2, \"px,0)\");\n};\n\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"])({\n    n: scrolled === true ? 1 : 0\n  }),\n      n = _useSpring.n;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) == +140 ? true : false);\n    }, 500);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []); // const startSpring = useCallback(() => {\n  //   api.start({\n  //     y: !scrolled ? '0px' : '100%',\n  //     scale: !scrolled ? 0.9 : 1,\n  //     bg: !scrolled ? '#000000' : '#00000030',\n  //   })\n  // }, [scrolled])\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_4__[\"a\"].div, {\n    className: classes.root,\n    style: {// background: o.to({ range: [0, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 1)'] }),\n      // transform: o\n      //             .to((y: any) => `translateY(${y}px)`)\n      //             .to((o: any) => `scale(o)`),\n    } // scrollTop={scroll}\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_2___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 69,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 69,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 66,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"i0g2sH3wDrQZnGxQ0O0gyIZEDc0=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_4__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInpJbmRleCIsImJveENvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b25zIiwibWFyZ2luUmlnaHQiLCJ0cmFucyIsIngiLCJ5IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VTcHJpbmciLCJuIiwidXNlRWZmZWN0IiwiaWQiLCJzZXRJbnRlcnZhbCIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG9FQUFVLENBQUMsVUFBQUMsS0FBSztBQUFBLFNBQUs7QUFDckNDLFFBQUksRUFBRTtBQUNKQyxhQUFPLEVBQUUsUUFETDtBQUVKQyxXQUFLLEVBQUUsTUFGSDtBQUdKQyxxQkFBZSxFQUFFLFdBSGI7QUFHMEI7QUFDOUJDLFlBQU0sRUFBRSxzQkFKSjtBQUtKQyxjQUFRLEVBQUUsT0FMTjtBQU1KQyxTQUFHLEVBQUUsQ0FORDtBQU1JQyxVQUFJLEVBQUUsQ0FOVjtBQU9KQyxXQUFLLEVBQUUsTUFQSDtBQVFKQyxZQUFNLEVBQUU7QUFSSixLQUQrQjtBQVdyQ0MsZ0JBQVksRUFBRTtBQUNaQyxhQUFPLEVBQUcsTUFERTtBQUVaQyxtQkFBYSxFQUFFLEtBRkg7QUFHWkMsb0JBQWMsRUFBRTtBQUhKLEtBWHVCO0FBZ0JyQ0MsV0FBTyxFQUFFO0FBQ1As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O0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBd0JELENBN0NNOztHQUFNaUIsUztVQUNLdEIsUyxFQUdGNEIsc0Q7OztLQUpITixTIiwiZmlsZSI6Ii4vaW1wb3J0cy91cHBlci1tZW51LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcEJhciwgQm94LCBCdXR0b24sIEdyaWQsIEljb25CdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcbmltcG9ydCB7IGRlZmF1bHQgYXMgR2l0SHViIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0dpdEh1Yic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGEsIHVzZVNwcmluZyB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDMwJywgLy9kYXJrZW4oY29yZVRoZW1lPy5wYWxldHRlPy5iYWNrZ3JvdW5kPy5kZWZhdWx0LCAwLjMpLFxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjQwJyxcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB6SW5kZXg6IDEsXG4gIH0sXG4gIGJveENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgICcmID4gOm50aC1jaGlsZCgtbisyKSc6IHtcbiAgICAgIG1hcmdpblJpZ2h0OiAnMS41cmVtJyxcbiAgICB9XG4gIH0sXG59KSlcblxuY29uc3QgdHJhbnMgPSAoeCwgeSkgPT4gYHRyYW5zbGF0ZTNkKCR7eCAvIDJ9cHgsJHt5IC8gMn1weCwwKWA7XG5cbmV4cG9ydCBjb25zdCBVcHBlck1lbnUgPSAoe3Njcm9sbENvbnRhaW5lcn06e3Njcm9sbENvbnRhaW5lcjogYW55fSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtzY3JvbGxlZCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IHsgbiB9ID0gdXNlU3ByaW5nKHsgbjogc2Nyb2xsZWQgPT09IHRydWUgPyAxIDogMCB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID09KyAxNDAgPyB0cnVlIDogZmFsc2UpO1xuICAgIH0sIDUwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gIH0sIFtdKVxuICBcbiAgLy8gY29uc3Qgc3RhcnRTcHJpbmcgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gIC8vICAgYXBpLnN0YXJ0KHtcbiAgLy8gICAgIHk6ICFzY3JvbGxlZCA/ICcwcHgnIDogJzEwMCUnLFxuICAvLyAgICAgc2NhbGU6ICFzY3JvbGxlZCA/IDAuOSA6IDEsXG4gIC8vICAgICBiZzogIXNjcm9sbGVkID8gJyMwMDAwMDAnIDogJyMwMDAwMDAzMCcsXG4gIC8vICAgfSlcbiAgLy8gfSwgW3Njcm9sbGVkXSlcblxuICByZXR1cm4gKDxhLmRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IG8udG8oeyByYW5nZTogWzAsIDFdLCBvdXRwdXQ6IFsncmdiYSgwLCAwLCAwLCAwLjE5KScsICdyZ2JhKDAsIDAsIDAsIDEpJ10gfSksXG4gICAgICAgIC8vIHRyYW5zZm9ybTogb1xuICAgICAgICAvLyAgICAgICAgICAgICAudG8oKHk6IGFueSkgPT4gYHRyYW5zbGF0ZVkoJHt5fXB4KWApXG4gICAgICAgIC8vICAgICAgICAgICAgIC50bygobzogYW55KSA9PiBgc2NhbGUobylgKSxcbiAgICAgICAgXG4gICAgICB9fSBcbiAgICAgIC8vIHNjcm9sbFRvcD17c2Nyb2xsfVxuICAgID5cbiAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249J3JvdycganVzdGlmeT0nY2VudGVyJyBhbGlnbkl0ZW1zPSdjZW50ZXInIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs4fSB4bD17Nn0+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e2NsYXNzZXMuYm94Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkRlZXAuRm91bmRhdGlvbjwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbnN9PlxuICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgPkRvY3M8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5UYWxrIHRvIHVzPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbXBvbmVudD17J2EnfSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2RlZXBjYXNlL2RlZXBjYXNlXCI+PEdpdEh1YiBzdHlsZT17e2NvbG9yOiAnI2ZmZid9fS8+PC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L2EuZGl2PlxuICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})