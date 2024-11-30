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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Edit.js\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/ArrowBack.js\");\n/* harmony import */ var _GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidelinesTableStyles */ \"(app-pages-browser)/./app/components/GuidelinesTableStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst GuidelinesTable = ()=>{\n    _s();\n    const [guidelines, setGuidelines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Toggle Editing Mode\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleEditingMode = ()=>setIsEditing((prev)=>!prev);\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    // Table Components\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5); // Set 5 as default number of rows per page\n    const indexOfLastRow = currentPage * rowsPerPage;\n    const indexOfFirstRow = indexOfLastRow - rowsPerPage;\n    const currentGuidelines = guidelines.slice(indexOfFirstRow, indexOfLastRow);\n    const totalPages = Math.ceil(guidelines.length / rowsPerPage);\n    const handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newPage)=>{\n        if (newPage >= 1 && newPage <= totalPages) {\n            setCurrentPage(newPage);\n        }\n    }, [\n        totalPages\n    ]);\n    const handleRowsPerPageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        setRowsPerPage(parseInt(event.target.value, 10));\n        setCurrentPage(1);\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch guidelines from DB\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGuidelines = async ()=>{\n            setLoading(true);\n            try {\n                const response = await fetch(\"http://127.0.0.1:5000/guidelines/\", {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setGuidelines(data); // Save fetched guidelines to state\n            } catch (err) {\n                console.error(\"Error fetching guidelines:\", err);\n                setError(err.message); // Save error to state for display\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGuidelines();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                theme: theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.StyledTable, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                            theme: theme,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                        theme: theme,\n                                        children: \"Guideline\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                        theme: theme,\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderActionCell, {\n                                        theme: theme,\n                                        children: \"Actions\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                            children: guidelines.map((guideline, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                    theme: theme,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DateCell, {\n                                            theme: theme,\n                                            children: guideline[1]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 133,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DescriptionCell, {\n                                            theme: theme,\n                                            children: \"Starts counting \".concat(guideline[2], \" \").concat(guideline[3], \" days from your chosen startdate\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.EditButton, {\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                                    lineNumber: 141,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                                    lineNumber: 142,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 130,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"fixed\",\n                    bottom: \"20px\",\n                    right: \"20px\",\n                    padding: \"10px 15px\",\n                    backgroundColor: isEditing ? \"red\" : \"green\",\n                    color: \"white\",\n                    border: \"none\",\n                    borderRadius: \"50%\",\n                    cursor: \"pointer\"\n                },\n                onClick: toggleEditingMode,\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                fontSize: \"xxlarge\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 173,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.AddButton, {\n                            style: {\n                                position: \"fixed\",\n                                bottom: \"75px\",\n                                right: \"23px\",\n                                padding: \"15px 15px\",\n                                backgroundColor: \"green\",\n                                color: \"white\",\n                                border: \"none\",\n                                borderRadius: \"50%\",\n                                cursor: \"pointer\"\n                            },\n                            onClick: ()=>setShowModal(true),\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 175,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 193,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 159,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GuidelinesTable, \"9WWlXmzG/+OqaI01wEx3zX9CKu0=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = GuidelinesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidelinesTable);\nvar _c;\n$RefreshReg$(_c, \"GuidelinesTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnRTtBQUN6QjtBQUNTO0FBQ0E7QUFDVTtBQTRCekI7QUFLakMsTUFBTWtDLGtCQUFrQjs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQywrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ21DLE9BQU9DLFNBQVMsR0FBR3BDLCtDQUFRQSxDQUFDO0lBRW5DLHNCQUFzQjtJQUN0QixNQUFNLENBQUNxQyxXQUFXQyxhQUFhLEdBQUd0QywrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNdUMsb0JBQW9CLElBQU1ELGFBQWEsQ0FBQ0UsT0FBUyxDQUFDQTtJQUd4RCxNQUFNQyxRQUFRdEMsZ0VBQVFBO0lBRXRCLG1CQUFtQjtJQUNuQixNQUFNLENBQUN1QyxhQUFhQyxlQUFlLEdBQUczQywrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUM0QyxhQUFhQyxlQUFlLEdBQUc3QywrQ0FBUUEsQ0FBQyxJQUFJLDJDQUEyQztJQUM5RixNQUFNOEMsaUJBQWlCSixjQUFjRTtJQUNyQyxNQUFNRyxrQkFBa0JELGlCQUFpQkY7SUFDekMsTUFBTUksb0JBQW9CZixXQUFXZ0IsS0FBSyxDQUFDRixpQkFBaUJEO0lBQzVELE1BQU1JLGFBQWFDLEtBQUtDLElBQUksQ0FBQ25CLFdBQVdvQixNQUFNLEdBQUdUO0lBRWpELE1BQU1VLG1CQUFtQnJELGtEQUFXQSxDQUFDLENBQUNzRDtRQUNwQyxJQUFJQSxXQUFXLEtBQUtBLFdBQVdMLFlBQVk7WUFDekNQLGVBQWVZO1FBQ2pCO0lBQ0YsR0FBRztRQUFDTDtLQUFXO0lBRWYsTUFBTU0sMEJBQTBCdkQsa0RBQVdBLENBQUMsQ0FBQ3dEO1FBQzNDWixlQUFlYSxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM1Q2pCLGVBQWU7SUFDakIsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHOUQsK0NBQVFBLENBQUM7SUFPdkMsMkJBQTJCO0lBQzNCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1nRSxrQkFBa0I7WUFDdEJELFdBQVc7WUFDVCxJQUFJO2dCQUNBLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzlEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNMLGdCQUFnQjtvQkFDcEI7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkwsU0FBU00sTUFBTTtnQkFDMUQ7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO2dCQUNoQ3RDLGNBQWNxQyxPQUFPLG1DQUFtQztZQUM1RCxFQUFFLE9BQU9FLEtBQUs7Z0JBQ1ZDLFFBQVF2QyxLQUFLLENBQUMsOEJBQThCc0M7Z0JBQzVDckMsU0FBU3FDLElBQUlFLE9BQU8sR0FBRyxrQ0FBa0M7WUFDN0QsU0FBVTtnQkFDUmIsV0FBVztZQUNiO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFPSCxxQkFDRTs7MEJBQ0UsOERBQUN6RCxrRUFBY0E7Z0JBQUNtQyxPQUFPQTswQkFFdkIsNEVBQUNsQywrREFBV0E7O3NDQUNWLDhEQUFDQywrREFBV0E7NEJBQUNpQyxPQUFPQTtzQ0FDbEIsNEVBQUNoQyxrRUFBY0E7O2tEQUNiLDhEQUFDQyxtRUFBZUE7d0NBQUMrQixPQUFPQTtrREFBTzs7Ozs7O2tEQUMvQiw4REFBQy9CLG1FQUFlQTt3Q0FBQytCLE9BQU9BO2tEQUFPOzs7Ozs7b0NBRTlCSiwyQkFBYSw4REFBQzFCLHlFQUFxQkE7d0NBQUM4QixPQUFPQTtrREFBTzs7Ozs7O29DQUFpQzs7Ozs7Ozs7Ozs7O3NDQVN4Riw4REFBQzdCLDZEQUFTQTtzQ0FDUHFCLFdBQVcyQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzFCLDhEQUFDakUsNERBQVFBO29DQUFhNEIsT0FBT0E7O3NEQUMzQiw4REFBQzFCLDREQUFRQTs0Q0FBQzBCLE9BQU9BO3NEQUFRb0MsU0FBUyxDQUFDLEVBQUU7Ozs7OztzREFDckMsOERBQUM3RCxtRUFBZUE7NENBQUN5QixPQUFPQTtzREFFekIsbUJBQW1Db0MsT0FBaEJBLFNBQVMsQ0FBQyxFQUFFLEVBQUMsS0FBZ0IsT0FBYkEsU0FBUyxDQUFDLEVBQUUsRUFBQzs7Ozs7O3dDQUc1Q3hDLDJCQUNILDhEQUFDdkIsNkRBQVNBOzs4REFDUiw4REFBQ2dCLDhEQUFVQTs4REFBQzs7Ozs7OzhEQUNaLDhEQUFDQyxnRUFBWUE7OERBQUM7Ozs7Ozs7Ozs7Ozs7bUNBVkgrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQTJCdkIsOERBQUNDO2dCQUNDQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUQyxpQkFBaUJoRCxZQUFZLFFBQVE7b0JBQ3JDaUQsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsY0FBYztvQkFDZEMsUUFBUTtnQkFDVjtnQkFDQUMsU0FBU25EOzBCQUVSRiwwQkFBWTs7d0JBQUU7c0NBQUMsOERBQUNoQyxxRUFBYUE7NEJBQUNzRixJQUFJO2dDQUFDQyxVQUFTOzRCQUFTOzs7Ozs7c0NBRXRELDhEQUFDaEUsNkRBQVNBOzRCQUNSb0QsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVkMsUUFBUTtnQ0FDUkMsT0FBTztnQ0FDUEMsU0FBUztnQ0FDVEMsaUJBQWlCO2dDQUNqQkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkMsY0FBYztnQ0FDZEMsUUFBUTs0QkFDVjs0QkFDQUMsU0FBUyxJQUFNRyxhQUFhO3NDQUM3Qjs7Ozs7OztpREFLUCw4REFBQ3pGLGdFQUFRQTs7Ozs7Ozs7Ozs7O0FBUVg7R0FqS000Qjs7UUFTWTdCLDREQUFRQTs7O0tBVHBCNkI7QUFtS04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvR3VpZGVsaW5lcy5qcz8xMTYzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlICwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXQnO1xyXG5pbXBvcnQgQXJyb3dCYWNrSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0Fycm93QmFjayc7XHJcbmltcG9ydCB7XHJcbiAgVGFibGVDb250YWluZXIsXHJcbiAgU3R5bGVkVGFibGUsXHJcbiAgVGFibGVIZWFkZXIsXHJcbiAgVGFibGVIZWFkZXJSb3csXHJcbiAgVGFibGVIZWFkZXJDZWxsLFxyXG4gIFRhYmxlSGVhZGVyQWN0aW9uQ2VsbCxcclxuICBUYWJsZUJvZHksXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIERhdGVDZWxsLFxyXG4gIERlc2NyaXB0aW9uQ2VsbCxcclxuICBBY3Rpb25DZWxsLFxyXG4gIFNhdmVCdXR0b25DZWxsLFxyXG4gIFRhYmxlRm9vdGVyLFxyXG4gIFRhYmxlRm9vdGVyUm93LFxyXG4gIFRhYmxlRm9vdGVyQ2VsbCxcclxuICBDb250YWluZXIsXHJcbiAgQ2VudGVyLFxyXG4gIFJpZ2h0LFxyXG4gIE5vdGlmaWNhdGlvbixcclxuICBTdHlsZWRTZWxlY3QsXHJcbiAgU3R5bGVkSW5wdXQsXHJcbiAgQWRkQnV0dG9uLFxyXG4gIENhbmNlbEJ1dHRvbixcclxuICBFZGl0QnV0dG9uLFxyXG4gIERlbGV0ZUJ1dHRvbixcclxufSBmcm9tICcuL0d1aWRlbGluZXNUYWJsZVN0eWxlcyc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBHdWlkZWxpbmVzVGFibGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZ3VpZGVsaW5lcywgc2V0R3VpZGVsaW5lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIFRvZ2dsZSBFZGl0aW5nIE1vZGVcclxuICAgIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVFZGl0aW5nTW9kZSA9ICgpID0+IHNldElzRWRpdGluZygocHJldikgPT4gIXByZXYpO1xyXG5cclxuXHJcbiAgICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgICBcclxuICAgIC8vIFRhYmxlIENvbXBvbmVudHNcclxuICAgIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IHVzZVN0YXRlKDUpOyAvLyBTZXQgNSBhcyBkZWZhdWx0IG51bWJlciBvZiByb3dzIHBlciBwYWdlXHJcbiAgICBjb25zdCBpbmRleE9mTGFzdFJvdyA9IGN1cnJlbnRQYWdlICogcm93c1BlclBhZ2U7XHJcbiAgICBjb25zdCBpbmRleE9mRmlyc3RSb3cgPSBpbmRleE9mTGFzdFJvdyAtIHJvd3NQZXJQYWdlO1xyXG4gICAgY29uc3QgY3VycmVudEd1aWRlbGluZXMgPSBndWlkZWxpbmVzLnNsaWNlKGluZGV4T2ZGaXJzdFJvdywgaW5kZXhPZkxhc3RSb3cpO1xyXG4gICAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguY2VpbChndWlkZWxpbmVzLmxlbmd0aCAvIHJvd3NQZXJQYWdlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVQYWdlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKG5ld1BhZ2UpID0+IHtcclxuICAgICAgaWYgKG5ld1BhZ2UgPj0gMSAmJiBuZXdQYWdlIDw9IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBzZXRDdXJyZW50UGFnZShuZXdQYWdlKTtcclxuICAgICAgfVxyXG4gICAgfSwgW3RvdGFsUGFnZXNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVSb3dzUGVyUGFnZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChldmVudCkgPT4ge1xyXG4gICAgICBzZXRSb3dzUGVyUGFnZShwYXJzZUludChldmVudC50YXJnZXQudmFsdWUsIDEwKSk7XHJcbiAgICAgIHNldEN1cnJlbnRQYWdlKDEpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIEZldGNoIGd1aWRlbGluZXMgZnJvbSBEQlxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgZmV0Y2hHdWlkZWxpbmVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMC9ndWlkZWxpbmVzLycsIHtcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9KTtcclxuICBcclxuICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICBzZXRHdWlkZWxpbmVzKGRhdGEpOyAvLyBTYXZlIGZldGNoZWQgZ3VpZGVsaW5lcyB0byBzdGF0ZVxyXG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZ3VpZGVsaW5lczonLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHNldEVycm9yKGVyci5tZXNzYWdlKTsgLy8gU2F2ZSBlcnJvciB0byBzdGF0ZSBmb3IgZGlzcGxheVxyXG4gICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGZldGNoR3VpZGVsaW5lcygpO1xyXG4gIH0sIFtdKTtcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxUYWJsZUNvbnRhaW5lciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgIHsvKiA8VGFibGVUaXRsZSB0aGVtZT17dGhlbWV9Pkd1aWRlbGluZXM8L1RhYmxlVGl0bGU+ICovfVxyXG4gICAgICAgIDxTdHlsZWRUYWJsZT5cclxuICAgICAgICAgIDxUYWJsZUhlYWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8VGFibGVIZWFkZXJSb3c+XHJcbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9Pkd1aWRlbGluZTwvVGFibGVIZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5EZXNjcmlwdGlvbjwvVGFibGVIZWFkZXJDZWxsPlxyXG5cclxuICAgICAgICAgICAgICB7aXNFZGl0aW5nICYmIDxUYWJsZUhlYWRlckFjdGlvbkNlbGwgdGhlbWU9e3RoZW1lfT5BY3Rpb25zPC9UYWJsZUhlYWRlckFjdGlvbkNlbGw+IH0gey8qIENvbmRpdGlvbmFsbHkgcmVuZGVyIGFjdGlvbiBjb2x1bW4gKi99XHJcblxyXG4gICAgICAgICAgICAgIHsvKiA8VGFibGVIZWFkZXJBY3Rpb25DZWxsIHRoZW1lPXt0aGVtZX0+QWN0aW9uczwvVGFibGVIZWFkZXJBY3Rpb25DZWxsPiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5zaGlmdF9kYXlzPC9UYWJsZUhlYWRlckNlbGw+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+ZGF5X3R5cGU8L1RhYmxlSGVhZGVyQ2VsbD4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5zdGFydDwvVGFibGVIZWFkZXJDZWxsPiAqL31cclxuICAgICAgICAgICAgPC9UYWJsZUhlYWRlclJvdz5cclxuICAgICAgICAgIDwvVGFibGVIZWFkZXI+XHJcbiAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICB7Z3VpZGVsaW5lcy5tYXAoKGd1aWRlbGluZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtpbmRleH0gdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICAgIDxEYXRlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbMV19PC9EYXRlQ2VsbD4gXHJcbiAgICAgICAgICAgICAgICA8RGVzY3JpcHRpb25DZWxsIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgey8qIERlc2NyaXB0aW9uOiBTdGFydHMgY291bnRpbmcge3NoaWZ0X2RheXN9IHtkYXlfdHlwZX0gZnJvbSB5b3VyIGRlc2lyZWQgc3RhcnRkYXRlICovfVxyXG4gICAgICAgICAgICAgIHtgU3RhcnRzIGNvdW50aW5nICR7Z3VpZGVsaW5lWzJdfSAke2d1aWRlbGluZVszXX0gZGF5cyBmcm9tIHlvdXIgY2hvc2VuIHN0YXJ0ZGF0ZWB9XHJcbiAgICAgICAgICAgICAgICAgIDwvRGVzY3JpcHRpb25DZWxsPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgIHtpc0VkaXRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEVkaXRCdXR0b24+RWRpdDwvRWRpdEJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbj5EZWxldGU8L0RlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzJdfTwvVGFibGVDZWxsPiAgKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbM119PC9UYWJsZUNlbGw+ICAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVs0XX08L1RhYmxlQ2VsbD4gICovfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgPC9TdHlsZWRUYWJsZT5cclxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuXHJcbiAgICAgIHsvKiBGbG9hdGluZyBCdXR0b24gKi99XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICAgIGJvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgICAgICByaWdodDogXCIyMHB4XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjEwcHggMTVweFwiLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0VkaXRpbmcgPyBcInJlZFwiIDogXCJncmVlblwiLFxyXG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXHJcbiAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlRWRpdGluZ01vZGV9XHJcbiAgICAgID5cclxuICAgICAgICB7aXNFZGl0aW5nID8gPD4gPEFycm93QmFja0ljb24gc3g9e3tmb250U2l6ZToneHhsYXJnZSd9fS8+IFxyXG4gICAgICAgIFxyXG4gICAgICAgIDxBZGRCdXR0b25cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgICAgICAgICBib3R0b206ICc3NXB4JyxcclxuICAgICAgICAgICAgcmlnaHQ6ICcyM3B4JyxcclxuICAgICAgICAgICAgcGFkZGluZzogJzE1cHggMTVweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgK1xyXG4gICAgICAgIDwvQWRkQnV0dG9uPjwvPlxyXG5cclxuXHJcbjogPEVkaXRJY29uLz59XHJcbiAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3VpZGVsaW5lc1RhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwic3R5bGVkIiwidXNlVGhlbWUiLCJFZGl0SWNvbiIsIkFycm93QmFja0ljb24iLCJUYWJsZUNvbnRhaW5lciIsIlN0eWxlZFRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZUhlYWRlclJvdyIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRhYmxlSGVhZGVyQWN0aW9uQ2VsbCIsIlRhYmxlQm9keSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiRGF0ZUNlbGwiLCJEZXNjcmlwdGlvbkNlbGwiLCJBY3Rpb25DZWxsIiwiU2F2ZUJ1dHRvbkNlbGwiLCJUYWJsZUZvb3RlciIsIlRhYmxlRm9vdGVyUm93IiwiVGFibGVGb290ZXJDZWxsIiwiQ29udGFpbmVyIiwiQ2VudGVyIiwiUmlnaHQiLCJOb3RpZmljYXRpb24iLCJTdHlsZWRTZWxlY3QiLCJTdHlsZWRJbnB1dCIsIkFkZEJ1dHRvbiIsIkNhbmNlbEJ1dHRvbiIsIkVkaXRCdXR0b24iLCJEZWxldGVCdXR0b24iLCJHdWlkZWxpbmVzVGFibGUiLCJndWlkZWxpbmVzIiwic2V0R3VpZGVsaW5lcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJ0b2dnbGVFZGl0aW5nTW9kZSIsInByZXYiLCJ0aGVtZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaW5kZXhPZkxhc3RSb3ciLCJpbmRleE9mRmlyc3RSb3ciLCJjdXJyZW50R3VpZGVsaW5lcyIsInNsaWNlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaGFuZGxlUGFnZUNoYW5nZSIsIm5ld1BhZ2UiLCJoYW5kbGVSb3dzUGVyUGFnZUNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hHdWlkZWxpbmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibWVzc2FnZSIsIm1hcCIsImd1aWRlbGluZSIsImluZGV4IiwiYnV0dG9uIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwib25DbGljayIsInN4IiwiZm9udFNpemUiLCJzZXRTaG93TW9kYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Guidelines.js\n"));

/***/ })

});