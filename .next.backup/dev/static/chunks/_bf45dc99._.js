(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Timeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timeline",
    ()=>Timeline,
    "timelineData",
    ()=>timelineData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Timeline(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "00bb5e13496e704b531c523032a1904f02f1c5f52f67b58aee4a601cfcc85fbb") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "00bb5e13496e704b531c523032a1904f02f1c5f52f67b58aee4a601cfcc85fbb";
    }
    const { items } = t0;
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    if ($[1] !== filter || $[2] !== items) {
        t1 = filter === "all" ? items : items.filter({
            "Timeline[items.filter()]": (item)=>item.category === filter
        }["Timeline[items.filter()]"]);
        $[1] = filter;
        $[2] = items;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredItems = t1;
    const getCategoryColor = _TimelineGetCategoryColor;
    const getCategoryIcon = _TimelineGetCategoryIcon;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold mb-4 text-green-800",
                    children: "My Journey"
                }, void 0, false, {
                    fileName: "[project]/components/Timeline.tsx",
                    lineNumber: 46,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 max-w-2xl mx-auto",
                    children: "Explore the milestones that have shaped my career and community impact"
                }, void 0, false, {
                    fileName: "[project]/components/Timeline.tsx",
                    lineNumber: 46,
                    columnNumber: 115
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Timeline[<button>.onClick]": ()=>setFilter("all")
        })["Timeline[<button>.onClick]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const t4 = `px-5 py-2 rounded-full font-medium transition-all duration-300 ${filter === "all" ? "bg-green-700 text-white shadow-lg transform scale-105" : "bg-white text-gray-700 hover:bg-green-100 shadow-md"}`;
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t3,
            className: t4,
            children: "All"
        }, void 0, false, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "Timeline[<button>.onClick]": ()=>setFilter("political")
        })["Timeline[<button>.onClick]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = `px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${filter === "political" ? "bg-blue-600 text-white shadow-lg transform scale-105" : "bg-white text-gray-700 hover:bg-blue-100 shadow-md"}`;
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "material-symbols-outlined text-base mr-2",
            children: "gavel"
        }, void 0, false, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== t7) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t6,
            className: t7,
            children: [
                t8,
                "Political"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[10] = t7;
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Timeline[<button>.onClick]": ()=>setFilter("philanthropic")
        })["Timeline[<button>.onClick]"];
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    const t11 = `px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${filter === "philanthropic" ? "bg-red-600 text-white shadow-lg transform scale-105" : "bg-white text-gray-700 hover:bg-red-100 shadow-md"}`;
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "material-symbols-outlined text-base mr-2",
            children: "volunteer_activism"
        }, void 0, false, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] !== t11) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t10,
            className: t11,
            children: [
                t12,
                "Philanthropic"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[14] = t11;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "Timeline[<button>.onClick]": ()=>setFilter("personal")
        })["Timeline[<button>.onClick]"];
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    const t15 = `px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center ${filter === "personal" ? "bg-purple-600 text-white shadow-lg transform scale-105" : "bg-white text-gray-700 hover:bg-purple-100 shadow-md"}`;
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "material-symbols-outlined text-base mr-2",
            children: "person"
        }, void 0, false, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: t15,
            children: [
                t16,
                "Personal"
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[18] = t15;
        $[19] = t17;
    } else {
        t17 = $[19];
    }
    let t18;
    if ($[20] !== t13 || $[21] !== t17 || $[22] !== t5 || $[23] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-3 mb-12",
            children: [
                t5,
                t9,
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[20] = t13;
        $[21] = t17;
        $[22] = t5;
        $[23] = t9;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-400 to-green-600 hidden md:block"
        }, void 0, false, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 157,
            columnNumber: 11
        }, this);
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] !== filteredItems) {
        let t21;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = ({
                "Timeline[filteredItems.map()]": (item_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `md:w-5/12 mb-4 md:mb-0 ${index % 2 === 0 ? "md:pr-8 text-right" : "md:pl-8 text-left"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap justify-between items-start mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 mb-2",
                                                    children: item_0.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 486
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getCategoryColor(item_0.category)} flex items-center`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-base mr-1",
                                                            children: getCategoryIcon(item_0.category)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Timeline.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 689
                                                        }, this),
                                                        item_0.category
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Timeline.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 558
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 167,
                                            columnNumber: 421
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-gray-600 mb-3",
                                            children: item_0.description
                                        }, void 0, false, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 167,
                                            columnNumber: 819
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium text-green-700",
                                            children: item_0.date
                                        }, void 0, false, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 167,
                                            columnNumber: 882
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Timeline.tsx",
                                    lineNumber: 167,
                                    columnNumber: 300
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 167,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-2/12 flex justify-center relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-green-700 border-4 border-white shadow-lg z-10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-3 h-3 rounded-full bg-white"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Timeline.tsx",
                                            lineNumber: 167,
                                            columnNumber: 1142
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Timeline.tsx",
                                        lineNumber: 167,
                                        columnNumber: 1021
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-8 h-12 w-1 bg-green-200 md:hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Timeline.tsx",
                                        lineNumber: 167,
                                        columnNumber: 1197
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 167,
                                columnNumber: 965
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:block md:w-5/12"
                            }, void 0, false, {
                                fileName: "[project]/components/Timeline.tsx",
                                lineNumber: 167,
                                columnNumber: 1269
                            }, this)
                        ]
                    }, item_0.id, true, {
                        fileName: "[project]/components/Timeline.tsx",
                        lineNumber: 167,
                        columnNumber: 61
                    }, this)
            })["Timeline[filteredItems.map()]"];
            $[28] = t21;
        } else {
            t21 = $[28];
        }
        t20 = filteredItems.map(t21);
        $[26] = filteredItems;
        $[27] = t20;
    } else {
        t20 = $[27];
    }
    let t21;
    if ($[29] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-4xl mx-auto",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-12",
                    children: t20
                }, void 0, false, {
                    fileName: "[project]/components/Timeline.tsx",
                    lineNumber: 181,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[29] = t20;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== t18 || $[32] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-gradient-to-br from-gray-50 to-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: [
                    t2,
                    t18,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/components/Timeline.tsx",
                lineNumber: 189,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Timeline.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[31] = t18;
        $[32] = t21;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    return t22;
}
_s(Timeline, "boPJerHaELAyf+PNkR+Y8+JetQg=");
_c = Timeline;
// Example usage data
function _TimelineGetCategoryIcon(category_0) {
    switch(category_0){
        case "political":
            {
                return "gavel";
            }
        case "philanthropic":
            {
                return "volunteer_activism";
            }
        case "personal":
            {
                return "person";
            }
        default:
            {
                return "event";
            }
    }
}
function _TimelineGetCategoryColor(category) {
    switch(category){
        case "political":
            {
                return "bg-blue-100 text-blue-800 border-blue-200";
            }
        case "philanthropic":
            {
                return "bg-red-100 text-red-800 border-red-200";
            }
        case "personal":
            {
                return "bg-purple-100 text-purple-800 border-purple-200";
            }
        default:
            {
                return "bg-gray-100 text-gray-800 border-gray-200";
            }
    }
}
const timelineData = [
    {
        id: 1,
        title: "Early Life & Education",
        description: "Born in Kano State. Pursued academic excellence with a focus on community service.",
        date: "1980 - 2000s",
        category: "personal"
    },
    {
        id: 2,
        title: "Community Initiatives",
        description: "Started grassroots development projects in Nasarawa, providing support for local education and healthcare.",
        date: "2010 - 2022",
        category: "philanthropic"
    },
    {
        id: 3,
        title: "Elected to House of Reps",
        description: "Elected to represent the good people of Nasarawa Federal Constituency.",
        date: "2023",
        category: "political"
    },
    {
        id: 4,
        title: "Progressive Alignment & Massive Empowerment",
        description: "Joined the All Progressives Congress (APC) to foster greater development. Launched historic offers including Army recruitment slots, foreign scholarships, and vehicle empowerment schemes.",
        date: "2024",
        category: "political"
    },
    {
        id: 5,
        title: "Vision 2025: Sustainable Growth",
        description: "Spearheading new bills for constituency development, expanding the solar borehole network to 50+, and digitizing local education.",
        date: "2025 - Future",
        category: "philanthropic"
    }
];
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HomePage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomePage",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Timeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function HomePage(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "505cd308890f0da7571f358074d629c7e9ef88f3e892b4f865d67b567ff94fb7") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "505cd308890f0da7571f358074d629c7e9ef88f3e892b4f865d67b567ff94fb7";
    }
    const { data } = t0;
    const { title: t1 } = data || {};
    t1 === undefined ? "Hon. Hassan Shehu Hussain (Hon. HASH)" : t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-0 w-full h-full overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-green-500/30 rounded-full blur-[120px] animate-blob"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 38,
                    columnNumber: 79
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-yellow-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 38,
                    columnNumber: 201
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-green-800/40 rounded-full blur-[130px] animate-blob animation-delay-4000"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 38,
                    columnNumber: 345
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-sm font-semibold tracking-wide uppercase text-green-100 shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "w-2 h-2 rounded-full bg-green-400 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 45,
                    columnNumber: 204
                }, this),
                "Member, House of Representatives"
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    let t6;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200",
            children: "The People's"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 54,
            columnNumber: 10
        }, this);
        $[4] = t5;
        $[5] = t6;
    } else {
        t5 = $[4];
        t6 = $[5];
    }
    let t7;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm",
            children: [
                "Championing ",
                t5,
                t6,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 63,
                    columnNumber: 134
                }, this),
                "Mandate"
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[6] = t7;
    } else {
        t7 = $[6];
    }
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold text-white",
            children: "tangible projects"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl sm:text-2xl font-light text-green-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed",
            children: [
                "Driving sustainable development in Nasarawa Federal Constituency through ",
                t8,
                " and ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-white",
                    children: "inclusive representation"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 77,
                    columnNumber: 196
                }, this),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    let t10;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/projects",
            className: "group bg-white text-green-900 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-green-50 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Explore Projects"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 84,
                    columnNumber: 280
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined group-hover:translate-x-1 transition-transform",
                    children: "arrow_forward"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 84,
                    columnNumber: 309
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[9] = t10;
    } else {
        t10 = $[9];
    }
    let t11;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up",
            children: [
                t4,
                t7,
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-5 justify-center lg:justify-start pt-4",
                    children: [
                        t10,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/volunteer",
                            className: "group bg-green-800/40 backdrop-blur-sm border border-green-400/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-green-700/50 hover:border-green-400 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Join Movement"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomePage.tsx",
                                    lineNumber: 91,
                                    columnNumber: 426
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-green-300 group-hover:text-white transition-colors",
                                    children: "volunteer_activism"
                                }, void 0, false, {
                                    fileName: "[project]/components/HomePage.tsx",
                                    lineNumber: 91,
                                    columnNumber: 452
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 91,
                            columnNumber: 183
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 91,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-green-500 rounded-full blur-[20px] opacity-20 animate-pulse"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 98,
            columnNumber: 11
        }, this);
        $[11] = t12;
    } else {
        t12 = $[11];
    }
    let t13;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full rounded-full overflow-hidden border-[10px] border-white/10 shadow-2xl relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/images/gallery/0-Portraits-Official/potraitn.jpg",
                alt: "Hon. Hassan Shehu Hussain",
                fill: true,
                className: "object-cover scale-110 hover:scale-100 transition-transform duration-1000",
                sizes: "(max-width: 640px) 100vw, 500px",
                priority: true
            }, void 0, false, {
                fileName: "[project]/components/HomePage.tsx",
                lineNumber: 105,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 105,
            columnNumber: 11
        }, this);
        $[12] = t13;
    } else {
        t13 = $[12];
    }
    let t14;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-[15%] -left-[5%] lg:-left-[10%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-blob",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-green-100 p-2 rounded-lg text-green-700",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined",
                            children: "folder_open"
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 112,
                            columnNumber: 299
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 112,
                        columnNumber: 239
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-black text-2xl text-gray-900 leading-none",
                                children: "50"
                            }, void 0, false, {
                                fileName: "[project]/components/HomePage.tsx",
                                lineNumber: 112,
                                columnNumber: 372
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1",
                                children: "Projects Done"
                            }, void 0, false, {
                                fileName: "[project]/components/HomePage.tsx",
                                lineNumber: 112,
                                columnNumber: 444
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 112,
                        columnNumber: 367
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomePage.tsx",
                lineNumber: 112,
                columnNumber: 198
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 112,
            columnNumber: 11
        }, this);
        $[13] = t14;
    } else {
        t14 = $[13];
    }
    let t15;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white overflow-hidden pb-32",
            children: [
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 sm:px-6 md:px-8 py-20 lg:py-32 relative z-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-1/2 relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-2000",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]",
                                    children: [
                                        t12,
                                        t13,
                                        t14,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-[15%] -right-[5%] lg:-right-[5%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-blob animation-delay-2000",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-yellow-100 p-2 rounded-lg text-yellow-700",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            children: "groups"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/HomePage.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 848
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/HomePage.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 786
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-black text-2xl text-gray-900 leading-none",
                                                                children: "20,000+"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HomePage.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 916
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1",
                                                                children: "Lives Impacted"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/HomePage.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 993
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/HomePage.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 911
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/HomePage.tsx",
                                                lineNumber: 119,
                                                columnNumber: 745
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomePage.tsx",
                                            lineNumber: 119,
                                            columnNumber: 533
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomePage.tsx",
                                    lineNumber: 119,
                                    columnNumber: 415
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HomePage.tsx",
                                lineNumber: 119,
                                columnNumber: 305
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 119,
                        columnNumber: 227
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 119,
                    columnNumber: 142
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[14] = t15;
    } else {
        t15 = $[14];
    }
    let t16;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-green-600 font-bold uppercase tracking-wider text-sm",
                    children: "Latest Opportunities"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 126,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-gray-900 mt-2",
                    children: "Recent Empowerment Offers"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 126,
                    columnNumber: 119
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[15] = t16;
    } else {
        t16 = $[15];
    }
    let t17;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-100 pb-4",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/projects",
                    className: "text-green-700 font-semibold hover:text-green-800 flex items-center gap-1 mt-4 md:mt-0",
                    children: [
                        "View All Opportunities ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "material-symbols-outlined text-sm",
                            children: "arrow_forward"
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 133,
                            columnNumber: 265
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 133,
                    columnNumber: 120
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[16] = t17;
    } else {
        t17 = $[16];
    }
    let t18;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-48 relative bg-gray-200 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/projects/emp-8/offers.jpg",
                    alt: "Recruitment Facilitation",
                    fill: true,
                    className: "object-cover transition-transform duration-500 group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 140,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full",
                    children: "Completed"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 140,
                    columnNumber: 250
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[17] = t18;
    } else {
        t18 = $[17];
    }
    let t19;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors",
                            children: "Job Recruitment Facilitation"
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 147,
                            columnNumber: 164
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm mb-4",
                            children: "Successful facilitation in the recruitment of numerous constituents into various positions across federal and state institutions."
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 147,
                            columnNumber: 295
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "text-sm font-bold text-green-700 hover:underline",
                            children: "Read More"
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 147,
                            columnNumber: 470
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 147,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[18] = t19;
    } else {
        t19 = $[18];
    }
    let t20;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-48 relative bg-gray-200 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/projects/edu-9/571428346_24746426055026768_5264726448286573770_n.jpg",
                    alt: "Polytechnic Offer",
                    fill: true,
                    className: "object-cover transition-transform duration-500 group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 154,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full",
                    children: "Completed"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 154,
                    columnNumber: 286
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 154,
            columnNumber: 11
        }, this);
        $[19] = t20;
    } else {
        t20 = $[19];
    }
    let t21;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors",
                            children: "Kano State Polytechnic Scholarship"
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 161,
                            columnNumber: 164
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 text-sm mb-4",
                            children: "Sponsored 100 students on full scholarship at Kano State Polytechnic in the 2024/25 academic session."
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 161,
                            columnNumber: 301
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/projects",
                            className: "text-sm font-bold text-green-700 hover:underline",
                            children: "Read More"
                        }, void 0, false, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 161,
                            columnNumber: 448
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 161,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[20] = t21;
    } else {
        t21 = $[20];
    }
    let t22;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-48 relative bg-gray-200 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/images/projects/emp-3/many motors.jpg",
                    alt: "Motorcycles",
                    fill: true,
                    className: "object-cover transition-transform duration-500 group-hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 168,
                    columnNumber: 70
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full",
                    children: "Empowerment"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 168,
                    columnNumber: 242
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 168,
            columnNumber: 11
        }, this);
        $[21] = t22;
    } else {
        t22 = $[21];
    }
    let t23;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-8 -mt-20 relative z-20 px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8 border border-gray-100",
                    children: [
                        t17,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                            children: [
                                t19,
                                t21,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100",
                                    children: [
                                        t22,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors",
                                                    children: "Motorcycle Empowerment"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomePage.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 396
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-sm mb-4",
                                                    children: "Distribution of around 300 motorcycles to women and youth for mobility and economic empowerment."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomePage.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 521
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/projects",
                                                    className: "text-sm font-bold text-green-700 hover:underline",
                                                    children: "Read More"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HomePage.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 663
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HomePage.tsx",
                                            lineNumber: 175,
                                            columnNumber: 375
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomePage.tsx",
                                    lineNumber: 175,
                                    columnNumber: 243
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 175,
                            columnNumber: 178
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 175,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomePage.tsx",
                lineNumber: 175,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[22] = t23;
    } else {
        t23 = $[22];
    }
    let t24;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl lg:text-4xl font-black mb-4 text-green-900",
                    children: "Transforming Communities"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 182,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 max-w-2xl mx-auto text-lg",
                    children: "Visual proof of our ongoing commitment to infrastructure, healthcare, and education across Nasarawa."
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 182,
                    columnNumber: 143
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[23] = t24;
    } else {
        t24 = $[23];
    }
    let t25;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/assets/images/projects/elec-4/505854166_3178447675642520_353271535521781115_n.jpg",
            alt: "Solar Infrastructure",
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-110"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[24] = t25;
    } else {
        t25 = $[24];
    }
    let t26;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden shadow-lg group",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "Solar Power"
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 196,
                        columnNumber: 234
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 196,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[25] = t26;
    } else {
        t26 = $[25];
    }
    let t27;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/assets/images/projects/road-2/bridges in twada.jpg",
            alt: "Road Construction",
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-105"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[26] = t27;
    } else {
        t27 = $[26];
    }
    let t28;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden shadow-lg group col-span-2 row-span-2",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-xl",
                        children: "Road Infrastructure"
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 210,
                        columnNumber: 256
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 210,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 210,
            columnNumber: 11
        }, this);
        $[27] = t28;
    } else {
        t28 = $[27];
    }
    let t29;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/assets/images/projects/edu-3/575178587_3340162012804418_4419926163255643774_n.jpg",
            alt: "Education Support",
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-110"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 217,
            columnNumber: 11
        }, this);
        $[28] = t29;
    } else {
        t29 = $[28];
    }
    let t30;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden shadow-lg group",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "Education"
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 224,
                        columnNumber: 234
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 224,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 224,
            columnNumber: 11
        }, this);
        $[29] = t30;
    } else {
        t30 = $[29];
    }
    let t31;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/assets/images/projects/emp-1/many sewing.jpg",
            alt: "Skills Acquisition",
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-110"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[30] = t31;
    } else {
        t31 = $[30];
    }
    let t32;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden shadow-lg group",
            children: [
                t31,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "Empowerment"
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 238,
                        columnNumber: 234
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 238,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[31] = t32;
    } else {
        t32 = $[31];
    }
    let t33;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/assets/images/projects/emp-6/584489132_3355629987924287_3275329239357496468_n.jpg",
            alt: "Food Security",
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-110"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[32] = t33;
    } else {
        t33 = $[32];
    }
    let t34;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden shadow-lg group",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white font-bold text-sm",
                        children: "Food Security"
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 252,
                        columnNumber: 234
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 252,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[33] = t34;
    } else {
        t34 = $[33];
    }
    let t35;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: "/assets/images/projects/edu-6/CHILDREN ORphan.jpg",
            alt: "Community Building",
            fill: true,
            className: "object-cover transition-transform duration-700 group-hover:scale-110"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[34] = t35;
    } else {
        t35 = $[34];
    }
    let t36;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: [
                    t24,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]",
                        children: [
                            t26,
                            t28,
                            t30,
                            t32,
                            t34,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative rounded-2xl overflow-hidden shadow-lg group col-span-2 md:col-span-1",
                                children: [
                                    t35,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold text-sm",
                                            children: "Community Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomePage.tsx",
                                            lineNumber: 266,
                                            columnNumber: 477
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomePage.tsx",
                                        lineNumber: 266,
                                        columnNumber: 329
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomePage.tsx",
                                lineNumber: 266,
                                columnNumber: 229
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 266,
                        columnNumber: 116
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomePage.tsx",
                lineNumber: 266,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[35] = t36;
    } else {
        t36 = $[35];
    }
    let t37;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl lg:text-4xl font-black mb-4 text-green-900",
                    children: "Impact In Numbers"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 273,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 max-w-2xl mx-auto text-lg",
                    children: "Quantifying our commitment to the Nasarawa Federal Constituency through verified data."
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 273,
                    columnNumber: 136
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[36] = t37;
    } else {
        t37 = $[36];
    }
    let t38;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-green-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl font-black text-gray-900 mb-2",
                    children: "1,200+"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 280,
                    columnNumber: 179
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-600 font-bold uppercase tracking-wide text-sm",
                    children: "Solar Street Lights"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 280,
                    columnNumber: 247
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[37] = t38;
    } else {
        t38 = $[37];
    }
    let t39;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-green-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl font-black text-gray-900 mb-2",
                    children: "30+"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 287,
                    columnNumber: 179
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-green-600 font-bold uppercase tracking-wide text-sm",
                    children: "Boreholes Drilled"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 287,
                    columnNumber: 244
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[38] = t39;
    } else {
        t39 = $[38];
    }
    let t40;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-yellow-500",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-5xl font-black text-gray-900 mb-2",
                    children: "1,127"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 294,
                    columnNumber: 180
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-yellow-600 font-bold uppercase tracking-wide text-sm",
                    children: "Scholarships Awarded"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 294,
                    columnNumber: 247
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[39] = t40;
    } else {
        t40 = $[39];
    }
    let t41;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-gradient-to-br from-gray-50 to-gray-100",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: [
                    t37,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                        children: [
                            t38,
                            t39,
                            t40,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-5xl font-black text-gray-900 mb-2",
                                        children: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomePage.tsx",
                                        lineNumber: 301,
                                        columnNumber: 386
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-blue-600 font-bold uppercase tracking-wide text-sm",
                                        children: "Unique Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HomePage.tsx",
                                        lineNumber: 301,
                                        columnNumber: 450
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HomePage.tsx",
                                lineNumber: 301,
                                columnNumber: 219
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 301,
                        columnNumber: 134
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HomePage.tsx",
                lineNumber: 301,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[40] = t41;
    } else {
        t41 = $[40];
    }
    let t42;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 left-4 w-full h-full bg-green-100 rounded-2xl -z-10 transform -rotate-3"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[41] = t42;
    } else {
        t42 = $[41];
    }
    let t43;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full lg:w-5/12 relative",
            children: [
                t42,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl overflow-hidden shadow-2xl relative h-[400px] sm:h-[450px] lg:h-[500px] w-full transform hover:scale-[1.01] transition-transform duration-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/images/gallery/0-Portraits-Official/hon-standing-on-speaker-reading-book.jpg",
                        alt: "Hon. HASH at the podium",
                        fill: true,
                        className: "object-cover object-top",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        priority: true,
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/components/HomePage.tsx",
                        lineNumber: 315,
                        columnNumber: 230
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 315,
                    columnNumber: 59
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, this);
        $[42] = t43;
    } else {
        t43 = $[42];
    }
    let t44;
    let t45;
    let t46;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "text-green-600 font-bold uppercase tracking-wider mb-2",
            children: "Meet Your Representative"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl font-black mb-6 text-gray-900 leading-tight",
            children: "Championing the People's Mandate"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 325,
            columnNumber: 11
        }, this);
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg mb-6 text-gray-700 leading-relaxed",
            children: "Hon. Hassan Shehu Hussain (Hon. HASH) is a transformative leader representing Nasarawa Federal Constituency. Now identifying with the All Progressives Congress (APC) to further align his constituency with national development goals, he continues to set the standard for effective representation."
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[43] = t44;
        $[44] = t45;
        $[45] = t46;
    } else {
        t44 = $[43];
        t45 = $[44];
        t46 = $[45];
    }
    let t47;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-gray-900",
            children: "facilitating recruitment"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[46] = t47;
    } else {
        t47 = $[46];
    }
    let t48;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-bold text-gray-900",
            children: "Direct Impact"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[47] = t48;
    } else {
        t48 = $[47];
    }
    let t49;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg mb-8 text-gray-700 leading-relaxed",
            children: [
                "From ",
                t47,
                " into federal and state institutions to distributing hundreds of empowering tools like motorcycles and sewing machines, his tenure is defined by ",
                t48,
                " and ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-gray-900",
                    children: "Transparent Governance"
                }, void 0, false, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 351,
                    columnNumber: 234
                }, this),
                "."
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[48] = t49;
    } else {
        t49 = $[48];
    }
    let t50;
    let t51;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col lg:flex-row items-center gap-16",
                    children: [
                        t43,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:w-7/12",
                            children: [
                                t44,
                                t45,
                                t46,
                                t49,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "inline-block bg-gray-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg",
                                            children: "Read Full Biography"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomePage.tsx",
                                            lineNumber: 359,
                                            columnNumber: 255
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            className: "inline-block bg-white border-2 border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition duration-300",
                                            children: "Contact Constituency Office"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomePage.tsx",
                                            lineNumber: 359,
                                            columnNumber: 432
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomePage.tsx",
                                    lineNumber: 359,
                                    columnNumber: 217
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 359,
                            columnNumber: 170
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 359,
                    columnNumber: 102
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/HomePage.tsx",
                lineNumber: 359,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 359,
            columnNumber: 11
        }, this);
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timeline"], {
            items: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timelineData"]
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 360,
            columnNumber: 11
        }, this);
        $[49] = t50;
        $[50] = t51;
    } else {
        t50 = $[49];
        t51 = $[50];
    }
    let t52;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-green-900/90 mix-blend-multiply"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 369,
            columnNumber: 11
        }, this);
        $[51] = t52;
    } else {
        t52 = $[51];
    }
    let t53;
    let t54;
    let t55;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-2 rounded-full mb-6 animate-pulse",
            children: "Join the Movement"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 378,
            columnNumber: 11
        }, this);
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight text-white drop-shadow-lg",
            children: "Show Your Support"
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 379,
            columnNumber: 11
        }, this);
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto font-medium",
            children: "Generate your personalized campaign sticker today. Be part of the progressive movement reshaping Nasarawa."
        }, void 0, false, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[52] = t53;
        $[53] = t54;
        $[54] = t55;
    } else {
        t53 = $[52];
        t54 = $[53];
        t55 = $[54];
    }
    let t56;
    if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-20",
            children: [
                t15,
                t23,
                t36,
                t41,
                t50,
                t51,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "py-24 bg-[url('/assets/images/projects/road-1/476629181_600759826039972_3454055431456145227_n.jpg')] bg-cover bg-center bg-no-repeat relative bg-fixed",
                    children: [
                        t52,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-4 text-center relative z-10",
                            children: [
                                t53,
                                t54,
                                t55,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/sticker-generator",
                                    className: "inline-flex items-center gap-3 bg-white text-green-900 px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-400 hover:text-green-900 transition-all hover:scale-105 shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "style"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HomePage.tsx",
                                            lineNumber: 391,
                                            columnNumber: 552
                                        }, this),
                                        "Create Custom Sticker"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HomePage.tsx",
                                    lineNumber: 391,
                                    columnNumber: 327
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HomePage.tsx",
                            lineNumber: 391,
                            columnNumber: 246
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/HomePage.tsx",
                    lineNumber: 391,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HomePage.tsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[55] = t56;
    } else {
        t56 = $[55];
    }
    return t56;
}
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MediaGallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaGallery",
    ()=>MediaGallery,
    "mediaData",
    ()=>mediaData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MediaGallery(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "2417e6d8f80cd3a371e2816d99170d76b346535ae25f266cf32e10b0f416d27d") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2417e6d8f80cd3a371e2816d99170d76b346535ae25f266cf32e10b0f416d27d";
    }
    const { items } = t0;
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t1;
    if ($[1] !== filter || $[2] !== items) {
        t1 = filter === "all" ? items : items.filter({
            "MediaGallery[items.filter()]": (item)=>item.type === filter
        }["MediaGallery[items.filter()]"]);
        $[1] = filter;
        $[2] = items;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredItems = t1;
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "MediaGallery[openModal]": (item_0)=>{
                setSelectedItem(item_0);
            }
        })["MediaGallery[openModal]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const openModal = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "MediaGallery[closeModal]": ()=>{
                setSelectedItem(null);
            }
        })["MediaGallery[closeModal]"];
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const closeModal = t3;
    let t4;
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold text-center mb-4 text-green-800",
            children: "Media Gallery"
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
            children: "Explore photos and moments from community events, programs, and initiatives in Nasarawa Federal Constituency."
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "MediaGallery[<button>.onClick]": ()=>setFilter("all")
        })["MediaGallery[<button>.onClick]"];
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = `px-6 py-2 rounded-full font-medium transition-colors ${filter === "all" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-green-100"}`;
    let t8;
    if ($[9] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t6,
            className: t7,
            children: "All Media"
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = t7;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "MediaGallery[<button>.onClick]": ()=>setFilter("image")
        })["MediaGallery[<button>.onClick]"];
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    const t10 = `px-6 py-2 rounded-full font-medium transition-colors ${filter === "image" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-green-100"}`;
    let t11;
    if ($[12] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: t10,
            children: "Photos"
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[12] = t10;
        $[13] = t11;
    } else {
        t11 = $[13];
    }
    let t12;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "MediaGallery[<button>.onClick]": ()=>setFilter("video")
        })["MediaGallery[<button>.onClick]"];
        $[14] = t12;
    } else {
        t12 = $[14];
    }
    const t13 = `px-6 py-2 rounded-full font-medium transition-colors ${filter === "video" ? "bg-green-700 text-white" : "bg-gray-100 text-gray-700 hover:bg-green-100"}`;
    let t14;
    if ($[15] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t12,
            className: t13,
            children: "Videos"
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[15] = t13;
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== t11 || $[18] !== t14 || $[19] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap justify-center gap-4 mb-12",
            children: [
                t8,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t14;
        $[19] = t8;
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== filteredItems) {
        let t17;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = ({
                "MediaGallery[filteredItems.map()]": (item_1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer",
                        onClick: {
                            "MediaGallery[filteredItems.map() > <div>.onClick]": ()=>openModal(item_1)
                        }["MediaGallery[filteredItems.map() > <div>.onClick]"],
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-60",
                                children: [
                                    item_1.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: item_1.src,
                                        alt: item_1.title,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 147,
                                        columnNumber: 123
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-800 w-full h-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-16 h-16 bg-green-500 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-8 h-8 text-white",
                                                fill: "currentColor",
                                                viewBox: "0 0 20 20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/MediaGallery.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 446
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/MediaGallery.tsx",
                                                lineNumber: 147,
                                                columnNumber: 370
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/MediaGallery.tsx",
                                            lineNumber: 147,
                                            columnNumber: 284
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 147,
                                        columnNumber: 208
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 right-4 bg-green-700 text-white text-xs font-bold px-2 py-1 rounded",
                                        children: item_1.type === "image" ? "Photo" : "Video"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 147,
                                        columnNumber: 576
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 147,
                                columnNumber: 65
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-lg mb-1 text-gray-800",
                                        children: item_1.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 147,
                                        columnNumber: 754
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm mb-2 line-clamp-2",
                                        children: item_1.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 147,
                                        columnNumber: 826
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: item_1.date
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 147,
                                        columnNumber: 905
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 147,
                                columnNumber: 733
                            }, this)
                        ]
                    }, item_1.id || index, true, {
                        fileName: "[project]/components/MediaGallery.tsx",
                        lineNumber: 145,
                        columnNumber: 65
                    }, this)
            })["MediaGallery[filteredItems.map()]"];
            $[23] = t17;
        } else {
            t17 = $[23];
        }
        t16 = filteredItems.map(t17);
        $[21] = filteredItems;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[24] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
            children: t16
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[24] = t16;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== selectedItem) {
        t18 = selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4",
            onClick: closeModal,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto",
                onClick: _MediaGalleryDivOnClick,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-bold text-green-800",
                                children: selectedItem.title
                            }, void 0, false, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 169,
                                columnNumber: 323
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: closeModal,
                                className: "text-gray-500 hover:text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-6 h-6",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M6 18L18 6M6 6l12 12"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 169,
                                        columnNumber: 551
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MediaGallery.tsx",
                                    lineNumber: 169,
                                    columnNumber: 472
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 169,
                                columnNumber: 397
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MediaGallery.tsx",
                        lineNumber: 169,
                        columnNumber: 259
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-96 mb-4",
                                children: selectedItem.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: selectedItem.src,
                                    alt: selectedItem.title,
                                    className: "w-full h-full object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/components/MediaGallery.tsx",
                                    lineNumber: 169,
                                    columnNumber: 747
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-800 w-full h-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 h-24 bg-green-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-12 h-12 text-white",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MediaGallery.tsx",
                                                lineNumber: 169,
                                                columnNumber: 1086
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/MediaGallery.tsx",
                                            lineNumber: 169,
                                            columnNumber: 1008
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/MediaGallery.tsx",
                                        lineNumber: 169,
                                        columnNumber: 922
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/MediaGallery.tsx",
                                    lineNumber: 169,
                                    columnNumber: 846
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 169,
                                columnNumber: 687
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 mb-4",
                                children: selectedItem.description
                            }, void 0, false, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 169,
                                columnNumber: 1222
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-gray-500",
                                children: selectedItem.date
                            }, void 0, false, {
                                fileName: "[project]/components/MediaGallery.tsx",
                                lineNumber: 169,
                                columnNumber: 1286
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MediaGallery.tsx",
                        lineNumber: 169,
                        columnNumber: 666
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t text-right",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeModal,
                            className: "bg-green-700 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-800 transition-colors",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/components/MediaGallery.tsx",
                            lineNumber: 169,
                            columnNumber: 1397
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MediaGallery.tsx",
                        lineNumber: 169,
                        columnNumber: 1356
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MediaGallery.tsx",
                lineNumber: 169,
                columnNumber: 144
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 169,
            columnNumber: 27
        }, this);
        $[26] = selectedItem;
        $[27] = t18;
    } else {
        t18 = $[27];
    }
    let t19;
    if ($[28] !== t15 || $[29] !== t17 || $[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8",
                children: [
                    t4,
                    t5,
                    t15,
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/components/MediaGallery.tsx",
                lineNumber: 177,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/MediaGallery.tsx",
            lineNumber: 177,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t17;
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    return t19;
}
_s(MediaGallery, "QDwLXJ0Ba+fpurXdEXhL0KfkvHQ=");
_c = MediaGallery;
// Updated media data with actual image paths
function _MediaGalleryDivOnClick(e) {
    return e.stopPropagation();
}
const mediaData = [
    {
        id: 1,
        type: 'image',
        src: '/assets/solar construction.jpg',
        title: 'Solar Borehole Commissioning',
        description: 'Providing free access to clean water in Gama, Tudun Wada, and Hotoro communities provided by Hon. HASH.',
        date: 'December 5, 2024'
    },
    {
        id: 2,
        type: 'image',
        src: '/assets/motorcycles-21.jpg',
        title: 'Youth Empowerment',
        description: 'Empowering 21 youths with motorcycles to start their own logistics businesses in Nasarawa.',
        date: 'December 26, 2024'
    },
    {
        id: 3,
        type: 'image',
        src: '/assets/nursing-scholarship.jpg',
        title: 'Nursing Scholarship Award',
        description: 'Presentation of scholarship grants to nursing students to boost healthcare capacity in the constituency.',
        date: 'August 7, 2025'
    },
    {
        id: 4,
        type: 'image',
        src: '/assets/images/gallery/0-Portraits-Official/potraitn.jpg',
        title: 'Legislative Duty',
        description: 'Hon. Hassan Shehu Hussain engaging with colleagues at the National Assembly.',
        date: '2024'
    },
    {
        id: 5,
        type: 'image',
        src: '/assets/food-palliatives.jpg',
        title: 'Ramadan Relief',
        description: 'Distribution of grains and cash support to vulnerable families during Ramadan.',
        date: 'March 15, 2024'
    },
    {
        id: 6,
        type: 'image',
        src: '/assets/fertilizer-1800.jpg',
        title: 'Agricultural Support',
        description: 'Flagging off the distribution of 1,800 bags of fertilizer to farmers in Nasarawa.',
        date: 'August 10, 2025'
    },
    {
        id: 7,
        type: 'image',
        src: '/assets/images/projects/emp-4/grinding machine.jpg',
        title: 'Women Empowerment: Grinding Machines',
        description: 'Provision of grinding machines to women groups to support small-scale food processing businesses.',
        date: 'August 2024'
    }
];
var _c;
__turbopack_context__.k.register(_c, "MediaGallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContactSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactSection",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ContactSection() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitSuccess, setSubmitSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitError, setSubmitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e_0)=>{
        e_0.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');
        setSubmitSuccess(false);
        try {
            // Simulate API call
            await new Promise((resolve)=>setTimeout(resolve, 1500));
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setSubmitSuccess(true);
        } catch (error) {
            setSubmitError('Failed to send message. Please try again.');
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 md:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-center mb-4 text-green-800",
                        children: "Get In Touch"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactSection.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-600 mb-12",
                        children: "Have questions or want to connect? Reach out through the form below or use the contact details."
                    }, void 0, false, {
                        fileName: "[project]/components/ContactSection.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white p-8 rounded-xl shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-green-800",
                                        children: "Send a Message"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    submitSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-green-100 text-green-800 rounded-lg",
                                        children: "Thank you for your message! I'll get back to you soon."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 33
                                    }, this),
                                    submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 p-4 bg-red-100 text-red-800 rounded-lg",
                                        children: submitError
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 64,
                                        columnNumber: 31
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: "block text-gray-700 font-medium mb-2",
                                                        children: "Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "name",
                                                        name: "name",
                                                        value: formData.name,
                                                        onChange: handleChange,
                                                        required: true,
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                        placeholder: "Your full name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: "block text-gray-700 font-medium mb-2",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        id: "email",
                                                        name: "email",
                                                        value: formData.email,
                                                        onChange: handleChange,
                                                        required: true,
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                        placeholder: "your.email@example.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "subject",
                                                        className: "block text-gray-700 font-medium mb-2",
                                                        children: "Subject"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        id: "subject",
                                                        name: "subject",
                                                        value: formData.subject,
                                                        onChange: handleChange,
                                                        required: true,
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                        placeholder: "What is this regarding?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "message",
                                                        className: "block text-gray-700 font-medium mb-2",
                                                        children: "Message"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        id: "message",
                                                        name: "message",
                                                        value: formData.message,
                                                        onChange: handleChange,
                                                        required: true,
                                                        rows: 5,
                                                        className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500",
                                                        placeholder: "Your message here..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isSubmitting,
                                                className: `w-full bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`,
                                                children: isSubmitting ? 'Sending...' : 'Send Message'
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6 text-green-800",
                                        children: "Contact Information"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-100 p-3 rounded-full mr-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6 text-green-700",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-gray-800",
                                                                children: "Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 107,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "+234 800 123 4567"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-100 p-3 rounded-full mr-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6 text-green-700",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 115,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-gray-800",
                                                                children: "Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 119,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: "contact@honhash.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-100 p-3 rounded-full mr-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6 text-green-700",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ContactSection.tsx",
                                                                    lineNumber: 127,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/ContactSection.tsx",
                                                                    lineNumber: 128,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-gray-800",
                                                                children: "Office"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: [
                                                                    "Member House of Representatives Nassarawa Federal Constituency, Kano State",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/components/ContactSection.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 124
                                                                    }, this),
                                                                    "DEPUTY CHAIRMAN HOUSE COMMITTEE ON CUSTOMS AND EXCISE",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/components/ContactSection.tsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 74
                                                                    }, this),
                                                                    "Constituency Office Venue: No 23 Durbin Katsina Road Bompai GRA, Nassarawa LGA Kano State."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-green-100 p-3 rounded-full mr-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-6 h-6 text-green-700",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: "font-bold text-gray-800",
                                                                children: "Office Hours"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600",
                                                                children: [
                                                                    "Monday - Friday: 9:00 AM - 5:00 PM",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/components/ContactSection.tsx",
                                                                        lineNumber: 147,
                                                                        columnNumber: 84
                                                                    }, this),
                                                                    "Saturday: 10:00 AM - 2:00 PM"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-gray-800 mb-4",
                                                children: "Connect With Me"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 168,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "bg-green-700 text-white p-3 rounded-full hover:bg-green-800 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/ContactSection.tsx",
                                                                lineNumber: 173,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/ContactSection.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/ContactSection.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/ContactSection.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ContactSection.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContactSection.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactSection.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactSection.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ContactSection.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ContactSection.tsx",
        lineNumber: 47,
        columnNumber: 10
    }, this);
}
_s(ContactSection, "NUqqabSMDdW7M3XodnPiAfMVbAQ=");
_c = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProjectModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectModal",
    ()=>ProjectModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProjectModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(65);
    if ($[0] !== "5b140e2f4731f872a8b64921317a844bb13e197b961bd0682f60dc51437e4c8a") {
        for(let $i = 0; $i < 65; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5b140e2f4731f872a8b64921317a844bb13e197b961bd0682f60dc51437e4c8a";
    }
    const { project, isOpen, onClose } = t0;
    const [activeImage, setActiveImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t1;
    let t2;
    if ($[1] !== project) {
        t1 = ({
            "ProjectModal[useEffect()]": ()=>{
                if (project?.images?.[0]) {
                    setActiveImage(project.images[0]);
                }
            }
        })["ProjectModal[useEffect()]"];
        t2 = [
            project
        ];
        $[1] = project;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== isOpen) {
        t3 = ({
            "ProjectModal[useEffect()]": ()=>{
                if (isOpen) {
                    document.body.style.overflow = "hidden";
                    window.history.pushState({
                        modalOpen: true
                    }, "");
                } else {
                    document.body.style.overflow = "";
                }
                return _temp;
            }
        })["ProjectModal[useEffect()]"];
        t4 = [
            isOpen
        ];
        $[4] = isOpen;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] !== isOpen || $[8] !== onClose) {
        t5 = ({
            "ProjectModal[useEffect()]": ()=>{
                const handlePopState = {
                    "ProjectModal[useEffect() > handlePopState]": (event)=>{
                        if (isOpen) {
                            onClose();
                        }
                    }
                }["ProjectModal[useEffect() > handlePopState]"];
                window.addEventListener("popstate", handlePopState);
                return ()=>window.removeEventListener("popstate", handlePopState);
            }
        })["ProjectModal[useEffect()]"];
        t6 = [
            isOpen,
            onClose
        ];
        $[7] = isOpen;
        $[8] = onClose;
        $[9] = t5;
        $[10] = t6;
    } else {
        t5 = $[9];
        t6 = $[10];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    if (!isOpen || !project) {
        return null;
    }
    let t7;
    if ($[11] !== onClose) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity",
            onClick: {
                "ProjectModal[<div>.onClick]": ()=>{
                    if (window.history.state?.modalOpen) {
                        window.history.back();
                    } else {
                        onClose();
                    }
                }
            }["ProjectModal[<div>.onClick]"]
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[11] = onClose;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== onClose) {
        t8 = ({
            "ProjectModal[<button>.onClick]": ()=>{
                if (window.history.state?.modalOpen) {
                    window.history.back();
                } else {
                    onClose();
                }
            }
        })["ProjectModal[<button>.onClick]"];
        $[13] = onClose;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "material-symbols-outlined text-2xl",
            children: "close"
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t8,
            className: "absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-md",
            children: t9
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== activeImage || $[19] !== project.title) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full w-full",
            children: activeImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: activeImage,
                alt: project.title,
                fill: true,
                className: "object-contain",
                sizes: "(max-width: 768px) 100vw, 50vw"
            }, void 0, false, {
                fileName: "[project]/components/ProjectModal.tsx",
                lineNumber: 156,
                columnNumber: 66
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined text-6xl",
                    children: "image_not_supported"
                }, void 0, false, {
                    fileName: "[project]/components/ProjectModal.tsx",
                    lineNumber: 156,
                    columnNumber: 287
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ProjectModal.tsx",
                lineNumber: 156,
                columnNumber: 194
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[18] = activeImage;
        $[19] = project.title;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== activeImage || $[22] !== project.images) {
        t12 = project.images && project.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-0 left-0 right-0 p-4 flex gap-2 overflow-x-auto bg-gradient-to-t from-black/80 to-transparent no-scrollbar z-10",
            children: project.images.map({
                "ProjectModal[project.images.map()]": (img, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ProjectModal[project.images.map() > <button>.onClick]": (e)=>{
                                e.stopPropagation();
                                setActiveImage(img);
                            }
                        }["ProjectModal[project.images.map() > <button>.onClick]"],
                        className: `relative w-14 h-14 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? "border-green-500 ring-2 ring-green-500/30" : "border-white/30 opacity-70 hover:opacity-100"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: img,
                            alt: `View ${idx + 1}`,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/components/ProjectModal.tsx",
                            lineNumber: 171,
                            columnNumber: 285
                        }, this)
                    }, idx, false, {
                        fileName: "[project]/components/ProjectModal.tsx",
                        lineNumber: 166,
                        columnNumber: 61
                    }, this)
            }["ProjectModal[project.images.map()]"])
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 165,
            columnNumber: 58
        }, this);
        $[21] = activeImage;
        $[22] = project.images;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== t11 || $[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-[40vh] md:w-1/2 bg-black flex flex-col justify-center relative shrink-0 md:h-auto min-h-[300px]",
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[24] = t11;
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== project.category) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wide",
            children: project.category
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[27] = project.category;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== project.status) {
        t15 = project.status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: `px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${project.status === "Completed" ? "bg-blue-100 text-blue-700" : project.status === "Ongoing" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`,
            children: project.status
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 198,
            columnNumber: 29
        }, this);
        $[29] = project.status;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] !== t14 || $[32] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 mb-4",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[31] = t14;
        $[32] = t15;
        $[33] = t16;
    } else {
        t16 = $[33];
    }
    let t17;
    if ($[34] !== project.title) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight",
            children: project.title
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[34] = project.title;
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== project.description) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 leading-relaxed text-base md:text-lg",
            children: project.description
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[36] = project.description;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t16 || $[39] !== t17 || $[40] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 overflow-y-auto flex-grow",
            children: [
                t16,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[38] = t16;
        $[39] = t17;
        $[40] = t18;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    let t21;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "material-symbols-outlined text-lg",
            children: "calendar_month"
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "font-semibold",
            children: "Project Date:"
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 243,
            columnNumber: 11
        }, this);
        $[42] = t20;
        $[43] = t21;
    } else {
        t20 = $[42];
        t21 = $[43];
    }
    let t22;
    if ($[44] !== project.date) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-sm text-gray-500",
            children: [
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: project.date
                }, void 0, false, {
                    fileName: "[project]/components/ProjectModal.tsx",
                    lineNumber: 252,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[44] = project.date;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[46] !== project.description || $[47] !== project.title) {
        t23 = ({
            "ProjectModal[<button>.onClick]": async ()=>{
                const shareData = {
                    title: project.title,
                    text: `${project.title}\n${project.description}`,
                    url: window.location.href
                };
                if (navigator.share) {
                    ;
                    try {
                        await navigator.share(shareData);
                    } catch (t24) {
                        const err = t24;
                        console.log("Error sharing:", err);
                    }
                } else {
                    navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`);
                    alert("Link copied to clipboard!");
                }
            }
        })["ProjectModal[<button>.onClick]"];
        $[46] = project.description;
        $[47] = project.title;
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "material-symbols-outlined text-lg",
            children: "share"
        }, void 0, false, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t23,
            className: "flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full font-bold text-sm hover:bg-green-100 transition-colors",
            children: [
                t24,
                "Share"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[50] = t23;
        $[51] = t25;
    } else {
        t25 = $[51];
    }
    let t26;
    if ($[52] !== t22 || $[53] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-100 pt-6 mt-auto shrink-0 flex items-center justify-between",
            children: [
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 304,
            columnNumber: 11
        }, this);
        $[52] = t22;
        $[53] = t25;
        $[54] = t26;
    } else {
        t26 = $[54];
    }
    let t27;
    if ($[55] !== t19 || $[56] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full md:w-1/2 p-6 md:p-8 flex flex-col h-full bg-white",
            children: [
                t19,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 313,
            columnNumber: 11
        }, this);
        $[55] = t19;
        $[56] = t26;
        $[57] = t27;
    } else {
        t27 = $[57];
    }
    let t28;
    if ($[58] !== t10 || $[59] !== t13 || $[60] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-white sm:rounded-2xl shadow-2xl w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-4xl overflow-y-auto flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200",
            children: [
                t10,
                t13,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, this);
        $[58] = t10;
        $[59] = t13;
        $[60] = t27;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] !== t28 || $[63] !== t7) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-6",
            children: [
                t7,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProjectModal.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[62] = t28;
        $[63] = t7;
        $[64] = t29;
    } else {
        t29 = $[64];
    }
    return t29;
}
_s(ProjectModal, "7i7GghFGnyFXuvRPUx3aDuLbjlk=");
_c = ProjectModal;
function _temp() {
    document.body.style.overflow = "";
}
var _c;
__turbopack_context__.k.register(_c, "ProjectModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/news.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "news",
    ()=>news
]);
const news = [
    {
        _id: '1',
        title: 'Hassan Hussain Sponsors Education for 30 Orphans',
        content: '<p>Hon. Hassan Shehu Hussain has launched a full sponsorship program for 30 orphaned children from his neighborhood. The comprehensive package covers school fees, uniforms, and educational materials at private schools, ensuring these vulnerable children have access to quality education and a brighter future.</p>',
        category: 'Education',
        imageUrl: '/assets/images/projects/edu-6/CHILDREN ORphan.jpg',
        publishDate: '2023-11-15T10:00:00Z',
        excerpt: 'Full sponsorship covering fees and uniforms for 30 orphans launched at Gama residence.'
    },
    {
        _id: '2',
        title: 'Hotoro Arewa Praises New Clinic and Classrooms',
        content: '<p>Residents of Hotoro Arewa have expressed deep gratitude to Hon. Hassan for the construction of a new Primary Health Care Clinic in Yandodo and a block of 6 classrooms in Ladanai. These infrastructure projects address critical needs in healthcare and education, significantly improving the quality of life for the community.</p>',
        category: 'Infrastructure',
        imageUrl: '/assets/images/projects/health-1/with pubic.jpg',
        publishDate: '2024-04-10T10:00:00Z',
        excerpt: 'Community celebrates new Yandodo Clinic and Ladanai classrooms.'
    },
    {
        _id: '3',
        title: 'Solar Boreholes Ease Water Crisis in Nassarawa',
        content: '<p>Amidst power outages, Hon. Hassan\'s installation of solar-powered boreholes across Hotoro, Haye, and other areas has been a lifeline. Constituents now have reliable access to clean water independent of the national grid, showcasing the impact of sustainable infrastructure.</p>',
        category: 'Agric & Water',
        imageUrl: '/assets/images/projects/elec-4/505854166_3178447675642520_353271535521781115_n.jpg',
        publishDate: '2025-01-20T10:00:00Z',
        excerpt: 'Solar boreholes provide reliable water access during power outages.'
    },
    {
        _id: '4',
        title: 'Empowerment Boost: Machines and Support',
        content: '<p>Continuing his massive empowerment drive, Hon. Hassan has distributed a new wave of support items including sewing machines, grinding machines, and motorcycles. This initiative is aimed at fostering self-reliance and boosting the local economy by equipping women and youth with the tools they need to succeed.</p>',
        category: 'Empowerment',
        imageUrl: '/assets/images/projects/emp-1/many sewing.jpg',
        publishDate: '2025-08-01T10:00:00Z',
        excerpt: 'Distribution of machines and motorcycles to boost local businesses.'
    },
    {
        _id: '5',
        title: 'Motion for Aminu Kano Hospital Rehabilitation',
        content: '<p>Hon. Hassan raised a critical motion on the floor of the House highlighting the severe shortage of heart surgeons and equipment at Aminu Kano Teaching Hospital. His advocacy has led to the setup of a parliamentary investigative committee to address these gaps and improve healthcare delivery.</p>',
        category: 'Legislative',
        imageUrl: '/assets/images/gallery/0-portraits-official/hon-standing-on-speaker-reading-book.jpg',
        publishDate: '2024-06-15T10:00:00Z',
        excerpt: 'Legislative action to address equipment and staff shortages at AKTH.'
    },
    {
        _id: '6',
        title: 'Bill for Federal Vocational College Advances',
        content: '<p>A bill sponsored by Hon. Hassan for the establishment of a Federal College of Vocational Skill Acquisition in Yankaba has passed its second reading. This legislation demonstrates his commitment to human capital development and equipping youth with practical skills for the future.</p>',
        category: 'Legislative',
        imageUrl: '/assets/images/gallery/0-portraits-official/public-pres.jpg',
        publishDate: '2024-02-07T10:00:00Z',
        excerpt: 'Bill for Yankaba Vocational College passes second reading.'
    },
    {
        _id: '7',
        title: 'Condemnation of Tudun Biri Bombing',
        content: '<p>Hon. Hassan has strongly condemned the tragic bombing incident at Tudun Biri. In a passionate address, he called for immediate justice for the victims and urged the government to take decisive measures to prevent such occurrences in the future.</p>',
        category: 'Legislative',
        imageUrl: '/assets/images/gallery/0-portraits-official/potraitn.jpg',
        publishDate: '2023-12-05T10:00:00Z',
        excerpt: 'Strong call for justice and prevention following tragic incident.'
    },
    {
        _id: '8',
        title: 'Continuity and Gratitude: Voices from Nassarawa',
        content: '<p>"4+4 Insha Allahu" echoes across Nassarawa as residents share testimonials of Hon. Hassan\'s impact. From accessible leadership to tangible infrastructure like street lights and transformers, the community stands united in their support for his continued service.</p>',
        category: 'Politics',
        imageUrl: '/assets/images/projects/road-1/476629181_600759826039972_3454055431456145227_n.jpg',
        publishDate: '2024-09-01T10:00:00Z',
        excerpt: 'Community testimonials highlight infrastructure and leadership impact.'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    // Legislative Achievements - Motions
    {
        _id: 'motion-1',
        title: 'Rehabilitate and Adequately Equip Aminu Kano Teaching Hospital Kano',
        titleHA: 'Gyaran Asibitin Koyarwa na Aminu Kano',
        description: 'Motion to rehabilitate and adequately equip Aminu Kano Teaching Hospital Kano.',
        category: 'Legislative',
        images: [
            '/assets/images/projects/motion-1/Federal medical center 1.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'motion-2',
        title: 'Address Collapsing State of Bompai, Sharada and Challawa Industrial Estates',
        titleHA: 'Magance Matsalar Masana’antu ta Bompai, Sharada da Challawa',
        description: 'Motion to address the collapsing state of Bompai, Sharada and Challawa Industrial Estates in Kano State.',
        category: 'Legislative',
        images: [
            '/assets/images/legislative/motion-industrial-estates.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'motion-3',
        title: 'Investigate Activities of Bureau of Public Enterprise (BPE) 2019-2023',
        titleHA: 'Binciken Ayyukan Hukumar Kasuwancin Jama’a (BPE) 2019-2023',
        description: 'Motion to investigate the activities of Bureau of Public Enterprise (BPE) in the privatization and commercialization of public enterprises from 2019 to 2023.',
        category: 'Legislative',
        images: [
            '/assets/images/legislative/motion-bpe-investigation.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    // Legislative Achievements - Bills
    {
        _id: 'bill-1',
        title: 'Establishment of National Institute for Cardiovascular Disease, Research and Treatment',
        titleHA: 'Kafa Cibiyar Kasa don Cututtukan Zuciya, Bincike da Magani',
        description: 'Bill on the establishment of National Institute for Cardiovascular Disease, Research and Treatment in Kano State.',
        category: 'Legislative',
        images: [
            '/assets/images/legislative/bill-cardiovascular-institute.jpg'
        ],
        status: 'Awaiting President\'s Assent',
        date: '2024'
    },
    {
        _id: 'bill-2',
        title: 'Establishment of National Center for Substance Abuse, Management, Treatment and Other Related Matters',
        titleHA: 'Kafa Cibiyar Kasa don Magance Shan Miya da Sauran Batutuwa',
        description: 'Bill on the establishment of National Center for Substance Abuse, Management, Treatment and Other Related Matters.',
        category: 'Legislative',
        images: [
            '/assets/images/legislative/bill-substance-abuse.jpg'
        ],
        status: 'Proposed',
        date: '2024'
    },
    {
        _id: 'bill-3',
        title: 'Establishment of Chartered Institute of Mortgage Bankers and Brokers in Nigeria (CIMBBN)',
        titleHA: 'Kafa Cibiyar Bankunan Mortgage da Dillalai a Najeriya (CIMBBN)',
        description: 'Bill on the establishment of Chartered Institute of Mortgage Bankers and Brokers in Nigeria (CIMBBN) to regulate the practice of mortgage banking, mortgage brokerage and the activities of its practitioners in Nigeria and for other matters connected therewith.',
        category: 'Legislative',
        images: [
            '/assets/images/legislative/bill-cimbbn.jpg'
        ],
        status: 'Awaiting Consideration',
        date: '2024'
    },
    {
        _id: 'bill-4',
        title: 'Establishment of an Institute for Vocational and Skills Acquisition Center, Yankaba Kano',
        titleHA: 'Kafa Cibiyar Koyar da Sana’o’i da Fasaha, Yankaba Kano',
        description: 'Bill on the establishment of an institute for vocational and skills acquisition center, Yankaba Kano.',
        category: 'Legislative',
        images: [
            '/assets/images/legislative/bill-vocational-center.jpg'
        ],
        status: 'Awaiting Concurrence',
        date: '2024'
    },
    // Infrastructure Development - Roads
    {
        _id: 'road-1',
        title: 'Construction of 2KM Road at Gama',
        titleHA: 'Ginin Hanyar 2KM a Gama',
        description: 'Construction of 2KM road at Gama.',
        category: 'Infrastructure',
        images: [
            '/assets/images/projects/road-2/476157203_600759419373346_1312747067926836526_n.jpg',
            '/assets/images/projects/road-2/476207027_600759589373329_4628560302814974357_n.jpg',
            '/assets/images/projects/road-2/476227182_600759369373351_2902548961437481740_n.jpg',
            '/assets/images/projects/road-2/bridges in twada.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'road-2',
        title: 'Construction of 2KM Road at Tudun Wada Ward',
        titleHA: 'Ginin Hanyar 2KM a Tudun Wada Ward',
        description: 'Construction of 2KM road at Tudun Wada Ward.',
        category: 'Infrastructure',
        images: [
            '/assets/images/projects/road-3/571359968_3332404316913521_3620904188990982450_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'road-3',
        title: 'Construction of 2KM Road at Tudun Murtala Ward',
        titleHA: 'Ginin Hanyar 2KM a Tudun Murtala Ward',
        description: 'Construction of 2KM road at Tudun Murtala Ward.',
        category: 'Infrastructure',
        images: [
            '/assets/images/projects/road-1/476629181_600759826039972_3454055431456145227_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'road-4',
        title: 'Construction of 1KM Road at Hotoron Kudu Ward',
        titleHA: 'Ginin Hanyar 1KM a Hotoron Kudu Ward',
        description: 'Construction of 1KM road at Hotoron Kudu Ward.',
        category: 'Infrastructure',
        images: [
            '/assets/images/projects/road-4/629096276_897405179886940_4653484667244851675_n.jpg',
            '/assets/images/projects/road-4/629771457_897405119886946_5703131225920438241_n.jpg',
            '/assets/images/projects/road-4/630964072_897405236553601_371129042227083197_n.jpg',
            '/assets/images/projects/road-4/632052649_897408489886609_6502432119658137898_n.jpg'
        ],
        status: 'Ongoing',
        date: '2024'
    },
    {
        _id: 'road-5',
        title: 'Construction of 300 MTR Road at Gawuna Ward',
        titleHA: 'Ginin Hanyar Mita 300 a Gawuna Ward',
        description: 'Construction of 300 MTR road at Gawuna Ward.',
        category: 'Infrastructure',
        images: [
            '/assets/images/projects/road-5/556360947_3300366713450615_7937918589483071172_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'road-6',
        title: 'Construction of 1.5KM Road at Bukar Bulori Road Layin Madaci, Tudun Wada Nassarawa',
        titleHA: 'Ginin Hanyar 1.5KM a Bukar Bulori Road Layin Madaci, Tudun Wada Nassarawa',
        description: 'Construction of 1.5KM road at Bukar Bulori Road Layin Madaci, Tudun Wada Nassarawa.',
        category: 'Infrastructure',
        images: [
            '/assets/images/infrastructure/road-bukar-bulori.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'road-7',
        title: 'Construction of 3KM Road at Kaura Goje',
        titleHA: 'Ginin Hanyar 3KM a Kaura Goje',
        description: 'Construction of 3KM road at Kaura Goje.',
        category: 'Infrastructure',
        images: [],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    // Infrastructure Development - Education
    {
        _id: 'edu-1',
        title: 'Construction and Furnishing of Block of Six (6) Classrooms at Ladanai, Hotoron Arewa',
        titleHA: 'Ginin da Kayan Aiki na Ajujuwa Shida (6) a Ladanai, Hotoron Arewa',
        description: 'Construction and furnishing of block of six (6) classrooms at Ladanai, Hotoron Arewa.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-1/517234646_1423021965605367_1167109001234895211_n.jpg',
            '/assets/images/projects/edu-1/hoto list work.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'edu-2',
        title: 'Construction and Furnishing of Block of Three (3) Classrooms at Dakata',
        titleHA: 'Ginin da Kayan Aiki na Ajujuwa Uku (3) a Dakata',
        description: 'Construction and furnishing of block of three (3) classrooms at Dakata.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-2/557629394_2202543960226637_8333301309981595128_n.jpg',
            '/assets/images/projects/edu-2/557800094_2202543983559968_2747113577642049532_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'edu-3',
        title: 'Construction and Furnishing of Block of Three (3) Classrooms at Tinshama',
        titleHA: 'Ginin da Kayan Aiki na Ajujuwa Uku (3) a Tinshama',
        description: 'Construction and furnishing of block of three (3) classrooms at Tinshama.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-3/575178587_3340162012804418_4419926163255643774_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'edu-4',
        title: 'Construction of Block of 3 Classrooms at Normadic Primary School, Kawo Giginyu',
        titleHA: 'Ginin Ajujuwa Uku (3) a Makarantar Firamare ta Kawo Giginyu',
        description: 'Construction of block of 3 classrooms at Normadic Primary School, Kawo Giginyu.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-4/558981433_3307877919366161_563879278838590897_n.jpg'
        ],
        status: 'Ongoing (2025 Budget)',
        date: '2024'
    },
    {
        _id: 'edu-5',
        title: 'Construction of Mal. Aminu Mai Diwani Islamic School at Tudun Wada Ward',
        titleHA: 'Ginin Makarantar Islamiyya ta Mal. Aminu Mai Diwani a Tudun Wada Ward',
        description: 'Construction of Mal. Aminu Mai Diwani Islamic School at Tudun Wada Ward.',
        category: 'Education',
        images: [
            '/assets/images/education/islamic-school-tudun-wada.jpg'
        ],
        status: 'Ongoing',
        date: '2024'
    },
    {
        _id: 'edu-6',
        title: 'Sponsored Over 500 Students for the 2023 NECO Examination and Paid Full Scholarship',
        titleHA: 'Tallafin Karatu ga Dalibai Sama da 500 don Jarabawar NECO ta 2023',
        description: 'Sponsored over 500 students for the 2023 NECO examination and paid full scholarship up to graduation.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-6/students.jpg',
            '/assets/images/projects/edu-6/CHILDREN ORphan.jpg'
        ],
        status: 'Executed',
        date: '2023'
    },
    {
        _id: 'edu-7',
        title: 'Sponsored 700 Students in the 2024 JAMB Examination',
        titleHA: 'Tallafin Karatu ga Dalibai 700 don Jarabawar JAMB ta 2024',
        description: 'Sponsored 700 students in the 2024 JAMB examination.',
        category: 'Education',
        images: [
            '/assets/images/education/jamb-scholarship.jpg'
        ],
        status: 'Executed',
        date: '2024'
    },
    {
        _id: 'edu-8',
        title: 'Sponsored 97 Students on Full Scholarship at Sa\'adatu Rimi College of Education',
        titleHA: 'Tallafin Karatu ga Dalibai 97 a Kwalejin Ilimi ta Sa\'adatu Rimi',
        description: 'Sponsored 97 students on full scholarship at Sa\'adatu Rimi College of Education, Kumbotso in the 2023/2024 and 2024/2025 academic sessions up to their graduation.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-8/edu nce 4.9m.jpg'
        ],
        status: 'Executed',
        date: '2024'
    },
    {
        _id: 'edu-9',
        title: 'Sponsored 120 Students on Full Scholarship at Kano State College of Preliminary Studies (KASCEPS)',
        titleHA: 'Tallafin Karatu ga Dalibai 120 a Kwalejin Nazarin Farko ta Jihar Kano (KASCEPS)',
        description: 'Sponsored 120 students on full scholarship at Kano State College of Preliminary Studies (KASCEPS) in the 2024 academic session.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-9/571428346_24746426055026768_5264726448286573770_n.jpg'
        ],
        status: 'Executed',
        date: '2024'
    },
    {
        _id: 'edu-10',
        title: 'Sponsored 100 Students on Full Scholarship at Kano State Polytechnic',
        titleHA: 'Tallafin Karatu ga Dalibai 100 a Kwalejin Kimiyya da Fasaha ta Jihar Kano',
        description: 'Sponsored 100 students on full scholarship at Kano State Polytechnic in the 2024/25 academic session.',
        category: 'Education',
        images: [
            '/assets/images/education/kano-poly-scholarship.jpg'
        ],
        status: 'Executed',
        date: '2024'
    },
    {
        _id: 'edu-11',
        title: 'Payment of Registration Fees for Undergraduate Students at BUK, Northwest University, Aliko Dangote University of Science and Technology Wudil, Federal University Dutse and Ahmadu Bello University',
        titleHA: 'Biyan Kuɗin Rajista ga Dalibai a Jami’o’i daban-daban',
        description: 'Payment of registration fees for undergraduate students at BUK, Northwest University, Aliko Dangote University of Science and Technology Wudil, Federal University Dutse and Ahmadu Bello University.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-11/571215004_24746425851693455_8608501980191132338_n.jpg'
        ],
        status: 'Executed',
        date: '2024'
    },
    {
        _id: 'edu-12',
        title: 'Construction of Block of 2 Classrooms at Hotoron Kudu Primary School',
        titleHA: 'Ginin Ajujuwa Biyu (2) a Makarantar Firamare ta Hotoron Kudu',
        description: 'Construction of block of 2 classrooms at Hotoron Kudu Primary School.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-12/552953639_3291867730967180_6131458370358530759_n.jpg'
        ],
        status: 'Ongoing (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'edu-13',
        title: 'Construction of 5 Toilets at Hotoron Kudu Primary School',
        titleHA: 'Ginin Bayi Biyar (5) a Makarantar Firamare ta Hotoron Kudu',
        description: 'Construction of 5 toilets at Hotoron Kudu Primary School.',
        category: 'Education',
        images: [
            '/assets/images/projects/edu-13/495010320_3129673527186602_1300621435815107155_n.jpg'
        ],
        status: 'Ongoing (2025 Budget)',
        date: '2025'
    },
    // Infrastructure Development - Electricity Supply
    {
        _id: 'elec-1',
        title: '30 Solar Powered Boreholes and Hand Pumps Across the 11 Wards',
        titleHA: 'Rijiyoyin Burtsatse Masu Amfani da Hasken Rana 30 da Na Hannu a Faɗin Mazabu 11',
        description: '30 solar powered boreholes and hand pumps across the 11 wards.',
        category: 'Electricity',
        images: [
            '/assets/images/projects/elec-1/476872358_601275045988450_6399110187919892155_n.jpg',
            '/assets/images/projects/elec-1/477010618_601275092655112_6898892999801720918_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'elec-2',
        title: 'Comprehensive Water Supply Scheme in Kaura Goje',
        titleHA: 'Tsarin Samar da Ruwa Mai Inganci a Kaura Goje',
        description: 'Comprehensive Water Supply Scheme in Kaura Goje.',
        category: 'Electricity',
        images: [
            '/assets/images/electricity/water-supply-kaura-goje.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'elec-3',
        title: 'Installation of Over 1200 Solar Street Lights Across the 11 Wards',
        titleHA: 'Sanya Fitilun Titi Masu Amfani da Hasken Rana Sama da 1200 a Faɗin Mazabu 11',
        description: 'Installation of over 1200 solar street lights across the 11 wards.',
        category: 'Electricity',
        images: [
            '/assets/images/projects/elec-3/475879752_599945009454787_5489572816672383512_n.jpg',
            '/assets/images/projects/elec-3/475959725_599944946121460_6136757457887868501_n.jpg',
            '/assets/images/projects/elec-3/476005886_599937252788896_8720063272326960623_n.jpg',
            '/assets/images/projects/elec-3/476349208_599937359455552_6271603707657952046_n.jpg',
            '/assets/images/projects/elec-3/476375505_599937319455556_1534106410516890221_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'elec-4',
        title: 'Installation of Solar Street Lights in Nassarawa Federal Constituency',
        titleHA: 'Sanya Fitilun Titi Masu Amfani da Hasken Rana a Mazabar Tarayya ta Nassarawa',
        description: 'Installation of Solar Street Lights in Nassarawa Federal Constituency.',
        category: 'Electricity',
        images: [
            '/assets/images/projects/elec-4/505854166_3178447675642520_353271535521781115_n.jpg',
            '/assets/images/projects/elec-4/506727901_3178448055642482_5037763611930720781_n.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'elec-5',
        title: 'Installation of 3 Nos 500 KVA Electric Transformers',
        titleHA: 'Sanya Transformers na Lantarki 3 Masu 500 KVA',
        description: 'Installation of 3 Nos 500 KVA Electric Transformers.',
        category: 'Electricity',
        images: [
            '/assets/images/projects/elec-5/586333950_2206730636486740_7997335335130950734_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'elec-6',
        title: 'Installation of 4 Nos Electric Transformers in Nassarawa Federal Constituency',
        titleHA: 'Sanya Transformers na Lantarki 4 a Mazabar Tarayya ta Nassarawa',
        description: 'Installation of 4 Nos Electric Transformers in Nassarawa Federal Constituency.',
        category: 'Electricity',
        images: [
            '/assets/images/projects/elec-6/509930751_3193167184170569_8863601055953913254_n.jpg',
            '/assets/images/projects/elec-6/510424283_3193167137503907_4841677475535688506_n.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'elec-7',
        title: 'Installation of Solar Powered Boreholes in Nassarawa Federal Constituency',
        titleHA: 'Sanya Rijiyoyin Burtsatse Masu Amfani da Hasken Rana a Mazabar Tarayya ta Nassarawa',
        description: 'Installation of Solar Powered Boreholes in Nassarawa Federal Constituency.',
        category: 'Electricity',
        images: [
            '/assets/images/projects/elec-7/542197806_3268786476608639_1123035020682121182_n.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    // Infrastructure Development - Health Care
    {
        _id: 'health-1',
        title: 'Construction of Primary Health Care Centre at Yandodo, Hotoro Arewa',
        titleHA: 'Ginin Cibiyar Kiwon Lafiya ta Farko a Yandodo, Hotoro Arewa',
        description: 'Construction of Primary Health Care Centre at Yandodo, Hotoro Arewa.',
        category: 'Health',
        images: [
            '/assets/images/projects/health-1/627900618_2126406998129398_3529174834421515421_n.jpg',
            '/assets/images/projects/health-1/627904574_2126406951462736_9131918476977799508_n.jpg',
            '/assets/images/projects/health-1/628031319_2126407061462725_1146732422726555957_n.jpg',
            '/assets/images/projects/health-1/629760477_2126407028129395_8436575232082257369_n.jpg',
            '/assets/images/projects/health-1/633085207_2126407064796058_9028732144565213228_n.jpg',
            '/assets/images/projects/health-1/with pubic.jpg'
        ],
        status: 'Completed',
        date: '2024'
    },
    {
        _id: 'health-2',
        title: 'Construction of Primary Health Care Centre at Dakata',
        titleHA: 'Ginin Cibiyar Kiwon Lafiya ta Farko a Dakata',
        description: 'Construction of Primary Health Care Centre at Dakata.',
        category: 'Health',
        images: [
            '/assets/images/projects/health-2/565941233_3324385717715381_8568537023377691227_n.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'health-3',
        title: 'Distribution of Free Drugs to Hospitals in Nassarawa Federal Constituency',
        titleHA: 'Rarraba Magunguna Kyauta ga Asibitoci a Mazabar Tarayya ta Nassarawa',
        description: 'Distribution of Free Drugs to Hospitals in Nassarawa Federal Constituency.',
        category: 'Health',
        images: [
            '/assets/images/projects/health-3/social medias.jpg'
        ],
        status: 'Ongoing',
        date: '2024'
    },
    // Empowerment
    {
        _id: 'emp-1',
        title: 'Distribution of Over 100 Sewing Machines to Women and Youth',
        titleHA: 'Rarraba Injinan Ɗinki Sama da 100 ga Mata da Matasa',
        description: 'Distribution of over 100 sewing machines to women and youth in Nassarawa Federal Constituency.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-1/480186171_605879748861313_2579994957419495318_n.jpg',
            '/assets/images/projects/emp-1/604858114_1224240469590702_1129033368324861370_n.jpg',
            '/assets/images/projects/emp-1/many sewing.jpg',
            '/assets/images/projects/emp-1/sewing gigza.jpg',
            '/assets/images/projects/emp-1/kekunan dinki.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-2',
        title: 'Distribution of 35 Tricycles to Women and Youth',
        titleHA: 'Rarraba Keke Napep 35 ga Mata da Matasa',
        description: 'Distribution of 35 tricycles to women and youth.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-2/480180735_605879745527980_3959888062060275580_n.jpg',
            '/assets/images/projects/emp-2/480281176_605879752194646_5389222776475039882_n.jpg',
            '/assets/images/projects/emp-2/480326183_605879708861317_4882611129323875273_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-3',
        title: 'Distribution of Around 300 Motorcycles',
        titleHA: 'Rarraba Babura Wajen 300',
        description: 'Distribution of around 300 motorcycles.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-3/476146908_599374449511843_3441310471793848293_n.jpg',
            '/assets/images/projects/emp-3/480299481_605879695527985_3615689049130878329_n.jpg',
            '/assets/images/projects/emp-3/604685730_1224240409590708_5353749991356635123_n.jpg',
            '/assets/images/projects/emp-3/many motor.jpg',
            '/assets/images/projects/emp-3/many motors.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-4',
        title: 'Supply of Agricultural Implements to Farmers',
        titleHA: 'Samar da Kayan Aikin Noma ga Manoma',
        description: 'Supply of agricultural implements to farmers; planters, tillers, motorised knapsack sprayers, weeders, cutters, selective herbicides and seeds.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-4/grinding machine.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-5',
        title: 'Cash Empowerment to Over 200 Women and Youth',
        titleHA: 'Tallafin Kuɗi ga Mata da Matasa Sama da 200',
        description: 'Cash empowerment to over 200 women and youth.',
        category: 'Empowerment',
        images: [
            '/assets/images/empowerment/cash-empowerment.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-6',
        title: 'Distribution of NPK Fertilizer to Farmers',
        titleHA: 'Rarraba Takin NPK ga Manoma',
        description: 'Distribution of NPK fertilizer to farmers.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-6/584489132_3355629987924287_3275329239357496468_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-7',
        title: 'Distribution of Rice',
        titleHA: 'Rarraba Shinkafa',
        description: 'Distribution of Rice.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-7/ramadan foodstuff.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-8',
        title: 'Successful Facilitation in the Recruitment of Numerous Constituents',
        titleHA: 'Nasara a Samar da Ayyuka ga Jama’a da yawa',
        description: 'Successful facilitation in the recruitment of numerous constituents into various positions across federal and state institutions.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-8/samawa mutane 4 sikin soja.jpg',
            '/assets/images/projects/emp-8/oficcers.jpg',
            '/assets/images/projects/emp-8/SHU\'AIBU YARO.jpg',
            '/assets/images/projects/emp-8/offers.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-9',
        title: 'Distribution of 70 Mobile Phones',
        titleHA: 'Rarraba Wayoyin Hannu 70',
        description: 'Distribution of 70 Mobile Phones.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-9/555724281_642393122281477_1150249682101820401_n.jpg',
            '/assets/images/projects/emp-9/555903664_642391918948264_6205421523041095162_n.jpg',
            '/assets/images/projects/emp-9/556071899_642394212281368_5869811947820252035_n.jpg',
            '/assets/images/projects/emp-9/people raising phones.jpg',
            '/assets/images/projects/emp-9/raising phones.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-10',
        title: 'Distribution of 100 Laptop Computers',
        titleHA: 'Rarraba Kwamfutoci 100',
        description: 'Distribution of 100 Laptop Computers.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-10/556067514_642390938948362_3847494425034838668_n.jpg',
            '/assets/images/projects/emp-10/557632998_642396088947847_3326621724092961893_n.jpg',
            '/assets/images/projects/emp-10/laptops.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-11',
        title: 'Lexus 350 Car Gift to Nassarawa Local Government Party Chairman',
        titleHA: 'Kyautar Mota Lexus 350 ga Shugaban Jam’iyyar Karamar Hukumar Nassarawa',
        description: 'Lexus 350 Car Gift to Nassarawa Local Government Party Chairman.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-11/595747431_122269893398035683_3382119352666857278_n.jpg'
        ],
        status: 'Completed',
        date: '2023'
    },
    {
        _id: 'emp-12',
        title: 'Distribution of Empowerment Materials',
        titleHA: 'Rarraba Kayan Tallafi',
        description: 'Distribution of Empowerment Materials.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-12/emp.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'emp-13',
        title: 'Supply of Educational and Teaching Materials',
        titleHA: 'Samar da Kayan Karatu da Koyarwa',
        description: 'Supply of Educational and Teaching Materials.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-13/493276264_3492440020890054_2080321773164516981_n.jpg',
            '/assets/images/projects/emp-13/493469332_3492440030890053_3789710419207940875_n.jpg',
            '/assets/images/projects/emp-13/494146191_3492440037556719_5715278037837683459_n.jpg'
        ],
        status: 'Upcoming (2025 Budget)',
        date: '2025'
    },
    {
        _id: 'emp-14',
        title: 'Provision of grinding machines to women groups to support small-scale food processing businesses',
        titleHA: 'Rarraba Injinan Markade ga Kungiyoyin Mata',
        description: 'Provision of grinding machines to women groups to support small-scale food processing businesses in Nasarawa Federal Constituency.',
        category: 'Empowerment',
        images: [
            '/assets/images/projects/emp-4/grinding machine.jpg'
        ],
        status: 'Executed',
        date: 'Aug 2024'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(personal)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IndexRoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HomePage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MediaGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MediaGallery.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ContactSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProjectModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/news.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
function IndexRoute() {
    _s();
    const [news, setNews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [selectedProject, setSelectedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IndexRoute.useEffect": ()=>{
            async function fetchData() {
                try {
                    const [newsRes, projectsRes] = await Promise.all([
                        fetch('/api/news', {
                            cache: 'no-store'
                        }),
                        fetch('/api/projects', {
                            cache: 'no-store'
                        })
                    ]);
                    const newsData = await newsRes.json();
                    const projectsData = await projectsRes.json();
                    const fetchedNews = newsData.data || newsData || [];
                    const fetchedProjects = projectsData.data || projectsData || [];
                    setNews(fetchedNews.length > 0 ? fetchedNews : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["news"]);
                    const allProjects = (fetchedProjects.length > 0 ? fetchedProjects : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"]).map({
                        "IndexRoute.useEffect.fetchData.allProjects": (p_0)=>{
                            // Force correct figures for key empowerments if needed
                            if (p_0._id === 'emp-3' || p_0.title && p_0.title.toLowerCase().includes('motorcycle')) {
                                return {
                                    ...p_0,
                                    title: 'Distribution of Around 300 Motorcycles',
                                    description: 'Distribution of around 300 motorcycles.'
                                };
                            }
                            if (p_0._id === 'edu-6' || p_0.title && p_0.title.toLowerCase().includes('neco')) {
                                return {
                                    ...p_0,
                                    title: 'Sponsored Over 500 Students for the 2023 NECO Examination and Paid Full Scholarship',
                                    description: 'Sponsored over 500 students for the 2023 NECO examination and paid full scholarship up to graduation.'
                                };
                            }
                            return p_0;
                        }
                    }["IndexRoute.useEffect.fetchData.allProjects"]);
                    setProjects(Array.isArray(allProjects) ? allProjects.filter({
                        "IndexRoute.useEffect.fetchData": (p_1)=>p_1.category !== 'Legislative'
                    }["IndexRoute.useEffect.fetchData"]) : []);
                } catch (error) {
                    console.error('Failed to fetch data, falling back to static data:', error);
                    setNews(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$news$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["news"]);
                    setProjects(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter({
                        "IndexRoute.useEffect.fetchData": (p)=>p.category !== 'Legislative'
                    }["IndexRoute.useEffect.fetchData"]));
                } finally{
                    setLoading(false);
                }
            }
            fetchData();
        }
    }["IndexRoute.useEffect"], []);
    const mockData = {
        title: 'Hon. Hassan Shehu Hussain (Hon. HASH)'
    };
    // Transform projects for Media Gallery
    const projectGalleryItems = projects.filter((p_2)=>p_2.images && p_2.images.length > 0).map((p_3)=>({
            id: p_3._id,
            type: 'image',
            src: p_3.images[0],
            title: p_3.title,
            description: p_3.description,
            date: p_3.date
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HomePage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HomePage"], {
                data: mockData
            }, void 0, false, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 sm:py-16 md:py-20 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4",
                                    children: "OUR INITIATIVES"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900",
                                    children: "Transforming Communities"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 max-w-2xl mx-auto text-lg",
                                    children: "Empowering lives through dedicated projects and programs across our constituencies"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 99,
                            columnNumber: 22
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
                            children: projects.slice(0, 3).map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setSelectedProject(project),
                                    className: "group bg-white rounded-2xl shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-48 relative overflow-hidden bg-gray-200",
                                            children: [
                                                project.images && project.images.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: project.images[0],
                                                    alt: project.title,
                                                    fill: true,
                                                    className: "object-cover group-hover:scale-110 transition-transform duration-500",
                                                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 68
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-br from-green-500 to-green-700"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 275
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-white/90 backdrop-blur text-green-800 px-4 py-2 rounded-full font-bold text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform",
                                                        children: "View Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-4 left-4 right-4 translate-y-0 group-hover:translate-y-2 transition-transform duration-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 rounded-full text-xs font-semibold",
                                                        children: project.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/page.tsx",
                                            lineNumber: 103,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 mb-4 line-clamp-3",
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: project.date
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/page.tsx",
                                                            lineNumber: 123,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700",
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/page.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 61
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 101,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 sm:mt-10 md:mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/projects",
                                className: "inline-flex items-center gap-2 bg-green-700 text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 text-base sm:text-base touch-manipulation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "View All Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        children: "arrow_forward"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(personal)/page.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 md:px-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4",
                                    children: "LATEST UPDATES"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900",
                                    children: "News & Announcements"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 max-w-2xl mx-auto text-base sm:text-lg",
                                    children: "Stay informed with the latest developments and community updates"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center py-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-700"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 160,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 159,
                            columnNumber: 22
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                            children: news.slice(0, 3).map((item, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/news/${item._id}`,
                                    className: "group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col border border-gray-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-56 bg-gradient-to-br from-green-500 to-green-600 relative overflow-hidden",
                                                children: [
                                                    item.imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: item.imageUrl,
                                                        alt: item.title,
                                                        className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 40
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-white text-6xl",
                                                            children: "article"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/page.tsx",
                                                            lineNumber: 166,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 182
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-4 left-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 rounded-full text-xs font-semibold",
                                                            children: item.category || 'News'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-6 flex-1 flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors line-clamp-2",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 mb-4 line-clamp-3 flex-1",
                                                        children: item.excerpt
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-sm text-gray-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: new Date(item.createdAt || item.publishDate || Date.now()).toLocaleDateString()
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/page.tsx",
                                                                lineNumber: 182,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "group-hover:text-green-700 transition-colors font-medium",
                                                                children: "Read more →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/page.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(personal)/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 19
                                    }, this)
                                }, index_0, false, {
                                    fileName: "[project]/app/(personal)/page.tsx",
                                    lineNumber: 162,
                                    columnNumber: 56
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 161,
                            columnNumber: 22
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8 sm:mt-10 md:mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/news",
                                className: "inline-flex items-center gap-2 bg-green-600 text-white font-bold py-3.5 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 sm:hover:scale-105 text-base sm:text-base touch-manipulation",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "View All News"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined",
                                        children: "arrow_forward"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/page.tsx",
                            lineNumber: 192,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(personal)/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-700 to-green-900 text-white relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-20 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/page.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto px-4 sm:px-6 md:px-8 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4",
                                        children: "Making a Real Difference"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-green-100 text-base sm:text-lg max-w-3xl mx-auto",
                                        children: "Through dedicated service and community-focused initiatives, we're creating lasting positive change"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center transform hover:scale-110 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl md:text-6xl font-bold mb-2",
                                                children: "20,000+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-green-200 text-sm md:text-base",
                                                children: "Beneficiaries"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center transform hover:scale-110 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl md:text-6xl font-bold mb-2",
                                                children: "26+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 223,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-green-200 text-sm md:text-base",
                                                children: "Programs Launched"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center transform hover:scale-110 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl md:text-6xl font-bold mb-2",
                                                children: "11"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-green-200 text-sm md:text-base",
                                                children: "Wards Served"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center transform hover:scale-110 transition-transform duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-5xl md:text-6xl font-bold mb-2",
                                                children: "3+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-green-200 text-sm md:text-base",
                                                children: "Years of Service"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MediaGallery$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MediaGallery"], {
                items: projectGalleryItems
            }, void 0, false, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContactSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactSection"], {}, void 0, false, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProjectModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProjectModal"], {
                project: selectedProject,
                isOpen: !!selectedProject,
                onClose: ()=>setSelectedProject(null)
            }, void 0, false, {
                fileName: "[project]/app/(personal)/page.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/page.tsx",
        lineNumber: 81,
        columnNumber: 10
    }, this);
}
_s(IndexRoute, "1WVrMmNEzMDrTqvHeBDYPLo4Wsg=");
_c = IndexRoute;
var _c;
__turbopack_context__.k.register(_c, "IndexRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_bf45dc99._.js.map