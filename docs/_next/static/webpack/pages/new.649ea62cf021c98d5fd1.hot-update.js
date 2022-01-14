webpackHotUpdate_N_E("pages/new",{

/***/ "./imports/upper-menu.tsx":
/*!********************************!*\
  !*** ./imports/upper-menu.tsx ***!
  \********************************/
/*! exports provided: UpperMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UpperMenu\", function() { return UpperMenu; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/GitHub */ \"./node_modules/@material-ui/icons/GitHub.js\");\n/* harmony import */ var _material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/upper-menu.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar useStyles = Object(_framework__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    container: {\n      width: '100%',\n      position: 'fixed',\n      zIndex: 2\n    },\n    cubeZone: {\n      width: '150vw',\n      height: 'inherit',\n      border: 'none',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      backfaceVisibility: 'hidden',\n      perspective: 0,\n      transformStyle: 'flat',\n      perspectiveOrigin: 'top center',\n      borderTop: '1px dashed #ffffff40',\n      borderBottom: '1px dashed #ffffff40'\n    },\n    root: {\n      padding: '1rem 0',\n      color: '#fff',\n      transformOrigin: 'top',\n      position: 'relative',\n      top: 0,\n      left: 0,\n      width: '100vw',\n      height: 'auto',\n      zIndex: 1\n    },\n    flexContainer: {\n      padding: '0 2rem'\n    },\n    boxContainer: {\n      display: 'flex',\n      flexDirection: 'row',\n      justifyContent: 'space-between'\n    },\n    buttons: {\n      alignSelf: 'center',\n      '& > :nth-child(-n+2)': {\n        marginRight: '1.5rem'\n      }\n    }\n  };\n});\nvar pathLength = 150;\nvar UpperMenu = function UpperMenu(_ref) {\n  _s();\n\n  var scrollContainer = _ref.scrollContainer;\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      scrolled = _useState[0],\n      setScroll = _useState[1];\n\n  var old = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])({\n    scrollTop: 0\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var id = setInterval(function () {\n      var _scrollContainer$curr, _scrollContainer$curr2, _scrollContainer$curr3;\n\n      if ((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr = scrollContainer.current) === null || _scrollContainer$curr === void 0 ? void 0 : _scrollContainer$curr.scrollTop) > old.current.scrollTop) {\n        setScroll(true);\n      } else if ((scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr2 = scrollContainer.current) === null || _scrollContainer$curr2 === void 0 ? void 0 : _scrollContainer$curr2.scrollTop) < old.current.scrollTop) {\n        setScroll(false);\n      }\n\n      old.current.scrollTop = scrollContainer === null || scrollContainer === void 0 ? void 0 : (_scrollContainer$curr3 = scrollContainer.current) === null || _scrollContainer$curr3 === void 0 ? void 0 : _scrollContainer$curr3.scrollTop;\n    }, 100);\n    return function () {\n      return clearInterval(id);\n    };\n  }, []);\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    n: scrolled ? 1 : 0.19,\n    config: {\n      mass: 1.7,\n      tension: 65,\n      friction: 25\n    }\n  }),\n      n = _useSpring.n;\n\n  var transitions = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useTransition\"])(!scrolled, {\n    initial: {\n      transform: \"translateY(0%)\"\n    },\n    enter: {\n      transform: \"translateY(0%)\"\n    },\n    leave: {\n      transform: \"translateY(-100%)\"\n    },\n    reverse: scrolled,\n    expires: false,\n    config: {\n      mass: 1.7,\n      tension: 65,\n      friction: 25\n    }\n  });\n  var fonts = Object(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"])({\n    x: scrolled ? 1 : 0.8,\n    delay: scrolled ? 0 : 600\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classes.container,\n    children: transitions(function (style, item) {\n      return item && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].div, {\n        className: classes.cubeZone,\n        style: _objectSpread({\n          background: n.to({\n            range: [0, 0.35, 0.50, 0.65, 0.85, 1],\n            output: ['rgba(0, 0, 0, 0.19)', 'rgba(0, 0, 0, 0.37)', 'rgba(0, 0, 0, 0.58)', 'rgba(0, 0, 0, 0.79)', 'rgba(0, 0, 0, 89)', 'rgba(0, 0, 0, 1)']\n          })\n        }, style),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.root,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n            container: true,\n            direction: \"row\",\n            justify: \"center\",\n            alignItems: \"center\",\n            item: true,\n            xs: 12,\n            className: classes.flexContainer,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"Grid\"], {\n              item: true,\n              xs: 12,\n              lg: 8,\n              xl: 6,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                className: classes.boxContainer,\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].h1, {\n                    style: {\n                      alignSelf: 'center',\n                      // fontSize: 'calc(42px + 0.3vmax)',\n                      // fontFamily: \"'Comfortaa', 'sans-serif'\",\n                      margin: 0,\n                      transform: fonts.x.to({\n                        range: [0, 1, 0],\n                        output: [1, 0.4, 1]\n                      }).to(function (x) {\n                        return \"scale(\".concat(x, \")\");\n                      })\n                    },\n                    children: \"Deep.Foundation\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 102,\n                    columnNumber: 19\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 101,\n                  columnNumber: 17\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: classes.buttons,\n                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    variant: \"text\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].span, {\n                      style: {\n                        transform: fonts.x.to({\n                          range: [0, 1, 0],\n                          output: [1, 0.5, 1]\n                        }).to(function (x) {\n                          return \"scale(\".concat(x, \")\");\n                        })\n                      },\n                      children: \"Docs\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 117,\n                      columnNumber: 21\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 116,\n                    columnNumber: 19\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n                    variant: \"text\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_5__[\"a\"].span, {\n                      style: {\n                        fontSize: 'calc(12px + 0.3vmax)',\n                        transform: fonts.x.to({\n                          range: [0, 1, 0],\n                          output: [1, 0.5, 1]\n                        }).to(function (x) {\n                          return \"scale(\".concat(x, \")\");\n                        })\n                      },\n                      children: \"Talk to us\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 126,\n                      columnNumber: 21\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 125,\n                    columnNumber: 19\n                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n                    component: 'a',\n                    href: \"https://github.com/deepcase/deepcase\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons_GitHub__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                      style: {\n                        color: '#fff'\n                      }\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 135,\n                      columnNumber: 91\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 135,\n                    columnNumber: 19\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 17\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 100,\n                columnNumber: 15\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 99,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 98,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 46\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 11\n  }, _this);\n};\n\n_s(UpperMenu, \"D748D2crP9YlVfleySSDq0CNh/Q=\", false, function () {\n  return [useStyles, react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useTransition\"], react_spring__WEBPACK_IMPORTED_MODULE_5__[\"useSpring\"]];\n});\n\n_c = UpperMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"UpperMenu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy91cHBlci1tZW51LnRzeD80OWI1Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsImNvbnRhaW5lciIsIndpZHRoIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJjdWJlWm9uZSIsImhlaWdodCIsImJvcmRlciIsInRvcCIsImxlZnQiLCJiYWNrZmFjZVZpc2liaWxpdHkiLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVN0eWxlIiwicGVyc3BlY3RpdmVPcmlnaW4iLCJib3JkZXJUb3AiLCJib3JkZXJCb3R0b20iLCJyb290IiwicGFkZGluZyIsImNvbG9yIiwidHJhbnNmb3JtT3JpZ2luIiwiZmxleENvbnRhaW5lciIsImJveENvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJidXR0b25zIiwiYWxpZ25TZWxmIiwibWFyZ2luUmlnaHQiLCJwYXRoTGVuZ3RoIiwiVXBwZXJNZW51Iiwic2Nyb2xsQ29udGFpbmVyIiwiY2xhc3NlcyIsInVzZVN0YXRlIiwic2Nyb2xsZWQiLCJzZXRTY3JvbGwiLCJvbGQiLCJ1c2VSZWYiLCJzY3JvbGxUb3AiLCJ1c2VFZmZlY3QiLCJpZCIsInNldEludGVydmFsIiwiY3VycmVudCIsImNsZWFySW50ZXJ2YWwiLCJ1c2VTcHJpbmciLCJuIiwiY29uZmlnIiwibWFzcyIsInRlbnNpb24iLCJmcmljdGlvbiIsInRyYW5zaXRpb25zIiwidXNlVHJhbnNpdGlvbiIsImluaXRpYWwiLCJ0cmFuc2Zvcm0iLCJlbnRlciIsImxlYXZlIiwicmV2ZXJzZSIsImV4cGlyZXMiLCJmb250cyIsIngiLCJkZWxheSIsInN0eWxlIiwiaXRlbSIsImJhY2tncm91bmQiLCJ0byIsInJhbmdlIiwib3V0cHV0IiwibWFyZ2luIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7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ZUFvQkUscUVBQUMscURBQUQ7QUFBWSw2QkFBUyxFQUFFLEdBQXZCO0FBQTRCLHdCQUFJLEVBQUMsc0NBQWpDO0FBQUEsMkNBQXdFLHFFQUFDLGdFQUFEO0FBQVEsMkJBQUssRUFBRTtBQUFDeEMsNkJBQUssRUFBRTtBQUFSO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTHFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMUI7QUFBQSxLQUFEO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBc0RELENBMUZNOztHQUFNVyxTO1VBQ0svQixTLEVBZ0JGNkMsc0QsRUFLTU8sMEQsRUFTTlAsc0Q7OztLQS9CSGQsUyIsImZpbGUiOiIuL2ltcG9ydHMvdXBwZXItbWVudS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgR3JpZCwgSWNvbkJ1dHRvbiwgbWFrZVN0eWxlcyB9IGZyb20gXCIuL2ZyYW1ld29ya1wiO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBHaXRIdWIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvR2l0SHViJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGEsIHVzZVNwcmluZywgdXNlVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xuICBjb250YWluZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgIHpJbmRleDogMixcbiAgfSxcbiAgY3ViZVpvbmU6IHtcbiAgICB3aWR0aDogJzE1MHZ3JyxcbiAgICBoZWlnaHQ6ICdpbmhlcml0JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgYmFja2ZhY2VWaXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBwZXJzcGVjdGl2ZTogMCxcbiAgICB0cmFuc2Zvcm1TdHlsZTogJ2ZsYXQnLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiAndG9wIGNlbnRlcicsXG4gICAgYm9yZGVyVG9wOiAnMXB4IGRhc2hlZCAjZmZmZmZmNDAnLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBkYXNoZWQgI2ZmZmZmZjQwJyxcbiAgfSxcbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgekluZGV4OiAxLFxuICB9LFxuICBmbGV4Q29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogJzAgMnJlbScsXG4gIH0sXG4gIGJveENvbnRhaW5lcjoge1xuICAgIGRpc3BsYXk6ICAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgfSxcbiAgYnV0dG9uczoge1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgJyYgPiA6bnRoLWNoaWxkKC1uKzIpJzoge1xuICAgICAgbWFyZ2luUmlnaHQ6ICcxLjVyZW0nLFxuICAgIH1cbiAgfSxcbn0pKVxuXG5jb25zdCBwYXRoTGVuZ3RoID0gMTUwO1xuXG5leHBvcnQgY29uc3QgVXBwZXJNZW51ID0gKHtzY3JvbGxDb250YWluZXJ9OntzY3JvbGxDb250YWluZXI6IGFueX0pID0+IHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbc2Nyb2xsZWQsIHNldFNjcm9sbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9sZCA9IHVzZVJlZih7c2Nyb2xsVG9wOiAwfSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wID4gb2xkLmN1cnJlbnQuc2Nyb2xsVG9wKSB7XG4gICAgICAgIHNldFNjcm9sbCh0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsQ29udGFpbmVyPy5jdXJyZW50Py5zY3JvbGxUb3AgPCBvbGQuY3VycmVudC5zY3JvbGxUb3ApIHtcbiAgICAgICAgc2V0U2Nyb2xsKGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIG9sZC5jdXJyZW50LnNjcm9sbFRvcCA9IHNjcm9sbENvbnRhaW5lcj8uY3VycmVudD8uc2Nyb2xsVG9wO1xuICAgIH0sIDEwMClcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCB7IG4gfSA9IHVzZVNwcmluZyh7IFxuICAgIG46IHNjcm9sbGVkID8gMSA6IDAuMTksXG4gICAgY29uZmlnOiB7IG1hc3M6IDEuNywgdGVuc2lvbjogNjUsIGZyaWN0aW9uOiAyNSB9LFxuICB9KTtcblxuICBjb25zdCB0cmFuc2l0aW9ucyA9IHVzZVRyYW5zaXRpb24oIXNjcm9sbGVkLCB7XG4gICAgaW5pdGlhbDogeyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgwJSlcIiB9LFxuICAgIGVudGVyOiB7IHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKDAlKVwiIH0sXG4gICAgbGVhdmU6IHsgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVkoLTEwMCUpXCIgfSxcbiAgICByZXZlcnNlOiBzY3JvbGxlZCxcbiAgICBleHBpcmVzOiBmYWxzZSxcbiAgICBjb25maWc6IHsgbWFzczogMS43LCB0ZW5zaW9uOiA2NSwgZnJpY3Rpb246IDI1IH0sXG4gIH0pXG5cbiAgY29uc3QgZm9udHMgPSB1c2VTcHJpbmcoeyBcbiAgICB4OiBzY3JvbGxlZCA/IDEgOiAwLjgsXG4gICAgZGVsYXk6IHNjcm9sbGVkID8gMCA6IDYwMCxcbiAgfSk7XG5cbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAge3RyYW5zaXRpb25zKChzdHlsZSwgaXRlbSkgPT4gKGl0ZW0gJiYgPGEuZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jdWJlWm9uZX1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBuLnRvKHsgcmFuZ2U6IFswLCAwLjM1LCAwLjUwLCAwLjY1LCAwLjg1LCAxXSwgb3V0cHV0OiBbJ3JnYmEoMCwgMCwgMCwgMC4xOSknLCAncmdiYSgwLCAwLCAwLCAwLjM3KScsICdyZ2JhKDAsIDAsIDAsIDAuNTgpJywgJ3JnYmEoMCwgMCwgMCwgMC43OSknLCAncmdiYSgwLCAwLCAwLCA4OSknLCAncmdiYSgwLCAwLCAwLCAxKSddIH0pLFxuICAgICAgICAgIC4uLnN0eWxlXG4gICAgICAgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgICA+XG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj0ncm93JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OH0geGw9ezZ9PlxuICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17Y2xhc3Nlcy5ib3hDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICA8YS5oMSBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAvLyBmb250U2l6ZTogJ2NhbGMoNDJweCArIDAuM3ZtYXgpJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9udEZhbWlseTogXCInQ29tZm9ydGFhJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBmb250cy54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMCwgMSwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IFsxLCAwLjQsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHggPT4gYHNjYWxlKCR7eH0pYCksXG4gICAgICAgICAgICAgICAgICAgIH19PkRlZXAuRm91bmRhdGlvbjwvYS5oMT5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zfT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEuc3BhbiBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogZm9udHMueFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmdlOiBbMCwgMSwgMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0OiBbMSwgMC41LCAxXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKHggPT4gYHNjYWxlKCR7eH0pYClcbiAgICAgICAgICAgICAgICAgICAgfX0+RG9jczwvYS5zcGFuPjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICA8YS5zcGFuIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICdjYWxjKDEycHggKyAwLjN2bWF4KScsXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBmb250cy54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50byh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmFuZ2U6IFswLCAxLCAwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQ6IFsxLCAwLjUsIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oeCA9PiBgc2NhbGUoJHt4fSlgKVxuICAgICAgICAgICAgICAgICAgICB9fT5UYWxrIHRvIHVzPC9hLnNwYW4+PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjb21wb25lbnQ9eydhJ30gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9kZWVwY2FzZS9kZWVwY2FzZVwiPjxHaXRIdWIgc3R5bGU9e3tjb2xvcjogJyNmZmYnfX0vPjwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYS5kaXY+KSl9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/upper-menu.tsx\n");

/***/ })

})