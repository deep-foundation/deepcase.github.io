webpackHotUpdate_N_E("pages/index",{

/***/ "./imports/theme/build.tsx":
/*!*********************************!*\
  !*** ./imports/theme/build.tsx ***!
  \*********************************/
/*! exports provided: coreTheme, theme, theme2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coreTheme\", function() { return coreTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme2\", function() { return theme2; });\n/* harmony import */ var _Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_anastasiakosheleva_Projects_deepcase_github_io_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar temp = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({});\nvar coreTheme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({\n  config: {\n    cssVarPrefix: 'deep'\n  },\n  colors: {\n    dark: '#19202B',\n    light: '#EAEAEA',\n    second: {\n      100: '#c0e8f9',\n      500: '#00a9f3',\n      600: '#008fcc'\n    },\n    menuItem: {\n      100: '#19202b85',\n      200: '#19202bad'\n    }\n  },\n  fonts: {\n    body: \"'Inconsolata', monospace\",\n    heading: \"'Inconsolata', monospace\",\n    // body: \"Comfortaa, sans-serif\",\n    // heading: \"Comfortaa, sans-serif\",\n    mono: \"Menlo, monospace\"\n  },\n  fontSizes: {\n    xs: \"calc(0.75rem + 0.5vmax)\",\n    sm: 'calc(14px + 0.5vmax)',\n    //\"0.875rem\",\n    md: \"calc(1rem + 0.5vmax)\",\n    lg: \"calc(1.125rem + 0.5vmax)\",\n    xl: \"calc(1.25rem + 0.5vmax)\",\n    \"2xl\": \"1.5rem\",\n    \"3xl\": \"1.875rem\",\n    \"4xl\": \"2.25rem\",\n    \"5xl\": \"3rem\",\n    \"6xl\": \"3.75rem\",\n    \"7xl\": \"4.5rem\",\n    \"8xl\": \"6rem\",\n    \"9xl\": \"8rem\"\n  },\n  styles: {\n    global: {\n      html: {\n        height: '100%'\n      },\n      body: {\n        minHeight: '100%',\n        bg: '#19202B',\n        color: '#dfdfdf',\n        position: 'absolute',\n        top: 0,\n        bottom: 0,\n        right: 0,\n        left: 0\n      }\n    }\n  },\n  textStyles: {\n    h1: {\n      fontSize: 'calc(18px + 0.5vmax)',\n      fontWeight: 'bold'\n    },\n    h2: {\n      fontSize: 'calc(16px + 0.5vmax)',\n      fontWeight: 'bold'\n    },\n    h5: {\n      fontSize: 'calc(18px + 0.5vmax)',\n      fontWeight: 500\n    }\n  },\n  shadows: {\n    lg: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)'\n  },\n  radii: {\n    md: '0.175rem'\n  },\n  components: {\n    Button: {\n      variants: {\n        outline: {\n          borderRadius: {\n            radii: {\n              md: '0.175rem'\n            }\n          }\n        },\n        ghost: {\n          color: '#EAEAEA',\n          _active: {\n            bg: 'none'\n          },\n          _hover: {\n            bg: 'initial'\n          }\n        },\n        solid: {\n          _focus: {\n            boxShadow: 'none'\n          }\n        },\n        unstyled: {\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'center',\n          padding: '1rem 0'\n        }\n      },\n      colorScheme: {\n        second: '#00a9f3'\n      }\n    },\n    Link: {\n      baseStyle: {\n        fontWeight: 'semibold'\n      },\n      sizes: {\n        sm: {\n          h: '32px',\n          fontSize: 'sm',\n          px: '12px'\n        }\n      }\n    },\n    Modal: {\n      baseStyle: {\n        dialog: {\n          bg: Object(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_2__[\"mode\"])('#000', \"#000\"),\n          alignItems: 'center',\n          padding: '1rem 0.5rem',\n          marginLeft: '1rem',\n          marginRight: '1rem'\n        },\n        body: {\n          alignItems: 'center'\n        }\n      }\n    }\n  } // typography: {\n  //   fontFamily: ['Comfortaa', 'sans-serif'].join(','),\n  //   h1: {\n  //     fontSize: 'calc(32px + 0.5vmax)',\n  //     fontWeight: 700,\n  //   },\n  //   h2: {\n  //     fontSize: 'calc(26px + 0.5vmax)',\n  //     fontWeight: 700,\n  //     color: '#fff',\n  //   },\n  //   h3: {\n  //     fontSize: 'calc(24px + 0.5vmax)',\n  //     fontWeight: 600,\n  //   },\n  //   h4: {\n  //     fontSize: 'calc(22px + 0.5vmax)',\n  //     fontWeight: 500,\n  //   },\n  //   h5: {\n  //     fontSize: 'calc(18px + 0.5vmax)',\n  //     fontWeight: 500,\n  //   },\n  //   body1: {\n  //     fontSize: 'calc(16px + 0.5vmax)',\n  //     fontWeight: 300,\n  //     lineHeight: 'calc(1.1em + 0.5vmax)',\n  //   },\n  //   body2: {\n  //     fontSize: 'calc(14px + 0.5vmax)',\n  //     fontWeight: 300,\n  //     color: '#fff',\n  //     // lineHeight: 'calc(0.975em + 0.5vmax)',\n  //   },\n  //   caption:{\n  //     fontSize: 'calc(12px + 0.3vmax)',\n  //     lineHeight: 'calc(0.45em + 0.5vmax)',\n  //     textTransform: 'none',\n  //     color: '#fff',\n  //   },\n  //   overline: {\n  //     fontSize: 'calc(12px + 0.5vmax)',\n  //     lineHeight: 'calc(0.45em + 0.5vmax)',\n  //   }\n  // },\n  // palette: {\n  //   mode: 'dark',\n  //   background: {\n  //     default: '#19202B',\n  //     paper: '#00000030',\n  //     // @ts-ignore\n  //     dark: '#111720',\n  //   },\n  //   primary: temp.color.lightBlue,\n  //   secondary: temp.color.lightGreen,\n  //   text: {\n  //     primary: '#fff',\n  //   }\n  // },\n  // shape: {\n  //   borderRadius: 0,\n  // },\n\n});\nvar theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])(_objectSpread({}, coreTheme));\nvar theme2 = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"extendTheme\"])({// palette: {\n  //   primary: {\n  //     main: '#000',\n  //     light: '#000',\n  //     dark: '#000',\n  //   },\n  // },\n  // typography: {\n  // fontFamily: ['Comfortaa', 'sans-serif'].join(','),\n  // h1: {\n  //   fontSize: \"6rem\",\n  //   [breakpoints.down(\"xs\")]: {\n  //     fontSize: \"3rem\"\n  //   }\n  // },\n  // h2: {\n  //   fontSize: \"3.75rem\",\n  //   [breakpoints.down(\"xs\")]: {\n  //     fontSize: \"2.2rem\"\n  //   }\n  // },\n  // h3: {\n  //   fontSize: \"3rem\",\n  //   [breakpoints.down(\"xs\")]: {\n  //     fontSize: \"2rem\"\n  //   }\n  // },\n  // h4: {\n  //   fontSize: \"2.125rem\",\n  //   [breakpoints.down(\"xs\")]: {\n  //     fontSize: \"1.8rem\"\n  //   }\n  // }\n  // },\n  // overrides: {\n  //   MuiButton: {\n  //     label: {\n  //       fontSize: 20,\n  //       textTransform: 'none',\n  //     },\n  //   }\n  // }\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW1wb3J0cy90aGVtZS9idWlsZC50c3g/MGI3YyJdLCJuYW1lcyI6WyJ0ZW1wIiwiZXh0ZW5kVGhlbWUiLCJjb3JlVGhlbWUiLCJjb25maWciLCJjc3NWYXJQcmVmaXgiLCJjb2xvcnMiLCJkYXJrIiwibGlnaHQiLCJzZWNvbmQiLCJtZW51SXRlbSIsImZvbnRzIiwiYm9keSIsImhlYWRpbmciLCJtb25vIiwiZm9udFNpemVzIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInN0eWxlcyIsImdsb2JhbCIsImh0bWwiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJiZyIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJib3R0b20iLCJyaWdodCIsImxlZnQiLCJ0ZXh0U3R5bGVzIiwiaDEiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJoMiIsImg1Iiwic2hhZG93cyIsInJhZGlpIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsInZhcmlhbnRzIiwib3V0bGluZSIsImJvcmRlclJhZGl1cyIsImdob3N0IiwiX2FjdGl2ZSIsIl9ob3ZlciIsInNvbGlkIiwiX2ZvY3VzIiwiYm94U2hhZG93IiwidW5zdHlsZWQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsImNvbG9yU2NoZW1lIiwiTGluayIsImJhc2VTdHlsZSIsInNpemVzIiwiaCIsInB4IiwiTW9kYWwiLCJkaWFsb2ciLCJtb2RlIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwidGhlbWUiLCJ0aGVtZTIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUEsSUFBTUEsSUFBSSxHQUFHQyxvRUFBVyxDQUFDLEVBQUQsQ0FBeEI7QUFFTyxJQUFNQyxTQUFTLEdBQUdELG9FQUFXLENBQUM7QUFDbkNFLFFBQU0sRUFBRTtBQUNOQyxnQkFBWSxFQUFFO0FBRFIsR0FEMkI7QUFJbkNDLFFBQU0sRUFBRTtBQUNOQyxRQUFJ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ZmlsZSI6Ii4vaW1wb3J0cy90aGVtZS9idWlsZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgbW9kZSB9IGZyb20gXCJAY2hha3JhLXVpL3RoZW1lLXRvb2xzXCI7XG5cblxuXG5jb25zdCB0ZW1wID0gZXh0ZW5kVGhlbWUoe30pO1xuXG5leHBvcnQgY29uc3QgY29yZVRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb25maWc6IHtcbiAgICBjc3NWYXJQcmVmaXg6ICdkZWVwJyxcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgZGFyazogJyMxOTIwMkInLFxuICAgIGxpZ2h0OiAnI0VBRUFFQScsXG4gICAgc2Vjb25kOiB7XG4gICAgICAxMDA6ICcjYzBlOGY5JyxcbiAgICAgIDUwMDogJyMwMGE5ZjMnLFxuICAgICAgNjAwOiAnIzAwOGZjYycsXG4gICAgfSwgXG4gICAgbWVudUl0ZW06IHtcbiAgICAgIDEwMDogJyMxOTIwMmI4NScsXG4gICAgICAyMDA6ICcjMTkyMDJiYWQnLFxuICAgIH1cblxuICB9LFxuICBmb250czoge1xuICAgIGJvZHk6IFwiJ0luY29uc29sYXRhJywgbW9ub3NwYWNlXCIsXG4gICAgaGVhZGluZzogXCInSW5jb25zb2xhdGEnLCBtb25vc3BhY2VcIixcbiAgICAvLyBib2R5OiBcIkNvbWZvcnRhYSwgc2Fucy1zZXJpZlwiLFxuICAgIC8vIGhlYWRpbmc6IFwiQ29tZm9ydGFhLCBzYW5zLXNlcmlmXCIsXG4gICAgbW9ubzogXCJNZW5sbywgbW9ub3NwYWNlXCIsXG4gIH0sXG4gIGZvbnRTaXplczoge1xuICAgIHhzOiBcImNhbGMoMC43NXJlbSArIDAuNXZtYXgpXCIsXG4gICAgc206ICdjYWxjKDE0cHggKyAwLjV2bWF4KScsIC8vXCIwLjg3NXJlbVwiLFxuICAgIG1kOiBcImNhbGMoMXJlbSArIDAuNXZtYXgpXCIsXG4gICAgbGc6IFwiY2FsYygxLjEyNXJlbSArIDAuNXZtYXgpXCIsXG4gICAgeGw6IFwiY2FsYygxLjI1cmVtICsgMC41dm1heClcIixcbiAgICBcIjJ4bFwiOiBcIjEuNXJlbVwiLFxuICAgIFwiM3hsXCI6IFwiMS44NzVyZW1cIixcbiAgICBcIjR4bFwiOiBcIjIuMjVyZW1cIixcbiAgICBcIjV4bFwiOiBcIjNyZW1cIixcbiAgICBcIjZ4bFwiOiBcIjMuNzVyZW1cIixcbiAgICBcIjd4bFwiOiBcIjQuNXJlbVwiLFxuICAgIFwiOHhsXCI6IFwiNnJlbVwiLFxuICAgIFwiOXhsXCI6IFwiOHJlbVwiLFxuICB9LFxuICBzdHlsZXM6IHtcbiAgICBnbG9iYWw6IHtcbiAgICAgIGh0bWw6IHtcbiAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICB9LFxuICAgICAgYm9keToge1xuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgYmc6ICcjMTkyMDJCJyxcbiAgICAgICAgY29sb3I6ICcjZGZkZmRmJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsIFxuICAgICAgICB0b3A6IDAsIFxuICAgICAgICBib3R0b206IDAsIFxuICAgICAgICByaWdodDogMCwgXG4gICAgICAgIGxlZnQ6IDAsXG5cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHRleHRTdHlsZXM6IHtcbiAgICBoMToge1xuICAgICAgZm9udFNpemU6ICdjYWxjKDE4cHggKyAwLjV2bWF4KScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBoMjoge1xuICAgICAgZm9udFNpemU6ICdjYWxjKDE2cHggKyAwLjV2bWF4KScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgfSxcbiAgICBoNToge1xuICAgICAgZm9udFNpemU6ICdjYWxjKDE4cHggKyAwLjV2bWF4KScsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgfSxcbiAgfSxcbiAgc2hhZG93czoge1xuICAgIGxnOiAnMHB4IDBweCAycHggNHB4IHJnYmEoMTQzLDE0MywxNDMsMC4xMyksIDBweCAwcHggNHB4IDZweCByZ2JhKDE0MywxNDMsMTQzLDAuMjApJyxcbiAgfSxcbiAgcmFkaWk6IHtcbiAgICBtZDogJzAuMTc1cmVtJyxcbiAgfSxcbiAgY29tcG9uZW50czoge1xuICAgIEJ1dHRvbjoge1xuICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgb3V0bGluZToge1xuICAgICAgICAgIGJvcmRlclJhZGl1czoge1xuICAgICAgICAgICAgcmFkaWk6IHttZDogJzAuMTc1cmVtJ30sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZ2hvc3Q6IHtcbiAgICAgICAgICBjb2xvcjogJyNFQUVBRUEnLFxuICAgICAgICAgIF9hY3RpdmU6IHtcbiAgICAgICAgICAgIGJnOiAnbm9uZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBfaG92ZXI6IHtcbiAgICAgICAgICAgIGJnOiAnaW5pdGlhbCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc29saWQ6IHtcbiAgICAgICAgICBfZm9jdXM6IHtcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ25vbmUnLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdW5zdHlsZWQ6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgIHBhZGRpbmc6ICcxcmVtIDAnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGNvbG9yU2NoZW1lOiB7XG4gICAgICAgIHNlY29uZDogJyMwMGE5ZjMnLFxuICAgICAgfSxcbiAgICAgIFxuICAgIH0sXG5cbiAgICBMaW5rOiB7XG4gICAgICBiYXNlU3R5bGU6IHtcbiAgICAgICAgZm9udFdlaWdodDogJ3NlbWlib2xkJyxcbiAgICAgIH0sXG4gICAgICBzaXplczoge1xuICAgICAgICBzbToge1xuICAgICAgICAgIGg6ICczMnB4JyxcbiAgICAgICAgICBmb250U2l6ZTogJ3NtJyxcbiAgICAgICAgICBweDogJzEycHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgTW9kYWw6IHtcbiAgICAgIGJhc2VTdHlsZToge1xuICAgICAgICBcbiAgICAgICAgZGlhbG9nOiB7XG4gICAgICAgICAgYmc6IG1vZGUoJyMwMDAnLCBcIiMwMDBcIiksXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgcGFkZGluZzogJzFyZW0gMC41cmVtJyxcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMXJlbScsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6ICcxcmVtJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0sXG4gIH1cbiAgLy8gdHlwb2dyYXBoeToge1xuICAvLyAgIGZvbnRGYW1pbHk6IFsnQ29tZm9ydGFhJywgJ3NhbnMtc2VyaWYnXS5qb2luKCcsJyksXG4gIC8vICAgaDE6IHtcbiAgLy8gICAgIGZvbnRTaXplOiAnY2FsYygzMnB4ICsgMC41dm1heCknLFxuICAvLyAgICAgZm9udFdlaWdodDogNzAwLFxuICAvLyAgIH0sXG4gIC8vICAgaDI6IHtcbiAgLy8gICAgIGZvbnRTaXplOiAnY2FsYygyNnB4ICsgMC41dm1heCknLFxuICAvLyAgICAgZm9udFdlaWdodDogNzAwLFxuICAvLyAgICAgY29sb3I6ICcjZmZmJyxcbiAgLy8gICB9LFxuICAvLyAgIGgzOiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMjRweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgLy8gICB9LFxuICAvLyAgIGg0OiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMjJweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgLy8gICB9LFxuICAvLyAgIGg1OiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMThweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgLy8gICB9LFxuICAvLyAgIGJvZHkxOiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMTZweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGZvbnRXZWlnaHQ6IDMwMCxcbiAgLy8gICAgIGxpbmVIZWlnaHQ6ICdjYWxjKDEuMWVtICsgMC41dm1heCknLFxuICAvLyAgIH0sXG4gIC8vICAgYm9keTI6IHtcbiAgLy8gICAgIGZvbnRTaXplOiAnY2FsYygxNHB4ICsgMC41dm1heCknLFxuICAvLyAgICAgZm9udFdlaWdodDogMzAwLFxuICAvLyAgICAgY29sb3I6ICcjZmZmJyxcbiAgLy8gICAgIC8vIGxpbmVIZWlnaHQ6ICdjYWxjKDAuOTc1ZW0gKyAwLjV2bWF4KScsXG4gIC8vICAgfSxcbiAgLy8gICBjYXB0aW9uOntcbiAgLy8gICAgIGZvbnRTaXplOiAnY2FsYygxMnB4ICsgMC4zdm1heCknLFxuICAvLyAgICAgbGluZUhlaWdodDogJ2NhbGMoMC40NWVtICsgMC41dm1heCknLFxuICAvLyAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAvLyAgICAgY29sb3I6ICcjZmZmJyxcbiAgLy8gICB9LFxuICAvLyAgIG92ZXJsaW5lOiB7XG4gIC8vICAgICBmb250U2l6ZTogJ2NhbGMoMTJweCArIDAuNXZtYXgpJyxcbiAgLy8gICAgIGxpbmVIZWlnaHQ6ICdjYWxjKDAuNDVlbSArIDAuNXZtYXgpJyxcbiAgLy8gICB9XG4gIC8vIH0sXG4gIC8vIHBhbGV0dGU6IHtcbiAgLy8gICBtb2RlOiAnZGFyaycsXG4gIC8vICAgYmFja2dyb3VuZDoge1xuICAvLyAgICAgZGVmYXVsdDogJyMxOTIwMkInLFxuICAvLyAgICAgcGFwZXI6ICcjMDAwMDAwMzAnLFxuICAvLyAgICAgLy8gQHRzLWlnbm9yZVxuICAvLyAgICAgZGFyazogJyMxMTE3MjAnLFxuICAvLyAgIH0sXG4gIC8vICAgcHJpbWFyeTogdGVtcC5jb2xvci5saWdodEJsdWUsXG4gIC8vICAgc2Vjb25kYXJ5OiB0ZW1wLmNvbG9yLmxpZ2h0R3JlZW4sXG4gIC8vICAgdGV4dDoge1xuICAvLyAgICAgcHJpbWFyeTogJyNmZmYnLFxuICAvLyAgIH1cbiAgLy8gfSxcbiAgLy8gc2hhcGU6IHtcbiAgLy8gICBib3JkZXJSYWRpdXM6IDAsXG4gIC8vIH0sXG59KTtcbmV4cG9ydCBjb25zdCB0aGVtZSA9IGV4dGVuZFRoZW1lKHtcbiAgLi4uY29yZVRoZW1lLFxuICBcbiAgLy8gb3ZlcnJpZGVzOiB7XG4gIC8vICAgTXVpQnV0dG9uOiB7XG4gIC8vICAgICBsYWJlbDoge1xuICAvLyAgICAgICBmb250U2l6ZTogJ2NhbGMoMTJweCArIDAuM3ZtYXgpJyxcbiAgLy8gICAgICAgLy8gdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAvLyAgICAgfSxcbiAgLy8gICB9LFxuICAvLyAgIE11aUJ1dHRvbkdyb3VwOiB7XG4gIC8vICAgICByb290OiB7XG4gIC8vICAgICAgIGNvbG9yOiAnIzAwMCcsXG4gIC8vICAgICB9XG4gIC8vICAgfSxcbiAgLy8gICBNdWlQYXBlcjoge1xuICAvLyAgICAgb3V0bGluZWQ6IHtcbiAgLy8gICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzExMTcyMCcsXG4gIC8vICAgICAgIGJvcmRlcjogJzAgc29saWQgdHJhbnNwYXJlbnQnLFxuICAvLyAgICAgfSxcbiAgLy8gICAgIGVsZXZhdGlvbjA6IHtcbiAgLy8gICAgICAgYm9yZGVyOiAnMCBzb2xpZCB0cmFuc3BhcmVudCcsXG4gIC8vICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBlbGV2YXRpb24xOiB7XG4gIC8vICAgICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjQwJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBlbGV2YXRpb24yOiB7XG4gIC8vICAgICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjYwJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBlbGV2YXRpb24zOiB7XG4gIC8vICAgICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjgwJyxcbiAgLy8gICAgIH0sXG4gIC8vICAgICBlbGV2YXRpb240OiB7XG4gIC8vICAgICAgIGJvcmRlcjogJzFweCBkYXNoZWQgI2ZmZmZmZjEwMCcsXG4gIC8vICAgICB9LFxuICAvLyAgIH0sXG4gIC8vICAgTXVpQXBwQmFyOiB7XG4gIC8vICAgICByb290OiB7XG4gIC8vICAgICAgIHBhZGRpbmc6ICcxcmVtIDAnXG4gIC8vICAgICB9LFxuICAvLyAgICAgY29sb3JEZWZhdWx0OiB7XG4gIC8vICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gIC8vICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDAzMCcsIC8vZGFya2VuKGNvcmVUaGVtZT8ucGFsZXR0ZT8uYmFja2dyb3VuZD8uZGVmYXVsdCwgMC4zKSxcbiAgLy8gICAgICAgYm9yZGVyOiAnMXB4IGRhc2hlZCAjZmZmZmZmNDAnLFxuICAvLyAgICAgfVxuICAvLyAgIH0sXG4gIC8vICAgTXVpU3ZnSWNvbjoge1xuICAvLyAgICAgcm9vdDoge1xuICAvLyAgICAgICBoZWlnaHQ6ICcxLjVyZW0nLFxuICAvLyAgICAgICB3aWR0aDogJzEuNXJlbSdcbiAgLy8gICAgIH0sXG4gIC8vICAgfSxcbiAgLy8gICBNdWlUb29sdGlwOiB7XG4gIC8vICAgICB0b29sdGlwOiB7XG4gIC8vICAgICAgIGJhY2tncm91bmRDb2xvcjogY29yZVRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAvLyAgICAgICBjb2xvcjogJ3JnYmEoMjU2LCAyNTYsIDI1NiwgMC44NyknLFxuICAvLyAgICAgICBtYXhXaWR0aDogMjIwLFxuICAvLyAgICAgICBmb250U2l6ZTogY29yZVRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxMiksXG4gIC8vICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAvLyAgICAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgLy8gICAgICAgYm9yZGVyQ29sb3I6IGNvcmVUaGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcbiAgLy8gICAgIH0sXG4gIC8vICAgICBhcnJvdzoge1xuICAvLyAgICAgICBjb2xvcjogY29yZVRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxuICAvLyAgICAgICAnJjo6YmVmb3JlJzoge1xuICAvLyAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAvLyAgICAgICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAvLyAgICAgICAgIGJvcmRlckNvbG9yOiBjb3JlVGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gIC8vICAgICAgIH0sXG4gIC8vICAgICB9LFxuICAvLyAgIH0sXG4gIC8vICAgTXVpTGlzdEl0ZW1UZXh0OiB7XG4gIC8vICAgICByb290OiB7XG4gIC8vICAgICAgIG1hcmdpblRvcDogMCxcbiAgLy8gICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAvLyAgICAgfSxcbiAgLy8gICB9LFxuICAvLyB9LFxuICAvLyBzaGFkb3dzOiBbJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnLCdub25lJywnbm9uZScsJ25vbmUnXSxcbn0pO1xuXG5leHBvcnQgY29uc3QgdGhlbWUyID0gZXh0ZW5kVGhlbWUoe1xuICAvLyBwYWxldHRlOiB7XG4gIC8vICAgcHJpbWFyeToge1xuICAvLyAgICAgbWFpbjogJyMwMDAnLFxuICAvLyAgICAgbGlnaHQ6ICcjMDAwJyxcbiAgLy8gICAgIGRhcms6ICcjMDAwJyxcbiAgLy8gICB9LFxuICAvLyB9LFxuICAvLyB0eXBvZ3JhcGh5OiB7XG4gICAgLy8gZm9udEZhbWlseTogWydDb21mb3J0YWEnLCAnc2Fucy1zZXJpZiddLmpvaW4oJywnKSxcbiAgICAvLyBoMToge1xuICAgIC8vICAgZm9udFNpemU6IFwiNnJlbVwiLFxuICAgIC8vICAgW2JyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAvLyAgICAgZm9udFNpemU6IFwiM3JlbVwiXG4gICAgLy8gICB9XG4gICAgLy8gfSxcbiAgICAvLyBoMjoge1xuICAgIC8vICAgZm9udFNpemU6IFwiMy43NXJlbVwiLFxuICAgIC8vICAgW2JyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAvLyAgICAgZm9udFNpemU6IFwiMi4ycmVtXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIC8vIGgzOiB7XG4gICAgLy8gICBmb250U2l6ZTogXCIzcmVtXCIsXG4gICAgLy8gICBbYnJlYWtwb2ludHMuZG93bihcInhzXCIpXToge1xuICAgIC8vICAgICBmb250U2l6ZTogXCIycmVtXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIC8vIGg0OiB7XG4gICAgLy8gICBmb250U2l6ZTogXCIyLjEyNXJlbVwiLFxuICAgIC8vICAgW2JyZWFrcG9pbnRzLmRvd24oXCJ4c1wiKV06IHtcbiAgICAvLyAgICAgZm9udFNpemU6IFwiMS44cmVtXCJcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIC8vIH0sXG4gIC8vIG92ZXJyaWRlczoge1xuICAvLyAgIE11aUJ1dHRvbjoge1xuICAvLyAgICAgbGFiZWw6IHtcbiAgLy8gICAgICAgZm9udFNpemU6IDIwLFxuICAvLyAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gIC8vICAgICB9LFxuICAgICAgXG4gIC8vICAgfVxuICAvLyB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./imports/theme/build.tsx\n");

/***/ })

})