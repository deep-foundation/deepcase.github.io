webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/special-cards-text.tsx":
/*!****************************************!*\
  !*** ./imports/special-cards-text.tsx ***!
  \****************************************/
/*! exports provided: SpecialCardsText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SpecialCardsText\", function() { return SpecialCardsText; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n/* harmony import */ var _special_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./special-card */ \"./imports/special-card.tsx\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/special-cards-text.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar GridCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c = function _c(_ref) {\n  var children = _ref.children,\n      _ref$columns = _ref.columns,\n      columns = _ref$columns === void 0 ? '1fr 25rem' : _ref$columns,\n      _ref$direction = _ref.direction,\n      direction = _ref$direction === void 0 ? 'column-reverse' : _ref$direction,\n      _ref$alignItem = _ref.alignItem,\n      alignItem = _ref$alignItem === void 0 ? 'baseline' : _ref$alignItem;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    sx: {\n      position: 'relative',\n      height: '100%',\n      width: '100%',\n      display: 'grid',\n      gridTemplateColumns: columns,\n      columnGap: '4rem',\n      alignItems: alignItem,\n      '@media(max-width: 1420px)': {\n        alignItems: 'center'\n      },\n      '@media(max-width: 850px)': {\n        alignItems: 'center',\n        display: 'flex',\n        width: '100%',\n        flexDirection: direction\n      }\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 11\n  }, _this);\n});\n_c2 = GridCard;\nvar SpecialCardsText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(_c3 = _s(function () {\n  _s();\n\n  var divider = Object(_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoint\"])();\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"VStack\"], {\n    spacing: {\n      sm: '7rem',\n      lg: '5rem'\n    },\n    divider: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"StackDivider\"], {\n      borderColor: divider === 'sm' ? 'light' : 'dark'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 65\n    }, _this),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      columns: \"25rem 1fr\",\n      direction: \"column\",\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/1.svg\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            sx: {\n              transform: 'translate(-50%, 2.5rem)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/1_2.svg\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--operational-environment'),\n          description: t('flag-description--operational-environment')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        as: \"div\",\n        width: \"100%\",\n        children: t('flag-article--operational-environment')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        children: t('flag-article--new-programming-paradigm')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/2.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            htmlWidth: \"100%\",\n            htmlHeight: \"100%\",\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/2_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--new-programming-paradigm'),\n          description: t('flag-description--new-programming-paradigm')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      columns: \"23rem 1fr\",\n      direction: \"column\",\n      alignItem: \"flex-start\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/3.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/3_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--all-languages'),\n          description: t('flag-description--all-languages')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        fontSize: \"sm\",\n        align: {\n          sm: 'center',\n          lg: 'justify'\n        },\n        children: t('flag-article--all-languages')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(GridCard, {\n      alignItem: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          fontSize: \"sm\",\n          align: {\n            sm: 'center',\n            lg: 'justify'\n          },\n          children: t('flag-article--semantic-system')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Center\"], {\n          py: \"2rem\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Code\"], {\n              variant: \"solid\",\n              colorScheme: \"transparentDark\",\n              size: \"full\",\n              sx: {\n                borderRadius: '0.175rem',\n                padding: '1rem',\n                fontSize: '1rem'\n              },\n              children: \"{\\n  can(where: {\\n    object_id: { _eq: 5 },\\n    subject_id: { _eq: 165 },\\n    action_id: { _eq: 28 },\\n  }) {\\n    rule_id\\n  }\\n}\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 95,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        maxW: \"25rem\",\n        minW: \"20rem\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_special_card__WEBPACK_IMPORTED_MODULE_4__[\"SpecialCard\"], {\n          icon1: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/4.svg\",\n            sx: {\n              transform: 'translate(-50%, 2rem)'\n            },\n            alt: \"icon\",\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 20\n          }, _this),\n          icon2: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_3__[\"Img\"], {\n            src: \"/flags/4_2.svg\",\n            sx: {\n              transform: 'translateX(-50%)'\n            },\n            htmlHeight: \"100%\",\n            htmlWidth: \"100%\",\n            alt: \"icon\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 20\n          }, _this),\n          title: t('flag-title--semantic-system'),\n          description: t('flag-description--semantic-system')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 11\n  }, _this);\n}, \"BN5xPH3HQ7J0Q7fwTN7dQ5ukdoI=\", false, function () {\n  return [_framework__WEBPACK_IMPORTED_MODULE_3__[\"useBreakpoint\"], react_i18next__WEBPACK_IMPORTED_MODULE_2__[\"useTranslation\"]];\n}));\n_c4 = SpecialCardsText;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"GridCard$React.memo\");\n$RefreshReg$(_c2, \"GridCard\");\n$RefreshReg$(_c3, \"SpecialCardsText$React.memo\");\n$RefreshReg$(_c4, \"SpecialCardsText\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy9zcGVjaWFsLWNhcmRzLXRleHQudHN4PzY0ZGMiXSwibmFtZXMiOlsiR3JpZENhcmQiLCJSZWFjdCIsIm1lbW8iLCJjaGlsZHJlbiIsImNvbHVtbnMiLCJkaXJlY3Rpb24iLCJhbGlnbkl0ZW0iLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJjb2x1bW5HYXAiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsIlNwZWNpYWxDYXJkc1RleHQiLCJkaXZpZGVyIiwidXNlQnJlYWtwb2ludCIsInVzZVRyYW5zbGF0aW9uIiwidCIsInNtIiwibGciLCJ0cmFuc2Zvcm0iLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsUUFBUSxnQkFBR0MsNENBQUssQ0FBQ0MsSUFBTixNQUFXLGtCQVV0QjtBQUFBLE1BVEpDLFFBU0ksUUFUSkEsUUFTSTtBQUFBLDBCQVJKQyxPQVFJO0FBQUEsTUFSSkEsT0FRSSw2QkFSTSxXQVFOO0FBQUEsNEJBUEpDLFNBT0k7QUFBQSxNQVBKQSxTQU9JLCtCQVBRLGdCQU9SO0FBQUEsNEJBTkpDLFNBTUk7QUFBQSxNQU5KQSxTQU1JLCtCQU5RLFVBTVI7QUFDSixzQkFBUSxxRUFBQyw4Q0FBRDtBQUFLLE1BQUUsRUFBRTtBQUNmQyxjQUFRLEVBQUUsVUFESztBQUVmQyxZQUFNLEVBQUUsTUFGTztBQUdmQyxXQUFLLEVBQUUsTUFIUTtBQUlmQyxhQUFPLEVBQUUsTUFKTTtBQUtmQyx5QkFBbUIsRUFBRVAsT0FMTjtBQU1mUSxlQUFTLEVBQUUsTUFOSTtBQU9mQyxnQkFBVSxFQUFFUCxTQVBHO0FBUWYsbUNBQTZCO0FBQzNCTyxrQkFBVSxFQUFFO0FBRGUsT0FSZDtBQVdmLGtDQUE0QjtBQUMxQkEsa0JBQVUs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QUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFxQkUscUVBQUMsOENBQUQ7QUFBSyxZQUFJLEVBQUMsT0FBVjtBQUFrQixZQUFJLEVBQUMsT0FBdkI7QUFBQSwrQkFDRSxxRUFBQyx5REFBRDtBQUNFLGVBQUssZUFBRSxxRUFBQyw4Q0FBRDtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLGNBQUUsRUFBRTtBQUFDSCx1QkFBUyxFQUFFO0FBQVosYUFBNUI7QUFBa0UsZUFBRyxFQUFDLE1BQXRFO0FBQTZFLHNCQUFVLEVBQUMsTUFBeEY7QUFBK0YscUJBQVMsRUFBQztBQUF6RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURUO0FBRUUsZUFBSyxlQUFFLHFFQUFDLDhDQUFEO0FBQUssZUFBRyxFQUFDLGdCQUFUO0FBQTBCLGNBQUUsRUFBRTtBQUFDQSx1QkFBUyxFQUFFO0FBQVosYUFBOUI7QUFBK0Qsc0JBQVUsRUFBQyxNQUExRTtBQUFpRixxQkFBUyxFQUFDLE1BQTNGO0FBQWtHLGVBQUcsRUFBQztBQUF0RztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZUO0FBR0UsZUFBSyxFQUFFSCxDQUFDLENBQUMsNkJBQUQsQ0FIVjtBQUlFLHFCQUFXLEVBQUVBLENBQUMsQ0FBQyxtQ0FBRDtBQUpoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5Q0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVI7QUFnRkQsQ0FwRitCO0FBQUEsVUFDZEYsd0RBRGMsRUFFaEJDLDREQUZnQjtBQUFBLEdBQXpCO01BQU1ILGdCIiwiZmlsZSI6Ii4vaW1wb3J0cy9zcGVjaWFsLWNhcmRzLXRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCB7IEJveCwgQ2VudGVyLCBDb2RlLCBEaXZpZGVyLCBUZXh0LCB1c2VNZWRpYVF1ZXJ5LCBWU3RhY2ssIEltZywgdXNlQnJlYWtwb2ludCwgdXNlQnJlYWtwb2ludFZhbHVlLCBTdGFja0RpdmlkZXIgfSBmcm9tICcuL2ZyYW1ld29yayc7XG5pbXBvcnQgeyBTcGVjaWFsQ2FyZCB9IGZyb20gXCIuL3NwZWNpYWwtY2FyZFwiO1xuXG5cbmNvbnN0IEdyaWRDYXJkID0gUmVhY3QubWVtbygoe1xuICBjaGlsZHJlbiwgXG4gIGNvbHVtbnMgPSAnMWZyIDI1cmVtJywgXG4gIGRpcmVjdGlvbiA9ICdjb2x1bW4tcmV2ZXJzZScsXG4gIGFsaWduSXRlbSA9ICdiYXNlbGluZScsXG59OntcbiAgY2hpbGRyZW46IGFueTsgXG4gIGNvbHVtbnM/OiBhbnk7XG4gIGRpcmVjdGlvbj86IGFueTtcbiAgYWxpZ25JdGVtPzogYW55O1xufSkgPT4ge1xuICByZXR1cm4gKDxCb3ggc3g9e3tcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBjb2x1bW5zLFxuICAgIGNvbHVtbkdhcDogJzRyZW0nLFxuICAgIGFsaWduSXRlbXM6IGFsaWduSXRlbSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogMTQyMHB4KSc6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDg1MHB4KSc6IHtcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICB9XG4gIH19PntjaGlsZHJlbn08L0JveD4pXG59KTtcblxuZXhwb3J0IGNvbnN0IFNwZWNpYWxDYXJkc1RleHQgPSBSZWFjdC5tZW1vKCgpID0+IHtcbiAgY29uc3QgZGl2aWRlciA9IHVzZUJyZWFrcG9pbnQoKTtcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuXG4gIHJldHVybiAoPFZTdGFjayBzcGFjaW5nPXt7IHNtOiAnN3JlbScsIGxnOiAnNXJlbScgfX0gZGl2aWRlcj17PFN0YWNrRGl2aWRlciBib3JkZXJDb2xvcj17ZGl2aWRlciA9PT0gJ3NtJyA/ICdsaWdodCcgOiAnZGFyayd9IC8+fT5cbiAgICAgIDxHcmlkQ2FyZCBjb2x1bW5zPScyNXJlbSAxZnInIGRpcmVjdGlvbj0nY29sdW1uJyBhbGlnbkl0ZW09J2ZsZXgtc3RhcnQnPlxuICAgICAgICA8Qm94IG1heFc9JzI1cmVtJyBtaW5XPScyMHJlbSc+XG4gICAgICAgICAgPFNwZWNpYWxDYXJkXG4gICAgICAgICAgICBpY29uMT17PEltZyBzcmM9Jy9mbGFncy8xLnN2ZycgaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAyLjVyZW0pJ319IGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICBpY29uMj17PEltZyBzcmM9Jy9mbGFncy8xXzIuc3ZnJyBodG1sSGVpZ2h0PScxMDAlJyBodG1sV2lkdGg9JzEwMCUnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSd9fSBhbHQ9J2ljb24nIC8+fVxuICAgICAgICAgICAgdGl0bGU9e3QoJ2ZsYWctdGl0bGUtLW9wZXJhdGlvbmFsLWVudmlyb25tZW50Jyl9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZmxhZy1kZXNjcmlwdGlvbi0tb3BlcmF0aW9uYWwtZW52aXJvbm1lbnQnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBhbGlnbj17e3NtOiAnY2VudGVyJywgbGc6ICdqdXN0aWZ5J319IGFzPSdkaXYnIHdpZHRoPScxMDAlJz5cbiAgICAgICAgICB7dCgnZmxhZy1hcnRpY2xlLS1vcGVyYXRpb25hbC1lbnZpcm9ubWVudCcpfVxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0dyaWRDYXJkPlxuICAgICAgey8qIHttYXg4NTAgJiYgPERpdmlkZXIgLz59ICovfVxuXG4gICAgICA8R3JpZENhcmQgYWxpZ25JdGVtPSdmbGV4LXN0YXJ0Jz5cbiAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBhbGlnbj17e3NtOiAnY2VudGVyJywgbGc6ICdqdXN0aWZ5J319PlxuICAgICAgICAgIHt0KCdmbGFnLWFydGljbGUtLW5ldy1wcm9ncmFtbWluZy1wYXJhZGlnbScpfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggbWF4Vz0nMjVyZW0nIG1pblc9JzIwcmVtJz5cbiAgICAgICAgICA8U3BlY2lhbENhcmRcbiAgICAgICAgICAgIGljb24xPXs8SW1nIHNyYz0nL2ZsYWdzLzIuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAycmVtKSd9fSBodG1sV2lkdGg9JzEwMCUnICBodG1sSGVpZ2h0PScxMDAlJyBhbHQ9J2ljb24nIC8+fVxuICAgICAgICAgICAgaWNvbjI9ezxJbWcgc3JjPScvZmxhZ3MvMl8yLnN2Zycgc3g9e3t0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJ319IGFsdD0naWNvbicgLz59XG4gICAgICAgICAgICB0aXRsZT17dCgnZmxhZy10aXRsZS0tbmV3LXByb2dyYW1taW5nLXBhcmFkaWdtJyl9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17dCgnZmxhZy1kZXNjcmlwdGlvbi0tbmV3LXByb2dyYW1taW5nLXBhcmFkaWdtJyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0dyaWRDYXJkPlxuICAgICAgey8qIHttYXg4NTAgJiYgPERpdmlkZXIgLz59ICovfVxuXG4gICAgICA8R3JpZENhcmQgY29sdW1ucz0nMjNyZW0gMWZyJyBkaXJlY3Rpb249J2NvbHVtbicgYWxpZ25JdGVtPSdmbGV4LXN0YXJ0Jz5cbiAgICAgICAgPEJveCBtYXhXPScyNXJlbScgbWluVz0nMjByZW0nPlxuICAgICAgICAgIDxTcGVjaWFsQ2FyZFxuICAgICAgICAgICAgaWNvbjE9ezxJbWcgc3JjPScvZmxhZ3MvMy5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIDJyZW0pJ319IGFsdD0naWNvbicgaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyAvPn1cbiAgICAgICAgICAgIGljb24yPXs8SW1nIHNyYz0nL2ZsYWdzLzNfMi5zdmcnIHN4PXt7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKSd9fSBhbHQ9J2ljb24nIGh0bWxIZWlnaHQ9JzEwMCUnIGh0bWxXaWR0aD0nMTAwJScgLz59XG4gICAgICAgICAgICB0aXRsZT17dCgnZmxhZy10aXRsZS0tYWxsLWxhbmd1YWdlcycpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2ZsYWctZGVzY3JpcHRpb24tLWFsbC1sYW5ndWFnZXMnKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBhbGlnbj17e3NtOiAnY2VudGVyJywgbGc6ICdqdXN0aWZ5J319PlxuICAgICAgICAgIHt0KCdmbGFnLWFydGljbGUtLWFsbC1sYW5ndWFnZXMnKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9HcmlkQ2FyZD5cbiAgICAgIHsvKiB7bWF4ODUwICYmIDxEaXZpZGVyIC8+fSAqL31cblxuICAgICAgPEdyaWRDYXJkIGFsaWduSXRlbT0nY2VudGVyJz5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nIGFsaWduPXt7c206ICdjZW50ZXInLCBsZzogJ2p1c3RpZnknfX0+XG4gICAgICAgICAgICB7dCgnZmxhZy1hcnRpY2xlLS1zZW1hbnRpYy1zeXN0ZW0nKX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPENlbnRlciBweT0nMnJlbSc+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgPENvZGUgdmFyaWFudD0nc29saWQnIGNvbG9yU2NoZW1lPSd0cmFuc3BhcmVudERhcmsnIHNpemU9J2Z1bGwnIHN4PXt7Ym9yZGVyUmFkaXVzOiAnMC4xNzVyZW0nLCBwYWRkaW5nOiAnMXJlbScsIGZvbnRTaXplOiAnMXJlbSd9fT5cbiAgICAgICAgICAgICAge2B7XG4gIGNhbih3aGVyZToge1xuICAgIG9iamVjdF9pZDogeyBfZXE6IDUgfSxcbiAgICBzdWJqZWN0X2lkOiB7IF9lcTogMTY1IH0sXG4gICAgYWN0aW9uX2lkOiB7IF9lcTogMjggfSxcbiAgfSkge1xuICAgIHJ1bGVfaWRcbiAgfVxufWB9XG4gICAgICAgICAgICA8L0NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggbWF4Vz0nMjVyZW0nIG1pblc9JzIwcmVtJz5cbiAgICAgICAgICA8U3BlY2lhbENhcmRcbiAgICAgICAgICAgIGljb24xPXs8SW1nIHNyYz0nL2ZsYWdzLzQuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlLCAycmVtKSd9fSBhbHQ9J2ljb24nIGh0bWxIZWlnaHQ9JzEwMCUnIGh0bWxXaWR0aD0nMTAwJScgLz59XG4gICAgICAgICAgICBpY29uMj17PEltZyBzcmM9Jy9mbGFncy80XzIuc3ZnJyBzeD17e3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknfX0gaHRtbEhlaWdodD0nMTAwJScgaHRtbFdpZHRoPScxMDAlJyBhbHQ9J2ljb24nIC8+fVxuICAgICAgICAgICAgdGl0bGU9e3QoJ2ZsYWctdGl0bGUtLXNlbWFudGljLXN5c3RlbScpfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e3QoJ2ZsYWctZGVzY3JpcHRpb24tLXNlbWFudGljLXN5c3RlbScpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICBcbiAgICAgIDwvR3JpZENhcmQ+XG4gICAgICBcbiAgICA8L1ZTdGFjaz5cbiAgKVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/special-cards-text.tsx\n");

/***/ })

})