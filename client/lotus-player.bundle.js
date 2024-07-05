/*!For license information please see lotus-player.bundle.js.LICENSE.txt*/ ! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(self, (() => (() => {
    var e = {
            9350: e => {
                var t;
                window, t = function() {
                    return function(e) {
                        var t = {};

                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var i = t[r] = {
                                i: r,
                                l: !1,
                                exports: {}
                            };
                            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
                        }
                        return n.m = e, n.c = t, n.d = function(e, t, r) {
                            n.o(e, t) || Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r
                            })
                        }, n.r = function(e) {
                            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module"
                            }), Object.defineProperty(e, "__esModule", {
                                value: !0
                            })
                        }, n.t = function(e, t) {
                            if (1 & t && (e = n(e)), 8 & t) return e;
                            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                            var r = Object.create(null);
                            if (n.r(r), Object.defineProperty(r, "default", {
                                    enumerable: !0,
                                    value: e
                                }), 2 & t && "string" != typeof e)
                                for (var i in e) n.d(r, i, function(t) {
                                    return e[t]
                                }.bind(null, i));
                            return r
                        }, n.n = function(e) {
                            var t = e && e.__esModule ? function() {
                                return e.default
                            } : function() {
                                return e
                            };
                            return n.d(t, "a", t), t
                        }, n.o = function(e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }, n.p = "", n(n.s = 42)
                    }([function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = function() {};
                        t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        n.r(t), n.d(t, "__extends", (function() {
                            return i
                        })), n.d(t, "__assign", (function() {
                            return s
                        })), n.d(t, "__rest", (function() {
                            return o
                        })), n.d(t, "__decorate", (function() {
                            return a
                        })), n.d(t, "__param", (function() {
                            return u
                        })), n.d(t, "__metadata", (function() {
                            return l
                        })), n.d(t, "__awaiter", (function() {
                            return c
                        })), n.d(t, "__generator", (function() {
                            return f
                        })), n.d(t, "__createBinding", (function() {
                            return d
                        })), n.d(t, "__exportStar", (function() {
                            return h
                        })), n.d(t, "__values", (function() {
                            return p
                        })), n.d(t, "__read", (function() {
                            return g
                        })), n.d(t, "__spread", (function() {
                            return m
                        })), n.d(t, "__spreadArrays", (function() {
                            return y
                        })), n.d(t, "__spreadArray", (function() {
                            return v
                        })), n.d(t, "__await", (function() {
                            return _
                        })), n.d(t, "__asyncGenerator", (function() {
                            return b
                        })), n.d(t, "__asyncDelegator", (function() {
                            return w
                        })), n.d(t, "__asyncValues", (function() {
                            return C
                        })), n.d(t, "__makeTemplateObject", (function() {
                            return R
                        })), n.d(t, "__importStar", (function() {
                            return O
                        })), n.d(t, "__importDefault", (function() {
                            return S
                        })), n.d(t, "__classPrivateFieldGet", (function() {
                            return A
                        })), n.d(t, "__classPrivateFieldSet", (function() {
                            return L
                        }));
                        var r = function(e, t) {
                            return r = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(e, t) {
                                e.__proto__ = t
                            } || function(e, t) {
                                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                            }, r(e, t)
                        };

                        function i(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function n() {
                                this.constructor = e
                            }
                            r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                        }
                        var s = function() {
                            return s = Object.assign || function(e) {
                                for (var t, n = 1, r = arguments.length; n < r; n++)
                                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                return e
                            }, s.apply(this, arguments)
                        };

                        function o(e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var i = 0;
                                for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                            }
                            return n
                        }

                        function a(e, t, n, r) {
                            var i, s = arguments.length,
                                o = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r);
                            else
                                for (var a = e.length - 1; a >= 0; a--)(i = e[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(t, n, o) : i(t, n)) || o);
                            return s > 3 && o && Object.defineProperty(t, n, o), o
                        }

                        function u(e, t) {
                            return function(n, r) {
                                t(n, r, e)
                            }
                        }

                        function l(e, t) {
                            if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                        }

                        function c(e, t, n, r) {
                            return new(n || (n = Promise))((function(i, s) {
                                function o(e) {
                                    try {
                                        u(r.next(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function a(e) {
                                    try {
                                        u(r.throw(e))
                                    } catch (e) {
                                        s(e)
                                    }
                                }

                                function u(e) {
                                    var t;
                                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                                        e(t)
                                    }))).then(o, a)
                                }
                                u((r = r.apply(e, t || [])).next())
                            }))
                        }

                        function f(e, t) {
                            var n, r, i, s, o = {
                                label: 0,
                                sent: function() {
                                    if (1 & i[0]) throw i[1];
                                    return i[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return s = {
                                next: a(0),
                                throw: a(1),
                                return: a(2)
                            }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                                return this
                            }), s;

                            function a(s) {
                                return function(a) {
                                    return function(s) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; o;) try {
                                            if (n = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, s[1])).done) return i;
                                            switch (r = 0, i && (s = [2 & s[0], i.value]), s[0]) {
                                                case 0:
                                                case 1:
                                                    i = s;
                                                    break;
                                                case 4:
                                                    return o.label++, {
                                                        value: s[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    o.label++, r = s[1], s = [0];
                                                    continue;
                                                case 7:
                                                    s = o.ops.pop(), o.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((i = (i = o.trys).length > 0 && i[i.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                                        o = 0;
                                                        continue
                                                    }
                                                    if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
                                                        o.label = s[1];
                                                        break
                                                    }
                                                    if (6 === s[0] && o.label < i[1]) {
                                                        o.label = i[1], i = s;
                                                        break
                                                    }
                                                    if (i && o.label < i[2]) {
                                                        o.label = i[2], o.ops.push(s);
                                                        break
                                                    }
                                                    i[2] && o.ops.pop(), o.trys.pop();
                                                    continue
                                            }
                                            s = t.call(e, o)
                                        } catch (e) {
                                            s = [6, e], r = 0
                                        } finally {
                                            n = i = 0
                                        }
                                        if (5 & s[0]) throw s[1];
                                        return {
                                            value: s[0] ? s[1] : void 0,
                                            done: !0
                                        }
                                    }([s, a])
                                }
                            }
                        }
                        var d = Object.create ? function(e, t, n, r) {
                            void 0 === r && (r = n), Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: function() {
                                    return t[n]
                                }
                            })
                        } : function(e, t, n, r) {
                            void 0 === r && (r = n), e[r] = t[n]
                        };

                        function h(e, t) {
                            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || d(t, e, n)
                        }

                        function p(e) {
                            var t = "function" == typeof Symbol && Symbol.iterator,
                                n = t && e[t],
                                r = 0;
                            if (n) return n.call(e);
                            if (e && "number" == typeof e.length) return {
                                next: function() {
                                    return e && r >= e.length && (e = void 0), {
                                        value: e && e[r++],
                                        done: !e
                                    }
                                }
                            };
                            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                        }

                        function g(e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, i, s = n.call(e),
                                o = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = s.next()).done;) o.push(r.value)
                            } catch (e) {
                                i = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = s.return) && n.call(s)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                            return o
                        }

                        function m() {
                            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                            return e
                        }

                        function y() {
                            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                            var r = Array(e),
                                i = 0;
                            for (t = 0; t < n; t++)
                                for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++) r[i] = s[o];
                            return r
                        }

                        function v(e, t, n) {
                            if (n || 2 === arguments.length)
                                for (var r, i = 0, s = t.length; i < s; i++) !r && i in t || (r || (r = Array.prototype.slice.call(t, 0, i)), r[i] = t[i]);
                            return e.concat(r || Array.prototype.slice.call(t))
                        }

                        function _(e) {
                            return this instanceof _ ? (this.v = e, this) : new _(e)
                        }

                        function b(e, t, n) {
                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                            var r, i = n.apply(e, t || []),
                                s = [];
                            return r = {}, o("next"), o("throw"), o("return"), r[Symbol.asyncIterator] = function() {
                                return this
                            }, r;

                            function o(e) {
                                i[e] && (r[e] = function(t) {
                                    return new Promise((function(n, r) {
                                        s.push([e, t, n, r]) > 1 || a(e, t)
                                    }))
                                })
                            }

                            function a(e, t) {
                                try {
                                    (n = i[e](t)).value instanceof _ ? Promise.resolve(n.value.v).then(u, l) : c(s[0][2], n)
                                } catch (e) {
                                    c(s[0][3], e)
                                }
                                var n
                            }

                            function u(e) {
                                a("next", e)
                            }

                            function l(e) {
                                a("throw", e)
                            }

                            function c(e, t) {
                                e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                            }
                        }

                        function w(e) {
                            var t, n;
                            return t = {}, r("next"), r("throw", (function(e) {
                                throw e
                            })), r("return"), t[Symbol.iterator] = function() {
                                return this
                            }, t;

                            function r(r, i) {
                                t[r] = e[r] ? function(t) {
                                    return (n = !n) ? {
                                        value: _(e[r](t)),
                                        done: "return" === r
                                    } : i ? i(t) : t
                                } : i
                            }
                        }

                        function C(e) {
                            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                            var t, n = e[Symbol.asyncIterator];
                            return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                                return this
                            }, t);

                            function r(n) {
                                t[n] = e[n] && function(t) {
                                    return new Promise((function(r, i) {
                                        ! function(e, t, n, r) {
                                            Promise.resolve(r).then((function(t) {
                                                e({
                                                    value: t,
                                                    done: n
                                                })
                                            }), t)
                                        }(r, i, (t = e[n](t)).done, t.value)
                                    }))
                                }
                            }
                        }

                        function R(e, t) {
                            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                                value: t
                            }) : e.raw = t, e
                        }
                        var T = Object.create ? function(e, t) {
                            Object.defineProperty(e, "default", {
                                enumerable: !0,
                                value: t
                            })
                        } : function(e, t) {
                            e.default = t
                        };

                        function O(e) {
                            if (e && e.__esModule) return e;
                            var t = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && d(t, e, n);
                            return T(t, e), t
                        }

                        function S(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }

                        function A(e, t, n, r) {
                            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
                            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
                        }

                        function L(e, t, n, r, i) {
                            if ("m" === r) throw new TypeError("Private method is not writable");
                            if ("a" === r && !i) throw new TypeError("Private accessor was defined without a setter");
                            if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                            return "a" === r ? i.call(e, n) : i ? i.value = n : t.set(e, n), n
                        }
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            t.__esModule = !0, t.allToUpperCase = t.allToLowerCase = t.encodeBody = t.decodeBody = t.Format = t.promisify = t.trim = t.arrChooseN = t.randomHexString = t.randomString = t.cheapRandStr = t.dataSizeBytes = t.inspectBody = t.inspectError = t.isErrorInfo = t.now = t.parseQueryString = t.toQueryString = t.arrPopRandomElement = t.defaultPostHeaders = t.defaultGetHeaders = t.allSame = t.arrEvery = t.arrFilter = t.arrMap = t.safeArrForEach = t.arrForEach = t.forInOwnNonNullProperties = t.valuesArray = t.keysArray = t.arrWithoutValue = t.arrDeleteValue = t.arrIn = t.arrIndexOf = t.arrSubtract = t.arrIntersectOb = t.arrIntersect = t.intersect = t.containsValue = t.inherits = t.prototypicalClone = t.shallowClone = t.isEmptyArg = t.isOnlyPropIn = t.isEmpty = t.isObject = t.ensureArray = t.isArray = t.copy = t.mixin = void 0, t.getGlobalObject = t.getJitterCoefficient = t.getBackoffCoefficient = void 0;
                            var r = n(1),
                                i = r.__importDefault(n(0)),
                                s = r.__importStar(n(8));

                            function o(e) {
                                return Math.floor(Math.random() * e.length)
                            }

                            function a(e) {
                                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                for (var r = 0; r < t.length; r++) {
                                    var i = t[r];
                                    if (!i) break;
                                    var s = Object.prototype.hasOwnProperty;
                                    for (var o in i) s && !s.call(i, o) || (e[o] = i[o])
                                }
                                return e
                            }

                            function u(e) {
                                return null == e
                            }

                            function l(e, t) {
                                var n = function() {};
                                n.prototype = e;
                                var r = new n;
                                return t && a(r, t), r
                            }

                            function c(e, n) {
                                for (var r = [], i = 0; i < e.length; i++) {
                                    var s = e[i]; - 1 != (0, t.arrIndexOf)(n, s) && r.push(s)
                                }
                                return r
                            }

                            function f(e, t) {
                                for (var n = [], r = 0; r < e.length; r++) {
                                    var i = e[r];
                                    i in t && n.push(i)
                                }
                                return n
                            }

                            function d(e, n) {
                                var r = (0, t.arrIndexOf)(e, n),
                                    i = -1 != r;
                                return i && e.splice(r, 1), i
                            }
                            t.mixin = a, t.copy = function(e) {
                                return a({}, e)
                            }, t.isArray = Array.isArray || function(e) {
                                return "[object Array]" == Object.prototype.toString.call(e)
                            }, t.ensureArray = function(e) {
                                return u(e) ? [] : (0, t.isArray)(e) ? e : [e]
                            }, t.isObject = function(e) {
                                return "[object Object]" == Object.prototype.toString.call(e)
                            }, t.isEmpty = function(e) {
                                for (var t in e) return !1;
                                return !0
                            }, t.isOnlyPropIn = function(e, t) {
                                for (var n in e)
                                    if (n !== t) return !1;
                                return !0
                            }, t.isEmptyArg = u, t.shallowClone = function(e) {
                                var t = new Object;
                                for (var n in e) t[n] = e[n];
                                return t
                            }, t.prototypicalClone = l, t.inherits = function(e, t) {
                                i.default.Config.inherits ? i.default.Config.inherits(e, t) : (e.super_ = t, e.prototype = l(t.prototype, {
                                    constructor: e
                                }))
                            }, t.containsValue = function(e, t) {
                                for (var n in e)
                                    if (e[n] == t) return !0;
                                return !1
                            }, t.intersect = function(e, n) {
                                return (0, t.isArray)(n) ? c(e, n) : f(e, n)
                            }, t.arrIntersect = c, t.arrIntersectOb = f, t.arrSubtract = function(e, n) {
                                for (var r = [], i = 0; i < e.length; i++) {
                                    var s = e[i]; - 1 == (0, t.arrIndexOf)(n, s) && r.push(s)
                                }
                                return r
                            }, t.arrIndexOf = Array.prototype.indexOf ? function(e, t, n) {
                                return e.indexOf(t, n)
                            } : function(e, t, n) {
                                n = n || 0;
                                for (var r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1
                            }, t.arrIn = function(e, n) {
                                return -1 !== (0, t.arrIndexOf)(e, n)
                            }, t.arrDeleteValue = d, t.arrWithoutValue = function(e, t) {
                                var n = e.slice();
                                return d(n, t), n
                            }, t.keysArray = function(e, t) {
                                var n = [];
                                for (var r in e) t && !Object.prototype.hasOwnProperty.call(e, r) || n.push(r);
                                return n
                            }, t.valuesArray = function(e, t) {
                                var n = [];
                                for (var r in e) t && !Object.prototype.hasOwnProperty.call(e, r) || n.push(e[r]);
                                return n
                            }, t.forInOwnNonNullProperties = function(e, t) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && e[n] && t(n)
                            }, t.arrForEach = Array.prototype.forEach ? function(e, t) {
                                e.forEach(t)
                            } : function(e, t) {
                                for (var n = e.length, r = 0; r < n; r++) t(e[r], r, e)
                            }, t.safeArrForEach = function(e, n) {
                                return (0, t.arrForEach)(e.slice(), n)
                            }, t.arrMap = Array.prototype.map ? function(e, t) {
                                return e.map(t)
                            } : function(e, t) {
                                for (var n = [], r = e.length, i = 0; i < r; i++) n.push(t(e[i], i, e));
                                return n
                            }, t.arrFilter = Array.prototype.filter ? function(e, t) {
                                return e.filter(t)
                            } : function(e, t) {
                                for (var n = [], r = e.length, i = 0; i < r; i++) t(e[i]) && n.push(e[i]);
                                return n
                            }, t.arrEvery = Array.prototype.every ? function(e, t) {
                                return e.every(t)
                            } : function(e, t) {
                                for (var n = e.length, r = 0; r < n; r++)
                                    if (!t(e[r], r, e)) return !1;
                                return !0
                            }, t.allSame = function(e, n) {
                                if (0 === e.length) return !0;
                                var r = e[0][n];
                                return (0, t.arrEvery)(e, (function(e) {
                                    return e[n] === r
                                }))
                            };
                            var h, p = {
                                json: "application/json",
                                jsonp: "application/javascript",
                                xml: "application/xml",
                                html: "text/html",
                                msgpack: "application/x-msgpack"
                            };

                            function g(e) {
                                return e.splice(o(e), 1)[0]
                            }
                            t.defaultGetHeaders = function(e, t) {
                                    return {
                                        accept: p[t || h.json],
                                        "X-Ably-Version": s.default.apiVersion,
                                        "Ably-Agent": (0, s.getAgentString)(e)
                                    }
                                }, t.defaultPostHeaders = function(e, t) {
                                    var n;
                                    return {
                                        accept: n = p[t || h.json],
                                        "content-type": n,
                                        "X-Ably-Version": s.default.apiVersion,
                                        "Ably-Agent": (0, s.getAgentString)(e)
                                    }
                                }, t.arrPopRandomElement = g, t.toQueryString = function(e) {
                                    var t = [];
                                    if (e)
                                        for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                                    return t.length ? "?" + t.join("&") : ""
                                }, t.parseQueryString = function(e) {
                                    for (var t, n = /([^?&=]+)=?([^&]*)/g, r = {}; t = n.exec(e);) r[decodeURIComponent(t[1])] = decodeURIComponent(t[2]);
                                    return r
                                }, t.now = Date.now || function() {
                                    return (new Date).getTime()
                                }, t.isErrorInfo = function(e) {
                                    return "object" == typeof e && null !== e && "ErrorInfo" == e.constructor.name
                                }, t.inspectError = function(e) {
                                    var t;
                                    return e instanceof Error || "ErrorInfo" === (null === (t = null == e ? void 0 : e.constructor) || void 0 === t ? void 0 : t.name) ? i.default.Config.inspect(e) : e.toString()
                                }, t.inspectBody = function(e) {
                                    return i.default.BufferUtils.isBuffer(e) ? e.toString() : "string" == typeof e ? e : i.default.Config.inspect(e)
                                }, t.dataSizeBytes = function(e) {
                                    if (i.default.BufferUtils.isBuffer(e)) return i.default.BufferUtils.byteLength(e);
                                    if ("string" == typeof e) return i.default.Config.stringByteSize(e);
                                    throw new Error("Expected input of Utils.dataSizeBytes to be a buffer or string, but was: " + typeof e)
                                }, t.cheapRandStr = function() {
                                    return String(Math.random()).substr(2)
                                }, t.randomString = function(e) {
                                    if (i.default.Config.getRandomValues && "undefined" != typeof Uint8Array) {
                                        var t = new Uint8Array(e);
                                        return i.default.Config.getRandomValues(t), i.default.BufferUtils.base64Encode(t)
                                    }
                                    for (var n = i.default.BufferUtils.base64CharSet, r = Math.round(4 * e / 3), s = "", a = 0; a < r; a++) s += n[o(n)];
                                    return s
                                }, t.randomHexString = function(e) {
                                    if (i.default.Config.getRandomValues && "undefined" != typeof Uint8Array) {
                                        var t = new Uint8Array(e);
                                        return i.default.Config.getRandomValues(t), i.default.BufferUtils.hexEncode(t)
                                    }
                                    for (var n = i.default.BufferUtils.hexCharSet, r = 2 * e, s = "", a = 0; a < r; a++) s += n[o(n)];
                                    return s
                                }, t.arrChooseN = function(e, t) {
                                    for (var n = Math.min(t, e.length), r = e.slice(), i = [], s = 0; s < n; s++) i.push(g(r));
                                    return i
                                }, t.trim = String.prototype.trim ? function(e) {
                                    return e.trim()
                                } : function(e) {
                                    return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                }, t.promisify = function(e, t, n) {
                                    return new Promise((function(i, s) {
                                        e[t].apply(e, r.__spreadArray(r.__spreadArray([], n, !1), [function(e, t) {
                                            e ? s(e) : i(t)
                                        }], !1))
                                    }))
                                },
                                function(e) {
                                    e.msgpack = "msgpack", e.json = "json"
                                }(h = t.Format || (t.Format = {})), t.decodeBody = function(e, t) {
                                    return "msgpack" == t ? i.default.Config.msgpack.decode(e) : JSON.parse(String(e))
                                }, t.encodeBody = function(e, t) {
                                    return "msgpack" == t ? i.default.Config.msgpack.encode(e, !0) : JSON.stringify(e)
                                }, t.allToLowerCase = function(e) {
                                    return e.map((function(e) {
                                        return e && e.toLowerCase()
                                    }))
                                }, t.allToUpperCase = function(e) {
                                    return e.map((function(e) {
                                        return e && e.toUpperCase()
                                    }))
                                }, t.getBackoffCoefficient = function(e) {
                                    return Math.min((e + 2) / 3, 2)
                                }, t.getJitterCoefficient = function() {
                                    return 1 - .2 * Math.random()
                                }, t.getGlobalObject = function() {
                                    return e || ("undefined" != typeof window ? window : self)
                                }
                        }).call(this, n(12))
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            t.__esModule = !0;
                            var r, i = n(1).__importDefault(n(0)),
                                s = e || ("undefined" != typeof window ? window : self);

                            function o(e, t) {
                                return "".concat(e).padStart(t ? 3 : 2, "0")
                            }

                            function a(e) {
                                return i.default.Config.logTimestamps ? function(t) {
                                    var n = new Date;
                                    e(o(n.getHours()) + ":" + o(n.getMinutes()) + ":" + o(n.getSeconds()) + "." + o(n.getMilliseconds(), 1) + " " + t)
                                } : e
                            }! function(e) {
                                e[e.None = 0] = "None", e[e.Error = 1] = "Error", e[e.Major = 2] = "Major", e[e.Minor = 3] = "Minor", e[e.Micro = 4] = "Micro"
                            }(r || (r = {}));
                            var u = function() {
                                function e() {
                                    e.logLevel = e.LOG_DEFAULT
                                }
                                return e.initLogHandlers = function() {
                                    var e = function() {
                                            var e, t, n, r;
                                            return "undefined" == typeof Window && "undefined" == typeof WorkerGlobalScope || "function" == typeof(null === (t = null === (e = null == s ? void 0 : s.console) || void 0 === e ? void 0 : e.log) || void 0 === t ? void 0 : t.apply) ? (n = function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                console.log.apply(console, e)
                                            }, r = console.warn ? function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                console.warn.apply(console, e)
                                            } : n) : n = r = (null == s ? void 0 : s.console.log) ? function() {
                                                Function.prototype.apply.call(console.log, console, arguments)
                                            } : function() {}, [n, r].map(a)
                                        }(),
                                        t = e[0],
                                        n = e[1];
                                    this.logHandler = t, this.logErrorHandler = n
                                }, e.logLevel = r.Error, e.LOG_NONE = r.None, e.LOG_ERROR = r.Error, e.LOG_MAJOR = r.Major, e.LOG_MINOR = r.Minor, e.LOG_MICRO = r.Micro, e.LOG_DEFAULT = r.Error, e.LOG_DEBUG = r.Micro, e.logAction = function(t, n, i) {
                                    e.shouldLog(t) && (t === r.Error ? e.logErrorHandler : e.logHandler)("Ably: " + n + ": " + i)
                                }, e.deprecated = function(t, n) {
                                    e.deprecatedWithMsg(t, "Please use '" + n + "' instead.")
                                }, e.deprecatedWithMsg = function(t, n) {
                                    e.shouldLog(r.Error) && e.logErrorHandler("Ably: Deprecation warning - '" + t + "' is deprecated and will be removed from a future version. " + n)
                                }, e.shouldLog = function(t) {
                                    return t <= e.logLevel
                                }, e.setLog = function(t, n) {
                                    void 0 !== t && (e.logLevel = t), void 0 !== n && (e.logHandler = e.logErrorHandler = n)
                                }, e
                            }();
                            t.default = u
                        }).call(this, n(12))
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function() {
                            if ("function" == typeof ArrayBuffer) {
                                var e = r.lib.WordArray,
                                    t = e.init,
                                    n = e.init = function(e) {
                                        if (e instanceof ArrayBuffer && (e = new Uint8Array(e)), (e instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && e instanceof Uint8ClampedArray || e instanceof Int16Array || e instanceof Uint16Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array) && (e = new Uint8Array(e.buffer, e.byteOffset, e.byteLength)), e instanceof Uint8Array) {
                                            for (var n = e.byteLength, r = [], i = 0; i < n; i++) r[i >>> 2] |= e[i] << 24 - i % 4 * 8;
                                            t.call(this, r, n)
                                        } else t.apply(this, arguments)
                                    };
                                n.prototype = e
                            }
                        }(), r.lib.WordArray)
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(0)),
                            s = r.__importStar(n(2)),
                            o = function() {
                                function e(e, t, n, r) {
                                    this.message = e, this.code = t, this.statusCode = n, this.cause = r
                                }
                                return e.prototype.toString = function() {
                                    var e = "[" + this.constructor.name;
                                    return this.message && (e += ": " + this.message), this.statusCode && (e += "; statusCode=" + this.statusCode), this.code && (e += "; code=" + this.code), this.cause && (e += "; cause=" + s.inspectError(this.cause)), !this.href || this.message && this.message.indexOf("help.ably.io") > -1 || (e += "; see " + this.href + " "), e += "]"
                                }, e.fromValues = function(t) {
                                    var n = t,
                                        r = n.message,
                                        s = n.code,
                                        o = n.statusCode;
                                    if ("string" != typeof r || "number" != typeof s || "number" != typeof o) throw new Error("ErrorInfo.fromValues(): invalid values: " + i.default.Config.inspect(t));
                                    var a = Object.assign(new e(r, s, o), t);
                                    return a.code && !a.href && (a.href = "https://help.ably.io/error/" + a.code), a
                                }, e
                            }();
                        t.default = o
                    }, function(e, t, n) {
                        (function(t) {
                            var r;
                            e.exports = (r = r || function(e, r) {
                                var i;
                                if ("undefined" != typeof window && window.crypto && (i = window.crypto), !i && "undefined" != typeof window && window.msCrypto && (i = window.msCrypto), !i && void 0 !== t && t.crypto && (i = t.crypto), !i) try {
                                    i = n(45)
                                } catch (e) {}
                                var s = function() {
                                        if (i) {
                                            if ("function" == typeof i.getRandomValues) try {
                                                return i.getRandomValues(new Uint32Array(1))[0]
                                            } catch (e) {}
                                            if ("function" == typeof i.randomBytes) try {
                                                return i.randomBytes(4).readInt32LE()
                                            } catch (e) {}
                                        }
                                        throw new Error("Native crypto module could not be used to get secure random number.")
                                    },
                                    o = Object.create || function() {
                                        function e() {}
                                        return function(t) {
                                            var n;
                                            return e.prototype = t, n = new e, e.prototype = null, n
                                        }
                                    }(),
                                    a = {},
                                    u = a.lib = {},
                                    l = u.Base = {
                                        extend: function(e) {
                                            var t = o(this);
                                            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                                t.$super.init.apply(this, arguments)
                                            }), t.init.prototype = t, t.$super = this, t
                                        },
                                        create: function() {
                                            var e = this.extend();
                                            return e.init.apply(e, arguments), e
                                        },
                                        init: function() {},
                                        mixIn: function(e) {
                                            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                                            e.hasOwnProperty("toString") && (this.toString = e.toString)
                                        },
                                        clone: function() {
                                            return this.init.prototype.extend(this)
                                        }
                                    },
                                    c = u.WordArray = l.extend({
                                        init: function(e, t) {
                                            e = this.words = e || [], this.sigBytes = t != r ? t : 4 * e.length
                                        },
                                        toString: function(e) {
                                            return (e || d).stringify(this)
                                        },
                                        concat: function(e) {
                                            var t = this.words,
                                                n = e.words,
                                                r = this.sigBytes,
                                                i = e.sigBytes;
                                            if (this.clamp(), r % 4)
                                                for (var s = 0; s < i; s++) {
                                                    var o = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;
                                                    t[r + s >>> 2] |= o << 24 - (r + s) % 4 * 8
                                                } else
                                                    for (s = 0; s < i; s += 4) t[r + s >>> 2] = n[s >>> 2];
                                            return this.sigBytes += i, this
                                        },
                                        clamp: function() {
                                            var t = this.words,
                                                n = this.sigBytes;
                                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4)
                                        },
                                        clone: function() {
                                            var e = l.clone.call(this);
                                            return e.words = this.words.slice(0), e
                                        },
                                        random: function(e) {
                                            for (var t = [], n = 0; n < e; n += 4) t.push(s());
                                            return new c.init(t, e)
                                        }
                                    }),
                                    f = a.enc = {},
                                    d = f.Hex = {
                                        stringify: function(e) {
                                            for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                                                var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                                r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16))
                                            }
                                            return r.join("")
                                        },
                                        parse: function(e) {
                                            for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                                            return new c.init(n, t / 2)
                                        }
                                    },
                                    h = f.Latin1 = {
                                        stringify: function(e) {
                                            for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i++) {
                                                var s = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                                r.push(String.fromCharCode(s))
                                            }
                                            return r.join("")
                                        },
                                        parse: function(e) {
                                            for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                                            return new c.init(n, t)
                                        }
                                    },
                                    p = f.Utf8 = {
                                        stringify: function(e) {
                                            try {
                                                return decodeURIComponent(escape(h.stringify(e)))
                                            } catch (e) {
                                                throw new Error("Malformed UTF-8 data")
                                            }
                                        },
                                        parse: function(e) {
                                            return h.parse(unescape(encodeURIComponent(e)))
                                        }
                                    },
                                    g = u.BufferedBlockAlgorithm = l.extend({
                                        reset: function() {
                                            this._data = new c.init, this._nDataBytes = 0
                                        },
                                        _append: function(e) {
                                            "string" == typeof e && (e = p.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
                                        },
                                        _process: function(t) {
                                            var n, r = this._data,
                                                i = r.words,
                                                s = r.sigBytes,
                                                o = this.blockSize,
                                                a = s / (4 * o),
                                                u = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,
                                                l = e.min(4 * u, s);
                                            if (u) {
                                                for (var f = 0; f < u; f += o) this._doProcessBlock(i, f);
                                                n = i.splice(0, u), r.sigBytes -= l
                                            }
                                            return new c.init(n, l)
                                        },
                                        clone: function() {
                                            var e = l.clone.call(this);
                                            return e._data = this._data.clone(), e
                                        },
                                        _minBufferSize: 0
                                    }),
                                    m = (u.Hasher = g.extend({
                                        cfg: l.extend(),
                                        init: function(e) {
                                            this.cfg = this.cfg.extend(e), this.reset()
                                        },
                                        reset: function() {
                                            g.reset.call(this), this._doReset()
                                        },
                                        update: function(e) {
                                            return this._append(e), this._process(), this
                                        },
                                        finalize: function(e) {
                                            return e && this._append(e), this._doFinalize()
                                        },
                                        blockSize: 16,
                                        _createHelper: function(e) {
                                            return function(t, n) {
                                                return new e.init(n).finalize(t)
                                            }
                                        },
                                        _createHmacHelper: function(e) {
                                            return function(t, n) {
                                                return new m.HMAC.init(e, n).finalize(t)
                                            }
                                        }
                                    }), a.algo = {});
                                return a
                            }(Math), r)
                        }).call(this, n(12))
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(3)),
                            o = r.__importDefault(n(0));

                        function a(e, t, n) {
                            try {
                                t.apply(e, n)
                            } catch (e) {
                                s.default.logAction(s.default.LOG_ERROR, "EventEmitter.emit()", "Unexpected listener exception: " + e + "; stack = " + (e && e.stack))
                            }
                        }

                        function u(e, t, n) {
                            for (var r, s, o, a = 0; a < e.length; a++)
                                if (r = e[a], n && (r = r[n]), i.isArray(r)) {
                                    for (; - 1 !== (s = i.arrIndexOf(r, t));) r.splice(s, 1);
                                    n && 0 === r.length && delete e[a][n]
                                } else if (i.isObject(r))
                                for (o in r) Object.prototype.hasOwnProperty.call(r, o) && i.isArray(r[o]) && u([r], t, o)
                        }
                        var l = function() {
                            function e() {
                                this.any = [], this.events = Object.create(null), this.anyOnce = [], this.eventsOnce = Object.create(null)
                            }
                            return e.prototype.on = function() {
                                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                if (1 === t.length) {
                                    var r = t[0];
                                    if ("function" != typeof r) throw new Error("EventListener.on(): Invalid arguments: " + o.default.Config.inspect(t));
                                    this.any.push(r)
                                }
                                if (2 === t.length) {
                                    var s = t[0],
                                        a = t[1];
                                    if ("function" != typeof a) throw new Error("EventListener.on(): Invalid arguments: " + o.default.Config.inspect(t));
                                    if (i.isEmptyArg(s)) this.any.push(a);
                                    else if (i.isArray(s)) s.forEach((function(t) {
                                        e.on(t, a)
                                    }));
                                    else {
                                        if ("string" != typeof s) throw new Error("EventListener.on(): Invalid arguments: " + o.default.Config.inspect(t));
                                        var u = this.events[s] || (this.events[s] = []);
                                        u.push(a)
                                    }
                                }
                            }, e.prototype.off = function() {
                                for (var e, t = this, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                if (0 == n.length || i.isEmptyArg(n[0]) && i.isEmptyArg(n[1])) return this.any = [], this.events = Object.create(null), this.anyOnce = [], void(this.eventsOnce = Object.create(null));
                                var s = n[0],
                                    a = n[1],
                                    l = null,
                                    c = null;
                                if (1 !== n.length && a) {
                                    if ("function" != typeof a) throw new Error("EventEmitter.off(): invalid arguments:" + o.default.Config.inspect(n));
                                    c = (e = [s, a])[0], l = e[1]
                                } else "function" == typeof s ? l = s : c = s;
                                if (l && i.isEmptyArg(c)) u([this.any, this.events, this.anyOnce, this.eventsOnce], l);
                                else if (i.isArray(c)) c.forEach((function(e) {
                                    t.off(e, l)
                                }));
                                else {
                                    if ("string" != typeof c) throw new Error("EventEmitter.off(): invalid arguments:" + o.default.Config.inspect(n));
                                    l ? u([this.events, this.eventsOnce], l, c) : (delete this.events[c], delete this.eventsOnce[c])
                                }
                            }, e.prototype.listeners = function(e) {
                                if (e) {
                                    var t = this.events[e] || [];
                                    return this.eventsOnce[e] && Array.prototype.push.apply(t, this.eventsOnce[e]), t.length ? t : null
                                }
                                return this.any.length ? this.any : null
                            }, e.prototype.emit = function(e) {
                                for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                                var r = {
                                        event: e
                                    },
                                    s = [];
                                this.anyOnce.length && (Array.prototype.push.apply(s, this.anyOnce), this.anyOnce = []), this.any.length && Array.prototype.push.apply(s, this.any);
                                var o = this.eventsOnce[e];
                                o && (Array.prototype.push.apply(s, o), delete this.eventsOnce[e]);
                                var u = this.events[e];
                                u && Array.prototype.push.apply(s, u), i.arrForEach(s, (function(e) {
                                    a(r, e, t)
                                }))
                            }, e.prototype.once = function() {
                                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var r = t.length;
                                if ((0 === r || 1 === r && "function" != typeof t[0]) && o.default.Config.Promise) {
                                    var s = t[0];
                                    return new o.default.Config.Promise((function(t) {
                                        e.once(s, t)
                                    }))
                                }
                                var a = t[0],
                                    u = t[1];
                                if (1 === t.length && "function" == typeof a) this.anyOnce.push(a);
                                else if (i.isEmptyArg(a)) {
                                    if ("function" != typeof u) throw new Error("EventEmitter.once(): Invalid arguments:" + o.default.Config.inspect(t));
                                    this.anyOnce.push(u)
                                } else if (i.isArray(a)) {
                                    var l = this,
                                        c = function() {
                                            var e = Array.prototype.slice.call(arguments);
                                            if (i.arrForEach(a, (function(e) {
                                                    l.off(e, c)
                                                })), "function" != typeof u) throw new Error("EventEmitter.once(): Invalid arguments:" + o.default.Config.inspect(t));
                                            u.apply(this, e)
                                        };
                                    i.arrForEach(a, (function(e) {
                                        l.on(e, c)
                                    }))
                                } else {
                                    if ("string" != typeof a) throw new Error("EventEmitter.once(): Invalid arguments:" + o.default.Config.inspect(t));
                                    var f = this.eventsOnce[a] || (this.eventsOnce[a] = []);
                                    if (u) {
                                        if ("function" != typeof u) throw new Error("EventEmitter.once(): Invalid arguments:" + o.default.Config.inspect(t));
                                        f.push(u)
                                    }
                                }
                            }, e.prototype.whenState = function(t, n, r) {
                                for (var i = this, s = [], u = 3; u < arguments.length; u++) s[u - 3] = arguments[u];
                                var l = {
                                    event: t
                                };
                                if ("string" != typeof t || "string" != typeof n) throw "whenState requires a valid event String argument";
                                if ("function" != typeof r && o.default.Config.Promise) return new o.default.Config.Promise((function(r) {
                                    e.prototype.whenState.apply(i, [t, n, r].concat(s))
                                }));
                                t === n ? a(l, r, s) : this.once(t, r)
                            }, e
                        }();
                        t.default = l
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0, t.getDefaults = t.normaliseOptions = t.objectifyOptions = t.getAgentString = t.getHosts = t.getFallbackHosts = t.environmentFallbackHosts = t.getHttpScheme = t.getPort = t.getHost = void 0;
                        var r = n(1),
                            i = r.__importDefault(n(0)),
                            s = r.__importStar(n(2)),
                            o = r.__importDefault(n(3)),
                            a = r.__importDefault(n(5)),
                            u = n(43),
                            l = "ably-js/" + u.version,
                            c = {
                                ENVIRONMENT: "",
                                REST_HOST: "rest.ably.io",
                                REALTIME_HOST: "realtime.ably.io",
                                FALLBACK_HOSTS: ["A.ably-realtime.com", "B.ably-realtime.com", "C.ably-realtime.com", "D.ably-realtime.com", "E.ably-realtime2.com"],
                                PORT: 80,
                                TLS_PORT: 443,
                                TIMEOUTS: {
                                    disconnectedRetryTimeout: 15e3,
                                    suspendedRetryTimeout: 3e4,
                                    httpRequestTimeout: 15e3,
                                    channelRetryTimeout: 15e3,
                                    fallbackRetryTimeout: 6e5,
                                    connectionStateTtl: 12e4,
                                    realtimeRequestTimeout: 1e4,
                                    recvTimeout: 9e4,
                                    preferenceConnectTimeout: 6e3,
                                    parallelUpgradeDelay: 6e3
                                },
                                httpMaxRetryCount: 3,
                                maxMessageSize: 65536,
                                version: u.version,
                                apiVersion: "1.2",
                                agent: l,
                                getHost: f,
                                getPort: d,
                                getHttpScheme: h,
                                environmentFallbackHosts: p,
                                getFallbackHosts: g,
                                getHosts: m,
                                checkHost: y,
                                objectifyOptions: v,
                                normaliseOptions: _
                            };

                        function f(e, t, n) {
                            return t = n ? t == e.restHost && e.realtimeHost || t || e.realtimeHost : t || e.restHost
                        }

                        function d(e, t) {
                            return t || e.tls ? e.tlsPort : e.port
                        }

                        function h(e) {
                            return e.tls ? "https://" : "http://"
                        }

                        function p(e) {
                            return [e + "-a-fallback.ably-realtime.com", e + "-b-fallback.ably-realtime.com", e + "-c-fallback.ably-realtime.com", e + "-d-fallback.ably-realtime.com", e + "-e-fallback.ably-realtime.com"]
                        }

                        function g(e) {
                            var t = e.fallbackHosts,
                                n = void 0 !== e.httpMaxRetryCount ? e.httpMaxRetryCount : c.httpMaxRetryCount;
                            return t ? s.arrChooseN(t, n) : []
                        }

                        function m(e) {
                            return [e.restHost].concat(g(e))
                        }

                        function y(e) {
                            if ("string" != typeof e) throw new a.default("host must be a string; was a " + typeof e, 4e4, 400);
                            if (!e.length) throw new a.default("host must not be zero-length", 4e4, 400)
                        }

                        function v(e) {
                            return "string" == typeof e ? -1 == e.indexOf(":") ? {
                                token: e
                            } : {
                                key: e
                            } : e
                        }

                        function _(e) {
                            if (e.host && (o.default.deprecated("host", "restHost"), e.restHost = e.host), e.wsHost && (o.default.deprecated("wsHost", "realtimeHost"), e.realtimeHost = e.wsHost), e.queueEvents && (o.default.deprecated("queueEvents", "queueMessages"), e.queueMessages = e.queueEvents), e.fallbackHostsUseDefault) {
                                if (e.fallbackHosts) {
                                    var t = "fallbackHosts and fallbackHostsUseDefault cannot both be set";
                                    throw o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", t), new a.default(t, 4e4, 400)
                                }
                                if (e.port || e.tlsPort) throw t = "fallbackHostsUseDefault cannot be set when port or tlsPort are set", o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", t), new a.default(t, 4e4, 400);
                                e.environment ? o.default.deprecatedWithMsg("fallbackHostsUseDefault", "There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.") : o.default.deprecated("fallbackHostsUseDefault", "fallbackHosts: Ably.Defaults.FALLBACK_HOSTS"), e.fallbackHosts = c.FALLBACK_HOSTS
                            }!0 === e.recover && (o.default.deprecated("{recover: true}", "{recover: function(lastConnectionDetails, cb) { cb(true); }}"), e.recover = function(e, t) {
                                t(!0)
                            }), "function" == typeof e.recover && !0 === e.closeOnUnload && (o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", "closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter"), e.recover = void 0), "closeOnUnload" in e || (e.closeOnUnload = !e.recover), e.transports && s.arrIn(e.transports, "xhr") && (o.default.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]'), s.arrDeleteValue(e.transports, "xhr"), e.transports.push("xhr_streaming")), "queueMessages" in e || (e.queueMessages = !0);
                            var n = e.environment && String(e.environment).toLowerCase() || c.ENVIRONMENT,
                                u = !n || "production" === n;
                            e.fallbackHosts || e.restHost || e.realtimeHost || e.port || e.tlsPort || (e.fallbackHosts = u ? c.FALLBACK_HOSTS : p(n));
                            var l = e.restHost || (u ? c.REST_HOST : n + "-" + c.REST_HOST),
                                f = function(e, t, n) {
                                    return e.realtimeHost ? e.realtimeHost : e.restHost ? (o.default.logAction(o.default.LOG_MINOR, "Defaults.normaliseOptions", 'restHost is set to "' + e.restHost + '" but realtimeHost is not set, so setting realtimeHost to "' + e.restHost + '" too. If this is not what you want, please set realtimeHost explicitly.'), e.restHost) : t ? c.REALTIME_HOST : n + "-" + c.REALTIME_HOST
                                }(e, u, n);
                            s.arrForEach((e.fallbackHosts || []).concat(l, f), y), e.port = e.port || c.PORT, e.tlsPort = e.tlsPort || c.TLS_PORT, "tls" in e || (e.tls = !0);
                            var d = function(e) {
                                var t = {};
                                for (var n in c.TIMEOUTS) t[n] = e[n] || c.TIMEOUTS[n];
                                return t
                            }(e);
                            e.useBinaryProtocol = "useBinaryProtocol" in e ? i.default.Config.supportsBinary && e.useBinaryProtocol : i.default.Config.preferBinary, e.clientId && ((e.headers = e.headers || {})["X-Ably-ClientId"] = i.default.BufferUtils.base64Encode(i.default.BufferUtils.utf8Encode(e.clientId))), "idempotentRestPublishing" in e || (e.idempotentRestPublishing = !0), e.promises && !i.default.Config.Promise && (o.default.logAction(o.default.LOG_ERROR, "Defaults.normaliseOptions", "{promises: true} was specified, but no Promise constructor found; disabling promises"), e.promises = !1);
                            var h = null,
                                g = e.connectivityCheckUrl;
                            if (e.connectivityCheckUrl) {
                                var m = e.connectivityCheckUrl.split("?"),
                                    v = m[0],
                                    _ = m[1];
                                h = _ ? s.parseQueryString(_) : {}, -1 === v.indexOf("://") && (v = "https://" + v), g = v
                            }
                            return r.__assign(r.__assign({}, e), {
                                useBinaryProtocol: "useBinaryProtocol" in e ? i.default.Config.supportsBinary && e.useBinaryProtocol : i.default.Config.preferBinary,
                                realtimeHost: f,
                                restHost: l,
                                maxMessageSize: e.maxMessageSize || c.maxMessageSize,
                                timeouts: d,
                                connectivityCheckParams: h,
                                connectivityCheckUrl: g
                            })
                        }
                        t.getHost = f, t.getPort = d, t.getHttpScheme = h, t.environmentFallbackHosts = p, t.getFallbackHosts = g, t.getHosts = m, t.getAgentString = function(e) {
                            var t = c.agent;
                            if (e.agents)
                                for (var n in e.agents) t += " " + n + "/" + e.agents[n];
                            return t
                        }, t.objectifyOptions = v, t.normaliseOptions = _, t.default = c, t.getDefaults = function(e) {
                            return Object.assign(c, e)
                        }
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(0)),
                            s = r.__importDefault(n(3)),
                            o = r.__importDefault(n(5)),
                            a = r.__importStar(n(2));

                        function u(e) {
                            if (e && e.cipher && !e.cipher.channelCipher) {
                                if (!i.default.Crypto) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                                var t = i.default.Crypto.getCipher(e.cipher);
                                return {
                                    cipher: t.cipherParams,
                                    channelCipher: t.cipher
                                }
                            }
                            return e
                        }

                        function l(e) {
                            var t = 0;
                            return e.name && (t += e.name.length), e.clientId && (t += e.clientId.length), e.extras && (t += JSON.stringify(e.extras).length), e.data && (t += a.dataSizeBytes(e.data)), t
                        }
                        var c = function() {
                            function e() {}
                            return e.prototype.toJSON = function() {
                                var e = this.encoding,
                                    t = this.data;
                                return t && i.default.BufferUtils.isBuffer(t) && (arguments.length > 0 ? (e = e ? e + "/base64" : "base64", t = i.default.BufferUtils.base64Encode(t)) : t = i.default.BufferUtils.toBuffer(t)), {
                                    name: this.name,
                                    id: this.id,
                                    clientId: this.clientId,
                                    connectionId: this.connectionId,
                                    connectionKey: this.connectionKey,
                                    extras: this.extras,
                                    encoding: e,
                                    data: t
                                }
                            }, e.prototype.toString = function() {
                                var e = "[Message";
                                return this.name && (e += "; name=" + this.name), this.id && (e += "; id=" + this.id), this.timestamp && (e += "; timestamp=" + this.timestamp), this.clientId && (e += "; clientId=" + this.clientId), this.connectionId && (e += "; connectionId=" + this.connectionId), this.encoding && (e += "; encoding=" + this.encoding), this.extras && (e += "; extras =" + JSON.stringify(this.extras)), this.data && ("string" == typeof this.data ? e += "; data=" + this.data : i.default.BufferUtils.isBuffer(this.data) ? e += "; data (buffer)=" + i.default.BufferUtils.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data)), this.extras && (e += "; extras=" + JSON.stringify(this.extras)), e += "]"
                            }, e.encrypt = function(e, t, n) {
                                var r = e.data,
                                    s = e.encoding,
                                    o = t.channelCipher;
                                s = s ? s + "/" : "", i.default.BufferUtils.isBuffer(r) || (r = i.default.BufferUtils.utf8Encode(String(r)), s += "utf-8/"), o.encrypt(r, (function(t, r) {
                                    t ? n(t) : (e.data = r, e.encoding = s + "cipher+" + o.algorithm, n(null, e))
                                }))
                            }, e.encode = function(t, n, r) {
                                var s = t.data;
                                if ("string" != typeof s && !i.default.BufferUtils.isBuffer(s) && null != s) {
                                    if (!a.isObject(s) && !a.isArray(s)) throw new o.default("Data type is unsupported", 40013, 400);
                                    t.data = JSON.stringify(s), t.encoding = t.encoding ? t.encoding + "/json" : "json"
                                }
                                null != n && n.cipher ? e.encrypt(t, n, r) : r(null, t)
                            }, e.encodeArray = function(t, n, r) {
                                for (var i = 0, s = 0; s < t.length; s++) e.encode(t[s], n, (function(e) {
                                    e ? r(e) : ++i == t.length && r(null, t)
                                }))
                            }, e.decode = function(e, t) {
                                var n = function(e) {
                                        return e && e.channelOptions ? e : {
                                            channelOptions: e,
                                            plugins: {},
                                            baseEncodedPreviousPayload: void 0
                                        }
                                    }(t),
                                    r = e.data,
                                    s = e.encoding;
                                if (s) {
                                    var a = s.split("/"),
                                        u = void 0,
                                        l = a.length,
                                        c = e.data,
                                        f = "";
                                    try {
                                        for (;
                                            (u = l) > 0;) {
                                            var d = a[--l].match(/([-\w]+)(\+([\w-]+))?/);
                                            if (!d) break;
                                            switch (f = d[1]) {
                                                case "base64":
                                                    c = i.default.BufferUtils.base64Decode(String(c)), u == a.length && (r = c);
                                                    continue;
                                                case "utf-8":
                                                    c = i.default.BufferUtils.utf8Decode(c);
                                                    continue;
                                                case "json":
                                                    c = JSON.parse(c);
                                                    continue;
                                                case "cipher":
                                                    if (null != n.channelOptions && n.channelOptions.cipher && n.channelOptions.channelCipher) {
                                                        var h = d[3],
                                                            p = n.channelOptions.channelCipher;
                                                        if (h != p.algorithm) throw new Error("Unable to decrypt message with given cipher; incompatible cipher params");
                                                        c = p.decrypt(c);
                                                        continue
                                                    }
                                                    throw new Error("Unable to decrypt message; not an encrypted channel");
                                                case "vcdiff":
                                                    if (!n.plugins || !n.plugins.vcdiff) throw new o.default("Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)", 40019, 400);
                                                    if ("undefined" == typeof Uint8Array) throw new o.default("Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)", 40020, 400);
                                                    try {
                                                        var g = n.baseEncodedPreviousPayload;
                                                        "string" == typeof g && (g = i.default.BufferUtils.utf8Encode(g)), g = i.default.BufferUtils.toBuffer(g), c = i.default.BufferUtils.toBuffer(c), r = c = i.default.BufferUtils.typedArrayToBuffer(n.plugins.vcdiff.decode(c, g))
                                                    } catch (e) {
                                                        throw new o.default("Vcdiff delta decode failed with " + e, 40018, 400)
                                                    }
                                                    continue;
                                                default:
                                                    throw new Error("Unknown encoding")
                                            }
                                        }
                                    } catch (e) {
                                        var m = e;
                                        throw new o.default("Error processing the " + f + " encoding, decoder returned â€˜" + m.message + "â€™", m.code || 40013, 400)
                                    } finally {
                                        e.encoding = u <= 0 ? null : a.slice(0, u).join("/"), e.data = c
                                    }
                                }
                                n.baseEncodedPreviousPayload = r
                            }, e.fromResponseBody = function(t, n, r) {
                                r && (t = a.decodeBody(t, r));
                                for (var i = 0; i < t.length; i++) {
                                    var o = t[i] = e.fromValues(t[i]);
                                    try {
                                        e.decode(o, n)
                                    } catch (e) {
                                        s.default.logAction(s.default.LOG_ERROR, "Message.fromResponseBody()", e.toString())
                                    }
                                }
                                return t
                            }, e.fromValues = function(t) {
                                return Object.assign(new e, t)
                            }, e.fromValuesArray = function(t) {
                                for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                                return r
                            }, e.fromEncoded = function(t, n) {
                                var r = e.fromValues(t),
                                    i = u(n);
                                try {
                                    e.decode(r, i)
                                } catch (e) {
                                    s.default.logAction(s.default.LOG_ERROR, "Message.fromEncoded()", e.toString())
                                }
                                return r
                            }, e.fromEncodedArray = function(t, n) {
                                return u(n), t.map((function(t) {
                                    return e.fromEncoded(t, n)
                                }))
                            }, e.getMessagesSize = function(e) {
                                for (var t, n = 0, r = 0; r < e.length; r++) n += (t = e[r]).size || (t.size = l(t));
                                return n
                            }, e.serialize = a.encodeBody, e
                        }();
                        t.default = c
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(5)),
                            o = r.__importDefault(n(9)),
                            a = r.__importDefault(n(14)),
                            u = {
                                HEARTBEAT: 0,
                                ACK: 1,
                                NACK: 2,
                                CONNECT: 3,
                                CONNECTED: 4,
                                DISCONNECT: 5,
                                DISCONNECTED: 6,
                                CLOSE: 7,
                                CLOSED: 8,
                                ERROR: 9,
                                ATTACH: 10,
                                ATTACHED: 11,
                                DETACH: 12,
                                DETACHED: 13,
                                PRESENCE: 14,
                                MESSAGE: 15,
                                SYNC: 16,
                                AUTH: 17
                            },
                            l = [];
                        Object.keys(u).forEach((function(e) {
                            l[u[e]] = e
                        }));
                        var c = {
                                HAS_PRESENCE: 1,
                                HAS_BACKLOG: 2,
                                RESUMED: 4,
                                TRANSIENT: 16,
                                ATTACH_RESUME: 32,
                                PRESENCE: 65536,
                                PUBLISH: 1 << 17,
                                SUBSCRIBE: 1 << 18,
                                PRESENCE_SUBSCRIBE: 1 << 19
                            },
                            f = Object.keys(c);

                        function d(e) {
                            var t = [];
                            if (e)
                                for (var n = 0; n < e.length; n++) t.push(e[n].toString());
                            return "[ " + t.join(", ") + " ]"
                        }
                        c.MODE_ALL = c.PRESENCE | c.PUBLISH | c.SUBSCRIBE | c.PRESENCE_SUBSCRIBE;
                        var h = "id channel channelSerial connectionId connectionKey connectionSerial count msgSerial timestamp".split(" "),
                            p = function() {
                                function e() {
                                    var e = this;
                                    this.hasFlag = function(t) {
                                        return (e.flags & c[t]) > 0
                                    }
                                }
                                return e.prototype.setFlag = function(e) {
                                    return this.flags = this.flags | c[e]
                                }, e.prototype.getMode = function() {
                                    return this.flags && this.flags & c.MODE_ALL
                                }, e.prototype.encodeModesToFlags = function(e) {
                                    var t = this;
                                    e.forEach((function(e) {
                                        return t.setFlag(e)
                                    }))
                                }, e.prototype.decodeModesFromFlags = function() {
                                    var t = this,
                                        n = [];
                                    return e.channelModes.forEach((function(e) {
                                        t.hasFlag(e) && n.push(e)
                                    })), n.length > 0 ? n : void 0
                                }, e.fromValues = function(t) {
                                    return Object.assign(new e, t)
                                }, e.Action = u, e.channelModes = ["PRESENCE", "PUBLISH", "SUBSCRIBE", "PRESENCE_SUBSCRIBE"], e.ActionName = l, e.serialize = i.encodeBody, e.deserialize = function(t, n) {
                                    var r = i.decodeBody(t, n);
                                    return e.fromDeserialized(r)
                                }, e.fromDeserialized = function(t) {
                                    var n = t.error;
                                    n && (t.error = s.default.fromValues(n));
                                    var r = t.messages;
                                    if (r)
                                        for (var i = 0; i < r.length; i++) r[i] = o.default.fromValues(r[i]);
                                    var u = t.presence;
                                    if (u)
                                        for (i = 0; i < u.length; i++) u[i] = a.default.fromValues(u[i], !0);
                                    return Object.assign(new e, t)
                                }, e.stringify = function(t) {
                                    var n, r = "[ProtocolMessage";
                                    void 0 !== t.action && (r += "; action=" + e.ActionName[t.action] || 0);
                                    for (var u = 0; u < h.length; u++) n = h[u], void 0 !== t[n] && (r += "; " + n + "=" + t[n]);
                                    if (t.messages && (r += "; messages=" + d(o.default.fromValuesArray(t.messages))), t.presence && (r += "; presence=" + d(a.default.fromValuesArray(t.presence))), t.error && (r += "; error=" + s.default.fromValues(t.error).toString()), t.auth && t.auth.accessToken && (r += "; token=" + t.auth.accessToken), t.flags && (r += "; flags=" + f.filter(t.hasFlag).join(",")), t.params) {
                                        var l = "";
                                        i.forInOwnNonNullProperties(t.params, (function(e) {
                                            l.length > 0 && (l += "; "), l += e + "=" + t.params[e]
                                        })), l.length > 0 && (r += "; params=[" + l + "]")
                                    }
                                    return r += "]"
                                }, e.isDuplicate = function(e, t) {
                                    if (e && t && (e.action === u.MESSAGE || e.action === u.PRESENCE) && e.action === t.action && e.channel === t.channel && e.id === t.id) {
                                        if (e.action === u.PRESENCE) return !0;
                                        if (e.messages.length === t.messages.length) {
                                            for (var n = 0; n < e.messages.length; n++) {
                                                var r = e.messages[n],
                                                    i = t.messages[n];
                                                if ((r.extras && r.extras.delta && r.extras.delta.format) !== (i.extras && i.extras.delta && i.extras.delta.format)) return !1
                                            }
                                            return !0
                                        }
                                    }
                                    return !1
                                }, e
                            }();
                        t.default = p
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(10)),
                            o = r.__importDefault(n(26)),
                            a = r.__importDefault(n(3)),
                            u = r.__importDefault(n(8)),
                            l = r.__importDefault(n(19)),
                            c = r.__importDefault(n(16)),
                            f = r.__importDefault(n(5)),
                            d = r.__importDefault(n(20)),
                            h = r.__importDefault(n(0));

                        function p(e) {
                            return function(e) {
                                return !!e.code && !c.default.isTokenErr(e) && (!!i.arrIn([80015, 80017, 80030], e.code) || e.code >= 4e4 && e.code < 5e4)
                            }(e) ? [s.default.fromValues({
                                action: s.default.Action.ERROR,
                                error: e
                            })] : [s.default.fromValues({
                                action: s.default.Action.DISCONNECTED,
                                error: e
                            })]
                        }
                        var g = function(e) {
                            function t(t, n, r) {
                                var i = e.call(this, t, n, r, !0) || this;
                                return i.onAuthUpdated = function(e) {
                                    i.authParams = {
                                        access_token: e.token
                                    }
                                }, i.stream = !("stream" in r) || r.stream, i.sendRequest = null, i.recvRequest = null, i.pendingCallback = null, i.pendingItems = null, i
                            }
                            return r.__extends(t, e), t.prototype.connect = function() {
                                var e = this;
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.connect()", "starting"), o.default.prototype.connect.call(this);
                                var t = this.params,
                                    n = t.options,
                                    r = u.default.getHost(n, t.host),
                                    s = u.default.getPort(n),
                                    l = n.tls ? "https://" : "http://";
                                this.baseUri = l + r + ":" + s + "/comet/";
                                var c = this.baseUri + "connect";
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.connect()", "uri: " + c), this.auth.getAuthParams((function(t, n) {
                                    if (t) e.disconnect(t);
                                    else if (!e.isDisposed) {
                                        e.authParams = n;
                                        var r = e.params.getConnectParams(n);
                                        "stream" in r && (e.stream = r.stream), a.default.logAction(a.default.LOG_MINOR, "CometTransport.connect()", "connectParams:" + i.toQueryString(r));
                                        var s = !1,
                                            o = e.recvRequest = e.createRequest(c, null, r, null, e.stream ? d.default.REQ_RECV_STREAM : d.default.REQ_RECV);
                                        o.on("data", (function(t) {
                                            e.recvRequest && (s || (s = !0, e.emit("preconnect")), e.onData(t))
                                        })), o.on("complete", (function(t) {
                                            e.recvRequest || (t = t || new f.default("Request cancelled", 80003, 400)), e.recvRequest = null, s || t || (s = !0, e.emit("preconnect")), e.onActivity(), t ? t.code ? e.onData(p(t)) : e.disconnect(t) : h.default.Config.nextTick((function() {
                                                e.recv()
                                            }))
                                        })), o.exec()
                                    }
                                }))
                            }, t.prototype.requestClose = function() {
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.requestClose()"), this._requestCloseOrDisconnect(!0)
                            }, t.prototype.requestDisconnect = function() {
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.requestDisconnect()"), this._requestCloseOrDisconnect(!1)
                            }, t.prototype._requestCloseOrDisconnect = function(e) {
                                var t = this,
                                    n = e ? this.closeUri : this.disconnectUri;
                                if (n) {
                                    var r = this.createRequest(n, null, this.authParams, null, d.default.REQ_SEND);
                                    r.on("complete", (function(n) {
                                        n && (a.default.logAction(a.default.LOG_ERROR, "CometTransport.request" + (e ? "Close()" : "Disconnect()"), "request returned err = " + i.inspectError(n)), t.finish("disconnected", n))
                                    })), r.exec()
                                }
                            }, t.prototype.dispose = function() {
                                var e = this;
                                a.default.logAction(a.default.LOG_MINOR, "CometTransport.dispose()", ""), this.isDisposed || (this.isDisposed = !0, this.recvRequest && (a.default.logAction(a.default.LOG_MINOR, "CometTransport.dispose()", "aborting recv request"), this.recvRequest.abort(), this.recvRequest = null), this.finish("disconnected", l.default.disconnected), h.default.Config.nextTick((function() {
                                    e.emit("disposed")
                                })))
                            }, t.prototype.onConnect = function(e) {
                                if (!this.isDisposed) {
                                    var t = e.connectionKey;
                                    o.default.prototype.onConnect.call(this, e);
                                    var n = this.baseUri + t;
                                    a.default.logAction(a.default.LOG_MICRO, "CometTransport.onConnect()", "baseUri = " + n + "; connectionKey = " + e.connectionKey), this.sendUri = n + "/send", this.recvUri = n + "/recv", this.closeUri = n + "/close", this.disconnectUri = n + "/disconnect"
                                }
                            }, t.prototype.send = function(e) {
                                if (this.sendRequest) return this.pendingItems = this.pendingItems || [], void this.pendingItems.push(e);
                                var t = this.pendingItems || [];
                                t.push(e), this.pendingItems = null, this.sendItems(t)
                            }, t.prototype.sendAnyPending = function() {
                                var e = this.pendingItems;
                                e && (this.pendingItems = null, this.sendItems(e))
                            }, t.prototype.sendItems = function(e) {
                                var t = this,
                                    n = this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(e), d.default.REQ_SEND);
                                n.on("complete", (function(e, n) {
                                    e && a.default.logAction(a.default.LOG_ERROR, "CometTransport.sendItems()", "on complete: err = " + i.inspectError(e)), t.sendRequest = null, e ? e.code ? t.onData(p(e)) : t.disconnect(e) : (n && t.onData(n), t.pendingItems && h.default.Config.nextTick((function() {
                                        t.sendRequest || t.sendAnyPending()
                                    })))
                                })), n.exec()
                            }, t.prototype.recv = function() {
                                var e = this;
                                if (!this.recvRequest && this.isConnected) {
                                    var t = this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? d.default.REQ_RECV_STREAM : d.default.REQ_RECV_POLL);
                                    t.on("data", (function(t) {
                                        e.onData(t)
                                    })), t.on("complete", (function(t) {
                                        e.recvRequest = null, e.onActivity(), t ? t.code ? e.onData(p(t)) : e.disconnect(t) : h.default.Config.nextTick((function() {
                                            e.recv()
                                        }))
                                    })), t.exec()
                                }
                            }, t.prototype.onData = function(e) {
                                try {
                                    var t = this.decodeResponse(e);
                                    if (t && t.length)
                                        for (var n = 0; n < t.length; n++) this.onProtocolMessage(s.default.fromDeserialized(t[n]))
                                } catch (e) {
                                    a.default.logAction(a.default.LOG_ERROR, "CometTransport.onData()", "Unexpected exception handing channel event: " + e.stack)
                                }
                            }, t.prototype.encodeRequest = function(e) {
                                return JSON.stringify(e)
                            }, t.prototype.decodeResponse = function(e) {
                                return "string" == typeof e ? JSON.parse(e) : e
                            }, t
                        }(o.default);
                        t.default = g
                    }, function(e, t) {
                        var n;
                        n = function() {
                            return this
                        }();
                        try {
                            n = n || new Function("return this")()
                        } catch (e) {
                            "object" == typeof window && (n = window)
                        }
                        e.exports = n
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function() {
                            var e = r,
                                t = e.lib.WordArray;

                            function n(e, n, r) {
                                for (var i = [], s = 0, o = 0; o < n; o++)
                                    if (o % 4) {
                                        var a = r[e.charCodeAt(o - 1)] << o % 4 * 2 | r[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
                                        i[s >>> 2] |= a << 24 - s % 4 * 8, s++
                                    } return t.create(i, s)
                            }
                            e.enc.Base64 = {
                                stringify: function(e) {
                                    var t = e.words,
                                        n = e.sigBytes,
                                        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                                    e.clamp();
                                    for (var i = [], s = 0; s < n; s += 3)
                                        for (var o = (t[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 16 | (t[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255) << 8 | t[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, a = 0; a < 4 && s + .75 * a < n; a++) i.push(r.charAt(o >>> 6 * (3 - a) & 63));
                                    var u = r.charAt(64);
                                    if (u)
                                        for (; i.length % 4;) i.push(u);
                                    return i.join("")
                                },
                                parse: function(e) {
                                    var t = e.length,
                                        r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                                        i = this._reverseMap;
                                    if (!i) {
                                        i = this._reverseMap = [];
                                        for (var s = 0; s < r.length; s++) i[r.charCodeAt(s)] = s
                                    }
                                    var o = r.charAt(64);
                                    if (o) {
                                        var a = e.indexOf(o); - 1 !== a && (t = a)
                                    }
                                    return n(e, t, i)
                                }
                            }
                        }(), r.enc.Base64)
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(3)),
                            s = r.__importDefault(n(0)),
                            o = r.__importDefault(n(9)),
                            a = r.__importStar(n(2));

                        function u(e) {
                            return l.Actions.indexOf(e)
                        }
                        var l = function() {
                            function e() {}
                            return e.prototype.isSynthesized = function() {
                                return !this.id || !this.connectionId || this.id.substring(this.connectionId.length, 0) !== this.connectionId
                            }, e.prototype.parseId = function() {
                                if (!this.id) throw new Error("parseId(): Presence message does not contain an id");
                                var e = this.id.split(":");
                                return {
                                    connectionId: e[0],
                                    msgSerial: parseInt(e[1], 10),
                                    index: parseInt(e[2], 10)
                                }
                            }, e.prototype.toJSON = function() {
                                var e = this.data,
                                    t = this.encoding;
                                return e && s.default.BufferUtils.isBuffer(e) && (arguments.length > 0 ? (t = t ? t + "/base64" : "base64", e = s.default.BufferUtils.base64Encode(e)) : e = s.default.BufferUtils.toBuffer(e)), {
                                    clientId: this.clientId,
                                    action: u(this.action),
                                    data: e,
                                    encoding: t
                                }
                            }, e.prototype.toString = function() {
                                var e = "[PresenceMessage";
                                return e += "; action=" + this.action, this.id && (e += "; id=" + this.id), this.timestamp && (e += "; timestamp=" + this.timestamp), this.clientId && (e += "; clientId=" + this.clientId), this.connectionId && (e += "; connectionId=" + this.connectionId), this.encoding && (e += "; encoding=" + this.encoding), this.data && ("string" == typeof this.data ? e += "; data=" + this.data : s.default.BufferUtils.isBuffer(this.data) ? e += "; data (buffer)=" + s.default.BufferUtils.base64Encode(this.data) : e += "; data (json)=" + JSON.stringify(this.data)), e += "]"
                            }, e.fromResponseBody = function(t, n, r) {
                                var s = [];
                                r && (t = a.decodeBody(t, r));
                                for (var o = 0; o < t.length; o++) {
                                    var u = s[o] = e.fromValues(t[o], !0);
                                    try {
                                        e.decode(u, n)
                                    } catch (e) {
                                        i.default.logAction(i.default.LOG_ERROR, "PresenceMessage.fromResponseBody()", e.toString())
                                    }
                                }
                                return s
                            }, e.fromValues = function(t, n) {
                                return n && (t.action = e.Actions[t.action]), Object.assign(new e, t)
                            }, e.fromValuesArray = function(t) {
                                for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                                return r
                            }, e.fromEncoded = function(t, n) {
                                var r = e.fromValues(t, !0);
                                try {
                                    e.decode(r, n)
                                } catch (e) {
                                    i.default.logAction(i.default.LOG_ERROR, "PresenceMessage.fromEncoded()", e.toString())
                                }
                                return r
                            }, e.fromEncodedArray = function(t, n) {
                                return t.map((function(t) {
                                    return e.fromEncoded(t, n)
                                }))
                            }, e.Actions = ["absent", "present", "enter", "leave", "update"], e.encode = o.default.encode, e.decode = o.default.decode, e.getMessagesSize = o.default.getMessagesSize, e
                        }();
                        t.default = l
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            t.__esModule = !0;
                            var r = n(1),
                                i = r.__importStar(n(2)),
                                s = r.__importDefault(n(7)),
                                o = r.__importDefault(n(5)),
                                a = r.__importDefault(n(3)),
                                u = r.__importDefault(n(8)),
                                l = r.__importDefault(n(20)),
                                c = r.__importDefault(n(0));

                            function f(e, t) {
                                if (function(e, t) {
                                        return i.arrIn(i.allToLowerCase(i.keysArray(t)), "x-ably-errorcode")
                                    }(0, t)) return e.error && o.default.fromValues(e.error)
                            }
                            var d = function() {},
                                h = 0,
                                p = {},
                                g = void 0 !== e && e.XDomainRequest;

                            function m() {
                                var e, t;
                                return g && (e = (t = navigator.userAgent.toString().match(/MSIE\s([\d.]+)/)) && Number(t[1])) && 10 === e
                            }
                            var y = function(e) {
                                function t(t, n, r, s, o, a, u) {
                                    var l = e.call(this) || this;
                                    return (r = r || {}).rnd = i.cheapRandStr(), m() && !r.envelope && (r.envelope = "json"), l.uri = t + i.toQueryString(r), l.headers = n || {}, l.body = s, l.method = u ? u.toUpperCase() : i.isEmptyArg(s) ? "GET" : "POST", l.requestMode = o, l.timeouts = a, l.timedOut = !1, l.requestComplete = !1, l.id = String(++h), p[l.id] = l, l
                                }
                                return r.__extends(t, e), t.createRequest = function(e, n, r, s, o, a, l) {
                                    var c = a || u.default.TIMEOUTS;
                                    return new t(e, n, i.copy(r), s, o, c, l)
                                }, t.prototype.complete = function(e, t, n, r, i) {
                                    this.requestComplete || (this.requestComplete = !0, !e && t && this.emit("data", t), this.emit("complete", e, t, n, r, i), this.dispose())
                                }, t.prototype.abort = function() {
                                    this.dispose()
                                }, t.prototype.exec = function() {
                                    var e = this,
                                        t = this.headers,
                                        n = this.requestMode == l.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout,
                                        r = this.timer = setTimeout((function() {
                                            e.timedOut = !0, u.abort()
                                        }), n),
                                        s = this.method,
                                        u = this.xhr = new XMLHttpRequest,
                                        d = t.accept,
                                        h = this.body,
                                        p = "text";
                                    for (var g in d ? 0 === d.indexOf("application/x-msgpack") && (p = "arraybuffer") : t.accept = "application/json", h && (t["content-type"] || (t["content-type"] = "application/json")).indexOf("application/json") > -1 && "string" != typeof h && (h = JSON.stringify(h)), u.open(s, this.uri, !0), u.responseType = p, "authorization" in t && (u.withCredentials = !0), t) u.setRequestHeader(g, t[g]);
                                    var m, y, v, _ = function(t, n, r, i) {
                                        var s, u = n + " (event type: " + t.type + ")";
                                        (null === (s = null == e ? void 0 : e.xhr) || void 0 === s ? void 0 : s.statusText) && (u += ", current statusText is " + e.xhr.statusText), a.default.logAction(a.default.LOG_ERROR, "Request.on" + t.type + "()", u), e.complete(new o.default(u, r, i))
                                    };
                                    u.onerror = function(e) {
                                        _(e, "XHR error occurred", null, 400)
                                    }, u.onabort = function(t) {
                                        e.timedOut ? _(t, "Request aborted due to request timeout expiring", null, 408) : _(t, "Request cancelled", null, 400)
                                    }, u.ontimeout = function(e) {
                                        _(e, "Request timed out", null, 408)
                                    };
                                    var b = 0,
                                        w = !1,
                                        C = function() {
                                            var n;
                                            try {
                                                var r = function(e, t) {
                                                    return e.getResponseHeader && e.getResponseHeader(t)
                                                }(u, "content-type");
                                                if (r ? r.indexOf("application/json") >= 0 : "text" == u.responseType) {
                                                    var s = "arraybuffer" === u.responseType ? c.default.BufferUtils.utf8Decode(u.response) : String(u.responseText);
                                                    n = s.length ? JSON.parse(s) : s, w = !0
                                                } else n = u.response;
                                                void 0 !== n.response ? (y = n.statusCode, v = y < 400, t = n.headers, n = n.response) : t = function(e) {
                                                    for (var t = i.trim(e.getAllResponseHeaders()).split("\r\n"), n = {}, r = 0; r < t.length; r++) {
                                                        var s = t[r].split(":").map(i.trim);
                                                        n[s[0].toLowerCase()] = s[1]
                                                    }
                                                    return n
                                                }(u)
                                            } catch (t) {
                                                return void e.complete(new o.default("Malformed response body from server: " + t.message, null, 400))
                                            }
                                            if (v || i.isArray(n)) e.complete(null, n, t, w, y);
                                            else {
                                                var a = f(n, t);
                                                a || (a = new o.default("Error response received from server: " + y + " body was: " + c.default.Config.inspect(n), null, y)), e.complete(a, n, t, w, y)
                                            }
                                        };

                                    function R() {
                                        for (var e, t, n = u.responseText, r = n.length - 1; b < r && (e = n.indexOf("\n", b)) > -1;) t = n.slice(b, e), b = e + 1, T(t)
                                    }
                                    var T = function(t) {
                                        try {
                                            t = JSON.parse(t)
                                        } catch (t) {
                                            return void e.complete(new o.default("Malformed response body from server: " + t.message, null, 400))
                                        }
                                        e.emit("data", t)
                                    };
                                    u.onreadystatechange = function() {
                                        var t = u.readyState;
                                        t < 3 || 0 !== u.status && (void 0 === y && (1223 === (y = u.status) && (y = 204), clearTimeout(r), v = y < 400, 204 != y ? m = e.requestMode == l.default.REQ_RECV_STREAM && v && function(e) {
                                            return e.getResponseHeader && (e.getResponseHeader("transfer-encoding") || !e.getResponseHeader("content-length"))
                                        }(u) : e.complete(null, null, null, null, y)), 3 == t && m ? R() : 4 == t && (m ? (R(), e.streamComplete = !0, c.default.Config.nextTick((function() {
                                            e.complete()
                                        }))) : C()))
                                    }, u.send(h)
                                }, t.prototype.dispose = function() {
                                    var e = this.xhr;
                                    if (e) {
                                        e.onreadystatechange = e.onerror = e.onabort = e.ontimeout = d, this.xhr = null;
                                        var t = this.timer;
                                        t && (clearTimeout(t), this.timer = null), this.requestComplete || e.abort()
                                    }
                                    delete p[this.id]
                                }, t
                            }(s.default);
                            t.default = y
                        }).call(this, n(12))
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(3)),
                            s = r.__importStar(n(2)),
                            o = r.__importDefault(n(22)),
                            a = r.__importDefault(n(5)),
                            u = r.__importDefault(n(44)),
                            l = n(13),
                            c = n(32),
                            f = r.__importDefault(n(17)),
                            d = r.__importDefault(n(0)),
                            h = Math.pow(2, 17);

                        function p() {}

                        function g() {
                            return ("000000" + Math.floor(1e16 * Math.random())).slice(-16)
                        }

                        function m(e) {
                            return !!e.connection
                        }

                        function y(e) {
                            return s.isErrorInfo(e) ? (e.code || (403 === e.statusCode ? e.code = 40300 : (e.code = 40170, e.statusCode = 401)), e) : new a.default(s.inspectError(e), e.code || 40170, e.statusCode || 401)
                        }
                        var v = function(e) {
                                return d.default.Config.createHmac ? Buffer.from(e, "ascii").toString("base64") : (0, l.stringify)((0, c.parse)(e))
                            },
                            _ = function(e, t) {
                                if (d.default.Config.createHmac) {
                                    var n = d.default.Config.createHmac("SHA256", t);
                                    return n.update(e), n.digest("base64")
                                }
                                return (0, l.stringify)((0, u.default)(e, t))
                            };

                        function b(e) {
                            if (!e) return "";
                            "string" == typeof e && (e = JSON.parse(e));
                            var t = Object.create(null),
                                n = s.keysArray(e, !0);
                            if (!n) return "";
                            n.sort();
                            for (var r = 0; r < n.length; r++) t[n[r]] = e[n[r]].sort();
                            return JSON.stringify(t)
                        }

                        function w(e) {
                            if (e.authCallback) i.default.logAction(i.default.LOG_MINOR, "Auth()", "using token auth with authCallback");
                            else if (e.authUrl) i.default.logAction(i.default.LOG_MINOR, "Auth()", "using token auth with authUrl");
                            else if (e.key) i.default.logAction(i.default.LOG_MINOR, "Auth()", "using token auth with client-side signing");
                            else {
                                if (!e.tokenDetails) {
                                    var t = "authOptions must include valid authentication parameters";
                                    throw i.default.logAction(i.default.LOG_ERROR, "Auth()", t), new Error(t)
                                }
                                i.default.logAction(i.default.LOG_MINOR, "Auth()", "using token auth with supplied token only")
                            }
                        }
                        var C = 0,
                            R = function() {
                                function e(e, t) {
                                    if (this.authOptions = {}, this.client = e, this.tokenParams = t.defaultTokenParams || {}, this.currentTokenRequestId = null, this.waitingForTokenRequest = null, function(e) {
                                            return e.useTokenAuth || ! function(e) {
                                                return "useTokenAuth" in e && !e.useTokenAuth
                                            }(e) && (e.authCallback || e.authUrl || e.token || e.tokenDetails)
                                        }(t)) {
                                        if (t.key && !_) {
                                            var n = "client-side token request signing not supported";
                                            throw i.default.logAction(i.default.LOG_ERROR, "Auth()", n), new Error(n)
                                        }(function(e) {
                                            return !e.key && !e.authCallback && !e.authUrl
                                        })(t) && i.default.logAction(i.default.LOG_ERROR, "Auth()", "Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), this._saveTokenOptions(t.defaultTokenParams, t), w(this.authOptions)
                                    } else {
                                        if (!t.key) throw n = "No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)", i.default.logAction(i.default.LOG_ERROR, "Auth()", n), new a.default(n, 40160, 401);
                                        i.default.logAction(i.default.LOG_MINOR, "Auth()", "anonymous, using basic auth"), this._saveBasicOptions(t)
                                    }
                                }
                                return e.prototype.authorize = function(e, t, n) {
                                    var r, o = this;
                                    if ("function" != typeof e || n ? "function" != typeof t || n ? r = t : (n = t, r = null) : (n = e, r = e = null), !n && this.client.options.promises) return s.promisify(this, "authorize", arguments);
                                    if (r && r.key && this.authOptions.key !== r.key) throw new a.default("Unable to update auth options with incompatible key", 40102, 401);
                                    r && "force" in r && (i.default.logAction(i.default.LOG_ERROR, "Auth.authorize", "Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want"), s.isOnlyPropIn(r, "force") && (r = null)), this._forceNewToken(e, r, (function(e, t) {
                                        if (e) return o.client.connection && o.client.connection.connectionManager.actOnErrorFromAuthorize(e), void(null == n || n(e));
                                        m(o.client) ? o.client.connection.connectionManager.onAuthUpdated(t, n || p) : null == n || n(null, t)
                                    }))
                                }, e.prototype.authorise = function(e, t, n) {
                                    i.default.deprecated("Auth.authorise", "Auth.authorize"), this.authorize(e, t, n)
                                }, e.prototype._forceNewToken = function(e, t, n) {
                                    var r = this;
                                    this.tokenDetails = null, this._saveTokenOptions(e, t), w(this.authOptions), this._ensureValidAuthCredentials(!0, (function(e, t) {
                                        delete r.tokenParams.timestamp, delete r.authOptions.queryTime, n(e, t)
                                    }))
                                }, e.prototype.requestToken = function(e, t, n) {
                                    var r = this;
                                    if ("function" != typeof e || n ? "function" != typeof t || n || (n = t, t = null) : (n = e, t = e = null), !n && this.client.options.promises) return s.promisify(this, "requestToken", arguments);
                                    t = t || this.authOptions, e = e || s.copy(this.tokenParams);
                                    var o, u = n || p,
                                        l = this.client;
                                    if (t.authCallback) i.default.logAction(i.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authCallback"), o = t.authCallback;
                                    else if (t.authUrl) i.default.logAction(i.default.LOG_MINOR, "Auth.requestToken()", "using token auth with authUrl"), o = function(e, n) {
                                        var o, u = s.mixin({
                                                accept: "application/json, text/plain"
                                            }, t.authHeaders),
                                            c = t.authMethod && "post" === t.authMethod.toLowerCase(),
                                            p = t.authUrl.indexOf("?");
                                        p > -1 && (o = s.parseQueryString(t.authUrl.slice(p)), t.authUrl = t.authUrl.slice(0, p), c || (t.authParams = s.mixin(o, t.authParams)));
                                        var g = s.mixin({}, t.authParams || {}, e),
                                            m = function(e, t, r, o) {
                                                var u;
                                                if (e ? i.default.logAction(i.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received Error: " + s.inspectError(e)) : (u = r["content-type"], i.default.logAction(i.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Received; content-type: " + u + "; body: " + s.inspectBody(t))), e || o) return n(e, t);
                                                if (d.default.BufferUtils.isBuffer(t) && (t = t.toString()), u) {
                                                    var l = u.indexOf("application/json") > -1,
                                                        c = u.indexOf("text/plain") > -1 || u.indexOf("application/jwt") > -1;
                                                    if (l || c) {
                                                        if (l) {
                                                            if (t.length > h) return void n(new a.default("authUrl response exceeded max permitted length", 40170, 401));
                                                            try {
                                                                t = JSON.parse(t)
                                                            } catch (e) {
                                                                return void n(new a.default("Unexpected error processing authURL response; err = " + e.message, 40170, 401))
                                                            }
                                                        }
                                                        n(null, t, u)
                                                    } else n(new a.default("authUrl responded with unacceptable content-type " + u + ", should be either text/plain, application/jwt or application/json", 40170, 401))
                                                } else n(new a.default("authUrl response is missing a content-type header", 40170, 401))
                                            };
                                        if (i.default.logAction(i.default.LOG_MICRO, "Auth.requestToken().tokenRequestCallback", "Requesting token from " + t.authUrl + "; Params: " + JSON.stringify(g) + "; method: " + (c ? "POST" : "GET")), c) {
                                            var y = u || {};
                                            y["content-type"] = "application/x-www-form-urlencoded";
                                            var v = s.toQueryString(g).slice(1);
                                            r.client.http.doUri(f.default.Post, l, t.authUrl, y, v, o, m)
                                        } else r.client.http.doUri(f.default.Get, l, t.authUrl, u || {}, null, g, m)
                                    };
                                    else {
                                        if (!t.key) {
                                            var c = "Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)";
                                            return i.default.logAction(i.default.LOG_ERROR, "Auth()", "library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help"), void u(new a.default(c, 40171, 403))
                                        }
                                        i.default.logAction(i.default.LOG_MINOR, "Auth.requestToken()", "using token auth with client-side signing"), o = function(e, n) {
                                            r.createTokenRequest(e, t, n)
                                        }
                                    }
                                    "capability" in e && (e.capability = b(e.capability));
                                    var g = function(e, n) {
                                            var o = "/keys/" + e.keyName + "/requestToken",
                                                a = s.defaultPostHeaders(r.client.options);
                                            t.requestHeaders && s.mixin(a, t.requestHeaders), i.default.logAction(i.default.LOG_MICRO, "Auth.requestToken().requestToken", "Sending POST to " + o + "; Token params: " + JSON.stringify(e)), r.client.http.do(f.default.Post, l, (function(e) {
                                                return l.baseUri(e) + o
                                            }), a, JSON.stringify(e), null, n)
                                        },
                                        m = !1,
                                        v = this.client.options.timeouts.realtimeRequestTimeout,
                                        _ = setTimeout((function() {
                                            m = !0;
                                            var e = "Token request callback timed out after " + v / 1e3 + " seconds";
                                            i.default.logAction(i.default.LOG_ERROR, "Auth.requestToken()", e), u(new a.default(e, 40170, 401))
                                        }), v);
                                    o(e, (function(e, n, r) {
                                        if (!m) {
                                            if (clearTimeout(_), e) return i.default.logAction(i.default.LOG_ERROR, "Auth.requestToken()", "token request signing call returned error; err = " + s.inspectError(e)), void u(y(e));
                                            if ("string" != typeof n) {
                                                if ("object" != typeof n) {
                                                    var o = "Expected token request callback to call back with a token string or token request/details object, but got a " + typeof n;
                                                    return i.default.logAction(i.default.LOG_ERROR, "Auth.requestToken()", o), void u(new a.default(o, 40170, 401))
                                                }
                                                var l = JSON.stringify(n).length;
                                                if (l > h && !t.suppressMaxLengthCheck) u(new a.default("Token request/details object exceeded max permitted stringified size (was " + l + " bytes)", 40170, 401));
                                                else if ("issued" in n) u(null, n);
                                                else {
                                                    if (!("keyName" in n)) return o = "Expected token request callback to call back with a token string, token request object, or token details object", i.default.logAction(i.default.LOG_ERROR, "Auth.requestToken()", o), void u(new a.default(o, 40170, 401));
                                                    g(n, (function(e, t, n, r) {
                                                        if (e) return i.default.logAction(i.default.LOG_ERROR, "Auth.requestToken()", "token request API call returned error; err = " + s.inspectError(e)), void u(y(e));
                                                        r || (t = JSON.parse(t)), i.default.logAction(i.default.LOG_MINOR, "Auth.getToken()", "token received"), u(null, t)
                                                    }))
                                                }
                                            } else 0 === n.length ? u(new a.default("Token string is empty", 40170, 401)) : n.length > h ? u(new a.default("Token string exceeded max permitted length (was " + n.length + " bytes)", 40170, 401)) : "undefined" === n || "null" === n ? u(new a.default("Token string was literal null/undefined", 40170, 401)) : "{" !== n[0] || r && r.indexOf("application/jwt") > -1 ? u(null, {
                                                token: n
                                            }) : u(new a.default("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401))
                                        }
                                    }))
                                }, e.prototype.createTokenRequest = function(e, t, n) {
                                    var r = this;
                                    if ("function" != typeof e || n ? "function" != typeof t || n || (n = t, t = null) : (n = e, t = e = null), !n && this.client.options.promises) return s.promisify(this, "createTokenRequest", arguments);
                                    t = t || this.authOptions, e = e || s.copy(this.tokenParams);
                                    var o = t.key;
                                    if (o) {
                                        var u = o.split(":"),
                                            l = u[0],
                                            c = u[1];
                                        if (c)
                                            if ("" !== e.clientId) {
                                                "capability" in e && (e.capability = b(e.capability));
                                                var f, d = s.mixin({
                                                        keyName: l
                                                    }, e),
                                                    h = e.clientId || "",
                                                    p = e.ttl || "",
                                                    m = e.capability || "";
                                                f = function() {
                                                    var e = d.nonce || (d.nonce = g()),
                                                        t = d.timestamp,
                                                        r = d.keyName + "\n" + p + "\n" + m + "\n" + h + "\n" + t + "\n" + e + "\n";
                                                    d.mac = d.mac || _(r, c), i.default.logAction(i.default.LOG_MINOR, "Auth.getTokenRequest()", "generated signed request"), n(null, d)
                                                }, d.timestamp ? f() : r.getTimestamp(t && t.queryTime, (function(e, t) {
                                                    e ? n(e) : (d.timestamp = t, f())
                                                }))
                                            } else n(new a.default("clientId canâ€™t be an empty string", 40012, 400));
                                        else n(new a.default("Invalid key specified", 40101, 403))
                                    } else n(new a.default("No key specified", 40101, 403))
                                }, e.prototype.getAuthParams = function(e) {
                                    "basic" == this.method ? e(null, {
                                        key: this.key
                                    }) : this._ensureValidAuthCredentials(!1, (function(t, n) {
                                        if (t) e(t);
                                        else {
                                            if (!n) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                                            e(null, {
                                                key: n.token
                                            })
                                        }
                                    }))
                                }, e.prototype.getAuthHeaders = function(e) {
                                    "basic" == this.method ? e(null, {
                                        authorization: "Basic " + this.basicKey
                                    }) : this._ensureValidAuthCredentials(!1, (function(t, n) {
                                        if (t) e(t);
                                        else {
                                            if (!n) throw new Error("Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails");
                                            e(null, {
                                                authorization: "Bearer " + v(n.token)
                                            })
                                        }
                                    }))
                                }, e.prototype.getTimestamp = function(e, t) {
                                    this.isTimeOffsetSet() || !e && !this.authOptions.queryTime ? t(null, this.getTimestampUsingOffset()) : this.client.time(t)
                                }, e.prototype.getTimestampUsingOffset = function() {
                                    return s.now() + (this.client.serverTimeOffset || 0)
                                }, e.prototype.isTimeOffsetSet = function() {
                                    return null !== this.client.serverTimeOffset
                                }, e.prototype._saveBasicOptions = function(e) {
                                    this.method = "basic", this.key = e.key, this.basicKey = v(e.key), this.authOptions = e || {}, "clientId" in e && this._userSetClientId(e.clientId)
                                }, e.prototype._saveTokenOptions = function(e, t) {
                                    this.method = "token", e && (this.tokenParams = e), t && (t.token && (t.tokenDetails = "string" == typeof t.token ? {
                                        token: t.token
                                    } : t.token), t.tokenDetails && (this.tokenDetails = t.tokenDetails), "clientId" in t && this._userSetClientId(t.clientId), this.authOptions = t)
                                }, e.prototype._ensureValidAuthCredentials = function(e, t) {
                                    var n = this,
                                        r = this.tokenDetails;
                                    if (r) {
                                        if (this._tokenClientIdMismatch(r.clientId)) return void t(new a.default("Mismatch between clientId in token (" + r.clientId + ") and current clientId (" + this.clientId + ")", 40102, 403));
                                        if (!this.isTimeOffsetSet() || !r.expires || r.expires >= this.getTimestampUsingOffset()) return i.default.logAction(i.default.LOG_MINOR, "Auth.getToken()", "using cached token; expires = " + r.expires), void t(null, r);
                                        i.default.logAction(i.default.LOG_MINOR, "Auth.getToken()", "deleting expired token"), this.tokenDetails = null
                                    }
                                    if ((this.waitingForTokenRequest || (this.waitingForTokenRequest = o.default.create())).push(t), null === this.currentTokenRequestId || e) {
                                        var s = this.currentTokenRequestId = C++;
                                        this.requestToken(this.tokenParams, this.authOptions, (function(e, t) {
                                            if (n.currentTokenRequestId > s) i.default.logAction(i.default.LOG_MINOR, "Auth._ensureValidAuthCredentials()", "Discarding token request response; overtaken by newer one");
                                            else {
                                                n.currentTokenRequestId = null;
                                                var r = n.waitingForTokenRequest || p;
                                                n.waitingForTokenRequest = null, e ? r(e) : r(null, n.tokenDetails = t)
                                            }
                                        }))
                                    }
                                }, e.prototype._userSetClientId = function(e) {
                                    if ("string" != typeof e && null !== e) throw new a.default("clientId must be either a string or null", 40012, 400);
                                    if ("*" === e) throw new a.default('Canâ€™t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
                                    var t = this._uncheckedSetClientId(e);
                                    if (t) throw t
                                }, e.prototype._uncheckedSetClientId = function(e) {
                                    if (this._tokenClientIdMismatch(e)) {
                                        var t = "Unexpected clientId mismatch: client has " + this.clientId + ", requested " + e,
                                            n = new a.default(t, 40102, 401);
                                        return i.default.logAction(i.default.LOG_ERROR, "Auth._uncheckedSetClientId()", t), n
                                    }
                                    return this.clientId = this.tokenParams.clientId = e, null
                                }, e.prototype._tokenClientIdMismatch = function(e) {
                                    return !(!this.clientId || "*" === this.clientId || !e || "*" === e || this.clientId === e)
                                }, e.isTokenErr = function(e) {
                                    return e.code && e.code >= 40140 && e.code < 40150
                                }, e
                            }();
                        t.default = R
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        t.__esModule = !0,
                            function(e) {
                                e.Get = "get", e.Delete = "delete", e.Post = "post", e.Put = "put", e.Patch = "patch"
                            }(r || (r = {})), t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0, t.HttpPaginatedResponse = t.PaginatedResult = void 0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(3)),
                            o = r.__importDefault(n(24)),
                            a = function() {
                                function e(e, t, n, r, i, s) {
                                    this.rest = e, this.path = t, this.headers = n, this.envelope = null != r ? r : null, this.bodyHandler = i, this.useHttpPaginatedResponse = s || !1
                                }
                                return e.prototype.get = function(e, t) {
                                    var n = this;
                                    o.default.get(this.rest, this.path, this.headers, e, this.envelope, (function(e, r, i, s, o) {
                                        n.handlePage(e, r, i, s, o, t)
                                    }))
                                }, e.prototype.delete = function(e, t) {
                                    var n = this;
                                    o.default.delete(this.rest, this.path, this.headers, e, this.envelope, (function(e, r, i, s, o) {
                                        n.handlePage(e, r, i, s, o, t)
                                    }))
                                }, e.prototype.post = function(e, t, n) {
                                    var r = this;
                                    o.default.post(this.rest, this.path, t, this.headers, e, this.envelope, (function(e, t, i, s, o) {
                                        n && r.handlePage(e, t, i, s, o, n)
                                    }))
                                }, e.prototype.put = function(e, t, n) {
                                    var r = this;
                                    o.default.put(this.rest, this.path, t, this.headers, e, this.envelope, (function(e, t, i, s, o) {
                                        n && r.handlePage(e, t, i, s, o, n)
                                    }))
                                }, e.prototype.patch = function(e, t, n) {
                                    var r = this;
                                    o.default.patch(this.rest, this.path, t, this.headers, e, this.envelope, (function(e, t, i, s, o) {
                                        n && r.handlePage(e, t, i, s, o, n)
                                    }))
                                }, e.prototype.handlePage = function(e, t, n, r, o, a) {
                                    if (e && function(e, t, n) {
                                            return !(n && (t || "number" == typeof e.code))
                                        }(e, t, this.useHttpPaginatedResponse)) return s.default.logAction(s.default.LOG_ERROR, "PaginatedResource.handlePage()", "Unexpected error getting resource: err = " + i.inspectError(e)), void(null == a || a(e));
                                    var c, f, d;
                                    try {
                                        c = this.bodyHandler(t, n || {}, r)
                                    } catch (t) {
                                        return void(null == a || a(e || t))
                                    }
                                    n && (f = n.Link || n.link) && (d = function(e) {
                                        "string" == typeof e && (e = e.split(","));
                                        for (var t, n = {}, r = 0; r < e.length; r++) {
                                            var s = e[r].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
                                            if (s) {
                                                var o = (t = void 0, (t = s[1].match(/^\.\/(\w+)\?(.*)$/)) && t[2] && i.parseQueryString(t[2]));
                                                o && (n[s[2]] = o)
                                            }
                                        }
                                        return n
                                    }(f)), this.useHttpPaginatedResponse ? a(null, new l(this, c, n || {}, o, d, e)) : a(null, new u(this, c, d))
                                }, e
                            }(),
                            u = function() {
                                function e(e, t, n) {
                                    var r = this;
                                    this.resource = e, this.items = t;
                                    var s = this;
                                    n && ("first" in n && (this.first = function(e) {
                                        if (!e && s.resource.rest.options.promises) return i.promisify(s, "first", []);
                                        s.get(n.first, e)
                                    }), "current" in n && (this.current = function(e) {
                                        if (!e && s.resource.rest.options.promises) return i.promisify(s, "current", []);
                                        s.get(n.current, e)
                                    }), this.next = function(e) {
                                        if (!e && s.resource.rest.options.promises) return i.promisify(s, "next", []);
                                        "next" in n ? s.get(n.next, e) : e(null)
                                    }, this.hasNext = function() {
                                        return "next" in n
                                    }, this.isLast = function() {
                                        var e;
                                        return !(null === (e = r.hasNext) || void 0 === e ? void 0 : e.call(r))
                                    })
                                }
                                return e.prototype.get = function(e, t) {
                                    var n = this.resource;
                                    o.default.get(n.rest, n.path, n.headers, e, n.envelope, (function(e, r, i, s, o) {
                                        n.handlePage(e, r, i, s, o, t)
                                    }))
                                }, e
                            }();
                        t.PaginatedResult = u;
                        var l = function(e) {
                            function t(t, n, r, i, s, o) {
                                var a = e.call(this, t, n, s) || this;
                                return a.statusCode = i, a.success = i < 300 && i >= 200, a.headers = r, a.errorCode = o && o.code, a.errorMessage = o && o.message, a
                            }
                            return r.__extends(t, e), t.prototype.toJSON = function() {
                                return {
                                    items: this.items,
                                    statusCode: this.statusCode,
                                    success: this.success,
                                    headers: this.headers,
                                    errorCode: this.errorCode,
                                    errorMessage: this.errorMessage
                                }
                            }, t
                        }(u);
                        t.HttpPaginatedResponse = l, t.default = a
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0, t.isRetriable = void 0;
                        var r = n(1).__importDefault(n(5)),
                            i = {
                                disconnected: r.default.fromValues({
                                    statusCode: 400,
                                    code: 80003,
                                    message: "Connection to server temporarily unavailable"
                                }),
                                suspended: r.default.fromValues({
                                    statusCode: 400,
                                    code: 80002,
                                    message: "Connection to server unavailable"
                                }),
                                failed: r.default.fromValues({
                                    statusCode: 400,
                                    code: 8e4,
                                    message: "Connection failed or disconnected by server"
                                }),
                                closing: r.default.fromValues({
                                    statusCode: 400,
                                    code: 80017,
                                    message: "Connection closing"
                                }),
                                closed: r.default.fromValues({
                                    statusCode: 400,
                                    code: 80017,
                                    message: "Connection closed"
                                }),
                                unknownConnectionErr: r.default.fromValues({
                                    statusCode: 500,
                                    code: 50002,
                                    message: "Internal connection error"
                                }),
                                unknownChannelErr: r.default.fromValues({
                                    statusCode: 500,
                                    code: 50001,
                                    message: "Internal channel error"
                                })
                            };
                        t.isRetriable = function(e) {
                            if (!e.statusCode || !e.code || e.statusCode >= 500) return !0;
                            var t = !1;
                            return Object.values(i).forEach((function(n) {
                                n.code && n.code == e.code && (t = !0)
                            })), t
                        }, t.default = i
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        t.__esModule = !0,
                            function(e) {
                                e[e.REQ_SEND = 0] = "REQ_SEND", e[e.REQ_RECV = 1] = "REQ_RECV", e[e.REQ_RECV_POLL = 2] = "REQ_RECV_POLL", e[e.REQ_RECV_STREAM = 3] = "REQ_RECV_STREAM"
                            }(r || (r = {})), t.default = r
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(4), n(58), n(13), n(40), n(31), n(23), n(27), n(28), n(59), n(60), r)
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1).__importDefault(n(3)),
                            i = function() {
                                function e(e) {
                                    this.members = e || []
                                }
                                return e.prototype.call = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    for (var n = 0, i = this.members; n < i.length; n++) {
                                        var s = i[n];
                                        if (s) try {
                                            s.apply(void 0, e)
                                        } catch (e) {
                                            r.default.logAction(r.default.LOG_ERROR, "Multicaster multiple callback handler", "Unexpected exception: " + e + "; stack = " + e.stack)
                                        }
                                    }
                                }, e.prototype.push = function() {
                                    for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    (e = this.members).push.apply(e, t)
                                }, e.create = function(t) {
                                    var n = new e(t);
                                    return Object.assign((function() {
                                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                        return n.call.apply(n, e)
                                    }), {
                                        push: function(e) {
                                            return n.push(e)
                                        }
                                    })
                                }, e
                            }();
                        t.default = i
                    }, function(e, t, n) {
                        var r, i, s, o;
                        e.exports = (r = n(6), s = (i = r).lib.Base, o = i.enc.Utf8, void(i.algo.HMAC = s.extend({
                            init: function(e, t) {
                                e = this._hasher = new e.init, "string" == typeof t && (t = o.parse(t));
                                var n = e.blockSize,
                                    r = 4 * n;
                                t.sigBytes > r && (t = e.finalize(t)), t.clamp();
                                for (var i = this._oKey = t.clone(), s = this._iKey = t.clone(), a = i.words, u = s.words, l = 0; l < n; l++) a[l] ^= 1549556828, u[l] ^= 909522486;
                                i.sigBytes = s.sigBytes = r, this.reset()
                            },
                            reset: function() {
                                var e = this._hasher;
                                e.reset(), e.update(this._iKey)
                            },
                            update: function(e) {
                                return this._hasher.update(e), this
                            },
                            finalize: function(e) {
                                var t = this._hasher,
                                    n = t.finalize(e);
                                return t.reset(), t.finalize(this._oKey.clone().concat(n))
                            }
                        })))
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(0)),
                            s = r.__importStar(n(2)),
                            o = r.__importDefault(n(3)),
                            a = r.__importDefault(n(16)),
                            u = r.__importDefault(n(17)),
                            l = r.__importDefault(n(5));

                        function c(e, t, n, r, i) {
                            e.http.supportsAuthHeaders ? e.auth.getAuthHeaders((function(e, o) {
                                e ? r(e) : i(s.mixin(o, t), n)
                            })) : e.auth.getAuthParams((function(e, o) {
                                e ? r(e) : i(t, s.mixin(o, n))
                            }))
                        }

                        function f(e) {
                            var t = [];
                            if (e)
                                for (var n in e) t.push(n + "=" + e[n]);
                            return t.join("&")
                        }

                        function d(e, t) {
                            return e + (t ? "?" : "") + f(t)
                        }
                        var h = function() {
                            function e() {}
                            return e.get = function(t, n, r, i, s, o) {
                                e.do(u.default.Get, t, n, null, r, i, s, o)
                            }, e.delete = function(t, n, r, i, s, o) {
                                e.do(u.default.Delete, t, n, null, r, i, s, o)
                            }, e.post = function(t, n, r, i, s, o, a) {
                                e.do(u.default.Post, t, n, r, i, s, o, a)
                            }, e.patch = function(t, n, r, i, s, o, a) {
                                e.do(u.default.Patch, t, n, r, i, s, o, a)
                            }, e.put = function(t, n, r, i, s, o, a) {
                                e.do(u.default.Put, t, n, r, i, s, o, a)
                            }, e.do = function(e, t, n, r, u, h, p, g) {
                                o.default.shouldLog(o.default.LOG_MICRO) && (g = function(e, t, n, r) {
                                    return function(a, u, l, c, h) {
                                        a ? o.default.logAction(o.default.LOG_MICRO, "Resource." + t + "()", "Received Error; " + d(n, r) + "; Error: " + s.inspectError(a)) : o.default.logAction(o.default.LOG_MICRO, "Resource." + t + "()", "Received; " + d(n, r) + "; Headers: " + f(l) + "; StatusCode: " + h + "; Body: " + (i.default.BufferUtils.isBuffer(u) ? u.toString() : u)), e && e(a, u, l, c, h)
                                    }
                                }(g, e, n, h)), p && (g = g && function(e, t) {
                                    return function(n, r, i, o, a) {
                                        if (!n || r) {
                                            if (!o) try {
                                                r = s.decodeBody(r, t)
                                            } catch (t) {
                                                return void(s.isErrorInfo(t) ? e(t) : e(new l.default(s.inspectError(t), null)))
                                            }
                                            if (r) {
                                                var u = r,
                                                    c = u.statusCode,
                                                    f = u.response,
                                                    d = u.headers;
                                                if (void 0 !== c) {
                                                    if (c < 200 || c >= 300) {
                                                        var h = f && f.error || n;
                                                        return h || ((h = new Error("Error in unenveloping " + r)).statusCode = c), void e(h, f, d, !0, c)
                                                    }
                                                    e(n, f, d, !0, c)
                                                } else e(n, r, i, !0, a)
                                            } else e(new l.default("unenvelope(): Response body is missing", null))
                                        } else e(n)
                                    }
                                }(g, p), (h = h || {}).envelope = p), c(t, u, h, g, (function u(l, f) {
                                    var h;
                                    if (o.default.shouldLog(o.default.LOG_MICRO) && o.default.logAction(o.default.LOG_MICRO, "Resource." + e + "()", "Sending; " + d(n, f)), o.default.shouldLog(o.default.LOG_MICRO)) {
                                        var p = r;
                                        if ((null === (h = l["content-type"]) || void 0 === h ? void 0 : h.indexOf("msgpack")) > 0) try {
                                            p = i.default.Config.msgpack.decode(r)
                                        } catch (t) {
                                            o.default.logAction(o.default.LOG_MICRO, "Resource." + e + "()", "Sending MsgPack Decoding Error: " + s.inspectError(t))
                                        }
                                        o.default.logAction(o.default.LOG_MICRO, "Resource." + e + "()", "Sending; " + d(n, f) + "; Body: " + p)
                                    }
                                    t.http.do(e, t, n, l, r, f, (function(e, n, r, i, s) {
                                        e && a.default.isTokenErr(e) ? t.auth.authorize(null, null, (function(e) {
                                            e ? g(e) : c(t, r, f, g, u)
                                        })) : g(e, n, r, i, s)
                                    }))
                                }))
                            }, e
                        }();
                        t.default = h
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            t.__esModule = !0, t.TransportParams = void 0;
                            var r = n(1),
                                i = r.__importDefault(n(10)),
                                s = r.__importStar(n(2)),
                                o = r.__importStar(n(52)),
                                a = r.__importStar(n(8)),
                                u = r.__importDefault(n(0)),
                                l = r.__importDefault(n(7)),
                                c = r.__importDefault(n(35)),
                                f = r.__importDefault(n(3)),
                                d = r.__importDefault(n(36)),
                                h = r.__importStar(n(19)),
                                p = r.__importDefault(n(5)),
                                g = r.__importDefault(n(16)),
                                m = r.__importDefault(n(9)),
                                y = r.__importDefault(n(22)),
                                v = r.__importDefault(n(53)),
                                _ = r.__importDefault(n(26)),
                                b = r.__importDefault(n(37)),
                                w = function() {
                                    var e;
                                    return void 0 !== u.default.WebStorage && (null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.localSupported)
                                },
                                C = function() {
                                    var e;
                                    return void 0 !== u.default.WebStorage && (null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.sessionSupported)
                                },
                                R = i.default.Action,
                                T = function() {},
                                O = "ably-transport-preference",
                                S = "ably-connection-recovery",
                                A = function() {
                                    function e(e, t, n, r) {
                                        this.options = e, this.host = t, this.mode = n, this.connectionKey = r, this.format = e.useBinaryProtocol ? s.Format.msgpack : s.Format.json, this.connectionSerial = void 0
                                    }
                                    return e.prototype.getConnectParams = function(e) {
                                        var t = e ? s.copy(e) : {},
                                            n = this.options;
                                        switch (this.mode) {
                                            case "upgrade":
                                                t.upgrade = this.connectionKey;
                                                break;
                                            case "resume":
                                                t.resume = this.connectionKey, void 0 !== this.connectionSerial && (t.connectionSerial = this.connectionSerial);
                                                break;
                                            case "recover":
                                                var r = n.recover.split(":");
                                                r && (t.recover = r[0], t.connectionSerial = r[1])
                                        }
                                        return void 0 !== n.clientId && (t.clientId = n.clientId), !1 === n.echoMessages && (t.echo = "false"), void 0 !== this.format && (t.format = this.format), void 0 !== this.stream && (t.stream = this.stream), void 0 !== this.heartbeats && (t.heartbeats = this.heartbeats), t.v = a.default.apiVersion, t.agent = encodeURIComponent((0, a.getAgentString)(this.options)), void 0 !== n.transportParams && s.mixin(t, n.transportParams), t
                                    }, e.prototype.toString = function() {
                                        var e = "[mode=" + this.mode;
                                        return this.host && (e += ",host=" + this.host), this.connectionKey && (e += ",connectionKey=" + this.connectionKey), void 0 !== this.connectionSerial && (e += ",connectionSerial=" + this.connectionSerial), this.format && (e += ",format=" + this.format), e += "]"
                                    }, e
                                }();
                            t.TransportParams = A;
                            var L = function(t) {
                                function n(e, r) {
                                    var i = t.call(this) || this;
                                    i.disconnectedRetryCount = 0, n.initTransports(), i.realtime = e, i.options = r;
                                    var o = r.timeouts,
                                        l = o.preferenceConnectTimeout + o.realtimeRequestTimeout;
                                    if (i.states = {
                                            initialized: {
                                                state: "initialized",
                                                terminal: !1,
                                                queueEvents: !0,
                                                sendEvents: !1,
                                                failState: "disconnected"
                                            },
                                            connecting: {
                                                state: "connecting",
                                                terminal: !1,
                                                queueEvents: !0,
                                                sendEvents: !1,
                                                retryDelay: l,
                                                failState: "disconnected"
                                            },
                                            connected: {
                                                state: "connected",
                                                terminal: !1,
                                                queueEvents: !1,
                                                sendEvents: !0,
                                                failState: "disconnected"
                                            },
                                            synchronizing: {
                                                state: "connected",
                                                terminal: !1,
                                                queueEvents: !0,
                                                sendEvents: !1,
                                                forceQueueEvents: !0,
                                                failState: "disconnected"
                                            },
                                            disconnected: {
                                                state: "disconnected",
                                                terminal: !1,
                                                queueEvents: !0,
                                                sendEvents: !1,
                                                retryDelay: o.disconnectedRetryTimeout,
                                                failState: "disconnected"
                                            },
                                            suspended: {
                                                state: "suspended",
                                                terminal: !1,
                                                queueEvents: !1,
                                                sendEvents: !1,
                                                retryDelay: o.suspendedRetryTimeout,
                                                failState: "suspended"
                                            },
                                            closing: {
                                                state: "closing",
                                                terminal: !1,
                                                queueEvents: !1,
                                                sendEvents: !1,
                                                retryDelay: o.realtimeRequestTimeout,
                                                failState: "closed"
                                            },
                                            closed: {
                                                state: "closed",
                                                terminal: !0,
                                                queueEvents: !1,
                                                sendEvents: !1,
                                                failState: "closed"
                                            },
                                            failed: {
                                                state: "failed",
                                                terminal: !0,
                                                queueEvents: !1,
                                                sendEvents: !1,
                                                failState: "failed"
                                            }
                                        }, i.state = i.states.initialized, i.errorReason = null, i.queuedMessages = new c.default, i.msgSerial = 0, i.connectionDetails = void 0, i.connectionId = void 0, i.connectionKey = void 0, i.connectionSerial = void 0, i.connectionStateTtl = o.connectionStateTtl, i.maxIdleInterval = null, i.transports = s.intersect(r.transports || a.default.defaultTransports, n.supportedTransports), i.baseTransport = s.intersect(a.default.baseTransportOrder, i.transports)[0], i.upgradeTransports = s.intersect(i.transports, a.default.upgradeTransports), i.transportPreference = null, i.httpHosts = a.default.getHosts(r), i.activeProtocol = null, i.proposedTransports = [], i.pendingTransports = [], i.host = null, i.lastAutoReconnectAttempt = null, i.lastActivity = null, i.mostRecentMsg = null, i.forceFallbackHost = !1, i.connectCounter = 0, f.default.logAction(f.default.LOG_MINOR, "Realtime.ConnectionManager()", "started"), f.default.logAction(f.default.LOG_MICRO, "Realtime.ConnectionManager()", "requested transports = [" + (r.transports || a.default.defaultTransports) + "]"), f.default.logAction(f.default.LOG_MICRO, "Realtime.ConnectionManager()", "available transports = [" + i.transports + "]"), f.default.logAction(f.default.LOG_MICRO, "Realtime.ConnectionManager()", "http hosts = [" + i.httpHosts + "]"), !i.transports.length) {
                                        var d = "no requested transports available";
                                        throw f.default.logAction(f.default.LOG_ERROR, "realtime.ConnectionManager()", d), new Error(d)
                                    }
                                    var h = u.default.Config.addEventListener;
                                    return h && (C() && "function" == typeof r.recover && h("beforeunload", i.persistConnection.bind(i)), !0 === r.closeOnUnload && h("beforeunload", (function() {
                                        f.default.logAction(f.default.LOG_MAJOR, "Realtime.ConnectionManager()", "beforeunload event has triggered the connection to close as closeOnUnload is true"), i.requestState({
                                            state: "closing"
                                        })
                                    })), h("online", (function() {
                                        i.state != i.states.disconnected && i.state != i.states.suspended || (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager caught browser â€˜onlineâ€™ event", "reattempting connection"), i.requestState({
                                            state: "connecting"
                                        }))
                                    })), h("offline", (function() {
                                        i.state == i.states.connected && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager caught browser â€˜offlineâ€™ event", "disconnecting active transport"), i.disconnectAllTransports())
                                    }))), i
                                }
                                return r.__extends(n, t), n.initTransports = function() {
                                    (0, v.default)(n), s.arrForEach(u.default.Transports, (function(e) {
                                        e(n)
                                    }))
                                }, n.prototype.createTransportParams = function(e, t) {
                                    var n = new A(this.options, e, t, this.connectionKey);
                                    return void 0 !== this.connectionSerial && (n.connectionSerial = this.connectionSerial), n
                                }, n.prototype.getTransportParams = function(e) {
                                    var t = this;
                                    ! function(e) {
                                        if (t.connectionKey) e("resume");
                                        else if ("string" != typeof t.options.recover) {
                                            var n, r, i = t.options.recover,
                                                s = C() && (null === (r = null === (n = u.default.WebStorage) || void 0 === n ? void 0 : n.getSession) || void 0 === r ? void 0 : r.call(n, S));
                                            if (s && "function" == typeof i) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Calling clientOptions-provided recover function with last session data"), void i(s, (function(n) {
                                                n ? (t.options.recover = s.recoveryKey, e("recover")) : e("clean")
                                            }));
                                            e("clean")
                                        } else e("recover")
                                    }((function(n) {
                                        var r = t.createTransportParams(null, n);
                                        if ("recover" === n) {
                                            f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport recovery mode = recover; recoveryKey = " + t.options.recover);
                                            var i = t.options.recover.split(":");
                                            i && i[2] && (t.msgSerial = Number(i[2]))
                                        } else f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.getTransportParams()", "Transport params = " + r.toString());
                                        e(r)
                                    }))
                                }, n.prototype.tryATransport = function(e, t, r) {
                                    var i = this;
                                    f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.tryATransport()", "trying " + t), _.default.tryConnect(n.supportedTransports[t], this, this.realtime.auth, e, (function(n, s) {
                                        var o = i.state;
                                        return o == i.states.closing || o == i.states.closed || o == i.states.failed ? (s && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.tryATransport()", "connection " + o.state + " while we were attempting the transport; closing " + s), s.close()), void r(!0)) : n ? (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.tryATransport()", "transport " + t + " " + n.event + ", err: " + n.error.toString()), void(!g.default.isTokenErr(n.error) || i.errorReason && g.default.isTokenErr(i.errorReason) ? "failed" === n.event ? (i.notifyState({
                                            state: "failed",
                                            error: n.error
                                        }), r(!0)) : "disconnected" === n.event && ((0, h.isRetriable)(n.error) ? r(!1) : (i.notifyState({
                                            state: i.states.connecting.failState,
                                            error: n.error
                                        }), r(!0))) : (i.errorReason = n.error, i.realtime.auth._forceNewToken(null, null, (function(n) {
                                            n ? i.actOnErrorFromAuthorize(n) : i.tryATransport(e, t, r)
                                        }))))) : (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.tryATransport()", "viable transport " + t + "; setting pending"), i.setTransportPending(s, e), void r(null, s))
                                    }))
                                }, n.prototype.setTransportPending = function(e, t) {
                                    var n = this,
                                        r = t.mode;
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setTransportPending()", "transport = " + e + "; mode = " + r), s.arrDeleteValue(this.proposedTransports, e), this.pendingTransports.push(e);
                                    var i = u.default.Defaults.transportPreferenceOrder[u.default.Defaults.transportPreferenceOrder.length - 1];
                                    e.once("connected", (function(o, a, l, c) {
                                        "upgrade" == r && n.activeProtocol ? e.shortName !== i && s.arrIn(n.getUpgradePossibilities(), i) && n.activeProtocol ? setTimeout((function() {
                                            n.scheduleTransportActivation(o, e, a, l, c.connectionSerial)
                                        }), n.options.timeouts.parallelUpgradeDelay) : n.scheduleTransportActivation(o, e, a, l, c.connectionSerial) : (n.activateTransport(o, e, a, l, c.connectionSerial), u.default.Config.nextTick((function() {
                                            n.connectImpl(t)
                                        }))), "recover" === r && n.options.recover && (n.options.recover = null, n.unpersistConnection())
                                    }));
                                    var o = this;
                                    e.on(["disconnected", "closed", "failed"], (function(t) {
                                        o.deactivateTransport(e, this.event, t)
                                    })), this.emit("transport.pending", e)
                                }, n.prototype.scheduleTransportActivation = function(e, t, n, r, i) {
                                    var o, a, l = this,
                                        c = this.activeProtocol && this.activeProtocol.getTransport(),
                                        d = function() {
                                            t.disconnect(), s.arrDeleteValue(l.pendingTransports, t)
                                        };
                                    if (this.state !== this.states.connected && this.state !== this.states.connecting) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + this.state.state + (this.state === this.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + t.shortName), void d();
                                    if (c && (o = t, a = c, !(s.arrIndexOf(u.default.Defaults.transportPreferenceOrder, o.shortName) > s.arrIndexOf(u.default.Defaults.transportPreferenceOrder, a.shortName)))) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + t.shortName + " is no better than current active transport " + c.shortName + " - abandoning upgrade"), void d();
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Scheduling transport upgrade; transport = " + t);
                                    var h = function(s) {
                                        var o;
                                        if (s) f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Unable to activate transport; transport = " + t + "; err = " + s);
                                        else {
                                            if (!t.isConnected) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Proposed transport " + t.shortName + "is no longer connected; abandoning upgrade"), void d();
                                            if (l.state === l.states.connected) f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Currently connected, so temporarily pausing events until the upgrade is complete"), l.state = l.states.synchronizing, o = l.activeProtocol;
                                            else if (l.state !== l.states.connecting) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Current connection state (" + l.state.state + (l.state === l.states.synchronizing ? ", but with an upgrade already in progress" : "") + ") is not valid to upgrade in; abandoning upgrade to " + t.shortName), void d();
                                            var a = n !== l.connectionId,
                                                u = a ? i : l.connectionSerial;
                                            a && f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Upgrade resulted in new connectionId; resetting library connection serial from " + l.connectionSerial + " to " + u + "; upgrade error was " + e), f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Syncing transport; transport = " + t), l.sync(t, u, (function(n, i, s) {
                                                if (n) l.state === l.states.synchronizing && (f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.scheduleTransportActivation()", "Unexpected error attempting to sync transport; transport = " + t + "; err = " + n), l.disconnectAllTransports());
                                                else {
                                                    var a = function() {
                                                        f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Activating transport; transport = " + t), l.activateTransport(e, t, i, r, s), l.state === l.states.synchronizing ? (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = " + t), l.state = l.states.connected) : f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.scheduleTransportActivation()", "Pre-upgrade protocol idle, but state is now " + l.state.state + ", so leaving unchanged"), l.state.sendEvents && l.sendQueuedMessages()
                                                    };
                                                    o ? o.onceIdle(a) : a()
                                                }
                                            }))
                                        }
                                    };
                                    c ? this.realtime.channels.onceNopending(h) : h()
                                }, n.prototype.activateTransport = function(e, t, n, r, i) {
                                    var a = this;
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "transport = " + t), e && f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", "error = " + e), n && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionId =  " + n), r && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.activateTransport()", "connectionDetails =  " + JSON.stringify(r)), i && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.activateTransport()", "serial =  " + i), this.persistTransportPreference(t);
                                    var l = this.state,
                                        c = this.states.connected.state;
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "current state = " + l.state), l.state == this.states.closing.state || l.state == this.states.closed.state || l.state == this.states.failed.state) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Disconnecting transport and abandoning"), t.disconnect(), !1;
                                    if (s.arrDeleteValue(this.pendingTransports, t), !t.isConnected) return f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.activateTransport()", "Declining to activate transport " + t + " since it appears to no longer be connected"), !1;
                                    var h = this.activeProtocol;
                                    this.activeProtocol = new o.default(t), this.host = t.params.host;
                                    var p = r.connectionKey;
                                    if (p && this.connectionKey != p && this.setConnection(n, r, i, !!e), this.onConnectionDetailsUpdate(r, t), u.default.Config.nextTick((function() {
                                            t.on("connected", (function(e, n, r) {
                                                a.onConnectionDetailsUpdate(r, t), a.emit("update", new d.default(c, c, null, e))
                                            }))
                                        })), l.state === this.states.connected.state ? e && (this.errorReason = this.realtime.connection.errorReason = e, this.emit("update", new d.default(c, c, null, e))) : (this.notifyState({
                                            state: "connected",
                                            error: e
                                        }), this.errorReason = this.realtime.connection.errorReason = e || null), this.emit("transport.active", t), h)
                                        if (h.messageQueue.count() > 0 && f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Previous active protocol (for transport " + h.transport.shortName + ", new one is " + t.shortName + ") finishing with " + h.messageQueue.count() + " messages still pending"), h.transport === t) {
                                            var g = "Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = " + t.shortName + "; stack = " + (new Error).stack;
                                            f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", g)
                                        } else h.finish();
                                    return s.safeArrForEach(this.pendingTransports, (function(e) {
                                        if (e === t) {
                                            var n = "Assumption violated: activating a transport that is still marked as a pending transport; transport = " + t.shortName + "; stack = " + (new Error).stack;
                                            f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", n), s.arrDeleteValue(a.pendingTransports, t)
                                        } else e.disconnect()
                                    })), s.safeArrForEach(this.proposedTransports, (function(e) {
                                        e === t ? (f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.activateTransport()", "Assumption violated: activating a transport that is still marked as a proposed transport; transport = " + t.shortName + "; stack = " + (new Error).stack), s.arrDeleteValue(a.proposedTransports, t)) : e.dispose()
                                    })), !0
                                }, n.prototype.deactivateTransport = function(e, t, n) {
                                    var r = this.activeProtocol,
                                        i = r && r.getTransport() === e,
                                        o = s.arrDeleteValue(this.pendingTransports, e),
                                        a = s.arrDeleteValue(this.proposedTransports, e),
                                        l = this.noTransportsScheduledForActivation();
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "transport = " + e), f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.deactivateTransport()", "state = " + t + (i ? "; was active" : o ? "; was pending" : a ? "; was proposed" : "") + (l ? "" : "; another transport is scheduled for activation")), n && n.message && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "reason =  " + n.message), i && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "Getting, clearing, and requeuing " + this.activeProtocol.messageQueue.count() + " pending messages"), this.queuePendingMessages(r.getPendingMessages()), u.default.Config.nextTick((function() {
                                            r.clearPendingMessages()
                                        })), this.activeProtocol = this.host = null, clearTimeout(this.channelResumeCheckTimer)), this.emit("transport.inactive", e), i && l || i && "failed" === t || "closed" === t || null === r && o && 0 === this.pendingTransports.length) {
                                        if ("disconnected" === t && n && n.statusCode > 500 && this.httpHosts.length > 1) return this.unpersistTransportPreference(), this.forceFallbackHost = !0, void this.notifyState({
                                            state: t,
                                            error: n,
                                            retryImmediately: !0
                                        });
                                        var c = "failed" === t && g.default.isTokenErr(n) ? "disconnected" : t;
                                        this.notifyState({
                                            state: c,
                                            error: n
                                        })
                                    } else i && "disconnected" === t && this.state !== this.states.synchronizing && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.deactivateTransport()", "wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), this.notifyState({
                                        state: "connecting",
                                        error: n
                                    }))
                                }, n.prototype.noTransportsScheduledForActivation = function() {
                                    return s.isEmpty(this.pendingTransports) || this.pendingTransports.every((function(e) {
                                        return !e.isConnected
                                    }))
                                }, n.prototype.sync = function(e, t, n) {
                                    var r = setTimeout((function() {
                                            e.off("sync"), n(new p.default("Timeout waiting for sync response", 5e4, 500))
                                        }), this.options.timeouts.realtimeRequestTimeout),
                                        s = i.default.fromValues({
                                            action: R.SYNC,
                                            connectionKey: this.connectionKey
                                        });
                                    void 0 !== t && (s.connectionSerial = t), e.send(s), e.once("sync", (function(e, t) {
                                        clearTimeout(r), n(null, e, t)
                                    }))
                                }, n.prototype.setConnection = function(e, t, n, r) {
                                    var i = this,
                                        s = this.connectionId,
                                        o = s && s !== e;
                                    (o || !s && r) && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setConnection()", "Resetting msgSerial"), this.msgSerial = 0), this.connectionId !== e ? (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setConnection()", "New connectionId; reattaching any attached channels"), u.default.Config.nextTick((function() {
                                        i.realtime.channels.reattach()
                                    }))) : this.options.checkChannelsOnResume && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.setConnection()", "Same connectionId; checkChannelsOnResume is enabled"), clearTimeout(this.channelResumeCheckTimer), this.realtime.channels.resetAttachedMsgIndicators(), this.channelResumeCheckTimer = setTimeout((function() {
                                        i.realtime.channels.checkAttachedMsgIndicators(e)
                                    }), 3e4)), this.realtime.connection.id = this.connectionId = e, this.realtime.connection.key = this.connectionKey = t.connectionKey;
                                    var a = o || !s;
                                    this.setConnectionSerial(n, a, !1)
                                }, n.prototype.clearConnection = function() {
                                    this.realtime.connection.id = this.connectionId = void 0, this.realtime.connection.key = this.connectionKey = void 0, this.clearConnectionSerial(), this.msgSerial = 0, this.unpersistConnection()
                                }, n.prototype.setConnectionSerial = function(e, t, n) {
                                    if (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.setConnectionSerial()", "Updating connection serial; serial = " + e + "; force = " + t + "; previous = " + this.connectionSerial), void 0 !== e) {
                                        if (e <= this.connectionSerial && !t) return n && f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.setConnectionSerial()", "received message with connectionSerial " + e + ", but current connectionSerial is " + this.connectionSerial + "; assuming message is a duplicate and discarding it"), !0;
                                        this.realtime.connection.serial = this.connectionSerial = e, this.setRecoveryKey()
                                    }
                                }, n.prototype.clearConnectionSerial = function() {
                                    this.realtime.connection.serial = this.connectionSerial = void 0, this.clearRecoveryKey()
                                }, n.prototype.setRecoveryKey = function() {
                                    this.realtime.connection.recoveryKey = this.connectionKey + ":" + this.connectionSerial + ":" + this.msgSerial
                                }, n.prototype.clearRecoveryKey = function() {
                                    this.realtime.connection.recoveryKey = null
                                }, n.prototype.checkConnectionStateFreshness = function() {
                                    if (this.lastActivity && this.connectionId) {
                                        var e = s.now() - this.lastActivity;
                                        e > this.connectionStateTtl + this.maxIdleInterval && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.checkConnectionStateFreshness()", "Last known activity from realtime was " + e + "ms ago; discarding connection state"), this.clearConnection(), this.states.connecting.failState = "suspended")
                                    }
                                }, n.prototype.persistConnection = function() {
                                    if (C()) {
                                        var t = this.realtime.connection.recoveryKey;
                                        t && (n = {
                                            recoveryKey: t,
                                            disconnectedAt: s.now(),
                                            location: e.location,
                                            clientId: this.realtime.auth.clientId
                                        }, C() && (null === (i = null === (r = u.default.WebStorage) || void 0 === r ? void 0 : r.setSession) || void 0 === i || i.call(r, S, n)))
                                    }
                                    var n, r, i
                                }, n.prototype.unpersistConnection = function() {
                                    var e, t;
                                    C() && (null === (t = null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.removeSession) || void 0 === t || t.call(e, S))
                                }, n.prototype.getError = function() {
                                    return this.errorReason || this.getStateError()
                                }, n.prototype.getStateError = function() {
                                    return h.default[this.state.state]
                                }, n.prototype.activeState = function() {
                                    return this.state.queueEvents || this.state.sendEvents
                                }, n.prototype.enactStateChange = function(e) {
                                    var t = "failed" === e.current ? f.default.LOG_ERROR : f.default.LOG_MAJOR;
                                    f.default.logAction(t, "Connection state", e.current + (e.reason ? "; reason: " + e.reason : "")), f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.enactStateChange", "setting new state: " + e.current + "; reason = " + (e.reason && e.reason.message));
                                    var n = this.state = this.states[e.current];
                                    e.reason && (this.errorReason = e.reason, this.realtime.connection.errorReason = e.reason), (n.terminal || "suspended" === n.state) && this.clearConnection(), this.emit("connectionstate", e)
                                }, n.prototype.startTransitionTimer = function(e) {
                                    var t = this;
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "transitionState: " + e.state), this.transitionTimer && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.startTransitionTimer()", "clearing already-running timer"), clearTimeout(this.transitionTimer)), this.transitionTimer = setTimeout((function() {
                                        t.transitionTimer && (t.transitionTimer = null, f.default.logAction(f.default.LOG_MINOR, "ConnectionManager " + e.state + " timer expired", "requesting new state: " + e.failState), t.notifyState({
                                            state: e.failState
                                        }))
                                    }), e.retryDelay)
                                }, n.prototype.cancelTransitionTimer = function() {
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.cancelTransitionTimer()", ""), this.transitionTimer && (clearTimeout(this.transitionTimer), this.transitionTimer = null)
                                }, n.prototype.startSuspendTimer = function() {
                                    var e = this;
                                    this.suspendTimer || (this.suspendTimer = setTimeout((function() {
                                        e.suspendTimer && (e.suspendTimer = null, f.default.logAction(f.default.LOG_MINOR, "ConnectionManager suspend timer expired", "requesting new state: suspended"), e.states.connecting.failState = "suspended", e.notifyState({
                                            state: "suspended"
                                        }))
                                    }), this.connectionStateTtl))
                                }, n.prototype.checkSuspendTimer = function(e) {
                                    "disconnected" !== e && "suspended" !== e && "connecting" !== e && this.cancelSuspendTimer()
                                }, n.prototype.cancelSuspendTimer = function() {
                                    this.states.connecting.failState = "disconnected", this.suspendTimer && (clearTimeout(this.suspendTimer), this.suspendTimer = null)
                                }, n.prototype.startRetryTimer = function(e) {
                                    var t = this;
                                    this.retryTimer = setTimeout((function() {
                                        f.default.logAction(f.default.LOG_MINOR, "ConnectionManager retry timer expired", "retrying"), t.retryTimer = null, t.requestState({
                                            state: "connecting"
                                        })
                                    }), e)
                                }, n.prototype.cancelRetryTimer = function() {
                                    this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null)
                                }, n.prototype.notifyState = function(e) {
                                    var t = this,
                                        n = e.state,
                                        r = "disconnected" === n && (this.state === this.states.connected || this.state === this.states.synchronizing || e.retryImmediately || this.state === this.states.connecting && e.error && g.default.isTokenErr(e.error) && !(this.errorReason && g.default.isTokenErr(this.errorReason)));
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.notifyState()", "new state: " + n + (r ? "; will retry connection immediately" : "")), n != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(e.state), "suspended" !== n && "connected" !== n || (this.disconnectedRetryCount = 0), !this.state.terminal)) {
                                        var i = this.states[e.state],
                                            o = i.retryDelay;
                                        "disconnected" === i.state && (this.disconnectedRetryCount++, o = i.retryDelay * s.getBackoffCoefficient(this.disconnectedRetryCount) * s.getJitterCoefficient());
                                        var a = new d.default(this.state.state, i.state, o, e.error || h.default[i.state]);
                                        if (r) {
                                            var l = function() {
                                                    t.state === t.states.disconnected && (t.lastAutoReconnectAttempt = s.now(), t.requestState({
                                                        state: "connecting"
                                                    }))
                                                },
                                                c = this.lastAutoReconnectAttempt && s.now() - this.lastAutoReconnectAttempt + 1;
                                            c && c < 1e3 ? (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.notifyState()", "Last reconnect attempt was only " + c + "ms ago, waiting another " + (1e3 - c) + "ms before trying again"), setTimeout(l, 1e3 - c)) : u.default.Config.nextTick(l)
                                        } else "disconnected" !== n && "suspended" !== n || this.startRetryTimer(o);
                                        ("disconnected" === n && !r || "suspended" === n || i.terminal) && u.default.Config.nextTick((function() {
                                            t.disconnectAllTransports()
                                        })), "connected" != n || this.activeProtocol || f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.notifyState()", "Broken invariant: attempted to go into connected state, but there is no active protocol"), this.enactStateChange(a), this.state.sendEvents ? this.sendQueuedMessages() : this.state.queueEvents || (this.realtime.channels.propogateConnectionInterruption(n, a.reason), this.failQueuedMessages(a.reason))
                                    }
                                }, n.prototype.requestState = function(e) {
                                    var t = this,
                                        n = e.state;
                                    if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.requestState()", "requested state: " + n + "; current state: " + this.state.state), n != this.state.state && (this.cancelTransitionTimer(), this.cancelRetryTimer(), this.checkSuspendTimer(n), !("connecting" == n && "connected" == this.state.state || "closing" == n && "closed" == this.state.state))) {
                                        var r = this.states[n],
                                            i = new d.default(this.state.state, r.state, null, e.error || h.default[r.state]);
                                        this.enactStateChange(i), "connecting" == n && u.default.Config.nextTick((function() {
                                            t.startConnect()
                                        })), "closing" == n && this.closeImpl()
                                    }
                                }, n.prototype.startConnect = function() {
                                    var e = this;
                                    if (this.state === this.states.connecting) {
                                        var t = this.realtime.auth,
                                            n = ++this.connectCounter,
                                            r = function() {
                                                e.checkConnectionStateFreshness(), e.getTransportParams((function(t) {
                                                    n === e.connectCounter && e.connectImpl(t, n)
                                                }))
                                            };
                                        if (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.startConnect()", "starting connection"), this.startSuspendTimer(), this.startTransitionTimer(this.states.connecting), "basic" === t.method) r();
                                        else {
                                            var i = function(t) {
                                                n === e.connectCounter && (t ? e.actOnErrorFromAuthorize(t) : r())
                                            };
                                            this.errorReason && g.default.isTokenErr(this.errorReason) ? t._forceNewToken(null, null, i) : t._ensureValidAuthCredentials(!1, i)
                                        }
                                    } else f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.startConnect()", "Must be in connecting state to connect, but was " + this.state.state)
                                }, n.prototype.connectImpl = function(e, t) {
                                    var n = this.state.state;
                                    n !== this.states.connecting.state && n !== this.states.connected.state ? f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Must be in connecting state to connect (or connected to upgrade), but was " + n) : this.pendingTransports.length ? f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectImpl()", "Transports " + this.pendingTransports[0].toString() + " currently pending; taking no action") : n == this.states.connected.state ? this.upgradeIfNeeded(e) : this.transports.length > 1 && this.getTransportPreference() ? this.connectPreference(e) : this.connectBase(e, t)
                                }, n.prototype.connectPreference = function(e) {
                                    var t = this,
                                        n = this.getTransportPreference(),
                                        r = !1;
                                    s.arrIn(this.transports, n) || (this.unpersistTransportPreference(), this.connectImpl(e)), f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Trying to connect with stored transport preference " + n);
                                    var i = setTimeout((function() {
                                        r = !0, t.state.state !== t.states.connected.state && (f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectPreference()", "Shortcircuit connection attempt with " + n + " failed; clearing preference and trying from scratch"), t.disconnectAllTransports(), t.unpersistTransportPreference()), t.connectImpl(e)
                                    }), this.options.timeouts.preferenceConnectTimeout);
                                    e.host = this.httpHosts[0], this.tryATransport(e, n, (function(n, o) {
                                        clearTimeout(i), r && o ? (o.off(), o.disconnect(), s.arrDeleteValue(t.pendingTransports, o)) : o || n || (t.unpersistTransportPreference(), t.connectImpl(e))
                                    }))
                                }, n.prototype.connectBase = function(e, t) {
                                    var n = this,
                                        r = function(e) {
                                            n.notifyState({
                                                state: n.states.connecting.failState,
                                                error: e
                                            })
                                        },
                                        i = this.httpHosts.slice(),
                                        o = function(e, r) {
                                            t === n.connectCounter && (r || e || u())
                                        };
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.connectBase()", "Trying to connect with base transport " + this.baseTransport);
                                    var a = i.shift();
                                    if (a) {
                                        e.host = a;
                                        var u = function() {
                                            i.length ? n.realtime.http.checkConnectivity ? n.realtime.http.checkConnectivity((function(a, u) {
                                                t === n.connectCounter && (a ? r(a) : u ? (e.host = s.arrPopRandomElement(i), n.tryATransport(e, n.baseTransport, o)) : r(new p.default("Unable to connect (network unreachable)", 80003, 404)))
                                            })) : r(new p.default("Internal error: Http.checkConnectivity not set", null, 500)) : r(new p.default("Unable to connect (and no more fallback hosts to try)", 80003, 404))
                                        };
                                        if (this.forceFallbackHost && i.length) return this.forceFallbackHost = !1, void u();
                                        this.tryATransport(e, this.baseTransport, o)
                                    } else r(new p.default("Unable to connect (no available host)", 80003, 404))
                                }, n.prototype.getUpgradePossibilities = function() {
                                    var e = this.activeProtocol.getTransport().shortName,
                                        t = s.arrIndexOf(this.upgradeTransports, e);
                                    return this.upgradeTransports.slice(t + 1)
                                }, n.prototype.upgradeIfNeeded = function(e) {
                                    var t = this,
                                        n = this.getUpgradePossibilities();
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.upgradeIfNeeded()", "upgrade possibilities: " + u.default.Config.inspect(n)), n.length && s.arrForEach(n, (function(n) {
                                        var r = t.createTransportParams(e.host, "upgrade");
                                        t.tryATransport(r, n, T)
                                    }))
                                }, n.prototype.closeImpl = function() {
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.closeImpl()", "closing connection"), this.cancelSuspendTimer(), this.startTransitionTimer(this.states.closing), s.safeArrForEach(this.pendingTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing pending transport: " + e), e && e.close()
                                    })), s.safeArrForEach(this.proposedTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Disposing of proposed transport: " + e), e && e.dispose()
                                    })), this.activeProtocol && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.closeImpl()", "Closing active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().close()), this.notifyState({
                                        state: "closed"
                                    })
                                }, n.prototype.onAuthUpdated = function(e, t) {
                                    var n, r = this;
                                    switch (this.state.state) {
                                        case "connected":
                                            if (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Sending AUTH message on active transport"), (this.pendingTransports.length || this.proposedTransports.length) && this.state !== this.states.synchronizing) {
                                                this.disconnectAllTransports(!0);
                                                var s = this.activeProtocol.getTransport().params;
                                                u.default.Config.nextTick((function() {
                                                    "connected" === r.state.state && r.upgradeIfNeeded(s)
                                                }))
                                            }
                                            var o = null === (n = this.activeProtocol) || void 0 === n ? void 0 : n.getTransport();
                                            o && o.onAuthUpdated && o.onAuthUpdated(e);
                                            var a = i.default.fromValues({
                                                action: R.AUTH,
                                                auth: {
                                                    accessToken: e.token
                                                }
                                            });
                                            this.send(a);
                                            var l = function() {
                                                    r.off(c), t(null, e)
                                                },
                                                c = function(e) {
                                                    "failed" === e.current && (r.off(l), r.off(c), t(e.reason || r.getStateError()))
                                                };
                                            this.once("connectiondetails", l), this.on("connectionstate", c);
                                            break;
                                        case "connecting":
                                            f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Aborting current connection attempts in order to start again with the new auth details"), this.disconnectAllTransports();
                                        default:
                                            f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.onAuthUpdated()", "Connection state is " + this.state.state + "; waiting until either connected or failed");
                                            var d = function(n) {
                                                switch (n.current) {
                                                    case "connected":
                                                        r.off(d), t(null, e);
                                                        break;
                                                    case "failed":
                                                    case "closed":
                                                    case "suspended":
                                                        r.off(d), t(n.reason || r.getStateError())
                                                }
                                            };
                                            this.on("connectionstate", d), "connecting" === this.state.state ? this.startConnect() : this.requestState({
                                                state: "connecting"
                                            })
                                    }
                                }, n.prototype.disconnectAllTransports = function(e) {
                                    f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.disconnectAllTransports()", "Disconnecting all transports" + (e ? " except the active transport" : "")), this.connectCounter++, s.safeArrForEach(this.pendingTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting pending transport: " + e), e && e.disconnect()
                                    })), this.pendingTransports = [], s.safeArrForEach(this.proposedTransports, (function(e) {
                                        f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disposing of proposed transport: " + e), e && e.dispose()
                                    })), this.proposedTransports = [], this.activeProtocol && !e && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.disconnectAllTransports()", "Disconnecting active transport: " + this.activeProtocol.getTransport()), this.activeProtocol.getTransport().disconnect())
                                }, n.prototype.send = function(e, t, n) {
                                    n = n || T;
                                    var r = this.state;
                                    if (r.sendEvents) return f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.send()", "sending event"), void this.sendImpl(new o.PendingMessage(e, n));
                                    if (!(t && r.queueEvents || r.forceQueueEvents)) {
                                        var s = "rejecting event, queueEvent was " + t + ", state was " + r.state;
                                        return f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.send()", s), void n(this.errorReason || new p.default(s, 9e4, 400))
                                    }
                                    f.default.shouldLog(f.default.LOG_MICRO) && f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.send()", "queueing msg; " + i.default.stringify(e)), this.queue(e, n)
                                }, n.prototype.sendImpl = function(e) {
                                    var t = e.message;
                                    e.ackRequired && !e.sendAttempted && (t.msgSerial = this.msgSerial++, this.setRecoveryKey());
                                    try {
                                        this.activeProtocol.send(e)
                                    } catch (e) {
                                        f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.sendImpl()", "Unexpected exception in transport.send(): " + e.stack)
                                    }
                                }, n.prototype.queue = function(e, t) {
                                    f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.queue()", "queueing event");
                                    var n = this.queuedMessages.last(),
                                        r = this.options.maxMessageSize;
                                    n && !n.sendAttempted && function(e, t, n) {
                                        var r;
                                        if (e.channel !== t.channel) return !1;
                                        if ((r = e.action) !== R.PRESENCE && r !== R.MESSAGE) return !1;
                                        if (r !== t.action) return !1;
                                        var i = r === R.PRESENCE ? "presence" : "messages",
                                            o = e[i].concat(t[i]);
                                        return !(m.default.getMessagesSize(o) > n || !s.allSame(o, "clientId") || !s.arrEvery(o, (function(e) {
                                            return !e.id
                                        })) || (e[i] = o, 0))
                                    }(n.message, e, r) ? (n.merged || (n.callback = y.default.create([n.callback]), n.merged = !0), n.callback.push(t)) : this.queuedMessages.push(new o.PendingMessage(e, t))
                                }, n.prototype.sendQueuedMessages = function() {
                                    var e;
                                    for (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.sendQueuedMessages()", "sending " + this.queuedMessages.count() + " queued messages"); e = this.queuedMessages.shift();) this.sendImpl(e)
                                }, n.prototype.queuePendingMessages = function(e) {
                                    e && e.length && (f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.queuePendingMessages()", "queueing " + e.length + " pending messages"), this.queuedMessages.prepend(e))
                                }, n.prototype.failQueuedMessages = function(e) {
                                    var t = this.queuedMessages.count();
                                    t > 0 && (f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.failQueuedMessages()", "failing " + t + " queued messages, err = " + s.inspectError(e)), this.queuedMessages.completeAllMessages(e))
                                }, n.prototype.onChannelMessage = function(e, t) {
                                    var n = this.activeProtocol && t === this.activeProtocol.getTransport(),
                                        r = s.arrIn(this.pendingTransports, t) && this.state == this.states.synchronizing,
                                        o = e.action === R.MESSAGE || e.action === R.PRESENCE;
                                    if (n || r) {
                                        if (o) {
                                            if (this.setConnectionSerial(e.connectionSerial, !1, !0)) return;
                                            if (i.default.isDuplicate(e, this.mostRecentMsg)) return void f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.onChannelMessage()", "received message with different connectionSerial, but same message id as a previous; discarding; id = " + e.id);
                                            this.mostRecentMsg = e
                                        }
                                        this.realtime.channels.onChannelMessage(e)
                                    } else s.arrIndexOf([R.ACK, R.NACK, R.ERROR], e.action) > -1 ? this.realtime.channels.onChannelMessage(e) : f.default.logAction(f.default.LOG_MICRO, "ConnectionManager.onChannelMessage()", "received message " + JSON.stringify(e) + "on defunct transport; discarding")
                                }, n.prototype.ping = function(e, t) {
                                    var n = this;
                                    if (e) {
                                        f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.ping()", "transport = " + e);
                                        var r = s.now(),
                                            i = s.cheapRandStr(),
                                            o = function(n) {
                                                if (n === i) {
                                                    e.off("heartbeat", o), clearTimeout(a);
                                                    var u = s.now() - r;
                                                    t(null, u)
                                                }
                                            },
                                            a = setTimeout((function() {
                                                e.off("heartbeat", o), t(new p.default("Timeout waiting for heartbeat response", 5e4, 500))
                                            }), this.options.timeouts.realtimeRequestTimeout);
                                        return e.on("heartbeat", o), void e.ping(i)
                                    }
                                    if ("connected" === this.state.state) {
                                        var l = !1,
                                            c = function() {
                                                l || (l = !0, u.default.Config.nextTick((function() {
                                                    n.ping(null, t)
                                                })))
                                            };
                                        this.on("transport.active", c), this.ping(this.activeProtocol.getTransport(), (function(e, r) {
                                            n.off("transport.active", c), l || (l = !0, t(e, r))
                                        }))
                                    } else t(new p.default("Unable to ping service; not connected", 4e4, 400))
                                }, n.prototype.abort = function(e) {
                                    this.activeProtocol.getTransport().fail(e)
                                }, n.prototype.registerProposedTransport = function(e) {
                                    this.proposedTransports.push(e)
                                }, n.prototype.getTransportPreference = function() {
                                    var e, t;
                                    return this.transportPreference || w() && (null === (t = null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.get) || void 0 === t ? void 0 : t.call(e, O))
                                }, n.prototype.persistTransportPreference = function(e) {
                                    var t, n;
                                    s.arrIn(a.default.upgradeTransports, e.shortName) && (this.transportPreference = e.shortName, w() && (null === (n = null === (t = u.default.WebStorage) || void 0 === t ? void 0 : t.set) || void 0 === n || n.call(t, O, e.shortName)))
                                }, n.prototype.unpersistTransportPreference = function() {
                                    var e, t;
                                    this.transportPreference = null, w() && (null === (t = null === (e = u.default.WebStorage) || void 0 === e ? void 0 : e.remove) || void 0 === t || t.call(e, O))
                                }, n.prototype.actOnErrorFromAuthorize = function(e) {
                                    if (40171 === e.code) this.notifyState({
                                        state: "failed",
                                        error: e
                                    });
                                    else if (e.statusCode === b.default.Forbidden) {
                                        var t = "Client configured authentication provider returned 403; failing the connection";
                                        f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.actOnErrorFromAuthorize()", t), this.notifyState({
                                            state: "failed",
                                            error: new p.default(t, 80019, 403, e)
                                        })
                                    } else t = "Client configured authentication provider request failed", f.default.logAction(f.default.LOG_MINOR, "ConnectionManager.actOnErrorFromAuthorize", t), this.notifyState({
                                        state: this.state.failState,
                                        error: new p.default(t, 80019, 401, e)
                                    })
                                }, n.prototype.onConnectionDetailsUpdate = function(e, t) {
                                    if (e) {
                                        this.connectionDetails = e, e.maxMessageSize && (this.options.maxMessageSize = e.maxMessageSize);
                                        var n = e.clientId;
                                        if (n) {
                                            var r = this.realtime.auth._uncheckedSetClientId(n);
                                            if (r) return f.default.logAction(f.default.LOG_ERROR, "ConnectionManager.onConnectionDetailsUpdate()", r.message), void t.fail(r)
                                        }
                                        var i = e.connectionStateTtl;
                                        i && (this.connectionStateTtl = i), this.maxIdleInterval = e.maxIdleInterval, this.emit("connectiondetails", e)
                                    }
                                }, n.supportedTransports = {}, n
                            }(l.default);
                            t.default = L
                        }).call(this, n(12))
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(10)),
                            s = r.__importStar(n(2)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(3)),
                            u = r.__importDefault(n(19)),
                            l = r.__importDefault(n(5)),
                            c = r.__importDefault(n(0)),
                            f = i.default.Action,
                            d = i.default.fromValues({
                                action: f.CLOSE
                            }),
                            h = i.default.fromValues({
                                action: f.DISCONNECT
                            }),
                            p = function(e) {
                                function t(t, n, r, i) {
                                    var s = e.call(this) || this;
                                    return i && (r.format = void 0, r.heartbeats = !0), s.connectionManager = t, t.registerProposedTransport(s), s.auth = n, s.params = r, s.timeouts = r.options.timeouts, s.format = r.format, s.isConnected = !1, s.isFinished = !1, s.isDisposed = !1, s.maxIdleInterval = null, s.idleTimer = null, s.lastActivity = null, s
                                }
                                return r.__extends(t, e), t.prototype.connect = function() {}, t.prototype.close = function() {
                                    this.isConnected && this.requestClose(), this.finish("closed", u.default.closed)
                                }, t.prototype.disconnect = function(e) {
                                    this.isConnected && this.requestDisconnect(), this.finish("disconnected", e || u.default.disconnected)
                                }, t.prototype.fail = function(e) {
                                    this.isConnected && this.requestDisconnect(), this.finish("failed", e || u.default.failed)
                                }, t.prototype.finish = function(e, t) {
                                    var n;
                                    this.isFinished || (this.isFinished = !0, this.isConnected = !1, this.maxIdleInterval = null, clearTimeout(null !== (n = this.idleTimer) && void 0 !== n ? n : void 0), this.idleTimer = null, this.emit(e, t), this.dispose())
                                }, t.prototype.onProtocolMessage = function(e) {
                                    switch (a.default.shouldLog(a.default.LOG_MICRO) && a.default.logAction(a.default.LOG_MICRO, "Transport.onProtocolMessage()", "received on " + this.shortName + ": " + i.default.stringify(e) + "; connectionId = " + this.connectionManager.connectionId), this.onActivity(), e.action) {
                                        case f.HEARTBEAT:
                                            a.default.logAction(a.default.LOG_MICRO, "Transport.onProtocolMessage()", this.shortName + " heartbeat; connectionId = " + this.connectionManager.connectionId), this.emit("heartbeat", e.id);
                                            break;
                                        case f.CONNECTED:
                                            this.onConnect(e), this.emit("connected", e.error, e.connectionId, e.connectionDetails, e);
                                            break;
                                        case f.CLOSED:
                                            this.onClose(e);
                                            break;
                                        case f.DISCONNECTED:
                                            this.onDisconnect(e);
                                            break;
                                        case f.ACK:
                                            this.emit("ack", e.msgSerial, e.count);
                                            break;
                                        case f.NACK:
                                            this.emit("nack", e.msgSerial, e.count, e.error);
                                            break;
                                        case f.SYNC:
                                            if (void 0 !== e.connectionId) {
                                                this.emit("sync", e.connectionId, e.connectionId);
                                                break
                                            }
                                            this.connectionManager.onChannelMessage(e, this);
                                            break;
                                        case f.AUTH:
                                            this.auth.authorize((function(e) {
                                                e && a.default.logAction(a.default.LOG_ERROR, "Transport.onProtocolMessage()", "Ably requested re-authentication, but unable to obtain a new token: " + s.inspectError(e))
                                            }));
                                            break;
                                        case f.ERROR:
                                            if (a.default.logAction(a.default.LOG_MINOR, "Transport.onProtocolMessage()", "received error action; connectionId = " + this.connectionManager.connectionId + "; err = " + c.default.Config.inspect(e.error) + (e.channel ? ", channel: " + e.channel : "")), void 0 === e.channel) {
                                                this.onFatalError(e);
                                                break
                                            }
                                            this.connectionManager.onChannelMessage(e, this);
                                            break;
                                        default:
                                            this.connectionManager.onChannelMessage(e, this)
                                    }
                                }, t.prototype.onConnect = function(e) {
                                    if (this.isConnected = !0, !e.connectionDetails) throw new Error("Transport.onConnect(): Connect message recieved without connectionDetails");
                                    var t = e.connectionDetails.maxIdleInterval;
                                    t && (this.maxIdleInterval = t + this.timeouts.realtimeRequestTimeout, this.onActivity())
                                }, t.prototype.onDisconnect = function(e) {
                                    var t = e && e.error;
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.onDisconnect()", "err = " + s.inspectError(t)), this.finish("disconnected", t)
                                }, t.prototype.onFatalError = function(e) {
                                    var t = e && e.error;
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.onFatalError()", "err = " + s.inspectError(t)), this.finish("failed", t)
                                }, t.prototype.onClose = function(e) {
                                    var t = e && e.error;
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.onClose()", "err = " + s.inspectError(t)), this.finish("closed", t)
                                }, t.prototype.requestClose = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.requestClose()", ""), this.send(d)
                                }, t.prototype.requestDisconnect = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.requestDisconnect()", ""), this.send(h)
                                }, t.prototype.ping = function(e) {
                                    var t = {
                                        action: i.default.Action.HEARTBEAT
                                    };
                                    e && (t.id = e), this.send(i.default.fromValues(t))
                                }, t.prototype.dispose = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Transport.dispose()", ""), this.isDisposed = !0, this.off()
                                }, t.prototype.onActivity = function() {
                                    this.maxIdleInterval && (this.lastActivity = this.connectionManager.lastActivity = s.now(), this.setIdleTimer(this.maxIdleInterval + 100))
                                }, t.prototype.setIdleTimer = function(e) {
                                    var t = this;
                                    this.idleTimer || (this.idleTimer = setTimeout((function() {
                                        t.onIdleTimerExpire()
                                    }), e))
                                }, t.prototype.onIdleTimerExpire = function() {
                                    if (!this.lastActivity || !this.maxIdleInterval) throw new Error("Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set");
                                    this.idleTimer = null;
                                    var e = s.now() - this.lastActivity,
                                        t = this.maxIdleInterval - e;
                                    if (t <= 0) {
                                        var n = "No activity seen from realtime in " + e + "ms; assuming connection has dropped";
                                        a.default.logAction(a.default.LOG_ERROR, "Transport.onIdleTimerExpire()", n), this.disconnect(new l.default(n, 80003, 408))
                                    } else this.setIdleTimer(t + 100)
                                }, t.tryConnect = function(e, t, n, r, i) {
                                    var s, o = new e(t, n, r),
                                        u = function(e) {
                                            clearTimeout(s), i({
                                                event: this.event,
                                                error: e
                                            })
                                        },
                                        c = t.options.timeouts.realtimeRequestTimeout;
                                    s = setTimeout((function() {
                                        o.off(["preconnect", "disconnected", "failed"]), o.dispose(), u.call({
                                            event: "disconnected"
                                        }, new l.default("Timeout waiting for transport to indicate itself viable", 5e4, 500))
                                    }), c), o.on(["failed", "disconnected"], u), o.on("preconnect", (function() {
                                        a.default.logAction(a.default.LOG_MINOR, "Transport.tryConnect()", "viable transport " + o), clearTimeout(s), o.off(["failed", "disconnected"], u), i(null, o)
                                    })), o.connect()
                                }, t
                            }(o.default);
                        t.default = p
                    }, function(e, t, n) {
                        var r, i, s, o, a, u, l, c;
                        e.exports = (c = n(6), n(40), n(23), i = (r = c).lib, s = i.Base, o = i.WordArray, a = r.algo, u = a.MD5, l = a.EvpKDF = s.extend({
                            cfg: s.extend({
                                keySize: 4,
                                hasher: u,
                                iterations: 1
                            }),
                            init: function(e) {
                                this.cfg = this.cfg.extend(e)
                            },
                            compute: function(e, t) {
                                for (var n, r = this.cfg, i = r.hasher.create(), s = o.create(), a = s.words, u = r.keySize, l = r.iterations; a.length < u;) {
                                    n && i.update(n), n = i.update(e).finalize(t), i.reset();
                                    for (var c = 1; c < l; c++) n = i.finalize(n), i.reset();
                                    s.concat(n)
                                }
                                return s.sigBytes = 4 * u, s
                            }
                        }), r.EvpKDF = function(e, t, n) {
                            return l.create(n).compute(e, t)
                        }, c.EvpKDF)
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(27), void(r.lib.Cipher || function(e) {
                            var t = r,
                                n = t.lib,
                                i = n.Base,
                                s = n.WordArray,
                                o = n.BufferedBlockAlgorithm,
                                a = t.enc,
                                u = (a.Utf8, a.Base64),
                                l = t.algo.EvpKDF,
                                c = n.Cipher = o.extend({
                                    cfg: i.extend(),
                                    createEncryptor: function(e, t) {
                                        return this.create(this._ENC_XFORM_MODE, e, t)
                                    },
                                    createDecryptor: function(e, t) {
                                        return this.create(this._DEC_XFORM_MODE, e, t)
                                    },
                                    init: function(e, t, n) {
                                        this.cfg = this.cfg.extend(n), this._xformMode = e, this._key = t, this.reset()
                                    },
                                    reset: function() {
                                        o.reset.call(this), this._doReset()
                                    },
                                    process: function(e) {
                                        return this._append(e), this._process()
                                    },
                                    finalize: function(e) {
                                        return e && this._append(e), this._doFinalize()
                                    },
                                    keySize: 4,
                                    ivSize: 4,
                                    _ENC_XFORM_MODE: 1,
                                    _DEC_XFORM_MODE: 2,
                                    _createHelper: function() {
                                        function e(e) {
                                            return "string" == typeof e ? _ : y
                                        }
                                        return function(t) {
                                            return {
                                                encrypt: function(n, r, i) {
                                                    return e(r).encrypt(t, n, r, i)
                                                },
                                                decrypt: function(n, r, i) {
                                                    return e(r).decrypt(t, n, r, i)
                                                }
                                            }
                                        }
                                    }()
                                }),
                                f = (n.StreamCipher = c.extend({
                                    _doFinalize: function() {
                                        return this._process(!0)
                                    },
                                    blockSize: 1
                                }), t.mode = {}),
                                d = n.BlockCipherMode = i.extend({
                                    createEncryptor: function(e, t) {
                                        return this.Encryptor.create(e, t)
                                    },
                                    createDecryptor: function(e, t) {
                                        return this.Decryptor.create(e, t)
                                    },
                                    init: function(e, t) {
                                        this._cipher = e, this._iv = t
                                    }
                                }),
                                h = f.CBC = function() {
                                    var t = d.extend();

                                    function n(t, n, r) {
                                        var i, s = this._iv;
                                        s ? (i = s, this._iv = e) : i = this._prevBlock;
                                        for (var o = 0; o < r; o++) t[n + o] ^= i[o]
                                    }
                                    return t.Encryptor = t.extend({
                                        processBlock: function(e, t) {
                                            var r = this._cipher,
                                                i = r.blockSize;
                                            n.call(this, e, t, i), r.encryptBlock(e, t), this._prevBlock = e.slice(t, t + i)
                                        }
                                    }), t.Decryptor = t.extend({
                                        processBlock: function(e, t) {
                                            var r = this._cipher,
                                                i = r.blockSize,
                                                s = e.slice(t, t + i);
                                            r.decryptBlock(e, t), n.call(this, e, t, i), this._prevBlock = s
                                        }
                                    }), t
                                }(),
                                p = (t.pad = {}).Pkcs7 = {
                                    pad: function(e, t) {
                                        for (var n = 4 * t, r = n - e.sigBytes % n, i = r << 24 | r << 16 | r << 8 | r, o = [], a = 0; a < r; a += 4) o.push(i);
                                        var u = s.create(o, r);
                                        e.concat(u)
                                    },
                                    unpad: function(e) {
                                        var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                                        e.sigBytes -= t
                                    }
                                },
                                g = (n.BlockCipher = c.extend({
                                    cfg: c.cfg.extend({
                                        mode: h,
                                        padding: p
                                    }),
                                    reset: function() {
                                        var e;
                                        c.reset.call(this);
                                        var t = this.cfg,
                                            n = t.iv,
                                            r = t.mode;
                                        this._xformMode == this._ENC_XFORM_MODE ? e = r.createEncryptor : (e = r.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == e ? this._mode.init(this, n && n.words) : (this._mode = e.call(r, this, n && n.words), this._mode.__creator = e)
                                    },
                                    _doProcessBlock: function(e, t) {
                                        this._mode.processBlock(e, t)
                                    },
                                    _doFinalize: function() {
                                        var e, t = this.cfg.padding;
                                        return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = this._process(!0)) : (e = this._process(!0), t.unpad(e)), e
                                    },
                                    blockSize: 4
                                }), n.CipherParams = i.extend({
                                    init: function(e) {
                                        this.mixIn(e)
                                    },
                                    toString: function(e) {
                                        return (e || this.formatter).stringify(this)
                                    }
                                })),
                                m = (t.format = {}).OpenSSL = {
                                    stringify: function(e) {
                                        var t = e.ciphertext,
                                            n = e.salt;
                                        return (n ? s.create([1398893684, 1701076831]).concat(n).concat(t) : t).toString(u)
                                    },
                                    parse: function(e) {
                                        var t, n = u.parse(e),
                                            r = n.words;
                                        return 1398893684 == r[0] && 1701076831 == r[1] && (t = s.create(r.slice(2, 4)), r.splice(0, 4), n.sigBytes -= 16), g.create({
                                            ciphertext: n,
                                            salt: t
                                        })
                                    }
                                },
                                y = n.SerializableCipher = i.extend({
                                    cfg: i.extend({
                                        format: m
                                    }),
                                    encrypt: function(e, t, n, r) {
                                        r = this.cfg.extend(r);
                                        var i = e.createEncryptor(n, r),
                                            s = i.finalize(t),
                                            o = i.cfg;
                                        return g.create({
                                            ciphertext: s,
                                            key: n,
                                            iv: o.iv,
                                            algorithm: e,
                                            mode: o.mode,
                                            padding: o.padding,
                                            blockSize: e.blockSize,
                                            formatter: r.format
                                        })
                                    },
                                    decrypt: function(e, t, n, r) {
                                        return r = this.cfg.extend(r), t = this._parse(t, r.format), e.createDecryptor(n, r).finalize(t.ciphertext)
                                    },
                                    _parse: function(e, t) {
                                        return "string" == typeof e ? t.parse(e, this) : e
                                    }
                                }),
                                v = (t.kdf = {}).OpenSSL = {
                                    execute: function(e, t, n, r) {
                                        r || (r = s.random(8));
                                        var i = l.create({
                                                keySize: t + n
                                            }).compute(e, r),
                                            o = s.create(i.words.slice(t), 4 * n);
                                        return i.sigBytes = 4 * t, g.create({
                                            key: i,
                                            iv: o,
                                            salt: r
                                        })
                                    }
                                },
                                _ = n.PasswordBasedCipher = y.extend({
                                    cfg: y.cfg.extend({
                                        kdf: v
                                    }),
                                    encrypt: function(e, t, n, r) {
                                        var i = (r = this.cfg.extend(r)).kdf.execute(n, e.keySize, e.ivSize);
                                        r.iv = i.iv;
                                        var s = y.encrypt.call(this, e, t, i.key, r);
                                        return s.mixIn(i), s
                                    },
                                    decrypt: function(e, t, n, r) {
                                        r = this.cfg.extend(r), t = this._parse(t, r.format);
                                        var i = r.kdf.execute(n, e.keySize, e.ivSize, t.salt);
                                        return r.iv = i.iv, y.decrypt.call(this, e, t, i.key, r)
                                    }
                                })
                        }()))
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0, t.Request = t.createRequest = void 0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(11)),
                            o = r.__importDefault(n(0)),
                            a = r.__importDefault(n(7)),
                            u = r.__importDefault(n(5)),
                            l = r.__importDefault(n(8)),
                            c = r.__importDefault(n(3)),
                            f = r.__importDefault(n(20)),
                            d = i.getGlobalObject(),
                            h = function() {},
                            p = d._ablyjs_jsonp = {};
                        p._ = function(e) {
                            return p["_" + e] || h
                        };
                        var g = 1,
                            m = "jsonp";

                        function y(e, t, n, r, s, o, a) {
                            return o = o || l.default.TIMEOUTS, new _(void 0, e, t, i.copy(n), r, s, o, a)
                        }
                        t.createRequest = y;
                        var v = function(e) {
                                function t(t, n, r) {
                                    var i = e.call(this, t, n, r) || this;
                                    return i.shortName = m, r.stream = !1, i
                                }
                                return r.__extends(t, e), t.isAvailable = function() {
                                    return o.default.Config.jsonpSupported && o.default.Config.allowComet
                                }, t.prototype.toString = function() {
                                    return "JSONPTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
                                }, t.prototype.createRequest = function(e, t, n, r, i, s, o) {
                                    return y(e, t, n, r, i, s = (null == this ? void 0 : this.timeouts) || s || l.default.TIMEOUTS, o)
                                }, t
                            }(s.default),
                            _ = function(e) {
                                function t(t, n, r, s, o, a, u, l) {
                                    var c = e.call(this) || this;
                                    return void 0 === t && (t = g++), c.id = t, c.uri = n, c.params = s || {}, c.params.rnd = i.cheapRandStr(), r && (r["X-Ably-Version"] && (c.params.v = r["X-Ably-Version"]), r["X-Ably-Lib"] && (c.params.lib = r["X-Ably-Lib"])), c.body = o, c.method = l, c.requestMode = a, c.timeouts = u, c.requestComplete = !1, c
                                }
                                return r.__extends(t, e), t.prototype.exec = function() {
                                    var e = this,
                                        t = this.id,
                                        n = this.body,
                                        r = this.method,
                                        s = this.uri,
                                        a = this.params;
                                    a.callback = "_ablyjs_jsonp._(" + t + ")", a.envelope = "jsonp", n && (a.body = n), r && "get" !== r && (a.method = r);
                                    var l = this.script = document.createElement("script"),
                                        d = s + i.toQueryString(a);
                                    l.src = d, l.src.split("/").slice(-1)[0] !== d.split("/").slice(-1)[0] && c.default.logAction(c.default.LOG_ERROR, "JSONP Request.exec()", "Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param"), l.async = !0, l.type = "text/javascript", l.charset = "UTF-8", l.onerror = function(t) {
                                        e.complete(new u.default("JSONP script error (event: " + o.default.Config.inspect(t) + ")", null, 400))
                                    }, p["_" + t] = function(t) {
                                        if (t.statusCode) {
                                            var n = t.response;
                                            if (204 == t.statusCode) e.complete(null, null, null, t.statusCode);
                                            else if (n)
                                                if (t.statusCode < 400 || i.isArray(n)) e.complete(null, n, t.headers, t.statusCode);
                                                else {
                                                    var r = n.error || new u.default("Error response received from server", null, t.statusCode);
                                                    e.complete(r)
                                                }
                                            else e.complete(new u.default("Invalid server response: no envelope detected", null, 500))
                                        } else e.complete(null, t)
                                    };
                                    var h = this.requestMode == f.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
                                    this.timer = setTimeout(this.abort.bind(this), h);
                                    var g = document.getElementsByTagName("head")[0];
                                    g.insertBefore(l, g.firstChild)
                                }, t.prototype.complete = function(e, t, n, r) {
                                    if (n = n || {}, !this.requestComplete) {
                                        this.requestComplete = !0;
                                        var i = void 0;
                                        t && (i = "string" == typeof t ? "text/plain" : "application/json", n["content-type"] = i, this.emit("data", t)), this.emit("complete", e, t, n, !0, r), this.dispose()
                                    }
                                }, t.prototype.abort = function() {
                                    this.dispose()
                                }, t.prototype.dispose = function() {
                                    var e = this.timer;
                                    e && (clearTimeout(e), this.timer = null);
                                    var t = this.script;
                                    t.parentNode && t.parentNode.removeChild(t), delete p[this.id], this.emit("disposed")
                                }, t
                            }(a.default);
                        t.Request = _, t.default = function(e) {
                            return d.JSONPTransport = v, v.isAvailable() && (e.supportedTransports.jsonp = v), v
                        }
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(3)),
                            o = r.__importDefault(n(8)),
                            a = r.__importDefault(n(16)),
                            u = r.__importDefault(n(46)),
                            l = r.__importDefault(n(18)),
                            c = r.__importDefault(n(33)),
                            f = r.__importDefault(n(5)),
                            d = r.__importDefault(n(49)),
                            h = r.__importDefault(n(17)),
                            p = r.__importDefault(n(0)),
                            g = function() {},
                            m = function() {
                                function e(e) {
                                    if (!e) {
                                        var t = "no options provided";
                                        throw s.default.logAction(s.default.LOG_ERROR, "Rest()", t), new Error(t)
                                    }
                                    var n = o.default.objectifyOptions(e);
                                    n.log && s.default.setLog(n.log.level, n.log.handler), s.default.logAction(s.default.LOG_MICRO, "Rest()", "initialized with clientOptions " + p.default.Config.inspect(e));
                                    var r = this.options = o.default.normaliseOptions(n);
                                    if (r.key) {
                                        var i = r.key.match(/^([^:\s]+):([^:.\s]+)$/);
                                        if (!i) throw t = "invalid key parameter", s.default.logAction(s.default.LOG_ERROR, "Rest()", t), new f.default(t, 40400, 404);
                                        r.keyName = i[1], r.keySecret = i[2]
                                    }
                                    if ("clientId" in r) {
                                        if ("string" != typeof r.clientId && null !== r.clientId) throw new f.default("clientId must be either a string or null", 40012, 400);
                                        if ("*" === r.clientId) throw new f.default('Canâ€™t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400)
                                    }
                                    s.default.logAction(s.default.LOG_MINOR, "Rest()", "started; version = " + o.default.version), this.baseUri = this.authority = function(e) {
                                        return o.default.getHttpScheme(r) + e + ":" + o.default.getPort(r, !1)
                                    }, this._currentFallback = null, this.serverTimeOffset = null, this.http = new p.default.Http(r), this.auth = new a.default(this, r), this.channels = new y(this), this.push = new u.default(this)
                                }
                                return e.prototype.stats = function(e, t) {
                                    if (void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else {
                                            if (this.options.promises) return i.promisify(this, "stats", [e]);
                                            t = g
                                        } var n = i.defaultGetHeaders(this.options),
                                        r = this.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        s = this.http.supportsLinkHeaders ? void 0 : r;
                                    this.options.headers && i.mixin(n, this.options.headers), new l.default(this, "/stats", n, s, (function(e, t, n) {
                                        for (var r = n ? e : JSON.parse(e), i = 0; i < r.length; i++) r[i] = d.default.fromValues(r[i]);
                                        return r
                                    })).get(e, t)
                                }, e.prototype.time = function(e, t) {
                                    var n = this;
                                    if (void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else if (this.options.promises) return i.promisify(this, "time", [e]);
                                    var r = t || g,
                                        s = i.defaultGetHeaders(this.options);
                                    this.options.headers && i.mixin(s, this.options.headers), this.http.do(h.default.Get, this, (function(e) {
                                        return n.authority(e) + "/time"
                                    }), s, null, e, (function(e, t, s, o) {
                                        if (e) r(e);
                                        else {
                                            o || (t = JSON.parse(t));
                                            var a = t[0];
                                            a ? (n.serverTimeOffset = a - i.now(), r(null, a)) : r(new f.default("Internal error (unexpected result type from GET /time)", 5e4, 500))
                                        }
                                    }))
                                }, e.prototype.request = function(e, t, n, r, s, o) {
                                    var a = this.options.useBinaryProtocol,
                                        u = a ? p.default.Config.msgpack.encode : JSON.stringify,
                                        c = a ? p.default.Config.msgpack.decode : JSON.parse,
                                        d = a ? i.Format.msgpack : i.Format.json,
                                        h = this.http.supportsLinkHeaders ? void 0 : d;
                                    n = n || {};
                                    var m = e.toLowerCase(),
                                        y = "get" == m ? i.defaultGetHeaders(this.options, d) : i.defaultPostHeaders(this.options, d);
                                    if (void 0 === o) {
                                        if (this.options.promises) return i.promisify(this, "request", [e, t, n, r, s]);
                                        o = g
                                    }
                                    "string" != typeof r && (r = u(r)), this.options.headers && i.mixin(y, this.options.headers), s && i.mixin(y, s);
                                    var v = new l.default(this, t, y, h, (function(e, t, n) {
                                        return i.ensureArray(n ? e : c(e))
                                    }), !0);
                                    if (!i.arrIn(p.default.Http.methods, m)) throw new f.default("Unsupported method " + m, 40500, 405);
                                    i.arrIn(p.default.Http.methodsWithBody, m) ? v[m](n, r, o) : v[m](n, o)
                                }, e.prototype.setLog = function(e) {
                                    s.default.setLog(e.level, e.handler)
                                }, e.Promise = function(t) {
                                    return (t = o.default.objectifyOptions(t)).promises = !0, new e(t)
                                }, e.Callbacks = e, e.Platform = p.default, e
                            }(),
                            y = function() {
                                function e(e) {
                                    this.rest = e, this.all = Object.create(null)
                                }
                                return e.prototype.get = function(e, t) {
                                    e = String(e);
                                    var n = this.all[e];
                                    return n ? t && n.setOptions(t) : this.all[e] = n = new c.default(this.rest, e, t), n
                                }, e.prototype.release = function(e) {
                                    delete this.all[String(e)]
                                }, e
                            }();
                        t.default = m
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function(e) {
                            var t = r,
                                n = t.lib,
                                i = n.WordArray,
                                s = n.Hasher,
                                o = t.algo,
                                a = [],
                                u = [];
                            ! function() {
                                function t(t) {
                                    for (var n = e.sqrt(t), r = 2; r <= n; r++)
                                        if (!(t % r)) return !1;
                                    return !0
                                }

                                function n(e) {
                                    return 4294967296 * (e - (0 | e)) | 0
                                }
                                for (var r = 2, i = 0; i < 64;) t(r) && (i < 8 && (a[i] = n(e.pow(r, .5))), u[i] = n(e.pow(r, 1 / 3)), i++), r++
                            }();
                            var l = [],
                                c = o.SHA256 = s.extend({
                                    _doReset: function() {
                                        this._hash = new i.init(a.slice(0))
                                    },
                                    _doProcessBlock: function(e, t) {
                                        for (var n = this._hash.words, r = n[0], i = n[1], s = n[2], o = n[3], a = n[4], c = n[5], f = n[6], d = n[7], h = 0; h < 64; h++) {
                                            if (h < 16) l[h] = 0 | e[t + h];
                                            else {
                                                var p = l[h - 15],
                                                    g = (p << 25 | p >>> 7) ^ (p << 14 | p >>> 18) ^ p >>> 3,
                                                    m = l[h - 2],
                                                    y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                                                l[h] = g + l[h - 7] + y + l[h - 16]
                                            }
                                            var v = r & i ^ r & s ^ i & s,
                                                _ = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                                b = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & c ^ ~a & f) + u[h] + l[h];
                                            d = f, f = c, c = a, a = o + b | 0, o = s, s = i, i = r, r = b + (_ + v) | 0
                                        }
                                        n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + c | 0, n[6] = n[6] + f | 0, n[7] = n[7] + d | 0
                                    },
                                    _doFinalize: function() {
                                        var t = this._data,
                                            n = t.words,
                                            r = 8 * this._nDataBytes,
                                            i = 8 * t.sigBytes;
                                        return n[i >>> 5] |= 128 << 24 - i % 32, n[14 + (i + 64 >>> 9 << 4)] = e.floor(r / 4294967296), n[15 + (i + 64 >>> 9 << 4)] = r, t.sigBytes = 4 * n.length, this._process(), this._hash
                                    },
                                    clone: function() {
                                        var e = s.clone.call(this);
                                        return e._hash = this._hash.clone(), e
                                    }
                                });
                            t.SHA256 = s._createHelper(c), t.HmacSHA256 = s._createHmacHelper(c)
                        }(Math), r.SHA256)
                    }, function(e, t, n) {
                        e.exports = n(6).enc.Utf8
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(7)),
                            o = r.__importDefault(n(3)),
                            a = r.__importDefault(n(34)),
                            u = r.__importDefault(n(9)),
                            l = r.__importDefault(n(5)),
                            c = r.__importDefault(n(18)),
                            f = r.__importDefault(n(24)),
                            d = r.__importDefault(n(0));

                        function h() {}

                        function p(e) {
                            return i.arrEvery(e, (function(e) {
                                return !e.id
                            }))
                        }

                        function g(e) {
                            var t = e || {};
                            if (t.cipher) {
                                if (!d.default.Crypto) throw new Error("Encryption not enabled; use ably.encryption.js instead");
                                var n = d.default.Crypto.getCipher(t.cipher);
                                t.cipher = n.cipherParams, t.channelCipher = n.cipher
                            } else "cipher" in t && (t.cipher = void 0, t.channelCipher = null);
                            return t
                        }
                        var m = function(e) {
                            function t(t, n, r) {
                                var i = e.call(this) || this;
                                return o.default.logAction(o.default.LOG_MINOR, "Channel()", "started; name = " + n), i.rest = t, i.name = n, i.basePath = "/channels/" + encodeURIComponent(n), i.presence = new a.default(i), i.channelOptions = g(r), i
                            }
                            return r.__extends(t, e), t.prototype.setOptions = function(e) {
                                this.channelOptions = g(e)
                            }, t.prototype.history = function(e, t) {
                                if (o.default.logAction(o.default.LOG_MICRO, "Channel.history()", "channel = " + this.name), void 0 === t)
                                    if ("function" == typeof e) t = e, e = null;
                                    else {
                                        if (this.rest.options.promises) return i.promisify(this, "history", arguments);
                                        t = h
                                    } this._history(e, t)
                            }, t.prototype._history = function(e, t) {
                                var n = this.rest,
                                    r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                    s = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                    o = i.defaultGetHeaders(n.options, r);
                                n.options.headers && i.mixin(o, n.options.headers);
                                var a = this.channelOptions;
                                new c.default(n, this.basePath + "/messages", o, s, (function(e, t, n) {
                                    return u.default.fromResponseBody(e, a, n ? void 0 : r)
                                })).get(e, t)
                            }, t.prototype.publish = function() {
                                var e, t, n = this,
                                    r = arguments.length,
                                    s = arguments[0],
                                    o = arguments[1],
                                    a = arguments[r - 1];
                                if ("function" != typeof a) {
                                    if (this.rest.options.promises) return i.promisify(this, "publish", arguments);
                                    a = h
                                }
                                if ("string" == typeof s || null === s) e = [u.default.fromValues({
                                    name: s,
                                    data: o
                                })], t = arguments[2];
                                else if (i.isObject(s)) e = [u.default.fromValues(s)], t = arguments[1];
                                else {
                                    if (!i.isArray(s)) throw new l.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                                    e = u.default.fromValuesArray(s), t = arguments[1]
                                }
                                "object" == typeof t && t || (t = {});
                                var c = this.rest,
                                    f = c.options,
                                    d = f.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                    g = c.options.idempotentRestPublishing,
                                    m = i.defaultPostHeaders(c.options, d);
                                if (f.headers && i.mixin(m, f.headers), g && p(e)) {
                                    var y = i.randomString(9);
                                    i.arrForEach(e, (function(e, t) {
                                        e.id = y + ":" + t.toString()
                                    }))
                                }
                                u.default.encodeArray(e, this.channelOptions, (function(r) {
                                    if (r) a(r);
                                    else {
                                        var i = u.default.getMessagesSize(e),
                                            s = f.maxMessageSize;
                                        i > s ? a(new l.default("Maximum size of messages that can be published at once exceeded ( was " + i + " bytes; limit is " + s + " bytes)", 40009, 400)) : n._publish(u.default.serialize(e, d), m, t, a)
                                    }
                                }))
                            }, t.prototype._publish = function(e, t, n, r) {
                                f.default.post(this.rest, this.basePath + "/messages", e, t, n, null, r)
                            }, t.prototype.status = function(e) {
                                if ("function" != typeof e && this.rest.options.promises) return i.promisify(this, "status", []);
                                var t = this.rest.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                    n = i.defaultPostHeaders(this.rest.options, t);
                                f.default.get(this.rest, this.basePath, n, {}, t, e || h)
                            }, t
                        }(s.default);
                        t.default = m
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(7)),
                            o = r.__importDefault(n(3)),
                            a = r.__importDefault(n(18)),
                            u = r.__importDefault(n(14));

                        function l() {}
                        var c = function(e) {
                            function t(t) {
                                var n = e.call(this) || this;
                                return n.channel = t, n.basePath = t.basePath + "/presence", n
                            }
                            return r.__extends(t, e), t.prototype.get = function(e, t) {
                                if (o.default.logAction(o.default.LOG_MICRO, "Presence.get()", "channel = " + this.channel.name), void 0 === t)
                                    if ("function" == typeof e) t = e, e = null;
                                    else {
                                        if (this.channel.rest.options.promises) return i.promisify(this, "get", arguments);
                                        t = l
                                    } var n = this.channel.rest,
                                    r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                    s = this.channel.rest.http.supportsLinkHeaders ? void 0 : r,
                                    c = i.defaultGetHeaders(n.options, r);
                                n.options.headers && i.mixin(c, n.options.headers);
                                var f = this.channel.channelOptions;
                                new a.default(n, this.basePath, c, s, (function(e, t, n) {
                                    return u.default.fromResponseBody(e, f, n ? void 0 : r)
                                })).get(e, t)
                            }, t.prototype.history = function(e, t) {
                                o.default.logAction(o.default.LOG_MICRO, "Presence.history()", "channel = " + this.channel.name), this._history(e, t)
                            }, t.prototype._history = function(e, t) {
                                if (void 0 === t)
                                    if ("function" == typeof e) t = e, e = null;
                                    else {
                                        if (this.channel.rest.options.promises) return i.promisify(this, "_history", arguments);
                                        t = l
                                    } var n = this.channel.rest,
                                    r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                    s = this.channel.rest.http.supportsLinkHeaders ? void 0 : r,
                                    o = i.defaultGetHeaders(n.options, r);
                                n.options.headers && i.mixin(o, n.options.headers);
                                var c = this.channel.channelOptions;
                                new a.default(n, this.basePath + "/history", o, s, (function(e, t, n) {
                                    return u.default.fromResponseBody(e, c, n ? void 0 : r)
                                })).get(e, t)
                            }, t
                        }(s.default);
                        t.default = c
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(7)),
                            s = r.__importDefault(n(3)),
                            o = function(e) {
                                function t() {
                                    var t = e.call(this) || this;
                                    return t.messages = [], t
                                }
                                return r.__extends(t, e), t.prototype.count = function() {
                                    return this.messages.length
                                }, t.prototype.push = function(e) {
                                    this.messages.push(e)
                                }, t.prototype.shift = function() {
                                    return this.messages.shift()
                                }, t.prototype.last = function() {
                                    return this.messages[this.messages.length - 1]
                                }, t.prototype.copyAll = function() {
                                    return this.messages.slice()
                                }, t.prototype.append = function(e) {
                                    this.messages.push.apply(this.messages, e)
                                }, t.prototype.prepend = function(e) {
                                    this.messages.unshift.apply(this.messages, e)
                                }, t.prototype.completeMessages = function(e, t, n) {
                                    s.default.logAction(s.default.LOG_MICRO, "MessageQueue.completeMessages()", "serial = " + e + "; count = " + t), n = n || null;
                                    var r = this.messages;
                                    if (0 === r.length) throw new Error("MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue");
                                    var i = r[0];
                                    if (i) {
                                        var o = i.message.msgSerial,
                                            a = e + t;
                                        if (a > o)
                                            for (var u = 0, l = r.splice(0, a - o); u < l.length; u++) l[u].callback(n);
                                        0 == r.length && this.emit("idle")
                                    }
                                }, t.prototype.completeAllMessages = function(e) {
                                    this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, e)
                                }, t.prototype.clear = function() {
                                    s.default.logAction(s.default.LOG_MICRO, "MessageQueue.clear()", "clearing " + this.messages.length + " messages"), this.messages = [], this.emit("idle")
                                }, t
                            }(i.default);
                        t.default = o
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = function(e, t, n, r) {
                            this.previous = e, this.current = t, n && (this.retryIn = n), r && (this.reason = r)
                        };
                        t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        t.__esModule = !0, t.isSuccessCode = void 0,
                            function(e) {
                                e[e.Success = 200] = "Success", e[e.NoContent = 204] = "NoContent", e[e.BadRequest = 400] = "BadRequest", e[e.Unauthorized = 401] = "Unauthorized", e[e.Forbidden = 403] = "Forbidden", e[e.RequestTimeout = 408] = "RequestTimeout", e[e.InternalServerError = 500] = "InternalServerError"
                            }(r || (r = {})), t.isSuccessCode = function(e) {
                                return e >= r.Success && e < r.BadRequest
                            }, t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(10)),
                            s = r.__importDefault(n(7)),
                            o = r.__importStar(n(2)),
                            a = r.__importDefault(n(33)),
                            u = r.__importDefault(n(3)),
                            l = r.__importDefault(n(54)),
                            c = r.__importDefault(n(9)),
                            f = r.__importDefault(n(39)),
                            d = r.__importDefault(n(5)),
                            h = r.__importDefault(n(14)),
                            p = r.__importDefault(n(19)),
                            g = i.default.Action,
                            m = function() {},
                            y = "statechange",
                            v = "sync";

                        function _(e) {
                            if (e && "params" in e && !o.isObject(e.params)) return new d.default("options.params must be an object", 4e4, 400);
                            if (e && "modes" in e) {
                                if (!o.isArray(e.modes)) return new d.default("options.modes must be an array", 4e4, 400);
                                for (var t = 0; t < e.modes.length; t++) {
                                    var n = e.modes[t];
                                    if (!n || "string" != typeof n || !o.arrIn(i.default.channelModes, String.prototype.toUpperCase.call(n))) return new d.default("Invalid channel mode: " + n, 4e4, 400)
                                }
                            }
                        }
                        var b = function(e) {
                            function t(t, n, r) {
                                var i = e.call(this, t, n, r) || this;
                                return i.retryCount = 0, i.history = function(e, t) {
                                    if (u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.history()", "channel = " + this.name), void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else {
                                            if (this.rest.options.promises) return o.promisify(this, "history", arguments);
                                            t = m
                                        } if (e && e.untilAttach) {
                                        if ("attached" !== this.state) return void t(new d.default("option untilAttach requires the channel to be attached", 4e4, 400));
                                        if (!this.properties.attachSerial) return void t(new d.default("untilAttach was specified and channel is attached, but attachSerial is not defined", 4e4, 400));
                                        delete e.untilAttach, e.from_serial = this.properties.attachSerial
                                    }
                                    a.default.prototype._history.call(this, e, t)
                                }, i.whenState = function(e, t) {
                                    return s.default.prototype.whenState.call(i, e, i.state, t)
                                }, u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel()", "started; name = " + n), i.realtime = t, i.presence = new l.default(i), i.connectionManager = t.connection.connectionManager, i.state = "initialized", i.subscriptions = new s.default, i.syncChannelSerial = void 0, i.properties = {
                                    attachSerial: void 0
                                }, i.setOptions(r), i.errorReason = null, i._requestedFlags = null, i._mode = null, i._attachedMsgIndicator = !1, i._attachResume = !1, i._decodingContext = {
                                    channelOptions: i.channelOptions,
                                    plugins: t.options.plugins || {},
                                    baseEncodedPreviousPayload: void 0
                                }, i._lastPayload = {
                                    messageId: null,
                                    protocolMessageChannelSerial: null,
                                    decodeFailureRecoveryInProgress: null
                                }, i._allChannelChanges = new s.default, i
                            }
                            return r.__extends(t, e), t.invalidStateError = function(e) {
                                return {
                                    statusCode: 400,
                                    code: 90001,
                                    message: "Channel operation failed as channel state is " + e
                                }
                            }, t.processListenerArgs = function(e) {
                                return "function" == typeof(e = Array.prototype.slice.call(e))[0] && e.unshift(null), null == e[e.length - 1] && e.pop(), e
                            }, t.prototype.setOptions = function(e, t) {
                                if (!t && this.rest.options.promises) return o.promisify(this, "setOptions", arguments);
                                var n = t || function(e) {
                                        e && u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.setOptions()", "Set options failed: " + e.toString())
                                    },
                                    r = _(e);
                                r ? n(r) : (a.default.prototype.setOptions.call(this, e), this._decodingContext && (this._decodingContext.channelOptions = this.channelOptions), this._shouldReattachToSetOptions(e) ? (this.attachImpl(), this._allChannelChanges.once((function(e) {
                                    switch (this.event) {
                                        case "update":
                                        case "attached":
                                            return void(null == n || n(null));
                                        default:
                                            return void(null == n || n(e.reason))
                                    }
                                }))) : n())
                            }, t.prototype._shouldReattachToSetOptions = function(e) {
                                return ("attached" === this.state || "attaching" === this.state) && (e.params || e.modes)
                            }, t.prototype.publish = function() {
                                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var r = t[0],
                                    i = t.length,
                                    s = t[i - 1];
                                if ("function" != typeof s) {
                                    if (this.realtime.options.promises) return o.promisify(this, "publish", arguments);
                                    s = m, ++i
                                }
                                if (this.connectionManager.activeState()) {
                                    if (2 == i)
                                        if (o.isObject(r)) r = [c.default.fromValues(r)];
                                        else {
                                            if (!o.isArray(r)) throw new d.default("The single-argument form of publish() expects a message object or an array of message objects", 40013, 400);
                                            r = c.default.fromValuesArray(r)
                                        }
                                    else r = [c.default.fromValues({
                                        name: t[0],
                                        data: t[1]
                                    })];
                                    var a = this.realtime.options.maxMessageSize;
                                    c.default.encodeArray(r, this.channelOptions, (function(t) {
                                        if (t) s(t);
                                        else {
                                            var n = c.default.getMessagesSize(r);
                                            n > a ? s(new d.default("Maximum size of messages that can be published at once exceeded ( was " + n + " bytes; limit is " + a + " bytes)", 40009, 400)) : e.__publish(r, s)
                                        }
                                    }))
                                } else s(this.connectionManager.getError())
                            }, t.prototype.__publish = function(e, n) {
                                u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.publish()", "message count = " + e.length);
                                var r = this.state;
                                switch (r) {
                                    case "failed":
                                    case "suspended":
                                        n(d.default.fromValues(t.invalidStateError(r)));
                                        break;
                                    default:
                                        u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.publish()", "sending message; channel state is " + r);
                                        var s = new i.default;
                                        s.action = g.MESSAGE, s.channel = this.name, s.messages = e, this.sendMessage(s, n)
                                }
                            }, t.prototype.onEvent = function(e) {
                                u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.onEvent()", "received message");
                                for (var t = this.subscriptions, n = 0; n < e.length; n++) {
                                    var r = e[n];
                                    t.emit(r.name, r)
                                }
                            }, t.prototype.attach = function(e, t) {
                                var n;
                                if ("function" == typeof e ? (t = e, n = null) : n = e, !t) {
                                    if (this.realtime.options.promises) return o.promisify(this, "attach", arguments);
                                    t = function(e) {
                                        e && u.default.logAction(u.default.LOG_MAJOR, "RealtimeChannel.attach()", "Channel attach failed: " + e.toString())
                                    }
                                }
                                if (n) u.default.deprecated("channel.attach() with flags", "channel.setOptions() with channelOptions.params"), this._requestedFlags = n;
                                else if ("attached" === this.state) return void t();
                                this._attach(!1, null, t)
                            }, t.prototype._attach = function(e, t, n) {
                                n || (n = function(e) {
                                    e && u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel._attach()", "Channel attach failed: " + e.toString())
                                });
                                var r = this.connectionManager;
                                r.activeState() ? (("attaching" !== this.state || e) && this.requestState("attaching", t), this.once((function(e) {
                                    switch (this.event) {
                                        case "attached":
                                            null == n || n();
                                            break;
                                        case "detached":
                                        case "suspended":
                                        case "failed":
                                            null == n || n(e.reason || r.getError() || new d.default("Unable to attach; reason unknown; state = " + this.event, 9e4, 500));
                                            break;
                                        case "detaching":
                                            null == n || n(new d.default("Attach request superseded by a subsequent detach request", 9e4, 409))
                                    }
                                }))) : n(r.getError())
                            }, t.prototype.attachImpl = function() {
                                u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.attachImpl()", "sending ATTACH message"), this.setInProgress(y, !0);
                                var e = i.default.fromValues({
                                    action: g.ATTACH,
                                    channel: this.name,
                                    params: this.channelOptions.params
                                });
                                this._requestedFlags ? e.encodeModesToFlags(this._requestedFlags) : this.channelOptions.modes && e.encodeModesToFlags(o.allToUpperCase(this.channelOptions.modes)), this._attachResume && e.setFlag("ATTACH_RESUME"), this._lastPayload.decodeFailureRecoveryInProgress && (e.channelSerial = this._lastPayload.protocolMessageChannelSerial), this.sendMessage(e, m)
                            }, t.prototype.detach = function(e) {
                                if (!e) {
                                    if (this.realtime.options.promises) return o.promisify(this, "detach", arguments);
                                    e = m
                                }
                                var t = this.connectionManager;
                                if (t.activeState()) switch (this.state) {
                                    case "suspended":
                                        this.notifyState("detached"), e();
                                        break;
                                    case "detached":
                                        e();
                                        break;
                                    case "failed":
                                        e(new d.default("Unable to detach; channel state = failed", 90001, 400));
                                        break;
                                    default:
                                        this.requestState("detaching");
                                    case "detaching":
                                        this.once((function(n) {
                                            switch (this.event) {
                                                case "detached":
                                                    e();
                                                    break;
                                                case "attached":
                                                case "suspended":
                                                case "failed":
                                                    e(n.reason || t.getError() || new d.default("Unable to detach; reason unknown; state = " + this.event, 9e4, 500));
                                                    break;
                                                case "attaching":
                                                    e(new d.default("Detach request superseded by a subsequent attach request", 9e4, 409))
                                            }
                                        }))
                                } else e(t.getError())
                            }, t.prototype.detachImpl = function(e) {
                                this.connectionManager.mostRecentMsg && this.connectionManager.mostRecentMsg.channel === this.name && (this.connectionManager.mostRecentMsg = null), u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.detach()", "sending DETACH message"), this.setInProgress(y, !0);
                                var t = i.default.fromValues({
                                    action: g.DETACH,
                                    channel: this.name
                                });
                                this.sendMessage(t, e || m)
                            }, t.prototype.subscribe = function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                var r = t.processListenerArgs(e),
                                    i = r[0],
                                    s = r[1],
                                    a = r[2];
                                return !a && this.realtime.options.promises ? o.promisify(this, "subscribe", [i, s]) : "failed" !== this.state ? (i && "object" == typeof i && !Array.isArray(i) ? this._subscribeFilter(i, s) : this.subscriptions.on(i, s), this.attach(a || m)) : void(null == a || a(d.default.fromValues(t.invalidStateError("failed"))))
                            }, t.prototype._subscribeFilter = function(e, t) {
                                var n = function(n) {
                                    var r, i, s, o, a, u, l = {
                                        name: n.name,
                                        refTimeserial: null === (i = null === (r = n.extras) || void 0 === r ? void 0 : r.ref) || void 0 === i ? void 0 : i.timeserial,
                                        refType: null === (o = null === (s = n.extras) || void 0 === s ? void 0 : s.ref) || void 0 === o ? void 0 : o.type,
                                        isRef: !!(null === (u = null === (a = n.extras) || void 0 === a ? void 0 : a.ref) || void 0 === u ? void 0 : u.timeserial),
                                        clientId: n.clientId
                                    };
                                    Object.entries(e).find((function(e) {
                                        var t = e[0],
                                            n = e[1];
                                        return void 0 !== n && l[t] !== n
                                    })) || t(n)
                                };
                                this._addFilteredSubscription(e, t, n), this.subscriptions.on(n)
                            }, t.prototype._addFilteredSubscription = function(e, t, n) {
                                var r;
                                if (this.filteredSubscriptions || (this.filteredSubscriptions = new Map), this.filteredSubscriptions.has(t)) {
                                    var i = this.filteredSubscriptions.get(t);
                                    i.set(e, (null === (r = null == i ? void 0 : i.get(e)) || void 0 === r ? void 0 : r.concat(n)) || [n])
                                } else this.filteredSubscriptions.set(t, new Map([
                                    [e, [n]]
                                ]))
                            }, t.prototype._getAndDeleteFilteredSubscriptions = function(e, t) {
                                var n = this;
                                if (!this.filteredSubscriptions) return [];
                                if (!t && e) return Array.from(this.filteredSubscriptions.entries()).map((function(t) {
                                    var r, i = t[0],
                                        s = t[1],
                                        o = s.get(e);
                                    return s.delete(e), 0 === s.size && (null === (r = n.filteredSubscriptions) || void 0 === r || r.delete(i)), o
                                })).reduce((function(e, t) {
                                    var n;
                                    return t ? (n = e).concat.apply(n, t) : e
                                }), []);
                                if (!t || !this.filteredSubscriptions.has(t)) return [];
                                var r = this.filteredSubscriptions.get(t);
                                if (!e) {
                                    var i = Array.from(r.values()).reduce((function(e, t) {
                                        return e.concat.apply(e, t)
                                    }), []);
                                    return this.filteredSubscriptions.delete(t), i
                                }
                                var s = r.get(e);
                                return r.delete(e), s || []
                            }, t.prototype.unsubscribe = function() {
                                for (var e, n = this, r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                var s = t.processListenerArgs(r),
                                    o = s[0],
                                    a = s[1];
                                "object" == typeof o && !a || (null === (e = this.filteredSubscriptions) || void 0 === e ? void 0 : e.has(a)) ? this._getAndDeleteFilteredSubscriptions(o, a).forEach((function(e) {
                                    return n.subscriptions.off(e)
                                })) : this.subscriptions.off(o, a)
                            }, t.prototype.sync = function() {
                                switch (this.state) {
                                    case "initialized":
                                    case "detaching":
                                    case "detached":
                                        throw new d.default("Unable to sync to channel; not attached", 4e4)
                                }
                                var e = this.connectionManager;
                                if (!e.activeState()) throw e.getError();
                                var t = i.default.fromValues({
                                    action: g.SYNC,
                                    channel: this.name
                                });
                                this.syncChannelSerial && (t.channelSerial = this.syncChannelSerial), e.send(t)
                            }, t.prototype.sendMessage = function(e, t) {
                                this.connectionManager.send(e, this.realtime.options.queueMessages, t)
                            }, t.prototype.sendPresence = function(e, t) {
                                var n = i.default.fromValues({
                                    action: g.PRESENCE,
                                    channel: this.name,
                                    presence: o.isArray(e) ? h.default.fromValuesArray(e) : [h.default.fromValues(e)]
                                });
                                this.sendMessage(n, t)
                            }, t.prototype.onMessage = function(e) {
                                var t, n = !1;
                                switch (e.action) {
                                    case g.ATTACHED:
                                        this._attachedMsgIndicator = !0, this.properties.attachSerial = e.channelSerial, this._mode = e.getMode(), this.params = e.params || {};
                                        var r = e.decodeModesFromFlags();
                                        this.modes = r && o.allToLowerCase(r) || void 0;
                                        var i = e.hasFlag("RESUMED"),
                                            s = e.hasFlag("HAS_PRESENCE");
                                        if ("attached" === this.state) {
                                            this.setInProgress(y, !1), i || this.presence.onAttached(s);
                                            var a = new f.default(this.state, this.state, i, e.error);
                                            this._allChannelChanges.emit("update", a), i && !this.channelOptions.updateOnAttached || this.emit("update", a)
                                        } else "detaching" === this.state ? this.checkPendingState() : this.notifyState("attached", e.error, i, s);
                                        break;
                                    case g.DETACHED:
                                        var l = e.error ? d.default.fromValues(e.error) : new d.default("Channel detached", 90001, 404);
                                        "detaching" === this.state ? this.notifyState("detached", l) : "attaching" === this.state ? this.notifyState("suspended", l) : this.requestState("attaching", l);
                                        break;
                                    case g.SYNC:
                                        if (n = !0, t = this.syncChannelSerial = e.channelSerial, !e.presence) break;
                                    case g.PRESENCE:
                                        for (var m = e.presence, v = e.id, _ = e.connectionId, b = e.timestamp, w = this.channelOptions, C = void 0, R = 0; R < m.length; R++) try {
                                            C = m[R], h.default.decode(C, w), C.connectionId || (C.connectionId = _), C.timestamp || (C.timestamp = b), C.id || (C.id = v + ":" + R)
                                        } catch (e) {
                                            u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", e.toString())
                                        }
                                        this.presence.setPresence(m, n, t);
                                        break;
                                    case g.MESSAGE:
                                        if ("attached" !== this.state) return void u.default.logAction(u.default.LOG_MAJOR, "RealtimeChannel.onMessage()", 'Message "' + e.id + '" skipped as this channel "' + this.name + '" state is not "attached" (state is "' + this.state + '").');
                                        var T = e.messages,
                                            O = T[0],
                                            S = T[T.length - 1];
                                        if (v = e.id, _ = e.connectionId, b = e.timestamp, O.extras && O.extras.delta && O.extras.delta.from !== this._lastPayload.messageId) {
                                            var A = 'Delta message decode failure - previous message not available for message "' + e.id + '" on this channel "' + this.name + '".';
                                            u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", A), this._startDecodeFailureRecovery(new d.default(A, 40018, 400));
                                            break
                                        }
                                        for (R = 0; R < T.length; R++) {
                                            A = T[R];
                                            try {
                                                c.default.decode(A, this._decodingContext)
                                            } catch (e) {
                                                switch (u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", e.toString()), e.code) {
                                                    case 40018:
                                                        return void this._startDecodeFailureRecovery(e);
                                                    case 40019:
                                                    case 40021:
                                                        return void this.notifyState("failed", e)
                                                }
                                            }
                                            A.connectionId || (A.connectionId = _), A.timestamp || (A.timestamp = b), A.id || (A.id = v + ":" + R)
                                        }
                                        this._lastPayload.messageId = S.id, this._lastPayload.protocolMessageChannelSerial = e.channelSerial, this.onEvent(T);
                                        break;
                                    case g.ERROR:
                                        var L = e.error;
                                        L && 80016 == L.code ? this.checkPendingState() : this.notifyState("failed", d.default.fromValues(L));
                                        break;
                                    default:
                                        u.default.logAction(u.default.LOG_ERROR, "RealtimeChannel.onMessage()", "Fatal protocol error: unrecognised action (" + e.action + ")"), this.connectionManager.abort(p.default.unknownChannelErr)
                                }
                            }, t.prototype._startDecodeFailureRecovery = function(e) {
                                var t = this;
                                this._lastPayload.decodeFailureRecoveryInProgress || (u.default.logAction(u.default.LOG_MAJOR, "RealtimeChannel.onMessage()", "Starting decode failure recovery process."), this._lastPayload.decodeFailureRecoveryInProgress = !0, this._attach(!0, e, (function() {
                                    t._lastPayload.decodeFailureRecoveryInProgress = !1
                                })))
                            }, t.prototype.onAttached = function() {
                                u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel.onAttached", "activating channel; name = " + this.name)
                            }, t.prototype.notifyState = function(e, t, n, r) {
                                if (u.default.logAction(u.default.LOG_MICRO, "RealtimeChannel.notifyState", "name = " + this.name + ", current state = " + this.state + ", notifying state " + e), this.clearStateTimer(), e !== this.state) {
                                    this.presence.actOnChannelState(e, r, t), "suspended" === e && this.connectionManager.state.sendEvents ? this.startRetryTimer() : this.cancelRetryTimer(), t && (this.errorReason = t);
                                    var i = new f.default(this.state, e, n, t),
                                        s = "failed" === e ? u.default.LOG_ERROR : u.default.LOG_MAJOR;
                                    u.default.logAction(s, 'Channel state for channel "' + this.name + '"', e + (t ? "; reason: " + t : "")), "attaching" !== e && "suspended" !== e && (this.retryCount = 0), "attached" === e ? (this.onAttached(), this.setInProgress(v, r), this.setInProgress(y, !1)) : "detached" !== e && "failed" !== e && "suspended" !== e || (this.setInProgress(y, !1), this.setInProgress(v, !1)), "attached" === e ? this._attachResume = !0 : "detaching" !== e && "failed" !== e || (this._attachResume = !1), this.state = e, this._allChannelChanges.emit(e, i), this.emit(e, i)
                                }
                            }, t.prototype.requestState = function(e, t) {
                                u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel.requestState", "name = " + this.name + ", state = " + e), this.notifyState(e, t), this.checkPendingState()
                            }, t.prototype.checkPendingState = function() {
                                var e = this.connectionManager.state;
                                if (e.sendEvents || e.forceQueueEvents) switch (u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "name = " + this.name + ", state = " + this.state), this.state) {
                                    case "attaching":
                                        this.startStateTimerIfNotRunning(), this.attachImpl();
                                        break;
                                    case "detaching":
                                        this.startStateTimerIfNotRunning(), this.detachImpl();
                                        break;
                                    case "attached":
                                        this.sync()
                                } else u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel.checkPendingState", "sendEvents is false; state is " + this.connectionManager.state.state)
                            }, t.prototype.timeoutPendingState = function() {
                                switch (this.state) {
                                    case "attaching":
                                        var e = new d.default("Channel attach timed out", 90007, 408);
                                        this.notifyState("suspended", e);
                                        break;
                                    case "detaching":
                                        e = new d.default("Channel detach timed out", 90007, 408), this.notifyState("attached", e);
                                        break;
                                    default:
                                        this.checkPendingState()
                                }
                            }, t.prototype.startStateTimerIfNotRunning = function() {
                                var e = this;
                                this.stateTimer || (this.stateTimer = setTimeout((function() {
                                    u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel.startStateTimerIfNotRunning", "timer expired"), e.stateTimer = null, e.timeoutPendingState()
                                }), this.realtime.options.timeouts.realtimeRequestTimeout))
                            }, t.prototype.clearStateTimer = function() {
                                var e = this.stateTimer;
                                e && (clearTimeout(e), this.stateTimer = null)
                            }, t.prototype.startRetryTimer = function() {
                                var e = this;
                                if (!this.retryTimer) {
                                    this.retryCount++;
                                    var t = this.realtime.options.timeouts.channelRetryTimeout * o.getJitterCoefficient() * o.getBackoffCoefficient(this.retryCount);
                                    this.retryTimer = setTimeout((function() {
                                        "suspended" === e.state && e.connectionManager.state.sendEvents && (e.retryTimer = null, u.default.logAction(u.default.LOG_MINOR, "RealtimeChannel retry timer expired", "attempting a new attach"), e.requestState("attaching"))
                                    }), t)
                                }
                            }, t.prototype.cancelRetryTimer = function() {
                                this.retryTimer && (clearTimeout(this.retryTimer), this.retryTimer = null)
                            }, t.prototype.setInProgress = function(e, t) {
                                this.rest.channels.setInProgress(this, e, t)
                            }, t.prototype.getReleaseErr = function() {
                                var e = this.state;
                                return "initialized" === e || "detached" === e || "failed" === e ? null : new d.default("Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was " + e, 90001, 400)
                            }, t.progressOps = {
                                statechange: y,
                                sync: v
                            }, t
                        }(a.default);
                        t.default = b
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = function(e, t, n, r) {
                            this.previous = e, this.current = t, "attached" === t && (this.resumed = n), r && (this.reason = r)
                        };
                        t.default = r
                    }, function(e, t, n) {
                        var r, i, s, o, a, u, l, c;
                        e.exports = (c = n(6), i = (r = c).lib, s = i.WordArray, o = i.Hasher, a = r.algo, u = [], l = a.SHA1 = o.extend({
                            _doReset: function() {
                                this._hash = new s.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, r = n[0], i = n[1], s = n[2], o = n[3], a = n[4], l = 0; l < 80; l++) {
                                    if (l < 16) u[l] = 0 | e[t + l];
                                    else {
                                        var c = u[l - 3] ^ u[l - 8] ^ u[l - 14] ^ u[l - 16];
                                        u[l] = c << 1 | c >>> 31
                                    }
                                    var f = (r << 5 | r >>> 27) + a + u[l];
                                    f += l < 20 ? 1518500249 + (i & s | ~i & o) : l < 40 ? 1859775393 + (i ^ s ^ o) : l < 60 ? (i & s | i & o | s & o) - 1894007588 : (i ^ s ^ o) - 899497514, a = o, o = s, s = i << 30 | i >>> 2, i = r, r = f
                                }
                                n[0] = n[0] + r | 0, n[1] = n[1] + i | 0, n[2] = n[2] + s | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0
                            },
                            _doFinalize: function() {
                                var e = this._data,
                                    t = e.words,
                                    n = 8 * this._nDataBytes,
                                    r = 8 * e.sigBytes;
                                return t[r >>> 5] |= 128 << 24 - r % 32, t[14 + (r + 64 >>> 9 << 4)] = Math.floor(n / 4294967296), t[15 + (r + 64 >>> 9 << 4)] = n, e.sigBytes = 4 * t.length, this._process(), this._hash
                            },
                            clone: function() {
                                var e = o.clone.call(this);
                                return e._hash = this._hash.clone(), e
                            }
                        }), r.SHA1 = o._createHelper(l), r.HmacSHA1 = o._createHmacHelper(l), c.SHA1)
                    }, function(e, t, n) {
                        "use strict";

                        function r(e, t, n) {
                            for (var r = 0, i = n.length; r < i; r++) {
                                var s = n.charCodeAt(r);
                                if (s < 128) e.setUint8(t++, s >>> 0 & 127 | 0);
                                else if (s < 2048) e.setUint8(t++, s >>> 6 & 31 | 192), e.setUint8(t++, s >>> 0 & 63 | 128);
                                else if (s < 65536) e.setUint8(t++, s >>> 12 & 15 | 224), e.setUint8(t++, s >>> 6 & 63 | 128), e.setUint8(t++, s >>> 0 & 63 | 128);
                                else {
                                    if (!(s < 1114112)) throw new Error("bad codepoint " + s);
                                    e.setUint8(t++, s >>> 18 & 7 | 240), e.setUint8(t++, s >>> 12 & 63 | 128), e.setUint8(t++, s >>> 6 & 63 | 128), e.setUint8(t++, s >>> 0 & 63 | 128)
                                }
                            }
                        }

                        function i(e, t, n) {
                            for (var r = "", i = t, s = t + n; i < s; i++) {
                                var o = e.getUint8(i);
                                if (0 != (128 & o))
                                    if (192 != (224 & o))
                                        if (224 != (240 & o)) {
                                            if (240 != (248 & o)) throw new Error("Invalid byte " + o.toString(16));
                                            r += String.fromCharCode((7 & o) << 18 | (63 & e.getUint8(++i)) << 12 | (63 & e.getUint8(++i)) << 6 | (63 & e.getUint8(++i)) << 0)
                                        } else r += String.fromCharCode((15 & o) << 12 | (63 & e.getUint8(++i)) << 6 | (63 & e.getUint8(++i)) << 0);
                                else r += String.fromCharCode((15 & o) << 6 | 63 & e.getUint8(++i));
                                else r += String.fromCharCode(o)
                            }
                            return r
                        }

                        function s(e) {
                            for (var t = 0, n = 0, r = e.length; n < r; n++) {
                                var i = e.charCodeAt(n);
                                if (i < 128) t += 1;
                                else if (i < 2048) t += 2;
                                else if (i < 65536) t += 3;
                                else {
                                    if (!(i < 1114112)) throw new Error("bad codepoint " + i);
                                    t += 4
                                }
                            }
                            return t
                        }
                        t.__esModule = !0;
                        var o = 4294967296,
                            a = 1 / o,
                            u = function(e, t) {
                                var n = this;
                                this.map = function(e) {
                                    for (var t = {}, r = 0; r < e; r++) t[n.parse()] = n.parse();
                                    return t
                                }, this.bin = function(e) {
                                    var t = new ArrayBuffer(e);
                                    return new Uint8Array(t).set(new Uint8Array(n.view.buffer, n.offset, e), 0), n.offset += e, t
                                }, this.buf = this.bin, this.str = function(e) {
                                    var t = i(n.view, n.offset, e);
                                    return n.offset += e, t
                                }, this.array = function(e) {
                                    for (var t = new Array(e), r = 0; r < e; r++) t[r] = n.parse();
                                    return t
                                }, this.ext = function(e) {
                                    return n.offset += e, {
                                        type: n.view.getInt8(n.offset),
                                        data: n.buf(e)
                                    }
                                }, this.parse = function() {
                                    var e, t, r = n.view.getUint8(n.offset);
                                    if (0 == (128 & r)) return n.offset++, r;
                                    if (128 == (240 & r)) return t = 15 & r, n.offset++, n.map(t);
                                    if (144 == (240 & r)) return t = 15 & r, n.offset++, n.array(t);
                                    if (160 == (224 & r)) return t = 31 & r, n.offset++, n.str(t);
                                    if (224 == (224 & r)) return e = n.view.getInt8(n.offset), n.offset++, e;
                                    switch (r) {
                                        case 192:
                                            return n.offset++, null;
                                        case 193:
                                            return void n.offset++;
                                        case 194:
                                            return n.offset++, !1;
                                        case 195:
                                            return n.offset++, !0;
                                        case 196:
                                            return t = n.view.getUint8(n.offset + 1), n.offset += 2, n.bin(t);
                                        case 197:
                                            return t = n.view.getUint16(n.offset + 1), n.offset += 3, n.bin(t);
                                        case 198:
                                            return t = n.view.getUint32(n.offset + 1), n.offset += 5, n.bin(t);
                                        case 199:
                                            return t = n.view.getUint8(n.offset + 1), n.offset += 2, n.ext(t);
                                        case 200:
                                            return t = n.view.getUint16(n.offset + 1), n.offset += 3, n.ext(t);
                                        case 201:
                                            return t = n.view.getUint32(n.offset + 1), n.offset += 5, n.ext(t);
                                        case 202:
                                            return e = n.view.getFloat32(n.offset + 1), n.offset += 5, e;
                                        case 203:
                                            return e = n.view.getFloat64(n.offset + 1), n.offset += 9, e;
                                        case 204:
                                            return e = n.view.getUint8(n.offset + 1), n.offset += 2, e;
                                        case 205:
                                            return e = n.view.getUint16(n.offset + 1), n.offset += 3, e;
                                        case 206:
                                            return e = n.view.getUint32(n.offset + 1), n.offset += 5, e;
                                        case 207:
                                            return e = function(e, t) {
                                                return t = t || 0, e.getUint32(t) * o + e.getUint32(t + 4)
                                            }(n.view, n.offset + 1), n.offset += 9, e;
                                        case 208:
                                            return e = n.view.getInt8(n.offset + 1), n.offset += 2, e;
                                        case 209:
                                            return e = n.view.getInt16(n.offset + 1), n.offset += 3, e;
                                        case 210:
                                            return e = n.view.getInt32(n.offset + 1), n.offset += 5, e;
                                        case 211:
                                            return e = function(e, t) {
                                                return t = t || 0, e.getInt32(t) * o + e.getUint32(t + 4)
                                            }(n.view, n.offset + 1), n.offset += 9, e;
                                        case 212:
                                            return t = 1, n.offset++, n.ext(t);
                                        case 213:
                                            return t = 2, n.offset++, n.ext(t);
                                        case 214:
                                            return t = 4, n.offset++, n.ext(t);
                                        case 215:
                                            return t = 8, n.offset++, n.ext(t);
                                        case 216:
                                            return t = 16, n.offset++, n.ext(t);
                                        case 217:
                                            return t = n.view.getUint8(n.offset + 1), n.offset += 2, n.str(t);
                                        case 218:
                                            return t = n.view.getUint16(n.offset + 1), n.offset += 3, n.str(t);
                                        case 219:
                                            return t = n.view.getUint32(n.offset + 1), n.offset += 5, n.str(t);
                                        case 220:
                                            return t = n.view.getUint16(n.offset + 1), n.offset += 3, n.array(t);
                                        case 221:
                                            return t = n.view.getUint32(n.offset + 1), n.offset += 5, n.array(t);
                                        case 222:
                                            return t = n.view.getUint16(n.offset + 1), n.offset += 3, n.map(t);
                                        case 223:
                                            return t = n.view.getUint32(n.offset + 1), n.offset += 5, n.map(t)
                                    }
                                    throw new Error("Unknown type 0x" + r.toString(16))
                                }, this.offset = t || 0, this.view = e
                            };

                        function l(e, t) {
                            return Object.keys(e).filter((function(n) {
                                var r = e[n];
                                return !(t && null == r || "function" == typeof r && !r.toJSON)
                            }))
                        }

                        function c(e, t, n, i) {
                            var o = typeof e;
                            if ("string" == typeof e) {
                                var u = s(e);
                                if (u < 32) return t.setUint8(n, 160 | u), r(t, n + 1, e), 1 + u;
                                if (u < 256) return t.setUint8(n, 217), t.setUint8(n + 1, u), r(t, n + 2, e), 2 + u;
                                if (u < 65536) return t.setUint8(n, 218), t.setUint16(n + 1, u), r(t, n + 3, e), 3 + u;
                                if (u < 4294967296) return t.setUint8(n, 219), t.setUint32(n + 1, u), r(t, n + 5, e), 5 + u
                            }
                            if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
                                var f = e.byteLength;
                                if (f < 256) return t.setUint8(n, 196), t.setUint8(n + 1, f), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 2), 2 + f;
                                if (f < 65536) return t.setUint8(n, 197), t.setUint16(n + 1, f), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 3), 3 + f;
                                if (f < 4294967296) return t.setUint8(n, 198), t.setUint32(n + 1, f), new Uint8Array(t.buffer).set(new Uint8Array(e), n + 5), 5 + f
                            }
                            if ("number" == typeof e) {
                                if (Math.floor(e) !== e) return t.setUint8(n, 203), t.setFloat64(n + 1, e), 9;
                                if (e >= 0) {
                                    if (e < 128) return t.setUint8(n, e), 1;
                                    if (e < 256) return t.setUint8(n, 204), t.setUint8(n + 1, e), 2;
                                    if (e < 65536) return t.setUint8(n, 205), t.setUint16(n + 1, e), 3;
                                    if (e < 4294967296) return t.setUint8(n, 206), t.setUint32(n + 1, e), 5;
                                    if (e < 0x10000000000000000) return t.setUint8(n, 207),
                                        function(e, t, n) {
                                            n < 0x10000000000000000 ? (e.setUint32(t, Math.floor(n * a)), e.setInt32(t + 4, -1 & n)) : (e.setUint32(t, 4294967295), e.setUint32(t + 4, 4294967295))
                                        }(t, n + 1, e), 9;
                                    throw new Error("Number too big 0x" + e.toString(16))
                                }
                                if (e >= -32) return t.setInt8(n, e), 1;
                                if (e >= -128) return t.setUint8(n, 208), t.setInt8(n + 1, e), 2;
                                if (e >= -32768) return t.setUint8(n, 209), t.setInt16(n + 1, e), 3;
                                if (e >= -2147483648) return t.setUint8(n, 210), t.setInt32(n + 1, e), 5;
                                if (e >= -0x8000000000000000) return t.setUint8(n, 211),
                                    function(e, t, n) {
                                        n < 0x8000000000000000 ? (e.setInt32(t, Math.floor(n * a)), e.setInt32(t + 4, -1 & n)) : (e.setUint32(t, 2147483647), e.setUint32(t + 4, 2147483647))
                                    }(t, n + 1, e), 9;
                                throw new Error("Number too small -0x" + (-e).toString(16).substr(1))
                            }
                            if ("undefined" === o) return i ? 0 : (t.setUint8(n, 212), t.setUint8(n + 1, 0), t.setUint8(n + 2, 0), 3);
                            if (null === e) return i ? 0 : (t.setUint8(n, 192), 1);
                            if ("boolean" === o) return t.setUint8(n, e ? 195 : 194), 1;
                            if ("function" == typeof e.toJSON) return c(e.toJSON(), t, n, i);
                            if ("object" === o) {
                                var d, h = 0,
                                    p = void 0,
                                    g = Array.isArray(e);
                                if ((d = g ? e.length : (p = l(e, i)).length) < 16 ? (t.setUint8(n, d | (g ? 144 : 128)), h = 1) : d < 65536 ? (t.setUint8(n, g ? 220 : 222), t.setUint16(n + 1, d), h = 3) : d < 4294967296 && (t.setUint8(n, g ? 221 : 223), t.setUint32(n + 1, d), h = 5), g)
                                    for (var m = 0; m < d; m++) h += c(e[m], t, n + h, i);
                                else if (p)
                                    for (m = 0; m < d; m++) {
                                        var y = p[m];
                                        h += c(y, t, n + h), h += c(e[y], t, n + h, i)
                                    }
                                return h
                            }
                            if ("function" === o) return 0;
                            throw new Error("Unknown type " + o)
                        }

                        function f(e, t) {
                            var n = typeof e;
                            if ("string" === n) {
                                var r = s(e);
                                if (r < 32) return 1 + r;
                                if (r < 256) return 2 + r;
                                if (r < 65536) return 3 + r;
                                if (r < 4294967296) return 5 + r
                            }
                            if (ArrayBuffer.isView && ArrayBuffer.isView(e) && (e = e.buffer), e instanceof ArrayBuffer) {
                                var i = e.byteLength;
                                if (i < 256) return 2 + i;
                                if (i < 65536) return 3 + i;
                                if (i < 4294967296) return 5 + i
                            }
                            if ("number" == typeof e) {
                                if (Math.floor(e) !== e) return 9;
                                if (e >= 0) {
                                    if (e < 128) return 1;
                                    if (e < 256) return 2;
                                    if (e < 65536) return 3;
                                    if (e < 4294967296) return 5;
                                    if (e < 0x10000000000000000) return 9;
                                    throw new Error("Number too big 0x" + e.toString(16))
                                }
                                if (e >= -32) return 1;
                                if (e >= -128) return 2;
                                if (e >= -32768) return 3;
                                if (e >= -2147483648) return 5;
                                if (e >= -0x8000000000000000) return 9;
                                throw new Error("Number too small -0x" + e.toString(16).substr(1))
                            }
                            if ("boolean" === n) return 1;
                            if (null === e) return t ? 0 : 1;
                            if (void 0 === e) return t ? 0 : 3;
                            if ("function" == typeof e.toJSON) return f(e.toJSON(), t);
                            if ("object" === n) {
                                var o, a = 0;
                                if (Array.isArray(e)) {
                                    o = e.length;
                                    for (var u = 0; u < o; u++) a += f(e[u], t)
                                } else {
                                    var c = l(e, t);
                                    for (o = c.length, u = 0; u < o; u++) {
                                        var d = c[u];
                                        a += f(d) + f(e[d], t)
                                    }
                                }
                                if (o < 16) return 1 + a;
                                if (o < 65536) return 3 + a;
                                if (o < 4294967296) return 5 + a;
                                throw new Error("Array or object too long 0x" + o.toString(16))
                            }
                            if ("function" === n) return 0;
                            throw new Error("Unknown type " + n)
                        }
                        t.default = {
                            encode: function(e, t) {
                                var n = f(e, t);
                                if (0 !== n) {
                                    var r = new ArrayBuffer(n);
                                    return c(e, new DataView(r), 0, t), r
                                }
                            },
                            decode: function(e) {
                                var t = new DataView(e),
                                    n = new u(t),
                                    r = n.parse();
                                if (n.offset !== e.byteLength) throw new Error(e.byteLength - n.offset + " trailing bytes");
                                return r
                            },
                            inspect: function(e) {
                                if (void 0 === e) return "undefined";
                                var t, n;
                                if (e instanceof ArrayBuffer ? (n = "ArrayBuffer", t = new DataView(e)) : e instanceof DataView && (n = "DataView", t = e), !t) return JSON.stringify(e);
                                for (var r = [], i = 0; i < e.byteLength; i++) {
                                    if (i > 20) {
                                        r.push("...");
                                        break
                                    }
                                    var s = t.getUint8(i).toString(16);
                                    1 === s.length && (s = "0" + s), r.push(s)
                                }
                                return "<" + n + " " + r.join(" ") + ">"
                            },
                            utf8Write: r,
                            utf8Read: i,
                            utf8ByteCount: s
                        }
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(30)),
                            s = r.__importDefault(n(50)),
                            o = r.__importDefault(n(0)),
                            a = r.__importDefault(n(55)),
                            u = r.__importDefault(n(57)),
                            l = r.__importDefault(n(62)),
                            c = r.__importDefault(n(64)),
                            f = r.__importDefault(n(68)),
                            d = r.__importDefault(n(3)),
                            h = n(8),
                            p = r.__importDefault(n(25)),
                            g = r.__importDefault(n(65)),
                            m = r.__importDefault(n(66)),
                            y = r.__importDefault(n(41)),
                            v = r.__importDefault(n(9)),
                            _ = r.__importDefault(n(14));
                        o.default.Crypto = u.default, o.default.BufferUtils = a.default, o.default.Http = l.default, o.default.Config = c.default, o.default.Transports = f.default, o.default.WebStorage = g.default, i.default.Crypto = u.default, s.default.Crypto = u.default, i.default.Message = v.default, s.default.Message = v.default, i.default.PresenceMessage = _.default, s.default.PresenceMessage = _.default, s.default.ConnectionManager = p.default, d.default.initLogHandlers(), o.default.Defaults = (0, h.getDefaults)(m.default), o.default.Config.agent && (o.default.Defaults.agent += " " + o.default.Config.agent), o.default.Config.noUpgrade && (o.default.Defaults.upgradeTransports = []), t.default = {
                            Rest: i.default,
                            Realtime: s.default,
                            msgpack: y.default
                        }
                    }, function(e) {
                        e.exports = JSON.parse('{"name":"ably","description":"Realtime client library for Ably, the realtime messaging service","version":"1.2.34","license":"Apache-2.0","bugs":{"url":"https://github.com/ably/ably-js/issues","email":"support@ably.com"},"main":"./build/ably-node.js","typings":"./ably.d.ts","react-native":{"./build/ably-node.js":"./build/ably-reactnative.js"},"browser":{"./build/ably-node.js":"./build/ably-commonjs.js"},"files":["build/**","ably.d.ts","callbacks.d.ts","callbacks.js","promises.d.ts","promises.js","resources/**"],"dependencies":{"@ably/msgpack-js":"^0.4.0","got":"^11.8.2","ws":"^5.1"},"devDependencies":{"@ably/vcdiff-decoder":"1.0.4","@types/crypto-js":"^4.0.1","@types/node":"^15.0.0","@types/request":"^2.48.7","@types/ws":"^8.2.0","@typescript-eslint/eslint-plugin":"^5.14.0","@typescript-eslint/parser":"^5.14.0","async":"ably-forks/async#requirejs","aws-sdk":"^2.1075.0","chai":"^4.2.0","copy-webpack-plugin":"^6.4.1","cors":"~2.7","crypto-js":"ably-forks/crypto-js#crypto-lite","eslint":"^7.13.0","eslint-plugin-jsdoc":"^39.3.2","eslint-plugin-security":"^1.4.0","express":"^4.17.1","glob":"~4.4","google-closure-compiler":"^20180610.0.1","grunt":"^1.4.1","grunt-bump":"^0.3.1","grunt-cli":"~1.2.0","grunt-closure-tools":"^1.0.0","grunt-contrib-concat":"~0.5","grunt-shell":"~1.1","grunt-webpack":"^4.0.2","hexy":"~0.2","kexec":"ably-forks/node-kexec#update-for-node-12","minimist":"^1.2.5","mocha":"^8.1.3","null-loader":"^4.0.1","playwright":"^1.10.0","prettier":"^2.5.1","requirejs":"~2.1","shelljs":"~0.8","source-map-explorer":"^2.5.2","ts-loader":"^8.2.0","tsconfig-paths-webpack-plugin":"^3.5.2","tslib":"^2.3.1","typedoc":"^0.23.8","typescript":"^4.6.4","webpack":"^4.44.2","webpack-cli":"^4.2.0"},"engines":{"node":">=5.10.x"},"repository":"ably/ably-js","jspm":{"registry":"npm","directories":{"lib":"browser/static"},"main":"ably"},"scripts":{"grunt":"grunt","test":"grunt test","test:node":"grunt test:node","test:webserver":"grunt test:webserver","test:playwright":"node test/support/runPlaywrightTests.js","concat":"grunt concat","build":"grunt build:all","build:node":"grunt build:node","build:browser":"grunt build:browser","requirejs":"grunt requirejs","lint":"eslint .","lint:fix":"eslint --fix .","check-closure-compiler":"grunt check-closure-compiler","prepare":"npm run build","format":"prettier --write --ignore-path .gitignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js docs/chrome-mv3.md","format:check":"prettier --check --ignore-path .gitignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js","sourcemap":"source-map-explorer build/ably.min.js","sourcemap:noencryption":"source-map-explorer build/ably.noencryption.min.js","docs":"typedoc --entryPoints ably.d.ts --out docs/generated/default --readme docs/landing-pages/default.md && typedoc --entryPoints promises.d.ts --out docs/generated/promises --name \\"ably (Promise-based)\\" --readme docs/landing-pages/promises.md && cp docs/landing-pages/choose-library.html docs/generated/index.html"}}')
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(31), n(23), r.HmacSHA256)
                    }, function(e, t) {}, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(47)),
                            o = r.__importDefault(n(24)),
                            a = r.__importDefault(n(18)),
                            u = r.__importDefault(n(5)),
                            l = r.__importDefault(n(48)),
                            c = function() {},
                            f = function(e) {
                                this.rest = e, this.admin = new d(e)
                            },
                            d = function() {
                                function e(e) {
                                    this.rest = e, this.deviceRegistrations = new h(e), this.channelSubscriptions = new p(e)
                                }
                                return e.prototype.publish = function(e, t, n) {
                                    var r = this.rest,
                                        s = r.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        a = i.defaultPostHeaders(r.options, s),
                                        u = {},
                                        l = i.mixin({
                                            recipient: e
                                        }, t);
                                    if ("function" != typeof n) {
                                        if (this.rest.options.promises) return i.promisify(this, "publish", arguments);
                                        n = c
                                    }
                                    r.options.headers && i.mixin(a, r.options.headers), r.options.pushFullWait && i.mixin(u, {
                                        fullWait: "true"
                                    });
                                    var f = i.encodeBody(l, s);
                                    o.default.post(r, "/push/publish", f, a, u, null, (function(e) {
                                        return n(e)
                                    }))
                                }, e
                            }(),
                            h = function() {
                                function e(e) {
                                    this.rest = e
                                }
                                return e.prototype.save = function(e, t) {
                                    var n = this.rest,
                                        r = s.default.fromValues(e),
                                        a = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        u = i.defaultPostHeaders(n.options, a),
                                        l = {};
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "save", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(u, n.options.headers), n.options.pushFullWait && i.mixin(l, {
                                        fullWait: "true"
                                    });
                                    var f = i.encodeBody(r, a);
                                    o.default.put(n, "/push/deviceRegistrations/" + encodeURIComponent(e.id), f, u, l, null, (function(e, n, r, i) {
                                        t(e, e ? void 0 : s.default.fromResponseBody(n, i ? void 0 : a))
                                    }))
                                }, e.prototype.get = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        a = i.defaultGetHeaders(n.options, r),
                                        l = e.id || e;
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "get", arguments);
                                        t = c
                                    }
                                    "string" == typeof l && l.length ? (n.options.headers && i.mixin(a, n.options.headers), o.default.get(n, "/push/deviceRegistrations/" + encodeURIComponent(l), a, {}, null, (function(e, n, i, o) {
                                        t(e, e ? void 0 : s.default.fromResponseBody(n, o ? void 0 : r))
                                    }))) : t(new u.default("First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails", 4e4, 400))
                                }, e.prototype.list = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        o = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                        u = i.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "list", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(u, n.options.headers), new a.default(n, "/push/deviceRegistrations", u, o, (function(e, t, n) {
                                        return s.default.fromResponseBody(e, n ? void 0 : r)
                                    })).get(e, t)
                                }, e.prototype.remove = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        s = i.defaultGetHeaders(n.options, r),
                                        a = {},
                                        l = e.id || e;
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "remove", arguments);
                                        t = c
                                    }
                                    "string" == typeof l && l.length ? (n.options.headers && i.mixin(s, n.options.headers), n.options.pushFullWait && i.mixin(a, {
                                        fullWait: "true"
                                    }), o.default.delete(n, "/push/deviceRegistrations/" + encodeURIComponent(l), s, a, null, (function(e) {
                                        return t(e)
                                    }))) : t(new u.default("First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails", 4e4, 400))
                                }, e.prototype.removeWhere = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        s = i.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "removeWhere", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(s, n.options.headers), n.options.pushFullWait && i.mixin(e, {
                                        fullWait: "true"
                                    }), o.default.delete(n, "/push/deviceRegistrations", s, e, null, (function(e) {
                                        return t(e)
                                    }))
                                }, e
                            }(),
                            p = function() {
                                function e(t) {
                                    this.remove = e.prototype.removeWhere, this.rest = t
                                }
                                return e.prototype.save = function(e, t) {
                                    var n = this.rest,
                                        r = l.default.fromValues(e),
                                        s = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        a = i.defaultPostHeaders(n.options, s),
                                        u = {};
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "save", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(a, n.options.headers), n.options.pushFullWait && i.mixin(u, {
                                        fullWait: "true"
                                    });
                                    var f = i.encodeBody(r, s);
                                    o.default.post(n, "/push/channelSubscriptions", f, a, u, null, (function(e, n, r, i) {
                                        t(e, !e && l.default.fromResponseBody(n, i ? void 0 : s))
                                    }))
                                }, e.prototype.list = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        s = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                        o = i.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "list", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(o, n.options.headers), new a.default(n, "/push/channelSubscriptions", o, s, (function(e, t, n) {
                                        return l.default.fromResponseBody(e, n ? void 0 : r)
                                    })).get(e, t)
                                }, e.prototype.removeWhere = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        s = i.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "removeWhere", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(s, n.options.headers), n.options.pushFullWait && i.mixin(e, {
                                        fullWait: "true"
                                    }), o.default.delete(n, "/push/channelSubscriptions", s, e, null, (function(e) {
                                        return t(e)
                                    }))
                                }, e.prototype.listChannels = function(e, t) {
                                    var n = this.rest,
                                        r = n.options.useBinaryProtocol ? i.Format.msgpack : i.Format.json,
                                        s = this.rest.http.supportsLinkHeaders ? void 0 : r,
                                        o = i.defaultGetHeaders(n.options, r);
                                    if ("function" != typeof t) {
                                        if (this.rest.options.promises) return i.promisify(this, "listChannels", arguments);
                                        t = c
                                    }
                                    n.options.headers && i.mixin(o, n.options.headers), n.options.pushFullWait && i.mixin(e, {
                                        fullWait: "true"
                                    }), new a.default(n, "/push/channels", o, s, (function(e, t, n) {
                                        for (var s = !n && r ? i.decodeBody(e, r) : e, o = 0; o < s.length; o++) s[o] = String(s[o]);
                                        return s
                                    })).get(e, t)
                                }, e
                            }();
                        t.default = f
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r, i, s = n(1),
                            o = s.__importStar(n(2)),
                            a = s.__importDefault(n(5));
                        ! function(e) {
                            e.Phone = "phone", e.Tablet = "tablet", e.Desktop = "desktop", e.TV = "tv", e.Watch = "watch", e.Car = "car", e.Embedded = "embedded", e.Other = "other"
                        }(r || (r = {})),
                        function(e) {
                            e.Android = "android", e.IOS = "ios", e.Browser = "browser"
                        }(i || (i = {}));
                        var u = function() {
                            function e() {}
                            return e.prototype.toJSON = function() {
                                var e, t, n;
                                return {
                                    id: this.id,
                                    deviceSecret: this.deviceSecret,
                                    platform: this.platform,
                                    formFactor: this.formFactor,
                                    clientId: this.clientId,
                                    metadata: this.metadata,
                                    deviceIdentityToken: this.deviceIdentityToken,
                                    push: {
                                        recipient: null === (e = this.push) || void 0 === e ? void 0 : e.recipient,
                                        state: null === (t = this.push) || void 0 === t ? void 0 : t.state,
                                        error: null === (n = this.push) || void 0 === n ? void 0 : n.error
                                    }
                                }
                            }, e.prototype.toString = function() {
                                var e, t, n, r, i = "[DeviceDetails";
                                return this.id && (i += "; id=" + this.id), this.platform && (i += "; platform=" + this.platform), this.formFactor && (i += "; formFactor=" + this.formFactor), this.clientId && (i += "; clientId=" + this.clientId), this.metadata && (i += "; metadata=" + this.metadata), this.deviceIdentityToken && (i += "; deviceIdentityToken=" + JSON.stringify(this.deviceIdentityToken)), (null === (e = this.push) || void 0 === e ? void 0 : e.recipient) && (i += "; push.recipient=" + JSON.stringify(this.push.recipient)), (null === (t = this.push) || void 0 === t ? void 0 : t.state) && (i += "; push.state=" + this.push.state), (null === (n = this.push) || void 0 === n ? void 0 : n.error) && (i += "; push.error=" + JSON.stringify(this.push.error)), (null === (r = this.push) || void 0 === r ? void 0 : r.metadata) && (i += "; push.metadata=" + this.push.metadata), i += "]"
                            }, e.fromResponseBody = function(t, n) {
                                return n && (t = o.decodeBody(t, n)), o.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t)
                            }, e.fromValues = function(t) {
                                return t.error = t.error && a.default.fromValues(t.error), Object.assign(new e, t)
                            }, e.fromValuesArray = function(t) {
                                for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                                return r
                            }, e.toRequestBody = o.encodeBody, e
                        }();
                        t.default = u
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1).__importStar(n(2)),
                            i = function() {
                                function e() {}
                                return e.prototype.toJSON = function() {
                                    return {
                                        channel: this.channel,
                                        deviceId: this.deviceId,
                                        clientId: this.clientId
                                    }
                                }, e.prototype.toString = function() {
                                    var e = "[PushChannelSubscription";
                                    return this.channel && (e += "; channel=" + this.channel), this.deviceId && (e += "; deviceId=" + this.deviceId), this.clientId && (e += "; clientId=" + this.clientId), e += "]"
                                }, e.fromResponseBody = function(t, n) {
                                    return n && (t = r.decodeBody(t, n)), r.isArray(t) ? e.fromValuesArray(t) : e.fromValues(t)
                                }, e.fromValues = function(t) {
                                    return Object.assign(new e, t)
                                }, e.fromValuesArray = function(t) {
                                    for (var n = t.length, r = new Array(n), i = 0; i < n; i++) r[i] = e.fromValues(t[i]);
                                    return r
                                }, e.toRequestBody = r.encodeBody, e
                            }();
                        t.default = i
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = function(e) {
                                this.count = e && e.count || 0, this.data = e && e.data || 0, this.uncompressedData = e && e.uncompressedData || 0, this.failed = e && e.failed || 0, this.refused = e && e.refused || 0
                            },
                            o = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return t && t.category && (n.category = {}, i.forInOwnNonNullProperties(t.category, (function(e) {
                                        n.category[e] = new s(t.category[e])
                                    }))), n
                                }
                                return r.__extends(t, e), t
                            }(s),
                            a = function(e) {
                                this.peak = e && e.peak || 0, this.min = e && e.min || 0, this.mean = e && e.mean || 0, this.opened = e && e.opened || 0, this.refused = e && e.refused || 0
                            },
                            u = function(e) {
                                this.succeeded = e && e.succeeded || 0, this.failed = e && e.failed || 0, this.refused = e && e.refused || 0
                            },
                            l = function(e) {
                                this.plain = new a(e && e.plain), this.tls = new a(e && e.tls), this.all = new a(e && e.all)
                            },
                            c = function(e) {
                                this.messages = new o(e && e.messages), this.presence = new o(e && e.presence), this.all = new o(e && e.all)
                            },
                            f = function(e) {
                                this.realtime = new c(e && e.realtime), this.rest = new c(e && e.rest), this.webhook = new c(e && e.webhook), this.sharedQueue = new c(e && e.sharedQueue), this.externalQueue = new c(e && e.externalQueue), this.httpEvent = new c(e && e.httpEvent), this.push = new c(e && e.push), this.all = new c(e && e.all)
                            },
                            d = function(e) {
                                this.all = new c(e && e.all), this.inbound = new f(e && e.inbound), this.outbound = new f(e && e.outbound)
                            },
                            h = function(e) {
                                this.all = new c(e && e.all), this.producerPaid = new d(e && e.producerPaid), this.consumerPaid = new d(e && e.consumerPaid)
                            },
                            p = function(e) {
                                this.messages = e && e.messages || 0;
                                var t = e && e.notifications;
                                this.notifications = {
                                    invalid: t && t.invalid || 0,
                                    attempted: t && t.attempted || 0,
                                    successful: t && t.successful || 0,
                                    failed: t && t.failed || 0
                                }, this.directPublishes = e && e.directPublishes || 0
                            },
                            g = function(e) {
                                this.succeeded = e && e.succeeded || 0, this.skipped = e && e.skipped || 0, this.failed = e && e.failed || 0
                            },
                            m = function(e) {
                                var t = this;
                                this.delta = void 0, e && e.delta && (this.delta = {}, i.forInOwnNonNullProperties(e.delta, (function(n) {
                                    t.delta[n] = new g(e.delta[n])
                                })))
                            },
                            y = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return n.persisted = new c(t && t.persisted), n.connections = new l(t && t.connections), n.channels = new a(t && t.channels), n.apiRequests = new u(t && t.apiRequests), n.tokenRequests = new u(t && t.tokenRequests), n.xchgProducer = new h(t && t.xchgProducer), n.xchgConsumer = new h(t && t.xchgConsumer), n.push = new p(t && t.pushStats), n.processed = new m(t && t.processed), n.inProgress = t && t.inProgress || void 0, n.unit = t && t.unit || void 0, n.intervalId = t && t.intervalId || void 0, n
                                }
                                return r.__extends(t, e), t.fromValues = function(e) {
                                    return new t(e)
                                }, t
                            }(d);
                        t.default = y
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(30)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(3)),
                            u = r.__importDefault(n(51)),
                            l = r.__importDefault(n(38)),
                            c = r.__importDefault(n(8)),
                            f = r.__importDefault(n(5)),
                            d = r.__importDefault(n(10)),
                            h = r.__importDefault(n(25)),
                            p = r.__importDefault(n(0)),
                            g = r.__importDefault(n(9)),
                            m = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return a.default.logAction(a.default.LOG_MINOR, "Realtime()", ""), n.connection = new u.default(n, n.options), n.channels = new y(n), !1 !== t.autoConnect && n.connect(), n
                                }
                                return r.__extends(t, e), t.prototype.connect = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Realtime.connect()", ""), this.connection.connect()
                                }, t.prototype.close = function() {
                                    a.default.logAction(a.default.LOG_MINOR, "Realtime.close()", ""), this.connection.close()
                                }, t.Promise = function(e) {
                                    return (e = c.default.objectifyOptions(e)).promises = !0, new t(e)
                                }, t.Callbacks = t, t.Utils = i, t.ConnectionManager = h.default, t.Platform = p.default, t.ProtocolMessage = d.default, t.Message = g.default, t
                            }(s.default),
                            y = function(e) {
                                function t(t) {
                                    var n = e.call(this) || this;
                                    return n.realtime = t, n.all = Object.create(null), n.inProgress = Object.create(null), t.connection.connectionManager.on("transport.active", (function() {
                                        n.onTransportActive()
                                    })), n
                                }
                                return r.__extends(t, e), t.prototype.onChannelMessage = function(e) {
                                    var t = e.channel;
                                    if (void 0 !== t) {
                                        var n = this.all[t];
                                        n ? n.onMessage(e) : a.default.logAction(a.default.LOG_ERROR, "Channels.onChannelMessage()", "received event for non-existent channel: " + t)
                                    } else a.default.logAction(a.default.LOG_ERROR, "Channels.onChannelMessage()", "received event unspecified channel, action = " + e.action)
                                }, t.prototype.onTransportActive = function() {
                                    for (var e in this.all) {
                                        var t = this.all[e];
                                        "attaching" === t.state || "detaching" === t.state ? t.checkPendingState() : "suspended" === t.state && t._attach(!1, null)
                                    }
                                }, t.prototype.reattach = function(e) {
                                    for (var t in this.all) {
                                        var n = this.all[t];
                                        "attached" === n.state && n.requestState("attaching", e)
                                    }
                                }, t.prototype.resetAttachedMsgIndicators = function() {
                                    for (var e in this.all) {
                                        var t = this.all[e];
                                        "attached" === t.state && (t._attachedMsgIndicator = !1)
                                    }
                                }, t.prototype.checkAttachedMsgIndicators = function(e) {
                                    for (var t in this.all) {
                                        var n = this.all[t];
                                        if ("attached" === n.state && !1 === n._attachedMsgIndicator) {
                                            var r = "30s after a resume, found channel which has not received an attached; channelId = " + t + "; connectionId = " + e;
                                            a.default.logAction(a.default.LOG_ERROR, "Channels.checkAttachedMsgIndicators()", r), n.requestState("attaching")
                                        }
                                    }
                                }, t.prototype.propogateConnectionInterruption = function(e, t) {
                                    var n = ["attaching", "attached", "detaching", "suspended"],
                                        r = {
                                            closing: "detached",
                                            closed: "detached",
                                            failed: "failed",
                                            suspended: "suspended"
                                        } [e];
                                    for (var s in this.all) {
                                        var o = this.all[s];
                                        i.arrIn(n, o.state) && o.notifyState(r, t)
                                    }
                                }, t.prototype.get = function(e, t) {
                                    e = String(e);
                                    var n = this.all[e];
                                    if (n) {
                                        if (t) {
                                            if (n._shouldReattachToSetOptions(t)) throw new f.default("Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.", 4e4, 400);
                                            n.setOptions(t)
                                        }
                                    } else n = this.all[e] = new l.default(this.realtime, e, t);
                                    return n
                                }, t.prototype.release = function(e) {
                                    e = String(e);
                                    var t = this.all[e];
                                    if (t) {
                                        var n = t.getReleaseErr();
                                        if (n) throw n;
                                        delete this.all[e], delete this.inProgress[e]
                                    }
                                }, t.prototype.setInProgress = function(e, t, n) {
                                    this.inProgress[e.name] = this.inProgress[e.name] || {}, this.inProgress[e.name][t] = n, !n && this.hasNopending() && this.emit("nopending")
                                }, t.prototype.onceNopending = function(e) {
                                    this.hasNopending() ? e() : this.once("nopending", e)
                                }, t.prototype.hasNopending = function() {
                                    return i.arrEvery(i.valuesArray(this.inProgress, !0), (function(e) {
                                        return !i.containsValue(e, !0)
                                    }))
                                }, t
                            }(o.default);
                        t.default = m
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(7)),
                            o = r.__importDefault(n(25)),
                            a = r.__importDefault(n(3)),
                            u = r.__importDefault(n(36)),
                            l = r.__importDefault(n(0));

                        function c() {}
                        var f = function(e) {
                            function t(t, n) {
                                var r = e.call(this) || this;
                                return r.whenState = function(e, t) {
                                    return s.default.prototype.whenState.call(r, e, r.state, t, new u.default(void 0, e))
                                }, r.ably = t, r.connectionManager = new o.default(t, n), r.state = r.connectionManager.state.state, r.key = void 0, r.id = void 0, r.serial = void 0, r.recoveryKey = void 0, r.errorReason = null, r.connectionManager.on("connectionstate", (function(e) {
                                    var t = r.state = e.current;
                                    l.default.Config.nextTick((function() {
                                        r.emit(t, e)
                                    }))
                                })), r.connectionManager.on("update", (function(e) {
                                    l.default.Config.nextTick((function() {
                                        r.emit("update", e)
                                    }))
                                })), r
                            }
                            return r.__extends(t, e), t.prototype.connect = function() {
                                a.default.logAction(a.default.LOG_MINOR, "Connection.connect()", ""), this.connectionManager.requestState({
                                    state: "connecting"
                                })
                            }, t.prototype.ping = function(e) {
                                if (a.default.logAction(a.default.LOG_MINOR, "Connection.ping()", ""), !e) {
                                    if (this.ably.options.promises) return i.promisify(this, "ping", arguments);
                                    e = c
                                }
                                this.connectionManager.ping(null, e)
                            }, t.prototype.close = function() {
                                a.default.logAction(a.default.LOG_MINOR, "Connection.close()", "connectionKey = " + this.key), this.connectionManager.requestState({
                                    state: "closing"
                                })
                            }, t
                        }(s.default);
                        t.default = f
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0, t.PendingMessage = void 0;
                        var r = n(1),
                            i = r.__importDefault(n(10)),
                            s = r.__importStar(n(2)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(3)),
                            u = r.__importDefault(n(35)),
                            l = r.__importDefault(n(5)),
                            c = i.default.Action,
                            f = function(e, t) {
                                this.message = e, this.callback = t, this.merged = !1;
                                var n = e.action;
                                this.sendAttempted = !1, this.ackRequired = n == c.MESSAGE || n == c.PRESENCE
                            };
                        t.PendingMessage = f;
                        var d = function(e) {
                            function t(t) {
                                var n = e.call(this) || this;
                                return n.transport = t, n.messageQueue = new u.default, t.on("ack", (function(e, t) {
                                    n.onAck(e, t)
                                })), t.on("nack", (function(e, t, r) {
                                    n.onNack(e, t, r)
                                })), n
                            }
                            return r.__extends(t, e), t.prototype.onAck = function(e, t) {
                                a.default.logAction(a.default.LOG_MICRO, "Protocol.onAck()", "serial = " + e + "; count = " + t), this.messageQueue.completeMessages(e, t)
                            }, t.prototype.onNack = function(e, t, n) {
                                a.default.logAction(a.default.LOG_ERROR, "Protocol.onNack()", "serial = " + e + "; count = " + t + "; err = " + s.inspectError(n)), n || (n = new l.default("Unable to send message; channel not responding", 50001, 500)), this.messageQueue.completeMessages(e, t, n)
                            }, t.prototype.onceIdle = function(e) {
                                var t = this.messageQueue;
                                0 !== t.count() ? t.once("idle", e) : e()
                            }, t.prototype.send = function(e) {
                                e.ackRequired && this.messageQueue.push(e), a.default.shouldLog(a.default.LOG_MICRO) && a.default.logAction(a.default.LOG_MICRO, "Protocol.send()", "sending msg; " + i.default.stringify(e.message)), e.sendAttempted = !0, this.transport.send(e.message)
                            }, t.prototype.getTransport = function() {
                                return this.transport
                            }, t.prototype.getPendingMessages = function() {
                                return this.messageQueue.copyAll()
                            }, t.prototype.clearPendingMessages = function() {
                                return this.messageQueue.clear()
                            }, t.prototype.finish = function() {
                                var e = this.transport;
                                this.onceIdle((function() {
                                    e.disconnect()
                                }))
                            }, t
                        }(o.default);
                        t.default = d
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(0)),
                            s = r.__importStar(n(2)),
                            o = r.__importDefault(n(26)),
                            a = r.__importDefault(n(8)),
                            u = r.__importDefault(n(3)),
                            l = r.__importDefault(n(10)),
                            c = r.__importDefault(n(5)),
                            f = "web_socket",
                            d = function(e) {
                                function t(t, n, r) {
                                    var s = e.call(this, t, n, r) || this;
                                    return s.shortName = f, r.heartbeats = i.default.Config.useProtocolHeartbeats, s.wsHost = a.default.getHost(r.options, r.host, !0), s
                                }
                                return r.__extends(t, e), t.isAvailable = function() {
                                    return !!i.default.Config.WebSocket
                                }, t.prototype.createWebSocket = function(e, t) {
                                    var n = 0;
                                    if (t)
                                        for (var r in t) e += (n++ ? "&" : "?") + r + "=" + t[r];
                                    return this.uri = e, new i.default.Config.WebSocket(e)
                                }, t.prototype.toString = function() {
                                    return "WebSocketTransport; uri=" + this.uri
                                }, t.prototype.connect = function() {
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.connect()", "starting"), o.default.prototype.connect.call(this);
                                    var e = this,
                                        t = this.params,
                                        n = t.options,
                                        r = (n.tls ? "wss://" : "ws://") + this.wsHost + ":" + a.default.getPort(n) + "/";
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.connect()", "uri: " + r), this.auth.getAuthParams((function(n, s) {
                                        if (!e.isDisposed) {
                                            var o = "";
                                            for (var a in s) o += " " + a + ": " + s[a] + ";";
                                            if (u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.connect()", "authParams:" + o + " err: " + n), n) e.disconnect(n);
                                            else {
                                                var l = t.getConnectParams(s);
                                                try {
                                                    var c = e.wsConnection = e.createWebSocket(r, l);
                                                    c.binaryType = i.default.Config.binaryType, c.onopen = function() {
                                                        e.onWsOpen()
                                                    }, c.onclose = function(t) {
                                                        e.onWsClose(t)
                                                    }, c.onmessage = function(t) {
                                                        e.onWsData(t.data)
                                                    }, c.onerror = function(t) {
                                                        e.onWsError(t)
                                                    }, c.on && c.on("ping", (function() {
                                                        e.onActivity()
                                                    }))
                                                } catch (t) {
                                                    u.default.logAction(u.default.LOG_ERROR, "WebSocketTransport.connect()", "Unexpected exception creating websocket: err = " + (t.stack || t.message)), e.disconnect(t)
                                                }
                                            }
                                        }
                                    }))
                                }, t.prototype.send = function(e) {
                                    var t = this.wsConnection;
                                    if (t) try {
                                        t.send(l.default.serialize(e, this.params.format))
                                    } catch (e) {
                                        var n = "Exception from ws connection when trying to send: " + s.inspectError(e);
                                        u.default.logAction(u.default.LOG_ERROR, "WebSocketTransport.send()", n), this.finish("disconnected", new c.default(n, 5e4, 500))
                                    } else u.default.logAction(u.default.LOG_ERROR, "WebSocketTransport.send()", "No socket connection")
                                }, t.prototype.onWsData = function(e) {
                                    u.default.logAction(u.default.LOG_MICRO, "WebSocketTransport.onWsData()", "data received; length = " + e.length + "; type = " + typeof e);
                                    try {
                                        this.onProtocolMessage(l.default.deserialize(e, this.format))
                                    } catch (e) {
                                        u.default.logAction(u.default.LOG_ERROR, "WebSocketTransport.onWsData()", "Unexpected exception handing channel message: " + e.stack)
                                    }
                                }, t.prototype.onWsOpen = function() {
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.onWsOpen()", "opened WebSocket"), this.emit("preconnect")
                                }, t.prototype.onWsClose = function(e) {
                                    var t, n;
                                    if ("object" == typeof e ? (n = e.code, t = e.wasClean || 1e3 === n) : t = 1e3 == (n = e), delete this.wsConnection, t) {
                                        u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.onWsClose()", "Cleanly closed WebSocket");
                                        var r = new c.default("Websocket closed", 80003, 400);
                                        this.finish("disconnected", r)
                                    } else {
                                        var i = "Unclean disconnection of WebSocket ; code = " + n;
                                        r = new c.default(i, 80003, 400), u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.onWsClose()", i), this.finish("disconnected", r)
                                    }
                                    this.emit("disposed")
                                }, t.prototype.onWsError = function(e) {
                                    var t = this;
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.onError()", "Error from WebSocket: " + e.message), i.default.Config.nextTick((function() {
                                        t.disconnect(Error(e.message))
                                    }))
                                }, t.prototype.dispose = function() {
                                    u.default.logAction(u.default.LOG_MINOR, "WebSocketTransport.dispose()", ""), this.isDisposed = !0;
                                    var e = this.wsConnection;
                                    e && (e.onmessage = function() {}, delete this.wsConnection, i.default.Config.nextTick((function() {
                                        if (u.default.logAction(u.default.LOG_MICRO, "WebSocketTransport.dispose()", "closing websocket"), !e) throw new Error("WebSocketTransport.dispose(): wsConnection is not defined");
                                        e.close()
                                    })))
                                }, t
                            }(o.default);
                        t.default = function(e) {
                            return d.isAvailable() && (e.supportedTransports.web_socket = d), d
                        }
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importStar(n(2)),
                            s = r.__importDefault(n(34)),
                            o = r.__importDefault(n(7)),
                            a = r.__importDefault(n(3)),
                            u = r.__importDefault(n(14)),
                            l = r.__importDefault(n(5)),
                            c = r.__importDefault(n(38)),
                            f = r.__importDefault(n(22)),
                            d = r.__importDefault(n(39)),
                            h = function() {};

                        function p(e) {
                            return e.clientId + ":" + e.connectionId
                        }

                        function g(e) {
                            var t = e.channel.realtime,
                                n = t.auth.clientId;
                            return (!n || "*" === n) && "connected" === t.connection.state
                        }

                        function m(e, t, n) {
                            switch (e.state) {
                                case "attached":
                                case "suspended":
                                    n();
                                    break;
                                case "initialized":
                                case "detached":
                                case "detaching":
                                case "attaching":
                                    e.attach((function(e) {
                                        e ? t(e) : n()
                                    }));
                                    break;
                                default:
                                    t(l.default.fromValues(c.default.invalidStateError(e.state)))
                            }
                        }

                        function y(e, t) {
                            if (e.isSynthesized() || t.isSynthesized()) return e.timestamp > t.timestamp;
                            var n = e.parseId(),
                                r = t.parseId();
                            return n.msgSerial === r.msgSerial ? n.index > r.index : n.msgSerial > r.msgSerial
                        }
                        var v = function(e) {
                                function t(t) {
                                    var n = e.call(this, t) || this;
                                    return n.channel = t, n.syncComplete = !1, n.members = new _(n), n._myMembers = new _(n), n.subscriptions = new o.default, n.pendingPresence = [], n
                                }
                                return r.__extends(t, e), t.prototype.enter = function(e, t) {
                                    if (g(this)) throw new l.default("clientId must be specified to enter a presence channel", 40012, 400);
                                    return this._enterOrUpdateClient(void 0, e, "enter", t)
                                }, t.prototype.update = function(e, t) {
                                    if (g(this)) throw new l.default("clientId must be specified to update presence data", 40012, 400);
                                    return this._enterOrUpdateClient(void 0, e, "update", t)
                                }, t.prototype.enterClient = function(e, t, n) {
                                    return this._enterOrUpdateClient(e, t, "enter", n)
                                }, t.prototype.updateClient = function(e, t, n) {
                                    return this._enterOrUpdateClient(e, t, "update", n)
                                }, t.prototype._enterOrUpdateClient = function(e, t, n, r) {
                                    var s = this;
                                    if (!r)
                                        if ("function" == typeof t) r = t, t = null;
                                        else {
                                            if (this.channel.realtime.options.promises) return i.promisify(this, "_enterOrUpdateClient", [e, t, n]);
                                            r = h
                                        } var o = this.channel;
                                    if (o.connectionManager.activeState()) {
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence." + n + "Client()", "channel = " + o.name + ", client = " + (e || "(implicit) " + this.channel.realtime.auth.clientId));
                                        var c = u.default.fromValues({
                                            action: n,
                                            data: t
                                        });
                                        e && (c.clientId = e), u.default.encode(c, o.channelOptions, (function(e) {
                                            if (e) r(e);
                                            else switch (o.state) {
                                                case "attached":
                                                    o.sendPresence(c, r);
                                                    break;
                                                case "initialized":
                                                case "detached":
                                                    o.attach();
                                                case "attaching":
                                                    s.pendingPresence.push({
                                                        presence: c,
                                                        callback: r
                                                    });
                                                    break;
                                                default:
                                                    (e = new l.default("Unable to " + n + " presence channel while in " + o.state + " state", 90001)).code = 90001, r(e)
                                            }
                                        }))
                                    } else r(o.connectionManager.getError())
                                }, t.prototype.leave = function(e, t) {
                                    if (g(this)) throw new l.default("clientId must have been specified to enter or leave a presence channel", 40012, 400);
                                    return this.leaveClient(void 0, e, t)
                                }, t.prototype.leaveClient = function(e, t, n) {
                                    if (!n)
                                        if ("function" == typeof t) n = t, t = null;
                                        else {
                                            if (this.channel.realtime.options.promises) return i.promisify(this, "leaveClient", [e, t]);
                                            n = h
                                        } var r = this.channel;
                                    if (r.connectionManager.activeState()) {
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.leaveClient()", "leaving; channel = " + this.channel.name + ", client = " + e);
                                        var s = u.default.fromValues({
                                            action: "leave",
                                            data: t
                                        });
                                        switch (e && (s.clientId = e), r.state) {
                                            case "attached":
                                                r.sendPresence(s, n);
                                                break;
                                            case "attaching":
                                                this.pendingPresence.push({
                                                    presence: s,
                                                    callback: n
                                                });
                                                break;
                                            case "initialized":
                                            case "failed":
                                                var o = new l.default("Unable to leave presence channel (incompatible state)", 90001);
                                                null == n || n(o);
                                                break;
                                            default:
                                                null == n || n(c.default.invalidStateError(r.state))
                                        }
                                    } else null == n || n(r.connectionManager.getError())
                                }, t.prototype.get = function(e, t) {
                                    var n = this,
                                        r = Array.prototype.slice.call(arguments);
                                    1 == r.length && "function" == typeof r[0] && r.unshift(null), e = r[0], t = r[1];
                                    var s = !e || !("waitForSync" in e) || e.waitForSync;
                                    if (!t) {
                                        if (this.channel.realtime.options.promises) return i.promisify(this, "get", r);
                                        t = h
                                    }

                                    function o(n) {
                                        t(null, e ? n.list(e) : n.values())
                                    }
                                    "suspended" !== this.channel.state ? m(this.channel, t, (function() {
                                        var e = n.members;
                                        s ? e.waitSync((function() {
                                            o(e)
                                        })) : o(e)
                                    })) : s ? t(l.default.fromValues({
                                        statusCode: 400,
                                        code: 91005,
                                        message: "Presence state is out of sync due to channel being in the SUSPENDED state"
                                    })) : o(this.members)
                                }, t.prototype.history = function(e, t) {
                                    if (a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.history()", "channel = " + this.name), void 0 === t)
                                        if ("function" == typeof e) t = e, e = null;
                                        else {
                                            if (this.channel.realtime.options.promises) return i.promisify(this, "history", arguments);
                                            t = h
                                        } e && e.untilAttach && ("attached" === this.channel.state ? (delete e.untilAttach, e.from_serial = this.channel.properties.attachSerial) : t(new l.default("option untilAttach requires the channel to be attached, was: " + this.channel.state, 4e4, 400))), s.default.prototype._history.call(this, e, t)
                                }, t.prototype.setPresence = function(e, t, n) {
                                    var r, i;
                                    a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.setPresence()", "received presence for " + e.length + " participants; syncChannelSerial = " + n);
                                    var s = this.members,
                                        o = this._myMembers,
                                        l = [],
                                        f = this.channel.connectionManager.connectionId;
                                    t && (this.members.startSync(), n && (i = n.match(/^[\w-]+:(.*)$/)) && (r = i[1]));
                                    for (var d = 0; d < e.length; d++) switch ((h = u.default.fromValues(e[d])).action) {
                                        case "leave":
                                            s.remove(h) && l.push(h), h.connectionId !== f || h.isSynthesized() || o.remove(h);
                                            break;
                                        case "enter":
                                        case "present":
                                        case "update":
                                            s.put(h) && l.push(h), h.connectionId === f && o.put(h)
                                    }
                                    for (t && !r && (s.endSync(), this._ensureMyMembersPresent(), this.channel.setInProgress(c.default.progressOps.sync, !1), this.channel.syncChannelSerial = null), d = 0; d < l.length; d++) {
                                        var h = l[d];
                                        this.subscriptions.emit(h.action, h)
                                    }
                                }, t.prototype.onAttached = function(e) {
                                    a.default.logAction(a.default.LOG_MINOR, "RealtimePresence.onAttached()", "channel = " + this.channel.name + ", hasPresence = " + e), e ? this.members.startSync() : (this._synthesizeLeaves(this.members.values()), this.members.clear(), this._ensureMyMembersPresent());
                                    var t = this.pendingPresence,
                                        n = t.length;
                                    if (n) {
                                        this.pendingPresence = [];
                                        var r = [],
                                            i = f.default.create();
                                        a.default.logAction(a.default.LOG_MICRO, "RealtimePresence.onAttached", "sending " + n + " queued presence messages");
                                        for (var s = 0; s < n; s++) {
                                            var o = t[s];
                                            r.push(o.presence), i.push(o.callback)
                                        }
                                        this.channel.sendPresence(r, i)
                                    }
                                }, t.prototype.actOnChannelState = function(e, t, n) {
                                    switch (e) {
                                        case "attached":
                                            this.onAttached(t);
                                            break;
                                        case "detached":
                                        case "failed":
                                            this._clearMyMembers(), this.members.clear();
                                        case "suspended":
                                            this.failPendingPresence(n)
                                    }
                                }, t.prototype.failPendingPresence = function(e) {
                                    if (this.pendingPresence.length) {
                                        a.default.logAction(a.default.LOG_MINOR, "RealtimeChannel.failPendingPresence", "channel; name = " + this.channel.name + ", err = " + i.inspectError(e));
                                        for (var t = 0; t < this.pendingPresence.length; t++) try {
                                            this.pendingPresence[t].callback(e)
                                        } catch (e) {}
                                        this.pendingPresence = []
                                    }
                                }, t.prototype._clearMyMembers = function() {
                                    this._myMembers.clear()
                                }, t.prototype._ensureMyMembersPresent = function() {
                                    var e = this,
                                        t = this.members,
                                        n = this._myMembers,
                                        r = function(t) {
                                            if (t) {
                                                var n = "Presence auto-re-enter failed: " + t.toString(),
                                                    r = new l.default(n, 91004, 400);
                                                a.default.logAction(a.default.LOG_ERROR, "RealtimePresence._ensureMyMembersPresent()", n);
                                                var i = new d.default(e.channel.state, e.channel.state, !0, r);
                                                e.channel.emit("update", i)
                                            }
                                        };
                                    for (var i in n.map)
                                        if (!(i in t.map)) {
                                            var s = n.map[i];
                                            a.default.logAction(a.default.LOG_MICRO, "RealtimePresence._ensureMyMembersPresent()", 'Auto-reentering clientId "' + s.clientId + '" into the presence set'), this._enterOrUpdateClient(s.clientId, s.data, "enter", r), delete n.map[i]
                                        }
                                }, t.prototype._synthesizeLeaves = function(e) {
                                    var t = this.subscriptions;
                                    i.arrForEach(e, (function(e) {
                                        var n = u.default.fromValues({
                                            action: "leave",
                                            connectionId: e.connectionId,
                                            clientId: e.clientId,
                                            data: e.data,
                                            encoding: e.encoding,
                                            timestamp: i.now()
                                        });
                                        t.emit("leave", n)
                                    }))
                                }, t.prototype.on = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    a.default.deprecated("presence.on", "presence.subscribe"), this.subscribe.apply(this, e)
                                }, t.prototype.off = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    a.default.deprecated("presence.off", "presence.unsubscribe"), this.unsubscribe.apply(this, e)
                                }, t.prototype.subscribe = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = c.default.processListenerArgs(e),
                                        r = n[0],
                                        s = n[1],
                                        o = n[2],
                                        a = this.channel;
                                    if (!o) {
                                        if (this.channel.realtime.options.promises) return i.promisify(this, "subscribe", [r, s]);
                                        o = h
                                    }
                                    "failed" !== a.state ? (this.subscriptions.on(r, s), a.attach(o)) : o(l.default.fromValues(c.default.invalidStateError("failed")))
                                }, t.prototype.unsubscribe = function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    var n = c.default.processListenerArgs(e),
                                        r = n[0],
                                        i = n[1];
                                    this.subscriptions.off(r, i)
                                }, t
                            }(s.default),
                            _ = function(e) {
                                function t(t) {
                                    var n = e.call(this) || this;
                                    return n.presence = t, n.map = Object.create(null), n.syncInProgress = !1, n.residualMembers = null, n
                                }
                                return r.__extends(t, e), t.prototype.get = function(e) {
                                    return this.map[e]
                                }, t.prototype.getClient = function(e) {
                                    var t = this.map,
                                        n = [];
                                    for (var r in t) {
                                        var i = t[r];
                                        i.clientId == e && "absent" != i.action && n.push(i)
                                    }
                                    return n
                                }, t.prototype.list = function(e) {
                                    var t = this.map,
                                        n = e && e.clientId,
                                        r = e && e.connectionId,
                                        i = [];
                                    for (var s in t) {
                                        var o = t[s];
                                        "absent" !== o.action && (n && n != o.clientId || r && r != o.connectionId || i.push(o))
                                    }
                                    return i
                                }, t.prototype.put = function(e) {
                                    "enter" !== e.action && "update" !== e.action || ((e = u.default.fromValues(e)).action = "present");
                                    var t = this.map,
                                        n = p(e);
                                    this.residualMembers && delete this.residualMembers[n];
                                    var r = t[n];
                                    return !(r && !y(e, r) || (t[n] = e, 0))
                                }, t.prototype.values = function() {
                                    var e = this.map,
                                        t = [];
                                    for (var n in e) {
                                        var r = e[n];
                                        "absent" != r.action && t.push(r)
                                    }
                                    return t
                                }, t.prototype.remove = function(e) {
                                    var t = this.map,
                                        n = p(e),
                                        r = t[n];
                                    return !(r && !y(e, r) || (this.syncInProgress ? ((e = u.default.fromValues(e)).action = "absent", t[n] = e) : delete t[n], 0))
                                }, t.prototype.startSync = function() {
                                    var e = this.map,
                                        t = this.syncInProgress;
                                    a.default.logAction(a.default.LOG_MINOR, "PresenceMap.startSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), this.syncInProgress || (this.residualMembers = i.copy(e), this.setInProgress(!0))
                                }, t.prototype.endSync = function() {
                                    var e = this.map,
                                        t = this.syncInProgress;
                                    if (a.default.logAction(a.default.LOG_MINOR, "PresenceMap.endSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), t) {
                                        for (var n in e) "absent" === e[n].action && delete e[n];
                                        for (var r in this.presence._synthesizeLeaves(i.valuesArray(this.residualMembers)), this.residualMembers) delete e[r];
                                        this.residualMembers = null, this.setInProgress(!1)
                                    }
                                    this.emit("sync")
                                }, t.prototype.waitSync = function(e) {
                                    var t = this.syncInProgress;
                                    a.default.logAction(a.default.LOG_MINOR, "PresenceMap.waitSync()", "channel = " + this.presence.channel.name + "; syncInProgress = " + t), t ? this.once("sync", e) : e()
                                }, t.prototype.clear = function() {
                                    this.map = {}, this.setInProgress(!1), this.residualMembers = null
                                }, t.prototype.setInProgress = function(e) {
                                    a.default.logAction(a.default.LOG_MICRO, "PresenceMap.setInProgress()", "inProgress = " + e), this.syncInProgress = e, this.presence.syncComplete = !e
                                }, t
                            }(o.default);
                        t.default = v
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = n(56),
                            s = n(32),
                            o = n(13),
                            a = r.__importDefault(n(4)),
                            u = r.__importDefault(n(0)),
                            l = function() {
                                function e() {
                                    this.base64CharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", this.hexCharSet = "0123456789abcdef"
                                }
                                return e.prototype.isWordArray = function(e) {
                                    return null != e && void 0 !== e.sigBytes
                                }, e.prototype.isArrayBuffer = function(e) {
                                    return null != e && e.constructor === ArrayBuffer
                                }, e.prototype.isTypedArray = function(e) {
                                    return !!ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(e)
                                }, e.prototype.uint8ViewToBase64 = function(e) {
                                    for (var t, n, r, i, s = "", o = this.base64CharSet, a = e.byteLength, u = a % 3, l = a - u, c = 0; c < l; c += 3) t = (258048 & (i = e[c] << 16 | e[c + 1] << 8 | e[c + 2])) >> 12, n = (4032 & i) >> 6, r = 63 & i, s += o[(16515072 & i) >> 18] + o[t] + o[n] + o[r];
                                    return 1 == u ? (t = (3 & (i = e[l])) << 4, s += o[(252 & i) >> 2] + o[t] + "==") : 2 == u && (t = (1008 & (i = e[l] << 8 | e[l + 1])) >> 4, n = (15 & i) << 2, s += o[(64512 & i) >> 10] + o[t] + o[n] + "="), s
                                }, e.prototype.base64ToArrayBuffer = function(e) {
                                    for (var t = null === atob || void 0 === atob ? void 0 : atob(e), n = t.length, r = new Uint8Array(n), i = 0; i < n; i++) {
                                        var s = t.charCodeAt(i);
                                        r[i] = s
                                    }
                                    return r.buffer
                                }, e.prototype.isBuffer = function(e) {
                                    return this.isArrayBuffer(e) || this.isWordArray(e) || this.isTypedArray(e)
                                }, e.prototype.toBuffer = function(e) {
                                    if (!ArrayBuffer) throw new Error("Can't convert to Buffer: browser does not support the necessary types");
                                    if (this.isArrayBuffer(e)) return new Uint8Array(e);
                                    if (this.isTypedArray(e)) return new Uint8Array(e.buffer);
                                    if (this.isWordArray(e)) {
                                        for (var t = new ArrayBuffer(e.sigBytes), n = new Uint8Array(t), r = 0; r < e.sigBytes; r++) n[r] = e.words[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                        return n
                                    }
                                    throw new Error("BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray")
                                }, e.prototype.toArrayBuffer = function(e) {
                                    return this.isArrayBuffer(e) ? e : this.toBuffer(e).buffer
                                }, e.prototype.toWordArray = function(e) {
                                    return this.isTypedArray(e) && (e = e.buffer), this.isWordArray(e) ? e : a.default.create(e)
                                }, e.prototype.base64Encode = function(e) {
                                    return this.isWordArray(e) ? (0, o.stringify)(e) : this.uint8ViewToBase64(this.toBuffer(e))
                                }, e.prototype.base64Decode = function(e) {
                                    return ArrayBuffer && u.default.Config.atob ? this.base64ToArrayBuffer(e) : (0, o.parse)(e)
                                }, e.prototype.hexEncode = function(e) {
                                    return (0, i.stringify)(this.toWordArray(e))
                                }, e.prototype.hexDecode = function(e) {
                                    var t = (0, i.parse)(e);
                                    return ArrayBuffer ? this.toArrayBuffer(t) : t
                                }, e.prototype.utf8Encode = function(e) {
                                    return TextEncoder ? (new TextEncoder).encode(e).buffer : (0, s.parse)(e)
                                }, e.prototype.utf8Decode = function(e) {
                                    if (!this.isBuffer(e)) throw new Error("Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray");
                                    return TextDecoder && !this.isWordArray(e) ? (new TextDecoder).decode(e) : (e = this.toWordArray(e), (0, s.stringify)(e))
                                }, e.prototype.bufferCompare = function(e, t) {
                                    if (!e) return -1;
                                    if (!t) return 1;
                                    var n = this.toWordArray(e),
                                        r = this.toWordArray(t);
                                    n.clamp(), r.clamp();
                                    var i = n.sigBytes - r.sigBytes;
                                    if (0 != i) return i;
                                    for (var s = n.words, o = r.words, a = 0; a < s.length; a++)
                                        if (0 != (i = s[a] - o[a])) return i;
                                    return 0
                                }, e.prototype.byteLength = function(e) {
                                    return this.isArrayBuffer(e) || this.isTypedArray(e) ? e.byteLength : this.isWordArray(e) ? e.sigBytes : -1
                                }, e.prototype.typedArrayToBuffer = function(e) {
                                    return e.buffer
                                }, e
                            }();
                        t.default = new l
                    }, function(e, t, n) {
                        e.exports = n(6).enc.Hex
                    }, function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n(4),
                            i = n.n(r),
                            s = n(13),
                            o = n(21),
                            a = n.n(o),
                            u = n(0),
                            l = n.n(u),
                            c = n(3),
                            f = n.n(c),
                            d = function() {
                                var e;
                                if (l.a.getRandomWordArray) e = l.a.getRandomWordArray;
                                else if ("undefined" != typeof Uint32Array && l.a.getRandomValues) {
                                    var t = new Uint32Array(4);
                                    e = function(e, n) {
                                        var r = e / 4,
                                            i = 4 == r ? t : new Uint32Array(r);
                                        l.a.getRandomValues(i, (function(e) {
                                            void 0 !== n && n(e, l.a.BufferUtils.toWordArray(i))
                                        }))
                                    }
                                } else e = function(e, t) {
                                    f.a.logAction(f.a.LOG_MAJOR, "Ably.Crypto.generateRandom()", "Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()");
                                    for (var n = e / 4, r = new Array(n), s = 0; s < n; s++) r[s] = Math.floor(4294967296 * Math.random()) - 2147483648;
                                    t(null, i.a.create(r))
                                };

                                function n(e) {
                                    if ("aes" === e.algorithm && "cbc" === e.mode) {
                                        if (128 === e.keyLength || 256 === e.keyLength) return;
                                        throw new Error("Unsupported key length " + e.keyLength + " for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)")
                                    }
                                }

                                function r(e) {
                                    return e.replace("_", "/").replace("-", "+")
                                }
                                var o = [i.a.create([269488144, 269488144, 269488144, 269488144], 16), i.a.create([16777216], 1), i.a.create([33685504], 2), i.a.create([50529024], 3), i.a.create([67372036], 4), i.a.create([84215045, 83886080], 5), i.a.create([101058054, 101056512], 6), i.a.create([117901063, 117901056], 7), i.a.create([134744072, 134744072], 8), i.a.create([151587081, 151587081, 150994944], 9), i.a.create([168430090, 168430090, 168427520], 10), i.a.create([185273099, 185273099, 185273088], 11), i.a.create([202116108, 202116108, 202116108], 12), i.a.create([218959117, 218959117, 218959117, 218103808], 13), i.a.create([235802126, 235802126, 235802126, 235798528], 14), i.a.create([252645135, 252645135, 252645135, 252645135], 15), i.a.create([269488144, 269488144, 269488144, 269488144], 16)];

                                function u() {}

                                function c() {
                                    this.algorithm = null, this.keyLength = null, this.mode = null, this.key = null
                                }

                                function d(e, t, n) {
                                    this.algorithm = e.algorithm + "-" + String(e.keyLength) + "-" + e.mode, this.cjsAlgorithm = e.algorithm.toUpperCase().replace(/-\d+$/, ""), this.key = l.a.BufferUtils.toWordArray(e.key), n && (this.iv = l.a.BufferUtils.toWordArray(n).clone()), this.blockLengthWords = t
                                }
                                return u.CipherParams = c, u.getDefaultParams = function(e) {
                                    var t;
                                    if ("function" != typeof e && "string" != typeof e) {
                                        if (!e.key) throw new Error("Crypto.getDefaultParams: a key is required");
                                        t = "string" == typeof e.key ? Object(s.parse)(r(e.key)) : l.a.BufferUtils.toWordArray(e.key);
                                        var i = new c;
                                        if (i.key = t, i.algorithm = e.algorithm || "aes", i.keyLength = 32 * t.words.length, i.mode = e.mode || "cbc", e.keyLength && e.keyLength !== i.keyLength) throw new Error("Crypto.getDefaultParams: a keyLength of " + e.keyLength + " was specified, but the key actually has length " + i.keyLength);
                                        return n(i), i
                                    }
                                    if (f.a.deprecated("Crypto.getDefaultParams(key, callback)", "Crypto.getDefaultParams({key: key})"), "function" == typeof e) u.generateRandomKey((function(t) {
                                        e(null, u.getDefaultParams({
                                            key: t
                                        }))
                                    }));
                                    else {
                                        if ("function" != typeof arguments[1]) throw new Error("Invalid arguments for Crypto.getDefaultParams");
                                        arguments[1](null, u.getDefaultParams({
                                            key: e
                                        }))
                                    }
                                }, u.generateRandomKey = function(t, n) {
                                    1 == arguments.length && "function" == typeof t && (n = t, t = void 0), e((t || 256) / 8, n)
                                }, u.getCipher = function(e) {
                                    var t = e instanceof c ? e : u.getDefaultParams(e);
                                    return {
                                        cipherParams: t,
                                        cipher: new d(t, 4, e.iv)
                                    }
                                }, d.prototype.encrypt = function(t, n) {
                                    f.a.logAction(f.a.LOG_MICRO, "CBCCipher.encrypt()", "");
                                    var r = (t = l.a.BufferUtils.toWordArray(t)).sigBytes,
                                        i = function(e) {
                                            return e + 16 & -16
                                        }(r),
                                        s = this,
                                        u = function() {
                                            s.getIv((function(e, a) {
                                                if (e) n(e);
                                                else {
                                                    var u = s.encryptCipher.process(t.concat(o[i - r])),
                                                        l = a.concat(u);
                                                    n(null, l)
                                                }
                                            }))
                                        };
                                    this.encryptCipher ? u() : this.iv ? (this.encryptCipher = a.a.algo[this.cjsAlgorithm].createEncryptor(this.key, {
                                        iv: this.iv
                                    }), u()) : e(16, (function(e, t) {
                                        e ? n(e) : (s.encryptCipher = a.a.algo[s.cjsAlgorithm].createEncryptor(s.key, {
                                            iv: t
                                        }), s.iv = t, u())
                                    }))
                                }, d.prototype.decrypt = function(e) {
                                    f.a.logAction(f.a.LOG_MICRO, "CBCCipher.decrypt()", ""), e = l.a.BufferUtils.toWordArray(e);
                                    var t = this.blockLengthWords,
                                        n = e.words,
                                        r = i.a.create(n.slice(0, t)),
                                        s = i.a.create(n.slice(t)),
                                        o = a.a.algo[this.cjsAlgorithm].createDecryptor(this.key, {
                                            iv: r
                                        }),
                                        u = o.process(s),
                                        c = o.finalize();
                                    return o.reset(), c && c.sigBytes && u.concat(c), u
                                }, d.prototype.getIv = function(t) {
                                    if (this.iv) {
                                        var n = this.iv;
                                        return this.iv = null, void t(null, n)
                                    }
                                    var r = this;
                                    e(16, (function(e, n) {
                                        e ? t(e) : t(null, r.encryptCipher.process(n))
                                    }))
                                }, u
                            }();
                        t.default = d
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function() {
                            var e = r,
                                t = e.lib.WordArray,
                                n = e.enc;

                            function i(e) {
                                return e << 8 & 4278255360 | e >>> 8 & 16711935
                            }
                            n.Utf16 = n.Utf16BE = {
                                stringify: function(e) {
                                    for (var t = e.words, n = e.sigBytes, r = [], i = 0; i < n; i += 2) {
                                        var s = t[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
                                        r.push(String.fromCharCode(s))
                                    }
                                    return r.join("")
                                },
                                parse: function(e) {
                                    for (var n = e.length, r = [], i = 0; i < n; i++) r[i >>> 1] |= e.charCodeAt(i) << 16 - i % 2 * 16;
                                    return t.create(r, 2 * n)
                                }
                            }, n.Utf16LE = {
                                stringify: function(e) {
                                    for (var t = e.words, n = e.sigBytes, r = [], s = 0; s < n; s += 2) {
                                        var o = i(t[s >>> 2] >>> 16 - s % 4 * 8 & 65535);
                                        r.push(String.fromCharCode(o))
                                    }
                                    return r.join("")
                                },
                                parse: function(e) {
                                    for (var n = e.length, r = [], s = 0; s < n; s++) r[s >>> 1] |= i(e.charCodeAt(s) << 16 - s % 2 * 16);
                                    return t.create(r, 2 * n)
                                }
                            }
                        }(), r.enc.Utf16)
                    }, function(e, t, n) {
                        var r, i, s, o;
                        e.exports = (o = n(6), n(28), i = (r = o).lib.CipherParams, s = r.enc.Hex, r.format.Hex = {
                            stringify: function(e) {
                                return e.ciphertext.toString(s)
                            },
                            parse: function(e) {
                                var t = s.parse(e);
                                return i.create({
                                    ciphertext: t
                                })
                            }
                        }, o.format.Hex)
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), n(13), n(61), n(27), n(28), function() {
                            var e = r,
                                t = e.lib.BlockCipher,
                                n = e.algo,
                                i = [],
                                s = [],
                                o = [],
                                a = [],
                                u = [],
                                l = [],
                                c = [],
                                f = [],
                                d = [],
                                h = [];
                            ! function() {
                                for (var e = [], t = 0; t < 256; t++) e[t] = t < 128 ? t << 1 : t << 1 ^ 283;
                                var n = 0,
                                    r = 0;
                                for (t = 0; t < 256; t++) {
                                    var p = r ^ r << 1 ^ r << 2 ^ r << 3 ^ r << 4;
                                    p = p >>> 8 ^ 255 & p ^ 99, i[n] = p, s[p] = n;
                                    var g = e[n],
                                        m = e[g],
                                        y = e[m],
                                        v = 257 * e[p] ^ 16843008 * p;
                                    o[n] = v << 24 | v >>> 8, a[n] = v << 16 | v >>> 16, u[n] = v << 8 | v >>> 24, l[n] = v, v = 16843009 * y ^ 65537 * m ^ 257 * g ^ 16843008 * n, c[p] = v << 24 | v >>> 8, f[p] = v << 16 | v >>> 16, d[p] = v << 8 | v >>> 24, h[p] = v, n ? (n = g ^ e[e[e[y ^ g]]], r ^= e[e[r]]) : n = r = 1
                                }
                            }();
                            var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                                g = n.AES = t.extend({
                                    _doReset: function() {
                                        if (!this._nRounds || this._keyPriorReset !== this._key) {
                                            for (var e = this._keyPriorReset = this._key, t = e.words, n = e.sigBytes / 4, r = 4 * ((this._nRounds = n + 6) + 1), s = this._keySchedule = [], o = 0; o < r; o++) o < n ? s[o] = t[o] : (l = s[o - 1], o % n ? n > 6 && o % n == 4 && (l = i[l >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l]) : (l = i[(l = l << 8 | l >>> 24) >>> 24] << 24 | i[l >>> 16 & 255] << 16 | i[l >>> 8 & 255] << 8 | i[255 & l], l ^= p[o / n | 0] << 24), s[o] = s[o - n] ^ l);
                                            for (var a = this._invKeySchedule = [], u = 0; u < r; u++) {
                                                if (o = r - u, u % 4) var l = s[o];
                                                else l = s[o - 4];
                                                a[u] = u < 4 || o <= 4 ? l : c[i[l >>> 24]] ^ f[i[l >>> 16 & 255]] ^ d[i[l >>> 8 & 255]] ^ h[i[255 & l]]
                                            }
                                        }
                                    },
                                    encryptBlock: function(e, t) {
                                        this._doCryptBlock(e, t, this._keySchedule, o, a, u, l, i)
                                    },
                                    decryptBlock: function(e, t) {
                                        var n = e[t + 1];
                                        e[t + 1] = e[t + 3], e[t + 3] = n, this._doCryptBlock(e, t, this._invKeySchedule, c, f, d, h, s), n = e[t + 1], e[t + 1] = e[t + 3], e[t + 3] = n
                                    },
                                    _doCryptBlock: function(e, t, n, r, i, s, o, a) {
                                        for (var u = this._nRounds, l = e[t] ^ n[0], c = e[t + 1] ^ n[1], f = e[t + 2] ^ n[2], d = e[t + 3] ^ n[3], h = 4, p = 1; p < u; p++) {
                                            var g = r[l >>> 24] ^ i[c >>> 16 & 255] ^ s[f >>> 8 & 255] ^ o[255 & d] ^ n[h++],
                                                m = r[c >>> 24] ^ i[f >>> 16 & 255] ^ s[d >>> 8 & 255] ^ o[255 & l] ^ n[h++],
                                                y = r[f >>> 24] ^ i[d >>> 16 & 255] ^ s[l >>> 8 & 255] ^ o[255 & c] ^ n[h++],
                                                v = r[d >>> 24] ^ i[l >>> 16 & 255] ^ s[c >>> 8 & 255] ^ o[255 & f] ^ n[h++];
                                            l = g, c = m, f = y, d = v
                                        }
                                        g = (a[l >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[f >>> 8 & 255] << 8 | a[255 & d]) ^ n[h++], m = (a[c >>> 24] << 24 | a[f >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & l]) ^ n[h++], y = (a[f >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[255 & c]) ^ n[h++], v = (a[d >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[255 & f]) ^ n[h++], e[t] = g, e[t + 1] = m, e[t + 2] = y, e[t + 3] = v
                                    },
                                    keySize: 8
                                });
                            e.AES = t._createHelper(g)
                        }(), r.AES)
                    }, function(e, t, n) {
                        var r;
                        e.exports = (r = n(6), function(e) {
                            var t = r,
                                n = t.lib,
                                i = n.WordArray,
                                s = n.Hasher,
                                o = t.algo,
                                a = [];
                            ! function() {
                                for (var t = 0; t < 64; t++) a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0
                            }();
                            var u = o.MD5 = s.extend({
                                _doReset: function() {
                                    this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878])
                                },
                                _doProcessBlock: function(e, t) {
                                    for (var n = 0; n < 16; n++) {
                                        var r = t + n,
                                            i = e[r];
                                        e[r] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8)
                                    }
                                    var s = this._hash.words,
                                        o = e[t + 0],
                                        u = e[t + 1],
                                        h = e[t + 2],
                                        p = e[t + 3],
                                        g = e[t + 4],
                                        m = e[t + 5],
                                        y = e[t + 6],
                                        v = e[t + 7],
                                        _ = e[t + 8],
                                        b = e[t + 9],
                                        w = e[t + 10],
                                        C = e[t + 11],
                                        R = e[t + 12],
                                        T = e[t + 13],
                                        O = e[t + 14],
                                        S = e[t + 15],
                                        A = s[0],
                                        L = s[1],
                                        I = s[2],
                                        E = s[3];
                                    A = l(A, L, I, E, o, 7, a[0]), E = l(E, A, L, I, u, 12, a[1]), I = l(I, E, A, L, h, 17, a[2]), L = l(L, I, E, A, p, 22, a[3]), A = l(A, L, I, E, g, 7, a[4]), E = l(E, A, L, I, m, 12, a[5]), I = l(I, E, A, L, y, 17, a[6]), L = l(L, I, E, A, v, 22, a[7]), A = l(A, L, I, E, _, 7, a[8]), E = l(E, A, L, I, b, 12, a[9]), I = l(I, E, A, L, w, 17, a[10]), L = l(L, I, E, A, C, 22, a[11]), A = l(A, L, I, E, R, 7, a[12]), E = l(E, A, L, I, T, 12, a[13]), I = l(I, E, A, L, O, 17, a[14]), A = c(A, L = l(L, I, E, A, S, 22, a[15]), I, E, u, 5, a[16]), E = c(E, A, L, I, y, 9, a[17]), I = c(I, E, A, L, C, 14, a[18]), L = c(L, I, E, A, o, 20, a[19]), A = c(A, L, I, E, m, 5, a[20]), E = c(E, A, L, I, w, 9, a[21]), I = c(I, E, A, L, S, 14, a[22]), L = c(L, I, E, A, g, 20, a[23]), A = c(A, L, I, E, b, 5, a[24]), E = c(E, A, L, I, O, 9, a[25]), I = c(I, E, A, L, p, 14, a[26]), L = c(L, I, E, A, _, 20, a[27]), A = c(A, L, I, E, T, 5, a[28]), E = c(E, A, L, I, h, 9, a[29]), I = c(I, E, A, L, v, 14, a[30]), A = f(A, L = c(L, I, E, A, R, 20, a[31]), I, E, m, 4, a[32]), E = f(E, A, L, I, _, 11, a[33]), I = f(I, E, A, L, C, 16, a[34]), L = f(L, I, E, A, O, 23, a[35]), A = f(A, L, I, E, u, 4, a[36]), E = f(E, A, L, I, g, 11, a[37]), I = f(I, E, A, L, v, 16, a[38]), L = f(L, I, E, A, w, 23, a[39]), A = f(A, L, I, E, T, 4, a[40]), E = f(E, A, L, I, o, 11, a[41]), I = f(I, E, A, L, p, 16, a[42]), L = f(L, I, E, A, y, 23, a[43]), A = f(A, L, I, E, b, 4, a[44]), E = f(E, A, L, I, R, 11, a[45]), I = f(I, E, A, L, S, 16, a[46]), A = d(A, L = f(L, I, E, A, h, 23, a[47]), I, E, o, 6, a[48]), E = d(E, A, L, I, v, 10, a[49]), I = d(I, E, A, L, O, 15, a[50]), L = d(L, I, E, A, m, 21, a[51]), A = d(A, L, I, E, R, 6, a[52]), E = d(E, A, L, I, p, 10, a[53]), I = d(I, E, A, L, w, 15, a[54]), L = d(L, I, E, A, u, 21, a[55]), A = d(A, L, I, E, _, 6, a[56]), E = d(E, A, L, I, S, 10, a[57]), I = d(I, E, A, L, y, 15, a[58]), L = d(L, I, E, A, T, 21, a[59]), A = d(A, L, I, E, g, 6, a[60]), E = d(E, A, L, I, C, 10, a[61]), I = d(I, E, A, L, h, 15, a[62]), L = d(L, I, E, A, b, 21, a[63]), s[0] = s[0] + A | 0, s[1] = s[1] + L | 0, s[2] = s[2] + I | 0, s[3] = s[3] + E | 0
                                },
                                _doFinalize: function() {
                                    var t = this._data,
                                        n = t.words,
                                        r = 8 * this._nDataBytes,
                                        i = 8 * t.sigBytes;
                                    n[i >>> 5] |= 128 << 24 - i % 32;
                                    var s = e.floor(r / 4294967296),
                                        o = r;
                                    n[15 + (i + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (i + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
                                    for (var a = this._hash, u = a.words, l = 0; l < 4; l++) {
                                        var c = u[l];
                                        u[l] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                                    }
                                    return a
                                },
                                clone: function() {
                                    var e = s.clone.call(this);
                                    return e._hash = this._hash.clone(), e
                                }
                            });

                            function l(e, t, n, r, i, s, o) {
                                var a = e + (t & n | ~t & r) + i + o;
                                return (a << s | a >>> 32 - s) + t
                            }

                            function c(e, t, n, r, i, s, o) {
                                var a = e + (t & r | n & ~r) + i + o;
                                return (a << s | a >>> 32 - s) + t
                            }

                            function f(e, t, n, r, i, s, o) {
                                var a = e + (t ^ n ^ r) + i + o;
                                return (a << s | a >>> 32 - s) + t
                            }

                            function d(e, t, n, r, i, s, o) {
                                var a = e + (n ^ (t | ~r)) + i + o;
                                return (a << s | a >>> 32 - s) + t
                            }
                            t.MD5 = s._createHelper(u), t.HmacMD5 = s._createHmacHelper(u)
                        }(Math), r.MD5)
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        t.__esModule = !0;
                        var i = n(1),
                            s = i.__importDefault(n(0)),
                            o = i.__importStar(n(2)),
                            a = i.__importDefault(n(8)),
                            u = i.__importDefault(n(5)),
                            l = i.__importDefault(n(17)),
                            c = i.__importDefault(n(15)),
                            f = i.__importDefault(n(20)),
                            d = i.__importDefault(n(3)),
                            h = n(29),
                            p = i.__importDefault(n(63)),
                            g = n(37);

                        function m(e) {
                            var t = e.statusCode;
                            return 408 === t && !e.code || 400 === t && !e.code || t >= 500 && t <= 504
                        }

                        function y(e) {
                            var t = e.connection,
                                n = t && t.connectionManager.host;
                            return n ? [n].concat(a.default.getFallbackHosts(e.options)) : a.default.getHosts(e.options)
                        }
                        var v = (r = function() {
                            function e(e) {
                                this.checksInProgress = null, this.checkConnectivity = void 0, this.supportsAuthHeaders = !1, this.supportsLinkHeaders = !1, this._getHosts = y, this.options = e || {};
                                var t = this.options.connectivityCheckUrl || a.default.connectivityCheckUrl,
                                    n = this.options.connectivityCheckParams,
                                    r = !this.options.connectivityCheckUrl;
                                s.default.Config.xhrSupported ? (this.supportsAuthHeaders = !0, this.Request = function(e, t, n, r, i, s, o) {
                                    var a = c.default.createRequest(n, r, i, s, f.default.REQ_SEND, t && t.options.timeouts, e);
                                    return a.once("complete", o), a.exec(), a
                                }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(e) {
                                    e(null, !0)
                                } : this.checkConnectivity = function(e) {
                                    d.default.logAction(d.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Sending; " + t), this.doUri(l.default.Get, null, t, null, null, n, (function(t, n, i, s, o) {
                                        var a = !1;
                                        a = r ? !t && "yes" == (null == n ? void 0 : n.replace(/\n/, "")) : !t && (0, g.isSuccessCode)(o), d.default.logAction(d.default.LOG_MICRO, "(XHRRequest)Http.checkConnectivity()", "Result: " + a), e(null, a)
                                    }))
                                }) : s.default.Config.jsonpSupported ? (this.Request = function(e, t, n, r, i, o, a) {
                                    var u = (0, h.createRequest)(n, r, i, o, f.default.REQ_SEND, t && t.options.timeouts, e);
                                    return u.once("complete", a), s.default.Config.nextTick((function() {
                                        u.exec()
                                    })), u
                                }, this.options.disableConnectivityCheck ? this.checkConnectivity = function(e) {
                                    e(null, !0)
                                } : this.checkConnectivity = function(e) {
                                    var t = this,
                                        n = a.default.jsonpInternetUpUrl;
                                    if (this.checksInProgress) this.checksInProgress.push(e);
                                    else {
                                        this.checksInProgress = [e], d.default.logAction(d.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Sending; " + n);
                                        var r = new h.Request("isTheInternetUp", n, null, null, null, f.default.REQ_SEND, a.default.TIMEOUTS);
                                        r.once("complete", (function(e, n) {
                                            var r = !e && n;
                                            d.default.logAction(d.default.LOG_MICRO, "(JSONP)Http.checkConnectivity()", "Result: " + r);
                                            for (var i = 0; i < t.checksInProgress.length; i++) t.checksInProgress[i](null, r);
                                            t.checksInProgress = null
                                        })), s.default.Config.nextTick((function() {
                                            r.exec()
                                        }))
                                    }
                                }) : s.default.Config.fetchSupported ? (this.supportsAuthHeaders = !0, this.Request = p.default, this.checkConnectivity = function(e) {
                                    d.default.logAction(d.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Sending; " + t), this.doUri(l.default.Get, null, t, null, null, null, (function(t, n) {
                                        var r = !t && "yes" == (null == n ? void 0 : n.replace(/\n/, ""));
                                        d.default.logAction(d.default.LOG_MICRO, "(Fetch)Http.checkConnectivity()", "Result: " + r), e(null, r)
                                    }))
                                }) : this.Request = function(e, t, n, r, i, s, o) {
                                    o(new u.default("no supported HTTP transports available", null, 400), null)
                                }
                            }
                            return e.prototype.do = function(e, t, n, r, s, a, l) {
                                var c = this,
                                    f = "function" == typeof n ? n : function(e) {
                                        return t.baseUri(e) + n
                                    },
                                    d = t._currentFallback;
                                if (d) {
                                    if (d.validUntil > o.now()) return this.Request ? void this.Request(e, t, f(d.host), r, a, s, (function(o) {
                                        for (var u = [], f = 1; f < arguments.length; f++) u[f - 1] = arguments[f];
                                        if (o && m(o)) return t._currentFallback = null, void c.do(e, t, n, r, s, a, l);
                                        null == l || l.apply(void 0, i.__spreadArray([o], u, !1))
                                    })) : void(null == l || l(new u.default("Request invoked before assigned to", null, 500)));
                                    t._currentFallback = null
                                }
                                var h = y(t);
                                if (1 !== h.length) {
                                    var p = function(n, u) {
                                        var d = n.shift();
                                        c.doUri(e, t, f(d), r, s, a, (function(e) {
                                            for (var r = [], s = 1; s < arguments.length; s++) r[s - 1] = arguments[s];
                                            e && m(e) && n.length ? p(n, !0) : (u && (t._currentFallback = {
                                                host: d,
                                                validUntil: o.now() + t.options.timeouts.fallbackRetryTimeout
                                            }), null == l || l.apply(void 0, i.__spreadArray([e], r, !1)))
                                        }))
                                    };
                                    p(h)
                                } else this.doUri(e, t, f(h[0]), r, s, a, l)
                            }, e.prototype.doUri = function(e, t, n, r, i, s, o) {
                                this.Request ? this.Request(e, t, n, r, s, i, o) : o(new u.default("Request invoked before assigned to", null, 500))
                            }, e
                        }(), r.methods = [l.default.Get, l.default.Delete, l.default.Post, l.default.Put, l.default.Patch], r.methodsWithoutBody = [l.default.Get, l.default.Delete], r.methodsWithBody = [l.default.Post, l.default.Put, l.default.Patch], r);
                        t.default = v
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(5)),
                            s = r.__importDefault(n(0)),
                            o = r.__importDefault(n(8)),
                            a = r.__importStar(n(2)),
                            u = n(2);
                        t.default = function(e, t, n, r, l, c, f) {
                            var d = new Headers(r || {}),
                                h = e ? e.toUpperCase() : a.isEmptyArg(c) ? "GET" : "POST",
                                p = new AbortController,
                                g = setTimeout((function() {
                                    p.abort(), f(new i.default("Request timed out", null, 408))
                                }), t ? t.options.timeouts.httpRequestTimeout : o.default.TIMEOUTS.httpRequestTimeout);
                            (0, u.getGlobalObject)().fetch(n + "?" + new URLSearchParams(l || {}), {
                                method: h,
                                headers: d,
                                body: c,
                                credentials: d.has("authorization") ? "include" : "same-origin"
                            }).then((function(e) {
                                clearTimeout(g);
                                var t = e.headers.get("Content-Type");
                                (t && t.indexOf("application/x-msgpack") > -1 ? e.arrayBuffer() : t && t.indexOf("application/json") > -1 ? e.json() : e.text()).then((function(n) {
                                    var r = !!t && -1 === t.indexOf("application/x-msgpack");
                                    if (e.ok) f(null, n, e.headers, r, e.status);
                                    else {
                                        var o = function(e, t) {
                                            if (function(e, t) {
                                                    return !!t.get("x-ably-errorcode")
                                                }(0, t)) return e.error && i.default.fromValues(e.error)
                                        }(n, e.headers) || new i.default("Error response received from server: " + e.status + " body was: " + s.default.Config.inspect(n), null, e.status);
                                        f(o, n, e.headers, r, e.status)
                                    }
                                }))
                            })).catch((function(e) {
                                clearTimeout(g), f(e)
                            }))
                        }
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1),
                            i = r.__importDefault(n(41)),
                            s = r.__importStar(n(2)).getGlobalObject();
                        "undefined" == typeof Window && "undefined" == typeof WorkerGlobalScope && console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
                        var o, a = s.navigator && s.navigator.userAgent.toString(),
                            u = {
                                agent: "browser",
                                logTimestamps: !0,
                                userAgent: a,
                                currentUrl: s.location && s.location.href,
                                noUpgrade: a && !!a.match(/MSIE\s8\.0/),
                                binaryType: "arraybuffer",
                                WebSocket: s.WebSocket,
                                fetchSupported: !!s.fetch,
                                xhrSupported: s.XMLHttpRequest && "withCredentials" in new XMLHttpRequest,
                                jsonpSupported: "undefined" != typeof document,
                                allowComet: (o = s.location, !s.WebSocket || !o || !o.origin || o.origin.indexOf("http") > -1),
                                streamingSupported: !0,
                                useProtocolHeartbeats: !0,
                                createHmac: null,
                                msgpack: i.default,
                                supportsBinary: !!s.TextDecoder,
                                preferBinary: !1,
                                ArrayBuffer: s.ArrayBuffer,
                                atob: s.atob,
                                nextTick: void 0 !== s.setImmediate ? s.setImmediate.bind(s) : function(e) {
                                    setTimeout(e, 0)
                                },
                                addEventListener: s.addEventListener,
                                inspect: JSON.stringify,
                                stringByteSize: function(e) {
                                    return s.TextDecoder && (new s.TextEncoder).encode(e).length || e.length
                                },
                                TextEncoder: s.TextEncoder,
                                TextDecoder: s.TextDecoder,
                                Promise: s.Promise,
                                getRandomValues: function(e) {
                                    if (void 0 !== e) return function(t, n) {
                                        e.getRandomValues(t), n && n(null)
                                    }
                                }(s.crypto || msCrypto)
                            };
                        t.default = u
                    }, function(e, t, n) {
                        "use strict";
                        (function(e) {
                            t.__esModule = !0;
                            var r = n(1).__importStar(n(2)),
                                i = "ablyjs-storage-test",
                                s = function() {
                                    function t() {
                                        try {
                                            e.sessionStorage.setItem(i, i), e.sessionStorage.removeItem(i), this.sessionSupported = !0
                                        } catch (e) {
                                            this.sessionSupported = !1
                                        }
                                        try {
                                            e.localStorage.setItem(i, i), e.localStorage.removeItem(i), this.localSupported = !0
                                        } catch (e) {
                                            this.localSupported = !1
                                        }
                                    }
                                    return t.prototype.get = function(e) {
                                        return this._get(e, !1)
                                    }, t.prototype.getSession = function(e) {
                                        return this._get(e, !0)
                                    }, t.prototype.remove = function(e) {
                                        return this._remove(e, !1)
                                    }, t.prototype.removeSession = function(e) {
                                        return this._remove(e, !0)
                                    }, t.prototype.set = function(e, t, n) {
                                        return this._set(e, t, n, !1)
                                    }, t.prototype.setSession = function(e, t, n) {
                                        return this._set(e, t, n, !0)
                                    }, t.prototype._set = function(e, t, n, i) {
                                        var s = {
                                            value: t
                                        };
                                        return n && (s.expires = r.now() + n), this.storageInterface(i).setItem(e, JSON.stringify(s))
                                    }, t.prototype._get = function(e, t) {
                                        if (t && !this.sessionSupported) throw new Error("Session Storage not supported");
                                        if (!t && !this.localSupported) throw new Error("Local Storage not supported");
                                        var n = this.storageInterface(t).getItem(e);
                                        if (!n) return null;
                                        var i = JSON.parse(n);
                                        return i.expires && i.expires < r.now() ? (this.storageInterface(t).removeItem(e), null) : i.value
                                    }, t.prototype._remove = function(e, t) {
                                        return this.storageInterface(t).removeItem(e)
                                    }, t.prototype.storageInterface = function(t) {
                                        return t ? e.sessionStorage : e.localStorage
                                    }, t
                                }();
                            t.default = new s
                        }).call(this, n(12))
                    }, function(e, t, n) {
                        "use strict";
                        t.__esModule = !0;
                        var r = n(1).__importDefault(n(67)),
                            i = {
                                connectivityCheckUrl: "https://internet-up.ably-realtime.com/is-the-internet-up.txt",
                                jsonpInternetUpUrl: "https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js",
                                defaultTransports: [r.default.XhrPolling, r.default.XhrStreaming, r.default.JsonP, r.default.WebSocket],
                                baseTransportOrder: [r.default.XhrPolling, r.default.XhrStreaming, r.default.JsonP, r.default.WebSocket],
                                transportPreferenceOrder: [r.default.JsonP, r.default.XhrPolling, r.default.XhrStreaming, r.default.WebSocket],
                                upgradeTransports: [r.default.XhrStreaming, r.default.WebSocket]
                            };
                        t.default = i
                    }, function(e, t, n) {
                        "use strict";
                        var r;
                        t.__esModule = !0,
                            function(e) {
                                e.WebSocket = "web_socket", e.Comet = "comet", e.XhrStreaming = "xhr_streaming", e.XhrPolling = "xhr_polling", e.JsonP = "jsonp"
                            }(r || (r = {})), t.default = r
                    }, function(e, t, n) {
                        "use strict";
                        n.r(t);
                        var r = n(29),
                            i = n.n(r),
                            s = n(2),
                            o = n(0),
                            a = n.n(o),
                            u = n(11),
                            l = n.n(u),
                            c = n(15),
                            f = n.n(c),
                            d = function(e) {
                                var t = "xhr_polling";

                                function n(e, n, r) {
                                    r.stream = !1, l.a.call(this, e, n, r), this.shortName = t
                                }
                                return s.inherits(n, l.a), n.isAvailable = function() {
                                    return a.a.Config.xhrSupported && a.a.Config.allowComet
                                }, n.prototype.toString = function() {
                                    return "XHRPollingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
                                }, n.prototype.createRequest = function(e, t, n, r, i) {
                                    return f.a.createRequest(e, t, n, r, i, this.timeouts)
                                }, void 0 !== e && n.isAvailable() && (e.supportedTransports[t] = n), n
                            },
                            h = function(e) {
                                var t = "xhr_streaming";

                                function n(e, n, r) {
                                    l.a.call(this, e, n, r), this.shortName = t
                                }
                                return s.inherits(n, l.a), n.isAvailable = function() {
                                    return a.a.Config.xhrSupported && a.a.Config.streamingSupported && a.a.Config.allowComet
                                }, n.prototype.toString = function() {
                                    return "XHRStreamingTransport; uri=" + this.baseUri + "; isConnected=" + this.isConnected
                                }, n.prototype.createRequest = function(e, t, n, r, i) {
                                    return f.a.createRequest(e, t, n, r, i, this.timeouts)
                                }, void 0 !== e && n.isAvailable() && (e.supportedTransports[t] = n), n
                            };
                        t.default = [i.a, d, h]
                    }]).default
                }, e.exports = t()
            },
            9742: (e, t) => {
                "use strict";
                t.byteLength = function(e) {
                    var t = u(e),
                        n = t[0],
                        r = t[1];
                    return 3 * (n + r) / 4 - r
                }, t.toByteArray = function(e) {
                    var t, n, s = u(e),
                        o = s[0],
                        a = s[1],
                        l = new i(function(e, t, n) {
                            return 3 * (t + n) / 4 - n
                        }(0, o, a)),
                        c = 0,
                        f = a > 0 ? o - 4 : o;
                    for (n = 0; n < f; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], l[c++] = t >> 16 & 255, l[c++] = t >> 8 & 255, l[c++] = 255 & t;
                    2 === a && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, l[c++] = 255 & t);
                    1 === a && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, l[c++] = t >> 8 & 255, l[c++] = 255 & t);
                    return l
                }, t.fromByteArray = function(e) {
                    for (var t, r = e.length, i = r % 3, s = [], o = 16383, a = 0, u = r - i; a < u; a += o) s.push(l(e, a, a + o > u ? u : a + o));
                    1 === i ? (t = e[r - 1], s.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], s.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                    return s.join("")
                };
                for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, a = s.length; o < a; ++o) n[o] = s[o], r[s.charCodeAt(o)] = o;

                function u(e) {
                    var t = e.length;
                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var n = e.indexOf("=");
                    return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
                }

                function l(e, t, r) {
                    for (var i, s, o = [], a = t; a < r; a += 3) i = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), o.push(n[(s = i) >> 18 & 63] + n[s >> 12 & 63] + n[s >> 6 & 63] + n[63 & s]);
                    return o.join("")
                }
                r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
            },
            8764: (e, t, n) => {
                "use strict";
                const r = n(9742),
                    i = n(645),
                    s = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                t.Buffer = u, t.SlowBuffer = function(e) {
                    +e != e && (e = 0);
                    return u.alloc(+e)
                }, t.INSPECT_MAX_BYTES = 50;
                const o = 2147483647;

                function a(e) {
                    if (e > o) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                    const t = new Uint8Array(e);
                    return Object.setPrototypeOf(t, u.prototype), t
                }

                function u(e, t, n) {
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                        return f(e)
                    }
                    return l(e, t, n)
                }

                function l(e, t, n) {
                    if ("string" == typeof e) return function(e, t) {
                        "string" == typeof t && "" !== t || (t = "utf8");
                        if (!u.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                        const n = 0 | g(e, t);
                        let r = a(n);
                        const i = r.write(e, t);
                        i !== n && (r = r.slice(0, i));
                        return r
                    }(e, t);
                    if (ArrayBuffer.isView(e)) return function(e) {
                        if (K(e, Uint8Array)) {
                            const t = new Uint8Array(e);
                            return h(t.buffer, t.byteOffset, t.byteLength)
                        }
                        return d(e)
                    }(e);
                    if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                    if (K(e, ArrayBuffer) || e && K(e.buffer, ArrayBuffer)) return h(e, t, n);
                    if ("undefined" != typeof SharedArrayBuffer && (K(e, SharedArrayBuffer) || e && K(e.buffer, SharedArrayBuffer))) return h(e, t, n);
                    if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                    const r = e.valueOf && e.valueOf();
                    if (null != r && r !== e) return u.from(r, t, n);
                    const i = function(e) {
                        if (u.isBuffer(e)) {
                            const t = 0 | p(e.length),
                                n = a(t);
                            return 0 === n.length || e.copy(n, 0, 0, t), n
                        }
                        if (void 0 !== e.length) return "number" != typeof e.length || X(e.length) ? a(0) : d(e);
                        if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
                    }(e);
                    if (i) return i;
                    if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return u.from(e[Symbol.toPrimitive]("string"), t, n);
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                }

                function c(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                    if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                }

                function f(e) {
                    return c(e), a(e < 0 ? 0 : 0 | p(e))
                }

                function d(e) {
                    const t = e.length < 0 ? 0 : 0 | p(e.length),
                        n = a(t);
                    for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                    return n
                }

                function h(e, t, n) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    let r;
                    return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, u.prototype), r
                }

                function p(e) {
                    if (e >= o) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + o.toString(16) + " bytes");
                    return 0 | e
                }

                function g(e, t) {
                    if (u.isBuffer(e)) return e.length;
                    if (ArrayBuffer.isView(e) || K(e, ArrayBuffer)) return e.byteLength;
                    if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                    const n = e.length,
                        r = arguments.length > 2 && !0 === arguments[2];
                    if (!r && 0 === n) return 0;
                    let i = !1;
                    for (;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                            return z(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return W(e).length;
                        default:
                            if (i) return r ? -1 : z(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function m(e, t, n) {
                    let r = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                    if ((n >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8");;) switch (e) {
                        case "hex":
                            return E(this, t, n);
                        case "utf8":
                        case "utf-8":
                            return S(this, t, n);
                        case "ascii":
                            return L(this, t, n);
                        case "latin1":
                        case "binary":
                            return I(this, t, n);
                        case "base64":
                            return O(this, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return k(this, t, n);
                        default:
                            if (r) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), r = !0
                    }
                }

                function y(e, t, n) {
                    const r = e[t];
                    e[t] = e[n], e[n] = r
                }

                function v(e, t, n, r, i) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), X(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (i) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!i) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = u.from(t, r)), u.isBuffer(t)) return 0 === t.length ? -1 : _(e, t, n, r, i);
                    if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : _(e, [t], n, r, i);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function _(e, t, n, r, i) {
                    let s, o = 1,
                        a = e.length,
                        u = t.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        o = 2, a /= 2, u /= 2, n /= 2
                    }

                    function l(e, t) {
                        return 1 === o ? e[t] : e.readUInt16BE(t * o)
                    }
                    if (i) {
                        let r = -1;
                        for (s = n; s < a; s++)
                            if (l(e, s) === l(t, -1 === r ? 0 : s - r)) {
                                if (-1 === r && (r = s), s - r + 1 === u) return r * o
                            } else - 1 !== r && (s -= s - r), r = -1
                    } else
                        for (n + u > a && (n = a - u), s = n; s >= 0; s--) {
                            let n = !0;
                            for (let r = 0; r < u; r++)
                                if (l(e, s + r) !== l(t, r)) {
                                    n = !1;
                                    break
                                } if (n) return s
                        }
                    return -1
                }

                function b(e, t, n, r) {
                    n = Number(n) || 0;
                    const i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : r = i;
                    const s = t.length;
                    let o;
                    for (r > s / 2 && (r = s / 2), o = 0; o < r; ++o) {
                        const r = parseInt(t.substr(2 * o, 2), 16);
                        if (X(r)) return o;
                        e[n + o] = r
                    }
                    return o
                }

                function w(e, t, n, r) {
                    return J(z(t, e.length - n), e, n, r)
                }

                function C(e, t, n, r) {
                    return J(function(e) {
                        const t = [];
                        for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, r)
                }

                function R(e, t, n, r) {
                    return J(W(t), e, n, r)
                }

                function T(e, t, n, r) {
                    return J(function(e, t) {
                        let n, r, i;
                        const s = [];
                        for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, s.push(i), s.push(r);
                        return s
                    }(t, e.length - n), e, n, r)
                }

                function O(e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
                }

                function S(e, t, n) {
                    n = Math.min(e.length, n);
                    const r = [];
                    let i = t;
                    for (; i < n;) {
                        const t = e[i];
                        let s = null,
                            o = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                        if (i + o <= n) {
                            let n, r, a, u;
                            switch (o) {
                                case 1:
                                    t < 128 && (s = t);
                                    break;
                                case 2:
                                    n = e[i + 1], 128 == (192 & n) && (u = (31 & t) << 6 | 63 & n, u > 127 && (s = u));
                                    break;
                                case 3:
                                    n = e[i + 1], r = e[i + 2], 128 == (192 & n) && 128 == (192 & r) && (u = (15 & t) << 12 | (63 & n) << 6 | 63 & r, u > 2047 && (u < 55296 || u > 57343) && (s = u));
                                    break;
                                case 4:
                                    n = e[i + 1], r = e[i + 2], a = e[i + 3], 128 == (192 & n) && 128 == (192 & r) && 128 == (192 & a) && (u = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & a, u > 65535 && u < 1114112 && (s = u))
                            }
                        }
                        null === s ? (s = 65533, o = 1) : s > 65535 && (s -= 65536, r.push(s >>> 10 & 1023 | 55296), s = 56320 | 1023 & s), r.push(s), i += o
                    }
                    return function(e) {
                        const t = e.length;
                        if (t <= A) return String.fromCharCode.apply(String, e);
                        let n = "",
                            r = 0;
                        for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += A));
                        return n
                    }(r)
                }
                t.kMaxLength = o, u.TYPED_ARRAY_SUPPORT = function() {
                    try {
                        const e = new Uint8Array(1),
                            t = {
                                foo: function() {
                                    return 42
                                }
                            };
                        return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                    } catch (e) {
                        return !1
                    }
                }(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                    enumerable: !0,
                    get: function() {
                        if (u.isBuffer(this)) return this.buffer
                    }
                }), Object.defineProperty(u.prototype, "offset", {
                    enumerable: !0,
                    get: function() {
                        if (u.isBuffer(this)) return this.byteOffset
                    }
                }), u.poolSize = 8192, u.from = function(e, t, n) {
                    return l(e, t, n)
                }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(e, t, n) {
                    return function(e, t, n) {
                        return c(e), e <= 0 ? a(e) : void 0 !== t ? "string" == typeof n ? a(e).fill(t, n) : a(e).fill(t) : a(e)
                    }(e, t, n)
                }, u.allocUnsafe = function(e) {
                    return f(e)
                }, u.allocUnsafeSlow = function(e) {
                    return f(e)
                }, u.isBuffer = function(e) {
                    return null != e && !0 === e._isBuffer && e !== u.prototype
                }, u.compare = function(e, t) {
                    if (K(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), K(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(e) || !u.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                    if (e === t) return 0;
                    let n = e.length,
                        r = t.length;
                    for (let i = 0, s = Math.min(n, r); i < s; ++i)
                        if (e[i] !== t[i]) {
                            n = e[i], r = t[i];
                            break
                        } return n < r ? -1 : r < n ? 1 : 0
                }, u.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
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
                            return !0;
                        default:
                            return !1
                    }
                }, u.concat = function(e, t) {
                    if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return u.alloc(0);
                    let n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    const r = u.allocUnsafe(t);
                    let i = 0;
                    for (n = 0; n < e.length; ++n) {
                        let t = e[n];
                        if (K(t, Uint8Array)) i + t.length > r.length ? (u.isBuffer(t) || (t = u.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
                        else {
                            if (!u.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                            t.copy(r, i)
                        }
                        i += t.length
                    }
                    return r
                }, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                    const e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (let t = 0; t < e; t += 2) y(this, t, t + 1);
                    return this
                }, u.prototype.swap32 = function() {
                    const e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (let t = 0; t < e; t += 4) y(this, t, t + 3), y(this, t + 1, t + 2);
                    return this
                }, u.prototype.swap64 = function() {
                    const e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (let t = 0; t < e; t += 8) y(this, t, t + 7), y(this, t + 1, t + 6), y(this, t + 2, t + 5), y(this, t + 3, t + 4);
                    return this
                }, u.prototype.toString = function() {
                    const e = this.length;
                    return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : m.apply(this, arguments)
                }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(e) {
                    if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === u.compare(this, e)
                }, u.prototype.inspect = function() {
                    let e = "";
                    const n = t.INSPECT_MAX_BYTES;
                    return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                }, s && (u.prototype[s] = u.prototype.inspect), u.prototype.compare = function(e, t, n, r, i) {
                    if (K(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                    if (r >= i && t >= n) return 0;
                    if (r >= i) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    let s = (i >>>= 0) - (r >>>= 0),
                        o = (n >>>= 0) - (t >>>= 0);
                    const a = Math.min(s, o),
                        l = this.slice(r, i),
                        c = e.slice(t, n);
                    for (let e = 0; e < a; ++e)
                        if (l[e] !== c[e]) {
                            s = l[e], o = c[e];
                            break
                        } return s < o ? -1 : o < s ? 1 : 0
                }, u.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, u.prototype.indexOf = function(e, t, n) {
                    return v(this, e, t, n, !0)
                }, u.prototype.lastIndexOf = function(e, t, n) {
                    return v(this, e, t, n, !1)
                }, u.prototype.write = function(e, t, n, r) {
                    if (void 0 === t) r = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    const i = this.length - t;
                    if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    let s = !1;
                    for (;;) switch (r) {
                        case "hex":
                            return b(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return w(this, e, t, n);
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return C(this, e, t, n);
                        case "base64":
                            return R(this, e, t, n);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return T(this, e, t, n);
                        default:
                            if (s) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), s = !0
                    }
                }, u.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                const A = 4096;

                function L(e, t, n) {
                    let r = "";
                    n = Math.min(e.length, n);
                    for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r
                }

                function I(e, t, n) {
                    let r = "";
                    n = Math.min(e.length, n);
                    for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r
                }

                function E(e, t, n) {
                    const r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    let i = "";
                    for (let r = t; r < n; ++r) i += Q[e[r]];
                    return i
                }

                function k(e, t, n) {
                    const r = e.slice(t, n);
                    let i = "";
                    for (let e = 0; e < r.length - 1; e += 2) i += String.fromCharCode(r[e] + 256 * r[e + 1]);
                    return i
                }

                function M(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function D(e, t, n, r, i, s) {
                    if (!u.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > i || t < s) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length) throw new RangeError("Index out of range")
                }

                function P(e, t, n, r, i) {
                    F(t, r, i, e, n, 7);
                    let s = Number(t & BigInt(4294967295));
                    e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s, s >>= 8, e[n++] = s;
                    let o = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, n
                }

                function U(e, t, n, r, i) {
                    F(t, r, i, e, n, 7);
                    let s = Number(t & BigInt(4294967295));
                    e[n + 7] = s, s >>= 8, e[n + 6] = s, s >>= 8, e[n + 5] = s, s >>= 8, e[n + 4] = s;
                    let o = Number(t >> BigInt(32) & BigInt(4294967295));
                    return e[n + 3] = o, o >>= 8, e[n + 2] = o, o >>= 8, e[n + 1] = o, o >>= 8, e[n] = o, n + 8
                }

                function B(e, t, n, r, i, s) {
                    if (n + r > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function x(e, t, n, r, s) {
                    return t = +t, n >>>= 0, s || B(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
                }

                function N(e, t, n, r, s) {
                    return t = +t, n >>>= 0, s || B(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
                }
                u.prototype.slice = function(e, t) {
                    const n = this.length;
                    (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                    const r = this.subarray(e, t);
                    return Object.setPrototypeOf(r, u.prototype), r
                }, u.prototype.readUintLE = u.prototype.readUIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let r = this[e],
                        i = 1,
                        s = 0;
                    for (; ++s < t && (i *= 256);) r += this[e + s] * i;
                    return r
                }, u.prototype.readUintBE = u.prototype.readUIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let r = this[e + --t],
                        i = 1;
                    for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
                    return r
                }, u.prototype.readUint8 = u.prototype.readUInt8 = function(e, t) {
                    return e >>>= 0, t || M(e, 1, this.length), this[e]
                }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(e, t) {
                    return e >>>= 0, t || M(e, 2, this.length), this[e] | this[e + 1] << 8
                }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(e, t) {
                    return e >>>= 0, t || M(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, u.prototype.readBigUInt64LE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || H(e, this.length - 8);
                    const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                        i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
                    return BigInt(r) + (BigInt(i) << BigInt(32))
                })), u.prototype.readBigUInt64BE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || H(e, this.length - 8);
                    const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                        i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
                    return (BigInt(r) << BigInt(32)) + BigInt(i)
                })), u.prototype.readIntLE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let r = this[e],
                        i = 1,
                        s = 0;
                    for (; ++s < t && (i *= 256);) r += this[e + s] * i;
                    return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
                }, u.prototype.readIntBE = function(e, t, n) {
                    e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                    let r = t,
                        i = 1,
                        s = this[e + --r];
                    for (; r > 0 && (i *= 256);) s += this[e + --r] * i;
                    return i *= 128, s >= i && (s -= Math.pow(2, 8 * t)), s
                }, u.prototype.readInt8 = function(e, t) {
                    return e >>>= 0, t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, u.prototype.readInt16LE = function(e, t) {
                    e >>>= 0, t || M(e, 2, this.length);
                    const n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt16BE = function(e, t) {
                    e >>>= 0, t || M(e, 2, this.length);
                    const n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, u.prototype.readInt32LE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, u.prototype.readInt32BE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, u.prototype.readBigInt64LE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || H(e, this.length - 8);
                    const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                    return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
                })), u.prototype.readBigInt64BE = Y((function(e) {
                    q(e >>>= 0, "offset");
                    const t = this[e],
                        n = this[e + 7];
                    void 0 !== t && void 0 !== n || H(e, this.length - 8);
                    const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                    return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
                })), u.prototype.readFloatLE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), i.read(this, e, !0, 23, 4)
                }, u.prototype.readFloatBE = function(e, t) {
                    return e >>>= 0, t || M(e, 4, this.length), i.read(this, e, !1, 23, 4)
                }, u.prototype.readDoubleLE = function(e, t) {
                    return e >>>= 0, t || M(e, 8, this.length), i.read(this, e, !0, 52, 8)
                }, u.prototype.readDoubleBE = function(e, t) {
                    return e >>>= 0, t || M(e, 8, this.length), i.read(this, e, !1, 52, 8)
                }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, n >>>= 0, !r) {
                        D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                    }
                    let i = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++s < n && (i *= 256);) this[t + s] = e / i & 255;
                    return t + n
                }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, n >>>= 0, !r) {
                        D(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                    }
                    let i = n - 1,
                        s = 1;
                    for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) this[t + i] = e / s & 255;
                    return t + n
                }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, u.prototype.writeBigUInt64LE = Y((function(e, t = 0) {
                    return P(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })), u.prototype.writeBigUInt64BE = Y((function(e, t = 0) {
                    return U(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                })), u.prototype.writeIntLE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        const r = Math.pow(2, 8 * n - 1);
                        D(this, e, t, n, r - 1, -r)
                    }
                    let i = 0,
                        s = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++i < n && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1), this[t + i] = (e / s >> 0) - o & 255;
                    return t + n
                }, u.prototype.writeIntBE = function(e, t, n, r) {
                    if (e = +e, t >>>= 0, !r) {
                        const r = Math.pow(2, 8 * n - 1);
                        D(this, e, t, n, r - 1, -r)
                    }
                    let i = n - 1,
                        s = 1,
                        o = 0;
                    for (this[t + i] = 255 & e; --i >= 0 && (s *= 256);) e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1), this[t + i] = (e / s >> 0) - o & 255;
                    return t + n
                }, u.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, u.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                }, u.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                }, u.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                }, u.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t >>>= 0, n || D(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                }, u.prototype.writeBigInt64LE = Y((function(e, t = 0) {
                    return P(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })), u.prototype.writeBigInt64BE = Y((function(e, t = 0) {
                    return U(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                })), u.prototype.writeFloatLE = function(e, t, n) {
                    return x(this, e, t, !0, n)
                }, u.prototype.writeFloatBE = function(e, t, n) {
                    return x(this, e, t, !1, n)
                }, u.prototype.writeDoubleLE = function(e, t, n) {
                    return N(this, e, t, !0, n)
                }, u.prototype.writeDoubleBE = function(e, t, n) {
                    return N(this, e, t, !1, n)
                }, u.prototype.copy = function(e, t, n, r) {
                    if (!u.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                    if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                    const i = r - n;
                    return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
                }, u.prototype.fill = function(e, t, n, r) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                        if (1 === e.length) {
                            const t = e.charCodeAt(0);
                            ("utf8" === r && t < 128 || "latin1" === r) && (e = t)
                        }
                    } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    let i;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                        for (i = t; i < n; ++i) this[i] = e;
                    else {
                        const s = u.isBuffer(e) ? e : u.from(e, r),
                            o = s.length;
                        if (0 === o) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                        for (i = 0; i < n - t; ++i) this[i + t] = s[i % o]
                    }
                    return this
                };
                const j = {};

                function G(e, t, n) {
                    j[e] = class extends n {
                        constructor() {
                            super(), Object.defineProperty(this, "message", {
                                value: t.apply(this, arguments),
                                writable: !0,
                                configurable: !0
                            }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                        }
                        get code() {
                            return e
                        }
                        set code(e) {
                            Object.defineProperty(this, "code", {
                                configurable: !0,
                                enumerable: !0,
                                value: e,
                                writable: !0
                            })
                        }
                        toString() {
                            return `${this.name} [${e}]: ${this.message}`
                        }
                    }
                }

                function $(e) {
                    let t = "",
                        n = e.length;
                    const r = "-" === e[0] ? 1 : 0;
                    for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                    return `${e.slice(0,n)}${t}`
                }

                function F(e, t, n, r, i, s) {
                    if (e > n || e < t) {
                        const r = "bigint" == typeof t ? "n" : "";
                        let i;
                        throw i = s > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(s+1)}${r}` : `>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new j.ERR_OUT_OF_RANGE("value", i, e)
                    }! function(e, t, n) {
                        q(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || H(t, e.length - (n + 1))
                    }(r, i, s)
                }

                function q(e, t) {
                    if ("number" != typeof e) throw new j.ERR_INVALID_ARG_TYPE(t, "number", e)
                }

                function H(e, t, n) {
                    if (Math.floor(e) !== e) throw q(e, n), new j.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                    if (t < 0) throw new j.ERR_BUFFER_OUT_OF_BOUNDS;
                    throw new j.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
                }
                G("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                    return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                }), RangeError), G("ERR_INVALID_ARG_TYPE", (function(e, t) {
                    return `The "${e}" argument must be of type number. Received type ${typeof t}`
                }), TypeError), G("ERR_OUT_OF_RANGE", (function(e, t, n) {
                    let r = `The value of "${e}" is out of range.`,
                        i = n;
                    return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = $(String(n)) : "bigint" == typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = $(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r
                }), RangeError);
                const V = /[^+/0-9A-Za-z-_]/g;

                function z(e, t) {
                    let n;
                    t = t || 1 / 0;
                    const r = e.length;
                    let i = null;
                    const s = [];
                    for (let o = 0; o < r; ++o) {
                        if (n = e.charCodeAt(o), n > 55295 && n < 57344) {
                            if (!i) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                if (o + 1 === r) {
                                    (t -= 3) > -1 && s.push(239, 191, 189);
                                    continue
                                }
                                i = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && s.push(239, 191, 189), i = n;
                                continue
                            }
                            n = 65536 + (i - 55296 << 10 | n - 56320)
                        } else i && (t -= 3) > -1 && s.push(239, 191, 189);
                        if (i = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            s.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            s.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            s.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            s.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return s
                }

                function W(e) {
                    return r.toByteArray(function(e) {
                        if ((e = (e = e.split("=")[0]).trim().replace(V, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function J(e, t, n, r) {
                    let i;
                    for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                    return i
                }

                function K(e, t) {
                    return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                }

                function X(e) {
                    return e != e
                }
                const Q = function() {
                    const e = "0123456789abcdef",
                        t = new Array(256);
                    for (let n = 0; n < 16; ++n) {
                        const r = 16 * n;
                        for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
                    }
                    return t
                }();

                function Y(e) {
                    return "undefined" == typeof BigInt ? Z : e
                }

                function Z() {
                    throw new Error("BigInt not supported")
                }
            },
            7187: e => {
                "use strict";
                var t, n = "object" == typeof Reflect ? Reflect : null,
                    r = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
                        return Function.prototype.apply.call(e, t, n)
                    };
                t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : function(e) {
                    return Object.getOwnPropertyNames(e)
                };
                var i = Number.isNaN || function(e) {
                    return e != e
                };

                function s() {
                    s.init.call(this)
                }
                e.exports = s, e.exports.once = function(e, t) {
                    return new Promise((function(n, r) {
                        function i() {
                            void 0 !== s && e.removeListener("error", s), n([].slice.call(arguments))
                        }
                        var s;
                        "error" !== t && (s = function(n) {
                            e.removeListener(t, i), r(n)
                        }, e.once("error", s)), e.once(t, i)
                    }))
                }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
                var o = 10;

                function a(e) {
                    if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
                }

                function u(e) {
                    return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
                }

                function l(e, t, n, r) {
                    var i, s, o, l;
                    if (a(n), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), o = s[t]), void 0 === o) o = s[t] = n, ++e._eventsCount;
                    else if ("function" == typeof o ? o = s[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), (i = u(e)) > 0 && o.length > i && !o.warned) {
                        o.warned = !0;
                        var c = new Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                        c.name = "MaxListenersExceededWarning", c.emitter = e, c.type = t, c.count = o.length, l = c, console && console.warn && console.warn(l)
                    }
                    return e
                }

                function c() {
                    if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                }

                function f(e, t, n) {
                    var r = {
                            fired: !1,
                            wrapFn: void 0,
                            target: e,
                            type: t,
                            listener: n
                        },
                        i = c.bind(r);
                    return i.listener = n, r.wrapFn = i, i
                }

                function d(e, t, n) {
                    var r = e._events;
                    if (void 0 === r) return [];
                    var i = r[t];
                    return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                        for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                        return t
                    }(i) : p(i, i.length)
                }

                function h(e) {
                    var t = this._events;
                    if (void 0 !== t) {
                        var n = t[e];
                        if ("function" == typeof n) return 1;
                        if (void 0 !== n) return n.length
                    }
                    return 0
                }

                function p(e, t) {
                    for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                    return n
                }
                Object.defineProperty(s, "defaultMaxListeners", {
                    enumerable: !0,
                    get: function() {
                        return o
                    },
                    set: function(e) {
                        if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                        o = e
                    }
                }), s.init = function() {
                    void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                }, s.prototype.setMaxListeners = function(e) {
                    if ("number" != typeof e || e < 0 || i(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                    return this._maxListeners = e, this
                }, s.prototype.getMaxListeners = function() {
                    return u(this)
                }, s.prototype.emit = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                    var i = "error" === e,
                        s = this._events;
                    if (void 0 !== s) i = i && void 0 === s.error;
                    else if (!i) return !1;
                    if (i) {
                        var o;
                        if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                        var a = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                        throw a.context = o, a
                    }
                    var u = s[e];
                    if (void 0 === u) return !1;
                    if ("function" == typeof u) r(u, this, t);
                    else {
                        var l = u.length,
                            c = p(u, l);
                        for (n = 0; n < l; ++n) r(c[n], this, t)
                    }
                    return !0
                }, s.prototype.addListener = function(e, t) {
                    return l(this, e, t, !1)
                }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
                    return l(this, e, t, !0)
                }, s.prototype.once = function(e, t) {
                    return a(t), this.on(e, f(this, e, t)), this
                }, s.prototype.prependOnceListener = function(e, t) {
                    return a(t), this.prependListener(e, f(this, e, t)), this
                }, s.prototype.removeListener = function(e, t) {
                    var n, r, i, s, o;
                    if (a(t), void 0 === (r = this._events)) return this;
                    if (void 0 === (n = r[e])) return this;
                    if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                    else if ("function" != typeof n) {
                        for (i = -1, s = n.length - 1; s >= 0; s--)
                            if (n[s] === t || n[s].listener === t) {
                                o = n[s].listener, i = s;
                                break
                            } if (i < 0) return this;
                        0 === i ? n.shift() : function(e, t) {
                            for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                            e.pop()
                        }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, o || t)
                    }
                    return this
                }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
                    var t, n, r;
                    if (void 0 === (n = this._events)) return this;
                    if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                    if (0 === arguments.length) {
                        var i, s = Object.keys(n);
                        for (r = 0; r < s.length; ++r) "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
                        return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                    }
                    if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                    else if (void 0 !== t)
                        for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                    return this
                }, s.prototype.listeners = function(e) {
                    return d(this, e, !0)
                }, s.prototype.rawListeners = function(e) {
                    return d(this, e, !1)
                }, s.listenerCount = function(e, t) {
                    return "function" == typeof e.listenerCount ? e.listenerCount(t) : h.call(e, t)
                }, s.prototype.listenerCount = h, s.prototype.eventNames = function() {
                    return this._eventsCount > 0 ? t(this._events) : []
                }
            },
            645: (e, t) => {
                t.read = function(e, t, n, r, i) {
                    var s, o, a = 8 * i - r - 1,
                        u = (1 << a) - 1,
                        l = u >> 1,
                        c = -7,
                        f = n ? i - 1 : 0,
                        d = n ? -1 : 1,
                        h = e[t + f];
                    for (f += d, s = h & (1 << -c) - 1, h >>= -c, c += a; c > 0; s = 256 * s + e[t + f], f += d, c -= 8);
                    for (o = s & (1 << -c) - 1, s >>= -c, c += r; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
                    if (0 === s) s = 1 - l;
                    else {
                        if (s === u) return o ? NaN : 1 / 0 * (h ? -1 : 1);
                        o += Math.pow(2, r), s -= l
                    }
                    return (h ? -1 : 1) * o * Math.pow(2, s - r)
                }, t.write = function(e, t, n, r, i, s) {
                    var o, a, u, l = 8 * s - i - 1,
                        c = (1 << l) - 1,
                        f = c >> 1,
                        d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        h = r ? 0 : s - 1,
                        p = r ? 1 : -1,
                        g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                    for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = c) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), (t += o + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 && (o++, u /= 2), o + f >= c ? (a = 0, o = c) : o + f >= 1 ? (a = (t * u - 1) * Math.pow(2, i), o += f) : (a = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); i >= 8; e[n + h] = 255 & a, h += p, a /= 256, i -= 8);
                    for (o = o << i | a, l += i; l > 0; e[n + h] = 255 & o, h += p, o /= 256, l -= 8);
                    e[n + h - p] |= 128 * g
                }
            },
            2509: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(1115)),
                    s = r(n(7021)),
                    o = n(4816);
                t.default = class {
                    constructor(e) {
                        this.username = e.username, this.storage = e.storage || (new i.default).getStorage(), this.userPoolId = e.userPoolId, this.userPoolClientId = e.userPoolClientId, this.advancedSecurityDataCollectionFlag = e.advancedSecurityDataCollectionFlag, this.signInUserSession = null, this.keyPrefix = "Lotus", this.userDataKey = `${this.keyPrefix}.${this.username}.userData`
                    }
                    updateUsernameKey(e) {
                        this.username = e, this.userDataKey = `${this.keyPrefix}.${this.username}.userData`
                    }
                    async signOutInternal(e, t) {
                        this.signInUserSession = null, this.clearCachedUser(), await e.post(t.url, {
                            AccessToken: t.accessToken
                        })
                    }
                    getUserSession(e) {
                        const t = new o.IdToken(e.idToken),
                            n = new o.AccessToken(e.accessToken),
                            r = new o.RefreshToken(e.refreshToken);
                        return new s.default({
                            idToken: t,
                            accessToken: n,
                            refreshToken: r
                        })
                    }
                    getSignInUserSession() {
                        return this.signInUserSession
                    }
                    setSignInUserSession(e) {
                        this.clearCachedUserData(), this.signInUserSession = e, this.cacheTokens()
                    }
                    async getSession() {
                        if (null == this.username) throw new Error("Username is null. Cannot retrieve a new session");
                        if (null != this.signInUserSession && this.signInUserSession.isValid()) return this.signInUserSession;
                        const e = `${this.keyPrefix}.${this.username}.idToken`,
                            t = `${this.keyPrefix}.${this.username}.accessToken`,
                            n = `${this.keyPrefix}.${this.username}.refreshToken`,
                            r = `${this.keyPrefix}.${this.username}.clockDrift`;
                        if (!this.storage.getItem(e)) throw new Error("Local storage is missing an ID Token, Please authenticate");
                        const i = new o.IdToken(this.storage.getItem(e)),
                            a = new o.AccessToken(this.storage.getItem(t)),
                            u = new o.RefreshToken(this.storage.getItem(n)),
                            l = parseInt(this.storage.getItem(r), 0) || 0,
                            c = new s.default({
                                idToken: i,
                                accessToken: a,
                                refreshToken: u,
                                clockDrift: l
                            });
                        if (c.isValid()) return this.signInUserSession = c, this.signInUserSession;
                        if (!u.getToken()) throw new Error("Cannot retrieve refresh token. Please authenticate.");
                        return await this.refreshSession(u)
                    }
                    async refreshSession(e) {
                        throw new Error("refreshSession is not overrided;")
                    }
                    async profileInternal(e, t) {
                        const n = this.storage.getItem(this.userDataKey);
                        if (!n || t.bypassCache) {
                            const n = await e.get(t.url);
                            return this.cacheUserData(n), n
                        }
                        return JSON.parse(n)
                    }
                    async authenticateInternal(e, t) {
                        e.ejectAuthorizationInterceptor();
                        const n = {
                            Username: t.username,
                            Password: t.password
                        };
                        t.scope && (n.Scope = t.scope);
                        const r = this.getUserContextData(this.username);
                        null != r && (n.EncodedData = r);
                        const i = await e.post(t.url, n);
                        e.useAuthorizationInterceptor();
                        return i.ChallengeName ? (this.cacheChallenge(i.ChallengeName, i.Session), {
                            RequireAction: i.ChallengeName
                        }) : (this.signInUserSession = this.getUserSession({
                            idToken: i.IdToken,
                            accessToken: i.AccessToken,
                            refreshToken: i.RefreshToken
                        }), this.cacheTokens(), this.signInUserSession)
                    }
                    async authTelegramInternal(e, t) {
                        e.ejectAuthorizationInterceptor();
                        const n = {
                            InitData: t.initData
                        };
                        t.scope && (n.Scope = t.scope);
                        const r = await e.post(t.url, n);
                        return e.useAuthorizationInterceptor(), this.updateUsernameKey(r.Username), this.signInUserSession = this.getUserSession({
                            idToken: r.Token.IdToken,
                            accessToken: r.Token.AccessToken,
                            refreshToken: r.Token.RefreshToken
                        }), this.cacheTokens(), this.signInUserSession
                    }
                    async refreshSessionInternal(e, t) {
                        try {
                            const n = {
                                    RefreshToken: t.refreshToken.getToken()
                                },
                                r = this.getUserContextData(this.username);
                            null != r && (n.EncodedData = r), e.ejectAuthorizationInterceptor();
                            const i = await e.post(t.url, n);
                            return e.useAuthorizationInterceptor(), Object.prototype.hasOwnProperty.call(i, "RefreshToken") || (i.RefreshToken = t.refreshToken.getToken()), this.signInUserSession = this.getUserSession({
                                idToken: i.IdToken,
                                accessToken: i.AccessToken,
                                refreshToken: i.RefreshToken
                            }), this.cacheTokens(), this.signInUserSession
                        } catch (e) {
                            throw "NotAuthorizedException" === e.code && this.clearCachedUser(), e
                        }
                    }
                    async completeNewPasswordInternal(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            r = `${this.keyPrefix}.${this.username}.session`,
                            i = this.storage.getItem(n),
                            s = this.storage.getItem(r);
                        if (!i) throw new Error("Challenge Name not found.");
                        if (!s) throw new Error("Session not found.");
                        if ("NEW_PASSWORD_REQUIRED" !== i) throw new Error("Require Action is not NEW_PASSWORD_REQUIRED");
                        let o = {
                            Username: this.username,
                            NewPassword: t.newPassword,
                            Session: s
                        };
                        const a = this.getUserContextData(this.username);
                        null != a && (o.EncodedData = a), e.ejectAuthorizationInterceptor();
                        const u = await e.put(t.url, o);
                        e.useAuthorizationInterceptor();
                        const l = u.ChallengeName;
                        return l ? (this.cacheChallenge(l, u.Session), {
                            RequireAction: l
                        }) : (this.signInUserSession = this.getUserSession({
                            idToken: u.IdToken,
                            accessToken: u.AccessToken,
                            refreshToken: u.RefreshToken
                        }), this.cacheTokens(), this.clearCachedChallenge(), this.signInUserSession)
                    }
                    async confirmSignInInternal(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            r = `${this.keyPrefix}.${this.username}.session`,
                            i = this.storage.getItem(n),
                            s = this.storage.getItem(r);
                        if (!i) throw new Error("Challenge Name not found.");
                        if (!s) throw new Error("Session not found.");
                        if ("SOFTWARE_TOKEN_MFA" !== i) throw new Error("Require Action is not SOFTWARE_TOKEN_MFA");
                        const o = {
                            Username: this.username,
                            Session: s,
                            Code: t.code
                        };
                        e.ejectAuthorizationInterceptor();
                        const a = await e.post(t.url, o);
                        return e.useAuthorizationInterceptor(), this.signInUserSession = this.getUserSession({
                            idToken: a.IdToken,
                            accessToken: a.AccessToken,
                            refreshToken: a.RefreshToken
                        }), this.cacheTokens(), this.clearCachedChallenge(), this.signInUserSession
                    }
                    async generateTOTPSecretCodeInternal(e, t) {
                        if (!this.signInUserSession) throw new Error("signInUserSession is null");
                        const n = this.signInUserSession.getAccessToken().getJwtToken();
                        return e.post(t.url, {
                            AccessToken: n
                        })
                    }
                    async enableMFAInternal(e, t) {
                        if (!this.signInUserSession) throw new Error("signInUserSession is null");
                        const n = this.signInUserSession.getAccessToken().getJwtToken();
                        return e.put(t.url, {
                            AccessToken: n,
                            UserCode: t.code
                        })
                    }
                    async disableMFAInternal(e, t) {
                        if (!this.signInUserSession) throw new Error("signInUserSession is null");
                        const n = this.signInUserSession.getAccessToken().getJwtToken();
                        return e.put(t.url, {
                            AccessToken: n,
                            UserCode: t.code
                        })
                    }
                    cacheChallenge(e, t) {
                        const n = `${this.keyPrefix}.${this.username}.challengeName`,
                            r = `${this.keyPrefix}.${this.username}.session`;
                        this.storage.setItem(n, e), this.storage.setItem(r, t)
                    }
                    clearCachedChallenge() {
                        const e = `${this.keyPrefix}.${this.username}.challengeName`,
                            t = `${this.keyPrefix}.${this.username}.session`;
                        this.storage.removeItem(e), this.storage.removeItem(t)
                    }
                    cacheTokens() {
                        const e = `${this.keyPrefix}.${this.username}.idToken`,
                            t = `${this.keyPrefix}.${this.username}.accessToken`,
                            n = `${this.keyPrefix}.${this.username}.refreshToken`,
                            r = `${this.keyPrefix}.${this.username}.clockDrift`,
                            i = `${this.keyPrefix}.LastAuthUser`;
                        this.storage.setItem(e, this.signInUserSession.getIdToken().getJwtToken()), this.storage.setItem(t, this.signInUserSession.getAccessToken().getJwtToken()), this.storage.setItem(n, this.signInUserSession.getRefreshToken().getToken()), this.storage.setItem(r, `${this.signInUserSession.getClockDrift()}`), this.storage.setItem(i, this.username)
                    }
                    cacheUserData(e) {
                        this.storage.setItem(this.userDataKey, JSON.stringify(e))
                    }
                    clearCachedUserData() {
                        this.storage.removeItem(this.userDataKey)
                    }
                    clearCachedTokens() {
                        const e = `${this.keyPrefix}.${this.username}.idToken`,
                            t = `${this.keyPrefix}.${this.username}.accessToken`,
                            n = `${this.keyPrefix}.${this.username}.refreshToken`,
                            r = `${this.keyPrefix}.${this.username}.clockDrift`,
                            i = `${this.keyPrefix}.LastAuthUser`;
                        this.storage.removeItem(e), this.storage.removeItem(t), this.storage.removeItem(n), this.storage.removeItem(i), this.storage.removeItem(r)
                    }
                    clearCachedUser() {
                        this.clearCachedTokens(), this.clearCachedUserData()
                    }
                    getUserContextData(e) {
                        if (console.log(e), "undefined" == typeof AmazonCognitoAdvancedSecurityData) return null;
                        const t = AmazonCognitoAdvancedSecurityData;
                        if (this.advancedSecurityDataCollectionFlag) {
                            const n = t.getData(e, this.userPoolId, this.userPoolClientId);
                            if (n) return n
                        }
                        return null
                    }
                }
            },
            7021: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = class {
                    constructor(e) {
                        this._idToken = e.idToken, this._refreshToken = e.refreshToken, this._accessToken = e.accessToken, this._clockDrift = void 0 === e.clockDrift ? this.calculateClockDrift() : e.clockDrift
                    }
                    getIdToken() {
                        return this._idToken
                    }
                    getRefreshToken() {
                        return this._refreshToken
                    }
                    getAccessToken() {
                        return this._accessToken
                    }
                    getClockDrift() {
                        return this._clockDrift
                    }
                    calculateClockDrift() {
                        return Math.floor(Date.now() / 1e3) - Math.min(this.getAccessToken().getIssuedAt(), this.getIdToken().getIssuedAt())
                    }
                    isValid() {
                        let e = Math.floor(Date.now() / 1e3) - this._clockDrift;
                        return e += 300, e < this._accessToken.getExpiration() && e < this._idToken.getExpiration()
                    }
                }
            },
            4816: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AccessToken = t.IdToken = t.RefreshToken = t.JwtToken = void 0;
                const r = n(8764);
                class i {
                    constructor(e) {
                        this.jwtToken = e || "", this.payload = this.decodePayload()
                    }
                    getJwtToken() {
                        return this.jwtToken
                    }
                    getExpiration() {
                        return this.payload.exp
                    }
                    getIssuedAt() {
                        return this.payload.iat
                    }
                    getAuthTime() {
                        return this.payload.auth_time
                    }
                    getUserPath() {
                        return this.payload["custom:path"]
                    }
                    decodePayload() {
                        const e = this.jwtToken.split(".")[1];
                        try {
                            return JSON.parse(r.Buffer.from(e, "base64").toString("utf8"))
                        } catch (e) {
                            return {}
                        }
                    }
                }
                t.JwtToken = i;
                t.IdToken = class extends i {
                    constructor(e = "") {
                        super(e)
                    }
                };
                t.AccessToken = class extends i {
                    constructor(e = "") {
                        super(e)
                    }
                };
                t.RefreshToken = class {
                    constructor(e = "") {
                        this.refreshToken = e
                    }
                    getToken() {
                        return this.refreshToken
                    }
                }
            },
            4486: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                class n extends Error {
                    constructor(e, t) {
                        super(t), this.name = e, this.code = e
                    }
                }
                t.default = n
            },
            6104: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AdjustingTimer = void 0;
                t.AdjustingTimer = class {
                    constructor(e, t = 1e3, n) {
                        this._this = this, this._processFunc = e, this._errorFunc = n, this._interval = t
                    }
                    start() {
                        this._expected = Date.now() + this._interval, this._timeout = setTimeout(this._step.bind(this), this._interval)
                    }
                    stop() {
                        clearTimeout(this._timeout)
                    }
                    _step() {
                        const e = Date.now() - this._expected;
                        e > this._interval && this._errorFunc && this._errorFunc(), this._processFunc ? this._processFunc() : console.error("Could not found handler function"), this._expected += this._interval, setTimeout(this._step.bind(this), Math.max(0, this._interval - e))
                    }
                }
            },
            1115: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                let n;
                t.default = class {
                    constructor() {
                        try {
                            "undefined" != typeof window ? this.storageWindow = window.sessionStorage : this.storageWindow = sessionStorage, this.storageWindow.setItem("lotus.test-ls", 1), this.storageWindow.removeItem("lotus.test-ls")
                        } catch (e) {
                            this.storageWindow = r
                        }
                    }
                    getStorage() {
                        return this.storageWindow
                    }
                };
                class r {
                    static setItem(e, t) {
                        return n[e] = t, n[e]
                    }
                    static getItem(e) {
                        return Object.prototype.hasOwnProperty.call(n, e) ? n[e] : void 0
                    }
                    static removeItem(e) {
                        return delete n[e]
                    }
                    static clear() {
                        return n = {}, n
                    }
                }
            },
            9327: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(440));
                class s extends i.default {
                    constructor() {
                        super(!0)
                    }
                    useAuthorizationInterceptor() {}
                }
                t.default = s
            },
            4774: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                t.default = class {
                    constructor() {}
                    configure() {}
                    async connect() {
                        throw new Error("connect is not overrided;")
                    }
                    close() {
                        if (!this.client) throw new Error("Socket client is null");
                        this.client.close()
                    }
                    get Connection() {
                        return this.client.connection
                    }
                    get Client() {
                        return this.client
                    }
                }
            },
            440: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(7218)),
                    s = r(n(4486));
                t.default = class {
                    constructor(e = !1) {
                        this.axiosInstance = i.default.create(), !1 === e && this.useAuthorizationInterceptor()
                    }
                    ejectAuthorizationInterceptor() {
                        this.axiosInstance.interceptors.request.eject(this.authorizationInterceptor)
                    }
                    useAuthorizationInterceptor() {
                        throw new Error("useAuthorizationInterceptor is not overrided;")
                    }
                    configClient() {}
                    async get(e, t) {
                        return await this.requestInternal({
                            method: "get",
                            url: e,
                            params: t
                        })
                    }
                    async post(e, t) {
                        return await this.requestInternal({
                            method: "post",
                            url: e,
                            data: t
                        })
                    }
                    async delete(e, t) {
                        return await this.requestInternal({
                            method: "delete",
                            url: e,
                            data: t
                        })
                    }
                    async put(e, t) {
                        return await this.requestInternal({
                            method: "put",
                            url: e,
                            data: t
                        })
                    }
                    async requestInternal(e) {
                        try {
                            const t = {
                                method: e.method,
                                url: e.url,
                                headers: {
                                    "content-type": "application/json"
                                }
                            };
                            e.data && (t.data = e.data), e.params && (t.params = e.params);
                            return (await this.axiosInstance.request(t)).data || null
                        } catch (e) {
                            if (e.response) {
                                if (500 === e.status) throw new s.default("InternalServerError", "CÃ³ lá»—i xáº£y ra trong quÃ¡ trÃ¬nh xá»­ lÃ½, quÃ½ khÃ¡ch vui lÃ²ng thá»­ láº¡i sau");
                                if (504 === e.status) throw new s.default("GatewayTimeout", "Quy trÃ¬nh xá»­ lÃ½ dá»¯ liá»‡u lÃ¢u hÆ¡n dá»± kiáº¿n, quÃ½ khÃ¡ch vui lÃ²ng thá»­ láº¡i sau");
                                throw e.response.data ? new s.default(e.response.data.code, e.response.data.message) : new s.default("UnhandledException", "YÃªu cáº§u cá»§a quÃ½ khÃ¡ch thá»±c hiá»‡n khÃ´ng thÃ nh cÃ´ng, vui lÃ²ng thá»­ láº¡i sau")
                            }
                            throw new s.default("NetworkException", "Káº¿t ná»‘i máº¡ng cá»§a quÃ½ khÃ¡ch hiá»‡n táº¡i khÃ´ng á»•n Ä‘á»‹nh, hÃ£y kiá»ƒm tra láº¡i")
                        }
                    }
                }
            },
            1069: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.BetTypeHelper = t.BetType = void 0,
                    function(e) {
                        e[e.De = 0] = "De", e[e.Lo = 1] = "Lo", e[e.Xien2 = 2] = "Xien2", e[e.Xien3 = 3] = "Xien3", e[e.Xien4 = 4] = "Xien4", e[e.DeTruot = 5] = "DeTruot", e[e.LoTruot = 6] = "LoTruot", e[e.HaiDDau = 7] = "HaiDDau", e[e.HaiDDuoi = 8] = "HaiDDuoi", e[e.HaiD27Lo = 9] = "HaiD27Lo", e[e.BaDDau = 10] = "BaDDau", e[e.BaDDuoi = 11] = "BaDDuoi", e[e.BaD23Lo = 12] = "BaD23Lo", e[e.BonDDuoi = 13] = "BonDDuoi", e[e.BonD20Lo = 14] = "BonD20Lo", e[e.HaiD18Lo = 15] = "HaiD18Lo", e[e.HaiD7Lo = 16] = "HaiD7Lo", e[e.BaD17Lo = 17] = "BaD17Lo", e[e.BaD7Lo = 18] = "BaD7Lo", e[e.BonD16Lo = 19] = "BonD16Lo", e[e.LoLive = 20] = "LoLive", e[e.DeDau = 21] = "DeDau", e[e.DeGiaiNhat = 22] = "DeGiaiNhat", e[e.DeDauGiaiNhat = 23] = "DeDauGiaiNhat", e[e.DeThanTai4 = 24] = "DeThanTai4", e[e.DeDauThanTai4 = 25] = "DeDauThanTai4", e[e.HaiD18LoLive = 27] = "HaiD18LoLive", e[e.LoDau = 29] = "LoDau", e[e.HaiD18LoDau = 30] = "HaiD18LoDau"
                    }(n || (n = {})), t.BetType = n;
                const r = {
                    toString(e) {
                        switch (e) {
                            case n.De:
                                return "Äá»";
                            case n.Lo:
                                return "LÃ´";
                            case n.Xien2:
                                return "XiÃªn 2";
                            case n.Xien3:
                                return "XiÃªn 3";
                            case n.Xien4:
                                return "XiÃªn 4";
                            case n.DeTruot:
                                return "Äá» TrÆ°á»£t";
                            case n.LoTruot:
                                return "LÃ´ TrÆ°á»£t";
                            case n.HaiDDau:
                                return "2D Äáº§u";
                            case n.HaiDDuoi:
                                return "2D ÄuÃ´i";
                            case n.HaiD27Lo:
                                return "2D 27LÃ´";
                            case n.BaDDau:
                                return "3D Äáº§u";
                            case n.BaDDuoi:
                                return "3D ÄuÃ´i";
                            case n.BaD23Lo:
                                return "3D 23LÃ´";
                            case n.BonDDuoi:
                                return "4D ÄuÃ´i";
                            case n.BonD20Lo:
                                return "4D 20LÃ´";
                            case n.HaiD18Lo:
                                return "2D 18LÃ´";
                            case n.HaiD7Lo:
                                return "2D 7LÃ´";
                            case n.BaD17Lo:
                                return "3D 17LÃ´";
                            case n.BaD7Lo:
                                return "3D 7LÃ´";
                            case n.BonD16Lo:
                                return "4D 16LÃ´";
                            case n.LoLive:
                                return "LÃ´ Live";
                            case n.DeDau:
                                return "Äá» Äáº§u";
                            case n.DeGiaiNhat:
                                return "Äá» Giáº£i 1";
                            case n.DeDauGiaiNhat:
                                return "Äá» Äáº§u Giáº£i 1";
                            case n.DeThanTai4:
                                return "Äá» Tháº§n TÃ i";
                            case n.DeDauThanTai4:
                                return "Äá» Äáº§u Tháº§n TÃ i";
                            case n.LoDau:
                                return "LÃ´ Äáº§u";
                            case n.HaiD18LoDau:
                                return "2D 18LÃ´ Äáº§u";
                            case n.HaiD18LoLive:
                                return "2D 18LÃ´ Live";
                            default:
                                return "N/A"
                        }
                    }
                };
                t.BetTypeHelper = r
            },
            6336: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.GameTypeHelper = t.GameType = void 0,
                    function(e) {
                        e[e.MienBac1 = 0] = "MienBac1", e[e.MienBac2 = 1] = "MienBac2", e[e.MienNam18A = 2] = "MienNam18A", e[e.MienNam18B = 3] = "MienNam18B", e[e.MienNam18C = 4] = "MienNam18C", e[e.MienNam18Ava18B = 5] = "MienNam18Ava18B"
                    }(n || (n = {})), t.GameType = n;
                const r = {
                    toString(e) {
                        switch (e) {
                            case n.MienBac1:
                                return "Miá»n Báº¯c 1";
                            case n.MienBac2:
                                return "Miá»n Báº¯c 2";
                            case n.MienNam18A:
                                return "Miá»n Nam 18A";
                            case n.MienNam18B:
                                return "Miá»n Nam 18B";
                            case n.MienNam18C:
                                return "Miá»n Nam 18C";
                            case n.MienNam18Ava18B:
                                return "Miá»n Nam 18A&B";
                            default:
                                return "N/A"
                        }
                    }
                };
                t.GameTypeHelper = r
            },
            4544: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.BetTypeHelper = t.BetType = void 0,
                    function(e) {
                        e[e.De = 0] = "De", e[e.Lo = 1] = "Lo", e[e.Xien2 = 2] = "Xien2", e[e.Xien3 = 3] = "Xien3", e[e.Xien4 = 4] = "Xien4", e[e.DeTruot = 5] = "DeTruot", e[e.LoTruot = 6] = "LoTruot", e[e.HaiDDau = 7] = "HaiDDau", e[e.HaiDDuoi = 8] = "HaiDDuoi", e[e.HaiD27Lo = 9] = "HaiD27Lo", e[e.BaDDau = 10] = "BaDDau", e[e.BaDDuoi = 11] = "BaDDuoi", e[e.BaD23Lo = 12] = "BaD23Lo", e[e.BonDDuoi = 13] = "BonDDuoi", e[e.BonD20Lo = 14] = "BonD20Lo", e[e.HaiD18Lo = 15] = "HaiD18Lo", e[e.HaiD7Lo = 16] = "HaiD7Lo", e[e.BaD17Lo = 17] = "BaD17Lo", e[e.BaD7Lo = 18] = "BaD7Lo", e[e.BonD16Lo = 19] = "BonD16Lo", e[e.LoLive = 20] = "LoLive", e[e.DeDau = 21] = "DeDau", e[e.DeGiaiNhat = 22] = "DeGiaiNhat", e[e.DeDauGiaiNhat = 23] = "DeDauGiaiNhat", e[e.DeThanTai4 = 24] = "DeThanTai4", e[e.DeDauThanTai4 = 25] = "DeDauThanTai4", e[e.BaD23LoLive = 26] = "BaD23LoLive", e[e.HaiD18LoLive = 27] = "HaiD18LoLive", e[e.BaD17LoLive = 28] = "BaD17LoLive", e[e.LoDau = 29] = "LoDau", e[e.HaiD18LoDau = 30] = "HaiD18LoDau"
                    }(n || (n = {})), t.BetType = n;
                const r = {
                    toString(e) {
                        switch (e) {
                            case n.De:
                                return "Äá»";
                            case n.Lo:
                                return "LÃ´";
                            case n.Xien2:
                                return "XiÃªn 2";
                            case n.Xien3:
                                return "XiÃªn 3";
                            case n.Xien4:
                                return "XiÃªn 4";
                            case n.DeTruot:
                                return "Äá» TrÆ°á»£t";
                            case n.LoTruot:
                                return "LÃ´ TrÆ°á»£t";
                            case n.HaiDDau:
                                return "2D Äáº§u";
                            case n.HaiDDuoi:
                                return "2D ÄuÃ´i";
                            case n.HaiD27Lo:
                                return "2D 27LÃ´";
                            case n.BaDDau:
                                return "3D Äáº§u";
                            case n.BaDDuoi:
                                return "3D ÄuÃ´i";
                            case n.BaD23Lo:
                                return "3D 23LÃ´";
                            case n.BonDDuoi:
                                return "4D ÄuÃ´i";
                            case n.BonD20Lo:
                                return "4D 20LÃ´";
                            case n.HaiD18Lo:
                                return "2D 18LÃ´";
                            case n.HaiD7Lo:
                                return "2D 7LÃ´";
                            case n.BaD17Lo:
                                return "3D 17LÃ´";
                            case n.BaD7Lo:
                                return "3D 7LÃ´";
                            case n.BonD16Lo:
                                return "4D 16LÃ´";
                            case n.LoLive:
                                return "LÃ´ Live";
                            case n.DeDau:
                                return "Äá» Äáº§u";
                            case n.DeGiaiNhat:
                                return "Äá» Giáº£i 1";
                            case n.DeDauGiaiNhat:
                                return "Äá» Äáº§u Giáº£i 1";
                            case n.DeThanTai4:
                                return "Äá» Tháº§n TÃ i";
                            case n.DeDauThanTai4:
                                return "Äá» Äáº§u Tháº§n TÃ i";
                            case n.BaD23LoLive:
                                return "3D 23LÃ´ Live";
                            case n.HaiD18LoLive:
                                return "2D 18LÃ´ Live";
                            case n.BaD17LoLive:
                                return "3D 17LÃ´ Live";
                            case n.LoDau:
                                return "LÃ´ Äáº§u";
                            case n.HaiD18LoDau:
                                return "2D 18LÃ´ Äáº§u";
                            default:
                                return "N/A"
                        }
                    }
                };
                t.BetTypeHelper = r
            },
            4140: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.GameTypeHelper = t.GameType = void 0,
                    function(e) {
                        e[e.MienBac = 0] = "MienBac", e[e.MienNam = 1] = "MienNam"
                    }(n || (n = {})), t.GameType = n;
                const r = {
                    toString(e) {
                        switch (e) {
                            case n.MienBac:
                                return "Miá»n Báº¯c";
                            case n.MienNam:
                                return "Miá»n Nam";
                            default:
                                return "N/A"
                        }
                    }
                };
                t.GameTypeHelper = r
            },
            9641: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.RealtimeLocalChannelName = t.RealtimeChannelName = void 0,
                    function(e) {
                        e.GENERAL_NOTIFICATION_SECTION_AGENT = "general:notification:section:agent", e.GENERAL_NOTIFICATION_SECTION_PLAYER = "general:notification:section:player", e.SELF = "self", e.IDENTITY_ANCESTOR_USERID = "identity:ancestor", e.PRODUCTION_SEN_CASINO_GAMETYPE_AREANUMBER = "product:sen-casino", e.PRODUCTION_LOTTERY = "product:lottery", e.PRODUCTION_LOTTERY789 = "product:lottery789"
                    }(t.RealtimeChannelName || (t.RealtimeChannelName = {})),
                    function(e) {
                        e.GENERAL = "general", e.SELF = "self", e.ANCESTOR = "ancestor", e.SEN_CASINO = "sen-casino", e.LOTTERY = "lottery", e.LOTTERY789 = "lottery789"
                    }(t.RealtimeLocalChannelName || (t.RealtimeLocalChannelName = {}))
            },
            8659: (e, t) => {
                "use strict";
                var n;
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.GameTypeHelper = t.GameType = void 0,
                    function(e) {
                        e[e.Sedie = 0] = "Sedie"
                    }(n || (n = {})), t.GameType = n;
                const r = {
                    toString(e) {
                        if (e === n.Sedie) return "XÃ³c ÄÄ©a"
                    }
                };
                t.GameTypeHelper = r
            },
            1876: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(3720)),
                    s = r(n(7393));
                t.default = class {
                    constructor() {
                        this.notification = new i.default, this.server = new s.default
                    }
                    get Notification() {
                        return this.notification
                    }
                    get Server() {
                        return this.server
                    }
                }
            },
            3720: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Communication}/notifications/player/notification`
                    }
                    async read(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/${e.Id}/read`)
                    }
                    async getNotificationsOnSection() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/section`)
                    }
                    async getNotificationsByCategory(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`, `category=${e.Category}`];
                        return e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/category?${t.join("&")}`)
                    }
                }
            },
            7393: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Communication}/servers`
                    }
                    async currentDateTime() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/current-date-time`)
                    }
                }
            },
            4217: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(4478),
                    s = r(n(380)),
                    o = r(n(7724));
                t.default = class {
                    constructor() {
                        this.gamePlayTicket = new s.default, this.gamePlayTicketItem = new o.default
                    }
                    get Ticket() {
                        return this.gamePlayTicket
                    }
                    get TicketItem() {
                        return this.gamePlayTicketItem
                    }
                    get baseUrl() {
                        return `${i.Lotus.Config.Urls.Lottery}/game-play/player`
                    }
                    async play(e) {
                        return await i.Lotus.RestClient.post(`${this.baseUrl}/play`, e)
                    }
                }
            },
            380: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/game-play/player/tickets`
                    }
                    async latest(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), !0 === e.Refresh && t.push(`refresh=${e.Refresh}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/latest?${t.join("&")}`)
                    }
                    async current(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/current?${t.join("&")}`)
                    }
                    async checkTx(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/check-tx`, {
                            TxList: e.TxList
                        })
                    }
                }
            },
            7724: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/game-play/player/ticket-items`
                    }
                    async getItemsByTicketNumbers(e) {
                        const t = [];
                        return e.TicketNumbers.forEach((e => {
                            t.push(`tNrs=${e}`)
                        })), e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/list-by-tickets?${t.join("&")}`)
                    }
                    async getItemsByTerm(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/list-by-term?${t.join("&")}`)
                    }
                }
            },
            2210: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    async getAll() {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery}/user-game-settings/player`)
                    }
                    async getGameSettings() {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery}/user-game-settings/player`)
                    }
                    async getGamePayouts() {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery}/share-holders/player`)
                    }
                }
            },
            73: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(202));
                t.default = class {
                    constructor() {
                        this.lotteryCommandHelper = new i.default
                    }
                    get LotteryCommand() {
                        return this.lotteryCommandHelper
                    }
                }
            },
            202: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(6336),
                    i = n(1069);

                function* s(e, t) {
                    for (let n = 0; n < e.length; n++)
                        if (1 === t) yield [e[n]];
                        else {
                            let r = s(e.slice(n + 1, e.length), t - 1);
                            for (let t of r) yield [e[n], ...t]
                        }
                }
                t.default = class {
                    constructor() {}
                    parse(e) {
                        if (!e) throw new Error("input is null");
                        const t = [],
                            n = e.trim().split(/[.\n]/).filter((e => e.trim().length > 0));
                        if (!n || !n.length) return t;
                        for (let e = 0; e < n.length; e++) {
                            const r = n[e].trim().replace(/[^a-zA-Z0-9, ]/g, "").replace(/ {2,}/g, " ");
                            let [s, o, a, ...u] = r.match(/\S+/g);
                            if (o && "xq" === o.trim().toLowerCase()) {
                                if (!u || 0 === u.length) {
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: s,
                                        betTypeValue: o,
                                        amountValue: a,
                                        numbersValue: u
                                    }));
                                    continue
                                } [i.BetType.Xien2, i.BetType.Xien3, i.BetType.Xien4].forEach((r => {
                                    const o = this.combineNumber(u, r),
                                        l = r === i.BetType.Xien2 ? "x2" : r === i.BetType.Xien3 ? "x3" : "x4";
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: s,
                                        betTypeValue: l,
                                        amountValue: a,
                                        numbersValue: o
                                    }))
                                }))
                            } else t.push(this.parseInterval({
                                lineIndex: e,
                                lineContent: n[e],
                                gameTypeValue: s,
                                betTypeValue: o,
                                amountValue: a,
                                numbersValue: u
                            }))
                        }
                        return t
                    }
                    parseInterval(e) {
                        const t = {
                                LineIndex: e.lineIndex,
                                LineContent: e.lineContent,
                                Data: []
                            },
                            n = this.parseGameTypeInternal(e.gameTypeValue);
                        if (null === n) return console.warn(`Line=${e.lineIndex} is error GameType=${e.gameTypeValue}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin Ä‘Ã i má»Ÿ thÆ°á»Ÿng", t;
                        const r = this.parseBetTypeInternal(e.betTypeValue);
                        if (null === r) return console.warn(`Line=${e.lineIndex} is error BetType=${e.betTypeValue}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin kiá»ƒu cÆ°á»£c", t;
                        const i = this.parseAmountInternal(e.amountValue);
                        if (null === i) return console.warn(`Line=${e.lineIndex} is error Amount=${e.amountValue}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin Ä‘iá»ƒm cÆ°á»£c", t;
                        const s = e.numbersValue.join(" "),
                            o = this.parseNumbersInternal(s, r);
                        if (null === o) return console.warn(`Line=${e.lineIndex} is error numbersList=${s}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin sá»‘ cÆ°á»£c", t;
                        for (let e = 0; e < o.length; e++) {
                            const s = o[e];
                            t.Data.push({
                                GameType: n,
                                BetType: r,
                                Amount: i,
                                Numbers: s
                            })
                        }
                        return t
                    }
                    parseGameTypeInternal(e) {
                        if (!e) return console.error("Game Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "mb1":
                                return r.GameType.MienBac1;
                            case "mb2":
                                return r.GameType.MienBac2;
                            case "18a":
                                return r.GameType.MienNam18A;
                            case "18b":
                                return r.GameType.MienNam18B;
                            case "18c":
                                return r.GameType.MienNam18C;
                            case "18ab":
                                return r.GameType.MienNam18Ava18B;
                            default:
                                return null
                        }
                    }
                    parseBetTypeInternal(e) {
                        if (!e) return console.error("Bet Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "de":
                                return i.BetType.De;
                            case "lo":
                                return i.BetType.Lo;
                            case "x2":
                                return i.BetType.Xien2;
                            case "x3":
                                return i.BetType.Xien3;
                            case "x4":
                                return i.BetType.Xien4;
                            case "detruot":
                                return i.BetType.DeTruot;
                            case "lotruot":
                                return i.BetType.LoTruot;
                            case "live":
                                return i.BetType.LoLive;
                            case "dedau":
                                return i.BetType.DeDau;
                            case "deg1":
                                return i.BetType.DeGiaiNhat;
                            case "dedaug1":
                                return i.BetType.DeDauGiaiNhat;
                            case "dedautt":
                                return i.BetType.DeDauThanTai4;
                            case "dett":
                                return i.BetType.DeThanTai4;
                            case "2ddau":
                                return i.BetType.HaiDDau;
                            case "2dduoi":
                                return i.BetType.HaiDDuoi;
                            case "2d27lo":
                                return i.BetType.HaiD27Lo;
                            case "3ddau":
                                return i.BetType.BaDDau;
                            case "3dduoi":
                                return i.BetType.BaDDuoi;
                            case "3d23lo":
                                return i.BetType.BaD23Lo;
                            case "4dduoi":
                                return i.BetType.BonDDuoi;
                            case "4d20lo":
                                return i.BetType.BonD20Lo;
                            case "2d18lo":
                                return i.BetType.HaiD18Lo;
                            case "2d7lo":
                                return i.BetType.HaiD7Lo;
                            case "3d17lo":
                                return i.BetType.BaD17Lo;
                            case "3d7lo":
                                return i.BetType.BaD7Lo;
                            case "4d16lo":
                                return i.BetType.BonD16Lo;
                            default:
                                return null
                        }
                    }
                    parseAmountInternal(e) {
                        if (!e) return console.error("Amount input is null"), null;
                        e = e.trim();
                        const t = Number(e);
                        return Number.isInteger(t) && t > 0 ? t : null
                    }
                    parseNumbersInternal(e, t) {
                        if (!e) return console.error("Number input is null"), null;
                        const n = [],
                            r = (e = e.trim().replace(/\s+,/g, ",").replace(/,\s+/g, ",")).match(/\d+/g),
                            s = this.getNumberDigits(t);
                        switch (t) {
                            case i.BetType.Xien2:
                                if (r.length % 2 != 0) return null;
                                for (let e = 0; e < r.length; e += 2) {
                                    if (!this.validPlayNumber(r[e], s) || !this.validPlayNumber(r[e + 1], s)) return null;
                                    n.push([r[e], r[e + 1]])
                                }
                                return n;
                            case i.BetType.Xien3:
                                if (r.length % 3 != 0) return null;
                                for (let e = 0; e < r.length; e += 3) {
                                    if (!(this.validPlayNumber(r[e], s) && this.validPlayNumber(r[e + 1], s) && this.validPlayNumber(r[e + 2], s))) return null;
                                    n.push([r[e], r[e + 1], r[e + 2]])
                                }
                                return n;
                            case i.BetType.Xien4:
                                if (r.length % 4 != 0) return null;
                                for (let e = 0; e < r.length; e += 4) {
                                    if (!(this.validPlayNumber(r[e], s) && this.validPlayNumber(r[e + 1], s) && this.validPlayNumber(r[e + 2], s) && this.validPlayNumber(r[e + 3], s))) return null;
                                    n.push([r[e], r[e + 1], r[e + 2], r[e + 3]])
                                }
                                return n;
                            case i.BetType.LoTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e].match(/\d+/g);
                                    if (r.length < 4) return null;
                                    n.push([]);
                                    for (let t = 0; t < r.length; t++) {
                                        const i = r[t];
                                        if (!this.validPlayNumber(i, s)) return null;
                                        n[e].push(i)
                                    }
                                }
                                return n
                            }
                            case i.BetType.DeTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e].match(/\d+/g);
                                    if (r.length < 10) return null;
                                    n.push([]);
                                    for (let t = 0; t < r.length; t++) {
                                        const i = r[t];
                                        if (!this.validPlayNumber(i, s)) return null;
                                        n[e].push(i)
                                    }
                                }
                                return n
                            }
                            default:
                                for (let e = 0; e < r.length; e += 1) {
                                    if (!this.validPlayNumber(r[e], s)) return null;
                                    n.push([r[e]])
                                }
                                return n
                        }
                    }
                    validPlayNumber(e, t = 2) {
                        if (!e) return !1;
                        if ((e = e.trim()).length !== t) return !1;
                        const n = Number(e);
                        return !(!Number.isInteger(n) || n < 0) && (!(2 === t && n >= 100) && (!(3 === t && n >= 1e3) && !(4 === t && n >= 1e4)))
                    }
                    getNumberDigits(e) {
                        switch (e) {
                            case i.BetType.BaD17Lo:
                            case i.BetType.BaD23Lo:
                            case i.BetType.BaD7Lo:
                            case i.BetType.BaDDau:
                            case i.BetType.BaDDuoi:
                                return 3;
                            case i.BetType.BonD16Lo:
                            case i.BetType.BonD20Lo:
                            case i.BetType.BonDDuoi:
                                return 4;
                            default:
                                return 2
                        }
                    }
                    combineNumber(e, t) {
                        const n = e.join(" ").match(/\d+/g).reduce(((e, t) => e.includes(t) ? e : [...e, t]), []);
                        let r;
                        switch (t) {
                            case i.BetType.Xien2:
                                r = Array.from(s(n, 2));
                                break;
                            case i.BetType.Xien3:
                                r = Array.from(s(n, 3));
                                break;
                            case i.BetType.Xien4:
                                r = Array.from(s(n, 4));
                                break;
                            default:
                                r = []
                        }
                        return r.map((e => e.join(",")))
                    }
                }
            },
            5068: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(7818)),
                    s = r(n(9381)),
                    o = r(n(2210)),
                    a = r(n(6491)),
                    u = r(n(6810)),
                    l = r(n(4217)),
                    c = n(4478),
                    f = r(n(5274)),
                    d = r(n(73));
                t.default = class {
                    constructor() {
                        this.report = new i.default, this.term = new s.default, this.gameSetting = new o.default, this.lotteryResult = new u.default, this.gamePlay = new l.default, this.odds = new a.default, this.helper = new d.default
                    }
                    get Report() {
                        return this.report
                    }
                    get Term() {
                        return this.term
                    }
                    get GameSetting() {
                        return this.gameSetting
                    }
                    get Odds() {
                        return this.odds
                    }
                    get LotteryResult() {
                        return this.lotteryResult
                    }
                    get GamePlay() {
                        return this.gamePlay
                    }
                    get Helper() {
                        return this.helper
                    }
                    get Realtime() {
                        if (null == c.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == c.Lotus.Realtime.Client.auth || !c.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new f.default), this.realtime
                    }
                }
            },
            5274: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    i = n(4478),
                    s = n(9641);
                class o extends r.EventEmitter {
                    constructor() {
                        super(), this.generalChannel = null, this.selfChannel = null, this.ancestorsChannels = []
                    }
                    configure() {}
                    async subcribe() {
                        this.subscribeGeneralChannel(), this.subscribeSelfChannel();
                        const e = (await i.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e && this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        })
                    }
                    async unsubscribe() {
                        null !== this.generalChannel && this.generalChannel.unsubscribe(), null !== this.selfChannel && this.selfChannel.unsubscribe(), null !== this.ancestorsChannels && this.ancestorsChannels.forEach((e => {
                            e.unsubscribe()
                        }))
                    }
                    subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter((e => e.length > 0)).slice(1);
                        if (n)
                            for (let e = 0; e < n.length; e++) n[e] && (t = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_LOTTERY}:ancestor:${n[e]}`), t.subscribe((e => {
                                this.emit(`${s.RealtimeLocalChannelName.LOTTERY}:ancestor:event:${e.name}`, e.data, e)
                            })), this.ancestorsChannels.push(t))
                    }
                    subscribeGeneralChannel() {
                        this.generalChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_LOTTERY}:general`), this.generalChannel.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.LOTTERY}:general:event:${e.name}`, e.data, e)
                        }))
                    }
                    subscribeSelfChannel() {
                        this.selfChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_LOTTERY}:self:${i.Lotus.Realtime.Client.auth.clientId}`), this.selfChannel.subscribe((e => {
                            this.emit(`${s.RealtimeLocalChannelName.LOTTERY}:self:event:${e.name}`, e.data, e)
                        }))
                    }
                }
                t.default = o
            },
            6810: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/lottery-results/player`
                    }
                    async getCaishen4Result(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/caishen4?date=${e.date}`)
                    }
                    async getNorthernResult(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/northern?date=${e.date}`)
                    }
                    async getSouthernResults(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/southern?date=${e.date}`)
                    }
                    async getAllResults(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}?date=${e.date}`)
                    }
                }
            },
            6491: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/odds/player`
                    }
                    async getOdds(e) {
                        const t = [`term=${e.Term}`];
                        return e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}.php?${t.join("&")}`)
                    }
                    async getLiveOdds(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/live?term=${e.Term}&gameType=${e.GameType}&betType=${e.BetType}`)
                    }
                }
            },
            9351: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/player/cancelation`
                    }
                    async getTicketItems(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            7818: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(9351)),
                    s = r(n(2250));
                t.default = class {
                    constructor() {
                        this.statement = new s.default, this.cancelation = new i.default
                    }
                    get Statement() {
                        return this.statement
                    }
                    get Cancelation() {
                        return this.cancelation
                    }
                }
            },
            2250: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/reports/player/statements`
                    }
                    async getReportGroupByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`)
                    }
                    async getReportGroupByBetType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/bet-type?date=${e.Date}&gameType=${e.GameType}`)
                    }
                    async getTicketItems(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`, `betType=${e.BetType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            9381: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/terms/player`
                    }
                    async current() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/current`)
                    }
                }
            },
            3218: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(4478),
                    s = r(n(9117)),
                    o = r(n(1268));
                t.default = class {
                    constructor() {
                        this.gamePlayTicket = new s.default, this.gamePlayTicketItem = new o.default
                    }
                    get Ticket() {
                        return this.gamePlayTicket
                    }
                    get TicketItem() {
                        return this.gamePlayTicketItem
                    }
                    get baseUrl() {
                        return `${i.Lotus.Config.Urls.Lottery789}/game-play/player`
                    }
                    async play(e) {
                        return await i.Lotus.RestClient.post(`${this.baseUrl}/play`, e)
                    }
                    async cancelTicket(e) {
                        return await i.Lotus.RestClient.post(`${this.baseUrl}/cancel-ticket`, e)
                    }
                }
            },
            9117: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/game-play/player/tickets`
                    }
                    async latest(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), !0 === e.Refresh && t.push(`refresh=${e.Refresh}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/latest?${t.join("&")}`)
                    }
                    async current(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/current?${t.join("&")}`)
                    }
                    async checkTx(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/check-tx`, {
                            TxList: e.TxList
                        })
                    }
                }
            },
            1268: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/game-play/player/ticket-items`
                    }
                    async getItemsByTicketNumbers(e) {
                        const t = [`gameType=${e.GameType}`];
                        return e.TicketNumbers.forEach((e => {
                            t.push(`tNrs=${e}`)
                        })), e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`), await r.Lotus.RestClient.get(`${this.baseUrl}/list-by-tickets?${t.join("&")}`)
                    }
                    async getItemsByTerm(e) {
                        const t = [];
                        return e && (e.Limit > 0 && t.push(`limit=${e.Limit}`), e.LastId && t.push(`lastId=${e.LastId}`)), await r.Lotus.RestClient.get(`${this.baseUrl}/list-by-term?${t.join("&")}`)
                    }
                }
            },
            38: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    async getAll() {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery789}/user-game-settings/player`)
                    }
                    async getGameSettings() {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery789}/user-game-settings/player`)
                    }
                    async getGamePayouts() {
                        return await r.Lotus.RestClient.get(`${r.Lotus.Config.Urls.Lottery789}/share-holders/player`)
                    }
                }
            },
            2119: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(9978));
                t.default = class {
                    constructor() {
                        this.lotteryCommandHelper = new i.default
                    }
                    get LotteryCommand() {
                        return this.lotteryCommandHelper
                    }
                }
            },
            9978: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4140),
                    i = n(4544);

                function* s(e, t) {
                    for (let n = 0; n < e.length; n++)
                        if (1 === t) yield [e[n]];
                        else {
                            let r = s(e.slice(n + 1, e.length), t - 1);
                            for (let t of r) yield [e[n], ...t]
                        }
                }
                t.default = class {
                    constructor() {}
                    parse(e) {
                        if (!e) throw new Error("input is null");
                        const t = [],
                            n = e.trim().split(/[.\n]/).filter((e => e.trim().length > 0));
                        if (!n || !n.length) return t;
                        for (let e = 0; e < n.length; e++) {
                            const r = n[e].trim().replace(/[^a-zA-Z0-9, ]/g, "").replace(/ {2,}/g, " ");
                            let [s, o, a, ...u] = r.match(/\S+/g);
                            if (o && "xq" === o.trim().toLowerCase()) {
                                if (!u || 0 === u.length) {
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: s,
                                        betTypeValue: o,
                                        amountValue: a,
                                        numbersValue: u
                                    }));
                                    continue
                                } [i.BetType.Xien2, i.BetType.Xien3, i.BetType.Xien4].forEach((r => {
                                    const o = this.combineNumber(u, r),
                                        l = r === i.BetType.Xien2 ? "x2" : r === i.BetType.Xien3 ? "x3" : "x4";
                                    t.push(this.parseInterval({
                                        lineIndex: e,
                                        lineContent: n[e],
                                        gameTypeValue: s,
                                        betTypeValue: l,
                                        amountValue: a,
                                        numbersValue: o
                                    }))
                                }))
                            } else t.push(this.parseInterval({
                                lineIndex: e,
                                lineContent: n[e],
                                gameTypeValue: s,
                                betTypeValue: o,
                                amountValue: a,
                                numbersValue: u
                            }))
                        }
                        return t
                    }
                    parseInterval(e) {
                        const t = {
                                LineIndex: e.lineIndex,
                                LineContent: e.lineContent,
                                Data: []
                            },
                            n = this.parseGameTypeInternal(e.gameTypeValue);
                        if (null === n) return console.warn(`Line=${e.lineIndex} is error GameType=${e.gameTypeValue}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin Ä‘Ã i má»Ÿ thÆ°á»Ÿng", t;
                        const r = this.parseBetTypeInternal(e.betTypeValue);
                        if (null === r) return console.warn(`Line=${e.lineIndex} is error BetType=${e.betTypeValue}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin kiá»ƒu cÆ°á»£c", t;
                        const i = this.parseAmountInternal(e.amountValue);
                        if (null === i) return console.warn(`Line=${e.lineIndex} is error Amount=${e.amountValue}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin Ä‘iá»ƒm cÆ°á»£c", t;
                        const s = e.numbersValue.join(" "),
                            o = this.parseNumbersInternal(s, r);
                        if (null === o) return console.warn(`Line=${e.lineIndex} is error numbersList=${s}`), t.Error = "KhÃ´ng cÃ³ thÃ´ng tin sá»‘ cÆ°á»£c", t;
                        for (let e = 0; e < o.length; e++) {
                            const s = o[e];
                            t.Data.push({
                                GameType: n,
                                BetType: r,
                                Amount: i,
                                Numbers: s
                            })
                        }
                        return t
                    }
                    parseGameTypeInternal(e) {
                        if (!e) return console.error("Game Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "mb":
                                return r.GameType.MienBac;
                            case "mn":
                                return r.GameType.MienNam;
                            default:
                                return null
                        }
                    }
                    parseBetTypeInternal(e) {
                        if (!e) return console.error("Bet Type input is null"), null;
                        switch ((e = e.trim()).toLowerCase()) {
                            case "de":
                                return i.BetType.De;
                            case "lo":
                                return i.BetType.Lo;
                            case "x2":
                                return i.BetType.Xien2;
                            case "x3":
                                return i.BetType.Xien3;
                            case "x4":
                                return i.BetType.Xien4;
                            case "detruot":
                                return i.BetType.DeTruot;
                            case "lotruot":
                                return i.BetType.LoTruot;
                            case "live":
                                return i.BetType.LoLive;
                            case "dedau":
                                return i.BetType.DeDau;
                            case "deg1":
                                return i.BetType.DeGiaiNhat;
                            case "dedaug1":
                                return i.BetType.DeDauGiaiNhat;
                            case "dedautt":
                                return i.BetType.DeDauThanTai4;
                            case "dett":
                                return i.BetType.DeThanTai4;
                            case "2ddau":
                                return i.BetType.HaiDDau;
                            case "2dduoi":
                                return i.BetType.HaiDDuoi;
                            case "2d27lo":
                                return i.BetType.HaiD27Lo;
                            case "3ddau":
                                return i.BetType.BaDDau;
                            case "3dduoi":
                                return i.BetType.BaDDuoi;
                            case "3d23lo":
                                return i.BetType.BaD23Lo;
                            case "4dduoi":
                                return i.BetType.BonDDuoi;
                            case "4d20lo":
                                return i.BetType.BonD20Lo;
                            case "2d18lo":
                                return i.BetType.HaiD18Lo;
                            case "2d7lo":
                                return i.BetType.HaiD7Lo;
                            case "3d17lo":
                                return i.BetType.BaD17Lo;
                            case "3d7lo":
                                return i.BetType.BaD7Lo;
                            case "4d16lo":
                                return i.BetType.BonD16Lo;
                            default:
                                return null
                        }
                    }
                    parseAmountInternal(e) {
                        if (!e) return console.error("Amount input is null"), null;
                        e = e.trim();
                        const t = Number(e);
                        return Number.isInteger(t) && t > 0 ? t : null
                    }
                    parseNumbersInternal(e, t) {
                        if (!e) return console.error("Number input is null"), null;
                        const n = [],
                            r = (e = e.trim().replace(/\s+,/g, ",").replace(/,\s+/g, ",")).match(/\d+/g),
                            s = this.getNumberDigits(t);
                        switch (t) {
                            case i.BetType.Xien2:
                                if (r.length % 2 != 0) return null;
                                for (let e = 0; e < r.length; e += 2) {
                                    if (!this.validPlayNumber(r[e], s) || !this.validPlayNumber(r[e + 1], s)) return null;
                                    n.push([r[e], r[e + 1]])
                                }
                                return n;
                            case i.BetType.Xien3:
                                if (r.length % 3 != 0) return null;
                                for (let e = 0; e < r.length; e += 3) {
                                    if (!(this.validPlayNumber(r[e], s) && this.validPlayNumber(r[e + 1], s) && this.validPlayNumber(r[e + 2], s))) return null;
                                    n.push([r[e], r[e + 1], r[e + 2]])
                                }
                                return n;
                            case i.BetType.Xien4:
                                if (r.length % 4 != 0) return null;
                                for (let e = 0; e < r.length; e += 4) {
                                    if (!(this.validPlayNumber(r[e], s) && this.validPlayNumber(r[e + 1], s) && this.validPlayNumber(r[e + 2], s) && this.validPlayNumber(r[e + 3], s))) return null;
                                    n.push([r[e], r[e + 1], r[e + 2], r[e + 3]])
                                }
                                return n;
                            case i.BetType.LoTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e].match(/\d+/g);
                                    if (r.length < 4) return null;
                                    n.push([]);
                                    for (let t = 0; t < r.length; t++) {
                                        const i = r[t];
                                        if (!this.validPlayNumber(i, s)) return null;
                                        n[e].push(i)
                                    }
                                }
                                return n
                            }
                            case i.BetType.DeTruot: {
                                const t = e.split(" ");
                                for (let e = 0; e < t.length; e++) {
                                    const r = t[e].match(/\d+/g);
                                    if (r.length < 10) return null;
                                    n.push([]);
                                    for (let t = 0; t < r.length; t++) {
                                        const i = r[t];
                                        if (!this.validPlayNumber(i, s)) return null;
                                        n[e].push(i)
                                    }
                                }
                                return n
                            }
                            default:
                                for (let e = 0; e < r.length; e += 1) {
                                    if (!this.validPlayNumber(r[e], s)) return null;
                                    n.push([r[e]])
                                }
                                return n
                        }
                    }
                    validPlayNumber(e, t = 2) {
                        if (!e) return !1;
                        if ((e = e.trim()).length !== t) return !1;
                        const n = Number(e);
                        return !(!Number.isInteger(n) || n < 0) && (!(2 === t && n >= 100) && (!(3 === t && n >= 1e3) && !(4 === t && n >= 1e4)))
                    }
                    getNumberDigits(e) {
                        switch (e) {
                            case i.BetType.BaD17Lo:
                            case i.BetType.BaD23Lo:
                            case i.BetType.BaD7Lo:
                            case i.BetType.BaDDau:
                            case i.BetType.BaDDuoi:
                                return 3;
                            case i.BetType.BonD16Lo:
                            case i.BetType.BonD20Lo:
                            case i.BetType.BonDDuoi:
                                return 4;
                            default:
                                return 2
                        }
                    }
                    combineNumber(e, t) {
                        const n = e.join(" ").match(/\d+/g).reduce(((e, t) => e.includes(t) ? e : [...e, t]), []);
                        let r;
                        switch (t) {
                            case i.BetType.Xien2:
                                r = Array.from(s(n, 2));
                                break;
                            case i.BetType.Xien3:
                                r = Array.from(s(n, 3));
                                break;
                            case i.BetType.Xien4:
                                r = Array.from(s(n, 4));
                                break;
                            default:
                                r = []
                        }
                        return r.map((e => e.join(",")))
                    }
                }
            },
            9614: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(7792)),
                    s = r(n(4502)),
                    o = r(n(38)),
                    a = r(n(4662)),
                    u = r(n(9182)),
                    l = r(n(3218)),
                    c = n(4478),
                    f = r(n(2903)),
                    d = r(n(2119)),
                    h = r(n(3224));
                t.default = class {
                    constructor() {
                        this.report = new i.default, this.term = new s.default, this.gameSetting = new o.default, this.lotteryResult = new u.default, this.gamePlay = new l.default, this.odds = new a.default, this.resultStats = new h.default, this.helper = new d.default
                    }
                    get Report() {
                        return this.report
                    }
                    get Term() {
                        return this.term
                    }
                    get GameSetting() {
                        return this.gameSetting
                    }
                    get Odds() {
                        return this.odds
                    }
                    get LotteryResult() {
                        return this.lotteryResult
                    }
                    get GamePlay() {
                        return this.gamePlay
                    }
                    get ResultStats() {
                        return this.resultStats
                    }
                    get Helper() {
                        return this.helper
                    }
                    get Realtime() {
                        if (null == c.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == c.Lotus.Realtime.Client.auth || !c.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new f.default), this.realtime
                    }
                }
            },
            2903: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    i = n(9641),
                    s = n(4478);
                class o extends r.EventEmitter {
                    constructor() {
                        super(), this.generalChannel = null, this.selfChannel = null, this.ancestorsChannels = []
                    }
                    configure() {}
                    async subcribe() {
                        this.subscribeGeneralChannel(), this.subscribeSelfChannel();
                        const e = (await s.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e && this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        })
                    }
                    unsubscribe() {
                        this.generalChannel && this.generalChannel.unsubscribe(), this.selfChannel && this.selfChannel.unsubscribe(), this.ancestorsChannels && this.ancestorsChannels.forEach((e => {
                            e.unsubscribe()
                        }))
                    }
                    subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter((e => e.length > 0)).slice(1);
                        if (n)
                            for (let e = 0; e < n.length; e++) n[e] && (t = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_LOTTERY789}:ancestor:${n[e]}`), t.subscribe((e => {
                                this.emit(`${i.RealtimeLocalChannelName.LOTTERY789}:ancestor:event:${e.name}`, e.data, e)
                            })), this.ancestorsChannels.push(t))
                    }
                    subscribeGeneralChannel() {
                        this.generalChannel = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_LOTTERY789}:general`), this.generalChannel.subscribe((e => {
                            this.emit(`${i.RealtimeLocalChannelName.LOTTERY789}:general:event:${e.name}`, e.data, e)
                        }))
                    }
                    subscribeSelfChannel() {
                        this.selfChannel = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.PRODUCTION_LOTTERY789}:self:${s.Lotus.Realtime.Client.auth.clientId}`), this.selfChannel.subscribe((e => {
                            this.emit(`${i.RealtimeLocalChannelName.LOTTERY789}:self:event:${e.name}`, e.data, e)
                        }))
                    }
                }
                t.default = o
            },
            9182: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/lottery-results/player`
                    }
                    async getResultsByDate(e) {
                        const t = [`date=${e.Date}`];
                        return e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async getLatestResults(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/latest-results?gameType=${e.GameType}`)
                    }
                }
            },
            4662: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/odds/player.php`
                    }
                    async getOdds(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`];
                        return e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async getLiveOdds(e) {
                        const t = [`term=${e.Term}`, `gameType=${e.GameType}`];
                        return e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/live?${t.join("&")}`)
                    }
                }
            },
            7792: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(765));
                t.default = class {
                    constructor() {
                        this.statement = new i.default
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            765: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/reports/player/statements`
                    }
                    async getReportGroupByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`)
                    }
                    async getReportGroupByTerm(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/term?date=${e.Date}&gameType=${e.GameType}`)
                    }
                    async getReportGroupByBetType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/bet-type?date=${e.Date}&gameType=${e.GameType}&term=${e.Term}`)
                    }
                    async getTicketItems(e) {
                        const t = [`gameType=${e.GameType}`, `betType=${e.BetType}`, `term=${e.Term}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/ticket-items?${t.join("&")}`)
                    }
                }
            },
            2060: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {
                        this.MIN_TIMES_MISSING = 3, this.MIN_SEAMLESS = 3, this.MIN_DRAW_CONSECUTIVE = 3, this._northernCurrentSeamlessResult = [], this._northernCurrentNumberFrequenceResult = [], this._northernLastNumberFrequenceResult = [], this._northernNumberTimesMissing = []
                    }
                    init(e) {
                        this._northernCurrentSeamlessResult = this._getCurrentSeamlessResult(e.LastLotteryResults), this._northernNumberTimesMissing = this._getNumberMissingTimes(e.NumberTimesMissing), this._northernCurrentNumberFrequenceResult = this._getNumberFrequence(e.CurrentLotteryResult), this._northernLastNumberFrequenceResult = this._getLastNumberFrequenceResult(e.LastLotteryResults)
                    }
                    comment(e) {
                        if (null == e.Result || e.Result.length < 2) return null;
                        let t = [];
                        const n = e.Result.slice(-2),
                            r = this._northernCurrentNumberFrequenceResult.find((e => e.Number === n));
                        if (null == r) {
                            const e = this._northernCurrentSeamlessResult.find((e => e.Number === n));
                            null != e && t.push(`Cáº§u báº¡ch thá»§ Ä‘Ã£ vá» (Ä‘á»™ dÃ i ${e.Times+1} phiÃªn)`);
                            const r = this._northernNumberTimesMissing.find((e => e.Number === n));
                            null != r && t.push(`Gan ${r.TimesMissing} phiÃªn Ä‘Ã£ vá»`);
                            const i = this._northernLastNumberFrequenceResult.find((e => e.Number === n));
                            null != i && i.Times + 1 >= this.MIN_DRAW_CONSECUTIVE && t.push(`Vá» liÃªn tiáº¿p ${i.Times+1} phiÃªn`), this._northernCurrentNumberFrequenceResult.push({
                                Number: n,
                                Frequence: 1
                            })
                        } else r.Frequence++, t.push(`Vá» ${r.Frequence} nhÃ¡y`);
                        return t.length > 0 ? {
                            Number: n,
                            Comments: t
                        } : null
                    }
                    _getCurrentSeamlessResult(e) {
                        if (null == e || !Array.isArray(e)) return [];
                        const t = r.Lotus.Lottery789.ResultStats.SeamlessResult.lookupNorthernResult({
                                LotteryResults: e,
                                AllowedReverseResult: !1,
                                WinNumberFrequence: 1,
                                Type: 1
                            }).filter((e => e.Times >= this.MIN_SEAMLESS)),
                            n = [];
                        return t.forEach((e => {
                            if (!n.find((t => t.Number === e.Number))) {
                                const r = Math.max(...t.filter((t => t.Number === e.Number)).map((e => e.Times)));
                                n.push({
                                    Number: e.Number,
                                    Times: r
                                })
                            }
                        })), n
                    }
                    _getNumberMissingTimes(e) {
                        return null != e && Array.isArray(e) && e.filter((e => e.TimesMissing >= this.MIN_TIMES_MISSING)) || []
                    }
                    _getNumberFrequence(e) {
                        if (null == e) return [];
                        const t = [e.First || "", ...e.Second || [], ...e.Third || [], ...e.Fourth || [], ...e.Fiveth || [], ...e.Sixth || [], ...e.Seventh || [], e.Jackpot || ""],
                            n = [];
                        let r = null,
                            i = null;
                        for (let e of t) e.length < 2 || (r = e.slice(-2), i = n.find((e => e.Number === r)), null != i ? i.Frequence += 1 : n.push({
                            Number: r,
                            Frequence: 1
                        }));
                        return n
                    }
                    _getLastNumberFrequenceResult(e) {
                        if (null == e || !Array.isArray(e) || e.length < 2) return [];
                        const t = [];
                        for (let n of e) {
                            const e = [n.First || "", ...n.Second || [], ...n.Third || [], ...n.Fourth || [], ...n.Fiveth || [], ...n.Sixth || [], ...n.Seventh || [], n.Jackpot || ""],
                                r = [];
                            let i = null;
                            for (let t of e) t.length < 2 || (i = t.slice(-2), -1 === r.findIndex((e => e.Number === i)) && r.push({
                                Number: i,
                                Times: 1
                            }));
                            t.push(r)
                        }
                        const n = t[0];
                        for (const e of n)
                            for (let n = 1; n < t.length; n++) {
                                if (-1 === t[n].findIndex((t => t.Number === e.Number))) break;
                                e.Times++
                            }
                        return n
                    }
                }
            },
            3224: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(2060)),
                    s = r(n(1831)),
                    o = r(n(6236));
                t.default = class {
                    constructor() {
                        this.timesDrawn = new o.default, this.seamlessResult = new s.default, this.nothernResultCommentator = new i.default
                    }
                    get TimesDrawn() {
                        return this.timesDrawn
                    }
                    get SeamlessResult() {
                        return this.seamlessResult
                    }
                    get NothernResultCommentator() {
                        return this.nothernResultCommentator
                    }
                }
            },
            1831: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n;
                t.default = class {
                        constructor() {
                            this._northernIndexes = [], this._southernIndexes = [], this._northernIndexes = this._getNothernIndexes(), this._southernIndexes = this._getSouthernIndexes()
                        }
                        lookupNorthernResult(e = {
                            LotteryResults: [],
                            AllowedReverseResult: !0,
                            WinNumberFrequence: 1,
                            Type: n.Duoi
                        }) {
                            if (!e.LotteryResults || 0 === e.LotteryResults.length) return [];
                            let t = [],
                                r = null;
                            for (let n = e.LotteryResults.length - 1; n >= 0; n--) r = e.LotteryResults[n], t.push({
                                StringResult: `${r.Jackpot}${r.First}${r.Second.join("")}${r.Third.join("")}${r.Fourth.join("")}${r.Fiveth.join("")}${r.Sixth.join("")}${r.Seventh.join("")}`,
                                Results: this._getWinNumbers({
                                    lotteryResult: [r.First, ...r.Second, ...r.Third, ...r.Fourth, ...r.Fiveth, ...r.Sixth, ...r.Seventh, r.Jackpot],
                                    type: e.Type
                                })
                            });
                            return this.lookup({
                                Indexes: this._northernIndexes,
                                LotteryResults: t,
                                AllowedReverseResult: e.AllowedReverseResult,
                                WinNumberFrequence: e.WinNumberFrequence
                            })
                        }
                        getNorthernResultMaxSpan(e = {
                            LotteryResults: [],
                            Type: n.Duoi
                        }) {
                            const t = this.lookupNorthernResult({
                                LotteryResults: e.LotteryResults,
                                Type: e.Type,
                                AllowedReverseResult: !0,
                                WinNumberFrequence: 1
                            });
                            return this._getResultMaxSpan({
                                LookupResults: t
                            })
                        }
                        lookupSouthernResult(e = {
                            LotteryResults: [],
                            AllowedReverseResult: !0,
                            WinNumberFrequence: 1,
                            Type: n.Duoi
                        }) {
                            if (!e.LotteryResults || 0 === e.LotteryResults.length) return [];
                            let t = [],
                                r = null;
                            for (let n = e.LotteryResults.length - 1; n >= 0; n--) r = e.LotteryResults[n], t.push({
                                StringResult: `${r.Eighth}${r.Seventh}${r.Sixth.join("")}${r.Fiveth}${r.Fourth.join("")}${r.Third.join("")}${r.Second}${r.First}${r.Jackpot}`,
                                Results: this._getWinNumbers({
                                    lotteryResult: [r.Eighth, r.Seventh, ...r.Sixth, r.Fiveth, ...r.Fourth, ...r.Third, r.Second, r.First, r.Jackpot],
                                    type: e.Type
                                })
                            });
                            return this.lookup({
                                Indexes: this._southernIndexes,
                                LotteryResults: t,
                                AllowedReverseResult: e.AllowedReverseResult,
                                WinNumberFrequence: e.WinNumberFrequence
                            })
                        }
                        getSouthernResultMaxSpan(e = {
                            LotteryResults: [],
                            Type: n.Duoi
                        }) {
                            const t = this.lookupSouthernResult({
                                LotteryResults: e.LotteryResults,
                                Type: e.Type,
                                AllowedReverseResult: !0,
                                WinNumberFrequence: 1
                            });
                            return this._getResultMaxSpan({
                                LookupResults: t
                            })
                        }
                        lookup(e) {
                            const t = [];
                            let n, r, i = null,
                                s = null;
                            for (let o = 0; o < e.Indexes.length; o++)
                                if (!(e.AllowedReverseResult && e.Indexes[o][0] > e.Indexes[o][1]))
                                    for (let a = 0; a < e.LotteryResults.length; a++) {
                                        n = `${e.LotteryResults[a].StringResult[e.Indexes[o][0]]}${e.LotteryResults[a].StringResult[e.Indexes[o][1]]}`, r = `${e.LotteryResults[a].StringResult[e.Indexes[o][1]]}${e.LotteryResults[a].StringResult[e.Indexes[o][0]]}`;
                                        for (let u = a + 1; u < e.LotteryResults.length; u++) {
                                            i = !1, s = 0;
                                            const l = e.LotteryResults[u].Results.find((e => e.Number === n));
                                            if (l && (i = !0, s = l.Frequence), !0 === e.AllowedReverseResult && n !== r) {
                                                const t = e.LotteryResults[u].Results.find((e => e.Number === r));
                                                t && (i = !0, s += t.Frequence)
                                            }
                                            if (!(!0 === i && s >= e.WinNumberFrequence)) break;
                                            n = `${e.LotteryResults[u].StringResult[e.Indexes[o][0]]}${e.LotteryResults[u].StringResult[e.Indexes[o][1]]}`, r = `${e.LotteryResults[u].StringResult[e.Indexes[o][1]]}${e.LotteryResults[u].StringResult[e.Indexes[o][0]]}`, u === e.LotteryResults.length - 1 && t.push({
                                                Number: n,
                                                Index: e.Indexes[o],
                                                Times: u - a
                                            })
                                        }
                                    }
                            return t
                        }
                        _getResultMaxSpan(e) {
                            if (!e.LookupResults || 0 === e.LookupResults.length) return [];
                            let t = null,
                                n = null,
                                r = [];
                            for (let i = 0; i <= 99; i++) t = i < 10 ? `0${i}` : `${i}`, n = e.LookupResults.filter((e => e.Number === t)).sort(((e, t) => t.Times - e.Times))[0], r.push({
                                Number: t,
                                Times: n ? n.Times : 0,
                                Position: n ? n.Index : [-1, -1]
                            });
                            return r
                        }
                        _getWinNumbers(e) {
                            const t = [];
                            let r = null,
                                i = null;
                            for (let s of e.lotteryResult) r = e.type === n.Duoi ? s.slice(-2) : s.slice(0, 2), i = t.find((e => e.Number === r)), i ? i.Frequence += 1 : t.push({
                                Number: r,
                                Frequence: 1
                            });
                            return t
                        }
                        _getNothernIndexes() {
                            const e = [];
                            for (let t = 0; t < 107; t++) {
                                for (let n = 0; n < t; n++) e.push([t, n]);
                                for (let n = t + 1; n < 107; n++) e.push([t, n])
                            }
                            return e
                        }
                        _getSouthernIndexes() {
                            const e = [];
                            for (let t = 0; t < 82; t++) {
                                for (let n = 0; n < t; n++) e.push([t, n]);
                                for (let n = t + 1; n < 82; n++) e.push([t, n])
                            }
                            return e
                        }
                    },
                    function(e) {
                        e[e.Dau = -1] = "Dau", e[e.Duoi = 1] = "Duoi"
                    }(n || (n = {}))
            },
            6236: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/result-stats/player/times-drawn`
                    }
                    async getMissing(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/missing?gameType=${e.GameType}&statsType=${e.StatsType}`)
                    }
                }
            },
            4502: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/terms/player`
                    }
                    async latest() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/latest`)
                    }
                }
            },
            4664: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.LotusClass = void 0;
                const i = r(n(2271)),
                    s = r(n(1892)),
                    o = r(n(8594)),
                    a = r(n(5068)),
                    u = r(n(6611)),
                    l = r(n(2025)),
                    c = r(n(1876)),
                    f = r(n(7178)),
                    d = r(n(9614)),
                    h = r(n(3148)),
                    p = r(n(940)),
                    g = r(n(626));
                t.LotusClass = class {
                    constructor() {
                        this.config = {
                            Urls: {}
                        }, this.restClient = new o.default, this.realtimeClient = new s.default, this.user = new i.default, this.lottery = new a.default, this.wmCasino = new u.default, this.reporting = new l.default, this.communication = new c.default, this.public = new f.default, this.lottery789 = new d.default, this.senCasino = new h.default, this.saba = new p.default, this.telegram = new g.default
                    }
                    configure(e) {
                        const t = e && e || {};
                        this.config = Object.assign({}, this.config, t), this.restClient.configClient(), this.realtimeClient.configure()
                    }
                    get Realtime() {
                        return this.realtimeClient
                    }
                    get RestClient() {
                        return this.restClient
                    }
                    get User() {
                        return this.user
                    }
                    get Lottery() {
                        return this.lottery
                    }
                    get WMCasino() {
                        return this.wmCasino
                    }
                    get Reporting() {
                        return this.reporting
                    }
                    get Communication() {
                        return this.communication
                    }
                    get Public() {
                        return this.public
                    }
                    get Lottery789() {
                        return this.lottery789
                    }
                    get SenCasino() {
                        return this.senCasino
                    }
                    get Saba() {
                        return this.saba
                    }
                    get Telegram() {
                        return this.telegram
                    }
                    get Config() {
                        return this.config
                    }
                }
            },
            5284: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(7570));
                t.default = class {
                    constructor() {
                        this.notification = new i.default
                    }
                    get Notification() {
                        return this.notification
                    }
                }
            },
            7570: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Communication}/notifications/public/notification`
                    }
                    async latest() {
                        return await r.Lotus.Public.RestClient.get(`${this.baseUrl}/latest`)
                    }
                }
            },
            1909: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(1370)),
                    s = r(n(6014));
                t.default = class {
                    constructor() {
                        this.lotteryResult = new s.default, this.odds = new i.default
                    }
                    get Odds() {
                        return this.odds
                    }
                    get LotteryResult() {
                        return this.lotteryResult
                    }
                }
            },
            6014: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/lottery-results/public/`
                    }
                    async getResultsByDate(e) {
                        return await r.Lotus.Public.RestClient.get(`${this.baseUrl}?date=${e.Date}`)
                    }
                }
            },
            1370: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery}/odds/public`
                    }
                    async getOdds(e) {
                        if (!e.GameTypes || !e.BetTypes) return [];
                        const t = [];
                        return e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.Public.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async getLiveOdds(e) {
                        return await r.Lotus.Public.RestClient.get(`${this.baseUrl}/live?gameType=${e.GameType}&betType=${e.BetType}`)
                    }
                }
            },
            2411: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(6316)),
                    s = r(n(504));
                t.default = class {
                    constructor() {
                        this.lotteryResult = new s.default, this.odds = new i.default
                    }
                    get Odds() {
                        return this.odds
                    }
                    get LotteryResult() {
                        return this.lotteryResult
                    }
                }
            },
            504: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/lottery-results/public/`
                    }
                    async getResultsByDate(e) {
                        const t = [`date=${e.Date}`];
                        return e.GameTypes.forEach((e => {
                            t.push(`gameTypes=${e}`)
                        })), await r.Lotus.Public.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async getLatestResultByGameType(e) {
                        return await r.Lotus.Public.RestClient.get(`${this.baseUrl}/latest?gameType=${e.GameType}`)
                    }
                }
            },
            6316: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Lottery789}/odds/public`
                    }
                    async getOdds(e) {
                        if (!e.BetTypes) return [];
                        const t = [`gameType=${e.GameType}`];
                        return e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.Public.RestClient.get(`${this.baseUrl}?${t.join("&")}`)
                    }
                    async getLiveOdds(e) {
                        const t = [`gameType=${e.GameType}`];
                        return e.BetTypes.forEach((e => {
                            t.push(`betTypes=${e}`)
                        })), await r.Lotus.Public.RestClient.get(`${this.baseUrl}/live?${t.join("&")}`)
                    }
                }
            },
            7178: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(1909)),
                    s = r(n(5284)),
                    o = r(n(9327)),
                    a = r(n(1842)),
                    u = r(n(2411)),
                    l = r(n(6484));
                t.default = class {
                    constructor() {
                        this.restClient = new o.default, this.lottery = new i.default, this.lottery789 = new u.default, this.communication = new s.default, this.wmCasino = new a.default, this.saba = new l.default
                    }
                    get Lottery() {
                        return this.lottery
                    }
                    get Lottery789() {
                        return this.lottery789
                    }
                    get Communication() {
                        return this.communication
                    }
                    get WMCasino() {
                        return this.wmCasino
                    }
                    get Saba() {
                        return this.saba
                    }
                    get RestClient() {
                        return this.restClient
                    }
                }
            },
            3546: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/game-play/public`
                    }
                    async getUrl(e) {
                        return await r.Lotus.Public.RestClient.post(`${this.baseUrl}/url`, e)
                    }
                }
            },
            6484: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(3546));
                t.default = class {
                    constructor() {
                        this.gamePlay = new i.default
                    }
                    get GamePlay() {
                        return this.gamePlay
                    }
                }
            },
            3750: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/games/public/game-play`
                    }
                    async loginGame(e) {
                        return await r.Lotus.Public.RestClient.post(`${this.baseUrl}/login-game`, {
                            AccessGame: e.AccessGame,
                            ReturnUrl: e.ReturnUrl
                        })
                    }
                }
            },
            1842: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(3750));
                t.default = class {
                    constructor() {
                        this.gamePlay = new i.default
                    }
                    get GamePlay() {
                        return this.gamePlay
                    }
                }
            },
            1892: function(e, t, n) {
                "use strict";
                var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
                        void 0 === r && (r = n);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, r, i)
                    } : function(e, t, n, r) {
                        void 0 === r && (r = n), e[r] = t[n]
                    }),
                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    s = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && r(t, e, n);
                        return i(t, e), t
                    },
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const a = s(n(9350)),
                    u = o(n(4774)),
                    l = n(4478);
                class c extends u.default {
                    constructor() {
                        super()
                    }
                    async connect() {
                        if (!l.Lotus.User.isAuthenticated) throw new Error("Please authenticate before connecting to server");
                        this.client = new a.Realtime({
                            autoConnect: !1,
                            authCallback: async (e, t) => {
                                t(null, await l.Lotus.User.Current.getAblyToken())
                            },
                            disconnectedRetryTimeout: 3e3,
                            suspendedRetryTimeout: 5e3
                        }), this.client.connect()
                    }
                }
                t.default = c
            },
            2025: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(189));
                t.default = class {
                    constructor() {
                        this.statement = new i.default
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            189: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Reporting}/statements/player/statements`
                    }
                    async getReportByProductionDate(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return Array.isArray(e.ProductTypes) && e.ProductTypes.length && e.ProductTypes.forEach((e => {
                            t.push(`productTypes=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/production-date?${t.join("&")}`)
                    }
                }
            },
            8594: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(440)),
                    s = n(4478);
                class o extends i.default {
                    constructor() {
                        super()
                    }
                    useAuthorizationInterceptor() {
                        this.authorizationInterceptor = this.axiosInstance.interceptors.request.use((async e => {
                            const t = await s.Lotus.User.Current.getSession();
                            return null != t && (e.headers.Authorization = "Bearer " + t.getIdToken().getJwtToken()), e
                        }))
                    }
                }
                t.default = o
            },
            9185: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/game-play/player`
                    }
                    async login(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/login`, e)
                    }
                }
            },
            4325: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.League = void 0;
                const r = n(4478);
                t.League = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/league`
                    }
                    async getLeagueName(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/name?leagueId=${e.LeagueId}`)
                    }
                }
            },
            5880: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Match = void 0;
                const r = n(4478);
                t.Match = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/match`
                    }
                    async getMatchDetails(e) {
                        const t = [];
                        return e.MatchIds.forEach((e => {
                            t.push(`matchId=${e}`)
                        })), await r.Lotus.RestClient.get(`${this.baseUrl}/details?${t.join("&")}`)
                    }
                }
            },
            7030: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(6569));
                t.default = class {
                    constructor() {
                        this.statement = new i.default
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            6569: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/reports/statements`
                    }
                    get playerBaseUrl() {
                        return `${this.baseUrl}/player`
                    }
                    async getReportGroupBySportGroup(e) {
                        return await r.Lotus.RestClient.get(`${this.playerBaseUrl}/sport-group?date=${e.Date}`)
                    }
                    async getBetItems(e) {
                        const t = [`date=${e.Date}`, `sportGroup=${e.SportGroup}`];
                        return e.LastTx > 0 && t.push(`lastTx=${e.LastTx}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.playerBaseUrl}/bet-items?${t.join("&")}`)
                    }
                    async getSystemParlayDetails(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/parlay/system-parlay?refNo=${e.RefNo}`)
                    }
                    async getRNGBetItems(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/rng/bet-items?refNo=${e.RefNo}`)
                    }
                }
            },
            940: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(9185)),
                    s = n(4325),
                    o = n(5880),
                    a = r(n(7030)),
                    u = n(418),
                    l = r(n(7119));
                t.default = class {
                    constructor() {
                        this.gamePlay = new i.default, this.wallet = new l.default, this.report = new a.default, this.league = new s.League, this.team = new u.Team, this.match = new o.Match
                    }
                    get GamePlay() {
                        return this.gamePlay
                    }
                    get Wallet() {
                        return this.wallet
                    }
                    get Report() {
                        return this.report
                    }
                    get Match() {
                        return this.match
                    }
                    get Team() {
                        return this.team
                    }
                    get League() {
                        return this.league
                    }
                }
            },
            418: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Team = void 0;
                const r = n(4478);
                t.Team = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/team`
                    }
                    async getTeamName(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/name?teamId=${e.TeamId}`)
                    }
                }
            },
            7119: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Saba}/games/wallet/player`
                    }
                    async getBalance() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/balance`)
                    }
                    async transferBalance(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/transfer-balance`, e)
                    }
                }
            },
            7423: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(1046)),
                    s = r(n(8962));
                t.default = class {
                    constructor() {
                        this._sedieGame = new s.default, this._politics = new i.default
                    }
                    get Sedie() {
                        return this._sedieGame
                    }
                    get Politics() {
                        return this._politics
                    }
                }
            },
            513: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/events/player`
                    }
                    async getEvent() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/event`)
                    }
                }
            },
            8067: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/game-play/player`
                    }
                    async play(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/play`, e)
                    }
                }
            },
            4673: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/events/player`
                    }
                    async getOdds() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/odds`)
                    }
                }
            },
            1046: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(513)),
                    s = r(n(4673)),
                    o = r(n(2846)),
                    a = r(n(8067)),
                    u = n(4478),
                    l = r(n(3605)),
                    c = r(n(175));
                t.default = class {
                    constructor() {
                        this._event = new i.default, this._odds = new s.default, this._userGame = new o.default, this._gamePlay = new a.default, this._report = new l.default
                    }
                    get Event() {
                        return this._event
                    }
                    get Odds() {
                        return this._odds
                    }
                    get UserGame() {
                        return this._userGame
                    }
                    get GamePlay() {
                        return this._gamePlay
                    }
                    get Report() {
                        return this._report
                    }
                    get Realtime() {
                        if (null == u.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == u.Lotus.Realtime.Client.auth || !u.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this._politicsRealtime || (this._politicsRealtime = new c.default), this._politicsRealtime
                    }
                }
            },
            175: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187);
                class i extends r.EventEmitter {
                    constructor() {
                        super()
                    }
                    configure() {}
                    async subcribe(e) {}
                    async unsubscribe() {}
                }
                t.default = i
            },
            3605: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/reports/player/statements`
                    }
                    async getBetItemsByEvent(e) {
                        const t = [`event=${e.Event}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items-by-event?${t.join("&")}`)
                    }
                    async getBetItems(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                }
            },
            2846: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Politics}/events/player`
                    }
                    async getUserGame() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/user-game`)
                    }
                }
            },
            2889: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/game-play/player/game-play`
                    }
                    async join(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/join`, e)
                    }
                    async leave(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/leave`, e)
                    }
                    async play(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/play`, e)
                    }
                }
            },
            3542: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/games/player/parameters`
                    }
                    async getParameters() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/list`)
                    }
                }
            },
            5521: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Games.Sedie}/reports/player/statements`
                    }
                    async getBetItems(e) {
                        const t = [`from=${e.From}`, `to=${e.To}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                }
            },
            8962: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(3542)),
                    s = r(n(2889)),
                    o = r(n(8413)),
                    a = n(4478),
                    u = r(n(5521));
                t.default = class {
                    constructor() {
                        this._parameter = new i.default, this._gamePlay = new s.default, this._report = new u.default
                    }
                    get Parameter() {
                        return this._parameter
                    }
                    get GamePlay() {
                        return this._gamePlay
                    }
                    get Report() {
                        return this._report
                    }
                    get Realtime() {
                        if (null == a.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == a.Lotus.Realtime.Client.auth || !a.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this._sedieRealtime || (this._sedieRealtime = new o.default), this._sedieRealtime
                    }
                }
            },
            8413: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    i = n(4478),
                    s = n(9641),
                    o = n(8659);
                class a extends r.EventEmitter {
                    constructor() {
                        super()
                    }
                    configure() {}
                    async subcribe(e) {
                        this.areaChannel = i.Lotus.Realtime.Client.channels.get(`${s.RealtimeChannelName.PRODUCTION_SEN_CASINO_GAMETYPE_AREANUMBER}:${o.GameType.Sedie}:${e.AreaNumber}`), this.areaChannel.subscribe((t => {
                            this.emit(`area:${e.AreaNumber}:event:${t.name}`, t.data, t)
                        }))
                    }
                    async unsubscribe() {
                        null !== this.areaChannel && this.areaChannel.unsubscribe()
                    }
                }
                t.default = a
            },
            3233: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(5322));
                t.default = class {
                    constructor() {
                        this.statement = new i.default
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            5322: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/reports/player/statements`
                    }
                    async getReportGroupByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`)
                    }
                }
            },
            3148: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(7423)),
                    s = r(n(5365)),
                    o = r(n(3233));
                t.default = class {
                    constructor() {
                        this._games = new i.default, this._userGame = new s.default, this._report = new o.default
                    }
                    get Games() {
                        return this._games
                    }
                    get UserGame() {
                        return this._userGame
                    }
                    get Report() {
                        return this._report
                    }
                }
            },
            5365: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.SenCasino.Base}/games/player/user-games`
                    }
                    async updateDefaultBetLimit(e) {
                        return await r.Lotus.RestClient.put(`${this.baseUrl}/default-bet-limit`, e)
                    }
                }
            },
            626: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.TelegramChatApp}`
                    }
                    async generateLink() {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/generate-link`)
                    }
                    async unlink() {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/unlink`)
                    }
                }
            },
            271: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(2509)),
                    s = n(4478);
                class o extends i.default {
                    constructor(e) {
                        super({
                            username: e.username,
                            storage: e.storage,
                            userPoolId: s.Lotus.Config.UserPoolId,
                            userPoolClientId: s.Lotus.Config.UserPoolClientId,
                            advancedSecurityDataCollectionFlag: s.Lotus.Config.AdvancedSecurityDataCollectionFlag
                        })
                    }
                    async authenticate(e) {
                        return await this.authenticateInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/auth/sign-in`,
                            username: e.username,
                            password: e.password
                        })
                    }
                    async authTelegram(e) {
                        return await this.authTelegramInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.TelegramChatApp}/sign-in`,
                            initData: e.initData
                        })
                    }
                    async completeNewPassword(e) {
                        return await this.completeNewPasswordInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/auth/complete-new-password`,
                            newPassword: e.newPassword
                        })
                    }
                    async confirmSignIn(e) {
                        return await this.confirmSignInInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/auth/confirm-sign-in`,
                            code: e.code
                        })
                    }
                    async getAblyToken() {
                        return await s.Lotus.RestClient.post(`${s.Lotus.Config.Urls.Identity}/auth/realtime`)
                    }
                    async profile(e) {
                        return await this.profileInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/users/profile`,
                            bypassCache: e.bypassCache
                        })
                    }
                    async changePassword(e) {
                        const t = this.signInUserSession.getAccessToken().getJwtToken();
                        return await s.Lotus.RestClient.put(`${s.Lotus.Config.Urls.Identity}/users/password`, {
                            AccessToken: t,
                            Password: e.password,
                            NewPassword: e.newPassword
                        })
                    }
                    async changePreferredUsername(e) {
                        const t = this.signInUserSession.getAccessToken().getJwtToken();
                        return await s.Lotus.RestClient.put(`${s.Lotus.Config.Urls.Identity}/users/preferred-username`, {
                            AccessToken: t,
                            NewName: e.name
                        })
                    }
                    async checkPreferredUsername(e) {
                        return await s.Lotus.RestClient.post(`${s.Lotus.Config.Urls.Identity}/users/check-preferred-username`, {
                            PreferredUsername: e.name
                        })
                    }
                    async refreshSession(e) {
                        return await this.refreshSessionInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/auth/refresh-token`,
                            refreshToken: e
                        })
                    }
                    async generateTOTPSecretCode() {
                        return this.generateTOTPSecretCodeInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/mfa/generate-totp-secret-code`
                        })
                    }
                    async enableMFA(e) {
                        return this.enableMFAInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/mfa/enable`,
                            code: e.code
                        })
                    }
                    async disableMFA(e) {
                        return this.disableMFAInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/mfa/disable`,
                            code: e.code
                        })
                    }
                    async updateProfile(e) {
                        return await s.Lotus.RestClient.put(`${s.Lotus.Config.Urls.Identity}/users/profile`, {
                            FullName: e.fullName,
                            About: e.about
                        })
                    }
                    async signOut() {
                        s.Lotus.User && s.Lotus.User.Realtime && s.Lotus.User.Realtime.unsubscribe(), s.Lotus.Lottery && s.Lotus.Lottery.Realtime && s.Lotus.Lottery.Realtime.unsubscribe(), s.Lotus.Lottery789 && s.Lotus.Lottery789.Realtime && s.Lotus.Lottery789.Realtime.unsubscribe(), s.Lotus.SenCasino && s.Lotus.SenCasino.Games.Sedie.Realtime && s.Lotus.SenCasino.Games.Sedie.Realtime.unsubscribe();
                        const e = this.signInUserSession.getAccessToken().getJwtToken();
                        null != e && await super.signOutInternal(s.Lotus.RestClient, {
                            url: `${s.Lotus.Config.Urls.Identity}/auth/sign-out`,
                            accessToken: e
                        })
                    }
                }
                t.default = o
            },
            2271: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(1115)),
                    s = r(n(271)),
                    o = r(n(7021)),
                    a = n(4478),
                    u = r(n(9031)),
                    l = r(n(1519));
                t.default = class {
                    constructor() {
                        this.cognitorUser = null, this.sessionValid = !1, this.storage = (new i.default).getStorage(), this.wallet = new l.default
                    }
                    get Wallet() {
                        return this.wallet
                    }
                    get Current() {
                        if (!this.cognitorUser) throw new Error("Current user is not instance. Please check authentication firstly.");
                        if (!1 === this.sessionValid) throw new Error("Please sign in before using User.Current");
                        return this.cognitorUser
                    }
                    async authenticate(e) {
                        const t = new s.default({
                                username: e.username,
                                storage: this.storage
                            }),
                            n = await t.authenticate({
                                username: e.username,
                                password: e.password
                            });
                        return this.cognitorUser = t, this.sessionValid = !1, n instanceof o.default ? (this.sessionValid = n.isValid(), {}) : n
                    }
                    async authTelegram(e) {
                        const t = new s.default({
                                username: "",
                                storage: this.storage
                            }),
                            n = await t.authTelegram({
                                initData: e.initData
                            });
                        return this.cognitorUser = t, this.sessionValid = !1, n instanceof o.default ? (this.sessionValid = n.isValid(), {}) : n
                    }
                    async completeNewPassword(e) {
                        if (!this.cognitorUser || !0 === this.sessionValid) throw new Error("Cannot use completeNewPassword() at this context.");
                        const t = await this.cognitorUser.completeNewPassword({
                            newPassword: e.newPassword
                        });
                        return t instanceof o.default ? (this.sessionValid = t.isValid(), {}) : t
                    }
                    async confirmSignIn(e) {
                        if (!this.cognitorUser || !0 === this.sessionValid) throw new Error("Cannot use confirmSignIn() at this context.");
                        const t = await this.cognitorUser.confirmSignIn({
                            code: e.code
                        });
                        return t instanceof o.default ? (this.sessionValid = t.isValid(), {}) : t
                    }
                    async isAuthenticated() {
                        try {
                            const e = "Lotus.LastAuthUser",
                                t = this.storage.getItem(e);
                            if (!t) return !1;
                            if (null !== this.cognitorUser && !0 === this.sessionValid) return await this.cognitorUser.getSession(), !0;
                            const n = new s.default({
                                username: t,
                                storage: this.storage
                            });
                            return await n.getSession(), this.cognitorUser = n, this.sessionValid = !0, !0
                        } catch (e) {
                            return !1
                        }
                    }
                    get Realtime() {
                        if (null == a.Lotus.Realtime.Client) throw new Error("Realtime client is null");
                        if (null == a.Lotus.Realtime.Client.auth || !a.Lotus.Realtime.Client.auth.clientId) throw new Error("Access denied: Authorize to realtime");
                        return this.realtime || (this.realtime = new u.default), this.realtime
                    }
                }
            },
            9031: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(7187),
                    i = n(9641),
                    s = n(4478);
                class o extends r.EventEmitter {
                    constructor() {
                        super(), this.generalNotificationChannel = null, this.selfChannel = null, this.ancestorsChannels = []
                    }
                    configure() {}
                    async subcribe() {
                        const e = (await s.Lotus.User.Current.getSession()).getIdToken().getUserPath();
                        e ? this.subscribeAncestorsChannels({
                            ancestors: e.split(",")
                        }) : console.error("KhÃ´ng tÃ¬m tháº¥y thÃ´ng tin cá»§a tÃ i khoáº£n "), this.subscribeSelfChannel(), this.subscribeGeneralChannel()
                    }
                    subscribeAncestorsChannels(e) {
                        let t = null;
                        const n = e.ancestors.filter((e => e.length > 0)).slice(1);
                        for (let e = 0; e < n.length; e++) n[e] && (t = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.IDENTITY_ANCESTOR_USERID}:${n[e]}`), t.subscribe((e => {
                            this.emit(`${i.RealtimeLocalChannelName.ANCESTOR}:event:${e.name}`, e.data, e)
                        })), this.ancestorsChannels.push(t))
                    }
                    subscribeSelfChannel() {
                        this.selfChannel = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.SELF}:${s.Lotus.Realtime.Client.auth.clientId}`), this.selfChannel.subscribe((e => {
                            this.emit(`${i.RealtimeLocalChannelName.SELF}:event:${e.name}`, e.data, e), console.log(`event=${e.name} data=${JSON.stringify(e.data)}`)
                        }))
                    }
                    subscribeGeneralChannel() {
                        this.generalNotificationChannel = s.Lotus.Realtime.Client.channels.get(`${i.RealtimeChannelName.GENERAL_NOTIFICATION_SECTION_PLAYER}`), this.generalNotificationChannel.subscribe((e => {
                            this.emit(`${i.RealtimeLocalChannelName.GENERAL}:event:${e.name}`, e.data), console.log(`event=${e.name} data=${JSON.stringify(e.data)}`)
                        }))
                    }
                    async unsubscribe() {
                        null !== this.selfChannel && this.selfChannel.detach(), null !== this.generalNotificationChannel && this.generalNotificationChannel.detach(), null !== this.ancestorsChannels && this.ancestorsChannels.forEach((e => {
                            e.detach()
                        }))
                    }
                }
                t.default = o
            },
            1519: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.Identity}/wallets/player`
                    }
                    async getWallet() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/my-wallet`)
                    }
                    async getBalance() {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/my-wallet/balance`)
                    }
                }
            },
            2687: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/games/player/game-play`
                    }
                    async loginGame(e) {
                        return await r.Lotus.RestClient.post(`${this.baseUrl}/login-game`, {
                            AccessGame: e.AccessGame,
                            ReturnUrl: e.ReturnUrl
                        })
                    }
                }
            },
            2615: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(7173));
                t.default = class {
                    constructor() {
                        this.statement = new i.default
                    }
                    get Statement() {
                        return this.statement
                    }
                }
            },
            7173: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const r = n(4478);
                t.default = class {
                    constructor() {}
                    get baseUrl() {
                        return `${r.Lotus.Config.Urls.WMCasino}/reports/player/statements`
                    }
                    async getReportGroupByGameType(e) {
                        return await r.Lotus.RestClient.get(`${this.baseUrl}/game-type?date=${e.Date}`)
                    }
                    async getBetItems(e) {
                        const t = [`date=${e.Date}`, `gameType=${e.GameType}`];
                        return e.LastId && t.push(`lastId=${e.LastId}`), e.Limit > 0 && t.push(`limit=${e.Limit}`), await r.Lotus.RestClient.get(`${this.baseUrl}/bet-items?${t.join("&")}`)
                    }
                }
            },
            6611: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = r(n(2687)),
                    s = r(n(2615));
                t.default = class {
                    constructor() {
                        this.gamePlay = new i.default, this.report = new s.default
                    }
                    get GamePlay() {
                        return this.gamePlay
                    }
                    get Report() {
                        return this.report
                    }
                }
            },
            4478: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.AdjustingTimer = t.Lotus = void 0;
                const r = n(4664),
                    i = n(6104);
                Object.defineProperty(t, "AdjustingTimer", {
                    enumerable: !0,
                    get: function() {
                        return i.AdjustingTimer
                    }
                });
                let s = null;
                s || (s = new r.LotusClass);
                const o = s;
                t.Lotus = o
            },
            7218: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                const {
                    toString: i
                } = Object.prototype, {
                    getPrototypeOf: s
                } = Object, o = (a = Object.create(null), e => {
                    const t = i.call(e);
                    return a[t] || (a[t] = t.slice(8, -1).toLowerCase())
                });
                var a;
                const u = e => (e = e.toLowerCase(), t => o(t) === e),
                    l = e => t => typeof t === e,
                    {
                        isArray: c
                    } = Array,
                    f = l("undefined");
                const d = u("ArrayBuffer");
                const h = l("string"),
                    p = l("function"),
                    g = l("number"),
                    m = e => null !== e && "object" == typeof e,
                    y = e => {
                        if ("object" !== o(e)) return !1;
                        const t = s(e);
                        return !(null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t) || Symbol.toStringTag in e || Symbol.iterator in e)
                    },
                    v = u("Date"),
                    _ = u("File"),
                    b = u("Blob"),
                    w = u("FileList"),
                    C = u("URLSearchParams");

                function R(e, t, {
                    allOwnKeys: n = !1
                } = {}) {
                    if (null == e) return;
                    let r, i;
                    if ("object" != typeof e && (e = [e]), c(e))
                        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
                    else {
                        const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                            s = i.length;
                        let o;
                        for (r = 0; r < s; r++) o = i[r], t.call(null, e[o], o, e)
                    }
                }

                function T(e, t) {
                    t = t.toLowerCase();
                    const n = Object.keys(e);
                    let r, i = n.length;
                    for (; i-- > 0;)
                        if (r = n[i], t === r.toLowerCase()) return r;
                    return null
                }
                const O = "undefined" == typeof self ? void 0 === n.g ? void 0 : n.g : self,
                    S = e => !f(e) && e !== O;
                const A = (L = "undefined" != typeof Uint8Array && s(Uint8Array), e => L && e instanceof L);
                var L;
                const I = u("HTMLFormElement"),
                    E = (({
                        hasOwnProperty: e
                    }) => (t, n) => e.call(t, n))(Object.prototype),
                    k = u("RegExp"),
                    M = (e, t) => {
                        const n = Object.getOwnPropertyDescriptors(e),
                            r = {};
                        R(n, ((n, i) => {
                            !1 !== t(n, i, e) && (r[i] = n)
                        })), Object.defineProperties(e, r)
                    };
                var D = {
                    isArray: c,
                    isArrayBuffer: d,
                    isBuffer: function(e) {
                        return null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && p(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                    },
                    isFormData: e => {
                        const t = "[object FormData]";
                        return e && ("function" == typeof FormData && e instanceof FormData || i.call(e) === t || p(e.toString) && e.toString() === t)
                    },
                    isArrayBufferView: function(e) {
                        let t;
                        return t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && d(e.buffer), t
                    },
                    isString: h,
                    isNumber: g,
                    isBoolean: e => !0 === e || !1 === e,
                    isObject: m,
                    isPlainObject: y,
                    isUndefined: f,
                    isDate: v,
                    isFile: _,
                    isBlob: b,
                    isRegExp: k,
                    isFunction: p,
                    isStream: e => m(e) && p(e.pipe),
                    isURLSearchParams: C,
                    isTypedArray: A,
                    isFileList: w,
                    forEach: R,
                    merge: function e() {
                        const {
                            caseless: t
                        } = S(this) && this || {}, n = {}, r = (r, i) => {
                            const s = t && T(n, i) || i;
                            y(n[s]) && y(r) ? n[s] = e(n[s], r) : y(r) ? n[s] = e({}, r) : c(r) ? n[s] = r.slice() : n[s] = r
                        };
                        for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && R(arguments[e], r);
                        return n
                    },
                    extend: (e, t, n, {
                        allOwnKeys: i
                    } = {}) => (R(t, ((t, i) => {
                        n && p(t) ? e[i] = r(t, n) : e[i] = t
                    }), {
                        allOwnKeys: i
                    }), e),
                    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                    inherits: (e, t, n, r) => {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                            value: t.prototype
                        }), n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: (e, t, n, r) => {
                        let i, o, a;
                        const u = {};
                        if (t = t || {}, null == e) return t;
                        do {
                            for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) a = i[o], r && !r(a, e, t) || u[a] || (t[a] = e[a], u[a] = !0);
                            e = !1 !== n && s(e)
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: o,
                    kindOfTest: u,
                    endsWith: (e, t, n) => {
                        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                        const r = e.indexOf(t, n);
                        return -1 !== r && r === n
                    },
                    toArray: e => {
                        if (!e) return null;
                        if (c(e)) return e;
                        let t = e.length;
                        if (!g(t)) return null;
                        const n = new Array(t);
                        for (; t-- > 0;) n[t] = e[t];
                        return n
                    },
                    forEachEntry: (e, t) => {
                        const n = (e && e[Symbol.iterator]).call(e);
                        let r;
                        for (;
                            (r = n.next()) && !r.done;) {
                            const n = r.value;
                            t.call(e, n[0], n[1])
                        }
                    },
                    matchAll: (e, t) => {
                        let n;
                        const r = [];
                        for (; null !== (n = e.exec(t));) r.push(n);
                        return r
                    },
                    isHTMLForm: I,
                    hasOwnProperty: E,
                    hasOwnProp: E,
                    reduceDescriptors: M,
                    freezeMethods: e => {
                        M(e, ((t, n) => {
                            if (p(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                            const r = e[n];
                            p(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                                throw Error("Can not rewrite read-only method '" + n + "'")
                            }))
                        }))
                    },
                    toObjectSet: (e, t) => {
                        const n = {},
                            r = e => {
                                e.forEach((e => {
                                    n[e] = !0
                                }))
                            };
                        return c(e) ? r(e) : r(String(e).split(t)), n
                    },
                    toCamelCase: e => e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                        return t.toUpperCase() + n
                    })),
                    noop: () => {},
                    toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
                    findKey: T,
                    global: O,
                    isContextDefined: S,
                    toJSONObject: e => {
                        const t = new Array(10),
                            n = (e, r) => {
                                if (m(e)) {
                                    if (t.indexOf(e) >= 0) return;
                                    if (!("toJSON" in e)) {
                                        t[r] = e;
                                        const i = c(e) ? [] : {};
                                        return R(e, ((e, t) => {
                                            const s = n(e, r + 1);
                                            !f(s) && (i[t] = s)
                                        })), t[r] = void 0, i
                                    }
                                }
                                return e
                            };
                        return n(e, 0)
                    }
                };

                function P(e, t, n, r, i) {
                    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
                }
                D.inherits(P, Error, {
                    toJSON: function() {
                        return {
                            message: this.message,
                            name: this.name,
                            description: this.description,
                            number: this.number,
                            fileName: this.fileName,
                            lineNumber: this.lineNumber,
                            columnNumber: this.columnNumber,
                            stack: this.stack,
                            config: D.toJSONObject(this.config),
                            code: this.code,
                            status: this.response && this.response.status ? this.response.status : null
                        }
                    }
                });
                const U = P.prototype,
                    B = {};
                ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
                    B[e] = {
                        value: e
                    }
                })), Object.defineProperties(P, B), Object.defineProperty(U, "isAxiosError", {
                    value: !0
                }), P.from = (e, t, n, r, i, s) => {
                    const o = Object.create(U);
                    return D.toFlatObject(e, o, (function(e) {
                        return e !== Error.prototype
                    }), (e => "isAxiosError" !== e)), P.call(o, e.message, t, n, r, i), o.cause = e, o.name = e.name, s && Object.assign(o, s), o
                };
                var x = "object" == typeof self ? self.FormData : window.FormData;

                function N(e) {
                    return D.isPlainObject(e) || D.isArray(e)
                }

                function j(e) {
                    return D.endsWith(e, "[]") ? e.slice(0, -2) : e
                }

                function G(e, t, n) {
                    return e ? e.concat(t).map((function(e, t) {
                        return e = j(e), !n && t ? "[" + e + "]" : e
                    })).join(n ? "." : "") : t
                }
                const $ = D.toFlatObject(D, {}, null, (function(e) {
                    return /^is[A-Z]/.test(e)
                }));

                function F(e, t, n) {
                    if (!D.isObject(e)) throw new TypeError("target must be an object");
                    t = t || new(x || FormData);
                    const r = (n = D.toFlatObject(n, {
                            metaTokens: !0,
                            dots: !1,
                            indexes: !1
                        }, !1, (function(e, t) {
                            return !D.isUndefined(t[e])
                        }))).metaTokens,
                        i = n.visitor || c,
                        s = n.dots,
                        o = n.indexes,
                        a = (n.Blob || "undefined" != typeof Blob && Blob) && ((u = t) && D.isFunction(u.append) && "FormData" === u[Symbol.toStringTag] && u[Symbol.iterator]);
                    var u;
                    if (!D.isFunction(i)) throw new TypeError("visitor must be a function");

                    function l(e) {
                        if (null === e) return "";
                        if (D.isDate(e)) return e.toISOString();
                        if (!a && D.isBlob(e)) throw new P("Blob is not supported. Use a Buffer instead.");
                        return D.isArrayBuffer(e) || D.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
                    }

                    function c(e, n, i) {
                        let a = e;
                        if (e && !i && "object" == typeof e)
                            if (D.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
                            else if (D.isArray(e) && function(e) {
                                return D.isArray(e) && !e.some(N)
                            }(e) || D.isFileList(e) || D.endsWith(n, "[]") && (a = D.toArray(e))) return n = j(n), a.forEach((function(e, r) {
                            !D.isUndefined(e) && null !== e && t.append(!0 === o ? G([n], r, s) : null === o ? n : n + "[]", l(e))
                        })), !1;
                        return !!N(e) || (t.append(G(i, n, s), l(e)), !1)
                    }
                    const f = [],
                        d = Object.assign($, {
                            defaultVisitor: c,
                            convertValue: l,
                            isVisitable: N
                        });
                    if (!D.isObject(e)) throw new TypeError("data must be an object");
                    return function e(n, r) {
                        if (!D.isUndefined(n)) {
                            if (-1 !== f.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                            f.push(n), D.forEach(n, (function(n, s) {
                                !0 === (!(D.isUndefined(n) || null === n) && i.call(t, n, D.isString(s) ? s.trim() : s, r, d)) && e(n, r ? r.concat(s) : [s])
                            })), f.pop()
                        }
                    }(e), t
                }

                function q(e) {
                    const t = {
                        "!": "%21",
                        "'": "%27",
                        "(": "%28",
                        ")": "%29",
                        "~": "%7E",
                        "%20": "+",
                        "%00": "\0"
                    };
                    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
                        return t[e]
                    }))
                }

                function H(e, t) {
                    this._pairs = [], e && F(e, this, t)
                }
                const V = H.prototype;

                function z(e) {
                    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
                }

                function W(e, t, n) {
                    if (!t) return e;
                    const r = n && n.encode || z,
                        i = n && n.serialize;
                    let s;
                    if (s = i ? i(t, n) : D.isURLSearchParams(t) ? t.toString() : new H(t, n).toString(r), s) {
                        const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + s
                    }
                    return e
                }
                V.append = function(e, t) {
                    this._pairs.push([e, t])
                }, V.toString = function(e) {
                    const t = e ? function(t) {
                        return e.call(this, t, q)
                    } : q;
                    return this._pairs.map((function(e) {
                        return t(e[0]) + "=" + t(e[1])
                    }), "").join("&")
                };
                var J = class {
                        constructor() {
                            this.handlers = []
                        }
                        use(e, t, n) {
                            return this.handlers.push({
                                fulfilled: e,
                                rejected: t,
                                synchronous: !!n && n.synchronous,
                                runWhen: n ? n.runWhen : null
                            }), this.handlers.length - 1
                        }
                        eject(e) {
                            this.handlers[e] && (this.handlers[e] = null)
                        }
                        clear() {
                            this.handlers && (this.handlers = [])
                        }
                        forEach(e) {
                            D.forEach(this.handlers, (function(t) {
                                null !== t && e(t)
                            }))
                        }
                    },
                    K = {
                        silentJSONParsing: !0,
                        forcedJSONParsing: !0,
                        clarifyTimeoutError: !1
                    },
                    X = "undefined" != typeof URLSearchParams ? URLSearchParams : H,
                    Q = FormData;
                const Y = (() => {
                        let e;
                        return ("undefined" == typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && ("undefined" != typeof window && "undefined" != typeof document)
                    })(),
                    Z = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts;
                var ee = {
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: X,
                        FormData: Q,
                        Blob
                    },
                    isStandardBrowserEnv: Y,
                    isStandardBrowserWebWorkerEnv: Z,
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                };

                function te(e) {
                    function t(e, n, r, i) {
                        let s = e[i++];
                        const o = Number.isFinite(+s),
                            a = i >= e.length;
                        if (s = !s && D.isArray(r) ? r.length : s, a) return D.hasOwnProp(r, s) ? r[s] = [r[s], n] : r[s] = n, !o;
                        r[s] && D.isObject(r[s]) || (r[s] = []);
                        return t(e, n, r[s], i) && D.isArray(r[s]) && (r[s] = function(e) {
                            const t = {},
                                n = Object.keys(e);
                            let r;
                            const i = n.length;
                            let s;
                            for (r = 0; r < i; r++) s = n[r], t[s] = e[s];
                            return t
                        }(r[s])), !o
                    }
                    if (D.isFormData(e) && D.isFunction(e.entries)) {
                        const n = {};
                        return D.forEachEntry(e, ((e, r) => {
                            t(function(e) {
                                return D.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                            }(e), r, n, 0)
                        })), n
                    }
                    return null
                }
                const ne = {
                    "Content-Type": void 0
                };
                const re = {
                    transitional: K,
                    adapter: ["xhr", "http"],
                    transformRequest: [function(e, t) {
                        const n = t.getContentType() || "",
                            r = n.indexOf("application/json") > -1,
                            i = D.isObject(e);
                        i && D.isHTMLForm(e) && (e = new FormData(e));
                        if (D.isFormData(e)) return r && r ? JSON.stringify(te(e)) : e;
                        if (D.isArrayBuffer(e) || D.isBuffer(e) || D.isStream(e) || D.isFile(e) || D.isBlob(e)) return e;
                        if (D.isArrayBufferView(e)) return e.buffer;
                        if (D.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                        let s;
                        if (i) {
                            if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                                return F(e, new ee.classes.URLSearchParams, Object.assign({
                                    visitor: function(e, t, n, r) {
                                        return ee.isNode && D.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                                    }
                                }, t))
                            }(e, this.formSerializer).toString();
                            if ((s = D.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                                const t = this.env && this.env.FormData;
                                return F(s ? {
                                    "files[]": e
                                } : e, t && new t, this.formSerializer)
                            }
                        }
                        return i || r ? (t.setContentType("application/json", !1), function(e, t, n) {
                            if (D.isString(e)) try {
                                return (t || JSON.parse)(e), D.trim(e)
                            } catch (e) {
                                if ("SyntaxError" !== e.name) throw e
                            }
                            return (n || JSON.stringify)(e)
                        }(e)) : e
                    }],
                    transformResponse: [function(e) {
                        const t = this.transitional || re.transitional,
                            n = t && t.forcedJSONParsing,
                            r = "json" === this.responseType;
                        if (e && D.isString(e) && (n && !this.responseType || r)) {
                            const n = !(t && t.silentJSONParsing) && r;
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                if (n) {
                                    if ("SyntaxError" === e.name) throw P.from(e, P.ERR_BAD_RESPONSE, this, null, this.response);
                                    throw e
                                }
                            }
                        }
                        return e
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: ee.classes.FormData,
                        Blob: ee.classes.Blob
                    },
                    validateStatus: function(e) {
                        return e >= 200 && e < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                D.forEach(["delete", "get", "head"], (function(e) {
                    re.headers[e] = {}
                })), D.forEach(["post", "put", "patch"], (function(e) {
                    re.headers[e] = D.merge(ne)
                }));
                var ie = re;
                const se = D.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
                const oe = Symbol("internals");

                function ae(e) {
                    return e && String(e).trim().toLowerCase()
                }

                function ue(e) {
                    return !1 === e || null == e ? e : D.isArray(e) ? e.map(ue) : String(e)
                }

                function le(e, t, n, r) {
                    return D.isFunction(r) ? r.call(this, t, n) : D.isString(t) ? D.isString(r) ? -1 !== t.indexOf(r) : D.isRegExp(r) ? r.test(t) : void 0 : void 0
                }
                class ce {
                    constructor(e) {
                        e && this.set(e)
                    }
                    set(e, t, n) {
                        const r = this;

                        function i(e, t, n) {
                            const i = ae(t);
                            if (!i) throw new Error("header name must be a non-empty string");
                            const s = D.findKey(r, i);
                            (!s || void 0 === r[s] || !0 === n || void 0 === n && !1 !== r[s]) && (r[s || t] = ue(e))
                        }
                        const s = (e, t) => D.forEach(e, ((e, n) => i(e, n, t)));
                        return D.isPlainObject(e) || e instanceof this.constructor ? s(e, t) : D.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z]+$/.test(e.trim()) ? s((e => {
                            const t = {};
                            let n, r, i;
                            return e && e.split("\n").forEach((function(e) {
                                i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !n || t[n] && se[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                            })), t
                        })(e), t) : null != e && i(t, e, n), this
                    }
                    get(e, t) {
                        if (e = ae(e)) {
                            const n = D.findKey(this, e);
                            if (n) {
                                const e = this[n];
                                if (!t) return e;
                                if (!0 === t) return function(e) {
                                    const t = Object.create(null),
                                        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                    let r;
                                    for (; r = n.exec(e);) t[r[1]] = r[2];
                                    return t
                                }(e);
                                if (D.isFunction(t)) return t.call(this, e, n);
                                if (D.isRegExp(t)) return t.exec(e);
                                throw new TypeError("parser must be boolean|regexp|function")
                            }
                        }
                    }
                    has(e, t) {
                        if (e = ae(e)) {
                            const n = D.findKey(this, e);
                            return !(!n || t && !le(0, this[n], n, t))
                        }
                        return !1
                    }
                    delete(e, t) {
                        const n = this;
                        let r = !1;

                        function i(e) {
                            if (e = ae(e)) {
                                const i = D.findKey(n, e);
                                !i || t && !le(0, n[i], i, t) || (delete n[i], r = !0)
                            }
                        }
                        return D.isArray(e) ? e.forEach(i) : i(e), r
                    }
                    clear() {
                        return Object.keys(this).forEach(this.delete.bind(this))
                    }
                    normalize(e) {
                        const t = this,
                            n = {};
                        return D.forEach(this, ((r, i) => {
                            const s = D.findKey(n, i);
                            if (s) return t[s] = ue(r), void delete t[i];
                            const o = e ? function(e) {
                                return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                            }(i) : String(i).trim();
                            o !== i && delete t[i], t[o] = ue(r), n[o] = !0
                        })), this
                    }
                    concat(...e) {
                        return this.constructor.concat(this, ...e)
                    }
                    toJSON(e) {
                        const t = Object.create(null);
                        return D.forEach(this, ((n, r) => {
                            null != n && !1 !== n && (t[r] = e && D.isArray(n) ? n.join(", ") : n)
                        })), t
                    } [Symbol.iterator]() {
                        return Object.entries(this.toJSON())[Symbol.iterator]()
                    }
                    toString() {
                        return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
                    }
                    get[Symbol.toStringTag]() {
                        return "AxiosHeaders"
                    }
                    static from(e) {
                        return e instanceof this ? e : new this(e)
                    }
                    static concat(e, ...t) {
                        const n = new this(e);
                        return t.forEach((e => n.set(e))), n
                    }
                    static accessor(e) {
                        const t = (this[oe] = this[oe] = {
                                accessors: {}
                            }).accessors,
                            n = this.prototype;

                        function r(e) {
                            const r = ae(e);
                            t[r] || (! function(e, t) {
                                const n = D.toCamelCase(" " + t);
                                ["get", "set", "has"].forEach((r => {
                                    Object.defineProperty(e, r + n, {
                                        value: function(e, n, i) {
                                            return this[r].call(this, t, e, n, i)
                                        },
                                        configurable: !0
                                    })
                                }))
                            }(n, e), t[r] = !0)
                        }
                        return D.isArray(e) ? e.forEach(r) : r(e), this
                    }
                }
                ce.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent"]), D.freezeMethods(ce.prototype), D.freezeMethods(ce);
                var fe = ce;

                function de(e, t) {
                    const n = this || ie,
                        r = t || n,
                        i = fe.from(r.headers);
                    let s = r.data;
                    return D.forEach(e, (function(e) {
                        s = e.call(n, s, i.normalize(), t ? t.status : void 0)
                    })), i.normalize(), s
                }

                function he(e) {
                    return !(!e || !e.__CANCEL__)
                }

                function pe(e, t, n) {
                    P.call(this, null == e ? "canceled" : e, P.ERR_CANCELED, t, n), this.name = "CanceledError"
                }
                D.inherits(pe, P, {
                    __CANCEL__: !0
                });
                var ge = ee.isStandardBrowserEnv ? {
                    write: function(e, t, n, r, i, s) {
                        const o = [];
                        o.push(e + "=" + encodeURIComponent(t)), D.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), D.isString(r) && o.push("path=" + r), D.isString(i) && o.push("domain=" + i), !0 === s && o.push("secure"), document.cookie = o.join("; ")
                    },
                    read: function(e) {
                        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove: function(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write: function() {},
                    read: function() {
                        return null
                    },
                    remove: function() {}
                };

                function me(e, t) {
                    return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
                        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                    }(e, t) : t
                }
                var ye = ee.isStandardBrowserEnv ? function() {
                    const e = /(msie|trident)/i.test(navigator.userAgent),
                        t = document.createElement("a");
                    let n;

                    function r(n) {
                        let r = n;
                        return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
                            href: t.href,
                            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                            host: t.host,
                            search: t.search ? t.search.replace(/^\?/, "") : "",
                            hash: t.hash ? t.hash.replace(/^#/, "") : "",
                            hostname: t.hostname,
                            port: t.port,
                            pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                        }
                    }
                    return n = r(window.location.href),
                        function(e) {
                            const t = D.isString(e) ? r(e) : e;
                            return t.protocol === n.protocol && t.host === n.host
                        }
                }() : function() {
                    return !0
                };

                function ve(e, t) {
                    let n = 0;
                    const r = function(e, t) {
                        e = e || 10;
                        const n = new Array(e),
                            r = new Array(e);
                        let i, s = 0,
                            o = 0;
                        return t = void 0 !== t ? t : 1e3,
                            function(a) {
                                const u = Date.now(),
                                    l = r[o];
                                i || (i = u), n[s] = a, r[s] = u;
                                let c = o,
                                    f = 0;
                                for (; c !== s;) f += n[c++], c %= e;
                                if (s = (s + 1) % e, s === o && (o = (o + 1) % e), u - i < t) return;
                                const d = l && u - l;
                                return d ? Math.round(1e3 * f / d) : void 0
                            }
                    }(50, 250);
                    return i => {
                        const s = i.loaded,
                            o = i.lengthComputable ? i.total : void 0,
                            a = s - n,
                            u = r(a);
                        n = s;
                        const l = {
                            loaded: s,
                            total: o,
                            progress: o ? s / o : void 0,
                            bytes: a,
                            rate: u || void 0,
                            estimated: u && o && s <= o ? (o - s) / u : void 0,
                            event: i
                        };
                        l[t ? "download" : "upload"] = !0, e(l)
                    }
                }
                const _e = {
                    http: null,
                    xhr: "undefined" != typeof XMLHttpRequest && function(e) {
                        return new Promise((function(t, n) {
                            let r = e.data;
                            const i = fe.from(e.headers).normalize(),
                                s = e.responseType;
                            let o;

                            function a() {
                                e.cancelToken && e.cancelToken.unsubscribe(o), e.signal && e.signal.removeEventListener("abort", o)
                            }
                            D.isFormData(r) && (ee.isStandardBrowserEnv || ee.isStandardBrowserWebWorkerEnv) && i.setContentType(!1);
                            let u = new XMLHttpRequest;
                            if (e.auth) {
                                const t = e.auth.username || "",
                                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                                i.set("Authorization", "Basic " + btoa(t + ":" + n))
                            }
                            const l = me(e.baseURL, e.url);

                            function c() {
                                if (!u) return;
                                const r = fe.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
                                ! function(e, t, n) {
                                    const r = n.config.validateStatus;
                                    n.status && r && !r(n.status) ? t(new P("Request failed with status code " + n.status, [P.ERR_BAD_REQUEST, P.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                                }((function(e) {
                                    t(e), a()
                                }), (function(e) {
                                    n(e), a()
                                }), {
                                    data: s && "text" !== s && "json" !== s ? u.response : u.responseText,
                                    status: u.status,
                                    statusText: u.statusText,
                                    headers: r,
                                    config: e,
                                    request: u
                                }), u = null
                            }
                            if (u.open(e.method.toUpperCase(), W(l, e.params, e.paramsSerializer), !0), u.timeout = e.timeout, "onloadend" in u ? u.onloadend = c : u.onreadystatechange = function() {
                                    u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(c)
                                }, u.onabort = function() {
                                    u && (n(new P("Request aborted", P.ECONNABORTED, e, u)), u = null)
                                }, u.onerror = function() {
                                    n(new P("Network Error", P.ERR_NETWORK, e, u)), u = null
                                }, u.ontimeout = function() {
                                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                                    const r = e.transitional || K;
                                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new P(t, r.clarifyTimeoutError ? P.ETIMEDOUT : P.ECONNABORTED, e, u)), u = null
                                }, ee.isStandardBrowserEnv) {
                                const t = (e.withCredentials || ye(l)) && e.xsrfCookieName && ge.read(e.xsrfCookieName);
                                t && i.set(e.xsrfHeaderName, t)
                            }
                            void 0 === r && i.setContentType(null), "setRequestHeader" in u && D.forEach(i.toJSON(), (function(e, t) {
                                u.setRequestHeader(t, e)
                            })), D.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && "json" !== s && (u.responseType = e.responseType), "function" == typeof e.onDownloadProgress && u.addEventListener("progress", ve(e.onDownloadProgress, !0)), "function" == typeof e.onUploadProgress && u.upload && u.upload.addEventListener("progress", ve(e.onUploadProgress)), (e.cancelToken || e.signal) && (o = t => {
                                u && (n(!t || t.type ? new pe(null, e, u) : t), u.abort(), u = null)
                            }, e.cancelToken && e.cancelToken.subscribe(o), e.signal && (e.signal.aborted ? o() : e.signal.addEventListener("abort", o)));
                            const f = function(e) {
                                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                                return t && t[1] || ""
                            }(l);
                            f && -1 === ee.protocols.indexOf(f) ? n(new P("Unsupported protocol " + f + ":", P.ERR_BAD_REQUEST, e)) : u.send(r || null)
                        }))
                    }
                };
                D.forEach(_e, ((e, t) => {
                    if (e) {
                        try {
                            Object.defineProperty(e, "name", {
                                value: t
                            })
                        } catch (e) {}
                        Object.defineProperty(e, "adapterName", {
                            value: t
                        })
                    }
                }));
                var be = e => {
                    e = D.isArray(e) ? e : [e];
                    const {
                        length: t
                    } = e;
                    let n, r;
                    for (let i = 0; i < t && (n = e[i], !(r = D.isString(n) ? _e[n.toLowerCase()] : n)); i++);
                    if (!r) {
                        if (!1 === r) throw new P(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
                        throw new Error(D.hasOwnProp(_e, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
                    }
                    if (!D.isFunction(r)) throw new TypeError("adapter is not a function");
                    return r
                };

                function we(e) {
                    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new pe(null, e)
                }

                function Ce(e) {
                    we(e), e.headers = fe.from(e.headers), e.data = de.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
                    return be(e.adapter || ie.adapter)(e).then((function(t) {
                        return we(e), t.data = de.call(e, e.transformResponse, t), t.headers = fe.from(t.headers), t
                    }), (function(t) {
                        return he(t) || (we(e), t && t.response && (t.response.data = de.call(e, e.transformResponse, t.response), t.response.headers = fe.from(t.response.headers))), Promise.reject(t)
                    }))
                }
                const Re = e => e instanceof fe ? e.toJSON() : e;

                function Te(e, t) {
                    t = t || {};
                    const n = {};

                    function r(e, t, n) {
                        return D.isPlainObject(e) && D.isPlainObject(t) ? D.merge.call({
                            caseless: n
                        }, e, t) : D.isPlainObject(t) ? D.merge({}, t) : D.isArray(t) ? t.slice() : t
                    }

                    function i(e, t, n) {
                        return D.isUndefined(t) ? D.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
                    }

                    function s(e, t) {
                        if (!D.isUndefined(t)) return r(void 0, t)
                    }

                    function o(e, t) {
                        return D.isUndefined(t) ? D.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
                    }

                    function a(n, i, s) {
                        return s in t ? r(n, i) : s in e ? r(void 0, n) : void 0
                    }
                    const u = {
                        url: s,
                        method: s,
                        data: s,
                        baseURL: o,
                        transformRequest: o,
                        transformResponse: o,
                        paramsSerializer: o,
                        timeout: o,
                        timeoutMessage: o,
                        withCredentials: o,
                        adapter: o,
                        responseType: o,
                        xsrfCookieName: o,
                        xsrfHeaderName: o,
                        onUploadProgress: o,
                        onDownloadProgress: o,
                        decompress: o,
                        maxContentLength: o,
                        maxBodyLength: o,
                        beforeRedirect: o,
                        transport: o,
                        httpAgent: o,
                        httpsAgent: o,
                        cancelToken: o,
                        socketPath: o,
                        responseEncoding: o,
                        validateStatus: a,
                        headers: (e, t) => i(Re(e), Re(t), !0)
                    };
                    return D.forEach(Object.keys(e).concat(Object.keys(t)), (function(r) {
                        const s = u[r] || i,
                            o = s(e[r], t[r], r);
                        D.isUndefined(o) && s !== a || (n[r] = o)
                    })), n
                }
                const Oe = "1.2.1",
                    Se = {};
                ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
                    Se[e] = function(n) {
                        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                    }
                }));
                const Ae = {};
                Se.transitional = function(e, t, n) {
                    function r(e, t) {
                        return "[Axios v1.2.1] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                    }
                    return (n, i, s) => {
                        if (!1 === e) throw new P(r(i, " has been removed" + (t ? " in " + t : "")), P.ERR_DEPRECATED);
                        return t && !Ae[i] && (Ae[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, s)
                    }
                };
                var Le = {
                    assertOptions: function(e, t, n) {
                        if ("object" != typeof e) throw new P("options must be an object", P.ERR_BAD_OPTION_VALUE);
                        const r = Object.keys(e);
                        let i = r.length;
                        for (; i-- > 0;) {
                            const s = r[i],
                                o = t[s];
                            if (o) {
                                const t = e[s],
                                    n = void 0 === t || o(t, s, e);
                                if (!0 !== n) throw new P("option " + s + " must be " + n, P.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new P("Unknown option " + s, P.ERR_BAD_OPTION)
                        }
                    },
                    validators: Se
                };
                const Ie = Le.validators;
                class Ee {
                    constructor(e) {
                        this.defaults = e, this.interceptors = {
                            request: new J,
                            response: new J
                        }
                    }
                    request(e, t) {
                        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, t = Te(this.defaults, t);
                        const {
                            transitional: n,
                            paramsSerializer: r,
                            headers: i
                        } = t;
                        let s;
                        void 0 !== n && Le.assertOptions(n, {
                            silentJSONParsing: Ie.transitional(Ie.boolean),
                            forcedJSONParsing: Ie.transitional(Ie.boolean),
                            clarifyTimeoutError: Ie.transitional(Ie.boolean)
                        }, !1), void 0 !== r && Le.assertOptions(r, {
                            encode: Ie.function,
                            serialize: Ie.function
                        }, !0), t.method = (t.method || this.defaults.method || "get").toLowerCase(), s = i && D.merge(i.common, i[t.method]), s && D.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                            delete i[e]
                        })), t.headers = fe.concat(s, i);
                        const o = [];
                        let a = !0;
                        this.interceptors.request.forEach((function(e) {
                            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (a = a && e.synchronous, o.unshift(e.fulfilled, e.rejected))
                        }));
                        const u = [];
                        let l;
                        this.interceptors.response.forEach((function(e) {
                            u.push(e.fulfilled, e.rejected)
                        }));
                        let c, f = 0;
                        if (!a) {
                            const e = [Ce.bind(this), void 0];
                            for (e.unshift.apply(e, o), e.push.apply(e, u), c = e.length, l = Promise.resolve(t); f < c;) l = l.then(e[f++], e[f++]);
                            return l
                        }
                        c = o.length;
                        let d = t;
                        for (f = 0; f < c;) {
                            const e = o[f++],
                                t = o[f++];
                            try {
                                d = e(d)
                            } catch (e) {
                                t.call(this, e);
                                break
                            }
                        }
                        try {
                            l = Ce.call(this, d)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                        for (f = 0, c = u.length; f < c;) l = l.then(u[f++], u[f++]);
                        return l
                    }
                    getUri(e) {
                        return W(me((e = Te(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
                    }
                }
                D.forEach(["delete", "get", "head", "options"], (function(e) {
                    Ee.prototype[e] = function(t, n) {
                        return this.request(Te(n || {}, {
                            method: e,
                            url: t,
                            data: (n || {}).data
                        }))
                    }
                })), D.forEach(["post", "put", "patch"], (function(e) {
                    function t(t) {
                        return function(n, r, i) {
                            return this.request(Te(i || {}, {
                                method: e,
                                headers: t ? {
                                    "Content-Type": "multipart/form-data"
                                } : {},
                                url: n,
                                data: r
                            }))
                        }
                    }
                    Ee.prototype[e] = t(), Ee.prototype[e + "Form"] = t(!0)
                }));
                var ke = Ee;
                class Me {
                    constructor(e) {
                        if ("function" != typeof e) throw new TypeError("executor must be a function.");
                        let t;
                        this.promise = new Promise((function(e) {
                            t = e
                        }));
                        const n = this;
                        this.promise.then((e => {
                            if (!n._listeners) return;
                            let t = n._listeners.length;
                            for (; t-- > 0;) n._listeners[t](e);
                            n._listeners = null
                        })), this.promise.then = e => {
                            let t;
                            const r = new Promise((e => {
                                n.subscribe(e), t = e
                            })).then(e);
                            return r.cancel = function() {
                                n.unsubscribe(t)
                            }, r
                        }, e((function(e, r, i) {
                            n.reason || (n.reason = new pe(e, r, i), t(n.reason))
                        }))
                    }
                    throwIfRequested() {
                        if (this.reason) throw this.reason
                    }
                    subscribe(e) {
                        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                    }
                    unsubscribe(e) {
                        if (!this._listeners) return;
                        const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                    }
                    static source() {
                        let e;
                        return {
                            token: new Me((function(t) {
                                e = t
                            })),
                            cancel: e
                        }
                    }
                }
                var De = Me;
                const Pe = function e(t) {
                    const n = new ke(t),
                        i = r(ke.prototype.request, n);
                    return D.extend(i, ke.prototype, n, {
                        allOwnKeys: !0
                    }), D.extend(i, n, null, {
                        allOwnKeys: !0
                    }), i.create = function(n) {
                        return e(Te(t, n))
                    }, i
                }(ie);
                Pe.Axios = ke, Pe.CanceledError = pe, Pe.CancelToken = De, Pe.isCancel = he, Pe.VERSION = Oe, Pe.toFormData = F, Pe.AxiosError = P, Pe.Cancel = Pe.CanceledError, Pe.all = function(e) {
                    return Promise.all(e)
                }, Pe.spread = function(e) {
                    return function(t) {
                        return e.apply(null, t)
                    }
                }, Pe.isAxiosError = function(e) {
                    return D.isObject(e) && !0 === e.isAxiosError
                }, Pe.mergeConfig = Te, Pe.AxiosHeaders = fe, Pe.formToJSON = e => te(D.isHTMLForm(e) ? new FormData(e) : e), Pe.default = Pe, e.exports = Pe
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var s = t[r] = {
            exports: {}
        };
        return e[r].call(s.exports, s, s.exports, n), s.exports
    }
    return n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n(4478)
})()));