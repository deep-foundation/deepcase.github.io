webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      backgroundColor: '#00000030',\n      //darken(coreTheme?.palette?.background?.default, 0.3),\n      border: '1px dashed #ffffff40',\n      position: 'fixed',\n      top: 0,\n      left: 0,\n      width: '100%',\n      zIndex: 1\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\n\nvar trans = function trans(x, y) {\n  return \"translate3d(\".concat(x / 2, \"px,\").concat(y / 2, \"px,0)\");\n};\n\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])(function () {\n    return {\n      from: {\n        o: 0,\n        background: 'rgba(0, 0, 0, 0.19)',\n        y: 56,\n        scale: 1,\n        scroll: 0\n      },\n      o: 1,\n      y: 0,\n      background: 'rgba(0, 0, 0, 1)',\n      scale: 0.90,\n      config: {\n        mass: 10,\n        tension: 550,\n        friction: 140\n      }\n    };\n  }),\n      _useSpring2 = Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSpring, 1),\n      _useSpring2$ = _useSpring2[0],\n      scroll = _useSpring2$.scroll,\n      o = _useSpring2$.o,\n      background = _useSpring2$.background,\n      y = _useSpring2$.y,\n      scale = _useSpring2$.scale;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr;\n\n      setScroll((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > 140 ? true : false);\n    }, 500);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []); // const startSpring = useCallback(() => {\n  //   api.start({\n  //     y: !scrolled ? '0px' : '100%',\n  //     scale: !scrolled ? 0.9 : 1,\n  //     bg: !scrolled ? '#000000' : '#00000030',\n  //   })\n  // }, [scrolled])\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n    className: classes.root,\n    style: {// background: o.to({ range: [0, 1], output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 1)'] }),\n      // transform: o\n      //             .to((y: any) => `translateY(${y}px)`)\n      //             .to((o: any) => `scale(o)`),\n    } // scrollTop={scroll}\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n      container: true,\n      direction: \"row\",\n      justify: \"center\",\n      alignItems: \"center\",\n      item: true,\n      xs: 12,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n        item: true,\n        xs: 12,\n        lg: 8,\n        xl: 6,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n          className: classes.boxContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Typography\"], {\n            variant: \"h1\",\n            children: \"Deep.Foundation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: classes.buttons,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              variant: \"text\",\n              children: \"Docs\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n              variant: \"text\",\n              children: \"Talk to us\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n              component: 'a',\n              href: \"https://github.com/deepcase/deepcase\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                style: {\n                  color: '#fff'\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 82,\n                columnNumber: 87\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"n5LDGxVXh/UKaB9/2lnfEuDKCIA=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJwYWRkaW5nIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJ3aWR0aCIsInpJbmRleCIsImJveENvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b25zIiwibWFyZ2luUmlnaHQiLCJ0cmFucyIsIngiLCJ5IiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVNwcmluZyIsImZyb20iLCJvIiwiYmFja2dyb3VuZCIsInNjYWxlIiwic2Nyb2xsIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNjcm9sbFRvcCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxvRUFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxRQUFJLEVBQUU7QUFDSkMsYUFBTyxFQUFFLFFBREw7QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSkMscUJBQWUsRUFBRSxXQUhiO0FBRzBCO0FBQzlCQyxZQUFNLEVBQUUsc0JBSko7QUFLSkMsY0FBUSxFQUFFLE9BTE47QUFNSkMsU0FBRyxFQUFFLENBTkQ7QUFNSUMsVUFBSSxFQUFFLENBTlY7QUFPSkMsV0FBSyxFQUFFLE1BUEg7QUFRSkMsWUFBTSxFQUFFO0FBUkosS0FEK0I7QUFXckNDLGdCQUFZLEVBQUU7QUFDWkMsYUFBTyxFQUFHLE1B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QUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUVXLE9BQU8sQ0FBQ1AsT0FBeEI7QUFBQSxvQ0FDRSxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRSxxRUFBQyx3REFBRDtBQUFRLHFCQUFPLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkYsZUFHRSxxRUFBQyw0REFBRDtBQUFZLHVCQUFTLEVBQUUsR0FBdkI7QUFBNEIsa0JBQUksRUFBQyxzQ0FBakM7QUFBQSxxQ0FBd0UscUVBQUMsZ0VBQUQ7QUFBUSxxQkFBSyxFQUFFO0FBQUNaLHVCQUFLLEVBQUU7QUFBUjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUF3QkQsQ0ExRE07O0dBQU1pQixTO1VBQ0t0QixTLEVBQzhCeUIsc0Q7OztLQUZuQ0gsUyIsImZpbGUiOiIuL2ltcG9ydHMvdXBwZXItbWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBCYXIsIEJveCwgQnV0dG9uLCBHcmlkLCBJY29uQnV0dG9uLCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIEdpdEh1YiB9IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9HaXRIdWInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhLCB1c2VTcHJpbmcgfSBmcm9tICdyZWFjdC1zcHJpbmcnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBwYWRkaW5nOiAnMXJlbSAwJyxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAzMCcsIC8vZGFya2VuKGNvcmVUaGVtZT8ucGFsZXR0ZT8uYmFja2dyb3VuZD8uZGVmYXVsdCwgMC4zKSxcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkICNmZmZmZmY0MCcsXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgdG9wOiAwLCBsZWZ0OiAwLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgekluZGV4OiAxLFxuICB9LFxuICBib3hDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiAgJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIH0sXG4gIGJ1dHRvbnM6IHtcbiAgICAnJiA+IDpudGgtY2hpbGQoLW4rMiknOiB7XG4gICAgICBtYXJnaW5SaWdodDogJzEuNXJlbScsXG4gICAgfVxuICB9LFxufSkpXG5cbmNvbnN0IHRyYW5zID0gKHgsIHkpID0+IGB0cmFuc2xhdGUzZCgke3ggLyAyfXB4LCR7eSAvIDJ9cHgsMClgO1xuXG5leHBvcnQgY29uc3QgVXBwZXJNZW51ID0gKHtzY3JvbGxDb250YWluZXJ9OntzY3JvbGxDb250YWluZXI6IGFueX0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbeyBzY3JvbGwsIG8sIGJhY2tncm91bmQsIHksIHNjYWxlIH1dID0gdXNlU3ByaW5nKCgpID0+ICh7IFxuICAgIGZyb206IHsgXG4gICAgICBvOiAwLFxuICAgICAgYmFja2dyb3VuZDogJ3JnYmEoMCwgMCwgMCwgMC4xOSknLCBcbiAgICAgIHk6IDU2LCBcbiAgICAgIHNjYWxlOiAxLCBcbiAgICAgIHNjcm9sbDogMCxcbiAgICB9LFxuICAgIG86IDEsXG4gICAgeTogMCxcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgwLCAwLCAwLCAxKScsIFxuICAgIHNjYWxlOiAwLjkwLCBcbiAgICBjb25maWc6IHsgbWFzczogMTAsIHRlbnNpb246IDU1MCwgZnJpY3Rpb246IDE0MCB9LFxuICB9KSk7XG4gIFxuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0U2Nyb2xsKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gMTQwID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICB9LCA1MDApXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpO1xuICB9LCBbXSlcbiAgXG4gIC8vIGNvbnN0IHN0YXJ0U3ByaW5nID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAvLyAgIGFwaS5zdGFydCh7XG4gIC8vICAgICB5OiAhc2Nyb2xsZWQgPyAnMHB4JyA6ICcxMDAlJyxcbiAgLy8gICAgIHNjYWxlOiAhc2Nyb2xsZWQgPyAwLjkgOiAxLFxuICAvLyAgICAgYmc6ICFzY3JvbGxlZCA/ICcjMDAwMDAwJyA6ICcjMDAwMDAwMzAnLFxuICAvLyAgIH0pXG4gIC8vIH0sIFtzY3JvbGxlZF0pXG5cbiAgcmV0dXJuICg8YS5kaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBvLnRvKHsgcmFuZ2U6IFswLCAxXSwgb3V0cHV0OiBbJ3JnYmEoMCwgMCwgMCwgMC4xOSknLCAncmdiYSgwLCAwLCAwLCAxKSddIH0pLFxuICAgICAgICAvLyB0cmFuc2Zvcm06IG9cbiAgICAgICAgLy8gICAgICAgICAgICAgLnRvKCh5OiBhbnkpID0+IGB0cmFuc2xhdGVZKCR7eX1weClgKVxuICAgICAgICAvLyAgICAgICAgICAgICAudG8oKG86IGFueSkgPT4gYHNjYWxlKG8pYCksXG4gICAgICAgIFxuICAgICAgfX0gXG4gICAgICAvLyBzY3JvbGxUb3A9e3Njcm9sbH1cbiAgICA+XG4gICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPSdyb3cnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ25JdGVtcz0nY2VudGVyJyBpdGVtIHhzPXsxMn0+XG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OH0geGw9ezZ9PlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtjbGFzc2VzLmJveENvbnRhaW5lcn0+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5EZWVwLkZvdW5kYXRpb248L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiID5Eb2NzPC9CdXR0b24+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiA+VGFsayB0byB1czwvQnV0dG9uPlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eydhJ30gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZWVwY2FzZS9kZWVwY2FzZVwiPjxHaXRIdWIgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9hLmRpdj5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})