"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/page",{

/***/ "(app-pages-browser)/./app/components/Home.js":
/*!********************************!*\
  !*** ./app/components/Home.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _BasicSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BasicSelect */ \"(app-pages-browser)/./app/components/BasicSelect.js\");\n/* harmony import */ var _DatePicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DatePicker */ \"(app-pages-browser)/./app/components/DatePicker.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Button */ \"(app-pages-browser)/./app/components/Button.js\");\n/* harmony import */ var _Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Alert */ \"(app-pages-browser)/./app/components/Alert.js\");\n/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoadingSpinner */ \"(app-pages-browser)/./app/components/LoadingSpinner.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"(app-pages-browser)/./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  font-family: Arial, sans-serif;\\n  line-height: 1.6;\\n  margin: 0;\\n  padding: 20px;\\n  margin-top: -40px;\\n  color: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  // color: #2c3e50;\\n  color: \",\n        \";\\n  // text-align: center;\\n  margin-bottom: 20px;\\n  margin-top: 10px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  // color: #34495e;\\n  color: \",\n        \";\\n  margin-top: 20px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  margin-bottom: 15px;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center; /* Centers the content horizontally */\\n  justify-content: center; /* Centers the content vertically */\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n// import { useNavigate } from 'react-router-dom';\n\n\n\n\n\n\n\n\nconst PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject(), (param)=>{\n    let { theme } = param;\n    return theme.palette.mode === \"dark\" ? theme.palette.text.primary : theme.palette.text.primary;\n});\n_c = PageContainer;\nconst Header = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h1(_templateObject1(), (param)=>{\n    let { theme } = param;\n    return theme.palette.mode === \"dark\" ? theme.palette.text.primary : theme.palette.text.primary;\n});\nconst SubHeader = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h2(_templateObject2(), (param)=>{\n    let { theme } = param;\n    return theme.palette.mode === \"dark\" ? theme.palette.text.primary : theme.palette.text.primary;\n});\nconst Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].p(_templateObject3());\nconst Center = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c1 = Center;\nfunction Home() {\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [startDate, setStartDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [academicPeriod, setAcademicPeriod] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"fall\"); // Default to 'fall'\n    const [responseMessage, setResponseMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"); // For displaying error messages\n    const [holidays, setHolidays] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); //State to get holidays\n    const [importantDates, setImportantDates] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // Yes!\n    /**\r\n * Handles the operations of selecting an academic period and a\r\n * startDate, passing them to Flask and returning them to frontend\r\n * @returns academicPeriod, startDate\r\n */ const submitDates = ()=>{\n        // Handle Errors\n        if (!startDate) {\n            // message = 'Please select a start date' \n            setErrorMessage(\"Please select a start date\");\n            return;\n        }\n        // Academic period has default set to fall\n        // Convert startDate to a Date object (if it's not already one)\n        const dateObject = new Date(startDate);\n        // Extract the month (0-based, so January is 0, December is 11)\n        const month = dateObject.getMonth();\n        let period = \"\"; // To store the academic period\n        let weeks = 0; // To store the number of weeks\n        period = academicPeriod;\n        // Check the month and determine the period and weeks\n        if (month === 7 && academicPeriod === \"fall\" || month === 8 && academicPeriod === \"fall\") {\n            weeks = 15;\n        } else if (month === 0 && academicPeriod === \"spring\" || month === 1 && academicPeriod === \"spring\") {\n            weeks = 15;\n        } else if (month === 4 && academicPeriod === \"summerV1\" || month === 5 && academicPeriod === \"summerV1\") {\n            weeks = 4;\n        } else if (month === 4 && academicPeriod === \"summerExtended\" || month === 5 && academicPeriod === \"summerExtended\") {\n            weeks = 6;\n        } else if (month === 5 && academicPeriod === \"summerV2\" || month === 6 && academicPeriod === \"summerV2\") {\n            weeks = 4;\n        } else {\n            period = \"unknown\";\n            weeks = 0;\n            // message = 'Invalid start date for academic period'\n            setErrorMessage(\"Invalid start date for academic period. Please select another date for calendar.\");\n            return; // Exit if the date is invalid\n        }\n        // Clear error message if validation passes\n        setErrorMessage(\"\");\n        fetch(\"http://127.0.0.1:5000/submit-academic-period/\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                startDate: startDate,\n                // academicPeriod: academicPeriod,\n                academicPeriod: period,\n                weeks: weeks\n            })\n        }).then((response)=>{\n            if (!response.ok) {\n                throw new Error(\"Network response was not ok\");\n            }\n            return response.json();\n        }).then((data)=>{\n            console.log(\"Response from Flask:\", data);\n            setResponseMessage(data.message + \" - Date:\" + startDate + \" , Period: \" + period + \" , Weeks: \" + weeks);\n            setImportantDates(data.important_dates);\n            console.log(\"Updated responseMessage:\", responseMessage);\n            // Fetch important dates from the database after inserting them\n            fetchImportantDates(period, startDate);\n        }).catch((error)=>{\n            console.error(\"Error:\", error);\n            setErrorMessage(error.message);\n        });\n    };\n    /**\r\n * Handles Fetching the generated date from the database\r\n * @returns list of important_dates\r\n */ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(PageContainer, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Center, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_DatePicker__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            startDate: startDate,\n                            setStartDate: setStartDate\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                            lineNumber: 194,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 193,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Center, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_BasicSelect__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            academicPeriod: academicPeriod,\n                            setAcademicPeriod: setAcademicPeriod\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                            lineNumber: 201,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 200,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Center, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            handleClick: submitDates\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                            lineNumber: 207,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 206,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Center, {\n                        children: [\n                            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                style: {\n                                    color: \"red\"\n                                },\n                                children: errorMessage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                                lineNumber: 216,\n                                columnNumber: 34\n                            }, this),\n                            responseMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: responseMessage\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                                lineNumber: 219,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 215,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Center, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: importantDates.length > 0 ? importantDates.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: [\n                                            item.date,\n                                            \": \",\n                                            item.event\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                                        lineNumber: 231,\n                                        columnNumber: 27\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                                    lineNumber: 230,\n                                    columnNumber: 25\n                                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: \"No important dates available.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                                lineNumber: 235,\n                                columnNumber: 23\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                            lineNumber: 227,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n                        lineNumber: 225,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Home.js\",\n        lineNumber: 186,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"Mx/Wkd/uzxJb4uZUAU5hnTqrYGA=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n    ];\n});\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PageContainer\");\n$RefreshReg$(_c1, \"Center\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hvbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXdDO0FBQ3hDLGtEQUFrRDtBQUNGO0FBQ1I7QUFDTztBQUNSO0FBQ0M7QUFDTztBQUdSO0FBQ1M7QUFFaEQsTUFBTVcsZ0JBQWdCRix5REFBTUEsQ0FBQ0csR0FBRyxvQkFNckI7UUFBQyxFQUFFQyxLQUFLLEVBQUU7V0FDbkJBLE1BQU1DLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLFNBQ25CRixNQUFNQyxPQUFPLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxHQUMxQkosTUFBTUMsT0FBTyxDQUFDRSxJQUFJLENBQUNDLE9BQU87O0tBVDFCTjtBQVlOLE1BQU1PLFNBQVNULHlEQUFNQSxDQUFDVSxFQUFFLHFCQUViO1FBQUMsRUFBRU4sS0FBSyxFQUFFO1dBQ25CQSxNQUFNQyxPQUFPLENBQUNDLElBQUksS0FBSyxTQUNuQkYsTUFBTUMsT0FBTyxDQUFDRSxJQUFJLENBQUNDLE9BQU8sR0FDMUJKLE1BQU1DLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPOztBQU1oQyxNQUFNRyxZQUFZWCx5REFBTUEsQ0FBQ1ksRUFBRSxxQkFFaEI7UUFBQyxFQUFFUixLQUFLLEVBQUU7V0FDbkJBLE1BQU1DLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLFNBQ25CRixNQUFNQyxPQUFPLENBQUNFLElBQUksQ0FBQ0MsT0FBTyxHQUMxQkosTUFBTUMsT0FBTyxDQUFDRSxJQUFJLENBQUNDLE9BQU87O0FBSWhDLE1BQU1LLFlBQVliLHlEQUFNQSxDQUFDYyxDQUFDO0FBSTFCLE1BQU1DLFNBQVNmLHlEQUFNQSxDQUFDRyxHQUFHO01BQW5CWTtBQU9OLFNBQVNDOztJQUNQLE1BQU1aLFFBQVFILGdFQUFRQTtJQUN0QixNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUcxQiwrQ0FB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QW1CQTs0QkFBQ3VCLFdBQVdBOzRCQUFXQyxjQUFjQTs7Ozs7Ozs7Ozs7a0NBTTNELDhEQUFDTDtrQ0FDQyw0RUFBQ3BCLG9EQUFXQTs0QkFBQzBCLGdCQUFnQkE7NEJBQWdCQyxtQkFBbUJBOzs7Ozs7Ozs7OztrQ0FLbEUsOERBQUNQO2tDQUNELDRFQUFDbEIsK0NBQWVBOzRCQUFDNEQsYUFBYTFCOzs7Ozs7Ozs7OztrQ0FROUIsOERBQUNoQjs7NEJBQ0FVLDhCQUFnQiw4REFBQ1g7Z0NBQUU0QyxPQUFPO29DQUFFQyxPQUFPO2dDQUFNOzBDQUFJbEM7Ozs7Ozs0QkFHN0NGLGlDQUFtQiw4REFBQ1Q7MENBQUdTOzs7Ozs7Ozs7Ozs7a0NBTXhCLDhEQUFDUjtrQ0FFQyw0RUFBQ1o7c0NBQ0UwQixlQUFlK0IsTUFBTSxHQUFHLElBQ3ZCL0IsZUFBZWdDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDeEIsOERBQUM1RDs4Q0FDQyw0RUFBQ1c7OzRDQUFHZ0QsS0FBS0UsSUFBSTs0Q0FBQzs0Q0FBR0YsS0FBS0csS0FBSzs7Ozs7OzttQ0FEbkJGOzs7OzBEQUtaLDhEQUFDakQ7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl6QjtHQTFMU0U7O1FBQ09mLDREQUFRQTs7O01BRGZlO0FBNExULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0hvbWUuanM/ZDlmOSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5cclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgQm94LCBDb250YWluZXIsIH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBCYXNpY1NlbGVjdCBmcm9tICcuL0Jhc2ljU2VsZWN0JztcclxuaW1wb3J0IERhdGVQaWNrZXJDb21wb25lbnQgZnJvbSAnLi9EYXRlUGlja2VyJztcclxuaW1wb3J0IEJ1dHRvbkNvbXBvbmVudCBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCBEZXNjcmlwdGlvbkFsZXJ0cyBmcm9tICcuL0FsZXJ0JztcclxuaW1wb3J0IENpcmN1bGFyU3Bpbm5lciBmcm9tICcuL0xvYWRpbmdTcGlubmVyJztcclxuXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJztcclxuXHJcbmNvbnN0IFBhZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaydcclxuICAgID8gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgIDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgxYFxyXG4gIC8vIGNvbG9yOiAjMmMzZTUwO1xyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+XHJcbiAgdGhlbWUucGFsZXR0ZS5tb2RlID09PSAnZGFyaydcclxuICAgID8gdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnlcclxuICAgIDogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnl9O1xyXG4gIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJIZWFkZXIgPSBzdHlsZWQuaDJgXHJcbiAgLy8gY29sb3I6ICMzNDQ5NWU7XHJcbiAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT5cclxuICB0aGVtZS5wYWxldHRlLm1vZGUgPT09ICdkYXJrJ1xyXG4gICAgPyB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeVxyXG4gICAgOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeX07XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDZW50ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBjb250ZW50IGhvcml6b250YWxseSAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50ZXJzIHRoZSBjb250ZW50IHZlcnRpY2FsbHkgKi9cclxuYDtcclxuXHJcbmZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG4gIGNvbnN0IFtzdGFydERhdGUsIHNldFN0YXJ0RGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2FjYWRlbWljUGVyaW9kLCBzZXRBY2FkZW1pY1BlcmlvZF0gPSB1c2VTdGF0ZSgnZmFsbCcpOyAgLy8gRGVmYXVsdCB0byAnZmFsbCdcclxuICBjb25zdCBbcmVzcG9uc2VNZXNzYWdlLCBzZXRSZXNwb25zZU1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7ICAvLyBGb3IgZGlzcGxheWluZyBlcnJvciBtZXNzYWdlc1xyXG5cclxuXHJcbiAgY29uc3QgW2hvbGlkYXlzLCBzZXRIb2xpZGF5c10gPSB1c2VTdGF0ZShbXSk7IC8vU3RhdGUgdG8gZ2V0IGhvbGlkYXlzXHJcbiAgY29uc3QgW2ltcG9ydGFudERhdGVzLCBzZXRJbXBvcnRhbnREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAvLyBZZXMhXHJcblxyXG4vKipcclxuICogSGFuZGxlcyB0aGUgb3BlcmF0aW9ucyBvZiBzZWxlY3RpbmcgYW4gYWNhZGVtaWMgcGVyaW9kIGFuZCBhXHJcbiAqIHN0YXJ0RGF0ZSwgcGFzc2luZyB0aGVtIHRvIEZsYXNrIGFuZCByZXR1cm5pbmcgdGhlbSB0byBmcm9udGVuZFxyXG4gKiBAcmV0dXJucyBhY2FkZW1pY1BlcmlvZCwgc3RhcnREYXRlXHJcbiAqL1xyXG5cclxuICBjb25zdCBzdWJtaXREYXRlcyA9ICgpID0+IHtcclxuXHJcbiAgICAvLyBIYW5kbGUgRXJyb3JzXHJcbiAgICBpZiAoIXN0YXJ0RGF0ZSkge1xyXG4gICAgICAvLyBtZXNzYWdlID0gJ1BsZWFzZSBzZWxlY3QgYSBzdGFydCBkYXRlJyBcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQbGVhc2Ugc2VsZWN0IGEgc3RhcnQgZGF0ZScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBBY2FkZW1pYyBwZXJpb2QgaGFzIGRlZmF1bHQgc2V0IHRvIGZhbGxcclxuXHJcbiAgICAvLyBDb252ZXJ0IHN0YXJ0RGF0ZSB0byBhIERhdGUgb2JqZWN0IChpZiBpdCdzIG5vdCBhbHJlYWR5IG9uZSlcclxuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZShzdGFydERhdGUpO1xyXG5cclxuICAgIC8vIEV4dHJhY3QgdGhlIG1vbnRoICgwLWJhc2VkLCBzbyBKYW51YXJ5IGlzIDAsIERlY2VtYmVyIGlzIDExKVxyXG4gICAgY29uc3QgbW9udGggPSBkYXRlT2JqZWN0LmdldE1vbnRoKCk7IFxyXG4gICAgbGV0IHBlcmlvZCA9ICcnOyAvLyBUbyBzdG9yZSB0aGUgYWNhZGVtaWMgcGVyaW9kXHJcbiAgICBsZXQgd2Vla3MgPSAwOyAgIC8vIFRvIHN0b3JlIHRoZSBudW1iZXIgb2Ygd2Vla3NcclxuXHJcbiAgICBwZXJpb2QgPSBhY2FkZW1pY1BlcmlvZFxyXG5cclxuICAgIC8vIENoZWNrIHRoZSBtb250aCBhbmQgZGV0ZXJtaW5lIHRoZSBwZXJpb2QgYW5kIHdlZWtzXHJcbiAgICBpZiAobW9udGggPT09IDcgJiYgYWNhZGVtaWNQZXJpb2QgPT09ICdmYWxsJyB8fCBtb250aCA9PT0gOCAmJiBhY2FkZW1pY1BlcmlvZCA9PT0gJ2ZhbGwnKSB7IC8vIEF1Z3VzdCAoNykgb3IgU2VwdGVtYmVyICg4KVxyXG4gICAgICB3ZWVrcyA9IDE1O1xyXG4gICAgfSBlbHNlIGlmIChtb250aCA9PT0gMCAmJiBhY2FkZW1pY1BlcmlvZCA9PT0gJ3NwcmluZyd8fCBtb250aCA9PT0gMSAmJiBhY2FkZW1pY1BlcmlvZCA9PT0gJ3NwcmluZycpIHsgLy8gSmFudWFyeSAoMCkgb3IgRmVicnVhcnkgKDEpXHJcbiAgICAgIHdlZWtzID0gMTU7XHJcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSA0ICYmIGFjYWRlbWljUGVyaW9kID09PSAnc3VtbWVyVjEnfHwgbW9udGggPT09IDUgJiYgYWNhZGVtaWNQZXJpb2QgPT09ICdzdW1tZXJWMScpIHsgLy8gTWF5ICg0KSBvciBKdW5lICg1KVxyXG4gICAgICB3ZWVrcyA9IDQ7XHJcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSA0ICYmIGFjYWRlbWljUGVyaW9kID09PSAnc3VtbWVyRXh0ZW5kZWQnfHwgbW9udGggPT09IDUgJiYgYWNhZGVtaWNQZXJpb2QgPT09ICdzdW1tZXJFeHRlbmRlZCcpIHsgLy8gTWF5ICg0KSBvciBKdW5lICg1KVxyXG4gICAgICB3ZWVrcyA9IDY7XHJcbiAgICB9IGVsc2UgaWYgKG1vbnRoID09PSA1ICYmIGFjYWRlbWljUGVyaW9kID09PSAnc3VtbWVyVjInfHwgbW9udGggPT09IDYgJiYgYWNhZGVtaWNQZXJpb2QgPT09ICdzdW1tZXJWMicpIHsgLy8gTWF5ICg0KSBvciBKdW5lICg1KVxyXG4gICAgICB3ZWVrcyA9IDQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBwZXJpb2QgPSAndW5rbm93bic7XHJcbiAgICAgIHdlZWtzID0gMDtcclxuICAgICAgLy8gbWVzc2FnZSA9ICdJbnZhbGlkIHN0YXJ0IGRhdGUgZm9yIGFjYWRlbWljIHBlcmlvZCdcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdJbnZhbGlkIHN0YXJ0IGRhdGUgZm9yIGFjYWRlbWljIHBlcmlvZC4gUGxlYXNlIHNlbGVjdCBhbm90aGVyIGRhdGUgZm9yIGNhbGVuZGFyLicpO1xyXG4gICAgICByZXR1cm47IC8vIEV4aXQgaWYgdGhlIGRhdGUgaXMgaW52YWxpZFxyXG4gICAgfVxyXG4gIC8vIENsZWFyIGVycm9yIG1lc3NhZ2UgaWYgdmFsaWRhdGlvbiBwYXNzZXNcclxuICAgIHNldEVycm9yTWVzc2FnZSgnJyk7XHJcblxyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9zdWJtaXQtYWNhZGVtaWMtcGVyaW9kLycsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgc3RhcnREYXRlOiBzdGFydERhdGUsXHJcbiAgICAgICAgLy8gYWNhZGVtaWNQZXJpb2Q6IGFjYWRlbWljUGVyaW9kLFxyXG4gICAgICAgIGFjYWRlbWljUGVyaW9kOiBwZXJpb2QsXHJcbiAgICAgICAgd2Vla3M6IHdlZWtzLFxyXG4gICAgICB9KSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIGZyb20gRmxhc2s6JywgZGF0YSk7XHJcbiAgICAgICAgc2V0UmVzcG9uc2VNZXNzYWdlKFxyXG4gICAgICAgICAgZGF0YS5tZXNzYWdlICsgJyAtIERhdGU6JyArIHN0YXJ0RGF0ZSArICcgLCBQZXJpb2Q6ICcgKyBwZXJpb2QgKyAnICwgV2Vla3M6ICcgKyB3ZWVrc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0SW1wb3J0YW50RGF0ZXMoZGF0YS5pbXBvcnRhbnRfZGF0ZXMpOyBcclxuICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlZCByZXNwb25zZU1lc3NhZ2U6JywgcmVzcG9uc2VNZXNzYWdlKTsgXHJcbiAgICAgICAgLy8gRmV0Y2ggaW1wb3J0YW50IGRhdGVzIGZyb20gdGhlIGRhdGFiYXNlIGFmdGVyIGluc2VydGluZyB0aGVtXHJcbiAgICAgICAgZmV0Y2hJbXBvcnRhbnREYXRlcyhwZXJpb2QsIHN0YXJ0RGF0ZSk7IFxyXG4gICBcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH0pOyAgICAgIFxyXG4gIH07XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICogSGFuZGxlcyBGZXRjaGluZyB0aGUgZ2VuZXJhdGVkIGRhdGUgZnJvbSB0aGUgZGF0YWJhc2VcclxuICogQHJldHVybnMgbGlzdCBvZiBpbXBvcnRhbnRfZGF0ZXNcclxuICovXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxQYWdlQ29udGFpbmVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICB7LyogPENpcmN1bGFyU3Bpbm5lciBsb2FkaW5nPXtpc0xvYWRpbmd9Lz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIHshaXNMb2FkaW5nICYmICggKi99XHJcblxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgey8qIERhdGUgUGlja2VyICovfVxyXG4gICAgICAgICAgICAgICAgPENlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPERhdGVQaWNrZXJDb21wb25lbnQgc3RhcnREYXRlPXtzdGFydERhdGV9IHNldFN0YXJ0RGF0ZT17c2V0U3RhcnREYXRlfS8+XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIEJhc2ljU2VsZWN0ICovfVxyXG4gICAgICAgICAgICAgICAgPENlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgPEJhc2ljU2VsZWN0IGFjYWRlbWljUGVyaW9kPXthY2FkZW1pY1BlcmlvZH0gc2V0QWNhZGVtaWNQZXJpb2Q9e3NldEFjYWRlbWljUGVyaW9kfS8+XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogQnV0dG9uICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxDZW50ZXI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uQ29tcG9uZW50IGhhbmRsZUNsaWNrPXtzdWJtaXREYXRlc30vPiAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1lc3NhZ2VzICovfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogRGlzcGxheSBlcnJvciBtZXNzYWdlIGlmIHZhbGlkYXRpb24gZmFpbHMgKi99XHJcbiAgICAgICAgICAgICAgICB7Lyoge2Vycm9yTWVzc2FnZSAmJiA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbic+IDxEZXNjcmlwdGlvbkFsZXJ0cyBlcnJvcj17ZXJyb3JNZXNzYWdlfSAvPiA8L2Rpdj59ICovfVxyXG4gICAgICAgICAgICAgICAgPENlbnRlcj5cclxuICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvck1lc3NhZ2V9PC9wPn1cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogRGlzcGxheSBtZXNzYWdlIGlmIHZhbGlkYXRpb24gaXMgcGFzc2VkICovfVxyXG4gICAgICAgICAgICAgICAge3Jlc3BvbnNlTWVzc2FnZSAmJiA8cD57cmVzcG9uc2VNZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICB7LyogSW1wb3J0YW50IERhdGVzICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbXBvcnRhbnREYXRlcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgaW1wb3J0YW50RGF0ZXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmRhdGV9OiB7aXRlbS5ldmVudH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+Tm8gaW1wb3J0YW50IGRhdGVzIGF2YWlsYWJsZS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9DZW50ZXI+XHJcbiAgICAgICAgPC8+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgey8qIC8vICl9ICovfVxyXG4gICAgICBcclxuICAgICAgIDwvPiAgICAgICBcclxuICAgIDwvUGFnZUNvbnRhaW5lcj5cclxuICAgIFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiQ29udGFpbmVyIiwiQmFzaWNTZWxlY3QiLCJEYXRlUGlja2VyQ29tcG9uZW50IiwiQnV0dG9uQ29tcG9uZW50IiwiRGVzY3JpcHRpb25BbGVydHMiLCJDaXJjdWxhclNwaW5uZXIiLCJzdHlsZWQiLCJ1c2VUaGVtZSIsIlBhZ2VDb250YWluZXIiLCJkaXYiLCJ0aGVtZSIsInBhbGV0dGUiLCJtb2RlIiwidGV4dCIsInByaW1hcnkiLCJIZWFkZXIiLCJoMSIsIlN1YkhlYWRlciIsImgyIiwiUGFyYWdyYXBoIiwicCIsIkNlbnRlciIsIkhvbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJzdGFydERhdGUiLCJzZXRTdGFydERhdGUiLCJhY2FkZW1pY1BlcmlvZCIsInNldEFjYWRlbWljUGVyaW9kIiwicmVzcG9uc2VNZXNzYWdlIiwic2V0UmVzcG9uc2VNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwiaG9saWRheXMiLCJzZXRIb2xpZGF5cyIsImltcG9ydGFudERhdGVzIiwic2V0SW1wb3J0YW50RGF0ZXMiLCJzdWJtaXREYXRlcyIsImRhdGVPYmplY3QiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsInBlcmlvZCIsIndlZWtzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImltcG9ydGFudF9kYXRlcyIsImZldGNoSW1wb3J0YW50RGF0ZXMiLCJjYXRjaCIsImVycm9yIiwiaGFuZGxlQ2xpY2siLCJzdHlsZSIsImNvbG9yIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImluZGV4IiwiZGF0ZSIsImV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Home.js\n"));

/***/ })

});