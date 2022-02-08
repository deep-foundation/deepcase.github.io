webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/crew-card.tsx":
/*!*******************************!*\
  !*** ./imports/crew-card.tsx ***!
  \*******************************/
/*! exports provided: CrewCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CrewCard\", function() { return CrewCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/crew-card.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar useStyles = Object(_framework__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    containerCrewItem: {\n      width: '100%',\n      height: '100%',\n      position: 'relative',\n      transition: 'all 2s ease-in-out',\n      '& img': {\n        transition: 'all 1.2s ease-in-out',\n        transform: 'scale(1.05)'\n      },\n      '& [data-id=\"containerImage\"]': {\n        mixBlendMode: 'unset'\n      },\n      '&:hover': {\n        transition: 'all 2s ease-in-out',\n        '& img': {\n          transition: 'all 1.2s ease-in-out',\n          transform: 'scale(0.95)'\n        },\n        '& [data-id=\"containerImage\"]': {\n          mixBlendMode: 'difference'\n        }\n      }\n    },\n    containerImage: {\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      background: 'transparent',\n      overflow: 'hidden',\n      boxSizing: 'border-box',\n      boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',\n      borderRadius: '50%',\n      width: ' calc(200px + 0.5vmax)',\n      height: ' calc(200px + 0.5vmax)',\n      display: 'flex',\n      alignItems: 'self-start',\n      margin: '0 auto'\n    },\n    filterText: {\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      width: '100%',\n      height: '100%',\n      opacity: 0,\n      transition: 'all 1s ease-out',\n      '&:hover': {\n        opacity: 1\n      }\n    }\n  };\n});\nvar CrewCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var src = _ref.src,\n      alt = _ref.alt,\n      name = _ref.name,\n      role = _ref.role;\n  var classes = useStyles();\n  var rootRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"GravityCard\"], {\n    paperComponent: \"div\",\n    setRef: rootRef,\n    PaperProps: {\n      elevation: 0\n    },\n    zm: 1.3,\n    className: classes.containerCrewItem,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        position: 'relative'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        \"data-id\": \"containerImage\",\n        className: classes.containerImage,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: src,\n          alt: alt,\n          width: \"100%\",\n          height: \"auto\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        \"data-id\": \"containerImage\",\n        className: classes.containerImage,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: src,\n          alt: alt,\n          width: \"100%\",\n          height: \"auto\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.filterText,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n          variant: \"body1\",\n          children: name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 9\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n          variant: \"caption\",\n          children: role\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 73,\n    columnNumber: 11\n  }, _this);\n}, \"kMMLbI+AKKpMifTmpg4EkQl5EMo=\", false, function () {\n  return [useStyles];\n}));\n_c2 = CrewCard;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"CrewCard$React.memo\");\n$RefreshReg$(_c2, \"CrewCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9jcmV3LWNhcmQudHN4P2M0MzkiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiY29udGFpbmVyQ3Jld0l0ZW0iLCJ3aWR0aCIsImhlaWdodCIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsIm1peEJsZW5kTW9kZSIsImNvbnRhaW5lckltYWdlIiwidG9wIiwibGVmdCIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsImJveFNpemluZyIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwiZmlsdGVyVGV4dCIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsIm9wYWNpdHkiLCJDcmV3Q2FyZCIsIlJlYWN0IiwibWVtbyIsInNyYyIsImFsdCIsIm5hbWUiLCJyb2xlIiwiY2xhc3NlcyIsInJvb3RSZWYiLCJ1c2VSZWYiLCJlbGV2YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyw2REFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxxQkFBaUIsRUFBRTtBQUNqQkMsV0FBSyxFQUFFLE1BRFU7QUFFakJDLFlBQU0sRUFBRSxNQUZTO0FBR2pCQyxjQUFRLEVBQUUsVUFITztBQUlqQkMsZ0JBQVUsRUFBRSxvQkFKSztBQUtqQixlQUFTO0FBQ1BBLGtCQUFVLEVBQUUsc0JBREw7QUFFUEMsaUJBQVMsRUFBRTtBQUZKLE9BTFE7QUFTakIsc0NBQWdDO0FBQzlCQyxvQkFBWSxFQUFFO0FBRGdCLE9BVGY7QUFZakIsaUJBQVc7QUFDVEYsa0JBQVUsRUFBRSxvQkFESDtBQUVULGlCQUFTO0FBQ1BBLG9CQUFVLEVBQUUsc0JBREw7QUFFUEMsbUJBQVMsRUFBRTtBQUZKLFNBRkE7QUFNVCx3Q0FBZ0M7QUFDOUJDLHNCQUFZLEVB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RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFETTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFlRCxDQTdCdUI7QUFBQSxVQVdOL0IsU0FYTTtBQUFBLEdBQWpCO01BQU15QixRIiwiZmlsZSI6Ii4vaW1wb3J0cy9jcmV3LWNhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBtYWtlU3R5bGVzLCBUeXBvZ3JhcGh5LCBHcmF2aXR5Q2FyZCB9IGZyb20gJy4vZnJhbWV3b3JrJztcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgY29udGFpbmVyQ3Jld0l0ZW06IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMnMgZWFzZS1pbi1vdXQnLFxuICAgICcmIGltZyc6IHtcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMS4ycyBlYXNlLWluLW91dCcsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjA1KScsXG4gICAgfSxcbiAgICAnJiBbZGF0YS1pZD1cImNvbnRhaW5lckltYWdlXCJdJzoge1xuICAgICAgbWl4QmxlbmRNb2RlOiAndW5zZXQnLFxuICAgIH0sXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDJzIGVhc2UtaW4tb3V0JyxcbiAgICAgICcmIGltZyc6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAxLjJzIGVhc2UtaW4tb3V0JyxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC45NSknLFxuICAgICAgfSxcbiAgICAgICcmIFtkYXRhLWlkPVwiY29udGFpbmVySW1hZ2VcIl0nOiB7XG4gICAgICAgIG1peEJsZW5kTW9kZTogJ2RpZmZlcmVuY2UnLFxuICAgICAgfSxcbiAgICB9XG4gIH0sXG4gIGNvbnRhaW5lckltYWdlOiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLCBsZWZ0OiAwLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsIFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBib3hTaGFkb3c6ICcwIDAgMXB4IDFweCAjMzkzZDQwLCAwIDAgMXB4IDJweCByZ2IoMCAwIDAgLyAxNiUpLCAwIDAgMnB4IDNweCByZ2IoMCAwIDAgLyAxNCUpLCAwIDAgNHB4IDVweCByZ2IoMCAwIDAgLyAxMiUpJyxcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgIHdpZHRoOiAnIGNhbGMoMjAwcHggKyAwLjV2bWF4KScsXG4gICAgaGVpZ2h0OiAnIGNhbGMoMjAwcHggKyAwLjV2bWF4KScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdzZWxmLXN0YXJ0JyxcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxuICB9LFxuICBmaWx0ZXJUZXh0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zaXRpb246ICdhbGwgMXMgZWFzZS1vdXQnLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICB9XG4gIH1cbn0pKVxuXG5leHBvcnQgY29uc3QgQ3Jld0NhcmQgPSBSZWFjdC5tZW1vKCh7XG4gIHNyYyxcbiAgYWx0LFxuICBuYW1lLFxuICByb2xlLFxufTp7XG4gIHNyYzogc3RyaW5nO1xuICBhbHQ/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZT86IHN0cmluZzsgXG59KSA9PiB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3Qgcm9vdFJlZiA9IHVzZVJlZigpO1xuXG4gIHJldHVybiAoPEdyYXZpdHlDYXJkIHBhcGVyQ29tcG9uZW50PSdkaXYnIHNldFJlZj17cm9vdFJlZn0gUGFwZXJQcm9wcz17eyBlbGV2YXRpb246IDAgfX0gem09ezEuM30gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lckNyZXdJdGVtfT5cbiAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgIDxCb3ggZGF0YS1pZD1cImNvbnRhaW5lckltYWdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lckltYWdlfT5cbiAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PXthbHR9IHdpZHRoPScxMDAlJyBoZWlnaHQ9J2F1dG8nIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggZGF0YS1pZD1cImNvbnRhaW5lckltYWdlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lckltYWdlfT5cbiAgICAgICAgPGltZyBzcmM9e3NyY30gYWx0PXthbHR9IHdpZHRoPScxMDAlJyBoZWlnaHQ9J2F1dG8nIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpbHRlclRleHR9PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MSc+e25hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PSdjYXB0aW9uJz57cm9sZX08L1R5cG9ncmFwaHk+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8L0dyYXZpdHlDYXJkPlxuICApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/crew-card.tsx\n");

/***/ })

})