webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/iframe.tsx":
/*!****************************!*\
  !*** ./imports/iframe.tsx ***!
  \****************************/
/*! exports provided: IFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IFrame\", function() { return IFrame; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/iframe.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar innerContainer = {\n  overflow: 'hidden',\n  height: '100%',\n  width: '100%',\n  position: 'relative'\n};\nvar x = -1;\nvar y = -1;\n\nif (true) {\n  document.onmousemove = function (event) {\n    x = event.pageX;\n    y = event.pageY;\n  };\n}\n\nvar IFrame = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var title = _ref.title,\n      src = _ref.src,\n      download = _ref.download,\n      styles = _ref.styles,\n      icon = _ref.icon;\n  var frameRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  var refDiv = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n\n  var localCalc = function localCalc(x, y) {\n    var _refDiv$current;\n\n    var box = refDiv === null || refDiv === void 0 ? void 0 : (_refDiv$current = refDiv.current) === null || _refDiv$current === void 0 ? void 0 : _refDiv$current.getBoundingClientRect();\n    return [x - (box.left + box.width / 2), y - (box.top + box.height / 2)];\n  };\n\n  var _useSpring = Object(react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"])(function () {\n    return {\n      xy: [0, 0],\n      config: {\n        mass: 10,\n        tension: 550,\n        friction: 140\n      }\n    };\n  }),\n      _useSpring2 = Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useSpring, 2),\n      spring = _useSpring2[0],\n      set = _useSpring2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var i = setInterval(function () {\n      var _refDiv$current2;\n\n      var box = refDiv === null || refDiv === void 0 ? void 0 : (_refDiv$current2 = refDiv.current) === null || _refDiv$current2 === void 0 ? void 0 : _refDiv$current2.getBoundingClientRect();\n      var left = box.left,\n          top = box.top,\n          right = box.right,\n          bottom = box.bottom;\n\n      if (!(left < x && right > x && top < y && bottom > y)) {\n        set({\n          xy: [0, 0]\n        });\n        frameRef.current({\n          xys: [0, 0, 1]\n        });\n      }\n    }, 1000);\n    return function () {\n      return clearInterval(i);\n    };\n  }, []);\n\n  var _useMediaQuery = Object(_framework__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"])('(max-width: 825px)'),\n      _useMediaQuery2 = Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useMediaQuery, 1),\n      max825 = _useMediaQuery2[0];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_4__[\"Box\"], {\n    ref: refDiv,\n    sx: innerContainer,\n    onMouseMove: function onMouseMove(_ref2) {\n      var x = _ref2.clientX,\n          y = _ref2.clientY;\n      return set({\n        xy: localCalc(x, y)\n      });\n    },\n    onMouseLeave: function onMouseLeave() {\n      return set({\n        xy: [0, 0]\n      });\n    },\n    children: [icon, title, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_4__[\"AspectRatio\"], {\n      ratio: max825 ? 3 / 4 : 16 / 9,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"iframe\", {\n        src: src,\n        width: \"100%\",\n        height: \"100%\",\n        frameBorder: 0,\n        allowFullScreen: true,\n        title: \"deep case editor\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }, _this), download]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 7\n  }, _this);\n}, \"YzaVDf32AW4VFW1cnygrVTkEcuQ=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_3__[\"useSpring\"], _framework__WEBPACK_IMPORTED_MODULE_4__[\"useMediaQuery\"]];\n}));\n_c2 = IFrame;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"IFrame$React.memo\");\n$RefreshReg$(_c2, \"IFrame\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9pZnJhbWUudHN4P2ZkYjAiXSwibmFtZXMiOlsiaW5uZXJDb250YWluZXIiLCJvdmVyZmxvdyIsImhlaWdodCIsIndpZHRoIiwicG9zaXRpb24iLCJ4IiwieSIsImRvY3VtZW50Iiwib25tb3VzZW1vdmUiLCJldmVudCIsInBhZ2VYIiwicGFnZVkiLCJJRnJhbWUiLCJSZWFjdCIsIm1lbW8iLCJ0aXRsZSIsInNyYyIsImRvd25sb2FkIiwic3R5bGVzIiwiaWNvbiIsImZyYW1lUmVmIiwidXNlUmVmIiwicmVmRGl2IiwibG9jYWxDYWxjIiwiYm94IiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJ1c2VTcHJpbmciLCJ4eSIsImNvbmZpZyIsIm1hc3MiLCJ0ZW5zaW9uIiwiZnJpY3Rpb24iLCJzcHJpbmciLCJzZXQiLCJ1c2VFZmZlY3QiLCJpIiwic2V0SW50ZXJ2YWwiLCJyaWdodCIsImJvdHRvbSIsInh5cyIsImNsZWFySW50ZXJ2YWwiLCJ1c2VNZWRpYVF1ZXJ5IiwibWF4ODI1IiwiY2xpZW50WCIsImNsaWVudFkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxjQUFjLEdBQUc7QUFDckJDLFVBQVEsRUFBRSxRQURXO0FBRXJCQyxRQUFNLEVBQUUsTUFGYTtBQUdyQkMsT0FBSyxFQUFFLE1BSGM7QUFJckJDLFVBQVEsRUFBRTtBQUpXLENBQXZCO0FBTUEsSUFBSUMsQ0FBQyxHQUFHLENBQUMsQ0FBVDtBQUNBLElBQUlDLENBQUMsR0FBRyxDQUFDLENBQVQ7O0FBQ0EsVUFBaUM7QUFDL0JDLFVBQVEsQ0FBQ0MsV0FBVCxHQUF1QixVQUFTQyxLQUFULEVBQWdCO0FBQ3JDSixLQUFDLEdBQUdJLEtBQUssQ0FBQ0MsS0FBVjtBQUNBSixLQUFDLEdBQUdHLEtBQUssQ0FBQ0UsS0FBVjtBQUNELEdBSEQ7QUFJRDs7QUFFTSxJ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LENBQUo7QUFBZixPQUFELENBQW5DO0FBQUEsS0FEZjtBQUVFLGdCQUFZLEVBQUU7QUFBQSxhQUFNOEIsR0FBRyxDQUFDO0FBQUNOLFVBQUUsRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFIO0FBQUwsT0FBRCxDQUFUO0FBQUEsS0FGaEI7QUFBQSxlQUlHWCxJQUpILEVBS0dKLEtBTEgsZUFNRSxxRUFBQyxzREFBRDtBQUFhLFdBQUssRUFBRThCLE1BQU0sR0FBRyxJQUFJLENBQVAsR0FBVyxLQUFLLENBQTFDO0FBQUEsNkJBQ0U7QUFBUSxXQUFHLEVBQUU3QixHQUFiO0FBQ0UsYUFBSyxFQUFDLE1BRFI7QUFFRSxjQUFNLEVBQUMsTUFGVDtBQUdFLG1CQUFXLEVBQUUsQ0FIZjtBQUlFLHVCQUFlLE1BSmpCO0FBS0UsYUFBSyxFQUFDO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixFQWVHQyxRQWZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUJELENBL0NxQjtBQUFBLFVBYUVZLHNEQWJGLEVBMEJIZSx3REExQkc7QUFBQSxHQUFmO01BQU1oQyxNIiwiZmlsZSI6Ii4vaW1wb3J0cy9pZnJhbWUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3ByaW5nIH0gZnJvbSAncmVhY3Qtc3ByaW5nJztcbmltcG9ydCB7IEdyYXZpdHlDYXJkLCBBc3BlY3RSYXRpbywgQm94LCB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAnLi9mcmFtZXdvcmsnO1xuXG5cbmNvbnN0IGlubmVyQ29udGFpbmVyID0ge1xuICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gIGhlaWdodDogJzEwMCUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbn07XG52YXIgeCA9IC0xO1xudmFyIHkgPSAtMTtcbmlmICh0eXBlb2Yod2luZG93KSA9PT0gJ29iamVjdCcpIHtcbiAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBmdW5jdGlvbihldmVudCkge1xuICAgIHggPSBldmVudC5wYWdlWDtcbiAgICB5ID0gZXZlbnQucGFnZVk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IElGcmFtZSA9IFJlYWN0Lm1lbW8oKHtcbiAgdGl0bGUsIHNyYywgZG93bmxvYWQsIHN0eWxlcywgaWNvbixcbn06e1xuICB0aXRsZT86IGFueTsgc3JjOiBzdHJpbmc7IGRvd25sb2FkPzogYW55OyBzdHlsZXM/OiBhbnk7IGljb24/OiBhbnk7XG59KSA9PiB7XG4gIGNvbnN0IGZyYW1lUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IHJlZkRpdiA9IHVzZVJlZjxhbnk+KCk7XG5cbiAgY29uc3QgbG9jYWxDYWxjID0gKHgsIHkpID0+IHtcbiAgICBjb25zdCBib3ggPSByZWZEaXY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiBbeCAtIChib3gubGVmdCArIChib3gud2lkdGggLyAyKSksIHkgLSAoYm94LnRvcCArIChib3guaGVpZ2h0IC8gMikpXTtcbiAgfTtcblxuICBjb25zdCBbc3ByaW5nLCBzZXRdID0gdXNlU3ByaW5nKCgpID0+ICh7IHh5OiBbMCwgMF0sIGNvbmZpZzogeyBtYXNzOiAxMCwgdGVuc2lvbjogNTUwLCBmcmljdGlvbjogMTQwIH0gfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IGJveCA9IHJlZkRpdj8uY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB7IGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSB9ID0gYm94O1xuICAgICAgaWYgKCEobGVmdCA8IHggJiYgcmlnaHQgPiB4ICYmIHRvcCA8IHkgJiYgYm90dG9tID4geSkpIHtcbiAgICAgICAgc2V0KHt4eTogWzAsMF19KVxuICAgICAgICBmcmFtZVJlZi5jdXJyZW50KHsgeHlzOiBbMCwgMCwgMV0gfSk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaSk7XG4gIH0sIFtdKTtcbiAgY29uc3QgW21heDgyNV0gPSB1c2VNZWRpYVF1ZXJ5KCcobWF4LXdpZHRoOiA4MjVweCknKTtcbiAgXG4gIHJldHVybiAoXG4gICAgICA8Qm94IHJlZj17cmVmRGl2fSBzeD17aW5uZXJDb250YWluZXJ9XG4gICAgICAgIG9uTW91c2VNb3ZlPXsoeyBjbGllbnRYOiB4LCBjbGllbnRZOiB5IH0pID0+IHNldCh7IHh5OiBsb2NhbENhbGMoeCwgeSkgfSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0KHt4eTogWzAsMF19KX1cbiAgICAgID5cbiAgICAgICAge2ljb259XG4gICAgICAgIHt0aXRsZX1cbiAgICAgICAgPEFzcGVjdFJhdGlvIHJhdGlvPXttYXg4MjUgPyAzIC8gNCA6IDE2IC8gOX0+XG4gICAgICAgICAgPGlmcmFtZSBzcmM9e3NyY31cbiAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICAgICAgZnJhbWVCb3JkZXI9ezB9XG4gICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgIHRpdGxlPSdkZWVwIGNhc2UgZWRpdG9yJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvQXNwZWN0UmF0aW8+XG4gICAgICAgIHtkb3dubG9hZH1cbiAgICAgIDwvQm94PlxuICApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/iframe.tsx\n");

/***/ })

})