(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[0],{

/***/ "./node_modules/scratch-render/swrender/build/swrender.js":
/*!****************************************************************!*\
  !*** ./node_modules/scratch-render/swrender/build/swrender.js ***!
  \****************************************************************/
/*! exports provided: SoftwareRenderer, __wbg_left_e0e87a2e66be13a6, __wbg_right_7b7bac033ade0b86, __wbg_bottom_4666a55ceceeee8a, __wbg_top_84c6cfb6e6a6bd02, __wbindgen_object_drop_ref, __wbg_ucolor_ec62c5e559a2a5a3, __wbg_ufisheye_6aa56ae214de6428, __wbg_uwhirl_677f66c116ae8d9b, __wbg_upixelate_eb81083d476dfa89, __wbg_umosaic_7bc9d9ddd07459c3, __wbg_ubrightness_d29d8f78f9c8e71d, __wbg_ughost_d81ebfbc362e40b0, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareRenderer", function() { return SoftwareRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_left_e0e87a2e66be13a6", function() { return __wbg_left_e0e87a2e66be13a6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_right_7b7bac033ade0b86", function() { return __wbg_right_7b7bac033ade0b86; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_bottom_4666a55ceceeee8a", function() { return __wbg_bottom_4666a55ceceeee8a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_top_84c6cfb6e6a6bd02", function() { return __wbg_top_84c6cfb6e6a6bd02; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ucolor_ec62c5e559a2a5a3", function() { return __wbg_ucolor_ec62c5e559a2a5a3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ufisheye_6aa56ae214de6428", function() { return __wbg_ufisheye_6aa56ae214de6428; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_uwhirl_677f66c116ae8d9b", function() { return __wbg_uwhirl_677f66c116ae8d9b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_upixelate_eb81083d476dfa89", function() { return __wbg_upixelate_eb81083d476dfa89; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_umosaic_7bc9d9ddd07459c3", function() { return __wbg_umosaic_7bc9d9ddd07459c3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ubrightness_d29d8f78f9c8e71d", function() { return __wbg_ubrightness_d29d8f78f9c8e71d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ughost_d81ebfbc362e40b0", function() { return __wbg_ughost_d81ebfbc362e40b0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_59cb74e423758ede", function() { return __wbg_new_59cb74e423758ede; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_558ba5917b466edd", function() { return __wbg_stack_558ba5917b466edd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_4bb6c2a97407129a", function() { return __wbg_error_4bb6c2a97407129a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony import */ var _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swrender_bg.wasm */ "./node_modules/scratch-render/swrender/build/swrender_bg.wasm");


const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint8Memory0 = new Uint8Array(_swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachegetFloat32Memory0 = null;
function getFloat32Memory0() {
    if (cachegetFloat32Memory0 === null || cachegetFloat32Memory0.buffer !== _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetFloat32Memory0 = new Float32Array(_swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetFloat32Memory0;
}

let WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachegetUint32Memory0 = null;
function getUint32Memory0() {
    if (cachegetUint32Memory0 === null || cachegetUint32Memory0.buffer !== _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetUint32Memory0 = new Uint32Array(_swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetUint32Memory0;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer) {
        cachegetInt32Memory0 = new Int32Array(_swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["memory"].buffer);
    }
    return cachegetInt32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

const lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ "./node_modules/util/util.js").TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
*/
class SoftwareRenderer {

    static __wrap(ptr) {
        const obj = Object.create(SoftwareRenderer.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbg_softwarerenderer_free"](ptr);
    }
    /**
    * @returns {SoftwareRenderer}
    */
    static new() {
        var ret = _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_new"]();
        return SoftwareRenderer.__wrap(ret);
    }
    /**
    * Update the given CPU-side drawable\'s attributes given its ID.
    * Will create a new drawable on the CPU side if one doesn\'t yet exist.
    * @param {number} id
    * @param {Float32Array | undefined} matrix
    * @param {number | undefined} silhouette
    * @param {any | undefined} effects
    * @param {number} effect_bits
    * @param {boolean} use_nearest_neighbor
    */
    set_drawable(id, matrix, silhouette, effects, effect_bits, use_nearest_neighbor) {
        var ptr0 = isLikeNone(matrix) ? 0 : passArrayF32ToWasm0(matrix, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_set_drawable"](this.ptr, id, ptr0, len0, !isLikeNone(silhouette), isLikeNone(silhouette) ? 0 : silhouette, isLikeNone(effects) ? 0 : addHeapObject(effects), effect_bits, use_nearest_neighbor);
    }
    /**
    * Delete the CPU-side drawable with the given ID.
    * @param {number} id
    */
    remove_drawable(id) {
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_remove_drawable"](this.ptr, id);
    }
    /**
    * Update the given silhouette\'s attributes and data given the corresponding skin\'s ID.
    * Will create a new silhouette if one does not exist.
    * @param {number} id
    * @param {number} w
    * @param {number} h
    * @param {Uint8Array} data
    * @param {number} nominal_width
    * @param {number} nominal_height
    * @param {boolean} premultiplied
    */
    set_silhouette(id, w, h, data, nominal_width, nominal_height, premultiplied) {
        var ptr0 = passArray8ToWasm0(data, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_set_silhouette"](this.ptr, id, w, h, ptr0, len0, nominal_width, nominal_height, premultiplied);
    }
    /**
    * Delete the silhouette that corresponds to the skin with the given ID.
    * @param {number} id
    */
    remove_silhouette(id) {
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_remove_silhouette"](this.ptr, id);
    }
    /**
    * Check if a particular Drawable is touching any in a set of Drawables.
    * Will only check inside the given bounds.
    * @param {number} drawable
    * @param {Int32Array} candidates
    * @param {any} rect
    * @returns {boolean}
    */
    is_touching_drawables(drawable, candidates, rect) {
        var ptr0 = passArray32ToWasm0(candidates, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_is_touching_drawables"](this.ptr, drawable, ptr0, len0, addHeapObject(rect));
        return ret !== 0;
    }
    /**
    * Check if a certain color in a drawable is touching a particular color.
    * @param {number} drawable
    * @param {Int32Array} candidates
    * @param {any} rect
    * @param {Uint8Array} color
    * @param {Uint8Array} mask
    * @returns {boolean}
    */
    color_is_touching_color(drawable, candidates, rect, color, mask) {
        var ptr0 = passArray32ToWasm0(candidates, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(color, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passArray8ToWasm0(mask, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len2 = WASM_VECTOR_LEN;
        var ret = _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_color_is_touching_color"](this.ptr, drawable, ptr0, len0, addHeapObject(rect), ptr1, len1, ptr2, len2);
        return ret !== 0;
    }
    /**
    * Check if a certain drawable is touching a particular color.
    * @param {number} drawable
    * @param {Int32Array} candidates
    * @param {any} rect
    * @param {Uint8Array} color
    * @returns {boolean}
    */
    is_touching_color(drawable, candidates, rect, color) {
        var ptr0 = passArray32ToWasm0(candidates, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passArray8ToWasm0(color, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len1 = WASM_VECTOR_LEN;
        var ret = _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_is_touching_color"](this.ptr, drawable, ptr0, len0, addHeapObject(rect), ptr1, len1);
        return ret !== 0;
    }
    /**
    * Check if the drawable with the given ID is touching any pixel in the given rectangle.
    * @param {number} drawable
    * @param {any} rect
    * @returns {boolean}
    */
    drawable_touching_rect(drawable, rect) {
        var ret = _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_drawable_touching_rect"](this.ptr, drawable, addHeapObject(rect));
        return ret !== 0;
    }
    /**
    * Return the ID of the drawable that covers the most pixels in the given rectangle.
    * Drawables earlier in the list will occlude those lower in the list.
    * @param {Int32Array} candidates
    * @param {any} rect
    * @returns {number}
    */
    pick(candidates, rect) {
        var ptr0 = passArray32ToWasm0(candidates, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"]);
        var len0 = WASM_VECTOR_LEN;
        var ret = _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_pick"](this.ptr, ptr0, len0, addHeapObject(rect));
        return ret;
    }
    /**
    * Calculate the convex hull points for the drawable with the given ID.
    * @param {number} drawable
    * @returns {Float32Array}
    */
    drawable_convex_hull_points(drawable) {
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["softwarerenderer_drawable_convex_hull_points"](8, this.ptr, drawable);
        var r0 = getInt32Memory0()[8 / 4 + 0];
        var r1 = getInt32Memory0()[8 / 4 + 1];
        var v0 = getArrayF32FromWasm0(r0, r1).slice();
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](r0, r1 * 4);
        return v0;
    }
}

const __wbg_left_e0e87a2e66be13a6 = function(arg0) {
    var ret = getObject(arg0).left;
    return ret;
};

const __wbg_right_7b7bac033ade0b86 = function(arg0) {
    var ret = getObject(arg0).right;
    return ret;
};

const __wbg_bottom_4666a55ceceeee8a = function(arg0) {
    var ret = getObject(arg0).bottom;
    return ret;
};

const __wbg_top_84c6cfb6e6a6bd02 = function(arg0) {
    var ret = getObject(arg0).top;
    return ret;
};

const __wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

const __wbg_ucolor_ec62c5e559a2a5a3 = function(arg0) {
    var ret = getObject(arg0).u_color;
    return ret;
};

const __wbg_ufisheye_6aa56ae214de6428 = function(arg0) {
    var ret = getObject(arg0).u_fisheye;
    return ret;
};

const __wbg_uwhirl_677f66c116ae8d9b = function(arg0) {
    var ret = getObject(arg0).u_whirl;
    return ret;
};

const __wbg_upixelate_eb81083d476dfa89 = function(arg0) {
    var ret = getObject(arg0).u_pixelate;
    return ret;
};

const __wbg_umosaic_7bc9d9ddd07459c3 = function(arg0) {
    var ret = getObject(arg0).u_mosaic;
    return ret;
};

const __wbg_ubrightness_d29d8f78f9c8e71d = function(arg0) {
    var ret = getObject(arg0).u_brightness;
    return ret;
};

const __wbg_ughost_d81ebfbc362e40b0 = function(arg0) {
    var ret = getObject(arg0).u_ghost;
    return ret;
};

const __wbg_new_59cb74e423758ede = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

const __wbg_stack_558ba5917b466edd = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_malloc"], _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_realloc"]);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

const __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        _swrender_bg_wasm__WEBPACK_IMPORTED_MODULE_0__["__wbindgen_free"](arg0, arg1);
    }
};

const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }),

/***/ "./node_modules/scratch-render/swrender/build/swrender_bg.wasm":
/*!*********************************************************************!*\
  !*** ./node_modules/scratch-render/swrender/build/swrender_bg.wasm ***!
  \*********************************************************************/
/*! exports provided: memory, __wbg_softwarerenderer_free, softwarerenderer_new, softwarerenderer_set_drawable, softwarerenderer_remove_drawable, softwarerenderer_set_silhouette, softwarerenderer_remove_silhouette, softwarerenderer_is_touching_drawables, softwarerenderer_color_is_touching_color, softwarerenderer_is_touching_color, softwarerenderer_drawable_touching_rect, softwarerenderer_pick, softwarerenderer_drawable_convex_hull_points, __wbindgen_malloc, __wbindgen_free, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./swrender.js */ "./node_modules/scratch-render/swrender/build/swrender.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

}]);
//# sourceMappingURL=0.js.map