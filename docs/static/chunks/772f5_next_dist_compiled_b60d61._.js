(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/772f5_next_dist_compiled_b60d61._.js", {

"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/events/events.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    "use strict";
    var e = {
        864: function(e) {
            var t = typeof Reflect === "object" ? Reflect : null;
            var n = t && typeof t.apply === "function" ? t.apply : function ReflectApply(e, t, n) {
                return Function.prototype.apply.call(e, t, n);
            };
            var r;
            if (t && typeof t.ownKeys === "function") {
                r = t.ownKeys;
            } else if (Object.getOwnPropertySymbols) {
                r = function ReflectOwnKeys(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
                };
            } else {
                r = function ReflectOwnKeys(e) {
                    return Object.getOwnPropertyNames(e);
                };
            }
            function ProcessEmitWarning(e) {
                if (console && console.warn) console.warn(e);
            }
            var i = Number.isNaN || function NumberIsNaN(e) {
                return e !== e;
            };
            function EventEmitter() {
                EventEmitter.init.call(this);
            }
            e.exports = EventEmitter;
            e.exports.once = once;
            EventEmitter.EventEmitter = EventEmitter;
            EventEmitter.prototype._events = undefined;
            EventEmitter.prototype._eventsCount = 0;
            EventEmitter.prototype._maxListeners = undefined;
            var s = 10;
            function checkListener(e) {
                if (typeof e !== "function") {
                    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                }
            }
            Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                enumerable: true,
                get: function() {
                    return s;
                },
                set: function(e) {
                    if (typeof e !== "number" || e < 0 || i(e)) {
                        throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    }
                    s = e;
                }
            });
            EventEmitter.init = function() {
                if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                }
                this._maxListeners = this._maxListeners || undefined;
            };
            EventEmitter.prototype.setMaxListeners = function setMaxListeners(e) {
                if (typeof e !== "number" || e < 0 || i(e)) {
                    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                }
                this._maxListeners = e;
                return this;
            };
            function _getMaxListeners(e) {
                if (e._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
                return e._maxListeners;
            }
            EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                return _getMaxListeners(this);
            };
            EventEmitter.prototype.emit = function emit(e) {
                var t = [];
                for(var r = 1; r < arguments.length; r++)t.push(arguments[r]);
                var i = e === "error";
                var s = this._events;
                if (s !== undefined) i = i && s.error === undefined;
                else if (!i) return false;
                if (i) {
                    var o;
                    if (t.length > 0) o = t[0];
                    if (o instanceof Error) {
                        throw o;
                    }
                    var f = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    f.context = o;
                    throw f;
                }
                var u = s[e];
                if (u === undefined) return false;
                if (typeof u === "function") {
                    n(u, this, t);
                } else {
                    var a = u.length;
                    var c = arrayClone(u, a);
                    for(var r = 0; r < a; ++r)n(c[r], this, t);
                }
                return true;
            };
            function _addListener(e, t, n, r) {
                var i;
                var s;
                var o;
                checkListener(n);
                s = e._events;
                if (s === undefined) {
                    s = e._events = Object.create(null);
                    e._eventsCount = 0;
                } else {
                    if (s.newListener !== undefined) {
                        e.emit("newListener", t, n.listener ? n.listener : n);
                        s = e._events;
                    }
                    o = s[t];
                }
                if (o === undefined) {
                    o = s[t] = n;
                    ++e._eventsCount;
                } else {
                    if (typeof o === "function") {
                        o = s[t] = r ? [
                            n,
                            o
                        ] : [
                            o,
                            n
                        ];
                    } else if (r) {
                        o.unshift(n);
                    } else {
                        o.push(n);
                    }
                    i = _getMaxListeners(e);
                    if (i > 0 && o.length > i && !o.warned) {
                        o.warned = true;
                        var f = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
                        f.name = "MaxListenersExceededWarning";
                        f.emitter = e;
                        f.type = t;
                        f.count = o.length;
                        ProcessEmitWarning(f);
                    }
                }
                return e;
            }
            EventEmitter.prototype.addListener = function addListener(e, t) {
                return _addListener(this, e, t, false);
            };
            EventEmitter.prototype.on = EventEmitter.prototype.addListener;
            EventEmitter.prototype.prependListener = function prependListener(e, t) {
                return _addListener(this, e, t, true);
            };
            function onceWrapper() {
                if (!this.fired) {
                    this.target.removeListener(this.type, this.wrapFn);
                    this.fired = true;
                    if (arguments.length === 0) return this.listener.call(this.target);
                    return this.listener.apply(this.target, arguments);
                }
            }
            function _onceWrap(e, t, n) {
                var r = {
                    fired: false,
                    wrapFn: undefined,
                    target: e,
                    type: t,
                    listener: n
                };
                var i = onceWrapper.bind(r);
                i.listener = n;
                r.wrapFn = i;
                return i;
            }
            EventEmitter.prototype.once = function once(e, t) {
                checkListener(t);
                this.on(e, _onceWrap(this, e, t));
                return this;
            };
            EventEmitter.prototype.prependOnceListener = function prependOnceListener(e, t) {
                checkListener(t);
                this.prependListener(e, _onceWrap(this, e, t));
                return this;
            };
            EventEmitter.prototype.removeListener = function removeListener(e, t) {
                var n, r, i, s, o;
                checkListener(t);
                r = this._events;
                if (r === undefined) return this;
                n = r[e];
                if (n === undefined) return this;
                if (n === t || n.listener === t) {
                    if (--this._eventsCount === 0) this._events = Object.create(null);
                    else {
                        delete r[e];
                        if (r.removeListener) this.emit("removeListener", e, n.listener || t);
                    }
                } else if (typeof n !== "function") {
                    i = -1;
                    for(s = n.length - 1; s >= 0; s--){
                        if (n[s] === t || n[s].listener === t) {
                            o = n[s].listener;
                            i = s;
                            break;
                        }
                    }
                    if (i < 0) return this;
                    if (i === 0) n.shift();
                    else {
                        spliceOne(n, i);
                    }
                    if (n.length === 1) r[e] = n[0];
                    if (r.removeListener !== undefined) this.emit("removeListener", e, o || t);
                }
                return this;
            };
            EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
            EventEmitter.prototype.removeAllListeners = function removeAllListeners(e) {
                var t, n, r;
                n = this._events;
                if (n === undefined) return this;
                if (n.removeListener === undefined) {
                    if (arguments.length === 0) {
                        this._events = Object.create(null);
                        this._eventsCount = 0;
                    } else if (n[e] !== undefined) {
                        if (--this._eventsCount === 0) this._events = Object.create(null);
                        else delete n[e];
                    }
                    return this;
                }
                if (arguments.length === 0) {
                    var i = Object.keys(n);
                    var s;
                    for(r = 0; r < i.length; ++r){
                        s = i[r];
                        if (s === "removeListener") continue;
                        this.removeAllListeners(s);
                    }
                    this.removeAllListeners("removeListener");
                    this._events = Object.create(null);
                    this._eventsCount = 0;
                    return this;
                }
                t = n[e];
                if (typeof t === "function") {
                    this.removeListener(e, t);
                } else if (t !== undefined) {
                    for(r = t.length - 1; r >= 0; r--){
                        this.removeListener(e, t[r]);
                    }
                }
                return this;
            };
            function _listeners(e, t, n) {
                var r = e._events;
                if (r === undefined) return [];
                var i = r[t];
                if (i === undefined) return [];
                if (typeof i === "function") return n ? [
                    i.listener || i
                ] : [
                    i
                ];
                return n ? unwrapListeners(i) : arrayClone(i, i.length);
            }
            EventEmitter.prototype.listeners = function listeners(e) {
                return _listeners(this, e, true);
            };
            EventEmitter.prototype.rawListeners = function rawListeners(e) {
                return _listeners(this, e, false);
            };
            EventEmitter.listenerCount = function(e, t) {
                if (typeof e.listenerCount === "function") {
                    return e.listenerCount(t);
                } else {
                    return listenerCount.call(e, t);
                }
            };
            EventEmitter.prototype.listenerCount = listenerCount;
            function listenerCount(e) {
                var t = this._events;
                if (t !== undefined) {
                    var n = t[e];
                    if (typeof n === "function") {
                        return 1;
                    } else if (n !== undefined) {
                        return n.length;
                    }
                }
                return 0;
            }
            EventEmitter.prototype.eventNames = function eventNames() {
                return this._eventsCount > 0 ? r(this._events) : [];
            };
            function arrayClone(e, t) {
                var n = new Array(t);
                for(var r = 0; r < t; ++r)n[r] = e[r];
                return n;
            }
            function spliceOne(e, t) {
                for(; t + 1 < e.length; t++)e[t] = e[t + 1];
                e.pop();
            }
            function unwrapListeners(e) {
                var t = new Array(e.length);
                for(var n = 0; n < t.length; ++n){
                    t[n] = e[n].listener || e[n];
                }
                return t;
            }
            function once(e, t) {
                return new Promise(function(n, r) {
                    function errorListener(n) {
                        e.removeListener(t, resolver);
                        r(n);
                    }
                    function resolver() {
                        if (typeof e.removeListener === "function") {
                            e.removeListener("error", errorListener);
                        }
                        n([].slice.call(arguments));
                    }
                    eventTargetAgnosticAddListener(e, t, resolver, {
                        once: true
                    });
                    if (t !== "error") {
                        addErrorHandlerIfEventEmitter(e, errorListener, {
                            once: true
                        });
                    }
                });
            }
            function addErrorHandlerIfEventEmitter(e, t, n) {
                if (typeof e.on === "function") {
                    eventTargetAgnosticAddListener(e, "error", t, n);
                }
            }
            function eventTargetAgnosticAddListener(e, t, n, r) {
                if (typeof e.on === "function") {
                    if (r.once) {
                        e.once(t, n);
                    } else {
                        e.on(t, n);
                    }
                } else if (typeof e.addEventListener === "function") {
                    e.addEventListener(t, function wrapListener(i) {
                        if (r.once) {
                            e.removeEventListener(t, wrapListener);
                        }
                        n(i);
                    });
                } else {
                    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                }
            }
        }
    };
    var t = {};
    function __nccwpck_require__(n) {
        var r = t[n];
        if (r !== undefined) {
            return r.exports;
        }
        var i = t[n] = {
            exports: {}
        };
        var s = true;
        try {
            e[n](i, i.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete t[n];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = __nccwpck_require__(864);
    module.exports = n;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/querystring-es3/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    "use strict";
    var e = {
        815: function(e) {
            function hasOwnProperty(e, r) {
                return Object.prototype.hasOwnProperty.call(e, r);
            }
            e.exports = function(e, n, t, o) {
                n = n || "&";
                t = t || "=";
                var a = {};
                if (typeof e !== "string" || e.length === 0) {
                    return a;
                }
                var i = /\+/g;
                e = e.split(n);
                var u = 1e3;
                if (o && typeof o.maxKeys === "number") {
                    u = o.maxKeys;
                }
                var c = e.length;
                if (u > 0 && c > u) {
                    c = u;
                }
                for(var p = 0; p < c; ++p){
                    var f = e[p].replace(i, "%20"), s = f.indexOf(t), _, l, y, d;
                    if (s >= 0) {
                        _ = f.substr(0, s);
                        l = f.substr(s + 1);
                    } else {
                        _ = f;
                        l = "";
                    }
                    y = decodeURIComponent(_);
                    d = decodeURIComponent(l);
                    if (!hasOwnProperty(a, y)) {
                        a[y] = d;
                    } else if (r(a[y])) {
                        a[y].push(d);
                    } else {
                        a[y] = [
                            a[y],
                            d
                        ];
                    }
                }
                return a;
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
        },
        577: function(e) {
            var stringifyPrimitive = function(e) {
                switch(typeof e){
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return "";
                }
            };
            e.exports = function(e, t, o, a) {
                t = t || "&";
                o = o || "=";
                if (e === null) {
                    e = undefined;
                }
                if (typeof e === "object") {
                    return map(n(e), function(n) {
                        var a = encodeURIComponent(stringifyPrimitive(n)) + o;
                        if (r(e[n])) {
                            return map(e[n], function(e) {
                                return a + encodeURIComponent(stringifyPrimitive(e));
                            }).join(t);
                        } else {
                            return a + encodeURIComponent(stringifyPrimitive(e[n]));
                        }
                    }).join(t);
                }
                if (!a) return "";
                return encodeURIComponent(stringifyPrimitive(a)) + o + encodeURIComponent(stringifyPrimitive(e));
            };
            var r = Array.isArray || function(e) {
                return Object.prototype.toString.call(e) === "[object Array]";
            };
            function map(e, r) {
                if (e.map) return e.map(r);
                var n = [];
                for(var t = 0; t < e.length; t++){
                    n.push(r(e[t], t));
                }
                return n;
            }
            var n = Object.keys || function(e) {
                var r = [];
                for(var n in e){
                    if (Object.prototype.hasOwnProperty.call(e, n)) r.push(n);
                }
                return r;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(n) {
        var t = r[n];
        if (t !== undefined) {
            return t.exports;
        }
        var o = r[n] = {
            exports: {}
        };
        var a = true;
        try {
            e[n](o, o.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[n];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    !function() {
        var e = n;
        e.decode = e.parse = __nccwpck_require__(815);
        e.encode = e.stringify = __nccwpck_require__(577);
    }();
    module.exports = n;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        452: function(e) {
            "use strict";
            e.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/querystring-es3/index.js [app-client] (ecmascript)");
        }
    };
    var t = {};
    function __nccwpck_require__(o) {
        var a = t[o];
        if (a !== undefined) {
            return a.exports;
        }
        var s = t[o] = {
            exports: {}
        };
        var n = true;
        try {
            e[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var o = {};
    !function() {
        var e = o;
        var t, a = (t = __nccwpck_require__(452)) && "object" == typeof t && "default" in t ? t.default : t, s = /https?|ftp|gopher|file/;
        function r(e) {
            "string" == typeof e && (e = d(e));
            var t = function(e, t, o) {
                var a = e.auth, s = e.hostname, n = e.protocol || "", p = e.pathname || "", c = e.hash || "", i = e.query || "", u = !1;
                a = a ? encodeURIComponent(a).replace(/%3A/i, ":") + "@" : "", e.host ? u = a + e.host : s && (u = a + (~s.indexOf(":") ? "[" + s + "]" : s), e.port && (u += ":" + e.port)), i && "object" == typeof i && (i = t.encode(i));
                var f = e.search || i && "?" + i || "";
                return n && ":" !== n.substr(-1) && (n += ":"), e.slashes || (!n || o.test(n)) && !1 !== u ? (u = "//" + (u || ""), p && "/" !== p[0] && (p = "/" + p)) : u || (u = ""), c && "#" !== c[0] && (c = "#" + c), f && "?" !== f[0] && (f = "?" + f), {
                    protocol: n,
                    host: u,
                    pathname: p = p.replace(/[?#]/g, encodeURIComponent),
                    search: f = f.replace("#", "%23"),
                    hash: c
                };
            }(e, a, s);
            return "" + t.protocol + t.host + t.pathname + t.search + t.hash;
        }
        var n = "http://", p = "w.w", c = n + p, i = /^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i, u = /https?|ftp|gopher|file/;
        function h(e, t) {
            var o = "string" == typeof e ? d(e) : e;
            e = "object" == typeof e ? r(e) : e;
            var a = d(t), s = "";
            o.protocol && !o.slashes && (s = o.protocol, e = e.replace(o.protocol, ""), s += "/" === t[0] || "/" === e[0] ? "/" : ""), s && a.protocol && (s = "", a.slashes || (s = a.protocol, t = t.replace(a.protocol, "")));
            var p = e.match(i);
            p && !a.protocol && (e = e.substr((s = p[1] + (p[2] || "")).length), /^\/\/[^/]/.test(t) && (s = s.slice(0, -1)));
            var f = new URL(e, c + "/"), m = new URL(t, f).toString().replace(c, ""), v = a.protocol || o.protocol;
            return v += o.slashes || a.slashes ? "//" : "", !s && v ? m = m.replace(n, v) : s && (m = m.replace(n, "")), u.test(m) || ~t.indexOf(".") || "/" === e.slice(-1) || "/" === t.slice(-1) || "/" !== m.slice(-1) || (m = m.slice(0, -1)), s && (m = s + ("/" === m[0] ? m.substr(1) : m)), m;
        }
        function l() {}
        l.prototype.parse = d, l.prototype.format = r, l.prototype.resolve = h, l.prototype.resolveObject = h;
        var f = /^https?|ftp|gopher|file/, m = /^(.*?)([#?].*)/, v = /^([a-z0-9.+-]*:)(\/{0,3})(.*)/i, _ = /^([a-z0-9.+-]*:)?\/\/\/*/i, b = /^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;
        function d(e, t, o) {
            if (void 0 === t && (t = !1), void 0 === o && (o = !1), e && "object" == typeof e && e instanceof l) return e;
            var s = (e = e.trim()).match(m);
            e = s ? s[1].replace(/\\/g, "/") + s[2] : e.replace(/\\/g, "/"), b.test(e) && "/" !== e.slice(-1) && (e += "/");
            var n = !/(^javascript)/.test(e) && e.match(v), i = _.test(e), u = "";
            n && (f.test(n[1]) || (u = n[1].toLowerCase(), e = "" + n[2] + n[3]), n[2] || (i = !1, f.test(n[1]) ? (u = n[1], e = "" + n[3]) : e = "//" + n[3]), 3 !== n[2].length && 1 !== n[2].length || (u = n[1], e = "/" + n[3]));
            var g, y = (s ? s[1] : e).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/), w = y && y[1], x = new l, C = "", U = "";
            try {
                g = new URL(e);
            } catch (t) {
                C = t, u || o || !/^\/\//.test(e) || /^\/\/.+[@.]/.test(e) || (U = "/", e = e.substr(1));
                try {
                    g = new URL(e, c);
                } catch (e) {
                    return x.protocol = u, x.href = u, x;
                }
            }
            x.slashes = i && !U, x.host = g.host === p ? "" : g.host, x.hostname = g.hostname === p ? "" : g.hostname.replace(/(\[|\])/g, ""), x.protocol = C ? u || null : g.protocol, x.search = g.search.replace(/\\/g, "%5C"), x.hash = g.hash.replace(/\\/g, "%5C");
            var j = e.split("#");
            !x.search && ~j[0].indexOf("?") && (x.search = "?"), x.hash || "" !== j[1] || (x.hash = "#"), x.query = t ? a.decode(g.search.substr(1)) : x.search.substr(1), x.pathname = U + (n ? function(e) {
                return e.replace(/['^|`]/g, function(e) {
                    return "%" + e.charCodeAt().toString(16).toUpperCase();
                }).replace(/((?:%[0-9A-F]{2})+)/g, function(e, t) {
                    try {
                        return decodeURIComponent(t).split("").map(function(e) {
                            var t = e.charCodeAt();
                            return t > 256 || /^[a-z0-9]$/i.test(e) ? e : "%" + t.toString(16).toUpperCase();
                        }).join("");
                    } catch (e) {
                        return t;
                    }
                });
            }(g.pathname) : g.pathname), "about:" === x.protocol && "blank" === x.pathname && (x.protocol = "", x.pathname = ""), C && "/" !== e[0] && (x.pathname = x.pathname.substr(1)), u && !f.test(u) && "/" !== e.slice(-1) && "/" === x.pathname && (x.pathname = ""), x.path = x.pathname + x.search, x.auth = [
                g.username,
                g.password
            ].map(decodeURIComponent).filter(Boolean).join(":"), x.port = g.port, w && !x.host.endsWith(w) && (x.host += w, x.port = w.slice(1)), x.href = U ? "" + x.pathname + x.search + x.hash : r(x);
            var q = /^(file)/.test(x.href) ? [
                "host",
                "hostname"
            ] : [];
            return Object.keys(x).forEach(function(e) {
                ~q.indexOf(e) || (x[e] = x[e] || null);
            }), x;
        }
        e.parse = d, e.format = r, e.resolve = h, e.resolveObject = function(e, t) {
            return d(h(e, t));
        }, e.Url = l;
    }();
    module.exports = o;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/util/util.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
(function() {
    var r = {
        992: function(r) {
            r.exports = function(r, t, o) {
                if (r.filter) return r.filter(t, o);
                if (void 0 === r || null === r) throw new TypeError;
                if ("function" != typeof t) throw new TypeError;
                var n = [];
                for(var i = 0; i < r.length; i++){
                    if (!e.call(r, i)) continue;
                    var a = r[i];
                    if (t.call(o, a, i, r)) n.push(a);
                }
                return n;
            };
            var e = Object.prototype.hasOwnProperty;
        },
        256: function(r, e, t) {
            "use strict";
            var o = t(925);
            var n = t(139);
            var i = n(o("String.prototype.indexOf"));
            r.exports = function callBoundIntrinsic(r, e) {
                var t = o(r, !!e);
                if (typeof t === "function" && i(r, ".prototype.") > -1) {
                    return n(t);
                }
                return t;
            };
        },
        139: function(r, e, t) {
            "use strict";
            var o = t(174);
            var n = t(925);
            var i = n("%Function.prototype.apply%");
            var a = n("%Function.prototype.call%");
            var y = n("%Reflect.apply%", true) || o.call(a, i);
            var f = n("%Object.getOwnPropertyDescriptor%", true);
            var p = n("%Object.defineProperty%", true);
            var u = n("%Math.max%");
            if (p) {
                try {
                    p({}, "a", {
                        value: 1
                    });
                } catch (r) {
                    p = null;
                }
            }
            r.exports = function callBind(r) {
                var e = y(o, a, arguments);
                if (f && p) {
                    var t = f(e, "length");
                    if (t.configurable) {
                        p(e, "length", {
                            value: 1 + u(0, r.length - (arguments.length - 1))
                        });
                    }
                }
                return e;
            };
            var s = function applyBind() {
                return y(o, i, arguments);
            };
            if (p) {
                p(r.exports, "apply", {
                    value: s
                });
            } else {
                r.exports.apply = s;
            }
        },
        144: function(r) {
            var e = Object.prototype.hasOwnProperty;
            var t = Object.prototype.toString;
            r.exports = function forEach(r, o, n) {
                if (t.call(o) !== "[object Function]") {
                    throw new TypeError("iterator must be a function");
                }
                var i = r.length;
                if (i === +i) {
                    for(var a = 0; a < i; a++){
                        o.call(n, r[a], a, r);
                    }
                } else {
                    for(var y in r){
                        if (e.call(r, y)) {
                            o.call(n, r[y], y, r);
                        }
                    }
                }
            };
        },
        426: function(r) {
            "use strict";
            var e = "Function.prototype.bind called on incompatible ";
            var t = Array.prototype.slice;
            var o = Object.prototype.toString;
            var n = "[object Function]";
            r.exports = function bind(r) {
                var i = this;
                if (typeof i !== "function" || o.call(i) !== n) {
                    throw new TypeError(e + i);
                }
                var a = t.call(arguments, 1);
                var y;
                var binder = function() {
                    if (this instanceof y) {
                        var e = i.apply(this, a.concat(t.call(arguments)));
                        if (Object(e) === e) {
                            return e;
                        }
                        return this;
                    } else {
                        return i.apply(r, a.concat(t.call(arguments)));
                    }
                };
                var f = Math.max(0, i.length - a.length);
                var p = [];
                for(var u = 0; u < f; u++){
                    p.push("$" + u);
                }
                y = Function("binder", "return function (" + p.join(",") + "){ return binder.apply(this,arguments); }")(binder);
                if (i.prototype) {
                    var s = function Empty() {};
                    s.prototype = i.prototype;
                    y.prototype = new s;
                    s.prototype = null;
                }
                return y;
            };
        },
        174: function(r, e, t) {
            "use strict";
            var o = t(426);
            r.exports = Function.prototype.bind || o;
        },
        500: function(r, e, t) {
            "use strict";
            var o;
            var n = SyntaxError;
            var i = Function;
            var a = TypeError;
            var getEvalledConstructor = function(r) {
                try {
                    return i('"use strict"; return (' + r + ").constructor;")();
                } catch (r) {}
            };
            var y = Object.getOwnPropertyDescriptor;
            if (y) {
                try {
                    y({}, "");
                } catch (r) {
                    y = null;
                }
            }
            var throwTypeError = function() {
                throw new a;
            };
            var f = y ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (r) {
                    try {
                        return y(arguments, "callee").get;
                    } catch (r) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var p = t(115)();
            var u = Object.getPrototypeOf || function(r) {
                return r.__proto__;
            };
            var s = {};
            var c = typeof Uint8Array === "undefined" ? o : u(Uint8Array);
            var l = {
                "%AggregateError%": typeof AggregateError === "undefined" ? o : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? o : ArrayBuffer,
                "%ArrayIteratorPrototype%": p ? u([][Symbol.iterator]()) : o,
                "%AsyncFromSyncIteratorPrototype%": o,
                "%AsyncFunction%": s,
                "%AsyncGenerator%": s,
                "%AsyncGeneratorFunction%": s,
                "%AsyncIteratorPrototype%": s,
                "%Atomics%": typeof Atomics === "undefined" ? o : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? o : BigInt,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? o : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": typeof Float32Array === "undefined" ? o : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? o : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? o : FinalizationRegistry,
                "%Function%": i,
                "%GeneratorFunction%": s,
                "%Int8Array%": typeof Int8Array === "undefined" ? o : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? o : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? o : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": p ? u(u([][Symbol.iterator]())) : o,
                "%JSON%": typeof JSON === "object" ? JSON : o,
                "%Map%": typeof Map === "undefined" ? o : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !p ? o : u((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? o : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? o : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": typeof Reflect === "undefined" ? o : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? o : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !p ? o : u((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? o : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": p ? u(""[Symbol.iterator]()) : o,
                "%Symbol%": p ? Symbol : o,
                "%SyntaxError%": n,
                "%ThrowTypeError%": f,
                "%TypedArray%": c,
                "%TypeError%": a,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? o : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? o : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? o : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? o : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": typeof WeakMap === "undefined" ? o : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? o : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? o : WeakSet
            };
            var d = function doEval(r) {
                var e;
                if (r === "%AsyncFunction%") {
                    e = getEvalledConstructor("async function () {}");
                } else if (r === "%GeneratorFunction%") {
                    e = getEvalledConstructor("function* () {}");
                } else if (r === "%AsyncGeneratorFunction%") {
                    e = getEvalledConstructor("async function* () {}");
                } else if (r === "%AsyncGenerator%") {
                    var t = doEval("%AsyncGeneratorFunction%");
                    if (t) {
                        e = t.prototype;
                    }
                } else if (r === "%AsyncIteratorPrototype%") {
                    var o = doEval("%AsyncGenerator%");
                    if (o) {
                        e = u(o.prototype);
                    }
                }
                l[r] = e;
                return e;
            };
            var g = {
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var v = t(174);
            var b = t(101);
            var A = v.call(Function.call, Array.prototype.concat);
            var m = v.call(Function.apply, Array.prototype.splice);
            var S = v.call(Function.call, String.prototype.replace);
            var h = v.call(Function.call, String.prototype.slice);
            var P = v.call(Function.call, RegExp.prototype.exec);
            var O = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var w = /\\(\\)?/g;
            var j = function stringToPath(r) {
                var e = h(r, 0, 1);
                var t = h(r, -1);
                if (e === "%" && t !== "%") {
                    throw new n("invalid intrinsic syntax, expected closing `%`");
                } else if (t === "%" && e !== "%") {
                    throw new n("invalid intrinsic syntax, expected opening `%`");
                }
                var o = [];
                S(r, O, function(r, e, t, n) {
                    o[o.length] = t ? S(n, w, "$1") : e || r;
                });
                return o;
            };
            var E = function getBaseIntrinsic(r, e) {
                var t = r;
                var o;
                if (b(g, t)) {
                    o = g[t];
                    t = "%" + o[0] + "%";
                }
                if (b(l, t)) {
                    var i = l[t];
                    if (i === s) {
                        i = d(t);
                    }
                    if (typeof i === "undefined" && !e) {
                        throw new a("intrinsic " + r + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: o,
                        name: t,
                        value: i
                    };
                }
                throw new n("intrinsic " + r + " does not exist!");
            };
            r.exports = function GetIntrinsic(r, e) {
                if (typeof r !== "string" || r.length === 0) {
                    throw new a("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof e !== "boolean") {
                    throw new a('"allowMissing" argument must be a boolean');
                }
                if (P(/^%?[^%]*%?$/g, r) === null) {
                    throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var t = j(r);
                var i = t.length > 0 ? t[0] : "";
                var f = E("%" + i + "%", e);
                var p = f.name;
                var u = f.value;
                var s = false;
                var c = f.alias;
                if (c) {
                    i = c[0];
                    m(t, A([
                        0,
                        1
                    ], c));
                }
                for(var d = 1, g = true; d < t.length; d += 1){
                    var v = t[d];
                    var S = h(v, 0, 1);
                    var O = h(v, -1);
                    if ((S === '"' || S === "'" || S === "`" || O === '"' || O === "'" || O === "`") && S !== O) {
                        throw new n("property names with quotes must have matching quotes");
                    }
                    if (v === "constructor" || !g) {
                        s = true;
                    }
                    i += "." + v;
                    p = "%" + i + "%";
                    if (b(l, p)) {
                        u = l[p];
                    } else if (u != null) {
                        if (!(v in u)) {
                            if (!e) {
                                throw new a("base intrinsic for " + r + " exists, but the property is not available.");
                            }
                            return void o;
                        }
                        if (y && d + 1 >= t.length) {
                            var w = y(u, v);
                            g = !!w;
                            if (g && "get" in w && !("originalValue" in w.get)) {
                                u = w.get;
                            } else {
                                u = u[v];
                            }
                        } else {
                            g = b(u, v);
                            u = u[v];
                        }
                        if (g && !s) {
                            l[p] = u;
                        }
                    }
                }
                return u;
            };
        },
        925: function(r, e, t) {
            "use strict";
            var o;
            var n = SyntaxError;
            var i = Function;
            var a = TypeError;
            var getEvalledConstructor = function(r) {
                try {
                    return i('"use strict"; return (' + r + ").constructor;")();
                } catch (r) {}
            };
            var y = Object.getOwnPropertyDescriptor;
            if (y) {
                try {
                    y({}, "");
                } catch (r) {
                    y = null;
                }
            }
            var throwTypeError = function() {
                throw new a;
            };
            var f = y ? function() {
                try {
                    arguments.callee;
                    return throwTypeError;
                } catch (r) {
                    try {
                        return y(arguments, "callee").get;
                    } catch (r) {
                        return throwTypeError;
                    }
                }
            }() : throwTypeError;
            var p = t(115)();
            var u = t(504)();
            var s = Object.getPrototypeOf || (u ? function(r) {
                return r.__proto__;
            } : null);
            var c = {};
            var l = typeof Uint8Array === "undefined" || !s ? o : s(Uint8Array);
            var d = {
                "%AggregateError%": typeof AggregateError === "undefined" ? o : AggregateError,
                "%Array%": Array,
                "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? o : ArrayBuffer,
                "%ArrayIteratorPrototype%": p && s ? s([][Symbol.iterator]()) : o,
                "%AsyncFromSyncIteratorPrototype%": o,
                "%AsyncFunction%": c,
                "%AsyncGenerator%": c,
                "%AsyncGeneratorFunction%": c,
                "%AsyncIteratorPrototype%": c,
                "%Atomics%": typeof Atomics === "undefined" ? o : Atomics,
                "%BigInt%": typeof BigInt === "undefined" ? o : BigInt,
                "%BigInt64Array%": typeof BigInt64Array === "undefined" ? o : BigInt64Array,
                "%BigUint64Array%": typeof BigUint64Array === "undefined" ? o : BigUint64Array,
                "%Boolean%": Boolean,
                "%DataView%": typeof DataView === "undefined" ? o : DataView,
                "%Date%": Date,
                "%decodeURI%": decodeURI,
                "%decodeURIComponent%": decodeURIComponent,
                "%encodeURI%": encodeURI,
                "%encodeURIComponent%": encodeURIComponent,
                "%Error%": Error,
                "%eval%": eval,
                "%EvalError%": EvalError,
                "%Float32Array%": typeof Float32Array === "undefined" ? o : Float32Array,
                "%Float64Array%": typeof Float64Array === "undefined" ? o : Float64Array,
                "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? o : FinalizationRegistry,
                "%Function%": i,
                "%GeneratorFunction%": c,
                "%Int8Array%": typeof Int8Array === "undefined" ? o : Int8Array,
                "%Int16Array%": typeof Int16Array === "undefined" ? o : Int16Array,
                "%Int32Array%": typeof Int32Array === "undefined" ? o : Int32Array,
                "%isFinite%": isFinite,
                "%isNaN%": isNaN,
                "%IteratorPrototype%": p && s ? s(s([][Symbol.iterator]())) : o,
                "%JSON%": typeof JSON === "object" ? JSON : o,
                "%Map%": typeof Map === "undefined" ? o : Map,
                "%MapIteratorPrototype%": typeof Map === "undefined" || !p || !s ? o : s((new Map)[Symbol.iterator]()),
                "%Math%": Math,
                "%Number%": Number,
                "%Object%": Object,
                "%parseFloat%": parseFloat,
                "%parseInt%": parseInt,
                "%Promise%": typeof Promise === "undefined" ? o : Promise,
                "%Proxy%": typeof Proxy === "undefined" ? o : Proxy,
                "%RangeError%": RangeError,
                "%ReferenceError%": ReferenceError,
                "%Reflect%": typeof Reflect === "undefined" ? o : Reflect,
                "%RegExp%": RegExp,
                "%Set%": typeof Set === "undefined" ? o : Set,
                "%SetIteratorPrototype%": typeof Set === "undefined" || !p || !s ? o : s((new Set)[Symbol.iterator]()),
                "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? o : SharedArrayBuffer,
                "%String%": String,
                "%StringIteratorPrototype%": p && s ? s(""[Symbol.iterator]()) : o,
                "%Symbol%": p ? Symbol : o,
                "%SyntaxError%": n,
                "%ThrowTypeError%": f,
                "%TypedArray%": l,
                "%TypeError%": a,
                "%Uint8Array%": typeof Uint8Array === "undefined" ? o : Uint8Array,
                "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? o : Uint8ClampedArray,
                "%Uint16Array%": typeof Uint16Array === "undefined" ? o : Uint16Array,
                "%Uint32Array%": typeof Uint32Array === "undefined" ? o : Uint32Array,
                "%URIError%": URIError,
                "%WeakMap%": typeof WeakMap === "undefined" ? o : WeakMap,
                "%WeakRef%": typeof WeakRef === "undefined" ? o : WeakRef,
                "%WeakSet%": typeof WeakSet === "undefined" ? o : WeakSet
            };
            if (s) {
                try {
                    null.error;
                } catch (r) {
                    var g = s(s(r));
                    d["%Error.prototype%"] = g;
                }
            }
            var v = function doEval(r) {
                var e;
                if (r === "%AsyncFunction%") {
                    e = getEvalledConstructor("async function () {}");
                } else if (r === "%GeneratorFunction%") {
                    e = getEvalledConstructor("function* () {}");
                } else if (r === "%AsyncGeneratorFunction%") {
                    e = getEvalledConstructor("async function* () {}");
                } else if (r === "%AsyncGenerator%") {
                    var t = doEval("%AsyncGeneratorFunction%");
                    if (t) {
                        e = t.prototype;
                    }
                } else if (r === "%AsyncIteratorPrototype%") {
                    var o = doEval("%AsyncGenerator%");
                    if (o && s) {
                        e = s(o.prototype);
                    }
                }
                d[r] = e;
                return e;
            };
            var b = {
                "%ArrayBufferPrototype%": [
                    "ArrayBuffer",
                    "prototype"
                ],
                "%ArrayPrototype%": [
                    "Array",
                    "prototype"
                ],
                "%ArrayProto_entries%": [
                    "Array",
                    "prototype",
                    "entries"
                ],
                "%ArrayProto_forEach%": [
                    "Array",
                    "prototype",
                    "forEach"
                ],
                "%ArrayProto_keys%": [
                    "Array",
                    "prototype",
                    "keys"
                ],
                "%ArrayProto_values%": [
                    "Array",
                    "prototype",
                    "values"
                ],
                "%AsyncFunctionPrototype%": [
                    "AsyncFunction",
                    "prototype"
                ],
                "%AsyncGenerator%": [
                    "AsyncGeneratorFunction",
                    "prototype"
                ],
                "%AsyncGeneratorPrototype%": [
                    "AsyncGeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%BooleanPrototype%": [
                    "Boolean",
                    "prototype"
                ],
                "%DataViewPrototype%": [
                    "DataView",
                    "prototype"
                ],
                "%DatePrototype%": [
                    "Date",
                    "prototype"
                ],
                "%ErrorPrototype%": [
                    "Error",
                    "prototype"
                ],
                "%EvalErrorPrototype%": [
                    "EvalError",
                    "prototype"
                ],
                "%Float32ArrayPrototype%": [
                    "Float32Array",
                    "prototype"
                ],
                "%Float64ArrayPrototype%": [
                    "Float64Array",
                    "prototype"
                ],
                "%FunctionPrototype%": [
                    "Function",
                    "prototype"
                ],
                "%Generator%": [
                    "GeneratorFunction",
                    "prototype"
                ],
                "%GeneratorPrototype%": [
                    "GeneratorFunction",
                    "prototype",
                    "prototype"
                ],
                "%Int8ArrayPrototype%": [
                    "Int8Array",
                    "prototype"
                ],
                "%Int16ArrayPrototype%": [
                    "Int16Array",
                    "prototype"
                ],
                "%Int32ArrayPrototype%": [
                    "Int32Array",
                    "prototype"
                ],
                "%JSONParse%": [
                    "JSON",
                    "parse"
                ],
                "%JSONStringify%": [
                    "JSON",
                    "stringify"
                ],
                "%MapPrototype%": [
                    "Map",
                    "prototype"
                ],
                "%NumberPrototype%": [
                    "Number",
                    "prototype"
                ],
                "%ObjectPrototype%": [
                    "Object",
                    "prototype"
                ],
                "%ObjProto_toString%": [
                    "Object",
                    "prototype",
                    "toString"
                ],
                "%ObjProto_valueOf%": [
                    "Object",
                    "prototype",
                    "valueOf"
                ],
                "%PromisePrototype%": [
                    "Promise",
                    "prototype"
                ],
                "%PromiseProto_then%": [
                    "Promise",
                    "prototype",
                    "then"
                ],
                "%Promise_all%": [
                    "Promise",
                    "all"
                ],
                "%Promise_reject%": [
                    "Promise",
                    "reject"
                ],
                "%Promise_resolve%": [
                    "Promise",
                    "resolve"
                ],
                "%RangeErrorPrototype%": [
                    "RangeError",
                    "prototype"
                ],
                "%ReferenceErrorPrototype%": [
                    "ReferenceError",
                    "prototype"
                ],
                "%RegExpPrototype%": [
                    "RegExp",
                    "prototype"
                ],
                "%SetPrototype%": [
                    "Set",
                    "prototype"
                ],
                "%SharedArrayBufferPrototype%": [
                    "SharedArrayBuffer",
                    "prototype"
                ],
                "%StringPrototype%": [
                    "String",
                    "prototype"
                ],
                "%SymbolPrototype%": [
                    "Symbol",
                    "prototype"
                ],
                "%SyntaxErrorPrototype%": [
                    "SyntaxError",
                    "prototype"
                ],
                "%TypedArrayPrototype%": [
                    "TypedArray",
                    "prototype"
                ],
                "%TypeErrorPrototype%": [
                    "TypeError",
                    "prototype"
                ],
                "%Uint8ArrayPrototype%": [
                    "Uint8Array",
                    "prototype"
                ],
                "%Uint8ClampedArrayPrototype%": [
                    "Uint8ClampedArray",
                    "prototype"
                ],
                "%Uint16ArrayPrototype%": [
                    "Uint16Array",
                    "prototype"
                ],
                "%Uint32ArrayPrototype%": [
                    "Uint32Array",
                    "prototype"
                ],
                "%URIErrorPrototype%": [
                    "URIError",
                    "prototype"
                ],
                "%WeakMapPrototype%": [
                    "WeakMap",
                    "prototype"
                ],
                "%WeakSetPrototype%": [
                    "WeakSet",
                    "prototype"
                ]
            };
            var A = t(174);
            var m = t(101);
            var S = A.call(Function.call, Array.prototype.concat);
            var h = A.call(Function.apply, Array.prototype.splice);
            var P = A.call(Function.call, String.prototype.replace);
            var O = A.call(Function.call, String.prototype.slice);
            var w = A.call(Function.call, RegExp.prototype.exec);
            var j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
            var E = /\\(\\)?/g;
            var I = function stringToPath(r) {
                var e = O(r, 0, 1);
                var t = O(r, -1);
                if (e === "%" && t !== "%") {
                    throw new n("invalid intrinsic syntax, expected closing `%`");
                } else if (t === "%" && e !== "%") {
                    throw new n("invalid intrinsic syntax, expected opening `%`");
                }
                var o = [];
                P(r, j, function(r, e, t, n) {
                    o[o.length] = t ? P(n, E, "$1") : e || r;
                });
                return o;
            };
            var B = function getBaseIntrinsic(r, e) {
                var t = r;
                var o;
                if (m(b, t)) {
                    o = b[t];
                    t = "%" + o[0] + "%";
                }
                if (m(d, t)) {
                    var i = d[t];
                    if (i === c) {
                        i = v(t);
                    }
                    if (typeof i === "undefined" && !e) {
                        throw new a("intrinsic " + r + " exists, but is not available. Please file an issue!");
                    }
                    return {
                        alias: o,
                        name: t,
                        value: i
                    };
                }
                throw new n("intrinsic " + r + " does not exist!");
            };
            r.exports = function GetIntrinsic(r, e) {
                if (typeof r !== "string" || r.length === 0) {
                    throw new a("intrinsic name must be a non-empty string");
                }
                if (arguments.length > 1 && typeof e !== "boolean") {
                    throw new a('"allowMissing" argument must be a boolean');
                }
                if (w(/^%?[^%]*%?$/, r) === null) {
                    throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                }
                var t = I(r);
                var i = t.length > 0 ? t[0] : "";
                var f = B("%" + i + "%", e);
                var p = f.name;
                var u = f.value;
                var s = false;
                var c = f.alias;
                if (c) {
                    i = c[0];
                    h(t, S([
                        0,
                        1
                    ], c));
                }
                for(var l = 1, g = true; l < t.length; l += 1){
                    var v = t[l];
                    var b = O(v, 0, 1);
                    var A = O(v, -1);
                    if ((b === '"' || b === "'" || b === "`" || A === '"' || A === "'" || A === "`") && b !== A) {
                        throw new n("property names with quotes must have matching quotes");
                    }
                    if (v === "constructor" || !g) {
                        s = true;
                    }
                    i += "." + v;
                    p = "%" + i + "%";
                    if (m(d, p)) {
                        u = d[p];
                    } else if (u != null) {
                        if (!(v in u)) {
                            if (!e) {
                                throw new a("base intrinsic for " + r + " exists, but the property is not available.");
                            }
                            return void o;
                        }
                        if (y && l + 1 >= t.length) {
                            var P = y(u, v);
                            g = !!P;
                            if (g && "get" in P && !("originalValue" in P.get)) {
                                u = P.get;
                            } else {
                                u = u[v];
                            }
                        } else {
                            g = m(u, v);
                            u = u[v];
                        }
                        if (g && !s) {
                            d[p] = u;
                        }
                    }
                }
                return u;
            };
        },
        504: function(r) {
            "use strict";
            var e = {
                foo: {}
            };
            var t = Object;
            r.exports = function hasProto() {
                return ({
                    __proto__: e
                }).foo === e.foo && !(({
                    __proto__: null
                }) instanceof t);
            };
        },
        942: function(r, e, t) {
            "use strict";
            var o = typeof Symbol !== "undefined" && Symbol;
            var n = t(773);
            r.exports = function hasNativeSymbols() {
                if (typeof o !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof o("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return n();
            };
        },
        773: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var e = Symbol("test");
                var t = Object(e);
                if (typeof e === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                var o = 42;
                r[e] = o;
                for(e in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var n = Object.getOwnPropertySymbols(r);
                if (n.length !== 1 || n[0] !== e) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, e)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    if (i.value !== o || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        115: function(r, e, t) {
            "use strict";
            var o = typeof Symbol !== "undefined" && Symbol;
            var n = t(832);
            r.exports = function hasNativeSymbols() {
                if (typeof o !== "function") {
                    return false;
                }
                if (typeof Symbol !== "function") {
                    return false;
                }
                if (typeof o("foo") !== "symbol") {
                    return false;
                }
                if (typeof Symbol("bar") !== "symbol") {
                    return false;
                }
                return n();
            };
        },
        832: function(r) {
            "use strict";
            r.exports = function hasSymbols() {
                if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
                    return false;
                }
                if (typeof Symbol.iterator === "symbol") {
                    return true;
                }
                var r = {};
                var e = Symbol("test");
                var t = Object(e);
                if (typeof e === "string") {
                    return false;
                }
                if (Object.prototype.toString.call(e) !== "[object Symbol]") {
                    return false;
                }
                if (Object.prototype.toString.call(t) !== "[object Symbol]") {
                    return false;
                }
                var o = 42;
                r[e] = o;
                for(e in r){
                    return false;
                }
                if (typeof Object.keys === "function" && Object.keys(r).length !== 0) {
                    return false;
                }
                if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(r).length !== 0) {
                    return false;
                }
                var n = Object.getOwnPropertySymbols(r);
                if (n.length !== 1 || n[0] !== e) {
                    return false;
                }
                if (!Object.prototype.propertyIsEnumerable.call(r, e)) {
                    return false;
                }
                if (typeof Object.getOwnPropertyDescriptor === "function") {
                    var i = Object.getOwnPropertyDescriptor(r, e);
                    if (i.value !== o || i.enumerable !== true) {
                        return false;
                    }
                }
                return true;
            };
        },
        101: function(r, e, t) {
            "use strict";
            var o = t(174);
            r.exports = o.call(Function.call, Object.prototype.hasOwnProperty);
        },
        782: function(r) {
            if (typeof Object.create === "function") {
                r.exports = function inherits(r, e) {
                    if (e) {
                        r.super_ = e;
                        r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: false,
                                writable: true,
                                configurable: true
                            }
                        });
                    }
                };
            } else {
                r.exports = function inherits(r, e) {
                    if (e) {
                        r.super_ = e;
                        var TempCtor = function() {};
                        TempCtor.prototype = e.prototype;
                        r.prototype = new TempCtor;
                        r.prototype.constructor = r;
                    }
                };
            }
        },
        157: function(r) {
            "use strict";
            var e = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var t = Object.prototype.toString;
            var o = function isArguments(r) {
                if (e && r && typeof r === "object" && Symbol.toStringTag in r) {
                    return false;
                }
                return t.call(r) === "[object Arguments]";
            };
            var n = function isArguments(r) {
                if (o(r)) {
                    return true;
                }
                return r !== null && typeof r === "object" && typeof r.length === "number" && r.length >= 0 && t.call(r) !== "[object Array]" && t.call(r.callee) === "[object Function]";
            };
            var i = function() {
                return o(arguments);
            }();
            o.isLegacyArguments = n;
            r.exports = i ? o : n;
        },
        391: function(r) {
            "use strict";
            var e = Object.prototype.toString;
            var t = Function.prototype.toString;
            var o = /^\s*(?:function)?\*/;
            var n = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
            var i = Object.getPrototypeOf;
            var getGeneratorFunc = function() {
                if (!n) {
                    return false;
                }
                try {
                    return Function("return function*() {}")();
                } catch (r) {}
            };
            var a = getGeneratorFunc();
            var y = a ? i(a) : {};
            r.exports = function isGeneratorFunction(r) {
                if (typeof r !== "function") {
                    return false;
                }
                if (o.test(t.call(r))) {
                    return true;
                }
                if (!n) {
                    var a = e.call(r);
                    return a === "[object GeneratorFunction]";
                }
                return i(r) === y;
            };
        },
        994: function(r, e, t) {
            "use strict";
            var o = t(144);
            var n = t(349);
            var i = t(256);
            var a = i("Object.prototype.toString");
            var y = t(942)();
            var f = y && typeof Symbol.toStringTag === "symbol";
            var p = n();
            var u = i("Array.prototype.indexOf", true) || function indexOf(r, e) {
                for(var t = 0; t < r.length; t += 1){
                    if (r[t] === e) {
                        return t;
                    }
                }
                return -1;
            };
            var s = i("String.prototype.slice");
            var c = {};
            var l = t(24);
            var d = Object.getPrototypeOf;
            if (f && l && d) {
                o(p, function(r) {
                    var e = new global[r];
                    if (!(Symbol.toStringTag in e)) {
                        throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                    }
                    var t = d(e);
                    var o = l(t, Symbol.toStringTag);
                    if (!o) {
                        var n = d(t);
                        o = l(n, Symbol.toStringTag);
                    }
                    c[r] = o.get;
                });
            }
            var g = function tryAllTypedArrays(r) {
                var e = false;
                o(c, function(t, o) {
                    if (!e) {
                        try {
                            e = t.call(r) === o;
                        } catch (r) {}
                    }
                });
                return e;
            };
            r.exports = function isTypedArray(r) {
                if (!r || typeof r !== "object") {
                    return false;
                }
                if (!f) {
                    var e = s(a(r), 8, -1);
                    return u(p, e) > -1;
                }
                if (!l) {
                    return false;
                }
                return g(r);
            };
        },
        369: function(r) {
            r.exports = function isBuffer(r) {
                return r instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"];
            };
        },
        584: function(r, e, t) {
            "use strict";
            var o = t(157);
            var n = t(391);
            var i = t(490);
            var a = t(994);
            function uncurryThis(r) {
                return r.call.bind(r);
            }
            var y = typeof BigInt !== "undefined";
            var f = typeof Symbol !== "undefined";
            var p = uncurryThis(Object.prototype.toString);
            var u = uncurryThis(Number.prototype.valueOf);
            var s = uncurryThis(String.prototype.valueOf);
            var c = uncurryThis(Boolean.prototype.valueOf);
            if (y) {
                var l = uncurryThis(BigInt.prototype.valueOf);
            }
            if (f) {
                var d = uncurryThis(Symbol.prototype.valueOf);
            }
            function checkBoxedPrimitive(r, e) {
                if (typeof r !== "object") {
                    return false;
                }
                try {
                    e(r);
                    return true;
                } catch (r) {
                    return false;
                }
            }
            e.isArgumentsObject = o;
            e.isGeneratorFunction = n;
            e.isTypedArray = a;
            function isPromise(r) {
                return typeof Promise !== "undefined" && r instanceof Promise || r !== null && typeof r === "object" && typeof r.then === "function" && typeof r.catch === "function";
            }
            e.isPromise = isPromise;
            function isArrayBufferView(r) {
                if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
                    return ArrayBuffer.isView(r);
                }
                return a(r) || isDataView(r);
            }
            e.isArrayBufferView = isArrayBufferView;
            function isUint8Array(r) {
                return i(r) === "Uint8Array";
            }
            e.isUint8Array = isUint8Array;
            function isUint8ClampedArray(r) {
                return i(r) === "Uint8ClampedArray";
            }
            e.isUint8ClampedArray = isUint8ClampedArray;
            function isUint16Array(r) {
                return i(r) === "Uint16Array";
            }
            e.isUint16Array = isUint16Array;
            function isUint32Array(r) {
                return i(r) === "Uint32Array";
            }
            e.isUint32Array = isUint32Array;
            function isInt8Array(r) {
                return i(r) === "Int8Array";
            }
            e.isInt8Array = isInt8Array;
            function isInt16Array(r) {
                return i(r) === "Int16Array";
            }
            e.isInt16Array = isInt16Array;
            function isInt32Array(r) {
                return i(r) === "Int32Array";
            }
            e.isInt32Array = isInt32Array;
            function isFloat32Array(r) {
                return i(r) === "Float32Array";
            }
            e.isFloat32Array = isFloat32Array;
            function isFloat64Array(r) {
                return i(r) === "Float64Array";
            }
            e.isFloat64Array = isFloat64Array;
            function isBigInt64Array(r) {
                return i(r) === "BigInt64Array";
            }
            e.isBigInt64Array = isBigInt64Array;
            function isBigUint64Array(r) {
                return i(r) === "BigUint64Array";
            }
            e.isBigUint64Array = isBigUint64Array;
            function isMapToString(r) {
                return p(r) === "[object Map]";
            }
            isMapToString.working = typeof Map !== "undefined" && isMapToString(new Map);
            function isMap(r) {
                if (typeof Map === "undefined") {
                    return false;
                }
                return isMapToString.working ? isMapToString(r) : r instanceof Map;
            }
            e.isMap = isMap;
            function isSetToString(r) {
                return p(r) === "[object Set]";
            }
            isSetToString.working = typeof Set !== "undefined" && isSetToString(new Set);
            function isSet(r) {
                if (typeof Set === "undefined") {
                    return false;
                }
                return isSetToString.working ? isSetToString(r) : r instanceof Set;
            }
            e.isSet = isSet;
            function isWeakMapToString(r) {
                return p(r) === "[object WeakMap]";
            }
            isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(new WeakMap);
            function isWeakMap(r) {
                if (typeof WeakMap === "undefined") {
                    return false;
                }
                return isWeakMapToString.working ? isWeakMapToString(r) : r instanceof WeakMap;
            }
            e.isWeakMap = isWeakMap;
            function isWeakSetToString(r) {
                return p(r) === "[object WeakSet]";
            }
            isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(new WeakSet);
            function isWeakSet(r) {
                return isWeakSetToString(r);
            }
            e.isWeakSet = isWeakSet;
            function isArrayBufferToString(r) {
                return p(r) === "[object ArrayBuffer]";
            }
            isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer);
            function isArrayBuffer(r) {
                if (typeof ArrayBuffer === "undefined") {
                    return false;
                }
                return isArrayBufferToString.working ? isArrayBufferToString(r) : r instanceof ArrayBuffer;
            }
            e.isArrayBuffer = isArrayBuffer;
            function isDataViewToString(r) {
                return p(r) === "[object DataView]";
            }
            isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
            function isDataView(r) {
                if (typeof DataView === "undefined") {
                    return false;
                }
                return isDataViewToString.working ? isDataViewToString(r) : r instanceof DataView;
            }
            e.isDataView = isDataView;
            var g = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : undefined;
            function isSharedArrayBufferToString(r) {
                return p(r) === "[object SharedArrayBuffer]";
            }
            function isSharedArrayBuffer(r) {
                if (typeof g === "undefined") {
                    return false;
                }
                if (typeof isSharedArrayBufferToString.working === "undefined") {
                    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new g);
                }
                return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(r) : r instanceof g;
            }
            e.isSharedArrayBuffer = isSharedArrayBuffer;
            function isAsyncFunction(r) {
                return p(r) === "[object AsyncFunction]";
            }
            e.isAsyncFunction = isAsyncFunction;
            function isMapIterator(r) {
                return p(r) === "[object Map Iterator]";
            }
            e.isMapIterator = isMapIterator;
            function isSetIterator(r) {
                return p(r) === "[object Set Iterator]";
            }
            e.isSetIterator = isSetIterator;
            function isGeneratorObject(r) {
                return p(r) === "[object Generator]";
            }
            e.isGeneratorObject = isGeneratorObject;
            function isWebAssemblyCompiledModule(r) {
                return p(r) === "[object WebAssembly.Module]";
            }
            e.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
            function isNumberObject(r) {
                return checkBoxedPrimitive(r, u);
            }
            e.isNumberObject = isNumberObject;
            function isStringObject(r) {
                return checkBoxedPrimitive(r, s);
            }
            e.isStringObject = isStringObject;
            function isBooleanObject(r) {
                return checkBoxedPrimitive(r, c);
            }
            e.isBooleanObject = isBooleanObject;
            function isBigIntObject(r) {
                return y && checkBoxedPrimitive(r, l);
            }
            e.isBigIntObject = isBigIntObject;
            function isSymbolObject(r) {
                return f && checkBoxedPrimitive(r, d);
            }
            e.isSymbolObject = isSymbolObject;
            function isBoxedPrimitive(r) {
                return isNumberObject(r) || isStringObject(r) || isBooleanObject(r) || isBigIntObject(r) || isSymbolObject(r);
            }
            e.isBoxedPrimitive = isBoxedPrimitive;
            function isAnyArrayBuffer(r) {
                return typeof Uint8Array !== "undefined" && (isArrayBuffer(r) || isSharedArrayBuffer(r));
            }
            e.isAnyArrayBuffer = isAnyArrayBuffer;
            [
                "isProxy",
                "isExternal",
                "isModuleNamespaceObject"
            ].forEach(function(r) {
                Object.defineProperty(e, r, {
                    enumerable: false,
                    value: function() {
                        throw new Error(r + " is not supported in userland");
                    }
                });
            });
        },
        177: function(r, e, t) {
            var o = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(r) {
                var e = Object.keys(r);
                var t = {};
                for(var o = 0; o < e.length; o++){
                    t[e[o]] = Object.getOwnPropertyDescriptor(r, e[o]);
                }
                return t;
            };
            var n = /%[sdj%]/g;
            e.format = function(r) {
                if (!isString(r)) {
                    var e = [];
                    for(var t = 0; t < arguments.length; t++){
                        e.push(inspect(arguments[t]));
                    }
                    return e.join(" ");
                }
                var t = 1;
                var o = arguments;
                var i = o.length;
                var a = String(r).replace(n, function(r) {
                    if (r === "%%") return "%";
                    if (t >= i) return r;
                    switch(r){
                        case "%s":
                            return String(o[t++]);
                        case "%d":
                            return Number(o[t++]);
                        case "%j":
                            try {
                                return JSON.stringify(o[t++]);
                            } catch (r) {
                                return "[Circular]";
                            }
                        default:
                            return r;
                    }
                });
                for(var y = o[t]; t < i; y = o[++t]){
                    if (isNull(y) || !isObject(y)) {
                        a += " " + y;
                    } else {
                        a += " " + inspect(y);
                    }
                }
                return a;
            };
            e.deprecate = function(r, t) {
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].noDeprecation === true) {
                    return r;
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] === "undefined") {
                    return function() {
                        return e.deprecate(r, t).apply(this, arguments);
                    };
                }
                var o = false;
                function deprecated() {
                    if (!o) {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].throwDeprecation) {
                            throw new Error(t);
                        } else if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].traceDeprecation) {
                            console.trace(t);
                        } else {
                            console.error(t);
                        }
                        o = true;
                    }
                    return r.apply(this, arguments);
                }
                return deprecated;
            };
            var i = {};
            var a = /^$/;
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG) {
                var y = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NODE_DEBUG;
                y = y.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
                a = new RegExp("^" + y + "$", "i");
            }
            e.debuglog = function(r) {
                r = r.toUpperCase();
                if (!i[r]) {
                    if (a.test(r)) {
                        var t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pid;
                        i[r] = function() {
                            var o = e.format.apply(e, arguments);
                            console.error("%s %d: %s", r, t, o);
                        };
                    } else {
                        i[r] = function() {};
                    }
                }
                return i[r];
            };
            function inspect(r, t) {
                var o = {
                    seen: [],
                    stylize: stylizeNoColor
                };
                if (arguments.length >= 3) o.depth = arguments[2];
                if (arguments.length >= 4) o.colors = arguments[3];
                if (isBoolean(t)) {
                    o.showHidden = t;
                } else if (t) {
                    e._extend(o, t);
                }
                if (isUndefined(o.showHidden)) o.showHidden = false;
                if (isUndefined(o.depth)) o.depth = 2;
                if (isUndefined(o.colors)) o.colors = false;
                if (isUndefined(o.customInspect)) o.customInspect = true;
                if (o.colors) o.stylize = stylizeWithColor;
                return formatValue(o, r, o.depth);
            }
            e.inspect = inspect;
            inspect.colors = {
                bold: [
                    1,
                    22
                ],
                italic: [
                    3,
                    23
                ],
                underline: [
                    4,
                    24
                ],
                inverse: [
                    7,
                    27
                ],
                white: [
                    37,
                    39
                ],
                grey: [
                    90,
                    39
                ],
                black: [
                    30,
                    39
                ],
                blue: [
                    34,
                    39
                ],
                cyan: [
                    36,
                    39
                ],
                green: [
                    32,
                    39
                ],
                magenta: [
                    35,
                    39
                ],
                red: [
                    31,
                    39
                ],
                yellow: [
                    33,
                    39
                ]
            };
            inspect.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
            };
            function stylizeWithColor(r, e) {
                var t = inspect.styles[e];
                if (t) {
                    return "[" + inspect.colors[t][0] + "m" + r + "[" + inspect.colors[t][1] + "m";
                } else {
                    return r;
                }
            }
            function stylizeNoColor(r, e) {
                return r;
            }
            function arrayToHash(r) {
                var e = {};
                r.forEach(function(r, t) {
                    e[r] = true;
                });
                return e;
            }
            function formatValue(r, t, o) {
                if (r.customInspect && t && isFunction(t.inspect) && t.inspect !== e.inspect && !(t.constructor && t.constructor.prototype === t)) {
                    var n = t.inspect(o, r);
                    if (!isString(n)) {
                        n = formatValue(r, n, o);
                    }
                    return n;
                }
                var i = formatPrimitive(r, t);
                if (i) {
                    return i;
                }
                var a = Object.keys(t);
                var y = arrayToHash(a);
                if (r.showHidden) {
                    a = Object.getOwnPropertyNames(t);
                }
                if (isError(t) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) {
                    return formatError(t);
                }
                if (a.length === 0) {
                    if (isFunction(t)) {
                        var f = t.name ? ": " + t.name : "";
                        return r.stylize("[Function" + f + "]", "special");
                    }
                    if (isRegExp(t)) {
                        return r.stylize(RegExp.prototype.toString.call(t), "regexp");
                    }
                    if (isDate(t)) {
                        return r.stylize(Date.prototype.toString.call(t), "date");
                    }
                    if (isError(t)) {
                        return formatError(t);
                    }
                }
                var p = "", u = false, s = [
                    "{",
                    "}"
                ];
                if (isArray(t)) {
                    u = true;
                    s = [
                        "[",
                        "]"
                    ];
                }
                if (isFunction(t)) {
                    var c = t.name ? ": " + t.name : "";
                    p = " [Function" + c + "]";
                }
                if (isRegExp(t)) {
                    p = " " + RegExp.prototype.toString.call(t);
                }
                if (isDate(t)) {
                    p = " " + Date.prototype.toUTCString.call(t);
                }
                if (isError(t)) {
                    p = " " + formatError(t);
                }
                if (a.length === 0 && (!u || t.length == 0)) {
                    return s[0] + p + s[1];
                }
                if (o < 0) {
                    if (isRegExp(t)) {
                        return r.stylize(RegExp.prototype.toString.call(t), "regexp");
                    } else {
                        return r.stylize("[Object]", "special");
                    }
                }
                r.seen.push(t);
                var l;
                if (u) {
                    l = formatArray(r, t, o, y, a);
                } else {
                    l = a.map(function(e) {
                        return formatProperty(r, t, o, y, e, u);
                    });
                }
                r.seen.pop();
                return reduceToSingleString(l, p, s);
            }
            function formatPrimitive(r, e) {
                if (isUndefined(e)) return r.stylize("undefined", "undefined");
                if (isString(e)) {
                    var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return r.stylize(t, "string");
                }
                if (isNumber(e)) return r.stylize("" + e, "number");
                if (isBoolean(e)) return r.stylize("" + e, "boolean");
                if (isNull(e)) return r.stylize("null", "null");
            }
            function formatError(r) {
                return "[" + Error.prototype.toString.call(r) + "]";
            }
            function formatArray(r, e, t, o, n) {
                var i = [];
                for(var a = 0, y = e.length; a < y; ++a){
                    if (hasOwnProperty(e, String(a))) {
                        i.push(formatProperty(r, e, t, o, String(a), true));
                    } else {
                        i.push("");
                    }
                }
                n.forEach(function(n) {
                    if (!n.match(/^\d+$/)) {
                        i.push(formatProperty(r, e, t, o, n, true));
                    }
                });
                return i;
            }
            function formatProperty(r, e, t, o, n, i) {
                var a, y, f;
                f = Object.getOwnPropertyDescriptor(e, n) || {
                    value: e[n]
                };
                if (f.get) {
                    if (f.set) {
                        y = r.stylize("[Getter/Setter]", "special");
                    } else {
                        y = r.stylize("[Getter]", "special");
                    }
                } else {
                    if (f.set) {
                        y = r.stylize("[Setter]", "special");
                    }
                }
                if (!hasOwnProperty(o, n)) {
                    a = "[" + n + "]";
                }
                if (!y) {
                    if (r.seen.indexOf(f.value) < 0) {
                        if (isNull(t)) {
                            y = formatValue(r, f.value, null);
                        } else {
                            y = formatValue(r, f.value, t - 1);
                        }
                        if (y.indexOf("\n") > -1) {
                            if (i) {
                                y = y.split("\n").map(function(r) {
                                    return "  " + r;
                                }).join("\n").substr(2);
                            } else {
                                y = "\n" + y.split("\n").map(function(r) {
                                    return "   " + r;
                                }).join("\n");
                            }
                        }
                    } else {
                        y = r.stylize("[Circular]", "special");
                    }
                }
                if (isUndefined(a)) {
                    if (i && n.match(/^\d+$/)) {
                        return y;
                    }
                    a = JSON.stringify("" + n);
                    if (a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                        a = a.substr(1, a.length - 2);
                        a = r.stylize(a, "name");
                    } else {
                        a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                        a = r.stylize(a, "string");
                    }
                }
                return a + ": " + y;
            }
            function reduceToSingleString(r, e, t) {
                var o = 0;
                var n = r.reduce(function(r, e) {
                    o++;
                    if (e.indexOf("\n") >= 0) o++;
                    return r + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
                }, 0);
                if (n > 60) {
                    return t[0] + (e === "" ? "" : e + "\n ") + " " + r.join(",\n  ") + " " + t[1];
                }
                return t[0] + e + " " + r.join(", ") + " " + t[1];
            }
            e.types = t(584);
            function isArray(r) {
                return Array.isArray(r);
            }
            e.isArray = isArray;
            function isBoolean(r) {
                return typeof r === "boolean";
            }
            e.isBoolean = isBoolean;
            function isNull(r) {
                return r === null;
            }
            e.isNull = isNull;
            function isNullOrUndefined(r) {
                return r == null;
            }
            e.isNullOrUndefined = isNullOrUndefined;
            function isNumber(r) {
                return typeof r === "number";
            }
            e.isNumber = isNumber;
            function isString(r) {
                return typeof r === "string";
            }
            e.isString = isString;
            function isSymbol(r) {
                return typeof r === "symbol";
            }
            e.isSymbol = isSymbol;
            function isUndefined(r) {
                return r === void 0;
            }
            e.isUndefined = isUndefined;
            function isRegExp(r) {
                return isObject(r) && objectToString(r) === "[object RegExp]";
            }
            e.isRegExp = isRegExp;
            e.types.isRegExp = isRegExp;
            function isObject(r) {
                return typeof r === "object" && r !== null;
            }
            e.isObject = isObject;
            function isDate(r) {
                return isObject(r) && objectToString(r) === "[object Date]";
            }
            e.isDate = isDate;
            e.types.isDate = isDate;
            function isError(r) {
                return isObject(r) && (objectToString(r) === "[object Error]" || r instanceof Error);
            }
            e.isError = isError;
            e.types.isNativeError = isError;
            function isFunction(r) {
                return typeof r === "function";
            }
            e.isFunction = isFunction;
            function isPrimitive(r) {
                return r === null || typeof r === "boolean" || typeof r === "number" || typeof r === "string" || typeof r === "symbol" || typeof r === "undefined";
            }
            e.isPrimitive = isPrimitive;
            e.isBuffer = t(369);
            function objectToString(r) {
                return Object.prototype.toString.call(r);
            }
            function pad(r) {
                return r < 10 ? "0" + r.toString(10) : r.toString(10);
            }
            var f = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
            ];
            function timestamp() {
                var r = new Date;
                var e = [
                    pad(r.getHours()),
                    pad(r.getMinutes()),
                    pad(r.getSeconds())
                ].join(":");
                return [
                    r.getDate(),
                    f[r.getMonth()],
                    e
                ].join(" ");
            }
            e.log = function() {
                console.log("%s - %s", timestamp(), e.format.apply(e, arguments));
            };
            e.inherits = t(782);
            e._extend = function(r, e) {
                if (!e || !isObject(e)) return r;
                var t = Object.keys(e);
                var o = t.length;
                while(o--){
                    r[t[o]] = e[t[o]];
                }
                return r;
            };
            function hasOwnProperty(r, e) {
                return Object.prototype.hasOwnProperty.call(r, e);
            }
            var p = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : undefined;
            e.promisify = function promisify(r) {
                if (typeof r !== "function") throw new TypeError('The "original" argument must be of type Function');
                if (p && r[p]) {
                    var e = r[p];
                    if (typeof e !== "function") {
                        throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                    }
                    Object.defineProperty(e, p, {
                        value: e,
                        enumerable: false,
                        writable: false,
                        configurable: true
                    });
                    return e;
                }
                function e() {
                    var e, t;
                    var o = new Promise(function(r, o) {
                        e = r;
                        t = o;
                    });
                    var n = [];
                    for(var i = 0; i < arguments.length; i++){
                        n.push(arguments[i]);
                    }
                    n.push(function(r, o) {
                        if (r) {
                            t(r);
                        } else {
                            e(o);
                        }
                    });
                    try {
                        r.apply(this, n);
                    } catch (r) {
                        t(r);
                    }
                    return o;
                }
                Object.setPrototypeOf(e, Object.getPrototypeOf(r));
                if (p) Object.defineProperty(e, p, {
                    value: e,
                    enumerable: false,
                    writable: false,
                    configurable: true
                });
                return Object.defineProperties(e, o(r));
            };
            e.promisify.custom = p;
            function callbackifyOnRejected(r, e) {
                if (!r) {
                    var t = new Error("Promise was rejected with a falsy value");
                    t.reason = r;
                    r = t;
                }
                return e(r);
            }
            function callbackify(r) {
                if (typeof r !== "function") {
                    throw new TypeError('The "original" argument must be of type Function');
                }
                function callbackified() {
                    var e = [];
                    for(var t = 0; t < arguments.length; t++){
                        e.push(arguments[t]);
                    }
                    var o = e.pop();
                    if (typeof o !== "function") {
                        throw new TypeError("The last argument must be of type Function");
                    }
                    var n = this;
                    var cb = function() {
                        return o.apply(n, arguments);
                    };
                    r.apply(this, e).then(function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(cb.bind(null, null, r));
                    }, function(r) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(callbackifyOnRejected.bind(null, r, cb));
                    });
                }
                Object.setPrototypeOf(callbackified, Object.getPrototypeOf(r));
                Object.defineProperties(callbackified, o(r));
                return callbackified;
            }
            e.callbackify = callbackify;
        },
        490: function(r, e, t) {
            "use strict";
            var o = t(144);
            var n = t(349);
            var i = t(256);
            var a = i("Object.prototype.toString");
            var y = t(942)();
            var f = y && typeof Symbol.toStringTag === "symbol";
            var p = n();
            var u = i("String.prototype.slice");
            var s = {};
            var c = t(24);
            var l = Object.getPrototypeOf;
            if (f && c && l) {
                o(p, function(r) {
                    if (typeof global[r] === "function") {
                        var e = new global[r];
                        if (!(Symbol.toStringTag in e)) {
                            throw new EvalError("this engine has support for Symbol.toStringTag, but " + r + " does not have the property! Please report this.");
                        }
                        var t = l(e);
                        var o = c(t, Symbol.toStringTag);
                        if (!o) {
                            var n = l(t);
                            o = c(n, Symbol.toStringTag);
                        }
                        s[r] = o.get;
                    }
                });
            }
            var d = function tryAllTypedArrays(r) {
                var e = false;
                o(s, function(t, o) {
                    if (!e) {
                        try {
                            var n = t.call(r);
                            if (n === o) {
                                e = n;
                            }
                        } catch (r) {}
                    }
                });
                return e;
            };
            var g = t(994);
            r.exports = function whichTypedArray(r) {
                if (!g(r)) {
                    return false;
                }
                if (!f) {
                    return u(a(r), 8, -1);
                }
                return d(r);
            };
        },
        349: function(r, e, t) {
            "use strict";
            var o = t(992);
            r.exports = function availableTypedArrays() {
                return o([
                    "BigInt64Array",
                    "BigUint64Array",
                    "Float32Array",
                    "Float64Array",
                    "Int16Array",
                    "Int32Array",
                    "Int8Array",
                    "Uint16Array",
                    "Uint32Array",
                    "Uint8Array",
                    "Uint8ClampedArray"
                ], function(r) {
                    return typeof global[r] === "function";
                });
            };
        },
        24: function(r, e, t) {
            "use strict";
            var o = t(500);
            var n = o("%Object.getOwnPropertyDescriptor%", true);
            if (n) {
                try {
                    n([], "length");
                } catch (r) {
                    n = null;
                }
            }
            r.exports = n;
        }
    };
    var e = {};
    function __nccwpck_require__(t) {
        var o = e[t];
        if (o !== undefined) {
            return o.exports;
        }
        var n = e[t] = {
            exports: {}
        };
        var i = true;
        try {
            r[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete e[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(177);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/https-browserify/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var r = {
        528: function(r, e, t) {
            var o = t(685);
            var a = t(310);
            var i = r.exports;
            for(var n in o){
                if (o.hasOwnProperty(n)) i[n] = o[n];
            }
            i.request = function(r, e) {
                r = validateParams(r);
                return o.request.call(this, r, e);
            };
            i.get = function(r, e) {
                r = validateParams(r);
                return o.get.call(this, r, e);
            };
            function validateParams(r) {
                if (typeof r === "string") {
                    r = a.parse(r);
                }
                if (!r.protocol) {
                    r.protocol = "https:";
                }
                if (r.protocol !== "https:") {
                    throw new Error('Protocol "' + r.protocol + '" not supported. Expected "https:"');
                }
                return r;
            }
        },
        685: function(r) {
            "use strict";
            r.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/stream-http/index.js [app-client] (ecmascript)");
        },
        310: function(r) {
            "use strict";
            r.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/native-url/index.js [app-client] (ecmascript)");
        }
    };
    var e = {};
    function __nccwpck_require__(t) {
        var o = e[t];
        if (o !== undefined) {
            return o.exports;
        }
        var a = e[t] = {
            exports: {}
        };
        var i = true;
        try {
            r[t](a, a.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete e[t];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(528);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/os-browserify/browser.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var n = {};
    !function() {
        var e = n;
        e.endianness = function() {
            return "LE";
        };
        e.hostname = function() {
            if (typeof location !== "undefined") {
                return location.hostname;
            } else return "";
        };
        e.loadavg = function() {
            return [];
        };
        e.uptime = function() {
            return 0;
        };
        e.freemem = function() {
            return Number.MAX_VALUE;
        };
        e.totalmem = function() {
            return Number.MAX_VALUE;
        };
        e.cpus = function() {
            return [];
        };
        e.type = function() {
            return "Browser";
        };
        e.release = function() {
            if (typeof navigator !== "undefined") {
                return navigator.appVersion;
            }
            return "";
        };
        e.networkInterfaces = e.getNetworkInterfaces = function() {
            return {};
        };
        e.arch = function() {
            return "javascript";
        };
        e.platform = function() {
            return "browser";
        };
        e.tmpdir = e.tmpDir = function() {
            return "/tmp";
        };
        e.EOL = "\n";
        e.homedir = function() {
            return "/";
        };
    }();
    module.exports = n;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/path-browserify/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    "use strict";
    var e = {
        114: function(e) {
            function assertPath(e) {
                if (typeof e !== "string") {
                    throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
                }
            }
            function normalizeStringPosix(e, r) {
                var t = "";
                var i = 0;
                var n = -1;
                var a = 0;
                var f;
                for(var l = 0; l <= e.length; ++l){
                    if (l < e.length) f = e.charCodeAt(l);
                    else if (f === 47) break;
                    else f = 47;
                    if (f === 47) {
                        if (n === l - 1 || a === 1) {} else if (n !== l - 1 && a === 2) {
                            if (t.length < 2 || i !== 2 || t.charCodeAt(t.length - 1) !== 46 || t.charCodeAt(t.length - 2) !== 46) {
                                if (t.length > 2) {
                                    var s = t.lastIndexOf("/");
                                    if (s !== t.length - 1) {
                                        if (s === -1) {
                                            t = "";
                                            i = 0;
                                        } else {
                                            t = t.slice(0, s);
                                            i = t.length - 1 - t.lastIndexOf("/");
                                        }
                                        n = l;
                                        a = 0;
                                        continue;
                                    }
                                } else if (t.length === 2 || t.length === 1) {
                                    t = "";
                                    i = 0;
                                    n = l;
                                    a = 0;
                                    continue;
                                }
                            }
                            if (r) {
                                if (t.length > 0) t += "/..";
                                else t = "..";
                                i = 2;
                            }
                        } else {
                            if (t.length > 0) t += "/" + e.slice(n + 1, l);
                            else t = e.slice(n + 1, l);
                            i = l - n - 1;
                        }
                        n = l;
                        a = 0;
                    } else if (f === 46 && a !== -1) {
                        ++a;
                    } else {
                        a = -1;
                    }
                }
                return t;
            }
            function _format(e, r) {
                var t = r.dir || r.root;
                var i = r.base || (r.name || "") + (r.ext || "");
                if (!t) {
                    return i;
                }
                if (t === r.root) {
                    return t + i;
                }
                return t + e + i;
            }
            var r = {
                resolve: function resolve() {
                    var e = "";
                    var r = false;
                    var t;
                    for(var i = arguments.length - 1; i >= -1 && !r; i--){
                        var n;
                        if (i >= 0) n = arguments[i];
                        else {
                            if (t === undefined) t = "";
                            n = t;
                        }
                        assertPath(n);
                        if (n.length === 0) {
                            continue;
                        }
                        e = n + "/" + e;
                        r = n.charCodeAt(0) === 47;
                    }
                    e = normalizeStringPosix(e, !r);
                    if (r) {
                        if (e.length > 0) return "/" + e;
                        else return "/";
                    } else if (e.length > 0) {
                        return e;
                    } else {
                        return ".";
                    }
                },
                normalize: function normalize(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0) === 47;
                    var t = e.charCodeAt(e.length - 1) === 47;
                    e = normalizeStringPosix(e, !r);
                    if (e.length === 0 && !r) e = ".";
                    if (e.length > 0 && t) e += "/";
                    if (r) return "/" + e;
                    return e;
                },
                isAbsolute: function isAbsolute(e) {
                    assertPath(e);
                    return e.length > 0 && e.charCodeAt(0) === 47;
                },
                join: function join() {
                    if (arguments.length === 0) return ".";
                    var e;
                    for(var t = 0; t < arguments.length; ++t){
                        var i = arguments[t];
                        assertPath(i);
                        if (i.length > 0) {
                            if (e === undefined) e = i;
                            else e += "/" + i;
                        }
                    }
                    if (e === undefined) return ".";
                    return r.normalize(e);
                },
                relative: function relative(e, t) {
                    assertPath(e);
                    assertPath(t);
                    if (e === t) return "";
                    e = r.resolve(e);
                    t = r.resolve(t);
                    if (e === t) return "";
                    var i = 1;
                    for(; i < e.length; ++i){
                        if (e.charCodeAt(i) !== 47) break;
                    }
                    var n = e.length;
                    var a = n - i;
                    var f = 1;
                    for(; f < t.length; ++f){
                        if (t.charCodeAt(f) !== 47) break;
                    }
                    var l = t.length;
                    var s = l - f;
                    var o = a < s ? a : s;
                    var u = -1;
                    var h = 0;
                    for(; h <= o; ++h){
                        if (h === o) {
                            if (s > o) {
                                if (t.charCodeAt(f + h) === 47) {
                                    return t.slice(f + h + 1);
                                } else if (h === 0) {
                                    return t.slice(f + h);
                                }
                            } else if (a > o) {
                                if (e.charCodeAt(i + h) === 47) {
                                    u = h;
                                } else if (h === 0) {
                                    u = 0;
                                }
                            }
                            break;
                        }
                        var c = e.charCodeAt(i + h);
                        var v = t.charCodeAt(f + h);
                        if (c !== v) break;
                        else if (c === 47) u = h;
                    }
                    var g = "";
                    for(h = i + u + 1; h <= n; ++h){
                        if (h === n || e.charCodeAt(h) === 47) {
                            if (g.length === 0) g += "..";
                            else g += "/..";
                        }
                    }
                    if (g.length > 0) return g + t.slice(f + u);
                    else {
                        f += u;
                        if (t.charCodeAt(f) === 47) ++f;
                        return t.slice(f);
                    }
                },
                _makeLong: function _makeLong(e) {
                    return e;
                },
                dirname: function dirname(e) {
                    assertPath(e);
                    if (e.length === 0) return ".";
                    var r = e.charCodeAt(0);
                    var t = r === 47;
                    var i = -1;
                    var n = true;
                    for(var a = e.length - 1; a >= 1; --a){
                        r = e.charCodeAt(a);
                        if (r === 47) {
                            if (!n) {
                                i = a;
                                break;
                            }
                        } else {
                            n = false;
                        }
                    }
                    if (i === -1) return t ? "/" : ".";
                    if (t && i === 1) return "//";
                    return e.slice(0, i);
                },
                basename: function basename(e, r) {
                    if (r !== undefined && typeof r !== "string") throw new TypeError('"ext" argument must be a string');
                    assertPath(e);
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a;
                    if (r !== undefined && r.length > 0 && r.length <= e.length) {
                        if (r.length === e.length && r === e) return "";
                        var f = r.length - 1;
                        var l = -1;
                        for(a = e.length - 1; a >= 0; --a){
                            var s = e.charCodeAt(a);
                            if (s === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else {
                                if (l === -1) {
                                    n = false;
                                    l = a + 1;
                                }
                                if (f >= 0) {
                                    if (s === r.charCodeAt(f)) {
                                        if (--f === -1) {
                                            i = a;
                                        }
                                    } else {
                                        f = -1;
                                        i = l;
                                    }
                                }
                            }
                        }
                        if (t === i) i = l;
                        else if (i === -1) i = e.length;
                        return e.slice(t, i);
                    } else {
                        for(a = e.length - 1; a >= 0; --a){
                            if (e.charCodeAt(a) === 47) {
                                if (!n) {
                                    t = a + 1;
                                    break;
                                }
                            } else if (i === -1) {
                                n = false;
                                i = a + 1;
                            }
                        }
                        if (i === -1) return "";
                        return e.slice(t, i);
                    }
                },
                extname: function extname(e) {
                    assertPath(e);
                    var r = -1;
                    var t = 0;
                    var i = -1;
                    var n = true;
                    var a = 0;
                    for(var f = e.length - 1; f >= 0; --f){
                        var l = e.charCodeAt(f);
                        if (l === 47) {
                            if (!n) {
                                t = f + 1;
                                break;
                            }
                            continue;
                        }
                        if (i === -1) {
                            n = false;
                            i = f + 1;
                        }
                        if (l === 46) {
                            if (r === -1) r = f;
                            else if (a !== 1) a = 1;
                        } else if (r !== -1) {
                            a = -1;
                        }
                    }
                    if (r === -1 || i === -1 || a === 0 || a === 1 && r === i - 1 && r === t + 1) {
                        return "";
                    }
                    return e.slice(r, i);
                },
                format: function format(e) {
                    if (e === null || typeof e !== "object") {
                        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    }
                    return _format("/", e);
                },
                parse: function parse(e) {
                    assertPath(e);
                    var r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (e.length === 0) return r;
                    var t = e.charCodeAt(0);
                    var i = t === 47;
                    var n;
                    if (i) {
                        r.root = "/";
                        n = 1;
                    } else {
                        n = 0;
                    }
                    var a = -1;
                    var f = 0;
                    var l = -1;
                    var s = true;
                    var o = e.length - 1;
                    var u = 0;
                    for(; o >= n; --o){
                        t = e.charCodeAt(o);
                        if (t === 47) {
                            if (!s) {
                                f = o + 1;
                                break;
                            }
                            continue;
                        }
                        if (l === -1) {
                            s = false;
                            l = o + 1;
                        }
                        if (t === 46) {
                            if (a === -1) a = o;
                            else if (u !== 1) u = 1;
                        } else if (a !== -1) {
                            u = -1;
                        }
                    }
                    if (a === -1 || l === -1 || u === 0 || u === 1 && a === l - 1 && a === f + 1) {
                        if (l !== -1) {
                            if (f === 0 && i) r.base = r.name = e.slice(1, l);
                            else r.base = r.name = e.slice(f, l);
                        }
                    } else {
                        if (f === 0 && i) {
                            r.name = e.slice(1, a);
                            r.base = e.slice(1, l);
                        } else {
                            r.name = e.slice(f, a);
                            r.base = e.slice(f, l);
                        }
                        r.ext = e.slice(a, l);
                    }
                    if (f > 0) r.dir = e.slice(0, f - 1);
                    else if (i) r.dir = "/";
                    return r;
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            r.posix = r;
            e.exports = r;
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var i = r[t];
        if (i !== undefined) {
            return i.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var a = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            a = false;
        } finally{
            if (a) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var t = __nccwpck_require__(114);
    module.exports = t;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/string_decoder/string_decoder.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var t = {
        55: function(t, e, r) {
            var n = r(300);
            var i = n.Buffer;
            function copyProps(t, e) {
                for(var r in t){
                    e[r] = t[r];
                }
            }
            if (i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow) {
                t.exports = n;
            } else {
                copyProps(n, e);
                e.Buffer = SafeBuffer;
            }
            function SafeBuffer(t, e, r) {
                return i(t, e, r);
            }
            SafeBuffer.prototype = Object.create(i.prototype);
            copyProps(i, SafeBuffer);
            SafeBuffer.from = function(t, e, r) {
                if (typeof t === "number") {
                    throw new TypeError("Argument must not be a number");
                }
                return i(t, e, r);
            };
            SafeBuffer.alloc = function(t, e, r) {
                if (typeof t !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                var n = i(t);
                if (e !== undefined) {
                    if (typeof r === "string") {
                        n.fill(e, r);
                    } else {
                        n.fill(e);
                    }
                } else {
                    n.fill(0);
                }
                return n;
            };
            SafeBuffer.allocUnsafe = function(t) {
                if (typeof t !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return i(t);
            };
            SafeBuffer.allocUnsafeSlow = function(t) {
                if (typeof t !== "number") {
                    throw new TypeError("Argument must be a number");
                }
                return n.SlowBuffer(t);
            };
        },
        300: function(t) {
            "use strict";
            t.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
        }
    };
    var e = {};
    function __nccwpck_require__(r) {
        var n = e[r];
        if (n !== undefined) {
            return n.exports;
        }
        var i = e[r] = {
            exports: {}
        };
        var s = true;
        try {
            t[r](i, i.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[r];
        }
        return i.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    !function() {
        "use strict";
        var t = r;
        var e = __nccwpck_require__(55).Buffer;
        var n = e.isEncoding || function(t) {
            t = "" + t;
            switch(t && t.toLowerCase()){
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                    return true;
                default:
                    return false;
            }
        };
        function _normalizeEncoding(t) {
            if (!t) return "utf8";
            var e;
            while(true){
                switch(t){
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return t;
                    default:
                        if (e) return;
                        t = ("" + t).toLowerCase();
                        e = true;
                }
            }
        }
        function normalizeEncoding(t) {
            var r = _normalizeEncoding(t);
            if (typeof r !== "string" && (e.isEncoding === n || !n(t))) throw new Error("Unknown encoding: " + t);
            return r || t;
        }
        t.StringDecoder = StringDecoder;
        function StringDecoder(t) {
            this.encoding = normalizeEncoding(t);
            var r;
            switch(this.encoding){
                case "utf16le":
                    this.text = utf16Text;
                    this.end = utf16End;
                    r = 4;
                    break;
                case "utf8":
                    this.fillLast = utf8FillLast;
                    r = 4;
                    break;
                case "base64":
                    this.text = base64Text;
                    this.end = base64End;
                    r = 3;
                    break;
                default:
                    this.write = simpleWrite;
                    this.end = simpleEnd;
                    return;
            }
            this.lastNeed = 0;
            this.lastTotal = 0;
            this.lastChar = e.allocUnsafe(r);
        }
        StringDecoder.prototype.write = function(t) {
            if (t.length === 0) return "";
            var e;
            var r;
            if (this.lastNeed) {
                e = this.fillLast(t);
                if (e === undefined) return "";
                r = this.lastNeed;
                this.lastNeed = 0;
            } else {
                r = 0;
            }
            if (r < t.length) return e ? e + this.text(t, r) : this.text(t, r);
            return e || "";
        };
        StringDecoder.prototype.end = utf8End;
        StringDecoder.prototype.text = utf8Text;
        StringDecoder.prototype.fillLast = function(t) {
            if (this.lastNeed <= t.length) {
                t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
            }
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length);
            this.lastNeed -= t.length;
        };
        function utf8CheckByte(t) {
            if (t <= 127) return 0;
            else if (t >> 5 === 6) return 2;
            else if (t >> 4 === 14) return 3;
            else if (t >> 3 === 30) return 4;
            return t >> 6 === 2 ? -1 : -2;
        }
        function utf8CheckIncomplete(t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var i = utf8CheckByte(e[n]);
            if (i >= 0) {
                if (i > 0) t.lastNeed = i - 1;
                return i;
            }
            if (--n < r || i === -2) return 0;
            i = utf8CheckByte(e[n]);
            if (i >= 0) {
                if (i > 0) t.lastNeed = i - 2;
                return i;
            }
            if (--n < r || i === -2) return 0;
            i = utf8CheckByte(e[n]);
            if (i >= 0) {
                if (i > 0) {
                    if (i === 2) i = 0;
                    else t.lastNeed = i - 3;
                }
                return i;
            }
            return 0;
        }
        function utf8CheckExtraBytes(t, e, r) {
            if ((e[0] & 192) !== 128) {
                t.lastNeed = 0;
                return "�";
            }
            if (t.lastNeed > 1 && e.length > 1) {
                if ((e[1] & 192) !== 128) {
                    t.lastNeed = 1;
                    return "�";
                }
                if (t.lastNeed > 2 && e.length > 2) {
                    if ((e[2] & 192) !== 128) {
                        t.lastNeed = 2;
                        return "�";
                    }
                }
            }
        }
        function utf8FillLast(t) {
            var e = this.lastTotal - this.lastNeed;
            var r = utf8CheckExtraBytes(this, t, e);
            if (r !== undefined) return r;
            if (this.lastNeed <= t.length) {
                t.copy(this.lastChar, e, 0, this.lastNeed);
                return this.lastChar.toString(this.encoding, 0, this.lastTotal);
            }
            t.copy(this.lastChar, e, 0, t.length);
            this.lastNeed -= t.length;
        }
        function utf8Text(t, e) {
            var r = utf8CheckIncomplete(this, t, e);
            if (!this.lastNeed) return t.toString("utf8", e);
            this.lastTotal = r;
            var n = t.length - (r - this.lastNeed);
            t.copy(this.lastChar, 0, n);
            return t.toString("utf8", e, n);
        }
        function utf8End(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) return e + "�";
            return e;
        }
        function utf16Text(t, e) {
            if ((t.length - e) % 2 === 0) {
                var r = t.toString("utf16le", e);
                if (r) {
                    var n = r.charCodeAt(r.length - 1);
                    if (n >= 55296 && n <= 56319) {
                        this.lastNeed = 2;
                        this.lastTotal = 4;
                        this.lastChar[0] = t[t.length - 2];
                        this.lastChar[1] = t[t.length - 1];
                        return r.slice(0, -1);
                    }
                }
                return r;
            }
            this.lastNeed = 1;
            this.lastTotal = 2;
            this.lastChar[0] = t[t.length - 1];
            return t.toString("utf16le", e, t.length - 1);
        }
        function utf16End(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) {
                var r = this.lastTotal - this.lastNeed;
                return e + this.lastChar.toString("utf16le", 0, r);
            }
            return e;
        }
        function base64Text(t, e) {
            var r = (t.length - e) % 3;
            if (r === 0) return t.toString("base64", e);
            this.lastNeed = 3 - r;
            this.lastTotal = 3;
            if (r === 1) {
                this.lastChar[0] = t[t.length - 1];
            } else {
                this.lastChar[0] = t[t.length - 2];
                this.lastChar[1] = t[t.length - 1];
            }
            return t.toString("base64", e, t.length - r);
        }
        function base64End(t) {
            var e = t && t.length ? this.write(t) : "";
            if (this.lastNeed) return e + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
            return e;
        }
        function simpleWrite(t) {
            return t.toString(this.encoding);
        }
        function simpleEnd(t) {
            return t && t.length ? this.write(t) : "";
        }
    }();
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/vm-browserify/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

(function() {
    var __webpack_modules__ = {
        950: function(__unused_webpack_module, exports) {
            var indexOf = function(e, t) {
                if (e.indexOf) return e.indexOf(t);
                else for(var r = 0; r < e.length; r++){
                    if (e[r] === t) return r;
                }
                return -1;
            };
            var Object_keys = function(e) {
                if (Object.keys) return Object.keys(e);
                else {
                    var t = [];
                    for(var r in e)t.push(r);
                    return t;
                }
            };
            var forEach = function(e, t) {
                if (e.forEach) return e.forEach(t);
                else for(var r = 0; r < e.length; r++){
                    t(e[r], r, e);
                }
            };
            var defineProp = function() {
                try {
                    Object.defineProperty({}, "_", {});
                    return function(e, t, r) {
                        Object.defineProperty(e, t, {
                            writable: true,
                            enumerable: false,
                            configurable: true,
                            value: r
                        });
                    };
                } catch (e) {
                    return function(e, t, r) {
                        e[t] = r;
                    };
                }
            }();
            var globals = [
                "Array",
                "Boolean",
                "Date",
                "Error",
                "EvalError",
                "Function",
                "Infinity",
                "JSON",
                "Math",
                "NaN",
                "Number",
                "Object",
                "RangeError",
                "ReferenceError",
                "RegExp",
                "String",
                "SyntaxError",
                "TypeError",
                "URIError",
                "decodeURI",
                "decodeURIComponent",
                "encodeURI",
                "encodeURIComponent",
                "escape",
                "eval",
                "isFinite",
                "isNaN",
                "parseFloat",
                "parseInt",
                "undefined",
                "unescape"
            ];
            function Context() {}
            Context.prototype = {};
            var Script = exports.Script = function NodeScript(e) {
                if (!(this instanceof Script)) return new Script(e);
                this.code = e;
            };
            Script.prototype.runInContext = function(e) {
                if (!(e instanceof Context)) {
                    throw new TypeError("needs a 'context' argument.");
                }
                var t = document.createElement("iframe");
                if (!t.style) t.style = {};
                t.style.display = "none";
                document.body.appendChild(t);
                var r = t.contentWindow;
                var n = r.eval, o = r.execScript;
                if (!n && o) {
                    o.call(r, "null");
                    n = r.eval;
                }
                forEach(Object_keys(e), function(t) {
                    r[t] = e[t];
                });
                forEach(globals, function(t) {
                    if (e[t]) {
                        r[t] = e[t];
                    }
                });
                var c = Object_keys(r);
                var i = n.call(r, this.code);
                forEach(Object_keys(r), function(t) {
                    if (t in e || indexOf(c, t) === -1) {
                        e[t] = r[t];
                    }
                });
                forEach(globals, function(t) {
                    if (!(t in e)) {
                        defineProp(e, t, r[t]);
                    }
                });
                document.body.removeChild(t);
                return i;
            };
            Script.prototype.runInThisContext = function() {
                return eval(this.code);
            };
            Script.prototype.runInNewContext = function(e) {
                var t = Script.createContext(e);
                var r = this.runInContext(t);
                if (e) {
                    forEach(Object_keys(t), function(r) {
                        e[r] = t[r];
                    });
                }
                return r;
            };
            forEach(Object_keys(Script.prototype), function(e) {
                exports[e] = Script[e] = function(t) {
                    var r = Script(t);
                    return r[e].apply(r, [].slice.call(arguments, 1));
                };
            });
            exports.isContext = function(e) {
                return e instanceof Context;
            };
            exports.createScript = function(e) {
                return exports.Script(e);
            };
            exports.createContext = Script.createContext = function(e) {
                var t = new Context;
                if (typeof e === "object") {
                    forEach(Object_keys(e), function(r) {
                        t[r] = e[r];
                    });
                }
                return t;
            };
        }
    };
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var __webpack_exports__ = {};
    __webpack_modules__[950](0, __webpack_exports__);
    module.exports = __webpack_exports__;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        var React = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
        // ATTENTION
        // When adding new symbols to this file,
        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
        // The Symbol used to tag the ReactElement-like types.
        var REACT_ELEMENT_TYPE = Symbol.for('react.element');
        var REACT_PORTAL_TYPE = Symbol.for('react.portal');
        var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
        var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
        var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
        var REACT_PROVIDER_TYPE = Symbol.for('react.provider'); // TODO: Delete with enableRenderableContext
        var REACT_CONSUMER_TYPE = Symbol.for('react.consumer');
        var REACT_CONTEXT_TYPE = Symbol.for('react.context');
        var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
        var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
        var REACT_MEMO_TYPE = Symbol.for('react.memo');
        var REACT_LAZY_TYPE = Symbol.for('react.lazy');
        var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
        var REACT_CACHE_TYPE = Symbol.for('react.cache');
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = '@@iterator';
        function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
                return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
                return maybeIterator;
            }
            return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            // When changing this logic, you might want to also
            // update consoleWithStackDev.www.js as well.
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                } // eslint-disable-next-line react-internal/safe-string-coercion
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                }); // Careful: RN currently depends on this prefix
                argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
                // breaks IE9: https://github.com/facebook/react/issues/13610
                // eslint-disable-next-line react-internal/no-production-logging
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        // -----------------------------------------------------------------------------
        var enableScopeAPI = false; // Experimental Create Event Handle API.
        var enableCacheElement = false;
        var enableTransitionTracing = false; // No known bugs, but needs performance testing
        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
        var enableRenderableContext = false;
        // stuff. Intended to enable React core members to more easily debug scheduling
        // issues in DEV builds.
        var enableDebugTracing = false;
        function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
                return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
        } // Keep in sync with react-reconciler/getComponentNameFromFiber
        function getContextName(type) {
            return type.displayName || 'Context';
        }
        var REACT_CLIENT_REFERENCE$2 = Symbol.for('react.client.reference'); // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
        function getComponentNameFromType(type) {
            if (type == null) {
                // Host root, text node or just invalid type.
                return null;
            }
            if (typeof type === 'function') {
                if (type.$$typeof === REACT_CLIENT_REFERENCE$2) {
                    // TODO: Create a convention for naming client references with debug info.
                    return null;
                }
                return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
                return type;
            }
            switch(type){
                case REACT_FRAGMENT_TYPE:
                    return 'Fragment';
                case REACT_PORTAL_TYPE:
                    return 'Portal';
                case REACT_PROFILER_TYPE:
                    return 'Profiler';
                case REACT_STRICT_MODE_TYPE:
                    return 'StrictMode';
                case REACT_SUSPENSE_TYPE:
                    return 'Suspense';
                case REACT_SUSPENSE_LIST_TYPE:
                    return 'SuspenseList';
                case REACT_CACHE_TYPE:
                    {
                        return 'Cache';
                    }
            }
            if (typeof type === 'object') {
                {
                    if (typeof type.tag === 'number') {
                        error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
                    }
                }
                switch(type.$$typeof){
                    case REACT_PROVIDER_TYPE:
                        {
                            var provider = type;
                            return getContextName(provider._context) + '.Provider';
                        }
                    case REACT_CONTEXT_TYPE:
                        var context = type;
                        {
                            return getContextName(context) + '.Consumer';
                        }
                    case REACT_CONSUMER_TYPE:
                        {
                            return null;
                        }
                    case REACT_FORWARD_REF_TYPE:
                        return getWrappedName(type, type.render, 'ForwardRef');
                    case REACT_MEMO_TYPE:
                        var outerName = type.displayName || null;
                        if (outerName !== null) {
                            return outerName;
                        }
                        return getComponentNameFromType(type.type) || 'Memo';
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                return getComponentNameFromType(init(payload));
                            } catch (x) {
                                return null;
                            }
                        }
                }
            }
            return null;
        }
        // $FlowFixMe[method-unbinding]
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var assign = Object.assign;
        /*
 * The `'' + value` pattern (used in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe[incompatible-return] only called in DEV, so void return is not possible.
        function typeName(value) {
            {
                // toStringTag is needed for namespaced types like Temporal.Instant
                var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
                var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object'; // $FlowFixMe[incompatible-return]
                return type;
            }
        } // $FlowFixMe[incompatible-return] only called in DEV, so void return is not possible.
        function willCoercionThrow(value) {
            {
                try {
                    testStringCoercion(value);
                    return false;
                } catch (e) {
                    return true;
                }
            }
        }
        function testStringCoercion(value) {
            // If you ended up here by following an exception call stack, here's what's
            // happened: you supplied an object or symbol value to React (as a prop, key,
            // DOM attribute, CSS property, string ref, etc.) and when React tried to
            // coerce it to a string using `'' + value`, an exception was thrown.
            //
            // The most common types that will cause this exception are `Symbol` instances
            // and Temporal objects like `Temporal.Instant`. But any object that has a
            // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
            // exception. (Library authors do this to prevent users from using built-in
            // numeric operators like `+` or comparison operators like `>=` because custom
            // methods are needed to perform accurate arithmetic or comparison.)
            //
            // To fix the problem, coerce this object or symbol value to a string before
            // passing it to React. The most reliable way is usually `String(value)`.
            //
            // To find which value is throwing, check the browser or debugger console.
            // Before this exception was thrown, there should be `console.error` output
            // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
            // problem and how that type was used: key, atrribute, input value prop, etc.
            // In most cases, this console output also shows the component and its
            // ancestor components where the exception happened.
            //
            // eslint-disable-next-line react-internal/safe-string-coercion
            return '' + value;
        }
        function checkKeyStringCoercion(value) {
            {
                if (willCoercionThrow(value)) {
                    error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before using it here.', typeName(value));
                    return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
                }
            }
        }
        var REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference');
        function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
                return true;
            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                return true;
            }
            if (typeof type === 'object' && type !== null) {
                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || enableRenderableContext || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_CLIENT_REFERENCE$1 || type.getModuleId !== undefined) {
                    return true;
                }
            }
            return false;
        }
        var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
        function isArray(a) {
            return isArrayImpl(a);
        }
        // Helpers to patch console.logs to avoid logging during side-effect free
        // replaying on render function. This currently only patches the object
        // lazily which won't cover if the log function was extracted eagerly.
        // We could also eagerly patch the method.
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {}
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
            {
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
                    prevInfo = console.info;
                    prevWarn = console.warn;
                    prevError = console.error;
                    prevGroup = console.group;
                    prevGroupCollapsed = console.groupCollapsed;
                    prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
                    var props = {
                        configurable: true,
                        enumerable: true,
                        value: disabledLog,
                        writable: true
                    }; // $FlowFixMe[cannot-write] Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        info: props,
                        log: props,
                        warn: props,
                        error: props,
                        group: props,
                        groupCollapsed: props,
                        groupEnd: props
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                disabledDepth++;
            }
        }
        function reenableLogs() {
            {
                disabledDepth--;
                if (disabledDepth === 0) {
                    /* eslint-disable react-internal/no-production-logging */ var props = {
                        configurable: true,
                        enumerable: true,
                        writable: true
                    }; // $FlowFixMe[cannot-write] Flow thinks console is immutable.
                    Object.defineProperties(console, {
                        log: assign({}, props, {
                            value: prevLog
                        }),
                        info: assign({}, props, {
                            value: prevInfo
                        }),
                        warn: assign({}, props, {
                            value: prevWarn
                        }),
                        error: assign({}, props, {
                            value: prevError
                        }),
                        group: assign({}, props, {
                            value: prevGroup
                        }),
                        groupCollapsed: assign({}, props, {
                            value: prevGroupCollapsed
                        }),
                        groupEnd: assign({}, props, {
                            value: prevGroupEnd
                        })
                    });
                /* eslint-enable react-internal/no-production-logging */ }
                if (disabledDepth < 0) {
                    error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
                }
            }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, ownerFn) {
            {
                if (prefix === undefined) {
                    // Extract the VM specific prefix used by each line.
                    try {
                        throw Error();
                    } catch (x) {
                        var match = x.stack.trim().match(/\n( *(at )?)/);
                        prefix = match && match[1] || '';
                    }
                } // We use the prefix to ensure our stacks line up with native stack frames.
                return '\n' + prefix + name;
            }
        }
        var reentry = false;
        var componentFrameCache;
        {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
        }
        /**
 * Leverages native browser/VM stack frames to get proper details (e.g.
 * filename, line + col number) for a single component in a component stack. We
 * do this by:
 *   (1) throwing and catching an error in the function - this will be our
 *       control error.
 *   (2) calling the component which will eventually throw an error that we'll
 *       catch - this will be our sample error.
 *   (3) diffing the control and sample error stacks to find the stack frame
 *       which represents our component.
 */ function describeNativeComponentFrame(fn, construct) {
            // If something asked for a stack inside a fake render, it should get ignored.
            if (!fn || reentry) {
                return '';
            }
            {
                var frame = componentFrameCache.get(fn);
                if (frame !== undefined) {
                    return frame;
                }
            }
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe[incompatible-type] It does accept undefined.
            Error.prepareStackTrace = undefined;
            var previousDispatcher;
            {
                previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
                // for warnings.
                ReactCurrentDispatcher.current = null;
                disableLogs();
            }
            /**
   * Finding a common stack frame between sample and control errors can be
   * tricky given the different types and levels of stack trace truncation from
   * different JS VMs. So instead we'll attempt to control what that common
   * frame should be through this object method:
   * Having both the sample and control errors be in the function under the
   * `DescribeNativeComponentFrameRoot` property, + setting the `name` and
   * `displayName` properties of the function ensures that a stack
   * frame exists that has the method name `DescribeNativeComponentFrameRoot` in
   * it for both control and sample stacks.
   */ var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    var control;
                    try {
                        // This should throw.
                        if (construct) {
                            // Something should be setting the props in the constructor.
                            var Fake = function() {
                                throw Error();
                            }; // $FlowFixMe[prop-missing]
                            Object.defineProperty(Fake.prototype, 'props', {
                                set: function() {
                                    // We use a throwing setter instead of frozen or non-writable props
                                    // because that won't throw in a non-strict mode function.
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === 'object' && Reflect.construct) {
                                // We construct a different control for this case to include any extra
                                // frames added by the construct call.
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                } // $FlowFixMe[prop-missing] found when upgrading Flow
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            } // TODO(luna): This will currently only throw if the function component
                            // tries to access React/ReactDOM/props. We should probably make this throw
                            // in simple components too
                            var maybePromise = fn(); // If the function component returns a promise, it's likely an async
                            // component, which we don't yet support. Attach a noop catch handler to
                            // silence the error.
                            // TODO: Implement component stacks for async client components?
                            if (maybePromise && typeof maybePromise.catch === 'function') {
                                maybePromise.catch(function() {});
                            }
                        }
                    } catch (sample) {
                        // This is inlined manually because closure doesn't do it for us.
                        if (sample && control && typeof sample.stack === 'string') {
                            return [
                                sample.stack,
                                control.stack
                            ];
                        }
                    }
                    return [
                        null,
                        null
                    ];
                }
            }; // $FlowFixMe[prop-missing]
            RunInRootFrame.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, 'name'); // Before ES6, the `name` property was not configurable.
            if (namePropDescriptor && namePropDescriptor.configurable) {
                // V8 utilizes a function's `name` property when generating a stack trace.
                Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, // is set to `false`.
                // $FlowFixMe[cannot-write]
                'name', {
                    value: 'DetermineComponentFrameRoot'
                });
            }
            try {
                var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
                if (sampleStack && controlStack) {
                    // This extracts the first frame from the sample that isn't also in the control.
                    // Skipping one frame that we assume is the frame that calls the two.
                    var sampleLines = sampleStack.split('\n');
                    var controlLines = controlStack.split('\n');
                    var s = 0;
                    var c = 0;
                    while(s < sampleLines.length && !sampleLines[s].includes('DetermineComponentFrameRoot')){
                        s++;
                    }
                    while(c < controlLines.length && !controlLines[c].includes('DetermineComponentFrameRoot')){
                        c++;
                    } // We couldn't find our intentionally injected common root frame, attempt
                    // to find another common root frame by search from the bottom of the
                    // control stack...
                    if (s === sampleLines.length || c === controlLines.length) {
                        s = sampleLines.length - 1;
                        c = controlLines.length - 1;
                        while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                            // We expect at least one stack frame to be shared.
                            // Typically this will be the root most one. However, stack frames may be
                            // cut off due to maximum stack limits. In this case, one maybe cut off
                            // earlier than the other. We assume that the sample is longer or the same
                            // and there for cut off earlier. So we should find the root most frame in
                            // the sample somewhere in the control.
                            c--;
                        }
                    }
                    for(; s >= 1 && c >= 0; s--, c--){
                        // Next we find the first one that isn't the same which should be the
                        // frame that called our sample function and the control.
                        if (sampleLines[s] !== controlLines[c]) {
                            // In V8, the first line is describing the message but other VMs don't.
                            // If we're about to return the first line, and the control is also on the same
                            // line, that's a pretty good indicator that our sample threw at same line as
                            // the control. I.e. before we entered the sample frame. So we ignore this result.
                            // This can happen if you passed a class to function component, or non-function.
                            if (s !== 1 || c !== 1) {
                                do {
                                    s--;
                                    c--; // We may still have similar intermediate frames from the construct call.
                                    // The next one that isn't the same should be our match though.
                                    if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                        // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                                        var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
                                        // but we have a user-provided "displayName"
                                        // splice it in to make the stack more readable.
                                        if (fn.displayName && _frame.includes('<anonymous>')) {
                                            _frame = _frame.replace('<anonymous>', fn.displayName);
                                        }
                                        if ("TURBOPACK compile-time truthy", 1) {
                                            if (typeof fn === 'function') {
                                                componentFrameCache.set(fn, _frame);
                                            }
                                        } // Return the line we found.
                                        return _frame;
                                    }
                                }while (s >= 1 && c >= 0)
                            }
                            break;
                        }
                    }
                }
            } finally{
                reentry = false;
                {
                    ReactCurrentDispatcher.current = previousDispatcher;
                    reenableLogs();
                }
                Error.prepareStackTrace = previousPrepareStackTrace;
            } // Fallback to just using the name if we couldn't make it throw.
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
            {
                if (typeof fn === 'function') {
                    componentFrameCache.set(fn, syntheticFrame);
                }
            }
            return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, ownerFn) {
            {
                return describeNativeComponentFrame(fn, false);
            }
        }
        function shouldConstruct(Component) {
            var prototype = Component.prototype;
            return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, ownerFn) {
            if (type == null) {
                return '';
            }
            if (typeof type === 'function') {
                {
                    return describeNativeComponentFrame(type, shouldConstruct(type));
                }
            }
            if (typeof type === 'string') {
                return describeBuiltInComponentFrame(type);
            }
            switch(type){
                case REACT_SUSPENSE_TYPE:
                    return describeBuiltInComponentFrame('Suspense');
                case REACT_SUSPENSE_LIST_TYPE:
                    return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
                switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                        return describeFunctionComponentFrame(type.render);
                    case REACT_MEMO_TYPE:
                        // Memo may contain any component type so we recursively resolve it.
                        return describeUnknownElementTypeFrameInDEV(type.type, ownerFn);
                    case REACT_LAZY_TYPE:
                        {
                            var lazyComponent = type;
                            var payload = lazyComponent._payload;
                            var init = lazyComponent._init;
                            try {
                                // Lazy may contain any component type so we recursively resolve it.
                                return describeUnknownElementTypeFrameInDEV(init(payload), ownerFn);
                            } catch (x) {}
                        }
                }
            }
            return '';
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference');
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
            didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
            {
                if (hasOwnProperty.call(config, 'ref')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.ref !== undefined;
        }
        function hasValidKey(config) {
            {
                if (hasOwnProperty.call(config, 'key')) {
                    var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                    if (getter && getter.isReactWarning) {
                        return false;
                    }
                }
            }
            return config.key !== undefined;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
            {
                if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
                    var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (!didWarnAboutStringRefs[componentName]) {
                        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                        didWarnAboutStringRefs[componentName] = true;
                    }
                }
            }
        }
        function defineKeyPropWarningGetter(props, displayName) {
            {
                var warnAboutAccessingKey = function() {
                    if (!specialPropKeyWarningShown) {
                        specialPropKeyWarningShown = true;
                        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                    }
                };
                warnAboutAccessingKey.isReactWarning = true;
                Object.defineProperty(props, 'key', {
                    get: warnAboutAccessingKey,
                    configurable: true
                });
            }
        }
        function defineRefPropWarningGetter(props, displayName) {
            {
                {
                    var warnAboutAccessingRef = function() {
                        if (!specialPropRefWarningShown) {
                            specialPropRefWarningShown = true;
                            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = true;
                    Object.defineProperty(props, 'ref', {
                        get: warnAboutAccessingRef,
                        configurable: true
                    });
                }
            }
        }
        /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ function ReactElement(type, key, _ref, self, source, owner, props) {
            var ref;
            {
                ref = _ref;
            }
            var element;
            {
                // In prod, `ref` is a regular property. It will be removed in a
                // future release.
                element = {
                    // This tag allows us to uniquely identify this as a React Element
                    $$typeof: REACT_ELEMENT_TYPE,
                    // Built-in properties that belong on the element
                    type: type,
                    key: key,
                    ref: ref,
                    props: props,
                    // Record the component responsible for creating this element.
                    _owner: owner
                };
            }
            {
                // The validation flag is currently mutative. We put it on
                // an external backing store so that we can freeze the whole object.
                // This can be replaced with a WeakMap once they are implemented in
                // commonly used development environments.
                element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
                // the validation flag non-enumerable (where possible, which should
                // include every environment we run tests in), so the test framework
                // ignores it.
                Object.defineProperty(element._store, 'validated', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: false
                }); // debugInfo contains Server Component debug information.
                Object.defineProperty(element, '_debugInfo', {
                    configurable: false,
                    enumerable: false,
                    writable: true,
                    value: null
                });
                if (Object.freeze) {
                    Object.freeze(element.props);
                    Object.freeze(element);
                }
            }
            return element;
        }
        var didWarnAboutKeySpread = {};
        /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV$1(type, config, maybeKey, isStaticChildren, source, self) {
            {
                if (!isValidElementType(type)) {
                    // This is an invalid element type.
                    //
                    // We warn in this case but don't throw. We expect the element creation to
                    // succeed and there will likely be errors in render.
                    var info = '';
                    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
                        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
                    }
                    var typeString;
                    if (type === null) {
                        typeString = 'null';
                    } else if (isArray(type)) {
                        typeString = 'array';
                    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
                        info = ' Did you accidentally export a JSX literal instead of a component?';
                    } else {
                        typeString = typeof type;
                    }
                    error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
                } else {
                    // This is a valid element type.
                    // Skip key warning if the type isn't valid since our key validation logic
                    // doesn't expect a non-string/function type and can throw confusing
                    // errors. We don't want exception behavior to differ between dev and
                    // prod. (Rendering will throw with a helpful message and as soon as the
                    // type is fixed, the key warnings will appear.)
                    var children = config.children;
                    if (children !== undefined) {
                        if (isStaticChildren) {
                            if (isArray(children)) {
                                for(var i = 0; i < children.length; i++){
                                    validateChildKeys(children[i], type);
                                }
                                if (Object.freeze) {
                                    Object.freeze(children);
                                }
                            } else {
                                error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
                            }
                        } else {
                            validateChildKeys(children, type);
                        }
                    }
                } // Warn about key spread regardless of whether the type is valid.
                if (hasOwnProperty.call(config, 'key')) {
                    var componentName = getComponentNameFromType(type);
                    var keys = Object.keys(config).filter(function(k) {
                        return k !== 'key';
                    });
                    var beforeExample = keys.length > 0 ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}' : '{key: someKey}';
                    if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                        var afterExample = keys.length > 0 ? '{' + keys.join(': ..., ') + ': ...}' : '{}';
                        error('A props object containing a "key" prop is being spread into JSX:\n' + '  let props = %s;\n' + '  <%s {...props} />\n' + 'React keys must be passed directly to JSX without using spread:\n' + '  let props = %s;\n' + '  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                        didWarnAboutKeySpread[componentName + beforeExample] = true;
                    }
                }
                var propName; // Reserved names are extracted
                var props = {};
                var key = null;
                var ref = null; // Currently, key can be spread in as a prop. This causes a potential
                // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
                // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
                // but as an intermediary step, we will use jsxDEV for everything except
                // <div {...props} key="Hi" />, because we aren't currently able to tell if
                // key is explicitly declared to be undefined or not.
                if (maybeKey !== undefined) {
                    {
                        checkKeyStringCoercion(maybeKey);
                    }
                    key = '' + maybeKey;
                }
                if (hasValidKey(config)) {
                    {
                        checkKeyStringCoercion(config.key);
                    }
                    key = '' + config.key;
                }
                if (hasValidRef(config)) {
                    {
                        ref = config.ref;
                    }
                    warnIfStringRefCannotBeAutoConverted(config, self);
                } // Remaining properties are added to a new props object
                for(propName in config){
                    if (hasOwnProperty.call(config, propName) && // Skip over reserved prop names
                    propName !== 'key' && propName !== 'ref') {
                        props[propName] = config[propName];
                    }
                } // Resolve default props
                if (type && type.defaultProps) {
                    var defaultProps = type.defaultProps;
                    for(propName in defaultProps){
                        if (props[propName] === undefined) {
                            props[propName] = defaultProps[propName];
                        }
                    }
                }
                if (key || ref) {
                    var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
                    if (key) {
                        defineKeyPropWarningGetter(props, displayName);
                    }
                    if (ref) {
                        defineRefPropWarningGetter(props, displayName);
                    }
                }
                var element = ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                if (type === REACT_FRAGMENT_TYPE) {
                    validateFragmentProps(element);
                }
                return element;
            }
        }
        function getDeclarationErrorAddendum() {
            {
                if (ReactCurrentOwner.current) {
                    var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                    if (name) {
                        return '\n\nCheck the render method of `' + name + '`.';
                    }
                }
                return '';
            }
        }
        /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
            {
                if (typeof node !== 'object' || !node) {
                    return;
                }
                if (node.$$typeof === REACT_CLIENT_REFERENCE) ;
                else if (isArray(node)) {
                    for(var i = 0; i < node.length; i++){
                        var child = node[i];
                        if (isValidElement(child)) {
                            validateExplicitKey(child, parentType);
                        }
                    }
                } else if (isValidElement(node)) {
                    // This element was passed in a valid location.
                    if (node._store) {
                        node._store.validated = true;
                    }
                } else {
                    var iteratorFn = getIteratorFn(node);
                    if (typeof iteratorFn === 'function') {
                        // Entry iterators used to provide implicit keys,
                        // but now we print a separate warning for them later.
                        if (iteratorFn !== node.entries) {
                            var iterator = iteratorFn.call(node);
                            var step;
                            while(!(step = iterator.next()).done){
                                if (isValidElement(step.value)) {
                                    validateExplicitKey(step.value, parentType);
                                }
                            }
                        }
                    }
                }
            }
        }
        /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
            return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var ownerHasKeyUseWarning = {};
        /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
            {
                if (!element._store || element._store.validated || element.key != null) {
                    return;
                }
                element._store.validated = true;
                var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                    return;
                }
                ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
                // property, it may be the creator of the child that's responsible for
                // assigning it a key.
                var childOwner = '';
                if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                    // Give the component that originally created this child.
                    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                }
                setCurrentlyValidatingElement(element);
                error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                setCurrentlyValidatingElement(null);
            }
        }
        function setCurrentlyValidatingElement(element) {
            {
                if (element) {
                    var owner = element._owner;
                    var stack = describeUnknownElementTypeFrameInDEV(element.type, owner ? owner.type : null);
                    ReactDebugCurrentFrame.setExtraStackFrame(stack);
                } else {
                    ReactDebugCurrentFrame.setExtraStackFrame(null);
                }
            }
        }
        function getCurrentComponentErrorInfo(parentType) {
            {
                var info = getDeclarationErrorAddendum();
                if (!info) {
                    var parentName = getComponentNameFromType(parentType);
                    if (parentName) {
                        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                    }
                }
                return info;
            }
        }
        /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
            // TODO: Move this to render phase instead of at element creation.
            {
                var keys = Object.keys(fragment.props);
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    if (key !== 'children' && key !== 'key') {
                        setCurrentlyValidatingElement(fragment);
                        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
                        setCurrentlyValidatingElement(null);
                        break;
                    }
                }
                if (fragment.ref !== null) {
                    setCurrentlyValidatingElement(fragment);
                    error('Invalid attribute `ref` supplied to `React.Fragment`.');
                    setCurrentlyValidatingElement(null);
                }
            }
        }
        var jsxDEV = jsxDEV$1;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = jsxDEV;
    })();
}

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$11_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@14.2.11_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}

}.call(this) }),
}]);

//# sourceMappingURL=772f5_next_dist_compiled_b60d61._.js.map