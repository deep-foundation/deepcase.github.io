webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/article.tsx":
/*!*****************************!*\
  !*** ./imports/article.tsx ***!
  \*****************************/
/*! exports provided: ArticleCard, ArticlesGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArticleCard\", function() { return ArticleCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ArticlesGrid\", function() { return ArticlesGrid; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/article.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\nvar HabrButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = function _c(_ref) {\n  var text = _ref.text,\n      href = _ref.href;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    as: _framework__WEBPACK_IMPORTED_MODULE_3__[\"LinkOverlay\"],\n    href: href,\n    target: \"_blank\",\n    h: \"max-content\",\n    w: \"max-content\",\n    transition: \"all 0.2s cubic-bezier(.08,.52,.52,1)\",\n    textDecoration: \"none\",\n    color: \"primary\",\n    _hover: {\n      textDecoration: 'underline'\n    },\n    _active: {\n      textDecoration: 'none',\n      transform: 'scale(0.98)'\n    },\n    _focus: {\n      boxShadow: '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)'\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n        src: \"./posts/habr.png\",\n        alt: \"habr\",\n        boxSize: \"2.3em\",\n        mr: \"0.3em\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        as: \"span\",\n        fontWeight: \"semibold\",\n        color: \"primary\",\n        _hover: {\n          color: 'light'\n        },\n        _active: {\n          color: 'light',\n          transform: 'scale(0.98)'\n        },\n        children: text\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 11\n  }, _this);\n});\n_c2 = HabrButton;\nvar ArticleCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c3 = _s(function (_ref2) {\n  _s();\n\n  var src = _ref2.src,\n      alt = _ref2.alt,\n      href = _ref2.href,\n      title = _ref2.title;\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"LinkBox\"], {\n    as: \"article\",\n    maxW: \"sm\",\n    p: \"5\",\n    borderWidth: \"1px\",\n    borderRadius: \"5px\",\n    rounded: \"md\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      className: \"clip-block\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        display: \"block\",\n        pos: \"relative\",\n        w: \"18.5rem\",\n        h: \"18.5rem\",\n        clipPath: \"url(\\\"#hexagon-clip\\\")\",\n        transition: \"all 0.2s ease-in\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n          w: \"18.5rem\",\n          h: \"18.5rem\",\n          bgImage: src,\n          bgRepeat: \"no-repeat\",\n          bgSize: \"cover\",\n          bgColor: \"#ad6996\",\n          backgroundBlendMode: \"hard-light\",\n          _after: {\n            content: '\"\"',\n            position: 'absolute',\n            left: 0,\n            right: 0,\n            bottom: 0,\n            clipPath: 'url(\"#triangle-clip\")',\n            background: '#9E566E',\n            zIndex: 1,\n            width: '100%',\n            height: 0,\n            transition: 'all 0.2s linear',\n            pointerEvents: 'none'\n          },\n          _hover: {\n            height: 155,\n            transition: 'all 0.45s ease-in'\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n            sx: {\n              position: 'absolute',\n              bottom: 20,\n              right: 75,\n              color: '#fff',\n              fontSize: '70%',\n              zIndex: 2\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n              as: \"span\",\n              className: \"social-each\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n                fontSize: \"xl\",\n                children: title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 105,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"clipPath\", {\n          id: \"hexagon-clip\",\n          clipPathUnits: \"objectBoundingBox\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n            points: \"0.25 0.05, 0.75 0.05, 1 0.5, 0.75 0.95, 0.25 0.95, 0 0.5\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"defs\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"clipPath\", {\n          id: \"triangle-clip\",\n          clipPathUnits: \"objectBoundingBox\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"polygon\", {\n            points: \"1 0.03, 0.17 1, 1 1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 125,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 123,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 11\n  }, _this);\n}, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c4 = ArticleCard;\nvar Article = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c5 = _s2(function (_ref3) {\n  _s2();\n\n  var src = _ref3.src,\n      alt = _ref3.alt,\n      href = _ref3.href,\n      title = _ref3.title;\n\n  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation2.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"LinkBox\"], {\n    as: \"article\",\n    maxW: \"sm\",\n    p: \"5\",\n    borderStartWidth: \"1px\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n      boxSize: \"100px\",\n      objectFit: \"cover\",\n      mr: 4,\n      src: src,\n      alt: alt\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n      spacing: 10,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Heading\"], {\n        size: \"md\",\n        my: \"2\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"LinkOverlay\"], {\n          href: href,\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 145,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 144,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(HabrButton, {\n        text: t('posts-read'),\n        href: href\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 135,\n    columnNumber: 11\n  }, _this);\n}, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c6 = Article;\nvar ArticlesGrid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c7 = function _c7() {\n  var articles = [{\n    id: '1',\n    src: './posts/factors.jpeg',\n    alt: '???????????? ????????????????????????',\n    title: '???????????? ????????????????????????',\n    href: 'https://habr.com/ru/post/576326/'\n  }, {\n    id: '2',\n    src: './posts/links.png',\n    alt: '?????????????????????????? ??????????',\n    title: '?????????????????????????? ??????????',\n    href: 'https://habr.com/ru/post/576398/'\n  }, {\n    id: '3',\n    src: './posts/math.jpeg',\n    alt: 'Math introduction to Deep Theory',\n    title: 'Math introduction to Deep Theory',\n    href: 'https://habr.com/ru/post/658705/'\n  }, {\n    id: '4',\n    src: './posts/startup.png',\n    alt: '?????????????? ?? ???????????? ??????????????',\n    title: '?????????????? ?? ???????????? ??????????????',\n    href: 'https://habr.com/ru/post/656879/'\n  }];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"SimpleGrid\"], {\n    columns: [1, null, 2],\n    spacing: 10,\n    children: articles.map(function (a) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Article, {\n        src: a.src,\n        alt: a.alt,\n        title: a.title,\n        href: a.href\n      }, a.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 186,\n        columnNumber: 27\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 185,\n    columnNumber: 11\n  }, _this);\n});\n_c8 = ArticlesGrid;\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n\n$RefreshReg$(_c, \"HabrButton$React.memo\");\n$RefreshReg$(_c2, \"HabrButton\");\n$RefreshReg$(_c3, \"ArticleCard$React.memo\");\n$RefreshReg$(_c4, \"ArticleCard\");\n$RefreshReg$(_c5, \"Article$React.memo\");\n$RefreshReg$(_c6, \"Article\");\n$RefreshReg$(_c7, \"ArticlesGrid$React.memo\");\n$RefreshReg$(_c8, \"ArticlesGrid\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9hcnRpY2xlLnRzeD9hZDMyIl0sIm5hbWVzIjpbIkhhYnJCdXR0b24iLCJSZWFjdCIsIm1lbW8iLCJ0ZXh0IiwiaHJlZiIsIkxpbmtPdmVybGF5IiwidGV4dERlY29yYXRpb24iLCJ0cmFuc2Zvcm0iLCJib3hTaGFkb3ciLCJjb2xvciIsIkFydGljbGVDYXJkIiwic3JjIiwiYWx0IiwidGl0bGUiLCJ1c2VUcmFuc2xhdGlvbiIsInQiLCJjb250ZW50IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJjbGlwUGF0aCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJ3aWR0aCIsImhlaWdodCIsInRyYW5zaXRpb24iLCJwb2ludGVyRXZlbnRzIiwiZm9udFNpemUiLCJBcnRpY2xlIiwiQXJ0aWNsZXNHcmlkIiwiYXJ0aWNsZXMiLCJpZCIsIm1hcCIsImEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTQSxJQUFNQSxVQUFVLGdCQUFHQyw0Q0FBSyxDQUFDQyxJQUFOLE1BQVcsa0JBQWdEO0FBQUEsTUFBOUNDLElBQThDLFFBQTlDQSxJQUE4QztBQUFBLE1BQXhDQyxJQUF3QyxRQUF4Q0EsSUFBd0M7QUFDNUUsc0JBQVEscUVBQUMsOENBQUQ7QUFDSixNQUFFLEVBQUVDLHNEQURBO0FBRUosUUFBSSxFQUFFRCxJQUZGO0FBR0osVUFBTSxFQUFDLFFBSEg7QUFJSixLQUFDLEVBQUMsYUFKRTtBQUtKLEtBQUMsRUFBQyxhQUxFO0FBTUosY0FBVSxFQUFDLHNDQU5QO0FBT0osa0JBQWMsRUFBQyxNQVBYO0FBUUosU0FBSyxFQUFDLFNBUkY7QUFTSixVQUFNLEVBQUU7QUFDTkUsb0JBQWMsRUFBRTtBQURWLEtBVEo7QUFZSixXQUFPLEVBQUU7QUFDUEEsb0JBQWMsRUFBRSxNQURUO0FBRVBDLGVBQVMsRUFBRTtBQUZKLEtBWkw7QUFnQkosVUFBTSxFQUFFO0FBQ05DLGVB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Q0FsQzJCLENBQXJCO01BQU1GLFkiLCJmaWxlIjoiLi9pbXBvcnRzL2FydGljbGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IHsgTGlua0JveCwgQm94LCBMaW5rT3ZlcmxheSwgU2ltcGxlR3JpZCwgSW1nLCBGbGV4LCBUZXh0LCBIU3RhY2ssIFZTdGFjaywgSGVhZGluZyB9IGZyb20gJy4vZnJhbWV3b3JrJztcblxuaW50ZXJmYWNlIElBcnRpY2xlIHtcbiAgc3JjPzogc3RyaW5nO1xuICBhbHQ/OiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbn1cblxuY29uc3QgSGFickJ1dHRvbiA9IFJlYWN0Lm1lbW8oKHt0ZXh0LCBocmVmfTp7dGV4dDogc3RyaW5nOyBocmVmOiBzdHJpbmc7fSkgPT4ge1xuICByZXR1cm4gKDxCb3hcbiAgICAgIGFzPXtMaW5rT3ZlcmxheX1cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgIGg9J21heC1jb250ZW50J1xuICAgICAgdz0nbWF4LWNvbnRlbnQnXG4gICAgICB0cmFuc2l0aW9uPSdhbGwgMC4ycyBjdWJpYy1iZXppZXIoLjA4LC41MiwuNTIsMSknXG4gICAgICB0ZXh0RGVjb3JhdGlvbj0nbm9uZSdcbiAgICAgIGNvbG9yPSdwcmltYXJ5J1xuICAgICAgX2hvdmVyPXt7IFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICAgIH19XG4gICAgICBfYWN0aXZlPXt7XG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOTgpJyxcbiAgICAgIH19XG4gICAgICBfZm9jdXM9e3tcbiAgICAgICAgYm94U2hhZG93OlxuICAgICAgICAgICcwIDAgMXB4IDJweCByZ2JhKDg4LCAxNDQsIDI1NSwgLjc1KSwgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjE1KScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGbGV4PlxuICAgICAgICA8SW1nIHNyYz0nLi9wb3N0cy9oYWJyLnBuZycgYWx0PSdoYWJyJyBib3hTaXplPScyLjNlbScgbXI9JzAuM2VtJyAvPlxuICAgICAgICA8VGV4dCBcbiAgICAgICAgICBmb250U2l6ZT0nc20nIFxuICAgICAgICAgIGFzPSdzcGFuJyBcbiAgICAgICAgICBmb250V2VpZ2h0PSdzZW1pYm9sZCcgXG4gICAgICAgICAgY29sb3I9J3ByaW1hcnknXG4gICAgICAgICAgX2hvdmVyPXt7IGNvbG9yOiAnbGlnaHQnIH19XG4gICAgICAgICAgX2FjdGl2ZT17e1xuICAgICAgICAgICAgY29sb3I6ICdsaWdodCcsXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjk4KScsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9Cb3g+XG4gIClcbn0pXG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlQ2FyZCA9IFJlYWN0Lm1lbW8oKHtzcmMsIGFsdCwgaHJlZiwgdGl0bGV9OklBcnRpY2xlKSA9PiB7XG4gIFxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gIHJldHVybiAoPExpbmtCb3ggYXM9J2FydGljbGUnIG1heFc9J3NtJyBwPSc1JyBib3JkZXJXaWR0aD0nMXB4JyBib3JkZXJSYWRpdXM9JzVweCcgcm91bmRlZD0nbWQnPlxuICAgICAgPEJveCBjbGFzc05hbWU9XCJjbGlwLWJsb2NrXCI+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PSdibG9jaycgXG4gICAgICAgICAgcG9zPSdyZWxhdGl2ZSdcbiAgICAgICAgICB3PScxOC41cmVtJ1xuICAgICAgICAgIGg9JzE4LjVyZW0nXG4gICAgICAgICAgY2xpcFBhdGg9J3VybChcIiNoZXhhZ29uLWNsaXBcIiknXG4gICAgICAgICAgdHJhbnNpdGlvbj0nYWxsIDAuMnMgZWFzZS1pbidcbiAgICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgdz0nMTguNXJlbSdcbiAgICAgICAgICAgIGg9JzE4LjVyZW0nXG4gICAgICAgICAgICBiZ0ltYWdlPXtzcmN9XG4gICAgICAgICAgICBiZ1JlcGVhdD0nbm8tcmVwZWF0J1xuICAgICAgICAgICAgYmdTaXplPSdjb3ZlcidcbiAgICAgICAgICAgIGJnQ29sb3I9JyNhZDY5OTYnXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlPSdoYXJkLWxpZ2h0J1xuICAgICAgICAgICAgX2FmdGVyPXt7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICAgIGNsaXBQYXRoOiAndXJsKFwiI3RyaWFuZ2xlLWNsaXBcIiknLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzlFNTY2RScsXG4gICAgICAgICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMnMgbGluZWFyJyxcbiAgICAgICAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE1NSxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjQ1cyBlYXNlLWluJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogMjAsXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDc1LFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICc3MCUnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEJveCBhcz0nc3BhbicgY2xhc3NOYW1lPVwic29jaWFsLWVhY2hcIj5cbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0neGwnPlxuICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XHRcbiAgICAgIDwvQm94PlxuXG4gICAgICA8c3ZnPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJoZXhhZ29uLWNsaXBcIiBjbGlwUGF0aFVuaXRzPVwib2JqZWN0Qm91bmRpbmdCb3hcIj5cbiAgICAgICAgICAgIDxwb2x5Z29uIHBvaW50cz1cIjAuMjUgMC4wNSwgMC43NSAwLjA1LCAxIDAuNSwgMC43NSAwLjk1LCAwLjI1IDAuOTUsIDAgMC41XCIgLz5cbiAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cdFxuXG4gICAgICA8c3ZnPlxuICAgICAgICA8ZGVmcz5cbiAgICAgICAgICA8Y2xpcFBhdGggaWQ9XCJ0cmlhbmdsZS1jbGlwXCIgY2xpcFBhdGhVbml0cz1cIm9iamVjdEJvdW5kaW5nQm94XCI+XG4gICAgICAgICAgICA8cG9seWdvbiBwb2ludHM9XCIxIDAuMDMsIDAuMTcgMSwgMSAxXCIgLz5cbiAgICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgICA8L2RlZnM+XG4gICAgICA8L3N2Zz5cbiAgICA8L0xpbmtCb3g+XG4gIClcbn0pO1xuXG5jb25zdCBBcnRpY2xlID0gUmVhY3QubWVtbygoe3NyYywgYWx0LCBocmVmLCB0aXRsZX06SUFydGljbGUpID0+IHtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICByZXR1cm4gKDxMaW5rQm94IGFzPSdhcnRpY2xlJyBtYXhXPSdzbScgcD0nNScgYm9yZGVyU3RhcnRXaWR0aD0nMXB4JyBkaXNwbGF5PSdmbGV4JyBmbGV4RGlyZWN0aW9uPSdyb3cnPlxuICAgICAgPEltZ1xuICAgICAgICBib3hTaXplPScxMDBweCdcbiAgICAgICAgb2JqZWN0Rml0PSdjb3ZlcidcbiAgICAgICAgbXI9ezR9XG4gICAgICAgIHNyYz17c3JjfVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgIC8+XHRcbiAgICAgIDxWU3RhY2sgc3BhY2luZz17MTB9PlxuICAgICAgICA8SGVhZGluZyBzaXplPSdtZCcgbXk9JzInPlxuICAgICAgICAgIDxMaW5rT3ZlcmxheSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L0xpbmtPdmVybGF5PlxuICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgIDxIYWJyQnV0dG9uIHRleHQ9e3QoJ3Bvc3RzLXJlYWQnKX0gaHJlZj17aHJlZn0gLz4gXG4gICAgICA8L1ZTdGFjaz5cbiAgICA8L0xpbmtCb3g+KVxufSk7XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlc0dyaWQgPSBSZWFjdC5tZW1vKCgpID0+IHtcbiAgY29uc3QgYXJ0aWNsZXM9W1xuICAgIHtcbiAgICAgIGlkOiAnMScsXG4gICAgICBzcmM6ICcuL3Bvc3RzL2ZhY3RvcnMuanBlZycsXG4gICAgICBhbHQ6ICfQpNCw0LrRgtC+0YAg0YDQtdGE0LDQutGC0L7RgNC40L3Qs9CwJyxcbiAgICAgIHRpdGxlOiAn0KTQsNC60YLQvtGAINGA0LXRhNCw0LrRgtC+0YDQuNC90LPQsCcsXG4gICAgICBocmVmOiAnaHR0cHM6Ly9oYWJyLmNvbS9ydS9wb3N0LzU3NjMyNi8nXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJzInLFxuICAgICAgc3JjOiAnLi9wb3N0cy9saW5rcy5wbmcnLFxuICAgICAgYWx0OiAn0JDRgdGB0L7RhtC40LDRgtC40LLQvdGL0LUg0YHQstGP0LfQuCcsXG4gICAgICB0aXRsZTogJ9CQ0YHRgdC+0YbQuNCw0YLQuNCy0L3Ri9C1INGB0LLRj9C30LgnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vaGFici5jb20vcnUvcG9zdC81NzYzOTgvJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICczJyxcbiAgICAgIHNyYzogJy4vcG9zdHMvbWF0aC5qcGVnJyxcbiAgICAgIGFsdDogJ01hdGggaW50cm9kdWN0aW9uIHRvIERlZXAgVGhlb3J5JyxcbiAgICAgIHRpdGxlOiAnTWF0aCBpbnRyb2R1Y3Rpb24gdG8gRGVlcCBUaGVvcnknLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vaGFici5jb20vcnUvcG9zdC82NTg3MDUvJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICc0JyxcbiAgICAgIHNyYzogJy4vcG9zdHMvc3RhcnR1cC5wbmcnLFxuICAgICAgYWx0OiAn0KHRgtCw0YDRgtCw0L8g0YEg0LTRgNGD0LPQvtC5INC/0LvQsNC90LXRgtGLJyxcbiAgICAgIHRpdGxlOiAn0KHRgtCw0YDRgtCw0L8g0YEg0LTRgNGD0LPQvtC5INC/0LvQsNC90LXRgtGLJyxcbiAgICAgIGhyZWY6ICdodHRwczovL2hhYnIuY29tL3J1L3Bvc3QvNjU2ODc5LydcbiAgICB9LFxuICBdO1xuICByZXR1cm4gKDxTaW1wbGVHcmlkIGNvbHVtbnM9e1sxLCBudWxsLCAyXX0gc3BhY2luZz17MTB9PlxuICAgICAge2FydGljbGVzLm1hcChhID0+ICg8QXJ0aWNsZSBzcmM9e2Euc3JjfSBhbHQ9e2EuYWx0fSB0aXRsZT17YS50aXRsZX0ga2V5PXthLmlkfSBocmVmPXthLmhyZWZ9IC8+KSl9XG4gICAgPC9TaW1wbGVHcmlkPilcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/article.tsx\n");

/***/ })

})