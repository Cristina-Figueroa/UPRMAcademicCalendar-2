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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Edit.js\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/ArrowBack.js\");\n/* harmony import */ var _GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidelinesTableStyles */ \"(app-pages-browser)/./app/components/GuidelinesTableStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst GuidelinesTable = ()=>{\n    _s();\n    const [guidelines, setGuidelines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Toggle Editing Mode\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleEditingMode = ()=>setIsEditing((prev)=>!prev);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    // Table Components\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5); // Set 5 as default number of rows per page\n    const indexOfLastRow = currentPage * rowsPerPage;\n    const indexOfFirstRow = indexOfLastRow - rowsPerPage;\n    const currentGuidelines = guidelines.slice(indexOfFirstRow, indexOfLastRow);\n    const totalPages = Math.ceil(guidelines.length / rowsPerPage);\n    const handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newPage)=>{\n        if (newPage >= 1 && newPage <= totalPages) {\n            setCurrentPage(newPage);\n        }\n    }, [\n        totalPages\n    ]);\n    const handleRowsPerPageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        setRowsPerPage(parseInt(event.target.value, 10));\n        setCurrentPage(1);\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch guidelines from DB\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGuidelines = async ()=>{\n            setLoading(true);\n            try {\n                const response = await fetch(\"http://127.0.0.1:5000/guidelines/\", {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setGuidelines(data); // Save fetched guidelines to state\n            } catch (err) {\n                console.error(\"Error fetching guidelines:\", err);\n                setError(err.message); // Save error to state for display\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGuidelines();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                theme: theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.StyledTable, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                            theme: theme,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                        theme: theme,\n                                        children: \"Guideline\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                        theme: theme,\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderActionCell, {\n                                        theme: theme,\n                                        children: \"Actions\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                            children: guidelines.map((guideline, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                    theme: theme,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DateCell, {\n                                            theme: theme,\n                                            children: guideline[1]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DescriptionCell, {\n                                            theme: theme,\n                                            children: \"Starts counting \".concat(guideline[2], \" \").concat(guideline[3], \" days from your chosen startdate\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.EditButton, {\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"fixed\",\n                    bottom: \"20px\",\n                    right: \"20px\",\n                    padding: \"10px 15px\",\n                    backgroundColor: isEditing ? \"red\" : \"green\",\n                    color: \"white\",\n                    border: \"none\",\n                    borderRadius: \"50%\",\n                    cursor: \"pointer\"\n                },\n                onClick: toggleEditingMode,\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    sx: {\n                        fontSize: \"xxlarge\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 173,\n                    columnNumber: 22\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 173,\n                    columnNumber: 67\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"fixed\",\n                    bottom: \"20px\",\n                    right: \"20px\",\n                    padding: \"10px 15px\",\n                    backgroundColor: \"green\",\n                    color: \"white\",\n                    border: \"none\",\n                    borderRadius: \"50%\",\n                    cursor: \"pointer\"\n                },\n                onClick: ()=>setShowModal(true),\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 176,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GuidelinesTable, \"9WWlXmzG/+OqaI01wEx3zX9CKu0=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = GuidelinesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidelinesTable);\nvar _c;\n$RefreshReg$(_c, \"GuidelinesTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnRTtBQUN6QjtBQUNTO0FBQ0E7QUFDVTtBQTRCekI7QUFLakMsTUFBTWtDLGtCQUFrQjs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQywrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ21DLE9BQU9DLFNBQVMsR0FBR3BDLCtDQUFRQSxDQUFDO0lBRW5DLHNCQUFzQjtJQUN0QixNQUFNLENBQUNxQyxXQUFXQyxhQUFhLEdBQUd0QywrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNdUMsb0JBQW9CLElBQU1ELGFBQWEsQ0FBQ0UsT0FBUyxDQUFDQTtJQUd4RCxNQUFNQyxRQUFRdEMsZ0VBQVFBO0lBRXRCLG1CQUFtQjtJQUNuQixNQUFNLENBQUN1QyxhQUFhQyxlQUFlLEdBQUczQywrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUM0QyxhQUFhQyxlQUFlLEdBQUc3QywrQ0FBUUEsQ0FBQyxJQUFJLDJDQUEyQztJQUM5RixNQUFNOEMsaUJBQWlCSixjQUFjRTtJQUNyQyxNQUFNRyxrQkFBa0JELGlCQUFpQkY7SUFDekMsTUFBTUksb0JBQW9CZixXQUFXZ0IsS0FBSyxDQUFDRixpQkFBaUJEO0lBQzVELE1BQU1JLGFBQWFDLEtBQUtDLElBQUksQ0FBQ25CLFdBQVdvQixNQUFNLEdBQUdUO0lBRWpELE1BQU1VLG1CQUFtQnJELGtEQUFXQSxDQUFDLENBQUNzRDtRQUNwQyxJQUFJQSxXQUFXLEtBQUtBLFdBQVdMLFlBQVk7WUFDekNQLGVBQWVZO1FBQ2pCO0lBQ0YsR0FBRztRQUFDTDtLQUFXO0lBRWYsTUFBTU0sMEJBQTBCdkQsa0RBQVdBLENBQUMsQ0FBQ3dEO1FBQzNDWixlQUFlYSxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM1Q2pCLGVBQWU7SUFDakIsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHOUQsK0NBQVFBLENBQUM7SUFPdkMsMkJBQTJCO0lBQzNCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nRSxrQkFBa0I7WUFDdEJELFdBQVc7WUFDVCxJQUFJO2dCQUNBLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzlEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNMLGdCQUFnQjtvQkFDcEI7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkwsU0FBU00sTUFBTTtnQkFDMUQ7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO2dCQUNoQ3RDLGNBQWNxQyxPQUFPLG1DQUFtQztZQUM1RCxFQUFFLE9BQU9FLEtBQUs7Z0JBQ1ZDLFFBQVF2QyxLQUFLLENBQUMsOEJBQThCc0M7Z0JBQzVDckMsU0FBU3FDLElBQUlFLE9BQU8sR0FBRyxrQ0FBa0M7WUFDN0QsU0FBVTtnQkFDUmIsV0FBVztZQUNiO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFPSCxxQkFDRTs7MEJBQ0UsOERBQUN6RCxrRUFBY0E7Z0JBQUNtQyxPQUFPQTswQkFFdkIsNEVBQUNsQywrREFBV0E7O3NDQUNWLDhEQUFDQywrREFBV0E7NEJBQUNpQyxPQUFPQTtzQ0FDbEIsNEVBQUNoQyxrRUFBY0E7O2tEQUNiLDhEQUFDQyxtRUFBZUE7d0NBQUMrQixPQUFPQTtrREFBTzs7Ozs7O2tEQUMvQiw4REFBQy9CLG1FQUFlQTt3Q0FBQytCLE9BQU9BO2tEQUFPOzs7Ozs7b0NBRTlCSiwyQkFBYSw4REFBQzFCLHlFQUFxQkE7d0NBQUM4QixPQUFPQTtrREFBTzs7Ozs7O29DQUFpQzs7Ozs7Ozs7Ozs7O3NDQVN4Riw4REFBQzdCLDZEQUFTQTtzQ0FDUHFCLFdBQVcyQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzFCLDhEQUFDakUsNERBQVFBO29DQUFhNEIsT0FBT0E7O3NEQUMzQiw4REFBQzFCLDREQUFRQTs0Q0FBQzBCLE9BQU9BO3NEQUFRb0MsU0FBUyxDQUFDLEVBQUU7Ozs7OztzREFDckMsOERBQUM3RCxtRUFBZUE7NENBQUN5QixPQUFPQTtzREFFekIsbUJBQW1Db0MsT0FBaEJBLFNBQVMsQ0FBQyxFQUFFLEVBQUMsS0FBZ0IsT0FBYkEsU0FBUyxDQUFDLEVBQUUsRUFBQzs7Ozs7O3dDQUc1Q3hDLDJCQUNILDhEQUFDdkIsNkRBQVNBOzs4REFDUiw4REFBQ2dCLDhEQUFVQTs4REFBQzs7Ozs7OzhEQUNaLDhEQUFDQyxnRUFBWUE7OERBQUM7Ozs7Ozs7Ozs7Ozs7bUNBVkgrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQTJCdkIsOERBQUNDO2dCQUNDQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUQyxpQkFBaUJoRCxZQUFZLFFBQVE7b0JBQ3JDaUQsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsY0FBYztvQkFDZEMsUUFBUTtnQkFDVjtnQkFDQUMsU0FBU25EOzBCQUVSRiwwQkFBWSw4REFBQ2hDLHFFQUFhQTtvQkFBQ3NGLElBQUk7d0JBQUNDLFVBQVM7b0JBQVM7Ozs7OzhDQUFPLDhEQUFDeEYsZ0VBQVFBOzs7Ozs7Ozs7OzBCQUdyRSw4REFBQzJFO2dCQUNDQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUQyxpQkFBaUI7b0JBQ2pCQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxjQUFjO29CQUNkQyxRQUFRO2dCQUNWO2dCQUNBQyxTQUFTLElBQU1HLGFBQWE7MEJBQzdCOzs7Ozs7OztBQVFQO0dBN0pNN0Q7O1FBU1k3Qiw0REFBUUE7OztLQVRwQjZCO0FBK0pOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanM/MTE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSAsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQge1xyXG4gIFRhYmxlQ29udGFpbmVyLFxyXG4gIFN0eWxlZFRhYmxlLFxyXG4gIFRhYmxlSGVhZGVyLFxyXG4gIFRhYmxlSGVhZGVyUm93LFxyXG4gIFRhYmxlSGVhZGVyQ2VsbCxcclxuICBUYWJsZUhlYWRlckFjdGlvbkNlbGwsXHJcbiAgVGFibGVCb2R5LFxyXG4gIFRhYmxlUm93LFxyXG4gIFRhYmxlQ2VsbCxcclxuICBEYXRlQ2VsbCxcclxuICBEZXNjcmlwdGlvbkNlbGwsXHJcbiAgQWN0aW9uQ2VsbCxcclxuICBTYXZlQnV0dG9uQ2VsbCxcclxuICBUYWJsZUZvb3RlcixcclxuICBUYWJsZUZvb3RlclJvdyxcclxuICBUYWJsZUZvb3RlckNlbGwsXHJcbiAgQ29udGFpbmVyLFxyXG4gIENlbnRlcixcclxuICBSaWdodCxcclxuICBOb3RpZmljYXRpb24sXHJcbiAgU3R5bGVkU2VsZWN0LFxyXG4gIFN0eWxlZElucHV0LFxyXG4gIEFkZEJ1dHRvbixcclxuICBDYW5jZWxCdXR0b24sXHJcbiAgRWRpdEJ1dHRvbixcclxuICBEZWxldGVCdXR0b24sXHJcbn0gZnJvbSAnLi9HdWlkZWxpbmVzVGFibGVTdHlsZXMnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgR3VpZGVsaW5lc1RhYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2d1aWRlbGluZXMsIHNldEd1aWRlbGluZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgRWRpdGluZyBNb2RlXHJcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlRWRpdGluZ01vZGUgPSAoKSA9PiBzZXRJc0VkaXRpbmcoKHByZXYpID0+ICFwcmV2KTtcclxuXHJcblxyXG4gICAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gICAgXHJcbiAgICAvLyBUYWJsZSBDb21wb25lbnRzXHJcbiAgICBjb25zdCBbY3VycmVudFBhZ2UsIHNldEN1cnJlbnRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTsgLy8gU2V0IDUgYXMgZGVmYXVsdCBudW1iZXIgb2Ygcm93cyBwZXIgcGFnZVxyXG4gICAgY29uc3QgaW5kZXhPZkxhc3RSb3cgPSBjdXJyZW50UGFnZSAqIHJvd3NQZXJQYWdlO1xyXG4gICAgY29uc3QgaW5kZXhPZkZpcnN0Um93ID0gaW5kZXhPZkxhc3RSb3cgLSByb3dzUGVyUGFnZTtcclxuICAgIGNvbnN0IGN1cnJlbnRHdWlkZWxpbmVzID0gZ3VpZGVsaW5lcy5zbGljZShpbmRleE9mRmlyc3RSb3csIGluZGV4T2ZMYXN0Um93KTtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBNYXRoLmNlaWwoZ3VpZGVsaW5lcy5sZW5ndGggLyByb3dzUGVyUGFnZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUGFnZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChuZXdQYWdlKSA9PiB7XHJcbiAgICAgIGlmIChuZXdQYWdlID49IDEgJiYgbmV3UGFnZSA8PSB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgc2V0Q3VycmVudFBhZ2UobmV3UGFnZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFt0b3RhbFBhZ2VzXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlUm93c1BlclBhZ2VDaGFuZ2UgPSB1c2VDYWxsYmFjaygoZXZlbnQpID0+IHtcclxuICAgICAgc2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgICBzZXRDdXJyZW50UGFnZSgxKTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBGZXRjaCBndWlkZWxpbmVzIGZyb20gREJcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoR3VpZGVsaW5lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjUwMDAvZ3VpZGVsaW5lcy8nLCB7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgc2V0R3VpZGVsaW5lcyhkYXRhKTsgLy8gU2F2ZSBmZXRjaGVkIGd1aWRlbGluZXMgdG8gc3RhdGVcclxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGd1aWRlbGluZXM6JywgZXJyKTtcclxuICAgICAgICAgICAgICBzZXRFcnJvcihlcnIubWVzc2FnZSk7IC8vIFNhdmUgZXJyb3IgdG8gc3RhdGUgZm9yIGRpc3BsYXlcclxuICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBmZXRjaEd1aWRlbGluZXMoKTtcclxuICB9LCBbXSk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8VGFibGVDb250YWluZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICB7LyogPFRhYmxlVGl0bGUgdGhlbWU9e3RoZW1lfT5HdWlkZWxpbmVzPC9UYWJsZVRpdGxlPiAqL31cclxuICAgICAgICA8U3R5bGVkVGFibGU+XHJcbiAgICAgICAgICA8VGFibGVIZWFkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgPFRhYmxlSGVhZGVyUm93PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5HdWlkZWxpbmU8L1RhYmxlSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+RGVzY3JpcHRpb248L1RhYmxlSGVhZGVyQ2VsbD5cclxuXHJcbiAgICAgICAgICAgICAge2lzRWRpdGluZyAmJiA8VGFibGVIZWFkZXJBY3Rpb25DZWxsIHRoZW1lPXt0aGVtZX0+QWN0aW9uczwvVGFibGVIZWFkZXJBY3Rpb25DZWxsPiB9IHsvKiBDb25kaXRpb25hbGx5IHJlbmRlciBhY3Rpb24gY29sdW1uICovfVxyXG5cclxuICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZGVyQWN0aW9uQ2VsbCB0aGVtZT17dGhlbWV9PkFjdGlvbnM8L1RhYmxlSGVhZGVyQWN0aW9uQ2VsbD4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+c2hpZnRfZGF5czwvVGFibGVIZWFkZXJDZWxsPiAqL31cclxuICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PmRheV90eXBlPC9UYWJsZUhlYWRlckNlbGw+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+c3RhcnQ8L1RhYmxlSGVhZGVyQ2VsbD4gKi99XHJcbiAgICAgICAgICAgIDwvVGFibGVIZWFkZXJSb3c+XHJcbiAgICAgICAgICA8L1RhYmxlSGVhZGVyPlxyXG4gICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAge2d1aWRlbGluZXMubWFwKChndWlkZWxpbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17aW5kZXh9IHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8RGF0ZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzFdfTwvRGF0ZUNlbGw+IFxyXG4gICAgICAgICAgICAgICAgPERlc2NyaXB0aW9uQ2VsbCB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgIHsvKiBEZXNjcmlwdGlvbjogU3RhcnRzIGNvdW50aW5nIHtzaGlmdF9kYXlzfSB7ZGF5X3R5cGV9IGZyb20geW91ciBkZXNpcmVkIHN0YXJ0ZGF0ZSAqL31cclxuICAgICAgICAgICAgICB7YFN0YXJ0cyBjb3VudGluZyAke2d1aWRlbGluZVsyXX0gJHtndWlkZWxpbmVbM119IGRheXMgZnJvbSB5b3VyIGNob3NlbiBzdGFydGRhdGVgfVxyXG4gICAgICAgICAgICAgICAgICA8L0Rlc2NyaXB0aW9uQ2VsbD4gXHJcblxyXG4gICAgICAgICAgICAgICAgICB7aXNFZGl0aW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxFZGl0QnV0dG9uPkVkaXQ8L0VkaXRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxEZWxldGVCdXR0b24+RGVsZXRlPC9EZWxldGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVsyXX08L1RhYmxlQ2VsbD4gICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzNdfTwvVGFibGVDZWxsPiAgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbNF19PC9UYWJsZUNlbGw+ICAqL31cclxuICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgIDwvU3R5bGVkVGFibGU+XHJcbiAgICAgIDwvVGFibGVDb250YWluZXI+XHJcblxyXG4gICAgICB7LyogRmxvYXRpbmcgQnV0dG9uICovfVxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICBib3R0b206IFwiMjBweFwiLFxyXG4gICAgICAgICAgcmlnaHQ6IFwiMjBweFwiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIxMHB4IDE1cHhcIixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogaXNFZGl0aW5nID8gXCJyZWRcIiA6IFwiZ3JlZW5cIixcclxuICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxyXG4gICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUVkaXRpbmdNb2RlfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzRWRpdGluZyA/IDxBcnJvd0JhY2tJY29uIHN4PXt7Zm9udFNpemU6J3h4bGFyZ2UnfX0vPiA6IDxFZGl0SWNvbi8+fVxyXG4gICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICBib3R0b206ICcyMHB4JyxcclxuICAgICAgICAgIHJpZ2h0OiAnMjBweCcsXHJcbiAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgID5cclxuICAgICAgICArXHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHdWlkZWxpbmVzVGFibGU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQ2FsbGJhY2siLCJzdHlsZWQiLCJ1c2VUaGVtZSIsIkVkaXRJY29uIiwiQXJyb3dCYWNrSWNvbiIsIlRhYmxlQ29udGFpbmVyIiwiU3R5bGVkVGFibGUiLCJUYWJsZUhlYWRlciIsIlRhYmxlSGVhZGVyUm93IiwiVGFibGVIZWFkZXJDZWxsIiwiVGFibGVIZWFkZXJBY3Rpb25DZWxsIiwiVGFibGVCb2R5IiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJEYXRlQ2VsbCIsIkRlc2NyaXB0aW9uQ2VsbCIsIkFjdGlvbkNlbGwiLCJTYXZlQnV0dG9uQ2VsbCIsIlRhYmxlRm9vdGVyIiwiVGFibGVGb290ZXJSb3ciLCJUYWJsZUZvb3RlckNlbGwiLCJDb250YWluZXIiLCJDZW50ZXIiLCJSaWdodCIsIk5vdGlmaWNhdGlvbiIsIlN0eWxlZFNlbGVjdCIsIlN0eWxlZElucHV0IiwiQWRkQnV0dG9uIiwiQ2FuY2VsQnV0dG9uIiwiRWRpdEJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkd1aWRlbGluZXNUYWJsZSIsImd1aWRlbGluZXMiLCJzZXRHdWlkZWxpbmVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsInRvZ2dsZUVkaXRpbmdNb2RlIiwicHJldiIsInRoZW1lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJpbmRleE9mTGFzdFJvdyIsImluZGV4T2ZGaXJzdFJvdyIsImN1cnJlbnRHdWlkZWxpbmVzIiwic2xpY2UiLCJ0b3RhbFBhZ2VzIiwiTWF0aCIsImNlaWwiLCJsZW5ndGgiLCJoYW5kbGVQYWdlQ2hhbmdlIiwibmV3UGFnZSIsImhhbmRsZVJvd3NQZXJQYWdlQ2hhbmdlIiwiZXZlbnQiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaEd1aWRlbGluZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJkYXRhIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJtZXNzYWdlIiwibWFwIiwiZ3VpZGVsaW5lIiwiaW5kZXgiLCJidXR0b24iLCJzdHlsZSIsInBvc2l0aW9uIiwiYm90dG9tIiwicmlnaHQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJvbkNsaWNrIiwic3giLCJmb250U2l6ZSIsInNldFNob3dNb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Guidelines.js\n"));

/***/ })

});