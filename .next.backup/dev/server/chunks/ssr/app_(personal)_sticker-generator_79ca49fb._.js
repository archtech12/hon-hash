module.exports = [
"[project]/app/(personal)/sticker-generator/hooks/useStickerConfig.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useStickerConfig",
    ()=>useStickerConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
const DEFAULT_DATA = {
    supporterName: '',
    supporterPhoto: null,
    customMessage: 'Together We Rise',
    templateId: 'classic',
    aspectRatio: 'square',
    showWatermark: true,
    colorTheme: 'green'
};
function useStickerConfig() {
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_DATA);
    const updateField = (field, value)=>{
        setData((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const reset = ()=>setData(DEFAULT_DATA);
    return {
        data,
        updateField,
        reset,
        setData
    };
}
}),
"[project]/app/(personal)/sticker-generator/components/shared/Watermark.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Watermark",
    ()=>Watermark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Watermark = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-2 right-2 z-50 pointer-events-none select-none",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-black/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20 flex items-center gap-1 shadow-lg whitespace-nowrap",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[8px] text-green-500 font-bold tracking-wider uppercase",
                    children: "POWERED BY"
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/shared/Watermark.tsx",
                    lineNumber: 5,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[10px] text-white font-black tracking-tighter uppercase font-mono",
                    children: "Hon. HASH 2027"
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/shared/Watermark.tsx",
                    lineNumber: 6,
                    columnNumber: 10
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(personal)/sticker-generator/components/shared/Watermark.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/shared/Watermark.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/StickerCanvas.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickerCanvas",
    ()=>StickerCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$Watermark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/Watermark.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
const RATIOS = {
    square: 1 / 1,
    portrait: 4 / 5,
    landscape: 1.91 / 1,
    print: 1 / 1
};
const StickerCanvas = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, aspectRatio, className = '' }, ref)=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const ratio = RATIOS[aspectRatio];
    const targetWidth = 1080;
    const targetHeight = Math.round(targetWidth / ratio);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const updateScale = ()=>{
            if (containerRef.current) {
                const width = containerRef.current.clientWidth;
                setScale(width / targetWidth);
            }
        };
        updateScale();
        // Listen to window resize
        window.addEventListener('resize', updateScale);
        // Setup a ResizeObserver for the container itself (handles tab swaps and column size shifts)
        let observer = null;
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && 'ResizeObserver' in window) //TURBOPACK unreachable
        ;
        return ()=>{
            window.removeEventListener('resize', updateScale);
            if (observer) {
                observer.disconnect();
            }
        };
    }, [
        aspectRatio,
        targetWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full overflow-hidden shadow-2xl rounded-sm bg-neutral-900 ${className}`,
        style: {
            aspectRatio: `${ratio}`,
            height: containerRef.current ? `${containerRef.current.clientWidth / ratio}px` : 'auto'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "absolute top-0 left-0 origin-top-left",
            "data-sticker-root": true,
            style: {
                width: `${targetWidth}px`,
                height: `${targetHeight}px`,
                transform: `scale(${scale})`,
                WebkitTransform: `scale(${scale})`
            },
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$Watermark$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Watermark"], {}, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/StickerCanvas.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/(personal)/sticker-generator/components/StickerCanvas.tsx",
            lineNumber: 71,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/StickerCanvas.tsx",
        lineNumber: 62,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
StickerCanvas.displayName = 'StickerCanvas';
}),
"[project]/app/(personal)/sticker-generator/components/system/Grid.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Grid",
    ()=>Grid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Grid = ({ children, isLandscape = true, className = '' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex-1 grid grid-cols-12 gap-[3cqw] relative min-h-0 ${!isLandscape ? 'grid-rows-[auto_1fr]' : ''} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/system/Grid.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/system/borders.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "borders",
    ()=>borders
]);
const borders = {
    radius: {
        none: 'rounded-none',
        sm: 'rounded-[0.5cqw]',
        md: 'rounded-[1.2cqw]',
        lg: 'rounded-[1.5cqw]',
        xl: 'rounded-[2cqw]',
        full: 'rounded-full'
    },
    width: {
        thin: 'border-[0.2cqw]',
        medium: 'border-[0.4cqw]',
        thick: 'border-[0.6cqw]'
    }
};
}),
"[project]/app/(personal)/sticker-generator/components/system/shadows.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shadows",
    ()=>shadows
]);
const shadows = {
    soft: 'shadow-[0_8px_32px_rgba(0,0,0,0.06)]',
    medium: 'shadow-[0_12px_40px_rgba(0,0,0,0.08)]',
    heavy: 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]',
    glow: 'shadow-[0_0_20px_rgba(21,128,61,0.2)]'
};
}),
"[project]/app/(personal)/sticker-generator/components/system/portraits.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Portrait",
    ()=>Portrait
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/borders.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/shadows.ts [app-ssr] (ecmascript)");
;
;
;
const Portrait = ({ src, fallback, styleVariant = 'rounded', className = '' })=>{
    const getStyleClasses = ()=>{
        switch(styleVariant){
            case 'circular':
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].radius.full} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].medium}`;
            case 'framed':
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].radius.sm} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].width.thick} border-white ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].heavy}`;
            case 'editorial':
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].radius.none} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].soft}`;
            case 'vip':
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].radius.lg} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].width.medium} border-amber-400 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].glow}`;
            case 'rounded':
            default:
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].radius.md} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"].width.medium} border-white ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"].medium}`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden bg-white flex items-center justify-center ${getStyleClasses()} ${className}`,
        children: [
            src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                crossOrigin: "anonymous",
                alt: "Portrait",
                className: "w-full h-full object-cover object-top"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/system/portraits.tsx",
                lineNumber: 34,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : fallback || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full flex items-center justify-center bg-gray-50 text-gray-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined font-light",
                    style: {
                        fontSize: '40%'
                    },
                    children: "person"
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/system/portraits.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/system/portraits.tsx",
                lineNumber: 42,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[inherit] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/system/portraits.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/system/portraits.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/system/typography.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "typography",
    ()=>typography
]);
const typography = {
    sizes: {
        label: '0.9cqw',
        caption: '1cqw',
        bodySmall: '1.2cqw',
        body: '1.8cqw',
        title: '2.5cqw',
        quote: '2.8cqw',
        display: '8.5cqw',
        displayPortrait: '11cqw'
    },
    roles: {
        display: 'font-black uppercase tracking-tighter leading-[0.85]',
        heading: 'font-bold tracking-tight',
        subheading: 'font-medium tracking-tight',
        body: 'leading-relaxed',
        caption: 'font-medium opacity-80',
        label: 'font-bold uppercase tracking-[0.25em]',
        quote: 'font-serif font-italic',
        overline: 'font-bold uppercase tracking-[0.3em] opacity-70'
    }
};
}),
"[project]/app/(personal)/sticker-generator/components/system/badges.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/typography.ts [app-ssr] (ecmascript)");
;
;
const Badge = ({ text, variant = 'primary', className = '' })=>{
    const getVariantStyles = ()=>{
        switch(variant){
            case 'secondary':
                return 'bg-black/10 text-black/80';
            case 'outline':
                return 'border-[0.2cqw] border-current text-current bg-transparent';
            case 'vip':
                return 'bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-[0_4px_12px_rgba(251,191,36,0.3)]';
            case 'primary':
            default:
                return 'bg-[#15803D] text-white shadow-sm';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center justify-center px-[2cqw] py-[0.8cqw] rounded-full ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].roles.label} ${getVariantStyles()} ${className}`,
        style: {
            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"].sizes.caption
        },
        children: text
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/system/badges.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/system/spacing.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "spacing",
    ()=>spacing
]);
const spacing = {
    xs: '1cqw',
    sm: '2cqw',
    md: '3cqw',
    lg: '4cqw',
    xl: '6cqw',
    xxl: '8cqw'
};
}),
"[project]/app/(personal)/sticker-generator/components/system/colors.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "colors",
    ()=>colors
]);
const colors = {
    background: {
        primary: 'bg-[#FAFAFA]',
        secondary: 'bg-white',
        dark: 'bg-[#1A1A1A]',
        accent: 'bg-[#15803D]'
    },
    text: {
        primary: 'text-[#1A1A1A]',
        secondary: 'text-[#333333]',
        muted: 'text-black/40',
        accent: 'text-[#15803D]',
        inverse: 'text-white'
    },
    border: {
        light: 'border-black/5',
        medium: 'border-black/10',
        accent: 'border-[#15803D]',
        inverse: 'border-white'
    }
};
}),
"[project]/app/(personal)/sticker-generator/components/system/tokens.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tokens",
    ()=>tokens
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/spacing.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/typography.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/colors.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/shadows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/borders.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const tokens = {
    spacing: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$spacing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["spacing"],
    typography: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$typography$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["typography"],
    colors: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$colors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["colors"],
    shadows: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$shadows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["shadows"],
    borders: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$borders$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["borders"]
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassicTemplate",
    ()=>ClassicTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/Grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/portraits.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/badges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/tokens.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const ClassicTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    const themes = {
        green: {
            bg: 'bg-brand-950',
            accent: 'bg-brand-700',
            border: 'border-brand-500',
            text: 'text-brand-700',
            gradient: 'from-brand-950 to-charcoal'
        },
        red: {
            bg: 'bg-[#150000]',
            accent: 'bg-[#b91c1c]',
            border: 'border-[#ef4444]',
            text: 'text-[#b91c1c]',
            gradient: 'from-[#150000] to-[#2e0101]'
        },
        blue: {
            bg: 'bg-[#000615]',
            accent: 'bg-[#1d4ed8]',
            border: 'border-[#3b82f6]',
            text: 'text-[#1d4ed8]',
            gradient: 'from-[#000615] to-[#01143a]'
        },
        gold: {
            bg: 'bg-charcoal',
            accent: 'bg-gold-600',
            border: 'border-gold-500',
            text: 'text-gold-600',
            gradient: 'from-charcoal to-black'
        }
    }[colorTheme] || {
        bg: 'bg-brand-950',
        accent: 'bg-brand-700',
        border: 'border-brand-500',
        text: 'text-brand-700',
        gradient: 'from-brand-950 to-charcoal'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full flex flex-col ${themes.bg} bg-gradient-to-b ${themes.gradient} font-serif relative overflow-hidden select-none`,
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.1] bg-hero-pattern z-0 mix-blend-overlay pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                lineNumber: 21,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[80cqw] h-[80cqw] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none mix-blend-screen z-0"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                lineNumber: 24,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[3cqw] border-[0.2cqw] border-white/10 pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                lineNumber: 27,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[3.6cqw] border-[0.1cqw] border-white/5 pointer-events-none z-10"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                lineNumber: 28,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col z-20 relative w-full h-full",
                style: {
                    padding: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.xl
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex justify-between items-center shrink-0 border-b border-white/20`,
                        style: {
                            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.md,
                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.lg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} opacity-70 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline}`,
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                        },
                                        children: "Campaign 2027"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                        lineNumber: 34,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-0.5 w-20 bg-gradient-to-r from-gold-500 to-transparent shadow-glow-gold mt-1"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                        lineNumber: 35,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                lineNumber: 33,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                text: "Nasarawa Federal",
                                variant: "outline",
                                className: "border-white/20 text-white/90 bg-black/40 backdrop-blur-md"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                lineNumber: 37,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                        lineNumber: 32,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
                        isLandscape: isLandscape,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${isLandscape ? 'col-span-6' : 'col-span-12'} relative flex items-end justify-center w-full h-full min-h-0`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-[85%] relative z-10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-[0.4cqw] border-white/10 rounded-[1cqw] overflow-hidden`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                            styleVariant: "editorial",
                                            className: "w-full aspect-[4/5]"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                            lineNumber: 45,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-12 pb-4 px-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} font-serif italic font-black leading-[0.85] tracking-tighter drop-shadow-xl`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.display
                                                },
                                                children: [
                                                    "Hon.",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 39
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Hassan"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 47,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                            lineNumber: 46,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                    lineNumber: 44,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                lineNumber: 43,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${isLandscape ? 'col-span-6' : 'col-span-12'} flex flex-col justify-center w-full h-full min-h-0 relative z-20`,
                                style: {
                                    paddingLeft: isLandscape ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.lg : 0,
                                    paddingTop: !isLandscape ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.lg : 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex ${isLandscape ? 'justify-start' : 'justify-center'} w-full mb-8 shrink-0`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-[50%] aspect-square bg-gradient-to-br from-gold-300 via-gold-600 to-gold-800 p-[0.3cqw] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].shadows.heavy} rounded-sm transform ${isLandscape ? '-rotate-2' : 'rotate-0'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                                src: supporterPhoto,
                                                styleVariant: "editorial",
                                                className: "w-full h-full rounded-sm bg-[#0a0a0a]"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 61,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                            lineNumber: 60,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                        lineNumber: 59,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-full bg-white shadow-[0_20px_40px_rgba(0,0,0,0.4)] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].borders.width.thick} border-gold-600 flex flex-col relative shrink-0`,
                                        style: {
                                            padding: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.lg
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 67,
                                                columnNumber: 28
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.muted} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline} text-center w-full`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                                },
                                                children: "Proudly Supported By"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 68,
                                                columnNumber: 28
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `${themes.text} font-serif font-black leading-tight uppercase text-center break-words w-full`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.title,
                                                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.sm,
                                                    marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.sm
                                                },
                                                children: supporterName || 'YOUR FULL NAME'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 69,
                                                columnNumber: 28
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 72,
                                                columnNumber: 28
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.quote} text-center break-words w-full`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.body,
                                                    marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.sm
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'BUILDING THE FUTURE OF NASSARAWA',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                                lineNumber: 73,
                                                columnNumber: 28
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                        lineNumber: 66,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                                lineNumber: 56,
                                columnNumber: 18
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
                lineNumber: 30,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/shared/candidateImage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CANDIDATE_BASE64",
    ()=>CANDIDATE_BASE64
]);
const CANDIDATE_BASE64 = 'data:image/jpeg;base64,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';
}),
"[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CandidatePortrait",
    ()=>CandidatePortrait
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$candidateImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/candidateImage.ts [app-ssr] (ecmascript)");
;
;
const CandidatePortrait = ({ className = '', src })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative overflow-hidden ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src || __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$candidateImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CANDIDATE_BASE64"],
                crossOrigin: "anonymous",
                onError: (e)=>{
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/assets/images/default-candidate-avatar.png";
                },
                alt: "Hon. Hassan Shehu Hussain",
                className: "w-full h-full object-cover object-top"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[inherit] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModernTemplate",
    ()=>ModernTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const ModernTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme } = data;
    const colors = {
        green: {
            gradient: 'from-brand-600/30',
            glow: 'bg-brand-500/40',
            accent: 'bg-brand-400',
            border: 'border-brand-500',
            bottom: 'from-brand-800 to-charcoal'
        },
        red: {
            gradient: 'from-rose-600/30',
            glow: 'bg-rose-500/40',
            accent: 'bg-rose-400',
            border: 'border-rose-500',
            bottom: 'from-rose-900 to-charcoal'
        },
        blue: {
            gradient: 'from-blue-600/30',
            glow: 'bg-blue-500/40',
            accent: 'bg-blue-400',
            border: 'border-blue-500',
            bottom: 'from-blue-900 to-charcoal'
        },
        gold: {
            gradient: 'from-gold-600/30',
            glow: 'bg-gold-500/40',
            accent: 'bg-gold-400',
            border: 'border-gold-500',
            bottom: 'from-gold-800 to-charcoal'
        }
    }[colorTheme] || {
        gradient: 'from-brand-600/30',
        glow: 'bg-brand-500/40',
        accent: 'bg-brand-400',
        border: 'border-brand-500',
        bottom: 'from-brand-800 to-charcoal'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col items-center bg-charcoal font-sans relative overflow-hidden select-none",
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${colors.gradient} via-charcoal to-black z-0`
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10 bg-hero-pattern z-0"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-[-20%] right-[-10%] w-[70%] h-[70%] ${colors.glow} rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-3000`
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-4 md:inset-5 rounded-[2rem] bg-white/5 backdrop-blur-3xl border border-white/10 z-10 flex flex-col overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-auto py-5 flex items-center justify-between px-6 sm:px-8 border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent shadow-inner shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${colors.accent} shadow-[0_0_15px_rgba(255,255,255,0.8)]`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 30,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white/90 font-black tracking-[0.3em] sm:tracking-[0.4em] text-[0.74cqw] sm:text-[0.93cqw] md:text-[1.11cqw] uppercase drop-shadow-md",
                                        children: "Official Endorsement"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 31,
                                        columnNumber: 18
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 29,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/50 font-mono text-[0.83cqw] sm:text-[0.93cqw] md:text-[1.11cqw] tracking-widest font-black",
                                children: "2027"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 33,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex p-4 sm:p-6 gap-4 sm:gap-6 relative items-stretch justify-center h-full min-h-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 h-full relative rounded-[1rem] sm:rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-black",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                        className: "w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 40,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 41,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute bottom-4 sm:bottom-6 left-4 sm:left-6 border-l-[3px] ${colors.border} pl-3 sm:pl-4 max-w-[90%]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/60 text-[0.74cqw] sm:text-[0.93cqw] font-black uppercase tracking-[0.3em] block mb-0.5 sm:mb-1 drop-shadow-md",
                                                children: "Vote For"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                                lineNumber: 43,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-black uppercase leading-tight block tracking-tight drop-shadow-lg",
                                                style: {
                                                    fontSize: '6cqw'
                                                },
                                                children: "Hon. HASH"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                                lineNumber: 44,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 42,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 h-full relative rounded-[1rem] sm:rounded-2xl overflow-hidden shadow-2xl bg-[#0a0a0a] group border border-white/10",
                                children: [
                                    supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: supporterPhoto,
                                        crossOrigin: "anonymous",
                                        className: "w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 50,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center w-full h-full text-white/10 bg-[#0a0a0a]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[3.33cqw] sm:text-[5.56cqw] mb-1 sm:mb-2 font-light",
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[0.74cqw] sm:text-[0.93cqw] uppercase tracking-widest font-bold",
                                                children: "Photo"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                                lineNumber: 54,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 57,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute bottom-4 sm:bottom-6 left-4 sm:left-6 border-l-[3px] ${colors.border} pl-3 sm:pl-4 w-[85%]`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white/60 text-[0.74cqw] sm:text-[0.93cqw] font-black uppercase tracking-[0.3em] block mb-0.5 sm:mb-1 drop-shadow-md",
                                                children: "Endorsed By"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-black uppercase leading-[1.1] block w-full tracking-tight drop-shadow-lg pr-2 break-words",
                                                style: {
                                                    fontSize: '5cqw'
                                                },
                                                children: supporterName || 'Your Name'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                        lineNumber: 58,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `h-auto min-h-[90px] py-6 sm:py-8 bg-gradient-to-br ${colors.bottom} flex flex-col items-center justify-center px-6 text-center relative overflow-hidden shadow-[inset_0_20px_40px_rgba(255,255,255,0.05)] border-t border-white/10 shrink-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "relative z-10 text-white font-black uppercase leading-[1.1] drop-shadow-2xl italic tracking-tight px-2 break-words w-full",
                                style: {
                                    fontSize: '7cqw'
                                },
                                children: [
                                    '"',
                                    customMessage || 'FORWARD TOGETHER',
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YouthTemplate",
    ()=>YouthTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const YouthTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[#064e3b] font-sans relative overflow-hidden flex flex-col select-none",
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#10b981]",
                style: {
                    clipPath: isLandscape ? 'polygon(0 0, 50% 0, 70% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 45%, 0 80%)'
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,0.5)] z-0",
                style: {
                    clipPath: isLandscape ? 'polygon(50% 0, calc(50% + 5px) 0, calc(70% + 5px) 100%, 70% 100%)' : 'polygon(0 80%, 100% 45%, 100% calc(45% + 5px), 0 calc(80% + 5px))'
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${isLandscape ? 'top-0 right-0 w-[50%] h-full' : 'bottom-0 right-0 w-full h-[55%]'} z-10`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full relative overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                            className: "w-full h-full object-cover object-top"
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/20 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-30 flex flex-col justify-between ${isLandscape ? 'w-[55%] h-full p-8' : 'w-full h-full p-6 pt-12'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center self-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-[35cqw] max-w-[180px] aspect-square rounded-full border-[6px] border-white bg-[#022c22] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] group",
                                children: supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: supporterPhoto,
                                    crossOrigin: "anonymous",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                    lineNumber: 36,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full flex items-center justify-center bg-[#064e3b] text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black",
                                        style: {
                                            fontSize: '5cqw'
                                        },
                                        children: "YOU"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                        lineNumber: 39,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                    lineNumber: 38,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                lineNumber: 34,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white text-[#064e3b] px-5 py-2 rounded-full font-black uppercase whitespace-nowrap border-2 border-[#10b981] shadow-xl",
                                style: {
                                    fontSize: '3.5cqw'
                                },
                                children: supporterName || 'Supporter'
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col mt-auto w-full max-w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-white font-black leading-[0.9] tracking-tighter uppercase italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] break-words w-full",
                                style: {
                                    fontSize: '10cqw'
                                },
                                children: [
                                    "TEAM",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                        lineNumber: 51,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#6ee7b7] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]",
                                        children: "Hon. HASH"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                        lineNumber: 52,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                lineNumber: 50,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[#a7f3d0] font-black uppercase mt-3 tracking-widest drop-shadow-md break-words w-full",
                                style: {
                                    fontSize: '3.5cqw'
                                },
                                children: customMessage || 'YOUTH MANDATE 2027'
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                                lineNumber: 54,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-6 right-6 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-block px-4 py-2 bg-[#fbbf24] text-[#451a03] font-black uppercase",
                    style: {
                        fontSize: '2.5cqw',
                        transform: 'rotate(5deg)',
                        boxShadow: '4px 4px 0 rgba(0,0,0,0.3)',
                        border: '2px solid white'
                    },
                    children: "#2027"
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintTemplate",
    ()=>PrintTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const PrintTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[#f8fafc] flex flex-col font-sans border-[12px] sm:border-[16px] border-brand-900 relative select-none",
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px] pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)] pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[12%] sm:h-[14%] flex items-center justify-between px-4 sm:px-8 border-b-[4px] sm:border-b-[6px] border-brand-700 bg-white relative z-10 shadow-sm shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-900 font-black leading-tight uppercase tracking-widest drop-shadow-sm",
                                style: {
                                    fontSize: '4cqw'
                                },
                                children: "APC"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand-600 font-bold uppercase tracking-[0.2em] mt-0.5 sm:mt-1",
                                style: {
                                    fontSize: '2cqw'
                                },
                                children: "All Progressives Congress"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                        lineNumber: 17,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-right flex flex-col items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-charcoal font-black uppercase leading-tight tracking-[0.3em] sm:tracking-[0.4em] px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 border border-brand-500/30 shadow-sm",
                            style: {
                                fontSize: '2cqw'
                            },
                            children: "Nasarawa Federal"
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                            lineNumber: 22,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                        lineNumber: 21,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative z-10 overflow-hidden`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${isLandscape ? 'w-1/2 border-r-[2px] sm:border-r-[3px]' : 'h-1/2 border-b-[2px] sm:border-b-[3px]'} p-4 sm:p-8 lg:p-10 flex flex-col items-center justify-center border-dashed border-brand-900/30 bg-white/80 backdrop-blur-md min-h-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[180px] sm:max-w-[260px] aspect-[4/5] bg-white border-2 sm:border-4 border-gray-200 flex items-center justify-center mb-4 sm:mb-8 p-1.5 sm:p-3 shadow-glass-lg relative shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full bg-gray-100 overflow-hidden relative",
                                    children: supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: supporterPhoto,
                                        crossOrigin: "anonymous",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                        lineNumber: 33,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center text-gray-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[5.56cqw] sm:text-[9.26cqw] font-light",
                                            children: "person"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                            lineNumber: 36,
                                            columnNumber: 24
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                        lineNumber: 35,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                    lineNumber: 31,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-charcoal font-black leading-tight text-center uppercase border-b-[4px] sm:border-b-[6px] border-brand-500 pb-2 sm:pb-3 mb-2 sm:mb-3 break-words w-full",
                                style: {
                                    fontSize: '6cqw'
                                },
                                children: supporterName || 'FULL NAME'
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-brand-600 font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]",
                                style: {
                                    fontSize: '2cqw'
                                },
                                children: "Official Endorsement"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                        lineNumber: 29,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${isLandscape ? 'w-1/2' : 'h-1/2'} p-4 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-brand-900 text-white shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] sm:shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[60px] sm:blur-[80px] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[140px] sm:max-w-[220px] aspect-square rounded-full border-[6px] sm:border-[10px] border-white overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.7)] mb-4 sm:mb-8 bg-gray-100 flex items-center justify-center relative z-10 group shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                    className: "w-full h-full object-cover "
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                    lineNumber: 54,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-black leading-[0.9] uppercase tracking-tighter mb-4 sm:mb-6 drop-shadow-lg relative z-10 w-full",
                                style: {
                                    fontSize: '8cqw'
                                },
                                children: [
                                    "Hon. HASH",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                        lineNumber: 58,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-widest font-bold text-brand-300 block mt-1",
                                        style: {
                                            fontSize: '3cqw'
                                        },
                                        children: "(Hassan Shehu)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                        lineNumber: 58,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-charcoal/90 border-l-[4px] sm:border-l-[6px] border-brand-400 p-3 sm:p-5 shadow-glass-lg w-[95%] sm:max-w-[350px] relative z-10 backdrop-blur-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white italic font-black tracking-widest break-words",
                                    style: {
                                        fontSize: '3cqw'
                                    },
                                    children: [
                                        '"',
                                        customMessage || 'SERVICE ABOVE POLITICS',
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                        lineNumber: 48,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[8%] sm:h-[10%] bg-charcoal text-brand-100 flex items-center justify-between px-4 sm:px-8 border-t-[3px] sm:border-t-4 border-brand-500 relative z-10 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black text-gray-400",
                        style: {
                            fontSize: '1.51cqw'
                        },
                        children: "Authorized Campaign Material 2027"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                        lineNumber: 71,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 sm:gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-brand-700"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 73,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-brand-500"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 74,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-brand-300"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                                lineNumber: 75,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                        lineNumber: 72,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MinimalTemplate",
    ()=>MinimalTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/Grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/portraits.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/badges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/tokens.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const MinimalTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.background.primary} font-sans flex flex-col relative select-none overflow-hidden`,
        style: {
            containerType: 'inline-size',
            fontFamily: "'Inter', 'SF Pro Display', sans-serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-white/60 to-transparent pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none opacity-[0.03]",
                style: {
                    backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px)',
                    backgroundSize: '8.333333% 100%'
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 w-full h-full relative z-10 flex flex-col`,
                style: {
                    padding: isLandscape ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.lg : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.xl
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid grid-cols-12 items-start shrink-0 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].borders.width.thin} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border.medium} border-b`,
                        style: {
                            gap: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.sm,
                            paddingBottom: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.sm,
                            marginBottom: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.md
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-8 sm:col-span-6 flex flex-col items-start",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        text: "Official Endorsement",
                                        variant: "primary",
                                        className: "mb-[1cqw]"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.heading} truncate w-full`,
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.title
                                        },
                                        title: supporterName || 'Supporter Name',
                                        children: supporterName || 'Supporter Name'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                lineNumber: 23,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-4 sm:col-span-6 text-right flex flex-col justify-end h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.muted} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline}`,
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                        },
                                        children: "Nasarawa Federal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.muted} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.label} mt-[0.5cqw]`,
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.label
                                        },
                                        children: "REF-2027"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                lineNumber: 29,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
                        isLandscape: isLandscape,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${isLandscape ? 'col-span-5 h-full justify-center' : 'col-span-12 h-auto'} flex flex-col shrink-0 min-h-0 z-20`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.primary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.display}`,
                                        style: {
                                            fontSize: isLandscape ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.display : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.displayPortrait
                                        },
                                        children: [
                                            "Hassan",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                                lineNumber: 41,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Shehu"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 40,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `shrink-0`,
                                        style: {
                                            marginTop: isLandscape ? __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.lg : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.md,
                                            marginBottom: isLandscape ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.md
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.secondary} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.body} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.quote} border-l-[3px] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border.accent} pl-[2cqw] break-words`,
                                            style: {
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.quote
                                            },
                                            children: [
                                                '"',
                                                customMessage || 'Service above politics, building a sustainable future.',
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                            lineNumber: 46,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 45,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${isLandscape ? 'col-span-7' : 'col-span-12'} relative h-full w-full z-10 flex items-center justify-center`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute ${isLandscape ? 'right-0 top-1/2 -translate-y-1/2 w-[85%]' : 'right-0 top-0 w-[70%]'} aspect-[3/4] z-0`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                            styleVariant: "rounded",
                                            className: "w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                            lineNumber: 57,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 56,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `absolute ${isLandscape ? 'left-[-15%] bottom-[5%] w-[65%]' : 'left-0 bottom-[-5%] w-[60%]'} aspect-[4/5] z-10 transform -rotate-3 transition-transform hover:rotate-0`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                            src: supporterPhoto,
                                            styleVariant: "editorial",
                                            className: "w-full h-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                        lineNumber: 61,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-full text-center shrink-0 ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].borders.width.thin} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.border.light} border-t`,
                        style: {
                            marginTop: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.md,
                            paddingTop: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].spacing.sm
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.primary} opacity-80 tracking-wide ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.quote}`,
                            style: {
                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.body
                            },
                            children: "Together We Rise"
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgeTemplate",
    ()=>BadgeTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const BadgeTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    // Use bright, high-contrast, premium colors
    const themeColors = {
        green: {
            bg: '#ffffff',
            header: '#065f46',
            accent: '#10b981',
            text: '#022c22'
        },
        red: {
            bg: '#ffffff',
            header: '#991b1b',
            accent: '#ef4444',
            text: '#450a0a'
        },
        blue: {
            bg: '#ffffff',
            header: '#1e40af',
            accent: '#3b82f6',
            text: '#172554'
        },
        gold: {
            bg: '#ffffff',
            header: '#854d0e',
            accent: '#eab308',
            text: '#422006'
        }
    }[colorTheme] || {
        bg: '#ffffff',
        header: '#065f46',
        accent: '#10b981',
        text: '#022c22'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full bg-[#f1f5f9] font-sans flex items-center justify-center p-4 sm:p-8 relative overflow-hidden select-none",
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-[#e2e8f0] opacity-80"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-full h-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200 flex ${isLandscape ? 'flex-row' : 'flex-col max-w-[90%] mx-auto'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute z-30 bg-[#f1f5f9] rounded-full shadow-inner border border-slate-300 ${isLandscape ? 'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-6 h-16 sm:w-8 sm:h-24' : 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 sm:w-24 sm:h-8'}`
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-center p-4 sm:p-6 relative ${isLandscape ? 'w-[25%] flex-col border-r border-slate-200' : 'h-[20%] sm:h-[25%] border-b border-slate-200'}`,
                        style: {
                            backgroundColor: themeColors.header
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-2 ${isLandscape ? 'flex-col rotate-180 [writing-mode:vertical-rl]' : ''}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-white text-[2.22cqw] sm:text-[2.78cqw]",
                                        children: "verified_user"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                        lineNumber: 31,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-white font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]",
                                        style: {
                                            fontSize: '3cqw'
                                        },
                                        children: "VIP ACCESS"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                        lineNumber: 32,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                lineNumber: 30,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute ${isLandscape ? 'bottom-8' : 'right-4 sm:right-8'} w-8 h-6 sm:w-12 sm:h-10 rounded-md bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 opacity-90 border border-yellow-300 shadow-sm`
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                lineNumber: 37,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col p-4 sm:p-8 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white min-h-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white/95"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col h-full min-h-0 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-start mb-4 sm:mb-6 border-b-2 border-slate-100 pb-2 sm:pb-4 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[60%]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-[0.74cqw] sm:text-[0.93cqw] text-slate-400 tracking-[0.2em] uppercase mb-1",
                                                        children: "Official Supporter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "font-black uppercase tracking-tight leading-tight break-words w-full",
                                                        style: {
                                                            color: themeColors.text,
                                                            fontSize: '3.06cqw'
                                                        },
                                                        children: supporterName || 'YOUR NAME'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                lineNumber: 47,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-1 sm:px-4 sm:py-1.5 font-black tracking-widest uppercase text-white rounded-md mb-1",
                                                        style: {
                                                            backgroundColor: themeColors.accent,
                                                            fontSize: '1.02cqw'
                                                        },
                                                        children: "Verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-400 uppercase tracking-widest",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "ID: HASH-2027"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                lineNumber: 53,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                        lineNumber: 46,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex-1 flex gap-4 sm:gap-8 min-h-0 ${isLandscape ? 'items-center' : 'flex-col items-center justify-center'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2 sm:gap-4 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `relative p-1.5 sm:p-2 bg-white rounded-xl sm:rounded-2xl border-2 shadow-xl ${isLandscape ? 'w-[120px] sm:w-[180px]' : 'w-[140px] sm:w-[200px]'} aspect-[3/4] flex-shrink-0 group z-20`,
                                                        style: {
                                                            borderColor: themeColors.header
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-100",
                                                                children: supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: supporterPhoto,
                                                                    crossOrigin: "anonymous",
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                    lineNumber: 69,
                                                                    columnNumber: 24
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full h-full flex items-center justify-center text-slate-300",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw]",
                                                                        children: "person"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                        lineNumber: 72,
                                                                        columnNumber: 26
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                    lineNumber: 71,
                                                                    columnNumber: 24
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-200 via-emerald-200 to-blue-200 opacity-90 border-2 border-white shadow-lg flex items-center justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "material-symbols-outlined text-white text-[1.3cqw] sm:text-[1.67cqw]",
                                                                    children: "star"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `relative p-1.5 sm:p-2 bg-slate-50 rounded-xl sm:rounded-2xl border-2 border-slate-200 shadow-md ${isLandscape ? 'w-[100px] sm:w-[140px]' : 'w-[120px] sm:w-[160px]'} aspect-[3/4] flex-shrink-0 z-10 self-end -ml-6 lg:ml-0`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-full relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-200",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                    lineNumber: 85,
                                                                    columnNumber: 22
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute -top-2 left-2 sm:-top-3 sm:left-4 bg-white px-1 sm:px-2 py-0.5 sm:py-1 border border-slate-200 rounded font-black uppercase tracking-widest text-slate-400",
                                                                style: {
                                                                    fontSize: '1.51cqw'
                                                                },
                                                                children: "Candidate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 20
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex flex-col justify-center w-full min-h-0 ${!isLandscape ? 'items-center text-center mt-2 sm:mt-4' : ''}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold text-[0.74cqw] sm:text-[0.93cqw] uppercase tracking-[0.2em] text-slate-400 mb-1 sm:mb-2",
                                                        children: "Official Endorsement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-slate-50 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 w-full shadow-sm relative min-h-0 overflow-hidden flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined absolute top-1 left-1 sm:top-2 sm:left-2 text-slate-200 text-[1.85cqw] sm:text-[2.78cqw]",
                                                                children: "format_quote"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-black italic uppercase tracking-wide relative z-10 pl-4 sm:pl-6 pt-1 sm:pt-2 w-full break-words leading-snug",
                                                                style: {
                                                                    color: themeColors.header,
                                                                    fontSize: '1.79cqw'
                                                                },
                                                                children: [
                                                                    '"',
                                                                    customMessage || 'SERVICE ABOVE POLITICS',
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                                lineNumber: 98,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                        lineNumber: 96,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto pt-4 border-t-2 border-slate-100 flex justify-between items-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-10 w-56 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black text-[1.11cqw] uppercase tracking-[0.3em] text-slate-300",
                                                children: "#NASSARAWAFIRST"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TypeTemplate",
    ()=>TypeTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const TypeTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    // Use bright, punchy, high-contrast colors (white/light base, extremely bold accents)
    const themeColors = {
        green: {
            bg: '#ffffff',
            text: '#022c22',
            accent: '#16a34a'
        },
        red: {
            bg: '#ffffff',
            text: '#450a0a',
            accent: '#dc2626'
        },
        blue: {
            bg: '#ffffff',
            text: '#172554',
            accent: '#2563eb'
        },
        gold: {
            bg: '#ffffff',
            text: '#422006',
            accent: '#d97706'
        }
    }[colorTheme] || {
        bg: '#ffffff',
        text: '#022c22',
        accent: '#16a34a'
    };
    const firstName = supporterName ? supporterName.split(' ')[0] : 'YOUR';
    const lastName = supporterName ? supporterName.split(' ').slice(1).join(' ') || 'NAME' : 'NAME';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full font-sans overflow-hidden flex relative select-none",
        style: {
            backgroundColor: themeColors.bg,
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-10 right-10 w-4 h-4 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 w-full h-px bg-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 28,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-0 h-full w-px bg-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 29,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 left-10 w-4 h-4 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 w-full h-px bg-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 32,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 top-0 h-full w-px bg-slate-400"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 33,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -top-[10%] -left-[10%] w-[120%] h-[120%] pointer-events-none flex flex-col justify-center opacity-[0.04] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap",
                        style: {
                            color: themeColors.text,
                            fontSize: '60cqw'
                        },
                        children: "HASSAN"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-32",
                        style: {
                            color: themeColors.text,
                            fontSize: '60cqw'
                        },
                        children: "SHEHU"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-16",
                        style: {
                            color: themeColors.text,
                            fontSize: '60cqw'
                        },
                        children: "HUSSAIN"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-6 sm:p-12 min-h-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col ${isLandscape ? 'w-[55%] justify-center pr-6 sm:pr-8 border-r-[8px] sm:border-r-[12px]' : 'h-[45%] justify-end pb-6 sm:pb-8 border-b-[8px] sm:border-b-[12px]'} shrink-0 min-h-0`,
                        style: {
                            borderColor: themeColors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-4 left-4 sm:top-6 sm:left-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 text-white",
                                    style: {
                                        backgroundColor: themeColors.accent,
                                        fontSize: '1.02cqw'
                                    },
                                    children: "2027 Mandate"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                    lineNumber: 55,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto min-h-0 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-black uppercase leading-[0.85] tracking-tighter mb-1 sm:mb-2 break-words max-w-full",
                                        style: {
                                            color: themeColors.text,
                                            fontSize: '5.09cqw'
                                        },
                                        children: firstName
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-black uppercase leading-[0.85] tracking-tighter mb-4 sm:mb-8 break-words max-w-full",
                                        style: {
                                            color: themeColors.accent,
                                            fontSize: '5.09cqw'
                                        },
                                        children: lastName
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 sm:gap-4 bg-slate-50 p-3 sm:p-6 border-l-[8px] sm:border-l-[16px] shadow-[5px_5px_0px_rgba(0,0,0,0.05)] relative shrink-0",
                                        style: {
                                            borderColor: themeColors.accent
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 p-1 sm:p-2 opacity-20",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-r-2 border-slate-900"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                                    lineNumber: 70,
                                                    columnNumber: 18
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                                lineNumber: 69,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black uppercase tracking-[0.2em] leading-snug break-words",
                                                style: {
                                                    color: themeColors.text,
                                                    fontSize: '1.28cqw'
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'NO NOISE. JUST WORK.',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                                lineNumber: 72,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isLandscape ? 'w-[45%] flex-col pl-8 justify-center gap-8' : 'h-[55%] flex-row items-end pt-8 justify-between gap-4'} relative`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full flex gap-4 h-full items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative flex-1 aspect-[3/4] bg-slate-100 overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.1)] border-[6px]`,
                                    style: {
                                        borderColor: themeColors.text
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                            className: "w-full h-full object-cover "
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                            lineNumber: 85,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-0 bg-white/95 px-3 py-1.5 border-b-[4px] border-r-[4px]",
                                            style: {
                                                borderColor: themeColors.text
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black text-[1.02cqw] uppercase tracking-[0.2em]",
                                                style: {
                                                    color: themeColors.accent
                                                },
                                                children: "THE VISION"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                                lineNumber: 87,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                            lineNumber: 86,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative flex-1 aspect-[3/4] bg-slate-100 overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.1)] border-[6px]`,
                                    style: {
                                        borderColor: themeColors.accent
                                    },
                                    children: [
                                        supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: supporterPhoto,
                                            crossOrigin: "anonymous",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                            lineNumber: 94,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center text-slate-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[7.41cqw]",
                                                children: "person"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                                lineNumber: 97,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                            lineNumber: 96,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-0 left-0 bg-white/95 px-3 py-1.5 border-b-[4px] border-r-[4px]",
                                            style: {
                                                borderColor: themeColors.accent
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black text-[1.02cqw] uppercase tracking-[0.2em]",
                                                style: {
                                                    color: themeColors.text
                                                },
                                                children: "THE VOTER"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                                lineNumber: 101,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                            lineNumber: 100,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 border-[16px] pointer-events-none z-50",
                style: {
                    borderColor: themeColors.bg
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[16px] border-[4px] pointer-events-none z-50",
                style: {
                    borderColor: themeColors.text
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeometricTemplate",
    ()=>GeometricTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const GeometricTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    // Bauhaus inspired, high contrast primary colors
    const themeColors = {
        green: {
            bg: '#ffffff',
            accent1: '#10b981',
            accent2: '#047857',
            dark: '#022c22'
        },
        red: {
            bg: '#ffffff',
            accent1: '#ef4444',
            accent2: '#b91c1c',
            dark: '#450a0a'
        },
        blue: {
            bg: '#ffffff',
            accent1: '#3b82f6',
            accent2: '#1d4ed8',
            dark: '#1e3a8a'
        },
        gold: {
            bg: '#ffffff',
            accent1: '#f59e0b',
            accent2: '#b45309',
            dark: '#451a03'
        }
    }[colorTheme] || {
        bg: '#ffffff',
        accent1: '#10b981',
        accent2: '#047857',
        dark: '#022c22'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full font-sans overflow-hidden relative select-none",
        style: {
            backgroundColor: themeColors.bg,
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-[20%] -right-[10%] w-[70%] aspect-square rounded-full mix-blend-multiply opacity-20",
                        style: {
                            backgroundColor: themeColors.accent1
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                        lineNumber: 22,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-[10%] -left-[10%] w-[80%] h-[80%] opacity-10",
                        style: {
                            backgroundColor: themeColors.accent2,
                            clipPath: 'polygon(0 100%, 100% 100%, 0 0)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                        lineNumber: 24,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,1)_2px,transparent_2px)] bg-[size:100px_100px]"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                        lineNumber: 26,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-6 sm:p-8 min-h-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isLandscape ? 'w-1/2 h-full flex-col justify-center' : 'h-[55%] w-full flex-row items-end justify-center'} gap-4 sm:gap-6 relative z-20 min-h-0 shrink-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative ${isLandscape ? 'w-[80%] aspect-square shadow-[10px_10px_0px_rgba(0,0,0,1)] sm:shadow-[15px_15px_0px_rgba(0,0,0,1)]' : 'w-[45%] aspect-square shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_rgba(0,0,0,1)]'} bg-white border-2 sm:border-4 border-black overflow-hidden z-20 shrink-0`,
                                children: [
                                    supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: supporterPhoto,
                                        crossOrigin: "anonymous",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 37,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center bg-slate-100 text-slate-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw]",
                                            children: "person"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                            lineNumber: 40,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 39,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 left-0 bg-black text-white font-black px-2 py-1 text-[0.74cqw] sm:text-[0.93cqw] uppercase tracking-widest",
                                        children: "Supporter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 43,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 35,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative ${isLandscape ? 'w-[50%] aspect-square absolute bottom-4 sm:bottom-10 -right-2 sm:-right-4 shadow-[10px_10px_0px_rgba(0,0,0,1)] sm:shadow-[15px_15px_0px_rgba(0,0,0,1)]' : 'w-[45%] aspect-square shadow-[6px_6px_0px_rgba(0,0,0,1)] sm:shadow-[10px_10px_0px_rgba(0,0,0,1)] -ml-6 sm:-ml-10 z-10 mb-2 sm:mb-4'} bg-white border-2 sm:border-4 border-black rounded-full overflow-hidden shrink-0`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 50,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[4px] sm:border-[8px] rounded-full pointer-events-none",
                                        style: {
                                            borderColor: themeColors.accent1,
                                            mixBlendMode: 'multiply'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 51,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col ${isLandscape ? 'w-1/2 h-full pl-6 sm:pl-12 justify-center' : 'h-[45%] w-full pt-4 sm:pt-8 justify-center'} relative z-20 min-h-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 sm:w-16 h-3 sm:h-4 mb-3 sm:mb-6 shrink-0",
                                style: {
                                    backgroundColor: themeColors.accent1
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-black uppercase leading-[0.9] tracking-tighter text-black mb-2 sm:mb-4 break-words",
                                style: {
                                    fontSize: '8cqw'
                                },
                                children: supporterName || 'YOUR NAME'
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black text-white p-2 sm:p-4 inline-block self-start mb-3 sm:mb-6 border-l-[4px] sm:border-l-[8px] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] sm:shadow-[8px_8px_0px_rgba(0,0,0,0.2)] shrink-0",
                                style: {
                                    borderColor: themeColors.accent1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold uppercase tracking-widest",
                                    style: {
                                        fontSize: '2.51cqw'
                                    },
                                    children: "ENDORSES HON. HASSAN"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-black italic uppercase tracking-wide leading-tight max-w-md break-words shrink-0",
                                style: {
                                    color: themeColors.accent2,
                                    fontSize: '1.53cqw'
                                },
                                children: [
                                    '"',
                                    customMessage || 'BUILDING THE FUTURE',
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto flex items-center justify-between border-t-2 sm:border-t-4 border-black pt-2 sm:pt-4 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-1.5 sm:gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 bg-black rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                                lineNumber: 78,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 bg-black"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                                lineNumber: 79,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3 h-3 sm:w-4 sm:h-4 bg-black",
                                                style: {
                                                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                                lineNumber: 80,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 77,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-black uppercase tracking-[0.3em] text-black",
                                        style: {
                                            fontSize: '2cqw'
                                        },
                                        children: "2027 CAMPAIGN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                        lineNumber: 82,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 border-[16px] border-black pointer-events-none z-50"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassicTemplateV2",
    ()=>ClassicTemplateV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const ClassicTemplateV2 = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme } = data;
    const colors = {
        green: {
            bg: 'bg-green-900',
            accent: 'bg-green-600',
            text: 'text-green-50'
        },
        red: {
            bg: 'bg-red-900',
            accent: 'bg-red-600',
            text: 'text-red-50'
        },
        blue: {
            bg: 'bg-blue-900',
            accent: 'bg-blue-600',
            text: 'text-blue-50'
        },
        gold: {
            bg: 'bg-yellow-900',
            accent: 'bg-yellow-600',
            text: 'text-yellow-50'
        }
    }[colorTheme];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full flex flex-col ${colors.bg} font-sans relative overflow-hidden`,
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[55%] h-full relative z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                className: "w-full h-full absolute inset-0 object-cover"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                lineNumber: 23,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-white font-black leading-[1.0] uppercase drop-shadow-lg tracking-tight",
                                    style: {
                                        fontSize: '5cqw'
                                    },
                                    children: [
                                        "Hon. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                            lineNumber: 27,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-yellow-400 text-[1.1em]",
                                            children: "Hassan Shehu"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                            lineNumber: 28,
                                            columnNumber: 95
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Hussain"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                    lineNumber: 26,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                lineNumber: 25,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[45%] bg-white/10 backdrop-blur-md border-l border-white/20 flex flex-col items-center justify-center p-4 sm:p-6 text-center relative z-20 min-h-0 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square w-[70%] sm:w-[80%] max-w-[220px] rounded-full border-[4px] sm:border-[6px] border-yellow-400 p-1 sm:p-1.5 mb-2 sm:mb-4 shadow-2xl bg-white/10 relative group shrink-0",
                                children: [
                                    supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: supporterPhoto,
                                        crossOrigin: "anonymous",
                                        className: "w-full h-full rounded-full object-cover shadow-inner"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                        lineNumber: 38,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[5.56cqw] sm:text-[7.41cqw]",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                            lineNumber: 41,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                        lineNumber: 40,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white text-[1.11cqw] sm:text-[1.3cqw] font-bold",
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                lineNumber: 36,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white font-bold leading-tight mb-1 drop-shadow-md break-words",
                                        style: {
                                            fontSize: '4cqw'
                                        },
                                        children: supporterName || 'Your Name'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                        lineNumber: 51,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-0.5 w-8 sm:w-12 bg-yellow-400 mx-auto my-1 sm:my-2 opacity-80"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                        lineNumber: 54,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-yellow-400 tracking-[0.2em] uppercase font-bold",
                                        style: {
                                            fontSize: '2cqw'
                                        },
                                        children: "Proud Supporter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${colors.accent} h-auto py-5 sm:py-6 flex items-center justify-center relative shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-30 shrink-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10 bg-hero-pattern mix-blend-overlay"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white font-black uppercase tracking-wider text-center px-4 sm:px-6 relative z-10 drop-shadow-md leading-tight break-words w-full",
                        style: {
                            fontSize: '4cqw'
                        },
                        children: [
                            '"',
                            customMessage,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-black py-1 px-2 sm:py-1.5 sm:px-3 flex justify-between items-center text-gray-400 font-medium tracking-wide uppercase shrink-0",
                style: {
                    fontSize: '1.51cqw'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "APC - Nasarawa Federal Constituency"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "2027 Campaign"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgeTemplateV2",
    ()=>BadgeTemplateV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const BadgeTemplateV2 = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    // Professional, highly structured corporate/official credential colors
    const themeColors = {
        green: {
            primary: '#0f766e',
            secondary: '#14b8a6',
            text: '#134e4a',
            bg: '#f8fafc'
        },
        red: {
            primary: '#b91c1c',
            secondary: '#ef4444',
            text: '#7f1d1d',
            bg: '#f8fafc'
        },
        blue: {
            primary: '#1d4ed8',
            secondary: '#3b82f6',
            text: '#1e3a8a',
            bg: '#f8fafc'
        },
        gold: {
            primary: '#b45309',
            secondary: '#f59e0b',
            text: '#78350f',
            bg: '#f8fafc'
        }
    }[colorTheme] || {
        primary: '#0f766e',
        secondary: '#14b8a6',
        text: '#134e4a',
        bg: '#f8fafc'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex items-center justify-center p-4 sm:p-6 bg-[#e2e8f0] relative overflow-hidden select-none font-sans",
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-full h-full max-w-[95%] mx-auto bg-white rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] border border-slate-300 overflow-hidden flex ${isLandscape ? 'flex-row' : 'flex-col'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between p-4 sm:p-6 ${isLandscape ? 'w-[25%] flex-col border-r-4' : 'w-full h-[22%] border-b-4 shrink-0'}`,
                        style: {
                            backgroundColor: themeColors.primary,
                            borderColor: themeColors.secondary
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-[150%] h-[150%] absolute -top-[50%] -left-[25%] border-[20px] sm:border-[40px] rounded-full",
                                    style: {
                                        borderColor: themeColors.secondary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                    lineNumber: 32,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                lineNumber: 31,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-3 sm:gap-4 relative z-10 ${isLandscape ? 'flex-col text-center mt-2 sm:mt-4' : 'w-full'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 sm:w-16 sm:h-16 bg-white flex items-center justify-center rounded shadow-inner p-1 shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                            className: "w-full h-full object-cover rounded-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                            lineNumber: 37,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                        lineNumber: 36,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${isLandscape ? '' : 'flex-1'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-white font-black tracking-widest uppercase leading-tight drop-shadow-md",
                                                style: {
                                                    fontSize: '6cqw'
                                                },
                                                children: "DELEGATE"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 40,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80 font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-1",
                                                style: {
                                                    fontSize: '2cqw'
                                                },
                                                children: "Official Campaign 2027"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 43,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                        lineNumber: 39,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                lineNumber: 35,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative min-h-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[18.52cqw] sm:text-[27.78cqw]",
                                    children: "verified"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-center p-4 sm:p-8 ${isLandscape ? 'w-[45%] border-r border-slate-200' : 'h-[45%] sm:h-auto w-full border-b border-slate-200 shrink-0 min-h-0'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full sm:h-auto max-w-[200px] sm:max-w-[280px] aspect-[4/5] bg-white p-1.5 sm:p-2 border border-slate-300 shadow-lg relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-1 sm:h-2 bg-slate-200 rounded-full shadow-inner"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                            lineNumber: 59,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-slate-100 overflow-hidden relative",
                                            children: [
                                                supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: supporterPhoto,
                                                    crossOrigin: "anonymous",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full flex items-center justify-center text-slate-300",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw]",
                                                        children: "person"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/60 backdrop-blur-sm text-white px-1 sm:px-2 py-0.5 font-mono tracking-widest rounded",
                                                    style: {
                                                        fontSize: '2cqw'
                                                    },
                                                    children: [
                                                        "AUTH: ",
                                                        Date.now().toString().slice(-8)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                            lineNumber: 60,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                    lineNumber: 58,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 flex flex-col p-4 sm:p-8 relative z-10 min-h-0 overflow-hidden`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-3 sm:mb-6 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black mb-1",
                                                style: {
                                                    fontSize: '2cqw'
                                                },
                                                children: "Accredited Member"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 81,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "font-black uppercase tracking-tighter leading-[0.9] text-slate-800 break-words border-l-[4px] sm:border-l-8 pl-3 sm:pl-4 py-1",
                                                style: {
                                                    borderColor: themeColors.primary,
                                                    fontSize: '4.07cqw'
                                                },
                                                children: supporterName || 'YOUR FULL NAME'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 82,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                        lineNumber: 80,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-6 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 border border-slate-200 p-2 sm:p-3 rounded-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 uppercase tracking-widest font-bold mb-0.5 sm:mb-1",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-black uppercase break-words",
                                                        style: {
                                                            color: themeColors.primary,
                                                            fontSize: '1.28cqw'
                                                        },
                                                        children: "Active / Verified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 91,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 89,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-slate-50 border border-slate-200 p-2 sm:p-3 rounded-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-slate-400 uppercase tracking-widest font-bold mb-0.5 sm:mb-1",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "Endorsing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-black uppercase text-slate-800 break-words",
                                                        style: {
                                                            fontSize: '2.51cqw'
                                                        },
                                                        children: "Hon. Hassan S.H."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 93,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                        lineNumber: 88,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 bg-slate-100 border border-slate-200 p-3 sm:p-5 rounded-sm relative min-h-0 overflow-hidden flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined absolute top-2 left-2 sm:top-4 sm:left-4 text-slate-200 leading-tight",
                                                style: {
                                                    fontSize: '6cqw'
                                                },
                                                children: "format_quote"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black italic text-slate-700 tracking-wide leading-snug sm:leading-snug relative z-10 w-full break-words",
                                                style: {
                                                    fontSize: '3.51cqw'
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'COMMITTED TO PROGRESS AND TRANSPARENCY',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 102,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                        lineNumber: 100,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 sm:mt-6 flex justify-between items-end shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-6 sm:h-10 w-[50%] opacity-70 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat mix-blend-multiply"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 109,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right flex flex-col items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-6 h-6 sm:w-10 sm:h-10 rounded-full border-[1.5px] sm:border-2 flex items-center justify-center mb-0.5 sm:mb-1 bg-white",
                                                        style: {
                                                            borderColor: themeColors.secondary
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            style: {
                                                                color: themeColors.primary,
                                                                fontSize: '1.53cqw'
                                                            },
                                                            children: "fingerprint"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                            lineNumber: 112,
                                                            columnNumber: 20
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-black uppercase tracking-widest",
                                                        style: {
                                                            color: themeColors.primary,
                                                            fontSize: '0.77cqw'
                                                        },
                                                        children: "NASSARAWA FIRST"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                                lineNumber: 110,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                        lineNumber: 108,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GeometricTemplateV2",
    ()=>GeometricTemplateV2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const GeometricTemplateV2 = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    // Neo-Brutalist highly saturated pastel/neon colors
    const themeColors = {
        green: {
            bg: '#e2e8f0',
            accent1: '#a7f3d0',
            accent2: '#10b981',
            text: '#000000'
        },
        red: {
            bg: '#e2e8f0',
            accent1: '#fecaca',
            accent2: '#ef4444',
            text: '#000000'
        },
        blue: {
            bg: '#e2e8f0',
            accent1: '#bfdbfe',
            accent2: '#3b82f6',
            text: '#000000'
        },
        gold: {
            bg: '#e2e8f0',
            accent1: '#fde68a',
            accent2: '#f59e0b',
            text: '#000000'
        }
    }[colorTheme] || {
        bg: '#e2e8f0',
        accent1: '#a7f3d0',
        accent2: '#10b981',
        text: '#000000'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full font-sans overflow-hidden flex relative select-none",
        style: {
            backgroundColor: themeColors.bg,
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 min-h-0`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isLandscape ? 'w-[55%] flex-col' : 'h-[50%] flex-row'} gap-4 sm:gap-6 relative z-20 shrink-0 min-h-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative ${isLandscape ? 'w-full h-[60%]' : 'w-[55%] h-full'} bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden group flex flex-col shrink-0`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 w-full relative bg-slate-100 border-b-4 border-black min-h-0",
                                        children: supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: supporterPhoto,
                                            crossOrigin: "anonymous",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                            lineNumber: 31,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex items-center justify-center text-slate-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw]",
                                                children: "person"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                                lineNumber: 34,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                            lineNumber: 33,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                        lineNumber: 29,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 sm:h-10 lg:h-12 w-full flex items-center justify-between px-2 sm:px-3 shrink-0",
                                        style: {
                                            backgroundColor: themeColors.accent1
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-black uppercase tracking-widest text-black",
                                                style: {
                                                    fontSize: '2cqw'
                                                },
                                                children: "Voter"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-black",
                                                style: {
                                                    fontSize: '3cqw'
                                                },
                                                children: "arrow_forward"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                        lineNumber: 38,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative ${isLandscape ? 'w-[70%] h-[35%] self-end' : 'w-[40%] h-[80%] self-end'} bg-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col shrink-0`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 w-full relative bg-slate-100 border-b-4 border-black min-h-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                            lineNumber: 47,
                                            columnNumber: 16
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                        lineNumber: 46,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-6 sm:h-8 lg:h-10 w-full flex items-center justify-center px-1 sm:px-2 shrink-0",
                                        style: {
                                            backgroundColor: themeColors.accent2
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-black uppercase tracking-widest text-black break-words",
                                            style: {
                                                fontSize: '1.51cqw'
                                            },
                                            children: "Candidate"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                            lineNumber: 50,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                        lineNumber: 49,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col ${isLandscape ? 'w-[45%] h-full' : 'h-[50%] w-full'} gap-3 sm:gap-4 relative z-20 min-h-0 shrink-0`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "self-start border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] px-3 py-1.5 sm:px-4 sm:py-2 bg-white flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 sm:w-3 sm:h-3 rounded-full border-[1.5px] sm:border-2 border-black",
                                        style: {
                                            backgroundColor: themeColors.accent2
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black uppercase tracking-widest",
                                        style: {
                                            fontSize: '2cqw'
                                        },
                                        children: "Election 2027"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 sm:mt-2 border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white p-3 sm:p-4 lg:p-6 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-black uppercase leading-[0.9] tracking-tighter text-black break-words",
                                    style: {
                                        fontSize: '6cqw'
                                    },
                                    children: supporterName || 'YOUR NAME'
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1 sm:mt-2 border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)] p-3 sm:p-4 lg:p-6 flex-1 flex items-center justify-center text-center min-h-0 overflow-hidden",
                                style: {
                                    backgroundColor: themeColors.accent1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-black uppercase tracking-widest leading-tight text-black break-words",
                                    style: {
                                        fontSize: '3.51cqw'
                                    },
                                    children: [
                                        '"',
                                        customMessage || 'POWER TO THE PEOPLE',
                                        '"'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] px-3 py-2 sm:px-4 sm:py-3 bg-black text-white flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] break-words",
                                    style: {
                                        fontSize: '2cqw'
                                    },
                                    children: "Hon. Hassan Shehu Hussain"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClassicPremiumTemplate",
    ()=>ClassicPremiumTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/Grid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/portraits.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/badges.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/system/tokens.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const ClassicPremiumTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    const themes = {
        green: {
            bg: 'bg-brand-950',
            accent: 'bg-brand-600',
            text: 'text-brand-500',
            gradient: 'from-brand-950 via-[#0a1a10] to-[#040f08]',
            subtleBorder: 'border-brand-900',
            glow: 'shadow-glow-brand'
        },
        red: {
            bg: 'bg-[#150000]',
            accent: 'bg-red-600',
            text: 'text-red-500',
            gradient: 'from-[#150000] via-[#0d0000] to-black',
            subtleBorder: 'border-red-950',
            glow: 'shadow-[0_0_15px_rgba(220,38,38,0.3)]'
        },
        blue: {
            bg: 'bg-[#000615]',
            accent: 'bg-blue-600',
            text: 'text-blue-500',
            gradient: 'from-[#000615] via-[#00030a] to-black',
            subtleBorder: 'border-blue-950',
            glow: 'shadow-[0_0_15px_rgba(37,99,235,0.3)]'
        },
        gold: {
            bg: 'bg-[#1c1917]',
            accent: 'bg-gold-600',
            text: 'text-gold-500',
            gradient: 'from-[#1c1917] via-[#0f0e0d] to-black',
            subtleBorder: 'border-[#3a332d]',
            glow: 'shadow-glow-gold'
        }
    }[colorTheme] || {
        bg: 'bg-[#1c1917]',
        accent: 'bg-gold-600',
        text: 'text-gold-500',
        gradient: 'from-[#1c1917] via-[#0f0e0d] to-black',
        subtleBorder: 'border-[#3a332d]',
        glow: 'shadow-glow-gold'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full font-serif relative overflow-hidden select-none flex flex-col ${themes.bg} bg-gradient-to-br ${themes.gradient}`,
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.05] bg-hero-pattern pointer-events-none mix-blend-overlay z-0"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-20 pointer-events-none mix-blend-screen z-0 ${themes.bg} ${themes.glow}`
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[4cqw] z-10 pointer-events-none border border-white/20"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-[4.6cqw] z-10 pointer-events-none border border-white/10"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[8cqw] right-[8cqw] z-0 opacity-10 pointer-events-none",
                style: {
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse}`,
                    style: {
                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.display
                    },
                    children: "#HASH2027"
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex-1 flex flex-col h-full min-h-0",
                style: {
                    padding: '6cqw'
                },
                children: isLandscape ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$Grid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Grid"], {
                    isLandscape: true,
                    className: "h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-6 flex flex-col justify-center min-h-0 shrink-0 h-full relative z-20 pr-[4cqw]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-b border-white/20 pb-[2cqw] mb-[4cqw]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                            text: "The Heritage Mandate",
                                            variant: "outline",
                                            className: `mb-[2cqw] border-white/20 text-white/70 bg-black/40 backdrop-blur-md`
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                            lineNumber: 43,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} font-serif font-black uppercase leading-tight break-words`,
                                            style: {
                                                fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.display
                                            },
                                            children: [
                                                "Hon. Hassan ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 44
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-light italic opacity-90 text-[80%]",
                                                    children: "Shehu Hussain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                            lineNumber: 44,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 42,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.muted} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.body} mb-[6cqw] italic pl-[2cqw] border-l-2 border-white/30`,
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.body
                                    },
                                    children: '"Achievements, facts, and records speak louder than rhetoric. The focus remains firmly on delivering democratic dividends for Nassarawa Federal Constituency."'
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 51,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex items-center gap-[3cqw] bg-black/40 backdrop-blur-xl p-[2cqw] ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].borders.radius.md} border border-white/10`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-[25%] aspect-square ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].borders.radius.full} overflow-hidden shrink-0 border-[0.4cqw] border-white/20 bg-black`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                                src: supporterPhoto,
                                                styleVariant: "modern",
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                            lineNumber: 57,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0 flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline} ${themes.text} mb-1`,
                                                    style: {
                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                                    },
                                                    children: "Official Endorsement By"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} font-serif font-black uppercase truncate leading-none mb-1`,
                                                    style: {
                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.title
                                                    },
                                                    children: supporterName || 'YOUR FULL NAME'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.quote} text-white/70 truncate`,
                                                    style: {
                                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                                    },
                                                    children: [
                                                        '"',
                                                        customMessage || 'NASSARAWA FIRST',
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                            lineNumber: 60,
                                            columnNumber: 28
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 56,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                            lineNumber: 39,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-6 relative h-full flex flex-col justify-end min-h-0 z-10 shrink-0 border-l border-white/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 z-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                        styleVariant: "editorial",
                                        className: "w-full h-full object-cover object-top"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                        lineNumber: 72,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 71,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 74,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-20 text-center pb-[4cqw]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline}`,
                                        style: {
                                            fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.title
                                        },
                                        children: "Service Above Politics"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                        lineNumber: 76,
                                        columnNumber: 28
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 75,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                            lineNumber: 70,
                            columnNumber: 18
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                    lineNumber: 37,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full justify-between items-center text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "z-30 w-full mt-[2cqw]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline} ${themes.text} mb-[2cqw]`,
                                    style: {
                                        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                    },
                                    children: "Nassarawa First • Progress First"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 84,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} font-serif font-black uppercase leading-[0.9]`,
                                    style: {
                                        fontSize: '13cqw'
                                    },
                                    children: "Hon. Hassan"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 85,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} font-serif font-light italic mt-[1cqw]`,
                                    style: {
                                        fontSize: '7cqw'
                                    },
                                    children: "Shehu Hussain"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 88,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                            lineNumber: 83,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex-1 relative w-full my-[4cqw] z-20 border border-white/20 p-[1cqw] bg-black/40`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                    styleVariant: "editorial",
                                    className: "w-full h-full object-cover object-top"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 95,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 96,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-[4cqw] left-0 right-0 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$badges$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                        text: "#HASH2027Continuity",
                                        variant: "solid",
                                        className: "bg-white/10 backdrop-blur-md text-white border-white/20"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                        lineNumber: 98,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                    lineNumber: 97,
                                    columnNumber: 24
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                            lineNumber: 94,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full bg-black/60 backdrop-blur-xl p-[4cqw] flex flex-col items-center z-30 border border-white/20`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-[3cqw] w-full text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-[18%] aspect-square ${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].borders.radius.full} overflow-hidden shrink-0 border-[0.4cqw] border-white/30 bg-black`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$portraits$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portrait"], {
                                            src: supporterPhoto,
                                            styleVariant: "modern",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                            lineNumber: 106,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0 flex flex-col justify-center border-l border-white/20 pl-[3cqw]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.overline} ${themes.text} mb-[1cqw]`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                                },
                                                children: "Official Supporter"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                lineNumber: 109,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].colors.text.inverse} font-serif font-black uppercase truncate leading-tight mb-[1cqw]`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.title
                                                },
                                                children: supporterName || 'YOUR FULL NAME'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                lineNumber: 110,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.roles.quote} text-white/80 truncate`,
                                                style: {
                                                    fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$system$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokens"].typography.sizes.caption
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'SERVICE ABOVE POLITICS',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                                lineNumber: 111,
                                                columnNumber: 34
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                        lineNumber: 108,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                                lineNumber: 104,
                                columnNumber: 24
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                            lineNumber: 103,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                    lineNumber: 81,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModernPremiumTemplate",
    ()=>ModernPremiumTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const ModernPremiumTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = aspectRatio === 'landscape';
    const isStory = aspectRatio === 'portrait';
    const colors = {
        green: {
            bg: '#041508',
            glow1: 'rgba(34,197,94,0.3)',
            glow2: 'rgba(16,185,129,0.2)',
            accent: '#4ade80'
        },
        red: {
            bg: '#1a0505',
            glow1: 'rgba(239,68,68,0.3)',
            glow2: 'rgba(220,38,38,0.2)',
            accent: '#f87171'
        },
        blue: {
            bg: '#050f1a',
            glow1: 'rgba(59,130,246,0.3)',
            glow2: 'rgba(37,99,235,0.2)',
            accent: '#60a5fa'
        },
        gold: {
            bg: '#171104',
            glow1: 'rgba(245,158,11,0.3)',
            glow2: 'rgba(217,119,6,0.2)',
            accent: '#fbbf24'
        }
    }[colorTheme] || {
        bg: '#041508',
        glow1: 'rgba(34,197,94,0.3)',
        glow2: 'rgba(16,185,129,0.2)',
        accent: '#4ade80'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full font-sans relative overflow-hidden select-none flex flex-col",
        style: {
            backgroundColor: colors.bg,
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-screen pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none transform translate-x-1/4 -translate-y-1/4",
                style: {
                    backgroundColor: colors.glow1
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 w-[70%] h-[70%] rounded-full blur-[90px] pointer-events-none transform -translate-x-1/4 translate-y-1/4",
                style: {
                    backgroundColor: colors.glow2
                }
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-4 rounded-3xl border border-white/10 z-10 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLandscape ? /* ================= LANDSCAPE RATIO ================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex h-full p-6 sm:p-8 gap-4 sm:gap-6 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-h-0 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[55%] p-4 sm:p-8 flex flex-col justify-between min-h-0 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/10 mb-3 sm:mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shadow-[0_0_8px_currentColor]",
                                                        style: {
                                                            backgroundColor: colors.accent,
                                                            color: colors.accent
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-black uppercase tracking-[0.3em] text-white/80",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "Progress First"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "font-black uppercase leading-[0.9] text-white tracking-tight drop-shadow-lg break-words",
                                                style: {
                                                    fontSize: '7cqw'
                                                },
                                                children: [
                                                    "Hon. Hassan ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-white",
                                                        children: "Shehu Hussain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2 sm:mt-4 inline-block px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-white/10 to-transparent border-l-2",
                                                style: {
                                                    borderColor: colors.accent
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold tracking-widest text-white/60 uppercase break-words block",
                                                    style: {
                                                        fontSize: '1.51cqw'
                                                    },
                                                    children: "Nasarawa Federal Constituency"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto shrink-0 min-h-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5 shadow-inner min-h-0 overflow-hidden flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black italic uppercase leading-snug break-words w-full",
                                                style: {
                                                    color: colors.accent,
                                                    fontSize: '1.28cqw'
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'PROGRESS FIRST',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                lineNumber: 53,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 relative border-l border-white/10 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 right-4 sm:bottom-6 sm:right-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-black text-white/10 uppercase tracking-tighter",
                                            style: {
                                                fontSize: '6cqw'
                                            },
                                            children: "#2027"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[80px] sm:w-[120px] flex flex-col gap-3 sm:gap-4 shrink-0 min-h-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full aspect-square rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl p-0.5 sm:p-1 relative group shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-lg sm:rounded-xl overflow-hidden relative",
                                    children: [
                                        supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: supporterPhoto,
                                            crossOrigin: "anonymous",
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 73,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full flex flex-col items-center justify-center bg-white/5 text-white/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[1.85cqw] sm:text-[2.78cqw]",
                                                children: "photo_camera"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                lineNumber: 76,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 ring-1 ring-inset ring-white/20 rounded-lg sm:rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 p-2 sm:p-3 flex flex-col justify-center items-center text-center min-h-0 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold uppercase tracking-[0.2em] text-white/40 mb-0.5 sm:mb-1 break-words w-full",
                                        style: {
                                            fontSize: '1.51cqw'
                                        },
                                        children: "Endorsed By"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black uppercase text-white break-words w-full",
                                        style: {
                                            fontSize: '2cqw'
                                        },
                                        children: supporterName || 'YOUR NAME'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-px bg-white/10 my-1 sm:my-2 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold uppercase tracking-widest break-words w-full",
                                        style: {
                                            color: colors.accent,
                                            fontSize: '0.51cqw'
                                        },
                                        children: "Verified Supporter"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /* ================= VERTICAL RATIOS ================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col h-full p-4 sm:p-6 pt-8 sm:pt-10 gap-3 sm:gap-4 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start px-2 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1.5 sm:gap-2 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]",
                                        style: {
                                            backgroundColor: colors.accent,
                                            color: colors.accent
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-black uppercase tracking-[0.3em] text-white/80",
                                        style: {
                                            fontSize: '2cqw'
                                        },
                                        children: "Progress First"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/20 font-black tracking-widest",
                                style: {
                                    fontSize: '3cqw'
                                },
                                children: "#2027"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-h-0 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-[55%] shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#041508]/90 via-transparent to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-2 sm:bottom-4 left-4 sm:left-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "font-black uppercase leading-[0.85] text-white tracking-tight drop-shadow-lg break-words w-full",
                                            style: {
                                                fontSize: '8cqw'
                                            },
                                            children: [
                                                "Hon. Hassan ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 31
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white",
                                                    children: "Shehu Hussain"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col justify-between p-4 sm:p-6 bg-gradient-to-b from-[#041508]/90 to-transparent min-h-0 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-block px-2 py-1 sm:px-3 sm:py-1.5 bg-white/5 border-l-2 shrink-0",
                                        style: {
                                            borderColor: colors.accent
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold tracking-[0.2em] text-white/60 uppercase break-words block",
                                            style: {
                                                fontSize: '2cqw'
                                            },
                                            children: "Nasarawa Federal Constituency"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto shrink-0 min-h-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 sm:p-4 rounded-xl bg-black/40 border border-white/5 min-h-0 overflow-hidden flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-black italic uppercase leading-tight break-words w-full",
                                                style: {
                                                    color: colors.accent,
                                                    fontSize: '1.79cqw'
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'SERVICE ABOVE POLITICS',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[70px] sm:h-[90px] bg-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/10 p-1.5 sm:p-2 flex items-center gap-3 sm:gap-4 shadow-lg shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-full aspect-square rounded-xl sm:rounded-2xl overflow-hidden relative border border-white/10 p-0.5 sm:p-1 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-full rounded-lg sm:rounded-xl overflow-hidden",
                                    children: supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: supporterPhoto,
                                        crossOrigin: "anonymous",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 138,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center bg-white/5 text-white/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined text-[1.85cqw] sm:text-[2.22cqw]",
                                            children: "person"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                            lineNumber: 141,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 140,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                    lineNumber: 136,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 pr-2 sm:pr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold uppercase tracking-[0.3em] text-white/40 mb-0.5 break-words",
                                        style: {
                                            fontSize: '1.51cqw'
                                        },
                                        children: "Endorsed By"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-black uppercase text-white break-words leading-tight mb-0.5 sm:mb-1",
                                        style: {
                                            fontSize: '4cqw'
                                        },
                                        children: supporterName || 'YOUR NAME'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold uppercase tracking-widest break-words w-full",
                                        style: {
                                            color: colors.accent,
                                            fontSize: '0.77cqw'
                                        },
                                        children: "Verified Supporter • Continuity"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrintPremiumTemplate",
    ()=>PrintPremiumTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const PrintPremiumTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    const isStory = aspectRatio === 'portrait';
    const themeColors = {
        green: {
            primary: '#15803d',
            shadow: '#15803d',
            bg: '#f0fdf4',
            text: '#000'
        },
        red: {
            primary: '#dc2626',
            shadow: '#dc2626',
            bg: '#fef2f2',
            text: '#000'
        },
        blue: {
            primary: '#2563eb',
            shadow: '#2563eb',
            bg: '#eff6ff',
            text: '#000'
        },
        gold: {
            primary: '#d97706',
            shadow: '#d97706',
            bg: '#fffbeb',
            text: '#000'
        }
    }[colorTheme] || {
        primary: '#15803d',
        shadow: '#15803d',
        bg: '#f8f9fa',
        text: '#000'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex flex-col font-sans relative select-none overflow-hidden",
        style: {
            backgroundColor: themeColors.bg,
            border: `11.0px solid ${themeColors.text}`,
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply opacity-60 z-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b-[4px] sm:border-b-[6px] p-3 sm:p-5 relative z-10 flex items-center justify-between shrink-0",
                style: {
                    borderColor: themeColors.text,
                    backgroundColor: '#ffffff'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col min-w-0 pr-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-black leading-tight uppercase tracking-tighter break-words",
                                style: {
                                    color: themeColors.text,
                                    fontSize: '3.06cqw'
                                },
                                children: [
                                    "NASSARAWA ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: themeColors.primary
                                        },
                                        children: "FIRST"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 26,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 break-words",
                                style: {
                                    fontSize: '1.51cqw'
                                },
                                children: "The Official Campaign Bulletin • 2027"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-end shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black text-white px-2 py-0.5 sm:px-3 sm:py-1 inline-block mb-0.5 sm:mb-1 shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-black uppercase tracking-widest",
                                    style: {
                                        fontSize: '1.51cqw'
                                    },
                                    children: "SPECIAL EDITION"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono font-bold text-gray-400 shrink-0",
                                style: {
                                    fontSize: '1.51cqw'
                                },
                                children: "#HASH2027"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLandscape ? /* ================= LANDSCAPE RATIO ================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex relative z-10 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[35%] flex flex-col border-r-[4px] bg-white p-4 sm:p-6 shrink-0 min-h-0",
                        style: {
                            borderColor: themeColors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full aspect-[3/4] border-[2px] sm:border-[4px] p-0.5 sm:p-1 mb-2 sm:mb-4 relative overflow-hidden shrink-0",
                                style: {
                                    borderColor: themeColors.text,
                                    boxShadow: `6px 6px 0 ${themeColors.shadow}`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                    className: "w-full h-full object-cover "
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-black uppercase leading-[0.9] tracking-tight border-b-2 sm:border-b-4 pb-1 sm:pb-2 mb-1 sm:mb-2 shrink-0 break-words",
                                style: {
                                    color: themeColors.text,
                                    borderColor: themeColors.text,
                                    fontSize: '2.04cqw'
                                },
                                children: [
                                    "HON. HASSAN ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 50,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "SHEHU HUSSAIN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-serif italic font-bold text-gray-700 min-h-0 overflow-hidden text-ellipsis break-words",
                                style: {
                                    fontSize: '2cqw',
                                    lineHeight: 1.3
                                },
                                children: '"Achievements, facts, and records speak louder than rhetoric. The focus remains firmly on delivering democratic dividends."'
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col p-4 sm:p-8 min-h-0 shrink-0",
                        style: {
                            backgroundColor: themeColors.bg
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-3 sm:mb-6 min-h-0 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 pr-3 sm:pr-6 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-black uppercase tracking-tighter leading-tight mb-2 sm:mb-3 break-words",
                                                style: {
                                                    color: themeColors.primary,
                                                    fontSize: '4.07cqw'
                                                },
                                                children: "PROGRESS FIRST."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 sm:p-4 inline-block max-w-full",
                                                style: {
                                                    backgroundColor: themeColors.text,
                                                    color: '#fff',
                                                    boxShadow: `6px 6px 0 ${themeColors.shadow}`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-black italic uppercase tracking-wide break-words",
                                                    style: {
                                                        fontSize: '2.51cqw'
                                                    },
                                                    children: [
                                                        '"',
                                                        customMessage || 'SERVICE ABOVE POLITICS',
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                    lineNumber: 65,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[80px] sm:w-[140px] aspect-[3/4] border-[2px] sm:border-[4px] bg-white p-0.5 sm:p-1 relative transform rotate-3 shrink-0",
                                        style: {
                                            borderColor: themeColors.text,
                                            boxShadow: `6px 6px 0 ${themeColors.text}`
                                        },
                                        children: [
                                            supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: supporterPhoto,
                                                crossOrigin: "anonymous",
                                                className: "w-full h-full object-cover "
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-gray-200 flex items-center justify-center text-gray-400",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-[2.22cqw] sm:text-[3.33cqw]",
                                                    children: "photo_camera"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 text-white px-1 sm:px-2 py-0.5 sm:py-1 border-[1.5px] sm:border-[2px] font-black uppercase tracking-widest",
                                                style: {
                                                    backgroundColor: themeColors.primary,
                                                    borderColor: themeColors.text,
                                                    fontSize: '0.51cqw'
                                                },
                                                children: "ENDORSED"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-auto border-t-[2px] sm:border-t-[4px] pt-2 sm:pt-4 shrink-0",
                                style: {
                                    borderColor: themeColors.text
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold uppercase tracking-[0.2em] break-words",
                                        style: {
                                            color: themeColors.primary,
                                            fontSize: '0.77cqw'
                                        },
                                        children: "Official Endorsement Provided By"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-black uppercase break-words",
                                        style: {
                                            color: themeColors.text,
                                            fontSize: '3.06cqw',
                                            letterSpacing: '-0.02em'
                                        },
                                        children: supporterName || 'YOUR NAME HERE'
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /* ================= VERTICAL RATIOS ================= */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col relative z-10 p-4 sm:p-6 pt-6 sm:pt-8 min-h-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center border-b-[2px] sm:border-b-[4px] pb-2 sm:pb-4 mb-3 sm:mb-6 shrink-0",
                        style: {
                            borderColor: themeColors.text
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-black uppercase tracking-tighter leading-[0.85] mb-1 sm:mb-2 break-words",
                                style: {
                                    color: themeColors.text,
                                    fontSize: '6.11cqw'
                                },
                                children: [
                                    "PROGRESS ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 101,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: themeColors.primary
                                        },
                                        children: "FIRST."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-serif italic font-bold text-gray-800 break-words",
                                style: {
                                    fontSize: '3cqw'
                                },
                                children: '"Service Above Politics. Achievements Over Rhetoric."'
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col gap-3 sm:gap-6 min-h-0 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 sm:gap-4 items-center shrink-0 min-h-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[100px] sm:w-[150px] aspect-[3/4] border-[2px] sm:border-[4px] p-0.5 sm:p-1 flex-shrink-0",
                                        style: {
                                            borderColor: themeColors.text,
                                            boxShadow: `6px 6px 0 ${themeColors.shadow}`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                            className: "w-full h-full object-cover "
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 border-l-[2px] sm:border-l-[4px] pl-3 sm:pl-4 min-w-0",
                                        style: {
                                            borderColor: themeColors.text
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold uppercase tracking-[0.2em] text-gray-500 mb-0.5 sm:mb-1 break-words",
                                                style: {
                                                    fontSize: '1.51cqw'
                                                },
                                                children: "The Mandate"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-black uppercase leading-[0.9] tracking-tight mb-1 sm:mb-2 break-words",
                                                style: {
                                                    color: themeColors.text,
                                                    fontSize: '2.55cqw'
                                                },
                                                children: [
                                                    "HON. HASSAN ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "S. HUSSAIN"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-serif font-medium text-gray-700 leading-snug break-words",
                                                style: {
                                                    fontSize: '2.51cqw'
                                                },
                                                children: "Delivering democratic dividends and advancing the welfare of Nassarawa Federal Constituency."
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full border-t-[2px] sm:border-t-[4px] border-dashed shrink-0",
                                style: {
                                    borderColor: themeColors.text
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 sm:gap-4 items-center mt-auto shrink-0 min-h-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 pr-2 sm:pr-4 text-right min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 sm:p-3 inline-block mb-2 sm:mb-3 transform -rotate-1 max-w-full",
                                                style: {
                                                    backgroundColor: themeColors.text,
                                                    color: '#fff',
                                                    boxShadow: `4px 4px 0 ${themeColors.shadow}`
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-black italic uppercase tracking-wide break-words text-left",
                                                    style: {
                                                        fontSize: '2.51cqw'
                                                    },
                                                    children: [
                                                        '"',
                                                        customMessage || 'SERVICE ABOVE POLITICS',
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-bold uppercase tracking-[0.2em] mb-0.5 sm:mb-1 break-words",
                                                        style: {
                                                            color: themeColors.primary,
                                                            fontSize: '0.77cqw'
                                                        },
                                                        children: "Endorsed By"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-black uppercase leading-tight break-words w-full text-right",
                                                        style: {
                                                            color: themeColors.text,
                                                            fontSize: '2.55cqw',
                                                            letterSpacing: '-0.02em'
                                                        },
                                                        children: supporterName || 'YOUR NAME'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[80px] sm:w-[110px] aspect-[3/4] border-[2px] sm:border-[4px] bg-white p-0.5 sm:p-1 relative flex-shrink-0",
                                        style: {
                                            borderColor: themeColors.text,
                                            boxShadow: `6px 6px 0 ${themeColors.text}`
                                        },
                                        children: supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: supporterPhoto,
                                            crossOrigin: "anonymous",
                                            className: "w-full h-full object-cover "
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gray-200 flex items-center justify-center text-gray-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[2.22cqw] sm:text-[2.78cqw]",
                                                children: "photo_camera"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                            lineNumber: 149,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                        lineNumber: 145,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 sm:h-10 border-t-[3px] sm:border-t-[6px] text-white flex items-center justify-between px-3 sm:px-6 relative z-10 shrink-0",
                style: {
                    borderColor: themeColors.text,
                    backgroundColor: themeColors.text
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase break-words",
                        style: {
                            fontSize: '1.51cqw'
                        },
                        children: "Authorized Campaign Material"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-black tracking-widest shrink-0",
                        style: {
                            fontSize: '2cqw'
                        },
                        children: "2027"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BadgePremiumTemplate",
    ()=>BadgePremiumTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/shared/CandidatePortrait.tsx [app-ssr] (ecmascript)");
;
;
const BadgePremiumTemplate = ({ data })=>{
    const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data;
    const isLandscape = [
        'landscape',
        'square',
        'print'
    ].includes(aspectRatio);
    // Vibrant Platinum / Gold / Diamond VIP aesthetics
    const themeColors = {
        green: {
            bg: 'bg-emerald-950 bg-gradient-to-br from-emerald-900 to-teal-950',
            foil: 'from-emerald-300 via-white to-emerald-400',
            accent: '#10b981',
            ring: 'ring-emerald-400/50',
            glow: 'shadow-emerald-500/40'
        },
        red: {
            bg: 'bg-rose-950 bg-gradient-to-br from-rose-900 to-red-950',
            foil: 'from-rose-300 via-white to-rose-400',
            accent: '#ef4444',
            ring: 'ring-rose-400/50',
            glow: 'shadow-rose-500/40'
        },
        blue: {
            bg: 'bg-indigo-950 bg-gradient-to-br from-blue-900 to-indigo-950',
            foil: 'from-blue-300 via-white to-blue-400',
            accent: '#3b82f6',
            ring: 'ring-blue-400/50',
            glow: 'shadow-blue-500/40'
        },
        gold: {
            bg: 'bg-yellow-950 bg-gradient-to-br from-amber-900 to-yellow-950',
            foil: 'from-amber-200 via-yellow-100 to-amber-500',
            accent: '#f59e0b',
            ring: 'ring-amber-400/50',
            glow: 'shadow-amber-500/40'
        }
    }[colorTheme] || {
        bg: 'bg-emerald-950 bg-gradient-to-br from-emerald-900 to-teal-950',
        foil: 'from-emerald-300 via-white to-emerald-400',
        accent: '#10b981',
        ring: 'ring-emerald-400/50',
        glow: 'shadow-emerald-500/40'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full flex items-center justify-center p-4 lg:p-8 ${themeColors.bg} relative overflow-hidden select-none font-sans`,
        style: {
            containerType: 'inline-size'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 w-full h-full max-w-[1000px] mx-auto rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-yellow-500/40 shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.4)] overflow-hidden flex ${isLandscape ? 'flex-row' : 'flex-col'} ${themeColors.ring} ring-1`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-[200%] h-[200%] bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.1)_25%,transparent_30%)] -translate-x-full pointer-events-none transform -skew-x-12 mix-blend-overlay"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between p-6 ${isLandscape ? 'w-[25%] flex-col border-r border-white/10 bg-black/20 relative' : 'w-full h-[18%] min-h-[80px] border-b border-white/10 bg-black/20 relative shrink-0'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:4px_4px] pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                lineNumber: 32,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center gap-4 relative z-10 ${isLandscape ? 'flex-col text-center w-full justify-center h-full' : 'w-full justify-between'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-600 p-[1px] shadow-[0_0_20px_rgba(251,191,36,0.3)] shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full rounded-md bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,transparent_50%,rgba(0,0,0,0.2)_100%)] flex items-center justify-center border border-amber-500/50 relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "material-symbols-outlined text-amber-900/80 text-[1.85cqw] relative z-10",
                                                    children: "fingerprint"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                        lineNumber: 37,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${isLandscape ? 'mt-4' : 'flex-1 text-right'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: `font-serif italic tracking-widest leading-tight drop-shadow-lg font-black text-yellow-400`,
                                                style: {
                                                    fontSize: '6cqw'
                                                },
                                                children: "VIP"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 45,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/60 font-black tracking-[0.4em] sm:tracking-[0.5em] uppercase mt-1 sm:mt-2",
                                                style: {
                                                    fontSize: '1.51cqw'
                                                },
                                                children: "Global Access 2027"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 48,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                        lineNumber: 44,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                lineNumber: 34,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative min-h-0 overflow-hidden`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-[27.78cqw] sm:text-[37.04cqw]",
                                    children: "security"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-center p-6 sm:p-8 lg:p-12 ${isLandscape ? 'w-[45%] border-r border-white/10' : 'w-full border-b border-white/10 min-h-0 h-[45%] shrink-0'} relative z-10 bg-black/40`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-6 w-full max-w-[200px] sm:max-w-[280px] h-auto items-center justify-center relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full aspect-[4/5] bg-black p-1 sm:p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-[0.5rem] sm:rounded-lg relative border border-yellow-500/40",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full h-full overflow-hidden rounded relative bg-zinc-900",
                                                    children: [
                                                        supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: supporterPhoto,
                                                            crossOrigin: "anonymous",
                                                            className: "w-full h-full object-cover "
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-full h-full flex items-center justify-center text-yellow-400/20",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw] font-light",
                                                                children: "person"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                                lineNumber: 73,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 24
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/80 pointer-events-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "absolute bottom-2 left-2 sm:bottom-3 sm:left-3 font-black tracking-[0.3em] text-yellow-400/90 uppercase drop-shadow-md",
                                                            style: {
                                                                fontSize: '2cqw'
                                                            },
                                                            children: "Supporter"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 22
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${themeColors.foil} p-0.5 shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full h-full bg-black/20 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined text-yellow-400 text-[1.48cqw] sm:text-[1.85cqw] drop-shadow",
                                                            children: "done_all"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 20
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-[60%] aspect-[4/5] bg-black p-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-md sm:rounded-lg relative border border-white/10 absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full overflow-hidden rounded relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$shared$2f$CandidatePortrait$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CandidatePortrait"], {
                                                        className: "w-full h-full object-cover "
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/90 pointer-events-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 font-black tracking-widest text-yellow-400/70 uppercase",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "Hon. Hassan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 22
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 91,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                    lineNumber: 64,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex-1 flex flex-col p-6 sm:p-8 lg:p-12 relative z-10 min-h-0 overflow-hidden`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4 sm:mb-8 shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black text-white/60",
                                                        style: {
                                                            fontSize: '2cqw'
                                                        },
                                                        children: "Verified Endorsement"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 106,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `font-serif uppercase tracking-tight leading-[0.9] break-words font-black text-yellow-400 drop-shadow-lg max-h-[40%] overflow-hidden`,
                                                style: {
                                                    fontSize: '8cqw'
                                                },
                                                children: supporterName || 'YOUR FULL NAME'
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 110,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 sm:w-16 h-[2px] mt-4 sm:mt-6 bg-gradient-to-r ${themeColors.foil} shadow-[0_0_10px_rgba(255,255,255,0.3)] shrink-0`
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 113,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                        lineNumber: 105,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 relative mb-4 sm:mb-8 min-h-0 overflow-hidden flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -left-3 sm:-left-4 top-0 bottom-0 w-[2px] sm:w-1 bg-black/40 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-sans font-bold text-white/80 tracking-wide leading-snug sm:leading-relaxed uppercase w-full break-words",
                                                style: {
                                                    fontSize: '3.51cqw'
                                                },
                                                children: [
                                                    '"',
                                                    customMessage || 'COMMITTED TO PROGRESS AND TRANSPARENCY',
                                                    '"'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                        lineNumber: 117,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-auto flex justify-between items-end bg-black/20 p-3 sm:p-4 rounded-md sm:rounded-lg border border-white/5 backdrop-blur-sm shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col w-[60%]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-mono text-yellow-400/40 uppercase tracking-[0.2em] mb-1",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "Machine Readable Data"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-4 sm:h-8 w-full opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat invert"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 126,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right flex flex-col items-end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-yellow-400/50 mb-1",
                                                        style: {
                                                            fontSize: '4cqw'
                                                        },
                                                        children: "qr_code_2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-black uppercase tracking-[0.3em]",
                                                        style: {
                                                            fontSize: '1.51cqw'
                                                        },
                                                        children: "HSH-2027"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 18
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                                lineNumber: 130,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                        lineNumber: 125,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/StickerPreview.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickerPreview",
    ()=>StickerPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$StickerCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/StickerCanvas.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ClassicTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ModernTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/ModernTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$YouthTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/YouthTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$PrintTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/PrintTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$MinimalTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/MinimalTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$BadgeTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$TypeTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/TypeTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$GeometricTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ClassicTemplateV2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/ClassicTemplateV2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$BadgeTemplateV2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/BadgeTemplateV2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$GeometricTemplateV2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/GeometricTemplateV2.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ClassicPremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/ClassicPremiumTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ModernPremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/ModernPremiumTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$PrintPremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/PrintPremiumTemplate.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$BadgePremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/templates/BadgePremiumTemplate.tsx [app-ssr] (ecmascript)");
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
;
;
;
;
;
;
;
;
;
const StickerPreview = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ data }, ref)=>{
    const TemplateMap = {
        classic: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ClassicTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClassicTemplate"],
        modern: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ModernTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModernTemplate"],
        youth: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$YouthTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["YouthTemplate"],
        print: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$PrintTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintTemplate"],
        minimal: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$MinimalTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MinimalTemplate"],
        badge: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$BadgeTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BadgeTemplate"],
        type: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$TypeTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeTemplate"],
        geometric: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$GeometricTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeometricTemplate"],
        classicV2: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ClassicTemplateV2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClassicTemplateV2"],
        badgeV2: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$BadgeTemplateV2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BadgeTemplateV2"],
        geometricV2: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$GeometricTemplateV2$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GeometricTemplateV2"],
        classicPremium: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ClassicPremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClassicPremiumTemplate"],
        modernPremium: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$ModernPremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModernPremiumTemplate"],
        printPremium: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$PrintPremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrintPremiumTemplate"],
        badgePremium: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$templates$2f$BadgePremiumTemplate$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BadgePremiumTemplate"]
    };
    const SelectedTemplate = TemplateMap[data.templateId];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$StickerCanvas$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickerCanvas"], {
        ref: ref,
        aspectRatio: data.aspectRatio,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectedTemplate, {
            data: data
        }, void 0, false, {
            fileName: "[project]/app/(personal)/sticker-generator/components/StickerPreview.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/StickerPreview.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
StickerPreview.displayName = 'StickerPreview';
}),
"[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextControls",
    ()=>TextControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const TextControls = ({ data, onUpdate })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-black text-gray-400 uppercase tracking-widest mb-3",
                        children: "Your Name"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-gray-500 group-focus-within:text-brand-500 transition-colors",
                                    children: "person"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                    lineNumber: 16,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: data.supporterName,
                                onChange: (e)=>onUpdate('supporterName', e.target.value),
                                placeholder: "e.g. Ibrahim Yusuf",
                                className: "w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:bg-black/60 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all placeholder:text-gray-600 text-white font-bold text-sm sm:text-base shadow-inner touch-manipulation"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-black text-gray-400 uppercase tracking-widest mb-3",
                        children: "Campaign Slogan"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined text-gray-500 group-focus-within:text-brand-500 transition-colors",
                                    children: "campaign"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                    lineNumber: 33,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 32,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: data.customMessage,
                                onChange: (e)=>onUpdate('customMessage', e.target.value),
                                placeholder: "Progress First",
                                maxLength: 30,
                                className: "w-full pl-12 pr-16 py-4 bg-black/40 border border-white/10 rounded-xl focus:bg-black/60 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all placeholder:text-gray-600 text-white font-bold text-sm sm:text-base shadow-inner touch-manipulation"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-brand-400 bg-brand-500/20 px-2 py-1 rounded-md",
                                children: [
                                    data.customMessage.length,
                                    "/30"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-gray-500 font-black uppercase mb-3 tracking-widest",
                                children: "Quick Suggestions"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    'Nassarawa First',
                                    'Progress First',
                                    'Service Above Politics',
                                    '#HASH2027Continuity',
                                    'Youth For HASH',
                                    'Building The Future'
                                ].map((slogan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onUpdate('customMessage', slogan),
                                        className: "text-[11px] sm:text-xs px-4 py-2 bg-white/5 border border-white/10 hover:border-brand-400/50 hover:bg-brand-500/10 text-gray-300 hover:text-brand-300 rounded-full transition-all shadow-sm active:scale-95 font-bold touch-manipulation min-h-[40px] flex items-center",
                                        children: slogan
                                    }, slogan, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                        lineNumber: 53,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                                lineNumber: 51,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-easy-crop/index.module.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
const PhotoCropper = ({ isOpen, image, crop, zoom, onCropChange, onZoomChange, onCropComplete, onClose, onDone })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9,
                        y: 20
                    },
                    transition: {
                        type: 'spring',
                        damping: 25,
                        stiffness: 300
                    },
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden pointer-events-auto",
                        onClick: (e)=>e.stopPropagation(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-gray-900 flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-blue-600",
                                                children: "crop"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Adjust Your Photo"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                        lineNumber: 53,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: "Zoom and position your photo perfectly"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                lineNumber: 52,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-96 bg-gray-100",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$easy$2d$crop$2f$index$2e$module$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    image: image,
                                    crop: crop,
                                    zoom: zoom,
                                    aspect: 1,
                                    onCropChange: onCropChange,
                                    onZoomChange: onZoomChange,
                                    onCropComplete: onCropComplete
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-gray-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-semibold text-gray-700 mb-2",
                                                children: [
                                                    "Zoom: ",
                                                    zoom.toFixed(1),
                                                    "x"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                                lineNumber: 74,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "range",
                                                min: 1,
                                                max: 3,
                                                step: 0.1,
                                                value: zoom,
                                                onChange: (e)=>onZoomChange(parseFloat(e.target.value)),
                                                className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                        lineNumber: 73,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                onClick: onClose,
                                                className: "flex-1 py-3 px-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg transition-colors",
                                                children: "Cancel"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                                lineNumber: 89,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                onClick: onDone,
                                                className: "flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined",
                                                        children: "check"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Done"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PhotoCropper;
}),
"[project]/app/(personal)/sticker-generator/utils/cropImage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createImage",
    ()=>createImage,
    "getCroppedImg",
    ()=>getCroppedImg
]);
const createImage = (url)=>new Promise((resolve, reject)=>{
        const image = new Image();
        image.addEventListener('load', ()=>resolve(image));
        image.addEventListener('error', (error)=>reject(error));
        image.setAttribute('crossOrigin', 'anonymous');
        image.src = url;
    });
async function getCroppedImg(imageSrc, pixelCrop) {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('Could not get 2D context for canvas');
    }
    // Set canvas size to match the cropped area
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    // Draw cropped image onto canvas
    ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
    // Output as high-quality JPEG
    return canvas.toDataURL('image/jpeg', 0.95);
}
}),
"[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeControls",
    ()=>ThemeControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$PhotoCropper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/PhotoCropper.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$utils$2f$cropImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/utils/cropImage.ts [app-ssr] (ecmascript)");
;
;
;
;
const ThemeControls = ({ data, onUpdate })=>{
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isCropperOpen, setIsCropperOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tempPhoto, setTempPhoto] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [crop, setCrop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [zoom, setZoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handlePhotoUpload = (e)=>{
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev)=>{
                const result = ev.target?.result;
                setTempPhoto(result);
                setCrop({
                    x: 0,
                    y: 0
                });
                setZoom(1);
                setIsCropperOpen(true);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleCropComplete = (croppedArea, croppedAreaPixels)=>{
        setCroppedAreaPixels(croppedAreaPixels);
    };
    const handleCropDone = async ()=>{
        if (tempPhoto && croppedAreaPixels) {
            try {
                const croppedImage = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$utils$2f$cropImage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCroppedImg"])(tempPhoto, croppedAreaPixels);
                onUpdate('supporterPhoto', croppedImage);
                setIsCropperOpen(false);
            } catch (e) {
                console.error('Error cropping image:', e);
                alert('Failed to crop image. Please check your file and try again.');
            }
        }
    };
    const handleRemovePhoto = ()=>{
        onUpdate('supporterPhoto', null);
        setTempPhoto(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };
    const triggerFileInput = ()=>{
        fileInputRef.current?.click();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-glass-glow",
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs sm:text-sm font-black text-white uppercase tracking-widest",
                                    children: "Add Your Photo"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    data.supporterPhoto ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-brand-900/30 rounded-2xl border-2 border-brand-500/50 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-300 shadow-glass",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-brand-400 shadow-lg flex-shrink-0 bg-black/50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: data.supporterPhoto,
                                    alt: "Cropped preview",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-brand-400 font-black text-[11px] sm:text-xs uppercase mb-1.5 tracking-widest",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "material-symbols-outlined text-[16px]",
                                                children: "check_circle"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            "Image Ready"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] sm:text-[11px] text-gray-400 font-medium truncate mb-3",
                                        children: "Perfectly sized for high-res output."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            tempPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setIsCropperOpen(true),
                                                className: "flex-1 min-w-[70px] text-white hover:text-brand-300 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2.5 rounded-xl touch-manipulation active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[14px]",
                                                        children: "crop"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Adjust"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: triggerFileInput,
                                                className: "flex-1 min-w-[70px] text-white hover:text-brand-300 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2.5 rounded-xl touch-manipulation active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[14px]",
                                                        children: "cached"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Change"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                lineNumber: 96,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleRemovePhoto,
                                                className: "flex-1 min-w-[70px] text-rose-400 hover:text-rose-300 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 px-3 py-2.5 rounded-xl touch-manipulation active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-[14px]",
                                                        children: "delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    "Remove"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: triggerFileInput,
                        className: "cursor-pointer group flex flex-col items-center justify-center w-full p-6 sm:p-8 rounded-[1.5rem] border-2 border-dashed border-brand-500/50 hover:border-brand-400 bg-brand-500/5 hover:bg-brand-500/10 transition-all duration-300 active:scale-95 touch-manipulation min-h-[140px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shadow-glass-glow group-hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[24px]",
                                        children: "add_a_photo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 120,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 119,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs sm:text-sm font-black text-brand-300 uppercase tracking-widest text-center",
                                    children: "Tap to Upload Photo"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider text-center",
                                    children: "High Quality Recommended"
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        ref: fileInputRef,
                        className: "hidden",
                        accept: "image/*",
                        onChange: handlePhotoUpload,
                        onClick: (e)=>{
                            e.target.value = '';
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    tempPhoto && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$PhotoCropper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isCropperOpen,
                        image: tempPhoto,
                        crop: crop,
                        zoom: zoom,
                        onCropChange: setCrop,
                        onZoomChange: setZoom,
                        onCropComplete: handleCropComplete,
                        onClose: ()=>setIsCropperOpen(false),
                        onDone: handleCropDone
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-black text-gray-400 uppercase tracking-widest mb-3",
                        children: "Format"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3",
                        children: [
                            'square',
                            'portrait',
                            'landscape',
                            'print'
                        ].map((ratio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onUpdate('aspectRatio', ratio),
                                className: `p-3 rounded-xl border text-xs font-black flex flex-col items-center justify-center gap-2 transition-all duration-300 touch-manipulation min-h-[64px] active:scale-95 ${data.aspectRatio === ratio ? 'border-brand-500 bg-brand-500/20 text-brand-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 'border-white/10 hover:border-white/20 text-gray-400 bg-white/5'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block bg-current rounded-sm ${ratio === 'square' ? 'w-5 h-5' : ratio === 'portrait' ? 'w-4 h-5' : ratio === 'landscape' ? 'w-6 h-4' : 'w-5 h-5'}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 167,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-wider",
                                        children: ratio === 'portrait' ? 'Vertical' : ratio
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, ratio, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            data.templateId === 'classic' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white/5 p-5 rounded-2xl border border-white/10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-black text-gray-400 uppercase tracking-widest mb-4",
                        children: "Aesthetic Theme"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 180,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            'green',
                            'red',
                            'blue',
                            'gold'
                        ].map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onUpdate('colorTheme', color),
                                className: `w-12 h-12 rounded-full border-[3px] transition-all duration-300 relative touch-manipulation active:scale-95 ${data.colorTheme === color ? 'border-white ring-4 ring-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110' : 'border-transparent hover:scale-105'}`,
                                style: {
                                    backgroundColor: color === 'gold' ? '#fbbf24' : color
                                },
                                "aria-label": `Select ${color} theme`,
                                children: data.colorTheme === color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute inset-0 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-white drop-shadow-md",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 4,
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                            lineNumber: 194,
                                            columnNumber: 31
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                        lineNumber: 193,
                                        columnNumber: 27
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                    lineNumber: 192,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            }, color, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                                lineNumber: 183,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
                lineNumber: 179,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LayoutSwitcher",
    ()=>LayoutSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const LayoutSwitcher = ({ currentTemplate, onSelect })=>{
    const templates = [
        {
            id: 'classic',
            name: 'Classic',
            desc: 'Professional Campaign Card'
        },
        {
            id: 'modern',
            name: 'Modern',
            desc: 'Clean & Glassmorphic'
        },
        {
            id: 'print',
            name: 'Print',
            desc: 'Ink-Friendly High Contrast'
        },
        {
            id: 'youth',
            name: 'Youth',
            desc: 'Vibrant & Bold'
        },
        {
            id: 'minimal',
            name: 'Minimal',
            desc: 'Pure & Elegant'
        },
        {
            id: 'badge',
            name: 'Verified',
            desc: 'Official Supporter ID'
        },
        {
            id: 'type',
            name: 'Loud',
            desc: 'Big Typography & Impact'
        },
        {
            id: 'geometric',
            name: 'Shapes',
            desc: 'Dynamic Structure'
        },
        {
            id: 'classicV2',
            name: 'Classic PRO',
            desc: 'Updated Polished Look'
        },
        {
            id: 'badgeV2',
            name: 'Verified 2.0',
            desc: 'Modern & Clean'
        },
        {
            id: 'geometricV2',
            name: 'Shapes 2.0',
            desc: 'Designer Edition'
        },
        {
            id: 'classicPremium',
            name: 'Premium Classic',
            desc: 'Expert Heritage Design'
        },
        {
            id: 'modernPremium',
            name: 'Premium Modern',
            desc: 'Visionary Glass'
        },
        {
            id: 'printPremium',
            name: 'Premium Print',
            desc: 'Editorial Billboard'
        },
        {
            id: 'badgePremium',
            name: 'Premium VIP',
            desc: 'Secure Pass Credential'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
        children: templates.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onSelect(t.id),
                className: `relative p-3 min-h-[60px] rounded-xl border-2 text-left transition-all duration-200 group overflow-hidden flex flex-col justify-center items-center text-center touch-manipulation active:scale-95 ${currentTemplate === t.id ? 'border-brand-500 bg-brand-500/20 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-[1.02]' : 'border-white/10 hover:border-brand-400/50 bg-white/5'}`,
                children: [
                    currentTemplate === t.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-1 rounded-bl-lg bg-brand-500 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-3 h-3",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 3,
                                d: "M5 13l4 4L19 7"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
                                lineNumber: 41,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
                            lineNumber: 40,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `font-black text-xs uppercase tracking-wide leading-tight ${currentTemplate === t.id ? 'text-brand-400' : 'text-gray-300'}`,
                        children: t.name
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-gray-500 leading-tight mt-1 hidden sm:block font-medium",
                        children: t.desc
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, t.id, true, {
                fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/app/(personal)/sticker-generator/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StickerGeneratorPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html-to-image/es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$hooks$2f$useStickerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/hooks/useStickerConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$StickerPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/StickerPreview.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$controls$2f$TextControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/controls/TextControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$controls$2f$ThemeControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/controls/ThemeControls.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$controls$2f$LayoutSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(personal)/sticker-generator/components/controls/LayoutSwitcher.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function StickerGeneratorPage() {
    const { data, updateField } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$hooks$2f$useStickerConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useStickerConfig"])();
    const previewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const exportRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDownloading, setIsDownloading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [generatedStickerId, setGeneratedStickerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    // Dynamically scale the preview canvas on mobile so it never overflows
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            const containerWidth = window.innerWidth;
            if (containerWidth < 550) {
                setScale((containerWidth - 48) / 550); // 48px for padding
            } else {
                setScale(1);
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, []);
    const saveStickerToSupabase = async (base64Data)=>{
        try {
            const response = await fetch('/api/stickers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    supporterName: data.supporterName,
                    templateId: data.templateId,
                    imageBase64: base64Data
                })
            });
            const result = await response.json();
            if (result.success) {
                setGeneratedStickerId(result.id);
                return result.id;
            }
        } catch (e) {
            console.error('Failed to save to Supabase:', e);
        }
        return null;
    };
    const trackAction = async (id, action)=>{
        try {
            await fetch('/api/stickers/track', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id,
                    action
                })
            });
        } catch (e) {
            console.error('Failed to track action:', e);
        }
    };
    const waitForImages = async (element)=>{
        const images = Array.from(element.getElementsByTagName('img'));
        const promises = images.map((img)=>{
            if (img.complete) return Promise.resolve();
            return new Promise((resolve)=>{
                img.onload = resolve;
                img.onerror = resolve; // Continue even if broken
            });
        });
        // 5 second timeout to prevent hanging forever
        const timeout = new Promise((resolve)=>setTimeout(resolve, 5000));
        await Promise.race([
            Promise.all(promises),
            timeout
        ]);
    };
    const handleDownload = async ()=>{
        console.log('handleDownload called');
        if (!exportRef.current) {
            console.log('exportRef.current is null!');
            return;
        }
        setIsDownloading(true);
        try {
            console.log('waiting for fonts...');
            await document.fonts.ready;
            console.log('waiting for images...');
            await waitForImages(exportRef.current);
            console.log('finished waiting for images');
            // Multiplier for ultra-crisp high-res output
            const pixelRatio = window.devicePixelRatio || 1;
            const exportScale = Math.max(3, pixelRatio * 2);
            console.log('Starting toPng...');
            const image = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPng"])(exportRef.current, {
                pixelRatio: exportScale,
                cacheBust: false,
                style: {
                    transform: 'none',
                    transformOrigin: 'top left'
                },
                filter: (node)=>{
                    // Ignore broken or empty images
                    if (node.tagName === 'IMG') {
                        const img = node;
                        if (!img.src || img.src === window.location.href) return false;
                    }
                    return true;
                }
            });
            console.log('Finished toPng!');
            // Save to Supabase
            const stickerId = generatedStickerId || await saveStickerToSupabase(image);
            if (stickerId) {
                trackAction(stickerId, 'download');
            }
            const link = document.createElement('a');
            link.href = image;
            link.download = `hon-hash-sticker-${data.templateId}-${Date.now()}.png`;
            window.lastDownloadUrl = image;
            link.click();
        } catch (e) {
            console.error('Download failed', e);
            alert(e instanceof Error ? `Image failed to load: ${e.message}. Please check your connection or try a different image.` : 'Could not generate sticker. Please try again.');
        } finally{
            setIsDownloading(false);
        }
    };
    const handleShare = async ()=>{
        if (!exportRef.current) return;
        setIsSharing(true);
        try {
            await document.fonts.ready;
            await waitForImages(exportRef.current);
            const pixelRatio = window.devicePixelRatio || 1;
            const exportScale = Math.max(3, pixelRatio * 2);
            const dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPng"])(exportRef.current, {
                pixelRatio: exportScale,
                cacheBust: true,
                style: {
                    transform: 'none',
                    transformOrigin: 'top left'
                }
            });
            // Convert base64 to blob
            const res = await fetch(dataUrl);
            const blob = await res.blob();
            if (!blob) {
                alert('Could not generate sticker for sharing.');
                setIsSharing(false);
                return;
            }
            const file = new File([
                blob
            ], 'hon-hash-sticker.png', {
                type: 'image/png'
            });
            const reader = new FileReader();
            reader.onloadend = async ()=>{
                const base64data = reader.result;
                const stickerId = generatedStickerId || await saveStickerToSupabase(base64data);
                if (stickerId) {
                    trackAction(stickerId, 'share');
                }
            };
            reader.readAsDataURL(blob);
            if (navigator.canShare && navigator.canShare({
                files: [
                    file
                ]
            })) {
                try {
                    await navigator.share({
                        files: [
                            file
                        ],
                        title: 'Hon. Hassan Shehu Hussain Sticker',
                        text: 'Created with Hon. HASH Campaign Tool'
                    });
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        console.error('Share failed', err);
                        alert(`Sharing failed: ${err.message}. Try downloading instead.`);
                    }
                }
            } else {
                alert('Your browser does not support checking for file sharing support. Attempting anyway...');
                try {
                    await navigator.share({
                        files: [
                            file
                        ],
                        title: 'Hon. Hassan Shehu Hussain Sticker',
                        text: 'Created with Hon. HASH Campaign Tool'
                    });
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        console.error('Share failed', err);
                        alert(`Sharing failed. Please use the Download button.`);
                    }
                }
            }
            setIsSharing(false);
        } catch (e) {
            console.error('Share generation failed', e);
            alert(e instanceof Error ? `Image failed to load: ${e.message}. Please check your connection or try a different image.` : 'Could not generate sticker. Please try again.');
            setIsSharing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 font-sans relative overflow-x-hidden text-slate-900 selection:bg-brand-500/30 pb-28 lg:pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 pointer-events-none z-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-40 mix-blend-overlay",
                        style: {
                            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 224,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-brand-300/30 rounded-full blur-[150px] mix-blend-multiply opacity-60 animate-pulse-slow"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 225,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-gold-300/30 rounded-full blur-[180px] mix-blend-multiply opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 226,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-8 lg:mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 border-b border-slate-200 pb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center lg:items-start animate-revealUp",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-3 px-5 py-2 bg-white text-brand-600 border border-brand-100 text-[10px] uppercase font-black tracking-[0.3em] rounded-full mb-6 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 22
                                            }, this),
                                            "Pro Endorsement Studio"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tighter leading-tight drop-shadow-sm",
                                        children: [
                                            "Design Your ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden lg:block"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 240,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-emerald-500",
                                                children: "Sticker"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 241,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 239,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-600 text-base md:text-xl max-w-xl leading-relaxed font-medium",
                                        children: "Generate an ultra-premium, personalized endorsement card. Choose a layout, enter your details, and download the high-res graphic."
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 243,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 234,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden lg:flex flex-col items-end gap-1 bg-white border border-slate-100 shadow-xl p-6 rounded-2xl animate-revealUp",
                                style: {
                                    animationDelay: '0.2s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-4xl font-black text-slate-900 drop-shadow-sm",
                                        children: "2027"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black uppercase tracking-[0.3em] text-gold-600",
                                        children: "Hon. Hassan Shehu Hussain"
                                    }, void 0, false, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 251,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-3 opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-slate-300 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 253,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-slate-300 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 254,
                                                columnNumber: 20
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-1.5 h-1.5 bg-slate-300 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 255,
                                                columnNumber: 20
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 252,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 order-1 lg:order-2 animate-revealUp",
                                style: {
                                    animationDelay: '0.3s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "lg:sticky lg:top-24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 sm:p-6 md:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center min-h-[350px] lg:min-h-[750px] relative overflow-hidden group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-brand-400/30 to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[300px] bg-brand-400/10 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000 mix-blend-multiply"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-[550px] transition-all duration-700 z-10 perspective-1000 transform origin-top lg:origin-center lg:hover:scale-[1.02]",
                                                style: {
                                                    transform: `scale(${scale})`
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -inset-2 bg-gradient-to-b from-slate-300/30 to-transparent rounded-[2rem] blur-xl opacity-50 transition-opacity duration-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 30
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative shadow-[0_40px_80px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] rounded-xl overflow-hidden bg-white mx-auto w-full",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$StickerPreview$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickerPreview"], {
                                                            ref: exportRef,
                                                            data: data
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                            lineNumber: 282,
                                                            columnNumber: 34
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden lg:flex absolute bottom-8 left-0 right-0 px-8 flex-row items-center justify-center gap-4 w-full z-50 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleDownload,
                                                        disabled: isDownloading || isSharing,
                                                        className: `
                                    flex-1 relative overflow-hidden group px-6 py-4 rounded-2xl font-black uppercase tracking-wider transition-all active:scale-95 text-sm shadow-xl
                                    ${!data.supporterName ? 'bg-slate-100 border border-slate-200 text-slate-400 shadow-none' : 'bg-brand-600 border border-brand-500 text-white hover:bg-brand-500 hover:shadow-2xl'}
                                `,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10 flex items-center justify-center gap-3",
                                                            children: isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                                        lineNumber: 302,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    "Rendering..."
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-lg",
                                                                        children: "file_download"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                                        lineNumber: 307,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    "Download"
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleShare,
                                                        disabled: isDownloading || isSharing,
                                                        className: `
                                    flex-1 relative overflow-hidden group px-6 py-4 rounded-2xl font-black uppercase tracking-wider transition-all active:scale-95 text-sm shadow-xl
                                    ${!data.supporterName ? 'bg-slate-100 border border-slate-200 text-slate-400 shadow-none' : 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-2xl border border-transparent'}
                                `,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "relative z-10 flex items-center justify-center gap-3",
                                                            children: isSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                                        lineNumber: 328,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    "Share Link"
                                                                ]
                                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "material-symbols-outlined text-lg",
                                                                        children: "ios_share"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                                        lineNumber: 333,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    "Share Link"
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                            lineNumber: 325,
                                                            columnNumber: 33
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 314,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 287,
                                                columnNumber: 25
                                            }, this),
                                            !data.supporterName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-amber-700 bg-amber-50 px-5 py-2.5 rounded-full text-[10px] uppercase font-black border border-amber-200 shadow-md animate-pulse z-20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "material-symbols-outlined text-sm",
                                                        children: "lock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 33
                                                    }, this),
                                                    "Data Required"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 342,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                    lineNumber: 264,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 order-2 lg:order-1 space-y-6 lg:space-y-8 animate-revealUp",
                                style: {
                                    animationDelay: '0.4s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 356,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-6 border-b border-slate-100 pb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xs sm:text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-3 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center w-8 h-8 rounded-full bg-brand-50 text-brand-600 text-xs shadow-sm border border-brand-200",
                                                            children: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 28
                                                        }, this),
                                                        "Architecture"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                    lineNumber: 359,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 358,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$controls$2f$LayoutSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LayoutSwitcher"], {
                                                    currentTemplate: data.templateId,
                                                    onSelect: (id)=>updateField('templateId', id)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 24
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 365,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 355,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-slate-100 relative overflow-hidden group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between mb-6 border-b border-slate-100 pb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-xs sm:text-sm font-black text-slate-800 uppercase tracking-widest flex items-center gap-3 sm:gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-center w-8 h-8 rounded-full bg-brand-50 text-brand-600 text-xs shadow-sm border border-brand-200",
                                                            children: "2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                            lineNumber: 376,
                                                            columnNumber: 28
                                                        }, this),
                                                        "Personalization"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                    lineNumber: 375,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 374,
                                                columnNumber: 22
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 space-y-8",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$controls$2f$TextControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextControls"], {
                                                        data: data,
                                                        onUpdate: updateField
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-px w-full bg-slate-100 my-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-[0.2em] mb-4",
                                                                children: "Color Profile"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 28
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$personal$292f$sticker$2d$generator$2f$components$2f$controls$2f$ThemeControls$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeControls"], {
                                                                data: data,
                                                                onUpdate: updateField
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                                lineNumber: 388,
                                                                columnNumber: 28
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                        lineNumber: 386,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                                lineNumber: 381,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-2xl border-t border-slate-200 flex flex-row items-center justify-center gap-3 z-[100] shadow-[0_-10px_30px_rgba(0,0,0,0.05)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDownload,
                        disabled: isDownloading || isSharing || !data.supporterName,
                        className: `
                  flex-1 relative overflow-hidden group px-4 py-4 rounded-xl font-black uppercase tracking-wider transition-all active:scale-95 text-xs shadow-md flex items-center justify-center gap-2 min-h-[50px]
                  ${!data.supporterName ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed shadow-none' : 'bg-brand-600 border border-brand-500 text-white hover:bg-brand-500'}
              `,
                        children: [
                            isDownloading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 411,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[18px]",
                                children: "file_download"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 413,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Download"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 415,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleShare,
                        disabled: isDownloading || isSharing || !data.supporterName,
                        className: `
                  flex-1 relative overflow-hidden group px-4 py-4 rounded-xl font-black uppercase tracking-wider transition-all active:scale-95 text-xs shadow-md flex items-center justify-center gap-2 min-h-[50px]
                  ${!data.supporterName ? 'bg-slate-100 border border-slate-200 text-slate-400 cursor-not-allowed shadow-none' : 'bg-slate-900 text-white hover:bg-slate-800 border border-transparent'}
              `,
                        children: [
                            isSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 430,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "material-symbols-outlined text-[18px]",
                                children: "ios_share"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 432,
                                columnNumber: 19
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                                lineNumber: 434,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(personal)/sticker-generator/page.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_%28personal%29_sticker-generator_79ca49fb._.js.map