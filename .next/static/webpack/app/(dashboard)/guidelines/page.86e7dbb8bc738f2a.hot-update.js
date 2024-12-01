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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"(app-pages-browser)/./node_modules/@mui/material/styles/useTheme.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/Edit.js\");\n/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ \"(app-pages-browser)/./node_modules/@mui/icons-material/esm/ArrowBack.js\");\n/* harmony import */ var _GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuidelinesTableStyles */ \"(app-pages-browser)/./app/components/GuidelinesTableStyles.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst GuidelinesTable = ()=>{\n    _s();\n    const [guidelines, setGuidelines] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // Toggle Editing Mode\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const toggleEditingMode = ()=>setIsEditing((prev)=>!prev);\n    // Add Modal Components\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleAddGuideline = (newGuideline)=>{\n        // Add the new guideline to the table and database\n        setGuidelines((prev)=>[\n                ...prev,\n                newGuideline\n            ]);\n    };\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    // Table Components\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5); // Set 5 as default number of rows per page\n    const indexOfLastRow = currentPage * rowsPerPage;\n    const indexOfFirstRow = indexOfLastRow - rowsPerPage;\n    const currentGuidelines = guidelines.slice(indexOfFirstRow, indexOfLastRow);\n    const totalPages = Math.ceil(guidelines.length / rowsPerPage);\n    const handlePageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((newPage)=>{\n        if (newPage >= 1 && newPage <= totalPages) {\n            setCurrentPage(newPage);\n        }\n    }, [\n        totalPages\n    ]);\n    const handleRowsPerPageChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        setRowsPerPage(parseInt(event.target.value, 10));\n        setCurrentPage(1);\n    }, []);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    // Fetch guidelines from DB\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGuidelines = async ()=>{\n            setLoading(true);\n            try {\n                const response = await fetch(\"http://127.0.0.1:5000/guidelines/\", {\n                    method: \"GET\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"HTTP error! Status: \".concat(response.status));\n                }\n                const data = await response.json();\n                setGuidelines(data); // Save fetched guidelines to state\n            } catch (err) {\n                console.error(\"Error fetching guidelines:\", err);\n                setError(err.message); // Save error to state for display\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGuidelines();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n                theme: theme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.StyledTable, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeader, {\n                            theme: theme,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderRow, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                        theme: theme,\n                                        children: \"Guideline\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderCell, {\n                                        theme: theme,\n                                        children: \"Description\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableHeaderActionCell, {\n                                        theme: theme,\n                                        children: \"Actions\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                lineNumber: 125,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                            children: guidelines.map((guideline, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                                    theme: theme,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DateCell, {\n                                            theme: theme,\n                                            children: guideline[1]\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 141,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DescriptionCell, {\n                                            theme: theme,\n                                            children: \"Starts counting \".concat(guideline[2], \" \").concat(guideline[3], \" days from your chosen startdate\")\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        isEditing && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.EditButton, {\n                                                    children: \"Edit\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                                    lineNumber: 149,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.DeleteButton, {\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                                    lineNumber: 150,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                            lineNumber: 148,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                                    lineNumber: 140,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 138,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 121,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"fixed\",\n                    bottom: \"20px\",\n                    right: \"20px\",\n                    padding: \"10px 15px\",\n                    backgroundColor: isEditing ? \"red\" : \"green\",\n                    color: \"white\",\n                    border: \"none\",\n                    borderRadius: \"50%\",\n                    cursor: \"pointer\"\n                },\n                onClick: toggleEditingMode,\n                children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            sx: {\n                                fontSize: \"xxlarge\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 181,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GuidelinesTableStyles__WEBPACK_IMPORTED_MODULE_2__.AddButton, {\n                            style: {\n                                position: \"fixed\",\n                                bottom: \"75px\",\n                                right: \"23px\",\n                                padding: \"10px 15px\",\n                                backgroundColor: \"green\",\n                                color: \"white\",\n                                border: \"none\",\n                                borderRadius: \"50%\",\n                                cursor: \"pointer\"\n                            },\n                            onClick: ()=>setShowModal(true),\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                            lineNumber: 183,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                    lineNumber: 201,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 167,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AddGuidelineModal, {\n                show: showModal,\n                onClose: ()=>setShowModal(false),\n                onSave: handleAddGuideline\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\crist\\\\VSCode\\\\UPRMAcademicCalendar-2\\\\UPRMAcademicCalendar-2-1\\\\app\\\\components\\\\Guidelines.js\",\n                lineNumber: 204,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(GuidelinesTable, \"kXh6kOqlGzUOrt2nxCDR8/7DKX4=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = GuidelinesTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuidelinesTable);\nvar _c;\n$RefreshReg$(_c, \"GuidelinesTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUVnRTtBQUN6QjtBQUNTO0FBQ0E7QUFDVTtBQTRCekI7QUFLakMsTUFBTWtDLGtCQUFrQjs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdsQywrQ0FBUUEsQ0FBQyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ21DLE9BQU9DLFNBQVMsR0FBR3BDLCtDQUFRQSxDQUFDO0lBRW5DLHNCQUFzQjtJQUN0QixNQUFNLENBQUNxQyxXQUFXQyxhQUFhLEdBQUd0QywrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNdUMsb0JBQW9CLElBQU1ELGFBQWEsQ0FBQ0UsT0FBUyxDQUFDQTtJQUd4RCx1QkFBdUI7SUFDdkIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUcxQywrQ0FBUUEsQ0FBQztJQUUzQyxNQUFNMkMscUJBQXFCLENBQUNDO1FBQzFCLGtEQUFrRDtRQUNsRFYsY0FBYyxDQUFDTSxPQUFTO21CQUFJQTtnQkFBTUk7YUFBYTtJQUNqRDtJQUVBLE1BQU1DLFFBQVExQyxnRUFBUUE7SUFFdEIsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQzJDLGFBQWFDLGVBQWUsR0FBRy9DLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2dELGFBQWFDLGVBQWUsR0FBR2pELCtDQUFRQSxDQUFDLElBQUksMkNBQTJDO0lBQzlGLE1BQU1rRCxpQkFBaUJKLGNBQWNFO0lBQ3JDLE1BQU1HLGtCQUFrQkQsaUJBQWlCRjtJQUN6QyxNQUFNSSxvQkFBb0JuQixXQUFXb0IsS0FBSyxDQUFDRixpQkFBaUJEO0lBQzVELE1BQU1JLGFBQWFDLEtBQUtDLElBQUksQ0FBQ3ZCLFdBQVd3QixNQUFNLEdBQUdUO0lBRWpELE1BQU1VLG1CQUFtQnpELGtEQUFXQSxDQUFDLENBQUMwRDtRQUNwQyxJQUFJQSxXQUFXLEtBQUtBLFdBQVdMLFlBQVk7WUFDekNQLGVBQWVZO1FBQ2pCO0lBQ0YsR0FBRztRQUFDTDtLQUFXO0lBRWYsTUFBTU0sMEJBQTBCM0Qsa0RBQVdBLENBQUMsQ0FBQzREO1FBQzNDWixlQUFlYSxTQUFTRCxNQUFNRSxNQUFNLENBQUNDLEtBQUssRUFBRTtRQUM1Q2pCLGVBQWU7SUFDakIsR0FBRyxFQUFFO0lBRUwsTUFBTSxDQUFDa0IsU0FBU0MsV0FBVyxHQUFHbEUsK0NBQVFBLENBQUM7SUFPdkMsMkJBQTJCO0lBQzNCRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1vRSxrQkFBa0I7WUFDdEJELFdBQVc7WUFDVCxJQUFJO2dCQUNBLE1BQU1FLFdBQVcsTUFBTUMsTUFBTSxxQ0FBcUM7b0JBQzlEQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNMLGdCQUFnQjtvQkFDcEI7Z0JBQ0o7Z0JBRUEsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7b0JBQ2QsTUFBTSxJQUFJQyxNQUFNLHVCQUF1QyxPQUFoQkwsU0FBU00sTUFBTTtnQkFDMUQ7Z0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxTQUFTUSxJQUFJO2dCQUNoQzFDLGNBQWN5QyxPQUFPLG1DQUFtQztZQUM1RCxFQUFFLE9BQU9FLEtBQUs7Z0JBQ1ZDLFFBQVEzQyxLQUFLLENBQUMsOEJBQThCMEM7Z0JBQzVDekMsU0FBU3lDLElBQUlFLE9BQU8sR0FBRyxrQ0FBa0M7WUFDN0QsU0FBVTtnQkFDUmIsV0FBVztZQUNiO1FBQ0o7UUFFQUM7SUFDSixHQUFHLEVBQUU7SUFPSCxxQkFDRTs7MEJBQ0UsOERBQUM3RCxrRUFBY0E7Z0JBQUN1QyxPQUFPQTswQkFFdkIsNEVBQUN0QywrREFBV0E7O3NDQUNWLDhEQUFDQywrREFBV0E7NEJBQUNxQyxPQUFPQTtzQ0FDbEIsNEVBQUNwQyxrRUFBY0E7O2tEQUNiLDhEQUFDQyxtRUFBZUE7d0NBQUNtQyxPQUFPQTtrREFBTzs7Ozs7O2tEQUMvQiw4REFBQ25DLG1FQUFlQTt3Q0FBQ21DLE9BQU9BO2tEQUFPOzs7Ozs7b0NBRTlCUiwyQkFBYSw4REFBQzFCLHlFQUFxQkE7d0NBQUNrQyxPQUFPQTtrREFBTzs7Ozs7O29DQUFpQzs7Ozs7Ozs7Ozs7O3NDQVN4Riw4REFBQ2pDLDZEQUFTQTtzQ0FDUHFCLFdBQVcrQyxHQUFHLENBQUMsQ0FBQ0MsV0FBV0Msc0JBQzFCLDhEQUFDckUsNERBQVFBO29DQUFhZ0MsT0FBT0E7O3NEQUMzQiw4REFBQzlCLDREQUFRQTs0Q0FBQzhCLE9BQU9BO3NEQUFRb0MsU0FBUyxDQUFDLEVBQUU7Ozs7OztzREFDckMsOERBQUNqRSxtRUFBZUE7NENBQUM2QixPQUFPQTtzREFFekIsbUJBQW1Db0MsT0FBaEJBLFNBQVMsQ0FBQyxFQUFFLEVBQUMsS0FBZ0IsT0FBYkEsU0FBUyxDQUFDLEVBQUUsRUFBQzs7Ozs7O3dDQUc1QzVDLDJCQUNILDhEQUFDdkIsNkRBQVNBOzs4REFDUiw4REFBQ2dCLDhEQUFVQTs4REFBQzs7Ozs7OzhEQUNaLDhEQUFDQyxnRUFBWUE7OERBQUM7Ozs7Ozs7Ozs7Ozs7bUNBVkhtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQTJCdkIsOERBQUNDO2dCQUNDQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWQyxRQUFRO29CQUNSQyxPQUFPO29CQUNQQyxTQUFTO29CQUNUQyxpQkFBaUJwRCxZQUFZLFFBQVE7b0JBQ3JDcUQsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsY0FBYztvQkFDZEMsUUFBUTtnQkFDVjtnQkFDQUMsU0FBU3ZEOzBCQUVSRiwwQkFBWTs7d0JBQUU7c0NBQUMsOERBQUNoQyxxRUFBYUE7NEJBQUMwRixJQUFJO2dDQUFDQyxVQUFTOzRCQUFTOzs7Ozs7c0NBRXRELDhEQUFDcEUsNkRBQVNBOzRCQUNSd0QsT0FBTztnQ0FDTEMsVUFBVTtnQ0FDVkMsUUFBUTtnQ0FDUkMsT0FBTztnQ0FDUEMsU0FBUztnQ0FDVEMsaUJBQWlCO2dDQUNqQkMsT0FBTztnQ0FDUEMsUUFBUTtnQ0FDUkMsY0FBYztnQ0FDZEMsUUFBUTs0QkFDVjs0QkFDQUMsU0FBUyxJQUFNcEQsYUFBYTtzQ0FDN0I7Ozs7Ozs7aURBS1AsOERBQUN0QyxnRUFBUUE7Ozs7Ozs7Ozs7MEJBR0wsOERBQUM2RjtnQkFDREMsTUFBTXpEO2dCQUNOMEQsU0FBUyxJQUFNekQsYUFBYTtnQkFDNUIwRCxRQUFRekQ7Ozs7Ozs7O0FBTWQ7R0E3S01YOztRQWlCWTdCLDREQUFRQTs7O0tBakJwQjZCO0FBK0tOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0d1aWRlbGluZXMuanM/MTE2MyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSAsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FZGl0JztcclxuaW1wb3J0IEFycm93QmFja0ljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BcnJvd0JhY2snO1xyXG5pbXBvcnQge1xyXG4gIFRhYmxlQ29udGFpbmVyLFxyXG4gIFN0eWxlZFRhYmxlLFxyXG4gIFRhYmxlSGVhZGVyLFxyXG4gIFRhYmxlSGVhZGVyUm93LFxyXG4gIFRhYmxlSGVhZGVyQ2VsbCxcclxuICBUYWJsZUhlYWRlckFjdGlvbkNlbGwsXHJcbiAgVGFibGVCb2R5LFxyXG4gIFRhYmxlUm93LFxyXG4gIFRhYmxlQ2VsbCxcclxuICBEYXRlQ2VsbCxcclxuICBEZXNjcmlwdGlvbkNlbGwsXHJcbiAgQWN0aW9uQ2VsbCxcclxuICBTYXZlQnV0dG9uQ2VsbCxcclxuICBUYWJsZUZvb3RlcixcclxuICBUYWJsZUZvb3RlclJvdyxcclxuICBUYWJsZUZvb3RlckNlbGwsXHJcbiAgQ29udGFpbmVyLFxyXG4gIENlbnRlcixcclxuICBSaWdodCxcclxuICBOb3RpZmljYXRpb24sXHJcbiAgU3R5bGVkU2VsZWN0LFxyXG4gIFN0eWxlZElucHV0LFxyXG4gIEFkZEJ1dHRvbixcclxuICBDYW5jZWxCdXR0b24sXHJcbiAgRWRpdEJ1dHRvbixcclxuICBEZWxldGVCdXR0b24sXHJcbn0gZnJvbSAnLi9HdWlkZWxpbmVzVGFibGVTdHlsZXMnO1xyXG5cclxuXHJcblxyXG5cclxuY29uc3QgR3VpZGVsaW5lc1RhYmxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2d1aWRlbGluZXMsIHNldEd1aWRlbGluZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBUb2dnbGUgRWRpdGluZyBNb2RlXHJcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlRWRpdGluZ01vZGUgPSAoKSA9PiBzZXRJc0VkaXRpbmcoKHByZXYpID0+ICFwcmV2KTtcclxuXHJcblxyXG4gICAgLy8gQWRkIE1vZGFsIENvbXBvbmVudHNcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkR3VpZGVsaW5lID0gKG5ld0d1aWRlbGluZSkgPT4ge1xyXG4gICAgICAvLyBBZGQgdGhlIG5ldyBndWlkZWxpbmUgdG8gdGhlIHRhYmxlIGFuZCBkYXRhYmFzZVxyXG4gICAgICBzZXRHdWlkZWxpbmVzKChwcmV2KSA9PiBbLi4ucHJldiwgbmV3R3VpZGVsaW5lXSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICAgIFxyXG4gICAgLy8gVGFibGUgQ29tcG9uZW50c1xyXG4gICAgY29uc3QgW2N1cnJlbnRQYWdlLCBzZXRDdXJyZW50UGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gdXNlU3RhdGUoNSk7IC8vIFNldCA1IGFzIGRlZmF1bHQgbnVtYmVyIG9mIHJvd3MgcGVyIHBhZ2VcclxuICAgIGNvbnN0IGluZGV4T2ZMYXN0Um93ID0gY3VycmVudFBhZ2UgKiByb3dzUGVyUGFnZTtcclxuICAgIGNvbnN0IGluZGV4T2ZGaXJzdFJvdyA9IGluZGV4T2ZMYXN0Um93IC0gcm93c1BlclBhZ2U7XHJcbiAgICBjb25zdCBjdXJyZW50R3VpZGVsaW5lcyA9IGd1aWRlbGluZXMuc2xpY2UoaW5kZXhPZkZpcnN0Um93LCBpbmRleE9mTGFzdFJvdyk7XHJcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gTWF0aC5jZWlsKGd1aWRlbGluZXMubGVuZ3RoIC8gcm93c1BlclBhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVBhZ2VDaGFuZ2UgPSB1c2VDYWxsYmFjaygobmV3UGFnZSkgPT4ge1xyXG4gICAgICBpZiAobmV3UGFnZSA+PSAxICYmIG5ld1BhZ2UgPD0gdG90YWxQYWdlcykge1xyXG4gICAgICAgIHNldEN1cnJlbnRQYWdlKG5ld1BhZ2UpO1xyXG4gICAgICB9XHJcbiAgICB9LCBbdG90YWxQYWdlc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVJvd3NQZXJQYWdlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKGV2ZW50KSA9PiB7XHJcbiAgICAgIHNldFJvd3NQZXJQYWdlKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSwgMTApKTtcclxuICAgICAgc2V0Q3VycmVudFBhZ2UoMSk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gRmV0Y2ggZ3VpZGVsaW5lcyBmcm9tIERCXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaEd1aWRlbGluZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTo1MDAwL2d1aWRlbGluZXMvJywge1xyXG4gICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgIH1cclxuICBcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgIHNldEd1aWRlbGluZXMoZGF0YSk7IC8vIFNhdmUgZmV0Y2hlZCBndWlkZWxpbmVzIHRvIHN0YXRlXHJcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBndWlkZWxpbmVzOicsIGVycik7XHJcbiAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyLm1lc3NhZ2UpOyAvLyBTYXZlIGVycm9yIHRvIHN0YXRlIGZvciBkaXNwbGF5XHJcbiAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfTtcclxuICBcclxuICAgICAgZmV0Y2hHdWlkZWxpbmVzKCk7XHJcbiAgfSwgW10pO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPFRhYmxlQ29udGFpbmVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgey8qIDxUYWJsZVRpdGxlIHRoZW1lPXt0aGVtZX0+R3VpZGVsaW5lczwvVGFibGVUaXRsZT4gKi99XHJcbiAgICAgICAgPFN0eWxlZFRhYmxlPlxyXG4gICAgICAgICAgPFRhYmxlSGVhZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgIDxUYWJsZUhlYWRlclJvdz5cclxuICAgICAgICAgICAgICA8VGFibGVIZWFkZXJDZWxsIHRoZW1lPXt0aGVtZX0+R3VpZGVsaW5lPC9UYWJsZUhlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PkRlc2NyaXB0aW9uPC9UYWJsZUhlYWRlckNlbGw+XHJcblxyXG4gICAgICAgICAgICAgIHtpc0VkaXRpbmcgJiYgPFRhYmxlSGVhZGVyQWN0aW9uQ2VsbCB0aGVtZT17dGhlbWV9PkFjdGlvbnM8L1RhYmxlSGVhZGVyQWN0aW9uQ2VsbD4gfSB7LyogQ29uZGl0aW9uYWxseSByZW5kZXIgYWN0aW9uIGNvbHVtbiAqL31cclxuXHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckFjdGlvbkNlbGwgdGhlbWU9e3RoZW1lfT5BY3Rpb25zPC9UYWJsZUhlYWRlckFjdGlvbkNlbGw+ICovfVxyXG5cclxuICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PnNoaWZ0X2RheXM8L1RhYmxlSGVhZGVyQ2VsbD4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxUYWJsZUhlYWRlckNlbGwgdGhlbWU9e3RoZW1lfT5kYXlfdHlwZTwvVGFibGVIZWFkZXJDZWxsPiAqL31cclxuICAgICAgICAgICAgICB7LyogPFRhYmxlSGVhZGVyQ2VsbCB0aGVtZT17dGhlbWV9PnN0YXJ0PC9UYWJsZUhlYWRlckNlbGw+ICovfVxyXG4gICAgICAgICAgICA8L1RhYmxlSGVhZGVyUm93PlxyXG4gICAgICAgICAgPC9UYWJsZUhlYWRlcj5cclxuICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgIHtndWlkZWxpbmVzLm1hcCgoZ3VpZGVsaW5lLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2luZGV4fSB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgPERhdGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVsxXX08L0RhdGVDZWxsPiBcclxuICAgICAgICAgICAgICAgIDxEZXNjcmlwdGlvbkNlbGwgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICAgICAgICB7LyogRGVzY3JpcHRpb246IFN0YXJ0cyBjb3VudGluZyB7c2hpZnRfZGF5c30ge2RheV90eXBlfSBmcm9tIHlvdXIgZGVzaXJlZCBzdGFydGRhdGUgKi99XHJcbiAgICAgICAgICAgICAge2BTdGFydHMgY291bnRpbmcgJHtndWlkZWxpbmVbMl19ICR7Z3VpZGVsaW5lWzNdfSBkYXlzIGZyb20geW91ciBjaG9zZW4gc3RhcnRkYXRlYH1cclxuICAgICAgICAgICAgICAgICAgPC9EZXNjcmlwdGlvbkNlbGw+IFxyXG5cclxuICAgICAgICAgICAgICAgICAge2lzRWRpdGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICA8RWRpdEJ1dHRvbj5FZGl0PC9FZGl0QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uPkRlbGV0ZTwvRGVsZXRlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPFRhYmxlQ2VsbCB0aGVtZT17dGhlbWV9PntndWlkZWxpbmVbMl19PC9UYWJsZUNlbGw+ICAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8VGFibGVDZWxsIHRoZW1lPXt0aGVtZX0+e2d1aWRlbGluZVszXX08L1RhYmxlQ2VsbD4gICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxUYWJsZUNlbGwgdGhlbWU9e3RoZW1lfT57Z3VpZGVsaW5lWzRdfTwvVGFibGVDZWxsPiAgKi99XHJcbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICA8L1N0eWxlZFRhYmxlPlxyXG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG5cclxuICAgICAgey8qIEZsb2F0aW5nIEJ1dHRvbiAqL31cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxyXG4gICAgICAgICAgYm90dG9tOiBcIjIwcHhcIixcclxuICAgICAgICAgIHJpZ2h0OiBcIjIwcHhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMTBweCAxNXB4XCIsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGlzRWRpdGluZyA/IFwicmVkXCIgOiBcImdyZWVuXCIsXHJcbiAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcclxuICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVFZGl0aW5nTW9kZX1cclxuICAgICAgPlxyXG4gICAgICAgIHtpc0VkaXRpbmcgPyA8PiA8QXJyb3dCYWNrSWNvbiBzeD17e2ZvbnRTaXplOid4eGxhcmdlJ319Lz4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgPEFkZEJ1dHRvblxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzc1cHgnLFxyXG4gICAgICAgICAgICByaWdodDogJzIzcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNXB4JyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICArXHJcbiAgICAgICAgPC9BZGRCdXR0b24+PC8+XHJcblxyXG5cclxuOiA8RWRpdEljb24vPn1cclxuICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICA8QWRkR3VpZGVsaW5lTW9kYWxcclxuICAgICAgc2hvdz17c2hvd01vZGFsfVxyXG4gICAgICBvbkNsb3NlPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICBvblNhdmU9e2hhbmRsZUFkZEd1aWRlbGluZX1cclxuICAgIC8+XHJcblxyXG5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3VpZGVsaW5lc1RhYmxlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwic3R5bGVkIiwidXNlVGhlbWUiLCJFZGl0SWNvbiIsIkFycm93QmFja0ljb24iLCJUYWJsZUNvbnRhaW5lciIsIlN0eWxlZFRhYmxlIiwiVGFibGVIZWFkZXIiLCJUYWJsZUhlYWRlclJvdyIsIlRhYmxlSGVhZGVyQ2VsbCIsIlRhYmxlSGVhZGVyQWN0aW9uQ2VsbCIsIlRhYmxlQm9keSIsIlRhYmxlUm93IiwiVGFibGVDZWxsIiwiRGF0ZUNlbGwiLCJEZXNjcmlwdGlvbkNlbGwiLCJBY3Rpb25DZWxsIiwiU2F2ZUJ1dHRvbkNlbGwiLCJUYWJsZUZvb3RlciIsIlRhYmxlRm9vdGVyUm93IiwiVGFibGVGb290ZXJDZWxsIiwiQ29udGFpbmVyIiwiQ2VudGVyIiwiUmlnaHQiLCJOb3RpZmljYXRpb24iLCJTdHlsZWRTZWxlY3QiLCJTdHlsZWRJbnB1dCIsIkFkZEJ1dHRvbiIsIkNhbmNlbEJ1dHRvbiIsIkVkaXRCdXR0b24iLCJEZWxldGVCdXR0b24iLCJHdWlkZWxpbmVzVGFibGUiLCJndWlkZWxpbmVzIiwic2V0R3VpZGVsaW5lcyIsImVycm9yIiwic2V0RXJyb3IiLCJpc0VkaXRpbmciLCJzZXRJc0VkaXRpbmciLCJ0b2dnbGVFZGl0aW5nTW9kZSIsInByZXYiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVBZGRHdWlkZWxpbmUiLCJuZXdHdWlkZWxpbmUiLCJ0aGVtZSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaW5kZXhPZkxhc3RSb3ciLCJpbmRleE9mRmlyc3RSb3ciLCJjdXJyZW50R3VpZGVsaW5lcyIsInNsaWNlIiwidG90YWxQYWdlcyIsIk1hdGgiLCJjZWlsIiwibGVuZ3RoIiwiaGFuZGxlUGFnZUNoYW5nZSIsIm5ld1BhZ2UiLCJoYW5kbGVSb3dzUGVyUGFnZUNoYW5nZSIsImV2ZW50IiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hHdWlkZWxpbmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZGF0YSIsImpzb24iLCJlcnIiLCJjb25zb2xlIiwibWVzc2FnZSIsIm1hcCIsImd1aWRlbGluZSIsImluZGV4IiwiYnV0dG9uIiwic3R5bGUiLCJwb3NpdGlvbiIsImJvdHRvbSIsInJpZ2h0IiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiY3Vyc29yIiwib25DbGljayIsInN4IiwiZm9udFNpemUiLCJBZGRHdWlkZWxpbmVNb2RhbCIsInNob3ciLCJvbkNsb3NlIiwib25TYXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Guidelines.js\n"));

/***/ })

});