"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/guidelines/page",{

/***/ "(app-pages-browser)/./app/components/Guidelines.js":
/*!**************************************!*\
  !*** ./app/components/Guidelines.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidelinesTableStyles */ \"(app-pages-browser)/./app/components/GuidelinesTableStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst GuidelinesTable = ()=>{\n    _s();\n    const [guidelines, setGuidelines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    // Table Components\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5); // Set 5 as default number of rows per page\n    const indexOfLastRow = currentPage * rowsPerPage;\n    const indexOfFirstRow = indexOfLastRow - rowsPerPage;\n    const currentGuidelines = guidelines.slice(indexOfFirstRow, indexOfLastRow);\n    const totalPages = Math.ceil(guidelines.length / rowsPerPage);\n    const handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newPage)=>{\n        if (newPage >= 1 && newPage <= totalPages) {\n            setCurrentPage(newPage);\n        }\n    }, [\n        totalPages\n    ]);\n    const handleRowsPerPageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        setRowsPerPage(parseInt(event.target.value, 10));\n        setCurrentPage(1);\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch guidelines from DB\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGuidelines = async ()=>{\n            setLoading(true);\n            try {\n                const response = await fetch(\"http://127.0.0.1:5000/guidelines/\", {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setGuidelines(data); // Save fetched guidelines to state\n            } catch (err) {\n                console.error(\"Error fetching guidelines:\", err);\n                setError(err.message); // Save error to state for display\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGuidelines();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.StyledTable, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                    theme: theme,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                theme: theme,\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                theme: theme,\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderActionCell, {\n                                theme: theme,\n                                children: \"Actions\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 114,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                    children: guidelines.map((guideline, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            theme: theme,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DateCell, {\n                                    theme: theme,\n                                    children: guideline[1]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    theme: theme,\n                                    children: \"Starts counting \".concat(guideline[2], \" \").concat(guideline[3], \" days from your chosen startdate\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 123,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 121,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n            lineNumber: 109,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GuidelinesTable, \"dSfDJPXXG8NjW8V1ckHPZB60l0U=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = GuidelinesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidelinesTable);\nvar _c;\n$RefreshReg$(_c, \"GuidelinesTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZ0U7QUFDekI7QUFDUztBQThCZjtBQUtqQyxNQUFNZ0Msa0JBQWtCOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2hDLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDaUMsT0FBT0MsU0FBUyxHQUFHbEMsK0NBQVFBLENBQUM7SUFFbkMsTUFBTW1DLFFBQVFoQyxnRUFBUUE7SUFFdEIsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQ2lDLGFBQWFDLGVBQWUsR0FBR3JDLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3NDLGFBQWFDLGVBQWUsR0FBR3ZDLCtDQUFRQSxDQUFDLElBQUksMkNBQTJDO0lBQzlGLE1BQU13QyxpQkFBaUJKLGNBQWNFO0lBQ3JDLE1BQU1HLGtCQUFrQkQsaUJBQWlCRjtJQUN6QyxNQUFNSSxvQkFBb0JYLFdBQVdZLEtBQUssQ0FBQ0YsaUJBQWlCRDtJQUM1RCxNQUFNSSxhQUFhQyxLQUFLQyxJQUFJLENBQUNmLFdBQVdnQixNQUFNLEdBQUdUO0lBRWpELE1BQU1VLG1CQUFtQi9DLGtEQUFXQSxDQUFDLENBQUNnRDtRQUNwQyxJQUFJQSxXQUFXLEtBQUtBLFdBQVdMLFlBQVk7WUFDekNQLGVBQWVZO1FBQ2pCO0lBQ0YsR0FBRztRQUFDTDtLQUFXO0lBRWYsTUFBTU0sMEJBQTBCakQsa0RBQVdBLENBQUMsQ0FBQ2tEO1FBQzNDWixlQUFlYSxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM1Q2pCLGVBQWU7SUFDakIsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHeEQsK0NBQVFBLENBQUM7SUFPdkMsMkJBQTJCO0lBQzNCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU0wRCxrQkFBa0I7WUFDdEJELFdBQVc7WUFDVCxJQUFJO2dCQUNBLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzlEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNMLGdCQUFnQjtvQkFDcEI7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkwsU0FBU00sTUFBTTtnQkFDMUQ7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO2dCQUNoQ2xDLGNBQWNpQyxPQUFPLG1DQUFtQztZQUM1RCxFQUFFLE9BQU9FLEtBQUs7Z0JBQ1ZDLFFBQVFuQyxLQUFLLENBQUMsOEJBQThCa0M7Z0JBQzVDakMsU0FBU2lDLElBQUlFLE9BQU8sR0FBRyxrQ0FBa0M7WUFDN0QsU0FBVTtnQkFDUmIsV0FBVztZQUNiO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFPSCxxQkFDSSw4REFBQ3JELGtFQUFjQTtRQUFDK0IsT0FBT0E7a0JBRXZCLDRFQUFDOUIsK0RBQVdBOzs4QkFDViw4REFBQ0MsK0RBQVdBO29CQUFDNkIsT0FBT0E7OEJBQ2xCLDRFQUFDNUIsa0VBQWNBOzswQ0FDYiw4REFBQ0MsbUVBQWVBO2dDQUFDMkIsT0FBT0E7MENBQU87Ozs7OzswQ0FDL0IsOERBQUMzQixtRUFBZUE7Z0NBQUMyQixPQUFPQTswQ0FBTzs7Ozs7OzBDQUMvQiw4REFBQzFCLHlFQUFxQkE7Z0NBQUMwQixPQUFPQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT3pDLDhEQUFDekIsNkRBQVNBOzhCQUNQcUIsV0FBV3VDLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDMUIsOERBQUM3RCw0REFBUUE7NEJBQWF3QixPQUFPQTs7OENBQzNCLDhEQUFDdEIsNERBQVFBO29DQUFDc0IsT0FBT0E7OENBQVFvQyxTQUFTLENBQUMsRUFBRTs7Ozs7OzhDQUNyQyw4REFBQzNELDZEQUFTQTtvQ0FBQ3VCLE9BQU9BOzhDQUVuQixtQkFBbUNvQyxPQUFoQkEsU0FBUyxDQUFDLEVBQUUsRUFBQyxLQUFnQixPQUFiQSxTQUFTLENBQUMsRUFBRSxFQUFDOzs7Ozs7OzJCQUpsQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCN0I7R0F4R00xQzs7UUFJWTNCLDREQUFRQTs7O0tBSnBCMkI7QUEwR04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvR3VpZGVsaW5lcy5qcz8xMTYzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlICwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcblxyXG5cclxuaW1wb3J0IHtcclxuICBUYWJsZUNvbnRhaW5lcixcclxuICBTdHlsZWRUYWJsZSxcclxuICBUYWJsZUhlYWRlcixcclxuICBUYWJsZUhlYWRlclJvdyxcclxuICBUYWJsZUhlYWRlckNlbGwsXHJcbiAgVGFibGVIZWFkZXJBY3Rpb25DZWxsLFxyXG4gIFRhYmxlQm9keSxcclxuICBUYWJsZVJvdyxcclxuICBUYWJsZUNlbGwsXHJcbiAgRGF0ZUNlbGwsXHJcbiAgRGVzY3JpcHRpb25DZWxsLFxyXG4gIEFjdGlvbkNlbGwsXHJcbiAgU2F2ZUJ1dHRvbkNlbGwsXHJcbiAgVGFibGVGb290ZXIsXHJcbiAgVGFibGVGb290ZXJSb3csXHJcbiAgVGFibGVGb290ZXJDZWxsLFxyXG4gIENvbnRhaW5lcixcclxuICBDZW50ZXIsXHJcbiAgUmlnaHQsXHJcbiAgTm90aWZpY2F0aW9uLFxyXG4gIFN0eWxlZFNlbGVjdCxcclxuICBTdHlsZWRJbnB1dCxcclxuICBBZGRCdXR0b24sXHJcbiAgQ2FuY2VsQnV0dG9uLFxyXG4gIEVkaXRCdXR0b24sXHJcbiAgRGVsZXRlQnV0dG9uLFxyXG59IGZyb20gJy4vR3VpZGVsaW5lc1RhYmxlU3R5bGVzJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEd1aWRlbGluZXNUYWJsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtndWlkZWxpbmVzLCBzZXRHdWlkZWxpbmVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgXHJcbiAgICAvLyBUYWJsZSBDb21wb25lbnRzXHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTsgLy8gU2V0IDUgYXMgZGVmYXVsdCBudW1iZXIgb2Ygcm93cyBwZXIgcGFnZVxyXG4gICAgY29uc3QgaW5kZXhPZkxhc3RSb3cgPSBjdXJyZW50UGFnZSAqIHJvd3NQZXJQYWdlO1xyXG4gICAgY29uc3QgaW5kZXhPZkZpcnN0Um93ID0gaW5kZXhPZkxhc3RSb3cgLSByb3dzUGVyUGFnZTtcclxuICAgIGNvbnN0IGN1cnJlbnRHdWlkZWxpbmVzID0gZ3VpZGVsaW5lcy5zbGljZShpbmRleE9mRmlyc3RSb3csIGluZGV4T2ZMYXN0Um93KTtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZ3VpZGVsaW5lcy5sZW5ndGggLyByb3dzUGVyUGFnZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdQYWdlKSA9PiB7XHJcbiAgICAgIGlmIChuZXdQYWdlID49IDEgJiYgbmV3UGFnZSA8PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFt0b3RhbFBhZ2VzXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm93c1BlclBhZ2VDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgICAgc2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgICBzZXRDdXJyZW50UGFnZSgxKTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBGZXRjaCBndWlkZWxpbmVzIGZyb20gREJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoR3VpZGVsaW5lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvZ3VpZGVsaW5lcy8nLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgc2V0R3VpZGVsaW5lcyhkYXRhKTsgLy8gU2F2ZSBmZXRjaGVkIGd1aWRlbGluZXMgdG8gc3RhdGVcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGd1aWRlbGluZXM6JywgZXJyKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7IC8vIFNhdmUgZXJyb3IgdG8gc3RhdGUgZm9yIGRpc3BsYXlcclxuICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBmZXRjaEd1aWRlbGluZXMoKTtcclxuICB9LCBbXSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGFibGVDb250YWluZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICB7LyogPFRhYmxlVGl0bGUgdGhlbWU9e3RoZW1lfT5HdWlkZWxpbmVzPC9UYWJsZVRpdGxlPiAqL31cclxuICAgICAgICA8U3R5bGVkVGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5OYW1lPC9UYWJsZUhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PkRlc2NyaXB0aW9uPC9UYWJsZUhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQWN0aW9uQ2VsbCB0aGVtZT17dGhlbWV9PkFjdGlvbnM8L1RhYmxlSGVhZGVyQWN0aW9uQ2VsbD5cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5zaGlmdF9kYXlzPC9UYWJsZUhlYWRlckNlbGw+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+ZGF5X3R5cGU8L1RhYmxlSGVhZGVyQ2VsbD4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5zdGFydDwvVGFibGVIZWFkZXJDZWxsPiAqL31cclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlclJvdz5cclxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7Z3VpZGVsaW5lcy5tYXAoKGd1aWRlbGluZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0gdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxEYXRlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbMV19PC9EYXRlQ2VsbD4gXHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgey8qIERlc2NyaXB0aW9uOiBTdGFydHMgY291bnRpbmcge3NoaWZ0X2RheXN9IHtkYXlfdHlwZX0gZnJvbSB5b3VyIGRlc2lyZWQgc3RhcnRkYXRlICovfVxyXG4gICAgICAgICAgICAgIHtgU3RhcnRzIGNvdW50aW5nICR7Z3VpZGVsaW5lWzJdfSAke2d1aWRlbGluZVszXX0gZGF5cyBmcm9tIHlvdXIgY2hvc2VuIHN0YXJ0ZGF0ZWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPiBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVsyXX08L1RhYmxlQ2VsbD4gICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzNdfTwvVGFibGVDZWxsPiAgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbNF19PC9UYWJsZUNlbGw+ICAqL31cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvU3R5bGVkVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3VpZGVsaW5lc1RhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwic3R5bGVkIiwidXNlVGhlbWUiLCJUYWJsZUNvbnRhaW5lciIsIlN0eWxlZFRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZUhlYWRlclJvdyIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRhYmxlSGVhZGVyQWN0aW9uQ2VsbCIsIlRhYmxlQm9keSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiRGF0ZUNlbGwiLCJEZXNjcmlwdGlvbkNlbGwiLCJBY3Rpb25DZWxsIiwiU2F2ZUJ1dHRvbkNlbGwiLCJUYWJsZUZvb3RlciIsIlRhYmxlRm9vdGVyUm93IiwiVGFibGVGb290ZXJDZWxsIiwiQ29udGFpbmVyIiwiQ2VudGVyIiwiUmlnaHQiLCJOb3RpZmljYXRpb24iLCJTdHlsZWRTZWxlY3QiLCJTdHlsZWRJbnB1dCIsIkFkZEJ1dHRvbiIsIkNhbmNlbEJ1dHRvbiIsIkVkaXRCdXR0b24iLCJEZWxldGVCdXR0b24iLCJHdWlkZWxpbmVzVGFibGUiLCJndWlkZWxpbmVzIiwic2V0R3VpZGVsaW5lcyIsImVycm9yIiwic2V0RXJyb3IiLCJ0aGVtZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaW5kZXhPZkxhc3RSb3ciLCJpbmRleE9mRmlyc3RSb3ciLCJjdXJyZW50R3VpZGVsaW5lcyIsInNsaWNlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaGFuZGxlUGFnZUNoYW5nZSIsIm5ld1BhZ2UiLCJoYW5kbGVSb3dzUGVyUGFnZUNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hHdWlkZWxpbmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibWVzc2FnZSIsIm1hcCIsImd1aWRlbGluZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Guidelines.js\n"));

/***/ })

});