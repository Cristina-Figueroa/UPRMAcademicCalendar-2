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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidelinesTableStyles */ \"(app-pages-browser)/./app/components/GuidelinesTableStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst GuidelinesTable = ()=>{\n    _s();\n    const [guidelines, setGuidelines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    // Table Components\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5); // Set 5 as default number of rows per page\n    const indexOfLastRow = currentPage * rowsPerPage;\n    const indexOfFirstRow = indexOfLastRow - rowsPerPage;\n    const currentGuidelines = guidelines.slice(indexOfFirstRow, indexOfLastRow);\n    const totalPages = Math.ceil(guidelines.length / rowsPerPage);\n    const handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newPage)=>{\n        if (newPage >= 1 && newPage <= totalPages) {\n            setCurrentPage(newPage);\n        }\n    }, [\n        totalPages\n    ]);\n    const handleRowsPerPageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        setRowsPerPage(parseInt(event.target.value, 10));\n        setCurrentPage(1);\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch guidelines from DB\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGuidelines = async ()=>{\n            setLoading(true);\n            try {\n                const response = await fetch(\"http://127.0.0.1:5000/guidelines/\", {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setGuidelines(data); // Save fetched guidelines to state\n            } catch (err) {\n                console.error(\"Error fetching guidelines:\", err);\n                setError(err.message); // Save error to state for display\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGuidelines();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n        theme: theme,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.StyledTable, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                    theme: theme,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderRow, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                theme: theme,\n                                children: \"Name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 112,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                theme: theme,\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 113,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                        lineNumber: 111,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 110,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                    children: guidelines.map((guideline, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            theme: theme,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DateCell, {\n                                    theme: theme,\n                                    children: guideline[1]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    theme: theme,\n                                    children: guideline[2]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 122,\n                            columnNumber: 15\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 120,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n            lineNumber: 109,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GuidelinesTable, \"dSfDJPXXG8NjW8V1ckHPZB60l0U=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = GuidelinesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidelinesTable);\nvar _c;\n$RefreshReg$(_c, \"GuidelinesTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZ0U7QUFDekI7QUFDUztBQThCZjtBQUtqQyxNQUFNZ0Msa0JBQWtCOztJQUNwQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2hDLCtDQUFRQSxDQUFDLEVBQUU7SUFDL0MsTUFBTSxDQUFDaUMsT0FBT0MsU0FBUyxHQUFHbEMsK0NBQVFBLENBQUM7SUFFbkMsTUFBTW1DLFFBQVFoQyxnRUFBUUE7SUFFdEIsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQ2lDLGFBQWFDLGVBQWUsR0FBR3JDLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ3NDLGFBQWFDLGVBQWUsR0FBR3ZDLCtDQUFRQSxDQUFDLElBQUksMkNBQTJDO0lBQzlGLE1BQU13QyxpQkFBaUJKLGNBQWNFO0lBQ3JDLE1BQU1HLGtCQUFrQkQsaUJBQWlCRjtJQUN6QyxNQUFNSSxvQkFBb0JYLFdBQVdZLEtBQUssQ0FBQ0YsaUJBQWlCRDtJQUM1RCxNQUFNSSxhQUFhQyxLQUFLQyxJQUFJLENBQUNmLFdBQVdnQixNQUFNLEdBQUdUO0lBRWpELE1BQU1VLG1CQUFtQi9DLGtEQUFXQSxDQUFDLENBQUNnRDtRQUNwQyxJQUFJQSxXQUFXLEtBQUtBLFdBQVdMLFlBQVk7WUFDekNQLGVBQWVZO1FBQ2pCO0lBQ0YsR0FBRztRQUFDTDtLQUFXO0lBRWYsTUFBTU0sMEJBQTBCakQsa0RBQVdBLENBQUMsQ0FBQ2tEO1FBQzNDWixlQUFlYSxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM1Q2pCLGVBQWU7SUFDakIsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHeEQsK0NBQVFBLENBQUM7SUFPdkMsMkJBQTJCO0lBQzNCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU0wRCxrQkFBa0I7WUFDdEJELFdBQVc7WUFDVCxJQUFJO2dCQUNBLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzlEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNMLGdCQUFnQjtvQkFDcEI7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkwsU0FBU00sTUFBTTtnQkFDMUQ7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO2dCQUNoQ2xDLGNBQWNpQyxPQUFPLG1DQUFtQztZQUM1RCxFQUFFLE9BQU9FLEtBQUs7Z0JBQ1ZDLFFBQVFuQyxLQUFLLENBQUMsOEJBQThCa0M7Z0JBQzVDakMsU0FBU2lDLElBQUlFLE9BQU8sR0FBRyxrQ0FBa0M7WUFDN0QsU0FBVTtnQkFDUmIsV0FBVztZQUNiO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFPSCxxQkFDSSw4REFBQ3JELGtFQUFjQTtRQUFDK0IsT0FBT0E7a0JBRXZCLDRFQUFDOUIsK0RBQVdBOzs4QkFDViw4REFBQ0MsK0RBQVdBO29CQUFDNkIsT0FBT0E7OEJBQ2xCLDRFQUFDNUIsa0VBQWNBOzswQ0FDYiw4REFBQ0MsbUVBQWVBO2dDQUFDMkIsT0FBT0E7MENBQU87Ozs7OzswQ0FDL0IsOERBQUMzQixtRUFBZUE7Z0NBQUMyQixPQUFPQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT25DLDhEQUFDekIsNkRBQVNBOzhCQUNQcUIsV0FBV3VDLEdBQUcsQ0FBQyxDQUFDQyxXQUFXQyxzQkFDMUIsOERBQUM3RCw0REFBUUE7NEJBQWF3QixPQUFPQTs7OENBQzNCLDhEQUFDdEIsNERBQVFBO29DQUFDc0IsT0FBT0E7OENBQVFvQyxTQUFTLENBQUMsRUFBRTs7Ozs7OzhDQUNyQyw4REFBQzNELDZEQUFTQTtvQ0FBQ3VCLE9BQU9BOzhDQUFRb0MsU0FBUyxDQUFDLEVBQUU7Ozs7Ozs7MkJBRnpCQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzdCO0dBaEdNMUM7O1FBSVkzQiw0REFBUUE7OztLQUpwQjJCO0FBa0dOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanM/MTE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSAsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgVGFibGVDb250YWluZXIsXHJcbiAgU3R5bGVkVGFibGUsXHJcbiAgVGFibGVIZWFkZXIsXHJcbiAgVGFibGVIZWFkZXJSb3csXHJcbiAgVGFibGVIZWFkZXJDZWxsLFxyXG4gIFRhYmxlSGVhZGVyQWN0aW9uQ2VsbCxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIERhdGVDZWxsLFxyXG4gIERlc2NyaXB0aW9uQ2VsbCxcclxuICBBY3Rpb25DZWxsLFxyXG4gIFNhdmVCdXR0b25DZWxsLFxyXG4gIFRhYmxlRm9vdGVyLFxyXG4gIFRhYmxlRm9vdGVyUm93LFxyXG4gIFRhYmxlRm9vdGVyQ2VsbCxcclxuICBDb250YWluZXIsXHJcbiAgQ2VudGVyLFxyXG4gIFJpZ2h0LFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBTdHlsZWRTZWxlY3QsXHJcbiAgU3R5bGVkSW5wdXQsXHJcbiAgQWRkQnV0dG9uLFxyXG4gIENhbmNlbEJ1dHRvbixcclxuICBFZGl0QnV0dG9uLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxufSBmcm9tICcuL0d1aWRlbGluZXNUYWJsZVN0eWxlcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBHdWlkZWxpbmVzVGFibGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZ3VpZGVsaW5lcywgc2V0R3VpZGVsaW5lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIFxyXG4gICAgLy8gVGFibGUgQ29tcG9uZW50c1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gdXNlU3RhdGUoNSk7IC8vIFNldCA1IGFzIGRlZmF1bHQgbnVtYmVyIG9mIHJvd3MgcGVyIHBhZ2VcclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0Um93ID0gY3VycmVudFBhZ2UgKiByb3dzUGVyUGFnZTtcclxuICAgIGNvbnN0IGluZGV4T2ZGaXJzdFJvdyA9IGluZGV4T2ZMYXN0Um93IC0gcm93c1BlclBhZ2U7XHJcbiAgICBjb25zdCBjdXJyZW50R3VpZGVsaW5lcyA9IGd1aWRlbGluZXMuc2xpY2UoaW5kZXhPZkZpcnN0Um93LCBpbmRleE9mTGFzdFJvdyk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGd1aWRlbGluZXMubGVuZ3RoIC8gcm93c1BlclBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3UGFnZSkgPT4ge1xyXG4gICAgICBpZiAobmV3UGFnZSA+PSAxICYmIG5ld1BhZ2UgPD0gdG90YWxQYWdlcykge1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbdG90YWxQYWdlc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJvd3NQZXJQYWdlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICAgIHNldFJvd3NQZXJQYWdlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gRmV0Y2ggZ3VpZGVsaW5lcyBmcm9tIERCXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaEd1aWRlbGluZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2d1aWRlbGluZXMvJywge1xyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgIHNldEd1aWRlbGluZXMoZGF0YSk7IC8vIFNhdmUgZmV0Y2hlZCBndWlkZWxpbmVzIHRvIHN0YXRlXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBndWlkZWxpbmVzOicsIGVycik7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpOyAvLyBTYXZlIGVycm9yIHRvIHN0YXRlIGZvciBkaXNwbGF5XHJcbiAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfTtcclxuICBcclxuICAgICAgZmV0Y2hHdWlkZWxpbmVzKCk7XHJcbiAgfSwgW10pO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRhYmxlQ29udGFpbmVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgey8qIDxUYWJsZVRpdGxlIHRoZW1lPXt0aGVtZX0+R3VpZGVsaW5lczwvVGFibGVUaXRsZT4gKi99XHJcbiAgICAgICAgPFN0eWxlZFRhYmxlPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlclJvdz5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+TmFtZTwvVGFibGVIZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5EZXNjcmlwdGlvbjwvVGFibGVIZWFkZXJDZWxsPlxyXG5cclxuICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PnNoaWZ0X2RheXM8L1RhYmxlSGVhZGVyQ2VsbD4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5kYXlfdHlwZTwvVGFibGVIZWFkZXJDZWxsPiAqL31cclxuICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PnN0YXJ0PC9UYWJsZUhlYWRlckNlbGw+ICovfVxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHtndWlkZWxpbmVzLm1hcCgoZ3VpZGVsaW5lLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fSB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgPERhdGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVsxXX08L0RhdGVDZWxsPiBcclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzJdfTwvVGFibGVDZWxsPiBcclxuICAgICAgICAgICAgICB7LyogRGVzY3JpcHRpb246IFN0YXJ0cyBjb3VudGluZyB7c2hpZnRfZGF5c30ge2RheV90eXBlfSBmcm9tIHtzdGFydGRhdGV9ICovfVxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVsyXX08L1RhYmxlQ2VsbD4gICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzNdfTwvVGFibGVDZWxsPiAgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbNF19PC9UYWJsZUNlbGw+ICAqL31cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvU3R5bGVkVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3VpZGVsaW5lc1RhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwic3R5bGVkIiwidXNlVGhlbWUiLCJUYWJsZUNvbnRhaW5lciIsIlN0eWxlZFRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZUhlYWRlclJvdyIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRhYmxlSGVhZGVyQWN0aW9uQ2VsbCIsIlRhYmxlQm9keSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiRGF0ZUNlbGwiLCJEZXNjcmlwdGlvbkNlbGwiLCJBY3Rpb25DZWxsIiwiU2F2ZUJ1dHRvbkNlbGwiLCJUYWJsZUZvb3RlciIsIlRhYmxlRm9vdGVyUm93IiwiVGFibGVGb290ZXJDZWxsIiwiQ29udGFpbmVyIiwiQ2VudGVyIiwiUmlnaHQiLCJOb3RpZmljYXRpb24iLCJTdHlsZWRTZWxlY3QiLCJTdHlsZWRJbnB1dCIsIkFkZEJ1dHRvbiIsIkNhbmNlbEJ1dHRvbiIsIkVkaXRCdXR0b24iLCJEZWxldGVCdXR0b24iLCJHdWlkZWxpbmVzVGFibGUiLCJndWlkZWxpbmVzIiwic2V0R3VpZGVsaW5lcyIsImVycm9yIiwic2V0RXJyb3IiLCJ0aGVtZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaW5kZXhPZkxhc3RSb3ciLCJpbmRleE9mRmlyc3RSb3ciLCJjdXJyZW50R3VpZGVsaW5lcyIsInNsaWNlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaGFuZGxlUGFnZUNoYW5nZSIsIm5ld1BhZ2UiLCJoYW5kbGVSb3dzUGVyUGFnZUNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hHdWlkZWxpbmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibWVzc2FnZSIsIm1hcCIsImd1aWRlbGluZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Guidelines.js\n"));

/***/ })

});