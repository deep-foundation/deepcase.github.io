webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/talks-form.tsx":
/*!********************************!*\
  !*** ./imports/talks-form.tsx ***!
  \********************************/
/*! exports provided: TalksForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TalksForm\", function() { return TalksForm; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ \"./imports/framework.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space */ \"./imports/space.tsx\");\n\n\nvar _jsxFileName = \"/Users/anastasiakosheleva/Projects/deepcase.github.io/imports/talks-form.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar useStyles = Object(_framework__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    modal: {\n      display: 'flex',\n      flexDirection: 'column',\n      alignItems: 'center',\n      justifyContent: 'center',\n      background: '#000',\n      //theme.palette.background.paper,\n      boxShadow: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)',\n      width: 678,\n      height: 'max-content',\n      margin: '7rem auto',\n      borderRadius: 5,\n      '@media(max-width: 825px)': {\n        width: '90vw'\n      }\n    },\n    contentContainer: {\n      padding: '4rem 2rem',\n      '@media(max-width: 825px)': {\n        padding: '2rem'\n      }\n    },\n    titleModal: {\n      color: '#fff',\n      '&:first-letter': {\n        textTransform: 'capitalize'\n      }\n    },\n    textModal: {\n      fontSize: 'calc(14px + 0.5vmax)',\n      fontWeight: 300,\n      color: '#fff',\n      fontFamily: \"'Comfortaa', 'sans-serif'\",\n      textAlign: 'center'\n    },\n    discordButton: {\n      width: '100%',\n      background: '#7289da',\n      borderRadius: 5,\n      padding: '1rem 1.6rem'\n    },\n    buttonsContainer: {\n      display: 'grid',\n      gridTemplateColumns: 'repeat( auto-fit, minmax(24px, 56px) )',\n      columnGap: 'calc(1rem + 1.5vmax)',\n      rowGap: '1rem',\n      justifyContent: 'space-between',\n      boxSizing: 'border-box',\n      padding: '2rem 0',\n      '@media(max-width: 620px)': {\n        gridTemplateColumns: 'repeat( auto-fit, 24px)'\n      }\n    },\n    imageContainer: {\n      borderRadius: '50%',\n      padding: 0\n    }\n  };\n});\nvar TalksForm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(_c = _s(function (_ref) {\n  _s();\n\n  var _ref$portalOpen = _ref.portalOpen,\n      portalOpen = _ref$portalOpen === void 0 ? false : _ref$portalOpen,\n      onClosePortal = _ref.onClosePortal;\n\n  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"])(),\n      t = _useTranslation.t;\n\n  var classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Modal\"], {\n    \"aria-modal\": true,\n    \"aria-labelledby\": \"spring-modal-title\",\n    \"aria-describedby\": \"spring-modal-description\",\n    className: classes.modal,\n    open: portalOpen,\n    onClose: onClosePortal,\n    closeAfterTransition: true,\n    BackdropComponent: _framework__WEBPACK_IMPORTED_MODULE_1__[\"Backdrop\"],\n    BackdropProps: {\n      timeout: 500\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Fade\"], {\n      \"in\": portalOpen,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: classes.contentContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n          variant: \"h1\",\n          className: classes.titleModal,\n          align: \"center\",\n          children: t('talks-form-write-to-us')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_space__WEBPACK_IMPORTED_MODULE_4__[\"Space\"], {\n          unit: 2\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          href: \"https://discord.com/invite/vNJCTK4nZB\",\n          className: classes.discordButton,\n          \"aria-label\": \"discord\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/discord.svg\",\n            alt: \"Discord\",\n            width: \"40%\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 94,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: classes.buttonsContainer,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n            href: \"https://www.youtube.com/channel/UCWn8rWuwZ4ISFVNTgy0GEow/featured\",\n            className: classes.imageContainer,\n            \"aria-label\": \"you tube\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/source/youtube.png\",\n              alt: \"YouTube\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 98,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 97,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n            href: \"https://www.facebook.com/DeepFoundation-101491865581762\",\n            className: classes.imageContainer,\n            \"aria-label\": \"facebook\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/fb.png\",\n              alt: \"Facebook\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 101,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n            href: \"https://vk.com/deep.foundation\",\n            className: classes.imageContainer,\n            \"aria-label\": \"vkontakte\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/vk.png\",\n              alt: \"VKontakte\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n            href: \"https://github.com/deep-foundation\",\n            className: classes.imageContainer,\n            \"aria-label\": \"git hub\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/github.png\",\n              alt: \"GitHub\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 107,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_framework__WEBPACK_IMPORTED_MODULE_1__[\"IconButton\"], {\n            href: \"https://www.patreon.com/deepfoundation?fan_landing=true\",\n            className: classes.imageContainer,\n            \"aria-label\": \"patreon\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n              src: \"/pt.png\",\n              alt: \"Patreon\",\n              width: \"100%\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 110,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_space__WEBPACK_IMPORTED_MODULE_4__[\"Space\"], {\n          unit: 2\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          dangerouslySetInnerHTML: {\n            __html: t('talks-form-how-to-get-on-our-podcast')\n          },\n          className: classes.textModal\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 76,\n    columnNumber: 11\n  }, _this);\n}, \"n/DmXZxC8z3ljyLD00VaacIw92Y=\", false, function () {\n  return [react_i18next__WEBPACK_IMPORTED_MODULE_3__[\"useTranslation\"], useStyles];\n}));\n_c2 = TalksForm;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"TalksForm$React.memo\");\n$RefreshReg$(_c2, \"TalksForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy90YWxrcy1mb3JtLnRzeD81ZDNlIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1vZGFsIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJjb250ZW50Q29udGFpbmVyIiwicGFkZGluZyIsInRpdGxlTW9kYWwiLCJjb2xvciIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0TW9kYWwiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJmb250RmFtaWx5IiwidGV4dEFsaWduIiwiZGlzY29yZEJ1dHRvbiIsImJ1dHRvbnNDb250YWluZXIiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiY29sdW1uR2FwIiwicm93R2FwIiwiYm94U2l6aW5nIiwiaW1hZ2VDb250YWluZXIiLCJUYWxrc0Zvcm0iLCJSZWFjdCIsIm1lbW8iLCJwb3J0YWxPcGVuIiwib25DbG9zZVBvcnRhbCIsInVzZVRyYW5zbGF0aW9uIiwidCIsImNsYXNzZXMiLCJCYWNrZHJvcCIsInRpbWVvdXQiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyw2REFBVSxDQUFDLFVBQUFDLEtBQUs7QUFBQSxTQUFLO0FBQ3JDQyxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsbUJBQWEsRUFBRSxRQUZWO0FBR0xDLGdCQUFVLEVBQUUsUUFIUDtBQUlMQyxvQkFBYyxFQUFFLFFBSlg7QUFLTEMsZ0JBQVUsRUFBRSxNQUxQO0FBS2U7QUFDcEJDLGVBQVMsRUFBRSxnRkFOTjtBQU9MQyxXQUFLLEVBQUUsR0FQRjtBQVFMQyxZQUFNLEVBQUUsYUFSSDtBQVNMQyxZ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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkYsZUFhRSxxRUFBQyxxREFBRDtBQUFZLGdCQUFJLEVBQUMseURBQWpCO0FBQTJFLHFCQUFTLEVBQUVRLE9BQU8sQ0FBQ1IsY0FBOUY7QUFBOEcsMEJBQVcsU0FBekg7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUMsU0FBVDtBQUFtQixpQkFBRyxFQUFDLFNBQXZCO0FBQWlDLG1CQUFLLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GLGVBdUJFLHFFQUFDLDRDQUFEO0FBQU8sY0FBSSxFQUFFO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkYsZUF3QkU7QUFBSyxpQ0FBdUIsRUFBRTtBQUFFVyxrQkFBTSxFQUFFSixDQUFDLENBQUMsc0NBQUQ7QUFBWCxXQUE5QjtBQUFxRixtQkFBUyxFQUFFQyxPQUFPLENBQUNuQjtBQUF4RztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFSO0FBNENELENBdER3QjtBQUFBLFVBT1RpQiw0REFQUyxFQVFQcEMsU0FSTztBQUFBLEdBQWxCO01BQU0rQixTIiwiZmlsZSI6Ii4vaW1wb3J0cy90YWxrcy1mb3JtLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMsIE1vZGFsLCBCYWNrZHJvcCwgVHlwb2dyYXBoeSwgSWNvbkJ1dHRvbiwgQnV0dG9uLCBGYWRlIH0gZnJvbSAnLi9mcmFtZXdvcmsnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgeyBTcGFjZSB9IGZyb20gJy4vc3BhY2UnO1xuXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgbW9kYWw6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIGJhY2tncm91bmQ6ICcjMDAwJywgLy90aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXG4gICAgYm94U2hhZG93OiAnMHB4IDBweCAycHggNHB4IHJnYmEoMTQzLDE0MywxNDMsMC4xMyksIDBweCAwcHggNHB4IDZweCByZ2JhKDE0MywxNDMsMTQzLDAuMjApJyxcbiAgICB3aWR0aDogNjc4LFxuICAgIGhlaWdodDogJ21heC1jb250ZW50JyxcbiAgICBtYXJnaW46ICc3cmVtIGF1dG8nLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICAnQG1lZGlhKG1heC13aWR0aDogODI1cHgpJzoge1xuICAgICAgd2lkdGg6ICc5MHZ3JyxcbiAgICB9LFxuICB9LFxuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgcGFkZGluZzogJzRyZW0gMnJlbScsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDgyNXB4KSc6IHtcbiAgICAgIHBhZGRpbmc6ICcycmVtJyxcbiAgICB9LFxuICB9LFxuICB0aXRsZU1vZGFsOiB7XG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICAnJjpmaXJzdC1sZXR0ZXInOiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScsXG4gICAgfSxcbiAgfSxcbiAgdGV4dE1vZGFsOiB7XG4gICAgZm9udFNpemU6ICdjYWxjKDE0cHggKyAwLjV2bWF4KScsXG4gICAgZm9udFdlaWdodDogMzAwLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgZm9udEZhbWlseTogXCInQ29tZm9ydGFhJywgJ3NhbnMtc2VyaWYnXCIsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfSxcbiAgZGlzY29yZEJ1dHRvbjoge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYmFja2dyb3VuZDogJyM3Mjg5ZGEnLFxuICAgIGJvcmRlclJhZGl1czogNSxcbiAgICBwYWRkaW5nOiAnMXJlbSAxLjZyZW0nLFxuICB9LFxuICBidXR0b25zQ29udGFpbmVyOiB7XG4gICAgZGlzcGxheTogJ2dyaWQnLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMjRweCwgNTZweCkgKScsXG4gICAgY29sdW1uR2FwOiAnY2FsYygxcmVtICsgMS41dm1heCknLFxuICAgIHJvd0dhcDogJzFyZW0nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogJzJyZW0gMCcsXG4gICAgJ0BtZWRpYShtYXgtd2lkdGg6IDYyMHB4KSc6IHtcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoIGF1dG8tZml0LCAyNHB4KScsXG4gICAgfVxuICB9LFxuICBpbWFnZUNvbnRhaW5lcjoge1xuICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgcGFkZGluZzogMCxcbiAgfSxcbn0pKVxuXG5leHBvcnQgY29uc3QgVGFsa3NGb3JtID0gUmVhY3QubWVtbygoe1xuICBwb3J0YWxPcGVuID0gZmFsc2UsIFxuICBvbkNsb3NlUG9ydGFsXG59OntcbiAgcG9ydGFsT3Blbj86IGJvb2xlYW47IFxuICBvbkNsb3NlUG9ydGFsOiAoKSA9PiBhbnk7XG59KSA9PiB7XG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoPE1vZGFsXG4gICAgICBhcmlhLW1vZGFsPXt0cnVlfVxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwic3ByaW5nLW1vZGFsLXRpdGxlXCJcbiAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJzcHJpbmctbW9kYWwtZGVzY3JpcHRpb25cIlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1vZGFsfVxuICAgICAgb3Blbj17cG9ydGFsT3Blbn1cbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2VQb3J0YWx9XG4gICAgICBjbG9zZUFmdGVyVHJhbnNpdGlvblxuICAgICAgQmFja2Ryb3BDb21wb25lbnQ9e0JhY2tkcm9wfVxuICAgICAgQmFja2Ryb3BQcm9wcz17e1xuICAgICAgICB0aW1lb3V0OiA1MDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxGYWRlIGluPXtwb3J0YWxPcGVufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudENvbnRhaW5lcn0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD0naDEnIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZU1vZGFsfSBhbGlnbj0nY2VudGVyJz57dCgndGFsa3MtZm9ybS13cml0ZS10by11cycpfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8U3BhY2UgdW5pdD17Mn0gLz5cbiAgICAgICAgICA8QnV0dG9uIGhyZWY9J2h0dHBzOi8vZGlzY29yZC5jb20vaW52aXRlL3ZOSkNUSzRuWkInIGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNjb3JkQnV0dG9ufSBhcmlhLWxhYmVsPSdkaXNjb3JkJz5cbiAgICAgICAgICAgIDxpbWcgc3JjPScvZGlzY29yZC5zdmcnIGFsdD0nRGlzY29yZCcgd2lkdGg9JzQwJScgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25zQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNXbjhyV3V3WjRJU0ZWTlRneTBHRW93L2ZlYXR1cmVkJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGFyaWEtbGFiZWw9J3lvdSB0dWJlJz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zb3VyY2UveW91dHViZS5wbmcnIGFsdD0nWW91VHViZScgd2lkdGg9JzEwMCUnIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vRGVlcEZvdW5kYXRpb24tMTAxNDkxODY1NTgxNzYyJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGFyaWEtbGFiZWw9J2ZhY2Vib29rJz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9mYi5wbmcnIGFsdD0nRmFjZWJvb2snIHdpZHRoPScxMDAlJyAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgPEljb25CdXR0b24gaHJlZj0naHR0cHM6Ly92ay5jb20vZGVlcC5mb3VuZGF0aW9uJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGFyaWEtbGFiZWw9J3Zrb250YWt0ZSc+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvdmsucG5nJyBhbHQ9J1ZLb250YWt0ZScgd2lkdGg9JzEwMCUnIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBocmVmPSdodHRwczovL2dpdGh1Yi5jb20vZGVlcC1mb3VuZGF0aW9uJyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGFyaWEtbGFiZWw9J2dpdCBodWInPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2dpdGh1Yi5wbmcnIGFsdD0nR2l0SHViJyB3aWR0aD0nMTAwJScgLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGhyZWY9J2h0dHBzOi8vd3d3LnBhdHJlb24uY29tL2RlZXBmb3VuZGF0aW9uP2Zhbl9sYW5kaW5nPXRydWUnIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUNvbnRhaW5lcn0gYXJpYS1sYWJlbD0ncGF0cmVvbic+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvcHQucG5nJyBhbHQ9J1BhdHJlb24nIHdpZHRoPScxMDAlJyAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTcGFjZSB1bml0PXsyfSAvPlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0KCd0YWxrcy1mb3JtLWhvdy10by1nZXQtb24tb3VyLXBvZGNhc3QnKSB9fSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dE1vZGFsfSAvPlxuICAgICAgICAgIHsvKiA8VHlwb2dyYXBoeSB2YXJpYW50PSdib2R5MicgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTW9kYWx9IGFsaWduPSdjZW50ZXInPnt0KCd0YWxrcy1mb3JtLWhvdy10by1nZXQtb24tb3VyLXBvZGNhc3QnKX08L1R5cG9ncmFwaHk+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRmFkZT5cbiAgICA8L01vZGFsPlxuICApXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./imports/talks-form.tsx\n");

/***/ })

})